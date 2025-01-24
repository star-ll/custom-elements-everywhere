var nr = Object.defineProperty;
var ir = (e, t, n) => t in e ? nr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var S = (e, t, n) => ir(e, typeof t != "symbol" ? t + "" : t, n);
var wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ar(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ot = {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var _t;
function or() {
  if (_t) return Ot;
  _t = 1;
  var e;
  return function(t) {
    (function(n) {
      var r = typeof globalThis == "object" ? globalThis : typeof wt == "object" ? wt : typeof self == "object" ? self : typeof this == "object" ? this : T(), i = s(t);
      typeof r.Reflect < "u" && (i = s(r.Reflect, i)), n(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
      function s(v, w) {
        return function(b, P) {
          Object.defineProperty(v, b, { configurable: !0, writable: !0, value: P }), w && w(b, P);
        };
      }
      function d() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function C() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function T() {
        return d() || C();
      }
    })(function(n, r) {
      var i = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", d = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", C = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", T = typeof Object.create == "function", v = { __proto__: [] } instanceof Array, w = !T && !v, b = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: T ? function() {
          return Be(/* @__PURE__ */ Object.create(null));
        } : v ? function() {
          return Be({ __proto__: null });
        } : function() {
          return Be({});
        },
        has: w ? function(a, o) {
          return i.call(a, o);
        } : function(a, o) {
          return o in a;
        },
        get: w ? function(a, o) {
          return i.call(a, o) ? a[o] : void 0;
        } : function(a, o) {
          return a[o];
        }
      }, P = Object.getPrototypeOf(Function), h = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Qt(), p = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Vt(), m = typeof WeakMap == "function" ? WeakMap : er(), x = s ? Symbol.for("@reflect-metadata:registry") : void 0, N = Zt(), F = Yt(N);
      function W(a, o, f, y) {
        if (k(f)) {
          if (!lt(a))
            throw new TypeError();
          if (!dt(o))
            throw new TypeError();
          return U(a, o);
        } else {
          if (!lt(a))
            throw new TypeError();
          if (!B(o))
            throw new TypeError();
          if (!B(y) && !k(y) && !se(y))
            throw new TypeError();
          return se(y) && (y = void 0), f = oe(f), j(a, o, f, y);
        }
      }
      n("decorate", W);
      function ne(a, o) {
        function f(y, A) {
          if (!B(y))
            throw new TypeError();
          if (!k(A) && !zt(A))
            throw new TypeError();
          Ae(a, o, y, A);
        }
        return f;
      }
      n("metadata", ne);
      function X(a, o, f, y) {
        if (!B(f))
          throw new TypeError();
        return k(y) || (y = oe(y)), Ae(a, o, f, y);
      }
      n("defineMetadata", X);
      function we(a, o, f) {
        if (!B(o))
          throw new TypeError();
        return k(f) || (f = oe(f)), ae(a, o, f);
      }
      n("hasMetadata", we);
      function ee(a, o, f) {
        if (!B(o))
          throw new TypeError();
        return k(f) || (f = oe(f)), K(a, o, f);
      }
      n("hasOwnMetadata", ee);
      function c(a, o, f) {
        if (!B(o))
          throw new TypeError();
        return k(f) || (f = oe(f)), Oe(a, o, f);
      }
      n("getMetadata", c);
      function l(a, o, f) {
        if (!B(o))
          throw new TypeError();
        return k(f) || (f = oe(f)), _e(a, o, f);
      }
      n("getOwnMetadata", l);
      function u(a, o) {
        if (!B(a))
          throw new TypeError();
        return k(o) || (o = oe(o)), $(a, o);
      }
      n("getMetadataKeys", u);
      function _(a, o) {
        if (!B(a))
          throw new TypeError();
        return k(o) || (o = oe(o)), fe(a, o);
      }
      n("getOwnMetadataKeys", _);
      function M(a, o, f) {
        if (!B(o))
          throw new TypeError();
        if (k(f) || (f = oe(f)), !B(o))
          throw new TypeError();
        k(f) || (f = oe(f));
        var y = Ce(
          o,
          f,
          /*Create*/
          !1
        );
        return k(y) ? !1 : y.OrdinaryDeleteMetadata(a, o, f);
      }
      n("deleteMetadata", M);
      function U(a, o) {
        for (var f = a.length - 1; f >= 0; --f) {
          var y = a[f], A = y(o);
          if (!k(A) && !se(A)) {
            if (!dt(A))
              throw new TypeError();
            o = A;
          }
        }
        return o;
      }
      function j(a, o, f, y) {
        for (var A = a.length - 1; A >= 0; --A) {
          var z = a[A], q = z(o, f, y);
          if (!k(q) && !se(q)) {
            if (!B(q))
              throw new TypeError();
            y = q;
          }
        }
        return y;
      }
      function ae(a, o, f) {
        var y = K(a, o, f);
        if (y)
          return !0;
        var A = Fe(o);
        return se(A) ? !1 : ae(a, A, f);
      }
      function K(a, o, f) {
        var y = Ce(
          o,
          f,
          /*Create*/
          !1
        );
        return k(y) ? !1 : Ee(y.OrdinaryHasOwnMetadata(a, o, f));
      }
      function Oe(a, o, f) {
        var y = K(a, o, f);
        if (y)
          return _e(a, o, f);
        var A = Fe(o);
        if (!se(A))
          return Oe(a, A, f);
      }
      function _e(a, o, f) {
        var y = Ce(
          o,
          f,
          /*Create*/
          !1
        );
        if (!k(y))
          return y.OrdinaryGetOwnMetadata(a, o, f);
      }
      function Ae(a, o, f, y) {
        var A = Ce(
          f,
          y,
          /*Create*/
          !0
        );
        A.OrdinaryDefineOwnMetadata(a, o, f, y);
      }
      function $(a, o) {
        var f = fe(a, o), y = Fe(a);
        if (y === null)
          return f;
        var A = $(y, o);
        if (A.length <= 0)
          return f;
        if (f.length <= 0)
          return A;
        for (var z = new p(), q = [], L = 0, O = f; L < O.length; L++) {
          var g = O[L], E = z.has(g);
          E || (z.add(g), q.push(g));
        }
        for (var D = 0, R = A; D < R.length; D++) {
          var g = R[D], E = z.has(g);
          E || (z.add(g), q.push(g));
        }
        return q;
      }
      function fe(a, o) {
        var f = Ce(
          a,
          o,
          /*create*/
          !1
        );
        return f ? f.OrdinaryOwnMetadataKeys(a, o) : [];
      }
      function Y(a) {
        if (a === null)
          return 1;
        switch (typeof a) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return a === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function k(a) {
        return a === void 0;
      }
      function se(a) {
        return a === null;
      }
      function Se(a) {
        return typeof a == "symbol";
      }
      function B(a) {
        return typeof a == "object" ? a !== null : typeof a == "function";
      }
      function ge(a, o) {
        switch (Y(a)) {
          case 0:
            return a;
          case 1:
            return a;
          case 2:
            return a;
          case 3:
            return a;
          case 4:
            return a;
          case 5:
            return a;
        }
        var f = "string", y = pt(a, d);
        if (y !== void 0) {
          var A = y.call(a, f);
          if (B(A))
            throw new TypeError();
          return A;
        }
        return Pe(a);
      }
      function Pe(a, o) {
        var f, y;
        {
          var A = a.toString;
          if (Ne(A)) {
            var y = A.call(a);
            if (!B(y))
              return y;
          }
          var f = a.valueOf;
          if (Ne(f)) {
            var y = f.call(a);
            if (!B(y))
              return y;
          }
        }
        throw new TypeError();
      }
      function Ee(a) {
        return !!a;
      }
      function qt(a) {
        return "" + a;
      }
      function oe(a) {
        var o = ge(a);
        return Se(o) ? o : qt(o);
      }
      function lt(a) {
        return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
      }
      function Ne(a) {
        return typeof a == "function";
      }
      function dt(a) {
        return typeof a == "function";
      }
      function zt(a) {
        switch (Y(a)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function We(a, o) {
        return a === o || a !== a && o !== o;
      }
      function pt(a, o) {
        var f = a[o];
        if (f != null) {
          if (!Ne(f))
            throw new TypeError();
          return f;
        }
      }
      function ht(a) {
        var o = pt(a, C);
        if (!Ne(o))
          throw new TypeError();
        var f = o.call(a);
        if (!B(f))
          throw new TypeError();
        return f;
      }
      function yt(a) {
        return a.value;
      }
      function vt(a) {
        var o = a.next();
        return o.done ? !1 : o;
      }
      function bt(a) {
        var o = a.return;
        o && o.call(a);
      }
      function Fe(a) {
        var o = Object.getPrototypeOf(a);
        if (typeof a != "function" || a === P || o !== P)
          return o;
        var f = a.prototype, y = f && Object.getPrototypeOf(f);
        if (y == null || y === Object.prototype)
          return o;
        var A = y.constructor;
        return typeof A != "function" || A === a ? o : A;
      }
      function Xt() {
        var a;
        !k(x) && typeof r.Reflect < "u" && !(x in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (a = Jt(r.Reflect));
        var o, f, y, A = new m(), z = {
          registerProvider: q,
          getProvider: O,
          setProvider: E
        };
        return z;
        function q(D) {
          if (!Object.isExtensible(z))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case a === D:
              break;
            case k(o):
              o = D;
              break;
            case o === D:
              break;
            case k(f):
              f = D;
              break;
            case f === D:
              break;
            default:
              y === void 0 && (y = new p()), y.add(D);
              break;
          }
        }
        function L(D, R) {
          if (!k(o)) {
            if (o.isProviderFor(D, R))
              return o;
            if (!k(f)) {
              if (f.isProviderFor(D, R))
                return o;
              if (!k(y))
                for (var H = ht(y); ; ) {
                  var G = vt(H);
                  if (!G)
                    return;
                  var ie = yt(G);
                  if (ie.isProviderFor(D, R))
                    return bt(H), ie;
                }
            }
          }
          if (!k(a) && a.isProviderFor(D, R))
            return a;
        }
        function O(D, R) {
          var H = A.get(D), G;
          return k(H) || (G = H.get(R)), k(G) && (G = L(D, R), k(G) || (k(H) && (H = new h(), A.set(D, H)), H.set(R, G))), G;
        }
        function g(D) {
          if (k(D))
            throw new TypeError();
          return o === D || f === D || !k(y) && y.has(D);
        }
        function E(D, R, H) {
          if (!g(H))
            throw new Error("Metadata provider not registered.");
          var G = O(D, R);
          if (G !== H) {
            if (!k(G))
              return !1;
            var ie = A.get(D);
            k(ie) && (ie = new h(), A.set(D, ie)), ie.set(R, H);
          }
          return !0;
        }
      }
      function Zt() {
        var a;
        return !k(x) && B(r.Reflect) && Object.isExtensible(r.Reflect) && (a = r.Reflect[x]), k(a) && (a = Xt()), !k(x) && B(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, x, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: a
        }), a;
      }
      function Yt(a) {
        var o = new m(), f = {
          isProviderFor: function(g, E) {
            var D = o.get(g);
            return k(D) ? !1 : D.has(E);
          },
          OrdinaryDefineOwnMetadata: q,
          OrdinaryHasOwnMetadata: A,
          OrdinaryGetOwnMetadata: z,
          OrdinaryOwnMetadataKeys: L,
          OrdinaryDeleteMetadata: O
        };
        return N.registerProvider(f), f;
        function y(g, E, D) {
          var R = o.get(g), H = !1;
          if (k(R)) {
            if (!D)
              return;
            R = new h(), o.set(g, R), H = !0;
          }
          var G = R.get(E);
          if (k(G)) {
            if (!D)
              return;
            if (G = new h(), R.set(E, G), !a.setProvider(g, E, f))
              throw R.delete(E), H && o.delete(g), new Error("Wrong provider for target.");
          }
          return G;
        }
        function A(g, E, D) {
          var R = y(
            E,
            D,
            /*Create*/
            !1
          );
          return k(R) ? !1 : Ee(R.has(g));
        }
        function z(g, E, D) {
          var R = y(
            E,
            D,
            /*Create*/
            !1
          );
          if (!k(R))
            return R.get(g);
        }
        function q(g, E, D, R) {
          var H = y(
            D,
            R,
            /*Create*/
            !0
          );
          H.set(g, E);
        }
        function L(g, E) {
          var D = [], R = y(
            g,
            E,
            /*Create*/
            !1
          );
          if (k(R))
            return D;
          for (var H = R.keys(), G = ht(H), ie = 0; ; ) {
            var mt = vt(G);
            if (!mt)
              return D.length = ie, D;
            var tr = yt(mt);
            try {
              D[ie] = tr;
            } catch (rr) {
              try {
                bt(G);
              } finally {
                throw rr;
              }
            }
            ie++;
          }
        }
        function O(g, E, D) {
          var R = y(
            E,
            D,
            /*Create*/
            !1
          );
          if (k(R) || !R.delete(g))
            return !1;
          if (R.size === 0) {
            var H = o.get(E);
            k(H) || (H.delete(D), H.size === 0 && o.delete(H));
          }
          return !0;
        }
      }
      function Jt(a) {
        var o = a.defineMetadata, f = a.hasOwnMetadata, y = a.getOwnMetadata, A = a.getOwnMetadataKeys, z = a.deleteMetadata, q = new m(), L = {
          isProviderFor: function(O, g) {
            var E = q.get(O);
            return !k(E) && E.has(g) ? !0 : A(O, g).length ? (k(E) && (E = new p(), q.set(O, E)), E.add(g), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: o,
          OrdinaryHasOwnMetadata: f,
          OrdinaryGetOwnMetadata: y,
          OrdinaryOwnMetadataKeys: A,
          OrdinaryDeleteMetadata: z
        };
        return L;
      }
      function Ce(a, o, f) {
        var y = N.getProvider(a, o);
        if (!k(y))
          return y;
        if (f) {
          if (N.setProvider(a, o, F))
            return F;
          throw new Error("Illegal state.");
        }
      }
      function Qt() {
        var a = {}, o = [], f = (
          /** @class */
          function() {
            function L(O, g, E) {
              this._index = 0, this._keys = O, this._values = g, this._selector = E;
            }
            return L.prototype["@@iterator"] = function() {
              return this;
            }, L.prototype[C] = function() {
              return this;
            }, L.prototype.next = function() {
              var O = this._index;
              if (O >= 0 && O < this._keys.length) {
                var g = this._selector(this._keys[O], this._values[O]);
                return O + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: g, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, L.prototype.throw = function(O) {
              throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), O;
            }, L.prototype.return = function(O) {
              return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: O, done: !0 };
            }, L;
          }()
        ), y = (
          /** @class */
          function() {
            function L() {
              this._keys = [], this._values = [], this._cacheKey = a, this._cacheIndex = -2;
            }
            return Object.defineProperty(L.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), L.prototype.has = function(O) {
              return this._find(
                O,
                /*insert*/
                !1
              ) >= 0;
            }, L.prototype.get = function(O) {
              var g = this._find(
                O,
                /*insert*/
                !1
              );
              return g >= 0 ? this._values[g] : void 0;
            }, L.prototype.set = function(O, g) {
              var E = this._find(
                O,
                /*insert*/
                !0
              );
              return this._values[E] = g, this;
            }, L.prototype.delete = function(O) {
              var g = this._find(
                O,
                /*insert*/
                !1
              );
              if (g >= 0) {
                for (var E = this._keys.length, D = g + 1; D < E; D++)
                  this._keys[D - 1] = this._keys[D], this._values[D - 1] = this._values[D];
                return this._keys.length--, this._values.length--, We(O, this._cacheKey) && (this._cacheKey = a, this._cacheIndex = -2), !0;
              }
              return !1;
            }, L.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
            }, L.prototype.keys = function() {
              return new f(this._keys, this._values, A);
            }, L.prototype.values = function() {
              return new f(this._keys, this._values, z);
            }, L.prototype.entries = function() {
              return new f(this._keys, this._values, q);
            }, L.prototype["@@iterator"] = function() {
              return this.entries();
            }, L.prototype[C] = function() {
              return this.entries();
            }, L.prototype._find = function(O, g) {
              if (!We(this._cacheKey, O)) {
                this._cacheIndex = -1;
                for (var E = 0; E < this._keys.length; E++)
                  if (We(this._keys[E], O)) {
                    this._cacheIndex = E;
                    break;
                  }
              }
              return this._cacheIndex < 0 && g && (this._cacheIndex = this._keys.length, this._keys.push(O), this._values.push(void 0)), this._cacheIndex;
            }, L;
          }()
        );
        return y;
        function A(L, O) {
          return L;
        }
        function z(L, O) {
          return O;
        }
        function q(L, O) {
          return [L, O];
        }
      }
      function Vt() {
        var a = (
          /** @class */
          function() {
            function o() {
              this._map = new h();
            }
            return Object.defineProperty(o.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), o.prototype.has = function(f) {
              return this._map.has(f);
            }, o.prototype.add = function(f) {
              return this._map.set(f, f), this;
            }, o.prototype.delete = function(f) {
              return this._map.delete(f);
            }, o.prototype.clear = function() {
              this._map.clear();
            }, o.prototype.keys = function() {
              return this._map.keys();
            }, o.prototype.values = function() {
              return this._map.keys();
            }, o.prototype.entries = function() {
              return this._map.entries();
            }, o.prototype["@@iterator"] = function() {
              return this.keys();
            }, o.prototype[C] = function() {
              return this.keys();
            }, o;
          }()
        );
        return a;
      }
      function er() {
        var a = 16, o = b.create(), f = y();
        return (
          /** @class */
          function() {
            function O() {
              this._key = y();
            }
            return O.prototype.has = function(g) {
              var E = A(
                g,
                /*create*/
                !1
              );
              return E !== void 0 ? b.has(E, this._key) : !1;
            }, O.prototype.get = function(g) {
              var E = A(
                g,
                /*create*/
                !1
              );
              return E !== void 0 ? b.get(E, this._key) : void 0;
            }, O.prototype.set = function(g, E) {
              var D = A(
                g,
                /*create*/
                !0
              );
              return D[this._key] = E, this;
            }, O.prototype.delete = function(g) {
              var E = A(
                g,
                /*create*/
                !1
              );
              return E !== void 0 ? delete E[this._key] : !1;
            }, O.prototype.clear = function() {
              this._key = y();
            }, O;
          }()
        );
        function y() {
          var O;
          do
            O = "@@WeakMap@@" + L();
          while (b.has(o, O));
          return o[O] = !0, O;
        }
        function A(O, g) {
          if (!i.call(O, f)) {
            if (!g)
              return;
            Object.defineProperty(O, f, { value: b.create() });
          }
          return O[f];
        }
        function z(O, g) {
          for (var E = 0; E < g; ++E)
            O[E] = Math.random() * 255 | 0;
          return O;
        }
        function q(O) {
          if (typeof Uint8Array == "function") {
            var g = new Uint8Array(O);
            return typeof crypto < "u" ? crypto.getRandomValues(g) : typeof msCrypto < "u" ? msCrypto.getRandomValues(g) : z(g, O), g;
          }
          return z(new Array(O), O);
        }
        function L() {
          var O = q(a);
          O[6] = O[6] & 79 | 64, O[8] = O[8] & 191 | 128;
          for (var g = "", E = 0; E < a; ++E) {
            var D = O[E];
            (E === 4 || E === 6 || E === 8) && (g += "-"), D < 16 && (g += "0"), g += D.toString(16).toLowerCase();
          }
          return g;
        }
      }
      function Be(a) {
        return a.__ = void 0, delete a.__, a;
      }
    });
  }(e || (e = {})), Ot;
}
or();
const Lt = Symbol.for("decoco.Fragment"), st = Symbol.for("decoco:isVnode");
var V;
(function(e) {
  e[e.ELEMENT_NODE = 1] = "ELEMENT_NODE", e[e.TEXT_NODE = 3] = "TEXT_NODE", e[e.COMMENT_NODE = 8] = "COMMENT_NODE", e[e.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", e[e.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE";
})(V || (V = {}));
function Le(e) {
  if (Array.isArray(e)) {
    const t = [];
    return e.forEach((n) => {
      const r = Le(n);
      Array.isArray(r) ? t.push(...r) : t.push(r);
    }), t;
  } else return Rt(e) ? cr(e.type) ? !("displayName" in e.type) || typeof e.type.displayName != "string" ? (console.error(new Error(`jsxElementToVnode: <${e.type}> is a component, but no displayName property.`)), Ge("")) : gt(e.type.displayName, e.props) : e[st] ? e : e.type === Lt ? Le(e.props.children) : e.type ? gt(e.type, e.props) : (console.error(new Error(`jsxElementToVnode: <${e.type}> is unknown element type`)), Ge("")) : typeof e == "string" || typeof e == "number" ? Ge(String(e)) : [];
}
function Ge(e) {
  return {
    type: V.TEXT_NODE,
    text: e.toString(),
    key: void 0,
    elm: void 0,
    [st]: !0
  };
}
function gt(e, t) {
  const { key: n, children: r = [], ...i } = t || {}, s = [];
  return r.forEach((d) => {
    const C = Le(d);
    Array.isArray(C) ? s.push(...C) : s.push(C);
  }), {
    type: V.ELEMENT_NODE,
    tag: e,
    key: n,
    props: i,
    children: s,
    elm: void 0,
    [st]: !0
  };
}
function Rt(e) {
  return typeof e == "object" && e !== null;
}
function It(e) {
  return e && e.type === V.ELEMENT_NODE;
}
function Ke(e) {
  return e.type === V.TEXT_NODE;
}
function sr(e) {
  return e.type === V.DOCUMENT_FRAGMENT_NODE;
}
function Ze(e) {
  return e.startsWith("on");
}
function ur(e) {
  return typeof e > "u";
}
function fr(e) {
  return e === null;
}
function Ut(e) {
  return !ur(e) && !fr(e);
}
function cr(e) {
  return typeof e == "function";
}
function Et(e, t, n) {
  "escapePropSet" in e && typeof e.escapePropSet == "function" ? e.escapePropSet(t, n) : e[t] = n;
}
function lr(e, t, n) {
  const r = e.tagName.toUpperCase();
  t === "defaultValue" && ["INPUT", "TEXTAREA"].includes(r) ? e.defaultValue = n : t === "defaultChecked" && r === "INPUT" && ["checkbox", "radio"].includes(e.type) ? e.defaultChecked = n : t === "value" && (r === "INPUT" && !["checkbox", "radio"].includes(e.type) || r === "TEXTAREA") ? e.value = n : e.setAttribute(t, n);
}
function dr(e, t) {
  if (Rt(t))
    for (const n of Object.keys(t)) {
      const r = n, i = t[r];
      r !== "length" && r !== "parentRule" ? e.style[r] = i : console.error(`Unsupported CSS property: ${n}`);
    }
  else typeof t == "string" && (e.style.cssText = t);
}
function pr(e, t, n) {
  if (!Ut(n))
    e[t] !== void 0 && Et(e, t, void 0), e.removeAttribute(t);
  else
    try {
      t in e && Et(e, t, n), e.setAttribute(t, String(n));
    } catch (r) {
      console.error(`Error setting attribute '${t}':`, r);
    }
}
function Mt(e) {
  if (e.includes("-")) {
    const t = e.split("-"), n = t[t.length - 1].toLowerCase() === "capture";
    return {
      useCapture: n,
      eventName: t.slice(1, n ? t.length - 1 : t.length).join("-")
    };
  } else {
    const t = e.endsWith("Capture"), n = e.slice(2, t ? e.length - 7 : e.length);
    return {
      useCapture: t,
      eventName: n.toLowerCase()
    };
  }
}
function hr(e, t, n) {
  for (const r of Object.keys(n))
    if (Ze(r) && typeof n[r] == "function") {
      const { eventName: i, useCapture: s } = Mt(r);
      e.removeEventListener(i, n[r], s);
    }
  for (const r of Object.keys(t))
    if (Ze(r)) {
      typeof t[r] != "function" && console.error(new Error(`${e.tagName} ${r} must be a function!`));
      const { eventName: i, useCapture: s } = Mt(r);
      e.addEventListener(i, t[r], s);
    }
}
function Ye(e, t, n) {
  hr(e, t, n);
  const r = /* @__PURE__ */ new Set();
  for (const i of Object.keys(t))
    if (!Ze(i) && !["key", "children"].includes(i)) {
      const s = t[i];
      Dt(e, i, t, s), r.add(i);
    }
  for (const i of Object.keys(n))
    r.has(i) || Dt(e, i, n, void 0);
}
function Dt(e, t, n, r) {
  try {
    if (Object.is(e[t], r))
      return;
    switch (t) {
      case "dangerouslySetInnerHTML":
        typeof r == "object" && "__html" in r && r.__html != null && (e.innerHTML = r.__html);
        break;
      case "defaultValue":
      case "defaultChecked":
      case "value":
        lr(e, t, r);
        break;
      case "className":
        Ut(r) ? e.className = r : e.removeAttribute("class");
        break;
      case "style":
        dr(e, r);
        break;
      case "ref":
        typeof r == "function" ? r(e) : typeof r == "object" && r !== null && Object.prototype.hasOwnProperty.call(r, "current") ? r.current = e : n[t] = { current: e };
        break;
      default:
        pr(e, t, r);
    }
  } catch (i) {
    console.error(`Error setting attribute '${t}':`, i);
  }
}
function ye(e, t = !1) {
  let n;
  if (It(e))
    n = ft(e);
  else if (Ke(e))
    n = $t(e.text);
  else if (sr(e))
    n = yr();
  else
    throw new Error("unsupported vnode type");
  return e.elm = n, t && !Ke(e) && e.children.forEach((r) => {
    let i;
    Ke(r) ? i = ye(r) : i = ye(r, t), r.elm = n, re(n, i);
  }), n;
}
function ut(e) {
  var t;
  return (t = e.elm.parentNode) == null ? void 0 : t.removeChild(e.elm);
}
function ft(e) {
  const { tag: t, props: n } = e, r = document.createElement(t);
  return Ye(r, n, {}), r;
}
function $t(e) {
  const t = document.createTextNode("");
  return t.textContent = e, t;
}
function yr() {
  return document.createDocumentFragment();
}
function vr(e, t, n) {
  e.insertBefore(t, n);
}
function br(e, t) {
  e.appendChild(t);
}
function re(e, t, n) {
  n ? vr(e, t, n) : br(e, t);
}
const Me = Symbol.for("decoco:vnode");
function mr(e, t) {
  if (t[Me]) {
    const n = t[Me];
    Array.isArray(e) ? e.forEach((r, i) => {
      const s = Array.isArray(n) ? n[i] : n;
      le(r, s);
    }) : Array.isArray(t[Me]) ? le(e, t[Me][0]) : le(e, t[Me]);
  } else
    t.innerHTML = "", He(e, t);
  t[Me] = e;
}
function He(e, t) {
  if (Array.isArray(e)) {
    e.forEach((n) => {
      He(n, t);
    });
    return;
  }
  switch (e.type) {
    case V.ELEMENT_NODE:
      wr(e, t);
      break;
    case V.TEXT_NODE:
      Or(e, t);
      break;
    case V.DOCUMENT_FRAGMENT_NODE:
      _r(e, t);
      break;
    default:
      console.error(new Error("not support type:" + e.type));
  }
}
function wr(e, t) {
  const n = ft(e);
  e.elm = n, e.children.forEach((r) => {
    He(r, n);
  }), re(t, n);
}
function Or(e, t) {
  const n = $t(e.text);
  e.elm = n, re(t, n);
}
function _r(e, t) {
  const n = ye(e);
  e.elm = n, e.children.forEach((r) => {
    He(r, n);
  }), re(t, n);
}
function le(e, t) {
  const n = e.elm = t.elm;
  switch (t.type) {
    case V.ELEMENT_NODE:
      gr(t, e);
      break;
    case V.TEXT_NODE:
      Er(t, e);
      break;
    case V.DOCUMENT_FRAGMENT_NODE:
      Mr(n, t, e);
      break;
    default:
      console.error(new Error("not support type"));
  }
}
function gr(e, t) {
  if (e.tag !== t.tag) {
    const n = ft(t);
    t.elm = n, re(e.elm.parentNode, n, e.elm), ut(e), Ye(n, t.props, {}), Je(n, t.children, e.children);
  } else {
    const n = t.elm = e.elm;
    Ye(n, t.props, e.props), Je(n, t.children, e.children);
  }
}
function Er(e, t) {
  const n = e.text, r = t.text;
  return n !== r && (e.elm.textContent = r), t;
}
function Mr(e, t, n) {
  if (t.elm !== n.elm) {
    const r = ye(n);
    n.elm = r, re(e, r, t.elm), ut(t);
  } else
    n.elm = t.elm, Je(e, n.children, t.children);
}
function Te(e, t) {
  return e.type === t.type && e.key === t.key && e.tag === t.tag;
}
function Je(e, t, n) {
  var v;
  let r = 0, i = 0, s = t.length - 1, d = n.length - 1, C, T;
  for (; r <= s && i <= d; )
    if (t[r] == null)
      r++;
    else if (t[s] == null)
      s--;
    else if (n[i] == null)
      i++;
    else if (n[d] == null)
      d--;
    else if (Te(t[r], n[i]))
      le(t[r++], n[i++]);
    else if (Te(t[s], n[d]))
      le(t[s--], n[d--]);
    else if (Te(t[r], n[d]))
      le(t[r], n[d]), re(e, n[d].elm, n[i].elm), r++, d--;
    else if (Te(t[s], n[i]))
      le(t[s], n[i]), re(e, n[i].elm, n[d].elm.nextSibling), s--, i++;
    else if (C || (C = Dr(n, i, d)), T = C[t[r].key], T === void 0) {
      const w = ye(t[r], !0);
      t[r].elm = w, re(e, w, n[i].elm), r++;
    } else {
      if (Te(n[T], t[r]))
        le(t[r], n[T]), n[T] = void 0, re(e, n[T].elm, n[i].elm);
      else {
        const w = ye(t[r], !0);
        t[r].elm = w, re(e, w, n[i].elm);
      }
      r++;
    }
  for (let w = r; w <= s; w++) {
    const b = ye(t[w], !0);
    t[w].elm = b, re(e, b, (v = n[i]) == null ? void 0 : v.elm);
  }
  for (let w = i; w <= d; w++)
    ut(n[w]);
}
function Dr(e, t, n) {
  const r = {};
  for (let i = t; i <= n; i++) {
    const s = e[i];
    if (It(s)) {
      const d = s.key;
      d && (r[d] = i);
    }
  }
  return r;
}
function Qe(e, t = {}, ...n) {
  return Le({
    type: e,
    props: { ...t, children: n },
    key: null
  });
}
var je = { exports: {} }, Pr = je.exports, Pt;
function Cr() {
  return Pt || (Pt = 1, function(e, t) {
    (function(n, r) {
      var i = r(n);
      e.exports = i;
    })(Pr, function(n) {
      var r = ["N", "E", "A", "D"];
      function i(c, l) {
        c.super_ = l, c.prototype = Object.create(l.prototype, {
          constructor: {
            value: c,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
      }
      function s(c, l) {
        Object.defineProperty(this, "kind", {
          value: c,
          enumerable: !0
        }), l && l.length && Object.defineProperty(this, "path", {
          value: l,
          enumerable: !0
        });
      }
      function d(c, l, u) {
        d.super_.call(this, "E", c), Object.defineProperty(this, "lhs", {
          value: l,
          enumerable: !0
        }), Object.defineProperty(this, "rhs", {
          value: u,
          enumerable: !0
        });
      }
      i(d, s);
      function C(c, l) {
        C.super_.call(this, "N", c), Object.defineProperty(this, "rhs", {
          value: l,
          enumerable: !0
        });
      }
      i(C, s);
      function T(c, l) {
        T.super_.call(this, "D", c), Object.defineProperty(this, "lhs", {
          value: l,
          enumerable: !0
        });
      }
      i(T, s);
      function v(c, l, u) {
        v.super_.call(this, "A", c), Object.defineProperty(this, "index", {
          value: l,
          enumerable: !0
        }), Object.defineProperty(this, "item", {
          value: u,
          enumerable: !0
        });
      }
      i(v, s);
      function w(c, l, u) {
        var _ = c.slice(l + 1 || c.length);
        return c.length = l < 0 ? c.length + l : l, c.push.apply(c, _), c;
      }
      function b(c) {
        var l = typeof c;
        return l !== "object" ? l : c === Math ? "math" : c === null ? "null" : Array.isArray(c) ? "array" : Object.prototype.toString.call(c) === "[object Date]" ? "date" : typeof c.toString == "function" && /^\/.*\//.test(c.toString()) ? "regexp" : "object";
      }
      function P(c) {
        var l = 0;
        if (c.length === 0)
          return l;
        for (var u = 0; u < c.length; u++) {
          var _ = c.charCodeAt(u);
          l = (l << 5) - l + _, l = l & l;
        }
        return l;
      }
      function h(c) {
        var l = 0, u = b(c);
        if (u === "array") {
          c.forEach(function(ae) {
            l += h(ae);
          });
          var _ = "[type: array, hash: " + l + "]";
          return l + P(_);
        }
        if (u === "object") {
          for (var M in c)
            if (c.hasOwnProperty(M)) {
              var U = "[ type: object, key: " + M + ", value hash: " + h(c[M]) + "]";
              l += P(U);
            }
          return l;
        }
        var j = "[ type: " + u + " ; value: " + c + "]";
        return l + P(j);
      }
      function p(c, l, u, _, M, U, j, ae) {
        u = u || [], M = M || [], j = j || [];
        var K = M.slice(0);
        if (typeof U < "u" && U !== null) {
          if (_) {
            if (typeof _ == "function" && _(K, U))
              return;
            if (typeof _ == "object") {
              if (_.prefilter && _.prefilter(K, U))
                return;
              if (_.normalize) {
                var Oe = _.normalize(K, U, c, l);
                Oe && (c = Oe[0], l = Oe[1]);
              }
            }
          }
          K.push(U);
        }
        b(c) === "regexp" && b(l) === "regexp" && (c = c.toString(), l = l.toString());
        var _e = typeof c, Ae = typeof l, $, fe, Y, k, se = _e !== "undefined" || j && j.length > 0 && j[j.length - 1].lhs && Object.getOwnPropertyDescriptor(j[j.length - 1].lhs, U), Se = Ae !== "undefined" || j && j.length > 0 && j[j.length - 1].rhs && Object.getOwnPropertyDescriptor(j[j.length - 1].rhs, U);
        if (!se && Se)
          u.push(new C(K, l));
        else if (!Se && se)
          u.push(new T(K, c));
        else if (b(c) !== b(l))
          u.push(new d(K, c, l));
        else if (b(c) === "date" && c - l !== 0)
          u.push(new d(K, c, l));
        else if (_e === "object" && c !== null && l !== null) {
          for ($ = j.length - 1; $ > -1; --$)
            if (j[$].lhs === c) {
              k = !0;
              break;
            }
          if (k)
            c !== l && u.push(new d(K, c, l));
          else {
            if (j.push({ lhs: c, rhs: l }), Array.isArray(c)) {
              for (ae && (c.sort(function(Pe, Ee) {
                return h(Pe) - h(Ee);
              }), l.sort(function(Pe, Ee) {
                return h(Pe) - h(Ee);
              })), $ = l.length - 1, fe = c.length - 1; $ > fe; )
                u.push(new v(K, $, new C(void 0, l[$--])));
              for (; fe > $; )
                u.push(new v(K, fe, new T(void 0, c[fe--])));
              for (; $ >= 0; --$)
                p(c[$], l[$], u, _, K, $, j, ae);
            } else {
              var B = Object.keys(c), ge = Object.keys(l);
              for ($ = 0; $ < B.length; ++$)
                Y = B[$], k = ge.indexOf(Y), k >= 0 ? (p(c[Y], l[Y], u, _, K, Y, j, ae), ge[k] = null) : p(c[Y], void 0, u, _, K, Y, j, ae);
              for ($ = 0; $ < ge.length; ++$)
                Y = ge[$], Y && p(void 0, l[Y], u, _, K, Y, j, ae);
            }
            j.length = j.length - 1;
          }
        } else c !== l && (_e === "number" && isNaN(c) && isNaN(l) || u.push(new d(K, c, l)));
      }
      function m(c, l, u, _, M) {
        var U = [];
        if (p(c, l, U, _, null, null, null, M), u)
          for (var j = 0; j < U.length; ++j)
            u(U[j]);
        return U;
      }
      function x(c, l, u, _, M, U, j) {
        return p(c, l, u, _, M, U, j, !0);
      }
      function N(c, l, u, _) {
        var M = _ ? function(j) {
          j && _.push(j);
        } : void 0, U = m(c, l, M, u);
        return _ || (U.length ? U : void 0);
      }
      function F(c, l, u, _) {
        var M = _ ? function(j) {
          j && _.push(j);
        } : void 0, U = m(c, l, M, u, !0);
        return _ || (U.length ? U : void 0);
      }
      function W(c, l, u) {
        if (u.path && u.path.length) {
          var _ = c[l], M, U = u.path.length - 1;
          for (M = 0; M < U; M++)
            _ = _[u.path[M]];
          switch (u.kind) {
            case "A":
              W(_[u.path[M]], u.index, u.item);
              break;
            case "D":
              delete _[u.path[M]];
              break;
            case "E":
            case "N":
              _[u.path[M]] = u.rhs;
              break;
          }
        } else
          switch (u.kind) {
            case "A":
              W(c[l], u.index, u.item);
              break;
            case "D":
              c = w(c, l);
              break;
            case "E":
            case "N":
              c[l] = u.rhs;
              break;
          }
        return c;
      }
      function ne(c, l, u) {
        if (typeof u > "u" && l && ~r.indexOf(l.kind) && (u = l), c && u && u.kind) {
          for (var _ = c, M = -1, U = u.path ? u.path.length - 1 : 0; ++M < U; )
            typeof _[u.path[M]] > "u" && (_[u.path[M]] = typeof u.path[M + 1] < "u" && typeof u.path[M + 1] == "number" ? [] : {}), _ = _[u.path[M]];
          switch (u.kind) {
            case "A":
              u.path && typeof _[u.path[M]] > "u" && (_[u.path[M]] = []), W(u.path ? _[u.path[M]] : _, u.index, u.item);
              break;
            case "D":
              delete _[u.path[M]];
              break;
            case "E":
            case "N":
              _[u.path[M]] = u.rhs;
              break;
          }
        }
      }
      function X(c, l, u) {
        if (u.path && u.path.length) {
          var _ = c[l], M, U = u.path.length - 1;
          for (M = 0; M < U; M++)
            _ = _[u.path[M]];
          switch (u.kind) {
            case "A":
              X(_[u.path[M]], u.index, u.item);
              break;
            case "D":
              _[u.path[M]] = u.lhs;
              break;
            case "E":
              _[u.path[M]] = u.lhs;
              break;
            case "N":
              delete _[u.path[M]];
              break;
          }
        } else
          switch (u.kind) {
            case "A":
              X(c[l], u.index, u.item);
              break;
            case "D":
              c[l] = u.lhs;
              break;
            case "E":
              c[l] = u.lhs;
              break;
            case "N":
              c = w(c, l);
              break;
          }
        return c;
      }
      function we(c, l, u) {
        if (c && l && u && u.kind) {
          var _ = c, M, U;
          for (U = u.path.length - 1, M = 0; M < U; M++)
            typeof _[u.path[M]] > "u" && (_[u.path[M]] = {}), _ = _[u.path[M]];
          switch (u.kind) {
            case "A":
              X(_[u.path[M]], u.index, u.item);
              break;
            case "D":
              _[u.path[M]] = u.lhs;
              break;
            case "E":
              _[u.path[M]] = u.lhs;
              break;
            case "N":
              delete _[u.path[M]];
              break;
          }
        }
      }
      function ee(c, l, u) {
        if (c && l) {
          var _ = function(M) {
            (!u || u(c, l, M)) && ne(c, l, M);
          };
          m(c, l, _);
        }
      }
      return Object.defineProperties(N, {
        diff: {
          value: N,
          enumerable: !0
        },
        orderIndependentDiff: {
          value: F,
          enumerable: !0
        },
        observableDiff: {
          value: m,
          enumerable: !0
        },
        orderIndependentObservableDiff: {
          value: x,
          enumerable: !0
        },
        orderIndepHash: {
          value: h,
          enumerable: !0
        },
        applyDiff: {
          value: ee,
          enumerable: !0
        },
        applyChange: {
          value: ne,
          enumerable: !0
        },
        revertChange: {
          value: we,
          enumerable: !0
        },
        isConflict: {
          value: function() {
            return typeof $conflict < "u";
          },
          enumerable: !0
        }
      }), N.DeepDiff = N, n && (n.DeepDiff = N), N;
    });
  }(je)), je.exports;
}
var Ct = Cr(), qe, Tt;
function Tr() {
  if (Tt) return qe;
  Tt = 1, qe = t;
  function e(r) {
    return r instanceof Buffer ? Buffer.from(r) : new r.constructor(r.buffer.slice(), r.byteOffset, r.length);
  }
  function t(r) {
    if (r = r || {}, r.circles) return n(r);
    const i = /* @__PURE__ */ new Map();
    if (i.set(Date, (v) => new Date(v)), i.set(Map, (v, w) => new Map(d(Array.from(v), w))), i.set(Set, (v, w) => new Set(d(Array.from(v), w))), r.constructorHandlers)
      for (const v of r.constructorHandlers)
        i.set(v[0], v[1]);
    let s = null;
    return r.proto ? T : C;
    function d(v, w) {
      const b = Object.keys(v), P = new Array(b.length);
      for (let h = 0; h < b.length; h++) {
        const p = b[h], m = v[p];
        typeof m != "object" || m === null ? P[p] = m : m.constructor !== Object && (s = i.get(m.constructor)) ? P[p] = s(m, w) : ArrayBuffer.isView(m) ? P[p] = e(m) : P[p] = w(m);
      }
      return P;
    }
    function C(v) {
      if (typeof v != "object" || v === null) return v;
      if (Array.isArray(v)) return d(v, C);
      if (v.constructor !== Object && (s = i.get(v.constructor)))
        return s(v, C);
      const w = {};
      for (const b in v) {
        if (Object.hasOwnProperty.call(v, b) === !1) continue;
        const P = v[b];
        typeof P != "object" || P === null ? w[b] = P : P.constructor !== Object && (s = i.get(P.constructor)) ? w[b] = s(P, C) : ArrayBuffer.isView(P) ? w[b] = e(P) : w[b] = C(P);
      }
      return w;
    }
    function T(v) {
      if (typeof v != "object" || v === null) return v;
      if (Array.isArray(v)) return d(v, T);
      if (v.constructor !== Object && (s = i.get(v.constructor)))
        return s(v, T);
      const w = {};
      for (const b in v) {
        const P = v[b];
        typeof P != "object" || P === null ? w[b] = P : P.constructor !== Object && (s = i.get(P.constructor)) ? w[b] = s(P, T) : ArrayBuffer.isView(P) ? w[b] = e(P) : w[b] = T(P);
      }
      return w;
    }
  }
  function n(r) {
    const i = [], s = [], d = /* @__PURE__ */ new Map();
    if (d.set(Date, (b) => new Date(b)), d.set(Map, (b, P) => new Map(T(Array.from(b), P))), d.set(Set, (b, P) => new Set(T(Array.from(b), P))), r.constructorHandlers)
      for (const b of r.constructorHandlers)
        d.set(b[0], b[1]);
    let C = null;
    return r.proto ? w : v;
    function T(b, P) {
      const h = Object.keys(b), p = new Array(h.length);
      for (let m = 0; m < h.length; m++) {
        const x = h[m], N = b[x];
        if (typeof N != "object" || N === null)
          p[x] = N;
        else if (N.constructor !== Object && (C = d.get(N.constructor)))
          p[x] = C(N, P);
        else if (ArrayBuffer.isView(N))
          p[x] = e(N);
        else {
          const F = i.indexOf(N);
          F !== -1 ? p[x] = s[F] : p[x] = P(N);
        }
      }
      return p;
    }
    function v(b) {
      if (typeof b != "object" || b === null) return b;
      if (Array.isArray(b)) return T(b, v);
      if (b.constructor !== Object && (C = d.get(b.constructor)))
        return C(b, v);
      const P = {};
      i.push(b), s.push(P);
      for (const h in b) {
        if (Object.hasOwnProperty.call(b, h) === !1) continue;
        const p = b[h];
        if (typeof p != "object" || p === null)
          P[h] = p;
        else if (p.constructor !== Object && (C = d.get(p.constructor)))
          P[h] = C(p, v);
        else if (ArrayBuffer.isView(p))
          P[h] = e(p);
        else {
          const m = i.indexOf(p);
          m !== -1 ? P[h] = s[m] : P[h] = v(p);
        }
      }
      return i.pop(), s.pop(), P;
    }
    function w(b) {
      if (typeof b != "object" || b === null) return b;
      if (Array.isArray(b)) return T(b, w);
      if (b.constructor !== Object && (C = d.get(b.constructor)))
        return C(b, w);
      const P = {};
      i.push(b), s.push(P);
      for (const h in b) {
        const p = b[h];
        if (typeof p != "object" || p === null)
          P[h] = p;
        else if (p.constructor !== Object && (C = d.get(p.constructor)))
          P[h] = C(p, w);
        else if (ArrayBuffer.isView(p))
          P[h] = e(p);
        else {
          const m = i.indexOf(p);
          m !== -1 ? P[h] = s[m] : P[h] = w(p);
        }
      }
      return i.pop(), s.pop(), P;
    }
  }
  return qe;
}
var kr = Tr();
const Ar = /* @__PURE__ */ ar(kr);
function Z(e) {
  process.env.NODE_ENV !== "production" && console.error(new Error(e));
}
function Ht(e) {
  return function(t) {
    return Object.prototype.toString.call(t).slice(8, -1);
  }(e) === "Object";
}
function Wt(e) {
  return e === void 0;
}
function he(e) {
  return !Wt(e) && !/* @__PURE__ */ function(t) {
    return t === null;
  }(e);
}
const ue = [], ze = [];
let xe, Ve = !1;
function Re(e, t, n) {
  const r = e;
  return r.id = t, r;
}
function kt(e) {
  const t = /* @__PURE__ */ new Map(), n = [...new Set(e)], r = [];
  for (let i = n.length - 1; i >= 0; i--) {
    const s = n[i], d = s.id;
    t.has(d) || (t.set(d, !0), r.unshift(s));
  }
  return r.sort((i, s) => Number(i.id ?? Number.MIN_SAFE_INTEGER) - Number(s.id ?? Number.MIN_SAFE_INTEGER));
}
function Ft(e = 0) {
  Ve = !1;
  const t = kt(ue.slice());
  ue.splice(0, ue.length);
  for (let n = 0; n < t.length; n++) t[n]();
  if (function(n = 0) {
    const r = kt(ze.slice());
    ze.splice(0, ze.length);
    for (let i = 0; i < r.length; i++) r[i]();
    ue.length && n >= 100 && Z("The number of scheduler postCallbacks exceeds the maximum limit of 100, please check the code.");
  }(), ue.length) {
    if (e >= 100) return void Z("The number of scheduler callbacks exceeds the maximum limit of 100, please check the code.");
    Ft(e + 1);
  }
}
function Sr(e) {
  return e ? Promise.resolve().then(e) : Promise.resolve();
}
function Ie(e) {
  const t = ue.findLast((i) => he(i.id)), n = t == null ? void 0 : t.id, r = e.id;
  if (!he(r) || !he(n) || r > n) ue.push(e);
  else {
    const i = ue.findIndex((s) => he(s.id) && s.id > r);
    ue.splice(i, 0, e);
  }
  Ve || (Ve = !0, xe(Ft));
}
typeof window.queueMicrotask == "function" ? xe = queueMicrotask : Promise && typeof Promise.resolve == "function" ? xe = (e) => Promise.resolve(0).then(e) : (Z("Your browser does not support queueMicrotask and Promise!!"), xe = (e) => setTimeout(e, 0));
let Nr = 1;
class ct {
  constructor(t, n = {}) {
    S(this, "id", Nr++);
    S(this, "effect");
    S(this, "scheduler");
    S(this, "cleanup", /* @__PURE__ */ new Set());
    const { scheduler: r, cleanup: i } = n;
    this.effect = t, this.scheduler = r, i && this.cleanup.add(i);
  }
  run(...t) {
    return this.effect(...t);
  }
  captureSelf(t, n, r) {
    Reflect.getMetadata("statePool", r || t).set(t, n, this);
  }
  execCleanup() {
    for (const t of this.cleanup.values()) t();
  }
}
const pe = class pe {
  constructor() {
    S(this, "stack", []);
  }
  static getInstance() {
    return pe.instance || (pe.instance = new pe()), pe.instance;
  }
  push(t) {
    this.stack.push(t);
  }
  pop() {
    return this.stack.pop();
  }
  get current() {
    return this.stack[this.stack.length - 1];
  }
};
S(pe, "instance");
let et = pe;
const J = Object.freeze(et.getInstance()), tt = /* @__PURE__ */ new WeakMap(), At = Symbol.for("isProxy");
function Ue(e, t, n = {}) {
  const { deep: r, autoDeepReactive: i = !0 } = n, s = Reflect.getMetadata("statePool", e);
  if (typeof (d = t) != "object" || d === null || t[At]) return t;
  var d;
  s.initState(t, new Set(Object.keys(t)));
  const C = new Proxy(t, { get(T, v, w) {
    return J.current && J.current.stateNode === e && J.current.effect.captureSelf(T, v, J.current.stateNode), v === At || Reflect.get(T, v, w);
  }, set: (T, v, w, b) => (Reflect.set(T, v, i ? Ue(e, w) : w, b), s.notify(T, v), !0), deleteProperty: (T, v) => (Reflect.deleteProperty(T, v), s.delete(T, v), !0) });
  if (r) for (const T of Object.keys(t)) {
    const v = Object.getOwnPropertyDescriptor(t, T);
    if (!v || v != null && v.writable) {
      const w = t[T];
      t[T] = Ue(e, w, n);
    }
  }
  return tt.set(C, t), C;
}
let $e = !1;
function Xe(e, t, n, r = { deep: !0 }) {
  let i = n;
  const { deep: s = !0, isProp: d, autoDeepReactive: C = !0 } = r, T = Reflect.getMetadata("statePool", e);
  return i = (Ht(i) || function(w) {
    return Array.isArray(w);
  }(i)) && s && s ? Ue(e, i, r) : i, Object.defineProperties(e, { [t]: { get() {
    return J.current && J.current.stateNode === e && J.current.effect.captureSelf(e, t), i;
  }, set(w) {
    if (!Object.is(w, i)) {
      if (d) {
        if (!$e) return;
        $e = !1;
      }
      return i = C ? Ue(e, w, r) : w, T.notify(e, t), !0;
    }
  } } });
}
class jr {
  constructor() {
    S(this, "isInitState", !1);
    S(this, "store", /* @__PURE__ */ new WeakMap());
  }
  initState(t, n) {
    if (this.isInitState) throw new Error("StatePool has been initialized");
    const r = this.store.get(t) || this.store.set(t, /* @__PURE__ */ new Map()).get(t);
    n.forEach((i) => {
      r.has(i) || r.set(i, /* @__PURE__ */ new Set());
    });
  }
  set(t, n, r) {
    if (tt.has(t) && !(t = tt.get(t))) throw new Error(`${t} is a proxy, but proxyMap has no target`);
    const i = this.store.get(t) || this.store.set(t, /* @__PURE__ */ new Map()).get(t), s = i.get(n) || i.set(n, /* @__PURE__ */ new Set()).get(n);
    r && (s == null || s.add(r));
  }
  setAll(t, n) {
    const r = this.store.get(t) || this.store.set(t, /* @__PURE__ */ new Map()).get(t);
    r == null || r.forEach((i) => {
      i.add(n);
    });
  }
  delete(t, n, r) {
    const i = this.store.get(t);
    if (!i) return void Z(`${t} has no state ${String(n)}`);
    const s = i.get(n);
    return s ? r ? (s.has(r) || Z("Not find effect. This possibly is a bug. Please report it."), s.delete(r), void r.execCleanup()) : (s.values().forEach((d) => {
      d.execCleanup();
    }), void s.clear()) : void 0;
  }
  notify(t, n) {
    const r = this.store.get(t) || this.store.set(t, /* @__PURE__ */ new Map()).get(t), i = r.get(n) || r.set(n, /* @__PURE__ */ new Set()).get(n);
    i == null || i.forEach((s) => {
      s.scheduler ? s.scheduler(t) : Ie(Re(s.run.bind(s), s.id));
    });
  }
}
function xr(e) {
  e.escapePropSet = (function(t, n) {
    return function(r, i, s) {
      $e = !0, r[i] = s, $e = !1;
    }(e, t, n);
  }).bind(e);
}
function Lr(e, t) {
  const n = e.replace(/\[(\w+)\]/g, ".$1").split(".");
  if (n.length === 1) return { ctx: t, property: n[0] };
  try {
    let r = t, i = "";
    return n.reduce((s, d) => (i = d, r = s, s[d]), t), { ctx: r, property: i };
  } catch {
    Z(`${e} is not a valid path`);
  }
}
const St = /* @__PURE__ */ new Set(["constructor", "connectedCallback", "disconnectedCallback", "attributeChangedCallback", "adoptedCallback", "connectedCallbackList", "disconnectedCallbackList", "attributeChangedCallbackList", "adoptedCallbackList", "componentWillMountList", "componentDidMountList", "componentWillUpdateList", "componentDidUpdateList", "render", "__isDecocoComponent__", "escapePropSet", "props", "context", "setState", "forceUpdate", "state", "refs"]);
var te, rt;
function ce(e, t) {
  const n = e[t + "List"];
  if (!Array.isArray(n)) throw new Error("lifecycle init error");
  const r = [];
  for (const i of n) try {
    const s = i.call(e);
    if (t === te.SHOULD_COMPONENT_UPDATE && s instanceof Promise) throw new Error(`${t} callback must be sync`);
    r.push(s);
  } catch (s) {
    console.error(`Lifecycle ${t} callback error`), console.error(s);
  }
  if (t === te.COMPONENT_WILL_MOUNT && r.some((i) => i === !1)) return { stop: !0 };
}
function Rr(e, t, n, r, i, s) {
  let d;
  const C = new ct(() => n[r]), T = Re(() => {
    const v = C.run(), w = () => {
      i.delete(n, r, C);
    };
    t.call(e, v, d, w), d = v, s.once && w();
  }, C.id);
  C.scheduler = () => Ie(T), C.captureSelf(n, r, e), s.immediate ? T() : d = C.run();
}
(function(e) {
  e.CONNECTED_CALLBACK = "connectedCallback", e.DISCONNECTED_CALLBACK = "disconnectedCallback", e.ATTRIBUTE_CHANGED_CALLBACK = "attributeChangedCallback", e.ADOPTED_CALLBACK = "adoptedCallback", e.COMPONENT_WILL_MOUNT = "componentWillMount", e.COMPONENT_DID_MOUNT = "componentDidMount", e.SHOULD_COMPONENT_UPDATE = "shouldComponentUpdate", e.COMPONENT_DID_UPDATE = "componentDidUpdate";
})(te || (te = {}));
class Ir {
  constructor(t = {}) {
    S(this, "eventInit");
    S(this, "customElement");
    this.eventInit = t;
  }
  setEventTarget(t) {
    this.customElement = t;
  }
  emit(t, n) {
    const r = new CustomEvent(t, { detail: n, ...this.eventInit });
    this.customElement.dispatchEvent(r);
  }
}
function Ur(e, t) {
  const n = this;
  let r, i = !0;
  const s = Reflect.getMetadata("statePool", this), d = t.get, C = t.set;
  return t.get = function() {
    J.current && J.current.stateNode === n && J.current.effect.captureSelf(n, e);
    const T = new ct(() => {
      i = !0, s.notify(n, e);
    });
    return i && (J.push({ effect: T, stateNode: n }), r = d(), J.pop(), i = !1), r;
  }, C && (t.set = function(T) {
    C.call(n, T), i = !0, s.notify(n, e);
  }), t;
}
(function(e) {
  e.computedKeys = "computedKeys";
})(rt || (rt = {}));
const Nt = Ar();
let $r = 0;
function be(e, t) {
  return function(n) {
    let r, i;
    typeof e == "string" ? (r = e, i = t == null ? void 0 : t.style) : (i = e.style || "", r = e.tag);
    const s = n.prototype.props || [];
    if (customElements.get(r)) return void Z(`custom element ${r} already exists`);
    /^[a-zA-Z][a-zA-Z0-9-]*$/.test(r) || Z(`Invalid tag name: ${r}. Tag names must start with a letter and contain only letters, digits, and hyphens.`), n.displayName = r, customElements.define(String(r), function(d, { tag: C, style: T, observedAttributes: v }) {
      var w;
      return w = class extends d {
        constructor() {
          var F;
          super();
          S(this, "uid", ++$r);
          S(this, "shadowRootLink");
          S(this, "__updateComponent");
          S(this, "__mounted", !1);
          S(this, "componentWillMountList", []);
          S(this, "componentDidMountList", []);
          S(this, "shouldComponentUpdateList", []);
          S(this, "componentDidUpdateList", []);
          S(this, "connectedCallbackList", []);
          S(this, "disconnectedCallbackList", []);
          S(this, "attributeChangedCallbackList", []);
          S(this, "adoptedCallbackList", []);
          this.shadowRootLink = this.attachShadow({ mode: "open" });
          const h = new ct(p.bind(this));
          function p() {
            if (this.__mounted) {
              const W = ce(this, te.SHOULD_COMPONENT_UPDATE);
              if (W && W.stop) return;
            }
            J.push({ effect: h, stateNode: this }), this.domUpdate(), J.pop(), this.__mounted && ce(this, te.COMPONENT_DID_UPDATE);
          }
          this.__updateComponent = p.bind(this), this.forceUpdate = this.__updateComponent, this.__isDecocoComponent__ = !0, xr(this);
          const m = new jr();
          Reflect.defineMetadata("statePool", m, this), this.validateStateAndPropKeys(), this.initRefs(), this.initState(), this.initProps(), this.initComputed(), this.initWatch(), this.initEventAndListen(), this.initStore(), this.initLifecycle();
          const x = Re(() => {
            ce(this, te.COMPONENT_WILL_MOUNT), this.__updateComponent(), this.__mounted = !0, ce(this, te.COMPONENT_DID_MOUNT);
          });
          x.id = this.uid, Ie(x);
          const N = (F = this.getPlugins) == null ? void 0 : F.call(this);
          N == null || N.forEach((W) => {
            Ht(W) && he(W.apply) ? W.apply(this) : Z(`plugin ${W} is not a valid plugin. Please check the plugin is a function.`);
          });
        }
        validateStateAndPropKeys() {
          const h = Reflect.getMetadata("stateKeys", this), p = Reflect.getMetadata("propKeys", this);
          if (h && p) for (const m of p.values()) h.has(m) && Z(`${String(C)} ${m} can only be one state or prop, please change it to another name.`);
          if (h) for (const m of h.values()) (St.has(m) || m in w.prototype) && Z(`${String(C)} ${m} is a reserved keyword, please change it to another name.`);
          if (p) for (const m of p.values()) St.has(m) && Z(`${String(C)} ${m} is a reserved keyword, please change it to another name.`);
        }
        validateSomeInStateOrProps(h) {
          const p = Reflect.getMetadata("stateKeys", this), m = Reflect.getMetadata("propKeys", this);
          for (const x of h) if (!p.has(x) && !m.has(x)) return x;
        }
        initRefs() {
          var p;
          const h = Reflect.getMetadata("refs", this);
          (p = h == null ? void 0 : h.keys()) == null || p.forEach((m) => {
            this[m] = { current: void 0 };
          });
        }
        initState() {
          const h = Reflect.getMetadata("statePool", this), p = Reflect.getMetadata("stateKeys", this);
          if (!h) throw new Error(`statePool is ${h}, initState error`);
          p && (h.initState(this, Array.from(p)), Array.from(p.values()).forEach((m) => {
            Xe(this, m, this[m]);
          }));
        }
        initProps() {
          const h = Reflect.getMetadata("statePool", this), p = Reflect.getMetadata("propKeys", this);
          if (!h) throw new Error(`statePool is ${h}, initState error`);
          p && (h.initState(this, Array.from(p)), Array.from(p.keys()).forEach((m) => {
            if (typeof m != "string") return;
            const x = this.getAttribute(m), N = m;
            Xe(this, m, this.hasAttribute(m) && !function(F) {
              return /^\[object .+]$/.test(F);
            }(x) ? x : this[N], { isProp: !0, deep: !0, autoDeepReactive: !0 }), this.hasAttribute(m) || this[N] === void 0 || this[N] === null || Ie(Re(() => {
              var F;
              return this.setAttribute(m, ((F = this[N]) == null ? void 0 : F.toString()) || "");
            }));
          }));
        }
        initComputed() {
          var p;
          const h = Reflect.getMetadata(rt.computedKeys, this);
          if (h) for (const m of h.values()) {
            const x = Object.getOwnPropertyDescriptor(d.prototype, m);
            if (Wt(x == null ? void 0 : x.get)) {
              Z(`computed property ${String(m)} has no getter`);
              continue;
            }
            const N = x.get.bind(this), F = (p = x.set) == null ? void 0 : p.bind(this), W = Ur.call(this, m, { get: N, set: F });
            Object.defineProperty(this, m, { ...W, get: W.get });
          }
        }
        initWatch() {
          const h = Reflect.getMetadata("watchers", this), p = Reflect.getMetadata("statePool", this);
          if (h) for (const m of h) {
            const { watchKeys: x, watchMethodName: N } = m;
            x.forEach((F) => {
              const { ctx: W, property: ne } = Lr(F, this) || {};
              if (!W || !ne) return void Z(`invalid watchKey ${F}`);
              const X = this[N];
              he(X) ? Rr(this, X, W, ne, p, m.options) : Z(`watchCallback ${N} is undefined`);
            });
          }
        }
        initEventAndListen() {
          const h = Reflect.getMetadata("events", this), p = Reflect.getMetadata("listens", this);
          if (h) for (const m of h.keys()) {
            const x = h.get(m), N = new Ir({ ...x });
            N.setEventTarget(this), this[m] = N;
          }
          if (p) for (const m of p.values()) m.call(this);
        }
        domUpdate() {
          let h = this.render();
          T instanceof CSSStyleSheet ? this.shadowRootLink.adoptedStyleSheets = [...this.shadowRootLink.adoptedStyleSheets, T] : typeof T == "string" && (Array.isArray(h) ? h.unshift(Qe("style", {}, T)) : h = [Qe("style", {}, T), h]), mr(h, this.shadowRootLink);
        }
        initLifecycle() {
          this.connectedCallbackList.push(super.connectedCallback), this.disconnectedCallbackList.push(super.disconnectedCallback), this.adoptedCallbackList.push(super.adoptedCallback), this.componentWillMountList.push(super.componentWillMount), this.componentDidMountList.push(super.componentDidMount), this.shouldComponentUpdateList.push(super.shouldComponentUpdate), this.componentDidUpdateList.push(super.componentDidUpdate), he(super.attributeChangedCallback) && this.attributeChangedCallbackList.push(super.attributeChangedCallback);
        }
        initStore() {
          const h = Reflect.getMetadata("stores", this);
          if (h) for (const p of h.keys()) {
            const { store: m, getState: x = (W) => W } = h.get(p), N = x(m.getState()), F = Nt(N);
            Xe(this, p, F), m.subscribe(() => {
              const W = Nt(x(m.getState())), ne = this[p], X = Ct.diff(ne, W);
              {
                const we = /* @__PURE__ */ new Set();
                X == null || X.forEach((ee) => {
                  var c;
                  ee.kind === "A" && ee.item && we.add((c = ee.path) == null ? void 0 : c.join("."));
                }), X == null || X.forEach((ee) => {
                  Ct.applyChange(ne, W, ee);
                }), we.values().forEach((ee) => {
                  if (!ee) return;
                  let c = ne;
                  if (ee.split(".").forEach((l) => {
                    c = c[l];
                  }), "length" in c) {
                    const l = c.length;
                    c.length = l;
                  }
                });
              }
            });
          }
        }
        attributeChangedCallback(h, p, m) {
          ce(this, te.ATTRIBUTE_CHANGED_CALLBACK);
        }
        connectedCallback() {
          ce(this, te.CONNECTED_CALLBACK);
        }
        disconnectedCallback() {
          ce(this, te.DISCONNECTED_CALLBACK);
        }
        adoptedCallback() {
          ce(this, te.ADOPTED_CALLBACK);
        }
      }, S(w, "observedAttributes", v), w;
    }(n, { tag: r, style: i, observedAttributes: s }));
  };
}
function Q() {
  return function(e, t) {
    const n = Reflect.getMetadata("stateKeys", e) || /* @__PURE__ */ new Set();
    n.add(t), Reflect.defineMetadata("stateKeys", n, e);
  };
}
function Hr(e) {
  return Sr.call(this, e);
}
class Wr extends HTMLElement {
}
const ke = class ke extends Wr {
  static use(t) {
    return ke.plugins.push(t), this;
  }
  getPlugins() {
    return ke.plugins;
  }
};
S(ke, "plugins", []);
let nt = ke;
class I extends nt {
  constructor() {
    super(...arguments);
    S(this, "props", {});
    S(this, "context", {});
    S(this, "setState", () => {
    });
    S(this, "forceUpdate", () => {
    });
    S(this, "state", {});
    S(this, "refs", {});
  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  shouldComponentUpdate() {
    return !0;
  }
  componentDidUpdate() {
  }
  connectedCallback() {
  }
  disconnectedCallback() {
  }
  adoptedCallback() {
  }
  attributeChangedCallback(n, r, i) {
  }
  $nextTick(n) {
    return Hr.call(this, n);
  }
  render() {
  }
}
S(I, "h", Qe), S(I, "Fragment", Lt);
var Fr = Object.defineProperty, Br = Object.getOwnPropertyDescriptor, Gr = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Br(t, n) : t, s = e.length - 1, d; s >= 0; s--)
    (d = e[s]) && (i = (r ? d(t, n, i) : d(i)) || i);
  return r && i && Fr(t, n, i), i;
};
let jt = class extends I {
  render() {
    return /* @__PURE__ */ I.h("ce-with-children", { id: "wc" });
  }
};
jt = Gr([
  be("component-with-children")
], jt);
var Kr = Object.defineProperty, qr = Object.getOwnPropertyDescriptor, Bt = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? qr(t, n) : t, s = e.length - 1, d; s >= 0; s--)
    (d = e[s]) && (i = (r ? d(t, n, i) : d(i)) || i);
  return r && i && Kr(t, n, i), i;
};
let it = class extends I {
  constructor() {
    super(...arguments);
    S(this, "count", 1);
  }
  componentDidMount() {
    Promise.resolve().then((t) => this.count++);
  }
  render() {
    return /* @__PURE__ */ I.h(I.Fragment, null, /* @__PURE__ */ I.h("ce-with-children", { id: "wc" }, this.count));
  }
};
Bt([
  Q()
], it.prototype, "count", 2);
it = Bt([
  be("component-with-children-rerender")
], it);
var zr = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, De = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Xr(t, n) : t, s = e.length - 1, d; s >= 0; s--)
    (d = e[s]) && (i = (r ? d(t, n, i) : d(i)) || i);
  return r && i && zr(t, n, i), i;
};
let ve = class extends I {
  constructor() {
    super(...arguments);
    S(this, "lowercaseHandled", !1);
    S(this, "kebabHandled", !1);
    S(this, "camelHandled", !1);
    S(this, "capsHandled", !1);
    S(this, "pascalHandled", !1);
  }
  render() {
    return /* @__PURE__ */ I.h(I.Fragment, null, /* @__PURE__ */ I.h("div", { id: "lowercase" }, this.lowercaseHandled.toString()), /* @__PURE__ */ I.h("div", { id: "kebab" }, this.kebabHandled.toString()), /* @__PURE__ */ I.h("div", { id: "camel" }, this.camelHandled.toString()), /* @__PURE__ */ I.h("div", { id: "caps" }, this.capsHandled.toString()), /* @__PURE__ */ I.h("div", { id: "pascal" }, this.pascalHandled.toString()), /* @__PURE__ */ I.h(
      "ce-with-event",
      {
        id: "wc",
        "on-lowercaseevent": () => this.lowercaseHandled = !0,
        "on-kebab-event": () => this.kebabHandled = !0,
        "on-camelEvent": () => this.camelHandled = !0,
        "on-CAPSevent": () => this.capsHandled = !0,
        "on-PascalEvent": () => this.pascalHandled = !0
      }
    ));
  }
};
De([
  Q()
], ve.prototype, "lowercaseHandled", 2);
De([
  Q()
], ve.prototype, "kebabHandled", 2);
De([
  Q()
], ve.prototype, "camelHandled", 2);
De([
  Q()
], ve.prototype, "capsHandled", 2);
De([
  Q()
], ve.prototype, "pascalHandled", 2);
ve = De([
  be("component-with-declarative-event")
], ve);
var Zr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, Gt = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Yr(t, n) : t, s = e.length - 1, d; s >= 0; s--)
    (d = e[s]) && (i = (r ? d(t, n, i) : d(i)) || i);
  return r && i && Zr(t, n, i), i;
};
let at = class extends I {
  constructor() {
    super(...arguments);
    S(this, "showWC", !0);
  }
  async toggle() {
    this.showWC = !this.showWC;
  }
  render() {
    return /* @__PURE__ */ I.h(I.Fragment, null, this.showWC ? /* @__PURE__ */ I.h("ce-with-children", { id: "wc" }) : /* @__PURE__ */ I.h("div", { id: "dummy" }, "Dummy view"));
  }
};
Gt([
  Q()
], at.prototype, "showWC", 2);
at = Gt([
  be("component-with-different-views")
], at);
var Jr = Object.defineProperty, Qr = Object.getOwnPropertyDescriptor, Kt = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Qr(t, n) : t, s = e.length - 1, d; s >= 0; s--)
    (d = e[s]) && (i = (r ? d(t, n, i) : d(i)) || i);
  return r && i && Jr(t, n, i), i;
};
let ot = class extends I {
  constructor() {
    super(...arguments);
    S(this, "eventHandled", !1);
  }
  render() {
    return /* @__PURE__ */ I.h(I.Fragment, null, /* @__PURE__ */ I.h("div", { id: "handled" }, this.eventHandled.toString()), /* @__PURE__ */ I.h(
      "ce-with-event",
      {
        id: "wc",
        "on-camelEvent": () => this.eventHandled = !0
      }
    ));
  }
};
Kt([
  Q()
], ot.prototype, "eventHandled", 2);
ot = Kt([
  be("component-with-imperative-event")
], ot);
var Vr = Object.defineProperty, en = Object.getOwnPropertyDescriptor, me = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? en(t, n) : t, s = e.length - 1, d; s >= 0; s--)
    (d = e[s]) && (i = (r ? d(t, n, i) : d(i)) || i);
  return r && i && Vr(t, n, i), i;
};
let de = class extends I {
  constructor() {
    super(...arguments);
    S(this, "bool", !0);
    S(this, "num", 42);
    S(this, "str", "Decoco");
    S(this, "arr", "decoco".split(""));
    S(this, "obj", { org: "Deco", repo: "decoco" });
    S(this, "camelCaseObj", { label: "passed" });
  }
  render() {
    return /* @__PURE__ */ I.h(I.Fragment, null, /* @__PURE__ */ I.h(
      "ce-with-properties",
      {
        id: "wc",
        bool: this.bool,
        num: this.num,
        str: this.str,
        arr: this.arr,
        obj: this.obj,
        camelCaseObj: this.camelCaseObj
      }
    ));
  }
};
me([
  Q()
], de.prototype, "bool", 2);
me([
  Q()
], de.prototype, "num", 2);
me([
  Q()
], de.prototype, "str", 2);
me([
  Q()
], de.prototype, "arr", 2);
me([
  Q()
], de.prototype, "obj", 2);
me([
  Q()
], de.prototype, "camelCaseObj", 2);
de = me([
  be("component-with-properties")
], de);
var tn = Object.defineProperty, rn = Object.getOwnPropertyDescriptor, nn = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? rn(t, n) : t, s = e.length - 1, d; s >= 0; s--)
    (d = e[s]) && (i = (r ? d(t, n, i) : d(i)) || i);
  return r && i && tn(t, n, i), i;
};
let xt = class extends I {
  render() {
    return /* @__PURE__ */ I.h(I.Fragment, null, /* @__PURE__ */ I.h("ce-without-children", { id: "wc" }));
  }
};
xt = nn([
  be("component-without-children")
], xt);
