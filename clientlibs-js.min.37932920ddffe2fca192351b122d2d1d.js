/*
 For license information please see main.js.LICENSE.txt */
 ! function() {
    var z = function() {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || (new Function("return this"))()
      } catch (d) {
        if ("object" == typeof window) return window
      }
    }();
    var v = [];
    var w = function() {
      if (void 0 === window.lbgComponentsLoaded && (document.querySelectorAll('div.needs-javascript[class^\x3d"c-"]').forEach(function(a) {
          "c-117-form-elements" === a.classList[0] && -1 === v.indexOf("c-401-calculator") && v.push("c-401-calculator"); - 1 === v.indexOf(a.classList[0]) && v.push(a.classList[0])
        }), v.length)) {
        window.lbgComponentsLoaded = !0;
        var d = document.getElementsByTagName("script")[0];
        v.forEach(function(a) {
          var c, m, b, e = null === (c = document.querySelector(".".concat(a, " [data-hash]"))) || void 0 === c ? void 0 : c.getAttribute("data-hash");
          c = null === (m = document.querySelector(".".concat(a))) || void 0 === m ? void 0 : m.getAttribute("data-version");
          "c-401-calculator" === a && void 0 === e && (e = null === (b = document.querySelector(".calculator-401-proxy")) || void 0 === b ? void 0 : b.getAttribute("data-hash"));
          m = document.createElement("script");
          m.setAttribute("defer",
            "");
          c && "" !== c ? m.setAttribute("src", "") : m.setAttribute("src", "");
          d.parentNode.insertBefore(m, d)
        })
      }
    };
    window.addEventListener("load", w);
    "complete" === document.readyState && w();
    window.addEventListener("load", function() {
      var d, a, c = window.location.search.replace(/[^=?&\w\s]/gi, "").split("?")[1],
        m = document.querySelectorAll('a[href*\x3d"asp_includes/appendURL.asp?linkID\x3d"]');
      void 0 !== c && m.length && m.forEach(function(b) {
        d = b.getAttribute("href");
        (function(e) {
          var k = !1;
          return "https://lloydsbank.generalinsurance-system.co.uk/ECommerce/Default.aspx https://halifax.generalinsurance-system.co.uk/ https://bankofscotland.generalinsurance-system.co.uk/ECommerce/Default.aspx https://lloydsbankcarinsurance.insure-systems.co.uk/PrivateCar/Vehicle/Welcome.aspx https://halifaxcarinsurance.insure-systems.co.uk/ https://home-insurance.bankofscotland.co.uk/bos/quote/welcome https://home-insurance.bankofscotland.co.uk/bos/quote/yourproperty https://home-insurance.bankofscotland.co.uk/bos/quote/retrievequote https://home-insurance.bankofscotland.co.uk/bos/quote/quickquote apply.bankofscotland.co.uk www.bankofscotland.co.uk lloydsbank.com lloydsbank.co.uk halifax.co.uk halifax-online.co.uk".split(" ").forEach(function(l) {
            -1 !==
              e.indexOf(l) && (k = !0)
          }), k
        })(a = d.substr(d.indexOf("\x3d") + 1).replace(/%3A/g, ":")) && b.setAttribute("href", "".concat(a, "?").concat(c))
      })
    });
    var A = function() {
      var d = document.querySelectorAll("img.lazy-img");
      a && clearTimeout(a);
      var a = setTimeout(function() {
        d.forEach(function(c) {
          c.src = c.dataset.src;
          c.classList.remove("lazy-img")
        })
      }, 20)
    };
    ["DOMContentLoaded", "partial-load"].forEach(function(d) {
      document.addEventListener(d, A, !1);
      "complete" === document.readyState && A()
    });
    document.addEventListener("DOMContentLoaded",
      function() {
        var d = new CustomEvent("DOMCoreComponentsLoaded", {
          bubbles: !0,
          cancelable: !1
        });
        document.dispatchEvent(d)
      });
    var B = function(d) {
      return d.find(function(a) {
        return 0 !== a.offsetWidth || 0 !== a.offsetHeight || 0 !== a.getClientRects().length
      })
    };
    var C = function(d, a) {
      d.classList.add(a)
    };
    var D = function(d, a) {
      d.classList.remove(a)
    };
    var E = function(d) {
      var a = d.target.closest(".with-overlay").querySelector(".video-component-container.overlay-container"),
        c = Array.from(a.querySelectorAll('a[href],area[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),datalist:not([disabled]),iframe,object,embed,[tabindex]:not([tabindex\x3d"-1"]),[contenteditable]'));
      a = B(c);
      c = B(c.reverse());
      a && c ? 9 === d.keyCode && (d.shiftKey ? document.activeElement === a && (d.preventDefault(), c.focus()) : document.activeElement === c && (d.preventDefault(), a.focus())) : d.preventDefault()
    };
    var F = function(d) {
      var a = document.body;
      d ? C(a, "no-scroll") : D(a, "no-scroll")
    };
    var G = function(d, a) {
      d.querySelector(".overlay-close-button")["".concat(a, "EventListener")]("click", y, !0);
      d["".concat(a, "EventListener")]("click", I, !0);
      d["".concat(a, "EventListener")]("keydown", y, !0)
    };
    var H = function(d) {
      var a;
      d = d.target.closest(".with-overlay");
      var c = d.querySelector(".overlay-container");
      "function" == typeof window.Event ? a = new window.Event("open-overlay") : (a = document.createEvent("Event")).initEvent("open-overlay", !0, !0);
      G(d, "add");
      C(d, "open-overlay");
      F(!0);
      d.addEventListener("keydown", E);
      c.style.display = "block";
      c.setAttribute("aria-hidden", "false");
      d.querySelectorAll(".c-254-call-to-action .overlay-content").forEach(function(m) {
        m.setAttribute("tabindex", 0)
      });
      d.dispatchEvent(a)
    };
    var y = function(d) {
      var a, c = d.target.closest(".with-overlay"),
        m =
        c.querySelector(".overlay-container"),
        b = "click" === d.type;
      d = 27 === d.keyCode || 27 === d.which;
      "function" == typeof window.Event ? a = new window.Event("close-overlay") : (a = document.createEvent("Event")).initEvent("close-overlay", !0, !0);
      if (b || d) D(c, "open-overlay"), F(!1), G(c, "remove"), c.removeEventListener("keydown", E), m.style.display = "none", m.setAttribute("aria-hidden", "true"), c.querySelectorAll(".c-254-call-to-action .overlay-content").forEach(function(e) {
        e.setAttribute("tabindex", -1)
      }), c.dispatchEvent(a)
    };
    var I =
      function(d) {
        var a = d.target.closest(".with-overlay");
        d.target === a && y(d)
      };
    window.addEventListener("load", function() {
      var d = document.querySelectorAll(".with-overlay");
      d.length && (document.querySelectorAll(".video-component-close-button").forEach(function(a) {
        a.setAttribute("tabindex", -1)
      }), d.forEach(function(a) {
        var c = a.querySelector(".overlay-trigger"),
          m = a.querySelector(".overlay-container");
        c && c.addEventListener("click", H, !0);
        m.style.display = "none";
        (function(b) {
          b.addEventListener("keydown", function(e) {
            if (13 ===
              e.keyCode || 13 === e.which) {
              var k = b.classList.contains("with-overlay"),
                l = !b.classList.contains("open-overlay");
              k && l && H(e)
            }
          })
        })(a)
      }))
    });
    var J = {
      titleTpl: function(d) {
        return "\x3cdiv class\x3d'responsive table-cell-heading' data-type\x3d'responsive'\x3e".concat(d, "\x3c/div\x3e")
      },
      init: function(d, a) {
        var c, m, b, e, k, l = this;
        d = $(d || "div.c-103-rich-text \x3e table, table.responsive");
        if (0 < d.length)
          for (var g = 0, f = d.length; g < f; g++)
            if (!(c = $(d[g])).attr("data-type") || a) {
              c.hasClass("responsive") || c.addClass("responsive");
              c.attr("data-type", "responsive");
              c = c.find("\x3e thead \x3e tr, \x3e tbody \x3e tr, \x3e tr");
              var q = !0;
              2 > $(c[0]).find("\x3e th").length && 0 < $(c[0]).find("\x3e td").length && (q = !1);
              for (var n = 0, r = c.length; n < r; n++)
                if (0 < (b = $(c[n]).find("\x3e td")).length)
                  for (var h = $(c[n]).find("\x3e th"), p = 0, t = b.length; p < t; p++)
                    if (m = q ? 1 === h.length ? $(c[0]).find("\x3e th")[p + 1] : $(c[0]).find("\x3e th")[p] : h[0], k = $(b[p]), e = m && (m.textContent || m.innerText) || "", a && k.find("div[data-type\x3d'responsive']").remove(), $(k).contents().filter(function() {
                        return 3 ===
                          l.nodeType && $.trim(l.textContent).length
                      }).wrap("\x3cp\x3e\x3c/p\x3e").end(), k.wrapInner("\x3cdiv class\x3d'table-cell-details'\x3e\x3c/div\x3e"), k.prepend(this.titleTpl(e)), q && 1 === h.length && 0 === p && k.prepend(this.titleTpl(h[0].textContent || h[0].innerText)), q && 1 === h.length && 0 === p && 1 === n) {
                      var u = $(c[0]).find("\x3e th")[0];
                      k.prepend(this.titleTpl(u.textContent || u.innerText))
                    }
            }
      }
    };
    window.addEventListener("load", function() {
      J.init()
    });
    (function b(a, c, m) {
      function e(g, f) {
        if (!c[g]) {
          if (!a[g]) {
            if (k) return k(g,
              !0);
            f = Error("Cannot find module '".concat(g, "'"));
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          f = c[g] = {
            exports: {}
          };
          a[g][0].call(f.exports, function(q) {
            return e(a[g][1][q] || q)
          }, f, f.exports, b, a, c, m)
        }
        return c[g].exports
      }
      for (var k = void 0, l = 0; l < m.length; l++) e(m[l]);
      return e
    })({
      1: [function(a, c, m) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var b = function() {
          function e(k, l) {
            for (var g = 0; g < l.length; g++) {
              var f = l[g];
              f.enumerable = f.enumerable || !1;
              f.configurable = !0;
              "value" in f && (f.writable = !0);
              Object.defineProperty(k,
                f.key, f)
            }
          }
          return function(k, l, g) {
            return l && e(k.prototype, l), g && e(k, g), k
          }
        }();
        a = function() {
          function e() {
            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
            !0
          }
          return b(e, null, [{
            key: "getCookieExpiresString",
            value: function(k) {
              k = new Date((new Date).getTime() + k);
              return "expires\x3d".concat(k.toGMTString(), ";")
            }
          }, {
            key: "getPathString",
            value: function(k) {
              return "path\x3d".concat(k, ";")
            }
          }, {
            key: "bake",
            value: function(k) {
              var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
              document.cookie = "smartbanner_exited\x3d1; ".concat(k ? e.getCookieExpiresString(k) : "", " ").concat(l ? e.getPathString(l) : "")
            }
          }, {
            key: "unbake",
            value: function() {
              document.cookie = "smartbanner_exited\x3d; expires\x3dThu, 01 Jan 1970 00:00:01 GMT;"
            }
          }, {
            key: "baked",
            get: function() {
              return "1" === document.cookie.replace(/(?:(?:^|.*;\s*)smartbanner_exited\s*=\s*([^;]*).*$)|^.*$/, "$1")
            }
          }]), e
        }();
        m.default = a
      }, {}],
      2: [function(a, c, m) {
        (function(b) {
          Object.defineProperty(m, "__esModule", {
            value: !0
          });
          var e = function() {
              function l(g,
                f) {
                for (var q = 0; q < f.length; q++) {
                  var n = f[q];
                  n.enumerable = n.enumerable || !1;
                  n.configurable = !0;
                  "value" in n && (n.writable = !0);
                  Object.defineProperty(g, n.key, n)
                }
              }
              return function(g, f, q) {
                return f && l(g.prototype, f), q && l(g, q), g
              }
            }(),
            k = function() {
              function l() {
                if (!(this instanceof l)) throw new TypeError("Cannot call a class as a function");
                !0
              }
              return e(l, null, [{
                  key: "platform",
                  value: function() {
                    return /iPhone|iPad|iPod/i.test(window.navigator.userAgent) ? "ios" : /Android/i.test(window.navigator.userAgent) ? "android" : void 0
                  }
                },
                {
                  key: "userAgentMatchesRegex",
                  value: function(g) {
                    return (new RegExp(g)).test(window.navigator.userAgent)
                  }
                }, {
                  key: "jQueryMobilePage",
                  value: function() {
                    return void 0 !== b.$ && "undefined" !== b.$.mobile && null !== document.querySelector(".ui-page")
                  }
                }, {
                  key: "wrapperElement",
                  value: function() {
                    var g = l.jQueryMobilePage() ? ".ui-page" : "html";
                    return document.querySelectorAll(g)
                  }
                }
              ]), l
            }();
          m.default = k
        }).call(this, void 0 !== z ? z : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }, {}],
      3: [function(a, c, m) {
        var b, e =
          (b = a("./smartbanner.js")) && b.__esModule ? b : {
            default: b
          };
        window.addEventListener("load", function() {
          (new e.default).publish()
        })
      }, {
        "./smartbanner.js": 5
      }],
      4: [function(a, c, m) {
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var b = function() {
          function e(k, l) {
            for (var g = 0; g < l.length; g++) {
              var f = l[g];
              f.enumerable = f.enumerable || !1;
              f.configurable = !0;
              "value" in f && (f.writable = !0);
              Object.defineProperty(k, f.key, f)
            }
          }
          return function(k, l, g) {
            return l && e(k.prototype, l), g && e(k, g), k
          }
        }();
        a = function() {
          function e() {
            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
            !0
          }
          return b(e, [{
            key: "parse",
            value: function() {
              var k = document.getElementsByTagName("meta"),
                l = {},
                g = null;
              return Array.from(k).forEach(function(f) {
                var q = f.getAttribute("name");
                f = f.getAttribute("content");
                q && f && function(n) {
                  return -1 !== n.indexOf("smartbanner:") && 0 < n.split(":")[1].length
                }(q) && 0 < f.length && (g = q.split(":")[1], -1 != Array.from(g).indexOf("-") && (g = function(n) {
                  var r = n.split("-");
                  return r.map(function(h, p) {
                    0 < p && (r[p] = h.charAt(0).toUpperCase() +
                      h.substring(1))
                  }), r.join("")
                }(g)), l[g] = f)
              }), l
            }
          }]), e
        }();
        m.default = a
      }, {}],
      5: [function(a, c, m) {
        function b(r) {
          return r && r.__esModule ? r : {
            default: r
          }
        }
  
        function e(r) {
          this.positioningDisabled || k(r.data.height)
        }
  
        function k(r) {
          for (var h, p = f.default.wrapperElement(), t = 0, u = p.length; t < u; t++)
            if (h = p[t], f.default.jQueryMobilePage()) {
              if (!h.getAttribute(n.originalTop)) {
                var x = parseFloat(getComputedStyle(h).top);
                h.setAttribute(n.originalTop, isNaN(x) ? 0 : x);
                h.style.top = "".concat(r, "px")
              }
            } else h.getAttribute(n.originalMarginTop) ||
              (x = parseFloat(getComputedStyle(h).marginTop), h.setAttribute(n.originalMarginTop, isNaN(x) ? 0 : x), h.style.marginTop = "".concat(r, "px"))
        }
        Object.defineProperty(m, "__esModule", {
          value: !0
        });
        var l = function() {
            function r(h, p) {
              for (var t = 0; t < p.length; t++) {
                var u = p[t];
                u.enumerable = u.enumerable || !1;
                u.configurable = !0;
                "value" in u && (u.writable = !0);
                Object.defineProperty(h, u.key, u)
              }
            }
            return function(h, p, t) {
              return p && r(h.prototype, p), t && r(h, t), h
            }
          }(),
          g = b(a("./optionparser.js")),
          f = b(a("./detector.js")),
          q = b(a("./bakery.js")),
          n = {
            originalTop: "data-smartbanner-original-top",
            originalMarginTop: "data-smartbanner-original-margin-top"
          };
        a = function() {
          function r() {
            if (!(this instanceof r)) throw new TypeError("Cannot call a class as a function");
            !0;
            this.options = (new g.default).parse();
            this.platform = f.default.platform()
          }
          return l(r, [{
              key: "publish",
              value: function() {
                if (0 === Object.keys(this.options).length || q.default.baked || this.userAgentExcluded || !this.platformEnabled && !this.userAgentIncluded) return !1;
                var h = document.createElement("div"),
                  p = document.querySelector("body");
                p.insertBefore(h, p.childNodes[0]);
                h.outerHTML = this.html;
                this.positioningDisabled || k(this.height);
                (function(t) {
                  document.querySelector(".js_smartbanner__exit").addEventListener("click", function(u) {
                    t.exit();
                    u.preventDefault();
                    $("a:visible", document).eq(0).focus()
                  });
                  f.default.jQueryMobilePage() && $(document).on("pagebeforeshow", t, e)
                })(this)
              }
            }, {
              key: "exit",
              value: function() {
                f.default.jQueryMobilePage() && $(document).off("pagebeforeshow", e);
                if (!this.positioningDisabled)
                  for (var h,
                      p = f.default.wrapperElement(), t = 0, u = p.length; t < u; t++) h = p[t], f.default.jQueryMobilePage() && h.getAttribute(n.originalTop) ? h.style.top = "".concat(h.getAttribute(n.originalTop), "px") : h.getAttribute(n.originalMarginTop) && (h.style.marginTop = "".concat(h.getAttribute(n.originalMarginTop), "px"));
                h = document.querySelector(".js_smartbanner");
                document.querySelector("body").removeChild(h);
                q.default.bake(this.hideTtl, this.hidePath)
              }
            }, {
              key: "originalTop",
              get: function() {
                var h = f.default.wrapperElement()[0];
                return parseFloat(h.getAttribute(n.originalTop))
              }
            },
            {
              key: "originalTopMargin",
              get: function() {
                var h = f.default.wrapperElement()[0];
                return parseFloat(h.getAttribute(n.originalMarginTop))
              }
            }, {
              key: "priceSuffix",
              get: function() {
                return "ios" === this.platform ? this.options.priceSuffixApple : "android" === this.platform ? this.options.priceSuffixGoogle : ""
              }
            }, {
              key: "icon",
              get: function() {
                return "android" === this.platform ? this.options.iconGoogle : this.options.iconApple
              }
            }, {
              key: "buttonUrl",
              get: function() {
                return "android" === this.platform ? this.options.buttonUrlGoogle : "ios" === this.platform ?
                  this.options.buttonUrlApple : "#"
              }
            }, {
              key: "html",
              get: function() {
                return '\x3cdiv class\x3d"smartbanner smartbanner--'.concat(this.options.customDesignModifier ? this.options.customDesignModifier : this.platform, ' js_smartbanner"\x3e\n      \x3ca href\x3d"javascript:void();" class\x3d"smartbanner__exit js_smartbanner__exit" role\x3d"button"\x3e\x3cspan class\x3d"sr-only"\x3eApp banner. Dismiss\x3c/span\x3e\x3c/a\x3e\n      \x3cdiv class\x3d"smartbanner__icon" style\x3d"background-image: url(').concat(this.icon,
                  ');"\x3e\x3c/div\x3e\n      \x3cdiv class\x3d"smartbanner__info"\x3e\n        \x3cdiv\x3e\n          \x3cdiv class\x3d"smartbanner__info__title"\x3e').concat(this.options.title, '\x3c/div\x3e\n          \x3cdiv class\x3d"smartbanner__info__author"\x3e').concat(this.options.author, '\x3c/div\x3e\n          \x3cdiv class\x3d"smartbanner__info__price"\x3e').concat(this.options.price, " ").concat(this.priceSuffix, '\x3c/div\x3e\n\x3c/div\x3e\n\x3c/div\x3e\n\x3ca role\x3d"button" href\x3d"').concat(this.buttonUrl,
                  '" target\x3d"_blank" class\x3d"smartbanner__button"\x3e\x3cspan class\x3d"smartbanner__button__label"\x3e').concat(this.options.button, '\x3c/span\x3e\x3cspan class\x3d"sr-only"\x3edetails on the app store\x3c/span\x3e\x3c/a\x3e\n\x3c/div\x3e')
              }
            }, {
              key: "height",
              get: function() {
                var h = document.querySelector(".js_smartbanner").offsetHeight;
                return void 0 !== h ? h : 0
              }
            }, {
              key: "platformEnabled",
              get: function() {
                var h = this.options.enabledPlatforms || "android,ios";
                return h && -1 !== h.replace(/\s+/g, "").split(",").indexOf(this.platform)
              }
            },
            {
              key: "positioningDisabled",
              get: function() {
                return "true" === this.options.disablePositioning
              }
            }, {
              key: "userAgentExcluded",
              get: function() {
                return !!this.options.excludeUserAgentRegex && f.default.userAgentMatchesRegex(this.options.excludeUserAgentRegex)
              }
            }, {
              key: "userAgentIncluded",
              get: function() {
                return !!this.options.includeUserAgentRegex && f.default.userAgentMatchesRegex(this.options.includeUserAgentRegex)
              }
            }, {
              key: "hideTtl",
              get: function() {
                return !!this.options.hideTtl && parseInt(this.options.hideTtl)
              }
            }
          ]), r
        }();
        m.default =
          a
      }, {
        "./bakery.js": 1,
        "./detector.js": 2,
        "./optionparser.js": 4
      }]
    }, {}, [3]);
    w = function() {
      try {
        var a = window.$ || window.jQuery,
          c = {
            canClose: !0,
            width: 288,
            mobilePosition: function(b) {
              b.find(".tooltip-container").attr("style") && b.find(".tooltip-container").removeAttr("style");
              b.find(".calc-tooltip").css({
                bottom: "auto",
                top: parseInt(b.offset().top, 10) - parseInt(a(document).scrollTop(), 10) - parseInt(b.find(".calc-tooltip").height(), 10)
              })
            }
          },
          m = function(b) {
            if (b.hasClass("focused")) return !0;
            a(".help.focused").removeClass("focused");
            var e = b.offset();
            parseInt(e.top, 10) - parseInt(b.find(".calc-tooltip").height(), 10) < parseInt(a("body").scrollTop(), 10) ? (c.canClose = !1, a("html,body").animate({
              scrollTop: parseInt(e.top, 10) - parseInt(b.find(".calc-tooltip").height(), 10)
            }, 100, function() {
              "static" === b.css("position") ? c.mobilePosition(b) : b.find(".calc-tooltip").attr("style") && b.find(".calc-tooltip").removeAttr("style")
            })) : "static" === b.css("position") ? c.mobilePosition(b) : b.find(".calc-tooltip").attr("style") && b.find(".calc-tooltip").removeAttr("style");
            b.addClass("focused");
            e = document.querySelector(".tooltip-container");
            var k = document.querySelector(".bubble-arrow-border");
            void 0 !== e && null != e && void 0 !== k && null != k && (b.hasClass("focused") && 0 > b.find(".tooltip-container").offset().left && (b.find(".tooltip-container").attr("style", "left: 0px"), b.find(".bubble-arrow-border").attr("style", "left: 10px")), e = b.find(".tooltip-container"), e = a(window).width() - (e.offset().left + e.outerWidth()), 0 > e && (b.find(".calc-tooltip").attr("style", "left: ".concat(e, "px")),
              b.find(".bubble-arrow-border").attr("style", "left: ".concat(Math.abs(e), "px"))));
            b.find(".tooltip-container").removeAttr("aria-hidden");
            var l = b.find(".tooltip-title"),
              g = b.find(".tooltip-content"),
              f = "";
            0 < l.length && (f = l.html(), l.html(""));
            var q = g.html();
            return g.html(""), setTimeout(function() {
              0 < l.length && l.html(f);
              g.html(q)
            }, 100), !1
          };
        a("*").on("touchstart", function(b) {
          c.canClose && a(".help.focused,.help:focus").length && 1 > a(b.target).closest(".help").length && (a(".help.focused").removeClass("focused"),
            a(".help:focus").trigger("blur"))
        });
        a(".ie6 .help,.ie7 .help,.ie8 .help").on("blur", function() {
          a(this).removeClass("focused")
        });
        a(".btn-close").on("focus", function() {
          a(this).attr("aria-label", "Close")
        });
        a(".btn-close").on("focusout", function() {
          a(this).removeAttr("aria-label", "Close")
        });
        a(".help").on("focus", function() {
          m(a(this));
          a(this).find(".btn-close").attr("aria-label", "Close")
        });
        a(".help").on("click", function() {
          m(a(this))
        });
        a(".help").on("keydown", function(b) {
          27 !== b.keyCode && 27 !== b.which || a(this).closest(".help").hasClass("focused") &&
            (b.stopPropagation(), a(this).closest(".help").removeClass("focused"), a(this).closest(".help").find(".tooltip-container").attr("aria-hidden", "true"), a(b.target).trigger("blur"))
        });
        a(".help").on("focusout", function(b) {
          a(b.relatedTarget).is(".btn-close") || a(this).closest(".help").hasClass("focused") && (b.stopPropagation(), a(this).closest(".help").removeClass("focused"), a(this).closest(".help").find(".tooltip-container").attr("aria-hidden", "true"), a(b.target).trigger("blur"))
        });
        a(".help .btn-close").on("keydown",
          function(b) {
            a(this).closest(".help").hasClass("focused") && (b.stopPropagation(), a(this).closest(".help").removeClass("focused"), a(".help").trigger("blur"), a(this).closest(".help").find(".tooltip-container").attr("aria-hidden", "true"))
          });
        a(".help .btn-close").on("click", function(b) {
          a(this).closest(".help").hasClass("focused") && (b.stopPropagation(), a(this).closest(".help").removeClass("focused"), a(".help").trigger("blur"), a(this).closest(".help").find(".tooltip-container").attr("aria-hidden", "true"))
        });
        a(window).on("scroll", function() {
          "static" === a(".help").css("position") && c.canClose && a(".help:focus").trigger("blur")
        })
      } catch (b) {}
    };
    window.addEventListener("load", w);
    "complete" === document.readyState && w();
    window.main = {}
  }();
  