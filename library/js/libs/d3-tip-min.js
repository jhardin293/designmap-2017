!function(t,e){if("function"==typeof define&&define.amd)define(["d3-collection","d3-selection"],e);else if("object"==typeof module&&module.exports){var n=require("d3-collection"),r=require("d3-selection");module.exports=e(n,r)}else{var o=t.d3;t.d3.tip=e(o,o)}}(this,function(t,e){return function(){function n(t){C=m(t),C&&(H=C.createSVGPoint(),b.appendChild(E))}function r(){return"n"}function o(){return[0,0]}function l(){return" "}function i(){var t=x();return{top:t.n.y-E.offsetHeight,left:t.n.x-E.offsetWidth/2}}function f(){var t=x();return{top:t.s.y,left:t.s.x-E.offsetWidth/2}}function u(){var t=x();return{top:t.e.y-E.offsetHeight/2,left:t.e.x}}function s(){var t=x();return{top:t.w.y-E.offsetHeight/2,left:t.w.x-E.offsetWidth}}function a(){var t=x();return{top:t.nw.y-E.offsetHeight,left:t.nw.x-E.offsetWidth}}function c(){var t=x();return{top:t.ne.y-E.offsetHeight,left:t.ne.x}}function p(){var t=x();return{top:t.sw.y,left:t.sw.x-E.offsetWidth}}function y(){var t=x();return{top:t.se.y,left:t.se.x}}function d(){var t=e.select(document.createElement("div"));return t.style("position","absolute").style("top",0).style("opacity",0).style("pointer-events","none").style("box-sizing","border-box"),t.node()}function m(t){var e=t.node();return e?"svg"===e.tagName.toLowerCase()?e:e.ownerSVGElement:null}function h(){return null==E&&(E=d(),b.appendChild(E)),e.select(E)}function x(){for(var t=S||e.event.target;null==t.getScreenCTM&&null==t.parentNode;)t=t.parentNode;var n={},r=t.getScreenCTM(),o=t.getBBox(),l=o.width,i=o.height,f=o.x,u=o.y;return H.x=f,H.y=u,n.nw=H.matrixTransform(r),H.x+=l,n.ne=H.matrixTransform(r),H.y+=i,n.se=H.matrixTransform(r),H.x-=l,n.sw=H.matrixTransform(r),H.y-=i/2,n.w=H.matrixTransform(r),H.x+=l,n.e=H.matrixTransform(r),H.x-=l/2,H.y-=i/2,n.n=H.matrixTransform(r),H.y+=i,n.s=H.matrixTransform(r),n}function v(t){return"function"==typeof t?t:function(){return t}}var g=r,w=o,T=l,b=document.body,E=d(),C=null,H=null,S=null;n.show=function(){var t=Array.prototype.slice.call(arguments);t[t.length-1]instanceof SVGElement&&(S=t.pop());var e=T.apply(this,t),r=w.apply(this,t),o=g.apply(this,t),l=h(),i=A.length,f,u=document.documentElement.scrollTop||b.scrollTop,s=document.documentElement.scrollLeft||b.scrollLeft;for(l.html(e).style("opacity",1).style("pointer-events","all");i--;)l.classed(A[i],!1);return f=W.get(o).apply(this),l.classed(o,!0).style("top",f.top+r[0]+u+"px").style("left",f.left+r[1]+s+"px"),n},n.hide=function(){var t=h();return t.style("opacity",0).style("pointer-events","none"),n},n.attr=function(t,r){if(arguments.length<2&&"string"==typeof t)return h().attr(t);var o=Array.prototype.slice.call(arguments);return e.selection.prototype.attr.apply(h(),o),n},n.style=function(t,r){if(arguments.length<2&&"string"==typeof t)return h().style(t);var o=Array.prototype.slice.call(arguments);return e.selection.prototype.style.apply(h(),o),n},n.direction=function(t){return arguments.length?(g=null==t?t:v(t),n):g},n.offset=function(t){return arguments.length?(w=null==t?t:v(t),n):w},n.html=function(t){return arguments.length?(T=null==t?t:v(t),n):T},n.rootElement=function(t){return arguments.length?(b=null==t?t:v(t),n):b},n.destroy=function(){return E&&(h().remove(),E=null),n};var W=t.map({n:i,s:f,e:u,w:s,nw:a,ne:c,sw:p,se:y}),A=W.keys();return n}});