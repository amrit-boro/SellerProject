var bg = (n) => {
  throw TypeError(n);
};
var nh = (n, r, a) => r.has(n) || bg("Cannot " + a);
var R = (n, r, a) => (
    nh(n, r, "read from private field"), a ? a.call(n) : r.get(n)
  ),
  Ae = (n, r, a) =>
    r.has(n)
      ? bg("Cannot add the same private member more than once")
      : r instanceof WeakSet
      ? r.add(n)
      : r.set(n, a),
  de = (n, r, a, s) => (
    nh(n, r, "write to private field"), s ? s.call(n, a) : r.set(n, a), a
  ),
  Pe = (n, r, a) => (nh(n, r, "access private method"), a);
var nc = (n, r, a, s) => ({
  set _(o) {
    de(n, r, o, a);
  },
  get _() {
    return R(n, r, s);
  },
});
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === "childList")
        for (const f of u.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = a(o);
    fetch(o.href, u);
  }
})();
function pb(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
function a1(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var r = n.default;
  if (typeof r == "function") {
    var a = function s() {
      return this instanceof s
        ? Reflect.construct(r, arguments, this.constructor)
        : r.apply(this, arguments);
    };
    a.prototype = r.prototype;
  } else a = {};
  return (
    Object.defineProperty(a, "__esModule", { value: !0 }),
    Object.keys(n).forEach(function (s) {
      var o = Object.getOwnPropertyDescriptor(n, s);
      Object.defineProperty(
        a,
        s,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return n[s];
              },
            }
      );
    }),
    a
  );
}
var rh = { exports: {} },
  ao = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _g;
function i1() {
  if (_g) return ao;
  _g = 1;
  var n = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function a(s, o, u) {
    var f = null;
    if (
      (u !== void 0 && (f = "" + u),
      o.key !== void 0 && (f = "" + o.key),
      "key" in o)
    ) {
      u = {};
      for (var h in o) h !== "key" && (u[h] = o[h]);
    } else u = o;
    return (
      (o = u.ref),
      { $$typeof: n, type: s, key: f, ref: o !== void 0 ? o : null, props: u }
    );
  }
  return (ao.Fragment = r), (ao.jsx = a), (ao.jsxs = a), ao;
}
var wg;
function s1() {
  return wg || ((wg = 1), (rh.exports = i1())), rh.exports;
}
var _ = s1(),
  ah = { exports: {} },
  qe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sg;
function l1() {
  if (Sg) return qe;
  Sg = 1;
  var n = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    g = Symbol.iterator;
  function b(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (g && T[g]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    N = {};
  function C(T, Z, se) {
    (this.props = T),
      (this.context = Z),
      (this.refs = N),
      (this.updater = se || S);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (T, Z) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, T, Z, "setState");
    }),
    (C.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function U() {}
  U.prototype = C.prototype;
  function Y(T, Z, se) {
    (this.props = T),
      (this.context = Z),
      (this.refs = N),
      (this.updater = se || S);
  }
  var z = (Y.prototype = new U());
  (z.constructor = Y), x(z, C.prototype), (z.isPureReactComponent = !0);
  var Q = Array.isArray,
    P = { H: null, A: null, T: null, S: null, V: null },
    j = Object.prototype.hasOwnProperty;
  function ie(T, Z, se, ne, ve, He) {
    return (
      (se = He.ref),
      {
        $$typeof: n,
        type: T,
        key: Z,
        ref: se !== void 0 ? se : null,
        props: He,
      }
    );
  }
  function ue(T, Z) {
    return ie(T.type, Z, void 0, void 0, void 0, T.props);
  }
  function te(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function be(T) {
    var Z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (se) {
        return Z[se];
      })
    );
  }
  var Le = /\/+/g;
  function he(T, Z) {
    return typeof T == "object" && T !== null && T.key != null
      ? be("" + T.key)
      : Z.toString(36);
  }
  function Ne() {}
  function _e(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(Ne, Ne)
            : ((T.status = "pending"),
              T.then(
                function (Z) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = Z));
                },
                function (Z) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = Z));
                }
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function Re(T, Z, se, ne, ve) {
    var He = typeof T;
    (He === "undefined" || He === "boolean") && (T = null);
    var Te = !1;
    if (T === null) Te = !0;
    else
      switch (He) {
        case "bigint":
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case n:
            case r:
              Te = !0;
              break;
            case p:
              return (Te = T._init), Re(Te(T._payload), Z, se, ne, ve);
          }
      }
    if (Te)
      return (
        (ve = ve(T)),
        (Te = ne === "" ? "." + he(T, 0) : ne),
        Q(ve)
          ? ((se = ""),
            Te != null && (se = Te.replace(Le, "$&/") + "/"),
            Re(ve, Z, se, "", function (cn) {
              return cn;
            }))
          : ve != null &&
            (te(ve) &&
              (ve = ue(
                ve,
                se +
                  (ve.key == null || (T && T.key === ve.key)
                    ? ""
                    : ("" + ve.key).replace(Le, "$&/") + "/") +
                  Te
              )),
            Z.push(ve)),
        1
      );
    Te = 0;
    var Mt = ne === "" ? "." : ne + ":";
    if (Q(T))
      for (var it = 0; it < T.length; it++)
        (ne = T[it]), (He = Mt + he(ne, it)), (Te += Re(ne, Z, se, He, ve));
    else if (((it = b(T)), typeof it == "function"))
      for (T = it.call(T), it = 0; !(ne = T.next()).done; )
        (ne = ne.value),
          (He = Mt + he(ne, it++)),
          (Te += Re(ne, Z, se, He, ve));
    else if (He === "object") {
      if (typeof T.then == "function") return Re(_e(T), Z, se, ne, ve);
      throw (
        ((Z = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Z === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : Z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Te;
  }
  function q(T, Z, se) {
    if (T == null) return T;
    var ne = [],
      ve = 0;
    return (
      Re(T, ne, "", "", function (He) {
        return Z.call(se, He, ve++);
      }),
      ne
    );
  }
  function ee(T) {
    if (T._status === -1) {
      var Z = T._result;
      (Z = Z()),
        Z.then(
          function (se) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = se));
          },
          function (se) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = se));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = Z));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var ce =
    typeof reportError == "function"
      ? reportError
      : function (T) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Z = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == "object" &&
                T !== null &&
                typeof T.message == "string"
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(Z)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", T);
            return;
          }
          console.error(T);
        };
  function De() {}
  return (
    (qe.Children = {
      map: q,
      forEach: function (T, Z, se) {
        q(
          T,
          function () {
            Z.apply(this, arguments);
          },
          se
        );
      },
      count: function (T) {
        var Z = 0;
        return (
          q(T, function () {
            Z++;
          }),
          Z
        );
      },
      toArray: function (T) {
        return (
          q(T, function (Z) {
            return Z;
          }) || []
        );
      },
      only: function (T) {
        if (!te(T))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return T;
      },
    }),
    (qe.Component = C),
    (qe.Fragment = a),
    (qe.Profiler = o),
    (qe.PureComponent = Y),
    (qe.StrictMode = s),
    (qe.Suspense = y),
    (qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (qe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return P.H.useMemoCache(T);
      },
    }),
    (qe.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (qe.cloneElement = function (T, Z, se) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + "."
        );
      var ne = x({}, T.props),
        ve = T.key,
        He = void 0;
      if (Z != null)
        for (Te in (Z.ref !== void 0 && (He = void 0),
        Z.key !== void 0 && (ve = "" + Z.key),
        Z))
          !j.call(Z, Te) ||
            Te === "key" ||
            Te === "__self" ||
            Te === "__source" ||
            (Te === "ref" && Z.ref === void 0) ||
            (ne[Te] = Z[Te]);
      var Te = arguments.length - 2;
      if (Te === 1) ne.children = se;
      else if (1 < Te) {
        for (var Mt = Array(Te), it = 0; it < Te; it++)
          Mt[it] = arguments[it + 2];
        ne.children = Mt;
      }
      return ie(T.type, ve, void 0, void 0, He, ne);
    }),
    (qe.createContext = function (T) {
      return (
        (T = {
          $$typeof: f,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: u, _context: T }),
        T
      );
    }),
    (qe.createElement = function (T, Z, se) {
      var ne,
        ve = {},
        He = null;
      if (Z != null)
        for (ne in (Z.key !== void 0 && (He = "" + Z.key), Z))
          j.call(Z, ne) &&
            ne !== "key" &&
            ne !== "__self" &&
            ne !== "__source" &&
            (ve[ne] = Z[ne]);
      var Te = arguments.length - 2;
      if (Te === 1) ve.children = se;
      else if (1 < Te) {
        for (var Mt = Array(Te), it = 0; it < Te; it++)
          Mt[it] = arguments[it + 2];
        ve.children = Mt;
      }
      if (T && T.defaultProps)
        for (ne in ((Te = T.defaultProps), Te))
          ve[ne] === void 0 && (ve[ne] = Te[ne]);
      return ie(T, He, void 0, void 0, null, ve);
    }),
    (qe.createRef = function () {
      return { current: null };
    }),
    (qe.forwardRef = function (T) {
      return { $$typeof: h, render: T };
    }),
    (qe.isValidElement = te),
    (qe.lazy = function (T) {
      return { $$typeof: p, _payload: { _status: -1, _result: T }, _init: ee };
    }),
    (qe.memo = function (T, Z) {
      return { $$typeof: m, type: T, compare: Z === void 0 ? null : Z };
    }),
    (qe.startTransition = function (T) {
      var Z = P.T,
        se = {};
      P.T = se;
      try {
        var ne = T(),
          ve = P.S;
        ve !== null && ve(se, ne),
          typeof ne == "object" &&
            ne !== null &&
            typeof ne.then == "function" &&
            ne.then(De, ce);
      } catch (He) {
        ce(He);
      } finally {
        P.T = Z;
      }
    }),
    (qe.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (qe.use = function (T) {
      return P.H.use(T);
    }),
    (qe.useActionState = function (T, Z, se) {
      return P.H.useActionState(T, Z, se);
    }),
    (qe.useCallback = function (T, Z) {
      return P.H.useCallback(T, Z);
    }),
    (qe.useContext = function (T) {
      return P.H.useContext(T);
    }),
    (qe.useDebugValue = function () {}),
    (qe.useDeferredValue = function (T, Z) {
      return P.H.useDeferredValue(T, Z);
    }),
    (qe.useEffect = function (T, Z, se) {
      var ne = P.H;
      if (typeof se == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return ne.useEffect(T, Z);
    }),
    (qe.useId = function () {
      return P.H.useId();
    }),
    (qe.useImperativeHandle = function (T, Z, se) {
      return P.H.useImperativeHandle(T, Z, se);
    }),
    (qe.useInsertionEffect = function (T, Z) {
      return P.H.useInsertionEffect(T, Z);
    }),
    (qe.useLayoutEffect = function (T, Z) {
      return P.H.useLayoutEffect(T, Z);
    }),
    (qe.useMemo = function (T, Z) {
      return P.H.useMemo(T, Z);
    }),
    (qe.useOptimistic = function (T, Z) {
      return P.H.useOptimistic(T, Z);
    }),
    (qe.useReducer = function (T, Z, se) {
      return P.H.useReducer(T, Z, se);
    }),
    (qe.useRef = function (T) {
      return P.H.useRef(T);
    }),
    (qe.useState = function (T) {
      return P.H.useState(T);
    }),
    (qe.useSyncExternalStore = function (T, Z, se) {
      return P.H.useSyncExternalStore(T, Z, se);
    }),
    (qe.useTransition = function () {
      return P.H.useTransition();
    }),
    (qe.version = "19.1.0"),
    qe
  );
}
var xg;
function Hc() {
  return xg || ((xg = 1), (ah.exports = l1())), ah.exports;
}
var D = Hc();
const Vt = pb(D);
var ih = { exports: {} },
  io = {},
  sh = { exports: {} },
  lh = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eg;
function o1() {
  return (
    Eg ||
      ((Eg = 1),
      (function (n) {
        function r(q, ee) {
          var ce = q.length;
          q.push(ee);
          e: for (; 0 < ce; ) {
            var De = (ce - 1) >>> 1,
              T = q[De];
            if (0 < o(T, ee)) (q[De] = ee), (q[ce] = T), (ce = De);
            else break e;
          }
        }
        function a(q) {
          return q.length === 0 ? null : q[0];
        }
        function s(q) {
          if (q.length === 0) return null;
          var ee = q[0],
            ce = q.pop();
          if (ce !== ee) {
            q[0] = ce;
            e: for (var De = 0, T = q.length, Z = T >>> 1; De < Z; ) {
              var se = 2 * (De + 1) - 1,
                ne = q[se],
                ve = se + 1,
                He = q[ve];
              if (0 > o(ne, ce))
                ve < T && 0 > o(He, ne)
                  ? ((q[De] = He), (q[ve] = ce), (De = ve))
                  : ((q[De] = ne), (q[se] = ce), (De = se));
              else if (ve < T && 0 > o(He, ce))
                (q[De] = He), (q[ve] = ce), (De = ve);
              else break e;
            }
          }
          return ee;
        }
        function o(q, ee) {
          var ce = q.sortIndex - ee.sortIndex;
          return ce !== 0 ? ce : q.id - ee.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          n.unstable_now = function () {
            return u.now();
          };
        } else {
          var f = Date,
            h = f.now();
          n.unstable_now = function () {
            return f.now() - h;
          };
        }
        var y = [],
          m = [],
          p = 1,
          g = null,
          b = 3,
          S = !1,
          x = !1,
          N = !1,
          C = !1,
          U = typeof setTimeout == "function" ? setTimeout : null,
          Y = typeof clearTimeout == "function" ? clearTimeout : null,
          z = typeof setImmediate < "u" ? setImmediate : null;
        function Q(q) {
          for (var ee = a(m); ee !== null; ) {
            if (ee.callback === null) s(m);
            else if (ee.startTime <= q)
              s(m), (ee.sortIndex = ee.expirationTime), r(y, ee);
            else break;
            ee = a(m);
          }
        }
        function P(q) {
          if (((N = !1), Q(q), !x))
            if (a(y) !== null) (x = !0), j || ((j = !0), he());
            else {
              var ee = a(m);
              ee !== null && Re(P, ee.startTime - q);
            }
        }
        var j = !1,
          ie = -1,
          ue = 5,
          te = -1;
        function be() {
          return C ? !0 : !(n.unstable_now() - te < ue);
        }
        function Le() {
          if (((C = !1), j)) {
            var q = n.unstable_now();
            te = q;
            var ee = !0;
            try {
              e: {
                (x = !1), N && ((N = !1), Y(ie), (ie = -1)), (S = !0);
                var ce = b;
                try {
                  t: {
                    for (
                      Q(q), g = a(y);
                      g !== null && !(g.expirationTime > q && be());

                    ) {
                      var De = g.callback;
                      if (typeof De == "function") {
                        (g.callback = null), (b = g.priorityLevel);
                        var T = De(g.expirationTime <= q);
                        if (((q = n.unstable_now()), typeof T == "function")) {
                          (g.callback = T), Q(q), (ee = !0);
                          break t;
                        }
                        g === a(y) && s(y), Q(q);
                      } else s(y);
                      g = a(y);
                    }
                    if (g !== null) ee = !0;
                    else {
                      var Z = a(m);
                      Z !== null && Re(P, Z.startTime - q), (ee = !1);
                    }
                  }
                  break e;
                } finally {
                  (g = null), (b = ce), (S = !1);
                }
                ee = void 0;
              }
            } finally {
              ee ? he() : (j = !1);
            }
          }
        }
        var he;
        if (typeof z == "function")
          he = function () {
            z(Le);
          };
        else if (typeof MessageChannel < "u") {
          var Ne = new MessageChannel(),
            _e = Ne.port2;
          (Ne.port1.onmessage = Le),
            (he = function () {
              _e.postMessage(null);
            });
        } else
          he = function () {
            U(Le, 0);
          };
        function Re(q, ee) {
          ie = U(function () {
            q(n.unstable_now());
          }, ee);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (n.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ue = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (n.unstable_next = function (q) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var ee = 3;
                break;
              default:
                ee = b;
            }
            var ce = b;
            b = ee;
            try {
              return q();
            } finally {
              b = ce;
            }
          }),
          (n.unstable_requestPaint = function () {
            C = !0;
          }),
          (n.unstable_runWithPriority = function (q, ee) {
            switch (q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                q = 3;
            }
            var ce = b;
            b = q;
            try {
              return ee();
            } finally {
              b = ce;
            }
          }),
          (n.unstable_scheduleCallback = function (q, ee, ce) {
            var De = n.unstable_now();
            switch (
              (typeof ce == "object" && ce !== null
                ? ((ce = ce.delay),
                  (ce = typeof ce == "number" && 0 < ce ? De + ce : De))
                : (ce = De),
              q)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = ce + T),
              (q = {
                id: p++,
                callback: ee,
                priorityLevel: q,
                startTime: ce,
                expirationTime: T,
                sortIndex: -1,
              }),
              ce > De
                ? ((q.sortIndex = ce),
                  r(m, q),
                  a(y) === null &&
                    q === a(m) &&
                    (N ? (Y(ie), (ie = -1)) : (N = !0), Re(P, ce - De)))
                : ((q.sortIndex = T),
                  r(y, q),
                  x || S || ((x = !0), j || ((j = !0), he()))),
              q
            );
          }),
          (n.unstable_shouldYield = be),
          (n.unstable_wrapCallback = function (q) {
            var ee = b;
            return function () {
              var ce = b;
              b = ee;
              try {
                return q.apply(this, arguments);
              } finally {
                b = ce;
              }
            };
          });
      })(lh)),
    lh
  );
}
var Tg;
function u1() {
  return Tg || ((Tg = 1), (sh.exports = o1())), sh.exports;
}
var oh = { exports: {} },
  It = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rg;
function c1() {
  if (Rg) return It;
  Rg = 1;
  var n = Hc();
  function r(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        m += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var s = {
      d: {
        f: a,
        r: function () {
          throw Error(r(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function u(y, m, p) {
    var g =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: g == null ? null : "" + g,
      children: y,
      containerInfo: m,
      implementation: p,
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(y, m) {
    if (y === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (It.createPortal = function (y, m) {
      var p =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(r(299));
      return u(y, m, null, p);
    }),
    (It.flushSync = function (y) {
      var m = f.T,
        p = s.p;
      try {
        if (((f.T = null), (s.p = 2), y)) return y();
      } finally {
        (f.T = m), (s.p = p), s.d.f();
      }
    }),
    (It.preconnect = function (y, m) {
      typeof y == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        s.d.C(y, m));
    }),
    (It.prefetchDNS = function (y) {
      typeof y == "string" && s.d.D(y);
    }),
    (It.preinit = function (y, m) {
      if (typeof y == "string" && m && typeof m.as == "string") {
        var p = m.as,
          g = h(p, m.crossOrigin),
          b = typeof m.integrity == "string" ? m.integrity : void 0,
          S = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        p === "style"
          ? s.d.S(y, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: g,
              integrity: b,
              fetchPriority: S,
            })
          : p === "script" &&
            s.d.X(y, {
              crossOrigin: g,
              integrity: b,
              fetchPriority: S,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (It.preinitModule = function (y, m) {
      if (typeof y == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var p = h(m.as, m.crossOrigin);
            s.d.M(y, {
              crossOrigin: p,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && s.d.M(y);
    }),
    (It.preload = function (y, m) {
      if (
        typeof y == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var p = m.as,
          g = h(p, m.crossOrigin);
        s.d.L(y, p, {
          crossOrigin: g,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (It.preloadModule = function (y, m) {
      if (typeof y == "string")
        if (m) {
          var p = h(m.as, m.crossOrigin);
          s.d.m(y, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: p,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else s.d.m(y);
    }),
    (It.requestFormReset = function (y) {
      s.d.r(y);
    }),
    (It.unstable_batchedUpdates = function (y, m) {
      return y(m);
    }),
    (It.useFormState = function (y, m, p) {
      return f.H.useFormState(y, m, p);
    }),
    (It.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (It.version = "19.1.0"),
    It
  );
}
var Og;
function vb() {
  if (Og) return oh.exports;
  Og = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), (oh.exports = c1()), oh.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ag;
function f1() {
  if (Ag) return io;
  Ag = 1;
  var n = u1(),
    r = Hc(),
    a = vb();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        t += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    var t = e,
      i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (i = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (u(e) !== e) throw Error(s(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = u(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var i = e, l = t; ; ) {
      var c = i.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((l = c.return), l !== null)) {
          i = l;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === i) return h(c), e;
          if (d === l) return h(c), t;
          d = d.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== l.return) (i = c), (l = d);
      else {
        for (var v = !1, w = c.child; w; ) {
          if (w === i) {
            (v = !0), (i = c), (l = d);
            break;
          }
          if (w === l) {
            (v = !0), (l = c), (i = d);
            break;
          }
          w = w.sibling;
        }
        if (!v) {
          for (w = d.child; w; ) {
            if (w === i) {
              (v = !0), (i = d), (l = c);
              break;
            }
            if (w === l) {
              (v = !0), (l = d), (i = c);
              break;
            }
            w = w.sibling;
          }
          if (!v) throw Error(s(189));
        }
      }
      if (i.alternate !== l) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? e : t;
  }
  function m(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = m(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var p = Object.assign,
    g = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    S = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    N = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    U = Symbol.for("react.provider"),
    Y = Symbol.for("react.consumer"),
    z = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    j = Symbol.for("react.suspense_list"),
    ie = Symbol.for("react.memo"),
    ue = Symbol.for("react.lazy"),
    te = Symbol.for("react.activity"),
    be = Symbol.for("react.memo_cache_sentinel"),
    Le = Symbol.iterator;
  function he(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Le && e[Le]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Ne = Symbol.for("react.client.reference");
  function _e(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ne ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case x:
        return "Fragment";
      case C:
        return "Profiler";
      case N:
        return "StrictMode";
      case P:
        return "Suspense";
      case j:
        return "SuspenseList";
      case te:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case z:
          return (e.displayName || "Context") + ".Provider";
        case Y:
          return (e._context.displayName || "Context") + ".Consumer";
        case Q:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ie:
          return (
            (t = e.displayName || null), t !== null ? t : _e(e.type) || "Memo"
          );
        case ue:
          (t = e._payload), (e = e._init);
          try {
            return _e(e(t));
          } catch {}
      }
    return null;
  }
  var Re = Array.isArray,
    q = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ee = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ce = { pending: !1, data: null, method: null, action: null },
    De = [],
    T = -1;
  function Z(e) {
    return { current: e };
  }
  function se(e) {
    0 > T || ((e.current = De[T]), (De[T] = null), T--);
  }
  function ne(e, t) {
    T++, (De[T] = e.current), (e.current = t);
  }
  var ve = Z(null),
    He = Z(null),
    Te = Z(null),
    Mt = Z(null);
  function it(e, t) {
    switch ((ne(Te, t), ne(He, e), ne(ve, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Yv(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Yv(t)), (e = Kv(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    se(ve), ne(ve, e);
  }
  function cn() {
    se(ve), se(He), se(Te);
  }
  function gt(e) {
    e.memoizedState !== null && ne(Mt, e);
    var t = ve.current,
      i = Kv(t, e.type);
    t !== i && (ne(He, e), ne(ve, i));
  }
  function xn(e) {
    He.current === e && (se(ve), se(He)),
      Mt.current === e && (se(Mt), (Wl._currentValue = ce));
  }
  var Ar = Object.prototype.hasOwnProperty,
    ti = n.unstable_scheduleCallback,
    fn = n.unstable_cancelCallback,
    Yi = n.unstable_shouldYield,
    ll = n.unstable_requestPaint,
    en = n.unstable_now,
    Go = n.unstable_getCurrentPriorityLevel,
    ni = n.unstable_ImmediatePriority,
    O = n.unstable_UserBlockingPriority,
    $ = n.unstable_NormalPriority,
    K = n.unstable_LowPriority,
    oe = n.unstable_IdlePriority,
    le = n.log,
    re = n.unstable_setDisableYieldValue,
    fe = null,
    Oe = null;
  function Ve(e) {
    if (
      (typeof le == "function" && re(e),
      Oe && typeof Oe.setStrictMode == "function")
    )
      try {
        Oe.setStrictMode(fe, e);
      } catch {}
  }
  var rt = Math.clz32 ? Math.clz32 : Ki,
    na = Math.log,
    Nt = Math.LN2;
  function Ki(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((na(e) / Nt) | 0)) | 0;
  }
  var Zn = 256,
    In = 4194304;
  function Jn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function yr(e, t, i) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0,
      d = e.suspendedLanes,
      v = e.pingedLanes;
    e = e.warmLanes;
    var w = l & 134217727;
    return (
      w !== 0
        ? ((l = w & ~d),
          l !== 0
            ? (c = Jn(l))
            : ((v &= w),
              v !== 0
                ? (c = Jn(v))
                : i || ((i = w & ~e), i !== 0 && (c = Jn(i)))))
        : ((w = l & ~d),
          w !== 0
            ? (c = Jn(w))
            : v !== 0
            ? (c = Jn(v))
            : i || ((i = l & ~e), i !== 0 && (c = Jn(i)))),
      c === 0
        ? 0
        : t !== 0 &&
          t !== c &&
          (t & d) === 0 &&
          ((d = c & -c),
          (i = t & -t),
          d >= i || (d === 32 && (i & 4194048) !== 0))
        ? t
        : c
    );
  }
  function kn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ri(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xi() {
    var e = Zn;
    return (Zn <<= 1), (Zn & 4194048) === 0 && (Zn = 256), e;
  }
  function Qo() {
    var e = In;
    return (In <<= 1), (In & 62914560) === 0 && (In = 4194304), e;
  }
  function Zi(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function ai(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Yo(e, t, i, l, c, d) {
    var v = e.pendingLanes;
    (e.pendingLanes = i),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= i),
      (e.entangledLanes &= i),
      (e.errorRecoveryDisabledLanes &= i),
      (e.shellSuspendCounter = 0);
    var w = e.entanglements,
      E = e.expirationTimes,
      H = e.hiddenUpdates;
    for (i = v & ~i; 0 < i; ) {
      var X = 31 - rt(i),
        J = 1 << X;
      (w[X] = 0), (E[X] = -1);
      var V = H[X];
      if (V !== null)
        for (H[X] = null, X = 0; X < V.length; X++) {
          var F = V[X];
          F !== null && (F.lane &= -536870913);
        }
      i &= ~J;
    }
    l !== 0 && ii(e, l, 0),
      d !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(v & ~t));
  }
  function ii(e, t, i) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - rt(t);
    (e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (i & 4194090));
  }
  function si(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i; ) {
      var l = 31 - rt(i),
        c = 1 << l;
      (c & t) | (e[l] & t) && (e[l] |= t), (i &= ~c);
    }
  }
  function ol(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ul(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function A() {
    var e = ee.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : hg(e.type));
  }
  function L(e, t) {
    var i = ee.p;
    try {
      return (ee.p = e), t();
    } finally {
      ee.p = i;
    }
  }
  var G = Math.random().toString(36).slice(2),
    W = "__reactFiber$" + G,
    ae = "__reactProps$" + G,
    pe = "__reactContainer$" + G,
    je = "__reactEvents$" + G,
    ye = "__reactListeners$" + G,
    xe = "__reactHandles$" + G,
    Ee = "__reactResources$" + G,
    Ue = "__reactMarker$" + G;
  function we(e) {
    delete e[W], delete e[ae], delete e[je], delete e[ye], delete e[xe];
  }
  function ze(e) {
    var t = e[W];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if ((t = i[pe] || i[W])) {
        if (
          ((i = t.alternate),
          t.child !== null || (i !== null && i.child !== null))
        )
          for (e = Jv(e); e !== null; ) {
            if ((i = e[W])) return i;
            e = Jv(e);
          }
        return t;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function We(e) {
    if ((e = e[W] || e[pe])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function yt(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function bt(e) {
    var t = e[Ee];
    return (
      t ||
        (t = e[Ee] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function et(e) {
    e[Ue] = !0;
  }
  var Ze = new Set(),
    ra = {};
  function tn(e, t) {
    zn(e, t), zn(e + "Capture", t);
  }
  function zn(e, t) {
    for (ra[e] = t, e = 0; e < t.length; e++) Ze.add(t[e]);
  }
  var dn = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    aa = {},
    ia = {};
  function cl(e) {
    return Ar.call(ia, e)
      ? !0
      : Ar.call(aa, e)
      ? !1
      : dn.test(e)
      ? (ia[e] = !0)
      : ((aa[e] = !0), !1);
  }
  function Ln(e, t, i) {
    if (cl(t))
      if (i === null) e.removeAttribute(t);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + i);
      }
  }
  function jr(e, t, i) {
    if (i === null) e.removeAttribute(t);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + i);
    }
  }
  function Fe(e, t, i, l) {
    if (l === null) e.removeAttribute(i);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(t, i, "" + l);
    }
  }
  var Xt, Wn;
  function er(e) {
    if (Xt === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        (Xt = (t && t[1]) || ""),
          (Wn =
            -1 <
            i.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < i.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Xt +
      e +
      Wn
    );
  }
  var li = !1;
  function pt(e, t) {
    if (!e || li) return "";
    li = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var J = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(J.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(J, []);
                } catch (F) {
                  var V = F;
                }
                Reflect.construct(e, [], J);
              } else {
                try {
                  J.call();
                } catch (F) {
                  V = F;
                }
                e.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                V = F;
              }
              (J = e()) &&
                typeof J.catch == "function" &&
                J.catch(function () {});
            }
          } catch (F) {
            if (F && V && typeof F.stack == "string") return [F.stack, V.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      c &&
        c.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = l.DetermineComponentFrameRoot(),
        v = d[0],
        w = d[1];
      if (v && w) {
        var E = v.split(`
`),
          H = w.split(`
`);
        for (
          c = l = 0;
          l < E.length && !E[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; c < H.length && !H[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (l === E.length || c === H.length)
          for (
            l = E.length - 1, c = H.length - 1;
            1 <= l && 0 <= c && E[l] !== H[c];

          )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (E[l] !== H[c]) {
            if (l !== 1 || c !== 1)
              do
                if ((l--, c--, 0 > c || E[l] !== H[c])) {
                  var X =
                    `
` + E[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      X.includes("<anonymous>") &&
                      (X = X.replace("<anonymous>", e.displayName)),
                    X
                  );
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      (li = !1), (Error.prepareStackTrace = i);
    }
    return (i = e ? e.displayName || e.name : "") ? er(i) : "";
  }
  function sa(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return er(e.type);
      case 16:
        return er("Lazy");
      case 13:
        return er("Suspense");
      case 19:
        return er("SuspenseList");
      case 0:
      case 15:
        return pt(e.type, !1);
      case 11:
        return pt(e.type.render, !1);
      case 1:
        return pt(e.type, !0);
      case 31:
        return er("Activity");
      default:
        return "";
    }
  }
  function fl(e) {
    try {
      var t = "";
      do (t += sa(e)), (e = e.return);
      while (e);
      return t;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  function hn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function $y(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function W_(e) {
    var t = $y(e) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var c = i.get,
        d = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (v) {
            (l = "" + v), d.call(this, v);
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (v) {
            l = "" + v;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ko(e) {
    e._valueTracker || (e._valueTracker = W_(e));
  }
  function Vy(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      l = "";
    return (
      e && (l = $y(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== i ? (t.setValue(e), !0) : !1
    );
  }
  function Xo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var ew = /[\n"\\]/g;
  function Bn(e) {
    return e.replace(ew, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Jc(e, t, i, l, c, d, v, w) {
    (e.name = ""),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.type = v)
        : e.removeAttribute("type"),
      t != null
        ? v === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + hn(t))
          : e.value !== "" + hn(t) && (e.value = "" + hn(t))
        : (v !== "submit" && v !== "reset") || e.removeAttribute("value"),
      t != null
        ? Wc(e, v, hn(t))
        : i != null
        ? Wc(e, v, hn(i))
        : l != null && e.removeAttribute("value"),
      c == null && d != null && (e.defaultChecked = !!d),
      c != null &&
        (e.checked = c && typeof c != "function" && typeof c != "symbol"),
      w != null &&
      typeof w != "function" &&
      typeof w != "symbol" &&
      typeof w != "boolean"
        ? (e.name = "" + hn(w))
        : e.removeAttribute("name");
  }
  function Fy(e, t, i, l, c, d, v, w) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.type = d),
      t != null || i != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || t != null)) return;
      (i = i != null ? "" + hn(i) : ""),
        (t = t != null ? "" + hn(t) : i),
        w || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? c),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = w ? e.checked : !!l),
      (e.defaultChecked = !!l),
      v != null &&
        typeof v != "function" &&
        typeof v != "symbol" &&
        typeof v != "boolean" &&
        (e.name = v);
  }
  function Wc(e, t, i) {
    (t === "number" && Xo(e.ownerDocument) === e) ||
      e.defaultValue === "" + i ||
      (e.defaultValue = "" + i);
  }
  function Ii(e, t, i, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < i.length; c++) t["$" + i[c]] = !0;
      for (i = 0; i < e.length; i++)
        (c = t.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== c && (e[i].selected = c),
          c && l && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + hn(i), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          (e[c].selected = !0), l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Gy(e, t, i) {
    if (
      t != null &&
      ((t = "" + hn(t)), t !== e.value && (e.value = t), i == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = i != null ? "" + hn(i) : "";
  }
  function Qy(e, t, i, l) {
    if (t == null) {
      if (l != null) {
        if (i != null) throw Error(s(92));
        if (Re(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        i = l;
      }
      i == null && (i = ""), (t = i);
    }
    (i = hn(t)),
      (e.defaultValue = i),
      (l = e.textContent),
      l === i && l !== "" && l !== null && (e.value = l);
  }
  function Ji(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var tw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Yy(e, t, i) {
    var l = t.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : l
      ? e.setProperty(t, i)
      : typeof i != "number" || i === 0 || tw.has(t)
      ? t === "float"
        ? (e.cssFloat = i)
        : (e[t] = ("" + i).trim())
      : (e[t] = i + "px");
  }
  function Ky(e, t, i) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((e = e.style), i != null)) {
      for (var l in i)
        !i.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var c in t)
        (l = t[c]), t.hasOwnProperty(c) && i[c] !== l && Yy(e, c, l);
    } else for (var d in t) t.hasOwnProperty(d) && Yy(e, d, t[d]);
  }
  function ef(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var nw = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    rw =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zo(e) {
    return rw.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var tf = null;
  function nf(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Wi = null,
    es = null;
  function Xy(e) {
    var t = We(e);
    if (t && (e = t.stateNode)) {
      var i = e[ae] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Jc(
              e,
              i.value,
              i.defaultValue,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name
            ),
            (t = i.name),
            i.type === "radio" && t != null)
          ) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                'input[name="' + Bn("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < i.length;
              t++
            ) {
              var l = i[t];
              if (l !== e && l.form === e.form) {
                var c = l[ae] || null;
                if (!c) throw Error(s(90));
                Jc(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (t = 0; t < i.length; t++)
              (l = i[t]), l.form === e.form && Vy(l);
          }
          break e;
        case "textarea":
          Gy(e, i.value, i.defaultValue);
          break e;
        case "select":
          (t = i.value), t != null && Ii(e, !!i.multiple, t, !1);
      }
    }
  }
  var rf = !1;
  function Zy(e, t, i) {
    if (rf) return e(t, i);
    rf = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((rf = !1),
        (Wi !== null || es !== null) &&
          (ku(), Wi && ((t = Wi), (e = es), (es = Wi = null), Xy(t), e)))
      )
        for (t = 0; t < e.length; t++) Xy(e[t]);
    }
  }
  function dl(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var l = i[ae] || null;
    if (l === null) return null;
    i = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(s(231, t, typeof i));
    return i;
  }
  var Cr = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    af = !1;
  if (Cr)
    try {
      var hl = {};
      Object.defineProperty(hl, "passive", {
        get: function () {
          af = !0;
        },
      }),
        window.addEventListener("test", hl, hl),
        window.removeEventListener("test", hl, hl);
    } catch {
      af = !1;
    }
  var la = null,
    sf = null,
    Io = null;
  function Iy() {
    if (Io) return Io;
    var e,
      t = sf,
      i = t.length,
      l,
      c = "value" in la ? la.value : la.textContent,
      d = c.length;
    for (e = 0; e < i && t[e] === c[e]; e++);
    var v = i - e;
    for (l = 1; l <= v && t[i - l] === c[d - l]; l++);
    return (Io = c.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Jo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Wo() {
    return !0;
  }
  function Jy() {
    return !1;
  }
  function yn(e) {
    function t(i, l, c, d, v) {
      (this._reactName = i),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = d),
        (this.target = v),
        (this.currentTarget = null);
      for (var w in e)
        e.hasOwnProperty(w) && ((i = e[w]), (this[w] = i ? i(d) : d[w]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Wo
          : Jy),
        (this.isPropagationStopped = Jy),
        this
      );
    }
    return (
      p(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = Wo));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Wo));
        },
        persist: function () {},
        isPersistent: Wo,
      }),
      t
    );
  }
  var oi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    eu = yn(oi),
    yl = p({}, oi, { view: 0, detail: 0 }),
    aw = yn(yl),
    lf,
    of,
    ml,
    tu = p({}, yl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: cf,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ml &&
              (ml && e.type === "mousemove"
                ? ((lf = e.screenX - ml.screenX), (of = e.screenY - ml.screenY))
                : (of = lf = 0),
              (ml = e)),
            lf);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : of;
      },
    }),
    Wy = yn(tu),
    iw = p({}, tu, { dataTransfer: 0 }),
    sw = yn(iw),
    lw = p({}, yl, { relatedTarget: 0 }),
    uf = yn(lw),
    ow = p({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uw = yn(ow),
    cw = p({}, oi, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    fw = yn(cw),
    dw = p({}, oi, { data: 0 }),
    em = yn(dw),
    hw = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    yw = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    mw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function pw(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = mw[e])
      ? !!t[e]
      : !1;
  }
  function cf() {
    return pw;
  }
  var vw = p({}, yl, {
      key: function (e) {
        if (e.key) {
          var t = hw[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Jo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? yw[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cf,
      charCode: function (e) {
        return e.type === "keypress" ? Jo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Jo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    gw = yn(vw),
    bw = p({}, tu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    tm = yn(bw),
    _w = p({}, yl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cf,
    }),
    ww = yn(_w),
    Sw = p({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xw = yn(Sw),
    Ew = p({}, tu, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Tw = yn(Ew),
    Rw = p({}, oi, { newState: 0, oldState: 0 }),
    Ow = yn(Rw),
    Aw = [9, 13, 27, 32],
    ff = Cr && "CompositionEvent" in window,
    pl = null;
  Cr && "documentMode" in document && (pl = document.documentMode);
  var jw = Cr && "TextEvent" in window && !pl,
    nm = Cr && (!ff || (pl && 8 < pl && 11 >= pl)),
    rm = " ",
    am = !1;
  function im(e, t) {
    switch (e) {
      case "keyup":
        return Aw.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var ts = !1;
  function Cw(e, t) {
    switch (e) {
      case "compositionend":
        return sm(t);
      case "keypress":
        return t.which !== 32 ? null : ((am = !0), rm);
      case "textInput":
        return (e = t.data), e === rm && am ? null : e;
      default:
        return null;
    }
  }
  function Dw(e, t) {
    if (ts)
      return e === "compositionend" || (!ff && im(e, t))
        ? ((e = Iy()), (Io = sf = la = null), (ts = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return nm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Mw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function lm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Mw[e.type] : t === "textarea";
  }
  function om(e, t, i, l) {
    Wi ? (es ? es.push(l) : (es = [l])) : (Wi = l),
      (t = Pu(t, "onChange")),
      0 < t.length &&
        ((i = new eu("onChange", "change", null, i, l)),
        e.push({ event: i, listeners: t }));
  }
  var vl = null,
    gl = null;
  function Nw(e) {
    $v(e, 0);
  }
  function nu(e) {
    var t = yt(e);
    if (Vy(t)) return e;
  }
  function um(e, t) {
    if (e === "change") return t;
  }
  var cm = !1;
  if (Cr) {
    var df;
    if (Cr) {
      var hf = "oninput" in document;
      if (!hf) {
        var fm = document.createElement("div");
        fm.setAttribute("oninput", "return;"),
          (hf = typeof fm.oninput == "function");
      }
      df = hf;
    } else df = !1;
    cm = df && (!document.documentMode || 9 < document.documentMode);
  }
  function dm() {
    vl && (vl.detachEvent("onpropertychange", hm), (gl = vl = null));
  }
  function hm(e) {
    if (e.propertyName === "value" && nu(gl)) {
      var t = [];
      om(t, gl, e, nf(e)), Zy(Nw, t);
    }
  }
  function Uw(e, t, i) {
    e === "focusin"
      ? (dm(), (vl = t), (gl = i), vl.attachEvent("onpropertychange", hm))
      : e === "focusout" && dm();
  }
  function kw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return nu(gl);
  }
  function zw(e, t) {
    if (e === "click") return nu(t);
  }
  function Lw(e, t) {
    if (e === "input" || e === "change") return nu(t);
  }
  function Bw(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var En = typeof Object.is == "function" ? Object.is : Bw;
  function bl(e, t) {
    if (En(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var i = Object.keys(e),
      l = Object.keys(t);
    if (i.length !== l.length) return !1;
    for (l = 0; l < i.length; l++) {
      var c = i[l];
      if (!Ar.call(t, c) || !En(e[c], t[c])) return !1;
    }
    return !0;
  }
  function ym(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mm(e, t) {
    var i = ym(e);
    e = 0;
    for (var l; i; ) {
      if (i.nodeType === 3) {
        if (((l = e + i.textContent.length), e <= t && l >= t))
          return { node: i, offset: t - e };
        e = l;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = ym(i);
    }
  }
  function pm(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? pm(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function vm(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Xo(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Xo(e.document);
    }
    return t;
  }
  function yf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var qw = Cr && "documentMode" in document && 11 >= document.documentMode,
    ns = null,
    mf = null,
    _l = null,
    pf = !1;
  function gm(e, t, i) {
    var l =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    pf ||
      ns == null ||
      ns !== Xo(l) ||
      ((l = ns),
      "selectionStart" in l && yf(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (_l && bl(_l, l)) ||
        ((_l = l),
        (l = Pu(mf, "onSelect")),
        0 < l.length &&
          ((t = new eu("onSelect", "select", null, t, i)),
          e.push({ event: t, listeners: l }),
          (t.target = ns))));
  }
  function ui(e, t) {
    var i = {};
    return (
      (i[e.toLowerCase()] = t.toLowerCase()),
      (i["Webkit" + e] = "webkit" + t),
      (i["Moz" + e] = "moz" + t),
      i
    );
  }
  var rs = {
      animationend: ui("Animation", "AnimationEnd"),
      animationiteration: ui("Animation", "AnimationIteration"),
      animationstart: ui("Animation", "AnimationStart"),
      transitionrun: ui("Transition", "TransitionRun"),
      transitionstart: ui("Transition", "TransitionStart"),
      transitioncancel: ui("Transition", "TransitionCancel"),
      transitionend: ui("Transition", "TransitionEnd"),
    },
    vf = {},
    bm = {};
  Cr &&
    ((bm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete rs.animationend.animation,
      delete rs.animationiteration.animation,
      delete rs.animationstart.animation),
    "TransitionEvent" in window || delete rs.transitionend.transition);
  function ci(e) {
    if (vf[e]) return vf[e];
    if (!rs[e]) return e;
    var t = rs[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in bm) return (vf[e] = t[i]);
    return e;
  }
  var _m = ci("animationend"),
    wm = ci("animationiteration"),
    Sm = ci("animationstart"),
    Hw = ci("transitionrun"),
    Pw = ci("transitionstart"),
    $w = ci("transitioncancel"),
    xm = ci("transitionend"),
    Em = new Map(),
    gf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  gf.push("scrollEnd");
  function tr(e, t) {
    Em.set(e, t), tn(t, [e]);
  }
  var Tm = new WeakMap();
  function qn(e, t) {
    if (typeof e == "object" && e !== null) {
      var i = Tm.get(e);
      return i !== void 0
        ? i
        : ((t = { value: e, source: t, stack: fl(t) }), Tm.set(e, t), t);
    }
    return { value: e, source: t, stack: fl(t) };
  }
  var Hn = [],
    as = 0,
    bf = 0;
  function ru() {
    for (var e = as, t = (bf = as = 0); t < e; ) {
      var i = Hn[t];
      Hn[t++] = null;
      var l = Hn[t];
      Hn[t++] = null;
      var c = Hn[t];
      Hn[t++] = null;
      var d = Hn[t];
      if (((Hn[t++] = null), l !== null && c !== null)) {
        var v = l.pending;
        v === null ? (c.next = c) : ((c.next = v.next), (v.next = c)),
          (l.pending = c);
      }
      d !== 0 && Rm(i, c, d);
    }
  }
  function au(e, t, i, l) {
    (Hn[as++] = e),
      (Hn[as++] = t),
      (Hn[as++] = i),
      (Hn[as++] = l),
      (bf |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function _f(e, t, i, l) {
    return au(e, t, i, l), iu(e);
  }
  function is(e, t) {
    return au(e, null, null, t), iu(e);
  }
  function Rm(e, t, i) {
    e.lanes |= i;
    var l = e.alternate;
    l !== null && (l.lanes |= i);
    for (var c = !1, d = e.return; d !== null; )
      (d.childLanes |= i),
        (l = d.alternate),
        l !== null && (l.childLanes |= i),
        d.tag === 22 &&
          ((e = d.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = d),
        (d = d.return);
    return e.tag === 3
      ? ((d = e.stateNode),
        c &&
          t !== null &&
          ((c = 31 - rt(i)),
          (e = d.hiddenUpdates),
          (l = e[c]),
          l === null ? (e[c] = [t]) : l.push(t),
          (t.lane = i | 536870912)),
        d)
      : null;
  }
  function iu(e) {
    if (50 < Gl) throw ((Gl = 0), (Rd = null), Error(s(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ss = {};
  function Vw(e, t, i, l) {
    (this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Tn(e, t, i, l) {
    return new Vw(e, t, i, l);
  }
  function wf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Dr(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = Tn(e.tag, t, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = t),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 65011712),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (i.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      (i.refCleanup = e.refCleanup),
      i
    );
  }
  function Om(e, t) {
    e.flags &= 65011714;
    var i = e.alternate;
    return (
      i === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = i.childLanes),
          (e.lanes = i.lanes),
          (e.child = i.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = i.memoizedProps),
          (e.memoizedState = i.memoizedState),
          (e.updateQueue = i.updateQueue),
          (e.type = i.type),
          (t = i.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function su(e, t, i, l, c, d) {
    var v = 0;
    if (((l = e), typeof e == "function")) wf(e) && (v = 1);
    else if (typeof e == "string")
      v = GS(e, i, ve.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case te:
          return (e = Tn(31, i, t, c)), (e.elementType = te), (e.lanes = d), e;
        case x:
          return fi(i.children, c, d, t);
        case N:
          (v = 8), (c |= 24);
          break;
        case C:
          return (
            (e = Tn(12, i, t, c | 2)), (e.elementType = C), (e.lanes = d), e
          );
        case P:
          return (e = Tn(13, i, t, c)), (e.elementType = P), (e.lanes = d), e;
        case j:
          return (e = Tn(19, i, t, c)), (e.elementType = j), (e.lanes = d), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case U:
              case z:
                v = 10;
                break e;
              case Y:
                v = 9;
                break e;
              case Q:
                v = 11;
                break e;
              case ie:
                v = 14;
                break e;
              case ue:
                (v = 16), (l = null);
                break e;
            }
          (v = 29),
            (i = Error(s(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (t = Tn(v, i, t, c)), (t.elementType = e), (t.type = l), (t.lanes = d), t
    );
  }
  function fi(e, t, i, l) {
    return (e = Tn(7, e, l, t)), (e.lanes = i), e;
  }
  function Sf(e, t, i) {
    return (e = Tn(6, e, null, t)), (e.lanes = i), e;
  }
  function xf(e, t, i) {
    return (
      (t = Tn(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ls = [],
    os = 0,
    lu = null,
    ou = 0,
    Pn = [],
    $n = 0,
    di = null,
    Mr = 1,
    Nr = "";
  function hi(e, t) {
    (ls[os++] = ou), (ls[os++] = lu), (lu = e), (ou = t);
  }
  function Am(e, t, i) {
    (Pn[$n++] = Mr), (Pn[$n++] = Nr), (Pn[$n++] = di), (di = e);
    var l = Mr;
    e = Nr;
    var c = 32 - rt(l) - 1;
    (l &= ~(1 << c)), (i += 1);
    var d = 32 - rt(t) + c;
    if (30 < d) {
      var v = c - (c % 5);
      (d = (l & ((1 << v) - 1)).toString(32)),
        (l >>= v),
        (c -= v),
        (Mr = (1 << (32 - rt(t) + c)) | (i << c) | l),
        (Nr = d + e);
    } else (Mr = (1 << d) | (i << c) | l), (Nr = e);
  }
  function Ef(e) {
    e.return !== null && (hi(e, 1), Am(e, 1, 0));
  }
  function Tf(e) {
    for (; e === lu; )
      (lu = ls[--os]), (ls[os] = null), (ou = ls[--os]), (ls[os] = null);
    for (; e === di; )
      (di = Pn[--$n]),
        (Pn[$n] = null),
        (Nr = Pn[--$n]),
        (Pn[$n] = null),
        (Mr = Pn[--$n]),
        (Pn[$n] = null);
  }
  var nn = null,
    St = null,
    nt = !1,
    yi = null,
    mr = !1,
    Rf = Error(s(519));
  function mi(e) {
    var t = Error(s(418, ""));
    throw (xl(qn(t, e)), Rf);
  }
  function jm(e) {
    var t = e.stateNode,
      i = e.type,
      l = e.memoizedProps;
    switch (((t[W] = e), (t[ae] = l), i)) {
      case "dialog":
        Ye("cancel", t), Ye("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ye("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Yl.length; i++) Ye(Yl[i], t);
        break;
      case "source":
        Ye("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ye("error", t), Ye("load", t);
        break;
      case "details":
        Ye("toggle", t);
        break;
      case "input":
        Ye("invalid", t),
          Fy(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Ko(t);
        break;
      case "select":
        Ye("invalid", t);
        break;
      case "textarea":
        Ye("invalid", t), Qy(t, l.value, l.defaultValue, l.children), Ko(t);
    }
    (i = l.children),
      (typeof i != "string" && typeof i != "number" && typeof i != "bigint") ||
      t.textContent === "" + i ||
      l.suppressHydrationWarning === !0 ||
      Qv(t.textContent, i)
        ? (l.popover != null && (Ye("beforetoggle", t), Ye("toggle", t)),
          l.onScroll != null && Ye("scroll", t),
          l.onScrollEnd != null && Ye("scrollend", t),
          l.onClick != null && (t.onclick = $u),
          (t = !0))
        : (t = !1),
      t || mi(e);
  }
  function Cm(e) {
    for (nn = e.return; nn; )
      switch (nn.tag) {
        case 5:
        case 13:
          mr = !1;
          return;
        case 27:
        case 3:
          mr = !0;
          return;
        default:
          nn = nn.return;
      }
  }
  function wl(e) {
    if (e !== nn) return !1;
    if (!nt) return Cm(e), (nt = !0), !1;
    var t = e.tag,
      i;
    if (
      ((i = t !== 3 && t !== 27) &&
        ((i = t === 5) &&
          ((i = e.type),
          (i =
            !(i !== "form" && i !== "button") || $d(e.type, e.memoizedProps))),
        (i = !i)),
      i && St && mi(e),
      Cm(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((i = e.data), i === "/$")) {
              if (t === 0) {
                St = rr(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
          e = e.nextSibling;
        }
        St = null;
      }
    } else
      t === 27
        ? ((t = St), xa(e.type) ? ((e = Qd), (Qd = null), (St = e)) : (St = t))
        : (St = nn ? rr(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Sl() {
    (St = nn = null), (nt = !1);
  }
  function Dm() {
    var e = yi;
    return (
      e !== null &&
        (vn === null ? (vn = e) : vn.push.apply(vn, e), (yi = null)),
      e
    );
  }
  function xl(e) {
    yi === null ? (yi = [e]) : yi.push(e);
  }
  var Of = Z(null),
    pi = null,
    Ur = null;
  function oa(e, t, i) {
    ne(Of, t._currentValue), (t._currentValue = i);
  }
  function kr(e) {
    (e._currentValue = Of.current), se(Of);
  }
  function Af(e, t, i) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function jf(e, t, i, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var v = c.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var w = d;
          d = c;
          for (var E = 0; E < t.length; E++)
            if (w.context === t[E]) {
              (d.lanes |= i),
                (w = d.alternate),
                w !== null && (w.lanes |= i),
                Af(d.return, i, e),
                l || (v = null);
              break e;
            }
          d = w.next;
        }
      } else if (c.tag === 18) {
        if (((v = c.return), v === null)) throw Error(s(341));
        (v.lanes |= i),
          (d = v.alternate),
          d !== null && (d.lanes |= i),
          Af(v, i, e),
          (v = null);
      } else v = c.child;
      if (v !== null) v.return = c;
      else
        for (v = c; v !== null; ) {
          if (v === e) {
            v = null;
            break;
          }
          if (((c = v.sibling), c !== null)) {
            (c.return = v.return), (v = c);
            break;
          }
          v = v.return;
        }
      c = v;
    }
  }
  function El(e, t, i, l) {
    e = null;
    for (var c = t, d = !1; c !== null; ) {
      if (!d) {
        if ((c.flags & 524288) !== 0) d = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var v = c.alternate;
        if (v === null) throw Error(s(387));
        if (((v = v.memoizedProps), v !== null)) {
          var w = c.type;
          En(c.pendingProps.value, v.value) ||
            (e !== null ? e.push(w) : (e = [w]));
        }
      } else if (c === Mt.current) {
        if (((v = c.alternate), v === null)) throw Error(s(387));
        v.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(Wl) : (e = [Wl]));
      }
      c = c.return;
    }
    e !== null && jf(t, e, i, l), (t.flags |= 262144);
  }
  function uu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!En(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function vi(e) {
    (pi = e),
      (Ur = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Zt(e) {
    return Mm(pi, e);
  }
  function cu(e, t) {
    return pi === null && vi(e), Mm(e, t);
  }
  function Mm(e, t) {
    var i = t._currentValue;
    if (((t = { context: t, memoizedValue: i, next: null }), Ur === null)) {
      if (e === null) throw Error(s(308));
      (Ur = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Ur = Ur.next = t;
    return i;
  }
  var Fw =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (i, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (i) {
                  return i();
                });
            };
          },
    Gw = n.unstable_scheduleCallback,
    Qw = n.unstable_NormalPriority,
    Ut = {
      $$typeof: z,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Cf() {
    return { controller: new Fw(), data: new Map(), refCount: 0 };
  }
  function Tl(e) {
    e.refCount--,
      e.refCount === 0 &&
        Gw(Qw, function () {
          e.controller.abort();
        });
  }
  var Rl = null,
    Df = 0,
    us = 0,
    cs = null;
  function Yw(e, t) {
    if (Rl === null) {
      var i = (Rl = []);
      (Df = 0),
        (us = Nd()),
        (cs = {
          status: "pending",
          value: void 0,
          then: function (l) {
            i.push(l);
          },
        });
    }
    return Df++, t.then(Nm, Nm), t;
  }
  function Nm() {
    if (--Df === 0 && Rl !== null) {
      cs !== null && (cs.status = "fulfilled");
      var e = Rl;
      (Rl = null), (us = 0), (cs = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Kw(e, t) {
    var i = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          i.push(c);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var c = 0; c < i.length; c++) (0, i[c])(t);
        },
        function (c) {
          for (l.status = "rejected", l.reason = c, c = 0; c < i.length; c++)
            (0, i[c])(void 0);
        }
      ),
      l
    );
  }
  var Um = q.S;
  q.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Yw(e, t),
      Um !== null && Um(e, t);
  };
  var gi = Z(null);
  function Mf() {
    var e = gi.current;
    return e !== null ? e : dt.pooledCache;
  }
  function fu(e, t) {
    t === null ? ne(gi, gi.current) : ne(gi, t.pool);
  }
  function km() {
    var e = Mf();
    return e === null ? null : { parent: Ut._currentValue, pool: e };
  }
  var Ol = Error(s(460)),
    zm = Error(s(474)),
    du = Error(s(542)),
    Nf = { then: function () {} };
  function Lm(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function hu() {}
  function Bm(e, t, i) {
    switch (
      ((i = e[i]),
      i === void 0 ? e.push(t) : i !== t && (t.then(hu, hu), (t = i)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Hm(e), e);
      default:
        if (typeof t.status == "string") t.then(hu, hu);
        else {
          if (((e = dt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var c = t;
                  (c.status = "fulfilled"), (c.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var c = t;
                  (c.status = "rejected"), (c.reason = l);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Hm(e), e);
        }
        throw ((Al = t), Ol);
    }
  }
  var Al = null;
  function qm() {
    if (Al === null) throw Error(s(459));
    var e = Al;
    return (Al = null), e;
  }
  function Hm(e) {
    if (e === Ol || e === du) throw Error(s(483));
  }
  var ua = !1;
  function Uf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function kf(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function ca(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function fa(e, t, i) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (st & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (l.pending = t),
        (t = iu(e)),
        Rm(e, null, i),
        t
      );
    }
    return au(e, l, t, i), iu(e);
  }
  function jl(e, t, i) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194048) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (i |= l), (t.lanes = i), si(e, i);
    }
  }
  function zf(e, t) {
    var i = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), i === l)) {
      var c = null,
        d = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var v = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null,
          };
          d === null ? (c = d = v) : (d = d.next = v), (i = i.next);
        } while (i !== null);
        d === null ? (c = d = t) : (d = d.next = t);
      } else c = d = t;
      (i = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = i);
      return;
    }
    (e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = t) : (e.next = t),
      (i.lastBaseUpdate = t);
  }
  var Lf = !1;
  function Cl() {
    if (Lf) {
      var e = cs;
      if (e !== null) throw e;
    }
  }
  function Dl(e, t, i, l) {
    Lf = !1;
    var c = e.updateQueue;
    ua = !1;
    var d = c.firstBaseUpdate,
      v = c.lastBaseUpdate,
      w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var E = w,
        H = E.next;
      (E.next = null), v === null ? (d = H) : (v.next = H), (v = E);
      var X = e.alternate;
      X !== null &&
        ((X = X.updateQueue),
        (w = X.lastBaseUpdate),
        w !== v &&
          (w === null ? (X.firstBaseUpdate = H) : (w.next = H),
          (X.lastBaseUpdate = E)));
    }
    if (d !== null) {
      var J = c.baseState;
      (v = 0), (X = H = E = null), (w = d);
      do {
        var V = w.lane & -536870913,
          F = V !== w.lane;
        if (F ? (Je & V) === V : (l & V) === V) {
          V !== 0 && V === us && (Lf = !0),
            X !== null &&
              (X = X.next =
                {
                  lane: 0,
                  tag: w.tag,
                  payload: w.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ke = e,
              Ce = w;
            V = t;
            var ct = i;
            switch (Ce.tag) {
              case 1:
                if (((ke = Ce.payload), typeof ke == "function")) {
                  J = ke.call(ct, J, V);
                  break e;
                }
                J = ke;
                break e;
              case 3:
                ke.flags = (ke.flags & -65537) | 128;
              case 0:
                if (
                  ((ke = Ce.payload),
                  (V = typeof ke == "function" ? ke.call(ct, J, V) : ke),
                  V == null)
                )
                  break e;
                J = p({}, J, V);
                break e;
              case 2:
                ua = !0;
            }
          }
          (V = w.callback),
            V !== null &&
              ((e.flags |= 64),
              F && (e.flags |= 8192),
              (F = c.callbacks),
              F === null ? (c.callbacks = [V]) : F.push(V));
        } else
          (F = {
            lane: V,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            X === null ? ((H = X = F), (E = J)) : (X = X.next = F),
            (v |= V);
        if (((w = w.next), w === null)) {
          if (((w = c.shared.pending), w === null)) break;
          (F = w),
            (w = F.next),
            (F.next = null),
            (c.lastBaseUpdate = F),
            (c.shared.pending = null);
        }
      } while (!0);
      X === null && (E = J),
        (c.baseState = E),
        (c.firstBaseUpdate = H),
        (c.lastBaseUpdate = X),
        d === null && (c.shared.lanes = 0),
        (ba |= v),
        (e.lanes = v),
        (e.memoizedState = J);
    }
  }
  function Pm(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function $m(e, t) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++) Pm(i[e], t);
  }
  var fs = Z(null),
    yu = Z(0);
  function Vm(e, t) {
    (e = $r), ne(yu, e), ne(fs, t), ($r = e | t.baseLanes);
  }
  function Bf() {
    ne(yu, $r), ne(fs, fs.current);
  }
  function qf() {
    ($r = yu.current), se(fs), se(yu);
  }
  var da = 0,
    $e = null,
    ot = null,
    At = null,
    mu = !1,
    ds = !1,
    bi = !1,
    pu = 0,
    Ml = 0,
    hs = null,
    Xw = 0;
  function Tt() {
    throw Error(s(321));
  }
  function Hf(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!En(e[i], t[i])) return !1;
    return !0;
  }
  function Pf(e, t, i, l, c, d) {
    return (
      (da = d),
      ($e = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (q.H = e === null || e.memoizedState === null ? Rp : Op),
      (bi = !1),
      (d = i(l, c)),
      (bi = !1),
      ds && (d = Gm(t, i, l, c)),
      Fm(e),
      d
    );
  }
  function Fm(e) {
    q.H = Su;
    var t = ot !== null && ot.next !== null;
    if (((da = 0), (At = ot = $e = null), (mu = !1), (Ml = 0), (hs = null), t))
      throw Error(s(300));
    e === null ||
      Bt ||
      ((e = e.dependencies), e !== null && uu(e) && (Bt = !0));
  }
  function Gm(e, t, i, l) {
    $e = e;
    var c = 0;
    do {
      if ((ds && (hs = null), (Ml = 0), (ds = !1), 25 <= c))
        throw Error(s(301));
      if (((c += 1), (At = ot = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (q.H = nS), (d = t(i, l));
    } while (ds);
    return d;
  }
  function Zw() {
    var e = q.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Nl(t) : t),
      (e = e.useState()[0]),
      (ot !== null ? ot.memoizedState : null) !== e && ($e.flags |= 1024),
      t
    );
  }
  function $f() {
    var e = pu !== 0;
    return (pu = 0), e;
  }
  function Vf(e, t, i) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i);
  }
  function Ff(e) {
    if (mu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      mu = !1;
    }
    (da = 0), (At = ot = $e = null), (ds = !1), (Ml = pu = 0), (hs = null);
  }
  function mn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return At === null ? ($e.memoizedState = At = e) : (At = At.next = e), At;
  }
  function jt() {
    if (ot === null) {
      var e = $e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ot.next;
    var t = At === null ? $e.memoizedState : At.next;
    if (t !== null) (At = t), (ot = e);
    else {
      if (e === null)
        throw $e.alternate === null ? Error(s(467)) : Error(s(310));
      (ot = e),
        (e = {
          memoizedState: ot.memoizedState,
          baseState: ot.baseState,
          baseQueue: ot.baseQueue,
          queue: ot.queue,
          next: null,
        }),
        At === null ? ($e.memoizedState = At = e) : (At = At.next = e);
    }
    return At;
  }
  function Gf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Nl(e) {
    var t = Ml;
    return (
      (Ml += 1),
      hs === null && (hs = []),
      (e = Bm(hs, e, t)),
      (t = $e),
      (At === null ? t.memoizedState : At.next) === null &&
        ((t = t.alternate),
        (q.H = t === null || t.memoizedState === null ? Rp : Op)),
      e
    );
  }
  function vu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Nl(e);
      if (e.$$typeof === z) return Zt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Qf(e) {
    var t = null,
      i = $e.updateQueue;
    if ((i !== null && (t = i.memoCache), t == null)) {
      var l = $e.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      i === null && ((i = Gf()), ($e.updateQueue = i)),
      (i.memoCache = t),
      (i = t.data[t.index]),
      i === void 0)
    )
      for (i = t.data[t.index] = Array(e), l = 0; l < e; l++) i[l] = be;
    return t.index++, i;
  }
  function zr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function gu(e) {
    var t = jt();
    return Yf(t, ot, e);
  }
  function Yf(e, t, i) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = i;
    var c = e.baseQueue,
      d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var v = c.next;
        (c.next = d.next), (d.next = v);
      }
      (t.baseQueue = c = d), (l.pending = null);
    }
    if (((d = e.baseState), c === null)) e.memoizedState = d;
    else {
      t = c.next;
      var w = (v = null),
        E = null,
        H = t,
        X = !1;
      do {
        var J = H.lane & -536870913;
        if (J !== H.lane ? (Je & J) === J : (da & J) === J) {
          var V = H.revertLane;
          if (V === 0)
            E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: H.action,
                  hasEagerState: H.hasEagerState,
                  eagerState: H.eagerState,
                  next: null,
                }),
              J === us && (X = !0);
          else if ((da & V) === V) {
            (H = H.next), V === us && (X = !0);
            continue;
          } else
            (J = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null,
            }),
              E === null ? ((w = E = J), (v = d)) : (E = E.next = J),
              ($e.lanes |= V),
              (ba |= V);
          (J = H.action),
            bi && i(d, J),
            (d = H.hasEagerState ? H.eagerState : i(d, J));
        } else
          (V = {
            lane: J,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null,
          }),
            E === null ? ((w = E = V), (v = d)) : (E = E.next = V),
            ($e.lanes |= J),
            (ba |= J);
        H = H.next;
      } while (H !== null && H !== t);
      if (
        (E === null ? (v = d) : (E.next = w),
        !En(d, e.memoizedState) && ((Bt = !0), X && ((i = cs), i !== null)))
      )
        throw i;
      (e.memoizedState = d),
        (e.baseState = v),
        (e.baseQueue = E),
        (l.lastRenderedState = d);
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Kf(e) {
    var t = jt(),
      i = t.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var l = i.dispatch,
      c = i.pending,
      d = t.memoizedState;
    if (c !== null) {
      i.pending = null;
      var v = (c = c.next);
      do (d = e(d, v.action)), (v = v.next);
      while (v !== c);
      En(d, t.memoizedState) || (Bt = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (i.lastRenderedState = d);
    }
    return [d, l];
  }
  function Qm(e, t, i) {
    var l = $e,
      c = jt(),
      d = nt;
    if (d) {
      if (i === void 0) throw Error(s(407));
      i = i();
    } else i = t();
    var v = !En((ot || c).memoizedState, i);
    v && ((c.memoizedState = i), (Bt = !0)), (c = c.queue);
    var w = Xm.bind(null, l, c, e);
    if (
      (Ul(2048, 8, w, [e]),
      c.getSnapshot !== t || v || (At !== null && At.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ys(9, bu(), Km.bind(null, l, c, i, t), null),
        dt === null)
      )
        throw Error(s(349));
      d || (da & 124) !== 0 || Ym(l, t, i);
    }
    return i;
  }
  function Ym(e, t, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = $e.updateQueue),
      t === null
        ? ((t = Gf()), ($e.updateQueue = t), (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e));
  }
  function Km(e, t, i, l) {
    (t.value = i), (t.getSnapshot = l), Zm(t) && Im(e);
  }
  function Xm(e, t, i) {
    return i(function () {
      Zm(t) && Im(e);
    });
  }
  function Zm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !En(e, i);
    } catch {
      return !0;
    }
  }
  function Im(e) {
    var t = is(e, 2);
    t !== null && Cn(t, e, 2);
  }
  function Xf(e) {
    var t = mn();
    if (typeof e == "function") {
      var i = e;
      if (((e = i()), bi)) {
        Ve(!0);
        try {
          i();
        } finally {
          Ve(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zr,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Jm(e, t, i, l) {
    return (e.baseState = i), Yf(e, ot, typeof l == "function" ? l : zr);
  }
  function Iw(e, t, i, l, c) {
    if (wu(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var d = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          d.listeners.push(v);
        },
      };
      q.T !== null ? i(!0) : (d.isTransition = !1),
        l(d),
        (i = t.pending),
        i === null
          ? ((d.next = t.pending = d), Wm(t, d))
          : ((d.next = i.next), (t.pending = i.next = d));
    }
  }
  function Wm(e, t) {
    var i = t.action,
      l = t.payload,
      c = e.state;
    if (t.isTransition) {
      var d = q.T,
        v = {};
      q.T = v;
      try {
        var w = i(c, l),
          E = q.S;
        E !== null && E(v, w), ep(e, t, w);
      } catch (H) {
        Zf(e, t, H);
      } finally {
        q.T = d;
      }
    } else
      try {
        (d = i(c, l)), ep(e, t, d);
      } catch (H) {
        Zf(e, t, H);
      }
  }
  function ep(e, t, i) {
    i !== null && typeof i == "object" && typeof i.then == "function"
      ? i.then(
          function (l) {
            tp(e, t, l);
          },
          function (l) {
            return Zf(e, t, l);
          }
        )
      : tp(e, t, i);
  }
  function tp(e, t, i) {
    (t.status = "fulfilled"),
      (t.value = i),
      np(t),
      (e.state = i),
      (t = e.pending),
      t !== null &&
        ((i = t.next),
        i === t ? (e.pending = null) : ((i = i.next), (t.next = i), Wm(e, i)));
  }
  function Zf(e, t, i) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = i), np(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function np(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function rp(e, t) {
    return t;
  }
  function ap(e, t) {
    if (nt) {
      var i = dt.formState;
      if (i !== null) {
        e: {
          var l = $e;
          if (nt) {
            if (St) {
              t: {
                for (var c = St, d = mr; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break t;
                  }
                  if (((c = rr(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (d = c.data), (c = d === "F!" || d === "F" ? c : null);
              }
              if (c) {
                (St = rr(c.nextSibling)), (l = c.data === "F!");
                break e;
              }
            }
            mi(l);
          }
          l = !1;
        }
        l && (t = i[0]);
      }
    }
    return (
      (i = mn()),
      (i.memoizedState = i.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rp,
        lastRenderedState: t,
      }),
      (i.queue = l),
      (i = xp.bind(null, $e, l)),
      (l.dispatch = i),
      (l = Xf(!1)),
      (d = td.bind(null, $e, !1, l.queue)),
      (l = mn()),
      (c = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = c),
      (i = Iw.bind(null, $e, c, d, i)),
      (c.dispatch = i),
      (l.memoizedState = e),
      [t, i, !1]
    );
  }
  function ip(e) {
    var t = jt();
    return sp(t, ot, e);
  }
  function sp(e, t, i) {
    if (
      ((t = Yf(e, t, rp)[0]),
      (e = gu(zr)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = Nl(t);
      } catch (v) {
        throw v === Ol ? du : v;
      }
    else l = t;
    t = jt();
    var c = t.queue,
      d = c.dispatch;
    return (
      i !== t.memoizedState &&
        (($e.flags |= 2048), ys(9, bu(), Jw.bind(null, c, i), null)),
      [l, d, e]
    );
  }
  function Jw(e, t) {
    e.action = t;
  }
  function lp(e) {
    var t = jt(),
      i = ot;
    if (i !== null) return sp(t, i, e);
    jt(), (t = t.memoizedState), (i = jt());
    var l = i.queue.dispatch;
    return (i.memoizedState = e), [t, l, !1];
  }
  function ys(e, t, i, l) {
    return (
      (e = { tag: e, create: i, deps: l, inst: t, next: null }),
      (t = $e.updateQueue),
      t === null && ((t = Gf()), ($e.updateQueue = t)),
      (i = t.lastEffect),
      i === null
        ? (t.lastEffect = e.next = e)
        : ((l = i.next), (i.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function bu() {
    return { destroy: void 0, resource: void 0 };
  }
  function op() {
    return jt().memoizedState;
  }
  function _u(e, t, i, l) {
    var c = mn();
    (l = l === void 0 ? null : l),
      ($e.flags |= e),
      (c.memoizedState = ys(1 | t, bu(), i, l));
  }
  function Ul(e, t, i, l) {
    var c = jt();
    l = l === void 0 ? null : l;
    var d = c.memoizedState.inst;
    ot !== null && l !== null && Hf(l, ot.memoizedState.deps)
      ? (c.memoizedState = ys(t, d, i, l))
      : (($e.flags |= e), (c.memoizedState = ys(1 | t, d, i, l)));
  }
  function up(e, t) {
    _u(8390656, 8, e, t);
  }
  function cp(e, t) {
    Ul(2048, 8, e, t);
  }
  function fp(e, t) {
    return Ul(4, 2, e, t);
  }
  function dp(e, t) {
    return Ul(4, 4, e, t);
  }
  function hp(e, t) {
    if (typeof t == "function") {
      e = e();
      var i = t(e);
      return function () {
        typeof i == "function" ? i() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function yp(e, t, i) {
    (i = i != null ? i.concat([e]) : null), Ul(4, 4, hp.bind(null, t, e), i);
  }
  function If() {}
  function mp(e, t) {
    var i = jt();
    t = t === void 0 ? null : t;
    var l = i.memoizedState;
    return t !== null && Hf(t, l[1]) ? l[0] : ((i.memoizedState = [e, t]), e);
  }
  function pp(e, t) {
    var i = jt();
    t = t === void 0 ? null : t;
    var l = i.memoizedState;
    if (t !== null && Hf(t, l[1])) return l[0];
    if (((l = e()), bi)) {
      Ve(!0);
      try {
        e();
      } finally {
        Ve(!1);
      }
    }
    return (i.memoizedState = [l, t]), l;
  }
  function Jf(e, t, i) {
    return i === void 0 || (da & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = i), (e = bv()), ($e.lanes |= e), (ba |= e), i);
  }
  function vp(e, t, i, l) {
    return En(i, t)
      ? i
      : fs.current !== null
      ? ((e = Jf(e, i, l)), En(e, t) || (Bt = !0), e)
      : (da & 42) === 0
      ? ((Bt = !0), (e.memoizedState = i))
      : ((e = bv()), ($e.lanes |= e), (ba |= e), t);
  }
  function gp(e, t, i, l, c) {
    var d = ee.p;
    ee.p = d !== 0 && 8 > d ? d : 8;
    var v = q.T,
      w = {};
    (q.T = w), td(e, !1, t, i);
    try {
      var E = c(),
        H = q.S;
      if (
        (H !== null && H(w, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var X = Kw(E, l);
        kl(e, t, X, jn(e));
      } else kl(e, t, l, jn(e));
    } catch (J) {
      kl(e, t, { then: function () {}, status: "rejected", reason: J }, jn());
    } finally {
      (ee.p = d), (q.T = v);
    }
  }
  function Ww() {}
  function Wf(e, t, i, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = bp(e).queue;
    gp(
      e,
      c,
      t,
      ce,
      i === null
        ? Ww
        : function () {
            return _p(e), i(l);
          }
    );
  }
  function bp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ce,
      baseState: ce,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zr,
        lastRenderedState: ce,
      },
      next: null,
    };
    var i = {};
    return (
      (t.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: zr,
          lastRenderedState: i,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function _p(e) {
    var t = bp(e).next.queue;
    kl(e, t, {}, jn());
  }
  function ed() {
    return Zt(Wl);
  }
  function wp() {
    return jt().memoizedState;
  }
  function Sp() {
    return jt().memoizedState;
  }
  function eS(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var i = jn();
          e = ca(i);
          var l = fa(t, e, i);
          l !== null && (Cn(l, t, i), jl(l, t, i)),
            (t = { cache: Cf() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function tS(e, t, i) {
    var l = jn();
    (i = {
      lane: l,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      wu(e)
        ? Ep(t, i)
        : ((i = _f(e, t, i, l)), i !== null && (Cn(i, e, l), Tp(i, t, l)));
  }
  function xp(e, t, i) {
    var l = jn();
    kl(e, t, i, l);
  }
  function kl(e, t, i, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (wu(e)) Ep(t, c);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var v = t.lastRenderedState,
            w = d(v, i);
          if (((c.hasEagerState = !0), (c.eagerState = w), En(w, v)))
            return au(e, t, c, 0), dt === null && ru(), !1;
        } catch {
        } finally {
        }
      if (((i = _f(e, t, c, l)), i !== null))
        return Cn(i, e, l), Tp(i, t, l), !0;
    }
    return !1;
  }
  function td(e, t, i, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Nd(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      wu(e))
    ) {
      if (t) throw Error(s(479));
    } else (t = _f(e, i, l, 2)), t !== null && Cn(t, e, 2);
  }
  function wu(e) {
    var t = e.alternate;
    return e === $e || (t !== null && t === $e);
  }
  function Ep(e, t) {
    ds = mu = !0;
    var i = e.pending;
    i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (e.pending = t);
  }
  function Tp(e, t, i) {
    if ((i & 4194048) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (i |= l), (t.lanes = i), si(e, i);
    }
  }
  var Su = {
      readContext: Zt,
      use: vu,
      useCallback: Tt,
      useContext: Tt,
      useEffect: Tt,
      useImperativeHandle: Tt,
      useLayoutEffect: Tt,
      useInsertionEffect: Tt,
      useMemo: Tt,
      useReducer: Tt,
      useRef: Tt,
      useState: Tt,
      useDebugValue: Tt,
      useDeferredValue: Tt,
      useTransition: Tt,
      useSyncExternalStore: Tt,
      useId: Tt,
      useHostTransitionStatus: Tt,
      useFormState: Tt,
      useActionState: Tt,
      useOptimistic: Tt,
      useMemoCache: Tt,
      useCacheRefresh: Tt,
    },
    Rp = {
      readContext: Zt,
      use: vu,
      useCallback: function (e, t) {
        return (mn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Zt,
      useEffect: up,
      useImperativeHandle: function (e, t, i) {
        (i = i != null ? i.concat([e]) : null),
          _u(4194308, 4, hp.bind(null, t, e), i);
      },
      useLayoutEffect: function (e, t) {
        return _u(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        _u(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = mn();
        t = t === void 0 ? null : t;
        var l = e();
        if (bi) {
          Ve(!0);
          try {
            e();
          } finally {
            Ve(!1);
          }
        }
        return (i.memoizedState = [l, t]), l;
      },
      useReducer: function (e, t, i) {
        var l = mn();
        if (i !== void 0) {
          var c = i(t);
          if (bi) {
            Ve(!0);
            try {
              i(t);
            } finally {
              Ve(!1);
            }
          }
        } else c = t;
        return (
          (l.memoizedState = l.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (l.queue = e),
          (e = e.dispatch = tS.bind(null, $e, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = mn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Xf(e);
        var t = e.queue,
          i = xp.bind(null, $e, t);
        return (t.dispatch = i), [e.memoizedState, i];
      },
      useDebugValue: If,
      useDeferredValue: function (e, t) {
        var i = mn();
        return Jf(i, e, t);
      },
      useTransition: function () {
        var e = Xf(!1);
        return (
          (e = gp.bind(null, $e, e.queue, !0, !1)),
          (mn().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, i) {
        var l = $e,
          c = mn();
        if (nt) {
          if (i === void 0) throw Error(s(407));
          i = i();
        } else {
          if (((i = t()), dt === null)) throw Error(s(349));
          (Je & 124) !== 0 || Ym(l, t, i);
        }
        c.memoizedState = i;
        var d = { value: i, getSnapshot: t };
        return (
          (c.queue = d),
          up(Xm.bind(null, l, d, e), [e]),
          (l.flags |= 2048),
          ys(9, bu(), Km.bind(null, l, d, i, t), null),
          i
        );
      },
      useId: function () {
        var e = mn(),
          t = dt.identifierPrefix;
        if (nt) {
          var i = Nr,
            l = Mr;
          (i = (l & ~(1 << (32 - rt(l) - 1))).toString(32) + i),
            (t = "«" + t + "R" + i),
            (i = pu++),
            0 < i && (t += "H" + i.toString(32)),
            (t += "»");
        } else (i = Xw++), (t = "«" + t + "r" + i.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: ed,
      useFormState: ap,
      useActionState: ap,
      useOptimistic: function (e) {
        var t = mn();
        t.memoizedState = t.baseState = e;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = i),
          (t = td.bind(null, $e, !0, i)),
          (i.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Qf,
      useCacheRefresh: function () {
        return (mn().memoizedState = eS.bind(null, $e));
      },
    },
    Op = {
      readContext: Zt,
      use: vu,
      useCallback: mp,
      useContext: Zt,
      useEffect: cp,
      useImperativeHandle: yp,
      useInsertionEffect: fp,
      useLayoutEffect: dp,
      useMemo: pp,
      useReducer: gu,
      useRef: op,
      useState: function () {
        return gu(zr);
      },
      useDebugValue: If,
      useDeferredValue: function (e, t) {
        var i = jt();
        return vp(i, ot.memoizedState, e, t);
      },
      useTransition: function () {
        var e = gu(zr)[0],
          t = jt().memoizedState;
        return [typeof e == "boolean" ? e : Nl(e), t];
      },
      useSyncExternalStore: Qm,
      useId: wp,
      useHostTransitionStatus: ed,
      useFormState: ip,
      useActionState: ip,
      useOptimistic: function (e, t) {
        var i = jt();
        return Jm(i, ot, e, t);
      },
      useMemoCache: Qf,
      useCacheRefresh: Sp,
    },
    nS = {
      readContext: Zt,
      use: vu,
      useCallback: mp,
      useContext: Zt,
      useEffect: cp,
      useImperativeHandle: yp,
      useInsertionEffect: fp,
      useLayoutEffect: dp,
      useMemo: pp,
      useReducer: Kf,
      useRef: op,
      useState: function () {
        return Kf(zr);
      },
      useDebugValue: If,
      useDeferredValue: function (e, t) {
        var i = jt();
        return ot === null ? Jf(i, e, t) : vp(i, ot.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Kf(zr)[0],
          t = jt().memoizedState;
        return [typeof e == "boolean" ? e : Nl(e), t];
      },
      useSyncExternalStore: Qm,
      useId: wp,
      useHostTransitionStatus: ed,
      useFormState: lp,
      useActionState: lp,
      useOptimistic: function (e, t) {
        var i = jt();
        return ot !== null
          ? Jm(i, ot, e, t)
          : ((i.baseState = e), [e, i.queue.dispatch]);
      },
      useMemoCache: Qf,
      useCacheRefresh: Sp,
    },
    ms = null,
    zl = 0;
  function xu(e) {
    var t = zl;
    return (zl += 1), ms === null && (ms = []), Bm(ms, e, t);
  }
  function Ll(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Eu(e, t) {
    throw t.$$typeof === g
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Ap(e) {
    var t = e._init;
    return t(e._payload);
  }
  function jp(e) {
    function t(k, M) {
      if (e) {
        var B = k.deletions;
        B === null ? ((k.deletions = [M]), (k.flags |= 16)) : B.push(M);
      }
    }
    function i(k, M) {
      if (!e) return null;
      for (; M !== null; ) t(k, M), (M = M.sibling);
      return null;
    }
    function l(k) {
      for (var M = new Map(); k !== null; )
        k.key !== null ? M.set(k.key, k) : M.set(k.index, k), (k = k.sibling);
      return M;
    }
    function c(k, M) {
      return (k = Dr(k, M)), (k.index = 0), (k.sibling = null), k;
    }
    function d(k, M, B) {
      return (
        (k.index = B),
        e
          ? ((B = k.alternate),
            B !== null
              ? ((B = B.index), B < M ? ((k.flags |= 67108866), M) : B)
              : ((k.flags |= 67108866), M))
          : ((k.flags |= 1048576), M)
      );
    }
    function v(k) {
      return e && k.alternate === null && (k.flags |= 67108866), k;
    }
    function w(k, M, B, I) {
      return M === null || M.tag !== 6
        ? ((M = Sf(B, k.mode, I)), (M.return = k), M)
        : ((M = c(M, B)), (M.return = k), M);
    }
    function E(k, M, B, I) {
      var me = B.type;
      return me === x
        ? X(k, M, B.props.children, I, B.key)
        : M !== null &&
          (M.elementType === me ||
            (typeof me == "object" &&
              me !== null &&
              me.$$typeof === ue &&
              Ap(me) === M.type))
        ? ((M = c(M, B.props)), Ll(M, B), (M.return = k), M)
        : ((M = su(B.type, B.key, B.props, null, k.mode, I)),
          Ll(M, B),
          (M.return = k),
          M);
    }
    function H(k, M, B, I) {
      return M === null ||
        M.tag !== 4 ||
        M.stateNode.containerInfo !== B.containerInfo ||
        M.stateNode.implementation !== B.implementation
        ? ((M = xf(B, k.mode, I)), (M.return = k), M)
        : ((M = c(M, B.children || [])), (M.return = k), M);
    }
    function X(k, M, B, I, me) {
      return M === null || M.tag !== 7
        ? ((M = fi(B, k.mode, I, me)), (M.return = k), M)
        : ((M = c(M, B)), (M.return = k), M);
    }
    function J(k, M, B) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return (M = Sf("" + M, k.mode, B)), (M.return = k), M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case b:
            return (
              (B = su(M.type, M.key, M.props, null, k.mode, B)),
              Ll(B, M),
              (B.return = k),
              B
            );
          case S:
            return (M = xf(M, k.mode, B)), (M.return = k), M;
          case ue:
            var I = M._init;
            return (M = I(M._payload)), J(k, M, B);
        }
        if (Re(M) || he(M))
          return (M = fi(M, k.mode, B, null)), (M.return = k), M;
        if (typeof M.then == "function") return J(k, xu(M), B);
        if (M.$$typeof === z) return J(k, cu(k, M), B);
        Eu(k, M);
      }
      return null;
    }
    function V(k, M, B, I) {
      var me = M !== null ? M.key : null;
      if (
        (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
      )
        return me !== null ? null : w(k, M, "" + B, I);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case b:
            return B.key === me ? E(k, M, B, I) : null;
          case S:
            return B.key === me ? H(k, M, B, I) : null;
          case ue:
            return (me = B._init), (B = me(B._payload)), V(k, M, B, I);
        }
        if (Re(B) || he(B)) return me !== null ? null : X(k, M, B, I, null);
        if (typeof B.then == "function") return V(k, M, xu(B), I);
        if (B.$$typeof === z) return V(k, M, cu(k, B), I);
        Eu(k, B);
      }
      return null;
    }
    function F(k, M, B, I, me) {
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return (k = k.get(B) || null), w(M, k, "" + I, me);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case b:
            return (
              (k = k.get(I.key === null ? B : I.key) || null), E(M, k, I, me)
            );
          case S:
            return (
              (k = k.get(I.key === null ? B : I.key) || null), H(M, k, I, me)
            );
          case ue:
            var Ge = I._init;
            return (I = Ge(I._payload)), F(k, M, B, I, me);
        }
        if (Re(I) || he(I)) return (k = k.get(B) || null), X(M, k, I, me, null);
        if (typeof I.then == "function") return F(k, M, B, xu(I), me);
        if (I.$$typeof === z) return F(k, M, B, cu(M, I), me);
        Eu(M, I);
      }
      return null;
    }
    function ke(k, M, B, I) {
      for (
        var me = null, Ge = null, Se = M, Me = (M = 0), Ht = null;
        Se !== null && Me < B.length;
        Me++
      ) {
        Se.index > Me ? ((Ht = Se), (Se = null)) : (Ht = Se.sibling);
        var tt = V(k, Se, B[Me], I);
        if (tt === null) {
          Se === null && (Se = Ht);
          break;
        }
        e && Se && tt.alternate === null && t(k, Se),
          (M = d(tt, M, Me)),
          Ge === null ? (me = tt) : (Ge.sibling = tt),
          (Ge = tt),
          (Se = Ht);
      }
      if (Me === B.length) return i(k, Se), nt && hi(k, Me), me;
      if (Se === null) {
        for (; Me < B.length; Me++)
          (Se = J(k, B[Me], I)),
            Se !== null &&
              ((M = d(Se, M, Me)),
              Ge === null ? (me = Se) : (Ge.sibling = Se),
              (Ge = Se));
        return nt && hi(k, Me), me;
      }
      for (Se = l(Se); Me < B.length; Me++)
        (Ht = F(Se, k, Me, B[Me], I)),
          Ht !== null &&
            (e &&
              Ht.alternate !== null &&
              Se.delete(Ht.key === null ? Me : Ht.key),
            (M = d(Ht, M, Me)),
            Ge === null ? (me = Ht) : (Ge.sibling = Ht),
            (Ge = Ht));
      return (
        e &&
          Se.forEach(function (Aa) {
            return t(k, Aa);
          }),
        nt && hi(k, Me),
        me
      );
    }
    function Ce(k, M, B, I) {
      if (B == null) throw Error(s(151));
      for (
        var me = null,
          Ge = null,
          Se = M,
          Me = (M = 0),
          Ht = null,
          tt = B.next();
        Se !== null && !tt.done;
        Me++, tt = B.next()
      ) {
        Se.index > Me ? ((Ht = Se), (Se = null)) : (Ht = Se.sibling);
        var Aa = V(k, Se, tt.value, I);
        if (Aa === null) {
          Se === null && (Se = Ht);
          break;
        }
        e && Se && Aa.alternate === null && t(k, Se),
          (M = d(Aa, M, Me)),
          Ge === null ? (me = Aa) : (Ge.sibling = Aa),
          (Ge = Aa),
          (Se = Ht);
      }
      if (tt.done) return i(k, Se), nt && hi(k, Me), me;
      if (Se === null) {
        for (; !tt.done; Me++, tt = B.next())
          (tt = J(k, tt.value, I)),
            tt !== null &&
              ((M = d(tt, M, Me)),
              Ge === null ? (me = tt) : (Ge.sibling = tt),
              (Ge = tt));
        return nt && hi(k, Me), me;
      }
      for (Se = l(Se); !tt.done; Me++, tt = B.next())
        (tt = F(Se, k, Me, tt.value, I)),
          tt !== null &&
            (e &&
              tt.alternate !== null &&
              Se.delete(tt.key === null ? Me : tt.key),
            (M = d(tt, M, Me)),
            Ge === null ? (me = tt) : (Ge.sibling = tt),
            (Ge = tt));
      return (
        e &&
          Se.forEach(function (r1) {
            return t(k, r1);
          }),
        nt && hi(k, Me),
        me
      );
    }
    function ct(k, M, B, I) {
      if (
        (typeof B == "object" &&
          B !== null &&
          B.type === x &&
          B.key === null &&
          (B = B.props.children),
        typeof B == "object" && B !== null)
      ) {
        switch (B.$$typeof) {
          case b:
            e: {
              for (var me = B.key; M !== null; ) {
                if (M.key === me) {
                  if (((me = B.type), me === x)) {
                    if (M.tag === 7) {
                      i(k, M.sibling),
                        (I = c(M, B.props.children)),
                        (I.return = k),
                        (k = I);
                      break e;
                    }
                  } else if (
                    M.elementType === me ||
                    (typeof me == "object" &&
                      me !== null &&
                      me.$$typeof === ue &&
                      Ap(me) === M.type)
                  ) {
                    i(k, M.sibling),
                      (I = c(M, B.props)),
                      Ll(I, B),
                      (I.return = k),
                      (k = I);
                    break e;
                  }
                  i(k, M);
                  break;
                } else t(k, M);
                M = M.sibling;
              }
              B.type === x
                ? ((I = fi(B.props.children, k.mode, I, B.key)),
                  (I.return = k),
                  (k = I))
                : ((I = su(B.type, B.key, B.props, null, k.mode, I)),
                  Ll(I, B),
                  (I.return = k),
                  (k = I));
            }
            return v(k);
          case S:
            e: {
              for (me = B.key; M !== null; ) {
                if (M.key === me)
                  if (
                    M.tag === 4 &&
                    M.stateNode.containerInfo === B.containerInfo &&
                    M.stateNode.implementation === B.implementation
                  ) {
                    i(k, M.sibling),
                      (I = c(M, B.children || [])),
                      (I.return = k),
                      (k = I);
                    break e;
                  } else {
                    i(k, M);
                    break;
                  }
                else t(k, M);
                M = M.sibling;
              }
              (I = xf(B, k.mode, I)), (I.return = k), (k = I);
            }
            return v(k);
          case ue:
            return (me = B._init), (B = me(B._payload)), ct(k, M, B, I);
        }
        if (Re(B)) return ke(k, M, B, I);
        if (he(B)) {
          if (((me = he(B)), typeof me != "function")) throw Error(s(150));
          return (B = me.call(B)), Ce(k, M, B, I);
        }
        if (typeof B.then == "function") return ct(k, M, xu(B), I);
        if (B.$$typeof === z) return ct(k, M, cu(k, B), I);
        Eu(k, B);
      }
      return (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
        ? ((B = "" + B),
          M !== null && M.tag === 6
            ? (i(k, M.sibling), (I = c(M, B)), (I.return = k), (k = I))
            : (i(k, M), (I = Sf(B, k.mode, I)), (I.return = k), (k = I)),
          v(k))
        : i(k, M);
    }
    return function (k, M, B, I) {
      try {
        zl = 0;
        var me = ct(k, M, B, I);
        return (ms = null), me;
      } catch (Se) {
        if (Se === Ol || Se === du) throw Se;
        var Ge = Tn(29, Se, null, k.mode);
        return (Ge.lanes = I), (Ge.return = k), Ge;
      } finally {
      }
    };
  }
  var ps = jp(!0),
    Cp = jp(!1),
    Vn = Z(null),
    pr = null;
  function ha(e) {
    var t = e.alternate;
    ne(kt, kt.current & 1),
      ne(Vn, e),
      pr === null &&
        (t === null || fs.current !== null || t.memoizedState !== null) &&
        (pr = e);
  }
  function Dp(e) {
    if (e.tag === 22) {
      if ((ne(kt, kt.current), ne(Vn, e), pr === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (pr = e);
      }
    } else ya();
  }
  function ya() {
    ne(kt, kt.current), ne(Vn, Vn.current);
  }
  function Lr(e) {
    se(Vn), pr === e && (pr = null), se(kt);
  }
  var kt = Z(0);
  function Tu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || Gd(i))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function nd(e, t, i, l) {
    (t = e.memoizedState),
      (i = i(l, t)),
      (i = i == null ? t : p({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var rd = {
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var l = jn(),
        c = ca(l);
      (c.payload = t),
        i != null && (c.callback = i),
        (t = fa(e, c, l)),
        t !== null && (Cn(t, e, l), jl(t, e, l));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var l = jn(),
        c = ca(l);
      (c.tag = 1),
        (c.payload = t),
        i != null && (c.callback = i),
        (t = fa(e, c, l)),
        t !== null && (Cn(t, e, l), jl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = jn(),
        l = ca(i);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = fa(e, l, i)),
        t !== null && (Cn(t, e, i), jl(t, e, i));
    },
  };
  function Mp(e, t, i, l, c, d, v) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, d, v)
        : t.prototype && t.prototype.isPureReactComponent
        ? !bl(i, l) || !bl(c, d)
        : !0
    );
  }
  function Np(e, t, i, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(i, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(i, l),
      t.state !== e && rd.enqueueReplaceState(t, t.state, null);
  }
  function _i(e, t) {
    var i = t;
    if ("ref" in t) {
      i = {};
      for (var l in t) l !== "ref" && (i[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      i === t && (i = p({}, i));
      for (var c in e) i[c] === void 0 && (i[c] = e[c]);
    }
    return i;
  }
  var Ru =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Up(e) {
    Ru(e);
  }
  function kp(e) {
    console.error(e);
  }
  function zp(e) {
    Ru(e);
  }
  function Ou(e, t) {
    try {
      var i = e.onUncaughtError;
      i(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Lp(e, t, i) {
    try {
      var l = e.onCaughtError;
      l(i.value, {
        componentStack: i.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function ad(e, t, i) {
    return (
      (i = ca(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        Ou(e, t);
      }),
      i
    );
  }
  function Bp(e) {
    return (e = ca(e)), (e.tag = 3), e;
  }
  function qp(e, t, i, l) {
    var c = i.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var d = l.value;
      (e.payload = function () {
        return c(d);
      }),
        (e.callback = function () {
          Lp(t, i, l);
        });
    }
    var v = i.stateNode;
    v !== null &&
      typeof v.componentDidCatch == "function" &&
      (e.callback = function () {
        Lp(t, i, l),
          typeof c != "function" &&
            (_a === null ? (_a = new Set([this])) : _a.add(this));
        var w = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: w !== null ? w : "",
        });
      });
  }
  function rS(e, t, i, l, c) {
    if (
      ((i.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = i.alternate),
        t !== null && El(t, i, c, !0),
        (i = Vn.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 13:
            return (
              pr === null ? Ad() : i.alternate === null && xt === 0 && (xt = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = c),
              l === Nf
                ? (i.flags |= 16384)
                : ((t = i.updateQueue),
                  t === null ? (i.updateQueue = new Set([l])) : t.add(l),
                  Cd(e, l, c)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              l === Nf
                ? (i.flags |= 16384)
                : ((t = i.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (i.updateQueue = t))
                    : ((i = t.retryQueue),
                      i === null ? (t.retryQueue = new Set([l])) : i.add(l)),
                  Cd(e, l, c)),
              !1
            );
        }
        throw Error(s(435, i.tag));
      }
      return Cd(e, l, c), Ad(), !1;
    }
    if (nt)
      return (
        (t = Vn.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = c),
            l !== Rf && ((e = Error(s(422), { cause: l })), xl(qn(e, i))))
          : (l !== Rf && ((t = Error(s(423), { cause: l })), xl(qn(t, i))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (l = qn(l, i)),
            (c = ad(e.stateNode, l, c)),
            zf(e, c),
            xt !== 4 && (xt = 2)),
        !1
      );
    var d = Error(s(520), { cause: l });
    if (
      ((d = qn(d, i)),
      Fl === null ? (Fl = [d]) : Fl.push(d),
      xt !== 4 && (xt = 2),
      t === null)
    )
      return !0;
    (l = qn(l, i)), (i = t);
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (e = c & -c),
            (i.lanes |= e),
            (e = ad(i.stateNode, l, e)),
            zf(i, e),
            !1
          );
        case 1:
          if (
            ((t = i.type),
            (d = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (_a === null || !_a.has(d)))))
          )
            return (
              (i.flags |= 65536),
              (c &= -c),
              (i.lanes |= c),
              (c = Bp(c)),
              qp(c, e, i, l),
              zf(i, c),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Hp = Error(s(461)),
    Bt = !1;
  function Ft(e, t, i, l) {
    t.child = e === null ? Cp(t, null, i, l) : ps(t, e.child, i, l);
  }
  function Pp(e, t, i, l, c) {
    i = i.render;
    var d = t.ref;
    if ("ref" in l) {
      var v = {};
      for (var w in l) w !== "ref" && (v[w] = l[w]);
    } else v = l;
    return (
      vi(t),
      (l = Pf(e, t, i, v, d, c)),
      (w = $f()),
      e !== null && !Bt
        ? (Vf(e, t, c), Br(e, t, c))
        : (nt && w && Ef(t), (t.flags |= 1), Ft(e, t, l, c), t.child)
    );
  }
  function $p(e, t, i, l, c) {
    if (e === null) {
      var d = i.type;
      return typeof d == "function" &&
        !wf(d) &&
        d.defaultProps === void 0 &&
        i.compare === null
        ? ((t.tag = 15), (t.type = d), Vp(e, t, d, l, c))
        : ((e = su(i.type, null, l, t, t.mode, c)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((d = e.child), !dd(e, c))) {
      var v = d.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : bl), i(v, l) && e.ref === t.ref)
      )
        return Br(e, t, c);
    }
    return (
      (t.flags |= 1),
      (e = Dr(d, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Vp(e, t, i, l, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (bl(d, l) && e.ref === t.ref)
        if (((Bt = !1), (t.pendingProps = l = d), dd(e, c)))
          (e.flags & 131072) !== 0 && (Bt = !0);
        else return (t.lanes = e.lanes), Br(e, t, c);
    }
    return id(e, t, i, l, c);
  }
  function Fp(e, t, i) {
    var l = t.pendingProps,
      c = l.children,
      d = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((l = d !== null ? d.baseLanes | i : i), e !== null)) {
          for (c = t.child = e.child, d = 0; c !== null; )
            (d = d | c.lanes | c.childLanes), (c = c.sibling);
          t.childLanes = d & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return Gp(e, t, l, i);
      }
      if ((i & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && fu(t, d !== null ? d.cachePool : null),
          d !== null ? Vm(t, d) : Bf(),
          Dp(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Gp(e, t, d !== null ? d.baseLanes | i : i, i)
        );
    } else
      d !== null
        ? (fu(t, d.cachePool), Vm(t, d), ya(), (t.memoizedState = null))
        : (e !== null && fu(t, null), Bf(), ya());
    return Ft(e, t, c, i), t.child;
  }
  function Gp(e, t, i, l) {
    var c = Mf();
    return (
      (c = c === null ? null : { parent: Ut._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: i, cachePool: c }),
      e !== null && fu(t, null),
      Bf(),
      Dp(t),
      e !== null && El(e, t, l, !0),
      null
    );
  }
  function Au(e, t) {
    var i = t.ref;
    if (i === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(s(284));
      (e === null || e.ref !== i) && (t.flags |= 4194816);
    }
  }
  function id(e, t, i, l, c) {
    return (
      vi(t),
      (i = Pf(e, t, i, l, void 0, c)),
      (l = $f()),
      e !== null && !Bt
        ? (Vf(e, t, c), Br(e, t, c))
        : (nt && l && Ef(t), (t.flags |= 1), Ft(e, t, i, c), t.child)
    );
  }
  function Qp(e, t, i, l, c, d) {
    return (
      vi(t),
      (t.updateQueue = null),
      (i = Gm(t, l, i, c)),
      Fm(e),
      (l = $f()),
      e !== null && !Bt
        ? (Vf(e, t, d), Br(e, t, d))
        : (nt && l && Ef(t), (t.flags |= 1), Ft(e, t, i, d), t.child)
    );
  }
  function Yp(e, t, i, l, c) {
    if ((vi(t), t.stateNode === null)) {
      var d = ss,
        v = i.contextType;
      typeof v == "object" && v !== null && (d = Zt(v)),
        (d = new i(l, d)),
        (t.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = rd),
        (t.stateNode = d),
        (d._reactInternals = t),
        (d = t.stateNode),
        (d.props = l),
        (d.state = t.memoizedState),
        (d.refs = {}),
        Uf(t),
        (v = i.contextType),
        (d.context = typeof v == "object" && v !== null ? Zt(v) : ss),
        (d.state = t.memoizedState),
        (v = i.getDerivedStateFromProps),
        typeof v == "function" && (nd(t, i, v, l), (d.state = t.memoizedState)),
        typeof i.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((v = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          v !== d.state && rd.enqueueReplaceState(d, d.state, null),
          Dl(t, l, d, c),
          Cl(),
          (d.state = t.memoizedState)),
        typeof d.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      d = t.stateNode;
      var w = t.memoizedProps,
        E = _i(i, w);
      d.props = E;
      var H = d.context,
        X = i.contextType;
      (v = ss), typeof X == "object" && X !== null && (v = Zt(X));
      var J = i.getDerivedStateFromProps;
      (X =
        typeof J == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (w = t.pendingProps !== w),
        X ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((w || H !== v) && Np(t, d, l, v)),
        (ua = !1);
      var V = t.memoizedState;
      (d.state = V),
        Dl(t, l, d, c),
        Cl(),
        (H = t.memoizedState),
        w || V !== H || ua
          ? (typeof J == "function" && (nd(t, i, J, l), (H = t.memoizedState)),
            (E = ua || Mp(t, i, E, l, V, H, v))
              ? (X ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = H)),
            (d.props = l),
            (d.state = H),
            (d.context = v),
            (l = E))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (d = t.stateNode),
        kf(e, t),
        (v = t.memoizedProps),
        (X = _i(i, v)),
        (d.props = X),
        (J = t.pendingProps),
        (V = d.context),
        (H = i.contextType),
        (E = ss),
        typeof H == "object" && H !== null && (E = Zt(H)),
        (w = i.getDerivedStateFromProps),
        (H =
          typeof w == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((v !== J || V !== E) && Np(t, d, l, E)),
        (ua = !1),
        (V = t.memoizedState),
        (d.state = V),
        Dl(t, l, d, c),
        Cl();
      var F = t.memoizedState;
      v !== J ||
      V !== F ||
      ua ||
      (e !== null && e.dependencies !== null && uu(e.dependencies))
        ? (typeof w == "function" && (nd(t, i, w, l), (F = t.memoizedState)),
          (X =
            ua ||
            Mp(t, i, X, l, V, F, E) ||
            (e !== null && e.dependencies !== null && uu(e.dependencies)))
            ? (H ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(l, F, E),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(l, F, E)),
              typeof d.componentDidUpdate == "function" && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (v === e.memoizedProps && V === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && V === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = F)),
          (d.props = l),
          (d.state = F),
          (d.context = E),
          (l = X))
        : (typeof d.componentDidUpdate != "function" ||
            (v === e.memoizedProps && V === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && V === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (d = l),
      Au(e, t),
      (l = (t.flags & 128) !== 0),
      d || l
        ? ((d = t.stateNode),
          (i =
            l && typeof i.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = ps(t, e.child, null, c)),
              (t.child = ps(t, null, i, c)))
            : Ft(e, t, i, c),
          (t.memoizedState = d.state),
          (e = t.child))
        : (e = Br(e, t, c)),
      e
    );
  }
  function Kp(e, t, i, l) {
    return Sl(), (t.flags |= 256), Ft(e, t, i, l), t.child;
  }
  var sd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ld(e) {
    return { baseLanes: e, cachePool: km() };
  }
  function od(e, t, i) {
    return (e = e !== null ? e.childLanes & ~i : 0), t && (e |= Fn), e;
  }
  function Xp(e, t, i) {
    var l = t.pendingProps,
      c = !1,
      d = (t.flags & 128) !== 0,
      v;
    if (
      ((v = d) ||
        (v =
          e !== null && e.memoizedState === null ? !1 : (kt.current & 2) !== 0),
      v && ((c = !0), (t.flags &= -129)),
      (v = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (nt) {
        if ((c ? ha(t) : ya(), nt)) {
          var w = St,
            E;
          if ((E = w)) {
            e: {
              for (E = w, w = mr; E.nodeType !== 8; ) {
                if (!w) {
                  w = null;
                  break e;
                }
                if (((E = rr(E.nextSibling)), E === null)) {
                  w = null;
                  break e;
                }
              }
              w = E;
            }
            w !== null
              ? ((t.memoizedState = {
                  dehydrated: w,
                  treeContext: di !== null ? { id: Mr, overflow: Nr } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (E = Tn(18, null, null, 0)),
                (E.stateNode = w),
                (E.return = t),
                (t.child = E),
                (nn = t),
                (St = null),
                (E = !0))
              : (E = !1);
          }
          E || mi(t);
        }
        if (
          ((w = t.memoizedState),
          w !== null && ((w = w.dehydrated), w !== null))
        )
          return Gd(w) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Lr(t);
      }
      return (
        (w = l.children),
        (l = l.fallback),
        c
          ? (ya(),
            (c = t.mode),
            (w = ju({ mode: "hidden", children: w }, c)),
            (l = fi(l, c, i, null)),
            (w.return = t),
            (l.return = t),
            (w.sibling = l),
            (t.child = w),
            (c = t.child),
            (c.memoizedState = ld(i)),
            (c.childLanes = od(e, v, i)),
            (t.memoizedState = sd),
            l)
          : (ha(t), ud(t, w))
      );
    }
    if (
      ((E = e.memoizedState), E !== null && ((w = E.dehydrated), w !== null))
    ) {
      if (d)
        t.flags & 256
          ? (ha(t), (t.flags &= -257), (t = cd(e, t, i)))
          : t.memoizedState !== null
          ? (ya(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (ya(),
            (c = l.fallback),
            (w = t.mode),
            (l = ju({ mode: "visible", children: l.children }, w)),
            (c = fi(c, w, i, null)),
            (c.flags |= 2),
            (l.return = t),
            (c.return = t),
            (l.sibling = c),
            (t.child = l),
            ps(t, e.child, null, i),
            (l = t.child),
            (l.memoizedState = ld(i)),
            (l.childLanes = od(e, v, i)),
            (t.memoizedState = sd),
            (t = c));
      else if ((ha(t), Gd(w))) {
        if (((v = w.nextSibling && w.nextSibling.dataset), v)) var H = v.dgst;
        (v = H),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = v),
          xl({ value: l, source: null, stack: null }),
          (t = cd(e, t, i));
      } else if (
        (Bt || El(e, t, i, !1), (v = (i & e.childLanes) !== 0), Bt || v)
      ) {
        if (
          ((v = dt),
          v !== null &&
            ((l = i & -i),
            (l = (l & 42) !== 0 ? 1 : ol(l)),
            (l = (l & (v.suspendedLanes | i)) !== 0 ? 0 : l),
            l !== 0 && l !== E.retryLane))
        )
          throw ((E.retryLane = l), is(e, l), Cn(v, e, l), Hp);
        w.data === "$?" || Ad(), (t = cd(e, t, i));
      } else
        w.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = E.treeContext),
            (St = rr(w.nextSibling)),
            (nn = t),
            (nt = !0),
            (yi = null),
            (mr = !1),
            e !== null &&
              ((Pn[$n++] = Mr),
              (Pn[$n++] = Nr),
              (Pn[$n++] = di),
              (Mr = e.id),
              (Nr = e.overflow),
              (di = t)),
            (t = ud(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return c
      ? (ya(),
        (c = l.fallback),
        (w = t.mode),
        (E = e.child),
        (H = E.sibling),
        (l = Dr(E, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = E.subtreeFlags & 65011712),
        H !== null ? (c = Dr(H, c)) : ((c = fi(c, w, i, null)), (c.flags |= 2)),
        (c.return = t),
        (l.return = t),
        (l.sibling = c),
        (t.child = l),
        (l = c),
        (c = t.child),
        (w = e.child.memoizedState),
        w === null
          ? (w = ld(i))
          : ((E = w.cachePool),
            E !== null
              ? ((H = Ut._currentValue),
                (E = E.parent !== H ? { parent: H, pool: H } : E))
              : (E = km()),
            (w = { baseLanes: w.baseLanes | i, cachePool: E })),
        (c.memoizedState = w),
        (c.childLanes = od(e, v, i)),
        (t.memoizedState = sd),
        l)
      : (ha(t),
        (i = e.child),
        (e = i.sibling),
        (i = Dr(i, { mode: "visible", children: l.children })),
        (i.return = t),
        (i.sibling = null),
        e !== null &&
          ((v = t.deletions),
          v === null ? ((t.deletions = [e]), (t.flags |= 16)) : v.push(e)),
        (t.child = i),
        (t.memoizedState = null),
        i);
  }
  function ud(e, t) {
    return (
      (t = ju({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ju(e, t) {
    return (
      (e = Tn(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function cd(e, t, i) {
    return (
      ps(t, e.child, null, i),
      (e = ud(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Zp(e, t, i) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Af(e.return, t, i);
  }
  function fd(e, t, i, l, c) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: i,
          tailMode: c,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = i),
        (d.tailMode = c));
  }
  function Ip(e, t, i) {
    var l = t.pendingProps,
      c = l.revealOrder,
      d = l.tail;
    if ((Ft(e, t, l.children, i), (l = kt.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Zp(e, i, t);
          else if (e.tag === 19) Zp(e, i, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((ne(kt, l), c)) {
      case "forwards":
        for (i = t.child, c = null; i !== null; )
          (e = i.alternate),
            e !== null && Tu(e) === null && (c = i),
            (i = i.sibling);
        (i = c),
          i === null
            ? ((c = t.child), (t.child = null))
            : ((c = i.sibling), (i.sibling = null)),
          fd(t, !1, c, i, d);
        break;
      case "backwards":
        for (i = null, c = t.child, t.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && Tu(e) === null)) {
            t.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = i), (i = c), (c = e);
        }
        fd(t, !0, i, null, d);
        break;
      case "together":
        fd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Br(e, t, i) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ba |= t.lanes),
      (i & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((El(e, t, i, !1), (i & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, i = Dr(e, e.pendingProps), t.child = i, i.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (i = i.sibling = Dr(e, e.pendingProps)),
          (i.return = t);
      i.sibling = null;
    }
    return t.child;
  }
  function dd(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && uu(e)));
  }
  function aS(e, t, i) {
    switch (t.tag) {
      case 3:
        it(t, t.stateNode.containerInfo),
          oa(t, Ut, e.memoizedState.cache),
          Sl();
        break;
      case 27:
      case 5:
        gt(t);
        break;
      case 4:
        it(t, t.stateNode.containerInfo);
        break;
      case 10:
        oa(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (ha(t), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
            ? Xp(e, t, i)
            : (ha(t), (e = Br(e, t, i)), e !== null ? e.sibling : null);
        ha(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((l = (i & t.childLanes) !== 0),
          l || (El(e, t, i, !1), (l = (i & t.childLanes) !== 0)),
          c)
        ) {
          if (l) return Ip(e, t, i);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          ne(kt, kt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Fp(e, t, i);
      case 24:
        oa(t, Ut, e.memoizedState.cache);
    }
    return Br(e, t, i);
  }
  function Jp(e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Bt = !0;
      else {
        if (!dd(e, i) && (t.flags & 128) === 0) return (Bt = !1), aS(e, t, i);
        Bt = (e.flags & 131072) !== 0;
      }
    else (Bt = !1), nt && (t.flags & 1048576) !== 0 && Am(t, ou, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            c = l._init;
          if (((l = c(l._payload)), (t.type = l), typeof l == "function"))
            wf(l)
              ? ((e = _i(l, e)), (t.tag = 1), (t = Yp(null, t, l, e, i)))
              : ((t.tag = 0), (t = id(null, t, l, e, i)));
          else {
            if (l != null) {
              if (((c = l.$$typeof), c === Q)) {
                (t.tag = 11), (t = Pp(null, t, l, e, i));
                break e;
              } else if (c === ie) {
                (t.tag = 14), (t = $p(null, t, l, e, i));
                break e;
              }
            }
            throw ((t = _e(l) || l), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return id(e, t, t.type, t.pendingProps, i);
      case 1:
        return (l = t.type), (c = _i(l, t.pendingProps)), Yp(e, t, l, c, i);
      case 3:
        e: {
          if ((it(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          l = t.pendingProps;
          var d = t.memoizedState;
          (c = d.element), kf(e, t), Dl(t, l, null, i);
          var v = t.memoizedState;
          if (
            ((l = v.cache),
            oa(t, Ut, l),
            l !== d.cache && jf(t, [Ut], i, !0),
            Cl(),
            (l = v.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: l, isDehydrated: !1, cache: v.cache }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              t = Kp(e, t, l, i);
              break e;
            } else if (l !== c) {
              (c = qn(Error(s(424)), t)), xl(c), (t = Kp(e, t, l, i));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                St = rr(e.firstChild),
                  nn = t,
                  nt = !0,
                  yi = null,
                  mr = !0,
                  i = Cp(t, null, l, i),
                  t.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
            }
          else {
            if ((Sl(), l === c)) {
              t = Br(e, t, i);
              break e;
            }
            Ft(e, t, l, i);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Au(e, t),
          e === null
            ? (i = ng(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = i)
              : nt ||
                ((i = t.type),
                (e = t.pendingProps),
                (l = Vu(Te.current).createElement(i)),
                (l[W] = t),
                (l[ae] = e),
                Qt(l, i, e),
                et(l),
                (t.stateNode = l))
            : (t.memoizedState = ng(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          gt(t),
          e === null &&
            nt &&
            ((l = t.stateNode = Wv(t.type, t.pendingProps, Te.current)),
            (nn = t),
            (mr = !0),
            (c = St),
            xa(t.type) ? ((Qd = c), (St = rr(l.firstChild))) : (St = c)),
          Ft(e, t, t.pendingProps.children, i),
          Au(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            nt &&
            ((c = l = St) &&
              ((l = MS(l, t.type, t.pendingProps, mr)),
              l !== null
                ? ((t.stateNode = l),
                  (nn = t),
                  (St = rr(l.firstChild)),
                  (mr = !1),
                  (c = !0))
                : (c = !1)),
            c || mi(t)),
          gt(t),
          (c = t.type),
          (d = t.pendingProps),
          (v = e !== null ? e.memoizedProps : null),
          (l = d.children),
          $d(c, d) ? (l = null) : v !== null && $d(c, v) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((c = Pf(e, t, Zw, null, null, i)), (Wl._currentValue = c)),
          Au(e, t),
          Ft(e, t, l, i),
          t.child
        );
      case 6:
        return (
          e === null &&
            nt &&
            ((e = i = St) &&
              ((i = NS(i, t.pendingProps, mr)),
              i !== null
                ? ((t.stateNode = i), (nn = t), (St = null), (e = !0))
                : (e = !1)),
            e || mi(t)),
          null
        );
      case 13:
        return Xp(e, t, i);
      case 4:
        return (
          it(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = ps(t, null, l, i)) : Ft(e, t, l, i),
          t.child
        );
      case 11:
        return Pp(e, t, t.type, t.pendingProps, i);
      case 7:
        return Ft(e, t, t.pendingProps, i), t.child;
      case 8:
        return Ft(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return Ft(e, t, t.pendingProps.children, i), t.child;
      case 10:
        return (
          (l = t.pendingProps),
          oa(t, t.type, l.value),
          Ft(e, t, l.children, i),
          t.child
        );
      case 9:
        return (
          (c = t.type._context),
          (l = t.pendingProps.children),
          vi(t),
          (c = Zt(c)),
          (l = l(c)),
          (t.flags |= 1),
          Ft(e, t, l, i),
          t.child
        );
      case 14:
        return $p(e, t, t.type, t.pendingProps, i);
      case 15:
        return Vp(e, t, t.type, t.pendingProps, i);
      case 19:
        return Ip(e, t, i);
      case 31:
        return (
          (l = t.pendingProps),
          (i = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((i = ju(l, i)),
              (i.ref = t.ref),
              (t.child = i),
              (i.return = t),
              (t = i))
            : ((i = Dr(e.child, l)),
              (i.ref = t.ref),
              (t.child = i),
              (i.return = t),
              (t = i)),
          t
        );
      case 22:
        return Fp(e, t, i);
      case 24:
        return (
          vi(t),
          (l = Zt(Ut)),
          e === null
            ? ((c = Mf()),
              c === null &&
                ((c = dt),
                (d = Cf()),
                (c.pooledCache = d),
                d.refCount++,
                d !== null && (c.pooledCacheLanes |= i),
                (c = d)),
              (t.memoizedState = { parent: l, cache: c }),
              Uf(t),
              oa(t, Ut, c))
            : ((e.lanes & i) !== 0 && (kf(e, t), Dl(t, null, null, i), Cl()),
              (c = e.memoizedState),
              (d = t.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (t.memoizedState = c),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = c),
                  oa(t, Ut, l))
                : ((l = d.cache),
                  oa(t, Ut, l),
                  l !== c.cache && jf(t, [Ut], i, !0))),
          Ft(e, t, t.pendingProps.children, i),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function qr(e) {
    e.flags |= 4;
  }
  function Wp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !lg(t))) {
      if (
        ((t = Vn.current),
        t !== null &&
          ((Je & 4194048) === Je
            ? pr !== null
            : ((Je & 62914560) !== Je && (Je & 536870912) === 0) || t !== pr))
      )
        throw ((Al = Nf), zm);
      e.flags |= 8192;
    }
  }
  function Cu(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Qo() : 536870912), (e.lanes |= t), (_s |= t));
  }
  function Bl(e, t) {
    if (!nt)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null; )
            t.alternate !== null && (i = t), (t = t.sibling);
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var l = null; i !== null; )
            i.alternate !== null && (l = i), (i = i.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function _t(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      l = 0;
    if (t)
      for (var c = e.child; c !== null; )
        (i |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 65011712),
          (l |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (i |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = i), t;
  }
  function iS(e, t, i) {
    var l = t.pendingProps;
    switch ((Tf(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _t(t), null;
      case 1:
        return _t(t), null;
      case 3:
        return (
          (i = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          kr(Ut),
          cn(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (wl(t)
              ? qr(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Dm())),
          _t(t),
          null
        );
      case 26:
        return (
          (i = t.memoizedState),
          e === null
            ? (qr(t),
              i !== null ? (_t(t), Wp(t, i)) : (_t(t), (t.flags &= -16777217)))
            : i
            ? i !== e.memoizedState
              ? (qr(t), _t(t), Wp(t, i))
              : (_t(t), (t.flags &= -16777217))
            : (e.memoizedProps !== l && qr(t), _t(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        xn(t), (i = Te.current);
        var c = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && qr(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return _t(t), null;
          }
          (e = ve.current),
            wl(t) ? jm(t) : ((e = Wv(c, l, i)), (t.stateNode = e), qr(t));
        }
        return _t(t), null;
      case 5:
        if ((xn(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && qr(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return _t(t), null;
          }
          if (((e = ve.current), wl(t))) jm(t);
          else {
            switch (((c = Vu(Te.current)), e)) {
              case 1:
                e = c.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                e = c.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    e = c.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    e = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    (e = c.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? c.createElement("select", { is: l.is })
                        : c.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? c.createElement(i, { is: l.is })
                        : c.createElement(i);
                }
            }
            (e[W] = t), (e[ae] = l);
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            t.stateNode = e;
            e: switch ((Qt(e, i, l), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && qr(t);
          }
        }
        return _t(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && qr(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(s(166));
          if (((e = Te.current), wl(t))) {
            if (
              ((e = t.stateNode),
              (i = t.memoizedProps),
              (l = null),
              (c = nn),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (e[W] = t),
              (e = !!(
                e.nodeValue === i ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Qv(e.nodeValue, i)
              )),
              e || mi(t);
          } else (e = Vu(e).createTextNode(l)), (e[W] = t), (t.stateNode = e);
        }
        return _t(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = wl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(s(317));
              c[W] = t;
            } else
              Sl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            _t(t), (c = !1);
          } else
            (c = Dm()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return t.flags & 256 ? (Lr(t), t) : (Lr(t), null);
        }
        if ((Lr(t), (t.flags & 128) !== 0)) return (t.lanes = i), t;
        if (
          ((i = l !== null), (e = e !== null && e.memoizedState !== null), i)
        ) {
          (l = t.child),
            (c = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (c = l.alternate.memoizedState.cachePool.pool);
          var d = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (d = l.memoizedState.cachePool.pool),
            d !== c && (l.flags |= 2048);
        }
        return (
          i !== e && i && (t.child.flags |= 8192),
          Cu(t, t.updateQueue),
          _t(t),
          null
        );
      case 4:
        return cn(), e === null && Ld(t.stateNode.containerInfo), _t(t), null;
      case 10:
        return kr(t.type), _t(t), null;
      case 19:
        if ((se(kt), (c = t.memoizedState), c === null)) return _t(t), null;
        if (((l = (t.flags & 128) !== 0), (d = c.rendering), d === null))
          if (l) Bl(c, !1);
          else {
            if (xt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((d = Tu(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      Bl(c, !1),
                      e = d.updateQueue,
                      t.updateQueue = e,
                      Cu(t, e),
                      t.subtreeFlags = 0,
                      e = i,
                      i = t.child;
                    i !== null;

                  )
                    Om(i, e), (i = i.sibling);
                  return ne(kt, (kt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              en() > Nu &&
              ((t.flags |= 128), (l = !0), Bl(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Tu(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Cu(t, e),
                Bl(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !d.alternate &&
                  !nt)
              )
                return _t(t), null;
            } else
              2 * en() - c.renderingStartTime > Nu &&
                i !== 536870912 &&
                ((t.flags |= 128), (l = !0), Bl(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((e = c.last),
              e !== null ? (e.sibling = d) : (t.child = d),
              (c.last = d));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = en()),
            (t.sibling = null),
            (e = kt.current),
            ne(kt, l ? (e & 1) | 2 : e & 1),
            t)
          : (_t(t), null);
      case 22:
      case 23:
        return (
          Lr(t),
          qf(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (i & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _t(t),
          (i = t.updateQueue),
          i !== null && Cu(t, i.retryQueue),
          (i = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== i && (t.flags |= 2048),
          e !== null && se(gi),
          null
        );
      case 24:
        return (
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          kr(Ut),
          _t(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function sS(e, t) {
    switch ((Tf(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          kr(Ut),
          cn(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return xn(t), null;
      case 13:
        if (
          (Lr(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Sl();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return se(kt), null;
      case 4:
        return cn(), null;
      case 10:
        return kr(t.type), null;
      case 22:
      case 23:
        return (
          Lr(t),
          qf(),
          e !== null && se(gi),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return kr(Ut), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ev(e, t) {
    switch ((Tf(t), t.tag)) {
      case 3:
        kr(Ut), cn();
        break;
      case 26:
      case 27:
      case 5:
        xn(t);
        break;
      case 4:
        cn();
        break;
      case 13:
        Lr(t);
        break;
      case 19:
        se(kt);
        break;
      case 10:
        kr(t.type);
        break;
      case 22:
      case 23:
        Lr(t), qf(), e !== null && se(gi);
        break;
      case 24:
        kr(Ut);
    }
  }
  function ql(e, t) {
    try {
      var i = t.updateQueue,
        l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        i = c;
        do {
          if ((i.tag & e) === e) {
            l = void 0;
            var d = i.create,
              v = i.inst;
            (l = d()), (v.destroy = l);
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (w) {
      ft(t, t.return, w);
    }
  }
  function ma(e, t, i) {
    try {
      var l = t.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        l = d;
        do {
          if ((l.tag & e) === e) {
            var v = l.inst,
              w = v.destroy;
            if (w !== void 0) {
              (v.destroy = void 0), (c = t);
              var E = i,
                H = w;
              try {
                H();
              } catch (X) {
                ft(c, E, X);
              }
            }
          }
          l = l.next;
        } while (l !== d);
      }
    } catch (X) {
      ft(t, t.return, X);
    }
  }
  function tv(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var i = e.stateNode;
      try {
        $m(t, i);
      } catch (l) {
        ft(e, e.return, l);
      }
    }
  }
  function nv(e, t, i) {
    (i.props = _i(e.type, e.memoizedProps)), (i.state = e.memoizedState);
    try {
      i.componentWillUnmount();
    } catch (l) {
      ft(e, t, l);
    }
  }
  function Hl(e, t) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof i == "function" ? (e.refCleanup = i(l)) : (i.current = l);
      }
    } catch (c) {
      ft(e, t, c);
    }
  }
  function vr(e, t) {
    var i = e.ref,
      l = e.refCleanup;
    if (i !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          ft(e, t, c);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (c) {
          ft(e, t, c);
        }
      else i.current = null;
  }
  function rv(e) {
    var t = e.type,
      i = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && l.focus();
          break e;
        case "img":
          i.src ? (l.src = i.src) : i.srcSet && (l.srcset = i.srcSet);
      }
    } catch (c) {
      ft(e, e.return, c);
    }
  }
  function hd(e, t, i) {
    try {
      var l = e.stateNode;
      OS(l, e.type, i, t), (l[ae] = t);
    } catch (c) {
      ft(e, e.return, c);
    }
  }
  function av(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && xa(e.type)) ||
      e.tag === 4
    );
  }
  function yd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || av(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && xa(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function md(e, t, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? (i.nodeType === 9
              ? i.body
              : i.nodeName === "HTML"
              ? i.ownerDocument.body
              : i
            ).insertBefore(e, t)
          : ((t =
              i.nodeType === 9
                ? i.body
                : i.nodeName === "HTML"
                ? i.ownerDocument.body
                : i),
            t.appendChild(e),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = $u));
    else if (
      l !== 4 &&
      (l === 27 && xa(e.type) && ((i = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (md(e, t, i), e = e.sibling; e !== null; )
        md(e, t, i), (e = e.sibling);
  }
  function Du(e, t, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && xa(e.type) && (i = e.stateNode), (e = e.child), e !== null)
    )
      for (Du(e, t, i), e = e.sibling; e !== null; )
        Du(e, t, i), (e = e.sibling);
  }
  function iv(e) {
    var t = e.stateNode,
      i = e.memoizedProps;
    try {
      for (var l = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      Qt(t, l, i), (t[W] = e), (t[ae] = i);
    } catch (d) {
      ft(e, e.return, d);
    }
  }
  var Hr = !1,
    Rt = !1,
    pd = !1,
    sv = typeof WeakSet == "function" ? WeakSet : Set,
    qt = null;
  function lS(e, t) {
    if (((e = e.containerInfo), (Hd = Xu), (e = vm(e)), yf(e))) {
      if ("selectionStart" in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var l = i.getSelection && i.getSelection();
          if (l && l.rangeCount !== 0) {
            i = l.anchorNode;
            var c = l.anchorOffset,
              d = l.focusNode;
            l = l.focusOffset;
            try {
              i.nodeType, d.nodeType;
            } catch {
              i = null;
              break e;
            }
            var v = 0,
              w = -1,
              E = -1,
              H = 0,
              X = 0,
              J = e,
              V = null;
            t: for (;;) {
              for (
                var F;
                J !== i || (c !== 0 && J.nodeType !== 3) || (w = v + c),
                  J !== d || (l !== 0 && J.nodeType !== 3) || (E = v + l),
                  J.nodeType === 3 && (v += J.nodeValue.length),
                  (F = J.firstChild) !== null;

              )
                (V = J), (J = F);
              for (;;) {
                if (J === e) break t;
                if (
                  (V === i && ++H === c && (w = v),
                  V === d && ++X === l && (E = v),
                  (F = J.nextSibling) !== null)
                )
                  break;
                (J = V), (V = J.parentNode);
              }
              J = F;
            }
            i = w === -1 || E === -1 ? null : { start: w, end: E };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      Pd = { focusedElem: e, selectionRange: i }, Xu = !1, qt = t;
      qt !== null;

    )
      if (
        ((t = qt), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (qt = e);
      else
        for (; qt !== null; ) {
          switch (((t = qt), (d = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                (e = void 0),
                  (i = t),
                  (c = d.memoizedProps),
                  (d = d.memoizedState),
                  (l = i.stateNode);
                try {
                  var ke = _i(i.type, c, i.elementType === i.type);
                  (e = l.getSnapshotBeforeUpdate(ke, d)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Ce) {
                  ft(i, i.return, Ce);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (i = e.nodeType), i === 9)
                )
                  Fd(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Fd(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (qt = e);
            break;
          }
          qt = t.return;
        }
  }
  function lv(e, t, i) {
    var l = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        pa(e, i), l & 4 && ql(5, i);
        break;
      case 1:
        if ((pa(e, i), l & 4))
          if (((e = i.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (v) {
              ft(i, i.return, v);
            }
          else {
            var c = _i(i.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              ft(i, i.return, v);
            }
          }
        l & 64 && tv(i), l & 512 && Hl(i, i.return);
        break;
      case 3:
        if ((pa(e, i), l & 64 && ((e = i.updateQueue), e !== null))) {
          if (((t = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                t = i.child.stateNode;
                break;
              case 1:
                t = i.child.stateNode;
            }
          try {
            $m(e, t);
          } catch (v) {
            ft(i, i.return, v);
          }
        }
        break;
      case 27:
        t === null && l & 4 && iv(i);
      case 26:
      case 5:
        pa(e, i), t === null && l & 4 && rv(i), l & 512 && Hl(i, i.return);
        break;
      case 12:
        pa(e, i);
        break;
      case 13:
        pa(e, i),
          l & 4 && cv(e, i),
          l & 64 &&
            ((e = i.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((i = pS.bind(null, i)), US(e, i))));
        break;
      case 22:
        if (((l = i.memoizedState !== null || Hr), !l)) {
          (t = (t !== null && t.memoizedState !== null) || Rt), (c = Hr);
          var d = Rt;
          (Hr = l),
            (Rt = t) && !d ? va(e, i, (i.subtreeFlags & 8772) !== 0) : pa(e, i),
            (Hr = c),
            (Rt = d);
        }
        break;
      case 30:
        break;
      default:
        pa(e, i);
    }
  }
  function ov(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), ov(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && we(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var vt = null,
    pn = !1;
  function Pr(e, t, i) {
    for (i = i.child; i !== null; ) uv(e, t, i), (i = i.sibling);
  }
  function uv(e, t, i) {
    if (Oe && typeof Oe.onCommitFiberUnmount == "function")
      try {
        Oe.onCommitFiberUnmount(fe, i);
      } catch {}
    switch (i.tag) {
      case 26:
        Rt || vr(i, t),
          Pr(e, t, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i));
        break;
      case 27:
        Rt || vr(i, t);
        var l = vt,
          c = pn;
        xa(i.type) && ((vt = i.stateNode), (pn = !1)),
          Pr(e, t, i),
          Xl(i.stateNode),
          (vt = l),
          (pn = c);
        break;
      case 5:
        Rt || vr(i, t);
      case 6:
        if (
          ((l = vt),
          (c = pn),
          (vt = null),
          Pr(e, t, i),
          (vt = l),
          (pn = c),
          vt !== null)
        )
          if (pn)
            try {
              (vt.nodeType === 9
                ? vt.body
                : vt.nodeName === "HTML"
                ? vt.ownerDocument.body
                : vt
              ).removeChild(i.stateNode);
            } catch (d) {
              ft(i, t, d);
            }
          else
            try {
              vt.removeChild(i.stateNode);
            } catch (d) {
              ft(i, t, d);
            }
        break;
      case 18:
        vt !== null &&
          (pn
            ? ((e = vt),
              Iv(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                i.stateNode
              ),
              ro(e))
            : Iv(vt, i.stateNode));
        break;
      case 4:
        (l = vt),
          (c = pn),
          (vt = i.stateNode.containerInfo),
          (pn = !0),
          Pr(e, t, i),
          (vt = l),
          (pn = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rt || ma(2, i, t), Rt || ma(4, i, t), Pr(e, t, i);
        break;
      case 1:
        Rt ||
          (vr(i, t),
          (l = i.stateNode),
          typeof l.componentWillUnmount == "function" && nv(i, t, l)),
          Pr(e, t, i);
        break;
      case 21:
        Pr(e, t, i);
        break;
      case 22:
        (Rt = (l = Rt) || i.memoizedState !== null), Pr(e, t, i), (Rt = l);
        break;
      default:
        Pr(e, t, i);
    }
  }
  function cv(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ro(e);
      } catch (i) {
        ft(t, t.return, i);
      }
  }
  function oS(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new sv()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new sv()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function vd(e, t) {
    var i = oS(e);
    t.forEach(function (l) {
      var c = vS.bind(null, e, l);
      i.has(l) || (i.add(l), l.then(c, c));
    });
  }
  function Rn(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var l = 0; l < i.length; l++) {
        var c = i[l],
          d = e,
          v = t,
          w = v;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (xa(w.type)) {
                (vt = w.stateNode), (pn = !1);
                break e;
              }
              break;
            case 5:
              (vt = w.stateNode), (pn = !1);
              break e;
            case 3:
            case 4:
              (vt = w.stateNode.containerInfo), (pn = !0);
              break e;
          }
          w = w.return;
        }
        if (vt === null) throw Error(s(160));
        uv(d, v, c),
          (vt = null),
          (pn = !1),
          (d = c.alternate),
          d !== null && (d.return = null),
          (c.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) fv(t, e), (t = t.sibling);
  }
  var nr = null;
  function fv(e, t) {
    var i = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Rn(t, e),
          On(e),
          l & 4 && (ma(3, e, e.return), ql(3, e), ma(5, e, e.return));
        break;
      case 1:
        Rn(t, e),
          On(e),
          l & 512 && (Rt || i === null || vr(i, i.return)),
          l & 64 &&
            Hr &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((i = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = i === null ? l : i.concat(l)))));
        break;
      case 26:
        var c = nr;
        if (
          (Rn(t, e),
          On(e),
          l & 512 && (Rt || i === null || vr(i, i.return)),
          l & 4)
        ) {
          var d = i !== null ? i.memoizedState : null;
          if (((l = e.memoizedState), i === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (i = e.memoizedProps),
                    (c = c.ownerDocument || c);
                  t: switch (l) {
                    case "title":
                      (d = c.getElementsByTagName("title")[0]),
                        (!d ||
                          d[Ue] ||
                          d[W] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = c.createElement(l)),
                          c.head.insertBefore(
                            d,
                            c.querySelector("head > title")
                          )),
                        Qt(d, l, i),
                        (d[W] = e),
                        et(d),
                        (l = d);
                      break e;
                    case "link":
                      var v = ig("link", "href", c).get(l + (i.href || ""));
                      if (v) {
                        for (var w = 0; w < v.length; w++)
                          if (
                            ((d = v[w]),
                            d.getAttribute("href") ===
                              (i.href == null || i.href === ""
                                ? null
                                : i.href) &&
                              d.getAttribute("rel") ===
                                (i.rel == null ? null : i.rel) &&
                              d.getAttribute("title") ===
                                (i.title == null ? null : i.title) &&
                              d.getAttribute("crossorigin") ===
                                (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            v.splice(w, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(l)),
                        Qt(d, l, i),
                        c.head.appendChild(d);
                      break;
                    case "meta":
                      if (
                        (v = ig("meta", "content", c).get(
                          l + (i.content || "")
                        ))
                      ) {
                        for (w = 0; w < v.length; w++)
                          if (
                            ((d = v[w]),
                            d.getAttribute("content") ===
                              (i.content == null ? null : "" + i.content) &&
                              d.getAttribute("name") ===
                                (i.name == null ? null : i.name) &&
                              d.getAttribute("property") ===
                                (i.property == null ? null : i.property) &&
                              d.getAttribute("http-equiv") ===
                                (i.httpEquiv == null ? null : i.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (i.charSet == null ? null : i.charSet))
                          ) {
                            v.splice(w, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(l)),
                        Qt(d, l, i),
                        c.head.appendChild(d);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  (d[W] = e), et(d), (l = d);
                }
                e.stateNode = l;
              } else sg(c, e.type, e.stateNode);
            else e.stateNode = ag(c, l, e.memoizedProps);
          else
            d !== l
              ? (d === null
                  ? i.stateNode !== null &&
                    ((i = i.stateNode), i.parentNode.removeChild(i))
                  : d.count--,
                l === null
                  ? sg(c, e.type, e.stateNode)
                  : ag(c, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                hd(e, e.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        Rn(t, e),
          On(e),
          l & 512 && (Rt || i === null || vr(i, i.return)),
          i !== null && l & 4 && hd(e, e.memoizedProps, i.memoizedProps);
        break;
      case 5:
        if (
          (Rn(t, e),
          On(e),
          l & 512 && (Rt || i === null || vr(i, i.return)),
          e.flags & 32)
        ) {
          c = e.stateNode;
          try {
            Ji(c, "");
          } catch (F) {
            ft(e, e.return, F);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), hd(e, c, i !== null ? i.memoizedProps : c)),
          l & 1024 && (pd = !0);
        break;
      case 6:
        if ((Rn(t, e), On(e), l & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.memoizedProps), (i = e.stateNode);
          try {
            i.nodeValue = l;
          } catch (F) {
            ft(e, e.return, F);
          }
        }
        break;
      case 3:
        if (
          ((Qu = null),
          (c = nr),
          (nr = Fu(t.containerInfo)),
          Rn(t, e),
          (nr = c),
          On(e),
          l & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            ro(t.containerInfo);
          } catch (F) {
            ft(e, e.return, F);
          }
        pd && ((pd = !1), dv(e));
        break;
      case 4:
        (l = nr),
          (nr = Fu(e.stateNode.containerInfo)),
          Rn(t, e),
          On(e),
          (nr = l);
        break;
      case 12:
        Rn(t, e), On(e);
        break;
      case 13:
        Rn(t, e),
          On(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (i !== null && i.memoizedState !== null) &&
            (xd = en()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), vd(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var E = i !== null && i.memoizedState !== null,
          H = Hr,
          X = Rt;
        if (
          ((Hr = H || c),
          (Rt = X || E),
          Rn(t, e),
          (Rt = X),
          (Hr = H),
          On(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = c ? t._visibility & -2 : t._visibility | 1,
              c && (i === null || E || Hr || Rt || wi(e)),
              i = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (i === null) {
                E = i = t;
                try {
                  if (((d = E.stateNode), c))
                    (v = d.style),
                      typeof v.setProperty == "function"
                        ? v.setProperty("display", "none", "important")
                        : (v.display = "none");
                  else {
                    w = E.stateNode;
                    var J = E.memoizedProps.style,
                      V =
                        J != null && J.hasOwnProperty("display")
                          ? J.display
                          : null;
                    w.style.display =
                      V == null || typeof V == "boolean" ? "" : ("" + V).trim();
                  }
                } catch (F) {
                  ft(E, E.return, F);
                }
              }
            } else if (t.tag === 6) {
              if (i === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = c ? "" : E.memoizedProps;
                } catch (F) {
                  ft(E, E.return, F);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              i === t && (i = null), (t = t.return);
            }
            i === t && (i = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((i = l.retryQueue),
            i !== null && ((l.retryQueue = null), vd(e, i))));
        break;
      case 19:
        Rn(t, e),
          On(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), vd(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Rn(t, e), On(e);
    }
  }
  function On(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var i, l = e.return; l !== null; ) {
          if (av(l)) {
            i = l;
            break;
          }
          l = l.return;
        }
        if (i == null) throw Error(s(160));
        switch (i.tag) {
          case 27:
            var c = i.stateNode,
              d = yd(e);
            Du(e, d, c);
            break;
          case 5:
            var v = i.stateNode;
            i.flags & 32 && (Ji(v, ""), (i.flags &= -33));
            var w = yd(e);
            Du(e, w, v);
            break;
          case 3:
          case 4:
            var E = i.stateNode.containerInfo,
              H = yd(e);
            md(e, H, E);
            break;
          default:
            throw Error(s(161));
        }
      } catch (X) {
        ft(e, e.return, X);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function dv(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        dv(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function pa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) lv(e, t.alternate, t), (t = t.sibling);
  }
  function wi(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ma(4, t, t.return), wi(t);
          break;
        case 1:
          vr(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == "function" && nv(t, t.return, i),
            wi(t);
          break;
        case 27:
          Xl(t.stateNode);
        case 26:
        case 5:
          vr(t, t.return), wi(t);
          break;
        case 22:
          t.memoizedState === null && wi(t);
          break;
        case 30:
          wi(t);
          break;
        default:
          wi(t);
      }
      e = e.sibling;
    }
  }
  function va(e, t, i) {
    for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        c = e,
        d = t,
        v = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          va(c, d, i), ql(4, d);
          break;
        case 1:
          if (
            (va(c, d, i),
            (l = d),
            (c = l.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (H) {
              ft(l, l.return, H);
            }
          if (((l = d), (c = l.updateQueue), c !== null)) {
            var w = l.stateNode;
            try {
              var E = c.shared.hiddenCallbacks;
              if (E !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < E.length; c++)
                  Pm(E[c], w);
            } catch (H) {
              ft(l, l.return, H);
            }
          }
          i && v & 64 && tv(d), Hl(d, d.return);
          break;
        case 27:
          iv(d);
        case 26:
        case 5:
          va(c, d, i), i && l === null && v & 4 && rv(d), Hl(d, d.return);
          break;
        case 12:
          va(c, d, i);
          break;
        case 13:
          va(c, d, i), i && v & 4 && cv(c, d);
          break;
        case 22:
          d.memoizedState === null && va(c, d, i), Hl(d, d.return);
          break;
        case 30:
          break;
        default:
          va(c, d, i);
      }
      t = t.sibling;
    }
  }
  function gd(e, t) {
    var i = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (i = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== i && (e != null && e.refCount++, i != null && Tl(i));
  }
  function bd(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Tl(e));
  }
  function gr(e, t, i, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) hv(e, t, i, l), (t = t.sibling);
  }
  function hv(e, t, i, l) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gr(e, t, i, l), c & 2048 && ql(9, t);
        break;
      case 1:
        gr(e, t, i, l);
        break;
      case 3:
        gr(e, t, i, l),
          c & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Tl(e)));
        break;
      case 12:
        if (c & 2048) {
          gr(e, t, i, l), (e = t.stateNode);
          try {
            var d = t.memoizedProps,
              v = d.id,
              w = d.onPostCommit;
            typeof w == "function" &&
              w(
                v,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (E) {
            ft(t, t.return, E);
          }
        } else gr(e, t, i, l);
        break;
      case 13:
        gr(e, t, i, l);
        break;
      case 23:
        break;
      case 22:
        (d = t.stateNode),
          (v = t.alternate),
          t.memoizedState !== null
            ? d._visibility & 2
              ? gr(e, t, i, l)
              : Pl(e, t)
            : d._visibility & 2
            ? gr(e, t, i, l)
            : ((d._visibility |= 2),
              vs(e, t, i, l, (t.subtreeFlags & 10256) !== 0)),
          c & 2048 && gd(v, t);
        break;
      case 24:
        gr(e, t, i, l), c & 2048 && bd(t.alternate, t);
        break;
      default:
        gr(e, t, i, l);
    }
  }
  function vs(e, t, i, l, c) {
    for (c = c && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var d = e,
        v = t,
        w = i,
        E = l,
        H = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          vs(d, v, w, E, c), ql(8, v);
          break;
        case 23:
          break;
        case 22:
          var X = v.stateNode;
          v.memoizedState !== null
            ? X._visibility & 2
              ? vs(d, v, w, E, c)
              : Pl(d, v)
            : ((X._visibility |= 2), vs(d, v, w, E, c)),
            c && H & 2048 && gd(v.alternate, v);
          break;
        case 24:
          vs(d, v, w, E, c), c && H & 2048 && bd(v.alternate, v);
          break;
        default:
          vs(d, v, w, E, c);
      }
      t = t.sibling;
    }
  }
  function Pl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var i = e,
          l = t,
          c = l.flags;
        switch (l.tag) {
          case 22:
            Pl(i, l), c & 2048 && gd(l.alternate, l);
            break;
          case 24:
            Pl(i, l), c & 2048 && bd(l.alternate, l);
            break;
          default:
            Pl(i, l);
        }
        t = t.sibling;
      }
  }
  var $l = 8192;
  function gs(e) {
    if (e.subtreeFlags & $l)
      for (e = e.child; e !== null; ) yv(e), (e = e.sibling);
  }
  function yv(e) {
    switch (e.tag) {
      case 26:
        gs(e),
          e.flags & $l &&
            e.memoizedState !== null &&
            YS(nr, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        gs(e);
        break;
      case 3:
      case 4:
        var t = nr;
        (nr = Fu(e.stateNode.containerInfo)), gs(e), (nr = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = $l), ($l = 16777216), gs(e), ($l = t))
            : gs(e));
        break;
      default:
        gs(e);
    }
  }
  function mv(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Vl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var l = t[i];
          (qt = l), vv(l, e);
        }
      mv(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) pv(e), (e = e.sibling);
  }
  function pv(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Vl(e), e.flags & 2048 && ma(9, e, e.return);
        break;
      case 3:
        Vl(e);
        break;
      case 12:
        Vl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Mu(e))
          : Vl(e);
        break;
      default:
        Vl(e);
    }
  }
  function Mu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var l = t[i];
          (qt = l), vv(l, e);
        }
      mv(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ma(8, t, t.return), Mu(t);
          break;
        case 22:
          (i = t.stateNode),
            i._visibility & 2 && ((i._visibility &= -3), Mu(t));
          break;
        default:
          Mu(t);
      }
      e = e.sibling;
    }
  }
  function vv(e, t) {
    for (; qt !== null; ) {
      var i = qt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ma(8, i, t);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var l = i.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Tl(i.memoizedState.cache);
      }
      if (((l = i.child), l !== null)) (l.return = i), (qt = l);
      else
        e: for (i = e; qt !== null; ) {
          l = qt;
          var c = l.sibling,
            d = l.return;
          if ((ov(l), l === i)) {
            qt = null;
            break e;
          }
          if (c !== null) {
            (c.return = d), (qt = c);
            break e;
          }
          qt = d;
        }
    }
  }
  var uS = {
      getCacheForType: function (e) {
        var t = Zt(Ut),
          i = t.data.get(e);
        return i === void 0 && ((i = e()), t.data.set(e, i)), i;
      },
    },
    cS = typeof WeakMap == "function" ? WeakMap : Map,
    st = 0,
    dt = null,
    Qe = null,
    Je = 0,
    lt = 0,
    An = null,
    ga = !1,
    bs = !1,
    _d = !1,
    $r = 0,
    xt = 0,
    ba = 0,
    Si = 0,
    wd = 0,
    Fn = 0,
    _s = 0,
    Fl = null,
    vn = null,
    Sd = !1,
    xd = 0,
    Nu = 1 / 0,
    Uu = null,
    _a = null,
    Gt = 0,
    wa = null,
    ws = null,
    Ss = 0,
    Ed = 0,
    Td = null,
    gv = null,
    Gl = 0,
    Rd = null;
  function jn() {
    if ((st & 2) !== 0 && Je !== 0) return Je & -Je;
    if (q.T !== null) {
      var e = us;
      return e !== 0 ? e : Nd();
    }
    return A();
  }
  function bv() {
    Fn === 0 && (Fn = (Je & 536870912) === 0 || nt ? Xi() : 536870912);
    var e = Vn.current;
    return e !== null && (e.flags |= 32), Fn;
  }
  function Cn(e, t, i) {
    ((e === dt && (lt === 2 || lt === 9)) || e.cancelPendingCommit !== null) &&
      (xs(e, 0), Sa(e, Je, Fn, !1)),
      ai(e, i),
      ((st & 2) === 0 || e !== dt) &&
        (e === dt &&
          ((st & 2) === 0 && (Si |= i), xt === 4 && Sa(e, Je, Fn, !1)),
        br(e));
  }
  function _v(e, t, i) {
    if ((st & 6) !== 0) throw Error(s(327));
    var l = (!i && (t & 124) === 0 && (t & e.expiredLanes) === 0) || kn(e, t),
      c = l ? hS(e, t) : jd(e, t, !0),
      d = l;
    do {
      if (c === 0) {
        bs && !l && Sa(e, t, 0, !1);
        break;
      } else {
        if (((i = e.current.alternate), d && !fS(i))) {
          (c = jd(e, t, !1)), (d = !1);
          continue;
        }
        if (c === 2) {
          if (((d = t), e.errorRecoveryDisabledLanes & d)) var v = 0;
          else
            (v = e.pendingLanes & -536870913),
              (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0);
          if (v !== 0) {
            t = v;
            e: {
              var w = e;
              c = Fl;
              var E = w.current.memoizedState.isDehydrated;
              if ((E && (xs(w, v).flags |= 256), (v = jd(w, v, !1)), v !== 2)) {
                if (_d && !E) {
                  (w.errorRecoveryDisabledLanes |= d), (Si |= d), (c = 4);
                  break e;
                }
                (d = vn),
                  (vn = c),
                  d !== null && (vn === null ? (vn = d) : vn.push.apply(vn, d));
              }
              c = v;
            }
            if (((d = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          xs(e, 0), Sa(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (d = c), d)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Sa(l, t, Fn, !ga);
              break e;
            case 2:
              vn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((c = xd + 300 - en()), 10 < c)) {
            if ((Sa(l, t, Fn, !ga), yr(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = Xv(
              wv.bind(null, l, i, vn, Uu, Sd, t, Fn, Si, _s, ga, d, 2, -0, 0),
              c
            );
            break e;
          }
          wv(l, i, vn, Uu, Sd, t, Fn, Si, _s, ga, d, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    br(e);
  }
  function wv(e, t, i, l, c, d, v, w, E, H, X, J, V, F) {
    if (
      ((e.timeoutHandle = -1),
      (J = t.subtreeFlags),
      (J & 8192 || (J & 16785408) === 16785408) &&
        ((Jl = { stylesheets: null, count: 0, unsuspend: QS }),
        yv(t),
        (J = KS()),
        J !== null))
    ) {
      (e.cancelPendingCommit = J(
        Av.bind(null, e, t, d, i, l, c, v, w, E, X, 1, V, F)
      )),
        Sa(e, d, v, !H);
      return;
    }
    Av(e, t, d, i, l, c, v, w, E);
  }
  function fS(e) {
    for (var t = e; ; ) {
      var i = t.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        t.flags & 16384 &&
        ((i = t.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var l = 0; l < i.length; l++) {
          var c = i[l],
            d = c.getSnapshot;
          c = c.value;
          try {
            if (!En(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
        (i.return = t), (t = i);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Sa(e, t, i, l) {
    (t &= ~wd),
      (t &= ~Si),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var c = t; 0 < c; ) {
      var d = 31 - rt(c),
        v = 1 << d;
      (l[d] = -1), (c &= ~v);
    }
    i !== 0 && ii(e, i, t);
  }
  function ku() {
    return (st & 6) === 0 ? (Ql(0), !1) : !0;
  }
  function Od() {
    if (Qe !== null) {
      if (lt === 0) var e = Qe.return;
      else (e = Qe), (Ur = pi = null), Ff(e), (ms = null), (zl = 0), (e = Qe);
      for (; e !== null; ) ev(e.alternate, e), (e = e.return);
      Qe = null;
    }
  }
  function xs(e, t) {
    var i = e.timeoutHandle;
    i !== -1 && ((e.timeoutHandle = -1), jS(i)),
      (i = e.cancelPendingCommit),
      i !== null && ((e.cancelPendingCommit = null), i()),
      Od(),
      (dt = e),
      (Qe = i = Dr(e.current, null)),
      (Je = t),
      (lt = 0),
      (An = null),
      (ga = !1),
      (bs = kn(e, t)),
      (_d = !1),
      (_s = Fn = wd = Si = ba = xt = 0),
      (vn = Fl = null),
      (Sd = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var c = 31 - rt(l),
          d = 1 << c;
        (t |= e[c]), (l &= ~d);
      }
    return ($r = t), ru(), i;
  }
  function Sv(e, t) {
    ($e = null),
      (q.H = Su),
      t === Ol || t === du
        ? ((t = qm()), (lt = 3))
        : t === zm
        ? ((t = qm()), (lt = 4))
        : (lt =
            t === Hp
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (An = t),
      Qe === null && ((xt = 1), Ou(e, qn(t, e.current)));
  }
  function xv() {
    var e = q.H;
    return (q.H = Su), e === null ? Su : e;
  }
  function Ev() {
    var e = q.A;
    return (q.A = uS), e;
  }
  function Ad() {
    (xt = 4),
      ga || ((Je & 4194048) !== Je && Vn.current !== null) || (bs = !0),
      ((ba & 134217727) === 0 && (Si & 134217727) === 0) ||
        dt === null ||
        Sa(dt, Je, Fn, !1);
  }
  function jd(e, t, i) {
    var l = st;
    st |= 2;
    var c = xv(),
      d = Ev();
    (dt !== e || Je !== t) && ((Uu = null), xs(e, t)), (t = !1);
    var v = xt;
    e: do
      try {
        if (lt !== 0 && Qe !== null) {
          var w = Qe,
            E = An;
          switch (lt) {
            case 8:
              Od(), (v = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Vn.current === null && (t = !0);
              var H = lt;
              if (((lt = 0), (An = null), Es(e, w, E, H), i && bs)) {
                v = 0;
                break e;
              }
              break;
            default:
              (H = lt), (lt = 0), (An = null), Es(e, w, E, H);
          }
        }
        dS(), (v = xt);
        break;
      } catch (X) {
        Sv(e, X);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Ur = pi = null),
      (st = l),
      (q.H = c),
      (q.A = d),
      Qe === null && ((dt = null), (Je = 0), ru()),
      v
    );
  }
  function dS() {
    for (; Qe !== null; ) Tv(Qe);
  }
  function hS(e, t) {
    var i = st;
    st |= 2;
    var l = xv(),
      c = Ev();
    dt !== e || Je !== t
      ? ((Uu = null), (Nu = en() + 500), xs(e, t))
      : (bs = kn(e, t));
    e: do
      try {
        if (lt !== 0 && Qe !== null) {
          t = Qe;
          var d = An;
          t: switch (lt) {
            case 1:
              (lt = 0), (An = null), Es(e, t, d, 1);
              break;
            case 2:
            case 9:
              if (Lm(d)) {
                (lt = 0), (An = null), Rv(t);
                break;
              }
              (t = function () {
                (lt !== 2 && lt !== 9) || dt !== e || (lt = 7), br(e);
              }),
                d.then(t, t);
              break e;
            case 3:
              lt = 7;
              break e;
            case 4:
              lt = 5;
              break e;
            case 7:
              Lm(d)
                ? ((lt = 0), (An = null), Rv(t))
                : ((lt = 0), (An = null), Es(e, t, d, 7));
              break;
            case 5:
              var v = null;
              switch (Qe.tag) {
                case 26:
                  v = Qe.memoizedState;
                case 5:
                case 27:
                  var w = Qe;
                  if (!v || lg(v)) {
                    (lt = 0), (An = null);
                    var E = w.sibling;
                    if (E !== null) Qe = E;
                    else {
                      var H = w.return;
                      H !== null ? ((Qe = H), zu(H)) : (Qe = null);
                    }
                    break t;
                  }
              }
              (lt = 0), (An = null), Es(e, t, d, 5);
              break;
            case 6:
              (lt = 0), (An = null), Es(e, t, d, 6);
              break;
            case 8:
              Od(), (xt = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        yS();
        break;
      } catch (X) {
        Sv(e, X);
      }
    while (!0);
    return (
      (Ur = pi = null),
      (q.H = l),
      (q.A = c),
      (st = i),
      Qe !== null ? 0 : ((dt = null), (Je = 0), ru(), xt)
    );
  }
  function yS() {
    for (; Qe !== null && !Yi(); ) Tv(Qe);
  }
  function Tv(e) {
    var t = Jp(e.alternate, e, $r);
    (e.memoizedProps = e.pendingProps), t === null ? zu(e) : (Qe = t);
  }
  function Rv(e) {
    var t = e,
      i = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Qp(i, t, t.pendingProps, t.type, void 0, Je);
        break;
      case 11:
        t = Qp(i, t, t.pendingProps, t.type.render, t.ref, Je);
        break;
      case 5:
        Ff(t);
      default:
        ev(i, t), (t = Qe = Om(t, $r)), (t = Jp(i, t, $r));
    }
    (e.memoizedProps = e.pendingProps), t === null ? zu(e) : (Qe = t);
  }
  function Es(e, t, i, l) {
    (Ur = pi = null), Ff(t), (ms = null), (zl = 0);
    var c = t.return;
    try {
      if (rS(e, c, t, i, Je)) {
        (xt = 1), Ou(e, qn(i, e.current)), (Qe = null);
        return;
      }
    } catch (d) {
      if (c !== null) throw ((Qe = c), d);
      (xt = 1), Ou(e, qn(i, e.current)), (Qe = null);
      return;
    }
    t.flags & 32768
      ? (nt || l === 1
          ? (e = !0)
          : bs || (Je & 536870912) !== 0
          ? (e = !1)
          : ((ga = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = Vn.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        Ov(t, e))
      : zu(t);
  }
  function zu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Ov(t, ga);
        return;
      }
      e = t.return;
      var i = iS(t.alternate, t, $r);
      if (i !== null) {
        Qe = i;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Qe = t;
        return;
      }
      Qe = t = e;
    } while (t !== null);
    xt === 0 && (xt = 5);
  }
  function Ov(e, t) {
    do {
      var i = sS(e.alternate, e);
      if (i !== null) {
        (i.flags &= 32767), (Qe = i);
        return;
      }
      if (
        ((i = e.return),
        i !== null &&
          ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Qe = e;
        return;
      }
      Qe = e = i;
    } while (e !== null);
    (xt = 6), (Qe = null);
  }
  function Av(e, t, i, l, c, d, v, w, E) {
    e.cancelPendingCommit = null;
    do Lu();
    while (Gt !== 0);
    if ((st & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (
        ((d = t.lanes | t.childLanes),
        (d |= bf),
        Yo(e, i, d, v, w, E),
        e === dt && ((Qe = dt = null), (Je = 0)),
        (ws = t),
        (wa = e),
        (Ss = i),
        (Ed = d),
        (Td = c),
        (gv = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            gS($, function () {
              return Nv(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = q.T), (q.T = null), (c = ee.p), (ee.p = 2), (v = st), (st |= 4);
        try {
          lS(e, t, i);
        } finally {
          (st = v), (ee.p = c), (q.T = l);
        }
      }
      (Gt = 1), jv(), Cv(), Dv();
    }
  }
  function jv() {
    if (Gt === 1) {
      Gt = 0;
      var e = wa,
        t = ws,
        i = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || i) {
        (i = q.T), (q.T = null);
        var l = ee.p;
        ee.p = 2;
        var c = st;
        st |= 4;
        try {
          fv(t, e);
          var d = Pd,
            v = vm(e.containerInfo),
            w = d.focusedElem,
            E = d.selectionRange;
          if (
            v !== w &&
            w &&
            w.ownerDocument &&
            pm(w.ownerDocument.documentElement, w)
          ) {
            if (E !== null && yf(w)) {
              var H = E.start,
                X = E.end;
              if ((X === void 0 && (X = H), "selectionStart" in w))
                (w.selectionStart = H),
                  (w.selectionEnd = Math.min(X, w.value.length));
              else {
                var J = w.ownerDocument || document,
                  V = (J && J.defaultView) || window;
                if (V.getSelection) {
                  var F = V.getSelection(),
                    ke = w.textContent.length,
                    Ce = Math.min(E.start, ke),
                    ct = E.end === void 0 ? Ce : Math.min(E.end, ke);
                  !F.extend && Ce > ct && ((v = ct), (ct = Ce), (Ce = v));
                  var k = mm(w, Ce),
                    M = mm(w, ct);
                  if (
                    k &&
                    M &&
                    (F.rangeCount !== 1 ||
                      F.anchorNode !== k.node ||
                      F.anchorOffset !== k.offset ||
                      F.focusNode !== M.node ||
                      F.focusOffset !== M.offset)
                  ) {
                    var B = J.createRange();
                    B.setStart(k.node, k.offset),
                      F.removeAllRanges(),
                      Ce > ct
                        ? (F.addRange(B), F.extend(M.node, M.offset))
                        : (B.setEnd(M.node, M.offset), F.addRange(B));
                  }
                }
              }
            }
            for (J = [], F = w; (F = F.parentNode); )
              F.nodeType === 1 &&
                J.push({ element: F, left: F.scrollLeft, top: F.scrollTop });
            for (
              typeof w.focus == "function" && w.focus(), w = 0;
              w < J.length;
              w++
            ) {
              var I = J[w];
              (I.element.scrollLeft = I.left), (I.element.scrollTop = I.top);
            }
          }
          (Xu = !!Hd), (Pd = Hd = null);
        } finally {
          (st = c), (ee.p = l), (q.T = i);
        }
      }
      (e.current = t), (Gt = 2);
    }
  }
  function Cv() {
    if (Gt === 2) {
      Gt = 0;
      var e = wa,
        t = ws,
        i = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || i) {
        (i = q.T), (q.T = null);
        var l = ee.p;
        ee.p = 2;
        var c = st;
        st |= 4;
        try {
          lv(e, t.alternate, t);
        } finally {
          (st = c), (ee.p = l), (q.T = i);
        }
      }
      Gt = 3;
    }
  }
  function Dv() {
    if (Gt === 4 || Gt === 3) {
      (Gt = 0), ll();
      var e = wa,
        t = ws,
        i = Ss,
        l = gv;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Gt = 5)
        : ((Gt = 0), (ws = wa = null), Mv(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (_a = null),
        ul(i),
        (t = t.stateNode),
        Oe && typeof Oe.onCommitFiberRoot == "function")
      )
        try {
          Oe.onCommitFiberRoot(fe, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (t = q.T), (c = ee.p), (ee.p = 2), (q.T = null);
        try {
          for (var d = e.onRecoverableError, v = 0; v < l.length; v++) {
            var w = l[v];
            d(w.value, { componentStack: w.stack });
          }
        } finally {
          (q.T = t), (ee.p = c);
        }
      }
      (Ss & 3) !== 0 && Lu(),
        br(e),
        (c = e.pendingLanes),
        (i & 4194090) !== 0 && (c & 42) !== 0
          ? e === Rd
            ? Gl++
            : ((Gl = 0), (Rd = e))
          : (Gl = 0),
        Ql(0);
    }
  }
  function Mv(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Tl(t)));
  }
  function Lu(e) {
    return jv(), Cv(), Dv(), Nv();
  }
  function Nv() {
    if (Gt !== 5) return !1;
    var e = wa,
      t = Ed;
    Ed = 0;
    var i = ul(Ss),
      l = q.T,
      c = ee.p;
    try {
      (ee.p = 32 > i ? 32 : i), (q.T = null), (i = Td), (Td = null);
      var d = wa,
        v = Ss;
      if (((Gt = 0), (ws = wa = null), (Ss = 0), (st & 6) !== 0))
        throw Error(s(331));
      var w = st;
      if (
        ((st |= 4),
        pv(d.current),
        hv(d, d.current, v, i),
        (st = w),
        Ql(0, !1),
        Oe && typeof Oe.onPostCommitFiberRoot == "function")
      )
        try {
          Oe.onPostCommitFiberRoot(fe, d);
        } catch {}
      return !0;
    } finally {
      (ee.p = c), (q.T = l), Mv(e, t);
    }
  }
  function Uv(e, t, i) {
    (t = qn(i, t)),
      (t = ad(e.stateNode, t, 2)),
      (e = fa(e, t, 2)),
      e !== null && (ai(e, 2), br(e));
  }
  function ft(e, t, i) {
    if (e.tag === 3) Uv(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Uv(t, e, i);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (_a === null || !_a.has(l)))
          ) {
            (e = qn(i, e)),
              (i = Bp(2)),
              (l = fa(t, i, 2)),
              l !== null && (qp(i, l, t, e), ai(l, 2), br(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cd(e, t, i) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new cS();
      var c = new Set();
      l.set(t, c);
    } else (c = l.get(t)), c === void 0 && ((c = new Set()), l.set(t, c));
    c.has(i) ||
      ((_d = !0), c.add(i), (e = mS.bind(null, e, t, i)), t.then(e, e));
  }
  function mS(e, t, i) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & i),
      (e.warmLanes &= ~i),
      dt === e &&
        (Je & i) === i &&
        (xt === 4 || (xt === 3 && (Je & 62914560) === Je && 300 > en() - xd)
          ? (st & 2) === 0 && xs(e, 0)
          : (wd |= i),
        _s === Je && (_s = 0)),
      br(e);
  }
  function kv(e, t) {
    t === 0 && (t = Qo()), (e = is(e, t)), e !== null && (ai(e, t), br(e));
  }
  function pS(e) {
    var t = e.memoizedState,
      i = 0;
    t !== null && (i = t.retryLane), kv(e, i);
  }
  function vS(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          c = e.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(t), kv(e, i);
  }
  function gS(e, t) {
    return ti(e, t);
  }
  var Bu = null,
    Ts = null,
    Dd = !1,
    qu = !1,
    Md = !1,
    xi = 0;
  function br(e) {
    e !== Ts &&
      e.next === null &&
      (Ts === null ? (Bu = Ts = e) : (Ts = Ts.next = e)),
      (qu = !0),
      Dd || ((Dd = !0), _S());
  }
  function Ql(e, t) {
    if (!Md && qu) {
      Md = !0;
      do
        for (var i = !1, l = Bu; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var v = l.suspendedLanes,
                w = l.pingedLanes;
              (d = (1 << (31 - rt(42 | e) + 1)) - 1),
                (d &= c & ~(v & ~w)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((i = !0), qv(l, d));
          } else
            (d = Je),
              (d = yr(
                l,
                l === dt ? d : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (d & 3) === 0 || kn(l, d) || ((i = !0), qv(l, d));
          l = l.next;
        }
      while (i);
      Md = !1;
    }
  }
  function bS() {
    zv();
  }
  function zv() {
    qu = Dd = !1;
    var e = 0;
    xi !== 0 && (AS() && (e = xi), (xi = 0));
    for (var t = en(), i = null, l = Bu; l !== null; ) {
      var c = l.next,
        d = Lv(l, t);
      d === 0
        ? ((l.next = null),
          i === null ? (Bu = c) : (i.next = c),
          c === null && (Ts = i))
        : ((i = l), (e !== 0 || (d & 3) !== 0) && (qu = !0)),
        (l = c);
    }
    Ql(e);
  }
  function Lv(e, t) {
    for (
      var i = e.suspendedLanes,
        l = e.pingedLanes,
        c = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var v = 31 - rt(d),
        w = 1 << v,
        E = c[v];
      E === -1
        ? ((w & i) === 0 || (w & l) !== 0) && (c[v] = ri(w, t))
        : E <= t && (e.expiredLanes |= w),
        (d &= ~w);
    }
    if (
      ((t = dt),
      (i = Je),
      (i = yr(
        e,
        e === t ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      i === 0 ||
        (e === t && (lt === 2 || lt === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && fn(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((i & 3) === 0 || kn(e, i)) {
      if (((t = i & -i), t === e.callbackPriority)) return t;
      switch ((l !== null && fn(l), ul(i))) {
        case 2:
        case 8:
          i = O;
          break;
        case 32:
          i = $;
          break;
        case 268435456:
          i = oe;
          break;
        default:
          i = $;
      }
      return (
        (l = Bv.bind(null, e)),
        (i = ti(i, l)),
        (e.callbackPriority = t),
        (e.callbackNode = i),
        t
      );
    }
    return (
      l !== null && l !== null && fn(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Bv(e, t) {
    if (Gt !== 0 && Gt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var i = e.callbackNode;
    if (Lu() && e.callbackNode !== i) return null;
    var l = Je;
    return (
      (l = yr(
        e,
        e === dt ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (_v(e, l, t),
          Lv(e, en()),
          e.callbackNode != null && e.callbackNode === i
            ? Bv.bind(null, e)
            : null)
    );
  }
  function qv(e, t) {
    if (Lu()) return null;
    _v(e, t, !0);
  }
  function _S() {
    CS(function () {
      (st & 6) !== 0 ? ti(ni, bS) : zv();
    });
  }
  function Nd() {
    return xi === 0 && (xi = Xi()), xi;
  }
  function Hv(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Zo("" + e);
  }
  function Pv(e, t) {
    var i = t.ownerDocument.createElement("input");
    return (
      (i.name = t.name),
      (i.value = t.value),
      e.id && i.setAttribute("form", e.id),
      t.parentNode.insertBefore(i, t),
      (e = new FormData(e)),
      i.parentNode.removeChild(i),
      e
    );
  }
  function wS(e, t, i, l, c) {
    if (t === "submit" && i && i.stateNode === c) {
      var d = Hv((c[ae] || null).action),
        v = l.submitter;
      v &&
        ((t = (t = v[ae] || null)
          ? Hv(t.formAction)
          : v.getAttribute("formAction")),
        t !== null && ((d = t), (v = null)));
      var w = new eu("action", "action", null, l, c);
      e.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (xi !== 0) {
                  var E = v ? Pv(c, v) : new FormData(c);
                  Wf(
                    i,
                    { pending: !0, data: E, method: c.method, action: d },
                    null,
                    E
                  );
                }
              } else
                typeof d == "function" &&
                  (w.preventDefault(),
                  (E = v ? Pv(c, v) : new FormData(c)),
                  Wf(
                    i,
                    { pending: !0, data: E, method: c.method, action: d },
                    d,
                    E
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var Ud = 0; Ud < gf.length; Ud++) {
    var kd = gf[Ud],
      SS = kd.toLowerCase(),
      xS = kd[0].toUpperCase() + kd.slice(1);
    tr(SS, "on" + xS);
  }
  tr(_m, "onAnimationEnd"),
    tr(wm, "onAnimationIteration"),
    tr(Sm, "onAnimationStart"),
    tr("dblclick", "onDoubleClick"),
    tr("focusin", "onFocus"),
    tr("focusout", "onBlur"),
    tr(Hw, "onTransitionRun"),
    tr(Pw, "onTransitionStart"),
    tr($w, "onTransitionCancel"),
    tr(xm, "onTransitionEnd"),
    zn("onMouseEnter", ["mouseout", "mouseover"]),
    zn("onMouseLeave", ["mouseout", "mouseover"]),
    zn("onPointerEnter", ["pointerout", "pointerover"]),
    zn("onPointerLeave", ["pointerout", "pointerover"]),
    tn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    tn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    tn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    tn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    tn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Yl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    ES = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Yl)
    );
  function $v(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var l = e[i],
        c = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var v = l.length - 1; 0 <= v; v--) {
            var w = l[v],
              E = w.instance,
              H = w.currentTarget;
            if (((w = w.listener), E !== d && c.isPropagationStopped()))
              break e;
            (d = w), (c.currentTarget = H);
            try {
              d(c);
            } catch (X) {
              Ru(X);
            }
            (c.currentTarget = null), (d = E);
          }
        else
          for (v = 0; v < l.length; v++) {
            if (
              ((w = l[v]),
              (E = w.instance),
              (H = w.currentTarget),
              (w = w.listener),
              E !== d && c.isPropagationStopped())
            )
              break e;
            (d = w), (c.currentTarget = H);
            try {
              d(c);
            } catch (X) {
              Ru(X);
            }
            (c.currentTarget = null), (d = E);
          }
      }
    }
  }
  function Ye(e, t) {
    var i = t[je];
    i === void 0 && (i = t[je] = new Set());
    var l = e + "__bubble";
    i.has(l) || (Vv(t, e, 2, !1), i.add(l));
  }
  function zd(e, t, i) {
    var l = 0;
    t && (l |= 4), Vv(i, e, l, t);
  }
  var Hu = "_reactListening" + Math.random().toString(36).slice(2);
  function Ld(e) {
    if (!e[Hu]) {
      (e[Hu] = !0),
        Ze.forEach(function (i) {
          i !== "selectionchange" && (ES.has(i) || zd(i, !1, e), zd(i, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hu] || ((t[Hu] = !0), zd("selectionchange", !1, t));
    }
  }
  function Vv(e, t, i, l) {
    switch (hg(t)) {
      case 2:
        var c = IS;
        break;
      case 8:
        c = JS;
        break;
      default:
        c = Id;
    }
    (i = c.bind(null, t, i, e)),
      (c = void 0),
      !af ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (c = !0),
      l
        ? c !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: c })
          : e.addEventListener(t, i, !0)
        : c !== void 0
        ? e.addEventListener(t, i, { passive: c })
        : e.addEventListener(t, i, !1);
  }
  function Bd(e, t, i, l, c) {
    var d = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var w = l.stateNode.containerInfo;
          if (w === c) break;
          if (v === 4)
            for (v = l.return; v !== null; ) {
              var E = v.tag;
              if ((E === 3 || E === 4) && v.stateNode.containerInfo === c)
                return;
              v = v.return;
            }
          for (; w !== null; ) {
            if (((v = ze(w)), v === null)) return;
            if (((E = v.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              l = d = v;
              continue e;
            }
            w = w.parentNode;
          }
        }
        l = l.return;
      }
    Zy(function () {
      var H = d,
        X = nf(i),
        J = [];
      e: {
        var V = Em.get(e);
        if (V !== void 0) {
          var F = eu,
            ke = e;
          switch (e) {
            case "keypress":
              if (Jo(i) === 0) break e;
            case "keydown":
            case "keyup":
              F = gw;
              break;
            case "focusin":
              (ke = "focus"), (F = uf);
              break;
            case "focusout":
              (ke = "blur"), (F = uf);
              break;
            case "beforeblur":
            case "afterblur":
              F = uf;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = Wy;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = sw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = ww;
              break;
            case _m:
            case wm:
            case Sm:
              F = uw;
              break;
            case xm:
              F = xw;
              break;
            case "scroll":
            case "scrollend":
              F = aw;
              break;
            case "wheel":
              F = Tw;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = fw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = tm;
              break;
            case "toggle":
            case "beforetoggle":
              F = Ow;
          }
          var Ce = (t & 4) !== 0,
            ct = !Ce && (e === "scroll" || e === "scrollend"),
            k = Ce ? (V !== null ? V + "Capture" : null) : V;
          Ce = [];
          for (var M = H, B; M !== null; ) {
            var I = M;
            if (
              ((B = I.stateNode),
              (I = I.tag),
              (I !== 5 && I !== 26 && I !== 27) ||
                B === null ||
                k === null ||
                ((I = dl(M, k)), I != null && Ce.push(Kl(M, I, B))),
              ct)
            )
              break;
            M = M.return;
          }
          0 < Ce.length &&
            ((V = new F(V, ke, null, i, X)),
            J.push({ event: V, listeners: Ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((V = e === "mouseover" || e === "pointerover"),
            (F = e === "mouseout" || e === "pointerout"),
            V &&
              i !== tf &&
              (ke = i.relatedTarget || i.fromElement) &&
              (ze(ke) || ke[pe]))
          )
            break e;
          if (
            (F || V) &&
            ((V =
              X.window === X
                ? X
                : (V = X.ownerDocument)
                ? V.defaultView || V.parentWindow
                : window),
            F
              ? ((ke = i.relatedTarget || i.toElement),
                (F = H),
                (ke = ke ? ze(ke) : null),
                ke !== null &&
                  ((ct = u(ke)),
                  (Ce = ke.tag),
                  ke !== ct || (Ce !== 5 && Ce !== 27 && Ce !== 6)) &&
                  (ke = null))
              : ((F = null), (ke = H)),
            F !== ke)
          ) {
            if (
              ((Ce = Wy),
              (I = "onMouseLeave"),
              (k = "onMouseEnter"),
              (M = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Ce = tm),
                (I = "onPointerLeave"),
                (k = "onPointerEnter"),
                (M = "pointer")),
              (ct = F == null ? V : yt(F)),
              (B = ke == null ? V : yt(ke)),
              (V = new Ce(I, M + "leave", F, i, X)),
              (V.target = ct),
              (V.relatedTarget = B),
              (I = null),
              ze(X) === H &&
                ((Ce = new Ce(k, M + "enter", ke, i, X)),
                (Ce.target = B),
                (Ce.relatedTarget = ct),
                (I = Ce)),
              (ct = I),
              F && ke)
            )
              t: {
                for (Ce = F, k = ke, M = 0, B = Ce; B; B = Rs(B)) M++;
                for (B = 0, I = k; I; I = Rs(I)) B++;
                for (; 0 < M - B; ) (Ce = Rs(Ce)), M--;
                for (; 0 < B - M; ) (k = Rs(k)), B--;
                for (; M--; ) {
                  if (Ce === k || (k !== null && Ce === k.alternate)) break t;
                  (Ce = Rs(Ce)), (k = Rs(k));
                }
                Ce = null;
              }
            else Ce = null;
            F !== null && Fv(J, V, F, Ce, !1),
              ke !== null && ct !== null && Fv(J, ct, ke, Ce, !0);
          }
        }
        e: {
          if (
            ((V = H ? yt(H) : window),
            (F = V.nodeName && V.nodeName.toLowerCase()),
            F === "select" || (F === "input" && V.type === "file"))
          )
            var me = um;
          else if (lm(V))
            if (cm) me = Lw;
            else {
              me = kw;
              var Ge = Uw;
            }
          else
            (F = V.nodeName),
              !F ||
              F.toLowerCase() !== "input" ||
              (V.type !== "checkbox" && V.type !== "radio")
                ? H && ef(H.elementType) && (me = um)
                : (me = zw);
          if (me && (me = me(e, H))) {
            om(J, me, i, X);
            break e;
          }
          Ge && Ge(e, V, H),
            e === "focusout" &&
              H &&
              V.type === "number" &&
              H.memoizedProps.value != null &&
              Wc(V, "number", V.value);
        }
        switch (((Ge = H ? yt(H) : window), e)) {
          case "focusin":
            (lm(Ge) || Ge.contentEditable === "true") &&
              ((ns = Ge), (mf = H), (_l = null));
            break;
          case "focusout":
            _l = mf = ns = null;
            break;
          case "mousedown":
            pf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (pf = !1), gm(J, i, X);
            break;
          case "selectionchange":
            if (qw) break;
          case "keydown":
          case "keyup":
            gm(J, i, X);
        }
        var Se;
        if (ff)
          e: {
            switch (e) {
              case "compositionstart":
                var Me = "onCompositionStart";
                break e;
              case "compositionend":
                Me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Me = "onCompositionUpdate";
                break e;
            }
            Me = void 0;
          }
        else
          ts
            ? im(e, i) && (Me = "onCompositionEnd")
            : e === "keydown" &&
              i.keyCode === 229 &&
              (Me = "onCompositionStart");
        Me &&
          (nm &&
            i.locale !== "ko" &&
            (ts || Me !== "onCompositionStart"
              ? Me === "onCompositionEnd" && ts && (Se = Iy())
              : ((la = X),
                (sf = "value" in la ? la.value : la.textContent),
                (ts = !0))),
          (Ge = Pu(H, Me)),
          0 < Ge.length &&
            ((Me = new em(Me, e, null, i, X)),
            J.push({ event: Me, listeners: Ge }),
            Se
              ? (Me.data = Se)
              : ((Se = sm(i)), Se !== null && (Me.data = Se)))),
          (Se = jw ? Cw(e, i) : Dw(e, i)) &&
            ((Me = Pu(H, "onBeforeInput")),
            0 < Me.length &&
              ((Ge = new em("onBeforeInput", "beforeinput", null, i, X)),
              J.push({ event: Ge, listeners: Me }),
              (Ge.data = Se))),
          wS(J, e, H, i, X);
      }
      $v(J, t);
    });
  }
  function Kl(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function Pu(e, t) {
    for (var i = t + "Capture", l = []; e !== null; ) {
      var c = e,
        d = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          d === null ||
          ((c = dl(e, i)),
          c != null && l.unshift(Kl(e, c, d)),
          (c = dl(e, t)),
          c != null && l.push(Kl(e, c, d))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Rs(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Fv(e, t, i, l, c) {
    for (var d = t._reactName, v = []; i !== null && i !== l; ) {
      var w = i,
        E = w.alternate,
        H = w.stateNode;
      if (((w = w.tag), E !== null && E === l)) break;
      (w !== 5 && w !== 26 && w !== 27) ||
        H === null ||
        ((E = H),
        c
          ? ((H = dl(i, d)), H != null && v.unshift(Kl(i, H, E)))
          : c || ((H = dl(i, d)), H != null && v.push(Kl(i, H, E)))),
        (i = i.return);
    }
    v.length !== 0 && e.push({ event: t, listeners: v });
  }
  var TS = /\r\n?/g,
    RS = /\u0000|\uFFFD/g;
  function Gv(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        TS,
        `
`
      )
      .replace(RS, "");
  }
  function Qv(e, t) {
    return (t = Gv(t)), Gv(e) === t;
  }
  function $u() {}
  function ut(e, t, i, l, c, d) {
    switch (i) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Ji(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Ji(e, "" + l);
        break;
      case "className":
        jr(e, "class", l);
        break;
      case "tabIndex":
        jr(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        jr(e, i, l);
        break;
      case "style":
        Ky(e, l, d);
        break;
      case "data":
        if (t !== "object") {
          jr(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(i);
          break;
        }
        (l = Zo("" + l)), e.setAttribute(i, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" &&
            (i === "formAction"
              ? (t !== "input" && ut(e, t, "name", c.name, c, null),
                ut(e, t, "formEncType", c.formEncType, c, null),
                ut(e, t, "formMethod", c.formMethod, c, null),
                ut(e, t, "formTarget", c.formTarget, c, null))
              : (ut(e, t, "encType", c.encType, c, null),
                ut(e, t, "method", c.method, c, null),
                ut(e, t, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(i);
          break;
        }
        (l = Zo("" + l)), e.setAttribute(i, l);
        break;
      case "onClick":
        l != null && (e.onclick = $u);
        break;
      case "onScroll":
        l != null && Ye("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ye("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((i = l.__html), i != null)) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (i = Zo("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(i, "" + l)
          : e.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(i, "")
          : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(i, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(i, l)
          : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(i, l)
          : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(i)
          : e.setAttribute(i, l);
        break;
      case "popover":
        Ye("beforetoggle", e), Ye("toggle", e), Ln(e, "popover", l);
        break;
      case "xlinkActuate":
        Fe(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Fe(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Fe(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Fe(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Fe(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Fe(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Fe(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Fe(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Fe(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Ln(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) ||
          (i[0] !== "o" && i[0] !== "O") ||
          (i[1] !== "n" && i[1] !== "N")) &&
          ((i = nw.get(i) || i), Ln(e, i, l));
    }
  }
  function qd(e, t, i, l, c, d) {
    switch (i) {
      case "style":
        Ky(e, l, d);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((i = l.__html), i != null)) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Ji(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Ji(e, "" + l);
        break;
      case "onScroll":
        l != null && Ye("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ye("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = $u);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ra.hasOwnProperty(i))
          e: {
            if (
              i[0] === "o" &&
              i[1] === "n" &&
              ((c = i.endsWith("Capture")),
              (t = i.slice(2, c ? i.length - 7 : void 0)),
              (d = e[ae] || null),
              (d = d != null ? d[i] : null),
              typeof d == "function" && e.removeEventListener(t, d, c),
              typeof l == "function")
            ) {
              typeof d != "function" &&
                d !== null &&
                (i in e
                  ? (e[i] = null)
                  : e.hasAttribute(i) && e.removeAttribute(i)),
                e.addEventListener(t, l, c);
              break e;
            }
            i in e
              ? (e[i] = l)
              : l === !0
              ? e.setAttribute(i, "")
              : Ln(e, i, l);
          }
    }
  }
  function Qt(e, t, i) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ye("error", e), Ye("load", e);
        var l = !1,
          c = !1,
          d;
        for (d in i)
          if (i.hasOwnProperty(d)) {
            var v = i[d];
            if (v != null)
              switch (d) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  ut(e, t, d, v, i, null);
              }
          }
        c && ut(e, t, "srcSet", i.srcSet, i, null),
          l && ut(e, t, "src", i.src, i, null);
        return;
      case "input":
        Ye("invalid", e);
        var w = (d = v = c = null),
          E = null,
          H = null;
        for (l in i)
          if (i.hasOwnProperty(l)) {
            var X = i[l];
            if (X != null)
              switch (l) {
                case "name":
                  c = X;
                  break;
                case "type":
                  v = X;
                  break;
                case "checked":
                  E = X;
                  break;
                case "defaultChecked":
                  H = X;
                  break;
                case "value":
                  d = X;
                  break;
                case "defaultValue":
                  w = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null) throw Error(s(137, t));
                  break;
                default:
                  ut(e, t, l, X, i, null);
              }
          }
        Fy(e, d, w, E, H, v, c, !1), Ko(e);
        return;
      case "select":
        Ye("invalid", e), (l = v = d = null);
        for (c in i)
          if (i.hasOwnProperty(c) && ((w = i[c]), w != null))
            switch (c) {
              case "value":
                d = w;
                break;
              case "defaultValue":
                v = w;
                break;
              case "multiple":
                l = w;
              default:
                ut(e, t, c, w, i, null);
            }
        (t = d),
          (i = v),
          (e.multiple = !!l),
          t != null ? Ii(e, !!l, t, !1) : i != null && Ii(e, !!l, i, !0);
        return;
      case "textarea":
        Ye("invalid", e), (d = c = l = null);
        for (v in i)
          if (i.hasOwnProperty(v) && ((w = i[v]), w != null))
            switch (v) {
              case "value":
                l = w;
                break;
              case "defaultValue":
                c = w;
                break;
              case "children":
                d = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(s(91));
                break;
              default:
                ut(e, t, v, w, i, null);
            }
        Qy(e, l, c, d), Ko(e);
        return;
      case "option":
        for (E in i)
          if (i.hasOwnProperty(E) && ((l = i[E]), l != null))
            switch (E) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                ut(e, t, E, l, i, null);
            }
        return;
      case "dialog":
        Ye("beforetoggle", e), Ye("toggle", e), Ye("cancel", e), Ye("close", e);
        break;
      case "iframe":
      case "object":
        Ye("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Yl.length; l++) Ye(Yl[l], e);
        break;
      case "image":
        Ye("error", e), Ye("load", e);
        break;
      case "details":
        Ye("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ye("error", e), Ye("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (H in i)
          if (i.hasOwnProperty(H) && ((l = i[H]), l != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                ut(e, t, H, l, i, null);
            }
        return;
      default:
        if (ef(t)) {
          for (X in i)
            i.hasOwnProperty(X) &&
              ((l = i[X]), l !== void 0 && qd(e, t, X, l, i, void 0));
          return;
        }
    }
    for (w in i)
      i.hasOwnProperty(w) && ((l = i[w]), l != null && ut(e, t, w, l, i, null));
  }
  function OS(e, t, i, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          d = null,
          v = null,
          w = null,
          E = null,
          H = null,
          X = null;
        for (F in i) {
          var J = i[F];
          if (i.hasOwnProperty(F) && J != null)
            switch (F) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = J;
              default:
                l.hasOwnProperty(F) || ut(e, t, F, null, l, J);
            }
        }
        for (var V in l) {
          var F = l[V];
          if (((J = i[V]), l.hasOwnProperty(V) && (F != null || J != null)))
            switch (V) {
              case "type":
                d = F;
                break;
              case "name":
                c = F;
                break;
              case "checked":
                H = F;
                break;
              case "defaultChecked":
                X = F;
                break;
              case "value":
                v = F;
                break;
              case "defaultValue":
                w = F;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null) throw Error(s(137, t));
                break;
              default:
                F !== J && ut(e, t, V, F, l, J);
            }
        }
        Jc(e, v, w, E, H, X, d, c);
        return;
      case "select":
        F = v = w = V = null;
        for (d in i)
          if (((E = i[d]), i.hasOwnProperty(d) && E != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                F = E;
              default:
                l.hasOwnProperty(d) || ut(e, t, d, null, l, E);
            }
        for (c in l)
          if (
            ((d = l[c]),
            (E = i[c]),
            l.hasOwnProperty(c) && (d != null || E != null))
          )
            switch (c) {
              case "value":
                V = d;
                break;
              case "defaultValue":
                w = d;
                break;
              case "multiple":
                v = d;
              default:
                d !== E && ut(e, t, c, d, l, E);
            }
        (t = w),
          (i = v),
          (l = F),
          V != null
            ? Ii(e, !!i, V, !1)
            : !!l != !!i &&
              (t != null ? Ii(e, !!i, t, !0) : Ii(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        F = V = null;
        for (w in i)
          if (
            ((c = i[w]),
            i.hasOwnProperty(w) && c != null && !l.hasOwnProperty(w))
          )
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                ut(e, t, w, null, l, c);
            }
        for (v in l)
          if (
            ((c = l[v]),
            (d = i[v]),
            l.hasOwnProperty(v) && (c != null || d != null))
          )
            switch (v) {
              case "value":
                V = c;
                break;
              case "defaultValue":
                F = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== d && ut(e, t, v, c, l, d);
            }
        Gy(e, V, F);
        return;
      case "option":
        for (var ke in i)
          if (
            ((V = i[ke]),
            i.hasOwnProperty(ke) && V != null && !l.hasOwnProperty(ke))
          )
            switch (ke) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ut(e, t, ke, null, l, V);
            }
        for (E in l)
          if (
            ((V = l[E]),
            (F = i[E]),
            l.hasOwnProperty(E) && V !== F && (V != null || F != null))
          )
            switch (E) {
              case "selected":
                e.selected =
                  V && typeof V != "function" && typeof V != "symbol";
                break;
              default:
                ut(e, t, E, V, l, F);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ce in i)
          (V = i[Ce]),
            i.hasOwnProperty(Ce) &&
              V != null &&
              !l.hasOwnProperty(Ce) &&
              ut(e, t, Ce, null, l, V);
        for (H in l)
          if (
            ((V = l[H]),
            (F = i[H]),
            l.hasOwnProperty(H) && V !== F && (V != null || F != null))
          )
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(s(137, t));
                break;
              default:
                ut(e, t, H, V, l, F);
            }
        return;
      default:
        if (ef(t)) {
          for (var ct in i)
            (V = i[ct]),
              i.hasOwnProperty(ct) &&
                V !== void 0 &&
                !l.hasOwnProperty(ct) &&
                qd(e, t, ct, void 0, l, V);
          for (X in l)
            (V = l[X]),
              (F = i[X]),
              !l.hasOwnProperty(X) ||
                V === F ||
                (V === void 0 && F === void 0) ||
                qd(e, t, X, V, l, F);
          return;
        }
    }
    for (var k in i)
      (V = i[k]),
        i.hasOwnProperty(k) &&
          V != null &&
          !l.hasOwnProperty(k) &&
          ut(e, t, k, null, l, V);
    for (J in l)
      (V = l[J]),
        (F = i[J]),
        !l.hasOwnProperty(J) ||
          V === F ||
          (V == null && F == null) ||
          ut(e, t, J, V, l, F);
  }
  var Hd = null,
    Pd = null;
  function Vu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Yv(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Kv(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function $d(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Vd = null;
  function AS() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Vd
        ? !1
        : ((Vd = e), !0)
      : ((Vd = null), !1);
  }
  var Xv = typeof setTimeout == "function" ? setTimeout : void 0,
    jS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zv = typeof Promise == "function" ? Promise : void 0,
    CS =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zv < "u"
        ? function (e) {
            return Zv.resolve(null).then(e).catch(DS);
          }
        : Xv;
  function DS(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function xa(e) {
    return e === "head";
  }
  function Iv(e, t) {
    var i = t,
      l = 0,
      c = 0;
    do {
      var d = i.nextSibling;
      if ((e.removeChild(i), d && d.nodeType === 8))
        if (((i = d.data), i === "/$")) {
          if (0 < l && 8 > l) {
            i = l;
            var v = e.ownerDocument;
            if ((i & 1 && Xl(v.documentElement), i & 2 && Xl(v.body), i & 4))
              for (i = v.head, Xl(i), v = i.firstChild; v; ) {
                var w = v.nextSibling,
                  E = v.nodeName;
                v[Ue] ||
                  E === "SCRIPT" ||
                  E === "STYLE" ||
                  (E === "LINK" && v.rel.toLowerCase() === "stylesheet") ||
                  i.removeChild(v),
                  (v = w);
              }
          }
          if (c === 0) {
            e.removeChild(d), ro(t);
            return;
          }
          c--;
        } else
          i === "$" || i === "$?" || i === "$!"
            ? c++
            : (l = i.charCodeAt(0) - 48);
      else l = 0;
      i = d;
    } while (i);
    ro(t);
  }
  function Fd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var i = t;
      switch (((t = t.nextSibling), i.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Fd(i), we(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function MS(e, t, i, l) {
    for (; e.nodeType === 1; ) {
      var c = i;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Ue])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((d = e.getAttribute("rel")),
                d === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== c.rel ||
                e.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                e.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((d = e.getAttribute("src")),
                (d !== (c.src == null ? null : c.src) ||
                  e.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  e.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  d &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var d = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === d) return e;
      } else return e;
      if (((e = rr(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function NS(e, t, i) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !i) ||
        ((e = rr(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Gd(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function US(e, t) {
    var i = e.ownerDocument;
    if (e.data !== "$?" || i.readyState === "complete") t();
    else {
      var l = function () {
        t(), i.removeEventListener("DOMContentLoaded", l);
      };
      i.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function rr(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Qd = null;
  function Jv(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (t === 0) return e;
          t--;
        } else i === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Wv(e, t, i) {
    switch (((t = Vu(i)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Xl(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    we(e);
  }
  var Gn = new Map(),
    eg = new Set();
  function Fu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var Vr = ee.d;
  ee.d = { f: kS, r: zS, D: LS, C: BS, L: qS, m: HS, X: $S, S: PS, M: VS };
  function kS() {
    var e = Vr.f(),
      t = ku();
    return e || t;
  }
  function zS(e) {
    var t = We(e);
    t !== null && t.tag === 5 && t.type === "form" ? _p(t) : Vr.r(e);
  }
  var Os = typeof document > "u" ? null : document;
  function tg(e, t, i) {
    var l = Os;
    if (l && typeof t == "string" && t) {
      var c = Bn(t);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof i == "string" && (c += '[crossorigin="' + i + '"]'),
        eg.has(c) ||
          (eg.add(c),
          (e = { rel: e, crossOrigin: i, href: t }),
          l.querySelector(c) === null &&
            ((t = l.createElement("link")),
            Qt(t, "link", e),
            et(t),
            l.head.appendChild(t)));
    }
  }
  function LS(e) {
    Vr.D(e), tg("dns-prefetch", e, null);
  }
  function BS(e, t) {
    Vr.C(e, t), tg("preconnect", e, t);
  }
  function qS(e, t, i) {
    Vr.L(e, t, i);
    var l = Os;
    if (l && e && t) {
      var c = 'link[rel="preload"][as="' + Bn(t) + '"]';
      t === "image" && i && i.imageSrcSet
        ? ((c += '[imagesrcset="' + Bn(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == "string" &&
            (c += '[imagesizes="' + Bn(i.imageSizes) + '"]'))
        : (c += '[href="' + Bn(e) + '"]');
      var d = c;
      switch (t) {
        case "style":
          d = As(e);
          break;
        case "script":
          d = js(e);
      }
      Gn.has(d) ||
        ((e = p(
          {
            rel: "preload",
            href: t === "image" && i && i.imageSrcSet ? void 0 : e,
            as: t,
          },
          i
        )),
        Gn.set(d, e),
        l.querySelector(c) !== null ||
          (t === "style" && l.querySelector(Zl(d))) ||
          (t === "script" && l.querySelector(Il(d))) ||
          ((t = l.createElement("link")),
          Qt(t, "link", e),
          et(t),
          l.head.appendChild(t)));
    }
  }
  function HS(e, t) {
    Vr.m(e, t);
    var i = Os;
    if (i && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        c =
          'link[rel="modulepreload"][as="' + Bn(l) + '"][href="' + Bn(e) + '"]',
        d = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = js(e);
      }
      if (
        !Gn.has(d) &&
        ((e = p({ rel: "modulepreload", href: e }, t)),
        Gn.set(d, e),
        i.querySelector(c) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Il(d))) return;
        }
        (l = i.createElement("link")),
          Qt(l, "link", e),
          et(l),
          i.head.appendChild(l);
      }
    }
  }
  function PS(e, t, i) {
    Vr.S(e, t, i);
    var l = Os;
    if (l && e) {
      var c = bt(l).hoistableStyles,
        d = As(e);
      t = t || "default";
      var v = c.get(d);
      if (!v) {
        var w = { loading: 0, preload: null };
        if ((v = l.querySelector(Zl(d)))) w.loading = 5;
        else {
          (e = p({ rel: "stylesheet", href: e, "data-precedence": t }, i)),
            (i = Gn.get(d)) && Yd(e, i);
          var E = (v = l.createElement("link"));
          et(E),
            Qt(E, "link", e),
            (E._p = new Promise(function (H, X) {
              (E.onload = H), (E.onerror = X);
            })),
            E.addEventListener("load", function () {
              w.loading |= 1;
            }),
            E.addEventListener("error", function () {
              w.loading |= 2;
            }),
            (w.loading |= 4),
            Gu(v, t, l);
        }
        (v = { type: "stylesheet", instance: v, count: 1, state: w }),
          c.set(d, v);
      }
    }
  }
  function $S(e, t) {
    Vr.X(e, t);
    var i = Os;
    if (i && e) {
      var l = bt(i).hoistableScripts,
        c = js(e),
        d = l.get(c);
      d ||
        ((d = i.querySelector(Il(c))),
        d ||
          ((e = p({ src: e, async: !0 }, t)),
          (t = Gn.get(c)) && Kd(e, t),
          (d = i.createElement("script")),
          et(d),
          Qt(d, "link", e),
          i.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        l.set(c, d));
    }
  }
  function VS(e, t) {
    Vr.M(e, t);
    var i = Os;
    if (i && e) {
      var l = bt(i).hoistableScripts,
        c = js(e),
        d = l.get(c);
      d ||
        ((d = i.querySelector(Il(c))),
        d ||
          ((e = p({ src: e, async: !0, type: "module" }, t)),
          (t = Gn.get(c)) && Kd(e, t),
          (d = i.createElement("script")),
          et(d),
          Qt(d, "link", e),
          i.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        l.set(c, d));
    }
  }
  function ng(e, t, i, l) {
    var c = (c = Te.current) ? Fu(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string"
          ? ((t = As(i.href)),
            (i = bt(c).hoistableStyles),
            (l = i.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              i.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          i.rel === "stylesheet" &&
          typeof i.href == "string" &&
          typeof i.precedence == "string"
        ) {
          e = As(i.href);
          var d = bt(c).hoistableStyles,
            v = d.get(e);
          if (
            (v ||
              ((c = c.ownerDocument || c),
              (v = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, v),
              (d = c.querySelector(Zl(e))) &&
                !d._p &&
                ((v.instance = d), (v.state.loading = 5)),
              Gn.has(e) ||
                ((i = {
                  rel: "preload",
                  as: "style",
                  href: i.href,
                  crossOrigin: i.crossOrigin,
                  integrity: i.integrity,
                  media: i.media,
                  hrefLang: i.hrefLang,
                  referrerPolicy: i.referrerPolicy,
                }),
                Gn.set(e, i),
                d || FS(c, e, i, v.state))),
            t && l === null)
          )
            throw Error(s(528, ""));
          return v;
        }
        if (t && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = i.async),
          (i = i.src),
          typeof i == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = js(i)),
              (i = bt(c).hoistableScripts),
              (l = i.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                i.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function As(e) {
    return 'href="' + Bn(e) + '"';
  }
  function Zl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function rg(e) {
    return p({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function FS(e, t, i, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Qt(t, "link", i),
        et(t),
        e.head.appendChild(t));
  }
  function js(e) {
    return '[src="' + Bn(e) + '"]';
  }
  function Il(e) {
    return "script[async]" + e;
  }
  function ag(e, t, i) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + Bn(i.href) + '"]');
          if (l) return (t.instance = l), et(l), l;
          var c = p({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            et(l),
            Qt(l, "style", c),
            Gu(l, i.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          c = As(i.href);
          var d = e.querySelector(Zl(c));
          if (d) return (t.state.loading |= 4), (t.instance = d), et(d), d;
          (l = rg(i)),
            (c = Gn.get(c)) && Yd(l, c),
            (d = (e.ownerDocument || e).createElement("link")),
            et(d);
          var v = d;
          return (
            (v._p = new Promise(function (w, E) {
              (v.onload = w), (v.onerror = E);
            })),
            Qt(d, "link", l),
            (t.state.loading |= 4),
            Gu(d, i.precedence, e),
            (t.instance = d)
          );
        case "script":
          return (
            (d = js(i.src)),
            (c = e.querySelector(Il(d)))
              ? ((t.instance = c), et(c), c)
              : ((l = i),
                (c = Gn.get(d)) && ((l = p({}, i)), Kd(l, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement("script")),
                et(c),
                Qt(c, "link", l),
                e.head.appendChild(c),
                (t.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Gu(l, i.precedence, e));
    return t.instance;
  }
  function Gu(e, t, i) {
    for (
      var l = i.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        c = l.length ? l[l.length - 1] : null,
        d = c,
        v = 0;
      v < l.length;
      v++
    ) {
      var w = l[v];
      if (w.dataset.precedence === t) d = w;
      else if (d !== c) break;
    }
    d
      ? d.parentNode.insertBefore(e, d.nextSibling)
      : ((t = i.nodeType === 9 ? i.head : i), t.insertBefore(e, t.firstChild));
  }
  function Yd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Kd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Qu = null;
  function ig(e, t, i) {
    if (Qu === null) {
      var l = new Map(),
        c = (Qu = new Map());
      c.set(i, l);
    } else (c = Qu), (l = c.get(i)), l || ((l = new Map()), c.set(i, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), i = i.getElementsByTagName(e), c = 0;
      c < i.length;
      c++
    ) {
      var d = i[c];
      if (
        !(
          d[Ue] ||
          d[W] ||
          (e === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var v = d.getAttribute(t) || "";
        v = e + v;
        var w = l.get(v);
        w ? w.push(d) : l.set(v, [d]);
      }
    }
    return l;
  }
  function sg(e, t, i) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        i,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function GS(e, t, i) {
    if (i === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function lg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Jl = null;
  function QS() {}
  function YS(e, t, i) {
    if (Jl === null) throw Error(s(475));
    var l = Jl;
    if (
      t.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var c = As(i.href),
          d = e.querySelector(Zl(c));
        if (d) {
          (e = d._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = Yu.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = d),
            et(d);
          return;
        }
        (d = e.ownerDocument || e),
          (i = rg(i)),
          (c = Gn.get(c)) && Yd(i, c),
          (d = d.createElement("link")),
          et(d);
        var v = d;
        (v._p = new Promise(function (w, E) {
          (v.onload = w), (v.onerror = E);
        })),
          Qt(d, "link", i),
          (t.instance = d);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = Yu.bind(l)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function KS() {
    if (Jl === null) throw Error(s(475));
    var e = Jl;
    return (
      e.stylesheets && e.count === 0 && Xd(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var i = setTimeout(function () {
              if ((e.stylesheets && Xd(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(i);
              }
            );
          }
        : null
    );
  }
  function Yu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Xd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Ku = null;
  function Xd(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ku = new Map()),
        t.forEach(XS, e),
        (Ku = null),
        Yu.call(e));
  }
  function XS(e, t) {
    if (!(t.state.loading & 4)) {
      var i = Ku.get(e);
      if (i) var l = i.get(null);
      else {
        (i = new Map()), Ku.set(e, i);
        for (
          var c = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            d = 0;
          d < c.length;
          d++
        ) {
          var v = c[d];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") &&
            (i.set(v.dataset.precedence, v), (l = v));
        }
        l && i.set(null, l);
      }
      (c = t.instance),
        (v = c.getAttribute("data-precedence")),
        (d = i.get(v) || l),
        d === l && i.set(null, c),
        i.set(v, c),
        this.count++,
        (l = Yu.bind(this)),
        c.addEventListener("load", l),
        c.addEventListener("error", l),
        d
          ? d.parentNode.insertBefore(c, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(c, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Wl = {
    $$typeof: z,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0,
  };
  function ZS(e, t, i, l, c, d, v, w) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Zi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zi(0)),
      (this.hiddenUpdates = Zi(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = c),
      (this.onCaughtError = d),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map());
  }
  function og(e, t, i, l, c, d, v, w, E, H, X, J) {
    return (
      (e = new ZS(e, t, i, v, w, E, H, J)),
      (t = 1),
      d === !0 && (t |= 24),
      (d = Tn(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (t = Cf()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (d.memoizedState = { element: l, isDehydrated: i, cache: t }),
      Uf(d),
      e
    );
  }
  function ug(e) {
    return e ? ((e = ss), e) : ss;
  }
  function cg(e, t, i, l, c, d) {
    (c = ug(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = ca(t)),
      (l.payload = { element: i }),
      (d = d === void 0 ? null : d),
      d !== null && (l.callback = d),
      (i = fa(e, l, t)),
      i !== null && (Cn(i, e, t), jl(i, e, t));
  }
  function fg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Zd(e, t) {
    fg(e, t), (e = e.alternate) && fg(e, t);
  }
  function dg(e) {
    if (e.tag === 13) {
      var t = is(e, 67108864);
      t !== null && Cn(t, e, 67108864), Zd(e, 67108864);
    }
  }
  var Xu = !0;
  function IS(e, t, i, l) {
    var c = q.T;
    q.T = null;
    var d = ee.p;
    try {
      (ee.p = 2), Id(e, t, i, l);
    } finally {
      (ee.p = d), (q.T = c);
    }
  }
  function JS(e, t, i, l) {
    var c = q.T;
    q.T = null;
    var d = ee.p;
    try {
      (ee.p = 8), Id(e, t, i, l);
    } finally {
      (ee.p = d), (q.T = c);
    }
  }
  function Id(e, t, i, l) {
    if (Xu) {
      var c = Jd(l);
      if (c === null) Bd(e, t, l, Zu, i), yg(e, l);
      else if (e1(c, e, t, i, l)) l.stopPropagation();
      else if ((yg(e, l), t & 4 && -1 < WS.indexOf(e))) {
        for (; c !== null; ) {
          var d = We(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var v = Jn(d.pendingLanes);
                  if (v !== 0) {
                    var w = d;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; v; ) {
                      var E = 1 << (31 - rt(v));
                      (w.entanglements[1] |= E), (v &= ~E);
                    }
                    br(d), (st & 6) === 0 && ((Nu = en() + 500), Ql(0));
                  }
                }
                break;
              case 13:
                (w = is(d, 2)), w !== null && Cn(w, d, 2), ku(), Zd(d, 2);
            }
          if (((d = Jd(l)), d === null && Bd(e, t, l, Zu, i), d === c)) break;
          c = d;
        }
        c !== null && l.stopPropagation();
      } else Bd(e, t, l, null, i);
    }
  }
  function Jd(e) {
    return (e = nf(e)), Wd(e);
  }
  var Zu = null;
  function Wd(e) {
    if (((Zu = null), (e = ze(e)), e !== null)) {
      var t = u(e);
      if (t === null) e = null;
      else {
        var i = t.tag;
        if (i === 13) {
          if (((e = f(t)), e !== null)) return e;
          e = null;
        } else if (i === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Zu = e), null;
  }
  function hg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Go()) {
          case ni:
            return 2;
          case O:
            return 8;
          case $:
          case K:
            return 32;
          case oe:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var eh = !1,
    Ea = null,
    Ta = null,
    Ra = null,
    eo = new Map(),
    to = new Map(),
    Oa = [],
    WS =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function yg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ea = null;
        break;
      case "dragenter":
      case "dragleave":
        Ta = null;
        break;
      case "mouseover":
      case "mouseout":
        Ra = null;
        break;
      case "pointerover":
      case "pointerout":
        eo.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        to.delete(t.pointerId);
    }
  }
  function no(e, t, i, l, c, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: l,
          nativeEvent: d,
          targetContainers: [c],
        }),
        t !== null && ((t = We(t)), t !== null && dg(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        c !== null && t.indexOf(c) === -1 && t.push(c),
        e);
  }
  function e1(e, t, i, l, c) {
    switch (t) {
      case "focusin":
        return (Ea = no(Ea, e, t, i, l, c)), !0;
      case "dragenter":
        return (Ta = no(Ta, e, t, i, l, c)), !0;
      case "mouseover":
        return (Ra = no(Ra, e, t, i, l, c)), !0;
      case "pointerover":
        var d = c.pointerId;
        return eo.set(d, no(eo.get(d) || null, e, t, i, l, c)), !0;
      case "gotpointercapture":
        return (
          (d = c.pointerId), to.set(d, no(to.get(d) || null, e, t, i, l, c)), !0
        );
    }
    return !1;
  }
  function mg(e) {
    var t = ze(e.target);
    if (t !== null) {
      var i = u(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = f(i)), t !== null)) {
            (e.blockedOn = t),
              L(e.priority, function () {
                if (i.tag === 13) {
                  var l = jn();
                  l = ol(l);
                  var c = is(i, l);
                  c !== null && Cn(c, i, l), Zd(i, l);
                }
              });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Iu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = Jd(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var l = new i.constructor(i.type, i);
        (tf = l), i.target.dispatchEvent(l), (tf = null);
      } else return (t = We(i)), t !== null && dg(t), (e.blockedOn = i), !1;
      t.shift();
    }
    return !0;
  }
  function pg(e, t, i) {
    Iu(e) && i.delete(t);
  }
  function t1() {
    (eh = !1),
      Ea !== null && Iu(Ea) && (Ea = null),
      Ta !== null && Iu(Ta) && (Ta = null),
      Ra !== null && Iu(Ra) && (Ra = null),
      eo.forEach(pg),
      to.forEach(pg);
  }
  function Ju(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      eh ||
        ((eh = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, t1)));
  }
  var Wu = null;
  function vg(e) {
    Wu !== e &&
      ((Wu = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Wu === e && (Wu = null);
        for (var t = 0; t < e.length; t += 3) {
          var i = e[t],
            l = e[t + 1],
            c = e[t + 2];
          if (typeof l != "function") {
            if (Wd(l || i) === null) continue;
            break;
          }
          var d = We(i);
          d !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Wf(d, { pending: !0, data: c, method: i.method, action: l }, l, c));
        }
      }));
  }
  function ro(e) {
    function t(E) {
      return Ju(E, e);
    }
    Ea !== null && Ju(Ea, e),
      Ta !== null && Ju(Ta, e),
      Ra !== null && Ju(Ra, e),
      eo.forEach(t),
      to.forEach(t);
    for (var i = 0; i < Oa.length; i++) {
      var l = Oa[i];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Oa.length && ((i = Oa[0]), i.blockedOn === null); )
      mg(i), i.blockedOn === null && Oa.shift();
    if (((i = (e.ownerDocument || e).$$reactFormReplay), i != null))
      for (l = 0; l < i.length; l += 3) {
        var c = i[l],
          d = i[l + 1],
          v = c[ae] || null;
        if (typeof d == "function") v || vg(i);
        else if (v) {
          var w = null;
          if (d && d.hasAttribute("formAction")) {
            if (((c = d), (v = d[ae] || null))) w = v.formAction;
            else if (Wd(c) !== null) continue;
          } else w = v.action;
          typeof w == "function" ? (i[l + 1] = w) : (i.splice(l, 3), (l -= 3)),
            vg(i);
        }
      }
  }
  function th(e) {
    this._internalRoot = e;
  }
  (ec.prototype.render = th.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var i = t.current,
        l = jn();
      cg(i, l, e, t, null, null);
    }),
    (ec.prototype.unmount = th.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          cg(e.current, 2, null, e, null, null), ku(), (t[pe] = null);
        }
      });
  function ec(e) {
    this._internalRoot = e;
  }
  ec.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = A();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < Oa.length && t !== 0 && t < Oa[i].priority; i++);
      Oa.splice(i, 0, e), i === 0 && mg(e);
    }
  };
  var gg = r.version;
  if (gg !== "19.1.0") throw Error(s(527, gg, "19.1.0"));
  ee.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = y(t)),
      (e = e !== null ? m(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var n1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var tc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tc.isDisabled && tc.supportsFiber)
      try {
        (fe = tc.inject(n1)), (Oe = tc);
      } catch {}
  }
  return (
    (io.createRoot = function (e, t) {
      if (!o(e)) throw Error(s(299));
      var i = !1,
        l = "",
        c = Up,
        d = kp,
        v = zp,
        w = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
          t.onCaughtError !== void 0 && (d = t.onCaughtError),
          t.onRecoverableError !== void 0 && (v = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (w = t.unstable_transitionCallbacks)),
        (t = og(e, 1, !1, null, null, i, l, c, d, v, w, null)),
        (e[pe] = t.current),
        Ld(e),
        new th(t)
      );
    }),
    (io.hydrateRoot = function (e, t, i) {
      if (!o(e)) throw Error(s(299));
      var l = !1,
        c = "",
        d = Up,
        v = kp,
        w = zp,
        E = null,
        H = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (l = !0),
          i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (d = i.onUncaughtError),
          i.onCaughtError !== void 0 && (v = i.onCaughtError),
          i.onRecoverableError !== void 0 && (w = i.onRecoverableError),
          i.unstable_transitionCallbacks !== void 0 &&
            (E = i.unstable_transitionCallbacks),
          i.formState !== void 0 && (H = i.formState)),
        (t = og(e, 1, !0, t, i ?? null, l, c, d, v, w, E, H)),
        (t.context = ug(null)),
        (i = t.current),
        (l = jn()),
        (l = ol(l)),
        (c = ca(l)),
        (c.callback = null),
        fa(i, c, l),
        (i = l),
        (t.current.lanes = i),
        ai(t, i),
        br(t),
        (e[pe] = t.current),
        Ld(e),
        new ec(t)
      );
    }),
    (io.version = "19.1.0"),
    io
  );
}
var jg;
function d1() {
  if (jg) return ih.exports;
  jg = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), (ih.exports = f1()), ih.exports;
}
var h1 = d1(),
  so = {},
  Cg;
function y1() {
  if (Cg) return so;
  (Cg = 1),
    Object.defineProperty(so, "__esModule", { value: !0 }),
    (so.parse = f),
    (so.serialize = m);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    r = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    s = /^[\u0020-\u003A\u003D-\u007E]*$/,
    o = Object.prototype.toString,
    u = (() => {
      const b = function () {};
      return (b.prototype = Object.create(null)), b;
    })();
  function f(b, S) {
    const x = new u(),
      N = b.length;
    if (N < 2) return x;
    const C = (S == null ? void 0 : S.decode) || p;
    let U = 0;
    do {
      const Y = b.indexOf("=", U);
      if (Y === -1) break;
      const z = b.indexOf(";", U),
        Q = z === -1 ? N : z;
      if (Y > Q) {
        U = b.lastIndexOf(";", Y - 1) + 1;
        continue;
      }
      const P = h(b, U, Y),
        j = y(b, Y, P),
        ie = b.slice(P, j);
      if (x[ie] === void 0) {
        let ue = h(b, Y + 1, Q),
          te = y(b, Q, ue);
        const be = C(b.slice(ue, te));
        x[ie] = be;
      }
      U = Q + 1;
    } while (U < N);
    return x;
  }
  function h(b, S, x) {
    do {
      const N = b.charCodeAt(S);
      if (N !== 32 && N !== 9) return S;
    } while (++S < x);
    return x;
  }
  function y(b, S, x) {
    for (; S > x; ) {
      const N = b.charCodeAt(--S);
      if (N !== 32 && N !== 9) return S + 1;
    }
    return x;
  }
  function m(b, S, x) {
    const N = (x == null ? void 0 : x.encode) || encodeURIComponent;
    if (!n.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
    const C = N(S);
    if (!r.test(C)) throw new TypeError(`argument val is invalid: ${S}`);
    let U = b + "=" + C;
    if (!x) return U;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge))
        throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      U += "; Max-Age=" + x.maxAge;
    }
    if (x.domain) {
      if (!a.test(x.domain))
        throw new TypeError(`option domain is invalid: ${x.domain}`);
      U += "; Domain=" + x.domain;
    }
    if (x.path) {
      if (!s.test(x.path))
        throw new TypeError(`option path is invalid: ${x.path}`);
      U += "; Path=" + x.path;
    }
    if (x.expires) {
      if (!g(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      U += "; Expires=" + x.expires.toUTCString();
    }
    if (
      (x.httpOnly && (U += "; HttpOnly"),
      x.secure && (U += "; Secure"),
      x.partitioned && (U += "; Partitioned"),
      x.priority)
    )
      switch (
        typeof x.priority == "string" ? x.priority.toLowerCase() : void 0
      ) {
        case "low":
          U += "; Priority=Low";
          break;
        case "medium":
          U += "; Priority=Medium";
          break;
        case "high":
          U += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (
        typeof x.sameSite == "string" ? x.sameSite.toLowerCase() : x.sameSite
      ) {
        case !0:
        case "strict":
          U += "; SameSite=Strict";
          break;
        case "lax":
          U += "; SameSite=Lax";
          break;
        case "none":
          U += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
      }
    return U;
  }
  function p(b) {
    if (b.indexOf("%") === -1) return b;
    try {
      return decodeURIComponent(b);
    } catch {
      return b;
    }
  }
  function g(b) {
    return o.call(b) === "[object Date]";
  }
  return so;
}
y1();
/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var gb = (n) => {
    throw TypeError(n);
  },
  m1 = (n, r, a) => r.has(n) || gb("Cannot " + a),
  uh = (n, r, a) => (
    m1(n, r, "read from private field"), a ? a.call(n) : r.get(n)
  ),
  p1 = (n, r, a) =>
    r.has(n)
      ? gb("Cannot add the same private member more than once")
      : r instanceof WeakSet
      ? r.add(n)
      : r.set(n, a),
  Dg = "popstate";
function v1(n = {}) {
  function r(s, o) {
    let { pathname: u, search: f, hash: h } = s.location;
    return Oo(
      "",
      { pathname: u, search: f, hash: h },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function a(s, o) {
    return typeof o == "string" ? o : Ka(o);
  }
  return b1(r, a, null, n);
}
function Xe(n, r) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(r);
}
function Dt(n, r) {
  if (!n) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function g1() {
  return Math.random().toString(36).substring(2, 10);
}
function Mg(n, r) {
  return { usr: n.state, key: n.key, idx: r };
}
function Oo(n, r, a = null, s) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? Ia(r) : r),
    state: a,
    key: (r && r.key) || s || g1(),
  };
}
function Ka({ pathname: n = "/", search: r = "", hash: a = "" }) {
  return (
    r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r),
    a && a !== "#" && (n += a.charAt(0) === "#" ? a : "#" + a),
    n
  );
}
function Ia(n) {
  let r = {};
  if (n) {
    let a = n.indexOf("#");
    a >= 0 && ((r.hash = n.substring(a)), (n = n.substring(0, a)));
    let s = n.indexOf("?");
    s >= 0 && ((r.search = n.substring(s)), (n = n.substring(0, s))),
      n && (r.pathname = n);
  }
  return r;
}
function b1(n, r, a, s = {}) {
  let { window: o = document.defaultView, v5Compat: u = !1 } = s,
    f = o.history,
    h = "POP",
    y = null,
    m = p();
  m == null && ((m = 0), f.replaceState({ ...f.state, idx: m }, ""));
  function p() {
    return (f.state || { idx: null }).idx;
  }
  function g() {
    h = "POP";
    let C = p(),
      U = C == null ? null : C - m;
    (m = C), y && y({ action: h, location: N.location, delta: U });
  }
  function b(C, U) {
    h = "PUSH";
    let Y = Oo(N.location, C, U);
    m = p() + 1;
    let z = Mg(Y, m),
      Q = N.createHref(Y);
    try {
      f.pushState(z, "", Q);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      o.location.assign(Q);
    }
    u && y && y({ action: h, location: N.location, delta: 1 });
  }
  function S(C, U) {
    h = "REPLACE";
    let Y = Oo(N.location, C, U);
    m = p();
    let z = Mg(Y, m),
      Q = N.createHref(Y);
    f.replaceState(z, "", Q),
      u && y && y({ action: h, location: N.location, delta: 0 });
  }
  function x(C) {
    return bb(C);
  }
  let N = {
    get action() {
      return h;
    },
    get location() {
      return n(o, f);
    },
    listen(C) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Dg, g),
        (y = C),
        () => {
          o.removeEventListener(Dg, g), (y = null);
        }
      );
    },
    createHref(C) {
      return r(o, C);
    },
    createURL: x,
    encodeLocation(C) {
      let U = x(C);
      return { pathname: U.pathname, search: U.search, hash: U.hash };
    },
    push: b,
    replace: S,
    go(C) {
      return f.go(C);
    },
  };
  return N;
}
function bb(n, r = !1) {
  let a = "http://localhost";
  typeof window < "u" &&
    (a =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Xe(a, "No window.location.(origin|href) available to create URL");
  let s = typeof n == "string" ? n : Ka(n);
  return (
    (s = s.replace(/ $/, "%20")),
    !r && s.startsWith("//") && (s = a + s),
    new URL(s, a)
  );
}
var po,
  Ng = class {
    constructor(n) {
      if ((p1(this, po, new Map()), n)) for (let [r, a] of n) this.set(r, a);
    }
    get(n) {
      if (uh(this, po).has(n)) return uh(this, po).get(n);
      if (n.defaultValue !== void 0) return n.defaultValue;
      throw new Error("No value found for context");
    }
    set(n, r) {
      uh(this, po).set(n, r);
    }
  };
po = new WeakMap();
var _1 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function w1(n) {
  return _1.has(n);
}
var S1 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children",
]);
function x1(n) {
  return S1.has(n);
}
function E1(n) {
  return n.index === !0;
}
function wc(n, r, a = [], s = {}) {
  return n.map((o, u) => {
    let f = [...a, String(u)],
      h = typeof o.id == "string" ? o.id : f.join("-");
    if (
      (Xe(
        o.index !== !0 || !o.children,
        "Cannot specify children on an index route"
      ),
      Xe(
        !s[h],
        `Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`
      ),
      E1(o))
    ) {
      let y = { ...o, ...r(o), id: h };
      return (s[h] = y), y;
    } else {
      let y = { ...o, ...r(o), id: h, children: void 0 };
      return (
        (s[h] = y), o.children && (y.children = wc(o.children, r, f, s)), y
      );
    }
  });
}
function Na(n, r, a = "/") {
  return mc(n, r, a, !1);
}
function mc(n, r, a, s) {
  let o = typeof r == "string" ? Ia(r) : r,
    u = Kn(o.pathname || "/", a);
  if (u == null) return null;
  let f = _b(n);
  R1(f);
  let h = null;
  for (let y = 0; h == null && y < f.length; ++y) {
    let m = L1(u);
    h = k1(f[y], m, s);
  }
  return h;
}
function T1(n, r) {
  let { route: a, pathname: s, params: o } = n;
  return { id: a.id, pathname: s, params: o, data: r[a.id], handle: a.handle };
}
function _b(n, r = [], a = [], s = "") {
  let o = (u, f, h) => {
    let y = {
      relativePath: h === void 0 ? u.path || "" : h,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: f,
      route: u,
    };
    y.relativePath.startsWith("/") &&
      (Xe(
        y.relativePath.startsWith(s),
        `Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (y.relativePath = y.relativePath.slice(s.length)));
    let m = Tr([s, y.relativePath]),
      p = a.concat(y);
    u.children &&
      u.children.length > 0 &&
      (Xe(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      _b(u.children, r, p, m)),
      !(u.path == null && !u.index) &&
        r.push({ path: m, score: N1(m, u.index), routesMeta: p });
  };
  return (
    n.forEach((u, f) => {
      var h;
      if (u.path === "" || !((h = u.path) != null && h.includes("?"))) o(u, f);
      else for (let y of wb(u.path)) o(u, f, y);
    }),
    r
  );
}
function wb(n) {
  let r = n.split("/");
  if (r.length === 0) return [];
  let [a, ...s] = r,
    o = a.endsWith("?"),
    u = a.replace(/\?$/, "");
  if (s.length === 0) return o ? [u, ""] : [u];
  let f = wb(s.join("/")),
    h = [];
  return (
    h.push(...f.map((y) => (y === "" ? u : [u, y].join("/")))),
    o && h.push(...f),
    h.map((y) => (n.startsWith("/") && y === "" ? "/" : y))
  );
}
function R1(n) {
  n.sort((r, a) =>
    r.score !== a.score
      ? a.score - r.score
      : U1(
          r.routesMeta.map((s) => s.childrenIndex),
          a.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
var O1 = /^:[\w-]+$/,
  A1 = 3,
  j1 = 2,
  C1 = 1,
  D1 = 10,
  M1 = -2,
  Ug = (n) => n === "*";
function N1(n, r) {
  let a = n.split("/"),
    s = a.length;
  return (
    a.some(Ug) && (s += M1),
    r && (s += j1),
    a
      .filter((o) => !Ug(o))
      .reduce((o, u) => o + (O1.test(u) ? A1 : u === "" ? C1 : D1), s)
  );
}
function U1(n, r) {
  return n.length === r.length && n.slice(0, -1).every((s, o) => s === r[o])
    ? n[n.length - 1] - r[r.length - 1]
    : 0;
}
function k1(n, r, a = !1) {
  let { routesMeta: s } = n,
    o = {},
    u = "/",
    f = [];
  for (let h = 0; h < s.length; ++h) {
    let y = s[h],
      m = h === s.length - 1,
      p = u === "/" ? r : r.slice(u.length) || "/",
      g = Sc(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: m },
        p
      ),
      b = y.route;
    if (
      (!g &&
        m &&
        a &&
        !s[s.length - 1].route.index &&
        (g = Sc(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          p
        )),
      !g)
    )
      return null;
    Object.assign(o, g.params),
      f.push({
        params: o,
        pathname: Tr([u, g.pathname]),
        pathnameBase: H1(Tr([u, g.pathnameBase])),
        route: b,
      }),
      g.pathnameBase !== "/" && (u = Tr([u, g.pathnameBase]));
  }
  return f;
}
function Sc(n, r) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [a, s] = z1(n.path, n.caseSensitive, n.end),
    o = r.match(a);
  if (!o) return null;
  let u = o[0],
    f = u.replace(/(.)\/+$/, "$1"),
    h = o.slice(1);
  return {
    params: s.reduce((m, { paramName: p, isOptional: g }, b) => {
      if (p === "*") {
        let x = h[b] || "";
        f = u.slice(0, u.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const S = h[b];
      return (
        g && !S ? (m[p] = void 0) : (m[p] = (S || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: u,
    pathnameBase: f,
    pattern: n,
  };
}
function z1(n, r = !1, a = !0) {
  Dt(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let s = [],
    o =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, h, y) => (
            s.push({ paramName: h, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (o += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (o += "\\/*$")
      : n !== "" && n !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, r ? void 0 : "i"), s]
  );
}
function L1(n) {
  try {
    return n
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      Dt(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      n
    );
  }
}
function Kn(n, r) {
  if (r === "/") return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase())) return null;
  let a = r.endsWith("/") ? r.length - 1 : r.length,
    s = n.charAt(a);
  return s && s !== "/" ? null : n.slice(a) || "/";
}
function B1(n, r = "/") {
  let {
    pathname: a,
    search: s = "",
    hash: o = "",
  } = typeof n == "string" ? Ia(n) : n;
  return {
    pathname: a ? (a.startsWith("/") ? a : q1(a, r)) : r,
    search: P1(s),
    hash: $1(o),
  };
}
function q1(n, r) {
  let a = r.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((o) => {
      o === ".." ? a.length > 1 && a.pop() : o !== "." && a.push(o);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function ch(n, r, a, s) {
  return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Sb(n) {
  return n.filter(
    (r, a) => a === 0 || (r.route.path && r.route.path.length > 0)
  );
}
function fy(n) {
  let r = Sb(n);
  return r.map((a, s) => (s === r.length - 1 ? a.pathname : a.pathnameBase));
}
function dy(n, r, a, s = !1) {
  let o;
  typeof n == "string"
    ? (o = Ia(n))
    : ((o = { ...n }),
      Xe(
        !o.pathname || !o.pathname.includes("?"),
        ch("?", "pathname", "search", o)
      ),
      Xe(
        !o.pathname || !o.pathname.includes("#"),
        ch("#", "pathname", "hash", o)
      ),
      Xe(!o.search || !o.search.includes("#"), ch("#", "search", "hash", o)));
  let u = n === "" || o.pathname === "",
    f = u ? "/" : o.pathname,
    h;
  if (f == null) h = a;
  else {
    let g = r.length - 1;
    if (!s && f.startsWith("..")) {
      let b = f.split("/");
      for (; b[0] === ".."; ) b.shift(), (g -= 1);
      o.pathname = b.join("/");
    }
    h = g >= 0 ? r[g] : "/";
  }
  let y = B1(o, h),
    m = f && f !== "/" && f.endsWith("/"),
    p = (u || f === ".") && a.endsWith("/");
  return !y.pathname.endsWith("/") && (m || p) && (y.pathname += "/"), y;
}
var Tr = (n) => n.join("/").replace(/\/\/+/g, "/"),
  H1 = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  P1 = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  $1 = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n),
  xc = class {
    constructor(n, r, a, s = !1) {
      (this.status = n),
        (this.statusText = r || ""),
        (this.internal = s),
        a instanceof Error
          ? ((this.data = a.toString()), (this.error = a))
          : (this.data = a);
    }
  };
function Ao(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
var xb = ["POST", "PUT", "PATCH", "DELETE"],
  V1 = new Set(xb),
  F1 = ["GET", ...xb],
  G1 = new Set(F1),
  Q1 = new Set([301, 302, 303, 307, 308]),
  Y1 = new Set([307, 308]),
  fh = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  K1 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  lo = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  hy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  X1 = (n) => ({ hasErrorBoundary: !!n.hasErrorBoundary }),
  Eb = "remix-router-transitions",
  Tb = Symbol("ResetLoaderData");
function Z1(n) {
  const r = n.window ? n.window : typeof window < "u" ? window : void 0,
    a =
      typeof r < "u" &&
      typeof r.document < "u" &&
      typeof r.document.createElement < "u";
  Xe(
    n.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let s = n.hydrationRouteProperties || [],
    o = n.mapRouteProperties || X1,
    u = {},
    f = wc(n.routes, o, void 0, u),
    h,
    y = n.basename || "/",
    m = n.dataStrategy || tx,
    p = { unstable_middleware: !1, ...n.future },
    g = null,
    b = new Set(),
    S = null,
    x = null,
    N = null,
    C = n.hydrationData != null,
    U = Na(f, n.history.location, y),
    Y = !1,
    z = null,
    Q;
  if (U == null && !n.patchRoutesOnNavigation) {
    let A = Yn(404, { pathname: n.history.location.pathname }),
      { matches: L, route: G } = Qg(f);
    (Q = !0), (U = L), (z = { [G.id]: A });
  } else if (
    (U &&
      !n.hydrationData &&
      ii(U, f, n.history.location.pathname).active &&
      (U = null),
    U)
  )
    if (U.some((A) => A.route.lazy)) Q = !1;
    else if (!U.some((A) => A.route.loader)) Q = !0;
    else {
      let A = n.hydrationData ? n.hydrationData.loaderData : null,
        L = n.hydrationData ? n.hydrationData.errors : null;
      if (L) {
        let G = U.findIndex((W) => L[W.route.id] !== void 0);
        Q = U.slice(0, G + 1).every((W) => !Dh(W.route, A, L));
      } else Q = U.every((G) => !Dh(G.route, A, L));
    }
  else {
    (Q = !1), (U = []);
    let A = ii(null, f, n.history.location.pathname);
    A.active && A.matches && ((Y = !0), (U = A.matches));
  }
  let P,
    j = {
      historyAction: n.history.action,
      location: n.history.location,
      matches: U,
      initialized: Q,
      navigation: fh,
      restoreScrollPosition: n.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (n.hydrationData && n.hydrationData.loaderData) || {},
      actionData: (n.hydrationData && n.hydrationData.actionData) || null,
      errors: (n.hydrationData && n.hydrationData.errors) || z,
      fetchers: new Map(),
      blockers: new Map(),
    },
    ie = "POP",
    ue = !1,
    te,
    be = !1,
    Le = new Map(),
    he = null,
    Ne = !1,
    _e = !1,
    Re = new Set(),
    q = new Map(),
    ee = 0,
    ce = -1,
    De = new Map(),
    T = new Set(),
    Z = new Map(),
    se = new Map(),
    ne = new Set(),
    ve = new Map(),
    He,
    Te = null;
  function Mt() {
    if (
      ((g = n.history.listen(({ action: A, location: L, delta: G }) => {
        if (He) {
          He(), (He = void 0);
          return;
        }
        Dt(
          ve.size === 0 || G != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let W = ri({
          currentLocation: j.location,
          nextLocation: L,
          historyAction: A,
        });
        if (W && G != null) {
          let ae = new Promise((pe) => {
            He = pe;
          });
          n.history.go(G * -1),
            kn(W, {
              state: "blocked",
              location: L,
              proceed() {
                kn(W, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: L,
                }),
                  ae.then(() => n.history.go(G));
              },
              reset() {
                let pe = new Map(j.blockers);
                pe.set(W, lo), gt({ blockers: pe });
              },
            });
          return;
        }
        return fn(A, L);
      })),
      a)
    ) {
      dx(r, Le);
      let A = () => hx(r, Le);
      r.addEventListener("pagehide", A),
        (he = () => r.removeEventListener("pagehide", A));
    }
    return j.initialized || fn("POP", j.location, { initialHydration: !0 }), P;
  }
  function it() {
    g && g(),
      he && he(),
      b.clear(),
      te && te.abort(),
      j.fetchers.forEach((A, L) => rt(L)),
      j.blockers.forEach((A, L) => yr(L));
  }
  function cn(A) {
    return b.add(A), () => b.delete(A);
  }
  function gt(A, L = {}) {
    j = { ...j, ...A };
    let G = [],
      W = [];
    j.fetchers.forEach((ae, pe) => {
      ae.state === "idle" && (ne.has(pe) ? G.push(pe) : W.push(pe));
    }),
      ne.forEach((ae) => {
        !j.fetchers.has(ae) && !q.has(ae) && G.push(ae);
      }),
      [...b].forEach((ae) =>
        ae(j, {
          deletedFetchers: G,
          viewTransitionOpts: L.viewTransitionOpts,
          flushSync: L.flushSync === !0,
        })
      ),
      G.forEach((ae) => rt(ae)),
      W.forEach((ae) => j.fetchers.delete(ae));
  }
  function xn(A, L, { flushSync: G } = {}) {
    var Ee, Ue;
    let W =
        j.actionData != null &&
        j.navigation.formMethod != null &&
        Mn(j.navigation.formMethod) &&
        j.navigation.state === "loading" &&
        ((Ee = A.state) == null ? void 0 : Ee._isRedirect) !== !0,
      ae;
    L.actionData
      ? Object.keys(L.actionData).length > 0
        ? (ae = L.actionData)
        : (ae = null)
      : W
      ? (ae = j.actionData)
      : (ae = null);
    let pe = L.loaderData
        ? Fg(j.loaderData, L.loaderData, L.matches || [], L.errors)
        : j.loaderData,
      je = j.blockers;
    je.size > 0 && ((je = new Map(je)), je.forEach((we, ze) => je.set(ze, lo)));
    let ye =
      ue === !0 ||
      (j.navigation.formMethod != null &&
        Mn(j.navigation.formMethod) &&
        ((Ue = A.state) == null ? void 0 : Ue._isRedirect) !== !0);
    h && ((f = h), (h = void 0)),
      Ne ||
        ie === "POP" ||
        (ie === "PUSH"
          ? n.history.push(A, A.state)
          : ie === "REPLACE" && n.history.replace(A, A.state));
    let xe;
    if (ie === "POP") {
      let we = Le.get(j.location.pathname);
      we && we.has(A.pathname)
        ? (xe = { currentLocation: j.location, nextLocation: A })
        : Le.has(A.pathname) &&
          (xe = { currentLocation: A, nextLocation: j.location });
    } else if (be) {
      let we = Le.get(j.location.pathname);
      we
        ? we.add(A.pathname)
        : ((we = new Set([A.pathname])), Le.set(j.location.pathname, we)),
        (xe = { currentLocation: j.location, nextLocation: A });
    }
    gt(
      {
        ...L,
        actionData: ae,
        loaderData: pe,
        historyAction: ie,
        location: A,
        initialized: !0,
        navigation: fh,
        revalidation: "idle",
        restoreScrollPosition: Yo(A, L.matches || j.matches),
        preventScrollReset: ye,
        blockers: je,
      },
      { viewTransitionOpts: xe, flushSync: G === !0 }
    ),
      (ie = "POP"),
      (ue = !1),
      (be = !1),
      (Ne = !1),
      (_e = !1),
      Te == null || Te.resolve(),
      (Te = null);
  }
  async function Ar(A, L) {
    if (typeof A == "number") {
      n.history.go(A);
      return;
    }
    let G = Ch(
        j.location,
        j.matches,
        y,
        A,
        L == null ? void 0 : L.fromRouteId,
        L == null ? void 0 : L.relative
      ),
      { path: W, submission: ae, error: pe } = kg(!1, G, L),
      je = j.location,
      ye = Oo(j.location, W, L && L.state);
    ye = { ...ye, ...n.history.encodeLocation(ye) };
    let xe = L && L.replace != null ? L.replace : void 0,
      Ee = "PUSH";
    xe === !0
      ? (Ee = "REPLACE")
      : xe === !1 ||
        (ae != null &&
          Mn(ae.formMethod) &&
          ae.formAction === j.location.pathname + j.location.search &&
          (Ee = "REPLACE"));
    let Ue =
        L && "preventScrollReset" in L ? L.preventScrollReset === !0 : void 0,
      we = (L && L.flushSync) === !0,
      ze = ri({ currentLocation: je, nextLocation: ye, historyAction: Ee });
    if (ze) {
      kn(ze, {
        state: "blocked",
        location: ye,
        proceed() {
          kn(ze, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ye,
          }),
            Ar(A, L);
        },
        reset() {
          let We = new Map(j.blockers);
          We.set(ze, lo), gt({ blockers: We });
        },
      });
      return;
    }
    await fn(Ee, ye, {
      submission: ae,
      pendingError: pe,
      preventScrollReset: Ue,
      replace: L && L.replace,
      enableViewTransition: L && L.viewTransition,
      flushSync: we,
    });
  }
  function ti() {
    Te || (Te = yx()), re(), gt({ revalidation: "loading" });
    let A = Te.promise;
    return j.navigation.state === "submitting"
      ? A
      : j.navigation.state === "idle"
      ? (fn(j.historyAction, j.location, {
          startUninterruptedRevalidation: !0,
        }),
        A)
      : (fn(ie || j.historyAction, j.navigation.location, {
          overrideNavigation: j.navigation,
          enableViewTransition: be === !0,
        }),
        A);
  }
  async function fn(A, L, G) {
    te && te.abort(),
      (te = null),
      (ie = A),
      (Ne = (G && G.startUninterruptedRevalidation) === !0),
      ai(j.location, j.matches),
      (ue = (G && G.preventScrollReset) === !0),
      (be = (G && G.enableViewTransition) === !0);
    let W = h || f,
      ae = G && G.overrideNavigation,
      pe =
        G != null &&
        G.initialHydration &&
        j.matches &&
        j.matches.length > 0 &&
        !Y
          ? j.matches
          : Na(W, L, y),
      je = (G && G.flushSync) === !0;
    if (
      pe &&
      j.initialized &&
      !_e &&
      lx(j.location, L) &&
      !(G && G.submission && Mn(G.submission.formMethod))
    ) {
      xn(L, { matches: pe }, { flushSync: je });
      return;
    }
    let ye = ii(pe, W, L.pathname);
    if ((ye.active && ye.matches && (pe = ye.matches), !pe)) {
      let { error: bt, notFoundMatches: et, route: Ze } = Xi(L.pathname);
      xn(
        L,
        { matches: et, loaderData: {}, errors: { [Ze.id]: bt } },
        { flushSync: je }
      );
      return;
    }
    te = new AbortController();
    let xe = Hs(n.history, L, te.signal, G && G.submission),
      Ee = new Ng(
        n.unstable_getContext ? await n.unstable_getContext() : void 0
      ),
      Ue;
    if (G && G.pendingError)
      Ue = [Oi(pe).route.id, { type: "error", error: G.pendingError }];
    else if (G && G.submission && Mn(G.submission.formMethod)) {
      let bt = await Yi(
        xe,
        L,
        G.submission,
        pe,
        Ee,
        ye.active,
        G && G.initialHydration === !0,
        { replace: G.replace, flushSync: je }
      );
      if (bt.shortCircuited) return;
      if (bt.pendingActionResult) {
        let [et, Ze] = bt.pendingActionResult;
        if (Dn(Ze) && Ao(Ze.error) && Ze.error.status === 404) {
          (te = null),
            xn(L, {
              matches: bt.matches,
              loaderData: {},
              errors: { [et]: Ze.error },
            });
          return;
        }
      }
      (pe = bt.matches || pe),
        (Ue = bt.pendingActionResult),
        (ae = dh(L, G.submission)),
        (je = !1),
        (ye.active = !1),
        (xe = Hs(n.history, xe.url, xe.signal));
    }
    let {
      shortCircuited: we,
      matches: ze,
      loaderData: We,
      errors: yt,
    } = await ll(
      xe,
      L,
      pe,
      Ee,
      ye.active,
      ae,
      G && G.submission,
      G && G.fetcherSubmission,
      G && G.replace,
      G && G.initialHydration === !0,
      je,
      Ue
    );
    we ||
      ((te = null),
      xn(L, { matches: ze || pe, ...Gg(Ue), loaderData: We, errors: yt }));
  }
  async function Yi(A, L, G, W, ae, pe, je, ye = {}) {
    re();
    let xe = cx(L, G);
    if ((gt({ navigation: xe }, { flushSync: ye.flushSync === !0 }), pe)) {
      let we = await si(W, L.pathname, A.signal);
      if (we.type === "aborted") return { shortCircuited: !0 };
      if (we.type === "error") {
        let ze = Oi(we.partialMatches).route.id;
        return {
          matches: we.partialMatches,
          pendingActionResult: [ze, { type: "error", error: we.error }],
        };
      } else if (we.matches) W = we.matches;
      else {
        let { notFoundMatches: ze, error: We, route: yt } = Xi(L.pathname);
        return {
          matches: ze,
          pendingActionResult: [yt.id, { type: "error", error: We }],
        };
      }
    }
    let Ee,
      Ue = vo(W, L);
    if (!Ue.route.action && !Ue.route.lazy)
      Ee = {
        type: "error",
        error: Yn(405, {
          method: A.method,
          pathname: L.pathname,
          routeId: Ue.route.id,
        }),
      };
    else {
      let we = $s(o, u, A, W, Ue, je ? [] : s, ae),
        ze = await oe(A, we, ae, null);
      if (((Ee = ze[Ue.route.id]), !Ee)) {
        for (let We of W)
          if (ze[We.route.id]) {
            Ee = ze[We.route.id];
            break;
          }
      }
      if (A.signal.aborted) return { shortCircuited: !0 };
    }
    if (ji(Ee)) {
      let we;
      return (
        ye && ye.replace != null
          ? (we = ye.replace)
          : (we =
              Pg(Ee.response.headers.get("Location"), new URL(A.url), y) ===
              j.location.pathname + j.location.search),
        await K(A, Ee, !0, { submission: G, replace: we }),
        { shortCircuited: !0 }
      );
    }
    if (Dn(Ee)) {
      let we = Oi(W, Ue.route.id);
      return (
        (ye && ye.replace) !== !0 && (ie = "PUSH"),
        { matches: W, pendingActionResult: [we.route.id, Ee, Ue.route.id] }
      );
    }
    return { matches: W, pendingActionResult: [Ue.route.id, Ee] };
  }
  async function ll(A, L, G, W, ae, pe, je, ye, xe, Ee, Ue, we) {
    let ze = pe || dh(L, je),
      We = je || ye || Kg(ze),
      yt = !Ne && !Ee;
    if (ae) {
      if (yt) {
        let Xt = en(we);
        gt(
          { navigation: ze, ...(Xt !== void 0 ? { actionData: Xt } : {}) },
          { flushSync: Ue }
        );
      }
      let Fe = await si(G, L.pathname, A.signal);
      if (Fe.type === "aborted") return { shortCircuited: !0 };
      if (Fe.type === "error") {
        let Xt = Oi(Fe.partialMatches).route.id;
        return {
          matches: Fe.partialMatches,
          loaderData: {},
          errors: { [Xt]: Fe.error },
        };
      } else if (Fe.matches) G = Fe.matches;
      else {
        let { error: Xt, notFoundMatches: Wn, route: er } = Xi(L.pathname);
        return { matches: Wn, loaderData: {}, errors: { [er.id]: Xt } };
      }
    }
    let bt = h || f,
      { dsMatches: et, revalidatingFetchers: Ze } = zg(
        A,
        W,
        o,
        u,
        n.history,
        j,
        G,
        We,
        L,
        Ee ? [] : s,
        Ee === !0,
        _e,
        Re,
        ne,
        Z,
        T,
        bt,
        y,
        n.patchRoutesOnNavigation != null,
        we
      );
    if (
      ((ce = ++ee),
      !n.dataStrategy && !et.some((Fe) => Fe.shouldLoad) && Ze.length === 0)
    ) {
      let Fe = Zn();
      return (
        xn(
          L,
          {
            matches: G,
            loaderData: {},
            errors: we && Dn(we[1]) ? { [we[0]]: we[1].error } : null,
            ...Gg(we),
            ...(Fe ? { fetchers: new Map(j.fetchers) } : {}),
          },
          { flushSync: Ue }
        ),
        { shortCircuited: !0 }
      );
    }
    if (yt) {
      let Fe = {};
      if (!ae) {
        Fe.navigation = ze;
        let Xt = en(we);
        Xt !== void 0 && (Fe.actionData = Xt);
      }
      Ze.length > 0 && (Fe.fetchers = Go(Ze)), gt(Fe, { flushSync: Ue });
    }
    Ze.forEach((Fe) => {
      Nt(Fe.key), Fe.controller && q.set(Fe.key, Fe.controller);
    });
    let ra = () => Ze.forEach((Fe) => Nt(Fe.key));
    te && te.signal.addEventListener("abort", ra);
    let { loaderResults: tn, fetcherResults: zn } = await le(et, Ze, A, W);
    if (A.signal.aborted) return { shortCircuited: !0 };
    te && te.signal.removeEventListener("abort", ra),
      Ze.forEach((Fe) => q.delete(Fe.key));
    let dn = rc(tn);
    if (dn)
      return await K(A, dn.result, !0, { replace: xe }), { shortCircuited: !0 };
    if (((dn = rc(zn)), dn))
      return (
        T.add(dn.key),
        await K(A, dn.result, !0, { replace: xe }),
        { shortCircuited: !0 }
      );
    let { loaderData: aa, errors: ia } = Vg(j, G, tn, we, Ze, zn);
    Ee && j.errors && (ia = { ...j.errors, ...ia });
    let cl = Zn(),
      Ln = In(ce),
      jr = cl || Ln || Ze.length > 0;
    return {
      matches: G,
      loaderData: aa,
      errors: ia,
      ...(jr ? { fetchers: new Map(j.fetchers) } : {}),
    };
  }
  function en(A) {
    if (A && !Dn(A[1])) return { [A[0]]: A[1].data };
    if (j.actionData)
      return Object.keys(j.actionData).length === 0 ? null : j.actionData;
  }
  function Go(A) {
    return (
      A.forEach((L) => {
        let G = j.fetchers.get(L.key),
          W = oo(void 0, G ? G.data : void 0);
        j.fetchers.set(L.key, W);
      }),
      new Map(j.fetchers)
    );
  }
  async function ni(A, L, G, W) {
    Nt(A);
    let ae = (W && W.flushSync) === !0,
      pe = h || f,
      je = Ch(j.location, j.matches, y, G, L, W == null ? void 0 : W.relative),
      ye = Na(pe, je, y),
      xe = ii(ye, pe, je);
    if ((xe.active && xe.matches && (ye = xe.matches), !ye)) {
      Oe(A, L, Yn(404, { pathname: je }), { flushSync: ae });
      return;
    }
    let { path: Ee, submission: Ue, error: we } = kg(!0, je, W);
    if (we) {
      Oe(A, L, we, { flushSync: ae });
      return;
    }
    let ze = vo(ye, Ee),
      We = new Ng(
        n.unstable_getContext ? await n.unstable_getContext() : void 0
      ),
      yt = (W && W.preventScrollReset) === !0;
    if (Ue && Mn(Ue.formMethod)) {
      await O(A, L, Ee, ze, ye, We, xe.active, ae, yt, Ue);
      return;
    }
    Z.set(A, { routeId: L, path: Ee }),
      await $(A, L, Ee, ze, ye, We, xe.active, ae, yt, Ue);
  }
  async function O(A, L, G, W, ae, pe, je, ye, xe, Ee) {
    re(), Z.delete(A);
    function Ue(pt) {
      if (!pt.route.action && !pt.route.lazy) {
        let sa = Yn(405, { method: Ee.formMethod, pathname: G, routeId: L });
        return Oe(A, L, sa, { flushSync: ye }), !0;
      }
      return !1;
    }
    if (!je && Ue(W)) return;
    let we = j.fetchers.get(A);
    fe(A, fx(Ee, we), { flushSync: ye });
    let ze = new AbortController(),
      We = Hs(n.history, G, ze.signal, Ee);
    if (je) {
      let pt = await si(ae, G, We.signal, A);
      if (pt.type === "aborted") return;
      if (pt.type === "error") {
        Oe(A, L, pt.error, { flushSync: ye });
        return;
      } else if (pt.matches) {
        if (((ae = pt.matches), (W = vo(ae, G)), Ue(W))) return;
      } else {
        Oe(A, L, Yn(404, { pathname: G }), { flushSync: ye });
        return;
      }
    }
    q.set(A, ze);
    let yt = ee,
      bt = $s(o, u, We, ae, W, s, pe),
      Ze = (await oe(We, bt, pe, A))[W.route.id];
    if (We.signal.aborted) {
      q.get(A) === ze && q.delete(A);
      return;
    }
    if (ne.has(A)) {
      if (ji(Ze) || Dn(Ze)) {
        fe(A, ja(void 0));
        return;
      }
    } else {
      if (ji(Ze))
        if ((q.delete(A), ce > yt)) {
          fe(A, ja(void 0));
          return;
        } else
          return (
            T.add(A),
            fe(A, oo(Ee)),
            K(We, Ze, !1, { fetcherSubmission: Ee, preventScrollReset: xe })
          );
      if (Dn(Ze)) {
        Oe(A, L, Ze.error);
        return;
      }
    }
    let ra = j.navigation.location || j.location,
      tn = Hs(n.history, ra, ze.signal),
      zn = h || f,
      dn =
        j.navigation.state !== "idle"
          ? Na(zn, j.navigation.location, y)
          : j.matches;
    Xe(dn, "Didn't find any matches after fetcher action");
    let aa = ++ee;
    De.set(A, aa);
    let ia = oo(Ee, Ze.data);
    j.fetchers.set(A, ia);
    let { dsMatches: cl, revalidatingFetchers: Ln } = zg(
      tn,
      pe,
      o,
      u,
      n.history,
      j,
      dn,
      Ee,
      ra,
      s,
      !1,
      _e,
      Re,
      ne,
      Z,
      T,
      zn,
      y,
      n.patchRoutesOnNavigation != null,
      [W.route.id, Ze]
    );
    Ln.filter((pt) => pt.key !== A).forEach((pt) => {
      let sa = pt.key,
        fl = j.fetchers.get(sa),
        hn = oo(void 0, fl ? fl.data : void 0);
      j.fetchers.set(sa, hn), Nt(sa), pt.controller && q.set(sa, pt.controller);
    }),
      gt({ fetchers: new Map(j.fetchers) });
    let jr = () => Ln.forEach((pt) => Nt(pt.key));
    ze.signal.addEventListener("abort", jr);
    let { loaderResults: Fe, fetcherResults: Xt } = await le(cl, Ln, tn, pe);
    if (ze.signal.aborted) return;
    if (
      (ze.signal.removeEventListener("abort", jr),
      De.delete(A),
      q.delete(A),
      Ln.forEach((pt) => q.delete(pt.key)),
      j.fetchers.has(A))
    ) {
      let pt = ja(Ze.data);
      j.fetchers.set(A, pt);
    }
    let Wn = rc(Fe);
    if (Wn) return K(tn, Wn.result, !1, { preventScrollReset: xe });
    if (((Wn = rc(Xt)), Wn))
      return T.add(Wn.key), K(tn, Wn.result, !1, { preventScrollReset: xe });
    let { loaderData: er, errors: li } = Vg(j, dn, Fe, void 0, Ln, Xt);
    In(aa),
      j.navigation.state === "loading" && aa > ce
        ? (Xe(ie, "Expected pending action"),
          te && te.abort(),
          xn(j.navigation.location, {
            matches: dn,
            loaderData: er,
            errors: li,
            fetchers: new Map(j.fetchers),
          }))
        : (gt({
            errors: li,
            loaderData: Fg(j.loaderData, er, dn, li),
            fetchers: new Map(j.fetchers),
          }),
          (_e = !1));
  }
  async function $(A, L, G, W, ae, pe, je, ye, xe, Ee) {
    let Ue = j.fetchers.get(A);
    fe(A, oo(Ee, Ue ? Ue.data : void 0), { flushSync: ye });
    let we = new AbortController(),
      ze = Hs(n.history, G, we.signal);
    if (je) {
      let Ze = await si(ae, G, ze.signal, A);
      if (Ze.type === "aborted") return;
      if (Ze.type === "error") {
        Oe(A, L, Ze.error, { flushSync: ye });
        return;
      } else if (Ze.matches) (ae = Ze.matches), (W = vo(ae, G));
      else {
        Oe(A, L, Yn(404, { pathname: G }), { flushSync: ye });
        return;
      }
    }
    q.set(A, we);
    let We = ee,
      yt = $s(o, u, ze, ae, W, s, pe),
      et = (await oe(ze, yt, pe, A))[W.route.id];
    if ((q.get(A) === we && q.delete(A), !ze.signal.aborted)) {
      if (ne.has(A)) {
        fe(A, ja(void 0));
        return;
      }
      if (ji(et))
        if (ce > We) {
          fe(A, ja(void 0));
          return;
        } else {
          T.add(A), await K(ze, et, !1, { preventScrollReset: xe });
          return;
        }
      if (Dn(et)) {
        Oe(A, L, et.error);
        return;
      }
      fe(A, ja(et.data));
    }
  }
  async function K(
    A,
    L,
    G,
    {
      submission: W,
      fetcherSubmission: ae,
      preventScrollReset: pe,
      replace: je,
    } = {}
  ) {
    L.response.headers.has("X-Remix-Revalidate") && (_e = !0);
    let ye = L.response.headers.get("Location");
    Xe(ye, "Expected a Location header on the redirect Response"),
      (ye = Pg(ye, new URL(A.url), y));
    let xe = Oo(j.location, ye, { _isRedirect: !0 });
    if (a) {
      let yt = !1;
      if (L.response.headers.has("X-Remix-Reload-Document")) yt = !0;
      else if (hy.test(ye)) {
        const bt = bb(ye, !0);
        yt = bt.origin !== r.location.origin || Kn(bt.pathname, y) == null;
      }
      if (yt) {
        je ? r.location.replace(ye) : r.location.assign(ye);
        return;
      }
    }
    te = null;
    let Ee =
        je === !0 || L.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: Ue, formAction: we, formEncType: ze } = j.navigation;
    !W && !ae && Ue && we && ze && (W = Kg(j.navigation));
    let We = W || ae;
    if (Y1.has(L.response.status) && We && Mn(We.formMethod))
      await fn(Ee, xe, {
        submission: { ...We, formAction: ye },
        preventScrollReset: pe || ue,
        enableViewTransition: G ? be : void 0,
      });
    else {
      let yt = dh(xe, W);
      await fn(Ee, xe, {
        overrideNavigation: yt,
        fetcherSubmission: ae,
        preventScrollReset: pe || ue,
        enableViewTransition: G ? be : void 0,
      });
    }
  }
  async function oe(A, L, G, W) {
    let ae,
      pe = {};
    try {
      ae = await nx(m, A, L, W, G, !1);
    } catch (je) {
      return (
        L.filter((ye) => ye.shouldLoad).forEach((ye) => {
          pe[ye.route.id] = { type: "error", error: je };
        }),
        pe
      );
    }
    if (A.signal.aborted) return pe;
    for (let [je, ye] of Object.entries(ae))
      if (ox(ye)) {
        let xe = ye.result;
        pe[je] = { type: "redirect", response: ix(xe, A, je, L, y) };
      } else pe[je] = await ax(ye);
    return pe;
  }
  async function le(A, L, G, W) {
    let ae = oe(G, A, W, null),
      pe = Promise.all(
        L.map(async (xe) => {
          if (xe.matches && xe.match && xe.request && xe.controller) {
            let Ue = (await oe(xe.request, xe.matches, W, xe.key))[
              xe.match.route.id
            ];
            return { [xe.key]: Ue };
          } else
            return Promise.resolve({
              [xe.key]: {
                type: "error",
                error: Yn(404, { pathname: xe.path }),
              },
            });
        })
      ),
      je = await ae,
      ye = (await pe).reduce((xe, Ee) => Object.assign(xe, Ee), {});
    return { loaderResults: je, fetcherResults: ye };
  }
  function re() {
    (_e = !0),
      Z.forEach((A, L) => {
        q.has(L) && Re.add(L), Nt(L);
      });
  }
  function fe(A, L, G = {}) {
    j.fetchers.set(A, L),
      gt(
        { fetchers: new Map(j.fetchers) },
        { flushSync: (G && G.flushSync) === !0 }
      );
  }
  function Oe(A, L, G, W = {}) {
    let ae = Oi(j.matches, L);
    rt(A),
      gt(
        { errors: { [ae.route.id]: G }, fetchers: new Map(j.fetchers) },
        { flushSync: (W && W.flushSync) === !0 }
      );
  }
  function Ve(A) {
    return (
      se.set(A, (se.get(A) || 0) + 1),
      ne.has(A) && ne.delete(A),
      j.fetchers.get(A) || K1
    );
  }
  function rt(A) {
    let L = j.fetchers.get(A);
    q.has(A) && !(L && L.state === "loading" && De.has(A)) && Nt(A),
      Z.delete(A),
      De.delete(A),
      T.delete(A),
      ne.delete(A),
      Re.delete(A),
      j.fetchers.delete(A);
  }
  function na(A) {
    let L = (se.get(A) || 0) - 1;
    L <= 0 ? (se.delete(A), ne.add(A)) : se.set(A, L),
      gt({ fetchers: new Map(j.fetchers) });
  }
  function Nt(A) {
    let L = q.get(A);
    L && (L.abort(), q.delete(A));
  }
  function Ki(A) {
    for (let L of A) {
      let G = Ve(L),
        W = ja(G.data);
      j.fetchers.set(L, W);
    }
  }
  function Zn() {
    let A = [],
      L = !1;
    for (let G of T) {
      let W = j.fetchers.get(G);
      Xe(W, `Expected fetcher: ${G}`),
        W.state === "loading" && (T.delete(G), A.push(G), (L = !0));
    }
    return Ki(A), L;
  }
  function In(A) {
    let L = [];
    for (let [G, W] of De)
      if (W < A) {
        let ae = j.fetchers.get(G);
        Xe(ae, `Expected fetcher: ${G}`),
          ae.state === "loading" && (Nt(G), De.delete(G), L.push(G));
      }
    return Ki(L), L.length > 0;
  }
  function Jn(A, L) {
    let G = j.blockers.get(A) || lo;
    return ve.get(A) !== L && ve.set(A, L), G;
  }
  function yr(A) {
    j.blockers.delete(A), ve.delete(A);
  }
  function kn(A, L) {
    let G = j.blockers.get(A) || lo;
    Xe(
      (G.state === "unblocked" && L.state === "blocked") ||
        (G.state === "blocked" && L.state === "blocked") ||
        (G.state === "blocked" && L.state === "proceeding") ||
        (G.state === "blocked" && L.state === "unblocked") ||
        (G.state === "proceeding" && L.state === "unblocked"),
      `Invalid blocker state transition: ${G.state} -> ${L.state}`
    );
    let W = new Map(j.blockers);
    W.set(A, L), gt({ blockers: W });
  }
  function ri({ currentLocation: A, nextLocation: L, historyAction: G }) {
    if (ve.size === 0) return;
    ve.size > 1 && Dt(!1, "A router only supports one blocker at a time");
    let W = Array.from(ve.entries()),
      [ae, pe] = W[W.length - 1],
      je = j.blockers.get(ae);
    if (
      !(je && je.state === "proceeding") &&
      pe({ currentLocation: A, nextLocation: L, historyAction: G })
    )
      return ae;
  }
  function Xi(A) {
    let L = Yn(404, { pathname: A }),
      G = h || f,
      { matches: W, route: ae } = Qg(G);
    return { notFoundMatches: W, route: ae, error: L };
  }
  function Qo(A, L, G) {
    if (((S = A), (N = L), (x = G || null), !C && j.navigation === fh)) {
      C = !0;
      let W = Yo(j.location, j.matches);
      W != null && gt({ restoreScrollPosition: W });
    }
    return () => {
      (S = null), (N = null), (x = null);
    };
  }
  function Zi(A, L) {
    return (
      (x &&
        x(
          A,
          L.map((W) => T1(W, j.loaderData))
        )) ||
      A.key
    );
  }
  function ai(A, L) {
    if (S && N) {
      let G = Zi(A, L);
      S[G] = N();
    }
  }
  function Yo(A, L) {
    if (S) {
      let G = Zi(A, L),
        W = S[G];
      if (typeof W == "number") return W;
    }
    return null;
  }
  function ii(A, L, G) {
    if (n.patchRoutesOnNavigation)
      if (A) {
        if (Object.keys(A[0].params).length > 0)
          return { active: !0, matches: mc(L, G, y, !0) };
      } else return { active: !0, matches: mc(L, G, y, !0) || [] };
    return { active: !1, matches: null };
  }
  async function si(A, L, G, W) {
    if (!n.patchRoutesOnNavigation) return { type: "success", matches: A };
    let ae = A;
    for (;;) {
      let pe = h == null,
        je = h || f,
        ye = u;
      try {
        await n.patchRoutesOnNavigation({
          signal: G,
          path: L,
          matches: ae,
          fetcherKey: W,
          patch: (Ue, we) => {
            G.aborted || Lg(Ue, we, je, ye, o);
          },
        });
      } catch (Ue) {
        return { type: "error", error: Ue, partialMatches: ae };
      } finally {
        pe && !G.aborted && (f = [...f]);
      }
      if (G.aborted) return { type: "aborted" };
      let xe = Na(je, L, y);
      if (xe) return { type: "success", matches: xe };
      let Ee = mc(je, L, y, !0);
      if (
        !Ee ||
        (ae.length === Ee.length &&
          ae.every((Ue, we) => Ue.route.id === Ee[we].route.id))
      )
        return { type: "success", matches: null };
      ae = Ee;
    }
  }
  function ol(A) {
    (u = {}), (h = wc(A, o, void 0, u));
  }
  function ul(A, L) {
    let G = h == null;
    Lg(A, L, h || f, u, o), G && ((f = [...f]), gt({}));
  }
  return (
    (P = {
      get basename() {
        return y;
      },
      get future() {
        return p;
      },
      get state() {
        return j;
      },
      get routes() {
        return f;
      },
      get window() {
        return r;
      },
      initialize: Mt,
      subscribe: cn,
      enableScrollRestoration: Qo,
      navigate: Ar,
      fetch: ni,
      revalidate: ti,
      createHref: (A) => n.history.createHref(A),
      encodeLocation: (A) => n.history.encodeLocation(A),
      getFetcher: Ve,
      deleteFetcher: na,
      dispose: it,
      getBlocker: Jn,
      deleteBlocker: yr,
      patchRoutes: ul,
      _internalFetchControllers: q,
      _internalSetRoutes: ol,
    }),
    P
  );
}
function I1(n) {
  return (
    n != null &&
    (("formData" in n && n.formData != null) ||
      ("body" in n && n.body !== void 0))
  );
}
function Ch(n, r, a, s, o, u) {
  let f, h;
  if (o) {
    f = [];
    for (let m of r)
      if ((f.push(m), m.route.id === o)) {
        h = m;
        break;
      }
  } else (f = r), (h = r[r.length - 1]);
  let y = dy(s || ".", fy(f), Kn(n.pathname, a) || n.pathname, u === "path");
  if (
    (s == null && ((y.search = n.search), (y.hash = n.hash)),
    (s == null || s === "" || s === ".") && h)
  ) {
    let m = yy(y.search);
    if (h.route.index && !m)
      y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index";
    else if (!h.route.index && m) {
      let p = new URLSearchParams(y.search),
        g = p.getAll("index");
      p.delete("index"),
        g.filter((S) => S).forEach((S) => p.append("index", S));
      let b = p.toString();
      y.search = b ? `?${b}` : "";
    }
  }
  return (
    a !== "/" && (y.pathname = y.pathname === "/" ? a : Tr([a, y.pathname])),
    Ka(y)
  );
}
function kg(n, r, a) {
  if (!a || !I1(a)) return { path: r };
  if (a.formMethod && !ux(a.formMethod))
    return { path: r, error: Yn(405, { method: a.formMethod }) };
  let s = () => ({ path: r, error: Yn(400, { type: "invalid-body" }) }),
    u = (a.formMethod || "get").toUpperCase(),
    f = Db(r);
  if (a.body !== void 0) {
    if (a.formEncType === "text/plain") {
      if (!Mn(u)) return s();
      let g =
        typeof a.body == "string"
          ? a.body
          : a.body instanceof FormData || a.body instanceof URLSearchParams
          ? Array.from(a.body.entries()).reduce(
              (b, [S, x]) => `${b}${S}=${x}
`,
              ""
            )
          : String(a.body);
      return {
        path: r,
        submission: {
          formMethod: u,
          formAction: f,
          formEncType: a.formEncType,
          formData: void 0,
          json: void 0,
          text: g,
        },
      };
    } else if (a.formEncType === "application/json") {
      if (!Mn(u)) return s();
      try {
        let g = typeof a.body == "string" ? JSON.parse(a.body) : a.body;
        return {
          path: r,
          submission: {
            formMethod: u,
            formAction: f,
            formEncType: a.formEncType,
            formData: void 0,
            json: g,
            text: void 0,
          },
        };
      } catch {
        return s();
      }
    }
  }
  Xe(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let h, y;
  if (a.formData) (h = Nh(a.formData)), (y = a.formData);
  else if (a.body instanceof FormData) (h = Nh(a.body)), (y = a.body);
  else if (a.body instanceof URLSearchParams) (h = a.body), (y = $g(h));
  else if (a.body == null) (h = new URLSearchParams()), (y = new FormData());
  else
    try {
      (h = new URLSearchParams(a.body)), (y = $g(h));
    } catch {
      return s();
    }
  let m = {
    formMethod: u,
    formAction: f,
    formEncType: (a && a.formEncType) || "application/x-www-form-urlencoded",
    formData: y,
    json: void 0,
    text: void 0,
  };
  if (Mn(m.formMethod)) return { path: r, submission: m };
  let p = Ia(r);
  return (
    n && p.search && yy(p.search) && h.append("index", ""),
    (p.search = `?${h}`),
    { path: Ka(p), submission: m }
  );
}
function zg(n, r, a, s, o, u, f, h, y, m, p, g, b, S, x, N, C, U, Y, z) {
  var Ne;
  let Q = z ? (Dn(z[1]) ? z[1].error : z[1].data) : void 0,
    P = o.createURL(u.location),
    j = o.createURL(y),
    ie;
  if (p && u.errors) {
    let _e = Object.keys(u.errors)[0];
    ie = f.findIndex((Re) => Re.route.id === _e);
  } else if (z && Dn(z[1])) {
    let _e = z[0];
    ie = f.findIndex((Re) => Re.route.id === _e) - 1;
  }
  let ue = z ? z[1].statusCode : void 0,
    te = ue && ue >= 400,
    be = {
      currentUrl: P,
      currentParams: ((Ne = u.matches[0]) == null ? void 0 : Ne.params) || {},
      nextUrl: j,
      nextParams: f[0].params,
      ...h,
      actionResult: Q,
      actionStatus: ue,
    },
    Le = f.map((_e, Re) => {
      let { route: q } = _e,
        ee = null;
      if (
        (ie != null && Re > ie
          ? (ee = !1)
          : q.lazy
          ? (ee = !0)
          : q.loader == null
          ? (ee = !1)
          : p
          ? (ee = Dh(q, u.loaderData, u.errors))
          : J1(u.loaderData, u.matches[Re], _e) && (ee = !0),
        ee !== null)
      )
        return Mh(a, s, n, _e, m, r, ee);
      let ce = te
          ? !1
          : g ||
            P.pathname + P.search === j.pathname + j.search ||
            P.search !== j.search ||
            W1(u.matches[Re], _e),
        De = { ...be, defaultShouldRevalidate: ce },
        T = Ec(_e, De);
      return Mh(a, s, n, _e, m, r, T, De);
    }),
    he = [];
  return (
    x.forEach((_e, Re) => {
      if (p || !f.some((ne) => ne.route.id === _e.routeId) || S.has(Re)) return;
      let q = u.fetchers.get(Re),
        ee = q && q.state !== "idle" && q.data === void 0,
        ce = Na(C, _e.path, U);
      if (!ce) {
        if (Y && ee) return;
        he.push({
          key: Re,
          routeId: _e.routeId,
          path: _e.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (N.has(Re)) return;
      let De = vo(ce, _e.path),
        T = new AbortController(),
        Z = Hs(o, _e.path, T.signal),
        se = null;
      if (b.has(Re)) b.delete(Re), (se = $s(a, s, Z, ce, De, m, r));
      else if (ee) g && (se = $s(a, s, Z, ce, De, m, r));
      else {
        let ne = { ...be, defaultShouldRevalidate: te ? !1 : g };
        Ec(De, ne) && (se = $s(a, s, Z, ce, De, m, r, ne));
      }
      se &&
        he.push({
          key: Re,
          routeId: _e.routeId,
          path: _e.path,
          matches: se,
          match: De,
          request: Z,
          controller: T,
        });
    }),
    { dsMatches: Le, revalidatingFetchers: he }
  );
}
function Dh(n, r, a) {
  if (n.lazy) return !0;
  if (!n.loader) return !1;
  let s = r != null && n.id in r,
    o = a != null && a[n.id] !== void 0;
  return !s && o
    ? !1
    : typeof n.loader == "function" && n.loader.hydrate === !0
    ? !0
    : !s && !o;
}
function J1(n, r, a) {
  let s = !r || a.route.id !== r.route.id,
    o = !n.hasOwnProperty(a.route.id);
  return s || o;
}
function W1(n, r) {
  let a = n.route.path;
  return (
    n.pathname !== r.pathname ||
    (a != null && a.endsWith("*") && n.params["*"] !== r.params["*"])
  );
}
function Ec(n, r) {
  if (n.route.shouldRevalidate) {
    let a = n.route.shouldRevalidate(r);
    if (typeof a == "boolean") return a;
  }
  return r.defaultShouldRevalidate;
}
function Lg(n, r, a, s, o) {
  let u;
  if (n) {
    let y = s[n];
    Xe(y, `No route found to patch children into: routeId = ${n}`),
      y.children || (y.children = []),
      (u = y.children);
  } else u = a;
  let f = r.filter((y) => !u.some((m) => Rb(y, m))),
    h = wc(
      f,
      o,
      [n || "_", "patch", String((u == null ? void 0 : u.length) || "0")],
      s
    );
  u.push(...h);
}
function Rb(n, r) {
  return "id" in n && "id" in r && n.id === r.id
    ? !0
    : n.index === r.index &&
      n.path === r.path &&
      n.caseSensitive === r.caseSensitive
    ? (!n.children || n.children.length === 0) &&
      (!r.children || r.children.length === 0)
      ? !0
      : n.children.every((a, s) => {
          var o;
          return (o = r.children) == null ? void 0 : o.some((u) => Rb(a, u));
        })
    : !1;
}
var Bg = new WeakMap(),
  Ob = ({ key: n, route: r, manifest: a, mapRouteProperties: s }) => {
    let o = a[r.id];
    if (
      (Xe(o, "No route found in manifest"),
      !o.lazy || typeof o.lazy != "object")
    )
      return;
    let u = o.lazy[n];
    if (!u) return;
    let f = Bg.get(o);
    f || ((f = {}), Bg.set(o, f));
    let h = f[n];
    if (h) return h;
    let y = (async () => {
      let m = w1(n),
        g = o[n] !== void 0 && n !== "hasErrorBoundary";
      if (m)
        Dt(
          !m,
          "Route property " +
            n +
            " is not a supported lazy route property. This property will be ignored."
        ),
          (f[n] = Promise.resolve());
      else if (g)
        Dt(
          !1,
          `Route "${o.id}" has a static property "${n}" defined. The lazy property will be ignored.`
        );
      else {
        let b = await u();
        b != null && (Object.assign(o, { [n]: b }), Object.assign(o, s(o)));
      }
      typeof o.lazy == "object" &&
        ((o.lazy[n] = void 0),
        Object.values(o.lazy).every((b) => b === void 0) && (o.lazy = void 0));
    })();
    return (f[n] = y), y;
  },
  qg = new WeakMap();
function ex(n, r, a, s, o) {
  let u = a[n.id];
  if ((Xe(u, "No route found in manifest"), !n.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof n.lazy == "function") {
    let p = qg.get(u);
    if (p) return { lazyRoutePromise: p, lazyHandlerPromise: p };
    let g = (async () => {
      Xe(typeof n.lazy == "function", "No lazy route function found");
      let b = await n.lazy(),
        S = {};
      for (let x in b) {
        let N = b[x];
        if (N === void 0) continue;
        let C = x1(x),
          Y = u[x] !== void 0 && x !== "hasErrorBoundary";
        C
          ? Dt(
              !C,
              "Route property " +
                x +
                " is not a supported property to be returned from a lazy route function. This property will be ignored."
            )
          : Y
          ? Dt(
              !Y,
              `Route "${u.id}" has a static property "${x}" defined but its lazy function is also returning a value for this property. The lazy route property "${x}" will be ignored.`
            )
          : (S[x] = N);
      }
      Object.assign(u, S), Object.assign(u, { ...s(u), lazy: void 0 });
    })();
    return (
      qg.set(u, g),
      g.catch(() => {}),
      { lazyRoutePromise: g, lazyHandlerPromise: g }
    );
  }
  let f = Object.keys(n.lazy),
    h = [],
    y;
  for (let p of f) {
    if (o && o.includes(p)) continue;
    let g = Ob({ key: p, route: n, manifest: a, mapRouteProperties: s });
    g && (h.push(g), p === r && (y = g));
  }
  let m = h.length > 0 ? Promise.all(h).then(() => {}) : void 0;
  return (
    m == null || m.catch(() => {}),
    y == null || y.catch(() => {}),
    { lazyRoutePromise: m, lazyHandlerPromise: y }
  );
}
async function Hg(n) {
  let r = n.matches.filter((o) => o.shouldLoad),
    a = {};
  return (
    (await Promise.all(r.map((o) => o.resolve()))).forEach((o, u) => {
      a[r[u].route.id] = o;
    }),
    a
  );
}
async function tx(n) {
  return n.matches.some((r) => r.route.unstable_middleware)
    ? Ab(
        n,
        !1,
        () => Hg(n),
        (r, a) => ({ [a]: { type: "error", result: r } })
      )
    : Hg(n);
}
async function Ab(n, r, a, s) {
  let { matches: o, request: u, params: f, context: h } = n,
    y = { handlerResult: void 0 };
  try {
    let m = o.flatMap((g) =>
        g.route.unstable_middleware
          ? g.route.unstable_middleware.map((b) => [g.route.id, b])
          : []
      ),
      p = await jb({ request: u, params: f, context: h }, m, r, y, a);
    return r ? p : y.handlerResult;
  } catch (m) {
    if (!y.middlewareError) throw m;
    let p = await s(y.middlewareError.error, y.middlewareError.routeId);
    return y.handlerResult ? Object.assign(y.handlerResult, p) : p;
  }
}
async function jb(n, r, a, s, o, u = 0) {
  let { request: f } = n;
  if (f.signal.aborted)
    throw f.signal.reason
      ? f.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${f.method} ${f.url}`
        );
  let h = r[u];
  if (!h) return (s.handlerResult = await o()), s.handlerResult;
  let [y, m] = h,
    p = !1,
    g,
    b = async () => {
      if (p) throw new Error("You may only call `next()` once per middleware");
      (p = !0), await jb(n, r, a, s, o, u + 1);
    };
  try {
    let S = await m(
      { request: n.request, params: n.params, context: n.context },
      b
    );
    return p ? (S === void 0 ? g : S) : b();
  } catch (S) {
    throw (
      (s.middlewareError
        ? s.middlewareError.error !== S &&
          (s.middlewareError = { routeId: y, error: S })
        : (s.middlewareError = { routeId: y, error: S }),
      S)
    );
  }
}
function Cb(n, r, a, s, o) {
  let u = Ob({
      key: "unstable_middleware",
      route: s.route,
      manifest: r,
      mapRouteProperties: n,
    }),
    f = ex(s.route, Mn(a.method) ? "action" : "loader", r, n, o);
  return {
    middleware: u,
    route: f.lazyRoutePromise,
    handler: f.lazyHandlerPromise,
  };
}
function Mh(n, r, a, s, o, u, f, h = null) {
  let y = !1,
    m = Cb(n, r, a, s, o);
  return {
    ...s,
    _lazyPromises: m,
    shouldLoad: f,
    unstable_shouldRevalidateArgs: h,
    unstable_shouldCallHandler(p) {
      return (
        (y = !0),
        h
          ? typeof p == "boolean"
            ? Ec(s, { ...h, defaultShouldRevalidate: p })
            : Ec(s, h)
          : f
      );
    },
    resolve(p) {
      return y ||
        f ||
        (p && a.method === "GET" && (s.route.lazy || s.route.loader))
        ? rx({
            request: a,
            match: s,
            lazyHandlerPromise: m == null ? void 0 : m.handler,
            lazyRoutePromise: m == null ? void 0 : m.route,
            handlerOverride: p,
            scopedContext: u,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function $s(n, r, a, s, o, u, f, h = null) {
  return s.map((y) =>
    y.route.id !== o.route.id
      ? {
          ...y,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: h,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Cb(n, r, a, y, u),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : Mh(n, r, a, y, u, f, !0, h)
  );
}
async function nx(n, r, a, s, o, u) {
  a.some((m) => {
    var p;
    return (p = m._lazyPromises) == null ? void 0 : p.middleware;
  }) &&
    (await Promise.all(
      a.map((m) => {
        var p;
        return (p = m._lazyPromises) == null ? void 0 : p.middleware;
      })
    ));
  let f = { request: r, params: a[0].params, context: o, matches: a },
    y = await n({
      ...f,
      fetcherKey: s,
      unstable_runClientMiddleware: (m) => {
        let p = f;
        return Ab(
          p,
          !1,
          () =>
            m({
              ...p,
              fetcherKey: s,
              unstable_runClientMiddleware: () => {
                throw new Error(
                  "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler"
                );
              },
            }),
          (g, b) => ({ [b]: { type: "error", result: g } })
        );
      },
    });
  try {
    await Promise.all(
      a.flatMap((m) => {
        var p, g;
        return [
          (p = m._lazyPromises) == null ? void 0 : p.handler,
          (g = m._lazyPromises) == null ? void 0 : g.route,
        ];
      })
    );
  } catch {}
  return y;
}
async function rx({
  request: n,
  match: r,
  lazyHandlerPromise: a,
  lazyRoutePromise: s,
  handlerOverride: o,
  scopedContext: u,
}) {
  let f,
    h,
    y = Mn(n.method),
    m = y ? "action" : "loader",
    p = (g) => {
      let b,
        S = new Promise((C, U) => (b = U));
      (h = () => b()), n.signal.addEventListener("abort", h);
      let x = (C) =>
          typeof g != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${r.route.id}]`
                )
              )
            : g(
                { request: n, params: r.params, context: u },
                ...(C !== void 0 ? [C] : [])
              ),
        N = (async () => {
          try {
            return { type: "data", result: await (o ? o((U) => x(U)) : x()) };
          } catch (C) {
            return { type: "error", result: C };
          }
        })();
      return Promise.race([N, S]);
    };
  try {
    let g = y ? r.route.action : r.route.loader;
    if (a || s)
      if (g) {
        let b,
          [S] = await Promise.all([
            p(g).catch((x) => {
              b = x;
            }),
            a,
            s,
          ]);
        if (b !== void 0) throw b;
        f = S;
      } else {
        await a;
        let b = y ? r.route.action : r.route.loader;
        if (b) [f] = await Promise.all([p(b), s]);
        else if (m === "action") {
          let S = new URL(n.url),
            x = S.pathname + S.search;
          throw Yn(405, { method: n.method, pathname: x, routeId: r.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (g) f = await p(g);
    else {
      let b = new URL(n.url),
        S = b.pathname + b.search;
      throw Yn(404, { pathname: S });
    }
  } catch (g) {
    return { type: "error", result: g };
  } finally {
    h && n.signal.removeEventListener("abort", h);
  }
  return f;
}
async function ax(n) {
  var s, o, u, f, h, y;
  let { result: r, type: a } = n;
  if (Mb(r)) {
    let m;
    try {
      let p = r.headers.get("Content-Type");
      p && /\bapplication\/json\b/.test(p)
        ? r.body == null
          ? (m = null)
          : (m = await r.json())
        : (m = await r.text());
    } catch (p) {
      return { type: "error", error: p };
    }
    return a === "error"
      ? {
          type: "error",
          error: new xc(r.status, r.statusText, m),
          statusCode: r.status,
          headers: r.headers,
        }
      : { type: "data", data: m, statusCode: r.status, headers: r.headers };
  }
  return a === "error"
    ? Yg(r)
      ? r.data instanceof Error
        ? {
            type: "error",
            error: r.data,
            statusCode: (s = r.init) == null ? void 0 : s.status,
            headers:
              (o = r.init) != null && o.headers
                ? new Headers(r.init.headers)
                : void 0,
          }
        : {
            type: "error",
            error: new xc(
              ((u = r.init) == null ? void 0 : u.status) || 500,
              void 0,
              r.data
            ),
            statusCode: Ao(r) ? r.status : void 0,
            headers:
              (f = r.init) != null && f.headers
                ? new Headers(r.init.headers)
                : void 0,
          }
      : { type: "error", error: r, statusCode: Ao(r) ? r.status : void 0 }
    : Yg(r)
    ? {
        type: "data",
        data: r.data,
        statusCode: (h = r.init) == null ? void 0 : h.status,
        headers:
          (y = r.init) != null && y.headers
            ? new Headers(r.init.headers)
            : void 0,
      }
    : { type: "data", data: r };
}
function ix(n, r, a, s, o) {
  let u = n.headers.get("Location");
  if (
    (Xe(
      u,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !hy.test(u))
  ) {
    let f = s.slice(0, s.findIndex((h) => h.route.id === a) + 1);
    (u = Ch(new URL(r.url), f, o, u)), n.headers.set("Location", u);
  }
  return n;
}
function Pg(n, r, a) {
  if (hy.test(n)) {
    let s = n,
      o = s.startsWith("//") ? new URL(r.protocol + s) : new URL(s),
      u = Kn(o.pathname, a) != null;
    if (o.origin === r.origin && u) return o.pathname + o.search + o.hash;
  }
  return n;
}
function Hs(n, r, a, s) {
  let o = n.createURL(Db(r)).toString(),
    u = { signal: a };
  if (s && Mn(s.formMethod)) {
    let { formMethod: f, formEncType: h } = s;
    (u.method = f.toUpperCase()),
      h === "application/json"
        ? ((u.headers = new Headers({ "Content-Type": h })),
          (u.body = JSON.stringify(s.json)))
        : h === "text/plain"
        ? (u.body = s.text)
        : h === "application/x-www-form-urlencoded" && s.formData
        ? (u.body = Nh(s.formData))
        : (u.body = s.formData);
  }
  return new Request(o, u);
}
function Nh(n) {
  let r = new URLSearchParams();
  for (let [a, s] of n.entries())
    r.append(a, typeof s == "string" ? s : s.name);
  return r;
}
function $g(n) {
  let r = new FormData();
  for (let [a, s] of n.entries()) r.append(a, s);
  return r;
}
function sx(n, r, a, s = !1, o = !1) {
  let u = {},
    f = null,
    h,
    y = !1,
    m = {},
    p = a && Dn(a[1]) ? a[1].error : void 0;
  return (
    n.forEach((g) => {
      if (!(g.route.id in r)) return;
      let b = g.route.id,
        S = r[b];
      if (
        (Xe(!ji(S), "Cannot handle redirect results in processLoaderData"),
        Dn(S))
      ) {
        let x = S.error;
        if ((p !== void 0 && ((x = p), (p = void 0)), (f = f || {}), o))
          f[b] = x;
        else {
          let N = Oi(n, b);
          f[N.route.id] == null && (f[N.route.id] = x);
        }
        s || (u[b] = Tb),
          y || ((y = !0), (h = Ao(S.error) ? S.error.status : 500)),
          S.headers && (m[b] = S.headers);
      } else
        (u[b] = S.data),
          S.statusCode && S.statusCode !== 200 && !y && (h = S.statusCode),
          S.headers && (m[b] = S.headers);
    }),
    p !== void 0 && a && ((f = { [a[0]]: p }), a[2] && (u[a[2]] = void 0)),
    { loaderData: u, errors: f, statusCode: h || 200, loaderHeaders: m }
  );
}
function Vg(n, r, a, s, o, u) {
  let { loaderData: f, errors: h } = sx(r, a, s);
  return (
    o
      .filter((y) => !y.matches || y.matches.some((m) => m.shouldLoad))
      .forEach((y) => {
        let { key: m, match: p, controller: g } = y,
          b = u[m];
        if (
          (Xe(b, "Did not find corresponding fetcher result"),
          !(g && g.signal.aborted))
        )
          if (Dn(b)) {
            let S = Oi(n.matches, p == null ? void 0 : p.route.id);
            (h && h[S.route.id]) || (h = { ...h, [S.route.id]: b.error }),
              n.fetchers.delete(m);
          } else if (ji(b)) Xe(!1, "Unhandled fetcher revalidation redirect");
          else {
            let S = ja(b.data);
            n.fetchers.set(m, S);
          }
      }),
    { loaderData: f, errors: h }
  );
}
function Fg(n, r, a, s) {
  let o = Object.entries(r)
    .filter(([, u]) => u !== Tb)
    .reduce((u, [f, h]) => ((u[f] = h), u), {});
  for (let u of a) {
    let f = u.route.id;
    if (
      (!r.hasOwnProperty(f) &&
        n.hasOwnProperty(f) &&
        u.route.loader &&
        (o[f] = n[f]),
      s && s.hasOwnProperty(f))
    )
      break;
  }
  return o;
}
function Gg(n) {
  return n
    ? Dn(n[1])
      ? { actionData: {} }
      : { actionData: { [n[0]]: n[1].data } }
    : {};
}
function Oi(n, r) {
  return (
    (r ? n.slice(0, n.findIndex((s) => s.route.id === r) + 1) : [...n])
      .reverse()
      .find((s) => s.route.hasErrorBoundary === !0) || n[0]
  );
}
function Qg(n) {
  let r =
    n.length === 1
      ? n[0]
      : n.find((a) => a.index || !a.path || a.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: r }],
    route: r,
  };
}
function Yn(
  n,
  { pathname: r, routeId: a, method: s, type: o, message: u } = {}
) {
  let f = "Unknown Server Error",
    h = "Unknown @remix-run/router error";
  return (
    n === 400
      ? ((f = "Bad Request"),
        s && r && a
          ? (h = `You made a ${s} request to "${r}" but did not provide a \`loader\` for route "${a}", so there is no way to handle the request.`)
          : o === "invalid-body" && (h = "Unable to encode submission body"))
      : n === 403
      ? ((f = "Forbidden"), (h = `Route "${a}" does not match URL "${r}"`))
      : n === 404
      ? ((f = "Not Found"), (h = `No route matches URL "${r}"`))
      : n === 405 &&
        ((f = "Method Not Allowed"),
        s && r && a
          ? (h = `You made a ${s.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${a}", so there is no way to handle the request.`)
          : s && (h = `Invalid request method "${s.toUpperCase()}"`)),
    new xc(n || 500, f, new Error(h), !0)
  );
}
function rc(n) {
  let r = Object.entries(n);
  for (let a = r.length - 1; a >= 0; a--) {
    let [s, o] = r[a];
    if (ji(o)) return { key: s, result: o };
  }
}
function Db(n) {
  let r = typeof n == "string" ? Ia(n) : n;
  return Ka({ ...r, hash: "" });
}
function lx(n, r) {
  return n.pathname !== r.pathname || n.search !== r.search
    ? !1
    : n.hash === ""
    ? r.hash !== ""
    : n.hash === r.hash
    ? !0
    : r.hash !== "";
}
function ox(n) {
  return Mb(n.result) && Q1.has(n.result.status);
}
function Dn(n) {
  return n.type === "error";
}
function ji(n) {
  return (n && n.type) === "redirect";
}
function Yg(n) {
  return (
    typeof n == "object" &&
    n != null &&
    "type" in n &&
    "data" in n &&
    "init" in n &&
    n.type === "DataWithResponseInit"
  );
}
function Mb(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.headers == "object" &&
    typeof n.body < "u"
  );
}
function ux(n) {
  return G1.has(n.toUpperCase());
}
function Mn(n) {
  return V1.has(n.toUpperCase());
}
function yy(n) {
  return new URLSearchParams(n).getAll("index").some((r) => r === "");
}
function vo(n, r) {
  let a = typeof r == "string" ? Ia(r).search : r.search;
  if (n[n.length - 1].route.index && yy(a || "")) return n[n.length - 1];
  let s = Sb(n);
  return s[s.length - 1];
}
function Kg(n) {
  let {
    formMethod: r,
    formAction: a,
    formEncType: s,
    text: o,
    formData: u,
    json: f,
  } = n;
  if (!(!r || !a || !s)) {
    if (o != null)
      return {
        formMethod: r,
        formAction: a,
        formEncType: s,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (u != null)
      return {
        formMethod: r,
        formAction: a,
        formEncType: s,
        formData: u,
        json: void 0,
        text: void 0,
      };
    if (f !== void 0)
      return {
        formMethod: r,
        formAction: a,
        formEncType: s,
        formData: void 0,
        json: f,
        text: void 0,
      };
  }
}
function dh(n, r) {
  return r
    ? {
        state: "loading",
        location: n,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
      }
    : {
        state: "loading",
        location: n,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function cx(n, r) {
  return {
    state: "submitting",
    location: n,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
  };
}
function oo(n, r) {
  return n
    ? {
        state: "loading",
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
        data: r,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r,
      };
}
function fx(n, r) {
  return {
    state: "submitting",
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
    data: r ? r.data : void 0,
  };
}
function ja(n) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: n,
  };
}
function dx(n, r) {
  try {
    let a = n.sessionStorage.getItem(Eb);
    if (a) {
      let s = JSON.parse(a);
      for (let [o, u] of Object.entries(s || {}))
        u && Array.isArray(u) && r.set(o, new Set(u || []));
    }
  } catch {}
}
function hx(n, r) {
  if (r.size > 0) {
    let a = {};
    for (let [s, o] of r) a[s] = [...o];
    try {
      n.sessionStorage.setItem(Eb, JSON.stringify(a));
    } catch (s) {
      Dt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${s}).`
      );
    }
  }
}
function yx() {
  let n,
    r,
    a = new Promise((s, o) => {
      (n = async (u) => {
        s(u);
        try {
          await a;
        } catch {}
      }),
        (r = async (u) => {
          o(u);
          try {
            await a;
          } catch {}
        });
    });
  return { promise: a, resolve: n, reject: r };
}
var Fi = D.createContext(null);
Fi.displayName = "DataRouter";
var Lo = D.createContext(null);
Lo.displayName = "DataRouterState";
var my = D.createContext({ isTransitioning: !1 });
my.displayName = "ViewTransition";
var Nb = D.createContext(new Map());
Nb.displayName = "Fetchers";
var mx = D.createContext(null);
mx.displayName = "Await";
var Rr = D.createContext(null);
Rr.displayName = "Navigation";
var Pc = D.createContext(null);
Pc.displayName = "Location";
var Or = D.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Or.displayName = "Route";
var py = D.createContext(null);
py.displayName = "RouteError";
function px(n, { relative: r } = {}) {
  Xe(
    Bo(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: s } = D.useContext(Rr),
    { hash: o, pathname: u, search: f } = qo(n, { relative: r }),
    h = u;
  return (
    a !== "/" && (h = u === "/" ? a : Tr([a, u])),
    s.createHref({ pathname: h, search: f, hash: o })
  );
}
function Bo() {
  return D.useContext(Pc) != null;
}
function dr() {
  return (
    Xe(
      Bo(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    D.useContext(Pc).location
  );
}
var Ub =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function kb(n) {
  D.useContext(Rr).static || D.useLayoutEffect(n);
}
function hr() {
  let { isDataRoute: n } = D.useContext(Or);
  return n ? Dx() : vx();
}
function vx() {
  Xe(
    Bo(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = D.useContext(Fi),
    { basename: r, navigator: a } = D.useContext(Rr),
    { matches: s } = D.useContext(Or),
    { pathname: o } = dr(),
    u = JSON.stringify(fy(s)),
    f = D.useRef(!1);
  return (
    kb(() => {
      f.current = !0;
    }),
    D.useCallback(
      (y, m = {}) => {
        if ((Dt(f.current, Ub), !f.current)) return;
        if (typeof y == "number") {
          a.go(y);
          return;
        }
        let p = dy(y, JSON.parse(u), o, m.relative === "path");
        n == null &&
          r !== "/" &&
          (p.pathname = p.pathname === "/" ? r : Tr([r, p.pathname])),
          (m.replace ? a.replace : a.push)(p, m.state, m);
      },
      [r, a, u, o, n]
    )
  );
}
var gx = D.createContext(null);
function bx(n) {
  let r = D.useContext(Or).outlet;
  return r && D.createElement(gx.Provider, { value: n }, r);
}
function qo(n, { relative: r } = {}) {
  let { matches: a } = D.useContext(Or),
    { pathname: s } = dr(),
    o = JSON.stringify(fy(a));
  return D.useMemo(() => dy(n, JSON.parse(o), s, r === "path"), [n, o, s, r]);
}
function _x(n, r, a, s) {
  Xe(
    Bo(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o } = D.useContext(Rr),
    { matches: u } = D.useContext(Or),
    f = u[u.length - 1],
    h = f ? f.params : {},
    y = f ? f.pathname : "/",
    m = f ? f.pathnameBase : "/",
    p = f && f.route;
  {
    let U = (p && p.path) || "";
    zb(
      y,
      !p || U.endsWith("*") || U.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${
        U === "/" ? "*" : `${U}/*`
      }">.`
    );
  }
  let g = dr(),
    b;
  b = g;
  let S = b.pathname || "/",
    x = S;
  if (m !== "/") {
    let U = m.replace(/^\//, "").split("/");
    x = "/" + S.replace(/^\//, "").split("/").slice(U.length).join("/");
  }
  let N = Na(n, { pathname: x });
  return (
    Dt(
      p || N != null,
      `No routes matched location "${b.pathname}${b.search}${b.hash}" `
    ),
    Dt(
      N == null ||
        N[N.length - 1].route.element !== void 0 ||
        N[N.length - 1].route.Component !== void 0 ||
        N[N.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    Tx(
      N &&
        N.map((U) =>
          Object.assign({}, U, {
            params: Object.assign({}, h, U.params),
            pathname: Tr([
              m,
              o.encodeLocation
                ? o.encodeLocation(U.pathname).pathname
                : U.pathname,
            ]),
            pathnameBase:
              U.pathnameBase === "/"
                ? m
                : Tr([
                    m,
                    o.encodeLocation
                      ? o.encodeLocation(U.pathnameBase).pathname
                      : U.pathnameBase,
                  ]),
          })
        ),
      u,
      a,
      s
    )
  );
}
function wx() {
  let n = Cx(),
    r = Ao(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    a = n instanceof Error ? n.stack : null,
    s = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: s },
    u = { padding: "2px 4px", backgroundColor: s },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (f = D.createElement(
      D.Fragment,
      null,
      D.createElement("p", null, "💿 Hey developer 👋"),
      D.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        D.createElement("code", { style: u }, "ErrorBoundary"),
        " or",
        " ",
        D.createElement("code", { style: u }, "errorElement"),
        " prop on your route."
      )
    )),
    D.createElement(
      D.Fragment,
      null,
      D.createElement("h2", null, "Unexpected Application Error!"),
      D.createElement("h3", { style: { fontStyle: "italic" } }, r),
      a ? D.createElement("pre", { style: o }, a) : null,
      f
    )
  );
}
var Sx = D.createElement(wx, null),
  xx = class extends D.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, r) {
      return r.location !== n.location ||
        (r.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : r.error,
            location: r.location,
            revalidation: n.revalidation || r.revalidation,
          };
    }
    componentDidCatch(n, r) {
      console.error(
        "React Router caught the following error during render",
        n,
        r
      );
    }
    render() {
      return this.state.error !== void 0
        ? D.createElement(
            Or.Provider,
            { value: this.props.routeContext },
            D.createElement(py.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Ex({ routeContext: n, match: r, children: a }) {
  let s = D.useContext(Fi);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    D.createElement(Or.Provider, { value: n }, a)
  );
}
function Tx(n, r = [], a = null, s = null) {
  if (n == null) {
    if (!a) return null;
    if (a.errors) n = a.matches;
    else if (r.length === 0 && !a.initialized && a.matches.length > 0)
      n = a.matches;
    else return null;
  }
  let o = n,
    u = a == null ? void 0 : a.errors;
  if (u != null) {
    let y = o.findIndex(
      (m) => m.route.id && (u == null ? void 0 : u[m.route.id]) !== void 0
    );
    Xe(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        u
      ).join(",")}`
    ),
      (o = o.slice(0, Math.min(o.length, y + 1)));
  }
  let f = !1,
    h = -1;
  if (a)
    for (let y = 0; y < o.length; y++) {
      let m = o[y];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (h = y),
        m.route.id)
      ) {
        let { loaderData: p, errors: g } = a,
          b =
            m.route.loader &&
            !p.hasOwnProperty(m.route.id) &&
            (!g || g[m.route.id] === void 0);
        if (m.route.lazy || b) {
          (f = !0), h >= 0 ? (o = o.slice(0, h + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((y, m, p) => {
    let g,
      b = !1,
      S = null,
      x = null;
    a &&
      ((g = u && m.route.id ? u[m.route.id] : void 0),
      (S = m.route.errorElement || Sx),
      f &&
        (h < 0 && p === 0
          ? (zb(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (b = !0),
            (x = null))
          : h === p &&
            ((b = !0), (x = m.route.hydrateFallbackElement || null))));
    let N = r.concat(o.slice(0, p + 1)),
      C = () => {
        let U;
        return (
          g
            ? (U = S)
            : b
            ? (U = x)
            : m.route.Component
            ? (U = D.createElement(m.route.Component, null))
            : m.route.element
            ? (U = m.route.element)
            : (U = y),
          D.createElement(Ex, {
            match: m,
            routeContext: { outlet: y, matches: N, isDataRoute: a != null },
            children: U,
          })
        );
      };
    return a && (m.route.ErrorBoundary || m.route.errorElement || p === 0)
      ? D.createElement(xx, {
          location: a.location,
          revalidation: a.revalidation,
          component: S,
          error: g,
          children: C(),
          routeContext: { outlet: null, matches: N, isDataRoute: !0 },
        })
      : C();
  }, null);
}
function vy(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rx(n) {
  let r = D.useContext(Fi);
  return Xe(r, vy(n)), r;
}
function Ox(n) {
  let r = D.useContext(Lo);
  return Xe(r, vy(n)), r;
}
function Ax(n) {
  let r = D.useContext(Or);
  return Xe(r, vy(n)), r;
}
function gy(n) {
  let r = Ax(n),
    a = r.matches[r.matches.length - 1];
  return (
    Xe(
      a.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function jx() {
  return gy("useRouteId");
}
function Cx() {
  var s;
  let n = D.useContext(py),
    r = Ox("useRouteError"),
    a = gy("useRouteError");
  return n !== void 0 ? n : (s = r.errors) == null ? void 0 : s[a];
}
function Dx() {
  let { router: n } = Rx("useNavigate"),
    r = gy("useNavigate"),
    a = D.useRef(!1);
  return (
    kb(() => {
      a.current = !0;
    }),
    D.useCallback(
      async (o, u = {}) => {
        Dt(a.current, Ub),
          a.current &&
            (typeof o == "number"
              ? n.navigate(o)
              : await n.navigate(o, { fromRouteId: r, ...u }));
      },
      [n, r]
    )
  );
}
var Xg = {};
function zb(n, r, a) {
  !r && !Xg[n] && ((Xg[n] = !0), Dt(!1, a));
}
var Zg = {};
function Ig(n, r) {
  !n && !Zg[r] && ((Zg[r] = !0), console.warn(r));
}
function Mx(n) {
  let r = {
    hasErrorBoundary:
      n.hasErrorBoundary || n.ErrorBoundary != null || n.errorElement != null,
  };
  return (
    n.Component &&
      (n.element &&
        Dt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(r, {
        element: D.createElement(n.Component),
        Component: void 0,
      })),
    n.HydrateFallback &&
      (n.hydrateFallbackElement &&
        Dt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(r, {
        hydrateFallbackElement: D.createElement(n.HydrateFallback),
        HydrateFallback: void 0,
      })),
    n.ErrorBoundary &&
      (n.errorElement &&
        Dt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(r, {
        errorElement: D.createElement(n.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    r
  );
}
var Nx = ["HydrateFallback", "hydrateFallbackElement"],
  Ux = class {
    constructor() {
      (this.status = "pending"),
        (this.promise = new Promise((r, a) => {
          (this.resolve = (s) => {
            this.status === "pending" && ((this.status = "resolved"), r(s));
          }),
            (this.reject = (s) => {
              this.status === "pending" && ((this.status = "rejected"), a(s));
            });
        }));
    }
  };
function kx({ router: n, flushSync: r }) {
  let [a, s] = D.useState(n.state),
    [o, u] = D.useState(),
    [f, h] = D.useState({ isTransitioning: !1 }),
    [y, m] = D.useState(),
    [p, g] = D.useState(),
    [b, S] = D.useState(),
    x = D.useRef(new Map()),
    N = D.useCallback(
      (z, { deletedFetchers: Q, flushSync: P, viewTransitionOpts: j }) => {
        z.fetchers.forEach((ue, te) => {
          ue.data !== void 0 && x.current.set(te, ue.data);
        }),
          Q.forEach((ue) => x.current.delete(ue)),
          Ig(
            P === !1 || r != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let ie =
          n.window != null &&
          n.window.document != null &&
          typeof n.window.document.startViewTransition == "function";
        if (
          (Ig(
            j == null || ie,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !j || !ie)
        ) {
          r && P ? r(() => s(z)) : D.startTransition(() => s(z));
          return;
        }
        if (r && P) {
          r(() => {
            p && (y && y.resolve(), p.skipTransition()),
              h({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: j.currentLocation,
                nextLocation: j.nextLocation,
              });
          });
          let ue = n.window.document.startViewTransition(() => {
            r(() => s(z));
          });
          ue.finished.finally(() => {
            r(() => {
              m(void 0), g(void 0), u(void 0), h({ isTransitioning: !1 });
            });
          }),
            r(() => g(ue));
          return;
        }
        p
          ? (y && y.resolve(),
            p.skipTransition(),
            S({
              state: z,
              currentLocation: j.currentLocation,
              nextLocation: j.nextLocation,
            }))
          : (u(z),
            h({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: j.currentLocation,
              nextLocation: j.nextLocation,
            }));
      },
      [n.window, r, p, y]
    );
  D.useLayoutEffect(() => n.subscribe(N), [n, N]),
    D.useEffect(() => {
      f.isTransitioning && !f.flushSync && m(new Ux());
    }, [f]),
    D.useEffect(() => {
      if (y && o && n.window) {
        let z = o,
          Q = y.promise,
          P = n.window.document.startViewTransition(async () => {
            D.startTransition(() => s(z)), await Q;
          });
        P.finished.finally(() => {
          m(void 0), g(void 0), u(void 0), h({ isTransitioning: !1 });
        }),
          g(P);
      }
    }, [o, y, n.window]),
    D.useEffect(() => {
      y && o && a.location.key === o.location.key && y.resolve();
    }, [y, p, a.location, o]),
    D.useEffect(() => {
      !f.isTransitioning &&
        b &&
        (u(b.state),
        h({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: b.currentLocation,
          nextLocation: b.nextLocation,
        }),
        S(void 0));
    }, [f.isTransitioning, b]);
  let C = D.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (z) => n.navigate(z),
        push: (z, Q, P) =>
          n.navigate(z, {
            state: Q,
            preventScrollReset: P == null ? void 0 : P.preventScrollReset,
          }),
        replace: (z, Q, P) =>
          n.navigate(z, {
            replace: !0,
            state: Q,
            preventScrollReset: P == null ? void 0 : P.preventScrollReset,
          }),
      }),
      [n]
    ),
    U = n.basename || "/",
    Y = D.useMemo(
      () => ({ router: n, navigator: C, static: !1, basename: U }),
      [n, C, U]
    );
  return D.createElement(
    D.Fragment,
    null,
    D.createElement(
      Fi.Provider,
      { value: Y },
      D.createElement(
        Lo.Provider,
        { value: a },
        D.createElement(
          Nb.Provider,
          { value: x.current },
          D.createElement(
            my.Provider,
            { value: f },
            D.createElement(
              qx,
              {
                basename: U,
                location: a.location,
                navigationType: a.historyAction,
                navigator: C,
              },
              D.createElement(zx, {
                routes: n.routes,
                future: n.future,
                state: a,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var zx = D.memo(Lx);
function Lx({ routes: n, future: r, state: a }) {
  return _x(n, void 0, a, r);
}
function Bx(n) {
  return bx(n.context);
}
function qx({
  basename: n = "/",
  children: r = null,
  location: a,
  navigationType: s = "POP",
  navigator: o,
  static: u = !1,
}) {
  Xe(
    !Bo(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let f = n.replace(/^\/*/, "/"),
    h = D.useMemo(
      () => ({ basename: f, navigator: o, static: u, future: {} }),
      [f, o, u]
    );
  typeof a == "string" && (a = Ia(a));
  let {
      pathname: y = "/",
      search: m = "",
      hash: p = "",
      state: g = null,
      key: b = "default",
    } = a,
    S = D.useMemo(() => {
      let x = Kn(y, f);
      return x == null
        ? null
        : {
            location: { pathname: x, search: m, hash: p, state: g, key: b },
            navigationType: s,
          };
    }, [f, y, m, p, g, b, s]);
  return (
    Dt(
      S != null,
      `<Router basename="${f}"> is not able to match the URL "${y}${m}${p}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    S == null
      ? null
      : D.createElement(
          Rr.Provider,
          { value: h },
          D.createElement(Pc.Provider, { children: r, value: S })
        )
  );
}
var pc = "get",
  vc = "application/x-www-form-urlencoded";
function $c(n) {
  return n != null && typeof n.tagName == "string";
}
function Hx(n) {
  return $c(n) && n.tagName.toLowerCase() === "button";
}
function Px(n) {
  return $c(n) && n.tagName.toLowerCase() === "form";
}
function $x(n) {
  return $c(n) && n.tagName.toLowerCase() === "input";
}
function Vx(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Fx(n, r) {
  return n.button === 0 && (!r || r === "_self") && !Vx(n);
}
var ac = null;
function Gx() {
  if (ac === null)
    try {
      new FormData(document.createElement("form"), 0), (ac = !1);
    } catch {
      ac = !0;
    }
  return ac;
}
var Qx = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function hh(n) {
  return n != null && !Qx.has(n)
    ? (Dt(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vc}"`
      ),
      null)
    : n;
}
function Yx(n, r) {
  let a, s, o, u, f;
  if (Px(n)) {
    let h = n.getAttribute("action");
    (s = h ? Kn(h, r) : null),
      (a = n.getAttribute("method") || pc),
      (o = hh(n.getAttribute("enctype")) || vc),
      (u = new FormData(n));
  } else if (Hx(n) || ($x(n) && (n.type === "submit" || n.type === "image"))) {
    let h = n.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = n.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((s = y ? Kn(y, r) : null),
      (a = n.getAttribute("formmethod") || h.getAttribute("method") || pc),
      (o =
        hh(n.getAttribute("formenctype")) ||
        hh(h.getAttribute("enctype")) ||
        vc),
      (u = new FormData(h, n)),
      !Gx())
    ) {
      let { name: m, type: p, value: g } = n;
      if (p === "image") {
        let b = m ? `${m}.` : "";
        u.append(`${b}x`, "0"), u.append(`${b}y`, "0");
      } else m && u.append(m, g);
    }
  } else {
    if ($c(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = pc), (s = null), (o = vc), (f = n);
  }
  return (
    u && o === "text/plain" && ((f = u), (u = void 0)),
    { action: s, method: a.toLowerCase(), encType: o, formData: u, body: f }
  );
}
function by(n, r) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(r);
}
async function Kx(n, r) {
  if (n.id in r) return r[n.id];
  try {
    let a = await import(n.module);
    return (r[n.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Xx(n) {
  return n == null
    ? !1
    : n.href == null
    ? n.rel === "preload" &&
      typeof n.imageSrcSet == "string" &&
      typeof n.imageSizes == "string"
    : typeof n.rel == "string" && typeof n.href == "string";
}
async function Zx(n, r, a) {
  let s = await Promise.all(
    n.map(async (o) => {
      let u = r.routes[o.route.id];
      if (u) {
        let f = await Kx(u, a);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return eE(
    s
      .flat(1)
      .filter(Xx)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function Jg(n, r, a, s, o, u) {
  let f = (y, m) => (a[m] ? y.route.id !== a[m].route.id : !0),
    h = (y, m) => {
      var p;
      return (
        a[m].pathname !== y.pathname ||
        (((p = a[m].route.path) == null ? void 0 : p.endsWith("*")) &&
          a[m].params["*"] !== y.params["*"])
      );
    };
  return u === "assets"
    ? r.filter((y, m) => f(y, m) || h(y, m))
    : u === "data"
    ? r.filter((y, m) => {
        var g;
        let p = s.routes[y.route.id];
        if (!p || !p.hasLoader) return !1;
        if (f(y, m) || h(y, m)) return !0;
        if (y.route.shouldRevalidate) {
          let b = y.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: ((g = a[0]) == null ? void 0 : g.params) || {},
            nextUrl: new URL(n, window.origin),
            nextParams: y.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof b == "boolean") return b;
        }
        return !0;
      })
    : [];
}
function Ix(n, r, { includeHydrateFallback: a } = {}) {
  return Jx(
    n
      .map((s) => {
        let o = r.routes[s.route.id];
        if (!o) return [];
        let u = [o.module];
        return (
          o.clientActionModule && (u = u.concat(o.clientActionModule)),
          o.clientLoaderModule && (u = u.concat(o.clientLoaderModule)),
          a &&
            o.hydrateFallbackModule &&
            (u = u.concat(o.hydrateFallbackModule)),
          o.imports && (u = u.concat(o.imports)),
          u
        );
      })
      .flat(1)
  );
}
function Jx(n) {
  return [...new Set(n)];
}
function Wx(n) {
  let r = {},
    a = Object.keys(n).sort();
  for (let s of a) r[s] = n[s];
  return r;
}
function eE(n, r) {
  let a = new Set();
  return (
    new Set(r),
    n.reduce((s, o) => {
      let u = JSON.stringify(Wx(o));
      return a.has(u) || (a.add(u), s.push({ key: u, link: o })), s;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var tE = new Set([100, 101, 204, 205]);
function nE(n, r) {
  let a =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : n;
  return (
    a.pathname === "/"
      ? (a.pathname = "_root.data")
      : r && Kn(a.pathname, r) === "/"
      ? (a.pathname = `${r.replace(/\/$/, "")}/_root.data`)
      : (a.pathname = `${a.pathname.replace(/\/$/, "")}.data`),
    a
  );
}
function Lb() {
  let n = D.useContext(Fi);
  return (
    by(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    n
  );
}
function rE() {
  let n = D.useContext(Lo);
  return (
    by(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    n
  );
}
var _y = D.createContext(void 0);
_y.displayName = "FrameworkContext";
function Bb() {
  let n = D.useContext(_y);
  return (
    by(n, "You must render this element inside a <HydratedRouter> element"), n
  );
}
function aE(n, r) {
  let a = D.useContext(_y),
    [s, o] = D.useState(!1),
    [u, f] = D.useState(!1),
    {
      onFocus: h,
      onBlur: y,
      onMouseEnter: m,
      onMouseLeave: p,
      onTouchStart: g,
    } = r,
    b = D.useRef(null);
  D.useEffect(() => {
    if ((n === "render" && f(!0), n === "viewport")) {
      let N = (U) => {
          U.forEach((Y) => {
            f(Y.isIntersecting);
          });
        },
        C = new IntersectionObserver(N, { threshold: 0.5 });
      return (
        b.current && C.observe(b.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [n]),
    D.useEffect(() => {
      if (s) {
        let N = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(N);
        };
      }
    }, [s]);
  let S = () => {
      o(!0);
    },
    x = () => {
      o(!1), f(!1);
    };
  return a
    ? n !== "intent"
      ? [u, b, {}]
      : [
          u,
          b,
          {
            onFocus: uo(h, S),
            onBlur: uo(y, x),
            onMouseEnter: uo(m, S),
            onMouseLeave: uo(p, x),
            onTouchStart: uo(g, S),
          },
        ]
    : [!1, b, {}];
}
function uo(n, r) {
  return (a) => {
    n && n(a), a.defaultPrevented || r(a);
  };
}
function iE({ page: n, ...r }) {
  let { router: a } = Lb(),
    s = D.useMemo(() => Na(a.routes, n, a.basename), [a.routes, n, a.basename]);
  return s ? D.createElement(lE, { page: n, matches: s, ...r }) : null;
}
function sE(n) {
  let { manifest: r, routeModules: a } = Bb(),
    [s, o] = D.useState([]);
  return (
    D.useEffect(() => {
      let u = !1;
      return (
        Zx(n, r, a).then((f) => {
          u || o(f);
        }),
        () => {
          u = !0;
        }
      );
    }, [n, r, a]),
    s
  );
}
function lE({ page: n, matches: r, ...a }) {
  let s = dr(),
    { manifest: o, routeModules: u } = Bb(),
    { basename: f } = Lb(),
    { loaderData: h, matches: y } = rE(),
    m = D.useMemo(() => Jg(n, r, y, o, s, "data"), [n, r, y, o, s]),
    p = D.useMemo(() => Jg(n, r, y, o, s, "assets"), [n, r, y, o, s]),
    g = D.useMemo(() => {
      if (n === s.pathname + s.search + s.hash) return [];
      let x = new Set(),
        N = !1;
      if (
        (r.forEach((U) => {
          var z;
          let Y = o.routes[U.route.id];
          !Y ||
            !Y.hasLoader ||
            ((!m.some((Q) => Q.route.id === U.route.id) &&
              U.route.id in h &&
              (z = u[U.route.id]) != null &&
              z.shouldRevalidate) ||
            Y.hasClientLoader
              ? (N = !0)
              : x.add(U.route.id));
        }),
        x.size === 0)
      )
        return [];
      let C = nE(n, f);
      return (
        N &&
          x.size > 0 &&
          C.searchParams.set(
            "_routes",
            r
              .filter((U) => x.has(U.route.id))
              .map((U) => U.route.id)
              .join(",")
          ),
        [C.pathname + C.search]
      );
    }, [f, h, s, o, m, r, n, u]),
    b = D.useMemo(() => Ix(p, o), [p, o]),
    S = sE(p);
  return D.createElement(
    D.Fragment,
    null,
    g.map((x) =>
      D.createElement("link", {
        key: x,
        rel: "prefetch",
        as: "fetch",
        href: x,
        ...a,
      })
    ),
    b.map((x) =>
      D.createElement("link", { key: x, rel: "modulepreload", href: x, ...a })
    ),
    S.map(({ key: x, link: N }) => D.createElement("link", { key: x, ...N }))
  );
}
function oE(...n) {
  return (r) => {
    n.forEach((a) => {
      typeof a == "function" ? a(r) : a != null && (a.current = r);
    });
  };
}
var qb =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  qb && (window.__reactRouterVersion = "7.6.2");
} catch {}
function uE(n, r) {
  return Z1({
    basename: r == null ? void 0 : r.basename,
    unstable_getContext: r == null ? void 0 : r.unstable_getContext,
    future: r == null ? void 0 : r.future,
    history: v1({ window: r == null ? void 0 : r.window }),
    hydrationData: cE(),
    routes: n,
    mapRouteProperties: Mx,
    hydrationRouteProperties: Nx,
    dataStrategy: r == null ? void 0 : r.dataStrategy,
    patchRoutesOnNavigation: r == null ? void 0 : r.patchRoutesOnNavigation,
    window: r == null ? void 0 : r.window,
  }).initialize();
}
function cE() {
  let n = window == null ? void 0 : window.__staticRouterHydrationData;
  return n && n.errors && (n = { ...n, errors: fE(n.errors) }), n;
}
function fE(n) {
  if (!n) return null;
  let r = Object.entries(n),
    a = {};
  for (let [s, o] of r)
    if (o && o.__type === "RouteErrorResponse")
      a[s] = new xc(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let u = window[o.__subType];
        if (typeof u == "function")
          try {
            let f = new u(o.message);
            (f.stack = ""), (a[s] = f);
          } catch {}
      }
      if (a[s] == null) {
        let u = new Error(o.message);
        (u.stack = ""), (a[s] = u);
      }
    } else a[s] = o;
  return a;
}
var Hb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Kt = D.forwardRef(function (
    {
      onClick: r,
      discover: a = "render",
      prefetch: s = "none",
      relative: o,
      reloadDocument: u,
      replace: f,
      state: h,
      target: y,
      to: m,
      preventScrollReset: p,
      viewTransition: g,
      ...b
    },
    S
  ) {
    let { basename: x } = D.useContext(Rr),
      N = typeof m == "string" && Hb.test(m),
      C,
      U = !1;
    if (typeof m == "string" && N && ((C = m), qb))
      try {
        let te = new URL(window.location.href),
          be = m.startsWith("//") ? new URL(te.protocol + m) : new URL(m),
          Le = Kn(be.pathname, x);
        be.origin === te.origin && Le != null
          ? (m = Le + be.search + be.hash)
          : (U = !0);
      } catch {
        Dt(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let Y = px(m, { relative: o }),
      [z, Q, P] = aE(s, b),
      j = mE(m, {
        replace: f,
        state: h,
        target: y,
        preventScrollReset: p,
        relative: o,
        viewTransition: g,
      });
    function ie(te) {
      r && r(te), te.defaultPrevented || j(te);
    }
    let ue = D.createElement("a", {
      ...b,
      ...P,
      href: C || Y,
      onClick: U || u ? r : ie,
      ref: oE(S, Q),
      target: y,
      "data-discover": !N && a === "render" ? "true" : void 0,
    });
    return z && !N
      ? D.createElement(D.Fragment, null, ue, D.createElement(iE, { page: Y }))
      : ue;
  });
Kt.displayName = "Link";
var dE = D.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: a = !1,
    className: s = "",
    end: o = !1,
    style: u,
    to: f,
    viewTransition: h,
    children: y,
    ...m
  },
  p
) {
  let g = qo(f, { relative: m.relative }),
    b = dr(),
    S = D.useContext(Lo),
    { navigator: x, basename: N } = D.useContext(Rr),
    C = S != null && _E(g) && h === !0,
    U = x.encodeLocation ? x.encodeLocation(g).pathname : g.pathname,
    Y = b.pathname,
    z =
      S && S.navigation && S.navigation.location
        ? S.navigation.location.pathname
        : null;
  a ||
    ((Y = Y.toLowerCase()),
    (z = z ? z.toLowerCase() : null),
    (U = U.toLowerCase())),
    z && N && (z = Kn(z, N) || z);
  const Q = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
  let P = Y === U || (!o && Y.startsWith(U) && Y.charAt(Q) === "/"),
    j =
      z != null &&
      (z === U || (!o && z.startsWith(U) && z.charAt(U.length) === "/")),
    ie = { isActive: P, isPending: j, isTransitioning: C },
    ue = P ? r : void 0,
    te;
  typeof s == "function"
    ? (te = s(ie))
    : (te = [
        s,
        P ? "active" : null,
        j ? "pending" : null,
        C ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let be = typeof u == "function" ? u(ie) : u;
  return D.createElement(
    Kt,
    {
      ...m,
      "aria-current": ue,
      className: te,
      ref: p,
      style: be,
      to: f,
      viewTransition: h,
    },
    typeof y == "function" ? y(ie) : y
  );
});
dE.displayName = "NavLink";
var hE = D.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: r,
      navigate: a,
      reloadDocument: s,
      replace: o,
      state: u,
      method: f = pc,
      action: h,
      onSubmit: y,
      relative: m,
      preventScrollReset: p,
      viewTransition: g,
      ...b
    },
    S
  ) => {
    let x = gE(),
      N = bE(h, { relative: m }),
      C = f.toLowerCase() === "get" ? "get" : "post",
      U = typeof h == "string" && Hb.test(h),
      Y = (z) => {
        if ((y && y(z), z.defaultPrevented)) return;
        z.preventDefault();
        let Q = z.nativeEvent.submitter,
          P = (Q == null ? void 0 : Q.getAttribute("formmethod")) || f;
        x(Q || z.currentTarget, {
          fetcherKey: r,
          method: P,
          navigate: a,
          replace: o,
          state: u,
          relative: m,
          preventScrollReset: p,
          viewTransition: g,
        });
      };
    return D.createElement("form", {
      ref: S,
      method: C,
      action: N,
      onSubmit: s ? y : Y,
      ...b,
      "data-discover": !U && n === "render" ? "true" : void 0,
    });
  }
);
hE.displayName = "Form";
function yE(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Pb(n) {
  let r = D.useContext(Fi);
  return Xe(r, yE(n)), r;
}
function mE(
  n,
  {
    target: r,
    replace: a,
    state: s,
    preventScrollReset: o,
    relative: u,
    viewTransition: f,
  } = {}
) {
  let h = hr(),
    y = dr(),
    m = qo(n, { relative: u });
  return D.useCallback(
    (p) => {
      if (Fx(p, r)) {
        p.preventDefault();
        let g = a !== void 0 ? a : Ka(y) === Ka(m);
        h(n, {
          replace: g,
          state: s,
          preventScrollReset: o,
          relative: u,
          viewTransition: f,
        });
      }
    },
    [y, h, m, a, s, r, n, o, u, f]
  );
}
var pE = 0,
  vE = () => `__${String(++pE)}__`;
function gE() {
  let { router: n } = Pb("useSubmit"),
    { basename: r } = D.useContext(Rr),
    a = jx();
  return D.useCallback(
    async (s, o = {}) => {
      let { action: u, method: f, encType: h, formData: y, body: m } = Yx(s, r);
      if (o.navigate === !1) {
        let p = o.fetcherKey || vE();
        await n.fetch(p, a, o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: y,
          body: m,
          formMethod: o.method || f,
          formEncType: o.encType || h,
          flushSync: o.flushSync,
        });
      } else
        await n.navigate(o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: y,
          body: m,
          formMethod: o.method || f,
          formEncType: o.encType || h,
          replace: o.replace,
          state: o.state,
          fromRouteId: a,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [n, r, a]
  );
}
function bE(n, { relative: r } = {}) {
  let { basename: a } = D.useContext(Rr),
    s = D.useContext(Or);
  Xe(s, "useFormAction must be used inside a RouteContext");
  let [o] = s.matches.slice(-1),
    u = { ...qo(n || ".", { relative: r }) },
    f = dr();
  if (n == null) {
    u.search = f.search;
    let h = new URLSearchParams(u.search),
      y = h.getAll("index");
    if (y.some((p) => p === "")) {
      h.delete("index"),
        y.filter((g) => g).forEach((g) => h.append("index", g));
      let p = h.toString();
      u.search = p ? `?${p}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      o.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (u.pathname = u.pathname === "/" ? a : Tr([a, u.pathname])),
    Ka(u)
  );
}
function _E(n, r = {}) {
  let a = D.useContext(my);
  Xe(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = Pb("useViewTransitionState"),
    o = qo(n, { relative: r.relative });
  if (!a.isTransitioning) return !1;
  let u = Kn(a.currentLocation.pathname, s) || a.currentLocation.pathname,
    f = Kn(a.nextLocation.pathname, s) || a.nextLocation.pathname;
  return Sc(o.pathname, f) != null || Sc(o.pathname, u) != null;
}
[...tE];
var wE = vb();
/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function SE(n) {
  return D.createElement(kx, { flushSync: wE.flushSync, ...n });
}
var il = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          this.listeners.delete(n), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Hi = typeof window > "u" || "Deno" in globalThis;
function ln() {}
function xE(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function Uh(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function $b(n, r) {
  return Math.max(n + (r || 0) - Date.now(), 0);
}
function Ya(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function or(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function Wg(n, r) {
  const {
    type: a = "all",
    exact: s,
    fetchStatus: o,
    predicate: u,
    queryKey: f,
    stale: h,
  } = n;
  if (f) {
    if (s) {
      if (r.queryHash !== wy(f, r.options)) return !1;
    } else if (!jo(r.queryKey, f)) return !1;
  }
  if (a !== "all") {
    const y = r.isActive();
    if ((a === "active" && !y) || (a === "inactive" && y)) return !1;
  }
  return !(
    (typeof h == "boolean" && r.isStale() !== h) ||
    (o && o !== r.state.fetchStatus) ||
    (u && !u(r))
  );
}
function e0(n, r) {
  const { exact: a, status: s, predicate: o, mutationKey: u } = n;
  if (u) {
    if (!r.options.mutationKey) return !1;
    if (a) {
      if (Pi(r.options.mutationKey) !== Pi(u)) return !1;
    } else if (!jo(r.options.mutationKey, u)) return !1;
  }
  return !((s && r.state.status !== s) || (o && !o(r)));
}
function wy(n, r) {
  return ((r == null ? void 0 : r.queryKeyHashFn) || Pi)(n);
}
function Pi(n) {
  return JSON.stringify(n, (r, a) =>
    kh(a)
      ? Object.keys(a)
          .sort()
          .reduce((s, o) => ((s[o] = a[o]), s), {})
      : a
  );
}
function jo(n, r) {
  return n === r
    ? !0
    : typeof n != typeof r
    ? !1
    : n && r && typeof n == "object" && typeof r == "object"
    ? Object.keys(r).every((a) => jo(n[a], r[a]))
    : !1;
}
function Vb(n, r) {
  if (n === r) return n;
  const a = t0(n) && t0(r);
  if (a || (kh(n) && kh(r))) {
    const s = a ? n : Object.keys(n),
      o = s.length,
      u = a ? r : Object.keys(r),
      f = u.length,
      h = a ? [] : {},
      y = new Set(s);
    let m = 0;
    for (let p = 0; p < f; p++) {
      const g = a ? p : u[p];
      ((!a && y.has(g)) || a) && n[g] === void 0 && r[g] === void 0
        ? ((h[g] = void 0), m++)
        : ((h[g] = Vb(n[g], r[g])), h[g] === n[g] && n[g] !== void 0 && m++);
    }
    return o === f && m === o ? n : h;
  }
  return r;
}
function Tc(n, r) {
  if (!r || Object.keys(n).length !== Object.keys(r).length) return !1;
  for (const a in n) if (n[a] !== r[a]) return !1;
  return !0;
}
function t0(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function kh(n) {
  if (!n0(n)) return !1;
  const r = n.constructor;
  if (r === void 0) return !0;
  const a = r.prototype;
  return !(
    !n0(a) ||
    !a.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function n0(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function EE(n) {
  return new Promise((r) => {
    setTimeout(r, n);
  });
}
function zh(n, r, a) {
  return typeof a.structuralSharing == "function"
    ? a.structuralSharing(n, r)
    : a.structuralSharing !== !1
    ? Vb(n, r)
    : r;
}
function TE(n, r, a = 0) {
  const s = [...n, r];
  return a && s.length > a ? s.slice(1) : s;
}
function RE(n, r, a = 0) {
  const s = [r, ...n];
  return a && s.length > a ? s.slice(0, -1) : s;
}
var Sy = Symbol();
function Fb(n, r) {
  return !n.queryFn && r != null && r.initialPromise
    ? () => r.initialPromise
    : !n.queryFn || n.queryFn === Sy
    ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
    : n.queryFn;
}
function Gb(n, r) {
  return typeof n == "function" ? n(...r) : !!n;
}
var Mi,
  La,
  Fs,
  sb,
  OE =
    ((sb = class extends il {
      constructor() {
        super();
        Ae(this, Mi);
        Ae(this, La);
        Ae(this, Fs);
        de(this, Fs, (r) => {
          if (!Hi && window.addEventListener) {
            const a = () => r();
            return (
              window.addEventListener("visibilitychange", a, !1),
              () => {
                window.removeEventListener("visibilitychange", a);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, La) || this.setEventListener(R(this, Fs));
      }
      onUnsubscribe() {
        var r;
        this.hasListeners() ||
          ((r = R(this, La)) == null || r.call(this), de(this, La, void 0));
      }
      setEventListener(r) {
        var a;
        de(this, Fs, r),
          (a = R(this, La)) == null || a.call(this),
          de(
            this,
            La,
            r((s) => {
              typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
            })
          );
      }
      setFocused(r) {
        R(this, Mi) !== r && (de(this, Mi, r), this.onFocus());
      }
      onFocus() {
        const r = this.isFocused();
        this.listeners.forEach((a) => {
          a(r);
        });
      }
      isFocused() {
        var r;
        return typeof R(this, Mi) == "boolean"
          ? R(this, Mi)
          : ((r = globalThis.document) == null ? void 0 : r.visibilityState) !==
              "hidden";
      }
    }),
    (Mi = new WeakMap()),
    (La = new WeakMap()),
    (Fs = new WeakMap()),
    sb),
  xy = new OE(),
  Gs,
  Ba,
  Qs,
  lb,
  AE =
    ((lb = class extends il {
      constructor() {
        super();
        Ae(this, Gs, !0);
        Ae(this, Ba);
        Ae(this, Qs);
        de(this, Qs, (r) => {
          if (!Hi && window.addEventListener) {
            const a = () => r(!0),
              s = () => r(!1);
            return (
              window.addEventListener("online", a, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", a),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, Ba) || this.setEventListener(R(this, Qs));
      }
      onUnsubscribe() {
        var r;
        this.hasListeners() ||
          ((r = R(this, Ba)) == null || r.call(this), de(this, Ba, void 0));
      }
      setEventListener(r) {
        var a;
        de(this, Qs, r),
          (a = R(this, Ba)) == null || a.call(this),
          de(this, Ba, r(this.setOnline.bind(this)));
      }
      setOnline(r) {
        R(this, Gs) !== r &&
          (de(this, Gs, r),
          this.listeners.forEach((s) => {
            s(r);
          }));
      }
      isOnline() {
        return R(this, Gs);
      }
    }),
    (Gs = new WeakMap()),
    (Ba = new WeakMap()),
    (Qs = new WeakMap()),
    lb),
  Rc = new AE();
function Lh() {
  let n, r;
  const a = new Promise((o, u) => {
    (n = o), (r = u);
  });
  (a.status = "pending"), a.catch(() => {});
  function s(o) {
    Object.assign(a, o), delete a.resolve, delete a.reject;
  }
  return (
    (a.resolve = (o) => {
      s({ status: "fulfilled", value: o }), n(o);
    }),
    (a.reject = (o) => {
      s({ status: "rejected", reason: o }), r(o);
    }),
    a
  );
}
function jE(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function Qb(n) {
  return (n ?? "online") === "online" ? Rc.isOnline() : !0;
}
var Yb = class extends Error {
  constructor(n) {
    super("CancelledError"),
      (this.revert = n == null ? void 0 : n.revert),
      (this.silent = n == null ? void 0 : n.silent);
  }
};
function yh(n) {
  return n instanceof Yb;
}
function Kb(n) {
  let r = !1,
    a = 0,
    s = !1,
    o;
  const u = Lh(),
    f = (N) => {
      var C;
      s || (b(new Yb(N)), (C = n.abort) == null || C.call(n));
    },
    h = () => {
      r = !0;
    },
    y = () => {
      r = !1;
    },
    m = () =>
      xy.isFocused() &&
      (n.networkMode === "always" || Rc.isOnline()) &&
      n.canRun(),
    p = () => Qb(n.networkMode) && n.canRun(),
    g = (N) => {
      var C;
      s ||
        ((s = !0),
        (C = n.onSuccess) == null || C.call(n, N),
        o == null || o(),
        u.resolve(N));
    },
    b = (N) => {
      var C;
      s ||
        ((s = !0),
        (C = n.onError) == null || C.call(n, N),
        o == null || o(),
        u.reject(N));
    },
    S = () =>
      new Promise((N) => {
        var C;
        (o = (U) => {
          (s || m()) && N(U);
        }),
          (C = n.onPause) == null || C.call(n);
      }).then(() => {
        var N;
        (o = void 0), s || (N = n.onContinue) == null || N.call(n);
      }),
    x = () => {
      if (s) return;
      let N;
      const C = a === 0 ? n.initialPromise : void 0;
      try {
        N = C ?? n.fn();
      } catch (U) {
        N = Promise.reject(U);
      }
      Promise.resolve(N)
        .then(g)
        .catch((U) => {
          var j;
          if (s) return;
          const Y = n.retry ?? (Hi ? 0 : 3),
            z = n.retryDelay ?? jE,
            Q = typeof z == "function" ? z(a, U) : z,
            P =
              Y === !0 ||
              (typeof Y == "number" && a < Y) ||
              (typeof Y == "function" && Y(a, U));
          if (r || !P) {
            b(U);
            return;
          }
          a++,
            (j = n.onFail) == null || j.call(n, a, U),
            EE(Q)
              .then(() => (m() ? void 0 : S()))
              .then(() => {
                r ? b(U) : x();
              });
        });
    };
  return {
    promise: u,
    cancel: f,
    continue: () => (o == null || o(), u),
    cancelRetry: h,
    continueRetry: y,
    canStart: p,
    start: () => (p() ? x() : S().then(x), u),
  };
}
var CE = (n) => setTimeout(n, 0);
function DE() {
  let n = [],
    r = 0,
    a = (h) => {
      h();
    },
    s = (h) => {
      h();
    },
    o = CE;
  const u = (h) => {
      r
        ? n.push(h)
        : o(() => {
            a(h);
          });
    },
    f = () => {
      const h = n;
      (n = []),
        h.length &&
          o(() => {
            s(() => {
              h.forEach((y) => {
                a(y);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let y;
      r++;
      try {
        y = h();
      } finally {
        r--, r || f();
      }
      return y;
    },
    batchCalls:
      (h) =>
      (...y) => {
        u(() => {
          h(...y);
        });
      },
    schedule: u,
    setNotifyFunction: (h) => {
      a = h;
    },
    setBatchNotifyFunction: (h) => {
      s = h;
    },
    setScheduler: (h) => {
      o = h;
    },
  };
}
var Lt = DE(),
  Ni,
  ob,
  Xb =
    ((ob = class {
      constructor() {
        Ae(this, Ni);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Uh(this.gcTime) &&
            de(
              this,
              Ni,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(n) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          n ?? (Hi ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        R(this, Ni) && (clearTimeout(R(this, Ni)), de(this, Ni, void 0));
      }
    }),
    (Ni = new WeakMap()),
    ob),
  Ys,
  Ks,
  Qn,
  Ui,
  Wt,
  No,
  ki,
  ir,
  Yr,
  ub,
  ME =
    ((ub = class extends Xb {
      constructor(r) {
        super();
        Ae(this, ir);
        Ae(this, Ys);
        Ae(this, Ks);
        Ae(this, Qn);
        Ae(this, Ui);
        Ae(this, Wt);
        Ae(this, No);
        Ae(this, ki);
        de(this, ki, !1),
          de(this, No, r.defaultOptions),
          this.setOptions(r.options),
          (this.observers = []),
          de(this, Ui, r.client),
          de(this, Qn, R(this, Ui).getQueryCache()),
          (this.queryKey = r.queryKey),
          (this.queryHash = r.queryHash),
          de(this, Ys, NE(this.options)),
          (this.state = r.state ?? R(this, Ys)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var r;
        return (r = R(this, Wt)) == null ? void 0 : r.promise;
      }
      setOptions(r) {
        (this.options = { ...R(this, No), ...r }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          R(this, Qn).remove(this);
      }
      setData(r, a) {
        const s = zh(this.state.data, r, this.options);
        return (
          Pe(this, ir, Yr).call(this, {
            data: s,
            type: "success",
            dataUpdatedAt: a == null ? void 0 : a.updatedAt,
            manual: a == null ? void 0 : a.manual,
          }),
          s
        );
      }
      setState(r, a) {
        Pe(this, ir, Yr).call(this, {
          type: "setState",
          state: r,
          setStateOptions: a,
        });
      }
      cancel(r) {
        var s, o;
        const a = (s = R(this, Wt)) == null ? void 0 : s.promise;
        return (
          (o = R(this, Wt)) == null || o.cancel(r),
          a ? a.then(ln).catch(ln) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(R(this, Ys));
      }
      isActive() {
        return this.observers.some((r) => or(r.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Sy ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (r) => Ya(r.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((r) => r.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(r = 0) {
        return this.state.data === void 0
          ? !0
          : r === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !$b(this.state.dataUpdatedAt, r);
      }
      onFocus() {
        var a;
        const r = this.observers.find((s) => s.shouldFetchOnWindowFocus());
        r == null || r.refetch({ cancelRefetch: !1 }),
          (a = R(this, Wt)) == null || a.continue();
      }
      onOnline() {
        var a;
        const r = this.observers.find((s) => s.shouldFetchOnReconnect());
        r == null || r.refetch({ cancelRefetch: !1 }),
          (a = R(this, Wt)) == null || a.continue();
      }
      addObserver(r) {
        this.observers.includes(r) ||
          (this.observers.push(r),
          this.clearGcTimeout(),
          R(this, Qn).notify({
            type: "observerAdded",
            query: this,
            observer: r,
          }));
      }
      removeObserver(r) {
        this.observers.includes(r) &&
          ((this.observers = this.observers.filter((a) => a !== r)),
          this.observers.length ||
            (R(this, Wt) &&
              (R(this, ki)
                ? R(this, Wt).cancel({ revert: !0 })
                : R(this, Wt).cancelRetry()),
            this.scheduleGc()),
          R(this, Qn).notify({
            type: "observerRemoved",
            query: this,
            observer: r,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Pe(this, ir, Yr).call(this, { type: "invalidate" });
      }
      fetch(r, a) {
        var m, p, g;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && a != null && a.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (R(this, Wt))
            return R(this, Wt).continueRetry(), R(this, Wt).promise;
        }
        if ((r && this.setOptions(r), !this.options.queryFn)) {
          const b = this.observers.find((S) => S.options.queryFn);
          b && this.setOptions(b.options);
        }
        const s = new AbortController(),
          o = (b) => {
            Object.defineProperty(b, "signal", {
              enumerable: !0,
              get: () => (de(this, ki, !0), s.signal),
            });
          },
          u = () => {
            const b = Fb(this.options, a),
              x = (() => {
                const N = {
                  client: R(this, Ui),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return o(N), N;
              })();
            return (
              de(this, ki, !1),
              this.options.persister ? this.options.persister(b, x, this) : b(x)
            );
          },
          h = (() => {
            const b = {
              fetchOptions: a,
              options: this.options,
              queryKey: this.queryKey,
              client: R(this, Ui),
              state: this.state,
              fetchFn: u,
            };
            return o(b), b;
          })();
        (m = this.options.behavior) == null || m.onFetch(h, this),
          de(this, Ks, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((p = h.fetchOptions) == null ? void 0 : p.meta)) &&
            Pe(this, ir, Yr).call(this, {
              type: "fetch",
              meta: (g = h.fetchOptions) == null ? void 0 : g.meta,
            });
        const y = (b) => {
          var S, x, N, C;
          (yh(b) && b.silent) ||
            Pe(this, ir, Yr).call(this, { type: "error", error: b }),
            yh(b) ||
              ((x = (S = R(this, Qn).config).onError) == null ||
                x.call(S, b, this),
              (C = (N = R(this, Qn).config).onSettled) == null ||
                C.call(N, this.state.data, b, this)),
            this.scheduleGc();
        };
        return (
          de(
            this,
            Wt,
            Kb({
              initialPromise: a == null ? void 0 : a.initialPromise,
              fn: h.fetchFn,
              abort: s.abort.bind(s),
              onSuccess: (b) => {
                var S, x, N, C;
                if (b === void 0) {
                  y(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(b);
                } catch (U) {
                  y(U);
                  return;
                }
                (x = (S = R(this, Qn).config).onSuccess) == null ||
                  x.call(S, b, this),
                  (C = (N = R(this, Qn).config).onSettled) == null ||
                    C.call(N, b, this.state.error, this),
                  this.scheduleGc();
              },
              onError: y,
              onFail: (b, S) => {
                Pe(this, ir, Yr).call(this, {
                  type: "failed",
                  failureCount: b,
                  error: S,
                });
              },
              onPause: () => {
                Pe(this, ir, Yr).call(this, { type: "pause" });
              },
              onContinue: () => {
                Pe(this, ir, Yr).call(this, { type: "continue" });
              },
              retry: h.options.retry,
              retryDelay: h.options.retryDelay,
              networkMode: h.options.networkMode,
              canRun: () => !0,
            })
          ),
          R(this, Wt).start()
        );
      }
    }),
    (Ys = new WeakMap()),
    (Ks = new WeakMap()),
    (Qn = new WeakMap()),
    (Ui = new WeakMap()),
    (Wt = new WeakMap()),
    (No = new WeakMap()),
    (ki = new WeakMap()),
    (ir = new WeakSet()),
    (Yr = function (r) {
      const a = (s) => {
        switch (r.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: r.failureCount,
              fetchFailureReason: r.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...Zb(s.data, this.options),
              fetchMeta: r.meta ?? null,
            };
          case "success":
            return {
              ...s,
              data: r.data,
              dataUpdateCount: s.dataUpdateCount + 1,
              dataUpdatedAt: r.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!r.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = r.error;
            return yh(o) && o.revert && R(this, Ks)
              ? { ...R(this, Ks), fetchStatus: "idle" }
              : {
                  ...s,
                  error: o,
                  errorUpdateCount: s.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: s.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...r.state };
        }
      };
      (this.state = a(this.state)),
        Lt.batch(() => {
          this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            R(this, Qn).notify({ query: this, type: "updated", action: r });
        });
    }),
    ub);
function Zb(n, r) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Qb(r.networkMode) ? "fetching" : "paused",
    ...(n === void 0 && { error: null, status: "pending" }),
  };
}
function NE(n) {
  const r =
      typeof n.initialData == "function" ? n.initialData() : n.initialData,
    a = r !== void 0,
    s = a
      ? typeof n.initialDataUpdatedAt == "function"
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: r,
    dataUpdateCount: 0,
    dataUpdatedAt: a ? s ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: a ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var wr,
  cb,
  UE =
    ((cb = class extends il {
      constructor(r = {}) {
        super();
        Ae(this, wr);
        (this.config = r), de(this, wr, new Map());
      }
      build(r, a, s) {
        const o = a.queryKey,
          u = a.queryHash ?? wy(o, a);
        let f = this.get(u);
        return (
          f ||
            ((f = new ME({
              client: r,
              queryKey: o,
              queryHash: u,
              options: r.defaultQueryOptions(a),
              state: s,
              defaultOptions: r.getQueryDefaults(o),
            })),
            this.add(f)),
          f
        );
      }
      add(r) {
        R(this, wr).has(r.queryHash) ||
          (R(this, wr).set(r.queryHash, r),
          this.notify({ type: "added", query: r }));
      }
      remove(r) {
        const a = R(this, wr).get(r.queryHash);
        a &&
          (r.destroy(),
          a === r && R(this, wr).delete(r.queryHash),
          this.notify({ type: "removed", query: r }));
      }
      clear() {
        Lt.batch(() => {
          this.getAll().forEach((r) => {
            this.remove(r);
          });
        });
      }
      get(r) {
        return R(this, wr).get(r);
      }
      getAll() {
        return [...R(this, wr).values()];
      }
      find(r) {
        const a = { exact: !0, ...r };
        return this.getAll().find((s) => Wg(a, s));
      }
      findAll(r = {}) {
        const a = this.getAll();
        return Object.keys(r).length > 0 ? a.filter((s) => Wg(r, s)) : a;
      }
      notify(r) {
        Lt.batch(() => {
          this.listeners.forEach((a) => {
            a(r);
          });
        });
      }
      onFocus() {
        Lt.batch(() => {
          this.getAll().forEach((r) => {
            r.onFocus();
          });
        });
      }
      onOnline() {
        Lt.batch(() => {
          this.getAll().forEach((r) => {
            r.onOnline();
          });
        });
      }
    }),
    (wr = new WeakMap()),
    cb),
  Sr,
  an,
  zi,
  xr,
  Ca,
  fb,
  kE =
    ((fb = class extends Xb {
      constructor(r) {
        super();
        Ae(this, xr);
        Ae(this, Sr);
        Ae(this, an);
        Ae(this, zi);
        (this.mutationId = r.mutationId),
          de(this, an, r.mutationCache),
          de(this, Sr, []),
          (this.state = r.state || Ib()),
          this.setOptions(r.options),
          this.scheduleGc();
      }
      setOptions(r) {
        (this.options = r), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(r) {
        R(this, Sr).includes(r) ||
          (R(this, Sr).push(r),
          this.clearGcTimeout(),
          R(this, an).notify({
            type: "observerAdded",
            mutation: this,
            observer: r,
          }));
      }
      removeObserver(r) {
        de(
          this,
          Sr,
          R(this, Sr).filter((a) => a !== r)
        ),
          this.scheduleGc(),
          R(this, an).notify({
            type: "observerRemoved",
            mutation: this,
            observer: r,
          });
      }
      optionalRemove() {
        R(this, Sr).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : R(this, an).remove(this));
      }
      continue() {
        var r;
        return (
          ((r = R(this, zi)) == null ? void 0 : r.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(r) {
        var u, f, h, y, m, p, g, b, S, x, N, C, U, Y, z, Q, P, j, ie, ue;
        const a = () => {
          Pe(this, xr, Ca).call(this, { type: "continue" });
        };
        de(
          this,
          zi,
          Kb({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(r)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (te, be) => {
              Pe(this, xr, Ca).call(this, {
                type: "failed",
                failureCount: te,
                error: be,
              });
            },
            onPause: () => {
              Pe(this, xr, Ca).call(this, { type: "pause" });
            },
            onContinue: a,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, an).canRun(this),
          })
        );
        const s = this.state.status === "pending",
          o = !R(this, zi).canStart();
        try {
          if (s) a();
          else {
            Pe(this, xr, Ca).call(this, {
              type: "pending",
              variables: r,
              isPaused: o,
            }),
              await ((f = (u = R(this, an).config).onMutate) == null
                ? void 0
                : f.call(u, r, this));
            const be = await ((y = (h = this.options).onMutate) == null
              ? void 0
              : y.call(h, r));
            be !== this.state.context &&
              Pe(this, xr, Ca).call(this, {
                type: "pending",
                context: be,
                variables: r,
                isPaused: o,
              });
          }
          const te = await R(this, zi).start();
          return (
            await ((p = (m = R(this, an).config).onSuccess) == null
              ? void 0
              : p.call(m, te, r, this.state.context, this)),
            await ((b = (g = this.options).onSuccess) == null
              ? void 0
              : b.call(g, te, r, this.state.context)),
            await ((x = (S = R(this, an).config).onSettled) == null
              ? void 0
              : x.call(
                  S,
                  te,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((C = (N = this.options).onSettled) == null
              ? void 0
              : C.call(N, te, null, r, this.state.context)),
            Pe(this, xr, Ca).call(this, { type: "success", data: te }),
            te
          );
        } catch (te) {
          try {
            throw (
              (await ((Y = (U = R(this, an).config).onError) == null
                ? void 0
                : Y.call(U, te, r, this.state.context, this)),
              await ((Q = (z = this.options).onError) == null
                ? void 0
                : Q.call(z, te, r, this.state.context)),
              await ((j = (P = R(this, an).config).onSettled) == null
                ? void 0
                : j.call(
                    P,
                    void 0,
                    te,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((ue = (ie = this.options).onSettled) == null
                ? void 0
                : ue.call(ie, void 0, te, r, this.state.context)),
              te)
            );
          } finally {
            Pe(this, xr, Ca).call(this, { type: "error", error: te });
          }
        } finally {
          R(this, an).runNext(this);
        }
      }
    }),
    (Sr = new WeakMap()),
    (an = new WeakMap()),
    (zi = new WeakMap()),
    (xr = new WeakSet()),
    (Ca = function (r) {
      const a = (s) => {
        switch (r.type) {
          case "failed":
            return {
              ...s,
              failureCount: r.failureCount,
              failureReason: r.error,
            };
          case "pause":
            return { ...s, isPaused: !0 };
          case "continue":
            return { ...s, isPaused: !1 };
          case "pending":
            return {
              ...s,
              context: r.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: r.isPaused,
              status: "pending",
              variables: r.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...s,
              data: r.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...s,
              data: void 0,
              error: r.error,
              failureCount: s.failureCount + 1,
              failureReason: r.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = a(this.state)),
        Lt.batch(() => {
          R(this, Sr).forEach((s) => {
            s.onMutationUpdate(r);
          }),
            R(this, an).notify({ mutation: this, type: "updated", action: r });
        });
    }),
    fb);
function Ib() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Zr,
  sr,
  Uo,
  db,
  zE =
    ((db = class extends il {
      constructor(r = {}) {
        super();
        Ae(this, Zr);
        Ae(this, sr);
        Ae(this, Uo);
        (this.config = r),
          de(this, Zr, new Set()),
          de(this, sr, new Map()),
          de(this, Uo, 0);
      }
      build(r, a, s) {
        const o = new kE({
          mutationCache: this,
          mutationId: ++nc(this, Uo)._,
          options: r.defaultMutationOptions(a),
          state: s,
        });
        return this.add(o), o;
      }
      add(r) {
        R(this, Zr).add(r);
        const a = ic(r);
        if (typeof a == "string") {
          const s = R(this, sr).get(a);
          s ? s.push(r) : R(this, sr).set(a, [r]);
        }
        this.notify({ type: "added", mutation: r });
      }
      remove(r) {
        if (R(this, Zr).delete(r)) {
          const a = ic(r);
          if (typeof a == "string") {
            const s = R(this, sr).get(a);
            if (s)
              if (s.length > 1) {
                const o = s.indexOf(r);
                o !== -1 && s.splice(o, 1);
              } else s[0] === r && R(this, sr).delete(a);
          }
        }
        this.notify({ type: "removed", mutation: r });
      }
      canRun(r) {
        const a = ic(r);
        if (typeof a == "string") {
          const s = R(this, sr).get(a),
            o =
              s == null ? void 0 : s.find((u) => u.state.status === "pending");
          return !o || o === r;
        } else return !0;
      }
      runNext(r) {
        var s;
        const a = ic(r);
        if (typeof a == "string") {
          const o =
            (s = R(this, sr).get(a)) == null
              ? void 0
              : s.find((u) => u !== r && u.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Lt.batch(() => {
          R(this, Zr).forEach((r) => {
            this.notify({ type: "removed", mutation: r });
          }),
            R(this, Zr).clear(),
            R(this, sr).clear();
        });
      }
      getAll() {
        return Array.from(R(this, Zr));
      }
      find(r) {
        const a = { exact: !0, ...r };
        return this.getAll().find((s) => e0(a, s));
      }
      findAll(r = {}) {
        return this.getAll().filter((a) => e0(r, a));
      }
      notify(r) {
        Lt.batch(() => {
          this.listeners.forEach((a) => {
            a(r);
          });
        });
      }
      resumePausedMutations() {
        const r = this.getAll().filter((a) => a.state.isPaused);
        return Lt.batch(() =>
          Promise.all(r.map((a) => a.continue().catch(ln)))
        );
      }
    }),
    (Zr = new WeakMap()),
    (sr = new WeakMap()),
    (Uo = new WeakMap()),
    db);
function ic(n) {
  var r;
  return (r = n.options.scope) == null ? void 0 : r.id;
}
function r0(n) {
  return {
    onFetch: (r, a) => {
      var p, g, b, S, x;
      const s = r.options,
        o =
          (b =
            (g = (p = r.fetchOptions) == null ? void 0 : p.meta) == null
              ? void 0
              : g.fetchMore) == null
            ? void 0
            : b.direction,
        u = ((S = r.state.data) == null ? void 0 : S.pages) || [],
        f = ((x = r.state.data) == null ? void 0 : x.pageParams) || [];
      let h = { pages: [], pageParams: [] },
        y = 0;
      const m = async () => {
        let N = !1;
        const C = (z) => {
            Object.defineProperty(z, "signal", {
              enumerable: !0,
              get: () => (
                r.signal.aborted
                  ? (N = !0)
                  : r.signal.addEventListener("abort", () => {
                      N = !0;
                    }),
                r.signal
              ),
            });
          },
          U = Fb(r.options, r.fetchOptions),
          Y = async (z, Q, P) => {
            if (N) return Promise.reject();
            if (Q == null && z.pages.length) return Promise.resolve(z);
            const ie = (() => {
                const Le = {
                  client: r.client,
                  queryKey: r.queryKey,
                  pageParam: Q,
                  direction: P ? "backward" : "forward",
                  meta: r.options.meta,
                };
                return C(Le), Le;
              })(),
              ue = await U(ie),
              { maxPages: te } = r.options,
              be = P ? RE : TE;
            return {
              pages: be(z.pages, ue, te),
              pageParams: be(z.pageParams, Q, te),
            };
          };
        if (o && u.length) {
          const z = o === "backward",
            Q = z ? LE : a0,
            P = { pages: u, pageParams: f },
            j = Q(s, P);
          h = await Y(P, j, z);
        } else {
          const z = n ?? u.length;
          do {
            const Q = y === 0 ? f[0] ?? s.initialPageParam : a0(s, h);
            if (y > 0 && Q == null) break;
            (h = await Y(h, Q)), y++;
          } while (y < z);
        }
        return h;
      };
      r.options.persister
        ? (r.fetchFn = () => {
            var N, C;
            return (C = (N = r.options).persister) == null
              ? void 0
              : C.call(
                  N,
                  m,
                  {
                    client: r.client,
                    queryKey: r.queryKey,
                    meta: r.options.meta,
                    signal: r.signal,
                  },
                  a
                );
          })
        : (r.fetchFn = m);
    },
  };
}
function a0(n, { pages: r, pageParams: a }) {
  const s = r.length - 1;
  return r.length > 0 ? n.getNextPageParam(r[s], r, a[s], a) : void 0;
}
function LE(n, { pages: r, pageParams: a }) {
  var s;
  return r.length > 0
    ? (s = n.getPreviousPageParam) == null
      ? void 0
      : s.call(n, r[0], r, a[0], a)
    : void 0;
}
var Et,
  qa,
  Ha,
  Xs,
  Zs,
  Pa,
  Is,
  Js,
  hb,
  BE =
    ((hb = class {
      constructor(n = {}) {
        Ae(this, Et);
        Ae(this, qa);
        Ae(this, Ha);
        Ae(this, Xs);
        Ae(this, Zs);
        Ae(this, Pa);
        Ae(this, Is);
        Ae(this, Js);
        de(this, Et, n.queryCache || new UE()),
          de(this, qa, n.mutationCache || new zE()),
          de(this, Ha, n.defaultOptions || {}),
          de(this, Xs, new Map()),
          de(this, Zs, new Map()),
          de(this, Pa, 0);
      }
      mount() {
        nc(this, Pa)._++,
          R(this, Pa) === 1 &&
            (de(
              this,
              Is,
              xy.subscribe(async (n) => {
                n &&
                  (await this.resumePausedMutations(), R(this, Et).onFocus());
              })
            ),
            de(
              this,
              Js,
              Rc.subscribe(async (n) => {
                n &&
                  (await this.resumePausedMutations(), R(this, Et).onOnline());
              })
            ));
      }
      unmount() {
        var n, r;
        nc(this, Pa)._--,
          R(this, Pa) === 0 &&
            ((n = R(this, Is)) == null || n.call(this),
            de(this, Is, void 0),
            (r = R(this, Js)) == null || r.call(this),
            de(this, Js, void 0));
      }
      isFetching(n) {
        return R(this, Et).findAll({ ...n, fetchStatus: "fetching" }).length;
      }
      isMutating(n) {
        return R(this, qa).findAll({ ...n, status: "pending" }).length;
      }
      getQueryData(n) {
        var a;
        const r = this.defaultQueryOptions({ queryKey: n });
        return (a = R(this, Et).get(r.queryHash)) == null
          ? void 0
          : a.state.data;
      }
      ensureQueryData(n) {
        const r = this.defaultQueryOptions(n),
          a = R(this, Et).build(this, r),
          s = a.state.data;
        return s === void 0
          ? this.fetchQuery(n)
          : (n.revalidateIfStale &&
              a.isStaleByTime(Ya(r.staleTime, a)) &&
              this.prefetchQuery(r),
            Promise.resolve(s));
      }
      getQueriesData(n) {
        return R(this, Et)
          .findAll(n)
          .map(({ queryKey: r, state: a }) => {
            const s = a.data;
            return [r, s];
          });
      }
      setQueryData(n, r, a) {
        const s = this.defaultQueryOptions({ queryKey: n }),
          o = R(this, Et).get(s.queryHash),
          u = o == null ? void 0 : o.state.data,
          f = xE(r, u);
        if (f !== void 0)
          return R(this, Et)
            .build(this, s)
            .setData(f, { ...a, manual: !0 });
      }
      setQueriesData(n, r, a) {
        return Lt.batch(() =>
          R(this, Et)
            .findAll(n)
            .map(({ queryKey: s }) => [s, this.setQueryData(s, r, a)])
        );
      }
      getQueryState(n) {
        var a;
        const r = this.defaultQueryOptions({ queryKey: n });
        return (a = R(this, Et).get(r.queryHash)) == null ? void 0 : a.state;
      }
      removeQueries(n) {
        const r = R(this, Et);
        Lt.batch(() => {
          r.findAll(n).forEach((a) => {
            r.remove(a);
          });
        });
      }
      resetQueries(n, r) {
        const a = R(this, Et);
        return Lt.batch(
          () => (
            a.findAll(n).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries({ type: "active", ...n }, r)
          )
        );
      }
      cancelQueries(n, r = {}) {
        const a = { revert: !0, ...r },
          s = Lt.batch(() =>
            R(this, Et)
              .findAll(n)
              .map((o) => o.cancel(a))
          );
        return Promise.all(s).then(ln).catch(ln);
      }
      invalidateQueries(n, r = {}) {
        return Lt.batch(
          () => (
            R(this, Et)
              .findAll(n)
              .forEach((a) => {
                a.invalidate();
              }),
            (n == null ? void 0 : n.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...n,
                    type:
                      (n == null ? void 0 : n.refetchType) ??
                      (n == null ? void 0 : n.type) ??
                      "active",
                  },
                  r
                )
          )
        );
      }
      refetchQueries(n, r = {}) {
        const a = { ...r, cancelRefetch: r.cancelRefetch ?? !0 },
          s = Lt.batch(() =>
            R(this, Et)
              .findAll(n)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let u = o.fetch(void 0, a);
                return (
                  a.throwOnError || (u = u.catch(ln)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : u
                );
              })
          );
        return Promise.all(s).then(ln);
      }
      fetchQuery(n) {
        const r = this.defaultQueryOptions(n);
        r.retry === void 0 && (r.retry = !1);
        const a = R(this, Et).build(this, r);
        return a.isStaleByTime(Ya(r.staleTime, a))
          ? a.fetch(r)
          : Promise.resolve(a.state.data);
      }
      prefetchQuery(n) {
        return this.fetchQuery(n).then(ln).catch(ln);
      }
      fetchInfiniteQuery(n) {
        return (n.behavior = r0(n.pages)), this.fetchQuery(n);
      }
      prefetchInfiniteQuery(n) {
        return this.fetchInfiniteQuery(n).then(ln).catch(ln);
      }
      ensureInfiniteQueryData(n) {
        return (n.behavior = r0(n.pages)), this.ensureQueryData(n);
      }
      resumePausedMutations() {
        return Rc.isOnline()
          ? R(this, qa).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return R(this, Et);
      }
      getMutationCache() {
        return R(this, qa);
      }
      getDefaultOptions() {
        return R(this, Ha);
      }
      setDefaultOptions(n) {
        de(this, Ha, n);
      }
      setQueryDefaults(n, r) {
        R(this, Xs).set(Pi(n), { queryKey: n, defaultOptions: r });
      }
      getQueryDefaults(n) {
        const r = [...R(this, Xs).values()],
          a = {};
        return (
          r.forEach((s) => {
            jo(n, s.queryKey) && Object.assign(a, s.defaultOptions);
          }),
          a
        );
      }
      setMutationDefaults(n, r) {
        R(this, Zs).set(Pi(n), { mutationKey: n, defaultOptions: r });
      }
      getMutationDefaults(n) {
        const r = [...R(this, Zs).values()],
          a = {};
        return (
          r.forEach((s) => {
            jo(n, s.mutationKey) && Object.assign(a, s.defaultOptions);
          }),
          a
        );
      }
      defaultQueryOptions(n) {
        if (n._defaulted) return n;
        const r = {
          ...R(this, Ha).queries,
          ...this.getQueryDefaults(n.queryKey),
          ...n,
          _defaulted: !0,
        };
        return (
          r.queryHash || (r.queryHash = wy(r.queryKey, r)),
          r.refetchOnReconnect === void 0 &&
            (r.refetchOnReconnect = r.networkMode !== "always"),
          r.throwOnError === void 0 && (r.throwOnError = !!r.suspense),
          !r.networkMode && r.persister && (r.networkMode = "offlineFirst"),
          r.queryFn === Sy && (r.enabled = !1),
          r
        );
      }
      defaultMutationOptions(n) {
        return n != null && n._defaulted
          ? n
          : {
              ...R(this, Ha).mutations,
              ...((n == null ? void 0 : n.mutationKey) &&
                this.getMutationDefaults(n.mutationKey)),
              ...n,
              _defaulted: !0,
            };
      }
      clear() {
        R(this, Et).clear(), R(this, qa).clear();
      }
    }),
    (Et = new WeakMap()),
    (qa = new WeakMap()),
    (Ha = new WeakMap()),
    (Xs = new WeakMap()),
    (Zs = new WeakMap()),
    (Pa = new WeakMap()),
    (Is = new WeakMap()),
    (Js = new WeakMap()),
    hb),
  _n,
  Ie,
  ko,
  sn,
  Li,
  Ws,
  $a,
  Va,
  zo,
  el,
  tl,
  Bi,
  qi,
  Fa,
  nl,
  at,
  go,
  Bh,
  qh,
  Hh,
  Ph,
  $h,
  Vh,
  Fh,
  Jb,
  yb,
  qE =
    ((yb = class extends il {
      constructor(r, a) {
        super();
        Ae(this, at);
        Ae(this, _n);
        Ae(this, Ie);
        Ae(this, ko);
        Ae(this, sn);
        Ae(this, Li);
        Ae(this, Ws);
        Ae(this, $a);
        Ae(this, Va);
        Ae(this, zo);
        Ae(this, el);
        Ae(this, tl);
        Ae(this, Bi);
        Ae(this, qi);
        Ae(this, Fa);
        Ae(this, nl, new Set());
        (this.options = a),
          de(this, _n, r),
          de(this, Va, null),
          de(this, $a, Lh()),
          this.options.experimental_prefetchInRender ||
            R(this, $a).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            ),
          this.bindMethods(),
          this.setOptions(a);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (R(this, Ie).addObserver(this),
          i0(R(this, Ie), this.options)
            ? Pe(this, at, go).call(this)
            : this.updateResult(),
          Pe(this, at, Ph).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Gh(R(this, Ie), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Gh(R(this, Ie), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          Pe(this, at, $h).call(this),
          Pe(this, at, Vh).call(this),
          R(this, Ie).removeObserver(this);
      }
      setOptions(r) {
        const a = this.options,
          s = R(this, Ie);
        if (
          ((this.options = R(this, _n).defaultQueryOptions(r)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof or(this.options.enabled, R(this, Ie)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        Pe(this, at, Fh).call(this),
          R(this, Ie).setOptions(this.options),
          a._defaulted &&
            !Tc(this.options, a) &&
            R(this, _n)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: R(this, Ie),
                observer: this,
              });
        const o = this.hasListeners();
        o && s0(R(this, Ie), s, this.options, a) && Pe(this, at, go).call(this),
          this.updateResult(),
          o &&
            (R(this, Ie) !== s ||
              or(this.options.enabled, R(this, Ie)) !==
                or(a.enabled, R(this, Ie)) ||
              Ya(this.options.staleTime, R(this, Ie)) !==
                Ya(a.staleTime, R(this, Ie))) &&
            Pe(this, at, Bh).call(this);
        const u = Pe(this, at, qh).call(this);
        o &&
          (R(this, Ie) !== s ||
            or(this.options.enabled, R(this, Ie)) !==
              or(a.enabled, R(this, Ie)) ||
            u !== R(this, Fa)) &&
          Pe(this, at, Hh).call(this, u);
      }
      getOptimisticResult(r) {
        const a = R(this, _n).getQueryCache().build(R(this, _n), r),
          s = this.createResult(a, r);
        return (
          PE(this, s) &&
            (de(this, sn, s),
            de(this, Ws, this.options),
            de(this, Li, R(this, Ie).state)),
          s
        );
      }
      getCurrentResult() {
        return R(this, sn);
      }
      trackResult(r, a) {
        return new Proxy(r, {
          get: (s, o) => (
            this.trackProp(o), a == null || a(o), Reflect.get(s, o)
          ),
        });
      }
      trackProp(r) {
        R(this, nl).add(r);
      }
      getCurrentQuery() {
        return R(this, Ie);
      }
      refetch({ ...r } = {}) {
        return this.fetch({ ...r });
      }
      fetchOptimistic(r) {
        const a = R(this, _n).defaultQueryOptions(r),
          s = R(this, _n).getQueryCache().build(R(this, _n), a);
        return s.fetch().then(() => this.createResult(s, a));
      }
      fetch(r) {
        return Pe(this, at, go)
          .call(this, { ...r, cancelRefetch: r.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), R(this, sn)));
      }
      createResult(r, a) {
        var te;
        const s = R(this, Ie),
          o = this.options,
          u = R(this, sn),
          f = R(this, Li),
          h = R(this, Ws),
          m = r !== s ? r.state : R(this, ko),
          { state: p } = r;
        let g = { ...p },
          b = !1,
          S;
        if (a._optimisticResults) {
          const be = this.hasListeners(),
            Le = !be && i0(r, a),
            he = be && s0(r, s, a, o);
          (Le || he) && (g = { ...g, ...Zb(p.data, r.options) }),
            a._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
        }
        let { error: x, errorUpdatedAt: N, status: C } = g;
        S = g.data;
        let U = !1;
        if (a.placeholderData !== void 0 && S === void 0 && C === "pending") {
          let be;
          u != null &&
          u.isPlaceholderData &&
          a.placeholderData === (h == null ? void 0 : h.placeholderData)
            ? ((be = u.data), (U = !0))
            : (be =
                typeof a.placeholderData == "function"
                  ? a.placeholderData(
                      (te = R(this, tl)) == null ? void 0 : te.state.data,
                      R(this, tl)
                    )
                  : a.placeholderData),
            be !== void 0 &&
              ((C = "success"),
              (S = zh(u == null ? void 0 : u.data, be, a)),
              (b = !0));
        }
        if (a.select && S !== void 0 && !U)
          if (
            u &&
            S === (f == null ? void 0 : f.data) &&
            a.select === R(this, zo)
          )
            S = R(this, el);
          else
            try {
              de(this, zo, a.select),
                (S = a.select(S)),
                (S = zh(u == null ? void 0 : u.data, S, a)),
                de(this, el, S),
                de(this, Va, null);
            } catch (be) {
              de(this, Va, be);
            }
        R(this, Va) &&
          ((x = R(this, Va)),
          (S = R(this, el)),
          (N = Date.now()),
          (C = "error"));
        const Y = g.fetchStatus === "fetching",
          z = C === "pending",
          Q = C === "error",
          P = z && Y,
          j = S !== void 0,
          ue = {
            status: C,
            fetchStatus: g.fetchStatus,
            isPending: z,
            isSuccess: C === "success",
            isError: Q,
            isInitialLoading: P,
            isLoading: P,
            data: S,
            dataUpdatedAt: g.dataUpdatedAt,
            error: x,
            errorUpdatedAt: N,
            failureCount: g.fetchFailureCount,
            failureReason: g.fetchFailureReason,
            errorUpdateCount: g.errorUpdateCount,
            isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
            isFetchedAfterMount:
              g.dataUpdateCount > m.dataUpdateCount ||
              g.errorUpdateCount > m.errorUpdateCount,
            isFetching: Y,
            isRefetching: Y && !z,
            isLoadingError: Q && !j,
            isPaused: g.fetchStatus === "paused",
            isPlaceholderData: b,
            isRefetchError: Q && j,
            isStale: Ey(r, a),
            refetch: this.refetch,
            promise: R(this, $a),
          };
        if (this.options.experimental_prefetchInRender) {
          const be = (Ne) => {
              ue.status === "error"
                ? Ne.reject(ue.error)
                : ue.data !== void 0 && Ne.resolve(ue.data);
            },
            Le = () => {
              const Ne = de(this, $a, (ue.promise = Lh()));
              be(Ne);
            },
            he = R(this, $a);
          switch (he.status) {
            case "pending":
              r.queryHash === s.queryHash && be(he);
              break;
            case "fulfilled":
              (ue.status === "error" || ue.data !== he.value) && Le();
              break;
            case "rejected":
              (ue.status !== "error" || ue.error !== he.reason) && Le();
              break;
          }
        }
        return ue;
      }
      updateResult() {
        const r = R(this, sn),
          a = this.createResult(R(this, Ie), this.options);
        if (
          (de(this, Li, R(this, Ie).state),
          de(this, Ws, this.options),
          R(this, Li).data !== void 0 && de(this, tl, R(this, Ie)),
          Tc(a, r))
        )
          return;
        de(this, sn, a);
        const s = () => {
          if (!r) return !0;
          const { notifyOnChangeProps: o } = this.options,
            u = typeof o == "function" ? o() : o;
          if (u === "all" || (!u && !R(this, nl).size)) return !0;
          const f = new Set(u ?? R(this, nl));
          return (
            this.options.throwOnError && f.add("error"),
            Object.keys(R(this, sn)).some((h) => {
              const y = h;
              return R(this, sn)[y] !== r[y] && f.has(y);
            })
          );
        };
        Pe(this, at, Jb).call(this, { listeners: s() });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && Pe(this, at, Ph).call(this);
      }
    }),
    (_n = new WeakMap()),
    (Ie = new WeakMap()),
    (ko = new WeakMap()),
    (sn = new WeakMap()),
    (Li = new WeakMap()),
    (Ws = new WeakMap()),
    ($a = new WeakMap()),
    (Va = new WeakMap()),
    (zo = new WeakMap()),
    (el = new WeakMap()),
    (tl = new WeakMap()),
    (Bi = new WeakMap()),
    (qi = new WeakMap()),
    (Fa = new WeakMap()),
    (nl = new WeakMap()),
    (at = new WeakSet()),
    (go = function (r) {
      Pe(this, at, Fh).call(this);
      let a = R(this, Ie).fetch(this.options, r);
      return (r != null && r.throwOnError) || (a = a.catch(ln)), a;
    }),
    (Bh = function () {
      Pe(this, at, $h).call(this);
      const r = Ya(this.options.staleTime, R(this, Ie));
      if (Hi || R(this, sn).isStale || !Uh(r)) return;
      const s = $b(R(this, sn).dataUpdatedAt, r) + 1;
      de(
        this,
        Bi,
        setTimeout(() => {
          R(this, sn).isStale || this.updateResult();
        }, s)
      );
    }),
    (qh = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(R(this, Ie))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Hh = function (r) {
      Pe(this, at, Vh).call(this),
        de(this, Fa, r),
        !(
          Hi ||
          or(this.options.enabled, R(this, Ie)) === !1 ||
          !Uh(R(this, Fa)) ||
          R(this, Fa) === 0
        ) &&
          de(
            this,
            qi,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || xy.isFocused()) &&
                Pe(this, at, go).call(this);
            }, R(this, Fa))
          );
    }),
    (Ph = function () {
      Pe(this, at, Bh).call(this),
        Pe(this, at, Hh).call(this, Pe(this, at, qh).call(this));
    }),
    ($h = function () {
      R(this, Bi) && (clearTimeout(R(this, Bi)), de(this, Bi, void 0));
    }),
    (Vh = function () {
      R(this, qi) && (clearInterval(R(this, qi)), de(this, qi, void 0));
    }),
    (Fh = function () {
      const r = R(this, _n).getQueryCache().build(R(this, _n), this.options);
      if (r === R(this, Ie)) return;
      const a = R(this, Ie);
      de(this, Ie, r),
        de(this, ko, r.state),
        this.hasListeners() &&
          (a == null || a.removeObserver(this), r.addObserver(this));
    }),
    (Jb = function (r) {
      Lt.batch(() => {
        r.listeners &&
          this.listeners.forEach((a) => {
            a(R(this, sn));
          }),
          R(this, _n)
            .getQueryCache()
            .notify({ query: R(this, Ie), type: "observerResultsUpdated" });
      });
    }),
    yb);
function HE(n, r) {
  return (
    or(r.enabled, n) !== !1 &&
    n.state.data === void 0 &&
    !(n.state.status === "error" && r.retryOnMount === !1)
  );
}
function i0(n, r) {
  return HE(n, r) || (n.state.data !== void 0 && Gh(n, r, r.refetchOnMount));
}
function Gh(n, r, a) {
  if (or(r.enabled, n) !== !1 && Ya(r.staleTime, n) !== "static") {
    const s = typeof a == "function" ? a(n) : a;
    return s === "always" || (s !== !1 && Ey(n, r));
  }
  return !1;
}
function s0(n, r, a, s) {
  return (
    (n !== r || or(s.enabled, n) === !1) &&
    (!a.suspense || n.state.status !== "error") &&
    Ey(n, a)
  );
}
function Ey(n, r) {
  return or(r.enabled, n) !== !1 && n.isStaleByTime(Ya(r.staleTime, n));
}
function PE(n, r) {
  return !Tc(n.getCurrentResult(), r);
}
var Ga,
  Qa,
  wn,
  Ir,
  Wr,
  gc,
  Qh,
  mb,
  $E =
    ((mb = class extends il {
      constructor(a, s) {
        super();
        Ae(this, Wr);
        Ae(this, Ga);
        Ae(this, Qa);
        Ae(this, wn);
        Ae(this, Ir);
        de(this, Ga, a),
          this.setOptions(s),
          this.bindMethods(),
          Pe(this, Wr, gc).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(a) {
        var o;
        const s = this.options;
        (this.options = R(this, Ga).defaultMutationOptions(a)),
          Tc(this.options, s) ||
            R(this, Ga)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: R(this, wn),
                observer: this,
              }),
          s != null &&
          s.mutationKey &&
          this.options.mutationKey &&
          Pi(s.mutationKey) !== Pi(this.options.mutationKey)
            ? this.reset()
            : ((o = R(this, wn)) == null ? void 0 : o.state.status) ===
                "pending" && R(this, wn).setOptions(this.options);
      }
      onUnsubscribe() {
        var a;
        this.hasListeners() ||
          (a = R(this, wn)) == null ||
          a.removeObserver(this);
      }
      onMutationUpdate(a) {
        Pe(this, Wr, gc).call(this), Pe(this, Wr, Qh).call(this, a);
      }
      getCurrentResult() {
        return R(this, Qa);
      }
      reset() {
        var a;
        (a = R(this, wn)) == null || a.removeObserver(this),
          de(this, wn, void 0),
          Pe(this, Wr, gc).call(this),
          Pe(this, Wr, Qh).call(this);
      }
      mutate(a, s) {
        var o;
        return (
          de(this, Ir, s),
          (o = R(this, wn)) == null || o.removeObserver(this),
          de(
            this,
            wn,
            R(this, Ga).getMutationCache().build(R(this, Ga), this.options)
          ),
          R(this, wn).addObserver(this),
          R(this, wn).execute(a)
        );
      }
    }),
    (Ga = new WeakMap()),
    (Qa = new WeakMap()),
    (wn = new WeakMap()),
    (Ir = new WeakMap()),
    (Wr = new WeakSet()),
    (gc = function () {
      var s;
      const a = ((s = R(this, wn)) == null ? void 0 : s.state) ?? Ib();
      de(this, Qa, {
        ...a,
        isPending: a.status === "pending",
        isSuccess: a.status === "success",
        isError: a.status === "error",
        isIdle: a.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (Qh = function (a) {
      Lt.batch(() => {
        var s, o, u, f, h, y, m, p;
        if (R(this, Ir) && this.hasListeners()) {
          const g = R(this, Qa).variables,
            b = R(this, Qa).context;
          (a == null ? void 0 : a.type) === "success"
            ? ((o = (s = R(this, Ir)).onSuccess) == null ||
                o.call(s, a.data, g, b),
              (f = (u = R(this, Ir)).onSettled) == null ||
                f.call(u, a.data, null, g, b))
            : (a == null ? void 0 : a.type) === "error" &&
              ((y = (h = R(this, Ir)).onError) == null ||
                y.call(h, a.error, g, b),
              (p = (m = R(this, Ir)).onSettled) == null ||
                p.call(m, void 0, a.error, g, b));
        }
        this.listeners.forEach((g) => {
          g(R(this, Qa));
        });
      });
    }),
    mb),
  Wb = D.createContext(void 0),
  e_ = (n) => {
    const r = D.useContext(Wb);
    if (!r)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return r;
  },
  VE = ({ client: n, children: r }) => (
    D.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n]
    ),
    _.jsx(Wb.Provider, { value: n, children: r })
  ),
  t_ = D.createContext(!1),
  FE = () => D.useContext(t_);
t_.Provider;
function GE() {
  let n = !1;
  return {
    clearReset: () => {
      n = !1;
    },
    reset: () => {
      n = !0;
    },
    isReset: () => n,
  };
}
var QE = D.createContext(GE()),
  YE = () => D.useContext(QE),
  KE = (n, r) => {
    (n.suspense || n.throwOnError || n.experimental_prefetchInRender) &&
      (r.isReset() || (n.retryOnMount = !1));
  },
  XE = (n) => {
    D.useEffect(() => {
      n.clearReset();
    }, [n]);
  },
  ZE = ({
    result: n,
    errorResetBoundary: r,
    throwOnError: a,
    query: s,
    suspense: o,
  }) =>
    n.isError &&
    !r.isReset() &&
    !n.isFetching &&
    s &&
    ((o && n.data === void 0) || Gb(a, [n.error, s])),
  IE = (n) => {
    if (n.suspense) {
      const r = (s) => (s === "static" ? s : Math.max(s ?? 1e3, 1e3)),
        a = n.staleTime;
      (n.staleTime = typeof a == "function" ? (...s) => r(a(...s)) : r(a)),
        typeof n.gcTime == "number" && (n.gcTime = Math.max(n.gcTime, 1e3));
    }
  },
  JE = (n, r) => n.isLoading && n.isFetching && !r,
  WE = (n, r) => (n == null ? void 0 : n.suspense) && r.isPending,
  l0 = (n, r, a) =>
    r.fetchOptimistic(n).catch(() => {
      a.clearReset();
    });
function e2(n, r, a) {
  var g, b, S, x, N;
  const s = FE(),
    o = YE(),
    u = e_(),
    f = u.defaultQueryOptions(n);
  (b =
    (g = u.getDefaultOptions().queries) == null
      ? void 0
      : g._experimental_beforeQuery) == null || b.call(g, f),
    (f._optimisticResults = s ? "isRestoring" : "optimistic"),
    IE(f),
    KE(f, o),
    XE(o);
  const h = !u.getQueryCache().get(f.queryHash),
    [y] = D.useState(() => new r(u, f)),
    m = y.getOptimisticResult(f),
    p = !s && n.subscribed !== !1;
  if (
    (D.useSyncExternalStore(
      D.useCallback(
        (C) => {
          const U = p ? y.subscribe(Lt.batchCalls(C)) : ln;
          return y.updateResult(), U;
        },
        [y, p]
      ),
      () => y.getCurrentResult(),
      () => y.getCurrentResult()
    ),
    D.useEffect(() => {
      y.setOptions(f);
    }, [f, y]),
    WE(f, m))
  )
    throw l0(f, y, o);
  if (
    ZE({
      result: m,
      errorResetBoundary: o,
      throwOnError: f.throwOnError,
      query: u.getQueryCache().get(f.queryHash),
      suspense: f.suspense,
    })
  )
    throw m.error;
  if (
    ((x =
      (S = u.getDefaultOptions().queries) == null
        ? void 0
        : S._experimental_afterQuery) == null || x.call(S, f, m),
    f.experimental_prefetchInRender && !Hi && JE(m, s))
  ) {
    const C = h
      ? l0(f, y, o)
      : (N = u.getQueryCache().get(f.queryHash)) == null
      ? void 0
      : N.promise;
    C == null ||
      C.catch(ln).finally(() => {
        y.updateResult();
      });
  }
  return f.notifyOnChangeProps ? m : y.trackResult(m);
}
function n_(n, r) {
  return e2(n, qE);
}
function t2(n, r) {
  const a = e_(),
    [s] = D.useState(() => new $E(a, n));
  D.useEffect(() => {
    s.setOptions(n);
  }, [s, n]);
  const o = D.useSyncExternalStore(
      D.useCallback((f) => s.subscribe(Lt.batchCalls(f)), [s]),
      () => s.getCurrentResult(),
      () => s.getCurrentResult()
    ),
    u = D.useCallback(
      (f, h) => {
        s.mutate(f, h).catch(ln);
      },
      [s]
    );
  if (o.error && Gb(s.options.throwOnError, [o.error])) throw o.error;
  return { ...o, mutate: u, mutateAsync: o.mutate };
}
const n2 = "modulepreload",
  r2 = function (n) {
    return "/" + n;
  },
  o0 = {},
  Ho = function (r, a, s) {
    let o = Promise.resolve();
    if (a && a.length > 0) {
      let f = function (m) {
        return Promise.all(
          m.map((p) =>
            Promise.resolve(p).then(
              (g) => ({ status: "fulfilled", value: g }),
              (g) => ({ status: "rejected", reason: g })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const h = document.querySelector("meta[property=csp-nonce]"),
        y =
          (h == null ? void 0 : h.nonce) ||
          (h == null ? void 0 : h.getAttribute("nonce"));
      o = f(
        a.map((m) => {
          if (((m = r2(m)), m in o0)) return;
          o0[m] = !0;
          const p = m.endsWith(".css"),
            g = p ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${g}`)) return;
          const b = document.createElement("link");
          if (
            ((b.rel = p ? "stylesheet" : n2),
            p || (b.as = "script"),
            (b.crossOrigin = ""),
            (b.href = m),
            y && b.setAttribute("nonce", y),
            document.head.appendChild(b),
            p)
          )
            return new Promise((S, x) => {
              b.addEventListener("load", S),
                b.addEventListener("error", () =>
                  x(new Error(`Unable to preload CSS for ${m}`))
                );
            });
        })
      );
    }
    function u(f) {
      const h = new Event("vite:preloadError", { cancelable: !0 });
      if (((h.payload = f), window.dispatchEvent(h), !h.defaultPrevented))
        throw f;
    }
    return o.then((f) => {
      for (const h of f || []) h.status === "rejected" && u(h.reason);
      return r().catch(u);
    });
  };
var a2 = function () {
    return null;
  },
  mh = { exports: {} },
  ph = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u0;
function i2() {
  if (u0) return ph;
  u0 = 1;
  var n = Hc();
  function r(y, m) {
    return (y === m && (y !== 0 || 1 / y === 1 / m)) || (y !== y && m !== m);
  }
  var a = typeof Object.is == "function" ? Object.is : r,
    s = n.useSyncExternalStore,
    o = n.useRef,
    u = n.useEffect,
    f = n.useMemo,
    h = n.useDebugValue;
  return (
    (ph.useSyncExternalStoreWithSelector = function (y, m, p, g, b) {
      var S = o(null);
      if (S.current === null) {
        var x = { hasValue: !1, value: null };
        S.current = x;
      } else x = S.current;
      S = f(
        function () {
          function C(P) {
            if (!U) {
              if (((U = !0), (Y = P), (P = g(P)), b !== void 0 && x.hasValue)) {
                var j = x.value;
                if (b(j, P)) return (z = j);
              }
              return (z = P);
            }
            if (((j = z), a(Y, P))) return j;
            var ie = g(P);
            return b !== void 0 && b(j, ie)
              ? ((Y = P), j)
              : ((Y = P), (z = ie));
          }
          var U = !1,
            Y,
            z,
            Q = p === void 0 ? null : p;
          return [
            function () {
              return C(m());
            },
            Q === null
              ? void 0
              : function () {
                  return C(Q());
                },
          ];
        },
        [m, p, g, b]
      );
      var N = s(y, S[0], S[1]);
      return (
        u(
          function () {
            (x.hasValue = !0), (x.value = N);
          },
          [N]
        ),
        h(N),
        N
      );
    }),
    ph
  );
}
var c0;
function s2() {
  return c0 || ((c0 = 1), (mh.exports = i2())), mh.exports;
}
var l2 = s2();
function o2(n) {
  n();
}
function u2() {
  let n = null,
    r = null;
  return {
    clear() {
      (n = null), (r = null);
    },
    notify() {
      o2(() => {
        let a = n;
        for (; a; ) a.callback(), (a = a.next);
      });
    },
    get() {
      const a = [];
      let s = n;
      for (; s; ) a.push(s), (s = s.next);
      return a;
    },
    subscribe(a) {
      let s = !0;
      const o = (r = { callback: a, next: null, prev: r });
      return (
        o.prev ? (o.prev.next = o) : (n = o),
        function () {
          !s ||
            n === null ||
            ((s = !1),
            o.next ? (o.next.prev = o.prev) : (r = o.prev),
            o.prev ? (o.prev.next = o.next) : (n = o.next));
        }
      );
    },
  };
}
var f0 = { notify() {}, get: () => [] };
function c2(n, r) {
  let a,
    s = f0,
    o = 0,
    u = !1;
  function f(N) {
    p();
    const C = s.subscribe(N);
    let U = !1;
    return () => {
      U || ((U = !0), C(), g());
    };
  }
  function h() {
    s.notify();
  }
  function y() {
    x.onStateChange && x.onStateChange();
  }
  function m() {
    return u;
  }
  function p() {
    o++, a || ((a = n.subscribe(y)), (s = u2()));
  }
  function g() {
    o--, a && o === 0 && (a(), (a = void 0), s.clear(), (s = f0));
  }
  function b() {
    u || ((u = !0), p());
  }
  function S() {
    u && ((u = !1), g());
  }
  const x = {
    addNestedSub: f,
    notifyNestedSubs: h,
    handleChangeWrapper: y,
    isSubscribed: m,
    trySubscribe: b,
    tryUnsubscribe: S,
    getListeners: () => s,
  };
  return x;
}
var f2 = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  d2 = f2(),
  h2 = () => typeof navigator < "u" && navigator.product === "ReactNative",
  y2 = h2(),
  m2 = () => (d2 || y2 ? D.useLayoutEffect : D.useEffect),
  p2 = m2(),
  vh = Symbol.for("react-redux-context"),
  gh = typeof globalThis < "u" ? globalThis : {};
function v2() {
  if (!D.createContext) return {};
  const n = gh[vh] ?? (gh[vh] = new Map());
  let r = n.get(D.createContext);
  return r || ((r = D.createContext(null)), n.set(D.createContext, r)), r;
}
var Xa = v2();
function g2(n) {
  const { children: r, context: a, serverState: s, store: o } = n,
    u = D.useMemo(() => {
      const y = c2(o);
      return {
        store: o,
        subscription: y,
        getServerState: s ? () => s : void 0,
      };
    }, [o, s]),
    f = D.useMemo(() => o.getState(), [o]);
  p2(() => {
    const { subscription: y } = u;
    return (
      (y.onStateChange = y.notifyNestedSubs),
      y.trySubscribe(),
      f !== o.getState() && y.notifyNestedSubs(),
      () => {
        y.tryUnsubscribe(), (y.onStateChange = void 0);
      }
    );
  }, [u, f]);
  const h = a || Xa;
  return D.createElement(h.Provider, { value: u }, r);
}
var b2 = g2;
function Ty(n = Xa) {
  return function () {
    return D.useContext(n);
  };
}
var r_ = Ty();
function a_(n = Xa) {
  const r = n === Xa ? r_ : Ty(n),
    a = () => {
      const { store: s } = r();
      return s;
    };
  return Object.assign(a, { withTypes: () => a }), a;
}
var _2 = a_();
function w2(n = Xa) {
  const r = n === Xa ? _2 : a_(n),
    a = () => r().dispatch;
  return Object.assign(a, { withTypes: () => a }), a;
}
var Ja = w2(),
  S2 = (n, r) => n === r;
function x2(n = Xa) {
  const r = n === Xa ? r_ : Ty(n),
    a = (s, o = {}) => {
      const { equalityFn: u = S2 } =
          typeof o == "function" ? { equalityFn: o } : o,
        f = r(),
        { store: h, subscription: y, getServerState: m } = f;
      D.useRef(!0);
      const p = D.useCallback(
          {
            [s.name](b) {
              return s(b);
            },
          }[s.name],
          [s]
        ),
        g = l2.useSyncExternalStoreWithSelector(
          y.addNestedSub,
          h.getState,
          m || h.getState,
          p,
          u
        );
      return D.useDebugValue(g), g;
    };
  return Object.assign(a, { withTypes: () => a }), a;
}
var Xn = x2();
function Yt(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var E2 = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  d0 = E2,
  bh = () => Math.random().toString(36).substring(7).split("").join("."),
  T2 = {
    INIT: `@@redux/INIT${bh()}`,
    REPLACE: `@@redux/REPLACE${bh()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${bh()}`,
  },
  Oc = T2;
function Ry(n) {
  if (typeof n != "object" || n === null) return !1;
  let r = n;
  for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(n) === r || Object.getPrototypeOf(n) === null;
}
function i_(n, r, a) {
  if (typeof n != "function") throw new Error(Yt(2));
  if (
    (typeof r == "function" && typeof a == "function") ||
    (typeof a == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Yt(0));
  if (
    (typeof r == "function" && typeof a > "u" && ((a = r), (r = void 0)),
    typeof a < "u")
  ) {
    if (typeof a != "function") throw new Error(Yt(1));
    return a(i_)(n, r);
  }
  let s = n,
    o = r,
    u = new Map(),
    f = u,
    h = 0,
    y = !1;
  function m() {
    f === u &&
      ((f = new Map()),
      u.forEach((C, U) => {
        f.set(U, C);
      }));
  }
  function p() {
    if (y) throw new Error(Yt(3));
    return o;
  }
  function g(C) {
    if (typeof C != "function") throw new Error(Yt(4));
    if (y) throw new Error(Yt(5));
    let U = !0;
    m();
    const Y = h++;
    return (
      f.set(Y, C),
      function () {
        if (U) {
          if (y) throw new Error(Yt(6));
          (U = !1), m(), f.delete(Y), (u = null);
        }
      }
    );
  }
  function b(C) {
    if (!Ry(C)) throw new Error(Yt(7));
    if (typeof C.type > "u") throw new Error(Yt(8));
    if (typeof C.type != "string") throw new Error(Yt(17));
    if (y) throw new Error(Yt(9));
    try {
      (y = !0), (o = s(o, C));
    } finally {
      y = !1;
    }
    return (
      (u = f).forEach((Y) => {
        Y();
      }),
      C
    );
  }
  function S(C) {
    if (typeof C != "function") throw new Error(Yt(10));
    (s = C), b({ type: Oc.REPLACE });
  }
  function x() {
    const C = g;
    return {
      subscribe(U) {
        if (typeof U != "object" || U === null) throw new Error(Yt(11));
        function Y() {
          const Q = U;
          Q.next && Q.next(p());
        }
        return Y(), { unsubscribe: C(Y) };
      },
      [d0]() {
        return this;
      },
    };
  }
  return (
    b({ type: Oc.INIT }),
    { dispatch: b, subscribe: g, getState: p, replaceReducer: S, [d0]: x }
  );
}
function R2(n) {
  Object.keys(n).forEach((r) => {
    const a = n[r];
    if (typeof a(void 0, { type: Oc.INIT }) > "u") throw new Error(Yt(12));
    if (typeof a(void 0, { type: Oc.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Yt(13));
  });
}
function O2(n) {
  const r = Object.keys(n),
    a = {};
  for (let u = 0; u < r.length; u++) {
    const f = r[u];
    typeof n[f] == "function" && (a[f] = n[f]);
  }
  const s = Object.keys(a);
  let o;
  try {
    R2(a);
  } catch (u) {
    o = u;
  }
  return function (f = {}, h) {
    if (o) throw o;
    let y = !1;
    const m = {};
    for (let p = 0; p < s.length; p++) {
      const g = s[p],
        b = a[g],
        S = f[g],
        x = b(S, h);
      if (typeof x > "u") throw (h && h.type, new Error(Yt(14)));
      (m[g] = x), (y = y || x !== S);
    }
    return (y = y || s.length !== Object.keys(f).length), y ? m : f;
  };
}
function Ac(...n) {
  return n.length === 0
    ? (r) => r
    : n.length === 1
    ? n[0]
    : n.reduce(
        (r, a) =>
          (...s) =>
            r(a(...s))
      );
}
function A2(...n) {
  return (r) => (a, s) => {
    const o = r(a, s);
    let u = () => {
      throw new Error(Yt(15));
    };
    const f = { getState: o.getState, dispatch: (y, ...m) => u(y, ...m) },
      h = n.map((y) => y(f));
    return (u = Ac(...h)(o.dispatch)), { ...o, dispatch: u };
  };
}
function j2(n) {
  return Ry(n) && "type" in n && typeof n.type == "string";
}
var s_ = Symbol.for("immer-nothing"),
  h0 = Symbol.for("immer-draftable"),
  Nn = Symbol.for("immer-state");
function ur(n, ...r) {
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var rl = Object.getPrototypeOf;
function $i(n) {
  return !!n && !!n[Nn];
}
function ea(n) {
  var r;
  return n
    ? l_(n) ||
        Array.isArray(n) ||
        !!n[h0] ||
        !!((r = n.constructor) != null && r[h0]) ||
        Fc(n) ||
        Gc(n)
    : !1;
}
var C2 = Object.prototype.constructor.toString();
function l_(n) {
  if (!n || typeof n != "object") return !1;
  const r = rl(n);
  if (r === null) return !0;
  const a = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
  return a === Object
    ? !0
    : typeof a == "function" && Function.toString.call(a) === C2;
}
function jc(n, r) {
  Vc(n) === 0
    ? Reflect.ownKeys(n).forEach((a) => {
        r(a, n[a], n);
      })
    : n.forEach((a, s) => r(s, a, n));
}
function Vc(n) {
  const r = n[Nn];
  return r ? r.type_ : Array.isArray(n) ? 1 : Fc(n) ? 2 : Gc(n) ? 3 : 0;
}
function Yh(n, r) {
  return Vc(n) === 2 ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
}
function o_(n, r, a) {
  const s = Vc(n);
  s === 2 ? n.set(r, a) : s === 3 ? n.add(a) : (n[r] = a);
}
function D2(n, r) {
  return n === r ? n !== 0 || 1 / n === 1 / r : n !== n && r !== r;
}
function Fc(n) {
  return n instanceof Map;
}
function Gc(n) {
  return n instanceof Set;
}
function Ti(n) {
  return n.copy_ || n.base_;
}
function Kh(n, r) {
  if (Fc(n)) return new Map(n);
  if (Gc(n)) return new Set(n);
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  const a = l_(n);
  if (r === !0 || (r === "class_only" && !a)) {
    const s = Object.getOwnPropertyDescriptors(n);
    delete s[Nn];
    let o = Reflect.ownKeys(s);
    for (let u = 0; u < o.length; u++) {
      const f = o[u],
        h = s[f];
      h.writable === !1 && ((h.writable = !0), (h.configurable = !0)),
        (h.get || h.set) &&
          (s[f] = {
            configurable: !0,
            writable: !0,
            enumerable: h.enumerable,
            value: n[f],
          });
    }
    return Object.create(rl(n), s);
  } else {
    const s = rl(n);
    if (s !== null && a) return { ...n };
    const o = Object.create(s);
    return Object.assign(o, n);
  }
}
function Oy(n, r = !1) {
  return (
    Qc(n) ||
      $i(n) ||
      !ea(n) ||
      (Vc(n) > 1 && (n.set = n.add = n.clear = n.delete = M2),
      Object.freeze(n),
      r && Object.entries(n).forEach(([a, s]) => Oy(s, !0))),
    n
  );
}
function M2() {
  ur(2);
}
function Qc(n) {
  return Object.isFrozen(n);
}
var N2 = {};
function Vi(n) {
  const r = N2[n];
  return r || ur(0, n), r;
}
var Co;
function u_() {
  return Co;
}
function U2(n, r) {
  return {
    drafts_: [],
    parent_: n,
    immer_: r,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function y0(n, r) {
  r &&
    (Vi("Patches"),
    (n.patches_ = []),
    (n.inversePatches_ = []),
    (n.patchListener_ = r));
}
function Xh(n) {
  Zh(n), n.drafts_.forEach(k2), (n.drafts_ = null);
}
function Zh(n) {
  n === Co && (Co = n.parent_);
}
function m0(n) {
  return (Co = U2(Co, n));
}
function k2(n) {
  const r = n[Nn];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : (r.revoked_ = !0);
}
function p0(n, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const a = r.drafts_[0];
  return (
    n !== void 0 && n !== a
      ? (a[Nn].modified_ && (Xh(r), ur(4)),
        ea(n) && ((n = Cc(r, n)), r.parent_ || Dc(r, n)),
        r.patches_ &&
          Vi("Patches").generateReplacementPatches_(
            a[Nn].base_,
            n,
            r.patches_,
            r.inversePatches_
          ))
      : (n = Cc(r, a, [])),
    Xh(r),
    r.patches_ && r.patchListener_(r.patches_, r.inversePatches_),
    n !== s_ ? n : void 0
  );
}
function Cc(n, r, a) {
  if (Qc(r)) return r;
  const s = r[Nn];
  if (!s) return jc(r, (o, u) => v0(n, s, r, o, u, a)), r;
  if (s.scope_ !== n) return r;
  if (!s.modified_) return Dc(n, s.base_, !0), s.base_;
  if (!s.finalized_) {
    (s.finalized_ = !0), s.scope_.unfinalizedDrafts_--;
    const o = s.copy_;
    let u = o,
      f = !1;
    s.type_ === 3 && ((u = new Set(o)), o.clear(), (f = !0)),
      jc(u, (h, y) => v0(n, s, o, h, y, a, f)),
      Dc(n, o, !1),
      a &&
        n.patches_ &&
        Vi("Patches").generatePatches_(s, a, n.patches_, n.inversePatches_);
  }
  return s.copy_;
}
function v0(n, r, a, s, o, u, f) {
  if ($i(o)) {
    const h =
        u && r && r.type_ !== 3 && !Yh(r.assigned_, s) ? u.concat(s) : void 0,
      y = Cc(n, o, h);
    if ((o_(a, s, y), $i(y))) n.canAutoFreeze_ = !1;
    else return;
  } else f && a.add(o);
  if (ea(o) && !Qc(o)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return;
    Cc(n, o),
      (!r || !r.scope_.parent_) &&
        typeof s != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(a, s) &&
        Dc(n, o);
  }
}
function Dc(n, r, a = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && Oy(r, a);
}
function z2(n, r) {
  const a = Array.isArray(n),
    s = {
      type_: a ? 1 : 0,
      scope_: r ? r.scope_ : u_(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: r,
      base_: n,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = s,
    u = Ay;
  a && ((o = [s]), (u = Do));
  const { revoke: f, proxy: h } = Proxy.revocable(o, u);
  return (s.draft_ = h), (s.revoke_ = f), h;
}
var Ay = {
    get(n, r) {
      if (r === Nn) return n;
      const a = Ti(n);
      if (!Yh(a, r)) return L2(n, a, r);
      const s = a[r];
      return n.finalized_ || !ea(s)
        ? s
        : s === _h(n.base_, r)
        ? (wh(n), (n.copy_[r] = Jh(s, n)))
        : s;
    },
    has(n, r) {
      return r in Ti(n);
    },
    ownKeys(n) {
      return Reflect.ownKeys(Ti(n));
    },
    set(n, r, a) {
      const s = c_(Ti(n), r);
      if (s != null && s.set) return s.set.call(n.draft_, a), !0;
      if (!n.modified_) {
        const o = _h(Ti(n), r),
          u = o == null ? void 0 : o[Nn];
        if (u && u.base_ === a)
          return (n.copy_[r] = a), (n.assigned_[r] = !1), !0;
        if (D2(a, o) && (a !== void 0 || Yh(n.base_, r))) return !0;
        wh(n), Ih(n);
      }
      return (
        (n.copy_[r] === a && (a !== void 0 || r in n.copy_)) ||
          (Number.isNaN(a) && Number.isNaN(n.copy_[r])) ||
          ((n.copy_[r] = a), (n.assigned_[r] = !0)),
        !0
      );
    },
    deleteProperty(n, r) {
      return (
        _h(n.base_, r) !== void 0 || r in n.base_
          ? ((n.assigned_[r] = !1), wh(n), Ih(n))
          : delete n.assigned_[r],
        n.copy_ && delete n.copy_[r],
        !0
      );
    },
    getOwnPropertyDescriptor(n, r) {
      const a = Ti(n),
        s = Reflect.getOwnPropertyDescriptor(a, r);
      return (
        s && {
          writable: !0,
          configurable: n.type_ !== 1 || r !== "length",
          enumerable: s.enumerable,
          value: a[r],
        }
      );
    },
    defineProperty() {
      ur(11);
    },
    getPrototypeOf(n) {
      return rl(n.base_);
    },
    setPrototypeOf() {
      ur(12);
    },
  },
  Do = {};
jc(Ay, (n, r) => {
  Do[n] = function () {
    return (arguments[0] = arguments[0][0]), r.apply(this, arguments);
  };
});
Do.deleteProperty = function (n, r) {
  return Do.set.call(this, n, r, void 0);
};
Do.set = function (n, r, a) {
  return Ay.set.call(this, n[0], r, a, n[0]);
};
function _h(n, r) {
  const a = n[Nn];
  return (a ? Ti(a) : n)[r];
}
function L2(n, r, a) {
  var o;
  const s = c_(r, a);
  return s
    ? "value" in s
      ? s.value
      : (o = s.get) == null
      ? void 0
      : o.call(n.draft_)
    : void 0;
}
function c_(n, r) {
  if (!(r in n)) return;
  let a = rl(n);
  for (; a; ) {
    const s = Object.getOwnPropertyDescriptor(a, r);
    if (s) return s;
    a = rl(a);
  }
}
function Ih(n) {
  n.modified_ || ((n.modified_ = !0), n.parent_ && Ih(n.parent_));
}
function wh(n) {
  n.copy_ || (n.copy_ = Kh(n.base_, n.scope_.immer_.useStrictShallowCopy_));
}
var B2 = class {
  constructor(n) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (r, a, s) => {
        if (typeof r == "function" && typeof a != "function") {
          const u = a;
          a = r;
          const f = this;
          return function (y = u, ...m) {
            return f.produce(y, (p) => a.call(this, p, ...m));
          };
        }
        typeof a != "function" && ur(6),
          s !== void 0 && typeof s != "function" && ur(7);
        let o;
        if (ea(r)) {
          const u = m0(this),
            f = Jh(r, void 0);
          let h = !0;
          try {
            (o = a(f)), (h = !1);
          } finally {
            h ? Xh(u) : Zh(u);
          }
          return y0(u, s), p0(o, u);
        } else if (!r || typeof r != "object") {
          if (
            ((o = a(r)),
            o === void 0 && (o = r),
            o === s_ && (o = void 0),
            this.autoFreeze_ && Oy(o, !0),
            s)
          ) {
            const u = [],
              f = [];
            Vi("Patches").generateReplacementPatches_(r, o, u, f), s(u, f);
          }
          return o;
        } else ur(1, r);
      }),
      (this.produceWithPatches = (r, a) => {
        if (typeof r == "function")
          return (f, ...h) => this.produceWithPatches(f, (y) => r(y, ...h));
        let s, o;
        return [
          this.produce(r, a, (f, h) => {
            (s = f), (o = h);
          }),
          s,
          o,
        ];
      }),
      typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
        this.setAutoFreeze(n.autoFreeze),
      typeof (n == null ? void 0 : n.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(n.useStrictShallowCopy);
  }
  createDraft(n) {
    ea(n) || ur(8), $i(n) && (n = q2(n));
    const r = m0(this),
      a = Jh(n, void 0);
    return (a[Nn].isManual_ = !0), Zh(r), a;
  }
  finishDraft(n, r) {
    const a = n && n[Nn];
    (!a || !a.isManual_) && ur(9);
    const { scope_: s } = a;
    return y0(s, r), p0(void 0, s);
  }
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  applyPatches(n, r) {
    let a;
    for (a = r.length - 1; a >= 0; a--) {
      const o = r[a];
      if (o.path.length === 0 && o.op === "replace") {
        n = o.value;
        break;
      }
    }
    a > -1 && (r = r.slice(a + 1));
    const s = Vi("Patches").applyPatches_;
    return $i(n) ? s(n, r) : this.produce(n, (o) => s(o, r));
  }
};
function Jh(n, r) {
  const a = Fc(n)
    ? Vi("MapSet").proxyMap_(n, r)
    : Gc(n)
    ? Vi("MapSet").proxySet_(n, r)
    : z2(n, r);
  return (r ? r.scope_ : u_()).drafts_.push(a), a;
}
function q2(n) {
  return $i(n) || ur(10, n), f_(n);
}
function f_(n) {
  if (!ea(n) || Qc(n)) return n;
  const r = n[Nn];
  let a;
  if (r) {
    if (!r.modified_) return r.base_;
    (r.finalized_ = !0), (a = Kh(n, r.scope_.immer_.useStrictShallowCopy_));
  } else a = Kh(n, !0);
  return (
    jc(a, (s, o) => {
      o_(a, s, f_(o));
    }),
    r && (r.finalized_ = !1),
    a
  );
}
var Un = new B2(),
  d_ = Un.produce;
Un.produceWithPatches.bind(Un);
Un.setAutoFreeze.bind(Un);
Un.setUseStrictShallowCopy.bind(Un);
Un.applyPatches.bind(Un);
Un.createDraft.bind(Un);
Un.finishDraft.bind(Un);
function h_(n) {
  return ({ dispatch: a, getState: s }) =>
    (o) =>
    (u) =>
      typeof u == "function" ? u(a, s, n) : o(u);
}
var H2 = h_(),
  P2 = h_,
  $2 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Ac
              : Ac.apply(null, arguments);
        };
function g0(n, r) {
  function a(...s) {
    if (r) {
      let o = r(...s);
      if (!o) throw new Error(Jr(0));
      return {
        type: n,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: n, payload: s[0] };
  }
  return (
    (a.toString = () => `${n}`),
    (a.type = n),
    (a.match = (s) => j2(s) && s.type === n),
    a
  );
}
var y_ = class bo extends Array {
  constructor(...r) {
    super(...r), Object.setPrototypeOf(this, bo.prototype);
  }
  static get [Symbol.species]() {
    return bo;
  }
  concat(...r) {
    return super.concat.apply(this, r);
  }
  prepend(...r) {
    return r.length === 1 && Array.isArray(r[0])
      ? new bo(...r[0].concat(this))
      : new bo(...r.concat(this));
  }
};
function b0(n) {
  return ea(n) ? d_(n, () => {}) : n;
}
function sc(n, r, a) {
  return n.has(r) ? n.get(r) : n.set(r, a(r)).get(r);
}
function V2(n) {
  return typeof n == "boolean";
}
var F2 = () =>
    function (r) {
      const {
        thunk: a = !0,
        immutableCheck: s = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: u = !0,
      } = r ?? {};
      let f = new y_();
      return a && (V2(a) ? f.push(H2) : f.push(P2(a.extraArgument))), f;
    },
  G2 = "RTK_autoBatch",
  _0 = (n) => (r) => {
    setTimeout(r, n);
  },
  Q2 =
    (n = { type: "raf" }) =>
    (r) =>
    (...a) => {
      const s = r(...a);
      let o = !0,
        u = !1,
        f = !1;
      const h = new Set(),
        y =
          n.type === "tick"
            ? queueMicrotask
            : n.type === "raf"
            ? typeof window < "u" && window.requestAnimationFrame
              ? window.requestAnimationFrame
              : _0(10)
            : n.type === "callback"
            ? n.queueNotification
            : _0(n.timeout),
        m = () => {
          (f = !1), u && ((u = !1), h.forEach((p) => p()));
        };
      return Object.assign({}, s, {
        subscribe(p) {
          const g = () => o && p(),
            b = s.subscribe(g);
          return (
            h.add(p),
            () => {
              b(), h.delete(p);
            }
          );
        },
        dispatch(p) {
          var g;
          try {
            return (
              (o = !((g = p == null ? void 0 : p.meta) != null && g[G2])),
              (u = !o),
              u && (f || ((f = !0), y(m))),
              s.dispatch(p)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  Y2 = (n) =>
    function (a) {
      const { autoBatch: s = !0 } = a ?? {};
      let o = new y_(n);
      return s && o.push(Q2(typeof s == "object" ? s : void 0)), o;
    };
function K2(n) {
  const r = F2(),
    {
      reducer: a = void 0,
      middleware: s,
      devTools: o = !0,
      preloadedState: u = void 0,
      enhancers: f = void 0,
    } = n || {};
  let h;
  if (typeof a == "function") h = a;
  else if (Ry(a)) h = O2(a);
  else throw new Error(Jr(1));
  let y;
  typeof s == "function" ? (y = s(r)) : (y = r());
  let m = Ac;
  o && (m = $2({ trace: !1, ...(typeof o == "object" && o) }));
  const p = A2(...y),
    g = Y2(p);
  let b = typeof f == "function" ? f(g) : g();
  const S = m(...b);
  return i_(h, u, S);
}
function m_(n) {
  const r = {},
    a = [];
  let s;
  const o = {
    addCase(u, f) {
      const h = typeof u == "string" ? u : u.type;
      if (!h) throw new Error(Jr(28));
      if (h in r) throw new Error(Jr(29));
      return (r[h] = f), o;
    },
    addMatcher(u, f) {
      return a.push({ matcher: u, reducer: f }), o;
    },
    addDefaultCase(u) {
      return (s = u), o;
    },
  };
  return n(o), [r, a, s];
}
function X2(n) {
  return typeof n == "function";
}
function Z2(n, r) {
  let [a, s, o] = m_(r),
    u;
  if (X2(n)) u = () => b0(n());
  else {
    const h = b0(n);
    u = () => h;
  }
  function f(h = u(), y) {
    let m = [
      a[y.type],
      ...s.filter(({ matcher: p }) => p(y)).map(({ reducer: p }) => p),
    ];
    return (
      m.filter((p) => !!p).length === 0 && (m = [o]),
      m.reduce((p, g) => {
        if (g)
          if ($i(p)) {
            const S = g(p, y);
            return S === void 0 ? p : S;
          } else {
            if (ea(p)) return d_(p, (b) => g(b, y));
            {
              const b = g(p, y);
              if (b === void 0) {
                if (p === null) return p;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return b;
            }
          }
        return p;
      }, h)
    );
  }
  return (f.getInitialState = u), f;
}
var I2 = Symbol.for("rtk-slice-createasyncthunk");
function J2(n, r) {
  return `${n}/${r}`;
}
function W2({ creators: n } = {}) {
  var a;
  const r = (a = n == null ? void 0 : n.asyncThunk) == null ? void 0 : a[I2];
  return function (o) {
    const { name: u, reducerPath: f = u } = o;
    if (!u) throw new Error(Jr(11));
    const h =
        (typeof o.reducers == "function" ? o.reducers(tT()) : o.reducers) || {},
      y = Object.keys(h),
      m = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      p = {
        addCase(Q, P) {
          const j = typeof Q == "string" ? Q : Q.type;
          if (!j) throw new Error(Jr(12));
          if (j in m.sliceCaseReducersByType) throw new Error(Jr(13));
          return (m.sliceCaseReducersByType[j] = P), p;
        },
        addMatcher(Q, P) {
          return m.sliceMatchers.push({ matcher: Q, reducer: P }), p;
        },
        exposeAction(Q, P) {
          return (m.actionCreators[Q] = P), p;
        },
        exposeCaseReducer(Q, P) {
          return (m.sliceCaseReducersByName[Q] = P), p;
        },
      };
    y.forEach((Q) => {
      const P = h[Q],
        j = {
          reducerName: Q,
          type: J2(u, Q),
          createNotation: typeof o.reducers == "function",
        };
      rT(P) ? iT(j, P, p, r) : nT(j, P, p);
    });
    function g() {
      const [Q = {}, P = [], j = void 0] =
          typeof o.extraReducers == "function"
            ? m_(o.extraReducers)
            : [o.extraReducers],
        ie = { ...Q, ...m.sliceCaseReducersByType };
      return Z2(o.initialState, (ue) => {
        for (let te in ie) ue.addCase(te, ie[te]);
        for (let te of m.sliceMatchers) ue.addMatcher(te.matcher, te.reducer);
        for (let te of P) ue.addMatcher(te.matcher, te.reducer);
        j && ue.addDefaultCase(j);
      });
    }
    const b = (Q) => Q,
      S = new Map(),
      x = new WeakMap();
    let N;
    function C(Q, P) {
      return N || (N = g()), N(Q, P);
    }
    function U() {
      return N || (N = g()), N.getInitialState();
    }
    function Y(Q, P = !1) {
      function j(ue) {
        let te = ue[Q];
        return typeof te > "u" && P && (te = sc(x, j, U)), te;
      }
      function ie(ue = b) {
        const te = sc(S, P, () => new WeakMap());
        return sc(te, ue, () => {
          const be = {};
          for (const [Le, he] of Object.entries(o.selectors ?? {}))
            be[Le] = eT(he, ue, () => sc(x, ue, U), P);
          return be;
        });
      }
      return {
        reducerPath: Q,
        getSelectors: ie,
        get selectors() {
          return ie(j);
        },
        selectSlice: j,
      };
    }
    const z = {
      name: u,
      reducer: C,
      actions: m.actionCreators,
      caseReducers: m.sliceCaseReducersByName,
      getInitialState: U,
      ...Y(f),
      injectInto(Q, { reducerPath: P, ...j } = {}) {
        const ie = P ?? f;
        return (
          Q.inject({ reducerPath: ie, reducer: C }, j), { ...z, ...Y(ie, !0) }
        );
      },
    };
    return z;
  };
}
function eT(n, r, a, s) {
  function o(u, ...f) {
    let h = r(u);
    return typeof h > "u" && s && (h = a()), n(h, ...f);
  }
  return (o.unwrapped = n), o;
}
var jy = W2();
function tT() {
  function n(r, a) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: r, ...a };
  }
  return (
    (n.withTypes = () => n),
    {
      reducer(r) {
        return Object.assign(
          {
            [r.name](...a) {
              return r(...a);
            },
          }[r.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(r, a) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: r,
          reducer: a,
        };
      },
      asyncThunk: n,
    }
  );
}
function nT({ type: n, reducerName: r, createNotation: a }, s, o) {
  let u, f;
  if ("reducer" in s) {
    if (a && !aT(s)) throw new Error(Jr(17));
    (u = s.reducer), (f = s.prepare);
  } else u = s;
  o.addCase(n, u)
    .exposeCaseReducer(r, u)
    .exposeAction(r, f ? g0(n, f) : g0(n));
}
function rT(n) {
  return n._reducerDefinitionType === "asyncThunk";
}
function aT(n) {
  return n._reducerDefinitionType === "reducerWithPrepare";
}
function iT({ type: n, reducerName: r }, a, s, o) {
  if (!o) throw new Error(Jr(18));
  const {
      payloadCreator: u,
      fulfilled: f,
      pending: h,
      rejected: y,
      settled: m,
      options: p,
    } = a,
    g = o(n, u, p);
  s.exposeAction(r, g),
    f && s.addCase(g.fulfilled, f),
    h && s.addCase(g.pending, h),
    y && s.addCase(g.rejected, y),
    m && s.addMatcher(g.settled, m),
    s.exposeCaseReducer(r, {
      fulfilled: f || lc,
      pending: h || lc,
      rejected: y || lc,
      settled: m || lc,
    });
}
function lc() {}
function Jr(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
const sT = { searchName: "" },
  p_ = jy({
    name: "search",
    initialState: sT,
    reducers: {
      updateSearchName(n, r) {
        n.searchName = r.payload;
      },
    },
  }),
  { updateSearchName: Za } = p_.actions,
  lT = p_.reducer;
function Cy({ item: n }) {
  const r = Ja(),
    a = hr();
  function s() {
    r(Za(n)), a(`/search?name=${n}`);
  }
  return _.jsx(_.Fragment, {
    children: _.jsx("div", {
      className: "nav-items2",
      onClick: s,
      children: n,
    }),
  });
}
var v_ = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  w0 = Vt.createContext && Vt.createContext(v_),
  oT = ["attr", "size", "title"];
function uT(n, r) {
  if (n == null) return {};
  var a = cT(n, r),
    s,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(n);
    for (o = 0; o < u.length; o++)
      (s = u[o]),
        !(r.indexOf(s) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, s) &&
          (a[s] = n[s]);
  }
  return a;
}
function cT(n, r) {
  if (n == null) return {};
  var a = {};
  for (var s in n)
    if (Object.prototype.hasOwnProperty.call(n, s)) {
      if (r.indexOf(s) >= 0) continue;
      a[s] = n[s];
    }
  return a;
}
function Mc() {
  return (
    (Mc = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var a = arguments[r];
            for (var s in a)
              Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s]);
          }
          return n;
        }),
    Mc.apply(this, arguments)
  );
}
function S0(n, r) {
  var a = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    r &&
      (s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      })),
      a.push.apply(a, s);
  }
  return a;
}
function Nc(n) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? S0(Object(a), !0).forEach(function (s) {
          fT(n, s, a[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
      : S0(Object(a)).forEach(function (s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
  }
  return n;
}
function fT(n, r, a) {
  return (
    (r = dT(r)),
    r in n
      ? Object.defineProperty(n, r, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[r] = a),
    n
  );
}
function dT(n) {
  var r = hT(n, "string");
  return typeof r == "symbol" ? r : r + "";
}
function hT(n, r) {
  if (typeof n != "object" || !n) return n;
  var a = n[Symbol.toPrimitive];
  if (a !== void 0) {
    var s = a.call(n, r);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(n);
}
function g_(n) {
  return (
    n &&
    n.map((r, a) =>
      Vt.createElement(r.tag, Nc({ key: a }, r.attr), g_(r.child))
    )
  );
}
function Po(n) {
  return (r) =>
    Vt.createElement(yT, Mc({ attr: Nc({}, n.attr) }, r), g_(n.child));
}
function yT(n) {
  var r = (a) => {
    var { attr: s, size: o, title: u } = n,
      f = uT(n, oT),
      h = o || a.size || "1em",
      y;
    return (
      a.className && (y = a.className),
      n.className && (y = (y ? y + " " : "") + n.className),
      Vt.createElement(
        "svg",
        Mc(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          a.attr,
          s,
          f,
          {
            className: y,
            style: Nc(Nc({ color: n.color || a.color }, a.style), n.style),
            height: h,
            width: h,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        u && Vt.createElement("title", null, u),
        n.children
      )
    );
  };
  return w0 !== void 0
    ? Vt.createElement(w0.Consumer, null, (a) => r(a))
    : r(v_);
}
function Yc(n) {
  return Po({
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: { d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1",
        },
        child: [],
      },
    ],
  })(n);
}
function mT({ username: n }) {
  return _.jsxs("div", { children: ["Hello, ", n] });
}
function Kc({ username: n }) {
  return _.jsx(Kt, {
    className: "login-button-1",
    to: "/login",
    children: n ? _.jsx(mT, { username: n }) : "Login / SignUp",
  });
}
const Dy = [
  "Badminton",
  "Bag",
  "Tripod",
  "Blutooth speaker",
  "KeyBoard",
  "mosquito racket",
  "Samsung Galaxy a14 5g",
  "Power Bank",
  "Scissor",
];
function pT() {
  const n = Xn((u) => u.user.username),
    r = Xn((u) => u.search.searchName),
    a = hr(),
    s = Ja();
  function o(u) {
    u.key == "Enter" && r.trim() && (s(Za(r)), a(`/search?name=${r}`));
  }
  return _.jsxs(_.Fragment, {
    children: [
      _.jsxs("header", {
        className: "top-bar2",
        children: [
          _.jsx(Kt, { className: "logo2", to: "/", children: "ShopZone" }),
          _.jsxs("div", {
            className: "search-container",
            children: [
              _.jsx("input", {
                type: "text",
                value: r,
                onChange: (u) => s(Za(u.target.value)),
                onKeyDown: o,
                placeholder: "Search for products...",
              }),
              _.jsx("button", { className: "search-button", children: "🔍" }),
            ],
          }),
          _.jsxs("div", {
            className: "header-buttons",
            children: [
              _.jsx(Kt, {
                className: "login-button-1",
                to: "/profile",
                children: "Become a seller",
              }),
              _.jsxs("div", {
                style: { display: "flex" },
                children: [
                  _.jsx("div", {
                    style: { paddingTop: "3px" },
                    children: _.jsx(Yc, { size: 25, color: "#555" }),
                  }),
                  _.jsx(Kc, { username: n }),
                ],
              }),
              _.jsx("button", { className: "cart-btn-1", children: "🛒 Cart" }),
            ],
          }),
        ],
      }),
      _.jsxs("nav", {
        className: "nav-bar2",
        children: [
          _.jsx("button", { className: "nav-all2", children: "= All" }),
          Dy.map((u) => _.jsx(Cy, { item: u }, u.length)),
        ],
      }),
    ],
  });
}
function b_({ itemName: n, discount: r }) {
  let a =
    " 🎉 Get 10 % OFF on all  item ! Limited Time Offer! 🎉 Borrow Now from ShopeZone! 🔥";
  return (
    r &&
      (a = `🎉 Get ${r} % OFF on all  ${n} ! Limited Time Offer! 🎉 Borrow Now from ShopeZone! 🔥`),
    _.jsxs("div", {
      style: {
        backgroundColor: "#fffae6",
        padding: "10px 0",
        overflow: "hidden",
        position: "relative",
        whiteSpace: "nowrap",
        borderTop: "1px solid #ccc",
        borderBottom: "1px solid #ccc",
      },
      children: [
        _.jsx("div", {
          style: {
            display: "inline-block",
            paddingLeft: "100%",
            animation: "ghuraghuri 15s ease-out infinite",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#333",
          },
          children: a,
        }),
        _.jsx("style", {
          children: `
          @keyframes ghuraghuri {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `,
        }),
      ],
    })
  );
}
function vT() {
  const { pathname: n } = dr();
  return (
    D.useEffect(() => {
      window.scrollTo(0, 0);
    }, [n]),
    null
  );
}
function gT() {
  return _.jsxs("div", {
    children: [
      _.jsx("div", { children: _.jsx(pT, {}) }),
      _.jsx(b_, {}),
      _.jsx("div", {
        children: _.jsxs("main", { children: [_.jsx(vT, {}), _.jsx(Bx, {})] }),
      }),
    ],
  });
}
const bT = (n) => {
  let r;
  return (
    n
      ? (r = n)
      : typeof fetch > "u"
      ? (r = (...a) =>
          Ho(async () => {
            const { default: s } = await Promise.resolve().then(() => sl);
            return { default: s };
          }, []).then(({ default: s }) => s(...a)))
      : (r = fetch),
    (...a) => r(...a)
  );
};
class My extends Error {
  constructor(r, a = "FunctionsError", s) {
    super(r), (this.name = a), (this.context = s);
  }
}
class _T extends My {
  constructor(r) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      r
    );
  }
}
class wT extends My {
  constructor(r) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", r);
  }
}
class ST extends My {
  constructor(r) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      r
    );
  }
}
var Wh;
(function (n) {
  (n.Any = "any"),
    (n.ApNortheast1 = "ap-northeast-1"),
    (n.ApNortheast2 = "ap-northeast-2"),
    (n.ApSouth1 = "ap-south-1"),
    (n.ApSoutheast1 = "ap-southeast-1"),
    (n.ApSoutheast2 = "ap-southeast-2"),
    (n.CaCentral1 = "ca-central-1"),
    (n.EuCentral1 = "eu-central-1"),
    (n.EuWest1 = "eu-west-1"),
    (n.EuWest2 = "eu-west-2"),
    (n.EuWest3 = "eu-west-3"),
    (n.SaEast1 = "sa-east-1"),
    (n.UsEast1 = "us-east-1"),
    (n.UsWest1 = "us-west-1"),
    (n.UsWest2 = "us-west-2");
})(Wh || (Wh = {}));
var xT = function (n, r, a, s) {
  function o(u) {
    return u instanceof a
      ? u
      : new a(function (f) {
          f(u);
        });
  }
  return new (a || (a = Promise))(function (u, f) {
    function h(p) {
      try {
        m(s.next(p));
      } catch (g) {
        f(g);
      }
    }
    function y(p) {
      try {
        m(s.throw(p));
      } catch (g) {
        f(g);
      }
    }
    function m(p) {
      p.done ? u(p.value) : o(p.value).then(h, y);
    }
    m((s = s.apply(n, r || [])).next());
  });
};
class ET {
  constructor(r, { headers: a = {}, customFetch: s, region: o = Wh.Any } = {}) {
    (this.url = r), (this.headers = a), (this.region = o), (this.fetch = bT(s));
  }
  setAuth(r) {
    this.headers.Authorization = `Bearer ${r}`;
  }
  invoke(r, a = {}) {
    var s;
    return xT(this, void 0, void 0, function* () {
      try {
        const { headers: o, method: u, body: f } = a;
        let h = {},
          { region: y } = a;
        y || (y = this.region), y && y !== "any" && (h["x-region"] = y);
        let m;
        f &&
          ((o && !Object.prototype.hasOwnProperty.call(o, "Content-Type")) ||
            !o) &&
          ((typeof Blob < "u" && f instanceof Blob) || f instanceof ArrayBuffer
            ? ((h["Content-Type"] = "application/octet-stream"), (m = f))
            : typeof f == "string"
            ? ((h["Content-Type"] = "text/plain"), (m = f))
            : typeof FormData < "u" && f instanceof FormData
            ? (m = f)
            : ((h["Content-Type"] = "application/json"),
              (m = JSON.stringify(f))));
        const p = yield this.fetch(`${this.url}/${r}`, {
            method: u || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, h), this.headers),
              o
            ),
            body: m,
          }).catch((x) => {
            throw new _T(x);
          }),
          g = p.headers.get("x-relay-error");
        if (g && g === "true") throw new wT(p);
        if (!p.ok) throw new ST(p);
        let b = (
            (s = p.headers.get("Content-Type")) !== null && s !== void 0
              ? s
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          S;
        return (
          b === "application/json"
            ? (S = yield p.json())
            : b === "application/octet-stream"
            ? (S = yield p.blob())
            : b === "text/event-stream"
            ? (S = p)
            : b === "multipart/form-data"
            ? (S = yield p.formData())
            : (S = yield p.text()),
          { data: S, error: null }
        );
      } catch (o) {
        return { data: null, error: o };
      }
    });
  }
}
var Pt = {},
  Cs = {},
  Ds = {},
  Ms = {},
  Ns = {},
  Us = {},
  TT = function () {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  },
  al = TT();
const RT = al.fetch,
  __ = al.fetch.bind(al),
  w_ = al.Headers,
  OT = al.Request,
  AT = al.Response,
  sl = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Headers: w_,
        Request: OT,
        Response: AT,
        default: __,
        fetch: RT,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  jT = a1(sl);
var oc = {},
  x0;
function S_() {
  if (x0) return oc;
  (x0 = 1), Object.defineProperty(oc, "__esModule", { value: !0 });
  class n extends Error {
    constructor(a) {
      super(a.message),
        (this.name = "PostgrestError"),
        (this.details = a.details),
        (this.hint = a.hint),
        (this.code = a.code);
    }
  }
  return (oc.default = n), oc;
}
var E0;
function x_() {
  if (E0) return Us;
  E0 = 1;
  var n =
    (Us && Us.__importDefault) ||
    function (o) {
      return o && o.__esModule ? o : { default: o };
    };
  Object.defineProperty(Us, "__esModule", { value: !0 });
  const r = n(jT),
    a = n(S_());
  class s {
    constructor(u) {
      (this.shouldThrowOnError = !1),
        (this.method = u.method),
        (this.url = u.url),
        (this.headers = u.headers),
        (this.schema = u.schema),
        (this.body = u.body),
        (this.shouldThrowOnError = u.shouldThrowOnError),
        (this.signal = u.signal),
        (this.isMaybeSingle = u.isMaybeSingle),
        u.fetch
          ? (this.fetch = u.fetch)
          : typeof fetch > "u"
          ? (this.fetch = r.default)
          : (this.fetch = fetch);
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    setHeader(u, f) {
      return (
        (this.headers = Object.assign({}, this.headers)),
        (this.headers[u] = f),
        this
      );
    }
    then(u, f) {
      this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? (this.headers["Accept-Profile"] = this.schema)
          : (this.headers["Content-Profile"] = this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          (this.headers["Content-Type"] = "application/json");
      const h = this.fetch;
      let y = h(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (m) => {
        var p, g, b;
        let S = null,
          x = null,
          N = null,
          C = m.status,
          U = m.statusText;
        if (m.ok) {
          if (this.method !== "HEAD") {
            const P = await m.text();
            P === "" ||
              (this.headers.Accept === "text/csv" ||
              (this.headers.Accept &&
                this.headers.Accept.includes("application/vnd.pgrst.plan+text"))
                ? (x = P)
                : (x = JSON.parse(P)));
          }
          const z =
              (p = this.headers.Prefer) === null || p === void 0
                ? void 0
                : p.match(/count=(exact|planned|estimated)/),
            Q =
              (g = m.headers.get("content-range")) === null || g === void 0
                ? void 0
                : g.split("/");
          z && Q && Q.length > 1 && (N = parseInt(Q[1])),
            this.isMaybeSingle &&
              this.method === "GET" &&
              Array.isArray(x) &&
              (x.length > 1
                ? ((S = {
                    code: "PGRST116",
                    details: `Results contain ${x.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (x = null),
                  (N = null),
                  (C = 406),
                  (U = "Not Acceptable"))
                : x.length === 1
                ? (x = x[0])
                : (x = null));
        } else {
          const z = await m.text();
          try {
            (S = JSON.parse(z)),
              Array.isArray(S) &&
                m.status === 404 &&
                ((x = []), (S = null), (C = 200), (U = "OK"));
          } catch {
            m.status === 404 && z === ""
              ? ((C = 204), (U = "No Content"))
              : (S = { message: z });
          }
          if (
            (S &&
              this.isMaybeSingle &&
              !(
                (b = S == null ? void 0 : S.details) === null || b === void 0
              ) &&
              b.includes("0 rows") &&
              ((S = null), (C = 200), (U = "OK")),
            S && this.shouldThrowOnError)
          )
            throw new a.default(S);
        }
        return { error: S, data: x, count: N, status: C, statusText: U };
      });
      return (
        this.shouldThrowOnError ||
          (y = y.catch((m) => {
            var p, g, b;
            return {
              error: {
                message: `${
                  (p = m == null ? void 0 : m.name) !== null && p !== void 0
                    ? p
                    : "FetchError"
                }: ${m == null ? void 0 : m.message}`,
                details: `${
                  (g = m == null ? void 0 : m.stack) !== null && g !== void 0
                    ? g
                    : ""
                }`,
                hint: "",
                code: `${
                  (b = m == null ? void 0 : m.code) !== null && b !== void 0
                    ? b
                    : ""
                }`,
              },
              data: null,
              count: null,
              status: 0,
              statusText: "",
            };
          })),
        y.then(u, f)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  }
  return (Us.default = s), Us;
}
var T0;
function E_() {
  if (T0) return Ns;
  T0 = 1;
  var n =
    (Ns && Ns.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  Object.defineProperty(Ns, "__esModule", { value: !0 });
  const r = n(x_());
  class a extends r.default {
    select(o) {
      let u = !1;
      const f = (o ?? "*")
        .split("")
        .map((h) => (/\s/.test(h) && !u ? "" : (h === '"' && (u = !u), h)))
        .join("");
      return (
        this.url.searchParams.set("select", f),
        this.headers.Prefer && (this.headers.Prefer += ","),
        (this.headers.Prefer += "return=representation"),
        this
      );
    }
    order(
      o,
      {
        ascending: u = !0,
        nullsFirst: f,
        foreignTable: h,
        referencedTable: y = h,
      } = {}
    ) {
      const m = y ? `${y}.order` : "order",
        p = this.url.searchParams.get(m);
      return (
        this.url.searchParams.set(
          m,
          `${p ? `${p},` : ""}${o}.${u ? "asc" : "desc"}${
            f === void 0 ? "" : f ? ".nullsfirst" : ".nullslast"
          }`
        ),
        this
      );
    }
    limit(o, { foreignTable: u, referencedTable: f = u } = {}) {
      const h = typeof f > "u" ? "limit" : `${f}.limit`;
      return this.url.searchParams.set(h, `${o}`), this;
    }
    range(o, u, { foreignTable: f, referencedTable: h = f } = {}) {
      const y = typeof h > "u" ? "offset" : `${h}.offset`,
        m = typeof h > "u" ? "limit" : `${h}.limit`;
      return (
        this.url.searchParams.set(y, `${o}`),
        this.url.searchParams.set(m, `${u - o + 1}`),
        this
      );
    }
    abortSignal(o) {
      return (this.signal = o), this;
    }
    single() {
      return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
    }
    maybeSingle() {
      return (
        this.method === "GET"
          ? (this.headers.Accept = "application/json")
          : (this.headers.Accept = "application/vnd.pgrst.object+json"),
        (this.isMaybeSingle = !0),
        this
      );
    }
    csv() {
      return (this.headers.Accept = "text/csv"), this;
    }
    geojson() {
      return (this.headers.Accept = "application/geo+json"), this;
    }
    explain({
      analyze: o = !1,
      verbose: u = !1,
      settings: f = !1,
      buffers: h = !1,
      wal: y = !1,
      format: m = "text",
    } = {}) {
      var p;
      const g = [
          o ? "analyze" : null,
          u ? "verbose" : null,
          f ? "settings" : null,
          h ? "buffers" : null,
          y ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        b =
          (p = this.headers.Accept) !== null && p !== void 0
            ? p
            : "application/json";
      return (
        (this.headers.Accept = `application/vnd.pgrst.plan+${m}; for="${b}"; options=${g};`),
        m === "json" ? this : this
      );
    }
    rollback() {
      var o;
      return (
        ((o = this.headers.Prefer) !== null && o !== void 0 ? o : "").trim()
          .length > 0
          ? (this.headers.Prefer += ",tx=rollback")
          : (this.headers.Prefer = "tx=rollback"),
        this
      );
    }
    returns() {
      return this;
    }
  }
  return (Ns.default = a), Ns;
}
var R0;
function Ny() {
  if (R0) return Ms;
  R0 = 1;
  var n =
    (Ms && Ms.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  Object.defineProperty(Ms, "__esModule", { value: !0 });
  const r = n(E_());
  class a extends r.default {
    eq(o, u) {
      return this.url.searchParams.append(o, `eq.${u}`), this;
    }
    neq(o, u) {
      return this.url.searchParams.append(o, `neq.${u}`), this;
    }
    gt(o, u) {
      return this.url.searchParams.append(o, `gt.${u}`), this;
    }
    gte(o, u) {
      return this.url.searchParams.append(o, `gte.${u}`), this;
    }
    lt(o, u) {
      return this.url.searchParams.append(o, `lt.${u}`), this;
    }
    lte(o, u) {
      return this.url.searchParams.append(o, `lte.${u}`), this;
    }
    like(o, u) {
      return this.url.searchParams.append(o, `like.${u}`), this;
    }
    likeAllOf(o, u) {
      return (
        this.url.searchParams.append(o, `like(all).{${u.join(",")}}`), this
      );
    }
    likeAnyOf(o, u) {
      return (
        this.url.searchParams.append(o, `like(any).{${u.join(",")}}`), this
      );
    }
    ilike(o, u) {
      return this.url.searchParams.append(o, `ilike.${u}`), this;
    }
    ilikeAllOf(o, u) {
      return (
        this.url.searchParams.append(o, `ilike(all).{${u.join(",")}}`), this
      );
    }
    ilikeAnyOf(o, u) {
      return (
        this.url.searchParams.append(o, `ilike(any).{${u.join(",")}}`), this
      );
    }
    is(o, u) {
      return this.url.searchParams.append(o, `is.${u}`), this;
    }
    in(o, u) {
      const f = Array.from(new Set(u))
        .map((h) =>
          typeof h == "string" && new RegExp("[,()]").test(h)
            ? `"${h}"`
            : `${h}`
        )
        .join(",");
      return this.url.searchParams.append(o, `in.(${f})`), this;
    }
    contains(o, u) {
      return (
        typeof u == "string"
          ? this.url.searchParams.append(o, `cs.${u}`)
          : Array.isArray(u)
          ? this.url.searchParams.append(o, `cs.{${u.join(",")}}`)
          : this.url.searchParams.append(o, `cs.${JSON.stringify(u)}`),
        this
      );
    }
    containedBy(o, u) {
      return (
        typeof u == "string"
          ? this.url.searchParams.append(o, `cd.${u}`)
          : Array.isArray(u)
          ? this.url.searchParams.append(o, `cd.{${u.join(",")}}`)
          : this.url.searchParams.append(o, `cd.${JSON.stringify(u)}`),
        this
      );
    }
    rangeGt(o, u) {
      return this.url.searchParams.append(o, `sr.${u}`), this;
    }
    rangeGte(o, u) {
      return this.url.searchParams.append(o, `nxl.${u}`), this;
    }
    rangeLt(o, u) {
      return this.url.searchParams.append(o, `sl.${u}`), this;
    }
    rangeLte(o, u) {
      return this.url.searchParams.append(o, `nxr.${u}`), this;
    }
    rangeAdjacent(o, u) {
      return this.url.searchParams.append(o, `adj.${u}`), this;
    }
    overlaps(o, u) {
      return (
        typeof u == "string"
          ? this.url.searchParams.append(o, `ov.${u}`)
          : this.url.searchParams.append(o, `ov.{${u.join(",")}}`),
        this
      );
    }
    textSearch(o, u, { config: f, type: h } = {}) {
      let y = "";
      h === "plain"
        ? (y = "pl")
        : h === "phrase"
        ? (y = "ph")
        : h === "websearch" && (y = "w");
      const m = f === void 0 ? "" : `(${f})`;
      return this.url.searchParams.append(o, `${y}fts${m}.${u}`), this;
    }
    match(o) {
      return (
        Object.entries(o).forEach(([u, f]) => {
          this.url.searchParams.append(u, `eq.${f}`);
        }),
        this
      );
    }
    not(o, u, f) {
      return this.url.searchParams.append(o, `not.${u}.${f}`), this;
    }
    or(o, { foreignTable: u, referencedTable: f = u } = {}) {
      const h = f ? `${f}.or` : "or";
      return this.url.searchParams.append(h, `(${o})`), this;
    }
    filter(o, u, f) {
      return this.url.searchParams.append(o, `${u}.${f}`), this;
    }
  }
  return (Ms.default = a), Ms;
}
var O0;
function T_() {
  if (O0) return Ds;
  O0 = 1;
  var n =
    (Ds && Ds.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  Object.defineProperty(Ds, "__esModule", { value: !0 });
  const r = n(Ny());
  class a {
    constructor(o, { headers: u = {}, schema: f, fetch: h }) {
      (this.url = o), (this.headers = u), (this.schema = f), (this.fetch = h);
    }
    select(o, { head: u = !1, count: f } = {}) {
      const h = u ? "HEAD" : "GET";
      let y = !1;
      const m = (o ?? "*")
        .split("")
        .map((p) => (/\s/.test(p) && !y ? "" : (p === '"' && (y = !y), p)))
        .join("");
      return (
        this.url.searchParams.set("select", m),
        f && (this.headers.Prefer = `count=${f}`),
        new r.default({
          method: h,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
    insert(o, { count: u, defaultToNull: f = !0 } = {}) {
      const h = "POST",
        y = [];
      if (
        (this.headers.Prefer && y.push(this.headers.Prefer),
        u && y.push(`count=${u}`),
        f || y.push("missing=default"),
        (this.headers.Prefer = y.join(",")),
        Array.isArray(o))
      ) {
        const m = o.reduce((p, g) => p.concat(Object.keys(g)), []);
        if (m.length > 0) {
          const p = [...new Set(m)].map((g) => `"${g}"`);
          this.url.searchParams.set("columns", p.join(","));
        }
      }
      return new r.default({
        method: h,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: o,
        fetch: this.fetch,
        allowEmpty: !1,
      });
    }
    upsert(
      o,
      {
        onConflict: u,
        ignoreDuplicates: f = !1,
        count: h,
        defaultToNull: y = !0,
      } = {}
    ) {
      const m = "POST",
        p = [`resolution=${f ? "ignore" : "merge"}-duplicates`];
      if (
        (u !== void 0 && this.url.searchParams.set("on_conflict", u),
        this.headers.Prefer && p.push(this.headers.Prefer),
        h && p.push(`count=${h}`),
        y || p.push("missing=default"),
        (this.headers.Prefer = p.join(",")),
        Array.isArray(o))
      ) {
        const g = o.reduce((b, S) => b.concat(Object.keys(S)), []);
        if (g.length > 0) {
          const b = [...new Set(g)].map((S) => `"${S}"`);
          this.url.searchParams.set("columns", b.join(","));
        }
      }
      return new r.default({
        method: m,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: o,
        fetch: this.fetch,
        allowEmpty: !1,
      });
    }
    update(o, { count: u } = {}) {
      const f = "PATCH",
        h = [];
      return (
        this.headers.Prefer && h.push(this.headers.Prefer),
        u && h.push(`count=${u}`),
        (this.headers.Prefer = h.join(",")),
        new r.default({
          method: f,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          body: o,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
    delete({ count: o } = {}) {
      const u = "DELETE",
        f = [];
      return (
        o && f.push(`count=${o}`),
        this.headers.Prefer && f.unshift(this.headers.Prefer),
        (this.headers.Prefer = f.join(",")),
        new r.default({
          method: u,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
  }
  return (Ds.default = a), Ds;
}
var co = {},
  fo = {},
  A0;
function CT() {
  return (
    A0 ||
      ((A0 = 1),
      Object.defineProperty(fo, "__esModule", { value: !0 }),
      (fo.version = void 0),
      (fo.version = "0.0.0-automated")),
    fo
  );
}
var j0;
function DT() {
  if (j0) return co;
  (j0 = 1),
    Object.defineProperty(co, "__esModule", { value: !0 }),
    (co.DEFAULT_HEADERS = void 0);
  const n = CT();
  return (
    (co.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${n.version}` }), co
  );
}
var C0;
function MT() {
  if (C0) return Cs;
  C0 = 1;
  var n =
    (Cs && Cs.__importDefault) ||
    function (u) {
      return u && u.__esModule ? u : { default: u };
    };
  Object.defineProperty(Cs, "__esModule", { value: !0 });
  const r = n(T_()),
    a = n(Ny()),
    s = DT();
  class o {
    constructor(f, { headers: h = {}, schema: y, fetch: m } = {}) {
      (this.url = f),
        (this.headers = Object.assign(Object.assign({}, s.DEFAULT_HEADERS), h)),
        (this.schemaName = y),
        (this.fetch = m);
    }
    from(f) {
      const h = new URL(`${this.url}/${f}`);
      return new r.default(h, {
        headers: Object.assign({}, this.headers),
        schema: this.schemaName,
        fetch: this.fetch,
      });
    }
    schema(f) {
      return new o(this.url, {
        headers: this.headers,
        schema: f,
        fetch: this.fetch,
      });
    }
    rpc(f, h = {}, { head: y = !1, get: m = !1, count: p } = {}) {
      let g;
      const b = new URL(`${this.url}/rpc/${f}`);
      let S;
      y || m
        ? ((g = y ? "HEAD" : "GET"),
          Object.entries(h)
            .filter(([N, C]) => C !== void 0)
            .map(([N, C]) => [
              N,
              Array.isArray(C) ? `{${C.join(",")}}` : `${C}`,
            ])
            .forEach(([N, C]) => {
              b.searchParams.append(N, C);
            }))
        : ((g = "POST"), (S = h));
      const x = Object.assign({}, this.headers);
      return (
        p && (x.Prefer = `count=${p}`),
        new a.default({
          method: g,
          url: b,
          headers: x,
          schema: this.schemaName,
          body: S,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
  }
  return (Cs.default = o), Cs;
}
var D0;
function NT() {
  if (D0) return Pt;
  D0 = 1;
  var n =
    (Pt && Pt.__importDefault) ||
    function (h) {
      return h && h.__esModule ? h : { default: h };
    };
  Object.defineProperty(Pt, "__esModule", { value: !0 }),
    (Pt.PostgrestError =
      Pt.PostgrestBuilder =
      Pt.PostgrestTransformBuilder =
      Pt.PostgrestFilterBuilder =
      Pt.PostgrestQueryBuilder =
      Pt.PostgrestClient =
        void 0);
  const r = n(MT());
  Pt.PostgrestClient = r.default;
  const a = n(T_());
  Pt.PostgrestQueryBuilder = a.default;
  const s = n(Ny());
  Pt.PostgrestFilterBuilder = s.default;
  const o = n(E_());
  Pt.PostgrestTransformBuilder = o.default;
  const u = n(x_());
  Pt.PostgrestBuilder = u.default;
  const f = n(S_());
  return (
    (Pt.PostgrestError = f.default),
    (Pt.default = {
      PostgrestClient: r.default,
      PostgrestQueryBuilder: a.default,
      PostgrestFilterBuilder: s.default,
      PostgrestTransformBuilder: o.default,
      PostgrestBuilder: u.default,
      PostgrestError: f.default,
    }),
    Pt
  );
}
var UT = NT();
const kT = pb(UT),
  {
    PostgrestClient: zT,
    PostgrestQueryBuilder: Uj,
    PostgrestFilterBuilder: kj,
    PostgrestTransformBuilder: zj,
    PostgrestBuilder: Lj,
    PostgrestError: Bj,
  } = kT;
let ey;
typeof window > "u" ? (ey = require("ws")) : (ey = window.WebSocket);
const LT = "2.11.10",
  BT = { "X-Client-Info": `realtime-js/${LT}` },
  qT = "1.0.0",
  R_ = 1e4,
  HT = 1e3;
var Vs;
(function (n) {
  (n[(n.connecting = 0)] = "connecting"),
    (n[(n.open = 1)] = "open"),
    (n[(n.closing = 2)] = "closing"),
    (n[(n.closed = 3)] = "closed");
})(Vs || (Vs = {}));
var rn;
(function (n) {
  (n.closed = "closed"),
    (n.errored = "errored"),
    (n.joined = "joined"),
    (n.joining = "joining"),
    (n.leaving = "leaving");
})(rn || (rn = {}));
var lr;
(function (n) {
  (n.close = "phx_close"),
    (n.error = "phx_error"),
    (n.join = "phx_join"),
    (n.reply = "phx_reply"),
    (n.leave = "phx_leave"),
    (n.access_token = "access_token");
})(lr || (lr = {}));
var ty;
(function (n) {
  n.websocket = "websocket";
})(ty || (ty = {}));
var Ai;
(function (n) {
  (n.Connecting = "connecting"),
    (n.Open = "open"),
    (n.Closing = "closing"),
    (n.Closed = "closed");
})(Ai || (Ai = {}));
class PT {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(r, a) {
    return r.constructor === ArrayBuffer
      ? a(this._binaryDecode(r))
      : a(typeof r == "string" ? JSON.parse(r) : {});
  }
  _binaryDecode(r) {
    const a = new DataView(r),
      s = new TextDecoder();
    return this._decodeBroadcast(r, a, s);
  }
  _decodeBroadcast(r, a, s) {
    const o = a.getUint8(1),
      u = a.getUint8(2);
    let f = this.HEADER_LENGTH + 2;
    const h = s.decode(r.slice(f, f + o));
    f = f + o;
    const y = s.decode(r.slice(f, f + u));
    f = f + u;
    const m = JSON.parse(s.decode(r.slice(f, r.byteLength)));
    return { ref: null, topic: h, event: y, payload: m };
  }
}
class O_ {
  constructor(r, a) {
    (this.callback = r),
      (this.timerCalc = a),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = r),
      (this.timerCalc = a);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
var ht;
(function (n) {
  (n.abstime = "abstime"),
    (n.bool = "bool"),
    (n.date = "date"),
    (n.daterange = "daterange"),
    (n.float4 = "float4"),
    (n.float8 = "float8"),
    (n.int2 = "int2"),
    (n.int4 = "int4"),
    (n.int4range = "int4range"),
    (n.int8 = "int8"),
    (n.int8range = "int8range"),
    (n.json = "json"),
    (n.jsonb = "jsonb"),
    (n.money = "money"),
    (n.numeric = "numeric"),
    (n.oid = "oid"),
    (n.reltime = "reltime"),
    (n.text = "text"),
    (n.time = "time"),
    (n.timestamp = "timestamp"),
    (n.timestamptz = "timestamptz"),
    (n.timetz = "timetz"),
    (n.tsrange = "tsrange"),
    (n.tstzrange = "tstzrange");
})(ht || (ht = {}));
const M0 = (n, r, a = {}) => {
    var s;
    const o = (s = a.skipTypes) !== null && s !== void 0 ? s : [];
    return Object.keys(r).reduce((u, f) => ((u[f] = $T(f, n, r, o)), u), {});
  },
  $T = (n, r, a, s) => {
    const o = r.find((h) => h.name === n),
      u = o == null ? void 0 : o.type,
      f = a[n];
    return u && !s.includes(u) ? A_(u, f) : ny(f);
  },
  A_ = (n, r) => {
    if (n.charAt(0) === "_") {
      const a = n.slice(1, n.length);
      return QT(r, a);
    }
    switch (n) {
      case ht.bool:
        return VT(r);
      case ht.float4:
      case ht.float8:
      case ht.int2:
      case ht.int4:
      case ht.int8:
      case ht.numeric:
      case ht.oid:
        return FT(r);
      case ht.json:
      case ht.jsonb:
        return GT(r);
      case ht.timestamp:
        return YT(r);
      case ht.abstime:
      case ht.date:
      case ht.daterange:
      case ht.int4range:
      case ht.int8range:
      case ht.money:
      case ht.reltime:
      case ht.text:
      case ht.time:
      case ht.timestamptz:
      case ht.timetz:
      case ht.tsrange:
      case ht.tstzrange:
        return ny(r);
      default:
        return ny(r);
    }
  },
  ny = (n) => n,
  VT = (n) => {
    switch (n) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return n;
    }
  },
  FT = (n) => {
    if (typeof n == "string") {
      const r = parseFloat(n);
      if (!Number.isNaN(r)) return r;
    }
    return n;
  },
  GT = (n) => {
    if (typeof n == "string")
      try {
        return JSON.parse(n);
      } catch (r) {
        return console.log(`JSON parse error: ${r}`), n;
      }
    return n;
  },
  QT = (n, r) => {
    if (typeof n != "string") return n;
    const a = n.length - 1,
      s = n[a];
    if (n[0] === "{" && s === "}") {
      let u;
      const f = n.slice(1, a);
      try {
        u = JSON.parse("[" + f + "]");
      } catch {
        u = f ? f.split(",") : [];
      }
      return u.map((h) => A_(r, h));
    }
    return n;
  },
  YT = (n) => (typeof n == "string" ? n.replace(" ", "T") : n),
  j_ = (n) => {
    let r = n;
    return (
      (r = r.replace(/^ws/i, "http")),
      (r = r.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
      r.replace(/\/+$/, "")
    );
  };
class Sh {
  constructor(r, a, s = {}, o = R_) {
    (this.channel = r),
      (this.event = a),
      (this.payload = s),
      (this.timeout = o),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null);
  }
  resend(r) {
    (this.timeout = r),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(r) {
    this.payload = Object.assign(Object.assign({}, this.payload), r);
  }
  receive(r, a) {
    var s;
    return (
      this._hasReceived(r) &&
        a(
          (s = this.receivedResp) === null || s === void 0 ? void 0 : s.response
        ),
      this.recHooks.push({ status: r, callback: a }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const r = (a) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = a),
        this._matchReceive(a);
    };
    this.channel._on(this.refEvent, {}, r),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout));
  }
  trigger(r, a) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: r, response: a });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: r, response: a }) {
    this.recHooks.filter((s) => s.status === r).forEach((s) => s.callback(a));
  }
  _hasReceived(r) {
    return this.receivedResp && this.receivedResp.status === r;
  }
}
var N0;
(function (n) {
  (n.SYNC = "sync"), (n.JOIN = "join"), (n.LEAVE = "leave");
})(N0 || (N0 = {}));
class wo {
  constructor(r, a) {
    (this.channel = r),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const s = (a == null ? void 0 : a.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    this.channel._on(s.state, {}, (o) => {
      const { onJoin: u, onLeave: f, onSync: h } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = wo.syncState(this.state, o, u, f)),
        this.pendingDiffs.forEach((y) => {
          this.state = wo.syncDiff(this.state, y, u, f);
        }),
        (this.pendingDiffs = []),
        h();
    }),
      this.channel._on(s.diff, {}, (o) => {
        const { onJoin: u, onLeave: f, onSync: h } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(o)
          : ((this.state = wo.syncDiff(this.state, o, u, f)), h());
      }),
      this.onJoin((o, u, f) => {
        this.channel._trigger("presence", {
          event: "join",
          key: o,
          currentPresences: u,
          newPresences: f,
        });
      }),
      this.onLeave((o, u, f) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: o,
          currentPresences: u,
          leftPresences: f,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
  }
  static syncState(r, a, s, o) {
    const u = this.cloneDeep(r),
      f = this.transformState(a),
      h = {},
      y = {};
    return (
      this.map(u, (m, p) => {
        f[m] || (y[m] = p);
      }),
      this.map(f, (m, p) => {
        const g = u[m];
        if (g) {
          const b = p.map((C) => C.presence_ref),
            S = g.map((C) => C.presence_ref),
            x = p.filter((C) => S.indexOf(C.presence_ref) < 0),
            N = g.filter((C) => b.indexOf(C.presence_ref) < 0);
          x.length > 0 && (h[m] = x), N.length > 0 && (y[m] = N);
        } else h[m] = p;
      }),
      this.syncDiff(u, { joins: h, leaves: y }, s, o)
    );
  }
  static syncDiff(r, a, s, o) {
    const { joins: u, leaves: f } = {
      joins: this.transformState(a.joins),
      leaves: this.transformState(a.leaves),
    };
    return (
      s || (s = () => {}),
      o || (o = () => {}),
      this.map(u, (h, y) => {
        var m;
        const p = (m = r[h]) !== null && m !== void 0 ? m : [];
        if (((r[h] = this.cloneDeep(y)), p.length > 0)) {
          const g = r[h].map((S) => S.presence_ref),
            b = p.filter((S) => g.indexOf(S.presence_ref) < 0);
          r[h].unshift(...b);
        }
        s(h, p, y);
      }),
      this.map(f, (h, y) => {
        let m = r[h];
        if (!m) return;
        const p = y.map((g) => g.presence_ref);
        (m = m.filter((g) => p.indexOf(g.presence_ref) < 0)),
          (r[h] = m),
          o(h, m, y),
          m.length === 0 && delete r[h];
      }),
      r
    );
  }
  static map(r, a) {
    return Object.getOwnPropertyNames(r).map((s) => a(s, r[s]));
  }
  static transformState(r) {
    return (
      (r = this.cloneDeep(r)),
      Object.getOwnPropertyNames(r).reduce((a, s) => {
        const o = r[s];
        return (
          "metas" in o
            ? (a[s] = o.metas.map(
                (u) => (
                  (u.presence_ref = u.phx_ref),
                  delete u.phx_ref,
                  delete u.phx_ref_prev,
                  u
                )
              ))
            : (a[s] = o),
          a
        );
      }, {})
    );
  }
  static cloneDeep(r) {
    return JSON.parse(JSON.stringify(r));
  }
  onJoin(r) {
    this.caller.onJoin = r;
  }
  onLeave(r) {
    this.caller.onLeave = r;
  }
  onSync(r) {
    this.caller.onSync = r;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var U0;
(function (n) {
  (n.ALL = "*"),
    (n.INSERT = "INSERT"),
    (n.UPDATE = "UPDATE"),
    (n.DELETE = "DELETE");
})(U0 || (U0 = {}));
var k0;
(function (n) {
  (n.BROADCAST = "broadcast"),
    (n.PRESENCE = "presence"),
    (n.POSTGRES_CHANGES = "postgres_changes"),
    (n.SYSTEM = "system");
})(k0 || (k0 = {}));
var Xr;
(function (n) {
  (n.SUBSCRIBED = "SUBSCRIBED"),
    (n.TIMED_OUT = "TIMED_OUT"),
    (n.CLOSED = "CLOSED"),
    (n.CHANNEL_ERROR = "CHANNEL_ERROR");
})(Xr || (Xr = {}));
class Uy {
  constructor(r, a = { config: {} }, s) {
    (this.topic = r),
      (this.params = a),
      (this.socket = s),
      (this.bindings = {}),
      (this.state = rn.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = r.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "" },
          private: !1,
        },
        a.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new Sh(this, lr.join, this.params, this.timeout)),
      (this.rejoinTimer = new O_(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = rn.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((o) => o.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = rn.closed),
          this.socket._remove(this);
      }),
      this._onError((o) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, o),
          (this.state = rn.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = rn.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(lr.reply, {}, (o, u) => {
        this._trigger(this._replyEventName(u), o);
      }),
      (this.presence = new wo(this)),
      (this.broadcastEndpointURL = j_(this.socket.endPoint) + "/api/broadcast"),
      (this.private = this.params.config.private || !1);
  }
  subscribe(r, a = this.timeout) {
    var s, o;
    if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const {
        config: { broadcast: u, presence: f, private: h },
      } = this.params;
      this._onError((p) => (r == null ? void 0 : r(Xr.CHANNEL_ERROR, p))),
        this._onClose(() => (r == null ? void 0 : r(Xr.CLOSED)));
      const y = {},
        m = {
          broadcast: u,
          presence: f,
          postgres_changes:
            (o =
              (s = this.bindings.postgres_changes) === null || s === void 0
                ? void 0
                : s.map((p) => p.filter)) !== null && o !== void 0
              ? o
              : [],
          private: h,
        };
      this.socket.accessTokenValue &&
        (y.access_token = this.socket.accessTokenValue),
        this.updateJoinPayload(Object.assign({ config: m }, y)),
        (this.joinedOnce = !0),
        this._rejoin(a),
        this.joinPush
          .receive("ok", async ({ postgres_changes: p }) => {
            var g;
            if ((this.socket.setAuth(), p === void 0)) {
              r == null || r(Xr.SUBSCRIBED);
              return;
            } else {
              const b = this.bindings.postgres_changes,
                S =
                  (g = b == null ? void 0 : b.length) !== null && g !== void 0
                    ? g
                    : 0,
                x = [];
              for (let N = 0; N < S; N++) {
                const C = b[N],
                  {
                    filter: { event: U, schema: Y, table: z, filter: Q },
                  } = C,
                  P = p && p[N];
                if (
                  P &&
                  P.event === U &&
                  P.schema === Y &&
                  P.table === z &&
                  P.filter === Q
                )
                  x.push(Object.assign(Object.assign({}, C), { id: P.id }));
                else {
                  this.unsubscribe(),
                    (this.state = rn.errored),
                    r == null ||
                      r(
                        Xr.CHANNEL_ERROR,
                        new Error(
                          "mismatch between server and client bindings for postgres changes"
                        )
                      );
                  return;
                }
              }
              (this.bindings.postgres_changes = x), r && r(Xr.SUBSCRIBED);
              return;
            }
          })
          .receive("error", (p) => {
            (this.state = rn.errored),
              r == null ||
                r(
                  Xr.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(p).join(", ") || "error")
                  )
                );
          })
          .receive("timeout", () => {
            r == null || r(Xr.TIMED_OUT);
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(r, a = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: r },
      a.timeout || this.timeout
    );
  }
  async untrack(r = {}) {
    return await this.send({ type: "presence", event: "untrack" }, r);
  }
  on(r, a, s) {
    return this._on(r, a, s);
  }
  async send(r, a = {}) {
    var s, o;
    if (!this._canPush() && r.type === "broadcast") {
      const { event: u, payload: f } = r,
        y = {
          method: "POST",
          headers: {
            Authorization: this.socket.accessTokenValue
              ? `Bearer ${this.socket.accessTokenValue}`
              : "",
            apikey: this.socket.apiKey ? this.socket.apiKey : "",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              {
                topic: this.subTopic,
                event: u,
                payload: f,
                private: this.private,
              },
            ],
          }),
        };
      try {
        const m = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          y,
          (s = a.timeout) !== null && s !== void 0 ? s : this.timeout
        );
        return (
          await ((o = m.body) === null || o === void 0 ? void 0 : o.cancel()),
          m.ok ? "ok" : "error"
        );
      } catch (m) {
        return m.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((u) => {
        var f, h, y;
        const m = this._push(r.type, r, a.timeout || this.timeout);
        r.type === "broadcast" &&
          !(
            !(
              (y =
                (h =
                  (f = this.params) === null || f === void 0
                    ? void 0
                    : f.config) === null || h === void 0
                  ? void 0
                  : h.broadcast) === null || y === void 0
            ) && y.ack
          ) &&
          u("ok"),
          m.receive("ok", () => u("ok")),
          m.receive("error", () => u("error")),
          m.receive("timeout", () => u("timed out"));
      });
  }
  updateJoinPayload(r) {
    this.joinPush.updatePayload(r);
  }
  unsubscribe(r = this.timeout) {
    this.state = rn.leaving;
    const a = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(lr.close, "leave", this._joinRef());
    };
    return (
      this.joinPush.destroy(),
      new Promise((s) => {
        const o = new Sh(this, lr.leave, {}, r);
        o
          .receive("ok", () => {
            a(), s("ok");
          })
          .receive("timeout", () => {
            a(), s("timed out");
          })
          .receive("error", () => {
            s("error");
          }),
          o.send(),
          this._canPush() || o.trigger("ok", {});
      })
    );
  }
  teardown() {
    this.pushBuffer.forEach((r) => r.destroy()),
      this.rejoinTimer && clearTimeout(this.rejoinTimer.timer),
      this.joinPush.destroy();
  }
  async _fetchWithTimeout(r, a, s) {
    const o = new AbortController(),
      u = setTimeout(() => o.abort(), s),
      f = await this.socket.fetch(
        r,
        Object.assign(Object.assign({}, a), { signal: o.signal })
      );
    return clearTimeout(u), f;
  }
  _push(r, a, s = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${r}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let o = new Sh(this, r, a, s);
    return (
      this._canPush() ? o.send() : (o.startTimeout(), this.pushBuffer.push(o)),
      o
    );
  }
  _onMessage(r, a, s) {
    return a;
  }
  _isMember(r) {
    return this.topic === r;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(r, a, s) {
    var o, u;
    const f = r.toLocaleLowerCase(),
      { close: h, error: y, leave: m, join: p } = lr;
    if (s && [h, y, m, p].indexOf(f) >= 0 && s !== this._joinRef()) return;
    let b = this._onMessage(f, a, s);
    if (a && !b)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(f)
      ? (o = this.bindings.postgres_changes) === null ||
        o === void 0 ||
        o
          .filter((S) => {
            var x, N, C;
            return (
              ((x = S.filter) === null || x === void 0 ? void 0 : x.event) ===
                "*" ||
              ((C =
                (N = S.filter) === null || N === void 0 ? void 0 : N.event) ===
                null || C === void 0
                ? void 0
                : C.toLocaleLowerCase()) === f
            );
          })
          .map((S) => S.callback(b, s))
      : (u = this.bindings[f]) === null ||
        u === void 0 ||
        u
          .filter((S) => {
            var x, N, C, U, Y, z;
            if (["broadcast", "presence", "postgres_changes"].includes(f))
              if ("id" in S) {
                const Q = S.id,
                  P =
                    (x = S.filter) === null || x === void 0 ? void 0 : x.event;
                return (
                  Q &&
                  ((N = a.ids) === null || N === void 0
                    ? void 0
                    : N.includes(Q)) &&
                  (P === "*" ||
                    (P == null ? void 0 : P.toLocaleLowerCase()) ===
                      ((C = a.data) === null || C === void 0
                        ? void 0
                        : C.type.toLocaleLowerCase()))
                );
              } else {
                const Q =
                  (Y =
                    (U = S == null ? void 0 : S.filter) === null || U === void 0
                      ? void 0
                      : U.event) === null || Y === void 0
                    ? void 0
                    : Y.toLocaleLowerCase();
                return (
                  Q === "*" ||
                  Q ===
                    ((z = a == null ? void 0 : a.event) === null || z === void 0
                      ? void 0
                      : z.toLocaleLowerCase())
                );
              }
            else return S.type.toLocaleLowerCase() === f;
          })
          .map((S) => {
            if (typeof b == "object" && "ids" in b) {
              const x = b.data,
                {
                  schema: N,
                  table: C,
                  commit_timestamp: U,
                  type: Y,
                  errors: z,
                } = x;
              b = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: N,
                    table: C,
                    commit_timestamp: U,
                    eventType: Y,
                    new: {},
                    old: {},
                    errors: z,
                  }
                ),
                this._getPayloadRecords(x)
              );
            }
            S.callback(b, s);
          });
  }
  _isClosed() {
    return this.state === rn.closed;
  }
  _isJoined() {
    return this.state === rn.joined;
  }
  _isJoining() {
    return this.state === rn.joining;
  }
  _isLeaving() {
    return this.state === rn.leaving;
  }
  _replyEventName(r) {
    return `chan_reply_${r}`;
  }
  _on(r, a, s) {
    const o = r.toLocaleLowerCase(),
      u = { type: o, filter: a, callback: s };
    return (
      this.bindings[o] ? this.bindings[o].push(u) : (this.bindings[o] = [u]),
      this
    );
  }
  _off(r, a) {
    const s = r.toLocaleLowerCase();
    return (
      (this.bindings[s] = this.bindings[s].filter((o) => {
        var u;
        return !(
          ((u = o.type) === null || u === void 0
            ? void 0
            : u.toLocaleLowerCase()) === s && Uy.isEqual(o.filter, a)
        );
      })),
      this
    );
  }
  static isEqual(r, a) {
    if (Object.keys(r).length !== Object.keys(a).length) return !1;
    for (const s in r) if (r[s] !== a[s]) return !1;
    return !0;
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(r) {
    this._on(lr.close, {}, r);
  }
  _onError(r) {
    this._on(lr.error, {}, (a) => r(a));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(r = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = rn.joining),
      this.joinPush.resend(r));
  }
  _getPayloadRecords(r) {
    const a = { new: {}, old: {} };
    return (
      (r.type === "INSERT" || r.type === "UPDATE") &&
        (a.new = M0(r.columns, r.record)),
      (r.type === "UPDATE" || r.type === "DELETE") &&
        (a.old = M0(r.columns, r.old_record)),
      a
    );
  }
}
const z0 = () => {},
  KT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class XT {
  constructor(r, a) {
    var s;
    (this.accessTokenValue = null),
      (this.apiKey = null),
      (this.channels = new Array()),
      (this.endPoint = ""),
      (this.httpEndpoint = ""),
      (this.headers = BT),
      (this.params = {}),
      (this.timeout = R_),
      (this.heartbeatIntervalMs = 25e3),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.heartbeatCallback = z0),
      (this.ref = 0),
      (this.logger = z0),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new PT()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.accessToken = null),
      (this._resolveFetch = (u) => {
        let f;
        return (
          u
            ? (f = u)
            : typeof fetch > "u"
            ? (f = (...h) =>
                Ho(async () => {
                  const { default: y } = await Promise.resolve().then(() => sl);
                  return { default: y };
                }, void 0).then(({ default: y }) => y(...h)))
            : (f = fetch),
          (...h) => f(...h)
        );
      }),
      (this.endPoint = `${r}/${ty.websocket}`),
      (this.httpEndpoint = j_(r)),
      a != null && a.transport
        ? (this.transport = a.transport)
        : (this.transport = null),
      a != null && a.params && (this.params = a.params),
      a != null &&
        a.headers &&
        (this.headers = Object.assign(
          Object.assign({}, this.headers),
          a.headers
        )),
      a != null && a.timeout && (this.timeout = a.timeout),
      a != null && a.logger && (this.logger = a.logger),
      ((a != null && a.logLevel) || (a != null && a.log_level)) &&
        ((this.logLevel = a.logLevel || a.log_level),
        (this.params = Object.assign(Object.assign({}, this.params), {
          log_level: this.logLevel,
        }))),
      a != null &&
        a.heartbeatIntervalMs &&
        (this.heartbeatIntervalMs = a.heartbeatIntervalMs);
    const o =
      (s = a == null ? void 0 : a.params) === null || s === void 0
        ? void 0
        : s.apikey;
    if (
      (o && ((this.accessTokenValue = o), (this.apiKey = o)),
      (this.reconnectAfterMs =
        a != null && a.reconnectAfterMs
          ? a.reconnectAfterMs
          : (u) => [1e3, 2e3, 5e3, 1e4][u - 1] || 1e4),
      (this.encode =
        a != null && a.encode ? a.encode : (u, f) => f(JSON.stringify(u))),
      (this.decode =
        a != null && a.decode
          ? a.decode
          : this.serializer.decode.bind(this.serializer)),
      (this.reconnectTimer = new O_(async () => {
        this.disconnect(), this.connect();
      }, this.reconnectAfterMs)),
      (this.fetch = this._resolveFetch(a == null ? void 0 : a.fetch)),
      a != null && a.worker)
    ) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      (this.worker = (a == null ? void 0 : a.worker) || !1),
        (this.workerUrl = a == null ? void 0 : a.workerUrl);
    }
    this.accessToken = (a == null ? void 0 : a.accessToken) || null;
  }
  connect() {
    if (!this.conn) {
      if ((this.transport || (this.transport = ey), this.transport)) {
        typeof window < "u" && this.transport === window.WebSocket
          ? (this.conn = new this.transport(this.endpointURL()))
          : (this.conn = new this.transport(this.endpointURL(), void 0, {
              headers: this.headers,
            })),
          this.setupConnection();
        return;
      }
      this.conn = new ZT(this.endpointURL(), void 0, {
        close: () => {
          this.conn = null;
        },
      });
    }
  }
  endpointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: qT })
    );
  }
  disconnect(r, a) {
    this.conn &&
      ((this.conn.onclose = function () {}),
      r ? this.conn.close(r, a ?? "") : this.conn.close(),
      (this.conn = null),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.reset(),
      this.channels.forEach((s) => s.teardown()));
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(r) {
    const a = await r.unsubscribe();
    return (
      (this.channels = this.channels.filter((s) => s._joinRef !== r._joinRef)),
      this.channels.length === 0 && this.disconnect(),
      a
    );
  }
  async removeAllChannels() {
    const r = await Promise.all(this.channels.map((a) => a.unsubscribe()));
    return (this.channels = []), this.disconnect(), r;
  }
  log(r, a, s) {
    this.logger(r, a, s);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Vs.connecting:
        return Ai.Connecting;
      case Vs.open:
        return Ai.Open;
      case Vs.closing:
        return Ai.Closing;
      default:
        return Ai.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === Ai.Open;
  }
  channel(r, a = { config: {} }) {
    const s = `realtime:${r}`,
      o = this.getChannels().find((u) => u.topic === s);
    if (o) return o;
    {
      const u = new Uy(`realtime:${r}`, a, this);
      return this.channels.push(u), u;
    }
  }
  push(r) {
    const { topic: a, event: s, payload: o, ref: u } = r,
      f = () => {
        this.encode(r, (h) => {
          var y;
          (y = this.conn) === null || y === void 0 || y.send(h);
        });
      };
    this.log("push", `${a} ${s} (${u})`, o),
      this.isConnected() ? f() : this.sendBuffer.push(f);
  }
  async setAuth(r = null) {
    let a =
      r ||
      (this.accessToken && (await this.accessToken())) ||
      this.accessTokenValue;
    this.accessTokenValue != a &&
      ((this.accessTokenValue = a),
      this.channels.forEach((s) => {
        a &&
          s.updateJoinPayload({
            access_token: a,
            version: this.headers && this.headers["X-Client-Info"],
          }),
          s.joinedOnce &&
            s._isJoined() &&
            s._push(lr.access_token, { access_token: a });
      }));
  }
  async sendHeartbeat() {
    var r;
    if (!this.isConnected()) {
      this.heartbeatCallback("disconnected");
      return;
    }
    if (this.pendingHeartbeatRef) {
      (this.pendingHeartbeatRef = null),
        this.log(
          "transport",
          "heartbeat timeout. Attempting to re-establish connection"
        ),
        this.heartbeatCallback("timeout"),
        (r = this.conn) === null ||
          r === void 0 ||
          r.close(HT, "hearbeat timeout");
      return;
    }
    (this.pendingHeartbeatRef = this._makeRef()),
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef,
      }),
      this.heartbeatCallback("sent"),
      await this.setAuth();
  }
  onHeartbeat(r) {
    this.heartbeatCallback = r;
  }
  flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((r) => r()), (this.sendBuffer = []));
  }
  _makeRef() {
    let r = this.ref + 1;
    return (
      r === this.ref ? (this.ref = 0) : (this.ref = r), this.ref.toString()
    );
  }
  _leaveOpenTopic(r) {
    let a = this.channels.find(
      (s) => s.topic === r && (s._isJoined() || s._isJoining())
    );
    a &&
      (this.log("transport", `leaving duplicate topic "${r}"`),
      a.unsubscribe());
  }
  _remove(r) {
    this.channels = this.channels.filter((a) => a.topic !== r.topic);
  }
  setupConnection() {
    this.conn &&
      ((this.conn.binaryType = "arraybuffer"),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (r) => this._onConnError(r)),
      (this.conn.onmessage = (r) => this._onConnMessage(r)),
      (this.conn.onclose = (r) => this._onConnClose(r)));
  }
  _onConnMessage(r) {
    this.decode(r.data, (a) => {
      let { topic: s, event: o, payload: u, ref: f } = a;
      s === "phoenix" &&
        o === "phx_reply" &&
        this.heartbeatCallback(a.payload.status == "ok" ? "ok" : "error"),
        f &&
          f === this.pendingHeartbeatRef &&
          (this.pendingHeartbeatRef = null),
        this.log(
          "receive",
          `${u.status || ""} ${s} ${o} ${(f && "(" + f + ")") || ""}`,
          u
        ),
        Array.from(this.channels)
          .filter((h) => h._isMember(s))
          .forEach((h) => h._trigger(o, u, f)),
        this.stateChangeCallbacks.message.forEach((h) => h(a));
    });
  }
  _onConnOpen() {
    if (
      (this.log("transport", `connected to ${this.endpointURL()}`),
      this.flushSendBuffer(),
      this.reconnectTimer.reset(),
      !this.worker)
    )
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        (this.heartbeatTimer = setInterval(
          () => this.sendHeartbeat(),
          this.heartbeatIntervalMs
        ));
    else {
      this.workerUrl
        ? this.log("worker", `starting worker for from ${this.workerUrl}`)
        : this.log("worker", "starting default worker");
      const r = this._workerObjectUrl(this.workerUrl);
      (this.workerRef = new Worker(r)),
        (this.workerRef.onerror = (a) => {
          this.log("worker", "worker error", a.message),
            this.workerRef.terminate();
        }),
        (this.workerRef.onmessage = (a) => {
          a.data.event === "keepAlive" && this.sendHeartbeat();
        }),
        this.workerRef.postMessage({
          event: "start",
          interval: this.heartbeatIntervalMs,
        });
    }
    this.stateChangeCallbacks.open.forEach((r) => r());
  }
  _onConnClose(r) {
    this.log("transport", "close", r),
      this._triggerChanError(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.scheduleTimeout(),
      this.stateChangeCallbacks.close.forEach((a) => a(r));
  }
  _onConnError(r) {
    this.log("transport", r.message),
      this._triggerChanError(),
      this.stateChangeCallbacks.error.forEach((a) => a(r));
  }
  _triggerChanError() {
    this.channels.forEach((r) => r._trigger(lr.error));
  }
  _appendParams(r, a) {
    if (Object.keys(a).length === 0) return r;
    const s = r.match(/\?/) ? "&" : "?",
      o = new URLSearchParams(a);
    return `${r}${s}${o}`;
  }
  _workerObjectUrl(r) {
    let a;
    if (r) a = r;
    else {
      const s = new Blob([KT], { type: "application/javascript" });
      a = URL.createObjectURL(s);
    }
    return a;
  }
}
class ZT {
  constructor(r, a, s) {
    (this.binaryType = "arraybuffer"),
      (this.onclose = () => {}),
      (this.onerror = () => {}),
      (this.onmessage = () => {}),
      (this.onopen = () => {}),
      (this.readyState = Vs.connecting),
      (this.send = () => {}),
      (this.url = null),
      (this.url = r),
      (this.close = s.close);
  }
}
class ky extends Error {
  constructor(r) {
    super(r), (this.__isStorageError = !0), (this.name = "StorageError");
  }
}
function $t(n) {
  return typeof n == "object" && n !== null && "__isStorageError" in n;
}
class IT extends ky {
  constructor(r, a) {
    super(r), (this.name = "StorageApiError"), (this.status = a);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class ry extends ky {
  constructor(r, a) {
    super(r), (this.name = "StorageUnknownError"), (this.originalError = a);
  }
}
var JT = function (n, r, a, s) {
  function o(u) {
    return u instanceof a
      ? u
      : new a(function (f) {
          f(u);
        });
  }
  return new (a || (a = Promise))(function (u, f) {
    function h(p) {
      try {
        m(s.next(p));
      } catch (g) {
        f(g);
      }
    }
    function y(p) {
      try {
        m(s.throw(p));
      } catch (g) {
        f(g);
      }
    }
    function m(p) {
      p.done ? u(p.value) : o(p.value).then(h, y);
    }
    m((s = s.apply(n, r || [])).next());
  });
};
const C_ = (n) => {
    let r;
    return (
      n
        ? (r = n)
        : typeof fetch > "u"
        ? (r = (...a) =>
            Ho(async () => {
              const { default: s } = await Promise.resolve().then(() => sl);
              return { default: s };
            }, void 0).then(({ default: s }) => s(...a)))
        : (r = fetch),
      (...a) => r(...a)
    );
  },
  WT = () =>
    JT(void 0, void 0, void 0, function* () {
      return typeof Response > "u"
        ? (yield Ho(() => Promise.resolve().then(() => sl), void 0)).Response
        : Response;
    }),
  ay = (n) => {
    if (Array.isArray(n)) return n.map((a) => ay(a));
    if (typeof n == "function" || n !== Object(n)) return n;
    const r = {};
    return (
      Object.entries(n).forEach(([a, s]) => {
        const o = a.replace(/([-_][a-z])/gi, (u) =>
          u.toUpperCase().replace(/[-_]/g, "")
        );
        r[o] = ay(s);
      }),
      r
    );
  };
var Gi = function (n, r, a, s) {
  function o(u) {
    return u instanceof a
      ? u
      : new a(function (f) {
          f(u);
        });
  }
  return new (a || (a = Promise))(function (u, f) {
    function h(p) {
      try {
        m(s.next(p));
      } catch (g) {
        f(g);
      }
    }
    function y(p) {
      try {
        m(s.throw(p));
      } catch (g) {
        f(g);
      }
    }
    function m(p) {
      p.done ? u(p.value) : o(p.value).then(h, y);
    }
    m((s = s.apply(n, r || [])).next());
  });
};
const xh = (n) =>
    n.msg || n.message || n.error_description || n.error || JSON.stringify(n),
  eR = (n, r, a) =>
    Gi(void 0, void 0, void 0, function* () {
      const s = yield WT();
      n instanceof s && !(a != null && a.noResolveJson)
        ? n
            .json()
            .then((o) => {
              r(new IT(xh(o), n.status || 500));
            })
            .catch((o) => {
              r(new ry(xh(o), o));
            })
        : r(new ry(xh(n), n));
    }),
  tR = (n, r, a, s) => {
    const o = { method: n, headers: (r == null ? void 0 : r.headers) || {} };
    return n === "GET"
      ? o
      : ((o.headers = Object.assign(
          { "Content-Type": "application/json" },
          r == null ? void 0 : r.headers
        )),
        s && (o.body = JSON.stringify(s)),
        Object.assign(Object.assign({}, o), a));
  };
function $o(n, r, a, s, o, u) {
  return Gi(this, void 0, void 0, function* () {
    return new Promise((f, h) => {
      n(a, tR(r, s, o, u))
        .then((y) => {
          if (!y.ok) throw y;
          return s != null && s.noResolveJson ? y : y.json();
        })
        .then((y) => f(y))
        .catch((y) => eR(y, h, s));
    });
  });
}
function Uc(n, r, a, s) {
  return Gi(this, void 0, void 0, function* () {
    return $o(n, "GET", r, a, s);
  });
}
function Ma(n, r, a, s, o) {
  return Gi(this, void 0, void 0, function* () {
    return $o(n, "POST", r, s, o, a);
  });
}
function nR(n, r, a, s, o) {
  return Gi(this, void 0, void 0, function* () {
    return $o(n, "PUT", r, s, o, a);
  });
}
function rR(n, r, a, s) {
  return Gi(this, void 0, void 0, function* () {
    return $o(
      n,
      "HEAD",
      r,
      Object.assign(Object.assign({}, a), { noResolveJson: !0 }),
      s
    );
  });
}
function D_(n, r, a, s, o) {
  return Gi(this, void 0, void 0, function* () {
    return $o(n, "DELETE", r, s, o, a);
  });
}
var gn = function (n, r, a, s) {
  function o(u) {
    return u instanceof a
      ? u
      : new a(function (f) {
          f(u);
        });
  }
  return new (a || (a = Promise))(function (u, f) {
    function h(p) {
      try {
        m(s.next(p));
      } catch (g) {
        f(g);
      }
    }
    function y(p) {
      try {
        m(s.throw(p));
      } catch (g) {
        f(g);
      }
    }
    function m(p) {
      p.done ? u(p.value) : o(p.value).then(h, y);
    }
    m((s = s.apply(n, r || [])).next());
  });
};
const aR = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  L0 = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
class iR {
  constructor(r, a = {}, s, o) {
    (this.url = r),
      (this.headers = a),
      (this.bucketId = s),
      (this.fetch = C_(o));
  }
  uploadOrUpdate(r, a, s, o) {
    return gn(this, void 0, void 0, function* () {
      try {
        let u;
        const f = Object.assign(Object.assign({}, L0), o);
        let h = Object.assign(
          Object.assign({}, this.headers),
          r === "POST" && { "x-upsert": String(f.upsert) }
        );
        const y = f.metadata;
        typeof Blob < "u" && s instanceof Blob
          ? ((u = new FormData()),
            u.append("cacheControl", f.cacheControl),
            y && u.append("metadata", this.encodeMetadata(y)),
            u.append("", s))
          : typeof FormData < "u" && s instanceof FormData
          ? ((u = s),
            u.append("cacheControl", f.cacheControl),
            y && u.append("metadata", this.encodeMetadata(y)))
          : ((u = s),
            (h["cache-control"] = `max-age=${f.cacheControl}`),
            (h["content-type"] = f.contentType),
            y && (h["x-metadata"] = this.toBase64(this.encodeMetadata(y)))),
          o != null &&
            o.headers &&
            (h = Object.assign(Object.assign({}, h), o.headers));
        const m = this._removeEmptyFolders(a),
          p = this._getFinalPath(m),
          g = yield this.fetch(
            `${this.url}/object/${p}`,
            Object.assign(
              { method: r, body: u, headers: h },
              f != null && f.duplex ? { duplex: f.duplex } : {}
            )
          ),
          b = yield g.json();
        return g.ok
          ? { data: { path: m, id: b.Id, fullPath: b.Key }, error: null }
          : { data: null, error: b };
      } catch (u) {
        if ($t(u)) return { data: null, error: u };
        throw u;
      }
    });
  }
  upload(r, a, s) {
    return gn(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", r, a, s);
    });
  }
  uploadToSignedUrl(r, a, s, o) {
    return gn(this, void 0, void 0, function* () {
      const u = this._removeEmptyFolders(r),
        f = this._getFinalPath(u),
        h = new URL(this.url + `/object/upload/sign/${f}`);
      h.searchParams.set("token", a);
      try {
        let y;
        const m = Object.assign({ upsert: L0.upsert }, o),
          p = Object.assign(Object.assign({}, this.headers), {
            "x-upsert": String(m.upsert),
          });
        typeof Blob < "u" && s instanceof Blob
          ? ((y = new FormData()),
            y.append("cacheControl", m.cacheControl),
            y.append("", s))
          : typeof FormData < "u" && s instanceof FormData
          ? ((y = s), y.append("cacheControl", m.cacheControl))
          : ((y = s),
            (p["cache-control"] = `max-age=${m.cacheControl}`),
            (p["content-type"] = m.contentType));
        const g = yield this.fetch(h.toString(), {
            method: "PUT",
            body: y,
            headers: p,
          }),
          b = yield g.json();
        return g.ok
          ? { data: { path: u, fullPath: b.Key }, error: null }
          : { data: null, error: b };
      } catch (y) {
        if ($t(y)) return { data: null, error: y };
        throw y;
      }
    });
  }
  createSignedUploadUrl(r, a) {
    return gn(this, void 0, void 0, function* () {
      try {
        let s = this._getFinalPath(r);
        const o = Object.assign({}, this.headers);
        a != null && a.upsert && (o["x-upsert"] = "true");
        const u = yield Ma(
            this.fetch,
            `${this.url}/object/upload/sign/${s}`,
            {},
            { headers: o }
          ),
          f = new URL(this.url + u.url),
          h = f.searchParams.get("token");
        if (!h) throw new ky("No token returned by API");
        return {
          data: { signedUrl: f.toString(), path: r, token: h },
          error: null,
        };
      } catch (s) {
        if ($t(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  update(r, a, s) {
    return gn(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", r, a, s);
    });
  }
  move(r, a, s) {
    return gn(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Ma(
            this.fetch,
            `${this.url}/object/move`,
            {
              bucketId: this.bucketId,
              sourceKey: r,
              destinationKey: a,
              destinationBucket: s == null ? void 0 : s.destinationBucket,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (o) {
        if ($t(o)) return { data: null, error: o };
        throw o;
      }
    });
  }
  copy(r, a, s) {
    return gn(this, void 0, void 0, function* () {
      try {
        return {
          data: {
            path: (yield Ma(
              this.fetch,
              `${this.url}/object/copy`,
              {
                bucketId: this.bucketId,
                sourceKey: r,
                destinationKey: a,
                destinationBucket: s == null ? void 0 : s.destinationBucket,
              },
              { headers: this.headers }
            )).Key,
          },
          error: null,
        };
      } catch (o) {
        if ($t(o)) return { data: null, error: o };
        throw o;
      }
    });
  }
  createSignedUrl(r, a, s) {
    return gn(this, void 0, void 0, function* () {
      try {
        let o = this._getFinalPath(r),
          u = yield Ma(
            this.fetch,
            `${this.url}/object/sign/${o}`,
            Object.assign(
              { expiresIn: a },
              s != null && s.transform ? { transform: s.transform } : {}
            ),
            { headers: this.headers }
          );
        const f =
          s != null && s.download
            ? `&download=${s.download === !0 ? "" : s.download}`
            : "";
        return (
          (u = { signedUrl: encodeURI(`${this.url}${u.signedURL}${f}`) }),
          { data: u, error: null }
        );
      } catch (o) {
        if ($t(o)) return { data: null, error: o };
        throw o;
      }
    });
  }
  createSignedUrls(r, a, s) {
    return gn(this, void 0, void 0, function* () {
      try {
        const o = yield Ma(
            this.fetch,
            `${this.url}/object/sign/${this.bucketId}`,
            { expiresIn: a, paths: r },
            { headers: this.headers }
          ),
          u =
            s != null && s.download
              ? `&download=${s.download === !0 ? "" : s.download}`
              : "";
        return {
          data: o.map((f) =>
            Object.assign(Object.assign({}, f), {
              signedUrl: f.signedURL
                ? encodeURI(`${this.url}${f.signedURL}${u}`)
                : null,
            })
          ),
          error: null,
        };
      } catch (o) {
        if ($t(o)) return { data: null, error: o };
        throw o;
      }
    });
  }
  download(r, a) {
    return gn(this, void 0, void 0, function* () {
      const o =
          typeof (a == null ? void 0 : a.transform) < "u"
            ? "render/image/authenticated"
            : "object",
        u = this.transformOptsToQueryString(
          (a == null ? void 0 : a.transform) || {}
        ),
        f = u ? `?${u}` : "";
      try {
        const h = this._getFinalPath(r);
        return {
          data: yield (yield Uc(this.fetch, `${this.url}/${o}/${h}${f}`, {
            headers: this.headers,
            noResolveJson: !0,
          })).blob(),
          error: null,
        };
      } catch (h) {
        if ($t(h)) return { data: null, error: h };
        throw h;
      }
    });
  }
  info(r) {
    return gn(this, void 0, void 0, function* () {
      const a = this._getFinalPath(r);
      try {
        const s = yield Uc(this.fetch, `${this.url}/object/info/${a}`, {
          headers: this.headers,
        });
        return { data: ay(s), error: null };
      } catch (s) {
        if ($t(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  exists(r) {
    return gn(this, void 0, void 0, function* () {
      const a = this._getFinalPath(r);
      try {
        return (
          yield rR(this.fetch, `${this.url}/object/${a}`, {
            headers: this.headers,
          }),
          { data: !0, error: null }
        );
      } catch (s) {
        if ($t(s) && s instanceof ry) {
          const o = s.originalError;
          if ([400, 404].includes(o == null ? void 0 : o.status))
            return { data: !1, error: s };
        }
        throw s;
      }
    });
  }
  getPublicUrl(r, a) {
    const s = this._getFinalPath(r),
      o = [],
      u =
        a != null && a.download
          ? `download=${a.download === !0 ? "" : a.download}`
          : "";
    u !== "" && o.push(u);
    const h =
        typeof (a == null ? void 0 : a.transform) < "u"
          ? "render/image"
          : "object",
      y = this.transformOptsToQueryString(
        (a == null ? void 0 : a.transform) || {}
      );
    y !== "" && o.push(y);
    let m = o.join("&");
    return (
      m !== "" && (m = `?${m}`),
      { data: { publicUrl: encodeURI(`${this.url}/${h}/public/${s}${m}`) } }
    );
  }
  remove(r) {
    return gn(this, void 0, void 0, function* () {
      try {
        return {
          data: yield D_(
            this.fetch,
            `${this.url}/object/${this.bucketId}`,
            { prefixes: r },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (a) {
        if ($t(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  list(r, a, s) {
    return gn(this, void 0, void 0, function* () {
      try {
        const o = Object.assign(Object.assign(Object.assign({}, aR), a), {
          prefix: r || "",
        });
        return {
          data: yield Ma(
            this.fetch,
            `${this.url}/object/list/${this.bucketId}`,
            o,
            { headers: this.headers },
            s
          ),
          error: null,
        };
      } catch (o) {
        if ($t(o)) return { data: null, error: o };
        throw o;
      }
    });
  }
  encodeMetadata(r) {
    return JSON.stringify(r);
  }
  toBase64(r) {
    return typeof Buffer < "u" ? Buffer.from(r).toString("base64") : btoa(r);
  }
  _getFinalPath(r) {
    return `${this.bucketId}/${r}`;
  }
  _removeEmptyFolders(r) {
    return r.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(r) {
    const a = [];
    return (
      r.width && a.push(`width=${r.width}`),
      r.height && a.push(`height=${r.height}`),
      r.resize && a.push(`resize=${r.resize}`),
      r.format && a.push(`format=${r.format}`),
      r.quality && a.push(`quality=${r.quality}`),
      a.join("&")
    );
  }
}
const sR = "2.7.1",
  lR = { "X-Client-Info": `storage-js/${sR}` };
var ks = function (n, r, a, s) {
  function o(u) {
    return u instanceof a
      ? u
      : new a(function (f) {
          f(u);
        });
  }
  return new (a || (a = Promise))(function (u, f) {
    function h(p) {
      try {
        m(s.next(p));
      } catch (g) {
        f(g);
      }
    }
    function y(p) {
      try {
        m(s.throw(p));
      } catch (g) {
        f(g);
      }
    }
    function m(p) {
      p.done ? u(p.value) : o(p.value).then(h, y);
    }
    m((s = s.apply(n, r || [])).next());
  });
};
class oR {
  constructor(r, a = {}, s) {
    (this.url = r),
      (this.headers = Object.assign(Object.assign({}, lR), a)),
      (this.fetch = C_(s));
  }
  listBuckets() {
    return ks(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Uc(this.fetch, `${this.url}/bucket`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (r) {
        if ($t(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  getBucket(r) {
    return ks(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Uc(this.fetch, `${this.url}/bucket/${r}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (a) {
        if ($t(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  createBucket(r, a = { public: !1 }) {
    return ks(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Ma(
            this.fetch,
            `${this.url}/bucket`,
            {
              id: r,
              name: r,
              public: a.public,
              file_size_limit: a.fileSizeLimit,
              allowed_mime_types: a.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (s) {
        if ($t(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  updateBucket(r, a) {
    return ks(this, void 0, void 0, function* () {
      try {
        return {
          data: yield nR(
            this.fetch,
            `${this.url}/bucket/${r}`,
            {
              id: r,
              name: r,
              public: a.public,
              file_size_limit: a.fileSizeLimit,
              allowed_mime_types: a.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (s) {
        if ($t(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  emptyBucket(r) {
    return ks(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Ma(
            this.fetch,
            `${this.url}/bucket/${r}/empty`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (a) {
        if ($t(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  deleteBucket(r) {
    return ks(this, void 0, void 0, function* () {
      try {
        return {
          data: yield D_(
            this.fetch,
            `${this.url}/bucket/${r}`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (a) {
        if ($t(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
}
class uR extends oR {
  constructor(r, a = {}, s) {
    super(r, a, s);
  }
  from(r) {
    return new iR(this.url, this.headers, r, this.fetch);
  }
}
const cR = "2.50.0";
let _o = "";
typeof Deno < "u"
  ? (_o = "deno")
  : typeof document < "u"
  ? (_o = "web")
  : typeof navigator < "u" && navigator.product === "ReactNative"
  ? (_o = "react-native")
  : (_o = "node");
const fR = { "X-Client-Info": `supabase-js-${_o}/${cR}` },
  dR = { headers: fR },
  hR = { schema: "public" },
  yR = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  mR = {};
var pR = function (n, r, a, s) {
  function o(u) {
    return u instanceof a
      ? u
      : new a(function (f) {
          f(u);
        });
  }
  return new (a || (a = Promise))(function (u, f) {
    function h(p) {
      try {
        m(s.next(p));
      } catch (g) {
        f(g);
      }
    }
    function y(p) {
      try {
        m(s.throw(p));
      } catch (g) {
        f(g);
      }
    }
    function m(p) {
      p.done ? u(p.value) : o(p.value).then(h, y);
    }
    m((s = s.apply(n, r || [])).next());
  });
};
const vR = (n) => {
    let r;
    return (
      n ? (r = n) : typeof fetch > "u" ? (r = __) : (r = fetch),
      (...a) => r(...a)
    );
  },
  gR = () => (typeof Headers > "u" ? w_ : Headers),
  bR = (n, r, a) => {
    const s = vR(a),
      o = gR();
    return (u, f) =>
      pR(void 0, void 0, void 0, function* () {
        var h;
        const y = (h = yield r()) !== null && h !== void 0 ? h : n;
        let m = new o(f == null ? void 0 : f.headers);
        return (
          m.has("apikey") || m.set("apikey", n),
          m.has("Authorization") || m.set("Authorization", `Bearer ${y}`),
          s(u, Object.assign(Object.assign({}, f), { headers: m }))
        );
      });
  };
var _R = function (n, r, a, s) {
  function o(u) {
    return u instanceof a
      ? u
      : new a(function (f) {
          f(u);
        });
  }
  return new (a || (a = Promise))(function (u, f) {
    function h(p) {
      try {
        m(s.next(p));
      } catch (g) {
        f(g);
      }
    }
    function y(p) {
      try {
        m(s.throw(p));
      } catch (g) {
        f(g);
      }
    }
    function m(p) {
      p.done ? u(p.value) : o(p.value).then(h, y);
    }
    m((s = s.apply(n, r || [])).next());
  });
};
function wR(n) {
  return n.endsWith("/") ? n : n + "/";
}
function SR(n, r) {
  var a, s;
  const { db: o, auth: u, realtime: f, global: h } = n,
    { db: y, auth: m, realtime: p, global: g } = r,
    b = {
      db: Object.assign(Object.assign({}, y), o),
      auth: Object.assign(Object.assign({}, m), u),
      realtime: Object.assign(Object.assign({}, p), f),
      global: Object.assign(Object.assign(Object.assign({}, g), h), {
        headers: Object.assign(
          Object.assign(
            {},
            (a = g == null ? void 0 : g.headers) !== null && a !== void 0
              ? a
              : {}
          ),
          (s = h == null ? void 0 : h.headers) !== null && s !== void 0 ? s : {}
        ),
      }),
      accessToken: () =>
        _R(this, void 0, void 0, function* () {
          return "";
        }),
    };
  return (
    n.accessToken ? (b.accessToken = n.accessToken) : delete b.accessToken, b
  );
}
const M_ = "2.70.0",
  Ps = 30 * 1e3,
  iy = 3,
  Eh = iy * Ps,
  xR = "http://localhost:9999",
  ER = "supabase.auth.token",
  TR = { "X-Client-Info": `gotrue-js/${M_}` },
  sy = "X-Supabase-Api-Version",
  N_ = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  RR = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  OR = 6e5;
class zy extends Error {
  constructor(r, a, s) {
    super(r),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = a),
      (this.code = s);
  }
}
function Be(n) {
  return typeof n == "object" && n !== null && "__isAuthError" in n;
}
class AR extends zy {
  constructor(r, a, s) {
    super(r, a, s),
      (this.name = "AuthApiError"),
      (this.status = a),
      (this.code = s);
  }
}
function jR(n) {
  return Be(n) && n.name === "AuthApiError";
}
class U_ extends zy {
  constructor(r, a) {
    super(r), (this.name = "AuthUnknownError"), (this.originalError = a);
  }
}
class Wa extends zy {
  constructor(r, a, s, o) {
    super(r, s, o), (this.name = a), (this.status = s);
  }
}
class Da extends Wa {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function CR(n) {
  return Be(n) && n.name === "AuthSessionMissingError";
}
class uc extends Wa {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0
    );
  }
}
class cc extends Wa {
  constructor(r) {
    super(r, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class fc extends Wa {
  constructor(r, a = null) {
    super(r, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = a);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
function DR(n) {
  return Be(n) && n.name === "AuthImplicitGrantRedirectError";
}
class B0 extends Wa {
  constructor(r, a = null) {
    super(r, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = a);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class ly extends Wa {
  constructor(r, a) {
    super(r, "AuthRetryableFetchError", a, void 0);
  }
}
function Th(n) {
  return Be(n) && n.name === "AuthRetryableFetchError";
}
class q0 extends Wa {
  constructor(r, a, s) {
    super(r, "AuthWeakPasswordError", a, "weak_password"), (this.reasons = s);
  }
}
class So extends Wa {
  constructor(r) {
    super(r, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const kc =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      ""
    ),
  H0 = ` 	
\r=`.split(""),
  MR = (() => {
    const n = new Array(128);
    for (let r = 0; r < n.length; r += 1) n[r] = -1;
    for (let r = 0; r < H0.length; r += 1) n[H0[r].charCodeAt(0)] = -2;
    for (let r = 0; r < kc.length; r += 1) n[kc[r].charCodeAt(0)] = r;
    return n;
  })();
function P0(n, r, a) {
  if (n !== null)
    for (r.queue = (r.queue << 8) | n, r.queuedBits += 8; r.queuedBits >= 6; ) {
      const s = (r.queue >> (r.queuedBits - 6)) & 63;
      a(kc[s]), (r.queuedBits -= 6);
    }
  else if (r.queuedBits > 0)
    for (
      r.queue = r.queue << (6 - r.queuedBits), r.queuedBits = 6;
      r.queuedBits >= 6;

    ) {
      const s = (r.queue >> (r.queuedBits - 6)) & 63;
      a(kc[s]), (r.queuedBits -= 6);
    }
}
function k_(n, r, a) {
  const s = MR[n];
  if (s > -1)
    for (r.queue = (r.queue << 6) | s, r.queuedBits += 6; r.queuedBits >= 8; )
      a((r.queue >> (r.queuedBits - 8)) & 255), (r.queuedBits -= 8);
  else {
    if (s === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`);
  }
}
function $0(n) {
  const r = [],
    a = (f) => {
      r.push(String.fromCodePoint(f));
    },
    s = { utf8seq: 0, codepoint: 0 },
    o = { queue: 0, queuedBits: 0 },
    u = (f) => {
      kR(f, s, a);
    };
  for (let f = 0; f < n.length; f += 1) k_(n.charCodeAt(f), o, u);
  return r.join("");
}
function NR(n, r) {
  if (n <= 127) {
    r(n);
    return;
  } else if (n <= 2047) {
    r(192 | (n >> 6)), r(128 | (n & 63));
    return;
  } else if (n <= 65535) {
    r(224 | (n >> 12)), r(128 | ((n >> 6) & 63)), r(128 | (n & 63));
    return;
  } else if (n <= 1114111) {
    r(240 | (n >> 18)),
      r(128 | ((n >> 12) & 63)),
      r(128 | ((n >> 6) & 63)),
      r(128 | (n & 63));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`);
}
function UR(n, r) {
  for (let a = 0; a < n.length; a += 1) {
    let s = n.charCodeAt(a);
    if (s > 55295 && s <= 56319) {
      const o = ((s - 55296) * 1024) & 65535;
      (s = (((n.charCodeAt(a + 1) - 56320) & 65535) | o) + 65536), (a += 1);
    }
    NR(s, r);
  }
}
function kR(n, r, a) {
  if (r.utf8seq === 0) {
    if (n <= 127) {
      a(n);
      return;
    }
    for (let s = 1; s < 6; s += 1)
      if (((n >> (7 - s)) & 1) === 0) {
        r.utf8seq = s;
        break;
      }
    if (r.utf8seq === 2) r.codepoint = n & 31;
    else if (r.utf8seq === 3) r.codepoint = n & 15;
    else if (r.utf8seq === 4) r.codepoint = n & 7;
    else throw new Error("Invalid UTF-8 sequence");
    r.utf8seq -= 1;
  } else if (r.utf8seq > 0) {
    if (n <= 127) throw new Error("Invalid UTF-8 sequence");
    (r.codepoint = (r.codepoint << 6) | (n & 63)),
      (r.utf8seq -= 1),
      r.utf8seq === 0 && a(r.codepoint);
  }
}
function zR(n) {
  const r = [],
    a = { queue: 0, queuedBits: 0 },
    s = (o) => {
      r.push(o);
    };
  for (let o = 0; o < n.length; o += 1) k_(n.charCodeAt(o), a, s);
  return new Uint8Array(r);
}
function LR(n) {
  const r = [];
  return UR(n, (a) => r.push(a)), new Uint8Array(r);
}
function BR(n) {
  const r = [],
    a = { queue: 0, queuedBits: 0 },
    s = (o) => {
      r.push(o);
    };
  return n.forEach((o) => P0(o, a, s)), P0(null, a, s), r.join("");
}
function qR(n) {
  return Math.round(Date.now() / 1e3) + n;
}
function HR() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (n) {
    const r = (Math.random() * 16) | 0;
    return (n == "x" ? r : (r & 3) | 8).toString(16);
  });
}
const ar = () => typeof window < "u" && typeof document < "u",
  Ei = { tested: !1, writable: !1 },
  xo = () => {
    if (!ar()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (Ei.tested) return Ei.writable;
    const n = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(n, n),
        globalThis.localStorage.removeItem(n),
        (Ei.tested = !0),
        (Ei.writable = !0);
    } catch {
      (Ei.tested = !0), (Ei.writable = !1);
    }
    return Ei.writable;
  };
function PR(n) {
  const r = {},
    a = new URL(n);
  if (a.hash && a.hash[0] === "#")
    try {
      new URLSearchParams(a.hash.substring(1)).forEach((o, u) => {
        r[u] = o;
      });
    } catch {}
  return (
    a.searchParams.forEach((s, o) => {
      r[o] = s;
    }),
    r
  );
}
const z_ = (n) => {
    let r;
    return (
      n
        ? (r = n)
        : typeof fetch > "u"
        ? (r = (...a) =>
            Ho(async () => {
              const { default: s } = await Promise.resolve().then(() => sl);
              return { default: s };
            }, void 0).then(({ default: s }) => s(...a)))
        : (r = fetch),
      (...a) => r(...a)
    );
  },
  $R = (n) =>
    typeof n == "object" &&
    n !== null &&
    "status" in n &&
    "ok" in n &&
    "json" in n &&
    typeof n.json == "function",
  L_ = async (n, r, a) => {
    await n.setItem(r, JSON.stringify(a));
  },
  dc = async (n, r) => {
    const a = await n.getItem(r);
    if (!a) return null;
    try {
      return JSON.parse(a);
    } catch {
      return a;
    }
  },
  hc = async (n, r) => {
    await n.removeItem(r);
  };
class Xc {
  constructor() {
    this.promise = new Xc.promiseConstructor((r, a) => {
      (this.resolve = r), (this.reject = a);
    });
  }
}
Xc.promiseConstructor = Promise;
function Rh(n) {
  const r = n.split(".");
  if (r.length !== 3) throw new So("Invalid JWT structure");
  for (let s = 0; s < r.length; s++)
    if (!RR.test(r[s])) throw new So("JWT not in base64url format");
  return {
    header: JSON.parse($0(r[0])),
    payload: JSON.parse($0(r[1])),
    signature: zR(r[2]),
    raw: { header: r[0], payload: r[1] },
  };
}
async function VR(n) {
  return await new Promise((r) => {
    setTimeout(() => r(null), n);
  });
}
function FR(n, r) {
  return new Promise((s, o) => {
    (async () => {
      for (let u = 0; u < 1 / 0; u++)
        try {
          const f = await n(u);
          if (!r(u, null, f)) {
            s(f);
            return;
          }
        } catch (f) {
          if (!r(u, f)) {
            o(f);
            return;
          }
        }
    })();
  });
}
function GR(n) {
  return ("0" + n.toString(16)).substr(-2);
}
function QR() {
  const r = new Uint32Array(56);
  if (typeof crypto > "u") {
    const a =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      s = a.length;
    let o = "";
    for (let u = 0; u < 56; u++) o += a.charAt(Math.floor(Math.random() * s));
    return o;
  }
  return crypto.getRandomValues(r), Array.from(r, GR).join("");
}
async function YR(n) {
  const a = new TextEncoder().encode(n),
    s = await crypto.subtle.digest("SHA-256", a),
    o = new Uint8Array(s);
  return Array.from(o)
    .map((u) => String.fromCharCode(u))
    .join("");
}
async function KR(n) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
      ),
      n
    );
  const a = await YR(n);
  return btoa(a).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function zs(n, r, a = !1) {
  const s = QR();
  let o = s;
  a && (o += "/PASSWORD_RECOVERY"), await L_(n, `${r}-code-verifier`, o);
  const u = await KR(s);
  return [u, s === u ? "plain" : "s256"];
}
const XR = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function ZR(n) {
  const r = n.headers.get(sy);
  if (!r || !r.match(XR)) return null;
  try {
    return new Date(`${r}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function IR(n) {
  if (!n) throw new Error("Missing exp claim");
  const r = Math.floor(Date.now() / 1e3);
  if (n <= r) throw new Error("JWT has expired");
}
function JR(n) {
  switch (n) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const WR = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Ls(n) {
  if (!WR.test(n))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not"
    );
}
var eO = function (n, r) {
  var a = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) &&
      r.indexOf(s) < 0 &&
      (a[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(n); o < s.length; o++)
      r.indexOf(s[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, s[o]) &&
        (a[s[o]] = n[s[o]]);
  return a;
};
const Ri = (n) =>
    n.msg || n.message || n.error_description || n.error || JSON.stringify(n),
  tO = [502, 503, 504];
async function V0(n) {
  var r;
  if (!$R(n)) throw new ly(Ri(n), 0);
  if (tO.includes(n.status)) throw new ly(Ri(n), n.status);
  let a;
  try {
    a = await n.json();
  } catch (u) {
    throw new U_(Ri(u), u);
  }
  let s;
  const o = ZR(n);
  if (
    (o &&
    o.getTime() >= N_["2024-01-01"].timestamp &&
    typeof a == "object" &&
    a &&
    typeof a.code == "string"
      ? (s = a.code)
      : typeof a == "object" &&
        a &&
        typeof a.error_code == "string" &&
        (s = a.error_code),
    s)
  ) {
    if (s === "weak_password")
      throw new q0(
        Ri(a),
        n.status,
        ((r = a.weak_password) === null || r === void 0 ? void 0 : r.reasons) ||
          []
      );
    if (s === "session_not_found") throw new Da();
  } else if (
    typeof a == "object" &&
    a &&
    typeof a.weak_password == "object" &&
    a.weak_password &&
    Array.isArray(a.weak_password.reasons) &&
    a.weak_password.reasons.length &&
    a.weak_password.reasons.reduce((u, f) => u && typeof f == "string", !0)
  )
    throw new q0(Ri(a), n.status, a.weak_password.reasons);
  throw new AR(Ri(a), n.status || 500, s);
}
const nO = (n, r, a, s) => {
  const o = { method: n, headers: (r == null ? void 0 : r.headers) || {} };
  return n === "GET"
    ? o
    : ((o.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        r == null ? void 0 : r.headers
      )),
      (o.body = JSON.stringify(s)),
      Object.assign(Object.assign({}, o), a));
};
async function Ke(n, r, a, s) {
  var o;
  const u = Object.assign({}, s == null ? void 0 : s.headers);
  u[sy] || (u[sy] = N_["2024-01-01"].name),
    s != null && s.jwt && (u.Authorization = `Bearer ${s.jwt}`);
  const f =
    (o = s == null ? void 0 : s.query) !== null && o !== void 0 ? o : {};
  s != null && s.redirectTo && (f.redirect_to = s.redirectTo);
  const h = Object.keys(f).length
      ? "?" + new URLSearchParams(f).toString()
      : "",
    y = await rO(
      n,
      r,
      a + h,
      { headers: u, noResolveJson: s == null ? void 0 : s.noResolveJson },
      {},
      s == null ? void 0 : s.body
    );
  return s != null && s.xform
    ? s == null
      ? void 0
      : s.xform(y)
    : { data: Object.assign({}, y), error: null };
}
async function rO(n, r, a, s, o, u) {
  const f = nO(r, s, o, u);
  let h;
  try {
    h = await n(a, Object.assign({}, f));
  } catch (y) {
    throw (console.error(y), new ly(Ri(y), 0));
  }
  if ((h.ok || (await V0(h)), s != null && s.noResolveJson)) return h;
  try {
    return await h.json();
  } catch (y) {
    await V0(y);
  }
}
function Kr(n) {
  var r;
  let a = null;
  lO(n) &&
    ((a = Object.assign({}, n)),
    n.expires_at || (a.expires_at = qR(n.expires_in)));
  const s = (r = n.user) !== null && r !== void 0 ? r : n;
  return { data: { session: a, user: s }, error: null };
}
function F0(n) {
  const r = Kr(n);
  return (
    !r.error &&
      n.weak_password &&
      typeof n.weak_password == "object" &&
      Array.isArray(n.weak_password.reasons) &&
      n.weak_password.reasons.length &&
      n.weak_password.message &&
      typeof n.weak_password.message == "string" &&
      n.weak_password.reasons.reduce((a, s) => a && typeof s == "string", !0) &&
      (r.data.weak_password = n.weak_password),
    r
  );
}
function Ua(n) {
  var r;
  return {
    data: { user: (r = n.user) !== null && r !== void 0 ? r : n },
    error: null,
  };
}
function aO(n) {
  return { data: n, error: null };
}
function iO(n) {
  const {
      action_link: r,
      email_otp: a,
      hashed_token: s,
      redirect_to: o,
      verification_type: u,
    } = n,
    f = eO(n, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    h = {
      action_link: r,
      email_otp: a,
      hashed_token: s,
      redirect_to: o,
      verification_type: u,
    },
    y = Object.assign({}, f);
  return { data: { properties: h, user: y }, error: null };
}
function sO(n) {
  return n;
}
function lO(n) {
  return n.access_token && n.refresh_token && n.expires_in;
}
const Oh = ["global", "local", "others"];
var oO = function (n, r) {
  var a = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) &&
      r.indexOf(s) < 0 &&
      (a[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(n); o < s.length; o++)
      r.indexOf(s[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, s[o]) &&
        (a[s[o]] = n[s[o]]);
  return a;
};
class uO {
  constructor({ url: r = "", headers: a = {}, fetch: s }) {
    (this.url = r),
      (this.headers = a),
      (this.fetch = z_(s)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      });
  }
  async signOut(r, a = Oh[0]) {
    if (Oh.indexOf(a) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${Oh.join(", ")}`
      );
    try {
      return (
        await Ke(this.fetch, "POST", `${this.url}/logout?scope=${a}`, {
          headers: this.headers,
          jwt: r,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (s) {
      if (Be(s)) return { data: null, error: s };
      throw s;
    }
  }
  async inviteUserByEmail(r, a = {}) {
    try {
      return await Ke(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: r, data: a.data },
        headers: this.headers,
        redirectTo: a.redirectTo,
        xform: Ua,
      });
    } catch (s) {
      if (Be(s)) return { data: { user: null }, error: s };
      throw s;
    }
  }
  async generateLink(r) {
    try {
      const { options: a } = r,
        s = oO(r, ["options"]),
        o = Object.assign(Object.assign({}, s), a);
      return (
        "newEmail" in s &&
          ((o.new_email = s == null ? void 0 : s.newEmail), delete o.newEmail),
        await Ke(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: o,
          headers: this.headers,
          xform: iO,
          redirectTo: a == null ? void 0 : a.redirectTo,
        })
      );
    } catch (a) {
      if (Be(a)) return { data: { properties: null, user: null }, error: a };
      throw a;
    }
  }
  async createUser(r) {
    try {
      return await Ke(this.fetch, "POST", `${this.url}/admin/users`, {
        body: r,
        headers: this.headers,
        xform: Ua,
      });
    } catch (a) {
      if (Be(a)) return { data: { user: null }, error: a };
      throw a;
    }
  }
  async listUsers(r) {
    var a, s, o, u, f, h, y;
    try {
      const m = { nextPage: null, lastPage: 0, total: 0 },
        p = await Ke(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (s =
                (a = r == null ? void 0 : r.page) === null || a === void 0
                  ? void 0
                  : a.toString()) !== null && s !== void 0
                ? s
                : "",
            per_page:
              (u =
                (o = r == null ? void 0 : r.perPage) === null || o === void 0
                  ? void 0
                  : o.toString()) !== null && u !== void 0
                ? u
                : "",
          },
          xform: sO,
        });
      if (p.error) throw p.error;
      const g = await p.json(),
        b =
          (f = p.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0,
        S =
          (y =
            (h = p.headers.get("link")) === null || h === void 0
              ? void 0
              : h.split(",")) !== null && y !== void 0
            ? y
            : [];
      return (
        S.length > 0 &&
          (S.forEach((x) => {
            const N = parseInt(x.split(";")[0].split("=")[1].substring(0, 1)),
              C = JSON.parse(x.split(";")[1].split("=")[1]);
            m[`${C}Page`] = N;
          }),
          (m.total = parseInt(b))),
        { data: Object.assign(Object.assign({}, g), m), error: null }
      );
    } catch (m) {
      if (Be(m)) return { data: { users: [] }, error: m };
      throw m;
    }
  }
  async getUserById(r) {
    Ls(r);
    try {
      return await Ke(this.fetch, "GET", `${this.url}/admin/users/${r}`, {
        headers: this.headers,
        xform: Ua,
      });
    } catch (a) {
      if (Be(a)) return { data: { user: null }, error: a };
      throw a;
    }
  }
  async updateUserById(r, a) {
    Ls(r);
    try {
      return await Ke(this.fetch, "PUT", `${this.url}/admin/users/${r}`, {
        body: a,
        headers: this.headers,
        xform: Ua,
      });
    } catch (s) {
      if (Be(s)) return { data: { user: null }, error: s };
      throw s;
    }
  }
  async deleteUser(r, a = !1) {
    Ls(r);
    try {
      return await Ke(this.fetch, "DELETE", `${this.url}/admin/users/${r}`, {
        headers: this.headers,
        body: { should_soft_delete: a },
        xform: Ua,
      });
    } catch (s) {
      if (Be(s)) return { data: { user: null }, error: s };
      throw s;
    }
  }
  async _listFactors(r) {
    Ls(r.userId);
    try {
      const { data: a, error: s } = await Ke(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${r.userId}/factors`,
        {
          headers: this.headers,
          xform: (o) => ({ data: { factors: o }, error: null }),
        }
      );
      return { data: a, error: s };
    } catch (a) {
      if (Be(a)) return { data: null, error: a };
      throw a;
    }
  }
  async _deleteFactor(r) {
    Ls(r.userId), Ls(r.id);
    try {
      return {
        data: await Ke(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${r.userId}/factors/${r.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (a) {
      if (Be(a)) return { data: null, error: a };
      throw a;
    }
  }
}
const cO = {
  getItem: (n) => (xo() ? globalThis.localStorage.getItem(n) : null),
  setItem: (n, r) => {
    xo() && globalThis.localStorage.setItem(n, r);
  },
  removeItem: (n) => {
    xo() && globalThis.localStorage.removeItem(n);
  },
};
function G0(n = {}) {
  return {
    getItem: (r) => n[r] || null,
    setItem: (r, a) => {
      n[r] = a;
    },
    removeItem: (r) => {
      delete n[r];
    },
  };
}
function fO() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const Bs = {
  debug: !!(
    globalThis &&
    xo() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class B_ extends Error {
  constructor(r) {
    super(r), (this.isAcquireTimeout = !0);
  }
}
class dO extends B_ {}
async function hO(n, r, a) {
  Bs.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", n, r);
  const s = new globalThis.AbortController();
  return (
    r > 0 &&
      setTimeout(() => {
        s.abort(),
          Bs.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock acquire timed out",
              n
            );
      }, r),
    await Promise.resolve().then(() =>
      globalThis.navigator.locks.request(
        n,
        r === 0
          ? { mode: "exclusive", ifAvailable: !0 }
          : { mode: "exclusive", signal: s.signal },
        async (o) => {
          if (o) {
            Bs.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                n,
                o.name
              );
            try {
              return await a();
            } finally {
              Bs.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: released",
                  n,
                  o.name
                );
            }
          } else {
            if (r === 0)
              throw (
                (Bs.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: not immediately available",
                    n
                  ),
                new dO(
                  `Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`
                ))
              );
            if (Bs.debug)
              try {
                const u = await globalThis.navigator.locks.query();
                console.log(
                  "@supabase/gotrue-js: Navigator LockManager state",
                  JSON.stringify(u, null, "  ")
                );
              } catch (u) {
                console.warn(
                  "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                  u
                );
              }
            return (
              console.warn(
                "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
              ),
              await a()
            );
          }
        }
      )
    )
  );
}
fO();
const yO = {
  url: xR,
  storageKey: ER,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: TR,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
};
async function Q0(n, r, a) {
  return await a();
}
class Mo {
  constructor(r) {
    var a, s;
    (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log),
      (this.instanceID = Mo.nextInstanceID),
      (Mo.nextInstanceID += 1),
      this.instanceID > 0 &&
        ar() &&
        console.warn(
          "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
        );
    const o = Object.assign(Object.assign({}, yO), r);
    if (
      ((this.logDebugMessages = !!o.debug),
      typeof o.debug == "function" && (this.logger = o.debug),
      (this.persistSession = o.persistSession),
      (this.storageKey = o.storageKey),
      (this.autoRefreshToken = o.autoRefreshToken),
      (this.admin = new uO({ url: o.url, headers: o.headers, fetch: o.fetch })),
      (this.url = o.url),
      (this.headers = o.headers),
      (this.fetch = z_(o.fetch)),
      (this.lock = o.lock || Q0),
      (this.detectSessionInUrl = o.detectSessionInUrl),
      (this.flowType = o.flowType),
      (this.hasCustomAuthorizationHeader = o.hasCustomAuthorizationHeader),
      o.lock
        ? (this.lock = o.lock)
        : ar() &&
          !(
            (a = globalThis == null ? void 0 : globalThis.navigator) === null ||
            a === void 0
          ) &&
          a.locks
        ? (this.lock = hO)
        : (this.lock = Q0),
      (this.jwks = { keys: [] }),
      (this.jwks_cached_at = Number.MIN_SAFE_INTEGER),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
      }),
      this.persistSession
        ? o.storage
          ? (this.storage = o.storage)
          : xo()
          ? (this.storage = cO)
          : ((this.memoryStorage = {}), (this.storage = G0(this.memoryStorage)))
        : ((this.memoryStorage = {}), (this.storage = G0(this.memoryStorage))),
      ar() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (u) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          u
        );
      }
      (s = this.broadcastChannel) === null ||
        s === void 0 ||
        s.addEventListener("message", async (u) => {
          this._debug(
            "received broadcast notification from other tab or client",
            u
          ),
            await this._notifyAllSubscribers(u.data.event, u.data.session, !1);
        });
    }
    this.initialize();
  }
  _debug(...r) {
    return (
      this.logDebugMessages &&
        this.logger(
          `GoTrueClient@${this.instanceID} (${M_}) ${new Date().toISOString()}`,
          ...r
        ),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(-1, async () => await this._initialize()))()),
        await this.initializePromise);
  }
  async _initialize() {
    var r;
    try {
      const a = PR(window.location.href);
      let s = "none";
      if (
        (this._isImplicitGrantCallback(a)
          ? (s = "implicit")
          : (await this._isPKCECallback(a)) && (s = "pkce"),
        ar() && this.detectSessionInUrl && s !== "none")
      ) {
        const { data: o, error: u } = await this._getSessionFromURL(a, s);
        if (u) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              u
            ),
            DR(u))
          ) {
            const y =
              (r = u.details) === null || r === void 0 ? void 0 : r.code;
            if (
              y === "identity_already_exists" ||
              y === "identity_not_found" ||
              y === "single_identity_not_deletable"
            )
              return { error: u };
          }
          return await this._removeSession(), { error: u };
        }
        const { session: f, redirectType: h } = o;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            f,
            "redirect type",
            h
          ),
          await this._saveSession(f),
          setTimeout(async () => {
            h === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", f)
              : await this._notifyAllSubscribers("SIGNED_IN", f);
          }, 0),
          { error: null }
        );
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (a) {
      return Be(a)
        ? { error: a }
        : { error: new U_("Unexpected error during initialization", a) };
    } finally {
      await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end");
    }
  }
  async signInAnonymously(r) {
    var a, s, o;
    try {
      const u = await Ke(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (s =
                (a = r == null ? void 0 : r.options) === null || a === void 0
                  ? void 0
                  : a.data) !== null && s !== void 0
                ? s
                : {},
            gotrue_meta_security: {
              captcha_token:
                (o = r == null ? void 0 : r.options) === null || o === void 0
                  ? void 0
                  : o.captchaToken,
            },
          },
          xform: Kr,
        }),
        { data: f, error: h } = u;
      if (h || !f) return { data: { user: null, session: null }, error: h };
      const y = f.session,
        m = f.user;
      return (
        f.session &&
          (await this._saveSession(f.session),
          await this._notifyAllSubscribers("SIGNED_IN", y)),
        { data: { user: m, session: y }, error: null }
      );
    } catch (u) {
      if (Be(u)) return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  async signUp(r) {
    var a, s, o;
    try {
      let u;
      if ("email" in r) {
        const { email: p, password: g, options: b } = r;
        let S = null,
          x = null;
        this.flowType === "pkce" &&
          ([S, x] = await zs(this.storage, this.storageKey)),
          (u = await Ke(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: b == null ? void 0 : b.emailRedirectTo,
            body: {
              email: p,
              password: g,
              data:
                (a = b == null ? void 0 : b.data) !== null && a !== void 0
                  ? a
                  : {},
              gotrue_meta_security: {
                captcha_token: b == null ? void 0 : b.captchaToken,
              },
              code_challenge: S,
              code_challenge_method: x,
            },
            xform: Kr,
          }));
      } else if ("phone" in r) {
        const { phone: p, password: g, options: b } = r;
        u = await Ke(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: p,
            password: g,
            data:
              (s = b == null ? void 0 : b.data) !== null && s !== void 0
                ? s
                : {},
            channel:
              (o = b == null ? void 0 : b.channel) !== null && o !== void 0
                ? o
                : "sms",
            gotrue_meta_security: {
              captcha_token: b == null ? void 0 : b.captchaToken,
            },
          },
          xform: Kr,
        });
      } else
        throw new cc(
          "You must provide either an email or phone number and a password"
        );
      const { data: f, error: h } = u;
      if (h || !f) return { data: { user: null, session: null }, error: h };
      const y = f.session,
        m = f.user;
      return (
        f.session &&
          (await this._saveSession(f.session),
          await this._notifyAllSubscribers("SIGNED_IN", y)),
        { data: { user: m, session: y }, error: null }
      );
    } catch (u) {
      if (Be(u)) return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  async signInWithPassword(r) {
    try {
      let a;
      if ("email" in r) {
        const { email: u, password: f, options: h } = r;
        a = await Ke(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: u,
              password: f,
              gotrue_meta_security: {
                captcha_token: h == null ? void 0 : h.captchaToken,
              },
            },
            xform: F0,
          }
        );
      } else if ("phone" in r) {
        const { phone: u, password: f, options: h } = r;
        a = await Ke(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: u,
              password: f,
              gotrue_meta_security: {
                captcha_token: h == null ? void 0 : h.captchaToken,
              },
            },
            xform: F0,
          }
        );
      } else
        throw new cc(
          "You must provide either an email or phone number and a password"
        );
      const { data: s, error: o } = a;
      return o
        ? { data: { user: null, session: null }, error: o }
        : !s || !s.session || !s.user
        ? { data: { user: null, session: null }, error: new uc() }
        : (s.session &&
            (await this._saveSession(s.session),
            await this._notifyAllSubscribers("SIGNED_IN", s.session)),
          {
            data: Object.assign(
              { user: s.user, session: s.session },
              s.weak_password ? { weakPassword: s.weak_password } : null
            ),
            error: o,
          });
    } catch (a) {
      if (Be(a)) return { data: { user: null, session: null }, error: a };
      throw a;
    }
  }
  async signInWithOAuth(r) {
    var a, s, o, u;
    return await this._handleProviderSignIn(r.provider, {
      redirectTo:
        (a = r.options) === null || a === void 0 ? void 0 : a.redirectTo,
      scopes: (s = r.options) === null || s === void 0 ? void 0 : s.scopes,
      queryParams:
        (o = r.options) === null || o === void 0 ? void 0 : o.queryParams,
      skipBrowserRedirect:
        (u = r.options) === null || u === void 0
          ? void 0
          : u.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(r) {
    return (
      await this.initializePromise,
      this._acquireLock(-1, async () => this._exchangeCodeForSession(r))
    );
  }
  async signInWithWeb3(r) {
    const { chain: a } = r;
    if (a === "solana") return await this.signInWithSolana(r);
    throw new Error(`@supabase/auth-js: Unsupported chain "${a}"`);
  }
  async signInWithSolana(r) {
    var a, s, o, u, f, h, y, m, p, g, b, S;
    let x, N;
    if ("message" in r) (x = r.message), (N = r.signature);
    else {
      const { chain: C, wallet: U, statement: Y, options: z } = r;
      let Q;
      if (ar())
        if (typeof U == "object") Q = U;
        else {
          const j = window;
          if (
            "solana" in j &&
            typeof j.solana == "object" &&
            (("signIn" in j.solana && typeof j.solana.signIn == "function") ||
              ("signMessage" in j.solana &&
                typeof j.solana.signMessage == "function"))
          )
            Q = j.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof U != "object" || !(z != null && z.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        Q = U;
      }
      const P = new URL(
        (a = z == null ? void 0 : z.url) !== null && a !== void 0
          ? a
          : window.location.href
      );
      if ("signIn" in Q && Q.signIn) {
        const j = await Q.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                z == null ? void 0 : z.signInWithSolana
              ),
              { version: "1", domain: P.host, uri: P.href }
            ),
            Y ? { statement: Y } : null
          )
        );
        let ie;
        if (Array.isArray(j) && j[0] && typeof j[0] == "object") ie = j[0];
        else if (
          j &&
          typeof j == "object" &&
          "signedMessage" in j &&
          "signature" in j
        )
          ie = j;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value"
          );
        if (
          "signedMessage" in ie &&
          "signature" in ie &&
          (typeof ie.signedMessage == "string" ||
            ie.signedMessage instanceof Uint8Array) &&
          ie.signature instanceof Uint8Array
        )
          (x =
            typeof ie.signedMessage == "string"
              ? ie.signedMessage
              : new TextDecoder().decode(ie.signedMessage)),
            (N = ie.signature);
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields"
          );
      } else {
        if (
          !("signMessage" in Q) ||
          typeof Q.signMessage != "function" ||
          !("publicKey" in Q) ||
          typeof Q != "object" ||
          !Q.publicKey ||
          !("toBase58" in Q.publicKey) ||
          typeof Q.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API"
          );
        x = [
          `${P.host} wants you to sign in with your Solana account:`,
          Q.publicKey.toBase58(),
          ...(Y ? ["", Y, ""] : [""]),
          "Version: 1",
          `URI: ${P.href}`,
          `Issued At: ${
            (o =
              (s = z == null ? void 0 : z.signInWithSolana) === null ||
              s === void 0
                ? void 0
                : s.issuedAt) !== null && o !== void 0
              ? o
              : new Date().toISOString()
          }`,
          ...(!(
            (u = z == null ? void 0 : z.signInWithSolana) === null ||
            u === void 0
          ) && u.notBefore
            ? [`Not Before: ${z.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (f = z == null ? void 0 : z.signInWithSolana) === null ||
            f === void 0
          ) && f.expirationTime
            ? [`Expiration Time: ${z.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (h = z == null ? void 0 : z.signInWithSolana) === null ||
            h === void 0
          ) && h.chainId
            ? [`Chain ID: ${z.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (y = z == null ? void 0 : z.signInWithSolana) === null ||
            y === void 0
          ) && y.nonce
            ? [`Nonce: ${z.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (m = z == null ? void 0 : z.signInWithSolana) === null ||
            m === void 0
          ) && m.requestId
            ? [`Request ID: ${z.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (g =
              (p = z == null ? void 0 : z.signInWithSolana) === null ||
              p === void 0
                ? void 0
                : p.resources) === null || g === void 0
          ) && g.length
            ? [
                "Resources",
                ...z.signInWithSolana.resources.map((ie) => `- ${ie}`),
              ]
            : []),
        ].join(`
`);
        const j = await Q.signMessage(new TextEncoder().encode(x), "utf8");
        if (!j || !(j instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value"
          );
        N = j;
      }
    }
    try {
      const { data: C, error: U } = await Ke(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: x, signature: BR(N) },
            !((b = r.options) === null || b === void 0) && b.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (S = r.options) === null || S === void 0
                        ? void 0
                        : S.captchaToken,
                  },
                }
              : null
          ),
          xform: Kr,
        }
      );
      if (U) throw U;
      return !C || !C.session || !C.user
        ? { data: { user: null, session: null }, error: new uc() }
        : (C.session &&
            (await this._saveSession(C.session),
            await this._notifyAllSubscribers("SIGNED_IN", C.session)),
          { data: Object.assign({}, C), error: U });
    } catch (C) {
      if (Be(C)) return { data: { user: null, session: null }, error: C };
      throw C;
    }
  }
  async _exchangeCodeForSession(r) {
    const a = await dc(this.storage, `${this.storageKey}-code-verifier`),
      [s, o] = (a ?? "").split("/");
    try {
      const { data: u, error: f } = await Ke(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: r, code_verifier: s },
          xform: Kr,
        }
      );
      if ((await hc(this.storage, `${this.storageKey}-code-verifier`), f))
        throw f;
      return !u || !u.session || !u.user
        ? {
            data: { user: null, session: null, redirectType: null },
            error: new uc(),
          }
        : (u.session &&
            (await this._saveSession(u.session),
            await this._notifyAllSubscribers("SIGNED_IN", u.session)),
          {
            data: Object.assign(Object.assign({}, u), {
              redirectType: o ?? null,
            }),
            error: f,
          });
    } catch (u) {
      if (Be(u))
        return {
          data: { user: null, session: null, redirectType: null },
          error: u,
        };
      throw u;
    }
  }
  async signInWithIdToken(r) {
    try {
      const {
          options: a,
          provider: s,
          token: o,
          access_token: u,
          nonce: f,
        } = r,
        h = await Ke(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: s,
              id_token: o,
              access_token: u,
              nonce: f,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: Kr,
          }
        ),
        { data: y, error: m } = h;
      return m
        ? { data: { user: null, session: null }, error: m }
        : !y || !y.session || !y.user
        ? { data: { user: null, session: null }, error: new uc() }
        : (y.session &&
            (await this._saveSession(y.session),
            await this._notifyAllSubscribers("SIGNED_IN", y.session)),
          { data: y, error: m });
    } catch (a) {
      if (Be(a)) return { data: { user: null, session: null }, error: a };
      throw a;
    }
  }
  async signInWithOtp(r) {
    var a, s, o, u, f;
    try {
      if ("email" in r) {
        const { email: h, options: y } = r;
        let m = null,
          p = null;
        this.flowType === "pkce" &&
          ([m, p] = await zs(this.storage, this.storageKey));
        const { error: g } = await Ke(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: h,
            data:
              (a = y == null ? void 0 : y.data) !== null && a !== void 0
                ? a
                : {},
            create_user:
              (s = y == null ? void 0 : y.shouldCreateUser) !== null &&
              s !== void 0
                ? s
                : !0,
            gotrue_meta_security: {
              captcha_token: y == null ? void 0 : y.captchaToken,
            },
            code_challenge: m,
            code_challenge_method: p,
          },
          redirectTo: y == null ? void 0 : y.emailRedirectTo,
        });
        return { data: { user: null, session: null }, error: g };
      }
      if ("phone" in r) {
        const { phone: h, options: y } = r,
          { data: m, error: p } = await Ke(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: h,
                data:
                  (o = y == null ? void 0 : y.data) !== null && o !== void 0
                    ? o
                    : {},
                create_user:
                  (u = y == null ? void 0 : y.shouldCreateUser) !== null &&
                  u !== void 0
                    ? u
                    : !0,
                gotrue_meta_security: {
                  captcha_token: y == null ? void 0 : y.captchaToken,
                },
                channel:
                  (f = y == null ? void 0 : y.channel) !== null && f !== void 0
                    ? f
                    : "sms",
              },
            }
          );
        return {
          data: {
            user: null,
            session: null,
            messageId: m == null ? void 0 : m.message_id,
          },
          error: p,
        };
      }
      throw new cc("You must provide either an email or phone number.");
    } catch (h) {
      if (Be(h)) return { data: { user: null, session: null }, error: h };
      throw h;
    }
  }
  async verifyOtp(r) {
    var a, s;
    try {
      let o, u;
      "options" in r &&
        ((o = (a = r.options) === null || a === void 0 ? void 0 : a.redirectTo),
        (u =
          (s = r.options) === null || s === void 0 ? void 0 : s.captchaToken));
      const { data: f, error: h } = await Ke(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, r), {
            gotrue_meta_security: { captcha_token: u },
          }),
          redirectTo: o,
          xform: Kr,
        }
      );
      if (h) throw h;
      if (!f) throw new Error("An error occurred on token verification.");
      const y = f.session,
        m = f.user;
      return (
        y != null &&
          y.access_token &&
          (await this._saveSession(y),
          await this._notifyAllSubscribers(
            r.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            y
          )),
        { data: { user: m, session: y }, error: null }
      );
    } catch (o) {
      if (Be(o)) return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  async signInWithSSO(r) {
    var a, s, o;
    try {
      let u = null,
        f = null;
      return (
        this.flowType === "pkce" &&
          ([u, f] = await zs(this.storage, this.storageKey)),
        await Ke(this.fetch, "POST", `${this.url}/sso`, {
          body: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    "providerId" in r ? { provider_id: r.providerId } : null
                  ),
                  "domain" in r ? { domain: r.domain } : null
                ),
                {
                  redirect_to:
                    (s =
                      (a = r.options) === null || a === void 0
                        ? void 0
                        : a.redirectTo) !== null && s !== void 0
                      ? s
                      : void 0,
                }
              ),
              !(
                (o = r == null ? void 0 : r.options) === null || o === void 0
              ) && o.captchaToken
                ? {
                    gotrue_meta_security: {
                      captcha_token: r.options.captchaToken,
                    },
                  }
                : null
            ),
            {
              skip_http_redirect: !0,
              code_challenge: u,
              code_challenge_method: f,
            }
          ),
          headers: this.headers,
          xform: aO,
        })
      );
    } catch (u) {
      if (Be(u)) return { data: null, error: u };
      throw u;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._reauthenticate())
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: a },
          error: s,
        } = r;
        if (s) throw s;
        if (!a) throw new Da();
        const { error: o } = await Ke(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: a.access_token }
        );
        return { data: { user: null, session: null }, error: o };
      });
    } catch (r) {
      if (Be(r)) return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  async resend(r) {
    try {
      const a = `${this.url}/resend`;
      if ("email" in r) {
        const { email: s, type: o, options: u } = r,
          { error: f } = await Ke(this.fetch, "POST", a, {
            headers: this.headers,
            body: {
              email: s,
              type: o,
              gotrue_meta_security: {
                captcha_token: u == null ? void 0 : u.captchaToken,
              },
            },
            redirectTo: u == null ? void 0 : u.emailRedirectTo,
          });
        return { data: { user: null, session: null }, error: f };
      } else if ("phone" in r) {
        const { phone: s, type: o, options: u } = r,
          { data: f, error: h } = await Ke(this.fetch, "POST", a, {
            headers: this.headers,
            body: {
              phone: s,
              type: o,
              gotrue_meta_security: {
                captcha_token: u == null ? void 0 : u.captchaToken,
              },
            },
          });
        return {
          data: {
            user: null,
            session: null,
            messageId: f == null ? void 0 : f.message_id,
          },
          error: h,
        };
      }
      throw new cc(
        "You must provide either an email or phone number and a type"
      );
    } catch (a) {
      if (Be(a)) return { data: { user: null, session: null }, error: a };
      throw a;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => this._useSession(async (a) => a))
    );
  }
  async _acquireLock(r, a) {
    this._debug("#_acquireLock", "begin", r);
    try {
      if (this.lockAcquired) {
        const s = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          o = (async () => (await s, await a()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await o;
              } catch {}
            })()
          ),
          o
        );
      }
      return await this.lock(`lock:${this.storageKey}`, r, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const s = a();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await s;
                } catch {}
              })()
            ),
              await s;
            this.pendingInLock.length;

          ) {
            const o = [...this.pendingInLock];
            await Promise.all(o), this.pendingInLock.splice(0, o.length);
          }
          return await s;
        } finally {
          this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey
          ),
            (this.lockAcquired = !1);
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(r) {
    this._debug("#_useSession", "begin");
    try {
      const a = await this.__loadSession();
      return await r(a);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack
        );
    try {
      let r = null;
      const a = await dc(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", a),
        a !== null &&
          (this._isValidSession(a)
            ? (r = a)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid"
              ),
              await this._removeSession())),
        !r)
      )
        return { data: { session: null }, error: null };
      const s = r.expires_at ? r.expires_at * 1e3 - Date.now() < Eh : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${s ? "" : " not"} expired`,
          "expires_at",
          r.expires_at
        ),
        !s)
      ) {
        if (this.storage.isServer) {
          let f = this.suppressGetSessionWarning;
          r = new Proxy(r, {
            get: (y, m, p) => (
              !f &&
                m === "user" &&
                (console.warn(
                  "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                ),
                (f = !0),
                (this.suppressGetSessionWarning = !0)),
              Reflect.get(y, m, p)
            ),
          });
        }
        return { data: { session: r }, error: null };
      }
      const { session: o, error: u } = await this._callRefreshToken(
        r.refresh_token
      );
      return u
        ? { data: { session: null }, error: u }
        : { data: { session: o }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(r) {
    return r
      ? await this._getUser(r)
      : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(r) {
    try {
      return r
        ? await Ke(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: r,
            xform: Ua,
          })
        : await this._useSession(async (a) => {
            var s, o, u;
            const { data: f, error: h } = a;
            if (h) throw h;
            return !(
              !((s = f.session) === null || s === void 0) && s.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new Da() }
              : await Ke(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (u =
                      (o = f.session) === null || o === void 0
                        ? void 0
                        : o.access_token) !== null && u !== void 0
                      ? u
                      : void 0,
                  xform: Ua,
                });
          });
    } catch (a) {
      if (Be(a))
        return (
          CR(a) &&
            (await this._removeSession(),
            await hc(this.storage, `${this.storageKey}-code-verifier`)),
          { data: { user: null }, error: a }
        );
      throw a;
    }
  }
  async updateUser(r, a = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._updateUser(r, a))
    );
  }
  async _updateUser(r, a = {}) {
    try {
      return await this._useSession(async (s) => {
        const { data: o, error: u } = s;
        if (u) throw u;
        if (!o.session) throw new Da();
        const f = o.session;
        let h = null,
          y = null;
        this.flowType === "pkce" &&
          r.email != null &&
          ([h, y] = await zs(this.storage, this.storageKey));
        const { data: m, error: p } = await Ke(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: a == null ? void 0 : a.emailRedirectTo,
            body: Object.assign(Object.assign({}, r), {
              code_challenge: h,
              code_challenge_method: y,
            }),
            jwt: f.access_token,
            xform: Ua,
          }
        );
        if (p) throw p;
        return (
          (f.user = m.user),
          await this._saveSession(f),
          await this._notifyAllSubscribers("USER_UPDATED", f),
          { data: { user: f.user }, error: null }
        );
      });
    } catch (s) {
      if (Be(s)) return { data: { user: null }, error: s };
      throw s;
    }
  }
  async setSession(r) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._setSession(r))
    );
  }
  async _setSession(r) {
    try {
      if (!r.access_token || !r.refresh_token) throw new Da();
      const a = Date.now() / 1e3;
      let s = a,
        o = !0,
        u = null;
      const { payload: f } = Rh(r.access_token);
      if ((f.exp && ((s = f.exp), (o = s <= a)), o)) {
        const { session: h, error: y } = await this._callRefreshToken(
          r.refresh_token
        );
        if (y) return { data: { user: null, session: null }, error: y };
        if (!h) return { data: { user: null, session: null }, error: null };
        u = h;
      } else {
        const { data: h, error: y } = await this._getUser(r.access_token);
        if (y) throw y;
        (u = {
          access_token: r.access_token,
          refresh_token: r.refresh_token,
          user: h.user,
          token_type: "bearer",
          expires_in: s - a,
          expires_at: s,
        }),
          await this._saveSession(u),
          await this._notifyAllSubscribers("SIGNED_IN", u);
      }
      return { data: { user: u.user, session: u }, error: null };
    } catch (a) {
      if (Be(a)) return { data: { session: null, user: null }, error: a };
      throw a;
    }
  }
  async refreshSession(r) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._refreshSession(r))
    );
  }
  async _refreshSession(r) {
    try {
      return await this._useSession(async (a) => {
        var s;
        if (!r) {
          const { data: f, error: h } = a;
          if (h) throw h;
          r = (s = f.session) !== null && s !== void 0 ? s : void 0;
        }
        if (!(r != null && r.refresh_token)) throw new Da();
        const { session: o, error: u } = await this._callRefreshToken(
          r.refresh_token
        );
        return u
          ? { data: { user: null, session: null }, error: u }
          : o
          ? { data: { user: o.user, session: o }, error: null }
          : { data: { user: null, session: null }, error: null };
      });
    } catch (a) {
      if (Be(a)) return { data: { user: null, session: null }, error: a };
      throw a;
    }
  }
  async _getSessionFromURL(r, a) {
    try {
      if (!ar()) throw new fc("No browser detected.");
      if (r.error || r.error_description || r.error_code)
        throw new fc(
          r.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: r.error || "unspecified_error",
            code: r.error_code || "unspecified_code",
          }
        );
      switch (a) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new B0("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new fc("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (a === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !r.code)
        )
          throw new B0("No code detected.");
        const { data: Y, error: z } = await this._exchangeCodeForSession(
          r.code
        );
        if (z) throw z;
        const Q = new URL(window.location.href);
        return (
          Q.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", Q.toString()),
          { data: { session: Y.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: s,
        provider_refresh_token: o,
        access_token: u,
        refresh_token: f,
        expires_in: h,
        expires_at: y,
        token_type: m,
      } = r;
      if (!u || !h || !f || !m) throw new fc("No session defined in URL");
      const p = Math.round(Date.now() / 1e3),
        g = parseInt(h);
      let b = p + g;
      y && (b = parseInt(y));
      const S = b - p;
      S * 1e3 <= Ps &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${S}s, should have been closer to ${g}s`
        );
      const x = b - g;
      p - x >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            x,
            b,
            p
          )
        : p - x < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            x,
            b,
            p
          );
      const { data: N, error: C } = await this._getUser(u);
      if (C) throw C;
      const U = {
        provider_token: s,
        provider_refresh_token: o,
        access_token: u,
        expires_in: g,
        expires_at: b,
        refresh_token: f,
        token_type: m,
        user: N.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        { data: { session: U, redirectType: r.type }, error: null }
      );
    } catch (s) {
      if (Be(s))
        return { data: { session: null, redirectType: null }, error: s };
      throw s;
    }
  }
  _isImplicitGrantCallback(r) {
    return !!(r.access_token || r.error_description);
  }
  async _isPKCECallback(r) {
    const a = await dc(this.storage, `${this.storageKey}-code-verifier`);
    return !!(r.code && a);
  }
  async signOut(r = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._signOut(r))
    );
  }
  async _signOut({ scope: r } = { scope: "global" }) {
    return await this._useSession(async (a) => {
      var s;
      const { data: o, error: u } = a;
      if (u) return { error: u };
      const f =
        (s = o.session) === null || s === void 0 ? void 0 : s.access_token;
      if (f) {
        const { error: h } = await this.admin.signOut(f, r);
        if (
          h &&
          !(jR(h) && (h.status === 404 || h.status === 401 || h.status === 403))
        )
          return { error: h };
      }
      return (
        r !== "others" &&
          (await this._removeSession(),
          await hc(this.storage, `${this.storageKey}-code-verifier`)),
        { error: null }
      );
    });
  }
  onAuthStateChange(r) {
    const a = HR(),
      s = {
        id: a,
        callback: r,
        unsubscribe: () => {
          this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            a
          ),
            this.stateChangeEmitters.delete(a);
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", a),
      this.stateChangeEmitters.set(a, s),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(-1, async () => {
          this._emitInitialSession(a);
        })
      ))(),
      { data: { subscription: s } }
    );
  }
  async _emitInitialSession(r) {
    return await this._useSession(async (a) => {
      var s, o;
      try {
        const {
          data: { session: u },
          error: f,
        } = a;
        if (f) throw f;
        await ((s = this.stateChangeEmitters.get(r)) === null || s === void 0
          ? void 0
          : s.callback("INITIAL_SESSION", u)),
          this._debug("INITIAL_SESSION", "callback id", r, "session", u);
      } catch (u) {
        await ((o = this.stateChangeEmitters.get(r)) === null || o === void 0
          ? void 0
          : o.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", r, "error", u),
          console.error(u);
      }
    });
  }
  async resetPasswordForEmail(r, a = {}) {
    let s = null,
      o = null;
    this.flowType === "pkce" &&
      ([s, o] = await zs(this.storage, this.storageKey, !0));
    try {
      return await Ke(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: r,
          code_challenge: s,
          code_challenge_method: o,
          gotrue_meta_security: { captcha_token: a.captchaToken },
        },
        headers: this.headers,
        redirectTo: a.redirectTo,
      });
    } catch (u) {
      if (Be(u)) return { data: null, error: u };
      throw u;
    }
  }
  async getUserIdentities() {
    var r;
    try {
      const { data: a, error: s } = await this.getUser();
      if (s) throw s;
      return {
        data: {
          identities: (r = a.user.identities) !== null && r !== void 0 ? r : [],
        },
        error: null,
      };
    } catch (a) {
      if (Be(a)) return { data: null, error: a };
      throw a;
    }
  }
  async linkIdentity(r) {
    var a;
    try {
      const { data: s, error: o } = await this._useSession(async (u) => {
        var f, h, y, m, p;
        const { data: g, error: b } = u;
        if (b) throw b;
        const S = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          r.provider,
          {
            redirectTo:
              (f = r.options) === null || f === void 0 ? void 0 : f.redirectTo,
            scopes:
              (h = r.options) === null || h === void 0 ? void 0 : h.scopes,
            queryParams:
              (y = r.options) === null || y === void 0 ? void 0 : y.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await Ke(this.fetch, "GET", S, {
          headers: this.headers,
          jwt:
            (p =
              (m = g.session) === null || m === void 0
                ? void 0
                : m.access_token) !== null && p !== void 0
              ? p
              : void 0,
        });
      });
      if (o) throw o;
      return (
        ar() &&
          !(
            !((a = r.options) === null || a === void 0) && a.skipBrowserRedirect
          ) &&
          window.location.assign(s == null ? void 0 : s.url),
        {
          data: { provider: r.provider, url: s == null ? void 0 : s.url },
          error: null,
        }
      );
    } catch (s) {
      if (Be(s)) return { data: { provider: r.provider, url: null }, error: s };
      throw s;
    }
  }
  async unlinkIdentity(r) {
    try {
      return await this._useSession(async (a) => {
        var s, o;
        const { data: u, error: f } = a;
        if (f) throw f;
        return await Ke(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${r.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (o =
                (s = u.session) === null || s === void 0
                  ? void 0
                  : s.access_token) !== null && o !== void 0
                ? o
                : void 0,
          }
        );
      });
    } catch (a) {
      if (Be(a)) return { data: null, error: a };
      throw a;
    }
  }
  async _refreshAccessToken(r) {
    const a = `#_refreshAccessToken(${r.substring(0, 5)}...)`;
    this._debug(a, "begin");
    try {
      const s = Date.now();
      return await FR(
        async (o) => (
          o > 0 && (await VR(200 * Math.pow(2, o - 1))),
          this._debug(a, "refreshing attempt", o),
          await Ke(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: r }, headers: this.headers, xform: Kr }
          )
        ),
        (o, u) => {
          const f = 200 * Math.pow(2, o);
          return u && Th(u) && Date.now() + f - s < Ps;
        }
      );
    } catch (s) {
      if ((this._debug(a, "error", s), Be(s)))
        return { data: { session: null, user: null }, error: s };
      throw s;
    } finally {
      this._debug(a, "end");
    }
  }
  _isValidSession(r) {
    return (
      typeof r == "object" &&
      r !== null &&
      "access_token" in r &&
      "refresh_token" in r &&
      "expires_at" in r
    );
  }
  async _handleProviderSignIn(r, a) {
    const s = await this._getUrlForProvider(`${this.url}/authorize`, r, {
      redirectTo: a.redirectTo,
      scopes: a.scopes,
      queryParams: a.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        r,
        "options",
        a,
        "url",
        s
      ),
      ar() && !a.skipBrowserRedirect && window.location.assign(s),
      { data: { provider: r, url: s }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var r;
    const a = "#_recoverAndRefresh()";
    this._debug(a, "begin");
    try {
      const s = await dc(this.storage, this.storageKey);
      if (
        (this._debug(a, "session from storage", s), !this._isValidSession(s))
      ) {
        this._debug(a, "session is not valid"),
          s !== null && (await this._removeSession());
        return;
      }
      const o =
        ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 -
          Date.now() <
        Eh;
      if (
        (this._debug(
          a,
          `session has${o ? "" : " not"} expired with margin of ${Eh}s`
        ),
        o)
      ) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: u } = await this._callRefreshToken(s.refresh_token);
          u &&
            (console.error(u),
            Th(u) ||
              (this._debug(
                a,
                "refresh failed with a non-retryable error, removing the session",
                u
              ),
              await this._removeSession()));
        }
      } else await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      this._debug(a, "error", s), console.error(s);
      return;
    } finally {
      this._debug(a, "end");
    }
  }
  async _callRefreshToken(r) {
    var a, s;
    if (!r) throw new Da();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const o = `#_callRefreshToken(${r.substring(0, 5)}...)`;
    this._debug(o, "begin");
    try {
      this.refreshingDeferred = new Xc();
      const { data: u, error: f } = await this._refreshAccessToken(r);
      if (f) throw f;
      if (!u.session) throw new Da();
      await this._saveSession(u.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", u.session);
      const h = { session: u.session, error: null };
      return this.refreshingDeferred.resolve(h), h;
    } catch (u) {
      if ((this._debug(o, "error", u), Be(u))) {
        const f = { session: null, error: u };
        return (
          Th(u) || (await this._removeSession()),
          (a = this.refreshingDeferred) === null ||
            a === void 0 ||
            a.resolve(f),
          f
        );
      }
      throw (
        ((s = this.refreshingDeferred) === null || s === void 0 || s.reject(u),
        u)
      );
    } finally {
      (this.refreshingDeferred = null), this._debug(o, "end");
    }
  }
  async _notifyAllSubscribers(r, a, s = !0) {
    const o = `#_notifyAllSubscribers(${r})`;
    this._debug(o, "begin", a, `broadcast = ${s}`);
    try {
      this.broadcastChannel &&
        s &&
        this.broadcastChannel.postMessage({ event: r, session: a });
      const u = [],
        f = Array.from(this.stateChangeEmitters.values()).map(async (h) => {
          try {
            await h.callback(r, a);
          } catch (y) {
            u.push(y);
          }
        });
      if ((await Promise.all(f), u.length > 0)) {
        for (let h = 0; h < u.length; h += 1) console.error(u[h]);
        throw u[0];
      }
    } finally {
      this._debug(o, "end");
    }
  }
  async _saveSession(r) {
    this._debug("#_saveSession()", r),
      (this.suppressGetSessionWarning = !0),
      await L_(this.storage, this.storageKey, r);
  }
  async _removeSession() {
    this._debug("#_removeSession()"),
      await hc(this.storage, this.storageKey),
      await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const r = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      r &&
        ar() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", r);
    } catch (a) {
      console.error("removing visibilitychange callback failed", a);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const r = setInterval(() => this._autoRefreshTokenTick(), Ps);
    (this.autoRefreshTicker = r),
      r && typeof r == "object" && typeof r.unref == "function"
        ? r.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(r),
      setTimeout(async () => {
        await this.initializePromise, await this._autoRefreshTokenTick();
      }, 0);
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const r = this.autoRefreshTicker;
    (this.autoRefreshTicker = null), r && clearInterval(r);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const r = Date.now();
          try {
            return await this._useSession(async (a) => {
              const {
                data: { session: s },
              } = a;
              if (!s || !s.refresh_token || !s.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const o = Math.floor((s.expires_at * 1e3 - r) / Ps);
              this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${o} ticks, a tick lasts ${Ps}ms, refresh threshold is ${iy} ticks`
              ),
                o <= iy && (await this._callRefreshToken(s.refresh_token));
            });
          } catch (a) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              a
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (r) {
      if (r.isAcquireTimeout || r instanceof B_)
        this._debug("auto refresh token tick lock not available");
      else throw r;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !ar() || !(window != null && window.addEventListener))
    )
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      (this.visibilityChangedCallback = async () =>
        await this._onVisibilityChanged(!1)),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback
          ),
        await this._onVisibilityChanged(!0);
    } catch (r) {
      console.error("_handleVisibilityChange", r);
    }
  }
  async _onVisibilityChanged(r) {
    const a = `#_onVisibilityChanged(${r})`;
    this._debug(a, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          r ||
            (await this.initializePromise,
            await this._acquireLock(-1, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  a,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
  }
  async _getUrlForProvider(r, a, s) {
    const o = [`provider=${encodeURIComponent(a)}`];
    if (
      (s != null &&
        s.redirectTo &&
        o.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),
      s != null && s.scopes && o.push(`scopes=${encodeURIComponent(s.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [u, f] = await zs(this.storage, this.storageKey),
        h = new URLSearchParams({
          code_challenge: `${encodeURIComponent(u)}`,
          code_challenge_method: `${encodeURIComponent(f)}`,
        });
      o.push(h.toString());
    }
    if (s != null && s.queryParams) {
      const u = new URLSearchParams(s.queryParams);
      o.push(u.toString());
    }
    return (
      s != null &&
        s.skipBrowserRedirect &&
        o.push(`skip_http_redirect=${s.skipBrowserRedirect}`),
      `${r}?${o.join("&")}`
    );
  }
  async _unenroll(r) {
    try {
      return await this._useSession(async (a) => {
        var s;
        const { data: o, error: u } = a;
        return u
          ? { data: null, error: u }
          : await Ke(
              this.fetch,
              "DELETE",
              `${this.url}/factors/${r.factorId}`,
              {
                headers: this.headers,
                jwt:
                  (s = o == null ? void 0 : o.session) === null || s === void 0
                    ? void 0
                    : s.access_token,
              }
            );
      });
    } catch (a) {
      if (Be(a)) return { data: null, error: a };
      throw a;
    }
  }
  async _enroll(r) {
    try {
      return await this._useSession(async (a) => {
        var s, o;
        const { data: u, error: f } = a;
        if (f) return { data: null, error: f };
        const h = Object.assign(
            { friendly_name: r.friendlyName, factor_type: r.factorType },
            r.factorType === "phone" ? { phone: r.phone } : { issuer: r.issuer }
          ),
          { data: y, error: m } = await Ke(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: h,
              headers: this.headers,
              jwt:
                (s = u == null ? void 0 : u.session) === null || s === void 0
                  ? void 0
                  : s.access_token,
            }
          );
        return m
          ? { data: null, error: m }
          : (r.factorType === "totp" &&
              !((o = y == null ? void 0 : y.totp) === null || o === void 0) &&
              o.qr_code &&
              (y.totp.qr_code = `data:image/svg+xml;utf-8,${y.totp.qr_code}`),
            { data: y, error: null });
      });
    } catch (a) {
      if (Be(a)) return { data: null, error: a };
      throw a;
    }
  }
  async _verify(r) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (a) => {
          var s;
          const { data: o, error: u } = a;
          if (u) return { data: null, error: u };
          const { data: f, error: h } = await Ke(
            this.fetch,
            "POST",
            `${this.url}/factors/${r.factorId}/verify`,
            {
              body: { code: r.code, challenge_id: r.challengeId },
              headers: this.headers,
              jwt:
                (s = o == null ? void 0 : o.session) === null || s === void 0
                  ? void 0
                  : s.access_token,
            }
          );
          return h
            ? { data: null, error: h }
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + f.expires_in },
                  f
                )
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", f),
              { data: f, error: h });
        });
      } catch (a) {
        if (Be(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  async _challenge(r) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (a) => {
          var s;
          const { data: o, error: u } = a;
          return u
            ? { data: null, error: u }
            : await Ke(
                this.fetch,
                "POST",
                `${this.url}/factors/${r.factorId}/challenge`,
                {
                  body: { channel: r.channel },
                  headers: this.headers,
                  jwt:
                    (s = o == null ? void 0 : o.session) === null ||
                    s === void 0
                      ? void 0
                      : s.access_token,
                }
              );
        });
      } catch (a) {
        if (Be(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  async _challengeAndVerify(r) {
    const { data: a, error: s } = await this._challenge({
      factorId: r.factorId,
    });
    return s
      ? { data: null, error: s }
      : await this._verify({
          factorId: r.factorId,
          challengeId: a.id,
          code: r.code,
        });
  }
  async _listFactors() {
    const {
      data: { user: r },
      error: a,
    } = await this.getUser();
    if (a) return { data: null, error: a };
    const s = (r == null ? void 0 : r.factors) || [],
      o = s.filter((f) => f.factor_type === "totp" && f.status === "verified"),
      u = s.filter((f) => f.factor_type === "phone" && f.status === "verified");
    return { data: { all: s, totp: o, phone: u }, error: null };
  }
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(
      -1,
      async () =>
        await this._useSession(async (r) => {
          var a, s;
          const {
            data: { session: o },
            error: u,
          } = r;
          if (u) return { data: null, error: u };
          if (!o)
            return {
              data: {
                currentLevel: null,
                nextLevel: null,
                currentAuthenticationMethods: [],
              },
              error: null,
            };
          const { payload: f } = Rh(o.access_token);
          let h = null;
          f.aal && (h = f.aal);
          let y = h;
          ((s =
            (a = o.user.factors) === null || a === void 0
              ? void 0
              : a.filter((g) => g.status === "verified")) !== null &&
          s !== void 0
            ? s
            : []
          ).length > 0 && (y = "aal2");
          const p = f.amr || [];
          return {
            data: {
              currentLevel: h,
              nextLevel: y,
              currentAuthenticationMethods: p,
            },
            error: null,
          };
        })
    );
  }
  async fetchJwk(r, a = { keys: [] }) {
    let s = a.keys.find((f) => f.kid === r);
    if (
      s ||
      ((s = this.jwks.keys.find((f) => f.kid === r)),
      s && this.jwks_cached_at + OR > Date.now())
    )
      return s;
    const { data: o, error: u } = await Ke(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers }
    );
    if (u) throw u;
    if (!o.keys || o.keys.length === 0) throw new So("JWKS is empty");
    if (
      ((this.jwks = o),
      (this.jwks_cached_at = Date.now()),
      (s = o.keys.find((f) => f.kid === r)),
      !s)
    )
      throw new So("No matching signing key found in JWKS");
    return s;
  }
  async getClaims(r, a = { keys: [] }) {
    try {
      let s = r;
      if (!s) {
        const { data: S, error: x } = await this.getSession();
        if (x || !S.session) return { data: null, error: x };
        s = S.session.access_token;
      }
      const {
        header: o,
        payload: u,
        signature: f,
        raw: { header: h, payload: y },
      } = Rh(s);
      if (
        (IR(u.exp),
        !o.kid ||
          o.alg === "HS256" ||
          !("crypto" in globalThis && "subtle" in globalThis.crypto))
      ) {
        const { error: S } = await this.getUser(s);
        if (S) throw S;
        return { data: { claims: u, header: o, signature: f }, error: null };
      }
      const m = JR(o.alg),
        p = await this.fetchJwk(o.kid, a),
        g = await crypto.subtle.importKey("jwk", p, m, !0, ["verify"]);
      if (!(await crypto.subtle.verify(m, g, f, LR(`${h}.${y}`))))
        throw new So("Invalid JWT signature");
      return { data: { claims: u, header: o, signature: f }, error: null };
    } catch (s) {
      if (Be(s)) return { data: null, error: s };
      throw s;
    }
  }
}
Mo.nextInstanceID = 0;
const mO = Mo;
class pO extends mO {
  constructor(r) {
    super(r);
  }
}
var vO = function (n, r, a, s) {
  function o(u) {
    return u instanceof a
      ? u
      : new a(function (f) {
          f(u);
        });
  }
  return new (a || (a = Promise))(function (u, f) {
    function h(p) {
      try {
        m(s.next(p));
      } catch (g) {
        f(g);
      }
    }
    function y(p) {
      try {
        m(s.throw(p));
      } catch (g) {
        f(g);
      }
    }
    function m(p) {
      p.done ? u(p.value) : o(p.value).then(h, y);
    }
    m((s = s.apply(n, r || [])).next());
  });
};
class gO {
  constructor(r, a, s) {
    var o, u, f;
    if (((this.supabaseUrl = r), (this.supabaseKey = a), !r))
      throw new Error("supabaseUrl is required.");
    if (!a) throw new Error("supabaseKey is required.");
    const h = wR(r),
      y = new URL(h);
    (this.realtimeUrl = new URL("realtime/v1", y)),
      (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
        "http",
        "ws"
      )),
      (this.authUrl = new URL("auth/v1", y)),
      (this.storageUrl = new URL("storage/v1", y)),
      (this.functionsUrl = new URL("functions/v1", y));
    const m = `sb-${y.hostname.split(".")[0]}-auth-token`,
      p = {
        db: hR,
        realtime: mR,
        auth: Object.assign(Object.assign({}, yR), { storageKey: m }),
        global: dR,
      },
      g = SR(s ?? {}, p);
    (this.storageKey =
      (o = g.auth.storageKey) !== null && o !== void 0 ? o : ""),
      (this.headers = (u = g.global.headers) !== null && u !== void 0 ? u : {}),
      g.accessToken
        ? ((this.accessToken = g.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (b, S) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(
                    S
                  )} is not possible`
                );
              },
            }
          )))
        : (this.auth = this._initSupabaseAuthClient(
            (f = g.auth) !== null && f !== void 0 ? f : {},
            this.headers,
            g.global.fetch
          )),
      (this.fetch = bR(a, this._getAccessToken.bind(this), g.global.fetch)),
      (this.realtime = this._initRealtimeClient(
        Object.assign(
          {
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this),
          },
          g.realtime
        )
      )),
      (this.rest = new zT(new URL("rest/v1", y).href, {
        headers: this.headers,
        schema: g.db.schema,
        fetch: this.fetch,
      })),
      g.accessToken || this._listenForAuthEvents();
  }
  get functions() {
    return new ET(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch,
    });
  }
  get storage() {
    return new uR(this.storageUrl.href, this.headers, this.fetch);
  }
  from(r) {
    return this.rest.from(r);
  }
  schema(r) {
    return this.rest.schema(r);
  }
  rpc(r, a = {}, s = {}) {
    return this.rest.rpc(r, a, s);
  }
  channel(r, a = { config: {} }) {
    return this.realtime.channel(r, a);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(r) {
    return this.realtime.removeChannel(r);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var r, a;
    return vO(this, void 0, void 0, function* () {
      if (this.accessToken) return yield this.accessToken();
      const { data: s } = yield this.auth.getSession();
      return (a =
        (r = s.session) === null || r === void 0 ? void 0 : r.access_token) !==
        null && a !== void 0
        ? a
        : null;
    });
  }
  _initSupabaseAuthClient(
    {
      autoRefreshToken: r,
      persistSession: a,
      detectSessionInUrl: s,
      storage: o,
      storageKey: u,
      flowType: f,
      lock: h,
      debug: y,
    },
    m,
    p
  ) {
    const g = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    };
    return new pO({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, g), m),
      storageKey: u,
      autoRefreshToken: r,
      persistSession: a,
      detectSessionInUrl: s,
      storage: o,
      flowType: f,
      lock: h,
      debug: y,
      fetch: p,
      hasCustomAuthorizationHeader: "Authorization" in this.headers,
    });
  }
  _initRealtimeClient(r) {
    return new XT(
      this.realtimeUrl.href,
      Object.assign(Object.assign({}, r), {
        params: Object.assign(
          { apikey: this.supabaseKey },
          r == null ? void 0 : r.params
        ),
      })
    );
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((a, s) => {
      this._handleTokenChanged(
        a,
        "CLIENT",
        s == null ? void 0 : s.access_token
      );
    });
  }
  _handleTokenChanged(r, a, s) {
    (r === "TOKEN_REFRESHED" || r === "SIGNED_IN") &&
    this.changedAccessToken !== s
      ? (this.changedAccessToken = s)
      : r === "SIGNED_OUT" &&
        (this.realtime.setAuth(),
        a == "STORAGE" && this.auth.signOut(),
        (this.changedAccessToken = void 0));
  }
}
const bO = (n, r, a) => new gO(n, r, a),
  _O = "https://gwapiwzfmrxxdvfysqbo.supabase.co",
  wO =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3YXBpd3pmbXJ4eGR2ZnlzcWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNjk0MjksImV4cCI6MjA2NDk0NTQyOX0.Eg6OzC5i1CJ8J8G2DkZVo9MigWw38oDLMwDre-jDpEY",
  SO = bO(_O, wO);
function xO({ item: n }) {
  const r = hr(),
    a = Ja(),
    { name: s, price: o, description: u, createdAt: f, images: h, _id: y } = n;
  function m() {
    a(Za(s)),
      r(`/${y}`, {
        state: { itemName: s, images: h, description: u, createdAt: f, _id: y },
      });
  }
  return _.jsxs("div", {
    className: "product-card",
    onClick: m,
    children: [
      _.jsx("img", { src: h, alt: s }),
      _.jsx("h3", { children: s }),
      _.jsx("p", { className: "rating", children: "⭐".repeat(4) }),
      _.jsxs("p", { className: "price", children: ["$", o] }),
      _.jsx("button", { className: "add-btn", children: "Add to Cart" }),
    ],
  });
}
function EO({ card: n }) {
  return Array(n)
    .fill(0)
    .map((r, a) =>
      _.jsxs(
        "div",
        {
          className: "product-card skeleton",
          children: [
            _.jsx("div", { className: "skeleton-image" }),
            _.jsx("div", { className: "skeleton-text title" }),
            _.jsx("div", { className: "skeleton-stars" }),
            _.jsx("div", { className: "skeleton-text price" }),
            _.jsx("div", { className: "skeleton-button" }),
          ],
        },
        a
      )
    );
}
const TO = async () => {
    const n = await fetch("http://localhost:3002/api/v1/product");
    if (!n.ok) throw new Error("Network response was not ok");
    return await n.json();
  },
  RO = async (n) => {
    const r = await fetch(
      `http://localhost:3002/api/v1/product?name=${encodeURIComponent(n)}`
    );
    if (!r.ok) throw new Error("Network response was not ok");
    return await r.json();
  };
function OO() {
  return n_({ queryKey: ["product"], queryFn: TO });
}
function AO(n) {
  return n_({ queryKey: ["seeProduct", n], queryFn: () => RO(n) });
}
function jO() {
  var o;
  const { data: n, isLoading: r, isError: a } = OO(),
    s = ((o = n == null ? void 0 : n.data) == null ? void 0 : o.products) || [];
  return _.jsx("main", {
    className: "product-grid",
    children: r
      ? _.jsx(EO, { card: 9 })
      : s.map((u) => _.jsx(xO, { item: u }, u._id)),
  });
}
const CO = {
    username: "",
    phoneNumber: "912323298",
    email: "amrit@yahoo.com",
    password: "amrit1999",
    confirmPassword: "amrit1999",
    isAuthenticate: !1,
  },
  q_ = jy({
    name: "user",
    initialState: CO,
    reducers: {
      updateName(n, r) {
        (n.username = r.payload), (n.isAuthenticate = !0);
      },
      updatePhoneNumber(n, r) {
        n.phoneNumber = r.payload;
      },
      updateEmail(n, r) {
        n.email = r.payload;
      },
      updatePassword(n, r) {
        n.password = r.payload;
      },
      updateConfirm(n, r) {
        n.confirmPassword = r.payload;
      },
    },
  }),
  { updateName: DO, setUser: qj } = q_.actions,
  MO = q_.reducer;
async function NO({ email: n, password: r }) {
  const { data: a, error: s } = await SO.auth.signInWithPassword({
    email: n,
    password: r,
  });
  if (s) throw new Error(s.message);
  return console.log(a), a;
}
let UO = { data: "" },
  kO = (n) =>
    typeof window == "object"
      ? (
          (n ? n.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (n || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : n || UO,
  zO = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  LO = /\/\*[^]*?\*\/|  +/g,
  Y0 = /\n+/g,
  ka = (n, r) => {
    let a = "",
      s = "",
      o = "";
    for (let u in n) {
      let f = n[u];
      u[0] == "@"
        ? u[1] == "i"
          ? (a = u + " " + f + ";")
          : (s +=
              u[1] == "f"
                ? ka(f, u)
                : u + "{" + ka(f, u[1] == "k" ? "" : r) + "}")
        : typeof f == "object"
        ? (s += ka(
            f,
            r
              ? r.replace(/([^,])+/g, (h) =>
                  u.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (y) =>
                    /&/.test(y) ? y.replace(/&/g, h) : h ? h + " " + y : y
                  )
                )
              : u
          ))
        : f != null &&
          ((u = /^--/.test(u) ? u : u.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += ka.p ? ka.p(u, f) : u + ":" + f + ";"));
    }
    return a + (r && o ? r + "{" + o + "}" : o) + s;
  },
  Fr = {},
  H_ = (n) => {
    if (typeof n == "object") {
      let r = "";
      for (let a in n) r += a + H_(n[a]);
      return r;
    }
    return n;
  },
  BO = (n, r, a, s, o) => {
    let u = H_(n),
      f =
        Fr[u] ||
        (Fr[u] = ((y) => {
          let m = 0,
            p = 11;
          for (; m < y.length; ) p = (101 * p + y.charCodeAt(m++)) >>> 0;
          return "go" + p;
        })(u));
    if (!Fr[f]) {
      let y =
        u !== n
          ? n
          : ((m) => {
              let p,
                g,
                b = [{}];
              for (; (p = zO.exec(m.replace(LO, ""))); )
                p[4]
                  ? b.shift()
                  : p[3]
                  ? ((g = p[3].replace(Y0, " ").trim()),
                    b.unshift((b[0][g] = b[0][g] || {})))
                  : (b[0][p[1]] = p[2].replace(Y0, " ").trim());
              return b[0];
            })(n);
      Fr[f] = ka(o ? { ["@keyframes " + f]: y } : y, a ? "" : "." + f);
    }
    let h = a && Fr.g ? Fr.g : null;
    return (
      a && (Fr.g = Fr[f]),
      ((y, m, p, g) => {
        g
          ? (m.data = m.data.replace(g, y))
          : m.data.indexOf(y) === -1 && (m.data = p ? y + m.data : m.data + y);
      })(Fr[f], r, s, h),
      f
    );
  },
  qO = (n, r, a) =>
    n.reduce((s, o, u) => {
      let f = r[u];
      if (f && f.call) {
        let h = f(a),
          y = (h && h.props && h.props.className) || (/^go/.test(h) && h);
        f = y
          ? "." + y
          : h && typeof h == "object"
          ? h.props
            ? ""
            : ka(h, "")
          : h === !1
          ? ""
          : h;
      }
      return s + o + (f ?? "");
    }, "");
function Zc(n) {
  let r = this || {},
    a = n.call ? n(r.p) : n;
  return BO(
    a.unshift
      ? a.raw
        ? qO(a, [].slice.call(arguments, 1), r.p)
        : a.reduce((s, o) => Object.assign(s, o && o.call ? o(r.p) : o), {})
      : a,
    kO(r.target),
    r.g,
    r.o,
    r.k
  );
}
let P_, oy, uy;
Zc.bind({ g: 1 });
let ta = Zc.bind({ k: 1 });
function HO(n, r, a, s) {
  (ka.p = r), (P_ = n), (oy = a), (uy = s);
}
function ei(n, r) {
  let a = this || {};
  return function () {
    let s = arguments;
    function o(u, f) {
      let h = Object.assign({}, u),
        y = h.className || o.className;
      (a.p = Object.assign({ theme: oy && oy() }, h)),
        (a.o = / *go\d+/.test(y)),
        (h.className = Zc.apply(a, s) + (y ? " " + y : ""));
      let m = n;
      return (
        n[0] && ((m = h.as || n), delete h.as), uy && m[0] && uy(h), P_(m, h)
      );
    }
    return o;
  };
}
var PO = (n) => typeof n == "function",
  zc = (n, r) => (PO(n) ? n(r) : n),
  $O = (() => {
    let n = 0;
    return () => (++n).toString();
  })(),
  $_ = (() => {
    let n;
    return () => {
      if (n === void 0 && typeof window < "u") {
        let r = matchMedia("(prefers-reduced-motion: reduce)");
        n = !r || r.matches;
      }
      return n;
    };
  })(),
  VO = 20,
  V_ = (n, r) => {
    switch (r.type) {
      case 0:
        return { ...n, toasts: [r.toast, ...n.toasts].slice(0, VO) };
      case 1:
        return {
          ...n,
          toasts: n.toasts.map((u) =>
            u.id === r.toast.id ? { ...u, ...r.toast } : u
          ),
        };
      case 2:
        let { toast: a } = r;
        return V_(n, {
          type: n.toasts.find((u) => u.id === a.id) ? 1 : 0,
          toast: a,
        });
      case 3:
        let { toastId: s } = r;
        return {
          ...n,
          toasts: n.toasts.map((u) =>
            u.id === s || s === void 0
              ? { ...u, dismissed: !0, visible: !1 }
              : u
          ),
        };
      case 4:
        return r.toastId === void 0
          ? { ...n, toasts: [] }
          : { ...n, toasts: n.toasts.filter((u) => u.id !== r.toastId) };
      case 5:
        return { ...n, pausedAt: r.time };
      case 6:
        let o = r.time - (n.pausedAt || 0);
        return {
          ...n,
          pausedAt: void 0,
          toasts: n.toasts.map((u) => ({
            ...u,
            pauseDuration: u.pauseDuration + o,
          })),
        };
    }
  },
  bc = [],
  Ci = { toasts: [], pausedAt: void 0 },
  Qi = (n) => {
    (Ci = V_(Ci, n)),
      bc.forEach((r) => {
        r(Ci);
      });
  },
  FO = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  GO = (n = {}) => {
    let [r, a] = D.useState(Ci),
      s = D.useRef(Ci);
    D.useEffect(
      () => (
        s.current !== Ci && a(Ci),
        bc.push(a),
        () => {
          let u = bc.indexOf(a);
          u > -1 && bc.splice(u, 1);
        }
      ),
      []
    );
    let o = r.toasts.map((u) => {
      var f, h, y;
      return {
        ...n,
        ...n[u.type],
        ...u,
        removeDelay:
          u.removeDelay ||
          ((f = n[u.type]) == null ? void 0 : f.removeDelay) ||
          (n == null ? void 0 : n.removeDelay),
        duration:
          u.duration ||
          ((h = n[u.type]) == null ? void 0 : h.duration) ||
          (n == null ? void 0 : n.duration) ||
          FO[u.type],
        style: {
          ...n.style,
          ...((y = n[u.type]) == null ? void 0 : y.style),
          ...u.style,
        },
      };
    });
    return { ...r, toasts: o };
  },
  QO = (n, r = "blank", a) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: r,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: n,
    pauseDuration: 0,
    ...a,
    id: (a == null ? void 0 : a.id) || $O(),
  }),
  Vo = (n) => (r, a) => {
    let s = QO(r, n, a);
    return Qi({ type: 2, toast: s }), s.id;
  },
  un = (n, r) => Vo("blank")(n, r);
un.error = Vo("error");
un.success = Vo("success");
un.loading = Vo("loading");
un.custom = Vo("custom");
un.dismiss = (n) => {
  Qi({ type: 3, toastId: n });
};
un.remove = (n) => Qi({ type: 4, toastId: n });
un.promise = (n, r, a) => {
  let s = un.loading(r.loading, { ...a, ...(a == null ? void 0 : a.loading) });
  return (
    typeof n == "function" && (n = n()),
    n
      .then((o) => {
        let u = r.success ? zc(r.success, o) : void 0;
        return (
          u
            ? un.success(u, {
                id: s,
                ...a,
                ...(a == null ? void 0 : a.success),
              })
            : un.dismiss(s),
          o
        );
      })
      .catch((o) => {
        let u = r.error ? zc(r.error, o) : void 0;
        u
          ? un.error(u, { id: s, ...a, ...(a == null ? void 0 : a.error) })
          : un.dismiss(s);
      }),
    n
  );
};
var YO = (n, r) => {
    Qi({ type: 1, toast: { id: n, height: r } });
  },
  KO = () => {
    Qi({ type: 5, time: Date.now() });
  },
  Eo = new Map(),
  XO = 1e3,
  ZO = (n, r = XO) => {
    if (Eo.has(n)) return;
    let a = setTimeout(() => {
      Eo.delete(n), Qi({ type: 4, toastId: n });
    }, r);
    Eo.set(n, a);
  },
  IO = (n) => {
    let { toasts: r, pausedAt: a } = GO(n);
    D.useEffect(() => {
      if (a) return;
      let u = Date.now(),
        f = r.map((h) => {
          if (h.duration === 1 / 0) return;
          let y = (h.duration || 0) + h.pauseDuration - (u - h.createdAt);
          if (y < 0) {
            h.visible && un.dismiss(h.id);
            return;
          }
          return setTimeout(() => un.dismiss(h.id), y);
        });
      return () => {
        f.forEach((h) => h && clearTimeout(h));
      };
    }, [r, a]);
    let s = D.useCallback(() => {
        a && Qi({ type: 6, time: Date.now() });
      }, [a]),
      o = D.useCallback(
        (u, f) => {
          let {
              reverseOrder: h = !1,
              gutter: y = 8,
              defaultPosition: m,
            } = f || {},
            p = r.filter(
              (S) => (S.position || m) === (u.position || m) && S.height
            ),
            g = p.findIndex((S) => S.id === u.id),
            b = p.filter((S, x) => x < g && S.visible).length;
          return p
            .filter((S) => S.visible)
            .slice(...(h ? [b + 1] : [0, b]))
            .reduce((S, x) => S + (x.height || 0) + y, 0);
        },
        [r]
      );
    return (
      D.useEffect(() => {
        r.forEach((u) => {
          if (u.dismissed) ZO(u.id, u.removeDelay);
          else {
            let f = Eo.get(u.id);
            f && (clearTimeout(f), Eo.delete(u.id));
          }
        });
      }, [r]),
      {
        toasts: r,
        handlers: {
          updateHeight: YO,
          startPause: KO,
          endPause: s,
          calculateOffset: o,
        },
      }
    );
  },
  JO = ta`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  WO = ta`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  eA = ta`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  tA = ei("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(n) => n.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${JO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${WO} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(n) => n.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${eA} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  nA = ta`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  rA = ei("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(n) => n.secondary || "#e0e0e0"};
  border-right-color: ${(n) => n.primary || "#616161"};
  animation: ${nA} 1s linear infinite;
`,
  aA = ta`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  iA = ta`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  sA = ei("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(n) => n.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${aA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${iA} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(n) => n.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  lA = ei("div")`
  position: absolute;
`,
  oA = ei("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  uA = ta`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  cA = ei("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${uA} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  fA = ({ toast: n }) => {
    let { icon: r, type: a, iconTheme: s } = n;
    return r !== void 0
      ? typeof r == "string"
        ? D.createElement(cA, null, r)
        : r
      : a === "blank"
      ? null
      : D.createElement(
          oA,
          null,
          D.createElement(rA, { ...s }),
          a !== "loading" &&
            D.createElement(
              lA,
              null,
              a === "error"
                ? D.createElement(tA, { ...s })
                : D.createElement(sA, { ...s })
            )
        );
  },
  dA = (n) => `
0% {transform: translate3d(0,${n * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  hA = (n) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n * -150}%,-1px) scale(.6); opacity:0;}
`,
  yA = "0%{opacity:0;} 100%{opacity:1;}",
  mA = "0%{opacity:1;} 100%{opacity:0;}",
  pA = ei("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  vA = ei("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  gA = (n, r) => {
    let a = n.includes("top") ? 1 : -1,
      [s, o] = $_() ? [yA, mA] : [dA(a), hA(a)];
    return {
      animation: r
        ? `${ta(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${ta(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  bA = D.memo(({ toast: n, position: r, style: a, children: s }) => {
    let o = n.height
        ? gA(n.position || r || "top-center", n.visible)
        : { opacity: 0 },
      u = D.createElement(fA, { toast: n }),
      f = D.createElement(vA, { ...n.ariaProps }, zc(n.message, n));
    return D.createElement(
      pA,
      { className: n.className, style: { ...o, ...a, ...n.style } },
      typeof s == "function"
        ? s({ icon: u, message: f })
        : D.createElement(D.Fragment, null, u, f)
    );
  });
HO(D.createElement);
var _A = ({
    id: n,
    className: r,
    style: a,
    onHeightUpdate: s,
    children: o,
  }) => {
    let u = D.useCallback(
      (f) => {
        if (f) {
          let h = () => {
            let y = f.getBoundingClientRect().height;
            s(n, y);
          };
          h(),
            new MutationObserver(h).observe(f, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [n, s]
    );
    return D.createElement("div", { ref: u, className: r, style: a }, o);
  },
  wA = (n, r) => {
    let a = n.includes("top"),
      s = a ? { top: 0 } : { bottom: 0 },
      o = n.includes("center")
        ? { justifyContent: "center" }
        : n.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: $_() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${r * (a ? 1 : -1)}px)`,
      ...s,
      ...o,
    };
  },
  SA = Zc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  yc = 16,
  xA = ({
    reverseOrder: n,
    position: r = "top-center",
    toastOptions: a,
    gutter: s,
    children: o,
    containerStyle: u,
    containerClassName: f,
  }) => {
    let { toasts: h, handlers: y } = IO(a);
    return D.createElement(
      "div",
      {
        id: "_rht_toaster",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: yc,
          left: yc,
          right: yc,
          bottom: yc,
          pointerEvents: "none",
          ...u,
        },
        className: f,
        onMouseEnter: y.startPause,
        onMouseLeave: y.endPause,
      },
      h.map((m) => {
        let p = m.position || r,
          g = y.calculateOffset(m, {
            reverseOrder: n,
            gutter: s,
            defaultPosition: r,
          }),
          b = wA(p, g);
        return D.createElement(
          _A,
          {
            id: m.id,
            key: m.id,
            onHeightUpdate: y.updateHeight,
            className: m.visible ? SA : "",
            style: b,
          },
          m.type === "custom"
            ? zc(m.message, m)
            : o
            ? o(m)
            : D.createElement(bA, { toast: m, position: p })
        );
      })
    );
  },
  EA = un;
function TA() {
  const n = hr(),
    { mutate: r, isLoading: a } = t2({
      mutationFn: ({ email: s, password: o }) => NO({ email: s, password: o }),
      onSuccess: (s) => {
        console.log("user: ", s), n("/");
      },
      onError: (s) => {
        console.log("ERROR: ", s),
          EA.error("Provided email or password are incorrect");
      },
    });
  return { login: r, isLoading: a };
}
function RA() {
  return _.jsx("div", {
    className: "spinner-container",
    children: _.jsx("div", { className: "spinner" }),
  });
}
function OA() {
  D.useEffect(
    () => (
      document.body.classList.add("login-body"),
      () => {
        document.body.classList.remove("login-body");
      }
    ),
    []
  );
  const [n, r] = D.useState("amrit"),
    [a, s] = D.useState("amrit@example.com"),
    [o, u] = D.useState("amrit196"),
    f = Ja(),
    { login: h, isLoading: y } = TA(),
    m = (p) => {
      if ((p.preventDefault(), !n)) return null;
      f(DO(n)),
        !(!a || !o) &&
          (y && console.log("Loading..."), h({ email: a, password: o }));
    };
  return _.jsxs(_.Fragment, {
    children: [
      _.jsxs("header", {
        className: "top-bar2",
        children: [
          _.jsx(Kt, { className: "logo2", to: "/", children: "ShopZone" }),
          _.jsxs("div", {
            className: "header-buttons",
            children: [
              _.jsx(Kt, {
                className: "login-button-1",
                to: "/profile",
                children: "Become a seller",
              }),
              _.jsx("button", { className: "cart-btn-1", children: "🛒 Cart" }),
            ],
          }),
        ],
      }),
      _.jsxs("div", {
        className: "login-container",
        children: [
          _.jsx("h2", { children: "ShopZone" }),
          _.jsxs("form", {
            onSubmit: m,
            children: [
              _.jsxs("div", {
                className: "form-group",
                children: [
                  _.jsx("label", { children: "Email" }),
                  _.jsx("input", {
                    type: "email",
                    placeholder: "Enter your email",
                    value: a,
                    onChange: (p) => s(p.target.value),
                    disabled: y,
                    required: !0,
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "form-group",
                children: [
                  _.jsx("label", { children: "Password" }),
                  _.jsx("input", {
                    type: "password",
                    placeholder: "Enter your password",
                    value: o,
                    onChange: (p) => u(p.target.value),
                    disabled: y,
                    required: !0,
                  }),
                ],
              }),
              _.jsx("button", {
                type: "submit",
                disabled: y,
                className: "login-button",
                children: y ? _.jsx(RA, {}) : "login",
              }),
            ],
          }),
          _.jsxs("div", {
            className: "footer-text",
            children: [
              "Don't have an account? ",
              _.jsx(Kt, { to: "/signup", children: "Sign up" }),
            ],
          }),
        ],
      }),
    ],
  });
}
const AA = [
    { _id: 1, name: "Badminton", price: 2e3 },
    { _id: 2, name: "Samsung Galaxy a14 5g", price: 2e4 },
    { _id: 3, name: "Blutooth speaker", price: 1e3 },
    { _id: 4, name: "Tripod", price: 1e3 },
    { _id: 5, name: "Power Bank", price: 8e3 },
    { _id: 6, name: "Scissor", price: 100 },
    { _id: 7, name: "KeyBoard", price: 1e3 },
    { _id: 8, name: "Bag", price: 800 },
  ],
  jA = () =>
    _.jsx("div", {
      style: ho.gridWrapper,
      children: _.jsx("div", {
        style: ho.grid,
        children: AA.map((n) =>
          _.jsxs(
            "div",
            {
              style: ho.productCard,
              children: [
                _.jsx("div", { style: ho.imagePlaceholder }),
                _.jsx("h4", { children: n.name }),
                _.jsxs("p", {
                  style: { color: "green", fontWeight: "bold" },
                  children: ["₹", n.price],
                }),
                _.jsx("button", { style: ho.viewBtn, children: "View" }),
              ],
            },
            n._id
          )
        ),
      }),
    }),
  ho = {
    gridWrapper: { maxHeight: "700px", overflowY: "auto", paddingRight: "5px" },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      gap: "20px",
      padding: "10px",
    },
    productCard: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      minHeight: "260px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    imagePlaceholder: {
      width: "100%",
      height: "150px",
      backgroundColor: "#ddd",
      borderRadius: "6px",
      marginBottom: "12px",
    },
    viewBtn: {
      background: "yellow",
      padding: "8px 16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
  CA = ["Electronics", "Clothing", "Home", "Toys", "Books"],
  DA = ({ seller: n }) =>
    _.jsxs(_.Fragment, {
      children: [
        _.jsxs("header", {
          className: "top-bar2",
          children: [
            _.jsx(Kt, { className: "logo2", to: "/", children: "ShopZone" }),
            _.jsx("div", {
              className: "header-buttons",
              children: _.jsx("button", {
                className: "cart-btn-1",
                children: "🛒 Cart",
              }),
            }),
          ],
        }),
        _.jsxs("div", {
          style: Gr.container,
          children: [
            _.jsxs("div", {
              style: Gr.sidebar,
              children: [
                _.jsxs("div", {
                  style: Gr.profileSection,
                  children: [
                    _.jsx("div", { style: Gr.avatar }),
                    _.jsx("p", {
                      children: (n == null ? void 0 : n.name) || "User Name",
                    }),
                    _.jsxs("p", {
                      children: [
                        "⭐ ",
                        (n == null ? void 0 : n.rating) || "4.5",
                      ],
                    }),
                  ],
                }),
                _.jsxs("div", {
                  style: Gr.sidebarButtons,
                  children: [
                    _.jsx("button", { children: "Edit Profile" }),
                    _.jsx("button", { children: "Orders" }),
                    _.jsx("button", { children: "Add Product" }),
                  ],
                }),
              ],
            }),
            _.jsxs("div", {
              style: Gr.mainContent,
              children: [
                _.jsxs("div", {
                  style: Gr.navbar,
                  children: [
                    CA.map((r, a) =>
                      _.jsx("div", { style: Gr.navItem, children: r }, a)
                    ),
                    _.jsx("div", {
                      style: { marginLeft: "auto", cursor: "pointer" },
                      children: "☰",
                    }),
                  ],
                }),
                _.jsx("div", {
                  style: Gr.scrollableContent,
                  children: _.jsx(jA, {}),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Gr = {
    container: {
      display: "flex",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    sidebar: {
      width: "70vh",
      borderRight: "1px solid #ccc",
      padding: "20px",
      boxSizing: "border-box",
    },
    profileSection: { textAlign: "center", marginBottom: "20px" },
    avatar: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      backgroundColor: "gray",
      margin: "0 auto 10px",
    },
    sidebarButtons: { display: "flex", flexDirection: "column", gap: "10px" },
    mainContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      overflow: "hidden",
    },
    navbar: {
      display: "flex",
      borderBottom: "1px solid #ccc",
      padding: "10px 20px",
      alignItems: "center",
      gap: "15px",
      backgroundColor: "rgb(231 222 222)",
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
    scrollableContent: { flex: 1, overflowY: "auto", overflowX: "hidden" },
    navItem: {
      padding: "6px 12px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };
function F_() {
  const n = hr(),
    [r, a] = D.useState({
      name: "amriti",
      email: "yahoo@com",
      mobile: "123",
      businessName: "individual",
      businessType: "single",
      address: "guwahti",
      pan: "123",
      gst: "123",
      accountHolder: "123",
      accountNumber: "123",
      ifsc: "123",
      categories: [],
      brand: "honda",
      agreement: !1,
    }),
    s = ["Individual", "Sole Proprietor", "Partnership", "Private Ltd."],
    o = ["Electronics", "Clothing", "Home Decor", "Books", "Toys", "All"],
    u = (y) => {
      const { name: m, value: p, type: g, checked: b } = y.target;
      g === "checkbox" && m === "categories"
        ? a((S) => {
            const x = new Set(S.categories);
            return (
              b ? x.add(p) : x.delete(p), { ...S, categories: Array.from(x) }
            );
          })
        : g === "checkbox"
        ? (console.log(b), a({ ...r, [m]: b }))
        : a({ ...r, [m]: p });
    },
    f = (y) => {
      y.preventDefault(),
        console.log("Submitted data:", r),
        n("/sellerprofile", { state: r });
    },
    h = {
      container: {
        maxWidth: 600,
        margin: "1rem auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: 8,
        backgroundColor: "#e1e1eb",
      },
      field: { display: "flex", flexDirection: "column", marginBottom: "1rem" },
      label: { marginBottom: "0.5rem", fontWeight: "bold" },
      input: { padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" },
      checkboxGroup: { display: "flex", flexWrap: "wrap", gap: "0.5rem" },
      checkboxLabel: { display: "flex", alignItems: "center", gap: "0.25rem" },
      button: {
        padding: "0.75rem 1.5rem",
        border: "none",
        borderRadius: 4,
        backgroundColor: "#007BFF",
        color: "#fff",
        cursor: "pointer",
      },
    };
  return _.jsxs("form", {
    style: h.container,
    onSubmit: f,
    children: [
      _.jsx("h2", { children: "Become a Seller" }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "Full Name" }),
          _.jsx("input", {
            style: h.input,
            type: "text",
            name: "name",
            value: r.name,
            onChange: u,
            required: !0,
          }),
        ],
      }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "Email Address" }),
          _.jsx("input", {
            style: h.input,
            type: "email",
            name: "email",
            value: r.email,
            onChange: u,
            required: !0,
          }),
        ],
      }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "Mobile Number" }),
          _.jsx("input", {
            style: h.input,
            type: "tel",
            name: "mobile",
            value: r.mobile,
            onChange: u,
            required: !0,
          }),
        ],
      }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "Business Name" }),
          _.jsx("input", {
            style: h.input,
            type: "text",
            name: "businessName",
            value: r.businessName,
            onChange: u,
            required: !0,
          }),
        ],
      }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "Business Type" }),
          _.jsxs("select", {
            style: h.input,
            name: "businessType",
            value: r.businessType,
            onChange: u,
            required: !0,
            children: [
              _.jsx("option", { value: "", children: "Select Type" }),
              s.map((y) => _.jsx("option", { value: y, children: y }, y)),
            ],
          }),
        ],
      }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "Address" }),
          _.jsx("textarea", {
            style: h.input,
            name: "address",
            value: r.address,
            onChange: u,
            rows: 3,
            required: !0,
          }),
        ],
      }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "PAN Number" }),
          _.jsx("input", {
            style: h.input,
            type: "text",
            name: "pan",
            value: r.pan,
            onChange: u,
            required: !0,
          }),
        ],
      }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "Bank Account Holder" }),
          _.jsx("input", {
            style: h.input,
            type: "text",
            name: "accountHolder",
            value: r.accountHolder,
            onChange: u,
            required: !0,
          }),
        ],
      }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "Account Number" }),
          _.jsx("input", {
            style: h.input,
            type: "text",
            name: "accountNumber",
            value: r.accountNumber,
            onChange: u,
            required: !0,
          }),
        ],
      }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "IFSC Code" }),
          _.jsx("input", {
            style: h.input,
            type: "text",
            name: "ifsc",
            value: r.ifsc,
            onChange: u,
            required: !0,
          }),
        ],
      }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "Product Categories" }),
          _.jsx("div", {
            style: h.checkboxGroup,
            children: o.map((y) =>
              _.jsxs(
                "label",
                {
                  style: h.checkboxLabel,
                  children: [
                    _.jsx("input", {
                      type: "checkbox",
                      name: "categories",
                      value: y,
                      checked: r.categories.includes(y),
                      onChange: u,
                    }),
                    y,
                  ],
                },
                y
              )
            ),
          }),
        ],
      }),
      _.jsxs("div", {
        style: h.field,
        children: [
          _.jsx("label", { style: h.label, children: "Brand (optional)" }),
          _.jsx("input", {
            style: h.input,
            type: "text",
            name: "brand",
            value: r.brand,
            onChange: u,
          }),
        ],
      }),
      _.jsxs("div", {
        style: { ...h.field, flexDirection: "row", alignItems: "center" },
        children: [
          _.jsx("input", {
            type: "checkbox",
            name: "agreement",
            checked: r.agreement,
            onChange: u,
            required: !0,
          }),
          _.jsx("label", {
            style: { marginLeft: 8 },
            children: "I agree to the Terms & Conditions",
          }),
        ],
      }),
      _.jsx("button", {
        style: h.button,
        type: "submit",
        disabled: !r.agreement,
        children: "Register as Seller",
      }),
    ],
  });
}
function MA({ onCreateProfile: n }) {
  const r = hr();
  return _.jsx("div", {
    className: "containerStyle",
    children: _.jsxs("div", {
      className: "cardStyle",
      children: [
        _.jsx("div", { className: "iconStyle", children: "👤" }),
        _.jsx("h2", {
          style: { margin: "0 0 0.5rem" },
          children: "Welcome Seller",
        }),
        _.jsx("p", {
          style: { marginBottom: "1rem", color: "#666" },
          children:
            "Build your business with us. Create your seller profile to get started.",
        }),
        _.jsx("button", {
          onClick: n,
          className: "buttonStyle",
          children: "Create Profile",
        }),
        _.jsx("div", {
          children: _.jsx("button", {
            className: "buttonStyle",
            onClick: () => r("/seller/Login"),
            children: "LogIn",
          }),
        }),
      ],
    }),
  });
}
function NA() {
  const [n, r] = D.useState(!1),
    a = Xn((o) => o.user.username),
    s = Xn((o) => o.search.searchName);
  return (
    console.log(s),
    Ja(),
    _.jsxs(_.Fragment, {
      children: [
        _.jsxs("header", {
          className: "top-bar2",
          children: [
            _.jsx(Kt, { className: "logo2", to: "/", children: "ShopZone" }),
            _.jsxs("div", {
              className: "header-buttons",
              children: [
                _.jsxs("div", {
                  style: { display: "flex" },
                  children: [
                    _.jsx("div", {
                      style: { paddingTop: "3px" },
                      children: _.jsx(Yc, { size: 25, color: "#555" }),
                    }),
                    _.jsx(Kc, { username: a }),
                  ],
                }),
                _.jsx("button", {
                  className: "cart-btn-1",
                  children: "🛒 Cart",
                }),
              ],
            }),
          ],
        }),
        n ? _.jsx(F_, {}) : _.jsx(MA, { onCreateProfile: () => r(!0) }),
      ],
    })
  );
}
var Fo = (n) => n.type === "checkbox",
  Di = (n) => n instanceof Date,
  on = (n) => n == null;
const G_ = (n) => typeof n == "object";
var Ot = (n) => !on(n) && !Array.isArray(n) && G_(n) && !Di(n),
  UA = (n) =>
    Ot(n) && n.target ? (Fo(n.target) ? n.target.checked : n.target.value) : n,
  kA = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
  zA = (n, r) => n.has(kA(r)),
  LA = (n) => {
    const r = n.constructor && n.constructor.prototype;
    return Ot(r) && r.hasOwnProperty("isPrototypeOf");
  },
  Ly =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Jt(n) {
  let r;
  const a = Array.isArray(n),
    s = typeof FileList < "u" ? n instanceof FileList : !1;
  if (n instanceof Date) r = new Date(n);
  else if (n instanceof Set) r = new Set(n);
  else if (!(Ly && (n instanceof Blob || s)) && (a || Ot(n)))
    if (((r = a ? [] : {}), !a && !LA(n))) r = n;
    else for (const o in n) n.hasOwnProperty(o) && (r[o] = Jt(n[o]));
  else return n;
  return r;
}
var Ic = (n) => /^\w*$/.test(n),
  Ct = (n) => n === void 0,
  By = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
  qy = (n) => By(n.replace(/["|']|\]/g, "").split(/\.|\[/)),
  ge = (n, r, a) => {
    if (!r || !Ot(n)) return a;
    const s = (Ic(r) ? [r] : qy(r)).reduce((o, u) => (on(o) ? o : o[u]), n);
    return Ct(s) || s === n ? (Ct(n[r]) ? a : n[r]) : s;
  },
  _r = (n) => typeof n == "boolean",
  mt = (n, r, a) => {
    let s = -1;
    const o = Ic(r) ? [r] : qy(r),
      u = o.length,
      f = u - 1;
    for (; ++s < u; ) {
      const h = o[s];
      let y = a;
      if (s !== f) {
        const m = n[h];
        y = Ot(m) || Array.isArray(m) ? m : isNaN(+o[s + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      (n[h] = y), (n = n[h]);
    }
  };
const K0 = { BLUR: "blur", FOCUS_OUT: "focusout" },
  cr = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Qr = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  BA = Vt.createContext(null);
BA.displayName = "HookFormContext";
var qA = (n, r, a, s = !0) => {
  const o = { defaultValues: r._defaultValues };
  for (const u in n)
    Object.defineProperty(o, u, {
      get: () => {
        const f = u;
        return (
          r._proxyFormState[f] !== cr.all &&
            (r._proxyFormState[f] = !s || cr.all),
          n[f]
        );
      },
    });
  return o;
};
const HA = typeof window < "u" ? D.useLayoutEffect : D.useEffect;
var Er = (n) => typeof n == "string",
  PA = (n, r, a, s, o) =>
    Er(n)
      ? (s && r.watch.add(n), ge(a, n, o))
      : Array.isArray(n)
      ? n.map((u) => (s && r.watch.add(u), ge(a, u)))
      : (s && (r.watchAll = !0), a),
  $A = (n, r, a, s, o) =>
    r
      ? {
          ...a[n],
          types: { ...(a[n] && a[n].types ? a[n].types : {}), [s]: o || !0 },
        }
      : {},
  To = (n) => (Array.isArray(n) ? n : [n]),
  X0 = () => {
    let n = [];
    return {
      get observers() {
        return n;
      },
      next: (o) => {
        for (const u of n) u.next && u.next(o);
      },
      subscribe: (o) => (
        n.push(o),
        {
          unsubscribe: () => {
            n = n.filter((u) => u !== o);
          },
        }
      ),
      unsubscribe: () => {
        n = [];
      },
    };
  },
  cy = (n) => on(n) || !G_(n);
function za(n, r) {
  if (cy(n) || cy(r)) return n === r;
  if (Di(n) && Di(r)) return n.getTime() === r.getTime();
  const a = Object.keys(n),
    s = Object.keys(r);
  if (a.length !== s.length) return !1;
  for (const o of a) {
    const u = n[o];
    if (!s.includes(o)) return !1;
    if (o !== "ref") {
      const f = r[o];
      if (
        (Di(u) && Di(f)) ||
        (Ot(u) && Ot(f)) ||
        (Array.isArray(u) && Array.isArray(f))
          ? !za(u, f)
          : u !== f
      )
        return !1;
    }
  }
  return !0;
}
var Sn = (n) => Ot(n) && !Object.keys(n).length,
  Hy = (n) => n.type === "file",
  fr = (n) => typeof n == "function",
  Lc = (n) => {
    if (!Ly) return !1;
    const r = n ? n.ownerDocument : 0;
    return (
      n instanceof
      (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement)
    );
  },
  Q_ = (n) => n.type === "select-multiple",
  Py = (n) => n.type === "radio",
  VA = (n) => Py(n) || Fo(n),
  Ah = (n) => Lc(n) && n.isConnected;
function FA(n, r) {
  const a = r.slice(0, -1).length;
  let s = 0;
  for (; s < a; ) n = Ct(n) ? s++ : n[r[s++]];
  return n;
}
function GA(n) {
  for (const r in n) if (n.hasOwnProperty(r) && !Ct(n[r])) return !1;
  return !0;
}
function zt(n, r) {
  const a = Array.isArray(r) ? r : Ic(r) ? [r] : qy(r),
    s = a.length === 1 ? n : FA(n, a),
    o = a.length - 1,
    u = a[o];
  return (
    s && delete s[u],
    o !== 0 &&
      ((Ot(s) && Sn(s)) || (Array.isArray(s) && GA(s))) &&
      zt(n, a.slice(0, -1)),
    n
  );
}
var Y_ = (n) => {
  for (const r in n) if (fr(n[r])) return !0;
  return !1;
};
function Bc(n, r = {}) {
  const a = Array.isArray(n);
  if (Ot(n) || a)
    for (const s in n)
      Array.isArray(n[s]) || (Ot(n[s]) && !Y_(n[s]))
        ? ((r[s] = Array.isArray(n[s]) ? [] : {}), Bc(n[s], r[s]))
        : on(n[s]) || (r[s] = !0);
  return r;
}
function K_(n, r, a) {
  const s = Array.isArray(n);
  if (Ot(n) || s)
    for (const o in n)
      Array.isArray(n[o]) || (Ot(n[o]) && !Y_(n[o]))
        ? Ct(r) || cy(a[o])
          ? (a[o] = Array.isArray(n[o]) ? Bc(n[o], []) : { ...Bc(n[o]) })
          : K_(n[o], on(r) ? {} : r[o], a[o])
        : (a[o] = !za(n[o], r[o]));
  return a;
}
var yo = (n, r) => K_(n, r, Bc(r));
const Z0 = { value: !1, isValid: !1 },
  I0 = { value: !0, isValid: !0 };
var X_ = (n) => {
    if (Array.isArray(n)) {
      if (n.length > 1) {
        const r = n
          .filter((a) => a && a.checked && !a.disabled)
          .map((a) => a.value);
        return { value: r, isValid: !!r.length };
      }
      return n[0].checked && !n[0].disabled
        ? n[0].attributes && !Ct(n[0].attributes.value)
          ? Ct(n[0].value) || n[0].value === ""
            ? I0
            : { value: n[0].value, isValid: !0 }
          : I0
        : Z0;
    }
    return Z0;
  },
  Z_ = (n, { valueAsNumber: r, valueAsDate: a, setValueAs: s }) =>
    Ct(n)
      ? n
      : r
      ? n === ""
        ? NaN
        : n && +n
      : a && Er(n)
      ? new Date(n)
      : s
      ? s(n)
      : n;
const J0 = { isValid: !1, value: null };
var I_ = (n) =>
  Array.isArray(n)
    ? n.reduce(
        (r, a) =>
          a && a.checked && !a.disabled ? { isValid: !0, value: a.value } : r,
        J0
      )
    : J0;
function W0(n) {
  const r = n.ref;
  return Hy(r)
    ? r.files
    : Py(r)
    ? I_(n.refs).value
    : Q_(r)
    ? [...r.selectedOptions].map(({ value: a }) => a)
    : Fo(r)
    ? X_(n.refs).value
    : Z_(Ct(r.value) ? n.ref.value : r.value, n);
}
var QA = (n, r, a, s) => {
    const o = {};
    for (const u of n) {
      const f = ge(r, u);
      f && mt(o, u, f._f);
    }
    return {
      criteriaMode: a,
      names: [...n],
      fields: o,
      shouldUseNativeValidation: s,
    };
  },
  qc = (n) => n instanceof RegExp,
  mo = (n) =>
    Ct(n)
      ? n
      : qc(n)
      ? n.source
      : Ot(n)
      ? qc(n.value)
        ? n.value.source
        : n.value
      : n,
  eb = (n) => ({
    isOnSubmit: !n || n === cr.onSubmit,
    isOnBlur: n === cr.onBlur,
    isOnChange: n === cr.onChange,
    isOnAll: n === cr.all,
    isOnTouch: n === cr.onTouched,
  });
const tb = "AsyncFunction";
var YA = (n) =>
    !!n &&
    !!n.validate &&
    !!(
      (fr(n.validate) && n.validate.constructor.name === tb) ||
      (Ot(n.validate) &&
        Object.values(n.validate).find((r) => r.constructor.name === tb))
    ),
  KA = (n) =>
    n.mount &&
    (n.required ||
      n.min ||
      n.max ||
      n.maxLength ||
      n.minLength ||
      n.pattern ||
      n.validate),
  nb = (n, r, a) =>
    !a &&
    (r.watchAll ||
      r.watch.has(n) ||
      [...r.watch].some(
        (s) => n.startsWith(s) && /^\.\w+/.test(n.slice(s.length))
      ));
const Ro = (n, r, a, s) => {
  for (const o of a || Object.keys(n)) {
    const u = ge(n, o);
    if (u) {
      const { _f: f, ...h } = u;
      if (f) {
        if (f.refs && f.refs[0] && r(f.refs[0], o) && !s) return !0;
        if (f.ref && r(f.ref, f.name) && !s) return !0;
        if (Ro(h, r)) break;
      } else if (Ot(h) && Ro(h, r)) break;
    }
  }
};
function rb(n, r, a) {
  const s = ge(n, a);
  if (s || Ic(a)) return { error: s, name: a };
  const o = a.split(".");
  for (; o.length; ) {
    const u = o.join("."),
      f = ge(r, u),
      h = ge(n, u);
    if (f && !Array.isArray(f) && a !== u) return { name: a };
    if (h && h.type) return { name: u, error: h };
    if (h && h.root && h.root.type) return { name: `${u}.root`, error: h.root };
    o.pop();
  }
  return { name: a };
}
var XA = (n, r, a, s) => {
    a(n);
    const { name: o, ...u } = n;
    return (
      Sn(u) ||
      Object.keys(u).length >= Object.keys(r).length ||
      Object.keys(u).find((f) => r[f] === (!s || cr.all))
    );
  },
  ZA = (n, r, a) =>
    !n ||
    !r ||
    n === r ||
    To(n).some((s) => s && (a ? s === r : s.startsWith(r) || r.startsWith(s))),
  IA = (n, r, a, s, o) =>
    o.isOnAll
      ? !1
      : !a && o.isOnTouch
      ? !(r || n)
      : (a ? s.isOnBlur : o.isOnBlur)
      ? !n
      : (a ? s.isOnChange : o.isOnChange)
      ? n
      : !0,
  JA = (n, r) => !By(ge(n, r)).length && zt(n, r),
  WA = (n, r, a) => {
    const s = To(ge(n, a));
    return mt(s, "root", r[a]), mt(n, a, s), n;
  },
  _c = (n) => Er(n);
function ab(n, r, a = "validate") {
  if (_c(n) || (Array.isArray(n) && n.every(_c)) || (_r(n) && !n))
    return { type: a, message: _c(n) ? n : "", ref: r };
}
var qs = (n) => (Ot(n) && !qc(n) ? n : { value: n, message: "" }),
  ib = async (n, r, a, s, o, u) => {
    const {
        ref: f,
        refs: h,
        required: y,
        maxLength: m,
        minLength: p,
        min: g,
        max: b,
        pattern: S,
        validate: x,
        name: N,
        valueAsNumber: C,
        mount: U,
      } = n._f,
      Y = ge(a, N);
    if (!U || r.has(N)) return {};
    const z = h ? h[0] : f,
      Q = (he) => {
        o &&
          z.reportValidity &&
          (z.setCustomValidity(_r(he) ? "" : he || ""), z.reportValidity());
      },
      P = {},
      j = Py(f),
      ie = Fo(f),
      ue = j || ie,
      te =
        ((C || Hy(f)) && Ct(f.value) && Ct(Y)) ||
        (Lc(f) && f.value === "") ||
        Y === "" ||
        (Array.isArray(Y) && !Y.length),
      be = $A.bind(null, N, s, P),
      Le = (he, Ne, _e, Re = Qr.maxLength, q = Qr.minLength) => {
        const ee = he ? Ne : _e;
        P[N] = {
          type: he ? Re : q,
          message: ee,
          ref: f,
          ...be(he ? Re : q, ee),
        };
      };
    if (
      u
        ? !Array.isArray(Y) || !Y.length
        : y &&
          ((!ue && (te || on(Y))) ||
            (_r(Y) && !Y) ||
            (ie && !X_(h).isValid) ||
            (j && !I_(h).isValid))
    ) {
      const { value: he, message: Ne } = _c(y)
        ? { value: !!y, message: y }
        : qs(y);
      if (
        he &&
        ((P[N] = {
          type: Qr.required,
          message: Ne,
          ref: z,
          ...be(Qr.required, Ne),
        }),
        !s)
      )
        return Q(Ne), P;
    }
    if (!te && (!on(g) || !on(b))) {
      let he, Ne;
      const _e = qs(b),
        Re = qs(g);
      if (!on(Y) && !isNaN(Y)) {
        const q = f.valueAsNumber || (Y && +Y);
        on(_e.value) || (he = q > _e.value),
          on(Re.value) || (Ne = q < Re.value);
      } else {
        const q = f.valueAsDate || new Date(Y),
          ee = (T) => new Date(new Date().toDateString() + " " + T),
          ce = f.type == "time",
          De = f.type == "week";
        Er(_e.value) &&
          Y &&
          (he = ce
            ? ee(Y) > ee(_e.value)
            : De
            ? Y > _e.value
            : q > new Date(_e.value)),
          Er(Re.value) &&
            Y &&
            (Ne = ce
              ? ee(Y) < ee(Re.value)
              : De
              ? Y < Re.value
              : q < new Date(Re.value));
      }
      if ((he || Ne) && (Le(!!he, _e.message, Re.message, Qr.max, Qr.min), !s))
        return Q(P[N].message), P;
    }
    if ((m || p) && !te && (Er(Y) || (u && Array.isArray(Y)))) {
      const he = qs(m),
        Ne = qs(p),
        _e = !on(he.value) && Y.length > +he.value,
        Re = !on(Ne.value) && Y.length < +Ne.value;
      if ((_e || Re) && (Le(_e, he.message, Ne.message), !s))
        return Q(P[N].message), P;
    }
    if (S && !te && Er(Y)) {
      const { value: he, message: Ne } = qs(S);
      if (
        qc(he) &&
        !Y.match(he) &&
        ((P[N] = {
          type: Qr.pattern,
          message: Ne,
          ref: f,
          ...be(Qr.pattern, Ne),
        }),
        !s)
      )
        return Q(Ne), P;
    }
    if (x) {
      if (fr(x)) {
        const he = await x(Y, a),
          Ne = ab(he, z);
        if (Ne && ((P[N] = { ...Ne, ...be(Qr.validate, Ne.message) }), !s))
          return Q(Ne.message), P;
      } else if (Ot(x)) {
        let he = {};
        for (const Ne in x) {
          if (!Sn(he) && !s) break;
          const _e = ab(await x[Ne](Y, a), z, Ne);
          _e &&
            ((he = { ..._e, ...be(Ne, _e.message) }),
            Q(_e.message),
            s && (P[N] = he));
        }
        if (!Sn(he) && ((P[N] = { ref: z, ...he }), !s)) return P;
      }
    }
    return Q(!0), P;
  };
const ej = {
  mode: cr.onSubmit,
  reValidateMode: cr.onChange,
  shouldFocusError: !0,
};
function tj(n = {}) {
  let r = { ...ej, ...n },
    a = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: fr(r.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: r.errors || {},
      disabled: r.disabled || !1,
    };
  const s = {};
  let o =
      Ot(r.defaultValues) || Ot(r.values)
        ? Jt(r.defaultValues || r.values) || {}
        : {},
    u = r.shouldUnregister ? {} : Jt(o),
    f = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    y,
    m = 0;
  const p = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let g = { ...p };
  const b = { array: X0(), state: X0() },
    S = r.criteriaMode === cr.all,
    x = (O) => ($) => {
      clearTimeout(m), (m = setTimeout(O, $));
    },
    N = async (O) => {
      if (!r.disabled && (p.isValid || g.isValid || O)) {
        const $ = r.resolver ? Sn((await ie()).errors) : await te(s, !0);
        $ !== a.isValid && b.state.next({ isValid: $ });
      }
    },
    C = (O, $) => {
      !r.disabled &&
        (p.isValidating ||
          p.validatingFields ||
          g.isValidating ||
          g.validatingFields) &&
        ((O || Array.from(h.mount)).forEach((K) => {
          K && ($ ? mt(a.validatingFields, K, $) : zt(a.validatingFields, K));
        }),
        b.state.next({
          validatingFields: a.validatingFields,
          isValidating: !Sn(a.validatingFields),
        }));
    },
    U = (O, $ = [], K, oe, le = !0, re = !0) => {
      if (oe && K && !r.disabled) {
        if (((f.action = !0), re && Array.isArray(ge(s, O)))) {
          const fe = K(ge(s, O), oe.argA, oe.argB);
          le && mt(s, O, fe);
        }
        if (re && Array.isArray(ge(a.errors, O))) {
          const fe = K(ge(a.errors, O), oe.argA, oe.argB);
          le && mt(a.errors, O, fe), JA(a.errors, O);
        }
        if (
          (p.touchedFields || g.touchedFields) &&
          re &&
          Array.isArray(ge(a.touchedFields, O))
        ) {
          const fe = K(ge(a.touchedFields, O), oe.argA, oe.argB);
          le && mt(a.touchedFields, O, fe);
        }
        (p.dirtyFields || g.dirtyFields) && (a.dirtyFields = yo(o, u)),
          b.state.next({
            name: O,
            isDirty: Le(O, $),
            dirtyFields: a.dirtyFields,
            errors: a.errors,
            isValid: a.isValid,
          });
      } else mt(u, O, $);
    },
    Y = (O, $) => {
      mt(a.errors, O, $), b.state.next({ errors: a.errors });
    },
    z = (O) => {
      (a.errors = O), b.state.next({ errors: a.errors, isValid: !1 });
    },
    Q = (O, $, K, oe) => {
      const le = ge(s, O);
      if (le) {
        const re = ge(u, O, Ct(K) ? ge(o, O) : K);
        Ct(re) || (oe && oe.defaultChecked) || $
          ? mt(u, O, $ ? re : W0(le._f))
          : _e(O, re),
          f.mount && N();
      }
    },
    P = (O, $, K, oe, le) => {
      let re = !1,
        fe = !1;
      const Oe = { name: O };
      if (!r.disabled) {
        if (!K || oe) {
          (p.isDirty || g.isDirty) &&
            ((fe = a.isDirty),
            (a.isDirty = Oe.isDirty = Le()),
            (re = fe !== Oe.isDirty));
          const Ve = za(ge(o, O), $);
          (fe = !!ge(a.dirtyFields, O)),
            Ve ? zt(a.dirtyFields, O) : mt(a.dirtyFields, O, !0),
            (Oe.dirtyFields = a.dirtyFields),
            (re = re || ((p.dirtyFields || g.dirtyFields) && fe !== !Ve));
        }
        if (K) {
          const Ve = ge(a.touchedFields, O);
          Ve ||
            (mt(a.touchedFields, O, K),
            (Oe.touchedFields = a.touchedFields),
            (re = re || ((p.touchedFields || g.touchedFields) && Ve !== K)));
        }
        re && le && b.state.next(Oe);
      }
      return re ? Oe : {};
    },
    j = (O, $, K, oe) => {
      const le = ge(a.errors, O),
        re = (p.isValid || g.isValid) && _r($) && a.isValid !== $;
      if (
        (r.delayError && K
          ? ((y = x(() => Y(O, K))), y(r.delayError))
          : (clearTimeout(m),
            (y = null),
            K ? mt(a.errors, O, K) : zt(a.errors, O)),
        (K ? !za(le, K) : le) || !Sn(oe) || re)
      ) {
        const fe = {
          ...oe,
          ...(re && _r($) ? { isValid: $ } : {}),
          errors: a.errors,
          name: O,
        };
        (a = { ...a, ...fe }), b.state.next(fe);
      }
    },
    ie = async (O) => {
      C(O, !0);
      const $ = await r.resolver(
        u,
        r.context,
        QA(O || h.mount, s, r.criteriaMode, r.shouldUseNativeValidation)
      );
      return C(O), $;
    },
    ue = async (O) => {
      const { errors: $ } = await ie(O);
      if (O)
        for (const K of O) {
          const oe = ge($, K);
          oe ? mt(a.errors, K, oe) : zt(a.errors, K);
        }
      else a.errors = $;
      return $;
    },
    te = async (O, $, K = { valid: !0 }) => {
      for (const oe in O) {
        const le = O[oe];
        if (le) {
          const { _f: re, ...fe } = le;
          if (re) {
            const Oe = h.array.has(re.name),
              Ve = le._f && YA(le._f);
            Ve && p.validatingFields && C([oe], !0);
            const rt = await ib(
              le,
              h.disabled,
              u,
              S,
              r.shouldUseNativeValidation && !$,
              Oe
            );
            if (
              (Ve && p.validatingFields && C([oe]),
              rt[re.name] && ((K.valid = !1), $))
            )
              break;
            !$ &&
              (ge(rt, re.name)
                ? Oe
                  ? WA(a.errors, rt, re.name)
                  : mt(a.errors, re.name, rt[re.name])
                : zt(a.errors, re.name));
          }
          !Sn(fe) && (await te(fe, $, K));
        }
      }
      return K.valid;
    },
    be = () => {
      for (const O of h.unMount) {
        const $ = ge(s, O);
        $ &&
          ($._f.refs ? $._f.refs.every((K) => !Ah(K)) : !Ah($._f.ref)) &&
          Mt(O);
      }
      h.unMount = new Set();
    },
    Le = (O, $) => !r.disabled && (O && $ && mt(u, O, $), !za(T(), o)),
    he = (O, $, K) =>
      PA(O, h, { ...(f.mount ? u : Ct($) ? o : Er(O) ? { [O]: $ } : $) }, K, $),
    Ne = (O) =>
      By(ge(f.mount ? u : o, O, r.shouldUnregister ? ge(o, O, []) : [])),
    _e = (O, $, K = {}) => {
      const oe = ge(s, O);
      let le = $;
      if (oe) {
        const re = oe._f;
        re &&
          (!re.disabled && mt(u, O, Z_($, re)),
          (le = Lc(re.ref) && on($) ? "" : $),
          Q_(re.ref)
            ? [...re.ref.options].forEach(
                (fe) => (fe.selected = le.includes(fe.value))
              )
            : re.refs
            ? Fo(re.ref)
              ? re.refs.forEach((fe) => {
                  (!fe.defaultChecked || !fe.disabled) &&
                    (Array.isArray(le)
                      ? (fe.checked = !!le.find((Oe) => Oe === fe.value))
                      : (fe.checked = le === fe.value || !!le));
                })
              : re.refs.forEach((fe) => (fe.checked = fe.value === le))
            : Hy(re.ref)
            ? (re.ref.value = "")
            : ((re.ref.value = le),
              re.ref.type || b.state.next({ name: O, values: Jt(u) })));
      }
      (K.shouldDirty || K.shouldTouch) &&
        P(O, le, K.shouldTouch, K.shouldDirty, !0),
        K.shouldValidate && De(O);
    },
    Re = (O, $, K) => {
      for (const oe in $) {
        if (!$.hasOwnProperty(oe)) return;
        const le = $[oe],
          re = O + "." + oe,
          fe = ge(s, re);
        (h.array.has(O) || Ot(le) || (fe && !fe._f)) && !Di(le)
          ? Re(re, le, K)
          : _e(re, le, K);
      }
    },
    q = (O, $, K = {}) => {
      const oe = ge(s, O),
        le = h.array.has(O),
        re = Jt($);
      mt(u, O, re),
        le
          ? (b.array.next({ name: O, values: Jt(u) }),
            (p.isDirty || p.dirtyFields || g.isDirty || g.dirtyFields) &&
              K.shouldDirty &&
              b.state.next({
                name: O,
                dirtyFields: yo(o, u),
                isDirty: Le(O, re),
              }))
          : oe && !oe._f && !on(re)
          ? Re(O, re, K)
          : _e(O, re, K),
        nb(O, h) && b.state.next({ ...a }),
        b.state.next({ name: f.mount ? O : void 0, values: Jt(u) });
    },
    ee = async (O) => {
      f.mount = !0;
      const $ = O.target;
      let K = $.name,
        oe = !0;
      const le = ge(s, K),
        re = (Ve) => {
          oe =
            Number.isNaN(Ve) ||
            (Di(Ve) && isNaN(Ve.getTime())) ||
            za(Ve, ge(u, K, Ve));
        },
        fe = eb(r.mode),
        Oe = eb(r.reValidateMode);
      if (le) {
        let Ve, rt;
        const na = $.type ? W0(le._f) : UA(O),
          Nt = O.type === K0.BLUR || O.type === K0.FOCUS_OUT,
          Ki =
            (!KA(le._f) && !r.resolver && !ge(a.errors, K) && !le._f.deps) ||
            IA(Nt, ge(a.touchedFields, K), a.isSubmitted, Oe, fe),
          Zn = nb(K, h, Nt);
        mt(u, K, na),
          Nt
            ? (le._f.onBlur && le._f.onBlur(O), y && y(0))
            : le._f.onChange && le._f.onChange(O);
        const In = P(K, na, Nt),
          Jn = !Sn(In) || Zn;
        if ((!Nt && b.state.next({ name: K, type: O.type, values: Jt(u) }), Ki))
          return (
            (p.isValid || g.isValid) &&
              (r.mode === "onBlur" ? Nt && N() : Nt || N()),
            Jn && b.state.next({ name: K, ...(Zn ? {} : In) })
          );
        if ((!Nt && Zn && b.state.next({ ...a }), r.resolver)) {
          const { errors: yr } = await ie([K]);
          if ((re(na), oe)) {
            const kn = rb(a.errors, s, K),
              ri = rb(yr, s, kn.name || K);
            (Ve = ri.error), (K = ri.name), (rt = Sn(yr));
          }
        } else
          C([K], !0),
            (Ve = (await ib(le, h.disabled, u, S, r.shouldUseNativeValidation))[
              K
            ]),
            C([K]),
            re(na),
            oe &&
              (Ve
                ? (rt = !1)
                : (p.isValid || g.isValid) && (rt = await te(s, !0)));
        oe && (le._f.deps && De(le._f.deps), j(K, rt, Ve, In));
      }
    },
    ce = (O, $) => {
      if (ge(a.errors, $) && O.focus) return O.focus(), 1;
    },
    De = async (O, $ = {}) => {
      let K, oe;
      const le = To(O);
      if (r.resolver) {
        const re = await ue(Ct(O) ? O : le);
        (K = Sn(re)), (oe = O ? !le.some((fe) => ge(re, fe)) : K);
      } else
        O
          ? ((oe = (
              await Promise.all(
                le.map(async (re) => {
                  const fe = ge(s, re);
                  return await te(fe && fe._f ? { [re]: fe } : fe);
                })
              )
            ).every(Boolean)),
            !(!oe && !a.isValid) && N())
          : (oe = K = await te(s));
      return (
        b.state.next({
          ...(!Er(O) || ((p.isValid || g.isValid) && K !== a.isValid)
            ? {}
            : { name: O }),
          ...(r.resolver || !O ? { isValid: K } : {}),
          errors: a.errors,
        }),
        $.shouldFocus && !oe && Ro(s, ce, O ? le : h.mount),
        oe
      );
    },
    T = (O) => {
      const $ = { ...(f.mount ? u : o) };
      return Ct(O) ? $ : Er(O) ? ge($, O) : O.map((K) => ge($, K));
    },
    Z = (O, $) => ({
      invalid: !!ge(($ || a).errors, O),
      isDirty: !!ge(($ || a).dirtyFields, O),
      error: ge(($ || a).errors, O),
      isValidating: !!ge(a.validatingFields, O),
      isTouched: !!ge(($ || a).touchedFields, O),
    }),
    se = (O) => {
      O && To(O).forEach(($) => zt(a.errors, $)),
        b.state.next({ errors: O ? a.errors : {} });
    },
    ne = (O, $, K) => {
      const oe = (ge(s, O, { _f: {} })._f || {}).ref,
        le = ge(a.errors, O) || {},
        { ref: re, message: fe, type: Oe, ...Ve } = le;
      mt(a.errors, O, { ...Ve, ...$, ref: oe }),
        b.state.next({ name: O, errors: a.errors, isValid: !1 }),
        K && K.shouldFocus && oe && oe.focus && oe.focus();
    },
    ve = (O, $) =>
      fr(O)
        ? b.state.subscribe({ next: (K) => O(he(void 0, $), K) })
        : he(O, $, !0),
    He = (O) =>
      b.state.subscribe({
        next: ($) => {
          ZA(O.name, $.name, O.exact) &&
            XA($, O.formState || p, en, O.reRenderRoot) &&
            O.callback({ values: { ...u }, ...a, ...$ });
        },
      }).unsubscribe,
    Te = (O) => (
      (f.mount = !0), (g = { ...g, ...O.formState }), He({ ...O, formState: g })
    ),
    Mt = (O, $ = {}) => {
      for (const K of O ? To(O) : h.mount)
        h.mount.delete(K),
          h.array.delete(K),
          $.keepValue || (zt(s, K), zt(u, K)),
          !$.keepError && zt(a.errors, K),
          !$.keepDirty && zt(a.dirtyFields, K),
          !$.keepTouched && zt(a.touchedFields, K),
          !$.keepIsValidating && zt(a.validatingFields, K),
          !r.shouldUnregister && !$.keepDefaultValue && zt(o, K);
      b.state.next({ values: Jt(u) }),
        b.state.next({ ...a, ...($.keepDirty ? { isDirty: Le() } : {}) }),
        !$.keepIsValid && N();
    },
    it = ({ disabled: O, name: $ }) => {
      ((_r(O) && f.mount) || O || h.disabled.has($)) &&
        (O ? h.disabled.add($) : h.disabled.delete($));
    },
    cn = (O, $ = {}) => {
      let K = ge(s, O);
      const oe = _r($.disabled) || _r(r.disabled);
      return (
        mt(s, O, {
          ...(K || {}),
          _f: {
            ...(K && K._f ? K._f : { ref: { name: O } }),
            name: O,
            mount: !0,
            ...$,
          },
        }),
        h.mount.add(O),
        K
          ? it({ disabled: _r($.disabled) ? $.disabled : r.disabled, name: O })
          : Q(O, !0, $.value),
        {
          ...(oe ? { disabled: $.disabled || r.disabled } : {}),
          ...(r.progressive
            ? {
                required: !!$.required,
                min: mo($.min),
                max: mo($.max),
                minLength: mo($.minLength),
                maxLength: mo($.maxLength),
                pattern: mo($.pattern),
              }
            : {}),
          name: O,
          onChange: ee,
          onBlur: ee,
          ref: (le) => {
            if (le) {
              cn(O, $), (K = ge(s, O));
              const re =
                  (Ct(le.value) &&
                    le.querySelectorAll &&
                    le.querySelectorAll("input,select,textarea")[0]) ||
                  le,
                fe = VA(re),
                Oe = K._f.refs || [];
              if (fe ? Oe.find((Ve) => Ve === re) : re === K._f.ref) return;
              mt(s, O, {
                _f: {
                  ...K._f,
                  ...(fe
                    ? {
                        refs: [
                          ...Oe.filter(Ah),
                          re,
                          ...(Array.isArray(ge(o, O)) ? [{}] : []),
                        ],
                        ref: { type: re.type, name: O },
                      }
                    : { ref: re }),
                },
              }),
                Q(O, !1, void 0, re);
            } else
              (K = ge(s, O, {})),
                K._f && (K._f.mount = !1),
                (r.shouldUnregister || $.shouldUnregister) &&
                  !(zA(h.array, O) && f.action) &&
                  h.unMount.add(O);
          },
        }
      );
    },
    gt = () => r.shouldFocusError && Ro(s, ce, h.mount),
    xn = (O) => {
      _r(O) &&
        (b.state.next({ disabled: O }),
        Ro(
          s,
          ($, K) => {
            const oe = ge(s, K);
            oe &&
              (($.disabled = oe._f.disabled || O),
              Array.isArray(oe._f.refs) &&
                oe._f.refs.forEach((le) => {
                  le.disabled = oe._f.disabled || O;
                }));
          },
          0,
          !1
        ));
    },
    Ar = (O, $) => async (K) => {
      let oe;
      K && (K.preventDefault && K.preventDefault(), K.persist && K.persist());
      let le = Jt(u);
      if ((b.state.next({ isSubmitting: !0 }), r.resolver)) {
        const { errors: re, values: fe } = await ie();
        (a.errors = re), (le = fe);
      } else await te(s);
      if (h.disabled.size) for (const re of h.disabled) mt(le, re, void 0);
      if ((zt(a.errors, "root"), Sn(a.errors))) {
        b.state.next({ errors: {} });
        try {
          await O(le, K);
        } catch (re) {
          oe = re;
        }
      } else $ && (await $({ ...a.errors }, K)), gt(), setTimeout(gt);
      if (
        (b.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Sn(a.errors) && !oe,
          submitCount: a.submitCount + 1,
          errors: a.errors,
        }),
        oe)
      )
        throw oe;
    },
    ti = (O, $ = {}) => {
      ge(s, O) &&
        (Ct($.defaultValue)
          ? q(O, Jt(ge(o, O)))
          : (q(O, $.defaultValue), mt(o, O, Jt($.defaultValue))),
        $.keepTouched || zt(a.touchedFields, O),
        $.keepDirty ||
          (zt(a.dirtyFields, O),
          (a.isDirty = $.defaultValue ? Le(O, Jt(ge(o, O))) : Le())),
        $.keepError || (zt(a.errors, O), p.isValid && N()),
        b.state.next({ ...a }));
    },
    fn = (O, $ = {}) => {
      const K = O ? Jt(O) : o,
        oe = Jt(K),
        le = Sn(O),
        re = le ? o : oe;
      if (($.keepDefaultValues || (o = K), !$.keepValues)) {
        if ($.keepDirtyValues) {
          const fe = new Set([...h.mount, ...Object.keys(yo(o, u))]);
          for (const Oe of Array.from(fe))
            ge(a.dirtyFields, Oe) ? mt(re, Oe, ge(u, Oe)) : q(Oe, ge(re, Oe));
        } else {
          if (Ly && Ct(O))
            for (const fe of h.mount) {
              const Oe = ge(s, fe);
              if (Oe && Oe._f) {
                const Ve = Array.isArray(Oe._f.refs)
                  ? Oe._f.refs[0]
                  : Oe._f.ref;
                if (Lc(Ve)) {
                  const rt = Ve.closest("form");
                  if (rt) {
                    rt.reset();
                    break;
                  }
                }
              }
            }
          for (const fe of h.mount) q(fe, ge(re, fe));
        }
        (u = Jt(re)),
          b.array.next({ values: { ...re } }),
          b.state.next({ values: { ...re } });
      }
      (h = {
        mount: $.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (f.mount = !p.isValid || !!$.keepIsValid || !!$.keepDirtyValues),
        (f.watch = !!r.shouldUnregister),
        b.state.next({
          submitCount: $.keepSubmitCount ? a.submitCount : 0,
          isDirty: le
            ? !1
            : $.keepDirty
            ? a.isDirty
            : !!($.keepDefaultValues && !za(O, o)),
          isSubmitted: $.keepIsSubmitted ? a.isSubmitted : !1,
          dirtyFields: le
            ? {}
            : $.keepDirtyValues
            ? $.keepDefaultValues && u
              ? yo(o, u)
              : a.dirtyFields
            : $.keepDefaultValues && O
            ? yo(o, O)
            : $.keepDirty
            ? a.dirtyFields
            : {},
          touchedFields: $.keepTouched ? a.touchedFields : {},
          errors: $.keepErrors ? a.errors : {},
          isSubmitSuccessful: $.keepIsSubmitSuccessful
            ? a.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Yi = (O, $) => fn(fr(O) ? O(u) : O, $),
    ll = (O, $ = {}) => {
      const K = ge(s, O),
        oe = K && K._f;
      if (oe) {
        const le = oe.refs ? oe.refs[0] : oe.ref;
        le.focus &&
          (le.focus(), $.shouldSelect && fr(le.select) && le.select());
      }
    },
    en = (O) => {
      a = { ...a, ...O };
    },
    ni = {
      control: {
        register: cn,
        unregister: Mt,
        getFieldState: Z,
        handleSubmit: Ar,
        setError: ne,
        _subscribe: He,
        _runSchema: ie,
        _focusError: gt,
        _getWatch: he,
        _getDirty: Le,
        _setValid: N,
        _setFieldArray: U,
        _setDisabledField: it,
        _setErrors: z,
        _getFieldArray: Ne,
        _reset: fn,
        _resetDefaultValues: () =>
          fr(r.defaultValues) &&
          r.defaultValues().then((O) => {
            Yi(O, r.resetOptions), b.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: be,
        _disableForm: xn,
        _subjects: b,
        _proxyFormState: p,
        get _fields() {
          return s;
        },
        get _formValues() {
          return u;
        },
        get _state() {
          return f;
        },
        set _state(O) {
          f = O;
        },
        get _defaultValues() {
          return o;
        },
        get _names() {
          return h;
        },
        set _names(O) {
          h = O;
        },
        get _formState() {
          return a;
        },
        get _options() {
          return r;
        },
        set _options(O) {
          r = { ...r, ...O };
        },
      },
      subscribe: Te,
      trigger: De,
      register: cn,
      handleSubmit: Ar,
      watch: ve,
      setValue: q,
      getValues: T,
      reset: Yi,
      resetField: ti,
      clearErrors: se,
      unregister: Mt,
      setError: ne,
      setFocus: ll,
      getFieldState: Z,
    };
  return { ...ni, formControl: ni };
}
function nj(n = {}) {
  const r = Vt.useRef(void 0),
    a = Vt.useRef(void 0),
    [s, o] = Vt.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: fr(n.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
      isReady: !1,
      defaultValues: fr(n.defaultValues) ? void 0 : n.defaultValues,
    });
  if (!r.current)
    if (n.formControl)
      (r.current = { ...n.formControl, formState: s }),
        n.defaultValues &&
          !fr(n.defaultValues) &&
          n.formControl.reset(n.defaultValues, n.resetOptions);
    else {
      const { formControl: f, ...h } = tj(n);
      r.current = { ...h, formState: s };
    }
  const u = r.current.control;
  return (
    (u._options = n),
    HA(() => {
      const f = u._subscribe({
        formState: u._proxyFormState,
        callback: () => o({ ...u._formState }),
        reRenderRoot: !0,
      });
      return o((h) => ({ ...h, isReady: !0 })), (u._formState.isReady = !0), f;
    }, [u]),
    Vt.useEffect(() => u._disableForm(n.disabled), [u, n.disabled]),
    Vt.useEffect(() => {
      n.mode && (u._options.mode = n.mode),
        n.reValidateMode && (u._options.reValidateMode = n.reValidateMode);
    }, [u, n.mode, n.reValidateMode]),
    Vt.useEffect(() => {
      n.errors && (u._setErrors(n.errors), u._focusError());
    }, [u, n.errors]),
    Vt.useEffect(() => {
      n.shouldUnregister && u._subjects.state.next({ values: u._getWatch() });
    }, [u, n.shouldUnregister]),
    Vt.useEffect(() => {
      if (u._proxyFormState.isDirty) {
        const f = u._getDirty();
        f !== s.isDirty && u._subjects.state.next({ isDirty: f });
      }
    }, [u, s.isDirty]),
    Vt.useEffect(() => {
      n.values && !za(n.values, a.current)
        ? (u._reset(n.values, u._options.resetOptions),
          (a.current = n.values),
          o((f) => ({ ...f })))
        : u._resetDefaultValues();
    }, [u, n.values]),
    Vt.useEffect(() => {
      u._state.mount || (u._setValid(), (u._state.mount = !0)),
        u._state.watch &&
          ((u._state.watch = !1), u._subjects.state.next({ ...u._formState })),
        u._removeUnmounted();
    }),
    (r.current.formState = qA(s, u)),
    r.current
  );
}
function rj() {
  const {
      register: n,
      formState: r,
      getValues: a,
      handleSubmit: s,
      reset: o,
    } = nj(),
    { errors: u } = r,
    f = hr();
  Xn((y) => y.user);
  function h(y) {
    const {
      signup_fullname: m,
      signup_phone_number: p,
      signup_email: g,
      signup_password: b,
      signup_passwordConfirm: S,
    } = y;
  }
  return _.jsx("div", {
    className: "signup-container",
    children: _.jsxs("form", {
      className: "signup-form",
      onSubmit: s(h),
      autoComplete: "off",
      children: [
        _.jsx("h2", { children: "Sign Up" }),
        _.jsxs("div", {
          children: [
            _.jsx("label", { children: "Full Name" }),
            _.jsx("input", {
              type: "text",
              id: "fullname",
              autoComplete: "off",
              ...n("signup_fullname", { required: "This field is required" }),
            }),
            u.signup_fullname &&
              _.jsx("p", {
                className: "error",
                children: u.signup_fullname.message,
              }),
          ],
        }),
        _.jsxs("div", {
          children: [
            _.jsx("label", { children: "Phone Number" }),
            _.jsx("input", {
              type: "number",
              id: "phone_number",
              autoComplete: "off",
              ...n("signup_phone_number", {
                required: "This field is required",
              }),
            }),
            u.signup_phoneNumber &&
              _.jsx("p", {
                className: "error",
                children: u.signup_phone_number.message,
              }),
          ],
        }),
        _.jsxs("div", {
          children: [
            _.jsx("label", { htmlFor: "email", children: "Email Address" }),
            _.jsx("input", {
              id: "email",
              type: "email",
              autoComplete: "off",
              ...n("signup_email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please enter a valid email address",
                },
              }),
            }),
            u.signup_email &&
              _.jsx("p", {
                className: "error",
                children: u.signup_email.message,
              }),
          ],
        }),
        _.jsxs("div", {
          children: [
            _.jsx("label", { htmlFor: "password", children: "Password" }),
            _.jsx("input", {
              id: "password",
              type: "password",
              autoComplete: "new-password",
              ...n("signup_password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              }),
            }),
            u.signup_password &&
              _.jsx("p", {
                className: "error",
                children: u.signup_password.message,
              }),
          ],
        }),
        _.jsxs("div", {
          children: [
            _.jsx("label", {
              htmlFor: "passwordConfirm",
              children: "Confirm Password",
            }),
            _.jsx("input", {
              id: "passwordConfirm",
              type: "password",
              autoComplete: "new-password",
              ...n("signup_passwordConfirm", {
                required: "This field is required",
                validate: (y) =>
                  y === a().signup_password || "Passwords do not match",
              }),
            }),
            u.signup_passwordConfirm &&
              _.jsx("p", {
                className: "error",
                children: u.signup_passwordConfirm.message,
              }),
          ],
        }),
        _.jsxs("div", {
          style: { display: "flex", gap: "15px" },
          children: [
            _.jsx("button", {
              type: "reset",
              onClick: () => f("/login"),
              children: "Cancel",
            }),
            _.jsx("button", { type: "submit", children: "Create New" }),
          ],
        }),
      ],
    }),
  });
}
const aj = ({ item: n }) => {
  const {
      name: r,
      images: a,
      _id: s,
      seller: o,
      description: u,
      price: f,
      createdAt: h,
    } = n,
    y = Xn((x) => x.user.isAuthenticate),
    [m, p] = D.useState(!1),
    g = hr();
  function b() {
    g(`/${s}`, {
      state: {
        itemName: r,
        images: a,
        seller: o,
        description: u,
        createdAt: h,
        _id: s,
      },
    });
  }
  function S() {
    y ? g(`/borrow/${s}`, { state: a }) : g("/login");
  }
  return _.jsxs("div", {
    className: "profile-card2",
    children: [
      _.jsx("img", { src: a, alt: "Product", className: "profile-img2" }),
      _.jsxs("div", {
        className: "profile-info2",
        children: [
          _.jsxs("div", {
            children: [
              _.jsx("div", { className: "item-title", children: r }),
              _.jsxs("div", {
                className: "profile-name2",
                children: [
                  _.jsx(Yc, { size: 14 }),
                  _.jsxs("span", {
                    className: "seller-id",
                    children: [o.slice(0, 16), "..."],
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "profile-items2",
                children: ["Description: ", u.slice(0, 100)],
              }),
              _.jsx("div", {
                className: "created-at",
                children: new Date(h).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
              }),
              _.jsxs("div", {
                className: "price",
                children: ["Rs: ", _.jsx("span", { children: f })],
              }),
            ],
          }),
          _.jsxs("div", {
            className: "profile-buttons",
            children: [
              _.jsx("button", {
                className: "colorbrw",
                onClick: b,
                children: "More",
              }),
              _.jsx("button", {
                className: "borrow",
                onClick: S,
                children: "Borrow",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
function ij({ card: n }) {
  return Array(n)
    .fill(0)
    .map((r, a) =>
      _.jsxs(
        "div",
        {
          className: "card-skeleton",
          children: [
            _.jsx("div", { className: "skeleton-left" }),
            _.jsxs("div", {
              className: "skeleton-right",
              children: [
                _.jsx("div", { className: "skeleton-line name" }),
                _.jsx("div", { className: "skeleton-line desc" }),
                _.jsx("div", { className: "skeleton-line location" }),
                _.jsx("div", { className: "skeleton-line title" }),
                _.jsxs("div", {
                  className: "skeleton-buttons",
                  children: [
                    _.jsx("div", { className: "skeleton-button" }),
                    _.jsx("div", { className: "skeleton-button" }),
                  ],
                }),
              ],
            }),
          ],
        },
        a
      )
    );
}
function sj() {
  return new URLSearchParams(dr().search);
}
function lj() {
  var y;
  const n = Ja(),
    r = Xn((m) => m.user.username),
    s = sj().get("name"),
    { data: o, isLoading: u } = AO(s),
    f = ((y = o == null ? void 0 : o.data) == null ? void 0 : y.products) || [];
  function h(m) {
    m.preventDefault(), n(Za(m.target.value));
  }
  return _.jsxs(_.Fragment, {
    children: [
      _.jsxs("header", {
        className: "top-bar2",
        children: [
          _.jsx(Kt, {
            className: "logo2",
            to: "/",
            onClick: () => n(Za("")),
            children: "ShopZone",
          }),
          _.jsxs("div", {
            className: "search-container",
            children: [
              _.jsx("input", { type: "text", onChange: h, value: s }),
              _.jsx("button", { className: "search-button", children: "🔍" }),
            ],
          }),
          _.jsx(Kt, {
            className: "login-button-1",
            to: "/profile",
            children: "Become a seller",
          }),
          _.jsx(Kc, { username: r }),
        ],
      }),
      _.jsxs("nav", {
        className: "nav-bar2",
        children: [
          _.jsx("button", { className: "nav-all2", children: "= All" }),
          Dy.map((m) => _.jsx(Cy, { item: m }, m.length)),
        ],
      }),
      _.jsx(b_, {}),
      _.jsx("main", {
        className: "grid-container2",
        children: u
          ? _.jsx(ij, { card: 9 }, 9)
          : f.map((m) => _.jsx(aj, { item: m }, m._id)),
      }),
    ],
  });
}
function oj({
  images: n,
  SellerName: r,
  description: a,
  Location: s,
  itemName: o,
  id: u,
}) {
  const f = hr(),
    h = Xn((x) => x.user.isAuthenticate),
    [y, m] = D.useState(!1);
  function p() {
    h ? f(`/borrow/${u}`, { state: n }) : f("/login");
  }
  function g() {
    f(`/profile/${r}/${u}`, { state: r });
  }
  function b() {
    m(!0);
  }
  function S() {
    m(!1);
  }
  return (
    D.useEffect(() => {
      const x = (N) => {
        N.key === "Escape" && m(!1);
      };
      return (
        window.addEventListener("keydown", x),
        () => window.removeEventListener("keydown", x)
      );
    }, []),
    _.jsxs("div", {
      style: wt.page,
      children: [
        _.jsxs("div", {
          style: wt.container,
          children: [
            _.jsxs("div", {
              style: wt.imageSection,
              children: [
                _.jsx("img", {
                  src: n,
                  alt: "Product",
                  style: wt.image,
                  onClick: b,
                }),
                _.jsxs("div", {
                  style: wt.actions,
                  children: [
                    _.jsx("button", {
                      style: wt.btnCart,
                      children: "Add to Cart",
                    }),
                    _.jsx("button", {
                      style: wt.btnBorrow,
                      onClick: p,
                      children: "Borrow",
                    }),
                  ],
                }),
                _.jsxs("div", {
                  style: wt.about,
                  children: [
                    _.jsx("strong", { children: "About Product:" }),
                    _.jsx("br", {}),
                    a,
                  ],
                }),
              ],
            }),
            _.jsxs("div", {
              style: wt.sellerCard,
              children: [
                _.jsx("div", {
                  style: wt.profileBtn,
                  onClick: g,
                  children: "Profile",
                }),
                _.jsx("img", {
                  src: "https://randomuser.me/api/portraits/women/44.jpg",
                  alt: "Seller",
                  style: wt.profileImg,
                }),
                _.jsx("h2", { style: wt.name, children: r }),
                _.jsx("p", {
                  style: wt.desc,
                  children:
                    "I sell beautiful handmade crafts, kitchenware, and home accessories.",
                }),
                _.jsx("p", { style: wt.location, children: s }),
                _.jsxs("p", {
                  style: wt.rating,
                  children: [
                    "⭐ ",
                    _.jsx("span", { style: wt.star, children: "4.7" }),
                    " ",
                    _.jsx("span", {
                      style: wt.reviews,
                      children: "(128 reviews)",
                    }),
                  ],
                }),
                _.jsx("p", {
                  style: wt.contact,
                  children: "Email: jane@example.com",
                }),
                _.jsx("p", {
                  style: wt.contact,
                  children: "Phone: +91 98765 43210",
                }),
              ],
            }),
          ],
        }),
        y &&
          _.jsx("div", {
            style: wt.modalOverlay,
            onClick: S,
            children: _.jsxs("div", {
              style: wt.modalContent,
              onClick: (x) => x.stopPropagation(),
              children: [
                _.jsx("button", {
                  style: wt.closeButton,
                  onClick: S,
                  children: "×",
                }),
                _.jsx("img", { src: n, alt: "Zoomed", style: wt.modalImage }),
              ],
            }),
          }),
      ],
    })
  );
}
const wt = {
  page: {
    padding: "20px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    gap: "30px",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    maxWidth: "900px",
    margin: "0 auto",
    alignItems: "flex-start",
  },
  imageSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "0 0 340px",
  },
  image: {
    width: "340px",
    height: "300px",
    borderRadius: "8px",
    objectFit: "contain",
    backgroundColor: "#eee",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
  actions: {
    marginTop: "16px",
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  },
  btnCart: {
    padding: "10px 24px",
    fontSize: "14px",
    backgroundColor: "#f5a400",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  btnBorrow: {
    padding: "10px 24px",
    fontSize: "14px",
    backgroundColor: "#f5a400",
    color: "black",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  about: {
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
    padding: "15px 20px",
    borderRadius: "8px",
    width: "100%",
    textAlign: "left",
    fontSize: "14px",
    color: "#333",
    boxShadow: "0 0 4px rgba(0, 0, 0, 0.05)",
    lineHeight: "1.5",
    borderLeft: "4px solid #f5a400",
  },
  sellerCard: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "12px",
    position: "relative",
    textAlign: "center",
    maxWidth: "500px",
  },
  profileBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "#7f3fff",
    color: "white",
    padding: "6px 14px",
    fontSize: "12px",
    borderRadius: "20px",
    cursor: "pointer",
  },
  profileImg: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginTop: "10px",
  },
  name: { fontSize: "20px", fontWeight: "600", margin: "10px 0" },
  desc: { fontSize: "14px", color: "#333" },
  location: { fontSize: "13px", color: "#777", marginTop: "8px" },
  rating: { fontSize: "14px", margin: "12px 0" },
  star: { fontWeight: "bold", color: "#ff9500" },
  reviews: { color: "#777", fontWeight: "normal" },
  contact: { fontSize: "14px", color: "#444", margin: "4px 0" },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(2px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modalContent: {
    position: "relative",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)",
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "auto",
  },
  modalImage: {
    maxWidth: "100%",
    maxHeight: "80vh",
    objectFit: "contain",
    borderRadius: "10px",
    display: "block",
    margin: "0 auto",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "white",
    border: "none",
    fontSize: "20px",
    color: "#333",
    cursor: "pointer",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
    lineHeight: "32px",
    textAlign: "center",
  },
};
function uj() {
  const n = dr(),
    r = Ja(),
    a = Xn((p) => p.search.searchName),
    s = Xn((p) => p.user.username),
    {
      itemName: o,
      images: u,
      SellerName: f,
      description: h,
      Location: y,
      id: m,
    } = n.state;
  return _.jsxs(_.Fragment, {
    children: [
      _.jsxs("header", {
        className: "top-bar2",
        children: [
          _.jsx(Kt, {
            className: "logo2",
            to: "/",
            onClick: () => r(Za("")),
            children: "ShopeZone",
          }),
          _.jsxs("div", {
            className: "search-container",
            children: [
              _.jsx("input", {
                type: "text",
                value: a,
                onChange: (p) => r(Za(p.target.value)),
              }),
              _.jsx("button", { className: "search-button", children: "🔍" }),
            ],
          }),
          _.jsxs("div", {
            className: "account2",
            children: ["Hello,", s, _.jsx("br", {})],
          }),
        ],
      }),
      _.jsxs("nav", {
        className: "nav-bar2",
        children: [
          _.jsx("button", { className: "nav-all2", children: "= All" }),
          Dy.map((p) => _.jsx(Cy, { item: p }, p.length)),
        ],
      }),
      _.jsx(oj, {
        images: u,
        SellerName: f,
        description: h,
        Location: y,
        itemName: o,
        id: m,
      }),
    ],
  });
}
function cj() {
  const [n, r] = D.useState({
      fullName: "",
      userId: "",
      email: "",
      phoneNumber: "",
      organization: "",
      itemName: "",
      itemId: "",
      category: "",
      borrowDate: "",
      returnDate: "",
      purpose: "",
      agreeTerms: !1,
    }),
    a = hr(),
    o = dr().state,
    u = (h) => {
      const { name: y, value: m, type: p, checked: g } = h.target;
      r({ ...n, [y]: p === "checkbox" ? g : m });
    },
    f = (h) => {
      h.preventDefault(), console.log("Borrow Request Submitted:", n);
    };
  return _.jsxs(_.Fragment, {
    children: [
      _.jsxs("header", {
        className: "top-bar2",
        style: bn.header,
        children: [
          _.jsx(Kt, {
            className: "logo2",
            to: "/",
            style: bn.logo,
            children: "ShopeZone",
          }),
          _.jsxs("div", {
            className: "search-container",
            children: [
              _.jsx("input", { type: "text" }),
              _.jsx("button", { className: "search-button", children: "🔍" }),
            ],
          }),
          _.jsx("div", { className: "account2", children: "Hello" }),
        ],
      }),
      _.jsxs("form", {
        style: bn.flexWrapper,
        onSubmit: f,
        children: [
          _.jsx("div", {
            style: bn.imageContainer,
            children: _.jsx("img", {
              src: o,
              alt: "Product",
              style: bn.productImage,
            }),
          }),
          _.jsxs("div", {
            style: bn.formContainer,
            children: [
              _.jsx("h2", {
                style: bn.heading,
                children: "Borrow Item Request",
              }),
              [
                { label: "Full Name", name: "fullName", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone Number", name: "phoneNumber", type: "tel" },
                { label: "Item Name", name: "itemName", type: "text" },
                { label: "Borrow Date", name: "borrowDate", type: "date" },
                {
                  label: "Expected Return Date",
                  name: "returnDate",
                  type: "date",
                },
              ].map(({ label: h, name: y, type: m }) =>
                _.jsxs(
                  "div",
                  {
                    children: [
                      _.jsx("label", { style: bn.label, children: h }),
                      _.jsx("input", {
                        style: bn.input,
                        type: m,
                        name: y,
                        value: n[y],
                        onChange: u,
                        required: !0,
                      }),
                    ],
                  },
                  y
                )
              ),
              _.jsx("label", {
                style: bn.label,
                children: "Purpose of Borrowing",
              }),
              _.jsx("textarea", {
                style: { ...bn.input, resize: "vertical", height: "60px" },
                name: "purpose",
                rows: "3",
                value: n.purpose,
                onChange: u,
                placeholder: "Describe purpose (optional)",
              }),
              _.jsxs("div", {
                style: bn.checkboxContainer,
                children: [
                  _.jsx("input", {
                    type: "checkbox",
                    name: "agreeTerms",
                    checked: n.agreeTerms,
                    onChange: u,
                    required: !0,
                  }),
                  _.jsx("label", {
                    style: { fontSize: "13px" },
                    children: "I agree to the terms and conditions",
                  }),
                ],
              }),
              _.jsxs("div", {
                style: { display: "flex", gap: "12px" },
                children: [
                  _.jsx("button", {
                    type: "button",
                    onClick: () => a(-1),
                    style: bn.button,
                    children: "Cancel",
                  }),
                  _.jsx("button", {
                    type: "submit",
                    style: bn.button,
                    children: "Submit Request",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const bn = {
  header: {
    backgroundColor: "#192734",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
  },
  flexWrapper: {
    display: "flex",
    width: "95%",
    maxWidth: "1100px",
    margin: "20px auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
  },
  imageContainer: {
    width: "30%",
    backgroundColor: "#f1f1f1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
  },
  productImage: { width: "100%", maxWidth: "230px", borderRadius: "6px" },
  formContainer: { width: "70%", padding: "20px 25px" },
  heading: { textAlign: "center", fontSize: "20px", marginBottom: "16px" },
  label: {
    display: "block",
    marginBottom: "4px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
    gap: "8px",
  },
  button: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "14px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
function fj(n) {
  return Po({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(n);
}
function dj(n) {
  return Po({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(n);
}
function hj(n) {
  return Po({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(n);
}
function yj(n) {
  return Po({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
        },
        child: [],
      },
    ],
  })(n);
}
function mj() {
  const [n, r] = D.useState(),
    a = [
      {
        id: 1,
        name: "Electric Kettle",
        price: "₹1499",
        image: "https://source.unsplash.com/200x200/?kettle",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "₹2999",
        image: "https://source.unsplash.com/200x200/?smartwatch",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
      {
        id: 2,
        name: "LED Desk Lamp",
        price: "₹899",
        image: "https://source.unsplash.com/200x200/?lamp",
      },
    ],
    [s, o] = D.useState({
      fullName: "",
      userId: "",
      email: "",
      phoneNumber: "",
      organization: "",
      itemName: "",
      itemId: "",
      category: "",
      borrowDate: "",
      returnDate: "",
      purpose: "",
      agreeTerms: !1,
    }),
    u = Xn((h) => h.user.username),
    f = Xn((h) => h.search.searchName);
  return (
    console.log(f),
    Ja(),
    _.jsx(_.Fragment, {
      children: _.jsxs("div", {
        className: "visit-page",
        children: [
          _.jsxs("header", {
            className: "top-bar2",
            children: [
              _.jsx(Kt, { className: "logo2", to: "/", children: "ShopZone" }),
              _.jsxs("div", {
                className: "header-buttons",
                children: [
                  _.jsx(Kt, {
                    className: "login-button-1",
                    to: "/profile",
                    children: "Become a seller",
                  }),
                  _.jsxs("div", {
                    style: { display: "flex" },
                    children: [
                      _.jsx("div", {
                        style: { paddingTop: "3px" },
                        children: _.jsx(Yc, { size: 25, color: "#555" }),
                      }),
                      _.jsx(Kc, { username: u }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          _.jsxs("div", {
            className: "visit-main-content",
            children: [
              _.jsxs("div", {
                className: "visit-profile-card",
                children: [
                  _.jsx("img", {
                    src: "https://randomuser.me/api/portraits/women/44.jpg",
                    alt: "Profile",
                    className: "visit-profile-img",
                  }),
                  _.jsx("h2", { children: "Jane Doe" }),
                  _.jsx("p", {
                    children:
                      "I sell beautiful handmade crafts, kitchenware, and home accessories.",
                  }),
                  _.jsx("p", {
                    className: "visit-location",
                    children: "Guwahati Amingaon Kalipahar jayguru",
                  }),
                  _.jsxs("p", {
                    className: "visit-rating",
                    children: [
                      "⭐ 4.7 ",
                      _.jsx("span", { children: "(128 reviews)" }),
                    ],
                  }),
                  _.jsxs("p", {
                    children: [
                      _.jsx("strong", { children: "Email:" }),
                      " jane@example.com",
                    ],
                  }),
                  _.jsxs("p", {
                    children: [
                      _.jsx("strong", { children: "Phone:" }),
                      " +91 98765 43210",
                    ],
                  }),
                  _.jsx("div", {
                    children: _.jsx("div", {
                      className: "visit-social-icons",
                      children: _.jsxs("div", {
                        style: { display: "flex", gap: "18px" },
                        children: [
                          _.jsx(dj, {}),
                          _.jsx(fj, {}),
                          _.jsx(yj, {}),
                          _.jsx(hj, {}),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "visit-product-section",
                children: [
                  _.jsx("div", {
                    className: "visit-section-header",
                    children: "Products",
                  }),
                  _.jsx("div", {
                    className: "visit-product-grid",
                    children: a.map((h) =>
                      _.jsxs(
                        "div",
                        {
                          className: "visit-product-card",
                          children: [
                            _.jsx("img", { src: h.image, alt: h.name }),
                            _.jsx("h4", { children: h.name }),
                            _.jsx("p", {
                              className: "price",
                              children: h.price,
                            }),
                            _.jsx("button", { children: "View Product" }),
                          ],
                        },
                        h.id
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function pj() {
  const [n, r] = D.useState(!1);
  function a() {
    r((s) => !s);
  }
  return _.jsxs(_.Fragment, {
    children: [
      _.jsxs("header", {
        className: "top-bar2",
        children: [
          _.jsx(Kt, { className: "logo2", to: "/", children: "ShopZone" }),
          _.jsx("div", {
            className: "header-buttons",
            children: _.jsx("button", {
              className: "cart-btn-1",
              children: "🛒 Cart",
            }),
          }),
        ],
      }),
      n
        ? _.jsx(F_, {})
        : _.jsxs("div", {
            style: vj,
            children: [
              _.jsxs("div", {
                style: gj,
                children: [
                  _.jsx("h2", {
                    style: { marginBottom: "20px" },
                    children: "Login",
                  }),
                  _.jsxs("p", {
                    style: { fontSize: "16px", lineHeight: "1.5" },
                    children: [
                      "Get access to your Orders, ",
                      _.jsx("br", {}),
                      "Wishlist and Recommendations",
                    ],
                  }),
                  _.jsx("div", {
                    style: { marginTop: "40px" },
                    children: _.jsx("img", {
                      src: "https://img.icons8.com/clouds/100/laptop.png",
                      alt: "Visual",
                      style: Ej,
                    }),
                  }),
                ],
              }),
              _.jsxs("div", {
                style: bj,
                children: [
                  _.jsx("input", {
                    type: "text",
                    placeholder: "Enter Email/Mobile number",
                    style: _j,
                  }),
                  _.jsxs("p", {
                    style: wj,
                    children: [
                      "By continuing, you agree to Flipkart's",
                      " ",
                      _.jsx("a", {
                        href: "#",
                        style: jh,
                        children: "Terms of Use",
                      }),
                      " ",
                      "and",
                      " ",
                      _.jsx("a", {
                        href: "#",
                        style: jh,
                        children: "Privacy Policy",
                      }),
                      ".",
                    ],
                  }),
                  _.jsx("button", { style: Sj, children: "Request OTP" }),
                  _.jsx("div", {
                    style: xj,
                    children: _.jsx("p", {
                      style: jh,
                      onClick: a,
                      children: "New to ShopZone? craete an account",
                    }),
                  }),
                ],
              }),
            ],
          }),
    ],
  });
}
const vj = {
    display: "flex",
    fontFamily: "sans-serif",
    height: "100vh",
    margin: "5px",
    backgroundColor: "#f1f3f6",
  },
  gj = {
    width: "35%",
    backgroundColor: "#2874f0",
    color: "white",
    padding: "40px 20px",
    marginLeft: "10%",
  },
  bj = {
    width: "40%",
    backgroundColor: "white",
    padding: "60px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  _j = {
    padding: "10px",
    border: "none",
    borderBottom: "2px solid #2874f0",
    fontSize: "16px",
    marginBottom: "30px",
    outline: "none",
  },
  wj = { fontSize: "13px", marginBottom: "30px" },
  jh = { color: "#2874f0", textDecoration: "underline", cursor: "pointer" },
  Sj = {
    backgroundColor: "#fb641b",
    color: "white",
    padding: "12px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
  },
  xj = { marginTop: "30px", textAlign: "center" },
  Ej = { width: "100px", marginTop: "40px" },
  Tj = uE([
    { path: "/login", element: _.jsx(OA, {}) },
    { path: "/signup", element: _.jsx(rj, {}) },
    { path: "/search", element: _.jsx(lj, {}) },
    { path: "/:id", element: _.jsx(uj, {}) },
    { path: "/seller/Login", element: _.jsx(pj, {}) },
    { path: "/profile", element: _.jsx(NA, {}) },
    { path: "/sellerprofile", element: _.jsx(DA, {}) },
    { path: "borrow/:id", element: _.jsx(cj, {}) },
    { path: "profile/:name/:id", element: _.jsx(mj, {}) },
    {
      element: _.jsx(gT, {}),
      children: [{ index: !0, element: _.jsx(jO, {}) }],
    },
  ]),
  Rj = new BE({ defaultOptions: { queries: { staleTime: 0 } } });
function Oj() {
  return _.jsxs(VE, {
    client: Rj,
    children: [
      _.jsx(a2, { initialIsOpen: !1 }),
      _.jsx(SE, { router: Tj }),
      _.jsx(xA, {
        position: "top-center",
        gutter: 12,
        containerStyle: { margin: "8px" },
        toastOptions: {
          success: { duration: 3e3 },
          error: { duration: 5e3 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        },
      }),
    ],
  });
}
const Aj = {
    sellername: "",
    sellerEmail: "",
    sellerPassword: "",
    sellerPhoneNumber: "",
    sellerAddress1: "",
    sellerAltPhNo: "",
  },
  J_ = jy({
    name: "seller",
    initialState: Aj,
    reducers: {
      updateSellerName(n, r) {
        n.sellername = r.payload;
      },
      updateSellerEmail(n, r) {
        n.sellerEmail = r.payload;
      },
      updateSellerPassword(n, r) {
        n.sellerPassword = r.payload;
      },
      updateSellerPhoneNo(n, r) {
        n.sellerPhoneNumber = r.payload;
      },
      updateSellerAddress1(n, r) {
        n.sellerAddress1 = r.payload;
      },
      updateSellerAltPhNo(n, r) {
        n.sellerAltPhNo = r.payload;
      },
    },
  }),
  {
    updateSellerName: Hj,
    updateSellerEmail: Pj,
    updateSellerPassword: $j,
    updateSellerPhoneNo: Vj,
    updateSellerAddress1: Fj,
    updateSellerAltPhNo: Gj,
  } = J_.actions,
  jj = J_.reducer,
  Cj = K2({ reducer: { user: MO, seller: jj, search: lT } });
h1.createRoot(document.getElementById("root")).render(
  _.jsx(D.StrictMode, {
    children: _.jsx(b2, { store: Cj, children: _.jsx(Oj, {}) }),
  })
);
