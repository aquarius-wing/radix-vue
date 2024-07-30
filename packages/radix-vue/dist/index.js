import { inject as rl, provide as il, shallowRef as Fn, watchEffect as ye, readonly as Ha, customRef as ul, ref as T, computed as I, watch as ee, nextTick as se, getCurrentScope as pr, onScopeDispose as dl, effectScope as cl, unref as o, onBeforeUnmount as Ln, onMounted as oe, isRef as Ue, reactive as Wt, getCurrentInstance as mt, onUpdated as pl, Fragment as _e, defineComponent as w, toRefs as ne, renderSlot as C, onBeforeUpdate as fr, toHandlerKey as vr, camelize as fl, toRef as mr, onUnmounted as Te, mergeProps as M, h as pt, Comment as hr, cloneVNode as Nn, openBlock as b, createBlock as x, withCtx as y, createVNode as q, createCommentVNode as pe, withKeys as re, markRaw as yr, createTextVNode as me, toDisplayString as De, Teleport as qt, normalizeProps as W, guardReactiveProps as U, normalizeStyle as ke, withModifiers as ie, createElementBlock as ce, withDirectives as Wa, vShow as zn, createElementVNode as Ge, mergeDefaults as vl, renderList as ga, watchSyncEffect as gr, resolveDynamicComponent as qe, toHandlers as Kn, triggerRef as Fo, useSlots as ja, onBeforeMount as ml, vModelSelect as br, toRaw as Cr } from "vue";
import { CalendarDateTime as wr, CalendarDate as _r, DateFormatter as lt, today as xr, getLocalTimeZone as Hn, isEqualMonth as Lo, isSameDay as Re, isEqualDay as Ee, isToday as hl, isSameMonth as yl } from "@internationalized/date";
import { k as ca, t as Ne, j as gl, d as _t, n as Da, m as Me, l as Pt, x as bl, u as Sr, r as Er } from "./calendar-ChFCRr4K.js";
import { useFloating as Pr, autoUpdate as Dr, offset as $r, flip as No, shift as Ir, limitShift as Br, size as Tr, arrow as Rr, hide as Ar } from "@floating-ui/vue";
import { NumberFormatter as Or, NumberParser as kr } from "@internationalized/number";
function Q(a, t) {
  const e = typeof a == "string" && !t ? `${a}Context` : t, n = Symbol(e);
  return [(r) => {
    const i = rl(n, r);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(a) ? `one of the following components: ${a.join(
        ", "
      )}` : `\`${a}\``}`
    );
  }, (r) => (il(n, r), r)];
}
function jt(a, t, e) {
  const n = e.originalEvent.target, l = new CustomEvent(a, {
    bubbles: !1,
    cancelable: !0,
    detail: e
  });
  t && n.addEventListener(a, t, { once: !0 }), n.dispatchEvent(l);
}
function Ut(a, t = Number.NEGATIVE_INFINITY, e = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(a, t), e);
}
function $a(a, t) {
  let e = a;
  const n = t.toString(), l = n.indexOf("."), s = l >= 0 ? n.length - l : 0;
  if (s > 0) {
    const r = 10 ** s;
    e = Math.round(e * r) / r;
  }
  return e;
}
function Mr(a, t, e, n) {
  t = Number(t), e = Number(e);
  const l = (a - (Number.isNaN(t) ? 0 : t)) % n;
  let s = $a(Math.abs(l) * 2 >= n ? a + Math.sign(l) * (n - Math.abs(l)) : a - l, n);
  return Number.isNaN(t) ? !Number.isNaN(e) && s > e && (s = Math.floor($a(e / n, n)) * n) : s < t ? s = t : !Number.isNaN(e) && s > e && (s = t + Math.floor($a((e - t) / n, n)) * n), s = $a(s, n), s;
}
function Vr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Fr = function a(t, e) {
  if (t === e) return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor) return !1;
    var n, l, s;
    if (Array.isArray(t)) {
      if (n = t.length, n != e.length) return !1;
      for (l = n; l-- !== 0; )
        if (!a(t[l], e[l])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
    if (s = Object.keys(t), n = s.length, n !== Object.keys(e).length) return !1;
    for (l = n; l-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, s[l])) return !1;
    for (l = n; l-- !== 0; ) {
      var r = s[l];
      if (!a(t[r], e[r])) return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
};
const Xe = /* @__PURE__ */ Vr(Fr);
function Lr(a, t) {
  if (a.length !== t.length)
    return !1;
  for (let e = 0; e < a.length; e++)
    if (a[e] !== t[e])
      return !1;
  return !0;
}
function Et(a, t, e) {
  const n = a.findIndex((i) => Xe(i, t)), l = a.findIndex((i) => Xe(i, e));
  if (n === -1 || l === -1)
    return [];
  const [s, r] = [n, l].sort((i, u) => i - u);
  return a.slice(s, r + 1);
}
const ba = typeof document < "u";
function Ht(a) {
  return a == null;
}
function Yt(a) {
  const { defaultValue: t, defaultPlaceholder: e, granularity: n = "day" } = a;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (e)
    return e.copy();
  const l = /* @__PURE__ */ new Date(), s = l.getFullYear(), r = l.getMonth() + 1, i = l.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new wr(s, r, i, 0, 0, 0) : new _r(s, r, i);
}
const Nr = [
  "ach",
  "af",
  "am",
  "an",
  "ar",
  "ast",
  "az",
  "be",
  "bg",
  "bn",
  "br",
  "bs",
  "ca",
  "cak",
  "ckb",
  "cs",
  "cy",
  "da",
  "de",
  "dsb",
  "el",
  "en",
  "eo",
  "es",
  "et",
  "eu",
  "fa",
  "ff",
  "fi",
  "fr",
  "fy",
  "ga",
  "gd",
  "gl",
  "he",
  "hr",
  "hsb",
  "hu",
  "ia",
  "id",
  "it",
  "ja",
  "ka",
  "kk",
  "kn",
  "ko",
  "lb",
  "lo",
  "lt",
  "lv",
  "meh",
  "ml",
  "ms",
  "nl",
  "nn",
  "no",
  "oc",
  "pl",
  "pt",
  "rm",
  "ro",
  "ru",
  "sc",
  "scn",
  "sk",
  "sl",
  "sr",
  "sv",
  "szl",
  "tg",
  "th",
  "tr",
  "uk",
  "zh-CN",
  "zh-TW"
], zr = ["year", "month", "day"], gn = {
  ach: { year: "mwaka", month: "dwe", day: "nino" },
  af: { year: "jjjj", month: "mm", day: "dd" },
  am: { year: "ዓዓዓዓ", month: "ሚሜ", day: "ቀቀ" },
  an: { year: "aaaa", month: "mm", day: "dd" },
  ar: { year: "سنة", month: "شهر", day: "يوم" },
  ast: { year: "aaaa", month: "mm", day: "dd" },
  az: { year: "iiii", month: "aa", day: "gg" },
  be: { year: "гггг", month: "мм", day: "дд" },
  bg: { year: "гггг", month: "мм", day: "дд" },
  bn: { year: "yyyy", month: "মিমি", day: "dd" },
  br: { year: "bbbb", month: "mm", day: "dd" },
  bs: { year: "gggg", month: "mm", day: "dd" },
  ca: { year: "aaaa", month: "mm", day: "dd" },
  cak: { year: "jjjj", month: "ii", day: "q'q'" },
  ckb: { year: "ساڵ", month: "مانگ", day: "ڕۆژ" },
  cs: { year: "rrrr", month: "mm", day: "dd" },
  cy: { year: "bbbb", month: "mm", day: "dd" },
  da: { year: "åååå", month: "mm", day: "dd" },
  de: { year: "jjjj", month: "mm", day: "tt" },
  dsb: { year: "llll", month: "mm", day: "źź" },
  el: { year: "εεεε", month: "μμ", day: "ηη" },
  en: { year: "yyyy", month: "mm", day: "dd" },
  eo: { year: "jjjj", month: "mm", day: "tt" },
  es: { year: "aaaa", month: "mm", day: "dd" },
  et: { year: "aaaa", month: "kk", day: "pp" },
  eu: { year: "uuuu", month: "hh", day: "ee" },
  fa: { year: "سال", month: "ماه", day: "روز" },
  ff: { year: "hhhh", month: "ll", day: "ññ" },
  fi: { year: "vvvv", month: "kk", day: "pp" },
  fr: { year: "aaaa", month: "mm", day: "jj" },
  fy: { year: "jjjj", month: "mm", day: "dd" },
  ga: { year: "bbbb", month: "mm", day: "ll" },
  gd: { year: "bbbb", month: "mm", day: "ll" },
  gl: { year: "aaaa", month: "mm", day: "dd" },
  he: { year: "שנה", month: "חודש", day: "יום" },
  hr: { year: "gggg", month: "mm", day: "dd" },
  hsb: { year: "llll", month: "mm", day: "dd" },
  hu: { year: "éééé", month: "hh", day: "nn" },
  ia: { year: "aaaa", month: "mm", day: "dd" },
  id: { year: "tttt", month: "bb", day: "hh" },
  it: { year: "aaaa", month: "mm", day: "gg" },
  ja: { year: " 年 ", month: "月", day: "日" },
  ka: { year: "წწწწ", month: "თთ", day: "რრ" },
  kk: { year: "жжжж", month: "аа", day: "кк" },
  kn: { year: "ವವವವ", month: "ಮಿಮೀ", day: "ದಿದಿ" },
  ko: { year: "연도", month: "월", day: "일" },
  lb: { year: "jjjj", month: "mm", day: "dd" },
  lo: { year: "ປປປປ", month: "ດດ", day: "ວວ" },
  lt: { year: "mmmm", month: "mm", day: "dd" },
  lv: { year: "gggg", month: "mm", day: "dd" },
  meh: { year: "aaaa", month: "mm", day: "dd" },
  ml: { year: "വർഷം", month: "മാസം", day: "തീയതി" },
  ms: { year: "tttt", month: "mm", day: "hh" },
  nl: { year: "jjjj", month: "mm", day: "dd" },
  nn: { year: "åååå", month: "mm", day: "dd" },
  no: { year: "åååå", month: "mm", day: "dd" },
  oc: { year: "aaaa", month: "mm", day: "jj" },
  pl: { year: "rrrr", month: "mm", day: "dd" },
  pt: { year: "aaaa", month: "mm", day: "dd" },
  rm: { year: "oooo", month: "mm", day: "dd" },
  ro: { year: "aaaa", month: "ll", day: "zz" },
  ru: { year: "гггг", month: "мм", day: "дд" },
  sc: { year: "aaaa", month: "mm", day: "dd" },
  scn: { year: "aaaa", month: "mm", day: "jj" },
  sk: { year: "rrrr", month: "mm", day: "dd" },
  sl: { year: "llll", month: "mm", day: "dd" },
  sr: { year: "гггг", month: "мм", day: "дд" },
  sv: { year: "åååå", month: "mm", day: "dd" },
  szl: { year: "rrrr", month: "mm", day: "dd" },
  tg: { year: "сссс", month: "мм", day: "рр" },
  th: { year: "ปปปป", month: "ดด", day: "วว" },
  tr: { year: "yyyy", month: "aa", day: "gg" },
  uk: { year: "рррр", month: "мм", day: "дд" },
  "zh-CN": { year: "年", month: "月", day: "日" },
  "zh-TW": { year: "年", month: "月", day: "日" }
};
function Kr(a) {
  if (zo(a))
    return gn[a];
  {
    const t = Ur(a);
    return zo(t) ? gn[t] : gn.en;
  }
}
function bn(a, t, e) {
  return Hr(a) ? Kr(e)[a] : jr(a) ? t : Wr(a) ? "––" : "";
}
function zo(a) {
  return Nr.includes(a);
}
function Hr(a) {
  return zr.includes(a);
}
function Wr(a) {
  return a === "hour" || a === "minute" || a === "second";
}
function jr(a) {
  return a === "era" || a === "dayPeriod";
}
function Ur(a) {
  return Intl.Locale ? new Intl.Locale(a).language : a.split("-")[0];
}
const Wn = ["day", "month", "year"], Cl = ["hour", "minute", "second", "dayPeriod"], wl = [...Wn, ...Cl];
function Gr(a) {
  return Wn.includes(a);
}
function _l(a) {
  return wl.includes(a);
}
function qr(a, t) {
  const e = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
    hourCycle: t === 24 ? "h24" : void 0,
    hour12: t === 24 ? !1 : void 0
  };
  return a === "day" && (delete e.second, delete e.hour, delete e.minute, delete e.timeZoneName), a === "hour" && (delete e.minute, delete e.second), a === "minute" && delete e.second, e;
}
function xl(a) {
  const t = a.querySelector("[data-selected]");
  if (t)
    return t.focus();
  const e = a.querySelector("[data-today]");
  if (e)
    return e.focus();
  const n = a.querySelector("[data-radix-vue-calendar-day]");
  if (n)
    return n.focus();
}
function Yr(a, t) {
  var e;
  const n = Fn();
  return ye(() => {
    n.value = a();
  }, {
    ...t,
    flush: (e = void 0) != null ? e : "sync"
  }), Ha(n);
}
function Xr(a, t) {
  let e, n, l;
  const s = T(!0), r = () => {
    s.value = !0, l();
  };
  ee(a, r, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = ul((c, p) => (n = c, l = p, {
    get() {
      return s.value && (e = i(), s.value = !1), n(), e;
    },
    set(f) {
      u == null || u(f);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function ht(a) {
  return pr() ? (dl(a), !0) : !1;
}
function pa() {
  const a = /* @__PURE__ */ new Set(), t = (l) => {
    a.delete(l);
  };
  return {
    on: (l) => {
      a.add(l);
      const s = () => t(l);
      return ht(s), {
        off: s
      };
    },
    off: t,
    trigger: (...l) => Promise.all(Array.from(a).map((s) => s(...l)))
  };
}
function Zr(a) {
  let t = !1, e;
  const n = cl(!0);
  return (...l) => (t || (e = n.run(() => a(...l)), t = !0), e);
}
function Jr(a) {
  let t = 0, e, n;
  const l = () => {
    t -= 1, n && t <= 0 && (n.stop(), e = void 0, n = void 0);
  };
  return (...s) => (t += 1, e || (n = cl(!0), e = n.run(() => a(...s))), ht(l), e);
}
function Ie(a) {
  return typeof a == "function" ? a() : o(a);
}
function Qr(a) {
  if (!Ue(a))
    return Wt(a);
  const t = new Proxy({}, {
    get(e, n, l) {
      return o(Reflect.get(a.value, n, l));
    },
    set(e, n, l) {
      return Ue(a.value[n]) && !Ue(l) ? a.value[n].value = l : a.value[n] = l, !0;
    },
    deleteProperty(e, n) {
      return Reflect.deleteProperty(a.value, n);
    },
    has(e, n) {
      return Reflect.has(a.value, n);
    },
    ownKeys() {
      return Object.keys(a.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Wt(t);
}
function Sl(a) {
  return Qr(I(a));
}
const Je = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ei = (a) => typeof a < "u", ti = (a) => a != null, ai = Object.prototype.toString, ni = (a) => ai.call(a) === "[object Object]", ft = () => {
}, Ko = /* @__PURE__ */ oi();
function oi() {
  var a, t;
  return Je && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function jn(a, t) {
  function e(...n) {
    return new Promise((l, s) => {
      Promise.resolve(a(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(l).catch(s);
    });
  }
  return e;
}
const El = (a) => a();
function li(a, t = {}) {
  let e, n, l = ft;
  const s = (i) => {
    clearTimeout(i), l(), l = ft;
  };
  return (i) => {
    const u = Ie(a), d = Ie(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (n && (s(n), n = null), Promise.resolve(i())) : new Promise((c, p) => {
      l = t.rejectOnCancel ? p : c, d && !n && (n = setTimeout(() => {
        e && s(e), n = null, c(i());
      }, d)), e = setTimeout(() => {
        n && s(n), n = null, c(i());
      }, u);
    });
  };
}
function si(...a) {
  let t = 0, e, n = !0, l = ft, s, r, i, u, d;
  !Ue(a[0]) && typeof a[0] == "object" ? { delay: r, trailing: i = !0, leading: u = !0, rejectOnCancel: d = !1 } = a[0] : [r, i = !0, u = !0, d = !1] = a;
  const c = () => {
    e && (clearTimeout(e), e = void 0, l(), l = ft);
  };
  return (f) => {
    const v = Ie(r), g = Date.now() - t, m = () => s = f();
    return c(), v <= 0 ? (t = Date.now(), m()) : (g > v && (u || !n) ? (t = Date.now(), m()) : i && (s = new Promise((S, _) => {
      l = d ? _ : S, e = setTimeout(() => {
        t = Date.now(), n = !0, S(m()), c();
      }, Math.max(0, v - g));
    })), !u && !e && (e = setTimeout(() => n = !0, v)), n = !1, s);
  };
}
function ri(a = El) {
  const t = T(!0);
  function e() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const l = (...s) => {
    t.value && a(...s);
  };
  return { isActive: Ha(t), pause: e, resume: n, eventFilter: l };
}
function Pl(a) {
  return mt();
}
function $t(a, t = 1e4) {
  return ul((e, n) => {
    let l = Ie(a), s;
    const r = () => setTimeout(() => {
      l = Ie(a), n();
    }, Ie(t));
    return ht(() => {
      clearTimeout(s);
    }), {
      get() {
        return e(), l;
      },
      set(i) {
        l = i, n(), clearTimeout(s), s = r();
      }
    };
  });
}
function Ua(a, t = 200, e = {}) {
  return jn(
    li(t, e),
    a
  );
}
function ii(a, t = 200, e = !1, n = !0, l = !1) {
  return jn(
    si(t, e, n, l),
    a
  );
}
function ui(a, t, e = {}) {
  const {
    eventFilter: n = El,
    ...l
  } = e;
  return ee(
    a,
    jn(
      n,
      t
    ),
    l
  );
}
function Ho(a, t, e = {}) {
  const {
    eventFilter: n,
    ...l
  } = e, { eventFilter: s, pause: r, resume: i, isActive: u } = ri(n);
  return { stop: ui(
    a,
    t,
    {
      ...l,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: u };
}
function di(a, t, ...[e]) {
  const {
    flush: n = "sync",
    deep: l = !1,
    immediate: s = !0,
    direction: r = "both",
    transform: i = {}
  } = e || {}, u = [], d = "ltr" in i && i.ltr || ((f) => f), c = "rtl" in i && i.rtl || ((f) => f);
  return (r === "both" || r === "ltr") && u.push(Ho(
    a,
    (f) => {
      u.forEach((v) => v.pause()), t.value = d(f), u.forEach((v) => v.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), (r === "both" || r === "rtl") && u.push(Ho(
    t,
    (f) => {
      u.forEach((v) => v.pause()), a.value = c(f), u.forEach((v) => v.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), () => {
    u.forEach((f) => f.stop());
  };
}
function ci(a, t) {
  Pl() && Ln(a, t);
}
function Dl(a, t = !0, e) {
  Pl() ? oe(a, e) : t ? a() : se(a);
}
function Un(a, t, e = {}) {
  const {
    immediate: n = !0
  } = e, l = T(!1);
  let s = null;
  function r() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    l.value = !1, r();
  }
  function u(...d) {
    r(), l.value = !0, s = setTimeout(() => {
      l.value = !1, s = null, a(...d);
    }, Ie(t));
  }
  return n && (l.value = !0, Je && u()), ht(i), {
    isPending: Ha(l),
    start: u,
    stop: i
  };
}
function pi(a = 1e3, t = {}) {
  const {
    controls: e = !1,
    callback: n
  } = t, l = Un(
    n ?? ft,
    a,
    t
  ), s = I(() => !l.isPending.value);
  return e ? {
    ready: s,
    ...l
  } : s;
}
function fi(a, t, e) {
  const n = ee(a, (...l) => (se(() => n()), t(...l)), e);
  return n;
}
function Be(a) {
  var t;
  const e = Ie(a);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const It = Je ? window : void 0;
function ze(...a) {
  let t, e, n, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, n, l] = a, t = It) : [t, e, n, l] = a, !t)
    return ft;
  Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, f, v) => (c.addEventListener(p, f, v), () => c.removeEventListener(p, f, v)), u = ee(
    () => [Be(t), Ie(l)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const f = ni(p) ? { ...p } : p;
      s.push(
        ...e.flatMap((v) => n.map((g) => i(c, v, g, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), r();
  };
  return ht(d), d;
}
function vi(a) {
  return typeof a == "function" ? a : typeof a == "string" ? (t) => t.key === a : Array.isArray(a) ? (t) => a.includes(t.key) : () => !0;
}
function Gn(...a) {
  let t, e, n = {};
  a.length === 3 ? (t = a[0], e = a[1], n = a[2]) : a.length === 2 ? typeof a[1] == "object" ? (t = !0, e = a[0], n = a[1]) : (t = a[0], e = a[1]) : (t = !0, e = a[0]);
  const {
    target: l = It,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, u = vi(t);
  return ze(l, s, (c) => {
    c.repeat && Ie(i) || u(c) && e(c);
  }, r);
}
function Ga() {
  const a = T(!1), t = mt();
  return t && oe(() => {
    a.value = !0;
  }, t), a;
}
function $l(a) {
  const t = Ga();
  return I(() => (t.value, !!a()));
}
function Il(a, t, e = {}) {
  const { window: n = It, ...l } = e;
  let s;
  const r = $l(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = I(() => {
    const f = Ie(a), v = (Array.isArray(f) ? f : [f]).map(Be).filter(ti);
    return new Set(v);
  }), d = ee(
    () => u.value,
    (f) => {
      i(), r.value && f.size && (s = new MutationObserver(t), f.forEach((v) => s.observe(v, l)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), d();
  };
  return ht(p), {
    isSupported: r,
    stop: p,
    takeRecords: c
  };
}
function mi(a = {}) {
  var t;
  const {
    window: e = It,
    deep: n = !0,
    triggerOnRemoval: l = !1
  } = a, s = (t = a.document) != null ? t : e == null ? void 0 : e.document, r = () => {
    var d;
    let c = s == null ? void 0 : s.activeElement;
    if (n)
      for (; c != null && c.shadowRoot; )
        c = (d = c == null ? void 0 : c.shadowRoot) == null ? void 0 : d.activeElement;
    return c;
  }, i = T(), u = () => {
    i.value = r();
  };
  return e && (ze(e, "blur", (d) => {
    d.relatedTarget === null && u();
  }, !0), ze(e, "focus", u, !0)), l && Il(s, (d) => {
    d.filter((c) => c.removedNodes.length).map((c) => Array.from(c.removedNodes)).flat().forEach((c) => {
      c === i.value && u();
    });
  }, {
    childList: !0,
    subtree: !0
  }), u(), i;
}
function Bl(a, t = {}) {
  const {
    immediate: e = !0,
    fpsLimit: n = void 0,
    window: l = It
  } = t, s = T(!1), r = n ? 1e3 / n : null;
  let i = 0, u = null;
  function d(f) {
    if (!s.value || !l)
      return;
    i || (i = f);
    const v = f - i;
    if (r && v < r) {
      u = l.requestAnimationFrame(d);
      return;
    }
    i = f, a({ delta: v, timestamp: f }), u = l.requestAnimationFrame(d);
  }
  function c() {
    !s.value && l && (s.value = !0, i = 0, u = l.requestAnimationFrame(d));
  }
  function p() {
    s.value = !1, u != null && l && (l.cancelAnimationFrame(u), u = null);
  }
  return e && c(), ht(p), {
    isActive: Ha(s),
    pause: p,
    resume: c
  };
}
function hi(a) {
  return JSON.parse(JSON.stringify(a));
}
function yi(a) {
  const t = mt(), e = Xr(
    () => null,
    () => t.proxy.$el
  );
  return pl(e.trigger), oe(e.trigger), e;
}
function Ze(a, t, e = {}) {
  const { window: n = It, ...l } = e;
  let s;
  const r = $l(() => n && "ResizeObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = I(() => Array.isArray(a) ? a.map((p) => Be(p)) : [Be(a)]), d = ee(
    u,
    (p) => {
      if (i(), r.value && n) {
        s = new ResizeObserver(t);
        for (const f of p)
          f && s.observe(f, l);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), d();
  };
  return ht(c), {
    isSupported: r,
    stop: c
  };
}
function gi(a, t = {}) {
  const e = mi(t), n = I(() => Be(a));
  return { focused: I(() => n.value && e.value ? n.value.contains(e.value) : !1) };
}
const Wo = 1;
function bi(a, t = {}) {
  const {
    throttle: e = 0,
    idle: n = 200,
    onStop: l = ft,
    onScroll: s = ft,
    offset: r = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: i = {
      capture: !1,
      passive: !0
    },
    behavior: u = "auto",
    window: d = It,
    onError: c = (B) => {
      console.error(B);
    }
  } = t, p = T(0), f = T(0), v = I({
    get() {
      return p.value;
    },
    set(B) {
      m(B, void 0);
    }
  }), g = I({
    get() {
      return f.value;
    },
    set(B) {
      m(void 0, B);
    }
  });
  function m(B, V) {
    var k, A, L, H;
    if (!d)
      return;
    const K = Ie(a);
    if (!K)
      return;
    (L = K instanceof Document ? d.document.body : K) == null || L.scrollTo({
      top: (k = Ie(V)) != null ? k : g.value,
      left: (A = Ie(B)) != null ? A : v.value,
      behavior: Ie(u)
    });
    const X = ((H = K == null ? void 0 : K.document) == null ? void 0 : H.documentElement) || (K == null ? void 0 : K.documentElement) || K;
    v != null && (p.value = X.scrollLeft), g != null && (f.value = X.scrollTop);
  }
  const S = T(!1), _ = Wt({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), D = Wt({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), h = (B) => {
    S.value && (S.value = !1, D.left = !1, D.right = !1, D.top = !1, D.bottom = !1, l(B));
  }, E = Ua(h, e + n), P = (B) => {
    var V;
    if (!d)
      return;
    const k = ((V = B == null ? void 0 : B.document) == null ? void 0 : V.documentElement) || (B == null ? void 0 : B.documentElement) || Be(B), { display: A, flexDirection: L } = getComputedStyle(k), H = k.scrollLeft;
    D.left = H < p.value, D.right = H > p.value;
    const K = Math.abs(H) <= (r.left || 0), X = Math.abs(H) + k.clientWidth >= k.scrollWidth - (r.right || 0) - Wo;
    A === "flex" && L === "row-reverse" ? (_.left = X, _.right = K) : (_.left = K, _.right = X), p.value = H;
    let N = k.scrollTop;
    B === d.document && !N && (N = d.document.body.scrollTop), D.top = N < f.value, D.bottom = N > f.value;
    const F = Math.abs(N) <= (r.top || 0), j = Math.abs(N) + k.clientHeight >= k.scrollHeight - (r.bottom || 0) - Wo;
    A === "flex" && L === "column-reverse" ? (_.top = j, _.bottom = F) : (_.top = F, _.bottom = j), f.value = N;
  }, $ = (B) => {
    var V;
    if (!d)
      return;
    const k = (V = B.target.documentElement) != null ? V : B.target;
    P(k), S.value = !0, E(B), s(B);
  };
  return ze(
    a,
    "scroll",
    e ? ii($, e, !0, !1) : $,
    i
  ), Dl(() => {
    try {
      const B = Ie(a);
      if (!B)
        return;
      P(B);
    } catch (B) {
      c(B);
    }
  }), ze(
    a,
    "scrollend",
    h,
    i
  ), {
    x: v,
    y: g,
    isScrolling: S,
    arrivedState: _,
    directions: D,
    measure() {
      const B = Ie(a);
      d && B && P(B);
    }
  };
}
function Tl(a = yi()) {
  const t = Fn(), e = () => {
    const n = Be(a);
    n && (t.value = n.parentElement);
  };
  return Dl(e), ee(() => Ie(a), e), t;
}
function ae(a, t, e, n = {}) {
  var l, s, r;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = n, v = mt(), g = e || (v == null ? void 0 : v.emit) || ((l = v == null ? void 0 : v.$emit) == null ? void 0 : l.bind(v)) || ((r = (s = v == null ? void 0 : v.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(v == null ? void 0 : v.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const S = (h) => i ? typeof i == "function" ? i(h) : hi(h) : h, _ = () => ei(a[t]) ? S(a[t]) : p, D = (h) => {
    f ? f(h) && g(m, h) : g(m, h);
  };
  if (u) {
    const h = _(), E = T(h);
    let P = !1;
    return ee(
      () => a[t],
      ($) => {
        P || (P = !0, E.value = S($), se(() => P = !1));
      }
    ), ee(
      E,
      ($) => {
        !P && ($ !== a[t] || c) && D($);
      },
      { deep: c }
    ), E;
  } else
    return I({
      get() {
        return _();
      },
      set(h) {
        D(h);
      }
    });
}
function qa(a) {
  return a ? a.flatMap((t) => t.type === _e ? qa(t.children) : [t]) : [];
}
const Ci = ["INPUT", "TEXTAREA"];
function Bt(a, t, e, n = {}) {
  if (!t || n.enableIgnoredElement && Ci.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: l = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = n, [p, f, v, g, m, S] = [
    a.key === "ArrowRight",
    a.key === "ArrowLeft",
    a.key === "ArrowUp",
    a.key === "ArrowDown",
    a.key === "Home",
    a.key === "End"
  ], _ = v || g, D = p || f;
  if (!m && !S && (!_ && !D || l === "vertical" && D || l === "horizontal" && _))
    return null;
  const h = e ? Array.from(e.querySelectorAll(s)) : r;
  if (!h.length)
    return null;
  d && a.preventDefault();
  let E = null;
  return D || _ ? E = Rl(h, t, {
    goForward: _ ? g : u === "ltr" ? p : f,
    loop: i
  }) : m ? E = h.at(0) || null : S && (E = h.at(-1) || null), c && (E == null || E.focus()), E;
}
function Rl(a, t, e, n = a.length) {
  if (--n === 0)
    return null;
  const l = a.indexOf(t), s = e.goForward ? l + 1 : l - 1;
  if (!e.loop && (s < 0 || s >= a.length))
    return null;
  const r = (s + a.length) % a.length, i = a[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Rl(
    a,
    i,
    e,
    n
  ) : i : null;
}
function Cn(a) {
  if (a === null || typeof a != "object")
    return !1;
  const t = Object.getPrototypeOf(a);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in a ? !1 : Symbol.toStringTag in a ? Object.prototype.toString.call(a) === "[object Module]" : !0;
}
function $n(a, t, e = ".", n) {
  if (!Cn(t))
    return $n(a, {}, e, n);
  const l = Object.assign({}, t);
  for (const s in a) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = a[s];
    r != null && (n && n(l, s, r, e) || (Array.isArray(r) && Array.isArray(l[s]) ? l[s] = [...r, ...l[s]] : Cn(r) && Cn(l[s]) ? l[s] = $n(
      r,
      l[s],
      (e ? `${e}.` : "") + s.toString(),
      n
    ) : l[s] = r));
  }
  return l;
}
function wi(a) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((e, n) => $n(e, n, "", a), {})
  );
}
const _i = wi(), [Ya, xi] = Q("ConfigProvider"), hv = /* @__PURE__ */ w({
  __name: "ConfigProvider",
  props: {
    dir: { default: "ltr" },
    scrollBody: { type: [Boolean, Object], default: !0 },
    nonce: { default: void 0 },
    useId: { type: Function, default: void 0 }
  },
  setup(a) {
    const t = a, { dir: e, scrollBody: n, nonce: l } = ne(t);
    return xi({
      dir: e,
      scrollBody: n,
      nonce: l,
      useId: t.useId
    }), (s, r) => C(s.$slots, "default");
  }
});
let Si = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Ei = (a = 21) => {
  let t = "", e = a;
  for (; e--; )
    t += Si[Math.random() * 64 | 0];
  return t;
};
const Pi = Jr(() => {
  const a = T(/* @__PURE__ */ new Map()), t = T(), e = I(() => {
    for (const r of a.value.values())
      if (r)
        return !0;
    return !1;
  }), n = Ya({
    scrollBody: T(!0)
  });
  let l = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Ko && (l == null || l()), t.value = void 0;
  };
  return ee(e, (r, i) => {
    var p;
    if (!Je)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, c = (p = n.scrollBody) != null && p.value ? typeof n.scrollBody.value == "object" ? _i({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = `${c.padding}px`, document.body.style.marginRight = `${c.margin}px`, document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Ko && (l = ze(
      document,
      "touchmove",
      (f) => {
        var v;
        f.target === document.documentElement && (f.touches.length > 1 || (v = f.preventDefault) == null || v.call(f));
      },
      { passive: !1 }
    )), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), a;
});
function Ca(a) {
  const t = Ei(6), e = Pi();
  e.value.set(t, a ?? !1);
  const n = I({
    get: () => e.value.get(t) ?? !1,
    set: (l) => e.value.set(t, l)
  });
  return ci(() => {
    e.value.delete(t);
  }), n;
}
const Di = "data-radix-vue-collection-item";
function Ve(a, t = Di) {
  const e = a ?? Symbol();
  return { createCollection: (s) => {
    const r = T([]);
    function i() {
      const u = Be(s);
      return u ? r.value = Array.from(
        u.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return fr(() => {
      r.value = [];
    }), oe(i), pl(i), ee(() => s == null ? void 0 : s.value, i, { immediate: !0 }), il(e, r), r;
  }, injectCollection: () => rl(e, T([])) };
}
function qn(a) {
  const t = T(a);
  function e() {
    return t.value;
  }
  function n(m) {
    t.value = m;
  }
  function l(m, S) {
    return new lt(t.value, S).format(m);
  }
  function s(m, S = !0) {
    return ca(m) && S ? l(Ne(m), {
      dateStyle: "long",
      timeStyle: "long"
    }) : l(Ne(m), {
      dateStyle: "long"
    });
  }
  function r(m, S = {}) {
    return new lt(t.value, { month: "long", year: "numeric", ...S }).format(m);
  }
  function i(m, S = {}) {
    return new lt(t.value, { month: "long", ...S }).format(m);
  }
  function u() {
    const m = xr(Hn());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_) => ({ label: i(Ne(m.set({ month: _ }))), value: _ }));
  }
  function d(m, S = {}) {
    return new lt(t.value, { year: "numeric", ...S }).format(m);
  }
  function c(m, S) {
    return gl(m) ? new lt(t.value, {
      ...S,
      timeZone: m.timeZone
    }).formatToParts(Ne(m)) : new lt(t.value, S).formatToParts(Ne(m));
  }
  function p(m, S = "narrow") {
    return new lt(t.value, { weekday: S }).format(m);
  }
  function f(m) {
    var D;
    return ((D = new lt(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(m).find((h) => h.type === "dayPeriod")) == null ? void 0 : D.value) === "PM" ? "PM" : "AM";
  }
  const v = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function g(m, S, _ = {}) {
    const D = { ...v, ..._ }, E = c(m, D).find((P) => P.type === S);
    return E ? E.value : "";
  }
  return {
    setLocale: n,
    getLocale: e,
    fullMonth: i,
    fullYear: d,
    fullMonthAndYear: r,
    toParts: c,
    custom: l,
    part: g,
    dayPeriod: f,
    selectedDate: s,
    dayOfWeek: p,
    getMonths: u
  };
}
function be(a) {
  const t = Ya({
    dir: T("ltr")
  });
  return I(() => {
    var e;
    return (a == null ? void 0 : a.value) || ((e = t.dir) == null ? void 0 : e.value) || "ltr";
  });
}
function Ae(a) {
  const t = mt(), e = t == null ? void 0 : t.type.emits, n = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((l) => {
    n[vr(fl(l))] = (...s) => a(l, ...s);
  }), n;
}
let wn = 0;
function Yn() {
  ye((a) => {
    if (!Je)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? jo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? jo()
    ), wn++, a(() => {
      wn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), wn--;
    });
  });
}
function jo() {
  const a = document.createElement("span");
  return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", a;
}
function Qe(a) {
  return I(() => {
    var t;
    return Ie(a) ? !!((t = Be(a)) != null && t.closest("form")) : !0;
  });
}
function Tt(a) {
  const t = mt(), e = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((l, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (l[s] = r), l;
  }, {}), n = mr(a);
  return I(() => {
    const l = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      l[fl(r)] = s[r];
    }), Object.keys({ ...e, ...l }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function xe(a, t) {
  const e = Tt(a), n = t ? Ae(t) : {};
  return I(() => ({
    ...e.value,
    ...n
  }));
}
function R() {
  const a = mt(), t = T(), e = I(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Be(t);
  }), n = Object.assign({}, a.exposed), l = {};
  for (const r in a.props)
    Object.defineProperty(l, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.props[r]
    });
  if (Object.keys(n).length > 0)
    for (const r in n)
      Object.defineProperty(l, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r]
      });
  Object.defineProperty(l, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => a.vnode.el
  }), a.exposed = l;
  function s(r) {
    t.value = r, !(r instanceof Element || !r) && (Object.defineProperty(l, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r.$el
    }), a.exposed = l);
  }
  return { forwardRef: s, currentRef: t, currentElement: e };
}
function Al(a, t) {
  const e = $t(!1, 300), n = T(null), l = pa();
  function s() {
    n.value = null, e.value = !1;
  }
  function r(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = $i(c, d.getBoundingClientRect()), f = Ii(c, p), v = Bi(u.getBoundingClientRect()), g = Ri([...f, ...v]);
    n.value = g, e.value = !0;
  }
  return ye((i) => {
    if (a.value && t.value) {
      const u = (c) => r(c, t.value), d = (c) => r(c, a.value);
      a.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = a.value) == null || c.removeEventListener("pointerleave", u), (p = t.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), ye((i) => {
    if (n.value) {
      const u = (d) => {
        var m, S;
        if (!n.value)
          return;
        const c = d.target, p = { x: d.clientX, y: d.clientY }, f = ((m = a.value) == null ? void 0 : m.contains(c)) || ((S = t.value) == null ? void 0 : S.contains(c)), v = !Ti(p, n.value), g = c.hasAttribute("data-grace-area-trigger");
        f ? s() : (v || g) && (s(), l.trigger());
      };
      document.addEventListener("pointermove", u), i(() => document.removeEventListener("pointermove", u));
    }
  }), {
    isPointerInTransit: e,
    onPointerExit: l.on
  };
}
function $i(a, t) {
  const e = Math.abs(t.top - a.y), n = Math.abs(t.bottom - a.y), l = Math.abs(t.right - a.x), s = Math.abs(t.left - a.x);
  switch (Math.min(e, n, l, s)) {
    case s:
      return "left";
    case l:
      return "right";
    case e:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Ii(a, t, e = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: a.x - e, y: a.y + e },
        { x: a.x + e, y: a.y + e }
      );
      break;
    case "bottom":
      n.push(
        { x: a.x - e, y: a.y - e },
        { x: a.x + e, y: a.y - e }
      );
      break;
    case "left":
      n.push(
        { x: a.x + e, y: a.y - e },
        { x: a.x + e, y: a.y + e }
      );
      break;
    case "right":
      n.push(
        { x: a.x - e, y: a.y - e },
        { x: a.x - e, y: a.y + e }
      );
      break;
  }
  return n;
}
function Bi(a) {
  const { top: t, right: e, bottom: n, left: l } = a;
  return [
    { x: l, y: t },
    { x: e, y: t },
    { x: e, y: n },
    { x: l, y: n }
  ];
}
function Ti(a, t) {
  const { x: e, y: n } = a;
  let l = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, c = t[r].y;
    u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function Ri(a) {
  const t = a.slice();
  return t.sort((e, n) => e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0), Ai(t);
}
function Ai(a) {
  if (a.length <= 1)
    return a.slice();
  const t = [];
  for (let n = 0; n < a.length; n++) {
    const l = a[n];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], r = t[t.length - 2];
      if ((s.x - r.x) * (l.y - r.y) >= (s.y - r.y) * (l.x - r.x))
        t.pop();
      else break;
    }
    t.push(l);
  }
  t.pop();
  const e = [];
  for (let n = a.length - 1; n >= 0; n--) {
    const l = a[n];
    for (; e.length >= 2; ) {
      const s = e[e.length - 1], r = e[e.length - 2];
      if ((s.x - r.x) * (l.y - r.y) >= (s.y - r.y) * (l.x - r.x))
        e.pop();
      else break;
    }
    e.push(l);
  }
  return e.pop(), t.length === 1 && e.length === 1 && t[0].x === e[0].x && t[0].y === e[0].y ? t : t.concat(e);
}
var Oi = function(a) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(a) ? a[0] : a;
  return t.ownerDocument.body;
}, Nt = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), Ba = {}, _n = 0, Ol = function(a) {
  return a && (a.host || Ol(a.parentNode));
}, ki = function(a, t) {
  return t.map(function(e) {
    if (a.contains(e))
      return e;
    var n = Ol(e);
    return n && a.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", a, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
}, Mi = function(a, t, e, n) {
  var l = ki(t, Array.isArray(a) ? a : [a]);
  Ba[e] || (Ba[e] = /* @__PURE__ */ new WeakMap());
  var s = Ba[e], r = [], i = /* @__PURE__ */ new Set(), u = new Set(l), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  l.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (i.has(f))
        c(f);
      else
        try {
          var v = f.getAttribute(n), g = v !== null && v !== "false", m = (Nt.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
          Nt.set(f, m), s.set(f, S), r.push(f), m === 1 && g && Ia.set(f, !0), S === 1 && f.setAttribute(e, "true"), g || f.setAttribute(n, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", f, _);
        }
    });
  };
  return c(t), i.clear(), _n++, function() {
    r.forEach(function(p) {
      var f = Nt.get(p) - 1, v = s.get(p) - 1;
      Nt.set(p, f), s.set(p, v), f || (Ia.has(p) || p.removeAttribute(n), Ia.delete(p)), v || p.removeAttribute(e);
    }), _n--, _n || (Nt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), Ba = {});
  };
}, Vi = function(a, t, e) {
  e === void 0 && (e = "data-aria-hidden");
  var n = Array.from(Array.isArray(a) ? a : [a]), l = Oi(a);
  return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live]"))), Mi(n, l, e, "aria-hidden")) : function() {
    return null;
  };
};
function wa(a) {
  let t;
  ee(() => Be(a), (e) => {
    e ? t = Vi(e) : t && t();
  }), Te(() => {
    t && t();
  });
}
let Fi = 0;
function ve(a, t = "radix") {
  if (a)
    return a;
  const { useId: e } = Ya({ useId: void 0 });
  return e && typeof e == "function" ? `${t}-${e()}` : `${t}-${++Fi}`;
}
function Li(a, t) {
  const e = T(), n = (s, r) => {
    if (t.multiple && Array.isArray(a.value))
      if (t.selectionBehavior === "replace")
        a.value = [s], e.value = s;
      else {
        const i = a.value.findIndex((u) => r(u));
        i !== -1 ? a.value.splice(i, 1) : a.value.push(s);
      }
    else
      t.selectionBehavior === "replace" ? a.value = { ...s } : !Array.isArray(a.value) && r(a.value) ? a.value = void 0 : a.value = { ...s };
    return a.value;
  };
  function l(s, r, i, u) {
    var f;
    if (!(e != null && e.value) || !t.multiple || !Array.isArray(a.value))
      return;
    const c = (f = i().filter((v) => v.ref.dataset.disabled !== "").find((v) => v.ref === r)) == null ? void 0 : f.value;
    if (!c)
      return;
    let p = null;
    switch (s) {
      case "prev":
      case "next": {
        p = Et(u, e.value, c);
        break;
      }
      case "first": {
        p = Et(u, e.value, u == null ? void 0 : u[0]);
        break;
      }
      case "last": {
        p = Et(u, e.value, u == null ? void 0 : u[u.length - 1]);
        break;
      }
    }
    a.value = p;
  }
  return {
    firstValue: e,
    onSelectItem: n,
    handleMultipleReplace: l
  };
}
function kl(a) {
  const t = T(), e = I(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.width) ?? 0;
  }), n = I(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.height) ?? 0;
  });
  return oe(() => {
    const l = Be(a);
    if (l) {
      t.value = { width: l.offsetWidth, height: l.offsetHeight };
      const s = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          u = p.inlineSize, d = p.blockSize;
        } else
          u = l.offsetWidth, d = l.offsetHeight;
        t.value = { width: u, height: d };
      });
      return s.observe(l, { box: "border-box" }), () => s.unobserve(l);
    } else
      t.value = void 0;
  }), {
    width: e,
    height: n
  };
}
function Ml(a, t) {
  const e = T(a);
  function n(s) {
    return t[e.value][s] ?? e.value;
  }
  return {
    state: e,
    dispatch: (s) => {
      e.value = n(s);
    }
  };
}
function _a(a) {
  const t = $t("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (l, s) => {
      var f, v;
      if (!(a != null && a.value) && !s)
        return;
      t.value = t.value + l;
      const r = (a == null ? void 0 : a.value) ?? s, i = document.activeElement, u = ((v = (f = r.find((g) => g === i)) == null ? void 0 : f.textContent) == null ? void 0 : v.trim()) ?? "", d = r.map((g) => {
        var m;
        return ((m = g.textContent) == null ? void 0 : m.trim()) ?? "";
      }), c = Zn(d, t.value, u), p = r.find(
        (g) => {
          var m;
          return ((m = g.textContent) == null ? void 0 : m.trim()) === c;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Xn(a, t) {
  return a.map((e, n) => a[(t + n) % a.length]);
}
function Zn(a, t, e) {
  const l = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? a.indexOf(e) : -1;
  let r = Xn(a, Math.max(s, 0));
  l.length === 1 && (r = r.filter((d) => d !== e));
  const u = r.find(
    (d) => d.toLowerCase().startsWith(l.toLowerCase())
  );
  return u !== e ? u : void 0;
}
function yv(a, t) {
  return {
    inheritAttrs: !1,
    name: `${a.__name ?? ""}Wrapper`,
    setup(e, n) {
      return () => {
        const l = typeof (t == null ? void 0 : t.props) == "function" ? t == null ? void 0 : t.props(n.attrs) : t == null ? void 0 : t.props, { forwardRef: s } = R(), r = M(l, n.attrs);
        return pt(a, { ...r, ref: s }, n.slots);
      };
    }
  };
}
function et() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
const Jn = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(a, { attrs: t, slots: e }) {
    return () => {
      var u, d;
      if (!e.default)
        return null;
      const n = qa(e.default()), l = n.findIndex((c) => c.type !== hr);
      if (l === -1)
        return n;
      const s = n[l];
      (u = s.props) == null || delete u.ref;
      const r = s.props ? M(t, s.props) : t;
      t.class && ((d = s.props) != null && d.class) && delete s.props.class;
      const i = Nn(s, r);
      for (const c in r)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = r[c]);
      return n.length === 1 ? i : (n[l] = i, n);
    };
  }
}), O = w({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(a, { attrs: t, slots: e }) {
    const n = a.asChild ? "template" : a.as;
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => pt(n, t) : n !== "template" ? () => pt(a.as, t, { default: e.default }) : () => pt(Jn, t, { default: e.default });
  }
});
function Oe() {
  const a = T(), t = I(() => {
    var e, n;
    return ["#text", "#comment"].includes((e = a.value) == null ? void 0 : e.$el.nodeName) ? (n = a.value) == null ? void 0 : n.$el.nextElementSibling : Be(a);
  });
  return {
    primitiveElement: a,
    currentElement: t
  };
}
const [Vl, Ni] = Q("CollapsibleRoot"), zi = /* @__PURE__ */ w({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(a, { expose: t, emit: e }) {
    const n = a, s = ae(n, "open", e, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = ae(n, "disabled");
    return Ni({
      contentId: "",
      disabled: r,
      open: s,
      onOpenToggle: () => {
        s.value = !s.value;
      }
    }), t({ open: s }), R(), (i, u) => (b(), x(o(O), {
      as: i.as,
      "as-child": n.asChild,
      "data-state": n.open ? "open" : "closed",
      "data-disabled": n.disabled ? "" : void 0
    }, {
      default: y(() => [
        C(i.$slots, "default", { open: o(s) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), Ki = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Vl();
    return (n, l) => {
      var s, r;
      return b(), x(o(O), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": o(e).contentId,
        "aria-expanded": o(e).open.value,
        "data-state": o(e).open.value ? "open" : "closed",
        "data-disabled": (s = o(e).disabled) != null && s.value ? "" : void 0,
        disabled: (r = o(e).disabled) == null ? void 0 : r.value,
        onClick: o(e).onOpenToggle
      }, {
        default: y(() => [
          C(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Hi(a, t) {
  const e = T({}), n = T("none"), l = a.value ? "mounted" : "unmounted", { state: s, dispatch: r } = Ml(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), i = (v) => {
    var g;
    if (Je) {
      const m = new CustomEvent(v, { bubbles: !1, cancelable: !1 });
      (g = t.value) == null || g.dispatchEvent(m);
    }
  };
  ee(
    a,
    async (v, g) => {
      var S;
      const m = g !== v;
      if (await se(), m) {
        const _ = n.value, D = Ta(t.value);
        v ? (r("MOUNT"), i("enter"), D === "none" && i("after-enter")) : D === "none" || ((S = e.value) == null ? void 0 : S.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : g && _ !== D ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (v) => {
    const g = Ta(t.value), m = g.includes(
      v.animationName
    ), S = s.value === "mounted" ? "enter" : "leave";
    v.target === t.value && m && (i(`after-${S}`), r("ANIMATION_END")), v.target === t.value && g === "none" && r("ANIMATION_END");
  }, d = (v) => {
    v.target === t.value && (n.value = Ta(t.value));
  }, c = ee(
    t,
    (v, g) => {
      v ? (e.value = getComputedStyle(v), v.addEventListener("animationstart", d), v.addEventListener("animationcancel", u), v.addEventListener("animationend", u)) : (r("ANIMATION_END"), g == null || g.removeEventListener("animationstart", d), g == null || g.removeEventListener("animationcancel", u), g == null || g.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), p = ee(s, () => {
    const v = Ta(t.value);
    n.value = s.value === "mounted" ? v : "none";
  });
  return Te(() => {
    c(), p();
  }), {
    isPresent: I(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function Ta(a) {
  return a && getComputedStyle(a).animationName || "none";
}
const Pe = w({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(a, { slots: t, expose: e }) {
    var d;
    const { present: n, forceMount: l } = ne(a), s = T(), { isPresent: r } = Hi(n, s);
    e({ present: r });
    let i = t.default({ present: r });
    i = qa(i || []);
    const u = mt();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((p) => `  - ${p}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l.value || n.value || r.value ? pt(t.default({ present: r })[0], {
      ref: (c) => {
        const p = Be(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? s.value = p.firstElementChild : s.value = p), p;
      }
    }) : null;
  }
}), Wi = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Vl();
    e.contentId || (e.contentId = ve(void 0, "radix-vue-collapsible-content"));
    const n = T(), { forwardRef: l, currentElement: s } = R(), r = T(0), i = T(0), u = I(() => e.open.value), d = T(u.value), c = T();
    return ee(
      () => {
        var p;
        return [u.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await se();
        const p = s.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const f = p.getBoundingClientRect();
        i.value = f.height, r.value = f.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), oe(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (p, f) => (b(), x(o(Pe), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || o(e).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var v, g;
        return [
          q(o(O), M(p.$attrs, {
            id: o(e).contentId,
            ref: o(l),
            "as-child": t.asChild,
            as: p.as,
            "data-state": o(e).open.value ? "open" : "closed",
            "data-disabled": (v = o(e).disabled) != null && v.value ? "" : void 0,
            hidden: !((g = n.value) != null && g.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: y(() => {
              var m;
              return [
                (m = n.value) != null && m.present ? C(p.$slots, "default", { key: 0 }) : pe("", !0)
              ];
            }),
            _: 3
          }, 16, ["id", "as-child", "as", "data-state", "data-disabled", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function Fl({ type: a, defaultValue: t, modelValue: e }) {
  const n = e || t;
  if (Ht(a) && Ht(e) && Ht(t))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (e !== void 0 && t !== void 0 && typeof e != typeof t)
    throw new Error(
      `Invalid prop \`value\` of value \`${e}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t}\`. The \`value\` prop must be:
  ${a === "single" ? "- a string" : a === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const l = e !== void 0 || t !== void 0;
  if (a && l) {
    const s = Array.isArray(e) || Array.isArray(t), r = e !== void 0 ? "modelValue" : "defaultValue", i = r === "modelValue" ? typeof e : typeof t;
    if (a === "single" && s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "multiple";
    if (a === "multiple" && !s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "single";
  }
  return l ? Array.isArray(n) ? "multiple" : "single" : a;
}
function ji({ type: a, defaultValue: t, modelValue: e }) {
  return a || Fl({ type: a, defaultValue: t, modelValue: e });
}
function Ui({ type: a, defaultValue: t }) {
  return t !== void 0 ? t : a === "single" ? void 0 : [];
}
function Ll(a, t) {
  const e = T(ji(a)), n = ae(a, "modelValue", t, {
    defaultValue: Ui(a),
    passive: a.modelValue === void 0,
    deep: !0
  });
  ee(
    () => [a.type, a.modelValue, a.defaultValue],
    () => {
      const r = Fl(a);
      e.value !== r && (e.value = r);
    },
    { immediate: !0 }
  );
  function l(r) {
    if (e.value === "single")
      n.value = r === n.value ? void 0 : r;
    else {
      const i = [...n.value || []];
      if (i.includes(r)) {
        const u = i.findIndex((d) => d === r);
        i.splice(u, 1);
      } else
        i.push(r);
      n.value = i;
    }
  }
  const s = I(() => e.value === "single");
  return {
    modelValue: n,
    type: e,
    changeModelValue: l,
    isSingle: s
  };
}
const [Xa, Gi] = Q("AccordionRoot"), gv = /* @__PURE__ */ w({
  __name: "AccordionRoot",
  props: {
    collapsible: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    dir: {},
    orientation: { default: "vertical" },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { dir: l, disabled: s } = ne(e), r = be(l), { modelValue: i, changeModelValue: u, isSingle: d } = Ll(e, n), { forwardRef: c, currentElement: p } = R();
    return Gi({
      disabled: s,
      direction: r,
      orientation: e.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: e.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, v) => (b(), x(o(O), {
      ref: o(c),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: y(() => [
        C(f.$slots, "default", { modelValue: o(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [Qn, qi] = Q("AccordionItem"), bv = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, n = Xa(), l = I(
      () => n.isSingle.value ? e.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(e.value)
    ), s = I(() => n.disabled.value || e.disabled || n.isSingle.value && l.value && !n.collapsible), r = I(() => s.value ? "" : void 0), i = I(
      () => l.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: l, dataDisabled: r });
    const { currentRef: u, currentElement: d } = R();
    qi({
      open: l,
      dataState: i,
      disabled: s,
      dataDisabled: r,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: I(() => e.value)
    });
    function c(p) {
      Bt(
        p,
        d.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: !0
        }
      );
    }
    return (p, f) => (b(), x(o(zi), {
      "data-orientation": o(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: l.value,
      as: e.as,
      "as-child": e.asChild,
      onKeydown: re(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        C(p.$slots, "default", { open: l.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Cv = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Xa(), n = Qn();
    return R(), (l, s) => (b(), x(o(Wi), {
      role: "region",
      hidden: !o(n).open.value,
      "as-child": t.asChild,
      "aria-labelledby": o(n).triggerId,
      "data-state": o(n).dataState.value,
      "data-disabled": o(n).dataDisabled.value,
      "data-orientation": o(e).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), wv = /* @__PURE__ */ w({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(a) {
    const t = a, e = Xa(), n = Qn();
    return R(), (l, s) => (b(), x(o(O), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": o(e).orientation,
      "data-state": o(n).dataState.value,
      "data-disabled": o(n).dataDisabled.value
    }, {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), _v = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Xa(), n = Qn();
    n.triggerId || (n.triggerId = ve(void 0, "radix-vue-accordion-trigger"));
    function l() {
      n.disabled.value || e.changeModelValue(n.value.value);
    }
    return (s, r) => (b(), x(o(Ki), {
      id: o(n).triggerId,
      ref: o(n).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": o(n).disabled.value || void 0,
      "aria-expanded": o(n).open.value || !1,
      "data-disabled": o(n).dataDisabled.value,
      "data-orientation": o(e).orientation,
      "data-state": o(n).dataState.value,
      disabled: o(n).disabled.value,
      onClick: l
    }, {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), Yi = "data-radix-vue-collection-item", [eo, Xi] = Q("CollectionProvider");
function Xt(a = Yi) {
  const t = T(/* @__PURE__ */ new Map()), e = T(), n = Xi({
    collectionRef: e,
    itemMap: t,
    attrName: a
  }), { getItems: l } = Jt(n), s = I(() => Array.from(n.itemMap.value.values())), r = I(() => n.itemMap.value.size);
  return { getItems: l, reactiveItems: s, itemMapSize: r };
}
const Zt = w({
  name: "CollectionSlot",
  setup(a, { slots: t }) {
    const e = eo(), { primitiveElement: n, currentElement: l } = Oe();
    return ee(l, () => {
      e.collectionRef.value = l.value;
    }), () => pt(Jn, { ref: n }, t);
  }
}), Rt = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(a, { slots: t, attrs: e }) {
    const n = eo(), { primitiveElement: l, currentElement: s } = Oe();
    return ye((r) => {
      if (s.value) {
        const i = yr(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: a.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => pt(Jn, { ...e, [n.attrName]: "", ref: l }, t);
  }
});
function Jt(a) {
  const t = a ?? eo();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const l = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (i, u) => l.indexOf(i.ref) - l.indexOf(u.ref)
    );
  } };
}
function Zi(a) {
  return { all: a = a || /* @__PURE__ */ new Map(), on: function(t, e) {
    var n = a.get(t);
    n ? n.push(e) : a.set(t, [e]);
  }, off: function(t, e) {
    var n = a.get(t);
    n && (e ? n.splice(n.indexOf(e) >>> 0, 1) : a.set(t, []));
  }, emit: function(t, e) {
    var n = a.get(t);
    n && n.slice().map(function(l) {
      l(e);
    }), (n = a.get("*")) && n.slice().map(function(l) {
      l(t, e);
    });
  } };
}
const [xa, Ji] = Q("AIChat"), xv = /* @__PURE__ */ w({
  __name: "AIChatRoot",
  props: {
    prompt: { default: "" },
    messages: { default: () => [] },
    emitter: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:prompt", "update:messages", "send"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = ae(e, "prompt", n, {
      defaultValue: "",
      passive: e.prompt === void 0
    }), s = ae(e, "messages", n, {
      defaultValue: [],
      passive: !0,
      deep: !0
    }), r = T(), i = T(), { getItems: u, reactiveItems: d, itemMapSize: c } = Xt("data-radix-vue-ai-chat-item");
    return ee(() => c.value, () => {
      s.value = u().map((p) => p.value);
    }, {
      immediate: !0,
      flush: "post"
    }), Ji({
      prompt: l,
      messages: s,
      inputElement: r,
      onInputElementChange: (p) => r.value = p,
      contentElement: i,
      onContentElementChange: (p) => i.value = p,
      onSendMessage: () => {
        n("send");
      },
      emitter: e.emitter || Zi()
    }), (p, f) => (b(), x(o(O), {
      as: e.as,
      "as-child": p.asChild
    }, {
      default: y(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Sv = /* @__PURE__ */ w({
  __name: "AIChatInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "textarea" }
  },
  setup(a) {
    const t = a, e = xa(), { forwardRef: n, currentElement: l } = R();
    oe(() => {
      const r = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      r && (e.onInputElementChange(r), setTimeout(() => {
        t.autoFocus && (r == null || r.focus());
      }, 1));
    });
    function s(r) {
      var i;
      e.prompt.value = (i = r.target) == null ? void 0 : i.value;
    }
    return (r, i) => (b(), x(o(O), {
      ref: o(n),
      as: r.as,
      "as-child": r.asChild,
      type: r.type,
      disabled: r.disabled,
      value: o(e).prompt.value,
      "aria-disabled": r.disabled ?? void 0,
      role: "combobox",
      autocomplete: "false",
      onInput: s
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-disabled"]));
  }
}), Ev = /* @__PURE__ */ w({
  __name: "AIChatContent",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = xa();
    return oe(() => {
      n.onContentElementChange(e.value);
    }), (l, s) => (b(), x(o(Zt), null, {
      default: y(() => [
        q(o(O), {
          ref: o(t),
          as: l.as,
          "as-child": l.asChild
        }, {
          default: y(() => [
            C(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Pv = /* @__PURE__ */ w({
  __name: "AIChatMessageItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    xa();
    const { forwardRef: t } = R(), e = ve(void 0, "radix-vue-ai-chat-item"), n = ve(void 0, "radix-vue-ai-chat-option");
    return (l, s) => (b(), x(o(Rt), { value: l.value }, {
      default: y(() => [
        q(o(O), {
          id: o(n),
          ref: o(t),
          role: "textbox",
          tabindex: "-1",
          "aria-labelledby": o(e),
          as: l.as,
          "as-child": l.asChild
        }, {
          default: y(() => [
            C(l.$slots, "default", {}, () => [
              me(De(l.value.content), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Dv = /* @__PURE__ */ w({
  __name: "AIChatSend",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = xa(), { forwardRef: n } = R();
    return (l, s) => (b(), x(o(O), M(t, {
      ref: o(n),
      type: l.as === "button" ? "button" : void 0,
      as: l.as,
      "as-child": l.asChild,
      onClick: o(e).onSendMessage
    }), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "as", "as-child", "onClick"]));
  }
}), $v = /* @__PURE__ */ w({
  __name: "AIChatAutoScroll",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = xa(), e = T(!0), { y: n } = bi(t.contentElement);
    function l() {
      n.value = t.contentElement.value.scrollHeight;
    }
    ee(n, (r) => {
      r < t.contentElement.value.scrollHeight - t.contentElement.value.clientHeight - 10 ? e.value = !1 : e.value = !0;
    }), ee(t.messages, () => {
      e.value && l();
    }, {
      deep: !0
    });
    function s() {
      e.value = !0, l();
    }
    return oe(() => {
      l(), t.emitter.on("scrollToBottom", s);
    }), Te(() => {
      t.emitter.off("scrollToBottom", s);
    }), (r, i) => (b(), x(o(O), {
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), [tt, Qi] = Q("DialogRoot"), eu = /* @__PURE__ */ w({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), s = T(), r = T(), { modal: i } = ne(e);
    return Qi({
      open: l,
      modal: i,
      openModal: () => {
        l.value = !0;
      },
      onOpenChange: (u) => {
        l.value = u;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: s,
      contentElement: r
    }), (u, d) => C(u.$slots, "default", { open: o(l) });
  }
}), tu = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = tt(), { forwardRef: n, currentElement: l } = R();
    return e.contentId || (e.contentId = ve(void 0, "radix-vue-dialog-content")), oe(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (b(), x(o(O), M(t, {
      ref: o(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": o(e).open.value || !1,
      "aria-controls": o(e).open.value ? o(e).contentId : void 0,
      "data-state": o(e).open.value ? "open" : "closed",
      onClick: o(e).onOpenToggle
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), yt = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = Ga();
    return (e, n) => o(t) || e.forceMount ? (b(), x(qt, {
      key: 0,
      to: e.to,
      disabled: e.disabled
    }, [
      C(e.$slots, "default")
    ], 8, ["to", "disabled"])) : pe("", !0);
  }
}), Iv = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), au = "dismissableLayer.pointerDownOutside", nu = "dismissableLayer.focusOutside";
function Nl(a, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), n = a.dataset.dismissableLayer === "" ? a : a.querySelector(
    "[data-dismissable-layer]"
  ), l = Array.from(
    a.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(e && n === e || l.indexOf(n) < l.indexOf(e));
}
function zl(a, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = T(!1), l = T(() => {
  });
  return ye((r) => {
    if (!Je)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (Nl(t.value, c)) {
          n.value = !1;
          return;
        }
        if (d.target && !n.value) {
          let p = function() {
            jt(
              au,
              a,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", l.value), l.value = p, e.addEventListener("click", l.value, {
            once: !0
          })) : p();
        } else
          e.removeEventListener("click", l.value);
        n.value = !1;
      }
    }, u = window.setTimeout(() => {
      e.addEventListener("pointerdown", i);
    }, 0);
    r(() => {
      window.clearTimeout(u), e.removeEventListener("pointerdown", i), e.removeEventListener("click", l.value);
    });
  }), {
    onPointerDownCapture: () => n.value = !0
  };
}
function Kl(a, t) {
  var l;
  const e = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = T(!1);
  return ye((s) => {
    if (!Je)
      return;
    const r = async (i) => {
      t != null && t.value && (await se(), !(!t.value || Nl(t.value, i.target)) && i.target && !n.value && jt(
        nu,
        a,
        { originalEvent: i }
      ));
    };
    e.addEventListener("focusin", r), s(() => e.removeEventListener("focusin", r));
  }), {
    onFocusCapture: () => n.value = !0,
    onBlurCapture: () => n.value = !1
  };
}
const je = Wt({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), gt = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = I(
      () => {
        var g;
        return ((g = s.value) == null ? void 0 : g.ownerDocument) ?? globalThis.document;
      }
    ), i = I(() => je.layersRoot), u = I(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = I(() => je.layersWithOutsidePointerEventsDisabled.size > 0), c = I(() => {
      const g = Array.from(i.value), [m] = [...je.layersWithOutsidePointerEventsDisabled].slice(-1), S = g.indexOf(m);
      return u.value >= S;
    }), p = zl(async (g) => {
      const m = [...je.branches].some(
        (S) => S.contains(g.target)
      );
      !c.value || m || (n("pointerDownOutside", g), n("interactOutside", g), await se(), g.defaultPrevented || n("dismiss"));
    }, s), f = Kl((g) => {
      [...je.branches].some(
        (S) => S.contains(g.target)
      ) || (n("focusOutside", g), n("interactOutside", g), g.defaultPrevented || n("dismiss"));
    }, s);
    Gn("Escape", (g) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", g), g.defaultPrevented || n("dismiss"));
    });
    let v;
    return ye((g) => {
      s.value && (e.disableOutsidePointerEvents && (je.layersWithOutsidePointerEventsDisabled.size === 0 && (v = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), je.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), g(() => {
        e.disableOutsidePointerEvents && je.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = v);
      }));
    }), ye((g) => {
      g(() => {
        s.value && (i.value.delete(s.value), je.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (g, m) => (b(), x(o(O), {
      ref: o(l),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: ke({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: o(f).onFocusCapture,
      onBlurCapture: o(f).onBlurCapture,
      onPointerdownCapture: o(p).onPointerDownCapture
    }, {
      default: y(() => [
        C(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), ou = /* @__PURE__ */ w({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = R();
    return oe(() => {
      je.branches.add(n.value);
    }), Te(() => {
      je.branches.delete(n.value);
    }), (l, s) => (b(), x(o(O), M({ ref: o(e) }, t), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xn = "focusScope.autoFocusOnMount", Sn = "focusScope.autoFocusOnUnmount", Uo = { bubbles: !1, cancelable: !0 };
function Va(a, { select: t = !1 } = {}) {
  const e = document.activeElement;
  for (const n of a)
    if (dt(n, { select: t }), document.activeElement !== e)
      return !0;
}
function lu(a) {
  const t = to(a), e = Go(t, a), n = Go(t.reverse(), a);
  return [e, n];
}
function to(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
function Go(a, t) {
  for (const e of a)
    if (!su(e, { upTo: t }))
      return e;
}
function su(a, { upTo: t }) {
  if (getComputedStyle(a).visibility === "hidden")
    return !0;
  for (; a; ) {
    if (t !== void 0 && a === t)
      return !1;
    if (getComputedStyle(a).display === "none")
      return !0;
    a = a.parentElement;
  }
  return !1;
}
function ru(a) {
  return a instanceof HTMLInputElement && "select" in a;
}
function dt(a, { select: t = !1 } = {}) {
  if (a && a.focus) {
    const e = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== e && ru(a) && t && a.select();
  }
}
const iu = Zr(() => T([]));
function uu() {
  const a = iu();
  return {
    add(t) {
      const e = a.value[0];
      t !== e && (e == null || e.pause()), a.value = qo(a.value, t), a.value.unshift(t);
    },
    remove(t) {
      var e;
      a.value = qo(a.value, t), (e = a.value[0]) == null || e.resume();
    }
  };
}
function qo(a, t) {
  const e = [...a], n = e.indexOf(t);
  return n !== -1 && e.splice(n, 1), e;
}
function du(a) {
  return a.filter((t) => t.tagName !== "A");
}
const Za = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, { currentRef: l, currentElement: s } = R(), r = T(null), i = uu(), u = Wt({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ye((c) => {
      if (!Je)
        return;
      const p = s.value;
      if (!e.trapped)
        return;
      function f(S) {
        if (u.paused || !p)
          return;
        const _ = S.target;
        p.contains(_) ? r.value = _ : dt(r.value, { select: !0 });
      }
      function v(S) {
        if (u.paused || !p)
          return;
        const _ = S.relatedTarget;
        _ !== null && (p.contains(_) || dt(r.value, { select: !0 }));
      }
      function g(S) {
        p.contains(r.value) || dt(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const m = new MutationObserver(g);
      p && m.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), m.disconnect();
      });
    }), ye(async (c) => {
      const p = s.value;
      if (await se(), !p)
        return;
      i.add(u);
      const f = document.activeElement;
      if (!p.contains(f)) {
        const g = new CustomEvent(xn, Uo);
        p.addEventListener(xn, (m) => n("mountAutoFocus", m)), p.dispatchEvent(g), g.defaultPrevented || (Va(du(to(p)), {
          select: !0
        }), document.activeElement === f && dt(p));
      }
      c(() => {
        p.removeEventListener(xn, (S) => n("mountAutoFocus", S));
        const g = new CustomEvent(Sn, Uo), m = (S) => {
          n("unmountAutoFocus", S);
        };
        p.addEventListener(Sn, m), p.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || dt(f ?? document.body, { select: !0 }), p.removeEventListener(Sn, m), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = document.activeElement;
      if (p && f) {
        const v = c.currentTarget, [g, m] = lu(v);
        g && m ? !c.shiftKey && f === m ? (c.preventDefault(), e.loop && dt(g, { select: !0 })) : c.shiftKey && f === g && (c.preventDefault(), e.loop && dt(m, { select: !0 })) : f === v && c.preventDefault();
      }
    }
    return (c, p) => (b(), x(o(O), {
      ref_key: "currentRef",
      ref: l,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), cu = "menu.itemSelect", In = ["Enter", " "], pu = ["ArrowDown", "PageUp", "Home"], Hl = ["ArrowUp", "PageDown", "End"], fu = [...pu, ...Hl], vu = {
  ltr: [...In, "ArrowRight"],
  rtl: [...In, "ArrowLeft"]
}, mu = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function ao(a) {
  return a ? "open" : "closed";
}
function La(a) {
  return a === "indeterminate";
}
function no(a) {
  return La(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
function Bn(a) {
  const t = document.activeElement;
  for (const e of a)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function hu(a, t) {
  const { x: e, y: n } = a;
  let l = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, c = t[r].y;
    u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function yu(a, t) {
  if (!t)
    return !1;
  const e = { x: a.clientX, y: a.clientY };
  return hu(e, t);
}
function fa(a) {
  return a.pointerType === "mouse";
}
const gu = "DialogTitle", bu = "DialogContent";
function Cu({
  titleName: a = gu,
  contentName: t = bu,
  componentLink: e = "dialog.html#title",
  titleId: n,
  descriptionId: l,
  contentElement: s
}) {
  const r = `Warning: \`${t}\` requires a \`${a}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${e}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  oe(() => {
    var c;
    document.getElementById(n) || console.warn(r);
    const d = (c = s.value) == null ? void 0 : c.getAttribute("aria-describedby");
    l && !d && (document.getElementById(l) || console.warn(i));
  });
}
const Wl = /* @__PURE__ */ w({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = tt(), { forwardRef: s, currentElement: r } = R();
    return l.titleId || (l.titleId = ve(void 0, "radix-vue-dialog-title")), l.descriptionId || (l.descriptionId = ve(void 0, "radix-vue-dialog-description")), oe(() => {
      l.contentElement = r, document.activeElement !== document.body && (l.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && Cu({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: l.titleId,
      descriptionId: l.descriptionId,
      contentElement: l.contentElement
    }), (i, u) => (b(), x(o(Za), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: y(() => [
        q(o(gt), M({
          id: o(l).contentId,
          ref: o(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": o(l).descriptionId,
          "aria-labelledby": o(l).titleId,
          "data-state": o(ao)(o(l).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => o(l).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => n("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => n("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => n("pointerDownOutside", d))
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), wu = /* @__PURE__ */ w({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = tt(), s = Ae(n), { forwardRef: r, currentElement: i } = R();
    return wa(i), (u, d) => (b(), x(Wl, M({ ...e, ...o(s) }, {
      ref: o(r),
      "trap-focus": o(l).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = o(l).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const p = c.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || f) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), _u = /* @__PURE__ */ w({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    R();
    const s = tt(), r = T(!1), i = T(!1);
    return (u, d) => (b(), x(Wl, M({ ...e, ...o(l) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (r.value || (p = o(s).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var v;
        c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const p = c.target;
        ((v = o(s).triggerElement.value) == null ? void 0 : v.contains(p)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xu = /* @__PURE__ */ w({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = tt(), s = Ae(n), { forwardRef: r } = R();
    return (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: y(() => [
        o(l).modal.value ? (b(), x(wu, M({
          key: 0,
          ref: o(r)
        }, { ...e, ...o(s), ...i.$attrs }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), x(_u, M({
          key: 1,
          ref: o(r)
        }, { ...e, ...o(s), ...i.$attrs }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Su = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = tt();
    return Ca(!0), R(), (e, n) => (b(), x(o(O), {
      as: e.as,
      "as-child": e.asChild,
      "data-state": o(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Eu = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = tt(), { forwardRef: e } = R();
    return (n, l) => {
      var s;
      return (s = o(t)) != null && s.modal.value ? (b(), x(o(Pe), {
        key: 0,
        present: n.forceMount || o(t).open.value
      }, {
        default: y(() => [
          q(Su, M(n.$attrs, {
            ref: o(e),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: y(() => [
              C(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : pe("", !0);
    };
  }
}), jl = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = tt();
    return (n, l) => (b(), x(o(O), M(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (s) => o(e).onOpenChange(!1))
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Pu = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a) {
    const t = a, e = tt();
    return R(), (n, l) => (b(), x(o(O), M(t, {
      id: o(e).titleId
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Du = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    R();
    const e = tt();
    return (n, l) => (b(), x(o(O), M(t, {
      id: o(e).descriptionId
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Bv = /* @__PURE__ */ w({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return R(), (s, r) => (b(), x(o(eu), M(o(l), { modal: !0 }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tv = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(tu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rv = /* @__PURE__ */ w({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [$u, Iu] = Q("AlertDialogContent"), Av = /* @__PURE__ */ w({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    R();
    const s = T();
    return Iu({
      onCancelElementChange: (r) => {
        s.value = r;
      }
    }), (r, i) => (b(), x(o(xu), M({ ...e, ...o(l) }, {
      role: "alertdialog",
      onPointerDownOutside: i[0] || (i[0] = ie(() => {
      }, ["prevent"])),
      onInteractOutside: i[1] || (i[1] = ie(() => {
      }, ["prevent"])),
      onOpenAutoFocus: i[2] || (i[2] = () => {
        se(() => {
          var u;
          (u = s.value) == null || u.focus({
            preventScroll: !0
          });
        });
      })
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ov = /* @__PURE__ */ w({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(Eu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kv = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = $u(), { forwardRef: n, currentElement: l } = R();
    return oe(() => {
      e.onCancelElementChange(l.value);
    }), (s, r) => (b(), x(o(jl), M(t, { ref: o(n) }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mv = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(Pu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vv = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(Du), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fv = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(jl), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = I(() => 1 / t.ratio * 100);
    return (l, s) => (b(), ce("div", {
      style: ke(`position: relative; width: 100%; padding-bottom: ${n.value}%`),
      "data-radix-aspect-ratio-wrapper": ""
    }, [
      q(o(O), M({
        ref: o(e),
        "as-child": l.asChild,
        as: l.as,
        style: { position: "absolute", inset: "0px" }
      }, l.$attrs), {
        default: y(() => [
          C(l.$slots, "default", { aspect: n.value })
        ]),
        _: 3
      }, 16, ["as-child", "as"])
    ], 4));
  }
}), [Ul, Bu] = Q("AvatarRoot"), Nv = /* @__PURE__ */ w({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return R(), Bu({
      imageLoadingStatus: T("loading")
    }), (t, e) => (b(), x(o(O), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: y(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function Tu(a) {
  const t = T("idle"), e = T(!1), n = (l) => () => {
    e.value && (t.value = l);
  };
  return oe(() => {
    e.value = !0, ee(a, (l) => {
      if (!l)
        t.value = "error";
      else {
        const s = new window.Image();
        t.value = "loading", s.onload = n("loaded"), s.onerror = n("error"), s.src = l;
      }
    }, { immediate: !0 });
  }), Te(() => {
    e.value = !1;
  }), t;
}
const zv = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(a, { emit: t }) {
    const e = a, n = t, { src: l } = ne(e);
    R();
    const s = Ul(), r = Tu(l);
    return ee(
      r,
      (i) => {
        n("loadingStatusChange", i), i !== "idle" && (s.imageLoadingStatus.value = i);
      },
      { immediate: !0 }
    ), (i, u) => Wa((b(), x(o(O), {
      role: "img",
      "as-child": i.asChild,
      as: i.as,
      src: o(l)
    }, {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])), [
      [zn, o(r) === "loaded"]
    ]);
  }
}), Kv = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Ul();
    R();
    const n = T(!1);
    let l;
    return ee(e.imageLoadingStatus, (s) => {
      s === "loading" && (n.value = !1, t.delayMs ? l = setTimeout(() => {
        n.value = !0, clearTimeout(l);
      }, t.delayMs) : n.value = !0);
    }, { immediate: !0 }), (s, r) => n.value && o(e).imageLoadingStatus.value !== "loaded" ? (b(), x(o(O), {
      key: 0,
      "as-child": s.asChild,
      as: s.as
    }, {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : pe("", !0);
  }
});
function Ru(a) {
  function t(n) {
    return Array.isArray(a.date.value) ? a.date.value.some((l) => Re(l, n)) : a.date.value ? Re(a.date.value, n) : !1;
  }
  const e = I(
    () => {
      var n, l, s, r;
      if (Array.isArray(a.date.value)) {
        if (!a.date.value.length)
          return !1;
        for (const i of a.date.value)
          if ((n = a.isDateDisabled) != null && n.call(a, i) || (l = a.isDateUnavailable) != null && l.call(a, i))
            return !0;
      } else {
        if (!a.date.value)
          return !1;
        if ((s = a.isDateDisabled) != null && s.call(a, a.date.value) || (r = a.isDateUnavailable) != null && r.call(a, a.date.value))
          return !0;
      }
      return !1;
    }
  );
  return {
    isDateSelected: t,
    isInvalid: e
  };
}
function Au(a, t) {
  const e = t(a), n = e.compare(a), l = {};
  return n >= 7 && (l.day = 1), n >= Pt(a) && (l.month = 1), e.set({ ...l });
}
function Ou(a, t) {
  const e = t(a), n = a.compare(e), l = {};
  return n >= 7 && (l.day = 35), n >= Pt(a) && (l.month = 13), e.set({ ...l });
}
function ku(a, t) {
  return t(a);
}
function Mu(a, t) {
  return t(a);
}
function Gl(a) {
  const t = qn(a.locale.value), e = I(() => {
    const m = {
      calendar: a.placeholder.value.calendar.identifier
    };
    return a.placeholder.value.calendar.identifier === "gregory" && a.placeholder.value.era === "BC" && (m.era = "short"), m;
  }), n = T(_t({
    dateObj: a.placeholder.value,
    weekStartsOn: a.weekStartsOn.value,
    locale: a.locale.value,
    fixedWeeks: a.fixedWeeks.value,
    numberOfMonths: a.numberOfMonths.value
  })), l = I(() => n.value.map((m) => m.value));
  function s(m) {
    return !l.value.some((S) => Lo(m, S));
  }
  const r = (m = "month", S) => {
    if (!a.maxValue.value || !n.value.length)
      return !1;
    if (a.disabled.value)
      return !0;
    const _ = n.value[n.value.length - 1].value;
    if (S || a.nextPage.value) {
      const h = Au(_, S || a.nextPage.value);
      return Da(h, a.maxValue.value);
    }
    if (m === "year") {
      const h = _.add({ years: 1 }).set({ day: 1, month: 1 });
      return Da(h, a.maxValue.value);
    }
    const D = _.add({ months: 1 }).set({ day: 1 });
    return Da(D, a.maxValue.value);
  }, i = (m = "month", S) => {
    if (!a.minValue.value || !n.value.length)
      return !1;
    if (a.disabled.value)
      return !0;
    const _ = n.value[0].value;
    if (S || a.prevPage.value) {
      const h = Ou(_, S || a.prevPage.value);
      return Me(h, a.minValue.value);
    }
    if (m === "year") {
      const h = _.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Me(h, a.minValue.value);
    }
    const D = _.subtract({ months: 1 }).set({ day: 35 });
    return Me(D, a.minValue.value);
  };
  function u(m) {
    var S;
    return !!((S = a.isDateDisabled) != null && S.call(a, m) || a.disabled.value || a.maxValue.value && Da(m, a.maxValue.value) || a.minValue.value && Me(m, a.minValue.value));
  }
  const d = (m) => {
    var S;
    return !!((S = a.isDateUnavailable) != null && S.call(a, m));
  }, c = I(() => n.value.length ? n.value[0].rows[0].map((m) => t.dayOfWeek(Ne(m), a.weekdayFormat.value)) : []), p = (m = "month", S) => {
    const _ = n.value[0].value;
    if (S || a.nextPage.value) {
      const E = ku(_, S || a.nextPage.value), P = _t({
        dateObj: E,
        weekStartsOn: a.weekStartsOn.value,
        locale: a.locale.value,
        fixedWeeks: a.fixedWeeks.value,
        numberOfMonths: a.numberOfMonths.value
      });
      n.value = P;
      const $ = {};
      if (!S) {
        const B = P[0].value.compare(_);
        B >= Pt(_) && ($.day = 1), B >= 365 && ($.month = 1);
      }
      a.placeholder.value = P[0].value.set({ ...$ });
      return;
    }
    const D = m === "month" ? _.add({ months: a.pagedNavigation.value ? a.numberOfMonths.value : 1 }) : _.add({ years: 1 }), h = _t({
      dateObj: D,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
    n.value = h, a.placeholder.value = h[0].value.set({ day: 1 });
  }, f = (m = "month", S) => {
    const _ = n.value[0].value;
    if (S || a.prevPage.value) {
      const E = Mu(_, S || a.prevPage.value), P = _t({
        dateObj: E,
        weekStartsOn: a.weekStartsOn.value,
        locale: a.locale.value,
        fixedWeeks: a.fixedWeeks.value,
        numberOfMonths: a.numberOfMonths.value
      });
      n.value = P;
      const $ = {};
      if (!S) {
        const B = _.compare(P[0].value);
        B >= Pt(_) && ($.day = 1), B >= 365 && ($.month = 1);
      }
      a.placeholder.value = P[0].value.set({ ...$ });
      return;
    }
    const D = m === "month" ? _.subtract({ months: a.pagedNavigation.value ? a.numberOfMonths.value : 1 }) : _.subtract({ years: 1 }), h = _t({
      dateObj: D,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
    n.value = h, a.placeholder.value = h[0].value.set({ day: 1 });
  };
  ee(a.placeholder, (m) => {
    l.value.some((S) => Lo(S, m)) || (n.value = _t({
      dateObj: m,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    }));
  }), ee([a.locale, a.weekStartsOn, a.fixedWeeks, a.numberOfMonths], () => {
    n.value = _t({
      dateObj: a.placeholder.value,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
  });
  const v = I(() => {
    if (!n.value.length)
      return "";
    if (a.locale.value !== t.getLocale() && t.setLocale(a.locale.value), n.value.length === 1) {
      const $ = n.value[0].value;
      return `${t.fullMonthAndYear(Ne($), e.value)}`;
    }
    const m = Ne(n.value[0].value), S = Ne(n.value[n.value.length - 1].value), _ = t.fullMonth(m, e.value), D = t.fullMonth(S, e.value), h = t.fullYear(m, e.value), E = t.fullYear(S, e.value);
    return h === E ? `${_} - ${D} ${E}` : `${_} ${h} - ${D} ${E}`;
  }), g = I(() => `${a.calendarLabel.value ?? "Event Date"}, ${v.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: d,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: c,
    visibleView: l,
    isOutsideVisibleView: s,
    formatter: t,
    nextPage: p,
    prevPage: f,
    headingValue: v,
    fullCalendarLabel: g
  };
}
const Vu = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Fu = {
  role: "heading",
  "aria-level": "2"
}, [Qt, Lu] = Q("CalendarRoot"), Nu = /* @__PURE__ */ w({
  __name: "CalendarRoot",
  props: {
    modelValue: {},
    multiple: { type: Boolean, default: !1 },
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    pagedNavigation: { type: Boolean, default: !1 },
    preventDeselect: { type: Boolean, default: !1 },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    calendarLabel: {},
    fixedWeeks: { type: Boolean, default: !1 },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    numberOfMonths: { default: 1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    initialFocus: { type: Boolean, default: !1 },
    isDateDisabled: { type: Function, default: void 0 },
    isDateUnavailable: { type: Function, default: void 0 },
    dir: {},
    nextPage: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a, { emit: t }) {
    const e = a, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: f,
      minValue: v,
      maxValue: g,
      numberOfMonths: m,
      preventDeselect: S,
      isDateDisabled: _,
      isDateUnavailable: D,
      calendarLabel: h,
      defaultValue: E,
      nextPage: P,
      prevPage: $,
      dir: B
    } = ne(e), { primitiveElement: V, currentElement: k } = Oe(), A = be(B), L = ae(e, "modelValue", n, {
      defaultValue: E.value,
      passive: e.modelValue === void 0
    }), H = Yt({
      defaultPlaceholder: e.placeholder,
      defaultValue: L.value
    }), K = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? H.copy(),
      passive: e.placeholder === void 0
    });
    function X(ue) {
      K.value = ue.copy();
    }
    const {
      fullCalendarLabel: N,
      headingValue: F,
      isDateDisabled: j,
      isDateUnavailable: z,
      isNextButtonDisabled: Z,
      isPrevButtonDisabled: G,
      weekdays: J,
      isOutsideVisibleView: te,
      nextPage: fe,
      prevPage: Y,
      formatter: le,
      grid: he
    } = Gl({
      locale: l,
      placeholder: K,
      weekStartsOn: d,
      fixedWeeks: p,
      numberOfMonths: m,
      minValue: v,
      maxValue: g,
      disabled: s,
      weekdayFormat: c,
      pagedNavigation: u,
      isDateDisabled: _.value,
      isDateUnavailable: D.value,
      calendarLabel: h,
      nextPage: P,
      prevPage: $
    }), {
      isInvalid: Ce,
      isDateSelected: ge
    } = Ru({
      date: L,
      isDateDisabled: j,
      isDateUnavailable: z
    });
    ee(L, (ue) => {
      if (Array.isArray(ue) && ue.length) {
        const Se = ue[ue.length - 1];
        Se && !Ee(K.value, Se) && X(Se);
      } else !Array.isArray(ue) && ue && !Ee(K.value, ue) && X(ue);
    });
    function $e(ue) {
      if (f.value) {
        if (Array.isArray(L.value)) {
          if (!L.value) {
            L.value = [ue.copy()];
            return;
          }
          if (L.value.findIndex((Fe) => Re(Fe, ue)) === -1)
            L.value = [...L.value, ue];
          else if (!S.value) {
            const Fe = L.value.filter((He) => !Re(He, ue));
            if (!Fe.length) {
              K.value = ue.copy(), L.value = void 0;
              return;
            }
            L.value = Fe.map((He) => He.copy());
          }
        }
      } else {
        if (!L.value) {
          L.value = ue.copy();
          return;
        }
        !S.value && Ee(L.value, ue) ? (K.value = ue.copy(), L.value = void 0) : L.value = ue.copy();
      }
    }
    return oe(() => {
      i.value && xl(k.value);
    }), Lu({
      isDateUnavailable: z,
      dir: A,
      isDateDisabled: j,
      locale: l,
      formatter: le,
      modelValue: L,
      placeholder: K,
      disabled: s,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: f,
      numberOfMonths: m,
      readonly: r,
      preventDeselect: S,
      fullCalendarLabel: N,
      headingValue: F,
      isInvalid: Ce,
      isDateSelected: ge,
      isNextButtonDisabled: Z,
      isPrevButtonDisabled: G,
      isOutsideVisibleView: te,
      nextPage: fe,
      prevPage: Y,
      parentElement: k,
      onPlaceholderChange: X,
      onDateChange: $e
    }), (ue, Se) => (b(), x(o(O), {
      ref_key: "primitiveElement",
      ref: V,
      as: ue.as,
      "as-child": ue.asChild,
      role: "application",
      "aria-label": o(N),
      "data-readonly": o(r) ? "" : void 0,
      "data-disabled": o(s) ? "" : void 0,
      "data-invalid": o(Ce) ? "" : void 0,
      dir: o(A)
    }, {
      default: y(() => [
        C(ue.$slots, "default", {
          date: o(K),
          grid: o(he),
          weekDays: o(J),
          weekStartsOn: o(d),
          locale: o(l),
          fixedWeeks: o(p)
        }),
        Ge("div", Vu, [
          Ge("div", Fu, De(o(N)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), zu = /* @__PURE__ */ w({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ku = /* @__PURE__ */ w({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = Qt();
    return (n, l) => (b(), x(o(O), M(t, {
      "data-disabled": o(e).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        C(n.$slots, "default", {
          headingValue: o(e).headingValue.value
        }, () => [
          me(De(o(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Hu = /* @__PURE__ */ w({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a) {
    const t = a, e = Qt(), n = I(() => e.disabled.value ? !0 : void 0), l = I(() => e.readonly.value ? !0 : void 0);
    return (s, r) => (b(), x(o(O), M(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": l.value,
      "aria-disabled": n.value,
      "data-readonly": l.value && "",
      "data-disabled": n.value && ""
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Wu = /* @__PURE__ */ w({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a) {
    const t = Qt();
    return (e, n) => {
      var l, s;
      return b(), x(o(O), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": o(t).isDateSelected(e.date) ? !0 : void 0,
        "aria-disabled": o(t).isDateDisabled(e.date) || ((s = (l = o(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": o(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: y(() => [
          C(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), ju = /* @__PURE__ */ w({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uu = /* @__PURE__ */ w({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = I(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = Qt();
    return (l, s) => (b(), x(o(O), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).nextPage(t.step, t.nextPage))
    }, {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          me("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Gu = /* @__PURE__ */ w({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = I(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = Qt();
    return (l, s) => (b(), x(o(O), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).prevPage(t.step, t.prevPage))
    }, {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          me("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), qu = /* @__PURE__ */ w({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), M(t, { "aria-hidden": "true" }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yu = /* @__PURE__ */ w({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xu = /* @__PURE__ */ w({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zu = /* @__PURE__ */ w({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = et(), n = Qt(), { primitiveElement: l, currentElement: s } = Oe(), r = I(() => t.day.day.toLocaleString(n.locale.value)), i = I(() => n.formatter.custom(Ne(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = I(() => n.isDateDisabled(t.day)), d = I(
      () => {
        var h;
        return (h = n.isDateUnavailable) == null ? void 0 : h.call(n, t.day);
      }
    ), c = I(() => hl(t.day, Hn())), p = I(() => !yl(t.day, t.month)), f = I(
      () => n.isOutsideVisibleView(t.day)
    ), v = I(() => !n.disabled.value && Re(t.day, n.placeholder.value)), g = I(() => n.isDateSelected(t.day)), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function S(h) {
      var E;
      n.readonly.value || n.isDateDisabled(h) || (E = n.isDateUnavailable) != null && E.call(n, h) || n.onDateChange(h);
    }
    function _() {
      S(t.day);
    }
    function D(h) {
      h.preventDefault(), h.stopPropagation();
      const E = n.parentElement.value, P = E ? Array.from(E.querySelectorAll(m)) : [];
      let B = P.indexOf(s.value);
      const V = 7, k = n.dir.value === "rtl" ? -1 : 1;
      switch (h.code) {
        case e.ARROW_RIGHT:
          B += k;
          break;
        case e.ARROW_LEFT:
          B -= k;
          break;
        case e.ARROW_UP:
          B -= V;
          break;
        case e.ARROW_DOWN:
          B += V;
          break;
        case e.ENTER:
        case e.SPACE_CODE:
          S(t.day);
          return;
        default:
          return;
      }
      if (B >= 0 && B < P.length) {
        P[B].focus();
        return;
      }
      if (B < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), se(() => {
          const A = E ? Array.from(E.querySelectorAll(m)) : [];
          A[A.length - Math.abs(B)].focus();
        });
        return;
      }
      if (B >= P.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), se(() => {
          (E ? Array.from(E.querySelectorAll(m)) : [])[B - P.length].focus();
        });
      }
    }
    return (h, E) => (b(), x(o(O), M({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || u.value || d.value ? !0 : void 0,
      "data-selected": g.value ? !0 : void 0,
      "data-value": h.day.toString(),
      "data-disabled": u.value || p.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": f.value ? "" : void 0,
      "data-focused": v.value ? "" : void 0,
      tabindex: v.value ? 0 : p.value || u.value ? void 0 : -1,
      onClick: _,
      onKeydown: [
        re(D, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = re(ie(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: y(() => [
        C(h.$slots, "default", { dayValue: r.value }, () => [
          me(De(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Na(a) {
  return a === "indeterminate";
}
function ql(a) {
  return Na(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
const Ju = ["value", "checked", "name", "disabled", "required"], [Qu, ed] = Q("CheckboxRoot"), Hv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CheckboxRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String], default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: { default: "on" },
    id: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a, { emit: t }) {
    const e = a, n = t, { disabled: l } = ne(e), s = ae(e, "checked", n, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    }), { forwardRef: r, currentElement: i } = R(), u = Qe(i), d = I(() => {
      var c;
      return e.id && i.value ? (c = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return ed({
      disabled: l,
      state: s
    }), (c, p) => (b(), ce(_e, null, [
      q(o(O), M(c.$attrs, {
        id: c.id,
        ref: o(r),
        role: "checkbox",
        "as-child": e.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": o(Na)(o(s)) ? "mixed" : o(s),
        "aria-required": !1,
        "aria-label": c.$attrs["aria-label"] || d.value,
        "data-state": o(ql)(o(s)),
        "data-disabled": o(l) ? "" : void 0,
        disabled: o(l),
        onKeydown: re(ie(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (f) => s.value = o(Na)(o(s)) ? !0 : !o(s))
      }), {
        default: y(() => [
          C(c.$slots, "default", { checked: o(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      o(u) ? (b(), ce("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: c.value,
        checked: !!o(s),
        name: e.name,
        disabled: e.disabled,
        required: e.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Ju)) : pe("", !0)
    ], 64));
  }
}), Wv = /* @__PURE__ */ w({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t } = R(), e = Qu();
    return (n, l) => (b(), x(o(Pe), {
      present: n.forceMount || o(Na)(o(e).state.value) || o(e).state.value === !0
    }, {
      default: y(() => [
        q(o(O), M({
          ref: o(t),
          "data-state": o(ql)(o(e).state.value),
          "data-disabled": o(e).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Yl, td] = Q("PopperRoot"), At = /* @__PURE__ */ w({
  __name: "PopperRoot",
  setup(a) {
    const t = T();
    return td({
      anchor: t,
      onAnchorChange: (e) => t.value = e
    }), (e, n) => C(e.$slots, "default");
  }
}), Ot = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = R(), l = Yl();
    return ee(n, () => {
      l.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (b(), x(o(O), {
      ref: o(e),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function ad(a) {
  return a !== null;
}
function nd(a) {
  return {
    name: "transformOrigin",
    options: a,
    fn(t) {
      var S, _, D;
      const { placement: e, rects: n, middlewareData: l } = t, r = ((S = l.arrow) == null ? void 0 : S.centerOffset) !== 0, i = r ? 0 : a.arrowWidth, u = r ? 0 : a.arrowHeight, [d, c] = Tn(e), p = { start: "0%", center: "50%", end: "100%" }[c], f = (((_ = l.arrow) == null ? void 0 : _.x) ?? 0) + i / 2, v = (((D = l.arrow) == null ? void 0 : D.y) ?? 0) + u / 2;
      let g = "", m = "";
      return d === "bottom" ? (g = r ? p : `${f}px`, m = `${-u}px`) : d === "top" ? (g = r ? p : `${f}px`, m = `${n.floating.height + u}px`) : d === "right" ? (g = `${-u}px`, m = r ? p : `${v}px`) : d === "left" && (g = `${n.floating.width + u}px`, m = r ? p : `${v}px`), { data: { x: g, y: m } };
    }
  };
}
function Tn(a) {
  const [t, e = "center"] = a.split("-");
  return [t, e];
}
const Xl = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [od, ld] = Q("PopperContent"), Dt = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ vl({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Xl
  }),
  emits: ["placed"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Yl(), { forwardRef: s, currentElement: r } = R(), i = T(), u = T(), { width: d, height: c } = kl(u), p = I(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), f = I(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), v = I(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), g = I(() => ({
      padding: f.value,
      boundary: v.value.filter(ad),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), m = Yr(() => [
      $r({
        mainAxis: e.sideOffset + c.value,
        alignmentAxis: e.alignOffset
      }),
      e.prioritizePosition && e.avoidCollisions && No({
        ...g.value
      }),
      e.avoidCollisions && Ir({
        mainAxis: !0,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? Br() : void 0,
        ...g.value
      }),
      !e.prioritizePosition && e.avoidCollisions && No({
        ...g.value
      }),
      Tr({
        ...g.value,
        apply: ({ elements: A, rects: L, availableWidth: H, availableHeight: K }) => {
          const { width: X, height: N } = L.reference, F = A.floating.style;
          F.setProperty(
            "--radix-popper-available-width",
            `${H}px`
          ), F.setProperty(
            "--radix-popper-available-height",
            `${K}px`
          ), F.setProperty(
            "--radix-popper-anchor-width",
            `${X}px`
          ), F.setProperty(
            "--radix-popper-anchor-height",
            `${N}px`
          );
        }
      }),
      u.value && Rr({ element: u.value, padding: e.arrowPadding }),
      nd({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && Ar({ strategy: "referenceHidden", ...g.value })
    ]), { floatingStyles: S, placement: _, isPositioned: D, middlewareData: h } = Pr(
      l.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...A) => Dr(...A, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), E = I(
      () => Tn(_.value)[0]
    ), P = I(
      () => Tn(_.value)[1]
    );
    ye(() => {
      D.value && n("placed");
    });
    const $ = I(
      () => {
        var A;
        return ((A = h.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), B = T("");
    ye(() => {
      r.value && (B.value = window.getComputedStyle(r.value).zIndex);
    });
    const V = I(() => {
      var A;
      return ((A = h.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), k = I(() => {
      var A;
      return ((A = h.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return ld({
      placedSide: E,
      onArrowChange: (A) => u.value = A,
      arrowX: V,
      arrowY: k,
      shouldHideArrow: $
    }), (A, L) => {
      var H, K, X;
      return b(), ce("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: ke({
          ...o(S),
          transform: o(D) ? o(S).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B.value,
          "--radix-popper-transform-origin": [
            (H = o(h).transformOrigin) == null ? void 0 : H.x,
            (K = o(h).transformOrigin) == null ? void 0 : K.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((X = o(h).hide) == null ? void 0 : X.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        q(o(O), M({ ref: o(s) }, A.$attrs, {
          "as-child": e.asChild,
          as: A.as,
          "data-side": E.value,
          "data-align": P.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: o(D) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            C(A.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), sd = /* @__PURE__ */ Ge("polygon", { points: "0,0 30,0 15,10" }, null, -1), rd = /* @__PURE__ */ w({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(O), M(t, {
      width: e.width,
      height: e.height,
      viewBox: e.asChild ? void 0 : "0 0 30 10",
      preserveAspectRatio: e.asChild ? void 0 : "none"
    }), {
      default: y(() => [
        C(e.$slots, "default", {}, () => [
          sd
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), id = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ea = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const { forwardRef: t } = R(), e = od(), n = I(() => id[e.placedSide.value]);
    return (l, s) => {
      var r, i, u, d;
      return b(), ce("span", {
        ref: (c) => {
          o(e).onArrowChange(c);
        },
        style: ke({
          position: "absolute",
          left: (r = o(e).arrowX) != null && r.value ? `${(i = o(e).arrowX) == null ? void 0 : i.value}px` : void 0,
          top: (u = o(e).arrowY) != null && u.value ? `${(d = o(e).arrowY) == null ? void 0 : d.value}px` : void 0,
          [n.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[o(e).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[o(e).placedSide.value],
          visibility: o(e).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        q(rd, M(l.$attrs, {
          ref: o(t),
          style: {
            display: "block"
          },
          as: l.as,
          "as-child": l.asChild,
          width: l.width,
          height: l.height
        }), {
          default: y(() => [
            C(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "width", "height"])
      ], 4);
    };
  }
}), ta = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return R(), (t, e) => (b(), x(o(O), {
      as: t.as,
      "as-child": t.asChild,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        display: "inline-block",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: y(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), oo = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = I(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, l) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${l}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${l}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, l]) => ({ name: `[${t.name}][${n}]`, value: l })) : []);
    return (n, l) => (b(!0), ce(_e, null, ga(e.value, (s) => (b(), x(ta, {
      key: s.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: s.name,
      value: s.value,
      required: n.required,
      disabled: n.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), [nt, ud] = Q("ComboboxRoot"), jv = /* @__PURE__ */ w({
  __name: "ComboboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    selectedValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    resetSearchTermOnBlur: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { multiple: l, disabled: s, dir: r } = ne(e), i = be(r), u = ae(e, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: e.searchTerm === void 0
    }), d = ae(e, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: e.defaultValue ?? l.value ? [] : void 0,
      passive: e.modelValue === void 0,
      deep: !0
    }), c = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), p = ae(e, "selectedValue", n, {
      defaultValue: void 0,
      passive: e.selectedValue === void 0
    });
    async function f(N) {
      var F, j;
      c.value = N, await se(), N ? (d.value && (Array.isArray(d.value) && l.value ? p.value = (F = h().find((z) => {
        var Z, G;
        return ((G = (Z = z.ref) == null ? void 0 : Z.dataset) == null ? void 0 : G.state) === "checked";
      })) == null ? void 0 : F.value : p.value = d.value), (j = m.value) == null || j.focus(), K()) : (g.value = !1, e.resetSearchTermOnBlur && V());
    }
    function v(N) {
      if (Array.isArray(d.value) && l.value) {
        const F = d.value.findIndex((z) => Xe(z, N)), j = [...d.value];
        F === -1 ? j.push(N) : j.splice(F, 1), d.value = j;
      } else
        d.value = N, f(!1);
    }
    const g = T(!1), m = T(), S = T(), { forwardRef: _, currentElement: D } = R(), { getItems: h, reactiveItems: E, itemMapSize: P } = Xt("data-radix-vue-combobox-item"), $ = T([]);
    ee(() => P.value, () => {
      $.value = h().map((N) => N.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const B = I(() => {
      if (g.value) {
        if (e.filterFunction)
          return e.filterFunction($.value, u.value);
        const N = $.value.filter((F) => typeof F == "string");
        if (N.length)
          return N.filter((F) => {
            var j;
            return F.toLowerCase().includes((j = u.value) == null ? void 0 : j.toLowerCase());
          });
      }
      return $.value;
    });
    function V() {
      !l.value && d.value && !Array.isArray(d.value) ? e.displayValue ? u.value = e.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const k = I(() => B.value.findIndex((N) => Xe(N, p.value))), A = I(() => {
      var N;
      return (N = E.value.find((F) => Xe(F.value, p.value))) == null ? void 0 : N.ref;
    }), L = I(() => JSON.stringify(d.value));
    ee(L, async () => {
      await se(), await se(), V();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !e.searchTerm
    }), ee(() => [B.value.length, u.value.length], async ([N, F], [j, z]) => {
      await se(), await se(), N && (z > F || k.value === -1) && (p.value = B.value[0]);
    });
    const H = Qe(D);
    function K() {
      A.value instanceof Element && A.value.scrollIntoView({ block: "nearest" });
    }
    function X() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    return ud({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: v,
      isUserInputted: g,
      multiple: l,
      disabled: s,
      open: c,
      onOpenChange: f,
      filteredOptions: B,
      contentId: "",
      inputElement: m,
      selectedElement: A,
      onInputElementChange: (N) => m.value = N,
      onInputNavigation: async (N) => {
        const F = k.value;
        F === 0 && N === "up" || F === B.value.length - 1 && N === "down" || (F === -1 && B.value.length || N === "home" ? p.value = B.value[0] : N === "end" ? p.value = B.value[B.value.length - 1] : p.value = B.value[N === "up" ? F - 1 : F + 1], K(), X(), se(() => {
          var j;
          return (j = m.value) == null ? void 0 : j.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async () => {
        var N;
        B.value.length && p.value && A.value instanceof Element && ((N = A.value) == null || N.click());
      },
      selectedValue: p,
      onSelectedValueChange: (N) => p.value = N,
      parentElement: D,
      contentElement: S,
      onContentElementChange: (N) => S.value = N
    }), (N, F) => (b(), x(o(At), null, {
      default: y(() => [
        q(o(O), M({
          ref: o(_),
          style: {
            pointerEvents: o(c) ? "auto" : void 0
          },
          as: N.as,
          "as-child": N.asChild,
          dir: o(i)
        }, N.$attrs), {
          default: y(() => [
            C(N.$slots, "default", {
              open: o(c),
              modelValue: o(d)
            }),
            o(H) && e.name ? (b(), x(o(oo), {
              key: 0,
              name: e.name,
              value: o(d)
            }, null, 8, ["name", "value"])) : pe("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Uv = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = nt(), { forwardRef: n, currentElement: l } = R();
    oe(() => {
      const c = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      c && (e.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const s = I(() => t.disabled || e.disabled.value || !1), r = T();
    gr(() => {
      var c;
      return r.value = (c = e.selectedElement.value) == null ? void 0 : c.id;
    });
    function i(c) {
      e.open.value ? e.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : e.onOpenChange(!0);
    }
    function u(c) {
      e.open.value && e.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function d(c) {
      var p;
      e.searchTerm.value = (p = c.target) == null ? void 0 : p.value, e.open.value || e.onOpenChange(!0), e.isUserInputted.value = !0;
    }
    return (c, p) => (b(), x(o(O), {
      ref: o(n),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: s.value,
      value: o(e).searchTerm.value,
      "aria-expanded": o(e).open.value,
      "aria-controls": o(e).contentId,
      "aria-disabled": s.value ?? void 0,
      "aria-activedescendant": r.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: [
        re(ie(i, ["prevent"]), ["down", "up"]),
        re(o(e).onInputEnter, ["enter"]),
        re(ie(u, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), Gv = /* @__PURE__ */ w({
  __name: "ComboboxAnchor",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const { forwardRef: t } = R();
    return (e, n) => (b(), x(o(Ot), { "as-child": "" }, {
      default: y(() => [
        q(o(O), M({
          ref: o(t),
          "as-child": e.asChild,
          as: e.as
        }, e.$attrs), {
          default: y(() => [
            C(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }));
  }
}), qv = /* @__PURE__ */ w({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = nt(), n = I(() => t.disabled || e.disabled.value || !1);
    return (l, s) => (b(), x(o(O), M(t, {
      type: l.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": o(e).open.value,
      "aria-controls": o(e).contentId,
      "data-state": o(e).open.value ? "open" : "closed",
      disabled: n.value,
      "data-disabled": n.value ? "" : void 0,
      "aria-disabled": n.value ?? void 0,
      onClick: s[0] || (s[0] = (r) => o(e).onOpenChange(!o(e).open.value))
    }), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
}), Yv = /* @__PURE__ */ w({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = nt();
    function n() {
      var l;
      e.searchTerm.value = "", (l = e.inputElement.value) == null || l.focus();
    }
    return (l, s) => (b(), x(o(O), M({
      type: l.as === "button" ? "button" : void 0
    }, t, {
      tabindex: "-1",
      onClick: n
    }), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), [Zl, dd] = Q("ComboboxGroup"), Xv = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { currentRef: e, currentElement: n } = R(), l = ve(void 0, "radix-vue-combobox-group"), s = nt(), r = T(!1);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!u.length;
    }
    return Il(n, () => {
      se(() => {
        i();
      });
    }, { childList: !0 }), ee(() => s.searchTerm.value, () => {
      se(() => {
        i();
      });
    }, { immediate: !0 }), dd({
      id: l
    }), (u, d) => Wa((b(), x(o(O), M(t, {
      ref_key: "currentRef",
      ref: e,
      role: "group",
      "aria-labelledby": o(l)
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [zn, r.value]
    ]);
  }
}), Zv = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Zl({ id: "" });
    return (n, l) => (b(), x(o(O), M(t, {
      id: o(e).id
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [cd, pd] = Q("ComboboxContent"), fd = /* @__PURE__ */ w({
  __name: "ComboboxContentImpl",
  props: {
    position: { default: "inline" },
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: !0 },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, { position: l } = ne(e), s = nt();
    Ca(e.bodyLock);
    const { forwardRef: r, currentElement: i } = R();
    wa(i);
    const u = I(() => e.position === "popper" ? e : {}), d = Tt(u.value);
    function c(f) {
      s.onSelectedValueChange("");
    }
    oe(() => {
      s.onContentElementChange(i.value);
    });
    const p = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return pd({ position: l }), (f, v) => (b(), x(o(Zt), null, {
      default: y(() => [
        f.dismissable ? (b(), x(o(gt), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: v[0] || (v[0] = (g) => o(s).onOpenChange(!1)),
          onFocusOutside: v[1] || (v[1] = (g) => {
            var m;
            (m = o(s).parentElement.value) != null && m.contains(g.target) && g.preventDefault(), n("focusOutside", g);
          }),
          onInteractOutside: v[2] || (v[2] = (g) => n("interactOutside", g)),
          onEscapeKeyDown: v[3] || (v[3] = (g) => n("escapeKeyDown", g)),
          onPointerDownOutside: v[4] || (v[4] = (g) => {
            var m;
            (m = o(s).parentElement.value) != null && m.contains(g.target) && g.preventDefault(), n("pointerDownOutside", g);
          })
        }, {
          default: y(() => [
            (b(), x(qe(o(l) === "popper" ? o(Dt) : o(O)), M({ ...f.$attrs, ...o(d) }, {
              id: o(s).contentId,
              ref: o(r),
              role: "listbox",
              "data-state": o(s).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...o(l) === "popper" ? p : {}
              },
              onPointerleave: c
            }), {
              default: y(() => [
                C(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (b(), x(qe(o(l) === "popper" ? o(Dt) : o(O)), M({ key: 1 }, { ...f.$attrs, ...u.value }, {
          id: o(s).contentId,
          ref: o(r),
          role: "listbox",
          "data-state": o(s).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...o(l) === "popper" ? p : {}
          },
          onPointerleave: c
        }), {
          default: y(() => [
            C(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Jv = /* @__PURE__ */ w({
  __name: "ComboboxContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const l = xe(a, t), { forwardRef: s } = R(), r = nt();
    return r.contentId || (r.contentId = ve(void 0, "radix-vue-combobox-content")), (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(r).open.value
    }, {
      default: y(() => [
        q(fd, M({ ...o(l), ...i.$attrs }, { ref: o(s) }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Qv = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = nt(), n = I(() => e.filteredOptions.value.length === 0);
    return (l, s) => n.value ? (b(), x(o(O), W(M({ key: 0 }, t)), {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          me("No options")
        ])
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
});
function Ja(a) {
  const t = Ya({
    nonce: T()
  });
  return I(() => {
    var e;
    return (a == null ? void 0 : a.value) || ((e = t.nonce) == null ? void 0 : e.value);
  });
}
const em = /* @__PURE__ */ w({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), { nonce: n } = ne(t), l = Ja(n);
    return (s, r) => (b(), ce(_e, null, [
      q(o(O), M({ ...s.$attrs, ...t }, {
        ref: o(e),
        "data-radix-combobox-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        }
      }), {
        default: y(() => [
          C(s.$slots, "default")
        ]),
        _: 3
      }, 16),
      q(o(O), {
        as: "style",
        nonce: o(l)
      }, {
        default: y(() => [
          me(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), [vd, md] = Q("ComboboxItem"), hd = "combobox.select", tm = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { disabled: l } = ne(e), s = nt();
    Zl({ id: "", options: T([]) });
    const { forwardRef: r } = R(), i = I(
      () => {
        var m, S;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (m = s.modelValue.value) == null ? void 0 : m.some((_) => Xe(_, e.value)) : Xe((S = s.modelValue) == null ? void 0 : S.value, e.value);
      }
    ), u = I(() => Xe(s.selectedValue.value, e.value)), d = ve(void 0, "radix-vue-combobox-item"), c = ve(void 0, "radix-vue-combobox-option"), p = I(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((m) => Xe(m, e.value)) : !0);
    async function f(m) {
      n("select", m), !(m != null && m.defaultPrevented) && !l.value && m && s.onValueChange(e.value);
    }
    function v(m) {
      if (!m)
        return;
      const S = { originalEvent: m, value: e.value };
      jt(hd, f, S);
    }
    async function g(m) {
      await se(), !m.defaultPrevented && s.onSelectedValueChange(e.value);
    }
    if (e.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return md({
      isSelected: i
    }), (m, S) => (b(), x(o(Rt), { value: m.value }, {
      default: y(() => [
        Wa(q(o(O), {
          id: o(c),
          ref: o(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": o(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": o(l) || void 0,
          "data-disabled": o(l) ? "" : void 0,
          as: m.as,
          "as-child": m.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: v,
          onPointermove: g
        }, {
          default: y(() => [
            C(m.$slots, "default", {}, () => [
              me(De(m.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [zn, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), am = /* @__PURE__ */ w({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a;
    R();
    const e = vd();
    return (n, l) => o(e).isSelected.value ? (b(), x(o(O), M({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), nm = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(O), M(t, { "aria-hidden": "" }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), om = /* @__PURE__ */ w({
  __name: "ComboboxArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a, e = nt(), n = cd();
    return R(), (l, s) => o(e).open.value && o(n).position.value === "popper" ? (b(), x(o(ea), W(M({ key: 0 }, t)), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), lm = /* @__PURE__ */ w({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qa = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Ot), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lo = /* @__PURE__ */ w({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(ea), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [kt, Jl] = Q(["MenuRoot", "MenuSub"], "MenuContext"), [Sa, yd] = Q("MenuRoot"), so = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { modal: l, dir: s } = ne(e), r = be(s), i = ae(e, "open", n), u = T(), d = T(!1);
    return ye((c) => {
      if (!Je)
        return;
      const p = () => {
        d.value = !0, document.addEventListener("pointerdown", f, {
          capture: !0,
          once: !0
        }), document.addEventListener("pointermove", f, {
          capture: !0,
          once: !0
        });
      }, f = () => d.value = !1;
      document.addEventListener("keydown", p, { capture: !0 }), c(() => {
        document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", f, {
          capture: !0
        }), document.removeEventListener("pointermove", f, {
          capture: !0
        });
      });
    }), Jl({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), yd({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: r,
      modal: l
    }), (c, p) => (b(), x(o(At), null, {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), gd = "rovingFocusGroup.onEntryFocus", bd = { bubbles: !1, cancelable: !0 }, en = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Cd(a, t) {
  return t !== "rtl" ? a : a === "ArrowLeft" ? "ArrowRight" : a === "ArrowRight" ? "ArrowLeft" : a;
}
function Ql(a, t, e) {
  const n = Cd(a.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return en[n];
}
function es(a, t = !1) {
  const e = document.activeElement;
  for (const n of a)
    if (n === e || (n.focus({ preventScroll: t }), document.activeElement !== e))
      return;
}
function wd(a, t) {
  return a.map((e, n) => a[(t + n) % a.length]);
}
const [_d, xd] = Q("RovingFocusGroup"), Mt = /* @__PURE__ */ w({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !1 },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    preventScrollOnEntryFocus: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(a, { expose: t, emit: e }) {
    const n = a, l = e, { loop: s, orientation: r, dir: i } = ne(n), u = be(i), d = ae(n, "currentTabStopId", l, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = T(!1), p = T(!1), f = T(0), { getItems: v } = Xt();
    function g(m) {
      const S = !p.value;
      if (m.currentTarget && m.target === m.currentTarget && S && !c.value) {
        const _ = new CustomEvent(gd, bd);
        if (m.currentTarget.dispatchEvent(_), l("entryFocus", _), !_.defaultPrevented) {
          const D = v().map(($) => $.ref).filter(($) => $.dataset.disabled !== ""), h = D.find(($) => $.getAttribute("data-active") === "true"), E = D.find(
            ($) => $.id === d.value
          ), P = [h, E, ...D].filter(
            Boolean
          );
          es(P, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    return t({
      getItems: v
    }), xd({
      loop: s,
      dir: u,
      orientation: r,
      currentTabStopId: d,
      onItemFocus: (m) => {
        d.value = m;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        f.value++;
      },
      onFocusableItemRemove: () => {
        f.value--;
      }
    }), (m, S) => (b(), x(o(Zt), null, {
      default: y(() => [
        q(o(O), {
          tabindex: c.value || f.value === 0 ? -1 : 0,
          "data-orientation": o(r),
          as: m.as,
          "as-child": m.asChild,
          dir: o(u),
          style: { outline: "none" },
          onMousedown: S[0] || (S[0] = (_) => p.value = !0),
          onFocus: g,
          onBlur: S[1] || (S[1] = (_) => c.value = !1)
        }, {
          default: y(() => [
            C(m.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Vt = /* @__PURE__ */ w({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: !0 },
    active: { type: Boolean, default: !0 },
    allowShiftKey: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = _d(), n = I(() => t.tabStopId || ve()), l = I(
      () => e.currentTabStopId.value === n.value
    ), { getItems: s } = Jt();
    oe(() => {
      t.focusable && e.onFocusableItemAdd();
    }), Te(() => {
      t.focusable && e.onFocusableItemRemove();
    });
    function r(i) {
      if (i.key === "Tab" && i.shiftKey) {
        e.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Ql(
        i,
        e.orientation.value,
        e.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let d = [...s().map((c) => c.ref).filter((c) => c.dataset.disabled !== "")];
        if (u === "last")
          d.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && d.reverse();
          const c = d.indexOf(
            i.currentTarget
          );
          d = e.loop.value ? wd(d, c + 1) : d.slice(c + 1);
        }
        se(() => es(d));
      }
    }
    return (i, u) => (b(), x(o(Rt), null, {
      default: y(() => [
        q(o(O), {
          tabindex: l.value ? 0 : -1,
          "data-orientation": o(e).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: u[0] || (u[0] = (d) => {
            i.focusable ? o(e).onItemFocus(n.value) : d.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (d) => o(e).onItemFocus(n.value)),
          onKeydown: r
        }, {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [ro, Sd] = Q("MenuContent"), io = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ vl({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Xl
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = kt(), s = Sa(), { trapFocus: r, disableOutsidePointerEvents: i, loop: u } = ne(e);
    Yn(), Ca(i.value);
    const d = T(""), c = T(0), p = T(0), f = T(null), v = T("right"), g = T(0), m = T(null), { createCollection: S } = Ve(), { forwardRef: _, currentElement: D } = R(), h = S(D);
    ee(D, (A) => {
      l.onContentChange(A);
    });
    const { handleTypeaheadSearch: E } = _a(h);
    Te(() => {
      window.clearTimeout(c.value);
    });
    function P(A) {
      var H, K;
      return v.value === ((H = f.value) == null ? void 0 : H.side) && yu(A, (K = f.value) == null ? void 0 : K.area);
    }
    async function $(A) {
      var L;
      n("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (L = D.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function B(A) {
      if (A.defaultPrevented)
        return;
      const H = A.target.closest("[data-radix-menu-content]") === A.currentTarget, K = A.ctrlKey || A.altKey || A.metaKey, X = A.key.length === 1, N = Bt(
        A,
        document.activeElement,
        D.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (N)
        return N == null ? void 0 : N.focus();
      if (A.code === "Space" || (H && (A.key === "Tab" && A.preventDefault(), !K && X && E(A.key)), A.target !== D.value) || !fu.includes(A.key))
        return;
      A.preventDefault();
      const F = h.value;
      Hl.includes(A.key) && F.reverse(), Bn(F);
    }
    function V(A) {
      var L, H;
      (H = (L = A == null ? void 0 : A.currentTarget) == null ? void 0 : L.contains) != null && H.call(L, A.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function k(A) {
      var K;
      if (!fa(A))
        return;
      const L = A.target, H = g.value !== A.clientX;
      if ((K = A == null ? void 0 : A.currentTarget) != null && K.contains(L) && H) {
        const X = A.clientX > g.value ? "right" : "left";
        v.value = X, g.value = A.clientX;
      }
    }
    return Sd({
      onItemEnter: (A) => !!P(A),
      onItemLeave: (A) => {
        var L;
        P(A) || ((L = D.value) == null || L.focus(), m.value = null);
      },
      onTriggerLeave: (A) => !!P(A),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A) => {
        f.value = A;
      }
    }), (A, L) => (b(), x(o(Za), {
      "as-child": "",
      trapped: o(r),
      onMountAutoFocus: $,
      onUnmountAutoFocus: L[7] || (L[7] = (H) => n("closeAutoFocus", H))
    }, {
      default: y(() => [
        q(o(gt), {
          "as-child": "",
          "disable-outside-pointer-events": o(i),
          onEscapeKeyDown: L[2] || (L[2] = (H) => n("escapeKeyDown", H)),
          onPointerDownOutside: L[3] || (L[3] = (H) => n("pointerDownOutside", H)),
          onFocusOutside: L[4] || (L[4] = (H) => n("focusOutside", H)),
          onInteractOutside: L[5] || (L[5] = (H) => n("interactOutside", H)),
          onDismiss: L[6] || (L[6] = (H) => n("dismiss"))
        }, {
          default: y(() => [
            q(o(Mt), {
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (H) => m.value = H),
              "as-child": "",
              orientation: "vertical",
              dir: o(s).dir.value,
              loop: o(u),
              onEntryFocus: L[1] || (L[1] = (H) => {
                n("entryFocus", H), o(s).isUsingKeyboardRef.value || H.preventDefault();
              })
            }, {
              default: y(() => [
                q(o(Dt), {
                  ref: o(_),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": o(ao)(o(l).open.value),
                  dir: o(s).dir.value,
                  side: A.side,
                  "side-offset": A.sideOffset,
                  align: A.align,
                  "align-offset": A.alignOffset,
                  "avoid-collisions": A.avoidCollisions,
                  "collision-boundary": A.collisionBoundary,
                  "collision-padding": A.collisionPadding,
                  "arrow-padding": A.arrowPadding,
                  "prioritize-position": A.prioritizePosition,
                  sticky: A.sticky,
                  "hide-when-detached": A.hideWhenDetached,
                  onKeydown: B,
                  onBlur: V,
                  onPointermove: k
                }, {
                  default: y(() => [
                    C(A.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "sticky", "hide-when-detached"])
              ]),
              _: 3
            }, 8, ["current-tab-stop-id", "dir", "loop"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), ts = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ro(), { forwardRef: n } = R(), l = T(!1);
    async function s(i) {
      if (!i.defaultPrevented && fa(i)) {
        if (t.disabled)
          e.onItemLeave(i);
        else if (!e.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await se(), !i.defaultPrevented && fa(i) && e.onItemLeave(i);
    }
    return (i, u) => (b(), x(o(Rt), null, {
      default: y(() => [
        q(o(O), M({
          ref: o(n),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": l.value ? "" : void 0,
          onPointermove: s,
          onPointerleave: r,
          onFocus: u[0] || (u[0] = async (d) => {
            await se(), !(d.defaultPrevented || i.disabled) && (l.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await se(), !d.defaultPrevented && (l.value = !1);
          })
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), Ea = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = Sa(), i = ro(), u = T(!1);
    async function d() {
      const c = s.value;
      if (!e.disabled && c) {
        const p = new CustomEvent(cu, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await se(), p.defaultPrevented ? u.value = !1 : r.onClose();
      }
    }
    return (c, p) => (b(), x(ts, M(e, {
      ref: o(l),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (f) => {
        var v;
        await se(), !f.defaultPrevented && (u.value || (v = f.currentTarget) == null || v.click());
      }),
      onKeydown: p[2] || (p[2] = async (f) => {
        const v = o(i).searchRef.value !== "";
        c.disabled || v && f.key === " " || o(In).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ed, as] = Q(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), uo = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = Ed({
      checked: T(!1)
    });
    return (e, n) => (b(), x(o(Pe), {
      present: e.forceMount || o(La)(o(t).checked.value) || o(t).checked.value === !0
    }, {
      default: y(() => [
        q(o(O), {
          as: e.as,
          "as-child": e.asChild,
          "data-state": o(no)(o(t).checked.value)
        }, {
          default: y(() => [
            C(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), co = /* @__PURE__ */ w({
  __name: "MenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String], default: !1 },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = ae(e, "checked", n);
    return as({ checked: l }), (s, r) => (b(), x(Ea, M({ role: "menuitemcheckbox" }, e, {
      "aria-checked": o(La)(o(l)) ? "mixed" : o(l),
      "data-state": o(no)(o(l)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), o(La)(o(l)) ? l.value = !0 : l.value = !o(l);
      })
    }), {
      default: y(() => [
        C(s.$slots, "default", { checked: o(l) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Pd = /* @__PURE__ */ w({
  __name: "MenuRootContentModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = xe(e, n), s = kt(), { forwardRef: r, currentElement: i } = R();
    return wa(i), (u, d) => (b(), x(io, M(o(l), {
      ref: o(r),
      "trap-focus": o(s).open.value,
      "disable-outside-pointer-events": o(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => o(s).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = ie((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Dd = /* @__PURE__ */ w({
  __name: "MenuRootContentNonModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t), s = kt();
    return (r, i) => (b(), x(io, M(o(l), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: i[0] || (i[0] = (u) => o(s).onOpenChange(!1))
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), po = /* @__PURE__ */ w({
  __name: "MenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t), s = kt(), r = Sa();
    return (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(s).open.value
    }, {
      default: y(() => [
        o(r).modal.value ? (b(), x(Pd, W(M({ key: 0 }, { ...i.$attrs, ...o(l) })), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), x(Dd, W(M({ key: 1 }, { ...i.$attrs, ...o(l) })), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), tn = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), M({ role: "group" }, t), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fo = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vo = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [$d, Id] = Q("MenuRadioGroup"), mo = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "modelValue", t);
    return Id({
      modelValue: l,
      onValueChange: (s) => {
        l.value = s;
      }
    }), (s, r) => (b(), x(tn, W(U(e)), {
      default: y(() => [
        C(s.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 16));
  }
}), ho = /* @__PURE__ */ w({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { value: l } = ne(e), s = $d(), r = I(
      () => s.modelValue.value === (l == null ? void 0 : l.value)
    );
    return as({ checked: r }), (i, u) => (b(), x(Ea, M({ role: "menuitemradio" }, e, {
      "aria-checked": r.value,
      "data-state": o(no)(r.value),
      onSelect: u[0] || (u[0] = async (d) => {
        n("select", d), o(s).onValueChange(o(l));
      })
    }), {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), yo = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), M(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ns, Bd] = Q("MenuSub"), go = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "open", t, {
      defaultValue: !1,
      passive: e.open === void 0
    }), s = kt(), r = T(), i = T();
    return ye((u) => {
      (s == null ? void 0 : s.open.value) === !1 && (l.value = !1), u(() => l.value = !1);
    }), Jl({
      open: l,
      onOpenChange: (u) => {
        l.value = u;
      },
      content: i,
      onContentChange: (u) => {
        i.value = u;
      }
    }), Bd({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (u) => {
        r.value = u;
      }
    }), (u, d) => (b(), x(o(At), null, {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), bo = /* @__PURE__ */ w({
  __name: "MenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t), s = kt(), r = Sa(), i = ns(), { forwardRef: u, currentElement: d } = R();
    return i.contentId || (i.contentId = ve(void 0, "radix-vue-menu-sub-content")), (c, p) => (b(), x(o(Pe), {
      present: c.forceMount || o(s).open.value
    }, {
      default: y(() => [
        q(io, M(o(l), {
          id: o(i).contentId,
          ref: o(u),
          "aria-labelledby": o(i).triggerId,
          align: "start",
          side: o(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: p[0] || (p[0] = ie((f) => {
            var v;
            o(r).isUsingKeyboardRef.value && ((v = o(d)) == null || v.focus());
          }, ["prevent"])),
          onCloseAutoFocus: p[1] || (p[1] = ie(() => {
          }, ["prevent"])),
          onFocusOutside: p[2] || (p[2] = (f) => {
            f.defaultPrevented || f.target !== o(i).trigger.value && o(s).onOpenChange(!1);
          }),
          onEscapeKeyDown: p[3] || (p[3] = (f) => {
            o(r).onClose(), f.preventDefault();
          }),
          onKeydown: p[4] || (p[4] = (f) => {
            var m, S;
            const v = (m = f.currentTarget) == null ? void 0 : m.contains(f.target), g = o(mu)[o(r).dir.value].includes(f.key);
            v && g && (o(s).onOpenChange(!1), (S = o(i).trigger.value) == null || S.focus(), f.preventDefault());
          })
        }), {
          default: y(() => [
            C(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Co = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = kt(), n = Sa(), l = ns(), s = ro(), r = T(null);
    l.triggerId || (l.triggerId = ve(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    Te(() => {
      i();
    });
    function u(p) {
      !fa(p) || s.onItemEnter(p) || !t.disabled && !e.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        e.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var v, g;
      if (!fa(p))
        return;
      i();
      const f = (v = e.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (f != null && f.width) {
        const m = (g = e.content.value) == null ? void 0 : g.dataset.side, S = m === "right", _ = S ? -5 : 5, D = f[S ? "left" : "right"], h = f[S ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + _, y: p.clientY },
            { x: D, y: f.top },
            { x: h, y: f.top },
            { x: h, y: f.bottom },
            { x: D, y: f.bottom }
          ],
          side: m
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(p))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function c(p) {
      var v;
      const f = s.searchRef.value !== "";
      t.disabled || f && p.key === " " || vu[n.dir.value].includes(p.key) && (e.onOpenChange(!0), await se(), (v = e.content.value) == null || v.focus(), p.preventDefault());
    }
    return (p, f) => (b(), x(Qa, { "as-child": "" }, {
      default: y(() => [
        q(ts, M(t, {
          id: o(l).triggerId,
          ref: (v) => {
            var g;
            (g = o(l)) == null || g.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": o(e).open.value,
          "aria-controls": o(l).contentId,
          "data-state": o(ao)(o(e).open.value),
          onClick: f[0] || (f[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), o(e).open.value || o(e).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: y(() => [
            C(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [os, Td] = Q("ContextMenuRoot"), sm = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ContextMenuRoot",
  props: {
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { dir: l, modal: s } = ne(e);
    R();
    const r = be(l), i = T(!1);
    return Td({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      dir: r,
      modal: s
    }), ee(i, (u) => {
      n("update:open", u);
    }), (u, d) => (b(), x(o(so), {
      open: i.value,
      "onUpdate:open": d[0] || (d[0] = (c) => i.value = c),
      dir: o(r),
      modal: o(s)
    }, {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
function Yo(a) {
  return a.pointerType !== "mouse";
}
const rm = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, { disabled: e } = ne(t), { forwardRef: n } = R(), l = os(), s = T({ x: 0, y: 0 }), r = I(() => ({
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        left: s.value.x,
        right: s.value.x,
        top: s.value.y,
        bottom: s.value.y,
        ...s.value
      })
    })), i = T(0);
    function u() {
      window.clearTimeout(i.value);
    }
    function d(v) {
      s.value = { x: v.clientX, y: v.clientY }, l.onOpenChange(!0);
    }
    async function c(v) {
      e.value || (await se(), v.defaultPrevented || (u(), d(v), v.preventDefault()));
    }
    async function p(v) {
      e.value || (await se(), Yo(v) && !v.defaultPrevented && (u(), i.value = window.setTimeout(() => d(v), 700)));
    }
    async function f(v) {
      e.value || (await se(), Yo(v) && !v.defaultPrevented && u());
    }
    return (v, g) => (b(), ce(_e, null, [
      q(o(Qa), {
        as: "template",
        element: r.value
      }, null, 8, ["element"]),
      q(o(O), M({
        ref: o(n),
        as: v.as,
        "as-child": v.asChild,
        "data-state": o(l).open.value ? "open" : "closed",
        "data-disabled": o(e) ? "" : void 0,
        style: {
          WebkitTouchCallout: "none"
        }
      }, v.$attrs, {
        onContextmenu: c,
        onPointerdown: p,
        onPointermove: f,
        onPointercancel: f,
        onPointerup: f
      }), {
        default: y(() => [
          C(v.$slots, "default")
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-state", "data-disabled"])
    ], 64));
  }
}), im = /* @__PURE__ */ w({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(vo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), um = /* @__PURE__ */ w({
  __name: "ContextMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: !1 },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    R();
    const s = os(), r = T(!1);
    return (i, u) => (b(), x(o(po), M(o(l), {
      side: "right",
      "side-offset": 2,
      align: "start",
      style: {
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        !d.defaultPrevented && r.value && d.preventDefault(), r.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        !d.defaultPrevented && !o(s).modal.value && (r.value = !0);
      })
    }), {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dm = /* @__PURE__ */ w({
  __name: "ContextMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(lo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cm = /* @__PURE__ */ w({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    return R(), (s, r) => (b(), x(o(Ea), W(U({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ w({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(tn), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fm = /* @__PURE__ */ w({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(yo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vm = /* @__PURE__ */ w({
  __name: "ContextMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    return R(), (s, r) => (b(), x(o(co), W(U({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mm = /* @__PURE__ */ w({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(uo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hm = /* @__PURE__ */ w({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(fo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ym = /* @__PURE__ */ w({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    return R(), (s, r) => (b(), x(o(mo), W(U({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gm = /* @__PURE__ */ w({
  __name: "ContextMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    return R(), (s, r) => (b(), x(o(ho), W(U({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bm = /* @__PURE__ */ w({
  __name: "ContextMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    R();
    const l = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (s, r) => (b(), x(o(go), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Ue(l) ? l.value = i : null)
    }, {
      default: y(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Cm = /* @__PURE__ */ w({
  __name: "ContextMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return R(), (s, r) => (b(), x(o(bo), M(o(l), { style: {
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wm = /* @__PURE__ */ w({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(Co), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rd = ["hour", "minute", "second"];
function zt(a) {
  const { formatter: t } = a, e = Wn.map((n) => [n, a.value[n]]);
  if ("hour" in a.value) {
    const n = Cl.map((s) => s === "dayPeriod" ? [s, t.dayPeriod(Ne(a.value))] : [s, a.value[s]]), l = [...e, ...n];
    return Object.fromEntries(l);
  }
  return Object.fromEntries(e);
}
function ls(a) {
  const t = wl.map((e) => e === "dayPeriod" ? [e, "AM"] : [e, null]).filter(([e]) => e === "literal" || e === null ? !1 : a === "day" ? !Rd.includes(e) : !0);
  return Object.fromEntries(t);
}
function Ad(a) {
  const { segmentValues: t, formatter: e, locale: n } = a;
  function l(r) {
    if ("hour" in t) {
      const i = t[r];
      return i !== null ? r === "day" && t.month !== null ? e.part(a.dateRef.set({ [r]: i, month: t.month }), r, {
        hourCycle: a.hourCycle === 24 ? "h24" : void 0
      }) : e.part(a.dateRef.set({ [r]: i }), r, {
        hourCycle: a.hourCycle === 24 ? "h24" : void 0
      }) : bn(r, "", n.value);
    } else {
      if (Gr(r)) {
        const i = t[r];
        return i !== null ? r === "day" && t.month !== null ? e.part(a.dateRef.set({ [r]: i, month: t.month }), r) : e.part(a.dateRef.set({ [r]: i }), r) : bn(r, "", n.value);
      }
      return "";
    }
  }
  return Object.keys(t).reduce((r, i) => {
    if (!_l(i))
      return r;
    if ("hour" in t && i === "dayPeriod") {
      const u = t[i];
      u !== null ? r[i] = u : r[i] = bn(i, "AM", n.value);
    } else
      r[i] = l(i);
    return r;
  }, {});
}
function Od(a) {
  const { granularity: t, formatter: e, contentObj: n, hideTimeZone: l, hourCycle: s } = a;
  return e.toParts(a.dateRef, qr(t, s)).map((u) => ["literal", "timeZoneName", null].includes(u.type) || !_l(u.type) ? {
    part: u.type,
    value: u.value
  } : {
    part: u.type,
    value: n[u.type]
  }).filter((u) => !(u.part === null || u.value === null || u.part === "timeZoneName" && (!gl(a.dateRef) || l)));
}
function Rn(a) {
  const t = Ad(a), e = Od({
    contentObj: t,
    ...a
  });
  return {
    obj: t,
    arr: e
  };
}
function Ye(a) {
  const t = et();
  return a === t.ARROW_RIGHT || a === t.ARROW_LEFT;
}
function xt(a) {
  return !Number.isNaN(Number.parseInt(a));
}
function st(a) {
  const t = et();
  return !!([
    t.ENTER,
    t.ARROW_UP,
    t.ARROW_DOWN,
    t.ARROW_LEFT,
    t.ARROW_RIGHT,
    t.BACKSPACE,
    t.SPACE,
    "a",
    "A",
    "p",
    "P"
  ].includes(a) || xt(a));
}
function za(a) {
  return Array.from(a.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((t) => t.getAttribute("data-radix-vue-date-field-segment") !== "literal");
}
const kd = ["id", "value", "name", "disabled", "required"], [Md, Vd] = Q("DateFieldRoot"), Fd = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DateFieldRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a, { expose: t, emit: e }) {
    const n = a, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, granularity: d, defaultValue: c, dir: p } = ne(n), f = qn(n.locale), v = be(p), { primitiveElement: g, currentElement: m } = Oe(), S = T(/* @__PURE__ */ new Set());
    oe(() => {
      za(m.value).forEach((z) => S.value.add(z));
    });
    const _ = ae(n, "modelValue", l, {
      defaultValue: c.value,
      passive: n.modelValue === void 0
    }), D = Yt({
      defaultPlaceholder: n.placeholder,
      granularity: d.value,
      defaultValue: _.value
    }), h = ae(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? D.copy(),
      passive: n.placeholder === void 0
    }), E = I(() => n.granularity ? ca(h.value) ? n.granularity : "day" : ca(h.value) ? "minute" : "day"), P = I(() => {
      var z;
      return _.value ? !!((z = u.value) != null && z.call(u, _.value) || n.minValue && Me(_.value, n.minValue) || n.maxValue && Me(n.maxValue, _.value)) : !1;
    }), $ = ls(E.value), B = T(_.value ? { ...zt({ value: _.value, formatter: f }) } : { ...$ }), V = I(() => Rn({
      granularity: E.value,
      dateRef: h.value,
      formatter: f,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: B.value,
      locale: s
    })), k = I(() => V.value.arr), A = I(() => k.value.filter(({ part: z }) => z !== "literal"));
    ee(s, (z) => {
      f.getLocale() !== z && (f.setLocale(z), se(() => {
        S.value.clear(), za(m.value).forEach((Z) => S.value.add(Z));
      }));
    }), ee(_, (z) => {
      z !== void 0 && (!Ee(h.value, z) || h.value.compare(z) !== 0) && (h.value = z.copy());
    }), ee([_, s], ([z]) => {
      z !== void 0 ? B.value = { ...zt({ value: z, formatter: f }) } : B.value = { ...$ };
    });
    const L = T(null), H = I(() => Array.from(S.value).findIndex((z) => {
      var Z;
      return z.getAttribute("data-radix-vue-date-field-segment") === ((Z = L.value) == null ? void 0 : Z.getAttribute("data-radix-vue-date-field-segment"));
    })), K = I(() => {
      const z = v.value === "rtl" ? -1 : 1;
      return (z < 0 ? H.value < 0 : H.value > S.value.size - 1) ? null : Array.from(S.value)[H.value + z];
    }), X = I(() => {
      const z = v.value === "rtl" ? -1 : 1;
      return (z > 0 ? H.value < 0 : H.value > S.value.size - 1) ? null : Array.from(S.value)[H.value - z];
    }), N = et();
    function F(z) {
      var Z, G;
      Ye(z.key) && (z.key === N.ARROW_LEFT && ((Z = X.value) == null || Z.focus()), z.key === N.ARROW_RIGHT && ((G = K.value) == null || G.focus()));
    }
    function j(z) {
      L.value = z;
    }
    return Vd({
      isDateUnavailable: u.value,
      locale: s,
      modelValue: _,
      placeholder: h,
      disabled: r,
      formatter: f,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: B,
      isInvalid: P,
      segmentContents: A,
      elements: S,
      setFocusedElement: j,
      focusNext() {
        var z;
        (z = K.value) == null || z.focus();
      }
    }), t({
      /** Helper to set the focused element inside the DateField */
      setFocusedElement: j
    }), (z, Z) => (b(), ce(_e, null, [
      q(o(O), M(z.$attrs, {
        ref_key: "primitiveElement",
        ref: g,
        role: "group",
        "aria-disabled": o(r) ? !0 : void 0,
        "data-disabled": o(r) ? "" : void 0,
        "data-readonly": o(i) ? "" : void 0,
        "data-invalid": P.value ? "" : void 0,
        dir: o(v),
        onKeydown: re(F, ["left", "right"])
      }), {
        default: y(() => [
          C(z.$slots, "default", {
            modelValue: o(_),
            segments: k.value,
            isInvalid: P.value
          })
        ]),
        _: 3
      }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
      Ge("input", {
        id: z.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o(_) ? o(_).toString() : "",
        name: z.name,
        disabled: o(r),
        required: z.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        },
        onFocus: Z[0] || (Z[0] = (G) => {
          var J, te;
          return (te = (J = Array.from(S.value)) == null ? void 0 : J[0]) == null ? void 0 : te.focus();
        })
      }, null, 40, kd)
    ], 64));
  }
});
function Ft(a) {
  return {
    role: "spinbutton",
    contenteditable: !0,
    tabindex: a.disabled ? void 0 : 0,
    spellcheck: !1,
    inputmode: "numeric",
    autocorrect: "off",
    enterkeyhint: "next",
    style: "caret-color: transparent;"
  };
}
function Ld(a) {
  const { segmentValues: t, placeholder: e } = a, n = t.day === null, l = t.day ? e.set({ day: t.day }) : e, s = l.day, r = 1, i = Pt(l), u = n ? "Empty" : `${s}`;
  return {
    ...Ft(a),
    "aria-label": "day,",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Nd(a) {
  const { segmentValues: t, placeholder: e, formatter: n } = a, l = t.month === null, s = t.month ? e.set({ month: t.month }) : e, r = s.month, i = 1, u = 12, d = l ? "Empty" : `${r} - ${n.fullMonth(Ne(s))}`;
  return {
    ...Ft(a),
    "aria-label": "month, ",
    contenteditable: !0,
    "aria-valuemin": i,
    "aria-valuemax": u,
    "aria-valuenow": r,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function zd(a) {
  const { segmentValues: t, placeholder: e } = a, n = t.year === null, l = t.year ? e.set({ year: t.year }) : e, s = 1, r = 9999, i = l.year, u = n ? "Empty" : `${i}`;
  return {
    ...Ft(a),
    "aria-label": "year, ",
    "aria-valuemin": s,
    "aria-valuemax": r,
    "aria-valuenow": i,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Kd(a) {
  const { segmentValues: t, hourCycle: e, placeholder: n } = a;
  if (!("hour" in t) || !("hour" in n))
    return {};
  const l = t.hour === null, s = t.hour ? n.set({ hour: t.hour }) : n, r = e === 12 ? 1 : 0, i = e === 12 ? 12 : 23, u = s.hour, d = l ? "Empty" : `${u} ${t.dayPeriod ?? ""}`;
  return {
    ...Ft(a),
    "aria-label": "hour, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": u,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function Hd(a) {
  const { segmentValues: t, placeholder: e } = a;
  if (!("minute" in t) || !("minute" in e))
    return {};
  const n = t.minute === null, s = (t.minute ? e.set({ minute: t.minute }) : e).minute, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Ft(a),
    "aria-label": "minute, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Wd(a) {
  const { segmentValues: t, placeholder: e } = a;
  if (!("second" in t) || !("second" in e))
    return {};
  const n = t.second === null, s = (t.second ? e.set({ second: t.second }) : e).second, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Ft(a),
    "aria-label": "second, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function jd(a) {
  const { segmentValues: t } = a;
  if (!("dayPeriod" in t))
    return {};
  const e = 0, n = 12, l = t.hour ? t.hour > 12 ? t.hour - 12 : t.hour : 0, s = t.dayPeriod ?? "AM";
  return {
    ...Ft(a),
    inputmode: "text",
    "aria-label": "AM/PM",
    "aria-valuemin": e,
    "aria-valuemax": n,
    "aria-valuenow": l,
    "aria-valuetext": s
  };
}
function Ud(a) {
  return {
    "aria-hidden": !0,
    "data-segment": "literal"
  };
}
function Gd(a) {
  return {
    role: "textbox",
    "aria-label": "timezone, ",
    "data-readonly": !0,
    "data-segment": "timeZoneName",
    tabindex: a.disabled ? void 0 : 0,
    style: "caret-color: transparent;"
  };
}
const qd = {
  day: {
    attrs: Ld
  },
  month: {
    attrs: Nd
  },
  year: {
    attrs: zd
  },
  hour: {
    attrs: Kd
  },
  minute: {
    attrs: Hd
  },
  second: {
    attrs: Wd
  },
  dayPeriod: {
    attrs: jd
  },
  literal: {
    attrs: Ud
  },
  timeZoneName: {
    attrs: Gd
  }
};
function ss(a) {
  const t = et();
  function e({ e: h, part: E, dateRef: P, prevValue: $ }) {
    const B = h.key === t.ARROW_UP ? 1 : -1, V = 0, k = 59;
    if ($ === null)
      return B > 0 ? V : k;
    const A = [E, B];
    return P.set({ [E]: $ }).cycle(...A)[E];
  }
  function n(h) {
    if (a.hasLeftFocus.value = !1, h === null)
      return h;
    const E = h.toString();
    return E.length === 1 ? null : Number.parseInt(E.slice(0, -1));
  }
  function l({ e: h, part: E, dateRef: P, prevValue: $, hourCycle: B }) {
    const V = h.key === t.ARROW_UP ? 1 : -1;
    if ($ === null)
      return P[E];
    if (E === "hour" && "hour" in P) {
      const A = [E, V, { hourCycle: B }];
      return P.set({ [E]: $ }).cycle(...A)[E];
    }
    const k = [E, V];
    return E === "day" && a.segmentValues.value.month !== null ? P.set({ [E]: $, month: a.segmentValues.value.month }).cycle(...k)[E] : P.set({ [E]: $ }).cycle(...k)[E];
  }
  function s(h, E, P) {
    let $ = !1;
    const B = Math.floor(h / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, P = null), P === null)
      return E === 0 ? (a.lastKeyZero.value = !0, { value: null, moveToNext: $ }) : ((a.lastKeyZero.value || E > B) && ($ = !0), a.lastKeyZero.value = !1, { value: E, moveToNext: $ });
    const V = P.toString().length, k = Number.parseInt(P.toString() + E.toString());
    return V === 2 || k > h ? ((E > B || k > h) && ($ = !0), { value: E, moveToNext: $ }) : ($ = !0, { value: k, moveToNext: $ });
  }
  function r(h, E) {
    let $ = !1;
    const B = Math.floor(59 / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return h === 0 ? (a.lastKeyZero.value = !0, { value: 0, moveToNext: $ }) : ((a.lastKeyZero.value || h > B) && ($ = !0), a.lastKeyZero.value = !1, { value: h, moveToNext: $ });
    const V = E.toString().length, k = Number.parseInt(E.toString() + h.toString());
    return V === 2 || k > 59 ? (h > B && ($ = !0), { value: h, moveToNext: $ }) : ($ = !0, { value: k, moveToNext: $ });
  }
  function i(h, E) {
    let $ = !1;
    const B = Math.floor(24 / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return h === 0 ? (a.lastKeyZero.value = !0, { value: 0, moveToNext: $ }) : ((a.lastKeyZero.value || h > B) && ($ = !0), a.lastKeyZero.value = !1, { value: h, moveToNext: $ });
    const V = E.toString().length, k = Number.parseInt(E.toString() + h.toString());
    return V === 2 || k > 24 ? (h > B && ($ = !0), { value: h, moveToNext: $ }) : ($ = !0, { value: k, moveToNext: $ });
  }
  function u(h, E) {
    let P = !1;
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return { value: h === 0 ? 1 : h, moveToNext: P };
    const $ = E.toString() + h.toString();
    return $.length > 4 ? { value: h === 0 ? 1 : h, moveToNext: P } : ($.length === 4 && (P = !0), { value: Number.parseInt($), moveToNext: P });
  }
  const d = I(() => qd[a.part].attrs({
    disabled: a.disabled.value,
    placeholder: a.placeholder.value,
    hourCycle: a.hourCycle,
    segmentValues: a.segmentValues.value,
    formatter: a.formatter
  }));
  function c(h) {
    if (!st(h.key) || Ye(h.key))
      return;
    const E = a.segmentValues.value.day;
    if (h.key === t.ARROW_DOWN || h.key === t.ARROW_UP) {
      a.segmentValues.value.day = l({ e: h, part: "day", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (xt(h.key)) {
      const P = Number.parseInt(h.key), $ = a.segmentValues.value.month, B = $ ? Pt(a.placeholder.value.set({ month: $ })) : Pt(a.placeholder.value), { value: V, moveToNext: k } = s(B, P, E);
      a.segmentValues.value.day = V, k && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.day = n(E));
  }
  function p(h) {
    if (!st(h.key) || Ye(h.key))
      return;
    const E = a.segmentValues.value.month;
    if (h.key === t.ARROW_DOWN || h.key === t.ARROW_UP) {
      a.segmentValues.value.month = l({ e: h, part: "month", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (xt(h.key)) {
      const P = Number.parseInt(h.key), { value: $, moveToNext: B } = s(12, P, E);
      a.segmentValues.value.month = $, B && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.month = n(E));
  }
  function f(h) {
    if (!st(h.key) || Ye(h.key))
      return;
    const E = a.segmentValues.value.year;
    if (h.key === t.ARROW_DOWN || h.key === t.ARROW_UP) {
      a.segmentValues.value.year = l({ e: h, part: "year", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (xt(h.key)) {
      const P = Number.parseInt(h.key), { value: $, moveToNext: B } = u(P, E);
      a.segmentValues.value.year = $, B && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.year = n(E));
  }
  function v(h) {
    const E = a.placeholder.value;
    if (!st(h.key) || Ye(h.key) || !("hour" in E) || !("hour" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.hour, $ = a.hourCycle;
    if (h.key === t.ARROW_UP || h.key === t.ARROW_DOWN) {
      a.segmentValues.value.hour = l({ e: h, part: "hour", dateRef: a.placeholder.value, prevValue: P, hourCycle: $ }), "dayPeriod" in a.segmentValues.value && (a.segmentValues.value.hour < 12 ? a.segmentValues.value.dayPeriod = "AM" : a.segmentValues.value.hour && (a.segmentValues.value.dayPeriod = "PM"));
      return;
    }
    if (xt(h.key)) {
      const B = Number.parseInt(h.key), { value: V, moveToNext: k } = i(B, P);
      "dayPeriod" in a.segmentValues.value && V && V > 12 ? a.segmentValues.value.dayPeriod = "PM" : "dayPeriod" in a.segmentValues.value && V && (a.segmentValues.value.dayPeriod = "AM"), a.segmentValues.value.hour = V, k && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.hour = n(P));
  }
  function g(h) {
    const E = a.placeholder.value;
    if (!st(h.key) || Ye(h.key) || !("minute" in E) || !("minute" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.minute;
    if (a.segmentValues.value.minute = e({ e: h, part: "minute", dateRef: a.placeholder.value, prevValue: P }), xt(h.key)) {
      const $ = Number.parseInt(h.key), { value: B, moveToNext: V } = r($, P);
      a.segmentValues.value.minute = B, V && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.minute = n(P));
  }
  function m(h) {
    const E = a.placeholder.value;
    if (!st(h.key) || Ye(h.key) || !("second" in E) || !("second" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.second;
    if (a.segmentValues.value.second = e({ e: h, part: "second", dateRef: a.placeholder.value, prevValue: P }), xt(h.key)) {
      const $ = Number.parseInt(h.key), { value: B, moveToNext: V } = r($, P);
      a.segmentValues.value.second = B, V && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.second = n(P));
  }
  function S(h) {
    if (!((!st(h.key) || Ye(h.key)) && h.key !== "a" && h.key !== "p" || !("hour" in a.placeholder.value) || !("dayPeriod" in a.segmentValues.value))) {
      if (h.key === t.ARROW_UP || h.key === t.ARROW_DOWN) {
        if (a.segmentValues.value.dayPeriod === "AM") {
          a.segmentValues.value.dayPeriod = "PM", a.segmentValues.value.hour = a.segmentValues.value.hour + 12;
          return;
        }
        a.segmentValues.value.dayPeriod = "AM", a.segmentValues.value.hour = a.segmentValues.value.hour - 12;
        return;
      }
      if (["a", "A"].includes(h.key) && a.segmentValues.value.dayPeriod !== "AM") {
        a.segmentValues.value.dayPeriod = "AM", a.segmentValues.value.hour = a.segmentValues.value.hour - 12;
        return;
      }
      ["p", "P"].includes(h.key) && a.segmentValues.value.dayPeriod !== "PM" && (a.segmentValues.value.dayPeriod = "PM", a.segmentValues.value.hour = a.segmentValues.value.hour + 12);
    }
  }
  function _(h) {
    a.disabled.value && h.preventDefault();
  }
  function D(h) {
    const E = a.disabled.value, P = a.readonly.value;
    if (h.key !== t.TAB && h.preventDefault(), E || P)
      return;
    if ({
      day: c,
      month: p,
      year: f,
      hour: v,
      minute: g,
      second: m,
      dayPeriod: S,
      timeZoneName: () => {
      }
    }[a.part](h), !Ye(h.key) && h.key !== t.TAB && h.key !== t.SHIFT && st(h.key) && Object.values(a.segmentValues.value).every((B) => B !== null)) {
      const B = { ...a.segmentValues.value };
      let V = a.placeholder.value.copy();
      Object.keys(B).forEach((k) => {
        const A = B[k];
        V = V.set({ [k]: A });
      }), a.modelValue.value = V.copy();
    }
  }
  return {
    handleSegmentClick: _,
    handleSegmentKeydown: D,
    attributes: d
  };
}
const Yd = /* @__PURE__ */ w({
  __name: "DateFieldInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Md(), n = T(!0), l = T(!1), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = ss({
      hasLeftFocus: n,
      lastKeyZero: l,
      placeholder: e.placeholder,
      hourCycle: e.hourCycle,
      segmentValues: e.segmentValues,
      formatter: e.formatter,
      part: t.part,
      disabled: e.disabled,
      readonly: e.readonly,
      focusNext: e.focusNext,
      modelValue: e.modelValue
    }), u = I(() => e.disabled.value), d = I(() => e.readonly.value), c = I(() => e.isInvalid.value);
    return (p, f) => (b(), x(o(O), M({
      as: p.as,
      "as-child": p.asChild
    }, o(i), {
      contenteditable: u.value || d.value ? !1 : p.part !== "literal",
      "data-radix-vue-date-field-segment": p.part,
      "aria-disabled": u.value ? !0 : void 0,
      "aria-readonly": d.value ? !0 : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-invalid": c.value ? "" : void 0,
      "aria-invalid": c.value ? !0 : void 0
    }, Kn(p.part !== "literal" ? {
      mousedown: o(s),
      keydown: o(r),
      focusout: () => {
        n.value = !0;
      },
      focusin: (v) => {
        o(e).setFocusedElement(v.target);
      }
    } : {})), {
      default: y(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-invalid", "aria-invalid"]));
  }
}), _m = /* @__PURE__ */ w({
  __name: "DatePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(zu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xm = /* @__PURE__ */ w({
  __name: "DatePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Ku), W(U(t)), {
      default: y(({ headingValue: l }) => [
        C(e.$slots, "default", { headingValue: l }, () => [
          me(De(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), Sm = /* @__PURE__ */ w({
  __name: "DatePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Hu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Em = /* @__PURE__ */ w({
  __name: "DatePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Wu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pm = /* @__PURE__ */ w({
  __name: "DatePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(ju), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dm = /* @__PURE__ */ w({
  __name: "DatePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Uu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $m = /* @__PURE__ */ w({
  __name: "DatePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Gu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Im = /* @__PURE__ */ w({
  __name: "DatePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(qu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bm = /* @__PURE__ */ w({
  __name: "DatePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Yu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tm = /* @__PURE__ */ w({
  __name: "DatePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Xu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rm = /* @__PURE__ */ w({
  __name: "DatePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Zu), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Am = /* @__PURE__ */ w({
  __name: "DatePickerInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Yd), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [wo, Xd] = Q("DatePickerRoot"), Om = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DatePickerRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 },
    isDateDisabled: { type: Function, default: void 0 },
    pagedNavigation: { type: Boolean, default: !1 },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    fixedWeeks: { type: Boolean, default: !1 },
    numberOfMonths: { default: 1 },
    preventDeselect: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:placeholder", "update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateDisabled: v,
      isDateUnavailable: g,
      defaultOpen: m,
      modal: S,
      id: _,
      name: D,
      required: h,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: B,
      hourCycle: V,
      defaultValue: k,
      dir: A
    } = ne(e), L = be(A), H = ae(e, "modelValue", n, {
      defaultValue: k.value,
      passive: e.modelValue === void 0
    }), K = I(() => Yt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: H.value
    })), X = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? K.value.copy(),
      passive: e.placeholder === void 0
    }), N = ae(e, "open", n, {
      defaultValue: m.value,
      passive: e.open === void 0
    }), F = T();
    return Xd({
      isDateUnavailable: g.value,
      isDateDisabled: v.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: r,
      preventDeselect: f,
      modelValue: H,
      placeholder: X,
      defaultOpen: m,
      modal: S,
      open: N,
      id: _,
      name: D,
      required: h,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: B,
      hourCycle: V,
      dateFieldRef: F,
      dir: L,
      onDateChange(j) {
        !j || !H.value ? H.value = j : !f.value && Re(H.value, j) ? H.value = void 0 : H.value = j.copy();
      },
      onPlaceholderChange(j) {
        Ee(j, X.value) || (X.value = j.copy());
      }
    }), (j, z) => (b(), x(o(ms), {
      open: o(N),
      "onUpdate:open": z[0] || (z[0] = (Z) => Ue(N) ? N.value = Z : null),
      "default-open": o(m),
      modal: o(S)
    }, {
      default: y(() => [
        C(j.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
}), km = /* @__PURE__ */ w({
  __name: "DatePickerCalendar",
  setup(a) {
    const t = wo();
    return (e, n) => (b(), x(o(Nu), M({
      isDateDisabled: o(t).isDateDisabled,
      isDateUnavailable: o(t).isDateUnavailable,
      minValue: o(t).minValue.value,
      maxValue: o(t).maxValue.value,
      locale: o(t).locale.value,
      disabled: o(t).disabled.value,
      pagedNavigation: o(t).pagedNavigation.value,
      weekStartsOn: o(t).weekStartsOn.value,
      weekdayFormat: o(t).weekdayFormat.value,
      fixedWeeks: o(t).fixedWeeks.value,
      numberOfMonths: o(t).numberOfMonths.value,
      readonly: o(t).readonly.value,
      preventDeselect: o(t).preventDeselect.value,
      dir: o(t).dir.value
    }, {
      "model-value": o(t).modelValue.value,
      placeholder: o(t).placeholder.value,
      "initial-focus": "",
      multiple: !1,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l && o(t).modelValue.value && o(Ee)(l, o(t).modelValue.value) || o(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        o(Ee)(l, o(t).placeholder.value) || o(t).onPlaceholderChange(l);
      })
    }), {
      default: y(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
        C(e.$slots, "default", {
          date: r,
          grid: s,
          weekDays: l,
          weekStartsOn: i,
          locale: u,
          fixedWeeks: d
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), Mm = /* @__PURE__ */ w({
  __name: "DatePickerField",
  setup(a) {
    const t = wo();
    return (e, n) => (b(), x(o(Fd), M({
      ref: o(t).dateFieldRef,
      "model-value": o(t).modelValue.value,
      placeholder: o(t).placeholder.value
    }, {
      id: o(t).id.value,
      name: o(t).name.value,
      disabled: o(t).disabled.value,
      minValue: o(t).minValue.value,
      maxValue: o(t).maxValue.value,
      readonly: o(t).readonly.value,
      hourCycle: o(t).hourCycle.value,
      granularity: o(t).granularity.value,
      hideTimeZone: o(t).hideTimeZone.value,
      locale: o(t).locale.value,
      isDateUnavailable: o(t).isDateUnavailable,
      required: o(t).required.value,
      dir: o(t).dir.value
    }, {
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l && o(t).modelValue.value && o(Ee)(o(t).modelValue.value, l) && l.compare(o(t).modelValue.value) === 0 || o(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        o(Ee)(o(t).placeholder.value, l) && l.compare(o(t).placeholder.value) === 0 || o(t).onPlaceholderChange(l);
      })
    }), {
      default: y(({ segments: l, modelValue: s }) => [
        C(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), Vm = /* @__PURE__ */ w({
  __name: "DatePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(_s), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fm = /* @__PURE__ */ w({
  __name: "DatePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Cs), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lm = /* @__PURE__ */ w({
  __name: "DatePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(ws), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nm = /* @__PURE__ */ w({
  __name: "DatePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = wo();
    return (n, l) => (b(), x(o(hs), M({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      disabled: o(e).disabled.value,
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = o(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["disabled"]));
  }
}), zm = /* @__PURE__ */ w({
  __name: "DatePickerContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return (s, r) => (b(), x(o(ys), null, {
      default: y(() => [
        q(o(bs), W(U({ ...o(l), ...s.$attrs })), {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Km = /* @__PURE__ */ w({
  __name: "DateRangePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(up), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hm = /* @__PURE__ */ w({
  __name: "DateRangePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(dp), W(U(t)), {
      default: y(({ headingValue: l }) => [
        C(e.$slots, "default", { headingValue: l }, () => [
          me(De(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), Wm = /* @__PURE__ */ w({
  __name: "DateRangePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(cp), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jm = /* @__PURE__ */ w({
  __name: "DateRangePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(pp), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Um = /* @__PURE__ */ w({
  __name: "DateRangePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(fp), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gm = /* @__PURE__ */ w({
  __name: "DateRangePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(vp), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qm = /* @__PURE__ */ w({
  __name: "DateRangePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(mp), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ym = /* @__PURE__ */ w({
  __name: "DateRangePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(hp), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xm = /* @__PURE__ */ w({
  __name: "DateRangePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yp), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zm = /* @__PURE__ */ w({
  __name: "DateRangePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(gp), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jm = /* @__PURE__ */ w({
  __name: "DateRangePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(bp), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qm = /* @__PURE__ */ w({
  __name: "DateRangePickerInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(ac), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [_o, Zd] = Q("DateRangePickerRoot"), eh = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DateRangePickerRoot",
  props: {
    defaultValue: { default: () => ({ start: void 0, end: void 0 }) },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 },
    isDateDisabled: { type: Function, default: void 0 },
    pagedNavigation: { type: Boolean, default: !1 },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    fixedWeeks: { type: Boolean, default: !1 },
    numberOfMonths: { default: 1 },
    preventDeselect: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:placeholder", "update:startValue", "update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateDisabled: v,
      isDateUnavailable: g,
      defaultOpen: m,
      modal: S,
      id: _,
      name: D,
      required: h,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: B,
      hourCycle: V,
      dir: k
    } = ne(e), A = be(k), L = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), H = Yt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: L.value.start
    }), K = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? H.copy(),
      passive: e.placeholder === void 0
    }), X = ae(e, "open", n, {
      defaultValue: m.value,
      passive: e.open === void 0
    }), N = T();
    return Zd({
      isDateUnavailable: g.value,
      isDateDisabled: v.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: r,
      preventDeselect: f,
      modelValue: L,
      placeholder: K,
      defaultOpen: m,
      modal: S,
      open: X,
      id: _,
      name: D,
      required: h,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: B,
      hourCycle: V,
      dateFieldRef: N,
      dir: A,
      onStartValueChange(F) {
        n("update:startValue", F);
      },
      onDateChange(F) {
        var j, z;
        L.value = { start: (j = F.start) == null ? void 0 : j.copy(), end: (z = F.end) == null ? void 0 : z.copy() };
      },
      onPlaceholderChange(F) {
        K.value = F.copy();
      }
    }), (F, j) => (b(), x(o(ms), {
      open: o(X),
      "onUpdate:open": j[0] || (j[0] = (z) => Ue(X) ? X.value = z : null),
      "default-open": o(m),
      modal: o(S)
    }, {
      default: y(() => [
        C(F.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
}), th = /* @__PURE__ */ w({
  __name: "DateRangePickerCalendar",
  setup(a) {
    const t = _o();
    return (e, n) => (b(), x(o(ip), M({
      isDateDisabled: o(t).isDateDisabled,
      isDateUnavailable: o(t).isDateUnavailable,
      locale: o(t).locale.value,
      disabled: o(t).disabled.value,
      pagedNavigation: o(t).pagedNavigation.value,
      weekStartsOn: o(t).weekStartsOn.value,
      weekdayFormat: o(t).weekdayFormat.value,
      fixedWeeks: o(t).fixedWeeks.value,
      numberOfMonths: o(t).numberOfMonths.value,
      readonly: o(t).readonly.value,
      preventDeselect: o(t).preventDeselect.value,
      minValue: o(t).minValue.value,
      maxValue: o(t).maxValue.value,
      dir: o(t).dir.value
    }, {
      "initial-focus": "",
      "model-value": o(t).modelValue.value,
      placeholder: o(t).placeholder.value,
      "onUpdate:startValue": n[0] || (n[0] = (l) => {
        o(t).onStartValueChange(l);
      }),
      "onUpdate:modelValue": n[1] || (n[1] = (l) => {
        l.start && o(t).modelValue.value.start && l.end && o(t).modelValue.value.end && o(Ee)(l.start, o(t).modelValue.value.start) && o(Ee)(l.end, o(t).modelValue.value.end) || o(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[2] || (n[2] = (l) => {
        o(Ee)(l, o(t).placeholder.value) || o(t).onPlaceholderChange(l);
      })
    }), {
      default: y(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
        C(e.$slots, "default", {
          date: r,
          grid: s,
          weekDays: l,
          weekStartsOn: i,
          locale: u,
          fixedWeeks: d
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), ah = /* @__PURE__ */ w({
  __name: "DateRangePickerField",
  setup(a) {
    const t = _o();
    return (e, n) => (b(), x(o(tc), M({
      ref: o(t).dateFieldRef,
      "model-value": o(t).modelValue.value,
      placeholder: o(t).placeholder.value
    }, {
      id: o(t).id.value,
      name: o(t).name.value,
      disabled: o(t).disabled.value,
      minValue: o(t).minValue.value,
      maxValue: o(t).maxValue.value,
      readonly: o(t).readonly.value,
      hourCycle: o(t).hourCycle.value,
      granularity: o(t).granularity.value,
      hideTimeZone: o(t).hideTimeZone.value,
      locale: o(t).locale.value,
      isDateUnavailable: o(t).isDateUnavailable,
      required: o(t).required.value,
      dir: o(t).dir.value
    }, {
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l.start && o(t).modelValue.value.start && l.end && o(t).modelValue.value.end && l.start.compare(o(t).modelValue.value.start) === 0 && l.end.compare(o(t).modelValue.value.end) === 0 || o(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        o(Ee)(l, o(t).placeholder.value) && l.compare(o(t).placeholder.value) === 0 || o(t).onPlaceholderChange(l);
      })
    }), {
      default: y(({ segments: l, modelValue: s }) => [
        C(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), nh = /* @__PURE__ */ w({
  __name: "DateRangePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(_s), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oh = /* @__PURE__ */ w({
  __name: "DateRangePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Cs), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lh = /* @__PURE__ */ w({
  __name: "DateRangePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(ws), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sh = /* @__PURE__ */ w({
  __name: "DateRangePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = _o();
    return (n, l) => (b(), x(o(hs), M({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      disabled: o(e).disabled.value,
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = o(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["disabled"]));
  }
}), rh = /* @__PURE__ */ w({
  __name: "DateRangePickerContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return (s, r) => (b(), x(o(ys), null, {
      default: y(() => [
        q(o(bs), W(U({ ...o(l), ...s.$attrs })), {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Jd = ["id", "value", "name", "disabled", "required"], [Qd, ec] = Q("DateRangeFieldRoot"), tc = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DateRangeFieldRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a, { expose: t, emit: e }) {
    var te, fe;
    const n = a, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, dir: d } = ne(n), c = qn(n.locale), { primitiveElement: p, currentElement: f } = Oe(), v = T(/* @__PURE__ */ new Set()), g = be(d);
    oe(() => {
      za(f.value).forEach((Y) => v.value.add(Y));
    });
    const m = ae(n, "modelValue", l, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), S = Yt({
      defaultPlaceholder: n.placeholder,
      granularity: n.granularity,
      defaultValue: m.value.start
    }), _ = ae(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? S.copy(),
      passive: n.placeholder === void 0
    }), D = I(() => n.granularity ? ca(_.value) ? n.granularity : "day" : ca(_.value) ? "minute" : "day"), h = I(() => {
      var Y;
      return m.value.start ? !!((Y = u.value) != null && Y.call(u, m.value.start) || n.minValue && Me(m.value.start, n.minValue) || n.maxValue && Me(n.maxValue, m.value.start)) : !1;
    }), E = I(() => {
      var Y;
      return m.value.end ? !!((Y = u.value) != null && Y.call(u, m.value.end) || n.minValue && Me(m.value.end, n.minValue) || n.maxValue && Me(n.maxValue, m.value.end)) : !1;
    }), P = I(() => h.value || E.value ? !0 : !m.value.start || !m.value.end ? !1 : !Me(m.value.start, m.value.end) || u.value !== void 0 && !bl(
      m.value.start,
      m.value.end,
      u.value,
      void 0
    )), $ = ls(D.value), B = T(m.value.start ? { ...zt({ value: m.value.start, formatter: c }) } : { ...$ }), V = T(m.value.end ? { ...zt({ value: m.value.end, formatter: c }) } : { ...$ }), k = I(() => Rn({
      granularity: D.value,
      dateRef: _.value,
      formatter: c,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: B.value,
      locale: s
    })), A = I(() => Rn({
      granularity: D.value,
      dateRef: _.value,
      formatter: c,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: V.value,
      locale: s
    })), L = I(() => ({
      start: k.value.arr,
      end: A.value.arr
    })), H = I(() => ({ start: L.value.start.filter(({ part: Y }) => Y !== "literal"), end: L.value.end.filter(({ part: Y }) => Y !== "literal") })), K = T((te = m.value.start) == null ? void 0 : te.copy()), X = T((fe = m.value.end) == null ? void 0 : fe.copy());
    ee([K, X], ([Y, le]) => {
      var Ce, ge;
      const he = m.value;
      if (!(he.start && he.end && Y && le && he.start.compare(Y) === 0 && he.end.compare(le) === 0))
        if (Y && le) {
          if (((Ce = m.value.start) == null ? void 0 : Ce.compare(Y)) === 0 && ((ge = m.value.end) == null ? void 0 : ge.compare(le)) === 0)
            return;
          m.value = { start: Y.copy(), end: le.copy() };
        } else m.value.start && m.value.end && (m.value = { start: void 0, end: void 0 });
    }), ee(m, (Y) => {
      Y.start && Y.end && ((!K.value || Y.start.compare(K.value) !== 0) && (K.value = Y.start.copy()), (!X.value || Y.end.compare(X.value) !== 0) && (X.value = Y.end.copy()));
    }), ee([K, s], ([Y]) => {
      Y !== void 0 ? B.value = { ...zt({ value: Y, formatter: c }) } : B.value = { ...$ };
    }), ee(s, (Y) => {
      c.getLocale() !== Y && (c.setLocale(Y), se(() => {
        v.value.clear(), za(f.value).forEach((le) => v.value.add(le));
      }));
    }), ee(m, (Y) => {
      Y.start !== void 0 && (!Ee(_.value, Y.start) || _.value.compare(Y.start) !== 0) && (_.value = Y.start.copy());
    }), ee([X, s], ([Y]) => {
      Y !== void 0 ? V.value = { ...zt({ value: Y, formatter: c }) } : V.value = { ...$ };
    });
    const N = T(null), F = I(() => Array.from(v.value).findIndex((Y) => {
      var le, he;
      return Y.getAttribute("data-radix-vue-date-field-segment") === ((le = N.value) == null ? void 0 : le.getAttribute("data-radix-vue-date-field-segment")) && Y.getAttribute("data-radix-vue-date-range-field-segment-type") === ((he = N.value) == null ? void 0 : he.getAttribute("data-radix-vue-date-range-field-segment-type"));
    })), j = I(() => {
      const Y = g.value === "rtl" ? -1 : 1;
      return (Y < 0 ? F.value < 0 : F.value > v.value.size - 1) ? null : Array.from(v.value)[F.value + Y];
    }), z = I(() => {
      const Y = g.value === "rtl" ? -1 : 1;
      return (Y > 0 ? F.value < 0 : F.value > v.value.size - 1) ? null : Array.from(v.value)[F.value - Y];
    }), Z = et();
    function G(Y) {
      var le, he;
      Ye(Y.key) && (Y.key === Z.ARROW_LEFT && ((le = z.value) == null || le.focus()), Y.key === Z.ARROW_RIGHT && ((he = j.value) == null || he.focus()));
    }
    function J(Y) {
      N.value = Y;
    }
    return ec({
      isDateUnavailable: u.value,
      locale: s,
      startValue: K,
      endValue: X,
      placeholder: _,
      disabled: r,
      formatter: c,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: { start: B, end: V },
      isInvalid: P,
      segmentContents: H,
      elements: v,
      setFocusedElement: J,
      focusNext() {
        var Y;
        (Y = j.value) == null || Y.focus();
      }
    }), t({
      setFocusedElement: J
    }), (Y, le) => {
      var he, Ce;
      return b(), ce(_e, null, [
        q(o(O), M(Y.$attrs, {
          ref_key: "primitiveElement",
          ref: p,
          role: "group",
          "aria-disabled": o(r) ? !0 : void 0,
          "data-disabled": o(r) ? "" : void 0,
          "data-readonly": o(i) ? "" : void 0,
          "data-invalid": P.value ? "" : void 0,
          dir: o(g),
          onKeydown: re(G, ["left", "right"])
        }), {
          default: y(() => [
            C(Y.$slots, "default", {
              modelValue: o(m),
              segments: L.value
            })
          ]),
          _: 3
        }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
        Ge("input", {
          id: Y.id,
          type: "text",
          tabindex: "-1",
          "aria-hidden": "",
          value: `${(he = o(m).start) == null ? void 0 : he.toString()} - ${(Ce = o(m).end) == null ? void 0 : Ce.toString()}`,
          name: Y.name,
          disabled: o(r),
          required: Y.required,
          style: {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          },
          onFocus: le[0] || (le[0] = (ge) => {
            var $e, ue;
            return (ue = ($e = Array.from(v.value)) == null ? void 0 : $e[0]) == null ? void 0 : ue.focus();
          })
        }, null, 40, Jd)
      ], 64);
    };
  }
}), ac = /* @__PURE__ */ w({
  __name: "DateRangeFieldInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Qd(), n = T(!0), l = T(!1), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = ss({
      hasLeftFocus: n,
      lastKeyZero: l,
      placeholder: e.placeholder,
      hourCycle: e.hourCycle,
      segmentValues: e.segmentValues[t.type],
      formatter: e.formatter,
      part: t.part,
      disabled: e.disabled,
      readonly: e.readonly,
      focusNext: e.focusNext,
      modelValue: t.type === "start" ? e.startValue : e.endValue
    }), u = I(() => e.disabled.value), d = I(() => e.readonly.value), c = I(() => e.isInvalid.value);
    return (p, f) => (b(), x(o(O), M({
      as: p.as,
      "as-child": p.asChild
    }, o(i), {
      contenteditable: u.value || d.value ? !1 : p.part !== "literal",
      "data-radix-vue-date-field-segment": p.part,
      "aria-disabled": u.value ? !0 : void 0,
      "aria-readonly": d.value ? !0 : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-radix-vue-date-range-field-segment-type": p.type,
      "data-invalid": c.value ? "" : void 0,
      "aria-invalid": c.value ? !0 : void 0
    }, Kn(p.part !== "literal" ? {
      mousedown: o(s),
      keydown: o(r),
      focusout: () => {
        n.value = !0;
      },
      focusin: (v) => {
        o(e).setFocusedElement(v.target);
      }
    } : {})), {
      default: y(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-radix-vue-date-range-field-segment-type", "data-invalid", "aria-invalid"]));
  }
}), [rs, nc] = Q("DropdownMenuRoot"), ih = /* @__PURE__ */ w({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    R();
    const l = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), s = T(), { modal: r, dir: i } = ne(e), u = be(i);
    return nc({
      open: l,
      onOpenChange: (d) => {
        l.value = d;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      triggerId: "",
      triggerElement: s,
      contentId: "",
      modal: r,
      dir: u
    }), (d, c) => (b(), x(o(so), {
      open: o(l),
      "onUpdate:open": c[0] || (c[0] = (p) => Ue(l) ? l.value = p : null),
      dir: o(u),
      modal: o(r)
    }, {
      default: y(() => [
        C(d.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), uh = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = rs(), { forwardRef: n, currentElement: l } = R();
    return oe(() => {
      e.triggerElement = l;
    }), e.triggerId || (e.triggerId = ve(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (b(), x(o(Qa), { "as-child": "" }, {
      default: y(() => [
        q(o(O), {
          id: o(e).triggerId,
          ref: o(n),
          type: s.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": o(e).open.value,
          "aria-controls": o(e).open.value ? o(e).contentId : void 0,
          "data-disabled": s.disabled ? "" : void 0,
          disabled: s.disabled,
          "data-state": o(e).open.value ? "open" : "closed",
          onClick: r[0] || (r[0] = async (i) => {
            var u;
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = o(e)) == null || u.onOpenToggle(), await se(), o(e).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = re(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && o(e).onOpenToggle(), i.key === "ArrowDown" && o(e).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), dh = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(vo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ch = /* @__PURE__ */ w({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    R();
    const s = rs(), r = T(!1);
    function i(u) {
      u.defaultPrevented || (r.value || setTimeout(() => {
        var d;
        (d = s.triggerElement.value) == null || d.focus();
      }, 0), r.value = !1, u.preventDefault());
    }
    return s.contentId || (s.contentId = ve(void 0, "radix-vue-dropdown-menu-content")), (u, d) => {
      var c;
      return b(), x(o(po), M(o(l), {
        id: o(s).contentId,
        "aria-labelledby": (c = o(s)) == null ? void 0 : c.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: d[0] || (d[0] = (p) => {
          var m;
          if (p.defaultPrevented) return;
          const f = p.detail.originalEvent, v = f.button === 0 && f.ctrlKey === !0, g = f.button === 2 || v;
          (!o(s).modal.value || g) && (r.value = !0), (m = o(s).triggerElement.value) != null && m.contains(p.target) && p.preventDefault();
        })
      }), {
        default: y(() => [
          C(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), ph = /* @__PURE__ */ w({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(lo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fh = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    return R(), (s, r) => (b(), x(o(Ea), W(U({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vh = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(tn), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mh = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(yo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hh = /* @__PURE__ */ w({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    return R(), (s, r) => (b(), x(o(co), W(U({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yh = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(uo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gh = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(fo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bh = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    return R(), (s, r) => (b(), x(o(mo), W(U({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ch = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return R(), (s, r) => (b(), x(o(ho), W(U(o(l))), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wh = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "open", t, {
      passive: e.open === void 0,
      defaultValue: e.defaultOpen ?? !1
    });
    return R(), (s, r) => (b(), x(o(go), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Ue(l) ? l.value = i : null)
    }, {
      default: y(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), _h = /* @__PURE__ */ w({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return R(), (s, r) => (b(), x(o(bo), M(o(l), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xh = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(Co), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oc = ["value", "name", "disabled", "required"], [aa, lc] = Q("EditableRoot"), Sh = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "EditableRoot",
  props: {
    defaultValue: {},
    modelValue: {},
    placeholder: { default: "Enter text..." },
    dir: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean },
    activationMode: { default: "focus" },
    selectOnFocus: { type: Boolean, default: !1 },
    submitMode: { default: "blur" },
    startWithEditMode: { type: Boolean },
    maxLength: {},
    autoResize: { type: Boolean, default: !1 },
    id: {},
    name: {},
    required: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "submit", "update:state"],
  setup(a, { expose: t, emit: e }) {
    const n = a, l = e, {
      id: s,
      name: r,
      defaultValue: i,
      startWithEditMode: u,
      placeholder: d,
      maxLength: c,
      disabled: p,
      dir: f,
      submitMode: v,
      activationMode: g,
      selectOnFocus: m,
      readonly: S,
      autoResize: _,
      required: D
    } = ne(n), h = T(), E = be(f), P = T(u.value ?? !1), $ = ae(n, "modelValue", l, {
      defaultValue: i.value ?? "",
      passive: n.modelValue === void 0
    }), { primitiveElement: B, currentElement: V } = Oe(), k = Qe(V), A = I(() => typeof d.value == "string" ? { edit: d.value, preview: d.value } : d.value), L = T($.value);
    function H() {
      $.value = L.value, P.value = !1, l("update:state", "cancel");
    }
    function K() {
      P.value = !0, l("update:state", "edit");
    }
    function X() {
      L.value = $.value, P.value = !1, l("update:state", "submit"), l("submit", $.value);
    }
    function N() {
      P.value && (v.value === "blur" || v.value === "both" ? X() : H());
    }
    const F = zl(() => N(), V), j = Kl(() => N(), V), z = I(() => $.value === "");
    return t({
      /** Function to submit the value of the editable */
      submit: X,
      /** Function to cancel the value of the editable */
      cancel: H,
      /** Function to set the editable in edit mode */
      edit: K
    }), lc({
      id: s,
      name: r,
      disabled: p,
      isEditing: P,
      maxLength: c,
      modelValue: $,
      placeholder: A,
      edit: K,
      cancel: H,
      submit: X,
      activationMode: g,
      submitMode: v,
      selectOnFocus: m,
      inputRef: h,
      startWithEditMode: u,
      isEmpty: z,
      readonly: S,
      autoResize: _
    }), (Z, G) => (b(), ce(_e, null, [
      q(o(O), M(Z.$attrs, {
        ref_key: "primitiveElement",
        ref: B,
        as: Z.as,
        "as-child": Z.asChild,
        dir: o(E),
        onFocusCapture: o(j).onFocusCapture,
        onBlurCapture: o(j).onBlurCapture,
        onPointerdownCapture: o(F).onPointerDownCapture
      }), {
        default: y(() => [
          C(Z.$slots, "default", {
            modelValue: o($),
            isEditing: P.value,
            isEmpty: z.value,
            submit: X,
            cancel: H,
            edit: K
          })
        ]),
        _: 3
      }, 16, ["as", "as-child", "dir", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]),
      o(k) ? (b(), ce("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o($),
        name: o(r),
        disabled: o(p),
        required: o(D),
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, oc)) : pe("", !0)
    ], 64));
  }
}), Eh = /* @__PURE__ */ w({
  __name: "EditableArea",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), x(o(O), M(t, {
      "data-placeholder-shown": o(e).isEditing.value ? void 0 : "",
      "data-focus": o(e).isEditing.value ? "" : void 0,
      "data-focused": o(e).isEditing.value ? "" : void 0,
      "data-empty": o(e).isEmpty.value ? "" : void 0,
      "data-readonly": o(e).readonly.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      style: o(e).autoResize.value ? { display: "inline-grid" } : void 0
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-placeholder-shown", "data-focus", "data-focused", "data-empty", "data-readonly", "data-disabled", "style"]));
  }
}), Ph = /* @__PURE__ */ w({
  __name: "EditableInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = et(), n = aa(), l = I(() => n.disabled.value), s = I(() => {
      var d;
      return (d = n.placeholder.value) == null ? void 0 : d.edit;
    }), { primitiveElement: r, currentElement: i } = Oe();
    oe(() => {
      var d, c;
      n.inputRef.value = i.value, n.startWithEditMode.value && ((d = n.inputRef.value) == null || d.focus({ preventScroll: !0 }), n.selectOnFocus.value && ((c = n.inputRef.value) == null || c.select()));
    }), ee(n.isEditing, (d) => {
      d && se(() => {
        var c, p;
        (c = n.inputRef.value) == null || c.focus({ preventScroll: !0 }), n.selectOnFocus.value && ((p = n.inputRef.value) == null || p.select());
      });
    });
    function u(d) {
      (n.submitMode.value === "enter" || n.submitMode.value === "both") && d.key === e.ENTER && !d.shiftKey && !d.metaKey && n.submit();
    }
    return (d, c) => (b(), x(o(O), M({
      ref_key: "primitiveElement",
      ref: r
    }, t, {
      value: o(n).modelValue.value,
      placeholder: s.value,
      disabled: l.value,
      "data-disabled": l.value ? "" : void 0,
      "data-readonly": o(n).readonly.value ? "" : void 0,
      readonly: o(n).readonly.value,
      "aria-label": "editable input",
      hidden: o(n).autoResize.value ? void 0 : !o(n).isEditing.value,
      style: o(n).autoResize.value ? { all: "unset", gridArea: "1 / 1 / auto / auto", visibility: o(n).isEditing.value ? void 0 : "hidden" } : void 0,
      onInput: c[0] || (c[0] = (p) => o(n).modelValue.value = p.target.value),
      onKeydown: [
        re(u, ["enter", "space"]),
        re(o(n).cancel, ["esc"])
      ]
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["value", "placeholder", "disabled", "data-disabled", "data-readonly", "readonly", "hidden", "style", "onKeydown"]));
  }
}), Dh = /* @__PURE__ */ w({
  __name: "EditablePreview",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = aa(), n = I(() => {
      var r;
      return (r = e.placeholder.value) == null ? void 0 : r.preview;
    });
    function l() {
      e.activationMode.value === "focus" && e.edit();
    }
    function s() {
      e.activationMode.value === "dblclick" && e.edit();
    }
    return (r, i) => (b(), x(o(O), M(t, {
      tabindex: "0",
      "data-placeholder-shown": o(e).isEditing.value ? void 0 : "",
      hidden: o(e).autoResize.value ? void 0 : o(e).isEditing.value,
      style: o(e).autoResize.value ? {
        whiteSpace: "pre",
        userSelect: "none",
        gridArea: "1 / 1 / auto / auto",
        visibility: o(e).isEditing.value ? "hidden" : void 0,
        overflow: "hidden",
        textOverflow: "ellipsis"
      } : void 0,
      onFocusin: l,
      onDblclick: s
    }), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          me(De(o(e).modelValue.value || n.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-placeholder-shown", "hidden", "style"]));
  }
}), $h = /* @__PURE__ */ w({
  __name: "EditableSubmitTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), x(o(O), M(t, {
      "aria-label": "submit",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? void 0 : "",
      onClick: o(e).submit
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          me("Submit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), Ih = /* @__PURE__ */ w({
  __name: "EditableCancelTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), x(o(O), M(t, {
      "aria-label": "cancel",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? void 0 : "",
      onClick: o(e).cancel
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          me("Cancel")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), Bh = /* @__PURE__ */ w({
  __name: "EditableEditTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), x(o(O), M(t, {
      "aria-label": "edit",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? "" : void 0,
      onClick: o(e).edit
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          me("Edit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), [xo, sc] = Q("HoverCardRoot"), Th = /* @__PURE__ */ w({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { openDelay: l, closeDelay: s } = ne(e);
    R();
    const r = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), i = T(0), u = T(0), d = T(!1), c = T(!1), p = T(!1), f = T();
    function v() {
      clearTimeout(u.value), i.value = window.setTimeout(() => r.value = !0, l.value);
    }
    function g() {
      clearTimeout(i.value), !d.value && !c.value && (u.value = window.setTimeout(() => r.value = !1, s.value));
    }
    function m() {
      r.value = !1;
    }
    return sc({
      open: r,
      onOpenChange(S) {
        r.value = S;
      },
      onOpen: v,
      onClose: g,
      onDismiss: m,
      hasSelectionRef: d,
      isPointerDownOnContentRef: c,
      isPointerInTransitRef: p,
      triggerElement: f
    }), (S, _) => (b(), x(o(At), null, {
      default: y(() => [
        C(S.$slots, "default", { open: o(r) })
      ]),
      _: 3
    }));
  }
});
function An(a) {
  return (t) => t.pointerType === "touch" ? void 0 : a();
}
function rc(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
const Rh = /* @__PURE__ */ w({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = xo();
    n.triggerElement = e;
    function l() {
      setTimeout(() => {
        !n.isPointerInTransitRef.value && !n.open.value && n.onClose();
      }, 0);
    }
    return (s, r) => (b(), x(o(Ot), { "as-child": "" }, {
      default: y(() => [
        q(o(O), {
          ref: o(t),
          "as-child": s.asChild,
          as: s.as,
          "data-state": o(n).open.value ? "open" : "closed",
          "data-grace-area-trigger": "",
          onPointerenter: r[0] || (r[0] = (i) => o(An)(o(n).onOpen)(i)),
          onPointerleave: r[1] || (r[1] = (i) => o(An)(l)(i)),
          onFocus: r[2] || (r[2] = (i) => o(n).onOpen()),
          onBlur: r[3] || (r[3] = (i) => o(n).onClose())
        }, {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "data-state"])
      ]),
      _: 3
    }));
  }
}), Ah = /* @__PURE__ */ w({
  __name: "HoverCardPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ic = /* @__PURE__ */ w({
  __name: "HoverCardContentImpl",
  props: {
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Tt(e), { forwardRef: s, currentElement: r } = R(), i = xo(), { isPointerInTransit: u, onPointerExit: d } = Al(i.triggerElement, r);
    di(i.isPointerInTransitRef, u, { direction: "rtl" }), d(() => {
      i.onClose();
    });
    const c = T(!1);
    let p;
    ye((v) => {
      if (c.value) {
        const g = document.body;
        p = g.style.userSelect || g.style.webkitUserSelect, g.style.userSelect = "none", g.style.webkitUserSelect = "none", v(() => {
          g.style.userSelect = p, g.style.webkitUserSelect = p;
        });
      }
    });
    function f() {
      c.value = !1, i.isPointerDownOnContentRef.value = !1, se(() => {
        var g;
        ((g = document.getSelection()) == null ? void 0 : g.toString()) !== "" && (i.hasSelectionRef.value = !0);
      });
    }
    return oe(() => {
      r.value && (document.addEventListener("pointerup", f), rc(r.value).forEach((g) => g.setAttribute("tabindex", "-1")));
    }), Te(() => {
      document.removeEventListener("pointerup", f), i.hasSelectionRef.value = !1, i.isPointerDownOnContentRef.value = !1;
    }), (v, g) => (b(), x(o(gt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: g[1] || (g[1] = (m) => n("escapeKeyDown", m)),
      onPointerDownOutside: g[2] || (g[2] = (m) => n("pointerDownOutside", m)),
      onFocusOutside: g[3] || (g[3] = ie((m) => n("focusOutside", m), ["prevent"])),
      onDismiss: o(i).onDismiss
    }, {
      default: y(() => [
        q(o(Dt), M({ ...o(l), ...v.$attrs }, {
          ref: o(s),
          "data-state": o(i).open.value ? "open" : "closed",
          style: {
            userSelect: c.value ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: c.value ? "text" : void 0,
            // re-namespace exposed content custom properties
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          },
          onPointerdown: g[0] || (g[0] = (m) => {
            m.currentTarget.contains(m.target) && (c.value = !0), o(i).hasSelectionRef.value = !1, o(i).isPointerDownOnContentRef.value = !0;
          })
        }), {
          default: y(() => [
            C(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }, 8, ["onDismiss"]));
  }
}), Oh = /* @__PURE__ */ w({
  __name: "HoverCardContent",
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const l = xe(a, t), { forwardRef: s } = R(), r = xo();
    return (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(r).open.value
    }, {
      default: y(() => [
        q(ic, M(o(l), {
          ref: o(s),
          onPointerenter: u[0] || (u[0] = (d) => o(An)(o(r).onOpen)(d))
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), kh = /* @__PURE__ */ w({
  __name: "HoverCardArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(ea), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mh = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(O), M(t, {
      onMousedown: n[0] || (n[0] = (l) => {
        !l.defaultPrevented && l.detail > 1 && l.preventDefault();
      })
    }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function uc(a) {
  return a == null ? void 0 : a.querySelector("[data-state=checked]");
}
function dc(a, t, e) {
  return a === void 0 ? !1 : Array.isArray(a) ? a.some((n) => Gt(n, t, e)) : Gt(a, t, e);
}
function Gt(a, t, e) {
  return a === void 0 || t === void 0 ? !1 : typeof a == "string" ? a === t : typeof e == "function" ? e(a, t) : typeof e == "string" ? (a == null ? void 0 : a[e]) === (t == null ? void 0 : t[e]) : Xe(a, t);
}
const [an, cc] = Q("ListboxRoot"), Vh = /* @__PURE__ */ w({
  __name: "ListboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {},
    disabled: { type: Boolean },
    selectionBehavior: { default: "toggle" },
    highlightOnHover: { type: Boolean },
    by: {},
    name: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "highlight", "entryFocus", "leave"],
  setup(a, { emit: t }) {
    const e = a, n = t, { multiple: l, highlightOnHover: s, orientation: r, disabled: i, selectionBehavior: u, dir: d } = ne(e), { getItems: c } = Xt(), { handleTypeaheadSearch: p } = _a(), { primitiveElement: f, currentElement: v } = Oe(), g = et(), m = be(d), S = Qe(v), _ = T(), D = T(!1), h = T(!0), E = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? (l.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: !0
    });
    function P(G) {
      if (D.value = !0, Array.isArray(E.value)) {
        const J = E.value.findIndex((te) => Gt(te, G, e.by));
        if (e.selectionBehavior === "toggle") {
          const te = [...E.value];
          J === -1 ? te.push(G) : te.splice(J, 1), E.value = te;
        } else
          E.value = [G], _.value = G;
      } else
        e.selectionBehavior === "toggle" && Gt(E.value, G, e.by) ? E.value = void 0 : E.value = G;
      setTimeout(() => {
        D.value = !1;
      }, 1);
    }
    const $ = T(null), B = T(null), V = T(!1), k = pa(), A = pa();
    function L() {
      return c().map((G) => G.ref).filter((G) => G.dataset.disabled !== "");
    }
    function H(G) {
      $.value = G, $.value.focus(), $.value.scrollIntoView({ block: "nearest" });
      const J = c().find((te) => te.ref === G);
      n("highlight", J);
    }
    function K(G) {
      $.value && $.value.click();
    }
    function X(G) {
      if (D.value = !0, V.value)
        A.trigger(G);
      else {
        const J = G.altKey || G.ctrlKey || G.metaKey;
        if (J && G.key === "a" && l.value) {
          const te = c(), fe = te.map((Y) => Y.value);
          E.value = [...fe], G.preventDefault(), H(te[te.length - 1].ref);
        } else if (!J) {
          const te = p(G.key, L());
          te && H(te);
        }
      }
      setTimeout(() => {
        D.value = !1;
      }, 1);
    }
    function N(G) {
      B.value = $.value, $.value = null, n("leave", G);
    }
    function F(G) {
      var te, fe;
      const J = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((te = G.currentTarget) == null || te.dispatchEvent(J), n("entryFocus", J), !J.defaultPrevented)
        if (B.value)
          H(B.value);
        else {
          const Y = (fe = L()) == null ? void 0 : fe[0];
          H(Y);
        }
    }
    function j(G) {
      const J = Ql(G, r.value, m.value);
      if (!J)
        return;
      let te = L();
      if ($.value) {
        if (J === "last")
          te.reverse();
        else if (J === "prev" || J === "next") {
          J === "prev" && te.reverse();
          const fe = te.indexOf($.value);
          te = te.slice(fe + 1);
        }
        z(G, te[0]);
      }
      if (te.length) {
        const fe = !$.value && J === "prev" ? te.length - 1 : 0;
        H(te[fe]);
      }
      if (V.value)
        return A.trigger(G);
    }
    function z(G, J) {
      var fe;
      if (!(V.value || e.selectionBehavior !== "replace" || !l.value || !Array.isArray(E.value) || (G.altKey || G.ctrlKey || G.metaKey) && !G.shiftKey) && G.shiftKey) {
        const Y = c().filter((Ce) => Ce.ref.dataset.disabled !== "");
        let le = (fe = Y.find((Ce) => Ce.ref === J)) == null ? void 0 : fe.value;
        if (G.key === g.END ? le = Y[Y.length - 1].value : G.key === g.HOME && (le = Y[0].value), !le || !_.value)
          return;
        const he = Et(Y.map((Ce) => Ce.value), _.value, le);
        E.value = he;
      }
    }
    async function Z(G) {
      if (V.value)
        k.trigger(G);
      else {
        await se();
        const te = L().find((fe) => fe.dataset.state === "checked");
        te && H(te);
      }
    }
    return ee(E, () => {
      D.value || se(() => {
        Z();
      });
    }, { immediate: !0, deep: !0 }), cc({
      modelValue: E,
      // @ts-expect-error ignoring
      onValueChange: P,
      multiple: l,
      orientation: r,
      dir: m,
      disabled: i,
      highlightOnHover: s,
      highlightedElement: $,
      isVirtual: V,
      virtualFocusHook: k,
      virtualKeydownHook: A,
      by: e.by,
      firstValue: _,
      selectionBehavior: u,
      focusable: h,
      onLeave: N,
      onEnter: F,
      onChangeHighlight: H,
      onKeydownEnter: K,
      onKeydownNavigation: j,
      onKeydownTypeAhead: X
    }), (G, J) => (b(), x(o(O), {
      ref_key: "primitiveElement",
      ref: f,
      as: G.as,
      "as-child": G.asChild,
      dir: o(m),
      "data-disabled": o(i) ? "" : void 0,
      onPointerleave: N,
      onFocusout: J[0] || (J[0] = (te) => {
        const fe = te.relatedTarget || te.target;
        $.value && !o(v).contains(fe) && N(te);
      })
    }, {
      default: y(() => [
        C(G.$slots, "default", { modelValue: o(E) }),
        o(S) && e.name ? (b(), x(o(oo), {
          key: 0,
          name: e.name,
          value: o(E)
        }, null, 8, ["name", "value"])) : pe("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), Fh = /* @__PURE__ */ w({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = an(), e = $t(!1, 10);
    return (n, l) => (b(), x(o(Zt), null, {
      default: y(() => [
        q(o(O), {
          role: "listbox",
          as: n.as,
          "as-child": n.asChild,
          tabindex: o(t).focusable.value ? o(t).highlightedElement.value ? "-1" : "0" : void 0,
          "data-orientation": o(t).orientation.value,
          onMousedown: l[0] || (l[0] = ie((s) => e.value = !0, ["left"])),
          onFocus: l[1] || (l[1] = (s) => {
            o(e) || o(t).onEnter(s);
          }),
          onKeydown: [
            l[2] || (l[2] = re(ie((s) => {
              o(t).focusable.value && o(t).onKeydownNavigation(s);
            }, ["prevent"]), ["down", "up", "home", "end"])),
            re(o(t).onKeydownEnter, ["enter"]),
            o(t).onKeydownTypeAhead
          ]
        }, {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "tabindex", "data-orientation", "onKeydown"])
      ]),
      _: 3
    }));
  }
}), Lh = /* @__PURE__ */ w({
  __name: "ListboxFilter",
  props: {
    modelValue: {},
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "modelValue", t, {
      defaultValue: "",
      passive: e.modelValue === void 0
    }), s = an();
    s.focusable.value = !1;
    const { primitiveElement: r, currentElement: i } = Oe();
    return oe(() => {
      setTimeout(() => {
        var u;
        e.autoFocus && ((u = i.value) == null || u.focus());
      }, 1);
    }), (u, d) => (b(), x(o(O), {
      ref_key: "primitiveElement",
      ref: r,
      as: u.as,
      "as-child": u.asChild,
      value: o(l),
      disabled: o(s).disabled.value ? "" : void 0,
      "data-disabled": o(s).disabled.value ? "" : void 0,
      type: "text",
      onKeydown: [
        re(ie(o(s).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]),
        re(o(s).onKeydownEnter, ["enter"])
      ],
      onInput: d[0] || (d[0] = (c) => {
        l.value = c.target.value;
      })
    }, {
      default: y(() => [
        C(u.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "onKeydown"]));
  }
}), pc = "listbox.select", [fc, vc] = Q("ListboxItem"), Nh = /* @__PURE__ */ w({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = ve(void 0, "radix-vue-listbox-item"), i = an(), u = I(() => s.value === i.highlightedElement.value), d = I(() => dc(i.modelValue.value, e.value, i.by)), c = I(() => i.disabled.value || e.disabled);
    async function p(v) {
      n("select", v), !(v != null && v.defaultPrevented) && !c.value && v && (i.onValueChange(e.value), i.onChangeHighlight(v.target));
    }
    function f(v) {
      const g = { originalEvent: v, value: e.value };
      jt(pc, p, g);
    }
    return vc({
      isSelected: d
    }), (v, g) => (b(), x(o(Rt), { value: v.value }, {
      default: y(() => [
        q(o(O), {
          id: o(r),
          ref: o(l),
          role: "option",
          tabindex: o(i).focusable.value ? u.value ? "0" : "-1" : void 0,
          "aria-selected": d.value,
          as: v.as,
          "as-child": v.asChild,
          disabled: c.value ? "" : void 0,
          "data-disabled": c.value ? "" : void 0,
          "data-highlighted": u.value ? "" : void 0,
          "data-state": d.value ? "checked" : "unchecked",
          onClick: f,
          onKeydown: re(ie(f, ["prevent"]), ["space"]),
          onPointermove: g[0] || (g[0] = (m) => {
            o(i).highlightOnHover.value ? o(i).onChangeHighlight(o(s)) : o(i).focusable.value || o(i).onChangeHighlight(o(s));
          })
        }, {
          default: y(() => [
            C(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), zh = /* @__PURE__ */ w({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a;
    R();
    const e = fc();
    return (n, l) => o(e).isSelected.value ? (b(), x(o(O), M({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
});
function ra(a, t, e) {
  let n = e.initialDeps ?? [], l;
  return () => {
    var s, r, i, u;
    let d;
    e.key && ((s = e.debug) != null && s.call(e)) && (d = Date.now());
    const c = a();
    if (!(c.length !== n.length || c.some((v, g) => n[g] !== v)))
      return l;
    n = c;
    let f;
    if (e.key && ((r = e.debug) != null && r.call(e)) && (f = Date.now()), l = t(...c), e.key && ((i = e.debug) != null && i.call(e))) {
      const v = Math.round((Date.now() - d) * 100) / 100, g = Math.round((Date.now() - f) * 100) / 100, m = g / 16, S = (_, D) => {
        for (_ = String(_); _.length < D; )
          _ = " " + _;
        return _;
      };
      console.info(
        `%c⏱ ${S(g, 5)} /${S(v, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * m, 120)
        )}deg 100% 31%);`,
        e == null ? void 0 : e.key
      );
    }
    return (u = e == null ? void 0 : e.onChange) == null || u.call(e, l), l;
  };
}
function En(a, t) {
  if (a === void 0)
    throw new Error("Unexpected undefined");
  return a;
}
const mc = (a, t) => Math.abs(a - t) < 1, hc = (a, t, e) => {
  let n;
  return function(...l) {
    a.clearTimeout(n), n = a.setTimeout(() => t.apply(this, l), e);
  };
}, yc = (a) => a, gc = (a) => {
  const t = Math.max(a.startIndex - a.overscan, 0), e = Math.min(a.endIndex + a.overscan, a.count - 1), n = [];
  for (let l = t; l <= e; l++)
    n.push(l);
  return n;
}, bc = (a, t) => {
  const e = a.scrollElement;
  if (!e)
    return;
  const n = a.targetWindow;
  if (!n)
    return;
  const l = (r) => {
    const { width: i, height: u } = r;
    t({ width: Math.round(i), height: Math.round(u) });
  };
  if (l(e.getBoundingClientRect()), !n.ResizeObserver)
    return () => {
    };
  const s = new n.ResizeObserver((r) => {
    const i = r[0];
    if (i != null && i.borderBoxSize) {
      const u = i.borderBoxSize[0];
      if (u) {
        l({ width: u.inlineSize, height: u.blockSize });
        return;
      }
    }
    l(e.getBoundingClientRect());
  });
  return s.observe(e, { box: "border-box" }), () => {
    s.unobserve(e);
  };
}, Xo = {
  passive: !0
}, Cc = typeof window > "u" ? !0 : "onscrollend" in window, wc = (a, t) => {
  const e = a.scrollElement;
  if (!e)
    return;
  const n = a.targetWindow;
  if (!n)
    return;
  let l = 0;
  const s = Cc ? () => {
  } : hc(
    n,
    () => {
      t(l, !1);
    },
    a.options.isScrollingResetDelay
  ), r = (d) => () => {
    l = e[a.options.horizontal ? "scrollLeft" : "scrollTop"], s(), t(l, d);
  }, i = r(!0), u = r(!1);
  return u(), e.addEventListener("scroll", i, Xo), e.addEventListener("scrollend", u, Xo), () => {
    e.removeEventListener("scroll", i), e.removeEventListener("scrollend", u);
  };
}, _c = (a, t, e) => {
  if (t != null && t.borderBoxSize) {
    const n = t.borderBoxSize[0];
    if (n)
      return Math.round(
        n[e.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    a.getBoundingClientRect()[e.options.horizontal ? "width" : "height"]
  );
}, xc = (a, {
  adjustments: t = 0,
  behavior: e
}, n) => {
  var l, s;
  const r = a + t;
  (s = (l = n.scrollElement) == null ? void 0 : l.scrollTo) == null || s.call(l, {
    [n.options.horizontal ? "left" : "top"]: r,
    behavior: e
  });
};
class Sc {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const n = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((s) => {
          this._measureElement(s.target, s);
        });
      }));
      return {
        disconnect: () => {
          var l;
          return (l = n()) == null ? void 0 : l.disconnect();
        },
        observe: (l) => {
          var s;
          return (s = n()) == null ? void 0 : s.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var s;
          return (s = n()) == null ? void 0 : s.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (e) => {
      Object.entries(e).forEach(([n, l]) => {
        typeof l > "u" && delete e[n];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: yc,
        rangeExtractor: gc,
        onChange: () => {
        },
        measureElement: _c,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        ...e
      };
    }, this.notify = (e, n) => {
      var l, s;
      const { startIndex: r, endIndex: i } = this.range ?? {
        startIndex: void 0,
        endIndex: void 0
      }, u = this.calculateRange();
      (e || r !== (u == null ? void 0 : u.startIndex) || i !== (u == null ? void 0 : u.endIndex)) && ((s = (l = this.options).onChange) == null || s.call(l, this, n));
    }, this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.observer.disconnect(), this.elementsCache.clear();
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e;
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.notify(!1, !1);
          return;
        }
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null, this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (l) => {
            this.scrollRect = l, this.notify(!1, !1);
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (l, s) => {
            this.scrollAdjustments = 0, this.scrollDirection = s ? this.getScrollOffset() < l ? "forward" : "backward" : null, this.scrollOffset = l;
            const r = this.isScrolling;
            this.isScrolling = s, this.notify(r !== s, s);
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, n) => {
      const l = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
      for (let r = n - 1; r >= 0; r--) {
        const i = e[r];
        if (l.has(i.lane))
          continue;
        const u = s.get(
          i.lane
        );
        if (u == null || i.end > u.end ? s.set(i.lane, i) : i.end < u.end && l.set(i.lane, !0), l.size === this.options.lanes)
          break;
      }
      return s.size === this.options.lanes ? Array.from(s.values()).sort((r, i) => r.end === i.end ? r.index - i.index : r.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = ra(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (e, n, l, s, r) => (this.pendingMeasuredCacheIndexes = [], {
        count: e,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: s,
        enabled: r
      }),
      {
        key: !1
      }
    ), this.getMeasurements = ra(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: n, scrollMargin: l, getItemKey: s, enabled: r }, i) => {
        var u;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((p) => {
          this.itemSizeCache.set(p.key, p.size);
        }));
        const d = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, d);
        for (let p = d; p < e; p++) {
          let f = (u = this.measurementsCache[p]) == null ? void 0 : u.measureElement;
          f || (f = (E) => {
            const P = s(p), $ = this.elementsCache.get(P);
            if (!E) {
              $ && (this.observer.unobserve($), this.elementsCache.delete(P));
              return;
            }
            $ !== E && ($ && this.observer.unobserve($), this.observer.observe(E), this.elementsCache.set(P, E)), E.isConnected && this.resizeItem(
              p,
              this.options.measureElement(E, void 0, this)
            );
          });
          const v = s(p), g = this.options.lanes === 1 ? c[p - 1] : this.getFurthestMeasurement(c, p), m = g ? g.end + this.options.gap : n + l, S = i.get(v), _ = typeof S == "number" ? S : this.options.estimateSize(p), D = m + _, h = g ? g.lane : p % this.options.lanes;
          c[p] = {
            index: p,
            start: m,
            size: _,
            end: D,
            key: v,
            lane: h,
            measureElement: f
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = ra(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (e, n, l) => this.range = e.length > 0 && n > 0 ? Ec({
        measurements: e,
        outerSize: n,
        scrollOffset: l
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getIndexes = ra(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (e, n, l, s) => n === null ? [] : e({
        startIndex: n.startIndex,
        endIndex: n.endIndex,
        overscan: l,
        count: s
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e) => {
      const n = this.options.indexAttribute, l = e.getAttribute(n);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (e, n) => {
      const l = this.indexFromElement(e), s = this.getMeasurements()[l];
      if (!s || !e.isConnected) {
        this.elementsCache.forEach((i, u) => {
          i === e && (this.observer.unobserve(e), this.elementsCache.delete(u));
        });
        return;
      }
      const r = this.elementsCache.get(s.key);
      r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(s.key, e)), this.resizeItem(l, this.options.measureElement(e, n, this));
    }, this.resizeItem = (e, n) => {
      const l = this.getMeasurements()[e];
      if (!l)
        return;
      const s = this.itemSizeCache.get(l.key) ?? l.size, r = n - s;
      r !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(l, r, this) : l.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", r), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += r,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(l.index), this.itemSizeCache = new Map(this.itemSizeCache.set(l.key, n)), this.notify(!0, !1));
    }, this.measureElement = (e) => {
      e && this._measureElement(e, void 0);
    }, this.getVirtualItems = ra(
      () => [this.getIndexes(), this.getMeasurements()],
      (e, n) => {
        const l = [];
        for (let s = 0, r = e.length; s < r; s++) {
          const i = e[s], u = n[i];
          l.push(u);
        }
        return l;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getIndexes",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return En(
          n[is(
            0,
            n.length - 1,
            (l) => En(n[l]).start,
            e
          )]
        );
    }, this.getOffsetForAlignment = (e, n) => {
      const l = this.getSize(), s = this.getScrollOffset();
      n === "auto" && (e <= s ? n = "start" : e >= s + l ? n = "end" : n = "start"), n === "start" ? e = e : n === "end" ? e = e - l : n === "center" && (e = e - l / 2);
      const r = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[r] : this.scrollElement[r] : 0) - l;
      return Math.max(Math.min(u, e), 0);
    }, this.getOffsetForIndex = (e, n = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const l = this.getMeasurements()[e];
      if (!l)
        return;
      const s = this.getSize(), r = this.getScrollOffset();
      if (n === "auto")
        if (l.end >= r + s - this.options.scrollPaddingEnd)
          n = "end";
        else if (l.start <= r + this.options.scrollPaddingStart)
          n = "start";
        else
          return [r, n];
      const i = n === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(i, n), n];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (e, { align: n = "start", behavior: l } = {}) => {
      this.cancelScrollToIndex(), l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(e, n), {
        adjustments: void 0,
        behavior: l
      });
    }, this.scrollToIndex = (e, { align: n = "auto", behavior: l } = {}) => {
      e = Math.max(0, Math.min(e, this.options.count - 1)), this.cancelScrollToIndex(), l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const s = this.getOffsetForIndex(e, n);
      if (!s) return;
      const [r, i] = s;
      this._scrollToOffset(r, { adjustments: void 0, behavior: l }), l !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(e)
        )) {
          const [d] = En(
            this.getOffsetForIndex(e, i)
          );
          mc(d, this.getScrollOffset()) || this.scrollToIndex(e, { align: i, behavior: l });
        } else
          this.scrollToIndex(e, { align: i, behavior: l });
      }));
    }, this.scrollBy = (e, { behavior: n } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + e, {
        adjustments: void 0,
        behavior: n
      });
    }, this.getTotalSize = () => {
      var e;
      const n = this.getMeasurements();
      let l;
      return n.length === 0 ? l = this.options.paddingStart : l = this.options.lanes === 1 ? ((e = n[n.length - 1]) == null ? void 0 : e.end) ?? 0 : Math.max(
        ...n.slice(-this.options.lanes).map((s) => s.end)
      ), l - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (e, {
      adjustments: n,
      behavior: l
    }) => {
      this.options.scrollToFn(e, { behavior: l, adjustments: n }, this);
    }, this.measure = () => {
      var e, n;
      this.itemSizeCache = /* @__PURE__ */ new Map(), (n = (e = this.options).onChange) == null || n.call(e, this, !1);
    }, this.setOptions(t);
  }
}
const is = (a, t, e, n) => {
  for (; a <= t; ) {
    const l = (a + t) / 2 | 0, s = e(l);
    if (s < n)
      a = l + 1;
    else if (s > n)
      t = l - 1;
    else
      return l;
  }
  return a > 0 ? a - 1 : 0;
};
function Ec({
  measurements: a,
  outerSize: t,
  scrollOffset: e
}) {
  const n = a.length - 1, s = is(0, n, (i) => a[i].start, e);
  let r = s;
  for (; r < n && a[r].end < e + t; )
    r++;
  return { startIndex: s, endIndex: r };
}
function Pc(a) {
  const t = new Sc(o(a)), e = Fn(t), n = t._didMount();
  return ee(
    () => o(a).getScrollElement(),
    (l) => {
      l && t._willUpdate();
    },
    {
      immediate: !0
    }
  ), ee(
    () => o(a),
    (l) => {
      t.setOptions({
        ...l,
        onChange: (s, r) => {
          var i;
          Fo(e), (i = l.onChange) == null || i.call(l, s, r);
        }
      }), t._willUpdate(), Fo(e);
    },
    {
      immediate: !0
    }
  ), dl(n), e;
}
function us(a) {
  return Pc(
    I(() => ({
      observeElementRect: bc,
      observeElementOffset: wc,
      scrollToFn: xc,
      ...o(a)
    }))
  );
}
const Kh = /* @__PURE__ */ w({
  __name: "ListboxVirtualizer",
  props: {
    options: {},
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a) {
    const t = a, e = ja(), n = an(), l = Tl(), { getItems: s } = Jt();
    n.isVirtual.value = !0;
    const r = I(() => {
      const f = l.value;
      if (f) {
        const v = window.getComputedStyle(f);
        return {
          start: Number.parseFloat(v.paddingBlockStart || v.paddingTop),
          end: Number.parseFloat(v.paddingBlockEnd || v.paddingBottom)
        };
      } else
        return { start: 0, end: 0 };
    }), i = us(
      {
        get scrollPaddingStart() {
          return r.value.start;
        },
        get scrollPaddingEnd() {
          return r.value.end;
        },
        get count() {
          return t.options.length;
        },
        get horizontal() {
          return n.orientation.value === "horizontal";
        },
        estimateSize() {
          return t.estimateSize ?? 28;
        },
        getScrollElement() {
          return l.value;
        },
        overscan: 12
      }
    ), u = I(() => i.value.getVirtualItems().map((f) => ({
      item: f,
      is: Nn(e.default({
        option: t.options[f.index]
      })[0], {
        key: `${f.key}`,
        "data-index": f.index,
        "aria-setsize": t.options.length,
        "aria-posinset": f.index + 1,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${f.start}px)`,
          overflowAnchor: "none"
        }
      })
    })));
    n.virtualFocusHook.on((f) => {
      const v = t.options.findIndex((g) => Array.isArray(n.modelValue.value) ? Gt(g, n.modelValue.value[0], n.by) : Gt(g, n.modelValue.value, n.by));
      v !== -1 && (f == null || f.preventDefault(), i.value.scrollToIndex(v, { align: "start" }), requestAnimationFrame(() => {
        const g = uc(l.value);
        g && f && (g == null || g.focus());
      }));
    });
    const d = $t("", 1e3), c = I(() => {
      const f = (v) => t.textContent ? t.textContent(v) : v.toString().toLowerCase();
      return t.options.map((v, g) => ({
        index: g,
        textContent: f(v)
      }));
    });
    function p(f, v) {
      var _, D, h, E;
      if (!((_ = n.firstValue) != null && _.value) || !n.multiple.value || !Array.isArray(n.modelValue.value))
        return;
      const m = (D = s().filter((P) => P.ref.dataset.disabled !== "").find((P) => P.ref === n.highlightedElement.value)) == null ? void 0 : D.value;
      if (!m)
        return;
      let S = null;
      switch (v) {
        case "prev":
        case "next": {
          S = Et(t.options, n.firstValue.value, m);
          break;
        }
        case "first": {
          S = Et(t.options, n.firstValue.value, (h = t.options) == null ? void 0 : h[0]);
          break;
        }
        case "last": {
          S = Et(t.options, n.firstValue.value, (E = t.options) == null ? void 0 : E[t.options.length - 1]);
          break;
        }
      }
      n.modelValue.value = S;
    }
    return n.virtualKeydownHook.on((f) => {
      var S;
      const v = f.altKey || f.ctrlKey || f.metaKey;
      if (f.key === "Tab" && !v)
        return;
      let m = en[f.key];
      if (v && f.key === "a" && n.multiple.value ? (f.preventDefault(), n.modelValue.value = [...t.options], m = "last") : f.shiftKey && m && p(f, m), ["first", "last"].includes(m)) {
        f.preventDefault();
        const _ = m === "first" ? 0 : t.options.length - 1;
        i.value.scrollToIndex(_), requestAnimationFrame(() => {
          const D = s(), h = m === "first" ? D[0] : D[D.length - 1];
          n.onChangeHighlight(h.ref);
        });
      } else if (!m && !v) {
        d.value += f.key;
        const _ = Number((S = document.activeElement) == null ? void 0 : S.getAttribute("data-index")), D = c.value[_].textContent, h = c.value.map(($) => $.textContent), E = Zn(h, d.value, D), P = c.value.find(($) => $.textContent === E);
        P && (i.value.scrollToIndex(P.index, { align: "start" }), requestAnimationFrame(() => {
          const $ = l.value.querySelector(`[data-index="${P.index}"]`);
          $ instanceof HTMLElement && n.onChangeHighlight($);
        }));
      }
    }), (f, v) => (b(), ce("div", {
      "data-radix-vue-virtualizer": "",
      style: ke({
        position: "relative",
        width: "100%",
        height: `${o(i).getTotalSize()}px`
      })
    }, [
      (b(!0), ce(_e, null, ga(u.value, ({ is: g, item: m }) => (b(), x(qe(g), {
        key: m.index
      }))), 128))
    ], 4));
  }
}), [Dc, $c] = Q("ListboxGroup"), Hh = /* @__PURE__ */ w({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ve(void 0, "radix-vue-listbox-group");
    return $c({ id: e }), (n, l) => (b(), x(o(O), M({ role: "group" }, t, { "aria-labelledby": o(e) }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Wh = /* @__PURE__ */ w({
  __name: "ListboxGroupLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = Dc({ id: "" });
    return (n, l) => (b(), x(o(O), M(t, {
      id: o(e).id
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [nn, Ic] = Q("MenubarRoot"), jh = /* @__PURE__ */ w({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), { createCollection: r } = Ve("menubar");
    r(s);
    const i = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), u = T(null), { dir: d, loop: c } = ne(e), p = be(d);
    return Ic({
      modelValue: i,
      dir: p,
      loop: c,
      onMenuOpen: (f) => {
        i.value = f, u.value = f;
      },
      onMenuClose: () => {
        i.value = "";
      },
      onMenuToggle: (f) => {
        i.value = i.value ? "" : f, u.value = f;
      }
    }), (f, v) => (b(), x(o(Mt), {
      "current-tab-stop-id": u.value,
      "onUpdate:currentTabStopId": v[0] || (v[0] = (g) => u.value = g),
      orientation: "horizontal",
      loop: o(c),
      dir: o(p),
      "as-child": ""
    }, {
      default: y(() => [
        q(o(O), {
          ref: o(l),
          role: "menubar"
        }, {
          default: y(() => [
            C(f.$slots, "default", { modelValue: o(i) })
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["current-tab-stop-id", "loop", "dir"]));
  }
}), [So, Bc] = Q("MenubarMenu"), Uh = /* @__PURE__ */ w({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a) {
    const e = ve(a.value), n = nn();
    R();
    const l = T(), s = T(!1), r = I(() => n.modelValue.value === e);
    return ee(r, () => {
      r.value || (s.value = !1);
    }), Bc({
      value: e,
      triggerElement: l,
      triggerId: e,
      contentId: "",
      wasKeyboardTriggerOpenRef: s
    }), (i, u) => (b(), x(o(so), {
      open: r.value,
      modal: !1,
      dir: o(n).dir.value,
      "onUpdate:open": u[0] || (u[0] = (d) => {
        d || o(n).onMenuClose();
      })
    }, {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir"]));
  }
}), Gh = /* @__PURE__ */ w({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = nn(), e = So(), { forwardRef: n, currentElement: l } = R(), s = T(!1), r = I(() => t.modelValue.value === e.value);
    return oe(() => {
      e.triggerElement = l;
    }), (i, u) => (b(), x(o(Vt), {
      "as-child": "",
      focusable: !i.disabled,
      "tab-stop-id": o(e).value
    }, {
      default: y(() => [
        q(o(Qa), { "as-child": "" }, {
          default: y(() => [
            q(o(O), {
              id: o(e).triggerId,
              ref: o(n),
              as: i.as,
              type: i.as === "button" ? "button" : void 0,
              role: "menuitem",
              "aria-haspopup": "menu",
              "aria-expanded": r.value,
              "aria-controls": r.value ? o(e).contentId : void 0,
              "data-highlighted": s.value ? "" : void 0,
              "data-state": r.value ? "open" : "closed",
              "data-disabled": i.disabled ? "" : void 0,
              disabled: i.disabled,
              "data-value": o(e).value,
              "data-radix-vue-collection-item": "",
              onPointerdown: u[0] || (u[0] = (d) => {
                !i.disabled && d.button === 0 && d.ctrlKey === !1 && (o(t).onMenuOpen(o(e).value), r.value || d.preventDefault());
              }),
              onPointerenter: u[1] || (u[1] = () => {
                var c;
                !!o(t).modelValue.value && !r.value && (o(t).onMenuOpen(o(e).value), (c = o(l)) == null || c.focus());
              }),
              onKeydown: u[2] || (u[2] = re((d) => {
                i.disabled || (["Enter", " "].includes(d.key) && o(t).onMenuToggle(o(e).value), d.key === "ArrowDown" && o(t).onMenuOpen(o(e).value), ["Enter", " ", "ArrowDown"].includes(d.key) && (o(e).wasKeyboardTriggerOpenRef.value = !0, d.preventDefault()));
              }, ["enter", "space", "arrow-down"])),
              onFocus: u[3] || (u[3] = (d) => s.value = !0),
              onBlur: u[4] || (u[4] = (d) => s.value = !1)
            }, {
              default: y(() => [
                C(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["id", "as", "type", "aria-expanded", "aria-controls", "data-highlighted", "data-state", "data-disabled", "disabled", "data-value"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["focusable", "tab-stop-id"]));
  }
}), qh = /* @__PURE__ */ w({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(vo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yh = /* @__PURE__ */ w({
  __name: "MenubarContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    R();
    const s = nn(), r = So();
    r.contentId || (r.contentId = ve(void 0, "radix-vue-menubar-content"));
    const { injectCollection: i } = Ve("menubar"), u = i(), d = T(!1);
    function c(p) {
      const v = p.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), m = (s.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === p.key;
      if (!m && v)
        return;
      let _ = u.value.map((E) => E.dataset.value);
      m && _.reverse();
      const D = _.indexOf(r.value);
      _ = s.loop.value ? Xn(_, D + 1) : _.slice(D + 1);
      const [h] = _;
      h && s.onMenuOpen(h);
    }
    return (p, f) => (b(), x(o(po), M(o(l), {
      id: o(r).contentId,
      "data-radix-menubar-content": "",
      "aria-labelledby": o(r).triggerId,
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onCloseAutoFocus: f[0] || (f[0] = (v) => {
        var m;
        !!!o(s).modelValue.value && !d.value && ((m = o(r).triggerElement.value) == null || m.focus()), d.value = !1, v.preventDefault();
      }),
      onFocusOutside: f[1] || (f[1] = (v) => {
        const g = v.target;
        o(u).some((S) => S.contains(g)) && v.preventDefault();
      }),
      onInteractOutside: f[2] || (f[2] = (v) => {
        d.value = !0;
      }),
      onEntryFocus: f[3] || (f[3] = (v) => {
        o(r).wasKeyboardTriggerOpenRef.value || v.preventDefault();
      }),
      onKeydown: re(c, ["arrow-right", "arrow-left"])
    }), {
      default: y(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby"]));
  }
}), Xh = /* @__PURE__ */ w({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(lo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zh = /* @__PURE__ */ w({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    return R(), (s, r) => (b(), x(o(Ea), W(U({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jh = /* @__PURE__ */ w({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(tn), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qh = /* @__PURE__ */ w({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(yo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ey = /* @__PURE__ */ w({
  __name: "MenubarCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    return R(), (s, r) => (b(), x(o(co), W(U({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ty = /* @__PURE__ */ w({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(uo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ay = /* @__PURE__ */ w({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(fo), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ny = /* @__PURE__ */ w({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Ae(t);
    return R(), (s, r) => (b(), x(o(mo), W(U({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oy = /* @__PURE__ */ w({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return R(), (s, r) => (b(), x(o(ho), W(U(o(l))), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ly = /* @__PURE__ */ w({
  __name: "MenubarSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    R();
    const l = ae(e, "open", n, {
      defaultValue: e.defaultOpen ?? !1,
      passive: e.open === void 0
    });
    return (s, r) => (b(), x(o(go), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Ue(l) ? l.value = i : null)
    }, {
      default: y(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), sy = /* @__PURE__ */ w({
  __name: "MenubarSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    R();
    const { injectCollection: s } = Ve("menubar"), r = nn(), i = So(), u = s();
    function d(c) {
      if (c.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let v = u.value.map((S) => S.dataset.value);
      const g = v.indexOf(i.value);
      v = r.loop.value ? Xn(v, g + 1) : v.slice(g + 1);
      const [m] = v;
      m && r.onMenuOpen(m);
    }
    return (c, p) => (b(), x(o(bo), M(o(l), {
      "data-radix-menubar-content": "",
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onKeydown: re(d, ["arrow-right"])
    }), {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ry = /* @__PURE__ */ w({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(Co), M(t, { "data-radix-menubar-subtrigger": "" }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [bt, ds] = Q(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), iy = /* @__PURE__ */ w({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: { default: void 0 },
    defaultValue: {},
    dir: {},
    orientation: { default: "horizontal" },
    delayDuration: { default: 200 },
    skipDelayDuration: { default: 300 },
    disableClickTrigger: { type: Boolean, default: !1 },
    disableHoverTrigger: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), s = T(""), { forwardRef: r, currentElement: i } = R(), u = T(), d = T(), { createCollection: c } = Ve("nav");
    c(u);
    const { delayDuration: p, skipDelayDuration: f, dir: v, disableClickTrigger: g, disableHoverTrigger: m } = ne(e), S = be(v), _ = $t(!1, f), D = I(() => l.value !== "" || _.value ? 150 : p.value), h = Ua((E) => {
      typeof E == "string" && (s.value = l.value, l.value = E);
    }, D);
    return ds({
      isRootMenu: !0,
      modelValue: l,
      previousValue: s,
      baseId: ve(void 0, "radix-navigation-menu"),
      disableClickTrigger: g,
      disableHoverTrigger: m,
      dir: S,
      orientation: e.orientation,
      rootNavigationMenu: i,
      indicatorTrack: u,
      onIndicatorTrackChange: (E) => {
        u.value = E;
      },
      viewport: d,
      onViewportChange: (E) => {
        d.value = E;
      },
      onTriggerEnter: (E) => {
        h(E);
      },
      onTriggerLeave: () => {
        _.value = !0, h("");
      },
      onContentEnter: () => {
        h();
      },
      onContentLeave: () => {
        h("");
      },
      onItemSelect: (E) => {
        s.value = l.value, l.value = E;
      },
      onItemDismiss: () => {
        s.value = l.value, l.value = "";
      }
    }), (E, P) => (b(), x(o(O), {
      ref: o(r),
      "aria-label": "Main",
      as: E.as,
      "as-child": E.asChild,
      "data-orientation": E.orientation,
      dir: o(S)
    }, {
      default: y(() => [
        C(E.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "dir"]));
  }
});
function on(a) {
  return a ? "open" : "closed";
}
function cs(a, t) {
  return `${a}-trigger-${t}`;
}
function Eo(a, t) {
  return `${a}-content-${t}`;
}
const Fa = "navigationMenu.rootContentDismiss";
function On(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
function ps(a) {
  const t = document.activeElement;
  return a.some((e) => e === t ? !0 : (e.focus(), document.activeElement !== t));
}
function Tc(a) {
  return a.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    a.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
function fs(a) {
  return (t) => t.pointerType === "mouse" ? a(t) : void 0;
}
const [Po, Rc] = Q("NavigationMenuItem"), uy = /* @__PURE__ */ w({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(a) {
    const t = a;
    R();
    const { injectCollection: e } = Ve("nav"), n = e(), l = bt(), s = ve(t.value), r = T(), i = T(), u = Eo(l.baseId, s);
    let d = () => ({});
    const c = T(!1);
    async function p(m = "start") {
      const S = document.getElementById(u);
      if (S) {
        d();
        const _ = On(S);
        _.length && ps(m === "start" ? _ : _.reverse());
      }
    }
    function f() {
      const m = document.getElementById(u);
      if (m) {
        const S = On(m);
        S.length && (d = Tc(S));
      }
    }
    Rc({
      value: s,
      contentId: u,
      triggerRef: r,
      focusProxyRef: i,
      wasEscapeCloseRef: c,
      onEntryKeyDown: p,
      onFocusProxyEnter: p,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    function v() {
      var m;
      l.onItemDismiss(), (m = r.value) == null || m.focus();
    }
    function g(m) {
      const S = document.activeElement;
      if (m.keyCode === 32 || m.key === "Enter")
        if (l.modelValue.value === s) {
          v(), m.preventDefault();
          return;
        } else {
          m.target.click(), m.preventDefault();
          return;
        }
      const _ = n.value.filter(
        (h) => {
          var E;
          return (E = h.parentElement) == null ? void 0 : E.hasAttribute("data-menu-item");
        }
      ), D = Bt(m, S, void 0, {
        itemsArray: _,
        loop: !1
      });
      D && (D == null || D.focus()), m.preventDefault(), m.stopPropagation();
    }
    return (m, S) => (b(), x(o(O), {
      "as-child": m.asChild,
      as: m.as,
      "data-menu-item": "",
      onKeydown: re(g, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: y(() => [
        C(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Ac = /* @__PURE__ */ w({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, { injectCollection: l } = Ve("nav"), s = l(), { forwardRef: r, currentElement: i } = R(), u = bt(), d = Po(), c = cs(u.baseId, d.value), p = Eo(u.baseId, d.value), f = T(null), v = I(() => {
      const E = s.value.map((A) => A.id.split("trigger-")[1]);
      u.dir.value === "rtl" && E.reverse();
      const P = E.indexOf(u.modelValue.value), $ = E.indexOf(u.previousValue.value), B = d.value === u.modelValue.value, V = $ === E.indexOf(d.value);
      if (!B && !V)
        return f.value;
      const k = (() => {
        if (P !== $) {
          if (B && $ !== -1)
            return P > $ ? "from-end" : "from-start";
          if (V && P !== -1)
            return P > $ ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = k, k;
    });
    function g(h) {
      var E, P;
      if (n("focusOutside", h), n("interactOutside", h), !h.defaultPrevented) {
        d.onContentFocusOutside();
        const $ = h.target;
        (P = (E = u.rootNavigationMenu) == null ? void 0 : E.value) != null && P.contains($) && h.preventDefault();
      }
    }
    function m(h) {
      var E;
      if (n("pointerDownOutside", h), !h.defaultPrevented) {
        const P = h.target, $ = s.value.some(
          (V) => V.contains(P)
        ), B = u.isRootMenu && ((E = u.viewport.value) == null ? void 0 : E.contains(P));
        ($ || B || !u.isRootMenu) && h.preventDefault();
      }
    }
    ye((h) => {
      const E = i.value;
      if (u.isRootMenu && E) {
        const P = () => {
          var $;
          u.onItemDismiss(), d.onRootContentClose(), E.contains(document.activeElement) && (($ = d.triggerRef.value) == null || $.focus());
        };
        E.addEventListener(Fa, P), h(
          () => E.removeEventListener(Fa, P)
        );
      }
    });
    function S(h) {
      var E, P;
      n("escapeKeyDown", h), h.defaultPrevented || (u.onItemDismiss(), (P = (E = d.triggerRef) == null ? void 0 : E.value) == null || P.focus(), d.wasEscapeCloseRef.value = !0);
    }
    function _(h) {
      var V;
      const E = h.altKey || h.ctrlKey || h.metaKey, P = h.key === "Tab" && !E, $ = On(h.currentTarget);
      if (P) {
        const k = document.activeElement, A = $.findIndex(
          (K) => K === k
        ), H = h.shiftKey ? $.slice(0, A).reverse() : $.slice(A + 1, $.length);
        if (ps(H))
          h.preventDefault();
        else {
          (V = d.focusProxyRef.value) == null || V.focus();
          return;
        }
      }
      const B = Bt(
        h,
        document.activeElement,
        void 0,
        { itemsArray: $, loop: !1, enableIgnoredElement: !0 }
      );
      B == null || B.focus();
    }
    function D() {
      var E;
      const h = new Event(Fa, {
        bubbles: !0,
        cancelable: !0
      });
      (E = i.value) == null || E.dispatchEvent(h);
    }
    return (h, E) => (b(), x(o(gt), M({
      id: o(p),
      ref: o(r),
      "aria-labelledby": o(c),
      "data-motion": v.value,
      "data-state": o(on)(o(u).modelValue.value === o(d).value),
      "data-orientation": o(u).orientation
    }, e, {
      onKeydown: _,
      onEscapeKeyDown: S,
      onPointerDownOutside: m,
      onFocusOutside: g,
      onDismiss: D
    }), {
      default: y(() => [
        C(h.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
  }
}), dy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Ae(n), { forwardRef: s } = R(), r = Ga(), i = bt(), u = Po(), d = I(() => u.value === i.modelValue.value), c = I(() => i.viewport.value && !i.modelValue.value && i.previousValue.value ? i.previousValue.value === u.value : !1);
    return (p, f) => o(r) ? (b(), x(qt, {
      key: 0,
      to: o(i).viewport.value,
      disabled: !o(i).viewport.value
    }, [
      q(o(Pe), {
        present: p.forceMount || d.value || c.value
      }, {
        default: y(() => [
          q(Ac, M({
            ref: o(s),
            "data-state": o(on)(d.value),
            style: {
              pointerEvents: !d.value && o(i).isRootMenu ? "none" : void 0
            }
          }, { ...p.$attrs, ...e, ...o(l) }, {
            onPointerenter: f[0] || (f[0] = (v) => o(i).onContentEnter(o(u).value)),
            onPointerleave: f[1] || (f[1] = (v) => o(fs)(() => o(i).onContentLeave())(v)),
            onPointerDownOutside: f[2] || (f[2] = (v) => n("pointerDownOutside", v)),
            onFocusOutside: f[3] || (f[3] = (v) => n("focusOutside", v)),
            onInteractOutside: f[4] || (f[4] = (v) => n("interactOutside", v))
          }), {
            default: y(() => [
              C(p.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-state", "style"])
        ]),
        _: 3
      }, 8, ["present"])
    ], 8, ["to", "disabled"])) : pe("", !0);
  }
}), cy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), { injectCollection: n } = Ve("nav"), l = n(), s = bt(), r = T(), i = I(() => s.orientation === "horizontal"), u = I(() => !!s.modelValue.value), d = T();
    function c() {
      d.value && (r.value = {
        size: i.value ? d.value.offsetWidth : d.value.offsetHeight,
        offset: i.value ? d.value.offsetLeft : d.value.offsetTop
      });
    }
    return ye(() => {
      if (!s.modelValue.value) {
        r.value = void 0;
        return;
      }
      const p = l.value;
      d.value = p.find(
        (f) => f.id.includes(s.modelValue.value)
      ), c();
    }), Ze(d, c), Ze(s.indicatorTrack, c), (p, f) => o(s).indicatorTrack.value ? (b(), x(qt, {
      key: 0,
      to: o(s).indicatorTrack.value
    }, [
      q(o(Pe), {
        present: p.forceMount || u.value
      }, {
        default: y(() => {
          var v, g, m, S;
          return [
            q(o(O), M({
              ref: o(e),
              "aria-hidden": "",
              "data-state": u.value ? "visible" : "hidden",
              "data-orientation": o(s).orientation,
              "as-child": t.asChild,
              as: p.as,
              style: {
                position: "absolute",
                ...i.value ? {
                  left: 0,
                  width: `${(v = r.value) == null ? void 0 : v.size}px`,
                  transform: `translateX(${(g = r.value) == null ? void 0 : g.offset}px)`
                } : {
                  top: 0,
                  height: `${(m = r.value) == null ? void 0 : m.size}px`,
                  transform: `translateY(${(S = r.value) == null ? void 0 : S.offset}px)`
                }
              }
            }, p.$attrs), {
              default: y(() => [
                C(p.$slots, "default")
              ]),
              _: 3
            }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])
          ];
        }),
        _: 3
      }, 8, ["present"])
    ], 8, ["to"])) : pe("", !0);
  }
}), py = /* @__PURE__ */ w({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    R();
    async function l(s) {
      var r;
      if (n("select", s), await se(), !s.defaultPrevented && !s.metaKey) {
        const i = new CustomEvent(
          Fa,
          {
            bubbles: !0,
            cancelable: !0
          }
        );
        (r = s.target) == null || r.dispatchEvent(i);
      }
    }
    return (s, r) => (b(), x(o(O), {
      as: s.as,
      "data-active": s.active ? "" : void 0,
      "aria-current": s.active ? "page" : void 0,
      "as-child": e.asChild,
      "data-radix-vue-collection-item": "",
      onClick: l
    }, {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
}), fy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(a) {
    const t = a, e = bt(), { forwardRef: n, currentElement: l } = R();
    return oe(() => {
      e.onIndicatorTrackChange(l.value);
    }), (s, r) => (b(), x(o(O), {
      ref: o(n),
      style: { position: "relative" }
    }, {
      default: y(() => [
        q(o(O), M(s.$attrs, {
          "as-child": t.asChild,
          as: s.as,
          "data-orientation": o(e).orientation
        }), {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-orientation"])
      ]),
      _: 3
    }, 512));
  }
}), vy = /* @__PURE__ */ w({
  __name: "NavigationMenuSub",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), s = T(""), r = bt(), { forwardRef: i, currentElement: u } = R(), d = T(), c = T(), { createCollection: p } = Ve("nav");
    return p(d), ds({
      ...r,
      isRootMenu: !1,
      modelValue: l,
      previousValue: s,
      orientation: e.orientation,
      rootNavigationMenu: u,
      indicatorTrack: d,
      onIndicatorTrackChange: (f) => {
        d.value = f;
      },
      viewport: c,
      onViewportChange: (f) => {
        c.value = f;
      },
      onTriggerEnter: (f) => {
        l.value = f;
      },
      onTriggerLeave: () => {
      },
      onContentEnter: () => {
      },
      onContentLeave: () => {
      },
      onItemSelect: (f) => {
        l.value = f;
      },
      onItemDismiss: () => {
        l.value = "";
      }
    }), (f, v) => (b(), x(o(O), {
      ref: o(i),
      "data-orientation": f.orientation,
      "as-child": e.asChild,
      as: f.as
    }, {
      default: y(() => [
        C(f.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["data-orientation", "as-child", "as"]));
  }
}), Oc = ["aria-owns"], my = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = bt(), n = Po(), { forwardRef: l, currentElement: s } = R(), r = T(""), i = T(""), u = $t(!1, 300), d = T(!1), c = I(() => n.value === e.modelValue.value);
    oe(() => {
      n.triggerRef = s, r.value = cs(e.baseId, n.value), i.value = Eo(e.baseId, n.value);
    });
    function p() {
      e.disableHoverTrigger.value || (d.value = !1, n.wasEscapeCloseRef.value = !1);
    }
    function f(D) {
      if (!e.disableHoverTrigger.value && D.pointerType === "mouse") {
        if (t.disabled || d.value || n.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(n.value), u.value = !0;
      }
    }
    function v(D) {
      if (!e.disableHoverTrigger.value && D.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), u.value = !1;
      }
    }
    function g(D) {
      D.pointerType === "mouse" && e.disableClickTrigger.value || u.value || (c.value ? e.onItemSelect("") : e.onItemSelect(n.value), d.value = c.value);
    }
    function m(D) {
      const E = { horizontal: "ArrowDown", vertical: e.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      c.value && D.key === E && (n.onEntryKeyDown(), D.preventDefault(), D.stopPropagation());
    }
    function S(D) {
      n.focusProxyRef.value = Be(D);
    }
    function _(D) {
      const h = document.getElementById(n.contentId), E = D.relatedTarget, P = E === s.value, $ = h == null ? void 0 : h.contains(E);
      (P || !$) && n.onFocusProxyEnter(P ? "start" : "end");
    }
    return (D, h) => (b(), ce(_e, null, [
      q(o(O), M({
        id: r.value,
        ref: o(l),
        disabled: D.disabled,
        "data-disabled": D.disabled ? "" : void 0,
        "data-state": o(on)(c.value),
        "aria-expanded": c.value,
        "aria-controls": i.value,
        "as-child": t.asChild,
        as: D.as
      }, D.$attrs, {
        "data-radix-vue-collection-item": "",
        onPointerenter: p,
        onPointermove: f,
        onPointerleave: v,
        onClick: g,
        onKeydown: m
      }), {
        default: y(() => [
          C(D.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
      c.value ? (b(), ce(_e, { key: 0 }, [
        q(o(ta), {
          ref: S,
          "aria-hidden": "",
          tabindex: 0,
          onFocus: _
        }),
        o(e).viewport ? (b(), ce("span", {
          key: 0,
          "aria-owns": i.value
        }, null, 8, Oc)) : pe("", !0)
      ], 64)) : pe("", !0)
    ], 64));
  }
}), hy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = bt(), l = T(), s = I(() => !!n.modelValue.value), r = I(() => n.modelValue.value);
    ee(e, () => {
      e.value && n.onViewportChange(e.value);
    });
    const i = T();
    return ee([r, s], async () => {
      var d, c;
      if (await se(), !e.value)
        return;
      const u = (c = (d = e.value.querySelector("[data-state=open]")) == null ? void 0 : d.children) == null ? void 0 : c[0];
      i.value = u;
    }, { immediate: !0 }), Ze(i, () => {
      i.value && (l.value = {
        width: i.value.offsetWidth,
        height: i.value.offsetHeight
      });
    }), (u, d) => (b(), x(o(Pe), {
      present: u.forceMount || s.value
    }, {
      default: y(() => {
        var c, p;
        return [
          q(o(O), M(u.$attrs, {
            ref: o(t),
            as: u.as,
            "as-child": u.asChild,
            "data-state": o(on)(s.value),
            "data-orientation": o(n).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && o(n).isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": l.value ? `${(c = l.value) == null ? void 0 : c.width}px` : void 0,
              "--radix-navigation-menu-viewport-height": l.value ? `${(p = l.value) == null ? void 0 : p.height}px` : void 0
            },
            onPointerenter: d[0] || (d[0] = (f) => o(n).onContentEnter(o(n).modelValue.value)),
            onPointerleave: d[1] || (d[1] = (f) => o(fs)(() => o(n).onContentLeave())(f))
          }), {
            default: y(() => [
              C(u.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child", "data-state", "data-orientation", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function vs(a) {
  const { disabled: t } = a, e = T(), n = pa(), l = () => window.clearTimeout(e.value), s = (f) => {
    l(), !t.value && (n.trigger(), e.value = window.setTimeout(() => {
      s(60);
    }, f));
  }, r = () => {
    s(400);
  }, i = () => {
    l();
  }, u = T(!1), d = I(() => Be(a.target) || window), c = (f) => {
    f.button !== 0 || u.value || (f.preventDefault(), u.value = !0, r());
  }, p = () => {
    u.value = !1, i();
  };
  return ze(d, "pointerdown", c), window && (ze(window, "pointerup", p), ze(window, "pointercancel", p)), {
    isPressed: u,
    onTrigger: n.on
  };
}
function Zo(a, t = T({})) {
  return Sl(() => new Or(a.value, t.value));
}
function kc(a, t = T({})) {
  return Sl(() => new kr(a.value, t.value));
}
function Jo(a, t, e) {
  let n = a === "+" ? t + e : t - e;
  if (t % 1 !== 0 || e % 1 !== 0) {
    const l = t.toString().split("."), s = e.toString().split("."), r = l[1] && l[1].length || 0, i = s[1] && s[1].length || 0, u = 10 ** Math.max(r, i);
    t = Math.round(t * u), e = Math.round(e * u), n = a === "+" ? t + e : t - e, n /= u;
  }
  return n;
}
const Mc = ["value", "name", "disabled", "required"], [Do, Vc] = Q("NumberFieldRoot"), yy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NumberFieldRoot",
  props: {
    defaultValue: { default: void 0 },
    modelValue: {},
    min: {},
    max: {},
    step: { default: 1 },
    formatOptions: {},
    locale: { default: "en-US" },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { disabled: l, min: s, max: r, step: i, locale: u, formatOptions: d, id: c } = ne(e), p = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), { primitiveElement: f, currentElement: v } = Oe(), g = Qe(v), m = T(), S = I(
      () => K(p.value) === s.value || (s.value && !isNaN(p.value) ? Jo("-", p.value, i.value) < s.value : !1)
    ), _ = I(
      () => K(p.value) === r.value || (r.value && !isNaN(p.value) ? Jo("+", p.value, i.value) > r.value : !1)
    );
    function D(N, F = 1) {
      var z;
      const j = B.parse(((z = m.value) == null ? void 0 : z.value) ?? "");
      e.disabled || (isNaN(j) ? p.value = s.value ?? 0 : N === "increase" ? p.value = K(j + (i.value ?? 1) * F) : p.value = K(j - (i.value ?? 1) * F));
    }
    function h(N = 1) {
      D("increase", N);
    }
    function E(N = 1) {
      D("decrease", N);
    }
    function P(N) {
      N === "min" && s.value !== void 0 ? p.value = K(s.value) : N === "max" && r.value !== void 0 && (p.value = K(r.value));
    }
    const $ = Zo(u, d), B = kc(u, d), V = I(() => $.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), k = Zo(u, d), A = I(() => isNaN(p.value) ? "" : k.format(p.value));
    function L(N) {
      return B.isValidPartialNumber(N, s.value, r.value);
    }
    function H(N) {
      m.value && (m.value.value = N);
    }
    function K(N) {
      let F;
      return i.value === void 0 || isNaN(i.value) ? F = Ut(N, s.value, r.value) : F = Mr(N, s.value, r.value, i.value), F = B.parse($.format(F)), F;
    }
    function X(N) {
      const F = B.parse(N);
      return p.value = K(F), N.length ? (isNaN(F), H(A.value)) : H(N);
    }
    return Vc({
      modelValue: p,
      handleDecrease: E,
      handleIncrease: h,
      handleMinMaxValue: P,
      inputMode: V,
      inputEl: m,
      onInputElement: (N) => m.value = N,
      textValue: A,
      validate: L,
      applyInputValue: X,
      disabled: l,
      max: r,
      min: s,
      isDecreaseDisabled: S,
      isIncreaseDisabled: _,
      id: c
    }), (N, F) => (b(), ce(_e, null, [
      q(o(O), M(N.$attrs, {
        ref_key: "primitiveElement",
        ref: f,
        role: "group",
        as: N.as,
        "as-child": N.asChild
      }), {
        default: y(() => [
          C(N.$slots, "default", {
            modelValue: o(p),
            textValue: A.value
          })
        ]),
        _: 3
      }, 16, ["as", "as-child"]),
      o(g) ? (b(), ce("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o(p),
        name: e.name,
        disabled: e.disabled,
        required: e.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Mc)) : pe("", !0)
    ], 64));
  }
}), gy = /* @__PURE__ */ w({
  __name: "NumberFieldInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: n } = Oe(), l = Do();
    function s(r) {
      r.target === document.activeElement && (Math.abs(r.deltaY) <= Math.abs(r.deltaX) || (r.preventDefault(), r.deltaY > 0 ? l.handleIncrease() : r.deltaY < 0 && l.handleDecrease()));
    }
    return oe(() => {
      l.onInputElement(n.value);
    }), (r, i) => (b(), x(o(O), M(t, {
      id: o(l).id.value,
      ref_key: "primitiveElement",
      ref: e,
      role: "spinbutton",
      type: "text",
      tabindex: "0",
      value: o(l).textValue.value,
      inputmode: o(l).inputMode.value,
      disabled: o(l).disabled.value ? "" : void 0,
      "data-disabled": o(l).disabled.value ? "" : void 0,
      autocomplete: "off",
      autocorrect: "off",
      spellcheck: "false",
      "aria-roledescription": "Number field",
      "aria-valuenow": o(l).modelValue.value,
      "aria-valuemin": o(l).min.value,
      "aria-valuemax": o(l).max.value,
      onKeydown: [
        i[0] || (i[0] = re(ie((u) => o(l).handleIncrease(), ["prevent"]), ["up"])),
        i[1] || (i[1] = re(ie((u) => o(l).handleDecrease(), ["prevent"]), ["down"])),
        i[2] || (i[2] = re(ie((u) => o(l).handleIncrease(10), ["prevent"]), ["page-up"])),
        i[3] || (i[3] = re(ie((u) => o(l).handleDecrease(10), ["prevent"]), ["page-down"])),
        i[4] || (i[4] = re(ie((u) => o(l).handleMinMaxValue("min"), ["prevent"]), ["home"])),
        i[5] || (i[5] = re(ie((u) => o(l).handleMinMaxValue("max"), ["prevent"]), ["end"]))
      ],
      onWheel: s,
      onBeforeinput: i[6] || (i[6] = (u) => {
        const d = u.target;
        let c = d.value.slice(0, d.selectionStart ?? void 0) + (u.data ?? "") + d.value.slice(d.selectionEnd ?? void 0);
        o(l).validate(c) || u.preventDefault();
      }),
      onBlur: i[7] || (i[7] = (u) => {
        var d;
        return o(l).applyInputValue((d = u.target) == null ? void 0 : d.value);
      })
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "value", "inputmode", "disabled", "data-disabled", "aria-valuenow", "aria-valuemin", "aria-valuemax"]));
  }
}), by = /* @__PURE__ */ w({
  __name: "NumberFieldIncrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Do(), n = I(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isIncreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Oe(), { isPressed: r, onTrigger: i } = vs({ target: s, disabled: n });
    return i(() => {
      e.handleIncrease();
    }), (u, d) => (b(), x(o(O), M(t, {
      ref_key: "primitiveElement",
      ref: l,
      tabindex: "-1",
      "aria-label": "Increase",
      type: u.as === "button" ? "button" : void 0,
      style: {
        userSelect: o(r) ? "none" : void 0
      },
      disabled: n.value ? "" : void 0,
      "data-disabled": n.value ? "" : void 0,
      "data-pressed": o(r) ? "true" : void 0,
      onContextmenu: d[0] || (d[0] = ie(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
}), Cy = /* @__PURE__ */ w({
  __name: "NumberFieldDecrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Do(), n = I(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isDecreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Oe(), { isPressed: r, onTrigger: i } = vs({ target: s, disabled: n });
    return i(() => {
      e.handleDecrease();
    }), (u, d) => (b(), x(o(O), M(t, {
      ref_key: "primitiveElement",
      ref: l,
      tabindex: "-1",
      "aria-label": "Decrease",
      type: u.as === "button" ? "button" : void 0,
      style: {
        userSelect: o(r) ? "none" : void 0
      },
      disabled: n.value ? "" : void 0,
      "data-disabled": n.value ? "" : void 0,
      "data-pressed": o(r) ? "true" : void 0,
      onContextmenu: d[0] || (d[0] = ie(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
}), [na, Fc] = Q("PaginationRoot"), wy = /* @__PURE__ */ w({
  __name: "PaginationRoot",
  props: {
    page: {},
    defaultPage: { default: 1 },
    itemsPerPage: { default: 10 },
    total: { default: 0 },
    siblingCount: { default: 2 },
    disabled: { type: Boolean },
    showEdges: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:page"],
  setup(a, { emit: t }) {
    const e = a, n = t, { siblingCount: l, disabled: s, showEdges: r } = ne(e);
    R();
    const i = ae(e, "page", n, {
      defaultValue: e.defaultPage,
      passive: e.page === void 0
    }), u = I(() => Math.max(1, Math.ceil(e.total / e.itemsPerPage)));
    return Fc({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: l,
      disabled: s,
      showEdges: r
    }), (d, c) => (b(), x(o(O), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: y(() => [
        C(d.$slots, "default", {
          page: o(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), _y = /* @__PURE__ */ w({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(O), M(t, { "data-type": "ellipsis" }), {
      default: y(() => [
        C(e.$slots, "default", {}, () => [
          me("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), xy = /* @__PURE__ */ w({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = na();
    return R(), (n, l) => (b(), x(o(O), M(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === 1 || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(1))
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          me("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Sy = /* @__PURE__ */ w({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = na();
    return R(), (n, l) => (b(), x(o(O), M(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === o(e).pageCount.value || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(o(e).pageCount.value))
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          me("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function rt(a, t) {
  const e = t - a + 1;
  return Array.from({ length: e }, (n, l) => l + a);
}
function Lc(a) {
  return a.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Ra = "ellipsis";
function Nc(a, t, e, n) {
  const s = t, r = Math.max(a - e, 1), i = Math.min(a + e, s);
  if (n) {
    const d = Math.min(2 * e + 5, t) - 2, c = r > 3 && Math.abs(s - d - 1 + 1) > 2 && Math.abs(r - 1) > 2, p = i < s - 2 && Math.abs(s - d) > 2 && Math.abs(s - i) > 2;
    if (!c && p)
      return [...rt(1, d), Ra, s];
    if (c && !p) {
      const v = rt(s - d + 1, s);
      return [1, Ra, ...v];
    }
    if (c && p) {
      const v = rt(r, i);
      return [1, Ra, ...v, Ra, s];
    }
    return rt(1, s);
  } else {
    const u = e * 2 + 1;
    return t < u ? rt(1, s) : a <= e + 1 ? rt(1, u) : t - a <= e ? rt(t - u + 1, s) : rt(r, i);
  }
}
const Ey = /* @__PURE__ */ w({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = na(), n = I(() => Lc(
      Nc(
        e.page.value,
        e.pageCount.value,
        e.siblingCount.value,
        e.showEdges.value
      )
    ));
    return (l, s) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(l.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), Py = /* @__PURE__ */ w({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = na(), n = I(() => e.page.value === t.value);
    return (l, s) => (b(), x(o(O), M(t, {
      "data-type": "page",
      "aria-label": `Page ${l.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: o(e).disabled.value,
      type: l.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (r) => o(e).onPageChange(l.value))
    }), {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          me(De(l.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Dy = /* @__PURE__ */ w({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = na();
    return (n, l) => (b(), x(o(O), M(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === o(e).pageCount.value || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(o(e).page.value + 1))
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          me("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), $y = /* @__PURE__ */ w({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = na();
    return (n, l) => {
      var s;
      return b(), x(o(O), M(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: o(e).page.value === 1 || ((s = o(e).disabled) == null ? void 0 : s.value),
        onClick: l[0] || (l[0] = (r) => o(e).onPageChange(o(e).page.value - 1))
      }), {
        default: y(() => [
          C(n.$slots, "default", {}, () => [
            me("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), zc = ["id", "value", "name", "disabled", "required"], [Kc, Hc] = Q("PinInputRoot"), Iy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PinInputRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "" },
    mask: { type: Boolean },
    otp: { type: Boolean },
    type: { default: "text" },
    dir: {},
    name: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    id: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "complete"],
  setup(a, { emit: t }) {
    const e = a, n = t, { mask: l, otp: s, placeholder: r, type: i, disabled: u, dir: d } = ne(e), { forwardRef: c } = R(), p = be(d), f = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? [],
      passive: e.modelValue === void 0
    }), v = T(/* @__PURE__ */ new Set());
    function g(S) {
      v.value.add(S);
    }
    const m = I(() => f.value.filter((_) => !!_).length === v.value.size);
    return ee(f, () => {
      m.value && n("complete", f.value);
    }, { deep: !0 }), Hc({
      modelValue: f,
      mask: l,
      otp: s,
      placeholder: r,
      type: i,
      dir: p,
      disabled: u,
      isCompleted: m,
      inputElements: v,
      onInputElementChange: g
    }), (S, _) => (b(), ce(_e, null, [
      q(o(O), M(S.$attrs, {
        ref: o(c),
        dir: o(p),
        "data-complete": m.value ? "" : void 0,
        "data-disabled": o(u) ? "" : void 0
      }), {
        default: y(() => [
          C(S.$slots, "default", { modelValue: o(f) })
        ]),
        _: 3
      }, 16, ["dir", "data-complete", "data-disabled"]),
      Ge("input", {
        id: S.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o(f).join(""),
        name: S.name,
        disabled: o(u),
        required: S.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        },
        onFocus: _[0] || (_[0] = (D) => {
          var h, E;
          return (E = (h = Array.from(v.value)) == null ? void 0 : h[0]) == null ? void 0 : E.focus();
        })
      }, null, 40, zc)
    ], 64));
  }
}), Wc = ["autocomplete", "type", "inputmode", "pattern", "placeholder", "value", "disabled", "data-disabled", "data-complete", "aria-label"], By = /* @__PURE__ */ w({
  __name: "PinInputInput",
  props: {
    index: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = Kc(), n = I(() => Array.from(e.inputElements.value)), l = I(() => t.disabled || e.disabled.value), s = I(() => e.otp.value), r = I(() => e.type.value === "number"), i = I(() => e.mask.value), u = T();
    function d(h) {
      var $;
      const E = h.target;
      if (((($ = h.data) == null ? void 0 : $.length) ?? 0) > 1) {
        S(E.value);
        return;
      }
      if (r.value && !/^\d*$/.test(E.value)) {
        E.value = E.value.replace(/\D/g, "");
        return;
      }
      E.value = E.value.slice(-1), D(t.index, E.value);
      const P = n.value[t.index + 1];
      P && P.focus();
    }
    function c(h) {
      Bt(h, document.activeElement, void 0, {
        itemsArray: n.value,
        focus: !0,
        loop: !1,
        arrowKeyOptions: "horizontal",
        dir: e.dir.value
      });
    }
    function p(h) {
      if (h.preventDefault(), h.target.value)
        D(t.index, "");
      else {
        const $ = n.value[t.index - 1];
        $ && ($.focus(), D(t.index - 1, ""));
      }
    }
    function f(h) {
      h.key === "Delete" && (h.preventDefault(), D(t.index, ""));
    }
    function v(h) {
      const E = h.target;
      E.setSelectionRange(1, 1), E.value || (E.placeholder = "");
    }
    function g(h) {
      const E = h.target;
      se(() => {
        E.value || (E.placeholder = e.placeholder.value);
      });
    }
    function m(h) {
      h.preventDefault();
      const E = h.clipboardData;
      if (!E)
        return;
      const P = E.getData("text");
      S(P);
    }
    function S(h) {
      var B;
      const E = [...e.modelValue.value], P = h.length >= n.value.length ? 0 : t.index, $ = Math.min(P + h.length, n.value.length);
      for (let V = P; V < $; V++) {
        const k = n.value[V], A = h[V - P];
        r.value && !/^\d*$/.test(A) || (E[V] = A, k.focus());
      }
      e.modelValue.value = E, (B = n.value[$]) == null || B.focus();
    }
    function _(h) {
      let E = h.length - 1;
      for (; E >= 0 && h[E] === ""; )
        h.pop(), E--;
      return h;
    }
    function D(h, E) {
      const P = [...e.modelValue.value];
      P[h] = E, e.modelValue.value = _(P);
    }
    return oe(() => {
      e.onInputElementChange(u.value);
    }), Te(() => {
      var h;
      (h = e.inputElements) == null || h.value.delete(u.value);
    }), (h, E) => (b(), ce("input", {
      ref_key: "inputRef",
      ref: u,
      autocapitalize: "none",
      autocomplete: s.value ? "one-time-code" : "false",
      type: i.value ? "password" : "text",
      inputmode: r.value ? "numeric" : "text",
      pattern: r.value ? "[0-9]*" : void 0,
      placeholder: o(e).placeholder.value,
      value: o(e).modelValue.value.at(h.index),
      disabled: l.value,
      "data-disabled": l.value ? "" : void 0,
      "data-complete": o(e).isCompleted.value ? "" : void 0,
      "aria-label": `pin input ${h.index + 1} of ${n.value.length}`,
      onInput: E[0] || (E[0] = (P) => d(P)),
      onKeydown: [
        re(c, ["left", "right", "up", "down", "home", "end"]),
        re(p, ["backspace"]),
        re(f, ["delete"])
      ],
      onFocus: v,
      onBlur: g,
      onPaste: m
    }, null, 40, Wc));
  }
}), [Lt, jc] = Q("PopoverRoot"), ms = /* @__PURE__ */ w({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { modal: l } = ne(e), s = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = T(), i = T(!1);
    return jc({
      contentId: "",
      modal: l,
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: r,
      hasCustomAnchor: i
    }), (u, d) => (b(), x(o(At), null, {
      default: y(() => [
        C(u.$slots, "default", { open: o(s) })
      ]),
      _: 3
    }));
  }
}), hs = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Lt(), { forwardRef: n, currentElement: l } = R();
    return oe(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (b(), x(qe(o(e).hasCustomAnchor.value ? o(O) : o(Ot)), { "as-child": "" }, {
      default: y(() => [
        q(o(O), {
          ref: o(n),
          type: s.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": o(e).open.value,
          "aria-controls": o(e).contentId,
          "data-state": o(e).open.value ? "open" : "closed",
          as: s.as,
          "as-child": t.asChild,
          onClick: o(e).onOpenToggle
        }, {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), ys = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gs = /* @__PURE__ */ w({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Tt(e), { forwardRef: s } = R(), r = Lt();
    return Yn(), (i, u) => (b(), x(o(Za), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: y(() => [
        q(o(gt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => o(r).onOpenChange(!1))
        }, {
          default: y(() => [
            q(o(Dt), M(o(l), {
              id: o(r).contentId,
              ref: o(s),
              "data-state": o(r).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: y(() => [
                C(i.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Uc = /* @__PURE__ */ w({
  __name: "PopoverContentModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Lt(), s = T(!1);
    Ca(!0);
    const r = xe(e, n), { forwardRef: i, currentElement: u } = R();
    return wa(u), (d, c) => (b(), x(gs, M(o(r), {
      ref: o(i),
      "trap-focus": o(l).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = ie(
        (p) => {
          var f;
          n("closeAutoFocus", p), s.value || (f = o(l).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const f = p.detail.originalEvent, v = f.button === 0 && f.ctrlKey === !0, g = f.button === 2 || v;
        s.value = g;
      }),
      onFocusOutside: c[2] || (c[2] = ie(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Gc = /* @__PURE__ */ w({
  __name: "PopoverContentNonModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Lt(), s = T(!1), r = T(!1), i = xe(e, n);
    return (u, d) => (b(), x(gs, M(o(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (s.value || (p = o(l).triggerElement.value) == null || p.focus(), c.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var v;
        n("interactOutside", c), c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const p = c.target;
        ((v = o(l).triggerElement.value) == null ? void 0 : v.contains(p)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bs = /* @__PURE__ */ w({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Lt(), s = xe(e, n), { forwardRef: r } = R();
    return l.contentId || (l.contentId = ve(void 0, "radix-vue-popover-content")), (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: y(() => [
        o(l).modal.value ? (b(), x(Uc, M({ key: 0 }, o(s), { ref: o(r) }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), x(Gc, M({ key: 1 }, o(s), { ref: o(r) }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Cs = /* @__PURE__ */ w({
  __name: "PopoverArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(ea), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ws = /* @__PURE__ */ w({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Lt();
    return (n, l) => (b(), x(o(O), {
      type: n.as === "button" ? "button" : void 0,
      as: n.as,
      "as-child": t.asChild,
      onClick: l[0] || (l[0] = (s) => o(e).onOpenChange(!1))
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child"]));
  }
}), _s = /* @__PURE__ */ w({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = Lt();
    return ml(() => {
      e.hasCustomAnchor.value = !0;
    }), Te(() => {
      e.hasCustomAnchor.value = !1;
    }), (n, l) => (b(), x(o(Ot), W(U(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), va = 100, [qc, Yc] = Q("ProgressRoot"), $o = (a) => typeof a == "number";
function Xc(a, t) {
  return Ht(a) || $o(a) && !Number.isNaN(a) && a <= t && a >= 0 ? a : (console.error(`Invalid prop \`value\` of value \`${a}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${va} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Zc(a) {
  return $o(a) && !Number.isNaN(a) && a > 0 ? a : (console.error(
    `Invalid prop \`max\` of value \`${a}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${va}\`.`
  ), va);
}
const Ty = /* @__PURE__ */ w({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: va },
    getValueLabel: { type: Function, default: (a, t) => `${Math.round(a / t * va)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    R();
    const l = ae(e, "modelValue", n, {
      passive: e.modelValue === void 0
    }), s = ae(e, "max", n, {
      passive: e.max === void 0
    });
    ee(
      () => l.value,
      async (i) => {
        const u = Xc(i, e.max);
        u !== i && (await se(), l.value = u);
      },
      { immediate: !0 }
    ), ee(
      () => e.max,
      (i) => {
        const u = Zc(e.max);
        u !== i && (s.value = u);
      },
      { immediate: !0 }
    );
    const r = I(() => Ht(l.value) ? "indeterminate" : l.value === s.value ? "complete" : "loading");
    return Yc({
      modelValue: l,
      max: s,
      progressState: r
    }), (i, u) => (b(), x(o(O), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": o(s),
      "aria-valuemin": 0,
      "aria-valuenow": $o(o(l)) ? o(l) : void 0,
      "aria-valuetext": i.getValueLabel(o(l), o(s)),
      "aria-label": i.getValueLabel(o(l), o(s)),
      role: "progressbar",
      "data-state": r.value,
      "data-value": o(l) ?? void 0,
      "data-max": o(s)
    }, {
      default: y(() => [
        C(i.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), Ry = /* @__PURE__ */ w({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = qc();
    return R(), (n, l) => {
      var s;
      return b(), x(o(O), M(t, {
        "data-state": o(e).progressState.value,
        "data-value": ((s = o(e).modelValue) == null ? void 0 : s.value) ?? void 0,
        "data-max": o(e).max.value
      }), {
        default: y(() => [
          C(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), [Jc, Qc] = Q("RadioGroupRoot"), Ay = /* @__PURE__ */ w({
  __name: "RadioGroupRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean, default: !1 },
    name: {},
    required: { type: Boolean, default: !1 },
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l } = R(), s = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), { disabled: r, loop: i, orientation: u, name: d, required: c, dir: p } = ne(e), f = be(p);
    return Qc({
      modelValue: s,
      changeModelValue: (v) => {
        s.value = v;
      },
      disabled: r,
      loop: i,
      orientation: u,
      name: d == null ? void 0 : d.value,
      required: c
    }), (v, g) => (b(), x(o(Mt), {
      "as-child": "",
      orientation: o(u),
      dir: o(f),
      loop: o(i)
    }, {
      default: y(() => [
        q(o(O), {
          ref: o(l),
          role: "radiogroup",
          "data-disabled": o(r) ? "" : void 0,
          "as-child": v.asChild,
          as: v.as,
          required: o(c),
          "aria-orientation": o(u),
          "aria-required": o(c),
          dir: o(f),
          name: o(d)
        }, {
          default: y(() => [
            C(v.$slots, "default", { modelValue: o(s) })
          ]),
          _: 3
        }, 8, ["data-disabled", "as-child", "as", "required", "aria-orientation", "aria-required", "dir", "name"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), ep = ["value", "checked", "name", "disabled", "required"], tp = /* @__PURE__ */ w({
  __name: "Radio",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "checked", t, {
      passive: e.checked === void 0
    }), { value: s } = ne(e), { forwardRef: r, currentElement: i } = R(), u = Qe(i), d = I(() => {
      var p;
      return e.id && i.value ? ((p = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : p.innerText) ?? e.value : void 0;
    });
    function c(p) {
      l.value = !0, u.value && p.stopPropagation();
    }
    return (p, f) => (b(), x(o(O), M(p.$attrs, {
      id: p.id,
      ref: o(r),
      role: "radio",
      type: p.as === "button" ? "button" : void 0,
      as: p.as,
      "aria-checked": o(l),
      "aria-label": d.value,
      "as-child": p.asChild,
      disabled: p.disabled ? "" : void 0,
      "data-state": o(l) ? "checked" : "unchecked",
      "data-disabled": p.disabled ? "" : void 0,
      value: o(s),
      required: p.required,
      name: p.name,
      onClick: ie(c, ["stop"])
    }), {
      default: y(() => [
        C(p.$slots, "default", { checked: o(l) }),
        o(u) ? (b(), ce("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "",
          value: o(s),
          checked: !!o(l),
          name: p.name,
          disabled: p.disabled,
          required: p.required,
          style: {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }
        }, null, 8, ep)) : pe("", !0)
      ]),
      _: 3
    }, 16, ["id", "type", "as", "aria-checked", "aria-label", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]));
  }
}), [ap, np] = Q("RadioGroupItem"), Oy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "RadioGroupItem",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = R(), l = Jc(), s = I(() => l.disabled.value || t.disabled), r = I(() => l.required.value || t.required), i = I(() => {
      var p;
      return ((p = l.modelValue) == null ? void 0 : p.value) === t.value;
    });
    np({ disabled: s, checked: i });
    const u = T(!1), d = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    ze("keydown", (p) => {
      d.includes(p.key) && (u.value = !0);
    }), ze("keyup", () => {
      u.value = !1;
    });
    function c() {
      setTimeout(() => {
        var p;
        u.value && ((p = n.value) == null || p.click());
      }, 0);
    }
    return (p, f) => (b(), x(o(Vt), {
      checked: i.value,
      disabled: s.value,
      "as-child": "",
      focusable: !s.value,
      active: i.value
    }, {
      default: y(() => [
        q(tp, M({ ...p.$attrs, ...t }, {
          ref: o(e),
          checked: i.value,
          required: r.value,
          disabled: s.value,
          "onUpdate:checked": f[0] || (f[0] = (v) => o(l).changeModelValue(p.value)),
          onKeydown: f[1] || (f[1] = re(ie(() => {
          }, ["prevent"]), ["enter"])),
          onFocus: c
        }), {
          default: y(() => [
            C(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["checked", "required", "disabled"])
      ]),
      _: 3
    }, 8, ["checked", "disabled", "focusable", "active"]));
  }
}), ky = /* @__PURE__ */ w({
  __name: "RadioGroupIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t } = R(), e = ap();
    return (n, l) => (b(), x(o(Pe), {
      present: n.forceMount || o(e).checked.value
    }, {
      default: y(() => [
        q(o(O), M({
          ref: o(t),
          "data-state": o(e).checked.value ? "checked" : "unchecked",
          "data-disabled": o(e).disabled.value ? "" : void 0,
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function op(a) {
  const t = I(() => a.start.value ? !!a.isDateDisabled(a.start.value) : !1), e = I(() => a.end.value ? !!a.isDateDisabled(a.end.value) : !1), n = I(
    () => t.value || e.value ? !1 : !!(a.start.value && a.end.value && Me(a.end.value, a.start.value))
  ), l = (c) => a.start.value ? Re(a.start.value, c) : !1, s = (c) => a.end.value ? Re(a.end.value, c) : !1, r = (c) => a.start.value && Re(a.start.value, c) || a.end.value && Re(a.end.value, c) ? !0 : a.end.value && a.start.value ? Sr(c, a.start.value, a.end.value) : !1, i = I(() => {
    if (a.start.value && a.end.value || !a.start.value || !a.focusedValue.value)
      return null;
    const c = Me(a.start.value, a.focusedValue.value), p = c ? a.start.value : a.focusedValue.value, f = c ? a.focusedValue.value : a.start.value;
    return Re(p.add({ days: 1 }), f) ? {
      start: p,
      end: f
    } : bl(p, f, a.isDateUnavailable, a.isDateDisabled) ? {
      start: p,
      end: f
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: r,
    highlightedRange: i,
    isSelectionStart: l,
    isSelectionEnd: s,
    isHighlightedStart: (c) => !i.value || !i.value.start ? !1 : Re(i.value.start, c),
    isHighlightedEnd: (c) => !i.value || !i.value.end ? !1 : Re(i.value.end, c)
  };
}
const lp = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, sp = {
  role: "heading",
  "aria-level": "2"
}, [oa, rp] = Q("RangeCalendarRoot"), ip = /* @__PURE__ */ w({
  __name: "RangeCalendarRoot",
  props: {
    defaultPlaceholder: {},
    defaultValue: { default: () => ({ start: void 0, end: void 0 }) },
    modelValue: {},
    placeholder: { default: void 0 },
    pagedNavigation: { type: Boolean, default: !1 },
    preventDeselect: { type: Boolean, default: !1 },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    calendarLabel: {},
    fixedWeeks: { type: Boolean, default: !1 },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    numberOfMonths: { default: 1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    initialFocus: { type: Boolean, default: !1 },
    isDateDisabled: { type: Function, default: void 0 },
    isDateUnavailable: { type: Function, default: void 0 },
    dir: {},
    nextPage: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "update:placeholder", "update:startValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, {
      disabled: l,
      readonly: s,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateUnavailable: v,
      isDateDisabled: g,
      calendarLabel: m,
      maxValue: S,
      minValue: _,
      locale: D,
      dir: h,
      nextPage: E,
      prevPage: P
    } = ne(e), { primitiveElement: $, currentElement: B } = Oe(), V = be(h), k = T(), A = T(), L = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), H = Yt({
      defaultPlaceholder: e.placeholder,
      defaultValue: L.value.start
    }), K = T(L.value.start), X = T(L.value.end), N = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? H.copy(),
      passive: e.placeholder === void 0
    });
    function F(we) {
      N.value = we.copy();
    }
    const {
      fullCalendarLabel: j,
      headingValue: z,
      isDateDisabled: Z,
      isDateUnavailable: G,
      isNextButtonDisabled: J,
      isPrevButtonDisabled: te,
      grid: fe,
      weekdays: Y,
      isOutsideVisibleView: le,
      nextPage: he,
      prevPage: Ce,
      formatter: ge
    } = Gl({
      locale: D,
      placeholder: N,
      weekStartsOn: u,
      fixedWeeks: c,
      numberOfMonths: p,
      minValue: _,
      maxValue: S,
      disabled: l,
      weekdayFormat: d,
      pagedNavigation: i,
      isDateDisabled: g.value,
      isDateUnavailable: v.value,
      calendarLabel: m,
      nextPage: E,
      prevPage: P
    }), {
      isInvalid: $e,
      isSelected: ue,
      highlightedRange: Se,
      isSelectionStart: Fe,
      isSelectionEnd: He,
      isHighlightedStart: sa,
      isHighlightedEnd: cr
    } = op({
      start: K,
      end: X,
      isDateDisabled: Z,
      isDateUnavailable: G,
      focusedValue: A
    });
    return ee(L, (we) => {
      we.start && we.end && (K.value && !Ee(K.value, we.start) && (K.value = we.start.copy()), X.value && !Ee(X.value, we.end) && (X.value = we.end.copy()));
    }), ee(K, (we) => {
      we && !Ee(we, N.value) && F(we), n("update:startValue", we);
    }), ee([K, X], ([we, ot]) => {
      const We = L.value;
      if (!(We && We.start && We.end && we && ot && Ee(We.start, we) && Ee(We.end, ot)))
        if (we && ot) {
          if (We.start && We.end && Ee(We.start, we) && Ee(We.end, ot))
            return;
          Me(ot, we) ? L.value = {
            start: ot.copy(),
            end: we.copy()
          } : L.value = {
            start: we.copy(),
            end: ot.copy()
          };
        } else We.start && We.end && (L.value = {
          start: void 0,
          end: void 0
        });
    }), rp({
      isDateUnavailable: G,
      startValue: K,
      endValue: X,
      formatter: ge,
      modelValue: L,
      placeholder: N,
      disabled: l,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: s,
      preventDeselect: f,
      fullCalendarLabel: j,
      headingValue: z,
      isInvalid: $e,
      isDateDisabled: Z,
      highlightedRange: Se,
      focusedValue: A,
      lastPressedDateValue: k,
      isSelected: ue,
      isSelectionEnd: He,
      isSelectionStart: Fe,
      isNextButtonDisabled: J,
      isPrevButtonDisabled: te,
      isOutsideVisibleView: le,
      nextPage: he,
      prevPage: Ce,
      parentElement: B,
      onPlaceholderChange: F,
      locale: D,
      dir: V,
      isHighlightedStart: sa,
      isHighlightedEnd: cr
    }), oe(() => {
      r.value && xl(B.value);
    }), (we, ot) => (b(), x(o(O), {
      ref_key: "primitiveElement",
      ref: $,
      as: we.as,
      "as-child": we.asChild,
      role: "application",
      "aria-label": o(j),
      "data-readonly": o(s) ? "" : void 0,
      "data-disabled": o(l) ? "" : void 0,
      "data-invalid": o($e) ? "" : void 0,
      dir: o(V)
    }, {
      default: y(() => [
        Ge("div", lp, [
          Ge("div", sp, De(o(j)), 1)
        ]),
        C(we.$slots, "default", {
          date: o(N),
          grid: o(fe),
          weekDays: o(Y),
          weekStartsOn: o(u),
          locale: o(D),
          fixedWeeks: o(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), up = /* @__PURE__ */ w({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dp = /* @__PURE__ */ w({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = oa();
    return (n, l) => (b(), x(o(O), M(t, {
      "data-disabled": o(e).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        C(n.$slots, "default", {
          headingValue: o(e).headingValue.value
        }, () => [
          me(De(o(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), cp = /* @__PURE__ */ w({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a) {
    const t = a, e = oa(), n = I(() => e.disabled.value ? !0 : void 0), l = I(() => e.readonly.value ? !0 : void 0);
    return (s, r) => (b(), x(o(O), M(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": l.value,
      "aria-disabled": n.value,
      "data-readonly": l.value && "",
      "data-disabled": n.value && ""
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), pp = /* @__PURE__ */ w({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a) {
    const t = oa();
    return (e, n) => {
      var l, s;
      return b(), x(o(O), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": o(t).isSelected(e.date) ? !0 : void 0,
        "aria-disabled": o(t).isDateDisabled(e.date) || ((s = (l = o(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": o(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: y(() => [
          C(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), fp = /* @__PURE__ */ w({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vp = /* @__PURE__ */ w({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = I(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = oa();
    return (l, s) => (b(), x(o(O), M(t, {
      "aria-label": "Next page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).nextPage(t.step, t.nextPage))
    }), {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          me("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), mp = /* @__PURE__ */ w({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = I(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = oa();
    return (l, s) => (b(), x(o(O), M(t, {
      "aria-label": "Previous page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).prevPage(t.step, t.prevPage))
    }), {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          me("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), hp = /* @__PURE__ */ w({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), M(t, { "aria-hidden": "true" }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yp = /* @__PURE__ */ w({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gp = /* @__PURE__ */ w({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bp = /* @__PURE__ */ w({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = oa(), n = et(), { primitiveElement: l, currentElement: s } = Oe(), r = I(() => e.formatter.custom(Ne(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = I(() => e.isDateDisabled(t.day)), u = I(() => {
      var k;
      return (k = e.isDateUnavailable) == null ? void 0 : k.call(e, t.day);
    }), d = I(() => e.isSelected(t.day)), c = I(() => e.isSelectionStart(t.day)), p = I(() => e.isSelectionEnd(t.day)), f = I(() => e.isHighlightedStart(t.day)), v = I(() => e.isHighlightedEnd(t.day)), g = I(() => e.highlightedRange.value ? Er(t.day, e.highlightedRange.value.start, e.highlightedRange.value.end) : !1), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", S = I(() => hl(t.day, Hn())), _ = I(() => !yl(t.day, t.month)), D = I(
      () => e.isOutsideVisibleView(t.day)
    ), h = I(() => t.day.day.toLocaleString(e.locale.value)), E = I(() => !e.disabled.value && Re(t.day, e.placeholder.value));
    function P(k) {
      var A;
      if (!e.readonly.value && !(e.isDateDisabled(k) || (A = e.isDateUnavailable) != null && A.call(e, k))) {
        if (e.lastPressedDateValue.value = k.copy(), e.startValue.value && e.highlightedRange.value === null) {
          if (Re(k, e.startValue.value) && !e.preventDeselect.value && !e.endValue.value) {
            e.startValue.value = void 0, e.onPlaceholderChange(k);
            return;
          } else if (!e.endValue.value) {
            e.lastPressedDateValue.value && Re(e.lastPressedDateValue.value, k) && (e.startValue.value = k.copy());
            return;
          }
        }
        if (e.startValue.value && Re(e.startValue.value, k) && !e.preventDeselect.value && !e.endValue.value) {
          e.startValue.value = void 0, e.onPlaceholderChange(k);
          return;
        }
        e.startValue.value ? e.endValue.value ? e.endValue.value && e.startValue.value && (e.endValue.value = void 0, e.startValue.value = k.copy()) : e.endValue.value = k.copy() : e.startValue.value = k.copy();
      }
    }
    function $() {
      P(t.day);
    }
    function B() {
      var k;
      e.isDateDisabled(t.day) || (k = e.isDateUnavailable) != null && k.call(e, t.day) || (e.focusedValue.value = t.day.copy());
    }
    function V(k) {
      k.preventDefault(), k.stopPropagation();
      const A = e.parentElement.value, L = A ? Array.from(A.querySelectorAll(m)) : [];
      let K = L.indexOf(s.value);
      const X = 7, N = e.dir.value === "rtl" ? -1 : 1;
      switch (k.code) {
        case n.ARROW_RIGHT:
          K += N;
          break;
        case n.ARROW_LEFT:
          K -= N;
          break;
        case n.ARROW_UP:
          K -= X;
          break;
        case n.ARROW_DOWN:
          K += X;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          P(t.day);
          return;
        default:
          return;
      }
      if (K >= 0 && K < L.length) {
        L[K].focus();
        return;
      }
      if (K < 0) {
        if (e.isPrevButtonDisabled("month"))
          return;
        e.prevPage(), se(() => {
          const F = A ? Array.from(A.querySelectorAll(m)) : [];
          F[F.length - Math.abs(K)].focus();
        });
        return;
      }
      if (K >= L.length) {
        if (e.isNextButtonDisabled("month"))
          return;
        e.nextPage(), se(() => {
          (A ? Array.from(A.querySelectorAll(m)) : [])[K - L.length].focus();
        });
      }
    }
    return (k, A) => (b(), x(o(O), M({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": d.value ? !0 : void 0,
      "aria-disabled": _.value || i.value || u.value ? !0 : void 0,
      "data-highlighted": g.value ? "" : void 0,
      "data-selection-start": c.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": f.value ? !0 : void 0,
      "data-highlighted-end": v.value ? !0 : void 0,
      "data-selected": d.value ? !0 : void 0,
      "data-outside-visible-view": D.value ? "" : void 0,
      "data-value": k.day.toString(),
      "data-disabled": i.value || _.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": S.value ? "" : void 0,
      "data-outside-month": _.value ? "" : void 0,
      "data-focused": E.value ? "" : void 0,
      tabindex: E.value ? 0 : _.value || i.value ? void 0 : -1,
      onClick: $,
      onFocusin: B,
      onMouseenter: B,
      onKeydown: re(V, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: y(() => [
        C(k.$slots, "default", { dayValue: h.value }, () => [
          me(De(h.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), [Ke, Cp] = Q("ScrollAreaRoot"), My = /* @__PURE__ */ w({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: {},
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, n = T(0), l = T(0), s = T(), r = T(), i = T(), u = T(), d = T(!1), c = T(!1), { type: p, dir: f, scrollHideDelay: v } = ne(e), g = be(f);
    function m() {
      var h;
      (h = s.value) == null || h.scrollTo({
        top: 0
      });
    }
    function S() {
      var h;
      (h = s.value) == null || h.scrollTo({
        top: 0,
        left: 0
      });
    }
    t({
      /** Viewport element within ScrollArea */
      viewport: s,
      /** Scroll viewport to top */
      scrollTop: m,
      /** Scroll viewport to top-left */
      scrollTopLeft: S
    });
    const { forwardRef: _, currentElement: D } = R();
    return Cp({
      type: p,
      dir: g,
      scrollHideDelay: v,
      scrollArea: D,
      viewport: s,
      onViewportChange: (h) => {
        s.value = h || void 0;
      },
      content: r,
      onContentChange: (h) => {
        r.value = h;
      },
      scrollbarX: i,
      scrollbarXEnabled: d,
      scrollbarY: u,
      scrollbarYEnabled: c,
      onScrollbarXChange: (h) => {
        i.value = h || void 0;
      },
      onScrollbarYChange: (h) => {
        u.value = h || void 0;
      },
      onScrollbarXEnabledChange: (h) => {
        d.value = h;
      },
      onScrollbarYEnabledChange: (h) => {
        c.value = h;
      },
      onCornerWidthChange: (h) => {
        n.value = h;
      },
      onCornerHeightChange: (h) => {
        l.value = h;
      }
    }), (h, E) => (b(), x(o(O), {
      ref: o(_),
      "as-child": e.asChild,
      as: h.as,
      dir: o(g),
      style: ke({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        "--radix-scroll-area-corner-width": `${n.value}px`,
        "--radix-scroll-area-corner-height": `${l.value}px`
      })
    }, {
      default: y(() => [
        C(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
}), Vy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ScrollAreaViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, { nonce: n } = ne(e), l = Ja(n), s = Ke(), r = T();
    oe(() => {
      s.onViewportChange(r.value), s.onContentChange(u.value);
    }), t({
      viewportElement: r
    });
    const { forwardRef: i, currentElement: u } = R();
    return (d, c) => (b(), ce(_e, null, [
      Ge("div", M({
        ref_key: "viewportElement",
        ref: r,
        "data-radix-scroll-area-viewport": "",
        style: {
          /**
           * We don't support `visible` because the intention is to have at least one scrollbar
           * if this component is used and `visible` will behave like `auto` in that case
           * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
           *
           * We don't handle `auto` because the intention is for the native implementation
           * to be hidden if using this component. We just want to ensure the node is scrollable
           * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
           * the browser from having to work out whether to render native scrollbars or not,
           * we tell it to with the intention of hiding them in CSS.
           */
          overflowX: o(s).scrollbarXEnabled.value ? "scroll" : "hidden",
          overflowY: o(s).scrollbarYEnabled.value ? "scroll" : "hidden"
        }
      }, d.$attrs, { tabindex: 0 }), [
        q(o(O), {
          ref: o(i),
          style: { minWidth: "100%", display: "table" },
          "as-child": e.asChild,
          as: d.as
        }, {
          default: y(() => [
            C(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ], 16),
      q(o(O), {
        as: "style",
        nonce: o(l)
      }, {
        default: y(() => [
          me(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
function xs(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + n * (e - a[0]);
  };
}
function ln(a) {
  const t = Ss(a.viewport, a.content), e = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, n = (a.scrollbar.size - e) * t;
  return Math.max(n, 18);
}
function Ss(a, t) {
  const e = a / t;
  return Number.isNaN(e) ? 0 : e;
}
function wp(a, t = () => {
}) {
  let e = { left: a.scrollLeft, top: a.scrollTop }, n = 0;
  return function l() {
    const s = { left: a.scrollLeft, top: a.scrollTop }, r = e.left !== s.left, i = e.top !== s.top;
    (r || i) && t(), e = s, n = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(n);
}
function Qo(a, t, e = "ltr") {
  const n = ln(t), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - l, r = t.content - t.viewport, i = s - n, u = e === "ltr" ? [0, r] : [r * -1, 0], d = Ut(
    a,
    u[0],
    u[1]
  );
  return xs([0, r], [0, i])(d);
}
function Aa(a) {
  return a ? Number.parseInt(a, 10) : 0;
}
function _p(a, t, e, n = "ltr") {
  const l = ln(e), s = l / 2, r = t || s, i = l - r, u = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - i, c = e.content - e.viewport, p = n === "ltr" ? [0, c] : [c * -1, 0];
  return xs(
    [u, d],
    p
  )(a);
}
function el(a, t) {
  return a > 0 && a < t;
}
const Es = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Ke(), s = sn(), r = rn(), { forwardRef: i, currentElement: u } = R(), d = T(""), c = T();
    function p(_) {
      var D, h;
      if (c.value) {
        const E = _.clientX - ((D = c.value) == null ? void 0 : D.left), P = _.clientY - ((h = c.value) == null ? void 0 : h.top);
        n("onDragScroll", { x: E, y: P });
      }
    }
    function f(_) {
      _.button === 0 && (_.target.setPointerCapture(_.pointerId), c.value = u.value.getBoundingClientRect(), d.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", l.viewport && (l.viewport.value.style.scrollBehavior = "auto"), p(_));
    }
    function v(_) {
      p(_);
    }
    function g(_) {
      const D = _.target;
      D.hasPointerCapture(_.pointerId) && D.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = d.value, l.viewport && (l.viewport.value.style.scrollBehavior = ""), c.value = void 0;
    }
    function m(_) {
      var P;
      const D = _.target, h = (P = u.value) == null ? void 0 : P.contains(D), E = s.sizes.value.content - s.sizes.value.viewport;
      h && s.handleWheelScroll(_, E);
    }
    oe(() => {
      document.addEventListener("wheel", m, { passive: !1 });
    }), Te(() => {
      document.removeEventListener("wheel", m);
    });
    function S() {
      var _, D, h, E, P;
      u.value && (e.isHorizontal ? s.handleSizeChange({
        content: ((_ = l.viewport.value) == null ? void 0 : _.scrollWidth) ?? 0,
        viewport: ((D = l.viewport.value) == null ? void 0 : D.offsetWidth) ?? 0,
        scrollbar: {
          size: u.value.clientWidth ?? 0,
          paddingStart: Aa(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Aa(getComputedStyle(u.value).paddingRight)
        }
      }) : s.handleSizeChange({
        content: ((h = l.viewport.value) == null ? void 0 : h.scrollHeight) ?? 0,
        viewport: ((E = l.viewport.value) == null ? void 0 : E.offsetHeight) ?? 0,
        scrollbar: {
          size: ((P = u.value) == null ? void 0 : P.clientHeight) ?? 0,
          paddingStart: Aa(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Aa(getComputedStyle(u.value).paddingRight)
        }
      }));
    }
    return Ze(u, S), Ze(l.content, S), (_, D) => (b(), x(o(O), {
      ref: o(i),
      style: { position: "absolute" },
      "data-scrollbarimpl": "",
      as: o(r).as.value,
      "as-child": o(r).asChild.value,
      onPointerdown: f,
      onPointermove: v,
      onPointerup: g
    }, {
      default: y(() => [
        C(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), xp = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarX",
  setup(a) {
    const t = Ke(), e = sn(), { forwardRef: n, currentElement: l } = R();
    oe(() => {
      l.value && t.onScrollbarXChange(l.value);
    });
    const s = I(() => e.sizes.value);
    return (r, i) => (b(), x(Es, {
      ref: o(n),
      "is-horizontal": !0,
      "data-orientation": "horizontal",
      style: ke({
        bottom: 0,
        left: o(t).dir.value === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: o(t).dir.value === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": s.value ? `${o(ln)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => o(e).onDragScroll(u.x))
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), Sp = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarY",
  setup(a) {
    const t = Ke(), e = sn(), { forwardRef: n, currentElement: l } = R();
    oe(() => {
      l.value && t.onScrollbarYChange(l.value);
    });
    const s = I(() => e.sizes.value);
    return (r, i) => (b(), x(Es, {
      ref: o(n),
      "is-horizontal": !1,
      "data-orientation": "vertical",
      style: ke({
        top: 0,
        right: o(t).dir.value === "ltr" ? 0 : void 0,
        left: o(t).dir.value === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": s.value ? `${o(ln)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => o(e).onDragScroll(u.y))
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), [sn, Ep] = Q("ScrollAreaScrollbarVisible"), Io = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarVisible",
  setup(a) {
    const t = Ke(), e = rn(), { forwardRef: n } = R(), l = T({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), s = I(() => {
      const _ = Ss(l.value.viewport, l.value.content);
      return _ > 0 && _ < 1;
    }), r = T(), i = T(0);
    function u(_, D) {
      if (v.value) {
        const h = t.viewport.value.scrollLeft + _.deltaY;
        t.viewport.value.scrollLeft = h, el(h, D) && _.preventDefault();
      } else {
        const h = t.viewport.value.scrollTop + _.deltaY;
        t.viewport.value.scrollTop = h, el(h, D) && _.preventDefault();
      }
    }
    function d(_, D) {
      v.value ? i.value = D.x : i.value = D.y;
    }
    function c(_) {
      i.value = 0;
    }
    function p(_) {
      l.value = _;
    }
    function f(_, D) {
      return _p(
        _,
        i.value,
        l.value,
        D
      );
    }
    const v = I(
      () => e.isHorizontal.value
    );
    function g(_) {
      v.value ? t.viewport.value.scrollLeft = f(
        _,
        t.dir.value
      ) : t.viewport.value.scrollTop = f(_);
    }
    function m() {
      if (v.value) {
        if (t.viewport.value && r.value) {
          const _ = t.viewport.value.scrollLeft, D = Qo(
            _,
            l.value,
            t.dir.value
          );
          r.value.style.transform = `translate3d(${D}px, 0, 0)`;
        }
      } else if (t.viewport.value && r.value) {
        const _ = t.viewport.value.scrollTop, D = Qo(_, l.value);
        r.value.style.transform = `translate3d(0, ${D}px, 0)`;
      }
    }
    function S(_) {
      r.value = _;
    }
    return Ep({
      sizes: l,
      hasThumb: s,
      handleWheelScroll: u,
      handleThumbDown: d,
      handleThumbUp: c,
      handleSizeChange: p,
      onThumbPositionChange: m,
      onThumbChange: S,
      onDragScroll: g
    }), (_, D) => v.value ? (b(), x(xp, M({ key: 0 }, _.$attrs, { ref: o(n) }), {
      default: y(() => [
        C(_.$slots, "default")
      ]),
      _: 3
    }, 16)) : (b(), x(Sp, M({ key: 1 }, _.$attrs, { ref: o(n) }), {
      default: y(() => [
        C(_.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ps = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarAuto",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = Ke(), e = rn(), { forwardRef: n } = R(), l = T(!1), s = Ua(() => {
      if (t.viewport.value) {
        const r = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, i = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
        l.value = e.isHorizontal.value ? r : i;
      }
    }, 10);
    return oe(() => s()), Ze(t.viewport, s), Ze(t.content, s), (r, i) => (b(), x(o(Pe), {
      present: r.forceMount || l.value
    }, {
      default: y(() => [
        q(Io, M(r.$attrs, {
          ref: o(n),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: y(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Pp = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ScrollAreaScrollbarHover",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = Ke(), { forwardRef: e } = R();
    let n;
    const l = T(!1);
    function s() {
      window.clearTimeout(n), l.value = !0;
    }
    function r() {
      n = window.setTimeout(() => {
        l.value = !1;
      }, t.scrollHideDelay.value);
    }
    return oe(() => {
      const i = t.scrollArea.value;
      i && (i.addEventListener("pointerenter", s), i.addEventListener("pointerleave", r));
    }), Te(() => {
      const i = t.scrollArea.value;
      i && (window.clearTimeout(n), i.removeEventListener("pointerenter", s), i.removeEventListener("pointerleave", r));
    }), (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || l.value
    }, {
      default: y(() => [
        q(Ps, M(i.$attrs, {
          ref: o(e),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Dp = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarScroll",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = Ke(), e = rn(), { forwardRef: n } = R(), { state: l, dispatch: s } = Ml("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    ye((i) => {
      if (l.value === "idle") {
        const u = window.setTimeout(
          () => s("HIDE"),
          t.scrollHideDelay.value
        );
        i(() => {
          window.clearTimeout(u);
        });
      }
    });
    const r = Ua(() => s("SCROLL_END"), 100);
    return ye((i) => {
      const u = t.viewport.value, d = e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (u) {
        let c = u[d];
        const p = () => {
          const f = u[d];
          c !== f && (s("SCROLL"), r()), c = f;
        };
        u.addEventListener("scroll", p), i(() => {
          u.removeEventListener("scroll", p);
        });
      }
    }), (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(l) !== "hidden"
    }, {
      default: y(() => [
        q(Io, M(i.$attrs, { ref: o(n) }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [rn, $p] = Q("ScrollAreaScrollbar"), Fy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = Ke(), l = I(() => t.orientation === "horizontal");
    ee(
      l,
      () => {
        l.value ? n.onScrollbarXEnabledChange(!0) : n.onScrollbarYEnabledChange(!0);
      },
      { immediate: !0 }
    ), Te(() => {
      n.onScrollbarXEnabledChange(!1), n.onScrollbarYEnabledChange(!1);
    });
    const { orientation: s, forceMount: r, asChild: i, as: u } = ne(t);
    return $p({
      orientation: s,
      forceMount: r,
      isHorizontal: l,
      as: u,
      asChild: i
    }), (d, c) => o(n).type.value === "hover" ? (b(), x(Pp, M({ key: 0 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "scroll" ? (b(), x(Dp, M({ key: 1 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "auto" ? (b(), x(Ps, M({ key: 2 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "always" ? (b(), x(Io, M({ key: 3 }, d.$attrs, {
      ref: o(e),
      "data-state": "visible"
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Ly = /* @__PURE__ */ w({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Ke(), n = sn();
    function l(f) {
      const g = f.target.getBoundingClientRect(), m = f.clientX - g.left, S = f.clientY - g.top;
      n.handleThumbDown(f, { x: m, y: S });
    }
    function s(f) {
      n.handleThumbUp(f);
    }
    const { forwardRef: r, currentElement: i } = R(), u = T(), d = I(() => e.viewport.value);
    function c() {
      if (!u.value) {
        const f = wp(
          d.value,
          n.onThumbPositionChange
        );
        u.value = f, n.onThumbPositionChange();
      }
    }
    const p = I(() => n.sizes.value);
    return fi(p, () => {
      n.onThumbChange(i.value), d.value && (n.onThumbPositionChange(), d.value.addEventListener("scroll", c));
    }), Te(() => {
      var f;
      d.value.removeEventListener("scroll", c), (f = e.viewport.value) == null || f.removeEventListener("scroll", c);
    }), (f, v) => (b(), x(o(O), {
      ref: o(r),
      "data-state": o(n).hasThumb ? "visible" : "hidden",
      style: {
        width: "var(--radix-scroll-area-thumb-width)",
        height: "var(--radix-scroll-area-thumb-height)"
      },
      "as-child": t.asChild,
      as: f.as,
      onPointerdown: l,
      onPointerup: s
    }, {
      default: y(() => [
        C(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-state", "as-child", "as"]));
  }
}), Ip = /* @__PURE__ */ w({
  __name: "ScrollAreaCornerImpl",
  setup(a) {
    const t = Ke(), e = T(0), n = T(0), l = I(() => !!e.value && !!n.value);
    function s() {
      var u;
      const i = ((u = t.scrollbarX.value) == null ? void 0 : u.offsetHeight) || 0;
      t.onCornerHeightChange(i), n.value = i;
    }
    function r() {
      var u;
      const i = ((u = t.scrollbarY.value) == null ? void 0 : u.offsetWidth) || 0;
      t.onCornerWidthChange(i), e.value = i;
    }
    return Ze(t.scrollbarX.value, s), Ze(t.scrollbarY.value, r), ee(() => t.scrollbarX.value, s), ee(() => t.scrollbarY.value, r), (i, u) => {
      var d;
      return l.value ? (b(), x(o(O), M({
        key: 0,
        style: {
          width: `${e.value}px`,
          height: `${n.value}px`,
          position: "absolute",
          right: o(t).dir.value === "ltr" ? 0 : void 0,
          left: o(t).dir.value === "rtl" ? 0 : void 0,
          bottom: 0
        }
      }, (d = i.$parent) == null ? void 0 : d.$props), {
        default: y(() => [
          C(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])) : pe("", !0);
    };
  }
}), Ny = /* @__PURE__ */ w({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = Ke(), l = I(
      () => !!n.scrollbarX.value && !!n.scrollbarY.value
    ), s = I(
      () => n.type.value !== "scroll" && l.value
    );
    return (r, i) => s.value ? (b(), x(Ip, M({ key: 0 }, t, { ref: o(e) }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Bp = ["default-value"], Tp = /* @__PURE__ */ w({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(a) {
    const t = a, { value: e } = ne(t), n = T();
    return (l, s) => (b(), x(o(ta), { "as-child": "" }, {
      default: y(() => [
        Wa(Ge("select", M({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => Ue(e) ? e.value = r : null),
          "default-value": o(e)
        }), [
          C(l.$slots, "default")
        ], 16, Bp), [
          [br, o(e)]
        ])
      ]),
      _: 3
    }));
  }
}), Rp = {
  key: 0,
  value: ""
}, [Ct, Ds] = Q("SelectRoot"), [Ap, Op] = Q("SelectRoot"), zy = /* @__PURE__ */ w({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: { default: void 0 },
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), s = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = T(), i = T(), u = T({
      x: 0,
      y: 0
    }), d = T(!1), { required: c, disabled: p, dir: f } = ne(e), v = be(f);
    Ds({
      triggerElement: r,
      onTriggerChange: (_) => {
        r.value = _;
      },
      valueElement: i,
      onValueElementChange: (_) => {
        i.value = _;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (_) => {
        d.value = _;
      },
      contentId: "",
      modelValue: l,
      onValueChange: (_) => {
        l.value = _;
      },
      open: s,
      required: c,
      onOpenChange: (_) => {
        s.value = _;
      },
      dir: v,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const g = Qe(r), m = T(/* @__PURE__ */ new Set()), S = I(() => Array.from(m.value).map((_) => {
      var D;
      return (D = _.props) == null ? void 0 : D.value;
    }).join(";"));
    return Op({
      onNativeOptionAdd: (_) => {
        m.value.add(_);
      },
      onNativeOptionRemove: (_) => {
        m.value.delete(_);
      }
    }), (_, D) => (b(), x(o(At), null, {
      default: y(() => [
        C(_.$slots, "default", {
          modelValue: o(l),
          open: o(s)
        }),
        o(g) ? (b(), x(Tp, M({ key: S.value }, _.$attrs, {
          "aria-hidden": "",
          tabindex: "-1",
          required: o(c),
          name: _.name,
          autocomplete: _.autocomplete,
          disabled: o(p),
          value: o(l),
          onChange: D[0] || (D[0] = (h) => l.value = h.target.value)
        }), {
          default: y(() => [
            o(l) === void 0 ? (b(), ce("option", Rp)) : pe("", !0),
            (b(!0), ce(_e, null, ga(Array.from(m.value), (h) => (b(), x(qe(h), M({ ref_for: !0 }, h.props, {
              key: h.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : pe("", !0)
      ]),
      _: 3
    }));
  }
}), kp = [" ", "Enter", "ArrowUp", "ArrowDown"], Mp = [" ", "Enter"], at = 10;
function $s(a) {
  return a === "" || Ht(a);
}
const Ky = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Ct(), n = I(() => {
      var v;
      return ((v = e.disabled) == null ? void 0 : v.value) || t.disabled;
    }), { forwardRef: l, currentElement: s } = R();
    e.contentId || (e.contentId = ve(void 0, "radix-vue-select-content")), oe(() => {
      e.triggerElement = s;
    });
    const { injectCollection: r } = Ve(), i = r(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = _a(i);
    function p() {
      n.value || (e.onOpenChange(!0), c());
    }
    function f(v) {
      p(), e.triggerPointerDownPosRef.value = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      };
    }
    return (v, g) => (b(), x(o(Ot), { "as-child": "" }, {
      default: y(() => {
        var m, S, _, D;
        return [
          q(o(O), {
            ref: o(l),
            role: "combobox",
            type: v.as === "button" ? "button" : void 0,
            "aria-controls": o(e).contentId,
            "aria-expanded": o(e).open.value || !1,
            "aria-required": (m = o(e).required) == null ? void 0 : m.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (S = o(e)) == null ? void 0 : S.dir.value,
            "data-state": (_ = o(e)) != null && _.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": o($s)((D = o(e).modelValue) == null ? void 0 : D.value) ? "" : void 0,
            "as-child": v.asChild,
            as: v.as,
            onClick: g[0] || (g[0] = (h) => {
              var E;
              (E = h == null ? void 0 : h.currentTarget) == null || E.focus();
            }),
            onPointerdown: g[1] || (g[1] = (h) => {
              if (h.pointerType === "touch")
                return h.preventDefault();
              const E = h.target;
              E.hasPointerCapture(h.pointerId) && E.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (f(h), h.preventDefault());
            }),
            onPointerup: g[2] || (g[2] = ie(
              (h) => {
                h.pointerType === "touch" && f(h);
              },
              ["prevent"]
            )),
            onKeydown: g[3] || (g[3] = (h) => {
              const E = o(u) !== "";
              !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && E && h.key === " " || (o(d)(h.key), o(kp).includes(h.key) && (p(), h.preventDefault()));
            })
          }, {
            default: y(() => [
              C(v.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Hy = /* @__PURE__ */ w({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bo, Vp] = Q("SelectItemAlignedPosition"), Fp = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(a, { emit: t }) {
    const e = a, n = t, { injectCollection: l } = Ve(), s = Ct(), r = wt(), i = l(), u = T(!1), d = T(!0), c = T(), { forwardRef: p, currentElement: f } = R(), { viewport: v, selectedItem: g, selectedItemText: m, focusSelectedItem: S } = r;
    function _() {
      if (s.triggerElement.value && s.valueElement.value && c.value && f.value && (v != null && v.value) && (g != null && g.value) && (m != null && m.value)) {
        const E = s.triggerElement.value.getBoundingClientRect(), P = f.value.getBoundingClientRect(), $ = s.valueElement.value.getBoundingClientRect(), B = m.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const ge = B.left - P.left, $e = $.left - ge, ue = E.left - $e, Se = E.width + ue, Fe = Math.max(Se, P.width), He = window.innerWidth - at, sa = Ut($e, at, He - Fe);
          c.value.style.minWidth = `${Se}px`, c.value.style.left = `${sa}px`;
        } else {
          const ge = P.right - B.right, $e = window.innerWidth - $.right - ge, ue = window.innerWidth - E.right - $e, Se = E.width + ue, Fe = Math.max(Se, P.width), He = window.innerWidth - at, sa = Ut(
            $e,
            at,
            He - Fe
          );
          c.value.style.minWidth = `${Se}px`, c.value.style.right = `${sa}px`;
        }
        const V = i.value, k = window.innerHeight - at * 2, A = v.value.scrollHeight, L = window.getComputedStyle(f.value), H = Number.parseInt(
          L.borderTopWidth,
          10
        ), K = Number.parseInt(L.paddingTop, 10), X = Number.parseInt(
          L.borderBottomWidth,
          10
        ), N = Number.parseInt(
          L.paddingBottom,
          10
        ), F = H + K + A + N + X, j = Math.min(
          g.value.offsetHeight * 5,
          F
        ), z = window.getComputedStyle(v.value), Z = Number.parseInt(z.paddingTop, 10), G = Number.parseInt(
          z.paddingBottom,
          10
        ), J = E.top + E.height / 2 - at, te = k - J, fe = g.value.offsetHeight / 2, Y = g.value.offsetTop + fe, le = H + K + Y, he = F - le;
        if (le <= J) {
          const ge = g.value === V[V.length - 1];
          c.value.style.bottom = "0px";
          const $e = f.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, ue = Math.max(
            te,
            fe + (ge ? G : 0) + $e + X
          ), Se = le + ue;
          c.value.style.height = `${Se}px`;
        } else {
          const ge = g.value === V[0];
          c.value.style.top = "0px";
          const ue = Math.max(
            J,
            H + v.value.offsetTop + (ge ? Z : 0) + fe
          ) + he;
          c.value.style.height = `${ue}px`, v.value.scrollTop = le - J + v.value.offsetTop;
        }
        c.value.style.margin = `${at}px 0`, c.value.style.minHeight = `${j}px`, c.value.style.maxHeight = `${k}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const D = T("");
    oe(async () => {
      await se(), _(), f.value && (D.value = window.getComputedStyle(f.value).zIndex);
    });
    function h(E) {
      E && d.value === !0 && (_(), S == null || S(), d.value = !1);
    }
    return Vp({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: h
    }), (E, P) => (b(), ce("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: ke({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D.value
      })
    }, [
      q(o(O), M({
        ref: o(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...E.$attrs, ...e }), {
        default: y(() => [
          C(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Lp = /* @__PURE__ */ w({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: at },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const e = Tt(a);
    return (n, l) => (b(), x(o(Dt), M(o(e), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), la = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [wt, Np] = Q("SelectContent"), zp = /* @__PURE__ */ w({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    bodyLock: { type: Boolean, default: !0 },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Ct();
    Yn(), Ca(e.bodyLock);
    const { createCollection: s } = Ve(), r = T();
    wa(r);
    const i = s(r), { search: u, handleTypeaheadSearch: d } = _a(i), c = T(), p = T(), f = T(), v = T(!1), g = T(!1);
    function m() {
      p.value && r.value && Bn([p.value, r.value]);
    }
    ee(v, () => {
      m();
    });
    const { onOpenChange: S, triggerPointerDownPosRef: _ } = l;
    ye((P) => {
      if (!r.value)
        return;
      let $ = { x: 0, y: 0 };
      const B = (k) => {
        var A, L;
        $ = {
          x: Math.abs(
            Math.round(k.pageX) - (((A = _.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(k.pageY) - (((L = _.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, V = (k) => {
        var A;
        k.pointerType !== "touch" && ($.x <= 10 && $.y <= 10 ? k.preventDefault() : (A = r.value) != null && A.contains(k.target) || S(!1), document.removeEventListener("pointermove", B), _.value = null);
      };
      _.value !== null && (document.addEventListener("pointermove", B), document.addEventListener("pointerup", V, {
        capture: !0,
        once: !0
      })), P(() => {
        document.removeEventListener("pointermove", B), document.removeEventListener("pointerup", V, {
          capture: !0
        });
      });
    });
    function D(P) {
      const $ = P.ctrlKey || P.altKey || P.metaKey;
      if (P.key === "Tab" && P.preventDefault(), !$ && P.key.length === 1 && d(P.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(P.key)) {
        let B = i.value;
        if (["ArrowUp", "End"].includes(P.key) && (B = B.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(P.key)) {
          const V = P.target, k = B.indexOf(V);
          B = B.slice(k + 1);
        }
        setTimeout(() => Bn(B)), P.preventDefault();
      }
    }
    const h = I(() => e.position === "popper" ? e : {}), E = Tt(h.value);
    return Np({
      content: r,
      viewport: c,
      onViewportChange: (P) => {
        c.value = P;
      },
      itemRefCallback: (P, $, B) => {
        var A, L;
        const V = !g.value && !B;
        (((A = l.modelValue) == null ? void 0 : A.value) !== void 0 && ((L = l.modelValue) == null ? void 0 : L.value) === $ || V) && (p.value = P, V && (g.value = !0));
      },
      selectedItem: p,
      selectedItemText: f,
      onItemLeave: () => {
        var P;
        (P = r.value) == null || P.focus();
      },
      itemTextRefCallback: (P, $, B) => {
        var A, L;
        const V = !g.value && !B;
        (((A = l.modelValue) == null ? void 0 : A.value) !== void 0 && ((L = l.modelValue) == null ? void 0 : L.value) === $ || V) && (f.value = P);
      },
      focusSelectedItem: m,
      position: e.position,
      isPositioned: v,
      searchRef: u
    }), (P, $) => (b(), x(o(Za), {
      "as-child": "",
      onMountAutoFocus: $[6] || ($[6] = ie(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: $[7] || ($[7] = (B) => {
        var V;
        n("closeAutoFocus", B), !B.defaultPrevented && ((V = o(l).triggerElement.value) == null || V.focus({ preventScroll: !0 }), B.preventDefault());
      })
    }, {
      default: y(() => [
        q(o(gt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: $[2] || ($[2] = ie(() => {
          }, ["prevent"])),
          onDismiss: $[3] || ($[3] = (B) => o(l).onOpenChange(!1)),
          onEscapeKeyDown: $[4] || ($[4] = (B) => n("escapeKeyDown", B)),
          onPointerDownOutside: $[5] || ($[5] = (B) => n("pointerDownOutside", B))
        }, {
          default: y(() => [
            (b(), x(qe(
              P.position === "popper" ? Lp : Fp
            ), M({ ...P.$attrs, ...o(E) }, {
              id: o(l).contentId,
              ref: (B) => {
                r.value = o(Be)(B);
              },
              role: "listbox",
              "data-state": o(l).open.value ? "open" : "closed",
              dir: o(l).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: $[0] || ($[0] = ie(() => {
              }, ["prevent"])),
              onPlaced: $[1] || ($[1] = (B) => v.value = !0),
              onKeydown: D
            }), {
              default: y(() => [
                C(P.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "dir", "onKeydown"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Kp = /* @__PURE__ */ w({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(a) {
    return Ds(a.context), (e, n) => C(e.$slots, "default");
  }
}), Hp = { key: 1 }, Wy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(a, { emit: t }) {
    const e = a, l = xe(e, t), s = Ct(), r = T();
    oe(() => {
      r.value = new DocumentFragment();
    });
    const i = T(), u = I(() => e.forceMount || s.open.value);
    return (d, c) => {
      var p;
      return u.value ? (b(), x(o(Pe), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: !0
      }, {
        default: y(() => [
          q(zp, W(U({ ...o(l), ...d.$attrs })), {
            default: y(() => [
              C(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((p = i.value) != null && p.present) && r.value ? (b(), ce("div", Hp, [
        (b(), x(qt, { to: r.value }, [
          q(Kp, { context: o(s) }, {
            default: y(() => [
              C(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : pe("", !0);
    };
  }
}), jy = /* @__PURE__ */ w({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a, e = Ct(), n = wt();
    return (l, s) => o(e).open.value && o(n).position === "popper" ? (b(), x(o(ea), W(M({ key: 0 }, t)), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Uy = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(O), M({ "aria-hidden": "" }, t), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Is, Wp] = Q("SelectItem"), Gy = /* @__PURE__ */ w({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { disabled: e } = ne(t), n = Ct(), l = wt(la), { forwardRef: s, currentElement: r } = R(), i = I(() => {
      var m;
      return ((m = n.modelValue) == null ? void 0 : m.value) === t.value;
    }), u = T(!1), d = T(t.textValue ?? ""), c = ve(void 0, "radix-vue-select-item-text");
    async function p(m) {
      await se(), !(m != null && m.defaultPrevented) && (e.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function f(m) {
      var S;
      await se(), !m.defaultPrevented && (e.value ? (S = l.onItemLeave) == null || S.call(l) : m.currentTarget.focus({ preventScroll: !0 }));
    }
    async function v(m) {
      var S;
      await se(), !m.defaultPrevented && m.currentTarget === document.activeElement && ((S = l.onItemLeave) == null || S.call(l));
    }
    async function g(m) {
      var _;
      await se(), !(m.defaultPrevented || ((_ = l.searchRef) == null ? void 0 : _.value) !== "" && m.key === " ") && (Mp.includes(m.key) && p(), m.key === " " && m.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return oe(() => {
      r.value && l.itemRefCallback(
        r.value,
        t.value,
        t.disabled
      );
    }), Wp({
      value: t.value,
      disabled: e,
      textId: c,
      isSelected: i,
      onItemTextChange: (m) => {
        d.value = ((d.value || (m == null ? void 0 : m.textContent)) ?? "").trim();
      }
    }), (m, S) => (b(), x(o(O), {
      ref: o(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": o(c),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": o(e) || void 0,
      "data-disabled": o(e) ? "" : void 0,
      tabindex: o(e) ? void 0 : -1,
      as: m.as,
      "as-child": m.asChild,
      onFocus: S[0] || (S[0] = (_) => u.value = !0),
      onBlur: S[1] || (S[1] = (_) => u.value = !1),
      onPointerup: p,
      onPointerdown: S[2] || (S[2] = (_) => {
        _.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: S[3] || (S[3] = ie(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: v,
      onKeydown: g
    }, {
      default: y(() => [
        C(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), qy = /* @__PURE__ */ w({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Is();
    return (n, l) => o(e).isSelected.value ? (b(), x(o(O), M({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), [jp, Up] = Q("SelectGroup"), Yy = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ve(void 0, "radix-vue-select-group");
    return Up({ id: e }), (n, l) => (b(), x(o(O), M({ role: "group" }, t, { "aria-labelledby": o(e) }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Xy = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = jp({ id: "" });
    return (n, l) => (b(), x(o(O), M(t, {
      id: o(e).id
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Zy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Ct(), n = wt(la), l = Ap(), s = Is(), { forwardRef: r, currentElement: i } = R(), u = I(() => {
      var d;
      return pt("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        innerHTML: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return oe(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), l.onNativeOptionAdd(u.value));
    }), Ln(() => {
      l.onNativeOptionRemove(u.value);
    }), (d, c) => (b(), ce(_e, null, [
      q(o(O), M({
        id: o(s).textId,
        ref: o(r)
      }, { ...t, ...d.$attrs }), {
        default: y(() => [
          C(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      o(s).isSelected.value && o(e).valueElement.value && !o(e).valueElementHasChildren.value ? (b(), x(qt, {
        key: 0,
        to: o(e).valueElement.value
      }, [
        C(d.$slots, "default")
      ], 8, ["to"])) : pe("", !0)
    ], 64));
  }
}), Jy = /* @__PURE__ */ w({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { nonce: e } = ne(t), n = Ja(e), l = wt(la), s = l.position === "item-aligned" ? Bo() : void 0, { forwardRef: r, currentElement: i } = R();
    oe(() => {
      l == null || l.onViewportChange(i.value);
    });
    const u = T(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: v } = s ?? {};
      if (f != null && f.value && (v != null && v.value)) {
        const g = Math.abs(u.value - p.scrollTop);
        if (g > 0) {
          const m = window.innerHeight - at * 2, S = Number.parseFloat(
            v.value.style.minHeight
          ), _ = Number.parseFloat(v.value.style.height), D = Math.max(S, _);
          if (D < m) {
            const h = D + g, E = Math.min(m, h), P = h - E;
            v.value.style.height = `${E}px`, v.value.style.bottom === "0px" && (p.scrollTop = P > 0 ? P : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (b(), ce(_e, null, [
      q(o(O), M({
        ref: o(r),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...c.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        },
        onScroll: d
      }), {
        default: y(() => [
          C(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      q(o(O), {
        as: "style",
        nonce: o(n)
      }, {
        default: y(() => [
          me(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Bs = /* @__PURE__ */ w({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(a, { emit: t }) {
    const e = t, { injectCollection: n } = Ve(), l = n(), s = wt(la), r = T(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    ye(() => {
      const c = l.value.find(
        (p) => p === document.activeElement
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function u() {
      r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    function d() {
      var c;
      (c = s.onItemLeave) == null || c.call(s), r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    return Ln(() => i()), (c, p) => {
      var f;
      return b(), x(o(O), M({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (f = c.$parent) == null ? void 0 : f.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: y(() => [
          C(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Qy = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = wt(la), e = t.position === "item-aligned" ? Bo() : void 0, { forwardRef: n, currentElement: l } = R(), s = T(!1);
    return ye((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), r(() => c.removeEventListener("scroll", d));
      }
    }), ee(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (b(), x(Bs, {
      key: 0,
      ref: o(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = o(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : pe("", !0);
  }
}), eg = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = wt(la), e = t.position === "item-aligned" ? Bo() : void 0, { forwardRef: n, currentElement: l } = R(), s = T(!1);
    return ye((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          const p = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), r(() => c.removeEventListener("scroll", d));
      }
    }), ee(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (b(), x(Bs, {
      key: 0,
      ref: o(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = o(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : pe("", !0);
  }
}), tg = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = Ct(), l = ja();
    return ml(() => {
      var r;
      const s = !!qa((r = l == null ? void 0 : l.default) == null ? void 0 : r.call(l)).length;
      n.onValueElementHasChildrenChange(s);
    }), oe(() => {
      n.valueElement = e;
    }), (s, r) => (b(), x(o(O), {
      ref: o(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          o($s)((i = o(n).modelValue) == null ? void 0 : i.value) ? (b(), ce(_e, { key: 0 }, [
            me(De(s.placeholder), 1)
          ], 64)) : C(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ag = /* @__PURE__ */ w({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return (t, e) => (b(), x(o(O), {
      "aria-hidden": "",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        C(t.$slots, "default", {}, () => [
          me("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ts = /* @__PURE__ */ w({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ["horizontal", "vertical"];
    function n(i) {
      return e.includes(i);
    }
    const l = I(
      () => n(t.orientation) ? t.orientation : "horizontal"
    ), s = I(
      () => l.value === "vertical" ? t.orientation : void 0
    ), r = I(
      () => t.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, u) => (b(), x(o(O), M({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": l.value
    }, r.value), {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), Gp = /* @__PURE__ */ w({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(Ts, W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function qp(a = [], t, e) {
  const n = [...a];
  return n[e] = t, n.sort((l, s) => l - s);
}
function Rs(a, t, e) {
  const s = 100 / (e - t) * (a - t);
  return Ut(s, 0, 100);
}
function Yp(a, t) {
  return t > 2 ? `Value ${a + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][a] : void 0;
}
function Xp(a, t) {
  if (a.length === 1)
    return 0;
  const e = a.map((l) => Math.abs(l - t)), n = Math.min(...e);
  return e.indexOf(n);
}
function Zp(a, t, e) {
  const n = a / 2, s = To([0, 50], [0, n]);
  return (n - s(t) * e) * e;
}
function Jp(a) {
  return a.slice(0, -1).map((t, e) => a[e + 1] - t);
}
function Qp(a, t) {
  if (t > 0) {
    const e = Jp(a);
    return Math.min(...e) >= t;
  }
  return !0;
}
function To(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + n * (e - a[0]);
  };
}
function ef(a) {
  return (String(a).split(".")[1] || "").length;
}
function tf(a, t) {
  const e = 10 ** t;
  return Math.round(a * e) / e;
}
const As = ["PageUp", "PageDown"], Os = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ks = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Ms, Vs] = Q(["SliderVertical", "SliderHorizontal"]), Fs = /* @__PURE__ */ w({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = un();
    return (s, r) => (b(), x(o(O), M({ "data-slider-impl": "" }, e, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : o(As).concat(o(Os)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: r[1] || (r[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), o(l).thumbElements.value.includes(u) ? u.focus() : n("slideStart", i);
      }),
      onPointermove: r[2] || (r[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && n("slideMove", i);
      }),
      onPointerup: r[3] || (r[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), n("slideEnd", i));
      })
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), af = /* @__PURE__ */ w({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, { max: l, min: s, dir: r, inverted: i } = ne(e), { forwardRef: u, currentElement: d } = R(), c = T(), p = I(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function f(v) {
      const g = c.value || d.value.getBoundingClientRect(), m = [0, g.width], S = p.value ? [s.value, l.value] : [l.value, s.value], _ = To(m, S);
      return c.value = g, _(v - g.left);
    }
    return Vs({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (v, g) => (b(), x(Fs, {
      ref: o(u),
      dir: o(r),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: g[0] || (g[0] = (m) => {
        const S = f(m.clientX);
        n("slideStart", S);
      }),
      onSlideMove: g[1] || (g[1] = (m) => {
        const S = f(m.clientX);
        n("slideMove", S);
      }),
      onSlideEnd: g[2] || (g[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: g[3] || (g[3] = (m) => {
        const S = p.value ? "from-left" : "from-right", _ = o(ks)[S].includes(m.key);
        n("stepKeyDown", m, _ ? -1 : 1);
      }),
      onEndKeyDown: g[4] || (g[4] = (m) => n("endKeyDown", m)),
      onHomeKeyDown: g[5] || (g[5] = (m) => n("homeKeyDown", m))
    }, {
      default: y(() => [
        C(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), nf = /* @__PURE__ */ w({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, { max: l, min: s, inverted: r } = ne(e), { forwardRef: i, currentElement: u } = R(), d = T(), c = I(() => !r.value);
    function p(f) {
      const v = d.value || u.value.getBoundingClientRect(), g = [0, v.height], m = c.value ? [l.value, s.value] : [s.value, l.value], S = To(g, m);
      return d.value = v, S(f - v.top);
    }
    return Vs({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (f, v) => (b(), x(Fs, {
      ref: o(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: v[0] || (v[0] = (g) => {
        const m = p(g.clientY);
        n("slideStart", m);
      }),
      onSlideMove: v[1] || (v[1] = (g) => {
        const m = p(g.clientY);
        n("slideMove", m);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        d.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (g) => {
        const m = c.value ? "from-bottom" : "from-top", S = o(ks)[m].includes(g.key);
        n("stepKeyDown", g, S ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: v[5] || (v[5] = (g) => n("homeKeyDown", g))
    }, {
      default: y(() => [
        C(f.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), of = ["value", "name", "disabled", "step"], [un, lf] = Q("SliderRoot"), ng = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderRoot",
  props: {
    name: {},
    defaultValue: { default: () => [0] },
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    orientation: { default: "horizontal" },
    dir: {},
    inverted: { type: Boolean, default: !1 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    minStepsBetweenThumbs: { default: 0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(a, { emit: t }) {
    const e = a, n = t, { min: l, max: s, step: r, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = ne(e), p = be(c), { forwardRef: f, currentElement: v } = R(), g = Qe(v);
    Xt();
    const m = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), S = T(0), _ = T(m.value);
    function D(B) {
      const V = Xp(m.value, B);
      P(B, V);
    }
    function h(B) {
      P(B, S.value);
    }
    function E() {
      const B = _.value[S.value];
      m.value[S.value] !== B && n("valueCommit", Cr(m.value));
    }
    function P(B, V, { commit: k } = { commit: !1 }) {
      var X;
      const A = ef(r.value), L = tf(Math.round((B - l.value) / r.value) * r.value + l.value, A), H = Ut(L, l.value, s.value), K = qp(m.value, H, V);
      if (Qp(K, i.value * r.value)) {
        S.value = K.indexOf(H);
        const N = String(K) !== String(m.value);
        N && k && n("valueCommit", K), N && ((X = $.value[S.value]) == null || X.focus(), m.value = K);
      }
    }
    const $ = T([]);
    return lf({
      modelValue: m,
      valueIndexToChangeRef: S,
      thumbElements: $,
      orientation: u,
      min: l,
      max: s,
      disabled: d
    }), (B, V) => (b(), ce(_e, null, [
      q(o(Zt), null, {
        default: y(() => [
          (b(), x(qe(o(u) === "horizontal" ? af : nf), M(B.$attrs, {
            ref: o(f),
            "as-child": B.asChild,
            as: B.as,
            min: o(l),
            max: o(s),
            dir: o(p),
            inverted: B.inverted,
            "aria-disabled": o(d),
            "data-disabled": o(d) ? "" : void 0,
            onPointerdown: V[0] || (V[0] = () => {
              o(d) || (_.value = o(m));
            }),
            onSlideStart: V[1] || (V[1] = (k) => !o(d) && D(k)),
            onSlideMove: V[2] || (V[2] = (k) => !o(d) && h(k)),
            onSlideEnd: V[3] || (V[3] = (k) => !o(d) && E()),
            onHomeKeyDown: V[4] || (V[4] = (k) => !o(d) && P(o(l), 0, { commit: !0 })),
            onEndKeyDown: V[5] || (V[5] = (k) => !o(d) && P(o(s), o(m).length - 1, { commit: !0 })),
            onStepKeyDown: V[6] || (V[6] = (k, A) => {
              if (!o(d)) {
                const K = o(As).includes(k.key) || k.shiftKey && o(Os).includes(k.key) ? 10 : 1, X = S.value, N = o(m)[X], F = o(r) * K * A;
                P(N + F, X, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              C(B.$slots, "default", { modelValue: o(m) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      o(g) ? (b(!0), ce(_e, { key: 0 }, ga(o(m), (k, A) => (b(), ce("input", {
        key: A,
        value: k,
        type: "number",
        style: { display: "none" },
        name: B.name ? B.name + (o(m).length > 1 ? "[]" : "") : void 0,
        disabled: o(d),
        step: o(r)
      }, null, 8, of))), 128)) : pe("", !0)
    ], 64));
  }
}), sf = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = un(), n = Ms(), { forwardRef: l, currentElement: s } = R(), r = I(() => {
      var v, g;
      return (g = (v = e.modelValue) == null ? void 0 : v.value) == null ? void 0 : g[t.index];
    }), i = I(() => r.value === void 0 ? 0 : Rs(r.value, e.min.value ?? 0, e.max.value ?? 100)), u = I(() => {
      var v, g;
      return Yp(t.index, ((g = (v = e.modelValue) == null ? void 0 : v.value) == null ? void 0 : g.length) ?? 0);
    }), d = kl(s), c = I(() => d[n.size].value), p = I(() => c.value ? Zp(c.value, i.value, n.direction) : 0), f = Ga();
    return oe(() => {
      e.thumbElements.value.push(s.value);
    }), Te(() => {
      const v = e.thumbElements.value.findIndex((g) => g === s.value) ?? -1;
      e.thumbElements.value.splice(v, 1);
    }), (v, g) => (b(), x(o(Rt), null, {
      default: y(() => [
        q(o(O), M(v.$attrs, {
          ref: o(l),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: o(e).disabled.value ? void 0 : 0,
          "aria-label": v.$attrs["aria-label"] || u.value,
          "data-disabled": o(e).disabled.value ? "" : void 0,
          "data-orientation": o(e).orientation.value,
          "aria-valuenow": r.value,
          "aria-valuemin": o(e).min.value,
          "aria-valuemax": o(e).max.value,
          "aria-orientation": o(e).orientation.value,
          "as-child": v.asChild,
          as: v.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [o(n).startEdge]: `calc(${i.value}% + ${p.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !o(f) && r.value === void 0 ? "none" : void 0
          },
          onFocus: g[0] || (g[0] = () => {
            o(e).valueIndexToChangeRef.value = v.index;
          })
        }), {
          default: y(() => [
            C(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), og = /* @__PURE__ */ w({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { getItems: e } = Jt(), { forwardRef: n, currentElement: l } = R(), s = I(() => l.value ? e().findIndex((r) => r.ref === l.value) : -1);
    return (r, i) => (b(), x(sf, M({ ref: o(n) }, t, { index: s.value }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), lg = /* @__PURE__ */ w({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = un();
    return R(), (e, n) => (b(), x(o(O), {
      "as-child": e.asChild,
      as: e.as,
      "data-disabled": o(t).disabled.value ? "" : void 0,
      "data-orientation": o(t).orientation.value
    }, {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), sg = /* @__PURE__ */ w({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = un(), e = Ms();
    R();
    const n = I(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (u) => Rs(u, t.min.value, t.max.value)
      );
    }), l = I(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = I(() => 100 - Math.max(...n.value));
    return (r, i) => (b(), x(o(O), {
      "data-disabled": o(t).disabled.value ? "" : void 0,
      "data-orientation": o(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: ke({
        [o(e).startEdge]: `${l.value}%`,
        [o(e).endEdge]: `${s.value}%`
      })
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
let kn = null, St = null;
function rf(a, t) {
  if (t) {
    const e = (t & Ws) !== 0, n = (t & js) !== 0, l = (t & Us) !== 0, s = (t & Gs) !== 0;
    if (e)
      return l ? "se-resize" : s ? "ne-resize" : "e-resize";
    if (n)
      return l ? "sw-resize" : s ? "nw-resize" : "w-resize";
    if (l)
      return "s-resize";
    if (s)
      return "n-resize";
  }
  switch (a) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function uf() {
  St !== null && (document.head.removeChild(St), kn = null, St = null);
}
function Pn(a, t) {
  const e = rf(a, t);
  kn !== e && (kn = e, St === null && (St = document.createElement("style"), document.head.appendChild(St)), St.innerHTML = `*{cursor: ${e}!important;}`);
}
function df({
  defaultSize: a,
  dragState: t,
  layout: e,
  panelData: n,
  panelIndex: l,
  precision: s = 3
}) {
  const r = e[l];
  let i;
  return r == null ? i = a !== void 0 ? a.toPrecision(s) : "1" : n.length === 1 ? i = "1" : i = r.toPrecision(s), {
    flexBasis: 0,
    flexGrow: i,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function Ls(a) {
  return a.type === "keydown";
}
function Ns(a) {
  return a.type.startsWith("mouse");
}
function zs(a) {
  return a.type.startsWith("touch");
}
function dn(a) {
  if (Ns(a))
    return {
      x: a.clientX,
      y: a.clientY
    };
  if (zs(a)) {
    const t = a.touches[0];
    if (t && t.clientX && t.clientY)
      return {
        x: t.clientX,
        y: t.clientY
      };
  }
  return {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY
  };
}
function Ks(a, t) {
  const e = a === "horizontal", { x: n, y: l } = dn(t);
  return e ? n : l;
}
function cf(a, t, e) {
  return a.x < t.x + t.width && a.x + a.width > t.x && a.y < t.y + t.height && a.y + a.height > t.y;
}
function de(a, t = "Assertion failed!") {
  if (!a)
    throw console.error(t), new Error(t);
}
function pf(a, t) {
  if (a === t)
    throw new Error("Cannot compare node with itself");
  const e = {
    a: nl(a),
    b: nl(t)
  };
  let n;
  for (; e.a.at(-1) === e.b.at(-1); )
    a = e.a.pop(), t = e.b.pop(), n = a;
  de(n);
  const l = {
    a: al(tl(e.a)),
    b: al(tl(e.b))
  };
  if (l.a === l.b) {
    const s = n.childNodes, r = {
      a: e.a.at(-1),
      b: e.b.at(-1)
    };
    let i = s.length;
    for (; i--; ) {
      const u = s[i];
      if (u === r.a)
        return 1;
      if (u === r.b)
        return -1;
    }
  }
  return Math.sign(l.a - l.b);
}
const ff = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function vf(a) {
  const t = getComputedStyle(Hs(a)).display;
  return t === "flex" || t === "inline-flex";
}
function mf(a) {
  const t = getComputedStyle(a);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || vf(a)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || ff.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function tl(a) {
  let t = a.length;
  for (; t--; ) {
    const e = a[t];
    if (de(e), mf(e))
      return e;
  }
  return null;
}
function al(a) {
  return a && Number(getComputedStyle(a).zIndex) || 0;
}
function nl(a) {
  const t = [];
  for (; a; )
    t.push(a), a = Hs(a);
  return t;
}
function Hs(a) {
  var t;
  return ((t = a.parentNode) == null ? void 0 : t.host) || a.parentNode;
}
const Ws = 1, js = 2, Us = 4, Gs = 8;
function hf() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
const yf = hf() === "coarse", vt = [];
let cn = !1;
const ct = /* @__PURE__ */ new Map(), pn = /* @__PURE__ */ new Map(), ma = /* @__PURE__ */ new Set();
function gf(a, t, e, n, l) {
  const { ownerDocument: s } = t, r = {
    direction: e,
    element: t,
    hitAreaMargins: n,
    setResizeHandlerState: l
  }, i = ct.get(s) ?? 0;
  return ct.set(s, i + 1), ma.add(r), Ka(), function() {
    pn.delete(a), ma.delete(r);
    const d = ct.get(s) ?? 1;
    ct.set(s, d - 1), Ka(), d === 1 && ct.delete(s);
  };
}
function Oa(a) {
  const { target: t } = a, { x: e, y: n } = dn(a);
  cn = !0, Ro({ target: t, x: e, y: n }), Ka(), vt.length > 0 && (Ao("down", a), a.preventDefault());
}
function it(a) {
  const { x: t, y: e } = dn(a);
  if (!cn) {
    const { target: n } = a;
    Ro({ target: n, x: t, y: e });
  }
  Ao("move", a), qs(), vt.length > 0 && a.preventDefault();
}
function ut(a) {
  const { target: t } = a, { x: e, y: n } = dn(a);
  pn.clear(), cn = !1, vt.length > 0 && a.preventDefault(), Ao("up", a), Ro({ target: t, x: e, y: n }), qs(), Ka();
}
function Ro({
  target: a,
  x: t,
  y: e
}) {
  vt.splice(0);
  let n = null;
  a instanceof HTMLElement && (n = a), ma.forEach((l) => {
    const { element: s, hitAreaMargins: r } = l, i = s.getBoundingClientRect(), { bottom: u, left: d, right: c, top: p } = i, f = yf ? r.coarse : r.fine;
    if (t >= d - f && t <= c + f && e >= p - f && e <= u + f) {
      if (n !== null && s !== n && !s.contains(n) && !n.contains(s) && pf(n, s) > 0) {
        let g = n, m = !1;
        for (; g && !g.contains(s); ) {
          if (cf(
            g.getBoundingClientRect(),
            i
          )) {
            m = !0;
            break;
          }
          g = g.parentElement;
        }
        if (m)
          return;
      }
      vt.push(l);
    }
  });
}
function Dn(a, t) {
  pn.set(a, t);
}
function qs() {
  let a = !1, t = !1;
  vt.forEach((n) => {
    const { direction: l } = n;
    l === "horizontal" ? a = !0 : t = !0;
  });
  let e = 0;
  pn.forEach((n) => {
    e |= n;
  }), a && t ? Pn("intersection", e) : a ? Pn("horizontal", e) : t ? Pn("vertical", e) : uf();
}
function Ka() {
  ct.forEach((a, t) => {
    const { body: e } = t;
    e.removeEventListener("contextmenu", ut), e.removeEventListener("mousedown", Oa), e.removeEventListener("mouseleave", it), e.removeEventListener("mousemove", it), e.removeEventListener("touchmove", it), e.removeEventListener("touchstart", Oa);
  }), window.removeEventListener("mouseup", ut), window.removeEventListener("touchcancel", ut), window.removeEventListener("touchend", ut), ma.size > 0 && (cn ? (vt.length > 0 && ct.forEach((a, t) => {
    const { body: e } = t;
    a > 0 && (e.addEventListener("contextmenu", ut), e.addEventListener("mouseleave", it), e.addEventListener("mousemove", it), e.addEventListener("touchmove", it, {
      passive: !1
    }));
  }), window.addEventListener("mouseup", ut), window.addEventListener("touchcancel", ut), window.addEventListener("touchend", ut)) : ct.forEach((a, t) => {
    const { body: e } = t;
    a > 0 && (e.addEventListener("mousedown", Oa), e.addEventListener("mousemove", it), e.addEventListener("touchmove", it, {
      passive: !1
    }), e.addEventListener("touchstart", Oa));
  }));
}
function Ao(a, t) {
  ma.forEach((e) => {
    const { setResizeHandlerState: n } = e, l = vt.includes(e);
    n(a, l, t);
  });
}
const Oo = 10;
function ha(a, t, e = Oo) {
  a = Number.parseFloat(a.toFixed(e)), t = Number.parseFloat(t.toFixed(e));
  const n = a - t;
  return n === 0 ? 0 : n > 0 ? 1 : -1;
}
function Le(a, t, e) {
  return ha(a, t, e) === 0;
}
function Kt({
  panelConstraints: a,
  panelIndex: t,
  size: e
}) {
  const n = a[t];
  de(n != null);
  const { collapsedSize: l = 0, collapsible: s, maxSize: r = 100, minSize: i = 0 } = n;
  if (ha(e, i) < 0)
    if (s) {
      const u = (l + i) / 2;
      ha(e, u) < 0 ? e = l : e = i;
    } else
      e = i;
  return e = Math.min(r, e), e = Number.parseFloat(e.toFixed(Oo)), e;
}
function ka(a, t) {
  if (a.length !== t.length)
    return !1;
  for (let e = 0; e < a.length; e++)
    if (a[e] !== t[e])
      return !1;
  return !0;
}
function ua({
  delta: a,
  layout: t,
  panelConstraints: e,
  pivotIndices: n,
  trigger: l
}) {
  if (Le(a, 0))
    return t;
  const s = [...t], [r, i] = n;
  de(r != null), de(i != null);
  let u = 0;
  if (l === "keyboard") {
    {
      const c = a < 0 ? i : r, p = e[c];
      if (de(p), p.collapsible) {
        const f = t[c];
        de(f != null);
        const v = e[c];
        de(v);
        const { collapsedSize: g = 0, minSize: m = 0 } = v;
        if (Le(f, g)) {
          const S = m - f;
          ha(S, Math.abs(a)) > 0 && (a = a < 0 ? 0 - S : S);
        }
      }
    }
    {
      const c = a < 0 ? r : i, p = e[c];
      de(p);
      const { collapsible: f } = p;
      if (f) {
        const v = t[c];
        de(v != null);
        const g = e[c];
        de(g);
        const { collapsedSize: m = 0, minSize: S = 0 } = g;
        if (Le(v, S)) {
          const _ = v - m;
          ha(_, Math.abs(a)) > 0 && (a = a < 0 ? 0 - _ : _);
        }
      }
    }
  }
  {
    const c = a < 0 ? 1 : -1;
    let p = a < 0 ? i : r, f = 0;
    for (; ; ) {
      const g = t[p];
      de(g != null);
      const S = Kt({
        panelConstraints: e,
        panelIndex: p,
        size: 100
      }) - g;
      if (f += S, p += c, p < 0 || p >= e.length)
        break;
    }
    const v = Math.min(Math.abs(a), Math.abs(f));
    a = a < 0 ? 0 - v : v;
  }
  {
    let p = a < 0 ? r : i;
    for (; p >= 0 && p < e.length; ) {
      const f = Math.abs(a) - Math.abs(u), v = t[p];
      de(v != null);
      const g = v - f, m = Kt({
        panelConstraints: e,
        panelIndex: p,
        size: g
      });
      if (!Le(v, m) && (u += v - m, s[p] = m, u.toPrecision(3).localeCompare(Math.abs(a).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      a < 0 ? p-- : p++;
    }
  }
  if (Le(u, 0))
    return t;
  {
    const c = a < 0 ? i : r, p = t[c];
    de(p != null);
    const f = p + u, v = Kt({
      panelConstraints: e,
      panelIndex: c,
      size: f
    });
    if (s[c] = v, !Le(v, f)) {
      let g = f - v, S = a < 0 ? i : r;
      for (; S >= 0 && S < e.length; ) {
        const _ = s[S];
        de(_ != null);
        const D = _ + g, h = Kt({
          panelConstraints: e,
          panelIndex: S,
          size: D
        });
        if (Le(_, h) || (g -= h - _, s[S] = h), Le(g, 0))
          break;
        a > 0 ? S-- : S++;
      }
    }
  }
  const d = s.reduce((c, p) => p + c, 0);
  return Le(d, 100) ? s : t;
}
function Ys(a, t = document) {
  var n;
  if (!ba)
    return null;
  if (t instanceof HTMLElement && ((n = t == null ? void 0 : t.dataset) == null ? void 0 : n.panelGroupId) === a)
    return t;
  const e = t.querySelector(
    `[data-panel-group][data-panel-group-id="${a}"]`
  );
  return e || null;
}
function fn(a, t = document) {
  if (!ba)
    return null;
  const e = t.querySelector(`[data-panel-resize-handle-id="${a}"]`);
  return e || null;
}
function Xs(a, t, e = document) {
  return ba ? ya(a, e).findIndex(
    (s) => s.getAttribute("data-panel-resize-handle-id") === t
  ) ?? null : null;
}
function ya(a, t = document) {
  return ba ? Array.from(
    t.querySelectorAll(
      `[data-panel-resize-handle-id][data-panel-group-id="${a}"]`
    )
  ) : [];
}
function bf(a, t, e, n = document) {
  var d, c;
  const l = fn(t, n), s = ya(a, n), r = l ? s.indexOf(l) : -1, i = ((d = e[r]) == null ? void 0 : d.id) ?? null, u = ((c = e[r + 1]) == null ? void 0 : c.id) ?? null;
  return [i, u];
}
function Cf(a, t, e, n, l) {
  const s = e === "horizontal", r = fn(t, l);
  de(r);
  const i = r.getAttribute("data-panel-group-id");
  de(i);
  const { initialCursorPosition: u } = n, d = Ks(e, a), c = Ys(i, l);
  de(c);
  const p = c.getBoundingClientRect(), f = s ? p.width : p.height;
  return (d - u) / f * 100;
}
function wf(a, t, e, n, l, s) {
  if (Ls(a)) {
    const r = e === "horizontal";
    let i = 0;
    a.shiftKey ? i = 100 : i = l ?? 10;
    let u = 0;
    switch (a.key) {
      case "ArrowDown":
        u = r ? 0 : i;
        break;
      case "ArrowLeft":
        u = r ? -i : 0;
        break;
      case "ArrowRight":
        u = r ? i : 0;
        break;
      case "ArrowUp":
        u = r ? 0 : -i;
        break;
      case "End":
        u = 100;
        break;
      case "Home":
        u = -100;
        break;
    }
    return u;
  } else
    return n == null ? 0 : Cf(
      a,
      t,
      e,
      n,
      s
    );
}
function _f({
  layout: a,
  panelsArray: t,
  pivotIndices: e
}) {
  let n = 0, l = 100, s = 0, r = 0;
  const i = e[0];
  de(i != null), t.forEach((p, f) => {
    const { constraints: v } = p, { maxSize: g = 100, minSize: m = 0 } = v;
    f === i ? (n = m, l = g) : (s += m, r += g);
  });
  const u = Math.min(l, 100 - s), d = Math.max(n, 100 - r), c = a[i];
  return {
    valueMax: u,
    valueMin: d,
    valueNow: c
  };
}
function xf({
  panelDataArray: a
}) {
  const t = Array(a.length), e = a.map(
    (s) => s.constraints
  );
  let n = 0, l = 100;
  for (let s = 0; s < a.length; s++) {
    const r = e[s];
    de(r);
    const { defaultSize: i } = r;
    i != null && (n++, t[s] = i, l -= i);
  }
  for (let s = 0; s < a.length; s++) {
    const r = e[s];
    de(r);
    const { defaultSize: i } = r;
    if (i != null)
      continue;
    const u = a.length - n, d = l / u;
    n++, t[s] = d, l -= d;
  }
  return t;
}
function ia(a, t, e) {
  t.forEach((n, l) => {
    const s = a[l];
    de(s);
    const { callbacks: r, constraints: i, id: u } = s, { collapsedSize: d = 0, collapsible: c } = i, p = e[u];
    if (p == null || n !== p) {
      e[u] = n;
      const { onCollapse: f, onExpand: v, onResize: g } = r;
      g && g(n, p), c && (f || v) && (v && (p == null || p === d) && n !== d && v(), f && (p == null || p !== d) && n === d && f());
    }
  });
}
function Sf(a, t = 10) {
  let e = null;
  return (...l) => {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      a(...l);
    }, t);
  };
}
function Zs(a, t, e) {
  const n = Xs(
    a,
    t,
    e
  );
  return n != null ? [n, n + 1] : [-1, -1];
}
function Ef({
  layout: a,
  panelConstraints: t
}) {
  const e = [...a], n = e.reduce(
    (s, r) => s + r,
    0
  );
  if (e.length !== t.length)
    throw new Error(
      `Invalid ${t.length} panel layout: ${e.map((s) => `${s}%`).join(", ")}`
    );
  if (!Le(n, 100)) {
    console.warn(
      `WARNING: Invalid layout total size: ${e.map((s) => `${s}%`).join(", ")}. Layout normalization will be applied.`
    );
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      de(r != null);
      const i = 100 / n * r;
      e[s] = i;
    }
  }
  let l = 0;
  for (let s = 0; s < t.length; s++) {
    const r = e[s];
    de(r != null);
    const i = Kt({
      panelConstraints: t,
      panelIndex: s,
      size: r
    });
    r !== i && (l += r - i, e[s] = i);
  }
  if (!Le(l, 0))
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      de(r != null);
      const i = r + l, u = Kt({
        panelConstraints: t,
        panelIndex: s,
        size: i
      });
      if (r !== u && (l -= u - r, e[s] = u, Le(l, 0)))
        break;
    }
  return e;
}
function ol(a) {
  try {
    if (typeof localStorage < "u")
      a.getItem = (t) => localStorage.getItem(t), a.setItem = (t, e) => {
        localStorage.setItem(t, e);
      };
    else
      throw new TypeError("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), a.getItem = () => null, a.setItem = () => {
    };
  }
}
function Js(a) {
  return `radix-vue:${a}`;
}
function Qs(a) {
  return a.map((t) => {
    const { constraints: e, id: n, idIsFromProps: l, order: s } = t;
    return l ? n : s ? `${s}:${JSON.stringify(e)}` : JSON.stringify(e);
  }).sort((t, e) => t.localeCompare(e)).join(",");
}
function er(a, t) {
  try {
    const e = Js(a), n = t.getItem(e);
    if (n) {
      const l = JSON.parse(n);
      if (typeof l == "object" && l != null)
        return l;
    }
  } catch {
  }
  return null;
}
function Pf(a, t, e) {
  const n = er(a, e) ?? {}, l = Qs(t);
  return n[l] ?? null;
}
function Df(a, t, e, n, l) {
  const s = Js(a), r = Qs(t), i = er(a, l) ?? {};
  i[r] = {
    expandToSizes: Object.fromEntries(e.entries()),
    layout: n
  };
  try {
    l.setItem(s, JSON.stringify(i));
  } catch (u) {
    console.error(u);
  }
}
function $f({
  eagerValuesRef: a,
  groupId: t,
  layout: e,
  panelDataArray: n,
  panelGroupElement: l,
  setLayout: s
}) {
  ye((r) => {
    const i = l.value;
    if (!i)
      return;
    const u = ya(
      t,
      i
    );
    for (let d = 0; d < n.length - 1; d++) {
      const { valueMax: c, valueMin: p, valueNow: f } = _f({
        layout: e.value,
        panelsArray: n,
        pivotIndices: [d, d + 1]
      }), v = u[d];
      if (v != null) {
        const g = n[d];
        de(g), v.setAttribute("aria-controls", g.id), v.setAttribute(
          "aria-valuemax",
          `${Math.round(c)}`
        ), v.setAttribute(
          "aria-valuemin",
          `${Math.round(p)}`
        ), v.setAttribute(
          "aria-valuenow",
          f != null ? `${Math.round(f)}` : ""
        );
      }
    }
    r(() => {
      u.forEach((d) => {
        d.removeAttribute("aria-controls"), d.removeAttribute("aria-valuemax"), d.removeAttribute("aria-valuemin"), d.removeAttribute("aria-valuenow");
      });
    });
  }), ye((r) => {
    const i = l.value;
    if (!i)
      return;
    const u = a.value;
    de(u);
    const { panelDataArray: d } = u, c = Ys(t, i);
    de(c != null, `No group found for id "${t}"`);
    const p = ya(t, i);
    de(p);
    const f = p.map((v) => {
      const g = v.getAttribute("data-panel-resize-handle-id");
      de(g);
      const [m, S] = bf(
        t,
        g,
        d,
        i
      );
      if (m == null || S == null)
        return () => {
        };
      const _ = (D) => {
        if (!D.defaultPrevented)
          switch (D.key) {
            case "Enter": {
              D.preventDefault();
              const h = d.findIndex(
                (E) => E.id === m
              );
              if (h >= 0) {
                const E = d[h];
                de(E);
                const P = e.value[h], {
                  collapsedSize: $ = 0,
                  collapsible: B,
                  minSize: V = 0
                } = E.constraints;
                if (P != null && B) {
                  const k = ua({
                    delta: Le(P, $) ? V - $ : $ - P,
                    layout: e.value,
                    panelConstraints: d.map(
                      (A) => A.constraints
                    ),
                    pivotIndices: Zs(
                      t,
                      g,
                      i
                    ),
                    trigger: "keyboard"
                  });
                  e.value !== k && s(k);
                }
              }
              break;
            }
          }
      };
      return v.addEventListener("keydown", _), () => {
        v.removeEventListener("keydown", _);
      };
    });
    r(() => {
      f.forEach((v) => v());
    });
  });
}
const If = 100, da = {
  getItem: (a) => (ol(da), da.getItem(a)),
  setItem: (a, t) => {
    ol(da), da.setItem(a, t);
  }
}, [tr, Bf] = Q("PanelGroup"), rg = /* @__PURE__ */ w({
  __name: "SplitterGroup",
  props: {
    id: {},
    autoSaveId: { default: null },
    direction: {},
    keyboardResizeBy: { default: 10 },
    storage: { default: () => da },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["layout"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = {}, s = ve(e.id, "radix-vue-splitter-group"), r = be(), { forwardRef: i, currentElement: u } = R(), d = T(null), c = T([]), p = T({}), f = T(/* @__PURE__ */ new Map()), v = T(0), g = I(() => ({
      autoSaveId: e.autoSaveId,
      direction: e.direction,
      dragState: d.value,
      id: s,
      keyboardResizeBy: e.keyboardResizeBy,
      storage: e.storage
    })), m = T({
      layout: c.value,
      panelDataArray: [],
      panelDataArrayChanged: !1
    }), S = (F) => c.value = F;
    $f({
      eagerValuesRef: m,
      groupId: s,
      layout: c,
      panelDataArray: m.value.panelDataArray,
      setLayout: S,
      panelGroupElement: u
    }), ye(() => {
      const { panelDataArray: F } = m.value, { autoSaveId: j } = e;
      if (j) {
        if (c.value.length === 0 || c.value.length !== F.length)
          return;
        let z = l[j];
        z || (z = Sf(
          Df,
          If
        ), l[j] = z);
        const Z = [...F], G = new Map(
          f.value
        );
        z(
          j,
          Z,
          G,
          c.value,
          e.storage
        );
      }
    });
    function _(F, j) {
      const { panelDataArray: z } = m.value, Z = X(z, F);
      return df({
        defaultSize: j,
        dragState: d.value,
        layout: c.value,
        panelData: z,
        panelIndex: Z
      });
    }
    function D(F) {
      const { panelDataArray: j } = m.value;
      j.push(F), j.sort((z, Z) => {
        const G = z.order, J = Z.order;
        return G == null && J == null ? 0 : G == null ? -1 : J == null ? 1 : G - J;
      }), m.value.panelDataArrayChanged = !0;
    }
    ee(() => m.value.panelDataArrayChanged, () => {
      if (m.value.panelDataArrayChanged) {
        m.value.panelDataArrayChanged = !1;
        const { autoSaveId: F, storage: j } = g.value, { layout: z, panelDataArray: Z } = m.value;
        let G = null;
        if (F) {
          const te = Pf(F, Z, j);
          te && (f.value = new Map(
            Object.entries(te.expandToSizes)
          ), G = te.layout);
        }
        G === null && (G = xf({
          panelDataArray: Z
        }));
        const J = Ef({
          layout: G,
          panelConstraints: Z.map(
            (te) => te.constraints
          )
        });
        Lr(z, J) || (S(J), m.value.layout = J, n("layout", J), ia(
          Z,
          J,
          p.value
        ));
      }
    });
    function h(F) {
      return function(z) {
        z.preventDefault();
        const Z = u.value;
        if (!Z)
          return () => null;
        const { direction: G, dragState: J, id: te, keyboardResizeBy: fe } = g.value, { layout: Y, panelDataArray: le } = m.value, { initialLayout: he } = J ?? {}, Ce = Zs(
          te,
          F,
          Z
        );
        let ge = wf(
          z,
          F,
          G,
          J,
          fe,
          Z
        );
        if (ge === 0)
          return;
        const $e = G === "horizontal";
        r.value === "rtl" && $e && (ge = -ge);
        const ue = le.map((He) => He.constraints), Se = ua({
          delta: ge,
          layout: he ?? Y,
          panelConstraints: ue,
          pivotIndices: Ce,
          trigger: Ls(z) ? "keyboard" : "mouse-or-touch"
        }), Fe = !ka(Y, Se);
        (Ns(z) || zs(z)) && v.value !== ge && (v.value = ge, Fe ? Dn(F, 0) : $e ? Dn(
          F,
          ge < 0 ? Ws : js
        ) : Dn(
          F,
          ge < 0 ? Us : Gs
        )), Fe && (S(Se), m.value.layout = Se, n("layout", Se), ia(
          le,
          Se,
          p.value
        ));
      };
    }
    function E(F, j) {
      const { layout: z, panelDataArray: Z } = m.value, G = Z.map((he) => he.constraints), { panelSize: J, pivotIndices: te } = N(
        Z,
        F,
        z
      );
      de(J != null);
      const Y = X(Z, F) === Z.length - 1 ? J - j : j - J, le = ua({
        delta: Y,
        layout: z,
        panelConstraints: G,
        pivotIndices: te,
        trigger: "imperative-api"
      });
      ka(z, le) || (S(le), m.value.layout = le, n("layout", le), ia(
        Z,
        le,
        p.value
      ));
    }
    function P(F, j) {
      const { layout: z, panelDataArray: Z } = m.value, G = X(Z, F);
      Z[G] = F, m.value.panelDataArrayChanged = !0;
      const {
        collapsedSize: J = 0,
        collapsible: te
      } = j, {
        collapsedSize: fe = 0,
        collapsible: Y,
        maxSize: le = 100,
        minSize: he = 0
      } = F.constraints, { panelSize: Ce } = N(
        Z,
        F,
        z
      );
      Ce !== null && (te && Y && Ce === J ? J !== fe && E(F, fe) : Ce < he ? E(F, he) : Ce > le && E(F, le));
    }
    function $(F, j) {
      const { direction: z } = g.value, { layout: Z } = m.value;
      if (!u.value)
        return;
      const G = fn(
        F,
        u.value
      );
      de(G);
      const J = Ks(
        z,
        j
      );
      d.value = {
        dragHandleId: F,
        dragHandleRect: G.getBoundingClientRect(),
        initialCursorPosition: J,
        initialLayout: Z
      };
    }
    function B() {
      d.value = null;
    }
    function V(F) {
      const { panelDataArray: j } = m.value, z = X(j, F);
      z >= 0 && (j.splice(z, 1), delete p.value[F.id], m.value.panelDataArrayChanged = !0);
    }
    function k(F) {
      const { layout: j, panelDataArray: z } = m.value;
      if (F.constraints.collapsible) {
        const Z = z.map(
          (fe) => fe.constraints
        ), {
          collapsedSize: G = 0,
          panelSize: J,
          pivotIndices: te
        } = N(z, F, j);
        if (de(
          J != null,
          `Panel size not found for panel "${F.id}"`
        ), J !== G) {
          f.value.set(F.id, J);
          const Y = X(z, F) === z.length - 1 ? J - G : G - J, le = ua({
            delta: Y,
            layout: j,
            panelConstraints: Z,
            pivotIndices: te,
            trigger: "imperative-api"
          });
          ka(j, le) || (S(le), m.value.layout = le, n("layout", le), ia(
            z,
            le,
            p.value
          ));
        }
      }
    }
    function A(F) {
      const { layout: j, panelDataArray: z } = m.value;
      if (F.constraints.collapsible) {
        const Z = z.map(
          (Y) => Y.constraints
        ), {
          collapsedSize: G = 0,
          panelSize: J,
          minSize: te = 0,
          pivotIndices: fe
        } = N(z, F, j);
        if (J === G) {
          const Y = f.value.get(
            F.id
          ), le = Y != null && Y >= te ? Y : te, Ce = X(z, F) === z.length - 1 ? J - le : le - J, ge = ua({
            delta: Ce,
            layout: j,
            panelConstraints: Z,
            pivotIndices: fe,
            trigger: "imperative-api"
          });
          ka(j, ge) || (S(ge), m.value.layout = ge, n("layout", ge), ia(
            z,
            ge,
            p.value
          ));
        }
      }
    }
    function L(F) {
      const { layout: j, panelDataArray: z } = m.value, { panelSize: Z } = N(z, F, j);
      return de(
        Z != null,
        `Panel size not found for panel "${F.id}"`
      ), Z;
    }
    function H(F) {
      const { layout: j, panelDataArray: z } = m.value, {
        collapsedSize: Z = 0,
        collapsible: G,
        panelSize: J
      } = N(z, F, j);
      return G === !0 && J === Z;
    }
    function K(F) {
      const { layout: j, panelDataArray: z } = m.value, {
        collapsedSize: Z = 0,
        collapsible: G,
        panelSize: J
      } = N(z, F, j);
      return de(
        J != null,
        `Panel size not found for panel "${F.id}"`
      ), !G || J > Z;
    }
    Bf({
      direction: e.direction,
      dragState: d.value,
      groupId: s,
      reevaluatePanelConstraints: P,
      registerPanel: D,
      registerResizeHandle: h,
      resizePanel: E,
      startDragging: $,
      stopDragging: B,
      unregisterPanel: V,
      panelGroupElement: u,
      collapsePanel: k,
      expandPanel: A,
      isPanelCollapsed: H,
      isPanelExpanded: K,
      getPanelSize: L,
      getPanelStyle: _
    });
    function X(F, j) {
      return F.findIndex(
        (z) => z === j || z.id === j.id
      );
    }
    function N(F, j, z) {
      const Z = X(F, j), J = Z === F.length - 1 ? [Z - 1, Z] : [Z, Z + 1], te = z[Z];
      return {
        ...j.constraints,
        panelSize: te,
        pivotIndices: J
      };
    }
    return (F, j) => (b(), x(o(O), {
      ref: o(i),
      as: F.as,
      "as-child": F.asChild,
      style: ke({
        display: "flex",
        flexDirection: F.direction === "horizontal" ? "row" : "column",
        height: "100%",
        overflow: "hidden",
        width: "100%"
      }),
      "data-panel-group": "",
      "data-orientation": F.direction,
      "data-panel-group-id": o(s)
    }, {
      default: y(() => [
        C(F.$slots, "default", { layout: c.value })
      ]),
      _: 3
    }, 8, ["as", "as-child", "style", "data-orientation", "data-panel-group-id"]));
  }
}), ig = /* @__PURE__ */ w({
  __name: "SplitterPanel",
  props: {
    collapsedSize: {},
    collapsible: { type: Boolean },
    defaultSize: {},
    id: {},
    maxSize: {},
    minSize: {},
    order: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["collapse", "expand", "resize"],
  setup(a, { expose: t, emit: e }) {
    const n = a, l = e, s = tr();
    if (s === null)
      throw new Error(
        "SplitterPanel components must be rendered within a SplitterGroup container"
      );
    const { collapsePanel: r, expandPanel: i, getPanelSize: u, getPanelStyle: d, isPanelCollapsed: c, resizePanel: p, groupId: f, reevaluatePanelConstraints: v, registerPanel: g, unregisterPanel: m } = s, S = ve(n.id, "radix-vue-splitter-panel"), _ = I(() => ({
      callbacks: {
        onCollapse: () => l("collapse"),
        onExpand: () => l("expand"),
        onResize: (...P) => l("resize", ...P)
      },
      constraints: {
        collapsedSize: n.collapsedSize && Number.parseFloat(n.collapsedSize.toFixed(Oo)),
        collapsible: n.collapsible,
        defaultSize: n.defaultSize,
        /** Panel id (unique within group); falls back to useId when not provided */
        /** Panel id (unique within group); falls back to useId when not provided */
        maxSize: n.maxSize,
        minSize: n.minSize
      },
      id: S,
      idIsFromProps: n.id !== void 0,
      order: n.order
    }));
    ee(() => _.value.constraints, (P, $) => {
      ($.collapsedSize !== P.collapsedSize || $.collapsible !== P.collapsible || $.maxSize !== P.maxSize || $.minSize !== P.minSize) && v(_.value, $);
    }, { deep: !0 }), oe(() => {
      const P = _.value;
      g(P), Te(() => {
        m(P);
      });
    });
    const D = I(() => d(_.value, n.defaultSize)), h = I(() => c(_.value)), E = I(() => !h.value);
    return t({
      /** If panel is `collapsible`, collapse it fully. */
      collapse: () => {
        r(_.value);
      },
      /** If panel is currently collapsed, expand it to its most recent size. */
      expand: () => {
        i(_.value);
      },
      /** Gets the current size of the panel as a percentage (1 - 100). */
      getSize() {
        return u(_.value);
      },
      /** Resize panel to the specified percentage (1 - 100). */
      resize: (P) => {
        p(_.value, P);
      },
      /** Returns `true` if the panel is currently collapsed */
      isCollapsed: h,
      /** Returns `true` if the panel is currently not collapsed */
      isExpanded: E
    }), (P, $) => (b(), x(o(O), {
      id: o(S),
      style: ke(D.value),
      as: P.as,
      "as-child": P.asChild,
      "data-panel": "",
      "data-panel-collapsible": P.collapsible || void 0,
      "data-panel-group-id": o(f),
      "data-panel-id": o(S),
      "data-panel-size": Number.parseFloat(`${D.value.flexGrow}`).toFixed(1),
      "data-state": P.collapsible ? h.value ? "collapsed" : "expanded" : void 0
    }, {
      default: y(() => [
        C(P.$slots, "default", {
          isCollapsed: h.value,
          isExpanded: E.value
        })
      ]),
      _: 3
    }, 8, ["id", "style", "as", "as-child", "data-panel-collapsible", "data-panel-group-id", "data-panel-id", "data-panel-size", "data-state"]));
  }
});
function Tf({
  disabled: a,
  handleId: t,
  resizeHandler: e,
  panelGroupElement: n
}) {
  ye((l) => {
    const s = n.value;
    if (a.value || e.value === null || s === null)
      return;
    const r = fn(t, s);
    if (r == null)
      return;
    const i = (u) => {
      var d;
      if (!u.defaultPrevented)
        switch (u.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            u.preventDefault(), (d = e.value) == null || d.call(e, u);
            break;
          }
          case "F6": {
            u.preventDefault();
            const c = r.getAttribute("data-panel-group-id");
            de(c);
            const p = ya(
              c,
              s
            ), f = Xs(
              c,
              t,
              s
            );
            de(f !== null);
            const v = u.shiftKey ? f > 0 ? f - 1 : p.length - 1 : f + 1 < p.length ? f + 1 : 0;
            p[v].focus();
            break;
          }
        }
    };
    r.addEventListener("keydown", i), l(() => {
      r.removeEventListener("keydown", i);
    });
  });
}
const ug = /* @__PURE__ */ w({
  __name: "SplitterResizeHandle",
  props: {
    id: {},
    hitAreaMargins: {},
    tabindex: { default: 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["dragging"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), { disabled: r } = ne(e), i = tr();
    if (i === null)
      throw new Error(
        "PanelResizeHandle components must be rendered within a PanelGroup container"
      );
    const {
      direction: u,
      groupId: d,
      registerResizeHandle: c,
      startDragging: p,
      stopDragging: f,
      panelGroupElement: v
    } = i, g = ve(e.id, "radix-vue-splitter-resize-handle"), m = T("inactive"), S = T(!1), _ = T(null);
    return ee(r, () => {
      ba && (r.value ? _.value = null : _.value = c(g));
    }, { immediate: !0 }), ye((D) => {
      var P, $;
      if (r.value || _.value === null)
        return;
      const h = s.value;
      if (!h)
        return;
      de(h);
      const E = (B, V, k) => {
        var A;
        if (V)
          switch (B) {
            case "down": {
              m.value = "drag", p(g, k), n("dragging", !0);
              break;
            }
            case "move": {
              m.value !== "drag" && (m.value = "hover"), (A = _.value) == null || A.call(_, k);
              break;
            }
            case "up": {
              m.value = "hover", f(), n("dragging", !1);
              break;
            }
          }
        else
          m.value = "inactive";
      };
      D(gf(
        g,
        h,
        u,
        {
          // Coarse inputs (e.g. finger/touch)
          coarse: ((P = e.hitAreaMargins) == null ? void 0 : P.coarse) ?? 15,
          // Fine inputs (e.g. mouse)
          fine: (($ = e.hitAreaMargins) == null ? void 0 : $.fine) ?? 5
        },
        E
      ));
    }), Tf({
      disabled: r,
      resizeHandler: _,
      handleId: g,
      panelGroupElement: v
    }), (D, h) => (b(), x(o(O), {
      id: o(g),
      ref: o(l),
      style: {
        touchAction: "none",
        userSelect: "none"
      },
      as: D.as,
      "as-child": D.asChild,
      role: "separator",
      "data-resize-handle": "",
      tabindex: D.tabindex,
      "data-state": m.value,
      "data-disabled": o(r) ? "" : void 0,
      "data-orientation": o(u),
      "data-panel-group-id": o(d),
      "data-resize-handle-active": m.value === "drag" ? "pointer" : S.value ? "keyboard" : void 0,
      "data-resize-handle-state": m.value,
      "data-panel-resize-handle-enabled": !o(r),
      "data-panel-resize-handle-id": o(g),
      onBlur: h[0] || (h[0] = (E) => S.value = !1),
      onFocus: h[1] || (h[1] = (E) => S.value = !1)
    }, {
      default: y(() => [
        C(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "tabindex", "data-state", "data-disabled", "data-orientation", "data-panel-group-id", "data-resize-handle-active", "data-resize-handle-state", "data-panel-resize-handle-enabled", "data-panel-resize-handle-id"]));
  }
}), Rf = {
  "aria-live": "polite",
  "aria-atomic": "true",
  role: "status",
  style: {
    transform: "translateX(-100%)",
    position: "absolute",
    pointerEvents: "none",
    opacity: 0,
    margin: 0
  }
}, [ko, Af] = Q("StepperRoot"), dg = /* @__PURE__ */ w({
  __name: "StepperRoot",
  props: {
    defaultValue: { default: 1 },
    orientation: { default: "horizontal" },
    dir: {},
    modelValue: {},
    linear: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { dir: l, orientation: s, linear: r } = ne(e), i = be(l);
    R();
    const u = T(/* @__PURE__ */ new Set()), d = T(/* @__PURE__ */ new Set()), c = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    });
    return Af({
      modelValue: c,
      changeModelValue: (p) => {
        c.value = p;
      },
      orientation: s,
      dir: i,
      linear: r,
      stepperItems: u,
      totalStepperItems: d
    }), (p, f) => (b(), x(o(O), {
      role: "group",
      "aria-label": "progress",
      as: p.as,
      "as-child": p.asChild,
      "data-linear": o(r) ? "" : void 0,
      "data-orientation": p.orientation
    }, {
      default: y(() => [
        C(p.$slots, "default", { modelValue: o(c) }),
        Ge("div", Rf, " Step " + De(o(c)) + " of " + De(d.value.size), 1)
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-linear", "data-orientation"]));
  }
}), [Pa, Of] = Q("StepperItem"), cg = /* @__PURE__ */ w({
  __name: "StepperItem",
  props: {
    step: {},
    disabled: { type: Boolean, default: !1 },
    completed: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { disabled: e, step: n, completed: l } = ne(t), { forwardRef: s } = R(), r = ko(), i = ve(void 0, "radix-vue-stepper-item-title"), u = ve(void 0, "radix-vue-stepper-item-description"), d = I(() => l.value ? "completed" : r.modelValue.value === n.value ? "active" : r.modelValue.value > n.value ? "completed" : "inactive"), c = I(() => e.value ? !1 : r.linear.value ? n.value <= r.modelValue.value || n.value === r.modelValue.value + 1 : !0);
    return Of({
      titleId: i,
      descriptionId: u,
      state: d,
      disabled: e,
      step: n,
      isFocusable: c
    }), (p, f) => (b(), x(o(O), {
      ref: o(s),
      as: p.as,
      "as-child": p.asChild,
      "aria-current": d.value === "active" ? "true" : void 0,
      "data-state": d.value,
      disabled: o(e) || !c.value ? "" : void 0,
      "data-disabled": o(e) || !c.value ? "" : void 0,
      "data-orientation": o(r).orientation.value
    }, {
      default: y(() => [
        C(p.$slots, "default", { state: d.value })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-current", "data-state", "disabled", "data-disabled", "data-orientation"]));
  }
}), pg = /* @__PURE__ */ w({
  __name: "StepperTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = ko(), e = Pa(), n = et(), l = I(() => Array.from(t.stepperItems.value));
    function s(d) {
      if (!e.disabled.value) {
        if (t.linear.value) {
          if ((e.step.value <= t.modelValue.value || e.step.value === t.modelValue.value + 1) && d.ctrlKey === !1) {
            t.changeModelValue(e.step.value);
            return;
          }
        } else if (d.ctrlKey === !1) {
          t.changeModelValue(e.step.value);
          return;
        }
        d.preventDefault();
      }
    }
    function r(d) {
      d.preventDefault(), !e.disabled.value && ((d.key === n.ENTER || d.key === n.SPACE) && !d.ctrlKey && !d.shiftKey && t.changeModelValue(e.step.value), [n.ARROW_LEFT, n.ARROW_RIGHT, n.ARROW_UP, n.ARROW_DOWN].includes(d.key) && Bt(d, document.activeElement, void 0, {
        itemsArray: l.value,
        focus: !0,
        loop: !1,
        arrowKeyOptions: t.orientation.value,
        dir: t.dir.value
      }));
    }
    const { forwardRef: i, currentElement: u } = R();
    return oe(() => {
      e.isFocusable.value && t.stepperItems.value.add(u.value), t.totalStepperItems.value.add(u.value);
    }), Te(() => {
      t.stepperItems.value.delete(u.value), t.totalStepperItems.value.delete(u.value);
    }), ee(e.isFocusable, (d) => {
      d ? t.stepperItems.value.add(u.value) : t.stepperItems.value.delete(u.value);
    }), (d, c) => (b(), x(o(O), {
      ref: o(i),
      type: d.as === "button" ? "button" : void 0,
      as: d.as,
      "as-child": d.asChild,
      "data-state": o(e).state.value,
      disabled: o(e).disabled.value || !o(e).isFocusable.value ? "" : void 0,
      "data-disabled": o(e).disabled.value || !o(e).isFocusable.value ? "" : void 0,
      "data-orientation": o(t).orientation.value,
      tabindex: o(e).isFocusable.value ? 0 : -1,
      "aria-describedby": o(e).descriptionId,
      "aria-labelledby": o(e).titleId,
      onMousedown: ie(s, ["left"]),
      onKeydown: re(r, ["enter", "space", "left", "right", "up", "down"])
    }, {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child", "data-state", "disabled", "data-disabled", "data-orientation", "tabindex", "aria-describedby", "aria-labelledby"]));
  }
}), fg = /* @__PURE__ */ w({
  __name: "StepperDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Pa();
    return (n, l) => (b(), x(o(O), M(t, {
      id: o(e).descriptionId
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), vg = /* @__PURE__ */ w({
  __name: "StepperTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h4" }
  },
  setup(a) {
    const t = a, e = Pa();
    return R(), (n, l) => (b(), x(o(O), M(t, {
      id: o(e).titleId
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), mg = /* @__PURE__ */ w({
  __name: "StepperIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Pa();
    return R(), (n, l) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          me(" Step " + De(o(e).step.value), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), hg = /* @__PURE__ */ w({
  __name: "StepperSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ko(), n = Pa();
    return R(), (l, s) => (b(), x(o(Gp), M(t, {
      decorative: "",
      orientation: o(e).orientation.value,
      "data-state": o(n).state.value
    }), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["orientation", "data-state"]));
  }
}), kf = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Mf, Vf] = Q("SwitchRoot"), yg = /* @__PURE__ */ w({
  __name: "SwitchRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: { default: "on" },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a, { emit: t }) {
    const e = a, n = t, { disabled: l } = ne(e), s = ae(e, "checked", n, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    });
    function r() {
      l.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: u } = R(), d = Qe(u), c = I(() => {
      var p;
      return e.id && u.value ? (p = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Vf({
      checked: s,
      toggleCheck: r,
      disabled: l
    }), (p, f) => (b(), ce(_e, null, [
      q(o(O), M(p.$attrs, {
        id: p.id,
        ref: o(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || c.value,
        "aria-checked": o(s),
        "aria-required": p.required,
        "data-state": o(s) ? "checked" : "unchecked",
        "data-disabled": o(l) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: o(l),
        onClick: r,
        onKeydown: re(ie(r, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          C(p.$slots, "default", { checked: o(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      o(d) ? (b(), ce("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "",
        disabled: o(l),
        required: p.required,
        value: p.value,
        checked: !!o(s),
        "data-state": o(s) ? "checked" : "unchecked",
        "data-disabled": o(l) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, kf)) : pe("", !0)
    ], 64));
  }
}), gg = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = Mf();
    return R(), (e, n) => {
      var l;
      return b(), x(o(O), {
        "data-state": (l = o(t).checked) != null && l.value ? "checked" : "unchecked",
        "data-disabled": o(t).disabled.value ? "" : void 0,
        "as-child": e.asChild,
        as: e.as
      }, {
        default: y(() => [
          C(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [vn, Ff] = Q("TabsRoot"), bg = /* @__PURE__ */ w({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {},
    activationMode: { default: "automatic" },
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { orientation: l, dir: s } = ne(e), r = be(s);
    R();
    const i = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), u = T();
    return Ff({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: l,
      dir: r,
      activationMode: e.activationMode,
      baseId: ve(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (b(), x(o(O), {
      dir: o(r),
      "data-orientation": o(l),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: y(() => [
        C(d.$slots, "default", { modelValue: o(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Cg = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { loop: e } = ne(t), { forwardRef: n, currentElement: l } = R(), s = vn();
    return s.tabsList = l, (r, i) => (b(), x(o(Mt), {
      "as-child": "",
      orientation: o(s).orientation.value,
      dir: o(s).dir.value,
      loop: o(e)
    }, {
      default: y(() => [
        q(o(O), {
          ref: o(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": o(s).orientation.value
        }, {
          default: y(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function ar(a, t) {
  return `${a}-trigger-${t}`;
}
function nr(a, t) {
  return `${a}-content-${t}`;
}
const wg = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = vn(), l = I(() => ar(n.baseId, t.value)), s = I(() => nr(n.baseId, t.value)), r = I(() => t.value === n.modelValue.value), i = T(r.value);
    return oe(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (b(), x(o(Pe), {
      present: r.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        q(o(O), {
          id: s.value,
          ref: o(e),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": o(n).orientation.value,
          "aria-labelledby": l.value,
          hidden: !c.value,
          tabindex: "0",
          style: ke({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || r.value ? C(u.$slots, "default", { key: 0 }) : pe("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), _g = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = vn(), l = I(() => ar(n.baseId, t.value)), s = I(() => nr(n.baseId, t.value)), r = I(() => t.value === n.modelValue.value);
    return (i, u) => (b(), x(o(Vt), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: y(() => [
        q(o(O), {
          id: l.value,
          ref: o(e),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": r.value ? "true" : "false",
          "aria-controls": s.value,
          "data-state": r.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": o(n).orientation.value,
          onMousedown: u[0] || (u[0] = ie((d) => {
            !i.disabled && d.ctrlKey === !1 ? o(n).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = re((d) => o(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = o(n).activationMode !== "manual";
            !r.value && !i.disabled && d && o(n).changeModelValue(i.value);
          })
        }, {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), xg = /* @__PURE__ */ w({
  __name: "TabsIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = vn();
    R();
    const n = T(), l = T({
      size: null,
      position: null
    });
    ee(() => e.modelValue.value, async (r) => {
      await se(), s();
    }, { immediate: !0 }), Ze([e.tabsList, n], s);
    function s() {
      var r;
      n.value = (r = e.tabsList.value) == null ? void 0 : r.querySelector('[role="tab"][data-state="active"]'), n.value && (e.orientation.value === "horizontal" ? l.value = {
        size: n.value.offsetWidth,
        position: n.value.offsetLeft
      } : l.value = {
        size: n.value.offsetHeight,
        position: n.value.offsetTop
      });
    }
    return (r, i) => typeof l.value.size == "number" ? (b(), x(o(O), M({ key: 0 }, t, {
      style: {
        "--radix-tabs-indicator-size": `${l.value.size}px`,
        "--radix-tabs-indicator-position": `${l.value.position}px`
      }
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"])) : pe("", !0);
  }
}), [mn, Lf] = Q("TagsInputRoot"), Sg = /* @__PURE__ */ w({
  __name: "TagsInputRoot",
  props: {
    modelValue: {},
    defaultValue: { default: () => [] },
    addOnPaste: { type: Boolean },
    addOnTab: { type: Boolean },
    addOnBlur: { type: Boolean },
    duplicate: { type: Boolean },
    disabled: { type: Boolean },
    delimiter: { default: "," },
    dir: {},
    max: { default: 0 },
    required: { type: Boolean },
    name: {},
    id: {},
    convertValue: {},
    displayValue: { type: Function, default: (a) => a.toString() },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "invalid"],
  setup(a, { emit: t }) {
    const e = a, n = t, { addOnPaste: l, disabled: s, delimiter: r, max: i, id: u, dir: d, addOnBlur: c, addOnTab: p } = ne(e), f = be(d), v = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: !0,
      deep: !0
    }), { forwardRef: g, currentElement: m } = R(), { focused: S } = gi(m), _ = Qe(m), { getItems: D } = Xt(), h = T(), E = T(!1);
    return Lf({
      modelValue: v,
      onAddValue: (P) => {
        const $ = v.value.length > 0 && typeof v.value[0] == "object", B = v.value.length > 0 && typeof e.defaultValue[0] == "object";
        if (($ || B) && typeof e.convertValue != "function")
          throw new Error("You must provide a `convertValue` function when using objects as values.");
        const V = e.convertValue ? e.convertValue(P) : P;
        if (v.value.length >= i.value && i.value)
          return n("invalid", V), !1;
        if (e.duplicate)
          return v.value.push(V), !0;
        if (v.value.includes(V))
          E.value = !0;
        else
          return v.value.push(V), !0;
        return n("invalid", V), !1;
      },
      onRemoveValue: (P) => {
        P !== -1 && v.value.splice(P, 1);
      },
      onInputKeydown: (P) => {
        const $ = P.target, B = D().map((k) => k.ref).filter((k) => k.dataset.disabled !== "");
        if (!B.length)
          return;
        const V = B.at(-1);
        switch (P.key) {
          case "Delete":
          case "Backspace": {
            if ($.selectionStart !== 0 || $.selectionEnd !== 0)
              break;
            if (h.value) {
              const k = B.findIndex((A) => A === h.value);
              v.value.splice(k, 1), h.value = h.value === V ? B.at(k - 1) : B.at(k + 1), P.preventDefault();
            } else P.key === "Backspace" && (h.value = V, P.preventDefault());
            break;
          }
          case "Home":
          case "End":
          case "ArrowRight":
          case "ArrowLeft": {
            const k = P.key === "ArrowRight" && f.value === "ltr" || P.key === "ArrowLeft" && f.value === "rtl", A = !k;
            if ($.selectionStart !== 0 || $.selectionEnd !== 0)
              break;
            if (A && !h.value)
              h.value = V, P.preventDefault();
            else if (k && V && h.value === V)
              h.value = void 0, P.preventDefault();
            else if (h.value) {
              const L = Bt(P, h.value, void 0, {
                itemsArray: B,
                loop: !1,
                dir: f.value
              });
              L && (h.value = L), P.preventDefault();
            }
            break;
          }
          case "ArrowUp":
          case "ArrowDown": {
            h.value && P.preventDefault();
            break;
          }
          default:
            h.value = void 0;
        }
      },
      selectedElement: h,
      isInvalidInput: E,
      addOnPaste: l,
      addOnBlur: c,
      addOnTab: p,
      dir: f,
      disabled: s,
      delimiter: r,
      max: i,
      id: u,
      displayValue: e.displayValue
    }), (P, $) => (b(), x(o(Zt), null, {
      default: y(() => [
        q(o(O), {
          ref: o(g),
          dir: o(f),
          as: P.as,
          "as-child": P.asChild,
          "data-invalid": E.value ? "" : void 0,
          "data-disabled": o(s) ? "" : void 0,
          "data-focused": o(S) ? "" : void 0
        }, {
          default: y(() => [
            C(P.$slots, "default", { modelValue: o(v) }),
            o(_) && P.name ? (b(), x(o(oo), {
              key: 0,
              name: P.name,
              value: o(v),
              required: P.required,
              disabled: o(s)
            }, null, 8, ["name", "value", "required", "disabled"])) : pe("", !0)
          ]),
          _: 3
        }, 8, ["dir", "as", "as-child", "data-invalid", "data-disabled", "data-focused"])
      ]),
      _: 3
    }));
  }
}), Eg = /* @__PURE__ */ w({
  __name: "TagsInputInput",
  props: {
    placeholder: {},
    autoFocus: { type: Boolean },
    maxLength: {},
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = mn(), { forwardRef: n, currentElement: l } = R();
    function s(c) {
      if (!e.addOnBlur.value)
        return;
      const p = c.target;
      if (!p.value)
        return;
      e.onAddValue(p.value) && (p.value = "");
    }
    function r(c) {
      e.addOnTab.value && i(c);
    }
    async function i(c) {
      if (await se(), c.defaultPrevented)
        return;
      const p = c.target;
      if (!p.value)
        return;
      e.onAddValue(p.value) && (p.value = ""), c.preventDefault();
    }
    function u(c) {
      e.isInvalidInput.value = !1;
      const p = e.delimiter.value;
      if (p === c.data) {
        const f = c.target;
        f.value = f.value.replaceAll(p, ""), e.onAddValue(f.value) && (f.value = "");
      }
    }
    function d(c) {
      if (e.addOnPaste.value) {
        c.preventDefault();
        const p = c.clipboardData;
        if (!p)
          return;
        const f = p.getData("text");
        e.delimiter.value ? f.split(e.delimiter.value).forEach((g) => {
          e.onAddValue(g);
        }) : e.onAddValue(f);
      }
    }
    return oe(() => {
      const c = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      c && setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1);
    }), (c, p) => {
      var f;
      return b(), x(o(O), {
        id: (f = o(e).id) == null ? void 0 : f.value,
        ref: o(n),
        type: "text",
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        as: c.as,
        "as-child": c.asChild,
        maxlength: c.maxLength,
        placeholder: c.placeholder,
        disabled: o(e).disabled.value,
        "data-invalid": o(e).isInvalidInput.value ? "" : void 0,
        onInput: u,
        onKeydown: [
          re(i, ["enter"]),
          re(r, ["tab"]),
          o(e).onInputKeydown
        ],
        onBlur: s,
        onPaste: d
      }, {
        default: y(() => [
          C(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "as", "as-child", "maxlength", "placeholder", "disabled", "data-invalid", "onKeydown"]);
    };
  }
}), [or, Nf] = Q("TagsInputItem"), Pg = /* @__PURE__ */ w({
  __name: "TagsInputItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { value: e } = ne(t), n = mn(), { forwardRef: l, currentElement: s } = R(), r = I(() => n.selectedElement.value === s.value), i = I(() => t.disabled || n.disabled.value), u = Nf({
      value: e,
      isSelected: r,
      disabled: i,
      textId: "",
      displayValue: I(() => n.displayValue(e.value))
    });
    return (d, c) => (b(), x(o(Rt), null, {
      default: y(() => [
        q(o(O), {
          ref: o(l),
          as: d.as,
          "as-child": d.asChild,
          "aria-labelledby": o(u).textId,
          "aria-current": r.value,
          "data-disabled": i.value ? "" : void 0,
          "data-state": r.value ? "active" : "inactive"
        }, {
          default: y(() => [
            C(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "aria-labelledby", "aria-current", "data-disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Dg = /* @__PURE__ */ w({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = or();
    return R(), e.textId || (e.textId = ve(void 0, "radix-vue-tags-input-item-text")), (n, l) => (b(), x(o(O), M(t, {
      id: o(e).textId
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          me(De(o(e).displayValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), $g = /* @__PURE__ */ w({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = mn(), n = or(), l = I(() => {
      var r;
      return ((r = n.disabled) == null ? void 0 : r.value) || e.disabled.value;
    });
    function s() {
      if (l.value)
        return;
      const r = e.modelValue.value.findIndex((i) => i === n.value.value);
      e.onRemoveValue(r);
    }
    return (r, i) => (b(), x(o(O), M({ tabindex: "-1" }, t, {
      "aria-labelledby": o(n).textId,
      "aria-current": o(n).isSelected.value,
      "data-state": o(n).isSelected.value ? "active" : "inactive",
      "data-disabled": l.value ? "" : void 0,
      type: r.as === "button" ? "button" : void 0,
      onClick: s
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby", "aria-current", "data-state", "data-disabled", "type"]));
  }
}), Ig = /* @__PURE__ */ w({
  __name: "TagsInputClear",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = mn();
    function n() {
      e.disabled.value || (e.modelValue.value = []);
    }
    return (l, s) => (b(), x(o(O), M(t, {
      type: l.as === "button" ? "button" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      onClick: n
    }), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "data-disabled"]));
  }
}), [hn, zf] = Q("ToastProvider"), Bg = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(a) {
    const t = a, { label: e, duration: n, swipeDirection: l, swipeThreshold: s } = ne(t), r = T(), i = T(0), u = T(!1), d = T(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return zf({
      label: e,
      duration: n,
      swipeDirection: l,
      swipeThreshold: s,
      toastCount: i,
      viewport: r,
      onViewportChange(c) {
        r.value = c;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (c, p) => C(c.$slots, "default");
  }
}), Kf = "toast.swipeStart", Hf = "toast.swipeMove", Wf = "toast.swipeCancel", jf = "toast.swipeEnd", Mn = "toast.viewportPause", Vn = "toast.viewportResume";
function Ma(a, t, e) {
  const n = e.originalEvent.currentTarget, l = new CustomEvent(a, {
    bubbles: !1,
    cancelable: !0,
    detail: e
  });
  t && n.addEventListener(a, t, { once: !0 }), n.dispatchEvent(l);
}
function ll(a, t, e = 0) {
  const n = Math.abs(a.x), l = Math.abs(a.y), s = n > l;
  return t === "left" || t === "right" ? s && n > e : !s && l > e;
}
function Uf(a) {
  return a.nodeType === a.ELEMENT_NODE;
}
function lr(a) {
  const t = [];
  return Array.from(a.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Uf(n)) {
      const l = n.ariaHidden || n.hidden || n.style.display === "none", s = n.dataset.radixToastAnnounceExclude === "";
      if (!l)
        if (s) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...lr(n));
    }
  }), t;
}
const Gf = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(a) {
    const t = hn(), e = pi(1e3), n = T(!1);
    return Bl(() => {
      n.value = !0;
    }), (l, s) => o(e) || n.value ? (b(), x(o(ta), { key: 0 }, {
      default: y(() => [
        me(De(o(t).label.value) + " ", 1),
        C(l.$slots, "default")
      ]),
      _: 3
    })) : pe("", !0);
  }
}), [qf, Yf] = Q("ToastRoot"), Xf = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastRootImpl",
  props: {
    type: {},
    open: { type: Boolean, default: !1 },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["close", "escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = hn(), i = T(null), u = T(null), d = I(() => e.duration || r.duration.value), c = T(0), p = T(d.value), f = T(0), v = T(d.value), g = Bl(() => {
      const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
      v.value = Math.max(p.value - D, 0);
    }, { fpsLimit: 60 });
    function m(D) {
      !D || D === Number.POSITIVE_INFINITY || (window.clearTimeout(f.value), c.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(S, D));
    }
    function S() {
      var h, E;
      ((h = s.value) == null ? void 0 : h.contains(document.activeElement)) && ((E = r.viewport.value) == null || E.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const _ = I(() => s.value ? lr(s.value) : null);
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const D = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(D);
    }
    return ye((D) => {
      const h = r.viewport.value;
      if (h) {
        const E = () => {
          m(p.value), g.resume(), n("resume");
        }, P = () => {
          const $ = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - $, window.clearTimeout(f.value), g.pause(), n("pause");
        };
        return h.addEventListener(Mn, P), h.addEventListener(Vn, E), () => {
          h.removeEventListener(Mn, P), h.removeEventListener(Vn, E);
        };
      }
    }), ee(() => [e.open, d.value], () => {
      p.value = d.value, e.open && !r.isClosePausedRef.value && m(d.value);
    }, { immediate: !0 }), Gn("Escape", (D) => {
      n("escapeKeyDown", D), D.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, S());
    }), oe(() => {
      r.onToastAdd();
    }), Te(() => {
      r.onToastRemove();
    }), Yf({ onClose: S }), (D, h) => (b(), ce(_e, null, [
      _.value ? (b(), x(Gf, {
        key: 0,
        role: "status",
        "aria-live": D.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: y(() => [
          me(De(_.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : pe("", !0),
      (b(), x(qt, {
        to: o(r).viewport.value
      }, [
        q(o(O), M({
          ref: o(l),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, D.$attrs, {
          as: D.as,
          "as-child": D.asChild,
          "data-state": D.open ? "open" : "closed",
          "data-swipe-direction": o(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: h[0] || (h[0] = ie((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: h[1] || (h[1] = (E) => {
            if (!i.value) return;
            const P = E.clientX - i.value.x, $ = E.clientY - i.value.y, B = !!u.value, V = ["left", "right"].includes(o(r).swipeDirection.value), k = ["left", "up"].includes(o(r).swipeDirection.value) ? Math.min : Math.max, A = V ? k(0, P) : 0, L = V ? 0 : k(0, $), H = E.pointerType === "touch" ? 10 : 2, K = { x: A, y: L }, X = { originalEvent: E, delta: K };
            B ? (u.value = K, o(Ma)(o(Hf), (N) => n("swipeMove", N), X)) : o(ll)(K, o(r).swipeDirection.value, H) ? (u.value = K, o(Ma)(o(Kf), (N) => n("swipeStart", N), X), E.target.setPointerCapture(E.pointerId)) : (Math.abs(P) > H || Math.abs($) > H) && (i.value = null);
          }),
          onPointerup: h[2] || (h[2] = (E) => {
            const P = u.value, $ = E.target;
            if ($.hasPointerCapture(E.pointerId) && $.releasePointerCapture(E.pointerId), u.value = null, i.value = null, P) {
              const B = E.currentTarget, V = { originalEvent: E, delta: P };
              o(ll)(P, o(r).swipeDirection.value, o(r).swipeThreshold.value) ? o(Ma)(o(jf), (k) => n("swipeEnd", k), V) : o(Ma)(o(Wf), (k) => n("swipeCancel", k), V), B == null || B.addEventListener("click", (k) => k.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            C(D.$slots, "default", {
              remaining: v.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"]))
    ], 64));
  }
}), Tg = /* @__PURE__ */ w({
  __name: "ToastRoot",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    forceMount: { type: Boolean },
    type: { default: "foreground" },
    open: { type: Boolean, default: void 0 },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l } = R(), s = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (r, i) => (b(), x(o(Pe), {
      present: r.forceMount || o(s)
    }, {
      default: y(() => [
        q(Xf, M({
          ref: o(l),
          open: o(s),
          type: r.type,
          as: r.as,
          "as-child": r.asChild,
          duration: r.duration
        }, r.$attrs, {
          onClose: i[0] || (i[0] = (u) => s.value = !1),
          onPause: i[1] || (i[1] = (u) => n("pause")),
          onResume: i[2] || (i[2] = (u) => n("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => n("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            n("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), s.value = !1;
          })
        }), {
          default: y(({ remaining: u, duration: d }) => [
            C(r.$slots, "default", {
              remaining: u,
              duration: d,
              open: o(s)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), sr = /* @__PURE__ */ w({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    return (t, e) => (b(), x(o(O), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: y(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Zf = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = qf(), { forwardRef: n } = R();
    return (l, s) => (b(), x(sr, { "as-child": "" }, {
      default: y(() => [
        q(o(O), M(t, {
          ref: o(n),
          type: l.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (r) => o(e).onClose())
        }), {
          default: y(() => [
            C(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Rg = /* @__PURE__ */ w({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    if (!a.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = R();
    return (n, l) => n.altText ? (b(), x(sr, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        q(Zf, {
          ref: o(e),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : pe("", !0);
  }
}), sl = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(a, { emit: t }) {
    const e = t, n = hn();
    return (l, s) => (b(), x(o(ta), {
      "aria-hidden": "",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (r) => {
        var d;
        const i = r.relatedTarget;
        !((d = o(n).viewport.value) != null && d.contains(i)) && e("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ag = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(a) {
    const t = a, { hotkey: e, label: n } = ne(t), { forwardRef: l, currentElement: s } = R(), { createCollection: r } = Ve(), i = r(s), u = hn(), d = I(() => u.toastCount.value > 0), c = T(), p = T(), f = I(() => e.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Gn(e.value, () => {
      s.value.focus();
    }), oe(() => {
      u.onViewportChange(s.value);
    }), ye((g) => {
      const m = s.value;
      if (d.value && m) {
        const S = () => {
          if (!u.isClosePausedRef.value) {
            const P = new CustomEvent(Mn);
            m.dispatchEvent(P), u.isClosePausedRef.value = !0;
          }
        }, _ = () => {
          if (u.isClosePausedRef.value) {
            const P = new CustomEvent(Vn);
            m.dispatchEvent(P), u.isClosePausedRef.value = !1;
          }
        }, D = (P) => {
          !m.contains(P.relatedTarget) && _();
        }, h = () => {
          m.contains(document.activeElement) || _();
        }, E = (P) => {
          var V, k, A;
          const $ = P.altKey || P.ctrlKey || P.metaKey;
          if (P.key === "Tab" && !$) {
            const L = document.activeElement, H = P.shiftKey;
            if (P.target === m && H) {
              (V = c.value) == null || V.focus();
              return;
            }
            const N = v({ tabbingDirection: H ? "backwards" : "forwards" }), F = N.findIndex((j) => j === L);
            Va(N.slice(F + 1)) ? P.preventDefault() : H ? (k = c.value) == null || k.focus() : (A = p.value) == null || A.focus();
          }
        };
        m.addEventListener("focusin", S), m.addEventListener("focusout", D), m.addEventListener("pointermove", S), m.addEventListener("pointerleave", h), m.addEventListener("keydown", E), window.addEventListener("blur", S), window.addEventListener("focus", _), g(() => {
          m.removeEventListener("focusin", S), m.removeEventListener("focusout", D), m.removeEventListener("pointermove", S), m.removeEventListener("pointerleave", h), m.removeEventListener("keydown", E), window.removeEventListener("blur", S), window.removeEventListener("focus", _);
        });
      }
    });
    function v({ tabbingDirection: g }) {
      const S = i.value.map((_) => {
        const D = [_, ...to(_)];
        return g === "forwards" ? D : D.reverse();
      });
      return (g === "forwards" ? S.reverse() : S).flat();
    }
    return (g, m) => (b(), x(o(ou), {
      role: "region",
      "aria-label": typeof o(n) == "string" ? o(n).replace("{hotkey}", f.value) : o(n)(f.value),
      tabindex: "-1",
      style: ke({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (b(), x(sl, {
          key: 0,
          ref: (S) => {
            c.value = o(Be)(S);
          },
          onFocusFromOutsideViewport: m[0] || (m[0] = () => {
            const S = v({
              tabbingDirection: "forwards"
            });
            o(Va)(S);
          })
        }, null, 512)) : pe("", !0),
        q(o(O), M({
          ref: o(l),
          tabindex: "-1",
          as: g.as,
          "as-child": g.asChild
        }, g.$attrs), {
          default: y(() => [
            C(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (b(), x(sl, {
          key: 1,
          ref: (S) => {
            p.value = o(Be)(S);
          },
          onFocusFromOutsideViewport: m[1] || (m[1] = () => {
            const S = v({
              tabbingDirection: "backwards"
            });
            o(Va)(S);
          })
        }, null, 512)) : pe("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Og = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kg = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(O), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jf = /* @__PURE__ */ w({
  __name: "Toggle",
  props: {
    defaultValue: { type: Boolean },
    pressed: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:pressed"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    R();
    const l = ae(e, "pressed", n, {
      defaultValue: e.defaultValue,
      passive: e.pressed === void 0
    });
    function s() {
      l.value = !l.value;
    }
    const r = I(() => l.value ? "on" : "off");
    return (i, u) => (b(), x(o(O), {
      type: i.as === "button" ? "button" : void 0,
      "as-child": e.asChild,
      as: i.as,
      "aria-pressed": o(l),
      "data-state": r.value,
      "data-disabled": i.disabled ? "" : void 0,
      disabled: i.disabled,
      onClick: s
    }, {
      default: y(() => [
        C(i.$slots, "default", { pressed: o(l) })
      ]),
      _: 3
    }, 8, ["type", "as-child", "as", "aria-pressed", "data-state", "data-disabled", "disabled"]));
  }
}), [Qf, ev] = Q("ToggleGroupRoot"), tv = /* @__PURE__ */ w({
  __name: "ToggleGroupRoot",
  props: {
    rovingFocus: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    orientation: {},
    dir: {},
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { loop: l, rovingFocus: s, disabled: r, dir: i } = ne(e), u = be(i), { forwardRef: d } = R(), { modelValue: c, changeModelValue: p, isSingle: f } = Ll(e, n);
    return ev({
      isSingle: f,
      modelValue: c,
      changeModelValue: p,
      dir: u,
      orientation: e.orientation,
      loop: l,
      rovingFocus: s,
      disabled: r
    }), (v, g) => (b(), x(qe(o(s) ? o(Mt) : o(O)), {
      "as-child": "",
      orientation: o(s) ? v.orientation : void 0,
      dir: o(u),
      loop: o(s) ? o(l) : void 0
    }, {
      default: y(() => [
        q(o(O), {
          ref: o(d),
          role: "group",
          "as-child": v.asChild,
          as: v.as
        }, {
          default: y(() => [
            C(v.$slots, "default", { modelValue: o(c) })
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), av = /* @__PURE__ */ w({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Qf(), n = I(() => {
      var i;
      return ((i = e.disabled) == null ? void 0 : i.value) || t.disabled;
    }), l = I(() => {
      var i;
      return (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), s = I(() => {
      var i;
      return e.isSingle.value ? e.modelValue.value === t.value : (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), { forwardRef: r } = R();
    return (i, u) => (b(), x(qe(o(e).rovingFocus.value ? o(Vt) : o(O)), {
      "as-child": "",
      focusable: !n.value,
      active: l.value
    }, {
      default: y(() => [
        q(o(Jf), M(t, {
          ref: o(r),
          disabled: n.value,
          pressed: s.value,
          "onUpdate:pressed": u[0] || (u[0] = (d) => o(e).changeModelValue(i.value))
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["disabled", "pressed"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [rr, nv] = Q("ToolbarRoot"), Mg = /* @__PURE__ */ w({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { orientation: e, dir: n } = ne(t), l = be(n), { forwardRef: s } = R();
    return nv({ orientation: e, dir: l }), (r, i) => (b(), x(o(Mt), {
      "as-child": "",
      orientation: o(e),
      dir: o(l),
      loop: r.loop
    }, {
      default: y(() => [
        q(o(O), {
          ref: o(s),
          role: "toolbar",
          "aria-orientation": o(e),
          "as-child": r.asChild,
          as: r.as
        }, {
          default: y(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-orientation", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), ov = /* @__PURE__ */ w({
  __name: "ToolbarButton",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), x(o(Vt), {
      "as-child": "",
      focusable: !n.disabled
    }, {
      default: y(() => [
        q(o(O), M({
          ref: o(e),
          type: n.as === "button" ? "button" : void 0
        }, t), {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }, 8, ["focusable"]));
  }
}), Vg = /* @__PURE__ */ w({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), x(o(Vt), {
      "as-child": "",
      focusable: ""
    }, {
      default: y(() => [
        q(o(O), M(t, {
          ref: o(e),
          onKeydown: l[0] || (l[0] = (s) => {
            var r;
            s.key === " " && ((r = s.currentTarget) == null || r.click());
          })
        }), {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Fg = /* @__PURE__ */ w({
  __name: "ToolbarToggleGroup",
  props: {
    rovingFocus: { type: Boolean },
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = rr(), s = Ae(n);
    return R(), (r, i) => (b(), x(o(tv), M({ ...e, ...o(s) }, {
      "data-orientation": o(l).orientation.value,
      dir: o(l).dir.value,
      "roving-focus": !1
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-orientation", "dir"]));
  }
}), Lg = /* @__PURE__ */ w({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), x(ov, { "as-child": "" }, {
      default: y(() => [
        q(o(av), M(t, { ref: o(e) }), {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Ng = /* @__PURE__ */ w({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = rr();
    return R(), (n, l) => (b(), x(Ts, {
      orientation: o(e).orientation.value,
      "as-child": t.asChild,
      as: n.as
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["orientation", "as-child", "as"]));
  }
}), ir = "tooltip.open", [Mo, lv] = Q("TooltipProvider"), zg = /* @__PURE__ */ w({
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: !1 },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, { delayDuration: e, skipDelayDuration: n, disableHoverableContent: l, disableClosingTrigger: s, ignoreNonKeyboardFocus: r, disabled: i } = ne(t);
    R();
    const u = T(!0), d = T(!1), { start: c, stop: p } = Un(() => {
      u.value = !0;
    }, n, { immediate: !1 });
    return lv({
      isOpenDelayed: u,
      delayDuration: e,
      onOpen() {
        p(), u.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: l,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (f, v) => C(f.$slots, "default");
  }
}), [yn, sv] = Q("TooltipRoot"), Kg = /* @__PURE__ */ w({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 },
    disableClosingTrigger: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    ignoreNonKeyboardFocus: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    R();
    const l = Mo(), s = I(() => e.disableHoverableContent ?? l.disableHoverableContent.value), r = I(() => e.disableClosingTrigger ?? l.disableClosingTrigger.value), i = I(() => e.disabled ?? l.disabled.value), u = I(() => e.delayDuration ?? l.delayDuration.value), d = I(() => e.ignoreNonKeyboardFocus ?? l.ignoreNonKeyboardFocus.value), c = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    ee(c, (h) => {
      l.onClose && (h ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ir))) : l.onClose());
    });
    const p = T(!1), f = T(), v = I(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: m } = Un(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function S() {
      m(), p.value = !1, c.value = !0;
    }
    function _() {
      m(), c.value = !1;
    }
    function D() {
      g();
    }
    return sv({
      contentId: "",
      open: c,
      stateAttribute: v,
      trigger: f,
      onTriggerChange(h) {
        f.value = h;
      },
      onTriggerEnter() {
        l.isOpenDelayed.value ? D() : S();
      },
      onTriggerLeave() {
        s.value ? _() : m();
      },
      onOpen: S,
      onClose: _,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (h, E) => (b(), x(o(At), null, {
      default: y(() => [
        C(h.$slots, "default", { open: o(c) })
      ]),
      _: 3
    }));
  }
}), Hg = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = yn(), n = Mo();
    e.contentId || (e.contentId = ve(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: l, currentElement: s } = R(), r = T(!1), i = T(!1), u = I(() => e.disabled.value ? {} : {
      click: m,
      focus: v,
      pointermove: p,
      pointerleave: f,
      pointerdown: c,
      blur: g
    });
    oe(() => {
      e.onTriggerChange(s.value);
    });
    function d() {
      r.value = !1;
    }
    function c() {
      r.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function p(S) {
      S.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (e.onTriggerEnter(), i.value = !0);
    }
    function f() {
      e.onTriggerLeave(), i.value = !1;
    }
    function v(S) {
      var _, D;
      r.value || e.ignoreNonKeyboardFocus.value && !((D = (_ = S.target).matches) != null && D.call(_, ":focus-visible")) || e.onOpen();
    }
    function g() {
      e.onClose();
    }
    function m() {
      e.disableClosingTrigger.value || e.onClose();
    }
    return (S, _) => (b(), x(o(Ot), { "as-child": "" }, {
      default: y(() => [
        q(o(O), M({
          ref: o(l),
          "aria-describedby": o(e).open.value ? o(e).contentId : void 0,
          "data-state": o(e).stateAttribute.value,
          as: S.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Kn(u.value)), {
          default: y(() => [
            C(S.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), ur = /* @__PURE__ */ w({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: !0 },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: !1 }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = yn(), { forwardRef: s } = R(), r = ja(), i = I(() => {
      var c;
      return (c = r.default) == null ? void 0 : c.call(r);
    }), u = I(() => {
      var f;
      if (e.ariaLabel)
        return e.ariaLabel;
      let c = "";
      function p(v) {
        typeof v.children == "string" ? c += v.children : Array.isArray(v.children) && v.children.forEach((g) => p(g));
      }
      return (f = i.value) == null || f.forEach((v) => p(v)), c;
    }), d = I(() => {
      const { ariaLabel: c, ...p } = e;
      return p;
    });
    return oe(() => {
      ze(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(l.trigger.value) && l.onClose();
      }), ze(window, ir, l.onClose);
    }), (c, p) => (b(), x(o(gt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (f) => n("escapeKeyDown", f)),
      onPointerDownOutside: p[1] || (p[1] = (f) => {
        var v;
        o(l).disableClosingTrigger.value && ((v = o(l).trigger.value) != null && v.contains(f.target)) && f.preventDefault(), n("pointerDownOutside", f);
      }),
      onFocusOutside: p[2] || (p[2] = ie(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (f) => o(l).onClose())
    }, {
      default: y(() => [
        q(o(Dt), M({
          ref: o(s),
          "data-state": o(l).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: y(() => [
            C(c.$slots, "default"),
            q(o(ta), {
              id: o(l).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                me(De(u.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }));
  }
}), rv = /* @__PURE__ */ w({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  setup(a) {
    const e = Tt(a), { forwardRef: n, currentElement: l } = R(), { trigger: s, onClose: r } = yn(), i = Mo(), { isPointerInTransit: u, onPointerExit: d } = Al(s, l);
    return i.isPointerInTransitRef = u, d(() => {
      r();
    }), (c, p) => (b(), x(ur, M({ ref: o(n) }, o(e)), {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wg = /* @__PURE__ */ w({
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = yn(), s = xe(e, n), { forwardRef: r } = R();
    return (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: y(() => [
        (b(), x(qe(o(l).disableHoverableContent.value ? ur : rv), M({ ref: o(r) }, o(s)), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), jg = /* @__PURE__ */ w({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(ea), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ug = /* @__PURE__ */ w({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), W(U(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Vo(a) {
  return a.reduce((t, e) => (t.push(e), e.children && t.push(...Vo(e.children)), t), []);
}
const [dr, iv] = Q("TreeRoot"), Gg = /* @__PURE__ */ w({
  __name: "TreeRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    items: {},
    expanded: {},
    defaultExpanded: {},
    getKey: {},
    selectionBehavior: { default: "toggle" },
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    propagateSelect: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  emits: ["update:modelValue", "update:expanded"],
  setup(a, { emit: t }) {
    const e = a, n = t, { items: l, multiple: s, disabled: r, propagateSelect: i, dir: u } = ne(e), { handleTypeaheadSearch: d } = _a(), c = be(u), p = T(), f = T(!1), v = pa(), g = ae(e, "modelValue", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultValue ?? (s.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: !0
    }), m = ae(e, "expanded", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultExpanded ?? [],
      passive: e.expanded === void 0,
      deep: !0
    }), { onSelectItem: S, handleMultipleReplace: _ } = Li(g, e), D = I(() => s.value && Array.isArray(g.value) ? g.value.map((B) => e.getKey(B)) : [e.getKey(g.value ?? {})]);
    function h(B, V = 1, k) {
      return B.reduce((A, L, H) => {
        const K = e.getKey(L), X = m.value.includes(K), N = {
          _id: K,
          value: L,
          index: H,
          level: V,
          parentItem: k,
          hasChildren: !!L.children,
          bind: {
            value: L,
            level: V,
            "aria-setsize": B.length,
            "aria-posinset": H + 1
          }
        };
        return A.push(N), L.children && X && A.push(...h(L.children, V + 1, L)), A;
      }, []);
    }
    const E = I(() => {
      const B = e.items;
      return m.value.map((V) => V), h(B ?? []);
    });
    function P(B) {
      var V;
      if (f.value)
        v.trigger(B);
      else {
        const k = (V = p.value) == null ? void 0 : V.getItems().map((A) => A.ref);
        d(B.key, k);
      }
    }
    function $(B) {
      if (f.value)
        return;
      const V = en[B.key];
      se(() => {
        var k;
        _(
          V,
          document.activeElement,
          (k = p.value) == null ? void 0 : k.getItems,
          E.value.map((A) => A.value)
        );
      });
    }
    return iv({
      modelValue: g,
      selectedKeys: D,
      onSelect: (B) => {
        var A;
        const V = (L) => e.getKey(L ?? {}) === e.getKey(B), k = e.multiple && Array.isArray(g.value) ? ((A = g.value) == null ? void 0 : A.findIndex(V)) !== -1 : void 0;
        if (S(B, V), e.propagateSelect && e.multiple && Array.isArray(g.value)) {
          const L = Vo(B.children ?? []);
          k ? g.value = [...g.value].filter((H) => !L.some((K) => e.getKey(H ?? {}) === e.getKey(K))) : g.value = [...g.value, ...L];
        }
      },
      expanded: m,
      onToggle(B) {
        if (!(B != null && B.children))
          return;
        const V = e.getKey(B) ?? B;
        m.value.includes(V) ? m.value = m.value.filter((k) => k !== V) : m.value.push(V);
      },
      getKey: e.getKey,
      items: l,
      expandedItems: E,
      disabled: r,
      multiple: s,
      dir: c,
      propagateSelect: i,
      isVirtual: f,
      virtualKeydownHook: v,
      handleMultipleReplace: _
    }), (B, V) => (b(), x(o(Mt), {
      ref_key: "rovingFocusGroupRef",
      ref: p,
      "as-child": "",
      orientation: "vertical",
      dir: o(c)
    }, {
      default: y(() => [
        q(o(O), {
          role: "tree",
          as: B.as,
          "as-child": B.asChild,
          "aria-multiselectable": o(s) ? !0 : void 0,
          onKeydown: [
            P,
            re(ie($, ["shift"]), ["up", "down"])
          ]
        }, {
          default: y(() => [
            C(B.$slots, "default", {
              flattenItems: E.value,
              modelValue: o(g),
              expanded: o(m)
            })
          ]),
          _: 3
        }, 8, ["as", "as-child", "aria-multiselectable", "onKeydown"])
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), uv = "tree.select", dv = "tree.toggle", qg = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "TreeItem",
  props: {
    value: {},
    level: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["select", "toggle"],
  setup(a, { expose: t, emit: e }) {
    const n = a, l = e, s = dr(), { getItems: r } = Jt(), i = I(() => !!n.value.children), u = I(() => {
      const _ = s.getKey(n.value);
      return s.expanded.value.includes(_);
    }), d = I(() => {
      const _ = s.getKey(n.value);
      return s.selectedKeys.value.includes(_);
    }), c = I(() => {
      if (s.propagateSelect.value && d.value && i.value && Array.isArray(s.modelValue.value))
        return !Vo(n.value.children).every((D) => s.modelValue.value.find((h) => s.getKey(h) === s.getKey(D)));
    });
    function p(_) {
      if (i.value)
        if (u.value) {
          const D = r().map((B) => B.ref), h = document.activeElement, E = D.indexOf(h), $ = [...D].slice(E).find((B) => Number(B.getAttribute("data-indent")) === n.level + 1);
          $ && $.focus();
        } else
          S(_);
    }
    function f(_) {
      if (u.value)
        S(_);
      else {
        const D = r().map((B) => B.ref), h = document.activeElement, E = D.indexOf(h), $ = [...D].slice(0, E).reverse().find((B) => Number(B.getAttribute("data-indent")) === n.level - 1);
        $ && $.focus();
      }
    }
    async function v(_) {
      l("select", _), !(_ != null && _.defaultPrevented) && s.onSelect(n.value);
    }
    async function g(_) {
      l("toggle", _), !(_ != null && _.defaultPrevented) && s.onToggle(n.value);
    }
    async function m(_) {
      if (!_)
        return;
      const D = { originalEvent: _, value: n.value, isExpanded: u.value, isSelected: d.value };
      jt(uv, v, D);
    }
    async function S(_) {
      if (!_)
        return;
      const D = { originalEvent: _, value: n.value, isExpanded: u.value, isSelected: d.value };
      jt(dv, g, D);
    }
    return t({
      isExpanded: u,
      isSelected: d,
      isIndeterminate: c,
      handleToggle: () => s.onToggle(n.value),
      handleSelect: () => s.onSelect(n.value)
    }), (_, D) => (b(), x(o(Vt), {
      "as-child": "",
      value: _.value,
      "allow-shift-key": ""
    }, {
      default: y(() => [
        q(o(O), M(_.$attrs, {
          role: "treeitem",
          as: _.as,
          "as-child": _.asChild,
          "aria-selected": d.value,
          "aria-expanded": i.value ? u.value : void 0,
          "aria-level": _.level,
          "data-indent": _.level,
          "data-selected": d.value ? "" : void 0,
          "data-expanded": u.value ? "" : void 0,
          onKeydown: [
            re(ie(m, ["self", "prevent"]), ["enter", "space"]),
            D[0] || (D[0] = re(ie((h) => o(s).dir.value === "ltr" ? p(h) : f(h), ["prevent"]), ["right"])),
            D[1] || (D[1] = re(ie((h) => o(s).dir.value === "ltr" ? f(h) : p(h), ["prevent"]), ["left"]))
          ],
          onClick: D[2] || (D[2] = ie((h) => {
            m(h), S(h);
          }, ["stop"]))
        }), {
          default: y(() => [
            C(_.$slots, "default", {
              isExpanded: u.value,
              isSelected: d.value,
              isIndeterminate: c.value,
              handleSelect: () => o(s).onSelect(_.value),
              handleToggle: () => o(s).onToggle(_.value)
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-selected", "aria-expanded", "aria-level", "data-indent", "data-selected", "data-expanded", "onKeydown"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Yg = /* @__PURE__ */ w({
  __name: "TreeVirtualizer",
  props: {
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a) {
    const t = a, e = ja(), n = dr(), l = Tl(), { getItems: s } = Jt(), r = $t("", 1e3), i = I(() => {
      const f = (v) => t.textContent ? t.textContent(v) : v.toString().toLowerCase();
      return n.expandedItems.value.map((v, g) => ({
        index: g,
        textContent: f(v.value)
      }));
    });
    n.isVirtual.value = !0;
    const u = I(() => {
      const f = l.value;
      if (f) {
        const v = window.getComputedStyle(f);
        return {
          start: Number.parseFloat(v.paddingBlockStart || v.paddingTop),
          end: Number.parseFloat(v.paddingBlockEnd || v.paddingBottom)
        };
      } else
        return { start: 0, end: 0 };
    }), d = us(
      {
        get scrollPaddingStart() {
          return u.value.start;
        },
        get scrollPaddingEnd() {
          return u.value.end;
        },
        get count() {
          return n.expandedItems.value.length ?? 0;
        },
        get horizontal() {
          return !1;
        },
        getItemKey(f) {
          return f + n.getKey(n.expandedItems.value[f].value);
        },
        estimateSize() {
          return t.estimateSize ?? 28;
        },
        getScrollElement() {
          return l.value;
        },
        overscan: 12
      }
    ), c = I(() => d.value.getVirtualItems().map((f) => ({
      item: f,
      is: Nn(e.default({
        item: n.expandedItems.value[f.index]
      })[0], {
        "data-index": f.index,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${f.start}px)`,
          overflowAnchor: "none"
        }
      })
    })));
    function p(f) {
      d.value.scrollToIndex(f, { align: "start" }), requestAnimationFrame(() => {
        const v = l.value.querySelector(`[data-index="${f}"]`);
        v instanceof HTMLElement && v.focus();
      });
    }
    return n.virtualKeydownHook.on((f) => {
      var S;
      const v = f.altKey || f.ctrlKey || f.metaKey;
      if (f.key === "Tab" && !v)
        return;
      const m = en[f.key];
      if (["first", "last"].includes(m)) {
        f.preventDefault();
        const _ = m === "first" ? 0 : n.expandedItems.value.length - 1;
        d.value.scrollToIndex(_), requestAnimationFrame(() => {
          const D = s();
          (m === "first" ? D[0] : D[D.length - 1]).ref.focus();
        });
      } else if (m === "prev" && f.key !== "ArrowUp") {
        const _ = document.activeElement, D = Number(_.getAttribute("data-index")), h = Number(_.getAttribute("data-indent")), P = n.expandedItems.value.slice(0, D).map(($, B) => ({ ...$, index: B })).reverse().find(($) => $.level === h - 1);
        P && p(P.index);
      } else if (!m && !v) {
        r.value += f.key;
        const _ = Number((S = document.activeElement) == null ? void 0 : S.getAttribute("data-index")), D = i.value[_].textContent, h = i.value.map(($) => $.textContent), E = Zn(h, r.value, D), P = i.value.find(($) => $.textContent === E);
        P && p(P.index);
      }
      se(() => {
        f.shiftKey && m && n.handleMultipleReplace(m, document.activeElement, s, n.expandedItems.value.map((_) => _.value));
      });
    }), (f, v) => (b(), ce("div", {
      "data-radix-vue-virtualizer": "",
      style: ke({
        position: "relative",
        width: "100%",
        height: `${o(d).getTotalSize()}px`
      })
    }, [
      (b(!0), ce(_e, null, ga(c.value, ({ is: g, item: m }) => (b(), x(qe(g), {
        key: m.key
      }))), 128))
    ], 4));
  }
}), Xg = /* @__PURE__ */ w({
  __name: "Viewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), { nonce: n } = ne(t), l = Ja(n);
    return (s, r) => (b(), ce(_e, null, [
      q(o(O), M({ ...s.$attrs, ...t }, {
        ref: o(e),
        "data-radix-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        }
      }), {
        default: y(() => [
          C(s.$slots, "default")
        ]),
        _: 3
      }, 16),
      q(o(O), {
        as: "style",
        nonce: o(l)
      }, {
        default: y(() => [
          me(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
export {
  $v as AIChatAutoScroll,
  Ev as AIChatContent,
  Sv as AIChatInput,
  Pv as AIChatMessageItem,
  xv as AIChatRoot,
  Dv as AIChatSend,
  Cv as AccordionContent,
  wv as AccordionHeader,
  bv as AccordionItem,
  gv as AccordionRoot,
  _v as AccordionTrigger,
  Fv as AlertDialogAction,
  kv as AlertDialogCancel,
  Av as AlertDialogContent,
  Vv as AlertDialogDescription,
  Ov as AlertDialogOverlay,
  Rv as AlertDialogPortal,
  Bv as AlertDialogRoot,
  Mv as AlertDialogTitle,
  Tv as AlertDialogTrigger,
  Lv as AspectRatio,
  Kv as AvatarFallback,
  zv as AvatarImage,
  Nv as AvatarRoot,
  Wu as CalendarCell,
  Zu as CalendarCellTrigger,
  Hu as CalendarGrid,
  Yu as CalendarGridBody,
  qu as CalendarGridHead,
  Xu as CalendarGridRow,
  ju as CalendarHeadCell,
  zu as CalendarHeader,
  Ku as CalendarHeading,
  Uu as CalendarNext,
  Gu as CalendarPrev,
  Nu as CalendarRoot,
  Wv as CheckboxIndicator,
  Hv as CheckboxRoot,
  Wi as CollapsibleContent,
  zi as CollapsibleRoot,
  Ki as CollapsibleTrigger,
  Gv as ComboboxAnchor,
  om as ComboboxArrow,
  Yv as ComboboxCancel,
  Jv as ComboboxContent,
  Qv as ComboboxEmpty,
  Xv as ComboboxGroup,
  Uv as ComboboxInput,
  tm as ComboboxItem,
  am as ComboboxItemIndicator,
  Zv as ComboboxLabel,
  lm as ComboboxPortal,
  jv as ComboboxRoot,
  nm as ComboboxSeparator,
  qv as ComboboxTrigger,
  em as ComboboxViewport,
  hv as ConfigProvider,
  dm as ContextMenuArrow,
  vm as ContextMenuCheckboxItem,
  um as ContextMenuContent,
  pm as ContextMenuGroup,
  cm as ContextMenuItem,
  mm as ContextMenuItemIndicator,
  hm as ContextMenuLabel,
  im as ContextMenuPortal,
  ym as ContextMenuRadioGroup,
  gm as ContextMenuRadioItem,
  sm as ContextMenuRoot,
  fm as ContextMenuSeparator,
  bm as ContextMenuSub,
  Cm as ContextMenuSubContent,
  wm as ContextMenuSubTrigger,
  rm as ContextMenuTrigger,
  Yd as DateFieldInput,
  Fd as DateFieldRoot,
  Vm as DatePickerAnchor,
  Fm as DatePickerArrow,
  km as DatePickerCalendar,
  Em as DatePickerCell,
  Rm as DatePickerCellTrigger,
  Lm as DatePickerClose,
  zm as DatePickerContent,
  Mm as DatePickerField,
  Sm as DatePickerGrid,
  Bm as DatePickerGridBody,
  Im as DatePickerGridHead,
  Tm as DatePickerGridRow,
  Pm as DatePickerHeadCell,
  _m as DatePickerHeader,
  xm as DatePickerHeading,
  Am as DatePickerInput,
  Dm as DatePickerNext,
  $m as DatePickerPrev,
  Om as DatePickerRoot,
  Nm as DatePickerTrigger,
  ac as DateRangeFieldInput,
  tc as DateRangeFieldRoot,
  nh as DateRangePickerAnchor,
  oh as DateRangePickerArrow,
  th as DateRangePickerCalendar,
  jm as DateRangePickerCell,
  Jm as DateRangePickerCellTrigger,
  lh as DateRangePickerClose,
  rh as DateRangePickerContent,
  ah as DateRangePickerField,
  Wm as DateRangePickerGrid,
  Xm as DateRangePickerGridBody,
  Ym as DateRangePickerGridHead,
  Zm as DateRangePickerGridRow,
  Um as DateRangePickerHeadCell,
  Km as DateRangePickerHeader,
  Hm as DateRangePickerHeading,
  Qm as DateRangePickerInput,
  Gm as DateRangePickerNext,
  qm as DateRangePickerPrev,
  eh as DateRangePickerRoot,
  sh as DateRangePickerTrigger,
  jl as DialogClose,
  xu as DialogContent,
  Du as DialogDescription,
  Eu as DialogOverlay,
  Iv as DialogPortal,
  eu as DialogRoot,
  Pu as DialogTitle,
  tu as DialogTrigger,
  ph as DropdownMenuArrow,
  hh as DropdownMenuCheckboxItem,
  ch as DropdownMenuContent,
  vh as DropdownMenuGroup,
  fh as DropdownMenuItem,
  yh as DropdownMenuItemIndicator,
  gh as DropdownMenuLabel,
  dh as DropdownMenuPortal,
  bh as DropdownMenuRadioGroup,
  Ch as DropdownMenuRadioItem,
  ih as DropdownMenuRoot,
  mh as DropdownMenuSeparator,
  wh as DropdownMenuSub,
  _h as DropdownMenuSubContent,
  xh as DropdownMenuSubTrigger,
  uh as DropdownMenuTrigger,
  Eh as EditableArea,
  Ih as EditableCancelTrigger,
  Bh as EditableEditTrigger,
  Ph as EditableInput,
  Dh as EditablePreview,
  Sh as EditableRoot,
  $h as EditableSubmitTrigger,
  kh as HoverCardArrow,
  Oh as HoverCardContent,
  Ah as HoverCardPortal,
  Th as HoverCardRoot,
  Rh as HoverCardTrigger,
  Mh as Label,
  Fh as ListboxContent,
  Lh as ListboxFilter,
  Hh as ListboxGroup,
  Wh as ListboxGroupLabel,
  Nh as ListboxItem,
  zh as ListboxItemIndicator,
  Vh as ListboxRoot,
  Kh as ListboxVirtualizer,
  Xh as MenubarArrow,
  ey as MenubarCheckboxItem,
  Yh as MenubarContent,
  Jh as MenubarGroup,
  Zh as MenubarItem,
  ty as MenubarItemIndicator,
  ay as MenubarLabel,
  Uh as MenubarMenu,
  qh as MenubarPortal,
  ny as MenubarRadioGroup,
  oy as MenubarRadioItem,
  jh as MenubarRoot,
  Qh as MenubarSeparator,
  ly as MenubarSub,
  sy as MenubarSubContent,
  ry as MenubarSubTrigger,
  Gh as MenubarTrigger,
  dy as NavigationMenuContent,
  cy as NavigationMenuIndicator,
  uy as NavigationMenuItem,
  py as NavigationMenuLink,
  fy as NavigationMenuList,
  iy as NavigationMenuRoot,
  vy as NavigationMenuSub,
  my as NavigationMenuTrigger,
  hy as NavigationMenuViewport,
  Cy as NumberFieldDecrement,
  by as NumberFieldIncrement,
  gy as NumberFieldInput,
  yy as NumberFieldRoot,
  _y as PaginationEllipsis,
  xy as PaginationFirst,
  Sy as PaginationLast,
  Ey as PaginationList,
  Py as PaginationListItem,
  Dy as PaginationNext,
  $y as PaginationPrev,
  wy as PaginationRoot,
  By as PinInputInput,
  Iy as PinInputRoot,
  _s as PopoverAnchor,
  Cs as PopoverArrow,
  ws as PopoverClose,
  bs as PopoverContent,
  ys as PopoverPortal,
  ms as PopoverRoot,
  hs as PopoverTrigger,
  O as Primitive,
  Ry as ProgressIndicator,
  Ty as ProgressRoot,
  ky as RadioGroupIndicator,
  Oy as RadioGroupItem,
  Ay as RadioGroupRoot,
  pp as RangeCalendarCell,
  bp as RangeCalendarCellTrigger,
  cp as RangeCalendarGrid,
  yp as RangeCalendarGridBody,
  hp as RangeCalendarGridHead,
  gp as RangeCalendarGridRow,
  fp as RangeCalendarHeadCell,
  up as RangeCalendarHeader,
  dp as RangeCalendarHeading,
  vp as RangeCalendarNext,
  mp as RangeCalendarPrev,
  ip as RangeCalendarRoot,
  Mt as RovingFocusGroup,
  Vt as RovingFocusItem,
  Ny as ScrollAreaCorner,
  My as ScrollAreaRoot,
  Fy as ScrollAreaScrollbar,
  Ly as ScrollAreaThumb,
  Vy as ScrollAreaViewport,
  jy as SelectArrow,
  Wy as SelectContent,
  Yy as SelectGroup,
  ag as SelectIcon,
  Gy as SelectItem,
  qy as SelectItemIndicator,
  Zy as SelectItemText,
  Xy as SelectLabel,
  Hy as SelectPortal,
  zy as SelectRoot,
  eg as SelectScrollDownButton,
  Qy as SelectScrollUpButton,
  Uy as SelectSeparator,
  Ky as SelectTrigger,
  tg as SelectValue,
  Jy as SelectViewport,
  Gp as Separator,
  sg as SliderRange,
  ng as SliderRoot,
  og as SliderThumb,
  lg as SliderTrack,
  Jn as Slot,
  rg as SplitterGroup,
  ig as SplitterPanel,
  ug as SplitterResizeHandle,
  fg as StepperDescription,
  mg as StepperIndicator,
  cg as StepperItem,
  dg as StepperRoot,
  hg as StepperSeparator,
  vg as StepperTitle,
  pg as StepperTrigger,
  yg as SwitchRoot,
  gg as SwitchThumb,
  wg as TabsContent,
  xg as TabsIndicator,
  Cg as TabsList,
  bg as TabsRoot,
  _g as TabsTrigger,
  Ig as TagsInputClear,
  Eg as TagsInputInput,
  Pg as TagsInputItem,
  $g as TagsInputItemDelete,
  Dg as TagsInputItemText,
  Sg as TagsInputRoot,
  Rg as ToastAction,
  Zf as ToastClose,
  kg as ToastDescription,
  Bg as ToastProvider,
  Tg as ToastRoot,
  Og as ToastTitle,
  Ag as ToastViewport,
  Jf as Toggle,
  av as ToggleGroupItem,
  tv as ToggleGroupRoot,
  ov as ToolbarButton,
  Vg as ToolbarLink,
  Mg as ToolbarRoot,
  Ng as ToolbarSeparator,
  Fg as ToolbarToggleGroup,
  Lg as ToolbarToggleItem,
  jg as TooltipArrow,
  Wg as TooltipContent,
  Ug as TooltipPortal,
  zg as TooltipProvider,
  Kg as TooltipRoot,
  Hg as TooltipTrigger,
  qg as TreeItem,
  Gg as TreeRoot,
  Yg as TreeVirtualizer,
  Xg as Viewport,
  ta as VisuallyHidden,
  Q as createContext,
  jt as handleAndDispatchCustomEvent,
  xa as injectAIChatRootContext,
  Ji as provideAIChatRootContext,
  Ca as useBodyScrollLock,
  qn as useDateFormatter,
  Ae as useEmitAsProps,
  R as useForwardExpose,
  Tt as useForwardProps,
  xe as useForwardPropsEmits,
  ve as useId,
  Ml as useStateMachine,
  yv as withDefault
};
