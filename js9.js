!function(){var F={};var D={defaultMobile:75,defaultTablet:90,fullpageDesktop:96.5,fullpageTablet:96.5,fullpageMobile:88,halfpageDesktop:96.5,halfpageTablet:96.5,halfpageMobile:88};var G=function(a,g){a&&a.setAttribute("aria-label",g)};var B=function(a,g){g?(null==a||a.classList.add("disable-click"),null==a||a.parentElement.classList.add("disable-cursor"),G(a,a.getAttribute("data-label-disabled"))):(null==a||a.classList.remove("disable-click"),null==a||a.parentElement.classList.remove("disable-cursor"),
G(a,a.getAttribute("data-label-active")))};var r=function(a){return a&&!Number.isNaN(a)?Number(parseFloat(a).toFixed(2)):0};var k=function(a,g){"hide"===g?(null==a||a.classList.add("hide"),null==a||a.classList.remove("show")):(null==a||a.classList.remove("hide"),null==a||a.classList.add("show"))};var E=function(a){return 100*a.scrollLeft/(a.scrollWidth-a.clientWidth)};var H=function(a,g,h,m,n,t){var u=a.closest(".control-section");0>=n?(B(a,!0),B(g,!1)):100<=Math.round(n)||Math.round(n)>=m?(B(g,!0),
B(a,!1),h.style.width=Math.round(r(n))+"%"):(B(a,!1),B(g,!1),t?h.style.width=r(u.getAttribute("data-scroll-position"))+"%":u.setAttribute("data-scroll-position",r(h.style.width)))};var I=function(a,g,h){h&&(k(a,"hide"),k(g,"hide"))};var J=function(a,g,h,m,n,t,u){var p=2,z=parseInt(h.length,10),q=function(C,x){var v=t.classList.contains("fullpage-type-carousel")||t.classList.contains("halfpage-type-carousel");g.classList.add("shifting");x=function(A,l,y){l=l.closest(".control-section");return y&&l&&
!Number.isNaN(l.getAttribute("data-promo-tile-width"))?Number(l.getAttribute("data-promo-tile-width")):A}(a,x,v);var w=0;1===C?(w=g.scrollLeft+x,p+=1):(w=g.scrollLeft-x,--p);g.scrollTo({left:w,behavior:"smooth"});v||function(A,l,y,b){k(l,0<A?"show":"hide");k(y,A>=b-1?"hide":"show")}(p,m,n,z);setTimeout(function(){g.classList.remove("shifting")},1E3)};u||(m.addEventListener("click",function(){return q(-1,m)}),n.addEventListener("click",function(){return q(1,n)}))};var K=function(a){var g;0===(null===
(g=document.querySelectorAll(".carousel-auth--info"))||void 0===g?void 0:g.length)&&document.querySelectorAll(".c-111-carousel").forEach(function(h){var m=h.closest(".full-bleed"),n=h.querySelector(".c-111-carousel-slides"),t=h.querySelector(".c-111-carousel-prev"),u=h.querySelector(".c-111-carousel-next"),p=h.querySelector(".c-111-carousel-wrapper").offsetWidth,z=h.querySelectorAll(".c-111-carousel-slides \x3e div"),q=Math.max(document.documentElement.clientWidth,window.innerWidth||0),C=h.querySelector(".carousel-skin-container"),
x=C.hasAttribute("data-skin")?C.getAttribute("data-skin"):"default";m="fullpage"===x&&m?4:3;var v=C.querySelector(".progress-bar"),w="fullpage"===x||"halfpage"===x,A=Number(z.length+1)-m;if(w){!function(b,c,d){var e=r(100/d);d=r(d*e);null==b||b.setAttribute("data-indicator-fullWidth",d);null==b||b.setAttribute("data-cards-onload",c);null==b||b.setAttribute("data-indicator-width",e)}(v,m,A);var l=h.parentNode.parentNode;l.classList.contains("animate-grid-content")&&(l.classList.add("animate-on-load"),
a?l.classList.remove("animate-on-load"):function(b){setTimeout(function(){var c=b.querySelectorAll(".carousel-tile");if(c){var d=new IntersectionObserver(function(e){e.forEach(function(f){f.isIntersecting&&f.target.classList.add("inview")})});Array.from(c).forEach(function(e){d.observe(e)})}},500)}(n))}q=function(b,c,d,e){var f="desktop";return e&&(k(b,"hide"),k(c,"show")),768<=d&&1024>d?(f="tablet",I(b,c,e)):768>d&&(f="mobile",I(b,c,e)),f}(t,u,q,!w);l=p/m;var y=!1;if(function(b,c,d,e,f){b&&f&&("desktop"!==
e?b.closest(".carousel-control").classList.remove("hide"):c.length<=d&&"desktop"===e&&b.closest(".carousel-control").classList.add("hide"))}(v,z,m,q,w),"tablet"===q?(l=p/2,y=!0):"mobile"===q?(l=p/1,y=!0):"desktop"===q?(l=Math.ceil(p/m),y=!0):(k(t,"hide"),k(u,"hide")),y)p=function(b,c,d,e){var f=b;return"mobile"===c?f=parseInt(D[e+"Mobile"]/100*b,10):"tablet"===c?f=parseInt(D[e+"Tablet"]/100*b,10):"desktop"===c&&d&&(f=parseInt(D[e+"Desktop"]/100*b,10)),f}(l,q,w,x),w?(h=h.querySelector(".control-section"),
null==h||h.setAttribute("data-promo-tile-width",p),H(t,u,v,r(v.getAttribute("data-indicator-fullWidth")),r(E(n)),a),function(b,c){b.addEventListener("scroll",function(){var d=r(E(b)),e=r(c.getAttribute("data-indicator-fullWidth")),f=c.closest(".carousel-control"),L=f.querySelector(".prev");f=f.querySelector(".next");100>=d&&(c.style.width=r(d)+"%");H(L,f,c,e,d)})}(n,v)):!function(b,c,d,e){b.addEventListener("scroll",function(){var f=E(b);90<f?(k(c,"show"),k(d,"hide")):10>f?(k(c,"hide"),k(d,"show")):
10<f&&90>f&&(k(c,"show"),k(d,"show"));"desktop"!==e&&(k(c,"hide"),k(d,"hide"))})}(n,t,u,q),!function(b,c){var d=0;c.forEach(function(e){e.classList.add("carousel-tile");e.style.flexBasis=b+"px";e.setAttribute("data-id",d);d+=1})}(p,z),w&&v&&z&&function(b,c,d,e){b=b.closest(".progress-indicator");var f=b.parentElement.querySelector(".control-section");f.setAttribute("data-cards",Number(e));b.style.flexBasis=parseInt(c*d-f.offsetWidth,10)+"px"}(v,p,m,A),J(p,n,z,t,u,C,a)})};window.addEventListener("load",
J,!1);"complete"===document.readyState&&K(!1);window.addEventListener("resize",function(){return K(!0)});(function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})})(F);window["c-111-carousel"]=F}();