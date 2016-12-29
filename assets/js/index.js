! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = Q.type(e);
        return "function" !== n && !Q.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function r(e, t, n) {
        if (Q.isFunction(t)) return Q.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Q.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (se.test(t)) return Q.filter(t, e, n);
            t = Q.filter(t, e)
        }
        return Q.grep(e, function(e) {
            return B.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = pe[e] = {};
        return Q.each(e.match(he) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        J.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Q.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Q.expando + Math.random()
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(xe, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : we.test(n) ? Q.parseJSON(n) : n)
                } catch (e) {}
                ve.set(e, t, n)
            } else n = void 0;
        return n
    }

    function c() {
        return !0
    }

    function l() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        return Q.nodeName(e, "table") && Q.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function p(e) {
        var t = Le.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; n < r; n++) ye.set(e[n], "globalEval", !t || ye.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, a, s, u, c;
        if (1 === t.nodeType) {
            if (ye.hasData(e) && (o = ye.access(e), a = ye.set(t, o), c = o.events)) {
                delete a.handle, a.events = {};
                for (i in c)
                    for (n = 0, r = c[i].length; n < r; n++) Q.event.add(t, i, c[i][n])
            }
            ve.hasData(e) && (s = ve.access(e), u = Q.extend({}, s), ve.set(t, u))
        }
    }

    function y(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Q.nodeName(e, t) ? Q.merge([e], n) : n
    }

    function v(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Te.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function w(t, n) {
        var r, i = Q(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Q.css(i[0], "display");
        return i.detach(), o
    }

    function x(e) {
        var t = J,
            n = Ie[e];
        return n || (n = w(e, t), "none" !== n && n || (We = (We || Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = w(e, t), We.detach()), Ie[e] = n), n
    }

    function b(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || Re(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Q.contains(e.ownerDocument, e) || (a = Q.style(e, t)), Ge.test(a) && qe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function k(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Xe.length; i--;)
            if (t = Xe[i] + n, t in e) return t;
        return r
    }

    function T(e, t, n) {
        var r = ze.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function D(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += Q.css(e, n + _e[o], !0, i)), r ? ("content" === n && (a -= Q.css(e, "padding" + _e[o], !0, i)), "margin" !== n && (a -= Q.css(e, "border" + _e[o] + "Width", !0, i))) : (a += Q.css(e, "padding" + _e[o], !0, i), "padding" !== n && (a += Q.css(e, "border" + _e[o] + "Width", !0, i)));
        return a
    }

    function C(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Re(e),
            a = "border-box" === Q.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = b(e, t, o), (i < 0 || null == i) && (i = e.style[t]), Ge.test(i)) return i;
            r = a && (Z.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + D(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function S(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = ye.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && ke(r) && (o[a] = ye.access(r, "olddisplay", x(r.nodeName)))) : (i = ke(r), "none" === n && i || ye.set(r, "olddisplay", i ? n : Q.css(r, "display"))));
        for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function M(e, t, n, r, i) {
        return new M.prototype.init(e, t, n, r, i)
    }

    function N() {
        return setTimeout(function() {
            Ze = void 0
        }), Ze = Q.now()
    }

    function j(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = _e[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function E(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function A(e, t, n) {
        var r, i, o, a, s, u, c, l, f = this,
            d = {},
            h = e.style,
            p = e.nodeType && ke(e),
            g = ye.get(e, "fxshow");
        n.queue || (s = Q._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, Q.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = Q.css(e, "display"), l = "none" === c ? ye.get(e, "olddisplay") || x(e.nodeName) : c, "inline" === l && "none" === Q.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Ke.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    p = !0
                }
                d[r] = g && g[r] || Q.style(e, r)
            } else c = void 0;
        if (Q.isEmptyObject(d)) "inline" === ("none" === c ? x(e.nodeName) : c) && (h.display = c);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = ye.access(e, "fxshow", {}), o && (g.hidden = !p), p ? Q(e).show() : f.done(function() {
                Q(e).hide()
            }), f.done(function() {
                var t;
                ye.remove(e, "fxshow");
                for (t in d) Q.style(e, t, d[t])
            });
            for (r in d) a = E(p ? g[r] : 0, r, f), r in g || (g[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function O(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = Q.camelCase(n), i = t[r], o = e[n], Q.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = Q.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function Y(e, t, n) {
        var r, i, o = 0,
            a = tt.length,
            s = Q.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Ze || N(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; a < u; a++) c.tweens[a].run(o);
                return s.notifyWith(e, [c, o, n]), o < 1 && u ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: Q.extend({}, t),
                opts: Q.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ze || N(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Q.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }),
            l = c.props;
        for (O(l, c.opts.specialEasing); o < a; o++)
            if (r = tt[o].call(c, e, l, c.opts)) return r;
        return Q.map(l, E, c), Q.isFunction(c.opts.start) && c.opts.start.call(e, c), Q.fx.timer(Q.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(he) || [];
            if (Q.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function L(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, Q.each(e[s] || [], function(e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), u
        }
        var o = {},
            a = e === bt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function H(e, t) {
        var n, r, i = Q.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Q.extend(!0, e, r), e
    }

    function P(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function W(e, t, n, r) {
        var i, o, a, s, u, c = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = l.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = c[u + " " + o] || c["* " + o], !a)
                for (i in c)
                    if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function I(e, t, n, r) {
        var i;
        if (Q.isArray(t)) Q.each(t, function(t, i) {
            n || Tt.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== Q.type(t)) r(e, t);
        else
            for (i in t) I(e + "[" + i + "]", t[i], n, r)
    }

    function q(e) {
        return Q.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var G = [],
        R = G.slice,
        $ = G.concat,
        z = G.push,
        B = G.indexOf,
        U = {},
        V = U.toString,
        X = U.hasOwnProperty,
        Z = {},
        J = e.document,
        K = "2.1.1",
        Q = function(e, t) {
            return new Q.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(e, t) {
            return t.toUpperCase()
        };
    Q.fn = Q.prototype = {
        jquery: K,
        constructor: Q,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : R.call(this)
        },
        pushStack: function(e) {
            var t = Q.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Q.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Q.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: z,
        sort: G.sort,
        splice: G.splice
    }, Q.extend = Q.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Q.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (c && r && (Q.isPlainObject(r) || (i = Q.isArray(r))) ? (i ? (i = !1, o = n && Q.isArray(n) ? n : []) : o = n && Q.isPlainObject(n) ? n : {}, a[t] = Q.extend(c, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, Q.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Q.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Q.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return "object" === Q.type(e) && !e.nodeType && !Q.isWindow(e) && !(e.constructor && !X.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[V.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Q.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; o < a && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; o < a && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Q.merge(r, "string" == typeof e ? [e] : e) : z.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : B.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; o < a; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return $.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), Q.isFunction(e)) return r = R.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(R.call(arguments)))
            }, i.guid = e.guid = e.guid || Q.guid++, i
        },
        now: Date.now,
        support: Z
    }), Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        U["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, c, f, h, p, g;
            if ((t ? t.ownerDocument || t : I) !== A && E(t), t = t || A, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (Y && !r) {
                if (i = ve.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && P(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && b.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                    }
                if (b.qsa && (!F || !F.test(e))) {
                    if (h = f = W, p = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = D(e), (f = t.getAttribute("id")) ? h = f.replace(xe, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = c.length; u--;) c[u] = h + d(c[u]);
                        p = we.test(e) && l(t.parentNode) || t, g = c.join(",")
                    }
                    if (g) try {
                        return Q.apply(n, p.querySelectorAll(g)), n
                    } catch (e) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) _.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }

        function f() {}

        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = G++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, c = [q, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[W] || (t[W] = {}), (s = u[r]) && s[0] === q && s[1] === o) return c[2] = s[2];
                            if (u[r] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
            return a
        }

        function y(e, t, n, i, o, a) {
            return i && !i[W] && (i = y(i)), o && !o[W] && (o = y(o, a)), r(function(r, a, s, u) {
                var c, l, f, d = [],
                    h = [],
                    p = a.length,
                    y = r || g(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !r && t ? y : m(y, d, e, s, u),
                    w = n ? o || (r ? e : p || i) ? [] : a : v;
                if (n && n(v, w, s, u), i)
                    for (c = m(w, h), i(c, [], s, u), l = c.length; l--;)(f = c[l]) && (w[h[l]] = !(v[h[l]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], l = w.length; l--;)(f = w[l]) && c.push(v[l] = f);
                            o(null, w = [], c, u)
                        }
                        for (l = w.length; l--;)(f = w[l]) && (c = o ? te.call(r, f) : d[l]) > -1 && (r[c] = !(a[c] = f))
                    }
                } else w = m(w === a ? w.splice(p, w.length) : w), o ? o(null, a, w, u) : Q.apply(a, w)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                    return e === t
                }, a, !0), c = h(function(e) {
                    return te.call(t, e) > -1
                }, a, !0), l = [function(e, n, r) {
                    return !o && (r || n !== M) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r))
                }]; s < i; s++)
                if (n = _.relative[e[s].type]) l = [h(p(l), n)];
                else {
                    if (n = _.filter[e[s].type].apply(null, e[s].matches), n[W]) {
                        for (r = ++s; r < i && !_.relative[e[r].type]; r++);
                        return y(s > 1 && p(l), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && d(e))
                    }
                    l.push(n)
                }
            return p(l)
        }

        function w(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, c) {
                    var l, f, d, h = 0,
                        p = "0",
                        g = r && [],
                        y = [],
                        v = M,
                        w = r || o && _.find.TAG("*", c),
                        x = q += null == v ? 1 : Math.random() || .1,
                        b = w.length;
                    for (c && (M = a !== A && a); p !== b && null != (l = w[p]); p++) {
                        if (o && l) {
                            for (f = 0; d = e[f++];)
                                if (d(l, a, s)) {
                                    u.push(l);
                                    break
                                }
                            c && (q = x)
                        }
                        i && ((l = !d && l) && h--, r && g.push(l))
                    }
                    if (h += p, i && p !== h) {
                        for (f = 0; d = n[f++];) d(g, y, a, s);
                        if (r) {
                            if (h > 0)
                                for (; p--;) g[p] || y[p] || (y[p] = J.call(u));
                            y = m(y)
                        }
                        Q.apply(u, y), c && !r && y.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                    }
                    return c && (q = x, M = v), g
                };
            return i ? r(a) : a
        }
        var x, b, _, k, T, D, C, S, M, N, j, E, A, O, Y, F, L, H, P, W = "sizzle" + -new Date,
            I = e.document,
            q = 0,
            G = 0,
            R = n(),
            $ = n(),
            z = n(),
            B = function(e, t) {
                return e === t && (j = !0), 0
            },
            U = "undefined",
            V = 1 << 31,
            X = {}.hasOwnProperty,
            Z = [],
            J = Z.pop,
            K = Z.push,
            Q = Z.push,
            ee = Z.slice,
            te = Z.indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            ae = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
            se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
            ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            ce = new RegExp("^" + re + "*," + re + "*"),
            le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
            de = new RegExp(se),
            he = new RegExp("^" + oe + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            we = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            _e = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Q.apply(Z = ee.call(I.childNodes), I.childNodes), Z[I.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: Z.length ? function(e, t) {
                    K.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, E = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : I,
                r = n.defaultView;
            return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, O = n.documentElement, Y = !T(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                E()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                E()
            })), b.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = ye.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), b.getById = i(function(e) {
                return O.appendChild(e).id = W, !n.getElementsByName || !n.getElementsByName(W).length
            }), b.getById ? (_.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && Y) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, _.filter.ID = function(e) {
                var t = e.replace(be, _e);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete _.find.ID, _.filter.ID = function(e) {
                var t = e.replace(be, _e);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), _.find.TAG = b.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== U) return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, _.find.CLASS = b.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== U && Y) return t.getElementsByClassName(e)
            }, L = [], F = [], (b.qsa = ye.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (b.matchesSelector = ye.test(H = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(e) {
                b.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), L.push("!=", se)
            }), F = F.length && new RegExp(F.join("|")), L = L.length && new RegExp(L.join("|")), t = ye.test(O.compareDocumentPosition), P = t || ye.test(O.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, B = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !b.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === I && P(I, e) ? -1 : t === n || t.ownerDocument === I && P(I, t) ? 1 : N ? te.call(N, e) - te.call(N, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var r, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    c = [t];
                if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : N ? te.call(N, e) - te.call(N, t) : 0;
                if (o === s) return a(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) c.unshift(r);
                for (; u[i] === c[i];) i++;
                return i ? a(u[i], c[i]) : u[i] === I ? -1 : c[i] === I ? 1 : 0
            }, n) : A
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== A && E(e), n = n.replace(fe, "='$1']"), b.matchesSelector && Y && (!L || !L.test(n)) && (!F || !F.test(n))) try {
                var r = H.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, A, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== A && E(e), P(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== A && E(e);
            var n = _.attrHandle[t.toLowerCase()],
                r = n && X.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !Y) : void 0;
            return void 0 !== r ? r : b.attributes || !Y ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (j = !b.detectDuplicates, N = !b.sortStable && e.slice(0), e.sort(B), j) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return N = null, e
        }, k = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += k(t);
            return n
        }, _ = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(be, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = D(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, _e).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && R(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var c, l, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? m.firstChild : m.lastChild], a && v) {
                                for (l = m[W] || (m[W] = {}), c = l[e] || [], h = c[0] === q && c[1], d = c[0] === q && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (d = h = 0) || p.pop();)
                                    if (1 === f.nodeType && ++d && f === t) {
                                        l[e] = [q, h, d];
                                        break
                                    }
                            } else if (v && (c = (t[W] || (t[W] = {}))[e]) && c[0] === q) d = c[1];
                            else
                                for (;
                                    (f = ++h && f && f[g] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++d || (v && ((f[W] || (f[W] = {}))[e] = [q, d]), f !== t)););
                            return d -= i, d === r || d % r === 0 && d / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = te.call(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = C(e.replace(ue, "$1"));
                    return i[W] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, _e).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = Y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) _.pseudos[x] = u(x);
        return f.prototype = _.filters = _.pseudos, _.setFilters = new f, D = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, c, l = $[e + " "];
            if (l) return n ? 0 : l.slice(0);
            for (s = e, u = [], c = _.preFilter; s;) {
                r && !(i = ce.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), s = s.slice(r.length));
                for (a in _.filter) !(i = pe[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : $(e, u).slice(0)
        }, C = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = z[e + " "];
            if (!o) {
                for (t || (t = D(e)), n = t.length; n--;) o = v(t[n]), o[W] ? r.push(o) : i.push(o);
                o = z(e, w(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i, o, a, s, u, c = "function" == typeof e && e,
                f = !r && D(e = c.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && Y && _.relative[o[1].type]) {
                    if (t = (_.find.ID(a.matches[0].replace(be, _e), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !_.relative[s = a.type]);)
                    if ((u = _.find[s]) && (r = u(a.matches[0].replace(be, _e), we.test(o[0].type) && l(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && d(o), !e) return Q.apply(n, r), n;
                        break
                    }
            }
            return (c || C(e, f))(r, t, !Y, n, we.test(e) && l(t.parentNode) || t), n
        }, b.sortStable = W.split("").sort(B).join("") === W, b.detectDuplicates = !!j, E(), b.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Q.find = ie, Q.expr = ie.selectors, Q.expr[":"] = Q.expr.pseudos, Q.unique = ie.uniqueSort, Q.text = ie.getText, Q.isXMLDoc = ie.isXML, Q.contains = ie.contains;
    var oe = Q.expr.match.needsContext,
        ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
    Q.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Q.find.matchesSelector(r, e) ? [r] : [] : Q.find.matches(e, Q.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Q.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Q(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (Q.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) Q.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Q.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? Q(e) : e || [], !1).length
        }
    });
    var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        le = Q.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Q ? t[0] : t, Q.merge(this, Q.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), ae.test(n[1]) && Q.isPlainObject(t))
                        for (n in t) Q.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Q.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Q) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Q.makeArray(e, this))
        };
    le.prototype = Q.fn, ue = Q(J);
    var fe = /^(?:parents|prev(?:Until|All))/,
        de = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Q.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Q(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Q.fn.extend({
        has: function(e) {
            var t = Q(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (Q.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? Q(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Q.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Q.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? B.call(Q(e), this[0]) : B.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Q.unique(Q.merge(this.get(), Q(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Q.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Q.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Q.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Q.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Q.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Q.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Q.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Q.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Q.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Q.merge([], e.childNodes)
        }
    }, function(e, t) {
        Q.fn[e] = function(n, r) {
            var i = Q.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Q.filter(r, i)), this.length > 1 && (de[e] || Q.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var he = /\S+/g,
        pe = {};
    Q.Callbacks = function(e) {
        e = "string" == typeof e ? pe[e] || o(e) : Q.extend({}, e);
        var t, n, r, i, a, s, u = [],
            c = !e.once && [],
            l = function(o) {
                for (t = e.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && s < a; s++)
                    if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (c ? c.length && l(c.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function t(n) {
                            Q.each(n, function(n, r) {
                                var i = Q.type(r);
                                "function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
                            })
                        }(arguments), r ? a = u.length : t && (i = n, l(t))
                    }
                    return this
                },
                remove: function() {
                    return u && Q.each(arguments, function(e, t) {
                        for (var n;
                            (n = Q.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (n <= a && a--, n <= s && s--)
                    }), this
                },
                has: function(e) {
                    return e ? Q.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], a = 0, this
                },
                disable: function() {
                    return u = c = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return c = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !u || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? c.push(t) : l(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, Q.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Q.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Q.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Q.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Q.Deferred(function(n) {
                            Q.each(t, function(t, o) {
                                var a = Q.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && Q.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Q.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Q.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = R.call(arguments),
                a = o.length,
                s = 1 !== a || e && Q.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : Q.Deferred(),
                c = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? R.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && Q.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var ge;
    Q.fn.ready = function(e) {
        return Q.ready.promise().done(e), this
    }, Q.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Q.readyWait++ : Q.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Q.readyWait : Q.isReady) || (Q.isReady = !0, e !== !0 && --Q.readyWait > 0 || (ge.resolveWith(J, [Q]), Q.fn.triggerHandler && (Q(J).triggerHandler("ready"), Q(J).off("ready"))))
        }
    }), Q.ready.promise = function(t) {
        return ge || (ge = Q.Deferred(), "complete" === J.readyState ? setTimeout(Q.ready) : (J.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), ge.promise(t)
    }, Q.ready.promise();
    var me = Q.access = function(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            c = null == n;
        if ("object" === Q.type(n)) {
            i = !0;
            for (s in n) Q.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, Q.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                return c.call(Q(e), n)
            })), t))
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
    };
    Q.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Q.acceptData, s.prototype = {
        key: function(e) {
            if (!s.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Q.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (Q.isEmptyObject(o)) Q.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Q.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                a = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Q.isArray(t) ? r = t.concat(t.map(Q.camelCase)) : (i = Q.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(he) || [])), n = r.length;
                for (; n--;) delete a[r[n]]
            }
        },
        hasData: function(e) {
            return !Q.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ye = new s,
        ve = new s,
        we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xe = /([A-Z])/g;
    Q.extend({
        hasData: function(e) {
            return ve.hasData(e) || ye.hasData(e)
        },
        data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        removeData: function(e, t) {
            ve.remove(e, t)
        },
        _data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        _removeData: function(e, t) {
            ye.remove(e, t)
        }
    }), Q.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ve.get(o), 1 === o.nodeType && !ye.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Q.camelCase(r.slice(5)), u(o, r, i[r])));
                    ye.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ve.set(this, e)
            }) : me(this, function(t) {
                var n, r = Q.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ve.get(o, e), void 0 !== n) return n;
                    if (n = ve.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ve.get(this, r);
                    ve.set(this, r, t), e.indexOf("-") !== -1 && void 0 !== n && ve.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ve.remove(this, e)
            })
        }
    }), Q.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = ye.get(e, t), n && (!r || Q.isArray(n) ? r = ye.access(e, t, Q.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Q.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Q._queueHooks(e, t),
                a = function() {
                    Q.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ye.get(e, n) || ye.access(e, n, {
                empty: Q.Callbacks("once memory").add(function() {
                    ye.remove(e, [t + "queue", n])
                })
            })
        }
    }), Q.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Q.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Q.queue(this, e, t);
                Q._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Q.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Q.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = Q.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ye.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _e = ["Top", "Right", "Bottom", "Left"],
        ke = function(e, t) {
            return e = t || e, "none" === Q.css(e, "display") || !Q.contains(e.ownerDocument, e)
        },
        Te = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = J.createDocumentFragment(),
            t = e.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var De = "undefined";
    Z.focusinBubbles = "onfocusin" in e;
    var Ce = /^key/,
        Se = /^(?:mouse|pointer|contextmenu)|click/,
        Me = /^(?:focusinfocus|focusoutblur)$/,
        Ne = /^([^.]*)(?:\.(.+)|)$/;
    Q.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, c, l, f, d, h, p, g, m = ye.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Q.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return typeof Q !== De && Q.event.triggered !== t.type ? Q.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(he) || [""], c = t.length; c--;) s = Ne.exec(t[c]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h && (f = Q.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = Q.event.special[h] || {}, l = Q.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Q.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (d = u[h]) || (d = u[h] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, p, a) !== !1 || e.addEventListener && e.addEventListener(h, a, !1)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), Q.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, c, l, f, d, h, p, g, m = ye.hasData(e) && ye.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(he) || [""], c = t.length; c--;)
                    if (s = Ne.exec(t[c]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                        for (f = Q.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) l = d[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
                        a && !d.length && (f.teardown && f.teardown.call(e, p, m.handle) !== !1 || Q.removeEvent(e, h, m.handle), delete u[h])
                    } else
                        for (h in u) Q.event.remove(e, h + t[c], n, r, !0);
                Q.isEmptyObject(u) && (delete m.handle, ye.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, c, l, f, d = [r || J],
                h = X.call(t, "type") ? t.type : t,
                p = X.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !Me.test(h + Q.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[Q.expando] ? t : new Q.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Q.makeArray(n, [t]), f = Q.event.special[h] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Q.isWindow(r)) {
                    for (u = f.delegateType || h, Me.test(u + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (r.ownerDocument || J) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || h, l = (ye.get(a, "events") || {})[t.type] && ye.get(a, "handle"), l && l.apply(a, n), l = c && a[c], l && l.apply && Q.acceptData(a) && (t.result = l.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = h, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Q.acceptData(r) || c && Q.isFunction(r[h]) && !Q.isWindow(r) && (s = r[c], s && (r[c] = null), Q.event.triggered = h, r[h](), Q.event.triggered = void 0, s && (r[c] = s)), t.result
            }
        },
        dispatch: function(e) {
            e = Q.event.fix(e);
            var t, n, r, i, o, a = [],
                s = R.call(arguments),
                u = (ye.get(this, "events") || {})[e.type] || [],
                c = Q.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = Q.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((Q.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; n < s; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Q(i, this).index(u) >= 0 : Q.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Q.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Se.test(i) ? this.mouseHooks : Ce.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Q.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === f() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && Q.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return Q.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Q.extend(new Q.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Q.event.trigger(i, null, t) : Q.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Q.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Q.Event = function(e, t) {
        return this instanceof Q.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : l) : this.type = e, t && Q.extend(this, t), this.timeStamp = e && e.timeStamp || Q.now(), void(this[Q.expando] = !0)) : new Q.Event(e, t)
    }, Q.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Q.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Q.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || Q.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Z.focusinBubbles || Q.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Q.event.simulate(t, e.target, Q.event.fix(e), !0)
        };
        Q.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ye.access(r, t);
                i || r.addEventListener(e, n, !0), ye.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ye.access(r, t) - 1;
                i ? ye.access(r, t, i) : (r.removeEventListener(e, n, !0), ye.remove(r, t))
            }
        }
    }), Q.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = l;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return Q().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Q.guid++)), this.each(function() {
                Q.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Q(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = l), this.each(function() {
                Q.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Q.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return Q.event.trigger(e, t, n, !0)
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ee = /<([\w:]+)/,
        Ae = /<|&#?\w+;/,
        Oe = /<(?:script|style|link)/i,
        Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Fe = /^$|\/(?:java|ecma)script/i,
        Le = /^true\/(.*)/,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td, Q.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = Q.contains(e.ownerDocument, e);
            if (!(Z.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Q.isXMLDoc(e)))
                for (a = y(s), o = y(e), r = 0, i = o.length; r < i; r++) v(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || y(e), a = a || y(s), r = 0, i = o.length; r < i; r++) m(o[r], a[r]);
                else m(e, s);
            return a = y(s, "script"), a.length > 0 && g(a, !u && y(e, "script")), s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, c, l = t.createDocumentFragment(), f = [], d = 0, h = e.length; d < h; d++)
                if (i = e[d], i || 0 === i)
                    if ("object" === Q.type(i)) Q.merge(f, i.nodeType ? [i] : i);
                    else if (Ae.test(i)) {
                for (o = o || l.appendChild(t.createElement("div")), a = (Ee.exec(i) || ["", ""])[1].toLowerCase(), s = Pe[a] || Pe._default, o.innerHTML = s[1] + i.replace(je, "<$1></$2>") + s[2], c = s[0]; c--;) o = o.lastChild;
                Q.merge(f, o.childNodes), o = l.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (l.textContent = "", d = 0; i = f[d++];)
                if ((!r || Q.inArray(i, r) === -1) && (u = Q.contains(i.ownerDocument, i), o = y(l.appendChild(i), "script"), u && g(o), n))
                    for (c = 0; i = o[c++];) Fe.test(i.type || "") && n.push(i);
            return l
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Q.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (Q.acceptData(n) && (i = n[ye.expando], i && (t = ye.cache[i]))) {
                    if (t.events)
                        for (r in t.events) o[r] ? Q.event.remove(n, r) : Q.removeEvent(n, r, t.handle);
                    ye.cache[i] && delete ye.cache[i]
                }
                delete ve.cache[n[ve.expando]]
            }
        }
    }), Q.fn.extend({
        text: function(e) {
            return me(this, function(e) {
                return void 0 === e ? Q.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Q.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Q.cleanData(y(n)), n.parentNode && (t && Q.contains(n.ownerDocument, n) && g(y(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Q.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return Q.clone(this, e, t)
            })
        },
        html: function(e) {
            return me(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !Pe[(Ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(je, "<$1></$2>");
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (Q.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Q.cleanData(y(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = $.apply([], e);
            var n, r, i, o, a, s, u = 0,
                c = this.length,
                l = this,
                f = c - 1,
                d = e[0],
                g = Q.isFunction(d);
            if (g || c > 1 && "string" == typeof d && !Z.checkClone && Ye.test(d)) return this.each(function(n) {
                var r = l.eq(n);
                g && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
            });
            if (c && (n = Q.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Q.map(y(n, "script"), h), o = i.length; u < c; u++) a = n, u !== f && (a = Q.clone(a, !0, !0), o && Q.merge(i, y(a, "script"))), t.call(this[u], a, u);
                if (o)
                    for (s = i[i.length - 1].ownerDocument, Q.map(i, p), u = 0; u < o; u++) a = i[u], Fe.test(a.type || "") && !ye.access(a, "globalEval") && Q.contains(s, a) && (a.src ? Q._evalUrl && Q._evalUrl(a.src) : Q.globalEval(a.textContent.replace(He, "")))
            }
            return this
        }
    }), Q.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Q.fn[e] = function(e) {
            for (var n, r = [], i = Q(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), Q(i[a])[t](n), z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We, Ie = {},
        qe = /^margin/,
        Ge = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
        Re = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = J.documentElement,
            o = J.createElement("div"),
            a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Q.extend(Z, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(J.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), t
            }
        }))
    }(), Q.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    };
    var $e = /^(none|table(?!-c[ea]).+)/,
        ze = new RegExp("^(" + be + ")(.*)$", "i"),
        Be = new RegExp("^([+-])=(" + be + ")", "i"),
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xe = ["Webkit", "O", "Moz", "ms"];
    Q.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = b(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = Q.camelCase(t),
                    u = e.style;
                return t = Q.cssProps[s] || (Q.cssProps[s] = k(u, s)), a = Q.cssHooks[t] || Q.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Be.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Q.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Q.cssNumber[s] || (n += "px"), Z.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = Q.camelCase(t);
            return t = Q.cssProps[s] || (Q.cssProps[s] = k(e.style, s)), a = Q.cssHooks[t] || Q.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = b(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Q.isNumeric(o) ? o || 0 : i) : i
        }
    }), Q.each(["height", "width"], function(e, t) {
        Q.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return $e.test(Q.css(e, "display")) && 0 === e.offsetWidth ? Q.swap(e, Ue, function() {
                    return C(e, t, r)
                }) : C(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && Re(e);
                return T(e, n, r ? D(e, t, r, "border-box" === Q.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Q.cssHooks.marginRight = _(Z.reliableMarginRight, function(e, t) {
        if (t) return Q.swap(e, {
            display: "inline-block"
        }, b, [e, "marginRight"])
    }), Q.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Q.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + _e[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, qe.test(e) || (Q.cssHooks[e + t].set = T)
    }), Q.fn.extend({
        css: function(e, t) {
            return me(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Q.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = Q.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? Q.style(e, t, n) : Q.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ke(this) ? Q(this).show() : Q(this).hide()
            })
        }
    }), Q.Tween = M, M.prototype = {
        constructor: M,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Q.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Q.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Q.cssProps[e.prop]] || Q.cssHooks[e.prop]) ? Q.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Q.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Q.fx = M.prototype.init, Q.fx.step = {};
    var Ze, Je, Ke = /^(?:toggle|show|hide)$/,
        Qe = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [A],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Qe.exec(t),
                    o = i && i[3] || (Q.cssNumber[e] ? "" : "px"),
                    a = (Q.cssNumber[e] || "px" !== o && +r) && Qe.exec(Q.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, Q.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Q.Animation = Q.extend(Y, {
            tweener: function(e, t) {
                Q.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), Q.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Q.extend({}, e) : {
                complete: n || !n && t || Q.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Q.isFunction(t) && t
            };
            return r.duration = Q.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Q.fx.speeds ? Q.fx.speeds[r.duration] : Q.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Q.isFunction(r.old) && r.old.call(this), r.queue && Q.dequeue(this, r.queue)
            }, r
        }, Q.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ke).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Q.isEmptyObject(e),
                    o = Q.speed(t, n, r),
                    a = function() {
                        var t = Y(this, Q.extend({}, e), o);
                        (i || ye.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Q.timers,
                        a = ye.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && et.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || Q.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ye.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Q.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, Q.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Q.each(["toggle", "show", "hide"], function(e, t) {
            var n = Q.fn[t];
            Q.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, r, i)
            }
        }), Q.each({
            slideDown: j("show"),
            slideUp: j("hide"),
            slideToggle: j("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Q.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Q.timers = [], Q.fx.tick = function() {
            var e, t = 0,
                n = Q.timers;
            for (Ze = Q.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Q.fx.stop(), Ze = void 0
        }, Q.fx.timer = function(e) {
            Q.timers.push(e), e() ? Q.fx.start() : Q.timers.pop()
        }, Q.fx.interval = 13, Q.fx.start = function() {
            Je || (Je = setInterval(Q.fx.tick, Q.fx.interval))
        }, Q.fx.stop = function() {
            clearInterval(Je), Je = null
        }, Q.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Q.fn.delay = function(e, t) {
            return e = Q.fx ? Q.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = J.createElement("input"),
                t = J.createElement("select"),
                n = t.appendChild(J.createElement("option"));
            e.type = "checkbox", Z.checkOn = "" !== e.value, Z.optSelected = n.selected, t.disabled = !0, Z.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Z.radioValue = "t" === e.value
        }();
    var rt, it, ot = Q.expr.attrHandle;
    Q.fn.extend({
        attr: function(e, t) {
            return me(this, Q.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Q.removeAttr(this, e)
            })
        }
    }), Q.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === De ? Q.prop(e, t, n) : (1 === o && Q.isXMLDoc(e) || (t = t.toLowerCase(), r = Q.attrHooks[t] || (Q.expr.match.bool.test(t) ? it : rt)),
                void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Q.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Q.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(he);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = Q.propFix[n] || n, Q.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Z.radioValue && "radio" === t && Q.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function(e, t, n) {
            return t === !1 ? Q.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Q.each(Q.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ot[t] || Q.find.attr;
        ot[t] = function(e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
        }
    });
    var at = /^(?:input|select|textarea|button)$/i;
    Q.fn.extend({
        prop: function(e, t) {
            return me(this, Q.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Q.propFix[e] || e]
            })
        }
    }), Q.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Q.isXMLDoc(e), o && (t = Q.propFix[t] || t, i = Q.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Z.optSelected || (Q.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Q.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Q.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    Q.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = "string" == typeof e && e,
                u = 0,
                c = this.length;
            if (Q.isFunction(e)) return this.each(function(t) {
                Q(this).addClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(he) || []; u < c; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = Q.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                c = this.length;
            if (Q.isFunction(e)) return this.each(function(t) {
                Q(this).removeClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(he) || []; u < c; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? Q.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Q.isFunction(e) ? this.each(function(n) {
                Q(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = Q(this), o = e.match(he) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else n !== De && "boolean" !== n || (this.className && ye.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ye.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    Q.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = Q.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Q(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Q.isArray(i) && (i = Q.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = Q.valHooks[i.type] || Q.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
            }
        }
    }), Q.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Q.find.attr(e, "value");
                    return null != t ? t : Q.trim(Q.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (n = r[u], (n.selected || u === i) && (Z.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Q.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Q(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Q.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Q.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Q.each(["radio", "checkbox"], function() {
        Q.valHooks[this] = {
            set: function(e, t) {
                if (Q.isArray(t)) return e.checked = Q.inArray(Q(e).val(), t) >= 0
            }
        }, Z.checkOn || (Q.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Q.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Q.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ct = Q.now(),
        lt = /\?/;
    Q.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Q.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || Q.error("Invalid XML: " + e), t
    };
    var ft, dt, ht = /#.*$/,
        pt = /([?&])_=[^&]*/,
        gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        yt = /^(?:GET|HEAD)$/,
        vt = /^\/\//,
        wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        xt = {},
        bt = {},
        _t = "*/".concat("*");
    try {
        dt = location.href
    } catch (e) {
        dt = J.createElement("a"), dt.href = "", dt = dt.href
    }
    ft = wt.exec(dt.toLowerCase()) || [], Q.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: dt,
            type: "GET",
            isLocal: mt.test(ft[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Q.parseJSON,
                "text xml": Q.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, Q.ajaxSettings), t) : H(Q.ajaxSettings, e)
        },
        ajaxPrefilter: F(xt),
        ajaxTransport: F(bt),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var u, l, y, v, x, _ = t;
                2 !== w && (w = 2, s && clearTimeout(s), r = void 0, o = a || "", b.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (v = P(f, b, n)), v = W(f, v, b, u), u ? (f.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (Q.lastModified[i] = x), x = b.getResponseHeader("etag"), x && (Q.etag[i] = x)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = v.state, l = v.data, y = v.error, u = !y)) : (y = _, !e && _ || (_ = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || _) + "", u ? p.resolveWith(d, [l, _, b]) : p.rejectWith(d, [b, _, y]), b.statusCode(m), m = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [b, f, u ? l : y]), g.fireWith(d, [b, _]), c && (h.trigger("ajaxComplete", [b, f]), --Q.active || Q.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, u, c, l, f = Q.ajaxSetup({}, t),
                d = f.context || f,
                h = f.context && (d.nodeType || d.jquery) ? Q(d) : Q.event,
                p = Q.Deferred(),
                g = Q.Callbacks("once memory"),
                m = f.statusCode || {},
                y = {},
                v = {},
                w = 0,
                x = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!a)
                                for (a = {}; t = gt.exec(o);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else b.always(e[b.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (p.promise(b).complete = g.add, b.success = b.done, b.error = b.fail, f.url = ((e || f.url || dt) + "").replace(ht, "").replace(vt, ft[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Q.trim(f.dataType || "*").toLowerCase().match(he) || [""], null == f.crossDomain && (u = wt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === ft[1] && u[2] === ft[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (ft[3] || ("http:" === ft[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Q.param(f.data, f.traditional)), L(xt, f, t, b), 2 === w) return b;
            c = f.global, c && 0 === Q.active++ && Q.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !yt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (lt.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pt.test(i) ? i.replace(pt, "$1_=" + ct++) : i + (lt.test(i) ? "&" : "?") + "_=" + ct++)), f.ifModified && (Q.lastModified[i] && b.setRequestHeader("If-Modified-Since", Q.lastModified[i]), Q.etag[i] && b.setRequestHeader("If-None-Match", Q.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && b.setRequestHeader("Content-Type", f.contentType), b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : f.accepts["*"]);
            for (l in f.headers) b.setRequestHeader(l, f.headers[l]);
            if (f.beforeSend && (f.beforeSend.call(d, b, f) === !1 || 2 === w)) return b.abort();
            x = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[l](f[l]);
            if (r = L(bt, f, t, b)) {
                b.readyState = 1, c && h.trigger("ajaxSend", [b, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                    b.abort("timeout")
                }, f.timeout));
                try {
                    w = 1, r.send(y, n)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return b
        },
        getJSON: function(e, t, n) {
            return Q.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Q.get(e, void 0, t, "script")
        }
    }), Q.each(["get", "post"], function(e, t) {
        Q[t] = function(e, n, r, i) {
            return Q.isFunction(n) && (i = i || r, r = n, n = void 0), Q.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Q.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Q.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Q._evalUrl = function(e) {
        return Q.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Q.fn.extend({
        wrapAll: function(e) {
            var t;
            return Q.isFunction(e) ? this.each(function(t) {
                Q(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Q(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return Q.isFunction(e) ? this.each(function(t) {
                Q(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = Q(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Q.isFunction(e);
            return this.each(function(n) {
                Q(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Q.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Q.expr.filters.visible = function(e) {
        return !Q.expr.filters.hidden(e)
    };
    var kt = /%20/g,
        Tt = /\[\]$/,
        Dt = /\r?\n/g,
        Ct = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;
    Q.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = Q.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(e) || e.jquery && !Q.isPlainObject(e)) Q.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) I(n, e[n], t, i);
        return r.join("&").replace(kt, "+")
    }, Q.fn.extend({
        serialize: function() {
            return Q.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Q.prop(this, "elements");
                return e ? Q.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Q(this).is(":disabled") && St.test(this.nodeName) && !Ct.test(e) && (this.checked || !Te.test(e))
            }).map(function(e, t) {
                var n = Q(this).val();
                return null == n ? null : Q.isArray(n) ? Q.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    }), Q.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Mt = 0,
        Nt = {},
        jt = {
            0: 200,
            1223: 204
        },
        Et = Q.ajaxSettings.xhr();
    e.ActiveXObject && Q(e).on("unload", function() {
        for (var e in Nt) Nt[e]()
    }), Z.cors = !!Et && "withCredentials" in Et, Z.ajax = Et = !!Et, Q.ajaxTransport(function(e) {
        var t;
        if (Z.cors || Et && !e.crossDomain) return {
            send: function(n, r) {
                var i, o = e.xhr(),
                    a = ++Mt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete Nt[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(jt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = Nt[a] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (e) {
                    if (t) throw e
                }
            },
            abort: function() {
                t && t()
            }
        }
    }), Q.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Q.globalEval(e), e
            }
        }
    }), Q.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Q.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Q("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var At = [],
        Ot = /(=)\?(?=&|$)|\?\?/;
    Q.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = At.pop() || Q.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), Q.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = Q.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ot, "$1" + i) : t.jsonp !== !1 && (t.url += (lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || Q.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, At.push(i)), a && Q.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), Q.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var r = ae.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Q.buildFragment([e], t, i), i && i.length && Q(i).remove(), Q.merge([], r.childNodes))
    };
    var Yt = Q.fn.load;
    Q.fn.load = function(e, t, n) {
        if ("string" != typeof e && Yt) return Yt.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = Q.trim(e.slice(s)), e = e.slice(0, s)), Q.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Q.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? Q("<div>").append(Q.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, Q.expr.filters.animated = function(e) {
        return Q.grep(Q.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Ft = e.document.documentElement;
    Q.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, c, l = Q.css(e, "position"),
                f = Q(e),
                d = {};
            "static" === l && (e.style.position = "relative"), s = f.offset(), o = Q.css(e, "top"), u = Q.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), Q.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, Q.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Q.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, Q.contains(t, r) ? (typeof r.getBoundingClientRect !== De && (i = r.getBoundingClientRect()), n = q(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Q.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Q.nodeName(e[0], "html") || (r = e.offset()), r.top += Q.css(e[0], "borderTopWidth", !0), r.left += Q.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Q.css(n, "marginTop", !0),
                    left: t.left - r.left - Q.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Ft; e && !Q.nodeName(e, "html") && "static" === Q.css(e, "position");) e = e.offsetParent;
                return e || Ft
            })
        }
    }), Q.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Q.fn[t] = function(i) {
            return me(this, function(t, i, o) {
                var a = q(t);
                return void 0 === o ? a ? a[n] : t[i] : void(a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Q.each(["top", "left"], function(e, t) {
        Q.cssHooks[t] = _(Z.pixelPosition, function(e, n) {
            if (n) return n = b(e, t), Ge.test(n) ? Q(e).position()[t] + "px" : n
        })
    }), Q.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Q.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Q.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return me(this, function(t, n, r) {
                    var i;
                    return Q.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Q.css(t, n, a) : Q.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Q.fn.size = function() {
        return this.length
    }, Q.fn.andSelf = Q.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Q
    });
    var Lt = e.jQuery,
        Ht = e.$;
    return Q.noConflict = function(t) {
        return e.$ === Q && (e.$ = Ht), t && e.jQuery === Q && (e.jQuery = Lt), Q
    }, typeof t === De && (e.jQuery = e.$ = Q), Q
}),
function(e, t) {
    e.viewloader = t({}, e.jQuery || e.Zepto || e.$)
}(this, function(e, t) {
    "use strict";
    var n = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    };
    return e.execute = function(e, r) {
        var i = r ? r.find("[data-view]") : t("[data-view]");
        i.each(function(r, i) {
            var o = t(i),
                a = n(o.data("view"));
            a && e[a] && new e[a](o, i)
        })
    }, e
}), window.Market = {
        DOMUtils: {},
        Helpers: {},
        SpecialEvents: {},
        State: {},
        Validations: {},
        GoogleAnalytics: {},
        AffiliateTrackers: {}
    }, window.Views = {},
    function() {
        Views.GoogleExperimentTracking = function() {
            function e(e) {
                this.$el = e, this.experimentId = this.$el.data().experimentId, this.variant = this.$el.data().variant, Market.Helpers.GoogleAnalytics.set("expId", this.experimentId), Market.Helpers.GoogleAnalytics.set("expVar", this.variant), Market.Helpers.GoogleAnalytics.sendEvent("event", "experiment", "view", {
                    label: this.experimentId,
                    value: this.variant,
                    nonInteraction: !0
                })
            }
            return e
        }()
    }.call(this),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        function t(e) {
            return s.raw ? e : encodeURIComponent(e)
        }

        function n(e) {
            return s.raw ? e : decodeURIComponent(e)
        }

        function r(e) {
            return t(s.json ? JSON.stringify(e) : String(e))
        }

        function i(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                e = decodeURIComponent(e.replace(a, " "))
            } catch (e) {
                return
            }
            try {
                return s.json ? JSON.parse(e) : e
            } catch (e) {}
        }

        function o(t, n) {
            var r = s.raw ? t : i(t);
            return e.isFunction(n) ? n(r) : r
        }
        var a = /\+/g,
            s = e.cookie = function(i, a, u) {
                if (void 0 !== a && !e.isFunction(a)) {
                    if (u = e.extend({}, s.defaults, u), "number" == typeof u.expires) {
                        var c = u.expires,
                            l = u.expires = new Date;
                        l.setDate(l.getDate() + c)
                    }
                    return document.cookie = [t(i), "=", r(a), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
                }
                for (var f = i ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], h = 0, p = d.length; h < p; h++) {
                    var g = d[h].split("="),
                        m = n(g.shift()),
                        y = g.join("=");
                    if (i && i === m) {
                        f = o(y, a);
                        break
                    }
                    i || void 0 === (y = o(y)) || (f[m] = y)
                }
                return f
            };
        s.defaults = {}, e.removeCookie = function(t, n) {
            return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, {
                expires: -1
            })), !0)
        }
    }),
    function() {
        function e(e) {
            function t(t, n, r, i, o, a) {
                for (; o >= 0 && o < a; o += e) {
                    var s = i ? i[o] : o;
                    r = n(r, t[s], s, t)
                }
                return r
            }
            return function(n, r, i, o) {
                r = v(r, o, 4);
                var a = !k(n) && y.keys(n),
                    s = (a || n).length,
                    u = e > 0 ? 0 : s - 1;
                return arguments.length < 3 && (i = n[a ? a[u] : u], u += e), t(n, r, i, a, u, s)
            }
        }

        function t(e) {
            return function(t, n, r) {
                n = w(n, r);
                for (var i = null != t && t.length, o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
                    if (n(t[o], o, t)) return o;
                return -1
            }
        }

        function n(e, t) {
            var n = M.length,
                r = e.constructor,
                i = y.isFunction(r) && r.prototype || a,
                o = "constructor";
            for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--;) o = M[n], o in e && e[o] !== i[o] && !y.contains(t, o) && t.push(o)
        }
        var r = this,
            i = r._,
            o = Array.prototype,
            a = Object.prototype,
            s = Function.prototype,
            u = o.push,
            c = o.slice,
            l = a.toString,
            f = a.hasOwnProperty,
            d = Array.isArray,
            h = Object.keys,
            p = s.bind,
            g = Object.create,
            m = function() {},
            y = function(e) {
                return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y, y.VERSION = "1.8.2";
        var v = function(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function(n, r, i) {
                            return e.call(t, n, r, i)
                        };
                    case 4:
                        return function(n, r, i, o) {
                            return e.call(t, n, r, i, o)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            },
            w = function(e, t, n) {
                return null == e ? y.identity : y.isFunction(e) ? v(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
            };
        y.iteratee = function(e, t) {
            return w(e, t, 1 / 0)
        };
        var x = function(e, t) {
                return function(n) {
                    var r = arguments.length;
                    if (r < 2 || null == n) return n;
                    for (var i = 1; i < r; i++)
                        for (var o = arguments[i], a = e(o), s = a.length, u = 0; u < s; u++) {
                            var c = a[u];
                            t && void 0 !== n[c] || (n[c] = o[c])
                        }
                    return n
                }
            },
            b = function(e) {
                if (!y.isObject(e)) return {};
                if (g) return g(e);
                m.prototype = e;
                var t = new m;
                return m.prototype = null, t
            },
            _ = Math.pow(2, 53) - 1,
            k = function(e) {
                var t = e && e.length;
                return "number" == typeof t && t >= 0 && t <= _
            };
        y.each = y.forEach = function(e, t, n) {
            t = v(t, n);
            var r, i;
            if (k(e))
                for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
            else {
                var o = y.keys(e);
                for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
            }
            return e
        }, y.map = y.collect = function(e, t, n) {
            t = w(t, n);
            for (var r = !k(e) && y.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
                var s = r ? r[a] : a;
                o[a] = t(e[s], s, e)
            }
            return o
        }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, n) {
            var r;
            if (r = k(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n), void 0 !== r && r !== -1) return e[r]
        }, y.filter = y.select = function(e, t, n) {
            var r = [];
            return t = w(t, n), y.each(e, function(e, n, i) {
                t(e, n, i) && r.push(e)
            }), r
        }, y.reject = function(e, t, n) {
            return y.filter(e, y.negate(w(t)), n)
        }, y.every = y.all = function(e, t, n) {
            t = w(t, n);
            for (var r = !k(e) && y.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                var a = r ? r[o] : o;
                if (!t(e[a], a, e)) return !1
            }
            return !0
        }, y.some = y.any = function(e, t, n) {
            t = w(t, n);
            for (var r = !k(e) && y.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                var a = r ? r[o] : o;
                if (t(e[a], a, e)) return !0
            }
            return !1
        }, y.contains = y.includes = y.include = function(e, t, n) {
            return k(e) || (e = y.values(e)), y.indexOf(e, t, "number" == typeof n && n) >= 0
        }, y.invoke = function(e, t) {
            var n = c.call(arguments, 2),
                r = y.isFunction(t);
            return y.map(e, function(e) {
                var i = r ? t : e[t];
                return null == i ? i : i.apply(e, n)
            })
        }, y.pluck = function(e, t) {
            return y.map(e, y.property(t))
        }, y.where = function(e, t) {
            return y.filter(e, y.matcher(t))
        }, y.findWhere = function(e, t) {
            return y.find(e, y.matcher(t))
        }, y.max = function(e, t, n) {
            var r, i, o = -(1 / 0),
                a = -(1 / 0);
            if (null == t && null != e) {
                e = k(e) ? e : y.values(e);
                for (var s = 0, u = e.length; s < u; s++) r = e[s], r > o && (o = r)
            } else t = w(t, n), y.each(e, function(e, n, r) {
                i = t(e, n, r), (i > a || i === -(1 / 0) && o === -(1 / 0)) && (o = e, a = i)
            });
            return o
        }, y.min = function(e, t, n) {
            var r, i, o = 1 / 0,
                a = 1 / 0;
            if (null == t && null != e) {
                e = k(e) ? e : y.values(e);
                for (var s = 0, u = e.length; s < u; s++) r = e[s], r < o && (o = r)
            } else t = w(t, n), y.each(e, function(e, n, r) {
                i = t(e, n, r), (i < a || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
            });
            return o
        }, y.shuffle = function(e) {
            for (var t, n = k(e) ? e : y.values(e), r = n.length, i = Array(r), o = 0; o < r; o++) t = y.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
            return i
        }, y.sample = function(e, t, n) {
            return null == t || n ? (k(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
        }, y.sortBy = function(e, t, n) {
            return t = w(t, n), y.pluck(y.map(e, function(e, n, r) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, r)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    r = t.criteria;
                if (n !== r) {
                    if (n > r || void 0 === n) return 1;
                    if (n < r || void 0 === r) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var T = function(e) {
            return function(t, n, r) {
                var i = {};
                return n = w(n, r), y.each(t, function(r, o) {
                    var a = n(r, o, t);
                    e(i, r, a)
                }), i
            }
        };
        y.groupBy = T(function(e, t, n) {
            y.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), y.indexBy = T(function(e, t, n) {
            e[n] = t
        }), y.countBy = T(function(e, t, n) {
            y.has(e, n) ? e[n]++ : e[n] = 1
        }), y.toArray = function(e) {
            return e ? y.isArray(e) ? c.call(e) : k(e) ? y.map(e, y.identity) : y.values(e) : []
        }, y.size = function(e) {
            return null == e ? 0 : k(e) ? e.length : y.keys(e).length
        }, y.partition = function(e, t, n) {
            t = w(t, n);
            var r = [],
                i = [];
            return y.each(e, function(e, n, o) {
                (t(e, n, o) ? r : i).push(e)
            }), [r, i]
        }, y.first = y.head = y.take = function(e, t, n) {
            if (null != e) return null == t || n ? e[0] : y.initial(e, e.length - t)
        }, y.initial = function(e, t, n) {
            return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, y.last = function(e, t, n) {
            if (null != e) return null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
        }, y.rest = y.tail = y.drop = function(e, t, n) {
            return c.call(e, null == t || n ? 1 : t)
        }, y.compact = function(e) {
            return y.filter(e, y.identity)
        };
        var D = function(e, t, n, r) {
            for (var i = [], o = 0, a = r || 0, s = e && e.length; a < s; a++) {
                var u = e[a];
                if (k(u) && (y.isArray(u) || y.isArguments(u))) {
                    t || (u = D(u, t, n));
                    var c = 0,
                        l = u.length;
                    for (i.length += l; c < l;) i[o++] = u[c++]
                } else n || (i[o++] = u)
            }
            return i
        };
        y.flatten = function(e, t) {
            return D(e, t, !1)
        }, y.without = function(e) {
            return y.difference(e, c.call(arguments, 1))
        }, y.uniq = y.unique = function(e, t, n, r) {
            if (null == e) return [];
            y.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = w(n, r));
            for (var i = [], o = [], a = 0, s = e.length; a < s; a++) {
                var u = e[a],
                    c = n ? n(u, a, e) : u;
                t ? (a && o === c || i.push(u), o = c) : n ? y.contains(o, c) || (o.push(c), i.push(u)) : y.contains(i, u) || i.push(u)
            }
            return i
        }, y.union = function() {
            return y.uniq(D(arguments, !0, !0))
        }, y.intersection = function(e) {
            if (null == e) return [];
            for (var t = [], n = arguments.length, r = 0, i = e.length; r < i; r++) {
                var o = e[r];
                if (!y.contains(t, o)) {
                    for (var a = 1; a < n && y.contains(arguments[a], o); a++);
                    a === n && t.push(o)
                }
            }
            return t
        }, y.difference = function(e) {
            var t = D(arguments, !0, !0, 1);
            return y.filter(e, function(e) {
                return !y.contains(t, e)
            })
        }, y.zip = function() {
            return y.unzip(arguments)
        }, y.unzip = function(e) {
            for (var t = e && y.max(e, "length").length || 0, n = Array(t), r = 0; r < t; r++) n[r] = y.pluck(e, r);
            return n
        }, y.object = function(e, t) {
            for (var n = {}, r = 0, i = e && e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }, y.indexOf = function(e, t, n) {
            var r = 0,
                i = e && e.length;
            if ("number" == typeof n) r = n < 0 ? Math.max(0, i + n) : n;
            else if (n && i) return r = y.sortedIndex(e, t), e[r] === t ? r : -1;
            if (t !== t) return y.findIndex(c.call(e, r), y.isNaN);
            for (; r < i; r++)
                if (e[r] === t) return r;
            return -1
        }, y.lastIndexOf = function(e, t, n) {
            var r = e ? e.length : 0;
            if ("number" == typeof n && (r = n < 0 ? r + n + 1 : Math.min(r, n + 1)), t !== t) return y.findLastIndex(c.call(e, 0, r), y.isNaN);
            for (; --r >= 0;)
                if (e[r] === t) return r;
            return -1
        }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, n, r) {
            n = w(n, r, 1);
            for (var i = n(t), o = 0, a = e.length; o < a;) {
                var s = Math.floor((o + a) / 2);
                n(e[s]) < i ? o = s + 1 : a = s
            }
            return o
        }, y.range = function(e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
            for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
            return i
        };
        var C = function(e, t, n, r, i) {
            if (!(r instanceof t)) return e.apply(n, i);
            var o = b(e.prototype),
                a = e.apply(o, i);
            return y.isObject(a) ? a : o
        };
        y.bind = function(e, t) {
            if (p && e.bind === p) return p.apply(e, c.call(arguments, 1));
            if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var n = c.call(arguments, 2),
                r = function() {
                    return C(e, r, t, this, n.concat(c.call(arguments)))
                };
            return r
        }, y.partial = function(e) {
            var t = c.call(arguments, 1),
                n = function() {
                    for (var r = 0, i = t.length, o = Array(i), a = 0; a < i; a++) o[a] = t[a] === y ? arguments[r++] : t[a];
                    for (; r < arguments.length;) o.push(arguments[r++]);
                    return C(e, n, this, this, o)
                };
            return n
        }, y.bindAll = function(e) {
            var t, n, r = arguments.length;
            if (r <= 1) throw new Error("bindAll must be passed function names");
            for (t = 1; t < r; t++) n = arguments[t], e[n] = y.bind(e[n], e);
            return e
        }, y.memoize = function(e, t) {
            var n = function(r) {
                var i = n.cache,
                    o = "" + (t ? t.apply(this, arguments) : r);
                return y.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
            };
            return n.cache = {}, n
        }, y.delay = function(e, t) {
            var n = c.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, t, n) {
            var r, i, o, a = null,
                s = 0;
            n || (n = {});
            var u = function() {
                s = n.leading === !1 ? 0 : y.now(), a = null, o = e.apply(r, i), a || (r = i = null)
            };
            return function() {
                var c = y.now();
                s || n.leading !== !1 || (s = c);
                var l = t - (c - s);
                return r = this, i = arguments, l <= 0 || l > t ? (a && (clearTimeout(a), a = null), s = c, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(u, l)), o
            }
        }, y.debounce = function(e, t, n) {
            var r, i, o, a, s, u = function() {
                var c = y.now() - a;
                c < t && c >= 0 ? r = setTimeout(u, t - c) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
            };
            return function() {
                o = this, i = arguments, a = y.now();
                var c = n && !r;
                return r || (r = setTimeout(u, t)), c && (s = e.apply(o, i), o = i = null), s
            }
        }, y.wrap = function(e, t) {
            return y.partial(t, e)
        }, y.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }, y.compose = function() {
            var e = arguments,
                t = e.length - 1;
            return function() {
                for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
                return r
            }
        }, y.after = function(e, t) {
            return function() {
                if (--e < 1) return t.apply(this, arguments)
            }
        }, y.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        }, y.once = y.partial(y.before, 2);
        var S = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        y.keys = function(e) {
            if (!y.isObject(e)) return [];
            if (h) return h(e);
            var t = [];
            for (var r in e) y.has(e, r) && t.push(r);
            return S && n(e, t), t
        }, y.allKeys = function(e) {
            if (!y.isObject(e)) return [];
            var t = [];
            for (var r in e) t.push(r);
            return S && n(e, t), t
        }, y.values = function(e) {
            for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
            return r
        }, y.mapObject = function(e, t, n) {
            t = w(t, n);
            for (var r, i = y.keys(e), o = i.length, a = {}, s = 0; s < o; s++) r = i[s], a[r] = t(e[r], r, e);
            return a
        }, y.pairs = function(e) {
            for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
            return r
        }, y.invert = function(e) {
            for (var t = {}, n = y.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
            return t
        }, y.functions = y.methods = function(e) {
            var t = [];
            for (var n in e) y.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, y.extend = x(y.allKeys), y.extendOwn = y.assign = x(y.keys), y.findKey = function(e, t, n) {
            t = w(t, n);
            for (var r, i = y.keys(e), o = 0, a = i.length; o < a; o++)
                if (r = i[o], t(e[r], r, e)) return r
        }, y.pick = function(e, t, n) {
            var r, i, o = {},
                a = e;
            if (null == a) return o;
            y.isFunction(t) ? (i = y.allKeys(a), r = v(t, n)) : (i = D(arguments, !1, !1, 1), r = function(e, t, n) {
                return t in n
            }, a = Object(a));
            for (var s = 0, u = i.length; s < u; s++) {
                var c = i[s],
                    l = a[c];
                r(l, c, a) && (o[c] = l)
            }
            return o
        }, y.omit = function(e, t, n) {
            if (y.isFunction(t)) t = y.negate(t);
            else {
                var r = y.map(D(arguments, !1, !1, 1), String);
                t = function(e, t) {
                    return !y.contains(r, t)
                }
            }
            return y.pick(e, t, n)
        }, y.defaults = x(y.allKeys, !0), y.clone = function(e) {
            return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
        }, y.tap = function(e, t) {
            return t(e), e
        }, y.isMatch = function(e, t) {
            var n = y.keys(t),
                r = n.length;
            if (null == e) return !r;
            for (var i = Object(e), o = 0; o < r; o++) {
                var a = n[o];
                if (t[a] !== i[a] || !(a in i)) return !1
            }
            return !0
        };
        var N = function(e, t, n, r) {
            if (e === t) return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
            var i = l.call(e);
            if (i !== l.call(t)) return !1;
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
            }
            var o = "[object Array]" === i;
            if (!o) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var a = e.constructor,
                    s = t.constructor;
                if (a !== s && !(y.isFunction(a) && a instanceof a && y.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1
            }
            n = n || [], r = r || [];
            for (var u = n.length; u--;)
                if (n[u] === e) return r[u] === t;
            if (n.push(e), r.push(t), o) {
                if (u = e.length, u !== t.length) return !1;
                for (; u--;)
                    if (!N(e[u], t[u], n, r)) return !1
            } else {
                var c, f = y.keys(e);
                if (u = f.length, y.keys(t).length !== u) return !1;
                for (; u--;)
                    if (c = f[u], !y.has(t, c) || !N(e[c], t[c], n, r)) return !1
            }
            return n.pop(), r.pop(), !0
        };
        y.isEqual = function(e, t) {
            return N(e, t)
        }, y.isEmpty = function(e) {
            return null == e || (k(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length)
        }, y.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, y.isArray = d || function(e) {
            return "[object Array]" === l.call(e)
        }, y.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
            y["is" + e] = function(t) {
                return l.call(t) === "[object " + e + "]"
            }
        }), y.isArguments(arguments) || (y.isArguments = function(e) {
            return y.has(e, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
            return "function" == typeof e || !1
        }), y.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, y.isNaN = function(e) {
            return y.isNumber(e) && e !== +e
        }, y.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" === l.call(e)
        }, y.isNull = function(e) {
            return null === e
        }, y.isUndefined = function(e) {
            return void 0 === e
        }, y.has = function(e, t) {
            return null != e && f.call(e, t)
        }, y.noConflict = function() {
            return r._ = i, this
        }, y.identity = function(e) {
            return e
        }, y.constant = function(e) {
            return function() {
                return e
            }
        }, y.noop = function() {}, y.property = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }, y.propertyOf = function(e) {
            return null == e ? function() {} : function(t) {
                return e[t]
            }
        }, y.matcher = y.matches = function(e) {
            return e = y.extendOwn({}, e),
                function(t) {
                    return y.isMatch(t, e)
                }
        }, y.times = function(e, t, n) {
            var r = Array(Math.max(0, e));
            t = v(t, n, 1);
            for (var i = 0; i < e; i++) r[i] = t(i);
            return r
        }, y.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, y.now = Date.now || function() {
            return (new Date).getTime()
        };
        var j = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            E = y.invert(j),
            A = function(e) {
                var t = function(t) {
                        return e[t]
                    },
                    n = "(?:" + y.keys(e).join("|") + ")",
                    r = RegExp(n),
                    i = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
                }
            };
        y.escape = A(j), y.unescape = A(E), y.result = function(e, t, n) {
            var r = null == e ? void 0 : e[t];
            return void 0 === r && (r = n), y.isFunction(r) ? r.call(e) : r
        };
        var O = 0;
        y.uniqueId = function(e) {
            var t = ++O + "";
            return e ? e + t : t
        }, y.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var Y = /(.)^/,
            F = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            L = /\\|'|\r|\n|\u2028|\u2029/g,
            H = function(e) {
                return "\\" + F[e]
            };
        y.template = function(e, t, n) {
            !t && n && (t = n), t = y.defaults({}, t, y.templateSettings);
            var r = RegExp([(t.escape || Y).source, (t.interpolate || Y).source, (t.evaluate || Y).source].join("|") + "|$", "g"),
                i = 0,
                o = "__p+='";
            e.replace(r, function(t, n, r, a, s) {
                return o += e.slice(i, s).replace(L, H), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
            }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var a = new Function(t.variable || "obj", "_", o)
            } catch (e) {
                throw e.source = o, e
            }
            var s = function(e) {
                    return a.call(this, e, y)
                },
                u = t.variable || "obj";
            return s.source = "function(" + u + "){\n" + o + "}", s
        }, y.chain = function(e) {
            var t = y(e);
            return t._chain = !0, t
        };
        var P = function(e, t) {
            return e._chain ? y(t).chain() : t
        };
        y.mixin = function(e) {
            y.each(y.functions(e), function(t) {
                var n = y[t] = e[t];
                y.prototype[t] = function() {
                    var e = [this._wrapped];
                    return u.apply(e, arguments), P(this, n.apply(y, e))
                }
            })
        }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = o[e];
            y.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], P(this, n)
            }
        }), y.each(["concat", "join", "slice"], function(e) {
            var t = o[e];
            y.prototype[e] = function() {
                return P(this, t.apply(this._wrapped, arguments))
            }
        }), y.prototype.value = function() {
            return this._wrapped
        }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return y
        })
    }.call(this),
    function(e) {
        function t() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function n(e, t) {
            return function(n) {
                return l(e.call(this, n), t)
            }
        }

        function r(e, t) {
            return function(n) {
                return this.lang().ordinal(e.call(this, n), t)
            }
        }

        function i() {}

        function o(e) {
            _(e), s(this, e)
        }

        function a(e) {
            var t = m(e),
                n = t.year || 0,
                r = t.month || 0,
                i = t.week || 0,
                o = t.day || 0,
                a = t.hour || 0,
                s = t.minute || 0,
                u = t.second || 0,
                c = t.millisecond || 0;
            this._milliseconds = +c + 1e3 * u + 6e4 * s + 36e5 * a, this._days = +o + 7 * i, this._months = +r + 12 * n, this._data = {}, this._bubble()
        }

        function s(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return t.hasOwnProperty("toString") && (e.toString = t.toString), t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf), e
        }

        function u(e) {
            var t, n = {};
            for (t in e) e.hasOwnProperty(t) && me.hasOwnProperty(t) && (n[t] = e[t]);
            return n
        }

        function c(e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e)
        }

        function l(e, t, n) {
            for (var r = "" + Math.abs(e), i = e >= 0; r.length < t;) r = "0" + r;
            return (i ? n ? "+" : "" : "-") + r
        }

        function f(e, t, n, r) {
            var i, o, a = t._milliseconds,
                s = t._days,
                u = t._months;
            a && e._d.setTime(+e._d + a * n), (s || u) && (i = e.minute(), o = e.hour()), s && e.date(e.date() + s * n), u && e.month(e.month() + u * n), a && !r && re.updateOffset(e), (s || u) && (e.minute(i), e.hour(o))
        }

        function d(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function h(e) {
            return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
        }

        function p(e, t, n) {
            var r, i = Math.min(e.length, t.length),
                o = Math.abs(e.length - t.length),
                a = 0;
            for (r = 0; r < i; r++)(n && e[r] !== t[r] || !n && v(e[r]) !== v(t[r])) && a++;
            return a + o
        }

        function g(e) {
            if (e) {
                var t = e.toLowerCase().replace(/(.)s$/, "$1");
                e = ze[e] || Be[t] || t
            }
            return e
        }

        function m(e) {
            var t, n, r = {};
            for (n in e) e.hasOwnProperty(n) && (t = g(n), t && (r[t] = e[n]));
            return r
        }

        function y(t) {
            var n, r;
            if (0 === t.indexOf("week")) n = 7, r = "day";
            else {
                if (0 !== t.indexOf("month")) return;
                n = 12, r = "month"
            }
            re[t] = function(i, o) {
                var a, s, u = re.fn._lang[t],
                    c = [];
                if ("number" == typeof i && (o = i, i = e), s = function(e) {
                        var t = re().utc().set(r, e);
                        return u.call(re.fn._lang, t, i || "")
                    }, null != o) return s(o);
                for (a = 0; a < n; a++) c.push(s(a));
                return c
            }
        }

        function v(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
        }

        function w(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        function x(e) {
            return b(e) ? 366 : 365
        }

        function b(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }

        function _(e) {
            var t;
            e._a && e._pf.overflow === -2 && (t = e._a[ce] < 0 || e._a[ce] > 11 ? ce : e._a[le] < 1 || e._a[le] > w(e._a[ue], e._a[ce]) ? le : e._a[fe] < 0 || e._a[fe] > 23 ? fe : e._a[de] < 0 || e._a[de] > 59 ? de : e._a[he] < 0 || e._a[he] > 59 ? he : e._a[pe] < 0 || e._a[pe] > 999 ? pe : -1, e._pf._overflowDayOfYear && (t < ue || t > le) && (t = le), e._pf.overflow = t)
        }

        function k(e) {
            return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)), e._isValid
        }

        function T(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function D(e, t) {
            return t._isUTC ? re(e).zone(t._offset || 0) : re(e).local()
        }

        function C(e, t) {
            return t.abbr = e, ge[e] || (ge[e] = new i), ge[e].set(t), ge[e]
        }

        function S(e) {
            delete ge[e]
        }

        function M(e) {
            var t, n, r, i, o = 0,
                a = function(e) {
                    if (!ge[e] && ye) try {
                        require("./lang/" + e)
                    } catch (e) {}
                    return ge[e]
                };
            if (!e) return re.fn._lang;
            if (!d(e)) {
                if (n = a(e)) return n;
                e = [e]
            }
            for (; o < e.length;) {
                for (i = T(e[o]).split("-"), t = i.length, r = T(e[o + 1]), r = r ? r.split("-") : null; t > 0;) {
                    if (n = a(i.slice(0, t).join("-"))) return n;
                    if (r && r.length >= t && p(i, r, !0) >= t - 1) break;
                    t--
                }
                o++
            }
            return re.fn._lang
        }

        function N(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function j(e) {
            var t, n, r = e.match(be);
            for (t = 0, n = r.length; t < n; t++) Ze[r[t]] ? r[t] = Ze[r[t]] : r[t] = N(r[t]);
            return function(i) {
                var o = "";
                for (t = 0; t < n; t++) o += r[t] instanceof Function ? r[t].call(i, e) : r[t];
                return o
            }
        }

        function E(e, t) {
            return e.isValid() ? (t = A(t, e.lang()), Ue[t] || (Ue[t] = j(t)), Ue[t](e)) : e.lang().invalidDate()
        }

        function A(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var r = 5;
            for (_e.lastIndex = 0; r >= 0 && _e.test(e);) e = e.replace(_e, n), _e.lastIndex = 0, r -= 1;
            return e
        }

        function O(e, t) {
            var n, r = t._strict;
            switch (e) {
                case "DDDD":
                    return Ye;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return r ? Fe : De;
                case "Y":
                case "G":
                case "g":
                    return He;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return r ? Le : Ce;
                case "S":
                    if (r) return Ae;
                case "SS":
                    if (r) return Oe;
                case "SSS":
                    if (r) return Ye;
                case "DDD":
                    return Te;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return Me;
                case "a":
                case "A":
                    return M(t._l)._meridiemParse;
                case "X":
                    return Ee;
                case "Z":
                case "ZZ":
                    return Ne;
                case "T":
                    return je;
                case "SSSS":
                    return Se;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return r ? Oe : ke;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return ke;
                default:
                    return n = new RegExp(q(I(e.replace("\\", "")), "i"))
            }
        }

        function Y(e) {
            e = e || "";
            var t = e.match(Ne) || [],
                n = t[t.length - 1] || [],
                r = (n + "").match(Ge) || ["-", 0, 0],
                i = +(60 * r[1]) + v(r[2]);
            return "+" === r[0] ? -i : i
        }

        function F(e, t, n) {
            var r, i = n._a;
            switch (e) {
                case "M":
                case "MM":
                    null != t && (i[ce] = v(t) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    r = M(n._l).monthsParse(t), null != r ? i[ce] = r : n._pf.invalidMonth = t;
                    break;
                case "D":
                case "DD":
                    null != t && (i[le] = v(t));
                    break;
                case "DDD":
                case "DDDD":
                    null != t && (n._dayOfYear = v(t));
                    break;
                case "YY":
                    i[ue] = v(t) + (v(t) > 68 ? 1900 : 2e3);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    i[ue] = v(t);
                    break;
                case "a":
                case "A":
                    n._isPm = M(n._l).isPM(t);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    i[fe] = v(t);
                    break;
                case "m":
                case "mm":
                    i[de] = v(t);
                    break;
                case "s":
                case "ss":
                    i[he] = v(t);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    i[pe] = v(1e3 * ("0." + t));
                    break;
                case "X":
                    n._d = new Date(1e3 * parseFloat(t));
                    break;
                case "Z":
                case "ZZ":
                    n._useUTC = !0, n._tzm = Y(t);
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "dd":
                case "ddd":
                case "dddd":
                case "e":
                case "E":
                    e = e.substr(0, 1);
                case "gg":
                case "gggg":
                case "GG":
                case "GGGG":
                case "GGGGG":
                    e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = t)
            }
        }

        function L(e) {
            var t, n, r, i, o, a, s, u, c, l, f = [];
            if (!e._d) {
                for (r = P(e), e._w && null == e._a[le] && null == e._a[ce] && (o = function(t) {
                        var n = parseInt(t, 10);
                        return t ? t.length < 3 ? n > 68 ? 1900 + n : 2e3 + n : n : null == e._a[ue] ? re().weekYear() : e._a[ue]
                    }, a = e._w, null != a.GG || null != a.W || null != a.E ? s = J(o(a.GG), a.W || 1, a.E, 4, 1) : (u = M(e._l), c = null != a.d ? U(a.d, u) : null != a.e ? parseInt(a.e, 10) + u._week.dow : 0, l = parseInt(a.w, 10) || 1, null != a.d && c < u._week.dow && l++, s = J(o(a.gg), l, c, u._week.doy, u._week.dow)), e._a[ue] = s.year, e._dayOfYear = s.dayOfYear), e._dayOfYear && (i = null == e._a[ue] ? r[ue] : e._a[ue], e._dayOfYear > x(i) && (e._pf._overflowDayOfYear = !0), n = B(i, 0, e._dayOfYear), e._a[ce] = n.getUTCMonth(), e._a[le] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = f[t] = r[t];
                for (; t < 7; t++) e._a[t] = f[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                f[fe] += v((e._tzm || 0) / 60), f[de] += v((e._tzm || 0) % 60), e._d = (e._useUTC ? B : z).apply(null, f)
            }
        }

        function H(e) {
            var t;
            e._d || (t = m(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], L(e))
        }

        function P(e) {
            var t = new Date;
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function W(e) {
            e._a = [], e._pf.empty = !0;
            var t, n, r, i, o, a = M(e._l),
                s = "" + e._i,
                u = s.length,
                c = 0;
            for (r = A(e._f, a).match(be) || [], t = 0; t < r.length; t++) i = r[t], n = (s.match(O(i, e)) || [])[0], n && (o = s.substr(0, s.indexOf(n)), o.length > 0 && e._pf.unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), c += n.length), Ze[i] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(i), F(i, n, e)) : e._strict && !n && e._pf.unusedTokens.push(i);
            e._pf.charsLeftOver = u - c, s.length > 0 && e._pf.unusedInput.push(s), e._isPm && e._a[fe] < 12 && (e._a[fe] += 12), e._isPm === !1 && 12 === e._a[fe] && (e._a[fe] = 0), L(e), _(e)
        }

        function I(e) {
            return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                return t || n || r || i
            })
        }

        function q(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function G(e) {
            var n, r, i, o, a;
            if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(NaN));
            for (o = 0; o < e._f.length; o++) a = 0, n = s({}, e), n._pf = t(), n._f = e._f[o], W(n), k(n) && (a += n._pf.charsLeftOver, a += 10 * n._pf.unusedTokens.length, n._pf.score = a, (null == i || a < i) && (i = a, r = n));
            s(e, r || n)
        }

        function R(e) {
            var t, n, r = e._i,
                i = Pe.exec(r);
            if (i) {
                for (e._pf.iso = !0, t = 0, n = Ie.length; t < n; t++)
                    if (Ie[t][1].exec(r)) {
                        e._f = Ie[t][0] + (i[6] || " ");
                        break
                    }
                for (t = 0, n = qe.length; t < n; t++)
                    if (qe[t][1].exec(r)) {
                        e._f += qe[t][0];
                        break
                    }
                r.match(Ne) && (e._f += "Z"), W(e)
            } else e._d = new Date(r)
        }

        function $(t) {
            var n = t._i,
                r = ve.exec(n);
            n === e ? t._d = new Date : r ? t._d = new Date(+r[1]) : "string" == typeof n ? R(t) : d(n) ? (t._a = n.slice(0), L(t)) : h(n) ? t._d = new Date(+n) : "object" == typeof n ? H(t) : t._d = new Date(n)
        }

        function z(e, t, n, r, i, o, a) {
            var s = new Date(e, t, n, r, i, o, a);
            return e < 1970 && s.setFullYear(e), s
        }

        function B(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return e < 1970 && t.setUTCFullYear(e), t
        }

        function U(e, t) {
            if ("string" == typeof e)
                if (isNaN(e)) {
                    if (e = t.weekdaysParse(e), "number" != typeof e) return null
                } else e = parseInt(e, 10);
            return e
        }

        function V(e, t, n, r, i) {
            return i.relativeTime(t || 1, !!n, e, r)
        }

        function X(e, t, n) {
            var r = se(Math.abs(e) / 1e3),
                i = se(r / 60),
                o = se(i / 60),
                a = se(o / 24),
                s = se(a / 365),
                u = r < 45 && ["s", r] || 1 === i && ["m"] || i < 45 && ["mm", i] || 1 === o && ["h"] || o < 22 && ["hh", o] || 1 === a && ["d"] || a <= 25 && ["dd", a] || a <= 45 && ["M"] || a < 345 && ["MM", se(a / 30)] || 1 === s && ["y"] || ["yy", s];
            return u[2] = t, u[3] = e > 0, u[4] = n, V.apply({}, u)
        }

        function Z(e, t, n) {
            var r, i = n - t,
                o = n - e.day();
            return o > i && (o -= 7), o < i - 7 && (o += 7), r = re(e).add("d", o), {
                week: Math.ceil(r.dayOfYear() / 7),
                year: r.year()
            }
        }

        function J(e, t, n, r, i) {
            var o, a, s = B(e, 0, 1).getUTCDay();
            return n = null != n ? n : i, o = i - s + (s > r ? 7 : 0) - (s < i ? 7 : 0), a = 7 * (t - 1) + (n - i) + o + 1, {
                year: a > 0 ? e : e - 1,
                dayOfYear: a > 0 ? a : x(e - 1) + a
            }
        }

        function K(e) {
            var t = e._i,
                n = e._f;
            return null === t ? re.invalid({
                nullInput: !0
            }) : ("string" == typeof t && (e._i = t = M().preparse(t)), re.isMoment(t) ? (e = u(t), e._d = new Date(+t._d)) : n ? d(n) ? G(e) : W(e) : $(e), new o(e))
        }

        function Q(e, t) {
            re.fn[e] = re.fn[e + "s"] = function(e) {
                var n = this._isUTC ? "UTC" : "";
                return null != e ? (this._d["set" + n + t](e), re.updateOffset(this), this) : this._d["get" + n + t]()
            }
        }

        function ee(e) {
            re.duration.fn[e] = function() {
                return this._data[e]
            }
        }

        function te(e, t) {
            re.duration.fn["as" + e] = function() {
                return +this / t
            }
        }

        function ne(e) {
            var t = !1,
                n = re;
            "undefined" == typeof ender && (e ? (ae.moment = function() {
                return !t && console && console.warn && (t = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), n.apply(null, arguments)
            }, s(ae.moment, n)) : ae.moment = re)
        }
        for (var re, ie, oe = "2.5.1", ae = this, se = Math.round, ue = 0, ce = 1, le = 2, fe = 3, de = 4, he = 5, pe = 6, ge = {}, me = {
                _isAMomentObject: null,
                _i: null,
                _f: null,
                _l: null,
                _strict: null,
                _isUTC: null,
                _offset: null,
                _pf: null,
                _lang: null
            }, ye = "undefined" != typeof module && module.exports && "undefined" != typeof require, ve = /^\/?Date\((\-?\d+)/i, we = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, xe = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, be = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, _e = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, ke = /\d\d?/, Te = /\d{1,3}/, De = /\d{1,4}/, Ce = /[+\-]?\d{1,6}/, Se = /\d+/, Me = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ne = /Z|[\+\-]\d\d:?\d\d/gi, je = /T/i, Ee = /[\+\-]?\d+(\.\d{1,3})?/, Ae = /\d/, Oe = /\d\d/, Ye = /\d{3}/, Fe = /\d{4}/, Le = /[+-]?\d{6}/, He = /[+-]?\d+/, Pe = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, We = "YYYY-MM-DDTHH:mm:ssZ", Ie = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ], qe = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ], Ge = /([\+\-]|\d\d)/gi, Re = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), $e = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }, ze = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, Be = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, Ue = {}, Ve = "DDD w W M D d".split(" "), Xe = "M D H h m s w W".split(" "), Ze = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(e) {
                    return this.lang().monthsShort(this, e)
                },
                MMMM: function(e) {
                    return this.lang().months(this, e)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(e) {
                    return this.lang().weekdaysMin(this, e)
                },
                ddd: function(e) {
                    return this.lang().weekdaysShort(this, e)
                },
                dddd: function(e) {
                    return this.lang().weekdays(this, e)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return l(this.year() % 100, 2)
                },
                YYYY: function() {
                    return l(this.year(), 4)
                },
                YYYYY: function() {
                    return l(this.year(), 5)
                },
                YYYYYY: function() {
                    var e = this.year(),
                        t = e >= 0 ? "+" : "-";
                    return t + l(Math.abs(e), 6)
                },
                gg: function() {
                    return l(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return l(this.weekYear(), 4)
                },
                ggggg: function() {
                    return l(this.weekYear(), 5)
                },
                GG: function() {
                    return l(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return l(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return l(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return v(this.milliseconds() / 100)
                },
                SS: function() {
                    return l(v(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return l(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return l(this.milliseconds(), 3)
                },
                Z: function() {
                    var e = -this.zone(),
                        t = "+";
                    return e < 0 && (e = -e, t = "-"), t + l(v(e / 60), 2) + ":" + l(v(e) % 60, 2)
                },
                ZZ: function() {
                    var e = -this.zone(),
                        t = "+";
                    return e < 0 && (e = -e, t = "-"), t + l(v(e / 60), 2) + l(v(e) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            }, Je = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Ve.length;) ie = Ve.pop(), Ze[ie + "o"] = r(Ze[ie], ie);
        for (; Xe.length;) ie = Xe.pop(), Ze[ie + ie] = n(Ze[ie], 2);
        for (Ze.DDDD = n(Ze.DDD, 3), s(i.prototype, {
                set: function(e) {
                    var t, n;
                    for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t
                },
                _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                months: function(e) {
                    return this._months[e.month()]
                },
                _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                monthsShort: function(e) {
                    return this._monthsShort[e.month()]
                },
                monthsParse: function(e) {
                    var t, n, r;
                    for (this._monthsParse || (this._monthsParse = []), t = 0; t < 12; t++)
                        if (this._monthsParse[t] || (n = re.utc([2e3, t]), r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[t] = new RegExp(r.replace(".", ""), "i")), this._monthsParse[t].test(e)) return t
                },
                _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdays: function(e) {
                    return this._weekdays[e.day()]
                },
                _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysShort: function(e) {
                    return this._weekdaysShort[e.day()]
                },
                _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                weekdaysMin: function(e) {
                    return this._weekdaysMin[e.day()]
                },
                weekdaysParse: function(e) {
                    var t, n, r;
                    for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; t < 7; t++)
                        if (this._weekdaysParse[t] || (n = re([2e3, 1]).day(t), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
                },
                _longDateFormat: {
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D YYYY",
                    LLL: "MMMM D YYYY LT",
                    LLLL: "dddd, MMMM D YYYY LT"
                },
                longDateFormat: function(e) {
                    var t = this._longDateFormat[e];
                    return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }), this._longDateFormat[e] = t), t
                },
                isPM: function(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                },
                _meridiemParse: /[ap]\.?m?\.?/i,
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                },
                _calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                calendar: function(e, t) {
                    var n = this._calendar[e];
                    return "function" == typeof n ? n.apply(t) : n
                },
                _relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                relativeTime: function(e, t, n, r) {
                    var i = this._relativeTime[n];
                    return "function" == typeof i ? i(e, t, n, r) : i.replace(/%d/i, e)
                },
                pastFuture: function(e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
                },
                ordinal: function(e) {
                    return this._ordinal.replace("%d", e)
                },
                _ordinal: "%d",
                preparse: function(e) {
                    return e
                },
                postformat: function(e) {
                    return e
                },
                week: function(e) {
                    return Z(e, this._week.dow, this._week.doy).week
                },
                _week: {
                    dow: 0,
                    doy: 6
                },
                _invalidDate: "Invalid date",
                invalidDate: function() {
                    return this._invalidDate
                }
            }), re = function(n, r, i, o) {
                var a;
                return "boolean" == typeof i && (o = i, i = e), a = {}, a._isAMomentObject = !0, a._i = n, a._f = r, a._l = i, a._strict = o, a._isUTC = !1, a._pf = t(), K(a)
            }, re.utc = function(n, r, i, o) {
                var a;
                return "boolean" == typeof i && (o = i, i = e), a = {}, a._isAMomentObject = !0, a._useUTC = !0, a._isUTC = !0, a._l = i, a._i = n, a._f = r, a._strict = o, a._pf = t(), K(a).utc()
            }, re.unix = function(e) {
                return re(1e3 * e)
            }, re.duration = function(e, t) {
                var n, r, i, o = e,
                    s = null;
                return re.isDuration(e) ? o = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : "number" == typeof e ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (s = we.exec(e)) ? (n = "-" === s[1] ? -1 : 1, o = {
                    y: 0,
                    d: v(s[le]) * n,
                    h: v(s[fe]) * n,
                    m: v(s[de]) * n,
                    s: v(s[he]) * n,
                    ms: v(s[pe]) * n
                }) : (s = xe.exec(e)) && (n = "-" === s[1] ? -1 : 1, i = function(e) {
                    var t = e && parseFloat(e.replace(",", "."));
                    return (isNaN(t) ? 0 : t) * n
                }, o = {
                    y: i(s[2]),
                    M: i(s[3]),
                    d: i(s[4]),
                    h: i(s[5]),
                    m: i(s[6]),
                    s: i(s[7]),
                    w: i(s[8])
                }), r = new a(o), re.isDuration(e) && e.hasOwnProperty("_lang") && (r._lang = e._lang), r
            }, re.version = oe, re.defaultFormat = We, re.updateOffset = function() {}, re.lang = function(e, t) {
                var n;
                return e ? (t ? C(T(e), t) : null === t ? (S(e), e = "en") : ge[e] || M(e), n = re.duration.fn._lang = re.fn._lang = M(e), n._abbr) : re.fn._lang._abbr
            }, re.langData = function(e) {
                return e && e._lang && e._lang._abbr && (e = e._lang._abbr), M(e)
            }, re.isMoment = function(e) {
                return e instanceof o || null != e && e.hasOwnProperty("_isAMomentObject")
            }, re.isDuration = function(e) {
                return e instanceof a
            }, ie = Je.length - 1; ie >= 0; --ie) y(Je[ie]);
        for (re.normalizeUnits = function(e) {
                return g(e)
            }, re.invalid = function(e) {
                var t = re.utc(NaN);
                return null != e ? s(t._pf, e) : t._pf.userInvalidated = !0, t
            }, re.parseZone = function(e) {
                return re(e).parseZone()
            }, s(re.fn = o.prototype, {
                clone: function() {
                    return re(this)
                },
                valueOf: function() {
                    return +this._d + 6e4 * (this._offset || 0)
                },
                unix: function() {
                    return Math.floor(+this / 1e3)
                },
                toString: function() {
                    return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                },
                toDate: function() {
                    return this._offset ? new Date(+this) : this._d
                },
                toISOString: function() {
                    var e = re(this).utc();
                    return 0 < e.year() && e.year() <= 9999 ? E(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : E(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                },
                toArray: function() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
                },
                isValid: function() {
                    return k(this)
                },
                isDSTShifted: function() {
                    return !!this._a && (this.isValid() && p(this._a, (this._isUTC ? re.utc(this._a) : re(this._a)).toArray()) > 0)
                },
                parsingFlags: function() {
                    return s({}, this._pf)
                },
                invalidAt: function() {
                    return this._pf.overflow
                },
                utc: function() {
                    return this.zone(0)
                },
                local: function() {
                    return this.zone(0), this._isUTC = !1, this
                },
                format: function(e) {
                    var t = E(this, e || re.defaultFormat);
                    return this.lang().postformat(t)
                },
                add: function(e, t) {
                    var n;
                    return n = "string" == typeof e ? re.duration(+t, e) : re.duration(e, t), f(this, n, 1), this
                },
                subtract: function(e, t) {
                    var n;
                    return n = "string" == typeof e ? re.duration(+t, e) : re.duration(e, t), f(this, n, -1), this
                },
                diff: function(e, t, n) {
                    var r, i, o = D(e, this),
                        a = 6e4 * (this.zone() - o.zone());
                    return t = g(t), "year" === t || "month" === t ? (r = 432e5 * (this.daysInMonth() + o.daysInMonth()), i = 12 * (this.year() - o.year()) + (this.month() - o.month()), i += (this - re(this).startOf("month") - (o - re(o).startOf("month"))) / r, i -= 6e4 * (this.zone() - re(this).startOf("month").zone() - (o.zone() - re(o).startOf("month").zone())) / r, "year" === t && (i /= 12)) : (r = this - o, i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - a) / 864e5 : "week" === t ? (r - a) / 6048e5 : r), n ? i : c(i)
                },
                from: function(e, t) {
                    return re.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)
                },
                fromNow: function(e) {
                    return this.from(re(), e)
                },
                calendar: function() {
                    var e = D(re(), this).startOf("day"),
                        t = this.diff(e, "days", !0),
                        n = t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse";
                    return this.format(this.lang().calendar(n, this))
                },
                isLeapYear: function() {
                    return b(this.year())
                },
                isDST: function() {
                    return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
                },
                day: function(e) {
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = U(e, this.lang()), this.add({
                        d: e - t
                    })) : t
                },
                month: function(e) {
                    var t, n = this._isUTC ? "UTC" : "";
                    return null != e ? "string" == typeof e && (e = this.lang().monthsParse(e), "number" != typeof e) ? this : (t = this.date(), this.date(1), this._d["set" + n + "Month"](e), this.date(Math.min(t, this.daysInMonth())), re.updateOffset(this), this) : this._d["get" + n + "Month"]()
                },
                startOf: function(e) {
                    switch (e = g(e)) {
                        case "year":
                            this.month(0);
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), this
                },
                endOf: function(e) {
                    return e = g(e), this.startOf(e).add("isoWeek" === e ? "week" : e, 1).subtract("ms", 1)
                },
                isAfter: function(e, t) {
                    return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) > +re(e).startOf(t)
                },
                isBefore: function(e, t) {
                    return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) < +re(e).startOf(t)
                },
                isSame: function(e, t) {
                    return t = t || "ms", +this.clone().startOf(t) === +D(e, this).startOf(t)
                },
                min: function(e) {
                    return e = re.apply(null, arguments), e < this ? this : e
                },
                max: function(e) {
                    return e = re.apply(null, arguments), e > this ? this : e
                },
                zone: function(e) {
                    var t = this._offset || 0;
                    return null == e ? this._isUTC ? t : this._d.getTimezoneOffset() : ("string" == typeof e && (e = Y(e)), Math.abs(e) < 16 && (e *= 60), this._offset = e, this._isUTC = !0, t !== e && f(this, re.duration(t - e, "m"), 1, !0), this)
                },
                zoneAbbr: function() {
                    return this._isUTC ? "UTC" : ""
                },
                zoneName: function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                },
                parseZone: function() {
                    return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
                },
                hasAlignedHourOffset: function(e) {
                    return e = e ? re(e).zone() : 0, (this.zone() - e) % 60 === 0
                },
                daysInMonth: function() {
                    return w(this.year(), this.month())
                },
                dayOfYear: function(e) {
                    var t = se((re(this).startOf("day") - re(this).startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add("d", e - t)
                },
                quarter: function() {
                    return Math.ceil((this.month() + 1) / 3)
                },
                weekYear: function(e) {
                    var t = Z(this, this.lang()._week.dow, this.lang()._week.doy).year;
                    return null == e ? t : this.add("y", e - t)
                },
                isoWeekYear: function(e) {
                    var t = Z(this, 1, 4).year;
                    return null == e ? t : this.add("y", e - t)
                },
                week: function(e) {
                    var t = this.lang().week(this);
                    return null == e ? t : this.add("d", 7 * (e - t))
                },
                isoWeek: function(e) {
                    var t = Z(this, 1, 4).week;
                    return null == e ? t : this.add("d", 7 * (e - t))
                },
                weekday: function(e) {
                    var t = (this.day() + 7 - this.lang()._week.dow) % 7;
                    return null == e ? t : this.add("d", e - t)
                },
                isoWeekday: function(e) {
                    return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
                },
                get: function(e) {
                    return e = g(e), this[e]()
                },
                set: function(e, t) {
                    return e = g(e), "function" == typeof this[e] && this[e](t), this
                },
                lang: function(t) {
                    return t === e ? this._lang : (this._lang = M(t), this)
                }
            }), ie = 0; ie < Re.length; ie++) Q(Re[ie].toLowerCase().replace(/s$/, ""), Re[ie]);
        Q("year", "FullYear"), re.fn.days = re.fn.day, re.fn.months = re.fn.month, re.fn.weeks = re.fn.week, re.fn.isoWeeks = re.fn.isoWeek, re.fn.toJSON = re.fn.toISOString, s(re.duration.fn = a.prototype, {
            _bubble: function() {
                var e, t, n, r, i = this._milliseconds,
                    o = this._days,
                    a = this._months,
                    s = this._data;
                s.milliseconds = i % 1e3, e = c(i / 1e3), s.seconds = e % 60, t = c(e / 60), s.minutes = t % 60, n = c(t / 60), s.hours = n % 24, o += c(n / 24), s.days = o % 30, a += c(o / 30), s.months = a % 12, r = c(a / 12), s.years = r
            },
            weeks: function() {
                return c(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12)
            },
            humanize: function(e) {
                var t = +this,
                    n = X(t, !e, this.lang());
                return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
            },
            add: function(e, t) {
                var n = re.duration(e, t);
                return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
            },
            subtract: function(e, t) {
                var n = re.duration(e, t);
                return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
            },
            get: function(e) {
                return e = g(e), this[e.toLowerCase() + "s"]()
            },
            as: function(e) {
                return e = g(e), this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
            },
            lang: re.fn.lang,
            toIsoString: function() {
                var e = Math.abs(this.years()),
                    t = Math.abs(this.months()),
                    n = Math.abs(this.days()),
                    r = Math.abs(this.hours()),
                    i = Math.abs(this.minutes()),
                    o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || o ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (o ? o + "S" : "") : "P0D"
            }
        });
        for (ie in $e) $e.hasOwnProperty(ie) && (te(ie, $e[ie]), ee(ie.toLowerCase()));
        te("Weeks", 6048e5), re.duration.fn.asMonths = function() {
            return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
        }, re.lang("en", {
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 === v(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        }), ye ? (module.exports = re, ne(!0)) : "function" == typeof define && define.amd ? define("moment", function(t, n, r) {
            return r.config && r.config() && r.config().noGlobal !== !0 && ne(r.config().noGlobal === e), re
        }) : ne()
    }.call(this),
    function() {
        window.ga && ga(function(e) {
            var t, n;
            try {
                n = e.get("clientId"), n && ga("set", "dimension18", n)
            } catch (e) {
                t = e
            }
        }), Market.Helpers.GoogleAnalytics = {
            logPageView: function(e) {
                var t, n, r, i, o, a, s, u, c;
                if (s = null != e ? e : {}, n = s.page, i = s.title, window.ga) {
                    for (t = _.omit({
                            hitType: "pageview",
                            page: null != n ? n : n = this.relativePath(),
                            title: null != i ? i : i = null
                        }, function(e) {
                            return _.isNull(e)
                        }), u = window._envGaTrackerNames, c = [], o = 0, a = u.length; o < a; o++) r = u[o], c.push(ga(r + ".send", t));
                    return c
                }
            },
            sendEvent: function(e, t, n, r) {
                var i, o, a, s, u, c, l, f, d, h, p, g;
                if (h = null != r ? r : {}, s = h.label, l = h.value, a = h.hitCallback, u = h.nonInteraction, o = h.dimension11, window.ga) {
                    for (i = _.omit({
                            hitType: e,
                            eventCategory: t,
                            eventAction: n,
                            eventLabel: null != s ? s : s = null,
                            eventValue: null != l ? l : l = null,
                            hitCallback: null != a ? a : a = null,
                            nonInteraction: null != u ? u : u = null,
                            dimension11: null != o ? o : o = null
                        }, function(e) {
                            return _.isNull(e)
                        }), p = window._envGaTrackerNames, g = [], f = 0, d = p.length; f < d; f++) c = p[f], g.push(ga(c + ".send", i));
                    return g
                }
            },
            addProducts: function() {
                return function(e) {
                    var t, n, r, i, o, a;
                    if (window.ga) {
                        for (o = window._envGaTrackerNames, a = [], r = 0, i = o.length; r < i; r++) n = o[r], a.push(function() {
                            var r, i, o, a;
                            for (o = e.productsArray, a = [], r = 0, i = o.length; r < i; r++) t = o[r], a.push(ga(n + ".ec:addProduct", t));
                            return a
                        }());
                        return a
                    }
                }
            }(this),
            addImpressions: function() {
                return function(e) {
                    var t, n, r, i, o, a, s;
                    if (window.ga) {
                        for (a = window._envGaTrackerNames, s = [], i = 0, o = a.length; i < o; i++) r = a[i], s.push(function() {
                            var i, o, a;
                            for (a = [], i = 0, o = e.length; i < o; i++) t = e[i], a.push(function() {
                                var e, i, o, a;
                                for (o = t.productsArray, a = [], e = 0, i = o.length; e < i; e++) n = o[e], a.push(ga(r + ".ec:addImpression", n));
                                return a
                            }());
                            return a
                        }());
                        return s
                    }
                }
            }(this),
            addPromo: function() {
                return function(e) {
                    var t, n, r, i, o;
                    if (window.ga) {
                        for (i = window._envGaTrackerNames, o = [], n = 0, r = i.length; n < r; n++) t = i[n], o.push(ga(t + ".ec:addPromo", e));
                        return o
                    }
                }
            }(this),
            decorateWithLinker: function() {
                return function(e) {
                    var t, n, r, i, o;
                    if (window.ga) {
                        for (i = window._envGaTrackerNames, o = [], n = 0, r = i.length; n < r; n++) t = i[n], o.push(ga(t + ".linker:decorate", e));
                        return o
                    }
                }
            }(this),
            set: function() {
                return function(e, t) {
                    var n, r, i, o, a;
                    if (window.ga) {
                        for (o = window._envGaTrackerNames, a = [], r = 0, i = o.length; r < i; r++) n = o[r], a.push(ga(n + ".set", e, t));
                        return a
                    }
                }
            }(this),
            setAction: function() {
                return function(e, t) {
                    var n, r, i, o, a;
                    if (window.ga) {
                        for (o = window._envGaTrackerNames, a = [], r = 0, i = o.length; r < i; r++) n = o[r], null != t ? a.push(ga(n + ".ec:setAction", e, t)) : a.push(ga(n + ".ec:setAction", e));
                        return a
                    }
                }
            }(this),
            storeGaClientId: function() {
                if (window.ga) return ga(function(e) {
                    $.cookie("__ga_client_id", e.get("clientId"), {
                        path: "/",
                        expires: 60
                    })
                })
            },
            relativePath: function() {
                return document.location.pathname + document.location.search
            },
            isEventStale: function(e) {
                var t, n;
                return e = moment.unix(e), t = moment(new Date).utc(), n = moment.duration(e.diff(t)), n.asMinutes() > 10
            }
        }
    }.call(this),
    function() {
        Views.CtaHeader = function() {
            function e(e) {
                e.on("click", ".js-track-on-click", function(e) {
                    return function(t) {
                        return e.target = $(t.currentTarget), e.experimentId = e.target.data().experimentId, e.gaVariantId = e.target.data().gaVariantId, Market.Helpers.GoogleAnalytics.sendEvent("event", "experiment", "click", {
                            label: e.experimentId,
                            value: e.gaVariantId,
                            nonInteraction: !0
                        })
                    }
                }(this))
            }
            return e
        }()
    }.call(this),
    function() {
        var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        Views.FullScreenPreview = function() {
            function t(t) {
                this.addHackyFix = e(this.addHackyFix, this), this.hasMobileSafariIFrameBug = e(this.hasMobileSafariIFrameBug, this), this.fixResponsivenessForMobileSafari = e(this.fixResponsivenessForMobileSafari, this), this.$el = t, t.load(this.fixResponsivenessForMobileSafari)
            }
            return t.prototype.fixResponsivenessForMobileSafari = function() {
                if (this.hasMobileSafariIFrameBug()) return this.addHackyFix()
            }, t.prototype.hasMobileSafariIFrameBug = function() {
                return this.$el.width() !== $("body").width()
            }, t.prototype.addHackyFix = function() {
                return this.$el.attr("scrolling", "no").addClass("-ios-fix")
            }, t
        }()
    }.call(this);