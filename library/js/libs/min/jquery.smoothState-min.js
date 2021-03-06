(function(factory) {
    "use strict";
    if (typeof module === "object" && typeof module.exports === "object") {
        factory(require("jquery"), window, document);
    } else {
        factory(jQuery, window, document);
    }
})(function($, window, document, undefined) {
    "use strict";
    if (!window.history.pushState) {
        $.fn.smoothState = function() {
            return this;
        };
        $.fn.smoothState.options = {};
        return;
    }
    if ($.fn.smoothState) {
        return;
    }
    var $body = $("html, body"), consl = window.console, defaults = {
        debug: false,
        anchors: "a",
        hrefRegex: "",
        forms: "form",
        allowFormCaching: false,
        repeatDelay: 500,
        blacklist: ".no-smoothState",
        prefetch: false,
        prefetchOn: "mouseover touchstart",
        prefetchBlacklist: ".no-prefetch",
        locationHeader: "X-SmoothState-Location",
        cacheLength: 0,
        loadingClass: "is-loading",
        scroll: true,
        alterRequest: function(request) {
            return request;
        },
        alterChangeState: function(state, title, url) {
            return state;
        },
        onBefore: function($currentTarget, $container) {},
        onStart: {
            duration: 0,
            render: function($container) {}
        },
        onProgress: {
            duration: 0,
            render: function($container) {}
        },
        onReady: {
            duration: 0,
            render: function($container, $newContent) {
                $container.html($newContent);
            }
        },
        onAfter: function($container, $newContent) {}
    }, utility = {
        isExternal: function(url) {
            var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
            if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== window.location.protocol) {
                return true;
            }
            if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(":(" + {
                "http:": 80,
                "https:": 443
            }[window.location.protocol] + ")?$"), "") !== window.location.host) {
                return true;
            }
            return false;
        },
        stripHash: function(href) {
            return href.replace(/#.*/, "");
        },
        isHash: function(href, prev) {
            prev = prev || window.location.href;
            var hasHash = href.indexOf("#") > -1 ? true : false, samePath = utility.stripHash(href) === utility.stripHash(prev) ? true : false;
            return hasHash && samePath;
        },
        translate: function(request) {
            var defaults = {
                dataType: "html",
                type: "GET"
            };
            if (typeof request === "string") {
                request = $.extend({}, defaults, {
                    url: request
                });
            } else {
                request = $.extend({}, defaults, request);
            }
            return request;
        },
        shouldLoadAnchor: function($anchor, blacklist, hrefRegex) {
            var href = $anchor.prop("href");
            return !utility.isExternal(href) && !utility.isHash(href) && !$anchor.is(blacklist) && !$anchor.prop("target") && (typeof hrefRegex === undefined || hrefRegex === "" || $anchor.prop("href").search(hrefRegex) !== -1);
        },
        clearIfOverCapacity: function(cache, cap) {
            if (!Object.keys) {
                Object.keys = function(obj) {
                    var keys = [], k;
                    for (k in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, k)) {
                            keys.push(k);
                        }
                    }
                    return keys;
                };
            }
            if (Object.keys(cache).length > cap) {
                cache = {};
            }
            return cache;
        },
        storePageIn: function(object, url, doc, id, state, destUrl) {
            var $html = $("<html></html>").append($(doc));
            if (typeof state === "undefined") {
                state = {};
            }
            if (typeof destUrl === "undefined") {
                destUrl = url;
            }
            object[url] = {
                status: "loaded",
                title: $html.find("title").first().text(),
                html: $html.find("#" + id),
                doc: doc,
                state: state,
                destUrl: destUrl
            };
            return object;
        },
        triggerAllAnimationEndEvent: function($element, resetOn) {
            resetOn = " " + resetOn || "";
            var animationCount = 0, animationstart = "animationstart webkitAnimationStart oanimationstart MSAnimationStart", animationend = "animationend webkitAnimationEnd oanimationend MSAnimationEnd", eventname = "allanimationend", onAnimationStart = function(e) {
                if ($(e.delegateTarget).is($element)) {
                    e.stopPropagation();
                    animationCount++;
                }
            }, onAnimationEnd = function(e) {
                if ($(e.delegateTarget).is($element)) {
                    e.stopPropagation();
                    animationCount--;
                    if (animationCount === 0) {
                        $element.trigger(eventname);
                    }
                }
            };
            $element.on(animationstart, onAnimationStart);
            $element.on(animationend, onAnimationEnd);
            $element.on("allanimationend" + resetOn, function() {
                animationCount = 0;
                utility.redraw($element);
            });
        },
        redraw: function($element) {
            $element.height();
        }
    }, onPopState = function(e) {
        if (e.state !== null) {
            var url = window.location.href, $page = $("#" + e.state.id), page = $page.data("smoothState"), diffUrl = page.href !== url && !utility.isHash(url, page.href), diffState = e.state !== page.cache[page.href].state;
            if (diffUrl || diffState) {
                if (diffState) {
                    page.clear(page.href);
                }
                page.load(url, false);
            }
        }
    }, Smoothstate = function(element, options) {
        var $container = $(element), elementId = $container.prop("id"), targetHash = null, isTransitioning = false, cache = {}, state = {}, currentHref = window.location.href, clear = function(url) {
            url = url || false;
            if (url && cache.hasOwnProperty(url)) {
                delete cache[url];
            } else {
                cache = {};
            }
            $container.data("smoothState").cache = cache;
        }, fetch = function(request, callback) {
            callback = callback || $.noop;
            var settings = utility.translate(request);
            cache = utility.clearIfOverCapacity(cache, options.cacheLength);
            if (cache.hasOwnProperty(settings.url) && typeof settings.data === "undefined") {
                return;
            }
            cache[settings.url] = {
                status: "fetching"
            };
            var ajaxRequest = $.ajax(settings);
            ajaxRequest.done(function(html) {
                utility.storePageIn(cache, settings.url, html, elementId);
                $container.data("smoothState").cache = cache;
            });
            ajaxRequest.fail(function() {
                cache[settings.url].status = "error";
            });
            if (options.locationHeader) {
                ajaxRequest.always(function(htmlOrXhr, status, errorOrXhr) {
                    var xhr = htmlOrXhr.statusCode ? htmlOrXhr : errorOrXhr, redirectedLocation = xhr.getResponseHeader(options.locationHeader);
                    if (redirectedLocation) {
                        cache[settings.url].destUrl = redirectedLocation;
                    }
                });
            }
            if (callback) {
                ajaxRequest.always(callback);
            }
        }, repositionWindow = function() {
            if (targetHash) {
                var $targetHashEl = $(targetHash, $container);
                if ($targetHashEl.length) {
                    var newPosition = $targetHashEl.offset().top;
                    $body.scrollTop(newPosition);
                }
                targetHash = null;
            }
        }, updateContent = function(url) {
            var containerId = "#" + elementId, $newContent = cache[url] ? $(cache[url].html.html()) : null;
            if ($newContent.length) {
                document.title = cache[url].title;
                var new_html = document.createElement("html");
                new_html.innerHTML = cache[url].doc;
                document.body.className = $(new_html).find("body")[0].className;
                $container.data("smoothState").href = url;
                if (options.loadingClass) {
                    $body.removeClass(options.loadingClass);
                }
                options.onReady.render($container, $newContent);
                $container.one("ss.onReadyEnd", function() {
                    isTransitioning = false;
                    options.onAfter($container, $newContent);
                    if (options.scroll) {
                        repositionWindow();
                    }
                    bindPrefetchHandlers($container);
                });
                window.setTimeout(function() {
                    $container.trigger("ss.onReadyEnd");
                }, options.onReady.duration);
            } else if (!$newContent && options.debug && consl) {
                consl.warn("No element with an id of " + containerId + " in response from " + url + " in " + cache);
            } else {
                window.location = url;
            }
        }, load = function(request, push, cacheResponse) {
            var settings = utility.translate(request);
            if (typeof push === "undefined") {
                push = true;
            }
            if (typeof cacheResponse === "undefined") {
                cacheResponse = true;
            }
            var hasRunCallback = false, callbBackEnded = false, responses = {
                loaded: function() {
                    var eventName = hasRunCallback ? "ss.onProgressEnd" : "ss.onStartEnd";
                    if (!callbBackEnded || !hasRunCallback) {
                        $container.one(eventName, function() {
                            updateContent(settings.url);
                            if (!cacheResponse) {
                                clear(settings.url);
                            }
                        });
                    } else if (callbBackEnded) {
                        updateContent(settings.url);
                    }
                    if (push) {
                        var destUrl = cache[settings.url].destUrl;
                        state = options.alterChangeState({
                            id: elementId
                        }, cache[settings.url].title, destUrl);
                        cache[settings.url].state = state;
                        window.history.pushState(state, cache[settings.url].title, destUrl);
                    }
                    if (callbBackEnded && !cacheResponse) {
                        clear(settings.url);
                    }
                },
                fetching: function() {
                    if (!hasRunCallback) {
                        hasRunCallback = true;
                        $container.one("ss.onStartEnd", function() {
                            if (options.loadingClass) {
                                $body.addClass(options.loadingClass);
                            }
                            options.onProgress.render($container);
                            window.setTimeout(function() {
                                $container.trigger("ss.onProgressEnd");
                                callbBackEnded = true;
                            }, options.onProgress.duration);
                        });
                    }
                    window.setTimeout(function() {
                        if (cache.hasOwnProperty(settings.url)) {
                            responses[cache[settings.url].status]();
                        }
                    }, 10);
                },
                error: function() {
                    if (options.debug && consl) {
                        consl.log("There was an error loading: " + settings.url);
                    } else {
                        window.location = settings.url;
                    }
                }
            };
            if (!cache.hasOwnProperty(settings.url)) {
                fetch(settings);
            }
            options.onStart.render($container);
            window.setTimeout(function() {
                if (options.scroll) {
                    $body.scrollTop(0);
                }
                $container.trigger("ss.onStartEnd");
            }, options.onStart.duration);
            responses[cache[settings.url].status]();
        }, hoverAnchor = function(event) {
            var request, $anchor = $(event.currentTarget);
            if (utility.shouldLoadAnchor($anchor, options.blacklist, options.hrefRegex) && !isTransitioning) {
                event.stopPropagation();
                request = utility.translate($anchor.prop("href"));
                request = options.alterRequest(request);
                fetch(request);
            }
        }, clickAnchor = function(event) {
            var $anchor = $(event.currentTarget);
            if (!event.metaKey && !event.ctrlKey && utility.shouldLoadAnchor($anchor, options.blacklist, options.hrefRegex)) {
                event.stopPropagation();
                event.preventDefault();
                if (!isRateLimited()) {
                    setRateLimitRepeatTime();
                    var request = utility.translate($anchor.prop("href"));
                    isTransitioning = true;
                    targetHash = $anchor.prop("hash");
                    request = options.alterRequest(request);
                    options.onBefore($anchor, $container);
                    load(request);
                }
            }
        }, submitForm = function(event) {
            var $form = $(event.currentTarget);
            if (!$form.is(options.blacklist)) {
                event.preventDefault();
                event.stopPropagation();
                if (!isRateLimited()) {
                    setRateLimitRepeatTime();
                    var request = {
                        url: $form.prop("action"),
                        data: $form.serialize(),
                        type: $form.prop("method")
                    };
                    isTransitioning = true;
                    request = options.alterRequest(request);
                    if (request.type.toLowerCase() === "get") {
                        request.url = request.url + "?" + request.data;
                    }
                    options.onBefore($form, $container);
                    load(request, undefined, options.allowFormCaching);
                }
            }
        }, rateLimitRepeatTime = 0, isRateLimited = function() {
            var isFirstClick = options.repeatDelay === null;
            var isDelayOver = parseInt(Date.now()) > rateLimitRepeatTime;
            return !(isFirstClick || isDelayOver);
        }, setRateLimitRepeatTime = function() {
            rateLimitRepeatTime = parseInt(Date.now()) + parseInt(options.repeatDelay);
        }, bindPrefetchHandlers = function($element) {
            if (options.anchors && options.prefetch) {
                $element.find(options.anchors).not(options.prefetchBlacklist).on(options.prefetchOn, null, hoverAnchor);
            }
        }, bindEventHandlers = function($element) {
            if (options.anchors) {
                $element.on("click", options.anchors, clickAnchor);
                bindPrefetchHandlers($element);
            }
            if (options.forms) {
                $element.on("submit", options.forms, submitForm);
            }
        }, restartCSSAnimations = function() {
            var classes = $container.prop("class");
            $container.removeClass(classes);
            utility.redraw($container);
            $container.addClass(classes);
        };
        options = $.extend({}, $.fn.smoothState.options, options);
        if (window.history.state === null) {
            state = options.alterChangeState({
                id: elementId
            }, document.title, currentHref);
            window.history.replaceState(state, document.title, currentHref);
        } else {
            state = {};
        }
        utility.storePageIn(cache, currentHref, document.documentElement.outerHTML, elementId, state);
        utility.triggerAllAnimationEndEvent($container, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd");
        bindEventHandlers($container);
        return {
            href: currentHref,
            cache: cache,
            clear: clear,
            load: load,
            fetch: fetch,
            restartCSSAnimations: restartCSSAnimations
        };
    }, declaresmoothState = function(options) {
        return this.each(function() {
            var tagname = this.tagName.toLowerCase();
            if (this.id && tagname !== "body" && tagname !== "html" && !$.data(this, "smoothState")) {
                $.data(this, "smoothState", new Smoothstate(this, options));
            } else if (!this.id && consl) {
                consl.warn("Every smoothState container needs an id but the following one does not have one:", this);
            } else if ((tagname === "body" || tagname === "html") && consl) {
                consl.warn("The smoothstate container cannot be the " + this.tagName + " tag");
            }
        });
    };
    window.onpopstate = onPopState;
    $.smoothStateUtility = utility;
    $.fn.smoothState = declaresmoothState;
    $.fn.smoothState.options = defaults;
});