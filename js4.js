!function(){var n={};!function(){function k(a){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},k(a)}function t(a,b){for(var d=0;d<b.length;d++){var g=b[d];g.enumerable=g.enumerable||!1;g.configurable=!0;"value"in g&&(g.writable=!0);var e=Object,l=e.defineProperty;void 0;a:{var f=g.key;if("object"===k(f)&&null!==f){var h=f[Symbol.toPrimitive];
if(void 0!==h){f=h.call(f,"string");if("object"!==k(f))break a;throw new TypeError("@@toPrimitive must return a primitive value.");}f=String(f)}}l.call(e,a,(c=f,"symbol"===k(c)?c:String(c)),g)}var c}var p=function(a,b,d){a.addEventListener(b,function e(){a.removeEventListener(b,e);d()})},q=function(a,b){if(a&&b){var d="true"===a.getAttribute(b)?"false":"true";a.setAttribute(b,d)}return a},r=function(){function a(d){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");!0;
this.root=d;this.container=this.root.querySelector(".js-breadcrumb-container");this.list=this.root.querySelector(".js-breadcrumb-list");this.items=this.root.querySelectorAll(".js-breadcrumb-item");this.more_container=this.root.querySelector(".js-breadcrumb-ellipse");this.more_btn=this.root.querySelector(".js-breadcrumb-ellipse-trigger");this.more_list=this.root.querySelector(".js-breadcrumb-ellipse-list");this.configure()}var b;return b=[{key:"configure",value:function(){var d,g,e=this;window.addEventListener("resize",
(d=this.resize.bind(this),300,function(){for(var l=arguments.length,f=Array(l),h=0;h<l;h++)f[h]=arguments[h];clearTimeout(g);g=setTimeout(function(){g=null;d.apply(void 0,f)},300)}));window.addEventListener("blur",function(){return p(window,"focus",e.resize.bind(e))});this.more_btn.addEventListener("click",function(){e.more_list.classList.contains("hide")&&setTimeout(function(){p(window,"click",function(){q(e.more_list,"aria-expanded");e.more_list.classList.add("hide")})},100);q(e.more_list,"aria-expanded");
e.more_list.classList.toggle("hide")});this.resize()}},{key:"resize",value:function(){var d=this,g=this.more_btn.offsetWidth||60,e=function(c){var m=window.getComputedStyle(c);c=c.offsetWidth;return c-=parseInt(m.paddingLeft,10),c-=parseInt(m.paddingRight,10),c-parseInt(m.borderLeftWidth,10)-parseInt(m.borderRightWidth,10)}(this.container)-g-10,l=!(651>window.innerWidth);this.more_list.querySelectorAll(".js-breadcrumb-item").forEach(function(c){d.more_list.removeChild(c)});this.root.classList.remove("shortened");
var f=Array.from(this.items).shift().offsetWidth+Array.from(this.items).pop().offsetWidth,h=!1;Array.from(this.items).slice(1,-1).reverse().forEach(function(c){c.classList.remove("hide");l&&(f+=c.offsetWidth)>=e&&(d.more_list.appendChild(c.cloneNode(!0)),c.classList.add("hide"),h=!0)});h&&this.root.classList.add("shortened")}}],b&&t(a.prototype,b),Object.defineProperty(a,"prototype",{writable:!1}),a}();window.addEventListener("load",function(){Array.prototype.map.call(document.querySelectorAll(".js-breadcrumb.breadcrumb-standalone"),
function(a){return new r(a)})});"complete"===document.readyState&&Array.prototype.map.call(document.querySelectorAll(".js-breadcrumb.breadcrumb-standalone"),function(a){return new r(a)})}();(function(k){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(k,Symbol.toStringTag,{value:"Module"});Object.defineProperty(k,"__esModule",{value:!0})})(n);window["c-107-breadcrumb-nav"]=n}();