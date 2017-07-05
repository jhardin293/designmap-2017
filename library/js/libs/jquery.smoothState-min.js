!function(t){"use strict";"object"==typeof module&&"object"==typeof module.exports?t(require("jquery"),window,document):t(jQuery,window,document)}(function($,t,e,n){"use strict";if(!t.history.pushState)return $.fn.smoothState=function(){return this},void($.fn.smoothState.options={});if(!$.fn.smoothState){var o=$("html, body"),a=t.console,r={debug:!1,anchors:"a",hrefRegex:"",forms:"form",allowFormCaching:!1,repeatDelay:500,blacklist:".no-smoothState",prefetch:!1,prefetchOn:"mouseover touchstart",prefetchBlacklist:".no-prefetch",locationHeader:"X-SmoothState-Location",cacheLength:0,loadingClass:"is-loading",scroll:!0,alterRequest:function(t){return t},alterChangeState:function(t,e,n){return t},onBefore:function(t,e){},onStart:{duration:0,render:function(t){}},onProgress:{duration:0,render:function(t){}},onReady:{duration:0,render:function(t,e){t.html(e)}},onAfter:function(t,e){}},i={isExternal:function(e){var n=e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof n[1]&&n[1].length>0&&n[1].toLowerCase()!==t.location.protocol||"string"==typeof n[2]&&n[2].length>0&&n[2].replace(new RegExp(":("+{"http:":80,"https:":443}[t.location.protocol]+")?$"),"")!==t.location.host},stripHash:function(t){return t.replace(/#.*/,"")},isHash:function(e,n){n=n||t.location.href;var o=e.indexOf("#")>-1,a=i.stripHash(e)===i.stripHash(n);return o&&a},translate:function(t){var e={dataType:"html",type:"GET"};return t="string"==typeof t?$.extend({},e,{url:t}):$.extend({},e,t)},shouldLoadAnchor:function(t,e,o){var a=t.prop("href");return!(i.isExternal(a)||i.isHash(a)||t.is(e)||t.prop("target")||typeof o!==n&&""!==o&&-1===t.prop("href").search(o))},clearIfOverCapacity:function(t,e){return Object.keys||(Object.keys=function(t){var e=[],n;for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),Object.keys(t).length>e&&(t={}),t},storePageIn:function(t,e,n,o,a,r){var i=$("<html></html>").append($(n));return void 0===a&&(a={}),void 0===r&&(r=e),t[e]={status:"loaded",title:i.find("title").first().text(),html:i.find("#"+o),doc:n,state:a,destUrl:r},t},triggerAllAnimationEndEvent:function(t,e){e=" "+e||"";var n=0,o="animationstart webkitAnimationStart oanimationstart MSAnimationStart",a="animationend webkitAnimationEnd oanimationend MSAnimationEnd",r="allanimationend",s=function(e){$(e.delegateTarget).is(t)&&(e.stopPropagation(),n++)},l=function(e){$(e.delegateTarget).is(t)&&(e.stopPropagation(),0===--n&&t.trigger("allanimationend"))};t.on("animationstart webkitAnimationStart oanimationstart MSAnimationStart",s),t.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd",l),t.on("allanimationend"+e,function(){n=0,i.redraw(t)})},redraw:function(t){t.height()}},s=function(e){if(null!==e.state){var n=t.location.href,o=$("#"+e.state.id),a=o.data("smoothState"),r=a.href!==n&&!i.isHash(n,a.href),s=e.state!==a.cache[a.href].state;(r||s)&&(s&&a.clear(a.href),a.load(n,!1))}},l=function(r,s){var l=$(r),c=l.prop("id"),u=null,d=!1,h={},f={},p=t.location.href,m=function(t){t=t||!1,t&&h.hasOwnProperty(t)?delete h[t]:h={},l.data("smoothState").cache=h},g=function(t,e){e=e||$.noop;var n=i.translate(t);if(h=i.clearIfOverCapacity(h,s.cacheLength),!h.hasOwnProperty(n.url)||void 0!==n.data){h[n.url]={status:"fetching"};var o=$.ajax(n);o.done(function(t){i.storePageIn(h,n.url,t,c),l.data("smoothState").cache=h}),o.fail(function(){h[n.url].status="error"}),s.locationHeader&&o.always(function(t,e,o){var a=t.statusCode?t:o,r=a.getResponseHeader(s.locationHeader);r&&(h[n.url].destUrl=r)}),e&&o.always(e)}},v=function(){if(u){var t=$(u,l);if(t.length){var e=t.offset().top;o.scrollTop(e)}u=null}},y=function(n){var r="#"+c,i=h[n]?$(h[n].html.html()):null;if(i.length){e.title=h[n].title;var u=e.createElement("html");u.innerHTML=h[n].doc,e.body.className=$(u).find("body")[0].className,l.data("smoothState").href=n,s.loadingClass&&o.removeClass(s.loadingClass),s.onReady.render(l,i),l.one("ss.onReadyEnd",function(){d=!1,s.onAfter(l,i),s.scroll&&v(),T(l)}),t.setTimeout(function(){l.trigger("ss.onReadyEnd")},s.onReady.duration)}else!i&&s.debug&&a?a.warn("No element with an id of "+r+" in response from "+n+" in "+h):t.location=n},S=function(e,n,r){var u=i.translate(e);void 0===n&&(n=!0),void 0===r&&(r=!0);var d=!1,p=!1,v={loaded:function(){var e=d?"ss.onProgressEnd":"ss.onStartEnd";if(p&&d?p&&y(u.url):l.one(e,function(){y(u.url),r||m(u.url)}),n){var o=h[u.url].destUrl;f=s.alterChangeState({id:c},h[u.url].title,o),h[u.url].state=f,t.history.pushState(f,h[u.url].title,o)}p&&!r&&m(u.url)},fetching:function(){d||(d=!0,l.one("ss.onStartEnd",function(){s.loadingClass&&o.addClass(s.loadingClass),s.onProgress.render(l),t.setTimeout(function(){l.trigger("ss.onProgressEnd"),p=!0},s.onProgress.duration)})),t.setTimeout(function(){h.hasOwnProperty(u.url)&&v[h[u.url].status]()},10)},error:function(){s.debug&&a?a.log("There was an error loading: "+u.url):t.location=u.url}};h.hasOwnProperty(u.url)||g(u),s.onStart.render(l),t.setTimeout(function(){s.scroll&&o.scrollTop(0),l.trigger("ss.onStartEnd")},s.onStart.duration),v[h[u.url].status]()},w=function(t){var e,n=$(t.currentTarget);i.shouldLoadAnchor(n,s.blacklist,s.hrefRegex)&&!d&&(t.stopPropagation(),e=i.translate(n.prop("href")),e=s.alterRequest(e),g(e))},E=function(t){var e=$(t.currentTarget);if(!t.metaKey&&!t.ctrlKey&&i.shouldLoadAnchor(e,s.blacklist,s.hrefRegex)&&(t.stopPropagation(),t.preventDefault(),!P())){A();var n=i.translate(e.prop("href"));d=!0,u=e.prop("hash"),n=s.alterRequest(n),s.onBefore(e,l),S(n)}},b=function(t){var e=$(t.currentTarget);if(!e.is(s.blacklist)&&(t.preventDefault(),t.stopPropagation(),!P())){A();var o={url:e.prop("action"),data:e.serialize(),type:e.prop("method")};d=!0,o=s.alterRequest(o),"get"===o.type.toLowerCase()&&(o.url=o.url+"?"+o.data),s.onBefore(e,l),S(o,n,s.allowFormCaching)}},C=0,P=function(){var t=null===s.repeatDelay,e=parseInt(Date.now())>C;return!(t||e)},A=function(){C=parseInt(Date.now())+parseInt(s.repeatDelay)},T=function(t){s.anchors&&s.prefetch&&t.find(s.anchors).not(s.prefetchBlacklist).on(s.prefetchOn,null,w)},k=function(t){s.anchors&&(t.on("click",s.anchors,E),T(t)),s.forms&&t.on("submit",s.forms,b)},O=function(){var t=l.prop("class");l.removeClass(t),i.redraw(l),l.addClass(t)};return s=$.extend({},$.fn.smoothState.options,s),null===t.history.state?(f=s.alterChangeState({id:c},e.title,p),t.history.replaceState(f,e.title,p)):f={},i.storePageIn(h,p,e.documentElement.outerHTML,c,f),i.triggerAllAnimationEndEvent(l,"ss.onStartEnd ss.onProgressEnd ss.onEndEnd"),k(l),{href:p,cache:h,clear:m,load:S,fetch:g,restartCSSAnimations:O}},c=function(t){return this.each(function(){var e=this.tagName.toLowerCase();this.id&&"body"!==e&&"html"!==e&&!$.data(this,"smoothState")?$.data(this,"smoothState",new l(this,t)):!this.id&&a?a.warn("Every smoothState container needs an id but the following one does not have one:",this):"body"!==e&&"html"!==e||!a||a.warn("The smoothstate container cannot be the "+this.tagName+" tag")})};t.onpopstate=s,$.smoothStateUtility=i,$.fn.smoothState=c,$.fn.smoothState.options=r}});