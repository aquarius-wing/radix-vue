import * as Fo from "vue";
import { inject as il, provide as ul, unref as o, effectScope as dl, getCurrentScope as yr, onScopeDispose as cl, getCurrentInstance as ht, onBeforeUnmount as Fn, isRef as Ue, onMounted as le, nextTick as oe, shallowRef as Ln, watchEffect as ge, readonly as Ha, customRef as fl, ref as T, watch as te, reactive as Ut, computed as $, onUpdated as pl, Fragment as we, defineComponent as x, toRefs as ne, renderSlot as w, onBeforeUpdate as gr, toHandlerKey as br, camelize as vl, toRef as Cr, onUnmounted as Be, mergeProps as k, h as pt, Comment as ml, cloneVNode as Nn, openBlock as b, createBlock as S, withCtx as h, createVNode as q, createCommentVNode as ce, withKeys as ie, markRaw as wr, createTextVNode as he, toDisplayString as De, Teleport as Xt, normalizeProps as j, guardReactiveProps as U, normalizeStyle as Me, withModifiers as ue, createElementBlock as ve, withDirectives as Wa, vShow as zn, createElementVNode as Ge, watchPostEffect as _r, mergeDefaults as hl, renderList as ga, watchSyncEffect as xr, resolveDynamicComponent as qe, toHandlers as Kn, triggerRef as Lo, useSlots as ja, onBeforeMount as yl, vModelSelect as Sr, toRaw as Er } from "vue";
import { CalendarDateTime as Pr, CalendarDate as Dr, today as $r, getLocalTimeZone as Hn, DateFormatter as st, isEqualMonth as No, isSameDay as Ae, isEqualDay as Ee, isToday as gl, isSameMonth as bl } from "@internationalized/date";
import { t as Ne, k as ca, j as Cl, d as xt, l as Dt, m as ze, n as Da, o as Ir, x as wl, u as Br, r as Tr } from "./calendar-ByHSJDnd.js";
import { offset as Rr, flip as zo, shift as Ar, limitShift as Or, size as kr, arrow as Mr, hide as Vr, useFloating as Fr, autoUpdate as Lr } from "@floating-ui/vue";
import { NumberParser as Nr, NumberFormatter as zr } from "@internationalized/number";
function ee(a, t) {
  const e = typeof a == "string" && !t ? `${a}Context` : t, n = Symbol(e);
  return [(r) => {
    const i = il(n, r);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(a) ? `one of the following components: ${a.join(
        ", "
      )}` : `\`${a}\``}`
    );
  }, (r) => (ul(n, r), r)];
}
function Gt(a, t, e) {
  const n = e.originalEvent.target, l = new CustomEvent(a, {
    bubbles: !1,
    cancelable: !0,
    detail: e
  });
  t && n.addEventListener(a, t, { once: !0 }), n.dispatchEvent(l);
}
function qt(a, t = Number.NEGATIVE_INFINITY, e = Number.POSITIVE_INFINITY) {
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
function Kr(a, t, e, n) {
  t = Number(t), e = Number(e);
  const l = (a - (Number.isNaN(t) ? 0 : t)) % n;
  let s = $a(Math.abs(l) * 2 >= n ? a + Math.sign(l) * (n - Math.abs(l)) : a - l, n);
  return Number.isNaN(t) ? !Number.isNaN(e) && s > e && (s = Math.floor($a(e / n, n)) * n) : s < t ? s = t : !Number.isNaN(e) && s > e && (s = t + Math.floor($a((e - t) / n, n)) * n), s = $a(s, n), s;
}
function Hr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Wr = function a(t, e) {
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
const Xe = /* @__PURE__ */ Hr(Wr);
function jr(a, t) {
  if (a.length !== t.length)
    return !1;
  for (let e = 0; e < a.length; e++)
    if (a[e] !== t[e])
      return !1;
  return !0;
}
function Pt(a, t, e) {
  const n = a.findIndex((i) => Xe(i, t)), l = a.findIndex((i) => Xe(i, e));
  if (n === -1 || l === -1)
    return [];
  const [s, r] = [n, l].sort((i, u) => i - u);
  return a.slice(s, r + 1);
}
const ba = typeof document < "u";
function jt(a) {
  return a == null;
}
function Zt(a) {
  const { defaultValue: t, defaultPlaceholder: e, granularity: n = "day" } = a;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (e)
    return e.copy();
  const l = /* @__PURE__ */ new Date(), s = l.getFullYear(), r = l.getMonth() + 1, i = l.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new Pr(s, r, i, 0, 0, 0) : new Dr(s, r, i);
}
const Ur = [
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
], Gr = ["year", "month", "day"], gn = {
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
function qr(a) {
  if (Ko(a))
    return gn[a];
  {
    const t = Jr(a);
    return Ko(t) ? gn[t] : gn.en;
  }
}
function bn(a, t, e) {
  return Yr(a) ? qr(e)[a] : Zr(a) ? t : Xr(a) ? "––" : "";
}
function Ko(a) {
  return Ur.includes(a);
}
function Yr(a) {
  return Gr.includes(a);
}
function Xr(a) {
  return a === "hour" || a === "minute" || a === "second";
}
function Zr(a) {
  return a === "era" || a === "dayPeriod";
}
function Jr(a) {
  return Intl.Locale ? new Intl.Locale(a).language : a.split("-")[0];
}
const Wn = ["day", "month", "year"], _l = ["hour", "minute", "second", "dayPeriod"], xl = [...Wn, ..._l];
function Qr(a) {
  return Wn.includes(a);
}
function Sl(a) {
  return xl.includes(a);
}
function ei(a, t) {
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
function El(a) {
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
function ti(a, t) {
  var e;
  const n = Ln();
  return ge(() => {
    n.value = a();
  }, {
    ...t,
    flush: (e = void 0) != null ? e : "sync"
  }), Ha(n);
}
function ai(a, t) {
  let e, n, l;
  const s = T(!0), r = () => {
    s.value = !0, l();
  };
  te(a, r, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = fl((c, f) => (n = c, l = f, {
    get() {
      return s.value && (e = i(), s.value = !1), n(), e;
    },
    set(p) {
      u == null || u(p);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function yt(a) {
  return yr() ? (cl(a), !0) : !1;
}
function fa() {
  const a = /* @__PURE__ */ new Set(), t = (l) => {
    a.delete(l);
  };
  return {
    on: (l) => {
      a.add(l);
      const s = () => t(l);
      return yt(s), {
        off: s
      };
    },
    off: t,
    trigger: (...l) => Promise.all(Array.from(a).map((s) => s(...l)))
  };
}
function ni(a) {
  let t = !1, e;
  const n = dl(!0);
  return (...l) => (t || (e = n.run(() => a(...l)), t = !0), e);
}
function Pl(a) {
  let t = 0, e, n;
  const l = () => {
    t -= 1, n && t <= 0 && (n.stop(), e = void 0, n = void 0);
  };
  return (...s) => (t += 1, e || (n = dl(!0), e = n.run(() => a(...s))), yt(l), e);
}
function $e(a) {
  return typeof a == "function" ? a() : o(a);
}
function oi(a) {
  if (!Ue(a))
    return Ut(a);
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
  return Ut(t);
}
function Dl(a) {
  return oi($(a));
}
const Ye = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const li = (a) => typeof a < "u", si = (a) => a != null, ri = Object.prototype.toString, ii = (a) => ri.call(a) === "[object Object]", vt = () => {
}, Ho = /* @__PURE__ */ ui();
function ui() {
  var a, t;
  return Ye && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function jn(a, t) {
  function e(...n) {
    return new Promise((l, s) => {
      Promise.resolve(a(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(l).catch(s);
    });
  }
  return e;
}
const $l = (a) => a();
function di(a, t = {}) {
  let e, n, l = vt;
  const s = (i) => {
    clearTimeout(i), l(), l = vt;
  };
  return (i) => {
    const u = $e(a), d = $e(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (n && (s(n), n = null), Promise.resolve(i())) : new Promise((c, f) => {
      l = t.rejectOnCancel ? f : c, d && !n && (n = setTimeout(() => {
        e && s(e), n = null, c(i());
      }, d)), e = setTimeout(() => {
        n && s(n), n = null, c(i());
      }, u);
    });
  };
}
function ci(...a) {
  let t = 0, e, n = !0, l = vt, s, r, i, u, d;
  !Ue(a[0]) && typeof a[0] == "object" ? { delay: r, trailing: i = !0, leading: u = !0, rejectOnCancel: d = !1 } = a[0] : [r, i = !0, u = !0, d = !1] = a;
  const c = () => {
    e && (clearTimeout(e), e = void 0, l(), l = vt);
  };
  return (p) => {
    const v = $e(r), g = Date.now() - t, m = () => s = p();
    return c(), v <= 0 ? (t = Date.now(), m()) : (g > v && (u || !n) ? (t = Date.now(), m()) : i && (s = new Promise((_, C) => {
      l = d ? C : _, e = setTimeout(() => {
        t = Date.now(), n = !0, _(m()), c();
      }, Math.max(0, v - g));
    })), !u && !e && (e = setTimeout(() => n = !0, v)), n = !1, s);
  };
}
function fi(a = $l) {
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
function Il(a) {
  return ht();
}
function It(a, t = 1e4) {
  return fl((e, n) => {
    let l = $e(a), s;
    const r = () => setTimeout(() => {
      l = $e(a), n();
    }, $e(t));
    return yt(() => {
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
    di(t, e),
    a
  );
}
function pi(a, t = 200, e = !1, n = !0, l = !1) {
  return jn(
    ci(t, e, n, l),
    a
  );
}
function vi(a, t, e = {}) {
  const {
    eventFilter: n = $l,
    ...l
  } = e;
  return te(
    a,
    jn(
      n,
      t
    ),
    l
  );
}
function Wo(a, t, e = {}) {
  const {
    eventFilter: n,
    ...l
  } = e, { eventFilter: s, pause: r, resume: i, isActive: u } = fi(n);
  return { stop: vi(
    a,
    t,
    {
      ...l,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: u };
}
function mi(a, t, ...[e]) {
  const {
    flush: n = "sync",
    deep: l = !1,
    immediate: s = !0,
    direction: r = "both",
    transform: i = {}
  } = e || {}, u = [], d = "ltr" in i && i.ltr || ((p) => p), c = "rtl" in i && i.rtl || ((p) => p);
  return (r === "both" || r === "ltr") && u.push(Wo(
    a,
    (p) => {
      u.forEach((v) => v.pause()), t.value = d(p), u.forEach((v) => v.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), (r === "both" || r === "rtl") && u.push(Wo(
    t,
    (p) => {
      u.forEach((v) => v.pause()), a.value = c(p), u.forEach((v) => v.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), () => {
    u.forEach((p) => p.stop());
  };
}
function hi(a, t) {
  Il() && Fn(a, t);
}
function Bl(a, t = !0, e) {
  Il() ? le(a, e) : t ? a() : oe(a);
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
    }, $e(t));
  }
  return n && (l.value = !0, Ye && u()), yt(i), {
    isPending: Ha(l),
    start: u,
    stop: i
  };
}
function yi(a = 1e3, t = {}) {
  const {
    controls: e = !1,
    callback: n
  } = t, l = Un(
    n ?? vt,
    a,
    t
  ), s = $(() => !l.isPending.value);
  return e ? {
    ready: s,
    ...l
  } : s;
}
function gi(a, t, e) {
  const n = te(a, (...l) => (oe(() => n()), t(...l)), e);
  return n;
}
function Ie(a) {
  var t;
  const e = $e(a);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const Bt = Ye ? window : void 0;
function Ve(...a) {
  let t, e, n, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, n, l] = a, t = Bt) : [t, e, n, l] = a, !t)
    return vt;
  Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, f, p, v) => (c.addEventListener(f, p, v), () => c.removeEventListener(f, p, v)), u = te(
    () => [Ie(t), $e(l)],
    ([c, f]) => {
      if (r(), !c)
        return;
      const p = ii(f) ? { ...f } : f;
      s.push(
        ...e.flatMap((v) => n.map((g) => i(c, v, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), r();
  };
  return yt(d), d;
}
function bi(a) {
  return typeof a == "function" ? a : typeof a == "string" ? (t) => t.key === a : Array.isArray(a) ? (t) => a.includes(t.key) : () => !0;
}
function Gn(...a) {
  let t, e, n = {};
  a.length === 3 ? (t = a[0], e = a[1], n = a[2]) : a.length === 2 ? typeof a[1] == "object" ? (t = !0, e = a[0], n = a[1]) : (t = a[0], e = a[1]) : (t = !0, e = a[0]);
  const {
    target: l = Bt,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, u = bi(t);
  return Ve(l, s, (c) => {
    c.repeat && $e(i) || u(c) && e(c);
  }, r);
}
function Ga() {
  const a = T(!1), t = ht();
  return t && le(() => {
    a.value = !0;
  }, t), a;
}
function Tl(a) {
  const t = Ga();
  return $(() => (t.value, !!a()));
}
function Rl(a, t, e = {}) {
  const { window: n = Bt, ...l } = e;
  let s;
  const r = Tl(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = $(() => {
    const p = $e(a), v = (Array.isArray(p) ? p : [p]).map(Ie).filter(si);
    return new Set(v);
  }), d = te(
    () => u.value,
    (p) => {
      i(), r.value && p.size && (s = new MutationObserver(t), p.forEach((v) => s.observe(v, l)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), f = () => {
    i(), d();
  };
  return yt(f), {
    isSupported: r,
    stop: f,
    takeRecords: c
  };
}
function Ci(a = {}) {
  var t;
  const {
    window: e = Bt,
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
  return e && (Ve(e, "blur", (d) => {
    d.relatedTarget === null && u();
  }, !0), Ve(e, "focus", u, !0)), l && Rl(s, (d) => {
    d.filter((c) => c.removedNodes.length).map((c) => Array.from(c.removedNodes)).flat().forEach((c) => {
      c === i.value && u();
    });
  }, {
    childList: !0,
    subtree: !0
  }), u(), i;
}
function Al(a, t = {}) {
  const {
    immediate: e = !0,
    fpsLimit: n = void 0,
    window: l = Bt
  } = t, s = T(!1), r = n ? 1e3 / n : null;
  let i = 0, u = null;
  function d(p) {
    if (!s.value || !l)
      return;
    i || (i = p);
    const v = p - i;
    if (r && v < r) {
      u = l.requestAnimationFrame(d);
      return;
    }
    i = p, a({ delta: v, timestamp: p }), u = l.requestAnimationFrame(d);
  }
  function c() {
    !s.value && l && (s.value = !0, i = 0, u = l.requestAnimationFrame(d));
  }
  function f() {
    s.value = !1, u != null && l && (l.cancelAnimationFrame(u), u = null);
  }
  return e && c(), yt(f), {
    isActive: Ha(s),
    pause: f,
    resume: c
  };
}
function wi(a) {
  return JSON.parse(JSON.stringify(a));
}
function _i(a) {
  const t = ht(), e = ai(
    () => null,
    () => t.proxy.$el
  );
  return pl(e.trigger), le(e.trigger), e;
}
function Ze(a, t, e = {}) {
  const { window: n = Bt, ...l } = e;
  let s;
  const r = Tl(() => n && "ResizeObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = $(() => Array.isArray(a) ? a.map((f) => Ie(f)) : [Ie(a)]), d = te(
    u,
    (f) => {
      if (i(), r.value && n) {
        s = new ResizeObserver(t);
        for (const p of f)
          p && s.observe(p, l);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), d();
  };
  return yt(c), {
    isSupported: r,
    stop: c
  };
}
function xi(a, t = {}) {
  const e = Ci(t), n = $(() => Ie(a));
  return { focused: $(() => n.value && e.value ? n.value.contains(e.value) : !1) };
}
const jo = 1;
function Si(a, t = {}) {
  const {
    throttle: e = 0,
    idle: n = 200,
    onStop: l = vt,
    onScroll: s = vt,
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
    window: d = Bt,
    onError: c = (I) => {
      console.error(I);
    }
  } = t, f = T(0), p = T(0), v = $({
    get() {
      return f.value;
    },
    set(I) {
      m(I, void 0);
    }
  }), g = $({
    get() {
      return p.value;
    },
    set(I) {
      m(void 0, I);
    }
  });
  function m(I, V) {
    var M, A, F, W;
    if (!d)
      return;
    const K = $e(a);
    if (!K)
      return;
    (F = K instanceof Document ? d.document.body : K) == null || F.scrollTo({
      top: (M = $e(V)) != null ? M : g.value,
      left: (A = $e(I)) != null ? A : v.value,
      behavior: $e(u)
    });
    const J = ((W = K == null ? void 0 : K.document) == null ? void 0 : W.documentElement) || (K == null ? void 0 : K.documentElement) || K;
    v != null && (f.value = J.scrollLeft), g != null && (p.value = J.scrollTop);
  }
  const _ = T(!1), C = Ut({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), D = Ut({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), y = (I) => {
    _.value && (_.value = !1, D.left = !1, D.right = !1, D.top = !1, D.bottom = !1, l(I));
  }, E = Ua(y, e + n), P = (I) => {
    var V;
    if (!d)
      return;
    const M = ((V = I == null ? void 0 : I.document) == null ? void 0 : V.documentElement) || (I == null ? void 0 : I.documentElement) || Ie(I), { display: A, flexDirection: F } = getComputedStyle(M), W = M.scrollLeft;
    D.left = W < f.value, D.right = W > f.value;
    const K = Math.abs(W) <= (r.left || 0), J = Math.abs(W) + M.clientWidth >= M.scrollWidth - (r.right || 0) - jo;
    A === "flex" && F === "row-reverse" ? (C.left = J, C.right = K) : (C.left = K, C.right = J), f.value = W;
    let L = M.scrollTop;
    I === d.document && !L && (L = d.document.body.scrollTop), D.top = L < p.value, D.bottom = L > p.value;
    const G = Math.abs(L) <= (r.top || 0), N = Math.abs(L) + M.clientHeight >= M.scrollHeight - (r.bottom || 0) - jo;
    A === "flex" && F === "column-reverse" ? (C.top = N, C.bottom = G) : (C.top = G, C.bottom = N), p.value = L;
  }, B = (I) => {
    var V;
    if (!d)
      return;
    const M = (V = I.target.documentElement) != null ? V : I.target;
    P(M), _.value = !0, E(I), s(I);
  };
  return Ve(
    a,
    "scroll",
    e ? pi(B, e, !0, !1) : B,
    i
  ), Bl(() => {
    try {
      const I = $e(a);
      if (!I)
        return;
      P(I);
    } catch (I) {
      c(I);
    }
  }), Ve(
    a,
    "scrollend",
    y,
    i
  ), {
    x: v,
    y: g,
    isScrolling: _,
    arrivedState: C,
    directions: D,
    measure() {
      const I = $e(a);
      d && I && P(I);
    }
  };
}
function Ol(a = _i()) {
  const t = Ln(), e = () => {
    const n = Ie(a);
    n && (t.value = n.parentElement);
  };
  return Bl(e), te(() => $e(a), e), t;
}
function ae(a, t, e, n = {}) {
  var l, s, r;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = n, v = ht(), g = e || (v == null ? void 0 : v.emit) || ((l = v == null ? void 0 : v.$emit) == null ? void 0 : l.bind(v)) || ((r = (s = v == null ? void 0 : v.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(v == null ? void 0 : v.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const _ = (y) => i ? typeof i == "function" ? i(y) : wi(y) : y, C = () => li(a[t]) ? _(a[t]) : f, D = (y) => {
    p ? p(y) && g(m, y) : g(m, y);
  };
  if (u) {
    const y = C(), E = T(y);
    let P = !1;
    return te(
      () => a[t],
      (B) => {
        P || (P = !0, E.value = _(B), oe(() => P = !1));
      }
    ), te(
      E,
      (B) => {
        !P && (B !== a[t] || c) && D(B);
      },
      { deep: c }
    ), E;
  } else
    return $({
      get() {
        return C();
      },
      set(y) {
        D(y);
      }
    });
}
function qa(a) {
  return a ? a.flatMap((t) => t.type === we ? qa(t.children) : [t]) : [];
}
const Ei = ["INPUT", "TEXTAREA"];
function Tt(a, t, e, n = {}) {
  if (!t || n.enableIgnoredElement && Ei.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: l = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = n, [f, p, v, g, m, _] = [
    a.key === "ArrowRight",
    a.key === "ArrowLeft",
    a.key === "ArrowUp",
    a.key === "ArrowDown",
    a.key === "Home",
    a.key === "End"
  ], C = v || g, D = f || p;
  if (!m && !_ && (!C && !D || l === "vertical" && D || l === "horizontal" && C))
    return null;
  const y = e ? Array.from(e.querySelectorAll(s)) : r;
  if (!y.length)
    return null;
  d && a.preventDefault();
  let E = null;
  return D || C ? E = kl(y, t, {
    goForward: C ? g : u === "ltr" ? f : p,
    loop: i
  }) : m ? E = y.at(0) || null : _ && (E = y.at(-1) || null), c && (E == null || E.focus()), E;
}
function kl(a, t, e, n = a.length) {
  if (--n === 0)
    return null;
  const l = a.indexOf(t), s = e.goForward ? l + 1 : l - 1;
  if (!e.loop && (s < 0 || s >= a.length))
    return null;
  const r = (s + a.length) % a.length, i = a[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? kl(
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
function Pi(a) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((e, n) => $n(e, n, "", a), {})
  );
}
const Di = Pi(), [Ya, $i] = ee("ConfigProvider"), xv = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ConfigProvider",
  props: {
    dir: { default: "ltr" },
    scrollBody: { type: [Boolean, Object], default: !0 },
    nonce: { default: void 0 },
    useId: { type: Function, default: void 0 }
  },
  setup(a) {
    const t = a, { dir: e, scrollBody: n, nonce: l } = ne(t);
    return $i({
      dir: e,
      scrollBody: n,
      nonce: l,
      useId: t.useId
    }), (s, r) => w(s.$slots, "default");
  }
});
let Ii = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Bi = (a = 21) => {
  let t = "", e = a;
  for (; e--; )
    t += Ii[Math.random() * 64 | 0];
  return t;
};
const Ti = Pl(() => {
  const a = T(/* @__PURE__ */ new Map()), t = T(), e = $(() => {
    for (const r of a.value.values())
      if (r)
        return !0;
    return !1;
  }), n = Ya({
    scrollBody: T(!0)
  });
  let l = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Ho && (l == null || l()), t.value = void 0;
  };
  return te(e, (r, i) => {
    var f;
    if (!Ye)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, c = (f = n.scrollBody) != null && f.value ? typeof n.scrollBody.value == "object" ? Di({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Ho && (l = Ve(
      document,
      "touchmove",
      (p) => Ri(p),
      { passive: !1 }
    )), oe(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), a;
});
function Ca(a) {
  const t = Bi(6), e = Ti();
  e.value.set(t, a ?? !1);
  const n = $({
    get: () => e.value.get(t) ?? !1,
    set: (l) => e.value.set(t, l)
  });
  return hi(() => {
    e.value.delete(t);
  }), n;
}
function Ml(a) {
  const t = window.getComputedStyle(a);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && a.clientWidth < a.scrollWidth || t.overflowY === "auto" && a.clientHeight < a.scrollHeight)
    return !0;
  {
    const e = a.parentNode;
    return !e || e.tagName === "BODY" ? !1 : Ml(e);
  }
}
function Ri(a) {
  const t = a || window.event, e = t.target;
  return Ml(e) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Ai = "data-radix-vue-collection-item";
function Fe(a, t = Ai) {
  const e = a ?? Symbol();
  return { createCollection: (s) => {
    const r = T([]);
    function i() {
      const u = Ie(s);
      return u ? r.value = Array.from(
        u.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return gr(() => {
      r.value = [];
    }), le(i), pl(i), te(() => s == null ? void 0 : s.value, i, { immediate: !0 }), ul(e, r), r;
  }, injectCollection: () => il(e, T([])) };
}
function qn(a) {
  const t = T(a);
  function e() {
    return t.value;
  }
  function n(m) {
    t.value = m;
  }
  function l(m, _) {
    return new st(t.value, _).format(m);
  }
  function s(m, _ = !0) {
    return ca(m) && _ ? l(Ne(m), {
      dateStyle: "long",
      timeStyle: "long"
    }) : l(Ne(m), {
      dateStyle: "long"
    });
  }
  function r(m, _ = {}) {
    return new st(t.value, { month: "long", year: "numeric", ..._ }).format(m);
  }
  function i(m, _ = {}) {
    return new st(t.value, { month: "long", ..._ }).format(m);
  }
  function u() {
    const m = $r(Hn());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((C) => ({ label: i(Ne(m.set({ month: C }))), value: C }));
  }
  function d(m, _ = {}) {
    return new st(t.value, { year: "numeric", ..._ }).format(m);
  }
  function c(m, _) {
    return Cl(m) ? new st(t.value, {
      ..._,
      timeZone: m.timeZone
    }).formatToParts(Ne(m)) : new st(t.value, _).formatToParts(Ne(m));
  }
  function f(m, _ = "narrow") {
    return new st(t.value, { weekday: _ }).format(m);
  }
  function p(m) {
    var D;
    return ((D = new st(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(m).find((y) => y.type === "dayPeriod")) == null ? void 0 : D.value) === "PM" ? "PM" : "AM";
  }
  const v = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function g(m, _, C = {}) {
    const D = { ...v, ...C }, E = c(m, D).find((P) => P.type === _);
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
    dayPeriod: p,
    selectedDate: s,
    dayOfWeek: f,
    getMonths: u
  };
}
function be(a) {
  const t = Ya({
    dir: T("ltr")
  });
  return $(() => {
    var e;
    return (a == null ? void 0 : a.value) || ((e = t.dir) == null ? void 0 : e.value) || "ltr";
  });
}
function Oe(a) {
  const t = ht(), e = t == null ? void 0 : t.type.emits, n = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((l) => {
    n[br(vl(l))] = (...s) => a(l, ...s);
  }), n;
}
let wn = 0;
function Yn() {
  ge((a) => {
    if (!Ye)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Uo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Uo()
    ), wn++, a(() => {
      wn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), wn--;
    });
  });
}
function Uo() {
  const a = document.createElement("span");
  return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", a;
}
function Je(a) {
  return $(() => {
    var t;
    return $e(a) ? !!((t = Ie(a)) != null && t.closest("form")) : !0;
  });
}
function Rt(a) {
  const t = ht(), e = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((l, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (l[s] = r), l;
  }, {}), n = Cr(a);
  return $(() => {
    const l = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      l[vl(r)] = s[r];
    }), Object.keys({ ...e, ...l }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function xe(a, t) {
  const e = Rt(a), n = t ? Oe(t) : {};
  return $(() => ({
    ...e.value,
    ...n
  }));
}
function R() {
  const a = ht(), t = T(), e = $(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Ie(t);
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
function Vl(a, t) {
  const e = It(!1, 300), n = T(null), l = fa();
  function s() {
    n.value = null, e.value = !1;
  }
  function r(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, f = Oi(c, d.getBoundingClientRect()), p = ki(c, f), v = Mi(u.getBoundingClientRect()), g = Fi([...p, ...v]);
    n.value = g, e.value = !0;
  }
  return ge((i) => {
    if (a.value && t.value) {
      const u = (c) => r(c, t.value), d = (c) => r(c, a.value);
      a.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, f;
        (c = a.value) == null || c.removeEventListener("pointerleave", u), (f = t.value) == null || f.removeEventListener("pointerleave", d);
      });
    }
  }), ge((i) => {
    var u;
    if (n.value) {
      const d = (c) => {
        var _, C;
        if (!n.value)
          return;
        const f = c.target, p = { x: c.clientX, y: c.clientY }, v = ((_ = a.value) == null ? void 0 : _.contains(f)) || ((C = t.value) == null ? void 0 : C.contains(f)), g = !Vi(p, n.value), m = f.hasAttribute("data-grace-area-trigger");
        v ? s() : (g || m) && (s(), l.trigger());
      };
      (u = a.value) == null || u.ownerDocument.addEventListener("pointermove", d), i(() => {
        var c;
        return (c = a.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: e,
    onPointerExit: l.on
  };
}
function Oi(a, t) {
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
function ki(a, t, e = 5) {
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
function Mi(a) {
  const { top: t, right: e, bottom: n, left: l } = a;
  return [
    { x: l, y: t },
    { x: e, y: t },
    { x: e, y: n },
    { x: l, y: n }
  ];
}
function Vi(a, t) {
  const { x: e, y: n } = a;
  let l = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, c = t[r].y;
    u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function Fi(a) {
  const t = a.slice();
  return t.sort((e, n) => e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0), Li(t);
}
function Li(a) {
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
var Ni = function(a) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(a) ? a[0] : a;
  return t.ownerDocument.body;
}, Kt = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), Ba = {}, _n = 0, Fl = function(a) {
  return a && (a.host || Fl(a.parentNode));
}, zi = function(a, t) {
  return t.map(function(e) {
    if (a.contains(e))
      return e;
    var n = Fl(e);
    return n && a.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", a, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
}, Ki = function(a, t, e, n) {
  var l = zi(t, Array.isArray(a) ? a : [a]);
  Ba[e] || (Ba[e] = /* @__PURE__ */ new WeakMap());
  var s = Ba[e], r = [], i = /* @__PURE__ */ new Set(), u = new Set(l), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  l.forEach(d);
  var c = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        c(p);
      else
        try {
          var v = p.getAttribute(n), g = v !== null && v !== "false", m = (Kt.get(p) || 0) + 1, _ = (s.get(p) || 0) + 1;
          Kt.set(p, m), s.set(p, _), r.push(p), m === 1 && g && Ia.set(p, !0), _ === 1 && p.setAttribute(e, "true"), g || p.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", p, C);
        }
    });
  };
  return c(t), i.clear(), _n++, function() {
    r.forEach(function(f) {
      var p = Kt.get(f) - 1, v = s.get(f) - 1;
      Kt.set(f, p), s.set(f, v), p || (Ia.has(f) || f.removeAttribute(n), Ia.delete(f)), v || f.removeAttribute(e);
    }), _n--, _n || (Kt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), Ba = {});
  };
}, Hi = function(a, t, e) {
  e === void 0 && (e = "data-aria-hidden");
  var n = Array.from(Array.isArray(a) ? a : [a]), l = Ni(a);
  return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live]"))), Ki(n, l, e, "aria-hidden")) : function() {
    return null;
  };
};
function wa(a) {
  let t;
  te(() => Ie(a), (e) => {
    e ? t = Hi(e) : t && t();
  }), Be(() => {
    t && t();
  });
}
let Wi = 0;
function me(a, t = "radix") {
  if (a)
    return a;
  const e = Ya({ useId: void 0 });
  return Fo.useId ? `${t}-${Fo.useId()}` : e.useId ? `${t}-${e.useId()}` : `${t}-${++Wi}`;
}
function ji(a, t) {
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
    var p;
    if (!(e != null && e.value) || !t.multiple || !Array.isArray(a.value))
      return;
    const c = (p = i().filter((v) => v.ref.dataset.disabled !== "").find((v) => v.ref === r)) == null ? void 0 : p.value;
    if (!c)
      return;
    let f = null;
    switch (s) {
      case "prev":
      case "next": {
        f = Pt(u, e.value, c);
        break;
      }
      case "first": {
        f = Pt(u, e.value, u == null ? void 0 : u[0]);
        break;
      }
      case "last": {
        f = Pt(u, e.value, u == null ? void 0 : u[u.length - 1]);
        break;
      }
    }
    a.value = f;
  }
  return {
    firstValue: e,
    onSelectItem: n,
    handleMultipleReplace: l
  };
}
function Ll(a) {
  const t = T(), e = $(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.width) ?? 0;
  }), n = $(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.height) ?? 0;
  });
  return le(() => {
    const l = Ie(a);
    if (l) {
      t.value = { width: l.offsetWidth, height: l.offsetHeight };
      const s = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
          u = f.inlineSize, d = f.blockSize;
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
function Nl(a, t) {
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
  const t = It("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (l, s) => {
      var p, v;
      if (!(a != null && a.value) && !s)
        return;
      t.value = t.value + l;
      const r = (a == null ? void 0 : a.value) ?? s, i = document.activeElement, u = ((v = (p = r.find((g) => g === i)) == null ? void 0 : p.textContent) == null ? void 0 : v.trim()) ?? "", d = r.map((g) => {
        var m;
        return ((m = g.textContent) == null ? void 0 : m.trim()) ?? "";
      }), c = Zn(d, t.value, u), f = r.find(
        (g) => {
          var m;
          return ((m = g.textContent) == null ? void 0 : m.trim()) === c;
        }
      );
      return f && f.focus(), f;
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
function Sv(a, t) {
  return {
    inheritAttrs: !1,
    name: `${a.__name ?? ""}Wrapper`,
    setup(e, n) {
      return () => {
        const l = typeof (t == null ? void 0 : t.props) == "function" ? t == null ? void 0 : t.props(n.attrs) : t == null ? void 0 : t.props, { forwardRef: s } = R(), r = k(l, n.attrs);
        return pt(a, { ...r, ref: s }, n.slots);
      };
    }
  };
}
function Qe() {
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
const Jn = x({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(a, { attrs: t, slots: e }) {
    return () => {
      var u, d;
      if (!e.default)
        return null;
      const n = qa(e.default()), l = n.findIndex((c) => c.type !== ml);
      if (l === -1)
        return n;
      const s = n[l];
      (u = s.props) == null || delete u.ref;
      const r = s.props ? k(t, s.props) : t;
      t.class && ((d = s.props) != null && d.class) && delete s.props.class;
      const i = Nn(s, r);
      for (const c in r)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = r[c]);
      return n.length === 1 ? i : (n[l] = i, n);
    };
  }
}), O = x({
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
function Te() {
  const a = T(), t = $(() => {
    var e, n;
    return ["#text", "#comment"].includes((e = a.value) == null ? void 0 : e.$el.nodeName) ? (n = a.value) == null ? void 0 : n.$el.nextElementSibling : Ie(a);
  });
  return {
    primitiveElement: a,
    currentElement: t
  };
}
const [zl, Ui] = ee("CollapsibleRoot"), Gi = /* @__PURE__ */ x({
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
    return Ui({
      contentId: "",
      disabled: r,
      open: s,
      onOpenToggle: () => {
        s.value = !s.value;
      }
    }), t({ open: s }), R(), (i, u) => (b(), S(o(O), {
      as: i.as,
      "as-child": n.asChild,
      "data-state": o(s) ? "open" : "closed",
      "data-disabled": o(r) ? "" : void 0
    }, {
      default: h(() => [
        w(i.$slots, "default", { open: o(s) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), qi = /* @__PURE__ */ x({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = zl();
    return (n, l) => {
      var s, r;
      return b(), S(o(O), {
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
        default: h(() => [
          w(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Yi(a, t) {
  const e = T({}), n = T("none"), l = a.value ? "mounted" : "unmounted", { state: s, dispatch: r } = Nl(l, {
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
    if (Ye) {
      const m = new CustomEvent(v, { bubbles: !1, cancelable: !1 });
      (g = t.value) == null || g.dispatchEvent(m);
    }
  };
  te(
    a,
    async (v, g) => {
      var _;
      const m = g !== v;
      if (await oe(), m) {
        const C = n.value, D = Ta(t.value);
        v ? (r("MOUNT"), i("enter"), D === "none" && i("after-enter")) : D === "none" || ((_ = e.value) == null ? void 0 : _.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : g && C !== D ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (v) => {
    const g = Ta(t.value), m = g.includes(
      v.animationName
    ), _ = s.value === "mounted" ? "enter" : "leave";
    v.target === t.value && m && (i(`after-${_}`), r("ANIMATION_END")), v.target === t.value && g === "none" && r("ANIMATION_END");
  }, d = (v) => {
    v.target === t.value && (n.value = Ta(t.value));
  }, c = te(
    t,
    (v, g) => {
      v ? (e.value = getComputedStyle(v), v.addEventListener("animationstart", d), v.addEventListener("animationcancel", u), v.addEventListener("animationend", u)) : (r("ANIMATION_END"), g == null || g.removeEventListener("animationstart", d), g == null || g.removeEventListener("animationcancel", u), g == null || g.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), f = te(s, () => {
    const v = Ta(t.value);
    n.value = s.value === "mounted" ? v : "none";
  });
  return Be(() => {
    c(), f();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function Ta(a) {
  return a && getComputedStyle(a).animationName || "none";
}
const Pe = x({
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
    const { present: n, forceMount: l } = ne(a), s = T(), { isPresent: r } = Yi(n, s);
    e({ present: r });
    let i = t.default({ present: r });
    i = qa(i || []);
    const u = ht();
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
          ].map((f) => `  - ${f}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l.value || n.value || r.value ? pt(t.default({ present: r })[0], {
      ref: (c) => {
        const f = Ie(c);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-radix-popper-content-wrapper") ? s.value = f.firstElementChild : s.value = f), f;
      }
    }) : null;
  }
}), Xi = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = zl();
    e.contentId || (e.contentId = me(void 0, "radix-vue-collapsible-content"));
    const n = T(), { forwardRef: l, currentElement: s } = R(), r = T(0), i = T(0), u = $(() => e.open.value), d = T(u.value), c = T();
    return te(
      () => {
        var f;
        return [u.value, (f = n.value) == null ? void 0 : f.present];
      },
      async () => {
        await oe();
        const f = s.value;
        if (!f)
          return;
        c.value = c.value || {
          transitionDuration: f.style.transitionDuration,
          animationName: f.style.animationName
        }, f.style.transitionDuration = "0s", f.style.animationName = "none";
        const p = f.getBoundingClientRect();
        i.value = p.height, r.value = p.width, d.value || (f.style.transitionDuration = c.value.transitionDuration, f.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), le(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (f, p) => (b(), S(o(Pe), {
      ref_key: "presentRef",
      ref: n,
      present: f.forceMount || o(e).open.value,
      "force-mount": !0
    }, {
      default: h(() => {
        var v, g;
        return [
          q(o(O), k(f.$attrs, {
            id: o(e).contentId,
            ref: o(l),
            "as-child": t.asChild,
            as: f.as,
            "data-state": o(e).open.value ? "open" : "closed",
            "data-disabled": (v = o(e).disabled) != null && v.value ? "" : void 0,
            hidden: !((g = n.value) != null && g.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: h(() => {
              var m;
              return [
                (m = n.value) != null && m.present ? w(f.$slots, "default", { key: 0 }) : ce("", !0)
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
function Kl({ type: a, defaultValue: t, modelValue: e }) {
  const n = e || t;
  if (jt(a) && jt(e) && jt(t))
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
function Zi({ type: a, defaultValue: t, modelValue: e }) {
  return a || Kl({ type: a, defaultValue: t, modelValue: e });
}
function Ji({ type: a, defaultValue: t }) {
  return t !== void 0 ? t : a === "single" ? void 0 : [];
}
function Hl(a, t) {
  const e = T(Zi(a)), n = ae(a, "modelValue", t, {
    defaultValue: Ji(a),
    passive: a.modelValue === void 0,
    deep: !0
  });
  te(
    () => [a.type, a.modelValue, a.defaultValue],
    () => {
      const r = Kl(a);
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
  const s = $(() => e.value === "single");
  return {
    modelValue: n,
    type: e,
    changeModelValue: l,
    isSingle: s
  };
}
const [Xa, Qi] = ee("AccordionRoot"), Ev = /* @__PURE__ */ x({
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
    const e = a, n = t, { dir: l, disabled: s } = ne(e), r = be(l), { modelValue: i, changeModelValue: u, isSingle: d } = Hl(e, n), { forwardRef: c, currentElement: f } = R();
    return Qi({
      disabled: s,
      direction: r,
      orientation: e.orientation,
      parentElement: f,
      isSingle: d,
      collapsible: e.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (p, v) => (b(), S(o(O), {
      ref: o(c),
      "as-child": p.asChild,
      as: p.as
    }, {
      default: h(() => [
        w(p.$slots, "default", { modelValue: o(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [Qn, eu] = ee("AccordionItem"), Pv = /* @__PURE__ */ x({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, n = Xa(), l = $(
      () => n.isSingle.value ? e.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(e.value)
    ), s = $(() => n.disabled.value || e.disabled || n.isSingle.value && l.value && !n.collapsible), r = $(() => s.value ? "" : void 0), i = $(
      () => l.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: l, dataDisabled: r });
    const { currentRef: u, currentElement: d } = R();
    eu({
      open: l,
      dataState: i,
      disabled: s,
      dataDisabled: r,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: $(() => e.value)
    });
    function c(f) {
      Tt(
        f,
        d.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: !0
        }
      );
    }
    return (f, p) => (b(), S(o(Gi), {
      "data-orientation": o(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: l.value,
      as: e.as,
      "as-child": e.asChild,
      onKeydown: ie(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: h(() => [
        w(f.$slots, "default", { open: l.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Dv = /* @__PURE__ */ x({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Xa(), n = Qn();
    return R(), (l, s) => (b(), S(o(Xi), {
      role: "region",
      hidden: !o(n).open.value,
      "as-child": t.asChild,
      "force-mount": t.forceMount,
      "aria-labelledby": o(n).triggerId,
      "data-state": o(n).dataState.value,
      "data-disabled": o(n).dataDisabled.value,
      "data-orientation": o(e).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: h(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), $v = /* @__PURE__ */ x({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(a) {
    const t = a, e = Xa(), n = Qn();
    return R(), (l, s) => (b(), S(o(O), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": o(e).orientation,
      "data-state": o(n).dataState.value,
      "data-disabled": o(n).dataDisabled.value
    }, {
      default: h(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), Iv = /* @__PURE__ */ x({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Xa(), n = Qn();
    n.triggerId || (n.triggerId = me(void 0, "radix-vue-accordion-trigger"));
    function l() {
      n.disabled.value || e.changeModelValue(n.value.value);
    }
    return (s, r) => (b(), S(o(qi), {
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
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), tu = "data-radix-vue-collection-item", [eo, au] = ee("CollectionProvider");
function Jt(a = tu) {
  const t = T(/* @__PURE__ */ new Map()), e = T(), n = au({
    collectionRef: e,
    itemMap: t,
    attrName: a
  }), { getItems: l } = ea(n), s = $(() => Array.from(n.itemMap.value.values())), r = $(() => n.itemMap.value.size);
  return { getItems: l, reactiveItems: s, itemMapSize: r };
}
const Qt = x({
  name: "CollectionSlot",
  setup(a, { slots: t }) {
    const e = eo(), { primitiveElement: n, currentElement: l } = Te();
    return te(l, () => {
      e.collectionRef.value = l.value;
    }), () => pt(Jn, { ref: n }, t);
  }
}), At = x({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(a, { slots: t, attrs: e }) {
    const n = eo(), { primitiveElement: l, currentElement: s } = Te();
    return ge((r) => {
      if (s.value) {
        const i = wr(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: a.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => pt(Jn, { ...e, [n.attrName]: "", ref: l }, t);
  }
});
function ea(a) {
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
function nu(a) {
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
const [xa, ou] = ee("AIChat"), Bv = /* @__PURE__ */ x({
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
    }), r = T(), i = T(), { getItems: u, itemMapSize: d } = Jt("data-radix-vue-ai-chat-item");
    return te(() => d.value, () => {
      s.value = u().map((c) => c.value);
    }, {
      immediate: !0,
      flush: "post"
    }), ou({
      prompt: l,
      messages: s,
      inputElement: r,
      onInputElementChange: (c) => r.value = c,
      contentElement: i,
      onContentElementChange: (c) => i.value = c,
      onSendMessage: () => {
        n("send");
      },
      emitter: e.emitter || nu()
    }), (c, f) => (b(), S(o(O), {
      as: e.as,
      "as-child": c.asChild
    }, {
      default: h(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Tv = /* @__PURE__ */ x({
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
    le(() => {
      const r = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      r && (e.onInputElementChange(r), setTimeout(() => {
        t.autoFocus && (r == null || r.focus());
      }, 1));
    });
    function s(r) {
      var i;
      e.prompt.value = (i = r.target) == null ? void 0 : i.value;
    }
    return (r, i) => (b(), S(o(O), {
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
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-disabled"]));
  }
}), Rv = /* @__PURE__ */ x({
  __name: "AIChatContent",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = xa();
    return le(() => {
      n.onContentElementChange(e.value);
    }), (l, s) => (b(), S(o(Qt), null, {
      default: h(() => [
        q(o(O), {
          ref: o(t),
          as: l.as,
          "as-child": l.asChild
        }, {
          default: h(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Av = /* @__PURE__ */ x({
  __name: "AIChatMessageItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    xa();
    const { forwardRef: t } = R(), e = me(void 0, "radix-vue-ai-chat-item"), n = me(void 0, "radix-vue-ai-chat-option");
    return (l, s) => (b(), S(o(At), { value: l.value }, {
      default: h(() => [
        q(o(O), {
          id: o(n),
          ref: o(t),
          role: "textbox",
          tabindex: "-1",
          "aria-labelledby": o(e),
          as: l.as,
          "as-child": l.asChild
        }, {
          default: h(() => [
            w(l.$slots, "default", {}, () => [
              he(De(l.value.content), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Ov = /* @__PURE__ */ x({
  __name: "AIChatSend",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = xa(), { forwardRef: n } = R();
    return (l, s) => (b(), S(o(O), k(t, {
      ref: o(n),
      type: l.as === "button" ? "button" : void 0,
      as: l.as,
      "as-child": l.asChild,
      onClick: o(e).onSendMessage
    }), {
      default: h(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "as", "as-child", "onClick"]));
  }
}), kv = /* @__PURE__ */ x({
  __name: "AIChatAutoScroll",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = xa(), e = T(!0), { y: n } = Si(t.contentElement);
    function l() {
      n.value = t.contentElement.value.scrollHeight;
    }
    te(n, (r) => {
      r < t.contentElement.value.scrollHeight - t.contentElement.value.clientHeight - 10 ? e.value = !1 : e.value = !0;
    }), te(t.messages, () => {
      e.value && l();
    }, {
      deep: !0
    });
    function s() {
      e.value = !0, l();
    }
    return le(() => {
      l(), t.emitter.on("scrollToBottom", s);
    }), Be(() => {
      t.emitter.off("scrollToBottom", s);
    }), (r, i) => (b(), S(o(O), {
      as: r.as,
      "as-child": r.asChild
    }, {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), [et, lu] = ee("DialogRoot"), su = /* @__PURE__ */ x({
  inheritAttrs: !1,
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
    return lu({
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
    }), (u, d) => w(u.$slots, "default", { open: o(l) });
  }
}), ru = /* @__PURE__ */ x({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = et(), { forwardRef: n, currentElement: l } = R();
    return e.contentId || (e.contentId = me(void 0, "radix-vue-dialog-content")), le(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (b(), S(o(O), k(t, {
      ref: o(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": o(e).open.value || !1,
      "aria-controls": o(e).open.value ? o(e).contentId : void 0,
      "data-state": o(e).open.value ? "open" : "closed",
      onClick: o(e).onOpenToggle
    }), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), nt = /* @__PURE__ */ x({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = Ga();
    return (e, n) => o(t) || e.forceMount ? (b(), S(Xt, {
      key: 0,
      to: e.to,
      disabled: e.disabled
    }, [
      w(e.$slots, "default")
    ], 8, ["to", "disabled"])) : ce("", !0);
  }
}), Mv = /* @__PURE__ */ x({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(nt), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iu = "dismissableLayer.pointerDownOutside", uu = "dismissableLayer.focusOutside";
function Wl(a, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), n = a.dataset.dismissableLayer === "" ? a : a.querySelector(
    "[data-dismissable-layer]"
  ), l = Array.from(
    a.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(e && n === e || l.indexOf(n) < l.indexOf(e));
}
function jl(a, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = T(!1), l = T(() => {
  });
  return ge((r) => {
    if (!Ye)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (Wl(t.value, c)) {
          n.value = !1;
          return;
        }
        if (d.target && !n.value) {
          let f = function() {
            Gt(
              iu,
              a,
              p
            );
          };
          const p = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", l.value), l.value = f, e.addEventListener("click", l.value, {
            once: !0
          })) : f();
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
function Ul(a, t) {
  var l;
  const e = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = T(!1);
  return ge((s) => {
    if (!Ye)
      return;
    const r = async (i) => {
      t != null && t.value && (await oe(), !(!t.value || Wl(t.value, i.target)) && i.target && !n.value && Gt(
        uu,
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
const je = Ut({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), gt = /* @__PURE__ */ x({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = $(
      () => {
        var g;
        return ((g = s.value) == null ? void 0 : g.ownerDocument) ?? globalThis.document;
      }
    ), i = $(() => je.layersRoot), u = $(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = $(() => je.layersWithOutsidePointerEventsDisabled.size > 0), c = $(() => {
      const g = Array.from(i.value), [m] = [...je.layersWithOutsidePointerEventsDisabled].slice(-1), _ = g.indexOf(m);
      return u.value >= _;
    }), f = jl(async (g) => {
      const m = [...je.branches].some(
        (_) => _ == null ? void 0 : _.contains(g.target)
      );
      !c.value || m || (n("pointerDownOutside", g), n("interactOutside", g), await oe(), g.defaultPrevented || n("dismiss"));
    }, s), p = Ul((g) => {
      [...je.branches].some(
        (_) => _ == null ? void 0 : _.contains(g.target)
      ) || (n("focusOutside", g), n("interactOutside", g), g.defaultPrevented || n("dismiss"));
    }, s);
    Gn("Escape", (g) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", g), g.defaultPrevented || n("dismiss"));
    });
    let v;
    return ge((g) => {
      s.value && (e.disableOutsidePointerEvents && (je.layersWithOutsidePointerEventsDisabled.size === 0 && (v = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), je.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), g(() => {
        e.disableOutsidePointerEvents && je.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = v);
      }));
    }), ge((g) => {
      g(() => {
        s.value && (i.value.delete(s.value), je.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (g, m) => (b(), S(o(O), {
      ref: o(l),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: Me({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: o(p).onFocusCapture,
      onBlurCapture: o(p).onBlurCapture,
      onPointerdownCapture: o(f).onPointerDownCapture
    }, {
      default: h(() => [
        w(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), du = /* @__PURE__ */ x({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = R();
    return le(() => {
      je.branches.add(n.value);
    }), Be(() => {
      je.branches.delete(n.value);
    }), (l, s) => (b(), S(o(O), k({ ref: o(e) }, t), {
      default: h(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xn = "focusScope.autoFocusOnMount", Sn = "focusScope.autoFocusOnUnmount", Go = { bubbles: !1, cancelable: !0 };
function Va(a, { select: t = !1 } = {}) {
  const e = document.activeElement;
  for (const n of a)
    if (ct(n, { select: t }), document.activeElement !== e)
      return !0;
}
function cu(a) {
  const t = to(a), e = qo(t, a), n = qo(t.reverse(), a);
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
function qo(a, t) {
  for (const e of a)
    if (!fu(e, { upTo: t }))
      return e;
}
function fu(a, { upTo: t }) {
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
function pu(a) {
  return a instanceof HTMLInputElement && "select" in a;
}
function ct(a, { select: t = !1 } = {}) {
  if (a && a.focus) {
    const e = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== e && pu(a) && t && a.select();
  }
}
const vu = ni(() => T([]));
function mu() {
  const a = vu();
  return {
    add(t) {
      const e = a.value[0];
      t !== e && (e == null || e.pause()), a.value = Yo(a.value, t), a.value.unshift(t);
    },
    remove(t) {
      var e;
      a.value = Yo(a.value, t), (e = a.value[0]) == null || e.resume();
    }
  };
}
function Yo(a, t) {
  const e = [...a], n = e.indexOf(t);
  return n !== -1 && e.splice(n, 1), e;
}
function hu(a) {
  return a.filter((t) => t.tagName !== "A");
}
const Za = /* @__PURE__ */ x({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, { currentRef: l, currentElement: s } = R(), r = T(null), i = mu(), u = Ut({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ge((c) => {
      if (!Ye)
        return;
      const f = s.value;
      if (!e.trapped)
        return;
      function p(_) {
        if (u.paused || !f)
          return;
        const C = _.target;
        f.contains(C) ? r.value = C : ct(r.value, { select: !0 });
      }
      function v(_) {
        if (u.paused || !f)
          return;
        const C = _.relatedTarget;
        C !== null && (f.contains(C) || ct(r.value, { select: !0 }));
      }
      function g(_) {
        f.contains(r.value) || ct(f);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", v);
      const m = new MutationObserver(g);
      f && m.observe(f, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", v), m.disconnect();
      });
    }), ge(async (c) => {
      const f = s.value;
      if (await oe(), !f)
        return;
      i.add(u);
      const p = document.activeElement;
      if (!f.contains(p)) {
        const g = new CustomEvent(xn, Go);
        f.addEventListener(xn, (m) => n("mountAutoFocus", m)), f.dispatchEvent(g), g.defaultPrevented || (Va(hu(to(f)), {
          select: !0
        }), document.activeElement === p && ct(f));
      }
      c(() => {
        f.removeEventListener(xn, (_) => n("mountAutoFocus", _));
        const g = new CustomEvent(Sn, Go), m = (_) => {
          n("unmountAutoFocus", _);
        };
        f.addEventListener(Sn, m), f.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || ct(p ?? document.body, { select: !0 }), f.removeEventListener(Sn, m), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const f = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, p = document.activeElement;
      if (f && p) {
        const v = c.currentTarget, [g, m] = cu(v);
        g && m ? !c.shiftKey && p === m ? (c.preventDefault(), e.loop && ct(g, { select: !0 })) : c.shiftKey && p === g && (c.preventDefault(), e.loop && ct(m, { select: !0 })) : p === v && c.preventDefault();
      }
    }
    return (c, f) => (b(), S(o(O), {
      ref_key: "currentRef",
      ref: l,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: h(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), yu = "menu.itemSelect", In = ["Enter", " "], gu = ["ArrowDown", "PageUp", "Home"], Gl = ["ArrowUp", "PageDown", "End"], bu = [...gu, ...Gl], Cu = {
  ltr: [...In, "ArrowRight"],
  rtl: [...In, "ArrowLeft"]
}, wu = {
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
function _u(a, t) {
  const { x: e, y: n } = a;
  let l = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, c = t[r].y;
    u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function xu(a, t) {
  if (!t)
    return !1;
  const e = { x: a.clientX, y: a.clientY };
  return _u(e, t);
}
function pa(a) {
  return a.pointerType === "mouse";
}
const Su = "DialogTitle", Eu = "DialogContent";
function Pu({
  titleName: a = Su,
  contentName: t = Eu,
  componentLink: e = "dialog.html#title",
  titleId: n,
  descriptionId: l,
  contentElement: s
}) {
  const r = `Warning: \`${t}\` requires a \`${a}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${e}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  le(() => {
    var c;
    document.getElementById(n) || console.warn(r);
    const d = (c = s.value) == null ? void 0 : c.getAttribute("aria-describedby");
    l && d && (document.getElementById(l) || console.warn(i));
  });
}
const ql = /* @__PURE__ */ x({
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
    const e = a, n = t, l = et(), { forwardRef: s, currentElement: r } = R();
    return l.titleId || (l.titleId = me(void 0, "radix-vue-dialog-title")), l.descriptionId || (l.descriptionId = me(void 0, "radix-vue-dialog-description")), le(() => {
      l.contentElement = r, document.activeElement !== document.body && (l.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && Pu({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: l.titleId,
      descriptionId: l.descriptionId,
      contentElement: r
    }), (i, u) => (b(), S(o(Za), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: h(() => [
        q(o(gt), k({
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
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Du = /* @__PURE__ */ x({
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
    const e = a, n = t, l = et(), s = Oe(n), { forwardRef: r, currentElement: i } = R();
    return wa(i), (u, d) => (b(), S(ql, k({ ...e, ...o(s) }, {
      ref: o(r),
      "trap-focus": o(l).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f;
        c.defaultPrevented || (c.preventDefault(), (f = o(l).triggerElement.value) == null || f.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const f = c.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0;
        (f.button === 2 || p) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: h(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), $u = /* @__PURE__ */ x({
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
    const e = a, l = Oe(t);
    R();
    const s = et(), r = T(!1), i = T(!1);
    return (u, d) => (b(), S(ql, k({ ...e, ...o(l) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f;
        c.defaultPrevented || (r.value || (f = o(s).triggerElement.value) == null || f.focus(), c.preventDefault()), r.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var v;
        c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const f = c.target;
        ((v = o(s).triggerElement.value) == null ? void 0 : v.contains(f)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: h(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iu = /* @__PURE__ */ x({
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
    const e = a, n = t, l = et(), s = Oe(n), { forwardRef: r } = R();
    return (i, u) => (b(), S(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: h(() => [
        o(l).modal.value ? (b(), S(Du, k({
          key: 0,
          ref: o(r)
        }, { ...e, ...o(s), ...i.$attrs }), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), S($u, k({
          key: 1,
          ref: o(r)
        }, { ...e, ...o(s), ...i.$attrs }), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Bu = /* @__PURE__ */ x({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = et();
    return Ca(!0), R(), (e, n) => (b(), S(o(O), {
      as: e.as,
      "as-child": e.asChild,
      "data-state": o(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Tu = /* @__PURE__ */ x({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = et(), { forwardRef: e } = R();
    return (n, l) => {
      var s;
      return (s = o(t)) != null && s.modal.value ? (b(), S(o(Pe), {
        key: 0,
        present: n.forceMount || o(t).open.value
      }, {
        default: h(() => [
          q(Bu, k(n.$attrs, {
            ref: o(e),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: h(() => [
              w(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ce("", !0);
    };
  }
}), Yl = /* @__PURE__ */ x({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = et();
    return (n, l) => (b(), S(o(O), k(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (s) => o(e).onOpenChange(!1))
    }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Ru = /* @__PURE__ */ x({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a) {
    const t = a, e = et();
    return R(), (n, l) => (b(), S(o(O), k(t, {
      id: o(e).titleId
    }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Au = /* @__PURE__ */ x({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    R();
    const e = et();
    return (n, l) => (b(), S(o(O), k(t, {
      id: o(e).descriptionId
    }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Vv = /* @__PURE__ */ x({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return R(), (s, r) => (b(), S(o(su), k(o(l), { modal: !0 }), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fv = /* @__PURE__ */ x({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(ru), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lv = /* @__PURE__ */ x({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(nt), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ou, ku] = ee("AlertDialogContent"), Nv = /* @__PURE__ */ x({
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
    const e = a, l = Oe(t);
    R();
    const s = T();
    return ku({
      onCancelElementChange: (r) => {
        s.value = r;
      }
    }), (r, i) => (b(), S(o(Iu), k({ ...e, ...o(l) }, {
      role: "alertdialog",
      onPointerDownOutside: i[0] || (i[0] = ue(() => {
      }, ["prevent"])),
      onInteractOutside: i[1] || (i[1] = ue(() => {
      }, ["prevent"])),
      onOpenAutoFocus: i[2] || (i[2] = () => {
        oe(() => {
          var u;
          (u = s.value) == null || u.focus({
            preventScroll: !0
          });
        });
      })
    }), {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zv = /* @__PURE__ */ x({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(Tu), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kv = /* @__PURE__ */ x({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Ou(), { forwardRef: n, currentElement: l } = R();
    return le(() => {
      e.onCancelElementChange(l.value);
    }), (s, r) => (b(), S(o(Yl), k(t, { ref: o(n) }), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hv = /* @__PURE__ */ x({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(Ru), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wv = /* @__PURE__ */ x({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(Au), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jv = /* @__PURE__ */ x({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(Yl), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uv = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = $(() => 1 / t.ratio * 100);
    return (l, s) => (b(), ve("div", {
      style: Me(`position: relative; width: 100%; padding-bottom: ${n.value}%`),
      "data-radix-aspect-ratio-wrapper": ""
    }, [
      q(o(O), k({
        ref: o(e),
        "as-child": l.asChild,
        as: l.as,
        style: { position: "absolute", inset: "0px" }
      }, l.$attrs), {
        default: h(() => [
          w(l.$slots, "default", { aspect: n.value })
        ]),
        _: 3
      }, 16, ["as-child", "as"])
    ], 4));
  }
}), [Xl, Mu] = ee("AvatarRoot"), Gv = /* @__PURE__ */ x({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return R(), Mu({
      imageLoadingStatus: T("loading")
    }), (t, e) => (b(), S(o(O), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: h(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function Vu(a) {
  const t = T("idle"), e = T(!1), n = (l) => () => {
    e.value && (t.value = l);
  };
  return le(() => {
    e.value = !0, te(a, (l) => {
      if (!l)
        t.value = "error";
      else {
        const s = new window.Image();
        t.value = "loading", s.onload = n("loaded"), s.onerror = n("error"), s.src = l;
      }
    }, { immediate: !0 });
  }), Be(() => {
    e.value = !1;
  }), t;
}
const qv = /* @__PURE__ */ x({
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
    const s = Xl(), r = Vu(l);
    return te(
      r,
      (i) => {
        n("loadingStatusChange", i), i !== "idle" && (s.imageLoadingStatus.value = i);
      },
      { immediate: !0 }
    ), (i, u) => Wa((b(), S(o(O), {
      role: "img",
      "as-child": i.asChild,
      as: i.as,
      src: o(l)
    }, {
      default: h(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])), [
      [zn, o(r) === "loaded"]
    ]);
  }
}), Yv = /* @__PURE__ */ x({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Xl();
    R();
    const n = T(!1);
    let l;
    return te(e.imageLoadingStatus, (s) => {
      s === "loading" && (n.value = !1, t.delayMs ? l = setTimeout(() => {
        n.value = !0, clearTimeout(l);
      }, t.delayMs) : n.value = !0);
    }, { immediate: !0 }), (s, r) => n.value && o(e).imageLoadingStatus.value !== "loaded" ? (b(), S(o(O), {
      key: 0,
      "as-child": s.asChild,
      as: s.as
    }, {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : ce("", !0);
  }
});
function Fu(a) {
  function t(n) {
    return Array.isArray(a.date.value) ? a.date.value.some((l) => Ae(l, n)) : a.date.value ? Ae(a.date.value, n) : !1;
  }
  const e = $(
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
function Lu(a, t) {
  const e = t(a), n = e.compare(a), l = {};
  return n >= 7 && (l.day = 1), n >= Dt(a) && (l.month = 1), e.set({ ...l });
}
function Nu(a, t) {
  const e = t(a), n = a.compare(e), l = {};
  return n >= 7 && (l.day = 35), n >= Dt(a) && (l.month = 13), e.set({ ...l });
}
function zu(a, t) {
  return t(a);
}
function Ku(a, t) {
  return t(a);
}
function Zl(a) {
  const t = qn(a.locale.value), e = $(() => {
    const m = {
      calendar: a.placeholder.value.calendar.identifier
    };
    return a.placeholder.value.calendar.identifier === "gregory" && a.placeholder.value.era === "BC" && (m.era = "short"), m;
  }), n = T(xt({
    dateObj: a.placeholder.value,
    weekStartsOn: a.weekStartsOn.value,
    locale: a.locale.value,
    fixedWeeks: a.fixedWeeks.value,
    numberOfMonths: a.numberOfMonths.value
  })), l = $(() => n.value.map((m) => m.value));
  function s(m) {
    return !l.value.some((_) => No(m, _));
  }
  const r = (m = "month", _) => {
    if (!a.maxValue.value || !n.value.length)
      return !1;
    if (a.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (_ || a.nextPage.value) {
      const y = Lu(C, _ || a.nextPage.value);
      return Da(y, a.maxValue.value);
    }
    if (m === "year") {
      const y = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return Da(y, a.maxValue.value);
    }
    const D = C.add({ months: 1 }).set({ day: 1 });
    return Da(D, a.maxValue.value);
  }, i = (m = "month", _) => {
    if (!a.minValue.value || !n.value.length)
      return !1;
    if (a.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (_ || a.prevPage.value) {
      const y = Nu(C, _ || a.prevPage.value);
      return ze(y, a.minValue.value);
    }
    if (m === "year") {
      const y = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return ze(y, a.minValue.value);
    }
    const D = C.subtract({ months: 1 }).set({ day: 35 });
    return ze(D, a.minValue.value);
  };
  function u(m) {
    var _;
    return !!((_ = a.isDateDisabled) != null && _.call(a, m) || a.disabled.value || a.maxValue.value && Da(m, a.maxValue.value) || a.minValue.value && ze(m, a.minValue.value));
  }
  const d = (m) => {
    var _;
    return !!((_ = a.isDateUnavailable) != null && _.call(a, m));
  }, c = $(() => n.value.length ? n.value[0].rows[0].map((m) => t.dayOfWeek(Ne(m), a.weekdayFormat.value)) : []), f = (m = "month", _) => {
    const C = n.value[0].value;
    if (_ || a.nextPage.value) {
      const E = zu(C, _ || a.nextPage.value), P = xt({
        dateObj: E,
        weekStartsOn: a.weekStartsOn.value,
        locale: a.locale.value,
        fixedWeeks: a.fixedWeeks.value,
        numberOfMonths: a.numberOfMonths.value
      });
      n.value = P;
      const B = {};
      if (!_) {
        const I = P[0].value.compare(C);
        I >= Dt(C) && (B.day = 1), I >= 365 && (B.month = 1);
      }
      a.placeholder.value = P[0].value.set({ ...B });
      return;
    }
    const D = m === "month" ? C.add({ months: a.pagedNavigation.value ? a.numberOfMonths.value : 1 }) : C.add({ years: 1 }), y = xt({
      dateObj: D,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
    n.value = y, a.placeholder.value = y[0].value.set({ day: 1 });
  }, p = (m = "month", _) => {
    const C = n.value[0].value;
    if (_ || a.prevPage.value) {
      const E = Ku(C, _ || a.prevPage.value), P = xt({
        dateObj: E,
        weekStartsOn: a.weekStartsOn.value,
        locale: a.locale.value,
        fixedWeeks: a.fixedWeeks.value,
        numberOfMonths: a.numberOfMonths.value
      });
      n.value = P;
      const B = {};
      if (!_) {
        const I = C.compare(P[0].value);
        I >= Dt(C) && (B.day = 1), I >= 365 && (B.month = 1);
      }
      a.placeholder.value = P[0].value.set({ ...B });
      return;
    }
    const D = m === "month" ? C.subtract({ months: a.pagedNavigation.value ? a.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), y = xt({
      dateObj: D,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
    n.value = y, a.placeholder.value = y[0].value.set({ day: 1 });
  };
  te(a.placeholder, (m) => {
    l.value.some((_) => No(_, m)) || (n.value = xt({
      dateObj: m,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    }));
  }), te([a.locale, a.weekStartsOn, a.fixedWeeks, a.numberOfMonths], () => {
    n.value = xt({
      dateObj: a.placeholder.value,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
  });
  const v = $(() => {
    if (!n.value.length)
      return "";
    if (a.locale.value !== t.getLocale() && t.setLocale(a.locale.value), n.value.length === 1) {
      const B = n.value[0].value;
      return `${t.fullMonthAndYear(Ne(B), e.value)}`;
    }
    const m = Ne(n.value[0].value), _ = Ne(n.value[n.value.length - 1].value), C = t.fullMonth(m, e.value), D = t.fullMonth(_, e.value), y = t.fullYear(m, e.value), E = t.fullYear(_, e.value);
    return y === E ? `${C} - ${D} ${E}` : `${C} ${y} - ${D} ${E}`;
  }), g = $(() => `${a.calendarLabel.value ?? "Event Date"}, ${v.value}`);
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
    nextPage: f,
    prevPage: p,
    headingValue: v,
    fullCalendarLabel: g
  };
}
const Hu = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Wu = {
  role: "heading",
  "aria-level": "2"
}, [ta, ju] = ee("CalendarRoot"), Uu = /* @__PURE__ */ x({
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
      fixedWeeks: f,
      multiple: p,
      minValue: v,
      maxValue: g,
      numberOfMonths: m,
      preventDeselect: _,
      isDateDisabled: C,
      isDateUnavailable: D,
      calendarLabel: y,
      defaultValue: E,
      nextPage: P,
      prevPage: B,
      dir: I
    } = ne(e), { primitiveElement: V, currentElement: M } = Te(), A = be(I), F = ae(e, "modelValue", n, {
      defaultValue: E.value,
      passive: e.modelValue === void 0
    }), W = Zt({
      defaultPlaceholder: e.placeholder,
      defaultValue: F.value
    }), K = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? W.copy(),
      passive: e.placeholder === void 0
    });
    function J(de) {
      K.value = de.copy();
    }
    const {
      fullCalendarLabel: L,
      headingValue: G,
      isDateDisabled: N,
      isDateUnavailable: z,
      isNextButtonDisabled: X,
      isPrevButtonDisabled: H,
      weekdays: Q,
      isOutsideVisibleView: Z,
      nextPage: re,
      prevPage: Y,
      formatter: se,
      grid: fe
    } = Zl({
      locale: l,
      placeholder: K,
      weekStartsOn: d,
      fixedWeeks: f,
      numberOfMonths: m,
      minValue: v,
      maxValue: g,
      disabled: s,
      weekdayFormat: c,
      pagedNavigation: u,
      isDateDisabled: C.value,
      isDateUnavailable: D.value,
      calendarLabel: y,
      nextPage: P,
      prevPage: B
    }), {
      isInvalid: _e,
      isDateSelected: Se
    } = Fu({
      date: F,
      isDateDisabled: N,
      isDateUnavailable: z
    });
    te(F, (de) => {
      if (Array.isArray(de) && de.length) {
        const Re = de[de.length - 1];
        Re && !Ee(K.value, Re) && J(Re);
      } else !Array.isArray(de) && de && !Ee(K.value, de) && J(de);
    });
    function ye(de) {
      if (p.value) {
        if (!F.value)
          F.value = [de.copy()];
        else if (Array.isArray(F.value)) {
          if (F.value.findIndex((ke) => Ae(ke, de)) === -1)
            F.value = [...F.value, de];
          else if (!_.value) {
            const ke = F.value.filter((Ke) => !Ae(Ke, de));
            if (!ke.length) {
              K.value = de.copy(), F.value = void 0;
              return;
            }
            F.value = ke.map((Ke) => Ke.copy());
          }
        }
      } else {
        if (!F.value) {
          F.value = de.copy();
          return;
        }
        !_.value && Ee(F.value, de) ? (K.value = de.copy(), F.value = void 0) : F.value = de.copy();
      }
    }
    return le(() => {
      i.value && El(M.value);
    }), ju({
      isDateUnavailable: z,
      dir: A,
      isDateDisabled: N,
      locale: l,
      formatter: se,
      modelValue: F,
      placeholder: K,
      disabled: s,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: f,
      multiple: p,
      numberOfMonths: m,
      readonly: r,
      preventDeselect: _,
      fullCalendarLabel: L,
      headingValue: G,
      isInvalid: _e,
      isDateSelected: Se,
      isNextButtonDisabled: X,
      isPrevButtonDisabled: H,
      isOutsideVisibleView: Z,
      nextPage: re,
      prevPage: Y,
      parentElement: M,
      onPlaceholderChange: J,
      onDateChange: ye
    }), (de, Re) => (b(), S(o(O), {
      ref_key: "primitiveElement",
      ref: V,
      as: de.as,
      "as-child": de.asChild,
      role: "application",
      "aria-label": o(L),
      "data-readonly": o(r) ? "" : void 0,
      "data-disabled": o(s) ? "" : void 0,
      "data-invalid": o(_e) ? "" : void 0,
      dir: o(A)
    }, {
      default: h(() => [
        w(de.$slots, "default", {
          date: o(K),
          grid: o(fe),
          weekDays: o(Q),
          weekStartsOn: o(d),
          locale: o(l),
          fixedWeeks: o(f)
        }),
        Ge("div", Hu, [
          Ge("div", Wu, De(o(L)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Gu = /* @__PURE__ */ x({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qu = /* @__PURE__ */ x({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = ta();
    return (n, l) => (b(), S(o(O), k(t, {
      "data-disabled": o(e).disabled.value ? "" : void 0
    }), {
      default: h(() => [
        w(n.$slots, "default", {
          headingValue: o(e).headingValue.value
        }, () => [
          he(De(o(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Yu = /* @__PURE__ */ x({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a) {
    const t = a, e = ta(), n = $(() => e.disabled.value ? !0 : void 0), l = $(() => e.readonly.value ? !0 : void 0);
    return (s, r) => (b(), S(o(O), k(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": l.value,
      "aria-disabled": n.value,
      "data-readonly": l.value && "",
      "data-disabled": n.value && ""
    }), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Xu = /* @__PURE__ */ x({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a) {
    const t = ta();
    return (e, n) => {
      var l, s;
      return b(), S(o(O), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": o(t).isDateSelected(e.date) ? !0 : void 0,
        "aria-disabled": o(t).isDateDisabled(e.date) || ((s = (l = o(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": o(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: h(() => [
          w(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Zu = /* @__PURE__ */ x({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ju = /* @__PURE__ */ x({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = ta();
    return (l, s) => (b(), S(o(O), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).nextPage(t.step, t.nextPage))
    }, {
      default: h(() => [
        w(l.$slots, "default", {}, () => [
          he("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Qu = /* @__PURE__ */ x({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = ta();
    return (l, s) => (b(), S(o(O), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).prevPage(t.step, t.prevPage))
    }, {
      default: h(() => [
        w(l.$slots, "default", {}, () => [
          he("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), ed = /* @__PURE__ */ x({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), k(t, { "aria-hidden": "true" }), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), td = /* @__PURE__ */ x({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ad = /* @__PURE__ */ x({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nd = /* @__PURE__ */ x({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = Qe(), n = ta(), { primitiveElement: l, currentElement: s } = Te(), r = $(() => t.day.day.toLocaleString(n.locale.value)), i = $(() => n.formatter.custom(Ne(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = $(() => n.isDateDisabled(t.day)), d = $(
      () => {
        var y;
        return (y = n.isDateUnavailable) == null ? void 0 : y.call(n, t.day);
      }
    ), c = $(() => gl(t.day, Hn())), f = $(() => !bl(t.day, t.month)), p = $(
      () => n.isOutsideVisibleView(t.day)
    ), v = $(() => !n.disabled.value && Ae(t.day, n.placeholder.value)), g = $(() => n.isDateSelected(t.day)), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function _(y) {
      var E;
      n.readonly.value || n.isDateDisabled(y) || (E = n.isDateUnavailable) != null && E.call(n, y) || n.onDateChange(y);
    }
    function C() {
      _(t.day);
    }
    function D(y) {
      y.preventDefault(), y.stopPropagation();
      const E = n.parentElement.value, P = E ? Array.from(E.querySelectorAll(m)) : [];
      let I = P.indexOf(s.value);
      const V = 7, M = n.dir.value === "rtl" ? -1 : 1;
      switch (y.code) {
        case e.ARROW_RIGHT:
          I += M;
          break;
        case e.ARROW_LEFT:
          I -= M;
          break;
        case e.ARROW_UP:
          I -= V;
          break;
        case e.ARROW_DOWN:
          I += V;
          break;
        case e.ENTER:
        case e.SPACE_CODE:
          _(t.day);
          return;
        default:
          return;
      }
      if (I >= 0 && I < P.length) {
        P[I].focus();
        return;
      }
      if (I < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), oe(() => {
          const A = E ? Array.from(E.querySelectorAll(m)) : [];
          A[A.length - Math.abs(I)].focus();
        });
        return;
      }
      if (I >= P.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), oe(() => {
          (E ? Array.from(E.querySelectorAll(m)) : [])[I - P.length].focus();
        });
      }
    }
    return (y, E) => (b(), S(o(O), k({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": f.value || u.value || d.value ? !0 : void 0,
      "data-selected": g.value ? !0 : void 0,
      "data-value": y.day.toString(),
      "data-disabled": u.value || f.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": f.value ? "" : void 0,
      "data-outside-visible-view": p.value ? "" : void 0,
      "data-focused": v.value ? "" : void 0,
      tabindex: v.value ? 0 : f.value || u.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        ie(D, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = ie(ue(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: h(() => [
        w(y.$slots, "default", { dayValue: r.value }, () => [
          he(De(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Na(a) {
  return a === "indeterminate";
}
function Jl(a) {
  return Na(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
const od = ["value", "checked", "name", "disabled", "required"], [ld, sd] = ee("CheckboxRoot"), Xv = /* @__PURE__ */ x({
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
    }), { forwardRef: r, currentElement: i } = R(), u = Je(i), d = $(() => {
      var c;
      return e.id && i.value ? (c = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return sd({
      disabled: l,
      state: s
    }), (c, f) => (b(), ve(we, null, [
      q(o(O), k(c.$attrs, {
        id: c.id,
        ref: o(r),
        role: "checkbox",
        "as-child": e.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": o(Na)(o(s)) ? "mixed" : o(s),
        "aria-required": !1,
        "aria-label": c.$attrs["aria-label"] || d.value,
        "data-state": o(Jl)(o(s)),
        "data-disabled": o(l) ? "" : void 0,
        disabled: o(l),
        onKeydown: ie(ue(() => {
        }, ["prevent"]), ["enter"]),
        onClick: f[0] || (f[0] = (p) => s.value = o(Na)(o(s)) ? !0 : !o(s))
      }), {
        default: h(() => [
          w(c.$slots, "default", { checked: o(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      o(u) ? (b(), ve("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
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
      }, null, 8, od)) : ce("", !0)
    ], 64));
  }
}), Zv = /* @__PURE__ */ x({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t } = R(), e = ld();
    return (n, l) => (b(), S(o(Pe), {
      present: n.forceMount || o(Na)(o(e).state.value) || o(e).state.value === !0
    }, {
      default: h(() => [
        q(o(O), k({
          ref: o(t),
          "data-state": o(Jl)(o(e).state.value),
          "data-disabled": o(e).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: h(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Ql, rd] = ee("PopperRoot"), Ot = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(a) {
    const t = T();
    return rd({
      anchor: t,
      onAnchorChange: (e) => t.value = e
    }), (e, n) => w(e.$slots, "default");
  }
}), kt = /* @__PURE__ */ x({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = R(), l = Ql();
    return ge(() => {
      l.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (b(), S(o(O), {
      ref: o(e),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function id(a) {
  return a !== null;
}
function ud(a) {
  return {
    name: "transformOrigin",
    options: a,
    fn(t) {
      var _, C, D;
      const { placement: e, rects: n, middlewareData: l } = t, r = ((_ = l.arrow) == null ? void 0 : _.centerOffset) !== 0, i = r ? 0 : a.arrowWidth, u = r ? 0 : a.arrowHeight, [d, c] = Tn(e), f = { start: "0%", center: "50%", end: "100%" }[c], p = (((C = l.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, v = (((D = l.arrow) == null ? void 0 : D.y) ?? 0) + u / 2;
      let g = "", m = "";
      return d === "bottom" ? (g = r ? f : `${p}px`, m = `${-u}px`) : d === "top" ? (g = r ? f : `${p}px`, m = `${n.floating.height + u}px`) : d === "right" ? (g = `${-u}px`, m = r ? f : `${v}px`) : d === "left" && (g = `${n.floating.width + u}px`, m = r ? f : `${v}px`), { data: { x: g, y: m } };
    }
  };
}
function Tn(a) {
  const [t, e = "center"] = a.split("-");
  return [t, e];
}
const es = {
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
}, [dd, cd] = ee("PopperContent"), $t = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ hl({
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
    ...es
  }),
  emits: ["placed"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Ql(), { forwardRef: s, currentElement: r } = R(), i = T(), u = T(), { width: d, height: c } = Ll(u), f = $(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), p = $(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), v = $(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), g = $(() => ({
      padding: p.value,
      boundary: v.value.filter(id),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), m = ti(() => [
      Rr({
        mainAxis: e.sideOffset + c.value,
        alignmentAxis: e.alignOffset
      }),
      e.prioritizePosition && e.avoidCollisions && zo({
        ...g.value
      }),
      e.avoidCollisions && Ar({
        mainAxis: !0,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? Or() : void 0,
        ...g.value
      }),
      !e.prioritizePosition && e.avoidCollisions && zo({
        ...g.value
      }),
      kr({
        ...g.value,
        apply: ({ elements: A, rects: F, availableWidth: W, availableHeight: K }) => {
          const { width: J, height: L } = F.reference, G = A.floating.style;
          G.setProperty(
            "--radix-popper-available-width",
            `${W}px`
          ), G.setProperty(
            "--radix-popper-available-height",
            `${K}px`
          ), G.setProperty(
            "--radix-popper-anchor-width",
            `${J}px`
          ), G.setProperty(
            "--radix-popper-anchor-height",
            `${L}px`
          );
        }
      }),
      u.value && Mr({ element: u.value, padding: e.arrowPadding }),
      ud({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && Vr({ strategy: "referenceHidden", ...g.value })
    ]), { floatingStyles: _, placement: C, isPositioned: D, middlewareData: y } = Fr(
      l.anchor,
      i,
      {
        strategy: "fixed",
        placement: f,
        whileElementsMounted: (...A) => Lr(...A, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), E = $(
      () => Tn(C.value)[0]
    ), P = $(
      () => Tn(C.value)[1]
    );
    _r(() => {
      D.value && n("placed");
    });
    const B = $(
      () => {
        var A;
        return ((A = y.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), I = T("");
    ge(() => {
      r.value && (I.value = window.getComputedStyle(r.value).zIndex);
    });
    const V = $(() => {
      var A;
      return ((A = y.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), M = $(() => {
      var A;
      return ((A = y.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return cd({
      placedSide: E,
      onArrowChange: (A) => u.value = A,
      arrowX: V,
      arrowY: M,
      shouldHideArrow: B
    }), (A, F) => {
      var W, K, J;
      return b(), ve("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Me({
          ...o(_),
          transform: o(D) ? o(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: I.value,
          "--radix-popper-transform-origin": [
            (W = o(y).transformOrigin) == null ? void 0 : W.x,
            (K = o(y).transformOrigin) == null ? void 0 : K.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((J = o(y).hide) == null ? void 0 : J.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        q(o(O), k({ ref: o(s) }, A.$attrs, {
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
          default: h(() => [
            w(A.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), fd = /* @__PURE__ */ Ge("polygon", { points: "0,0 30,0 15,10" }, null, -1), pd = /* @__PURE__ */ x({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(O), k(t, {
      width: e.width,
      height: e.height,
      viewBox: e.asChild ? void 0 : "0 0 30 10",
      preserveAspectRatio: e.asChild ? void 0 : "none"
    }), {
      default: h(() => [
        w(e.$slots, "default", {}, () => [
          fd
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), vd = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, aa = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const { forwardRef: t } = R(), e = dd(), n = $(() => vd[e.placedSide.value]);
    return (l, s) => {
      var r, i, u, d;
      return b(), ve("span", {
        ref: (c) => {
          o(e).onArrowChange(c);
        },
        style: Me({
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
        q(pd, k(l.$attrs, {
          ref: o(t),
          style: {
            display: "block"
          },
          as: l.as,
          "as-child": l.asChild,
          width: l.width,
          height: l.height
        }), {
          default: h(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "width", "height"])
      ], 4);
    };
  }
}), na = /* @__PURE__ */ x({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return R(), (t, e) => (b(), S(o(O), {
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
      default: h(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), oo = /* @__PURE__ */ x({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = $(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, l) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${l}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${l}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, l]) => ({ name: `[${t.name}][${n}]`, value: l })) : []);
    return (n, l) => (b(!0), ve(we, null, ga(e.value, (s) => (b(), S(na, {
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
}), [ot, md] = ee("ComboboxRoot"), Jv = /* @__PURE__ */ x({
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
    }), f = ae(e, "selectedValue", n, {
      defaultValue: void 0,
      passive: e.selectedValue === void 0
    });
    async function p(L) {
      var G, N;
      c.value = L, await oe(), L ? (d.value && (Array.isArray(d.value) && l.value ? f.value = (G = y().find((z) => {
        var X, H;
        return ((H = (X = z.ref) == null ? void 0 : X.dataset) == null ? void 0 : H.state) === "checked";
      })) == null ? void 0 : G.value : f.value = d.value), await oe(), (N = m.value) == null || N.focus(), K()) : (g.value = !1, e.resetSearchTermOnBlur && V());
    }
    function v(L) {
      if (Array.isArray(d.value) && l.value) {
        const G = d.value.findIndex((z) => Xe(z, L)), N = [...d.value];
        G === -1 ? N.push(L) : N.splice(G, 1), d.value = N;
      } else
        d.value = L, p(!1);
    }
    const g = T(!1), m = T(), _ = T(), { forwardRef: C, currentElement: D } = R(), { getItems: y, reactiveItems: E, itemMapSize: P } = Jt("data-radix-vue-combobox-item"), B = T([]);
    te(() => P.value, () => {
      B.value = y().map((L) => L.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const I = $(() => {
      if (g.value) {
        if (e.filterFunction)
          return e.filterFunction(B.value, u.value);
        const L = B.value.filter((G) => typeof G == "string");
        if (L.length)
          return L.filter((G) => {
            var N;
            return G.toLowerCase().includes((N = u.value) == null ? void 0 : N.toLowerCase());
          });
      }
      return B.value;
    });
    function V() {
      !l.value && d.value && !Array.isArray(d.value) ? e.displayValue ? u.value = e.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const M = $(() => I.value.findIndex((L) => Xe(L, f.value))), A = $(() => {
      var L;
      return (L = E.value.find((G) => Xe(G.value, f.value))) == null ? void 0 : L.ref;
    }), F = $(() => JSON.stringify(d.value));
    te(F, async () => {
      await oe(), await oe(), V();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !e.searchTerm
    }), te(() => [I.value.length, u.value.length], async ([L, G], [N, z]) => {
      await oe(), await oe(), L && (z > G || M.value === -1) && (f.value = I.value[0]);
    });
    const W = Je(D);
    function K() {
      var L;
      A.value instanceof Element && ((L = A.value) == null || L.scrollIntoView({ block: "nearest" }));
    }
    function J() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    return md({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: v,
      isUserInputted: g,
      multiple: l,
      disabled: s,
      open: c,
      onOpenChange: p,
      filteredOptions: I,
      contentId: "",
      inputElement: m,
      selectedElement: A,
      onInputElementChange: (L) => m.value = L,
      onInputNavigation: async (L) => {
        const G = M.value;
        G === 0 && L === "up" || G === I.value.length - 1 && L === "down" || (G === -1 && I.value.length || L === "home" ? f.value = I.value[0] : L === "end" ? f.value = I.value[I.value.length - 1] : f.value = I.value[L === "up" ? G - 1 : G + 1], await oe(), K(), J(), oe(() => {
          var N;
          return (N = m.value) == null ? void 0 : N.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (L) => {
        var G;
        I.value.length && f.value && A.value instanceof Element && (L.preventDefault(), L.stopPropagation(), (G = A.value) == null || G.click());
      },
      selectedValue: f,
      onSelectedValueChange: (L) => f.value = L,
      parentElement: D,
      contentElement: _,
      onContentElementChange: (L) => _.value = L
    }), (L, G) => (b(), S(o(Ot), null, {
      default: h(() => [
        q(o(O), k({
          ref: o(C),
          style: {
            pointerEvents: o(c) ? "auto" : void 0
          },
          as: L.as,
          "as-child": L.asChild,
          dir: o(i)
        }, L.$attrs), {
          default: h(() => [
            w(L.$slots, "default", {
              open: o(c),
              modelValue: o(d)
            }),
            o(W) && e.name ? (b(), S(o(oo), {
              key: 0,
              name: e.name,
              value: o(d)
            }, null, 8, ["name", "value"])) : ce("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Qv = /* @__PURE__ */ x({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = ot(), { forwardRef: n, currentElement: l } = R();
    le(() => {
      const c = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      c && (e.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const s = $(() => t.disabled || e.disabled.value || !1), r = T();
    xr(() => {
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
      var f;
      e.searchTerm.value = (f = c.target) == null ? void 0 : f.value, e.open.value || e.onOpenChange(!0), e.isUserInputted.value = !0;
    }
    return (c, f) => (b(), S(o(O), {
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
        ie(ue(i, ["prevent"]), ["down", "up"]),
        ie(o(e).onInputEnter, ["enter"]),
        ie(ue(u, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: h(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), em = /* @__PURE__ */ x({
  __name: "ComboboxAnchor",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const { forwardRef: t } = R();
    return (e, n) => (b(), S(o(kt), { "as-child": "" }, {
      default: h(() => [
        q(o(O), k({
          ref: o(t),
          "as-child": e.asChild,
          as: e.as
        }, e.$attrs), {
          default: h(() => [
            w(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }));
  }
}), tm = /* @__PURE__ */ x({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = ot(), n = $(() => t.disabled || e.disabled.value || !1);
    return (l, s) => (b(), S(o(O), k(t, {
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
      default: h(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
}), am = /* @__PURE__ */ x({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = ot();
    function n() {
      var l;
      e.searchTerm.value = "", (l = e.inputElement.value) == null || l.focus();
    }
    return (l, s) => (b(), S(o(O), k({
      type: l.as === "button" ? "button" : void 0
    }, t, {
      tabindex: "-1",
      onClick: n
    }), {
      default: h(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), [ts, hd] = ee("ComboboxGroup"), nm = /* @__PURE__ */ x({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { currentRef: e, currentElement: n } = R(), l = me(void 0, "radix-vue-combobox-group"), s = ot(), r = T(!1);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!u.length;
    }
    return Rl(n, () => {
      oe(() => {
        i();
      });
    }, { childList: !0 }), te(() => s.searchTerm.value, () => {
      oe(() => {
        i();
      });
    }, { immediate: !0 }), hd({
      id: l
    }), (u, d) => Wa((b(), S(o(O), k(t, {
      ref_key: "currentRef",
      ref: e,
      role: "group",
      "aria-labelledby": o(l)
    }), {
      default: h(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [zn, r.value]
    ]);
  }
}), om = /* @__PURE__ */ x({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    R();
    const e = ts({ id: "" });
    return (n, l) => (b(), S(o(O), k(t, {
      id: o(e).id
    }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [yd, gd] = ee("ComboboxContent"), bd = /* @__PURE__ */ x({
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
    const e = a, n = t, { position: l } = ne(e), s = ot();
    Ca(e.bodyLock);
    const { forwardRef: r, currentElement: i } = R();
    wa(s.parentElement);
    const u = $(() => e.position === "popper" ? e : {}), d = Rt(u.value);
    function c(p) {
      s.onSelectedValueChange("");
    }
    le(() => {
      s.onContentElementChange(i.value);
    });
    const f = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return gd({ position: l }), (p, v) => (b(), S(o(Qt), null, {
      default: h(() => [
        p.dismissable ? (b(), S(o(gt), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": p.disableOutsidePointerEvents,
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
          default: h(() => [
            (b(), S(qe(o(l) === "popper" ? o($t) : o(O)), k({ ...p.$attrs, ...o(d) }, {
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
                ...o(l) === "popper" ? f : {}
              },
              onPointerleave: c
            }), {
              default: h(() => [
                w(p.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (b(), S(qe(o(l) === "popper" ? o($t) : o(O)), k({ key: 1 }, { ...p.$attrs, ...u.value }, {
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
            ...o(l) === "popper" ? f : {}
          },
          onPointerleave: c
        }), {
          default: h(() => [
            w(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), lm = /* @__PURE__ */ x({
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
    const l = xe(a, t), { forwardRef: s } = R(), r = ot();
    return r.contentId || (r.contentId = me(void 0, "radix-vue-combobox-content")), (i, u) => (b(), S(o(Pe), {
      present: i.forceMount || o(r).open.value
    }, {
      default: h(() => [
        q(bd, k({ ...o(l), ...i.$attrs }, { ref: o(s) }), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), sm = /* @__PURE__ */ x({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = ot(), n = $(() => e.filteredOptions.value.length === 0);
    return (l, s) => n.value ? (b(), S(o(O), j(k({ key: 0 }, t)), {
      default: h(() => [
        w(l.$slots, "default", {}, () => [
          he("No options")
        ])
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
});
function Ja(a) {
  const t = Ya({
    nonce: T()
  });
  return $(() => {
    var e;
    return (a == null ? void 0 : a.value) || ((e = t.nonce) == null ? void 0 : e.value);
  });
}
const rm = /* @__PURE__ */ x({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), { nonce: n } = ne(t), l = Ja(n);
    return (s, r) => (b(), ve(we, null, [
      q(o(O), k({ ...s.$attrs, ...t }, {
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
        default: h(() => [
          w(s.$slots, "default")
        ]),
        _: 3
      }, 16),
      q(o(O), {
        as: "style",
        nonce: o(l)
      }, {
        default: h(() => [
          he(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), [Cd, wd] = ee("ComboboxItem"), _d = "combobox.select", im = /* @__PURE__ */ x({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { disabled: l } = ne(e), s = ot();
    ts({ id: "", options: T([]) });
    const { forwardRef: r } = R(), i = $(
      () => {
        var m, _;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (m = s.modelValue.value) == null ? void 0 : m.some((C) => Xe(C, e.value)) : Xe((_ = s.modelValue) == null ? void 0 : _.value, e.value);
      }
    ), u = $(() => Xe(s.selectedValue.value, e.value)), d = me(void 0, "radix-vue-combobox-item"), c = me(void 0, "radix-vue-combobox-option"), f = $(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((m) => Xe(m, e.value)) : !0);
    async function p(m) {
      n("select", m), !(m != null && m.defaultPrevented) && !l.value && m && s.onValueChange(e.value);
    }
    function v(m) {
      if (!m)
        return;
      const _ = { originalEvent: m, value: e.value };
      Gt(_d, p, _);
    }
    async function g(m) {
      await oe(), !m.defaultPrevented && s.onSelectedValueChange(e.value);
    }
    if (e.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return wd({
      isSelected: i
    }), (m, _) => (b(), S(o(At), { value: m.value }, {
      default: h(() => [
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
          "data-hidden": f.value ? void 0 : !0,
          onClick: v,
          onPointermove: g
        }, {
          default: h(() => [
            w(m.$slots, "default", {}, () => [
              he(De(m.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [zn, f.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), um = /* @__PURE__ */ x({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Cd();
    return (n, l) => o(e).isSelected.value ? (b(), S(o(O), k({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
}), dm = /* @__PURE__ */ x({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(O), k(t, { "aria-hidden": "true" }), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cm = /* @__PURE__ */ x({
  __name: "ComboboxArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a, e = ot(), n = yd();
    return R(), (l, s) => o(e).open.value && o(n).position.value === "popper" ? (b(), S(o(aa), j(k({ key: 0 }, t)), {
      default: h(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
}), fm = /* @__PURE__ */ x({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(nt), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qa = /* @__PURE__ */ x({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(kt), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lo = /* @__PURE__ */ x({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(aa), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function xd() {
  const a = T(!1);
  return le(() => {
    Ve("keydown", () => {
      a.value = !0;
    }, { capture: !0, passive: !0 }), Ve(["pointerdown", "pointermove"], () => {
      a.value = !1;
    }, { capture: !0, passive: !0 });
  }), a;
}
const Sd = Pl(xd), [Mt, as] = ee(["MenuRoot", "MenuSub"], "MenuContext"), [Sa, Ed] = ee("MenuRoot"), so = /* @__PURE__ */ x({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { modal: l, dir: s } = ne(e), r = be(s), i = ae(e, "open", n), u = T(), d = Sd();
    return as({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), Ed({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: r,
      modal: l
    }), (c, f) => (b(), S(o(Ot), null, {
      default: h(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Pd = "rovingFocusGroup.onEntryFocus", Dd = { bubbles: !1, cancelable: !0 }, en = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $d(a, t) {
  return t !== "rtl" ? a : a === "ArrowLeft" ? "ArrowRight" : a === "ArrowRight" ? "ArrowLeft" : a;
}
function ns(a, t, e) {
  const n = $d(a.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return en[n];
}
function os(a, t = !1, e) {
  const n = (e == null ? void 0 : e.activeElement) ?? document.activeElement;
  for (const l of a)
    if (l === n || (l.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
function Id(a, t) {
  return a.map((e, n) => a[(t + n) % a.length]);
}
const [Bd, Td] = ee("RovingFocusGroup"), Vt = /* @__PURE__ */ x({
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
    }), c = T(!1), f = T(!1), p = T(0), { getItems: v } = Jt();
    function g(_) {
      const C = !f.value;
      if (_.currentTarget && _.target === _.currentTarget && C && !c.value) {
        const D = new CustomEvent(Pd, Dd);
        if (_.currentTarget.dispatchEvent(D), l("entryFocus", D), !D.defaultPrevented) {
          const y = v().map((I) => I.ref).filter((I) => I.dataset.disabled !== ""), E = y.find((I) => I.getAttribute("data-active") === "true"), P = y.find(
            (I) => I.id === d.value
          ), B = [E, P, ...y].filter(
            Boolean
          );
          os(B, n.preventScrollOnEntryFocus);
        }
      }
      f.value = !1;
    }
    function m() {
      setTimeout(() => {
        f.value = !1;
      }, 1);
    }
    return t({
      getItems: v
    }), Td({
      loop: s,
      dir: u,
      orientation: r,
      currentTabStopId: d,
      onItemFocus: (_) => {
        d.value = _;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        p.value++;
      },
      onFocusableItemRemove: () => {
        p.value--;
      }
    }), (_, C) => (b(), S(o(Qt), null, {
      default: h(() => [
        q(o(O), {
          tabindex: c.value || p.value === 0 ? -1 : 0,
          "data-orientation": o(r),
          as: _.as,
          "as-child": _.asChild,
          dir: o(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (D) => f.value = !0),
          onMouseup: m,
          onFocus: g,
          onBlur: C[1] || (C[1] = (D) => c.value = !1)
        }, {
          default: h(() => [
            w(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Ft = /* @__PURE__ */ x({
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
    const t = a, e = Bd(), n = $(() => t.tabStopId || me()), l = $(
      () => e.currentTabStopId.value === n.value
    ), { getItems: s } = ea(), { primitiveElement: r, currentElement: i } = Te(), u = $(() => {
      var c;
      return (c = i.value) == null ? void 0 : c.getRootNode();
    });
    le(() => {
      t.focusable && e.onFocusableItemAdd();
    }), Be(() => {
      t.focusable && e.onFocusableItemRemove();
    });
    function d(c) {
      if (c.key === "Tab" && c.shiftKey) {
        e.onItemShiftTab();
        return;
      }
      if (c.target !== c.currentTarget)
        return;
      const f = ns(
        c,
        e.orientation.value,
        e.dir.value
      );
      if (f !== void 0) {
        if (c.metaKey || c.ctrlKey || c.altKey || !t.allowShiftKey && c.shiftKey)
          return;
        c.preventDefault();
        let p = [...s().map((v) => v.ref).filter((v) => v.dataset.disabled !== "")];
        if (f === "last")
          p.reverse();
        else if (f === "prev" || f === "next") {
          f === "prev" && p.reverse();
          const v = p.indexOf(
            c.currentTarget
          );
          p = e.loop.value ? Id(p, v + 1) : p.slice(v + 1);
        }
        oe(() => os(p, !1, u.value));
      }
    }
    return (c, f) => (b(), S(o(At), null, {
      default: h(() => [
        q(o(O), {
          ref_key: "primitiveElement",
          ref: r,
          tabindex: l.value ? 0 : -1,
          "data-orientation": o(e).orientation.value,
          "data-active": c.active,
          "data-disabled": c.focusable ? void 0 : "",
          as: c.as,
          "as-child": c.asChild,
          onMousedown: f[0] || (f[0] = (p) => {
            c.focusable ? o(e).onItemFocus(n.value) : p.preventDefault();
          }),
          onFocus: f[1] || (f[1] = (p) => o(e).onItemFocus(n.value)),
          onKeydown: d
        }, {
          default: h(() => [
            w(c.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [ro, Rd] = ee("MenuContent"), io = /* @__PURE__ */ x({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ hl({
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
    ...es
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Mt(), s = Sa(), { trapFocus: r, disableOutsidePointerEvents: i, loop: u } = ne(e);
    Yn(), Ca(i.value);
    const d = T(""), c = T(0), f = T(0), p = T(null), v = T("right"), g = T(0), m = T(null), { createCollection: _ } = Fe(), { forwardRef: C, currentElement: D } = R(), y = _(D);
    te(D, (A) => {
      l.onContentChange(A);
    });
    const { handleTypeaheadSearch: E } = _a(y);
    Be(() => {
      window.clearTimeout(c.value);
    });
    function P(A) {
      var W, K;
      return v.value === ((W = p.value) == null ? void 0 : W.side) && xu(A, (K = p.value) == null ? void 0 : K.area);
    }
    async function B(A) {
      var F;
      n("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (F = D.value) == null || F.focus({
        preventScroll: !0
      }));
    }
    function I(A) {
      if (A.defaultPrevented)
        return;
      const W = A.target.closest("[data-radix-menu-content]") === A.currentTarget, K = A.ctrlKey || A.altKey || A.metaKey, J = A.key.length === 1, L = Tt(
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
      if (L)
        return L == null ? void 0 : L.focus();
      if (A.code === "Space" || (W && (A.key === "Tab" && A.preventDefault(), !K && J && E(A.key)), A.target !== D.value) || !bu.includes(A.key))
        return;
      A.preventDefault();
      const G = y.value;
      Gl.includes(A.key) && G.reverse(), Bn(G);
    }
    function V(A) {
      var F, W;
      (W = (F = A == null ? void 0 : A.currentTarget) == null ? void 0 : F.contains) != null && W.call(F, A.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function M(A) {
      var K;
      if (!pa(A))
        return;
      const F = A.target, W = g.value !== A.clientX;
      if ((K = A == null ? void 0 : A.currentTarget) != null && K.contains(F) && W) {
        const J = A.clientX > g.value ? "right" : "left";
        v.value = J, g.value = A.clientX;
      }
    }
    return Rd({
      onItemEnter: (A) => !!P(A),
      onItemLeave: (A) => {
        var F;
        P(A) || ((F = D.value) == null || F.focus(), m.value = null);
      },
      onTriggerLeave: (A) => !!P(A),
      searchRef: d,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (A) => {
        p.value = A;
      }
    }), (A, F) => (b(), S(o(Za), {
      "as-child": "",
      trapped: o(r),
      onMountAutoFocus: B,
      onUnmountAutoFocus: F[7] || (F[7] = (W) => n("closeAutoFocus", W))
    }, {
      default: h(() => [
        q(o(gt), {
          "as-child": "",
          "disable-outside-pointer-events": o(i),
          onEscapeKeyDown: F[2] || (F[2] = (W) => n("escapeKeyDown", W)),
          onPointerDownOutside: F[3] || (F[3] = (W) => n("pointerDownOutside", W)),
          onFocusOutside: F[4] || (F[4] = (W) => n("focusOutside", W)),
          onInteractOutside: F[5] || (F[5] = (W) => n("interactOutside", W)),
          onDismiss: F[6] || (F[6] = (W) => n("dismiss"))
        }, {
          default: h(() => [
            q(o(Vt), {
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": F[0] || (F[0] = (W) => m.value = W),
              "as-child": "",
              orientation: "vertical",
              dir: o(s).dir.value,
              loop: o(u),
              onEntryFocus: F[1] || (F[1] = (W) => {
                n("entryFocus", W), o(s).isUsingKeyboardRef.value || W.preventDefault();
              })
            }, {
              default: h(() => [
                q(o($t), {
                  ref: o(C),
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
                  onKeydown: I,
                  onBlur: V,
                  onPointermove: M
                }, {
                  default: h(() => [
                    w(A.$slots, "default")
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
}), ls = /* @__PURE__ */ x({
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
      if (!i.defaultPrevented && pa(i)) {
        if (t.disabled)
          e.onItemLeave(i);
        else if (!e.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await oe(), !i.defaultPrevented && pa(i) && e.onItemLeave(i);
    }
    return (i, u) => (b(), S(o(At), null, {
      default: h(() => [
        q(o(O), k({
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
            await oe(), !(d.defaultPrevented || i.disabled) && (l.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await oe(), !d.defaultPrevented && (l.value = !1);
          })
        }), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), Ea = /* @__PURE__ */ x({
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
        const f = new CustomEvent(yu, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", f), await oe(), f.defaultPrevented ? u.value = !1 : r.onClose();
      }
    }
    return (c, f) => (b(), S(ls, k(e, {
      ref: o(l),
      onClick: d,
      onPointerdown: f[0] || (f[0] = () => {
        u.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (p) => {
        var v;
        await oe(), !p.defaultPrevented && (u.value || (v = p.currentTarget) == null || v.click());
      }),
      onKeydown: f[2] || (f[2] = async (p) => {
        const v = o(i).searchRef.value !== "";
        c.disabled || v && p.key === " " || o(In).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: h(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ad, ss] = ee(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), uo = /* @__PURE__ */ x({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = Ad({
      checked: T(!1)
    });
    return (e, n) => (b(), S(o(Pe), {
      present: e.forceMount || o(La)(o(t).checked.value) || o(t).checked.value === !0
    }, {
      default: h(() => [
        q(o(O), {
          as: e.as,
          "as-child": e.asChild,
          "data-state": o(no)(o(t).checked.value)
        }, {
          default: h(() => [
            w(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), co = /* @__PURE__ */ x({
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
    return ss({ checked: l }), (s, r) => (b(), S(Ea, k({ role: "menuitemcheckbox" }, e, {
      "aria-checked": o(La)(o(l)) ? "mixed" : o(l),
      "data-state": o(no)(o(l)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), o(La)(o(l)) ? l.value = !0 : l.value = !o(l);
      })
    }), {
      default: h(() => [
        w(s.$slots, "default", { checked: o(l) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Od = /* @__PURE__ */ x({
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
    const e = a, n = t, l = xe(e, n), s = Mt(), { forwardRef: r, currentElement: i } = R();
    return wa(i), (u, d) => (b(), S(io, k(o(l), {
      ref: o(r),
      "trap-focus": o(s).open.value,
      "disable-outside-pointer-events": o(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => o(s).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = ue((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: h(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), kd = /* @__PURE__ */ x({
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
    const l = xe(a, t), s = Mt();
    return (r, i) => (b(), S(io, k(o(l), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: i[0] || (i[0] = (u) => o(s).onOpenChange(!1))
    }), {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fo = /* @__PURE__ */ x({
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
    const l = xe(a, t), s = Mt(), r = Sa();
    return (i, u) => (b(), S(o(Pe), {
      present: i.forceMount || o(s).open.value
    }, {
      default: h(() => [
        o(r).modal.value ? (b(), S(Od, j(k({ key: 0 }, { ...i.$attrs, ...o(l) })), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), S(kd, j(k({ key: 1 }, { ...i.$attrs, ...o(l) })), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), tn = /* @__PURE__ */ x({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), k({ role: "group" }, t), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), po = /* @__PURE__ */ x({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vo = /* @__PURE__ */ x({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(nt), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Md, Vd] = ee("MenuRadioGroup"), mo = /* @__PURE__ */ x({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "modelValue", t);
    return Vd({
      modelValue: l,
      onValueChange: (s) => {
        l.value = s;
      }
    }), (s, r) => (b(), S(tn, j(U(e)), {
      default: h(() => [
        w(s.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 16));
  }
}), ho = /* @__PURE__ */ x({
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
    const e = a, n = t, { value: l } = ne(e), s = Md(), r = $(
      () => s.modelValue.value === (l == null ? void 0 : l.value)
    );
    return ss({ checked: r }), (i, u) => (b(), S(Ea, k({ role: "menuitemradio" }, e, {
      "aria-checked": r.value,
      "data-state": o(no)(r.value),
      onSelect: u[0] || (u[0] = async (d) => {
        n("select", d), o(s).onValueChange(o(l));
      })
    }), {
      default: h(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), yo = /* @__PURE__ */ x({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), k(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [rs, Fd] = ee("MenuSub"), go = /* @__PURE__ */ x({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "open", t, {
      defaultValue: !1,
      passive: e.open === void 0
    }), s = Mt(), r = T(), i = T();
    return ge((u) => {
      (s == null ? void 0 : s.open.value) === !1 && (l.value = !1), u(() => l.value = !1);
    }), as({
      open: l,
      onOpenChange: (u) => {
        l.value = u;
      },
      content: i,
      onContentChange: (u) => {
        i.value = u;
      }
    }), Fd({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (u) => {
        r.value = u;
      }
    }), (u, d) => (b(), S(o(Ot), null, {
      default: h(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), bo = /* @__PURE__ */ x({
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
    const l = xe(a, t), s = Mt(), r = Sa(), i = rs(), { forwardRef: u, currentElement: d } = R();
    return i.contentId || (i.contentId = me(void 0, "radix-vue-menu-sub-content")), (c, f) => (b(), S(o(Pe), {
      present: c.forceMount || o(s).open.value
    }, {
      default: h(() => [
        q(io, k(o(l), {
          id: o(i).contentId,
          ref: o(u),
          "aria-labelledby": o(i).triggerId,
          align: "start",
          side: o(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: f[0] || (f[0] = ue((p) => {
            var v;
            o(r).isUsingKeyboardRef.value && ((v = o(d)) == null || v.focus());
          }, ["prevent"])),
          onCloseAutoFocus: f[1] || (f[1] = ue(() => {
          }, ["prevent"])),
          onFocusOutside: f[2] || (f[2] = (p) => {
            p.defaultPrevented || p.target !== o(i).trigger.value && o(s).onOpenChange(!1);
          }),
          onEscapeKeyDown: f[3] || (f[3] = (p) => {
            o(r).onClose(), p.preventDefault();
          }),
          onKeydown: f[4] || (f[4] = (p) => {
            var m, _;
            const v = (m = p.currentTarget) == null ? void 0 : m.contains(p.target), g = o(wu)[o(r).dir.value].includes(p.key);
            v && g && (o(s).onOpenChange(!1), (_ = o(i).trigger.value) == null || _.focus(), p.preventDefault());
          })
        }), {
          default: h(() => [
            w(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Co = /* @__PURE__ */ x({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Mt(), n = Sa(), l = rs(), s = ro(), r = T(null);
    l.triggerId || (l.triggerId = me(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    Be(() => {
      i();
    });
    function u(f) {
      !pa(f) || s.onItemEnter(f) || !t.disabled && !e.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        e.onOpenChange(!0), i();
      }, 100));
    }
    async function d(f) {
      var v, g;
      if (!pa(f))
        return;
      i();
      const p = (v = e.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (p != null && p.width) {
        const m = (g = e.content.value) == null ? void 0 : g.dataset.side, _ = m === "right", C = _ ? -5 : 5, D = p[_ ? "left" : "right"], y = p[_ ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: f.clientX + C, y: f.clientY },
            { x: D, y: p.top },
            { x: y, y: p.top },
            { x: y, y: p.bottom },
            { x: D, y: p.bottom }
          ],
          side: m
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(f))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function c(f) {
      var v;
      const p = s.searchRef.value !== "";
      t.disabled || p && f.key === " " || Cu[n.dir.value].includes(f.key) && (e.onOpenChange(!0), await oe(), (v = e.content.value) == null || v.focus(), f.preventDefault());
    }
    return (f, p) => (b(), S(Qa, { "as-child": "" }, {
      default: h(() => [
        q(ls, k(t, {
          id: o(l).triggerId,
          ref: (v) => {
            var g;
            (g = o(l)) == null || g.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": o(e).open.value,
          "aria-controls": o(l).contentId,
          "data-state": o(ao)(o(e).open.value),
          onClick: p[0] || (p[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), o(e).open.value || o(e).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: h(() => [
            w(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [is, Ld] = ee("ContextMenuRoot"), pm = /* @__PURE__ */ x({
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
    return Ld({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      dir: r,
      modal: s
    }), te(i, (u) => {
      n("update:open", u);
    }), (u, d) => (b(), S(o(so), {
      open: i.value,
      "onUpdate:open": d[0] || (d[0] = (c) => i.value = c),
      dir: o(r),
      modal: o(s)
    }, {
      default: h(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
function Xo(a) {
  return a.pointerType !== "mouse";
}
const vm = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, { disabled: e } = ne(t), { forwardRef: n } = R(), l = is(), s = T({ x: 0, y: 0 }), r = $(() => ({
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
      e.value || (await oe(), v.defaultPrevented || (u(), d(v), v.preventDefault()));
    }
    async function f(v) {
      e.value || (await oe(), Xo(v) && !v.defaultPrevented && (u(), i.value = window.setTimeout(() => d(v), 700)));
    }
    async function p(v) {
      e.value || (await oe(), Xo(v) && !v.defaultPrevented && u());
    }
    return (v, g) => (b(), ve(we, null, [
      q(o(Qa), {
        as: "template",
        element: r.value
      }, null, 8, ["element"]),
      q(o(O), k({
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
        onPointerdown: f,
        onPointermove: p,
        onPointercancel: p,
        onPointerup: p
      }), {
        default: h(() => [
          w(v.$slots, "default")
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-state", "data-disabled"])
    ], 64));
  }
}), mm = /* @__PURE__ */ x({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(vo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hm = /* @__PURE__ */ x({
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
    const s = is(), r = T(!1);
    return (i, u) => (b(), S(o(fo), k(o(l), {
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
      default: h(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ym = /* @__PURE__ */ x({
  __name: "ContextMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(lo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gm = /* @__PURE__ */ x({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Oe(t);
    return R(), (s, r) => (b(), S(o(Ea), j(U({ ...e, ...o(l) })), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bm = /* @__PURE__ */ x({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(tn), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cm = /* @__PURE__ */ x({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(yo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wm = /* @__PURE__ */ x({
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
    const e = a, l = Oe(t);
    return R(), (s, r) => (b(), S(o(co), j(U({ ...e, ...o(l) })), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _m = /* @__PURE__ */ x({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(uo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xm = /* @__PURE__ */ x({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(po), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sm = /* @__PURE__ */ x({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Oe(t);
    return R(), (s, r) => (b(), S(o(mo), j(U({ ...e, ...o(l) })), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Em = /* @__PURE__ */ x({
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
    const e = a, l = Oe(t);
    return R(), (s, r) => (b(), S(o(ho), j(U({ ...e, ...o(l) })), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pm = /* @__PURE__ */ x({
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
    return (s, r) => (b(), S(o(go), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Ue(l) ? l.value = i : null)
    }, {
      default: h(() => [
        w(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Dm = /* @__PURE__ */ x({
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
    return R(), (s, r) => (b(), S(o(bo), k(o(l), { style: {
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $m = /* @__PURE__ */ x({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(Co), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nd = ["hour", "minute", "second"];
function Ht(a) {
  const { formatter: t } = a, e = Wn.map((n) => [n, a.value[n]]);
  if ("hour" in a.value) {
    const n = _l.map((s) => s === "dayPeriod" ? [s, t.dayPeriod(Ne(a.value))] : [s, a.value[s]]), l = [...e, ...n];
    return Object.fromEntries(l);
  }
  return Object.fromEntries(e);
}
function us(a) {
  const t = xl.map((e) => e === "dayPeriod" ? [e, "AM"] : [e, null]).filter(([e]) => e === "literal" || e === null ? !1 : a === "day" ? !Nd.includes(e) && e !== "dayPeriod" : !0);
  return Object.fromEntries(t);
}
function zd(a) {
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
      if (Qr(r)) {
        const i = t[r];
        return i !== null ? r === "day" && t.month !== null ? e.part(a.dateRef.set({ [r]: i, month: t.month }), r) : e.part(a.dateRef.set({ [r]: i }), r) : bn(r, "", n.value);
      }
      return "";
    }
  }
  return Object.keys(t).reduce((r, i) => {
    if (!Sl(i))
      return r;
    if ("hour" in t && i === "dayPeriod") {
      const u = t[i];
      u !== null ? r[i] = u : r[i] = bn(i, "AM", n.value);
    } else
      r[i] = l(i);
    return r;
  }, {});
}
function Kd(a) {
  const { granularity: t, formatter: e, contentObj: n, hideTimeZone: l, hourCycle: s } = a;
  return e.toParts(a.dateRef, ei(t, s)).map((u) => ["literal", "timeZoneName", null].includes(u.type) || !Sl(u.type) ? {
    part: u.type,
    value: u.value
  } : {
    part: u.type,
    value: n[u.type]
  }).filter((u) => !(u.part === null || u.value === null || u.part === "timeZoneName" && (!Cl(a.dateRef) || l)));
}
function Rn(a) {
  const t = zd(a), e = Kd({
    contentObj: t,
    ...a
  });
  return {
    obj: t,
    arr: e
  };
}
function tt(a) {
  const t = Qe();
  return a === t.ARROW_RIGHT || a === t.ARROW_LEFT;
}
function St(a) {
  return !Number.isNaN(Number.parseInt(a));
}
function rt(a) {
  const t = Qe();
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
  ].includes(a) || St(a));
}
function za(a) {
  return Array.from(a.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((t) => t.getAttribute("data-radix-vue-date-field-segment") !== "literal");
}
const Hd = ["id", "value", "name", "disabled", "required"], [Wd, jd] = ee("DateFieldRoot"), Ud = /* @__PURE__ */ x({
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
    const n = a, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, granularity: d, defaultValue: c, dir: f } = ne(n), p = qn(n.locale), v = be(f), { primitiveElement: g, currentElement: m } = Te(), _ = T(/* @__PURE__ */ new Set());
    le(() => {
      za(m.value).forEach((z) => _.value.add(z));
    });
    const C = ae(n, "modelValue", l, {
      defaultValue: c.value,
      passive: n.modelValue === void 0
    }), D = Zt({
      defaultPlaceholder: n.placeholder,
      granularity: d.value,
      defaultValue: C.value
    }), y = ae(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? D.copy(),
      passive: n.placeholder === void 0
    }), E = $(() => n.granularity ? ca(y.value) ? n.granularity : "day" : ca(y.value) ? "minute" : "day"), P = $(() => {
      var z;
      return C.value ? !!((z = u.value) != null && z.call(u, C.value) || n.minValue && ze(C.value, n.minValue) || n.maxValue && ze(n.maxValue, C.value)) : !1;
    }), B = us(E.value), I = T(C.value ? { ...Ht({ value: C.value, formatter: p }) } : { ...B }), V = $(() => Rn({
      granularity: E.value,
      dateRef: y.value,
      formatter: p,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: I.value,
      locale: s
    })), M = $(() => V.value.arr), A = $(() => M.value.filter(({ part: z }) => z !== "literal"));
    te(s, (z) => {
      p.getLocale() !== z && (p.setLocale(z), oe(() => {
        _.value.clear(), za(m.value).forEach((X) => _.value.add(X));
      }));
    }), te(C, (z) => {
      z !== void 0 && (!Ee(y.value, z) || y.value.compare(z) !== 0) && (y.value = z.copy());
    }), te([C, s], ([z]) => {
      z !== void 0 ? I.value = { ...Ht({ value: z, formatter: p }) } : (Object.values(I.value).every((X) => X === null) || C === void 0) && (I.value = { ...B });
    });
    const F = T(null), W = $(() => Array.from(_.value).findIndex((z) => {
      var X;
      return z.getAttribute("data-radix-vue-date-field-segment") === ((X = F.value) == null ? void 0 : X.getAttribute("data-radix-vue-date-field-segment"));
    })), K = $(() => {
      const z = v.value === "rtl" ? -1 : 1;
      return (z < 0 ? W.value < 0 : W.value > _.value.size - 1) ? null : Array.from(_.value)[W.value + z];
    }), J = $(() => {
      const z = v.value === "rtl" ? -1 : 1;
      return (z > 0 ? W.value < 0 : W.value > _.value.size - 1) ? null : Array.from(_.value)[W.value - z];
    }), L = Qe();
    function G(z) {
      var X, H;
      tt(z.key) && (z.key === L.ARROW_LEFT && ((X = J.value) == null || X.focus()), z.key === L.ARROW_RIGHT && ((H = K.value) == null || H.focus()));
    }
    function N(z) {
      F.value = z;
    }
    return jd({
      isDateUnavailable: u.value,
      locale: s,
      modelValue: C,
      placeholder: y,
      disabled: r,
      formatter: p,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: I,
      isInvalid: P,
      segmentContents: A,
      elements: _,
      setFocusedElement: N,
      focusNext() {
        var z;
        (z = K.value) == null || z.focus();
      }
    }), t({
      /** Helper to set the focused element inside the DateField */
      setFocusedElement: N
    }), (z, X) => (b(), ve(we, null, [
      q(o(O), k(z.$attrs, {
        ref_key: "primitiveElement",
        ref: g,
        role: "group",
        "aria-disabled": o(r) ? !0 : void 0,
        "data-disabled": o(r) ? "" : void 0,
        "data-readonly": o(i) ? "" : void 0,
        "data-invalid": P.value ? "" : void 0,
        dir: o(v),
        onKeydown: ie(G, ["left", "right"])
      }), {
        default: h(() => [
          w(z.$slots, "default", {
            modelValue: o(C),
            segments: M.value,
            isInvalid: P.value
          })
        ]),
        _: 3
      }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
      Ge("input", {
        id: z.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "true",
        value: o(C) ? o(C).toString() : "",
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
        onFocus: X[0] || (X[0] = (H) => {
          var Q, Z;
          return (Z = (Q = Array.from(_.value)) == null ? void 0 : Q[0]) == null ? void 0 : Z.focus();
        })
      }, null, 40, Hd)
    ], 64));
  }
});
function Lt(a) {
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
function Gd(a) {
  const { segmentValues: t, placeholder: e } = a, n = t.day === null, l = t.day ? e.set({ day: t.day }) : e, s = l.day, r = 1, i = Dt(l), u = n ? "Empty" : `${s}`;
  return {
    ...Lt(a),
    "aria-label": "day,",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function qd(a) {
  const { segmentValues: t, placeholder: e, formatter: n } = a, l = t.month === null, s = t.month ? e.set({ month: t.month }) : e, r = s.month, i = 1, u = 12, d = l ? "Empty" : `${r} - ${n.fullMonth(Ne(s))}`;
  return {
    ...Lt(a),
    "aria-label": "month, ",
    contenteditable: !0,
    "aria-valuemin": i,
    "aria-valuemax": u,
    "aria-valuenow": r,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function Yd(a) {
  const { segmentValues: t, placeholder: e } = a, n = t.year === null, l = t.year ? e.set({ year: t.year }) : e, s = 1, r = 9999, i = l.year, u = n ? "Empty" : `${i}`;
  return {
    ...Lt(a),
    "aria-label": "year, ",
    "aria-valuemin": s,
    "aria-valuemax": r,
    "aria-valuenow": i,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Xd(a) {
  const { segmentValues: t, hourCycle: e, placeholder: n } = a;
  if (!("hour" in t) || !("hour" in n))
    return {};
  const l = t.hour === null, s = t.hour ? n.set({ hour: t.hour }) : n, r = e === 12 ? 1 : 0, i = e === 12 ? 12 : 23, u = s.hour, d = l ? "Empty" : `${u} ${t.dayPeriod ?? ""}`;
  return {
    ...Lt(a),
    "aria-label": "hour, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": u,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function Zd(a) {
  const { segmentValues: t, placeholder: e } = a;
  if (!("minute" in t) || !("minute" in e))
    return {};
  const n = t.minute === null, s = (t.minute ? e.set({ minute: t.minute }) : e).minute, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Lt(a),
    "aria-label": "minute, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Jd(a) {
  const { segmentValues: t, placeholder: e } = a;
  if (!("second" in t) || !("second" in e))
    return {};
  const n = t.second === null, s = (t.second ? e.set({ second: t.second }) : e).second, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Lt(a),
    "aria-label": "second, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Qd(a) {
  const { segmentValues: t } = a;
  if (!("dayPeriod" in t))
    return {};
  const e = 0, n = 12, l = t.hour ? t.hour > 12 ? t.hour - 12 : t.hour : 0, s = t.dayPeriod ?? "AM";
  return {
    ...Lt(a),
    inputmode: "text",
    "aria-label": "AM/PM",
    "aria-valuemin": e,
    "aria-valuemax": n,
    "aria-valuenow": l,
    "aria-valuetext": s
  };
}
function ec(a) {
  return {
    "aria-hidden": !0,
    "data-segment": "literal"
  };
}
function tc(a) {
  return {
    role: "textbox",
    "aria-label": "timezone, ",
    "data-readonly": !0,
    "data-segment": "timeZoneName",
    tabindex: a.disabled ? void 0 : 0,
    style: "caret-color: transparent;"
  };
}
const ac = {
  day: {
    attrs: Gd
  },
  month: {
    attrs: qd
  },
  year: {
    attrs: Yd
  },
  hour: {
    attrs: Xd
  },
  minute: {
    attrs: Zd
  },
  second: {
    attrs: Jd
  },
  dayPeriod: {
    attrs: Qd
  },
  literal: {
    attrs: ec
  },
  timeZoneName: {
    attrs: tc
  }
};
function ds(a) {
  const t = Qe();
  function e({ e: y, part: E, dateRef: P, prevValue: B }) {
    const I = y.key === t.ARROW_UP ? 1 : -1, V = 0, M = 59;
    if (B === null)
      return I > 0 ? V : M;
    const A = [E, I];
    return P.set({ [E]: B }).cycle(...A)[E];
  }
  function n(y) {
    if (a.hasLeftFocus.value = !1, y === null)
      return y;
    const E = y.toString();
    return E.length === 1 ? (a.modelValue.value = void 0, null) : Number.parseInt(E.slice(0, -1));
  }
  function l({ e: y, part: E, dateRef: P, prevValue: B, hourCycle: I }) {
    const V = y.key === t.ARROW_UP ? 1 : -1;
    if (B === null)
      return P[E];
    if (E === "hour" && "hour" in P) {
      const A = [E, V, { hourCycle: I }];
      return P.set({ [E]: B }).cycle(...A)[E];
    }
    const M = [E, V];
    return E === "day" && a.segmentValues.value.month !== null ? P.set({ [E]: B, month: a.segmentValues.value.month }).cycle(...M)[E] : P.set({ [E]: B }).cycle(...M)[E];
  }
  function s(y, E, P) {
    let B = !1;
    const I = Math.floor(y / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, P = null), P === null)
      return E === 0 ? (a.lastKeyZero.value = !0, { value: null, moveToNext: B }) : ((a.lastKeyZero.value || E > I) && (B = !0), a.lastKeyZero.value = !1, { value: E, moveToNext: B });
    const V = P.toString().length, M = Number.parseInt(P.toString() + E.toString());
    return V === 2 || M > y ? ((E > I || M > y) && (B = !0), { value: E, moveToNext: B }) : (B = !0, { value: M, moveToNext: B });
  }
  function r(y, E) {
    let B = !1;
    const I = Math.floor(59 / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return y === 0 ? (a.lastKeyZero.value = !0, { value: 0, moveToNext: B }) : ((a.lastKeyZero.value || y > I) && (B = !0), a.lastKeyZero.value = !1, { value: y, moveToNext: B });
    const V = E.toString().length, M = Number.parseInt(E.toString() + y.toString());
    return V === 2 || M > 59 ? (y > I && (B = !0), { value: y, moveToNext: B }) : (B = !0, { value: M, moveToNext: B });
  }
  function i(y, E) {
    let B = !1;
    const I = Math.floor(24 / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return y === 0 ? (a.lastKeyZero.value = !0, { value: 0, moveToNext: B }) : ((a.lastKeyZero.value || y > I) && (B = !0), a.lastKeyZero.value = !1, { value: y, moveToNext: B });
    const V = E.toString().length, M = Number.parseInt(E.toString() + y.toString());
    return V === 2 || M > 24 ? (y > I && (B = !0), { value: y, moveToNext: B }) : (B = !0, { value: M, moveToNext: B });
  }
  function u(y, E) {
    let P = !1;
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return { value: y === 0 ? 1 : y, moveToNext: P };
    const B = E.toString() + y.toString();
    return B.length > 4 ? { value: y === 0 ? 1 : y, moveToNext: P } : (B.length === 4 && (P = !0), { value: Number.parseInt(B), moveToNext: P });
  }
  const d = $(() => ac[a.part].attrs({
    disabled: a.disabled.value,
    placeholder: a.placeholder.value,
    hourCycle: a.hourCycle,
    segmentValues: a.segmentValues.value,
    formatter: a.formatter
  }));
  function c(y) {
    if (!rt(y.key) || tt(y.key))
      return;
    const E = a.segmentValues.value.day;
    if (y.key === t.ARROW_DOWN || y.key === t.ARROW_UP) {
      a.segmentValues.value.day = l({ e: y, part: "day", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (St(y.key)) {
      const P = Number.parseInt(y.key), B = a.segmentValues.value.month, I = B ? Dt(a.placeholder.value.set({ month: B })) : Dt(a.placeholder.value), { value: V, moveToNext: M } = s(I, P, E);
      a.segmentValues.value.day = V, M && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.day = n(E));
  }
  function f(y) {
    if (!rt(y.key) || tt(y.key))
      return;
    const E = a.segmentValues.value.month;
    if (y.key === t.ARROW_DOWN || y.key === t.ARROW_UP) {
      a.segmentValues.value.month = l({ e: y, part: "month", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (St(y.key)) {
      const P = Number.parseInt(y.key), { value: B, moveToNext: I } = s(12, P, E);
      a.segmentValues.value.month = B, I && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.month = n(E));
  }
  function p(y) {
    if (!rt(y.key) || tt(y.key))
      return;
    const E = a.segmentValues.value.year;
    if (y.key === t.ARROW_DOWN || y.key === t.ARROW_UP) {
      a.segmentValues.value.year = l({ e: y, part: "year", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (St(y.key)) {
      const P = Number.parseInt(y.key), { value: B, moveToNext: I } = u(P, E);
      a.segmentValues.value.year = B, I && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.year = n(E));
  }
  function v(y) {
    const E = a.placeholder.value;
    if (!rt(y.key) || tt(y.key) || !("hour" in E) || !("hour" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.hour, B = a.hourCycle;
    if (y.key === t.ARROW_UP || y.key === t.ARROW_DOWN) {
      a.segmentValues.value.hour = l({ e: y, part: "hour", dateRef: a.placeholder.value, prevValue: P, hourCycle: B }), "dayPeriod" in a.segmentValues.value && (a.segmentValues.value.hour < 12 ? a.segmentValues.value.dayPeriod = "AM" : a.segmentValues.value.hour && (a.segmentValues.value.dayPeriod = "PM"));
      return;
    }
    if (St(y.key)) {
      const I = Number.parseInt(y.key), { value: V, moveToNext: M } = i(I, P);
      "dayPeriod" in a.segmentValues.value && V && V > 12 ? a.segmentValues.value.dayPeriod = "PM" : "dayPeriod" in a.segmentValues.value && V && (a.segmentValues.value.dayPeriod = "AM"), a.segmentValues.value.hour = V, M && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.hour = n(P));
  }
  function g(y) {
    const E = a.placeholder.value;
    if (!rt(y.key) || tt(y.key) || !("minute" in E) || !("minute" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.minute;
    if (a.segmentValues.value.minute = e({ e: y, part: "minute", dateRef: a.placeholder.value, prevValue: P }), St(y.key)) {
      const B = Number.parseInt(y.key), { value: I, moveToNext: V } = r(B, P);
      a.segmentValues.value.minute = I, V && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.minute = n(P));
  }
  function m(y) {
    const E = a.placeholder.value;
    if (!rt(y.key) || tt(y.key) || !("second" in E) || !("second" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.second;
    if (a.segmentValues.value.second = e({ e: y, part: "second", dateRef: a.placeholder.value, prevValue: P }), St(y.key)) {
      const B = Number.parseInt(y.key), { value: I, moveToNext: V } = r(B, P);
      a.segmentValues.value.second = I, V && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.second = n(P));
  }
  function _(y) {
    if (!((!rt(y.key) || tt(y.key)) && y.key !== "a" && y.key !== "p" || !("hour" in a.placeholder.value) || !("dayPeriod" in a.segmentValues.value))) {
      if (y.key === t.ARROW_UP || y.key === t.ARROW_DOWN) {
        if (a.segmentValues.value.dayPeriod === "AM") {
          a.segmentValues.value.dayPeriod = "PM", a.segmentValues.value.hour = a.segmentValues.value.hour + 12;
          return;
        }
        a.segmentValues.value.dayPeriod = "AM", a.segmentValues.value.hour = a.segmentValues.value.hour - 12;
        return;
      }
      if (["a", "A"].includes(y.key) && a.segmentValues.value.dayPeriod !== "AM") {
        a.segmentValues.value.dayPeriod = "AM", a.segmentValues.value.hour = a.segmentValues.value.hour - 12;
        return;
      }
      ["p", "P"].includes(y.key) && a.segmentValues.value.dayPeriod !== "PM" && (a.segmentValues.value.dayPeriod = "PM", a.segmentValues.value.hour = a.segmentValues.value.hour + 12);
    }
  }
  function C(y) {
    a.disabled.value && y.preventDefault();
  }
  function D(y) {
    const E = a.disabled.value, P = a.readonly.value;
    if (y.key !== t.TAB && y.preventDefault(), E || P)
      return;
    if ({
      day: c,
      month: f,
      year: p,
      hour: v,
      minute: g,
      second: m,
      dayPeriod: _,
      timeZoneName: () => {
      }
    }[a.part](y), ![t.ARROW_LEFT, t.ARROW_RIGHT].includes(y.key) && y.key !== t.TAB && y.key !== t.SHIFT && rt(y.key) && Object.values(a.segmentValues.value).every((I) => I !== null)) {
      const I = { ...a.segmentValues.value };
      let V = a.placeholder.value.copy();
      Object.keys(I).forEach((M) => {
        const A = I[M];
        V = V.set({ [M]: A });
      }), a.modelValue.value = V.copy();
    }
  }
  return {
    handleSegmentClick: C,
    handleSegmentKeydown: D,
    attributes: d
  };
}
const nc = /* @__PURE__ */ x({
  __name: "DateFieldInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Wd(), n = T(!0), l = T(!1), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = ds({
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
    }), u = $(() => e.disabled.value), d = $(() => e.readonly.value), c = $(() => e.isInvalid.value);
    return (f, p) => (b(), S(o(O), k({
      as: f.as,
      "as-child": f.asChild
    }, o(i), {
      contenteditable: u.value || d.value ? !1 : f.part !== "literal",
      "data-radix-vue-date-field-segment": f.part,
      "aria-disabled": u.value ? !0 : void 0,
      "aria-readonly": d.value ? !0 : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-invalid": c.value ? "" : void 0,
      "aria-invalid": c.value ? !0 : void 0
    }, Kn(f.part !== "literal" ? {
      mousedown: o(s),
      keydown: o(r),
      focusout: () => {
        n.value = !0;
      },
      focusin: (v) => {
        o(e).setFocusedElement(v.target);
      }
    } : {})), {
      default: h(() => [
        w(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-invalid", "aria-invalid"]));
  }
}), Im = /* @__PURE__ */ x({
  __name: "DatePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Gu), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bm = /* @__PURE__ */ x({
  __name: "DatePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(qu), j(U(t)), {
      default: h(({ headingValue: l }) => [
        w(e.$slots, "default", { headingValue: l }, () => [
          he(De(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), Tm = /* @__PURE__ */ x({
  __name: "DatePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Yu), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rm = /* @__PURE__ */ x({
  __name: "DatePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Xu), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Am = /* @__PURE__ */ x({
  __name: "DatePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Zu), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Om = /* @__PURE__ */ x({
  __name: "DatePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Ju), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), km = /* @__PURE__ */ x({
  __name: "DatePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Qu), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mm = /* @__PURE__ */ x({
  __name: "DatePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(ed), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vm = /* @__PURE__ */ x({
  __name: "DatePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(td), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fm = /* @__PURE__ */ x({
  __name: "DatePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(ad), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lm = /* @__PURE__ */ x({
  __name: "DatePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(nd), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nm = /* @__PURE__ */ x({
  __name: "DatePickerInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(nc), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [wo, oc] = ee("DatePickerRoot"), zm = /* @__PURE__ */ x({
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
      numberOfMonths: f,
      preventDeselect: p,
      isDateDisabled: v,
      isDateUnavailable: g,
      defaultOpen: m,
      modal: _,
      id: C,
      name: D,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: B,
      hideTimeZone: I,
      hourCycle: V,
      defaultValue: M,
      dir: A
    } = ne(e), F = be(A), W = ae(e, "modelValue", n, {
      defaultValue: M.value,
      passive: e.modelValue === void 0
    }), K = $(() => Zt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: W.value
    })), J = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? K.value.copy(),
      passive: e.placeholder === void 0
    }), L = ae(e, "open", n, {
      defaultValue: m.value,
      passive: e.open === void 0
    }), G = T();
    return oc({
      isDateUnavailable: g.value,
      isDateDisabled: v.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: f,
      readonly: r,
      preventDeselect: p,
      modelValue: W,
      placeholder: J,
      defaultOpen: m,
      modal: _,
      open: L,
      id: C,
      name: D,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: B,
      hideTimeZone: I,
      hourCycle: V,
      dateFieldRef: G,
      dir: F,
      onDateChange(N) {
        !N || !W.value ? W.value = N : !p.value && Ae(W.value, N) ? W.value = void 0 : W.value = N.copy();
      },
      onPlaceholderChange(N) {
        Ee(N, J.value) || (J.value = N.copy());
      }
    }), (N, z) => (b(), S(o(bs), {
      open: o(L),
      "onUpdate:open": z[0] || (z[0] = (X) => Ue(L) ? L.value = X : null),
      "default-open": o(m),
      modal: o(_)
    }, {
      default: h(() => [
        w(N.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
}), Km = /* @__PURE__ */ x({
  __name: "DatePickerCalendar",
  setup(a) {
    const t = wo();
    return (e, n) => (b(), S(o(Uu), k({
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
      default: h(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
        w(e.$slots, "default", {
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
}), Hm = /* @__PURE__ */ x({
  __name: "DatePickerField",
  setup(a) {
    const t = wo();
    return (e, n) => (b(), S(o(Ud), k({
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
      default: h(({ segments: l, modelValue: s }) => [
        w(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), Wm = /* @__PURE__ */ x({
  __name: "DatePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Ps), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jm = /* @__PURE__ */ x({
  __name: "DatePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Ss), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Um = /* @__PURE__ */ x({
  __name: "DatePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Es), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gm = /* @__PURE__ */ x({
  __name: "DatePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = wo();
    return (n, l) => (b(), S(o(Cs), k({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      disabled: o(e).disabled.value,
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = o(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["disabled"]));
  }
}), qm = /* @__PURE__ */ x({
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
    return (s, r) => (b(), S(o(ws), null, {
      default: h(() => [
        q(o(xs), j(U({ ...o(l), ...s.$attrs })), {
          default: h(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Ym = /* @__PURE__ */ x({
  __name: "DateRangePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(gf), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xm = /* @__PURE__ */ x({
  __name: "DateRangePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(bf), j(U(t)), {
      default: h(({ headingValue: l }) => [
        w(e.$slots, "default", { headingValue: l }, () => [
          he(De(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), Zm = /* @__PURE__ */ x({
  __name: "DateRangePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Cf), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jm = /* @__PURE__ */ x({
  __name: "DateRangePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(wf), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qm = /* @__PURE__ */ x({
  __name: "DateRangePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(_f), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eh = /* @__PURE__ */ x({
  __name: "DateRangePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(xf), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), th = /* @__PURE__ */ x({
  __name: "DateRangePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Sf), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ah = /* @__PURE__ */ x({
  __name: "DateRangePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Ef), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nh = /* @__PURE__ */ x({
  __name: "DateRangePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Pf), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oh = /* @__PURE__ */ x({
  __name: "DateRangePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Df), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lh = /* @__PURE__ */ x({
  __name: "DateRangePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o($f), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sh = /* @__PURE__ */ x({
  __name: "DateRangePickerInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(dc), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [_o, lc] = ee("DateRangePickerRoot"), rh = /* @__PURE__ */ x({
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
      numberOfMonths: f,
      preventDeselect: p,
      isDateDisabled: v,
      isDateUnavailable: g,
      defaultOpen: m,
      modal: _,
      id: C,
      name: D,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: B,
      hideTimeZone: I,
      hourCycle: V,
      dir: M
    } = ne(e), A = be(M), F = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? { start: void 0, end: void 0 },
      passive: e.modelValue === void 0
    }), W = Zt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: F.value.start
    }), K = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? W.copy(),
      passive: e.placeholder === void 0
    }), J = ae(e, "open", n, {
      defaultValue: m.value,
      passive: e.open === void 0
    }), L = T();
    return lc({
      isDateUnavailable: g.value,
      isDateDisabled: v.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: f,
      readonly: r,
      preventDeselect: p,
      modelValue: F,
      placeholder: K,
      defaultOpen: m,
      modal: _,
      open: J,
      id: C,
      name: D,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: B,
      hideTimeZone: I,
      hourCycle: V,
      dateFieldRef: L,
      dir: A,
      onStartValueChange(G) {
        n("update:startValue", G);
      },
      onDateChange(G) {
        var N, z;
        F.value = { start: (N = G.start) == null ? void 0 : N.copy(), end: (z = G.end) == null ? void 0 : z.copy() };
      },
      onPlaceholderChange(G) {
        K.value = G.copy();
      }
    }), (G, N) => (b(), S(o(bs), {
      open: o(J),
      "onUpdate:open": N[0] || (N[0] = (z) => Ue(J) ? J.value = z : null),
      "default-open": o(m),
      modal: o(_)
    }, {
      default: h(() => [
        w(G.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
}), ih = /* @__PURE__ */ x({
  __name: "DateRangePickerCalendar",
  setup(a) {
    const t = _o();
    return (e, n) => (b(), S(o(yf), k({
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
      default: h(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
        w(e.$slots, "default", {
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
}), uh = /* @__PURE__ */ x({
  __name: "DateRangePickerField",
  setup(a) {
    const t = _o();
    return (e, n) => (b(), S(o(uc), k({
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
      default: h(({ segments: l, modelValue: s }) => [
        w(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), dh = /* @__PURE__ */ x({
  __name: "DateRangePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Ps), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ch = /* @__PURE__ */ x({
  __name: "DateRangePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Ss), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fh = /* @__PURE__ */ x({
  __name: "DateRangePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(Es), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ph = /* @__PURE__ */ x({
  __name: "DateRangePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = _o();
    return (n, l) => (b(), S(o(Cs), k({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      disabled: o(e).disabled.value,
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = o(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["disabled"]));
  }
}), vh = /* @__PURE__ */ x({
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
    return (s, r) => (b(), S(o(ws), null, {
      default: h(() => [
        q(o(xs), j(U({ ...o(l), ...s.$attrs })), {
          default: h(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), sc = ["id", "value", "name", "disabled", "required"], [rc, ic] = ee("DateRangeFieldRoot"), uc = /* @__PURE__ */ x({
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
    var Z, re;
    const n = a, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, dir: d } = ne(n), c = qn(n.locale), { primitiveElement: f, currentElement: p } = Te(), v = T(/* @__PURE__ */ new Set()), g = be(d);
    le(() => {
      za(p.value).forEach((Y) => v.value.add(Y));
    });
    const m = ae(n, "modelValue", l, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), _ = Zt({
      defaultPlaceholder: n.placeholder,
      granularity: n.granularity,
      defaultValue: m.value.start
    }), C = ae(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? _.copy(),
      passive: n.placeholder === void 0
    }), D = $(() => n.granularity ? ca(C.value) ? n.granularity : "day" : ca(C.value) ? "minute" : "day"), y = $(() => {
      var Y;
      return m.value.start ? !!((Y = u.value) != null && Y.call(u, m.value.start) || n.minValue && ze(m.value.start, n.minValue) || n.maxValue && ze(n.maxValue, m.value.start)) : !1;
    }), E = $(() => {
      var Y;
      return m.value.end ? !!((Y = u.value) != null && Y.call(u, m.value.end) || n.minValue && ze(m.value.end, n.minValue) || n.maxValue && ze(n.maxValue, m.value.end)) : !1;
    }), P = $(() => y.value || E.value ? !0 : !m.value.start || !m.value.end ? !1 : !Ir(m.value.start, m.value.end) || u.value !== void 0 && !wl(
      m.value.start,
      m.value.end,
      u.value,
      void 0
    )), B = us(D.value), I = T(m.value.start ? { ...Ht({ value: m.value.start, formatter: c }) } : { ...B }), V = T(m.value.end ? { ...Ht({ value: m.value.end, formatter: c }) } : { ...B }), M = $(() => Rn({
      granularity: D.value,
      dateRef: C.value,
      formatter: c,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: I.value,
      locale: s
    })), A = $(() => Rn({
      granularity: D.value,
      dateRef: C.value,
      formatter: c,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: V.value,
      locale: s
    })), F = $(() => ({
      start: M.value.arr,
      end: A.value.arr
    })), W = $(() => ({ start: F.value.start.filter(({ part: Y }) => Y !== "literal"), end: F.value.end.filter(({ part: Y }) => Y !== "literal") })), K = T((Z = m.value.start) == null ? void 0 : Z.copy()), J = T((re = m.value.end) == null ? void 0 : re.copy());
    te([K, J], ([Y, se]) => {
      m.value = { start: Y == null ? void 0 : Y.copy(), end: se == null ? void 0 : se.copy() };
    }), te(m, (Y) => {
      Y.start && Y.end && ((!K.value || Y.start.compare(K.value) !== 0) && (K.value = Y.start.copy()), (!J.value || Y.end.compare(J.value) !== 0) && (J.value = Y.end.copy()));
    }), te([K, s], ([Y]) => {
      Y !== void 0 ? I.value = { ...Ht({ value: Y, formatter: c }) } : (Object.values(I.value).every((se) => se === null) || Y === void 0) && (I.value = { ...B });
    }), te(s, (Y) => {
      c.getLocale() !== Y && (c.setLocale(Y), oe(() => {
        v.value.clear(), za(p.value).forEach((se) => v.value.add(se));
      }));
    }), te(m, (Y) => {
      Y.start !== void 0 && (!Ee(C.value, Y.start) || C.value.compare(Y.start) !== 0) && (C.value = Y.start.copy());
    }), te([J, s], ([Y]) => {
      Y !== void 0 ? V.value = { ...Ht({ value: Y, formatter: c }) } : (Object.values(V.value).every((se) => se === null) || Y === void 0) && (V.value = { ...B });
    });
    const L = T(null), G = $(() => Array.from(v.value).findIndex((Y) => {
      var se, fe;
      return Y.getAttribute("data-radix-vue-date-field-segment") === ((se = L.value) == null ? void 0 : se.getAttribute("data-radix-vue-date-field-segment")) && Y.getAttribute("data-radix-vue-date-range-field-segment-type") === ((fe = L.value) == null ? void 0 : fe.getAttribute("data-radix-vue-date-range-field-segment-type"));
    })), N = $(() => {
      const Y = g.value === "rtl" ? -1 : 1;
      return (Y < 0 ? G.value < 0 : G.value > v.value.size - 1) ? null : Array.from(v.value)[G.value + Y];
    }), z = $(() => {
      const Y = g.value === "rtl" ? -1 : 1;
      return (Y > 0 ? G.value < 0 : G.value > v.value.size - 1) ? null : Array.from(v.value)[G.value - Y];
    }), X = Qe();
    function H(Y) {
      var se, fe;
      tt(Y.key) && (Y.key === X.ARROW_LEFT && ((se = z.value) == null || se.focus()), Y.key === X.ARROW_RIGHT && ((fe = N.value) == null || fe.focus()));
    }
    function Q(Y) {
      L.value = Y;
    }
    return ic({
      isDateUnavailable: u.value,
      locale: s,
      startValue: K,
      endValue: J,
      placeholder: C,
      disabled: r,
      formatter: c,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: { start: I, end: V },
      isInvalid: P,
      segmentContents: W,
      elements: v,
      setFocusedElement: Q,
      focusNext() {
        var Y;
        (Y = N.value) == null || Y.focus();
      }
    }), t({
      setFocusedElement: Q
    }), (Y, se) => {
      var fe, _e;
      return b(), ve(we, null, [
        q(o(O), k(Y.$attrs, {
          ref_key: "primitiveElement",
          ref: f,
          role: "group",
          "aria-disabled": o(r) ? !0 : void 0,
          "data-disabled": o(r) ? "" : void 0,
          "data-readonly": o(i) ? "" : void 0,
          "data-invalid": P.value ? "" : void 0,
          dir: o(g),
          onKeydown: ie(H, ["left", "right"])
        }), {
          default: h(() => [
            w(Y.$slots, "default", {
              modelValue: o(m),
              segments: F.value
            })
          ]),
          _: 3
        }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
        Ge("input", {
          id: Y.id,
          type: "text",
          tabindex: "-1",
          "aria-hidden": "true",
          value: `${(fe = o(m).start) == null ? void 0 : fe.toString()} - ${(_e = o(m).end) == null ? void 0 : _e.toString()}`,
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
          onFocus: se[0] || (se[0] = (Se) => {
            var ye, de;
            return (de = (ye = Array.from(v.value)) == null ? void 0 : ye[0]) == null ? void 0 : de.focus();
          })
        }, null, 40, sc)
      ], 64);
    };
  }
}), dc = /* @__PURE__ */ x({
  __name: "DateRangeFieldInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = rc(), n = T(!0), l = T(!1), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = ds({
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
    }), u = $(() => e.disabled.value), d = $(() => e.readonly.value), c = $(() => e.isInvalid.value);
    return (f, p) => (b(), S(o(O), k({
      as: f.as,
      "as-child": f.asChild
    }, o(i), {
      contenteditable: u.value || d.value ? !1 : f.part !== "literal",
      "data-radix-vue-date-field-segment": f.part,
      "aria-disabled": u.value ? !0 : void 0,
      "aria-readonly": d.value ? !0 : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-radix-vue-date-range-field-segment-type": f.type,
      "data-invalid": c.value ? "" : void 0,
      "aria-invalid": c.value ? !0 : void 0
    }, Kn(f.part !== "literal" ? {
      mousedown: o(s),
      keydown: o(r),
      focusout: () => {
        n.value = !0;
      },
      focusin: (v) => {
        o(e).setFocusedElement(v.target);
      }
    } : {})), {
      default: h(() => [
        w(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-radix-vue-date-range-field-segment-type", "data-invalid", "aria-invalid"]));
  }
}), [cs, cc] = ee("DropdownMenuRoot"), mh = /* @__PURE__ */ x({
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
    return cc({
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
    }), (d, c) => (b(), S(o(so), {
      open: o(l),
      "onUpdate:open": c[0] || (c[0] = (f) => Ue(l) ? l.value = f : null),
      dir: o(u),
      modal: o(r)
    }, {
      default: h(() => [
        w(d.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), hh = /* @__PURE__ */ x({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = cs(), { forwardRef: n, currentElement: l } = R();
    return le(() => {
      e.triggerElement = l;
    }), e.triggerId || (e.triggerId = me(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (b(), S(o(Qa), { "as-child": "" }, {
      default: h(() => [
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
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = o(e)) == null || u.onOpenToggle(), await oe(), o(e).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = ie(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && o(e).onOpenToggle(), i.key === "ArrowDown" && o(e).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: h(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), yh = /* @__PURE__ */ x({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(vo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gh = /* @__PURE__ */ x({
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
    const s = cs(), r = T(!1);
    function i(u) {
      u.defaultPrevented || (r.value || setTimeout(() => {
        var d;
        (d = s.triggerElement.value) == null || d.focus();
      }, 0), r.value = !1, u.preventDefault());
    }
    return s.contentId || (s.contentId = me(void 0, "radix-vue-dropdown-menu-content")), (u, d) => {
      var c;
      return b(), S(o(fo), k(o(l), {
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
        onInteractOutside: d[0] || (d[0] = (f) => {
          var m;
          if (f.defaultPrevented) return;
          const p = f.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0, g = p.button === 2 || v;
          (!o(s).modal.value || g) && (r.value = !0), (m = o(s).triggerElement.value) != null && m.contains(f.target) && f.preventDefault();
        })
      }), {
        default: h(() => [
          w(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), bh = /* @__PURE__ */ x({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(lo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ch = /* @__PURE__ */ x({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Oe(t);
    return R(), (s, r) => (b(), S(o(Ea), j(U({ ...e, ...o(l) })), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wh = /* @__PURE__ */ x({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(tn), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _h = /* @__PURE__ */ x({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(yo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xh = /* @__PURE__ */ x({
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
    const e = a, l = Oe(t);
    return R(), (s, r) => (b(), S(o(co), j(U({ ...e, ...o(l) })), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sh = /* @__PURE__ */ x({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(uo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Eh = /* @__PURE__ */ x({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(po), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ph = /* @__PURE__ */ x({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Oe(t);
    return R(), (s, r) => (b(), S(o(mo), j(U({ ...e, ...o(l) })), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dh = /* @__PURE__ */ x({
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
    return R(), (s, r) => (b(), S(o(ho), j(U(o(l))), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $h = /* @__PURE__ */ x({
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
    return R(), (s, r) => (b(), S(o(go), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Ue(l) ? l.value = i : null)
    }, {
      default: h(() => [
        w(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Ih = /* @__PURE__ */ x({
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
    return R(), (s, r) => (b(), S(o(bo), k(o(l), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bh = /* @__PURE__ */ x({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(Co), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fc = ["value", "name", "disabled", "required"], [oa, pc] = ee("EditableRoot"), Th = /* @__PURE__ */ x({
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
      disabled: f,
      dir: p,
      submitMode: v,
      activationMode: g,
      selectOnFocus: m,
      readonly: _,
      autoResize: C,
      required: D
    } = ne(n), y = T(), E = be(p), P = T(u.value ?? !1), B = ae(n, "modelValue", l, {
      defaultValue: i.value ?? "",
      passive: n.modelValue === void 0
    }), { primitiveElement: I, currentElement: V } = Te(), M = Je(V), A = $(() => typeof d.value == "string" ? { edit: d.value, preview: d.value } : d.value), F = T(B.value);
    function W() {
      B.value = F.value, P.value = !1, l("update:state", "cancel");
    }
    function K() {
      P.value = !0, l("update:state", "edit");
    }
    function J() {
      F.value = B.value, P.value = !1, l("update:state", "submit"), l("submit", B.value);
    }
    function L() {
      P.value && (v.value === "blur" || v.value === "both" ? J() : W());
    }
    const G = jl(() => L(), V), N = Ul(() => L(), V), z = $(() => B.value === "");
    return t({
      /** Function to submit the value of the editable */
      submit: J,
      /** Function to cancel the value of the editable */
      cancel: W,
      /** Function to set the editable in edit mode */
      edit: K
    }), pc({
      id: s,
      name: r,
      disabled: f,
      isEditing: P,
      maxLength: c,
      modelValue: B,
      placeholder: A,
      edit: K,
      cancel: W,
      submit: J,
      activationMode: g,
      submitMode: v,
      selectOnFocus: m,
      inputRef: y,
      startWithEditMode: u,
      isEmpty: z,
      readonly: _,
      autoResize: C
    }), (X, H) => (b(), ve(we, null, [
      q(o(O), k(X.$attrs, {
        ref_key: "primitiveElement",
        ref: I,
        as: X.as,
        "as-child": X.asChild,
        dir: o(E),
        onFocusCapture: o(N).onFocusCapture,
        onBlurCapture: o(N).onBlurCapture,
        onPointerdownCapture: o(G).onPointerDownCapture
      }), {
        default: h(() => [
          w(X.$slots, "default", {
            modelValue: o(B),
            isEditing: P.value,
            isEmpty: z.value,
            submit: J,
            cancel: W,
            edit: K
          })
        ]),
        _: 3
      }, 16, ["as", "as-child", "dir", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]),
      o(M) ? (b(), ve("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "true",
        value: o(B),
        name: o(r),
        disabled: o(f),
        required: o(D),
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, fc)) : ce("", !0)
    ], 64));
  }
}), Rh = /* @__PURE__ */ x({
  __name: "EditableArea",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = oa();
    return (n, l) => (b(), S(o(O), k(t, {
      "data-placeholder-shown": o(e).isEditing.value ? void 0 : "",
      "data-focus": o(e).isEditing.value ? "" : void 0,
      "data-focused": o(e).isEditing.value ? "" : void 0,
      "data-empty": o(e).isEmpty.value ? "" : void 0,
      "data-readonly": o(e).readonly.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      style: o(e).autoResize.value ? { display: "inline-grid" } : void 0
    }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-placeholder-shown", "data-focus", "data-focused", "data-empty", "data-readonly", "data-disabled", "style"]));
  }
}), Ah = /* @__PURE__ */ x({
  __name: "EditableInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = Qe(), n = oa(), l = $(() => n.disabled.value), s = $(() => {
      var d;
      return (d = n.placeholder.value) == null ? void 0 : d.edit;
    }), { primitiveElement: r, currentElement: i } = Te();
    le(() => {
      var d, c;
      n.inputRef.value = i.value, n.startWithEditMode.value && ((d = n.inputRef.value) == null || d.focus({ preventScroll: !0 }), n.selectOnFocus.value && ((c = n.inputRef.value) == null || c.select()));
    }), te(n.isEditing, (d) => {
      d && oe(() => {
        var c, f;
        (c = n.inputRef.value) == null || c.focus({ preventScroll: !0 }), n.selectOnFocus.value && ((f = n.inputRef.value) == null || f.select());
      });
    });
    function u(d) {
      (n.submitMode.value === "enter" || n.submitMode.value === "both") && d.key === e.ENTER && !d.shiftKey && !d.metaKey && n.submit();
    }
    return (d, c) => (b(), S(o(O), k({
      ref_key: "primitiveElement",
      ref: r
    }, t, {
      value: o(n).modelValue.value,
      placeholder: s.value,
      disabled: l.value,
      maxlength: o(n).maxLength.value,
      "data-disabled": l.value ? "" : void 0,
      "data-readonly": o(n).readonly.value ? "" : void 0,
      readonly: o(n).readonly.value,
      "aria-label": "editable input",
      hidden: o(n).autoResize.value ? void 0 : !o(n).isEditing.value,
      style: o(n).autoResize.value ? { all: "unset", gridArea: "1 / 1 / auto / auto", visibility: o(n).isEditing.value ? void 0 : "hidden" } : void 0,
      onInput: c[0] || (c[0] = (f) => o(n).modelValue.value = f.target.value),
      onKeydown: [
        ie(u, ["enter", "space"]),
        ie(o(n).cancel, ["esc"])
      ]
    }), {
      default: h(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["value", "placeholder", "disabled", "maxlength", "data-disabled", "data-readonly", "readonly", "hidden", "style", "onKeydown"]));
  }
}), Oh = /* @__PURE__ */ x({
  __name: "EditablePreview",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = oa(), n = $(() => {
      var r;
      return (r = e.placeholder.value) == null ? void 0 : r.preview;
    });
    function l() {
      e.activationMode.value === "focus" && e.edit();
    }
    function s() {
      e.activationMode.value === "dblclick" && e.edit();
    }
    return (r, i) => (b(), S(o(O), k(t, {
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
      default: h(() => [
        w(r.$slots, "default", {}, () => [
          he(De(o(e).modelValue.value || n.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-placeholder-shown", "hidden", "style"]));
  }
}), kh = /* @__PURE__ */ x({
  __name: "EditableSubmitTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = oa();
    return (n, l) => (b(), S(o(O), k(t, {
      "aria-label": "submit",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? void 0 : "",
      onClick: o(e).submit
    }), {
      default: h(() => [
        w(n.$slots, "default", {}, () => [
          he("Submit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), Mh = /* @__PURE__ */ x({
  __name: "EditableCancelTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = oa();
    return (n, l) => (b(), S(o(O), k(t, {
      "aria-label": "cancel",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? void 0 : "",
      onClick: o(e).cancel
    }), {
      default: h(() => [
        w(n.$slots, "default", {}, () => [
          he("Cancel")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), Vh = /* @__PURE__ */ x({
  __name: "EditableEditTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = oa();
    return (n, l) => (b(), S(o(O), k(t, {
      "aria-label": "edit",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? "" : void 0,
      onClick: o(e).edit
    }), {
      default: h(() => [
        w(n.$slots, "default", {}, () => [
          he("Edit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), [xo, vc] = ee("HoverCardRoot"), Fh = /* @__PURE__ */ x({
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
    }), i = T(0), u = T(0), d = T(!1), c = T(!1), f = T(!1), p = T();
    function v() {
      clearTimeout(u.value), i.value = window.setTimeout(() => r.value = !0, l.value);
    }
    function g() {
      clearTimeout(i.value), !d.value && !c.value && (u.value = window.setTimeout(() => r.value = !1, s.value));
    }
    function m() {
      r.value = !1;
    }
    return vc({
      open: r,
      onOpenChange(_) {
        r.value = _;
      },
      onOpen: v,
      onClose: g,
      onDismiss: m,
      hasSelectionRef: d,
      isPointerDownOnContentRef: c,
      isPointerInTransitRef: f,
      triggerElement: p
    }), (_, C) => (b(), S(o(Ot), null, {
      default: h(() => [
        w(_.$slots, "default", { open: o(r) })
      ]),
      _: 3
    }));
  }
});
function An(a) {
  return (t) => t.pointerType === "touch" ? void 0 : a();
}
function mc(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
const Lh = /* @__PURE__ */ x({
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
    return (s, r) => (b(), S(o(kt), { "as-child": "" }, {
      default: h(() => [
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
          default: h(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "data-state"])
      ]),
      _: 3
    }));
  }
}), Nh = /* @__PURE__ */ x({
  __name: "HoverCardPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(nt), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hc = /* @__PURE__ */ x({
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
    const e = a, n = t, l = Rt(e), { forwardRef: s, currentElement: r } = R(), i = xo(), { isPointerInTransit: u, onPointerExit: d } = Vl(i.triggerElement, r);
    mi(i.isPointerInTransitRef, u, { direction: "rtl" }), d(() => {
      i.onClose();
    });
    const c = T(!1);
    let f;
    ge((v) => {
      if (c.value) {
        const g = document.body;
        f = g.style.userSelect || g.style.webkitUserSelect, g.style.userSelect = "none", g.style.webkitUserSelect = "none", v(() => {
          g.style.userSelect = f, g.style.webkitUserSelect = f;
        });
      }
    });
    function p() {
      c.value = !1, i.isPointerDownOnContentRef.value = !1, oe(() => {
        var g;
        ((g = document.getSelection()) == null ? void 0 : g.toString()) !== "" && (i.hasSelectionRef.value = !0);
      });
    }
    return le(() => {
      r.value && (document.addEventListener("pointerup", p), mc(r.value).forEach((g) => g.setAttribute("tabindex", "-1")));
    }), Be(() => {
      document.removeEventListener("pointerup", p), i.hasSelectionRef.value = !1, i.isPointerDownOnContentRef.value = !1;
    }), (v, g) => (b(), S(o(gt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: g[1] || (g[1] = (m) => n("escapeKeyDown", m)),
      onPointerDownOutside: g[2] || (g[2] = (m) => n("pointerDownOutside", m)),
      onFocusOutside: g[3] || (g[3] = ue((m) => n("focusOutside", m), ["prevent"])),
      onDismiss: o(i).onDismiss
    }, {
      default: h(() => [
        q(o($t), k({ ...o(l), ...v.$attrs }, {
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
          default: h(() => [
            w(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }, 8, ["onDismiss"]));
  }
}), zh = /* @__PURE__ */ x({
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
    return (i, u) => (b(), S(o(Pe), {
      present: i.forceMount || o(r).open.value
    }, {
      default: h(() => [
        q(hc, k(o(l), {
          ref: o(s),
          onPointerenter: u[0] || (u[0] = (d) => o(An)(o(r).onOpen)(d))
        }), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Kh = /* @__PURE__ */ x({
  __name: "HoverCardArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(aa), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hh = /* @__PURE__ */ x({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(O), k(t, {
      onMousedown: n[0] || (n[0] = (l) => {
        !l.defaultPrevented && l.detail > 1 && l.preventDefault();
      })
    }), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function yc(a) {
  return a == null ? void 0 : a.querySelector("[data-state=checked]");
}
function gc(a, t, e) {
  return a === void 0 ? !1 : Array.isArray(a) ? a.some((n) => Yt(n, t, e)) : Yt(a, t, e);
}
function Yt(a, t, e) {
  return a === void 0 || t === void 0 ? !1 : typeof a == "string" ? a === t : typeof e == "function" ? e(a, t) : typeof e == "string" ? (a == null ? void 0 : a[e]) === (t == null ? void 0 : t[e]) : Xe(a, t);
}
const [an, bc] = ee("ListboxRoot"), Wh = /* @__PURE__ */ x({
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
    const e = a, n = t, { multiple: l, highlightOnHover: s, orientation: r, disabled: i, selectionBehavior: u, dir: d } = ne(e), { getItems: c } = Jt(), { handleTypeaheadSearch: f } = _a(), { primitiveElement: p, currentElement: v } = Te(), g = Qe(), m = be(d), _ = Je(v), C = T(), D = T(!1), y = T(!0), E = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? (l.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: !0
    });
    function P(H) {
      if (D.value = !0, Array.isArray(E.value)) {
        const Q = E.value.findIndex((Z) => Yt(Z, H, e.by));
        if (e.selectionBehavior === "toggle") {
          const Z = [...E.value];
          Q === -1 ? Z.push(H) : Z.splice(Q, 1), E.value = Z;
        } else
          E.value = [H], C.value = H;
      } else
        e.selectionBehavior === "toggle" && Yt(E.value, H, e.by) ? E.value = void 0 : E.value = H;
      setTimeout(() => {
        D.value = !1;
      }, 1);
    }
    const B = T(null), I = T(null), V = T(!1), M = fa(), A = fa();
    function F() {
      return c().map((H) => H.ref).filter((H) => H.dataset.disabled !== "");
    }
    function W(H) {
      if (!H)
        return;
      B.value = H, B.value.focus(), B.value.scrollIntoView({ block: "nearest" });
      const Q = c().find((Z) => Z.ref === H);
      n("highlight", Q);
    }
    function K(H) {
      B.value && B.value.click();
    }
    function J(H) {
      if (D.value = !0, V.value)
        A.trigger(H);
      else {
        const Q = H.altKey || H.ctrlKey || H.metaKey;
        if (Q && H.key === "a" && l.value) {
          const Z = c(), re = Z.map((Y) => Y.value);
          E.value = [...re], H.preventDefault(), W(Z[Z.length - 1].ref);
        } else if (!Q) {
          const Z = f(H.key, F());
          Z && W(Z);
        }
      }
      setTimeout(() => {
        D.value = !1;
      }, 1);
    }
    function L(H) {
      const Q = B.value;
      Q != null && Q.isConnected && (I.value = Q), B.value = null, n("leave", H);
    }
    function G(H) {
      var Z, re;
      const Q = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((Z = H.currentTarget) == null || Z.dispatchEvent(Q), n("entryFocus", Q), !Q.defaultPrevented)
        if (I.value)
          W(I.value);
        else {
          const Y = (re = F()) == null ? void 0 : re[0];
          W(Y);
        }
    }
    function N(H) {
      const Q = ns(H, r.value, m.value);
      if (!Q)
        return;
      let Z = F();
      if (B.value) {
        if (Q === "last")
          Z.reverse();
        else if (Q === "prev" || Q === "next") {
          Q === "prev" && Z.reverse();
          const re = Z.indexOf(B.value);
          Z = Z.slice(re + 1);
        }
        z(H, Z[0]);
      }
      if (Z.length) {
        const re = !B.value && Q === "prev" ? Z.length - 1 : 0;
        W(Z[re]);
      }
      if (V.value)
        return A.trigger(H);
    }
    function z(H, Q) {
      var re;
      if (!(V.value || e.selectionBehavior !== "replace" || !l.value || !Array.isArray(E.value) || (H.altKey || H.ctrlKey || H.metaKey) && !H.shiftKey) && H.shiftKey) {
        const Y = c().filter((_e) => _e.ref.dataset.disabled !== "");
        let se = (re = Y.find((_e) => _e.ref === Q)) == null ? void 0 : re.value;
        if (H.key === g.END ? se = Y[Y.length - 1].value : H.key === g.HOME && (se = Y[0].value), !se || !C.value)
          return;
        const fe = Pt(Y.map((_e) => _e.value), C.value, se);
        E.value = fe;
      }
    }
    async function X(H) {
      if (V.value)
        M.trigger(H);
      else {
        await oe();
        const Z = F().find((re) => re.dataset.state === "checked");
        Z && W(Z);
      }
    }
    return te(E, () => {
      D.value || oe(() => {
        X();
      });
    }, { immediate: !0, deep: !0 }), bc({
      modelValue: E,
      // @ts-expect-error ignoring
      onValueChange: P,
      multiple: l,
      orientation: r,
      dir: m,
      disabled: i,
      highlightOnHover: s,
      highlightedElement: B,
      isVirtual: V,
      virtualFocusHook: M,
      virtualKeydownHook: A,
      by: e.by,
      firstValue: C,
      selectionBehavior: u,
      focusable: y,
      onLeave: L,
      onEnter: G,
      onChangeHighlight: W,
      onKeydownEnter: K,
      onKeydownNavigation: N,
      onKeydownTypeAhead: J
    }), (H, Q) => (b(), S(o(O), {
      ref_key: "primitiveElement",
      ref: p,
      as: H.as,
      "as-child": H.asChild,
      dir: o(m),
      "data-disabled": o(i) ? "" : void 0,
      onPointerleave: L,
      onFocusout: Q[0] || (Q[0] = async (Z) => {
        const re = Z.relatedTarget || Z.target;
        await oe(), B.value && o(v) && !o(v).contains(re) && L(Z);
      })
    }, {
      default: h(() => [
        w(H.$slots, "default", { modelValue: o(E) }),
        o(_) && e.name ? (b(), S(o(oo), {
          key: 0,
          name: e.name,
          value: o(E)
        }, null, 8, ["name", "value"])) : ce("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), jh = /* @__PURE__ */ x({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = an(), e = It(!1, 10);
    return (n, l) => (b(), S(o(Qt), null, {
      default: h(() => [
        q(o(O), {
          role: "listbox",
          as: n.as,
          "as-child": n.asChild,
          tabindex: o(t).focusable.value ? o(t).highlightedElement.value ? "-1" : "0" : void 0,
          "aria-orientation": o(t).orientation.value,
          "aria-multiselectable": !!o(t).multiple.value,
          "data-orientation": o(t).orientation.value,
          onMousedown: l[0] || (l[0] = ue((s) => e.value = !0, ["left"])),
          onFocus: l[1] || (l[1] = (s) => {
            o(e) || o(t).onEnter(s);
          }),
          onKeydown: [
            l[2] || (l[2] = ie(ue((s) => {
              o(t).focusable.value && o(t).onKeydownNavigation(s);
            }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])),
            ie(o(t).onKeydownEnter, ["enter"]),
            o(t).onKeydownTypeAhead
          ]
        }, {
          default: h(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])
      ]),
      _: 3
    }));
  }
}), Uh = /* @__PURE__ */ x({
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
    const { primitiveElement: r, currentElement: i } = Te();
    return le(() => {
      setTimeout(() => {
        var u;
        e.autoFocus && ((u = i.value) == null || u.focus());
      }, 1);
    }), (u, d) => (b(), S(o(O), {
      ref_key: "primitiveElement",
      ref: r,
      as: u.as,
      "as-child": u.asChild,
      value: o(l),
      disabled: o(s).disabled.value ? "" : void 0,
      "data-disabled": o(s).disabled.value ? "" : void 0,
      type: "text",
      onKeydown: [
        ie(ue(o(s).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]),
        ie(o(s).onKeydownEnter, ["enter"])
      ],
      onInput: d[0] || (d[0] = (c) => {
        l.value = c.target.value;
      })
    }, {
      default: h(() => [
        w(u.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "onKeydown"]));
  }
}), Cc = "listbox.select", [wc, _c] = ee("ListboxItem"), Gh = /* @__PURE__ */ x({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = me(void 0, "radix-vue-listbox-item"), i = an(), u = $(() => s.value === i.highlightedElement.value), d = $(() => gc(i.modelValue.value, e.value, i.by)), c = $(() => i.disabled.value || e.disabled);
    async function f(v) {
      n("select", v), !(v != null && v.defaultPrevented) && !c.value && v && (i.onValueChange(e.value), i.onChangeHighlight(v.target));
    }
    function p(v) {
      const g = { originalEvent: v, value: e.value };
      Gt(Cc, f, g);
    }
    return _c({
      isSelected: d
    }), (v, g) => (b(), S(o(At), { value: v.value }, {
      default: h(() => [
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
          onClick: p,
          onKeydown: ie(ue(p, ["prevent"]), ["space"]),
          onPointermove: g[0] || (g[0] = (m) => {
            o(i).highlightOnHover.value ? o(i).onChangeHighlight(o(s)) : o(i).focusable.value || o(i).onChangeHighlight(o(s));
          })
        }, {
          default: h(() => [
            w(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), qh = /* @__PURE__ */ x({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a;
    R();
    const e = wc();
    return (n, l) => o(e).isSelected.value ? (b(), S(o(O), k({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : ce("", !0);
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
    let p;
    if (e.key && ((r = e.debug) != null && r.call(e)) && (p = Date.now()), l = t(...c), e.key && ((i = e.debug) != null && i.call(e))) {
      const v = Math.round((Date.now() - d) * 100) / 100, g = Math.round((Date.now() - p) * 100) / 100, m = g / 16, _ = (C, D) => {
        for (C = String(C); C.length < D; )
          C = " " + C;
        return C;
      };
      console.info(
        `%c⏱ ${_(g, 5)} /${_(v, 5)} ms`,
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
const xc = (a, t) => Math.abs(a - t) < 1, Sc = (a, t, e) => {
  let n;
  return function(...l) {
    a.clearTimeout(n), n = a.setTimeout(() => t.apply(this, l), e);
  };
}, Ec = (a) => a, Pc = (a) => {
  const t = Math.max(a.startIndex - a.overscan, 0), e = Math.min(a.endIndex + a.overscan, a.count - 1), n = [];
  for (let l = t; l <= e; l++)
    n.push(l);
  return n;
}, Dc = (a, t) => {
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
}, Zo = {
  passive: !0
}, $c = typeof window > "u" ? !0 : "onscrollend" in window, Ic = (a, t) => {
  const e = a.scrollElement;
  if (!e)
    return;
  const n = a.targetWindow;
  if (!n)
    return;
  let l = 0;
  const s = $c ? () => {
  } : Sc(
    n,
    () => {
      t(l, !1);
    },
    a.options.isScrollingResetDelay
  ), r = (d) => () => {
    l = e[a.options.horizontal ? "scrollLeft" : "scrollTop"], s(), t(l, d);
  }, i = r(!0), u = r(!1);
  return u(), e.addEventListener("scroll", i, Zo), e.addEventListener("scrollend", u, Zo), () => {
    e.removeEventListener("scroll", i), e.removeEventListener("scrollend", u);
  };
}, Bc = (a, t, e) => {
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
}, Tc = (a, {
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
class Rc {
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
        getItemKey: Ec,
        rangeExtractor: Pc,
        onChange: () => {
        },
        measureElement: Bc,
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
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((f) => {
          this.itemSizeCache.set(f.key, f.size);
        }));
        const d = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, d);
        for (let f = d; f < e; f++) {
          let p = (u = this.measurementsCache[f]) == null ? void 0 : u.measureElement;
          p || (p = (E) => {
            const P = s(f), B = this.elementsCache.get(P);
            if (!E) {
              B && (this.observer.unobserve(B), this.elementsCache.delete(P));
              return;
            }
            B !== E && (B && this.observer.unobserve(B), this.observer.observe(E), this.elementsCache.set(P, E)), E.isConnected && this.resizeItem(
              f,
              this.options.measureElement(E, void 0, this)
            );
          });
          const v = s(f), g = this.options.lanes === 1 ? c[f - 1] : this.getFurthestMeasurement(c, f), m = g ? g.end + this.options.gap : n + l, _ = i.get(v), C = typeof _ == "number" ? _ : this.options.estimateSize(f), D = m + C, y = g ? g.lane : f % this.options.lanes;
          c[f] = {
            index: f,
            start: m,
            size: C,
            end: D,
            key: v,
            lane: y,
            measureElement: p
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
      (e, n, l) => this.range = e.length > 0 && n > 0 ? Ac({
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
          n[fs(
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
          xc(d, this.getScrollOffset()) || this.scrollToIndex(e, { align: i, behavior: l });
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
const fs = (a, t, e, n) => {
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
function Ac({
  measurements: a,
  outerSize: t,
  scrollOffset: e
}) {
  const n = a.length - 1, s = fs(0, n, (i) => a[i].start, e);
  let r = s;
  for (; r < n && a[r].end < e + t; )
    r++;
  return { startIndex: s, endIndex: r };
}
function Oc(a) {
  const t = new Rc(o(a)), e = Ln(t), n = t._didMount();
  return te(
    () => o(a).getScrollElement(),
    (l) => {
      l && t._willUpdate();
    },
    {
      immediate: !0
    }
  ), te(
    () => o(a),
    (l) => {
      t.setOptions({
        ...l,
        onChange: (s, r) => {
          var i;
          Lo(e), (i = l.onChange) == null || i.call(l, s, r);
        }
      }), t._willUpdate(), Lo(e);
    },
    {
      immediate: !0
    }
  ), cl(n), e;
}
function ps(a) {
  return Oc(
    $(() => ({
      observeElementRect: Dc,
      observeElementOffset: Ic,
      scrollToFn: Tc,
      ...o(a)
    }))
  );
}
const Yh = /* @__PURE__ */ x({
  __name: "ListboxVirtualizer",
  props: {
    options: {},
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a) {
    const t = a, e = ja(), n = an(), l = Ol(), { getItems: s } = ea();
    n.isVirtual.value = !0;
    const r = $(() => {
      const p = l.value;
      if (p) {
        const v = window.getComputedStyle(p);
        return {
          start: Number.parseFloat(v.paddingBlockStart || v.paddingTop),
          end: Number.parseFloat(v.paddingBlockEnd || v.paddingBottom)
        };
      } else
        return { start: 0, end: 0 };
    }), i = ps(
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
    ), u = $(() => i.value.getVirtualItems().map((p) => ({
      item: p,
      is: Nn(e.default({
        option: t.options[p.index],
        virtualizer: i.value,
        virtualItem: p
      })[0], {
        key: `${p.key}`,
        "data-index": p.index,
        "aria-setsize": t.options.length,
        "aria-posinset": p.index + 1,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${p.start}px)`,
          overflowAnchor: "none"
        }
      })
    })));
    n.virtualFocusHook.on((p) => {
      const v = t.options.findIndex((g) => Array.isArray(n.modelValue.value) ? Yt(g, n.modelValue.value[0], n.by) : Yt(g, n.modelValue.value, n.by));
      v !== -1 && (p == null || p.preventDefault(), i.value.scrollToIndex(v, { align: "start" }), requestAnimationFrame(() => {
        const g = yc(l.value);
        g && p && (g == null || g.focus());
      }));
    });
    const d = It("", 1e3), c = $(() => {
      const p = (v) => t.textContent ? t.textContent(v) : v.toString().toLowerCase();
      return t.options.map((v, g) => ({
        index: g,
        textContent: p(v)
      }));
    });
    function f(p, v) {
      var C, D, y, E;
      if (!((C = n.firstValue) != null && C.value) || !n.multiple.value || !Array.isArray(n.modelValue.value))
        return;
      const m = (D = s().filter((P) => P.ref.dataset.disabled !== "").find((P) => P.ref === n.highlightedElement.value)) == null ? void 0 : D.value;
      if (!m)
        return;
      let _ = null;
      switch (v) {
        case "prev":
        case "next": {
          _ = Pt(t.options, n.firstValue.value, m);
          break;
        }
        case "first": {
          _ = Pt(t.options, n.firstValue.value, (y = t.options) == null ? void 0 : y[0]);
          break;
        }
        case "last": {
          _ = Pt(t.options, n.firstValue.value, (E = t.options) == null ? void 0 : E[t.options.length - 1]);
          break;
        }
      }
      n.modelValue.value = _;
    }
    return n.virtualKeydownHook.on((p) => {
      var _;
      const v = p.altKey || p.ctrlKey || p.metaKey;
      if (p.key === "Tab" && !v)
        return;
      let m = en[p.key];
      if (v && p.key === "a" && n.multiple.value ? (p.preventDefault(), n.modelValue.value = [...t.options], m = "last") : p.shiftKey && m && f(p, m), ["first", "last"].includes(m)) {
        p.preventDefault();
        const C = m === "first" ? 0 : t.options.length - 1;
        i.value.scrollToIndex(C), requestAnimationFrame(() => {
          const D = s(), y = m === "first" ? D[0] : D[D.length - 1];
          n.onChangeHighlight(y.ref);
        });
      } else if (!m && !v) {
        d.value += p.key;
        const C = Number((_ = document.activeElement) == null ? void 0 : _.getAttribute("data-index")), D = c.value[C].textContent, y = c.value.map((B) => B.textContent), E = Zn(y, d.value, D), P = c.value.find((B) => B.textContent === E);
        P && (i.value.scrollToIndex(P.index, { align: "start" }), requestAnimationFrame(() => {
          const B = l.value.querySelector(`[data-index="${P.index}"]`);
          B instanceof HTMLElement && n.onChangeHighlight(B);
        }));
      }
    }), (p, v) => (b(), ve("div", {
      "data-radix-vue-virtualizer": "",
      style: Me({
        position: "relative",
        width: "100%",
        height: `${o(i).getTotalSize()}px`
      })
    }, [
      (b(!0), ve(we, null, ga(u.value, ({ is: g, item: m }) => (b(), S(qe(g), {
        key: m.index
      }))), 128))
    ], 4));
  }
}), [kc, Mc] = ee("ListboxGroup"), Xh = /* @__PURE__ */ x({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = me(void 0, "radix-vue-listbox-group");
    return Mc({ id: e }), (n, l) => (b(), S(o(O), k({ role: "group" }, t, { "aria-labelledby": o(e) }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Zh = /* @__PURE__ */ x({
  __name: "ListboxGroupLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = kc({ id: "" });
    return (n, l) => (b(), S(o(O), k(t, {
      id: o(e).id
    }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [nn, Vc] = ee("MenubarRoot"), Jh = /* @__PURE__ */ x({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), { createCollection: r } = Fe("menubar");
    r(s);
    const i = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), u = T(null), { dir: d, loop: c } = ne(e), f = be(d);
    return Vc({
      modelValue: i,
      dir: f,
      loop: c,
      onMenuOpen: (p) => {
        i.value = p, u.value = p;
      },
      onMenuClose: () => {
        i.value = "";
      },
      onMenuToggle: (p) => {
        i.value = i.value ? "" : p, u.value = p;
      }
    }), (p, v) => (b(), S(o(Vt), {
      "current-tab-stop-id": u.value,
      "onUpdate:currentTabStopId": v[0] || (v[0] = (g) => u.value = g),
      orientation: "horizontal",
      loop: o(c),
      dir: o(f),
      "as-child": ""
    }, {
      default: h(() => [
        q(o(O), {
          ref: o(l),
          role: "menubar"
        }, {
          default: h(() => [
            w(p.$slots, "default", { modelValue: o(i) })
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["current-tab-stop-id", "loop", "dir"]));
  }
}), [So, Fc] = ee("MenubarMenu"), Qh = /* @__PURE__ */ x({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a) {
    const e = me(a.value), n = nn();
    R();
    const l = T(), s = T(!1), r = $(() => n.modelValue.value === e);
    return te(r, () => {
      r.value || (s.value = !1);
    }), Fc({
      value: e,
      triggerElement: l,
      triggerId: e,
      contentId: "",
      wasKeyboardTriggerOpenRef: s
    }), (i, u) => (b(), S(o(so), {
      open: r.value,
      modal: !1,
      dir: o(n).dir.value,
      "onUpdate:open": u[0] || (u[0] = (d) => {
        d || o(n).onMenuClose();
      })
    }, {
      default: h(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir"]));
  }
}), ey = /* @__PURE__ */ x({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = nn(), e = So(), { forwardRef: n, currentElement: l } = R(), s = T(!1), r = $(() => t.modelValue.value === e.value);
    return le(() => {
      e.triggerElement = l;
    }), (i, u) => (b(), S(o(Ft), {
      "as-child": "",
      focusable: !i.disabled,
      "tab-stop-id": o(e).value
    }, {
      default: h(() => [
        q(o(Qa), { "as-child": "" }, {
          default: h(() => [
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
              onKeydown: u[2] || (u[2] = ie((d) => {
                i.disabled || (["Enter", " "].includes(d.key) && o(t).onMenuToggle(o(e).value), d.key === "ArrowDown" && o(t).onMenuOpen(o(e).value), ["Enter", " ", "ArrowDown"].includes(d.key) && (o(e).wasKeyboardTriggerOpenRef.value = !0, d.preventDefault()));
              }, ["enter", "space", "arrow-down"])),
              onFocus: u[3] || (u[3] = (d) => s.value = !0),
              onBlur: u[4] || (u[4] = (d) => s.value = !1)
            }, {
              default: h(() => [
                w(i.$slots, "default")
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
}), ty = /* @__PURE__ */ x({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(vo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ay = /* @__PURE__ */ x({
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
    r.contentId || (r.contentId = me(void 0, "radix-vue-menubar-content"));
    const { injectCollection: i } = Fe("menubar"), u = i(), d = T(!1);
    function c(f) {
      const v = f.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), m = (s.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === f.key;
      if (!m && v)
        return;
      let C = u.value.map((E) => E.dataset.value);
      m && C.reverse();
      const D = C.indexOf(r.value);
      C = s.loop.value ? Xn(C, D + 1) : C.slice(D + 1);
      const [y] = C;
      y && s.onMenuOpen(y);
    }
    return (f, p) => (b(), S(o(fo), k(o(l), {
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
      onCloseAutoFocus: p[0] || (p[0] = (v) => {
        var m;
        !!!o(s).modelValue.value && !d.value && ((m = o(r).triggerElement.value) == null || m.focus()), d.value = !1, v.preventDefault();
      }),
      onFocusOutside: p[1] || (p[1] = (v) => {
        const g = v.target;
        o(u).some((_) => _.contains(g)) && v.preventDefault();
      }),
      onInteractOutside: p[2] || (p[2] = (v) => {
        d.value = !0;
      }),
      onEntryFocus: p[3] || (p[3] = (v) => {
        o(r).wasKeyboardTriggerOpenRef.value || v.preventDefault();
      }),
      onKeydown: ie(c, ["arrow-right", "arrow-left"])
    }), {
      default: h(() => [
        w(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby"]));
  }
}), ny = /* @__PURE__ */ x({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(lo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oy = /* @__PURE__ */ x({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Oe(t);
    return R(), (s, r) => (b(), S(o(Ea), j(U({ ...e, ...o(l) })), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ly = /* @__PURE__ */ x({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(tn), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sy = /* @__PURE__ */ x({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(yo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ry = /* @__PURE__ */ x({
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
    const e = a, l = Oe(t);
    return R(), (s, r) => (b(), S(o(co), j(U({ ...e, ...o(l) })), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iy = /* @__PURE__ */ x({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(uo), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uy = /* @__PURE__ */ x({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(po), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dy = /* @__PURE__ */ x({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Oe(t);
    return R(), (s, r) => (b(), S(o(mo), j(U({ ...e, ...o(l) })), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cy = /* @__PURE__ */ x({
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
    return R(), (s, r) => (b(), S(o(ho), j(U(o(l))), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fy = /* @__PURE__ */ x({
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
    return (s, r) => (b(), S(o(go), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Ue(l) ? l.value = i : null)
    }, {
      default: h(() => [
        w(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), py = /* @__PURE__ */ x({
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
    const { injectCollection: s } = Fe("menubar"), r = nn(), i = So(), u = s();
    function d(c) {
      if (c.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let v = u.value.map((_) => _.dataset.value);
      const g = v.indexOf(i.value);
      v = r.loop.value ? Xn(v, g + 1) : v.slice(g + 1);
      const [m] = v;
      m && r.onMenuOpen(m);
    }
    return (c, f) => (b(), S(o(bo), k(o(l), {
      "data-radix-menubar-content": "",
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onKeydown: ie(d, ["arrow-right"])
    }), {
      default: h(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vy = /* @__PURE__ */ x({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(Co), k(t, { "data-radix-menubar-subtrigger": "" }), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [bt, vs] = ee(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), my = /* @__PURE__ */ x({
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
    }), s = T(""), { forwardRef: r, currentElement: i } = R(), u = T(), d = T(), { createCollection: c } = Fe("nav");
    c(u);
    const { delayDuration: f, skipDelayDuration: p, dir: v, disableClickTrigger: g, disableHoverTrigger: m } = ne(e), _ = be(v), C = It(!1, p), D = $(() => l.value !== "" || C.value ? 150 : f.value), y = Ua((E) => {
      typeof E == "string" && (s.value = l.value, l.value = E);
    }, D);
    return vs({
      isRootMenu: !0,
      modelValue: l,
      previousValue: s,
      baseId: me(void 0, "radix-navigation-menu"),
      disableClickTrigger: g,
      disableHoverTrigger: m,
      dir: _,
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
        y(E);
      },
      onTriggerLeave: () => {
        C.value = !0, y("");
      },
      onContentEnter: () => {
        y();
      },
      onContentLeave: () => {
        y("");
      },
      onItemSelect: (E) => {
        s.value = l.value, l.value = E;
      },
      onItemDismiss: () => {
        s.value = l.value, l.value = "";
      }
    }), (E, P) => (b(), S(o(O), {
      ref: o(r),
      "aria-label": "Main",
      as: E.as,
      "as-child": E.asChild,
      "data-orientation": E.orientation,
      dir: o(_),
      "data-radix-navigation-menu": ""
    }, {
      default: h(() => [
        w(E.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "dir"]));
  }
});
function on(a) {
  return a ? "open" : "closed";
}
function ms(a, t) {
  return `${a}-trigger-${t}`;
}
function Eo(a, t) {
  return `${a}-content-${t}`;
}
const Lc = "navigationMenu.linkSelect", Fa = "navigationMenu.rootContentDismiss";
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
function hs(a) {
  const t = document.activeElement;
  return a.some((e) => e === t ? !0 : (e.focus(), document.activeElement !== t));
}
function Nc(a) {
  return a.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    a.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
function ys(a) {
  return (t) => t.pointerType === "mouse" ? a(t) : void 0;
}
const [Po, zc] = ee("NavigationMenuItem"), hy = /* @__PURE__ */ x({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(a) {
    const t = a;
    R();
    const { injectCollection: e } = Fe("nav"), n = e(), l = bt(), s = me(t.value), r = T(), i = T(), u = Eo(l.baseId, s);
    let d = () => ({});
    const c = T(!1);
    async function f(m = "start") {
      const _ = document.getElementById(u);
      if (_) {
        d();
        const C = On(_);
        C.length && hs(m === "start" ? C : C.reverse());
      }
    }
    function p() {
      const m = document.getElementById(u);
      if (m) {
        const _ = On(m);
        _.length && (d = Nc(_));
      }
    }
    zc({
      value: s,
      contentId: u,
      triggerRef: r,
      focusProxyRef: i,
      wasEscapeCloseRef: c,
      onEntryKeyDown: f,
      onFocusProxyEnter: f,
      onContentFocusOutside: p,
      onRootContentClose: p
    });
    function v() {
      var m;
      l.onItemDismiss(), (m = r.value) == null || m.focus();
    }
    function g(m) {
      const _ = document.activeElement;
      if (m.keyCode === 32 || m.key === "Enter")
        if (l.modelValue.value === s) {
          v(), m.preventDefault();
          return;
        } else {
          m.target.click(), m.preventDefault();
          return;
        }
      const C = n.value.filter(
        (y) => {
          var E;
          return (E = y.parentElement) == null ? void 0 : E.hasAttribute("data-menu-item");
        }
      );
      if (!C.includes(_))
        return;
      const D = Tt(m, _, void 0, {
        itemsArray: C,
        loop: !1
      });
      D && (D == null || D.focus()), m.preventDefault(), m.stopPropagation();
    }
    return (m, _) => (b(), S(o(O), {
      "as-child": m.asChild,
      as: m.as,
      "data-menu-item": "",
      onKeydown: ie(g, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: h(() => [
        w(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Kc = /* @__PURE__ */ x({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, { injectCollection: l } = Fe("nav"), s = l(), { forwardRef: r, currentElement: i } = R(), u = bt(), d = Po(), c = ms(u.baseId, d.value), f = Eo(u.baseId, d.value), p = T(null), v = $(() => {
      const E = s.value.map((A) => A.id.split("trigger-")[1]);
      u.dir.value === "rtl" && E.reverse();
      const P = E.indexOf(u.modelValue.value), B = E.indexOf(u.previousValue.value), I = d.value === u.modelValue.value, V = B === E.indexOf(d.value);
      if (!I && !V)
        return p.value;
      const M = (() => {
        if (P !== B) {
          if (I && B !== -1)
            return P > B ? "from-end" : "from-start";
          if (V && P !== -1)
            return P > B ? "to-start" : "to-end";
        }
        return null;
      })();
      return p.value = M, M;
    });
    function g(y) {
      var E, P;
      if (n("focusOutside", y), n("interactOutside", y), !y.defaultPrevented) {
        d.onContentFocusOutside();
        const B = y.target;
        (P = (E = u.rootNavigationMenu) == null ? void 0 : E.value) != null && P.contains(B) && y.preventDefault();
      }
    }
    function m(y) {
      var E;
      if (n("pointerDownOutside", y), !y.defaultPrevented) {
        const P = y.target, B = s.value.some(
          (V) => V.contains(P)
        ), I = u.isRootMenu && ((E = u.viewport.value) == null ? void 0 : E.contains(P));
        (B || I || !u.isRootMenu) && y.preventDefault();
      }
    }
    ge((y) => {
      const E = i.value;
      if (u.isRootMenu && E) {
        const P = () => {
          var B;
          u.onItemDismiss(), d.onRootContentClose(), E.contains(document.activeElement) && ((B = d.triggerRef.value) == null || B.focus());
        };
        E.addEventListener(Fa, P), y(
          () => E.removeEventListener(Fa, P)
        );
      }
    });
    function _(y) {
      var E, P;
      n("escapeKeyDown", y), y.defaultPrevented || (u.onItemDismiss(), (P = (E = d.triggerRef) == null ? void 0 : E.value) == null || P.focus(), d.wasEscapeCloseRef.value = !0);
    }
    function C(y) {
      var V;
      if (y.target.closest("[data-radix-navigation-menu]") !== u.rootNavigationMenu.value)
        return;
      const E = y.altKey || y.ctrlKey || y.metaKey, P = y.key === "Tab" && !E, B = On(y.currentTarget);
      if (P) {
        const M = document.activeElement, A = B.findIndex(
          (K) => K === M
        ), W = y.shiftKey ? B.slice(0, A).reverse() : B.slice(A + 1, B.length);
        if (hs(W))
          y.preventDefault();
        else {
          (V = d.focusProxyRef.value) == null || V.focus();
          return;
        }
      }
      const I = Tt(
        y,
        document.activeElement,
        void 0,
        { itemsArray: B, loop: !1, enableIgnoredElement: !0 }
      );
      I == null || I.focus();
    }
    function D() {
      var E;
      const y = new Event(Fa, {
        bubbles: !0,
        cancelable: !0
      });
      (E = i.value) == null || E.dispatchEvent(y);
    }
    return (y, E) => (b(), S(o(gt), k({
      id: o(f),
      ref: o(r),
      "aria-labelledby": o(c),
      "data-motion": v.value,
      "data-state": o(on)(o(u).modelValue.value === o(d).value),
      "data-orientation": o(u).orientation
    }, e, {
      onKeydown: C,
      onEscapeKeyDown: _,
      onPointerDownOutside: m,
      onFocusOutside: g,
      onDismiss: D
    }), {
      default: h(() => [
        w(y.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
  }
}), yy = /* @__PURE__ */ x({
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
    const e = a, n = t, l = Oe(n), { forwardRef: s } = R(), r = Ga(), i = bt(), u = Po(), d = $(() => u.value === i.modelValue.value), c = $(() => i.viewport.value && !i.modelValue.value && i.previousValue.value ? i.previousValue.value === u.value : !1);
    return (f, p) => o(r) ? (b(), S(Xt, {
      key: 0,
      to: o(i).viewport.value,
      disabled: !o(i).viewport.value
    }, [
      q(o(Pe), {
        present: f.forceMount || d.value || c.value
      }, {
        default: h(() => [
          q(Kc, k({
            ref: o(s),
            "data-state": o(on)(d.value),
            style: {
              pointerEvents: !d.value && o(i).isRootMenu ? "none" : void 0
            }
          }, { ...f.$attrs, ...e, ...o(l) }, {
            onPointerenter: p[0] || (p[0] = (v) => o(i).onContentEnter(o(u).value)),
            onPointerleave: p[1] || (p[1] = (v) => o(ys)(() => o(i).onContentLeave())(v)),
            onPointerDownOutside: p[2] || (p[2] = (v) => n("pointerDownOutside", v)),
            onFocusOutside: p[3] || (p[3] = (v) => n("focusOutside", v)),
            onInteractOutside: p[4] || (p[4] = (v) => n("interactOutside", v))
          }), {
            default: h(() => [
              w(f.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-state", "style"])
        ]),
        _: 3
      }, 8, ["present"])
    ], 8, ["to", "disabled"])) : ce("", !0);
  }
}), gy = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), { injectCollection: n } = Fe("nav"), l = n(), s = bt(), r = T(), i = $(() => s.orientation === "horizontal"), u = $(() => !!s.modelValue.value), d = T();
    function c() {
      d.value && (r.value = {
        size: i.value ? d.value.offsetWidth : d.value.offsetHeight,
        offset: i.value ? d.value.offsetLeft : d.value.offsetTop
      });
    }
    return ge(() => {
      if (!s.modelValue.value) {
        r.value = void 0;
        return;
      }
      const f = l.value;
      d.value = f.find(
        (p) => p.id.includes(s.modelValue.value)
      ), c();
    }), Ze(d, c), Ze(s.indicatorTrack, c), (f, p) => o(s).indicatorTrack.value ? (b(), S(Xt, {
      key: 0,
      to: o(s).indicatorTrack.value
    }, [
      q(o(Pe), {
        present: f.forceMount || u.value
      }, {
        default: h(() => {
          var v, g, m, _;
          return [
            q(o(O), k({
              ref: o(e),
              "aria-hidden": "true",
              "data-state": u.value ? "visible" : "hidden",
              "data-orientation": o(s).orientation,
              "as-child": t.asChild,
              as: f.as,
              style: {
                position: "absolute",
                ...i.value ? {
                  left: 0,
                  width: `${(v = r.value) == null ? void 0 : v.size}px`,
                  transform: `translateX(${(g = r.value) == null ? void 0 : g.offset}px)`
                } : {
                  top: 0,
                  height: `${(m = r.value) == null ? void 0 : m.size}px`,
                  transform: `translateY(${(_ = r.value) == null ? void 0 : _.offset}px)`
                }
              }
            }, f.$attrs), {
              default: h(() => [
                w(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])
          ];
        }),
        _: 3
      }, 8, ["present"])
    ], 8, ["to"])) : ce("", !0);
  }
}), by = /* @__PURE__ */ x({
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
      var i;
      const r = new CustomEvent(Lc, {
        bubbles: !0,
        cancelable: !0,
        detail: {
          originalEvent: s
        }
      });
      if (n("select", r), !r.defaultPrevented && !s.metaKey) {
        const u = new CustomEvent(
          Fa,
          {
            bubbles: !0,
            cancelable: !0
          }
        );
        (i = s.target) == null || i.dispatchEvent(u);
      }
    }
    return (s, r) => (b(), S(o(O), {
      as: s.as,
      "data-active": s.active ? "" : void 0,
      "aria-current": s.active ? "page" : void 0,
      "as-child": e.asChild,
      "data-radix-vue-collection-item": "",
      onClick: l
    }, {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
}), Cy = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(a) {
    const t = a, e = bt(), { forwardRef: n, currentElement: l } = R();
    return le(() => {
      e.onIndicatorTrackChange(l.value);
    }), (s, r) => (b(), S(o(O), {
      ref: o(n),
      style: { position: "relative" }
    }, {
      default: h(() => [
        q(o(O), k(s.$attrs, {
          "as-child": t.asChild,
          as: s.as,
          "data-orientation": o(e).orientation
        }), {
          default: h(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-orientation"])
      ]),
      _: 3
    }, 512));
  }
}), wy = /* @__PURE__ */ x({
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
    }), s = T(""), r = bt(), { forwardRef: i, currentElement: u } = R(), d = T(), c = T(), { createCollection: f } = Fe("nav");
    return f(d), vs({
      ...r,
      isRootMenu: !1,
      modelValue: l,
      previousValue: s,
      orientation: e.orientation,
      rootNavigationMenu: u,
      indicatorTrack: d,
      onIndicatorTrackChange: (p) => {
        d.value = p;
      },
      viewport: c,
      onViewportChange: (p) => {
        c.value = p;
      },
      onTriggerEnter: (p) => {
        l.value = p;
      },
      onTriggerLeave: () => {
      },
      onContentEnter: () => {
      },
      onContentLeave: () => {
      },
      onItemSelect: (p) => {
        l.value = p;
      },
      onItemDismiss: () => {
        l.value = "";
      }
    }), (p, v) => (b(), S(o(O), {
      ref: o(i),
      "data-orientation": p.orientation,
      "as-child": e.asChild,
      as: p.as,
      "data-radix-navigation-menu": ""
    }, {
      default: h(() => [
        w(p.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["data-orientation", "as-child", "as"]));
  }
}), Hc = ["aria-owns"], _y = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = bt(), n = Po(), { forwardRef: l, currentElement: s } = R(), r = T(""), i = T(""), u = It(!1, 300), d = T(!1), c = $(() => n.value === e.modelValue.value);
    le(() => {
      n.triggerRef = s, r.value = ms(e.baseId, n.value), i.value = Eo(e.baseId, n.value);
    });
    function f() {
      e.disableHoverTrigger.value || (d.value = !1, n.wasEscapeCloseRef.value = !1);
    }
    function p(D) {
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
    function _(D) {
      n.focusProxyRef.value = Ie(D);
    }
    function C(D) {
      const y = document.getElementById(n.contentId), E = D.relatedTarget, P = E === s.value, B = y == null ? void 0 : y.contains(E);
      (P || !B) && n.onFocusProxyEnter(P ? "start" : "end");
    }
    return (D, y) => (b(), ve(we, null, [
      q(o(O), k({
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
        onPointerenter: f,
        onPointermove: p,
        onPointerleave: v,
        onClick: g,
        onKeydown: m
      }), {
        default: h(() => [
          w(D.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
      c.value ? (b(), ve(we, { key: 0 }, [
        q(o(na), {
          ref: _,
          "aria-hidden": "true",
          tabindex: 0,
          onFocus: C
        }),
        o(e).viewport ? (b(), ve("span", {
          key: 0,
          "aria-owns": i.value
        }, null, 8, Hc)) : ce("", !0)
      ], 64)) : ce("", !0)
    ], 64));
  }
}), xy = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = bt(), l = T(), s = $(() => !!n.modelValue.value), r = $(() => n.modelValue.value);
    te(e, () => {
      e.value && n.onViewportChange(e.value);
    });
    const i = T();
    return te([r, s], async () => {
      var d, c;
      if (await oe(), !e.value)
        return;
      const u = (c = (d = e.value.querySelector("[data-state=open]")) == null ? void 0 : d.children) == null ? void 0 : c[0];
      i.value = u;
    }, { immediate: !0 }), Ze(i, () => {
      i.value && (l.value = {
        width: i.value.offsetWidth,
        height: i.value.offsetHeight
      });
    }), (u, d) => (b(), S(o(Pe), {
      present: u.forceMount || s.value
    }, {
      default: h(() => {
        var c, f;
        return [
          q(o(O), k(u.$attrs, {
            ref: o(t),
            as: u.as,
            "as-child": u.asChild,
            "data-state": o(on)(s.value),
            "data-orientation": o(n).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && o(n).isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": l.value ? `${(c = l.value) == null ? void 0 : c.width}px` : void 0,
              "--radix-navigation-menu-viewport-height": l.value ? `${(f = l.value) == null ? void 0 : f.height}px` : void 0
            },
            onPointerenter: d[0] || (d[0] = (p) => o(n).onContentEnter(o(n).modelValue.value)),
            onPointerleave: d[1] || (d[1] = (p) => o(ys)(() => o(n).onContentLeave())(p))
          }), {
            default: h(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child", "data-state", "data-orientation", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function gs(a) {
  const { disabled: t } = a, e = T(), n = fa(), l = () => window.clearTimeout(e.value), s = (p) => {
    l(), !t.value && (n.trigger(), e.value = window.setTimeout(() => {
      s(60);
    }, p));
  }, r = () => {
    s(400);
  }, i = () => {
    l();
  }, u = T(!1), d = $(() => Ie(a.target)), c = (p) => {
    p.button !== 0 || u.value || (p.preventDefault(), u.value = !0, r());
  }, f = () => {
    u.value = !1, i();
  };
  return Ye && (Ve(d || window, "pointerdown", c), Ve(window, "pointerup", f), Ve(window, "pointercancel", f)), {
    isPressed: u,
    onTrigger: n.on
  };
}
function Jo(a, t = T({})) {
  return Dl(() => new zr(a.value, t.value));
}
function Wc(a, t = T({})) {
  return Dl(() => new Nr(a.value, t.value));
}
function Qo(a, t, e) {
  let n = a === "+" ? t + e : t - e;
  if (t % 1 !== 0 || e % 1 !== 0) {
    const l = t.toString().split("."), s = e.toString().split("."), r = l[1] && l[1].length || 0, i = s[1] && s[1].length || 0, u = 10 ** Math.max(r, i);
    t = Math.round(t * u), e = Math.round(e * u), n = a === "+" ? t + e : t - e, n /= u;
  }
  return n;
}
const jc = ["value", "name", "disabled", "required"], [Do, Uc] = ee("NumberFieldRoot"), Sy = /* @__PURE__ */ x({
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
    const e = a, n = t, { disabled: l, min: s, max: r, step: i, locale: u, formatOptions: d, id: c } = ne(e), f = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), { primitiveElement: p, currentElement: v } = Te(), g = Je(v), m = T(), _ = $(
      () => K(f.value) === s.value || (s.value && !isNaN(f.value) ? Qo("-", f.value, i.value) < s.value : !1)
    ), C = $(
      () => K(f.value) === r.value || (r.value && !isNaN(f.value) ? Qo("+", f.value, i.value) > r.value : !1)
    );
    function D(L, G = 1) {
      var z;
      const N = I.parse(((z = m.value) == null ? void 0 : z.value) ?? "");
      e.disabled || (isNaN(N) ? f.value = s.value ?? 0 : L === "increase" ? f.value = K(N + (i.value ?? 1) * G) : f.value = K(N - (i.value ?? 1) * G));
    }
    function y(L = 1) {
      D("increase", L);
    }
    function E(L = 1) {
      D("decrease", L);
    }
    function P(L) {
      L === "min" && s.value !== void 0 ? f.value = K(s.value) : L === "max" && r.value !== void 0 && (f.value = K(r.value));
    }
    const B = Jo(u, d), I = Wc(u, d), V = $(() => B.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), M = Jo(u, d), A = $(() => isNaN(f.value) ? "" : M.format(f.value));
    function F(L) {
      return I.isValidPartialNumber(L, s.value, r.value);
    }
    function W(L) {
      m.value && (m.value.value = L);
    }
    function K(L) {
      let G;
      return i.value === void 0 || isNaN(i.value) ? G = qt(L, s.value, r.value) : G = Kr(L, s.value, r.value, i.value), G = I.parse(B.format(G)), G;
    }
    function J(L) {
      const G = I.parse(L);
      return f.value = K(G), L.length ? (isNaN(G), W(A.value)) : W(L);
    }
    return Uc({
      modelValue: f,
      handleDecrease: E,
      handleIncrease: y,
      handleMinMaxValue: P,
      inputMode: V,
      inputEl: m,
      onInputElement: (L) => m.value = L,
      textValue: A,
      validate: F,
      applyInputValue: J,
      disabled: l,
      max: r,
      min: s,
      isDecreaseDisabled: _,
      isIncreaseDisabled: C,
      id: c
    }), (L, G) => (b(), ve(we, null, [
      q(o(O), k(L.$attrs, {
        ref_key: "primitiveElement",
        ref: p,
        role: "group",
        as: L.as,
        "as-child": L.asChild,
        "data-disabled": o(l) ? "" : void 0
      }), {
        default: h(() => [
          w(L.$slots, "default", {
            modelValue: o(f),
            textValue: A.value
          })
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-disabled"]),
      o(g) ? (b(), ve("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "true",
        value: o(f),
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
      }, null, 8, jc)) : ce("", !0)
    ], 64));
  }
}), Ey = /* @__PURE__ */ x({
  __name: "NumberFieldInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: n } = Te(), l = Do();
    function s(r) {
      r.target === document.activeElement && (Math.abs(r.deltaY) <= Math.abs(r.deltaX) || (r.preventDefault(), r.deltaY > 0 ? l.handleIncrease() : r.deltaY < 0 && l.handleDecrease()));
    }
    return le(() => {
      l.onInputElement(n.value);
    }), (r, i) => (b(), S(o(O), k(t, {
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
        i[0] || (i[0] = ie(ue((u) => o(l).handleIncrease(), ["prevent"]), ["up"])),
        i[1] || (i[1] = ie(ue((u) => o(l).handleDecrease(), ["prevent"]), ["down"])),
        i[2] || (i[2] = ie(ue((u) => o(l).handleIncrease(10), ["prevent"]), ["page-up"])),
        i[3] || (i[3] = ie(ue((u) => o(l).handleDecrease(10), ["prevent"]), ["page-down"])),
        i[4] || (i[4] = ie(ue((u) => o(l).handleMinMaxValue("min"), ["prevent"]), ["home"])),
        i[5] || (i[5] = ie(ue((u) => o(l).handleMinMaxValue("max"), ["prevent"]), ["end"])),
        i[7] || (i[7] = ie((u) => {
          var d;
          return o(l).applyInputValue((d = u.target) == null ? void 0 : d.value);
        }, ["enter"]))
      ],
      onWheel: s,
      onBeforeinput: i[6] || (i[6] = (u) => {
        const d = u.target;
        let c = d.value.slice(0, d.selectionStart ?? void 0) + (u.data ?? "") + d.value.slice(d.selectionEnd ?? void 0);
        o(l).validate(c) || u.preventDefault();
      }),
      onBlur: i[8] || (i[8] = (u) => {
        var d;
        return o(l).applyInputValue((d = u.target) == null ? void 0 : d.value);
      })
    }), {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "value", "inputmode", "disabled", "data-disabled", "aria-valuenow", "aria-valuemin", "aria-valuemax"]));
  }
}), Py = /* @__PURE__ */ x({
  __name: "NumberFieldIncrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Do(), n = $(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isIncreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Te(), { isPressed: r, onTrigger: i } = gs({ target: s, disabled: n });
    return i(() => {
      e.handleIncrease();
    }), (u, d) => (b(), S(o(O), k(t, {
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
      onContextmenu: d[0] || (d[0] = ue(() => {
      }, ["prevent"]))
    }), {
      default: h(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
}), Dy = /* @__PURE__ */ x({
  __name: "NumberFieldDecrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Do(), n = $(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isDecreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Te(), { isPressed: r, onTrigger: i } = gs({ target: s, disabled: n });
    return i(() => {
      e.handleDecrease();
    }), (u, d) => (b(), S(o(O), k(t, {
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
      onContextmenu: d[0] || (d[0] = ue(() => {
      }, ["prevent"]))
    }), {
      default: h(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
}), [la, Gc] = ee("PaginationRoot"), $y = /* @__PURE__ */ x({
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
    }), u = $(() => Math.max(1, Math.ceil(e.total / e.itemsPerPage)));
    return Gc({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: l,
      disabled: s,
      showEdges: r
    }), (d, c) => (b(), S(o(O), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: h(() => [
        w(d.$slots, "default", {
          page: o(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Iy = /* @__PURE__ */ x({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(O), k(t, { "data-type": "ellipsis" }), {
      default: h(() => [
        w(e.$slots, "default", {}, () => [
          he("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), By = /* @__PURE__ */ x({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = la();
    R();
    const n = $(() => e.page.value === 1 || e.disabled.value);
    return (l, s) => (b(), S(o(O), k(t, {
      "aria-label": "First Page",
      type: l.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && o(e).onPageChange(1))
    }), {
      default: h(() => [
        w(l.$slots, "default", {}, () => [
          he("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Ty = /* @__PURE__ */ x({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = la();
    R();
    const n = $(() => e.page.value === e.pageCount.value || e.disabled.value);
    return (l, s) => (b(), S(o(O), k(t, {
      "aria-label": "Last Page",
      type: l.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && o(e).onPageChange(o(e).pageCount.value))
    }), {
      default: h(() => [
        w(l.$slots, "default", {}, () => [
          he("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function it(a, t) {
  const e = t - a + 1;
  return Array.from({ length: e }, (n, l) => l + a);
}
function qc(a) {
  return a.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Ra = "ellipsis";
function Yc(a, t, e, n) {
  const s = t, r = Math.max(a - e, 1), i = Math.min(a + e, s);
  if (n) {
    const d = Math.min(2 * e + 5, t) - 2, c = r > 3 && Math.abs(s - d - 1 + 1) > 2 && Math.abs(r - 1) > 2, f = i < s - 2 && Math.abs(s - d) > 2 && Math.abs(s - i) > 2;
    if (!c && f)
      return [...it(1, d), Ra, s];
    if (c && !f) {
      const v = it(s - d + 1, s);
      return [1, Ra, ...v];
    }
    if (c && f) {
      const v = it(r, i);
      return [1, Ra, ...v, Ra, s];
    }
    return it(1, s);
  } else {
    const u = e * 2 + 1;
    return t < u ? it(1, s) : a <= e + 1 ? it(1, u) : t - a <= e ? it(t - u + 1, s) : it(r, i);
  }
}
const Ry = /* @__PURE__ */ x({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = la(), n = $(() => qc(
      Yc(
        e.page.value,
        e.pageCount.value,
        e.siblingCount.value,
        e.showEdges.value
      )
    ));
    return (l, s) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(l.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), Ay = /* @__PURE__ */ x({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = la(), n = $(() => e.page.value === t.value), l = $(() => e.disabled.value);
    return (s, r) => (b(), S(o(O), k(t, {
      "data-type": "page",
      "aria-label": `Page ${s.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: l.value,
      type: s.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (i) => !l.value && o(e).onPageChange(s.value))
    }), {
      default: h(() => [
        w(s.$slots, "default", {}, () => [
          he(De(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Oy = /* @__PURE__ */ x({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = la(), n = $(() => e.page.value === e.pageCount.value || e.disabled.value);
    return (l, s) => (b(), S(o(O), k(t, {
      "aria-label": "Next Page",
      type: l.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && o(e).onPageChange(o(e).page.value + 1))
    }), {
      default: h(() => [
        w(l.$slots, "default", {}, () => [
          he("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), ky = /* @__PURE__ */ x({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = la(), n = $(() => e.page.value === 1 || e.disabled.value);
    return (l, s) => (b(), S(o(O), k(t, {
      "aria-label": "Previous Page",
      type: l.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && o(e).onPageChange(o(e).page.value - 1))
    }), {
      default: h(() => [
        w(l.$slots, "default", {}, () => [
          he("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Xc = ["id", "value", "name", "disabled", "required"], [Zc, Jc] = ee("PinInputRoot"), My = /* @__PURE__ */ x({
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
    const e = a, n = t, { mask: l, otp: s, placeholder: r, type: i, disabled: u, dir: d } = ne(e), { forwardRef: c } = R(), f = be(d), p = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? [],
      passive: e.modelValue === void 0
    }), v = T(/* @__PURE__ */ new Set());
    function g(_) {
      v.value.add(_);
    }
    const m = $(() => p.value.filter((C) => !!C).length === v.value.size);
    return te(p, () => {
      m.value && n("complete", p.value);
    }, { deep: !0 }), Jc({
      modelValue: p,
      mask: l,
      otp: s,
      placeholder: r,
      type: i,
      dir: f,
      disabled: u,
      isCompleted: m,
      inputElements: v,
      onInputElementChange: g
    }), (_, C) => (b(), ve(we, null, [
      q(o(O), k(_.$attrs, {
        ref: o(c),
        dir: o(f),
        "data-complete": m.value ? "" : void 0,
        "data-disabled": o(u) ? "" : void 0
      }), {
        default: h(() => [
          w(_.$slots, "default", { modelValue: o(p) })
        ]),
        _: 3
      }, 16, ["dir", "data-complete", "data-disabled"]),
      Ge("input", {
        id: _.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "true",
        value: o(p).join(""),
        name: _.name,
        disabled: o(u),
        required: _.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        },
        onFocus: C[0] || (C[0] = (D) => {
          var y, E;
          return (E = (y = Array.from(v.value)) == null ? void 0 : y[0]) == null ? void 0 : E.focus();
        })
      }, null, 40, Xc)
    ], 64));
  }
}), Vy = /* @__PURE__ */ x({
  __name: "PinInputInput",
  props: {
    index: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = Zc(), n = $(() => Array.from(e.inputElements.value)), l = $(() => t.disabled || e.disabled.value), s = $(() => e.otp.value), r = $(() => e.type.value === "number"), i = $(() => e.mask.value), { primitiveElement: u, currentElement: d } = Te();
    function c(E) {
      var I;
      const P = E.target;
      if ((((I = E.data) == null ? void 0 : I.length) ?? 0) > 1) {
        C(P.value);
        return;
      }
      if (r.value && !/^\d*$/.test(P.value)) {
        P.value = P.value.replace(/\D/g, "");
        return;
      }
      P.value = P.value.slice(-1), y(t.index, P.value);
      const B = n.value[t.index + 1];
      B && B.focus();
    }
    function f(E) {
      Tt(E, document.activeElement, void 0, {
        itemsArray: n.value,
        focus: !0,
        loop: !1,
        arrowKeyOptions: "horizontal",
        dir: e.dir.value
      });
    }
    function p(E) {
      if (E.preventDefault(), E.target.value)
        y(t.index, "");
      else {
        const I = n.value[t.index - 1];
        I && (I.focus(), y(t.index - 1, ""));
      }
    }
    function v(E) {
      E.key === "Delete" && (E.preventDefault(), y(t.index, ""));
    }
    function g(E) {
      const P = E.target;
      P.setSelectionRange(1, 1), P.value || (P.placeholder = "");
    }
    function m(E) {
      const P = E.target;
      oe(() => {
        P.value || (P.placeholder = e.placeholder.value);
      });
    }
    function _(E) {
      E.preventDefault();
      const P = E.clipboardData;
      if (!P)
        return;
      const B = P.getData("text");
      C(B);
    }
    function C(E) {
      var V;
      const P = [...e.modelValue.value], B = E.length >= n.value.length ? 0 : t.index, I = Math.min(B + E.length, n.value.length);
      for (let M = B; M < I; M++) {
        const A = n.value[M], F = E[M - B];
        r.value && !/^\d*$/.test(F) || (P[M] = F, A.focus());
      }
      e.modelValue.value = P, (V = n.value[I]) == null || V.focus();
    }
    function D(E) {
      let P = E.length - 1;
      for (; P >= 0 && E[P] === ""; )
        E.pop(), P--;
      return E;
    }
    function y(E, P) {
      const B = [...e.modelValue.value];
      B[E] = P, e.modelValue.value = D(B);
    }
    return le(() => {
      e.onInputElementChange(d.value);
    }), Be(() => {
      var E;
      (E = e.inputElements) == null || E.value.delete(d.value);
    }), (E, P) => (b(), S(o(O), {
      ref_key: "primitiveElement",
      ref: u,
      autocapitalize: "none",
      as: E.as,
      "as-child": E.asChild,
      autocomplete: s.value ? "one-time-code" : "false",
      type: i.value ? "password" : "text",
      inputmode: r.value ? "numeric" : "text",
      pattern: r.value ? "[0-9]*" : void 0,
      placeholder: o(e).placeholder.value,
      value: o(e).modelValue.value[E.index],
      disabled: l.value,
      "data-disabled": l.value ? "" : void 0,
      "data-complete": o(e).isCompleted.value ? "" : void 0,
      "aria-label": `pin input ${E.index + 1} of ${n.value.length}`,
      onInput: P[0] || (P[0] = (B) => c(B)),
      onKeydown: [
        ie(f, ["left", "right", "up", "down", "home", "end"]),
        ie(p, ["backspace"]),
        ie(v, ["delete"])
      ],
      onFocus: g,
      onBlur: m,
      onPaste: _
    }, {
      default: h(() => [
        w(E.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "autocomplete", "type", "inputmode", "pattern", "placeholder", "value", "disabled", "data-disabled", "data-complete", "aria-label"]));
  }
}), [Nt, Qc] = ee("PopoverRoot"), bs = /* @__PURE__ */ x({
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
    return Qc({
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
    }), (u, d) => (b(), S(o(Ot), null, {
      default: h(() => [
        w(u.$slots, "default", { open: o(s) })
      ]),
      _: 3
    }));
  }
}), Cs = /* @__PURE__ */ x({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Nt(), { forwardRef: n, currentElement: l } = R();
    return le(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (b(), S(qe(o(e).hasCustomAnchor.value ? o(O) : o(kt)), { "as-child": "" }, {
      default: h(() => [
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
          default: h(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), ws = /* @__PURE__ */ x({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(nt), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _s = /* @__PURE__ */ x({
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
    const e = a, n = t, l = Rt(e), { forwardRef: s } = R(), r = Nt();
    return Yn(), (i, u) => (b(), S(o(Za), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: h(() => [
        q(o(gt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => o(r).onOpenChange(!1))
        }, {
          default: h(() => [
            q(o($t), k(o(l), {
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
              default: h(() => [
                w(i.$slots, "default")
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
}), ef = /* @__PURE__ */ x({
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
    const e = a, n = t, l = Nt(), s = T(!1);
    Ca(!0);
    const r = xe(e, n), { forwardRef: i, currentElement: u } = R();
    return wa(u), (d, c) => (b(), S(_s, k(o(r), {
      ref: o(i),
      "trap-focus": o(l).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = ue(
        (f) => {
          var p;
          n("closeAutoFocus", f), s.value || (p = o(l).triggerElement.value) == null || p.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        n("pointerDownOutside", f);
        const p = f.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0, g = p.button === 2 || v;
        s.value = g;
      }),
      onFocusOutside: c[2] || (c[2] = ue(() => {
      }, ["prevent"]))
    }), {
      default: h(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), tf = /* @__PURE__ */ x({
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
    const e = a, n = t, l = Nt(), s = T(!1), r = T(!1), i = xe(e, n);
    return (u, d) => (b(), S(_s, k(o(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f;
        n("closeAutoFocus", c), c.defaultPrevented || (s.value || (f = o(l).triggerElement.value) == null || f.focus(), c.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var v;
        n("interactOutside", c), c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const f = c.target;
        ((v = o(l).triggerElement.value) == null ? void 0 : v.contains(f)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: h(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xs = /* @__PURE__ */ x({
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
    const e = a, n = t, l = Nt(), s = xe(e, n), { forwardRef: r } = R();
    return l.contentId || (l.contentId = me(void 0, "radix-vue-popover-content")), (i, u) => (b(), S(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: h(() => [
        o(l).modal.value ? (b(), S(ef, k({ key: 0 }, o(s), { ref: o(r) }), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), S(tf, k({ key: 1 }, o(s), { ref: o(r) }), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ss = /* @__PURE__ */ x({
  __name: "PopoverArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(aa), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Es = /* @__PURE__ */ x({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Nt();
    return (n, l) => (b(), S(o(O), {
      type: n.as === "button" ? "button" : void 0,
      as: n.as,
      "as-child": t.asChild,
      onClick: l[0] || (l[0] = (s) => o(e).onOpenChange(!1))
    }, {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child"]));
  }
}), Ps = /* @__PURE__ */ x({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = Nt();
    return yl(() => {
      e.hasCustomAnchor.value = !0;
    }), Be(() => {
      e.hasCustomAnchor.value = !1;
    }), (n, l) => (b(), S(o(kt), j(U(t)), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), va = 100, [af, nf] = ee("ProgressRoot"), $o = (a) => typeof a == "number";
function of(a, t) {
  return jt(a) || $o(a) && !Number.isNaN(a) && a <= t && a >= 0 ? a : (console.error(`Invalid prop \`value\` of value \`${a}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${va} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function lf(a) {
  return $o(a) && !Number.isNaN(a) && a > 0 ? a : (console.error(
    `Invalid prop \`max\` of value \`${a}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${va}\`.`
  ), va);
}
const Fy = /* @__PURE__ */ x({
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
    te(
      () => l.value,
      async (i) => {
        const u = of(i, e.max);
        u !== i && (await oe(), l.value = u);
      },
      { immediate: !0 }
    ), te(
      () => e.max,
      (i) => {
        const u = lf(e.max);
        u !== i && (s.value = u);
      },
      { immediate: !0 }
    );
    const r = $(() => jt(l.value) ? "indeterminate" : l.value === s.value ? "complete" : "loading");
    return nf({
      modelValue: l,
      max: s,
      progressState: r
    }), (i, u) => (b(), S(o(O), {
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
      default: h(() => [
        w(i.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), Ly = /* @__PURE__ */ x({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = af();
    return R(), (n, l) => {
      var s;
      return b(), S(o(O), k(t, {
        "data-state": o(e).progressState.value,
        "data-value": ((s = o(e).modelValue) == null ? void 0 : s.value) ?? void 0,
        "data-max": o(e).max.value
      }), {
        default: h(() => [
          w(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), [sf, rf] = ee("RadioGroupRoot"), Ny = /* @__PURE__ */ x({
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
    }), { disabled: r, loop: i, orientation: u, name: d, required: c, dir: f } = ne(e), p = be(f);
    return rf({
      modelValue: s,
      changeModelValue: (v) => {
        s.value = v;
      },
      disabled: r,
      loop: i,
      orientation: u,
      name: d == null ? void 0 : d.value,
      required: c
    }), (v, g) => (b(), S(o(Vt), {
      "as-child": "",
      orientation: o(u),
      dir: o(p),
      loop: o(i)
    }, {
      default: h(() => [
        q(o(O), {
          ref: o(l),
          role: "radiogroup",
          "data-disabled": o(r) ? "" : void 0,
          "as-child": v.asChild,
          as: v.as,
          required: o(c),
          "aria-orientation": o(u),
          "aria-required": o(c),
          dir: o(p),
          name: o(d)
        }, {
          default: h(() => [
            w(v.$slots, "default", { modelValue: o(s) })
          ]),
          _: 3
        }, 8, ["data-disabled", "as-child", "as", "required", "aria-orientation", "aria-required", "dir", "name"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), uf = ["value", "checked", "name", "disabled", "required"], df = /* @__PURE__ */ x({
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
    }), { value: s } = ne(e), { forwardRef: r, currentElement: i } = R(), u = Je(i), d = $(() => {
      var f;
      return e.id && i.value ? ((f = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : f.innerText) ?? e.value : void 0;
    });
    function c(f) {
      l.value = !0, u.value && f.stopPropagation();
    }
    return (f, p) => (b(), S(o(O), k(f.$attrs, {
      id: f.id,
      ref: o(r),
      role: "radio",
      type: f.as === "button" ? "button" : void 0,
      as: f.as,
      "aria-checked": o(l),
      "aria-label": d.value,
      "as-child": f.asChild,
      disabled: f.disabled ? "" : void 0,
      "data-state": o(l) ? "checked" : "unchecked",
      "data-disabled": f.disabled ? "" : void 0,
      value: o(s),
      required: f.required,
      name: f.name,
      onClick: ue(c, ["stop"])
    }), {
      default: h(() => [
        w(f.$slots, "default", { checked: o(l) }),
        o(u) ? (b(), ve("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "true",
          value: o(s),
          checked: !!o(l),
          name: f.name,
          disabled: f.disabled,
          required: f.required,
          style: {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }
        }, null, 8, uf)) : ce("", !0)
      ]),
      _: 3
    }, 16, ["id", "type", "as", "aria-checked", "aria-label", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]));
  }
}), [cf, ff] = ee("RadioGroupItem"), zy = /* @__PURE__ */ x({
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
    const t = a, { forwardRef: e, currentElement: n } = R(), l = sf(), s = $(() => l.disabled.value || t.disabled), r = $(() => l.required.value || t.required), i = $(() => {
      var f;
      return ((f = l.modelValue) == null ? void 0 : f.value) === t.value;
    });
    ff({ disabled: s, checked: i });
    const u = T(!1), d = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    Ve("keydown", (f) => {
      d.includes(f.key) && (u.value = !0);
    }), Ve("keyup", () => {
      u.value = !1;
    });
    function c() {
      setTimeout(() => {
        var f;
        u.value && ((f = n.value) == null || f.click());
      }, 0);
    }
    return (f, p) => (b(), S(o(Ft), {
      checked: i.value,
      disabled: s.value,
      "as-child": "",
      focusable: !s.value,
      active: i.value
    }, {
      default: h(() => [
        q(df, k({ ...f.$attrs, ...t }, {
          ref: o(e),
          checked: i.value,
          required: r.value,
          disabled: s.value,
          "onUpdate:checked": p[0] || (p[0] = (v) => o(l).changeModelValue(f.value)),
          onKeydown: p[1] || (p[1] = ie(ue(() => {
          }, ["prevent"]), ["enter"])),
          onFocus: c
        }), {
          default: h(() => [
            w(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["checked", "required", "disabled"])
      ]),
      _: 3
    }, 8, ["checked", "disabled", "focusable", "active"]));
  }
}), Ky = /* @__PURE__ */ x({
  __name: "RadioGroupIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t } = R(), e = cf();
    return (n, l) => (b(), S(o(Pe), {
      present: n.forceMount || o(e).checked.value
    }, {
      default: h(() => [
        q(o(O), k({
          ref: o(t),
          "data-state": o(e).checked.value ? "checked" : "unchecked",
          "data-disabled": o(e).disabled.value ? "" : void 0,
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: h(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function pf(a) {
  const t = $(() => a.start.value ? !!a.isDateDisabled(a.start.value) : !1), e = $(() => a.end.value ? !!a.isDateDisabled(a.end.value) : !1), n = $(
    () => t.value || e.value ? !1 : !!(a.start.value && a.end.value && ze(a.end.value, a.start.value))
  ), l = (c) => a.start.value ? Ae(a.start.value, c) : !1, s = (c) => a.end.value ? Ae(a.end.value, c) : !1, r = (c) => a.start.value && Ae(a.start.value, c) || a.end.value && Ae(a.end.value, c) ? !0 : a.end.value && a.start.value ? Br(c, a.start.value, a.end.value) : !1, i = $(() => {
    if (a.start.value && a.end.value || !a.start.value || !a.focusedValue.value)
      return null;
    const c = ze(a.start.value, a.focusedValue.value), f = c ? a.start.value : a.focusedValue.value, p = c ? a.focusedValue.value : a.start.value;
    return Ae(f.add({ days: 1 }), p) ? {
      start: f,
      end: p
    } : wl(f, p, a.isDateUnavailable, a.isDateDisabled) ? {
      start: f,
      end: p
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: r,
    highlightedRange: i,
    isSelectionStart: l,
    isSelectionEnd: s,
    isHighlightedStart: (c) => !i.value || !i.value.start ? !1 : Ae(i.value.start, c),
    isHighlightedEnd: (c) => !i.value || !i.value.end ? !1 : Ae(i.value.end, c)
  };
}
const vf = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, mf = {
  role: "heading",
  "aria-level": "2"
}, [sa, hf] = ee("RangeCalendarRoot"), yf = /* @__PURE__ */ x({
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
      numberOfMonths: f,
      preventDeselect: p,
      isDateUnavailable: v,
      isDateDisabled: g,
      calendarLabel: m,
      maxValue: _,
      minValue: C,
      locale: D,
      dir: y,
      nextPage: E,
      prevPage: P
    } = ne(e), { primitiveElement: B, currentElement: I } = Te(), V = be(y), M = T(), A = T(), F = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? { start: void 0, end: void 0 },
      passive: e.modelValue === void 0
    }), W = Zt({
      defaultPlaceholder: e.placeholder,
      defaultValue: F.value.start
    }), K = T(F.value.start), J = T(F.value.end), L = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? W.copy(),
      passive: e.placeholder === void 0
    });
    function G(Ce) {
      L.value = Ce.copy();
    }
    const {
      fullCalendarLabel: N,
      headingValue: z,
      isDateDisabled: X,
      isDateUnavailable: H,
      isNextButtonDisabled: Q,
      isPrevButtonDisabled: Z,
      grid: re,
      weekdays: Y,
      isOutsideVisibleView: se,
      nextPage: fe,
      prevPage: _e,
      formatter: Se
    } = Zl({
      locale: D,
      placeholder: L,
      weekStartsOn: u,
      fixedWeeks: c,
      numberOfMonths: f,
      minValue: C,
      maxValue: _,
      disabled: l,
      weekdayFormat: d,
      pagedNavigation: i,
      isDateDisabled: g.value,
      isDateUnavailable: v.value,
      calendarLabel: m,
      nextPage: E,
      prevPage: P
    }), {
      isInvalid: ye,
      isSelected: de,
      highlightedRange: Re,
      isSelectionStart: ke,
      isSelectionEnd: Ke,
      isHighlightedStart: _t,
      isHighlightedEnd: hr
    } = pf({
      start: K,
      end: J,
      isDateDisabled: X,
      isDateUnavailable: H,
      focusedValue: A
    });
    return te(F, (Ce) => {
      Ce.start && (!K.value || !Ee(K.value, Ce.start)) && (K.value = Ce.start.copy()), Ce.end && (!J.value || !Ee(J.value, Ce.end)) && (J.value = Ce.end.copy());
    }), te(K, (Ce) => {
      Ce && !Ee(Ce, L.value) && G(Ce), n("update:startValue", Ce);
    }), te([K, J], ([Ce, lt]) => {
      const We = F.value;
      if (!(We && We.start && We.end && Ce && lt && Ee(We.start, Ce) && Ee(We.end, lt)))
        if (Ce && lt) {
          if (We.start && We.end && Ee(We.start, Ce) && Ee(We.end, lt))
            return;
          ze(lt, Ce) ? F.value = {
            start: lt.copy(),
            end: Ce.copy()
          } : F.value = {
            start: Ce.copy(),
            end: lt.copy()
          };
        } else We.start && We.end && (F.value = {
          start: void 0,
          end: void 0
        });
    }), hf({
      isDateUnavailable: H,
      startValue: K,
      endValue: J,
      formatter: Se,
      modelValue: F,
      placeholder: L,
      disabled: l,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: f,
      readonly: s,
      preventDeselect: p,
      fullCalendarLabel: N,
      headingValue: z,
      isInvalid: ye,
      isDateDisabled: X,
      highlightedRange: Re,
      focusedValue: A,
      lastPressedDateValue: M,
      isSelected: de,
      isSelectionEnd: Ke,
      isSelectionStart: ke,
      isNextButtonDisabled: Q,
      isPrevButtonDisabled: Z,
      isOutsideVisibleView: se,
      nextPage: fe,
      prevPage: _e,
      parentElement: I,
      onPlaceholderChange: G,
      locale: D,
      dir: V,
      isHighlightedStart: _t,
      isHighlightedEnd: hr
    }), le(() => {
      r.value && El(I.value);
    }), (Ce, lt) => (b(), S(o(O), {
      ref_key: "primitiveElement",
      ref: B,
      as: Ce.as,
      "as-child": Ce.asChild,
      role: "application",
      "aria-label": o(N),
      "data-readonly": o(s) ? "" : void 0,
      "data-disabled": o(l) ? "" : void 0,
      "data-invalid": o(ye) ? "" : void 0,
      dir: o(V)
    }, {
      default: h(() => [
        Ge("div", vf, [
          Ge("div", mf, De(o(N)), 1)
        ]),
        w(Ce.$slots, "default", {
          date: o(L),
          grid: o(re),
          weekDays: o(Y),
          weekStartsOn: o(u),
          locale: o(D),
          fixedWeeks: o(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), gf = /* @__PURE__ */ x({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bf = /* @__PURE__ */ x({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = sa();
    return (n, l) => (b(), S(o(O), k(t, {
      "data-disabled": o(e).disabled.value ? "" : void 0
    }), {
      default: h(() => [
        w(n.$slots, "default", {
          headingValue: o(e).headingValue.value
        }, () => [
          he(De(o(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Cf = /* @__PURE__ */ x({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a) {
    const t = a, e = sa(), n = $(() => e.disabled.value ? !0 : void 0), l = $(() => e.readonly.value ? !0 : void 0);
    return (s, r) => (b(), S(o(O), k(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": l.value,
      "aria-disabled": n.value,
      "data-readonly": l.value && "",
      "data-disabled": n.value && ""
    }), {
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), wf = /* @__PURE__ */ x({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a) {
    const t = sa();
    return (e, n) => {
      var l, s;
      return b(), S(o(O), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": o(t).isSelected(e.date) ? !0 : void 0,
        "aria-disabled": o(t).isDateDisabled(e.date) || ((s = (l = o(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": o(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: h(() => [
          w(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), _f = /* @__PURE__ */ x({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xf = /* @__PURE__ */ x({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = sa();
    return (l, s) => (b(), S(o(O), k(t, {
      "aria-label": "Next page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).nextPage(t.step, t.nextPage))
    }), {
      default: h(() => [
        w(l.$slots, "default", {}, () => [
          he("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Sf = /* @__PURE__ */ x({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = sa();
    return (l, s) => (b(), S(o(O), k(t, {
      "aria-label": "Previous page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).prevPage(t.step, t.prevPage))
    }), {
      default: h(() => [
        w(l.$slots, "default", {}, () => [
          he("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Ef = /* @__PURE__ */ x({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), k(t, { "aria-hidden": "true" }), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pf = /* @__PURE__ */ x({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Df = /* @__PURE__ */ x({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $f = /* @__PURE__ */ x({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = sa(), n = Qe(), { primitiveElement: l, currentElement: s } = Te(), r = $(() => e.formatter.custom(Ne(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = $(() => e.isDateDisabled(t.day)), u = $(() => {
      var M;
      return (M = e.isDateUnavailable) == null ? void 0 : M.call(e, t.day);
    }), d = $(() => e.isSelected(t.day)), c = $(() => e.isSelectionStart(t.day)), f = $(() => e.isSelectionEnd(t.day)), p = $(() => e.isHighlightedStart(t.day)), v = $(() => e.isHighlightedEnd(t.day)), g = $(() => e.highlightedRange.value ? Tr(t.day, e.highlightedRange.value.start, e.highlightedRange.value.end) : !1), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", _ = $(() => gl(t.day, Hn())), C = $(() => !bl(t.day, t.month)), D = $(
      () => e.isOutsideVisibleView(t.day)
    ), y = $(() => t.day.day.toLocaleString(e.locale.value)), E = $(() => !e.disabled.value && Ae(t.day, e.placeholder.value));
    function P(M, A) {
      var F;
      if (!e.readonly.value && !(e.isDateDisabled(A) || (F = e.isDateUnavailable) != null && F.call(e, A))) {
        if (e.lastPressedDateValue.value = A.copy(), e.startValue.value && e.highlightedRange.value === null) {
          if (Ae(A, e.startValue.value) && !e.preventDeselect.value && !e.endValue.value) {
            e.startValue.value = void 0, e.onPlaceholderChange(A);
            return;
          } else if (!e.endValue.value) {
            M.preventDefault(), e.lastPressedDateValue.value && Ae(e.lastPressedDateValue.value, A) && (e.startValue.value = A.copy());
            return;
          }
        }
        if (e.startValue.value && e.endValue.value && Ae(e.endValue.value, A) && !e.preventDeselect.value) {
          e.startValue.value = void 0, e.endValue.value = void 0, e.onPlaceholderChange(A);
          return;
        }
        e.startValue.value ? e.endValue.value ? e.endValue.value && e.startValue.value && (e.endValue.value = void 0, e.startValue.value = A.copy()) : e.endValue.value = A.copy() : e.startValue.value = A.copy();
      }
    }
    function B(M) {
      P(M, t.day);
    }
    function I() {
      var M;
      e.isDateDisabled(t.day) || (M = e.isDateUnavailable) != null && M.call(e, t.day) || (e.focusedValue.value = t.day.copy());
    }
    function V(M) {
      M.preventDefault(), M.stopPropagation();
      const A = e.parentElement.value, F = A ? Array.from(A.querySelectorAll(m)) : [];
      let K = F.indexOf(s.value);
      const J = 7, L = e.dir.value === "rtl" ? -1 : 1;
      switch (M.code) {
        case n.ARROW_RIGHT:
          K += L;
          break;
        case n.ARROW_LEFT:
          K -= L;
          break;
        case n.ARROW_UP:
          K -= J;
          break;
        case n.ARROW_DOWN:
          K += J;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          P(M, t.day);
          return;
        default:
          return;
      }
      if (K >= 0 && K < F.length) {
        F[K].focus();
        return;
      }
      if (K < 0) {
        if (e.isPrevButtonDisabled("month"))
          return;
        e.prevPage(), oe(() => {
          const G = A ? Array.from(A.querySelectorAll(m)) : [];
          G[G.length - Math.abs(K)].focus();
        });
        return;
      }
      if (K >= F.length) {
        if (e.isNextButtonDisabled("month"))
          return;
        e.nextPage(), oe(() => {
          (A ? Array.from(A.querySelectorAll(m)) : [])[K - F.length].focus();
        });
      }
    }
    return (M, A) => (b(), S(o(O), k({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": d.value ? !0 : void 0,
      "aria-disabled": C.value || i.value || u.value ? !0 : void 0,
      "data-highlighted": g.value ? "" : void 0,
      "data-selection-start": c.value ? !0 : void 0,
      "data-selection-end": f.value ? !0 : void 0,
      "data-highlighted-start": p.value ? !0 : void 0,
      "data-highlighted-end": v.value ? !0 : void 0,
      "data-selected": d.value ? !0 : void 0,
      "data-outside-visible-view": D.value ? "" : void 0,
      "data-value": M.day.toString(),
      "data-disabled": i.value || C.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": _.value ? "" : void 0,
      "data-outside-month": C.value ? "" : void 0,
      "data-focused": E.value ? "" : void 0,
      tabindex: E.value ? 0 : C.value || i.value ? void 0 : -1,
      onClick: B,
      onFocusin: I,
      onMouseenter: I,
      onKeydown: ie(V, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: h(() => [
        w(M.$slots, "default", { dayValue: y.value }, () => [
          he(De(y.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), [He, If] = ee("ScrollAreaRoot"), Hy = /* @__PURE__ */ x({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: {},
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, n = T(0), l = T(0), s = T(), r = T(), i = T(), u = T(), d = T(!1), c = T(!1), { type: f, dir: p, scrollHideDelay: v } = ne(e), g = be(p);
    function m() {
      var y;
      (y = s.value) == null || y.scrollTo({
        top: 0
      });
    }
    function _() {
      var y;
      (y = s.value) == null || y.scrollTo({
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
      scrollTopLeft: _
    });
    const { forwardRef: C, currentElement: D } = R();
    return If({
      type: f,
      dir: g,
      scrollHideDelay: v,
      scrollArea: D,
      viewport: s,
      onViewportChange: (y) => {
        s.value = y || void 0;
      },
      content: r,
      onContentChange: (y) => {
        r.value = y;
      },
      scrollbarX: i,
      scrollbarXEnabled: d,
      scrollbarY: u,
      scrollbarYEnabled: c,
      onScrollbarXChange: (y) => {
        i.value = y || void 0;
      },
      onScrollbarYChange: (y) => {
        u.value = y || void 0;
      },
      onScrollbarXEnabledChange: (y) => {
        d.value = y;
      },
      onScrollbarYEnabledChange: (y) => {
        c.value = y;
      },
      onCornerWidthChange: (y) => {
        n.value = y;
      },
      onCornerHeightChange: (y) => {
        l.value = y;
      }
    }), (y, E) => (b(), S(o(O), {
      ref: o(C),
      "as-child": e.asChild,
      as: y.as,
      dir: o(g),
      style: Me({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        "--radix-scroll-area-corner-width": `${n.value}px`,
        "--radix-scroll-area-corner-height": `${l.value}px`
      })
    }, {
      default: h(() => [
        w(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
}), Wy = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ScrollAreaViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, { nonce: n } = ne(e), l = Ja(n), s = He(), r = T();
    le(() => {
      s.onViewportChange(r.value), s.onContentChange(u.value);
    }), t({
      viewportElement: r
    });
    const { forwardRef: i, currentElement: u } = R();
    return (d, c) => (b(), ve(we, null, [
      Ge("div", k({
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
          style: Me({
            /**
             * When horizontal scrollbar is visible: this element should be at least
             * as wide as its children for size calculations to work correctly.
             *
             * When horizontal scrollbar is NOT visible: this element's width should
             * be constrained by the parent container to enable `text-overflow: ellipsis`
             */
            minWidth: o(s).scrollbarXEnabled.value ? "fit-content" : void 0
          }),
          "as-child": e.asChild,
          as: d.as
        }, {
          default: h(() => [
            w(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["style", "as-child", "as"])
      ], 16),
      q(o(O), {
        as: "style",
        nonce: o(l)
      }, {
        default: h(() => [
          he(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
function Ds(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + n * (e - a[0]);
  };
}
function ln(a) {
  const t = $s(a.viewport, a.content), e = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, n = (a.scrollbar.size - e) * t;
  return Math.max(n, 18);
}
function $s(a, t) {
  const e = a / t;
  return Number.isNaN(e) ? 0 : e;
}
function Bf(a, t = () => {
}) {
  let e = { left: a.scrollLeft, top: a.scrollTop }, n = 0;
  return function l() {
    const s = { left: a.scrollLeft, top: a.scrollTop }, r = e.left !== s.left, i = e.top !== s.top;
    (r || i) && t(), e = s, n = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(n);
}
function el(a, t, e = "ltr") {
  const n = ln(t), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - l, r = t.content - t.viewport, i = s - n, u = e === "ltr" ? [0, r] : [r * -1, 0], d = qt(
    a,
    u[0],
    u[1]
  );
  return Ds([0, r], [0, i])(d);
}
function Aa(a) {
  return a ? Number.parseInt(a, 10) : 0;
}
function Tf(a, t, e, n = "ltr") {
  const l = ln(e), s = l / 2, r = t || s, i = l - r, u = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - i, c = e.content - e.viewport, f = n === "ltr" ? [0, c] : [c * -1, 0];
  return Ds(
    [u, d],
    f
  )(a);
}
function tl(a, t) {
  return a > 0 && a < t;
}
const Is = /* @__PURE__ */ x({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = He(), s = sn(), r = rn(), { forwardRef: i, currentElement: u } = R(), d = T(""), c = T();
    function f(C) {
      var D, y;
      if (c.value) {
        const E = C.clientX - ((D = c.value) == null ? void 0 : D.left), P = C.clientY - ((y = c.value) == null ? void 0 : y.top);
        n("onDragScroll", { x: E, y: P });
      }
    }
    function p(C) {
      C.button === 0 && (C.target.setPointerCapture(C.pointerId), c.value = u.value.getBoundingClientRect(), d.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", l.viewport && (l.viewport.value.style.scrollBehavior = "auto"), f(C));
    }
    function v(C) {
      f(C);
    }
    function g(C) {
      const D = C.target;
      D.hasPointerCapture(C.pointerId) && D.releasePointerCapture(C.pointerId), document.body.style.webkitUserSelect = d.value, l.viewport && (l.viewport.value.style.scrollBehavior = ""), c.value = void 0;
    }
    function m(C) {
      var P;
      const D = C.target, y = (P = u.value) == null ? void 0 : P.contains(D), E = s.sizes.value.content - s.sizes.value.viewport;
      y && s.handleWheelScroll(C, E);
    }
    le(() => {
      document.addEventListener("wheel", m, { passive: !1 });
    }), Be(() => {
      document.removeEventListener("wheel", m);
    });
    function _() {
      var C, D, y, E, P;
      u.value && (e.isHorizontal ? s.handleSizeChange({
        content: ((C = l.viewport.value) == null ? void 0 : C.scrollWidth) ?? 0,
        viewport: ((D = l.viewport.value) == null ? void 0 : D.offsetWidth) ?? 0,
        scrollbar: {
          size: u.value.clientWidth ?? 0,
          paddingStart: Aa(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Aa(getComputedStyle(u.value).paddingRight)
        }
      }) : s.handleSizeChange({
        content: ((y = l.viewport.value) == null ? void 0 : y.scrollHeight) ?? 0,
        viewport: ((E = l.viewport.value) == null ? void 0 : E.offsetHeight) ?? 0,
        scrollbar: {
          size: ((P = u.value) == null ? void 0 : P.clientHeight) ?? 0,
          paddingStart: Aa(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Aa(getComputedStyle(u.value).paddingRight)
        }
      }));
    }
    return Ze(u, _), Ze(l.content, _), (C, D) => (b(), S(o(O), {
      ref: o(i),
      style: { position: "absolute" },
      "data-scrollbarimpl": "",
      as: o(r).as.value,
      "as-child": o(r).asChild.value,
      onPointerdown: p,
      onPointermove: v,
      onPointerup: g
    }, {
      default: h(() => [
        w(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Rf = /* @__PURE__ */ x({
  __name: "ScrollAreaScrollbarX",
  setup(a) {
    const t = He(), e = sn(), { forwardRef: n, currentElement: l } = R();
    le(() => {
      l.value && t.onScrollbarXChange(l.value);
    });
    const s = $(() => e.sizes.value);
    return (r, i) => (b(), S(Is, {
      ref: o(n),
      "is-horizontal": !0,
      "data-orientation": "horizontal",
      style: Me({
        bottom: 0,
        left: o(t).dir.value === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: o(t).dir.value === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": s.value ? `${o(ln)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => o(e).onDragScroll(u.x))
    }, {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), Af = /* @__PURE__ */ x({
  __name: "ScrollAreaScrollbarY",
  setup(a) {
    const t = He(), e = sn(), { forwardRef: n, currentElement: l } = R();
    le(() => {
      l.value && t.onScrollbarYChange(l.value);
    });
    const s = $(() => e.sizes.value);
    return (r, i) => (b(), S(Is, {
      ref: o(n),
      "is-horizontal": !1,
      "data-orientation": "vertical",
      style: Me({
        top: 0,
        right: o(t).dir.value === "ltr" ? 0 : void 0,
        left: o(t).dir.value === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": s.value ? `${o(ln)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => o(e).onDragScroll(u.y))
    }, {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), [sn, Of] = ee("ScrollAreaScrollbarVisible"), Io = /* @__PURE__ */ x({
  __name: "ScrollAreaScrollbarVisible",
  setup(a) {
    const t = He(), e = rn(), { forwardRef: n } = R(), l = T({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), s = $(() => {
      const C = $s(l.value.viewport, l.value.content);
      return C > 0 && C < 1;
    }), r = T(), i = T(0);
    function u(C, D) {
      if (v.value) {
        const y = t.viewport.value.scrollLeft + C.deltaY;
        t.viewport.value.scrollLeft = y, tl(y, D) && C.preventDefault();
      } else {
        const y = t.viewport.value.scrollTop + C.deltaY;
        t.viewport.value.scrollTop = y, tl(y, D) && C.preventDefault();
      }
    }
    function d(C, D) {
      v.value ? i.value = D.x : i.value = D.y;
    }
    function c(C) {
      i.value = 0;
    }
    function f(C) {
      l.value = C;
    }
    function p(C, D) {
      return Tf(
        C,
        i.value,
        l.value,
        D
      );
    }
    const v = $(
      () => e.isHorizontal.value
    );
    function g(C) {
      v.value ? t.viewport.value.scrollLeft = p(
        C,
        t.dir.value
      ) : t.viewport.value.scrollTop = p(C);
    }
    function m() {
      if (v.value) {
        if (t.viewport.value && r.value) {
          const C = t.viewport.value.scrollLeft, D = el(
            C,
            l.value,
            t.dir.value
          );
          r.value.style.transform = `translate3d(${D}px, 0, 0)`;
        }
      } else if (t.viewport.value && r.value) {
        const C = t.viewport.value.scrollTop, D = el(C, l.value);
        r.value.style.transform = `translate3d(0, ${D}px, 0)`;
      }
    }
    function _(C) {
      r.value = C;
    }
    return Of({
      sizes: l,
      hasThumb: s,
      handleWheelScroll: u,
      handleThumbDown: d,
      handleThumbUp: c,
      handleSizeChange: f,
      onThumbPositionChange: m,
      onThumbChange: _,
      onDragScroll: g
    }), (C, D) => v.value ? (b(), S(Rf, k({ key: 0 }, C.$attrs, { ref: o(n) }), {
      default: h(() => [
        w(C.$slots, "default")
      ]),
      _: 3
    }, 16)) : (b(), S(Af, k({ key: 1 }, C.$attrs, { ref: o(n) }), {
      default: h(() => [
        w(C.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bs = /* @__PURE__ */ x({
  __name: "ScrollAreaScrollbarAuto",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = He(), e = rn(), { forwardRef: n } = R(), l = T(!1), s = Ua(() => {
      if (t.viewport.value) {
        const r = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, i = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
        l.value = e.isHorizontal.value ? r : i;
      }
    }, 10);
    return le(() => s()), Ze(t.viewport, s), Ze(t.content, s), (r, i) => (b(), S(o(Pe), {
      present: r.forceMount || l.value
    }, {
      default: h(() => [
        q(Io, k(r.$attrs, {
          ref: o(n),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: h(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), kf = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ScrollAreaScrollbarHover",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = He(), { forwardRef: e } = R();
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
    return le(() => {
      const i = t.scrollArea.value;
      i && (i.addEventListener("pointerenter", s), i.addEventListener("pointerleave", r));
    }), Be(() => {
      const i = t.scrollArea.value;
      i && (window.clearTimeout(n), i.removeEventListener("pointerenter", s), i.removeEventListener("pointerleave", r));
    }), (i, u) => (b(), S(o(Pe), {
      present: i.forceMount || l.value
    }, {
      default: h(() => [
        q(Bs, k(i.$attrs, {
          ref: o(e),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Mf = /* @__PURE__ */ x({
  __name: "ScrollAreaScrollbarScroll",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = He(), e = rn(), { forwardRef: n } = R(), { state: l, dispatch: s } = Nl("hidden", {
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
    ge((i) => {
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
    return ge((i) => {
      const u = t.viewport.value, d = e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (u) {
        let c = u[d];
        const f = () => {
          const p = u[d];
          c !== p && (s("SCROLL"), r()), c = p;
        };
        u.addEventListener("scroll", f), i(() => {
          u.removeEventListener("scroll", f);
        });
      }
    }), (i, u) => (b(), S(o(Pe), {
      present: i.forceMount || o(l) !== "hidden"
    }, {
      default: h(() => [
        q(Io, k(i.$attrs, { ref: o(n) }), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [rn, Vf] = ee("ScrollAreaScrollbar"), jy = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = He(), l = $(() => t.orientation === "horizontal");
    te(
      l,
      () => {
        l.value ? n.onScrollbarXEnabledChange(!0) : n.onScrollbarYEnabledChange(!0);
      },
      { immediate: !0 }
    ), Be(() => {
      n.onScrollbarXEnabledChange(!1), n.onScrollbarYEnabledChange(!1);
    });
    const { orientation: s, forceMount: r, asChild: i, as: u } = ne(t);
    return Vf({
      orientation: s,
      forceMount: r,
      isHorizontal: l,
      as: u,
      asChild: i
    }), (d, c) => o(n).type.value === "hover" ? (b(), S(kf, k({ key: 0 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: h(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "scroll" ? (b(), S(Mf, k({ key: 1 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: h(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "auto" ? (b(), S(Bs, k({ key: 2 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: h(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "always" ? (b(), S(Io, k({ key: 3 }, d.$attrs, {
      ref: o(e),
      "data-state": "visible"
    }), {
      default: h(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
}), Uy = /* @__PURE__ */ x({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = He(), n = sn();
    function l(p) {
      const g = p.target.getBoundingClientRect(), m = p.clientX - g.left, _ = p.clientY - g.top;
      n.handleThumbDown(p, { x: m, y: _ });
    }
    function s(p) {
      n.handleThumbUp(p);
    }
    const { forwardRef: r, currentElement: i } = R(), u = T(), d = $(() => e.viewport.value);
    function c() {
      if (!u.value) {
        const p = Bf(
          d.value,
          n.onThumbPositionChange
        );
        u.value = p, n.onThumbPositionChange();
      }
    }
    const f = $(() => n.sizes.value);
    return gi(f, () => {
      n.onThumbChange(i.value), d.value && (n.onThumbPositionChange(), d.value.addEventListener("scroll", c));
    }), Be(() => {
      var p;
      d.value.removeEventListener("scroll", c), (p = e.viewport.value) == null || p.removeEventListener("scroll", c);
    }), (p, v) => (b(), S(o(O), {
      ref: o(r),
      "data-state": o(n).hasThumb ? "visible" : "hidden",
      style: {
        width: "var(--radix-scroll-area-thumb-width)",
        height: "var(--radix-scroll-area-thumb-height)"
      },
      "as-child": t.asChild,
      as: p.as,
      onPointerdown: l,
      onPointerup: s
    }, {
      default: h(() => [
        w(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-state", "as-child", "as"]));
  }
}), Ff = /* @__PURE__ */ x({
  __name: "ScrollAreaCornerImpl",
  setup(a) {
    const t = He(), e = T(0), n = T(0), l = $(() => !!e.value && !!n.value);
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
    return Ze(t.scrollbarX.value, s), Ze(t.scrollbarY.value, r), te(() => t.scrollbarX.value, s), te(() => t.scrollbarY.value, r), (i, u) => {
      var d;
      return l.value ? (b(), S(o(O), k({
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
        default: h(() => [
          w(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])) : ce("", !0);
    };
  }
}), Gy = /* @__PURE__ */ x({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = He(), l = $(
      () => !!n.scrollbarX.value && !!n.scrollbarY.value
    ), s = $(
      () => n.type.value !== "scroll" && l.value
    );
    return (r, i) => s.value ? (b(), S(Ff, k({ key: 0 }, t, { ref: o(e) }), {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
}), Lf = ["default-value"], Nf = /* @__PURE__ */ x({
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
    return (l, s) => (b(), S(o(na), { "as-child": "" }, {
      default: h(() => [
        Wa(Ge("select", k({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => Ue(e) ? e.value = r : null),
          "default-value": o(e)
        }), [
          w(l.$slots, "default")
        ], 16, Lf), [
          [Sr, o(e)]
        ])
      ]),
      _: 3
    }));
  }
}), zf = {
  key: 0,
  value: ""
}, [Ct, Ts] = ee("SelectRoot"), [Kf, Hf] = ee("SelectRoot"), qy = /* @__PURE__ */ x({
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
    }), d = T(!1), { required: c, disabled: f, dir: p } = ne(e), v = be(p);
    Ts({
      triggerElement: r,
      onTriggerChange: (C) => {
        r.value = C;
      },
      valueElement: i,
      onValueElementChange: (C) => {
        i.value = C;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (C) => {
        d.value = C;
      },
      contentId: "",
      modelValue: l,
      onValueChange: (C) => {
        l.value = C;
      },
      open: s,
      required: c,
      onOpenChange: (C) => {
        s.value = C;
      },
      dir: v,
      triggerPointerDownPosRef: u,
      disabled: f
    });
    const g = Je(r), m = T(/* @__PURE__ */ new Set()), _ = $(() => Array.from(m.value).map((C) => {
      var D;
      return (D = C.props) == null ? void 0 : D.value;
    }).join(";"));
    return Hf({
      onNativeOptionAdd: (C) => {
        m.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        m.value.delete(C);
      }
    }), (C, D) => (b(), S(o(Ot), null, {
      default: h(() => [
        w(C.$slots, "default", {
          modelValue: o(l),
          open: o(s)
        }),
        o(g) ? (b(), S(Nf, k({ key: _.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: o(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: o(f),
          value: o(l),
          onChange: D[0] || (D[0] = (y) => l.value = y.target.value)
        }), {
          default: h(() => [
            o(l) === void 0 ? (b(), ve("option", zf)) : ce("", !0),
            (b(!0), ve(we, null, ga(Array.from(m.value), (y) => (b(), S(qe(y), k({ ref_for: !0 }, y.props, {
              key: y.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ce("", !0)
      ]),
      _: 3
    }));
  }
}), Wf = [" ", "Enter", "ArrowUp", "ArrowDown"], jf = [" ", "Enter"], at = 10;
function Rs(a) {
  return a === "" || jt(a);
}
const Yy = /* @__PURE__ */ x({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Ct(), n = $(() => {
      var v;
      return ((v = e.disabled) == null ? void 0 : v.value) || t.disabled;
    }), { forwardRef: l, currentElement: s } = R();
    e.contentId || (e.contentId = me(void 0, "radix-vue-select-content")), le(() => {
      e.triggerElement = s;
    });
    const { injectCollection: r } = Fe(), i = r(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = _a(i);
    function f() {
      n.value || (e.onOpenChange(!0), c());
    }
    function p(v) {
      f(), e.triggerPointerDownPosRef.value = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      };
    }
    return (v, g) => (b(), S(o(kt), { "as-child": "" }, {
      default: h(() => {
        var m, _, C, D;
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
            dir: (_ = o(e)) == null ? void 0 : _.dir.value,
            "data-state": (C = o(e)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": o(Rs)((D = o(e).modelValue) == null ? void 0 : D.value) ? "" : void 0,
            "as-child": v.asChild,
            as: v.as,
            onClick: g[0] || (g[0] = (y) => {
              var E;
              (E = y == null ? void 0 : y.currentTarget) == null || E.focus();
            }),
            onPointerdown: g[1] || (g[1] = (y) => {
              if (y.pointerType === "touch")
                return y.preventDefault();
              const E = y.target;
              E.hasPointerCapture(y.pointerId) && E.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && (p(y), y.preventDefault());
            }),
            onPointerup: g[2] || (g[2] = ue(
              (y) => {
                y.pointerType === "touch" && p(y);
              },
              ["prevent"]
            )),
            onKeydown: g[3] || (g[3] = (y) => {
              const E = o(u) !== "";
              !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && E && y.key === " " || (o(d)(y.key), o(Wf).includes(y.key) && (f(), y.preventDefault()));
            })
          }, {
            default: h(() => [
              w(v.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Xy = /* @__PURE__ */ x({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(nt), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bo, Uf] = ee("SelectItemAlignedPosition"), Gf = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(a, { emit: t }) {
    const e = a, n = t, { injectCollection: l } = Fe(), s = Ct(), r = wt(), i = l(), u = T(!1), d = T(!0), c = T(), { forwardRef: f, currentElement: p } = R(), { viewport: v, selectedItem: g, selectedItemText: m, focusSelectedItem: _ } = r;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && c.value && p.value && (v != null && v.value) && (g != null && g.value) && (m != null && m.value)) {
        const E = s.triggerElement.value.getBoundingClientRect(), P = p.value.getBoundingClientRect(), B = s.valueElement.value.getBoundingClientRect(), I = m.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Se = I.left - P.left, ye = B.left - Se, de = E.left - ye, Re = E.width + de, ke = Math.max(Re, P.width), Ke = window.innerWidth - at, _t = qt(ye, at, Ke - ke);
          c.value.style.minWidth = `${Re}px`, c.value.style.left = `${_t}px`;
        } else {
          const Se = P.right - I.right, ye = window.innerWidth - B.right - Se, de = window.innerWidth - E.right - ye, Re = E.width + de, ke = Math.max(Re, P.width), Ke = window.innerWidth - at, _t = qt(
            ye,
            at,
            Ke - ke
          );
          c.value.style.minWidth = `${Re}px`, c.value.style.right = `${_t}px`;
        }
        const V = i.value, M = window.innerHeight - at * 2, A = v.value.scrollHeight, F = window.getComputedStyle(p.value), W = Number.parseInt(
          F.borderTopWidth,
          10
        ), K = Number.parseInt(F.paddingTop, 10), J = Number.parseInt(
          F.borderBottomWidth,
          10
        ), L = Number.parseInt(
          F.paddingBottom,
          10
        ), G = W + K + A + L + J, N = Math.min(
          g.value.offsetHeight * 5,
          G
        ), z = window.getComputedStyle(v.value), X = Number.parseInt(z.paddingTop, 10), H = Number.parseInt(
          z.paddingBottom,
          10
        ), Q = E.top + E.height / 2 - at, Z = M - Q, re = g.value.offsetHeight / 2, Y = g.value.offsetTop + re, se = W + K + Y, fe = G - se;
        if (se <= Q) {
          const Se = g.value === V[V.length - 1];
          c.value.style.bottom = "0px";
          const ye = p.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, de = Math.max(
            Z,
            re + (Se ? H : 0) + ye + J
          ), Re = se + de;
          c.value.style.height = `${Re}px`;
        } else {
          const Se = g.value === V[0];
          c.value.style.top = "0px";
          const de = Math.max(
            Q,
            W + v.value.offsetTop + (Se ? X : 0) + re
          ) + fe;
          c.value.style.height = `${de}px`, v.value.scrollTop = se - Q + v.value.offsetTop;
        }
        c.value.style.margin = `${at}px 0`, c.value.style.minHeight = `${N}px`, c.value.style.maxHeight = `${M}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const D = T("");
    le(async () => {
      await oe(), C(), p.value && (D.value = window.getComputedStyle(p.value).zIndex);
    });
    function y(E) {
      E && d.value === !0 && (C(), _ == null || _(), d.value = !1);
    }
    return Uf({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: y
    }), (E, P) => (b(), ve("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Me({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D.value
      })
    }, [
      q(o(O), k({
        ref: o(f),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...E.$attrs, ...e }), {
        default: h(() => [
          w(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), qf = /* @__PURE__ */ x({
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
    const e = Rt(a);
    return (n, l) => (b(), S(o($t), k(o(e), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [wt, Yf] = ee("SelectContent"), Xf = /* @__PURE__ */ x({
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
    const { createCollection: s } = Fe(), r = T();
    wa(r);
    const i = s(r), { search: u, handleTypeaheadSearch: d } = _a(i), c = T(), f = T(), p = T(), v = T(!1), g = T(!1);
    function m() {
      f.value && r.value && Bn([f.value, r.value]);
    }
    te(v, () => {
      m();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: C } = l;
    ge((P) => {
      if (!r.value)
        return;
      let B = { x: 0, y: 0 };
      const I = (M) => {
        var A, F;
        B = {
          x: Math.abs(
            Math.round(M.pageX) - (((A = C.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(M.pageY) - (((F = C.value) == null ? void 0 : F.y) ?? 0)
          )
        };
      }, V = (M) => {
        var A;
        M.pointerType !== "touch" && (B.x <= 10 && B.y <= 10 ? M.preventDefault() : (A = r.value) != null && A.contains(M.target) || _(!1), document.removeEventListener("pointermove", I), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", I), document.addEventListener("pointerup", V, {
        capture: !0,
        once: !0
      })), P(() => {
        document.removeEventListener("pointermove", I), document.removeEventListener("pointerup", V, {
          capture: !0
        });
      });
    });
    function D(P) {
      const B = P.ctrlKey || P.altKey || P.metaKey;
      if (P.key === "Tab" && P.preventDefault(), !B && P.key.length === 1 && d(P.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(P.key)) {
        let I = i.value;
        if (["ArrowUp", "End"].includes(P.key) && (I = I.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(P.key)) {
          const V = P.target, M = I.indexOf(V);
          I = I.slice(M + 1);
        }
        setTimeout(() => Bn(I)), P.preventDefault();
      }
    }
    const y = $(() => e.position === "popper" ? e : {}), E = Rt(y.value);
    return Yf({
      content: r,
      viewport: c,
      onViewportChange: (P) => {
        c.value = P;
      },
      itemRefCallback: (P, B, I) => {
        var A, F;
        const V = !g.value && !I;
        (((A = l.modelValue) == null ? void 0 : A.value) !== void 0 && ((F = l.modelValue) == null ? void 0 : F.value) === B || V) && (f.value = P, V && (g.value = !0));
      },
      selectedItem: f,
      selectedItemText: p,
      onItemLeave: () => {
        var P;
        (P = r.value) == null || P.focus();
      },
      itemTextRefCallback: (P, B, I) => {
        var A, F;
        const V = !g.value && !I;
        (((A = l.modelValue) == null ? void 0 : A.value) !== void 0 && ((F = l.modelValue) == null ? void 0 : F.value) === B || V) && (p.value = P);
      },
      focusSelectedItem: m,
      position: e.position,
      isPositioned: v,
      searchRef: u
    }), (P, B) => (b(), S(o(Za), {
      "as-child": "",
      onMountAutoFocus: B[6] || (B[6] = ue(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: B[7] || (B[7] = (I) => {
        var V;
        n("closeAutoFocus", I), !I.defaultPrevented && ((V = o(l).triggerElement.value) == null || V.focus({ preventScroll: !0 }), I.preventDefault());
      })
    }, {
      default: h(() => [
        q(o(gt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: B[2] || (B[2] = ue(() => {
          }, ["prevent"])),
          onDismiss: B[3] || (B[3] = (I) => o(l).onOpenChange(!1)),
          onEscapeKeyDown: B[4] || (B[4] = (I) => n("escapeKeyDown", I)),
          onPointerDownOutside: B[5] || (B[5] = (I) => n("pointerDownOutside", I))
        }, {
          default: h(() => [
            (b(), S(qe(
              P.position === "popper" ? qf : Gf
            ), k({ ...P.$attrs, ...o(E) }, {
              id: o(l).contentId,
              ref: (I) => {
                r.value = o(Ie)(I);
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
              onContextmenu: B[0] || (B[0] = ue(() => {
              }, ["prevent"])),
              onPlaced: B[1] || (B[1] = (I) => v.value = !0),
              onKeydown: D
            }), {
              default: h(() => [
                w(P.$slots, "default")
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
}), Zf = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(a) {
    return Ts(a.context), (e, n) => w(e.$slots, "default");
  }
}), Jf = { key: 1 }, Zy = /* @__PURE__ */ x({
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
    le(() => {
      r.value = new DocumentFragment();
    });
    const i = T(), u = $(() => e.forceMount || s.open.value);
    return (d, c) => {
      var f;
      return u.value ? (b(), S(o(Pe), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: !0
      }, {
        default: h(() => [
          q(Xf, j(U({ ...o(l), ...d.$attrs })), {
            default: h(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((f = i.value) != null && f.present) && r.value ? (b(), ve("div", Jf, [
        (b(), S(Xt, { to: r.value }, [
          q(Zf, { context: o(s) }, {
            default: h(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ce("", !0);
    };
  }
}), Jy = /* @__PURE__ */ x({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a, e = Ct(), n = wt(zt);
    return (l, s) => o(e).open.value && o(n).position === "popper" ? (b(), S(o(aa), j(k({ key: 0 }, t)), {
      default: h(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
}), Qy = /* @__PURE__ */ x({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(O), k({ "aria-hidden": "true" }, t), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [As, Qf] = ee("SelectItem"), eg = /* @__PURE__ */ x({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { disabled: e } = ne(t), n = Ct(), l = wt(zt), { forwardRef: s, currentElement: r } = R(), i = $(() => {
      var m;
      return ((m = n.modelValue) == null ? void 0 : m.value) === t.value;
    }), u = T(!1), d = T(t.textValue ?? ""), c = me(void 0, "radix-vue-select-item-text");
    async function f(m) {
      await oe(), !(m != null && m.defaultPrevented) && (e.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function p(m) {
      var _;
      await oe(), !m.defaultPrevented && (e.value ? (_ = l.onItemLeave) == null || _.call(l) : m.currentTarget.focus({ preventScroll: !0 }));
    }
    async function v(m) {
      var _;
      await oe(), !m.defaultPrevented && m.currentTarget === document.activeElement && ((_ = l.onItemLeave) == null || _.call(l));
    }
    async function g(m) {
      var C;
      await oe(), !(m.defaultPrevented || ((C = l.searchRef) == null ? void 0 : C.value) !== "" && m.key === " ") && (jf.includes(m.key) && f(), m.key === " " && m.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return le(() => {
      r.value && l.itemRefCallback(
        r.value,
        t.value,
        t.disabled
      );
    }), Qf({
      value: t.value,
      disabled: e,
      textId: c,
      isSelected: i,
      onItemTextChange: (m) => {
        d.value = ((d.value || (m == null ? void 0 : m.textContent)) ?? "").trim();
      }
    }), (m, _) => (b(), S(o(O), {
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
      onFocus: _[0] || (_[0] = (C) => u.value = !0),
      onBlur: _[1] || (_[1] = (C) => u.value = !1),
      onPointerup: f,
      onPointerdown: _[2] || (_[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: _[3] || (_[3] = ue(() => {
      }, ["prevent", "stop"])),
      onPointermove: p,
      onPointerleave: v,
      onKeydown: g
    }, {
      default: h(() => [
        w(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), tg = /* @__PURE__ */ x({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = As();
    return (n, l) => o(e).isSelected.value ? (b(), S(o(O), k({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
}), [ep, tp] = ee("SelectGroup"), ag = /* @__PURE__ */ x({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = me(void 0, "radix-vue-select-group");
    return tp({ id: e }), (n, l) => (b(), S(o(O), k({ role: "group" }, t, { "aria-labelledby": o(e) }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), ng = /* @__PURE__ */ x({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = ep({ id: "" });
    return (n, l) => (b(), S(o(O), k(t, {
      id: o(e).id
    }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), og = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Ct(), n = wt(zt), l = Kf(), s = As(), { forwardRef: r, currentElement: i } = R(), u = $(() => {
      var d;
      return pt("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return le(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), l.onNativeOptionAdd(u.value));
    }), Fn(() => {
      l.onNativeOptionRemove(u.value);
    }), (d, c) => (b(), ve(we, null, [
      q(o(O), k({
        id: o(s).textId,
        ref: o(r)
      }, { ...t, ...d.$attrs }), {
        default: h(() => [
          w(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      o(s).isSelected.value && o(e).valueElement.value && !o(e).valueElementHasChildren.value ? (b(), S(Xt, {
        key: 0,
        to: o(e).valueElement.value
      }, [
        w(d.$slots, "default")
      ], 8, ["to"])) : ce("", !0)
    ], 64));
  }
}), lg = /* @__PURE__ */ x({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { nonce: e } = ne(t), n = Ja(e), l = wt(zt), s = l.position === "item-aligned" ? Bo() : void 0, { forwardRef: r, currentElement: i } = R();
    le(() => {
      l == null || l.onViewportChange(i.value);
    });
    const u = T(0);
    function d(c) {
      const f = c.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: v } = s ?? {};
      if (p != null && p.value && (v != null && v.value)) {
        const g = Math.abs(u.value - f.scrollTop);
        if (g > 0) {
          const m = window.innerHeight - at * 2, _ = Number.parseFloat(
            v.value.style.minHeight
          ), C = Number.parseFloat(v.value.style.height), D = Math.max(_, C);
          if (D < m) {
            const y = D + g, E = Math.min(m, y), P = y - E;
            v.value.style.height = `${E}px`, v.value.style.bottom === "0px" && (f.scrollTop = P > 0 ? P : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = f.scrollTop;
    }
    return (c, f) => (b(), ve(we, null, [
      q(o(O), k({
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
        default: h(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      q(o(O), {
        as: "style",
        nonce: o(n)
      }, {
        default: h(() => [
          he(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Os = /* @__PURE__ */ x({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(a, { emit: t }) {
    const e = t, { injectCollection: n } = Fe(), l = n(), s = wt(zt), r = T(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    ge(() => {
      const c = l.value.find(
        (f) => f === document.activeElement
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
    return Fn(() => i()), (c, f) => {
      var p;
      return b(), S(o(O), k({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (p = c.$parent) == null ? void 0 : p.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: f[0] || (f[0] = () => {
          i();
        })
      }), {
        default: h(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), sg = /* @__PURE__ */ x({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = wt(zt), e = t.position === "item-aligned" ? Bo() : void 0, { forwardRef: n, currentElement: l } = R(), s = T(!1);
    return ge((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), r(() => c.removeEventListener("scroll", d));
      }
    }), te(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (b(), S(Os, {
      key: 0,
      ref: o(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = o(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : ce("", !0);
  }
}), rg = /* @__PURE__ */ x({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = wt(zt), e = t.position === "item-aligned" ? Bo() : void 0, { forwardRef: n, currentElement: l } = R(), s = T(!1);
    return ge((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          const f = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < f;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), r(() => c.removeEventListener("scroll", d));
      }
    }), te(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (b(), S(Os, {
      key: 0,
      ref: o(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = o(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : ce("", !0);
  }
}), ig = /* @__PURE__ */ x({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = Ct(), l = ja();
    return yl(() => {
      var r;
      const s = !!qa((r = l == null ? void 0 : l.default) == null ? void 0 : r.call(l)).length;
      n.onValueElementHasChildrenChange(s);
    }), le(() => {
      n.valueElement = e;
    }), (s, r) => (b(), S(o(O), {
      ref: o(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: h(() => {
        var i;
        return [
          o(Rs)((i = o(n).modelValue) == null ? void 0 : i.value) ? (b(), ve(we, { key: 0 }, [
            he(De(s.placeholder), 1)
          ], 64)) : w(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ug = /* @__PURE__ */ x({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return (t, e) => (b(), S(o(O), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: h(() => [
        w(t.$slots, "default", {}, () => [
          he("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ks = /* @__PURE__ */ x({
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
    const l = $(
      () => n(t.orientation) ? t.orientation : "horizontal"
    ), s = $(
      () => l.value === "vertical" ? t.orientation : void 0
    ), r = $(
      () => t.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, u) => (b(), S(o(O), k({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": l.value
    }, r.value), {
      default: h(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), ap = /* @__PURE__ */ x({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(ks, j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function np(a = [], t, e) {
  const n = [...a];
  return n[e] = t, n.sort((l, s) => l - s);
}
function Ms(a, t, e) {
  const s = 100 / (e - t) * (a - t);
  return qt(s, 0, 100);
}
function op(a, t) {
  return t > 2 ? `Value ${a + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][a] : void 0;
}
function lp(a, t) {
  if (a.length === 1)
    return 0;
  const e = a.map((l) => Math.abs(l - t)), n = Math.min(...e);
  return e.indexOf(n);
}
function sp(a, t, e) {
  const n = a / 2, s = To([0, 50], [0, n]);
  return (n - s(t) * e) * e;
}
function rp(a) {
  return a.slice(0, -1).map((t, e) => a[e + 1] - t);
}
function ip(a, t) {
  if (t > 0) {
    const e = rp(a);
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
function up(a) {
  return (String(a).split(".")[1] || "").length;
}
function dp(a, t) {
  const e = 10 ** t;
  return Math.round(a * e) / e;
}
const Vs = ["PageUp", "PageDown"], Fs = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ls = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Ns, zs] = ee(["SliderVertical", "SliderHorizontal"]), Ks = /* @__PURE__ */ x({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = un();
    return (s, r) => (b(), S(o(O), k({ "data-slider-impl": "" }, e, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : o(Vs).concat(o(Fs)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
      default: h(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cp = /* @__PURE__ */ x({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, { max: l, min: s, dir: r, inverted: i } = ne(e), { forwardRef: u, currentElement: d } = R(), c = T(), f = $(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function p(v) {
      const g = c.value || d.value.getBoundingClientRect(), m = [0, g.width], _ = f.value ? [s.value, l.value] : [l.value, s.value], C = To(m, _);
      return c.value = g, C(v - g.left);
    }
    return zs({
      startEdge: f.value ? "left" : "right",
      endEdge: f.value ? "right" : "left",
      direction: f.value ? 1 : -1,
      size: "width"
    }), (v, g) => (b(), S(Ks, {
      ref: o(u),
      dir: o(r),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: g[0] || (g[0] = (m) => {
        const _ = p(m.clientX);
        n("slideStart", _);
      }),
      onSlideMove: g[1] || (g[1] = (m) => {
        const _ = p(m.clientX);
        n("slideMove", _);
      }),
      onSlideEnd: g[2] || (g[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: g[3] || (g[3] = (m) => {
        const _ = f.value ? "from-left" : "from-right", C = o(Ls)[_].includes(m.key);
        n("stepKeyDown", m, C ? -1 : 1);
      }),
      onEndKeyDown: g[4] || (g[4] = (m) => n("endKeyDown", m)),
      onHomeKeyDown: g[5] || (g[5] = (m) => n("homeKeyDown", m))
    }, {
      default: h(() => [
        w(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), fp = /* @__PURE__ */ x({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, { max: l, min: s, inverted: r } = ne(e), { forwardRef: i, currentElement: u } = R(), d = T(), c = $(() => !r.value);
    function f(p) {
      const v = d.value || u.value.getBoundingClientRect(), g = [0, v.height], m = c.value ? [l.value, s.value] : [s.value, l.value], _ = To(g, m);
      return d.value = v, _(p - v.top);
    }
    return zs({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (p, v) => (b(), S(Ks, {
      ref: o(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: v[0] || (v[0] = (g) => {
        const m = f(g.clientY);
        n("slideStart", m);
      }),
      onSlideMove: v[1] || (v[1] = (g) => {
        const m = f(g.clientY);
        n("slideMove", m);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        d.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (g) => {
        const m = c.value ? "from-bottom" : "from-top", _ = o(Ls)[m].includes(g.key);
        n("stepKeyDown", g, _ ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: v[5] || (v[5] = (g) => n("homeKeyDown", g))
    }, {
      default: h(() => [
        w(p.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), pp = ["value", "name", "disabled", "step"], [un, vp] = ee("SliderRoot"), dg = /* @__PURE__ */ x({
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
    const e = a, n = t, { min: l, max: s, step: r, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = ne(e), f = be(c), { forwardRef: p, currentElement: v } = R(), g = Je(v);
    Jt();
    const m = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), _ = T(0), C = T(m.value);
    function D(I) {
      const V = lp(m.value, I);
      P(I, V);
    }
    function y(I) {
      P(I, _.value);
    }
    function E() {
      const I = C.value[_.value];
      m.value[_.value] !== I && n("valueCommit", Er(m.value));
    }
    function P(I, V, { commit: M } = { commit: !1 }) {
      var J;
      const A = up(r.value), F = dp(Math.round((I - l.value) / r.value) * r.value + l.value, A), W = qt(F, l.value, s.value), K = np(m.value, W, V);
      if (ip(K, i.value * r.value)) {
        _.value = K.indexOf(W);
        const L = String(K) !== String(m.value);
        L && M && n("valueCommit", K), L && ((J = B.value[_.value]) == null || J.focus(), m.value = K);
      }
    }
    const B = T([]);
    return vp({
      modelValue: m,
      valueIndexToChangeRef: _,
      thumbElements: B,
      orientation: u,
      min: l,
      max: s,
      disabled: d
    }), (I, V) => (b(), ve(we, null, [
      q(o(Qt), null, {
        default: h(() => [
          (b(), S(qe(o(u) === "horizontal" ? cp : fp), k(I.$attrs, {
            ref: o(p),
            "as-child": I.asChild,
            as: I.as,
            min: o(l),
            max: o(s),
            dir: o(f),
            inverted: I.inverted,
            "aria-disabled": o(d),
            "data-disabled": o(d) ? "" : void 0,
            onPointerdown: V[0] || (V[0] = () => {
              o(d) || (C.value = o(m));
            }),
            onSlideStart: V[1] || (V[1] = (M) => !o(d) && D(M)),
            onSlideMove: V[2] || (V[2] = (M) => !o(d) && y(M)),
            onSlideEnd: V[3] || (V[3] = (M) => !o(d) && E()),
            onHomeKeyDown: V[4] || (V[4] = (M) => !o(d) && P(o(l), 0, { commit: !0 })),
            onEndKeyDown: V[5] || (V[5] = (M) => !o(d) && P(o(s), o(m).length - 1, { commit: !0 })),
            onStepKeyDown: V[6] || (V[6] = (M, A) => {
              if (!o(d)) {
                const K = o(Vs).includes(M.key) || M.shiftKey && o(Fs).includes(M.key) ? 10 : 1, J = _.value, L = o(m)[J], G = o(r) * K * A;
                P(L + G, J, { commit: !0 });
              }
            })
          }), {
            default: h(() => [
              w(I.$slots, "default", { modelValue: o(m) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      o(g) ? (b(!0), ve(we, { key: 0 }, ga(o(m), (M, A) => (b(), ve("input", {
        key: A,
        value: M,
        type: "number",
        style: { display: "none" },
        name: I.name ? I.name + (o(m).length > 1 ? "[]" : "") : void 0,
        disabled: o(d),
        step: o(r)
      }, null, 8, pp))), 128)) : ce("", !0)
    ], 64));
  }
}), mp = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = un(), n = Ns(), { forwardRef: l, currentElement: s } = R(), r = $(() => {
      var v, g;
      return (g = (v = e.modelValue) == null ? void 0 : v.value) == null ? void 0 : g[t.index];
    }), i = $(() => r.value === void 0 ? 0 : Ms(r.value, e.min.value ?? 0, e.max.value ?? 100)), u = $(() => {
      var v, g;
      return op(t.index, ((g = (v = e.modelValue) == null ? void 0 : v.value) == null ? void 0 : g.length) ?? 0);
    }), d = Ll(s), c = $(() => d[n.size].value), f = $(() => c.value ? sp(c.value, i.value, n.direction) : 0), p = Ga();
    return le(() => {
      e.thumbElements.value.push(s.value);
    }), Be(() => {
      const v = e.thumbElements.value.findIndex((g) => g === s.value) ?? -1;
      e.thumbElements.value.splice(v, 1);
    }), (v, g) => (b(), S(o(At), null, {
      default: h(() => [
        q(o(O), k(v.$attrs, {
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
            [o(n).startEdge]: `calc(${i.value}% + ${f.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !o(p) && r.value === void 0 ? "none" : void 0
          },
          onFocus: g[0] || (g[0] = () => {
            o(e).valueIndexToChangeRef.value = v.index;
          })
        }), {
          default: h(() => [
            w(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), cg = /* @__PURE__ */ x({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { getItems: e } = ea(), { forwardRef: n, currentElement: l } = R(), s = $(() => l.value ? e().findIndex((r) => r.ref === l.value) : -1);
    return (r, i) => (b(), S(mp, k({ ref: o(n) }, t, { index: s.value }), {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), fg = /* @__PURE__ */ x({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = un();
    return R(), (e, n) => (b(), S(o(O), {
      "as-child": e.asChild,
      as: e.as,
      "data-disabled": o(t).disabled.value ? "" : void 0,
      "data-orientation": o(t).orientation.value
    }, {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), pg = /* @__PURE__ */ x({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = un(), e = Ns();
    R();
    const n = $(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (u) => Ms(u, t.min.value, t.max.value)
      );
    }), l = $(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = $(() => 100 - Math.max(...n.value));
    return (r, i) => (b(), S(o(O), {
      "data-disabled": o(t).disabled.value ? "" : void 0,
      "data-orientation": o(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: Me({
        [o(e).startEdge]: `${l.value}%`,
        [o(e).endEdge]: `${s.value}%`
      })
    }, {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
let kn = null, Et = null;
function hp(a, t) {
  if (t) {
    const e = (t & Ys) !== 0, n = (t & Xs) !== 0, l = (t & Zs) !== 0, s = (t & Js) !== 0;
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
function Hs() {
  Et !== null && (document.head.removeChild(Et), kn = null, Et = null);
}
function Pn(a, t) {
  const e = hp(a, t);
  kn !== e && (kn = e, Et === null && (Et = document.createElement("style"), document.head.appendChild(Et)), Et.innerHTML = `*{cursor: ${e}!important;}`);
}
function yp({
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
function Ws(a) {
  return a.type === "keydown";
}
function js(a) {
  return a.type.startsWith("mouse");
}
function Us(a) {
  return a.type.startsWith("touch");
}
function dn(a) {
  if (js(a))
    return {
      x: a.clientX,
      y: a.clientY
    };
  if (Us(a)) {
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
function Gs(a, t) {
  const e = a === "horizontal", { x: n, y: l } = dn(t);
  return e ? n : l;
}
function gp(a, t, e) {
  return a.x < t.x + t.width && a.x + a.width > t.x && a.y < t.y + t.height && a.y + a.height > t.y;
}
function pe(a, t = "Assertion failed!") {
  if (!a)
    throw console.error(t), new Error(t);
}
function bp(a, t) {
  if (a === t)
    throw new Error("Cannot compare node with itself");
  const e = {
    a: ol(a),
    b: ol(t)
  };
  let n;
  for (; e.a.at(-1) === e.b.at(-1); )
    a = e.a.pop(), t = e.b.pop(), n = a;
  pe(n);
  const l = {
    a: nl(al(e.a)),
    b: nl(al(e.b))
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
const Cp = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function wp(a) {
  const t = getComputedStyle(qs(a)).display;
  return t === "flex" || t === "inline-flex";
}
function _p(a) {
  const t = getComputedStyle(a);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || wp(a)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || Cp.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function al(a) {
  let t = a.length;
  for (; t--; ) {
    const e = a[t];
    if (pe(e), _p(e))
      return e;
  }
  return null;
}
function nl(a) {
  return a && Number(getComputedStyle(a).zIndex) || 0;
}
function ol(a) {
  const t = [];
  for (; a; )
    t.push(a), a = qs(a);
  return t;
}
function qs(a) {
  var t;
  return a.parentNode instanceof DocumentFragment && ((t = a.parentNode) == null ? void 0 : t.host) || a.parentNode;
}
const Ys = 1, Xs = 2, Zs = 4, Js = 8;
function xp() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
const Sp = xp() === "coarse", mt = [];
let cn = !1;
const ft = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Map(), ma = /* @__PURE__ */ new Set();
function Ep(a, t, e, n, l) {
  const { ownerDocument: s } = t, r = {
    direction: e,
    element: t,
    hitAreaMargins: n,
    setResizeHandlerState: l
  }, i = ft.get(s) ?? 0;
  return ft.set(s, i + 1), ma.add(r), Ka(), function() {
    fn.delete(a), ma.delete(r);
    const d = ft.get(s) ?? 1;
    ft.set(s, d - 1), Ka(), Hs(), d === 1 && ft.delete(s);
  };
}
function Oa(a) {
  const { target: t } = a, { x: e, y: n } = dn(a);
  cn = !0, Ro({ target: t, x: e, y: n }), Ka(), mt.length > 0 && (Ao("down", a), a.preventDefault());
}
function ut(a) {
  const { x: t, y: e } = dn(a);
  if (!cn) {
    const { target: n } = a;
    Ro({ target: n, x: t, y: e });
  }
  Ao("move", a), Qs(), mt.length > 0 && a.preventDefault();
}
function dt(a) {
  const { target: t } = a, { x: e, y: n } = dn(a);
  fn.clear(), cn = !1, mt.length > 0 && a.preventDefault(), Ao("up", a), Ro({ target: t, x: e, y: n }), Qs(), Ka();
}
function Ro({
  target: a,
  x: t,
  y: e
}) {
  mt.splice(0);
  let n = null;
  a instanceof HTMLElement && (n = a), ma.forEach((l) => {
    const { element: s, hitAreaMargins: r } = l, i = s.getBoundingClientRect(), { bottom: u, left: d, right: c, top: f } = i, p = Sp ? r.coarse : r.fine;
    if (t >= d - p && t <= c + p && e >= f - p && e <= u + p) {
      if (n !== null && s !== n && !s.contains(n) && !n.contains(s) && bp(n, s) > 0) {
        let g = n, m = !1;
        for (; g && !g.contains(s); ) {
          if (gp(
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
      mt.push(l);
    }
  });
}
function Dn(a, t) {
  fn.set(a, t);
}
function Qs() {
  let a = !1, t = !1;
  mt.forEach((n) => {
    const { direction: l } = n;
    l.value === "horizontal" ? a = !0 : t = !0;
  });
  let e = 0;
  fn.forEach((n) => {
    e |= n;
  }), a && t ? Pn("intersection", e) : a ? Pn("horizontal", e) : t ? Pn("vertical", e) : Hs();
}
function Ka() {
  ft.forEach((a, t) => {
    const { body: e } = t;
    e.removeEventListener("contextmenu", dt), e.removeEventListener("mousedown", Oa), e.removeEventListener("mouseleave", ut), e.removeEventListener("mousemove", ut), e.removeEventListener("touchmove", ut), e.removeEventListener("touchstart", Oa);
  }), window.removeEventListener("mouseup", dt), window.removeEventListener("touchcancel", dt), window.removeEventListener("touchend", dt), ma.size > 0 && (cn ? (mt.length > 0 && ft.forEach((a, t) => {
    const { body: e } = t;
    a > 0 && (e.addEventListener("contextmenu", dt), e.addEventListener("mouseleave", ut), e.addEventListener("mousemove", ut), e.addEventListener("touchmove", ut, {
      passive: !1
    }));
  }), window.addEventListener("mouseup", dt), window.addEventListener("touchcancel", dt), window.addEventListener("touchend", dt)) : ft.forEach((a, t) => {
    const { body: e } = t;
    a > 0 && (e.addEventListener("mousedown", Oa), e.addEventListener("mousemove", ut), e.addEventListener("touchmove", ut, {
      passive: !1
    }), e.addEventListener("touchstart", Oa));
  }));
}
function Ao(a, t) {
  ma.forEach((e) => {
    const { setResizeHandlerState: n } = e, l = mt.includes(e);
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
function Wt({
  panelConstraints: a,
  panelIndex: t,
  size: e
}) {
  const n = a[t];
  pe(n != null);
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
  pe(r != null), pe(i != null);
  let u = 0;
  if (l === "keyboard") {
    {
      const c = a < 0 ? i : r, f = e[c];
      if (pe(f), f.collapsible) {
        const p = t[c];
        pe(p != null);
        const v = e[c];
        pe(v);
        const { collapsedSize: g = 0, minSize: m = 0 } = v;
        if (Le(p, g)) {
          const _ = m - p;
          ha(_, Math.abs(a)) > 0 && (a = a < 0 ? 0 - _ : _);
        }
      }
    }
    {
      const c = a < 0 ? r : i, f = e[c];
      pe(f);
      const { collapsible: p } = f;
      if (p) {
        const v = t[c];
        pe(v != null);
        const g = e[c];
        pe(g);
        const { collapsedSize: m = 0, minSize: _ = 0 } = g;
        if (Le(v, _)) {
          const C = v - m;
          ha(C, Math.abs(a)) > 0 && (a = a < 0 ? 0 - C : C);
        }
      }
    }
  }
  {
    const c = a < 0 ? 1 : -1;
    let f = a < 0 ? i : r, p = 0;
    for (; ; ) {
      const g = t[f];
      pe(g != null);
      const _ = Wt({
        panelConstraints: e,
        panelIndex: f,
        size: 100
      }) - g;
      if (p += _, f += c, f < 0 || f >= e.length)
        break;
    }
    const v = Math.min(Math.abs(a), Math.abs(p));
    a = a < 0 ? 0 - v : v;
  }
  {
    let f = a < 0 ? r : i;
    for (; f >= 0 && f < e.length; ) {
      const p = Math.abs(a) - Math.abs(u), v = t[f];
      pe(v != null);
      const g = v - p, m = Wt({
        panelConstraints: e,
        panelIndex: f,
        size: g
      });
      if (!Le(v, m) && (u += v - m, s[f] = m, u.toPrecision(3).localeCompare(Math.abs(a).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      a < 0 ? f-- : f++;
    }
  }
  if (Le(u, 0))
    return t;
  {
    const c = a < 0 ? i : r, f = t[c];
    pe(f != null);
    const p = f + u, v = Wt({
      panelConstraints: e,
      panelIndex: c,
      size: p
    });
    if (s[c] = v, !Le(v, p)) {
      let g = p - v, _ = a < 0 ? i : r;
      for (; _ >= 0 && _ < e.length; ) {
        const C = s[_];
        pe(C != null);
        const D = C + g, y = Wt({
          panelConstraints: e,
          panelIndex: _,
          size: D
        });
        if (Le(C, y) || (g -= y - C, s[_] = y), Le(g, 0))
          break;
        a > 0 ? _-- : _++;
      }
    }
  }
  const d = s.reduce((c, f) => f + c, 0);
  return Le(d, 100) ? s : t;
}
function er(a, t = document) {
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
function pn(a, t = document) {
  if (!ba)
    return null;
  const e = t.querySelector(`[data-panel-resize-handle-id="${a}"]`);
  return e || null;
}
function tr(a, t, e = document) {
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
function Pp(a, t, e, n = document) {
  var d, c;
  const l = pn(t, n), s = ya(a, n), r = l ? s.indexOf(l) : -1, i = ((d = e[r]) == null ? void 0 : d.id) ?? null, u = ((c = e[r + 1]) == null ? void 0 : c.id) ?? null;
  return [i, u];
}
function Dp(a, t, e, n, l) {
  const s = e === "horizontal", r = pn(t, l);
  pe(r);
  const i = r.getAttribute("data-panel-group-id");
  pe(i);
  const { initialCursorPosition: u } = n, d = Gs(e, a), c = er(i, l);
  pe(c);
  const f = c.getBoundingClientRect(), p = s ? f.width : f.height;
  return (d - u) / p * 100;
}
function $p(a, t, e, n, l, s) {
  if (Ws(a)) {
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
    return n == null ? 0 : Dp(
      a,
      t,
      e,
      n,
      s
    );
}
function Ip({
  layout: a,
  panelsArray: t,
  pivotIndices: e
}) {
  let n = 0, l = 100, s = 0, r = 0;
  const i = e[0];
  pe(i != null), t.forEach((f, p) => {
    const { constraints: v } = f, { maxSize: g = 100, minSize: m = 0 } = v;
    p === i ? (n = m, l = g) : (s += m, r += g);
  });
  const u = Math.min(l, 100 - s), d = Math.max(n, 100 - r), c = a[i];
  return {
    valueMax: u,
    valueMin: d,
    valueNow: c
  };
}
function Bp({
  panelDataArray: a
}) {
  const t = Array(a.length), e = a.map(
    (s) => s.constraints
  );
  let n = 0, l = 100;
  for (let s = 0; s < a.length; s++) {
    const r = e[s];
    pe(r);
    const { defaultSize: i } = r;
    i != null && (n++, t[s] = i, l -= i);
  }
  for (let s = 0; s < a.length; s++) {
    const r = e[s];
    pe(r);
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
    pe(s);
    const { callbacks: r, constraints: i, id: u } = s, { collapsedSize: d = 0, collapsible: c } = i, f = e[u];
    if (f == null || n !== f) {
      e[u] = n;
      const { onCollapse: p, onExpand: v, onResize: g } = r;
      g && g(n, f), c && (p || v) && (v && (f == null || f === d) && n !== d && v(), p && (f == null || f !== d) && n === d && p());
    }
  });
}
function Tp(a, t = 10) {
  let e = null;
  return (...l) => {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      a(...l);
    }, t);
  };
}
function ar(a, t, e) {
  const n = tr(
    a,
    t,
    e
  );
  return n != null ? [n, n + 1] : [-1, -1];
}
function Rp({
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
      pe(r != null);
      const i = 100 / n * r;
      e[s] = i;
    }
  }
  let l = 0;
  for (let s = 0; s < t.length; s++) {
    const r = e[s];
    pe(r != null);
    const i = Wt({
      panelConstraints: t,
      panelIndex: s,
      size: r
    });
    r !== i && (l += r - i, e[s] = i);
  }
  if (!Le(l, 0))
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      pe(r != null);
      const i = r + l, u = Wt({
        panelConstraints: t,
        panelIndex: s,
        size: i
      });
      if (r !== u && (l -= u - r, e[s] = u, Le(l, 0)))
        break;
    }
  return e;
}
function ll(a) {
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
function nr(a) {
  return `radix-vue:${a}`;
}
function or(a) {
  return a.map((t) => {
    const { constraints: e, id: n, idIsFromProps: l, order: s } = t;
    return l ? n : s ? `${s}:${JSON.stringify(e)}` : JSON.stringify(e);
  }).sort((t, e) => t.localeCompare(e)).join(",");
}
function lr(a, t) {
  try {
    const e = nr(a), n = t.getItem(e);
    if (n) {
      const l = JSON.parse(n);
      if (typeof l == "object" && l != null)
        return l;
    }
  } catch {
  }
  return null;
}
function Ap(a, t, e) {
  const n = lr(a, e) ?? {}, l = or(t);
  return n[l] ?? null;
}
function Op(a, t, e, n, l) {
  const s = nr(a), r = or(t), i = lr(a, l) ?? {};
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
function kp({
  eagerValuesRef: a,
  groupId: t,
  layout: e,
  panelDataArray: n,
  panelGroupElement: l,
  setLayout: s
}) {
  ge((r) => {
    const i = l.value;
    if (!i)
      return;
    const u = ya(
      t,
      i
    );
    for (let d = 0; d < n.length - 1; d++) {
      const { valueMax: c, valueMin: f, valueNow: p } = Ip({
        layout: e.value,
        panelsArray: n,
        pivotIndices: [d, d + 1]
      }), v = u[d];
      if (v != null) {
        const g = n[d];
        pe(g), v.setAttribute("aria-controls", g.id), v.setAttribute(
          "aria-valuemax",
          `${Math.round(c)}`
        ), v.setAttribute(
          "aria-valuemin",
          `${Math.round(f)}`
        ), v.setAttribute(
          "aria-valuenow",
          p != null ? `${Math.round(p)}` : ""
        );
      }
    }
    r(() => {
      u.forEach((d) => {
        d.removeAttribute("aria-controls"), d.removeAttribute("aria-valuemax"), d.removeAttribute("aria-valuemin"), d.removeAttribute("aria-valuenow");
      });
    });
  }), ge((r) => {
    const i = l.value;
    if (!i)
      return;
    const u = a.value;
    pe(u);
    const { panelDataArray: d } = u, c = er(t, i);
    pe(c != null, `No group found for id "${t}"`);
    const f = ya(t, i);
    pe(f);
    const p = f.map((v) => {
      const g = v.getAttribute("data-panel-resize-handle-id");
      pe(g);
      const [m, _] = Pp(
        t,
        g,
        d,
        i
      );
      if (m == null || _ == null)
        return () => {
        };
      const C = (D) => {
        if (!D.defaultPrevented)
          switch (D.key) {
            case "Enter": {
              D.preventDefault();
              const y = d.findIndex(
                (E) => E.id === m
              );
              if (y >= 0) {
                const E = d[y];
                pe(E);
                const P = e.value[y], {
                  collapsedSize: B = 0,
                  collapsible: I,
                  minSize: V = 0
                } = E.constraints;
                if (P != null && I) {
                  const M = ua({
                    delta: Le(P, B) ? V - B : B - P,
                    layout: e.value,
                    panelConstraints: d.map(
                      (A) => A.constraints
                    ),
                    pivotIndices: ar(
                      t,
                      g,
                      i
                    ),
                    trigger: "keyboard"
                  });
                  e.value !== M && s(M);
                }
              }
              break;
            }
          }
      };
      return v.addEventListener("keydown", C), () => {
        v.removeEventListener("keydown", C);
      };
    });
    r(() => {
      p.forEach((v) => v());
    });
  });
}
const Mp = 100, da = {
  getItem: (a) => (ll(da), da.getItem(a)),
  setItem: (a, t) => {
    ll(da), da.setItem(a, t);
  }
}, [sr, Vp] = ee("PanelGroup"), vg = /* @__PURE__ */ x({
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
    const e = a, n = t, l = {}, { direction: s } = ne(e), r = me(e.id, "radix-vue-splitter-group"), i = be(), { forwardRef: u, currentElement: d } = R(), c = T(null), f = T([]), p = T({}), v = T(/* @__PURE__ */ new Map()), g = T(0), m = $(() => ({
      autoSaveId: e.autoSaveId,
      direction: e.direction,
      dragState: c.value,
      id: r,
      keyboardResizeBy: e.keyboardResizeBy,
      storage: e.storage
    })), _ = T({
      layout: f.value,
      panelDataArray: [],
      panelDataArrayChanged: !1
    }), C = (N) => f.value = N;
    kp({
      eagerValuesRef: _,
      groupId: r,
      layout: f,
      panelDataArray: _.value.panelDataArray,
      setLayout: C,
      panelGroupElement: d
    }), ge(() => {
      const { panelDataArray: N } = _.value, { autoSaveId: z } = e;
      if (z) {
        if (f.value.length === 0 || f.value.length !== N.length)
          return;
        let X = l[z];
        X || (X = Tp(
          Op,
          Mp
        ), l[z] = X);
        const H = [...N], Q = new Map(
          v.value
        );
        X(
          z,
          H,
          Q,
          f.value,
          e.storage
        );
      }
    });
    function D(N, z) {
      const { panelDataArray: X } = _.value, H = L(X, N);
      return yp({
        defaultSize: z,
        dragState: c.value,
        layout: f.value,
        panelData: X,
        panelIndex: H
      });
    }
    function y(N) {
      const { panelDataArray: z } = _.value;
      z.push(N), z.sort((X, H) => {
        const Q = X.order, Z = H.order;
        return Q == null && Z == null ? 0 : Q == null ? -1 : Z == null ? 1 : Q - Z;
      }), _.value.panelDataArrayChanged = !0;
    }
    te(() => _.value.panelDataArrayChanged, () => {
      if (_.value.panelDataArrayChanged) {
        _.value.panelDataArrayChanged = !1;
        const { autoSaveId: N, storage: z } = m.value, { layout: X, panelDataArray: H } = _.value;
        let Q = null;
        if (N) {
          const re = Ap(N, H, z);
          re && (v.value = new Map(
            Object.entries(re.expandToSizes)
          ), Q = re.layout);
        }
        Q === null && (Q = Bp({
          panelDataArray: H
        }));
        const Z = Rp({
          layout: Q,
          panelConstraints: H.map(
            (re) => re.constraints
          )
        });
        jr(X, Z) || (C(Z), _.value.layout = Z, n("layout", Z), ia(
          H,
          Z,
          p.value
        ));
      }
    });
    function E(N) {
      return function(X) {
        X.preventDefault();
        const H = d.value;
        if (!H)
          return () => null;
        const { direction: Q, dragState: Z, id: re, keyboardResizeBy: Y } = m.value, { layout: se, panelDataArray: fe } = _.value, { initialLayout: _e } = Z ?? {}, Se = ar(
          re,
          N,
          H
        );
        let ye = $p(
          X,
          N,
          Q,
          Z,
          Y,
          H
        );
        if (ye === 0)
          return;
        const de = Q === "horizontal";
        i.value === "rtl" && de && (ye = -ye);
        const Re = fe.map((_t) => _t.constraints), ke = ua({
          delta: ye,
          layout: _e ?? se,
          panelConstraints: Re,
          pivotIndices: Se,
          trigger: Ws(X) ? "keyboard" : "mouse-or-touch"
        }), Ke = !ka(se, ke);
        (js(X) || Us(X)) && g.value !== ye && (g.value = ye, Ke ? Dn(N, 0) : de ? Dn(
          N,
          ye < 0 ? Ys : Xs
        ) : Dn(
          N,
          ye < 0 ? Zs : Js
        )), Ke && (C(ke), _.value.layout = ke, n("layout", ke), ia(
          fe,
          ke,
          p.value
        ));
      };
    }
    function P(N, z) {
      const { layout: X, panelDataArray: H } = _.value, Q = H.map((_e) => _e.constraints), { panelSize: Z, pivotIndices: re } = G(
        H,
        N,
        X
      );
      pe(Z != null);
      const se = L(H, N) === H.length - 1 ? Z - z : z - Z, fe = ua({
        delta: se,
        layout: X,
        panelConstraints: Q,
        pivotIndices: re,
        trigger: "imperative-api"
      });
      ka(X, fe) || (C(fe), _.value.layout = fe, n("layout", fe), ia(
        H,
        fe,
        p.value
      ));
    }
    function B(N, z) {
      const { layout: X, panelDataArray: H } = _.value, Q = L(H, N);
      H[Q] = N, _.value.panelDataArrayChanged = !0;
      const {
        collapsedSize: Z = 0,
        collapsible: re
      } = z, {
        collapsedSize: Y = 0,
        collapsible: se,
        maxSize: fe = 100,
        minSize: _e = 0
      } = N.constraints, { panelSize: Se } = G(
        H,
        N,
        X
      );
      Se !== null && (re && se && Se === Z ? Z !== Y && P(N, Y) : Se < _e ? P(N, _e) : Se > fe && P(N, fe));
    }
    function I(N, z) {
      const { direction: X } = m.value, { layout: H } = _.value;
      if (!d.value)
        return;
      const Q = pn(
        N,
        d.value
      );
      pe(Q);
      const Z = Gs(
        X,
        z
      );
      c.value = {
        dragHandleId: N,
        dragHandleRect: Q.getBoundingClientRect(),
        initialCursorPosition: Z,
        initialLayout: H
      };
    }
    function V() {
      c.value = null;
    }
    function M(N) {
      const { panelDataArray: z } = _.value, X = L(z, N);
      X >= 0 && (z.splice(X, 1), delete p.value[N.id], _.value.panelDataArrayChanged = !0);
    }
    function A(N) {
      const { layout: z, panelDataArray: X } = _.value;
      if (N.constraints.collapsible) {
        const H = X.map(
          (Y) => Y.constraints
        ), {
          collapsedSize: Q = 0,
          panelSize: Z,
          pivotIndices: re
        } = G(X, N, z);
        if (pe(
          Z != null,
          `Panel size not found for panel "${N.id}"`
        ), Z !== Q) {
          v.value.set(N.id, Z);
          const se = L(X, N) === X.length - 1 ? Z - Q : Q - Z, fe = ua({
            delta: se,
            layout: z,
            panelConstraints: H,
            pivotIndices: re,
            trigger: "imperative-api"
          });
          ka(z, fe) || (C(fe), _.value.layout = fe, n("layout", fe), ia(
            X,
            fe,
            p.value
          ));
        }
      }
    }
    function F(N) {
      const { layout: z, panelDataArray: X } = _.value;
      if (N.constraints.collapsible) {
        const H = X.map(
          (se) => se.constraints
        ), {
          collapsedSize: Q = 0,
          panelSize: Z,
          minSize: re = 0,
          pivotIndices: Y
        } = G(X, N, z);
        if (Z === Q) {
          const se = v.value.get(
            N.id
          ), fe = se != null && se >= re ? se : re, Se = L(X, N) === X.length - 1 ? Z - fe : fe - Z, ye = ua({
            delta: Se,
            layout: z,
            panelConstraints: H,
            pivotIndices: Y,
            trigger: "imperative-api"
          });
          ka(z, ye) || (C(ye), _.value.layout = ye, n("layout", ye), ia(
            X,
            ye,
            p.value
          ));
        }
      }
    }
    function W(N) {
      const { layout: z, panelDataArray: X } = _.value, { panelSize: H } = G(X, N, z);
      return pe(
        H != null,
        `Panel size not found for panel "${N.id}"`
      ), H;
    }
    function K(N) {
      const { layout: z, panelDataArray: X } = _.value, {
        collapsedSize: H = 0,
        collapsible: Q,
        panelSize: Z
      } = G(X, N, z);
      return Q === !0 && Z === H;
    }
    function J(N) {
      const { layout: z, panelDataArray: X } = _.value, {
        collapsedSize: H = 0,
        collapsible: Q,
        panelSize: Z
      } = G(X, N, z);
      return pe(
        Z != null,
        `Panel size not found for panel "${N.id}"`
      ), !Q || Z > H;
    }
    Vp({
      direction: s,
      dragState: c.value,
      groupId: r,
      reevaluatePanelConstraints: B,
      registerPanel: y,
      registerResizeHandle: E,
      resizePanel: P,
      startDragging: I,
      stopDragging: V,
      unregisterPanel: M,
      panelGroupElement: d,
      collapsePanel: A,
      expandPanel: F,
      isPanelCollapsed: K,
      isPanelExpanded: J,
      getPanelSize: W,
      getPanelStyle: D
    });
    function L(N, z) {
      return N.findIndex(
        (X) => X === z || X.id === z.id
      );
    }
    function G(N, z, X) {
      const H = L(N, z), Z = H === N.length - 1 ? [H - 1, H] : [H, H + 1], re = X[H];
      return {
        ...z.constraints,
        panelSize: re,
        pivotIndices: Z
      };
    }
    return (N, z) => (b(), S(o(O), {
      ref: o(u),
      as: N.as,
      "as-child": N.asChild,
      style: Me({
        display: "flex",
        flexDirection: o(s) === "horizontal" ? "row" : "column",
        height: "100%",
        overflow: "hidden",
        width: "100%"
      }),
      "data-panel-group": "",
      "data-orientation": o(s),
      "data-panel-group-id": o(r)
    }, {
      default: h(() => [
        w(N.$slots, "default", { layout: f.value })
      ]),
      _: 3
    }, 8, ["as", "as-child", "style", "data-orientation", "data-panel-group-id"]));
  }
}), mg = /* @__PURE__ */ x({
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
    const n = a, l = e, s = sr();
    if (s === null)
      throw new Error(
        "SplitterPanel components must be rendered within a SplitterGroup container"
      );
    const { collapsePanel: r, expandPanel: i, getPanelSize: u, getPanelStyle: d, isPanelCollapsed: c, resizePanel: f, groupId: p, reevaluatePanelConstraints: v, registerPanel: g, unregisterPanel: m } = s, _ = me(n.id, "radix-vue-splitter-panel"), C = $(() => ({
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
      id: _,
      idIsFromProps: n.id !== void 0,
      order: n.order
    }));
    te(() => C.value.constraints, (P, B) => {
      (B.collapsedSize !== P.collapsedSize || B.collapsible !== P.collapsible || B.maxSize !== P.maxSize || B.minSize !== P.minSize) && v(C.value, B);
    }, { deep: !0 }), le(() => {
      const P = C.value;
      g(P), Be(() => {
        m(P);
      });
    });
    const D = $(() => d(C.value, n.defaultSize)), y = $(() => c(C.value)), E = $(() => !y.value);
    return t({
      /** If panel is `collapsible`, collapse it fully. */
      collapse: () => {
        r(C.value);
      },
      /** If panel is currently collapsed, expand it to its most recent size. */
      expand: () => {
        i(C.value);
      },
      /** Gets the current size of the panel as a percentage (1 - 100). */
      getSize() {
        return u(C.value);
      },
      /** Resize panel to the specified percentage (1 - 100). */
      resize: (P) => {
        f(C.value, P);
      },
      /** Returns `true` if the panel is currently collapsed */
      isCollapsed: y,
      /** Returns `true` if the panel is currently not collapsed */
      isExpanded: E
    }), (P, B) => (b(), S(o(O), {
      id: o(_),
      style: Me(D.value),
      as: P.as,
      "as-child": P.asChild,
      "data-panel": "",
      "data-panel-collapsible": P.collapsible || void 0,
      "data-panel-group-id": o(p),
      "data-panel-id": o(_),
      "data-panel-size": Number.parseFloat(`${D.value.flexGrow}`).toFixed(1),
      "data-state": P.collapsible ? y.value ? "collapsed" : "expanded" : void 0
    }, {
      default: h(() => [
        w(P.$slots, "default", {
          isCollapsed: y.value,
          isExpanded: E.value
        })
      ]),
      _: 3
    }, 8, ["id", "style", "as", "as-child", "data-panel-collapsible", "data-panel-group-id", "data-panel-id", "data-panel-size", "data-state"]));
  }
});
function Fp({
  disabled: a,
  handleId: t,
  resizeHandler: e,
  panelGroupElement: n
}) {
  ge((l) => {
    const s = n.value;
    if (a.value || e.value === null || s === null)
      return;
    const r = pn(t, s);
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
            pe(c);
            const f = ya(
              c,
              s
            ), p = tr(
              c,
              t,
              s
            );
            pe(p !== null);
            const v = u.shiftKey ? p > 0 ? p - 1 : f.length - 1 : p + 1 < f.length ? p + 1 : 0;
            f[v].focus();
            break;
          }
        }
    };
    r.addEventListener("keydown", i), l(() => {
      r.removeEventListener("keydown", i);
    });
  });
}
const hg = /* @__PURE__ */ x({
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
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), { disabled: r } = ne(e), i = sr();
    if (i === null)
      throw new Error(
        "PanelResizeHandle components must be rendered within a PanelGroup container"
      );
    const {
      direction: u,
      groupId: d,
      registerResizeHandle: c,
      startDragging: f,
      stopDragging: p,
      panelGroupElement: v
    } = i, g = me(e.id, "radix-vue-splitter-resize-handle"), m = T("inactive"), _ = T(!1), C = T(null);
    return te(r, () => {
      ba && (r.value ? C.value = null : C.value = c(g));
    }, { immediate: !0 }), ge((D) => {
      var P, B;
      if (r.value || C.value === null)
        return;
      const y = s.value;
      if (!y)
        return;
      pe(y);
      const E = (I, V, M) => {
        var A;
        if (V)
          switch (I) {
            case "down": {
              m.value = "drag", f(g, M), n("dragging", !0);
              break;
            }
            case "move": {
              m.value !== "drag" && (m.value = "hover"), (A = C.value) == null || A.call(C, M);
              break;
            }
            case "up": {
              m.value = "hover", p(), n("dragging", !1);
              break;
            }
          }
        else
          m.value = "inactive";
      };
      D(Ep(
        g,
        y,
        u,
        {
          // Coarse inputs (e.g. finger/touch)
          coarse: ((P = e.hitAreaMargins) == null ? void 0 : P.coarse) ?? 15,
          // Fine inputs (e.g. mouse)
          fine: ((B = e.hitAreaMargins) == null ? void 0 : B.fine) ?? 5
        },
        E
      ));
    }), Fp({
      disabled: r,
      resizeHandler: C,
      handleId: g,
      panelGroupElement: v
    }), (D, y) => (b(), S(o(O), {
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
      "data-resize-handle-active": m.value === "drag" ? "pointer" : _.value ? "keyboard" : void 0,
      "data-resize-handle-state": m.value,
      "data-panel-resize-handle-enabled": !o(r),
      "data-panel-resize-handle-id": o(g),
      onBlur: y[0] || (y[0] = (E) => _.value = !1),
      onFocus: y[1] || (y[1] = (E) => _.value = !1)
    }, {
      default: h(() => [
        w(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "tabindex", "data-state", "data-disabled", "data-orientation", "data-panel-group-id", "data-resize-handle-active", "data-resize-handle-state", "data-panel-resize-handle-enabled", "data-panel-resize-handle-id"]));
  }
}), Lp = {
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
}, [ko, Np] = ee("StepperRoot"), yg = /* @__PURE__ */ x({
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
    const u = T(/* @__PURE__ */ new Set()), d = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), c = $(() => Array.from(u.value)), f = $(() => d.value === 1), p = $(() => d.value === c.value.length), v = $(() => u.value.size);
    function g(y) {
      y > v.value || y < 1 || u.value.size && c.value[y] && c.value[y].getAttribute("disabled") || r.value && y > (d.value ?? 1) + 1 || (d.value = y);
    }
    const m = T(null), _ = T(null), C = $(() => m.value ? m.value.getAttribute("disabled") === "" : !0), D = $(() => _.value ? _.value.getAttribute("disabled") === "" : !0);
    return te(d, async () => {
      await oe(() => {
        m.value = c.value.length && d.value < c.value.length ? c.value[d.value] : null, _.value = c.value.length && d.value > 1 ? c.value[d.value - 2] : null;
      });
    }), te(c, async () => {
      await oe(() => {
        m.value = c.value.length && d.value < c.value.length ? c.value[d.value] : null, _.value = c.value.length && d.value > 1 ? c.value[d.value - 2] : null;
      });
    }), Np({
      modelValue: d,
      changeModelValue: (y) => {
        d.value = y;
      },
      orientation: s,
      dir: i,
      linear: r,
      totalStepperItems: u
    }), (y, E) => (b(), S(o(O), {
      role: "group",
      "aria-label": "progress",
      as: y.as,
      "as-child": y.asChild,
      "data-linear": o(r) ? "" : void 0,
      "data-orientation": y.orientation
    }, {
      default: h(() => [
        w(y.$slots, "default", {
          modelValue: o(d),
          totalSteps: u.value.size,
          isNextDisabled: C.value,
          isPrevDisabled: D.value,
          isFirstStep: f.value,
          isLastStep: p.value,
          goToStep: g,
          nextStep: () => g((o(d) ?? 1) + 1),
          prevStep: () => g((o(d) ?? 1) - 1)
        }),
        Ge("div", Lp, " Step " + De(o(d)) + " of " + De(u.value.size), 1)
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-linear", "data-orientation"]));
  }
}), [Pa, zp] = ee("StepperItem"), gg = /* @__PURE__ */ x({
  __name: "StepperItem",
  props: {
    step: {},
    disabled: { type: Boolean, default: !1 },
    completed: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { disabled: e, step: n, completed: l } = ne(t), { forwardRef: s } = R(), r = ko(), i = me(void 0, "radix-vue-stepper-item-title"), u = me(void 0, "radix-vue-stepper-item-description"), d = $(() => l.value ? "completed" : r.modelValue.value === n.value ? "active" : r.modelValue.value > n.value ? "completed" : "inactive"), c = $(() => e.value ? !1 : r.linear.value ? n.value <= r.modelValue.value || n.value === r.modelValue.value + 1 : !0);
    return zp({
      titleId: i,
      descriptionId: u,
      state: d,
      disabled: e,
      step: n,
      isFocusable: c
    }), (f, p) => (b(), S(o(O), {
      ref: o(s),
      as: f.as,
      "as-child": f.asChild,
      "aria-current": d.value === "active" ? "true" : void 0,
      "data-state": d.value,
      disabled: o(e) || !c.value ? "" : void 0,
      "data-disabled": o(e) || !c.value ? "" : void 0,
      "data-orientation": o(r).orientation.value
    }, {
      default: h(() => [
        w(f.$slots, "default", { state: d.value })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-current", "data-state", "disabled", "data-disabled", "data-orientation"]));
  }
}), bg = /* @__PURE__ */ x({
  __name: "StepperTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = ko(), e = Pa(), n = Qe(), l = $(() => Array.from(t.totalStepperItems.value));
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
      d.preventDefault(), !e.disabled.value && ((d.key === n.ENTER || d.key === n.SPACE) && !d.ctrlKey && !d.shiftKey && t.changeModelValue(e.step.value), [n.ARROW_LEFT, n.ARROW_RIGHT, n.ARROW_UP, n.ARROW_DOWN].includes(d.key) && Tt(d, document.activeElement, void 0, {
        itemsArray: l.value,
        focus: !0,
        loop: !1,
        arrowKeyOptions: t.orientation.value,
        dir: t.dir.value
      }));
    }
    const { forwardRef: i, currentElement: u } = R();
    return le(() => {
      t.totalStepperItems.value.add(u.value);
    }), Be(() => {
      t.totalStepperItems.value.delete(u.value);
    }), (d, c) => (b(), S(o(O), {
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
      onMousedown: ue(s, ["left"]),
      onKeydown: ie(r, ["enter", "space", "left", "right", "up", "down"])
    }, {
      default: h(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child", "data-state", "disabled", "data-disabled", "data-orientation", "tabindex", "aria-describedby", "aria-labelledby"]));
  }
}), Cg = /* @__PURE__ */ x({
  __name: "StepperDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Pa();
    return (n, l) => (b(), S(o(O), k(t, {
      id: o(e).descriptionId
    }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), wg = /* @__PURE__ */ x({
  __name: "StepperTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h4" }
  },
  setup(a) {
    const t = a, e = Pa();
    return R(), (n, l) => (b(), S(o(O), k(t, {
      id: o(e).titleId
    }), {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), _g = /* @__PURE__ */ x({
  __name: "StepperIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Pa();
    return R(), (n, l) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(n.$slots, "default", {}, () => [
          he(" Step " + De(o(e).step.value), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), xg = /* @__PURE__ */ x({
  __name: "StepperSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ko(), n = Pa();
    return R(), (l, s) => (b(), S(o(ap), k(t, {
      decorative: "",
      orientation: o(e).orientation.value,
      "data-state": o(n).state.value
    }), {
      default: h(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["orientation", "data-state"]));
  }
}), Kp = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Hp, Wp] = ee("SwitchRoot"), Sg = /* @__PURE__ */ x({
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
    const { forwardRef: i, currentElement: u } = R(), d = Je(u), c = $(() => {
      var f;
      return e.id && u.value ? (f = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : f.innerText : void 0;
    });
    return Wp({
      checked: s,
      toggleCheck: r,
      disabled: l
    }), (f, p) => (b(), ve(we, null, [
      q(o(O), k(f.$attrs, {
        id: f.id,
        ref: o(i),
        role: "switch",
        type: f.as === "button" ? "button" : void 0,
        value: f.value,
        "aria-label": f.$attrs["aria-label"] || c.value,
        "aria-checked": o(s),
        "aria-required": f.required,
        "data-state": o(s) ? "checked" : "unchecked",
        "data-disabled": o(l) ? "" : void 0,
        "as-child": f.asChild,
        as: f.as,
        disabled: o(l),
        onClick: r,
        onKeydown: ie(ue(r, ["prevent"]), ["enter"])
      }), {
        default: h(() => [
          w(f.$slots, "default", { checked: o(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      o(d) ? (b(), ve("input", {
        key: 0,
        type: "checkbox",
        name: f.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: o(l),
        required: f.required,
        value: f.value,
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
      }, null, 8, Kp)) : ce("", !0)
    ], 64));
  }
}), Eg = /* @__PURE__ */ x({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = Hp();
    return R(), (e, n) => {
      var l;
      return b(), S(o(O), {
        "data-state": (l = o(t).checked) != null && l.value ? "checked" : "unchecked",
        "data-disabled": o(t).disabled.value ? "" : void 0,
        "as-child": e.asChild,
        as: e.as
      }, {
        default: h(() => [
          w(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [vn, jp] = ee("TabsRoot"), Pg = /* @__PURE__ */ x({
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
    return jp({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: l,
      dir: r,
      activationMode: e.activationMode,
      baseId: me(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (b(), S(o(O), {
      dir: o(r),
      "data-orientation": o(l),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: h(() => [
        w(d.$slots, "default", { modelValue: o(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Dg = /* @__PURE__ */ x({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { loop: e } = ne(t), { forwardRef: n, currentElement: l } = R(), s = vn();
    return s.tabsList = l, (r, i) => (b(), S(o(Vt), {
      "as-child": "",
      orientation: o(s).orientation.value,
      dir: o(s).dir.value,
      loop: o(e)
    }, {
      default: h(() => [
        q(o(O), {
          ref: o(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": o(s).orientation.value
        }, {
          default: h(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function rr(a, t) {
  return `${a}-trigger-${t}`;
}
function ir(a, t) {
  return `${a}-content-${t}`;
}
const $g = /* @__PURE__ */ x({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = vn(), l = $(() => rr(n.baseId, t.value)), s = $(() => ir(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value), i = T(r.value);
    return le(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (b(), S(o(Pe), {
      present: r.value,
      "force-mount": ""
    }, {
      default: h(({ present: c }) => [
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
          style: Me({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: h(() => [
            u.forceMount || r.value ? w(u.$slots, "default", { key: 0 }) : ce("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ig = /* @__PURE__ */ x({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = vn(), l = $(() => rr(n.baseId, t.value)), s = $(() => ir(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value);
    return (i, u) => (b(), S(o(Ft), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: h(() => [
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
          onMousedown: u[0] || (u[0] = ue((d) => {
            !i.disabled && d.ctrlKey === !1 ? o(n).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = ie((d) => o(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = o(n).activationMode !== "manual";
            !r.value && !i.disabled && d && o(n).changeModelValue(i.value);
          })
        }, {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), Bg = /* @__PURE__ */ x({
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
    te(() => [e.modelValue.value, e == null ? void 0 : e.dir.value], async () => {
      await oe(), s();
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
    return (r, i) => typeof l.value.size == "number" ? (b(), S(o(O), k({ key: 0 }, t, {
      style: {
        "--radix-tabs-indicator-size": `${l.value.size}px`,
        "--radix-tabs-indicator-position": `${l.value.position}px`
      }
    }), {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"])) : ce("", !0);
  }
}), [mn, Up] = ee("TagsInputRoot"), Tg = /* @__PURE__ */ x({
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
    const e = a, n = t, { addOnPaste: l, disabled: s, delimiter: r, max: i, id: u, dir: d, addOnBlur: c, addOnTab: f } = ne(e), p = be(d), v = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: !0,
      deep: !0
    }), { forwardRef: g, currentElement: m } = R(), { focused: _ } = xi(m), C = Je(m), { getItems: D } = Jt(), y = T(), E = T(!1);
    return Up({
      modelValue: v,
      onAddValue: (P) => {
        const B = v.value.length > 0 && typeof v.value[0] == "object", I = v.value.length > 0 && typeof e.defaultValue[0] == "object";
        if ((B || I) && typeof e.convertValue != "function")
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
        const B = P.target, I = D().map((M) => M.ref).filter((M) => M.dataset.disabled !== "");
        if (!I.length)
          return;
        const V = I.at(-1);
        switch (P.key) {
          case "Delete":
          case "Backspace": {
            if (B.selectionStart !== 0 || B.selectionEnd !== 0)
              break;
            if (y.value) {
              const M = I.findIndex((A) => A === y.value);
              v.value.splice(M, 1), y.value = y.value === V ? I.at(M - 1) : I.at(M + 1), P.preventDefault();
            } else P.key === "Backspace" && (y.value = V, P.preventDefault());
            break;
          }
          case "Home":
          case "End":
          case "ArrowRight":
          case "ArrowLeft": {
            const M = P.key === "ArrowRight" && p.value === "ltr" || P.key === "ArrowLeft" && p.value === "rtl", A = !M;
            if (B.selectionStart !== 0 || B.selectionEnd !== 0)
              break;
            if (A && !y.value)
              y.value = V, P.preventDefault();
            else if (M && V && y.value === V)
              y.value = void 0, P.preventDefault();
            else if (y.value) {
              const F = Tt(P, y.value, void 0, {
                itemsArray: I,
                loop: !1,
                dir: p.value
              });
              F && (y.value = F), P.preventDefault();
            }
            break;
          }
          case "ArrowUp":
          case "ArrowDown": {
            y.value && P.preventDefault();
            break;
          }
          default:
            y.value = void 0;
        }
      },
      selectedElement: y,
      isInvalidInput: E,
      addOnPaste: l,
      addOnBlur: c,
      addOnTab: f,
      dir: p,
      disabled: s,
      delimiter: r,
      max: i,
      id: u,
      displayValue: e.displayValue
    }), (P, B) => (b(), S(o(Qt), null, {
      default: h(() => [
        q(o(O), {
          ref: o(g),
          dir: o(p),
          as: P.as,
          "as-child": P.asChild,
          "data-invalid": E.value ? "" : void 0,
          "data-disabled": o(s) ? "" : void 0,
          "data-focused": o(_) ? "" : void 0
        }, {
          default: h(() => [
            w(P.$slots, "default", { modelValue: o(v) }),
            o(C) && P.name ? (b(), S(o(oo), {
              key: 0,
              name: P.name,
              value: o(v),
              required: P.required,
              disabled: o(s)
            }, null, 8, ["name", "value", "required", "disabled"])) : ce("", !0)
          ]),
          _: 3
        }, 8, ["dir", "as", "as-child", "data-invalid", "data-disabled", "data-focused"])
      ]),
      _: 3
    }));
  }
}), Rg = /* @__PURE__ */ x({
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
      const f = c.target;
      if (!f.value)
        return;
      e.onAddValue(f.value) && (f.value = "");
    }
    function r(c) {
      e.addOnTab.value && i(c);
    }
    async function i(c) {
      if (await oe(), c.defaultPrevented)
        return;
      const f = c.target;
      if (!f.value)
        return;
      e.onAddValue(f.value) && (f.value = ""), c.preventDefault();
    }
    function u(c) {
      e.isInvalidInput.value = !1;
      const f = e.delimiter.value;
      if (f === c.data) {
        const p = c.target;
        p.value = p.value.replaceAll(f, ""), e.onAddValue(p.value) && (p.value = "");
      }
    }
    function d(c) {
      if (e.addOnPaste.value) {
        c.preventDefault();
        const f = c.clipboardData;
        if (!f)
          return;
        const p = f.getData("text");
        e.delimiter.value ? p.split(e.delimiter.value).forEach((g) => {
          e.onAddValue(g);
        }) : e.onAddValue(p);
      }
    }
    return le(() => {
      const c = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      c && setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1);
    }), (c, f) => {
      var p;
      return b(), S(o(O), {
        id: (p = o(e).id) == null ? void 0 : p.value,
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
          ie(i, ["enter"]),
          ie(r, ["tab"]),
          o(e).onInputKeydown
        ],
        onBlur: s,
        onPaste: d
      }, {
        default: h(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "as", "as-child", "maxlength", "placeholder", "disabled", "data-invalid", "onKeydown"]);
    };
  }
}), [ur, Gp] = ee("TagsInputItem"), Ag = /* @__PURE__ */ x({
  __name: "TagsInputItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { value: e } = ne(t), n = mn(), { forwardRef: l, currentElement: s } = R(), r = $(() => n.selectedElement.value === s.value), i = $(() => t.disabled || n.disabled.value), u = Gp({
      value: e,
      isSelected: r,
      disabled: i,
      textId: "",
      displayValue: $(() => n.displayValue(e.value))
    });
    return (d, c) => (b(), S(o(At), null, {
      default: h(() => [
        q(o(O), {
          ref: o(l),
          as: d.as,
          "as-child": d.asChild,
          "aria-labelledby": o(u).textId,
          "aria-current": r.value,
          "data-disabled": i.value ? "" : void 0,
          "data-state": r.value ? "active" : "inactive"
        }, {
          default: h(() => [
            w(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "aria-labelledby", "aria-current", "data-disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Og = /* @__PURE__ */ x({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = ur();
    return R(), e.textId || (e.textId = me(void 0, "radix-vue-tags-input-item-text")), (n, l) => (b(), S(o(O), k(t, {
      id: o(e).textId
    }), {
      default: h(() => [
        w(n.$slots, "default", {}, () => [
          he(De(o(e).displayValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), kg = /* @__PURE__ */ x({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = mn(), n = ur(), l = $(() => {
      var r;
      return ((r = n.disabled) == null ? void 0 : r.value) || e.disabled.value;
    });
    function s() {
      if (l.value)
        return;
      const r = e.modelValue.value.findIndex((i) => i === n.value.value);
      e.onRemoveValue(r);
    }
    return (r, i) => (b(), S(o(O), k({ tabindex: "-1" }, t, {
      "aria-labelledby": o(n).textId,
      "aria-current": o(n).isSelected.value,
      "data-state": o(n).isSelected.value ? "active" : "inactive",
      "data-disabled": l.value ? "" : void 0,
      type: r.as === "button" ? "button" : void 0,
      onClick: s
    }), {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby", "aria-current", "data-state", "data-disabled", "type"]));
  }
}), Mg = /* @__PURE__ */ x({
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
    return (l, s) => (b(), S(o(O), k(t, {
      type: l.as === "button" ? "button" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      onClick: n
    }), {
      default: h(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "data-disabled"]));
  }
}), [hn, qp] = ee("ToastProvider"), Vg = /* @__PURE__ */ x({
  inheritAttrs: !1,
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
    return qp({
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
    }), (c, f) => w(c.$slots, "default");
  }
}), Yp = "toast.swipeStart", Xp = "toast.swipeMove", Zp = "toast.swipeCancel", Jp = "toast.swipeEnd", Mn = "toast.viewportPause", Vn = "toast.viewportResume";
function Ma(a, t, e) {
  const n = e.originalEvent.currentTarget, l = new CustomEvent(a, {
    bubbles: !1,
    cancelable: !0,
    detail: e
  });
  t && n.addEventListener(a, t, { once: !0 }), n.dispatchEvent(l);
}
function sl(a, t, e = 0) {
  const n = Math.abs(a.x), l = Math.abs(a.y), s = n > l;
  return t === "left" || t === "right" ? s && n > e : !s && l > e;
}
function Qp(a) {
  return a.nodeType === a.ELEMENT_NODE;
}
function dr(a) {
  const t = [];
  return Array.from(a.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Qp(n)) {
      const l = n.ariaHidden || n.hidden || n.style.display === "none", s = n.dataset.radixToastAnnounceExclude === "";
      if (!l)
        if (s) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...dr(n));
    }
  }), t;
}
const ev = /* @__PURE__ */ x({
  __name: "ToastAnnounce",
  setup(a) {
    const t = hn(), e = yi(1e3), n = T(!1);
    return Al(() => {
      n.value = !0;
    }), (l, s) => o(e) || n.value ? (b(), S(o(na), { key: 0 }, {
      default: h(() => [
        he(De(o(t).label.value) + " ", 1),
        w(l.$slots, "default")
      ]),
      _: 3
    })) : ce("", !0);
  }
}), [tv, av] = ee("ToastRoot"), nv = /* @__PURE__ */ x({
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
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = hn(), i = T(null), u = T(null), d = $(() => e.duration || r.duration.value), c = T(0), f = T(d.value), p = T(0), v = T(d.value), g = Al(() => {
      const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
      v.value = Math.max(f.value - D, 0);
    }, { fpsLimit: 60 });
    function m(D) {
      !D || D === Number.POSITIVE_INFINITY || Ye && (window.clearTimeout(p.value), c.value = (/* @__PURE__ */ new Date()).getTime(), p.value = window.setTimeout(_, D));
    }
    function _() {
      var y, E;
      ((y = s.value) == null ? void 0 : y.contains(document.activeElement)) && ((E = r.viewport.value) == null || E.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const C = $(() => s.value ? dr(s.value) : null);
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const D = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(D);
    }
    return ge((D) => {
      const y = r.viewport.value;
      if (y) {
        const E = () => {
          m(f.value), g.resume(), n("resume");
        }, P = () => {
          const B = (/* @__PURE__ */ new Date()).getTime() - c.value;
          f.value = f.value - B, window.clearTimeout(p.value), g.pause(), n("pause");
        };
        return y.addEventListener(Mn, P), y.addEventListener(Vn, E), () => {
          y.removeEventListener(Mn, P), y.removeEventListener(Vn, E);
        };
      }
    }), te(() => [e.open, d.value], () => {
      f.value = d.value, e.open && !r.isClosePausedRef.value && m(d.value);
    }, { immediate: !0 }), Gn("Escape", (D) => {
      n("escapeKeyDown", D), D.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, _());
    }), le(() => {
      r.onToastAdd();
    }), Be(() => {
      r.onToastRemove();
    }), av({ onClose: _ }), (D, y) => (b(), ve(we, null, [
      C.value ? (b(), S(ev, {
        key: 0,
        role: "status",
        "aria-live": D.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: h(() => [
          he(De(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ce("", !0),
      o(r).viewport.value ? (b(), S(Xt, {
        key: 1,
        to: o(r).viewport.value
      }, [
        q(o(O), k({
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
          onPointerdown: y[0] || (y[0] = ue((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: y[1] || (y[1] = (E) => {
            if (!i.value) return;
            const P = E.clientX - i.value.x, B = E.clientY - i.value.y, I = !!u.value, V = ["left", "right"].includes(o(r).swipeDirection.value), M = ["left", "up"].includes(o(r).swipeDirection.value) ? Math.min : Math.max, A = V ? M(0, P) : 0, F = V ? 0 : M(0, B), W = E.pointerType === "touch" ? 10 : 2, K = { x: A, y: F }, J = { originalEvent: E, delta: K };
            I ? (u.value = K, o(Ma)(o(Xp), (L) => n("swipeMove", L), J)) : o(sl)(K, o(r).swipeDirection.value, W) ? (u.value = K, o(Ma)(o(Yp), (L) => n("swipeStart", L), J), E.target.setPointerCapture(E.pointerId)) : (Math.abs(P) > W || Math.abs(B) > W) && (i.value = null);
          }),
          onPointerup: y[2] || (y[2] = (E) => {
            const P = u.value, B = E.target;
            if (B.hasPointerCapture(E.pointerId) && B.releasePointerCapture(E.pointerId), u.value = null, i.value = null, P) {
              const I = E.currentTarget, V = { originalEvent: E, delta: P };
              o(sl)(P, o(r).swipeDirection.value, o(r).swipeThreshold.value) ? o(Ma)(o(Jp), (M) => n("swipeEnd", M), V) : o(Ma)(o(Zp), (M) => n("swipeCancel", M), V), I == null || I.addEventListener("click", (M) => M.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: h(() => [
            w(D.$slots, "default", {
              remaining: v.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ce("", !0)
    ], 64));
  }
}), Fg = /* @__PURE__ */ x({
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
    return (r, i) => (b(), S(o(Pe), {
      present: r.forceMount || o(s)
    }, {
      default: h(() => [
        q(nv, k({
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
            const { x: d, y: c } = u.detail.delta, f = u.currentTarget;
            f.setAttribute("data-swipe", "move"), f.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), f.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: c } = u.detail.delta, f = u.currentTarget;
            f.setAttribute("data-swipe", "end"), f.style.removeProperty("--radix-toast-swipe-move-x"), f.style.removeProperty("--radix-toast-swipe-move-y"), f.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), f.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), s.value = !1;
          })
        }), {
          default: h(({ remaining: u, duration: d }) => [
            w(r.$slots, "default", {
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
}), Lg = /* @__PURE__ */ x({
  __name: "ToastPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(nt), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cr = /* @__PURE__ */ x({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    return (t, e) => (b(), S(o(O), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: h(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), ov = /* @__PURE__ */ x({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = tv(), { forwardRef: n } = R();
    return (l, s) => (b(), S(cr, { "as-child": "" }, {
      default: h(() => [
        q(o(O), k(t, {
          ref: o(n),
          type: l.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (r) => o(e).onClose())
        }), {
          default: h(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Ng = /* @__PURE__ */ x({
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
    return (n, l) => n.altText ? (b(), S(cr, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: h(() => [
        q(ov, {
          ref: o(e),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: h(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : ce("", !0);
  }
}), rl = /* @__PURE__ */ x({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(a, { emit: t }) {
    const e = t, n = hn();
    return (l, s) => (b(), S(o(na), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (r) => {
        var d;
        const i = r.relatedTarget;
        !((d = o(n).viewport.value) != null && d.contains(i)) && e("focusFromOutsideViewport");
      })
    }, {
      default: h(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }));
  }
}), zg = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(a) {
    const t = a, { hotkey: e, label: n } = ne(t), { forwardRef: l, currentElement: s } = R(), { createCollection: r } = Fe(), i = r(s), u = hn(), d = $(() => u.toastCount.value > 0), c = T(), f = T(), p = $(() => e.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Gn(e.value, () => {
      s.value.focus();
    }), le(() => {
      u.onViewportChange(s.value);
    }), ge((g) => {
      const m = s.value;
      if (d.value && m) {
        const _ = () => {
          if (!u.isClosePausedRef.value) {
            const P = new CustomEvent(Mn);
            m.dispatchEvent(P), u.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (u.isClosePausedRef.value) {
            const P = new CustomEvent(Vn);
            m.dispatchEvent(P), u.isClosePausedRef.value = !1;
          }
        }, D = (P) => {
          !m.contains(P.relatedTarget) && C();
        }, y = () => {
          m.contains(document.activeElement) || C();
        }, E = (P) => {
          var V, M, A;
          const B = P.altKey || P.ctrlKey || P.metaKey;
          if (P.key === "Tab" && !B) {
            const F = document.activeElement, W = P.shiftKey;
            if (P.target === m && W) {
              (V = c.value) == null || V.focus();
              return;
            }
            const L = v({ tabbingDirection: W ? "backwards" : "forwards" }), G = L.findIndex((N) => N === F);
            Va(L.slice(G + 1)) ? P.preventDefault() : W ? (M = c.value) == null || M.focus() : (A = f.value) == null || A.focus();
          }
        };
        m.addEventListener("focusin", _), m.addEventListener("focusout", D), m.addEventListener("pointermove", _), m.addEventListener("pointerleave", y), m.addEventListener("keydown", E), window.addEventListener("blur", _), window.addEventListener("focus", C), g(() => {
          m.removeEventListener("focusin", _), m.removeEventListener("focusout", D), m.removeEventListener("pointermove", _), m.removeEventListener("pointerleave", y), m.removeEventListener("keydown", E), window.removeEventListener("blur", _), window.removeEventListener("focus", C);
        });
      }
    });
    function v({ tabbingDirection: g }) {
      const _ = i.value.map((C) => {
        const D = [C, ...to(C)];
        return g === "forwards" ? D : D.reverse();
      });
      return (g === "forwards" ? _.reverse() : _).flat();
    }
    return (g, m) => (b(), S(o(du), {
      role: "region",
      "aria-label": typeof o(n) == "string" ? o(n).replace("{hotkey}", p.value) : o(n)(p.value),
      tabindex: "-1",
      style: Me({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: h(() => [
        d.value ? (b(), S(rl, {
          key: 0,
          ref: (_) => {
            c.value = o(Ie)(_);
          },
          onFocusFromOutsideViewport: m[0] || (m[0] = () => {
            const _ = v({
              tabbingDirection: "forwards"
            });
            o(Va)(_);
          })
        }, null, 512)) : ce("", !0),
        q(o(O), k({
          ref: o(l),
          tabindex: "-1",
          as: g.as,
          "as-child": g.asChild
        }, g.$attrs), {
          default: h(() => [
            w(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (b(), S(rl, {
          key: 1,
          ref: (_) => {
            f.value = o(Ie)(_);
          },
          onFocusFromOutsideViewport: m[1] || (m[1] = () => {
            const _ = v({
              tabbingDirection: "backwards"
            });
            o(Va)(_);
          })
        }, null, 512)) : ce("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Kg = /* @__PURE__ */ x({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hg = /* @__PURE__ */ x({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(O), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lv = /* @__PURE__ */ x({
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
    const r = $(() => l.value ? "on" : "off");
    return (i, u) => (b(), S(o(O), {
      type: i.as === "button" ? "button" : void 0,
      "as-child": e.asChild,
      as: i.as,
      "aria-pressed": o(l),
      "data-state": r.value,
      "data-disabled": i.disabled ? "" : void 0,
      disabled: i.disabled,
      onClick: s
    }, {
      default: h(() => [
        w(i.$slots, "default", { pressed: o(l) })
      ]),
      _: 3
    }, 8, ["type", "as-child", "as", "aria-pressed", "data-state", "data-disabled", "disabled"]));
  }
}), [sv, rv] = ee("ToggleGroupRoot"), iv = /* @__PURE__ */ x({
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
    const e = a, n = t, { loop: l, rovingFocus: s, disabled: r, dir: i } = ne(e), u = be(i), { forwardRef: d } = R(), { modelValue: c, changeModelValue: f, isSingle: p } = Hl(e, n);
    return rv({
      isSingle: p,
      modelValue: c,
      changeModelValue: f,
      dir: u,
      orientation: e.orientation,
      loop: l,
      rovingFocus: s,
      disabled: r
    }), (v, g) => (b(), S(qe(o(s) ? o(Vt) : o(O)), {
      "as-child": "",
      orientation: o(s) ? v.orientation : void 0,
      dir: o(u),
      loop: o(s) ? o(l) : void 0
    }, {
      default: h(() => [
        q(o(O), {
          ref: o(d),
          role: "group",
          "as-child": v.asChild,
          as: v.as
        }, {
          default: h(() => [
            w(v.$slots, "default", { modelValue: o(c) })
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), uv = /* @__PURE__ */ x({
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
    const t = a, e = sv(), n = $(() => {
      var i;
      return ((i = e.disabled) == null ? void 0 : i.value) || t.disabled;
    }), l = $(() => {
      var i;
      return (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), s = $(() => {
      var i;
      return e.isSingle.value ? e.modelValue.value === t.value : (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), { forwardRef: r } = R();
    return (i, u) => (b(), S(qe(o(e).rovingFocus.value ? o(Ft) : o(O)), {
      "as-child": "",
      focusable: !n.value,
      active: l.value
    }, {
      default: h(() => [
        q(o(lv), k(t, {
          ref: o(r),
          disabled: n.value,
          pressed: s.value,
          "onUpdate:pressed": u[0] || (u[0] = (d) => o(e).changeModelValue(i.value))
        }), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["disabled", "pressed"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [fr, dv] = ee("ToolbarRoot"), Wg = /* @__PURE__ */ x({
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
    return dv({ orientation: e, dir: l }), (r, i) => (b(), S(o(Vt), {
      "as-child": "",
      orientation: o(e),
      dir: o(l),
      loop: r.loop
    }, {
      default: h(() => [
        q(o(O), {
          ref: o(s),
          role: "toolbar",
          "aria-orientation": o(e),
          "as-child": r.asChild,
          as: r.as
        }, {
          default: h(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-orientation", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), cv = /* @__PURE__ */ x({
  __name: "ToolbarButton",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), S(o(Ft), {
      "as-child": "",
      focusable: !n.disabled
    }, {
      default: h(() => [
        q(o(O), k({
          ref: o(e),
          type: n.as === "button" ? "button" : void 0
        }, t), {
          default: h(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }, 8, ["focusable"]));
  }
}), jg = /* @__PURE__ */ x({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), S(o(Ft), {
      "as-child": "",
      focusable: ""
    }, {
      default: h(() => [
        q(o(O), k(t, {
          ref: o(e),
          onKeydown: l[0] || (l[0] = (s) => {
            var r;
            s.key === " " && ((r = s.currentTarget) == null || r.click());
          })
        }), {
          default: h(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Ug = /* @__PURE__ */ x({
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
    const e = a, n = t, l = fr(), s = Oe(n);
    return R(), (r, i) => (b(), S(o(iv), k({ ...e, ...o(s) }, {
      "data-orientation": o(l).orientation.value,
      dir: o(l).dir.value,
      "roving-focus": !1
    }), {
      default: h(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-orientation", "dir"]));
  }
}), Gg = /* @__PURE__ */ x({
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
    return (n, l) => (b(), S(cv, { "as-child": "" }, {
      default: h(() => [
        q(o(uv), k(t, { ref: o(e) }), {
          default: h(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), qg = /* @__PURE__ */ x({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = fr();
    return R(), (n, l) => (b(), S(ks, {
      orientation: o(e).orientation.value,
      "as-child": t.asChild,
      as: n.as
    }, {
      default: h(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["orientation", "as-child", "as"]));
  }
}), pr = "tooltip.open", [Mo, fv] = ee("TooltipProvider"), Yg = /* @__PURE__ */ x({
  inheritAttrs: !1,
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
    const u = T(!0), d = T(!1), { start: c, stop: f } = Un(() => {
      u.value = !0;
    }, n, { immediate: !1 });
    return fv({
      isOpenDelayed: u,
      delayDuration: e,
      onOpen() {
        f(), u.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: l,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (p, v) => w(p.$slots, "default");
  }
}), [yn, pv] = ee("TooltipRoot"), Xg = /* @__PURE__ */ x({
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
    const l = Mo(), s = $(() => e.disableHoverableContent ?? l.disableHoverableContent.value), r = $(() => e.disableClosingTrigger ?? l.disableClosingTrigger.value), i = $(() => e.disabled ?? l.disabled.value), u = $(() => e.delayDuration ?? l.delayDuration.value), d = $(() => e.ignoreNonKeyboardFocus ?? l.ignoreNonKeyboardFocus.value), c = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    te(c, (y) => {
      l.onClose && (y ? (l.onOpen(), document.dispatchEvent(new CustomEvent(pr))) : l.onClose());
    });
    const f = T(!1), p = T(), v = $(() => c.value ? f.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: m } = Un(() => {
      f.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function _() {
      m(), f.value = !1, c.value = !0;
    }
    function C() {
      m(), c.value = !1;
    }
    function D() {
      g();
    }
    return pv({
      contentId: "",
      open: c,
      stateAttribute: v,
      trigger: p,
      onTriggerChange(y) {
        p.value = y;
      },
      onTriggerEnter() {
        l.isOpenDelayed.value ? D() : _();
      },
      onTriggerLeave() {
        s.value ? C() : m();
      },
      onOpen: _,
      onClose: C,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (y, E) => (b(), S(o(Ot), null, {
      default: h(() => [
        w(y.$slots, "default", { open: o(c) })
      ]),
      _: 3
    }));
  }
}), Zg = /* @__PURE__ */ x({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = yn(), n = Mo();
    e.contentId || (e.contentId = me(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: l, currentElement: s } = R(), r = T(!1), i = T(!1), u = $(() => e.disabled.value ? {} : {
      click: m,
      focus: v,
      pointermove: f,
      pointerleave: p,
      pointerdown: c,
      blur: g
    });
    le(() => {
      e.onTriggerChange(s.value);
    });
    function d() {
      setTimeout(() => {
        r.value = !1;
      }, 1);
    }
    function c() {
      r.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function f(_) {
      _.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (e.onTriggerEnter(), i.value = !0);
    }
    function p() {
      e.onTriggerLeave(), i.value = !1;
    }
    function v(_) {
      var C, D;
      r.value || e.ignoreNonKeyboardFocus.value && !((D = (C = _.target).matches) != null && D.call(C, ":focus-visible")) || e.onOpen();
    }
    function g() {
      e.onClose();
    }
    function m() {
      e.disableClosingTrigger.value || e.onClose();
    }
    return (_, C) => (b(), S(o(kt), { "as-child": "" }, {
      default: h(() => [
        q(o(O), k({
          ref: o(l),
          "aria-describedby": o(e).open.value ? o(e).contentId : void 0,
          "data-state": o(e).stateAttribute.value,
          as: _.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Kn(u.value)), {
          default: h(() => [
            w(_.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), vr = /* @__PURE__ */ x({
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
    const e = a, n = t, l = yn(), { forwardRef: s } = R(), r = ja(), i = $(() => {
      var c;
      return (c = r.default) == null ? void 0 : c.call(r);
    }), u = $(() => {
      var p;
      if (e.ariaLabel)
        return e.ariaLabel;
      let c = "";
      function f(v) {
        typeof v.children == "string" && v.type !== ml ? c += v.children : Array.isArray(v.children) && v.children.forEach((g) => f(g));
      }
      return (p = i.value) == null || p.forEach((v) => f(v)), c;
    }), d = $(() => {
      const { ariaLabel: c, ...f } = e;
      return f;
    });
    return le(() => {
      Ve(window, "scroll", (c) => {
        const f = c.target;
        f != null && f.contains(l.trigger.value) && l.onClose();
      }), Ve(window, pr, l.onClose);
    }), (c, f) => (b(), S(o(gt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: f[0] || (f[0] = (p) => n("escapeKeyDown", p)),
      onPointerDownOutside: f[1] || (f[1] = (p) => {
        var v;
        o(l).disableClosingTrigger.value && ((v = o(l).trigger.value) != null && v.contains(p.target)) && p.preventDefault(), n("pointerDownOutside", p);
      }),
      onFocusOutside: f[2] || (f[2] = ue(() => {
      }, ["prevent"])),
      onDismiss: f[3] || (f[3] = (p) => o(l).onClose())
    }, {
      default: h(() => [
        q(o($t), k({
          ref: o(s),
          "data-state": o(l).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: h(() => [
            w(c.$slots, "default"),
            q(o(na), {
              id: o(l).contentId,
              role: "tooltip"
            }, {
              default: h(() => [
                he(De(u.value), 1)
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
}), vv = /* @__PURE__ */ x({
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
    const e = Rt(a), { forwardRef: n, currentElement: l } = R(), { trigger: s, onClose: r } = yn(), i = Mo(), { isPointerInTransit: u, onPointerExit: d } = Vl(s, l);
    return i.isPointerInTransitRef = u, d(() => {
      r();
    }), (c, f) => (b(), S(vr, k({ ref: o(n) }, o(e)), {
      default: h(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jg = /* @__PURE__ */ x({
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
    return (i, u) => (b(), S(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: h(() => [
        (b(), S(qe(o(l).disableHoverableContent.value ? vr : vv), k({ ref: o(r) }, o(s)), {
          default: h(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Qg = /* @__PURE__ */ x({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), S(o(aa), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eb = /* @__PURE__ */ x({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), S(o(nt), j(U(t)), {
      default: h(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Vo(a) {
  return a.reduce((t, e) => (t.push(e), e.children && t.push(...Vo(e.children)), t), []);
}
const [mr, mv] = ee("TreeRoot"), tb = /* @__PURE__ */ x({
  __name: "TreeRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    items: {},
    expanded: {},
    defaultExpanded: {},
    getKey: {},
    getChildren: { type: Function, default: (a) => a.children },
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
    const e = a, n = t, { items: l, multiple: s, disabled: r, propagateSelect: i, dir: u } = ne(e), { handleTypeaheadSearch: d } = _a(), c = be(u), f = T(), p = T(!1), v = fa(), g = ae(e, "modelValue", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultValue ?? (s.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: !0
    }), m = ae(e, "expanded", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultExpanded ?? [],
      passive: e.expanded === void 0,
      deep: !0
    }), { onSelectItem: _, handleMultipleReplace: C } = ji(g, e), D = $(() => s.value && Array.isArray(g.value) ? g.value.map((I) => e.getKey(I)) : [e.getKey(g.value ?? {})]);
    function y(I, V = 1, M) {
      return I.reduce((A, F, W) => {
        const K = e.getKey(F), J = e.getChildren(F), L = m.value.includes(K), G = {
          _id: K,
          value: F,
          index: W,
          level: V,
          parentItem: M,
          hasChildren: !!J,
          bind: {
            value: F,
            level: V,
            "aria-setsize": I.length,
            "aria-posinset": W + 1
          }
        };
        return A.push(G), J && L && A.push(...y(J, V + 1, F)), A;
      }, []);
    }
    const E = $(() => {
      const I = e.items;
      return m.value.map((V) => V), y(I ?? []);
    });
    function P(I) {
      var V;
      if (p.value)
        v.trigger(I);
      else {
        const M = (V = f.value) == null ? void 0 : V.getItems().map((A) => A.ref);
        d(I.key, M);
      }
    }
    function B(I) {
      if (p.value)
        return;
      const V = en[I.key];
      oe(() => {
        var M;
        C(
          V,
          document.activeElement,
          (M = f.value) == null ? void 0 : M.getItems,
          E.value.map((A) => A.value)
        );
      });
    }
    return mv({
      modelValue: g,
      selectedKeys: D,
      onSelect: (I) => {
        var A;
        const V = (F) => e.getKey(F ?? {}) === e.getKey(I), M = e.multiple && Array.isArray(g.value) ? ((A = g.value) == null ? void 0 : A.findIndex(V)) !== -1 : void 0;
        if (_(I, V), e.propagateSelect && e.multiple && Array.isArray(g.value)) {
          const F = Vo(e.getChildren(I) ?? []);
          M ? g.value = [...g.value].filter((W) => !F.some((K) => e.getKey(W ?? {}) === e.getKey(K))) : g.value = [...g.value, ...F];
        }
      },
      expanded: m,
      onToggle(I) {
        if (!(I ? e.getChildren(I) : void 0))
          return;
        const M = e.getKey(I) ?? I;
        m.value.includes(M) ? m.value = m.value.filter((A) => A !== M) : m.value.push(M);
      },
      getKey: e.getKey,
      getChildren: e.getChildren,
      items: l,
      expandedItems: E,
      disabled: r,
      multiple: s,
      dir: c,
      propagateSelect: i,
      isVirtual: p,
      virtualKeydownHook: v,
      handleMultipleReplace: C
    }), (I, V) => (b(), S(o(Vt), {
      ref_key: "rovingFocusGroupRef",
      ref: f,
      "as-child": "",
      orientation: "vertical",
      dir: o(c)
    }, {
      default: h(() => [
        q(o(O), {
          role: "tree",
          as: I.as,
          "as-child": I.asChild,
          "aria-multiselectable": o(s) ? !0 : void 0,
          onKeydown: [
            P,
            ie(ue(B, ["shift"]), ["up", "down"])
          ]
        }, {
          default: h(() => [
            w(I.$slots, "default", {
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
}), hv = "tree.select", yv = "tree.toggle", ab = /* @__PURE__ */ x({
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
    const n = a, l = e, s = mr(), { getItems: r } = ea(), i = $(() => !!s.getChildren(n.value)), u = $(() => {
      const C = s.getKey(n.value);
      return s.expanded.value.includes(C);
    }), d = $(() => {
      const C = s.getKey(n.value);
      return s.selectedKeys.value.includes(C);
    }), c = $(() => {
      if (s.propagateSelect.value && d.value && i.value && Array.isArray(s.modelValue.value))
        return !Vo(s.getChildren(n.value) || []).every((D) => s.modelValue.value.find((y) => s.getKey(y) === s.getKey(D)));
    });
    function f(C) {
      if (i.value)
        if (u.value) {
          const D = r().map((I) => I.ref), y = document.activeElement, E = D.indexOf(y), B = [...D].slice(E).find((I) => Number(I.getAttribute("data-indent")) === n.level + 1);
          B && B.focus();
        } else
          _(C);
    }
    function p(C) {
      if (u.value)
        _(C);
      else {
        const D = r().map((I) => I.ref), y = document.activeElement, E = D.indexOf(y), B = [...D].slice(0, E).reverse().find((I) => Number(I.getAttribute("data-indent")) === n.level - 1);
        B && B.focus();
      }
    }
    async function v(C) {
      l("select", C), !(C != null && C.defaultPrevented) && s.onSelect(n.value);
    }
    async function g(C) {
      l("toggle", C), !(C != null && C.defaultPrevented) && s.onToggle(n.value);
    }
    async function m(C) {
      if (!C)
        return;
      const D = { originalEvent: C, value: n.value, isExpanded: u.value, isSelected: d.value };
      Gt(hv, v, D);
    }
    async function _(C) {
      if (!C)
        return;
      const D = { originalEvent: C, value: n.value, isExpanded: u.value, isSelected: d.value };
      Gt(yv, g, D);
    }
    return t({
      isExpanded: u,
      isSelected: d,
      isIndeterminate: c,
      handleToggle: () => s.onToggle(n.value),
      handleSelect: () => s.onSelect(n.value)
    }), (C, D) => (b(), S(o(Ft), {
      "as-child": "",
      value: C.value,
      "allow-shift-key": ""
    }, {
      default: h(() => [
        q(o(O), k(C.$attrs, {
          role: "treeitem",
          as: C.as,
          "as-child": C.asChild,
          "aria-selected": d.value,
          "aria-expanded": i.value ? u.value : void 0,
          "aria-level": C.level,
          "data-indent": C.level,
          "data-selected": d.value ? "" : void 0,
          "data-expanded": u.value ? "" : void 0,
          onKeydown: [
            ie(ue(m, ["self", "prevent"]), ["enter", "space"]),
            D[0] || (D[0] = ie(ue((y) => o(s).dir.value === "ltr" ? f(y) : p(y), ["prevent"]), ["right"])),
            D[1] || (D[1] = ie(ue((y) => o(s).dir.value === "ltr" ? p(y) : f(y), ["prevent"]), ["left"]))
          ],
          onClick: D[2] || (D[2] = ue((y) => {
            m(y), _(y);
          }, ["stop"]))
        }), {
          default: h(() => [
            w(C.$slots, "default", {
              isExpanded: u.value,
              isSelected: d.value,
              isIndeterminate: c.value,
              handleSelect: () => o(s).onSelect(C.value),
              handleToggle: () => o(s).onToggle(C.value)
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-selected", "aria-expanded", "aria-level", "data-indent", "data-selected", "data-expanded", "onKeydown"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), nb = /* @__PURE__ */ x({
  __name: "TreeVirtualizer",
  props: {
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a) {
    const t = a, e = ja(), n = mr(), l = Ol(), { getItems: s } = ea(), r = It("", 1e3), i = $(() => {
      const p = (v) => t.textContent ? t.textContent(v) : v.toString().toLowerCase();
      return n.expandedItems.value.map((v, g) => ({
        index: g,
        textContent: p(v.value)
      }));
    });
    n.isVirtual.value = !0;
    const u = $(() => {
      const p = l.value;
      if (p) {
        const v = window.getComputedStyle(p);
        return {
          start: Number.parseFloat(v.paddingBlockStart || v.paddingTop),
          end: Number.parseFloat(v.paddingBlockEnd || v.paddingBottom)
        };
      } else
        return { start: 0, end: 0 };
    }), d = ps(
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
        getItemKey(p) {
          return p + n.getKey(n.expandedItems.value[p].value);
        },
        estimateSize() {
          return t.estimateSize ?? 28;
        },
        getScrollElement() {
          return l.value;
        },
        overscan: 12
      }
    ), c = $(() => d.value.getVirtualItems().map((p) => ({
      item: p,
      is: Nn(e.default({
        item: n.expandedItems.value[p.index],
        virtualizer: d.value,
        virtualItem: p
      })[0], {
        "data-index": p.index,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${p.start}px)`,
          overflowAnchor: "none"
        }
      })
    })));
    function f(p) {
      d.value.scrollToIndex(p, { align: "start" }), requestAnimationFrame(() => {
        const v = l.value.querySelector(`[data-index="${p}"]`);
        v instanceof HTMLElement && v.focus();
      });
    }
    return n.virtualKeydownHook.on((p) => {
      var _;
      const v = p.altKey || p.ctrlKey || p.metaKey;
      if (p.key === "Tab" && !v)
        return;
      const m = en[p.key];
      if (["first", "last"].includes(m)) {
        p.preventDefault();
        const C = m === "first" ? 0 : n.expandedItems.value.length - 1;
        d.value.scrollToIndex(C), requestAnimationFrame(() => {
          const D = s();
          (m === "first" ? D[0] : D[D.length - 1]).ref.focus();
        });
      } else if (m === "prev" && p.key !== "ArrowUp") {
        const C = document.activeElement, D = Number(C.getAttribute("data-index")), y = Number(C.getAttribute("data-indent")), P = n.expandedItems.value.slice(0, D).map((B, I) => ({ ...B, index: I })).reverse().find((B) => B.level === y - 1);
        P && f(P.index);
      } else if (!m && !v) {
        r.value += p.key;
        const C = Number((_ = document.activeElement) == null ? void 0 : _.getAttribute("data-index")), D = i.value[C].textContent, y = i.value.map((B) => B.textContent), E = Zn(y, r.value, D), P = i.value.find((B) => B.textContent === E);
        P && f(P.index);
      }
      oe(() => {
        p.shiftKey && m && n.handleMultipleReplace(m, document.activeElement, s, n.expandedItems.value.map((C) => C.value));
      });
    }), (p, v) => (b(), ve("div", {
      "data-radix-vue-virtualizer": "",
      style: Me({
        position: "relative",
        width: "100%",
        height: `${o(d).getTotalSize()}px`
      })
    }, [
      (b(!0), ve(we, null, ga(c.value, ({ is: g, item: m }) => (b(), S(qe(g), {
        key: m.key
      }))), 128))
    ], 4));
  }
}), ob = /* @__PURE__ */ x({
  __name: "Viewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), { nonce: n } = ne(t), l = Ja(n);
    return (s, r) => (b(), ve(we, null, [
      q(o(O), k({ ...s.$attrs, ...t }, {
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
        default: h(() => [
          w(s.$slots, "default")
        ]),
        _: 3
      }, 16),
      q(o(O), {
        as: "style",
        nonce: o(l)
      }, {
        default: h(() => [
          he(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
export {
  kv as AIChatAutoScroll,
  Rv as AIChatContent,
  Tv as AIChatInput,
  Av as AIChatMessageItem,
  Bv as AIChatRoot,
  Ov as AIChatSend,
  Dv as AccordionContent,
  $v as AccordionHeader,
  Pv as AccordionItem,
  Ev as AccordionRoot,
  Iv as AccordionTrigger,
  jv as AlertDialogAction,
  Kv as AlertDialogCancel,
  Nv as AlertDialogContent,
  Wv as AlertDialogDescription,
  zv as AlertDialogOverlay,
  Lv as AlertDialogPortal,
  Vv as AlertDialogRoot,
  Hv as AlertDialogTitle,
  Fv as AlertDialogTrigger,
  Uv as AspectRatio,
  Yv as AvatarFallback,
  qv as AvatarImage,
  Gv as AvatarRoot,
  Xu as CalendarCell,
  nd as CalendarCellTrigger,
  Yu as CalendarGrid,
  td as CalendarGridBody,
  ed as CalendarGridHead,
  ad as CalendarGridRow,
  Zu as CalendarHeadCell,
  Gu as CalendarHeader,
  qu as CalendarHeading,
  Ju as CalendarNext,
  Qu as CalendarPrev,
  Uu as CalendarRoot,
  Zv as CheckboxIndicator,
  Xv as CheckboxRoot,
  Xi as CollapsibleContent,
  Gi as CollapsibleRoot,
  qi as CollapsibleTrigger,
  em as ComboboxAnchor,
  cm as ComboboxArrow,
  am as ComboboxCancel,
  lm as ComboboxContent,
  sm as ComboboxEmpty,
  nm as ComboboxGroup,
  Qv as ComboboxInput,
  im as ComboboxItem,
  um as ComboboxItemIndicator,
  om as ComboboxLabel,
  fm as ComboboxPortal,
  Jv as ComboboxRoot,
  dm as ComboboxSeparator,
  tm as ComboboxTrigger,
  rm as ComboboxViewport,
  xv as ConfigProvider,
  ym as ContextMenuArrow,
  wm as ContextMenuCheckboxItem,
  hm as ContextMenuContent,
  bm as ContextMenuGroup,
  gm as ContextMenuItem,
  _m as ContextMenuItemIndicator,
  xm as ContextMenuLabel,
  mm as ContextMenuPortal,
  Sm as ContextMenuRadioGroup,
  Em as ContextMenuRadioItem,
  pm as ContextMenuRoot,
  Cm as ContextMenuSeparator,
  Pm as ContextMenuSub,
  Dm as ContextMenuSubContent,
  $m as ContextMenuSubTrigger,
  vm as ContextMenuTrigger,
  nc as DateFieldInput,
  Ud as DateFieldRoot,
  Wm as DatePickerAnchor,
  jm as DatePickerArrow,
  Km as DatePickerCalendar,
  Rm as DatePickerCell,
  Lm as DatePickerCellTrigger,
  Um as DatePickerClose,
  qm as DatePickerContent,
  Hm as DatePickerField,
  Tm as DatePickerGrid,
  Vm as DatePickerGridBody,
  Mm as DatePickerGridHead,
  Fm as DatePickerGridRow,
  Am as DatePickerHeadCell,
  Im as DatePickerHeader,
  Bm as DatePickerHeading,
  Nm as DatePickerInput,
  Om as DatePickerNext,
  km as DatePickerPrev,
  zm as DatePickerRoot,
  Gm as DatePickerTrigger,
  dc as DateRangeFieldInput,
  uc as DateRangeFieldRoot,
  dh as DateRangePickerAnchor,
  ch as DateRangePickerArrow,
  ih as DateRangePickerCalendar,
  Jm as DateRangePickerCell,
  lh as DateRangePickerCellTrigger,
  fh as DateRangePickerClose,
  vh as DateRangePickerContent,
  uh as DateRangePickerField,
  Zm as DateRangePickerGrid,
  nh as DateRangePickerGridBody,
  ah as DateRangePickerGridHead,
  oh as DateRangePickerGridRow,
  Qm as DateRangePickerHeadCell,
  Ym as DateRangePickerHeader,
  Xm as DateRangePickerHeading,
  sh as DateRangePickerInput,
  eh as DateRangePickerNext,
  th as DateRangePickerPrev,
  rh as DateRangePickerRoot,
  ph as DateRangePickerTrigger,
  Yl as DialogClose,
  Iu as DialogContent,
  Au as DialogDescription,
  Tu as DialogOverlay,
  Mv as DialogPortal,
  su as DialogRoot,
  Ru as DialogTitle,
  ru as DialogTrigger,
  bh as DropdownMenuArrow,
  xh as DropdownMenuCheckboxItem,
  gh as DropdownMenuContent,
  wh as DropdownMenuGroup,
  Ch as DropdownMenuItem,
  Sh as DropdownMenuItemIndicator,
  Eh as DropdownMenuLabel,
  yh as DropdownMenuPortal,
  Ph as DropdownMenuRadioGroup,
  Dh as DropdownMenuRadioItem,
  mh as DropdownMenuRoot,
  _h as DropdownMenuSeparator,
  $h as DropdownMenuSub,
  Ih as DropdownMenuSubContent,
  Bh as DropdownMenuSubTrigger,
  hh as DropdownMenuTrigger,
  Rh as EditableArea,
  Mh as EditableCancelTrigger,
  Vh as EditableEditTrigger,
  Ah as EditableInput,
  Oh as EditablePreview,
  Th as EditableRoot,
  kh as EditableSubmitTrigger,
  Kh as HoverCardArrow,
  zh as HoverCardContent,
  Nh as HoverCardPortal,
  Fh as HoverCardRoot,
  Lh as HoverCardTrigger,
  Hh as Label,
  jh as ListboxContent,
  Uh as ListboxFilter,
  Xh as ListboxGroup,
  Zh as ListboxGroupLabel,
  Gh as ListboxItem,
  qh as ListboxItemIndicator,
  Wh as ListboxRoot,
  Yh as ListboxVirtualizer,
  ny as MenubarArrow,
  ry as MenubarCheckboxItem,
  ay as MenubarContent,
  ly as MenubarGroup,
  oy as MenubarItem,
  iy as MenubarItemIndicator,
  uy as MenubarLabel,
  Qh as MenubarMenu,
  ty as MenubarPortal,
  dy as MenubarRadioGroup,
  cy as MenubarRadioItem,
  Jh as MenubarRoot,
  sy as MenubarSeparator,
  fy as MenubarSub,
  py as MenubarSubContent,
  vy as MenubarSubTrigger,
  ey as MenubarTrigger,
  yy as NavigationMenuContent,
  gy as NavigationMenuIndicator,
  hy as NavigationMenuItem,
  by as NavigationMenuLink,
  Cy as NavigationMenuList,
  my as NavigationMenuRoot,
  wy as NavigationMenuSub,
  _y as NavigationMenuTrigger,
  xy as NavigationMenuViewport,
  Dy as NumberFieldDecrement,
  Py as NumberFieldIncrement,
  Ey as NumberFieldInput,
  Sy as NumberFieldRoot,
  Iy as PaginationEllipsis,
  By as PaginationFirst,
  Ty as PaginationLast,
  Ry as PaginationList,
  Ay as PaginationListItem,
  Oy as PaginationNext,
  ky as PaginationPrev,
  $y as PaginationRoot,
  Vy as PinInputInput,
  My as PinInputRoot,
  Ps as PopoverAnchor,
  Ss as PopoverArrow,
  Es as PopoverClose,
  xs as PopoverContent,
  ws as PopoverPortal,
  bs as PopoverRoot,
  Cs as PopoverTrigger,
  O as Primitive,
  Ly as ProgressIndicator,
  Fy as ProgressRoot,
  Ky as RadioGroupIndicator,
  zy as RadioGroupItem,
  Ny as RadioGroupRoot,
  wf as RangeCalendarCell,
  $f as RangeCalendarCellTrigger,
  Cf as RangeCalendarGrid,
  Pf as RangeCalendarGridBody,
  Ef as RangeCalendarGridHead,
  Df as RangeCalendarGridRow,
  _f as RangeCalendarHeadCell,
  gf as RangeCalendarHeader,
  bf as RangeCalendarHeading,
  xf as RangeCalendarNext,
  Sf as RangeCalendarPrev,
  yf as RangeCalendarRoot,
  Vt as RovingFocusGroup,
  Ft as RovingFocusItem,
  Gy as ScrollAreaCorner,
  Hy as ScrollAreaRoot,
  jy as ScrollAreaScrollbar,
  Uy as ScrollAreaThumb,
  Wy as ScrollAreaViewport,
  Jy as SelectArrow,
  Zy as SelectContent,
  ag as SelectGroup,
  ug as SelectIcon,
  eg as SelectItem,
  tg as SelectItemIndicator,
  og as SelectItemText,
  ng as SelectLabel,
  Xy as SelectPortal,
  qy as SelectRoot,
  rg as SelectScrollDownButton,
  sg as SelectScrollUpButton,
  Qy as SelectSeparator,
  Yy as SelectTrigger,
  ig as SelectValue,
  lg as SelectViewport,
  ap as Separator,
  pg as SliderRange,
  dg as SliderRoot,
  cg as SliderThumb,
  fg as SliderTrack,
  Jn as Slot,
  vg as SplitterGroup,
  mg as SplitterPanel,
  hg as SplitterResizeHandle,
  Cg as StepperDescription,
  _g as StepperIndicator,
  gg as StepperItem,
  yg as StepperRoot,
  xg as StepperSeparator,
  wg as StepperTitle,
  bg as StepperTrigger,
  Sg as SwitchRoot,
  Eg as SwitchThumb,
  $g as TabsContent,
  Bg as TabsIndicator,
  Dg as TabsList,
  Pg as TabsRoot,
  Ig as TabsTrigger,
  Mg as TagsInputClear,
  Rg as TagsInputInput,
  Ag as TagsInputItem,
  kg as TagsInputItemDelete,
  Og as TagsInputItemText,
  Tg as TagsInputRoot,
  Ng as ToastAction,
  ov as ToastClose,
  Hg as ToastDescription,
  Lg as ToastPortal,
  Vg as ToastProvider,
  Fg as ToastRoot,
  Kg as ToastTitle,
  zg as ToastViewport,
  lv as Toggle,
  uv as ToggleGroupItem,
  iv as ToggleGroupRoot,
  cv as ToolbarButton,
  jg as ToolbarLink,
  Wg as ToolbarRoot,
  qg as ToolbarSeparator,
  Ug as ToolbarToggleGroup,
  Gg as ToolbarToggleItem,
  Qg as TooltipArrow,
  Jg as TooltipContent,
  eb as TooltipPortal,
  Yg as TooltipProvider,
  Xg as TooltipRoot,
  Zg as TooltipTrigger,
  ab as TreeItem,
  tb as TreeRoot,
  nb as TreeVirtualizer,
  ob as Viewport,
  na as VisuallyHidden,
  ee as createContext,
  Gt as handleAndDispatchCustomEvent,
  xa as injectAIChatRootContext,
  ou as provideAIChatRootContext,
  Ca as useBodyScrollLock,
  qn as useDateFormatter,
  Oe as useEmitAsProps,
  R as useForwardExpose,
  Rt as useForwardProps,
  xe as useForwardPropsEmits,
  me as useId,
  Nl as useStateMachine,
  Sv as withDefault
};
