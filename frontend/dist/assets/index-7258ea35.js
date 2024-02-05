function gh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function yh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function vh(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var zf = { exports: {} },
  sl = {},
  Nf = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bo = Symbol.for("react.element"),
  xh = Symbol.for("react.portal"),
  wh = Symbol.for("react.fragment"),
  Sh = Symbol.for("react.strict_mode"),
  kh = Symbol.for("react.profiler"),
  Eh = Symbol.for("react.provider"),
  Ch = Symbol.for("react.context"),
  Ph = Symbol.for("react.forward_ref"),
  jh = Symbol.for("react.suspense"),
  zh = Symbol.for("react.memo"),
  Nh = Symbol.for("react.lazy"),
  yc = Symbol.iterator;
function bh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yc && e[yc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rf = Object.assign,
  _f = {};
function Sr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _f),
    (this.updater = n || bf);
}
Sr.prototype.isReactComponent = {};
Sr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Of() {}
Of.prototype = Sr.prototype;
function Xa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _f),
    (this.updater = n || bf);
}
var Qa = (Xa.prototype = new Of());
Qa.constructor = Xa;
Rf(Qa, Sr.prototype);
Qa.isPureReactComponent = !0;
var vc = Array.isArray,
  Tf = Object.prototype.hasOwnProperty,
  qa = { current: null },
  $f = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Tf.call(t, r) && !$f.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: bo,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: qa.current,
  };
}
function Rh(e, t) {
  return {
    $$typeof: bo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ga(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bo;
}
function _h(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xc = /\/+/g;
function is(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _h("" + e.key)
    : t.toString(36);
}
function di(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case bo:
          case xh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + is(l, 0) : r),
      vc(o)
        ? ((n = ""),
          e != null && (n = e.replace(xc, "$&/") + "/"),
          di(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ga(o) &&
            (o = Rh(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(xc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), vc(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + is(i, s);
      l += di(i, t, n, a, o);
    }
  else if (((a = bh(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + is(i, s++)), (l += di(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Wo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    di(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Oh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ie = { current: null },
  fi = { transition: null },
  Th = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: fi,
    ReactCurrentOwner: qa,
  };
L.Children = {
  map: Wo,
  forEach: function (e, t, n) {
    Wo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Wo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Wo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ga(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = Sr;
L.Fragment = wh;
L.Profiler = kh;
L.PureComponent = Xa;
L.StrictMode = Sh;
L.Suspense = jh;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Th;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Rf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = qa.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Tf.call(t, a) &&
        !$f.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: bo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ch,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Eh, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = Mf;
L.createFactory = function (e) {
  var t = Mf.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: Ph, render: e };
};
L.isValidElement = Ga;
L.lazy = function (e) {
  return { $$typeof: Nh, _payload: { _status: -1, _result: e }, _init: Oh };
};
L.memo = function (e, t) {
  return { $$typeof: zh, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = fi.transition;
  fi.transition = {};
  try {
    e();
  } finally {
    fi.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return Ie.current.useCallback(e, t);
};
L.useContext = function (e) {
  return Ie.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return Ie.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return Ie.current.useEffect(e, t);
};
L.useId = function () {
  return Ie.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return Ie.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return Ie.current.useRef(e);
};
L.useState = function (e) {
  return Ie.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return Ie.current.useTransition();
};
L.version = "18.2.0";
Nf.exports = L;
var w = Nf.exports;
const Ue = yh(w),
  Oi = gh({ __proto__: null, default: Ue }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $h = w,
  Mh = Symbol.for("react.element"),
  Ah = Symbol.for("react.fragment"),
  Ih = Object.prototype.hasOwnProperty,
  Lh = $h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Af(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Ih.call(t, r) && !Fh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Mh,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Lh.current,
  };
}
sl.Fragment = Ah;
sl.jsx = Af;
sl.jsxs = Af;
zf.exports = sl;
var c = zf.exports,
  Ds = {},
  If = { exports: {} },
  tt = {},
  Lf = { exports: {} },
  Ff = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, _) {
    var T = N.length;
    N.push(_);
    e: for (; 0 < T; ) {
      var M = (T - 1) >>> 1,
        X = N[M];
      if (0 < o(X, _)) (N[M] = _), (N[T] = X), (T = M);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var _ = N[0],
      T = N.pop();
    if (T !== _) {
      N[0] = T;
      e: for (var M = 0, X = N.length, Xt = X >>> 1; M < Xt; ) {
        var Ee = 2 * (M + 1) - 1,
          ft = N[Ee],
          ae = Ee + 1,
          ce = N[ae];
        if (0 > o(ft, T))
          ae < X && 0 > o(ce, ft)
            ? ((N[M] = ce), (N[ae] = T), (M = ae))
            : ((N[M] = ft), (N[Ee] = T), (M = Ee));
        else if (ae < X && 0 > o(ce, T)) (N[M] = ce), (N[ae] = T), (M = ae);
        else break e;
      }
    }
    return _;
  }
  function o(N, _) {
    var T = N.sortIndex - _.sortIndex;
    return T !== 0 ? T : N.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    m = 3,
    x = !1,
    y = !1,
    g = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= N)
        r(u), (_.sortIndex = _.expirationTime), t(a, _);
      else break;
      _ = n(u);
    }
  }
  function S(N) {
    if (((g = !1), v(N), !y))
      if (n(a) !== null) (y = !0), xe(P);
      else {
        var _ = n(u);
        _ !== null && Fe(S, _.startTime - N);
      }
  }
  function P(N, _) {
    (y = !1), g && ((g = !1), h(b), (b = -1)), (x = !0);
    var T = m;
    try {
      for (
        v(_), p = n(a);
        p !== null && (!(p.expirationTime > _) || (N && !F()));

      ) {
        var M = p.callback;
        if (typeof M == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var X = M(p.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof X == "function" ? (p.callback = X) : p === n(a) && r(a),
            v(_);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Xt = !0;
      else {
        var Ee = n(u);
        Ee !== null && Fe(S, Ee.startTime - _), (Xt = !1);
      }
      return Xt;
    } finally {
      (p = null), (m = T), (x = !1);
    }
  }
  var j = !1,
    C = null,
    b = -1,
    A = 5,
    R = -1;
  function F() {
    return !(e.unstable_now() - R < A);
  }
  function ee() {
    if (C !== null) {
      var N = e.unstable_now();
      R = N;
      var _ = !0;
      try {
        _ = C(!0, N);
      } finally {
        _ ? se() : ((j = !1), (C = null));
      }
    } else j = !1;
  }
  var se;
  if (typeof f == "function")
    se = function () {
      f(ee);
    };
  else if (typeof MessageChannel < "u") {
    var pe = new MessageChannel(),
      me = pe.port2;
    (pe.port1.onmessage = ee),
      (se = function () {
        me.postMessage(null);
      });
  } else
    se = function () {
      k(ee, 0);
    };
  function xe(N) {
    (C = N), j || ((j = !0), se());
  }
  function Fe(N, _) {
    b = k(function () {
      N(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), xe(P));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = m;
      }
      var T = m;
      m = _;
      try {
        return N();
      } finally {
        m = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, _) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var T = m;
      m = N;
      try {
        return _();
      } finally {
        m = T;
      }
    }),
    (e.unstable_scheduleCallback = function (N, _, T) {
      var M = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? M + T : M))
          : (T = M),
        N)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = T + X),
        (N = {
          id: d++,
          callback: _,
          priorityLevel: N,
          startTime: T,
          expirationTime: X,
          sortIndex: -1,
        }),
        T > M
          ? ((N.sortIndex = T),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (g ? (h(b), (b = -1)) : (g = !0), Fe(S, T - M)))
          : ((N.sortIndex = X), t(a, N), y || x || ((y = !0), xe(P))),
        N
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (N) {
      var _ = m;
      return function () {
        var T = m;
        m = _;
        try {
          return N.apply(this, arguments);
        } finally {
          m = T;
        }
      };
    });
})(Ff);
Lf.exports = Ff;
var Dh = Lf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Df = w,
  et = Dh;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Bf = new Set(),
  oo = {};
function Mn(e, t) {
  dr(e, t), dr(e + "Capture", t);
}
function dr(e, t) {
  for (oo[e] = t, e = 0; e < t.length; e++) Bf.add(t[e]);
}
var Dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Bs = Object.prototype.hasOwnProperty,
  Bh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wc = {},
  Sc = {};
function Uh(e) {
  return Bs.call(Sc, e)
    ? !0
    : Bs.call(wc, e)
    ? !1
    : Bh.test(e)
    ? (Sc[e] = !0)
    : ((wc[e] = !0), !1);
}
function Vh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Wh(e, t, n, r) {
  if (t === null || typeof t > "u" || Vh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Le(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Le(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new Le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new Le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new Le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new Le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ya = /[\-:]([a-z])/g;
function Ja(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ya, Ja);
    Ne[t] = new Le(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ya, Ja);
    Ne[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ya, Ja);
  Ne[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Le(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Za(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Wh(t, n, o, r) && (n = null),
    r || o === null
      ? Uh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ht = Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ho = Symbol.for("react.element"),
  Wn = Symbol.for("react.portal"),
  Hn = Symbol.for("react.fragment"),
  eu = Symbol.for("react.strict_mode"),
  Us = Symbol.for("react.profiler"),
  Uf = Symbol.for("react.provider"),
  Vf = Symbol.for("react.context"),
  tu = Symbol.for("react.forward_ref"),
  Vs = Symbol.for("react.suspense"),
  Ws = Symbol.for("react.suspense_list"),
  nu = Symbol.for("react.memo"),
  Yt = Symbol.for("react.lazy"),
  Wf = Symbol.for("react.offscreen"),
  kc = Symbol.iterator;
function br(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kc && e[kc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  ls;
function Br(e) {
  if (ls === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ls = (t && t[1]) || "";
    }
  return (
    `
` +
    ls +
    e
  );
}
var ss = !1;
function as(e, t) {
  if (!e || ss) return "";
  ss = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (ss = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Br(e) : "";
}
function Hh(e) {
  switch (e.tag) {
    case 5:
      return Br(e.type);
    case 16:
      return Br("Lazy");
    case 13:
      return Br("Suspense");
    case 19:
      return Br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = as(e.type, !1)), e;
    case 11:
      return (e = as(e.type.render, !1)), e;
    case 1:
      return (e = as(e.type, !0)), e;
    default:
      return "";
  }
}
function Hs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Hn:
      return "Fragment";
    case Wn:
      return "Portal";
    case Us:
      return "Profiler";
    case eu:
      return "StrictMode";
    case Vs:
      return "Suspense";
    case Ws:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vf:
        return (e.displayName || "Context") + ".Consumer";
      case Uf:
        return (e._context.displayName || "Context") + ".Provider";
      case tu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case nu:
        return (
          (t = e.displayName || null), t !== null ? t : Hs(e.type) || "Memo"
        );
      case Yt:
        (t = e._payload), (e = e._init);
        try {
          return Hs(e(t));
        } catch {}
    }
  return null;
}
function Kh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Hs(t);
    case 8:
      return t === eu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mn(e) {
  switch (typeof e) {
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
function Hf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Xh(e) {
  var t = Hf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ko(e) {
  e._valueTracker || (e._valueTracker = Xh(e));
}
function Kf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Hf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ti(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ks(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ec(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xf(e, t) {
  (t = t.checked), t != null && Za(e, "checked", t, !1);
}
function Xs(e, t) {
  Xf(e, t);
  var n = mn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Qs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Qs(e, t.type, mn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Cc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Qs(e, t, n) {
  (t !== "number" || Ti(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ur = Array.isArray;
function nr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function qs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(z(92));
      if (Ur(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mn(n) };
}
function Qf(e, t) {
  var n = mn(t.value),
    r = mn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function jc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? qf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Xo,
  Gf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Xo = Xo || document.createElement("div"),
          Xo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Xo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function io(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Qh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xr).forEach(function (e) {
  Qh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xr[t] = Xr[e]);
  });
});
function Yf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Xr.hasOwnProperty(e) && Xr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Jf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Yf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var qh = re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ys(e, t) {
  if (t) {
    if (qh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function Js(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Zs = null;
function ru(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ea = null,
  rr = null,
  or = null;
function zc(e) {
  if ((e = Oo(e))) {
    if (typeof ea != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = fl(t)), ea(e.stateNode, e.type, t));
  }
}
function Zf(e) {
  rr ? (or ? or.push(e) : (or = [e])) : (rr = e);
}
function ep() {
  if (rr) {
    var e = rr,
      t = or;
    if (((or = rr = null), zc(e), t)) for (e = 0; e < t.length; e++) zc(t[e]);
  }
}
function tp(e, t) {
  return e(t);
}
function np() {}
var us = !1;
function rp(e, t, n) {
  if (us) return e(t, n);
  us = !0;
  try {
    return tp(e, t, n);
  } finally {
    (us = !1), (rr !== null || or !== null) && (np(), ep());
  }
}
function lo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fl(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var ta = !1;
if (Dt)
  try {
    var Rr = {};
    Object.defineProperty(Rr, "passive", {
      get: function () {
        ta = !0;
      },
    }),
      window.addEventListener("test", Rr, Rr),
      window.removeEventListener("test", Rr, Rr);
  } catch {
    ta = !1;
  }
function Gh(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Qr = !1,
  $i = null,
  Mi = !1,
  na = null,
  Yh = {
    onError: function (e) {
      (Qr = !0), ($i = e);
    },
  };
function Jh(e, t, n, r, o, i, l, s, a) {
  (Qr = !1), ($i = null), Gh.apply(Yh, arguments);
}
function Zh(e, t, n, r, o, i, l, s, a) {
  if ((Jh.apply(this, arguments), Qr)) {
    if (Qr) {
      var u = $i;
      (Qr = !1), ($i = null);
    } else throw Error(z(198));
    Mi || ((Mi = !0), (na = u));
  }
}
function An(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function op(e) {
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
function Nc(e) {
  if (An(e) !== e) throw Error(z(188));
}
function e1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = An(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Nc(o), e;
        if (i === r) return Nc(o), t;
        i = i.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function ip(e) {
  return (e = e1(e)), e !== null ? lp(e) : null;
}
function lp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sp = et.unstable_scheduleCallback,
  bc = et.unstable_cancelCallback,
  t1 = et.unstable_shouldYield,
  n1 = et.unstable_requestPaint,
  ue = et.unstable_now,
  r1 = et.unstable_getCurrentPriorityLevel,
  ou = et.unstable_ImmediatePriority,
  ap = et.unstable_UserBlockingPriority,
  Ai = et.unstable_NormalPriority,
  o1 = et.unstable_LowPriority,
  up = et.unstable_IdlePriority,
  al = null,
  Nt = null;
function i1(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : a1,
  l1 = Math.log,
  s1 = Math.LN2;
function a1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((l1(e) / s1) | 0)) | 0;
}
var Qo = 64,
  qo = 4194304;
function Vr(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ii(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Vr(s)) : ((i &= l), i !== 0 && (r = Vr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Vr(l)) : i !== 0 && (r = Vr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - vt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function u1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function c1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - vt(i),
      s = 1 << l,
      a = o[l];
    a === -1
      ? (!(s & n) || s & r) && (o[l] = u1(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ra(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cp() {
  var e = Qo;
  return (Qo <<= 1), !(Qo & 4194240) && (Qo = 64), e;
}
function cs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ro(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vt(t)),
    (e[t] = n);
}
function d1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - vt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function iu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var H = 0;
function dp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fp,
  lu,
  pp,
  mp,
  hp,
  oa = !1,
  Go = [],
  on = null,
  ln = null,
  sn = null,
  so = new Map(),
  ao = new Map(),
  Zt = [],
  f1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Rc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      so.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ao.delete(t.pointerId);
  }
}
function _r(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Oo(t)), t !== null && lu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function p1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (on = _r(on, e, t, n, r, o)), !0;
    case "dragenter":
      return (ln = _r(ln, e, t, n, r, o)), !0;
    case "mouseover":
      return (sn = _r(sn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return so.set(i, _r(so.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ao.set(i, _r(ao.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function gp(e) {
  var t = kn(e.target);
  if (t !== null) {
    var n = An(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = op(n)), t !== null)) {
          (e.blockedOn = t),
            hp(e.priority, function () {
              pp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function pi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ia(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Zs = r), n.target.dispatchEvent(r), (Zs = null);
    } else return (t = Oo(n)), t !== null && lu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _c(e, t, n) {
  pi(e) && n.delete(t);
}
function m1() {
  (oa = !1),
    on !== null && pi(on) && (on = null),
    ln !== null && pi(ln) && (ln = null),
    sn !== null && pi(sn) && (sn = null),
    so.forEach(_c),
    ao.forEach(_c);
}
function Or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    oa ||
      ((oa = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, m1)));
}
function uo(e) {
  function t(o) {
    return Or(o, e);
  }
  if (0 < Go.length) {
    Or(Go[0], e);
    for (var n = 1; n < Go.length; n++) {
      var r = Go[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    on !== null && Or(on, e),
      ln !== null && Or(ln, e),
      sn !== null && Or(sn, e),
      so.forEach(t),
      ao.forEach(t),
      n = 0;
    n < Zt.length;
    n++
  )
    (r = Zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zt.length && ((n = Zt[0]), n.blockedOn === null); )
    gp(n), n.blockedOn === null && Zt.shift();
}
var ir = Ht.ReactCurrentBatchConfig,
  Li = !0;
function h1(e, t, n, r) {
  var o = H,
    i = ir.transition;
  ir.transition = null;
  try {
    (H = 1), su(e, t, n, r);
  } finally {
    (H = o), (ir.transition = i);
  }
}
function g1(e, t, n, r) {
  var o = H,
    i = ir.transition;
  ir.transition = null;
  try {
    (H = 4), su(e, t, n, r);
  } finally {
    (H = o), (ir.transition = i);
  }
}
function su(e, t, n, r) {
  if (Li) {
    var o = ia(e, t, n, r);
    if (o === null) ws(e, t, r, Fi, n), Rc(e, r);
    else if (p1(o, e, t, n, r)) r.stopPropagation();
    else if ((Rc(e, r), t & 4 && -1 < f1.indexOf(e))) {
      for (; o !== null; ) {
        var i = Oo(o);
        if (
          (i !== null && fp(i),
          (i = ia(e, t, n, r)),
          i === null && ws(e, t, r, Fi, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ws(e, t, r, null, n);
  }
}
var Fi = null;
function ia(e, t, n, r) {
  if (((Fi = null), (e = ru(r)), (e = kn(e)), e !== null))
    if (((t = An(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = op(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fi = e), null;
}
function yp(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (r1()) {
        case ou:
          return 1;
        case ap:
          return 4;
        case Ai:
        case o1:
          return 16;
        case up:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  au = null,
  mi = null;
function vp() {
  if (mi) return mi;
  var e,
    t = au,
    n = t.length,
    r,
    o = "value" in tn ? tn.value : tn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (mi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function hi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yo() {
  return !0;
}
function Oc() {
  return !1;
}
function nt(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Yo
        : Oc),
      (this.isPropagationStopped = Oc),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Yo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Yo));
      },
      persist: function () {},
      isPersistent: Yo,
    }),
    t
  );
}
var kr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  uu = nt(kr),
  _o = re({}, kr, { view: 0, detail: 0 }),
  y1 = nt(_o),
  ds,
  fs,
  Tr,
  ul = re({}, _o, {
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
    getModifierState: cu,
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
        : (e !== Tr &&
            (Tr && e.type === "mousemove"
              ? ((ds = e.screenX - Tr.screenX), (fs = e.screenY - Tr.screenY))
              : (fs = ds = 0),
            (Tr = e)),
          ds);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fs;
    },
  }),
  Tc = nt(ul),
  v1 = re({}, ul, { dataTransfer: 0 }),
  x1 = nt(v1),
  w1 = re({}, _o, { relatedTarget: 0 }),
  ps = nt(w1),
  S1 = re({}, kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  k1 = nt(S1),
  E1 = re({}, kr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  C1 = nt(E1),
  P1 = re({}, kr, { data: 0 }),
  $c = nt(P1),
  j1 = {
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
  z1 = {
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
  N1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function b1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = N1[e]) ? !!t[e] : !1;
}
function cu() {
  return b1;
}
var R1 = re({}, _o, {
    key: function (e) {
      if (e.key) {
        var t = j1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = hi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? z1[e.keyCode] || "Unidentified"
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
    getModifierState: cu,
    charCode: function (e) {
      return e.type === "keypress" ? hi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? hi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  _1 = nt(R1),
  O1 = re({}, ul, {
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
  Mc = nt(O1),
  T1 = re({}, _o, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cu,
  }),
  $1 = nt(T1),
  M1 = re({}, kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  A1 = nt(M1),
  I1 = re({}, ul, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  L1 = nt(I1),
  F1 = [9, 13, 27, 32],
  du = Dt && "CompositionEvent" in window,
  qr = null;
Dt && "documentMode" in document && (qr = document.documentMode);
var D1 = Dt && "TextEvent" in window && !qr,
  xp = Dt && (!du || (qr && 8 < qr && 11 >= qr)),
  Ac = String.fromCharCode(32),
  Ic = !1;
function wp(e, t) {
  switch (e) {
    case "keyup":
      return F1.indexOf(t.keyCode) !== -1;
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
function Sp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kn = !1;
function B1(e, t) {
  switch (e) {
    case "compositionend":
      return Sp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ic = !0), Ac);
    case "textInput":
      return (e = t.data), e === Ac && Ic ? null : e;
    default:
      return null;
  }
}
function U1(e, t) {
  if (Kn)
    return e === "compositionend" || (!du && wp(e, t))
      ? ((e = vp()), (mi = au = tn = null), (Kn = !1), e)
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
      return xp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var V1 = {
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
function Lc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!V1[e.type] : t === "textarea";
}
function kp(e, t, n, r) {
  Zf(r),
    (t = Di(t, "onChange")),
    0 < t.length &&
      ((n = new uu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gr = null,
  co = null;
function W1(e) {
  Tp(e, 0);
}
function cl(e) {
  var t = qn(e);
  if (Kf(t)) return e;
}
function H1(e, t) {
  if (e === "change") return t;
}
var Ep = !1;
if (Dt) {
  var ms;
  if (Dt) {
    var hs = "oninput" in document;
    if (!hs) {
      var Fc = document.createElement("div");
      Fc.setAttribute("oninput", "return;"),
        (hs = typeof Fc.oninput == "function");
    }
    ms = hs;
  } else ms = !1;
  Ep = ms && (!document.documentMode || 9 < document.documentMode);
}
function Dc() {
  Gr && (Gr.detachEvent("onpropertychange", Cp), (co = Gr = null));
}
function Cp(e) {
  if (e.propertyName === "value" && cl(co)) {
    var t = [];
    kp(t, co, e, ru(e)), rp(W1, t);
  }
}
function K1(e, t, n) {
  e === "focusin"
    ? (Dc(), (Gr = t), (co = n), Gr.attachEvent("onpropertychange", Cp))
    : e === "focusout" && Dc();
}
function X1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cl(co);
}
function Q1(e, t) {
  if (e === "click") return cl(t);
}
function q1(e, t) {
  if (e === "input" || e === "change") return cl(t);
}
function G1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wt = typeof Object.is == "function" ? Object.is : G1;
function fo(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Bs.call(t, o) || !wt(e[o], t[o])) return !1;
  }
  return !0;
}
function Bc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uc(e, t) {
  var n = Bc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bc(n);
  }
}
function Pp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Pp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jp() {
  for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ti(e.document);
  }
  return t;
}
function fu(e) {
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
function Y1(e) {
  var t = jp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Uc(n, i));
        var l = Uc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var J1 = Dt && "documentMode" in document && 11 >= document.documentMode,
  Xn = null,
  la = null,
  Yr = null,
  sa = !1;
function Vc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sa ||
    Xn == null ||
    Xn !== Ti(r) ||
    ((r = Xn),
    "selectionStart" in r && fu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Yr && fo(Yr, r)) ||
      ((Yr = r),
      (r = Di(la, "onSelect")),
      0 < r.length &&
        ((t = new uu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xn))));
}
function Jo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Qn = {
    animationend: Jo("Animation", "AnimationEnd"),
    animationiteration: Jo("Animation", "AnimationIteration"),
    animationstart: Jo("Animation", "AnimationStart"),
    transitionend: Jo("Transition", "TransitionEnd"),
  },
  gs = {},
  zp = {};
Dt &&
  ((zp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qn.animationend.animation,
    delete Qn.animationiteration.animation,
    delete Qn.animationstart.animation),
  "TransitionEvent" in window || delete Qn.transitionend.transition);
function dl(e) {
  if (gs[e]) return gs[e];
  if (!Qn[e]) return e;
  var t = Qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in zp) return (gs[e] = t[n]);
  return e;
}
var Np = dl("animationend"),
  bp = dl("animationiteration"),
  Rp = dl("animationstart"),
  _p = dl("transitionend"),
  Op = new Map(),
  Wc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gn(e, t) {
  Op.set(e, t), Mn(t, [e]);
}
for (var ys = 0; ys < Wc.length; ys++) {
  var vs = Wc[ys],
    Z1 = vs.toLowerCase(),
    eg = vs[0].toUpperCase() + vs.slice(1);
  gn(Z1, "on" + eg);
}
gn(Np, "onAnimationEnd");
gn(bp, "onAnimationIteration");
gn(Rp, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(_p, "onTransitionEnd");
dr("onMouseEnter", ["mouseout", "mouseover"]);
dr("onMouseLeave", ["mouseout", "mouseover"]);
dr("onPointerEnter", ["pointerout", "pointerover"]);
dr("onPointerLeave", ["pointerout", "pointerover"]);
Mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  tg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
function Hc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Zh(r, t, void 0, e), (e.currentTarget = null);
}
function Tp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          Hc(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Hc(o, s, u), (i = a);
        }
    }
  }
  if (Mi) throw ((e = na), (Mi = !1), (na = null), e);
}
function q(e, t) {
  var n = t[fa];
  n === void 0 && (n = t[fa] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($p(t, e, 2, !1), n.add(r));
}
function xs(e, t, n) {
  var r = 0;
  t && (r |= 4), $p(n, e, r, t);
}
var Zo = "_reactListening" + Math.random().toString(36).slice(2);
function po(e) {
  if (!e[Zo]) {
    (e[Zo] = !0),
      Bf.forEach(function (n) {
        n !== "selectionchange" && (tg.has(n) || xs(n, !1, e), xs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zo] || ((t[Zo] = !0), xs("selectionchange", !1, t));
  }
}
function $p(e, t, n, r) {
  switch (yp(t)) {
    case 1:
      var o = h1;
      break;
    case 4:
      o = g1;
      break;
    default:
      o = su;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ta ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ws(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = kn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  rp(function () {
    var u = i,
      d = ru(n),
      p = [];
    e: {
      var m = Op.get(e);
      if (m !== void 0) {
        var x = uu,
          y = e;
        switch (e) {
          case "keypress":
            if (hi(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = _1;
            break;
          case "focusin":
            (y = "focus"), (x = ps);
            break;
          case "focusout":
            (y = "blur"), (x = ps);
            break;
          case "beforeblur":
          case "afterblur":
            x = ps;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Tc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = x1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = $1;
            break;
          case Np:
          case bp:
          case Rp:
            x = k1;
            break;
          case _p:
            x = A1;
            break;
          case "scroll":
            x = y1;
            break;
          case "wheel":
            x = L1;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = C1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Mc;
        }
        var g = (t & 4) !== 0,
          k = !g && e === "scroll",
          h = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var f = u, v; f !== null; ) {
          v = f;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              h !== null && ((S = lo(f, h)), S != null && g.push(mo(f, S, v)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((m = new x(m, y, null, n, d)), p.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Zs &&
            (y = n.relatedTarget || n.fromElement) &&
            (kn(y) || y[Bt]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          x
            ? ((y = n.relatedTarget || n.toElement),
              (x = u),
              (y = y ? kn(y) : null),
              y !== null &&
                ((k = An(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = u)),
          x !== y)
        ) {
          if (
            ((g = Tc),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Mc),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (k = x == null ? m : qn(x)),
            (v = y == null ? m : qn(y)),
            (m = new g(S, f + "leave", x, n, d)),
            (m.target = k),
            (m.relatedTarget = v),
            (S = null),
            kn(d) === u &&
              ((g = new g(h, f + "enter", y, n, d)),
              (g.target = v),
              (g.relatedTarget = k),
              (S = g)),
            (k = S),
            x && y)
          )
            t: {
              for (g = x, h = y, f = 0, v = g; v; v = In(v)) f++;
              for (v = 0, S = h; S; S = In(S)) v++;
              for (; 0 < f - v; ) (g = In(g)), f--;
              for (; 0 < v - f; ) (h = In(h)), v--;
              for (; f--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                (g = In(g)), (h = In(h));
              }
              g = null;
            }
          else g = null;
          x !== null && Kc(p, m, x, g, !1),
            y !== null && k !== null && Kc(p, k, y, g, !0);
        }
      }
      e: {
        if (
          ((m = u ? qn(u) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var P = H1;
        else if (Lc(m))
          if (Ep) P = q1;
          else {
            P = X1;
            var j = K1;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (P = Q1);
        if (P && (P = P(e, u))) {
          kp(p, P, n, d);
          break e;
        }
        j && j(e, m, u),
          e === "focusout" &&
            (j = m._wrapperState) &&
            j.controlled &&
            m.type === "number" &&
            Qs(m, "number", m.value);
      }
      switch (((j = u ? qn(u) : window), e)) {
        case "focusin":
          (Lc(j) || j.contentEditable === "true") &&
            ((Xn = j), (la = u), (Yr = null));
          break;
        case "focusout":
          Yr = la = Xn = null;
          break;
        case "mousedown":
          sa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (sa = !1), Vc(p, n, d);
          break;
        case "selectionchange":
          if (J1) break;
        case "keydown":
        case "keyup":
          Vc(p, n, d);
      }
      var C;
      if (du)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        Kn
          ? wp(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (xp &&
          n.locale !== "ko" &&
          (Kn || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && Kn && (C = vp())
            : ((tn = d),
              (au = "value" in tn ? tn.value : tn.textContent),
              (Kn = !0))),
        (j = Di(u, b)),
        0 < j.length &&
          ((b = new $c(b, e, null, n, d)),
          p.push({ event: b, listeners: j }),
          C ? (b.data = C) : ((C = Sp(n)), C !== null && (b.data = C)))),
        (C = D1 ? B1(e, n) : U1(e, n)) &&
          ((u = Di(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new $c("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = C)));
    }
    Tp(p, t);
  });
}
function mo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Di(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = lo(e, n)),
      i != null && r.unshift(mo(e, i, o)),
      (i = lo(e, t)),
      i != null && r.push(mo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function In(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Kc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = lo(n, i)), a != null && l.unshift(mo(n, a, s)))
        : o || ((a = lo(n, i)), a != null && l.push(mo(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var ng = /\r\n?/g,
  rg = /\u0000|\uFFFD/g;
function Xc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ng,
      `
`
    )
    .replace(rg, "");
}
function ei(e, t, n) {
  if (((t = Xc(t)), Xc(e) !== t && n)) throw Error(z(425));
}
function Bi() {}
var aa = null,
  ua = null;
function ca(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var da = typeof setTimeout == "function" ? setTimeout : void 0,
  og = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qc = typeof Promise == "function" ? Promise : void 0,
  ig =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qc < "u"
      ? function (e) {
          return Qc.resolve(null).then(e).catch(lg);
        }
      : da;
function lg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ss(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), uo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  uo(t);
}
function an(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Er = Math.random().toString(36).slice(2),
  Pt = "__reactFiber$" + Er,
  ho = "__reactProps$" + Er,
  Bt = "__reactContainer$" + Er,
  fa = "__reactEvents$" + Er,
  sg = "__reactListeners$" + Er,
  ag = "__reactHandles$" + Er;
function kn(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Bt] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qc(e); e !== null; ) {
          if ((n = e[Pt])) return n;
          e = qc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Oo(e) {
  return (
    (e = e[Pt] || e[Bt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function fl(e) {
  return e[ho] || null;
}
var pa = [],
  Gn = -1;
function yn(e) {
  return { current: e };
}
function G(e) {
  0 > Gn || ((e.current = pa[Gn]), (pa[Gn] = null), Gn--);
}
function Q(e, t) {
  Gn++, (pa[Gn] = e.current), (e.current = t);
}
var hn = {},
  Te = yn(hn),
  We = yn(!1),
  bn = hn;
function fr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function Ui() {
  G(We), G(Te);
}
function Gc(e, t, n) {
  if (Te.current !== hn) throw Error(z(168));
  Q(Te, t), Q(We, n);
}
function Mp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(z(108, Kh(e) || "Unknown", o));
  return re({}, n, r);
}
function Vi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hn),
    (bn = Te.current),
    Q(Te, e),
    Q(We, We.current),
    !0
  );
}
function Yc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n
    ? ((e = Mp(e, t, bn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(We),
      G(Te),
      Q(Te, e))
    : G(We),
    Q(We, n);
}
var $t = null,
  pl = !1,
  ks = !1;
function Ap(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function ug(e) {
  (pl = !0), Ap(e);
}
function vn() {
  if (!ks && $t !== null) {
    ks = !0;
    var e = 0,
      t = H;
    try {
      var n = $t;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($t = null), (pl = !1);
    } catch (o) {
      throw ($t !== null && ($t = $t.slice(e + 1)), sp(ou, vn), o);
    } finally {
      (H = t), (ks = !1);
    }
  }
  return null;
}
var Yn = [],
  Jn = 0,
  Wi = null,
  Hi = 0,
  it = [],
  lt = 0,
  Rn = null,
  Mt = 1,
  At = "";
function wn(e, t) {
  (Yn[Jn++] = Hi), (Yn[Jn++] = Wi), (Wi = e), (Hi = t);
}
function Ip(e, t, n) {
  (it[lt++] = Mt), (it[lt++] = At), (it[lt++] = Rn), (Rn = e);
  var r = Mt;
  e = At;
  var o = 32 - vt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - vt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Mt = (1 << (32 - vt(t) + o)) | (n << o) | r),
      (At = i + e);
  } else (Mt = (1 << i) | (n << o) | r), (At = e);
}
function pu(e) {
  e.return !== null && (wn(e, 1), Ip(e, 1, 0));
}
function mu(e) {
  for (; e === Wi; )
    (Wi = Yn[--Jn]), (Yn[Jn] = null), (Hi = Yn[--Jn]), (Yn[Jn] = null);
  for (; e === Rn; )
    (Rn = it[--lt]),
      (it[lt] = null),
      (At = it[--lt]),
      (it[lt] = null),
      (Mt = it[--lt]),
      (it[lt] = null);
}
var Je = null,
  Ye = null,
  J = !1,
  yt = null;
function Lp(e, t) {
  var n = st(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Jc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (Ye = an(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rn !== null ? { id: Mt, overflow: At } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ma(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ha(e) {
  if (J) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!Jc(e, t)) {
        if (ma(e)) throw Error(z(418));
        t = an(n.nextSibling);
        var r = Je;
        t && Jc(e, t)
          ? Lp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Je = e));
      }
    } else {
      if (ma(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (Je = e);
    }
  }
}
function Zc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function ti(e) {
  if (e !== Je) return !1;
  if (!J) return Zc(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ca(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (ma(e)) throw (Fp(), Error(z(418)));
    for (; t; ) Lp(e, t), (t = an(t.nextSibling));
  }
  if ((Zc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = an(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Je ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function Fp() {
  for (var e = Ye; e; ) e = an(e.nextSibling);
}
function pr() {
  (Ye = Je = null), (J = !1);
}
function hu(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var cg = Ht.ReactCurrentBatchConfig;
function mt(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ki = yn(null),
  Xi = null,
  Zn = null,
  gu = null;
function yu() {
  gu = Zn = Xi = null;
}
function vu(e) {
  var t = Ki.current;
  G(Ki), (e._currentValue = t);
}
function ga(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function lr(e, t) {
  (Xi = e),
    (gu = Zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ve = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (gu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Zn === null)) {
      if (Xi === null) throw Error(z(308));
      (Zn = e), (Xi.dependencies = { lanes: 0, firstContext: e });
    } else Zn = Zn.next = e;
  return t;
}
var En = null;
function xu(e) {
  En === null ? (En = [e]) : En.push(e);
}
function Dp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), xu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ut(e, r)
  );
}
function Ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jt = !1;
function wu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Bp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function It(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ut(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), xu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ut(e, n)
  );
}
function gi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), iu(e, n);
  }
}
function ed(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Qi(e, t, n, r) {
  var o = e.updateQueue;
  Jt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l &&
        (s === null ? (d.firstBaseUpdate = u) : (s.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    (l = 0), (d = u = a = null), (s = i);
    do {
      var m = s.lane,
        x = s.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            g = s;
          switch (((m = t), (x = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                p = y.call(x, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (m = typeof y == "function" ? y.call(x, p, m) : y),
                m == null)
              )
                break e;
              p = re({}, p, m);
              break e;
            case 2:
              Jt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [s]) : m.push(s));
      } else
        (x = {
          eventTime: x,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = x), (a = p)) : (d = d.next = x),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (On |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function td(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(z(191, o));
        o.call(r);
      }
    }
}
var Up = new Df.Component().refs;
function ya(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ml = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? An(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      o = dn(e),
      i = It(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, o)),
      t !== null && (xt(t, e, o, r), gi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      o = dn(e),
      i = It(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, o)),
      t !== null && (xt(t, e, o, r), gi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = dn(e),
      o = It(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = un(e, o, r)),
      t !== null && (xt(t, e, r, n), gi(t, e, r));
  },
};
function nd(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !fo(n, r) || !fo(o, i)
      : !0
  );
}
function Vp(e, t, n) {
  var r = !1,
    o = hn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ct(i))
      : ((o = He(t) ? bn : Te.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fr(e, o) : hn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ml),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function rd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ml.enqueueReplaceState(t, t.state, null);
}
function va(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Up), wu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ct(i))
    : ((i = He(t) ? bn : Te.current), (o.context = fr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ya(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ml.enqueueReplaceState(o, o.state, null),
      Qi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function $r(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === Up && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function ni(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function od(e) {
  var t = e._init;
  return t(e._payload);
}
function Wp(e) {
  function t(h, f) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [f]), (h.flags |= 16)) : v.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function o(h, f) {
    return (h = fn(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, f, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((h.flags |= 2), f) : v)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, f, v, S) {
    return f === null || f.tag !== 6
      ? ((f = bs(v, h.mode, S)), (f.return = h), f)
      : ((f = o(f, v)), (f.return = h), f);
  }
  function a(h, f, v, S) {
    var P = v.type;
    return P === Hn
      ? d(h, f, v.props.children, S, v.key)
      : f !== null &&
        (f.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Yt &&
            od(P) === f.type))
      ? ((S = o(f, v.props)), (S.ref = $r(h, f, v)), (S.return = h), S)
      : ((S = ki(v.type, v.key, v.props, null, h.mode, S)),
        (S.ref = $r(h, f, v)),
        (S.return = h),
        S);
  }
  function u(h, f, v, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = Rs(v, h.mode, S)), (f.return = h), f)
      : ((f = o(f, v.children || [])), (f.return = h), f);
  }
  function d(h, f, v, S, P) {
    return f === null || f.tag !== 7
      ? ((f = zn(v, h.mode, S, P)), (f.return = h), f)
      : ((f = o(f, v)), (f.return = h), f);
  }
  function p(h, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = bs("" + f, h.mode, v)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ho:
          return (
            (v = ki(f.type, f.key, f.props, null, h.mode, v)),
            (v.ref = $r(h, null, f)),
            (v.return = h),
            v
          );
        case Wn:
          return (f = Rs(f, h.mode, v)), (f.return = h), f;
        case Yt:
          var S = f._init;
          return p(h, S(f._payload), v);
      }
      if (Ur(f) || br(f))
        return (f = zn(f, h.mode, v, null)), (f.return = h), f;
      ni(h, f);
    }
    return null;
  }
  function m(h, f, v, S) {
    var P = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return P !== null ? null : s(h, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ho:
          return v.key === P ? a(h, f, v, S) : null;
        case Wn:
          return v.key === P ? u(h, f, v, S) : null;
        case Yt:
          return (P = v._init), m(h, f, P(v._payload), S);
      }
      if (Ur(v) || br(v)) return P !== null ? null : d(h, f, v, S, null);
      ni(h, v);
    }
    return null;
  }
  function x(h, f, v, S, P) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(v) || null), s(f, h, "" + S, P);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ho:
          return (h = h.get(S.key === null ? v : S.key) || null), a(f, h, S, P);
        case Wn:
          return (h = h.get(S.key === null ? v : S.key) || null), u(f, h, S, P);
        case Yt:
          var j = S._init;
          return x(h, f, v, j(S._payload), P);
      }
      if (Ur(S) || br(S)) return (h = h.get(v) || null), d(f, h, S, P, null);
      ni(f, S);
    }
    return null;
  }
  function y(h, f, v, S) {
    for (
      var P = null, j = null, C = f, b = (f = 0), A = null;
      C !== null && b < v.length;
      b++
    ) {
      C.index > b ? ((A = C), (C = null)) : (A = C.sibling);
      var R = m(h, C, v[b], S);
      if (R === null) {
        C === null && (C = A);
        break;
      }
      e && C && R.alternate === null && t(h, C),
        (f = i(R, f, b)),
        j === null ? (P = R) : (j.sibling = R),
        (j = R),
        (C = A);
    }
    if (b === v.length) return n(h, C), J && wn(h, b), P;
    if (C === null) {
      for (; b < v.length; b++)
        (C = p(h, v[b], S)),
          C !== null &&
            ((f = i(C, f, b)), j === null ? (P = C) : (j.sibling = C), (j = C));
      return J && wn(h, b), P;
    }
    for (C = r(h, C); b < v.length; b++)
      (A = x(C, h, b, v[b], S)),
        A !== null &&
          (e && A.alternate !== null && C.delete(A.key === null ? b : A.key),
          (f = i(A, f, b)),
          j === null ? (P = A) : (j.sibling = A),
          (j = A));
    return (
      e &&
        C.forEach(function (F) {
          return t(h, F);
        }),
      J && wn(h, b),
      P
    );
  }
  function g(h, f, v, S) {
    var P = br(v);
    if (typeof P != "function") throw Error(z(150));
    if (((v = P.call(v)), v == null)) throw Error(z(151));
    for (
      var j = (P = null), C = f, b = (f = 0), A = null, R = v.next();
      C !== null && !R.done;
      b++, R = v.next()
    ) {
      C.index > b ? ((A = C), (C = null)) : (A = C.sibling);
      var F = m(h, C, R.value, S);
      if (F === null) {
        C === null && (C = A);
        break;
      }
      e && C && F.alternate === null && t(h, C),
        (f = i(F, f, b)),
        j === null ? (P = F) : (j.sibling = F),
        (j = F),
        (C = A);
    }
    if (R.done) return n(h, C), J && wn(h, b), P;
    if (C === null) {
      for (; !R.done; b++, R = v.next())
        (R = p(h, R.value, S)),
          R !== null &&
            ((f = i(R, f, b)), j === null ? (P = R) : (j.sibling = R), (j = R));
      return J && wn(h, b), P;
    }
    for (C = r(h, C); !R.done; b++, R = v.next())
      (R = x(C, h, b, R.value, S)),
        R !== null &&
          (e && R.alternate !== null && C.delete(R.key === null ? b : R.key),
          (f = i(R, f, b)),
          j === null ? (P = R) : (j.sibling = R),
          (j = R));
    return (
      e &&
        C.forEach(function (ee) {
          return t(h, ee);
        }),
      J && wn(h, b),
      P
    );
  }
  function k(h, f, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Hn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ho:
          e: {
            for (var P = v.key, j = f; j !== null; ) {
              if (j.key === P) {
                if (((P = v.type), P === Hn)) {
                  if (j.tag === 7) {
                    n(h, j.sibling),
                      (f = o(j, v.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  j.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Yt &&
                    od(P) === j.type)
                ) {
                  n(h, j.sibling),
                    (f = o(j, v.props)),
                    (f.ref = $r(h, j, v)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, j);
                break;
              } else t(h, j);
              j = j.sibling;
            }
            v.type === Hn
              ? ((f = zn(v.props.children, h.mode, S, v.key)),
                (f.return = h),
                (h = f))
              : ((S = ki(v.type, v.key, v.props, null, h.mode, S)),
                (S.ref = $r(h, f, v)),
                (S.return = h),
                (h = S));
          }
          return l(h);
        case Wn:
          e: {
            for (j = v.key; f !== null; ) {
              if (f.key === j)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(h, f.sibling),
                    (f = o(f, v.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = Rs(v, h.mode, S)), (f.return = h), (h = f);
          }
          return l(h);
        case Yt:
          return (j = v._init), k(h, f, j(v._payload), S);
      }
      if (Ur(v)) return y(h, f, v, S);
      if (br(v)) return g(h, f, v, S);
      ni(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = o(f, v)), (f.return = h), (h = f))
          : (n(h, f), (f = bs(v, h.mode, S)), (f.return = h), (h = f)),
        l(h))
      : n(h, f);
  }
  return k;
}
var mr = Wp(!0),
  Hp = Wp(!1),
  To = {},
  bt = yn(To),
  go = yn(To),
  yo = yn(To);
function Cn(e) {
  if (e === To) throw Error(z(174));
  return e;
}
function Su(e, t) {
  switch ((Q(yo, t), Q(go, e), Q(bt, To), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gs(t, e));
  }
  G(bt), Q(bt, t);
}
function hr() {
  G(bt), G(go), G(yo);
}
function Kp(e) {
  Cn(yo.current);
  var t = Cn(bt.current),
    n = Gs(t, e.type);
  t !== n && (Q(go, e), Q(bt, n));
}
function ku(e) {
  go.current === e && (G(bt), G(go));
}
var te = yn(0);
function qi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var Es = [];
function Eu() {
  for (var e = 0; e < Es.length; e++)
    Es[e]._workInProgressVersionPrimary = null;
  Es.length = 0;
}
var yi = Ht.ReactCurrentDispatcher,
  Cs = Ht.ReactCurrentBatchConfig,
  _n = 0,
  ne = null,
  he = null,
  we = null,
  Gi = !1,
  Jr = !1,
  vo = 0,
  dg = 0;
function be() {
  throw Error(z(321));
}
function Cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!wt(e[n], t[n])) return !1;
  return !0;
}
function Pu(e, t, n, r, o, i) {
  if (
    ((_n = i),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (yi.current = e === null || e.memoizedState === null ? hg : gg),
    (e = n(r, o)),
    Jr)
  ) {
    i = 0;
    do {
      if (((Jr = !1), (vo = 0), 25 <= i)) throw Error(z(301));
      (i += 1),
        (we = he = null),
        (t.updateQueue = null),
        (yi.current = yg),
        (e = n(r, o));
    } while (Jr);
  }
  if (
    ((yi.current = Yi),
    (t = he !== null && he.next !== null),
    (_n = 0),
    (we = he = ne = null),
    (Gi = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function ju() {
  var e = vo !== 0;
  return (vo = 0), e;
}
function kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return we === null ? (ne.memoizedState = we = e) : (we = we.next = e), we;
}
function dt() {
  if (he === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = we === null ? ne.memoizedState : we.next;
  if (t !== null) (we = t), (he = e);
  else {
    if (e === null) throw Error(z(310));
    (he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      we === null ? (ne.memoizedState = we = e) : (we = we.next = e);
  }
  return we;
}
function xo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ps(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = he,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((_n & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = p), (l = r)) : (a = a.next = p),
          (ne.lanes |= d),
          (On |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      wt(r, t.memoizedState) || (Ve = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ne.lanes |= i), (On |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function js(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    wt(i, t.memoizedState) || (Ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Xp() {}
function Qp(e, t) {
  var n = ne,
    r = dt(),
    o = t(),
    i = !wt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ve = !0)),
    (r = r.queue),
    zu(Yp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wo(9, Gp.bind(null, n, r, o, t), void 0, null),
      Se === null)
    )
      throw Error(z(349));
    _n & 30 || qp(n, t, o);
  }
  return o;
}
function qp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Jp(t) && Zp(e);
}
function Yp(e, t, n) {
  return n(function () {
    Jp(t) && Zp(e);
  });
}
function Jp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function Zp(e) {
  var t = Ut(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function id(e) {
  var t = kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = mg.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function wo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function e0() {
  return dt().memoizedState;
}
function vi(e, t, n, r) {
  var o = kt();
  (ne.flags |= e),
    (o.memoizedState = wo(1 | t, n, void 0, r === void 0 ? null : r));
}
function hl(e, t, n, r) {
  var o = dt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (he !== null) {
    var l = he.memoizedState;
    if (((i = l.destroy), r !== null && Cu(r, l.deps))) {
      o.memoizedState = wo(t, n, i, r);
      return;
    }
  }
  (ne.flags |= e), (o.memoizedState = wo(1 | t, n, i, r));
}
function ld(e, t) {
  return vi(8390656, 8, e, t);
}
function zu(e, t) {
  return hl(2048, 8, e, t);
}
function t0(e, t) {
  return hl(4, 2, e, t);
}
function n0(e, t) {
  return hl(4, 4, e, t);
}
function r0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function o0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), hl(4, 4, r0.bind(null, t, e), n)
  );
}
function Nu() {}
function i0(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function l0(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function s0(e, t, n) {
  return _n & 21
    ? (wt(n, t) || ((n = cp()), (ne.lanes |= n), (On |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n));
}
function fg(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Cs.transition;
  Cs.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (Cs.transition = r);
  }
}
function a0() {
  return dt().memoizedState;
}
function pg(e, t, n) {
  var r = dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    u0(e))
  )
    c0(t, n);
  else if (((n = Dp(e, t, n, r)), n !== null)) {
    var o = Ae();
    xt(n, e, r, o), d0(n, t, r);
  }
}
function mg(e, t, n) {
  var r = dn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (u0(e)) c0(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), wt(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), xu(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Dp(e, t, o, r)),
      n !== null && ((o = Ae()), xt(n, e, r, o), d0(n, t, r));
  }
}
function u0(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function c0(e, t) {
  Jr = Gi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function d0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), iu(e, n);
  }
}
var Yi = {
    readContext: ct,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1,
  },
  hg = {
    readContext: ct,
    useCallback: function (e, t) {
      return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: ld,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        vi(4194308, 4, r0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return vi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return vi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = pg.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: id,
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      return (kt().memoizedState = e);
    },
    useTransition: function () {
      var e = id(!1),
        t = e[0];
      return (e = fg.bind(null, e[1])), (kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        o = kt();
      if (J) {
        if (n === void 0) throw Error(z(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(z(349));
        _n & 30 || qp(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ld(Yp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        wo(9, Gp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = kt(),
        t = Se.identifierPrefix;
      if (J) {
        var n = At,
          r = Mt;
        (n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = dg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  gg = {
    readContext: ct,
    useCallback: i0,
    useContext: ct,
    useEffect: zu,
    useImperativeHandle: o0,
    useInsertionEffect: t0,
    useLayoutEffect: n0,
    useMemo: l0,
    useReducer: Ps,
    useRef: e0,
    useState: function () {
      return Ps(xo);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = dt();
      return s0(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = Ps(xo)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Xp,
    useSyncExternalStore: Qp,
    useId: a0,
    unstable_isNewReconciler: !1,
  },
  yg = {
    readContext: ct,
    useCallback: i0,
    useContext: ct,
    useEffect: zu,
    useImperativeHandle: o0,
    useInsertionEffect: t0,
    useLayoutEffect: n0,
    useMemo: l0,
    useReducer: js,
    useRef: e0,
    useState: function () {
      return js(xo);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = dt();
      return he === null ? (t.memoizedState = e) : s0(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = js(xo)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Xp,
    useSyncExternalStore: Qp,
    useId: a0,
    unstable_isNewReconciler: !1,
  };
function gr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hh(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function zs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var vg = typeof WeakMap == "function" ? WeakMap : Map;
function f0(e, t, n) {
  (n = It(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zi || ((Zi = !0), (ba = r)), xa(e, t);
    }),
    n
  );
}
function p0(e, t, n) {
  (n = It(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        xa(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        xa(e, t),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function sd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vg();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Og.bind(null, e, t, n)), t.then(e, e));
}
function ad(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ud(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = It(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var xg = Ht.ReactCurrentOwner,
  Ve = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Hp(t, null, n, r) : mr(t, e.child, n, r);
}
function cd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    lr(t, o),
    (r = Pu(e, t, n, r, i, o)),
    (n = ju()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Vt(e, t, o))
      : (J && n && pu(t), (t.flags |= 1), Me(e, t, r, o), t.child)
  );
}
function dd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Au(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), m0(e, t, i, r, o))
      : ((e = ki(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fo), n(l, r) && e.ref === t.ref)
    )
      return Vt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = fn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function m0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (fo(i, r) && e.ref === t.ref)
      if (((Ve = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ve = !0);
      else return (t.lanes = e.lanes), Vt(e, t, o);
  }
  return wa(e, t, n, r, o);
}
function h0(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(tr, qe),
        (qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(tr, qe),
          (qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Q(tr, qe),
        (qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Q(tr, qe),
      (qe |= r);
  return Me(e, t, o, n), t.child;
}
function g0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function wa(e, t, n, r, o) {
  var i = He(n) ? bn : Te.current;
  return (
    (i = fr(t, i)),
    lr(t, o),
    (n = Pu(e, t, n, r, i, o)),
    (r = ju()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Vt(e, t, o))
      : (J && r && pu(t), (t.flags |= 1), Me(e, t, n, o), t.child)
  );
}
function fd(e, t, n, r, o) {
  if (He(n)) {
    var i = !0;
    Vi(t);
  } else i = !1;
  if ((lr(t, o), t.stateNode === null))
    xi(e, t), Vp(t, n, r), va(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ct(u))
      : ((u = He(n) ? bn : Te.current), (u = fr(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && rd(t, l, r, u)),
      (Jt = !1);
    var m = t.memoizedState;
    (l.state = m),
      Qi(t, r, l, o),
      (a = t.memoizedState),
      s !== r || m !== a || We.current || Jt
        ? (typeof d == "function" && (ya(t, n, d, r), (a = t.memoizedState)),
          (s = Jt || nd(t, n, s, r, m, a, u))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Bp(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : mt(t.type, s)),
      (l.props = u),
      (p = t.pendingProps),
      (m = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ct(a))
        : ((a = He(n) ? bn : Te.current), (a = fr(t, a)));
    var x = n.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== p || m !== a) && rd(t, l, r, a)),
      (Jt = !1),
      (m = t.memoizedState),
      (l.state = m),
      Qi(t, r, l, o);
    var y = t.memoizedState;
    s !== p || m !== y || We.current || Jt
      ? (typeof x == "function" && (ya(t, n, x, r), (y = t.memoizedState)),
        (u = Jt || nd(t, n, u, r, m, y, a) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, y, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, y, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Sa(e, t, n, r, i, o);
}
function Sa(e, t, n, r, o, i) {
  g0(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Yc(t, n, !1), Vt(e, t, i);
  (r = t.stateNode), (xg.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = mr(t, e.child, null, i)), (t.child = mr(t, null, s, i)))
      : Me(e, t, s, i),
    (t.memoizedState = r.state),
    o && Yc(t, n, !0),
    t.child
  );
}
function y0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gc(e, t.context, !1),
    Su(e, t.containerInfo);
}
function pd(e, t, n, r, o) {
  return pr(), hu(o), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var ka = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ea(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function v0(e, t, n) {
  var r = t.pendingProps,
    o = te.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Q(te, o & 1),
    e === null)
  )
    return (
      ha(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = vl(l, r, 0, null)),
              (e = zn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ea(n)),
              (t.memoizedState = ka),
              e)
            : bu(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return wg(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = fn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = fn(s, i)) : ((i = zn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ea(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ka),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = fn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bu(e, t) {
  return (
    (t = vl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ri(e, t, n, r) {
  return (
    r !== null && hu(r),
    mr(t, e.child, null, n),
    (e = bu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function wg(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = zs(Error(z(422)))), ri(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = vl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = zn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && mr(t, e.child, null, l),
        (t.child.memoizedState = Ea(l)),
        (t.memoizedState = ka),
        i);
  if (!(t.mode & 1)) return ri(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(z(419))), (r = zs(i, r, void 0)), ri(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ve || s)) {
    if (((r = Se), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ut(e, o), xt(r, e, o, -1));
    }
    return Mu(), (r = zs(Error(z(421)))), ri(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Tg.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ye = an(o.nextSibling)),
      (Je = t),
      (J = !0),
      (yt = null),
      e !== null &&
        ((it[lt++] = Mt),
        (it[lt++] = At),
        (it[lt++] = Rn),
        (Mt = e.id),
        (At = e.overflow),
        (Rn = t)),
      (t = bu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function md(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ga(e.return, t, n);
}
function Ns(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function x0(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Me(e, t, r.children, n), (r = te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && md(e, n, t);
        else if (e.tag === 19) md(e, n, t);
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
    r &= 1;
  }
  if ((Q(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && qi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ns(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && qi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ns(t, !0, n, null, i);
        break;
      case "together":
        Ns(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (On |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Sg(e, t, n) {
  switch (t.tag) {
    case 3:
      y0(t), pr();
      break;
    case 5:
      Kp(t);
      break;
    case 1:
      He(t.type) && Vi(t);
      break;
    case 4:
      Su(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Q(Ki, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? v0(e, t, n)
          : (Q(te, te.current & 1),
            (e = Vt(e, t, n)),
            e !== null ? e.sibling : null);
      Q(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return x0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Q(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), h0(e, t, n);
  }
  return Vt(e, t, n);
}
var w0, Ca, S0, k0;
w0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ca = function () {};
S0 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Cn(bt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ks(e, o)), (r = Ks(e, r)), (i = []);
        break;
      case "select":
        (o = re({}, o, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = qs(e, o)), (r = qs(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Bi);
    }
    Ys(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (oo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (oo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && q("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
k0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mr(e, t) {
  if (!J)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function kg(e, t, n) {
  var r = t.pendingProps;
  switch ((mu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(t), null;
    case 1:
      return He(t.type) && Ui(), Re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hr(),
        G(We),
        G(Te),
        Eu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ti(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (Oa(yt), (yt = null)))),
        Ca(e, t),
        Re(t),
        null
      );
    case 5:
      ku(t);
      var o = Cn(yo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        S0(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Re(t), null;
        }
        if (((e = Cn(bt.current)), ti(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Pt] = t), (r[ho] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Wr.length; o++) q(Wr[o], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              Ec(r, i), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                q("invalid", r);
              break;
            case "textarea":
              Pc(r, i), q("invalid", r);
          }
          Ys(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      ei(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      ei(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : oo.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              Ko(r), Cc(r, i, !0);
              break;
            case "textarea":
              Ko(r), jc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Bi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = qf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Pt] = t),
            (e[ho] = r),
            w0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Js(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Wr.length; o++) q(Wr[o], e);
                o = r;
                break;
              case "source":
                q("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (o = r);
                break;
              case "details":
                q("toggle", e), (o = r);
                break;
              case "input":
                Ec(e, r), (o = Ks(e, r)), q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = re({}, r, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                Pc(e, r), (o = qs(e, r)), q("invalid", e);
                break;
              default:
                o = r;
            }
            Ys(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? Jf(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Gf(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && io(e, a)
                    : typeof a == "number" && io(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (oo.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && q("scroll", e)
                      : a != null && Za(e, i, a, l));
              }
            switch (n) {
              case "input":
                Ko(e), Cc(e, r, !1);
                break;
              case "textarea":
                Ko(e), jc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? nr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      nr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Bi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) k0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (((n = Cn(yo.current)), Cn(bt.current), ti(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (i = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                ei(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ei(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r);
      }
      return Re(t), null;
    case 13:
      if (
        (G(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Ye !== null && t.mode & 1 && !(t.flags & 128))
          Fp(), pr(), (t.flags |= 98560), (i = !1);
        else if (((i = ti(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(z(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(z(317));
            i[Pt] = t;
          } else
            pr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Re(t), (i = !1);
        } else yt !== null && (Oa(yt), (yt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? ge === 0 && (ge = 3) : Mu())),
          t.updateQueue !== null && (t.flags |= 4),
          Re(t),
          null);
    case 4:
      return (
        hr(), Ca(e, t), e === null && po(t.stateNode.containerInfo), Re(t), null
      );
    case 10:
      return vu(t.type._context), Re(t), null;
    case 17:
      return He(t.type) && Ui(), Re(t), null;
    case 19:
      if ((G(te), (i = t.memoizedState), i === null)) return Re(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Mr(i, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = qi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Mr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Q(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ue() > yr &&
            ((t.flags |= 128), (r = !0), Mr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = qi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !J)
            )
              return Re(t), null;
          } else
            2 * ue() - i.renderingStartTime > yr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ue()),
          (t.sibling = null),
          (n = te.current),
          Q(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (Re(t), null);
    case 22:
    case 23:
      return (
        $u(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qe & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function Eg(e, t) {
  switch ((mu(t), t.tag)) {
    case 1:
      return (
        He(t.type) && Ui(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hr(),
        G(We),
        G(Te),
        Eu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ku(t), null;
    case 13:
      if ((G(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(z(340));
        pr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return G(te), null;
    case 4:
      return hr(), null;
    case 10:
      return vu(t.type._context), null;
    case 22:
    case 23:
      return $u(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var oi = !1,
  Oe = !1,
  Cg = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function er(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        le(e, t, r);
      }
    else n.current = null;
}
function Pa(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var hd = !1;
function Pg(e, t) {
  if (((aa = Li), (e = jp()), fu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              p !== n || (o !== 0 && p.nodeType !== 3) || (s = l + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (x = p.firstChild) !== null;

            )
              (m = p), (p = x);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++u === o && (s = l),
                m === i && ++d === r && (a = l),
                (x = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = x;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ua = { focusedElem: e, selectionRange: n }, Li = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    k = y.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : mt(t.type, g),
                      k
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (S) {
          le(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (y = hd), (hd = !1), y;
}
function Zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Pa(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function gl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ja(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function E0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), E0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[ho], delete t[fa], delete t[sg], delete t[ag])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function C0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || C0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function za(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Bi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (za(e, t, n), e = e.sibling; e !== null; ) za(e, t, n), (e = e.sibling);
}
function Na(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Na(e, t, n), e = e.sibling; e !== null; ) Na(e, t, n), (e = e.sibling);
}
var Pe = null,
  ht = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) P0(e, t, n), (n = n.sibling);
}
function P0(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(al, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || er(n, t);
    case 6:
      var r = Pe,
        o = ht;
      (Pe = null),
        Qt(e, t, n),
        (Pe = r),
        (ht = o),
        Pe !== null &&
          (ht
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (ht
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ss(e.parentNode, n)
              : e.nodeType === 1 && Ss(e, n),
            uo(e))
          : Ss(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (o = ht),
        (Pe = n.stateNode.containerInfo),
        (ht = !0),
        Qt(e, t, n),
        (Pe = r),
        (ht = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Pa(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (er(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          le(n, t, s);
        }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), Qt(e, t, n), (Oe = r))
        : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function yd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cg()),
      t.forEach(function (r) {
        var o = $g.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Pe = s.stateNode), (ht = !1);
              break e;
            case 3:
              (Pe = s.stateNode.containerInfo), (ht = !0);
              break e;
            case 4:
              (Pe = s.stateNode.containerInfo), (ht = !0);
              break e;
          }
          s = s.return;
        }
        if (Pe === null) throw Error(z(160));
        P0(i, l, o), (Pe = null), (ht = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        le(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) j0(t, e), (t = t.sibling);
}
function j0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), St(e), r & 4)) {
        try {
          Zr(3, e, e.return), gl(3, e);
        } catch (g) {
          le(e, e.return, g);
        }
        try {
          Zr(5, e, e.return);
        } catch (g) {
          le(e, e.return, g);
        }
      }
      break;
    case 1:
      pt(t, e), St(e), r & 512 && n !== null && er(n, n.return);
      break;
    case 5:
      if (
        (pt(t, e),
        St(e),
        r & 512 && n !== null && er(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          io(o, "");
        } catch (g) {
          le(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Xf(o, i),
              Js(s, l);
            var u = Js(s, i);
            for (l = 0; l < a.length; l += 2) {
              var d = a[l],
                p = a[l + 1];
              d === "style"
                ? Jf(o, p)
                : d === "dangerouslySetInnerHTML"
                ? Gf(o, p)
                : d === "children"
                ? io(o, p)
                : Za(o, d, p, u);
            }
            switch (s) {
              case "input":
                Xs(o, i);
                break;
              case "textarea":
                Qf(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? nr(o, !!i.multiple, x, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? nr(o, !!i.multiple, i.defaultValue, !0)
                      : nr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ho] = i;
          } catch (g) {
            le(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((pt(t, e), St(e), r & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          le(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (pt(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          uo(t.containerInfo);
        } catch (g) {
          le(e, e.return, g);
        }
      break;
    case 4:
      pt(t, e), St(e);
      break;
    case 13:
      pt(t, e),
        St(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ou = ue())),
        r & 4 && yd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (u = Oe) || d), pt(t, e), (Oe = u)) : pt(t, e),
        St(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (O = e, d = e.child; d !== null; ) {
            for (p = O = d; O !== null; ) {
              switch (((m = O), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, m, m.return);
                  break;
                case 1:
                  er(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      le(r, n, g);
                    }
                  }
                  break;
                case 5:
                  er(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    xd(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (O = x)) : xd(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = p.stateNode),
                      (a = p.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Yf("display", l)));
              } catch (g) {
                le(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (g) {
                le(e, e.return, g);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      pt(t, e), St(e), r & 4 && yd(e);
      break;
    case 21:
      break;
    default:
      pt(t, e), St(e);
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (C0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (io(o, ""), (r.flags &= -33));
          var i = gd(e);
          Na(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = gd(e);
          za(e, s, l);
          break;
        default:
          throw Error(z(161));
      }
    } catch (a) {
      le(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jg(e, t, n) {
  (O = e), z0(e);
}
function z0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || oi;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || Oe;
        s = oi;
        var u = Oe;
        if (((oi = l), (Oe = a) && !u))
          for (O = o; O !== null; )
            (l = O),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? wd(o)
                : a !== null
                ? ((a.return = l), (O = a))
                : wd(o);
        for (; i !== null; ) (O = i), z0(i), (i = i.sibling);
        (O = o), (oi = s), (Oe = u);
      }
      vd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : vd(e);
  }
}
function vd(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || gl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && td(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                td(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && uo(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        Oe || (t.flags & 512 && ja(t));
      } catch (m) {
        le(t, t.return, m);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function xd(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function wd(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gl(4, t);
          } catch (a) {
            le(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              le(t, o, a);
            }
          }
          var i = t.return;
          try {
            ja(t);
          } catch (a) {
            le(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ja(t);
          } catch (a) {
            le(t, l, a);
          }
      }
    } catch (a) {
      le(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (O = s);
      break;
    }
    O = t.return;
  }
}
var zg = Math.ceil,
  Ji = Ht.ReactCurrentDispatcher,
  Ru = Ht.ReactCurrentOwner,
  at = Ht.ReactCurrentBatchConfig,
  B = 0,
  Se = null,
  fe = null,
  ze = 0,
  qe = 0,
  tr = yn(0),
  ge = 0,
  So = null,
  On = 0,
  yl = 0,
  _u = 0,
  eo = null,
  Be = null,
  Ou = 0,
  yr = 1 / 0,
  Tt = null,
  Zi = !1,
  ba = null,
  cn = null,
  ii = !1,
  nn = null,
  el = 0,
  to = 0,
  Ra = null,
  wi = -1,
  Si = 0;
function Ae() {
  return B & 6 ? ue() : wi !== -1 ? wi : (wi = ue());
}
function dn(e) {
  return e.mode & 1
    ? B & 2 && ze !== 0
      ? ze & -ze
      : cg.transition !== null
      ? (Si === 0 && (Si = cp()), Si)
      : ((e = H),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yp(e.type))),
        e)
    : 1;
}
function xt(e, t, n, r) {
  if (50 < to) throw ((to = 0), (Ra = null), Error(z(185)));
  Ro(e, n, r),
    (!(B & 2) || e !== Se) &&
      (e === Se && (!(B & 2) && (yl |= n), ge === 4 && en(e, ze)),
      Ke(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((yr = ue() + 500), pl && vn()));
}
function Ke(e, t) {
  var n = e.callbackNode;
  c1(e, t);
  var r = Ii(e, e === Se ? ze : 0);
  if (r === 0)
    n !== null && bc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bc(n), t === 1))
      e.tag === 0 ? ug(Sd.bind(null, e)) : Ap(Sd.bind(null, e)),
        ig(function () {
          !(B & 6) && vn();
        }),
        (n = null);
    else {
      switch (dp(r)) {
        case 1:
          n = ou;
          break;
        case 4:
          n = ap;
          break;
        case 16:
          n = Ai;
          break;
        case 536870912:
          n = up;
          break;
        default:
          n = Ai;
      }
      n = M0(n, N0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function N0(e, t) {
  if (((wi = -1), (Si = 0), B & 6)) throw Error(z(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = Ii(e, e === Se ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
  else {
    t = r;
    var o = B;
    B |= 2;
    var i = R0();
    (Se !== e || ze !== t) && ((Tt = null), (yr = ue() + 500), jn(e, t));
    do
      try {
        Rg();
        break;
      } catch (s) {
        b0(e, s);
      }
    while (1);
    yu(),
      (Ji.current = i),
      (B = o),
      fe !== null ? (t = 0) : ((Se = null), (ze = 0), (t = ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ra(e)), o !== 0 && ((r = o), (t = _a(e, o)))), t === 1)
    )
      throw ((n = So), jn(e, 0), en(e, r), Ke(e, ue()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Ng(o) &&
          ((t = tl(e, r)),
          t === 2 && ((i = ra(e)), i !== 0 && ((r = i), (t = _a(e, i)))),
          t === 1))
      )
        throw ((n = So), jn(e, 0), en(e, r), Ke(e, ue()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          Sn(e, Be, Tt);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((t = Ou + 500 - ue()), 10 < t))
          ) {
            if (Ii(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = da(Sn.bind(null, e, Be, Tt), t);
            break;
          }
          Sn(e, Be, Tt);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - vt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ue() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * zg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = da(Sn.bind(null, e, Be, Tt), r);
            break;
          }
          Sn(e, Be, Tt);
          break;
        case 5:
          Sn(e, Be, Tt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Ke(e, ue()), e.callbackNode === n ? N0.bind(null, e) : null;
}
function _a(e, t) {
  var n = eo;
  return (
    e.current.memoizedState.isDehydrated && (jn(e, t).flags |= 256),
    (e = tl(e, t)),
    e !== 2 && ((t = Be), (Be = n), t !== null && Oa(t)),
    e
  );
}
function Oa(e) {
  Be === null ? (Be = e) : Be.push.apply(Be, e);
}
function Ng(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!wt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function en(e, t) {
  for (
    t &= ~_u,
      t &= ~yl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Sd(e) {
  if (B & 6) throw Error(z(327));
  sr();
  var t = Ii(e, 0);
  if (!(t & 1)) return Ke(e, ue()), null;
  var n = tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ra(e);
    r !== 0 && ((t = r), (n = _a(e, r)));
  }
  if (n === 1) throw ((n = So), jn(e, 0), en(e, t), Ke(e, ue()), n);
  if (n === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Sn(e, Be, Tt),
    Ke(e, ue()),
    null
  );
}
function Tu(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((yr = ue() + 500), pl && vn());
  }
}
function Tn(e) {
  nn !== null && nn.tag === 0 && !(B & 6) && sr();
  var t = B;
  B |= 1;
  var n = at.transition,
    r = H;
  try {
    if (((at.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (at.transition = n), (B = t), !(B & 6) && vn();
  }
}
function $u() {
  (qe = tr.current), G(tr);
}
function jn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), og(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n;
      switch ((mu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ui();
          break;
        case 3:
          hr(), G(We), G(Te), Eu();
          break;
        case 5:
          ku(r);
          break;
        case 4:
          hr();
          break;
        case 13:
          G(te);
          break;
        case 19:
          G(te);
          break;
        case 10:
          vu(r.type._context);
          break;
        case 22:
        case 23:
          $u();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (fe = e = fn(e.current, null)),
    (ze = qe = t),
    (ge = 0),
    (So = null),
    (_u = yl = On = 0),
    (Be = eo = null),
    En !== null)
  ) {
    for (t = 0; t < En.length; t++)
      if (((n = En[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    En = null;
  }
  return e;
}
function b0(e, t) {
  do {
    var n = fe;
    try {
      if ((yu(), (yi.current = Yi), Gi)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Gi = !1;
      }
      if (
        ((_n = 0),
        (we = he = ne = null),
        (Jr = !1),
        (vo = 0),
        (Ru.current = null),
        n === null || n.return === null)
      ) {
        (ge = 1), (So = t), (fe = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = ze),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = s,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = ad(l);
          if (x !== null) {
            (x.flags &= -257),
              ud(x, l, s, i, t),
              x.mode & 1 && sd(i, u, t),
              (t = x),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              sd(i, u, t), Mu();
              break e;
            }
            a = Error(z(426));
          }
        } else if (J && s.mode & 1) {
          var k = ad(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              ud(k, l, s, i, t),
              hu(gr(a, s));
            break e;
          }
        }
        (i = a = gr(a, s)),
          ge !== 4 && (ge = 2),
          eo === null ? (eo = [i]) : eo.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = f0(i, a, t);
              ed(i, h);
              break e;
            case 1:
              s = a;
              var f = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (cn === null || !cn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = p0(i, s, t);
                ed(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      O0(n);
    } catch (P) {
      (t = P), fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function R0() {
  var e = Ji.current;
  return (Ji.current = Yi), e === null ? Yi : e;
}
function Mu() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    Se === null || (!(On & 268435455) && !(yl & 268435455)) || en(Se, ze);
}
function tl(e, t) {
  var n = B;
  B |= 2;
  var r = R0();
  (Se !== e || ze !== t) && ((Tt = null), jn(e, t));
  do
    try {
      bg();
      break;
    } catch (o) {
      b0(e, o);
    }
  while (1);
  if ((yu(), (B = n), (Ji.current = r), fe !== null)) throw Error(z(261));
  return (Se = null), (ze = 0), ge;
}
function bg() {
  for (; fe !== null; ) _0(fe);
}
function Rg() {
  for (; fe !== null && !t1(); ) _0(fe);
}
function _0(e) {
  var t = $0(e.alternate, e, qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? O0(e) : (fe = t),
    (Ru.current = null);
}
function O0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Eg(n, t)), n !== null)) {
        (n.flags &= 32767), (fe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (fe = null);
        return;
      }
    } else if (((n = kg(n, t, qe)), n !== null)) {
      fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function Sn(e, t, n) {
  var r = H,
    o = at.transition;
  try {
    (at.transition = null), (H = 1), _g(e, t, n, r);
  } finally {
    (at.transition = o), (H = r);
  }
  return null;
}
function _g(e, t, n, r) {
  do sr();
  while (nn !== null);
  if (B & 6) throw Error(z(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (d1(e, i),
    e === Se && ((fe = Se = null), (ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ii ||
      ((ii = !0),
      M0(Ai, function () {
        return sr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = at.transition), (at.transition = null);
    var l = H;
    H = 1;
    var s = B;
    (B |= 4),
      (Ru.current = null),
      Pg(e, n),
      j0(n, e),
      Y1(ua),
      (Li = !!aa),
      (ua = aa = null),
      (e.current = n),
      jg(n),
      n1(),
      (B = s),
      (H = l),
      (at.transition = i);
  } else e.current = n;
  if (
    (ii && ((ii = !1), (nn = e), (el = o)),
    (i = e.pendingLanes),
    i === 0 && (cn = null),
    i1(n.stateNode),
    Ke(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Zi) throw ((Zi = !1), (e = ba), (ba = null), e);
  return (
    el & 1 && e.tag !== 0 && sr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ra ? to++ : ((to = 0), (Ra = e))) : (to = 0),
    vn(),
    null
  );
}
function sr() {
  if (nn !== null) {
    var e = dp(el),
      t = at.transition,
      n = H;
    try {
      if (((at.transition = null), (H = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (el = 0), B & 6)) throw Error(z(331));
        var o = B;
        for (B |= 4, O = e.current; O !== null; ) {
          var i = O,
            l = i.child;
          if (O.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (O = u; O !== null; ) {
                  var d = O;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zr(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (O = p);
                  else
                    for (; O !== null; ) {
                      d = O;
                      var m = d.sibling,
                        x = d.return;
                      if ((E0(d), d === u)) {
                        O = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = x), (O = m);
                        break;
                      }
                      O = x;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var k = g.sibling;
                    (g.sibling = null), (g = k);
                  } while (g !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (O = l);
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zr(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (O = h);
                break e;
              }
              O = i.return;
            }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          l = O;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (O = v);
          else
            e: for (l = f; O !== null; ) {
              if (((s = O), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gl(9, s);
                  }
                } catch (P) {
                  le(s, s.return, P);
                }
              if (s === l) {
                O = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (O = S);
                break e;
              }
              O = s.return;
            }
        }
        if (
          ((B = o), vn(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(al, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (at.transition = t);
    }
  }
  return !1;
}
function kd(e, t, n) {
  (t = gr(n, t)),
    (t = f0(e, t, 1)),
    (e = un(e, t, 1)),
    (t = Ae()),
    e !== null && (Ro(e, 1, t), Ke(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) kd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = gr(n, e)),
            (e = p0(t, e, 1)),
            (t = un(t, e, 1)),
            (e = Ae()),
            t !== null && (Ro(t, 1, e), Ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Og(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (ze & n) === n &&
      (ge === 4 || (ge === 3 && (ze & 130023424) === ze && 500 > ue() - Ou)
        ? jn(e, 0)
        : (_u |= n)),
    Ke(e, t);
}
function T0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = qo), (qo <<= 1), !(qo & 130023424) && (qo = 4194304))
      : (t = 1));
  var n = Ae();
  (e = Ut(e, t)), e !== null && (Ro(e, t, n), Ke(e, n));
}
function Tg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), T0(e, n);
}
function $g(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  r !== null && r.delete(t), T0(e, n);
}
var $0;
$0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) Ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ve = !1), Sg(e, t, n);
      Ve = !!(e.flags & 131072);
    }
  else (Ve = !1), J && t.flags & 1048576 && Ip(t, Hi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      xi(e, t), (e = t.pendingProps);
      var o = fr(t, Te.current);
      lr(t, n), (o = Pu(null, t, r, e, o, n));
      var i = ju();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((i = !0), Vi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            wu(t),
            (o.updater = ml),
            (t.stateNode = o),
            (o._reactInternals = t),
            va(t, r, e, n),
            (t = Sa(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && pu(t), Me(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (xi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ag(r)),
          (e = mt(r, e)),
          o)
        ) {
          case 0:
            t = wa(null, t, r, e, n);
            break e;
          case 1:
            t = fd(null, t, r, e, n);
            break e;
          case 11:
            t = cd(null, t, r, e, n);
            break e;
          case 14:
            t = dd(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(z(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        wa(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        fd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((y0(t), e === null)) throw Error(z(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Bp(e, t),
          Qi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = gr(Error(z(423)), t)), (t = pd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = gr(Error(z(424)), t)), (t = pd(e, t, r, n, o));
            break e;
          } else
            for (
              Ye = an(t.stateNode.containerInfo.firstChild),
                Je = t,
                J = !0,
                yt = null,
                n = Hp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pr(), r === o)) {
            t = Vt(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Kp(t),
        e === null && ha(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        ca(r, o) ? (l = null) : i !== null && ca(r, i) && (t.flags |= 32),
        g0(e, t),
        Me(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ha(t), null;
    case 13:
      return v0(e, t, n);
    case 4:
      return (
        Su(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mr(t, null, r, n)) : Me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        cd(e, t, r, o, n)
      );
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          Q(Ki, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (wt(i.value, l)) {
            if (i.children === o.children && !We.current) {
              t = Vt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = It(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      ga(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(z(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  ga(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Me(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        lr(t, n),
        (o = ct(o)),
        (r = r(o)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = mt(r, t.pendingProps)),
        (o = mt(r.type, o)),
        dd(e, t, r, o, n)
      );
    case 15:
      return m0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        xi(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), Vi(t)) : (e = !1),
        lr(t, n),
        Vp(t, r, o),
        va(t, r, o, n),
        Sa(null, t, r, !0, e, n)
      );
    case 19:
      return x0(e, t, n);
    case 22:
      return h0(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function M0(e, t) {
  return sp(e, t);
}
function Mg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function st(e, t, n, r) {
  return new Mg(e, t, n, r);
}
function Au(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ag(e) {
  if (typeof e == "function") return Au(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === tu)) return 11;
    if (e === nu) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ki(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Au(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Hn:
        return zn(n.children, o, i, t);
      case eu:
        (l = 8), (o |= 8);
        break;
      case Us:
        return (
          (e = st(12, n, t, o | 2)), (e.elementType = Us), (e.lanes = i), e
        );
      case Vs:
        return (e = st(13, n, t, o)), (e.elementType = Vs), (e.lanes = i), e;
      case Ws:
        return (e = st(19, n, t, o)), (e.elementType = Ws), (e.lanes = i), e;
      case Wf:
        return vl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Uf:
              l = 10;
              break e;
            case Vf:
              l = 9;
              break e;
            case tu:
              l = 11;
              break e;
            case nu:
              l = 14;
              break e;
            case Yt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function zn(e, t, n, r) {
  return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function vl(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = Wf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bs(e, t, n) {
  return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function Rs(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ig(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = cs(0)),
    (this.expirationTimes = cs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Iu(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new Ig(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = st(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wu(i),
    e
  );
}
function Lg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function A0(e) {
  if (!e) return hn;
  e = e._reactInternals;
  e: {
    if (An(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return Mp(e, n, t);
  }
  return t;
}
function I0(e, t, n, r, o, i, l, s, a) {
  return (
    (e = Iu(n, r, !0, e, o, i, l, s, a)),
    (e.context = A0(null)),
    (n = e.current),
    (r = Ae()),
    (o = dn(n)),
    (i = It(r, o)),
    (i.callback = t ?? null),
    un(n, i, o),
    (e.current.lanes = o),
    Ro(e, o, r),
    Ke(e, r),
    e
  );
}
function xl(e, t, n, r) {
  var o = t.current,
    i = Ae(),
    l = dn(o);
  return (
    (n = A0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = It(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(o, t, l)),
    e !== null && (xt(e, o, l, i), gi(e, o, l)),
    l
  );
}
function nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ed(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Lu(e, t) {
  Ed(e, t), (e = e.alternate) && Ed(e, t);
}
function Fg() {
  return null;
}
var L0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fu(e) {
  this._internalRoot = e;
}
wl.prototype.render = Fu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  xl(e, t, null, null);
};
wl.prototype.unmount = Fu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function () {
      xl(null, e, null, null);
    }),
      (t[Bt] = null);
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = mp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++);
    Zt.splice(n, 0, e), n === 0 && gp(e);
  }
};
function Du(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cd() {}
function Dg(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = nl(l);
        i.call(u);
      };
    }
    var l = I0(t, r, e, 0, null, !1, !1, "", Cd);
    return (
      (e._reactRootContainer = l),
      (e[Bt] = l.current),
      po(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = nl(a);
      s.call(u);
    };
  }
  var a = Iu(e, 0, !1, null, null, !1, !1, "", Cd);
  return (
    (e._reactRootContainer = a),
    (e[Bt] = a.current),
    po(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      xl(t, a, n, r);
    }),
    a
  );
}
function kl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = nl(l);
        s.call(a);
      };
    }
    xl(t, l, e, o);
  } else l = Dg(n, t, e, o, r);
  return nl(l);
}
fp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vr(t.pendingLanes);
        n !== 0 &&
          (iu(t, n | 1), Ke(t, ue()), !(B & 6) && ((yr = ue() + 500), vn()));
      }
      break;
    case 13:
      Tn(function () {
        var r = Ut(e, 1);
        if (r !== null) {
          var o = Ae();
          xt(r, e, 1, o);
        }
      }),
        Lu(e, 1);
  }
};
lu = function (e) {
  if (e.tag === 13) {
    var t = Ut(e, 134217728);
    if (t !== null) {
      var n = Ae();
      xt(t, e, 134217728, n);
    }
    Lu(e, 134217728);
  }
};
pp = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = Ut(e, t);
    if (n !== null) {
      var r = Ae();
      xt(n, e, t, r);
    }
    Lu(e, t);
  }
};
mp = function () {
  return H;
};
hp = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
ea = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Xs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = fl(r);
            if (!o) throw Error(z(90));
            Kf(r), Xs(r, o);
          }
        }
      }
      break;
    case "textarea":
      Qf(e, n);
      break;
    case "select":
      (t = n.value), t != null && nr(e, !!n.multiple, t, !1);
  }
};
tp = Tu;
np = Tn;
var Bg = { usingClientEntryPoint: !1, Events: [Oo, qn, fl, Zf, ep, Tu] },
  Ar = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ug = {
    bundleType: Ar.bundleType,
    version: Ar.version,
    rendererPackageName: Ar.rendererPackageName,
    rendererConfig: Ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ip(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ar.findFiberByHostInstance || Fg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!li.isDisabled && li.supportsFiber)
    try {
      (al = li.inject(Ug)), (Nt = li);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bg;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Du(t)) throw Error(z(200));
  return Lg(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!Du(e)) throw Error(z(299));
  var n = !1,
    r = "",
    o = L0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Iu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Bt] = t.current),
    po(e.nodeType === 8 ? e.parentNode : e),
    new Fu(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = ip(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Tn(e);
};
tt.hydrate = function (e, t, n) {
  if (!Sl(t)) throw Error(z(200));
  return kl(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!Du(e)) throw Error(z(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = L0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = I0(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Bt] = t.current),
    po(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new wl(t);
};
tt.render = function (e, t, n) {
  if (!Sl(t)) throw Error(z(200));
  return kl(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!Sl(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (Tn(function () {
        kl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Bt] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Tu;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Sl(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return kl(e, t, n, !1, r);
};
tt.version = "18.2.0-next-9e3b772b8-20220608";
function F0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F0);
    } catch (e) {
      console.error(e);
    }
}
F0(), (If.exports = tt);
var Vg = If.exports,
  Pd = Vg;
(Ds.createRoot = Pd.createRoot), (Ds.hydrateRoot = Pd.hydrateRoot);
var D0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  jd = Ue.createContext && Ue.createContext(D0),
  pn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (pn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        pn.apply(this, arguments)
      );
    },
  Wg =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
function B0(e) {
  return (
    e &&
    e.map(function (t, n) {
      return Ue.createElement(t.tag, pn({ key: n }, t.attr), B0(t.child));
    })
  );
}
function Kt(e) {
  return function (t) {
    return Ue.createElement(Hg, pn({ attr: pn({}, e.attr) }, t), B0(e.child));
  };
}
function Hg(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      i = e.title,
      l = Wg(e, ["attr", "size", "title"]),
      s = o || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      Ue.createElement(
        "svg",
        pn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          l,
          {
            className: a,
            style: pn(pn({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && Ue.createElement("title", null, i),
        e.children
      )
    );
  };
  return jd !== void 0
    ? Ue.createElement(jd.Consumer, null, function (n) {
        return t(n);
      })
    : t(D0);
}
function Kg(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
        },
      },
    ],
  })(e);
}
function Xg(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z",
        },
      },
    ],
  })(e);
}
function Qg(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  })(e);
}
function U0(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z",
        },
      },
    ],
  })(e);
}
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ko() {
  return (
    (ko = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ko.apply(this, arguments)
  );
}
var rn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(rn || (rn = {}));
const zd = "popstate";
function qg(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: s } = r.location;
    return Ta(
      "",
      { pathname: i, search: l, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : V0(o);
  }
  return Yg(t, n, null, e);
}
function ye(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Bu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Gg() {
  return Math.random().toString(36).substr(2, 8);
}
function Nd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ta(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ko(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Cr(t) : t,
      { state: n, key: (t && t.key) || r || Gg() }
    )
  );
}
function V0(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Cr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Yg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    s = rn.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), l.replaceState(ko({}, l.state, { idx: u }), ""));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function p() {
    s = rn.Pop;
    let k = d(),
      h = k == null ? null : k - u;
    (u = k), a && a({ action: s, location: g.location, delta: h });
  }
  function m(k, h) {
    s = rn.Push;
    let f = Ta(g.location, k, h);
    n && n(f, k), (u = d() + 1);
    let v = Nd(f, u),
      S = g.createHref(f);
    try {
      l.pushState(v, "", S);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      o.location.assign(S);
    }
    i && a && a({ action: s, location: g.location, delta: 1 });
  }
  function x(k, h) {
    s = rn.Replace;
    let f = Ta(g.location, k, h);
    n && n(f, k), (u = d());
    let v = Nd(f, u),
      S = g.createHref(f);
    l.replaceState(v, "", S),
      i && a && a({ action: s, location: g.location, delta: 0 });
  }
  function y(k) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      f = typeof k == "string" ? k : V0(k);
    return (
      ye(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, h)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(o, l);
    },
    listen(k) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(zd, p),
        (a = k),
        () => {
          o.removeEventListener(zd, p), (a = null);
        }
      );
    },
    createHref(k) {
      return t(o, k);
    },
    createURL: y,
    encodeLocation(k) {
      let h = y(k);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: m,
    replace: x,
    go(k) {
      return l.go(k);
    },
  };
  return g;
}
var bd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(bd || (bd = {}));
function Jg(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Cr(t) : t,
    o = K0(r.pathname || "/", n);
  if (o == null) return null;
  let i = W0(e);
  Zg(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s) l = ay(i[s], dy(o));
  return l;
}
function W0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (ye(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Nn([r, a.relativePath]),
      d = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (ye(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      W0(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: ly(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, l) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l);
      else for (let a of H0(i.path)) o(i, l, a);
    }),
    t
  );
}
function H0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = H0(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Zg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : sy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ey = /^:\w+$/,
  ty = 3,
  ny = 2,
  ry = 1,
  oy = 10,
  iy = -2,
  Rd = (e) => e === "*";
function ly(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Rd) && (r += iy),
    t && (r += ny),
    n
      .filter((o) => !Rd(o))
      .reduce((o, i) => o + (ey.test(i) ? ty : i === "" ? ry : oy), r)
  );
}
function sy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ay(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      d = uy(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let p = s.route;
    i.push({
      params: r,
      pathname: Nn([o, d.pathname]),
      pathnameBase: yy(Nn([o, d.pathnameBase])),
      route: p,
    }),
      d.pathnameBase !== "/" && (o = Nn([o, d.pathnameBase]));
  }
  return i;
}
function uy(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = cy(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, d, p) => {
      if (d === "*") {
        let m = s[p] || "";
        l = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (u[d] = fy(s[p] || "", d)), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function cy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Bu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (l, s) => (r.push(s), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function dy(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Bu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function fy(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Bu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function K0(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function py(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Cr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : my(n, t)) : t,
    search: vy(r),
    hash: xy(o),
  };
}
function my(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function _s(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function hy(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function gy(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Cr(e))
    : ((o = ko({}, e)),
      ye(
        !o.pathname || !o.pathname.includes("?"),
        _s("?", "pathname", "search", o)
      ),
      ye(
        !o.pathname || !o.pathname.includes("#"),
        _s("#", "pathname", "hash", o)
      ),
      ye(!o.search || !o.search.includes("#"), _s("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    s;
  if (r || l == null) s = n;
  else {
    let p = t.length - 1;
    if (l.startsWith("..")) {
      let m = l.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      o.pathname = m.join("/");
    }
    s = p >= 0 ? t[p] : "/";
  }
  let a = py(o, s),
    u = l && l !== "/" && l.endsWith("/"),
    d = (i || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
}
const Nn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  yy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  vy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  xy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function wy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const X0 = ["post", "put", "patch", "delete"];
new Set(X0);
const Sy = ["get", ...X0];
new Set(Sy);
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rl() {
  return (
    (rl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rl.apply(this, arguments)
  );
}
const Uu = w.createContext(null),
  ky = w.createContext(null),
  El = w.createContext(null),
  Cl = w.createContext(null),
  Pr = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Q0 = w.createContext(null);
function Pl() {
  return w.useContext(Cl) != null;
}
function q0() {
  return Pl() || ye(!1), w.useContext(Cl).location;
}
function G0(e) {
  w.useContext(El).static || w.useLayoutEffect(e);
}
function jl() {
  let { isDataRoute: e } = w.useContext(Pr);
  return e ? My() : Ey();
}
function Ey() {
  Pl() || ye(!1);
  let e = w.useContext(Uu),
    { basename: t, navigator: n } = w.useContext(El),
    { matches: r } = w.useContext(Pr),
    { pathname: o } = q0(),
    i = JSON.stringify(hy(r).map((a) => a.pathnameBase)),
    l = w.useRef(!1);
  return (
    G0(() => {
      l.current = !0;
    }),
    w.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let d = gy(a, JSON.parse(i), o, u.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Nn([t, d.pathname])),
          (u.replace ? n.replace : n.push)(d, u.state, u);
      },
      [t, n, i, o, e]
    )
  );
}
function Cy(e, t) {
  return Py(e, t);
}
function Py(e, t, n) {
  Pl() || ye(!1);
  let { navigator: r } = w.useContext(El),
    { matches: o } = w.useContext(Pr),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let a = q0(),
    u;
  if (t) {
    var d;
    let g = typeof t == "string" ? Cr(t) : t;
    s === "/" || ((d = g.pathname) != null && d.startsWith(s)) || ye(!1),
      (u = g);
  } else u = a;
  let p = u.pathname || "/",
    m = s === "/" ? p : p.slice(s.length) || "/",
    x = Jg(e, { pathname: m }),
    y = Ry(
      x &&
        x.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, l, g.params),
            pathname: Nn([
              s,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? s
                : Nn([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && y
    ? w.createElement(
        Cl.Provider,
        {
          value: {
            location: rl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: rn.Pop,
          },
        },
        y
      )
    : y;
}
function jy() {
  let e = $y(),
    t = wy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: o }, n) : null,
    i
  );
}
const zy = w.createElement(jy, null);
class Ny extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? w.createElement(
          Pr.Provider,
          { value: this.props.routeContext },
          w.createElement(Q0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function by(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = w.useContext(Uu);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Pr.Provider, { value: t }, r)
  );
}
function Ry(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let s = i.findIndex(
      (a) => a.route.id && (l == null ? void 0 : l[a.route.id])
    );
    s >= 0 || ye(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
  }
  return i.reduceRight((s, a, u) => {
    let d = a.route.id ? (l == null ? void 0 : l[a.route.id]) : null,
      p = null;
    n && (p = a.route.errorElement || zy);
    let m = t.concat(i.slice(0, u + 1)),
      x = () => {
        let y;
        return (
          d
            ? (y = p)
            : a.route.Component
            ? (y = w.createElement(a.route.Component, null))
            : a.route.element
            ? (y = a.route.element)
            : (y = s),
          w.createElement(by, {
            match: a,
            routeContext: { outlet: s, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? w.createElement(Ny, {
          location: n.location,
          revalidation: n.revalidation,
          component: p,
          error: d,
          children: x(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var $a;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})($a || ($a = {}));
var Eo;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(Eo || (Eo = {}));
function _y(e) {
  let t = w.useContext(Uu);
  return t || ye(!1), t;
}
function Oy(e) {
  let t = w.useContext(ky);
  return t || ye(!1), t;
}
function Ty(e) {
  let t = w.useContext(Pr);
  return t || ye(!1), t;
}
function Y0(e) {
  let t = Ty(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ye(!1), n.route.id;
}
function $y() {
  var e;
  let t = w.useContext(Q0),
    n = Oy(Eo.UseRouteError),
    r = Y0(Eo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function My() {
  let { router: e } = _y($a.UseNavigateStable),
    t = Y0(Eo.UseNavigateStable),
    n = w.useRef(!1);
  return (
    G0(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, rl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Hr(e) {
  ye(!1);
}
function Ay(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = rn.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  Pl() && ye(!1);
  let s = t.replace(/^\/*/, "/"),
    a = w.useMemo(() => ({ basename: s, navigator: i, static: l }), [s, i, l]);
  typeof r == "string" && (r = Cr(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: p = "",
      state: m = null,
      key: x = "default",
    } = r,
    y = w.useMemo(() => {
      let g = K0(u, s);
      return g == null
        ? null
        : {
            location: { pathname: g, search: d, hash: p, state: m, key: x },
            navigationType: o,
          };
    }, [s, u, d, p, m, x, o]);
  return y == null
    ? null
    : w.createElement(
        El.Provider,
        { value: a },
        w.createElement(Cl.Provider, { children: n, value: y })
      );
}
function Iy(e) {
  let { children: t, location: n } = e;
  return Cy(Ma(t), n);
}
var _d;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(_d || (_d = {}));
new Promise(() => {});
function Ma(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, o) => {
      if (!w.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === w.Fragment) {
        n.push.apply(n, Ma(r.props.children, i));
        return;
      }
      r.type !== Hr && ye(!1), !r.props.index || !r.props.children || ye(!1);
      let l = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = Ma(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Ly = "startTransition",
  Od = Oi[Ly];
function Fy(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = w.useRef();
  i.current == null && (i.current = qg({ window: o, v5Compat: !0 }));
  let l = i.current,
    [s, a] = w.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    d = w.useCallback(
      (p) => {
        u && Od ? Od(() => a(p)) : a(p);
      },
      [a, u]
    );
  return (
    w.useLayoutEffect(() => l.listen(d), [l, d]),
    w.createElement(Ay, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
    })
  );
}
var Td;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Td || (Td = {}));
var $d;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})($d || ($d = {}));
const Dy = "/assets/navlogo-26693b8d.png";
function By() {
  const [e, t] = w.useState(!1),
    n = jl(),
    r = w.useRef(null),
    o = () => {
      t(!e);
    },
    i = () => {
      n("/activation"), t(!1);
    },
    l = () => {
      t(!1), n("/");
    },
    s = () => {
      n("/"), t(!1), window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    w.useEffect(() => {
      const a = (u) => {
        r.current && !r.current.contains(u.target) && t(!1);
      };
      return (
        document.addEventListener("mousedown", a),
        () => {
          document.removeEventListener("mousedown", a);
        }
      );
    }, []),
    c.jsx(c.Fragment, {
      children: c.jsxs("nav", {
        className: "sticky top-0 bg-white ",
        children: [
          c.jsxs("div", {
            className:
              "flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black",
            children: [
              c.jsx("h1", {
                className: "text-3xl font-bold text-[black]",
                children: c.jsx("img", {
                  src: Dy,
                  className: "w-16 cursor-pointer",
                  onClick: () => s(),
                }),
              }),
              c.jsxs("ul", {
                className: "hidden md:flex items-center space-x-4 md:space-x-8",
                children: [
                  c.jsx("li", {
                    className: "pl-4 pr-4 cursor-pointer",
                    onClick: () => s(),
                    children: "Home",
                  }),
                  c.jsx("li", {
                    className: "pl-4 pr-4 cursor-pointer",
                    onClick: () => l(),
                    children: c.jsx("a", {
                      href: "/#services",
                      children: "Services",
                    }),
                  }),
                  c.jsx("li", {
                    className: "pl-4 pr-4 cursor-pointer",
                    onClick: () => l(),
                    children: c.jsx("a", {
                      href: "/#about",
                      children: "About us",
                    }),
                  }),
                  c.jsx("li", {
                    className: "pl-4 pr-4 cursor-pointer",
                    onClick: () => l(),
                    children: c.jsx("a", {
                      href: "/#contact",
                      children: "Contact us",
                    }),
                  }),
                  c.jsx("li", {
                    children: c.jsx("button", {
                      className:
                        "pl-4 pr-4 bg-[#FDA216] hover:bg-[#6E4294] text-white font-bold rounded-3xl h-10",
                      onClick: i,
                      children: "Get Activation Key",
                    }),
                  }),
                ],
              }),
              c.jsx("div", {
                className: "md:hidden",
                children: c.jsx("button", {
                  onClick: o,
                  children: e ? c.jsx(Kg, {}) : c.jsx(Qg, {}),
                }),
              }),
            ],
          }),
          e &&
            c.jsx("div", {
              ref: r,
              className: "md:hidden",
              children: c.jsxs("ul", {
                className:
                  "md:hidden flex flex-col items-center space-y-4 mt-2 bg-transparent",
                children: [
                  c.jsx("li", {
                    className:
                      "pl-4 pr-4 border-b border-gray-600 cursor-pointer",
                    onClick: () => s(),
                    children: "Home",
                  }),
                  c.jsx("li", {
                    className:
                      "pl-4 pr-4 border-b border-gray-600 cursor-pointer",
                    onClick: () => l(),
                    children: c.jsx("a", {
                      href: "/#services",
                      children: "Services",
                    }),
                  }),
                  c.jsx("li", {
                    className:
                      "pl-4 pr-4 border-b border-gray-600 cursor-pointer",
                    onClick: () => l(),
                    children: c.jsx("a", {
                      href: "/#about",
                      children: "About us",
                    }),
                  }),
                  c.jsx("li", {
                    className:
                      "pl-4 pr-4 border-b border-gray-600 cursor-pointer",
                    onClick: () => l(),
                    children: c.jsx("a", {
                      href: "/#contact",
                      children: "Contact us",
                    }),
                  }),
                  c.jsx("li", {
                    children: c.jsx("button", {
                      className:
                        "pl-4 pr-4 bg-[#FDA216] hover:bg-[#6E4294] text-white font-bold rounded-3xl h-10",
                      onClick: i,
                      children: "Get Activation Key",
                    }),
                  }),
                ],
              }),
            }),
        ],
      }),
    })
  );
}
const Uy = { black: "#000", white: "#fff" },
  Co = Uy,
  Vy = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Ln = Vy,
  Wy = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Fn = Wy,
  Hy = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Dn = Hy,
  Ky = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Bn = Ky,
  Xy = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Un = Xy,
  Qy = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Ir = Qy,
  qy = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  Gy = qy;
function $() {
  return (
    ($ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $.apply(this, arguments)
  );
}
function Vn(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function J0(e) {
  if (!Vn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = J0(e[n]);
    }),
    t
  );
}
function Lt(e, t, n = { clone: !0 }) {
  const r = n.clone ? $({}, e) : e;
  return (
    Vn(e) &&
      Vn(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (Vn(t[o]) && o in e && Vn(e[o])
            ? (r[o] = Lt(e[o], t[o], n))
            : n.clone
            ? (r[o] = Vn(t[o]) ? J0(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function vr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function Z(e) {
  if (typeof e != "string") throw new Error(vr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Yy(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function Jy(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function Zy(e, t) {
  return () => null;
}
function e2(e, t) {
  return w.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function Z0(e) {
  return (e && e.ownerDocument) || document;
}
function t2(e) {
  return Z0(e).defaultView || window;
}
function n2(e, t) {
  return () => null;
}
function em(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const r2 = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  tm = r2;
let Md = 0;
function o2(e) {
  const [t, n] = w.useState(e),
    r = e || t;
  return (
    w.useEffect(() => {
      t == null && ((Md += 1), n(`mui-${Md}`));
    }, [t]),
    r
  );
}
const Ad = Oi["useId".toString()];
function i2(e) {
  if (Ad !== void 0) {
    const t = Ad();
    return e ?? t;
  }
  return o2(e);
}
function l2(e, t, n, r, o) {
  return null;
}
function s2({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = w.useRef(e !== void 0),
    [i, l] = w.useState(t),
    s = o ? e : i,
    a = w.useCallback((u) => {
      o || l(u);
    }, []);
  return [s, a];
}
function Kr(e) {
  const t = w.useRef(e);
  return (
    tm(() => {
      t.current = e;
    }),
    w.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function Aa(...e) {
  return w.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              em(n, t);
            });
          },
    e
  );
}
let zl = !0,
  Ia = !1,
  Id;
const a2 = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0,
};
function u2(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && a2[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function c2(e) {
  e.metaKey || e.altKey || e.ctrlKey || (zl = !0);
}
function Os() {
  zl = !1;
}
function d2() {
  this.visibilityState === "hidden" && Ia && (zl = !0);
}
function f2(e) {
  e.addEventListener("keydown", c2, !0),
    e.addEventListener("mousedown", Os, !0),
    e.addEventListener("pointerdown", Os, !0),
    e.addEventListener("touchstart", Os, !0),
    e.addEventListener("visibilitychange", d2, !0);
}
function p2(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return zl || u2(t);
}
function nm() {
  const e = w.useCallback((o) => {
      o != null && f2(o.ownerDocument);
    }, []),
    t = w.useRef(!1);
  function n() {
    return t.current
      ? ((Ia = !0),
        window.clearTimeout(Id),
        (Id = window.setTimeout(() => {
          Ia = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return p2(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function Vu(e, t) {
  const n = $({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = $({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = $({}, i)),
              Object.keys(o).forEach((l) => {
                n[r][l] = Vu(o[l], i[l]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function Nl(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, l) => {
          if (l) {
            const s = t(l);
            s !== "" && i.push(s), n && n[l] && i.push(n[l]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const Ld = (e) => e,
  m2 = () => {
    let e = Ld;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Ld;
      },
    };
  },
  h2 = m2(),
  rm = h2,
  g2 = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    readOnly: "readOnly",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    required: "required",
    selected: "selected",
  };
function $o(e, t, n = "Mui") {
  const r = g2[t];
  return r ? `${n}-${r}` : `${rm.generate(e)}-${t}`;
}
function Mo(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = $o(e, o, n);
    }),
    r
  );
}
const om = "$$material";
function Qe(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function im(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var y2 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  v2 = im(function (e) {
    return (
      y2.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function x2(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function w2(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var S2 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(w2(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = x2(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  _e = "-ms-",
  ol = "-moz-",
  U = "-webkit-",
  lm = "comm",
  Wu = "rule",
  Hu = "decl",
  k2 = "@import",
  sm = "@keyframes",
  E2 = "@layer",
  C2 = Math.abs,
  bl = String.fromCharCode,
  P2 = Object.assign;
function j2(e, t) {
  return je(e, 0) ^ 45
    ? (((((((t << 2) ^ je(e, 0)) << 2) ^ je(e, 1)) << 2) ^ je(e, 2)) << 2) ^
        je(e, 3)
    : 0;
}
function am(e) {
  return e.trim();
}
function z2(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function V(e, t, n) {
  return e.replace(t, n);
}
function La(e, t) {
  return e.indexOf(t);
}
function je(e, t) {
  return e.charCodeAt(t) | 0;
}
function Po(e, t, n) {
  return e.slice(t, n);
}
function Et(e) {
  return e.length;
}
function Ku(e) {
  return e.length;
}
function si(e, t) {
  return t.push(e), e;
}
function N2(e, t) {
  return e.map(t).join("");
}
var Rl = 1,
  xr = 1,
  um = 0,
  Xe = 0,
  de = 0,
  jr = "";
function _l(e, t, n, r, o, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Rl,
    column: xr,
    length: l,
    return: "",
  };
}
function Lr(e, t) {
  return P2(_l("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function b2() {
  return de;
}
function R2() {
  return (
    (de = Xe > 0 ? je(jr, --Xe) : 0), xr--, de === 10 && ((xr = 1), Rl--), de
  );
}
function Ze() {
  return (
    (de = Xe < um ? je(jr, Xe++) : 0), xr++, de === 10 && ((xr = 1), Rl++), de
  );
}
function Rt() {
  return je(jr, Xe);
}
function Ei() {
  return Xe;
}
function Ao(e, t) {
  return Po(jr, e, t);
}
function jo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function cm(e) {
  return (Rl = xr = 1), (um = Et((jr = e))), (Xe = 0), [];
}
function dm(e) {
  return (jr = ""), e;
}
function Ci(e) {
  return am(Ao(Xe - 1, Fa(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function _2(e) {
  for (; (de = Rt()) && de < 33; ) Ze();
  return jo(e) > 2 || jo(de) > 3 ? "" : " ";
}
function O2(e, t) {
  for (
    ;
    --t &&
    Ze() &&
    !(de < 48 || de > 102 || (de > 57 && de < 65) || (de > 70 && de < 97));

  );
  return Ao(e, Ei() + (t < 6 && Rt() == 32 && Ze() == 32));
}
function Fa(e) {
  for (; Ze(); )
    switch (de) {
      case e:
        return Xe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fa(de);
        break;
      case 40:
        e === 41 && Fa(e);
        break;
      case 92:
        Ze();
        break;
    }
  return Xe;
}
function T2(e, t) {
  for (; Ze() && e + de !== 47 + 10; )
    if (e + de === 42 + 42 && Rt() === 47) break;
  return "/*" + Ao(t, Xe - 1) + "*" + bl(e === 47 ? e : Ze());
}
function $2(e) {
  for (; !jo(Rt()); ) Ze();
  return Ao(e, Xe);
}
function M2(e) {
  return dm(Pi("", null, null, null, [""], (e = cm(e)), 0, [0], e));
}
function Pi(e, t, n, r, o, i, l, s, a) {
  for (
    var u = 0,
      d = 0,
      p = l,
      m = 0,
      x = 0,
      y = 0,
      g = 1,
      k = 1,
      h = 1,
      f = 0,
      v = "",
      S = o,
      P = i,
      j = r,
      C = v;
    k;

  )
    switch (((y = f), (f = Ze()))) {
      case 40:
        if (y != 108 && je(C, p - 1) == 58) {
          La((C += V(Ci(f), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Ci(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += _2(y);
        break;
      case 92:
        C += O2(Ei() - 1, 7);
        continue;
      case 47:
        switch (Rt()) {
          case 42:
          case 47:
            si(A2(T2(Ze(), Ei()), t, n), a);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * g:
        s[u++] = Et(C) * h;
      case 125 * g:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            k = 0;
          case 59 + d:
            h == -1 && (C = V(C, /\f/g, "")),
              x > 0 &&
                Et(C) - p &&
                si(
                  x > 32
                    ? Dd(C + ";", r, n, p - 1)
                    : Dd(V(C, " ", "") + ";", r, n, p - 2),
                  a
                );
            break;
          case 59:
            C += ";";
          default:
            if (
              (si((j = Fd(C, t, n, u, d, o, s, v, (S = []), (P = []), p)), i),
              f === 123)
            )
              if (d === 0) Pi(C, t, j, j, S, i, p, s, P);
              else
                switch (m === 99 && je(C, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pi(
                      e,
                      j,
                      j,
                      r && si(Fd(e, j, j, 0, 0, o, s, v, o, (S = []), p), P),
                      o,
                      P,
                      p,
                      s,
                      r ? S : P
                    );
                    break;
                  default:
                    Pi(C, j, j, j, [""], P, 0, s, P);
                }
        }
        (u = d = x = 0), (g = h = 1), (v = C = ""), (p = l);
        break;
      case 58:
        (p = 1 + Et(C)), (x = y);
      default:
        if (g < 1) {
          if (f == 123) --g;
          else if (f == 125 && g++ == 0 && R2() == 125) continue;
        }
        switch (((C += bl(f)), f * g)) {
          case 38:
            h = d > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            (s[u++] = (Et(C) - 1) * h), (h = 1);
            break;
          case 64:
            Rt() === 45 && (C += Ci(Ze())),
              (m = Rt()),
              (d = p = Et((v = C += $2(Ei())))),
              f++;
            break;
          case 45:
            y === 45 && Et(C) == 2 && (g = 0);
        }
    }
  return i;
}
function Fd(e, t, n, r, o, i, l, s, a, u, d) {
  for (
    var p = o - 1, m = o === 0 ? i : [""], x = Ku(m), y = 0, g = 0, k = 0;
    y < r;
    ++y
  )
    for (var h = 0, f = Po(e, p + 1, (p = C2((g = l[y])))), v = e; h < x; ++h)
      (v = am(g > 0 ? m[h] + " " + f : V(f, /&\f/g, m[h]))) && (a[k++] = v);
  return _l(e, t, n, o === 0 ? Wu : s, a, u, d);
}
function A2(e, t, n) {
  return _l(e, t, n, lm, bl(b2()), Po(e, 2, -2), 0);
}
function Dd(e, t, n, r) {
  return _l(e, t, n, Hu, Po(e, 0, r), Po(e, r + 1, -1), r);
}
function ar(e, t) {
  for (var n = "", r = Ku(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function I2(e, t, n, r) {
  switch (e.type) {
    case E2:
      if (e.children.length) break;
    case k2:
    case Hu:
      return (e.return = e.return || e.value);
    case lm:
      return "";
    case sm:
      return (e.return = e.value + "{" + ar(e.children, r) + "}");
    case Wu:
      e.value = e.props.join(",");
  }
  return Et((n = ar(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function L2(e) {
  var t = Ku(e);
  return function (n, r, o, i) {
    for (var l = "", s = 0; s < t; s++) l += e[s](n, r, o, i) || "";
    return l;
  };
}
function F2(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var D2 = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Rt()), o === 38 && i === 12 && (n[r] = 1), !jo(i);

    )
      Ze();
    return Ao(t, Xe);
  },
  B2 = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (jo(o)) {
        case 0:
          o === 38 && Rt() === 12 && (n[r] = 1), (t[r] += D2(Xe - 1, n, r));
          break;
        case 2:
          t[r] += Ci(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Rt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += bl(o);
      }
    while ((o = Ze()));
    return t;
  },
  U2 = function (t, n) {
    return dm(B2(cm(t), n));
  },
  Bd = new WeakMap(),
  V2 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Bd.get(r)) &&
        !o
      ) {
        Bd.set(t, !0);
        for (
          var i = [], l = U2(n, i), s = r.props, a = 0, u = 0;
          a < l.length;
          a++
        )
          for (var d = 0; d < s.length; d++, u++)
            t.props[u] = i[a] ? l[a].replace(/&\f/g, s[d]) : s[d] + " " + l[a];
      }
    }
  },
  W2 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function fm(e, t) {
  switch (j2(e, t)) {
    case 5103:
      return U + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return U + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + ol + e + _e + e + e;
    case 6828:
    case 4268:
      return U + e + _e + e + e;
    case 6165:
      return U + e + _e + "flex-" + e + e;
    case 5187:
      return (
        U + e + V(e, /(\w+).+(:[^]+)/, U + "box-$1$2" + _e + "flex-$1$2") + e
      );
    case 5443:
      return U + e + _e + "flex-item-" + V(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        U +
        e +
        _e +
        "flex-line-pack" +
        V(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return U + e + _e + V(e, "shrink", "negative") + e;
    case 5292:
      return U + e + _e + V(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        U +
        "box-" +
        V(e, "-grow", "") +
        U +
        e +
        _e +
        V(e, "grow", "positive") +
        e
      );
    case 4554:
      return U + V(e, /([^-])(transform)/g, "$1" + U + "$2") + e;
    case 6187:
      return (
        V(V(V(e, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return V(e, /(image-set\([^]*)/, U + "$1$`$1");
    case 4968:
      return (
        V(
          V(e, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + _e + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        U +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return V(e, /(.+)-inline(.+)/, U + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Et(e) - 1 - t > 6)
        switch (je(e, t + 1)) {
          case 109:
            if (je(e, t + 4) !== 45) break;
          case 102:
            return (
              V(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  U +
                  "$2-$3$1" +
                  ol +
                  (je(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~La(e, "stretch")
              ? fm(V(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (je(e, t + 1) !== 115) break;
    case 6444:
      switch (je(e, Et(e) - 3 - (~La(e, "!important") && 10))) {
        case 107:
          return V(e, ":", ":" + U) + e;
        case 101:
          return (
            V(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                U +
                (je(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                U +
                "$2$3$1" +
                _e +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (je(e, t + 11)) {
        case 114:
          return U + e + _e + V(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return U + e + _e + V(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return U + e + _e + V(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return U + e + _e + e + e;
  }
  return e;
}
var H2 = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Hu:
          t.return = fm(t.value, t.length);
          break;
        case sm:
          return ar([Lr(t, { value: V(t.value, "@", "@" + U) })], o);
        case Wu:
          if (t.length)
            return N2(t.props, function (i) {
              switch (z2(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ar(
                    [Lr(t, { props: [V(i, /:(read-\w+)/, ":" + ol + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return ar(
                    [
                      Lr(t, {
                        props: [V(i, /:(plac\w+)/, ":" + U + "input-$1")],
                      }),
                      Lr(t, { props: [V(i, /:(plac\w+)/, ":" + ol + "$1")] }),
                      Lr(t, { props: [V(i, /:(plac\w+)/, _e + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  K2 = [H2],
  X2 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var k = g.getAttribute("data-emotion");
        k.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || K2,
      i = {},
      l,
      s = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var k = g.getAttribute("data-emotion").split(" "), h = 1;
            h < k.length;
            h++
          )
            i[k[h]] = !0;
          s.push(g);
        }
      );
    var a,
      u = [V2, W2];
    {
      var d,
        p = [
          I2,
          F2(function (g) {
            d.insert(g);
          }),
        ],
        m = L2(u.concat(o, p)),
        x = function (k) {
          return ar(M2(k), m);
        };
      a = function (k, h, f, v) {
        (d = f),
          x(k ? k + "{" + h.styles + "}" : h.styles),
          v && (y.inserted[h.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new S2({
        key: n,
        container: l,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: a,
    };
    return y.sheet.hydrate(s), y;
  },
  pm = { exports: {} },
  K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ke = typeof Symbol == "function" && Symbol.for,
  Xu = ke ? Symbol.for("react.element") : 60103,
  Qu = ke ? Symbol.for("react.portal") : 60106,
  Ol = ke ? Symbol.for("react.fragment") : 60107,
  Tl = ke ? Symbol.for("react.strict_mode") : 60108,
  $l = ke ? Symbol.for("react.profiler") : 60114,
  Ml = ke ? Symbol.for("react.provider") : 60109,
  Al = ke ? Symbol.for("react.context") : 60110,
  qu = ke ? Symbol.for("react.async_mode") : 60111,
  Il = ke ? Symbol.for("react.concurrent_mode") : 60111,
  Ll = ke ? Symbol.for("react.forward_ref") : 60112,
  Fl = ke ? Symbol.for("react.suspense") : 60113,
  Q2 = ke ? Symbol.for("react.suspense_list") : 60120,
  Dl = ke ? Symbol.for("react.memo") : 60115,
  Bl = ke ? Symbol.for("react.lazy") : 60116,
  q2 = ke ? Symbol.for("react.block") : 60121,
  G2 = ke ? Symbol.for("react.fundamental") : 60117,
  Y2 = ke ? Symbol.for("react.responder") : 60118,
  J2 = ke ? Symbol.for("react.scope") : 60119;
function rt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xu:
        switch (((e = e.type), e)) {
          case qu:
          case Il:
          case Ol:
          case $l:
          case Tl:
          case Fl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Al:
              case Ll:
              case Bl:
              case Dl:
              case Ml:
                return e;
              default:
                return t;
            }
        }
      case Qu:
        return t;
    }
  }
}
function mm(e) {
  return rt(e) === Il;
}
K.AsyncMode = qu;
K.ConcurrentMode = Il;
K.ContextConsumer = Al;
K.ContextProvider = Ml;
K.Element = Xu;
K.ForwardRef = Ll;
K.Fragment = Ol;
K.Lazy = Bl;
K.Memo = Dl;
K.Portal = Qu;
K.Profiler = $l;
K.StrictMode = Tl;
K.Suspense = Fl;
K.isAsyncMode = function (e) {
  return mm(e) || rt(e) === qu;
};
K.isConcurrentMode = mm;
K.isContextConsumer = function (e) {
  return rt(e) === Al;
};
K.isContextProvider = function (e) {
  return rt(e) === Ml;
};
K.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xu;
};
K.isForwardRef = function (e) {
  return rt(e) === Ll;
};
K.isFragment = function (e) {
  return rt(e) === Ol;
};
K.isLazy = function (e) {
  return rt(e) === Bl;
};
K.isMemo = function (e) {
  return rt(e) === Dl;
};
K.isPortal = function (e) {
  return rt(e) === Qu;
};
K.isProfiler = function (e) {
  return rt(e) === $l;
};
K.isStrictMode = function (e) {
  return rt(e) === Tl;
};
K.isSuspense = function (e) {
  return rt(e) === Fl;
};
K.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ol ||
    e === Il ||
    e === $l ||
    e === Tl ||
    e === Fl ||
    e === Q2 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Bl ||
        e.$$typeof === Dl ||
        e.$$typeof === Ml ||
        e.$$typeof === Al ||
        e.$$typeof === Ll ||
        e.$$typeof === G2 ||
        e.$$typeof === Y2 ||
        e.$$typeof === J2 ||
        e.$$typeof === q2))
  );
};
K.typeOf = rt;
pm.exports = K;
var Z2 = pm.exports,
  hm = Z2,
  ev = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  tv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  gm = {};
gm[hm.ForwardRef] = ev;
gm[hm.Memo] = tv;
var nv = !0;
function rv(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var ym = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || nv === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  ov = function (t, n, r) {
    ym(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function iv(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var lv = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  sv = /[A-Z]|^ms/g,
  av = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  vm = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ud = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ts = im(function (e) {
    return vm(e) ? e : e.replace(sv, "-$&").toLowerCase();
  }),
  Vd = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(av, function (r, o, i) {
            return (Ct = { name: o, styles: i, next: Ct }), o;
          });
    }
    return lv[t] !== 1 && !vm(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function zo(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Ct = { name: n.name, styles: n.styles, next: Ct }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Ct = { name: r.name, styles: r.styles, next: Ct }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return uv(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ct,
          l = n(e);
        return (Ct = i), zo(e, t, l);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function uv(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += zo(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (r += i + "{" + t[l] + "}")
          : Ud(l) && (r += Ts(i) + ":" + Vd(i, l) + ";");
      else if (
        Array.isArray(l) &&
        typeof l[0] == "string" &&
        (t == null || t[l[0]] === void 0)
      )
        for (var s = 0; s < l.length; s++)
          Ud(l[s]) && (r += Ts(i) + ":" + Vd(i, l[s]) + ";");
      else {
        var a = zo(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Ts(i) + ":" + a + ";";
            break;
          }
          default:
            r += i + "{" + a + "}";
        }
      }
    }
  return r;
}
var Wd = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Ct,
  xm = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Ct = void 0;
    var l = t[0];
    l == null || l.raw === void 0
      ? ((o = !1), (i += zo(r, n, l)))
      : (i += l[0]);
    for (var s = 1; s < t.length; s++) (i += zo(r, n, t[s])), o && (i += l[s]);
    Wd.lastIndex = 0;
    for (var a = "", u; (u = Wd.exec(i)) !== null; ) a += "-" + u[1];
    var d = iv(i) + a;
    return { name: d, styles: i, next: Ct };
  },
  cv = function (t) {
    return t();
  },
  dv = Oi["useInsertionEffect"] ? Oi["useInsertionEffect"] : !1,
  fv = dv || cv,
  wm = w.createContext(typeof HTMLElement < "u" ? X2({ key: "css" }) : null);
wm.Provider;
var pv = function (t) {
    return w.forwardRef(function (n, r) {
      var o = w.useContext(wm);
      return t(n, o, r);
    });
  },
  Sm = w.createContext({});
function Gu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return xm(t);
}
var Io = function () {
    var t = Gu.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  mv = v2,
  hv = function (t) {
    return t !== "theme";
  },
  Hd = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? mv : hv;
  },
  Kd = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (l) {
              return t.__emotion_forwardProp(l) && i(l);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  gv = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      ym(n, r, o),
      fv(function () {
        return ov(n, r, o);
      }),
      null
    );
  },
  yv = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      l;
    n !== void 0 && ((i = n.label), (l = n.target));
    var s = Kd(t, n, r),
      a = s || Hd(o),
      u = !a("as");
    return function () {
      var d = arguments,
        p =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && p.push("label:" + i + ";"),
        d[0] == null || d[0].raw === void 0)
      )
        p.push.apply(p, d);
      else {
        p.push(d[0][0]);
        for (var m = d.length, x = 1; x < m; x++) p.push(d[x], d[0][x]);
      }
      var y = pv(function (g, k, h) {
        var f = (u && g.as) || o,
          v = "",
          S = [],
          P = g;
        if (g.theme == null) {
          P = {};
          for (var j in g) P[j] = g[j];
          P.theme = w.useContext(Sm);
        }
        typeof g.className == "string"
          ? (v = rv(k.registered, S, g.className))
          : g.className != null && (v = g.className + " ");
        var C = xm(p.concat(S), k.registered, P);
        (v += k.key + "-" + C.name), l !== void 0 && (v += " " + l);
        var b = u && s === void 0 ? Hd(f) : a,
          A = {};
        for (var R in g) (u && R === "as") || (b(R) && (A[R] = g[R]));
        return (
          (A.className = v),
          (A.ref = h),
          w.createElement(
            w.Fragment,
            null,
            w.createElement(gv, {
              cache: k,
              serialized: C,
              isStringTag: typeof f == "string",
            }),
            w.createElement(f, A)
          )
        );
      });
      return (
        (y.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = o),
        (y.__emotion_styles = p),
        (y.__emotion_forwardProp = s),
        Object.defineProperty(y, "toString", {
          value: function () {
            return "." + l;
          },
        }),
        (y.withComponent = function (g, k) {
          return e(g, $({}, n, k, { shouldForwardProp: Kd(y, k, !0) })).apply(
            void 0,
            p
          );
        }),
        y
      );
    };
  },
  vv = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Da = yv.bind();
vv.forEach(function (e) {
  Da[e] = Da(e);
});
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function xv(e, t) {
  return Da(e, t);
}
const wv = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  Sv = ["values", "unit", "step"],
  kv = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => $({}, n, { [r.key]: r.val }), {})
    );
  };
function Ev(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = Qe(e, Sv),
    i = kv(t),
    l = Object.keys(i);
  function s(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function a(m) {
    return `@media (max-width:${
      (typeof t[m] == "number" ? t[m] : m) - r / 100
    }${n})`;
  }
  function u(m, x) {
    const y = l.indexOf(x);
    return `@media (min-width:${
      typeof t[m] == "number" ? t[m] : m
    }${n}) and (max-width:${
      (y !== -1 && typeof t[l[y]] == "number" ? t[l[y]] : x) - r / 100
    }${n})`;
  }
  function d(m) {
    return l.indexOf(m) + 1 < l.length ? u(m, l[l.indexOf(m) + 1]) : s(m);
  }
  function p(m) {
    const x = l.indexOf(m);
    return x === 0
      ? s(l[1])
      : x === l.length - 1
      ? a(l[x])
      : u(m, l[l.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return $(
    {
      keys: l,
      values: i,
      up: s,
      down: a,
      between: u,
      only: d,
      not: p,
      unit: n,
    },
    o
  );
}
const Cv = { borderRadius: 4 },
  Pv = Cv;
function no(e, t) {
  return t ? Lt(e, t, { clone: !1 }) : e;
}
const Yu = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Xd = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Yu[e]}px)`,
  };
function Wt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Xd;
    return t.reduce((l, s, a) => ((l[i.up(i.keys[a])] = n(t[a])), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Xd;
    return Object.keys(t).reduce((l, s) => {
      if (Object.keys(i.values || Yu).indexOf(s) !== -1) {
        const a = i.up(s);
        l[a] = n(t[s], s);
      } else {
        const a = s;
        l[a] = t[a];
      }
      return l;
    }, {});
  }
  return n(t);
}
function jv(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function zv(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Ul(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function il(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Ul(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function W(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (l) => {
      if (l[t] == null) return null;
      const s = l[t],
        a = l.theme,
        u = Ul(a, r) || {};
      return Wt(l, s, (p) => {
        let m = il(u, o, p);
        return (
          p === m &&
            typeof p == "string" &&
            (m = il(u, o, `${t}${p === "default" ? "" : Z(p)}`, p)),
          n === !1 ? m : { [n]: m }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function Nv(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const bv = { m: "margin", p: "padding" },
  Rv = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Qd = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  _v = Nv((e) => {
    if (e.length > 2)
      if (Qd[e]) e = Qd[e];
      else return [e];
    const [t, n] = e.split(""),
      r = bv[t],
      o = Rv[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Ju = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Zu = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Ju, ...Zu];
function Lo(e, t, n, r) {
  var o;
  const i = (o = Ul(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (l) => (typeof l == "string" ? l : i * l)
    : Array.isArray(i)
    ? (l) => (typeof l == "string" ? l : i[l])
    : typeof i == "function"
    ? i
    : () => {};
}
function km(e) {
  return Lo(e, "spacing", 8);
}
function Fo(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Ov(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Fo(t, n)), r), {});
}
function Tv(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = _v(n),
    i = Ov(o, r),
    l = e[n];
  return Wt(e, l, i);
}
function Em(e, t) {
  const n = km(e.theme);
  return Object.keys(e)
    .map((r) => Tv(e, t, r, n))
    .reduce(no, {});
}
function oe(e) {
  return Em(e, Ju);
}
oe.propTypes = {};
oe.filterProps = Ju;
function ie(e) {
  return Em(e, Zu);
}
ie.propTypes = {};
ie.filterProps = Zu;
function $v(e = 8) {
  if (e.mui) return e;
  const t = km({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const l = t(i);
          return typeof l == "number" ? `${l}px` : l;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function Vl(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? no(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function jt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Mv = W({ prop: "border", themeKey: "borders", transform: jt }),
  Av = W({ prop: "borderTop", themeKey: "borders", transform: jt }),
  Iv = W({ prop: "borderRight", themeKey: "borders", transform: jt }),
  Lv = W({ prop: "borderBottom", themeKey: "borders", transform: jt }),
  Fv = W({ prop: "borderLeft", themeKey: "borders", transform: jt }),
  Dv = W({ prop: "borderColor", themeKey: "palette" }),
  Bv = W({ prop: "borderTopColor", themeKey: "palette" }),
  Uv = W({ prop: "borderRightColor", themeKey: "palette" }),
  Vv = W({ prop: "borderBottomColor", themeKey: "palette" }),
  Wv = W({ prop: "borderLeftColor", themeKey: "palette" }),
  Wl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Lo(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Fo(t, r) });
      return Wt(e, e.borderRadius, n);
    }
    return null;
  };
Wl.propTypes = {};
Wl.filterProps = ["borderRadius"];
Vl(Mv, Av, Iv, Lv, Fv, Dv, Bv, Uv, Vv, Wv, Wl);
const Hl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Lo(e.theme, "spacing", 8),
      n = (r) => ({ gap: Fo(t, r) });
    return Wt(e, e.gap, n);
  }
  return null;
};
Hl.propTypes = {};
Hl.filterProps = ["gap"];
const Kl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Lo(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Fo(t, r) });
    return Wt(e, e.columnGap, n);
  }
  return null;
};
Kl.propTypes = {};
Kl.filterProps = ["columnGap"];
const Xl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Lo(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Fo(t, r) });
    return Wt(e, e.rowGap, n);
  }
  return null;
};
Xl.propTypes = {};
Xl.filterProps = ["rowGap"];
const Hv = W({ prop: "gridColumn" }),
  Kv = W({ prop: "gridRow" }),
  Xv = W({ prop: "gridAutoFlow" }),
  Qv = W({ prop: "gridAutoColumns" }),
  qv = W({ prop: "gridAutoRows" }),
  Gv = W({ prop: "gridTemplateColumns" }),
  Yv = W({ prop: "gridTemplateRows" }),
  Jv = W({ prop: "gridTemplateAreas" }),
  Zv = W({ prop: "gridArea" });
Vl(Hl, Kl, Xl, Hv, Kv, Xv, Qv, qv, Gv, Yv, Jv, Zv);
function ur(e, t) {
  return t === "grey" ? t : e;
}
const e3 = W({ prop: "color", themeKey: "palette", transform: ur }),
  t3 = W({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: ur,
  }),
  n3 = W({ prop: "backgroundColor", themeKey: "palette", transform: ur });
Vl(e3, t3, n3);
function Ge(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const r3 = W({ prop: "width", transform: Ge }),
  ec = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (r = r.breakpoints) == null ||
            (r = r.values) == null
              ? void 0
              : r[n]) ||
            Yu[n] ||
            Ge(n),
        };
      };
      return Wt(e, e.maxWidth, t);
    }
    return null;
  };
ec.filterProps = ["maxWidth"];
const o3 = W({ prop: "minWidth", transform: Ge }),
  i3 = W({ prop: "height", transform: Ge }),
  l3 = W({ prop: "maxHeight", transform: Ge }),
  s3 = W({ prop: "minHeight", transform: Ge });
W({ prop: "size", cssProperty: "width", transform: Ge });
W({ prop: "size", cssProperty: "height", transform: Ge });
const a3 = W({ prop: "boxSizing" });
Vl(r3, ec, o3, i3, l3, s3, a3);
const u3 = {
    border: { themeKey: "borders", transform: jt },
    borderTop: { themeKey: "borders", transform: jt },
    borderRight: { themeKey: "borders", transform: jt },
    borderBottom: { themeKey: "borders", transform: jt },
    borderLeft: { themeKey: "borders", transform: jt },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Wl },
    color: { themeKey: "palette", transform: ur },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: ur,
    },
    backgroundColor: { themeKey: "palette", transform: ur },
    p: { style: ie },
    pt: { style: ie },
    pr: { style: ie },
    pb: { style: ie },
    pl: { style: ie },
    px: { style: ie },
    py: { style: ie },
    padding: { style: ie },
    paddingTop: { style: ie },
    paddingRight: { style: ie },
    paddingBottom: { style: ie },
    paddingLeft: { style: ie },
    paddingX: { style: ie },
    paddingY: { style: ie },
    paddingInline: { style: ie },
    paddingInlineStart: { style: ie },
    paddingInlineEnd: { style: ie },
    paddingBlock: { style: ie },
    paddingBlockStart: { style: ie },
    paddingBlockEnd: { style: ie },
    m: { style: oe },
    mt: { style: oe },
    mr: { style: oe },
    mb: { style: oe },
    ml: { style: oe },
    mx: { style: oe },
    my: { style: oe },
    margin: { style: oe },
    marginTop: { style: oe },
    marginRight: { style: oe },
    marginBottom: { style: oe },
    marginLeft: { style: oe },
    marginX: { style: oe },
    marginY: { style: oe },
    marginInline: { style: oe },
    marginInlineStart: { style: oe },
    marginInlineEnd: { style: oe },
    marginBlock: { style: oe },
    marginBlockStart: { style: oe },
    marginBlockEnd: { style: oe },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Hl },
    rowGap: { style: Xl },
    columnGap: { style: Kl },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: Ge },
    maxWidth: { style: ec },
    minWidth: { transform: Ge },
    height: { transform: Ge },
    maxHeight: { transform: Ge },
    minHeight: { transform: Ge },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  tc = u3;
function c3(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function d3(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function f3() {
  function e(n, r, o, i) {
    const l = { [n]: r, theme: o },
      s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: a = n, themeKey: u, transform: d, style: p } = s;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const m = Ul(o, u) || {};
    return p
      ? p(l)
      : Wt(l, r, (y) => {
          let g = il(m, d, y);
          return (
            y === g &&
              typeof y == "string" &&
              (g = il(m, d, `${n}${y === "default" ? "" : Z(y)}`, y)),
            a === !1 ? g : { [a]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : tc;
    function s(a) {
      let u = a;
      if (typeof a == "function") u = a(i);
      else if (typeof a != "object") return a;
      if (!u) return null;
      const d = jv(i.breakpoints),
        p = Object.keys(d);
      let m = d;
      return (
        Object.keys(u).forEach((x) => {
          const y = d3(u[x], i);
          if (y != null)
            if (typeof y == "object")
              if (l[x]) m = no(m, e(x, y, i, l));
              else {
                const g = Wt({ theme: i }, y, (k) => ({ [x]: k }));
                c3(g, y) ? (m[x] = t({ sx: y, theme: i })) : (m = no(m, g));
              }
            else m = no(m, e(x, y, i, l));
        }),
        zv(p, m)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Cm = f3();
Cm.filterProps = ["sx"];
const nc = Cm,
  p3 = ["breakpoints", "palette", "spacing", "shape"];
function rc(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    l = Qe(e, p3),
    s = Ev(n),
    a = $v(o);
  let u = Lt(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: $({ mode: "light" }, r),
      spacing: a,
      shape: $({}, Pv, i),
    },
    l
  );
  return (
    (u = t.reduce((d, p) => Lt(d, p), u)),
    (u.unstable_sxConfig = $({}, tc, l == null ? void 0 : l.unstable_sxConfig)),
    (u.unstable_sx = function (p) {
      return nc({ sx: p, theme: this });
    }),
    u
  );
}
function m3(e) {
  return Object.keys(e).length === 0;
}
function h3(e = null) {
  const t = w.useContext(Sm);
  return !t || m3(t) ? e : t;
}
const g3 = rc();
function y3(e = g3) {
  return h3(e);
}
function Pm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Pm(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function De() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Pm(e)) && (r && (r += " "), (r += t));
  return r;
}
const v3 = ["variant"];
function qd(e) {
  return e.length === 0;
}
function jm(e) {
  const { variant: t } = e,
    n = Qe(e, v3);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += qd(r) ? e[o] : Z(e[o]))
          : (r += `${qd(r) ? o : Z(o)}${Z(e[o].toString())}`);
      }),
    r
  );
}
const x3 = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function w3(e) {
  return Object.keys(e).length === 0;
}
function S3(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const k3 = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  E3 = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const i = jm(o.props);
        r[i] = o.style;
      }),
      r
    );
  },
  C3 = (e, t, n, r) => {
    var o;
    const { ownerState: i = {} } = e,
      l = [],
      s =
        n == null || (o = n.components) == null || (o = o[r]) == null
          ? void 0
          : o.variants;
    return (
      s &&
        s.forEach((a) => {
          let u = !0;
          Object.keys(a.props).forEach((d) => {
            i[d] !== a.props[d] && e[d] !== a.props[d] && (u = !1);
          }),
            u && l.push(t[jm(a.props)]);
        }),
      l
    );
  };
function ji(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const P3 = rc();
function Fr({ defaultTheme: e, theme: t, themeId: n }) {
  return w3(t) ? e : t[n] || t;
}
function j3(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = P3,
      rootShouldForwardProp: r = ji,
      slotShouldForwardProp: o = ji,
    } = e,
    i = (l) =>
      nc($({}, l, { theme: Fr($({}, l, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (l, s = {}) => {
      wv(l, (S) => S.filter((P) => !(P != null && P.__mui_systemSx)));
      const {
          name: a,
          slot: u,
          skipVariantsResolver: d,
          skipSx: p,
          overridesResolver: m,
        } = s,
        x = Qe(s, x3),
        y = d !== void 0 ? d : (u && u !== "Root") || !1,
        g = p || !1;
      let k,
        h = ji;
      u === "Root" ? (h = r) : u ? (h = o) : S3(l) && (h = void 0);
      const f = xv(l, $({ shouldForwardProp: h, label: k }, x)),
        v = (S, ...P) => {
          const j = P
            ? P.map((R) =>
                typeof R == "function" && R.__emotion_real !== R
                  ? (F) =>
                      R(
                        $({}, F, {
                          theme: Fr($({}, F, { defaultTheme: n, themeId: t })),
                        })
                      )
                  : R
              )
            : [];
          let C = S;
          a &&
            m &&
            j.push((R) => {
              const F = Fr($({}, R, { defaultTheme: n, themeId: t })),
                ee = k3(a, F);
              if (ee) {
                const se = {};
                return (
                  Object.entries(ee).forEach(([pe, me]) => {
                    se[pe] =
                      typeof me == "function" ? me($({}, R, { theme: F })) : me;
                  }),
                  m(R, se)
                );
              }
              return null;
            }),
            a &&
              !y &&
              j.push((R) => {
                const F = Fr($({}, R, { defaultTheme: n, themeId: t }));
                return C3(R, E3(a, F), F, a);
              }),
            g || j.push(i);
          const b = j.length - P.length;
          if (Array.isArray(S) && b > 0) {
            const R = new Array(b).fill("");
            (C = [...S, ...R]), (C.raw = [...S.raw, ...R]);
          } else
            typeof S == "function" &&
              S.__emotion_real !== S &&
              (C = (R) =>
                S(
                  $({}, R, {
                    theme: Fr($({}, R, { defaultTheme: n, themeId: t })),
                  })
                ));
          const A = f(C, ...j);
          return l.muiName && (A.muiName = l.muiName), A;
        };
      return f.withConfig && (v.withConfig = f.withConfig), v;
    }
  );
}
function z3(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Vu(t.components[n].defaultProps, r);
}
function N3({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = y3(n);
  return r && (o = o[r] || o), z3({ theme: o, name: t, props: e });
}
function oc(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function b3(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function $n(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return $n(b3(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(vr(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(vr(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function Ql(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function R3(e) {
  e = $n(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    l = (u, d = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let s = "rgb";
  const a = [
    Math.round(l(0) * 255),
    Math.round(l(8) * 255),
    Math.round(l(4) * 255),
  ];
  return (
    e.type === "hsla" && ((s += "a"), a.push(t[3])), Ql({ type: s, values: a })
  );
}
function Gd(e) {
  e = $n(e);
  let t = e.type === "hsl" || e.type === "hsla" ? $n(R3(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function _3(e, t) {
  const n = Gd(e),
    r = Gd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ai(e, t) {
  return (
    (e = $n(e)),
    (t = oc(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Ql(e)
  );
}
function O3(e, t) {
  if (((e = $n(e)), (t = oc(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Ql(e);
}
function T3(e, t) {
  if (((e = $n(e)), (t = oc(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Ql(e);
}
function $3(e, t) {
  return $(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const M3 = ["mode", "contrastThreshold", "tonalOffset"],
  Yd = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Co.white, default: Co.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  $s = {
    text: {
      primary: Co.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Co.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Jd(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = T3(e.main, o))
      : t === "dark" && (e.dark = O3(e.main, i)));
}
function A3(e = "light") {
  return e === "dark"
    ? { main: Dn[200], light: Dn[50], dark: Dn[400] }
    : { main: Dn[700], light: Dn[400], dark: Dn[800] };
}
function I3(e = "light") {
  return e === "dark"
    ? { main: Fn[200], light: Fn[50], dark: Fn[400] }
    : { main: Fn[500], light: Fn[300], dark: Fn[700] };
}
function L3(e = "light") {
  return e === "dark"
    ? { main: Ln[500], light: Ln[300], dark: Ln[700] }
    : { main: Ln[700], light: Ln[400], dark: Ln[800] };
}
function F3(e = "light") {
  return e === "dark"
    ? { main: Bn[400], light: Bn[300], dark: Bn[700] }
    : { main: Bn[700], light: Bn[500], dark: Bn[900] };
}
function D3(e = "light") {
  return e === "dark"
    ? { main: Un[400], light: Un[300], dark: Un[700] }
    : { main: Un[800], light: Un[500], dark: Un[900] };
}
function B3(e = "light") {
  return e === "dark"
    ? { main: Ir[400], light: Ir[300], dark: Ir[700] }
    : { main: "#ed6c02", light: Ir[500], dark: Ir[900] };
}
function U3(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = Qe(e, M3),
    i = e.primary || A3(t),
    l = e.secondary || I3(t),
    s = e.error || L3(t),
    a = e.info || F3(t),
    u = e.success || D3(t),
    d = e.warning || B3(t);
  function p(g) {
    return _3(g, $s.text.primary) >= n ? $s.text.primary : Yd.text.primary;
  }
  const m = ({
      color: g,
      name: k,
      mainShade: h = 500,
      lightShade: f = 300,
      darkShade: v = 700,
    }) => {
      if (
        ((g = $({}, g)),
        !g.main && g[h] && (g.main = g[h]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(vr(11, k ? ` (${k})` : "", h));
      if (typeof g.main != "string")
        throw new Error(vr(12, k ? ` (${k})` : "", JSON.stringify(g.main)));
      return (
        Jd(g, "light", f, r),
        Jd(g, "dark", v, r),
        g.contrastText || (g.contrastText = p(g.main)),
        g
      );
    },
    x = { dark: $s, light: Yd };
  return Lt(
    $(
      {
        common: $({}, Co),
        mode: t,
        primary: m({ color: i, name: "primary" }),
        secondary: m({
          color: l,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: m({ color: s, name: "error" }),
        warning: m({ color: d, name: "warning" }),
        info: m({ color: a, name: "info" }),
        success: m({ color: u, name: "success" }),
        grey: Gy,
        contrastThreshold: n,
        getContrastText: p,
        augmentColor: m,
        tonalOffset: r,
      },
      x[t]
    ),
    o
  );
}
const V3 = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function W3(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Zd = { textTransform: "uppercase" },
  ef = '"Roboto", "Helvetica", "Arial", sans-serif';
function H3(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = ef,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: a = 700,
      htmlFontSize: u = 16,
      allVariants: d,
      pxToRem: p,
    } = n,
    m = Qe(n, V3),
    x = o / 14,
    y = p || ((h) => `${(h / u) * x}rem`),
    g = (h, f, v, S, P) =>
      $(
        { fontFamily: r, fontWeight: h, fontSize: y(f), lineHeight: v },
        r === ef ? { letterSpacing: `${W3(S / f)}em` } : {},
        P,
        d
      ),
    k = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(l, 48, 1.167, 0),
      h4: g(l, 34, 1.235, 0.25),
      h5: g(l, 24, 1.334, 0),
      h6: g(s, 20, 1.6, 0.15),
      subtitle1: g(l, 16, 1.75, 0.15),
      subtitle2: g(s, 14, 1.57, 0.1),
      body1: g(l, 16, 1.5, 0.15),
      body2: g(l, 14, 1.43, 0.15),
      button: g(s, 14, 1.75, 0.4, Zd),
      caption: g(l, 12, 1.66, 0.4),
      overline: g(l, 12, 2.66, 1, Zd),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Lt(
    $(
      {
        htmlFontSize: u,
        pxToRem: y,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: l,
        fontWeightMedium: s,
        fontWeightBold: a,
      },
      k
    ),
    m,
    { clone: !1 }
  );
}
const K3 = 0.2,
  X3 = 0.14,
  Q3 = 0.12;
function Y(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${K3})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${X3})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Q3})`,
  ].join(",");
}
const q3 = [
    "none",
    Y(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Y(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Y(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Y(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Y(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Y(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Y(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Y(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Y(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Y(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Y(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Y(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Y(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Y(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Y(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Y(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Y(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Y(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Y(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Y(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Y(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Y(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Y(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Y(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  G3 = q3,
  Y3 = ["duration", "easing", "delay"],
  J3 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Z3 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function tf(e) {
  return `${Math.round(e)}ms`;
}
function ex(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function tx(e) {
  const t = $({}, J3, e.easing),
    n = $({}, Z3, e.duration);
  return $(
    {
      getAutoHeightDuration: ex,
      create: (o = ["all"], i = {}) => {
        const {
          duration: l = n.standard,
          easing: s = t.easeInOut,
          delay: a = 0,
        } = i;
        return (
          Qe(i, Y3),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof l == "string" ? l : tf(l)} ${s} ${
                  typeof a == "string" ? a : tf(a)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const nx = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  rx = nx,
  ox = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function ix(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    l = Qe(e, ox);
  if (e.vars) throw new Error(vr(18));
  const s = U3(r),
    a = rc(e);
  let u = Lt(a, {
    mixins: $3(a.breakpoints, n),
    palette: s,
    shadows: G3.slice(),
    typography: H3(s, i),
    transitions: tx(o),
    zIndex: $({}, rx),
  });
  return (
    (u = Lt(u, l)),
    (u = t.reduce((d, p) => Lt(d, p), u)),
    (u.unstable_sxConfig = $({}, tc, l == null ? void 0 : l.unstable_sxConfig)),
    (u.unstable_sx = function (p) {
      return nc({ sx: p, theme: this });
    }),
    u
  );
}
const lx = ix(),
  zm = lx;
function Do({ props: e, name: t }) {
  return N3({ props: e, name: t, defaultTheme: zm, themeId: om });
}
const Nm = (e) => ji(e) && e !== "classes",
  sx = j3({ themeId: om, defaultTheme: zm, rootShouldForwardProp: Nm }),
  _t = sx;
function ax(e) {
  return $o("MuiSvgIcon", e);
}
Mo("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const ux = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  cx = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${Z(t)}`, `fontSize${Z(n)}`],
      };
    return Nl(o, ax, r);
  },
  dx = _t("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${Z(n.color)}`],
        t[`fontSize${Z(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, l, s, a, u, d, p, m, x, y;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (l = i.pxToRem) == null
            ? void 0
            : l.call(i, 20)) || "1.25rem",
        medium:
          ((s = e.typography) == null || (a = s.pxToRem) == null
            ? void 0
            : a.call(s, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (d = u.pxToRem) == null
            ? void 0
            : d.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (p =
          (m = (e.vars || e).palette) == null || (m = m[t.color]) == null
            ? void 0
            : m.main) != null
          ? p
          : {
              action:
                (x = (e.vars || e).palette) == null || (x = x.action) == null
                  ? void 0
                  : x.active,
              disabled:
                (y = (e.vars || e).palette) == null || (y = y.action) == null
                  ? void 0
                  : y.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  bm = w.forwardRef(function (t, n) {
    const r = Do({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: l = "inherit",
        component: s = "svg",
        fontSize: a = "medium",
        htmlColor: u,
        inheritViewBox: d = !1,
        titleAccess: p,
        viewBox: m = "0 0 24 24",
      } = r,
      x = Qe(r, ux),
      y = w.isValidElement(o) && o.type === "svg",
      g = $({}, r, {
        color: l,
        component: s,
        fontSize: a,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: m,
        hasSvgAsChild: y,
      }),
      k = {};
    d || (k.viewBox = m);
    const h = cx(g);
    return c.jsxs(
      dx,
      $(
        {
          as: s,
          className: De(h.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": p ? void 0 : !0,
          role: p ? "img" : void 0,
          ref: n,
        },
        k,
        x,
        y && o.props,
        {
          ownerState: g,
          children: [
            y ? o.props.children : o,
            p ? c.jsx("title", { children: p }) : null,
          ],
        }
      )
    );
  });
bm.muiName = "SvgIcon";
const nf = bm;
function fx(e, t) {
  function n(r, o) {
    return c.jsx(
      nf,
      $({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = nf.muiName), w.memo(w.forwardRef(n));
}
const px = {
    configure: (e) => {
      rm.configure(e);
    },
  },
  mx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: Z,
        createChainedFunction: Yy,
        createSvgIcon: fx,
        debounce: Jy,
        deprecatedPropType: Zy,
        isMuiElement: e2,
        ownerDocument: Z0,
        ownerWindow: t2,
        requirePropFactory: n2,
        setRef: em,
        unstable_ClassNameGenerator: px,
        unstable_useEnhancedEffect: tm,
        unstable_useId: i2,
        unsupportedProp: l2,
        useControlled: s2,
        useEventCallback: Kr,
        useForkRef: Aa,
        useIsFocusVisible: nm,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Ba(e, t) {
  return (
    (Ba = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Ba(e, t)
  );
}
function hx(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Ba(e, t);
}
const rf = Ue.createContext(null);
function gx(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ic(e, t) {
  var n = function (i) {
      return t && w.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      w.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function yx(e, t) {
  (e = e || {}), (t = t || {});
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var l,
    s = {};
  for (var a in t) {
    if (r[a])
      for (l = 0; l < r[a].length; l++) {
        var u = r[a][l];
        s[r[a][l]] = n(u);
      }
    s[a] = n(a);
  }
  for (l = 0; l < o.length; l++) s[o[l]] = n(o[l]);
  return s;
}
function Pn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function vx(e, t) {
  return ic(e.children, function (n) {
    return w.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Pn(n, "appear", e),
      enter: Pn(n, "enter", e),
      exit: Pn(n, "exit", e),
    });
  });
}
function xx(e, t, n) {
  var r = ic(e.children),
    o = yx(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var l = o[i];
      if (w.isValidElement(l)) {
        var s = i in t,
          a = i in r,
          u = t[i],
          d = w.isValidElement(u) && !u.props.in;
        a && (!s || d)
          ? (o[i] = w.cloneElement(l, {
              onExited: n.bind(null, l),
              in: !0,
              exit: Pn(l, "exit", e),
              enter: Pn(l, "enter", e),
            }))
          : !a && s && !d
          ? (o[i] = w.cloneElement(l, { in: !1 }))
          : a &&
            s &&
            w.isValidElement(u) &&
            (o[i] = w.cloneElement(l, {
              onExited: n.bind(null, l),
              in: u.props.in,
              exit: Pn(l, "exit", e),
              enter: Pn(l, "enter", e),
            }));
      }
    }),
    o
  );
}
var wx =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  Sx = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  lc = (function (e) {
    hx(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var l = i.handleExited.bind(gx(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: l,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var l = i.children,
          s = i.handleExited,
          a = i.firstRender;
        return { children: a ? vx(o, s) : xx(o, l, s), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var l = ic(this.props.children);
        o.key in l ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var a = $({}, s.children);
              return delete a[o.key], { children: a };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          l = o.childFactory,
          s = Qe(o, ["component", "childFactory"]),
          a = this.state.contextValue,
          u = wx(this.state.children).map(l);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? Ue.createElement(rf.Provider, { value: a }, u)
            : Ue.createElement(
                rf.Provider,
                { value: a },
                Ue.createElement(i, s, u)
              )
        );
      }),
      t
    );
  })(Ue.Component);
lc.propTypes = {};
lc.defaultProps = Sx;
const kx = lc;
function Ex(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: l,
      in: s,
      onExited: a,
      timeout: u,
    } = e,
    [d, p] = w.useState(!1),
    m = De(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    x = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o },
    y = De(n.child, d && n.childLeaving, r && n.childPulsate);
  return (
    !s && !d && p(!0),
    w.useEffect(() => {
      if (!s && a != null) {
        const g = setTimeout(a, u);
        return () => {
          clearTimeout(g);
        };
      }
    }, [a, s, u]),
    c.jsx("span", {
      className: m,
      style: x,
      children: c.jsx("span", { className: y }),
    })
  );
}
const Cx = Mo("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  ot = Cx,
  Px = ["center", "classes", "className"];
let ql = (e) => e,
  of,
  lf,
  sf,
  af;
const Ua = 550,
  jx = 80,
  zx = Io(
    of ||
      (of = ql`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  Nx = Io(
    lf ||
      (lf = ql`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  bx = Io(
    sf ||
      (sf = ql`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  Rx = _t("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  _x = _t(Ex, { name: "MuiTouchRipple", slot: "Ripple" })(
    af ||
      (af = ql`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    ot.rippleVisible,
    zx,
    Ua,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ot.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    ot.child,
    ot.childLeaving,
    Nx,
    Ua,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ot.childPulsate,
    bx,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  Ox = w.forwardRef(function (t, n) {
    const r = Do({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: l } = r,
      s = Qe(r, Px),
      [a, u] = w.useState([]),
      d = w.useRef(0),
      p = w.useRef(null);
    w.useEffect(() => {
      p.current && (p.current(), (p.current = null));
    }, [a]);
    const m = w.useRef(!1),
      x = w.useRef(0),
      y = w.useRef(null),
      g = w.useRef(null);
    w.useEffect(
      () => () => {
        x.current && clearTimeout(x.current);
      },
      []
    );
    const k = w.useCallback(
        (S) => {
          const {
            pulsate: P,
            rippleX: j,
            rippleY: C,
            rippleSize: b,
            cb: A,
          } = S;
          u((R) => [
            ...R,
            c.jsx(
              _x,
              {
                classes: {
                  ripple: De(i.ripple, ot.ripple),
                  rippleVisible: De(i.rippleVisible, ot.rippleVisible),
                  ripplePulsate: De(i.ripplePulsate, ot.ripplePulsate),
                  child: De(i.child, ot.child),
                  childLeaving: De(i.childLeaving, ot.childLeaving),
                  childPulsate: De(i.childPulsate, ot.childPulsate),
                },
                timeout: Ua,
                pulsate: P,
                rippleX: j,
                rippleY: C,
                rippleSize: b,
              },
              d.current
            ),
          ]),
            (d.current += 1),
            (p.current = A);
        },
        [i]
      ),
      h = w.useCallback(
        (S = {}, P = {}, j = () => {}) => {
          const {
            pulsate: C = !1,
            center: b = o || P.pulsate,
            fakeElement: A = !1,
          } = P;
          if ((S == null ? void 0 : S.type) === "mousedown" && m.current) {
            m.current = !1;
            return;
          }
          (S == null ? void 0 : S.type) === "touchstart" && (m.current = !0);
          const R = A ? null : g.current,
            F = R
              ? R.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let ee, se, pe;
          if (
            b ||
            S === void 0 ||
            (S.clientX === 0 && S.clientY === 0) ||
            (!S.clientX && !S.touches)
          )
            (ee = Math.round(F.width / 2)), (se = Math.round(F.height / 2));
          else {
            const { clientX: me, clientY: xe } =
              S.touches && S.touches.length > 0 ? S.touches[0] : S;
            (ee = Math.round(me - F.left)), (se = Math.round(xe - F.top));
          }
          if (b)
            (pe = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3)),
              pe % 2 === 0 && (pe += 1);
          else {
            const me =
                Math.max(Math.abs((R ? R.clientWidth : 0) - ee), ee) * 2 + 2,
              xe =
                Math.max(Math.abs((R ? R.clientHeight : 0) - se), se) * 2 + 2;
            pe = Math.sqrt(me ** 2 + xe ** 2);
          }
          S != null && S.touches
            ? y.current === null &&
              ((y.current = () => {
                k({
                  pulsate: C,
                  rippleX: ee,
                  rippleY: se,
                  rippleSize: pe,
                  cb: j,
                });
              }),
              (x.current = setTimeout(() => {
                y.current && (y.current(), (y.current = null));
              }, jx)))
            : k({
                pulsate: C,
                rippleX: ee,
                rippleY: se,
                rippleSize: pe,
                cb: j,
              });
        },
        [o, k]
      ),
      f = w.useCallback(() => {
        h({}, { pulsate: !0 });
      }, [h]),
      v = w.useCallback((S, P) => {
        if (
          (clearTimeout(x.current),
          (S == null ? void 0 : S.type) === "touchend" && y.current)
        ) {
          y.current(),
            (y.current = null),
            (x.current = setTimeout(() => {
              v(S, P);
            }));
          return;
        }
        (y.current = null),
          u((j) => (j.length > 0 ? j.slice(1) : j)),
          (p.current = P);
      }, []);
    return (
      w.useImperativeHandle(n, () => ({ pulsate: f, start: h, stop: v }), [
        f,
        h,
        v,
      ]),
      c.jsx(
        Rx,
        $({ className: De(ot.root, i.root, l), ref: g }, s, {
          children: c.jsx(kx, { component: null, exit: !0, children: a }),
        })
      )
    );
  }),
  Tx = Ox;
function $x(e) {
  return $o("MuiButtonBase", e);
}
const Mx = Mo("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  Ax = Mx,
  Ix = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  Lx = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      l = Nl({ root: ["root", t && "disabled", n && "focusVisible"] }, $x, o);
    return n && r && (l.root += ` ${r}`), l;
  },
  Fx = _t("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${Ax.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  Dx = w.forwardRef(function (t, n) {
    const r = Do({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: l,
        className: s,
        component: a = "button",
        disabled: u = !1,
        disableRipple: d = !1,
        disableTouchRipple: p = !1,
        focusRipple: m = !1,
        LinkComponent: x = "a",
        onBlur: y,
        onClick: g,
        onContextMenu: k,
        onDragLeave: h,
        onFocus: f,
        onFocusVisible: v,
        onKeyDown: S,
        onKeyUp: P,
        onMouseDown: j,
        onMouseLeave: C,
        onMouseUp: b,
        onTouchEnd: A,
        onTouchMove: R,
        onTouchStart: F,
        tabIndex: ee = 0,
        TouchRippleProps: se,
        touchRippleRef: pe,
        type: me,
      } = r,
      xe = Qe(r, Ix),
      Fe = w.useRef(null),
      N = w.useRef(null),
      _ = Aa(N, pe),
      { isFocusVisibleRef: T, onFocus: M, onBlur: X, ref: Xt } = nm(),
      [Ee, ft] = w.useState(!1);
    u && Ee && ft(!1),
      w.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            ft(!0), Fe.current.focus();
          },
        }),
        []
      );
    const [ae, ce] = w.useState(!1);
    w.useEffect(() => {
      ce(!0);
    }, []);
    const xn = ae && !d && !u;
    w.useEffect(() => {
      Ee && m && !d && ae && N.current.pulsate();
    }, [d, m, Ee, ae]);
    function $e(I, hc, hh = p) {
      return Kr(
        (gc) => (hc && hc(gc), !hh && N.current && N.current[I](gc), !0)
      );
    }
    const th = $e("start", j),
      nh = $e("stop", k),
      rh = $e("stop", h),
      oh = $e("stop", b),
      ih = $e("stop", (I) => {
        Ee && I.preventDefault(), C && C(I);
      }),
      lh = $e("start", F),
      sh = $e("stop", A),
      ah = $e("stop", R),
      uh = $e(
        "stop",
        (I) => {
          X(I), T.current === !1 && ft(!1), y && y(I);
        },
        !1
      ),
      ch = Kr((I) => {
        Fe.current || (Fe.current = I.currentTarget),
          M(I),
          T.current === !0 && (ft(!0), v && v(I)),
          f && f(I);
      }),
      rs = () => {
        const I = Fe.current;
        return a && a !== "button" && !(I.tagName === "A" && I.href);
      },
      os = w.useRef(!1),
      dh = Kr((I) => {
        m &&
          !os.current &&
          Ee &&
          N.current &&
          I.key === " " &&
          ((os.current = !0),
          N.current.stop(I, () => {
            N.current.start(I);
          })),
          I.target === I.currentTarget &&
            rs() &&
            I.key === " " &&
            I.preventDefault(),
          S && S(I),
          I.target === I.currentTarget &&
            rs() &&
            I.key === "Enter" &&
            !u &&
            (I.preventDefault(), g && g(I));
      }),
      fh = Kr((I) => {
        m &&
          I.key === " " &&
          N.current &&
          Ee &&
          !I.defaultPrevented &&
          ((os.current = !1),
          N.current.stop(I, () => {
            N.current.pulsate(I);
          })),
          P && P(I),
          g &&
            I.target === I.currentTarget &&
            rs() &&
            I.key === " " &&
            !I.defaultPrevented &&
            g(I);
      });
    let Vo = a;
    Vo === "button" && (xe.href || xe.to) && (Vo = x);
    const Nr = {};
    Vo === "button"
      ? ((Nr.type = me === void 0 ? "button" : me), (Nr.disabled = u))
      : (!xe.href && !xe.to && (Nr.role = "button"),
        u && (Nr["aria-disabled"] = u));
    const ph = Aa(n, Xt, Fe),
      mc = $({}, r, {
        centerRipple: i,
        component: a,
        disabled: u,
        disableRipple: d,
        disableTouchRipple: p,
        focusRipple: m,
        tabIndex: ee,
        focusVisible: Ee,
      }),
      mh = Lx(mc);
    return c.jsxs(
      Fx,
      $(
        {
          as: Vo,
          className: De(mh.root, s),
          ownerState: mc,
          onBlur: uh,
          onClick: g,
          onContextMenu: nh,
          onFocus: ch,
          onKeyDown: dh,
          onKeyUp: fh,
          onMouseDown: th,
          onMouseLeave: ih,
          onMouseUp: oh,
          onDragLeave: rh,
          onTouchEnd: sh,
          onTouchMove: ah,
          onTouchStart: lh,
          ref: ph,
          tabIndex: u ? -1 : ee,
          type: me,
        },
        Nr,
        xe,
        { children: [l, xn ? c.jsx(Tx, $({ ref: _, center: i }, se)) : null] }
      )
    );
  }),
  Bx = Dx;
function Ux(e) {
  return $o("MuiButton", e);
}
const Vx = Mo("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  ui = Vx,
  Wx = w.createContext({}),
  Hx = Wx,
  Kx = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  Xx = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: l,
      } = e,
      s = {
        root: [
          "root",
          i,
          `${i}${Z(t)}`,
          `size${Z(o)}`,
          `${i}Size${Z(o)}`,
          t === "inherit" && "colorInherit",
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${Z(o)}`],
        endIcon: ["endIcon", `iconSize${Z(o)}`],
      },
      a = Nl(s, Ux, l);
    return $({}, l, a);
  },
  Rm = (e) =>
    $(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  Qx = _t(Bx, {
    shouldForwardProp: (e) => Nm(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${Z(n.color)}`],
        t[`size${Z(n.size)}`],
        t[`${n.variant}Size${Z(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return $(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": $(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : ai(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : ai(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : ai(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": $(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${ui.focusVisible}`]: $(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${ui.disabled}`]: $(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${ai(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${ui.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${ui.disabled}`]: { boxShadow: "none" },
      }
  ),
  qx = _t("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${Z(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    $(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      Rm(e)
    )
  ),
  Gx = _t("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${Z(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    $(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      Rm(e)
    )
  ),
  Yx = w.forwardRef(function (t, n) {
    const r = w.useContext(Hx),
      o = Vu(r, t),
      i = Do({ props: o, name: "MuiButton" }),
      {
        children: l,
        color: s = "primary",
        component: a = "button",
        className: u,
        disabled: d = !1,
        disableElevation: p = !1,
        disableFocusRipple: m = !1,
        endIcon: x,
        focusVisibleClassName: y,
        fullWidth: g = !1,
        size: k = "medium",
        startIcon: h,
        type: f,
        variant: v = "text",
      } = i,
      S = Qe(i, Kx),
      P = $({}, i, {
        color: s,
        component: a,
        disabled: d,
        disableElevation: p,
        disableFocusRipple: m,
        fullWidth: g,
        size: k,
        type: f,
        variant: v,
      }),
      j = Xx(P),
      C =
        h && c.jsx(qx, { className: j.startIcon, ownerState: P, children: h }),
      b = x && c.jsx(Gx, { className: j.endIcon, ownerState: P, children: x });
    return c.jsxs(
      Qx,
      $(
        {
          ownerState: P,
          className: De(r.className, j.root, u),
          component: a,
          disabled: d,
          focusRipple: !m,
          focusVisibleClassName: De(j.focusVisible, y),
          ref: n,
          type: f,
        },
        S,
        { classes: j, children: [C, l, b] }
      )
    );
  }),
  ro = Yx;
function Jx(e) {
  return $o("MuiCircularProgress", e);
}
Mo("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const Zx = [
  "className",
  "color",
  "disableShrink",
  "size",
  "style",
  "thickness",
  "value",
  "variant",
];
let Gl = (e) => e,
  uf,
  cf,
  df,
  ff;
const qt = 44,
  e4 = Io(
    uf ||
      (uf = Gl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
  ),
  t4 = Io(
    cf ||
      (cf = Gl`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
  ),
  n4 = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: o } = e,
      i = {
        root: ["root", n, `color${Z(r)}`],
        svg: ["svg"],
        circle: ["circle", `circle${Z(n)}`, o && "circleDisableShrink"],
      };
    return Nl(i, Jx, t);
  },
  r4 = _t("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], t[`color${Z(n.color)}`]];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      $(
        { display: "inline-block" },
        e.variant === "determinate" && {
          transition: t.transitions.create("transform"),
        },
        e.color !== "inherit" && { color: (t.vars || t).palette[e.color].main }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      Gu(
        df ||
          (df = Gl`
      animation: ${0} 1.4s linear infinite;
    `),
        e4
      )
  ),
  o4 = _t("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg,
  })({ display: "block" }),
  i4 = _t("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.circle,
        t[`circle${Z(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      $(
        { stroke: "currentColor" },
        e.variant === "determinate" && {
          transition: t.transitions.create("stroke-dashoffset"),
        },
        e.variant === "indeterminate" && {
          strokeDasharray: "80px, 200px",
          strokeDashoffset: 0,
        }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      !e.disableShrink &&
      Gu(
        ff ||
          (ff = Gl`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
        t4
      )
  ),
  l4 = w.forwardRef(function (t, n) {
    const r = Do({ props: t, name: "MuiCircularProgress" }),
      {
        className: o,
        color: i = "primary",
        disableShrink: l = !1,
        size: s = 40,
        style: a,
        thickness: u = 3.6,
        value: d = 0,
        variant: p = "indeterminate",
      } = r,
      m = Qe(r, Zx),
      x = $({}, r, {
        color: i,
        disableShrink: l,
        size: s,
        thickness: u,
        value: d,
        variant: p,
      }),
      y = n4(x),
      g = {},
      k = {},
      h = {};
    if (p === "determinate") {
      const f = 2 * Math.PI * ((qt - u) / 2);
      (g.strokeDasharray = f.toFixed(3)),
        (h["aria-valuenow"] = Math.round(d)),
        (g.strokeDashoffset = `${(((100 - d) / 100) * f).toFixed(3)}px`),
        (k.transform = "rotate(-90deg)");
    }
    return c.jsx(
      r4,
      $(
        {
          className: De(y.root, o),
          style: $({ width: s, height: s }, k, a),
          ownerState: x,
          ref: n,
          role: "progressbar",
        },
        h,
        m,
        {
          children: c.jsx(o4, {
            className: y.svg,
            ownerState: x,
            viewBox: `${qt / 2} ${qt / 2} ${qt} ${qt}`,
            children: c.jsx(i4, {
              className: y.circle,
              style: g,
              ownerState: x,
              cx: qt,
              cy: qt,
              r: (qt - u) / 2,
              fill: "none",
              strokeWidth: u,
            }),
          }),
        }
      )
    );
  }),
  zi = l4,
  s4 = "/assets/piece1-00e56736.png",
  a4 = "/assets/1.1-06cce181.png",
  u4 = "/assets/2.1-470aa90c.png",
  c4 = "/assets/3.1-254d6146.png",
  d4 = "/assets/4.1-3ce86d31.png",
  f4 = "/assets/5.1-41555441.png",
  p4 = "/assets/6.1-c471b39e.png",
  m4 = "/assets/7.1-7fd8a3fd.png",
  h4 = "/assets/8.1-aa39ad93.png",
  g4 = "/assets/9.1-66c2e9f1.png",
  y4 = "/assets/puzzle-332efe15.jpeg",
  v4 = "/assets/1-7fa7b5d3.png",
  x4 = "/assets/2-c6054003.png",
  w4 = "/assets/3-bef4e616.png",
  S4 = "/assets/4-fbb6cde8.png",
  k4 = "/assets/5-43a32396.png",
  E4 = "/assets/6-a35c21ae.png",
  C4 = "/assets/7-c94a71e0.png",
  P4 = "/assets/8-0e5fe08e.png",
  j4 = "/assets/9-5c60fb48.png",
  z4 = [
    { path: s4, marginBottom: "31px", puzzlePieceSize: 21 },
    { path: a4, marginBottom: "16px", puzzlePieceSize: 10 },
    { path: u4, marginBottom: "47px", puzzlePieceSize: 11 },
    { path: c4, marginBottom: "150px", puzzlePieceSize: 11 },
    { path: d4, marginBottom: "70px", puzzlePieceSize: 11 },
    { path: f4, marginBottom: "125px", puzzlePieceSize: 18 },
    { path: p4, marginBottom: "50px", puzzlePieceSize: 18 },
    { path: m4, marginBottom: "-10px", puzzlePieceSize: 19 },
    { path: h4, marginBottom: "137px", puzzlePieceSize: 18 },
    { path: g4, marginBottom: "126px", puzzlePieceSize: 17 },
  ],
  pf = [
    {
      path: y4,
      minPuzzleValue: 52,
      maxPuzzleValue: 54,
      allowedPuzzlePieceIndex: 0,
    },
    {
      path: v4,
      minPuzzleValue: 52,
      maxPuzzleValue: 54,
      allowedPuzzlePieceIndex: 1,
    },
    {
      path: x4,
      minPuzzleValue: 57,
      maxPuzzleValue: 59,
      allowedPuzzlePieceIndex: 2,
    },
    {
      path: w4,
      minPuzzleValue: 75,
      maxPuzzleValue: 77,
      allowedPuzzlePieceIndex: 3,
    },
    {
      path: S4,
      minPuzzleValue: 35,
      maxPuzzleValue: 37,
      allowedPuzzlePieceIndex: 4,
    },
    {
      path: k4,
      minPuzzleValue: 48,
      maxPuzzleValue: 50,
      allowedPuzzlePieceIndex: 5,
    },
    {
      path: E4,
      minPuzzleValue: 35,
      maxPuzzleValue: 37,
      allowedPuzzlePieceIndex: 6,
    },
    {
      path: C4,
      minPuzzleValue: 39,
      maxPuzzleValue: 41,
      allowedPuzzlePieceIndex: 7,
    },
    {
      path: P4,
      minPuzzleValue: 73,
      maxPuzzleValue: 75,
      allowedPuzzlePieceIndex: 8,
    },
    {
      path: j4,
      minPuzzleValue: 39,
      maxPuzzleValue: 41,
      allowedPuzzlePieceIndex: 9,
    },
  ],
  N4 = ({ sliderValue: e, onSliderChange: t, onPuzzleSolved: n }) => {
    const [r, o] = w.useState(e),
      [i, l] = w.useState(""),
      [s, a] = w.useState(""),
      [u, d] = w.useState(0),
      [p, m] = w.useState(0),
      [x, y] = w.useState(0),
      [g, k] = w.useState(0),
      [h, f] = w.useState(!1);
    w.useEffect(() => {
      const C = Math.floor(Math.random() * pf.length),
        b = pf[C];
      a(b.path), d(b.minPuzzleValue), m(b.maxPuzzleValue);
      const A = b.allowedPuzzlePieceIndex,
        R = z4[A];
      l(R.path), o(e), k(R.puzzlePieceSize), y(R.marginBottom);
    }, []);
    const v = (C) => {
        const b = Number(C.target.value);
        o(b), t(b);
      },
      S = () => {
        e >= u && e <= p ? (n(), f(!0)) : f(!1);
      },
      P = {
        position: "absolute",
        bottom: "0",
        marginBottom: x,
        left: `${r}%`,
        cursor: "grab",
        zIndex: "1",
        width: `${g}%`,
      },
      j = {
        position: "relative",
        width: "300px",
        height: "200px",
        overflow: "hidden",
        border: e >= u && e <= p ? "4px solid green" : "2px solid transparent",
      };
    return c.jsxs("div", {
      className: "flex flex-col items-center",
      children: [
        c.jsxs("div", {
          style: j,
          className: "my-6",
          children: [
            c.jsx("img", {
              src: s,
              alt: "Puzzle Background",
              className: "w-full h-full object-cover",
            }),
            c.jsx("img", {
              src: i,
              alt: "Puzzle Piece",
              style: P,
              draggable: "false",
              onDragStart: (C) => C.preventDefault(),
            }),
          ],
        }),
        c.jsx("label", {
          htmlFor: "rangeinput",
          className: "mb-2",
          children: "Slide to solve the puzzle:",
        }),
        c.jsx("input", {
          id: "rangeinput",
          type: "range",
          min: "0",
          max: "100",
          value: r,
          onChange: v,
          style: { height: "30px", width: "80%" },
          className: "slider",
        }),
        c.jsx(ro, {
          variant: "contained",
          color: "primary",
          onClick: S,
          className: "my-4",
          disabled: h,
          children: "Verify",
        }),
      ],
    });
  },
  b4 = "/assets/activation-6d7ef80d.jpg";
function _m(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: R4 } = Object.prototype,
  { getPrototypeOf: sc } = Object,
  Yl = ((e) => (t) => {
    const n = R4.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ot = (e) => ((e = e.toLowerCase()), (t) => Yl(t) === e),
  Jl = (e) => (t) => typeof t === e,
  { isArray: zr } = Array,
  No = Jl("undefined");
function _4(e) {
  return (
    e !== null &&
    !No(e) &&
    e.constructor !== null &&
    !No(e.constructor) &&
    ut(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Om = Ot("ArrayBuffer");
function O4(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Om(e.buffer)),
    t
  );
}
const T4 = Jl("string"),
  ut = Jl("function"),
  Tm = Jl("number"),
  Zl = (e) => e !== null && typeof e == "object",
  $4 = (e) => e === !0 || e === !1,
  Ni = (e) => {
    if (Yl(e) !== "object") return !1;
    const t = sc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  M4 = Ot("Date"),
  A4 = Ot("File"),
  I4 = Ot("Blob"),
  L4 = Ot("FileList"),
  F4 = (e) => Zl(e) && ut(e.pipe),
  D4 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ut(e.append) &&
          ((t = Yl(e)) === "formdata" ||
            (t === "object" &&
              ut(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  B4 = Ot("URLSearchParams"),
  U4 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Bo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), zr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let s;
    for (r = 0; r < l; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function $m(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Mm = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Am = (e) => !No(e) && e !== Mm;
function Va() {
  const { caseless: e } = (Am(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && $m(t, o)) || o;
      Ni(t[i]) && Ni(r)
        ? (t[i] = Va(t[i], r))
        : Ni(r)
        ? (t[i] = Va({}, r))
        : zr(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Bo(arguments[r], n);
  return t;
}
const V4 = (e, t, n, { allOwnKeys: r } = {}) => (
    Bo(
      t,
      (o, i) => {
        n && ut(o) ? (e[i] = _m(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  W4 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  H4 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  K4 = (e, t, n, r) => {
    let o, i, l;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !s[l] && ((t[l] = e[l]), (s[l] = !0));
      e = n !== !1 && sc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  X4 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Q4 = (e) => {
    if (!e) return null;
    if (zr(e)) return e;
    let t = e.length;
    if (!Tm(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  q4 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && sc(Uint8Array)),
  G4 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  Y4 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  J4 = Ot("HTMLFormElement"),
  Z4 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  mf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  e5 = Ot("RegExp"),
  Im = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Bo(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(e, r);
  },
  t5 = (e) => {
    Im(e, (t, n) => {
      if (ut(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ut(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  n5 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return zr(e) ? r(e) : r(String(e).split(t)), n;
  },
  r5 = () => {},
  o5 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ms = "abcdefghijklmnopqrstuvwxyz",
  hf = "0123456789",
  Lm = { DIGIT: hf, ALPHA: Ms, ALPHA_DIGIT: Ms + Ms.toUpperCase() + hf },
  i5 = (e = 16, t = Lm.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function l5(e) {
  return !!(
    e &&
    ut(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const s5 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Zl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = zr(r) ? [] : {};
            return (
              Bo(r, (l, s) => {
                const a = n(l, o + 1);
                !No(a) && (i[s] = a);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  a5 = Ot("AsyncFunction"),
  u5 = (e) => e && (Zl(e) || ut(e)) && ut(e.then) && ut(e.catch),
  E = {
    isArray: zr,
    isArrayBuffer: Om,
    isBuffer: _4,
    isFormData: D4,
    isArrayBufferView: O4,
    isString: T4,
    isNumber: Tm,
    isBoolean: $4,
    isObject: Zl,
    isPlainObject: Ni,
    isUndefined: No,
    isDate: M4,
    isFile: A4,
    isBlob: I4,
    isRegExp: e5,
    isFunction: ut,
    isStream: F4,
    isURLSearchParams: B4,
    isTypedArray: q4,
    isFileList: L4,
    forEach: Bo,
    merge: Va,
    extend: V4,
    trim: U4,
    stripBOM: W4,
    inherits: H4,
    toFlatObject: K4,
    kindOf: Yl,
    kindOfTest: Ot,
    endsWith: X4,
    toArray: Q4,
    forEachEntry: G4,
    matchAll: Y4,
    isHTMLForm: J4,
    hasOwnProperty: mf,
    hasOwnProp: mf,
    reduceDescriptors: Im,
    freezeMethods: t5,
    toObjectSet: n5,
    toCamelCase: Z4,
    noop: r5,
    toFiniteNumber: o5,
    findKey: $m,
    global: Mm,
    isContextDefined: Am,
    ALPHABET: Lm,
    generateString: i5,
    isSpecCompliantForm: l5,
    toJSONObject: s5,
    isAsyncFn: a5,
    isThenable: u5,
  };
function D(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
E.inherits(D, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: E.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Fm = D.prototype,
  Dm = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Dm[e] = { value: e };
});
Object.defineProperties(D, Dm);
Object.defineProperty(Fm, "isAxiosError", { value: !0 });
D.from = (e, t, n, r, o, i) => {
  const l = Object.create(Fm);
  return (
    E.toFlatObject(
      e,
      l,
      function (a) {
        return a !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    D.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  );
};
const c5 = null;
function Wa(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Bm(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function gf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Bm(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function d5(e) {
  return E.isArray(e) && !e.some(Wa);
}
const f5 = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function es(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, k) {
        return !E.isUndefined(k[g]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || d,
    i = n.dots,
    l = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (E.isDate(y)) return y.toISOString();
    if (!a && E.isBlob(y))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(y) || E.isTypedArray(y)
      ? a && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function d(y, g, k) {
    let h = y;
    if (y && !k && typeof y == "object") {
      if (E.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (E.isArray(y) && d5(y)) ||
        ((E.isFileList(y) || E.endsWith(g, "[]")) && (h = E.toArray(y)))
      )
        return (
          (g = Bm(g)),
          h.forEach(function (v, S) {
            !(E.isUndefined(v) || v === null) &&
              t.append(
                l === !0 ? gf([g], S, i) : l === null ? g : g + "[]",
                u(v)
              );
          }),
          !1
        );
    }
    return Wa(y) ? !0 : (t.append(gf(k, g, i), u(y)), !1);
  }
  const p = [],
    m = Object.assign(f5, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: Wa,
    });
  function x(y, g) {
    if (!E.isUndefined(y)) {
      if (p.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      p.push(y),
        E.forEach(y, function (h, f) {
          (!(E.isUndefined(h) || h === null) &&
            o.call(t, h, E.isString(f) ? f.trim() : f, g, m)) === !0 &&
            x(h, g ? g.concat(f) : [f]);
        }),
        p.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function yf(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ac(e, t) {
  (this._pairs = []), e && es(e, this, t);
}
const Um = ac.prototype;
Um.append = function (t, n) {
  this._pairs.push([t, n]);
};
Um.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, yf);
      }
    : yf;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function p5(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Vm(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || p5,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = E.isURLSearchParams(t) ? t.toString() : new ac(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class m5 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const vf = m5,
  Wm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  h5 = typeof URLSearchParams < "u" ? URLSearchParams : ac,
  g5 = typeof FormData < "u" ? FormData : null,
  y5 = typeof Blob < "u" ? Blob : null,
  v5 = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  x5 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  zt = {
    isBrowser: !0,
    classes: { URLSearchParams: h5, FormData: g5, Blob: y5 },
    isStandardBrowserEnv: v5,
    isStandardBrowserWebWorkerEnv: x5,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function w5(e, t) {
  return es(
    e,
    new zt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return zt.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function S5(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function k5(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Hm(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    const s = Number.isFinite(+l),
      a = i >= n.length;
    return (
      (l = !l && E.isArray(o) ? o.length : l),
      a
        ? (E.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !s)
        : ((!o[l] || !E.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && E.isArray(o[l]) && (o[l] = k5(o[l])),
          !s)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, o) => {
        t(S5(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const E5 = { "Content-Type": void 0 };
function C5(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ts = {
  transitional: Wm,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = E.isObject(t);
      if ((i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return o && o ? JSON.stringify(Hm(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return w5(t, this.formSerializer).toString();
        if ((s = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return es(
            s ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), C5(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ts.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && E.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (l)
            throw s.name === "SyntaxError"
              ? D.from(s, D.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: zt.classes.FormData, Blob: zt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
E.forEach(["delete", "get", "head"], function (t) {
  ts.headers[t] = {};
});
E.forEach(["post", "put", "patch"], function (t) {
  ts.headers[t] = E.merge(E5);
});
const uc = ts,
  P5 = E.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  j5 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (o = l.indexOf(":")),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && P5[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  xf = Symbol("internals");
function Dr(e) {
  return e && String(e).trim().toLowerCase();
}
function bi(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(bi) : String(e);
}
function z5(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const N5 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function As(e, t, n, r, o) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function b5(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function R5(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class ns {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, a, u) {
      const d = Dr(a);
      if (!d) throw new Error("header name must be a non-empty string");
      const p = E.findKey(o, d);
      (!p || o[p] === void 0 || u === !0 || (u === void 0 && o[p] !== !1)) &&
        (o[p || a] = bi(s));
    }
    const l = (s, a) => E.forEach(s, (u, d) => i(u, d, a));
    return (
      E.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : E.isString(t) && (t = t.trim()) && !N5(t)
        ? l(j5(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Dr(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return z5(o);
        if (E.isFunction(n)) return n.call(this, o, r);
        if (E.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Dr(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || As(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = Dr(l)), l)) {
        const s = E.findKey(r, l);
        s && (!n || As(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || As(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (o, i) => {
        const l = E.findKey(r, i);
        if (l) {
          (n[l] = bi(o)), delete n[i];
          return;
        }
        const s = t ? b5(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = bi(o)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      E.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && E.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[xf] = this[xf] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const s = Dr(l);
      r[s] || (R5(o, l), (r[s] = !0));
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
ns.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.freezeMethods(ns.prototype);
E.freezeMethods(ns);
const Ft = ns;
function Is(e, t) {
  const n = this || uc,
    r = t || n,
    o = Ft.from(r.headers);
  let i = r.data;
  return (
    E.forEach(e, function (s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function Km(e) {
  return !!(e && e.__CANCEL__);
}
function Uo(e, t, n) {
  D.call(this, e ?? "canceled", D.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
E.inherits(Uo, D, { __CANCEL__: !0 });
function _5(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new D(
          "Request failed with status code " + n.status,
          [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const O5 = zt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, l, s) {
          const a = [];
          a.push(n + "=" + encodeURIComponent(r)),
            E.isNumber(o) && a.push("expires=" + new Date(o).toGMTString()),
            E.isString(i) && a.push("path=" + i),
            E.isString(l) && a.push("domain=" + l),
            s === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function T5(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function $5(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Xm(e, t) {
  return e && !T5(t) ? $5(e, t) : t;
}
const M5 = zt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let l = i;
        return (
          t && (n.setAttribute("href", l), (l = n.href)),
          n.setAttribute("href", l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (l) {
          const s = E.isString(l) ? o(l) : l;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function A5(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function I5(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        d = r[i];
      l || (l = u), (n[o] = a), (r[o] = u);
      let p = i,
        m = 0;
      for (; p !== o; ) (m += n[p++]), (p = p % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - l < t)) return;
      const x = d && u - d;
      return x ? Math.round((m * 1e3) / x) : void 0;
    }
  );
}
function wf(e, t) {
  let n = 0;
  const r = I5(50, 250);
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      s = i - n,
      a = r(s),
      u = i <= l;
    n = i;
    const d = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: s,
      rate: a || void 0,
      estimated: a && l && u ? (l - i) / a : void 0,
      event: o,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const L5 = typeof XMLHttpRequest < "u",
  F5 =
    L5 &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = Ft.from(e.headers).normalize(),
          l = e.responseType;
        let s;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener("abort", s);
        }
        E.isFormData(o) &&
          (zt.isStandardBrowserEnv || zt.isStandardBrowserWebWorkerEnv
            ? i.setContentType(!1)
            : i.setContentType("multipart/form-data;", !1));
        let u = new XMLHttpRequest();
        if (e.auth) {
          const x = e.auth.username || "",
            y = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(x + ":" + y));
        }
        const d = Xm(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), Vm(d, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function p() {
          if (!u) return;
          const x = Ft.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            g = {
              data:
                !l || l === "text" || l === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: x,
              config: e,
              request: u,
            };
          _5(
            function (h) {
              n(h), a();
            },
            function (h) {
              r(h), a();
            },
            g
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = p)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(p);
              }),
          (u.onabort = function () {
            u &&
              (r(new D("Request aborted", D.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new D("Network Error", D.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let y = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const g = e.transitional || Wm;
            e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
              r(
                new D(
                  y,
                  g.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null);
          }),
          zt.isStandardBrowserEnv)
        ) {
          const x =
            (e.withCredentials || M5(d)) &&
            e.xsrfCookieName &&
            O5.read(e.xsrfCookieName);
          x && i.set(e.xsrfHeaderName, x);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
            E.forEach(i.toJSON(), function (y, g) {
              u.setRequestHeader(g, y);
            }),
          E.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          l && l !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            u.addEventListener("progress", wf(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", wf(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (x) => {
              u &&
                (r(!x || x.type ? new Uo(null, e, u) : x),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal &&
              (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
        const m = A5(d);
        if (m && zt.protocols.indexOf(m) === -1) {
          r(new D("Unsupported protocol " + m + ":", D.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(o || null);
      });
    },
  Ri = { http: c5, xhr: F5 };
E.forEach(Ri, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const D5 = {
  getAdapter: (e) => {
    e = E.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = E.isString(n) ? Ri[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new D(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            E.hasOwnProp(Ri, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!E.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Ri,
};
function Ls(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Uo(null, e);
}
function Sf(e) {
  return (
    Ls(e),
    (e.headers = Ft.from(e.headers)),
    (e.data = Is.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    D5.getAdapter(e.adapter || uc.adapter)(e).then(
      function (r) {
        return (
          Ls(e),
          (r.data = Is.call(e, e.transformResponse, r)),
          (r.headers = Ft.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Km(r) ||
            (Ls(e),
            r &&
              r.response &&
              ((r.response.data = Is.call(e, e.transformResponse, r.response)),
              (r.response.headers = Ft.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const kf = (e) => (e instanceof Ft ? e.toJSON() : e);
function wr(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, p) {
    return E.isPlainObject(u) && E.isPlainObject(d)
      ? E.merge.call({ caseless: p }, u, d)
      : E.isPlainObject(d)
      ? E.merge({}, d)
      : E.isArray(d)
      ? d.slice()
      : d;
  }
  function o(u, d, p) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(u)) return r(void 0, u, p);
    } else return r(u, d, p);
  }
  function i(u, d) {
    if (!E.isUndefined(d)) return r(void 0, d);
  }
  function l(u, d) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function s(u, d, p) {
    if (p in t) return r(u, d);
    if (p in e) return r(void 0, u);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: s,
    headers: (u, d) => o(kf(u), kf(d), !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const p = a[d] || o,
        m = p(e[d], t[d], d);
      (E.isUndefined(m) && p !== s) || (n[d] = m);
    }),
    n
  );
}
const Qm = "1.4.0",
  cc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    cc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Ef = {};
cc.transitional = function (t, n, r) {
  function o(i, l) {
    return (
      "[Axios v" +
      Qm +
      "] Transitional option '" +
      i +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (i, l, s) => {
    if (t === !1)
      throw new D(
        o(l, " has been removed" + (n ? " in " + n : "")),
        D.ERR_DEPRECATED
      );
    return (
      n &&
        !Ef[l] &&
        ((Ef[l] = !0),
        console.warn(
          o(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, l, s) : !0
    );
  };
};
function B5(e, t, n) {
  if (typeof e != "object")
    throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i];
    if (l) {
      const s = e[i],
        a = s === void 0 || l(s, i, e);
      if (a !== !0)
        throw new D("option " + i + " must be " + a, D.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new D("Unknown option " + i, D.ERR_BAD_OPTION);
  }
}
const Ha = { assertOptions: B5, validators: cc },
  Gt = Ha.validators;
class ll {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new vf(), response: new vf() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = wr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Ha.assertOptions(
        r,
        {
          silentJSONParsing: Gt.transitional(Gt.boolean),
          forcedJSONParsing: Gt.transitional(Gt.boolean),
          clarifyTimeoutError: Gt.transitional(Gt.boolean),
        },
        !1
      ),
      o != null &&
        (E.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Ha.assertOptions(
              o,
              { encode: Gt.function, serialize: Gt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l;
    (l = i && E.merge(i.common, i[n.method])),
      l &&
        E.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (y) => {
            delete i[y];
          }
        ),
      (n.headers = Ft.concat(l, i));
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((a = a && g.synchronous), s.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let d,
      p = 0,
      m;
    if (!a) {
      const y = [Sf.bind(this), void 0];
      for (
        y.unshift.apply(y, s),
          y.push.apply(y, u),
          m = y.length,
          d = Promise.resolve(n);
        p < m;

      )
        d = d.then(y[p++], y[p++]);
      return d;
    }
    m = s.length;
    let x = n;
    for (p = 0; p < m; ) {
      const y = s[p++],
        g = s[p++];
      try {
        x = y(x);
      } catch (k) {
        g.call(this, k);
        break;
      }
    }
    try {
      d = Sf.call(this, x);
    } catch (y) {
      return Promise.reject(y);
    }
    for (p = 0, m = u.length; p < m; ) d = d.then(u[p++], u[p++]);
    return d;
  }
  getUri(t) {
    t = wr(this.defaults, t);
    const n = Xm(t.baseURL, t.url);
    return Vm(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  ll.prototype[t] = function (n, r) {
    return this.request(
      wr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, l, s) {
      return this.request(
        wr(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: l,
        })
      );
    };
  }
  (ll.prototype[t] = n()), (ll.prototype[t + "Form"] = n(!0));
});
const _i = ll;
class dc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const l = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(o);
        return (
          (l.cancel = function () {
            r.unsubscribe(i);
          }),
          l
        );
      }),
      t(function (i, l, s) {
        r.reason || ((r.reason = new Uo(i, l, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new dc(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const U5 = dc;
function V5(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function W5(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const Ka = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ka).forEach(([e, t]) => {
  Ka[t] = e;
});
const H5 = Ka;
function qm(e) {
  const t = new _i(e),
    n = _m(_i.prototype.request, t);
  return (
    E.extend(n, _i.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return qm(wr(e, o));
    }),
    n
  );
}
const ve = qm(uc);
ve.Axios = _i;
ve.CanceledError = Uo;
ve.CancelToken = U5;
ve.isCancel = Km;
ve.VERSION = Qm;
ve.toFormData = es;
ve.AxiosError = D;
ve.Cancel = ve.CanceledError;
ve.all = function (t) {
  return Promise.all(t);
};
ve.spread = V5;
ve.isAxiosError = W5;
ve.mergeConfig = wr;
ve.AxiosHeaders = Ft;
ve.formToJSON = (e) => Hm(E.isHTMLForm(e) ? new FormData(e) : e);
ve.HttpStatusCode = H5;
ve.default = ve;
const cr = ve;
function K5() {
  const [e, t] = w.useState(0),
    [n, r] = w.useState(!1),
    [o, i] = w.useState(!1),
    [l, s] = w.useState(!1),
    [a, u] = w.useState(""),
    [d, p] = w.useState(""),
    [m, x] = w.useState(!1),
    [y, g] = w.useState(!1),
    [k, h] = w.useState(""),
    [f, v] = w.useState(""),
    [S, P] = w.useState(""),
    [j, C] = w.useState(""),
    [b, A] = w.useState(!1),
    [R, F] = w.useState(!1),
    [ee, se] = w.useState(!1),
    [pe, me] = w.useState(""),
    [xe, Fe] = w.useState(!1),
    N = w.useRef(null);
  w.useEffect(() => {
    window.scrollTo(0, 0);
  }, []),
    w.useEffect(() => {
      const ae = window.innerWidth <= 800;
      ee &&
        N.current &&
        xe &&
        !ae &&
        (N.current.scrollIntoView({ behavior: "smooth" }), Fe(!1));
    }, [ee, xe]);
  const _ = () => {
    r(!0), i(!1), P("");
  };
  async function T(ae) {
    if ((ae.preventDefault(), v(""), C(""), n && a && d && m)) {
      A(!0);
      try {
        const ce = await cr.post(
          "https://osp.com.np/api/keys/get-activation-key/",
          { phone: a, serial_key: d }
        );
        console.log(ce),
          console.log("response data:", ce.data),
          h(ce.data),
          F(!0),
          se(!0),
          Fe(!0);
      } catch (ce) {
        console.log(ce.response.data.error),
          me(ce.response.data.error),
          console.log(ce);
      } finally {
        A(!1);
      }
    } else
      a
        ? d
          ? m
            ? n
              ? me("Error submitting request.Please try again")
              : P("Please verify you are human")
            : C(
                "Please enter the serial number in the format XXXXX-XXXXX-XXXXX-XXXXX"
              )
          : C("Please fill this field")
        : v("Please fill this field");
  }
  const M = (ae) => {
      u(ae.target.value), F(!1);
    },
    X = () => {
      s(!l), i(!l);
    },
    Xt = (ae) => {
      const ce = ae.replace(/\W/g, "").toUpperCase();
      let xn = "";
      for (let $e = 0; $e < ce.length; $e++)
        $e > 0 && $e % 5 === 0 && (xn += "-"), (xn += ce.charAt($e));
      return xn;
    },
    Ee = (ae) => {
      F(!1);
      const ce = ae.target.value.trim(),
        xn = Xt(ce);
      p(xn), g(!0), ce.length === 23 ? x(!0) : x(!1);
    },
    ft = () => {
      g(!1), v(""), C(""), me("");
    };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx("div", {
        className: "pl-8 pr-8",
        children: c.jsxs("div", {
          className:
            "flex flex-col md:flex-row md:items-center font-poppins md:space-x-8",
          children: [
            c.jsx("div", {
              className:
                "md:w-1/2 p-8 flex flex-col items-center md:items-start md:h-[550px]",
              children: c.jsx("img", {
                src: b4,
                alt: "Send details for Activation Key",
                className: "h-full w-auto mb-4 -mt-10",
              }),
            }),
            c.jsx("div", {
              className: "md:w-1/2 p-10 md:h-[500px]",
              children: c.jsxs("form", {
                className: "space-y-4",
                onSubmit: T,
                children: [
                  c.jsxs("div", {
                    className: "mb-4",
                    children: [
                      c.jsx("label", { htmlFor: "phone", children: "Phone" }),
                      c.jsx("input", {
                        id: "phone",
                        className: `w-full p-3 rounded-2xl bg-[#ffffff] shadow-md vorder-solid border-2 border-[#eae9e9] ${
                          f ? "border-red-500" : ""
                        }`,
                        type: "tel",
                        placeholder: "Your Phone",
                        value: a,
                        onChange: M,
                        onBlur: ft,
                      }),
                      f &&
                        c.jsx("p", {
                          style: { color: "red", fontSize: "12px" },
                          children: f,
                        }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        htmlFor: "serial",
                        children: "Input Serial Number",
                      }),
                      c.jsx("input", {
                        id: "serial",
                        className: `w-full p-3 rounded-2xl bg-[#ffffff] shadow-md vorder-solid border-2 border-[#eae9e9] ${
                          j ? "border-red-500" : ""
                        }`,
                        type: "text",
                        placeholder: "XXXXX-XXXXX-XXXXX-XXXXX",
                        value: d,
                        onChange: Ee,
                        onBlur: ft,
                      }),
                      y &&
                        !m &&
                        c.jsx("p", {
                          style: { color: "red", fontSize: "12px" },
                          children:
                            "Please enter the serial number in the format XXXXX-XXXXX-XXXXX-XXXXX",
                        }),
                      j &&
                        c.jsx("p", {
                          style: { color: "red", fontSize: "12px" },
                          children: j,
                        }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      c.jsx("input", {
                        type: "checkbox",
                        checked: l,
                        onChange: X,
                      }),
                      c.jsx("label", {
                        className: "ml-2",
                        children: "I'm not a robot (Captcha)",
                      }),
                      S &&
                        c.jsx("p", {
                          style: { color: "red", fontSize: "12px" },
                          children: S,
                        }),
                    ],
                  }),
                  c.jsx("button", {
                    type: "submit",
                    className:
                      "w-full bg-[#9271af] hover:bg-[#FDA216] text-white font-bold py-2 px-4 rounded-md",
                    disabled: b,
                    children: b
                      ? c.jsxs("svg", {
                          className: "w-6 h-6 mx-auto animate-spin",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          children: [
                            c.jsx("circle", {
                              className: "opacity-25",
                              cx: "12",
                              cy: "12",
                              r: "10",
                              stroke: "currentColor",
                              strokeWidth: "4",
                            }),
                            c.jsx("path", {
                              className: "opacity-75",
                              fill: "currentColor",
                              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zM12 20c2.485 0 4.75-.896 6.53-2.38l-3-1.648A4.008 4.008 0 0012 16V4c4.418 0 8 3.582 8 8s-3.582 8-8 8z",
                            }),
                            " ",
                          ],
                        })
                      : R
                      ? "Request Sent!"
                      : "Submit",
                  }),
                  pe &&
                    c.jsx("p", {
                      style: { color: "red", fontSize: "12px" },
                      children: pe,
                    }),
                ],
              }),
            }),
          ],
        }),
      }),
      o &&
        !n &&
        c.jsx("div", {
          className:
            "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50",
          children: c.jsx("div", {
            className: "bg-white p-4 rounded-lg",
            children: c.jsx(N4, {
              sliderValue: e,
              onSliderChange: t,
              onPuzzleSolved: _,
            }),
          }),
        }),
      c.jsxs("div", {
        ref: N,
        children: [
          k &&
            !k.message &&
            c.jsxs("div", {
              className:
                "flex sm:max-md:flex-col gap-24 sm:max-md:gap-2 sm:max-md:items-center sm:max-md:justify-center items-center justify-center border-2 w-0.8 pt-5 pb-5",
              children: [
                c.jsxs("div", {
                  className:
                    "flex-col sm:max-md:items-center sm:max-md:justify-center",
                  children: [
                    c.jsxs("p", {
                      className:
                        "font-semibold  sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                      children: [" ", "Your Serial Key"],
                    }),
                    c.jsx("p", {
                      className:
                        "sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                      children: k["serial key"],
                    }),
                    c.jsx("br", {}),
                  ],
                }),
                c.jsxs("div", {
                  className:
                    "flex-col sm:max-md:items-center sm:max-md:justify-center",
                  children: [
                    c.jsx("p", {
                      className:
                        "font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                      children: "Your Activation Key",
                    }),
                    c.jsx("p", {
                      className:
                        "sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                      children: k.activation_key,
                    }),
                    c.jsx("br", {}),
                  ],
                }),
                k["First Requested"] &&
                  c.jsxs(c.Fragment, {
                    children: [
                      c.jsxs("div", {
                        className:
                          "flex-col sm:max-md:items-center sm:max-md:justify-center",
                        children: [
                          c.jsx("p", {
                            className:
                              "font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                            children: "Category",
                          }),
                          c.jsx("p", {
                            className:
                              "sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                            children: k.Category,
                          }),
                          c.jsx("br", {}),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "flex-col sm:max-md:items-center sm:max-md:justify-center",
                        children: [
                          c.jsx("p", {
                            className:
                              "font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                            children: "First Requested",
                          }),
                          c.jsx("p", {
                            className:
                              "sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                            children: k["First Requested"],
                          }),
                          c.jsx("br", {}),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "flex-col sm:max-md:items-center sm:max-md:justify-center -mt-7 sm:max-md:mt-0",
                        children: [
                          c.jsx("p", {
                            className:
                              "font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                            children: "Requested from",
                          }),
                          c.jsx("p", {
                            className:
                              "sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                            children: k["Requested from"],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          k.message &&
            c.jsx(c.Fragment, {
              children: c.jsx("div", {
                className:
                  "flex sm:max-md:flex-col gap-24 sm:max-md:gap-2 sm:max-md:items-center sm:max-md:justify-center items-center justify-center border-2 w-0.8 pt-5 pb-5",
                children: c.jsx("div", {
                  className:
                    "flex-col sm:max-md:items-center sm:max-md:justify-center",
                  children: c.jsxs("p", {
                    className:
                      "font-semibold  sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                    children: [
                      " ",
                      k.message,
                      c.jsx("br", {}),
                      "Please contact us at 9801340008",
                    ],
                  }),
                }),
              }),
            }),
        ],
      }),
    ],
  });
}
const X5 = "/assets/image1-1afdf363.jpg";
function Q5() {
  const e = jl(),
    t = () => {
      e("/activation"), window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return c.jsxs("div", {
    className:
      "flex flex-col md:flex-row items-center justify-center font-poppins",
    children: [
      c.jsxs("div", {
        className: "md:w-1/2 p-10 md:ml-10",
        children: [
          c.jsx("h1", {
            className: "text-4xl md:text-4xl font-light mb-4",
            children: "Planting Digitalization",
          }),
          c.jsx("h1", {
            className: "text-4xl md:text-5xl font-bold mb-4",
            children: "Original Software Product",
          }),
          c.jsx("p", {
            className: "text-gray-600 text-sm md:text-base mb-6",
            children:
              "Building a Digital Future Together! Unlock the full potential of Microsoft software with our genuine activation keys and explore world of possibilities.",
          }),
          c.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              c.jsx("div", {
                children: c.jsx("a", {
                  href: "/#about",
                  children: c.jsx("button", {
                    className:
                      "border-none bg-[#6E4294] hover:bg-[#FDA216] h-12 w-40 text-white font-bold py-2 px-4 rounded-3xl",
                    children: "About us",
                  }),
                }),
              }),
              c.jsx("div", {
                children: c.jsx("button", {
                  className:
                    "md:hidden pl-5 pr-4 bg-[#FDA216] hover:bg-[#6E4294] text-white font-bold rounded-3xl h-12",
                  onClick: t,
                  children: "Get Activation Key",
                }),
              }),
            ],
          }),
        ],
      }),
      c.jsx("div", {
        className: "md:w-1/2 p-8 mr-10",
        children: c.jsx("img", {
          src: X5,
          alt: "Planting Digitalization",
          className: "w-5/6 h-auto ml-auto",
        }),
      }),
    ],
  });
}
const q5 = "/assets/about-d9663c10.jpg";
function G5() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx("h1", {
        className:
          "flex items-center justify-center text-2xl md:text-4xl font-bold p-16 mt-7",
        children: "About Us",
      }),
      c.jsxs("div", {
        className:
          "flex flex-col md:flex-row items-center font-poppins md:ml-20 -mt-10",
        children: [
          c.jsxs("div", {
            className: "md:w-1/2 p-8 md:pr-2",
            children: [
              c.jsx("p", {
                className: "text-gray-600 text-sm md:text-base mb-6",
                children:
                  "We are your trusted source for genuine activation keys, empowering businesses to unlock the full potential of Microsoft software. With our wide range of products, including Windows, Office, Professional, Windows Server, and SQL Server keys, we pave the way for a digital future together. Embrace innovation and explore a world of possibilities with our reliable activation solutions. Our mission is to support your business growth by providing seamless access to essential Microsoft tools.",
              }),
              c.jsx("p", {
                className: "text-gray-600 text-sm md:text-base mb-6",
                children:
                  "Join us on this transformative journey as we build a digital landscape, enabling your success through authentic software activation. Partner with us and let's sow the seeds of digital advancement today. Our commitment to authenticity ensures that you receive legitimate and reliable activation solutions, laying a strong foundation for your digital endeavors. As technology evolves, we strive to be your trusted partner in this ever-changing landscape, guiding you towards growth and success.",
              }),
            ],
          }),
          c.jsx("div", {
            className: "md:w-1/2 p-8 md:pl-2 flex justify-center",
            children: c.jsx("img", {
              src: q5,
              alt: "Planting Digitalization",
              className: "w-full h-auto md:w-96 md:h-auto",
            }),
          }),
        ],
      }),
    ],
  });
}
const Y5 = "/assets/contact-0cd9f715.jpg";
function J5(e) {
  return Kt({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
        },
      },
      { tag: "polyline", attr: { points: "22,6 12,13 2,6" } },
    ],
  })(e);
}
function Z5() {
  const [e, t] = w.useState(!0),
    [n, r] = w.useState(!1),
    [o, i] = w.useState(!1),
    [l, s] = w.useState(""),
    [a, u] = w.useState(""),
    [d, p] = w.useState(""),
    [m, x] = w.useState({ name: "", sender_email: "", msz: "" }),
    y = (h) => {
      const { name: f, value: v } = h.target;
      x((S) => ({ ...S, [f]: v })),
        i(!1),
        f === "sender_email" && t(v.endsWith("@gmail.com") || v === ""),
        f === "name" && u(""),
        f === "msz" && p("");
    },
    g = async (h) => {
      if ((h.preventDefault(), m.name)) u("");
      else {
        u("Please enter your name"), r(!1);
        return;
      }
      if (m.msz) p("");
      else {
        p("Please enter your message"), r(!1);
        return;
      }
      if (e) s("");
      else {
        s("Please enter a valid Gmail address."), r(!1);
        return;
      }
      r(!0);
      try {
        const f = await cr.post("https://osp.com.np/api/keys/contact/", m);
        console.log("Contact Form sent successfully:", f.data),
          i(!0),
          x({ name: "", sender_email: "", msz: "" });
      } catch (f) {
        console.error("Error sending form data:", f);
      } finally {
        r(!1);
      }
    },
    k = (h) => {
      const { value: f } = h.target;
      t(f.endsWith("@gmail.com") || f === ""), y(h);
    };
  return c.jsxs("div", {
    className: "p-8 md:p-16",
    children: [
      c.jsx("h1", {
        className:
          "flex items-center justify-center text-2xl md:text-4xl font-bold p-8",
        children: "Contact Us",
      }),
      c.jsxs("div", {
        className:
          "flex flex-col md:flex-row justify-center gap-16 md:items-center font-poppins md:space-x-8",
        children: [
          c.jsxs("div", {
            className:
              "md:w-12/3 p-8 flex-col items-center md:items-start md:h-[550px]",
            children: [
              c.jsx("img", {
                src: Y5,
                alt: "contact us",
                className: "h-full w-full",
              }),
              c.jsxs("div", {
                className: "flex items-center mt-4 ml-2",
                children: [
                  c.jsx(U0, { className: "mr-2 " }),
                  c.jsx("a", {
                    href: "tel:9801340008",
                    className: "text-gray-600 text-xs",
                    children: "9801340008",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-center mt-4 ml-2",
                children: [
                  c.jsx(J5, { className: "mr-2" }),
                  c.jsx("a", {
                    href: "mailto:originalsoftwareproduct@gmail.com",
                    className: "text-gray-600 text-xs ",
                    children: "originalsoftwareproduct@gmail.com",
                  }),
                ],
              }),
            ],
          }),
          c.jsx("div", {
            className:
              "md:w-1/3 p-10 border-2 rounded-3xl shadow-md  md:h-[510px]",
            children: c.jsxs("form", {
              className: "space-y-4",
              onSubmit: g,
              children: [
                c.jsxs("div", {
                  className: "mb-4",
                  children: [
                    c.jsx("input", {
                      className: `w-full p-3 rounded-2xl bg-[#ffffff] shadow-md vorder-solid border-2 border-[#eae9e9] ${
                        a ? "border-red-500" : ""
                      }`,
                      type: "text",
                      placeholder: "Your Name",
                      name: "name",
                      value: m.name,
                      onChange: y,
                    }),
                    a &&
                      c.jsx("p", {
                        style: { color: "red", fontSize: "12px" },
                        children: a,
                      }),
                  ],
                }),
                c.jsxs("div", {
                  className: "pt-8 pb-8",
                  children: [
                    c.jsx("input", {
                      className: `w-full p-3 rounded-2xl bg-[#ffffff] shadow-md vorder-solid border-2 border-[#eae9e9] ${
                        (l && m.sender_email) || !e ? "border-red-500" : ""
                      }`,
                      type: "email",
                      placeholder: "Your Email",
                      name: "sender_email",
                      value: m.sender_email,
                      onChange: k,
                    }),
                    l &&
                      m.sender_email &&
                      c.jsx("p", {
                        style: { color: "red", fontSize: "12px" },
                        children: l,
                      }),
                  ],
                }),
                c.jsxs("div", {
                  className: "mb-4 pb-8",
                  children: [
                    c.jsx("textarea", {
                      className:
                        "w-full p-3 h-40  md:pb-28 rounded-2xl resize-none bg-[#ffffff] shadow-md vorder-solid border-2 border-[#eae9e9]",
                      placeholder: "Your Message",
                      name: "msz",
                      value: m.msz,
                      onChange: y,
                    }),
                    d &&
                      c.jsx("p", {
                        style: { color: "red", fontSize: "12px" },
                        children: d,
                      }),
                  ],
                }),
                c.jsx("button", {
                  type: "submit",
                  className:
                    "w-full bg-[#9271af] hover:bg-[#FDA216] text-white font-bold py-2 px-4 rounded-md",
                  disabled: n,
                  children: n
                    ? c.jsxs("svg", {
                        className: "w-6 h-6 mx-auto animate-spin",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                          c.jsx("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4",
                          }),
                          c.jsx("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zM12 20c2.485 0 4.75-.896 6.53-2.38l-3-1.648A4.008 4.008 0 0012 16V4c4.418 0 8 3.582 8 8s-3.582 8-8 8z",
                          }),
                          " ",
                        ],
                      })
                    : o
                    ? "Message Sent!"
                    : "Send",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Ce(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z",
        },
      },
    ],
  })(e);
}
function gt(e) {
  return Kt({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M21.53 4.306v15.363q0 .807-.472 1.433-.472.627-1.253.85l-6.888 1.974q-.136.037-.29.055-.156.019-.293.019-.396 0-.72-.105-.321-.106-.656-.292l-4.505-2.544q-.248-.137-.391-.366-.143-.23-.143-.515 0-.434.304-.738.304-.305.739-.305h5.831V4.964l-4.38 1.563q-.533.187-.856.658-.322.472-.322 1.03v8.078q0 .496-.248.912-.25.416-.683.651l-2.072 1.13q-.286.148-.571.148-.497 0-.844-.347-.348-.347-.348-.844V6.563q0-.62.33-1.19.328-.571.874-.881L11.07.285q.248-.136.534-.21.285-.075.57-.075.211 0 .38.031.166.031.364.093l6.888 1.899q.384.11.7.329.317.217.547.52.23.305.353.67.125.367.125.764zm-1.588 15.363V4.306q0-.273-.16-.478-.163-.204-.423-.28l-3.388-.93q-.397-.111-.794-.23-.397-.117-.794-.216v19.68l4.976-1.427q.26-.074.422-.28.161-.204.161-.477z",
        },
      },
    ],
  })(e);
}
function ci(e) {
  return Kt({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M4.724 2.505s-.08.127-.004.315c.046.116.186.256.34.404 0 0 1.615 1.576 1.813 1.804.895 1.033 1.284 2.05 1.32 3.453.022.9-.151 1.692-.573 2.613-.756 1.649-2.35 3.468-4.81 5.49l.36-.12c.233-.173.548-.359 1.292-.766 1.713-.936 3.636-1.798 5.999-2.686 3.399-1.277 8.99-2.776 12.172-3.263l.331-.051-.05-.08c-.292-.452-.49-.731-.73-1.027-.697-.863-1.542-1.567-2.577-2.146-1.422-.797-3.267-1.416-5.6-1.88a67.93 67.93 0 00-2.191-.375 209.29 209.29 0 01-3.924-.64c-.425-.075-1.06-.181-1.481-.272a9.404 9.404 0 01-.961-.258c-.268-.105-.645-.207-.726-.515zm.936.909c.003-.002.063.017.137.042.136.046.316.1.526.159.146.04.307.084.479.127.218.056.399.104.401.107.024.027.391 1.198.516 1.647.048.172.084.315.081.318a.789.789 0 01-.09-.14c-.424-.746-1.097-1.505-1.874-2.116a3.104 3.104 0 01-.176-.144zm1.79.494c.018-.001.099.012.195.034.619.136 1.725.35 2.435.47.119.02.216.04.216.047a.348.348 0 01-.098.062c-.119.06-.602.349-.763.457-.403.27-.766.559-1.03.821a5.4 5.4 0 01-.197.192c-.003 0-.022-.062-.041-.137a12.09 12.09 0 00-.65-1.779 1.801 1.801 0 01-.071-.165c0-.001 0-.002.004-.002zm3.147.598c.02.007.06.13.129.404a6.05 6.05 0 01.153 1.977l-.012.038-.187-.06c-.388-.124-1.02-.31-1.562-.46a6.625 6.625 0 01-.56-.17c0-.022.449-.471.642-.642.369-.326 1.362-1.098 1.397-1.087zm.25.036c.011-.01 1.504.248 2.182.378.506.097 1.237.25 1.281.269.022.008-.054.05-.297.16-.96.432-1.672.82-2.38 1.293-.186.124-.341.226-.344.226-.004 0-.006-.104-.006-.23 0-.69-.139-1.387-.391-1.976a.688.688 0 01-.045-.12zm3.86.764c.011.011-.038.306-.08.48-.132.54-.482 1.344-.914 2.099a2.26 2.26 0 01-.152.246 1.499 1.499 0 01-.219-.115c-.422-.247-.9-.48-1.425-.697a4.588 4.588 0 01-.278-.12c-.024-.022 1.143-.795 1.762-1.166.495-.297 1.292-.741 1.306-.727zm.276.043c.033 0 .695.18 1.037.283.853.255 1.837.614 2.475.904l.265.12-.187.043c-1.561.36-2.9.773-4.188 1.296-.107.044-.2.08-.207.08a.911.911 0 01.075-.185c.388-.823.638-1.687.703-2.42.006-.067.018-.121.027-.121zm-6.58 1.512c.01-.01.514.108.789.185.413.116 1.292.41 1.292.433 0 .004-.097.089-.215.188-.475.397-.934.813-1.483 1.343a5.27 5.27 0 01-.308.285c-.007 0-.01-.023-.006-.05.083-.611.065-1.395-.05-2.193a1.29 1.29 0 01-.02-.19zm10.61.01c.007.008-.234.385-.384.6-.22.314-.537.726-1.261 1.637l-.954 1.202a9.418 9.418 0 01-.269.333c-.003 0-.05-.066-.103-.146a7.584 7.584 0 00-1.47-1.625 9.59 9.59 0 00-.27-.218.427.427 0 01-.074-.063c0-.01.617-.274 1.088-.466a37.02 37.02 0 012.778-.99c.442-.135.912-.27.919-.264zm.278.073a.93.93 0 01.207.1 12.274 12.274 0 012.428 1.824c.194.19.667.683.66.687l-.363.029c-1.53.115-3.486.44-5.37.893-.128.03-.238.056-.246.056-.007 0 .133-.14.311-.312 1.107-1.063 1.611-1.734 2.205-2.934.088-.178.163-.333.166-.342h.002zm-8.088.83c.051.01.523.23.879.408.325.163.818.426.843.449.003.003-.17.093-.386.201-.683.342-1.268.664-1.878 1.037-.175.107-.32.194-.325.194-.015 0-.01-.013.088-.191a7.702 7.702 0 00.738-2.002c.014-.062.03-.1.041-.097zm-.475.084c.01.01-.112.46-.19.7a9.092 9.092 0 01-.835 1.808l-.09.147-.203-.197a2.671 2.671 0 00-.676-.5 1.009 1.009 0 01-.176-.102c0-.03.62-.593 1.098-.998.343-.29 1.064-.867 1.072-.858zm2.888 1.188l.177.115c.407.264.888.619 1.255.924.206.172.605.53.687.616l.044.047-.294.082a53.8 53.8 0 00-4.45 1.424c-.167.061-.31.112-.32.112-.021 0-.042.019.333-.326.96-.883 1.807-1.856 2.44-2.802zm-.759.19c.009.009-.492.71-.789 1.106-.356.473-.99 1.265-1.426 1.78a8.769 8.769 0 01-.346.397c-.01.003-.015-.05-.016-.133 0-.44-.112-.91-.308-1.308-.083-.168-.097-.208-.08-.224.068-.062 1.127-.666 1.794-1.023.459-.246 1.163-.604 1.171-.595zm-4.59 1.125a3.988 3.988 0 01.812.518c.008.005-.087.083-.21.172-.345.249-.87.644-1.173.886-.32.255-.331.263-.295.207.24-.367.36-.574.486-.84.113-.236.224-.516.304-.76a.675.675 0 01.077-.183zm1.223.96c.017-.003.04.028.139.175.207.31.366.722.407 1.058l.008.073-.497.192c-.89.346-1.711.687-2.266.94-.155.072-.428.202-.607.292-.179.09-.325.16-.325.156 0-.004.112-.089.25-.188 1.087-.79 2.025-1.654 2.732-2.519.075-.092.144-.172.153-.178a.016.016 0 01.006-.002zm-.564.14c.015.014-.401.484-.681.77-.7.715-1.396 1.275-2.256 1.821-.108.069-.206.13-.22.138-.023.014.008-.022.386-.434.238-.259.42-.474.628-.743.136-.177.162-.202.362-.346.537-.388 1.767-1.221 1.781-1.207zM9.925 0c-.08-.01-1.371.455-2.2.791-1.123.457-1.996.894-2.534 1.272-.2.14-.452.393-.488.49a.356.356 0 00-.021.123l.488.46 1.158.37L9.087 4l3.153.542.032-.27-.028-.005-.415-.066-.085-.148a27.702 27.702 0 01-1.177-2.325 12.264 12.264 0 01-.53-1.465C9.969.02 9.962.005 9.925 0zm-.061.186h.005c.003.003.017.105.032.225.062.508.176 1 .354 1.53.134.4.136.377-.024.332-.37-.103-2.032-.388-3.234-.555a8.796 8.796 0 01-.357-.053c-.015-.015.867-.477 1.258-.66.501-.232 1.867-.8 1.966-.819zM6.362 1.814l.141.048c.772.262 2.706.632 3.775.72.12.01.222.021.225.024.003.003-.1.058-.228.122-.515.258-1.083.573-1.476.819-.115.072-.22.13-.235.129a4.868 4.868 0 01-.17-.027l-.144-.023-.365-.355c-.641-.62-1.141-1.1-1.335-1.28zm-.143.114l.511.638c.282.35.564.699.626.774.063.075.111.138.108.14-.014.011-.74-.13-1.125-.219a8.532 8.532 0 01-.803-.212l-.2-.064.001-.049c.003-.245.312-.607.836-.976zm4.352.869c.015.001.032.032.077.131.124.272.51 1.008.603 1.15.03.047.08.05-.433-.033-1.23-.198-1.629-.265-1.629-.273a.36.36 0 01.083-.054 7.13 7.13 0 001.107-.767l.175-.147c.006-.005.012-.008.017-.007zm4.309 8.408l-4.808 1.568-4.18 1.846-1.17.31c-.298.282-.613.568-.948.86-.37.321-.716.612-.98.822a7.46 7.46 0 00-.953.945c-.332.414-.592.854-.704 1.193-.2.61-.103 1.228.285 1.798.495.728 1.48 1.468 2.625 1.972.585.256 1.57.588 2.31.774 1.233.312 3.614.65 4.926.7.266.01.62.01.637-.002.028-.019.233-.405.47-.89.806-1.646 1.389-3.19 1.703-4.508.19-.799.338-1.863.434-3.125.027-.354.037-1.533.016-1.934a13.564 13.564 0 00-.183-1.706.435.435 0 01-.012-.15c.014-.01.059-.025.65-.197zm-1.1.645c.045 0 .16 1.114.191 1.82.006.151.005.247-.004.247-.028 0-.615-.345-1.032-.606a28.716 28.716 0 01-1.162-.772c-.035-.028-.031-.029.266-.131.505-.174 1.704-.558 1.742-.558zm-2.448.803c.03 0 .115.047.315.172.75.47 1.766 1.035 2.2 1.225.136.06.151.036-.16.247-.662.45-1.486.892-2.497 1.342a7.59 7.59 0 01-.331.142.989.989 0 01.043-.2c.245-.905.383-1.82.387-2.554.002-.362.002-.364.037-.373h.006zm-.504.193c.021.022.006.834-.02 1.056a9.206 9.206 0 01-.418 1.837c-.014.017-.511-.468-.676-.66a4.918 4.918 0 01-.669-.973c-.082-.162-.214-.484-.202-.493.056-.04 1.971-.78 1.985-.767zm-2.375.936c.004 0 .008.001.01.004a.881.881 0 01.056.131c.116.315.376.782.602 1.08a6.247 6.247 0 001.017 1.06c.023.02.03.016-.562.24a48.53 48.53 0 01-2.294.8c-.327.106-.604.195-.615.2-.033.011-.023-.009.073-.158.427-.666 1.073-1.97 1.435-2.892.062-.16.122-.32.133-.356.015-.052.031-.07.08-.092a.149.149 0 01.065-.017zm-.728.3c.01.009-.174.398-.356.751-.351.686-.739 1.361-1.253 2.185l-.182.288c-.018.027-.026.018-.082-.094a3.307 3.307 0 01-.28-.842 3.39 3.39 0 01.02-1.083c.047-.227.045-.222.152-.276.462-.237 1.966-.942 1.981-.929zm6.268.255v.154a20.106 20.106 0 01-.255 2.992 9.362 9.362 0 01-1.898-.782c-.354-.194-.865-.507-.85-.522.003-.004.154-.083.334-.177.714-.37 1.395-.77 1.988-1.166.222-.148.555-.389.629-.454zM4.981 15.41c.015 0 .011.028-.012.161a4.137 4.137 0 00-.041.39c-.03.532.057.924.32 1.46.074.15.132.274.129.276-.027.023-2.43.726-3.186.933l-.435.12c-.027.008-.029.002-.02-.06.083-.533.49-1.232 1.058-1.82.378-.39.68-.622 1.195-.915a30.782 30.782 0 01.992-.545zm5.669 1.015c.002-.002.091.045.197.107.777.449 1.86.87 2.783 1.081l.084.02-.115.063c-.482.268-2.071.929-3.694 1.537a68.82 68.82 0 00-.513.194.314.314 0 01-.082.027c0-.004.067-.132.149-.286.456-.852.91-1.887 1.144-2.605.023-.073.044-.135.047-.138zm-.578.19a1.39 1.39 0 01-.063.169 23.534 23.534 0 01-1.261 2.54 9.009 9.009 0 01-.252.433c-.005 0-.114-.066-.244-.145-.77-.472-1.452-1.052-1.9-1.617l-.064-.08.332-.091a23.616 23.616 0 003.19-1.103c.142-.06.26-.109.262-.106zm3.59 1.253c.001 0 .002.001.002.003 0 .08-.183.828-.336 1.37-.128.453-.236.808-.435 1.437a8.533 8.533 0 01-.168.504 15.004 15.004 0 01-3-.841 7.964 7.964 0 01-.639-.283c-.006-.007.213-.11.486-.23 1.655-.721 3.369-1.543 3.955-1.896a.432.432 0 01.135-.064zm-8.287.283c.009.009-.454.671-1.1 1.576l-.587.823c-.097.139-.245.358-.329.488l-.153.236-.162-.137c-.191-.16-.525-.501-.677-.69-.312-.389-.523-.798-.607-1.174-.038-.174-.04-.262-.003-.273a176.26 176.26 0 011.934-.455l1.3-.305c.209-.05.382-.09.384-.089zm.465.178l.117.131a6.763 6.763 0 001.706 1.394c.115.066.202.124.195.128a281.967 281.967 0 01-4.33 1.53.858.858 0 01-.072-.048l-.067-.048.105-.152c.34-.493.768-1.035 1.705-2.162zm2.9 2.073c.003-.003.165.054.362.128.473.177.844.292 1.347.418.617.155 1.51.31 2.038.354.08.006.122.016.11.024-.025.016-.56.194-.953.318a258.526 258.526 0 01-4.636 1.363c-.035.007-.157-.025-.157-.04 0-.009.087-.119.193-.246a22.027 22.027 0 001.476-1.984 56.9 56.9 0 01.22-.335zm-.642.018c.005.005-.253.418-.706 1.132-.192.301-.409.645-.483.762-.075.118-.184.298-.242.4l-.107.185-.054-.014c-.13-.035-1.049-.36-1.291-.456-.301-.12-.615-.264-.846-.389-.289-.156-.655-.388-.627-.397l1.105-.302c1.592-.434 2.473-.683 3.05-.864.109-.033.199-.059.2-.057zm4.523 1.061h.006c.015.038-.575 1.67-.79 2.188-.049.116-.066.145-.092.143a55.54 55.54 0 01-1.433-.2c-.906-.138-2.423-.403-2.806-.49l-.089-.02.543-.122c1.164-.262 1.723-.403 2.29-.577a16.544 16.544 0 002.138-.824c.113-.052.21-.093.233-.098Z",
        },
      },
    ],
  })(e);
}
function Cf(e) {
  return Kt({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M24 7.609v9.556q0 .424-.302.726-.303.303-.726.303h-5.19q-.072 1.149-.556 2.135-.484.986-1.264 1.717-.78.732-1.803 1.15-1.022.417-2.159.417-1.016 0-1.96-.35-.943-.352-1.705-.969-.762-.617-1.295-1.47-.532-.852-.713-1.856H1.028q-.423 0-.726-.303Q0 18.363 0 17.94V7.609q0-.424.302-.726.303-.302.726-.302h5.238q-.072-.182-.072-.387 0-.424.302-.726L11.274.69q.303-.303.726-.303t.726.303l4.778 4.778q.302.302.302.726 0 .205-.072.387h5.238q.423 0 .726.302.302.302.302.726zM12 2.153l-4.04 4.04.387.388h3.012q.423 0 .726.302.302.302.302.726v2.238l3.653-3.653zM7.161 16.84l3.085-8.13H8.238q-.508 1.489-1.028 2.952-.52 1.464-1.004 2.964-.496-1.488-.992-2.958-.496-1.47-1.004-2.957H2.153l3.037 8.129zM12 22.065q.883 0 1.657-.333t1.355-.913q.58-.581.913-1.355.333-.774.333-1.658 0-.81-.302-1.548-.303-.738-.823-1.318-.52-.581-1.228-.944-.707-.363-1.518-.423v4.367q0 .423-.302.725-.303.303-.726.303H7.923q.206.677.593 1.246.387.568.92.98.532.41 1.185.64.653.23 1.379.23zm10.452-5.42V8.13h-6.158q-.133.133-.441.454-.309.32-.714.725-.405.406-.847.853-.441.448-.828.823-.387.375-.684.641-.296.266-.393.302v.097q.968.036 1.845.411t1.578.998q.702.623 1.186 1.446t.677 1.766Z",
        },
      },
    ],
  })(e);
}
const ew = [
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 10 Home",
      price: 750,
    },
    {
      icon: c.jsx(gt, { size: 80, color: "#eb3c00" }),
      keyname: "Office2019 PRO Plus",
      price: 1100,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 11 Home(OEM)",
      price: 3900,
    },
    {
      icon: c.jsx(gt, { size: 80, color: "#eb3c00" }),
      keyname: "Office2021 PRO Plus",
      price: 1300,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 11 PRO",
      price: 1100,
    },
    {
      icon: c.jsx(gt, { size: 80, color: "#eb3c00" }),
      keyname: "Office2021 PRO Plus(Bind)",
      price: 5500,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 10 PRO(OEM)",
      price: 3900,
    },
    {
      icon: c.jsx(gt, { size: 80, color: "#eb3c00" }),
      keyname: "Office2021 PRO Plus(Mac)",
      price: 7e3,
    },
  ],
  tw = (e) =>
    c.jsxs("div", {
      className:
        " bg-[#ffffff] border-solid border-2 shadow-xl p-4 rounded-3xl hover:bg-[#6E4294] flex flex-col items-center justify-center",
      children: [
        e.icon,
        c.jsx("p", {
          className: "p-2 text-[#c3c3c3] font-bold text-center",
          children: e.keyname,
        }),
        c.jsx("p", {
          className: "p-1 text-[#c3c3c3]",
          children: "Activation Key",
        }),
        c.jsxs("p", {
          className: "p-1 text-[#c3c3c3]",
          children: ["Rs.", e.price],
        }),
      ],
    });
function nw() {
  const e = jl(),
    t = () => {
      e("/servicespage"), window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return c.jsxs("div", {
    children: [
      c.jsx("h1", {
        className:
          "flex items-center justify-center text-4xl font-bold mt-7 mb-10",
        children: "Our Services",
      }),
      c.jsx("div", {
        className: "flex flex-wrap mx-auto px-4 lg:max-w-[1240px]",
        children: ew.map((n, r) =>
          c.jsx(
            "div",
            {
              className: "w-full sm:w-/2 md:w-1/4 lg:w-1/4 pl-12 pr-12 pt-10",
              children: c.jsx(tw, { ...n }),
            },
            r
          )
        ),
      }),
      c.jsx("div", {
        className: "flex justify-center mt-10",
        children: c.jsx("button", {
          className:
            "pl-4 pr-4 bg-[#6E4294] hover:bg-[#FDA216] text-white font-bold rounded-3xl h-10 w-32",
          onClick: t,
          children: "More",
        }),
      }),
    ],
  });
}
function rw() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx("div", { id: "home", children: c.jsx(Q5, {}) }),
      c.jsx("div", { id: "services", children: c.jsx(nw, {}) }),
      c.jsx("div", { id: "about", children: c.jsx(G5, {}) }),
      c.jsx("div", { id: "contact", children: c.jsx(Z5, {}) }),
    ],
  });
}
const Pf = "/assets/projectprofessional-fcb9c9cc.png",
  ow = [
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 10 Home",
      price: 750,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 10 Home(OEM)",
      price: 2500,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 10 PRO",
      price: 1e3,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 10 PRO(OEM)",
      price: 3900,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 10 PRO + Office 2021 PRO Plus (Combo)",
      price: 2e3,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 11 Home",
      price: 1e3,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 11 Home(OEM)",
      price: 3900,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 11 PRO",
      price: 1100,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows 11 PRO(OEM)",
      price: 4900,
    },
    {
      icon: c.jsx(gt, { size: 80, color: "#eb3c00" }),
      keyname: "Office 2019 PRO Plus",
      price: 1100,
    },
    {
      icon: c.jsx(gt, { size: 80, color: "#eb3c00" }),
      keyname: "Office 2019 PRO Plus(Bind)",
      price: 5500,
    },
    {
      icon: c.jsx(gt, { size: 80, color: "#eb3c00" }),
      keyname: "Office 2021 PRO Plus",
      price: 1300,
    },
    {
      icon: c.jsx(gt, { size: 80, color: "#eb3c00" }),
      keyname: "Office 2021 PRO Plus(Bind)",
      price: 5900,
    },
    {
      icon: c.jsx(gt, { size: 80, color: "#eb3c00" }),
      keyname: "Office 2021 PRO Plus(Mac)",
      price: 7e3,
    },
    {
      icon: c.jsx(gt, { size: 80, color: "#eb3c00" }),
      keyname: "Office Home & Business",
      price: 1e4,
    },
    {
      icon: c.jsx(gt, { size: 80, color: "#eb3c00" }),
      keyname: "Office Home & Student",
      price: 7e3,
    },
    {
      icon: c.jsx(Cf, { size: 80, color: "#1955B8" }),
      keyname: "Visio Professional 2019",
      price: 39e3,
    },
    {
      icon: c.jsx(Cf, { size: 80, color: "#1955B8" }),
      keyname: "Visio Professional 2021",
      price: 44e3,
    },
    {
      icon: c.jsx("img", {
        src: Pf,
        alt: "Project Professional 2019",
        className: "h-20 w-20",
      }),
      keyname: "Project Professional 2019",
      price: 33e3,
    },
    {
      icon: c.jsx("img", {
        src: Pf,
        alt: "Visio Professional 2021",
        className: "h-20 w-20",
      }),
      keyname: "Project Professional 2021",
      price: 55e3,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows Server 2016- Essential",
      price: 35e3,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows Server 2019- Standard",
      price: 125e3,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows Server 2019- Datacenter",
      price: 147e3,
    },
    {
      icon: c.jsx(Ce, { size: 80, color: "#0078d4" }),
      keyname: "Windows Server 2022- Datacenter",
      price: 275e3,
    },
    {
      icon: c.jsx(ci, { size: 80, color: "#FF080D" }),
      keyname: "Microsoft SQL Server 2019 Standard",
      price: 52e3,
    },
    {
      icon: c.jsx(ci, { size: 80, color: "#FF080D" }),
      keyname: "Microsoft SQL Server 2019 Enterprise",
      price: 75e4,
    },
    {
      icon: c.jsx(ci, { size: 80, color: "#FF080D" }),
      keyname: "Microsoft SQL Server 2022 Standard",
      price: 225e3,
    },
    {
      icon: c.jsx(ci, { size: 80, color: "#FF080D" }),
      keyname: "Microsoft SQL Server 2022 Enterprise",
      price: 95e4,
    },
  ],
  iw = (e) =>
    c.jsxs("div", {
      className:
        " bg-[#ffffff] border-solid border-2 shadow-xl p-4 rounded-3xl hover:bg-[#6E4294] flex flex-col items-center justify-center",
      children: [
        e.icon,
        c.jsx("p", {
          className: "p-2 text-[#c3c3c3] font-bold text-center",
          children: e.keyname,
        }),
        c.jsx("p", {
          className: "p-1 text-[#c3c3c3]",
          children: "Activation Key",
        }),
        c.jsxs("p", {
          className: "p-1 text-[#c3c3c3]",
          children: ["Rs.", e.price],
        }),
      ],
    });
function lw() {
  return c.jsxs("div", {
    children: [
      c.jsx("h1", {
        className:
          "flex items-center justify-center text-4xl font-bold mt-7 mb-10",
        children: "Our Services",
      }),
      c.jsx("div", {
        className: "flex flex-wrap mx-auto px-4 lg:max-w-[1240px]",
        children: ow.map((e, t) =>
          c.jsx(
            "div",
            {
              className: "w-full sm:w-/2 md:w-1/4 lg:w-1/4 pl-12 pr-12 pt-10",
              children: c.jsx(iw, { ...e }),
            },
            t
          )
        ),
      }),
    ],
  });
}
const sw = "/assets/logo-ccd2b31b.svg";
function aw() {
  const e = jl(),
    t = () => {
      e("/activation"), window.scrollTo({ top: 0, behavior: "smooth" });
    },
    n = () => {
      e("/servicespage"), window.scrollTo({ top: 0, behavior: "smooth" });
    },
    r = (i) => {
      e("/"), document.getElementById(i).scrollIntoView({ behavior: "smooth" });
    },
    o = () => {
      e("/"), window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return c.jsx(c.Fragment, {
    children: c.jsx("nav", {
      className: "top-0 bg-[#fcfcfc] pt-5 mt-8 pb-5 ",
      children: c.jsxs("div", {
        className:
          "flex justify-between items-center h-32 max-w-[1240px] mx-auto px-4 text-black sm:max-md:flex-col sm:max-md:h-[600px]",
        children: [
          c.jsx("img", {
            src: sw,
            className: " h-1/4 w-auto cursor-pointer  ml-3 md:h-32",
            onClick: () => o(),
          }),
          c.jsxs("ul", {
            className:
              "flex-col items-center justify-center gap-1  flex space-x-4",
            children: [
              c.jsx("li", {}),
              c.jsx("li", {
                className: "cursor-pointer",
                onClick: () => r("home"),
                children: "Home",
              }),
              c.jsx("li", {
                className: "cursor-pointer",
                onClick: () => r("services"),
                children: "Services",
              }),
              c.jsx("li", {
                className: "cursor-pointer",
                onClick: () => r("about"),
                children: "About Us",
              }),
              c.jsx("li", {
                className: "cursor-pointer",
                onClick: () => r("contact"),
                children: "Contact Us",
              }),
              c.jsx("li", {
                children: c.jsx("button", {
                  className: "cursor-pointer",
                  onClick: t,
                  children: "Get Activation Key",
                }),
              }),
            ],
          }),
          c.jsxs("ul", {
            className:
              "flex-col items-center justify-center gap-1 flex space-x-41 font-light",
            children: [
              c.jsx("li", {}),
              c.jsx("li", {
                className: " cursor-pointer font-semibold",
                onClick: n,
                children: "Services",
              }),
              c.jsx("li", {
                className: " cursor-pointer",
                onClick: n,
                children: "Windows",
              }),
              c.jsx("li", {
                className: "cursor-pointer",
                onClick: n,
                children: "Microsoft Office",
              }),
              c.jsx("li", {
                className: "cursor-pointer",
                onClick: n,
                children: "Microsoft SQL Server",
              }),
              c.jsx("li", {
                className: "cursor-pointer",
                onClick: n,
                children: "Windows Server",
              }),
            ],
          }),
          c.jsxs("ul", {
            className:
              "flex-col items-center justify-center gap-1 flex font-light",
            children: [
              c.jsx("li", {}),
              c.jsx("li", {
                className: "cursor-pointer",
                onClick: n,
                children: "Visio Professional",
              }),
              c.jsx("li", {
                className: "cursor-pointer",
                onClick: n,
                children: "Project Professional",
              }),
              c.jsx("li", { className: "h-4 cursor-pointer" }),
              c.jsxs("li", {
                className: "flex justify-center items-center cursor-pointer",
                children: [
                  c.jsx(U0, { className: "mr-2" }),
                  c.jsx("a", {
                    href: "tel:9801340008",
                    className: "text-gray-600",
                    children: "9801340008",
                  }),
                ],
              }),
              c.jsxs("li", {
                className: "flex justify-center items-center cursor-pointer",
                children: [
                  c.jsx(Xg, { className: "mr-2" }),
                  c.jsx("a", {
                    href: "mailto:originalsoftwareproduct@gmail.com",
                    className: "text-gray-600 ",
                    children: "originalsoftwareproduct@gmail.com",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function uw() {
  const [e, t] = w.useState(null),
    [n, r] = w.useState(null),
    [o, i] = w.useState(""),
    [l, s] = w.useState(""),
    [a, u] = w.useState(""),
    [d, p] = w.useState(""),
    [m, x] = w.useState(""),
    [y, g] = w.useState(!1),
    [k, h] = w.useState(!1),
    [f, v] = w.useState(!1),
    [S, P] = w.useState(""),
    [j, C] = w.useState(""),
    b = (_) => {
      i(_.target.value);
    },
    A = (_) => {
      t(_.target.files[0]);
    },
    R = (_) => {
      r(_.target.files[0]);
    },
    F = (_) => {
      s(_.target.value);
    },
    ee = (_) => {
      const T = _.target.value.trim(),
        M = pe(T);
      x(M);
    },
    se = (_) => {
      const T = _.target.value.trim(),
        M = pe(T);
      u(M);
    },
    pe = (_) => {
      const T = _.replace(/\W/g, "").toUpperCase();
      let M = "";
      for (let X = 0; X < T.length; X++)
        X > 0 && X % 5 === 0 && (M += "-"), (M += T.charAt(X));
      return M;
    },
    me = (_) => {
      if ((_.preventDefault(), C(""), !a || !l || !d || !m)) {
        alert("Please fill all the fields.");
        return;
      }
      const T = { activation_key: a, category: l, phone: d, serial_key: m };
      v(!0),
        cr
          .put("https://osp.com.np/api/keys/edit-key/", T)
          .then((M) => {
            console.log(M), P(M.data);
          })
          .catch((M) => {
            console.log(M), C(M.response.data.error);
          })
          .finally(() => {
            v(!1);
          });
    },
    xe = () => {
      C("");
    },
    Fe = (_) => {
      if ((_.preventDefault(), !e)) {
        alert("Please select a file.");
        return;
      }
      if (!o) {
        alert("Select category");
        return;
      }
      g(!0);
      const T = new FormData();
      T.append("file", e),
        T.append("category", o),
        cr
          .post("https://osp.com.np/api/keys/upload-csv/", T, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((M) => {
            alert("File sent successfully!"), console.log(M);
          })
          .catch((M) => {
            alert("Error occurred while sending the file."), console.log(M);
          })
          .finally(() => {
            g(!1);
          });
    },
    N = (_) => {
      if ((_.preventDefault(), !n)) {
        alert("Please select a file.");
        return;
      }
      h(!0);
      const T = new FormData();
      T.append("file", n),
        cr
          .post("https://osp.com.np/api/keys/upload-activation-keys/", T, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((M) => {
            alert("File sent successfully!"), console.log(M);
          })
          .catch((M) => {
            alert("Error occurred while sending the file."), console.log(M);
          })
          .finally(() => {
            h(!1);
          });
    };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs("div", {
        className: "p-8",
        children: [
          c.jsxs("form", {
            onSubmit: Fe,
            className: "mb-8",
            children: [
              c.jsx("label", {
                htmlFor: "csvupload",
                className: "block mb-2 font-bold",
                children: "Serial Key Upload",
              }),
              c.jsx("input", {
                id: "csvupload",
                type: "file",
                onChange: A,
                className: "border p-2 rounded-lg w-full",
              }),
              c.jsxs("div", {
                className: "mb-4",
                children: [
                  c.jsx("label", {
                    htmlFor: "categories",
                    className: "block mt-4 font-bold",
                    children: "Select a category:",
                  }),
                  c.jsxs("select", {
                    id: "categories",
                    name: "categories",
                    value: o,
                    onChange: b,
                    className: "border p-2 rounded-lg bg-gray-100 w-full",
                    children: [
                      c.jsx("option", { value: "", children: "--Category--" }),
                      c.jsx("option", {
                        value: "a",
                        children: "Windows 10 Home",
                      }),
                      c.jsx("option", {
                        value: "b",
                        children: "Windows 10 Home OEM",
                      }),
                      c.jsx("option", {
                        value: "c",
                        children: "Windows 10 Pro",
                      }),
                      c.jsx("option", {
                        value: "d",
                        children: "Windows 10 Pro OEM",
                      }),
                      c.jsx("option", {
                        value: "e",
                        children: "Windows 11 Home",
                      }),
                      c.jsx("option", {
                        value: "f",
                        children: "Windows 11 Home OEM",
                      }),
                      c.jsx("option", {
                        value: "g",
                        children: "Windows 11 Pro",
                      }),
                      c.jsx("option", {
                        value: "h",
                        children: "Windows 11 Pro OEM",
                      }),
                      c.jsx("option", { value: "i", children: "Office 2019" }),
                      c.jsx("option", {
                        value: "j",
                        children: "Office 2019 Bind",
                      }),
                      c.jsx("option", { value: "k", children: "Office 2021" }),
                      c.jsx("option", {
                        value: "l",
                        children: "Office 2021 Bind",
                      }),
                      c.jsx("option", {
                        value: "m",
                        children: "Office 2021 Mac Bind",
                      }),
                      c.jsx("option", {
                        value: "n",
                        children: "Office Home Business Win",
                      }),
                      c.jsx("option", {
                        value: "o",
                        children: "Office Home Business Mac",
                      }),
                      c.jsx("option", {
                        value: "p",
                        children: "Office Home Student Win",
                      }),
                      c.jsx("option", {
                        value: "q",
                        children: "Office Home Student Mac",
                      }),
                      c.jsx("option", {
                        value: "r",
                        children: "Office 2021 Home Basic",
                      }),
                      c.jsx("option", {
                        value: "s",
                        children: "Project Professional2019",
                      }),
                      c.jsx("option", {
                        value: "t",
                        children: "Project Professional 2021",
                      }),
                      c.jsx("option", {
                        value: "u",
                        children: "Visio Professional 2019",
                      }),
                      c.jsx("option", {
                        value: "v",
                        children: "Visio Professional 2021",
                      }),
                      c.jsx("option", {
                        value: "w",
                        children: "Windows Server 2016 Essential",
                      }),
                      c.jsx("option", {
                        value: "x",
                        children: "Windows Server 2019 Standard",
                      }),
                      c.jsx("option", {
                        value: "y",
                        children: "Windows Server 2019 Datacenter",
                      }),
                      c.jsx("option", {
                        value: "z",
                        children: "Windows Server 2022 Datacenter",
                      }),
                      c.jsx("option", {
                        value: "aa",
                        children: "Microsoft SQL Server 2019 Standard",
                      }),
                      c.jsx("option", {
                        value: "ab",
                        children: "Microsoft SQL Server 2019 Enterprise",
                      }),
                      c.jsx("option", {
                        value: "ac",
                        children: "Microsoft SQL Server 2022 Standard",
                      }),
                      c.jsx("option", {
                        value: "ad",
                        children: "Microsoft SQL Server 2022 Enterprise",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx(ro, {
                type: "submit",
                variant: "contained",
                disableElevation: !0,
                disabled: y,
                startIcon: y && c.jsx(zi, { size: 20 }),
                children: y ? "Submitting..." : "Submit",
              }),
            ],
          }),
          c.jsxs("form", {
            onSubmit: N,
            children: [
              c.jsx("label", {
                htmlFor: "ackupload",
                className: "block mb-2 font-bold",
                children: "Activation Key Upload",
              }),
              c.jsx("input", {
                id: "ackupload",
                type: "file",
                onChange: R,
                className: "border p-2 rounded-lg w-full mb-4",
              }),
              c.jsx(ro, {
                type: "submit",
                variant: "contained",
                disableElevation: !0,
                disabled: k,
                startIcon: k && c.jsx(zi, { size: 20 }),
                children: k ? "Submitting..." : "Submit",
              }),
            ],
          }),
          c.jsxs("form", {
            onSubmit: me,
            className: "mb-8 mt-8",
            onBlur: xe,
            children: [
              c.jsx("label", {
                htmlFor: "serialupload",
                className: "block mb-2 font-bold",
                children: "Activation Key Update",
              }),
              c.jsx("label", {
                htmlFor: "serialupload",
                className: "font-light",
                children: "Serial Key",
              }),
              c.jsx("input", {
                id: "serialupload",
                type: "text",
                value: m,
                onChange: ee,
                className: "border p-2 rounded-lg w-full",
                placeholder: "Enter serial key",
              }),
              c.jsxs("div", {
                className: "mb-4",
                children: [
                  c.jsx("label", {
                    htmlFor: "categories",
                    className: "block mt-4 font-bold",
                    children: "Select a category:",
                  }),
                  c.jsxs("select", {
                    id: "categories",
                    name: "categories",
                    value: l,
                    onChange: F,
                    className: "border p-2 rounded-lg bg-gray-100 w-full",
                    children: [
                      c.jsx("option", { value: "", children: "--Category--" }),
                      c.jsx("option", {
                        value: "Windows",
                        children: "Windows",
                      }),
                      c.jsx("option", { value: "Office", children: "Office" }),
                      c.jsx("option", {
                        value: "Professional",
                        children: "Professional",
                      }),
                      c.jsx("option", { value: "Server", children: "Server" }),
                      c.jsx("option", { value: "SQL", children: "SQL" }),
                    ],
                  }),
                ],
              }),
              c.jsx("label", {
                htmlFor: "phoneupload",
                className: "font-light",
                children: "Phone number",
              }),
              c.jsx("input", {
                id: "phoneupload",
                type: "tel",
                value: d,
                onChange: (_) => p(_.target.value),
                className: "border p-2 mb-2 rounded-lg w-full",
                placeholder: "Enter phone number",
              }),
              c.jsx("label", {
                htmlFor: "acupload",
                className: "font-light",
                children: "New Activation Key",
              }),
              c.jsx("input", {
                id: "acupload",
                type: "text",
                value: a,
                onChange: se,
                className: "border p-2 mb-4 rounded-lg w-full",
                placeholder: "Enter new activation key",
              }),
              c.jsx(ro, {
                type: "submit",
                variant: "contained",
                disableElevation: !0,
                disabled: f,
                startIcon: f && c.jsx(zi, { size: 20 }),
                children: f ? "Submitting..." : "Submit",
              }),
              j &&
                c.jsx("p", {
                  style: { color: "red", fontSize: "12px" },
                  children: j,
                }),
            ],
          }),
        ],
      }),
      S &&
        c.jsxs("div", {
          className:
            "flex sm:max-md:flex-col gap-24 sm:max-md:gap-2 sm:max-md:items-center sm:max-md:justify-center items-center justify-center border-2 w-0.8 pt-5 pb-5",
          children: [
            c.jsxs("div", {
              className:
                "flex-col sm:max-md:items-center sm:max-md:justify-center",
              children: [
                c.jsxs("p", {
                  className:
                    "font-semibold  sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                  children: [" ", "Serial Key"],
                }),
                c.jsx("p", {
                  className:
                    "sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                  children: m,
                }),
                c.jsx("br", {}),
              ],
            }),
            c.jsxs("div", {
              className:
                "flex-col sm:max-md:items-center sm:max-md:justify-center",
              children: [
                c.jsx("p", {
                  className:
                    "font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                  children: "New Activation Key",
                }),
                c.jsx("p", {
                  className:
                    "sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                  children: S.activation_key,
                }),
                c.jsx("br", {}),
              ],
            }),
            c.jsxs("div", {
              className:
                "flex-col sm:max-md:items-center sm:max-md:justify-center",
              children: [
                c.jsx("p", {
                  className:
                    "font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                  children: "Category",
                }),
                c.jsx("p", {
                  className:
                    "sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center",
                  children: S.Category,
                }),
                c.jsx("br", {}),
              ],
            }),
          ],
        }),
    ],
  });
}
var fc = {},
  Gm = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Gm);
var Ym = Gm.exports,
  Fs = {};
const cw = vh(mx);
var jf;
function Jm() {
  return (
    jf ||
      ((jf = 1),
      (function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = cw;
      })(Fs)),
    Fs
  );
}
var dw = Ym;
Object.defineProperty(fc, "__esModule", { value: !0 });
var Zm = (fc.default = void 0),
  fw = dw(Jm()),
  pw = c,
  mw = (0, fw.default)(
    (0, pw.jsx)("path", {
      d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
    }),
    "Visibility"
  );
Zm = fc.default = mw;
var pc = {},
  hw = Ym;
Object.defineProperty(pc, "__esModule", { value: !0 });
var eh = (pc.default = void 0),
  gw = hw(Jm()),
  yw = c,
  vw = (0, gw.default)(
    (0, yw.jsx)("path", {
      d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z",
    }),
    "VisibilityOff"
  );
eh = pc.default = vw;
function xw() {
  const [e, t] = w.useState(""),
    [n, r] = w.useState(""),
    [o, i] = w.useState(!1),
    [l, s] = w.useState(""),
    [a, u] = w.useState(""),
    [d, p] = w.useState(!1);
  async function m(y) {
    if ((y.preventDefault(), e && n)) {
      i(!0);
      try {
        const g = await cr.post("https://osp.com.np/api/keys/login/", {
          username: e,
          password: n,
        });
        console.log(g),
          console.log("response data:", g.data),
          s(g.data.message);
      } catch (g) {
        console.log(g), u(g.response.data.message);
      } finally {
        i(!1);
      }
    }
  }
  const x = () => {
    p(!d);
  };
  return c.jsx(c.Fragment, {
    children:
      l === "Logged in successfully"
        ? c.jsx(uw, {})
        : c.jsx("div", {
            className: "flex items-center justify-center h-auto bg-gray-300",
            children: c.jsxs("form", {
              onSubmit: m,
              className:
                "w-full max-w-md p-6 bg-white rounded-lg shadow-md m-10",
              children: [
                c.jsx("h2", {
                  className: "text-2xl font-semibold mb-4",
                  children: "Admin Login",
                }),
                c.jsxs("div", {
                  className: "mb-4",
                  children: [
                    c.jsx("label", {
                      htmlFor: "username",
                      className: "block font-medium mb-2",
                      children: "Username",
                    }),
                    c.jsx("input", {
                      type: "text",
                      id: "username",
                      value: e,
                      onChange: (y) => t(y.target.value),
                      placeholder: "Enter username",
                      className: "w-full px-3 py-2 border rounded-lg",
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "mb-4",
                  children: [
                    c.jsx("label", {
                      htmlFor: "pswd",
                      className: "block font-medium mb-2",
                      children: "Password",
                    }),
                    c.jsxs("div", {
                      className: "relative",
                      children: [
                        c.jsx("input", {
                          type: d ? "text" : "password",
                          id: "pswd",
                          value: n,
                          onChange: (y) => r(y.target.value),
                          placeholder: "Password",
                          className: "w-full px-3 py-2 border rounded-lg pr-10",
                        }),
                        c.jsx("button", {
                          type: "button",
                          onClick: x,
                          className:
                            "absolute top-2 right-2 focus:outline-none",
                          children: d ? c.jsx(eh, {}) : c.jsx(Zm, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsx(ro, {
                  type: "submit",
                  variant: "contained",
                  disableElevation: !0,
                  disabled: o,
                  startIcon: o && c.jsx(zi, { size: 20 }),
                  className: "w-full",
                  children: o ? "Logging In..." : "Login",
                }),
                a &&
                  c.jsx("p", {
                    style: { color: "red", fontSize: "12px" },
                    children: a,
                  }),
              ],
            }),
          }),
  });
}
function ww() {
  return c.jsxs(Fy, {
    children: [
      c.jsx(By, {}),
      c.jsxs(Iy, {
        children: [
          c.jsx(Hr, { path: "/", element: c.jsx(rw, {}) }),
          c.jsx(Hr, { path: "/activation", element: c.jsx(K5, {}) }),
          c.jsx(Hr, { path: "/servicespage", element: c.jsx(lw, {}) }),
          c.jsx(Hr, {
            path: "/number/csv/manual/admin",
            element: c.jsx(xw, {}),
          }),
        ],
      }),
      c.jsx(aw, {}),
    ],
  });
}
Ds.createRoot(document.getElementById("root")).render(
  c.jsx(Ue.StrictMode, { children: c.jsx(ww, {}) })
);
