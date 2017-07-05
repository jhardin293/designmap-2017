function loadTeamPageScripts($){var e=homeUrl.homeUrl+"/wp-content/themes/designmap-2016/library/js/libs/";$.when($.getScript(e+"d3.min.js"),$.getScript(e+"lodash.js")).then(function(){loadTeamPage($)}).fail(function(){console.log("error")})}function loadTeamPage($){function e(){$(".teamFilter li").removeClass("active")}function t(e){var t=e.split(" ");return 1===t.length?t[0].charAt(0).join(""):2===t.length?[t[0].charAt(0),t[1].charAt(0)].join(""):""}function a(e){for(var t=e.length,a,n;0!==t;)n=Math.floor(Math.random()*t),t-=1,a=e[t],e[t]=e[n],e[n]=a;return e}function n(e){switch(e){case"Senior Designer":return"Designer";break;case"Senior Researcher":return"Researcher";break;case"Office Manager":return"Support";break;default:return e}}function r(e,t){return e.length>t?e.substring(0,t)+"...":e}function o(e){function t(e){return e>1?e+" years ":e+" year "}function n(){$("#teamModal").trigger("click")}e.clients||e["slack-channels"]?(c=e.clients,l=e["slack-channels"],p=a(e["slack-channels"]).splice(0,5),d=e.tenure,u=e.bio):(c=e.person.clients,l=e.person["slack-channels"],p=a(e.person["slack-channels"]).splice(0,5),d=e.person.tenure,u=e.person.bio),$(".team-modal-name").text(e.name),$(".team-modal-role").text(e.role),$(".team-modal-img").attr("src",e.avatar),$(".team-modal-bio").text(u),$(".team-modal-projects").empty(),$(".team-modal-slack").empty(),$(".team-modal-year span").text(t(d)),_.each(c,function(e){$(".team-modal-projects").append("<li>"+e+"</li>")}),_.each(p,function(e){$(".team-modal-slack").append("<li>"+e+"</li>")}),n()}var i="resetToAll",s=$(".filters-and-viz");$("#teamModal").animatedModal({color:"white",animatedIn:"slideInUp",animatedOut:"slideOutDown"}),$("#headerControls .team-view-options").click(function(t){switch(t.preventDefault(),i=t.currentTarget.id,e(),f.resizer(),i){case"resetToAll":s.attr("data-state","resetToAll"),f.updateGraph(mainTeamData,"grid","refresh"),g.removeGraph();break;case"date":s.attr("data-state","date"),f.updateGraph(mainTeamData,"date"),g.removeGraph(),e();break;case"slack":$(".graph-svg").remove(),s.attr("data-state","slack"),g.startGraph(mainTeamData)}}),$("#filterByClient").on("click",function(e){if("A"===e.target.nodeName){var t=[],a=e.target.text;_.each(mainTeamData,function(e,n){-1!==_.indexOf(e.clients,a)&&t.push(e)}),s.attr("data-state","client"),f.updateGraph(t,"client")}}),$("#filterByRole").on("click",function(e){if("A"===e.target.nodeName){var t=[],a=e.target.text;_.each(mainTeamData,function(e,n){e["base-role"]===a&&t.push(e)}),s.attr("data-state","client"),f.updateGraph(t,"client")}}),$(".teamFilter li").click(function(e){$(".teamFilter li").not(this).removeClass("active"),$(this).addClass("active")});var c,l,d,u,p,m=function(){function e(){d3.csv(i+"team-data.csv",function(e){var a={"bio-tags":e["Bio Tags"],"facial-hair":e["Facial Hair"],hometown:e.Hometown.split(","),industry:e.Industry,name:e.Name,"first-name":e.Name.split(" ")[0],abbrev:t(e.Name),avatar:e.Avatar?e.Avatar:"https://pixabay.com/static/uploads/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png","personality-type":e["Personality Type"],pet:e.Pet,"previous-job":e["Previous Job"],role:e.Role,"base-role":n(e.Role),bio:e.Bio?e.Bio:"Needs bio","slack-channels":[]};return a},function(e){a(e)})}function a(e){d3.csv(i+"harvest-data.csv",function(e){return e.name=e["first-name"]+" "+e["last-name"],delete e["first-name"],delete e["last-name"],e},function(t){var a=t;_.each(a,function(t,a){_.each(e,function(e,a){e.name===t.name&&(e.hasOwnProperty("clients")?-1===_.indexOf(e.clients,t.client)&&e.clients.push(t.client):(e.clients=[],e.clients.push(t.client)))})})}),r(e)}function r(e){var t,a;$.when($.get("https://slack.com/api/channels.list?token=xoxp-2166015646-19720409713-42215959831-9e2f002b01&pretty=1",function(e){t=e.channels}),$.get("https://slack.com/api/users.list?token=xoxp-2166015646-19720409713-42215959831-9e2f002b01&pretty=1",function(e){a=e.members})).then(function(){_.each(e,function(e){_.each(a,function(t){e.name===t.real_name&&(e.slack_id=t.id)}),_.each(t,function(t){-1!==t.members.indexOf(e.slack_id)&&e["slack-channels"].push(t.name)})}),o(e)})}function o(e){d3.csv(i+"hire-date.csv",function(t){_.each(e,function(e){_.each(t,function(t){e.name===t.Name&&(e["hire-year"]=new Date(t.Hired).getFullYear(),e.tenure=(new Date).getFullYear()-e["hire-year"])})}),mainTeamData=e,f.drawGraph(e,"grid"),h(e)})}var i=homeUrl.homeUrl+"/wp-content/themes/designmap-2017/library/js/";e()};m();var h=function(e){function t(e,t){var a=d3.select(".role-group[data-role="+e+"]").append("div").attr("class","mobile-person").on("click",function(){o(t)});a.append("div").attr("class","avatar").append("img").attr("src",t.avatar),a.append("p").html(t["first-name"])}_.each(e,function(e){switch(e["base-role"]){case"Partner":t("partner",e);break;case"Design Director":t("director",e);break;case"Designer":t("designer",e);break;case"Researcher":t("researcher",e);break;case"Engineer":t("engineer",e);break;case"Support":t("support",e)}})},f=function(){function e(e,a){var e=e;b=d3.select(".vis-container").append("svg").attr("width",900),g=b.append("g"),"grid"===a&&(t(e),b.attr("height",O)),p()}function t(e){f=d3.layout.grid().width($(".vis-container").outerWidth()).height($(".vis-container").outerWidth()+350).radius(200).align(0).ease("back",.5),e.forEach(function(e){f.push(e)}),c(f.nodes(),"grid")}function a(e,t){var a=$(".vis-container").outerWidth(),r=1e3,o=70,i=70,s=280,l=200,d=90,u=170,p=[],m;b.attr("height",T),"date"===t&&(m=_.groupBy(mainTeamData,"hire-year"));var h=s;Object.keys(m).sort().forEach(function(e,t){var n=m[e],r=l;p.push({name:e,y:h-u,x:100,groupIndex:t,data:n}),n.sort().forEach(function(e){r+o>a&&(r=l,h+=i),e.x=r-45,e.y=h+5,e.groupIndex=t,r+=o}),h+=d}),r=h;var f=[];p.forEach(function(e,t){e.data.forEach(function(e,t){f.push(e)})}),n(p),c(f,"group")}function n(e,t){C=b.append("g").attr("class","timelineContainer"),C.append("text").attr("fill","#333333").attr("font-size","10px").attr("x",13).attr("y",200).style("opacity",0).text("Since").transition().duration(750).style("opacity",1).attr("y",286),S=C.append("g").attr("transform","translate(0,228)");var a,n;k=S.selectAll("text").data(e,function(e){return e.name}),k.enter().append("text").attr("y",function(e){return e.y-70}).style("opacity",0).text(function(e){return e.name}).transition().duration(750).attr("x",0).attr("y",function(e){return e.y-35}).style("opacity",1),a=S.selectAll("circle").data(e,function(e){return e.name}),a.enter().append("circle").attr("cy",function(e){return e.y-80}).attr("r",7.5).attr("fill","#666666").style("opacity",0),a.exit().transition().style("opacity",0).remove(),a.transition().duration(750).attr("cx",55).attr("cy",function(e){return e.y-40}).style("opacity",1),S.append("line").attr("x1",55).attr("x2",55).attr("y1",1090).attr("y2",70).style("stroke","#666666").style("stroke-width",1),w=!0}function s(){c([],"group")}function c(e,t){var a=e.length,n=d3.scale.linear().domain([43,0]).range([30,60]),r=n(a),i=2*r,s=d3.scale.linear().domain([43,0]).range([200,300]),c=s(a);f.radius(c),"grid"===t?g.attr("transform","translate(-160,-10)"):"group"===t&&g.attr("transform","translate(-47,13)"),y=g.selectAll(".node-container").data(e),y.enter().append("g").style("opacity",0).on("click",function(e){o(e)}).attr("class","node-container"),y.transition().duration(500).style("opacity",1),v=y.append("circle").classed("node",!0).style("fill","rgb(151, 147, 147)").attr("r",r),y.append("text").attr("y",5).attr("text-anchor","middle").attr("fill","white").text(function(e){return e.abbrev});var d=b.append("clipPath").attr("id","circleClip").append("circle").classed("node",!0).attr("r",r).attr("transform","translate("+r+", "+r+")");x=y.append("svg:image").attr("xlink:href",function(e){return e.avatar}).attr("clip-path","url(#circleClip)").attr("transform","translate("+-Math.abs(r)+","+-Math.abs(r)+")").attr("width",i).attr("height",i),"grid"===t&&(f.update(),f.on("tick",function(){l()})),"group"===t&&y.transition().duration(1e3).attr("transform",function(e){return"translate("+e.x+", "+e.y+")"}).style("opacity",1)}function l(){y.attr("transform",function(e){return"translate("+e.x+", "+e.y+")"})}function d(e,t,n){$(".timelineContainer").remove(),$("#circleClip").remove(),"grid"===t&&(f.nodes(e),b.attr("height",O),y.remove(),c(f.nodes(),"grid")),"date"===t&&a(e,"date"),"client"===t&&u(e)}function u(e){function t(e){$(".team-modal-name").text(e.name),$(".team-modal-img").attr("src",e.avatar),$(".team-modal-bio").text(e.bio),$(".team-modal-year span").text(e.tenure),_.each(e.clients,function(e){$(".team-modal-projects").append("<p>"+e+"</p>")}),_.each(e["slack-channels"],function(e){$(".team-modal-slack").append("<p>"+e+"</p>")})}$(".client-container").empty(),_.each(e,function(e,t){$(".client-container").append('<div class="team-member" data-idx='+t+"></div>");var a=$(".client-container .team-member[data-idx="+t+"]");a.append('<div class="avatar"><img src='+e.avatar+"></div>"),a.append('<p class="role">'+e.role+"</p>"),a.append("<h6>"+e.name+"</h6>"),a.append('<div class="bio"><p>'+r(e.bio,162)+"</p></div>"),a.append('<a class="more" href="#">More<span>></span></a>').on("click",function(){o(e)})}),setTimeout(function(e){$(".team-member").addClass("show")},10)}function p(){"resetToAll"===i&&(m(),$(window).on("resize",function(){m()}))}function m(){if("resetToAll"===i){var e=$(window).width(),t=768,a=992;e=$(window).width(),e>t&&a>e&&(f.height(700).update(),g.attr("transform","translate(-50,23)"),b.attr("height",755)),e>a&&(f.height(1099).update(),g.attr("transform","translate(-160,-10)"),b.attr("height",O))}}var h,f,g,v,y,b,k,x,w=!1,C,S,O=695,T=1320;return{drawGraph:e,groupView:a,updateGraph:d,animateModal:o,resizer:p}}(),g=function(){function e(e){var a=["gaming","arthropods","gross","yoga_meditation","restaurant-explorers","music","biking","cooking","artsandcrafts","rock-climbing"],n={nodes:[],links:[]},r=[];_.each(a,function(e,t){var a={name:e,type:"channel",id:t};n.nodes.push(a),r.push(a)});var o=a.length-1;_.each(e,function(e,t){_.each(a,function(t,a){if(-1!==e["slack-channels"].indexOf(t)){o++;var r={name:e.name,type:"person",person:e,avatar:e.avatar,id:o};n.nodes.push(r);var i={source:o,target:a};n.links.push(i)}})}),t(n,r)}function t(e,t){function a(e){C.stop(),m(e)}function n(e){C.start(),h(e)}function m(e){p.attr("class",function(t){return f(e,t)?"node-active":"not-infocus"}),p.attr("transform",function(t){return"channel"===t.type&&f(e,t),"translate("+t.x+", "+t.y+")"}),x.attr("class",function(t){return g(e,t)?"link-active":"link-inactive"}),w.attr("r",function(t){return"channel"===t.type&&f(e,t)?80:"channel"===t.type?60:"person"===t.type?30:void 0})}function h(e){p.attr("class","not-infocus"),x.attr("class","link-inactive")}function f(e,t){return _[e.index+","+t.index]||_[t.index+","+e.index]||e.index==t.index}function g(e,t){return t.source.index==e.index||t.target.index==e.index}function v(e){e.each(function(){function e(e,a){var r=t.text(null).append("tspan");r.text(e).attr("x",0),r=t.append("tspan").text(a).attr("dy",n+"em").attr("x",0)}var t=d3.select(this),a=t.text(),n=1.2;switch(a){case"yoga_meditation":e("yoga","meditation");break;case"artsandcrafts":e("arts","and crafts");break;case"rock-climbing":e("rock climbing","");break;case"restaurant-explorers":e("restaurant","explorers")}})}var y=i/2;r=d3.select(".graph-container").append("svg").attr("class","graph-svg").style("display","block").attr("width",i).attr("height",s);var b=r.append("g").attr("class","slack-wrapper").attr("transform","translate(0,0)"),k=d3.layout.force().charge(-620).linkDistance(160).gravity(.14).size([i,s]);k.nodes(e.nodes).links(e.links).start();var x=b.selectAll(".link").data(e.links).enter().append("line").attr("class","link").attr("class","link-inactive").style("stroke-width",2);p=b.selectAll(".node-container").data(e.nodes).enter().append("g").call(k.drag).attr("class",function(e){return"not-infocus"}).attr("data-type",function(e){return"channel"===e.type?"channel":"person"}).on("click",function(e){e.person&&o(e)}).on("mouseover",a).on("mouseout",n);var w=p.append("circle").attr("class","node").attr("r",function(e){return"channel"===e.type?60:c}).attr("data-name",function(e){return e.name}).attr("data-id",function(e){return e.id}).style("fill",function(e){return"channel"!==e.type?"#FFFFFF":void 0}),_={};e.links.forEach(function(e){_[e.source.index+","+e.target.index]=!0});var C=function(){function t(){o=setInterval(function(){m(e.nodes[n]),9!==n?(n++,r=n-1):(n=0,r=9)},2e3)}function a(){clearInterval(o)}var n=0,r=9,o;return{start:t,stop:a}}();C.start();var S=r.append("clipPath").attr("id","circleFClip").append("circle").classed("node",!0).attr("r",c).attr("transform","translate("+c+" , "+c+")"),O=homeUrl.homeUrl+"/wp-content/themes/designmap-2016/library/images/";u=p.append("svg:image").attr("x",-23).attr("y",-40).attr("width",45).attr("height",45).attr("xlink:href",function(e){if("channel"===e.type)switch(e.name){case"gaming":return O+"gaming.svg";break;case"arthropods":return O+"arthropod.svg";break;case"gross":return O+"gross.svg";break;case"yoga_meditation":return O+"yoga_meditation.svg";break;case"restaurant-explorers":return O+"restaurant-explorers.svg";break;case"music":return O+"music.svg";break;case"biking":return O+"biking.svg";break;case"cooking":return O+"cooking.svg";break;case"artsandcrafts":return O+"artsandcrafts.svg";break;case"rock-climbing":return O+"rock-climbing.svg"}}),d=p.append("svg:image").attr("xlink:href",function(e){return e.avatar}).attr("transform","translate(-30,-30)").attr("clip-path","url(#circleFClip)").attr("width",l).attr("height",l);var T=b.selectAll(".node-label").data(e.nodes).enter().append("g").attr("class","node-label"),A=T.append("text").text(function(e){return"channel"===e.type?e.name:void 0}).attr("style","text-anchor: middle").attr("fill","#FFFFFF").call(v);k.on("tick",function(){x.attr("x1",function(e){return e.source.x}).attr("y1",function(e){return e.source.y}).attr("x2",function(e){return e.target.x}).attr("y2",function(e){return e.target.y}),p.attr("transform",function(e){return"translate("+e.x+", "+e.y+")"}),T.attr("transform",function(e){var t=e.x-2,a=e.y+23;return"translate("+t+", "+a+")"})})}function a(){r&&r.remove()}function n(e){r.remove()}var r,i=$(".graph-container").outerWidth(),s=1700,c=30,l=2*c,d,u,p;return{toggle:n,startGraph:e,removeGraph:a}}()}function dropdownModule($){function e(){var e=$(".toggle__title").text().trim();$(".tab-link").each(function(){e===$(this).text()?$(this).addClass("hide"):$(this).removeClass("hide")})}function t(e){this.dd=e,this.placeholder=$(".toggle__title"),this.opts=this.dd.find("ul.dropdown > li"),this.val="",this.index=-1,this.initEvents()}$(".header-dropdown").addClass("showHeader"),setTimeout(function(){$(".header-dropdown").removeClass("showHeader")},2e3),$(".dropdown").on("show.bs.dropdown",function(){$(".header-dropdown").addClass("isOpen")}),$(".dropdown").on("hide.bs.dropdown",function(e){$(".header-dropdown").removeClass("isOpen")});var a=!1;t.prototype={initEvents:function(){e();var t=this;t.dd.on("click",function(t){return e(),$(this).toggleClass("open"),a===!1?($(".header-dropdown").addClass("isOpen"),a=!0):a===!0&&($(".header-dropdown").removeClass("isOpen"),a=!1),console.log(a,"isOpen"),!1}),t.opts.on("click",function(){e();var a=$(this);t.val=a.text(),t.index=a.index(),t.placeholder.text(t.val),t.placeholder.append('<span class="toggle__caret"></span>'),$(".header-dropdown").removeClass("isOpen"),$(".toggle__caret").addClass("flip-caret"),setTimeout(function(){$(".toggle__caret").removeClass("flip-caret")},300);var n=$(this).html()})},getValue:function(){return this.val},getIndex:function(){return this.index}};var n=new t($("#dd"));$(document).click(function(){$(".dropdown__module").removeClass("open"),$(".header-dropdown").removeClass("isOpen"),a=!1}),$(".dropdown-menu li").click(function(){var e="tab-"+$(this).attr("data-tab"),t="sub-"+$(this).attr("data-tab");$(".dropdown-menu li").removeClass("current"),$(".tab-content").removeClass("current"),$(".sub__heading").removeClass("current"),$(this).addClass("current"),$("#"+e).addClass("current"),$("#"+t).addClass("current")})}!function($){$.fn.onPageLoad=function(e){function t(){c.imagesLoaded({background:h},function(){h.addClass("background-loaded"),a()})}function a(){n(),d.fadeOut(750),$(".current-menu-item").addClass("active")}function n(){"use strict";var e=$(".meta .seo_description").text(),t=$(".meta .seo_keywords").text();""!=e&&$('head meta[name="description"]').attr("content",e),""!==t&&$('head meta[name="keywords"]').attr("content",t)}function r(e,t,a){if(0===t){var n=document.querySelector(".homescreen").clientHeight;document.querySelector(".homepage-proper").style.paddingTop=n+"px"}if(1===t&&(document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden"),S.classList.add("hide-nav"),a.classList.add("tabsnav__item--current"),e.progress>95&&!E){E=!0,D=t;var r=x[t],o;a.classList.contains("menu-toggle")?(o=[].slice.call(r.querySelectorAll(".column li")),o.forEach(function(e){e.style.opacity=0}),r.style.opacity=1,r.classList.add("tabscontent__item--current"),anime.remove(o),anime({targets:o,easing:"easeOutExpo",duration:800,delay:function(e,t){return 40*t},translateY:function(e,t){return[50+10*t,0]},opacity:{value:1,duration:800,easing:"easeOutExpo"}})):(o=r.querySelector(".column"),o.style.opacity=0,r.style.opacity=1,r.classList.add("tabscontent__item--current"),a.classList.add("tabsnav__item--current"),anime.remove(o),anime({targets:o,easing:"easeOutExpo",duration:1500,translateY:function(e,t){return[40,0]},opacity:{value:1,duration:1500,easing:"easeOutExpo"}}))}}function o(){if(k.isOpen){document.documentElement.style.overflow="initial",document.body.style.overflow="initial";var e=x[D],t=w[D];1===D?(content=[].slice.call(e.querySelectorAll(".column li")),anime.remove(content),anime({targets:content,easing:"easeOutExpo",duration:600,delay:function(e,t,a){return 20*(a-t-1)},translateY:function(e,t){return[0,50+10*t]},opacity:{value:0,duration:100,easing:"easeOutExpo"},update:function(e){e.progress>80&&E&&(E=!1,k.close())},complete:function(){e.style.opacity=0,e.classList.remove("tabscontent__item--current"),t.classList.remove("tabsnav__item--current")}})):(content=e.querySelector(".column"),anime.remove(content),anime({targets:content,easing:"easeOutExpo",duration:1200,translateY:function(e,t){return[0,30]},opacity:{value:0,duration:1200,easing:"easeOutExpo"},update:function(e){e.progress>80&&E&&(E=!1,k.close())},complete:function(){e.style.opacity=0,e.classList.remove("tabscontent__item--current"),t.classList.remove("tabsnav__item--current"),anime.remove(O),anime({targets:O,duration:500,opacity:{value:1,duration:500,easing:"linear"}})}})),anime.remove(_),anime({targets:_,duration:350,easing:"easeOutExpo",scale:[1,0],opacity:{value:0,duration:350,easing:"linear"}})}}function i(){T.click()}function s(){A.click()}var c=$("#page"),l=$("#map"),d=$(".page-overlay"),u=$(".slick-slider"),p=$(".packery--grid"),m=$(".parallax"),h=$(".loading-background"),f=$(".carousel--post"),g=$(".page-template-team"),v=$(".viewport-animate"),y=$(".modal-link");dropdownModule($);const b=new Clipboard("[data-clipboard]");b.on("success",function(e){e.clearSelection(),$(".copy-input-btn").html("Copied!")});var k=new TabsNav(document.querySelector(".tabsnav"),{movable:"single",layout:"horizontal",animeduration:1250,animeeasing:"easeOutExpo",onOpenBarsUpdate:r,onOpenTab:function(e,t){1===e&&anime({targets:_,duration:350,easing:"easeOutExpo",scale:[0,1],opacity:{value:1,duration:350,easing:"linear"}})},onCloseTab:function(e,t){document.body.classList.contains("home")&&(document.querySelector(".homepage-proper").style.paddingTop="0px"),S.classList.remove("hide-nav")}}),x=[].slice.call(document.querySelectorAll(".tabscontent > .tabscontent__item")),w=[].slice.call(document.querySelectorAll(".tabsnav > .tabsnav__item")),_=document.querySelector(".tabscontent > button.btn--back"),C=document.querySelector(".dm-hamburger"),S=document.querySelector(".page__header"),O=[].slice.call(document.querySelectorAll(".header-navigation")),T=document.querySelector(".screen-toggle"),A=document.querySelector(".menu-toggle"),E=!1,D;if(_.addEventListener("click",o),C.addEventListener("click",s),!$("body").hasClass("home")){var L=document.querySelector(".page__header"),F=new Headroom(L,{offset:205,tolerance:5,classes:{initial:"animated",pinned:"slideDown",unpinned:"slideUp"}});F.init()}if(v.length&&v.each(function(){$(this).onScreen({doIn:function(){$(this).addClass("in-view")},tolerance:50})}),y.length&&y.each(function(){var e=$(this),t=e.attr("id");e.animatedModal({modalTarget:"modal-"+t,color:"white",animatedIn:"slideInUp",animatedOut:"slideOutDown"})}),u.length&&(u.slick({infinite:!0,fade:!0,dots:!0,prevArrow:'<svg class="icon icon-arrow-back"><use xlink:href="#icon-arrow-back"></use></svg>',nextArrow:'<svg class="icon icon-arrow-forward"><use xlink:href="#icon-arrow-forward"></use></svg>'}),h.length?t():a()),p.length)var I=p.imagesLoaded(function(){I.packery({gutter:".packery-gutter",itemSelector:".packery-item",percentPosition:!0}),I.addClass("is-img-loaded"),setTimeout(function(){$(".packery-item > div").each(function(){$(this).onScreen({doIn:function(){$(this).addClass("onScreen")},tolerance:50})})},500)});!h.length||u.length||p.length||t();var M=document.querySelectorAll(".entry-content p, blockquote h4, blockquote p");if(M&&hangPunctuation(M),l.length){var q={lat:37.760212,lng:-122.411705},P={zoom:15,minZoom:6,maxZoom:18,zoomControl:!0,center:{lat:37.760212,lng:-122.411705},mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,panControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,rotateControl:!1,disableDefaultUI:!0},l=new google.maps.Map(document.getElementById("map"),P),j=new google.maps.places.PlacesService(l),z="https://www.designmap.com/wordpress/wp-content/themes/designmap_2015/library/images/mapmarker.png",G=new google.maps.Marker({position:{lat:37.760212,lng:-122.411705},map:l,title:"DesignMap",icon:z}),U="<b>DesignMap</b><p>700 Alabama Street<br>San Francisco, CA 94110<br>(415) 357-1875",B=new google.maps.InfoWindow({content:U});j.getDetails({placeId:"ChIJ-R-vszB-j4ARZxEL51vWXfI"},function(e,t){if(t===google.maps.places.PlacesServiceStatus.OK)var a=new google.maps.Marker({map:l,position:e.geometry.location})}),google.maps.event.addDomListener(window,"resize",function(){l.setCenter(q)}),google.maps.event.addListener(G,"click",function(){B.open(l,G)}),B.open(l,G)}u.length&&p.length&&h.length||a(),document.body.classList.contains("home")&&(anime.remove(O),anime({targets:O,duration:500,opacity:{value:0,duration:500,easing:"linear"}}),k.isOpen||T.click()),g.length&&loadTeamPageScripts($)}}(jQuery),jQuery(document).ready(function($){"use strict";var e={prefetch:!0,pageCacheSize:5,scroll:!1,blacklist:".no-smoothState",onBefore:function(e,t){var a=e[0].href,n=window.location.href;return a===n?!1:void 0},onStart:{duration:1800,render:function(e){$(".page-overlay").fadeIn(750,function(){$(".screen-toggle").hasClass("tabsnav__item--current")||$(".menu-toggle").hasClass("tabsnav__item--current")?setTimeout(function(e){$("html, body").scrollTop(0)},1e3):$("html, body").scrollTop(0)}),($(".screen-toggle").hasClass("tabsnav__item--current")||$(".menu-toggle").hasClass("tabsnav__item--current"))&&$(".btn--back").click()}},onReady:{duration:0,render:function(e,t){e.html(t)}},onAfter:function(e){e.onPageLoad()}},t=$("#page").smoothState(e).data("smoothState"),a=!0;$("body").onPageLoad(a)});