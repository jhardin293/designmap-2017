var $j = jQuery.noConflict();

var firstLoad = true;

var image_src_regex = /url\(["']?([^'")]+)['"]?\)/;

var qode_root = "http://localhost:8888/designmap-2016";

function perPageBindings() {
    "use strict";
    $j(".qode_slider_preloader .ajax_loader_slider").hide();
    content = $j(".content_inner");
    if ($j(".landing_holder").length) {}
    if ($j(".landing_tour").length) {}
}

function ajaxSetActiveState(me) {
    "use strict";
    $j(".main_menu a, .mobile_menu a, .vertical_menu a, .popup_menu a").parent().removeClass("active current-menu-item");
    if (me.closest(".second").length === 0) {
        me.parent().addClass("active");
    } else {
        me.closest(".second").parent().addClass("active");
    }
    if (me.closest(".mobile_menu").length > 0) {
        me.parents(".mobile_menu .menu-item").addClass("active");
    }
    if (me.closest(".widget_nav_menu").length > 0) {
        $j(".widget_nav_menu ul.menu > li").removeClass("current-menu-item");
        me.closest(".widget_nav_menu").find(".menu-item").addClass("current-menu-item");
    }
    $j(".main_menu a, .mobile_menu a, .vertical_menu a, .popup_menu a").removeClass("current");
    me.addClass("current");
}

function setPageMeta(content) {
    "use strict";
    var newTitle = content.find(".meta .seo_title").text();
    document.title = newTitle;
    var newDescription = content.find(".meta .seo_description").text();
    var newKeywords = content.find(".meta .seo_keywords").text();
    if (newDescription != "" && newKeywords !== "") {
        $j('head meta[name="description"]').attr("content", newDescription);
        $j('head meta[name="keywords"]').attr("content", newKeywords);
    }
    var newBodyClasses = content.find(".meta .body_classes").text();
    var myArray = newBodyClasses.split(",");
    $j("body").removeClass();
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] !== "page_not_loaded") {
            $j("body").addClass(myArray[i]);
        }
    }
}

function setToolBarEditLink(content) {
    "use strict";
    if ($j("#wp-admin-bar-edit").length > 0) {
        var page_id = content.find("#qode_page_id").text();
        var old_link = $j("#wp-admin-bar-edit a").attr("href");
        var new_link = old_link.replace(/(post=).*?(&)/, "$1" + page_id + "$2");
        $j("#wp-admin-bar-edit a").attr("href", new_link);
    }
}

function balanceNavArrows() {
    "use strict";
    var navLinks;
    if ($j(".vertical_menu a").length) {
        navLinks = $j(".vertical_menu a");
    } else {
        navLinks = $j(".main_menu a");
    }
    var seenCurrent = false;
    navLinks.each(function(link) {
        var me = $j(link);
        if (me.hasClass("current")) {
            seenCurrent = true;
            return;
        }
        if (seenCurrent) {
            me.removeClass("up");
            me.removeClass("left");
            me.addClass("down");
            me.addClass("right");
        } else {
            me.removeClass("down");
            me.removeClass("right");
            me.addClass("up");
            me.addClass("left");
        }
    });
}

function callCallback(callbacks, name, self, args) {
    "use strict";
    if (callbacks[name]) {
        callbacks[name].apply(self, args);
    }
    $j(".paspartu_outer").removeAttr("style");
}

function slideOutOldPage(content, direction, direction2, animationTime, callbacks) {
    "use strict";
    var animation;
    if ($j(".content_inner").hasClass("updown")) {
        animation = "ajax_updown";
    } else if ($j(".content_inner").hasClass("fade")) {
        animation = "ajax_fade";
    } else if ($j(".content_inner").hasClass("updown_fade")) {
        animation = "ajax_updown_fade";
    } else if ($j(".content_inner").hasClass("leftright")) {
        animation = "ajax_leftright";
    } else if ($j("body").hasClass("ajax_updown")) {
        animation = "ajax_updown";
    } else if ($j("body").hasClass("ajax_fade")) {
        animation = "ajax_fade";
    } else if ($j("body").hasClass("ajax_updown_fade")) {
        animation = "ajax_updown_fade";
    } else if ($j("body").hasClass("ajax_leftright")) {
        animation = "ajax_leftright";
    }
    var contentHeight = content.height();
    var targetHeight = Math.max(contentHeight, $j(window).height());
    viewport.css("min-height", targetHeight);
    content.css({
        position: "relative",
        height: contentHeight
    });
    var windowWidth = $j(window).width();
    $j("html, body").animate({
        scrollTop: 0
    }, 400, function() {
        if ($j(".carousel").length) {
            $j(".carousel").carousel("pause");
        }
        if (animation === "ajax_updown") {
            var targetTop;
            if ("down" === direction) {
                targetTop = 0 - contentHeight;
            } else {
                targetTop = targetHeight;
            }
            content.stop().animate({
                top: targetTop
            }, animationTime, function() {
                $j(this).hide().remove();
                callCallback(callbacks, "oncomplete", null, []);
                $j(".ajax_loader").fadeIn();
            });
        } else if (animation === "ajax_fade" || animation === "ajax_updown_fade") {
            $j("header.page_header.ajax_header_animation .drop_down > ul > li").mouseout();
            $j("header.page_header.ajax_header_animation").delay(300).stop().fadeTo(animationTime, 0);
            content.delay(300).stop().fadeTo(animationTime, 0, function() {
                $j(this).hide().remove();
                callCallback(callbacks, "oncomplete", null, []);
                $j(".ajax_loader").fadeIn();
            });
        } else if (animation === "ajax_leftright") {
            var targetLeft;
            if ("left" === direction2) {
                targetLeft = 0 - windowWidth;
            } else {
                targetLeft = windowWidth;
            }
            content.stop().animate({
                left: targetLeft
            }, animationTime, function() {
                $j(this).hide().remove();
                callCallback(callbacks, "oncomplete", null, []);
                $j(".ajax_loader").fadeIn();
            });
        }
    });
    if ($j("#multiscroll-nav").length) {
        $j("#multiscroll-nav").remove();
    }
}

function slideInNewPage(text, direction, direction2, animationTime, callbacks, url) {
    "use strict";
    viewport.html("");
    var newHTML = $j(text);
    var animation;
    var header_style;
    if (newHTML.find(".content_inner").hasClass("updown")) {
        animation = "ajax_updown";
    } else if (newHTML.find(".content_inner").hasClass("fade")) {
        animation = "ajax_fade";
    } else if (newHTML.find(".content_inner").hasClass("updown_fade")) {
        animation = "ajax_updown_fade";
    } else if (newHTML.find(".content_inner").hasClass("leftright")) {
        animation = "ajax_leftright";
    } else if (newHTML.find(".content_inner").hasClass("no_animation")) {
        animation = "ajax_no_animation";
    } else if ($j("body").hasClass("ajax_updown")) {
        animation = "ajax_updown";
    } else if ($j("body").hasClass("ajax_fade")) {
        animation = "ajax_fade";
    } else if ($j("body").hasClass("ajax_updown_fade")) {
        animation = "ajax_updown_fade";
    } else if ($j("body").hasClass("ajax_leftright")) {
        animation = "ajax_leftright";
    }
    if (newHTML.find("header.page_header").hasClass("light")) {
        header_style = "light";
    } else if (newHTML.find("header.page_header").hasClass("dark")) {
        header_style = "dark";
    } else {
        header_style = header_style_admin;
    }
    var header_color;
    if (newHTML.find(".header_bottom").attr("style")) {
        header_color = newHTML.find(".header_bottom").attr("style");
    } else {
        header_color = "";
    }
    var header_color_top;
    if (newHTML.find(".header_top").attr("style")) {
        header_color_top = newHTML.find(".header_top").attr("style");
    } else {
        header_color_top = "";
    }
    var content_margin;
    if (newHTML.find(".content").hasClass("content_top_margin")) {
        content_margin = "content_top_margin";
    } else {
        content_margin = "";
    }
    var content_top_margin_none;
    if (newHTML.find(".content").hasClass("content_top_margin_none")) {
        content_top_margin_none = " content_top_margin_none";
    } else {
        content_top_margin_none = "";
    }
    var content_has_slider;
    if (newHTML.find(".content").hasClass("has_slider")) {
        content_has_slider = " has_slider";
    } else {
        content_has_slider = "";
    }
    var transparent = newHTML.find("header").hasClass("transparent") ? " transparent" : "";
    var header_style_on_scroll = newHTML.find("header").hasClass("header_style_on_scroll") ? " header_style_on_scroll" : "";
    var vertical_menu_background;
    if (newHTML.find("aside.vertical_menu_area").attr("style")) {
        vertical_menu_background = newHTML.find("aside.vertical_menu_area").attr("style");
    } else {
        vertical_menu_background = "";
    }
    var vertical_menu_background_image;
    if (newHTML.find("aside.vertical_menu_area .vertical_area_background").attr("style")) {
        vertical_menu_background_image = newHTML.find("aside.vertical_menu_area .vertical_area_background").attr("style");
    } else {
        vertical_menu_background_image = "";
    }
    var newContent = newHTML.find(".content_inner").hide().css({
        position: "relative",
        visibility: "hidden"
    }).show();
    newContent.find(".animate_title_text .title h1").css({
        visibility: "hidden"
    });
    viewport.append(newContent);
    $j(".side_menu_button a").removeClass("opened");
    newHTML.filter("script").each(function() {
        $j.globalEval(this.text || this.textContent || this.innerHTML || "");
    });
    newContent.waitForImages(function() {
        $j(".flexslider, .slider_small, .portfolio_outer").css("visibility", "visible");
        setPageMeta(newHTML);
        perPageBindings();
        var newHeight = newContent.height();
        if ($j(window).height() > newHeight) {
            viewport.css("min-height", newHeight);
        } else {
            viewport.css("min-height", $j(window).height());
        }
        $j(".paspartu_outer").css("min-height", newHeight);
        newContent.find(".animate_title_text .title h1").css({
            visibility: "visible"
        });
        var windowWidth = $j(window).width();
        if ($j("header.page_header").hasClass("light")) {
            if (header_style === "dark" || header_style === "") {
                $j("header").removeClass("light").addClass(header_style);
                $j("aside.vertical_menu_area").removeClass("light").addClass(header_style);
            }
        } else if ($j("header.page_header").hasClass("dark")) {
            if (header_style === "light" || header_style === "") {
                $j("header").removeClass("dark").addClass(header_style);
                $j("aside.vertical_menu_area").removeClass("dark").addClass(header_style);
            }
        } else if (header_style === "light" || header_style === "dark" || header_style === "") {
            $j("header.page_header").addClass(header_style);
            $j("aside.vertical_menu_area").addClass(header_style);
        } else {
            $j("header.page_header").removeClass("left right").addClass(header_style);
            $j("aside.vertical_menu_area").removeClass("left right").addClass(header_style);
        }
        if ($j(".carousel").length) {
            checkSliderForHeaderStyle($j(".carousel .active"));
        }
        if (header_color !== "") {
            $j(".header_bottom").attr("style", header_color);
        } else {
            $j(".header_bottom").removeAttr("style");
        }
        if (header_color_top !== "") {
            $j(".header_top").attr("style", header_color_top);
        } else {
            $j(".header_top").removeAttr("style");
        }
        if (content_margin !== "") {
            $j(".content").addClass(content_margin);
        } else {
            $j(".content").removeClass("content_top_margin");
        }
        if (content_top_margin_none !== "") {
            $j(".content").addClass(content_top_margin_none);
        } else {
            $j(".content").removeClass("content_top_margin_none");
        }
        if (content_has_slider !== "") {
            $j(".content").addClass(content_has_slider);
        } else {
            $j(".content").removeClass("has_slider");
        }
        if (transparent !== "") {
            $j("header").addClass(transparent);
        } else {
            $j("header").removeClass("transparent");
        }
        if (header_style_on_scroll !== "") {
            $j("header").addClass(header_style_on_scroll);
        } else {
            $j("header").removeClass("header_style_on_scroll");
        }
        if (vertical_menu_background !== "") {
            $j("aside.vertical_menu_area").attr("style", vertical_menu_background);
        } else {
            $j("aside.vertical_menu_area").removeAttr("style");
        }
        if (vertical_menu_background_image !== "") {
            $j("aside.vertical_menu_area .vertical_area_background").css("opacity", 0);
            var src = image_src_regex.exec(vertical_menu_background_image);
            var backImg = new Image();
            backImg.src = src[1];
            $j(backImg).load(function() {
                setTimeout(function() {
                    $j("aside.vertical_menu_area .vertical_area_background").attr("style", vertical_menu_background_image).css("opacity", 1);
                }, 600);
            });
        } else {
            $j("aside.vertical_menu_area .vertical_area_background").removeAttr("style");
        }
        var hash = "#" + url.split("#")[1];
        if ($j(".ajax_loader").length) {
            $j(".ajax_loader").fadeOut(400, function() {
                anchorAjaxScroll(hash);
            });
        } else {
            anchorAjaxScroll(hash);
        }
        if (animation === "ajax_updown" || animation === "ajax_updown_fade") {
            if ("down" === direction) {
                newContent.css({
                    top: viewport.height()
                });
            } else {
                newContent.css({
                    top: -newHeight
                });
            }
            if (animation === "ajax_updown_fade") {
                $j("header.page_header.ajax_header_animation .drop_down > ul > li").mouseout();
                $j("header.page_header.ajax_header_animation").stop().fadeTo(animationTime, 1);
            }
            newContent.css({
                visibility: "visible"
            }).stop().animate({
                top: 0
            }, animationTime, function() {
                initElementsAnimation();
                initFullScreenTemplate();
                initPortfolioSingleInfo();
                initTitleAreaAnimation();
                initSmallImageBlogHeight();
                $j(".blog_holder.masonry").isotope("layout");
                $j(".blog_holder.masonry_full_width").isotope("layout");
                $j(".q_masonry_blog").isotope("layout");
                $j(".content").css("min-height", $j(window).height() - $j("header.page_header").height() - $j("footer:not(.uncover)").height() + 100);
                if ($j("nav.content_menu").length > 0) {
                    content_menu_position = $j("nav.content_menu").offset().top;
                    contentMenuPosition();
                }
                initParallax();
                callCallback(callbacks, "oncomplete", null, []);
                $j(document).trigger("qodeAjaxPageLoad");
            });
        } else if (animation === "ajax_fade") {
            $j("header.page_header.ajax_header_animation .drop_down > ul > li").mouseout();
            $j("header.page_header.ajax_header_animation").stop().fadeTo(animationTime, 1);
            newContent.css({
                visibility: "visible",
                display: "none"
            }).stop().fadeTo(animationTime, 1, function() {
                initElementsAnimation();
                initFullScreenTemplate();
                initPortfolioSingleInfo();
                initTitleAreaAnimation();
                initSmallImageBlogHeight();
                $j(".blog_holder.masonry").isotope("layout");
                $j(".blog_holder.masonry_full_width").isotope("layout");
                $j(".q_masonry_blog").isotope("layout");
                $j(".content").css("min-height", $j(window).height() - $j("header.page_header").height() - $j("footer:not(.uncover)").height());
                if ($j("nav.content_menu").length > 0) {
                    content_menu_position = $j("nav.content_menu").offset().top;
                    contentMenuPosition();
                }
                initParallax();
                callCallback(callbacks, "oncomplete", null, []);
                $j(document).trigger("qodeAjaxPageLoad");
            });
        } else if (animation === "ajax_no_animation") {
            newContent.css({
                visibility: "visible",
                display: "none"
            }).stop().fadeIn(0, function() {
                initElementsAnimation();
                initFullScreenTemplate();
                initPortfolioSingleInfo();
                initTitleAreaAnimation();
                initSmallImageBlogHeight();
                $j(".blog_holder.masonry").isotope("layout");
                $j(".blog_holder.masonry_full_width").isotope("layout");
                $j(".q_masonry_blog").isotope("layout");
                $j(".content").css("min-height", $j(window).height() - $j("header.page_header").height() - $j("footer:not(.uncover)").height() + 100);
                if ($j("nav.content_menu").length > 0) {
                    content_menu_position = $j("nav.content_menu").offset().top;
                    contentMenuPosition();
                }
                initParallax();
                callCallback(callbacks, "oncomplete", null, []);
                $j(document).trigger("qodeAjaxPageLoad");
            });
        } else if (animation === "ajax_leftright") {
            if ("left" === direction2) {
                newContent.css({
                    left: windowWidth
                });
            } else {
                newContent.css({
                    left: -windowWidth
                });
            }
            newContent.css({
                visibility: "visible"
            }).stop().animate({
                left: 0
            }, animationTime, function() {
                initElementsAnimation();
                initFullScreenTemplate();
                initPortfolioSingleInfo();
                initTitleAreaAnimation();
                initSmallImageBlogHeight();
                $j(".blog_holder.masonry").isotope("layout");
                $j(".blog_holder.masonry_full_width").isotope("layout");
                $j(".q_masonry_blog").isotope("layout");
                $j(".content").css("min-height", $j(window).height() - $j("header.page_header").height() - $j("footer:not(.uncover)").height() + 100);
                if ($j("nav.content_menu").length > 0) {
                    content_menu_position = $j("nav.content_menu").offset().top;
                    contentMenuPosition();
                }
                initParallax();
                callCallback(callbacks, "oncomplete", null, []);
                $j(document).trigger("qodeAjaxPageLoad");
            });
        }
    });
    setToolBarEditLink(newHTML);
}

function anchorAjaxScroll(hash) {
    var scrollToAmount;
    var paspartuScrollAdd = $j("body").hasClass("paspartu_on_top_fixed") ? $window_width * paspartu_width : 0;
    if (hash !== undefined && $j('[data-q_id="' + hash + '"]').length > 0) {
        if ($window_width > 1e3) {
            if ($j("header.page_header").hasClass("fixed") && !$j("body").hasClass("vertical_menu_enabled")) {
                var top_header_height;
                if ($j("header.page_header").hasClass("scroll_top")) {
                    top_header_height = header_top_height;
                } else {
                    top_header_height = 0;
                }
                if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
                    if (header_height - ($j('[data-q_id="' + hash + '"]').offset().top + top_header_height) / 4 >= min_header_height_scroll) {
                        var diff_of_header_and_section = $j('[data-q_id="' + hash + '"]').offset().top - header_height - paspartuScrollAdd;
                        scrollToAmount = diff_of_header_and_section + diff_of_header_and_section / 4 + diff_of_header_and_section / 16 + diff_of_header_and_section / 64 + 1;
                    } else {
                        if ($j("header.page_header").hasClass("centered_logo")) {
                            scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_scroll - logo_height - 30 - paspartuScrollAdd;
                        } else {
                            scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_scroll - paspartuScrollAdd;
                        }
                    }
                } else {
                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
                }
            } else if ($j("header.page_header").hasClass("fixed_top_header") && !$j("body").hasClass("vertical_menu_enabled")) {
                if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - header_top_height - paspartuScrollAdd;
                } else {
                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
                }
            } else if ($j("header.page_header").hasClass("fixed_hiding") && !$j("body").hasClass("vertical_menu_enabled")) {
                if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
                    if ($j('[data-q_id="' + hash + '"]').offset().top - (header_height + logo_height / 2 + 40) <= scroll_amount_for_fixed_hiding) {
                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - header_height - logo_height / 2 - 40 - paspartuScrollAdd;
                    } else {
                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_fixed_hidden - 40 - paspartuScrollAdd;
                    }
                } else {
                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
                }
            } else if ($j("header.page_header").hasClass("stick") || $j("header.page_header").hasClass("stick_with_left_right_menu") && !$j("body").hasClass("vertical_menu_enabled")) {
                if (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) {
                    if (sticky_amount >= $j('[data-q_id="' + hash + '"]').offset().top) {
                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top + 1 - paspartuScrollAdd;
                    } else {
                        scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - min_header_height_sticky - paspartuScrollAdd;
                    }
                } else {
                    scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
                }
            } else {
                scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
            }
        } else {
            scrollToAmount = $j('[data-q_id="' + hash + '"]').offset().top - paspartuScrollAdd;
        }
        $j("html, body").animate({
            scrollTop: Math.round(scrollToAmount)
        }, 1500, function() {});
    }
}

function onLinkClicked(me) {
    "use strict";
    var url;
    if (me.attr("href") === undefined) {
        url = me.attr("value").split(qode_root)[1];
    } else {
        url = me.attr("href").split(qode_root)[1];
    }
    if (!me.hasClass("current")) {
        return loadResource(url);
    }
}

function loadResource(url) {
    "use strict";
    var me = $j("nav a[href='" + qode_root + url + "']");
    var animationTime = $j("body").hasClass("page_not_loaded") ? 0 : PAGE_TRANSITION_SPEED;
    var direction = me.hasClass("up") ? "up" : "down";
    var direction2 = me.hasClass("left") ? "left" : "right";
    var exitFinished = false;
    $j.ajax({
        url: qode_root + url,
        dataType: "html",
        async: true,
        success: function(text, status, request) {
            function insertNewPage() {
                if (!exitFinished) {
                    return window.setTimeout(insertNewPage, 100);
                }
                slideInNewPage(text, direction, direction2, animationTime, {
                    oncomplete: function() {
                        ajaxSetActiveState(me);
                    }
                }, url);
                balanceNavArrows();
            }
            insertNewPage();
            firstLoad = false;
            if (window.history.pushState) {
                var pageurl = qode_root + url;
                if (pageurl !== window.location) {
                    window.history.pushState({
                        path: pageurl
                    }, "", pageurl);
                }
                if (typeof _gaq !== "undefined") {
                    _gaq.push([ "_trackPageview", qode_root + url ]);
                }
            } else {
                document.location.href = qode_root + "#/" + url;
            }
        },
        error: function() {},
        statusCode: {
            404: function() {
                alert("Page not found!");
            }
        }
    });
    slideOutOldPage(content, direction, direction2, animationTime, {
        oncomplete: function() {
            exitFinished = true;
        }
    });
    if ($j("body").hasClass("page_not_loaded")) {
        $j("body").removeClass("page_not_loaded");
    }
}

if (window.history.pushState) {
    $j(window).bind("popstate", function() {
        "use strict";
        var url = location.href;
        url = url.split(qode_root)[1];
        if (!firstLoad) {
            loadResource(url);
        }
    });
}

var content;

var viewport;

var PAGE_TRANSITION_SPEED;

var disableHashChange = true;

$j(document).ready(function() {
    "use strict";
    PAGE_TRANSITION_SPEED = 1e3;
    viewport = $j(".content");
    content = $j(".content_inner");
    if ($j("body").hasClass("woocommerce") || $j("body").hasClass("woocommerce-page")) {
        return false;
    } else {
        $j(document).on("click", 'a[target!="_blank"]:not(.no_ajax):not(.no_link)', function(click) {
            if (click.ctrlKey == 1) {
                window.open($j(this).attr("href"), "_blank");
                return false;
            }
            if (window.location.href.split("#")[0] == $j(this).attr("href").split("#")[0]) {
                return false;
            }
            if ($j(this).closest(".no_animation").length === 0) {
                if (document.location.href.indexOf("?s=") >= 0) {
                    return true;
                }
                if ($j(this).attr("href").indexOf("wp-admin") >= 0) {
                    return true;
                }
                if ($j(this).attr("href").indexOf("wp-content") >= 0) {
                    return true;
                }
                if ($j(this).attr("href") !== "http://#" && $j(this).attr("href") !== "#") {
                    disableHashChange = true;
                    var url = $j(this).attr("href");
                    var start = url.indexOf(qode_root);
                    if (start === 0) {
                        click.preventDefault();
                        click.stopImmediatePropagation();
                        click.stopPropagation();
                        onLinkClicked($j(this));
                    }
                } else {
                    return false;
                }
            }
        });
    }
});