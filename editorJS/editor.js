/*! For license information please see editor.js.LICENSE.txt */ ! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.EditorJS = e() : t.EditorJS = e() }(window, (function() {
    return function(t) {
        var e = {};

        function n(o) { if (e[o]) return e[o].exports; var r = e[o] = { i: o, l: !1, exports: {} }; return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports }
        return n.m = t, n.c = e, n.d = function(t, e, o) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var r in t) n.d(o, r, function(e) { return t[e] }.bind(null, r));
            return o
        }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 187)
    }([function(t, e, n) {
        var o = n(10),
            r = n(17),
            i = n(27),
            a = n(23),
            s = n(31),
            l = function(t, e, n) {
                var c, u, f, d, p = t & l.F,
                    h = t & l.G,
                    v = t & l.S,
                    g = t & l.P,
                    y = t & l.B,
                    b = h ? o : v ? o[e] || (o[e] = {}) : (o[e] || {}).prototype,
                    m = h ? r : r[e] || (r[e] = {}),
                    k = m.prototype || (m.prototype = {});
                for (c in h && (n = e), n) f = ((u = !p && b && void 0 !== b[c]) ? b : n)[c], d = y && u ? s(f, o) : g && "function" == typeof f ? s(Function.call, f) : f, b && a(b, c, f, t & l.U), m[c] != f && i(m, c, d), g && k[c] != f && (k[c] = f)
            };
        o.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
    }, function(t, e) { t.exports = function(t) { return t && t.__esModule ? t : { default: t } } }, function(t, e) { t.exports = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } }, function(t, e) {
        function n(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        t.exports = function(t, e, o) { return e && n(t.prototype, e), o && n(t, o), t }
    }, function(t, e) {
        function n(e) { return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, n(e) }
        t.exports = n
    }, function(t, e, n) {
        var o = n(110);
        t.exports = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && o(t, e)
        }
    }, function(t, e, n) {
        var o = n(59),
            r = n(152);
        t.exports = function(t, e) { return !e || "object" !== o(e) && "function" != typeof e ? r(t) : e }
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(371), n(21), n(403), n(14)], void 0 === (i = "function" == typeof(o = function(t, e, o, r, i, a) {
            "use strict";
            var s, l = n(1);

            function c(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "log",
                    o = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "color: inherit";
                if ("console" in window && window.console[n]) {
                    var i = ["info", "log", "warn", "error"].includes(n),
                        a = [];
                    switch (c.logLevel) {
                        case s.ERROR:
                            if ("error" !== n) return;
                            break;
                        case s.WARN:
                            if (!["error", "warn"].includes(n)) return;
                            break;
                        case s.INFO:
                            if (!i || t) return
                    }
                    o && a.push(o);
                    var l = "Editor.js ".concat("2.25.0"),
                        u = "line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";
                    t && (i ? (a.unshift(u, r), e = "%c".concat(l, "%c ").concat(e)) : e = "( ".concat(l, " )").concat(e));
                    try {
                        if (i)
                            if (o) {
                                var f;
                                (f = console)[n].apply(f, ["".concat(e, " %o")].concat(a))
                            } else {
                                var d;
                                (d = console)[n].apply(d, [e].concat(a))
                            }
                        else console[n](e)
                    } catch (t) {}
                }
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.setLogLevel = function(t) { c.logLevel = t }, t.typeOf = d, t.isFunction = p, t.isObject = h, t.isString = function(t) { return "string" === d(t) }, t.isBoolean = function(t) { return "boolean" === d(t) }, t.isNumber = function(t) { return "number" === d(t) }, t.isUndefined = v, t.isClass = function(t) { return p(t) && /^\s*class\s+/.test(t.toString()) }, t.isEmpty = function(t) { return !t || 0 === Object.keys(t).length && t.constructor === Object }, t.isPromise = function(t) { return Promise.resolve(t) === t }, t.isPrintableKey = function(t) { return t > 47 && t < 58 || 32 === t || 13 === t || 229 === t || t > 64 && t < 91 || t > 95 && t < 112 || t > 185 && t < 193 || t > 218 && t < 223 }, t.sequence = function(t) { return g.apply(this, arguments) }, t.array = function(t) { return Array.prototype.slice.call(t) }, t.delay = function(t, e) {
                    return function() {
                        var n = this,
                            o = arguments;
                        window.setTimeout((function() { return t.apply(n, o) }), e)
                    }
                }, t.getFileExtension = function(t) { return t.name.split(".").pop() }, t.isValidMimeType = function(t) { return /^[-\w]+\/([-+\w]+|\*)$/.test(t) }, t.debounce = function(t, e, n) {
                    var o, r = this;
                    return function() {
                        for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                        var l = r,
                            c = function() { o = null, n || t.apply(l, a) },
                            u = n && !o;
                        window.clearTimeout(o), o = window.setTimeout(c, e), u && t.apply(l, a)
                    }
                }, t.throttle = function(t, e) {
                    var n, o, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        a = null,
                        s = 0;
                    i || (i = {});
                    var l = function() { s = !1 === i.leading ? 0 : Date.now(), a = null, r = t.apply(n, o), a || (n = o = null) };
                    return function() {
                        var c = Date.now();
                        s || !1 !== i.leading || (s = c);
                        var u = e - (c - s);
                        return n = this, o = arguments, u <= 0 || u > e ? (a && (clearTimeout(a), a = null), s = c, r = t.apply(n, o), a || (n = o = null)) : a || !1 === i.trailing || (a = setTimeout(l, u)), r
                    }
                }, t.copyTextToClipboard = function(t) {
                    var e = a.default.make("div", "codex-editor-clipboard", { innerHTML: t });
                    document.body.appendChild(e);
                    var n = window.getSelection(),
                        o = document.createRange();
                    o.selectNode(e), window.getSelection().removeAllRanges(), n.addRange(o), document.execCommand("copy"), document.body.removeChild(e)
                }, t.getUserOS = y, t.capitalize = function(t) { return t[0].toUpperCase() + t.slice(1) }, t.deepMerge = function t(e) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    if (!r.length) return e;
                    var a = r.shift();
                    if (h(e) && h(a))
                        for (var s in a) h(a[s]) ? (e[s] || Object.assign(e, (0, o.default)({}, s, {})), t(e[s], a[s])) : Object.assign(e, (0, o.default)({}, s, a[s]));
                    return t.apply(void 0, [e].concat(r))
                }, t.beautifyShortcut = function(t) { var e = y(); return t = t.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), t = e.mac ? t.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : t.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN") }, t.getValidUrl = function(t) { try { return new URL(t).href } catch (t) {} return "//" === t.substring(0, 2) ? window.location.protocol + t : window.location.origin + t }, t.generateBlockId = function() { return (0, i.nanoid)(10) }, t.openTab = function(t) { window.open(t, "_blank") }, t.generateId = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return "".concat(t).concat(Math.floor(1e8 * Math.random()).toString(16)) }, t.deprecationAssert = function(t, e, n) {
                    var o = "«".concat(e, "» is deprecated and will be removed in the next major release. Please use the «").concat(n, "» instead.");
                    t && f(o, "warn")
                }, t.cacheable = function(t, e, n) {
                    var o = n.value ? "value" : "get",
                        r = n[o],
                        i = "#".concat(e, "Cache");
                    if (n[o] = function() {
                            if (void 0 === this[i]) {
                                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                this[i] = r.apply.apply(r, [this].concat(e))
                            }
                            return this[i]
                        }, "get" === o && n.set) {
                        var a = n.set;
                        n.set = function(e) { delete t[i], a.apply(this, e) }
                    }
                    return n
                }, t.isMobileScreen = function() { return window.matchMedia("(max-width: 650px)").matches }, t.equals = function(t, e) {
                    var n = Array.isArray(t) || h(t),
                        o = Array.isArray(e) || h(e);
                    return n || o ? JSON.stringify(t) === JSON.stringify(e) : t === e
                }, t.isIosDevice = t.isTouchSupported = t.logLabeled = t.log = t.mouseButtons = t.keyCodes = t.LogLevels = void 0, e = l(e), o = l(o), r = l(r), a = l(a), t.LogLevels = s,
                function(t) { t.VERBOSE = "VERBOSE", t.INFO = "INFO", t.WARN = "WARN", t.ERROR = "ERROR" }(s || (t.LogLevels = s = {})), t.keyCodes = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, LEFT: 37, UP: 38, DOWN: 40, RIGHT: 39, DELETE: 46, META: 91 }, t.mouseButtons = { LEFT: 0, WHEEL: 1, RIGHT: 2, BACKWARD: 3, FORWARD: 4 }, c.logLevel = s.VERBOSE;
            var u = c.bind(window, !1);
            t.log = u;
            var f = c.bind(window, !0);

            function d(t) { return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase() }

            function p(t) { return "function" === d(t) || "asyncfunction" === d(t) }

            function h(t) { return "object" === d(t) }

            function v(t) { return "undefined" === d(t) }

            function g() {
                return (g = (0, r.default)(e.default.mark((function t(n) {
                    var o, i, a, s, l = arguments;
                    return e.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return s = function() {
                                    return (s = (0, r.default)(e.default.mark((function t(n, o, r) {
                                        return e.default.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, t.next = 3, n.function(n.data);
                                                case 3:
                                                    return t.next = 5, o(v(n.data) ? {} : n.data);
                                                case 5:
                                                    t.next = 10;
                                                    break;
                                                case 7:
                                                    t.prev = 7, t.t0 = t.catch(0), r(v(n.data) ? {} : n.data);
                                                case 10:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [0, 7]
                                        ])
                                    })))).apply(this, arguments)
                                }, a = function(t, e, n) { return s.apply(this, arguments) }, o = l.length > 1 && void 0 !== l[1] ? l[1] : function() {}, i = l.length > 2 && void 0 !== l[2] ? l[2] : function() {}, t.abrupt("return", n.reduce(function() {
                                    var t = (0, r.default)(e.default.mark((function t(n, r) {
                                        return e.default.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, n;
                                                case 2:
                                                    return t.abrupt("return", a(r, o, i));
                                                case 3:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function(e, n) { return t.apply(this, arguments) }
                                }(), Promise.resolve()));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function y() {
                var t = { win: !1, mac: !1, x11: !1, linux: !1 },
                    e = Object.keys(t).find((function(t) { return -1 !== navigator.appVersion.toLowerCase().indexOf(t) }));
                return e ? (t[e] = !0, t) : t
            }
            t.logLabeled = f;
            var b = "ontouchstart" in document.documentElement;
            t.isTouchSupported = b;
            var m = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1);
            t.isIosDevice = m
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o = n(59);

        function r() { if ("function" != typeof WeakMap) return null; var t = new WeakMap; return r = function() { return t }, t }
        t.exports = function(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== o(t) && "function" != typeof t) return { default: t };
            var e = r();
            if (e && e.has(t)) return e.get(t);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in t)
                if (Object.prototype.hasOwnProperty.call(t, a)) {
                    var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a]
                }
            return n.default = t, e && e.set(t, n), n
        }
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(111)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);

            function l(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function(t, e) { if (t) { if ("string" == typeof t) return c(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0 } }(t))) {
                        var e = 0,
                            n = function() {};
                        return { s: n, n: function() { return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] } }, e: function(t) { throw t }, f: n }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, r, i = !0,
                    a = !1;
                return { s: function() { o = t[Symbol.iterator]() }, n: function() { var t = o.next(); return i = t.done, t }, e: function(t) { a = !0, r = t }, f: function() { try { i || null == o.return || o.return() } finally { if (a) throw r } } }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o
            }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var u = function() {
                function t(e) {
                    var n = this,
                        o = e.config,
                        i = e.eventsDispatcher;
                    if ((0, r.default)(this, t), this.nodes = {}, this.listeners = new a.default, this.readOnlyMutableListeners = {
                            on: function(t, e, o) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                n.mutableListenerIds.push(n.listeners.on(t, e, o, r))
                            },
                            clearAll: function() {
                                var t, e = l(n.mutableListenerIds);
                                try {
                                    for (e.s(); !(t = e.n()).done;) {
                                        var o = t.value;
                                        n.listeners.offById(o)
                                    }
                                } catch (t) { e.e(t) } finally { e.f() }
                                n.mutableListenerIds = []
                            }
                        }, this.mutableListenerIds = [], (this instanceof t ? this.constructor : void 0) === t) throw new TypeError("Constructors for abstract class Module are not allowed.");
                    this.config = o, this.eventsDispatcher = i
                }
                return (0, i.default)(t, [{
                    key: "removeAllNodes",
                    value: function() {
                        for (var t in this.nodes) {
                            var e = this.nodes[t];
                            e instanceof HTMLElement && e.remove()
                        }
                    }
                }, { key: "state", set: function(t) { this.Editor = t } }, { key: "isRtl", get: function() { return "rtl" === this.config.i18n.direction } }]), t
            }();
            o.default = u, u.displayName = "Module", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e) { var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e, n) {
        var o = n(13);
        t.exports = function(t) { if (!o(t)) throw TypeError(t + " is not an object!"); return t }
    }, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(42), n(2), n(3), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s) {
            "use strict";
            var l = n(8),
                c = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = c(r), i = c(i), a = c(a), s = l(s);
            var u = function() {
                function t() {
                    (0, i.default)(this, t)
                }
                return (0, a.default)(t, null, [{ key: "isSingleTag", value: function(t) { return t.tagName && ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(t.tagName) } }, { key: "isLineBreakTag", value: function(t) { return t && t.tagName && ["BR", "WBR"].includes(t.tagName) } }, {
                    key: "make",
                    value: function(t) {
                        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = document.createElement(t);
                        for (var a in Array.isArray(n) ? (e = i.classList).add.apply(e, (0, r.default)(n)) : n && i.classList.add(n), o) Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
                        return i
                    }
                }, { key: "text", value: function(t) { return document.createTextNode(t) } }, {
                    key: "svg",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 14,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 14,
                            o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        return o.classList.add("icon", "icon--" + t), o.setAttribute("width", e + "px"), o.setAttribute("height", n + "px"), o.innerHTML = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t, '"></use>'), o
                    }
                }, { key: "append", value: function(t, e) { Array.isArray(e) ? e.forEach((function(e) { return t.appendChild(e) })) : t.appendChild(e) } }, { key: "prepend", value: function(t, e) { Array.isArray(e) ? (e = e.reverse()).forEach((function(e) { return t.prepend(e) })) : t.prepend(e) } }, {
                    key: "swap",
                    value: function(t, e) {
                        var n = document.createElement("div"),
                            o = t.parentNode;
                        o.insertBefore(n, t), o.insertBefore(t, e), o.insertBefore(e, n), o.removeChild(n)
                    }
                }, {
                    key: "find",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        return t.querySelector(e)
                    }
                }, { key: "get", value: function(t) { return document.getElementById(t) } }, {
                    key: "findAll",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        return t.querySelectorAll(e)
                    }
                }, { key: "findAllInputs", value: function(e) { return s.array(e.querySelectorAll(t.allInputsSelector)).reduce((function(e, n) { return t.isNativeInput(n) || t.containsOnlyInlineElements(n) ? [].concat((0, r.default)(e), [n]) : [].concat((0, r.default)(e), (0, r.default)(t.getDeepestBlockElements(n))) }), []) } }, {
                    key: "getDeepestNode",
                    value: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            o = n ? "lastChild" : "firstChild",
                            r = n ? "previousSibling" : "nextSibling";
                        if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
                            var i = e[o];
                            if (t.isSingleTag(i) && !t.isNativeInput(i) && !t.isLineBreakTag(i))
                                if (i[r]) i = i[r];
                                else {
                                    if (!i.parentNode[r]) return i.parentNode;
                                    i = i.parentNode[r]
                                }
                            return this.getDeepestNode(i, n)
                        }
                        return e
                    }
                }, { key: "isElement", value: function(t) { return !s.isNumber(t) && t && t.nodeType && t.nodeType === Node.ELEMENT_NODE } }, { key: "isFragment", value: function(t) { return !s.isNumber(t) && t && t.nodeType && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE } }, { key: "isContentEditable", value: function(t) { return "true" === t.contentEditable } }, { key: "isNativeInput", value: function(t) { return !(!t || !t.tagName) && ["INPUT", "TEXTAREA"].includes(t.tagName) } }, {
                    key: "canSetCaret",
                    value: function(e) {
                        var n = !0;
                        if (t.isNativeInput(e)) switch (e.type) {
                            case "file":
                            case "checkbox":
                            case "radio":
                            case "hidden":
                            case "submit":
                            case "button":
                            case "image":
                            case "reset":
                                n = !1
                        } else n = t.isContentEditable(e);
                        return n
                    }
                }, { key: "isNodeEmpty", value: function(t) { return !(this.isSingleTag(t) && !this.isLineBreakTag(t)) && 0 === (this.isElement(t) && this.isNativeInput(t) ? t.value : t.textContent.replace("​", "")).trim().length } }, { key: "isLeaf", value: function(t) { return !!t && 0 === t.childNodes.length } }, {
                    key: "isEmpty",
                    value: function(t) {
                        t.normalize();
                        for (var e = [t]; e.length > 0;)
                            if (t = e.shift()) {
                                if (this.isLeaf(t) && !this.isNodeEmpty(t)) return !1;
                                t.childNodes && e.push.apply(e, (0, r.default)(Array.from(t.childNodes)))
                            }
                        return !0
                    }
                }, { key: "isHTMLString", value: function(e) { var n = t.make("div"); return n.innerHTML = e, n.childElementCount > 0 } }, { key: "getContentLength", value: function(e) { return t.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length } }, { key: "containsOnlyInlineElements", value: function(e) { var n; return s.isString(e) ? (n = document.createElement("div")).innerHTML = e : n = e, Array.from(n.children).every((function e(n) { return !t.blockElements.includes(n.tagName.toLowerCase()) && Array.from(n.children).every(e) })) } }, { key: "getDeepestBlockElements", value: function(e) { return t.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((function(e, n) { return [].concat((0, r.default)(e), (0, r.default)(t.getDeepestBlockElements(n))) }), []) } }, { key: "getHolder", value: function(t) { return s.isString(t) ? document.getElementById(t) : t } }, { key: "isExtensionNode", value: function(t) { return t && ["GRAMMARLY-EXTENSION"].includes(t.nodeName) } }, { key: "isAnchor", value: function(t) { return "a" === t.tagName.toLowerCase() } }, {
                    key: "offset",
                    value: function(t) {
                        var e = t.getBoundingClientRect(),
                            n = window.pageXOffset || document.documentElement.scrollLeft,
                            o = window.pageYOffset || document.documentElement.scrollTop,
                            r = e.top + o,
                            i = e.left + n;
                        return { top: r, left: i, bottom: r + e.height, right: i + e.width }
                    }
                }, { key: "allInputsSelector", get: function() { return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((function(t) { return 'input[type="'.concat(t, '"]') })).join(", ") } }, { key: "blockElements", get: function() { return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tr", "tfoot", "ul", "video"] } }]), t
            }();
            o.default = u, u.displayName = "Dom", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o = n(69)("wks"),
            r = n(44),
            i = n(10).Symbol,
            a = "function" == typeof i;
        (t.exports = function(t) { return o[t] || (o[t] = a && i[t] || (a ? i : r)("Symbol." + t)) }).store = o
    }, function(t, e, n) {
        var o = n(33),
            r = Math.min;
        t.exports = function(t) { return t > 0 ? r(o(t), 9007199254740991) : 0 }
    }, function(t, e) { var n = t.exports = { version: "2.6.11" }; "number" == typeof __e && (__e = n) }, function(t, e, n) { t.exports = !n(11)((function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a })) }, function(t, e, n) {
        var o = n(12),
            r = n(116),
            i = n(40),
            a = Object.defineProperty;
        e.f = n(18) ? Object.defineProperty : function(t, e, n) {
            if (o(t), e = i(e, !0), o(n), r) try { return a(t, e, n) } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) { t.exports = n(147) }, function(t, e) {
        function n(t, e, n, o, r, i, a) {
            try {
                var s = t[i](a),
                    l = s.value
            } catch (t) { return void n(t) }
            s.done ? e(l) : Promise.resolve(l).then(o, r)
        }
        t.exports = function(t) {
            return function() {
                var e = this,
                    o = arguments;
                return new Promise((function(r, i) {
                    var a = t.apply(e, o);

                    function s(t) { n(a, r, i, s, l, "next", t) }

                    function l(t) { n(a, r, i, s, l, "throw", t) }
                    s(void 0)
                }))
            }
        }
    }, function(t, e, n) {
        var o = n(38);
        t.exports = function(t) { return Object(o(t)) }
    }, function(t, e, n) {
        var o = n(10),
            r = n(27),
            i = n(26),
            a = n(44)("src"),
            s = n(192),
            l = ("" + s).split("toString");
        n(17).inspectSource = function(t) { return s.call(t) }, (t.exports = function(t, e, n, s) {
            var c = "function" == typeof n;
            c && (i(n, "name") || r(n, "name", e)), t[e] !== n && (c && (i(n, a) || r(n, a, t[e] ? "" + t[e] : l.join(String(e)))), t === o ? t[e] = n : s ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)))
        })(Function.prototype, "toString", (function() { return "function" == typeof this && this[a] || s.call(this) }))
    }, function(t, e, n) {
        var o = n(0),
            r = n(11),
            i = n(38),
            a = /"/g,
            s = function(t, e, n, o) {
                var r = String(i(t)),
                    s = "<" + e;
                return "" !== n && (s += " " + n + '="' + String(o).replace(a, "&quot;") + '"'), s + ">" + r + "</" + e + ">"
            };
        t.exports = function(t, e) {
            var n = {};
            n[t] = e(s), o(o.P + o.F * r((function() { var e = "" [t]('"'); return e !== e.toLowerCase() || e.split('"').length > 3 })), "String", n)
        }
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7), n(14)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s) {
            "use strict";
            var l = n(8),
                c = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = c(r), i = c(i), a = l(a), s = c(s);
            var u = function() {
                function t() {
                    (0, r.default)(this, t), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat"
                }
                return (0, i.default)(t, [{ key: "removeFakeBackground", value: function() { this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat)) } }, { key: "setFakeBackground", value: function() { document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0 } }, { key: "save", value: function() { this.savedSelectionRange = t.range } }, {
                    key: "restore",
                    value: function() {
                        if (this.savedSelectionRange) {
                            var t = window.getSelection();
                            t.removeAllRanges(), t.addRange(this.savedSelectionRange)
                        }
                    }
                }, { key: "clearSaved", value: function() { this.savedSelectionRange = null } }, {
                    key: "collapseToEnd",
                    value: function() {
                        var t = window.getSelection(),
                            e = document.createRange();
                        e.selectNodeContents(t.focusNode), e.collapse(!1), t.removeAllRanges(), t.addRange(e)
                    }
                }, {
                    key: "findParentTag",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                            o = window.getSelection(),
                            r = null;
                        if (!o || !o.anchorNode || !o.focusNode) return null;
                        var i = [o.anchorNode, o.focusNode];
                        return i.forEach((function(o) { for (var i = n; i > 0 && o.parentNode && (o.tagName !== t || (r = o, e && o.classList && !o.classList.contains(e) && (r = null), !r));) o = o.parentNode, i-- })), r
                    }
                }, {
                    key: "expandToTag",
                    value: function(t) {
                        var e = window.getSelection();
                        e.removeAllRanges();
                        var n = document.createRange();
                        n.selectNodeContents(t), e.addRange(n)
                    }
                }], [{
                    key: "isSelectionAtEditor",
                    value: function(e) {
                        if (!e) return !1;
                        var n = e.anchorNode || e.focusNode;
                        n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
                        var o = null;
                        return n && n instanceof Element && (o = n.closest(".".concat(t.CSS.editorZone))), !!o && o.nodeType === Node.ELEMENT_NODE
                    }
                }, {
                    key: "isRangeAtEditor",
                    value: function(e) {
                        if (e) {
                            var n = e.startContainer;
                            n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
                            var o = null;
                            return n && n instanceof Element && (o = n.closest(".".concat(t.CSS.editorZone))), !!o && o.nodeType === Node.ELEMENT_NODE
                        }
                    }
                }, { key: "getRangeFromSelection", value: function(t) { return t && t.rangeCount ? t.getRangeAt(0) : null } }, { key: "get", value: function() { return window.getSelection() } }, {
                    key: "setCursor",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = document.createRange(),
                            o = window.getSelection();
                        if (s.default.isNativeInput(t)) { if (!s.default.canSetCaret(t)) return; return t.focus(), t.selectionStart = t.selectionEnd = e, t.getBoundingClientRect() }
                        return n.setStart(t, e), n.setEnd(t, e), o.removeAllRanges(), o.addRange(n), n.getBoundingClientRect()
                    }
                }, {
                    key: "addFakeCursor",
                    value: function(e) {
                        var n = t.range,
                            o = s.default.make("span", "codex-editor__fake-cursor");
                        o.dataset.mutationFree = "true", !n || e && !e.contains(n.startContainer) || (n.collapse(), n.insertNode(o))
                    }
                }, {
                    key: "removeFakeCursor",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
                            e = s.default.find(t, ".codex-editor__fake-cursor");
                        e && e.remove()
                    }
                }, { key: "CSS", get: function() { return { editorWrapper: "codex-editor", editorZone: "codex-editor__redactor" } } }, { key: "anchorNode", get: function() { var t = window.getSelection(); return t ? t.anchorNode : null } }, { key: "anchorElement", get: function() { var t = window.getSelection(); if (!t) return null; var e = t.anchorNode; return e ? s.default.isElement(e) ? e : e.parentElement : null } }, { key: "anchorOffset", get: function() { var t = window.getSelection(); return t ? t.anchorOffset : null } }, { key: "isCollapsed", get: function() { var t = window.getSelection(); return t ? t.isCollapsed : null } }, { key: "isAtEditor", get: function() { return this.isSelectionAtEditor(t.get()) } }, { key: "isSelectionExists", get: function() { return !!t.get().anchorNode } }, { key: "range", get: function() { return this.getRangeFromSelection(this.get()) } }, {
                    key: "rect",
                    get: function() {
                        var t, e = document.selection,
                            n = { x: 0, y: 0, width: 0, height: 0 };
                        if (e && "Control" !== e.type) return t = (e = e).createRange(), n.x = t.boundingLeft, n.y = t.boundingTop, n.width = t.boundingWidth, n.height = t.boundingHeight, n;
                        if (!window.getSelection) return a.log("Method window.getSelection is not supported", "warn"), n;
                        if (null === (e = window.getSelection()).rangeCount || isNaN(e.rangeCount)) return a.log("Method SelectionUtils.rangeCount is not supported", "warn"), n;
                        if (0 === e.rangeCount) return n;
                        if ((t = e.getRangeAt(0).cloneRange()).getBoundingClientRect && (n = t.getBoundingClientRect()), 0 === n.x && 0 === n.y) {
                            var o = document.createElement("span");
                            if (o.getBoundingClientRect) {
                                o.appendChild(document.createTextNode("​")), t.insertNode(o), n = o.getBoundingClientRect();
                                var r = o.parentNode;
                                r.removeChild(o), r.normalize()
                            }
                        }
                        return n
                    }
                }, { key: "text", get: function() { return window.getSelection ? window.getSelection().toString() : "" } }]), t
            }();
            o.default = u, u.displayName = "SelectionUtils", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) { return n.call(t, e) }
    }, function(t, e, n) {
        var o = n(19),
            r = n(43);
        t.exports = n(18) ? function(t, e, n) { return o.f(t, e, r(1, n)) } : function(t, e, n) { return t[e] = n, t }
    }, function(t, e, n) {
        var o = n(63),
            r = n(38);
        t.exports = function(t) { return o(r(t)) }
    }, function(t, e, n) {
        "use strict";
        var o = n(11);
        t.exports = function(t, e) { return !!t && o((function() { e ? t.call(null, (function() {}), 1) : t.call(null) })) }
    }, function(t, e, n) {
        var o = n(361),
            r = n(362),
            i = n(148),
            a = n(363);
        t.exports = function(t, e) { return o(t) || r(t, e) || i(t, e) || a() }
    }, function(t, e, n) {
        var o = n(32);
        t.exports = function(t, e, n) {
            if (o(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) { return t.call(e, n) };
                case 2:
                    return function(n, o) { return t.call(e, n, o) };
                case 3:
                    return function(n, o, r) { return t.call(e, n, o, r) }
            }
            return function() { return t.apply(e, arguments) }
        }
    }, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function(t, e) {
        var n = Math.ceil,
            o = Math.floor;
        t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t) }
    }, function(t, e, n) {
        var o = n(64),
            r = n(43),
            i = n(28),
            a = n(40),
            s = n(26),
            l = n(116),
            c = Object.getOwnPropertyDescriptor;
        e.f = n(18) ? c : function(t, e) {
            if (t = i(t), e = a(e, !0), l) try { return c(t, e) } catch (t) {}
            if (s(t, e)) return r(!o.f.call(t, e), t[e])
        }
    }, function(t, e, n) {
        var o = n(0),
            r = n(17),
            i = n(11);
        t.exports = function(t, e) {
            var n = (r.Object || {})[t] || Object[t],
                a = {};
            a[t] = e(n), o(o.S + o.F * i((function() { n(1) })), "Object", a)
        }
    }, function(t, e, n) {
        var o = n(31),
            r = n(63),
            i = n(22),
            a = n(16),
            s = n(132);
        t.exports = function(t, e) {
            var n = 1 == t,
                l = 2 == t,
                c = 3 == t,
                u = 4 == t,
                f = 6 == t,
                d = 5 == t || f,
                p = e || s;
            return function(e, s, h) {
                for (var v, g, y = i(e), b = r(y), m = o(s, h, 3), k = a(b.length), x = 0, w = n ? p(e, k) : l ? p(e, 0) : void 0; k > x; x++)
                    if ((d || x in b) && (g = m(v = b[x], x, y), t))
                        if (n) w[x] = g;
                        else if (g) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return v;
                        case 6:
                            return x;
                        case 2:
                            w.push(v)
                    } else if (u) return !1;
                return f ? -1 : c || u ? u : w
            }
        }
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) { return n.call(t).slice(8, -1) }
    }, function(t, e) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on  " + t); return t } }, function(t, e, n) {
        "use strict";
        if (n(18)) {
            var o = n(45),
                r = n(10),
                i = n(11),
                a = n(0),
                s = n(80),
                l = n(109),
                c = n(31),
                u = n(57),
                f = n(43),
                d = n(27),
                p = n(58),
                h = n(33),
                v = n(16),
                g = n(143),
                y = n(47),
                b = n(40),
                m = n(26),
                k = n(65),
                x = n(13),
                w = n(22),
                S = n(101),
                T = n(48),
                E = n(50),
                B = n(49).f,
                C = n(103),
                _ = n(44),
                I = n(15),
                O = n(36),
                M = n(70),
                R = n(66),
                A = n(105),
                N = n(55),
                L = n(73),
                P = n(56),
                D = n(104),
                j = n(134),
                F = n(19),
                H = n(34),
                U = F.f,
                z = H.f,
                W = r.RangeError,
                Y = r.TypeError,
                V = r.Uint8Array,
                X = Array.prototype,
                K = l.ArrayBuffer,
                G = l.DataView,
                Z = O(0),
                q = O(2),
                J = O(3),
                $ = O(4),
                Q = O(5),
                tt = O(6),
                et = M(!0),
                nt = M(!1),
                ot = A.values,
                rt = A.keys,
                it = A.entries,
                at = X.lastIndexOf,
                st = X.reduce,
                lt = X.reduceRight,
                ct = X.join,
                ut = X.sort,
                ft = X.slice,
                dt = X.toString,
                pt = X.toLocaleString,
                ht = I("iterator"),
                vt = I("toStringTag"),
                gt = _("typed_constructor"),
                yt = _("def_constructor"),
                bt = s.CONSTR,
                mt = s.TYPED,
                kt = s.VIEW,
                xt = O(1, (function(t, e) { return Bt(R(t, t[yt]), e) })),
                wt = i((function() { return 1 === new V(new Uint16Array([1]).buffer)[0] })),
                St = !!V && !!V.prototype.set && i((function() { new V(1).set({}) })),
                Tt = function(t, e) { var n = h(t); if (n < 0 || n % e) throw W("Wrong offset!"); return n },
                Et = function(t) { if (x(t) && mt in t) return t; throw Y(t + " is not a typed array!") },
                Bt = function(t, e) { if (!x(t) || !(gt in t)) throw Y("It is not a typed array constructor!"); return new t(e) },
                Ct = function(t, e) { return _t(R(t, t[yt]), e) },
                _t = function(t, e) { for (var n = 0, o = e.length, r = Bt(t, o); o > n;) r[n] = e[n++]; return r },
                It = function(t, e, n) { U(t, e, { get: function() { return this._d[n] } }) },
                Ot = function(t) {
                    var e, n, o, r, i, a, s = w(t),
                        l = arguments.length,
                        u = l > 1 ? arguments[1] : void 0,
                        f = void 0 !== u,
                        d = C(s);
                    if (null != d && !S(d)) {
                        for (a = d.call(s), o = [], e = 0; !(i = a.next()).done; e++) o.push(i.value);
                        s = o
                    }
                    for (f && l > 2 && (u = c(u, arguments[2], 2)), e = 0, n = v(s.length), r = Bt(this, n); n > e; e++) r[e] = f ? u(s[e], e) : s[e];
                    return r
                },
                Mt = function() { for (var t = 0, e = arguments.length, n = Bt(this, e); e > t;) n[t] = arguments[t++]; return n },
                Rt = !!V && i((function() { pt.call(new V(1)) })),
                At = function() { return pt.apply(Rt ? ft.call(Et(this)) : Et(this), arguments) },
                Nt = {
                    copyWithin: function(t, e) { return j.call(Et(this), t, e, arguments.length > 2 ? arguments[2] : void 0) },
                    every: function(t) { return $(Et(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                    fill: function(t) { return D.apply(Et(this), arguments) },
                    filter: function(t) { return Ct(this, q(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)) },
                    find: function(t) { return Q(Et(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                    findIndex: function(t) { return tt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                    forEach: function(t) { Z(Et(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                    indexOf: function(t) { return nt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                    includes: function(t) { return et(Et(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                    join: function(t) { return ct.apply(Et(this), arguments) },
                    lastIndexOf: function(t) { return at.apply(Et(this), arguments) },
                    map: function(t) { return xt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                    reduce: function(t) { return st.apply(Et(this), arguments) },
                    reduceRight: function(t) { return lt.apply(Et(this), arguments) },
                    reverse: function() { for (var t, e = Et(this).length, n = Math.floor(e / 2), o = 0; o < n;) t = this[o], this[o++] = this[--e], this[e] = t; return this },
                    some: function(t) { return J(Et(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                    sort: function(t) { return ut.call(Et(this), t) },
                    subarray: function(t, e) {
                        var n = Et(this),
                            o = n.length,
                            r = y(t, o);
                        return new(R(n, n[yt]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, v((void 0 === e ? o : y(e, o)) - r))
                    }
                },
                Lt = function(t, e) { return Ct(this, ft.call(Et(this), t, e)) },
                Pt = function(t) {
                    Et(this);
                    var e = Tt(arguments[1], 1),
                        n = this.length,
                        o = w(t),
                        r = v(o.length),
                        i = 0;
                    if (r + e > n) throw W("Wrong length!");
                    for (; i < r;) this[e + i] = o[i++]
                },
                Dt = { entries: function() { return it.call(Et(this)) }, keys: function() { return rt.call(Et(this)) }, values: function() { return ot.call(Et(this)) } },
                jt = function(t, e) { return x(t) && t[mt] && "symbol" != typeof e && e in t && String(+e) == String(e) },
                Ft = function(t, e) { return jt(t, e = b(e, !0)) ? f(2, t[e]) : z(t, e) },
                Ht = function(t, e, n) { return !(jt(t, e = b(e, !0)) && x(n) && m(n, "value")) || m(n, "get") || m(n, "set") || n.configurable || m(n, "writable") && !n.writable || m(n, "enumerable") && !n.enumerable ? U(t, e, n) : (t[e] = n.value, t) };
            bt || (H.f = Ft, F.f = Ht), a(a.S + a.F * !bt, "Object", { getOwnPropertyDescriptor: Ft, defineProperty: Ht }), i((function() { dt.call({}) })) && (dt = pt = function() { return ct.call(this) });
            var Ut = p({}, Nt);
            p(Ut, Dt), d(Ut, ht, Dt.values), p(Ut, { slice: Lt, set: Pt, constructor: function() {}, toString: dt, toLocaleString: At }), It(Ut, "buffer", "b"), It(Ut, "byteOffset", "o"), It(Ut, "byteLength", "l"), It(Ut, "length", "e"), U(Ut, vt, { get: function() { return this[mt] } }), t.exports = function(t, e, n, l) {
                var c = t + ((l = !!l) ? "Clamped" : "") + "Array",
                    f = "get" + t,
                    p = "set" + t,
                    h = r[c],
                    y = h || {},
                    b = h && E(h),
                    m = !h || !s.ABV,
                    w = {},
                    S = h && h.prototype,
                    C = function(t, n) {
                        U(t, n, {
                            get: function() { return function(t, n) { var o = t._d; return o.v[f](n * e + o.o, wt) }(this, n) },
                            set: function(t) {
                                return function(t, n, o) {
                                    var r = t._d;
                                    l && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), r.v[p](n * e + r.o, o, wt)
                                }(this, n, t)
                            },
                            enumerable: !0
                        })
                    };
                m ? (h = n((function(t, n, o, r) {
                    u(t, h, c, "_d");
                    var i, a, s, l, f = 0,
                        p = 0;
                    if (x(n)) {
                        if (!(n instanceof K || "ArrayBuffer" == (l = k(n)) || "SharedArrayBuffer" == l)) return mt in n ? _t(h, n) : Ot.call(h, n);
                        i = n, p = Tt(o, e);
                        var y = n.byteLength;
                        if (void 0 === r) { if (y % e) throw W("Wrong length!"); if ((a = y - p) < 0) throw W("Wrong length!") } else if ((a = v(r) * e) + p > y) throw W("Wrong length!");
                        s = a / e
                    } else s = g(n), i = new K(a = s * e);
                    for (d(t, "_d", { b: i, o: p, l: a, e: s, v: new G(i) }); f < s;) C(t, f++)
                })), S = h.prototype = T(Ut), d(S, "constructor", h)) : i((function() { h(1) })) && i((function() { new h(-1) })) && L((function(t) { new h, new h(null), new h(1.5), new h(t) }), !0) || (h = n((function(t, n, o, r) { var i; return u(t, h, c), x(n) ? n instanceof K || "ArrayBuffer" == (i = k(n)) || "SharedArrayBuffer" == i ? void 0 !== r ? new y(n, Tt(o, e), r) : void 0 !== o ? new y(n, Tt(o, e)) : new y(n) : mt in n ? _t(h, n) : Ot.call(h, n) : new y(g(n)) })), Z(b !== Function.prototype ? B(y).concat(B(b)) : B(y), (function(t) { t in h || d(h, t, y[t]) })), h.prototype = S, o || (S.constructor = h));
                var _ = S[ht],
                    I = !!_ && ("values" == _.name || null == _.name),
                    O = Dt.values;
                d(h, gt, !0), d(S, mt, c), d(S, kt, !0), d(S, yt, h), (l ? new h(1)[vt] == c : vt in S) || U(S, vt, { get: function() { return c } }), w[c] = h, a(a.G + a.W + a.F * (h != y), w), a(a.S, c, { BYTES_PER_ELEMENT: e }), a(a.S + a.F * i((function() { y.of.call(h, 1) })), c, { from: Ot, of: Mt }), "BYTES_PER_ELEMENT" in S || d(S, "BYTES_PER_ELEMENT", e), a(a.P, c, Nt), P(c), a(a.P + a.F * St, c, { set: Pt }), a(a.P + a.F * !I, c, Dt), o || S.toString == dt || (S.toString = dt), a(a.P + a.F * i((function() { new h(1).slice() })), c, { slice: Lt }), a(a.P + a.F * (i((function() { return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString() })) || !i((function() { S.toLocaleString.call([1, 2]) }))), c, { toLocaleString: At }), N[c] = I ? _ : O, o || I || d(S, ht, O)
            }
        } else t.exports = function() {}
    }, function(t, e, n) {
        var o = n(13);
        t.exports = function(t, e) { if (!o(t)) return t; var n, r; if (e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r; if ("function" == typeof(n = t.valueOf) && !o(r = n.call(t))) return r; if (!e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r; throw TypeError("Can't convert object to primitive value") }
    }, function(t, e, n) {
        var o = n(44)("meta"),
            r = n(13),
            i = n(26),
            a = n(19).f,
            s = 0,
            l = Object.isExtensible || function() { return !0 },
            c = !n(11)((function() { return l(Object.preventExtensions({})) })),
            u = function(t) { a(t, o, { value: { i: "O" + ++s, w: {} } }) },
            f = t.exports = {
                KEY: o,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!i(t, o)) {
                        if (!l(t)) return "F";
                        if (!e) return "E";
                        u(t)
                    }
                    return t[o].i
                },
                getWeak: function(t, e) {
                    if (!i(t, o)) {
                        if (!l(t)) return !0;
                        if (!e) return !1;
                        u(t)
                    }
                    return t[o].w
                },
                onFreeze: function(t) { return c && f.NEED && l(t) && !i(t, o) && u(t), t }
            }
    }, function(t, e, n) {
        var o = n(368),
            r = n(369),
            i = n(148),
            a = n(370);
        t.exports = function(t) { return o(t) || r(t) || i(t) || a() }
    }, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e) {
        var n = 0,
            o = Math.random();
        t.exports = function(t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36)) }
    }, function(t, e) { t.exports = !1 }, function(t, e, n) {
        var o = n(118),
            r = n(88);
        t.exports = Object.keys || function(t) { return o(t, r) }
    }, function(t, e, n) {
        var o = n(33),
            r = Math.max,
            i = Math.min;
        t.exports = function(t, e) { return (t = o(t)) < 0 ? r(t + e, 0) : i(t, e) }
    }, function(t, e, n) {
        var o = n(12),
            r = n(119),
            i = n(88),
            a = n(87)("IE_PROTO"),
            s = function() {},
            l = function() {
                var t, e = n(85)("iframe"),
                    o = i.length;
                for (e.style.display = "none", n(89).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; o--;) delete l.prototype[i[o]];
                return l()
            };
        t.exports = Object.create || function(t, e) { var n; return null !== t ? (s.prototype = o(t), n = new s, s.prototype = null, n[a] = t) : n = l(), void 0 === e ? n : r(n, e) }
    }, function(t, e, n) {
        var o = n(118),
            r = n(88).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) { return o(t, r) }
    }, function(t, e, n) {
        var o = n(26),
            r = n(22),
            i = n(87)("IE_PROTO"),
            a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) { return t = r(t), o(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null }
    }, function(t, e, n) {
        var o = n(15)("unscopables"),
            r = Array.prototype;
        null == r[o] && n(27)(r, o, {}), t.exports = function(t) { r[o][t] = !0 }
    }, function(t, e, n) {
        var o = n(13);
        t.exports = function(t, e) { if (!o(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!"); return t }
    }, function(t, e, n) {
        var o = n(19).f,
            r = n(26),
            i = n(15)("toStringTag");
        t.exports = function(t, e, n) { t && !r(t = n ? t : t.prototype, i) && o(t, i, { configurable: !0, value: e }) }
    }, function(t, e, n) {
        var o = n(0),
            r = n(38),
            i = n(11),
            a = n(91),
            s = "[" + a + "]",
            l = RegExp("^" + s + s + "*"),
            c = RegExp(s + s + "*$"),
            u = function(t, e, n) {
                var r = {},
                    s = i((function() { return !!a[t]() || "​" != "​" [t]() })),
                    l = r[t] = s ? e(f) : a[t];
                n && (r[n] = l), o(o.P + o.F * s, "String", r)
            },
            f = u.trim = function(t, e) { return t = String(r(t)), 1 & e && (t = t.replace(l, "")), 2 & e && (t = t.replace(c, "")), t };
        t.exports = u
    }, function(t, e) { t.exports = {} }, function(t, e, n) {
        "use strict";
        var o = n(10),
            r = n(19),
            i = n(18),
            a = n(15)("species");
        t.exports = function(t) {
            var e = o[t];
            i && e && !e[a] && r.f(e, a, { configurable: !0, get: function() { return this } })
        }
    }, function(t, e) { t.exports = function(t, e, n, o) { if (!(t instanceof e) || void 0 !== o && o in t) throw TypeError(n + ": incorrect invocation!"); return t } }, function(t, e, n) {
        var o = n(23);
        t.exports = function(t, e, n) { for (var r in e) o(t, r, e[r], n); return t }
    }, function(t, e) {
        function n(e) { return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(t) { return typeof t } : t.exports = n = function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, n(e) }
        t.exports = n
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(150)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var l = function() {
                function t() {
                    (0, r.default)(this, t)
                }
                return (0, i.default)(t, null, [{ key: "ui", value: function(e, n) { return t._t(e, n) } }, { key: "t", value: function(e, n) { return t._t(e, n) } }, { key: "setDictionary", value: function(e) { t.currentDictionary = e } }, { key: "_t", value: function(e, n) { var o = t.getNamespace(e); return o && o[n] ? o[n] : n } }, { key: "getNamespace", value: function(e) { return e.split(".").reduce((function(t, e) { return t && Object.keys(t).length ? t[e] : {} }), t.currentDictionary) } }]), t
            }();
            o.default = l, l.displayName = "I18n", l.currentDictionary = a.default, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(20), n(21), n(42), n(2), n(3), n(152), n(113), n(5), n(6), n(4), n(14), n(7), n(112), n(25), n(81)], void 0 === (i = "function" == typeof(o = function(t, e, o, r, i, a, s, l, c, u, f, d, p, h, v, g, y) {
            "use strict";
            var b, m = n(8),
                k = n(1);

            function x() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = t.BlockToolAPI = void 0, e = k(e), o = k(o), r = k(r), i = k(i), a = k(a), s = k(s), l = k(l), c = k(c), u = k(u), f = k(f), d = k(d), p = k(p), h = m(h), v = k(v), g = k(g), y = k(y), t.BlockToolAPI = b,
                function(t) { t.APPEND_CALLBACK = "appendCallback", t.RENDERED = "rendered", t.MOVED = "moved", t.UPDATED = "updated", t.REMOVED = "removed", t.ON_PASTE = "onPaste" }(b || (t.BlockToolAPI = b = {}));
            var w = function(t) {
                (0, u.default)(T, t);
                var n, y, m, k, w, S = (n = T, function() {
                    var t, e = (0, d.default)(n);
                    if (x()) {
                        var o = (0, d.default)(this).constructor;
                        t = Reflect.construct(e, arguments, o)
                    } else t = e.apply(this, arguments);
                    return (0, f.default)(this, t)
                });

                function T(t) {
                    var e, n = t.id,
                        o = void 0 === n ? h.generateBlockId() : n,
                        r = t.data,
                        s = t.tool,
                        c = t.api,
                        u = t.readOnly,
                        f = t.tunesData;
                    return (0, a.default)(this, T), (e = S.call(this)).cachedInputs = [], e.tunesInstances = new Map, e.defaultTunesInstances = new Map, e.unavailableTunesData = {}, e.inputIndex = 0, e.modificationDebounceTimer = 450, e.didMutated = h.debounce((function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            n = t instanceof InputEvent || !t.some((function(t) {
                                var e = t.addedNodes,
                                    n = void 0 === e ? [] : e,
                                    o = t.removedNodes;
                                return [].concat((0, i.default)(Array.from(n)), (0, i.default)(Array.from(o))).some((function(t) { return p.default.isElement(t) && "true" === t.dataset.mutationFree }))
                            }));
                        n && (e.cachedInputs = [], e.updateCurrentInput(), e.call(b.UPDATED), e.emit("didMutated", (0, l.default)(e)))
                    }), e.modificationDebounceTimer), e.handleFocus = function() { e.cachedInputs = [], e.updateCurrentInput() }, e.name = s.name, e.id = o, e.settings = s.settings, e.config = s.settings.config || {}, e.api = c, e.blockAPI = new v.default((0, l.default)(e)), e.mutationObserver = new MutationObserver(e.didMutated), e.tool = s, e.toolInstance = s.create(r, e.blockAPI, u), e.tunes = s.tunes, e.composeTunes(f), e.holder = e.compose(), e
                }
                return (0, s.default)(T, [{ key: "call", value: function(t, e) { if (h.isFunction(this.toolInstance[t])) { t === b.APPEND_CALLBACK && h.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn"); try { this.toolInstance[t].call(this.toolInstance, e) } catch (e) { h.log("Error during '".concat(t, "' call: ").concat(e.message), "error") } } } }, {
                    key: "mergeWith",
                    value: (w = (0, r.default)(o.default.mark((function t(e) {
                        return o.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.toolInstance.merge(e);
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) { return w.apply(this, arguments) })
                }, {
                    key: "save",
                    value: (k = (0, r.default)(o.default.mark((function t() {
                        var n, r, a, s, l = this;
                        return o.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.toolInstance.save(this.pluginsContent);
                                case 2:
                                    return n = t.sent, r = this.unavailableTunesData, [].concat((0, i.default)(this.tunesInstances.entries()), (0, i.default)(this.defaultTunesInstances.entries())).forEach((function(t) {
                                        var n = (0, e.default)(t, 2),
                                            o = n[0],
                                            i = n[1];
                                        if (h.isFunction(i.save)) try { r[o] = i.save() } catch (t) { h.log("Tune ".concat(i.constructor.name, " save method throws an Error %o"), "warn", t) }
                                    })), a = window.performance.now(), t.abrupt("return", Promise.resolve(n).then((function(t) { return s = window.performance.now(), { id: l.id, tool: l.name, data: t, tunes: r, time: s - a } })).catch((function(t) { h.log("Saving proccess for ".concat(l.name, " tool failed due to the ").concat(t), "log", "red") })));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() { return k.apply(this, arguments) })
                }, {
                    key: "validate",
                    value: (m = (0, r.default)(o.default.mark((function t(e) {
                        var n;
                        return o.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = !0, !(this.toolInstance.validate instanceof Function)) { t.next = 5; break }
                                    return t.next = 4, this.toolInstance.validate(e);
                                case 4:
                                    n = t.sent;
                                case 5:
                                    return t.abrupt("return", n);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) { return m.apply(this, arguments) })
                }, {
                    key: "renderTunes",
                    value: function() {
                        var t = document.createDocumentFragment(),
                            e = document.createDocumentFragment();
                        return this.tunesInstances.forEach((function(e) { p.default.append(t, e.render()) })), this.defaultTunesInstances.forEach((function(t) { p.default.append(e, t.render()) })), [t, e]
                    }
                }, { key: "updateCurrentInput", value: function() { this.currentInput = p.default.isNativeInput(document.activeElement) || !g.default.anchorNode ? document.activeElement : g.default.anchorNode } }, { key: "willSelect", value: function() { this.mutationObserver.observe(this.holder.firstElementChild, { childList: !0, subtree: !0, characterData: !0, attributes: !0 }), this.addInputEvents() } }, { key: "willUnselect", value: function() { this.mutationObserver.disconnect(), this.removeInputEvents() } }, { key: "dispatchChange", value: function() { this.didMutated() } }, {
                    key: "destroy",
                    value: function() {
                        (0, c.default)((0, d.default)(T.prototype), "destroy", this).call(this), h.isFunction(this.toolInstance.destroy) && this.toolInstance.destroy()
                    }
                }, { key: "renderSettings", value: function() { if (h.isFunction(this.toolInstance.renderSettings)) return this.toolInstance.renderSettings() } }, {
                    key: "getActiveToolboxEntry",
                    value: (y = (0, r.default)(o.default.mark((function t() {
                        var n, r, i;
                        return o.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (1 !== (n = this.tool.toolbox).length) { t.next = 3; break }
                                    return t.abrupt("return", Promise.resolve(this.tool.toolbox[0]));
                                case 3:
                                    return t.next = 5, this.data;
                                case 5:
                                    return r = t.sent, i = n, t.abrupt("return", i.find((function(t) {
                                        return Object.entries(t.data).some((function(t) {
                                            var n = (0, e.default)(t, 2),
                                                o = n[0],
                                                i = n[1];
                                            return r[o] && h.equals(r[o], i)
                                        }))
                                    })));
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() { return y.apply(this, arguments) })
                }, {
                    key: "compose",
                    value: function() {
                        var t = p.default.make("div", T.CSS.wrapper),
                            e = p.default.make("div", T.CSS.content),
                            n = this.toolInstance.render();
                        e.appendChild(n);
                        var o = e;
                        return [].concat((0, i.default)(this.tunesInstances.values()), (0, i.default)(this.defaultTunesInstances.values())).forEach((function(t) { if (h.isFunction(t.wrap)) try { o = t.wrap(o) } catch (e) { h.log("Tune ".concat(t.constructor.name, " wrap method throws an Error %o"), "warn", e) } })), t.appendChild(o), t
                    }
                }, {
                    key: "composeTunes",
                    value: function(t) {
                        var n = this;
                        Array.from(this.tunes.values()).forEach((function(e) {
                            (e.isInternal ? n.defaultTunesInstances : n.tunesInstances).set(e.name, e.create(t[e.name], n.blockAPI))
                        })), Object.entries(t).forEach((function(t) {
                            var o = (0, e.default)(t, 2),
                                r = o[0],
                                i = o[1];
                            n.tunesInstances.has(r) || (n.unavailableTunesData[r] = i)
                        }))
                    }
                }, {
                    key: "addInputEvents",
                    value: function() {
                        var t = this;
                        this.inputs.forEach((function(e) { e.addEventListener("focus", t.handleFocus), p.default.isNativeInput(e) && e.addEventListener("input", t.didMutated) }))
                    }
                }, {
                    key: "removeInputEvents",
                    value: function() {
                        var t = this;
                        this.inputs.forEach((function(e) { e.removeEventListener("focus", t.handleFocus), p.default.isNativeInput(e) && e.removeEventListener("input", t.didMutated) }))
                    }
                }, { key: "inputs", get: function() { if (0 !== this.cachedInputs.length) return this.cachedInputs; var t = p.default.findAllInputs(this.holder); return this.inputIndex > t.length - 1 && (this.inputIndex = t.length - 1), this.cachedInputs = t, t } }, { key: "currentInput", get: function() { return this.inputs[this.inputIndex] }, set: function(t) { var e = this.inputs.findIndex((function(e) { return e === t || e.contains(t) })); - 1 !== e && (this.inputIndex = e) } }, { key: "firstInput", get: function() { return this.inputs[0] } }, { key: "lastInput", get: function() { var t = this.inputs; return t[t.length - 1] } }, { key: "nextInput", get: function() { return this.inputs[this.inputIndex + 1] } }, { key: "previousInput", get: function() { return this.inputs[this.inputIndex - 1] } }, { key: "data", get: function() { return this.save().then((function(t) { return t && !h.isEmpty(t.data) ? t.data : {} })) } }, { key: "sanitize", get: function() { return this.tool.sanitizeConfig } }, { key: "mergeable", get: function() { return h.isFunction(this.toolInstance.merge) } }, {
                    key: "isEmpty",
                    get: function() {
                        var t = p.default.isEmpty(this.pluginsContent),
                            e = !this.hasMedia;
                        return t && e
                    }
                }, { key: "hasMedia", get: function() { return !!this.holder.querySelector(["img", "iframe", "video", "audio", "source", "input", "textarea", "twitterwidget"].join(",")) } }, { key: "focused", set: function(t) { this.holder.classList.toggle(T.CSS.focused, t) }, get: function() { return this.holder.classList.contains(T.CSS.focused) } }, { key: "selected", set: function(t) { t ? (this.holder.classList.add(T.CSS.selected), g.default.addFakeCursor(this.holder)) : (this.holder.classList.remove(T.CSS.selected), g.default.removeFakeCursor(this.holder)) }, get: function() { return this.holder.classList.contains(T.CSS.selected) } }, { key: "stretched", set: function(t) { this.holder.classList.toggle(T.CSS.wrapperStretched, t) }, get: function() { return this.holder.classList.contains(T.CSS.wrapperStretched) } }, { key: "dropTarget", set: function(t) { this.holder.classList.toggle(T.CSS.dropTarget, t) } }, {
                    key: "pluginsContent",
                    get: function() {
                        var t = this.holder.querySelector(".".concat(T.CSS.content));
                        if (t && t.childNodes.length)
                            for (var e = t.childNodes.length - 1; e >= 0; e--) { var n = t.childNodes[e]; if (!p.default.isExtensionNode(n)) return n }
                        return null
                    }
                }], [{ key: "CSS", get: function() { return { wrapper: "ce-block", wrapperStretched: "ce-block--stretched", content: "ce-block__content", focused: "ce-block--focused", selected: "ce-block--selected", dropTarget: "ce-block--drop-target" } } }]), T
            }(y.default);
            t.default = w, w.displayName = "Block"
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(381), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s) {
            "use strict";
            var l = n(8),
                c = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = c(r), i = c(i), a = c(a), s = l(s);
            var u = function() {
                function t(e) {
                    var n = this;
                    (0, r.default)(this, t), this.iterator = null, this.activated = !1, this.onKeyDown = function(e) {
                        if (n.isEventReadyForHandling(e)) switch (t.usedKeys.includes(e.keyCode) && e.preventDefault(), e.keyCode) {
                            case s.keyCodes.TAB:
                                n.handleTabPress(e);
                                break;
                            case s.keyCodes.LEFT:
                            case s.keyCodes.UP:
                                n.flipLeft();
                                break;
                            case s.keyCodes.RIGHT:
                            case s.keyCodes.DOWN:
                                n.flipRight();
                                break;
                            case s.keyCodes.ENTER:
                                n.handleEnterPress(e)
                        }
                    }, this.iterator = new a.default(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || t.usedKeys
                }
                return (0, i.default)(t, [{ key: "activate", value: function(t) { this.activated = !0, t && this.iterator.setItems(t), document.addEventListener("keydown", this.onKeyDown) } }, { key: "deactivate", value: function() { this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown) } }, { key: "focusFirst", value: function() { this.dropCursor(), this.flipRight() } }, { key: "flipLeft", value: function() { this.iterator.previous(), this.flipCallback() } }, { key: "flipRight", value: function() { this.iterator.next(), this.flipCallback() } }, { key: "hasFocus", value: function() { return !!this.iterator.currentItem } }, { key: "dropCursor", value: function() { this.iterator.dropCursor() } }, { key: "isEventReadyForHandling", value: function(t) { return this.activated && this.allowedKeys.includes(t.keyCode) } }, {
                    key: "handleTabPress",
                    value: function(t) {
                        switch (t.shiftKey ? a.default.directions.LEFT : a.default.directions.RIGHT) {
                            case a.default.directions.RIGHT:
                                this.flipRight();
                                break;
                            case a.default.directions.LEFT:
                                this.flipLeft()
                        }
                    }
                }, { key: "handleEnterPress", value: function(t) { this.activated && (this.iterator.currentItem && this.iterator.currentItem.click(), s.isFunction(this.activateCallback) && this.activateCallback(this.iterator.currentItem), t.preventDefault(), t.stopPropagation()) } }, { key: "flipCallback", value: function() { this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded() } }], [{ key: "usedKeys", get: function() { return [s.keyCodes.TAB, s.keyCodes.LEFT, s.keyCodes.RIGHT, s.keyCodes.ENTER, s.keyCodes.UP, s.keyCodes.DOWN] } }]), t
            }();
            o.default = u, u.displayName = "Flipper", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o = n(37);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) { return "String" == o(t) ? t.split("") : Object(t) }
    }, function(t, e) { e.f = {}.propertyIsEnumerable }, function(t, e, n) {
        var o = n(37),
            r = n(15)("toStringTag"),
            i = "Arguments" == o(function() { return arguments }());
        t.exports = function(t) { var e, n, a; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) { try { return t[e] } catch (t) {} }(e = Object(t), r)) ? n : i ? o(e) : "Object" == (a = o(e)) && "function" == typeof e.callee ? "Arguments" : a }
    }, function(t, e, n) {
        var o = n(12),
            r = n(32),
            i = n(15)("species");
        t.exports = function(t, e) { var n, a = o(t).constructor; return void 0 === a || null == (n = o(a)[i]) ? e : r(n) }
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(7), n(379)], void 0 === (i = "function" == typeof(o = function(t, e, o) {
            "use strict";
            var r = n(1),
                i = n(8);

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = { tags: e },
                    r = new o.default(n);
                return r.clean(t)
            }

            function s(t, n) {
                return Array.isArray(t) ? (i = n, t.map((function(t) { return s(t, i) }))) : e.isObject(t) ? function(t, n) {
                    var o, r = {};
                    for (var i in t)
                        if (Object.prototype.hasOwnProperty.call(t, i)) {
                            var a = t[i],
                                l = (o = n[i], e.isObject(o) || e.isBoolean(o) || e.isFunction(o) ? n[i] : n);
                            r[i] = s(a, l)
                        }
                    return r
                }(t, n) : e.isString(t) ? (o = t, r = n, e.isObject(r) ? a(o, r) : !1 === r ? a(o, {}) : o) : t;
                var o, r, i
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.sanitizeBlocks = function(t, n) { return t.map((function(t) { var o = e.isFunction(n) ? n(t.tool) : n; return e.isEmpty(o) || (t.data = s(t.data, o)), t })) }, t.clean = a, e = i(e), o = r(o)
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7)], void 0 === (i = "function" == typeof(o = function(t, e, o, r) {
            "use strict";
            var i, a, s, l, c, u, f = n(8),
                d = n(1);
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = t.InternalTuneSettings = t.InternalInlineToolSettings = t.InternalBlockToolSettings = t.CommonInternalSettings = t.UserSettings = t.ToolType = void 0, e = d(e), o = d(o), r = f(r), t.ToolType = i,
                function(t) { t[t.Block = 0] = "Block", t[t.Inline = 1] = "Inline", t[t.Tune = 2] = "Tune" }(i || (t.ToolType = i = {})), t.UserSettings = a,
                function(t) { t.Shortcut = "shortcut", t.Toolbox = "toolbox", t.EnabledInlineTools = "inlineToolbar", t.EnabledBlockTunes = "tunes", t.Config = "config" }(a || (t.UserSettings = a = {})), t.CommonInternalSettings = s,
                function(t) { t.Shortcut = "shortcut", t.SanitizeConfig = "sanitize" }(s || (t.CommonInternalSettings = s = {})), t.InternalBlockToolSettings = l,
                function(t) { t.IsEnabledLineBreaks = "enableLineBreaks", t.Toolbox = "toolbox", t.ConversionConfig = "conversionConfig", t.IsReadOnlySupported = "isReadOnlySupported", t.PasteConfig = "pasteConfig" }(l || (t.InternalBlockToolSettings = l = {})), t.InternalInlineToolSettings = c,
                function(t) { t.IsInline = "isInline", t.Title = "title" }(c || (t.InternalInlineToolSettings = c = {})), t.InternalTuneSettings = u,
                function(t) { t.IsTune = "isTune" }(u || (t.InternalTuneSettings = u = {}));
            var p = function() {
                function t(n) {
                    var o = n.name,
                        r = n.constructable,
                        i = n.config,
                        a = n.api,
                        s = n.isDefault,
                        l = n.isInternal,
                        c = void 0 !== l && l,
                        u = n.defaultPlaceholder;
                    (0, e.default)(this, t), this.api = a, this.name = o, this.constructable = r, this.config = i, this.isDefault = s, this.isInternal = c, this.defaultPlaceholder = u
                }
                return (0, o.default)(t, [{ key: "reset", value: function() { if (r.isFunction(this.constructable.reset)) return this.constructable.reset() } }, { key: "prepare", value: function() { if (r.isFunction(this.constructable.prepare)) return this.constructable.prepare({ toolName: this.name, config: this.settings }) } }, { key: "isInline", value: function() { return this.type === i.Inline } }, { key: "isBlock", value: function() { return this.type === i.Block } }, { key: "isTune", value: function() { return this.type === i.Tune } }, { key: "settings", get: function() { var t = this.config[a.Config] || {}; return this.isDefault && !("placeholder" in t) && this.defaultPlaceholder && (t.placeholder = this.defaultPlaceholder), t } }, { key: "shortcut", get: function() { var t = this.constructable[s.Shortcut]; return this.config[a.Shortcut] || t } }, { key: "sanitizeConfig", get: function() { return this.constructable[s.SanitizeConfig] || {} } }]), t
            }();
            t.default = p, p.displayName = "BaseTool"
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o = n(17),
            r = n(10),
            i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        (t.exports = function(t, e) { return i[t] || (i[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: o.version, mode: n(45) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" })
    }, function(t, e, n) {
        var o = n(28),
            r = n(16),
            i = n(47);
        t.exports = function(t) {
            return function(e, n, a) {
                var s, l = o(e),
                    c = r(l.length),
                    u = i(a, c);
                if (t && n != n) {
                    for (; c > u;)
                        if ((s = l[u++]) != s) return !0
                } else
                    for (; c > u; u++)
                        if ((t || u in l) && l[u] === n) return t || u || 0; return !t && -1
            }
        }
    }, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e, n) {
        var o = n(37);
        t.exports = Array.isArray || function(t) { return "Array" == o(t) }
    }, function(t, e, n) {
        var o = n(15)("iterator"),
            r = !1;
        try {
            var i = [7][o]();
            i.return = function() { r = !0 }, Array.from(i, (function() { throw 2 }))
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !r) return !1;
            var n = !1;
            try {
                var i = [7],
                    a = i[o]();
                a.next = function() { return { done: n = !0 } }, i[o] = function() { return a }, t(i)
            } catch (t) {}
            return n
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(12);
        t.exports = function() {
            var t = o(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(65),
            r = RegExp.prototype.exec;
        t.exports = function(t, e) { var n = t.exec; if ("function" == typeof n) { var i = n.call(t, e); if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null"); return i } if ("RegExp" !== o(t)) throw new TypeError("RegExp#exec called on incompatible receiver"); return r.call(t, e) }
    }, function(t, e, n) {
        "use strict";
        n(136);
        var o = n(23),
            r = n(27),
            i = n(11),
            a = n(38),
            s = n(15),
            l = n(106),
            c = s("species"),
            u = !i((function() { var t = /./; return t.exec = function() { var t = []; return t.groups = { a: "7" }, t }, "7" !== "".replace(t, "$<a>") })),
            f = function() {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function() { return e.apply(this, arguments) };
                var n = "ab".split(t);
                return 2 === n.length && "a" === n[0] && "b" === n[1]
            }();
        t.exports = function(t, e, n) {
            var d = s(t),
                p = !i((function() { var e = {}; return e[d] = function() { return 7 }, 7 != "" [t](e) })),
                h = p ? !i((function() {
                    var e = !1,
                        n = /a/;
                    return n.exec = function() { return e = !0, null }, "split" === t && (n.constructor = {}, n.constructor[c] = function() { return n }), n[d](""), !e
                })) : void 0;
            if (!p || !h || "replace" === t && !u || "split" === t && !f) {
                var v = /./ [d],
                    g = n(a, d, "" [t], (function(t, e, n, o, r) { return e.exec === l ? p && !r ? { done: !0, value: v.call(e, n, o) } : { done: !0, value: t.call(n, e, o) } : { done: !1 } })),
                    y = g[0],
                    b = g[1];
                o(String.prototype, t, y), r(RegExp.prototype, d, 2 == e ? function(t, e) { return b.call(t, this, e) } : function(t) { return b.call(t, this) })
            }
        }
    }, function(t, e, n) {
        var o = n(31),
            r = n(131),
            i = n(101),
            a = n(12),
            s = n(16),
            l = n(103),
            c = {},
            u = {};
        (e = t.exports = function(t, e, n, f, d) {
            var p, h, v, g, y = d ? function() { return t } : l(t),
                b = o(n, f, e ? 2 : 1),
                m = 0;
            if ("function" != typeof y) throw TypeError(t + " is not iterable!");
            if (i(y)) {
                for (p = s(t.length); p > m; m++)
                    if ((g = e ? b(a(h = t[m])[0], h[1]) : b(t[m])) === c || g === u) return g
            } else
                for (v = y.call(t); !(h = v.next()).done;)
                    if ((g = r(v, b, h.value, e)) === c || g === u) return g
        }).BREAK = c, e.RETURN = u
    }, function(t, e, n) {
        var o = n(10).navigator;
        t.exports = o && o.userAgent || ""
    }, function(t, e, n) {
        "use strict";
        var o = n(10),
            r = n(0),
            i = n(23),
            a = n(58),
            s = n(41),
            l = n(77),
            c = n(57),
            u = n(13),
            f = n(11),
            d = n(73),
            p = n(53),
            h = n(92);
        t.exports = function(t, e, n, v, g, y) {
            var b = o[t],
                m = b,
                k = g ? "set" : "add",
                x = m && m.prototype,
                w = {},
                S = function(t) {
                    var e = x[t];
                    i(x, t, "delete" == t || "has" == t ? function(t) { return !(y && !u(t)) && e.call(this, 0 === t ? 0 : t) } : "get" == t ? function(t) { return y && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t) } : "add" == t ? function(t) { return e.call(this, 0 === t ? 0 : t), this } : function(t, n) { return e.call(this, 0 === t ? 0 : t, n), this })
                };
            if ("function" == typeof m && (y || x.forEach && !f((function() {
                    (new m).entries().next()
                })))) {
                var T = new m,
                    E = T[k](y ? {} : -0, 1) != T,
                    B = f((function() { T.has(1) })),
                    C = d((function(t) { new m(t) })),
                    _ = !y && f((function() { for (var t = new m, e = 5; e--;) t[k](e, e); return !t.has(-0) }));
                C || ((m = e((function(e, n) { c(e, m, t); var o = h(new b, e, m); return null != n && l(n, g, o[k], o), o }))).prototype = x, x.constructor = m), (B || _) && (S("delete"), S("has"), g && S("get")), (_ || E) && S(k), y && x.clear && delete x.clear
            } else m = v.getConstructor(e, t, g, k), a(m.prototype, n), s.NEED = !0;
            return p(m, t), w[t] = m, r(r.G + r.W + r.F * (m != b), w), y || v.setStrong(m, t, g), m
        }
    }, function(t, e, n) {
        for (var o, r = n(10), i = n(27), a = n(44), s = a("typed_array"), l = a("view"), c = !(!r.ArrayBuffer || !r.DataView), u = c, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(o = r[d[f++]]) ? (i(o.prototype, s, !0), i(o.prototype, l, !0)) : u = !1;
        t.exports = { ABV: c, CONSTR: u, TYPED: s, VIEW: l }
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i);
            var l = function() {
                function t() {
                    (0, r.default)(this, t), this.subscribers = {}
                }
                return (0, i.default)(t, [{ key: "on", value: function(t, e) { t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(e) } }, {
                    key: "once",
                    value: function(t, e) {
                        var n = this;
                        t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push((function o(r) {
                            var i = e(r),
                                a = n.subscribers[t].indexOf(o);
                            return -1 !== a && n.subscribers[t].splice(a, 1), i
                        }))
                    }
                }, { key: "emit", value: function(t, e) {!(0, a.isEmpty)(this.subscribers) && this.subscribers[t] && this.subscribers[t].reduce((function(t, e) { return e(t) || t }), e) } }, {
                    key: "off",
                    value: function(t, e) {
                        for (var n = 0; n < this.subscribers[t].length; n++)
                            if (this.subscribers[t][n] === e) { delete this.subscribers[t][n]; break }
                    }
                }, { key: "destroy", value: function() { this.subscribers = null } }]), t
            }();
            o.default = l, l.displayName = "EventsDispatcher", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c) {
            "use strict";
            var u = n(1);

            function f() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
            var d = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (f()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "getMethodsForTool", value: function(t) { return Object.assign(this.methods, { i18n: this.Editor.I18nAPI.getMethodsForTool(t) }) } }, { key: "methods", get: function() { return { blocks: this.Editor.BlocksAPI.methods, caret: this.Editor.CaretAPI.methods, events: this.Editor.EventsAPI.methods, listeners: this.Editor.ListenersAPI.methods, notifier: this.Editor.NotifierAPI.methods, sanitizer: this.Editor.SanitizerAPI.methods, saver: this.Editor.SaverAPI.methods, selection: this.Editor.SelectionAPI.methods, styles: this.Editor.StylesAPI.classes, toolbar: this.Editor.ToolbarAPI.methods, inlineToolbar: this.Editor.InlineToolbarAPI.methods, tooltip: this.Editor.TooltipAPI.methods, i18n: this.Editor.I18nAPI.methods, readOnly: this.Editor.ReadOnlyAPI.methods, ui: this.Editor.UiAPI.methods } } }]), o
            }((c = u(c)).default);
            o.default = d, d.displayName = "API", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(7), n(60), n(84), n(114), n(385)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p, h, v) {
            "use strict";
            var g = n(8),
                y = n(1);

            function b() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = y(r), i = y(i), a = y(a), s = y(s), l = y(l), c = y(c), u = y(u), f = g(f), d = y(d), h = y(h), v = g(v);
            var m = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (b()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o(t) {
                    var e, i = t.config,
                        a = t.eventsDispatcher;
                    return (0, r.default)(this, o), (e = n.call(this, { config: i, eventsDispatcher: a })).tooltip = new h.default, e
                }
                return (0, i.default)(o, [{ key: "toggleReadOnly", value: function(t) { t ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : (this.drawUI(), this.enableModuleBindings()) } }, {
                    key: "moveAndOpen",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Editor.BlockManager.currentBlock;
                        if (this.toolboxInstance.close(), this.Editor.BlockSettings.close(), t) {
                            this.hoveredBlock = t;
                            var e, n = t.holder,
                                o = this.Editor.UI.isMobile,
                                r = t.pluginsContent,
                                i = window.getComputedStyle(r),
                                a = parseInt(i.paddingTop, 10),
                                s = n.offsetHeight;
                            e = o ? n.offsetTop + s : n.offsetTop + a, this.nodes.wrapper.style.top = "".concat(Math.floor(e), "px"), 1 === this.Editor.BlockManager.blocks.length && t.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open()
                        }
                    }
                }, { key: "close", value: function() { this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.toolboxInstance.close(), this.Editor.BlockSettings.close()) } }, {
                    key: "open",
                    value: function() {
                        var t = this,
                            e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], f.delay((function() { t.nodes.wrapper.classList.add(t.CSS.toolbarOpened), e ? t.blockActions.show() : t.blockActions.hide() }), 50)()
                    }
                }, {
                    key: "make",
                    value: function() {
                        var t = this;
                        this.nodes.wrapper = u.default.make("div", this.CSS.toolbar), ["content", "actions"].forEach((function(e) { t.nodes[e] = u.default.make("div", t.CSS[e]) })), u.default.append(this.nodes.wrapper, this.nodes.content), u.default.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = u.default.make("div", this.CSS.plusButton), u.default.append(this.nodes.plusButton, u.default.svg("plus", 16, 16)), u.default.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", (function() { t.tooltip.hide(!0), t.plusButtonClicked() }), !1);
                        var e = u.default.make("div");
                        e.appendChild(document.createTextNode(d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Add"))), e.appendChild(u.default.make("div", this.CSS.plusButtonShortcut, { textContent: "⇥ Tab" })), this.tooltip.onHover(this.nodes.plusButton, e, { hidingDelay: 400 }), this.nodes.settingsToggler = u.default.make("span", this.CSS.settingsToggler);
                        var n = u.default.svg("dots", 16, 16);
                        u.default.append(this.nodes.settingsToggler, n), u.default.append(this.nodes.actions, this.nodes.settingsToggler), this.tooltip.onHover(this.nodes.settingsToggler, d.default.ui(p.I18nInternalNS.ui.blockTunes.toggler, "Click to tune"), { hidingDelay: 400 }), u.default.append(this.nodes.actions, this.makeToolbox()), u.default.append(this.nodes.actions, this.Editor.BlockSettings.nodes.wrapper), u.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper)
                    }
                }, {
                    key: "makeToolbox",
                    value: function() {
                        var t = this;
                        return this.toolboxInstance = new v.default({ api: this.Editor.API.methods, tools: this.Editor.Tools.blockTools, i18nLabels: { filter: d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Filter"), nothingFound: d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Nothing found") } }), this.toolboxInstance.on(v.ToolboxEvent.Opened, (function() { t.Editor.UI.nodes.wrapper.classList.add(t.CSS.openedToolboxHolderModifier) })), this.toolboxInstance.on(v.ToolboxEvent.Closed, (function() { t.Editor.UI.nodes.wrapper.classList.remove(t.CSS.openedToolboxHolderModifier) })), this.toolboxInstance.on(v.ToolboxEvent.BlockAdded, (function(e) {
                            var n = e.block,
                                o = t.Editor,
                                r = o.BlockManager,
                                i = o.Caret,
                                a = r.getBlockById(n.id);
                            0 === a.inputs.length && (a === r.lastBlock ? (r.insertAtEnd(), i.setToBlock(r.lastBlock)) : i.setToBlock(r.nextBlock))
                        })), this.toolboxInstance.make()
                    }
                }, { key: "plusButtonClicked", value: function() { this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.toggle() } }, {
                    key: "enableModuleBindings",
                    value: function() {
                        var t = this;
                        this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (function(e) { e.stopPropagation(), t.settingsTogglerClicked(), t.toolboxInstance.close(), t.tooltip.hide(!0) }), !0), f.isMobileScreen() || this.eventsDispatcher.on(this.Editor.UI.events.blockHovered, (function(e) { t.Editor.BlockSettings.opened || t.toolboxInstance.opened || t.moveAndOpen(e.block) }))
                    }
                }, { key: "disableModuleBindings", value: function() { this.readOnlyMutableListeners.clearAll() } }, { key: "settingsTogglerClicked", value: function() { this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock) } }, { key: "drawUI", value: function() { this.Editor.BlockSettings.make(), this.make() } }, { key: "destroy", value: function() { this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy(), this.tooltip.destroy() } }, { key: "CSS", get: function() { return { toolbar: "ce-toolbar", content: "ce-toolbar__content", actions: "ce-toolbar__actions", actionsOpened: "ce-toolbar__actions--opened", toolbarOpened: "ce-toolbar--opened", openedToolboxHolderModifier: "codex-editor--toolbox-opened", plusButton: "ce-toolbar__plus", plusButtonShortcut: "ce-toolbar__plus-shortcut", settingsToggler: "ce-toolbar__settings-btn", settingsTogglerHidden: "ce-toolbar__settings-btn--hidden" } } }, { key: "opened", get: function() { return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened) } }, { key: "toolbox", get: function() { var t = this; return { opened: this.toolboxInstance.opened, close: function() { t.toolboxInstance.close() }, open: function() { t.Editor.BlockManager.currentBlock = t.hoveredBlock, t.toolboxInstance.open() }, toggle: function() { return t.toolboxInstance.toggle() }, hasFocus: function() { return t.toolboxInstance.hasFocus() } } } }, { key: "blockActions", get: function() { var t = this; return { hide: function() { t.nodes.actions.classList.remove(t.CSS.actionsOpened) }, show: function() { t.nodes.actions.classList.add(t.CSS.actionsOpened) } } } }, { key: "blockTunesToggler", get: function() { var t = this; return { hide: function() { return t.nodes.settingsToggler.classList.add(t.CSS.settingsTogglerHidden) }, show: function() { return t.nodes.settingsToggler.classList.remove(t.CSS.settingsTogglerHidden) } } } }]), o
            }(c.default);
            o.default = m, m.displayName = "Toolbar", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(150), n(7)], void 0 === (i = "function" == typeof(o = function(t, e, o, r) {
            "use strict";
            var i = n(1);
            Object.defineProperty(t, "__esModule", { value: !0 }), t.I18nInternalNS = void 0, e = i(e);
            var a = function t(n, o) {
                var i = {};
                return Object.entries(n).forEach((function(n) {
                    var a = (0, e.default)(n, 2),
                        s = a[0],
                        l = a[1];
                    if ((0, r.isObject)(l)) {
                        var c = o ? "".concat(o, ".").concat(s) : s,
                            u = Object.values(l).every((function(t) { return (0, r.isString)(t) }));
                        i[s] = u ? c : t(l, c)
                    } else i[s] = l
                })), i
            }((o = i(o)).default);
            t.I18nInternalNS = a
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o = n(13),
            r = n(10).document,
            i = o(r) && o(r.createElement);
        t.exports = function(t) { return i ? r.createElement(t) : {} }
    }, function(t, e, n) { e.f = n(15) }, function(t, e, n) {
        var o = n(69)("keys"),
            r = n(44);
        t.exports = function(t) { return o[t] || (o[t] = r(t)) }
    }, function(t, e) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(t, e, n) {
        var o = n(10).document;
        t.exports = o && o.documentElement
    }, function(t, e, n) {
        var o = n(13),
            r = n(12),
            i = function(t, e) { if (r(t), !o(e) && null !== e) throw TypeError(e + ": can't set as prototype!") };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, o) {
                try {
                    (o = n(31)(Function.call, n(34).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                } catch (t) { e = !0 }
                return function(t, n) { return i(t, n), e ? t.__proto__ = n : o(t, n), t }
            }({}, !1) : void 0),
            check: i
        }
    }, function(t, e) { t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff" }, function(t, e, n) {
        var o = n(13),
            r = n(90).set;
        t.exports = function(t, e, n) { var i, a = e.constructor; return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && o(i) && r && r(t, i), t }
    }, function(t, e, n) {
        "use strict";
        var o = n(33),
            r = n(38);
        t.exports = function(t) {
            var e = String(r(this)),
                n = "",
                i = o(t);
            if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
            for (; i > 0;
                (i >>>= 1) && (e += e)) 1 & i && (n += e);
            return n
        }
    }, function(t, e) { t.exports = Math.sign || function(t) { return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1 } }, function(t, e) {
        var n = Math.expm1;
        t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(t) { return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1 } : n
    }, function(t, e, n) {
        var o = n(33),
            r = n(38);
        t.exports = function(t) {
            return function(e, n) {
                var i, a, s = String(r(e)),
                    l = o(n),
                    c = s.length;
                return l < 0 || l >= c ? t ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : i : t ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(45),
            r = n(0),
            i = n(23),
            a = n(27),
            s = n(55),
            l = n(130),
            c = n(53),
            u = n(50),
            f = n(15)("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = function() { return this };
        t.exports = function(t, e, n, h, v, g, y) {
            l(n, e, h);
            var b, m, k, x = function(t) {
                    if (!d && t in E) return E[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() { return new n(this, t) }
                    }
                    return function() { return new n(this, t) }
                },
                w = e + " Iterator",
                S = "values" == v,
                T = !1,
                E = t.prototype,
                B = E[f] || E["@@iterator"] || v && E[v],
                C = B || x(v),
                _ = v ? S ? x("entries") : C : void 0,
                I = "Array" == e && E.entries || B;
            if (I && (k = u(I.call(new t))) !== Object.prototype && k.next && (c(k, w, !0), o || "function" == typeof k[f] || a(k, f, p)), S && B && "values" !== B.name && (T = !0, C = function() { return B.call(this) }), o && !y || !d && !T && E[f] || a(E, f, C), s[e] = C, s[w] = p, v)
                if (b = { values: S ? C : x("values"), keys: g ? C : x("keys"), entries: _ }, y)
                    for (m in b) m in E || i(E, m, b[m]);
                else r(r.P + r.F * (d || T), e, b);
            return b
        }
    }, function(t, e, n) {
        var o = n(99),
            r = n(38);
        t.exports = function(t, e, n) { if (o(e)) throw TypeError("String#" + n + " doesn't accept regex!"); return String(r(t)) }
    }, function(t, e, n) {
        var o = n(13),
            r = n(37),
            i = n(15)("match");
        t.exports = function(t) { var e; return o(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == r(t)) }
    }, function(t, e, n) {
        var o = n(15)("match");
        t.exports = function(t) { var e = /./; try { "/./" [t](e) } catch (n) { try { return e[o] = !1, !"/./" [t](e) } catch (t) {} } return !0 }
    }, function(t, e, n) {
        var o = n(55),
            r = n(15)("iterator"),
            i = Array.prototype;
        t.exports = function(t) { return void 0 !== t && (o.Array === t || i[r] === t) }
    }, function(t, e, n) {
        "use strict";
        var o = n(19),
            r = n(43);
        t.exports = function(t, e, n) { e in t ? o.f(t, e, r(0, n)) : t[e] = n }
    }, function(t, e, n) {
        var o = n(65),
            r = n(15)("iterator"),
            i = n(55);
        t.exports = n(17).getIteratorMethod = function(t) { if (null != t) return t[r] || t["@@iterator"] || i[o(t)] }
    }, function(t, e, n) {
        "use strict";
        var o = n(22),
            r = n(47),
            i = n(16);
        t.exports = function(t) { for (var e = o(this), n = i(e.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : r(l, n); c > s;) e[s++] = t; return e }
    }, function(t, e, n) {
        "use strict";
        var o = n(51),
            r = n(135),
            i = n(55),
            a = n(28);
        t.exports = n(97)(Array, "Array", (function(t, e) { this._t = a(t), this._i = 0, this._k = e }), (function() {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
    }, function(t, e, n) {
        "use strict";
        var o, r, i = n(74),
            a = RegExp.prototype.exec,
            s = String.prototype.replace,
            l = a,
            c = (o = /a/, r = /b*/g, a.call(o, "a"), a.call(r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex),
            u = void 0 !== /()??/.exec("")[1];
        (c || u) && (l = function(t) { var e, n, o, r, l = this; return u && (n = new RegExp("^" + l.source + "$(?!\\s)", i.call(l))), c && (e = l.lastIndex), o = a.call(l, t), c && o && (l.lastIndex = l.global ? o.index + o[0].length : e), u && o && o.length > 1 && s.call(o[0], n, (function() { for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (o[r] = void 0) })), o }), t.exports = l
    }, function(t, e, n) {
        "use strict";
        var o = n(96)(!0);
        t.exports = function(t, e, n) { return e + (n ? o(t, e).length : 1) }
    }, function(t, e, n) {
        var o, r, i, a = n(31),
            s = n(124),
            l = n(89),
            c = n(85),
            u = n(10),
            f = u.process,
            d = u.setImmediate,
            p = u.clearImmediate,
            h = u.MessageChannel,
            v = u.Dispatch,
            g = 0,
            y = {},
            b = function() {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var e = y[t];
                    delete y[t], e()
                }
            },
            m = function(t) { b.call(t.data) };
        d && p || (d = function(t) { for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]); return y[++g] = function() { s("function" == typeof t ? t : Function(t), e) }, o(g), g }, p = function(t) { delete y[t] }, "process" == n(37)(f) ? o = function(t) { f.nextTick(a(b, t, 1)) } : v && v.now ? o = function(t) { v.now(a(b, t, 1)) } : h ? (i = (r = new h).port2, r.port1.onmessage = m, o = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function(t) { u.postMessage(t + "", "*") }, u.addEventListener("message", m, !1)) : o = "onreadystatechange" in c("script") ? function(t) { l.appendChild(c("script")).onreadystatechange = function() { l.removeChild(this), b.call(t) } } : function(t) { setTimeout(a(b, t, 1), 0) }), t.exports = { set: d, clear: p }
    }, function(t, e, n) {
        "use strict";
        var o = n(10),
            r = n(18),
            i = n(45),
            a = n(80),
            s = n(27),
            l = n(58),
            c = n(11),
            u = n(57),
            f = n(33),
            d = n(16),
            p = n(143),
            h = n(49).f,
            v = n(19).f,
            g = n(104),
            y = n(53),
            b = o.ArrayBuffer,
            m = o.DataView,
            k = o.Math,
            x = o.RangeError,
            w = o.Infinity,
            S = b,
            T = k.abs,
            E = k.pow,
            B = k.floor,
            C = k.log,
            _ = k.LN2,
            I = r ? "_b" : "buffer",
            O = r ? "_l" : "byteLength",
            M = r ? "_o" : "byteOffset";

        function R(t, e, n) {
            var o, r, i, a = new Array(n),
                s = 8 * n - e - 1,
                l = (1 << s) - 1,
                c = l >> 1,
                u = 23 === e ? E(2, -24) - E(2, -77) : 0,
                f = 0,
                d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for ((t = T(t)) != t || t === w ? (r = t != t ? 1 : 0, o = l) : (o = B(C(t) / _), t * (i = E(2, -o)) < 1 && (o--, i *= 2), (t += o + c >= 1 ? u / i : u * E(2, 1 - c)) * i >= 2 && (o++, i /= 2), o + c >= l ? (r = 0, o = l) : o + c >= 1 ? (r = (t * i - 1) * E(2, e), o += c) : (r = t * E(2, c - 1) * E(2, e), o = 0)); e >= 8; a[f++] = 255 & r, r /= 256, e -= 8);
            for (o = o << e | r, s += e; s > 0; a[f++] = 255 & o, o /= 256, s -= 8);
            return a[--f] |= 128 * d, a
        }

        function A(t, e, n) {
            var o, r = 8 * n - e - 1,
                i = (1 << r) - 1,
                a = i >> 1,
                s = r - 7,
                l = n - 1,
                c = t[l--],
                u = 127 & c;
            for (c >>= 7; s > 0; u = 256 * u + t[l], l--, s -= 8);
            for (o = u & (1 << -s) - 1, u >>= -s, s += e; s > 0; o = 256 * o + t[l], l--, s -= 8);
            if (0 === u) u = 1 - a;
            else {
                if (u === i) return o ? NaN : c ? -w : w;
                o += E(2, e), u -= a
            }
            return (c ? -1 : 1) * o * E(2, u - e)
        }

        function N(t) { return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0] }

        function L(t) { return [255 & t] }

        function P(t) { return [255 & t, t >> 8 & 255] }

        function D(t) { return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255] }

        function j(t) { return R(t, 52, 8) }

        function F(t) { return R(t, 23, 4) }

        function H(t, e, n) { v(t.prototype, e, { get: function() { return this[n] } }) }

        function U(t, e, n, o) {
            var r = p(+n);
            if (r + e > t[O]) throw x("Wrong index!");
            var i = t[I]._b,
                a = r + t[M],
                s = i.slice(a, a + e);
            return o ? s : s.reverse()
        }

        function z(t, e, n, o, r, i) { var a = p(+n); if (a + e > t[O]) throw x("Wrong index!"); for (var s = t[I]._b, l = a + t[M], c = o(+r), u = 0; u < e; u++) s[l + u] = c[i ? u : e - u - 1] }
        if (a.ABV) {
            if (!c((function() { b(1) })) || !c((function() { new b(-1) })) || c((function() { return new b, new b(1.5), new b(NaN), "ArrayBuffer" != b.name }))) {
                for (var W, Y = (b = function(t) { return u(this, b), new S(p(t)) }).prototype = S.prototype, V = h(S), X = 0; V.length > X;)(W = V[X++]) in b || s(b, W, S[W]);
                i || (Y.constructor = b)
            }
            var K = new m(new b(2)),
                G = m.prototype.setInt8;
            K.setInt8(0, 2147483648), K.setInt8(1, 2147483649), !K.getInt8(0) && K.getInt8(1) || l(m.prototype, { setInt8: function(t, e) { G.call(this, t, e << 24 >> 24) }, setUint8: function(t, e) { G.call(this, t, e << 24 >> 24) } }, !0)
        } else b = function(t) {
            u(this, b, "ArrayBuffer");
            var e = p(t);
            this._b = g.call(new Array(e), 0), this[O] = e
        }, m = function(t, e, n) {
            u(this, m, "DataView"), u(t, b, "DataView");
            var o = t[O],
                r = f(e);
            if (r < 0 || r > o) throw x("Wrong offset!");
            if (r + (n = void 0 === n ? o - r : d(n)) > o) throw x("Wrong length!");
            this[I] = t, this[M] = r, this[O] = n
        }, r && (H(b, "byteLength", "_l"), H(m, "buffer", "_b"), H(m, "byteLength", "_l"), H(m, "byteOffset", "_o")), l(m.prototype, { getInt8: function(t) { return U(this, 1, t)[0] << 24 >> 24 }, getUint8: function(t) { return U(this, 1, t)[0] }, getInt16: function(t) { var e = U(this, 2, t, arguments[1]); return (e[1] << 8 | e[0]) << 16 >> 16 }, getUint16: function(t) { var e = U(this, 2, t, arguments[1]); return e[1] << 8 | e[0] }, getInt32: function(t) { return N(U(this, 4, t, arguments[1])) }, getUint32: function(t) { return N(U(this, 4, t, arguments[1])) >>> 0 }, getFloat32: function(t) { return A(U(this, 4, t, arguments[1]), 23, 4) }, getFloat64: function(t) { return A(U(this, 8, t, arguments[1]), 52, 8) }, setInt8: function(t, e) { z(this, 1, t, L, e) }, setUint8: function(t, e) { z(this, 1, t, L, e) }, setInt16: function(t, e) { z(this, 2, t, P, e, arguments[2]) }, setUint16: function(t, e) { z(this, 2, t, P, e, arguments[2]) }, setInt32: function(t, e) { z(this, 4, t, D, e, arguments[2]) }, setUint32: function(t, e) { z(this, 4, t, D, e, arguments[2]) }, setFloat32: function(t, e) { z(this, 4, t, F, e, arguments[2]) }, setFloat64: function(t, e) { z(this, 8, t, j, e, arguments[2]) } });
        y(b, "ArrayBuffer"), y(m, "DataView"), s(m.prototype, a.VIEW, !0), e.ArrayBuffer = b, e.DataView = m
    }, function(t, e) {
        function n(e, o) { return t.exports = n = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, n(e, o) }
        t.exports = n
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(8),
                l = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = l(r), i = l(i), a = s(a);
            var c = function() {
                function t() {
                    (0, r.default)(this, t), this.allListeners = []
                }
                return (0, i.default)(t, [{
                    key: "on",
                    value: function(t, e, n) {
                        var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            r = a.generateId("l"),
                            i = { id: r, element: t, eventType: e, handler: n, options: o },
                            s = this.findOne(t, e, n);
                        if (!s) return this.allListeners.push(i), t.addEventListener(e, n, o), r
                    }
                }, {
                    key: "off",
                    value: function(t, e, n, o) {
                        var r = this,
                            i = this.findAll(t, e, n);
                        i.forEach((function(t, e) {
                            var n = r.allListeners.indexOf(i[e]);
                            n > -1 && (r.allListeners.splice(n, 1), t.element.removeEventListener(t.eventType, t.handler, t.options))
                        }))
                    }
                }, {
                    key: "offById",
                    value: function(t) {
                        var e = this.findById(t);
                        e && e.element.removeEventListener(e.eventType, e.handler, e.options)
                    }
                }, { key: "findOne", value: function(t, e, n) { var o = this.findAll(t, e, n); return o.length > 0 ? o[0] : null } }, { key: "findAll", value: function(t, e, n) { var o = t ? this.findByEventTarget(t) : []; return t && e && n ? o.filter((function(t) { return t.eventType === e && t.handler === n })) : t && e ? o.filter((function(t) { return t.eventType === e })) : o } }, { key: "removeAll", value: function() { this.allListeners.map((function(t) { t.element.removeEventListener(t.eventType, t.handler, t.options) })), this.allListeners = [] } }, { key: "destroy", value: function() { this.removeAll() } }, { key: "findByEventTarget", value: function(t) { return this.allListeners.filter((function(e) { if (e.element === t) return e })) } }, { key: "findByType", value: function(t) { return this.allListeners.filter((function(e) { if (e.eventType === t) return e })) } }, { key: "findByHandler", value: function(t) { return this.allListeners.filter((function(e) { if (e.handler === t) return e })) } }, { key: "findById", value: function(t) { return this.allListeners.find((function(e) { return e.id === t })) } }]), t
            }();
            o.default = c, c.displayName = "Listeners", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e], void 0 === (i = "function" == typeof(o = function(n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var o = function(t) {
                var e = {get id() { return t.id }, get name() { return t.name }, get config() { return t.config }, get holder() { return t.holder }, get isEmpty() { return t.isEmpty }, get selected() { return t.selected }, set stretched(e) { t.stretched = e }, get stretched() { return t.stretched }, call: function(e, n) { return t.call(e, n) }, save: function() { return t.save() }, validate: function(e) { return t.validate(e) }, dispatchChange: function() { t.dispatchChange() } };
                Object.setPrototypeOf(this, e)
            };
            n.default = o, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o = n(376);

        function r(e, n, i) { return "undefined" != typeof Reflect && Reflect.get ? t.exports = r = Reflect.get : t.exports = r = function(t, e, n) { var r = o(t, e); if (r) { var i = Object.getOwnPropertyDescriptor(r, e); return i.get ? i.get.call(n) : i.value } }, r(e, n, i || e) }
        t.exports = r
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(380)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var l = function() {
                function t() {
                    (0, r.default)(this, t), this.lib = new a.default
                }
                return (0, i.default)(t, [{ key: "destroy", value: function() { this.lib.destroy() } }, { key: "show", value: function(t, e, n) { this.lib.show(t, e, n) } }, {
                    key: "hide",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.lib.hide(t)
                    }
                }, { key: "onHover", value: function(t, e, n) { this.lib.onHover(t, e, n) } }]), t
            }();
            o.default = l, l.displayName = "Tooltip", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(42), n(2), n(3), n(384)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s) {
            "use strict";
            var l = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s);
            var c = function() {
                function t() {
                    (0, i.default)(this, t), this.registeredShortcuts = new Map
                }
                return (0, a.default)(t, [{
                    key: "add",
                    value: function(t) {
                        if (this.findShortcut(t.on, t.name)) throw Error("Shortcut ".concat(t.name, " is already registered for ").concat(t.on, ". Please remove it before add a new handler."));
                        var e = new s.default({ name: t.name, on: t.on, callback: t.handler }),
                            n = this.registeredShortcuts.get(t.on) || [];
                        this.registeredShortcuts.set(t.on, [].concat((0, r.default)(n), [e]))
                    }
                }, {
                    key: "remove",
                    value: function(t, e) {
                        var n = this.findShortcut(t, e);
                        if (n) {
                            n.remove();
                            var o = this.registeredShortcuts.get(t);
                            this.registeredShortcuts.set(t, o.filter((function(t) { return t !== n })))
                        }
                    }
                }, { key: "findShortcut", value: function(t, e) { return (this.registeredShortcuts.get(t) || []).find((function(t) { return t.name === e })) } }]), t
            }();
            c.displayName = "Shortcuts";
            var u = new c;
            o.default = u, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) { t.exports = !n(18) && !n(11)((function() { return 7 != Object.defineProperty(n(85)("div"), "a", { get: function() { return 7 } }).a })) }, function(t, e, n) {
        var o = n(10),
            r = n(17),
            i = n(45),
            a = n(86),
            s = n(19).f;
        t.exports = function(t) { var e = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {}); "_" == t.charAt(0) || t in e || s(e, t, { value: a.f(t) }) }
    }, function(t, e, n) {
        var o = n(26),
            r = n(28),
            i = n(70)(!1),
            a = n(87)("IE_PROTO");
        t.exports = function(t, e) {
            var n, s = r(t),
                l = 0,
                c = [];
            for (n in s) n != a && o(s, n) && c.push(n);
            for (; e.length > l;) o(s, n = e[l++]) && (~i(c, n) || c.push(n));
            return c
        }
    }, function(t, e, n) {
        var o = n(19),
            r = n(12),
            i = n(46);
        t.exports = n(18) ? Object.defineProperties : function(t, e) { r(t); for (var n, a = i(e), s = a.length, l = 0; s > l;) o.f(t, n = a[l++], e[n]); return t }
    }, function(t, e, n) {
        var o = n(28),
            r = n(49).f,
            i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) { return a && "[object Window]" == i.call(t) ? function(t) { try { return r(t) } catch (t) { return a.slice() } }(t) : r(o(t)) }
    }, function(t, e, n) {
        "use strict";
        var o = n(18),
            r = n(46),
            i = n(71),
            a = n(64),
            s = n(22),
            l = n(63),
            c = Object.assign;
        t.exports = !c || n(11)((function() {
            var t = {},
                e = {},
                n = Symbol(),
                o = "abcdefghijklmnopqrst";
            return t[n] = 7, o.split("").forEach((function(t) { e[t] = t })), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != o
        })) ? function(t, e) {
            for (var n = s(t), c = arguments.length, u = 1, f = i.f, d = a.f; c > u;)
                for (var p, h = l(arguments[u++]), v = f ? r(h).concat(f(h)) : r(h), g = v.length, y = 0; g > y;) p = v[y++], o && !d.call(h, p) || (n[p] = h[p]);
            return n
        } : c
    }, function(t, e) { t.exports = Object.is || function(t, e) { return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e } }, function(t, e, n) {
        "use strict";
        var o = n(32),
            r = n(13),
            i = n(124),
            a = [].slice,
            s = {},
            l = function(t, e, n) {
                if (!(e in s)) {
                    for (var o = [], r = 0; r < e; r++) o[r] = "a[" + r + "]";
                    s[e] = Function("F,a", "return new F(" + o.join(",") + ")")
                }
                return s[e](t, n)
            };
        t.exports = Function.bind || function(t) {
            var e = o(this),
                n = a.call(arguments, 1),
                s = function() { var o = n.concat(a.call(arguments)); return this instanceof s ? l(e, o.length, o) : i(e, o, t) };
            return r(e.prototype) && (s.prototype = e.prototype), s
        }
    }, function(t, e) {
        t.exports = function(t, e, n) {
            var o = void 0 === n;
            switch (e.length) {
                case 0:
                    return o ? t() : t.call(n);
                case 1:
                    return o ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    }, function(t, e, n) {
        var o = n(10).parseInt,
            r = n(54).trim,
            i = n(91),
            a = /^[-+]?0[xX]/;
        t.exports = 8 !== o(i + "08") || 22 !== o(i + "0x16") ? function(t, e) { var n = r(String(t), 3); return o(n, e >>> 0 || (a.test(n) ? 16 : 10)) } : o
    }, function(t, e, n) {
        var o = n(10).parseFloat,
            r = n(54).trim;
        t.exports = 1 / o(n(91) + "-0") != -1 / 0 ? function(t) {
            var e = r(String(t), 3),
                n = o(e);
            return 0 === n && "-" == e.charAt(0) ? -0 : n
        } : o
    }, function(t, e, n) {
        var o = n(37);
        t.exports = function(t, e) { if ("number" != typeof t && "Number" != o(t)) throw TypeError(e); return +t }
    }, function(t, e, n) {
        var o = n(13),
            r = Math.floor;
        t.exports = function(t) { return !o(t) && isFinite(t) && r(t) === t }
    }, function(t, e) { t.exports = Math.log1p || function(t) { return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t) } }, function(t, e, n) {
        "use strict";
        var o = n(48),
            r = n(43),
            i = n(53),
            a = {};
        n(27)(a, n(15)("iterator"), (function() { return this })), t.exports = function(t, e, n) { t.prototype = o(a, { next: r(1, n) }), i(t, e + " Iterator") }
    }, function(t, e, n) {
        var o = n(12);
        t.exports = function(t, e, n, r) { try { return r ? e(o(n)[0], n[1]) : e(n) } catch (e) { var i = t.return; throw void 0 !== i && o(i.call(t)), e } }
    }, function(t, e, n) {
        var o = n(282);
        t.exports = function(t, e) { return new(o(t))(e) }
    }, function(t, e, n) {
        var o = n(32),
            r = n(22),
            i = n(63),
            a = n(16);
        t.exports = function(t, e, n, s, l) {
            o(e);
            var c = r(t),
                u = i(c),
                f = a(c.length),
                d = l ? f - 1 : 0,
                p = l ? -1 : 1;
            if (n < 2)
                for (;;) { if (d in u) { s = u[d], d += p; break } if (d += p, l ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value") }
            for (; l ? d >= 0 : f > d; d += p) d in u && (s = e(s, u[d], d, c));
            return s
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(22),
            r = n(47),
            i = n(16);
        t.exports = [].copyWithin || function(t, e) {
            var n = o(this),
                a = i(n.length),
                s = r(t, a),
                l = r(e, a),
                c = arguments.length > 2 ? arguments[2] : void 0,
                u = Math.min((void 0 === c ? a : r(c, a)) - l, a - s),
                f = 1;
            for (l < s && s < l + u && (f = -1, l += u - 1, s += u - 1); u-- > 0;) l in n ? n[s] = n[l] : delete n[s], s += f, l += f;
            return n
        }
    }, function(t, e) { t.exports = function(t, e) { return { value: e, done: !!t } } }, function(t, e, n) {
        "use strict";
        var o = n(106);
        n(0)({ target: "RegExp", proto: !0, forced: o !== /./.exec }, { exec: o })
    }, function(t, e, n) { n(18) && "g" != /./g.flags && n(19).f(RegExp.prototype, "flags", { configurable: !0, get: n(74) }) }, function(t, e, n) {
        "use strict";
        var o, r, i, a, s = n(45),
            l = n(10),
            c = n(31),
            u = n(65),
            f = n(0),
            d = n(13),
            p = n(32),
            h = n(57),
            v = n(77),
            g = n(66),
            y = n(108).set,
            b = n(302)(),
            m = n(139),
            k = n(303),
            x = n(78),
            w = n(140),
            S = l.TypeError,
            T = l.process,
            E = T && T.versions,
            B = E && E.v8 || "",
            C = l.Promise,
            _ = "process" == u(T),
            I = function() {},
            O = r = m.f,
            M = !! function() {
                try {
                    var t = C.resolve(1),
                        e = (t.constructor = {})[n(15)("species")] = function(t) { t(I, I) };
                    return (_ || "function" == typeof PromiseRejectionEvent) && t.then(I) instanceof e && 0 !== B.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
                } catch (t) {}
            }(),
            R = function(t) { var e; return !(!d(t) || "function" != typeof(e = t.then)) && e },
            A = function(t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    b((function() {
                        for (var o = t._v, r = 1 == t._s, i = 0, a = function(e) {
                                var n, i, a, s = r ? e.ok : e.fail,
                                    l = e.resolve,
                                    c = e.reject,
                                    u = e.domain;
                                try { s ? (r || (2 == t._h && P(t), t._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = !0)), n === e.promise ? c(S("Promise-chain cycle")) : (i = R(n)) ? i.call(n, l, c) : l(n)) : c(o) } catch (t) { u && !a && u.exit(), c(t) }
                            }; n.length > i;) a(n[i++]);
                        t._c = [], t._n = !1, e && !t._h && N(t)
                    }))
                }
            },
            N = function(t) {
                y.call(l, (function() {
                    var e, n, o, r = t._v,
                        i = L(t);
                    if (i && (e = k((function() { _ ? T.emit("unhandledRejection", r, t) : (n = l.onunhandledrejection) ? n({ promise: t, reason: r }) : (o = l.console) && o.error && o.error("Unhandled promise rejection", r) })), t._h = _ || L(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
                }))
            },
            L = function(t) { return 1 !== t._h && 0 === (t._a || t._c).length },
            P = function(t) {
                y.call(l, (function() {
                    var e;
                    _ ? T.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({ promise: t, reason: t._v })
                }))
            },
            D = function(t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), A(e, !0))
            },
            j = function(t) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t) throw S("Promise can't be resolved itself");
                        (e = R(t)) ? b((function() { var o = { _w: n, _d: !1 }; try { e.call(t, c(j, o, 1), c(D, o, 1)) } catch (t) { D.call(o, t) } })): (n._v = t, n._s = 1, A(n, !1))
                    } catch (t) { D.call({ _w: n, _d: !1 }, t) }
                }
            };
        M || (C = function(t) { h(this, C, "Promise", "_h"), p(t), o.call(this); try { t(c(j, this, 1), c(D, this, 1)) } catch (t) { D.call(this, t) } }, (o = function(t) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }).prototype = n(58)(C.prototype, { then: function(t, e) { var n = O(g(this, C)); return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = _ ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && A(this, !1), n.promise }, catch: function(t) { return this.then(void 0, t) } }), i = function() {
            var t = new o;
            this.promise = t, this.resolve = c(j, t, 1), this.reject = c(D, t, 1)
        }, m.f = O = function(t) { return t === C || t === a ? new i(t) : r(t) }), f(f.G + f.W + f.F * !M, { Promise: C }), n(53)(C, "Promise"), n(56)("Promise"), a = n(17).Promise, f(f.S + f.F * !M, "Promise", { reject: function(t) { var e = O(this); return (0, e.reject)(t), e.promise } }), f(f.S + f.F * (s || !M), "Promise", { resolve: function(t) { return w(s && this === a ? C : this, t) } }), f(f.S + f.F * !(M && n(73)((function(t) { C.all(t).catch(I) }))), "Promise", {
            all: function(t) {
                var e = this,
                    n = O(e),
                    o = n.resolve,
                    r = n.reject,
                    i = k((function() {
                        var n = [],
                            i = 0,
                            a = 1;
                        v(t, !1, (function(t) {
                            var s = i++,
                                l = !1;
                            n.push(void 0), a++, e.resolve(t).then((function(t) { l || (l = !0, n[s] = t, --a || o(n)) }), r)
                        })), --a || o(n)
                    }));
                return i.e && r(i.v), n.promise
            },
            race: function(t) {
                var e = this,
                    n = O(e),
                    o = n.reject,
                    r = k((function() { v(t, !1, (function(t) { e.resolve(t).then(n.resolve, o) })) }));
                return r.e && o(r.v), n.promise
            }
        })
    }, function(t, e, n) {
        "use strict";
        var o = n(32);

        function r(t) {
            var e, n;
            this.promise = new t((function(t, o) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = o
            })), this.resolve = o(e), this.reject = o(n)
        }
        t.exports.f = function(t) { return new r(t) }
    }, function(t, e, n) {
        var o = n(12),
            r = n(13),
            i = n(139);
        t.exports = function(t, e) { if (o(t), r(e) && e.constructor === t) return e; var n = i.f(t); return (0, n.resolve)(e), n.promise }
    }, function(t, e, n) {
        "use strict";
        var o = n(19).f,
            r = n(48),
            i = n(58),
            a = n(31),
            s = n(57),
            l = n(77),
            c = n(97),
            u = n(135),
            f = n(56),
            d = n(18),
            p = n(41).fastKey,
            h = n(52),
            v = d ? "_s" : "size",
            g = function(t, e) {
                var n, o = p(e);
                if ("F" !== o) return t._i[o];
                for (n = t._f; n; n = n.n)
                    if (n.k == e) return n
            };
        t.exports = {
            getConstructor: function(t, e, n, c) {
                var u = t((function(t, o) { s(t, u, e, "_i"), t._t = e, t._i = r(null), t._f = void 0, t._l = void 0, t[v] = 0, null != o && l(o, n, t[c], t) }));
                return i(u.prototype, {
                    clear: function() {
                        for (var t = h(this, e), n = t._i, o = t._f; o; o = o.n) o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
                        t._f = t._l = void 0, t[v] = 0
                    },
                    delete: function(t) {
                        var n = h(this, e),
                            o = g(n, t);
                        if (o) {
                            var r = o.n,
                                i = o.p;
                            delete n._i[o.i], o.r = !0, i && (i.n = r), r && (r.p = i), n._f == o && (n._f = r), n._l == o && (n._l = i), n[v]--
                        }
                        return !!o
                    },
                    forEach: function(t) {
                        h(this, e);
                        for (var n, o = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                            for (o(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function(t) { return !!g(h(this, e), t) }
                }), d && o(u.prototype, "size", { get: function() { return h(this, e)[v] } }), u
            },
            def: function(t, e, n) { var o, r, i = g(t, e); return i ? i.v = n : (t._l = i = { i: r = p(e, !0), k: e, v: n, p: o = t._l, n: void 0, r: !1 }, t._f || (t._f = i), o && (o.n = i), t[v]++, "F" !== r && (t._i[r] = i)), t },
            getEntry: g,
            setStrong: function(t, e, n) { c(t, e, (function(t, n) { this._t = h(t, e), this._k = n, this._l = void 0 }), (function() { for (var t = this._k, e = this._l; e && e.r;) e = e.p; return this._t && (this._l = e = e ? e.n : this._t._f) ? u(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, u(1)) }), n ? "entries" : "values", !n, !0), f(e) }
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(58),
            r = n(41).getWeak,
            i = n(12),
            a = n(13),
            s = n(57),
            l = n(77),
            c = n(36),
            u = n(26),
            f = n(52),
            d = c(5),
            p = c(6),
            h = 0,
            v = function(t) { return t._l || (t._l = new g) },
            g = function() { this.a = [] },
            y = function(t, e) { return d(t.a, (function(t) { return t[0] === e })) };
        g.prototype = {
            get: function(t) { var e = y(this, t); if (e) return e[1] },
            has: function(t) { return !!y(this, t) },
            set: function(t, e) {
                var n = y(this, t);
                n ? n[1] = e : this.a.push([t, e])
            },
            delete: function(t) { var e = p(this.a, (function(e) { return e[0] === t })); return ~e && this.a.splice(e, 1), !!~e }
        }, t.exports = { getConstructor: function(t, e, n, i) { var c = t((function(t, o) { s(t, c, e, "_i"), t._t = e, t._i = h++, t._l = void 0, null != o && l(o, n, t[i], t) })); return o(c.prototype, { delete: function(t) { if (!a(t)) return !1; var n = r(t); return !0 === n ? v(f(this, e)).delete(t) : n && u(n, this._i) && delete n[this._i] }, has: function(t) { if (!a(t)) return !1; var n = r(t); return !0 === n ? v(f(this, e)).has(t) : n && u(n, this._i) } }), c }, def: function(t, e, n) { var o = r(i(e), !0); return !0 === o ? v(t).set(e, n) : o[t._i] = n, t }, ufstore: v }
    }, function(t, e, n) {
        var o = n(33),
            r = n(16);
        t.exports = function(t) {
            if (void 0 === t) return 0;
            var e = o(t),
                n = r(e);
            if (e !== n) throw RangeError("Wrong length!");
            return n
        }
    }, function(t, e, n) {
        var o = n(49),
            r = n(71),
            i = n(12),
            a = n(10).Reflect;
        t.exports = a && a.ownKeys || function(t) {
            var e = o.f(i(t)),
                n = r.f;
            return n ? e.concat(n(t)) : e
        }
    }, function(t, e, n) {
        var o = n(16),
            r = n(93),
            i = n(38);
        t.exports = function(t, e, n, a) {
            var s = String(i(t)),
                l = s.length,
                c = void 0 === n ? " " : String(n),
                u = o(e);
            if (u <= l || "" == c) return s;
            var f = u - l,
                d = r.call(c, Math.ceil(f / c.length));
            return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d
        }
    }, function(t, e, n) {
        var o = n(18),
            r = n(46),
            i = n(28),
            a = n(64).f;
        t.exports = function(t) { return function(e) { for (var n, s = i(e), l = r(s), c = l.length, u = 0, f = []; c > u;) n = l[u++], o && !a.call(s, n) || f.push(t ? [n, s[n]] : s[n]); return f } }
    }, function(t, e, n) {
        var o = function(t) {
            "use strict";
            var e = Object.prototype,
                n = e.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                r = o.iterator || "@@iterator",
                i = o.asyncIterator || "@@asyncIterator",
                a = o.toStringTag || "@@toStringTag";

            function s(t, e, n, o) {
                var r = e && e.prototype instanceof u ? e : u,
                    i = Object.create(r.prototype),
                    a = new w(o || []);
                return i._invoke = function(t, e, n) {
                    var o = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === o) throw new Error("Generator is already running");
                        if ("completed" === o) { if ("throw" === r) throw i; return T() }
                        for (n.method = r, n.arg = i;;) {
                            var a = n.delegate;
                            if (a) { var s = m(a, n); if (s) { if (s === c) continue; return s } }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === o) throw o = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = "executing";
                            var u = l(t, e, n);
                            if ("normal" === u.type) { if (o = n.done ? "completed" : "suspendedYield", u.arg === c) continue; return { value: u.arg, done: n.done } }
                            "throw" === u.type && (o = "completed", n.method = "throw", n.arg = u.arg)
                        }
                    }
                }(t, n, a), i
            }

            function l(t, e, n) { try { return { type: "normal", arg: t.call(e, n) } } catch (t) { return { type: "throw", arg: t } } }
            t.wrap = s;
            var c = {};

            function u() {}

            function f() {}

            function d() {}
            var p = {};
            p[r] = function() { return this };
            var h = Object.getPrototypeOf,
                v = h && h(h(S([])));
            v && v !== e && n.call(v, r) && (p = v);
            var g = d.prototype = u.prototype = Object.create(p);

            function y(t) {
                ["next", "throw", "return"].forEach((function(e) { t[e] = function(t) { return this._invoke(e, t) } }))
            }

            function b(t, e) {
                var o;
                this._invoke = function(r, i) {
                    function a() {
                        return new e((function(o, a) {
                            ! function o(r, i, a, s) {
                                var c = l(t[r], t, i);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        f = u.value;
                                    return f && "object" == typeof f && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) { o("next", t, a, s) }), (function(t) { o("throw", t, a, s) })) : e.resolve(f).then((function(t) { u.value = t, a(u) }), (function(t) { return o("throw", t, a, s) }))
                                }
                                s(c.arg)
                            }(r, i, o, a)
                        }))
                    }
                    return o = o ? o.then(a, a) : a()
                }
            }

            function m(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, m(t, e), "throw" === e.method)) return c;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return c
                }
                var o = l(n, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, c;
                var r = o.arg;
                return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, c) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, c)
            }

            function k(t) {
                var e = { tryLoc: t[0] };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function x(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function w(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(k, this), this.reset(!0) }

            function S(t) {
                if (t) {
                    var e = t[r];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            i = function e() {
                                for (; ++o < t.length;)
                                    if (n.call(t, o)) return e.value = t[o], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return i.next = i
                    }
                }
                return { next: T }
            }

            function T() { return { value: void 0, done: !0 } }
            return f.prototype = g.constructor = d, d.constructor = f, d[a] = f.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) { var e = "function" == typeof t && t.constructor; return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name)) }, t.mark = function(t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, a in t || (t[a] = "GeneratorFunction")), t.prototype = Object.create(g), t }, t.awrap = function(t) { return { __await: t } }, y(b.prototype), b.prototype[i] = function() { return this }, t.AsyncIterator = b, t.async = function(e, n, o, r, i) { void 0 === i && (i = Promise); var a = new b(s(e, n, o, r), i); return t.isGeneratorFunction(n) ? a : a.next().then((function(t) { return t.done ? t.value : a.next() })) }, y(g), g[a] = "Generator", g[r] = function() { return this }, g.toString = function() { return "[object Generator]" }, t.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(),
                    function n() { for (; e.length;) { var o = e.pop(); if (o in t) return n.value = o, n.done = !1, n } return n.done = !0, n }
            }, t.values = S, w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                        for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;

                    function o(n, o) { return a.type = "throw", a.arg = t, e.next = n, o && (e.method = "next", e.arg = void 0), !!o }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r],
                            a = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var s = n.call(i, "catchLoc"),
                                l = n.call(i, "finallyLoc");
                            if (s && l) { if (this.prev < i.catchLoc) return o(i.catchLoc, !0); if (this.prev < i.finallyLoc) return o(i.finallyLoc) } else if (s) { if (this.prev < i.catchLoc) return o(i.catchLoc, !0) } else { if (!l) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return o(i.finallyLoc) }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) { var r = this.tryEntries[o]; if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var i = r; break } }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, c) : this.complete(a)
                },
                complete: function(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), c },
                finish: function(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), c } },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var o = n.completion;
                            if ("throw" === o.type) {
                                var r = o.arg;
                                x(n)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, n) { return this.delegate = { iterator: S(t), resultName: e, nextLoc: n }, "next" === this.method && (this.arg = void 0), c }
            }, t
        }(t.exports);
        try { regeneratorRuntime = o } catch (t) { Function("r", "regeneratorRuntime = r")(o) }
    }, function(t, e, n) {
        var o = n(149);
        t.exports = function(t, e) { if (t) { if ("string" == typeof t) return o(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0 } }
    }, function(t, e) {
        t.exports = function(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
            return o
        }
    }, function(t) { t.exports = JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":"","Filter":"","Nothing found":""}}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}') }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(5), n(6), n(4), n(153)], void 0 === (i = "function" == typeof(o = function(t, e, o, r, i, a) {
            "use strict";
            var s = n(1);

            function l() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.CriticalError = void 0, e = s(e), o = s(o), r = s(r), i = s(i);
            var c = function(t) {
                (0, o.default)(s, t);
                var n, a = (n = s, function() {
                    var t, e = (0, i.default)(n);
                    if (l()) {
                        var o = (0, i.default)(this).constructor;
                        t = Reflect.construct(e, arguments, o)
                    } else t = e.apply(this, arguments);
                    return (0, r.default)(this, t)
                });

                function s() { return (0, e.default)(this, s), a.apply(this, arguments) }
                return s
            }((0, (a = s(a)).default)(Error));
            t.CriticalError = c, c.displayName = "CriticalError"
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e) { t.exports = function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } }, function(t, e, n) {
        var o = n(4),
            r = n(110),
            i = n(372),
            a = n(373);

        function s(e) {
            var n = "function" == typeof Map ? new Map : void 0;
            return t.exports = s = function(t) {
                if (null === t || !i(t)) return t;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== n) {
                    if (n.has(t)) return n.get(t);
                    n.set(t, e)
                }

                function e() { return a(t, arguments, o(this).constructor) }
                return e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r(e, t)
            }, s(e)
        }
        t.exports = s
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(7), n(112), n(9), n(61)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(8),
                g = n(1);

            function y() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = g(r), i = g(i), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = v(f), d = g(d), p = g(p), h = g(h);
            var b = function(t) {
                (0, l.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, u.default)(e);
                    if (y()) {
                        var o = (0, u.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, c.default)(this, t)
                });

                function o() {
                    var t;
                    return (0, a.default)(this, o), (t = n.apply(this, arguments)).insert = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.config.defaultBlock,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 ? arguments[3] : void 0),
                            r = arguments.length > 4 ? arguments[4] : void 0,
                            i = arguments.length > 5 ? arguments[5] : void 0,
                            a = t.Editor.BlockManager.insert({ tool: e, data: n, index: o, needToFocus: r, replace: i });
                        return new d.default(a)
                    }, t.composeBlockData = function() {
                        var e = (0, i.default)(r.default.mark((function e(n) {
                            var o, i;
                            return r.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = t.Editor.Tools.blockTools.get(n), i = new h.default({ tool: o, api: t.Editor.API, readOnly: !0, data: {}, tunesData: {} }), e.abrupt("return", i.data);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) { return e.apply(this, arguments) }
                    }(), t.update = function(e, n) {
                        var o = t.Editor.BlockManager,
                            r = o.getBlockById(e);
                        if (r) {
                            var i = o.getBlockIndex(r);
                            o.insert({ id: r.id, tool: r.name, data: n, index: i, replace: !0, tunes: r.tunes })
                        } else f.log("blocks.update(): Block with passed id was not found", "warn")
                    }, t
                }
                return (0, s.default)(o, [{ key: "getBlocksCount", value: function() { return this.Editor.BlockManager.blocks.length } }, { key: "getCurrentBlockIndex", value: function() { return this.Editor.BlockManager.currentBlockIndex } }, {
                    key: "getBlockIndex",
                    value: function(t) {
                        var e = this.Editor.BlockManager.getBlockById(t);
                        if (e) return this.Editor.BlockManager.getBlockIndex(e);
                        f.logLabeled("There is no block with id `" + t + "`", "warn")
                    }
                }, {
                    key: "getBlockByIndex",
                    value: function(t) {
                        var e = this.Editor.BlockManager.getBlockByIndex(t);
                        if (void 0 !== e) return new d.default(e);
                        f.logLabeled("There is no block at index `" + t + "`", "warn")
                    }
                }, { key: "getById", value: function(t) { var e = this.Editor.BlockManager.getBlockById(t); return void 0 === e ? (f.logLabeled("There is no block with id `" + t + "`", "warn"), null) : new d.default(e) } }, { key: "swap", value: function(t, e) { f.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), this.Editor.BlockManager.swap(t, e) } }, { key: "move", value: function(t, e) { this.Editor.BlockManager.move(t, e) } }, {
                    key: "delete",
                    value: function(t) {
                        try { this.Editor.BlockManager.removeBlock(t) } catch (t) { return void f.logLabeled(t, "warn") }
                        0 === this.Editor.BlockManager.blocks.length && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close()
                    }
                }, { key: "clear", value: function() { this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close() } }, { key: "render", value: function(t) { return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(t.blocks) } }, { key: "renderFromHTML", value: function(t) { return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(t, !0) } }, {
                    key: "stretchBlock",
                    value: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        f.deprecationAssert(!0, "blocks.stretchBlock()", "BlockAPI");
                        var n = this.Editor.BlockManager.getBlockByIndex(t);
                        n && (n.stretched = e)
                    }
                }, { key: "insertNewBlock", value: function() { f.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert() } }, { key: "methods", get: function() { var t = this; return { clear: function() { return t.clear() }, render: function(e) { return t.render(e) }, renderFromHTML: function(e) { return t.renderFromHTML(e) }, delete: function(e) { return t.delete(e) }, swap: function(e, n) { return t.swap(e, n) }, move: function(e, n) { return t.move(e, n) }, getBlockByIndex: function(e) { return t.getBlockByIndex(e) }, getById: function(e) { return t.getById(e) }, getCurrentBlockIndex: function() { return t.getCurrentBlockIndex() }, getBlockIndex: function(e) { return t.getBlockIndex(e) }, getBlocksCount: function() { return t.getBlocksCount() }, stretchBlock: function(e) { var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return t.stretchBlock(e, n) }, insertNewBlock: function() { return t.insertNewBlock() }, insert: this.insert, update: this.update, composeBlockData: this.composeBlockData } } }]), o
            }(p.default);
            o.default = b, b.displayName = "BlocksAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c) {
            "use strict";
            var u = n(1);

            function f() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
            var d = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (f()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() {
                    var t;
                    return (0, r.default)(this, o), (t = n.apply(this, arguments)).setToFirstBlock = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return !!t.Editor.BlockManager.firstBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock, e, n), !0)
                    }, t.setToLastBlock = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return !!t.Editor.BlockManager.lastBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock, e, n), !0)
                    }, t.setToPreviousBlock = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return !!t.Editor.BlockManager.previousBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock, e, n), !0)
                    }, t.setToNextBlock = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return !!t.Editor.BlockManager.nextBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock, e, n), !0)
                    }, t.setToBlock = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.Editor.Caret.positions.DEFAULT,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return !!t.Editor.BlockManager.blocks[e] && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e], n, o), !0)
                    }, t.focus = function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return e ? t.setToLastBlock(t.Editor.Caret.positions.END) : t.setToFirstBlock(t.Editor.Caret.positions.START) }, t
                }
                return (0, i.default)(o, [{ key: "methods", get: function() { return { setToFirstBlock: this.setToFirstBlock, setToLastBlock: this.setToLastBlock, setToPreviousBlock: this.setToPreviousBlock, setToNextBlock: this.setToNextBlock, setToBlock: this.setToBlock, focus: this.focus } } }]), o
            }((c = u(c)).default);
            o.default = d, d.displayName = "CaretAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c) {
            "use strict";
            var u = n(1);

            function f() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
            var d = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (f()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "on", value: function(t, e) { this.eventsDispatcher.on(t, e) } }, { key: "emit", value: function(t, e) { this.eventsDispatcher.emit(t, e) } }, { key: "off", value: function(t, e) { this.eventsDispatcher.off(t, e) } }, { key: "methods", get: function() { var t = this; return { emit: function(e, n) { return t.emit(e, n) }, off: function(e, n) { return t.off(e, n) }, on: function(e, n) { return t.on(e, n) } } } }]), o
            }((c = u(c)).default);
            o.default = d, d.displayName = "EventsAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(60), n(7), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f) {
            "use strict";
            var d = n(1);

            function p() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c);
            var h = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (p()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "getMethodsForTool", value: function(t) { return Object.assign(this.methods, { t: function(e) { return c.default.t(o.getNamespace(t), e) } }) } }, {
                    key: "methods",
                    get: function() {
                        return {
                            t: function() {
                                (0, u.logLabeled)("I18n.t() method can be accessed only from Tools", "warn")
                            }
                        }
                    }
                }], [{ key: "getNamespace", value: function(t) { return t.isTune() ? "blockTunes.".concat(t.name) : "tools.".concat(t.name) } }]), o
            }((f = d(f)).default);
            o.default = h, h.displayName = "I18nAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c) {
            "use strict";
            var u = n(1);

            function f() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
            var d = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (f()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "open", value: function() { this.Editor.InlineToolbar.tryToShow() } }, { key: "close", value: function() { this.Editor.InlineToolbar.close() } }, { key: "methods", get: function() { var t = this; return { close: function() { return t.close() }, open: function() { return t.open() } } } }]), o
            }((c = u(c)).default);
            o.default = d, d.displayName = "InlineToolbarAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c) {
            "use strict";
            var u = n(1);

            function f() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
            var d = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (f()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "on", value: function(t, e, n, o) { return this.listeners.on(t, e, n, o) } }, { key: "off", value: function(t, e, n, o) { this.listeners.off(t, e, n, o) } }, { key: "offById", value: function(t) { this.listeners.offById(t) } }, { key: "methods", get: function() { var t = this; return { on: function(e, n, o, r) { return t.on(e, n, o, r) }, off: function(e, n, o, r) { return t.off(e, n, o, r) }, offById: function(e) { return t.offById(e) } } } }]), o
            }((c = u(c)).default);
            o.default = d, d.displayName = "ListenersAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(377), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u) {
            "use strict";
            var f = n(1);

            function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
            var p = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (d()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o(t) {
                    var e, i = t.config,
                        a = t.eventsDispatcher;
                    return (0, r.default)(this, o), (e = n.call(this, { config: i, eventsDispatcher: a })).notifier = new c.default, e
                }
                return (0, i.default)(o, [{ key: "show", value: function(t) { return this.notifier.show(t) } }, { key: "methods", get: function() { var t = this; return { show: function(e) { return t.show(e) } } } }]), o
            }((u = f(u)).default);
            o.default = p, p.displayName = "NotifierAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c) {
            "use strict";
            var u = n(1);

            function f() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
            var d = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (f()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "toggle", value: function(t) { return this.Editor.ReadOnly.toggle(t) } }, { key: "methods", get: function() { var t = this; return { toggle: function(e) { return t.toggle(e) }, get isEnabled() { return t.isEnabled } } } }, { key: "isEnabled", get: function() { return this.Editor.ReadOnly.isEnabled } }]), o
            }((c = u(c)).default);
            o.default = d, d.displayName = "ReadOnlyAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(67)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u) {
            "use strict";
            var f = n(1);

            function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
            var p = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (d()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "clean", value: function(t, e) { return (0, u.clean)(t, e) } }, { key: "methods", get: function() { var t = this; return { clean: function(e, n) { return t.clean(e, n) } } } }]), o
            }((c = f(c)).default);
            o.default = p, p.displayName = "SanitizerAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(7), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u) {
            "use strict";
            var f = n(8),
                d = n(1);

            function p() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = f(c);
            var h = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (p()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "save", value: function() { var t = "Editor's content can not be saved in read-only mode"; return this.Editor.ReadOnly.isEnabled ? (c.logLabeled(t, "warn"), Promise.reject(new Error(t))) : this.Editor.Saver.save() } }, { key: "methods", get: function() { var t = this; return { save: function() { return t.save() } } } }]), o
            }((u = d(u)).default);
            o.default = h, h.displayName = "SaverAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(25), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u) {
            "use strict";
            var f = n(1);

            function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
            var p = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (d()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "findParentTag", value: function(t, e) { return (new c.default).findParentTag(t, e) } }, {
                    key: "expandToTag",
                    value: function(t) {
                        (new c.default).expandToTag(t)
                    }
                }, { key: "methods", get: function() { var t = this; return { findParentTag: function(e, n) { return t.findParentTag(e, n) }, expandToTag: function(e) { return t.expandToTag(e) } } } }]), o
            }((u = f(u)).default);
            o.default = p, p.displayName = "SelectionAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c) {
            "use strict";
            var u = n(1);

            function f() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
            var d = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (f()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "classes", get: function() { return { block: "cdx-block", inlineToolButton: "ce-inline-tool", inlineToolButtonActive: "ce-inline-tool--active", input: "cdx-input", loader: "cdx-loader", button: "cdx-button", settingsButton: "cdx-settings-button", settingsButtonActive: "cdx-settings-button--active" } } }]), o
            }((c = u(c)).default);
            o.default = d, d.displayName = "StylesAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u) {
            "use strict";
            var f = n(8),
                d = n(1);

            function p() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);
            var h = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (p()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "open", value: function() { this.Editor.Toolbar.moveAndOpen() } }, { key: "close", value: function() { this.Editor.Toolbar.close() } }, { key: "toggleBlockSettings", value: function(t) {-1 !== this.Editor.BlockManager.currentBlockIndex ? (null != t ? t : !this.Editor.BlockSettings.opened) ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close() : u.logLabeled("Could't toggle the Toolbar because there is no block selected ", "warn") } }, { key: "methods", get: function() { var t = this; return { close: function() { return t.close() }, open: function() { return t.open() }, toggleBlockSettings: function(e) { return t.toggleBlockSettings(e) } } } }]), o
            }(c.default);
            o.default = h, h.displayName = "ToolbarAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(114)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u) {
            "use strict";
            var f = n(1);

            function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c), u = f(u);
            var p = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (d()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o(t) {
                    var e, i = t.config,
                        a = t.eventsDispatcher;
                    return (0, r.default)(this, o), (e = n.call(this, { config: i, eventsDispatcher: a })).tooltip = new u.default, e
                }
                return (0, i.default)(o, [{ key: "destroy", value: function() { this.tooltip.destroy() } }, { key: "show", value: function(t, e, n) { this.tooltip.show(t, e, n) } }, { key: "hide", value: function() { this.tooltip.hide() } }, { key: "onHover", value: function(t, e, n) { this.tooltip.onHover(t, e, n) } }, { key: "methods", get: function() { var t = this; return { show: function(e, n, o) { return t.show(e, n, o) }, hide: function() { return t.hide() }, onHover: function(e, n, o) { return t.onHover(e, n, o) } } } }]), o
            }(c.default);
            o.default = p, p.displayName = "TooltipAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c) {
            "use strict";
            var u = n(1);

            function f() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
            var d = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (f()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{ key: "methods", get: function() { return { nodes: this.editorNodes } } }, { key: "editorNodes", get: function() { return { wrapper: this.Editor.UI.nodes.wrapper, redactor: this.Editor.UI.nodes.redactor } } }]), o
            }((c = u(c)).default);
            o.default = d, d.displayName = "UiAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(7), n(25), n(62)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d) {
            "use strict";
            var p = n(8),
                h = n(1);

            function v() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = h(r), i = h(i), a = h(a), s = h(s), l = h(l), c = h(c), u = p(u), f = h(f), d = h(d);
            var g = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (v()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{
                    key: "keydown",
                    value: function(t) {
                        switch (this.beforeKeydownProcessing(t), t.keyCode) {
                            case u.keyCodes.BACKSPACE:
                                this.backspace(t);
                                break;
                            case u.keyCodes.ENTER:
                                this.enter(t);
                                break;
                            case u.keyCodes.DOWN:
                            case u.keyCodes.RIGHT:
                                this.arrowRightAndDown(t);
                                break;
                            case u.keyCodes.UP:
                            case u.keyCodes.LEFT:
                                this.arrowLeftAndUp(t);
                                break;
                            case u.keyCodes.TAB:
                                this.tabPressed(t)
                        }
                    }
                }, { key: "beforeKeydownProcessing", value: function(t) { this.needToolbarClosing(t) && u.isPrintableKey(t.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(t))) } }, { key: "keyup", value: function(t) { t.shiftKey || this.Editor.UI.checkEmptiness() } }, {
                    key: "tabPressed",
                    value: function(t) {
                        this.Editor.BlockSelection.clearSelection(t);
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.InlineToolbar,
                            r = e.ConversionToolbar,
                            i = n.currentBlock;
                        if (i) {
                            var a = i.isEmpty,
                                s = i.tool.isDefault && a,
                                l = !a && r.opened,
                                c = !a && !f.default.isCollapsed && o.opened;
                            s ? this.activateToolbox() : l || c || this.activateBlockSettings()
                        }
                    }
                }, { key: "dragOver", value: function(t) { this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !0 } }, { key: "dragLeave", value: function(t) { this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !1 } }, {
                    key: "handleCommandC",
                    value: function(t) {
                        var e = this.Editor.BlockSelection;
                        e.anyBlockSelected && e.copySelectedBlocks(t)
                    }
                }, {
                    key: "handleCommandX",
                    value: function(t) {
                        var e = this.Editor,
                            n = e.BlockSelection,
                            o = e.BlockManager,
                            r = e.Caret;
                        n.anyBlockSelected && n.copySelectedBlocks(t).then((function() {
                            var e = o.removeSelectedBlocks(),
                                i = o.insertDefaultBlockAtIndex(e, !0);
                            r.setToBlock(i, r.positions.START), n.clearSelection(t)
                        }))
                    }
                }, {
                    key: "enter",
                    value: function(t) {
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.UI;
                        if (!n.currentBlock.tool.isLineBreaksEnabled && !(o.someToolbarOpened && o.someFlipperButtonFocused || t.shiftKey)) {
                            var r = this.Editor.BlockManager.currentBlock;
                            this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : r = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(r), this.Editor.Toolbar.moveAndOpen(r), t.preventDefault()
                        }
                    }
                }, {
                    key: "backspace",
                    value: function(t) {
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.BlockSelection,
                            r = e.Caret,
                            i = n.currentBlock,
                            a = i.tool;
                        if (i.selected || i.isEmpty && i.currentInput === i.firstInput) { t.preventDefault(); var s = n.currentBlockIndex; return n.previousBlock && 0 === n.previousBlock.inputs.length ? n.removeBlock(s - 1) : n.removeBlock(), r.setToBlock(n.currentBlock, s ? r.positions.END : r.positions.START), this.Editor.Toolbar.close(), void o.clearSelection(t) }
                        if (!a.isLineBreaksEnabled || r.isAtStart) {
                            var l = 0 === n.currentBlockIndex;
                            r.isAtStart && f.default.isCollapsed && i.currentInput === i.firstInput && !l && (t.preventDefault(), this.mergeBlocks())
                        }
                    }
                }, {
                    key: "mergeBlocks",
                    value: function() {
                        var t = this.Editor,
                            e = t.BlockManager,
                            n = t.Caret,
                            o = t.Toolbar,
                            r = e.previousBlock,
                            i = e.currentBlock;
                        if (i.name !== r.name || !r.mergeable) return 0 === r.inputs.length || r.isEmpty ? (e.removeBlock(e.currentBlockIndex - 1), n.setToBlock(e.currentBlock), void o.close()) : void(n.navigatePrevious() && o.close());
                        n.createShadow(r.pluginsContent), e.mergeBlocks(r, i).then((function() { n.restoreCaret(r.pluginsContent), r.pluginsContent.normalize(), o.close() }))
                    }
                }, {
                    key: "arrowRightAndDown",
                    value: function(t) {
                        var e = this,
                            n = d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB);
                        if (!this.Editor.UI.someToolbarOpened || !n) {
                            this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                            var o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
                            t.shiftKey && t.keyCode === u.keyCodes.DOWN && o ? this.Editor.CrossBlockSelection.toggleBlockSelectedState() : ((t.keyCode === u.keyCodes.DOWN || t.keyCode === u.keyCodes.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? t.preventDefault() : u.delay((function() { e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput() }), 20)(), this.Editor.BlockSelection.clearSelection(t))
                        }
                    }
                }, {
                    key: "arrowLeftAndUp",
                    value: function(t) {
                        var e = this;
                        if (this.Editor.UI.someToolbarOpened) {
                            if (d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB)) return;
                            this.Editor.UI.closeAllToolbars()
                        }
                        this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                        var n = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
                        t.shiftKey && t.keyCode === u.keyCodes.UP && n ? this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1) : ((t.keyCode === u.keyCodes.UP || t.keyCode === u.keyCodes.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? t.preventDefault() : u.delay((function() { e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput() }), 20)(), this.Editor.BlockSelection.clearSelection(t))
                    }
                }, {
                    key: "needToolbarClosing",
                    value: function(t) {
                        var e = t.keyCode === u.keyCodes.ENTER && this.Editor.Toolbar.toolbox.opened,
                            n = t.keyCode === u.keyCodes.ENTER && this.Editor.BlockSettings.opened,
                            o = t.keyCode === u.keyCodes.ENTER && this.Editor.InlineToolbar.opened,
                            r = t.keyCode === u.keyCodes.ENTER && this.Editor.ConversionToolbar.opened,
                            i = t.keyCode === u.keyCodes.TAB;
                        return !(t.shiftKey || i || e || n || o || r)
                    }
                }, { key: "activateToolbox", value: function() { this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open() } }, { key: "activateBlockSettings", value: function() { this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.moveAndOpen()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open() } }]), o
            }(c.default);
            o.default = g, g.displayName = "BlockEvents", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(61), n(9), n(14), n(7), n(382), n(112), n(383)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p, h, v, g, y) {
            "use strict";
            var b = n(8),
                m = n(1);

            function k() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = m(r), i = m(i), a = m(a), s = m(s), l = m(l), c = m(c), u = m(u), f = b(f), d = m(d), p = m(p), h = b(h), v = m(v), g = m(g);
            var x = function(t) {
                (0, l.default)(b, t);
                var e, n, o, d = (e = b, function() {
                    var t, n = (0, u.default)(e);
                    if (k()) {
                        var o = (0, u.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, c.default)(this, t)
                });

                function b() { var t; return (0, a.default)(this, b), (t = d.apply(this, arguments))._currentBlockIndex = -1, t._blocks = null, t }
                return (0, s.default)(b, [{
                    key: "prepare",
                    value: function() {
                        var t = this,
                            e = new v.default(this.Editor.UI.nodes.redactor);
                        this._blocks = new Proxy(e, { set: v.default.set, get: v.default.get }), this.listeners.on(document, "copy", (function(e) { return t.Editor.BlockEvents.handleCommandC(e) }))
                    }
                }, { key: "toggleReadOnly", value: function(t) { t ? this.disableModuleBindings() : this.enableModuleBindings() } }, {
                    key: "composeBlock",
                    value: function(t) {
                        var e = t.tool,
                            n = t.data,
                            o = void 0 === n ? {} : n,
                            r = t.id,
                            i = void 0 === r ? void 0 : r,
                            a = t.tunes,
                            s = void 0 === a ? {} : a,
                            l = this.Editor.ReadOnly.isEnabled,
                            c = this.Editor.Tools.blockTools.get(e),
                            u = new f.default({ id: i, data: o, tool: c, api: this.Editor.API, readOnly: l, tunesData: s });
                        return l || this.bindBlockEvents(u), u
                    }
                }, {
                    key: "insert",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.id,
                            n = void 0 === e ? void 0 : e,
                            o = t.tool,
                            r = void 0 === o ? this.config.defaultBlock : o,
                            i = t.data,
                            a = void 0 === i ? {} : i,
                            s = t.index,
                            l = t.needToFocus,
                            c = void 0 === l || l,
                            u = t.replace,
                            f = void 0 !== u && u,
                            d = t.tunes,
                            p = void 0 === d ? {} : d,
                            h = s;
                        void 0 === h && (h = this.currentBlockIndex + (f ? 0 : 1));
                        var v = this.composeBlock({ id: n, tool: r, data: a, tunes: p });
                        return f && this.blockDidMutated(y.BlockMutationType.Removed, this.getBlockByIndex(h), { index: h }), this._blocks.insert(h, v, f), this.blockDidMutated(y.BlockMutationType.Added, v, { index: h }), c ? this.currentBlockIndex = h : h <= this.currentBlockIndex && this.currentBlockIndex++, v
                    }
                }, {
                    key: "replace",
                    value: function(t) {
                        var e = t.tool,
                            n = void 0 === e ? this.config.defaultBlock : e,
                            o = t.data,
                            r = void 0 === o ? {} : o;
                        return this.insert({ tool: n, data: r, index: this.currentBlockIndex, replace: !0 })
                    }
                }, {
                    key: "paste",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            o = this.insert({ tool: t, replace: n });
                        try { o.call(f.BlockToolAPI.ON_PASTE, e) } catch (e) { h.log("".concat(t, ": onPaste callback call is failed"), "error", e) }
                        return o
                    }
                }, {
                    key: "insertDefaultBlockAtIndex",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this.composeBlock({ tool: this.config.defaultBlock });
                        return this._blocks[t] = n, this.blockDidMutated(y.BlockMutationType.Added, n, { index: t }), e ? this.currentBlockIndex = t : t <= this.currentBlockIndex && this.currentBlockIndex++, n
                    }
                }, { key: "insertAtEnd", value: function() { return this.currentBlockIndex = this.blocks.length - 1, this.insert() } }, {
                    key: "mergeBlocks",
                    value: (o = (0, i.default)(r.default.mark((function t(e, n) {
                        var o, i;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (o = this._blocks.indexOf(n), !n.isEmpty) { t.next = 3; break }
                                    return t.abrupt("return");
                                case 3:
                                    return t.next = 5, n.data;
                                case 5:
                                    if (i = t.sent, h.isEmpty(i)) { t.next = 9; break }
                                    return t.next = 9, e.mergeWith(i);
                                case 9:
                                    this.removeBlock(o), this.currentBlockIndex = this._blocks.indexOf(e);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t, e) { return o.apply(this, arguments) })
                }, {
                    key: "removeBlock",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentBlockIndex;
                        if (!this.validateIndex(t)) throw new Error("Can't find a Block to remove");
                        var e = this._blocks[t];
                        e.destroy(), this._blocks.remove(t), this.blockDidMutated(y.BlockMutationType.Removed, e, { index: t }), this.currentBlockIndex >= t && this.currentBlockIndex--, this.blocks.length ? 0 === t && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, this.insert())
                    }
                }, { key: "removeSelectedBlocks", value: function() { for (var t, e = this.blocks.length - 1; e >= 0; e--) this.blocks[e].selected && (this.removeBlock(e), t = e); return t } }, {
                    key: "removeAllBlocks",
                    value: function() {
                        for (var t = this.blocks.length - 1; t >= 0; t--) this._blocks.remove(t);
                        this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus()
                    }
                }, {
                    key: "split",
                    value: function() {
                        var t = this.Editor.Caret.extractFragmentFromCaretPosition(),
                            e = p.default.make("div");
                        e.appendChild(t);
                        var n = { text: p.default.isEmpty(e) ? "" : e.innerHTML };
                        return this.insert({ data: n })
                    }
                }, { key: "getBlockByIndex", value: function(t) { return -1 === t && (t = this._blocks.length - 1), this._blocks[t] } }, { key: "getBlockIndex", value: function(t) { return this._blocks.indexOf(t) } }, { key: "getBlockById", value: function(t) { return this._blocks.array.find((function(e) { return e.id === t })) } }, {
                    key: "getBlock",
                    value: function(t) {
                        p.default.isElement(t) || (t = t.parentNode);
                        var e = this._blocks.nodes,
                            n = t.closest(".".concat(f.default.CSS.wrapper)),
                            o = e.indexOf(n);
                        if (o >= 0) return this._blocks[o]
                    }
                }, { key: "highlightCurrentNode", value: function() { this.clearFocused(), this.currentBlock.focused = !0 } }, { key: "clearFocused", value: function() { this.blocks.forEach((function(t) { t.focused = !1 })) } }, { key: "setCurrentBlockByChildNode", value: function(t) { p.default.isElement(t) || (t = t.parentNode); var e = t.closest(".".concat(f.default.CSS.wrapper)); if (e) { var n = e.closest(".".concat(this.Editor.UI.CSS.editorWrapper)); if (null == n ? void 0 : n.isEqualNode(this.Editor.UI.nodes.wrapper)) return this.currentBlockIndex = this._blocks.nodes.indexOf(e), this.currentBlock.updateCurrentInput(), this.currentBlock } } }, { key: "getBlockByChildNode", value: function(t) { p.default.isElement(t) || (t = t.parentNode); var e = t.closest(".".concat(f.default.CSS.wrapper)); return this.blocks.find((function(t) { return t.holder === e })) } }, { key: "swap", value: function(t, e) { this._blocks.swap(t, e), this.currentBlockIndex = e } }, {
                    key: "move",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.currentBlockIndex;
                        isNaN(t) || isNaN(e) ? h.log("Warning during 'move' call: incorrect indices provided.", "warn") : this.validateIndex(t) && this.validateIndex(e) ? (this._blocks.move(t, e), this.currentBlockIndex = t, this.blockDidMutated(y.BlockMutationType.Moved, this.currentBlock, { fromIndex: e, toIndex: t })) : h.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn")
                    }
                }, { key: "dropPointer", value: function() { this.currentBlockIndex = -1, this.clearFocused() } }, {
                    key: "clear",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this._blocks.removeAll(), this.dropPointer(), t && this.insert(), this.Editor.UI.checkEmptiness()
                    }
                }, {
                    key: "destroy",
                    value: (n = (0, i.default)(r.default.mark((function t() {
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Promise.all(this.blocks.map((function(t) { return t.destroy() })));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() { return n.apply(this, arguments) })
                }, {
                    key: "bindBlockEvents",
                    value: function(t) {
                        var e = this,
                            n = this.Editor.BlockEvents;
                        this.readOnlyMutableListeners.on(t.holder, "keydown", (function(t) { n.keydown(t) })), this.readOnlyMutableListeners.on(t.holder, "keyup", (function(t) { n.keyup(t) })), this.readOnlyMutableListeners.on(t.holder, "dragover", (function(t) { n.dragOver(t) })), this.readOnlyMutableListeners.on(t.holder, "dragleave", (function(t) { n.dragLeave(t) })), t.on("didMutated", (function(t) { return e.blockDidMutated(y.BlockMutationType.Changed, t, { index: e.getBlockIndex(t) }) }))
                    }
                }, { key: "disableModuleBindings", value: function() { this.readOnlyMutableListeners.clearAll() } }, {
                    key: "enableModuleBindings",
                    value: function() {
                        var t = this;
                        this.readOnlyMutableListeners.on(document, "cut", (function(e) { return t.Editor.BlockEvents.handleCommandX(e) })), this.blocks.forEach((function(e) { t.bindBlockEvents(e) }))
                    }
                }, { key: "validateIndex", value: function(t) { return !(t < 0 || t >= this._blocks.length) } }, {
                    key: "blockDidMutated",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = new CustomEvent(t, { detail: Object.assign({ target: new g.default(e) }, n) });
                        return this.Editor.ModificationsObserver.onChange(o), e
                    }
                }, { key: "currentBlockIndex", get: function() { return this._currentBlockIndex }, set: function(t) { this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[t] && this._blocks[t].willSelect(), this._currentBlockIndex = t } }, { key: "firstBlock", get: function() { return this._blocks[0] } }, { key: "lastBlock", get: function() { return this._blocks[this._blocks.length - 1] } }, { key: "currentBlock", get: function() { return this._blocks[this.currentBlockIndex] }, set: function(t) { this.currentBlockIndex = this.getBlockIndex(t) } }, { key: "nextBlock", get: function() { return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1] } }, { key: "nextContentfulBlock", get: function() { return this.blocks.slice(this.currentBlockIndex + 1).find((function(t) { return !!t.inputs.length })) } }, { key: "previousContentfulBlock", get: function() { return this.blocks.slice(0, this.currentBlockIndex).reverse().find((function(t) { return !!t.inputs.length })) } }, { key: "previousBlock", get: function() { return 0 === this.currentBlockIndex ? null : this._blocks[this.currentBlockIndex - 1] } }, { key: "blocks", get: function() { return this._blocks.array } }, { key: "isEditorEmpty", get: function() { return this.blocks.every((function(t) { return t.isEmpty })) } }]), b
            }(d.default);
            o.default = x, x.displayName = "BlockManager", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(7), n(14), n(115), n(25), n(67)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(8),
                g = n(1);

            function y() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = g(r), i = g(i), a = g(a), s = g(s), l = g(l), c = g(c), u = v(u), f = g(f), d = g(d), p = g(p);
            var b = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (y()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { var t; return (0, r.default)(this, o), (t = n.apply(this, arguments)).anyBlockSelectedCache = null, t.needToSelectAll = !1, t.nativeInputSelected = !1, t.readyToBlockSelection = !1, t }
                return (0, i.default)(o, [{
                    key: "prepare",
                    value: function() {
                        var t = this;
                        this.selection = new p.default, d.default.add({
                            name: "CMD+A",
                            handler: function(e) {
                                var n = t.Editor,
                                    o = n.BlockManager;
                                if (n.ReadOnly.isEnabled) return e.preventDefault(), void t.selectAllBlocks();
                                o.currentBlock && t.handleCommandA(e)
                            },
                            on: this.Editor.UI.nodes.redactor
                        })
                    }
                }, { key: "toggleReadOnly", value: function(t) { p.default.get().removeAllRanges(), this.allBlocksSelected = !1 } }, {
                    key: "unSelectBlockByIndex",
                    value: function(t) {
                        var e = this.Editor.BlockManager;
                        (isNaN(t) ? e.currentBlock : e.getBlockByIndex(t)).selected = !1, this.clearCache()
                    }
                }, {
                    key: "clearSelection",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this.Editor,
                            o = n.BlockManager,
                            r = n.Caret,
                            i = n.RectangleSelection;
                        this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
                        var a = t && t instanceof KeyboardEvent,
                            s = a && u.isPrintableKey(t.keyCode);
                        if (this.anyBlockSelected && a && s && !p.default.isSelectionExists) {
                            var l = o.removeSelectedBlocks();
                            o.insertDefaultBlockAtIndex(l, !0), r.setToBlock(o.currentBlock), u.delay((function() {
                                var e = t.key;
                                r.insertContentAtCaretPosition(e.length > 1 ? "" : e)
                            }), 20)()
                        }
                        this.Editor.CrossBlockSelection.clear(t), this.anyBlockSelected && !i.isRectActivated() ? (e && this.selection.restore(), this.allBlocksSelected = !1) : this.Editor.RectangleSelection.clearSelection()
                    }
                }, {
                    key: "copySelectedBlocks",
                    value: function(t) {
                        var e = this;
                        t.preventDefault();
                        var n = f.default.make("div");
                        this.selectedBlocks.forEach((function(t) {
                            var o = (0, h.clean)(t.holder.innerHTML, e.sanitizerConfig),
                                r = f.default.make("p");
                            r.innerHTML = o, n.appendChild(r)
                        }));
                        var o = Array.from(n.childNodes).map((function(t) { return t.textContent })).join("\n\n"),
                            r = n.innerHTML;
                        return t.clipboardData.setData("text/plain", o), t.clipboardData.setData("text/html", r), Promise.all(this.selectedBlocks.map((function(t) { return t.save() }))).then((function(n) { try { t.clipboardData.setData(e.Editor.Paste.MIME_TYPE, JSON.stringify(n)) } catch (t) {} }))
                    }
                }, {
                    key: "selectBlockByIndex",
                    value: function(t) {
                        var e, n = this.Editor.BlockManager;
                        n.clearFocused(), e = isNaN(t) ? n.currentBlock : n.getBlockByIndex(t), this.selection.save(), p.default.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close()
                    }
                }, { key: "clearCache", value: function() { this.anyBlockSelectedCache = null } }, { key: "destroy", value: function() { d.default.remove(this.Editor.UI.nodes.redactor, "CMD+A") } }, {
                    key: "handleCommandA",
                    value: function(t) {
                        if (this.Editor.RectangleSelection.clearSelection(), !f.default.isNativeInput(t.target) || this.readyToBlockSelection) {
                            var e = this.Editor.BlockManager.getBlock(t.target).inputs;
                            e.length > 1 && !this.readyToBlockSelection ? this.readyToBlockSelection = !0 : 1 !== e.length || this.needToSelectAll ? this.needToSelectAll ? (t.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (t.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = !0) : this.needToSelectAll = !0
                        } else this.readyToBlockSelection = !0
                    }
                }, { key: "selectAllBlocks", value: function() { this.selection.save(), p.default.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close() } }, { key: "sanitizerConfig", get: function() { return { p: {}, h1: {}, h2: {}, h3: {}, h4: {}, h5: {}, h6: {}, ol: {}, ul: {}, li: {}, br: !0, img: { src: !0, width: !0, height: !0 }, a: { href: !0 }, b: {}, i: {}, u: {} } } }, { key: "allBlocksSelected", get: function() { return this.Editor.BlockManager.blocks.every((function(t) { return !0 === t.selected })) }, set: function(t) { this.Editor.BlockManager.blocks.forEach((function(e) { e.selected = t })), this.clearCache() } }, { key: "anyBlockSelected", get: function() { var t = this.Editor.BlockManager; return null === this.anyBlockSelectedCache && (this.anyBlockSelectedCache = t.blocks.some((function(t) { return !0 === t.selected }))), this.anyBlockSelectedCache } }, { key: "selectedBlocks", get: function() { return this.Editor.BlockManager.blocks.filter((function(t) { return t.selected })) } }]), o
            }(c.default);
            o.default = b, b.displayName = "BlockSelection", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(25), n(9), n(14), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d) {
            "use strict";
            var p = n(8),
                h = n(1);

            function v() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = h(r), i = h(i), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = p(d);
            var g = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (v()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { return (0, r.default)(this, o), n.apply(this, arguments) }
                return (0, i.default)(o, [{
                    key: "setToBlock",
                    value: function(t) {
                        var e, n = this,
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            i = this.Editor.BlockManager;
                        switch (o) {
                            case this.positions.START:
                                e = t.firstInput;
                                break;
                            case this.positions.END:
                                e = t.lastInput;
                                break;
                            default:
                                e = t.currentInput
                        }
                        if (e) {
                            var a = f.default.getDeepestNode(e, o === this.positions.END),
                                s = f.default.getContentLength(a);
                            switch (!0) {
                                case o === this.positions.START:
                                    r = 0;
                                    break;
                                case o === this.positions.END:
                                case r > s:
                                    r = s
                            }
                            d.delay((function() { n.set(a, r) }), 20)(), i.setCurrentBlockByChildNode(t.holder), i.currentBlock.currentInput = e
                        }
                    }
                }, {
                    key: "setToInput",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            o = this.Editor.BlockManager.currentBlock,
                            r = f.default.getDeepestNode(t);
                        switch (e) {
                            case this.positions.START:
                                this.set(r, 0);
                                break;
                            case this.positions.END:
                                this.set(r, f.default.getContentLength(r));
                                break;
                            default:
                                n && this.set(r, n)
                        }
                        o.currentInput = t
                    }
                }, {
                    key: "set",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = c.default.setCursor(t, e),
                            o = n.top,
                            r = n.bottom,
                            i = window,
                            a = i.innerHeight;
                        o < 0 && window.scrollBy(0, o), r > a && window.scrollBy(0, r - a)
                    }
                }, {
                    key: "setToTheLastBlock",
                    value: function() {
                        var t = this.Editor.BlockManager.lastBlock;
                        if (t)
                            if (t.tool.isDefault && t.isEmpty) this.setToBlock(t);
                            else {
                                var e = this.Editor.BlockManager.insertAtEnd();
                                this.setToBlock(e)
                            }
                    }
                }, {
                    key: "extractFragmentFromCaretPosition",
                    value: function() {
                        var t = c.default.get();
                        if (t.rangeCount) {
                            var e = t.getRangeAt(0),
                                n = this.Editor.BlockManager.currentBlock.currentInput;
                            if (e.deleteContents(), n) {
                                if (f.default.isNativeInput(n)) {
                                    var o = n,
                                        r = document.createDocumentFragment(),
                                        i = o.value.substring(0, o.selectionStart),
                                        a = o.value.substring(o.selectionStart);
                                    return r.textContent = a, o.value = i, r
                                }
                                var s = e.cloneRange();
                                return s.selectNodeContents(n), s.setStart(e.endContainer, e.endOffset), s.extractContents()
                            }
                        }
                    }
                }, {
                    key: "navigateNext",
                    value: function() {
                        var t = this.Editor.BlockManager,
                            e = t.currentBlock,
                            n = t.nextContentfulBlock,
                            o = e.nextInput,
                            r = this.isAtEnd,
                            i = n;
                        if (!i && !o) {
                            if (e.tool.isDefault || !r) return !1;
                            i = t.insertAtEnd()
                        }
                        return !!r && (o ? this.setToInput(o, this.positions.START) : this.setToBlock(i, this.positions.START), !0)
                    }
                }, {
                    key: "navigatePrevious",
                    value: function() {
                        var t = this.Editor.BlockManager,
                            e = t.currentBlock,
                            n = t.previousContentfulBlock;
                        if (!e) return !1;
                        var o = e.previousInput;
                        return !(!n && !o || !this.isAtStart || (o ? this.setToInput(o, this.positions.END) : this.setToBlock(n, this.positions.END), 0))
                    }
                }, {
                    key: "createShadow",
                    value: function(t) {
                        var e = document.createElement("span");
                        e.classList.add(o.CSS.shadowCaret), t.insertAdjacentElement("beforeend", e)
                    }
                }, {
                    key: "restoreCaret",
                    value: function(t) {
                        var e = t.querySelector(".".concat(o.CSS.shadowCaret));
                        e && ((new c.default).expandToTag(e), setTimeout((function() {
                            var t = document.createRange();
                            t.selectNode(e), t.extractContents()
                        }), 50))
                    }
                }, {
                    key: "insertContentAtCaretPosition",
                    value: function(t) {
                        var e = document.createDocumentFragment(),
                            n = document.createElement("div"),
                            o = c.default.get(),
                            r = c.default.range;
                        n.innerHTML = t, Array.from(n.childNodes).forEach((function(t) { return e.appendChild(t) })), 0 === e.childNodes.length && e.appendChild(new Text);
                        var i = e.lastChild;
                        r.deleteContents(), r.insertNode(e);
                        var a = document.createRange();
                        a.setStart(i, i.textContent.length), o.removeAllRanges(), o.addRange(a)
                    }
                }, { key: "getHigherLevelSiblings", value: function(t, e) { for (var n = t, o = []; n.parentNode && "true" !== n.parentNode.contentEditable;) n = n.parentNode; for (var r = "left" === e ? "previousSibling" : "nextSibling"; n[r];) n = n[r], o.push(n); return o } }, { key: "positions", get: function() { return { START: "start", END: "end", DEFAULT: "default" } } }, {
                    key: "isAtStart",
                    get: function() {
                        var t = c.default.get(),
                            e = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput),
                            n = t.focusNode;
                        if (f.default.isNativeInput(e)) return 0 === e.selectionEnd;
                        if (!t.anchorNode) return !1;
                        var o = n.textContent.search(/\S/); - 1 === o && (o = 0);
                        var r = t.focusOffset;
                        return n.nodeType !== Node.TEXT_NODE && n.childNodes.length && (n.childNodes[r] ? (n = n.childNodes[r], r = 0) : r = (n = n.childNodes[r - 1]).textContent.length), !(!f.default.isLineBreakTag(e) && !f.default.isEmpty(e) || !this.getHigherLevelSiblings(n, "left").every((function(t) {
                            var e = f.default.isLineBreakTag(t),
                                n = 1 === t.children.length && f.default.isLineBreakTag(t.children[0]),
                                o = e || n;
                            return f.default.isEmpty(t) && !o
                        })) || r !== o) || (null === e || n === e && r <= o)
                    }
                }, {
                    key: "isAtEnd",
                    get: function() {
                        var t = c.default.get(),
                            e = t.focusNode,
                            n = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
                        if (f.default.isNativeInput(n)) return n.selectionEnd === n.value.length;
                        if (!t.focusNode) return !1;
                        var o = t.focusOffset;
                        if (e.nodeType !== Node.TEXT_NODE && e.childNodes.length && (e.childNodes[o - 1] ? o = (e = e.childNodes[o - 1]).textContent.length : (e = e.childNodes[0], o = 0)), f.default.isLineBreakTag(n) || f.default.isEmpty(n)) { var r = this.getHigherLevelSiblings(e, "right"); if (r.every((function(t, e) { return e === r.length - 1 && f.default.isLineBreakTag(t) || f.default.isEmpty(t) && !f.default.isLineBreakTag(t) })) && o === e.textContent.length) return !0 }
                        var i = n.textContent.replace(/\s+$/, "");
                        return e === n && o >= i.length
                    }
                }], [{ key: "CSS", get: function() { return { shadowCaret: "cdx-shadow-caret" } } }]), o
            }(u.default);
            o.default = g, g.displayName = "Caret", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(25), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(8),
                v = n(1);

            function g() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = v(r), i = v(i), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), p = h(p);
            var y = function(t) {
                (0, l.default)(f, t);
                var e, n, o = (e = f, function() {
                    var t, n = (0, u.default)(e);
                    if (g()) {
                        var o = (0, u.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, c.default)(this, t)
                });

                function f() {
                    var t;
                    return (0, a.default)(this, f), (t = o.apply(this, arguments)).onMouseUp = function() { t.listeners.off(document, "mouseover", t.onMouseOver), t.listeners.off(document, "mouseup", t.onMouseUp) }, t.onMouseOver = function(e) {
                        var n = t.Editor,
                            o = n.BlockManager,
                            r = n.BlockSelection,
                            i = o.getBlockByChildNode(e.relatedTarget) || t.lastSelectedBlock,
                            a = o.getBlockByChildNode(e.target);
                        if (i && a && a !== i) {
                            if (i === t.firstSelectedBlock) return d.default.get().removeAllRanges(), i.selected = !0, a.selected = !0, void r.clearCache();
                            if (a === t.firstSelectedBlock) return i.selected = !1, a.selected = !1, void r.clearCache();
                            t.Editor.InlineToolbar.close(), t.toggleBlocksSelectedState(i, a), t.lastSelectedBlock = a
                        }
                    }, t
                }
                return (0, s.default)(f, [{
                    key: "prepare",
                    value: (n = (0, i.default)(r.default.mark((function t() {
                        var e = this;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.listeners.on(document, "mousedown", (function(t) { e.enableCrossBlockSelection(t) }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() { return n.apply(this, arguments) })
                }, {
                    key: "watchSelection",
                    value: function(t) {
                        if (t.button === p.mouseButtons.LEFT) {
                            var e = this.Editor.BlockManager;
                            this.firstSelectedBlock = e.getBlock(t.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp)
                        }
                    }
                }, {
                    key: "toggleBlockSelectedState",
                    value: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            e = this.Editor,
                            n = e.BlockManager,
                            o = e.BlockSelection;
                        this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = n.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), d.default.get().removeAllRanges());
                        var r = n.blocks.indexOf(this.lastSelectedBlock) + (t ? 1 : -1),
                            i = n.blocks[r];
                        i && (this.lastSelectedBlock.selected !== i.selected ? (i.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = i, this.Editor.InlineToolbar.close(), i.holder.scrollIntoView({ block: "nearest" }))
                    }
                }, {
                    key: "clear",
                    value: function(t) {
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.BlockSelection,
                            r = e.Caret,
                            i = n.blocks.indexOf(this.firstSelectedBlock),
                            a = n.blocks.indexOf(this.lastSelectedBlock);
                        if (o.anyBlockSelected && i > -1 && a > -1)
                            if (t && t instanceof KeyboardEvent) switch (t.keyCode) {
                                case p.keyCodes.DOWN:
                                case p.keyCodes.RIGHT:
                                    r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                    break;
                                case p.keyCodes.UP:
                                case p.keyCodes.LEFT:
                                    r.setToBlock(n.blocks[Math.min(i, a)], r.positions.START);
                                    break;
                                default:
                                    r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END)
                            } else r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                        this.firstSelectedBlock = this.lastSelectedBlock = null
                    }
                }, {
                    key: "enableCrossBlockSelection",
                    value: function(t) {
                        var e = this.Editor.UI;
                        d.default.isCollapsed || this.Editor.BlockSelection.clearSelection(t), e.nodes.redactor.contains(t.target) ? this.watchSelection(t) : this.Editor.BlockSelection.clearSelection(t)
                    }
                }, {
                    key: "toggleBlocksSelectedState",
                    value: function(t, e) {
                        for (var n = this.Editor, o = n.BlockManager, r = n.BlockSelection, i = o.blocks.indexOf(t), a = o.blocks.indexOf(e), s = t.selected !== e.selected, l = Math.min(i, a); l <= Math.max(i, a); l++) {
                            var c = o.blocks[l];
                            c !== this.firstSelectedBlock && c !== (s ? t : e) && (o.blocks[l].selected = !o.blocks[l].selected, r.clearCache())
                        }
                    }
                }, { key: "isCrossBlockSelectionStarted", get: function() { return !!this.firstSelectedBlock && !!this.lastSelectedBlock } }]), f
            }(f.default);
            o.default = y, y.displayName = "CrossBlockSelection", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(25), n(9)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d) {
            "use strict";
            var p = n(1);

            function h() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = p(f);
            var v = function(t) {
                (0, l.default)(d, t);
                var e, n, o = (e = d, function() {
                    var t, n = (0, u.default)(e);
                    if (h()) {
                        var o = (0, u.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, c.default)(this, t)
                });

                function d() { var t; return (0, a.default)(this, d), (t = o.apply(this, arguments)).isStartedAtEditor = !1, t }
                return (0, s.default)(d, [{ key: "toggleReadOnly", value: function(t) { t ? this.disableModuleBindings() : this.enableModuleBindings() } }, {
                    key: "enableModuleBindings",
                    value: function() {
                        var t = this,
                            e = this.Editor.UI;
                        this.readOnlyMutableListeners.on(e.nodes.holder, "drop", function() {
                            var e = (0, i.default)(r.default.mark((function e(n) {
                                return r.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.processDrop(n);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(), !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", (function() { t.processDragStart() })), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (function(e) { t.processDragOver(e) }), !0)
                    }
                }, { key: "disableModuleBindings", value: function() { this.readOnlyMutableListeners.clearAll() } }, {
                    key: "processDrop",
                    value: (n = (0, i.default)(r.default.mark((function t(e) {
                        var n, o, i, a, s, l;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = this.Editor, o = n.BlockManager, i = n.Caret, a = n.Paste, e.preventDefault(), o.blocks.forEach((function(t) { t.dropTarget = !1 })), f.default.isAtEditor && !f.default.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1, (s = o.setCurrentBlockByChildNode(e.target)) ? this.Editor.Caret.setToBlock(s, i.positions.END) : (l = o.setCurrentBlockByChildNode(o.lastBlock.holder), this.Editor.Caret.setToBlock(l, i.positions.END)), t.next = 9, a.processDataTransfer(e.dataTransfer, !0);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) { return n.apply(this, arguments) })
                }, { key: "processDragStart", value: function() { f.default.isAtEditor && !f.default.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close() } }, { key: "processDragOver", value: function(t) { t.preventDefault() } }]), d
            }((d = p(d)).default);
            o.default = v, v.displayName = "DragNDrop", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u) {
            "use strict";
            var f = n(8),
                d = n(1);

            function p() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);
            var h = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (p()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { var t; return (0, r.default)(this, o), (t = n.apply(this, arguments)).disabled = !1, t }
                return (0, i.default)(o, [{ key: "enable", value: function() { this.disabled = !1 } }, { key: "disable", value: function() { this.disabled = !0 } }, { key: "onChange", value: function(t) {!this.disabled && u.isFunction(this.config.onChange) && this.config.onChange(this.Editor.API.methods, t) } }]), o
            }(c.default);
            o.default = h, h.displayName = "ModificationsObserver", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(42), n(30), n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(7), n(67)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p, h, v, g) {
            "use strict";
            var y = n(8),
                b = n(1);

            function m() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = b(r), i = b(i), a = b(a), s = b(s), l = b(l), c = b(c), u = b(u), f = b(f), d = b(d), p = b(p), h = b(h), v = y(v);
            var k = function(t) {
                (0, u.default)(T, t);
                var e, n, o, p, y, b, k, x, w, S = (e = T, function() {
                    var t, n = (0, d.default)(e);
                    if (m()) {
                        var o = (0, d.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, f.default)(this, t)
                });

                function T() {
                    var t;
                    return (0, l.default)(this, T), (t = S.apply(this, arguments)).MIME_TYPE = "application/x-editor-js", t.toolsTags = {}, t.tagsByTool = {}, t.toolsPatterns = [], t.toolsFiles = {}, t.exceptionList = [], t.processTool = function(e) {
                        try {
                            var n = e.create({}, {}, !1);
                            if (!1 === e.pasteConfig) return void t.exceptionList.push(e.name);
                            if (!v.isFunction(n.onPaste)) return;
                            t.getTagsConfig(e), t.getFilesConfig(e), t.getPatternsConfig(e)
                        } catch (t) { v.log("Paste handling for «".concat(e.name, "» Tool hasn't been set up because of the error"), "warn", t) }
                    }, t.handlePasteEvent = function() {
                        var e = (0, s.default)(a.default.mark((function e(n) {
                            var o, r, i;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = t.Editor, r = o.BlockManager, i = o.Toolbar, r.currentBlock && (!t.isNativeBehaviour(n.target) || n.clipboardData.types.includes("Files"))) { e.next = 3; break }
                                        return e.abrupt("return");
                                    case 3:
                                        if (!r.currentBlock || !t.exceptionList.includes(r.currentBlock.name)) { e.next = 5; break }
                                        return e.abrupt("return");
                                    case 5:
                                        n.preventDefault(), t.processDataTransfer(n.clipboardData), r.clearFocused(), i.close();
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) { return e.apply(this, arguments) }
                    }(), t
                }
                return (0, c.default)(T, [{
                    key: "prepare",
                    value: (w = (0, s.default)(a.default.mark((function t() {
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.processTools();
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() { return w.apply(this, arguments) })
                }, { key: "toggleReadOnly", value: function(t) { t ? this.unsetCallback() : this.setCallback() } }, {
                    key: "processDataTransfer",
                    value: (x = (0, s.default)(a.default.mark((function t(e) {
                        var n, o, r, i, s, l, c, u, f, d = arguments;
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = d.length > 1 && void 0 !== d[1] && d[1], o = this.Editor.Tools, !((r = e.types).includes ? r.includes("Files") : r.contains("Files"))) { t.next = 8; break }
                                    return t.next = 7, this.processFiles(e.files);
                                case 7:
                                    return t.abrupt("return");
                                case 8:
                                    if (i = e.getData(this.MIME_TYPE), s = e.getData("text/plain"), l = e.getData("text/html"), !i) { t.next = 19; break }
                                    return t.prev = 12, this.insertEditorJSData(JSON.parse(i)), t.abrupt("return");
                                case 17:
                                    t.prev = 17, t.t0 = t.catch(12);
                                case 19:
                                    if (n && s.trim() && l.trim() && (l = "<p>" + (l.trim() ? l : s) + "</p>"), c = Object.keys(this.toolsTags).reduce((function(t, e) { return t[e.toLowerCase()] = !0, t }), {}), u = Object.assign({}, c, o.getAllInlineToolsSanitizeConfig(), { br: {} }), (f = (0, g.clean)(l, u)).trim() && f.trim() !== s && h.default.isHTMLString(f)) { t.next = 28; break }
                                    return t.next = 26, this.processText(s);
                                case 26:
                                    t.next = 30;
                                    break;
                                case 28:
                                    return t.next = 30, this.processText(f, !0);
                                case 30:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [12, 17]
                        ])
                    }))), function(t) { return x.apply(this, arguments) })
                }, {
                    key: "processText",
                    value: (k = (0, s.default)(a.default.mark((function t(e) {
                        var n, o, r, i, l, c, u, f = this,
                            d = arguments;
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = d.length > 1 && void 0 !== d[1] && d[1], o = this.Editor, r = o.Caret, i = o.BlockManager, (l = n ? this.processHTML(e) : this.processPlain(e)).length) { t.next = 5; break }
                                    return t.abrupt("return");
                                case 5:
                                    if (1 !== l.length) { t.next = 8; break }
                                    return l[0].isBlock ? this.processSingleBlock(l.pop()) : this.processInlinePaste(l.pop()), t.abrupt("return");
                                case 8:
                                    c = i.currentBlock && i.currentBlock.tool.isDefault, u = c && i.currentBlock.isEmpty, l.map(function() {
                                        var t = (0, s.default)(a.default.mark((function t(e, n) {
                                            return a.default.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.abrupt("return", f.insertBlock(e, 0 === n && u));
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function(e, n) { return t.apply(this, arguments) }
                                    }()), i.currentBlock && r.setToBlock(i.currentBlock, r.positions.END);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) { return k.apply(this, arguments) })
                }, { key: "setCallback", value: function() { this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent) } }, { key: "unsetCallback", value: function() { this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent) } }, {
                    key: "processTools",
                    value: function() {
                        var t = this.Editor.Tools.blockTools;
                        Array.from(t.values()).forEach(this.processTool)
                    }
                }, {
                    key: "getTagsConfig",
                    value: function(t) {
                        var e = this,
                            n = t.pasteConfig.tags || [];
                        n.forEach((function(n) { Object.prototype.hasOwnProperty.call(e.toolsTags, n) ? v.log("Paste handler for «".concat(t.name, "» Tool on «").concat(n, "» tag is skipped ") + "because it is already used by «".concat(e.toolsTags[n].tool.name, "» Tool."), "warn") : e.toolsTags[n.toUpperCase()] = { tool: t } })), this.tagsByTool[t.name] = n.map((function(t) { return t.toUpperCase() }))
                    }
                }, {
                    key: "getFilesConfig",
                    value: function(t) {
                        var e = t.pasteConfig.files,
                            n = void 0 === e ? {} : e,
                            o = n.extensions,
                            r = n.mimeTypes;
                        (o || r) && (o && !Array.isArray(o) && (v.log("«extensions» property of the onDrop config for «".concat(t.name, "» Tool should be an array")), o = []), r && !Array.isArray(r) && (v.log("«mimeTypes» property of the onDrop config for «".concat(t.name, "» Tool should be an array")), r = []), r && (r = r.filter((function(e) { return !!v.isValidMimeType(e) || (v.log("MIME type value «".concat(e, "» for the «").concat(t.name, "» Tool is not a valid MIME type"), "warn"), !1) }))), this.toolsFiles[t.name] = { extensions: o || [], mimeTypes: r || [] })
                    }
                }, {
                    key: "getPatternsConfig",
                    value: function(t) {
                        var e = this;
                        t.pasteConfig.patterns && !v.isEmpty(t.pasteConfig.patterns) && Object.entries(t.pasteConfig.patterns).forEach((function(n) {
                            var o = (0, i.default)(n, 2),
                                r = o[0],
                                a = o[1];
                            a instanceof RegExp || v.log("Pattern ".concat(a, " for «").concat(t.name, "» Tool is skipped because it should be a Regexp instance."), "warn"), e.toolsPatterns.push({ key: r, pattern: a, tool: t })
                        }))
                    }
                }, { key: "isNativeBehaviour", value: function(t) { return h.default.isNativeInput(t) } }, {
                    key: "processFiles",
                    value: (b = (0, s.default)(a.default.mark((function t(e) {
                        var n, o, r, i, s = this;
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = this.Editor.BlockManager, t.next = 3, Promise.all(Array.from(e).map((function(t) { return s.processFile(t) })));
                                case 3:
                                    o = (o = t.sent).filter((function(t) { return !!t })), r = n.currentBlock.tool.isDefault, i = r && n.currentBlock.isEmpty, o.forEach((function(t, e) { n.paste(t.type, t.event, 0 === e && i) }));
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) { return b.apply(this, arguments) })
                }, {
                    key: "processFile",
                    value: (y = (0, s.default)(a.default.mark((function t(e) {
                        var n, o, r, s, l;
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = v.getFileExtension(e), o = Object.entries(this.toolsFiles).find((function(t) {
                                            var o = (0, i.default)(t, 2),
                                                r = (o[0], o[1]),
                                                a = r.mimeTypes,
                                                s = r.extensions,
                                                l = e.type.split("/"),
                                                c = (0, i.default)(l, 2),
                                                u = c[0],
                                                f = c[1],
                                                d = s.find((function(t) { return t.toLowerCase() === n.toLowerCase() })),
                                                p = a.find((function(t) {
                                                    var e = t.split("/"),
                                                        n = (0, i.default)(e, 2),
                                                        o = n[0],
                                                        r = n[1];
                                                    return o === u && (r === f || "*" === r)
                                                }));
                                            return !!d || !!p
                                        }))) { t.next = 4; break }
                                    return t.abrupt("return");
                                case 4:
                                    return r = (0, i.default)(o, 1), s = r[0], l = this.composePasteEvent("file", { file: e }), t.abrupt("return", { event: l, type: s });
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) { return y.apply(this, arguments) })
                }, {
                    key: "processHTML",
                    value: function(t) {
                        var e = this,
                            n = this.Editor.Tools,
                            o = h.default.make("DIV");
                        return o.innerHTML = t, this.getNodes(o).map((function(t) {
                            var o, r = n.defaultTool,
                                i = !1;
                            switch (t.nodeType) {
                                case Node.DOCUMENT_FRAGMENT_NODE:
                                    (o = h.default.make("div")).appendChild(t);
                                    break;
                                case Node.ELEMENT_NODE:
                                    o = t, i = !0, e.toolsTags[o.tagName] && (r = e.toolsTags[o.tagName].tool)
                            }
                            var a = r.pasteConfig.tags.reduce((function(t, e) { return t[e.toLowerCase()] = {}, t }), {}),
                                s = Object.assign({}, a, r.baseSanitizeConfig);
                            o.innerHTML = (0, g.clean)(o.innerHTML, s);
                            var l = e.composePasteEvent("tag", { data: o });
                            return { content: o, isBlock: i, tool: r.name, event: l }
                        })).filter((function(t) { return !h.default.isNodeEmpty(t.content) || h.default.isSingleTag(t.content) }))
                    }
                }, {
                    key: "processPlain",
                    value: function(t) {
                        var e = this,
                            n = this.config.defaultBlock;
                        if (!t) return [];
                        var o = n;
                        return t.split(/\r?\n/).filter((function(t) { return t.trim() })).map((function(t) {
                            var n = h.default.make("div");
                            n.textContent = t;
                            var r = e.composePasteEvent("tag", { data: n });
                            return { content: n, tool: o, isBlock: !1, event: r }
                        }))
                    }
                }, {
                    key: "processSingleBlock",
                    value: (p = (0, s.default)(a.default.mark((function t(e) {
                        var n, o, r, i;
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = this.Editor, o = n.Caret, r = n.BlockManager, (i = r.currentBlock) && e.tool === i.name && h.default.containsOnlyInlineElements(e.content.innerHTML)) { t.next = 5; break }
                                    return this.insertBlock(e, (null == i ? void 0 : i.tool.isDefault) && i.isEmpty), t.abrupt("return");
                                case 5:
                                    o.insertContentAtCaretPosition(e.content.innerHTML);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) { return p.apply(this, arguments) })
                }, {
                    key: "processInlinePaste",
                    value: (o = (0, s.default)(a.default.mark((function t(e) {
                        var n, o, r, i, s, l, c, u;
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = this.Editor, o = n.BlockManager, r = n.Caret, i = e.content, !(o.currentBlock && o.currentBlock.tool.isDefault && i.textContent.length < T.PATTERN_PROCESSING_MAX_LENGTH)) { t.next = 12; break }
                                    return t.next = 6, this.processPattern(i.textContent);
                                case 6:
                                    if (!(s = t.sent)) { t.next = 12; break }
                                    return l = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty, c = o.paste(s.tool, s.event, l), r.setToBlock(c, r.positions.END), t.abrupt("return");
                                case 12:
                                    o.currentBlock && o.currentBlock.currentInput ? (u = o.currentBlock.tool.baseSanitizeConfig, document.execCommand("insertHTML", !1, (0, g.clean)(i.innerHTML, u))) : this.insertBlock(e);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) { return o.apply(this, arguments) })
                }, {
                    key: "processPattern",
                    value: (n = (0, s.default)(a.default.mark((function t(e) {
                        var n, o;
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = this.toolsPatterns.find((function(t) { var n = t.pattern.exec(e); return !!n && e === n.shift() }))) { t.next = 3; break }
                                    return t.abrupt("return");
                                case 3:
                                    return o = this.composePasteEvent("pattern", { key: n.key, data: e }), t.abrupt("return", { event: o, tool: n.tool.name });
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) { return n.apply(this, arguments) })
                }, {
                    key: "insertBlock",
                    value: function(t) {
                        var e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            o = this.Editor,
                            r = o.BlockManager,
                            i = o.Caret,
                            a = r.currentBlock;
                        if (n && a && a.isEmpty) return e = r.paste(t.tool, t.event, !0), void i.setToBlock(e, i.positions.END);
                        e = r.paste(t.tool, t.event), i.setToBlock(e, i.positions.END)
                    }
                }, {
                    key: "insertEditorJSData",
                    value: function(t) {
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.Caret,
                            r = e.Tools;
                        (0, g.sanitizeBlocks)(t, (function(t) { return r.blockTools.get(t).sanitizeConfig })).forEach((function(t, e) {
                            var r = t.tool,
                                i = t.data,
                                a = !1;
                            0 === e && (a = n.currentBlock && n.currentBlock.tool.isDefault && n.currentBlock.isEmpty);
                            var s = n.insert({ tool: r, data: i, replace: a });
                            o.setToBlock(s, o.positions.END)
                        }))
                    }
                }, {
                    key: "processElementNode",
                    value: function(t, e, n) {
                        var o = Object.keys(this.toolsTags),
                            i = t,
                            a = (this.toolsTags[i.tagName] || {}).tool,
                            s = this.tagsByTool[null == a ? void 0 : a.name] || [],
                            l = o.includes(i.tagName),
                            c = h.default.blockElements.includes(i.tagName.toLowerCase()),
                            u = Array.from(i.children).some((function(t) { var e = t.tagName; return o.includes(e) && !s.includes(e) })),
                            f = Array.from(i.children).some((function(t) { var e = t.tagName; return h.default.blockElements.includes(e.toLowerCase()) }));
                        return c || l || u ? l && !u || c && !f && !u ? [].concat((0, r.default)(e), [n, i]) : void 0 : (n.appendChild(i), [].concat((0, r.default)(e), [n]))
                    }
                }, {
                    key: "getNodes",
                    value: function(t) {
                        var e, n = this;
                        return Array.from(t.childNodes).reduce((function t(o, i) {
                            if (h.default.isEmpty(i) && !h.default.isSingleTag(i)) return o;
                            var a = o[o.length - 1],
                                s = new DocumentFragment;
                            switch (a && h.default.isFragment(a) && (s = o.pop()), i.nodeType) {
                                case Node.ELEMENT_NODE:
                                    if (e = n.processElementNode(i, o, s)) return e;
                                    break;
                                case Node.TEXT_NODE:
                                    return s.appendChild(i), [].concat((0, r.default)(o), [s]);
                                default:
                                    return [].concat((0, r.default)(o), [s])
                            }
                            return [].concat((0, r.default)(o), (0, r.default)(Array.from(i.childNodes).reduce(t, [])))
                        }), [])
                    }
                }, { key: "composePasteEvent", value: function(t, e) { return new CustomEvent(t, { detail: e }) } }]), T
            }(p.default);
            o.default = k, k.displayName = "Paste", k.PATTERN_PROCESSING_MAX_LENGTH = 450, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(30), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(151)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(1);

            function v() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = h(r), i = h(i), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f);
            var g = function(t) {
                (0, c.default)(h, t);
                var e, n, o, d = (e = h, function() {
                    var t, n = (0, f.default)(e);
                    if (v()) {
                        var o = (0, f.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, u.default)(this, t)
                });

                function h() { var t; return (0, s.default)(this, h), (t = d.apply(this, arguments)).toolsDontSupportReadOnly = [], t.readOnlyEnabled = !1, t }
                return (0, l.default)(h, [{
                    key: "prepare",
                    value: (o = (0, a.default)(r.default.mark((function t() {
                        var e, n, o;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e = this.Editor.Tools, n = e.blockTools, o = [], Array.from(n.entries()).forEach((function(t) {
                                        var e = (0, i.default)(t, 2),
                                            n = e[0];
                                        e[1].isReadOnlySupported || o.push(n)
                                    })), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() { return o.apply(this, arguments) })
                }, {
                    key: "toggle",
                    value: (n = (0, a.default)(r.default.mark((function t() {
                        var e, n, o, i, a = arguments;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    (e = a.length > 0 && void 0 !== a[0] ? a[0] : !this.readOnlyEnabled) && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError(), n = this.readOnlyEnabled, this.readOnlyEnabled = e, t.t0 = r.default.keys(this.Editor);
                                case 5:
                                    if ((t.t1 = t.t0()).done) { t.next = 12; break }
                                    if (o = t.t1.value, this.Editor[o].toggleReadOnly) { t.next = 9; break }
                                    return t.abrupt("continue", 5);
                                case 9:
                                    this.Editor[o].toggleReadOnly(e), t.next = 5;
                                    break;
                                case 12:
                                    if (n !== e) { t.next = 14; break }
                                    return t.abrupt("return", this.readOnlyEnabled);
                                case 14:
                                    return t.next = 16, this.Editor.Saver.save();
                                case 16:
                                    return i = t.sent, t.next = 19, this.Editor.BlockManager.clear();
                                case 19:
                                    return t.next = 21, this.Editor.Renderer.render(i.blocks);
                                case 21:
                                    return t.abrupt("return", this.readOnlyEnabled);
                                case 22:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() { return n.apply(this, arguments) })
                }, { key: "throwCriticalError", value: function() { throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", "), " don't support read-only mode.")) } }, { key: "isEnabled", get: function() { return this.readOnlyEnabled } }]), h
            }((d = h(d)).default);
            o.default = g, g.displayName = "ReadOnly", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(25), n(61), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(8),
                v = n(1);

            function g(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function(t, e) { if (t) { if ("string" == typeof t) return y(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0 } }(t))) {
                        var e = 0,
                            n = function() {};
                        return { s: n, n: function() { return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] } }, e: function(t) { throw t }, f: n }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, r, i = !0,
                    a = !1;
                return { s: function() { o = t[Symbol.iterator]() }, n: function() { var t = o.next(); return i = t.done, t }, e: function(t) { a = !0, r = t }, f: function() { try { i || null == o.return || o.return() } finally { if (a) throw r } } }
            }

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o
            }

            function b() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = v(r), i = v(i), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), p = h(p);
            var m = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (b()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { var t; return (0, r.default)(this, o), (t = n.apply(this, arguments)).isRectSelectionActivated = !1, t.SCROLL_SPEED = 3, t.HEIGHT_OF_SCROLL_ZONE = 40, t.BOTTOM_SCROLL_ZONE = 1, t.TOP_SCROLL_ZONE = 2, t.MAIN_MOUSE_BUTTON = 0, t.mousedown = !1, t.isScrolling = !1, t.inScrollZone = null, t.startX = 0, t.startY = 0, t.mouseX = 0, t.mouseY = 0, t.stackOfSelected = [], t.listenerIds = [], t }
                return (0, i.default)(o, [{ key: "prepare", value: function() { this.enableModuleBindings() } }, {
                    key: "startSelection",
                    value: function(t, e) {
                        var n = document.elementFromPoint(t - window.pageXOffset, e - window.pageYOffset);
                        n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar)) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
                        var o = [".".concat(d.default.CSS.content), ".".concat(this.Editor.Toolbar.CSS.toolbar), ".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)],
                            r = n.closest("." + this.Editor.UI.CSS.editorWrapper),
                            i = o.some((function(t) { return !!n.closest(t) }));
                        r && !i && (this.mousedown = !0, this.startX = t, this.startY = e)
                    }
                }, { key: "endSelection", value: function() { this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none" } }, { key: "isRectActivated", value: function() { return this.isRectSelectionActivated } }, { key: "clearSelection", value: function() { this.isRectSelectionActivated = !1 } }, {
                    key: "enableModuleBindings",
                    value: function() {
                        var t = this,
                            e = this.genHTML().container;
                        this.listeners.on(e, "mousedown", (function(e) { t.processMouseDown(e) }), !1), this.listeners.on(document.body, "mousemove", p.throttle((function(e) { t.processMouseMove(e) }), 10), { passive: !0 }), this.listeners.on(document.body, "mouseleave", (function() { t.processMouseLeave() })), this.listeners.on(window, "scroll", p.throttle((function(e) { t.processScroll(e) }), 10), { passive: !0 }), this.listeners.on(document.body, "mouseup", (function() { t.processMouseUp() }), !1)
                    }
                }, { key: "processMouseDown", value: function(t) { t.button === this.MAIN_MOUSE_BUTTON && (null !== t.target.closest(u.default.allInputsSelector) || this.startSelection(t.pageX, t.pageY)) } }, { key: "processMouseMove", value: function(t) { this.changingRectangle(t), this.scrollByZones(t.clientY) } }, { key: "processMouseLeave", value: function() { this.clearSelection(), this.endSelection() } }, { key: "processScroll", value: function(t) { this.changingRectangle(t) } }, { key: "processMouseUp", value: function() { this.clearSelection(), this.endSelection() } }, { key: "scrollByZones", value: function(t) { this.inScrollZone = null, t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0) : this.isScrolling = !1 } }, {
                    key: "genHTML",
                    value: function() {
                        var t = this.Editor.UI,
                            e = t.nodes.holder.querySelector("." + t.CSS.editorWrapper),
                            n = u.default.make("div", o.CSS.overlay, {}),
                            r = u.default.make("div", o.CSS.overlayContainer, {}),
                            i = u.default.make("div", o.CSS.rect, {});
                        return r.appendChild(i), n.appendChild(r), e.appendChild(n), this.overlayRectangle = i, { container: e, overlay: n }
                    }
                }, {
                    key: "scrollVertical",
                    value: function(t) {
                        var e = this;
                        if (this.inScrollZone && this.mousedown) {
                            var n = window.pageYOffset;
                            window.scrollBy(0, t), this.mouseY += window.pageYOffset - n, setTimeout((function() { e.scrollVertical(t) }), 0)
                        }
                    }
                }, {
                    key: "changingRectangle",
                    value: function(t) {
                        if (this.mousedown) {
                            void 0 !== t.pageY && (this.mouseX = t.pageX, this.mouseY = t.pageY);
                            var e = this.genInfoForMouseSelection(),
                                n = e.rightPos,
                                o = e.leftPos,
                                r = e.index,
                                i = this.startX > n && this.mouseX > n,
                                a = this.startX < o && this.mouseX < o;
                            this.rectCrossesBlocks = !(i || a), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), void 0 !== r && (this.trySelectNextBlock(r), this.inverseSelection(), f.default.get().removeAllRanges())
                        }
                    }
                }, { key: "shrinkRectangleToPoint", value: function() { this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px") } }, {
                    key: "inverseSelection",
                    value: function() {
                        var t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
                        if (this.rectCrossesBlocks && !t) {
                            var e, n = g(this.stackOfSelected);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var o = e.value;
                                    this.Editor.BlockSelection.selectBlockByIndex(o)
                                }
                            } catch (t) { n.e(t) } finally { n.f() }
                        }
                        if (!this.rectCrossesBlocks && t) {
                            var r, i = g(this.stackOfSelected);
                            try {
                                for (i.s(); !(r = i.n()).done;) {
                                    var a = r.value;
                                    this.Editor.BlockSelection.unSelectBlockByIndex(a)
                                }
                            } catch (t) { i.e(t) } finally { i.f() }
                        }
                    }
                }, { key: "updateRectangleSize", value: function() { this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px")) } }, {
                    key: "genInfoForMouseSelection",
                    value: function() {
                        var t, e = document.body.offsetWidth / 2,
                            n = this.mouseY - window.pageYOffset,
                            o = document.elementFromPoint(e, n),
                            r = this.Editor.BlockManager.getBlockByChildNode(o);
                        void 0 !== r && (t = this.Editor.BlockManager.blocks.findIndex((function(t) { return t.holder === r.holder })));
                        var i = this.Editor.BlockManager.lastBlock.holder.querySelector("." + d.default.CSS.content),
                            a = Number.parseInt(window.getComputedStyle(i).width, 10) / 2;
                        return { index: t, leftPos: e - a, rightPos: e + a }
                    }
                }, { key: "addBlockInSelection", value: function(t) { this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(t), this.stackOfSelected.push(t) } }, {
                    key: "trySelectNextBlock",
                    value: function(t) {
                        var e = this,
                            n = this.stackOfSelected[this.stackOfSelected.length - 1] === t,
                            o = this.stackOfSelected.length;
                        if (!n) {
                            var r = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0,
                                i = 0;
                            o > 1 && (i = r ? 1 : -1);
                            var a = t > this.stackOfSelected[o - 1] && 1 === i,
                                s = t < this.stackOfSelected[o - 1] && -1 === i,
                                l = !(a || s || 0 === i);
                            if (l || !(t > this.stackOfSelected[o - 1] || void 0 === this.stackOfSelected[o - 1])) {
                                if (!l && t < this.stackOfSelected[o - 1])
                                    for (var c = this.stackOfSelected[o - 1] - 1; c >= t; c--) this.addBlockInSelection(c);
                                else if (l) { var u, f = o - 1; for (u = t > this.stackOfSelected[o - 1] ? function() { return t > e.stackOfSelected[f] } : function() { return t < e.stackOfSelected[f] }; u();) this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]), this.stackOfSelected.pop(), f-- }
                            } else
                                for (var d = this.stackOfSelected[o - 1] + 1 || t; d <= t; d++) this.addBlockInSelection(d)
                        }
                    }
                }], [{ key: "CSS", get: function() { return { overlay: "codex-editor-overlay", overlayContainer: "codex-editor-overlay__container", rect: "codex-editor-overlay__rectangle", topScrollZone: "codex-editor-overlay__scroll-zone--top", bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom" } } }]), o
            }(c.default);
            o.default = m, m.displayName = "RectangleSelection", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d) {
            "use strict";
            var p = n(8),
                h = n(1);

            function v() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = h(r), i = h(i), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = p(d);
            var g = function(t) {
                (0, l.default)(p, t);
                var e, n, o, f = (e = p, function() {
                    var t, n = (0, u.default)(e);
                    if (v()) {
                        var o = (0, u.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, c.default)(this, t)
                });

                function p() { return (0, a.default)(this, p), f.apply(this, arguments) }
                return (0, s.default)(p, [{
                    key: "render",
                    value: (o = (0, i.default)(r.default.mark((function t(e) {
                        var n, o, i = this;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.map((function(t) { return { function: function() { return i.insertBlock(t) } } })), this.Editor.ModificationsObserver.disable(), t.next = 4, d.sequence(n);
                                case 4:
                                    return o = t.sent, this.Editor.ModificationsObserver.enable(), this.Editor.UI.checkEmptiness(), t.abrupt("return", o);
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) { return o.apply(this, arguments) })
                }, {
                    key: "insertBlock",
                    value: (n = (0, i.default)(r.default.mark((function t(e) {
                        var n, o, i, a, s, l, c, u, f, p, h;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (o = this.Editor, i = o.Tools, a = o.BlockManager, s = e.type, l = e.data, c = e.tunes, u = e.id, !i.available.has(s)) { t.next = 13; break }
                                    t.prev = 3, a.insert({ id: u, tool: s, data: l, tunes: c }), t.next = 11;
                                    break;
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(3), d.log("Block «".concat(s, "» skipped because of plugins error"), "warn", l), Error(t.t0);
                                case 11:
                                    t.next = 18;
                                    break;
                                case 13:
                                    f = { savedData: { id: u, type: s, data: l }, title: s }, i.unavailable.has(s) && (p = i.unavailable.get(s).toolbox, h = null === (n = p[0]) || void 0 === n ? void 0 : n.title, f.title = h || f.title), a.insert({ id: u, tool: i.stubTool, data: f }).stretched = !0, d.log("Tool «".concat(s, "» is not found. Check 'tools' property at your initial Editor.js config."), "warn");
                                case 18:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [3, 7]
                        ])
                    }))), function(t) { return n.apply(this, arguments) })
                }]), p
            }(f.default);
            o.default = g, g.displayName = "Renderer", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(7), n(67)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(8),
                v = n(1);

            function g() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = v(r), i = v(i), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = h(d);
            var y = function(t) {
                (0, l.default)(h, t);
                var e, n, o, f = (e = h, function() {
                    var t, n = (0, u.default)(e);
                    if (g()) {
                        var o = (0, u.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, c.default)(this, t)
                });

                function h() { return (0, a.default)(this, h), f.apply(this, arguments) }
                return (0, s.default)(h, [{
                    key: "save",
                    value: (o = (0, i.default)(r.default.mark((function t() {
                        var e, n, o, i, a, s, l, c = this;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = this.Editor, n = e.BlockManager, o = e.Tools, i = n.blocks, a = [], t.prev = 2, i.forEach((function(t) { a.push(c.getSavedData(t)) })), t.next = 6, Promise.all(a);
                                case 6:
                                    return s = t.sent, t.next = 9, (0, p.sanitizeBlocks)(s, (function(t) { return o.blockTools.get(t).sanitizeConfig }));
                                case 9:
                                    return l = t.sent, t.abrupt("return", this.makeOutput(l));
                                case 13:
                                    t.prev = 13, t.t0 = t.catch(2), d.logLabeled("Saving failed due to the Error %o", "error", t.t0);
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [2, 13]
                        ])
                    }))), function() { return o.apply(this, arguments) })
                }, {
                    key: "getSavedData",
                    value: (n = (0, i.default)(r.default.mark((function t(e) {
                        var n, o;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.save();
                                case 2:
                                    if (n = t.sent, t.t0 = n, !t.t0) { t.next = 8; break }
                                    return t.next = 7, e.validate(n.data);
                                case 7:
                                    t.t0 = t.sent;
                                case 8:
                                    return o = t.t0, t.abrupt("return", Object.assign(Object.assign({}, n), { isValid: o }));
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), function(t) { return n.apply(this, arguments) })
                }, {
                    key: "makeOutput",
                    value: function(t) {
                        var e = this,
                            n = 0,
                            o = [];
                        return d.log("[Editor.js saving]:", "groupCollapsed"), t.forEach((function(t) {
                            var r = t.id,
                                i = t.tool,
                                a = t.data,
                                s = t.tunes,
                                l = t.time,
                                c = t.isValid;
                            if (n += l, d.log("".concat(i.charAt(0).toUpperCase() + i.slice(1)), "group"), !c) return d.log("Block «".concat(i, "» skipped because saved data is invalid")), void d.log(void 0, "groupEnd");
                            if (d.log(a), d.log(void 0, "groupEnd"), i !== e.Editor.Tools.stubTool) {
                                var u = Object.assign({ id: r, type: i, data: a }, !d.isEmpty(s) && { tunes: s });
                                o.push(u)
                            } else o.push(a)
                        })), d.log("Total", "log", n), d.log(void 0, "groupEnd"), { time: +new Date, blocks: o, version: "2.25.0" }
                    }
                }]), h
            }(f.default);
            o.default = y, y.displayName = "Saver", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(62), n(7), n(25)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(8),
                g = n(1);

            function y() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = g(r), i = g(i), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = g(d), p = v(p), h = g(h);
            var b = function(t) {
                (0, s.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, c.default)(e);
                    if (y()) {
                        var o = (0, c.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, l.default)(this, t)
                });

                function o() { var t; return (0, i.default)(this, o), (t = n.apply(this, arguments)).buttons = [], t.flipper = null, t.selection = new h.default, t }
                return (0, a.default)(o, [{ key: "make", value: function() { this.nodes.wrapper = f.default.make("div", this.CSS.wrapper), this.nodes.toolSettings = f.default.make("div", this.CSS.toolSettings), this.nodes.defaultSettings = f.default.make("div", this.CSS.defaultSettings), f.default.append(this.nodes.wrapper, [this.nodes.toolSettings, this.nodes.defaultSettings]), this.enableFlipper() } }, { key: "destroy", value: function() { this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes() } }, {
                    key: "open",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Editor.BlockManager.currentBlock;
                        this.nodes.wrapper.classList.add(this.CSS.wrapperOpened), this.selection.save(), t.selected = !0, this.Editor.BlockSelection.clearCache(), this.addToolSettings(t), this.addTunes(t), this.eventsDispatcher.emit(this.events.opened), this.flipper.activate(this.blockTunesButtons)
                    }
                }, { key: "close", value: function() { this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened), h.default.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = !1), this.nodes.toolSettings.innerHTML = "", this.nodes.defaultSettings.innerHTML = "", this.eventsDispatcher.emit(this.events.closed), this.buttons = [], this.flipper.deactivate() } }, {
                    key: "addToolSettings",
                    value: function(t) {
                        var e = t.renderSettings();
                        e && f.default.append(this.nodes.toolSettings, e)
                    }
                }, {
                    key: "addTunes",
                    value: function(t) {
                        var e = t.renderTunes(),
                            n = (0, r.default)(e, 2),
                            o = n[0],
                            i = n[1];
                        f.default.append(this.nodes.toolSettings, o), f.default.append(this.nodes.defaultSettings, i)
                    }
                }, {
                    key: "enableFlipper",
                    value: function() {
                        var t = this;
                        this.flipper = new d.default({ focusedItemClass: this.CSS.focusedButton, activateCallback: function(e) { e && f.default.canSetCaret(e) ? t.close() : p.delay((function() { t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock) }), 50)() } })
                    }
                }, { key: "events", get: function() { return { opened: "block-settings-opened", closed: "block-settings-closed" } } }, { key: "CSS", get: function() { return { wrapper: "ce-settings", wrapperOpened: "ce-settings--opened", toolSettings: "ce-settings__plugin-zone", defaultSettings: "ce-settings__default-zone", button: "ce-settings__button", focusedButton: "ce-settings__button--focused", focusedButtonAnimated: "ce-settings__button--focused-animated" } } }, { key: "opened", get: function() { return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened) } }, {
                    key: "blockTunesButtons",
                    get: function() {
                        var t = this,
                            e = this.Editor.StylesAPI;
                        if (0 !== this.buttons.length) return this.buttons;
                        var n = this.nodes.toolSettings.querySelectorAll(".".concat(e.classes.settingsButton, ", ").concat(f.default.allInputsSelector)),
                            o = this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));
                        return n.forEach((function(e) { t.buttons.push(e) })), o.forEach((function(e) { t.buttons.push(e) })), this.buttons
                    }
                }]), o
            }(u.default);
            o.default = b, b.displayName = "BlockSettings", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(20), n(21), n(42), n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(7), n(62), n(60), n(84), n(67)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p, h, v, g, y, b, m) {
            "use strict";
            var k = n(8),
                x = n(1);

            function w() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = x(r), i = x(i), a = x(a), s = x(s), l = x(l), c = x(c), u = x(u), f = x(f), d = x(d), p = x(p), h = x(h), v = k(v), g = x(g), y = x(y);
            var S = function(t) {
                (0, u.default)(k, t);
                var e, n, o, p = (e = k, function() {
                    var t, n = (0, d.default)(e);
                    if (w()) {
                        var o = (0, d.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, f.default)(this, t)
                });

                function k() { var t; return (0, l.default)(this, k), (t = p.apply(this, arguments)).opened = !1, t.tools = [], t.flipper = null, t.togglingCallback = null, t }
                return (0, c.default)(k, [{ key: "make", value: function() { this.nodes.wrapper = h.default.make("div", [k.CSS.conversionToolbarWrapper].concat((0, s.default)(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []))), this.nodes.tools = h.default.make("div", k.CSS.conversionToolbarTools); var t = h.default.make("div", k.CSS.conversionToolbarLabel, { textContent: y.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter, "Convert to") }); return this.addTools(), this.enableFlipper(), h.default.append(this.nodes.wrapper, t), h.default.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper } }, { key: "destroy", value: function() { this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes() } }, { key: "toggle", value: function(t) { this.opened ? this.close() : this.open(), v.isFunction(t) && (this.togglingCallback = t) } }, {
                    key: "open",
                    value: function() {
                        var t = this;
                        this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(k.CSS.conversionToolbarShowed), window.requestAnimationFrame((function() { t.flipper.activate(t.tools.map((function(t) { return t.button })).filter((function(t) { return !t.classList.contains(k.CSS.conversionToolHidden) }))), t.flipper.focusFirst(), v.isFunction(t.togglingCallback) && t.togglingCallback(!0) }))
                    }
                }, { key: "close", value: function() { this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(k.CSS.conversionToolbarShowed), v.isFunction(this.togglingCallback) && this.togglingCallback(!1) } }, { key: "hasTools", value: function() { return 1 !== this.tools.length || this.tools[0].name !== this.config.defaultBlock } }, {
                    key: "replaceWithBlock",
                    value: (o = (0, a.default)(i.default.mark((function t(e, n) {
                        var o, r, a, s, l, c, u, f, d, p = this;
                        return i.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return o = this.Editor.BlockManager.currentBlock.tool, t.next = 3, this.Editor.BlockManager.currentBlock.save();
                                case 3:
                                    if (r = t.sent, a = r.data, s = this.Editor.Tools.blockTools.get(e), l = "", c = o.conversionConfig.export, !v.isFunction(c)) { t.next = 12; break }
                                    l = c(a), t.next = 18;
                                    break;
                                case 12:
                                    if (!v.isString(c)) { t.next = 16; break }
                                    l = a[c], t.next = 18;
                                    break;
                                case 16:
                                    return v.log("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), t.abrupt("return");
                                case 18:
                                    if (u = (0, m.clean)(l, s.sanitizeConfig), f = {}, d = s.conversionConfig.import, !v.isFunction(d)) { t.next = 25; break }
                                    f = d(u), t.next = 31;
                                    break;
                                case 25:
                                    if (!v.isString(d)) { t.next = 29; break }
                                    f[d] = u, t.next = 31;
                                    break;
                                case 29:
                                    return v.log("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), t.abrupt("return");
                                case 31:
                                    n && (f = Object.assign(f, n)), this.Editor.BlockManager.replace({ tool: e, data: f }), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), v.delay((function() { p.Editor.Caret.setToBlock(p.Editor.BlockManager.currentBlock) }), 10)();
                                case 37:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t, e) { return o.apply(this, arguments) })
                }, {
                    key: "addTools",
                    value: function() {
                        var t = this,
                            e = this.Editor.Tools.blockTools;
                        Array.from(e.entries()).forEach((function(e) {
                            var n = (0, r.default)(e, 2),
                                o = n[0],
                                i = n[1],
                                a = i.conversionConfig;
                            a && a.import && i.toolbox.forEach((function(e) { return t.addToolIfValid(o, e) }))
                        }))
                    }
                }, { key: "addToolIfValid", value: function(t, e) {!v.isEmpty(e) && e.icon && this.addTool(t, e) } }, {
                    key: "addTool",
                    value: function(t, e) {
                        var n = this,
                            o = h.default.make("div", [k.CSS.conversionTool]),
                            r = h.default.make("div", [k.CSS.conversionToolIcon]);
                        o.dataset.tool = t, r.innerHTML = e.icon, h.default.append(o, r), h.default.append(o, h.default.text(y.default.t(b.I18nInternalNS.toolNames, e.title || v.capitalize(t)))), h.default.append(this.nodes.tools, o), this.tools.push({ name: t, button: o, toolboxItem: e }), this.listeners.on(o, "click", (0, a.default)(i.default.mark((function o() {
                            return i.default.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        return o.next = 2, n.replaceWithBlock(t, e.data);
                                    case 2:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        }))))
                    }
                }, {
                    key: "filterTools",
                    value: (n = (0, a.default)(i.default.mark((function t() {
                        var e, n, o;
                        return i.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return o = function(t, e) { return t.icon === e.icon && t.title === e.title }, e = this.Editor.BlockManager.currentBlock, t.next = 4, e.getActiveToolboxEntry();
                                case 4:
                                    n = t.sent, this.tools.forEach((function(t) {
                                        var r = !1;
                                        if (n) {
                                            var i = o(n, t.toolboxItem);
                                            r = t.button.dataset.tool === e.name && i
                                        }
                                        t.button.hidden = r, t.button.classList.toggle(k.CSS.conversionToolHidden, r)
                                    }));
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() { return n.apply(this, arguments) })
                }, { key: "enableFlipper", value: function() { this.flipper = new g.default({ focusedItemClass: k.CSS.conversionToolFocused }) } }], [{ key: "CSS", get: function() { return { conversionToolbarWrapper: "ce-conversion-toolbar", conversionToolbarShowed: "ce-conversion-toolbar--showed", conversionToolbarTools: "ce-conversion-toolbar__tools", conversionToolbarLabel: "ce-conversion-toolbar__label", conversionTool: "ce-conversion-tool", conversionToolHidden: "ce-conversion-tool--hidden", conversionToolIcon: "ce-conversion-tool__icon", conversionToolFocused: "ce-conversion-tool--focused", conversionToolActive: "ce-conversion-tool--active" } } }]), k
            }(p.default);
            o.default = S, S.displayName = "ConversionToolbar", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(42), n(30), n(2), n(3), n(5), n(6), n(4), n(9), n(14), n(25), n(7), n(62), n(60), n(84), n(115), n(114), n(68)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p, h, v, g, y, b, m, k, x, w) {
            "use strict";
            var S = n(8),
                T = n(1);

            function E() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = T(r), i = T(i), a = T(a), s = T(s), l = T(l), c = T(c), u = T(u), f = T(f), d = T(d), p = T(p), h = T(h), v = T(v), g = S(g), y = T(y), b = T(b), k = T(k), x = T(x);
            var B = function(t) {
                (0, u.default)(p, t);
                var e, n, o = (e = p, function() {
                    var t, n = (0, d.default)(e);
                    if (E()) {
                        var o = (0, d.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, f.default)(this, t)
                });

                function p(t) {
                    var e, n = t.config,
                        r = t.eventsDispatcher;
                    return (0, l.default)(this, p), (e = o.call(this, { config: n, eventsDispatcher: r })).CSS = { inlineToolbar: "ce-inline-toolbar", inlineToolbarShowed: "ce-inline-toolbar--showed", inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented", inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented", inlineToolbarShortcut: "ce-inline-toolbar__shortcut", buttonsWrapper: "ce-inline-toolbar__buttons", actionsWrapper: "ce-inline-toolbar__actions", inlineToolButton: "ce-inline-tool", inputField: "cdx-input", focusedButton: "ce-inline-tool--focused", conversionToggler: "ce-inline-toolbar__dropdown", conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden", conversionTogglerContent: "ce-inline-toolbar__dropdown-content", togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper" }, e.opened = !1, e.toolbarVerticalMargin = 5, e.buttonsList = null, e.width = 0, e.flipper = null, e.tooltip = new x.default, e
                }
                return (0, c.default)(p, [{ key: "toggleReadOnly", value: function(t) { t ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : this.make() } }, {
                    key: "tryToShow",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.allowedToShow() ? (this.move(), this.open(e), this.Editor.Toolbar.close()) : t && this.close()
                    }
                }, {
                    key: "move",
                    value: function() {
                        var t = v.default.rect,
                            e = this.Editor.UI.nodes.wrapper.getBoundingClientRect(),
                            n = { x: t.x - e.left, y: t.y + t.height - e.top + this.toolbarVerticalMargin };
                        t.width && (n.x += Math.floor(t.width / 2));
                        var o = n.x - this.width / 2,
                            r = n.x + this.width / 2;
                        this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, o < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, r > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(n.x) + "px", this.nodes.wrapper.style.top = Math.floor(n.y) + "px"
                    }
                }, {
                    key: "close",
                    value: function() {
                        var t = this;
                        this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach((function(e) {
                            var n = (0, s.default)(e, 2),
                                o = n[0],
                                r = n[1],
                                i = t.getToolShortcut(o);
                            i && k.default.remove(t.Editor.UI.nodes.redactor, i), g.isFunction(r.clear) && r.clear()
                        })), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()))
                    }
                }, {
                    key: "open",
                    value: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (!this.opened) {
                            this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)), this.opened = !0, t && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0;
                            var e = Array.from(this.buttonsList);
                            e.unshift(this.nodes.conversionToggler), e = e.filter((function(t) { return !t.hidden })), this.flipper.activate(e)
                        }
                    }
                }, { key: "containsNode", value: function(t) { return this.nodes.wrapper.contains(t) } }, { key: "destroy", value: function() { this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy() } }, {
                    key: "make",
                    value: function() {
                        var t = this;
                        this.nodes.wrapper = h.default.make("div", [this.CSS.inlineToolbar].concat((0, a.default)(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []))), this.nodes.togglerAndButtonsWrapper = h.default.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = h.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = h.default.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", (function(e) { e.target.closest(".".concat(t.CSS.actionsWrapper)) || e.preventDefault() })), h.default.append(this.nodes.wrapper, [this.nodes.togglerAndButtonsWrapper, this.nodes.actions]), h.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), h.default.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper()
                    }
                }, {
                    key: "allowedToShow",
                    value: function() {
                        var t = v.default.get(),
                            e = v.default.text;
                        if (!t || !t.anchorNode) return !1;
                        if (t.isCollapsed || e.length < 1) return !1;
                        var n = h.default.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
                        if (t && ["IMG", "INPUT"].includes(n.tagName)) return !1;
                        if (null === n.closest('[contenteditable="true"]')) return !1;
                        var o = this.Editor.BlockManager.getBlock(t.anchorNode);
                        return !!o && 0 !== o.tool.inlineTools.size
                    }
                }, { key: "recalculateWidth", value: function() { this.width = this.nodes.wrapper.offsetWidth } }, {
                    key: "addConversionToggler",
                    value: function() {
                        var t = this;
                        this.nodes.conversionToggler = h.default.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = h.default.make("div", this.CSS.conversionTogglerContent);
                        var e = h.default.svg("toggler-down", 13, 13);
                        this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", (function() { t.Editor.ConversionToolbar.toggle((function(e) {!e && t.opened ? t.flipper.activate() : t.opened && t.flipper.deactivate() })) })), this.tooltip.onHover(this.nodes.conversionToggler, b.default.ui(m.I18nInternalNS.ui.inlineToolbar.converter, "Convert to"), { placement: "top", hidingDelay: 100 })
                    }
                }, {
                    key: "setConversionTogglerContent",
                    value: (n = (0, i.default)(r.default.mark((function t() {
                        var e, n, o, i, a, s;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = this.Editor.BlockManager, n = e.currentBlock, o = n.name, i = n.tool.conversionConfig, a = i && i.export, this.nodes.conversionToggler.hidden = !a, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !a), t.next = 9, n.getActiveToolboxEntry();
                                case 9:
                                    if (t.t0 = t.sent, t.t0) { t.next = 12; break }
                                    t.t0 = {};
                                case 12:
                                    s = t.t0, this.nodes.conversionTogglerContent.innerHTML = s.icon || s.title || g.capitalize(o);
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() { return n.apply(this, arguments) })
                }, {
                    key: "prepareConversionToolbar",
                    value: function() {
                        var t = this.Editor.ConversionToolbar.make();
                        h.default.append(this.nodes.wrapper, t)
                    }
                }, {
                    key: "addToolsFiltered",
                    value: function() {
                        var t = this,
                            e = v.default.get(),
                            n = this.Editor.BlockManager.getBlock(e.anchorNode);
                        this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = new Map, Array.from(n.tool.inlineTools.values()).forEach((function(e) { t.addTool(e) })), this.recalculateWidth()
                    }
                }, {
                    key: "addTool",
                    value: function(t) {
                        var e = this,
                            n = t.create(),
                            o = n.render();
                        if (o) {
                            if (o.dataset.tool = t.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(t.name, n), g.isFunction(n.renderActions)) {
                                var r = n.renderActions();
                                this.nodes.actions.appendChild(r)
                            }
                            this.listeners.on(o, "click", (function(t) { e.toolClicked(n), t.preventDefault() }));
                            var i = this.getToolShortcut(t.name);
                            if (i) try { this.enableShortcuts(n, i) } catch (t) {}
                            var a = h.default.make("div"),
                                s = b.default.t(m.I18nInternalNS.toolNames, t.title || g.capitalize(t.name));
                            a.appendChild(h.default.text(s)), i && a.appendChild(h.default.make("div", this.CSS.inlineToolbarShortcut, { textContent: g.beautifyShortcut(i) })), this.tooltip.onHover(o, a, { placement: "top", hidingDelay: 100 }), n.checkState(v.default.get())
                        } else g.log("Render method must return an instance of Node", "warn", t.name)
                    }
                }, {
                    key: "getToolShortcut",
                    value: function(t) {
                        var e = this.Editor.Tools,
                            n = e.inlineTools.get(t),
                            o = e.internal.inlineTools;
                        return Array.from(o.keys()).includes(t) ? this.inlineTools[t][w.CommonInternalSettings.Shortcut] : n.shortcut
                    }
                }, {
                    key: "enableShortcuts",
                    value: function(t, e) {
                        var n = this;
                        k.default.add({
                            name: e,
                            handler: function(e) {
                                var o = n.Editor.BlockManager.currentBlock;
                                o && o.tool.enabledInlineTools && (e.preventDefault(), n.toolClicked(t))
                            },
                            on: this.Editor.UI.nodes.redactor
                        })
                    }
                }, {
                    key: "toolClicked",
                    value: function(t) {
                        var e = v.default.range;
                        t.surround(e), this.checkToolsState()
                    }
                }, { key: "checkToolsState", value: function() { this.toolsInstances.forEach((function(t) { t.checkState(v.default.get()) })) } }, { key: "enableFlipper", value: function() { this.flipper = new y.default({ focusedItemClass: this.CSS.focusedButton, allowedKeys: [g.keyCodes.ENTER, g.keyCodes.TAB] }) } }, {
                    key: "inlineTools",
                    get: function() {
                        var t = {};
                        return Array.from(this.Editor.Tools.inlineTools.entries()).forEach((function(e) {
                            var n = (0, s.default)(e, 2),
                                o = n[0],
                                r = n[1];
                            t[o] = r.create()
                        })), t
                    }
                }]), p
            }(p.default);
            o.default = B, B.displayName = "InlineToolbar", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(42), n(30), n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(59), n(389), n(9), n(7), n(390), n(391), n(392), n(393), n(394), n(398), n(399), n(400), n(185)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p, h, v, g, y, b, m, k, x, w, S, T, E) {
            "use strict";
            var B = n(8),
                C = n(1);

            function _() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = C(r), i = C(i), a = C(a), s = C(s), l = C(l), c = C(c), u = C(u), f = C(f), d = C(d), p = C(p), h = C(h), v = C(v), g = B(g), y = C(y), b = C(b), m = C(m), k = C(k), x = C(x), w = C(w), S = C(S), T = C(T), E = C(E);
            var I = function(t, e, n, o) {
                    var r, i = arguments.length,
                        a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, p.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                O = function(t) {
                    (0, u.default)(p, t);
                    var e, n, o = (e = p, function() {
                        var t, n = (0, d.default)(e);
                        if (_()) {
                            var o = (0, d.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o)
                        } else t = n.apply(this, arguments);
                        return (0, f.default)(this, t)
                    });

                    function p() { var t; return (0, l.default)(this, p), (t = o.apply(this, arguments)).stubTool = "stub", t.toolsAvailable = new E.default, t.toolsUnavailable = new E.default, t }
                    return (0, c.default)(p, [{
                        key: "prepare",
                        value: (n = (0, s.default)(a.default.mark((function t() {
                            var e, n, o = this;
                            return a.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.validateTools(), this.config.tools = g.deepMerge({}, this.internalTools, this.config.tools), Object.prototype.hasOwnProperty.call(this.config, "tools") && 0 !== Object.keys(this.config.tools).length) { t.next = 4; break }
                                        throw Error("Can't start without tools");
                                    case 4:
                                        if (e = this.prepareConfig(), this.factory = new x.default(e, this.config, this.Editor.API), 0 !== (n = this.getListOfPrepareFunctions(e)).length) { t.next = 9; break }
                                        return t.abrupt("return", Promise.resolve());
                                    case 9:
                                        return t.next = 11, g.sequence(n, (function(t) { o.toolPrepareMethodSuccess(t) }), (function(t) { o.toolPrepareMethodFallback(t) }));
                                    case 11:
                                        this.prepareBlockTools();
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() { return n.apply(this, arguments) })
                    }, { key: "getAllInlineToolsSanitizeConfig", value: function() { var t = {}; return Array.from(this.inlineTools.values()).forEach((function(e) { Object.assign(t, e.sanitizeConfig) })), t } }, {
                        key: "destroy",
                        value: function() {
                            Object.values(this.available).forEach(function() {
                                var t = (0, s.default)(a.default.mark((function t(e) {
                                    return a.default.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (!g.isFunction(e.reset)) { t.next = 3; break }
                                                return t.next = 3, e.reset();
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) { return t.apply(this, arguments) }
                            }())
                        }
                    }, {
                        key: "toolPrepareMethodSuccess",
                        value: function(t) {
                            var e = this.factory.get(t.toolName);
                            if (e.isInline()) { var n = ["render", "surround", "checkState"].filter((function(t) { return !e.create()[t] })); if (n.length) return g.log("Incorrect Inline Tool: ".concat(e.name, ". Some of required methods is not implemented %o"), "warn", n), void this.toolsUnavailable.set(e.name, e) }
                            this.toolsAvailable.set(e.name, e)
                        }
                    }, { key: "toolPrepareMethodFallback", value: function(t) { this.toolsUnavailable.set(t.toolName, this.factory.get(t.toolName)) } }, {
                        key: "getListOfPrepareFunctions",
                        value: function(t) {
                            var e = [];
                            return Object.entries(t).forEach((function(t) {
                                var n = (0, i.default)(t, 2),
                                    o = n[0],
                                    r = n[1];
                                e.push({ function: g.isFunction(r.class.prepare) ? r.class.prepare : function() {}, data: { toolName: o, config: r.config } })
                            })), e
                        }
                    }, {
                        key: "prepareBlockTools",
                        value: function() {
                            var t = this;
                            Array.from(this.blockTools.values()).forEach((function(e) { t.assignInlineToolsToBlockTool(e), t.assignBlockTunesToBlockTool(e) }))
                        }
                    }, { key: "assignInlineToolsToBlockTool", value: function(t) { var e = this;!1 !== this.config.inlineToolbar && (!0 !== t.enabledInlineTools ? Array.isArray(t.enabledInlineTools) && (t.inlineTools = new E.default(t.enabledInlineTools.map((function(t) { return [t, e.inlineTools.get(t)] })))) : t.inlineTools = new E.default(Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((function(t) { return [t, e.inlineTools.get(t)] })) : Array.from(this.inlineTools.entries()))) } }, {
                        key: "assignBlockTunesToBlockTool",
                        value: function(t) {
                            var e = this;
                            if (!1 !== t.enabledBlockTunes)
                                if (Array.isArray(t.enabledBlockTunes)) {
                                    var n = new E.default(t.enabledBlockTunes.map((function(t) { return [t, e.blockTunes.get(t)] })));
                                    t.tunes = new E.default([].concat((0, r.default)(n), (0, r.default)(this.blockTunes.internalTools)))
                                } else if (Array.isArray(this.config.tunes)) {
                                var o = new E.default(this.config.tunes.map((function(t) { return [t, e.blockTunes.get(t)] })));
                                t.tunes = new E.default([].concat((0, r.default)(o), (0, r.default)(this.blockTunes.internalTools)))
                            } else t.tunes = this.blockTunes.internalTools
                        }
                    }, {
                        key: "validateTools",
                        value: function() {
                            for (var t in this.config.tools)
                                if (Object.prototype.hasOwnProperty.call(this.config.tools, t)) { if (t in this.internalTools) return; var e = this.config.tools[t]; if (!g.isFunction(e) && !g.isFunction(e.class)) throw Error("Tool «".concat(t, "» must be a constructor function or an object with function in the «class» property")) }
                        }
                    }, { key: "prepareConfig", value: function() { var t = {}; for (var e in this.config.tools) g.isObject(this.config.tools[e]) ? t[e] = this.config.tools[e] : t[e] = { class: this.config.tools[e] }; return t } }, { key: "available", get: function() { return this.toolsAvailable } }, { key: "unavailable", get: function() { return this.toolsUnavailable } }, { key: "inlineTools", get: function() { return this.available.inlineTools } }, { key: "blockTools", get: function() { return this.available.blockTools } }, { key: "blockTunes", get: function() { return this.available.blockTunes } }, { key: "defaultTool", get: function() { return this.blockTools.get(this.config.defaultBlock) } }, { key: "internal", get: function() { return this.available.internalTools } }, { key: "internalTools", get: function() { return { bold: { class: y.default, isInternal: !0 }, italic: { class: b.default, isInternal: !0 }, link: { class: m.default, isInternal: !0 }, paragraph: { class: h.default, inlineToolbar: !0, isInternal: !0 }, stub: { class: k.default, isInternal: !0 }, moveUp: { class: T.default, isInternal: !0 }, delete: { class: S.default, isInternal: !0 }, moveDown: { class: w.default, isInternal: !0 } } } }]), p
                }(v.default);
            o.default = O, O.displayName = "Tools", I([g.cacheable], O.prototype, "getAllInlineToolsSanitizeConfig", null), t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(2), n(3), n(5), n(6), n(4), n(153)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u) {
            "use strict";
            var f = n(1);

            function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
            var p = function(t) {
                (0, s.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, c.default)(e);
                    if (d()) {
                        var o = (0, c.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, l.default)(this, t)
                });

                function o() { return (0, i.default)(this, o), n.apply(this, arguments) }
                return (0, a.default)(o, [{ key: "blockTools", get: function() { return new o(Array.from(this.entries()).filter((function(t) { return (0, r.default)(t, 2)[1].isBlock() }))) } }, { key: "inlineTools", get: function() { return new o(Array.from(this.entries()).filter((function(t) { return (0, r.default)(t, 2)[1].isInline() }))) } }, { key: "blockTunes", get: function() { return new o(Array.from(this.entries()).filter((function(t) { return (0, r.default)(t, 2)[1].isTune() }))) } }, { key: "internalTools", get: function() { return new o(Array.from(this.entries()).filter((function(t) { return (0, r.default)(t, 2)[1].isInternal }))) } }, { key: "externalTools", get: function() { return new o(Array.from(this.entries()).filter((function(t) { return !(0, r.default)(t, 2)[1].isInternal }))) } }]), o
            }((0, (u = f(u)).default)(Map));
            o.default = p, p.displayName = "ToolsCollection", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(42), n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(401), n(9), n(14), n(7), n(25), n(61), n(62)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p, h, v, g, y, b, m) {
            "use strict";
            var k = n(8),
                x = n(1);

            function w() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = x(r), i = x(i), a = x(a), s = x(s), l = x(l), c = x(c), u = x(u), f = x(f), d = x(d), p = x(p), h = x(h), v = x(v), g = k(g), y = x(y), b = x(b), m = x(m);
            var S = function(t) {
                (0, u.default)(k, t);
                var e, o, h = (e = k, function() {
                    var t, n = (0, d.default)(e);
                    if (w()) {
                        var o = (0, d.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, f.default)(this, t)
                });

                function k() { var t; return (0, l.default)(this, k), (t = h.apply(this, arguments)).isMobile = !1, t.contentRectCache = void 0, t.resizeDebouncer = g.debounce((function() { t.windowResize() }), 200), t }
                return (0, c.default)(k, [{ key: "addLoader", value: function() { this.nodes.loader = v.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden) } }, { key: "removeLoader", value: function() { this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden) } }, {
                    key: "prepare",
                    value: (o = (0, s.default)(a.default.mark((function t() {
                        return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.checkIsMobile(), this.make(), this.addLoader(), this.appendSVGSprite(), this.loadStyles();
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() { return o.apply(this, arguments) })
                }, { key: "toggleReadOnly", value: function(t) { t ? this.disableModuleBindings() : this.enableModuleBindings() } }, {
                    key: "checkEmptiness",
                    value: function() {
                        var t = this.Editor.BlockManager;
                        this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, t.isEditorEmpty)
                    }
                }, { key: "destroy", value: function() { this.nodes.holder.innerHTML = "" } }, {
                    key: "closeAllToolbars",
                    value: function() {
                        var t = this.Editor,
                            e = t.Toolbar,
                            n = t.BlockSettings,
                            o = t.InlineToolbar,
                            r = t.ConversionToolbar;
                        n.close(), o.close(), r.close(), e.toolbox.close()
                    }
                }, { key: "checkIsMobile", value: function() { this.isMobile = window.innerWidth < 650 } }, { key: "make", value: function() { this.nodes.holder = v.default.getHolder(this.config.holder), this.nodes.wrapper = v.default.make("div", [this.CSS.editorWrapper].concat((0, i.default)(this.isRtl ? [this.CSS.editorRtlFix] : []))), this.nodes.redactor = v.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper) } }, {
                    key: "loadStyles",
                    value: function() {
                        var t = n(402);
                        if (!v.default.get("editor-js-styles")) {
                            var e = v.default.make("style", null, { id: "editor-js-styles", textContent: t.toString() });
                            v.default.prepend(document.head, e)
                        }
                    }
                }, {
                    key: "enableModuleBindings",
                    value: function() {
                        var t = this;
                        this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (function(e) { t.redactorClicked(e) }), !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (function(e) { t.documentTouched(e) }), !0), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (function(e) { t.documentTouched(e) }), !0), this.readOnlyMutableListeners.on(document, "keydown", (function(e) { t.documentKeydown(e) }), !0), this.readOnlyMutableListeners.on(document, "mousedown", (function(e) { t.documentClicked(e) }), !0), this.readOnlyMutableListeners.on(document, "selectionchange", (function(e) { t.selectionChanged(e) }), !0), this.readOnlyMutableListeners.on(window, "resize", (function() { t.resizeDebouncer() }), { passive: !0 }), this.watchBlockHoveredEvents()
                    }
                }, {
                    key: "watchBlockHoveredEvents",
                    value: function() {
                        var t, e = this;
                        this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", g.throttle((function(n) {
                            var o = n.target.closest(".ce-block");
                            e.Editor.BlockSelection.anyBlockSelected || o && t !== o && (t = o, e.eventsDispatcher.emit(e.events.blockHovered, { block: e.Editor.BlockManager.getBlockByChildNode(o) }))
                        }), 20), { passive: !0 })
                    }
                }, { key: "disableModuleBindings", value: function() { this.readOnlyMutableListeners.clearAll() } }, { key: "windowResize", value: function() { this.contentRectCache = null, this.checkIsMobile() } }, {
                    key: "documentKeydown",
                    value: function(t) {
                        switch (t.keyCode) {
                            case g.keyCodes.ENTER:
                                this.enterPressed(t);
                                break;
                            case g.keyCodes.BACKSPACE:
                                this.backspacePressed(t);
                                break;
                            case g.keyCodes.ESC:
                                this.escapePressed(t);
                                break;
                            default:
                                this.defaultBehaviour(t)
                        }
                    }
                }, {
                    key: "defaultBehaviour",
                    value: function(t) {
                        var e = this.Editor.BlockManager.currentBlock,
                            n = t.target.closest(".".concat(this.CSS.editorWrapper)),
                            o = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                        void 0 === e || null !== n ? n || e && o || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close()) : this.Editor.BlockEvents.keydown(t)
                    }
                }, {
                    key: "backspacePressed",
                    value: function(t) {
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.BlockSelection,
                            r = e.Caret;
                        if (o.anyBlockSelected && !y.default.isSelectionExists) {
                            var i = n.removeSelectedBlocks();
                            r.setToBlock(n.insertDefaultBlockAtIndex(i, !0), r.positions.START), o.clearSelection(t), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation()
                        }
                    }
                }, { key: "escapePressed", value: function(t) { this.Editor.BlockSelection.clearSelection(t), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close() } }, {
                    key: "enterPressed",
                    value: function(t) {
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.BlockSelection,
                            r = n.currentBlockIndex >= 0;
                        if (o.anyBlockSelected && !y.default.isSelectionExists) return o.clearSelection(t), t.preventDefault(), t.stopImmediatePropagation(), void t.stopPropagation();
                        if (!this.someToolbarOpened && r && "BODY" === t.target.tagName) {
                            var i = this.Editor.BlockManager.insert();
                            this.Editor.Caret.setToBlock(i), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.moveAndOpen(i)
                        }
                        this.Editor.BlockSelection.clearSelection(t)
                    }
                }, {
                    key: "documentClicked",
                    value: function(t) {
                        if (t.isTrusted) {
                            var e = t.target;
                            this.nodes.holder.contains(e) || y.default.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
                            var n = this.Editor.BlockSettings.nodes.wrapper.contains(e),
                                o = this.Editor.Toolbar.nodes.settingsToggler.contains(e),
                                r = n || o;
                            if (this.Editor.BlockSettings.opened && !r) {
                                this.Editor.BlockSettings.close();
                                var i = this.Editor.BlockManager.getBlockByChildNode(e);
                                this.Editor.Toolbar.moveAndOpen(i)
                            }
                            this.Editor.BlockSelection.clearSelection(t)
                        }
                    }
                }, {
                    key: "documentTouched",
                    value: function(t) {
                        var e = t.target;
                        if (e === this.nodes.redactor) {
                            var n = t instanceof MouseEvent ? t.clientX : t.touches[0].clientX,
                                o = t instanceof MouseEvent ? t.clientY : t.touches[0].clientY;
                            e = document.elementFromPoint(n, o)
                        }
                        try { this.Editor.BlockManager.setCurrentBlockByChildNode(e), this.Editor.BlockManager.highlightCurrentNode() } catch (t) { this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock() }
                        this.Editor.Toolbar.moveAndOpen()
                    }
                }, {
                    key: "redactorClicked",
                    value: function(t) {
                        var e = this.Editor.BlockSelection;
                        if (y.default.isCollapsed) {
                            var n = function() { t.stopImmediatePropagation(), t.stopPropagation() },
                                o = t.target,
                                r = t.metaKey || t.ctrlKey;
                            if (v.default.isAnchor(o) && r) {
                                n();
                                var i = o.getAttribute("href"),
                                    a = g.getValidUrl(i);
                                g.openTab(a)
                            } else {
                                var s = this.Editor.BlockManager.getBlockByIndex(-1),
                                    l = v.default.offset(s.holder).bottom,
                                    c = t.pageY;
                                if (t.target instanceof Element && t.target.isEqualNode(this.nodes.redactor) && !e.anyBlockSelected && l < c) {
                                    n();
                                    var u = this.Editor,
                                        f = u.BlockManager,
                                        d = u.Caret,
                                        p = u.Toolbar;
                                    f.lastBlock.tool.isDefault && f.lastBlock.isEmpty || f.insertAtEnd(), d.setToTheLastBlock(), p.moveAndOpen(f.lastBlock)
                                }
                            }
                        }
                    }
                }, {
                    key: "selectionChanged",
                    value: function(t) {
                        var e = this.Editor,
                            n = e.CrossBlockSelection,
                            o = e.BlockSelection,
                            r = y.default.anchorElement;
                        if (n.isCrossBlockSelectionStarted && o.anyBlockSelected && y.default.get().removeAllRanges(), r) {
                            var i = null === r.closest(".".concat(b.default.CSS.content));
                            if (i && (this.Editor.InlineToolbar.containsNode(r) || this.Editor.InlineToolbar.close(), "true" !== r.dataset.inlineToolbar)) return;
                            this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(r);
                            var a = !0 !== i;
                            this.Editor.InlineToolbar.tryToShow(!0, a)
                        } else y.default.range || this.Editor.InlineToolbar.close()
                    }
                }, {
                    key: "appendSVGSprite",
                    value: function() {
                        var t = v.default.make("div");
                        t.hidden = !0, t.style.display = "none", t.innerHTML = p.default, v.default.append(this.nodes.wrapper, t)
                    }
                }, { key: "events", get: function() { return { blockHovered: "block-hovered" } } }, { key: "CSS", get: function() { return { editorWrapper: "codex-editor", editorWrapperNarrow: "codex-editor--narrow", editorZone: "codex-editor__redactor", editorZoneHidden: "codex-editor__redactor--hidden", editorLoader: "codex-editor__loader", editorEmpty: "codex-editor--empty", editorRtlFix: "codex-editor--rtl" } } }, { key: "contentRect", get: function() { if (this.contentRectCache) return this.contentRectCache; var t = this.nodes.wrapper.querySelector(".".concat(b.default.CSS.content)); return t ? (this.contentRectCache = t.getBoundingClientRect(), this.contentRectCache) : { width: 650, left: 0, right: 0 } } }, {
                    key: "someToolbarOpened",
                    get: function() {
                        var t = this.Editor,
                            e = t.Toolbar,
                            n = t.BlockSettings,
                            o = t.InlineToolbar,
                            r = t.ConversionToolbar;
                        return n.opened || o.opened || r.opened || e.toolbox.opened
                    }
                }, { key: "someFlipperButtonFocused", get: function() { return !!this.Editor.Toolbar.toolbox.hasFocus() || Object.entries(this.Editor).filter((function(t) { var e = (0, r.default)(t, 2); return e[0], e[1].flipper instanceof m.default })).some((function(t) { var e = (0, r.default)(t, 2); return e[0], e[1].flipper.hasFocus() })) } }]), k
            }(h.default);
            o.default = S, S.displayName = "UI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) { n(188), t.exports = n(360) }, function(t, e, n) { n(189) }, function(t, e, n) {
        "use strict";
        n(190), n(333), n(335), n(338), n(340), n(342), n(344), n(346), n(348), n(350), n(352), n(354), n(356), n(147)
    }, function(t, e, n) { n(191), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(272), n(273), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(105), n(296), n(136), n(297), n(137), n(298), n(299), n(300), n(301), n(138), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), n(329), n(330), n(331), n(332), t.exports = n(17) }, function(t, e, n) {
        "use strict";
        var o = n(10),
            r = n(26),
            i = n(18),
            a = n(0),
            s = n(23),
            l = n(41).KEY,
            c = n(11),
            u = n(69),
            f = n(53),
            d = n(44),
            p = n(15),
            h = n(86),
            v = n(117),
            g = n(193),
            y = n(72),
            b = n(12),
            m = n(13),
            k = n(22),
            x = n(28),
            w = n(40),
            S = n(43),
            T = n(48),
            E = n(120),
            B = n(34),
            C = n(71),
            _ = n(19),
            I = n(46),
            O = B.f,
            M = _.f,
            R = E.f,
            A = o.Symbol,
            N = o.JSON,
            L = N && N.stringify,
            P = p("_hidden"),
            D = p("toPrimitive"),
            j = {}.propertyIsEnumerable,
            F = u("symbol-registry"),
            H = u("symbols"),
            U = u("op-symbols"),
            z = Object.prototype,
            W = "function" == typeof A && !!C.f,
            Y = o.QObject,
            V = !Y || !Y.prototype || !Y.prototype.findChild,
            X = i && c((function() { return 7 != T(M({}, "a", { get: function() { return M(this, "a", { value: 7 }).a } })).a })) ? function(t, e, n) {
                var o = O(z, e);
                o && delete z[e], M(t, e, n), o && t !== z && M(z, e, o)
            } : M,
            K = function(t) { var e = H[t] = T(A.prototype); return e._k = t, e },
            G = W && "symbol" == typeof A.iterator ? function(t) { return "symbol" == typeof t } : function(t) { return t instanceof A },
            Z = function(t, e, n) { return t === z && Z(U, e, n), b(t), e = w(e, !0), b(n), r(H, e) ? (n.enumerable ? (r(t, P) && t[P][e] && (t[P][e] = !1), n = T(n, { enumerable: S(0, !1) })) : (r(t, P) || M(t, P, S(1, {})), t[P][e] = !0), X(t, e, n)) : M(t, e, n) },
            q = function(t, e) { b(t); for (var n, o = g(e = x(e)), r = 0, i = o.length; i > r;) Z(t, n = o[r++], e[n]); return t },
            J = function(t) { var e = j.call(this, t = w(t, !0)); return !(this === z && r(H, t) && !r(U, t)) && (!(e || !r(this, t) || !r(H, t) || r(this, P) && this[P][t]) || e) },
            $ = function(t, e) { if (t = x(t), e = w(e, !0), t !== z || !r(H, e) || r(U, e)) { var n = O(t, e); return !n || !r(H, e) || r(t, P) && t[P][e] || (n.enumerable = !0), n } },
            Q = function(t) { for (var e, n = R(x(t)), o = [], i = 0; n.length > i;) r(H, e = n[i++]) || e == P || e == l || o.push(e); return o },
            tt = function(t) { for (var e, n = t === z, o = R(n ? U : x(t)), i = [], a = 0; o.length > a;) !r(H, e = o[a++]) || n && !r(z, e) || i.push(H[e]); return i };
        W || (s((A = function() {
            if (this instanceof A) throw TypeError("Symbol is not a constructor!");
            var t = d(arguments.length > 0 ? arguments[0] : void 0),
                e = function(n) { this === z && e.call(U, n), r(this, P) && r(this[P], t) && (this[P][t] = !1), X(this, t, S(1, n)) };
            return i && V && X(z, t, { configurable: !0, set: e }), K(t)
        }).prototype, "toString", (function() { return this._k })), B.f = $, _.f = Z, n(49).f = E.f = Q, n(64).f = J, C.f = tt, i && !n(45) && s(z, "propertyIsEnumerable", J, !0), h.f = function(t) { return K(p(t)) }), a(a.G + a.W + a.F * !W, { Symbol: A });
        for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) p(et[nt++]);
        for (var ot = I(p.store), rt = 0; ot.length > rt;) v(ot[rt++]);
        a(a.S + a.F * !W, "Symbol", {
            for: function(t) { return r(F, t += "") ? F[t] : F[t] = A(t) },
            keyFor: function(t) {
                if (!G(t)) throw TypeError(t + " is not a symbol!");
                for (var e in F)
                    if (F[e] === t) return e
            },
            useSetter: function() { V = !0 },
            useSimple: function() { V = !1 }
        }), a(a.S + a.F * !W, "Object", { create: function(t, e) { return void 0 === e ? T(t) : q(T(t), e) }, defineProperty: Z, defineProperties: q, getOwnPropertyDescriptor: $, getOwnPropertyNames: Q, getOwnPropertySymbols: tt });
        var it = c((function() { C.f(1) }));
        a(a.S + a.F * it, "Object", { getOwnPropertySymbols: function(t) { return C.f(k(t)) } }), N && a(a.S + a.F * (!W || c((function() { var t = A(); return "[null]" != L([t]) || "{}" != L({ a: t }) || "{}" != L(Object(t)) }))), "JSON", { stringify: function(t) { for (var e, n, o = [t], r = 1; arguments.length > r;) o.push(arguments[r++]); if (n = e = o[1], (m(e) || void 0 !== t) && !G(t)) return y(e) || (e = function(t, e) { if ("function" == typeof n && (e = n.call(this, t, e)), !G(e)) return e }), o[1] = e, L.apply(N, o) } }), A.prototype[D] || n(27)(A.prototype, D, A.prototype.valueOf), f(A, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0)
    }, function(t, e, n) { t.exports = n(69)("native-function-to-string", Function.toString) }, function(t, e, n) {
        var o = n(46),
            r = n(71),
            i = n(64);
        t.exports = function(t) {
            var e = o(t),
                n = r.f;
            if (n)
                for (var a, s = n(t), l = i.f, c = 0; s.length > c;) l.call(t, a = s[c++]) && e.push(a);
            return e
        }
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Object", { create: n(48) })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S + o.F * !n(18), "Object", { defineProperty: n(19).f })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S + o.F * !n(18), "Object", { defineProperties: n(119) })
    }, function(t, e, n) {
        var o = n(28),
            r = n(34).f;
        n(35)("getOwnPropertyDescriptor", (function() { return function(t, e) { return r(o(t), e) } }))
    }, function(t, e, n) {
        var o = n(22),
            r = n(50);
        n(35)("getPrototypeOf", (function() { return function(t) { return r(o(t)) } }))
    }, function(t, e, n) {
        var o = n(22),
            r = n(46);
        n(35)("keys", (function() { return function(t) { return r(o(t)) } }))
    }, function(t, e, n) { n(35)("getOwnPropertyNames", (function() { return n(120).f })) }, function(t, e, n) {
        var o = n(13),
            r = n(41).onFreeze;
        n(35)("freeze", (function(t) { return function(e) { return t && o(e) ? t(r(e)) : e } }))
    }, function(t, e, n) {
        var o = n(13),
            r = n(41).onFreeze;
        n(35)("seal", (function(t) { return function(e) { return t && o(e) ? t(r(e)) : e } }))
    }, function(t, e, n) {
        var o = n(13),
            r = n(41).onFreeze;
        n(35)("preventExtensions", (function(t) { return function(e) { return t && o(e) ? t(r(e)) : e } }))
    }, function(t, e, n) {
        var o = n(13);
        n(35)("isFrozen", (function(t) { return function(e) { return !o(e) || !!t && t(e) } }))
    }, function(t, e, n) {
        var o = n(13);
        n(35)("isSealed", (function(t) { return function(e) { return !o(e) || !!t && t(e) } }))
    }, function(t, e, n) {
        var o = n(13);
        n(35)("isExtensible", (function(t) { return function(e) { return !!o(e) && (!t || t(e)) } }))
    }, function(t, e, n) {
        var o = n(0);
        o(o.S + o.F, "Object", { assign: n(121) })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Object", { is: n(122) })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Object", { setPrototypeOf: n(90).set })
    }, function(t, e, n) {
        "use strict";
        var o = n(65),
            r = {};
        r[n(15)("toStringTag")] = "z", r + "" != "[object z]" && n(23)(Object.prototype, "toString", (function() { return "[object " + o(this) + "]" }), !0)
    }, function(t, e, n) {
        var o = n(0);
        o(o.P, "Function", { bind: n(123) })
    }, function(t, e, n) {
        var o = n(19).f,
            r = Function.prototype,
            i = /^\s*function ([^ (]*)/;
        "name" in r || n(18) && o(r, "name", { configurable: !0, get: function() { try { return ("" + this).match(i)[1] } catch (t) { return "" } } })
    }, function(t, e, n) {
        "use strict";
        var o = n(13),
            r = n(50),
            i = n(15)("hasInstance"),
            a = Function.prototype;
        i in a || n(19).f(a, i, {
            value: function(t) {
                if ("function" != typeof this || !o(t)) return !1;
                if (!o(this.prototype)) return t instanceof this;
                for (; t = r(t);)
                    if (this.prototype === t) return !0;
                return !1
            }
        })
    }, function(t, e, n) {
        var o = n(0),
            r = n(125);
        o(o.G + o.F * (parseInt != r), { parseInt: r })
    }, function(t, e, n) {
        var o = n(0),
            r = n(126);
        o(o.G + o.F * (parseFloat != r), { parseFloat: r })
    }, function(t, e, n) {
        "use strict";
        var o = n(10),
            r = n(26),
            i = n(37),
            a = n(92),
            s = n(40),
            l = n(11),
            c = n(49).f,
            u = n(34).f,
            f = n(19).f,
            d = n(54).trim,
            p = o.Number,
            h = p,
            v = p.prototype,
            g = "Number" == i(n(48)(v)),
            y = "trim" in String.prototype,
            b = function(t) {
                var e = s(t, !1);
                if ("string" == typeof e && e.length > 2) {
                    var n, o, r, i = (e = y ? e.trim() : d(e, 3)).charCodeAt(0);
                    if (43 === i || 45 === i) { if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN } else if (48 === i) {
                        switch (e.charCodeAt(1)) {
                            case 66:
                            case 98:
                                o = 2, r = 49;
                                break;
                            case 79:
                            case 111:
                                o = 8, r = 55;
                                break;
                            default:
                                return +e
                        }
                        for (var a, l = e.slice(2), c = 0, u = l.length; c < u; c++)
                            if ((a = l.charCodeAt(c)) < 48 || a > r) return NaN;
                        return parseInt(l, o)
                    }
                }
                return +e
            };
        if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
            p = function(t) {
                var e = arguments.length < 1 ? 0 : t,
                    n = this;
                return n instanceof p && (g ? l((function() { v.valueOf.call(n) })) : "Number" != i(n)) ? a(new h(b(e)), n, p) : b(e)
            };
            for (var m, k = n(18) ? c(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++) r(h, m = k[x]) && !r(p, m) && f(p, m, u(h, m));
            p.prototype = v, v.constructor = p, n(23)(o, "Number", p)
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(33),
            i = n(127),
            a = n(93),
            s = 1..toFixed,
            l = Math.floor,
            c = [0, 0, 0, 0, 0, 0],
            u = "Number.toFixed: incorrect invocation!",
            f = function(t, e) { for (var n = -1, o = e; ++n < 6;) o += t * c[n], c[n] = o % 1e7, o = l(o / 1e7) },
            d = function(t) { for (var e = 6, n = 0; --e >= 0;) n += c[e], c[e] = l(n / t), n = n % t * 1e7 },
            p = function() {
                for (var t = 6, e = ""; --t >= 0;)
                    if ("" !== e || 0 === t || 0 !== c[t]) {
                        var n = String(c[t]);
                        e = "" === e ? n : e + a.call("0", 7 - n.length) + n
                    }
                return e
            },
            h = function(t, e, n) { return 0 === e ? n : e % 2 == 1 ? h(t, e - 1, n * t) : h(t * t, e / 2, n) };
        o(o.P + o.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(11)((function() { s.call({}) }))), "Number", {
            toFixed: function(t) {
                var e, n, o, s, l = i(this, u),
                    c = r(t),
                    v = "",
                    g = "0";
                if (c < 0 || c > 20) throw RangeError(u);
                if (l != l) return "NaN";
                if (l <= -1e21 || l >= 1e21) return String(l);
                if (l < 0 && (v = "-", l = -l), l > 1e-21)
                    if (n = (e = function(t) { for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096; for (; n >= 2;) e += 1, n /= 2; return e }(l * h(2, 69, 1)) - 69) < 0 ? l * h(2, -e, 1) : l / h(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                        for (f(0, n), o = c; o >= 7;) f(1e7, 0), o -= 7;
                        for (f(h(10, o, 1), 0), o = e - 1; o >= 23;) d(1 << 23), o -= 23;
                        d(1 << o), f(1, 1), d(2), g = p()
                    } else f(0, n), f(1 << -e, 0), g = p() + a.call("0", c);
                return g = c > 0 ? v + ((s = g.length) <= c ? "0." + a.call("0", c - s) + g : g.slice(0, s - c) + "." + g.slice(s - c)) : v + g
            }
        })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(11),
            i = n(127),
            a = 1..toPrecision;
        o(o.P + o.F * (r((function() { return "1" !== a.call(1, void 0) })) || !r((function() { a.call({}) }))), "Number", { toPrecision: function(t) { var e = i(this, "Number#toPrecision: incorrect invocation!"); return void 0 === t ? a.call(e) : a.call(e, t) } })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Number", { EPSILON: Math.pow(2, -52) })
    }, function(t, e, n) {
        var o = n(0),
            r = n(10).isFinite;
        o(o.S, "Number", { isFinite: function(t) { return "number" == typeof t && r(t) } })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Number", { isInteger: n(128) })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Number", { isNaN: function(t) { return t != t } })
    }, function(t, e, n) {
        var o = n(0),
            r = n(128),
            i = Math.abs;
        o(o.S, "Number", { isSafeInteger: function(t) { return r(t) && i(t) <= 9007199254740991 } })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 })
    }, function(t, e, n) {
        var o = n(0),
            r = n(126);
        o(o.S + o.F * (Number.parseFloat != r), "Number", { parseFloat: r })
    }, function(t, e, n) {
        var o = n(0),
            r = n(125);
        o(o.S + o.F * (Number.parseInt != r), "Number", { parseInt: r })
    }, function(t, e, n) {
        var o = n(0),
            r = n(129),
            i = Math.sqrt,
            a = Math.acosh;
        o(o.S + o.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", { acosh: function(t) { return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + i(t - 1) * i(t + 1)) } })
    }, function(t, e, n) {
        var o = n(0),
            r = Math.asinh;
        o(o.S + o.F * !(r && 1 / r(0) > 0), "Math", { asinh: function t(e) { return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e } })
    }, function(t, e, n) {
        var o = n(0),
            r = Math.atanh;
        o(o.S + o.F * !(r && 1 / r(-0) < 0), "Math", { atanh: function(t) { return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2 } })
    }, function(t, e, n) {
        var o = n(0),
            r = n(94);
        o(o.S, "Math", { cbrt: function(t) { return r(t = +t) * Math.pow(Math.abs(t), 1 / 3) } })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Math", { clz32: function(t) { return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32 } })
    }, function(t, e, n) {
        var o = n(0),
            r = Math.exp;
        o(o.S, "Math", { cosh: function(t) { return (r(t = +t) + r(-t)) / 2 } })
    }, function(t, e, n) {
        var o = n(0),
            r = n(95);
        o(o.S + o.F * (r != Math.expm1), "Math", { expm1: r })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Math", { fround: n(236) })
    }, function(t, e, n) {
        var o = n(94),
            r = Math.pow,
            i = r(2, -52),
            a = r(2, -23),
            s = r(2, 127) * (2 - a),
            l = r(2, -126);
        t.exports = Math.fround || function(t) {
            var e, n, r = Math.abs(t),
                c = o(t);
            return r < l ? c * (r / l / a + 1 / i - 1 / i) * l * a : (n = (e = (1 + a / i) * r) - (e - r)) > s || n != n ? c * (1 / 0) : c * n
        }
    }, function(t, e, n) {
        var o = n(0),
            r = Math.abs;
        o(o.S, "Math", { hypot: function(t, e) { for (var n, o, i = 0, a = 0, s = arguments.length, l = 0; a < s;) l < (n = r(arguments[a++])) ? (i = i * (o = l / n) * o + 1, l = n) : i += n > 0 ? (o = n / l) * o : n; return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(i) } })
    }, function(t, e, n) {
        var o = n(0),
            r = Math.imul;
        o(o.S + o.F * n(11)((function() { return -5 != r(4294967295, 5) || 2 != r.length })), "Math", {
            imul: function(t, e) {
                var n = +t,
                    o = +e,
                    r = 65535 & n,
                    i = 65535 & o;
                return 0 | r * i + ((65535 & n >>> 16) * i + r * (65535 & o >>> 16) << 16 >>> 0)
            }
        })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Math", { log10: function(t) { return Math.log(t) * Math.LOG10E } })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Math", { log1p: n(129) })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Math", { log2: function(t) { return Math.log(t) / Math.LN2 } })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Math", { sign: n(94) })
    }, function(t, e, n) {
        var o = n(0),
            r = n(95),
            i = Math.exp;
        o(o.S + o.F * n(11)((function() { return -2e-17 != !Math.sinh(-2e-17) })), "Math", { sinh: function(t) { return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2) } })
    }, function(t, e, n) {
        var o = n(0),
            r = n(95),
            i = Math.exp;
        o(o.S, "Math", {
            tanh: function(t) {
                var e = r(t = +t),
                    n = r(-t);
                return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (i(t) + i(-t))
            }
        })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Math", { trunc: function(t) { return (t > 0 ? Math.floor : Math.ceil)(t) } })
    }, function(t, e, n) {
        var o = n(0),
            r = n(47),
            i = String.fromCharCode,
            a = String.fromCodePoint;
        o(o.S + o.F * (!!a && 1 != a.length), "String", {
            fromCodePoint: function(t) {
                for (var e, n = [], o = arguments.length, a = 0; o > a;) {
                    if (e = +arguments[a++], r(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                    n.push(e < 65536 ? i(e) : i(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
                }
                return n.join("")
            }
        })
    }, function(t, e, n) {
        var o = n(0),
            r = n(28),
            i = n(16);
        o(o.S, "String", { raw: function(t) { for (var e = r(t.raw), n = i(e.length), o = arguments.length, a = [], s = 0; n > s;) a.push(String(e[s++])), s < o && a.push(String(arguments[s])); return a.join("") } })
    }, function(t, e, n) {
        "use strict";
        n(54)("trim", (function(t) { return function() { return t(this, 3) } }))
    }, function(t, e, n) {
        "use strict";
        var o = n(96)(!0);
        n(97)(String, "String", (function(t) { this._t = String(t), this._i = 0 }), (function() {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? { value: void 0, done: !0 } : (t = o(e, n), this._i += t.length, { value: t, done: !1 })
        }))
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(96)(!1);
        o(o.P, "String", { codePointAt: function(t) { return r(this, t) } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(16),
            i = n(98),
            a = "".endsWith;
        o(o.P + o.F * n(100)("endsWith"), "String", {
            endsWith: function(t) {
                var e = i(this, t, "endsWith"),
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    o = r(e.length),
                    s = void 0 === n ? o : Math.min(r(n), o),
                    l = String(t);
                return a ? a.call(e, l, s) : e.slice(s - l.length, s) === l
            }
        })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(98);
        o(o.P + o.F * n(100)("includes"), "String", { includes: function(t) { return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0) } })
    }, function(t, e, n) {
        var o = n(0);
        o(o.P, "String", { repeat: n(93) })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(16),
            i = n(98),
            a = "".startsWith;
        o(o.P + o.F * n(100)("startsWith"), "String", {
            startsWith: function(t) {
                var e = i(this, t, "startsWith"),
                    n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                    o = String(t);
                return a ? a.call(e, o, n) : e.slice(n, n + o.length) === o
            }
        })
    }, function(t, e, n) {
        "use strict";
        n(24)("anchor", (function(t) { return function(e) { return t(this, "a", "name", e) } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("big", (function(t) { return function() { return t(this, "big", "", "") } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("blink", (function(t) { return function() { return t(this, "blink", "", "") } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("bold", (function(t) { return function() { return t(this, "b", "", "") } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("fixed", (function(t) { return function() { return t(this, "tt", "", "") } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("fontcolor", (function(t) { return function(e) { return t(this, "font", "color", e) } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("fontsize", (function(t) { return function(e) { return t(this, "font", "size", e) } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("italics", (function(t) { return function() { return t(this, "i", "", "") } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("link", (function(t) { return function(e) { return t(this, "a", "href", e) } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("small", (function(t) { return function() { return t(this, "small", "", "") } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("strike", (function(t) { return function() { return t(this, "strike", "", "") } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("sub", (function(t) { return function() { return t(this, "sub", "", "") } }))
    }, function(t, e, n) {
        "use strict";
        n(24)("sup", (function(t) { return function() { return t(this, "sup", "", "") } }))
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Date", { now: function() { return (new Date).getTime() } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(22),
            i = n(40);
        o(o.P + o.F * n(11)((function() { return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function() { return 1 } }) })), "Date", {
            toJSON: function(t) {
                var e = r(this),
                    n = i(e);
                return "number" != typeof n || isFinite(n) ? e.toISOString() : null
            }
        })
    }, function(t, e, n) {
        var o = n(0),
            r = n(271);
        o(o.P + o.F * (Date.prototype.toISOString !== r), "Date", { toISOString: r })
    }, function(t, e, n) {
        "use strict";
        var o = n(11),
            r = Date.prototype.getTime,
            i = Date.prototype.toISOString,
            a = function(t) { return t > 9 ? t : "0" + t };
        t.exports = o((function() { return "0385-07-25T07:06:39.999Z" != i.call(new Date(-50000000000001)) })) || !o((function() { i.call(new Date(NaN)) })) ? function() {
            if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
            var t = this,
                e = t.getUTCFullYear(),
                n = t.getUTCMilliseconds(),
                o = e < 0 ? "-" : e > 9999 ? "+" : "";
            return o + ("00000" + Math.abs(e)).slice(o ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z"
        } : i
    }, function(t, e, n) {
        var o = Date.prototype,
            r = o.toString,
            i = o.getTime;
        new Date(NaN) + "" != "Invalid Date" && n(23)(o, "toString", (function() { var t = i.call(this); return t == t ? r.call(this) : "Invalid Date" }))
    }, function(t, e, n) {
        var o = n(15)("toPrimitive"),
            r = Date.prototype;
        o in r || n(27)(r, o, n(274))
    }, function(t, e, n) {
        "use strict";
        var o = n(12),
            r = n(40);
        t.exports = function(t) { if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint"); return r(o(this), "number" != t) }
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Array", { isArray: n(72) })
    }, function(t, e, n) {
        "use strict";
        var o = n(31),
            r = n(0),
            i = n(22),
            a = n(131),
            s = n(101),
            l = n(16),
            c = n(102),
            u = n(103);
        r(r.S + r.F * !n(73)((function(t) { Array.from(t) })), "Array", {
            from: function(t) {
                var e, n, r, f, d = i(t),
                    p = "function" == typeof this ? this : Array,
                    h = arguments.length,
                    v = h > 1 ? arguments[1] : void 0,
                    g = void 0 !== v,
                    y = 0,
                    b = u(d);
                if (g && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && s(b))
                    for (n = new p(e = l(d.length)); e > y; y++) c(n, y, g ? v(d[y], y) : d[y]);
                else
                    for (f = b.call(d), n = new p; !(r = f.next()).done; y++) c(n, y, g ? a(f, v, [r.value, y], !0) : r.value);
                return n.length = y, n
            }
        })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(102);
        o(o.S + o.F * n(11)((function() {
            function t() {}
            return !(Array.of.call(t) instanceof t)
        })), "Array", { of: function() { for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) r(n, t, arguments[t++]); return n.length = e, n } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(28),
            i = [].join;
        o(o.P + o.F * (n(63) != Object || !n(29)(i)), "Array", { join: function(t) { return i.call(r(this), void 0 === t ? "," : t) } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(89),
            i = n(37),
            a = n(47),
            s = n(16),
            l = [].slice;
        o(o.P + o.F * n(11)((function() { r && l.call(r) })), "Array", {
            slice: function(t, e) {
                var n = s(this.length),
                    o = i(this);
                if (e = void 0 === e ? n : e, "Array" == o) return l.call(this, t, e);
                for (var r = a(t, n), c = a(e, n), u = s(c - r), f = new Array(u), d = 0; d < u; d++) f[d] = "String" == o ? this.charAt(r + d) : this[r + d];
                return f
            }
        })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(32),
            i = n(22),
            a = n(11),
            s = [].sort,
            l = [1, 2, 3];
        o(o.P + o.F * (a((function() { l.sort(void 0) })) || !a((function() { l.sort(null) })) || !n(29)(s)), "Array", { sort: function(t) { return void 0 === t ? s.call(i(this)) : s.call(i(this), r(t)) } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(36)(0),
            i = n(29)([].forEach, !0);
        o(o.P + o.F * !i, "Array", { forEach: function(t) { return r(this, t, arguments[1]) } })
    }, function(t, e, n) {
        var o = n(13),
            r = n(72),
            i = n(15)("species");
        t.exports = function(t) { var e; return r(t) && ("function" != typeof(e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), o(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e }
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(36)(1);
        o(o.P + o.F * !n(29)([].map, !0), "Array", { map: function(t) { return r(this, t, arguments[1]) } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(36)(2);
        o(o.P + o.F * !n(29)([].filter, !0), "Array", { filter: function(t) { return r(this, t, arguments[1]) } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(36)(3);
        o(o.P + o.F * !n(29)([].some, !0), "Array", { some: function(t) { return r(this, t, arguments[1]) } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(36)(4);
        o(o.P + o.F * !n(29)([].every, !0), "Array", { every: function(t) { return r(this, t, arguments[1]) } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(133);
        o(o.P + o.F * !n(29)([].reduce, !0), "Array", { reduce: function(t) { return r(this, t, arguments.length, arguments[1], !1) } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(133);
        o(o.P + o.F * !n(29)([].reduceRight, !0), "Array", { reduceRight: function(t) { return r(this, t, arguments.length, arguments[1], !0) } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(70)(!1),
            i = [].indexOf,
            a = !!i && 1 / [1].indexOf(1, -0) < 0;
        o(o.P + o.F * (a || !n(29)(i)), "Array", { indexOf: function(t) { return a ? i.apply(this, arguments) || 0 : r(this, t, arguments[1]) } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(28),
            i = n(33),
            a = n(16),
            s = [].lastIndexOf,
            l = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
        o(o.P + o.F * (l || !n(29)(s)), "Array", {
            lastIndexOf: function(t) {
                if (l) return s.apply(this, arguments) || 0;
                var e = r(this),
                    n = a(e.length),
                    o = n - 1;
                for (arguments.length > 1 && (o = Math.min(o, i(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--)
                    if (o in e && e[o] === t) return o || 0;
                return -1
            }
        })
    }, function(t, e, n) {
        var o = n(0);
        o(o.P, "Array", { copyWithin: n(134) }), n(51)("copyWithin")
    }, function(t, e, n) {
        var o = n(0);
        o(o.P, "Array", { fill: n(104) }), n(51)("fill")
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(36)(5),
            i = !0;
        "find" in [] && Array(1).find((function() { i = !1 })), o(o.P + o.F * i, "Array", { find: function(t) { return r(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), n(51)("find")
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(36)(6),
            i = "findIndex",
            a = !0;
        i in [] && Array(1)[i]((function() { a = !1 })), o(o.P + o.F * a, "Array", { findIndex: function(t) { return r(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), n(51)(i)
    }, function(t, e, n) { n(56)("Array") }, function(t, e, n) {
        var o = n(10),
            r = n(92),
            i = n(19).f,
            a = n(49).f,
            s = n(99),
            l = n(74),
            c = o.RegExp,
            u = c,
            f = c.prototype,
            d = /a/g,
            p = /a/g,
            h = new c(d) !== d;
        if (n(18) && (!h || n(11)((function() { return p[n(15)("match")] = !1, c(d) != d || c(p) == p || "/a/i" != c(d, "i") })))) {
            c = function(t, e) {
                var n = this instanceof c,
                    o = s(t),
                    i = void 0 === e;
                return !n && o && t.constructor === c && i ? t : r(h ? new u(o && !i ? t.source : t, e) : u((o = t instanceof c) ? t.source : t, o && i ? l.call(t) : e), n ? this : f, c)
            };
            for (var v = function(t) { t in c || i(c, t, { configurable: !0, get: function() { return u[t] }, set: function(e) { u[t] = e } }) }, g = a(u), y = 0; g.length > y;) v(g[y++]);
            f.constructor = c, c.prototype = f, n(23)(o, "RegExp", c)
        }
        n(56)("RegExp")
    }, function(t, e, n) {
        "use strict";
        n(137);
        var o = n(12),
            r = n(74),
            i = n(18),
            a = /./.toString,
            s = function(t) { n(23)(RegExp.prototype, "toString", t, !0) };
        n(11)((function() { return "/a/b" != a.call({ source: "a", flags: "b" }) })) ? s((function() { var t = o(this); return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? r.call(t) : void 0) })) : "toString" != a.name && s((function() { return a.call(this) }))
    }, function(t, e, n) {
        "use strict";
        var o = n(12),
            r = n(16),
            i = n(107),
            a = n(75);
        n(76)("match", 1, (function(t, e, n, s) {
            return [function(n) {
                var o = t(this),
                    r = null == n ? void 0 : n[e];
                return void 0 !== r ? r.call(n, o) : new RegExp(n)[e](String(o))
            }, function(t) {
                var e = s(n, t, this);
                if (e.done) return e.value;
                var l = o(t),
                    c = String(this);
                if (!l.global) return a(l, c);
                var u = l.unicode;
                l.lastIndex = 0;
                for (var f, d = [], p = 0; null !== (f = a(l, c));) {
                    var h = String(f[0]);
                    d[p] = h, "" === h && (l.lastIndex = i(c, r(l.lastIndex), u)), p++
                }
                return 0 === p ? null : d
            }]
        }))
    }, function(t, e, n) {
        "use strict";
        var o = n(12),
            r = n(22),
            i = n(16),
            a = n(33),
            s = n(107),
            l = n(75),
            c = Math.max,
            u = Math.min,
            f = Math.floor,
            d = /\$([$&`']|\d\d?|<[^>]*>)/g,
            p = /\$([$&`']|\d\d?)/g;
        n(76)("replace", 2, (function(t, e, n, h) {
            return [function(o, r) {
                var i = t(this),
                    a = null == o ? void 0 : o[e];
                return void 0 !== a ? a.call(o, i, r) : n.call(String(i), o, r)
            }, function(t, e) {
                var r = h(n, t, this, e);
                if (r.done) return r.value;
                var f = o(t),
                    d = String(this),
                    p = "function" == typeof e;
                p || (e = String(e));
                var g = f.global;
                if (g) {
                    var y = f.unicode;
                    f.lastIndex = 0
                }
                for (var b = [];;) { var m = l(f, d); if (null === m) break; if (b.push(m), !g) break; "" === String(m[0]) && (f.lastIndex = s(d, i(f.lastIndex), y)) }
                for (var k, x = "", w = 0, S = 0; S < b.length; S++) {
                    m = b[S];
                    for (var T = String(m[0]), E = c(u(a(m.index), d.length), 0), B = [], C = 1; C < m.length; C++) B.push(void 0 === (k = m[C]) ? k : String(k));
                    var _ = m.groups;
                    if (p) {
                        var I = [T].concat(B, E, d);
                        void 0 !== _ && I.push(_);
                        var O = String(e.apply(void 0, I))
                    } else O = v(T, d, E, B, _, e);
                    E >= w && (x += d.slice(w, E) + O, w = E + T.length)
                }
                return x + d.slice(w)
            }];

            function v(t, e, o, i, a, s) {
                var l = o + t.length,
                    c = i.length,
                    u = p;
                return void 0 !== a && (a = r(a), u = d), n.call(s, u, (function(n, r) {
                    var s;
                    switch (r.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return e.slice(0, o);
                        case "'":
                            return e.slice(l);
                        case "<":
                            s = a[r.slice(1, -1)];
                            break;
                        default:
                            var u = +r;
                            if (0 === u) return n;
                            if (u > c) { var d = f(u / 10); return 0 === d ? n : d <= c ? void 0 === i[d - 1] ? r.charAt(1) : i[d - 1] + r.charAt(1) : n }
                            s = i[u - 1]
                    }
                    return void 0 === s ? "" : s
                }))
            }
        }))
    }, function(t, e, n) {
        "use strict";
        var o = n(12),
            r = n(122),
            i = n(75);
        n(76)("search", 1, (function(t, e, n, a) {
            return [function(n) {
                var o = t(this),
                    r = null == n ? void 0 : n[e];
                return void 0 !== r ? r.call(n, o) : new RegExp(n)[e](String(o))
            }, function(t) {
                var e = a(n, t, this);
                if (e.done) return e.value;
                var s = o(t),
                    l = String(this),
                    c = s.lastIndex;
                r(c, 0) || (s.lastIndex = 0);
                var u = i(s, l);
                return r(s.lastIndex, c) || (s.lastIndex = c), null === u ? -1 : u.index
            }]
        }))
    }, function(t, e, n) {
        "use strict";
        var o = n(99),
            r = n(12),
            i = n(66),
            a = n(107),
            s = n(16),
            l = n(75),
            c = n(106),
            u = n(11),
            f = Math.min,
            d = [].push,
            p = "length",
            h = !u((function() { RegExp(4294967295, "y") }));
        n(76)("split", 2, (function(t, e, n, u) {
            var v;
            return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function(t, e) {
                var r = String(this);
                if (void 0 === t && 0 === e) return [];
                if (!o(t)) return n.call(r, t, e);
                for (var i, a, s, l = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, h = void 0 === e ? 4294967295 : e >>> 0, v = new RegExp(t.source, u + "g");
                    (i = c.call(v, r)) && !((a = v.lastIndex) > f && (l.push(r.slice(f, i.index)), i[p] > 1 && i.index < r[p] && d.apply(l, i.slice(1)), s = i[0][p], f = a, l[p] >= h));) v.lastIndex === i.index && v.lastIndex++;
                return f === r[p] ? !s && v.test("") || l.push("") : l.push(r.slice(f)), l[p] > h ? l.slice(0, h) : l
            } : "0".split(void 0, 0)[p] ? function(t, e) { return void 0 === t && 0 === e ? [] : n.call(this, t, e) } : n, [function(n, o) {
                var r = t(this),
                    i = null == n ? void 0 : n[e];
                return void 0 !== i ? i.call(n, r, o) : v.call(String(r), n, o)
            }, function(t, e) {
                var o = u(v, t, this, e, v !== n);
                if (o.done) return o.value;
                var c = r(t),
                    d = String(this),
                    p = i(c, RegExp),
                    g = c.unicode,
                    y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (h ? "y" : "g"),
                    b = new p(h ? c : "^(?:" + c.source + ")", y),
                    m = void 0 === e ? 4294967295 : e >>> 0;
                if (0 === m) return [];
                if (0 === d.length) return null === l(b, d) ? [d] : [];
                for (var k = 0, x = 0, w = []; x < d.length;) {
                    b.lastIndex = h ? x : 0;
                    var S, T = l(b, h ? d : d.slice(x));
                    if (null === T || (S = f(s(b.lastIndex + (h ? 0 : x)), d.length)) === k) x = a(d, x, g);
                    else {
                        if (w.push(d.slice(k, x)), w.length === m) return w;
                        for (var E = 1; E <= T.length - 1; E++)
                            if (w.push(T[E]), w.length === m) return w;
                        x = k = S
                    }
                }
                return w.push(d.slice(k)), w
            }]
        }))
    }, function(t, e, n) {
        var o = n(10),
            r = n(108).set,
            i = o.MutationObserver || o.WebKitMutationObserver,
            a = o.process,
            s = o.Promise,
            l = "process" == n(37)(a);
        t.exports = function() {
            var t, e, n, c = function() {
                var o, r;
                for (l && (o = a.domain) && o.exit(); t;) { r = t.fn, t = t.next; try { r() } catch (o) { throw t ? n() : e = void 0, o } }
                e = void 0, o && o.enter()
            };
            if (l) n = function() { a.nextTick(c) };
            else if (!i || o.navigator && o.navigator.standalone)
                if (s && s.resolve) {
                    var u = s.resolve(void 0);
                    n = function() { u.then(c) }
                } else n = function() { r.call(o, c) };
            else {
                var f = !0,
                    d = document.createTextNode("");
                new i(c).observe(d, { characterData: !0 }), n = function() { d.data = f = !f }
            }
            return function(o) {
                var r = { fn: o, next: void 0 };
                e && (e.next = r), t || (t = r, n()), e = r
            }
        }
    }, function(t, e) { t.exports = function(t) { try { return { e: !1, v: t() } } catch (t) { return { e: !0, v: t } } } }, function(t, e, n) {
        "use strict";
        var o = n(141),
            r = n(52);
        t.exports = n(79)("Map", (function(t) { return function() { return t(this, arguments.length > 0 ? arguments[0] : void 0) } }), { get: function(t) { var e = o.getEntry(r(this, "Map"), t); return e && e.v }, set: function(t, e) { return o.def(r(this, "Map"), 0 === t ? 0 : t, e) } }, o, !0)
    }, function(t, e, n) {
        "use strict";
        var o = n(141),
            r = n(52);
        t.exports = n(79)("Set", (function(t) { return function() { return t(this, arguments.length > 0 ? arguments[0] : void 0) } }), { add: function(t) { return o.def(r(this, "Set"), t = 0 === t ? 0 : t, t) } }, o)
    }, function(t, e, n) {
        "use strict";
        var o, r = n(10),
            i = n(36)(0),
            a = n(23),
            s = n(41),
            l = n(121),
            c = n(142),
            u = n(13),
            f = n(52),
            d = n(52),
            p = !r.ActiveXObject && "ActiveXObject" in r,
            h = s.getWeak,
            v = Object.isExtensible,
            g = c.ufstore,
            y = function(t) { return function() { return t(this, arguments.length > 0 ? arguments[0] : void 0) } },
            b = { get: function(t) { if (u(t)) { var e = h(t); return !0 === e ? g(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0 } }, set: function(t, e) { return c.def(f(this, "WeakMap"), t, e) } },
            m = t.exports = n(79)("WeakMap", y, b, c, !0, !0);
        d && p && (l((o = c.getConstructor(y, "WeakMap")).prototype, b), s.NEED = !0, i(["delete", "has", "get", "set"], (function(t) {
            var e = m.prototype,
                n = e[t];
            a(e, t, (function(e, r) { if (u(e) && !v(e)) { this._f || (this._f = new o); var i = this._f[t](e, r); return "set" == t ? this : i } return n.call(this, e, r) }))
        })))
    }, function(t, e, n) {
        "use strict";
        var o = n(142),
            r = n(52);
        n(79)("WeakSet", (function(t) { return function() { return t(this, arguments.length > 0 ? arguments[0] : void 0) } }), { add: function(t) { return o.def(r(this, "WeakSet"), t, !0) } }, o, !1, !0)
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(80),
            i = n(109),
            a = n(12),
            s = n(47),
            l = n(16),
            c = n(13),
            u = n(10).ArrayBuffer,
            f = n(66),
            d = i.ArrayBuffer,
            p = i.DataView,
            h = r.ABV && u.isView,
            v = d.prototype.slice,
            g = r.VIEW;
        o(o.G + o.W + o.F * (u !== d), { ArrayBuffer: d }), o(o.S + o.F * !r.CONSTR, "ArrayBuffer", { isView: function(t) { return h && h(t) || c(t) && g in t } }), o(o.P + o.U + o.F * n(11)((function() { return !new d(2).slice(1, void 0).byteLength })), "ArrayBuffer", { slice: function(t, e) { if (void 0 !== v && void 0 === e) return v.call(a(this), t); for (var n = a(this).byteLength, o = s(t, n), r = s(void 0 === e ? n : e, n), i = new(f(this, d))(l(r - o)), c = new p(this), u = new p(i), h = 0; o < r;) u.setUint8(h++, c.getUint8(o++)); return i } }), n(56)("ArrayBuffer")
    }, function(t, e, n) {
        var o = n(0);
        o(o.G + o.W + o.F * !n(80).ABV, { DataView: n(109).DataView })
    }, function(t, e, n) { n(39)("Int8", 1, (function(t) { return function(e, n, o) { return t(this, e, n, o) } })) }, function(t, e, n) { n(39)("Uint8", 1, (function(t) { return function(e, n, o) { return t(this, e, n, o) } })) }, function(t, e, n) { n(39)("Uint8", 1, (function(t) { return function(e, n, o) { return t(this, e, n, o) } }), !0) }, function(t, e, n) { n(39)("Int16", 2, (function(t) { return function(e, n, o) { return t(this, e, n, o) } })) }, function(t, e, n) { n(39)("Uint16", 2, (function(t) { return function(e, n, o) { return t(this, e, n, o) } })) }, function(t, e, n) { n(39)("Int32", 4, (function(t) { return function(e, n, o) { return t(this, e, n, o) } })) }, function(t, e, n) { n(39)("Uint32", 4, (function(t) { return function(e, n, o) { return t(this, e, n, o) } })) }, function(t, e, n) { n(39)("Float32", 4, (function(t) { return function(e, n, o) { return t(this, e, n, o) } })) }, function(t, e, n) { n(39)("Float64", 8, (function(t) { return function(e, n, o) { return t(this, e, n, o) } })) }, function(t, e, n) {
        var o = n(0),
            r = n(32),
            i = n(12),
            a = (n(10).Reflect || {}).apply,
            s = Function.apply;
        o(o.S + o.F * !n(11)((function() { a((function() {})) })), "Reflect", {
            apply: function(t, e, n) {
                var o = r(t),
                    l = i(n);
                return a ? a(o, e, l) : s.call(o, e, l)
            }
        })
    }, function(t, e, n) {
        var o = n(0),
            r = n(48),
            i = n(32),
            a = n(12),
            s = n(13),
            l = n(11),
            c = n(123),
            u = (n(10).Reflect || {}).construct,
            f = l((function() {
                function t() {}
                return !(u((function() {}), [], t) instanceof t)
            })),
            d = !l((function() { u((function() {})) }));
        o(o.S + o.F * (f || d), "Reflect", {
            construct: function(t, e) {
                i(t), a(e);
                var n = arguments.length < 3 ? t : i(arguments[2]);
                if (d && !f) return u(t, e, n);
                if (t == n) {
                    switch (e.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e[0]);
                        case 2:
                            return new t(e[0], e[1]);
                        case 3:
                            return new t(e[0], e[1], e[2]);
                        case 4:
                            return new t(e[0], e[1], e[2], e[3])
                    }
                    var o = [null];
                    return o.push.apply(o, e), new(c.apply(t, o))
                }
                var l = n.prototype,
                    p = r(s(l) ? l : Object.prototype),
                    h = Function.apply.call(t, p, e);
                return s(h) ? h : p
            }
        })
    }, function(t, e, n) {
        var o = n(19),
            r = n(0),
            i = n(12),
            a = n(40);
        r(r.S + r.F * n(11)((function() { Reflect.defineProperty(o.f({}, 1, { value: 1 }), 1, { value: 2 }) })), "Reflect", { defineProperty: function(t, e, n) { i(t), e = a(e, !0), i(n); try { return o.f(t, e, n), !0 } catch (t) { return !1 } } })
    }, function(t, e, n) {
        var o = n(0),
            r = n(34).f,
            i = n(12);
        o(o.S, "Reflect", { deleteProperty: function(t, e) { var n = r(i(t), e); return !(n && !n.configurable) && delete t[e] } })
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(12),
            i = function(t) { this._t = r(t), this._i = 0; var e, n = this._k = []; for (e in t) n.push(e) };
        n(130)(i, "Object", (function() {
            var t, e = this._k;
            do { if (this._i >= e.length) return { value: void 0, done: !0 } } while (!((t = e[this._i++]) in this._t));
            return { value: t, done: !1 }
        })), o(o.S, "Reflect", { enumerate: function(t) { return new i(t) } })
    }, function(t, e, n) {
        var o = n(34),
            r = n(50),
            i = n(26),
            a = n(0),
            s = n(13),
            l = n(12);
        a(a.S, "Reflect", { get: function t(e, n) { var a, c, u = arguments.length < 3 ? e : arguments[2]; return l(e) === u ? e[n] : (a = o.f(e, n)) ? i(a, "value") ? a.value : void 0 !== a.get ? a.get.call(u) : void 0 : s(c = r(e)) ? t(c, n, u) : void 0 } })
    }, function(t, e, n) {
        var o = n(34),
            r = n(0),
            i = n(12);
        r(r.S, "Reflect", { getOwnPropertyDescriptor: function(t, e) { return o.f(i(t), e) } })
    }, function(t, e, n) {
        var o = n(0),
            r = n(50),
            i = n(12);
        o(o.S, "Reflect", { getPrototypeOf: function(t) { return r(i(t)) } })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Reflect", { has: function(t, e) { return e in t } })
    }, function(t, e, n) {
        var o = n(0),
            r = n(12),
            i = Object.isExtensible;
        o(o.S, "Reflect", { isExtensible: function(t) { return r(t), !i || i(t) } })
    }, function(t, e, n) {
        var o = n(0);
        o(o.S, "Reflect", { ownKeys: n(144) })
    }, function(t, e, n) {
        var o = n(0),
            r = n(12),
            i = Object.preventExtensions;
        o(o.S, "Reflect", { preventExtensions: function(t) { r(t); try { return i && i(t), !0 } catch (t) { return !1 } } })
    }, function(t, e, n) {
        var o = n(19),
            r = n(34),
            i = n(50),
            a = n(26),
            s = n(0),
            l = n(43),
            c = n(12),
            u = n(13);
        s(s.S, "Reflect", {
            set: function t(e, n, s) {
                var f, d, p = arguments.length < 4 ? e : arguments[3],
                    h = r.f(c(e), n);
                if (!h) {
                    if (u(d = i(e))) return t(d, n, s, p);
                    h = l(0)
                }
                if (a(h, "value")) {
                    if (!1 === h.writable || !u(p)) return !1;
                    if (f = r.f(p, n)) {
                        if (f.get || f.set || !1 === f.writable) return !1;
                        f.value = s, o.f(p, n, f)
                    } else o.f(p, n, l(0, s));
                    return !0
                }
                return void 0 !== h.set && (h.set.call(p, s), !0)
            }
        })
    }, function(t, e, n) {
        var o = n(0),
            r = n(90);
        r && o(o.S, "Reflect", { setPrototypeOf: function(t, e) { r.check(t, e); try { return r.set(t, e), !0 } catch (t) { return !1 } } })
    }, function(t, e, n) { n(334), t.exports = n(17).Array.includes }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(70)(!0);
        o(o.P, "Array", { includes: function(t) { return r(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), n(51)("includes")
    }, function(t, e, n) { n(336), t.exports = n(17).Array.flatMap }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(337),
            i = n(22),
            a = n(16),
            s = n(32),
            l = n(132);
        o(o.P, "Array", { flatMap: function(t) { var e, n, o = i(this); return s(t), e = a(o.length), n = l(o, 0), r(n, o, o, e, 0, 1, t, arguments[1]), n } }), n(51)("flatMap")
    }, function(t, e, n) {
        "use strict";
        var o = n(72),
            r = n(13),
            i = n(16),
            a = n(31),
            s = n(15)("isConcatSpreadable");
        t.exports = function t(e, n, l, c, u, f, d, p) {
            for (var h, v, g = u, y = 0, b = !!d && a(d, p, 3); y < c;) {
                if (y in l) {
                    if (h = b ? b(l[y], y, n) : l[y], v = !1, r(h) && (v = void 0 !== (v = h[s]) ? !!v : o(h)), v && f > 0) g = t(e, n, h, i(h.length), g, f - 1) - 1;
                    else {
                        if (g >= 9007199254740991) throw TypeError();
                        e[g] = h
                    }
                    g++
                }
                y++
            }
            return g
        }
    }, function(t, e, n) { n(339), t.exports = n(17).String.padStart }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(145),
            i = n(78),
            a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
        o(o.P + o.F * a, "String", { padStart: function(t) { return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0) } })
    }, function(t, e, n) { n(341), t.exports = n(17).String.padEnd }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(145),
            i = n(78),
            a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
        o(o.P + o.F * a, "String", { padEnd: function(t) { return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1) } })
    }, function(t, e, n) { n(343), t.exports = n(17).String.trimLeft }, function(t, e, n) {
        "use strict";
        n(54)("trimLeft", (function(t) { return function() { return t(this, 1) } }), "trimStart")
    }, function(t, e, n) { n(345), t.exports = n(17).String.trimRight }, function(t, e, n) {
        "use strict";
        n(54)("trimRight", (function(t) { return function() { return t(this, 2) } }), "trimEnd")
    }, function(t, e, n) { n(347), t.exports = n(86).f("asyncIterator") }, function(t, e, n) { n(117)("asyncIterator") }, function(t, e, n) { n(349), t.exports = n(17).Object.getOwnPropertyDescriptors }, function(t, e, n) {
        var o = n(0),
            r = n(144),
            i = n(28),
            a = n(34),
            s = n(102);
        o(o.S, "Object", { getOwnPropertyDescriptors: function(t) { for (var e, n, o = i(t), l = a.f, c = r(o), u = {}, f = 0; c.length > f;) void 0 !== (n = l(o, e = c[f++])) && s(u, e, n); return u } })
    }, function(t, e, n) { n(351), t.exports = n(17).Object.values }, function(t, e, n) {
        var o = n(0),
            r = n(146)(!1);
        o(o.S, "Object", { values: function(t) { return r(t) } })
    }, function(t, e, n) { n(353), t.exports = n(17).Object.entries }, function(t, e, n) {
        var o = n(0),
            r = n(146)(!0);
        o(o.S, "Object", { entries: function(t) { return r(t) } })
    }, function(t, e, n) {
        "use strict";
        n(138), n(355), t.exports = n(17).Promise.finally
    }, function(t, e, n) {
        "use strict";
        var o = n(0),
            r = n(17),
            i = n(10),
            a = n(66),
            s = n(140);
        o(o.P + o.R, "Promise", {
            finally: function(t) {
                var e = a(this, r.Promise || i.Promise),
                    n = "function" == typeof t;
                return this.then(n ? function(n) { return s(e, t()).then((function() { return n })) } : t, n ? function(n) { return s(e, t()).then((function() { throw n })) } : t)
            }
        })
    }, function(t, e, n) { n(357), n(358), n(359), t.exports = n(17) }, function(t, e, n) {
        var o = n(10),
            r = n(0),
            i = n(78),
            a = [].slice,
            s = /MSIE .\./.test(i),
            l = function(t) {
                return function(e, n) {
                    var o = arguments.length > 2,
                        r = !!o && a.call(arguments, 2);
                    return t(o ? function() {
                        ("function" == typeof e ? e : Function(e)).apply(this, r)
                    } : e, n)
                }
            };
        r(r.G + r.B + r.F * s, { setTimeout: l(o.setTimeout), setInterval: l(o.setInterval) })
    }, function(t, e, n) {
        var o = n(0),
            r = n(108);
        o(o.G + o.B, { setImmediate: r.set, clearImmediate: r.clear })
    }, function(t, e, n) {
        for (var o = n(105), r = n(46), i = n(23), a = n(10), s = n(27), l = n(55), c = n(15), u = c("iterator"), f = c("toStringTag"), d = l.Array, p = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, h = r(p), v = 0; v < h.length; v++) {
            var g, y = h[v],
                b = p[y],
                m = a[y],
                k = m && m.prototype;
            if (k && (k[u] || s(k, u, d), k[f] || s(k, f, y), l[y] = d, b))
                for (g in o) k[g] || i(k, g, o[g], !0)
        }
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(30), n(2), n(3), n(364), n(366), n(367), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u) {
            "use strict";
            var f = n(8),
                d = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = d(r), i = d(i), a = d(a), c = d(c), u = f(u);
            var p = function() {
                function t(e) {
                    var n = this;
                    (0, i.default)(this, t);
                    var o = function() {};
                    u.isObject(e) && u.isFunction(e.onReady) && (o = e.onReady);
                    var r = new c.default(e);
                    this.isReady = r.isReady.then((function() { n.exportAPI(r), o() }))
                }
                return (0, a.default)(t, [{
                    key: "exportAPI",
                    value: function(t) {
                        var e = this;
                        ["configuration"].forEach((function(n) { e[n] = t[n] })), this.destroy = function() {
                            for (var n in Object.values(t.moduleInstances).forEach((function(t) { u.isFunction(t.destroy) && t.destroy(), t.listeners.removeAll() })), t = null, e) Object.prototype.hasOwnProperty.call(e, n) && delete e[n];
                            Object.setPrototypeOf(e, null)
                        }, Object.setPrototypeOf(this, t.moduleInstances.API.methods), delete this.exportAPI, Object.entries({ blocks: { clear: "clear", render: "render" }, caret: { focus: "focus" }, events: { on: "on", off: "off", emit: "emit" }, saver: { save: "save" } }).forEach((function(n) {
                            var o = (0, r.default)(n, 2),
                                i = o[0],
                                a = o[1];
                            Object.entries(a).forEach((function(n) {
                                var o = (0, r.default)(n, 2),
                                    a = o[0],
                                    s = o[1];
                                e[s] = t.moduleInstances.API.methods[i][a]
                            }))
                        }))
                    }
                }], [{ key: "version", get: function() { return "2.25.0" } }]), t
            }();
            o.default = p, p.displayName = "EditorJS", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e) { t.exports = function(t) { if (Array.isArray(t)) return t } }, function(t, e) {
        t.exports = function(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [],
                    o = !0,
                    r = !1,
                    i = void 0;
                try { for (var a, s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0); } catch (t) { r = !0, i = t } finally { try { o || null == s.return || s.return() } finally { if (r) throw i } }
                return n
            }
        }
    }, function(t, e) { t.exports = function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } }, function(t, e, n) {
        (e = t.exports = function(...t) { return r(...t) }).__esModule = !0;
        const o = n(365),
            r = o.default;
        Object.assign(e, o)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function() {}, e.revert = function() {}
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [], void 0 === (i = "function" == typeof(o = function() {
            "use strict";
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) { for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;); return n > -1 }), Element.prototype.closest || (Element.prototype.closest = function(t) {
                var e = this;
                if (!document.documentElement.contains(e)) return null;
                do {
                    if (e.matches(t)) return e;
                    e = e.parentElement || e.parentNode
                } while (null !== e);
                return null
            }), Element.prototype.prepend || (Element.prototype.prepend = function(t) {
                var e = document.createDocumentFragment();
                Array.isArray(t) || (t = [t]), t.forEach((function(t) {
                    var n = t instanceof Node;
                    e.appendChild(n ? t : document.createTextNode(t))
                })), this.insertBefore(e, this.firstChild)
            }), Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(t) {
                t = 0 === arguments.length || !!t;
                var e = this.parentNode,
                    n = window.getComputedStyle(e, null),
                    o = parseInt(n.getPropertyValue("border-top-width")),
                    r = parseInt(n.getPropertyValue("border-left-width")),
                    i = this.offsetTop - e.offsetTop < e.scrollTop,
                    a = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight,
                    s = this.offsetLeft - e.offsetLeft < e.scrollLeft,
                    l = this.offsetLeft - e.offsetLeft + this.clientWidth - r > e.scrollLeft + e.clientWidth,
                    c = i && !a;
                (i || a) && t && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (s || l) && t && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - r + this.clientWidth / 2), (i || a || s || l) && !t && this.scrollIntoView(c)
            })
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(14), n(7), n(60), n(151), n(81)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d) {
            "use strict";
            var p = n(8),
                h = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = h(r), i = h(i), a = h(a), s = h(s), l = h(l), c = p(c), u = h(u), d = h(d);
            var v = n(375),
                g = [];
            v.keys().forEach((function(t) { t.match(/^\.\/[^_][\w/]*\.([tj])s$/) && g.push(v(t)) }));
            var y = function() {
                function t(e) {
                    var n, o, s = this;
                    (0, a.default)(this, t), this.moduleInstances = {}, this.eventsDispatcher = new d.default, this.isReady = new Promise((function(t, e) { n = t, o = e })), Promise.resolve().then((0, i.default)(r.default.mark((function t() {
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return s.configuration = e, t.next = 3, s.validate();
                                case 3:
                                    return t.next = 5, s.init();
                                case 5:
                                    return t.next = 7, s.start();
                                case 7:
                                    c.logLabeled("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "log", "", "color: #E24A75"), setTimeout((0, i.default)(r.default.mark((function t() {
                                        var e, o, i;
                                        return r.default.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, s.render();
                                                case 2:
                                                    s.configuration.autofocus && (e = s.moduleInstances, o = e.BlockManager, (i = e.Caret).setToBlock(o.blocks[0], i.positions.START), o.highlightCurrentNode()), s.moduleInstances.UI.removeLoader(), n();
                                                case 5:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    }))), 500);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).catch((function(t) { c.log("Editor.js is not ready because of ".concat(t), "error"), o(t) }))
                }
                var e, n;
                return (0, s.default)(t, [{
                    key: "validate",
                    value: (n = (0, i.default)(r.default.mark((function t() {
                        var e, n, o;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = this.config, n = e.holderId, o = e.holder, !n || !o) { t.next = 3; break }
                                    throw Error("«holderId» and «holder» param can't assign at the same time.");
                                case 3:
                                    if (!c.isString(o) || l.default.get(o)) { t.next = 5; break }
                                    throw Error("element with ID «".concat(o, "» is missing. Pass correct holder's ID."));
                                case 5:
                                    if (!o || !c.isObject(o) || l.default.isElement(o)) { t.next = 7; break }
                                    throw Error("«holder» value must be an Element node");
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() { return n.apply(this, arguments) })
                }, { key: "init", value: function() { this.constructModules(), this.configureModules() } }, {
                    key: "start",
                    value: (e = (0, i.default)(r.default.mark((function t() {
                        var e, n = this;
                        return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = ["Tools", "UI", "BlockManager", "Paste", "BlockSelection", "RectangleSelection", "CrossBlockSelection", "ReadOnly"], t.next = 3, e.reduce((function(t, e) {
                                        return t.then((0, i.default)(r.default.mark((function t() {
                                            return r.default.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.prev = 0, t.next = 3, n.moduleInstances[e].prepare();
                                                    case 3:
                                                        t.next = 10;
                                                        break;
                                                    case 5:
                                                        if (t.prev = 5, t.t0 = t.catch(0), !(t.t0 instanceof f.CriticalError)) { t.next = 9; break }
                                                        throw new Error(t.t0.message);
                                                    case 9:
                                                        c.log("Module ".concat(e, " was skipped because of %o"), "warn", t.t0);
                                                    case 10:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t, null, [
                                                [0, 5]
                                            ])
                                        }))))
                                    }), Promise.resolve());
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), function() { return e.apply(this, arguments) })
                }, { key: "render", value: function() { return this.moduleInstances.Renderer.render(this.config.data.blocks) } }, {
                    key: "constructModules",
                    value: function() {
                        var t = this;
                        g.forEach((function(e) { var n = c.isFunction(e) ? e : e.default; try { t.moduleInstances[n.displayName] = new n({ config: t.configuration, eventsDispatcher: t.eventsDispatcher }) } catch (t) { c.log("Module ".concat(n.displayName, " skipped because"), "error", t) } }))
                    }
                }, { key: "configureModules", value: function() { for (var t in this.moduleInstances) Object.prototype.hasOwnProperty.call(this.moduleInstances, t) && (this.moduleInstances[t].state = this.getModulesDiff(t)) } }, { key: "getModulesDiff", value: function(t) { var e = {}; for (var n in this.moduleInstances) n !== t && (e[n] = this.moduleInstances[n]); return e } }, {
                    key: "configuration",
                    set: function(t) {
                        var e, n;
                        c.isObject(t) ? this.config = Object.assign({}, t) : this.config = { holder: t }, c.deprecationAssert(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), null == this.config.holder && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = c.LogLevels.VERBOSE), c.setLogLevel(this.config.logLevel), c.deprecationAssert(Boolean(this.config.initialBlock), "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = void 0 !== this.config.minHeight ? this.config.minHeight : 300;
                        var o = { type: this.config.defaultBlock, data: {} };
                        this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || { p: !0, b: !0, a: !0 }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || function() {}, this.config.onChange = this.config.onChange || function() {}, this.config.inlineToolbar = void 0 === this.config.inlineToolbar || this.config.inlineToolbar, !c.isEmpty(this.config.data) && this.config.data.blocks && 0 !== this.config.data.blocks.length || (this.config.data = { blocks: [o] }), this.config.readOnly = this.config.readOnly || !1, (null === (e = this.config.i18n) || void 0 === e ? void 0 : e.messages) && u.default.setDictionary(this.config.i18n.messages), this.config.i18n.direction = (null === (n = this.config.i18n) || void 0 === n ? void 0 : n.direction) || "ltr"
                    },
                    get: function() { return this.config }
                }]), t
            }();
            o.default = y, y.displayName = "Core", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o = n(149);
        t.exports = function(t) { if (Array.isArray(t)) return o(t) }
    }, function(t, e) { t.exports = function(t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) } }, function(t, e) { t.exports = function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } }, function(t, e) { t.exports = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } }, function(t, e) { t.exports = function(t) { return -1 !== Function.toString.call(t).indexOf("[native code]") } }, function(t, e, n) {
        var o = n(110),
            r = n(374);

        function i(e, n, a) {
            return r() ? t.exports = i = Reflect.construct : t.exports = i = function(t, e, n) {
                var r = [null];
                r.push.apply(r, e);
                var i = new(Function.bind.apply(t, r));
                return n && o(i, n.prototype), i
            }, i.apply(null, arguments)
        }
        t.exports = i
    }, function(t, e) { t.exports = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } } }, function(t, e, n) {
        var o = { "./api": 82, "./api/": 82, "./api/blocks": 154, "./api/blocks.ts": 154, "./api/caret": 155, "./api/caret.ts": 155, "./api/events": 156, "./api/events.ts": 156, "./api/i18n": 157, "./api/i18n.ts": 157, "./api/index": 82, "./api/index.ts": 82, "./api/inlineToolbar": 158, "./api/inlineToolbar.ts": 158, "./api/listeners": 159, "./api/listeners.ts": 159, "./api/notifier": 160, "./api/notifier.ts": 160, "./api/readonly": 161, "./api/readonly.ts": 161, "./api/sanitizer": 162, "./api/sanitizer.ts": 162, "./api/saver": 163, "./api/saver.ts": 163, "./api/selection": 164, "./api/selection.ts": 164, "./api/styles": 165, "./api/styles.ts": 165, "./api/toolbar": 166, "./api/toolbar.ts": 166, "./api/tooltip": 167, "./api/tooltip.ts": 167, "./api/ui": 168, "./api/ui.ts": 168, "./blockEvents": 169, "./blockEvents.ts": 169, "./blockManager": 170, "./blockManager.ts": 170, "./blockSelection": 171, "./blockSelection.ts": 171, "./caret": 172, "./caret.ts": 172, "./crossBlockSelection": 173, "./crossBlockSelection.ts": 173, "./dragNDrop": 174, "./dragNDrop.ts": 174, "./modificationsObserver": 175, "./modificationsObserver.ts": 175, "./paste": 176, "./paste.ts": 176, "./readonly": 177, "./readonly.ts": 177, "./rectangleSelection": 178, "./rectangleSelection.ts": 178, "./renderer": 179, "./renderer.ts": 179, "./saver": 180, "./saver.ts": 180, "./toolbar": 83, "./toolbar/": 83, "./toolbar/blockSettings": 181, "./toolbar/blockSettings.ts": 181, "./toolbar/conversion": 182, "./toolbar/conversion.ts": 182, "./toolbar/index": 83, "./toolbar/index.ts": 83, "./toolbar/inline": 183, "./toolbar/inline.ts": 183, "./tools": 184, "./tools.ts": 184, "./ui": 186, "./ui.ts": 186 };

        function r(t) { var e = i(t); return n(e) }

        function i(t) { if (!n.o(o, t)) { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e } return o[t] }
        r.keys = function() { return Object.keys(o) }, r.resolve = i, t.exports = r, r.id = 375
    }, function(t, e, n) {
        var o = n(4);
        t.exports = function(t, e) { for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = o(t));); return t }
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(378)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var l = function() {
                function t() {
                    (0, r.default)(this, t)
                }
                return (0, i.default)(t, [{ key: "show", value: function(t) { a.default.show(t) } }]), t
            }();
            o.default = l, l.displayName = "Notifier", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        window,
        t.exports = function(t) {
            var e = {};

            function n(o) { if (e[o]) return e[o].exports; var r = e[o] = { i: o, l: !1, exports: {} }; return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports }
            return n.m = t, n.c = e, n.d = function(t, e, o) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) n.d(o, r, function(e) { return t[e] }.bind(null, r));
                return o
            }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "/", n(n.s = 0)
        }([function(t, e, n) {
            "use strict";
            n(1), t.exports = function() {
                var t = n(6),
                    e = null;
                return {
                    show: function(n) {
                        if (n.message) {
                            ! function() {
                                if (e) return !0;
                                e = t.getWrapper(), document.body.appendChild(e)
                            }();
                            var o = null,
                                r = n.time || 8e3;
                            switch (n.type) {
                                case "confirm":
                                    o = t.confirm(n);
                                    break;
                                case "prompt":
                                    o = t.prompt(n);
                                    break;
                                default:
                                    o = t.alert(n), window.setTimeout((function() { o.remove() }), r)
                            }
                            e.appendChild(o), o.classList.add("cdx-notify--bounce-in")
                        }
                    }
                }
            }()
        }, function(t, e, n) {
            var o = n(2);
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]), n(4)(o, { hmr: !0, transform: void 0, insertInto: void 0 }), o.locals && (t.exports = o.locals)
        }, function(t, e, n) {
            (t.exports = n(3)(!1)).push([t.i, '.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}', ""])
        }, function(t, e) {
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var n = function(t, e) {
                            var n, o = t[1] || "",
                                r = t[3];
                            if (!r) return o;
                            if (e && "function" == typeof btoa) {
                                var i = (n = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                    a = r.sources.map((function(t) { return "/*# sourceURL=" + r.sourceRoot + t + " */" }));
                                return [o].concat(a).concat([i]).join("\n")
                            }
                            return [o].join("\n")
                        }(e, t);
                        return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                    })).join("")
                }, e.i = function(t, n) {
                    "string" == typeof t && (t = [
                        [null, t, ""]
                    ]);
                    for (var o = {}, r = 0; r < this.length; r++) { var i = this[r][0]; "number" == typeof i && (o[i] = !0) }
                    for (r = 0; r < t.length; r++) { var a = t[r]; "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a)) }
                }, e
            }
        }, function(t, e, n) {
            var o, r, i = {},
                a = (o = function() { return window && document && document.all && !window.atob }, function() { return void 0 === r && (r = o.apply(this, arguments)), r }),
                s = function(t) {
                    var e = {};
                    return function(t) {
                        if ("function" == typeof t) return t();
                        if (void 0 === e[t]) {
                            var n = function(t) { return document.querySelector(t) }.call(this, t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (t) { n = null }
                            e[t] = n
                        }
                        return e[t]
                    }
                }(),
                l = null,
                c = 0,
                u = [],
                f = n(5);

            function d(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        r = i[o.id];
                    if (r) { r.refs++; for (var a = 0; a < r.parts.length; a++) r.parts[a](o.parts[a]); for (; a < o.parts.length; a++) r.parts.push(b(o.parts[a], e)) } else {
                        var s = [];
                        for (a = 0; a < o.parts.length; a++) s.push(b(o.parts[a], e));
                        i[o.id] = { id: o.id, refs: 1, parts: s }
                    }
                }
            }

            function p(t, e) {
                for (var n = [], o = {}, r = 0; r < t.length; r++) {
                    var i = t[r],
                        a = e.base ? i[0] + e.base : i[0],
                        s = { css: i[1], media: i[2], sourceMap: i[3] };
                    o[a] ? o[a].parts.push(s) : n.push(o[a] = { id: a, parts: [s] })
                }
                return n
            }

            function h(t, e) {
                var n = s(t.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var o = u[u.length - 1];
                if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);
                else if ("bottom" === t.insertAt) n.appendChild(e);
                else {
                    if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var r = s(t.insertInto + " " + t.insertAt.before);
                    n.insertBefore(e, r)
                }
            }

            function v(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = u.indexOf(t);
                e >= 0 && u.splice(e, 1)
            }

            function g(t) { var e = document.createElement("style"); return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e }

            function y(t, e) { Object.keys(e).forEach((function(n) { t.setAttribute(n, e[n]) })) }

            function b(t, e) {
                var n, o, r, i;
                if (e.transform && t.css) {
                    if (!(i = e.transform(t.css))) return function() {};
                    t.css = i
                }
                if (e.singleton) {
                    var a = c++;
                    n = l || (l = g(e)), o = x.bind(null, n, a, !1), r = x.bind(null, n, a, !0)
                } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) { var e = document.createElement("link"); return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e }(e), o = function(t, e, n) {
                    var o = n.css,
                        r = n.sourceMap,
                        i = void 0 === e.convertToAbsoluteUrls && r;
                    (e.convertToAbsoluteUrls || i) && (o = f(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                    var a = new Blob([o], { type: "text/css" }),
                        s = t.href;
                    t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
                }.bind(null, n, e), r = function() { v(n), n.href && URL.revokeObjectURL(n.href) }) : (n = g(e), o = function(t, e) {
                    var n = e.css,
                        o = e.media;
                    if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
                    else {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(n))
                    }
                }.bind(null, n), r = function() { v(n) });
                return o(t),
                    function(e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            o(t = e)
                        } else r()
                    }
            }
            t.exports = function(t, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                var n = p(t, e);
                return d(n, e),
                    function(t) {
                        for (var o = [], r = 0; r < n.length; r++) {
                            var a = n[r];
                            (s = i[a.id]).refs--, o.push(s)
                        }
                        for (t && d(p(t, e), e), r = 0; r < o.length; r++) {
                            var s;
                            if (0 === (s = o[r]).refs) {
                                for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                                delete i[s.id]
                            }
                        }
                    }
            };
            var m, k = (m = [], function(t, e) { return m[t] = e, m.filter(Boolean).join("\n") });

            function x(t, e, n, o) {
                var r = n ? "" : o.css;
                if (t.styleSheet) t.styleSheet.cssText = k(e, r);
                else {
                    var i = document.createTextNode(r),
                        a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
                }
            }
        }, function(t, e) {
            t.exports = function(t) {
                var e = "undefined" != typeof window && window.location;
                if (!e) throw new Error("fixUrls requires window.location");
                if (!t || "string" != typeof t) return t;
                var n = e.protocol + "//" + e.host,
                    o = n + e.pathname.replace(/\/[^\/]*$/, "/");
                return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(t, e) { var r, i = e.trim().replace(/^"(.*)"$/, (function(t, e) { return e })).replace(/^'(.*)'$/, (function(t, e) { return e })); return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")") }))
            }
        }, function(t, e, n) {
            "use strict";
            var o, r, i, a, s, l;
            t.exports = (o = "cdx-notify", r = "cdx-notify__cross", i = "cdx-notify__button--confirm", a = "cdx-notify__button", s = "cdx-notify__btns-wrapper", {
                alert: l = function(t) {
                    var e = document.createElement("DIV"),
                        n = document.createElement("DIV"),
                        i = t.message,
                        a = t.style;
                    return e.classList.add(o), a && e.classList.add(o + "--" + a), e.innerHTML = i, n.classList.add(r), n.addEventListener("click", e.remove.bind(e)), e.appendChild(n), e
                },
                confirm: function(t) {
                    var e = l(t),
                        n = document.createElement("div"),
                        o = document.createElement("button"),
                        c = document.createElement("button"),
                        u = e.querySelector("." + r),
                        f = t.cancelHandler,
                        d = t.okHandler;
                    return n.classList.add(s), o.innerHTML = t.okText || "Confirm", c.innerHTML = t.cancelText || "Cancel", o.classList.add(a), c.classList.add(a), o.classList.add(i), c.classList.add("cdx-notify__button--cancel"), f && "function" == typeof f && (c.addEventListener("click", f), u.addEventListener("click", f)), d && "function" == typeof d && o.addEventListener("click", d), o.addEventListener("click", e.remove.bind(e)), c.addEventListener("click", e.remove.bind(e)), n.appendChild(o), n.appendChild(c), e.appendChild(n), e
                },
                prompt: function(t) {
                    var e = l(t),
                        n = document.createElement("div"),
                        o = document.createElement("button"),
                        c = document.createElement("input"),
                        u = e.querySelector("." + r),
                        f = t.cancelHandler,
                        d = t.okHandler;
                    return n.classList.add(s), o.innerHTML = t.okText || "Ok", o.classList.add(a), o.classList.add(i), c.classList.add("cdx-notify__input"), t.placeholder && c.setAttribute("placeholder", t.placeholder), t.default && (c.value = t.default), t.inputType && (c.type = t.inputType), f && "function" == typeof f && u.addEventListener("click", f), d && "function" == typeof d && o.addEventListener("click", (function() { d(c.value) })), o.addEventListener("click", e.remove.bind(e)), n.appendChild(c), n.appendChild(o), e.appendChild(n), e
                },
                getWrapper: function() { var t = document.createElement("DIV"); return t.classList.add("cdx-notifies"), t }
            })
        }])
    }, function(t, e, n) {
        var o, r;
        void 0 === (r = "function" == typeof(o = function() {
            function t(t) {
                var e = t.tags;
                if (!Object.keys(e).map((function(t) { return typeof e[t] })).every((function(t) { return "object" === t || "boolean" === t || "function" === t }))) throw new Error("The configuration was invalid");
                this.config = t
            }
            var e = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];

            function n(t) { return -1 !== e.indexOf(t.nodeName) }
            var o = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];

            function r(t) { return -1 !== o.indexOf(t.nodeName) }

            function i(t, e, n) { return "function" == typeof t.tags[e] ? t.tags[e](n) : t.tags[e] }

            function a(t, e) { return void 0 === e || "boolean" == typeof e && !e }

            function s(t, e, n) { var o = t.name.toLowerCase(); return !0 !== e && ("function" == typeof e[o] ? !e[o](t.value, n) : void 0 === e[o] || !1 === e[o] || "string" == typeof e[o] && e[o] !== t.value) }
            return t.prototype.clean = function(t) {
                const e = document.implementation.createHTMLDocument(),
                    n = e.createElement("div");
                return n.innerHTML = t, this._sanitize(e, n), n.innerHTML
            }, t.prototype._sanitize = function(t, e) {
                var o = function(t, e) { return t.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1) }(t, e),
                    l = o.firstChild();
                if (l)
                    do {
                        if (l.nodeType !== Node.TEXT_NODE) {
                            if (l.nodeType === Node.COMMENT_NODE) { e.removeChild(l), this._sanitize(t, e); break }
                            var c, u = r(l);
                            u && (c = Array.prototype.some.call(l.childNodes, n));
                            var f = !!e.parentNode,
                                d = n(e) && n(l) && f,
                                p = l.nodeName.toLowerCase(),
                                h = i(this.config, p, l);
                            if (u && c || a(0, h) || !this.config.keepNestedBlockElements && d) {
                                if ("SCRIPT" !== l.nodeName && "STYLE" !== l.nodeName)
                                    for (; l.childNodes.length > 0;) e.insertBefore(l.childNodes[0], l);
                                e.removeChild(l), this._sanitize(t, e);
                                break
                            }
                            for (var v = 0; v < l.attributes.length; v += 1) {
                                var g = l.attributes[v];
                                s(g, h, l) && (l.removeAttribute(g.name), v -= 1)
                            }
                            this._sanitize(t, l)
                        } else if ("" === l.data.trim() && (l.previousElementSibling && n(l.previousElementSibling) || l.nextElementSibling && n(l.nextElementSibling))) { e.removeChild(l), this._sanitize(t, e); break }
                    } while (l = o.nextSibling())
            }, t
        }) ? o.call(e, n, e, t) : o) || (t.exports = r)
    }, function(t, e, n) {
        window,
        t.exports = function(t) {
            var e = {};

            function n(o) { if (e[o]) return e[o].exports; var r = e[o] = { i: o, l: !1, exports: {} }; return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports }
            return n.m = t, n.c = e, n.d = function(t, e, o) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) n.d(o, r, function(e) { return t[e] }.bind(null, r));
                return o
            }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 0)
        }([function(t, e, n) { t.exports = n(1) }, function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() { return o }));
            class o {
                constructor() { this.nodes = { wrapper: null, content: null }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => { this.showed && this.hide(!0) }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 }) }
                get CSS() { return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } } }
                show(t, e, n) {
                    this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
                    const o = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, n);
                    if (o.hidingDelay && (this.hidingDelay = o.hidingDelay), this.nodes.content.innerHTML = "", "string" == typeof e) this.nodes.content.appendChild(document.createTextNode(e));
                    else {
                        if (!(e instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof e + " given.");
                        this.nodes.content.appendChild(e)
                    }
                    switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), o.placement) {
                        case "top":
                            this.placeTop(t, o);
                            break;
                        case "left":
                            this.placeLeft(t, o);
                            break;
                        case "right":
                            this.placeRight(t, o);
                            break;
                        case "bottom":
                        default:
                            this.placeBottom(t, o)
                    }
                    o && o.delay ? this.showingTimeout = setTimeout(() => { this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0 }, o.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0)
                }
                hide(t = !1) {
                    if (this.hidingDelay && !t) return this.hidingTimeout && clearTimeout(this.hidingTimeout), void(this.hidingTimeout = setTimeout(() => { this.hide(!0) }, this.hidingDelay));
                    this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout)
                }
                onHover(t, e, n) { t.addEventListener("mouseenter", () => { this.show(t, e, n) }), t.addEventListener("mouseleave", () => { this.hide() }) }
                destroy() { this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll) }
                prepare() { this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper) }
                loadStyles() {
                    const t = "codex-tooltips-style";
                    if (document.getElementById(t)) return;
                    const e = n(2),
                        o = this.make("style", null, { textContent: e.toString(), id: t });
                    this.prepend(document.head, o)
                }
                placeBottom(t, e) {
                    const n = t.getBoundingClientRect(),
                        o = n.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
                        r = n.bottom + window.pageYOffset + this.offsetTop + e.marginTop;
                    this.applyPlacement("bottom", o, r)
                }
                placeTop(t, e) {
                    const n = t.getBoundingClientRect(),
                        o = n.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
                        r = n.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
                    this.applyPlacement("top", o, r)
                }
                placeLeft(t, e) {
                    const n = t.getBoundingClientRect(),
                        o = n.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - e.marginLeft,
                        r = n.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                    this.applyPlacement("left", o, r)
                }
                placeRight(t, e) {
                    const n = t.getBoundingClientRect(),
                        o = n.right + this.offsetRight + e.marginRight,
                        r = n.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                    this.applyPlacement("right", o, r)
                }
                applyPlacement(t, e, n) { this.nodes.wrapper.classList.add(this.CSS.placement[t]), this.nodes.wrapper.style.left = e + "px", this.nodes.wrapper.style.top = n + "px" }
                make(t, e = null, n = {}) {
                    const o = document.createElement(t);
                    Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
                    for (const t in n) n.hasOwnProperty(t) && (o[t] = n[t]);
                    return o
                }
                append(t, e) { Array.isArray(e) ? e.forEach(e => t.appendChild(e)) : t.appendChild(e) }
                prepend(t, e) { Array.isArray(e) ? (e = e.reverse()).forEach(e => t.prepend(e)) : t.prepend(e) }
            }
        }, function(t, e) { t.exports = '.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}' }]).default
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14), n(7), n(25)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l) {
            "use strict";
            var c = n(8),
                u = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = c(s), l = u(l);
            var f = function() {
                function t(e, n) {
                    (0, r.default)(this, t), this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = n
                }
                return (0, i.default)(t, [{ key: "setItems", value: function(t) { this.items = t } }, { key: "next", value: function() { this.cursor = this.leafNodesAndReturnIndex(t.directions.RIGHT) } }, { key: "previous", value: function() { this.cursor = this.leafNodesAndReturnIndex(t.directions.LEFT) } }, { key: "dropCursor", value: function() {-1 !== this.cursor && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1) } }, { key: "leafNodesAndReturnIndex", value: function(e) { var n = this; if (0 === this.items.length) return this.cursor; var o = this.cursor; return -1 === o ? o = e === t.directions.RIGHT ? -1 : 0 : this.items[o].classList.remove(this.focusedCssClass), o = e === t.directions.RIGHT ? (o + 1) % this.items.length : (this.items.length + o - 1) % this.items.length, a.default.canSetCaret(this.items[o]) && s.delay((function() { return l.default.setCursor(n.items[o]) }), 50)(), this.items[o].classList.add(this.focusedCssClass), o } }, { key: "currentItem", get: function() { return -1 === this.cursor ? null : this.items[this.cursor] } }]), t
            }();
            o.default = f, f.displayName = "DomIterator", f.directions = { RIGHT: "right", LEFT: "left" }, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7), n(14), n(61)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l) {
            "use strict";
            var c = n(8),
                u = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), a = c(a), s = u(s);
            var f = function() {
                function t(e) {
                    (0, r.default)(this, t), this.blocks = [], this.workingArea = e
                }
                return (0, i.default)(t, [{ key: "push", value: function(t) { this.blocks.push(t), this.insertToDOM(t) } }, {
                    key: "swap",
                    value: function(t, e) {
                        var n = this.blocks[e];
                        s.default.swap(this.blocks[t].holder, n.holder), this.blocks[e] = this.blocks[t], this.blocks[t] = n
                    }
                }, {
                    key: "move",
                    value: function(t, e) {
                        var n = this.blocks.splice(e, 1)[0],
                            o = t - 1,
                            r = Math.max(0, o),
                            i = this.blocks[r];
                        t > 0 ? this.insertToDOM(n, "afterend", i) : this.insertToDOM(n, "beforebegin", i), this.blocks.splice(t, 0, n);
                        var a = this.composeBlockEvent("move", { fromIndex: e, toIndex: t });
                        n.call(l.BlockToolAPI.MOVED, a)
                    }
                }, {
                    key: "insert",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (this.length) {
                            t > this.length && (t = this.length), n && (this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED));
                            var o = n ? 1 : 0;
                            if (this.blocks.splice(t, o, e), t > 0) {
                                var r = this.blocks[t - 1];
                                this.insertToDOM(e, "afterend", r)
                            } else {
                                var i = this.blocks[t + 1];
                                i ? this.insertToDOM(e, "beforebegin", i) : this.insertToDOM(e)
                            }
                        } else this.push(e)
                    }
                }, { key: "remove", value: function(t) { isNaN(t) && (t = this.length - 1), this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED), this.blocks.splice(t, 1) } }, { key: "removeAll", value: function() { this.workingArea.innerHTML = "", this.blocks.forEach((function(t) { return t.call(l.BlockToolAPI.REMOVED) })), this.blocks.length = 0 } }, {
                    key: "insertAfter",
                    value: function(t, e) {
                        var n = this.blocks.indexOf(t);
                        this.insert(n + 1, e)
                    }
                }, { key: "get", value: function(t) { return this.blocks[t] } }, { key: "indexOf", value: function(t) { return this.blocks.indexOf(t) } }, { key: "insertToDOM", value: function(t, e, n) { e ? n.holder.insertAdjacentElement(e, t.holder) : this.workingArea.appendChild(t.holder), t.call(l.BlockToolAPI.RENDERED) } }, { key: "composeBlockEvent", value: function(t, e) { return new CustomEvent(t, { detail: e }) } }, { key: "length", get: function() { return this.blocks.length } }, { key: "array", get: function() { return this.blocks } }, { key: "nodes", get: function() { return a.array(this.workingArea.children) } }], [{ key: "set", value: function(t, e, n) { return isNaN(Number(e)) ? (Reflect.set(t, e, n), !0) : (t.insert(+e, n), !0) } }, { key: "get", value: function(t, e) { return isNaN(Number(e)) ? Reflect.get(t, e) : t.get(+e) } }]), t
            }();
            o.default = f, f.displayName = "Blocks", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e], void 0 === (i = "function" == typeof(o = function(t) {
            "use strict";
            var e;
            Object.defineProperty(t, "__esModule", { value: !0 }), t.BlockMutationType = void 0, t.BlockMutationType = e,
                function(t) { t.Added = "block-added", t.Removed = "block-removed", t.Moved = "block-moved", t.Changed = "block-changed" }(e || (t.BlockMutationType = e = {}))
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        window,
        t.exports = function(t) {
            var e = {};

            function n(o) { if (e[o]) return e[o].exports; var r = e[o] = { i: o, l: !1, exports: {} }; return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports }
            return n.m = t, n.c = e, n.d = function(t, e, o) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) n.d(o, r, function(e) { return t[e] }.bind(null, r));
                return o
            }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 0)
        }([function(t, e, n) {
            "use strict";

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function r(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t }
            n.r(e);
            var i = function() {
                function t(e) { var n = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.commands = {}, this.keys = {}, this.name = e.name, this.parseShortcutName(e.name), this.element = e.on, this.callback = e.callback, this.executeShortcut = function(t) { n.execute(t) }, this.element.addEventListener("keydown", this.executeShortcut, !1) }
                return r(t, null, [{ key: "supportedCommands", get: function() { return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] } } }, { key: "keyCodes", get: function() { return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46 } } }]), r(t, [{
                    key: "parseShortcutName",
                    value: function(e) {
                        e = e.split("+");
                        for (var n = 0; n < e.length; n++) {
                            e[n] = e[n].toUpperCase();
                            var o = !1;
                            for (var r in t.supportedCommands)
                                if (t.supportedCommands[r].includes(e[n])) { o = this.commands[r] = !0; break }
                            o || (this.keys[e[n]] = !0)
                        }
                        for (var i in t.supportedCommands) this.commands[i] || (this.commands[i] = !1)
                    }
                }, {
                    key: "execute",
                    value: function(e) {
                        var n, o = { CMD: e.ctrlKey || e.metaKey, SHIFT: e.shiftKey, ALT: e.altKey },
                            r = !0;
                        for (n in this.commands) this.commands[n] !== o[n] && (r = !1);
                        var i, a = !0;
                        for (i in this.keys) a = a && e.keyCode === t.keyCodes[i];
                        r && a && this.callback(e)
                    }
                }, { key: "remove", value: function() { this.element.removeEventListener("keydown", this.executeShortcut) } }]), t
            }();
            e.default = i
        }]).default
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(20), n(21), n(2), n(3), n(113), n(5), n(6), n(4), n(59), n(7), n(61), n(115), n(81), n(386), n(60), n(84)], void 0 === (i = "function" == typeof(o = function(t, e, o, r, i, a, s, l, c, u, f, d, p, h, v, g, y) {
            "use strict";
            var b = n(8),
                m = n(1);

            function k() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = t.ToolboxEvent = void 0, e = m(e), o = m(o), r = m(r), i = m(i), a = m(a), s = m(s), l = m(l), c = m(c), u = m(u), f = b(f), p = m(p), h = m(h), v = b(v), g = m(g);
            var x, w = function(t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, u.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
            t.ToolboxEvent = x,
                function(t) { t.Opened = "toolbox-opened", t.Closed = "toolbox-closed", t.BlockAdded = "toolbox-block-added" }(x || (t.ToolboxEvent = x = {}));
            var S = function(t) {
                (0, s.default)(b, t);
                var n, u, h = (n = b, function() {
                    var t, e = (0, c.default)(n);
                    if (k()) {
                        var o = (0, c.default)(this).constructor;
                        t = Reflect.construct(e, arguments, o)
                    } else t = e.apply(this, arguments);
                    return (0, l.default)(this, t)
                });

                function b(t) {
                    var e, n = t.api,
                        o = t.tools,
                        i = t.i18nLabels;
                    return (0, r.default)(this, b), (e = h.call(this)).opened = !1, e.nodes = { toolbox: null }, e.clickListenerId = null, e.onOverlayClicked = function() { e.close() }, e.api = n, e.tools = o, e.i18nLabels = i, e
                }
                return (0, i.default)(b, [{ key: "make", value: function() { return this.popover = new v.default({ className: b.CSS.toolbox, searchable: !0, filterLabel: this.i18nLabels.filter, nothingFoundLabel: this.i18nLabels.nothingFound, items: this.toolboxItemsToBeDisplayed }), this.popover.on(v.PopoverEvent.OverlayClicked, this.onOverlayClicked), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox } }, { key: "hasFocus", value: function() { return this.popover.hasFocus() } }, {
                    key: "destroy",
                    value: function() {
                        (0, a.default)((0, c.default)(b.prototype), "destroy", this).call(this), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.api.listeners.offById(this.clickListenerId), this.removeAllShortcuts(), this.popover.off(v.PopoverEvent.OverlayClicked, this.onOverlayClicked)
                    }
                }, { key: "toolButtonActivated", value: function(t, e) { this.insertNewBlock(t, e) } }, { key: "open", value: function() { this.isEmpty || (this.shouldOpenPopoverBottom || (this.nodes.toolbox.style.setProperty("--popover-height", this.popover.calculateHeight() + "px"), this.nodes.toolbox.classList.add(b.CSS.toolboxOpenedTop)), this.popover.show(), this.opened = !0, this.emit(x.Opened)) } }, { key: "close", value: function() { this.popover.hide(), this.opened = !1, this.nodes.toolbox.classList.remove(b.CSS.toolboxOpenedTop), this.emit(x.Closed) } }, { key: "toggle", value: function() { this.opened ? this.close() : this.open() } }, { key: "areToolboxSettingsValid", value: function(t, e) { return !(!t || t && !t.icon && (f.log("Toolbar icon is missed. Tool %o skipped", "warn", e), 1)) } }, {
                    key: "enableShortcuts",
                    value: function() {
                        var t = this;
                        this.toolsToBeDisplayed.forEach((function(e) {
                            var n = e.shortcut;
                            n && t.enableShortcutForTool(e.name, n)
                        }))
                    }
                }, {
                    key: "enableShortcutForTool",
                    value: function(t, e) {
                        var n = this;
                        p.default.add({ name: e, on: this.api.ui.nodes.redactor, handler: function(e) { e.preventDefault(), n.insertNewBlock(t) } })
                    }
                }, {
                    key: "removeAllShortcuts",
                    value: function() {
                        var t = this;
                        this.toolsToBeDisplayed.forEach((function(e) {
                            var n = e.shortcut;
                            n && p.default.remove(t.api.ui.nodes.redactor, n)
                        }))
                    }
                }, {
                    key: "insertNewBlock",
                    value: (u = (0, o.default)(e.default.mark((function t(n, o) {
                        var r, i, a, s, l, c;
                        return e.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(r)) { t.next = 4; break }
                                    return t.abrupt("return");
                                case 4:
                                    if (a = i.isEmpty ? r : r + 1, !o) { t.next = 10; break }
                                    return t.next = 8, this.api.blocks.composeBlockData(n);
                                case 8:
                                    l = t.sent, s = Object.assign(l, o);
                                case 10:
                                    (c = this.api.blocks.insert(n, s, void 0, a, void 0, i.isEmpty)).call(d.BlockToolAPI.APPEND_CALLBACK), this.api.caret.setToBlock(a), this.emit(x.BlockAdded, { block: c }), this.api.toolbar.close();
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t, e) { return u.apply(this, arguments) })
                }, { key: "isEmpty", get: function() { return 0 === this.toolsToBeDisplayed.length } }, {
                    key: "shouldOpenPopoverBottom",
                    get: function() {
                        var t = this.nodes.toolbox.getBoundingClientRect(),
                            e = this.api.ui.nodes.redactor.getBoundingClientRect(),
                            n = this.popover.calculateHeight(),
                            o = t.top + n,
                            r = t.top - n,
                            i = Math.min(window.innerHeight, e.bottom);
                        return r < e.top || o <= i
                    }
                }, {
                    key: "toolsToBeDisplayed",
                    get: function() {
                        var t = this;
                        return Array.from(this.tools.values()).reduce((function(e, n) {
                            var o = n.toolbox;
                            if (o) {
                                var r = o.filter((function(e) { return t.areToolboxSettingsValid(e, n.name) }));
                                e.push(Object.assign(Object.assign({}, n), { toolbox: r }))
                            }
                            return e
                        }), [])
                    }
                }, {
                    key: "toolboxItemsToBeDisplayed",
                    get: function() {
                        var t = this,
                            e = function(e, n) { return { icon: e.icon, label: g.default.t(y.I18nInternalNS.toolNames, e.title || f.capitalize(n.name)), name: n.name, onClick: function(o) { t.toolButtonActivated(n.name, e.data) }, secondaryLabel: n.shortcut ? f.beautifyShortcut(n.shortcut) : "" } };
                        return this.toolsToBeDisplayed.reduce((function(t, n) { return Array.isArray(n.toolbox) ? n.toolbox.forEach((function(o) { t.push(e(o, n)) })) : t.push(e(n.toolbox, n)), t }), [])
                    }
                }], [{ key: "CSS", get: function() { return { toolbox: "ce-toolbox", toolboxOpenedTop: "ce-toolbox--opened-top" } } }]), b
            }(h.default);
            t.default = S, S.displayName = "Toolbox", w([f.cacheable], S.prototype, "toolsToBeDisplayed", null), w([f.cacheable], S.prototype, "toolboxItemsToBeDisplayed", null)
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(59), n(14), n(111), n(62), n(387), n(81), n(7), n(388)], void 0 === (i = "function" == typeof(o = function(t, e, o, r, i, a, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(1);

            function g() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = t.PopoverEvent = void 0, e = v(e), o = v(o), r = v(r), i = v(i), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), h = v(h);
            var y, b = function(t, e, n, o) {
                var r, i = arguments.length,
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, s.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var l = t.length - 1; l >= 0; l--)(r = t[l]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            };
            t.PopoverEvent = y,
                function(t) { t.OverlayClicked = "overlay-clicked" }(y || (t.PopoverEvent = y = {}));
            var m = function(t) {
                (0, r.default)(d, t);
                var n, s = (n = d, function() {
                    var t, e = (0, a.default)(n);
                    if (g()) {
                        var o = (0, a.default)(this).constructor;
                        t = Reflect.construct(e, arguments, o)
                    } else t = e.apply(this, arguments);
                    return (0, i.default)(this, t)
                });

                function d(t) {
                    var n, o = t.items,
                        r = t.className,
                        i = t.searchable,
                        a = t.filterLabel,
                        l = t.nothingFoundLabel;
                    return (0, e.default)(this, d), (n = s.call(this)).isShown = !1, n.nodes = { wrapper: null, popover: null, items: null, nothingFound: null, overlay: null }, n.scrollLocker = new h.default, n.items = o, n.className = r || "", n.searchable = i, n.listeners = new c.default, n.filterLabel = a, n.nothingFoundLabel = l, n.render(), n.enableFlipper(), n
                }
                return (0, o.default)(d, [{ key: "getElement", value: function() { return this.nodes.wrapper } }, {
                    key: "show",
                    value: function() {
                        var t = this;
                        this.search.clear(), this.nodes.items.scrollTop = 0, this.nodes.popover.classList.add(d.CSS.popoverOpened), this.nodes.overlay.classList.remove(d.CSS.popoverOverlayHidden), this.flipper.activate(), this.searchable && window.requestAnimationFrame((function() { t.search.focus() })), (0, p.isMobileScreen)() && this.scrollLocker.lock(), this.isShown = !0
                    }
                }, { key: "hide", value: function() { this.isShown && (this.nodes.popover.classList.remove(d.CSS.popoverOpened), this.nodes.overlay.classList.add(d.CSS.popoverOverlayHidden), this.flipper.deactivate(), (0, p.isMobileScreen)() && this.scrollLocker.unlock(), this.isShown = !1) } }, { key: "destroy", value: function() { this.listeners.removeAll() } }, { key: "hasFocus", value: function() { return this.flipper.hasFocus() } }, { key: "calculateHeight", value: function() { var t, e = this.nodes.popover.cloneNode(!0); return e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-1000px", e.classList.add(d.CSS.popoverOpened), document.body.appendChild(e), t = e.offsetHeight, e.remove(), t } }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        this.nodes.wrapper = l.default.make("div", this.className), this.nodes.popover = l.default.make("div", d.CSS.popover), this.nodes.wrapper.appendChild(this.nodes.popover), this.nodes.overlay = l.default.make("div", [d.CSS.popoverOverlay, d.CSS.popoverOverlayHidden]), this.nodes.wrapper.appendChild(this.nodes.overlay), this.searchable && this.addSearch(this.nodes.popover), this.nodes.items = l.default.make("div", d.CSS.itemsWrapper), this.items.forEach((function(e) { t.nodes.items.appendChild(t.createItem(e)) })), this.nodes.popover.appendChild(this.nodes.items), this.nodes.nothingFound = l.default.make("div", [d.CSS.noFoundMessage], { textContent: this.nothingFoundLabel }), this.nodes.popover.appendChild(this.nodes.nothingFound), this.listeners.on(this.nodes.popover, "click", (function(e) {
                            var n = e.target.closest(".".concat(d.CSS.item));
                            n && t.itemClicked(n)
                        })), this.listeners.on(this.nodes.overlay, "click", (function() { t.emit(y.OverlayClicked) }))
                    }
                }, {
                    key: "addSearch",
                    value: function(t) {
                        var e = this;
                        this.search = new f.default({
                            items: this.items,
                            placeholder: this.filterLabel,
                            onSearch: function(t) {
                                var n = [];
                                e.items.forEach((function(o, r) {
                                    var i = e.nodes.items.children[r];
                                    t.includes(o) ? (n.push(i), i.classList.remove(d.CSS.itemHidden)) : i.classList.add(d.CSS.itemHidden)
                                })), e.nodes.nothingFound.classList.toggle(d.CSS.noFoundMessageShown, 0 === n.length), e.flipper.deactivate(), e.flipper.activate(n), e.flipper.focusFirst()
                            }
                        });
                        var n = this.search.getElement();
                        t.appendChild(n)
                    }
                }, {
                    key: "createItem",
                    value: function(t) {
                        var e = l.default.make("div", d.CSS.item);
                        e.dataset.itemName = t.name;
                        var n = l.default.make("div", d.CSS.itemLabel, { innerHTML: t.label });
                        return t.icon && e.appendChild(l.default.make("div", d.CSS.itemIcon, { innerHTML: t.icon })), e.appendChild(n), t.secondaryLabel && e.appendChild(l.default.make("div", d.CSS.itemSecondaryLabel, { textContent: t.secondaryLabel })), e
                    }
                }, {
                    key: "itemClicked",
                    value: function(t) {
                        var e = this.nodes.wrapper.querySelectorAll(".".concat(d.CSS.item)),
                            n = Array.from(e).indexOf(t),
                            o = this.items[n];
                        o.onClick(o)
                    }
                }, {
                    key: "enableFlipper",
                    value: function() {
                        var t = Array.from(this.nodes.wrapper.querySelectorAll(".".concat(d.CSS.item)));
                        this.flipper = new u.default({ items: t, focusedItemClass: d.CSS.itemFocused, allowedKeys: [p.keyCodes.TAB, p.keyCodes.UP, p.keyCodes.DOWN, p.keyCodes.ENTER] })
                    }
                }], [{ key: "CSS", get: function() { return { popover: "ce-popover", popoverOpened: "ce-popover--opened", itemsWrapper: "ce-popover__items", item: "ce-popover__item", itemHidden: "ce-popover__item--hidden", itemFocused: "ce-popover__item--focused", itemLabel: "ce-popover__item-label", itemIcon: "ce-popover__item-icon", itemSecondaryLabel: "ce-popover__item-secondary-label", noFoundMessage: "ce-popover__no-found", noFoundMessageShown: "ce-popover__no-found--shown", popoverOverlay: "ce-popover__overlay", popoverOverlayHidden: "ce-popover__overlay--hidden" } } }]), d
            }(d.default);
            t.default = m, m.displayName = "Popover", b([p.cacheable], m.prototype, "calculateHeight", null)
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14), n(111)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s) {
            "use strict";
            var l = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s);
            var c = function() {
                function t(e) {
                    var n = e.items,
                        o = e.onSearch,
                        i = e.placeholder;
                    (0, r.default)(this, t), this.listeners = new s.default, this.items = n, this.onSearch = o, this.render(i)
                }
                return (0, i.default)(t, [{ key: "getElement", value: function() { return this.wrapper } }, { key: "focus", value: function() { this.input.focus() } }, { key: "clear", value: function() { this.input.value = "", this.searchQuery = "", this.onSearch(this.foundItems) } }, { key: "destroy", value: function() { this.listeners.removeAll() } }, {
                    key: "render",
                    value: function(e) {
                        var n = this;
                        this.wrapper = a.default.make("div", t.CSS.wrapper);
                        var o = a.default.make("div", t.CSS.icon),
                            r = a.default.svg("search", 16, 16);
                        this.input = a.default.make("input", t.CSS.input, { placeholder: e }), o.appendChild(r), this.wrapper.appendChild(o), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", (function() { n.searchQuery = n.input.value, n.onSearch(n.foundItems) }))
                    }
                }, {
                    key: "checkItem",
                    value: function(t) {
                        var e = t.label.toLowerCase(),
                            n = this.searchQuery.toLowerCase();
                        return e.includes(n)
                    }
                }, { key: "foundItems", get: function() { var t = this; return this.items.filter((function(e) { return t.checkItem(e) })) } }], [{ key: "CSS", get: function() { return { wrapper: "cdx-search-field", icon: "cdx-search-field__icon", input: "cdx-search-field__input" } } }]), t
            }();
            o.default = c, c.displayName = "SearchInput", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i);
            var l = function() {
                function t() {
                    (0, r.default)(this, t)
                }
                return (0, i.default)(t, [{ key: "lock", value: function() { a.isIosDevice ? this.lockHard() : document.body.classList.add(t.CSS.scrollLocked) } }, { key: "unlock", value: function() { a.isIosDevice ? this.unlockHard() : document.body.classList.remove(t.CSS.scrollLocked) } }, { key: "lockHard", value: function() { this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty("--window-scroll-offset", "".concat(this.scrollPosition, "px")), document.body.classList.add(t.CSS.scrollLockedHard) } }, { key: "unlockHard", value: function() { document.body.classList.remove(t.CSS.scrollLockedHard), null !== this.scrollPosition && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null } }]), t
            }();
            o.default = l, l.displayName = "ScrollLocker", l.CSS = { scrollLocked: "ce-scroll-locked", scrollLockedHard: "ce-scroll-locked--hard" }, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        window,
        t.exports = function(t) {
            var e = {};

            function n(o) { if (e[o]) return e[o].exports; var r = e[o] = { i: o, l: !1, exports: {} }; return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports }
            return n.m = t, n.c = e, n.d = function(t, e, o) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) n.d(o, r, function(e) { return t[e] }.bind(null, r));
                return o
            }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "/", n(n.s = 0)
        }([function(t, e, n) {
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function r(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t }
            n(1).toString();
            var i = function() {
                function t(e) {
                    var n = e.data,
                        o = e.config,
                        r = e.api,
                        i = e.readOnly;
                    ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.api = r, this.readOnly = i, this._CSS = { block: this.api.styles.block, wrapper: "ce-paragraph" }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = o.placeholder ? o.placeholder : t.DEFAULT_PLACEHOLDER, this._data = {}, this._element = this.drawView(), this._preserveBlank = void 0 !== o.preserveBlank && o.preserveBlank, this.data = n
                }
                return r(t, null, [{ key: "DEFAULT_PLACEHOLDER", get: function() { return "" } }]), r(t, [{ key: "onKeyUp", value: function(t) { "Backspace" !== t.code && "Delete" !== t.code || "" === this._element.textContent && (this._element.innerHTML = "") } }, { key: "drawView", value: function() { var t = document.createElement("DIV"); return t.classList.add(this._CSS.wrapper, this._CSS.block), t.contentEditable = !1, t.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (t.contentEditable = !0, t.addEventListener("keyup", this.onKeyUp)), t } }, { key: "render", value: function() { return this._element } }, {
                    key: "merge",
                    value: function(t) {
                        var e = { text: this.data.text + t.text };
                        this.data = e
                    }
                }, { key: "validate", value: function(t) { return !("" === t.text.trim() && !this._preserveBlank) } }, { key: "save", value: function(t) { return { text: t.innerHTML } } }, {
                    key: "onPaste",
                    value: function(t) {
                        var e = { text: t.detail.data.innerHTML };
                        this.data = e
                    }
                }, { key: "data", get: function() { var t = this._element.innerHTML; return this._data.text = t, this._data }, set: function(t) { this._data = t || {}, this._element.innerHTML = this._data.text || "" } }], [{ key: "conversionConfig", get: function() { return { export: "text", import: "text" } } }, { key: "sanitize", get: function() { return { text: { br: !0 } } } }, { key: "isReadOnlySupported", get: function() { return !0 } }, { key: "pasteConfig", get: function() { return { tags: ["P"] } } }, { key: "toolbox", get: function() { return { icon: n(5).default, title: "Text" } } }]), t
            }();
            t.exports = i
        }, function(t, e, n) {
            var o = n(2),
                r = n(3);
            "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
                [t.i, r, ""]
            ]), o(r, { insert: "head", singleton: !1 }), t.exports = r.locals || {}
        }, function(t, e, n) {
            "use strict";
            var o, r = function() {
                    var t = {};
                    return function(e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (t) { n = null }
                            t[e] = n
                        }
                        return t[e]
                    }
                }(),
                i = [];

            function a(t) {
                for (var e = -1, n = 0; n < i.length; n++)
                    if (i[n].identifier === t) { e = n; break }
                return e
            }

            function s(t, e) {
                for (var n = {}, o = [], r = 0; r < t.length; r++) {
                    var s = t[r],
                        l = e.base ? s[0] + e.base : s[0],
                        c = n[l] || 0,
                        u = "".concat(l, " ").concat(c);
                    n[l] = c + 1;
                    var f = a(u),
                        d = { css: s[1], media: s[2], sourceMap: s[3] }; - 1 !== f ? (i[f].references++, i[f].updater(d)) : i.push({ identifier: u, updater: v(d, e), references: 1 }), o.push(u)
                }
                return o
            }

            function l(t) {
                var e = document.createElement("style"),
                    o = t.attributes || {};
                if (void 0 === o.nonce) {
                    var i = n.nc;
                    i && (o.nonce = i)
                }
                if (Object.keys(o).forEach((function(t) { e.setAttribute(t, o[t]) })), "function" == typeof t.insert) t.insert(e);
                else {
                    var a = r(t.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(e)
                }
                return e
            }
            var c, u = (c = [], function(t, e) { return c[t] = e, c.filter(Boolean).join("\n") });

            function f(t, e, n, o) {
                var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
                if (t.styleSheet) t.styleSheet.cssText = u(e, r);
                else {
                    var i = document.createTextNode(r),
                        a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
                }
            }

            function d(t, e, n) {
                var o = n.css,
                    r = n.media,
                    i = n.sourceMap;
                if (r ? t.setAttribute("media", r) : t.removeAttribute("media"), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet) t.styleSheet.cssText = o;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(o))
                }
            }
            var p = null,
                h = 0;

            function v(t, e) {
                var n, o, r;
                if (e.singleton) {
                    var i = h++;
                    n = p || (p = l(e)), o = f.bind(null, n, i, !1), r = f.bind(null, n, i, !0)
                } else n = l(e), o = d.bind(null, n, e), r = function() {
                    ! function(t) {
                        if (null === t.parentNode) return !1;
                        t.parentNode.removeChild(t)
                    }(n)
                };
                return o(t),
                    function(e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            o(t = e)
                        } else r()
                    }
            }
            t.exports = function(t, e) {
                (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = (void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o));
                var n = s(t = t || [], e);
                return function(t) {
                    if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                        for (var o = 0; o < n.length; o++) {
                            var r = a(n[o]);
                            i[r].references--
                        }
                        for (var l = s(t, e), c = 0; c < n.length; c++) {
                            var u = a(n[c]);
                            0 === i[u].references && (i[u].updater(), i.splice(u, 1))
                        }
                        n = l
                    }
                }
            }
        }, function(t, e, n) {
            (e = n(4)(!1)).push([t.i, ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n", ""]), t.exports = e
        }, function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var n = function(t, e) {
                            var n, o, r, i = t[1] || "",
                                a = t[3];
                            if (!a) return i;
                            if (e && "function" == typeof btoa) {
                                var s = (n = a, o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(r, " */")),
                                    l = a.sources.map((function(t) { return "/*# sourceURL=".concat(a.sourceRoot || "").concat(t, " */") }));
                                return [i].concat(l).concat([s]).join("\n")
                            }
                            return [i].join("\n")
                        }(e, t);
                        return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
                    })).join("")
                }, e.i = function(t, n, o) {
                    "string" == typeof t && (t = [
                        [null, t, ""]
                    ]);
                    var r = {};
                    if (o)
                        for (var i = 0; i < this.length; i++) {
                            var a = this[i][0];
                            null != a && (r[a] = !0)
                        }
                    for (var s = 0; s < t.length; s++) {
                        var l = [].concat(t[s]);
                        o && r[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), e.push(l))
                    }
                }, e
            }
        }, function(t, e, n) {
            "use strict";
            n.r(e), e.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n'
        }])
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var l = function() {
                function t() {
                    (0, r.default)(this, t), this.commandName = "bold", this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--bold" }, this.nodes = { button: void 0 }
                }
                return (0, i.default)(t, [{ key: "render", value: function() { return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("bold", 12, 14)), this.nodes.button } }, { key: "surround", value: function(t) { document.execCommand(this.commandName) } }, { key: "checkState", value: function(t) { var e = document.queryCommandState(this.commandName); return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e } }, { key: "shortcut", get: function() { return "CMD+B" } }], [{ key: "sanitize", get: function() { return { b: {} } } }]), t
            }();
            o.default = l, l.displayName = "BoldInlineTool", l.isInline = !0, l.title = "Bold", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var l = function() {
                function t() {
                    (0, r.default)(this, t), this.commandName = "italic", this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--italic" }, this.nodes = { button: null }
                }
                return (0, i.default)(t, [{ key: "render", value: function() { return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("italic", 4, 11)), this.nodes.button } }, { key: "surround", value: function(t) { document.execCommand(this.commandName) } }, { key: "checkState", value: function(t) { var e = document.queryCommandState(this.commandName); return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e } }, { key: "shortcut", get: function() { return "CMD+I" } }], [{ key: "sanitize", get: function() { return { i: {} } } }]), t
            }();
            o.default = l, l.displayName = "ItalicInlineTool", l.isInline = !0, l.title = "Italic", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(25), n(14), n(7)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l) {
            "use strict";
            var c = n(8),
                u = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = c(l);
            var f = function() {
                function t(e) {
                    var n = e.api;
                    (0, r.default)(this, t), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--link", buttonUnlink: "ce-inline-tool--unlink", input: "ce-inline-tool-input", inputShowed: "ce-inline-tool-input--showed" }, this.nodes = { button: null, input: null }, this.inputOpened = !1, this.toolbar = n.toolbar, this.inlineToolbar = n.inlineToolbar, this.notifier = n.notifier, this.i18n = n.i18n, this.selection = new a.default
                }
                return (0, i.default)(t, [{ key: "render", value: function() { return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(s.default.svg("link", 14, 10)), this.nodes.button.appendChild(s.default.svg("unlink", 15, 11)), this.nodes.button } }, { key: "renderActions", value: function() { var t = this; return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (function(e) { e.keyCode === t.ENTER_KEY && t.enterPressed(e) })), this.nodes.input } }, {
                    key: "surround",
                    value: function(t) {
                        if (t) { this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save()); var e = this.selection.findParentTag("A"); if (e) return this.selection.expandToTag(e), this.unlink(), this.closeActions(), this.checkState(), void this.toolbar.close() }
                        this.toggleActions()
                    }
                }, {
                    key: "checkState",
                    value: function(t) {
                        var e = this.selection.findParentTag("A");
                        if (e) {
                            this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
                            var n = e.getAttribute("href");
                            this.nodes.input.value = "null" !== n ? n : "", this.selection.save()
                        } else this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
                        return !!e
                    }
                }, { key: "clear", value: function() { this.closeActions() } }, { key: "toggleActions", value: function() { this.inputOpened ? this.closeActions(!1) : this.openActions(!0) } }, {
                    key: "openActions",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.nodes.input.classList.add(this.CSS.inputShowed), t && this.nodes.input.focus(), this.inputOpened = !0
                    }
                }, {
                    key: "closeActions",
                    value: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (this.selection.isFakeBackgroundEnabled) {
                            var e = new a.default;
                            e.save(), this.selection.restore(), this.selection.removeFakeBackground(), e.restore()
                        }
                        this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", t && this.selection.clearSaved(), this.inputOpened = !1
                    }
                }, { key: "enterPressed", value: function(t) { var e = this.nodes.input.value || ""; return e.trim() ? this.validateURL(e) ? (e = this.prepareLink(e), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(e), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.selection.collapseToEnd(), void this.inlineToolbar.close()) : (this.notifier.show({ message: "Pasted link is not valid.", style: "error" }), void l.log("Incorrect Link pasted", "warn", e)) : (this.selection.restore(), this.unlink(), t.preventDefault(), void this.closeActions()) } }, { key: "validateURL", value: function(t) { return !/\s/.test(t) } }, { key: "prepareLink", value: function(t) { return t = t.trim(), t = this.addProtocol(t) } }, {
                    key: "addProtocol",
                    value: function(t) {
                        if (/^(\w+):(\/\/)?/.test(t)) return t;
                        var e = /^\/[^/\s]/.test(t),
                            n = "#" === t.substring(0, 1),
                            o = /^\/\/[^/\s]/.test(t);
                        return e || n || o || (t = "http://" + t), t
                    }
                }, {
                    key: "insertLink",
                    value: function(t) {
                        var e = this.selection.findParentTag("A");
                        e && this.selection.expandToTag(e), document.execCommand(this.commandLink, !1, t)
                    }
                }, { key: "unlink", value: function() { document.execCommand(this.commandUnlink) } }, { key: "shortcut", get: function() { return "CMD+K" } }], [{ key: "sanitize", get: function() { return { a: { href: !0, target: "_blank", rel: "nofollow" } } } }]), t
            }();
            o.default = f, f.displayName = "LinkInlineTool", f.isInline = !0, f.title = "Link", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var l = function() {
                function t(e) {
                    var n = e.data,
                        o = e.api;
                    (0, r.default)(this, t), this.CSS = { wrapper: "ce-stub", info: "ce-stub__info", title: "ce-stub__title", subtitle: "ce-stub__subtitle" }, this.api = o, this.title = n.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = n.savedData, this.wrapper = this.make()
                }
                return (0, i.default)(t, [{ key: "render", value: function() { return this.wrapper } }, { key: "save", value: function() { return this.savedData } }, {
                    key: "make",
                    value: function() {
                        var t = a.default.make("div", this.CSS.wrapper),
                            e = a.default.svg("sad-face", 52, 52),
                            n = a.default.make("div", this.CSS.info),
                            o = a.default.make("div", this.CSS.title, { textContent: this.title }),
                            r = a.default.make("div", this.CSS.subtitle, { textContent: this.subtitle });
                        return t.appendChild(e), n.appendChild(o), n.appendChild(r), t.appendChild(n), t
                    }
                }]), t
            }();
            o.default = l, l.displayName = "Stub", l.isReadOnlySupported = !0, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(68), n(395), n(396), n(397)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c) {
            "use strict";
            var u = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = u(r), i = u(i), s = u(s), l = u(l), c = u(c);
            var f = function(t, e) { var n = {}; for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) { var r = 0; for (o = Object.getOwnPropertySymbols(t); r < o.length; r++) e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]]) } return n },
                d = function() {
                    function t(e, n, o) {
                        (0, r.default)(this, t), this.api = o, this.config = e, this.editorConfig = n
                    }
                    return (0, i.default)(t, [{
                        key: "get",
                        value: function(t) {
                            var e = this.config[t],
                                n = e.class,
                                o = e.isInternal,
                                r = void 0 !== o && o,
                                i = f(e, ["class", "isInternal"]);
                            return new(this.getConstructor(n))({ name: t, constructable: n, config: i, api: this.api, isDefault: t === this.editorConfig.defaultBlock, defaultPlaceholder: this.editorConfig.placeholder, isInternal: r })
                        }
                    }, {
                        key: "getConstructor",
                        value: function(t) {
                            switch (!0) {
                                case t[a.InternalInlineToolSettings.IsInline]:
                                    return s.default;
                                case t[a.InternalTuneSettings.IsTune]:
                                    return l.default;
                                default:
                                    return c.default
                            }
                        }
                    }]), t
                }();
            o.default = d, d.displayName = "ToolsFactory", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(68)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c) {
            "use strict";
            var u = n(8),
                f = n(1);

            function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
            var p = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (d()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { var t; return (0, r.default)(this, o), (t = n.apply(this, arguments)).type = c.ToolType.Inline, t }
                return (0, i.default)(o, [{ key: "create", value: function() { return new this.constructable({ api: this.api.getMethodsForTool(this), config: this.settings }) } }, { key: "title", get: function() { return this.constructable[c.InternalInlineToolSettings.Title] } }]), o
            }((c = u(c)).default);
            o.default = p, p.displayName = "InlineTool", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(5), n(6), n(4), n(68)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c) {
            "use strict";
            var u = n(8),
                f = n(1);

            function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
            var p = function(t) {
                (0, a.default)(o, t);
                var e, n = (e = o, function() {
                    var t, n = (0, l.default)(e);
                    if (d()) {
                        var o = (0, l.default)(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return (0, s.default)(this, t)
                });

                function o() { var t; return (0, r.default)(this, o), (t = n.apply(this, arguments)).type = c.ToolType.Tune, t }
                return (0, i.default)(o, [{ key: "create", value: function(t, e) { return new this.constructable({ api: this.api.getMethodsForTool(this), config: this.settings, block: e, data: t }) } }]), o
            }((c = u(c)).default);
            o.default = p, p.displayName = "BlockTune", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(113), n(5), n(6), n(4), n(59), n(68), n(7), n(185)], void 0 === (i = "function" == typeof(o = function(o, r, i, a, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(8),
                v = n(1);

            function g() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = v(r), i = v(i), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = h(f), d = h(d), p = v(p);
            var y = function(t, e, n, o) {
                    var r, i = arguments.length,
                        a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, u.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                b = function(t) {
                    (0, s.default)(o, t);
                    var e, n = (e = o, function() {
                        var t, n = (0, c.default)(e);
                        if (g()) {
                            var o = (0, c.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o)
                        } else t = n.apply(this, arguments);
                        return (0, l.default)(this, t)
                    });

                    function o() { var t; return (0, r.default)(this, o), (t = n.apply(this, arguments)).type = f.ToolType.Block, t.inlineTools = new p.default, t.tunes = new p.default, t }
                    return (0, i.default)(o, [{ key: "create", value: function(t, e, n) { return new this.constructable({ data: t, block: e, readOnly: n, api: this.api.getMethodsForTool(this), config: this.settings }) } }, { key: "isReadOnlySupported", get: function() { return !0 === this.constructable[f.InternalBlockToolSettings.IsReadOnlySupported] } }, { key: "isLineBreaksEnabled", get: function() { return this.constructable[f.InternalBlockToolSettings.IsEnabledLineBreaks] } }, {
                        key: "toolbox",
                        get: function() {
                            var t = this.constructable[f.InternalBlockToolSettings.Toolbox],
                                e = this.config[f.UserSettings.Toolbox];
                            if (!d.isEmpty(t) && !1 !== e) return e ? Array.isArray(t) ? Array.isArray(e) ? e.map((function(e, n) { var o = t[n]; return o ? Object.assign(Object.assign({}, o), e) : e })) : [e] : Array.isArray(e) ? e : [Object.assign(Object.assign({}, t), e)] : Array.isArray(t) ? t : [t]
                        }
                    }, { key: "conversionConfig", get: function() { return this.constructable[f.InternalBlockToolSettings.ConversionConfig] } }, { key: "enabledInlineTools", get: function() { return this.config[f.UserSettings.EnabledInlineTools] || !1 } }, { key: "enabledBlockTunes", get: function() { return this.config[f.UserSettings.EnabledBlockTunes] } }, { key: "pasteConfig", get: function() { return this.constructable[f.InternalBlockToolSettings.PasteConfig] || {} } }, {
                        key: "sanitizeConfig",
                        get: function() {
                            var t = (0, a.default)((0, c.default)(o.prototype), "sanitizeConfig", this),
                                e = this.baseSanitizeConfig;
                            if (d.isEmpty(t)) return e;
                            var n = {};
                            for (var r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    var i = t[r];
                                    d.isObject(i) ? n[r] = Object.assign({}, e, i) : n[r] = i
                                }
                            return n
                        }
                    }, { key: "baseSanitizeConfig", get: function() { var t = {}; return Array.from(this.inlineTools.values()).forEach((function(e) { return Object.assign(t, e.sanitizeConfig) })), Array.from(this.tunes.values()).forEach((function(e) { return Object.assign(t, e.sanitizeConfig) })), t } }]), o
                }(f.default);
            o.default = b, b.displayName = "BlockTool", y([d.cacheable], b.prototype, "sanitizeConfig", null), y([d.cacheable], b.prototype, "baseSanitizeConfig", null), t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var l = function() {
                function t(e) {
                    var n = e.api;
                    (0, r.default)(this, t), this.CSS = { button: "ce-settings__button", wrapper: "ce-tune-move-down", animation: "wobble" }, this.api = n
                }
                return (0, i.default)(t, [{
                    key: "render",
                    value: function() {
                        var t = this,
                            e = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
                        return e.appendChild(a.default.svg("arrow-down", 14, 14)), this.api.listeners.on(e, "click", (function(n) { return t.handleClick(n, e) }), !1), this.api.tooltip.onHover(e, this.api.i18n.t("Move down"), { hidingDelay: 300 }), e
                    }
                }, {
                    key: "handleClick",
                    value: function(t, e) {
                        var n = this,
                            o = this.api.blocks.getCurrentBlockIndex(),
                            r = this.api.blocks.getBlockByIndex(o + 1);
                        if (!r) return e.classList.add(this.CSS.animation), void window.setTimeout((function() { e.classList.remove(n.CSS.animation) }), 500);
                        var i = r.holder,
                            a = i.getBoundingClientRect(),
                            s = Math.abs(window.innerHeight - i.offsetHeight);
                        a.top < window.innerHeight && (s = window.scrollY + i.offsetHeight), window.scrollTo(0, s), this.api.blocks.move(o + 1), this.api.toolbar.toggleBlockSettings(!0), this.api.tooltip.hide()
                    }
                }]), t
            }();
            o.default = l, l.displayName = "MoveDownTune", l.isTune = !0, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var l = function() {
                function t(e) {
                    var n = this,
                        o = e.api;
                    (0, r.default)(this, t), this.CSS = { button: "ce-settings__button", buttonDelete: "ce-settings__button--delete", buttonConfirm: "ce-settings__button--confirm" }, this.nodes = { button: null }, this.api = o, this.resetConfirmation = function() { n.setConfirmation(!1) }
                }
                return (0, i.default)(t, [{ key: "render", value: function() { var t = this; return this.nodes.button = a.default.make("div", [this.CSS.button, this.CSS.buttonDelete], {}), this.nodes.button.appendChild(a.default.svg("cross", 12, 12)), this.api.listeners.on(this.nodes.button, "click", (function(e) { return t.handleClick(e) }), !1), this.api.tooltip.onHover(this.nodes.button, this.api.i18n.t("Delete"), { hidingDelay: 300 }), this.nodes.button } }, { key: "handleClick", value: function(t) { this.needConfirmation ? (this.api.events.off("block-settings-closed", this.resetConfirmation), this.api.blocks.delete(), this.api.toolbar.close(), this.api.tooltip.hide(), t.stopPropagation()) : (this.setConfirmation(!0), this.api.events.on("block-settings-closed", this.resetConfirmation)) } }, { key: "setConfirmation", value: function(t) { this.needConfirmation = t, this.nodes.button.classList.add(this.CSS.buttonConfirm) } }]), t
            }();
            o.default = l, l.displayName = "DeleteTune", l.isTune = !0, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        var o, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [e, n(2), n(3), n(14)], void 0 === (i = "function" == typeof(o = function(o, r, i, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o, "__esModule", { value: !0 }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var l = function() {
                function t(e) {
                    var n = e.api;
                    (0, r.default)(this, t), this.CSS = { button: "ce-settings__button", wrapper: "ce-tune-move-up", animation: "wobble" }, this.api = n
                }
                return (0, i.default)(t, [{
                    key: "render",
                    value: function() {
                        var t = this,
                            e = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
                        return e.appendChild(a.default.svg("arrow-up", 14, 14)), this.api.listeners.on(e, "click", (function(n) { return t.handleClick(n, e) }), !1), this.api.tooltip.onHover(e, this.api.i18n.t("Move up"), { hidingDelay: 300 }), e
                    }
                }, {
                    key: "handleClick",
                    value: function(t, e) {
                        var n = this,
                            o = this.api.blocks.getCurrentBlockIndex(),
                            r = this.api.blocks.getBlockByIndex(o),
                            i = this.api.blocks.getBlockByIndex(o - 1);
                        if (0 === o || !r || !i) return e.classList.add(this.CSS.animation), void window.setTimeout((function() { e.classList.remove(n.CSS.animation) }), 500);
                        var a, s = r.holder,
                            l = i.holder,
                            c = s.getBoundingClientRect(),
                            u = l.getBoundingClientRect();
                        a = u.top > 0 ? Math.abs(c.top) - Math.abs(u.top) : window.innerHeight - Math.abs(c.top) + Math.abs(u.top), window.scrollBy(0, -1 * a), this.api.blocks.move(o - 1), this.api.toolbar.toggleBlockSettings(!0), this.api.tooltip.hide()
                    }
                }]), t
            }();
            o.default = l, l.displayName = "MoveUpTune", l.isTune = !0, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function(t, e, n) {
        "use strict";
        n.r(e), e.default = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 16 16">\n  <g transform="translate(4 1.5)" fill-rule="evenodd">\n    <circle cx="1.3" cy="1.3" r="1.3"/>\n    <circle cx="6.5" cy="1.3" r="1.3"/>\n    <circle cx="6.5" cy="6.5" r="1.3"/>\n    <circle cx="1.3" cy="6.5" r="1.3"/>\n    <circle cx="6.5" cy="11.7" r="1.3"/>\n    <circle cx="1.3" cy="11.7" r="1.3"/>\n  </g>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 16 16">\n  <g transform="translate(1 1.5)" fill-rule="evenodd">\n    <rect x="6" width="2" height="13" rx="1"/>\n    <rect x=".5" y="5.5" width="13" height="2" rx="1"/>\n  </g>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="search" viewBox="0 0 16 16">\n  <path d="M12.711 2.18a7.448 7.448 0 0 1 .79 9.603l2.143 2.144a1.214 1.214 0 1 1-1.717 1.717L11.783 13.5a7.446 7.446 0 1 1 .928-11.32ZM11.39 3.61a5.5 5.5 0 1 0-7.778 7.78 5.5 5.5 0 0 0 7.778-7.78Z" fill-rule="evenodd"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>'
    }, function(t, e) { t.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1*var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus{-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width:650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar__plus{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}@media (max-width:650px){.ce-toolbar__plus{position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width:650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn{margin-left:5px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width:651px){.ce-toolbar__settings-btn{width:18px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width:650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar__settings-btn{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}@media (max-width:650px){.ce-toolbar__settings-btn{position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{--gap:8px}@media (min-width:651px){.ce-toolbox{position:absolute;top:calc(26px + var(--gap));left:0}.ce-toolbox--opened-top{top:calc(-1*(var(--gap) + var(--popover-height)))}}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{left:auto;right:0}.codex-editor--narrow .ce-toolbox .ce-popover{right:0}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-settings{top:34px;left:0;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:auto;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:none}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.ce-popover{opacity:0;will-change:opacity,transform;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:6px;min-width:200px;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;max-height:0;pointer-events:none;position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-popover{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-popover{z-index:4;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ce-popover--left-oriented:before{left:15px;margin-left:0}.ce-popover--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-popover--opened{opacity:1;max-height:270px;pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease}@media (max-width:650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover::-webkit-scrollbar{width:7px}.ce-popover::-webkit-scrollbar-thumb{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 2px 2px #eff2f5;box-shadow:inset 0 0 2px 2px #eff2f5;border-color:transparent;border-style:solid;border-width:4px 3px 4px 0}@media (max-width:650px){.ce-popover{position:fixed;max-width:none;min-width:auto;left:5px;right:5px;bottom:calc(5px + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (min-width:651px){.ce-popover__items{margin-top:5px}}.ce-popover__item{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__item:not(:last-of-type){margin-bottom:1px}@media (hover:hover){.ce-popover__item:hover{background-color:#eff2f5}}@media (max-width:650px){.ce-popover__item{font-size:16px;padding:4px}}.ce-popover__item--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-popover__item--hidden{display:none}.ce-popover__item-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;border:1px solid rgba(201,201,204,.48);border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}@media (max-width:650px){.ce-popover__item-icon{width:36px;height:36px;border-radius:8px}}.ce-popover__item-icon svg{width:12px;height:12px}.ce-popover__item-label:after{content:"";width:25px;display:inline-block}.ce-popover__item-secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width:650px){.ce-popover__item-secondary-label{display:none}}.ce-popover__no-found{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__no-found:not(:last-of-type){margin-bottom:1px}@media (hover:hover){.ce-popover__no-found:hover{background-color:#eff2f5}}@media (max-width:650px){.ce-popover__no-found{font-size:16px;padding:4px}}.ce-popover__no-found{color:#707684;display:none;cursor:default}.ce-popover__no-found--shown{display:block}.ce-popover__no-found:hover{background-color:transparent}@media (max-width:650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1d202b;opacity:.5;z-index:3;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}.ce-popover .cdx-search-field{display:none}}.ce-popover__overlay--hidden{z-index:0;opacity:0;visibility:hidden}.cdx-search-field{--icon-margin-right:10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon .icon{width:14px;height:14px;color:#707684;-ms-flex-negative:0;flex-shrink:0}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}' }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "nanoid", (function() { return s })), n.d(e, "customAlphabet", (function() { return a })), n.d(e, "customRandom", (function() { return i })), n.d(e, "urlAlphabet", (function() { return o })), n.d(e, "random", (function() { return r }));
        let o = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
        let r = t => crypto.getRandomValues(new Uint8Array(t)),
            i = (t, e, n) => {
                let o = (2 << Math.log(t.length - 1) / Math.LN2) - 1,
                    r = -~(1.6 * o * e / t.length);
                return () => {
                    let i = "";
                    for (;;) {
                        let a = n(r),
                            s = r;
                        for (; s--;)
                            if (i += t[a[s] & o] || "", i.length === e) return i
                    }
                }
            },
            a = (t, e) => i(t, e, r),
            s = (t = 21) => {
                let e = "",
                    n = crypto.getRandomValues(new Uint8Array(t));
                for (; t--;) {
                    let o = 63 & n[t];
                    e += o < 36 ? o.toString(36) : o < 62 ? (o - 26).toString(36).toUpperCase() : o < 63 ? "_" : "-"
                }
                return e
            }
    }])
}));