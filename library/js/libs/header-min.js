!function(){function e(e,t,n){if(l.classList.add("hide-nav"),e.progress>10&&!u){u=!0,d=t;var a=c[t],o=[].slice.call(a.querySelectorAll(".column li"));o.forEach(function(e){e.style.opacity=0}),a.style.opacity=1,a.classList.add("tabscontent__item--current"),n.classList.add("tabsnav__item--current"),document.documentElement.style.overflow="hidden",anime.remove(o),anime({targets:o,easing:"easeOutExpo",duration:800,delay:function(e,t){return 40*t},translateY:function(e,t){return[50+10*t,0]},opacity:{value:1,duration:600,easing:"easeOutExpo"}})}}function t(){if(o.isOpen){var e=c[d],t=i[d],n=[].slice.call(e.querySelectorAll(".column li"));document.documentElement.style.overflow="auto",anime.remove(n),anime({targets:n,easing:"easeOutExpo",duration:600,delay:function(e,t,n){return 20*(n-t-1)},translateY:function(e,t){return[0,50+10*t]},opacity:{value:0,duration:100,easing:"easeOutExpo"},update:function(e){e.progress>80&&u&&(u=!1,o.close())},complete:function(){e.style.opacity=0,e.classList.remove("tabscontent__item--current"),t.classList.remove("tabsnav__item--current")}}),anime.remove(r),anime({targets:r,duration:300,easing:"easeOutExpo",scale:[1,0],opacity:{value:0,duration:100,easing:"linear"}})}}function n(){v.click()}function a(){y.click()}var o=new TabsNav(document.querySelector(".tabsnav"),{movable:"single",layout:"horizontal",animeduration:1e3,animeeasing:"easeOutExpo",onOpenBarsUpdate:e,onOpenTab:function(){l.classList.add("screen-visible"),anime({targets:r,duration:350,easing:"easeOutExpo",scale:[0,1],opacity:{value:1,duration:350,easing:"linear"}})},onCloseTab:function(){l.classList.remove("screen-visible","hide-nav")}}),c=[].slice.call(document.querySelectorAll(".tabscontent > .tabscontent__item")),i=[].slice.call(document.querySelectorAll(".tabsnav > .tabsnav__item")),r=document.querySelector(".tabscontent > button.btn--back"),s=document.querySelector(".dm-hamburger"),l=document.querySelector(".page--header"),u=!1,d;r.addEventListener("click",t);var m=document.querySelector(".dm-logo"),v=document.querySelector(".screen-toggle"),y=document.querySelector(".hamburger-toggle");m.addEventListener("click",n),s.addEventListener("click",a)}();