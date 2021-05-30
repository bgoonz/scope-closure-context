/*! For license information please see 8342.6aa0b45e.chunk.js.LICENSE.txt */
(self.webpackChunklite = self.webpackChunklite || []).push([
  [8342],
  {
    6907: (e) => {
      "use strict";
      e.exports = function (e) {
        return (
          (e = String(e || "")),
          n.test(e) ? "rtl" : o.test(e) ? "ltr" : "neutral"
        );
      };
      var t = "֑-߿יִ-﷽ﹰ-ﻼ",
        r = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
        n = new RegExp("^[^" + r + "]*[" + t + "]"),
        o = new RegExp("^[^" + t + "]*[" + r + "]");
    },
    78181: function (e, t, r) {
      var n;
      (e = r.nmd(e)),
        (function (o) {
          var a = (e && e.exports, "object" == typeof r.g && r.g);
          a.global !== a && a.window;
          var i =
              /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g,
            s = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,
            u = function (e) {
              for (
                var t = "",
                  r = (e = e
                    .replace(i, function (e, t, r) {
                      return u(r) + t;
                    })
                    .replace(s, "$2$1")).length;
                r--;

              )
                t += e.charAt(r);
              return t;
            },
            l = { version: "0.2.0", reverse: u };
          void 0 ===
            (n = function () {
              return l;
            }.call(t, r, t, e)) || (e.exports = n);
        })();
    },
    87219: (e, t, r) => {
      "use strict";
      var n;
      r.r(t),
        r.d(t, {
          default: () => we,
          Immer: () => ue,
          applyPatches: () => he,
          castDraft: () => ye,
          castImmutable: () => me,
          createDraft: () => pe,
          finishDraft: () => ge,
          immerable: () => c,
          isDraft: () => p,
          isDraftable: () => g,
          nothing: () => l,
          original: () => y,
          produce: () => ce,
          produceWithPatches: () => fe,
          setAutoFreeze: () => de,
          setUseProxies: () => ve,
        });
      var o,
        a,
        i = "undefined" != typeof Symbol,
        s = "undefined" != typeof Map,
        u = "undefined" != typeof Set,
        l = i ? Symbol("immer-nothing") : (((n = {})["immer-nothing"] = !0), n),
        c = i ? Symbol("immer-draftable") : "__$immer_draftable",
        f = i ? Symbol("immer-state") : "__$immer_state",
        d = i ? Symbol.iterator : "@@iterator",
        v = function (e, t) {
          return (v =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        };
      function h(e, t) {
        function r() {
          this.constructor = e;
        }
        v(e, t), (e.prototype = ((r.prototype = t.prototype), new r()));
      }
      function p(e) {
        return !!e && !!e[f];
      }
      function g(e) {
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            return !t || t === Object.prototype;
          })(e) ||
            Array.isArray(e) ||
            !!e[c] ||
            !!e.constructor[c] ||
            P(e) ||
            k(e))
        );
      }
      function y(e) {
        if (e && e[f]) return e[f].base;
      }
      !(function (e) {
        (e[(e.Object = 0)] = "Object"),
          (e[(e.Array = 1)] = "Array"),
          (e[(e.Map = 2)] = "Map"),
          (e[(e.Set = 3)] = "Set");
      })(o || (o = {})),
        (function (e) {
          (e[(e.ProxyObject = 0)] = "ProxyObject"),
            (e[(e.ProxyArray = 1)] = "ProxyArray"),
            (e[(e.ES5Object = 2)] = "ES5Object"),
            (e[(e.ES5Array = 3)] = "ES5Array"),
            (e[(e.Map = 4)] = "Map"),
            (e[(e.Set = 5)] = "Set");
        })(a || (a = {}));
      var m =
        "undefined" != typeof Reflect && Reflect.ownKeys
          ? Reflect.ownKeys
          : void 0 !== Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : Object.getOwnPropertyNames;
      function w(e, t) {
        b(e) === o.Object
          ? m(e).forEach(function (r) {
              return t(r, e[r], e);
            })
          : e.forEach(function (r, n) {
              return t(n, r, e);
            });
      }
      function b(e) {
        if ((e || C(), e[f]))
          switch (e[f].type) {
            case a.ES5Object:
            case a.ProxyObject:
              return o.Object;
            case a.ES5Array:
            case a.ProxyArray:
              return o.Array;
            case a.Map:
              return o.Map;
            case a.Set:
              return o.Set;
          }
        return Array.isArray(e)
          ? o.Array
          : P(e)
          ? o.Map
          : k(e)
          ? o.Set
          : o.Object;
      }
      function E(e, t) {
        return b(e) === o.Map
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function x(e, t) {
        return b(e) === o.Map ? e.get(t) : e[t];
      }
      function O(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function P(e) {
        return s && e instanceof Map;
      }
      function k(e) {
        return u && e instanceof Set;
      }
      function F(e) {
        return e.copy || e.base;
      }
      function S(e, t) {
        if ((void 0 === t && (t = !1), Array.isArray(e))) return e.slice();
        var r = Object.create(Object.getPrototypeOf(e));
        return (
          m(e).forEach(function (n) {
            if (n !== f) {
              var o = Object.getOwnPropertyDescriptor(e, n),
                a = o.value;
              if (o.get) {
                if (!t)
                  throw new Error(
                    "Immer drafts cannot have computed properties"
                  );
                a = o.get.call(e);
              }
              o.enumerable
                ? (r[n] = a)
                : Object.defineProperty(r, n, {
                    value: a,
                    writable: !0,
                    configurable: !0,
                  });
            }
          }),
          r
        );
      }
      function D(e, t) {
        if (g(e) && !p(e) && !Object.isFrozen(e)) {
          var r = b(e);
          r === o.Set
            ? (e.add = e.clear = e.delete = A)
            : r === o.Map && (e.set = e.clear = e.delete = A),
            Object.freeze(e),
            t &&
              w(e, function (e, t) {
                return D(t, !0);
              });
        }
      }
      function A() {
        throw new Error(
          "This object has been frozen and should not be mutated"
        );
      }
      function C() {
        throw new Error("Illegal state, please file a bug");
      }
      var j = (function () {
        function e(e, t) {
          (this.drafts = []),
            (this.parent = e),
            (this.immer = t),
            (this.canAutoFreeze = !0);
        }
        return (
          (e.prototype.usePatches = function (e) {
            e &&
              ((this.patches = []),
              (this.inversePatches = []),
              (this.patchListener = e));
          }),
          (e.prototype.revoke = function () {
            this.leave(), this.drafts.forEach(B), (this.drafts = null);
          }),
          (e.prototype.leave = function () {
            this === e.current && (e.current = this.parent);
          }),
          (e.enter = function (t) {
            var r = new e(e.current, t);
            return (e.current = r), r;
          }),
          e
        );
      })();
      function B(e) {
        var t = e[f];
        t.type === a.ProxyObject || t.type === a.ProxyArray
          ? t.revoke()
          : (t.revoked = !0);
      }
      function N(e, t, r) {
        var n = r.drafts[0],
          o = void 0 !== t && t !== n;
        if ((e.willFinalize(r, t, o), o)) {
          if (n[f].modified)
            throw (
              (r.revoke(),
              new Error(
                "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft."
              ))
            );
          g(t) && ((t = R(e, t, r)), r.parent || _(e, t)),
            r.patches &&
              (r.patches.push({ op: "replace", path: [], value: t }),
              r.inversePatches.push({
                op: "replace",
                path: [],
                value: n[f].base,
              }));
        } else t = R(e, n, r, []);
        return (
          r.revoke(),
          r.patches && r.patchListener(r.patches, r.inversePatches),
          t !== l ? t : void 0
        );
      }
      function R(e, t, r, n) {
        var o = t[f];
        if (!o) return Object.isFrozen(t) ? t : M(e, t, r);
        if (o.scope !== r) return t;
        if (!o.modified) return _(e, o.base, !0), o.base;
        if (!o.finalized) {
          if (
            ((o.finalized = !0),
            M(e, o.draft, r, n),
            e.onDelete && o.type !== a.Set)
          )
            if (e.useProxies)
              w(o.assigned, function (t, r) {
                r || e.onDelete(o, t);
              });
            else {
              var i = o.base,
                s = o.copy;
              w(i, function (t) {
                E(s, t) || e.onDelete(o, t);
              });
            }
          e.onCopy && e.onCopy(o),
            e.autoFreeze && r.canAutoFreeze && D(o.copy, !1),
            n &&
              r.patches &&
              (function (e, t, r, n) {
                switch (e.type) {
                  case a.ProxyObject:
                  case a.ES5Object:
                  case a.Map:
                    return (function (e, t, r, n) {
                      var o = e.base,
                        a = e.copy;
                      w(e.assigned, function (e, i) {
                        var s = x(o, e),
                          u = x(a, e),
                          l = i ? (E(o, e) ? "replace" : "add") : "remove";
                        if (s !== u || "replace" !== l) {
                          var c = t.concat(e);
                          r.push(
                            "remove" === l
                              ? { op: l, path: c }
                              : { op: l, path: c, value: u }
                          ),
                            n.push(
                              "add" === l
                                ? { op: "remove", path: c }
                                : "remove" === l
                                ? { op: "add", path: c, value: s }
                                : { op: "replace", path: c, value: s }
                            );
                        }
                      });
                    })(e, t, r, n);
                  case a.ES5Array:
                  case a.ProxyArray:
                    return (function (e, t, r, n) {
                      var o,
                        a,
                        i = e.base,
                        s = e.assigned,
                        u = e.copy;
                      u || C(),
                        u.length < i.length &&
                          ((i = (o = [u, i])[0]),
                          (u = o[1]),
                          (r = (a = [n, r])[0]),
                          (n = a[1]));
                      for (
                        var l = u.length - i.length, c = 0;
                        i[c] === u[c] && c < i.length;

                      )
                        ++c;
                      for (
                        var f = i.length;
                        f > c && i[f - 1] === u[f + l - 1];

                      )
                        --f;
                      for (var d = c; d < f; ++d)
                        if (s[d] && u[d] !== i[d]) {
                          var v = t.concat([d]);
                          r.push({ op: "replace", path: v, value: u[d] }),
                            n.push({ op: "replace", path: v, value: i[d] });
                        }
                      var h = r.length;
                      for (d = f + l - 1; d >= f; --d)
                        (v = t.concat([d])),
                          (r[h + d - f] = { op: "add", path: v, value: u[d] }),
                          n.push({ op: "remove", path: v });
                    })(e, t, r, n);
                  case a.Set:
                    !(function (e, t, r, n) {
                      var o = e.base,
                        a = e.copy,
                        i = 0;
                      o.forEach(function (e) {
                        if (!a.has(e)) {
                          var o = t.concat([i]);
                          r.push({ op: "remove", path: o, value: e }),
                            n.unshift({ op: "add", path: o, value: e });
                        }
                        i++;
                      }),
                        (i = 0),
                        a.forEach(function (e) {
                          if (!o.has(e)) {
                            var a = t.concat([i]);
                            r.push({ op: "add", path: a, value: e }),
                              n.unshift({ op: "remove", path: a, value: e });
                          }
                          i++;
                        });
                    })(e, t, r, n);
                }
              })(o, n, r.patches, r.inversePatches);
        }
        return o.copy;
      }
      function M(e, t, r, n) {
        var o = t[f];
        return (
          o &&
            ((o.type !== a.ES5Object && o.type !== a.ES5Array) ||
              (o.copy = S(o.draft, !0)),
            (t = o.copy)),
          w(t, function (a, i) {
            return T(e, r, t, o, t, a, i, n);
          }),
          t
        );
      }
      function T(e, t, r, n, a, i, s, u) {
        if (s === a) throw Error("Immer forbids circular references");
        var l = !!n && a === r,
          c = k(a);
        if (p(s)) {
          var f = u && l && !c && !E(n.assigned, i) ? u.concat(i) : void 0;
          (function (e, t, r) {
            switch (b(e)) {
              case o.Map:
                e.set(t, r);
                break;
              case o.Set:
                e.delete(t), e.add(r);
                break;
              default:
                e[t] = r;
            }
          })(a, i, (s = R(e, s, t, f))),
            p(s) && (t.canAutoFreeze = !1);
        } else {
          if (l && O(s, x(n.base, i))) return;
          g(s) &&
            (w(s, function (o, a) {
              return T(e, t, r, n, s, o, a, u);
            }),
            t.parent || _(e, s));
        }
        l && e.onAssign && !c && e.onAssign(n, i, s);
      }
      function _(e, t, r) {
        void 0 === r && (r = !1), e.autoFreeze && !p(t) && D(t, r);
      }
      var L = {
          get: function (e, t) {
            if (t === f) return e;
            var r = e.drafts;
            if (!e.modified && E(r, t)) return r[t];
            var n = F(e)[t];
            if (e.finalized || !g(n)) return n;
            if (e.modified) {
              if (n !== W(e.base, t)) return n;
              r = e.copy;
            }
            return (r[t] = e.scope.immer.createProxy(n, e));
          },
          has: function (e, t) {
            return t in F(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(F(e));
          },
          set: function (e, t, r) {
            if (!e.modified) {
              var n = W(e.base, t);
              if (r ? O(n, r) || r === e.drafts[t] : O(n, r) && t in e.base)
                return !0;
              q(e), I(e);
            }
            return (e.assigned[t] = !0), (e.copy[t] = r), !0;
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== W(e.base, t) || t in e.base
                ? ((e.assigned[t] = !1), q(e), I(e))
                : e.assigned[t] && delete e.assigned[t],
              e.copy && delete e.copy[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var r = F(e),
              n = Reflect.getOwnPropertyDescriptor(r, t);
            return (
              n &&
                ((n.writable = !0),
                (n.configurable = e.type !== a.ProxyArray || "length" !== t)),
              n
            );
          },
          defineProperty: function () {
            throw new Error(
              "Object.defineProperty() cannot be used on an Immer draft"
            );
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.base);
          },
          setPrototypeOf: function () {
            throw new Error(
              "Object.setPrototypeOf() cannot be used on an Immer draft"
            );
          },
        },
        z = {};
      function W(e, t) {
        var r = e[f],
          n = Reflect.getOwnPropertyDescriptor(r ? F(r) : e, t);
        return n && n.value;
      }
      function I(e) {
        if (!e.modified) {
          if (
            ((e.modified = !0),
            e.type === a.ProxyObject || e.type === a.ProxyArray)
          ) {
            var t = (e.copy = S(e.base));
            w(e.drafts, function (e, r) {
              t[e] = r;
            }),
              (e.drafts = void 0);
          }
          e.parent && I(e.parent);
        }
      }
      function q(e) {
        e.copy || (e.copy = S(e.base));
      }
      function V(e, t, r) {
        e.drafts.forEach(function (e) {
          e[f].finalizing = !0;
        }),
          r
            ? p(t) && t[f].scope === e && Z(e.drafts)
            : (e.patches && $(e.drafts[0]), Z(e.drafts));
      }
      function K(e, t) {
        var r = e[f];
        if (r && !r.finalizing) {
          r.finalizing = !0;
          var n = e[t];
          return (r.finalizing = !1), n;
        }
        return e[t];
      }
      function H(e) {
        e.modified || ((e.modified = !0), e.parent && H(e.parent));
      }
      function U(e) {
        e.copy || (e.copy = J(e.base));
      }
      function J(e) {
        var t = e && e[f];
        if (t) {
          t.finalizing = !0;
          var r = S(t.draft, !0);
          return (t.finalizing = !1), r;
        }
        return S(e);
      }
      w(L, function (e, t) {
        z[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (z.deleteProperty = function (e, t) {
          if (isNaN(parseInt(t)))
            throw new Error("Immer only supports deleting array indices");
          return L.deleteProperty.call(this, e[0], t);
        }),
        (z.set = function (e, t, r) {
          if ("length" !== t && isNaN(parseInt(t)))
            throw new Error(
              "Immer only supports setting array indices and the 'length' property"
            );
          return L.set.call(this, e[0], t, r, e[0]);
        });
      var X = {};
      function Y(e) {
        if (!0 === e.revoked)
          throw new Error(
            "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " +
              JSON.stringify(F(e))
          );
      }
      function Z(e) {
        for (var t = e.length - 1; t >= 0; t--) {
          var r = e[t][f];
          if (!r.modified)
            switch (r.type) {
              case a.ES5Array:
                Q(r) && H(r);
                break;
              case a.ES5Object:
                G(r) && H(r);
            }
        }
      }
      function $(e) {
        if (e && "object" == typeof e) {
          var t = e[f];
          if (t) {
            var r = t.base,
              n = t.draft,
              o = t.assigned,
              i = t.type;
            if (i === a.ES5Object)
              w(n, function (e) {
                e !== f &&
                  (void 0 !== r[e] || E(r, e)
                    ? o[e] || $(n[e])
                    : ((o[e] = !0), H(t)));
              }),
                w(r, function (e) {
                  void 0 !== n[e] || E(n, e) || ((o[e] = !1), H(t));
                });
            else if (i === a.ES5Array) {
              if ((Q(t) && (H(t), (o.length = !0)), n.length < r.length))
                for (var s = n.length; s < r.length; s++) o[s] = !1;
              else for (s = r.length; s < n.length; s++) o[s] = !0;
              var u = Math.min(n.length, r.length);
              for (s = 0; s < u; s++) void 0 === o[s] && $(n[s]);
            }
          }
        }
      }
      function G(e) {
        for (
          var t = e.base, r = e.draft, n = Object.keys(r), o = n.length - 1;
          o >= 0;
          o--
        ) {
          var a = n[o],
            i = t[a];
          if (void 0 === i && !E(t, a)) return !0;
          var s = r[a],
            u = s && s[f];
          if (u ? u.base !== i : !O(s, i)) return !0;
        }
        return n.length !== Object.keys(t).length;
      }
      function Q(e) {
        var t = e.draft;
        if (t.length !== e.base.length) return !0;
        var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
        return !(!r || r.get);
      }
      var ee = (function (e) {
        if (!e) throw new Error("Map is not polyfilled");
        function t(e, t) {
          return (
            (this[f] = {
              type: a.Map,
              parent: t,
              scope: t ? t.scope : j.current,
              modified: !1,
              finalized: !1,
              copy: void 0,
              assigned: void 0,
              base: e,
              draft: this,
              isManual: !1,
              revoked: !1,
            }),
            this
          );
        }
        h(t, e);
        var r = t.prototype;
        return (
          Object.defineProperty(r, "size", {
            get: function () {
              return F(this[f]).size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (r.has = function (e) {
            return F(this[f]).has(e);
          }),
          (r.set = function (e, t) {
            var r = this[f];
            return (
              Y(r),
              F(r).get(e) !== t &&
                (te(r),
                r.scope.immer.markChanged(r),
                r.assigned.set(e, !0),
                r.copy.set(e, t),
                r.assigned.set(e, !0)),
              this
            );
          }),
          (r.delete = function (e) {
            if (!this.has(e)) return !1;
            var t = this[f];
            return (
              Y(t),
              te(t),
              t.scope.immer.markChanged(t),
              t.assigned.set(e, !1),
              t.copy.delete(e),
              !0
            );
          }),
          (r.clear = function () {
            var e = this[f];
            return (
              Y(e),
              te(e),
              e.scope.immer.markChanged(e),
              (e.assigned = new Map()),
              e.copy.clear()
            );
          }),
          (r.forEach = function (e, t) {
            var r = this;
            F(this[f]).forEach(function (n, o, a) {
              e.call(t, r.get(o), o, r);
            });
          }),
          (r.get = function (e) {
            var t = this[f];
            Y(t);
            var r = F(t).get(e);
            if (t.finalized || !g(r)) return r;
            if (r !== t.base.get(e)) return r;
            var n = t.scope.immer.createProxy(r, t);
            return te(t), t.copy.set(e, n), n;
          }),
          (r.keys = function () {
            return F(this[f]).keys();
          }),
          (r.values = function () {
            var e,
              t = this,
              r = this.keys();
            return (
              ((e = {})[d] = function () {
                return t.values();
              }),
              (e.next = function () {
                var e = r.next();
                return e.done ? e : { done: !1, value: t.get(e.value) };
              }),
              e
            );
          }),
          (r.entries = function () {
            var e,
              t = this,
              r = this.keys();
            return (
              ((e = {})[d] = function () {
                return t.entries();
              }),
              (e.next = function () {
                var e = r.next();
                if (e.done) return e;
                var n = t.get(e.value);
                return { done: !1, value: [e.value, n] };
              }),
              e
            );
          }),
          (r[d] = function () {
            return this.entries();
          }),
          t
        );
      })(Map);
      function te(e) {
        e.copy || ((e.assigned = new Map()), (e.copy = new Map(e.base)));
      }
      var re = (function (e) {
        if (!e) throw new Error("Set is not polyfilled");
        function t(e, t) {
          return (
            (this[f] = {
              type: a.Set,
              parent: t,
              scope: t ? t.scope : j.current,
              modified: !1,
              finalized: !1,
              copy: void 0,
              base: e,
              draft: this,
              drafts: new Map(),
              revoked: !1,
              isManual: !1,
            }),
            this
          );
        }
        h(t, e);
        var r = t.prototype;
        return (
          Object.defineProperty(r, "size", {
            get: function () {
              return F(this[f]).size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (r.has = function (e) {
            var t = this[f];
            return (
              Y(t),
              t.copy
                ? !!t.copy.has(e) ||
                  !(!t.drafts.has(e) || !t.copy.has(t.drafts.get(e)))
                : t.base.has(e)
            );
          }),
          (r.add = function (e) {
            var t = this[f];
            return (
              Y(t),
              t.copy
                ? t.copy.add(e)
                : t.base.has(e) ||
                  (ne(t), t.scope.immer.markChanged(t), t.copy.add(e)),
              this
            );
          }),
          (r.delete = function (e) {
            if (!this.has(e)) return !1;
            var t = this[f];
            return (
              Y(t),
              ne(t),
              t.scope.immer.markChanged(t),
              t.copy.delete(e) ||
                (!!t.drafts.has(e) && t.copy.delete(t.drafts.get(e)))
            );
          }),
          (r.clear = function () {
            var e = this[f];
            return Y(e), ne(e), e.scope.immer.markChanged(e), e.copy.clear();
          }),
          (r.values = function () {
            var e = this[f];
            return Y(e), ne(e), e.copy.values();
          }),
          (r.entries = function () {
            var e = this[f];
            return Y(e), ne(e), e.copy.entries();
          }),
          (r.keys = function () {
            return this.values();
          }),
          (r[d] = function () {
            return this.values();
          }),
          (r.forEach = function (e, t) {
            for (var r = this.values(), n = r.next(); !n.done; )
              e.call(t, n.value, n.value, this), (n = r.next());
          }),
          t
        );
      })(Set);
      function ne(e) {
        e.copy ||
          ((e.copy = new Set()),
          e.base.forEach(function (t) {
            if (g(t)) {
              var r = e.scope.immer.createProxy(t, e);
              e.drafts.set(t, r), e.copy.add(r);
            } else e.copy.add(t);
          }));
      }
      function oe(e, t) {
        return (
          t.forEach(function (t) {
            var r = t.path,
              n = t.op;
            r.length || C();
            for (var a = e, i = 0; i < r.length - 1; i++)
              if (!(a = x(a, r[i])) || "object" != typeof a)
                throw new Error(
                  "Cannot apply patch, path doesn't resolve: " + r.join("/")
                );
            var s = b(a),
              u = ae(t.value),
              l = r[r.length - 1];
            switch (n) {
              case "replace":
                switch (s) {
                  case o.Map:
                    return a.set(l, u);
                  case o.Set:
                    throw new Error('Sets cannot have "replace" patches.');
                  default:
                    return (a[l] = u);
                }
              case "add":
                switch (s) {
                  case o.Array:
                    return a.splice(l, 0, u);
                  case o.Map:
                    return a.set(l, u);
                  case o.Set:
                    return a.add(u);
                  default:
                    return (a[l] = u);
                }
              case "remove":
                switch (s) {
                  case o.Array:
                    return a.splice(l, 1);
                  case o.Map:
                    return a.delete(l);
                  case o.Set:
                    return a.delete(t.value);
                  default:
                    return delete a[l];
                }
              default:
                throw new Error("Unsupported patch operation: " + n);
            }
          }),
          e
        );
      }
      function ae(e) {
        if (!e || "object" != typeof e) return e;
        if (Array.isArray(e)) return e.map(ae);
        if (P(e))
          return new Map(
            Array.from(e.entries()).map(function (e) {
              return [e[0], ae(e[1])];
            })
          );
        if (k(e)) return new Set(Array.from(e).map(ae));
        var t = Object.create(Object.getPrototypeOf(e));
        for (var r in e) t[r] = ae(e[r]);
        return t;
      }
      function ie() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, s = a.length; i < s; i++, o++)
            n[o] = a[i];
        return n;
      }
      var se = {
          useProxies:
            "undefined" != typeof Proxy &&
            void 0 !== Proxy.revocable &&
            "undefined" != typeof Reflect,
          autoFreeze:
            "undefined" == typeof process &&
            "verifyMinified" === function () {}.name,
          onAssign: null,
          onDelete: null,
          onCopy: null,
        },
        ue = (function () {
          function e(e) {
            var t = this;
            (this.useProxies = !1),
              (this.autoFreeze = !1),
              w(se, function (r, n) {
                var o, a;
                t[r] =
                  null != (a = null === (o = e) || void 0 === o ? void 0 : o[r])
                    ? a
                    : n;
              }),
              this.setUseProxies(this.useProxies),
              (this.produce = this.produce.bind(this)),
              (this.produceWithPatches = this.produceWithPatches.bind(this));
          }
          return (
            (e.prototype.produce = function (e, t, r) {
              var n,
                o = this;
              if ("function" == typeof e && "function" != typeof t) {
                var a = t;
                t = e;
                var i = this;
                return function (e) {
                  var r = arguments,
                    n = this;
                  void 0 === e && (e = a);
                  for (var o = [], s = 1; s < arguments.length; s++)
                    o[s - 1] = r[s];
                  return i.produce(e, function (e) {
                    return t.call.apply(t, ie([n, e], o));
                  });
                };
              }
              if ("function" != typeof t)
                throw new Error(
                  "The first or second argument to `produce` must be a function"
                );
              if (void 0 !== r && "function" != typeof r)
                throw new Error(
                  "The third argument to `produce` must be a function or undefined"
                );
              if (g(e)) {
                var s = j.enter(this),
                  u = this.createProxy(e, void 0),
                  c = !0;
                try {
                  (n = t(u)), (c = !1);
                } finally {
                  c ? s.revoke() : s.leave();
                }
                return "undefined" != typeof Promise && n instanceof Promise
                  ? n.then(
                      function (e) {
                        return s.usePatches(r), N(o, e, s);
                      },
                      function (e) {
                        throw (s.revoke(), e);
                      }
                    )
                  : (s.usePatches(r), N(this, n, s));
              }
              if ((n = t(e)) !== l)
                return void 0 === n && (n = e), _(this, n, !0), n;
            }),
            (e.prototype.produceWithPatches = function (e, t, r) {
              var n,
                o,
                a = this;
              return "function" == typeof e
                ? function (t) {
                    for (
                      var r = arguments, n = [], o = 1;
                      o < arguments.length;
                      o++
                    )
                      n[o - 1] = r[o];
                    return a.produceWithPatches(t, function (t) {
                      return e.apply(void 0, ie([t], n));
                    });
                  }
                : (r && C(),
                  [
                    this.produce(e, t, function (e, t) {
                      (n = e), (o = t);
                    }),
                    n,
                    o,
                  ]);
            }),
            (e.prototype.createDraft = function (e) {
              if (!g(e))
                throw new Error(
                  "First argument to `createDraft` must be a plain object, an array, or an immerable object"
                );
              var t = j.enter(this),
                r = this.createProxy(e, void 0);
              return (r[f].isManual = !0), t.leave(), r;
            }),
            (e.prototype.finishDraft = function (e, t) {
              var r = e && e[f];
              if (!r || !r.isManual)
                throw new Error(
                  "First argument to `finishDraft` must be a draft returned by `createDraft`"
                );
              if (r.finalized)
                throw new Error("The given draft is already finalized");
              var n = r.scope;
              return n.usePatches(t), N(this, void 0, n);
            }),
            (e.prototype.setAutoFreeze = function (e) {
              this.autoFreeze = e;
            }),
            (e.prototype.setUseProxies = function (e) {
              this.useProxies = e;
            }),
            (e.prototype.applyPatches = function (e, t) {
              var r;
              for (r = t.length - 1; r >= 0; r--) {
                var n = t[r];
                if (0 === n.path.length && "replace" === n.op) {
                  e = n.value;
                  break;
                }
              }
              return p(e)
                ? oe(e, t)
                : this.produce(e, function (e) {
                    return oe(e, t.slice(r + 1));
                  });
            }),
            (e.prototype.createProxy = function (e, t) {
              var r = P(e)
                ? (function (e, t) {
                    return new ee(e, t);
                  })(e, t)
                : k(e)
                ? (function (e, t) {
                    return new re(e, t);
                  })(e, t)
                : this.useProxies
                ? (function (e, t) {
                    var r = Array.isArray(e),
                      n = {
                        type: r ? a.ProxyArray : a.ProxyObject,
                        scope: t ? t.scope : j.current,
                        modified: !1,
                        finalized: !1,
                        assigned: {},
                        parent: t,
                        base: e,
                        draft: null,
                        drafts: {},
                        copy: null,
                        revoke: null,
                        isManual: !1,
                      },
                      o = n,
                      i = L;
                    r && ((o = [n]), (i = z));
                    var s = Proxy.revocable(o, i),
                      u = s.revoke,
                      l = s.proxy;
                    return (n.draft = l), (n.revoke = u), l;
                  })(e, t)
                : (function (e, t) {
                    var r = Array.isArray(e),
                      n = J(e);
                    w(n, function (t) {
                      !(function (e, t, r) {
                        var n = X[t];
                        n
                          ? (n.enumerable = r)
                          : (X[t] = n =
                              {
                                configurable: !0,
                                enumerable: r,
                                get: function () {
                                  return (function (e, t) {
                                    Y(e);
                                    var r = K(F(e), t);
                                    return e.finalizing
                                      ? r
                                      : r === K(e.base, t) && g(r)
                                      ? (U(e),
                                        (e.copy[t] = e.scope.immer.createProxy(
                                          r,
                                          e
                                        )))
                                      : r;
                                  })(this[f], t);
                                },
                                set: function (e) {
                                  !(function (e, t, r) {
                                    if (
                                      (Y(e), (e.assigned[t] = !0), !e.modified)
                                    ) {
                                      if (O(r, K(F(e), t))) return;
                                      H(e), U(e);
                                    }
                                    e.copy[t] = r;
                                  })(this[f], t, e);
                                },
                              }),
                          Object.defineProperty(e, t, n);
                      })(
                        n,
                        t,
                        r ||
                          (function (e, t) {
                            var r = Object.getOwnPropertyDescriptor(e, t);
                            return !(!r || !r.enumerable);
                          })(e, t)
                      );
                    });
                    var o,
                      i,
                      s,
                      u = {
                        type: r ? a.ES5Array : a.ES5Object,
                        scope: t ? t.scope : j.current,
                        modified: !1,
                        finalizing: !1,
                        finalized: !1,
                        assigned: {},
                        parent: t,
                        base: e,
                        draft: n,
                        copy: null,
                        revoked: !1,
                        isManual: !1,
                      };
                    return (
                      (o = n),
                      (i = f),
                      (s = u),
                      Object.defineProperty(o, i, {
                        value: s,
                        enumerable: !1,
                        writable: !0,
                      }),
                      n
                    );
                  })(e, t);
              return (t ? t.scope : j.current).drafts.push(r), r;
            }),
            (e.prototype.willFinalize = function (e, t, r) {
              this.useProxies || V(e, t, r);
            }),
            (e.prototype.markChanged = function (e) {
              this.useProxies ? I(e) : H(e);
            }),
            e
          );
        })(),
        le = new ue(),
        ce = le.produce,
        fe = le.produceWithPatches.bind(le),
        de = le.setAutoFreeze.bind(le),
        ve = le.setUseProxies.bind(le),
        he = le.applyPatches.bind(le),
        pe = le.createDraft.bind(le),
        ge = le.finishDraft.bind(le);
      function ye(e) {
        return e;
      }
      function me(e) {
        return e;
      }
      const we = ce;
    },
    18156: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      for (
        var r =
            "undefined" != typeof window &&
            /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
          n = {
            alt: "altKey",
            control: "ctrlKey",
            meta: "metaKey",
            shift: "shiftKey",
          },
          o = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: r ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta",
          },
          a = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            " ": 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222,
          },
          i = 1;
        i < 20;
        i++
      )
        a["f" + i] = 111 + i;
      function s(e, t, r) {
        t && !("byKey" in t) && ((r = t), (t = null)),
          Array.isArray(e) || (e = [e]);
        var n = e.map(function (e) {
            return u(e, t);
          }),
          o = function (e) {
            return n.some(function (t) {
              return l(t, e);
            });
          };
        return null == r ? o : o(r);
      }
      function u(e, t) {
        var r = t && t.byKey,
          o = {},
          a = (e = e.replace("++", "+add")).split("+"),
          i = a.length;
        for (var s in n) o[n[s]] = !1;
        var u = !0,
          l = !1,
          d = void 0;
        try {
          for (
            var v, h = a[Symbol.iterator]();
            !(u = (v = h.next()).done);
            u = !0
          ) {
            var p = v.value,
              g = p.endsWith("?") && p.length > 1;
            g && (p = p.slice(0, -1));
            var y = f(p),
              m = n[y];
            (1 !== i && m) || (r ? (o.key = y) : (o.which = c(p))),
              m && (o[m] = !g || null);
          }
        } catch (e) {
          (l = !0), (d = e);
        } finally {
          try {
            !u && h.return && h.return();
          } finally {
            if (l) throw d;
          }
        }
        return o;
      }
      function l(e, t) {
        for (var r in e) {
          var n = e[r],
            o = void 0;
          if (
            null != n &&
            (null !=
              (o =
                "key" === r && null != t.key
                  ? t.key.toLowerCase()
                  : "which" === r
                  ? 91 === n && 93 === t.which
                    ? 91
                    : t.which
                  : t[r]) ||
              !1 !== n) &&
            o !== n
          )
            return !1;
        }
        return !0;
      }
      function c(e) {
        return (e = f(e)), a[e] || e.toUpperCase().charCodeAt(0);
      }
      function f(e) {
        return (e = e.toLowerCase()), o[e] || e;
      }
      (t.default = s),
        (t.isHotkey = s),
        (t.isCodeHotkey = function (e, t) {
          return s(e, t);
        }),
        (t.isKeyHotkey = function (e, t) {
          return s(e, { byKey: !0 }, t);
        }),
        (t.parseHotkey = u),
        (t.compareHotkey = l),
        (t.toKeyCode = c),
        (t.toKeyName = f);
    },
    3675: (e, t, r) => {
      "use strict";
      function n(e) {
        return null != e && "object" == typeof e && 1 === e.nodeType;
      }
      function o(e, t) {
        return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
      }
      function a(e, t) {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
          var r = getComputedStyle(e, null);
          return (
            o(r.overflowY, t) ||
            o(r.overflowX, t) ||
            (function (e) {
              var t = (function (e) {
                return e.ownerDocument && e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView.frameElement
                  : null;
              })(e);
              return (
                !!t &&
                (t.clientHeight < e.scrollHeight ||
                  t.clientWidth < e.scrollWidth)
              );
            })(e)
          );
        }
        return !1;
      }
      function i(e, t, r, n, o, a, i, s) {
        return (a < e && i > t) || (a > e && i < t)
          ? 0
          : (a <= e && s <= r) || (i >= t && s >= r)
          ? a - e - n
          : (i > t && s < r) || (a < e && s > r)
          ? i - t + o
          : 0;
      }
      r.r(t), r.d(t, { default: () => l });
      const s = function (e, t) {
        var r = t.scrollMode,
          o = t.block,
          s = t.inline,
          u = t.boundary,
          l = t.skipOverflowHiddenElements,
          c =
            "function" == typeof u
              ? u
              : function (e) {
                  return e !== u;
                };
        if (!n(e)) throw new TypeError("Invalid target");
        for (
          var f = document.scrollingElement || document.documentElement,
            d = [],
            v = e;
          n(v) && c(v);

        ) {
          if ((v = v.parentNode) === f) {
            d.push(v);
            break;
          }
          (v === document.body && a(v) && !a(document.documentElement)) ||
            (a(v, l) && d.push(v));
        }
        for (
          var h = window.visualViewport ? visualViewport.width : innerWidth,
            p = window.visualViewport ? visualViewport.height : innerHeight,
            g = window.scrollX || pageXOffset,
            y = window.scrollY || pageYOffset,
            m = e.getBoundingClientRect(),
            w = m.height,
            b = m.width,
            E = m.top,
            x = m.right,
            O = m.bottom,
            P = m.left,
            k =
              "start" === o || "nearest" === o
                ? E
                : "end" === o
                ? O
                : E + w / 2,
            F = "center" === s ? P + b / 2 : "end" === s ? x : P,
            S = [],
            D = 0;
          D < d.length;
          D++
        ) {
          var A = d[D],
            C = A.getBoundingClientRect(),
            j = C.height,
            B = C.width,
            N = C.top,
            R = C.right,
            M = C.bottom,
            T = C.left;
          if (
            "if-needed" === r &&
            E >= 0 &&
            P >= 0 &&
            O <= p &&
            x <= h &&
            E >= N &&
            O <= M &&
            P >= T &&
            x <= R
          )
            return S;
          var _ = getComputedStyle(A),
            L = parseInt(_.borderLeftWidth, 10),
            z = parseInt(_.borderTopWidth, 10),
            W = parseInt(_.borderRightWidth, 10),
            I = parseInt(_.borderBottomWidth, 10),
            q = 0,
            V = 0,
            K = "offsetWidth" in A ? A.offsetWidth - A.clientWidth - L - W : 0,
            H =
              "offsetHeight" in A ? A.offsetHeight - A.clientHeight - z - I : 0;
          if (f === A)
            (q =
              "start" === o
                ? k
                : "end" === o
                ? k - p
                : "nearest" === o
                ? i(y, y + p, p, z, I, y + k, y + k + w, w)
                : k - p / 2),
              (V =
                "start" === s
                  ? F
                  : "center" === s
                  ? F - h / 2
                  : "end" === s
                  ? F - h
                  : i(g, g + h, h, L, W, g + F, g + F + b, b)),
              (q = Math.max(0, q + y)),
              (V = Math.max(0, V + g));
          else {
            (q =
              "start" === o
                ? k - N - z
                : "end" === o
                ? k - M + I + H
                : "nearest" === o
                ? i(N, M, j, z, I + H, k, k + w, w)
                : k - (N + j / 2) + H / 2),
              (V =
                "start" === s
                  ? F - T - L
                  : "center" === s
                  ? F - (T + B / 2) + K / 2
                  : "end" === s
                  ? F - R + W + K
                  : i(T, R, B, L, W + K, F, F + b, b));
            var U = A.scrollLeft,
              J = A.scrollTop;
            (k +=
              J - (q = Math.max(0, Math.min(J + q, A.scrollHeight - j + H)))),
              (F +=
                U - (V = Math.max(0, Math.min(U + V, A.scrollWidth - B + K))));
          }
          S.push({ el: A, top: q, left: V });
        }
        return S;
      };
      function u(e) {
        return e === Object(e) && 0 !== Object.keys(e).length;
      }
      const l = function (e, t) {
        var r = !e.ownerDocument.documentElement.contains(e);
        if (u(t) && "function" == typeof t.behavior)
          return t.behavior(r ? [] : s(e, t));
        if (!r) {
          var n = (function (e) {
            return !1 === e
              ? { block: "end", inline: "nearest" }
              : u(e)
              ? e
              : { block: "start", inline: "nearest" };
          })(t);
          return (function (e, t) {
            void 0 === t && (t = "auto");
            var r = "scrollBehavior" in document.body.style;
            e.forEach(function (e) {
              var n = e.el,
                o = e.top,
                a = e.left;
              n.scroll && r
                ? n.scroll({ top: o, left: a, behavior: t })
                : ((n.scrollTop = o), (n.scrollLeft = a));
            });
          })(s(e, n), n.behavior);
        }
      };
    },
    86817: (e, t, r) => {
      "use strict";
      var n = r(3166),
        o = r(84792);
      function a(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      }
      var i = a(n),
        s = function (e) {
          return (
            i.default(e) &&
            Array.isArray(e.redos) &&
            Array.isArray(e.undos) &&
            (0 === e.redos.length || o.Operation.isOperationList(e.redos[0])) &&
            (0 === e.undos.length || o.Operation.isOperationList(e.undos[0]))
          );
        },
        u = (new WeakMap(), new WeakMap()),
        l = new WeakMap(),
        c = {
          isHistoryEditor: function (e) {
            return o.Editor.isEditor(e) && s(e.history);
          },
          isMerging: function (e) {
            return l.get(e);
          },
          isSaving: function (e) {
            return u.get(e);
          },
          redo: function (e) {
            e.redo();
          },
          undo: function (e) {
            e.undo();
          },
          withoutMerging: function (e, t) {
            var r = c.isMerging(e);
            l.set(e, !1), t(), l.set(e, r);
          },
          withoutSaving: function (e, t) {
            var r = c.isSaving(e);
            u.set(e, !1), t(), u.set(e, r);
          },
        };
      t.VC = function (e) {
        var t = e,
          r = t.apply;
        return (
          (t.history = { undos: [], redos: [] }),
          (t.redo = function () {
            var e = t.history,
              r = e.redos;
            if (r.length > 0) {
              var n = r[r.length - 1];
              c.withoutSaving(t, function () {
                o.Editor.withoutNormalizing(t, function () {
                  var e = !0,
                    r = !1,
                    o = void 0;
                  try {
                    for (
                      var a, i = n[Symbol.iterator]();
                      !(e = (a = i.next()).done);
                      e = !0
                    ) {
                      var s = a.value;
                      t.apply(s);
                    }
                  } catch (e) {
                    (r = !0), (o = e);
                  } finally {
                    try {
                      e || null == i.return || i.return();
                    } finally {
                      if (r) throw o;
                    }
                  }
                });
              }),
                e.redos.pop(),
                e.undos.push(n);
            }
          }),
          (t.undo = function () {
            var e = t.history,
              r = e.undos;
            if (r.length > 0) {
              var n = r[r.length - 1];
              c.withoutSaving(t, function () {
                o.Editor.withoutNormalizing(t, function () {
                  var e = n.map(o.Operation.inverse).reverse(),
                    r = !0,
                    a = !1,
                    i = void 0;
                  try {
                    for (
                      var s, u = e[Symbol.iterator]();
                      !(r = (s = u.next()).done);
                      r = !0
                    ) {
                      var l = s.value;
                      (l === e[e.length - 1] &&
                        "set_selection" === l.type &&
                        null == l.newProperties) ||
                        t.apply(l);
                    }
                  } catch (e) {
                    (a = !0), (i = e);
                  } finally {
                    try {
                      r || null == u.return || u.return();
                    } finally {
                      if (a) throw i;
                    }
                  }
                });
              }),
                e.redos.push(n),
                e.undos.pop();
            }
          }),
          (t.apply = function (e) {
            var n = t.operations,
              a = t.history,
              i = a.undos,
              s = i[i.length - 1],
              u = s && s[s.length - 1],
              l = (function (e, t) {
                return !(
                  !t ||
                  "set_selection" !== e.type ||
                  "set_selection" !== t.type
                );
              })(e, u),
              f = c.isSaving(t),
              d = c.isMerging(t);
            if (
              (null == f &&
                (f = (function (e, t) {
                  return "set_selection" !== e.type || null != e.newProperties;
                })(e)),
              f)
            ) {
              if (
                (null == d &&
                  (d =
                    null != s &&
                    (0 !== n.length ||
                      (function (e, t) {
                        return (
                          "set_selection" === e.type ||
                          !(
                            !t ||
                            "insert_text" !== e.type ||
                            "insert_text" !== t.type ||
                            e.offset !== t.offset + t.text.length ||
                            !o.Path.equals(e.path, t.path)
                          ) ||
                          !(
                            !t ||
                            "remove_text" !== e.type ||
                            "remove_text" !== t.type ||
                            e.offset + e.text.length !== t.offset ||
                            !o.Path.equals(e.path, t.path)
                          )
                        );
                      })(e, u) ||
                      l)),
                s && d)
              )
                l && s.pop(), s.push(e);
              else {
                var v = [e];
                i.push(v);
              }
              for (; i.length > 100; ) i.shift();
              (function (e) {
                return "set_selection" !== e.type;
              })(e) && (a.redos = []);
            }
            r(e);
          }),
          t
        );
      };
    },
    3166: (e, t, r) => {
      "use strict";
      function n(e) {
        return (
          1 ==
            (null != (t = e) &&
              "object" == typeof t &&
              !1 === Array.isArray(t)) &&
          "[object Object]" === Object.prototype.toString.call(e)
        );
        var t;
      }
      function o(e) {
        var t, r;
        return (
          !1 !== n(e) &&
          "function" == typeof (t = e.constructor) &&
          !1 !== n((r = t.prototype)) &&
          !1 !== r.hasOwnProperty("isPrototypeOf")
        );
      }
      r.r(t), r.d(t, { default: () => o });
    },
    10143: (e, t, r) => {
      "use strict";
      var n = r(67294),
        o = r(84792),
        a = r(23493),
        i = r(3675),
        s = r(6907),
        u = r(9060),
        l = r(18156);
      function c(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      }
      var f = c(n),
        d = c(a),
        v = c(i),
        h = c(s),
        p = c(u),
        g = function (e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        },
        y = function (e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              if (
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              ) {
                var r = [],
                  n = !0,
                  o = !1,
                  a = void 0;
                try {
                  for (
                    var i, s = e[Symbol.iterator]();
                    !(n = (i = s.next()).done) &&
                    (r.push(i.value), !t || r.length !== t);
                    n = !0
                  );
                } catch (e) {
                  (o = !0), (a = e);
                } finally {
                  try {
                    n || null == s.return || s.return();
                  } finally {
                    if (o) throw a;
                  }
                }
                return r;
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            })()
          );
        },
        m = function (e, t) {
          if (null == e) return {};
          var r,
            n,
            o = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = {},
                a = Object.keys(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]),
                t.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (o[r] = e[r]));
          }
          return o;
        },
        w = function (e) {
          return (
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, r = new Array(e.length); t < e.length; t++)
                  r[t] = e[t];
                return r;
              }
            })(e) ||
            (function (e) {
              if (
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
                return Array.from(e);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            })()
          );
        },
        b = 0,
        E = function e() {
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.id = "".concat(b++));
        },
        x = new WeakMap(),
        O = new WeakMap(),
        P = new WeakMap(),
        k = new WeakMap(),
        F = new WeakMap(),
        S = new WeakMap(),
        D = new WeakMap(),
        A = new WeakMap(),
        C = new WeakMap(),
        j = new WeakMap(),
        B = Symbol("placeholder"),
        N = function (e) {
          return R(e) && 1 === e.nodeType;
        },
        R = function (e) {
          return e instanceof Node;
        },
        M = function (e) {
          return R(e) && 3 === e.nodeType;
        },
        T = function (e, t, r) {
          for (
            var n, o = e.childNodes, a = o[t], i = t, s = !1, u = !1;
            ((R((n = a)) && 8 === n.nodeType) ||
              (N(a) && 0 === a.childNodes.length) ||
              (N(a) && "false" === a.getAttribute("contenteditable"))) &&
            (!s || !u);

          )
            i >= o.length
              ? ((s = !0), (i = t - 1), (r = "backward"))
              : i < 0
              ? ((u = !0), (i = t + 1), (r = "forward"))
              : ((a = o[i]), (i += "forward" === r ? 1 : -1));
          return a;
        },
        _ = function e(t) {
          var r = "";
          if (M(t) && t.nodeValue) return t.nodeValue;
          if (N(t)) {
            for (var n = 0, o = Array.from(t.childNodes); n < o.length; n++)
              r += e(o[n]);
            var a = getComputedStyle(t).getPropertyValue("display");
            ("block" !== a && "list" !== a && "BR" !== t.tagName) ||
              (r += "\n");
          }
          return r;
        },
        L = {
          findKey: function (e, t) {
            var r = D.get(t);
            return r || ((r = new E()), D.set(t, r)), r;
          },
          findPath: function (e, t) {
            for (var r = [], n = t; ; ) {
              var a = O.get(n);
              if (null == a) {
                if (o.Editor.isEditor(n)) return r;
                break;
              }
              var i = x.get(n);
              if (null == i) break;
              r.unshift(i), (n = a);
            }
            throw new Error(
              "Unable to find the path for Slate node: ".concat(
                JSON.stringify(t)
              )
            );
          },
          isFocused: function (e) {
            return !!C.get(e);
          },
          isReadOnly: function (e) {
            return !!A.get(e);
          },
          blur: function (e) {
            var t = L.toDOMNode(e, e);
            C.set(e, !1), window.document.activeElement === t && t.blur();
          },
          focus: function (e) {
            var t = L.toDOMNode(e, e);
            C.set(e, !0),
              window.document.activeElement !== t &&
                t.focus({ preventScroll: !0 });
          },
          deselect: function (e) {
            var t = e.selection,
              r = window.getSelection();
            r && r.rangeCount > 0 && r.removeAllRanges(),
              t && o.Transforms.deselect(e);
          },
          hasDOMNode: function (e, t) {
            var r,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              o = n.editable,
              a = void 0 !== o && o,
              i = L.toDOMNode(e, e);
            try {
              r = N(t) ? t : t.parentElement;
            } catch (e) {
              if (
                !e.message.includes(
                  'Permission denied to access property "nodeType"'
                )
              )
                throw e;
            }
            return (
              !!r &&
              r.closest("[data-slate-editor]") === i &&
              (!a ||
                r.isContentEditable ||
                !!r.getAttribute("data-slate-zero-width"))
            );
          },
          insertData: function (e, t) {
            e.insertData(t);
          },
          setFragmentData: function (e, t) {
            e.setFragmentData(t);
          },
          toDOMNode: function (e, t) {
            var r = o.Editor.isEditor(t) ? P.get(e) : F.get(L.findKey(e, t));
            if (!r)
              throw new Error(
                "Cannot resolve a DOM node from Slate node: ".concat(
                  JSON.stringify(t)
                )
              );
            return r;
          },
          toDOMPoint: function (e, t) {
            var r,
              n = o.Editor.node(e, t.path),
              a = y(n, 1)[0],
              i = L.toDOMNode(e, a);
            o.Editor.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
              var s = 0,
                u = 0,
                l = Array.from(
                  i.querySelectorAll(
                    "[data-slate-string], [data-slate-zero-width]"
                  )
                );
              u < l.length;
              u++
            ) {
              var c = l[u],
                f = c.childNodes[0];
              if (null != f && null != f.textContent) {
                var d = f.textContent.length,
                  v = c.getAttribute("data-slate-length"),
                  h = s + (null == v ? d : parseInt(v, 10));
                if (t.offset <= h) {
                  r = [f, Math.min(d, Math.max(0, t.offset - s))];
                  break;
                }
                s = h;
              }
            }
            if (!r)
              throw new Error(
                "Cannot resolve a DOM point from Slate point: ".concat(
                  JSON.stringify(t)
                )
              );
            return r;
          },
          toDOMRange: function (e, t) {
            var r = t.anchor,
              n = t.focus,
              a = o.Range.isBackward(t),
              i = L.toDOMPoint(e, r),
              s = o.Range.isCollapsed(t) ? i : L.toDOMPoint(e, n),
              u = window.document.createRange(),
              l = y(a ? s : i, 2),
              c = l[0],
              f = l[1],
              d = y(a ? i : s, 2),
              v = d[0],
              h = d[1],
              p = !!(N(c) ? c : c.parentElement).getAttribute(
                "data-slate-zero-width"
              ),
              g = !!(N(v) ? v : v.parentElement).getAttribute(
                "data-slate-zero-width"
              );
            return u.setStart(c, p ? 1 : f), u.setEnd(v, g ? 1 : h), u;
          },
          toSlateNode: function (e, t) {
            var r = N(t) ? t : t.parentElement;
            r &&
              !r.hasAttribute("data-slate-node") &&
              (r = r.closest("[data-slate-node]"));
            var n = r ? k.get(r) : null;
            if (!n)
              throw new Error(
                "Cannot resolve a Slate node from DOM node: ".concat(r)
              );
            return n;
          },
          findEventRange: function (e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var r = t,
              n = r.clientX,
              a = r.clientY,
              i = r.target;
            if (null == n || null == a)
              throw new Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t)
              );
            var s,
              u = L.toSlateNode(e, t.target),
              l = L.findPath(e, u);
            if (o.Editor.isVoid(e, u)) {
              var c = i.getBoundingClientRect(),
                f = e.isInline(u)
                  ? n - c.left < c.left + c.width - n
                  : a - c.top < c.top + c.height - a,
                d = o.Editor.point(e, l, { edge: f ? "start" : "end" }),
                v = f ? o.Editor.before(e, d) : o.Editor.after(e, d);
              if (v) return o.Editor.range(e, v);
            }
            var h = window.document;
            if (h.caretRangeFromPoint) s = h.caretRangeFromPoint(n, a);
            else {
              var p = h.caretPositionFromPoint(n, a);
              p &&
                ((s = h.createRange()).setStart(p.offsetNode, p.offset),
                s.setEnd(p.offsetNode, p.offset));
            }
            if (!s)
              throw new Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t)
              );
            return L.toSlateRange(e, s);
          },
          toSlatePoint: function (e, t) {
            var r = (function (e) {
                var t = y(e, 2),
                  r = t[0],
                  n = t[1];
                if (N(r) && r.childNodes.length) {
                  var o = n === r.childNodes.length,
                    a = o ? "backward" : "forward";
                  for (
                    r = T(r, o ? n - 1 : n, a);
                    N(r) && r.childNodes.length;

                  ) {
                    var i = o ? r.childNodes.length - 1 : 0;
                    r = T(r, i, a);
                  }
                  n = o && null != r.textContent ? r.textContent.length : 0;
                }
                return [r, n];
              })(t),
              n = y(r, 2),
              o = n[0],
              a = n[1],
              i = o.parentNode,
              s = null,
              u = 0;
            if (i) {
              var l = i.closest('[data-slate-void="true"]'),
                c = i.closest("[data-slate-leaf]"),
                f = null;
              if (c) {
                s = c.closest('[data-slate-node="text"]');
                var d = window.document.createRange();
                d.setStart(s, 0), d.setEnd(o, a);
                var v = d.cloneContents();
                []
                  .concat(
                    w(v.querySelectorAll("[data-slate-zero-width]")),
                    w(v.querySelectorAll("[contenteditable=false]"))
                  )
                  .forEach(function (e) {
                    e.parentNode.removeChild(e);
                  }),
                  (u = v.textContent.length),
                  (f = s);
              } else
                l &&
                  ((s = (c = l.querySelector("[data-slate-leaf]")).closest(
                    '[data-slate-node="text"]'
                  )),
                  (u = (f = c).textContent.length));
              f &&
                u === f.textContent.length &&
                i.hasAttribute("data-slate-zero-width") &&
                u--;
            }
            if (!s)
              throw new Error(
                "Cannot resolve a Slate point from DOM point: ".concat(t)
              );
            var h = L.toSlateNode(e, s);
            return { path: L.findPath(e, h), offset: u };
          },
          toSlateRange: function (e, t) {
            var r, n, o, a, i;
            if (
              ((t instanceof Selection ? t.anchorNode : t.startContainer) &&
                (t instanceof Selection
                  ? ((r = t.anchorNode),
                    (n = t.anchorOffset),
                    (o = t.focusNode),
                    (a = t.focusOffset),
                    (i = t.isCollapsed))
                  : ((r = t.startContainer),
                    (n = t.startOffset),
                    (o = t.endContainer),
                    (a = t.endOffset),
                    (i = t.collapsed))),
              null == r || null == o || null == n || null == a)
            )
              throw new Error(
                "Cannot resolve a Slate range from DOM range: ".concat(t)
              );
            var s = L.toSlatePoint(e, [r, n]);
            return { anchor: s, focus: i ? s : L.toSlatePoint(e, [o, a]) };
          },
        },
        z = n.createContext(!1),
        W = n.createContext(null),
        I = function () {
          var e = n.useContext(W);
          if (!e)
            throw new Error(
              "The `useEditor` hook must be used inside the <Slate> component's context."
            );
          return e;
        },
        q = n.createContext(null),
        V = function () {
          var e = n.useContext(q);
          if (!e)
            throw new Error(
              "The `useSlate` hook must be used inside the <SlateProvider> component's context."
            );
          return y(e, 1)[0];
        },
        K = n.createContext(!1),
        H = n.createContext(!1),
        U = function (e) {
          var t = e.isLast,
            r = e.leaf,
            n = e.parent,
            a = e.text,
            i = I(),
            s = L.findPath(i, a),
            u = o.Path.parent(s);
          return i.isVoid(n)
            ? f.default.createElement(X, { length: o.Node.string(n).length })
            : "" !== r.text ||
              n.children[n.children.length - 1] !== a ||
              i.isInline(n) ||
              "" !== o.Editor.string(i, u)
            ? "" === r.text
              ? f.default.createElement(X, null)
              : t && "\n" === r.text.slice(-1)
              ? f.default.createElement(J, { isTrailing: !0, text: r.text })
              : f.default.createElement(J, { text: r.text })
            : f.default.createElement(X, { isLineBreak: !0 });
        },
        J = function (e) {
          var t = e.text,
            r = e.isTrailing,
            n = void 0 !== r && r;
          return f.default.createElement(
            "span",
            { "data-slate-string": !0 },
            t,
            n ? "\n" : null
          );
        },
        X = function (e) {
          var t = e.length,
            r = void 0 === t ? 0 : t,
            n = e.isLineBreak,
            o = void 0 !== n && n;
          return f.default.createElement(
            "span",
            { "data-slate-zero-width": o ? "n" : "z", "data-slate-length": r },
            "\ufeff",
            o ? f.default.createElement("br", null) : null
          );
        },
        Y = f.default.memo(
          function (e) {
            var t = e.leaf,
              r = e.isLast,
              n = e.text,
              o = e.parent,
              a = e.renderLeaf,
              i =
                void 0 === a
                  ? function (e) {
                      return f.default.createElement(Z, Object.assign({}, e));
                    }
                  : a,
              s = f.default.createElement(U, {
                isLast: r,
                leaf: t,
                parent: o,
                text: n,
              });
            return (
              t[B] &&
                (s = f.default.createElement(
                  f.default.Fragment,
                  null,
                  f.default.createElement(
                    "span",
                    {
                      contentEditable: !1,
                      style: {
                        pointerEvents: "none",
                        display: "inline-block",
                        width: "0",
                        maxWidth: "100%",
                        whiteSpace: "nowrap",
                        opacity: "0.333",
                        userSelect: "none",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        textDecoration: "none",
                      },
                    },
                    t.placeholder
                  ),
                  s
                )),
              i({
                attributes: { "data-slate-leaf": !0 },
                children: s,
                leaf: t,
                text: n,
              })
            );
          },
          function (e, t) {
            return (
              t.parent === e.parent &&
              t.isLast === e.isLast &&
              t.renderLeaf === e.renderLeaf &&
              t.text === e.text &&
              o.Text.matches(t.leaf, e.leaf)
            );
          }
        ),
        Z = function (e) {
          var t = e.attributes,
            r = e.children;
          return f.default.createElement("span", Object.assign({}, t), r);
        },
        $ = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        G = f.default.memo(
          function (e) {
            for (
              var t = e.decorations,
                r = e.isLast,
                a = e.parent,
                i = e.renderLeaf,
                s = e.text,
                u = I(),
                l = n.useRef(null),
                c = o.Text.decorations(s, t),
                d = L.findKey(u, s),
                v = [],
                h = 0;
              h < c.length;
              h++
            ) {
              var p = c[h];
              v.push(
                f.default.createElement(Y, {
                  isLast: r && h === c.length - 1,
                  key: "".concat(d.id, "-").concat(h),
                  leaf: p,
                  text: s,
                  parent: a,
                  renderLeaf: i,
                })
              );
            }
            return (
              $(function () {
                l.current
                  ? (F.set(d, l.current),
                    S.set(s, l.current),
                    k.set(l.current, s))
                  : (F.delete(d), S.delete(s));
              }),
              f.default.createElement(
                "span",
                { "data-slate-node": "text", ref: l },
                v
              )
            );
          },
          function (e, t) {
            return (
              t.parent === e.parent &&
              t.isLast === e.isLast &&
              t.renderLeaf === e.renderLeaf &&
              t.text === e.text
            );
          }
        ),
        Q = f.default.memo(
          function (e) {
            var t = e.decorate,
              r = e.decorations,
              a = e.element,
              i = e.renderElement,
              s =
                void 0 === i
                  ? function (e) {
                      return f.default.createElement(ee, Object.assign({}, e));
                    }
                  : i,
              u = e.renderLeaf,
              l = e.selection,
              c = n.useRef(null),
              d = I(),
              v = n.useContext(K),
              p = d.isInline(a),
              g = L.findKey(d, a),
              m = f.default.createElement(re, {
                decorate: t,
                decorations: r,
                node: a,
                renderElement: s,
                renderLeaf: u,
                selection: l,
              }),
              w = { "data-slate-node": "element", ref: c };
            if (
              (p && (w["data-slate-inline"] = !0),
              !p && o.Editor.hasInlines(d, a))
            ) {
              var b = o.Node.string(a),
                E = h.default(b);
              "rtl" === E && (w.dir = E);
            }
            if (o.Editor.isVoid(d, a)) {
              (w["data-slate-void"] = !0), !v && p && (w.contentEditable = !1);
              var P = p ? "span" : "div",
                D = o.Node.texts(a),
                A = y(D, 1),
                C = y(A[0], 1)[0];
              (m = v
                ? null
                : f.default.createElement(
                    P,
                    {
                      "data-slate-spacer": !0,
                      style: {
                        height: "0",
                        color: "transparent",
                        outline: "none",
                        position: "absolute",
                      },
                    },
                    f.default.createElement(G, {
                      decorations: [],
                      isLast: !1,
                      parent: a,
                      text: C,
                    })
                  )),
                x.set(C, 0),
                O.set(C, a);
            }
            return (
              $(function () {
                c.current
                  ? (F.set(g, c.current),
                    S.set(a, c.current),
                    k.set(c.current, a))
                  : (F.delete(g), S.delete(a));
              }),
              f.default.createElement(
                H.Provider,
                { value: !!l },
                s({ attributes: w, children: m, element: a })
              )
            );
          },
          function (e, t) {
            return (
              e.decorate === t.decorate &&
              e.element === t.element &&
              e.renderElement === t.renderElement &&
              e.renderLeaf === t.renderLeaf &&
              te(e.decorations, t.decorations) &&
              (e.selection === t.selection ||
                (!!e.selection &&
                  !!t.selection &&
                  o.Range.equals(e.selection, t.selection)))
            );
          }
        ),
        ee = function (e) {
          var t = e.attributes,
            r = e.children,
            n = e.element,
            o = I().isInline(n) ? "span" : "div";
          return f.default.createElement(
            o,
            Object.assign({}, t, { style: { position: "relative" } }),
            r
          );
        },
        te = function (e, t) {
          if (e.length !== t.length) return !1;
          for (var r = 0; r < e.length; r++) {
            var n = e[r],
              a = t[r];
            if (!o.Range.equals(n, a)) return !1;
          }
          return !0;
        },
        re = function (e) {
          for (
            var t = e.decorate,
              r = e.decorations,
              n = e.node,
              a = e.renderElement,
              i = e.renderLeaf,
              s = e.selection,
              u = I(),
              l = L.findPath(u, n),
              c = [],
              d =
                o.Element.isElement(n) &&
                !u.isInline(n) &&
                o.Editor.hasInlines(u, n),
              v = 0;
            v < n.children.length;
            v++
          ) {
            var h = l.concat(v),
              p = n.children[v],
              g = L.findKey(u, p),
              y = o.Editor.range(u, h),
              m = s && o.Range.intersection(y, s),
              w = t([p, h]),
              b = !0,
              E = !1,
              P = void 0;
            try {
              for (
                var k, F = r[Symbol.iterator]();
                !(b = (k = F.next()).done);
                b = !0
              ) {
                var S = k.value,
                  D = o.Range.intersection(S, y);
                D && w.push(D);
              }
            } catch (e) {
              (E = !0), (P = e);
            } finally {
              try {
                b || null == F.return || F.return();
              } finally {
                if (E) throw P;
              }
            }
            o.Element.isElement(p)
              ? c.push(
                  f.default.createElement(Q, {
                    decorate: t,
                    decorations: w,
                    element: p,
                    key: g.id,
                    renderElement: a,
                    renderLeaf: i,
                    selection: m,
                  })
                )
              : c.push(
                  f.default.createElement(G, {
                    decorations: w,
                    key: g.id,
                    isLast: d && v === n.children.length - 1,
                    parent: n,
                    renderLeaf: i,
                    text: p,
                  })
                ),
              x.set(p, v),
              O.set(p, n);
          }
          return f.default.createElement(f.default.Fragment, null, c);
        },
        ne =
          ("undefined" != typeof navigator &&
            "undefined" != typeof window &&
            /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            window.MSStream,
          "undefined" != typeof navigator &&
            /Mac OS X/.test(navigator.userAgent)),
        oe =
          "undefined" != typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
        ae =
          "undefined" != typeof navigator &&
          /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
        ie =
          "undefined" != typeof navigator &&
          /Edge?\/(?:[0-6][0-9]|[0-7][0-8])/i.test(navigator.userAgent),
        se =
          "undefined" != typeof navigator &&
          /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])/i.test(navigator.userAgent),
        ue = {
          bold: "mod+b",
          compose: ["down", "left", "right", "up", "backspace", "enter"],
          moveBackward: "left",
          moveForward: "right",
          moveWordBackward: "ctrl+left",
          moveWordForward: "ctrl+right",
          deleteBackward: "shift?+backspace",
          deleteForward: "shift?+delete",
          extendBackward: "shift+left",
          extendForward: "shift+right",
          italic: "mod+i",
          splitBlock: "shift?+enter",
          undo: "mod+z",
        },
        le = {
          moveLineBackward: "opt+up",
          moveLineForward: "opt+down",
          moveWordBackward: "opt+left",
          moveWordForward: "opt+right",
          deleteBackward: ["ctrl+backspace", "ctrl+h"],
          deleteForward: ["ctrl+delete", "ctrl+d"],
          deleteLineBackward: "cmd+shift?+backspace",
          deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
          deleteWordBackward: "opt+shift?+backspace",
          deleteWordForward: "opt+shift?+delete",
          extendLineBackward: "opt+shift+up",
          extendLineForward: "opt+shift+down",
          redo: "cmd+shift+z",
          transposeCharacter: "ctrl+t",
        },
        ce = {
          deleteWordBackward: "ctrl+shift?+backspace",
          deleteWordForward: "ctrl+shift?+delete",
          redo: ["ctrl+y", "ctrl+shift+z"],
        },
        fe = function (e) {
          var t = ue[e],
            r = le[e],
            n = ce[e],
            o = t && l.isKeyHotkey(t),
            a = r && l.isKeyHotkey(r),
            i = n && l.isKeyHotkey(n);
          return function (e) {
            return (
              !(!o || !o(e)) || !!(ne && a && a(e)) || !(ne || !i || !i(e))
            );
          };
        },
        de = {
          isBold: fe("bold"),
          isCompose: fe("compose"),
          isMoveBackward: fe("moveBackward"),
          isMoveForward: fe("moveForward"),
          isDeleteBackward: fe("deleteBackward"),
          isDeleteForward: fe("deleteForward"),
          isDeleteLineBackward: fe("deleteLineBackward"),
          isDeleteLineForward: fe("deleteLineForward"),
          isDeleteWordBackward: fe("deleteWordBackward"),
          isDeleteWordForward: fe("deleteWordForward"),
          isExtendBackward: fe("extendBackward"),
          isExtendForward: fe("extendForward"),
          isExtendLineBackward: fe("extendLineBackward"),
          isExtendLineForward: fe("extendLineForward"),
          isItalic: fe("italic"),
          isMoveLineBackward: fe("moveLineBackward"),
          isMoveLineForward: fe("moveLineForward"),
          isMoveWordBackward: fe("moveWordBackward"),
          isMoveWordForward: fe("moveWordForward"),
          isRedo: fe("redo"),
          isSplitBlock: fe("splitBlock"),
          isTransposeCharacter: fe("transposeCharacter"),
          isUndo: fe("undo"),
        };
      function ve(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ve(Object(r), !0).forEach(function (t) {
                g(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ve(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var pe = !(oe || ie || se),
        ge = function () {
          return [];
        },
        ye = function (e, t) {
          return R(t) && L.hasDOMNode(e, t);
        },
        me = function (e, t) {
          return R(t) && L.hasDOMNode(e, t, { editable: !0 });
        },
        we = function (e, t) {
          var r = ye(e, t) && L.toSlateNode(e, t);
          return o.Editor.isVoid(e, r);
        },
        be = function (e, t) {
          return (
            !!t && (t(e), e.isDefaultPrevented() || e.isPropagationStopped())
          );
        };
      (t.CX = function (e) {
        var t = e.autoFocus,
          r = e.decorate,
          a = void 0 === r ? ge : r,
          i = e.onDOMBeforeInput,
          s = e.placeholder,
          u = e.readOnly,
          l = void 0 !== u && u,
          c = e.renderElement,
          h = e.renderLeaf,
          p = e.style,
          w = void 0 === p ? {} : p,
          b = e.as,
          E = void 0 === b ? "div" : b,
          x = m(e, [
            "autoFocus",
            "decorate",
            "onDOMBeforeInput",
            "placeholder",
            "readOnly",
            "renderElement",
            "renderLeaf",
            "style",
            "as",
          ]),
          O = V(),
          F = n.useRef(null);
        A.set(O, l);
        var D = n.useMemo(function () {
          return {
            isComposing: !1,
            isUpdatingSelection: !1,
            latestElement: null,
          };
        }, []);
        $(function () {
          F.current
            ? (P.set(O, F.current), S.set(O, F.current), k.set(F.current, O))
            : S.delete(O);
        }),
          $(function () {
            var e = O.selection,
              t = window.getSelection();
            if (!D.isComposing && t && L.isFocused(O)) {
              var r = "None" !== t.type;
              if (e || r) {
                var n = P.get(O),
                  a = !1;
                if (
                  (n.contains(t.anchorNode) &&
                    n.contains(t.focusNode) &&
                    (a = !0),
                  !(r && a && e && o.Range.equals(L.toSlateRange(O, t), e)))
                ) {
                  var i = L.toDOMNode(O, O);
                  D.isUpdatingSelection = !0;
                  var s = e && L.toDOMRange(O, e);
                  if (s) {
                    o.Range.isBackward(e)
                      ? t.setBaseAndExtent(
                          s.endContainer,
                          s.endOffset,
                          s.startContainer,
                          s.startOffset
                        )
                      : t.setBaseAndExtent(
                          s.startContainer,
                          s.startOffset,
                          s.endContainer,
                          s.endOffset
                        );
                    var u = s.startContainer.parentElement;
                    v.default(u, { scrollMode: "if-needed", boundary: i });
                  } else t.removeAllRanges();
                  setTimeout(function () {
                    s && oe && i.focus(), (D.isUpdatingSelection = !1);
                  });
                }
              }
            }
          }),
          n.useEffect(
            function () {
              F.current && t && F.current.focus();
            },
            [t]
          );
        var j = n.useCallback(
          function (e) {
            if (
              !l &&
              me(O, e.target) &&
              !(function (e, t) {
                return !!t && (t(e), e.defaultPrevented);
              })(e, i)
            ) {
              var t = O.selection,
                r = e.inputType,
                n = e.dataTransfer || e.data || void 0;
              if (
                "insertCompositionText" === r ||
                "deleteCompositionText" === r
              )
                return;
              if (
                (e.preventDefault(),
                !r.startsWith("delete") || r.startsWith("deleteBy"))
              ) {
                var a = e.getTargetRanges(),
                  s = y(a, 1)[0];
                if (s) {
                  var u = L.toSlateRange(O, s);
                  (t && o.Range.equals(t, u)) || o.Transforms.select(O, u);
                }
              }
              if (t && o.Range.isExpanded(t) && r.startsWith("delete"))
                return void o.Editor.deleteFragment(O);
              switch (r) {
                case "deleteByComposition":
                case "deleteByCut":
                case "deleteByDrag":
                  o.Editor.deleteFragment(O);
                  break;
                case "deleteContent":
                case "deleteContentForward":
                  o.Editor.deleteForward(O);
                  break;
                case "deleteContentBackward":
                  o.Editor.deleteBackward(O);
                  break;
                case "deleteEntireSoftLine":
                  o.Editor.deleteBackward(O, { unit: "line" }),
                    o.Editor.deleteForward(O, { unit: "line" });
                  break;
                case "deleteHardLineBackward":
                  o.Editor.deleteBackward(O, { unit: "block" });
                  break;
                case "deleteSoftLineBackward":
                  o.Editor.deleteBackward(O, { unit: "line" });
                  break;
                case "deleteHardLineForward":
                  o.Editor.deleteForward(O, { unit: "block" });
                  break;
                case "deleteSoftLineForward":
                  o.Editor.deleteForward(O, { unit: "line" });
                  break;
                case "deleteWordBackward":
                  o.Editor.deleteBackward(O, { unit: "word" });
                  break;
                case "deleteWordForward":
                  o.Editor.deleteForward(O, { unit: "word" });
                  break;
                case "insertLineBreak":
                case "insertParagraph":
                  o.Editor.insertBreak(O);
                  break;
                case "insertFromComposition":
                case "insertFromDrop":
                case "insertFromPaste":
                case "insertFromYank":
                case "insertReplacementText":
                case "insertText":
                  n instanceof DataTransfer
                    ? L.insertData(O, n)
                    : "string" == typeof n && o.Editor.insertText(O, n);
              }
            }
          },
          [l, i]
        );
        $(
          function () {
            return (
              F.current && pe && F.current.addEventListener("beforeinput", j),
              function () {
                F.current &&
                  pe &&
                  F.current.removeEventListener("beforeinput", j);
              }
            );
          },
          [j]
        );
        var M = n.useCallback(
          d.default(function () {
            if (!l && !D.isComposing && !D.isUpdatingSelection) {
              var e = window.document.activeElement,
                t = L.toDOMNode(O, O),
                r = window.getSelection();
              if (
                (e === t ? ((D.latestElement = e), C.set(O, !0)) : C.delete(O),
                !r)
              )
                return o.Transforms.deselect(O);
              var n = r.anchorNode,
                a = r.focusNode,
                i = me(O, n) || we(O, n),
                s = me(O, a) || we(O, a);
              if (i && s) {
                var u = L.toSlateRange(O, r);
                o.Transforms.select(O, u);
              } else o.Transforms.deselect(O);
            }
          }, 100),
          [l]
        );
        $(
          function () {
            return (
              window.document.addEventListener("selectionchange", M),
              function () {
                window.document.removeEventListener("selectionchange", M);
              }
            );
          },
          [M]
        );
        var T = a([O, []]);
        if (
          s &&
          1 === O.children.length &&
          1 === Array.from(o.Node.texts(O)).length &&
          "" === o.Node.string(O)
        ) {
          var _,
            z = o.Editor.start(O, []);
          T.push(
            (g((_ = {}), B, !0),
            g(_, "placeholder", s),
            g(_, "anchor", z),
            g(_, "focus", z),
            _)
          );
        }
        return f.default.createElement(
          K.Provider,
          { value: l },
          f.default.createElement(
            E,
            Object.assign(
              { "data-gramm": !1, role: l ? void 0 : "textbox" },
              x,
              {
                spellCheck: pe ? x.spellCheck : void 0,
                autoCorrect: pe ? x.autoCorrect : void 0,
                autoCapitalize: pe ? x.autoCapitalize : void 0,
                "data-slate-editor": !0,
                "data-slate-node": "value",
                contentEditable: !l || void 0,
                suppressContentEditableWarning: !0,
                ref: F,
                style: he(
                  {
                    outline: "none",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                  },
                  w
                ),
                onBeforeInput: n.useCallback(
                  function (e) {
                    if (
                      !pe &&
                      !l &&
                      !be(e, x.onBeforeInput) &&
                      me(O, e.target)
                    ) {
                      e.preventDefault();
                      var t = e.data;
                      o.Editor.insertText(O, t);
                    }
                  },
                  [l]
                ),
                onBlur: n.useCallback(
                  function (e) {
                    if (
                      !l &&
                      !D.isUpdatingSelection &&
                      me(O, e.target) &&
                      !be(e, x.onBlur) &&
                      D.latestElement !== window.document.activeElement
                    ) {
                      var t = e.relatedTarget;
                      if (
                        !(
                          t === L.toDOMNode(O, O) ||
                          (N(t) && t.hasAttribute("data-slate-spacer"))
                        )
                      ) {
                        if (null != t && R(t) && L.hasDOMNode(O, t)) {
                          var r = L.toSlateNode(O, t);
                          if (o.Element.isElement(r) && !O.isVoid(r)) return;
                        }
                        C.delete(O);
                      }
                    }
                  },
                  [l, x.onBlur]
                ),
                onClick: n.useCallback(
                  function (e) {
                    if (
                      !l &&
                      ye(O, e.target) &&
                      !be(e, x.onClick) &&
                      R(e.target)
                    ) {
                      var t = L.toSlateNode(O, e.target),
                        r = L.findPath(O, t),
                        n = o.Editor.start(O, r),
                        a = o.Editor.end(O, r),
                        i = o.Editor.void(O, { at: n }),
                        s = o.Editor.void(O, { at: a });
                      if (i && s && o.Path.equals(i[1], s[1])) {
                        var u = o.Editor.range(O, n);
                        o.Transforms.select(O, u);
                      }
                    }
                  },
                  [l, x.onClick]
                ),
                onCompositionEnd: n.useCallback(
                  function (e) {
                    me(O, e.target) &&
                      !be(e, x.onCompositionEnd) &&
                      ((D.isComposing = !1),
                      ae || oe || !e.data || o.Editor.insertText(O, e.data));
                  },
                  [x.onCompositionEnd]
                ),
                onCompositionStart: n.useCallback(
                  function (e) {
                    me(O, e.target) &&
                      !be(e, x.onCompositionStart) &&
                      (D.isComposing = !0);
                  },
                  [x.onCompositionStart]
                ),
                onCopy: n.useCallback(
                  function (e) {
                    me(O, e.target) &&
                      !be(e, x.onCopy) &&
                      (e.preventDefault(),
                      L.setFragmentData(O, e.clipboardData));
                  },
                  [x.onCopy]
                ),
                onCut: n.useCallback(
                  function (e) {
                    if (!l && me(O, e.target) && !be(e, x.onCut)) {
                      e.preventDefault(), L.setFragmentData(O, e.clipboardData);
                      var t = O.selection;
                      t && o.Range.isExpanded(t) && o.Editor.deleteFragment(O);
                    }
                  },
                  [l, x.onCut]
                ),
                onDragOver: n.useCallback(
                  function (e) {
                    if (ye(O, e.target) && !be(e, x.onDragOver)) {
                      var t = L.toSlateNode(O, e.target);
                      o.Editor.isVoid(O, t) && e.preventDefault();
                    }
                  },
                  [x.onDragOver]
                ),
                onDragStart: n.useCallback(
                  function (e) {
                    if (ye(O, e.target) && !be(e, x.onDragStart)) {
                      var t = L.toSlateNode(O, e.target),
                        r = L.findPath(O, t);
                      if (o.Editor.void(O, { at: r })) {
                        var n = o.Editor.range(O, r);
                        o.Transforms.select(O, n);
                      }
                      L.setFragmentData(O, e.dataTransfer);
                    }
                  },
                  [x.onDragStart]
                ),
                onDrop: n.useCallback(
                  function (e) {
                    if (
                      ye(O, e.target) &&
                      !l &&
                      !be(e, x.onDrop) &&
                      (!pe || (!ae && e.dataTransfer.files.length > 0))
                    ) {
                      e.preventDefault();
                      var t = L.findEventRange(O, e),
                        r = e.dataTransfer;
                      o.Transforms.select(O, t), L.insertData(O, r);
                    }
                  },
                  [l, x.onDrop]
                ),
                onFocus: n.useCallback(
                  function (e) {
                    if (
                      !l &&
                      !D.isUpdatingSelection &&
                      me(O, e.target) &&
                      !be(e, x.onFocus)
                    ) {
                      var t = L.toDOMNode(O, O);
                      if (
                        ((D.latestElement = window.document.activeElement),
                        oe && e.target !== t)
                      )
                        return void t.focus();
                      C.set(O, !0);
                    }
                  },
                  [l, x.onFocus]
                ),
                onKeyDown: n.useCallback(
                  function (e) {
                    if (!l && me(O, e.target) && !be(e, x.onKeyDown)) {
                      var t = e.nativeEvent,
                        r = O.selection;
                      if (de.isRedo(t))
                        return (
                          e.preventDefault(),
                          void ("function" == typeof O.redo && O.redo())
                        );
                      if (de.isUndo(t))
                        return (
                          e.preventDefault(),
                          void ("function" == typeof O.undo && O.undo())
                        );
                      if (de.isMoveLineBackward(t))
                        return (
                          e.preventDefault(),
                          void o.Transforms.move(O, {
                            unit: "line",
                            reverse: !0,
                          })
                        );
                      if (de.isMoveLineForward(t))
                        return (
                          e.preventDefault(),
                          void o.Transforms.move(O, { unit: "line" })
                        );
                      if (de.isExtendLineBackward(t))
                        return (
                          e.preventDefault(),
                          void o.Transforms.move(O, {
                            unit: "line",
                            edge: "focus",
                            reverse: !0,
                          })
                        );
                      if (de.isExtendLineForward(t))
                        return (
                          e.preventDefault(),
                          void o.Transforms.move(O, {
                            unit: "line",
                            edge: "focus",
                          })
                        );
                      if (de.isMoveBackward(t))
                        return (
                          e.preventDefault(),
                          void (r && o.Range.isCollapsed(r)
                            ? o.Transforms.move(O, { reverse: !0 })
                            : o.Transforms.collapse(O, { edge: "start" }))
                        );
                      if (de.isMoveForward(t))
                        return (
                          e.preventDefault(),
                          void (r && o.Range.isCollapsed(r)
                            ? o.Transforms.move(O)
                            : o.Transforms.collapse(O, { edge: "end" }))
                        );
                      if (de.isMoveWordBackward(t))
                        return (
                          e.preventDefault(),
                          void o.Transforms.move(O, {
                            unit: "word",
                            reverse: !0,
                          })
                        );
                      if (de.isMoveWordForward(t))
                        return (
                          e.preventDefault(),
                          void o.Transforms.move(O, { unit: "word" })
                        );
                      if (!pe) {
                        if (
                          de.isBold(t) ||
                          de.isItalic(t) ||
                          de.isTransposeCharacter(t)
                        )
                          return void e.preventDefault();
                        if (de.isSplitBlock(t))
                          return (
                            e.preventDefault(), void o.Editor.insertBreak(O)
                          );
                        if (de.isDeleteBackward(t))
                          return (
                            e.preventDefault(),
                            void (r && o.Range.isExpanded(r)
                              ? o.Editor.deleteFragment(O)
                              : o.Editor.deleteBackward(O))
                          );
                        if (de.isDeleteForward(t))
                          return (
                            e.preventDefault(),
                            void (r && o.Range.isExpanded(r)
                              ? o.Editor.deleteFragment(O)
                              : o.Editor.deleteForward(O))
                          );
                        if (de.isDeleteLineBackward(t))
                          return (
                            e.preventDefault(),
                            void (r && o.Range.isExpanded(r)
                              ? o.Editor.deleteFragment(O)
                              : o.Editor.deleteBackward(O, { unit: "line" }))
                          );
                        if (de.isDeleteLineForward(t))
                          return (
                            e.preventDefault(),
                            void (r && o.Range.isExpanded(r)
                              ? o.Editor.deleteFragment(O)
                              : o.Editor.deleteForward(O, { unit: "line" }))
                          );
                        if (de.isDeleteWordBackward(t))
                          return (
                            e.preventDefault(),
                            void (r && o.Range.isExpanded(r)
                              ? o.Editor.deleteFragment(O)
                              : o.Editor.deleteBackward(O, { unit: "word" }))
                          );
                        if (de.isDeleteWordForward(t))
                          return (
                            e.preventDefault(),
                            void (r && o.Range.isExpanded(r)
                              ? o.Editor.deleteFragment(O)
                              : o.Editor.deleteForward(O, { unit: "word" }))
                          );
                      }
                    }
                  },
                  [l, x.onKeyDown]
                ),
                onPaste: n.useCallback(
                  function (e) {
                    !me(O, e.target) ||
                      be(e, x.onPaste) ||
                      (pe &&
                        !(function (e) {
                          return (
                            e.clipboardData &&
                            "" !== e.clipboardData.getData("text/plain") &&
                            1 === e.clipboardData.types.length
                          );
                        })(e.nativeEvent)) ||
                      l ||
                      (e.preventDefault(), L.insertData(O, e.clipboardData));
                  },
                  [l, x.onPaste]
                ),
              }
            ),
            f.default.createElement(re, {
              decorate: a,
              decorations: T,
              node: O,
              renderElement: c,
              renderLeaf: h,
              selection: O.selection,
            })
          )
        );
      }),
        (t.F3 = L),
        (t.mH = function (e) {
          var t = e.editor,
            r = e.children,
            o = e.onChange,
            a = e.value,
            i = m(e, ["editor", "children", "onChange", "value"]),
            s = n.useState(0),
            u = y(s, 2),
            l = u[0],
            c = u[1],
            d = n.useMemo(function () {
              return (t.children = a), Object.assign(t, i), [t];
            }, [l, a].concat(w(Object.values(i)))),
            v = n.useCallback(
              function () {
                o(t.children), c(l + 1);
              },
              [l, o]
            );
          return (
            j.set(t, v),
            n.useEffect(function () {
              return function () {
                j.set(t, function () {});
              };
            }, []),
            f.default.createElement(
              q.Provider,
              { value: d },
              f.default.createElement(
                W.Provider,
                { value: t },
                f.default.createElement(
                  z.Provider,
                  { value: L.isFocused(t) },
                  r
                )
              )
            )
          );
        }),
        (t.UE = function () {
          return n.useContext(z);
        }),
        (t.vt = function () {
          return n.useContext(H);
        }),
        (t.ui = V),
        (t.BU = function (e) {
          var t = e,
            r = t.apply,
            n = t.onChange;
          return (
            (t.apply = function (e) {
              var n = [];
              switch (e.type) {
                case "insert_text":
                case "remove_text":
                case "set_node":
                  var a = !0,
                    i = !1,
                    s = void 0;
                  try {
                    for (
                      var u,
                        l = o.Editor.levels(t, { at: e.path })[
                          Symbol.iterator
                        ]();
                      !(a = (u = l.next()).done);
                      a = !0
                    ) {
                      var c = y(u.value, 2),
                        f = c[0],
                        d = c[1],
                        v = L.findKey(t, f);
                      n.push([d, v]);
                    }
                  } catch (e) {
                    (i = !0), (s = e);
                  } finally {
                    try {
                      a || null == l.return || l.return();
                    } finally {
                      if (i) throw s;
                    }
                  }
                  break;
                case "insert_node":
                case "remove_node":
                case "merge_node":
                case "split_node":
                  var h = !0,
                    p = !1,
                    g = void 0;
                  try {
                    for (
                      var m,
                        w = o.Editor.levels(t, { at: o.Path.parent(e.path) })[
                          Symbol.iterator
                        ]();
                      !(h = (m = w.next()).done);
                      h = !0
                    ) {
                      var b = y(m.value, 2),
                        E = b[0],
                        x = b[1],
                        O = L.findKey(t, E);
                      n.push([x, O]);
                    }
                  } catch (e) {
                    (p = !0), (g = e);
                  } finally {
                    try {
                      h || null == w.return || w.return();
                    } finally {
                      if (p) throw g;
                    }
                  }
              }
              r(e);
              for (var P = 0, k = n; P < k.length; P++) {
                var F = y(k[P], 2),
                  S = F[0],
                  A = F[1],
                  C = o.Editor.node(t, S),
                  j = y(C, 1)[0];
                D.set(j, A);
              }
            }),
            (t.setFragmentData = function (e) {
              var r = t.selection;
              if (r) {
                var n = o.Range.edges(r),
                  a = y(n, 2),
                  i = a[0],
                  s = a[1],
                  u = o.Editor.void(t, { at: i.path }),
                  l = o.Editor.void(t, { at: s.path });
                if (!o.Range.isCollapsed(r) || u) {
                  var c = L.toDOMRange(t, r),
                    f = c.cloneContents(),
                    d = f.childNodes[0];
                  if (
                    (f.childNodes.forEach(function (e) {
                      e.textContent && "" !== e.textContent.trim() && (d = e);
                    }),
                    l)
                  ) {
                    var v = y(l, 1)[0],
                      h = c.cloneRange(),
                      p = L.toDOMNode(t, v);
                    h.setEndAfter(p), (f = h.cloneContents());
                  }
                  if (
                    (u && (d = f.querySelector("[data-slate-spacer]")),
                    Array.from(
                      f.querySelectorAll("[data-slate-zero-width]")
                    ).forEach(function (e) {
                      var t = "n" === e.getAttribute("data-slate-zero-width");
                      e.textContent = t ? "\n" : "";
                    }),
                    M(d))
                  ) {
                    var g = document.createElement("span");
                    (g.style.whiteSpace = "pre"),
                      g.appendChild(d),
                      f.appendChild(g),
                      (d = g);
                  }
                  var m = t.getFragment(),
                    w = JSON.stringify(m),
                    b = window.btoa(encodeURIComponent(w));
                  d.setAttribute("data-slate-fragment", b),
                    e.setData("application/x-slate-fragment", b);
                  var E = document.createElement("div");
                  E.appendChild(f),
                    E.setAttribute("hidden", "true"),
                    document.body.appendChild(E),
                    e.setData("text/html", E.innerHTML),
                    e.setData("text/plain", _(E)),
                    document.body.removeChild(E);
                }
              }
            }),
            (t.insertData = function (e) {
              var r = e.getData("application/x-slate-fragment");
              if (r) {
                var n = decodeURIComponent(window.atob(r)),
                  a = JSON.parse(n);
                t.insertFragment(a);
              } else {
                var i = e.getData("text/plain");
                if (i) {
                  var s = i.split(/\r\n|\r|\n/),
                    u = !1,
                    l = !0,
                    c = !1,
                    f = void 0;
                  try {
                    for (
                      var d, v = s[Symbol.iterator]();
                      !(l = (d = v.next()).done);
                      l = !0
                    ) {
                      var h = d.value;
                      u && o.Transforms.splitNodes(t, { always: !0 }),
                        t.insertText(h),
                        (u = !0);
                    }
                  } catch (e) {
                    (c = !0), (f = e);
                  } finally {
                    try {
                      l || null == v.return || v.return();
                    } finally {
                      if (c) throw f;
                    }
                  }
                }
              }
            }),
            (t.onChange = function () {
              p.default.unstable_batchedUpdates(function () {
                var e = j.get(t);
                e && e(), n();
              });
            }),
            t
          );
        });
    },
    84792: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(49424),
        o = r(78181),
        a = r(87219);
      function i(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      }
      var s = i(n),
        u = function (e) {
          return (
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, r = new Array(e.length); t < e.length; t++)
                  r[t] = e[t];
                return r;
              }
            })(e) ||
            (function (e) {
              if (
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
                return Array.from(e);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            })()
          );
        },
        l = function (e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              if (
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              ) {
                var r = [],
                  n = !0,
                  o = !1,
                  a = void 0;
                try {
                  for (
                    var i, s = e[Symbol.iterator]();
                    !(n = (i = s.next()).done) &&
                    (r.push(i.value), !t || r.length !== t);
                    n = !0
                  );
                } catch (e) {
                  (o = !0), (a = e);
                } finally {
                  try {
                    n || null == s.return || s.return();
                  } finally {
                    if (o) throw a;
                  }
                }
                return r;
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            })()
          );
        },
        c = function (e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        },
        f = function (e, t) {
          if (null == e) return {};
          var r,
            n,
            o = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = {},
                a = Object.keys(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]),
                t.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (o[r] = e[r]));
          }
          return o;
        },
        d = new WeakMap(),
        v = new WeakMap(),
        h = new WeakMap(),
        p = new WeakMap(),
        g = new WeakMap(),
        y = new WeakMap(),
        m = /\s/,
        w =
          /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
        b = /['\u2018\u2019]/,
        E = function (e) {
          for (var t = 0, r = null, n = e.charCodeAt(0); n; )
            if (P(n)) {
              var o = k(n, e, t);
              if ("SURR" === r || "BMP" === r) break;
              (t += 2), (r = o ? "MOD" : "SURR"), (n = e.charCodeAt(t));
            } else if (8205 !== n)
              if (S(n)) {
                if (r && "ZWJ" !== r && "VAR" !== r) break;
                (t += 1), (r = "BMP"), (n = e.charCodeAt(t));
              } else {
                if (!F(n)) {
                  if ("MOD" === r) {
                    t += 1;
                    break;
                  }
                  break;
                }
                if (r && "ZWJ" !== r) break;
                (t += 1), (r = "VAR"), (n = e.charCodeAt(t));
              }
            else (t += 1), (r = "ZWJ"), (n = e.charCodeAt(t));
          return t || 1;
        },
        x = function (e) {
          for (var t, r = 0, n = 0, o = !1; (t = e.charAt(n)); ) {
            var a = E(t);
            t = e.slice(n, n + a);
            var i = e.slice(n + a);
            if (O(t, i)) (o = !0), (r += a);
            else {
              if (o) break;
              r += a;
            }
            n += a;
          }
          return r;
        },
        O = function e(t, r) {
          if (m.test(t)) return !1;
          if (b.test(t)) {
            var n = r.charAt(0),
              o = E(n);
            if (e((n = r.slice(0, o)), r.slice(o))) return !0;
          }
          return !w.test(t);
        },
        P = function (e) {
          return 55296 <= e && e <= 57343;
        },
        k = function (e, t, r) {
          if (55356 === e) {
            var n = t.charCodeAt(r + 1);
            return n <= 57343 && n >= 57339;
          }
          return !1;
        },
        F = function (e) {
          return e <= 65039 && e >= 65024;
        },
        S = function (e) {
          return (
            10084 === e ||
            9794 === e ||
            9792 === e ||
            9760 === e ||
            9877 === e ||
            9992 === e ||
            9711 === e
          );
        };
      function D(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var C = {
          above: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.voids,
              n = void 0 !== r && r,
              o = t.mode,
              a = void 0 === o ? "lowest" : o,
              i = t.at,
              s = void 0 === i ? e.selection : i,
              u = t.match;
            if (s) {
              var c = C.path(e, s),
                f = "lowest" === a,
                d = !0,
                v = !1,
                h = void 0;
              try {
                for (
                  var p,
                    g = C.levels(e, { at: c, voids: n, match: u, reverse: f })[
                      Symbol.iterator
                    ]();
                  !(d = (p = g.next()).done);
                  d = !0
                ) {
                  var y = l(p.value, 2),
                    m = y[0],
                    w = y[1];
                  if (!Y.isText(m) && !L.equals(c, w)) return [m, w];
                }
              } catch (e) {
                (v = !0), (h = e);
              } finally {
                try {
                  d || null == g.return || g.return();
                } finally {
                  if (v) throw h;
                }
              }
            }
          },
          addMark: function (e, t, r) {
            e.addMark(t, r);
          },
          after: function (e, t) {
            var r,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              o = C.point(e, t, { edge: "end" }),
              a = C.end(e, []),
              i = { anchor: o, focus: a },
              s = n.distance,
              u = void 0 === s ? 1 : s,
              l = 0,
              c = !0,
              f = !1,
              d = void 0;
            try {
              for (
                var v,
                  h = C.positions(e, A({}, n, { at: i }))[Symbol.iterator]();
                !(c = (v = h.next()).done);
                c = !0
              ) {
                var p = v.value;
                if (l > u) break;
                0 !== l && (r = p), l++;
              }
            } catch (e) {
              (f = !0), (d = e);
            } finally {
              try {
                c || null == h.return || h.return();
              } finally {
                if (f) throw d;
              }
            }
            return r;
          },
          before: function (e, t) {
            var r,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              o = C.start(e, []),
              a = C.point(e, t, { edge: "start" }),
              i = { anchor: o, focus: a },
              s = n.distance,
              u = void 0 === s ? 1 : s,
              l = 0,
              c = !0,
              f = !1,
              d = void 0;
            try {
              for (
                var v,
                  h = C.positions(e, A({}, n, { at: i, reverse: !0 }))[
                    Symbol.iterator
                  ]();
                !(c = (v = h.next()).done);
                c = !0
              ) {
                var p = v.value;
                if (l > u) break;
                0 !== l && (r = p), l++;
              }
            } catch (e) {
              (f = !0), (d = e);
            } finally {
              try {
                c || null == h.return || h.return();
              } finally {
                if (f) throw d;
              }
            }
            return r;
          },
          deleteBackward: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.unit,
              n = void 0 === r ? "character" : r;
            e.deleteBackward(n);
          },
          deleteForward: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.unit,
              n = void 0 === r ? "character" : r;
            e.deleteForward(n);
          },
          deleteFragment: function (e) {
            e.deleteFragment();
          },
          edges: function (e, t) {
            return [C.start(e, t), C.end(e, t)];
          },
          end: function (e, t) {
            return C.point(e, t, { edge: "end" });
          },
          first: function (e, t) {
            var r = C.path(e, t, { edge: "start" });
            return C.node(e, r);
          },
          fragment: function (e, t) {
            var r = C.range(e, t);
            return R.fragment(e, r);
          },
          hasBlocks: function (e, t) {
            return t.children.some(function (t) {
              return C.isBlock(e, t);
            });
          },
          hasInlines: function (e, t) {
            return t.children.some(function (t) {
              return Y.isText(t) || C.isInline(e, t);
            });
          },
          hasTexts: function (e, t) {
            return t.children.every(function (e) {
              return Y.isText(e);
            });
          },
          insertBreak: function (e) {
            e.insertBreak();
          },
          insertFragment: function (e, t) {
            e.insertFragment(t);
          },
          insertNode: function (e, t) {
            e.insertNode(t);
          },
          insertText: function (e, t) {
            e.insertText(t);
          },
          isBlock: function (e, t) {
            return j.isElement(t) && !e.isInline(t);
          },
          isEditor: function (e) {
            return (
              s.default(e) &&
              "function" == typeof e.addMark &&
              "function" == typeof e.apply &&
              "function" == typeof e.deleteBackward &&
              "function" == typeof e.deleteForward &&
              "function" == typeof e.deleteFragment &&
              "function" == typeof e.insertBreak &&
              "function" == typeof e.insertFragment &&
              "function" == typeof e.insertNode &&
              "function" == typeof e.insertText &&
              "function" == typeof e.isInline &&
              "function" == typeof e.isVoid &&
              "function" == typeof e.normalizeNode &&
              "function" == typeof e.onChange &&
              "function" == typeof e.removeMark &&
              (null === e.marks || s.default(e.marks)) &&
              (null === e.selection || H.isRange(e.selection)) &&
              R.isNodeList(e.children) &&
              _.isOperationList(e.operations)
            );
          },
          isEnd: function (e, t, r) {
            var n = C.end(e, r);
            return q.equals(t, n);
          },
          isEdge: function (e, t, r) {
            return C.isStart(e, t, r) || C.isEnd(e, t, r);
          },
          isEmpty: function (e, t) {
            var r = t.children,
              n = l(r, 1)[0];
            return (
              0 === r.length ||
              (1 === r.length && Y.isText(n) && "" === n.text && !e.isVoid(t))
            );
          },
          isInline: function (e, t) {
            return j.isElement(t) && e.isInline(t);
          },
          isNormalizing: function (e) {
            var t = h.get(e);
            return void 0 === t || t;
          },
          isStart: function (e, t, r) {
            if (0 !== t.offset) return !1;
            var n = C.start(e, r);
            return q.equals(t, n);
          },
          isVoid: function (e, t) {
            return j.isElement(t) && e.isVoid(t);
          },
          last: function (e, t) {
            var r = C.path(e, t, { edge: "end" });
            return C.node(e, r);
          },
          leaf: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = C.path(e, t, r),
              o = R.leaf(e, n);
            return [o, n];
          },
          levels: function* (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.at,
              n = void 0 === r ? e.selection : r,
              o = t.reverse,
              a = void 0 !== o && o,
              i = t.voids,
              s = void 0 !== i && i,
              u = t.match;
            if (
              (null == u &&
                (u = function () {
                  return !0;
                }),
              n)
            ) {
              var c = [],
                f = C.path(e, n),
                d = !0,
                v = !1,
                h = void 0;
              try {
                for (
                  var p, g = R.levels(e, f)[Symbol.iterator]();
                  !(d = (p = g.next()).done);
                  d = !0
                ) {
                  var y = l(p.value, 2),
                    m = y[0],
                    w = y[1];
                  if (u(m) && (c.push([m, w]), !s && C.isVoid(e, m))) break;
                }
              } catch (e) {
                (v = !0), (h = e);
              } finally {
                try {
                  d || null == g.return || g.return();
                } finally {
                  if (v) throw h;
                }
              }
              a && c.reverse(), yield* c;
            }
          },
          marks: function (e) {
            var t = e.marks,
              r = e.selection;
            if (!r) return null;
            if (t) return t;
            if (H.isExpanded(r)) {
              var n = C.nodes(e, { match: Y.isText }),
                o = l(n, 1)[0];
              if (o) {
                var a = l(o, 1)[0];
                return a.text, f(a, ["text"]);
              }
              return {};
            }
            var i = r.anchor,
              s = i.path,
              u = C.leaf(e, s),
              c = l(u, 1)[0];
            if (0 === i.offset) {
              var d = C.previous(e, { at: s, match: Y.isText }),
                v = C.above(e, {
                  match: function (t) {
                    return C.isBlock(e, t);
                  },
                });
              if (d && v) {
                var h = l(d, 2),
                  p = h[0],
                  g = h[1],
                  y = l(v, 2)[1];
                L.isAncestor(y, g) && (c = p);
              }
            }
            var m = c;
            return m.text, f(m, ["text"]);
          },
          next: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.mode,
              n = void 0 === r ? "lowest" : r,
              o = t.voids,
              a = void 0 !== o && o,
              i = t.match,
              s = t.at,
              u = void 0 === s ? e.selection : s;
            if (u) {
              var c = C.last(e, u),
                f = l(c, 2),
                d = f[1],
                v = C.last(e, []),
                h = l(v, 2),
                p = h[1],
                g = [d, p];
              if (L.isPath(u) && 0 === u.length)
                throw new Error("Cannot get the next node from the root node!");
              if (null == i)
                if (L.isPath(u)) {
                  var y = C.parent(e, u),
                    m = l(y, 1),
                    w = m[0];
                  i = function (e) {
                    return w.children.includes(e);
                  };
                } else
                  i = function () {
                    return !0;
                  };
              var b = C.nodes(e, { at: g, match: i, mode: n, voids: a }),
                E = l(b, 2),
                x = E[1];
              return x;
            }
          },
          node: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = C.path(e, t, r),
              o = R.get(e, n);
            return [o, n];
          },
          nodes: function* (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.at,
              n = void 0 === r ? e.selection : r,
              o = t.mode,
              a = void 0 === o ? "all" : o,
              i = t.universal,
              s = void 0 !== i && i,
              u = t.reverse,
              c = void 0 !== u && u,
              f = t.voids,
              d = void 0 !== f && f,
              v = t.match;
            if (
              (v ||
                (v = function () {
                  return !0;
                }),
              n)
            ) {
              var h, p;
              if (N.isSpan(n)) (h = n[0]), (p = n[1]);
              else {
                var g = C.path(e, n, { edge: "start" }),
                  y = C.path(e, n, { edge: "end" });
                (h = c ? y : g), (p = c ? g : y);
              }
              var m,
                w = R.nodes(e, {
                  reverse: c,
                  from: h,
                  to: p,
                  pass: function (t) {
                    var r = l(t, 1)[0];
                    return !d && C.isVoid(e, r);
                  },
                }),
                b = [],
                E = !0,
                x = !1,
                O = void 0;
              try {
                for (
                  var P, k = w[Symbol.iterator]();
                  !(E = (P = k.next()).done);
                  E = !0
                ) {
                  var F = l(P.value, 2),
                    S = F[0],
                    D = F[1],
                    A = m && 0 === L.compare(D, m[1]);
                  if ("highest" !== a || !A)
                    if (v(S))
                      if ("lowest" === a && A) m = [S, D];
                      else {
                        var j = "lowest" === a ? m : [S, D];
                        j && (s ? b.push(j) : yield j), (m = [S, D]);
                      }
                    else if (s && !A && Y.isText(S)) return;
                }
              } catch (e) {
                (x = !0), (O = e);
              } finally {
                try {
                  E || null == k.return || k.return();
                } finally {
                  if (x) throw O;
                }
              }
              "lowest" === a && m && (s ? b.push(m) : yield m), s && (yield* b);
            }
          },
          normalize: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.force,
              n = void 0 !== r && r,
              o = function (e) {
                return d.get(e) || [];
              };
            if (C.isNormalizing(e)) {
              if (n) {
                var a = Array.from(R.nodes(e), function (e) {
                  return l(e, 2)[1];
                });
                d.set(e, a);
              }
              0 !== o(e).length &&
                C.withoutNormalizing(e, function () {
                  for (var t = 42 * o(e).length, r = 0; 0 !== o(e).length; ) {
                    if (r > t)
                      throw new Error(
                        "\n            Could not completely normalize the editor after ".concat(
                          t,
                          " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "
                        )
                      );
                    var n = o(e).pop(),
                      a = C.node(e, n);
                    e.normalizeNode(a), r++;
                  }
                });
            }
          },
          parent: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = C.path(e, t, r),
              o = L.parent(n),
              a = C.node(e, o);
            return a;
          },
          path: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = r.depth,
              o = r.edge;
            if (L.isPath(t))
              if ("start" === o) {
                var a = R.first(e, t),
                  i = l(a, 2),
                  s = i[1];
                t = s;
              } else if ("end" === o) {
                var u = R.last(e, t),
                  c = l(u, 2),
                  f = c[1];
                t = f;
              }
            return (
              H.isRange(t) &&
                (t =
                  "start" === o
                    ? H.start(t)
                    : "end" === o
                    ? H.end(t)
                    : L.common(t.anchor.path, t.focus.path)),
              q.isPoint(t) && (t = t.path),
              null != n && (t = t.slice(0, n)),
              t
            );
          },
          pathRef: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = r.affinity,
              o = void 0 === n ? "forward" : n,
              a = {
                current: t,
                affinity: o,
                unref: function () {
                  var t = a.current;
                  return C.pathRefs(e).delete(a), (a.current = null), t;
                },
              },
              i = C.pathRefs(e);
            return i.add(a), a;
          },
          pathRefs: function (e) {
            var t = p.get(e);
            return t || ((t = new Set()), p.set(e, t)), t;
          },
          point: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = r.edge,
              o = void 0 === n ? "start" : n;
            if (L.isPath(t)) {
              var a;
              if ("end" === o) {
                var i = R.last(e, t),
                  s = l(i, 2),
                  u = s[1];
                a = u;
              } else {
                var c = R.first(e, t),
                  f = l(c, 2),
                  d = f[1];
                a = d;
              }
              var v = R.get(e, a);
              if (!Y.isText(v))
                throw new Error(
                  "Cannot get the "
                    .concat(o, " point in the node at path [")
                    .concat(t, "] because it has no ")
                    .concat(o, " text node.")
                );
              return { path: a, offset: "end" === o ? v.text.length : 0 };
            }
            if (H.isRange(t)) {
              var h = H.edges(t),
                p = l(h, 2),
                g = p[0],
                y = p[1];
              return "start" === o ? g : y;
            }
            return t;
          },
          pointRef: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = r.affinity,
              o = void 0 === n ? "forward" : n,
              a = {
                current: t,
                affinity: o,
                unref: function () {
                  var t = a.current;
                  return C.pointRefs(e).delete(a), (a.current = null), t;
                },
              },
              i = C.pointRefs(e);
            return i.add(a), a;
          },
          pointRefs: function (e) {
            var t = g.get(e);
            return t || ((t = new Set()), g.set(e, t)), t;
          },
          positions: function* (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.at,
              n = void 0 === r ? e.selection : r,
              a = t.unit,
              i = void 0 === a ? "offset" : a,
              s = t.reverse,
              u = void 0 !== s && s;
            if (n) {
              var c = C.range(e, n),
                f = H.edges(c),
                d = l(f, 2),
                v = d[0],
                h = d[1],
                p = u ? h : v,
                g = "",
                y = 0,
                m = 0,
                w = null,
                b = !1,
                O = function () {
                  null == w &&
                    ((w =
                      "character" === i
                        ? E(g)
                        : "word" === i
                        ? x(g)
                        : "line" === i || "block" === i
                        ? g.length
                        : 1),
                    (g = g.slice(w))),
                    (m = u ? m - w : m + w),
                    (w = (y -= w) >= 0 ? null : 0 - y);
                },
                P = !0,
                k = !1,
                F = void 0;
              try {
                for (
                  var S,
                    D = C.nodes(e, { at: n, reverse: u })[Symbol.iterator]();
                  !(P = (S = D.next()).done);
                  P = !0
                ) {
                  var A = l(S.value, 2),
                    B = A[0],
                    N = A[1];
                  if (j.isElement(B)) {
                    if (e.isVoid(B)) {
                      yield C.start(e, N);
                      continue;
                    }
                    if (e.isInline(B)) continue;
                    if (C.hasInlines(e, B)) {
                      var R = L.isAncestor(N, h.path) ? h : C.end(e, N),
                        M = L.isAncestor(N, v.path) ? v : C.start(e, N),
                        T = C.string(e, { anchor: M, focus: R });
                      (g = u ? o.reverse(T) : T), (b = !0);
                    }
                  }
                  if (Y.isText(B)) {
                    var _ = L.equals(N, p.path);
                    for (
                      y = B.text.length,
                        m = u ? y : 0,
                        _ &&
                          ((y = u ? p.offset : y - p.offset), (m = p.offset)),
                        (_ || b || "offset" === i) &&
                          (yield { path: N, offset: m });
                      "" !== g && (O(), y >= 0);

                    )
                      yield { path: N, offset: m };
                    b = !1;
                  }
                }
              } catch (e) {
                (k = !0), (F = e);
              } finally {
                try {
                  P || null == D.return || D.return();
                } finally {
                  if (k) throw F;
                }
              }
            }
          },
          previous: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.mode,
              n = void 0 === r ? "lowest" : r,
              o = t.voids,
              a = void 0 !== o && o,
              i = t.match,
              s = t.at,
              u = void 0 === s ? e.selection : s;
            if (u) {
              var c = C.first(e, u),
                f = l(c, 2),
                d = f[1],
                v = C.first(e, []),
                h = l(v, 2),
                p = h[1],
                g = [d, p];
              if (L.isPath(u) && 0 === u.length)
                throw new Error(
                  "Cannot get the previous node from the root node!"
                );
              if (null == i)
                if (L.isPath(u)) {
                  var y = C.parent(e, u),
                    m = l(y, 1),
                    w = m[0];
                  i = function (e) {
                    return w.children.includes(e);
                  };
                } else
                  i = function () {
                    return !0;
                  };
              var b = C.nodes(e, {
                  reverse: !0,
                  at: g,
                  match: i,
                  mode: n,
                  voids: a,
                }),
                E = l(b, 2),
                x = E[1];
              return x;
            }
          },
          range: function (e, t, r) {
            return H.isRange(t) && !r
              ? t
              : { anchor: C.start(e, t), focus: C.end(e, r || t) };
          },
          rangeRef: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = r.affinity,
              o = void 0 === n ? "forward" : n,
              a = {
                current: t,
                affinity: o,
                unref: function () {
                  var t = a.current;
                  return C.rangeRefs(e).delete(a), (a.current = null), t;
                },
              },
              i = C.rangeRefs(e);
            return i.add(a), a;
          },
          rangeRefs: function (e) {
            var t = y.get(e);
            return t || ((t = new Set()), y.set(e, t)), t;
          },
          removeMark: function (e, t) {
            e.removeMark(t);
          },
          start: function (e, t) {
            return C.point(e, t, { edge: "start" });
          },
          string: function (e, t) {
            var r = C.range(e, t),
              n = H.edges(r),
              o = l(n, 2),
              a = o[0],
              i = o[1],
              s = "",
              u = !0,
              c = !1,
              f = void 0;
            try {
              for (
                var d,
                  v = C.nodes(e, { at: r, match: Y.isText })[Symbol.iterator]();
                !(u = (d = v.next()).done);
                u = !0
              ) {
                var h = l(d.value, 2),
                  p = h[0],
                  g = h[1],
                  y = p.text;
                L.equals(g, i.path) && (y = y.slice(0, i.offset)),
                  L.equals(g, a.path) && (y = y.slice(a.offset)),
                  (s += y);
              }
            } catch (e) {
              (c = !0), (f = e);
            } finally {
              try {
                u || null == v.return || v.return();
              } finally {
                if (c) throw f;
              }
            }
            return s;
          },
          unhangRange: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = r.voids,
              o = void 0 !== n && n,
              a = H.edges(t),
              i = l(a, 2),
              s = i[0],
              u = i[1];
            if (0 !== s.offset || 0 !== u.offset || H.isCollapsed(t)) return t;
            var c = C.above(e, {
                at: u,
                match: function (t) {
                  return C.isBlock(e, t);
                },
              }),
              f = c ? c[1] : [],
              d = C.start(e, []),
              v = { anchor: d, focus: u },
              h = !0,
              p = !0,
              g = !1,
              y = void 0;
            try {
              for (
                var m,
                  w = C.nodes(e, {
                    at: v,
                    match: Y.isText,
                    reverse: !0,
                    voids: o,
                  })[Symbol.iterator]();
                !(p = (m = w.next()).done);
                p = !0
              ) {
                var b = l(m.value, 2),
                  E = b[0],
                  x = b[1];
                if (h) h = !1;
                else if ("" !== E.text || L.isBefore(x, f)) {
                  u = { path: x, offset: E.text.length };
                  break;
                }
              }
            } catch (e) {
              (g = !0), (y = e);
            } finally {
              try {
                p || null == w.return || w.return();
              } finally {
                if (g) throw y;
              }
            }
            return { anchor: s, focus: u };
          },
          void: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return C.above(
              e,
              A({}, t, {
                match: function (t) {
                  return C.isVoid(e, t);
                },
              })
            );
          },
          withoutNormalizing: function (e, t) {
            var r = C.isNormalizing(e);
            h.set(e, !1), t(), h.set(e, r), C.normalize(e);
          },
        },
        j = {
          isElement: function (e) {
            return s.default(e) && R.isNodeList(e.children) && !C.isEditor(e);
          },
          isElementList: function (e) {
            return Array.isArray(e) && (0 === e.length || j.isElement(e[0]));
          },
          matches: function (e, t) {
            for (var r in t) if ("children" !== r && e[r] !== t[r]) return !1;
            return !0;
          },
        },
        B = {
          isLocation: function (e) {
            return L.isPath(e) || q.isPoint(e) || H.isRange(e);
          },
        },
        N = {
          isSpan: function (e) {
            return Array.isArray(e) && 2 === e.length && e.every(L.isPath);
          },
        },
        R = {
          ancestor: function (e, t) {
            var r = R.get(e, t);
            if (Y.isText(r))
              throw new Error(
                "Cannot get the ancestor node at path ["
                  .concat(t, "] because it refers to a text node instead: ")
                  .concat(r)
              );
            return r;
          },
          ancestors: function* (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, s = L.ancestors(t, r)[Symbol.iterator]();
                !(n = (i = s.next()).done);
                n = !0
              ) {
                var u = i.value,
                  l = R.ancestor(e, u),
                  c = [l, u];
                yield c;
              }
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (o) throw a;
              }
            }
          },
          child: function (e, t) {
            if (Y.isText(e))
              throw new Error(
                "Cannot get the child of a text node: ".concat(
                  JSON.stringify(e)
                )
              );
            var r = e.children[t];
            if (null == r)
              throw new Error(
                "Cannot get child at index `"
                  .concat(t, "` in node: ")
                  .concat(JSON.stringify(e))
              );
            return r;
          },
          children: function* (e, t) {
            for (
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                n = r.reverse,
                o = void 0 !== n && n,
                a = R.ancestor(e, t),
                i = a.children,
                s = o ? i.length - 1 : 0;
              o ? s >= 0 : s < i.length;

            ) {
              var u = R.child(a, s),
                l = t.concat(s);
              yield [u, l], (s = o ? s - 1 : s + 1);
            }
          },
          common: function (e, t, r) {
            var n = L.common(t, r);
            return [R.get(e, n), n];
          },
          descendant: function (e, t) {
            var r = R.get(e, t);
            if (C.isEditor(r))
              throw new Error(
                "Cannot get the descendant node at path ["
                  .concat(
                    t,
                    "] because it refers to the root editor node instead: "
                  )
                  .concat(r)
              );
            return r;
          },
          descendants: function* (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = !0,
              n = !1,
              o = void 0;
            try {
              for (
                var a, i = R.nodes(e, t)[Symbol.iterator]();
                !(r = (a = i.next()).done);
                r = !0
              ) {
                var s = l(a.value, 2),
                  u = s[0],
                  c = s[1];
                0 !== c.length && (yield [u, c]);
              }
            } catch (e) {
              (n = !0), (o = e);
            } finally {
              try {
                r || null == i.return || i.return();
              } finally {
                if (n) throw o;
              }
            }
          },
          elements: function* (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = !0,
              n = !1,
              o = void 0;
            try {
              for (
                var a, i = R.nodes(e, t)[Symbol.iterator]();
                !(r = (a = i.next()).done);
                r = !0
              ) {
                var s = l(a.value, 2),
                  u = s[0],
                  c = s[1];
                j.isElement(u) && (yield [u, c]);
              }
            } catch (e) {
              (n = !0), (o = e);
            } finally {
              try {
                r || null == i.return || i.return();
              } finally {
                if (n) throw o;
              }
            }
          },
          first: function (e, t) {
            for (
              var r = t.slice(), n = R.get(e, r);
              n && !Y.isText(n) && 0 !== n.children.length;

            )
              (n = n.children[0]), r.push(0);
            return [n, r];
          },
          fragment: function (e, t) {
            if (Y.isText(e))
              throw new Error(
                "Cannot get a fragment starting from a root text node: ".concat(
                  JSON.stringify(e)
                )
              );
            return a.produce(e, function (e) {
              var r = H.edges(t),
                n = l(r, 2),
                o = n[0],
                a = n[1],
                i = R.nodes(e, {
                  reverse: !0,
                  pass: function (e) {
                    var r = l(e, 2)[1];
                    return !H.includes(t, r);
                  },
                }),
                s = !0,
                u = !1,
                c = void 0;
              try {
                for (
                  var f, d = i[Symbol.iterator]();
                  !(s = (f = d.next()).done);
                  s = !0
                ) {
                  var v = l(f.value, 2)[1];
                  if (!H.includes(t, v)) {
                    var h = R.parent(e, v),
                      p = v[v.length - 1];
                    h.children.splice(p, 1);
                  }
                  if (L.equals(v, a.path)) {
                    var g = R.leaf(e, v);
                    g.text = g.text.slice(0, a.offset);
                  }
                  if (L.equals(v, o.path)) {
                    var y = R.leaf(e, v);
                    y.text = y.text.slice(o.offset);
                  }
                }
              } catch (e) {
                (u = !0), (c = e);
              } finally {
                try {
                  s || null == d.return || d.return();
                } finally {
                  if (u) throw c;
                }
              }
              delete e.selection;
            }).children;
          },
          get: function (e, t) {
            for (var r = e, n = 0; n < t.length; n++) {
              var o = t[n];
              if (Y.isText(r) || !r.children[o])
                throw new Error(
                  "Cannot find a descendant at path ["
                    .concat(t, "] in node: ")
                    .concat(JSON.stringify(e))
                );
              r = r.children[o];
            }
            return r;
          },
          has: function (e, t) {
            for (var r = e, n = 0; n < t.length; n++) {
              var o = t[n];
              if (Y.isText(r) || !r.children[o]) return !1;
              r = r.children[o];
            }
            return !0;
          },
          isNode: function (e) {
            return Y.isText(e) || j.isElement(e) || C.isEditor(e);
          },
          isNodeList: function (e) {
            return Array.isArray(e) && (0 === e.length || R.isNode(e[0]));
          },
          last: function (e, t) {
            for (
              var r = t.slice(), n = R.get(e, r);
              n && !Y.isText(n) && 0 !== n.children.length;

            ) {
              var o = n.children.length - 1;
              (n = n.children[o]), r.push(o);
            }
            return [n, r];
          },
          leaf: function (e, t) {
            var r = R.get(e, t);
            if (!Y.isText(r))
              throw new Error(
                "Cannot get the leaf node at path ["
                  .concat(t, "] because it refers to a non-leaf node: ")
                  .concat(r)
              );
            return r;
          },
          levels: function* (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, s = L.levels(t, r)[Symbol.iterator]();
                !(n = (i = s.next()).done);
                n = !0
              ) {
                var u = i.value,
                  l = R.get(e, u);
                yield [l, u];
              }
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (o) throw a;
              }
            }
          },
          matches: function (e, t) {
            return (
              (j.isElement(e) && j.matches(e, t)) ||
              (Y.isText(e) && Y.matches(e, t))
            );
          },
          nodes: function* (e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = t.pass,
                n = t.reverse,
                o = void 0 !== n && n,
                a = t.from,
                i = void 0 === a ? [] : a,
                s = t.to,
                u = new Set(),
                l = [],
                c = e;
              !s || !(o ? L.isBefore(l, s) : L.isAfter(l, s));

            )
              if (
                (u.has(c) || (yield [c, l]),
                u.has(c) ||
                  Y.isText(c) ||
                  0 === c.children.length ||
                  (null != r && !1 !== r([c, l])))
              ) {
                if (0 === l.length) break;
                if (!o) {
                  var f = L.next(l);
                  if (R.has(e, f)) {
                    (l = f), (c = R.get(e, l));
                    continue;
                  }
                }
                if (o && 0 !== l[l.length - 1]) {
                  var d = L.previous(l);
                  (l = d), (c = R.get(e, l));
                } else (l = L.parent(l)), (c = R.get(e, l)), u.add(c);
              } else {
                u.add(c);
                var v = o ? c.children.length - 1 : 0;
                L.isAncestor(l, i) && (v = i[l.length]),
                  (l = l.concat(v)),
                  (c = R.get(e, l));
              }
          },
          parent: function (e, t) {
            var r = L.parent(t),
              n = R.get(e, r);
            if (Y.isText(n))
              throw new Error(
                "Cannot get the parent of path [".concat(
                  t,
                  "] because it does not exist in the root."
                )
              );
            return n;
          },
          string: function (e) {
            return Y.isText(e) ? e.text : e.children.map(R.string).join("");
          },
          texts: function* (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = !0,
              n = !1,
              o = void 0;
            try {
              for (
                var a, i = R.nodes(e, t)[Symbol.iterator]();
                !(r = (a = i.next()).done);
                r = !0
              ) {
                var s = l(a.value, 2),
                  u = s[0],
                  c = s[1];
                Y.isText(u) && (yield [u, c]);
              }
            } catch (e) {
              (n = !0), (o = e);
            } finally {
              try {
                r || null == i.return || i.return();
              } finally {
                if (n) throw o;
              }
            }
          },
        };
      function M(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : M(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var _ = {
          isNodeOperation: function (e) {
            return _.isOperation(e) && e.type.endsWith("_node");
          },
          isOperation: function (e) {
            if (!s.default(e)) return !1;
            switch (e.type) {
              case "insert_node":
                return L.isPath(e.path) && R.isNode(e.node);
              case "insert_text":
                return (
                  "number" == typeof e.offset &&
                  "string" == typeof e.text &&
                  L.isPath(e.path)
                );
              case "merge_node":
                return (
                  "number" == typeof e.position &&
                  L.isPath(e.path) &&
                  s.default(e.properties)
                );
              case "move_node":
                return L.isPath(e.path) && L.isPath(e.newPath);
              case "remove_node":
                return L.isPath(e.path) && R.isNode(e.node);
              case "remove_text":
                return (
                  "number" == typeof e.offset &&
                  "string" == typeof e.text &&
                  L.isPath(e.path)
                );
              case "set_node":
                return (
                  L.isPath(e.path) &&
                  s.default(e.properties) &&
                  s.default(e.newProperties)
                );
              case "set_selection":
                return (
                  (null === e.properties && H.isRange(e.newProperties)) ||
                  (null === e.newProperties && H.isRange(e.properties)) ||
                  (s.default(e.properties) && s.default(e.newProperties))
                );
              case "split_node":
                return (
                  L.isPath(e.path) &&
                  "number" == typeof e.position &&
                  s.default(e.properties)
                );
              default:
                return !1;
            }
          },
          isOperationList: function (e) {
            return Array.isArray(e) && (0 === e.length || _.isOperation(e[0]));
          },
          isSelectionOperation: function (e) {
            return _.isOperation(e) && e.type.endsWith("_selection");
          },
          isTextOperation: function (e) {
            return _.isOperation(e) && e.type.endsWith("_text");
          },
          inverse: function (e) {
            switch (e.type) {
              case "insert_node":
                return T({}, e, { type: "remove_node" });
              case "insert_text":
                return T({}, e, { type: "remove_text" });
              case "merge_node":
                return T({}, e, {
                  type: "split_node",
                  path: L.previous(e.path),
                });
              case "move_node":
                var t = e.newPath,
                  r = e.path;
                return L.equals(t, r)
                  ? e
                  : L.isSibling(r, t)
                  ? T({}, e, { path: t, newPath: r })
                  : T({}, e, {
                      path: L.transform(r, e),
                      newPath: L.transform(L.next(r), e),
                    });
              case "remove_node":
                return T({}, e, { type: "insert_node" });
              case "remove_text":
                return T({}, e, { type: "insert_text" });
              case "set_node":
                var n = e.properties;
                return T({}, e, {
                  properties: e.newProperties,
                  newProperties: n,
                });
              case "set_selection":
                var o = e.properties,
                  a = e.newProperties;
                return T(
                  {},
                  e,
                  null == o
                    ? { properties: a, newProperties: null }
                    : null == a
                    ? { properties: null, newProperties: o }
                    : { properties: a, newProperties: o }
                );
              case "split_node":
                return T({}, e, { type: "merge_node", path: L.next(e.path) });
            }
          },
        },
        L = {
          ancestors: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.reverse,
              n = void 0 !== r && r,
              o = L.levels(e, t);
            return n ? o.slice(1) : o.slice(0, -1);
          },
          common: function (e, t) {
            for (var r = [], n = 0; n < e.length && n < t.length; n++) {
              var o = e[n];
              if (o !== t[n]) break;
              r.push(o);
            }
            return r;
          },
          compare: function (e, t) {
            for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
              if (e[n] < t[n]) return -1;
              if (e[n] > t[n]) return 1;
            }
            return 0;
          },
          endsAfter: function (e, t) {
            var r = e.length - 1,
              n = e.slice(0, r),
              o = t.slice(0, r),
              a = e[r],
              i = t[r];
            return L.equals(n, o) && a > i;
          },
          endsAt: function (e, t) {
            var r = e.length,
              n = e.slice(0, r),
              o = t.slice(0, r);
            return L.equals(n, o);
          },
          endsBefore: function (e, t) {
            var r = e.length - 1,
              n = e.slice(0, r),
              o = t.slice(0, r),
              a = e[r],
              i = t[r];
            return L.equals(n, o) && a < i;
          },
          equals: function (e, t) {
            return (
              e.length === t.length &&
              e.every(function (e, r) {
                return e === t[r];
              })
            );
          },
          isAfter: function (e, t) {
            return 1 === L.compare(e, t);
          },
          isAncestor: function (e, t) {
            return e.length < t.length && 0 === L.compare(e, t);
          },
          isBefore: function (e, t) {
            return -1 === L.compare(e, t);
          },
          isChild: function (e, t) {
            return e.length === t.length + 1 && 0 === L.compare(e, t);
          },
          isCommon: function (e, t) {
            return e.length <= t.length && 0 === L.compare(e, t);
          },
          isDescendant: function (e, t) {
            return e.length > t.length && 0 === L.compare(e, t);
          },
          isParent: function (e, t) {
            return e.length + 1 === t.length && 0 === L.compare(e, t);
          },
          isPath: function (e) {
            return (
              Array.isArray(e) && (0 === e.length || "number" == typeof e[0])
            );
          },
          isSibling: function (e, t) {
            if (e.length !== t.length) return !1;
            var r = e.slice(0, -1),
              n = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && L.equals(r, n);
          },
          levels: function (e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = t.reverse,
                n = void 0 !== r && r,
                o = [],
                a = 0;
              a <= e.length;
              a++
            )
              o.push(e.slice(0, a));
            return n && o.reverse(), o;
          },
          next: function (e) {
            if (0 === e.length)
              throw new Error(
                "Cannot get the next path of a root path [".concat(
                  e,
                  "], because it has no next index."
                )
              );
            var t = e[e.length - 1];
            return e.slice(0, -1).concat(t + 1);
          },
          parent: function (e) {
            if (0 === e.length)
              throw new Error(
                "Cannot get the parent path of the root path [".concat(e, "].")
              );
            return e.slice(0, -1);
          },
          previous: function (e) {
            if (0 === e.length)
              throw new Error(
                "Cannot get the previous path of a root path [".concat(
                  e,
                  "], because it has no previous index."
                )
              );
            var t = e[e.length - 1];
            if (t <= 0)
              throw new Error(
                "Cannot get the previous path of a first child path [".concat(
                  e,
                  "] because it would result in a negative index."
                )
              );
            return e.slice(0, -1).concat(t - 1);
          },
          relative: function (e, t) {
            if (!L.isAncestor(t, e) && !L.equals(e, t))
              throw new Error(
                "Cannot get the relative path of ["
                  .concat(e, "] inside ancestor [")
                  .concat(t, "], because it is not above or equal to the path.")
              );
            return e.slice(t.length);
          },
          transform: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return a.produce(e, function (n) {
              var o = r.affinity,
                a = void 0 === o ? "forward" : o;
              if (0 !== e.length)
                switch (t.type) {
                  case "insert_node":
                    var i = t.path;
                    (L.equals(i, n) ||
                      L.endsBefore(i, n) ||
                      L.isAncestor(i, n)) &&
                      (n[i.length - 1] += 1);
                    break;
                  case "remove_node":
                    var s = t.path;
                    if (L.equals(s, n) || L.isAncestor(s, n)) return null;
                    L.endsBefore(s, n) && (n[s.length - 1] -= 1);
                    break;
                  case "merge_node":
                    var u = t.path,
                      l = t.position;
                    L.equals(u, n) || L.endsBefore(u, n)
                      ? (n[u.length - 1] -= 1)
                      : L.isAncestor(u, n) &&
                        ((n[u.length - 1] -= 1), (n[u.length] += l));
                    break;
                  case "split_node":
                    var c = t.path,
                      f = t.position;
                    if (L.equals(c, n)) {
                      if ("forward" === a) n[n.length - 1] += 1;
                      else if ("backward" !== a) return null;
                    } else
                      L.endsBefore(c, n)
                        ? (n[c.length - 1] += 1)
                        : L.isAncestor(c, n) &&
                          e[c.length] >= f &&
                          ((n[c.length - 1] += 1), (n[c.length] -= f));
                    break;
                  case "move_node":
                    var d = t.path,
                      v = t.newPath;
                    if (L.equals(d, v)) return;
                    if (L.isAncestor(d, n) || L.equals(d, n)) {
                      var h = v.slice();
                      return (
                        L.endsBefore(d, v) &&
                          d.length < v.length &&
                          (h[d.length - 1] -= 1),
                        h.concat(n.slice(d.length))
                      );
                    }
                    L.isSibling(d, v) && (L.isAncestor(v, n) || L.equals(v, n))
                      ? L.endsBefore(d, n)
                        ? (n[d.length - 1] -= 1)
                        : (n[d.length - 1] += 1)
                      : L.endsBefore(v, n) ||
                        L.equals(v, n) ||
                        L.isAncestor(v, n)
                      ? (L.endsBefore(d, n) && (n[d.length - 1] -= 1),
                        (n[v.length - 1] += 1))
                      : L.endsBefore(d, n) &&
                        (L.equals(v, n) && (n[v.length - 1] += 1),
                        (n[d.length - 1] -= 1));
                }
            });
          },
        },
        z = {
          transform: function (e, t) {
            var r = e.current,
              n = e.affinity;
            if (null != r) {
              var o = L.transform(r, t, { affinity: n });
              (e.current = o), null == o && e.unref();
            }
          },
        };
      function W(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : W(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var q = {
          compare: function (e, t) {
            var r = L.compare(e.path, t.path);
            return 0 === r
              ? e.offset < t.offset
                ? -1
                : e.offset > t.offset
                ? 1
                : 0
              : r;
          },
          isAfter: function (e, t) {
            return 1 === q.compare(e, t);
          },
          isBefore: function (e, t) {
            return -1 === q.compare(e, t);
          },
          equals: function (e, t) {
            return e.offset === t.offset && L.equals(e.path, t.path);
          },
          isPoint: function (e) {
            return (
              s.default(e) && "number" == typeof e.offset && L.isPath(e.path)
            );
          },
          transform: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return a.produce(e, function (e) {
              var n = r.affinity,
                o = void 0 === n ? "forward" : n,
                a = e.path,
                i = e.offset;
              switch (t.type) {
                case "insert_node":
                case "move_node":
                  e.path = L.transform(a, t, r);
                  break;
                case "insert_text":
                  L.equals(t.path, a) &&
                    t.offset <= i &&
                    (e.offset += t.text.length);
                  break;
                case "merge_node":
                  L.equals(t.path, a) && (e.offset += t.position),
                    (e.path = L.transform(a, t, r));
                  break;
                case "remove_text":
                  L.equals(t.path, a) &&
                    t.offset <= i &&
                    (e.offset -= Math.min(i - t.offset, t.text.length));
                  break;
                case "remove_node":
                  if (L.equals(t.path, a) || L.isAncestor(t.path, a))
                    return null;
                  e.path = L.transform(a, t, r);
                  break;
                case "split_node":
                  if (L.equals(t.path, a)) {
                    if (t.position === i && null == o) return null;
                    (t.position < i || (t.position === i && "forward" === o)) &&
                      ((e.offset -= t.position),
                      (e.path = L.transform(
                        a,
                        t,
                        I({}, r, { affinity: "forward" })
                      )));
                  } else e.path = L.transform(a, t, r);
              }
            });
          },
        },
        V = {
          transform: function (e, t) {
            var r = e.current,
              n = e.affinity;
            if (null != r) {
              var o = q.transform(r, t, { affinity: n });
              (e.current = o), null == o && e.unref();
            }
          },
        };
      function K(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var H = {
          edges: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.reverse,
              n = void 0 !== r && r,
              o = e.anchor,
              a = e.focus;
            return H.isBackward(e) === n ? [o, a] : [a, o];
          },
          end: function (e) {
            var t = H.edges(e);
            return l(t, 2)[1];
          },
          equals: function (e, t) {
            return q.equals(e.anchor, t.anchor) && q.equals(e.focus, t.focus);
          },
          includes: function (e, t) {
            if (H.isRange(t)) {
              if (H.includes(e, t.anchor) || H.includes(e, t.focus)) return !0;
              var r = H.edges(e),
                n = l(r, 2),
                o = n[0],
                a = n[1],
                i = H.edges(t),
                s = l(i, 2),
                u = s[0],
                c = s[1];
              return q.isBefore(o, u) && q.isAfter(a, c);
            }
            var f = H.edges(e),
              d = l(f, 2),
              v = d[0],
              h = d[1],
              p = !1,
              g = !1;
            return (
              q.isPoint(t)
                ? ((p = q.compare(t, v) >= 0), (g = q.compare(t, h) <= 0))
                : ((p = L.compare(t, v.path) >= 0),
                  (g = L.compare(t, h.path) <= 0)),
              p && g
            );
          },
          intersection: function (e, t) {
            e.anchor, e.focus;
            var r = f(e, ["anchor", "focus"]),
              n = H.edges(e),
              o = l(n, 2),
              a = o[0],
              i = o[1],
              s = H.edges(t),
              u = l(s, 2),
              d = u[0],
              v = u[1],
              h = q.isBefore(a, d) ? d : a,
              p = q.isBefore(i, v) ? i : v;
            return q.isBefore(p, h)
              ? null
              : (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? K(Object(r), !0).forEach(function (t) {
                          c(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : K(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                  }
                  return e;
                })({ anchor: h, focus: p }, r);
          },
          isBackward: function (e) {
            var t = e.anchor,
              r = e.focus;
            return q.isAfter(t, r);
          },
          isCollapsed: function (e) {
            var t = e.anchor,
              r = e.focus;
            return q.equals(t, r);
          },
          isExpanded: function (e) {
            return !H.isCollapsed(e);
          },
          isForward: function (e) {
            return !H.isBackward(e);
          },
          isRange: function (e) {
            return s.default(e) && q.isPoint(e.anchor) && q.isPoint(e.focus);
          },
          points: function* (e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
          },
          start: function (e) {
            var t = H.edges(e);
            return l(t, 1)[0];
          },
          transform: function (e, t) {
            var r,
              n,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = o.affinity,
              s = void 0 === i ? "inward" : i;
            return (
              "inward" === s
                ? H.isForward(e)
                  ? ((r = "forward"), (n = "backward"))
                  : ((r = "backward"), (n = "forward"))
                : "outward" === s
                ? H.isForward(e)
                  ? ((r = "backward"), (n = "forward"))
                  : ((r = "forward"), (n = "backward"))
                : ((r = s), (n = s)),
              a.produce(e, function (e) {
                var o = q.transform(e.anchor, t, { affinity: r }),
                  a = q.transform(e.focus, t, { affinity: n });
                if (!o || !a) return null;
                (e.anchor = o), (e.focus = a);
              })
            );
          },
        },
        U = {
          transform: function (e, t) {
            var r = e.current,
              n = e.affinity;
            if (null != r) {
              var o = H.transform(r, t, { affinity: n });
              (e.current = o), null == o && e.unref();
            }
          },
        };
      function J(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : J(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Y = {
        equals: function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = r.loose,
            o = void 0 !== n && n;
          for (var a in e) if ((!o || "text" !== a) && e[a] !== t[a]) return !1;
          for (var i in t) if ((!o || "text" !== i) && e[i] !== t[i]) return !1;
          return !0;
        },
        isText: function (e) {
          return s.default(e) && "string" == typeof e.text;
        },
        isTextList: function (e) {
          return Array.isArray(e) && (0 === e.length || Y.isText(e[0]));
        },
        matches: function (e, t) {
          for (var r in t) if ("text" !== r && e[r] !== t[r]) return !1;
          return !0;
        },
        decorations: function (e, t) {
          var r = [X({}, e)],
            n = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var i, s = t[Symbol.iterator]();
              !(n = (i = s.next()).done);
              n = !0
            ) {
              var u = i.value,
                c = (u.anchor, u.focus, f(u, ["anchor", "focus"])),
                d = H.edges(u),
                v = l(d, 2),
                h = v[0],
                p = v[1],
                g = [],
                y = 0,
                m = !0,
                w = !1,
                b = void 0;
              try {
                for (
                  var E, x = r[Symbol.iterator]();
                  !(m = (E = x.next()).done);
                  m = !0
                ) {
                  var O = E.value,
                    P = O.text.length,
                    k = y;
                  if (((y += P), h.offset <= k && p.offset >= k + P))
                    Object.assign(O, c), g.push(O);
                  else if (
                    h.offset > k + P ||
                    p.offset < k ||
                    (p.offset === k && 0 !== k)
                  )
                    g.push(O);
                  else {
                    var F = O,
                      S = void 0,
                      D = void 0;
                    if (p.offset < k + P) {
                      var A = p.offset - k;
                      (D = X({}, F, { text: F.text.slice(A) })),
                        (F = X({}, F, { text: F.text.slice(0, A) }));
                    }
                    if (h.offset > k) {
                      var C = h.offset - k;
                      (S = X({}, F, { text: F.text.slice(0, C) })),
                        (F = X({}, F, { text: F.text.slice(C) }));
                    }
                    Object.assign(F, c),
                      S && g.push(S),
                      g.push(F),
                      D && g.push(D);
                  }
                }
              } catch (e) {
                (w = !0), (b = e);
              } finally {
                try {
                  m || null == x.return || x.return();
                } finally {
                  if (w) throw b;
                }
              }
              r = g;
            }
          } catch (e) {
            (o = !0), (a = e);
          } finally {
            try {
              n || null == s.return || s.return();
            } finally {
              if (o) throw a;
            }
          }
          return r;
        },
      };
      function Z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Z(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function G(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? G(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : G(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var ee = {
          insertNodes: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            C.withoutNormalizing(e, function () {
              var n = r.hanging,
                o = void 0 !== n && n,
                a = r.voids,
                i = void 0 !== a && a,
                s = r.mode,
                u = void 0 === s ? "lowest" : s,
                c = r.at,
                f = r.match,
                d = r.select;
              if ((R.isNode(t) && (t = [t]), 0 !== t.length)) {
                var v = l(t, 1)[0];
                if (
                  (c ||
                    ((c = e.selection
                      ? e.selection
                      : e.children.length > 0
                      ? C.end(e, [])
                      : [0]),
                    (d = !0)),
                  null == d && (d = !1),
                  H.isRange(c))
                )
                  if ((o || (c = C.unhangRange(e, c)), H.isCollapsed(c)))
                    c = c.anchor;
                  else {
                    var h = H.edges(c),
                      p = l(h, 2)[1],
                      g = C.pointRef(e, p);
                    ae.delete(e, { at: c }), (c = g.unref());
                  }
                if (q.isPoint(c)) {
                  null == f &&
                    (f = Y.isText(v)
                      ? function (e) {
                          return Y.isText(e);
                        }
                      : e.isInline(v)
                      ? function (t) {
                          return Y.isText(t) || C.isInline(e, t);
                        }
                      : function (t) {
                          return C.isBlock(e, t);
                        });
                  var y = C.nodes(e, {
                      at: c.path,
                      match: f,
                      mode: u,
                      voids: i,
                    }),
                    m = l(y, 1)[0];
                  if (!m) return;
                  var w = l(m, 2)[1],
                    b = C.pathRef(e, w),
                    E = C.isEnd(e, c, w);
                  ae.splitNodes(e, { at: c, match: f, mode: u, voids: i });
                  var x = b.unref();
                  c = E ? L.next(x) : x;
                }
                var O = L.parent(c),
                  P = c[c.length - 1];
                if (i || !C.void(e, { at: O })) {
                  var k = !0,
                    F = !1,
                    S = void 0;
                  try {
                    for (
                      var D, A = t[Symbol.iterator]();
                      !(k = (D = A.next()).done);
                      k = !0
                    ) {
                      var j = D.value,
                        B = O.concat(P);
                      P++, e.apply({ type: "insert_node", path: B, node: j });
                    }
                  } catch (e) {
                    (F = !0), (S = e);
                  } finally {
                    try {
                      k || null == A.return || A.return();
                    } finally {
                      if (F) throw S;
                    }
                  }
                  if (d) {
                    var N = C.end(e, c);
                    N && ae.select(e, N);
                  }
                }
              }
            });
          },
          liftNodes: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            C.withoutNormalizing(e, function () {
              var r = t.at,
                n = void 0 === r ? e.selection : r,
                o = t.mode,
                a = void 0 === o ? "lowest" : o,
                i = t.voids,
                s = void 0 !== i && i,
                u = t.match;
              if (
                (null == u &&
                  (u = L.isPath(n)
                    ? re(e, n)
                    : function (t) {
                        return C.isBlock(e, t);
                      }),
                n)
              )
                for (
                  var c = C.nodes(e, { at: n, match: u, mode: a, voids: s }),
                    f = 0,
                    d = Array.from(c, function (t) {
                      var r = l(t, 2)[1];
                      return C.pathRef(e, r);
                    });
                  f < d.length;
                  f++
                ) {
                  var v = d[f].unref();
                  if (v.length < 2)
                    throw new Error(
                      "Cannot lift node at a path [".concat(
                        v,
                        "] because it has a depth of less than `2`."
                      )
                    );
                  var h = C.node(e, L.parent(v)),
                    p = l(h, 2),
                    g = p[0],
                    y = p[1],
                    m = v[v.length - 1],
                    w = g.children.length;
                  if (1 === w) {
                    var b = L.next(y);
                    ae.moveNodes(e, { at: v, to: b, voids: s }),
                      ae.removeNodes(e, { at: y, voids: s });
                  } else if (0 === m)
                    ae.moveNodes(e, { at: v, to: y, voids: s });
                  else if (m === w - 1) {
                    var E = L.next(y);
                    ae.moveNodes(e, { at: v, to: E, voids: s });
                  } else {
                    var x = L.next(v),
                      O = L.next(y);
                    ae.splitNodes(e, { at: x, voids: s }),
                      ae.moveNodes(e, { at: v, to: O, voids: s });
                  }
                }
            });
          },
          mergeNodes: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            C.withoutNormalizing(e, function () {
              var r = t.match,
                n = t.at,
                o = void 0 === n ? e.selection : n,
                a = t.hanging,
                i = void 0 !== a && a,
                s = t.voids,
                u = void 0 !== s && s,
                c = t.mode,
                d = void 0 === c ? "lowest" : c;
              if (o) {
                if (null == r)
                  if (L.isPath(o)) {
                    var v = C.parent(e, o),
                      h = l(v, 1)[0];
                    r = function (e) {
                      return h.children.includes(e);
                    };
                  } else
                    r = function (t) {
                      return C.isBlock(e, t);
                    };
                if (
                  (!i && H.isRange(o) && (o = C.unhangRange(e, o)),
                  H.isRange(o))
                )
                  if (H.isCollapsed(o)) o = o.anchor;
                  else {
                    var p = H.edges(o),
                      g = l(p, 2)[1],
                      y = C.pointRef(e, g);
                    ae.delete(e, { at: o }),
                      (o = y.unref()),
                      null == t.at && ae.select(e, o);
                  }
                var m = C.nodes(e, { at: o, match: r, voids: u, mode: d }),
                  w = l(m, 1)[0],
                  b = C.previous(e, { at: o, match: r, voids: u, mode: d });
                if (w && b) {
                  var E = l(w, 2),
                    x = E[0],
                    O = E[1],
                    P = l(b, 2),
                    k = P[0],
                    F = P[1];
                  if (0 !== O.length && 0 !== F.length) {
                    var S,
                      D,
                      A = L.next(F),
                      B = L.common(O, F),
                      N = L.isSibling(O, F),
                      R = Array.from(C.levels(e, { at: O }), function (e) {
                        return l(e, 1)[0];
                      })
                        .slice(B.length)
                        .slice(0, -1),
                      M = C.above(e, {
                        at: O,
                        mode: "highest",
                        match: function (e) {
                          return (
                            R.includes(e) &&
                            j.isElement(e) &&
                            1 === e.children.length
                          );
                        },
                      }),
                      T = M && C.pathRef(e, M[1]);
                    if (Y.isText(x) && Y.isText(k)) {
                      x.text;
                      var _ = f(x, ["text"]);
                      (D = k.text.length), (S = _);
                    } else {
                      if (!j.isElement(x) || !j.isElement(k))
                        throw new Error(
                          "Cannot merge the node at path ["
                            .concat(
                              O,
                              "] with the previous sibling because it is not the same kind: "
                            )
                            .concat(JSON.stringify(x), " ")
                            .concat(JSON.stringify(k))
                        );
                      x.children;
                      var z = f(x, ["children"]);
                      (D = k.children.length), (S = z);
                    }
                    N || ae.moveNodes(e, { at: O, to: A, voids: u }),
                      T && ae.removeNodes(e, { at: T.current, voids: u }),
                      (j.isElement(k) && C.isEmpty(e, k)) ||
                      (Y.isText(k) && "" === k.text)
                        ? ae.removeNodes(e, { at: F, voids: u })
                        : e.apply({
                            type: "merge_node",
                            path: A,
                            position: D,
                            properties: S,
                          }),
                      T && T.unref();
                  }
                }
              }
            });
          },
          moveNodes: function (e, t) {
            C.withoutNormalizing(e, function () {
              var r = t.to,
                n = t.at,
                o = void 0 === n ? e.selection : n,
                a = t.mode,
                i = void 0 === a ? "lowest" : a,
                s = t.voids,
                u = void 0 !== s && s,
                c = t.match;
              if (o) {
                null == c &&
                  (c = L.isPath(o)
                    ? re(e, o)
                    : function (t) {
                        return C.isBlock(e, t);
                      });
                for (
                  var f = C.pathRef(e, r),
                    d = C.nodes(e, { at: o, match: c, mode: i, voids: u }),
                    v = 0,
                    h = Array.from(d, function (t) {
                      var r = l(t, 2)[1];
                      return C.pathRef(e, r);
                    });
                  v < h.length;
                  v++
                ) {
                  var p = h[v].unref(),
                    g = f.current;
                  0 !== p.length &&
                    e.apply({ type: "move_node", path: p, newPath: g });
                }
                f.unref();
              }
            });
          },
          removeNodes: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            C.withoutNormalizing(e, function () {
              var r = t.hanging,
                n = void 0 !== r && r,
                o = t.voids,
                a = void 0 !== o && o,
                i = t.mode,
                s = void 0 === i ? "lowest" : i,
                u = t.at,
                c = void 0 === u ? e.selection : u,
                f = t.match;
              if (c) {
                null == f &&
                  (f = L.isPath(c)
                    ? re(e, c)
                    : function (t) {
                        return C.isBlock(e, t);
                      }),
                  !n && H.isRange(c) && (c = C.unhangRange(e, c));
                for (
                  var d = C.nodes(e, { at: c, match: f, mode: s, voids: a }),
                    v = 0,
                    h = Array.from(d, function (t) {
                      var r = l(t, 2)[1];
                      return C.pathRef(e, r);
                    });
                  v < h.length;
                  v++
                ) {
                  var p = h[v].unref();
                  if (p) {
                    var g = C.node(e, p),
                      y = l(g, 1)[0];
                    e.apply({ type: "remove_node", path: p, node: y });
                  }
                }
              }
            });
          },
          setNodes: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            C.withoutNormalizing(e, function () {
              var n = r.match,
                o = r.at,
                a = void 0 === o ? e.selection : o,
                i = r.hanging,
                s = void 0 !== i && i,
                u = r.mode,
                c = void 0 === u ? "lowest" : u,
                f = r.split,
                d = void 0 !== f && f,
                v = r.voids,
                h = void 0 !== v && v;
              if (a) {
                if (
                  (null == n &&
                    (n = L.isPath(a)
                      ? re(e, a)
                      : function (t) {
                          return C.isBlock(e, t);
                        }),
                  !s && H.isRange(a) && (a = C.unhangRange(e, a)),
                  d && H.isRange(a))
                ) {
                  var p = C.rangeRef(e, a, { affinity: "inward" }),
                    g = H.edges(a),
                    y = l(g, 2),
                    m = y[0],
                    w = y[1],
                    b = "lowest" === c ? "lowest" : "highest";
                  ae.splitNodes(e, { at: w, match: n, mode: b, voids: h }),
                    ae.splitNodes(e, { at: m, match: n, mode: b, voids: h }),
                    (a = p.unref()),
                    null == r.at && ae.select(e, a);
                }
                var E = !0,
                  x = !1,
                  O = void 0;
                try {
                  for (
                    var P,
                      k = C.nodes(e, { at: a, match: n, mode: c, voids: h })[
                        Symbol.iterator
                      ]();
                    !(E = (P = k.next()).done);
                    E = !0
                  ) {
                    var F = l(P.value, 2),
                      S = F[0],
                      D = F[1],
                      A = {},
                      j = {};
                    if (0 !== D.length) {
                      for (var B in t)
                        "children" !== B &&
                          "text" !== B &&
                          t[B] !== S[B] &&
                          ((A[B] = S[B]), (j[B] = t[B]));
                      0 !== Object.keys(j).length &&
                        e.apply({
                          type: "set_node",
                          path: D,
                          properties: A,
                          newProperties: j,
                        });
                    }
                  }
                } catch (e) {
                  (x = !0), (O = e);
                } finally {
                  try {
                    E || null == k.return || k.return();
                  } finally {
                    if (x) throw O;
                  }
                }
              }
            });
          },
          splitNodes: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            C.withoutNormalizing(e, function () {
              var r = t.mode,
                n = void 0 === r ? "lowest" : r,
                o = t.voids,
                a = void 0 !== o && o,
                i = t.match,
                s = t.at,
                u = void 0 === s ? e.selection : s,
                c = t.height,
                d = void 0 === c ? 0 : c,
                v = t.always,
                h = void 0 !== v && v;
              if (
                (null == i &&
                  (i = function (t) {
                    return C.isBlock(e, t);
                  }),
                H.isRange(u) && (u = te(e, u)),
                L.isPath(u))
              ) {
                var p = u,
                  g = C.point(e, p),
                  y = C.parent(e, p),
                  m = l(y, 1)[0];
                (i = function (e) {
                  return e === m;
                }),
                  (d = g.path.length - p.length + 1),
                  (u = g),
                  (h = !0);
              }
              if (u) {
                var w = C.pointRef(e, u, { affinity: "backward" }),
                  b = C.nodes(e, { at: u, match: i, mode: n, voids: a }),
                  E = l(b, 1)[0];
                if (E) {
                  var x = C.void(e, { at: u, mode: "highest" });
                  if (!a && x) {
                    var O = l(x, 2),
                      P = O[0],
                      k = O[1];
                    if (j.isElement(P) && e.isInline(P)) {
                      var F = C.after(e, k);
                      if (!F) {
                        var S = L.next(k);
                        ae.insertNodes(e, { text: "" }, { at: S, voids: a }),
                          (F = C.point(e, S));
                      }
                      (u = F), (h = !0);
                    }
                    (d = u.path.length - k.length + 1), (h = !0);
                  }
                  var D = C.pointRef(e, u),
                    A = u.path.length - d,
                    B = l(E, 2)[1],
                    N = u.path.slice(0, A),
                    R = 0 === d ? u.offset : u.path[A] + 0,
                    M = !0,
                    T = !1,
                    _ = void 0;
                  try {
                    for (
                      var z,
                        W = C.levels(e, { at: N, reverse: !0, voids: a })[
                          Symbol.iterator
                        ]();
                      !(M = (z = W.next()).done);
                      M = !0
                    ) {
                      var I = l(z.value, 2),
                        q = I[0],
                        V = I[1],
                        K = !1;
                      if (
                        V.length < B.length ||
                        0 === V.length ||
                        (!a && C.isVoid(e, q))
                      )
                        break;
                      var U = w.current,
                        J = C.isEnd(e, U, V);
                      if (h || !w || !C.isEdge(e, U, V)) {
                        (K = !0), q.text, q.children;
                        var X = f(q, ["text", "children"]);
                        e.apply({
                          type: "split_node",
                          path: V,
                          position: R,
                          properties: X,
                        });
                      }
                      R = V[V.length - 1] + (K || J ? 1 : 0);
                    }
                  } catch (e) {
                    (T = !0), (_ = e);
                  } finally {
                    try {
                      M || null == W.return || W.return();
                    } finally {
                      if (T) throw _;
                    }
                  }
                  if (null == t.at) {
                    var Y = D.current || C.end(e, []);
                    ae.select(e, Y);
                  }
                  w.unref(), D.unref();
                }
              }
            });
          },
          unsetNodes: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            Array.isArray(t) || (t = [t]);
            var n = {},
              o = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var s, u = t[Symbol.iterator]();
                !(o = (s = u.next()).done);
                o = !0
              ) {
                var l = s.value;
                n[l] = null;
              }
            } catch (e) {
              (a = !0), (i = e);
            } finally {
              try {
                o || null == u.return || u.return();
              } finally {
                if (a) throw i;
              }
            }
            ae.setNodes(e, n, r);
          },
          unwrapNodes: function (e, t) {
            C.withoutNormalizing(e, function () {
              var r = t.mode,
                n = void 0 === r ? "lowest" : r,
                o = t.split,
                a = void 0 !== o && o,
                i = t.voids,
                s = void 0 !== i && i,
                u = t.at,
                c = void 0 === u ? e.selection : u,
                f = t.match;
              if (c) {
                null == f &&
                  (f = L.isPath(c)
                    ? re(e, c)
                    : function (t) {
                        return C.isBlock(e, t);
                      }),
                  L.isPath(c) && (c = C.range(e, c));
                for (
                  var d = H.isRange(c) ? C.rangeRef(e, c) : null,
                    v = C.nodes(e, { at: c, match: f, mode: n, voids: s }),
                    h = Array.from(v, function (t) {
                      var r = l(t, 2)[1];
                      return C.pathRef(e, r);
                    }),
                    p = function () {
                      var t = y[g].unref(),
                        r = C.node(e, t),
                        n = l(r, 1)[0],
                        o = C.range(e, t);
                      a && d && (o = H.intersection(d.current, o)),
                        ae.liftNodes(e, {
                          at: o,
                          match: function (e) {
                            return n.children.includes(e);
                          },
                          voids: s,
                        });
                    },
                    g = 0,
                    y = h;
                  g < y.length;
                  g++
                )
                  p();
                d && d.unref();
              }
            });
          },
          wrapNodes: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            C.withoutNormalizing(e, function () {
              var n = r.mode,
                o = void 0 === n ? "lowest" : n,
                a = r.split,
                i = void 0 !== a && a,
                s = r.voids,
                u = void 0 !== s && s,
                c = r.match,
                f = r.at,
                d = void 0 === f ? e.selection : f;
              if (d) {
                if (
                  (null == c &&
                    (c = L.isPath(d)
                      ? re(e, d)
                      : e.isInline(t)
                      ? function (t) {
                          return C.isInline(e, t) || Y.isText(t);
                        }
                      : function (t) {
                          return C.isBlock(e, t);
                        }),
                  i && H.isRange(d))
                ) {
                  var v = H.edges(d),
                    h = l(v, 2),
                    p = h[0],
                    g = h[1],
                    y = C.rangeRef(e, d, { affinity: "inward" });
                  ae.splitNodes(e, { at: g, match: c, voids: u }),
                    ae.splitNodes(e, { at: p, match: c, voids: u }),
                    (d = y.unref()),
                    null == r.at && ae.select(e, d);
                }
                for (
                  var m = 0,
                    w = Array.from(
                      C.nodes(e, {
                        at: d,
                        match: e.isInline(t)
                          ? function (t) {
                              return C.isBlock(e, t);
                            }
                          : function (e) {
                              return C.isEditor(e);
                            },
                        mode: "lowest",
                        voids: u,
                      })
                    );
                  m < w.length;
                  m++
                ) {
                  var b = l(w[m], 2)[1],
                    E = H.isRange(d) ? H.intersection(d, C.range(e, b)) : d;
                  if (E) {
                    var x = Array.from(
                      C.nodes(e, { at: E, match: c, mode: o, voids: u })
                    );
                    x.length > 0 &&
                      (function () {
                        var r = l(x, 1)[0],
                          n = x[x.length - 1],
                          o = l(r, 2)[1],
                          a = l(n, 2)[1],
                          i = L.equals(o, a) ? L.parent(o) : L.common(o, a),
                          s = C.range(e, o, a),
                          c = C.node(e, i),
                          f = l(c, 1)[0],
                          d = i.length + 1,
                          v = L.next(a.slice(0, d)),
                          h = Q({}, t, { children: [] });
                        ae.insertNodes(e, h, { at: v, voids: u }),
                          ae.moveNodes(e, {
                            at: s,
                            match: function (e) {
                              return f.children.includes(e);
                            },
                            to: v.concat(0),
                            voids: u,
                          });
                      })();
                  }
                }
              }
            });
          },
        },
        te = function (e, t) {
          if (H.isCollapsed(t)) return t.anchor;
          var r = H.edges(t),
            n = l(r, 2)[1],
            o = C.pointRef(e, n);
          return ae.delete(e, { at: t }), o.unref();
        },
        re = function (e, t) {
          var r = C.node(e, t),
            n = l(r, 1)[0];
          return function (e) {
            return e === n;
          };
        };
      function ne(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function oe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var ae = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? oe(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : oe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      })(
        {},
        {
          transform: function (e, t) {
            e.children = a.createDraft(e.children);
            var r = e.selection && a.createDraft(e.selection);
            switch (t.type) {
              case "insert_node":
                var n = t.path,
                  o = t.node,
                  i = R.parent(e, n),
                  s = n[n.length - 1];
                if ((i.children.splice(s, 0, o), r)) {
                  var c = !0,
                    f = !1,
                    d = void 0;
                  try {
                    for (
                      var v, h = H.points(r)[Symbol.iterator]();
                      !(c = (v = h.next()).done);
                      c = !0
                    ) {
                      var p = l(v.value, 2),
                        g = p[0];
                      r[p[1]] = q.transform(g, t);
                    }
                  } catch (e) {
                    (f = !0), (d = e);
                  } finally {
                    try {
                      c || null == h.return || h.return();
                    } finally {
                      if (f) throw d;
                    }
                  }
                }
                break;
              case "insert_text":
                var y = t.path,
                  m = t.offset,
                  w = t.text,
                  b = R.leaf(e, y),
                  E = b.text.slice(0, m),
                  x = b.text.slice(m);
                if (((b.text = E + w + x), r)) {
                  var O = !0,
                    P = !1,
                    k = void 0;
                  try {
                    for (
                      var F, S = H.points(r)[Symbol.iterator]();
                      !(O = (F = S.next()).done);
                      O = !0
                    ) {
                      var D = l(F.value, 2),
                        A = D[0];
                      r[D[1]] = q.transform(A, t);
                    }
                  } catch (e) {
                    (P = !0), (k = e);
                  } finally {
                    try {
                      O || null == S.return || S.return();
                    } finally {
                      if (P) throw k;
                    }
                  }
                }
                break;
              case "merge_node":
                var C = t.path,
                  j = R.get(e, C),
                  B = L.previous(C),
                  N = R.get(e, B),
                  M = R.parent(e, C),
                  T = C[C.length - 1];
                if (Y.isText(j) && Y.isText(N)) N.text += j.text;
                else {
                  if (Y.isText(j) || Y.isText(N))
                    throw new Error(
                      'Cannot apply a "merge_node" operation at path ['
                        .concat(C, "] to nodes of different interaces: ")
                        .concat(j, " ")
                        .concat(N)
                    );
                  var _;
                  (_ = N.children).push.apply(_, u(j.children));
                }
                if ((M.children.splice(T, 1), r)) {
                  var z = !0,
                    W = !1,
                    I = void 0;
                  try {
                    for (
                      var V, K = H.points(r)[Symbol.iterator]();
                      !(z = (V = K.next()).done);
                      z = !0
                    ) {
                      var U = l(V.value, 2),
                        J = U[0];
                      r[U[1]] = q.transform(J, t);
                    }
                  } catch (e) {
                    (W = !0), (I = e);
                  } finally {
                    try {
                      z || null == K.return || K.return();
                    } finally {
                      if (W) throw I;
                    }
                  }
                }
                break;
              case "move_node":
                var X = t.path,
                  Z = t.newPath;
                if (L.isAncestor(X, Z))
                  throw new Error(
                    "Cannot move a path ["
                      .concat(X, "] to new path [")
                      .concat(Z, "] because the destination is inside itself.")
                  );
                var G = R.get(e, X),
                  Q = R.parent(e, X),
                  ee = X[X.length - 1];
                Q.children.splice(ee, 1);
                var te = L.transform(X, t),
                  re = R.get(e, L.parent(te)),
                  ne = te[te.length - 1];
                if ((re.children.splice(ne, 0, G), r)) {
                  var oe = !0,
                    ae = !1,
                    ie = void 0;
                  try {
                    for (
                      var se, ue = H.points(r)[Symbol.iterator]();
                      !(oe = (se = ue.next()).done);
                      oe = !0
                    ) {
                      var le = l(se.value, 2),
                        ce = le[0];
                      r[le[1]] = q.transform(ce, t);
                    }
                  } catch (e) {
                    (ae = !0), (ie = e);
                  } finally {
                    try {
                      oe || null == ue.return || ue.return();
                    } finally {
                      if (ae) throw ie;
                    }
                  }
                }
                break;
              case "remove_node":
                var fe = t.path,
                  de = fe[fe.length - 1];
                if ((R.parent(e, fe).children.splice(de, 1), r)) {
                  var ve = !0,
                    he = !1,
                    pe = void 0;
                  try {
                    for (
                      var ge, ye = H.points(r)[Symbol.iterator]();
                      !(ve = (ge = ye.next()).done);
                      ve = !0
                    ) {
                      var me = l(ge.value, 2),
                        we = me[0],
                        be = me[1],
                        Ee = q.transform(we, t);
                      if (null != r && null != Ee) r[be] = Ee;
                      else {
                        var xe = void 0,
                          Oe = void 0,
                          Pe = !0,
                          ke = !1,
                          Fe = void 0;
                        try {
                          for (
                            var Se, De = R.texts(e)[Symbol.iterator]();
                            !(Pe = (Se = De.next()).done);
                            Pe = !0
                          ) {
                            var Ae = l(Se.value, 2),
                              Ce = Ae[0],
                              je = Ae[1];
                            if (-1 !== L.compare(je, fe)) {
                              Oe = [Ce, je];
                              break;
                            }
                            xe = [Ce, je];
                          }
                        } catch (e) {
                          (ke = !0), (Fe = e);
                        } finally {
                          try {
                            Pe || null == De.return || De.return();
                          } finally {
                            if (ke) throw Fe;
                          }
                        }
                        xe
                          ? ((we.path = xe[1]), (we.offset = xe[0].text.length))
                          : Oe
                          ? ((we.path = Oe[1]), (we.offset = 0))
                          : (r = null);
                      }
                    }
                  } catch (e) {
                    (he = !0), (pe = e);
                  } finally {
                    try {
                      ve || null == ye.return || ye.return();
                    } finally {
                      if (he) throw pe;
                    }
                  }
                }
                break;
              case "remove_text":
                var Be = t.path,
                  Ne = t.offset,
                  Re = t.text,
                  Me = R.leaf(e, Be),
                  Te = Me.text.slice(0, Ne),
                  _e = Me.text.slice(Ne + Re.length);
                if (((Me.text = Te + _e), r)) {
                  var Le = !0,
                    ze = !1,
                    We = void 0;
                  try {
                    for (
                      var Ie, qe = H.points(r)[Symbol.iterator]();
                      !(Le = (Ie = qe.next()).done);
                      Le = !0
                    ) {
                      var Ve = l(Ie.value, 2),
                        Ke = Ve[0];
                      r[Ve[1]] = q.transform(Ke, t);
                    }
                  } catch (e) {
                    (ze = !0), (We = e);
                  } finally {
                    try {
                      Le || null == qe.return || qe.return();
                    } finally {
                      if (ze) throw We;
                    }
                  }
                }
                break;
              case "set_node":
                var He = t.path,
                  Ue = t.newProperties;
                if (0 === He.length)
                  throw new Error("Cannot set properties on the root node!");
                var Je = R.get(e, He);
                for (var Xe in Ue) {
                  if ("children" === Xe || "text" === Xe)
                    throw new Error(
                      'Cannot set the "'.concat(Xe, '" property of nodes!')
                    );
                  var Ye = Ue[Xe];
                  null == Ye ? delete Je[Xe] : (Je[Xe] = Ye);
                }
                break;
              case "set_selection":
                var Ze = t.newProperties;
                if (null == Ze) r = Ze;
                else if (null == r) {
                  if (!H.isRange(Ze))
                    throw new Error(
                      'Cannot apply an incomplete "set_selection" operation properties '.concat(
                        JSON.stringify(Ze),
                        " when there is no current selection."
                      )
                    );
                  r = Ze;
                } else Object.assign(r, Ze);
                break;
              case "split_node":
                var $e = t.path,
                  Ge = t.position,
                  Qe = t.properties;
                if (0 === $e.length)
                  throw new Error(
                    'Cannot apply a "split_node" operation at path ['.concat(
                      $e,
                      "] because the root node cannot be split."
                    )
                  );
                var et,
                  tt = R.get(e, $e),
                  rt = R.parent(e, $e),
                  nt = $e[$e.length - 1];
                if (Y.isText(tt)) {
                  var ot = tt.text.slice(0, Ge),
                    at = tt.text.slice(Ge);
                  (tt.text = ot), (et = $({}, tt, {}, Qe, { text: at }));
                } else {
                  var it = tt.children.slice(0, Ge),
                    st = tt.children.slice(Ge);
                  (tt.children = it),
                    (et = $({}, tt, {}, Qe, { children: st }));
                }
                if ((rt.children.splice(nt + 1, 0, et), r)) {
                  var ut = !0,
                    lt = !1,
                    ct = void 0;
                  try {
                    for (
                      var ft, dt = H.points(r)[Symbol.iterator]();
                      !(ut = (ft = dt.next()).done);
                      ut = !0
                    ) {
                      var vt = l(ft.value, 2),
                        ht = vt[0];
                      r[vt[1]] = q.transform(ht, t);
                    }
                  } catch (e) {
                    (lt = !0), (ct = e);
                  } finally {
                    try {
                      ut || null == dt.return || dt.return();
                    } finally {
                      if (lt) throw ct;
                    }
                  }
                }
            }
            (e.children = a.finishDraft(e.children)),
              (e.selection = r ? (a.isDraft(r) ? a.finishDraft(r) : r) : null);
          },
        },
        {},
        ee,
        {},
        {
          collapse: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.edge,
              n = void 0 === r ? "anchor" : r,
              o = e.selection;
            if (o)
              if ("anchor" === n) ae.select(e, o.anchor);
              else if ("focus" === n) ae.select(e, o.focus);
              else if ("start" === n) {
                var a = H.edges(o),
                  i = l(a, 1),
                  s = i[0];
                ae.select(e, s);
              } else if ("end" === n) {
                var u = H.edges(o),
                  c = l(u, 2),
                  f = c[1];
                ae.select(e, f);
              }
          },
          deselect: function (e) {
            var t = e.selection;
            t &&
              e.apply({
                type: "set_selection",
                properties: t,
                newProperties: null,
              });
          },
          move: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = e.selection,
              n = t.distance,
              o = void 0 === n ? 1 : n,
              a = t.unit,
              i = void 0 === a ? "character" : a,
              s = t.reverse,
              u = void 0 !== s && s,
              l = t.edge,
              c = void 0 === l ? null : l;
            if (r) {
              "start" === c && (c = H.isBackward(r) ? "focus" : "anchor"),
                "end" === c && (c = H.isBackward(r) ? "anchor" : "focus");
              var f = r.anchor,
                d = r.focus,
                v = { distance: o, unit: i },
                h = {};
              if (null == c || "anchor" === c) {
                var p = u ? C.before(e, f, v) : C.after(e, f, v);
                p && (h.anchor = p);
              }
              if (null == c || "focus" === c) {
                var g = u ? C.before(e, d, v) : C.after(e, d, v);
                g && (h.focus = g);
              }
              ae.setSelection(e, h);
            }
          },
          select: function (e, t) {
            var r = e.selection;
            if (((t = C.range(e, t)), r)) ae.setSelection(e, t);
            else {
              if (!H.isRange(t))
                throw new Error(
                  "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                    JSON.stringify(t)
                  )
                );
              e.apply({
                type: "set_selection",
                properties: r,
                newProperties: t,
              });
            }
          },
          setPoint: function (e, t, r) {
            var n = e.selection,
              o = r.edge,
              a = void 0 === o ? "both" : o;
            if (n) {
              "start" === a && (a = H.isBackward(n) ? "focus" : "anchor"),
                "end" === a && (a = H.isBackward(n) ? "anchor" : "focus");
              var i = n.anchor,
                s = n.focus,
                u = "anchor" === a ? i : s;
              ae.setSelection(
                e,
                c(
                  {},
                  "anchor" === a ? "anchor" : "focus",
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? ne(Object(r), !0).forEach(function (t) {
                            c(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : ne(Object(r)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t)
                            );
                          });
                    }
                    return e;
                  })({}, u, {}, t)
                )
              );
            }
          },
          setSelection: function (e, t) {
            var r = e.selection,
              n = {},
              o = {};
            if (r) {
              for (var a in t)
                (("anchor" === a &&
                  null != t.anchor &&
                  !q.equals(t.anchor, r.anchor)) ||
                  ("focus" === a &&
                    null != t.focus &&
                    !q.equals(t.focus, r.focus)) ||
                  ("anchor" !== a && "focus" !== a && t[a] !== r[a])) &&
                  ((n[a] = r[a]), (o[a] = t[a]));
              Object.keys(n).length > 0 &&
                e.apply({
                  type: "set_selection",
                  properties: n,
                  newProperties: o,
                });
            }
          },
        },
        {},
        {
          delete: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            C.withoutNormalizing(e, function () {
              var r = t.reverse,
                n = void 0 !== r && r,
                o = t.unit,
                a = void 0 === o ? "character" : o,
                i = t.distance,
                s = void 0 === i ? 1 : i,
                u = t.voids,
                c = void 0 !== u && u,
                f = t.at,
                d = void 0 === f ? e.selection : f,
                v = t.hanging,
                h = void 0 !== v && v;
              if (d) {
                if (
                  (H.isRange(d) && H.isCollapsed(d) && (d = d.anchor),
                  q.isPoint(d))
                ) {
                  var p = C.void(e, { at: d, mode: "highest" });
                  if (!c && p) d = l(p, 2)[1];
                  else {
                    var g = { unit: a, distance: s };
                    (d = {
                      anchor: d,
                      focus: n
                        ? C.before(e, d, g) || C.start(e, [])
                        : C.after(e, d, g) || C.end(e, []),
                    }),
                      (h = !0);
                  }
                }
                if (L.isPath(d)) ae.removeNodes(e, { at: d, voids: c });
                else if (!H.isCollapsed(d)) {
                  h || (d = C.unhangRange(e, d, { voids: c }));
                  var y = H.edges(d),
                    m = l(y, 2),
                    w = m[0],
                    b = m[1],
                    E = C.above(e, {
                      match: function (t) {
                        return C.isBlock(e, t);
                      },
                      at: w,
                      voids: c,
                    }),
                    x = C.above(e, {
                      match: function (t) {
                        return C.isBlock(e, t);
                      },
                      at: b,
                      voids: c,
                    }),
                    O = E && x && !L.equals(E[1], x[1]),
                    P = L.equals(w.path, b.path),
                    k = c ? null : C.void(e, { at: w, mode: "highest" }),
                    F = c ? null : C.void(e, { at: b, mode: "highest" });
                  if (k) {
                    var S = C.before(e, w);
                    S && E && L.isAncestor(E[1], S.path) && (w = S);
                  }
                  if (F) {
                    var D = C.after(e, b);
                    D && x && L.isAncestor(x[1], D.path) && (b = D);
                  }
                  var A,
                    j = [],
                    B = !0,
                    N = !1,
                    R = void 0;
                  try {
                    for (
                      var M,
                        T = C.nodes(e, { at: d, voids: c })[Symbol.iterator]();
                      !(B = (M = T.next()).done);
                      B = !0
                    ) {
                      var _ = M.value,
                        z = l(_, 2),
                        W = z[0],
                        I = z[1];
                      (A && 0 === L.compare(I, A)) ||
                        (((!c && C.isVoid(e, W)) ||
                          (!L.isCommon(I, w.path) && !L.isCommon(I, b.path))) &&
                          (j.push(_), (A = I)));
                    }
                  } catch (e) {
                    (N = !0), (R = e);
                  } finally {
                    try {
                      B || null == T.return || T.return();
                    } finally {
                      if (N) throw R;
                    }
                  }
                  var V = Array.from(j, function (t) {
                      var r = l(t, 2)[1];
                      return C.pathRef(e, r);
                    }),
                    K = C.pointRef(e, w),
                    U = C.pointRef(e, b);
                  if (!P && !k) {
                    var J = K.current,
                      X = C.leaf(e, J),
                      Y = l(X, 1)[0],
                      Z = J.path,
                      $ = w.offset,
                      G = Y.text.slice($);
                    e.apply({
                      type: "remove_text",
                      path: Z,
                      offset: $,
                      text: G,
                    });
                  }
                  for (var Q = 0, ee = V; Q < ee.length; Q++) {
                    var te = ee[Q].unref();
                    ae.removeNodes(e, { at: te, voids: c });
                  }
                  if (!F) {
                    var re = U.current,
                      ne = C.leaf(e, re),
                      oe = l(ne, 1)[0],
                      ie = re.path,
                      se = P ? w.offset : 0,
                      ue = oe.text.slice(se, b.offset);
                    e.apply({
                      type: "remove_text",
                      path: ie,
                      offset: se,
                      text: ue,
                    });
                  }
                  !P &&
                    O &&
                    U.current &&
                    K.current &&
                    ae.mergeNodes(e, { at: U.current, hanging: !0, voids: c });
                  var le = U.unref() || K.unref();
                  null == t.at && le && ae.select(e, le);
                }
              }
            });
          },
          insertFragment: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            C.withoutNormalizing(e, function () {
              var n = r.hanging,
                o = void 0 !== n && n,
                a = r.voids,
                i = void 0 !== a && a,
                s = r.at,
                u = void 0 === s ? e.selection : s;
              if (t.length && u) {
                if (H.isRange(u))
                  if ((o || (u = C.unhangRange(e, u)), H.isCollapsed(u)))
                    u = u.anchor;
                  else {
                    var c = H.edges(u),
                      f = l(c, 2)[1];
                    if (!i && C.void(e, { at: f })) return;
                    var d = C.pointRef(e, f);
                    ae.delete(e, { at: u }), (u = d.unref());
                  }
                else L.isPath(u) && (u = C.start(e, u));
                if (i || !C.void(e, { at: u })) {
                  var v = C.above(e, {
                    at: u,
                    match: function (t) {
                      return C.isInline(e, t);
                    },
                    mode: "highest",
                    voids: i,
                  });
                  if (v) {
                    var h = l(v, 2)[1];
                    C.isEnd(e, u, h)
                      ? (u = C.after(e, h))
                      : C.isStart(e, u, h) && (u = C.before(e, h));
                  }
                  var p = C.above(e, {
                      match: function (t) {
                        return C.isBlock(e, t);
                      },
                      at: u,
                      voids: i,
                    }),
                    g = l(p, 2)[1],
                    y = C.isStart(e, u, g),
                    m = C.isEnd(e, u, g),
                    w = !y || (y && m),
                    b = !m,
                    E = R.first({ children: t }, []),
                    x = l(E, 2)[1],
                    O = R.last({ children: t }, []),
                    P = l(O, 2)[1],
                    k = [],
                    F = function (t) {
                      var r = l(t, 2),
                        n = r[0],
                        o = r[1];
                      return !(
                        (w &&
                          L.isAncestor(o, x) &&
                          j.isElement(n) &&
                          !e.isVoid(n) &&
                          !e.isInline(n)) ||
                        (b &&
                          L.isAncestor(o, P) &&
                          j.isElement(n) &&
                          !e.isVoid(n) &&
                          !e.isInline(n))
                      );
                    },
                    S = !0,
                    D = !1,
                    A = void 0;
                  try {
                    for (
                      var B,
                        N = R.nodes({ children: t }, { pass: F })[
                          Symbol.iterator
                        ]();
                      !(S = (B = N.next()).done);
                      S = !0
                    ) {
                      var M = B.value;
                      M[1].length > 0 && F(M) && k.push(M);
                    }
                  } catch (e) {
                    (D = !0), (A = e);
                  } finally {
                    try {
                      S || null == N.return || N.return();
                    } finally {
                      if (D) throw A;
                    }
                  }
                  for (
                    var T = [], _ = [], z = [], W = !0, I = !1, q = 0, V = k;
                    q < V.length;
                    q++
                  ) {
                    var K = l(V[q], 1)[0];
                    j.isElement(K) && !e.isInline(K)
                      ? ((W = !1), (I = !0), _.push(K))
                      : W
                      ? T.push(K)
                      : z.push(K);
                  }
                  var U = C.nodes(e, {
                      at: u,
                      match: function (t) {
                        return Y.isText(t) || C.isInline(e, t);
                      },
                      mode: "highest",
                      voids: i,
                    }),
                    J = l(U, 1)[0],
                    X = l(J, 2)[1],
                    Z = C.isStart(e, u, X),
                    $ = C.isEnd(e, u, X),
                    G = C.pathRef(e, m ? L.next(g) : g),
                    Q = C.pathRef(e, $ ? L.next(X) : X);
                  ae.splitNodes(e, {
                    at: u,
                    match: function (t) {
                      return I
                        ? C.isBlock(e, t)
                        : Y.isText(t) || C.isInline(e, t);
                    },
                    mode: I ? "lowest" : "highest",
                    voids: i,
                  });
                  var ee = C.pathRef(e, !Z || (Z && $) ? L.next(X) : X);
                  if (
                    (ae.insertNodes(e, T, {
                      at: ee.current,
                      match: function (t) {
                        return Y.isText(t) || C.isInline(e, t);
                      },
                      mode: "highest",
                      voids: i,
                    }),
                    ae.insertNodes(e, _, {
                      at: G.current,
                      match: function (t) {
                        return C.isBlock(e, t);
                      },
                      mode: "lowest",
                      voids: i,
                    }),
                    ae.insertNodes(e, z, {
                      at: Q.current,
                      match: function (t) {
                        return Y.isText(t) || C.isInline(e, t);
                      },
                      mode: "highest",
                      voids: i,
                    }),
                    !r.at)
                  ) {
                    var te;
                    te =
                      z.length > 0
                        ? L.previous(Q.current)
                        : _.length > 0
                        ? L.previous(G.current)
                        : L.previous(ee.current);
                    var re = C.end(e, te);
                    ae.select(e, re);
                  }
                  ee.unref(), G.unref(), Q.unref();
                }
              }
            });
          },
          insertText: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            C.withoutNormalizing(e, function () {
              var n = r.voids,
                o = void 0 !== n && n,
                a = r.at,
                i = void 0 === a ? e.selection : a;
              if (i) {
                if ((L.isPath(i) && (i = C.range(e, i)), H.isRange(i)))
                  if (H.isCollapsed(i)) i = i.anchor;
                  else {
                    var s = H.end(i);
                    if (!o && C.void(e, { at: s })) return;
                    var u = C.pointRef(e, s);
                    ae.delete(e, { at: i, voids: o }),
                      (i = u.unref()),
                      ae.setSelection(e, { anchor: i, focus: i });
                  }
                if (o || !C.void(e, { at: i })) {
                  var l = i,
                    c = l.path,
                    f = l.offset;
                  e.apply({ type: "insert_text", path: c, offset: f, text: t });
                }
              }
            });
          },
        }
      );
      function ie(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ie(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ie(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      (t.Editor = C),
        (t.Element = j),
        (t.Location = B),
        (t.Node = R),
        (t.Operation = _),
        (t.Path = L),
        (t.PathRef = z),
        (t.Point = q),
        (t.PointRef = V),
        (t.Range = H),
        (t.RangeRef = U),
        (t.Span = N),
        (t.Text = Y),
        (t.Transforms = ae),
        (t.createEditor = function () {
          var e = {
            children: [],
            operations: [],
            selection: null,
            marks: null,
            isInline: function () {
              return !1;
            },
            isVoid: function () {
              return !1;
            },
            onChange: function () {},
            apply: function (t) {
              var r = !0,
                n = !1,
                o = void 0;
              try {
                for (
                  var a, i = C.pathRefs(e)[Symbol.iterator]();
                  !(r = (a = i.next()).done);
                  r = !0
                ) {
                  var s = a.value;
                  z.transform(s, t);
                }
              } catch (e) {
                (n = !0), (o = e);
              } finally {
                try {
                  r || null == i.return || i.return();
                } finally {
                  if (n) throw o;
                }
              }
              var c = !0,
                f = !1,
                h = void 0;
              try {
                for (
                  var p, g = C.pointRefs(e)[Symbol.iterator]();
                  !(c = (p = g.next()).done);
                  c = !0
                ) {
                  var y = p.value;
                  V.transform(y, t);
                }
              } catch (e) {
                (f = !0), (h = e);
              } finally {
                try {
                  c || null == g.return || g.return();
                } finally {
                  if (f) throw h;
                }
              }
              var m = !0,
                w = !1,
                b = void 0;
              try {
                for (
                  var E, x = C.rangeRefs(e)[Symbol.iterator]();
                  !(m = (E = x.next()).done);
                  m = !0
                ) {
                  var O = E.value;
                  U.transform(O, t);
                }
              } catch (e) {
                (w = !0), (b = e);
              } finally {
                try {
                  m || null == x.return || x.return();
                } finally {
                  if (w) throw b;
                }
              }
              var P = new Set(),
                k = [],
                F = function (e) {
                  if (e) {
                    var t = e.join(",");
                    P.has(t) || (P.add(t), k.push(e));
                  }
                },
                S = d.get(e) || [],
                D = (function (e) {
                  switch (e.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                      var t = e.path;
                      return L.levels(t);
                    case "insert_node":
                      var r = e.node,
                        n = e.path,
                        o = L.levels(n),
                        a = Y.isText(r)
                          ? []
                          : Array.from(R.nodes(r), function (e) {
                              var t = l(e, 2)[1];
                              return n.concat(t);
                            });
                      return [].concat(u(o), u(a));
                    case "merge_node":
                      var i = e.path,
                        s = L.ancestors(i),
                        c = L.previous(i);
                      return [].concat(u(s), [c]);
                    case "move_node":
                      var f = e.path,
                        d = e.newPath;
                      if (L.equals(f, d)) return [];
                      var v = [],
                        h = [],
                        p = !0,
                        g = !1,
                        y = void 0;
                      try {
                        for (
                          var m, w = L.ancestors(f)[Symbol.iterator]();
                          !(p = (m = w.next()).done);
                          p = !0
                        ) {
                          var b = m.value,
                            E = L.transform(b, e);
                          v.push(E);
                        }
                      } catch (e) {
                        (g = !0), (y = e);
                      } finally {
                        try {
                          p || null == w.return || w.return();
                        } finally {
                          if (g) throw y;
                        }
                      }
                      var x = !0,
                        O = !1,
                        P = void 0;
                      try {
                        for (
                          var k, F = L.ancestors(d)[Symbol.iterator]();
                          !(x = (k = F.next()).done);
                          x = !0
                        ) {
                          var S = k.value,
                            D = L.transform(S, e);
                          h.push(D);
                        }
                      } catch (e) {
                        (O = !0), (P = e);
                      } finally {
                        try {
                          x || null == F.return || F.return();
                        } finally {
                          if (O) throw P;
                        }
                      }
                      return [].concat(v, h);
                    case "remove_node":
                      var A = e.path,
                        C = L.ancestors(A);
                      return u(C);
                    case "split_node":
                      var j = e.path,
                        B = L.levels(j),
                        N = L.next(j);
                      return [].concat(u(B), [N]);
                    default:
                      return [];
                  }
                })(t),
                A = !0,
                j = !1,
                B = void 0;
              try {
                for (
                  var N, M = S[Symbol.iterator]();
                  !(A = (N = M.next()).done);
                  A = !0
                ) {
                  var T = N.value;
                  F(L.transform(T, t));
                }
              } catch (e) {
                (j = !0), (B = e);
              } finally {
                try {
                  A || null == M.return || M.return();
                } finally {
                  if (j) throw B;
                }
              }
              var _ = !0,
                W = !1,
                I = void 0;
              try {
                for (
                  var q, K = D[Symbol.iterator]();
                  !(_ = (q = K.next()).done);
                  _ = !0
                )
                  F(q.value);
              } catch (e) {
                (W = !0), (I = e);
              } finally {
                try {
                  _ || null == K.return || K.return();
                } finally {
                  if (W) throw I;
                }
              }
              d.set(e, k),
                ae.transform(e, t),
                e.operations.push(t),
                C.normalize(e),
                "set_selection" === t.type && (e.marks = null),
                v.get(e) ||
                  (v.set(e, !0),
                  Promise.resolve().then(function () {
                    v.set(e, !1), e.onChange(), (e.operations = []);
                  }));
            },
            addMark: function (t, r) {
              var n = e.selection;
              if (n)
                if (H.isExpanded(n))
                  ae.setNodes(e, c({}, t, r), { match: Y.isText, split: !0 });
                else {
                  var o = se({}, C.marks(e) || {}, c({}, t, r));
                  (e.marks = o), e.onChange();
                }
            },
            deleteBackward: function (t) {
              var r = e.selection;
              r && H.isCollapsed(r) && ae.delete(e, { unit: t, reverse: !0 });
            },
            deleteForward: function (t) {
              var r = e.selection;
              r && H.isCollapsed(r) && ae.delete(e, { unit: t });
            },
            deleteFragment: function () {
              var t = e.selection;
              t && H.isExpanded(t) && ae.delete(e);
            },
            getFragment: function () {
              var t = e.selection;
              return t ? R.fragment(e, t) : [];
            },
            insertBreak: function () {
              ae.splitNodes(e, { always: !0 });
            },
            insertFragment: function (t) {
              ae.insertFragment(e, t);
            },
            insertNode: function (t) {
              ae.insertNodes(e, t);
            },
            insertText: function (t) {
              var r = e.selection,
                n = e.marks;
              if (r) {
                if (H.isCollapsed(r)) {
                  var o = C.above(e, {
                    match: function (t) {
                      return C.isInline(e, t);
                    },
                    mode: "highest",
                  });
                  if (o) {
                    var a = l(o, 2)[1];
                    if (C.isEnd(e, r.anchor, a)) {
                      var i = C.after(e, a);
                      ae.setSelection(e, { anchor: i, focus: i });
                    }
                  }
                }
                if (n) {
                  var s = se({ text: t }, n);
                  ae.insertNodes(e, s);
                } else ae.insertText(e, t);
                e.marks = null;
              }
            },
            normalizeNode: function (t) {
              var r = l(t, 2),
                n = r[0],
                o = r[1];
              if (!Y.isText(n))
                if (j.isElement(n) && 0 === n.children.length)
                  ae.insertNodes(
                    e,
                    { text: "" },
                    { at: o.concat(0), voids: !0 }
                  );
                else
                  for (
                    var a =
                        !C.isEditor(n) &&
                        j.isElement(n) &&
                        (e.isInline(n) ||
                          0 === n.children.length ||
                          Y.isText(n.children[0]) ||
                          e.isInline(n.children[0])),
                      i = 0,
                      s = 0;
                    s < n.children.length;
                    s++, i++
                  ) {
                    var u = n.children[s],
                      c = n.children[s - 1],
                      f = s === n.children.length - 1;
                    (Y.isText(u) || (j.isElement(u) && e.isInline(u))) !== a
                      ? (ae.removeNodes(e, { at: o.concat(i), voids: !0 }), i--)
                      : j.isElement(u)
                      ? e.isInline(u) &&
                        (null != c && Y.isText(c)
                          ? f &&
                            (ae.insertNodes(
                              e,
                              { text: "" },
                              { at: o.concat(i + 1), voids: !0 }
                            ),
                            i++)
                          : (ae.insertNodes(
                              e,
                              { text: "" },
                              { at: o.concat(i), voids: !0 }
                            ),
                            i++))
                      : null != c &&
                        Y.isText(c) &&
                        (Y.equals(u, c, { loose: !0 })
                          ? (ae.mergeNodes(e, { at: o.concat(i), voids: !0 }),
                            i--)
                          : "" === c.text
                          ? (ae.removeNodes(e, {
                              at: o.concat(i - 1),
                              voids: !0,
                            }),
                            i--)
                          : f &&
                            "" === u.text &&
                            (ae.removeNodes(e, { at: o.concat(i), voids: !0 }),
                            i--));
                  }
            },
            removeMark: function (t) {
              var r = e.selection;
              if (r)
                if (H.isExpanded(r))
                  ae.unsetNodes(e, t, { match: Y.isText, split: !0 });
                else {
                  var n = se({}, C.marks(e) || {});
                  delete n[t], (e.marks = n), e.onChange();
                }
            },
          };
          return e;
        });
    },
    49424: (e, t, r) => {
      "use strict";
      function n(e) {
        return (
          1 ==
            (null != (t = e) &&
              "object" == typeof t &&
              !1 === Array.isArray(t)) &&
          "[object Object]" === Object.prototype.toString.call(e)
        );
        var t;
      }
      function o(e) {
        var t, r;
        return (
          !1 !== n(e) &&
          "function" == typeof (t = e.constructor) &&
          !1 !== n((r = t.prototype)) &&
          !1 !== r.hasOwnProperty("isPrototypeOf")
        );
      }
      r.r(t), r.d(t, { default: () => o });
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8342.6aa0b45e.chunk.js.map
