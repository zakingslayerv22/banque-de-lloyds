!function(){var n={};!function(){function l(a){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},l(a)}function v(a,b){for(var f=0;f<b.length;f++){var g=b[f];g.enumerable=g.enumerable||!1;g.configurable=!0;"value"in g&&(g.writable=!0);var c=Object,k=c.defineProperty;void 0;a:{var d=g.key;if("object"===l(d)&&null!==d){var e=d[Symbol.toPrimitive];
if(void 0!==e){d=e.call(d,"string");if("object"!==l(d))break a;throw new TypeError("@@toPrimitive must return a primitive value.");}d=String(d)}}k.call(c,a,(h=d,"symbol"===l(h)?h:String(h)),g)}var h}var p=function(a,b){if(a&&b){var f="true"===a.getAttribute(b)?"false":"true";a.setAttribute(b,f)}return a},w="".concat(".js-progressive-nav","-container"),x="".concat(".js-progressive-nav","-list"),q="".concat(".js-progressive-nav","-item"),y="".concat(".js-progressive-nav","-more-button"),z="".concat(".js-progressive-nav",
"-more-list"),A="".concat(".js-progressive-nav","-dropdown"),r=!1,B=function(){function a(f){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");!0;this.root=f;this.root.classList.contains("progressive-nav-vertical")&&(r=!0);this.container=this.root.querySelector(w);this.list=this.root.querySelector(x);this.items=this.root.querySelectorAll(q);this.more_btn=this.root.querySelector(y);this.more_list=this.root.querySelector(z);this.dropdown=this.root.querySelector(A);this.touchMoved=
!1;this.configure()}var b;return b=[{key:"configure",value:function(){var f,g,c=this;window.addEventListener("resize",(f=this.resize.bind(this),300,function(){for(var k=arguments.length,d=Array(k),e=0;e<k;e++)d[e]=arguments[e];clearTimeout(g);g=setTimeout(function(){g=null;f.apply(void 0,d)},300)}));window.addEventListener("touchstart",function(){c.touchMoved=!1});window.addEventListener("touchmove",function(){c.touchMoved=!0});window.addEventListener("touchend",function(){c.touchMoved=!1});this.more_btn.addEventListener("click",
function(){c.more_list.classList.contains("hidden")&&setTimeout(function(){var k=window;var d=function(){c.container.classList.remove("opened");c.more_list.classList.add("hidden");c.more_btn.setAttribute("aria-expanded",!1)};k.addEventListener("click",function h(){k.removeEventListener("click",h);d()})},100);c.container.classList.toggle("opened");c.more_list.classList.toggle("hidden");p(c.more_btn,"aria-expanded")});this.dropdown.addEventListener("click",function(){c.toggle()});this.resize()}},{key:"toggle",
value:function(){this.container.classList.toggle("opened");this.list.classList.toggle("hidden-xs-down");p(this.dropdown,"aria-expanded")}},{key:"collapse",value:function(){this.container.classList.remove("opened");this.list.classList.add("hidden-xs-down");this.dropdown.setAttribute("aria-expanded","false")}},{key:"resize",value:function(){var f=this,g=this.container.getBoundingClientRect().width-160,c=!(651>window.innerWidth);if(!(c&&r||this.touchMoved)){this.more_list.querySelectorAll(q).forEach(function(m){f.more_list.removeChild(m)});
this.root.classList.remove("shortened");this.collapse();var k=0,d=!1;this.items.forEach(function(m){m.classList.remove("hidden");c&&(k+=m.offsetWidth)>=g&&(f.more_list.appendChild(m.cloneNode(!0)),m.classList.add("hidden"),d=!0)});var e=document.querySelector("#progressive-nav-more-list").querySelectorAll("a");e=e[e.length-1];void 0!==e&&null!=e&&e.addEventListener("blur",function(){f.container.classList.remove("opened");f.more_list.click()});e=document.querySelector(".progressive-nav__item--current");
var h=document.querySelector(".breadcrumb-primary-list-item:last-of-type \x3e a");void 0!==e&&null!=e&&void 0!==h&&null!=h&&(h.style.pointerEvents="auto");d&&this.root.classList.add("shortened")}}}],b&&v(a.prototype,b),Object.defineProperty(a,"prototype",{writable:!1}),a}(),C=function(a){(a=a.target)&&"A"!==a.nodeName&&a.querySelector("a.progressive-nav__link").click()},t=function(){document.querySelectorAll(".js-progressive-nav-standalone.quick-links").forEach(function(a){768>window.innerWidth?a.removeAttribute("style"):
a.setAttribute("style","top: -".concat(a.offsetHeight,"px; margin-bottom: -").concat(a.offsetHeight,"px;"));a.querySelectorAll(".js-progressive-nav-item").forEach(function(b){b.addEventListener("click",C)})})},u=function(){Array.prototype.map.call(document.querySelectorAll(".js-progressive-nav-standalone"),function(a){return new B(a)});t()};window.addEventListener("load",u);"complete"===document.readyState&&u();window.addEventListener("resize",t)}();(function(l){"undefined"!=typeof Symbol&&Symbol.toStringTag&&
Object.defineProperty(l,Symbol.toStringTag,{value:"Module"});Object.defineProperty(l,"__esModule",{value:!0})})(n);window["c-107-progressive-nav"]=n}();