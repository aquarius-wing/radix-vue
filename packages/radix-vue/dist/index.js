import { inject as tl, provide as al, shallowRef as Rn, watchEffect as ye, readonly as Na, customRef as nl, ref as T, computed as I, watch as te, nextTick as se, getCurrentScope as lr, onScopeDispose as ol, effectScope as ll, unref as o, onBeforeUnmount as An, onMounted as oe, isRef as Xe, reactive as Oa, getCurrentInstance as vt, onUpdated as sl, Fragment as we, defineComponent as _, toRefs as ne, renderSlot as C, onBeforeUpdate as sr, toHandlerKey as rr, camelize as rl, toRef as ir, onUnmounted as Te, mergeProps as M, h as pt, Comment as ur, cloneVNode as kn, openBlock as b, createBlock as w, withCtx as h, createVNode as q, createCommentVNode as pe, withKeys as re, markRaw as dr, createElementBlock as ue, createTextVNode as ve, toDisplayString as $e, Teleport as Wt, normalizeProps as K, guardReactiveProps as j, normalizeStyle as Ce, withModifiers as ie, withDirectives as za, vShow as On, createElementVNode as Ue, mergeDefaults as il, renderList as ma, resolveDynamicComponent as Ge, toHandlers as Mn, triggerRef as Ao, useSlots as Ka, onBeforeMount as ul, vModelSelect as cr, toRaw as pr } from "vue";
import { CalendarDateTime as fr, CalendarDate as vr, DateFormatter as lt, today as mr, getLocalTimeZone as Vn, isEqualMonth as ko, isSameDay as ke, isEqualDay as Pe, isToday as dl, isSameMonth as cl } from "@internationalized/date";
import { hasTime as ia, toDate as Le, isZonedDateTime as pl, createMonths as _t, isAfter as xa, isBefore as Oe, getDaysInMonth as Et, areAllDaysBetweenValid as fl, isBetween as hr, isBetweenInclusive as yr } from "./date.js";
import { useFloating as gr, autoUpdate as br, offset as Cr, flip as Oo, shift as _r, limitShift as wr, size as xr, arrow as Sr, hide as Er } from "@floating-ui/vue";
import { NumberFormatter as Pr, NumberParser as Dr } from "@internationalized/number";
function Q(a, t) {
  const e = typeof a == "string" && !t ? `${a}Context` : t, n = Symbol(e);
  return [(r) => {
    const i = tl(n, r);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(a) ? `one of the following components: ${a.join(
        ", "
      )}` : `\`${a}\``}`
    );
  }, (r) => (al(n, r), r)];
}
function zt(a, t, e) {
  const n = e.originalEvent.target, l = new CustomEvent(a, {
    bubbles: !1,
    cancelable: !0,
    detail: e
  });
  t && n.addEventListener(a, t, { once: !0 }), n.dispatchEvent(l);
}
function Kt(a, t = Number.NEGATIVE_INFINITY, e = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(a, t), e);
}
function Sa(a, t) {
  let e = a;
  const n = t.toString(), l = n.indexOf("."), s = l >= 0 ? n.length - l : 0;
  if (s > 0) {
    const r = 10 ** s;
    e = Math.round(e * r) / r;
  }
  return e;
}
function $r(a, t, e, n) {
  t = Number(t), e = Number(e);
  const l = (a - (Number.isNaN(t) ? 0 : t)) % n;
  let s = Sa(Math.abs(l) * 2 >= n ? a + Math.sign(l) * (n - Math.abs(l)) : a - l, n);
  return Number.isNaN(t) ? !Number.isNaN(e) && s > e && (s = Math.floor(Sa(e / n, n)) * n) : s < t ? s = t : !Number.isNaN(e) && s > e && (s = t + Math.floor(Sa((e - t) / n, n)) * n), s = Sa(s, n), s;
}
function Ir(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Br = function a(t, e) {
  if (t === e)
    return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor)
      return !1;
    var n, l, s;
    if (Array.isArray(t)) {
      if (n = t.length, n != e.length)
        return !1;
      for (l = n; l-- !== 0; )
        if (!a(t[l], e[l]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString();
    if (s = Object.keys(t), n = s.length, n !== Object.keys(e).length)
      return !1;
    for (l = n; l-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, s[l]))
        return !1;
    for (l = n; l-- !== 0; ) {
      var r = s[l];
      if (!a(t[r], e[r]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
};
const Ye = /* @__PURE__ */ Ir(Br);
function Tr(a, t) {
  if (a.length !== t.length)
    return !1;
  for (let e = 0; e < a.length; e++)
    if (a[e] !== t[e])
      return !1;
  return !0;
}
function St(a, t, e) {
  const n = a.findIndex((i) => Ye(i, t)), l = a.findIndex((i) => Ye(i, e));
  if (n === -1 || l === -1)
    return [];
  const [s, r] = [n, l].sort((i, u) => i - u);
  return a.slice(s, r + 1);
}
const ha = typeof document < "u";
function Nt(a) {
  return a == null;
}
function jt(a) {
  const { defaultValue: t, defaultPlaceholder: e, granularity: n = "day" } = a;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (e)
    return e.copy();
  const l = /* @__PURE__ */ new Date(), s = l.getFullYear(), r = l.getMonth() + 1, i = l.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new fr(s, r, i, 0, 0, 0) : new vr(s, r, i);
}
const Rr = [
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
], Ar = ["year", "month", "day"], pn = {
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
function kr(a) {
  if (Mo(a))
    return pn[a];
  {
    const t = Fr(a);
    return Mo(t) ? pn[t] : pn.en;
  }
}
function fn(a, t, e) {
  return Or(a) ? kr(e)[a] : Vr(a) ? t : Mr(a) ? "––" : "";
}
function Mo(a) {
  return Rr.includes(a);
}
function Or(a) {
  return Ar.includes(a);
}
function Mr(a) {
  return a === "hour" || a === "minute" || a === "second";
}
function Vr(a) {
  return a === "era" || a === "dayPeriod";
}
function Fr(a) {
  return Intl.Locale ? new Intl.Locale(a).language : a.split("-")[0];
}
const Fn = ["day", "month", "year"], vl = ["hour", "minute", "second", "dayPeriod"], ml = [...Fn, ...vl];
function Lr(a) {
  return Fn.includes(a);
}
function hl(a) {
  return ml.includes(a);
}
function Nr(a, t) {
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
function yl(a) {
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
function zr(a, t) {
  var e;
  const n = Rn();
  return ye(() => {
    n.value = a();
  }, {
    ...t,
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  }), Na(n);
}
function Kr(a, t) {
  let e, n, l;
  const s = T(!0), r = () => {
    s.value = !0, l();
  };
  te(a, r, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = nl((p, c) => (n = p, l = c, {
    get() {
      return s.value && (e = i(), s.value = !1), n(), e;
    },
    set(f) {
      u == null || u(f);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function mt(a) {
  return lr() ? (ol(a), !0) : !1;
}
function ua() {
  const a = /* @__PURE__ */ new Set(), t = (l) => {
    a.delete(l);
  };
  return {
    on: (l) => {
      a.add(l);
      const s = () => t(l);
      return mt(s), {
        off: s
      };
    },
    off: t,
    trigger: (...l) => Promise.all(Array.from(a).map((s) => s(...l)))
  };
}
function Hr(a) {
  let t = !1, e;
  const n = ll(!0);
  return (...l) => (t || (e = n.run(() => a(...l)), t = !0), e);
}
function Wr(a) {
  let t = 0, e, n;
  const l = () => {
    t -= 1, n && t <= 0 && (n.stop(), e = void 0, n = void 0);
  };
  return (...s) => (t += 1, e || (n = ll(!0), e = n.run(() => a(...s))), mt(l), e);
}
function Ne(a) {
  return typeof a == "function" ? a() : o(a);
}
function jr(a) {
  if (!Xe(a))
    return Oa(a);
  const t = new Proxy({}, {
    get(e, n, l) {
      return o(Reflect.get(a.value, n, l));
    },
    set(e, n, l) {
      return Xe(a.value[n]) && !Xe(l) ? a.value[n].value = l : a.value[n] = l, !0;
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
  return Oa(t);
}
function gl(a) {
  return jr(I(a));
}
const Je = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ur = (a) => typeof a < "u", Gr = (a) => a != null, qr = Object.prototype.toString, Yr = (a) => qr.call(a) === "[object Object]", Ma = () => {
}, Vo = /* @__PURE__ */ Xr();
function Xr() {
  var a, t;
  return Je && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function bl(a, t) {
  function e(...n) {
    return new Promise((l, s) => {
      Promise.resolve(a(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(l).catch(s);
    });
  }
  return e;
}
const Cl = (a) => a();
function Zr(a, t = {}) {
  let e, n, l = Ma;
  const s = (i) => {
    clearTimeout(i), l(), l = Ma;
  };
  return (i) => {
    const u = Ne(a), d = Ne(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (n && (s(n), n = null), Promise.resolve(i())) : new Promise((p, c) => {
      l = t.rejectOnCancel ? c : p, d && !n && (n = setTimeout(() => {
        e && s(e), n = null, p(i());
      }, d)), e = setTimeout(() => {
        n && s(n), n = null, p(i());
      }, u);
    });
  };
}
function Jr(a = Cl) {
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
  return { isActive: Na(t), pause: e, resume: n, eventFilter: l };
}
function _l(a) {
  return a || vt();
}
function Dt(a, t = 1e4) {
  return nl((e, n) => {
    let l = Ne(a), s;
    const r = () => setTimeout(() => {
      l = Ne(a), n();
    }, Ne(t));
    return mt(() => {
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
function Ln(a, t = 200, e = {}) {
  return bl(
    Zr(t, e),
    a
  );
}
function Qr(a, t, e = {}) {
  const {
    eventFilter: n = Cl,
    ...l
  } = e;
  return te(
    a,
    bl(
      n,
      t
    ),
    l
  );
}
function Fo(a, t, e = {}) {
  const {
    eventFilter: n,
    ...l
  } = e, { eventFilter: s, pause: r, resume: i, isActive: u } = Jr(n);
  return { stop: Qr(
    a,
    t,
    {
      ...l,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: u };
}
function ei(a, t, ...[e]) {
  const {
    flush: n = "sync",
    deep: l = !1,
    immediate: s = !0,
    direction: r = "both",
    transform: i = {}
  } = e || {}, u = [], d = "ltr" in i && i.ltr || ((f) => f), p = "rtl" in i && i.rtl || ((f) => f);
  return (r === "both" || r === "ltr") && u.push(Fo(
    a,
    (f) => {
      u.forEach((m) => m.pause()), t.value = d(f), u.forEach((m) => m.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), (r === "both" || r === "rtl") && u.push(Fo(
    t,
    (f) => {
      u.forEach((m) => m.pause()), a.value = p(f), u.forEach((m) => m.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), () => {
    u.forEach((f) => f.stop());
  };
}
function ti(a, t) {
  _l(t) && An(a, t);
}
function ai(a, t = !0, e) {
  _l() ? oe(a, e) : t ? a() : se(a);
}
function Nn(a, t, e = {}) {
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
    }, Ne(t));
  }
  return n && (l.value = !0, Je && u()), mt(i), {
    isPending: Na(l),
    start: u,
    stop: i
  };
}
function ni(a = 1e3, t = {}) {
  const {
    controls: e = !1,
    callback: n
  } = t, l = Nn(
    n ?? Ma,
    a,
    t
  ), s = I(() => !l.isPending.value);
  return e ? {
    ready: s,
    ...l
  } : s;
}
function oi(a, t, e) {
  const n = te(a, (...l) => (se(() => n()), t(...l)), e);
  return n;
}
function Be(a) {
  var t;
  const e = Ne(a);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const Ut = Je ? window : void 0;
function je(...a) {
  let t, e, n, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, n, l] = a, t = Ut) : [t, e, n, l] = a, !t)
    return Ma;
  Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((p) => p()), s.length = 0;
  }, i = (p, c, f, m) => (p.addEventListener(c, f, m), () => p.removeEventListener(c, f, m)), u = te(
    () => [Be(t), Ne(l)],
    ([p, c]) => {
      if (r(), !p)
        return;
      const f = Yr(c) ? { ...c } : c;
      s.push(
        ...e.flatMap((m) => n.map((g) => i(p, m, g, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), r();
  };
  return mt(d), d;
}
function li(a) {
  return typeof a == "function" ? a : typeof a == "string" ? (t) => t.key === a : Array.isArray(a) ? (t) => a.includes(t.key) : () => !0;
}
function zn(...a) {
  let t, e, n = {};
  a.length === 3 ? (t = a[0], e = a[1], n = a[2]) : a.length === 2 ? typeof a[1] == "object" ? (t = !0, e = a[0], n = a[1]) : (t = a[0], e = a[1]) : (t = !0, e = a[0]);
  const {
    target: l = Ut,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, u = li(t);
  return je(l, s, (p) => {
    p.repeat && Ne(i) || u(p) && e(p);
  }, r);
}
function si(a = {}) {
  var t;
  const {
    window: e = Ut,
    deep: n = !0
  } = a, l = (t = a.document) != null ? t : e == null ? void 0 : e.document, s = () => {
    var u;
    let d = l == null ? void 0 : l.activeElement;
    if (n)
      for (; d != null && d.shadowRoot; )
        d = (u = d == null ? void 0 : d.shadowRoot) == null ? void 0 : u.activeElement;
    return d;
  }, r = T(), i = () => {
    r.value = s();
  };
  return e && (je(e, "blur", (u) => {
    u.relatedTarget === null && i();
  }, !0), je(e, "focus", i, !0)), i(), r;
}
function Ha() {
  const a = T(!1), t = vt();
  return t && oe(() => {
    a.value = !0;
  }, t), a;
}
function wl(a) {
  const t = Ha();
  return I(() => (t.value, !!a()));
}
function xl(a, t = {}) {
  const {
    immediate: e = !0,
    fpsLimit: n = void 0,
    window: l = Ut
  } = t, s = T(!1), r = n ? 1e3 / n : null;
  let i = 0, u = null;
  function d(f) {
    if (!s.value || !l)
      return;
    i || (i = f);
    const m = f - i;
    if (r && m < r) {
      u = l.requestAnimationFrame(d);
      return;
    }
    i = f, a({ delta: m, timestamp: f }), u = l.requestAnimationFrame(d);
  }
  function p() {
    !s.value && l && (s.value = !0, i = 0, u = l.requestAnimationFrame(d));
  }
  function c() {
    s.value = !1, u != null && l && (l.cancelAnimationFrame(u), u = null);
  }
  return e && p(), mt(c), {
    isActive: Na(s),
    pause: c,
    resume: p
  };
}
function ri(a) {
  return JSON.parse(JSON.stringify(a));
}
function ii(a, t, e = {}) {
  const { window: n = Ut, ...l } = e;
  let s;
  const r = wl(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = I(() => {
    const f = Ne(a), m = (Array.isArray(f) ? f : [f]).map(Be).filter(Gr);
    return new Set(m);
  }), d = te(
    () => u.value,
    (f) => {
      i(), r.value && n && f.size && (s = new MutationObserver(t), f.forEach((m) => s.observe(m, l)));
    },
    { immediate: !0, flush: "post" }
  ), p = () => s == null ? void 0 : s.takeRecords(), c = () => {
    i(), d();
  };
  return mt(c), {
    isSupported: r,
    stop: c,
    takeRecords: p
  };
}
function ui(a) {
  const t = vt(), e = Kr(
    () => null,
    () => a ? Be(a) : t.proxy.$el
  );
  return sl(e.trigger), oe(e.trigger), e;
}
function Ze(a, t, e = {}) {
  const { window: n = Ut, ...l } = e;
  let s;
  const r = wl(() => n && "ResizeObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = I(() => Array.isArray(a) ? a.map((c) => Be(c)) : [Be(a)]), d = te(
    u,
    (c) => {
      if (i(), r.value && n) {
        s = new ResizeObserver(t);
        for (const f of c)
          f && s.observe(f, l);
      }
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    i(), d();
  };
  return mt(p), {
    isSupported: r,
    stop: p
  };
}
function di(a, t = {}) {
  const e = si(t), n = I(() => Be(a));
  return { focused: I(() => n.value && e.value ? n.value.contains(e.value) : !1) };
}
function Sl(a = ui()) {
  const t = Rn(), e = () => {
    const n = Be(a);
    n && (t.value = n.parentElement);
  };
  return ai(e), te(() => Ne(a), e), t;
}
function ae(a, t, e, n = {}) {
  var l, s, r;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c,
    shouldEmit: f
  } = n, m = vt(), g = e || (m == null ? void 0 : m.emit) || ((l = m == null ? void 0 : m.$emit) == null ? void 0 : l.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let v = d;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const S = (y) => i ? typeof i == "function" ? i(y) : ri(y) : y, x = () => Ur(a[t]) ? S(a[t]) : c, D = (y) => {
    f ? f(y) && g(v, y) : g(v, y);
  };
  if (u) {
    const y = x(), E = T(y);
    let P = !1;
    return te(
      () => a[t],
      ($) => {
        P || (P = !0, E.value = S($), se(() => P = !1));
      }
    ), te(
      E,
      ($) => {
        !P && ($ !== a[t] || p) && D($);
      },
      { deep: p }
    ), E;
  } else
    return I({
      get() {
        return x();
      },
      set(y) {
        D(y);
      }
    });
}
function Wa(a) {
  return a ? a.flatMap((t) => t.type === we ? Wa(t.children) : [t]) : [];
}
const ci = ["INPUT", "TEXTAREA"];
function $t(a, t, e, n = {}) {
  if (!t || n.enableIgnoredElement && ci.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: l = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: p = !1
  } = n, [c, f, m, g, v, S] = [
    a.key === "ArrowRight",
    a.key === "ArrowLeft",
    a.key === "ArrowUp",
    a.key === "ArrowDown",
    a.key === "Home",
    a.key === "End"
  ], x = m || g, D = c || f;
  if (!v && !S && (!x && !D || l === "vertical" && D || l === "horizontal" && x))
    return null;
  const y = e ? Array.from(e.querySelectorAll(s)) : r;
  if (!y.length)
    return null;
  d && a.preventDefault();
  let E = null;
  return D || x ? E = El(y, t, {
    goForward: x ? g : u === "ltr" ? c : f,
    loop: i
  }) : v ? E = y.at(0) || null : S && (E = y.at(-1) || null), p && (E == null || E.focus()), E;
}
function El(a, t, e, n = a.length) {
  if (--n === 0)
    return null;
  const l = a.indexOf(t), s = e.goForward ? l + 1 : l - 1;
  if (!e.loop && (s < 0 || s >= a.length))
    return null;
  const r = (s + a.length) % a.length, i = a[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? El(
    a,
    i,
    e,
    n
  ) : i : null;
}
function vn(a) {
  if (a === null || typeof a != "object")
    return !1;
  const t = Object.getPrototypeOf(a);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in a ? !1 : Symbol.toStringTag in a ? Object.prototype.toString.call(a) === "[object Module]" : !0;
}
function wn(a, t, e = ".", n) {
  if (!vn(t))
    return wn(a, {}, e, n);
  const l = Object.assign({}, t);
  for (const s in a) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = a[s];
    r != null && (n && n(l, s, r, e) || (Array.isArray(r) && Array.isArray(l[s]) ? l[s] = [...r, ...l[s]] : vn(r) && vn(l[s]) ? l[s] = wn(
      r,
      l[s],
      (e ? `${e}.` : "") + s.toString(),
      n
    ) : l[s] = r));
  }
  return l;
}
function pi(a) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((e, n) => wn(e, n, "", a), {})
  );
}
const fi = pi(), [Kn, vi] = Q("ConfigProvider"), sv = /* @__PURE__ */ _({
  __name: "ConfigProvider",
  props: {
    dir: { default: "ltr" },
    scrollBody: { type: [Boolean, Object], default: !0 },
    useId: { type: Function, default: void 0 }
  },
  setup(a) {
    const t = a, { dir: e, scrollBody: n } = ne(t);
    return vi({
      dir: e,
      scrollBody: n,
      useId: t.useId
    }), (l, s) => C(l.$slots, "default");
  }
});
let mi = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", hi = (a = 21) => {
  let t = "", e = a;
  for (; e--; )
    t += mi[Math.random() * 64 | 0];
  return t;
};
const yi = Wr(() => {
  const a = T(/* @__PURE__ */ new Map()), t = T(), e = I(() => {
    for (const r of a.value.values())
      if (r)
        return !0;
    return !1;
  }), n = Kn({
    scrollBody: T(!0)
  });
  let l = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Vo && (l == null || l()), t.value = void 0;
  };
  return te(e, (r, i) => {
    var c;
    if (!Je)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, p = (c = n.scrollBody) != null && c.value ? typeof n.scrollBody.value == "object" ? fi({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = `${p.padding}px`, document.body.style.marginRight = `${p.margin}px`, document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Vo && (l = je(
      document,
      "touchmove",
      (f) => {
        var m;
        f.target === document.documentElement && (f.touches.length > 1 || (m = f.preventDefault) == null || m.call(f));
      },
      { passive: !1 }
    )), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), a;
});
function ya(a) {
  const t = hi(6), e = yi();
  e.value.set(t, a ?? !1);
  const n = I({
    get: () => e.value.get(t) ?? !1,
    set: (l) => e.value.set(t, l)
  });
  return ti(() => {
    e.value.delete(t);
  }), n;
}
const gi = "data-radix-vue-collection-item";
function Me(a, t = gi) {
  const e = a ?? Symbol();
  return { createCollection: (s) => {
    const r = T([]);
    function i() {
      const u = Be(s);
      return u ? r.value = Array.from(
        u.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return sr(() => {
      r.value = [];
    }), oe(i), sl(i), te(() => s == null ? void 0 : s.value, i, { immediate: !0 }), al(e, r), r;
  }, injectCollection: () => tl(e, T([])) };
}
function Hn(a) {
  const t = T(a);
  function e() {
    return t.value;
  }
  function n(v) {
    t.value = v;
  }
  function l(v, S) {
    return new lt(t.value, S).format(v);
  }
  function s(v, S = !0) {
    return ia(v) && S ? l(Le(v), {
      dateStyle: "long",
      timeStyle: "long"
    }) : l(Le(v), {
      dateStyle: "long"
    });
  }
  function r(v, S = {}) {
    return new lt(t.value, { month: "long", year: "numeric", ...S }).format(v);
  }
  function i(v, S = {}) {
    return new lt(t.value, { month: "long", ...S }).format(v);
  }
  function u() {
    const v = mr(Vn());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Le(v.set({ month: x }))), value: x }));
  }
  function d(v, S = {}) {
    return new lt(t.value, { year: "numeric", ...S }).format(v);
  }
  function p(v, S) {
    return pl(v) ? new lt(t.value, {
      ...S,
      timeZone: v.timeZone
    }).formatToParts(Le(v)) : new lt(t.value, S).formatToParts(Le(v));
  }
  function c(v, S = "narrow") {
    return new lt(t.value, { weekday: S }).format(v);
  }
  function f(v) {
    var D;
    return ((D = new lt(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(v).find((y) => y.type === "dayPeriod")) == null ? void 0 : D.value) === "PM" ? "PM" : "AM";
  }
  const m = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function g(v, S, x = {}) {
    const D = { ...m, ...x }, E = p(v, D).find((P) => P.type === S);
    return E ? E.value : "";
  }
  return {
    setLocale: n,
    getLocale: e,
    fullMonth: i,
    fullYear: d,
    fullMonthAndYear: r,
    toParts: p,
    custom: l,
    part: g,
    dayPeriod: f,
    selectedDate: s,
    dayOfWeek: c,
    getMonths: u
  };
}
function _e(a) {
  const t = Kn({
    dir: T("ltr")
  });
  return I(() => {
    var e;
    return (a == null ? void 0 : a.value) || ((e = t.dir) == null ? void 0 : e.value) || "ltr";
  });
}
function Re(a) {
  const t = vt(), e = t == null ? void 0 : t.type.emits, n = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((l) => {
    n[rr(rl(l))] = (...s) => a(l, ...s);
  }), n;
}
let mn = 0;
function Wn() {
  ye((a) => {
    if (!Je)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Lo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Lo()
    ), mn++, a(() => {
      mn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), mn--;
    });
  });
}
function Lo() {
  const a = document.createElement("span");
  return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", a;
}
function Qe(a) {
  return I(() => {
    var t;
    return Ne(a) ? !!((t = Be(a)) != null && t.closest("form")) : !0;
  });
}
function It(a) {
  const t = vt(), e = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((l, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (l[s] = r), l;
  }, {}), n = ir(a);
  return I(() => {
    const l = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      l[rl(r)] = s[r];
    }), Object.keys({ ...e, ...l }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function xe(a, t) {
  const e = It(a), n = t ? Re(t) : {};
  return I(() => ({
    ...e.value,
    ...n
  }));
}
function R() {
  const a = vt(), t = T(), e = I(() => {
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
function Pl(a, t) {
  const e = Dt(!1, 300), n = T(null), l = ua();
  function s() {
    n.value = null, e.value = !1;
  }
  function r(i, u) {
    const d = i.currentTarget, p = { x: i.clientX, y: i.clientY }, c = bi(p, d.getBoundingClientRect()), f = Ci(p, c), m = _i(u.getBoundingClientRect()), g = xi([...f, ...m]);
    n.value = g, e.value = !0;
  }
  return ye((i) => {
    if (a.value && t.value) {
      const u = (p) => r(p, t.value), d = (p) => r(p, a.value);
      a.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var p, c;
        (p = a.value) == null || p.removeEventListener("pointerleave", u), (c = t.value) == null || c.removeEventListener("pointerleave", d);
      });
    }
  }), ye((i) => {
    if (n.value) {
      const u = (d) => {
        var g, v;
        if (!n.value)
          return;
        const p = d.target, c = { x: d.clientX, y: d.clientY }, f = ((g = a.value) == null ? void 0 : g.contains(p)) || ((v = t.value) == null ? void 0 : v.contains(p)), m = !wi(c, n.value);
        f ? s() : m && (s(), l.trigger());
      };
      document.addEventListener("pointermove", u), i(() => document.removeEventListener("pointermove", u));
    }
  }), {
    isPointerInTransit: e,
    onPointerExit: l.on
  };
}
function bi(a, t) {
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
function Ci(a, t, e = 5) {
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
function _i(a) {
  const { top: t, right: e, bottom: n, left: l } = a;
  return [
    { x: l, y: t },
    { x: e, y: t },
    { x: e, y: n },
    { x: l, y: n }
  ];
}
function wi(a, t) {
  const { x: e, y: n } = a;
  let l = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, p = t[r].y;
    u > n != p > n && e < (d - i) * (n - u) / (p - u) + i && (l = !l);
  }
  return l;
}
function xi(a) {
  const t = a.slice();
  return t.sort((e, n) => e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0), Si(t);
}
function Si(a) {
  if (a.length <= 1)
    return a.slice();
  const t = [];
  for (let n = 0; n < a.length; n++) {
    const l = a[n];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], r = t[t.length - 2];
      if ((s.x - r.x) * (l.y - r.y) >= (s.y - r.y) * (l.x - r.x))
        t.pop();
      else
        break;
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
      else
        break;
    }
    e.push(l);
  }
  return e.pop(), t.length === 1 && e.length === 1 && t[0].x === e[0].x && t[0].y === e[0].y ? t : t.concat(e);
}
var Ei = function(a) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(a) ? a[0] : a;
  return t.ownerDocument.body;
}, Vt = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Pa = {}, hn = 0, Dl = function(a) {
  return a && (a.host || Dl(a.parentNode));
}, Pi = function(a, t) {
  return t.map(function(e) {
    if (a.contains(e))
      return e;
    var n = Dl(e);
    return n && a.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", a, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
}, Di = function(a, t, e, n) {
  var l = Pi(t, Array.isArray(a) ? a : [a]);
  Pa[e] || (Pa[e] = /* @__PURE__ */ new WeakMap());
  var s = Pa[e], r = [], i = /* @__PURE__ */ new Set(), u = new Set(l), d = function(c) {
    !c || i.has(c) || (i.add(c), d(c.parentNode));
  };
  l.forEach(d);
  var p = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(f) {
      if (i.has(f))
        p(f);
      else {
        var m = f.getAttribute(n), g = m !== null && m !== "false", v = (Vt.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
        Vt.set(f, v), s.set(f, S), r.push(f), v === 1 && g && Ea.set(f, !0), S === 1 && f.setAttribute(e, "true"), g || f.setAttribute(n, "true");
      }
    });
  };
  return p(t), i.clear(), hn++, function() {
    r.forEach(function(c) {
      var f = Vt.get(c) - 1, m = s.get(c) - 1;
      Vt.set(c, f), s.set(c, m), f || (Ea.has(c) || c.removeAttribute(n), Ea.delete(c)), m || c.removeAttribute(e);
    }), hn--, hn || (Vt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Pa = {});
  };
}, $i = function(a, t, e) {
  e === void 0 && (e = "data-aria-hidden");
  var n = Array.from(Array.isArray(a) ? a : [a]), l = t || Ei(a);
  return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live]"))), Di(n, l, e, "aria-hidden")) : function() {
    return null;
  };
};
function ga(a) {
  let t;
  te(() => Be(a), (e) => {
    e ? t = $i(e) : t && t();
  }), Te(() => {
    t && t();
  });
}
let Ii = 0;
function me(a, t = "radix") {
  if (a)
    return a;
  const { useId: e } = Kn({ useId: void 0 });
  return e && typeof e == "function" ? `${t}-${e()}` : `${t}-${++Ii}`;
}
function Bi(a, t) {
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
    const p = (f = i().filter((m) => m.ref.dataset.disabled !== "").find((m) => m.ref === r)) == null ? void 0 : f.value;
    if (!p)
      return;
    let c = null;
    switch (s) {
      case "prev":
      case "next": {
        c = St(u, e.value, p);
        break;
      }
      case "first": {
        c = St(u, e.value, u == null ? void 0 : u[0]);
        break;
      }
      case "last": {
        c = St(u, e.value, u == null ? void 0 : u[u.length - 1]);
        break;
      }
    }
    a.value = c;
  }
  return {
    firstValue: e,
    onSelectItem: n,
    handleMultipleReplace: l
  };
}
function $l(a) {
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
          const p = i.borderBoxSize, c = Array.isArray(p) ? p[0] : p;
          u = c.inlineSize, d = c.blockSize;
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
function Il(a, t) {
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
function ba(a) {
  const t = Dt("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (l, s) => {
      var f, m;
      if (!(a != null && a.value) && !s)
        return;
      t.value = t.value + l;
      const r = (a == null ? void 0 : a.value) ?? s, i = document.activeElement, u = ((m = (f = r.find((g) => g === i)) == null ? void 0 : f.textContent) == null ? void 0 : m.trim()) ?? "", d = r.map((g) => {
        var v;
        return ((v = g.textContent) == null ? void 0 : v.trim()) ?? "";
      }), p = Un(d, t.value, u), c = r.find(
        (g) => {
          var v;
          return ((v = g.textContent) == null ? void 0 : v.trim()) === p;
        }
      );
      return c && c.focus(), c;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function jn(a, t) {
  return a.map((e, n) => a[(t + n) % a.length]);
}
function Un(a, t, e) {
  const l = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? a.indexOf(e) : -1;
  let r = jn(a, Math.max(s, 0));
  l.length === 1 && (r = r.filter((d) => d !== e));
  const u = r.find(
    (d) => d.toLowerCase().startsWith(l.toLowerCase())
  );
  return u !== e ? u : void 0;
}
function rv(a, t) {
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
const Gn = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(a, { attrs: t, slots: e }) {
    return () => {
      var u, d;
      if (!e.default)
        return null;
      const n = Wa(e.default()), l = n.findIndex((p) => p.type !== ur);
      if (l === -1)
        return n;
      const s = n[l];
      (u = s.props) == null || delete u.ref;
      const r = s.props ? M(t, s.props) : t;
      t.class && ((d = s.props) != null && d.class) && delete s.props.class;
      const i = kn(s, r);
      for (const p in r)
        p.startsWith("on") && (i.props || (i.props = {}), i.props[p] = r[p]);
      return n.length === 1 ? i : (n[l] = i, n);
    };
  }
}), A = _({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => pt(n, t) : n !== "template" ? () => pt(a.as, t, { default: e.default }) : () => pt(Gn, t, { default: e.default });
  }
});
function Ae() {
  const a = T(), t = I(() => {
    var e, n;
    return ["#text", "#comment"].includes((e = a.value) == null ? void 0 : e.$el.nodeName) ? (n = a.value) == null ? void 0 : n.$el.nextElementSibling : Be(a);
  });
  return {
    primitiveElement: a,
    currentElement: t
  };
}
const [Bl, Ti] = Q("CollapsibleRoot"), Ri = /* @__PURE__ */ _({
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
    return Ti({
      contentId: "",
      disabled: r,
      open: s,
      onOpenToggle: () => {
        s.value = !s.value;
      }
    }), t({ open: s }), R(), (i, u) => (b(), w(o(A), {
      as: i.as,
      "as-child": n.asChild,
      "data-state": n.open ? "open" : "closed",
      "data-disabled": n.disabled ? "" : void 0
    }, {
      default: h(() => [
        C(i.$slots, "default", { open: o(s) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), Ai = /* @__PURE__ */ _({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Bl();
    return (n, l) => {
      var s, r;
      return b(), w(o(A), {
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
          C(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function ki(a, t) {
  const e = T({}), n = T("none"), l = a.value ? "mounted" : "unmounted", { state: s, dispatch: r } = Il(l, {
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
  }), i = (m) => {
    var g;
    if (Je) {
      const v = new CustomEvent(m, { bubbles: !1, cancelable: !1 });
      (g = t.value) == null || g.dispatchEvent(v);
    }
  };
  te(
    a,
    async (m, g) => {
      var S;
      const v = g !== m;
      if (await se(), v) {
        const x = n.value, D = Da(t.value);
        m ? (r("MOUNT"), i("enter"), D === "none" && i("after-enter")) : D === "none" || ((S = e.value) == null ? void 0 : S.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : g && x !== D ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (m) => {
    const g = Da(t.value), v = g.includes(
      m.animationName
    ), S = s.value === "mounted" ? "enter" : "leave";
    m.target === t.value && v && (i(`after-${S}`), r("ANIMATION_END")), m.target === t.value && g === "none" && r("ANIMATION_END");
  }, d = (m) => {
    m.target === t.value && (n.value = Da(t.value));
  }, p = te(
    t,
    (m, g) => {
      m ? (e.value = getComputedStyle(m), m.addEventListener("animationstart", d), m.addEventListener("animationcancel", u), m.addEventListener("animationend", u)) : (r("ANIMATION_END"), g == null || g.removeEventListener("animationstart", d), g == null || g.removeEventListener("animationcancel", u), g == null || g.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), c = te(s, () => {
    const m = Da(t.value);
    n.value = s.value === "mounted" ? m : "none";
  });
  return Te(() => {
    p(), c();
  }), {
    isPresent: I(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function Da(a) {
  return a && getComputedStyle(a).animationName || "none";
}
const De = _({
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
    const { present: n, forceMount: l } = ne(a), s = T(), { isPresent: r } = ki(n, s);
    e({ present: r });
    let i = t.default({ present: r });
    i = Wa(i || []);
    const u = vt();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const p = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${p}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((c) => `  - ${c}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l.value || n.value || r.value ? pt(t.default({ present: r })[0], {
      ref: (p) => {
        const c = Be(p);
        return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-radix-popper-content-wrapper") ? s.value = c.firstElementChild : s.value = c), c;
      }
    }) : null;
  }
}), Oi = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Bl();
    e.contentId || (e.contentId = me(void 0, "radix-vue-collapsible-content"));
    const n = T(), { forwardRef: l, currentElement: s } = R(), r = T(0), i = T(0), u = I(() => e.open.value), d = T(u.value), p = T();
    return te(
      () => {
        var c;
        return [u.value, (c = n.value) == null ? void 0 : c.present];
      },
      async () => {
        await se();
        const c = s.value;
        if (!c)
          return;
        p.value = p.value || {
          transitionDuration: c.style.transitionDuration,
          animationName: c.style.animationName
        }, c.style.transitionDuration = "0s", c.style.animationName = "none";
        const f = c.getBoundingClientRect();
        i.value = f.height, r.value = f.width, d.value || (c.style.transitionDuration = p.value.transitionDuration, c.style.animationName = p.value.animationName);
      },
      {
        immediate: !0
      }
    ), oe(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (c, f) => (b(), w(o(De), {
      ref_key: "presentRef",
      ref: n,
      present: c.forceMount || o(e).open.value,
      "force-mount": !0
    }, {
      default: h(() => {
        var m, g;
        return [
          q(o(A), M(c.$attrs, {
            id: o(e).contentId,
            ref: o(l),
            "as-child": t.asChild,
            as: c.as,
            "data-state": o(e).open.value ? "open" : "closed",
            "data-disabled": (m = o(e).disabled) != null && m.value ? "" : void 0,
            hidden: !((g = n.value) != null && g.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: h(() => {
              var v;
              return [
                (v = n.value) != null && v.present ? C(c.$slots, "default", { key: 0 }) : pe("", !0)
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
function Tl({ type: a, defaultValue: t, modelValue: e }) {
  const n = e || t;
  if (Nt(a) && Nt(e) && Nt(t))
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
function Mi({ type: a, defaultValue: t, modelValue: e }) {
  return a || Tl({ type: a, defaultValue: t, modelValue: e });
}
function Vi({ type: a, defaultValue: t }) {
  return t !== void 0 ? t : a === "single" ? void 0 : [];
}
function Rl(a, t) {
  const e = T(Mi(a)), n = ae(a, "modelValue", t, {
    defaultValue: Vi(a),
    passive: a.modelValue === void 0,
    deep: !0
  });
  te(
    () => [a.type, a.modelValue, a.defaultValue],
    () => {
      const r = Tl(a);
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
const [ja, Fi] = Q("AccordionRoot"), iv = /* @__PURE__ */ _({
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
    const e = a, n = t, { dir: l, disabled: s } = ne(e), r = _e(l), { modelValue: i, changeModelValue: u, isSingle: d } = Rl(e, n), { forwardRef: p, currentElement: c } = R();
    return Fi({
      disabled: s,
      direction: r,
      orientation: e.orientation,
      parentElement: c,
      isSingle: d,
      collapsible: e.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, m) => (b(), w(o(A), {
      ref: o(p),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: h(() => [
        C(f.$slots, "default", { modelValue: o(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [qn, Li] = Q("AccordionItem"), uv = /* @__PURE__ */ _({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, n = ja(), l = I(
      () => n.isSingle.value ? e.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(e.value)
    ), s = I(() => n.disabled.value || e.disabled || n.isSingle.value && l.value && !n.collapsible), r = I(() => s.value ? "" : void 0), i = I(
      () => l.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: l, dataDisabled: r });
    const { currentRef: u, currentElement: d } = R();
    Li({
      open: l,
      dataState: i,
      disabled: s,
      dataDisabled: r,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: I(() => e.value)
    });
    function p(c) {
      $t(
        c,
        d.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: !0
        }
      );
    }
    return (c, f) => (b(), w(o(Ri), {
      "data-orientation": o(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: l.value,
      as: e.as,
      "as-child": e.asChild,
      onKeydown: re(p, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: h(() => [
        C(c.$slots, "default", { open: l.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), dv = /* @__PURE__ */ _({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ja(), n = qn();
    return R(), (l, s) => (b(), w(o(Oi), {
      role: "region",
      hidden: !o(n).open.value,
      "as-child": t.asChild,
      "aria-labelledby": o(n).triggerId,
      "data-state": o(n).dataState.value,
      "data-disabled": o(n).dataDisabled.value,
      "data-orientation": o(e).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), cv = /* @__PURE__ */ _({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(a) {
    const t = a, e = ja(), n = qn();
    return R(), (l, s) => (b(), w(o(A), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": o(e).orientation,
      "data-state": o(n).dataState.value,
      "data-disabled": o(n).dataDisabled.value
    }, {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), pv = /* @__PURE__ */ _({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ja(), n = qn();
    n.triggerId || (n.triggerId = me(void 0, "radix-vue-accordion-trigger"));
    function l() {
      n.disabled.value || e.changeModelValue(n.value.value);
    }
    return (s, r) => (b(), w(o(Ai), {
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
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), Ni = "data-radix-vue-collection-item", [Yn, zi] = Q("CollectionProvider");
function Gt(a = Ni) {
  const t = T(/* @__PURE__ */ new Map()), e = T(), n = zi({
    collectionRef: e,
    itemMap: t,
    attrName: a
  }), { getItems: l } = Xt(n), s = I(() => Array.from(n.itemMap.value.values())), r = I(() => n.itemMap.value.size);
  return { getItems: l, reactiveItems: s, itemMapSize: r };
}
const qt = _({
  name: "CollectionSlot",
  setup(a, { slots: t }) {
    const e = Yn(), { primitiveElement: n, currentElement: l } = Ae();
    return te(l, () => {
      e.collectionRef.value = l.value;
    }), () => pt(Gn, { ref: n }, t);
  }
}), Yt = _({
  name: "CollectionItem",
  inheritAttrs: !1,
  setup(a, { slots: t, attrs: e }) {
    const n = Yn(), { primitiveElement: l, currentElement: s } = Ae(), { value: r, ...i } = e;
    return ye((u) => {
      if (s.value) {
        const d = dr(s.value);
        n.itemMap.value.set(d, { ref: s.value, value: r }), u(() => n.itemMap.value.delete(d));
      }
    }), () => pt(Gn, { ...i, [n.attrName]: "", ref: l }, t);
  }
});
function Xt(a) {
  const t = a ?? Yn();
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
const Ki = { class: "" }, [Xn, Hi] = Q("AIChat"), fv = /* @__PURE__ */ _({
  __name: "AIChatRoot",
  props: {
    prompt: { default: "" },
    messages: { default: () => [] },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:prompt", "update:messages", "send"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = ae(e, "prompt", n, {
      defaultValue: "",
      passive: e.prompt === void 0
    }), s = ae(e, "messages", n, {
      defaultValue: [],
      passive: e.messages === void 0,
      deep: !0
    }), r = T(), { getItems: i, reactiveItems: u, itemMapSize: d } = Gt("data-radix-vue-ai-chat-item");
    return te(() => d.value, () => {
      s.value = i().map((p) => p.value);
    }, {
      immediate: !0,
      flush: "post"
    }), Hi({
      prompt: l,
      messages: s,
      inputElement: r,
      onInputElementChange: (p) => r.value = p,
      onSendMessage: () => {
        n("send");
      }
    }), (p, c) => (b(), ue("div", Ki, [
      ve(" AIChatRoot "),
      C(p.$slots, "default")
    ]));
  }
}), vv = /* @__PURE__ */ _({
  __name: "AIChatInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "textarea" }
  },
  setup(a) {
    const t = a, e = Xn(), { forwardRef: n, currentElement: l } = R();
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
    return (r, i) => (b(), w(o(A), {
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
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-disabled"]));
  }
}), mv = /* @__PURE__ */ _({
  __name: "AIChatContent",
  setup(a) {
    return (t, e) => (b(), w(o(qt), null, {
      default: h(() => [
        q(o(A), { as: "div" }, {
          default: h(() => [
            C(t.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), hv = /* @__PURE__ */ _({
  __name: "AIChatMessageItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    Xn();
    const { forwardRef: t } = R(), e = me(void 0, "radix-vue-ai-chat-item"), n = me(void 0, "radix-vue-ai-chat-option");
    return (l, s) => (b(), w(o(Yt), null, {
      default: h(() => [
        q(o(A), {
          id: o(n),
          ref: o(t),
          role: "textbox",
          tabindex: "-1",
          "aria-labelledby": o(e),
          as: l.as,
          "as-child": l.asChild
        }, {
          default: h(() => [
            C(l.$slots, "default", {}, () => [
              ve($e(l.value.content), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), yv = /* @__PURE__ */ _({
  __name: "AIChatSend",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Xn(), { forwardRef: n } = R();
    return (l, s) => (b(), w(o(A), M(t, {
      ref: o(n),
      type: l.as === "button" ? "button" : void 0,
      onClick: o(e).onSendMessage
    }), {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "onClick"]));
  }
}), [tt, Wi] = Q("DialogRoot"), ji = /* @__PURE__ */ _({
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
    return Wi({
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
}), Ui = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = tt(), { forwardRef: n, currentElement: l } = R();
    return e.contentId || (e.contentId = me(void 0, "radix-vue-dialog-content")), oe(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (b(), w(o(A), M(t, {
      ref: o(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": o(e).open.value || !1,
      "aria-controls": o(e).open.value ? o(e).contentId : void 0,
      "data-state": o(e).open.value ? "open" : "closed",
      onClick: o(e).onOpenToggle
    }), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), ht = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = Ha();
    return (e, n) => o(t) || e.forceMount ? (b(), w(Wt, {
      key: 0,
      to: e.to,
      disabled: e.disabled
    }, [
      C(e.$slots, "default")
    ], 8, ["to", "disabled"])) : pe("", !0);
  }
}), gv = /* @__PURE__ */ _({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ht), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gi = "dismissableLayer.pointerDownOutside", qi = "dismissableLayer.focusOutside";
function Al(a, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), n = a.dataset.dismissableLayer === "" ? a : a.querySelector(
    "[data-dismissable-layer]"
  ), l = Array.from(
    a.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(e && n === e || l.indexOf(n) < l.indexOf(e));
}
function kl(a, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = T(!1), l = T(() => {
  });
  return ye((r) => {
    if (!Je)
      return;
    const i = async (d) => {
      const p = d.target;
      if (t != null && t.value) {
        if (Al(t.value, p)) {
          n.value = !1;
          return;
        }
        if (d.target && !n.value) {
          let c = function() {
            zt(
              Gi,
              a,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", l.value), l.value = c, e.addEventListener("click", l.value, {
            once: !0
          })) : c();
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
function Ol(a, t) {
  var l;
  const e = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = T(!1);
  return ye((s) => {
    if (!Je)
      return;
    const r = async (i) => {
      t != null && t.value && (await se(), !(!t.value || Al(t.value, i.target)) && i.target && !n.value && zt(
        qi,
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
const We = Oa({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), yt = /* @__PURE__ */ _({
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
    ), i = I(() => We.layersRoot), u = I(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = I(() => We.layersWithOutsidePointerEventsDisabled.size > 0), p = I(() => {
      const g = Array.from(i.value), [v] = [...We.layersWithOutsidePointerEventsDisabled].slice(-1), S = g.indexOf(v);
      return u.value >= S;
    }), c = kl(async (g) => {
      const v = [...We.branches].some(
        (S) => S.contains(g.target)
      );
      !p.value || v || (n("pointerDownOutside", g), n("interactOutside", g), await se(), g.defaultPrevented || n("dismiss"));
    }, s), f = Ol((g) => {
      [...We.branches].some(
        (S) => S.contains(g.target)
      ) || (n("focusOutside", g), n("interactOutside", g), g.defaultPrevented || n("dismiss"));
    }, s);
    zn("Escape", (g) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", g), g.defaultPrevented || n("dismiss"));
    });
    let m;
    return ye((g) => {
      s.value && (e.disableOutsidePointerEvents && (We.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), We.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), g(() => {
        e.disableOutsidePointerEvents && We.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), ye((g) => {
      g(() => {
        s.value && (i.value.delete(s.value), We.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (g, v) => (b(), w(o(A), {
      ref: o(l),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: Ce({
        pointerEvents: d.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: o(f).onFocusCapture,
      onBlurCapture: o(f).onBlurCapture,
      onPointerdownCapture: o(c).onPointerDownCapture
    }, {
      default: h(() => [
        C(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Yi = /* @__PURE__ */ _({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = R();
    return oe(() => {
      We.branches.add(n.value);
    }), Te(() => {
      We.branches.delete(n.value);
    }), (l, s) => (b(), w(o(A), M({ ref: o(e) }, t), {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yn = "focusScope.autoFocusOnMount", gn = "focusScope.autoFocusOnUnmount", No = { bubbles: !1, cancelable: !0 };
function Aa(a, { select: t = !1 } = {}) {
  const e = document.activeElement;
  for (const n of a)
    if (dt(n, { select: t }), document.activeElement !== e)
      return !0;
}
function Xi(a) {
  const t = Zn(a), e = zo(t, a), n = zo(t.reverse(), a);
  return [e, n];
}
function Zn(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function zo(a, t) {
  for (const e of a)
    if (!Zi(e, { upTo: t }))
      return e;
}
function Zi(a, { upTo: t }) {
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
function Ji(a) {
  return a instanceof HTMLInputElement && "select" in a;
}
function dt(a, { select: t = !1 } = {}) {
  if (a && a.focus) {
    const e = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== e && Ji(a) && t && a.select();
  }
}
const Qi = Hr(() => T([]));
function eu() {
  const a = Qi();
  return {
    add(t) {
      const e = a.value[0];
      t !== e && (e == null || e.pause()), a.value = Ko(a.value, t), a.value.unshift(t);
    },
    remove(t) {
      var e;
      a.value = Ko(a.value, t), (e = a.value[0]) == null || e.resume();
    }
  };
}
function Ko(a, t) {
  const e = [...a], n = e.indexOf(t);
  return n !== -1 && e.splice(n, 1), e;
}
function tu(a) {
  return a.filter((t) => t.tagName !== "A");
}
const Ua = /* @__PURE__ */ _({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, { currentRef: l, currentElement: s } = R(), r = T(null), i = eu(), u = Oa({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ye((p) => {
      if (!Je)
        return;
      const c = s.value;
      if (!e.trapped)
        return;
      function f(S) {
        if (u.paused || !c)
          return;
        const x = S.target;
        c.contains(x) ? r.value = x : dt(r.value, { select: !0 });
      }
      function m(S) {
        if (u.paused || !c)
          return;
        const x = S.relatedTarget;
        x !== null && (c.contains(x) || dt(r.value, { select: !0 }));
      }
      function g(S) {
        c.contains(r.value) || dt(c);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const v = new MutationObserver(g);
      c && v.observe(c, { childList: !0, subtree: !0 }), p(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), v.disconnect();
      });
    }), ye(async (p) => {
      const c = s.value;
      if (await se(), !c)
        return;
      i.add(u);
      const f = document.activeElement;
      if (!c.contains(f)) {
        const g = new CustomEvent(yn, No);
        c.addEventListener(yn, (v) => n("mountAutoFocus", v)), c.dispatchEvent(g), g.defaultPrevented || (Aa(tu(Zn(c)), {
          select: !0
        }), document.activeElement === f && dt(c));
      }
      p(() => {
        c.removeEventListener(yn, (S) => n("mountAutoFocus", S));
        const g = new CustomEvent(gn, No), v = (S) => {
          n("unmountAutoFocus", S);
        };
        c.addEventListener(gn, v), c.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || dt(f ?? document.body, { select: !0 }), c.removeEventListener(gn, v), i.remove(u);
        }, 0);
      });
    });
    function d(p) {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const c = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = document.activeElement;
      if (c && f) {
        const m = p.currentTarget, [g, v] = Xi(m);
        g && v ? !p.shiftKey && f === v ? (p.preventDefault(), e.loop && dt(g, { select: !0 })) : p.shiftKey && f === g && (p.preventDefault(), e.loop && dt(v, { select: !0 })) : f === m && p.preventDefault();
      }
    }
    return (p, c) => (b(), w(o(A), {
      ref_key: "currentRef",
      ref: l,
      tabindex: "-1",
      "as-child": p.asChild,
      as: p.as,
      onKeydown: d
    }, {
      default: h(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), au = "menu.itemSelect", xn = ["Enter", " "], nu = ["ArrowDown", "PageUp", "Home"], Ml = ["ArrowUp", "PageDown", "End"], ou = [...nu, ...Ml], lu = {
  ltr: [...xn, "ArrowRight"],
  rtl: [...xn, "ArrowLeft"]
}, su = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Jn(a) {
  return a ? "open" : "closed";
}
function Va(a) {
  return a === "indeterminate";
}
function Qn(a) {
  return Va(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
function Sn(a) {
  const t = document.activeElement;
  for (const e of a)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function ru(a, t) {
  const { x: e, y: n } = a;
  let l = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, p = t[r].y;
    u > n != p > n && e < (d - i) * (n - u) / (p - u) + i && (l = !l);
  }
  return l;
}
function iu(a, t) {
  if (!t)
    return !1;
  const e = { x: a.clientX, y: a.clientY };
  return ru(e, t);
}
function da(a) {
  return a.pointerType === "mouse";
}
const uu = "DialogTitle", du = "DialogContent";
function cu({
  titleName: a = uu,
  contentName: t = du,
  componentLink: e = "dialog.html#title",
  titleId: n,
  descriptionId: l,
  contentElement: s
}) {
  const r = `Warning: \`${t}\` requires a \`${a}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${e}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  oe(() => {
    var p;
    document.getElementById(n) || console.warn(r);
    const d = (p = s.value) == null ? void 0 : p.getAttribute("aria-describedby");
    l && !d && (document.getElementById(l) || console.warn(i));
  });
}
const Vl = /* @__PURE__ */ _({
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
    return l.titleId || (l.titleId = me(void 0, "radix-vue-dialog-title")), l.descriptionId || (l.descriptionId = me(void 0, "radix-vue-dialog-description")), oe(() => {
      l.contentElement = r, document.activeElement !== document.body && (l.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && cu({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: l.titleId,
      descriptionId: l.descriptionId,
      contentElement: l.contentElement
    }), (i, u) => (b(), w(o(Ua), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: h(() => [
        q(o(yt), M({
          id: o(l).contentId,
          ref: o(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": o(l).descriptionId,
          "aria-labelledby": o(l).titleId,
          "data-state": o(Jn)(o(l).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => o(l).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => n("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => n("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => n("pointerDownOutside", d))
        }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), pu = /* @__PURE__ */ _({
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
    const e = a, n = t, l = tt(), s = Re(n), { forwardRef: r, currentElement: i } = R();
    return ga(i), (u, d) => (b(), w(Vl, M({ ...e, ...o(s) }, {
      ref: o(r),
      "trap-focus": o(l).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        p.defaultPrevented || (p.preventDefault(), (c = o(l).triggerElement.value) == null || c.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (p) => {
        const c = p.detail.originalEvent, f = c.button === 0 && c.ctrlKey === !0;
        (c.button === 2 || f) && p.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (p) => {
        p.preventDefault();
      })
    }), {
      default: h(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), fu = /* @__PURE__ */ _({
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
    const e = a, l = Re(t);
    R();
    const s = tt(), r = T(!1), i = T(!1);
    return (u, d) => (b(), w(Vl, M({ ...e, ...o(l) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        p.defaultPrevented || (r.value || (c = o(s).triggerElement.value) == null || c.focus(), p.preventDefault()), r.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (p) => {
        var m;
        p.defaultPrevented || (r.value = !0, p.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const c = p.target;
        ((m = o(s).triggerElement.value) == null ? void 0 : m.contains(c)) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && i.value && p.preventDefault();
      })
    }), {
      default: h(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vu = /* @__PURE__ */ _({
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
    const e = a, n = t, l = tt(), s = Re(n), { forwardRef: r } = R();
    return (i, u) => (b(), w(o(De), {
      present: i.forceMount || o(l).open.value
    }, {
      default: h(() => [
        o(l).modal.value ? (b(), w(pu, M({
          key: 0,
          ref: o(r)
        }, { ...e, ...o(s), ...i.$attrs }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), w(fu, M({
          key: 1,
          ref: o(r)
        }, { ...e, ...o(s), ...i.$attrs }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), mu = /* @__PURE__ */ _({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = tt();
    return ya(!0), R(), (e, n) => (b(), w(o(A), {
      as: e.as,
      "as-child": e.asChild,
      "data-state": o(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), hu = /* @__PURE__ */ _({
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
      return (s = o(t)) != null && s.modal.value ? (b(), w(o(De), {
        key: 0,
        present: n.forceMount || o(t).open.value
      }, {
        default: h(() => [
          q(mu, M(n.$attrs, {
            ref: o(e),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: h(() => [
              C(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : pe("", !0);
    };
  }
}), Fl = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = tt();
    return (n, l) => (b(), w(o(A), M(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (s) => o(e).onOpenChange(!1))
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), yu = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a) {
    const t = a, e = tt();
    return R(), (n, l) => (b(), w(o(A), M(t, {
      id: o(e).titleId
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), gu = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    R();
    const e = tt();
    return (n, l) => (b(), w(o(A), M(t, {
      id: o(e).descriptionId
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), bv = /* @__PURE__ */ _({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return R(), (s, r) => (b(), w(o(ji), M(o(l), { modal: !0 }), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cv = /* @__PURE__ */ _({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(Ui), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _v = /* @__PURE__ */ _({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ht), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [bu, Cu] = Q("AlertDialogContent"), wv = /* @__PURE__ */ _({
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
    const e = a, l = Re(t);
    R();
    const s = T();
    return Cu({
      onCancelElementChange: (r) => {
        s.value = r;
      }
    }), (r, i) => (b(), w(o(vu), M({ ...e, ...o(l) }, {
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
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xv = /* @__PURE__ */ _({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(hu), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sv = /* @__PURE__ */ _({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = bu(), { forwardRef: n, currentElement: l } = R();
    return oe(() => {
      e.onCancelElementChange(l.value);
    }), (s, r) => (b(), w(o(Fl), M(t, { ref: o(n) }), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ev = /* @__PURE__ */ _({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(yu), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pv = /* @__PURE__ */ _({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(gu), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dv = /* @__PURE__ */ _({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(Fl), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $v = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = I(() => 1 / t.ratio * 100);
    return (l, s) => (b(), ue("div", {
      style: Ce(`position: relative; width: 100%; padding-bottom: ${n.value}%`),
      "data-radix-aspect-ratio-wrapper": ""
    }, [
      q(o(A), M({
        ref: o(e),
        "as-child": l.asChild,
        as: l.as,
        style: { position: "absolute", inset: "0px" }
      }, l.$attrs), {
        default: h(() => [
          C(l.$slots, "default", { aspect: n.value })
        ]),
        _: 3
      }, 16, ["as-child", "as"])
    ], 4));
  }
}), [Ll, _u] = Q("AvatarRoot"), Iv = /* @__PURE__ */ _({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return R(), _u({
      imageLoadingStatus: T("loading")
    }), (t, e) => (b(), w(o(A), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: h(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function wu(a) {
  const t = T("idle"), e = T(!1), n = (l) => () => {
    e.value && (t.value = l);
  };
  return oe(() => {
    e.value = !0, te(a, (l) => {
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
const Bv = /* @__PURE__ */ _({
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
    const s = Ll(), r = wu(l);
    return te(
      r,
      (i) => {
        n("loadingStatusChange", i), i !== "idle" && (s.imageLoadingStatus.value = i);
      },
      { immediate: !0 }
    ), (i, u) => za((b(), w(o(A), {
      role: "img",
      "as-child": i.asChild,
      as: i.as,
      src: o(l)
    }, {
      default: h(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])), [
      [On, o(r) === "loaded"]
    ]);
  }
}), Tv = /* @__PURE__ */ _({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Ll();
    R();
    const n = T(!1);
    let l;
    return te(e.imageLoadingStatus, (s) => {
      s === "loading" && (n.value = !1, t.delayMs ? l = setTimeout(() => {
        n.value = !0, clearTimeout(l);
      }, t.delayMs) : n.value = !0);
    }, { immediate: !0 }), (s, r) => n.value && o(e).imageLoadingStatus.value !== "loaded" ? (b(), w(o(A), {
      key: 0,
      "as-child": s.asChild,
      as: s.as
    }, {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : pe("", !0);
  }
});
function xu(a) {
  function t(n) {
    return Array.isArray(a.date.value) ? a.date.value.some((l) => ke(l, n)) : a.date.value ? ke(a.date.value, n) : !1;
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
function Su(a, t) {
  const e = t(a), n = e.compare(a), l = {};
  return n >= 7 && (l.day = 1), n >= Et(a) && (l.month = 1), e.set({ ...l });
}
function Eu(a, t) {
  const e = t(a), n = a.compare(e), l = {};
  return n >= 7 && (l.day = 35), n >= Et(a) && (l.month = 13), e.set({ ...l });
}
function Pu(a, t) {
  return t(a);
}
function Du(a, t) {
  return t(a);
}
function Nl(a) {
  const t = Hn(a.locale.value), e = I(() => {
    const v = {
      calendar: a.placeholder.value.calendar.identifier
    };
    return a.placeholder.value.calendar.identifier === "gregory" && a.placeholder.value.era === "BC" && (v.era = "short"), v;
  }), n = T(_t({
    dateObj: a.placeholder.value,
    weekStartsOn: a.weekStartsOn.value,
    locale: a.locale.value,
    fixedWeeks: a.fixedWeeks.value,
    numberOfMonths: a.numberOfMonths.value
  })), l = I(() => n.value.map((v) => v.value));
  function s(v) {
    return !l.value.some((S) => ko(v, S));
  }
  const r = (v = "month", S) => {
    if (!a.maxValue.value || !n.value.length)
      return !1;
    if (a.disabled.value)
      return !0;
    const x = n.value[n.value.length - 1].value;
    if (S || a.nextPage.value) {
      const y = Su(x, S || a.nextPage.value);
      return xa(y, a.maxValue.value);
    }
    if (v === "year") {
      const y = x.add({ years: 1 }).set({ day: 1, month: 1 });
      return xa(y, a.maxValue.value);
    }
    const D = x.add({ months: 1 }).set({ day: 1 });
    return xa(D, a.maxValue.value);
  }, i = (v = "month", S) => {
    if (!a.minValue.value || !n.value.length)
      return !1;
    if (a.disabled.value)
      return !0;
    const x = n.value[0].value;
    if (S || a.prevPage.value) {
      const y = Eu(x, S || a.prevPage.value);
      return Oe(y, a.minValue.value);
    }
    if (v === "year") {
      const y = x.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Oe(y, a.minValue.value);
    }
    const D = x.subtract({ months: 1 }).set({ day: 35 });
    return Oe(D, a.minValue.value);
  };
  function u(v) {
    var S;
    return !!((S = a.isDateDisabled) != null && S.call(a, v) || a.disabled.value || a.maxValue.value && xa(v, a.maxValue.value) || a.minValue.value && Oe(v, a.minValue.value));
  }
  const d = (v) => {
    var S;
    return !!((S = a.isDateUnavailable) != null && S.call(a, v));
  }, p = I(() => n.value.length ? n.value[0].rows[0].map((v) => t.dayOfWeek(Le(v), a.weekdayFormat.value)) : []), c = (v = "month", S) => {
    const x = n.value[0].value;
    if (S || a.nextPage.value) {
      const E = Pu(x, S || a.nextPage.value), P = _t({
        dateObj: E,
        weekStartsOn: a.weekStartsOn.value,
        locale: a.locale.value,
        fixedWeeks: a.fixedWeeks.value,
        numberOfMonths: a.numberOfMonths.value
      });
      n.value = P;
      const $ = {};
      if (!S) {
        const B = P[0].value.compare(x);
        B >= Et(x) && ($.day = 1), B >= 365 && ($.month = 1);
      }
      a.placeholder.value = P[0].value.set({ ...$ });
      return;
    }
    const D = v === "month" ? x.add({ months: a.pagedNavigation.value ? a.numberOfMonths.value : 1 }) : x.add({ years: 1 }), y = _t({
      dateObj: D,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
    n.value = y, a.placeholder.value = y[0].value.set({ day: 1 });
  }, f = (v = "month", S) => {
    const x = n.value[0].value;
    if (S || a.prevPage.value) {
      const E = Du(x, S || a.prevPage.value), P = _t({
        dateObj: E,
        weekStartsOn: a.weekStartsOn.value,
        locale: a.locale.value,
        fixedWeeks: a.fixedWeeks.value,
        numberOfMonths: a.numberOfMonths.value
      });
      n.value = P;
      const $ = {};
      if (!S) {
        const B = x.compare(P[0].value);
        B >= Et(x) && ($.day = 1), B >= 365 && ($.month = 1);
      }
      a.placeholder.value = P[0].value.set({ ...$ });
      return;
    }
    const D = v === "month" ? x.subtract({ months: a.pagedNavigation.value ? a.numberOfMonths.value : 1 }) : x.subtract({ years: 1 }), y = _t({
      dateObj: D,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
    n.value = y, a.placeholder.value = y[0].value.set({ day: 1 });
  };
  te(a.placeholder, (v) => {
    l.value.some((S) => ko(S, v)) || (n.value = _t({
      dateObj: v,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    }));
  }), te([a.locale, a.weekStartsOn, a.fixedWeeks, a.numberOfMonths], () => {
    n.value = _t({
      dateObj: a.placeholder.value,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
  });
  const m = I(() => {
    if (!n.value.length)
      return "";
    if (a.locale.value !== t.getLocale() && t.setLocale(a.locale.value), n.value.length === 1) {
      const $ = n.value[0].value;
      return `${t.fullMonthAndYear(Le($), e.value)}`;
    }
    const v = Le(n.value[0].value), S = Le(n.value[n.value.length - 1].value), x = t.fullMonth(v, e.value), D = t.fullMonth(S, e.value), y = t.fullYear(v, e.value), E = t.fullYear(S, e.value);
    return y === E ? `${x} - ${D} ${E}` : `${x} ${y} - ${D} ${E}`;
  }), g = I(() => `${a.calendarLabel.value ?? "Event Date"}, ${m.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: d,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: p,
    visibleView: l,
    isOutsideVisibleView: s,
    formatter: t,
    nextPage: c,
    prevPage: f,
    headingValue: m,
    fullCalendarLabel: g
  };
}
const $u = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Iu = {
  role: "heading",
  "aria-level": "2"
}, [Zt, Bu] = Q("CalendarRoot"), Tu = /* @__PURE__ */ _({
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
      weekdayFormat: p,
      fixedWeeks: c,
      multiple: f,
      minValue: m,
      maxValue: g,
      numberOfMonths: v,
      preventDeselect: S,
      isDateDisabled: x,
      isDateUnavailable: D,
      calendarLabel: y,
      defaultValue: E,
      nextPage: P,
      prevPage: $,
      dir: B
    } = ne(e), { primitiveElement: O, currentElement: F } = Ae(), k = _e(B), V = ae(e, "modelValue", n, {
      defaultValue: E.value,
      passive: e.modelValue === void 0
    }), H = jt({
      defaultPlaceholder: e.placeholder,
      defaultValue: V.value
    }), Y = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? H.copy(),
      passive: e.placeholder === void 0
    });
    function J(de) {
      Y.value = de.copy();
    }
    const {
      fullCalendarLabel: N,
      headingValue: L,
      isDateDisabled: W,
      isDateUnavailable: z,
      isNextButtonDisabled: Z,
      isPrevButtonDisabled: U,
      weekdays: X,
      isOutsideVisibleView: ee,
      nextPage: fe,
      prevPage: G,
      formatter: le,
      grid: he
    } = Nl({
      locale: l,
      placeholder: Y,
      weekStartsOn: d,
      fixedWeeks: c,
      numberOfMonths: v,
      minValue: m,
      maxValue: g,
      disabled: s,
      weekdayFormat: p,
      pagedNavigation: u,
      isDateDisabled: x.value,
      isDateUnavailable: D.value,
      calendarLabel: y,
      nextPage: P,
      prevPage: $
    }), {
      isInvalid: Se,
      isDateSelected: ge
    } = xu({
      date: V,
      isDateDisabled: W,
      isDateUnavailable: z
    });
    te(V, (de) => {
      if (Array.isArray(de) && de.length) {
        const Ee = de[de.length - 1];
        Ee && !Pe(Y.value, Ee) && J(Ee);
      } else
        !Array.isArray(de) && de && !Pe(Y.value, de) && J(de);
    });
    function Ie(de) {
      if (f.value) {
        if (Array.isArray(V.value)) {
          if (!V.value) {
            V.value = [de.copy()];
            return;
          }
          if (V.value.findIndex((Ve) => ke(Ve, de)) === -1)
            V.value = [...V.value, de];
          else if (!S.value) {
            const Ve = V.value.filter((Ke) => !ke(Ke, de));
            if (!Ve.length) {
              Y.value = de.copy(), V.value = void 0;
              return;
            }
            V.value = Ve.map((Ke) => Ke.copy());
          }
        }
      } else {
        if (!V.value) {
          V.value = de.copy();
          return;
        }
        !S.value && Pe(V.value, de) ? (Y.value = de.copy(), V.value = void 0) : V.value = de.copy();
      }
    }
    return oe(() => {
      i.value && yl(F.value);
    }), Bu({
      isDateUnavailable: z,
      dir: k,
      isDateDisabled: W,
      locale: l,
      formatter: le,
      modelValue: V,
      placeholder: Y,
      disabled: s,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: p,
      fixedWeeks: c,
      multiple: f,
      numberOfMonths: v,
      readonly: r,
      preventDeselect: S,
      fullCalendarLabel: N,
      headingValue: L,
      isInvalid: Se,
      isDateSelected: ge,
      isNextButtonDisabled: Z,
      isPrevButtonDisabled: U,
      isOutsideVisibleView: ee,
      nextPage: fe,
      prevPage: G,
      parentElement: F,
      onPlaceholderChange: J,
      onDateChange: Ie
    }), (de, Ee) => (b(), w(o(A), {
      ref_key: "primitiveElement",
      ref: O,
      as: de.as,
      "as-child": de.asChild,
      role: "application",
      "aria-label": o(N),
      "data-readonly": o(r) ? "" : void 0,
      "data-disabled": o(s) ? "" : void 0,
      "data-invalid": o(Se) ? "" : void 0,
      dir: o(k)
    }, {
      default: h(() => [
        C(de.$slots, "default", {
          date: o(Y),
          grid: o(he),
          weekDays: o(X),
          weekStartsOn: o(d),
          locale: o(l),
          fixedWeeks: o(c)
        }),
        Ue("div", $u, [
          Ue("div", Iu, $e(o(N)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Ru = /* @__PURE__ */ _({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Au = /* @__PURE__ */ _({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = Zt();
    return (n, l) => (b(), w(o(A), M(t, {
      "data-disabled": o(e).disabled.value ? "" : void 0
    }), {
      default: h(() => [
        C(n.$slots, "default", {
          headingValue: o(e).headingValue.value
        }, () => [
          ve($e(o(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), ku = /* @__PURE__ */ _({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a) {
    const t = a, e = Zt(), n = I(() => e.disabled.value ? !0 : void 0), l = I(() => e.readonly.value ? !0 : void 0);
    return (s, r) => (b(), w(o(A), M(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": l.value,
      "aria-disabled": n.value,
      "data-readonly": l.value && "",
      "data-disabled": n.value && ""
    }), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Ou = /* @__PURE__ */ _({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a) {
    const t = Zt();
    return (e, n) => {
      var l, s;
      return b(), w(o(A), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": o(t).isDateSelected(e.date) ? !0 : void 0,
        "aria-disabled": o(t).isDateDisabled(e.date) || ((s = (l = o(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": o(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: h(() => [
          C(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Mu = /* @__PURE__ */ _({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vu = /* @__PURE__ */ _({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Zt();
    return (n, l) => (b(), w(o(A), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": o(e).isNextButtonDisabled(t.step, t.nextPage) || void 0,
      "data-disabled": o(e).isNextButtonDisabled(t.step, t.nextPage) || void 0,
      disabled: o(e).isNextButtonDisabled(t.step, t.nextPage),
      onClick: l[0] || (l[0] = (s) => o(e).nextPage(t.step, t.nextPage))
    }, {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Fu = /* @__PURE__ */ _({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Zt();
    return (n, l) => (b(), w(o(A), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": o(e).isPrevButtonDisabled(t.step, t.prevPage) || void 0,
      "data-disabled": o(e).isPrevButtonDisabled(t.step, t.prevPage) || void 0,
      disabled: o(e).isPrevButtonDisabled(t.step, t.prevPage),
      onClick: l[0] || (l[0] = (s) => o(e).prevPage(t.step, t.prevPage))
    }, {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Lu = /* @__PURE__ */ _({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), M(t, { "aria-hidden": "true" }), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nu = /* @__PURE__ */ _({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zu = /* @__PURE__ */ _({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ku = /* @__PURE__ */ _({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = et(), n = Zt(), { primitiveElement: l, currentElement: s } = Ae(), r = I(() => t.day.day.toLocaleString(n.locale.value)), i = I(() => n.formatter.custom(Le(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = I(() => n.isDateDisabled(t.day)), d = I(
      () => {
        var y;
        return (y = n.isDateUnavailable) == null ? void 0 : y.call(n, t.day);
      }
    ), p = I(() => dl(t.day, Vn())), c = I(() => !cl(t.day, t.month)), f = I(
      () => n.isOutsideVisibleView(t.day)
    ), m = I(() => ke(t.day, n.placeholder.value)), g = I(() => n.isDateSelected(t.day)), v = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function S(y) {
      var E;
      n.readonly.value || n.isDateDisabled(y) || (E = n.isDateUnavailable) != null && E.call(n, y) || n.onDateChange(y);
    }
    function x() {
      S(t.day);
    }
    function D(y) {
      y.preventDefault(), y.stopPropagation();
      const E = n.parentElement.value, P = E ? Array.from(E.querySelectorAll(v)) : [];
      let B = P.indexOf(s.value);
      const O = 7, F = n.dir.value === "rtl" ? -1 : 1;
      switch (y.code) {
        case e.ARROW_RIGHT:
          B += F;
          break;
        case e.ARROW_LEFT:
          B -= F;
          break;
        case e.ARROW_UP:
          B -= O;
          break;
        case e.ARROW_DOWN:
          B += O;
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
          const k = E ? Array.from(E.querySelectorAll(v)) : [];
          k[k.length - Math.abs(B)].focus();
        });
        return;
      }
      if (B >= P.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), se(() => {
          (E ? Array.from(E.querySelectorAll(v)) : [])[B - P.length].focus();
        });
      }
    }
    return (y, E) => (b(), w(o(A), M({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": c.value || u.value || d.value ? !0 : void 0,
      "data-selected": g.value ? !0 : void 0,
      "data-value": y.day.toString(),
      "data-disabled": u.value || c.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": p.value ? "" : void 0,
      "data-outside-view": c.value ? "" : void 0,
      "data-outside-visible-view": f.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : c.value || u.value ? void 0 : -1,
      onClick: x,
      onKeydown: [
        re(D, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = re(ie(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: h(() => [
        C(y.$slots, "default", { dayValue: r.value }, () => [
          ve($e(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Fa(a) {
  return a === "indeterminate";
}
function zl(a) {
  return Fa(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
const Hu = ["value", "checked", "name", "disabled", "required"], [Wu, ju] = Q("CheckboxRoot"), Rv = /* @__PURE__ */ _({
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
      var p;
      return e.id && i.value ? (p = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return ju({
      disabled: l,
      state: s
    }), (p, c) => (b(), ue(we, null, [
      q(o(A), M(p.$attrs, {
        id: p.id,
        ref: o(r),
        role: "checkbox",
        "as-child": e.asChild,
        as: p.as,
        type: p.as === "button" ? "button" : void 0,
        "aria-checked": o(Fa)(o(s)) ? "mixed" : o(s),
        "aria-required": !1,
        "aria-label": p.$attrs["aria-label"] || d.value,
        "data-state": o(zl)(o(s)),
        "data-disabled": o(l) ? "" : void 0,
        disabled: o(l),
        onKeydown: re(ie(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c[0] || (c[0] = (f) => s.value = o(Fa)(o(s)) ? !0 : !o(s))
      }), {
        default: h(() => [
          C(p.$slots, "default", { checked: o(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      o(u) ? (b(), ue("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: p.value,
        checked: !!o(s),
        name: e.name,
        disabled: e.disabled,
        required: e.required,
        style: Ce({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, Hu)) : pe("", !0)
    ], 64));
  }
}), Av = /* @__PURE__ */ _({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t } = R(), e = Wu();
    return (n, l) => (b(), w(o(De), {
      present: n.forceMount || o(Fa)(o(e).state.value) || o(e).state.value === !0
    }, {
      default: h(() => [
        q(o(A), M({
          ref: o(t),
          "data-state": o(zl)(o(e).state.value),
          "data-disabled": o(e).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: h(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Kl, Uu] = Q("PopperRoot"), Bt = /* @__PURE__ */ _({
  __name: "PopperRoot",
  setup(a) {
    const t = T();
    return Uu({
      anchor: t,
      onAnchorChange: (e) => t.value = e
    }), (e, n) => C(e.$slots, "default");
  }
}), Tt = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = R(), l = Kl();
    return te(n, () => {
      l.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (b(), w(o(A), {
      ref: o(e),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Gu(a) {
  return a !== null;
}
function qu(a) {
  return {
    name: "transformOrigin",
    options: a,
    fn(t) {
      var S, x, D;
      const { placement: e, rects: n, middlewareData: l } = t, r = ((S = l.arrow) == null ? void 0 : S.centerOffset) !== 0, i = r ? 0 : a.arrowWidth, u = r ? 0 : a.arrowHeight, [d, p] = En(e), c = { start: "0%", center: "50%", end: "100%" }[p], f = (((x = l.arrow) == null ? void 0 : x.x) ?? 0) + i / 2, m = (((D = l.arrow) == null ? void 0 : D.y) ?? 0) + u / 2;
      let g = "", v = "";
      return d === "bottom" ? (g = r ? c : `${f}px`, v = `${-u}px`) : d === "top" ? (g = r ? c : `${f}px`, v = `${n.floating.height + u}px`) : d === "right" ? (g = `${-u}px`, v = r ? c : `${m}px`) : d === "left" && (g = `${n.floating.width + u}px`, v = r ? c : `${m}px`), { data: { x: g, y: v } };
    }
  };
}
function En(a) {
  const [t, e = "center"] = a.split("-");
  return [t, e];
}
const Hl = {
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
}, [Yu, Xu] = Q("PopperContent"), Pt = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ il({
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
    ...Hl
  }),
  emits: ["placed"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Kl(), { forwardRef: s, currentElement: r } = R(), i = T(), u = T(), { width: d, height: p } = $l(u), c = I(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), f = I(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), m = I(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), g = I(() => ({
      padding: f.value,
      boundary: m.value.filter(Gu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), v = zr(() => [
      Cr({
        mainAxis: e.sideOffset + p.value,
        alignmentAxis: e.alignOffset
      }),
      e.prioritizePosition && e.avoidCollisions && Oo({
        ...g.value
      }),
      e.avoidCollisions && _r({
        mainAxis: !0,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? wr() : void 0,
        ...g.value
      }),
      !e.prioritizePosition && e.avoidCollisions && Oo({
        ...g.value
      }),
      xr({
        ...g.value,
        apply: ({ elements: k, rects: V, availableWidth: H, availableHeight: Y }) => {
          const { width: J, height: N } = V.reference, L = k.floating.style;
          Object.assign(k.floating.style, {
            maxWidth: `${H}px`,
            maxHeight: `${Y}px`
          }), L.setProperty(
            "--radix-popper-available-width",
            `${H}px`
          ), L.setProperty(
            "--radix-popper-available-height",
            `${Y}px`
          ), L.setProperty(
            "--radix-popper-anchor-width",
            `${J}px`
          ), L.setProperty(
            "--radix-popper-anchor-height",
            `${N}px`
          );
        }
      }),
      u.value && Sr({ element: u.value, padding: e.arrowPadding }),
      qu({
        arrowWidth: d.value,
        arrowHeight: p.value
      }),
      e.hideWhenDetached && Er({ strategy: "referenceHidden", ...g.value })
    ]), { floatingStyles: S, placement: x, isPositioned: D, middlewareData: y } = gr(
      l.anchor,
      i,
      {
        strategy: "fixed",
        placement: c,
        whileElementsMounted: (...k) => br(...k, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: v
      }
    ), E = I(
      () => En(x.value)[0]
    ), P = I(
      () => En(x.value)[1]
    );
    ye(() => {
      D.value && n("placed");
    });
    const $ = I(
      () => {
        var k;
        return ((k = y.value.arrow) == null ? void 0 : k.centerOffset) !== 0;
      }
    ), B = T("");
    ye(() => {
      r.value && (B.value = window.getComputedStyle(r.value).zIndex);
    });
    const O = I(() => {
      var k;
      return ((k = y.value.arrow) == null ? void 0 : k.x) ?? 0;
    }), F = I(() => {
      var k;
      return ((k = y.value.arrow) == null ? void 0 : k.y) ?? 0;
    });
    return Xu({
      placedSide: E,
      onArrowChange: (k) => u.value = k,
      arrowX: O,
      arrowY: F,
      shouldHideArrow: $
    }), (k, V) => {
      var H, Y, J;
      return b(), ue("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Ce({
          ...o(S),
          transform: o(D) ? o(S).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B.value,
          "--radix-popper-transform-origin": [
            (H = o(y).transformOrigin) == null ? void 0 : H.x,
            (Y = o(y).transformOrigin) == null ? void 0 : Y.y
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
        q(o(A), M({ ref: o(s) }, k.$attrs, {
          "as-child": e.asChild,
          as: k.as,
          "data-side": E.value,
          "data-align": P.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: o(D) ? void 0 : "none"
          }
        }), {
          default: h(() => [
            C(k.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Zu = /* @__PURE__ */ Ue("polygon", { points: "0,0 30,0 15,10" }, null, -1), Ju = /* @__PURE__ */ _({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(A), M(t, {
      width: e.width,
      height: e.height,
      viewBox: e.asChild ? void 0 : "0 0 30 10",
      preserveAspectRatio: e.asChild ? void 0 : "none"
    }), {
      default: h(() => [
        C(e.$slots, "default", {}, () => [
          Zu
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), Qu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Jt = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const { forwardRef: t } = R(), e = Yu(), n = I(() => Qu[e.placedSide.value]);
    return (l, s) => {
      var r, i, u, d;
      return b(), ue("span", {
        ref: (p) => {
          o(e).onArrowChange(p);
        },
        style: Ce({
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
        q(Ju, M(l.$attrs, {
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
            C(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "width", "height"])
      ], 4);
    };
  }
}), Qt = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return R(), (t, e) => (b(), w(o(A), {
      as: t.as,
      "as-child": t.asChild,
      style: Ce({
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
      })
    }, {
      default: h(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "style"]));
  }
}), eo = /* @__PURE__ */ _({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = I(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, l) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${l}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${l}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, l]) => ({ name: `[${t.name}][${n}]`, value: l })) : []);
    return (n, l) => (b(!0), ue(we, null, ma(e.value, (s) => (b(), w(Qt, {
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
}), [nt, ed] = Q("ComboboxRoot"), kv = /* @__PURE__ */ _({
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
    const e = a, n = t, { multiple: l, disabled: s, dir: r } = ne(e), i = _e(r), u = ae(e, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: e.searchTerm === void 0
    }), d = ae(e, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: e.defaultValue ?? l.value ? [] : void 0,
      passive: e.modelValue === void 0,
      deep: !0
    }), p = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), c = ae(e, "selectedValue", n, {
      defaultValue: void 0,
      passive: e.selectedValue === void 0
    });
    async function f(N) {
      var L, W;
      p.value = N, await se(), N ? (d.value && (Array.isArray(d.value) && l.value ? c.value = (L = y().find((z) => {
        var Z, U;
        return ((U = (Z = z.ref) == null ? void 0 : Z.dataset) == null ? void 0 : U.state) === "checked";
      })) == null ? void 0 : L.value : c.value = d.value), (W = v.value) == null || W.focus(), Y()) : (g.value = !1, e.resetSearchTermOnBlur && O());
    }
    function m(N) {
      if (Array.isArray(d.value) && l.value) {
        const L = d.value.findIndex((z) => Ye(z, N)), W = [...d.value];
        L === -1 ? W.push(N) : W.splice(L, 1), d.value = W;
      } else
        d.value = N, f(!1);
    }
    const g = T(!1), v = T(), S = T(), { forwardRef: x, currentElement: D } = R(), { getItems: y, reactiveItems: E, itemMapSize: P } = Gt("data-radix-vue-combobox-item"), $ = T([]);
    te(() => P.value, () => {
      $.value = y().map((N) => N.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const B = I(() => {
      if (g.value) {
        if (e.filterFunction)
          return e.filterFunction($.value, u.value);
        const N = $.value.filter((L) => typeof L == "string");
        if (N.length)
          return N.filter((L) => {
            var W;
            return L.toLowerCase().includes((W = u.value) == null ? void 0 : W.toLowerCase());
          });
      }
      return $.value;
    });
    function O() {
      !l.value && d.value && !Array.isArray(d.value) ? e.displayValue ? u.value = e.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const F = I(() => B.value.findIndex((N) => Ye(N, c.value))), k = I(() => {
      var N;
      return (N = E.value.find((L) => Ye(L.value, c.value))) == null ? void 0 : N.ref;
    }), V = I(() => JSON.stringify(d.value));
    te(V, async () => {
      await se(), await se(), O();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !e.searchTerm
    }), te(() => [B.value.length, u.value.length], async ([N, L], [W, z]) => {
      await se(), await se(), N && (z > L || F.value === -1) && (c.value = B.value[0]);
    });
    const H = Qe(D);
    function Y() {
      k.value instanceof Element && k.value.scrollIntoView({ block: "nearest" });
    }
    function J() {
      k.value instanceof Element && k.value.focus && k.value.focus();
    }
    return ed({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: g,
      multiple: l,
      disabled: s,
      open: p,
      onOpenChange: f,
      filteredOptions: B,
      contentId: "",
      inputElement: v,
      selectedElement: k,
      onInputElementChange: (N) => v.value = N,
      onInputNavigation: async (N) => {
        const L = F.value;
        L === 0 && N === "up" || L === B.value.length - 1 && N === "down" || (L === -1 && B.value.length || N === "home" ? c.value = B.value[0] : N === "end" ? c.value = B.value[B.value.length - 1] : c.value = B.value[N === "up" ? L - 1 : L + 1], Y(), J(), se(() => {
          var W;
          return (W = v.value) == null ? void 0 : W.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async () => {
        var N;
        B.value.length && c.value && k.value instanceof Element && ((N = k.value) == null || N.click());
      },
      selectedValue: c,
      onSelectedValueChange: (N) => c.value = N,
      parentElement: D,
      contentElement: S,
      onContentElementChange: (N) => S.value = N
    }), (N, L) => (b(), w(o(Bt), null, {
      default: h(() => [
        q(o(A), M({
          ref: o(x),
          style: {
            pointerEvents: o(p) ? "auto" : void 0
          },
          as: N.as,
          "as-child": N.asChild,
          dir: o(i)
        }, N.$attrs), {
          default: h(() => [
            C(N.$slots, "default", {
              open: o(p),
              modelValue: o(d)
            }),
            o(H) && e.name ? (b(), w(o(eo), {
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
}), Ov = /* @__PURE__ */ _({
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
      const d = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      d && (e.onInputElementChange(d), setTimeout(() => {
        t.autoFocus && (d == null || d.focus());
      }, 1));
    });
    const s = I(() => t.disabled || e.disabled.value || !1);
    function r(d) {
      e.open.value ? e.onInputNavigation(d.key === "ArrowUp" ? "up" : "down") : e.onOpenChange(!0);
    }
    function i(d) {
      e.open.value && e.onInputNavigation(d.key === "Home" ? "home" : "end");
    }
    function u(d) {
      var p;
      e.searchTerm.value = (p = d.target) == null ? void 0 : p.value, e.open.value || e.onOpenChange(!0), e.isUserInputted.value = !0;
    }
    return (d, p) => {
      var c;
      return b(), w(o(A), {
        ref: o(n),
        as: d.as,
        "as-child": d.asChild,
        type: d.type,
        disabled: s.value,
        value: o(e).searchTerm.value,
        "aria-expanded": o(e).open.value,
        "aria-controls": o(e).contentId,
        "aria-disabled": s.value ?? void 0,
        "aria-activedescendant": (c = o(e).selectedElement.value) == null ? void 0 : c.id,
        "aria-autocomplete": "list",
        role: "combobox",
        autocomplete: "false",
        onInput: u,
        onKeydown: [
          re(ie(r, ["prevent"]), ["down", "up"]),
          re(o(e).onInputEnter, ["enter"]),
          re(ie(i, ["prevent"]), ["home", "end"])
        ]
      }, {
        default: h(() => [
          C(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]);
    };
  }
}), Mv = /* @__PURE__ */ _({
  __name: "ComboboxAnchor",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const { forwardRef: t } = R();
    return (e, n) => (b(), w(o(Tt), { "as-child": "" }, {
      default: h(() => [
        q(o(A), M({
          ref: o(t),
          "as-child": e.asChild,
          as: e.as
        }, e.$attrs), {
          default: h(() => [
            C(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }));
  }
}), Vv = /* @__PURE__ */ _({
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
    return (l, s) => (b(), w(o(A), M(t, {
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
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
}), Fv = /* @__PURE__ */ _({
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
    return (l, s) => (b(), w(o(A), M({
      type: l.as === "button" ? "button" : void 0
    }, t, {
      tabindex: "-1",
      onClick: n
    }), {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), [Wl, td] = Q("ComboboxGroup"), Lv = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { currentRef: e, currentElement: n } = R(), l = me(void 0, "radix-vue-combobox-group"), s = nt(), r = T(!1);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!u.length;
    }
    return ii(n, () => {
      se(() => {
        i();
      });
    }, { childList: !0 }), te(() => s.searchTerm.value, () => {
      se(() => {
        i();
      });
    }, { immediate: !0 }), td({
      id: l
    }), (u, d) => za((b(), w(o(A), M(t, {
      ref_key: "currentRef",
      ref: e,
      role: "group",
      "aria-labelledby": o(l)
    }), {
      default: h(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [On, r.value]
    ]);
  }
}), Nv = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Wl({ id: "" });
    return (n, l) => (b(), w(o(A), M(t, {
      id: o(e).id
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [ad, nd] = Q("ComboboxContent"), od = /* @__PURE__ */ _({
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
    ya(e.bodyLock);
    const { forwardRef: r, currentElement: i } = R();
    ga(i);
    const u = I(() => e.position === "popper" ? e : {}), d = It(u.value);
    function p(f) {
      s.onSelectedValueChange("");
    }
    oe(() => {
      s.onContentElementChange(i.value);
    });
    const c = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return nd({ position: l }), (f, m) => (b(), w(o(qt), null, {
      default: h(() => [
        f.dismissable ? (b(), w(o(yt), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (g) => o(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (g) => {
            var v;
            (v = o(s).parentElement.value) != null && v.contains(g.target) && g.preventDefault(), n("focusOutside", g);
          }),
          onInteractOutside: m[2] || (m[2] = (g) => n("interactOutside", g)),
          onEscapeKeyDown: m[3] || (m[3] = (g) => n("escapeKeyDown", g)),
          onPointerDownOutside: m[4] || (m[4] = (g) => {
            var v;
            (v = o(s).parentElement.value) != null && v.contains(g.target) && g.preventDefault(), n("pointerDownOutside", g);
          })
        }, {
          default: h(() => [
            (b(), w(Ge(o(l) === "popper" ? o(Pt) : o(A)), M({ ...f.$attrs, ...o(d) }, {
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
                ...o(l) === "popper" ? c : {}
              },
              onPointerleave: p
            }), {
              default: h(() => [
                C(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (b(), w(Ge(o(l) === "popper" ? o(Pt) : o(A)), M({ key: 1 }, { ...f.$attrs, ...u.value }, {
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
            ...o(l) === "popper" ? c : {}
          },
          onPointerleave: p
        }), {
          default: h(() => [
            C(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), zv = /* @__PURE__ */ _({
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
    return r.contentId || (r.contentId = me(void 0, "radix-vue-combobox-content")), (i, u) => (b(), w(o(De), {
      present: i.forceMount || o(r).open.value
    }, {
      default: h(() => [
        q(od, M({ ...o(l), ...i.$attrs }, { ref: o(s) }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Kv = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = nt(), n = I(() => e.filteredOptions.value.length === 0);
    return (l, s) => n.value ? (b(), w(o(A), K(M({ key: 0 }, t)), {
      default: h(() => [
        C(l.$slots, "default", {}, () => [
          ve("No options")
        ])
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Hv = /* @__PURE__ */ _({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), ue(we, null, [
      q(o(A), M({ ...n.$attrs, ...t }, {
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
          C(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      q(o(A), {
        as: "style",
        nonce: n.nonce
      }, {
        default: h(() => [
          ve(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), [ld, sd] = Q("ComboboxItem"), rd = "combobox.select", Wv = /* @__PURE__ */ _({
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
    Wl({ id: "", options: T([]) });
    const { forwardRef: r } = R(), i = I(
      () => {
        var v, S;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (v = s.modelValue.value) == null ? void 0 : v.some((x) => Ye(x, e.value)) : Ye((S = s.modelValue) == null ? void 0 : S.value, e.value);
      }
    ), u = I(() => Ye(s.selectedValue.value, e.value)), d = me(void 0, "radix-vue-combobox-item"), p = me(void 0, "radix-vue-combobox-option"), c = I(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((v) => Ye(v, e.value)) : !0);
    async function f(v) {
      n("select", v), !(v != null && v.defaultPrevented) && !l.value && v && s.onValueChange(e.value);
    }
    function m(v) {
      if (!v)
        return;
      const S = { originalEvent: v, value: e.value };
      zt(rd, f, S);
    }
    async function g(v) {
      await se(), !v.defaultPrevented && s.onSelectedValueChange(e.value);
    }
    if (e.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return sd({
      isSelected: i
    }), (v, S) => (b(), w(o(Yt), { value: v.value }, {
      default: h(() => [
        za(q(o(A), {
          id: o(p),
          ref: o(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": o(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": o(l) || void 0,
          "data-disabled": o(l) ? "" : void 0,
          as: v.as,
          "as-child": v.asChild,
          "data-hidden": c.value ? void 0 : !0,
          onClick: m,
          onPointermove: g
        }, {
          default: h(() => [
            C(v.$slots, "default", {}, () => [
              ve($e(v.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [On, c.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), jv = /* @__PURE__ */ _({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a;
    R();
    const e = ld();
    return (n, l) => o(e).isSelected.value ? (b(), w(o(A), M({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Uv = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(A), M(t, { "aria-hidden": "" }), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gv = /* @__PURE__ */ _({
  __name: "ComboboxArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a, e = nt(), n = ad();
    return R(), (l, s) => o(e).open.value && o(n).position.value === "popper" ? (b(), w(o(Jt), K(M({ key: 0 }, t)), {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), qv = /* @__PURE__ */ _({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ht), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ga = /* @__PURE__ */ _({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Tt), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), to = /* @__PURE__ */ _({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Jt), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Rt, jl] = Q(["MenuRoot", "MenuSub"], "MenuContext"), [Ca, id] = Q("MenuRoot"), ao = /* @__PURE__ */ _({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { modal: l, dir: s } = ne(e), r = _e(s), i = ae(e, "open", n), u = T(), d = T(!1);
    return ye((p) => {
      if (!Je)
        return;
      const c = () => {
        d.value = !0, document.addEventListener("pointerdown", f, {
          capture: !0,
          once: !0
        }), document.addEventListener("pointermove", f, {
          capture: !0,
          once: !0
        });
      }, f = () => d.value = !1;
      document.addEventListener("keydown", c, { capture: !0 }), p(() => {
        document.removeEventListener("keydown", c, { capture: !0 }), document.removeEventListener("pointerdown", f, {
          capture: !0
        }), document.removeEventListener("pointermove", f, {
          capture: !0
        });
      });
    }), jl({
      open: i,
      onOpenChange: (p) => {
        i.value = p;
      },
      content: u,
      onContentChange: (p) => {
        u.value = p;
      }
    }), id({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: r,
      modal: l
    }), (p, c) => (b(), w(o(Bt), null, {
      default: h(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ud = "rovingFocusGroup.onEntryFocus", dd = { bubbles: !1, cancelable: !0 }, qa = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function cd(a, t) {
  return t !== "rtl" ? a : a === "ArrowLeft" ? "ArrowRight" : a === "ArrowRight" ? "ArrowLeft" : a;
}
function Ul(a, t, e) {
  const n = cd(a.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return qa[n];
}
function Gl(a, t = !1) {
  const e = document.activeElement;
  for (const n of a)
    if (n === e || (n.focus({ preventScroll: t }), document.activeElement !== e))
      return;
}
function pd(a, t) {
  return a.map((e, n) => a[(t + n) % a.length]);
}
const [fd, vd] = Q("RovingFocusGroup"), At = /* @__PURE__ */ _({
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
    const n = a, l = e, { loop: s, orientation: r, dir: i } = ne(n), u = _e(i), d = ae(n, "currentTabStopId", l, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), p = T(!1), c = T(!1), f = T(0), { getItems: m } = Gt();
    function g(v) {
      const S = !c.value;
      if (v.currentTarget && v.target === v.currentTarget && S && !p.value) {
        const x = new CustomEvent(ud, dd);
        if (v.currentTarget.dispatchEvent(x), l("entryFocus", x), !x.defaultPrevented) {
          const D = m().map(($) => $.ref).filter(($) => $.dataset.disabled !== ""), y = D.find(($) => $.getAttribute("data-active") === "true"), E = D.find(
            ($) => $.id === d.value
          ), P = [y, E, ...D].filter(
            Boolean
          );
          Gl(P, n.preventScrollOnEntryFocus);
        }
      }
      c.value = !1;
    }
    return t({
      getItems: m
    }), vd({
      loop: s,
      dir: u,
      orientation: r,
      currentTabStopId: d,
      onItemFocus: (v) => {
        d.value = v;
      },
      onItemShiftTab: () => {
        p.value = !0;
      },
      onFocusableItemAdd: () => {
        f.value++;
      },
      onFocusableItemRemove: () => {
        f.value--;
      }
    }), (v, S) => (b(), w(o(qt), null, {
      default: h(() => [
        q(o(A), {
          tabindex: p.value || f.value === 0 ? -1 : 0,
          "data-orientation": o(r),
          as: v.as,
          "as-child": v.asChild,
          dir: o(u),
          style: { outline: "none" },
          onMousedown: S[0] || (S[0] = (x) => c.value = !0),
          onFocus: g,
          onBlur: S[1] || (S[1] = (x) => p.value = !1)
        }, {
          default: h(() => [
            C(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), kt = /* @__PURE__ */ _({
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
    const t = a, e = fd(), n = I(() => t.tabStopId || me()), l = I(
      () => e.currentTabStopId.value === n.value
    ), { getItems: s } = Xt();
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
      const u = Ul(
        i,
        e.orientation.value,
        e.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let d = [...s().map((p) => p.ref).filter((p) => p.dataset.disabled !== "")];
        if (u === "last")
          d.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && d.reverse();
          const p = d.indexOf(
            i.currentTarget
          );
          d = e.loop.value ? pd(d, p + 1) : d.slice(p + 1);
        }
        se(() => Gl(d));
      }
    }
    return (i, u) => (b(), w(o(Yt), null, {
      default: h(() => [
        q(o(A), {
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
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [no, md] = Q("MenuContent"), oo = /* @__PURE__ */ _({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ il({
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
    ...Hl
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Rt(), s = Ca(), { trapFocus: r, disableOutsidePointerEvents: i, loop: u } = ne(e);
    Wn(), ya(i.value);
    const d = T(""), p = T(0), c = T(0), f = T(null), m = T("right"), g = T(0), v = T(null), { createCollection: S } = Me(), { forwardRef: x, currentElement: D } = R(), y = S(D);
    te(D, (k) => {
      l.onContentChange(k);
    });
    const { handleTypeaheadSearch: E } = ba(y);
    Te(() => {
      window.clearTimeout(p.value);
    });
    function P(k) {
      var H, Y;
      return m.value === ((H = f.value) == null ? void 0 : H.side) && iu(k, (Y = f.value) == null ? void 0 : Y.area);
    }
    async function $(k) {
      var V;
      n("openAutoFocus", k), !k.defaultPrevented && (k.preventDefault(), (V = D.value) == null || V.focus({
        preventScroll: !0
      }));
    }
    function B(k) {
      if (k.defaultPrevented)
        return;
      const H = k.target.closest("[data-radix-menu-content]") === k.currentTarget, Y = k.ctrlKey || k.altKey || k.metaKey, J = k.key.length === 1, N = $t(
        k,
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
      if (k.code === "Space" || (H && (k.key === "Tab" && k.preventDefault(), !Y && J && E(k.key)), k.target !== D.value) || !ou.includes(k.key))
        return;
      k.preventDefault();
      const L = y.value;
      Ml.includes(k.key) && L.reverse(), Sn(L);
    }
    function O(k) {
      var V, H;
      (H = (V = k == null ? void 0 : k.currentTarget) == null ? void 0 : V.contains) != null && H.call(V, k.target) || (window.clearTimeout(p.value), d.value = "");
    }
    function F(k) {
      var Y;
      if (!da(k))
        return;
      const V = k.target, H = g.value !== k.clientX;
      if ((Y = k == null ? void 0 : k.currentTarget) != null && Y.contains(V) && H) {
        const J = k.clientX > g.value ? "right" : "left";
        m.value = J, g.value = k.clientX;
      }
    }
    return md({
      onItemEnter: (k) => !!P(k),
      onItemLeave: (k) => {
        var V;
        P(k) || ((V = D.value) == null || V.focus(), v.value = null);
      },
      onTriggerLeave: (k) => !!P(k),
      searchRef: d,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (k) => {
        f.value = k;
      }
    }), (k, V) => (b(), w(o(Ua), {
      "as-child": "",
      trapped: o(r),
      onMountAutoFocus: $,
      onUnmountAutoFocus: V[7] || (V[7] = (H) => n("closeAutoFocus", H))
    }, {
      default: h(() => [
        q(o(yt), {
          "as-child": "",
          "disable-outside-pointer-events": o(i),
          onEscapeKeyDown: V[2] || (V[2] = (H) => n("escapeKeyDown", H)),
          onPointerDownOutside: V[3] || (V[3] = (H) => n("pointerDownOutside", H)),
          onFocusOutside: V[4] || (V[4] = (H) => n("focusOutside", H)),
          onInteractOutside: V[5] || (V[5] = (H) => n("interactOutside", H)),
          onDismiss: V[6] || (V[6] = (H) => n("dismiss"))
        }, {
          default: h(() => [
            q(o(At), {
              "current-tab-stop-id": v.value,
              "onUpdate:currentTabStopId": V[0] || (V[0] = (H) => v.value = H),
              "as-child": "",
              orientation: "vertical",
              dir: o(s).dir.value,
              loop: o(u),
              onEntryFocus: V[1] || (V[1] = (H) => {
                n("entryFocus", H), o(s).isUsingKeyboardRef.value || H.preventDefault();
              })
            }, {
              default: h(() => [
                q(o(Pt), {
                  ref: o(x),
                  role: "menu",
                  as: k.as,
                  "as-child": k.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": o(Jn)(o(l).open.value),
                  dir: o(s).dir.value,
                  side: k.side,
                  "side-offset": k.sideOffset,
                  align: k.align,
                  "align-offset": k.alignOffset,
                  "avoid-collisions": k.avoidCollisions,
                  "collision-boundary": k.collisionBoundary,
                  "collision-padding": k.collisionPadding,
                  "arrow-padding": k.arrowPadding,
                  "prioritize-position": k.prioritizePosition,
                  sticky: k.sticky,
                  "hide-when-detached": k.hideWhenDetached,
                  onKeydown: B,
                  onBlur: O,
                  onPointermove: F
                }, {
                  default: h(() => [
                    C(k.$slots, "default")
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
}), ql = /* @__PURE__ */ _({
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = no(), n = T(!1);
    async function l(r) {
      if (!r.defaultPrevented && da(r)) {
        if (t.disabled)
          e.onItemLeave(r);
        else if (!e.onItemEnter(r)) {
          const u = r.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(r) {
      await se(), !r.defaultPrevented && da(r) && e.onItemLeave(r);
    }
    return (r, i) => (b(), w(o(A), {
      role: "menuitem",
      tabindex: "-1",
      as: r.as,
      "as-child": r.asChild,
      "data-radix-vue-collection-item": "",
      "aria-disabled": r.disabled || void 0,
      "data-disabled": r.disabled ? "" : void 0,
      "data-highlighted": n.value ? "" : void 0,
      onPointermove: l,
      onPointerleave: s,
      onFocus: i[0] || (i[0] = async (u) => {
        await se(), !(u.defaultPrevented || r.disabled) && (n.value = !0);
      }),
      onBlur: i[1] || (i[1] = async (u) => {
        await se(), !u.defaultPrevented && (n.value = !1);
      })
    }, {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"]));
  }
}), _a = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = Ca(), i = no(), u = T(!1);
    async function d() {
      const p = s.value;
      if (!e.disabled && p) {
        const c = new CustomEvent(au, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", c), await se(), c.defaultPrevented ? u.value = !1 : r.onClose();
      }
    }
    return (p, c) => (b(), w(ql, M(e, {
      ref: o(l),
      onClick: d,
      onPointerdown: c[0] || (c[0] = () => {
        u.value = !0;
      }),
      onPointerup: c[1] || (c[1] = async (f) => {
        var m;
        await se(), !f.defaultPrevented && (u.value || (m = f.currentTarget) == null || m.click());
      }),
      onKeydown: c[2] || (c[2] = async (f) => {
        const m = o(i).searchRef.value !== "";
        p.disabled || m && f.key === " " || o(xn).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: h(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [hd, Yl] = Q(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), lo = /* @__PURE__ */ _({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = hd({
      checked: T(!1)
    });
    return (e, n) => (b(), w(o(De), {
      present: e.forceMount || o(Va)(o(t).checked.value) || o(t).checked.value === !0
    }, {
      default: h(() => [
        q(o(A), {
          as: e.as,
          "as-child": e.asChild,
          "data-state": o(Qn)(o(t).checked.value)
        }, {
          default: h(() => [
            C(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), so = /* @__PURE__ */ _({
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
    return Yl({ checked: l }), (s, r) => (b(), w(_a, M({ role: "menuitemcheckbox" }, e, {
      "aria-checked": o(Va)(o(l)) ? "mixed" : o(l),
      "data-state": o(Qn)(o(l)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), o(Va)(o(l)) ? l.value = !0 : l.value = !o(l);
      })
    }), {
      default: h(() => [
        C(s.$slots, "default", { checked: o(l) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), yd = /* @__PURE__ */ _({
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
    const e = a, n = t, l = xe(e, n), s = Rt(), { forwardRef: r, currentElement: i } = R();
    return ga(i), (u, d) => (b(), w(oo, M(o(l), {
      ref: o(r),
      "trap-focus": o(s).open.value,
      "disable-outside-pointer-events": o(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (p) => o(s).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = ie((p) => n("focusOutside", p), ["prevent"]))
    }), {
      default: h(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), gd = /* @__PURE__ */ _({
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
    const l = xe(a, t), s = Rt();
    return (r, i) => (b(), w(oo, M(o(l), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: i[0] || (i[0] = (u) => o(s).onOpenChange(!1))
    }), {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ro = /* @__PURE__ */ _({
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
    const l = xe(a, t), s = Rt(), r = Ca();
    return (i, u) => (b(), w(o(De), {
      present: i.forceMount || o(s).open.value
    }, {
      default: h(() => [
        o(r).modal.value ? (b(), w(yd, K(M({ key: 0 }, { ...i.$attrs, ...o(l) })), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), w(gd, K(M({ key: 1 }, { ...i.$attrs, ...o(l) })), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ya = /* @__PURE__ */ _({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), M({ role: "group" }, t), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), io = /* @__PURE__ */ _({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uo = /* @__PURE__ */ _({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ht), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [bd, Cd] = Q("MenuRadioGroup"), co = /* @__PURE__ */ _({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "modelValue", t);
    return Cd({
      modelValue: l,
      onValueChange: (s) => {
        l.value = s;
      }
    }), (s, r) => (b(), w(Ya, K(j(e)), {
      default: h(() => [
        C(s.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 16));
  }
}), po = /* @__PURE__ */ _({
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
    const e = a, n = t, { value: l } = ne(e), s = bd(), r = I(
      () => s.modelValue.value === (l == null ? void 0 : l.value)
    );
    return Yl({ checked: r }), (i, u) => (b(), w(_a, M({ role: "menuitemradio" }, e, {
      "aria-checked": r.value,
      "data-state": o(Qn)(r.value),
      onSelect: u[0] || (u[0] = async (d) => {
        n("select", d), o(s).onValueChange(o(l));
      })
    }), {
      default: h(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), fo = /* @__PURE__ */ _({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), M(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Xl, _d] = Q("MenuSub"), vo = /* @__PURE__ */ _({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "open", t, {
      defaultValue: !1,
      passive: e.open === void 0
    }), s = Rt(), r = T(), i = T();
    return ye((u) => {
      (s == null ? void 0 : s.open.value) === !1 && (l.value = !1), u(() => l.value = !1);
    }), jl({
      open: l,
      onOpenChange: (u) => {
        l.value = u;
      },
      content: i,
      onContentChange: (u) => {
        i.value = u;
      }
    }), _d({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (u) => {
        r.value = u;
      }
    }), (u, d) => (b(), w(o(Bt), null, {
      default: h(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), mo = /* @__PURE__ */ _({
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
    const l = xe(a, t), s = Rt(), r = Ca(), i = Xl(), { forwardRef: u, currentElement: d } = R();
    return i.contentId || (i.contentId = me(void 0, "radix-vue-menu-sub-content")), (p, c) => (b(), w(o(De), {
      present: p.forceMount || o(s).open.value
    }, {
      default: h(() => [
        q(oo, M(o(l), {
          id: o(i).contentId,
          ref: o(u),
          "aria-labelledby": o(i).triggerId,
          align: "start",
          side: o(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = ie((f) => {
            var m;
            o(r).isUsingKeyboardRef.value && ((m = o(d)) == null || m.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = ie(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (f) => {
            f.defaultPrevented || f.target !== o(i).trigger.value && o(s).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (f) => {
            o(r).onClose(), f.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (f) => {
            var v, S;
            const m = (v = f.currentTarget) == null ? void 0 : v.contains(f.target), g = o(su)[o(r).dir.value].includes(f.key);
            m && g && (o(s).onOpenChange(!1), (S = o(i).trigger.value) == null || S.focus(), f.preventDefault());
          })
        }), {
          default: h(() => [
            C(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ho = /* @__PURE__ */ _({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Rt(), n = Ca(), l = Xl(), s = no(), r = T(null);
    l.triggerId || (l.triggerId = me(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    Te(() => {
      i();
    });
    function u(c) {
      !da(c) || s.onItemEnter(c) || !t.disabled && !e.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        e.onOpenChange(!0), i();
      }, 100));
    }
    async function d(c) {
      var m, g;
      if (!da(c))
        return;
      i();
      const f = (m = e.content.value) == null ? void 0 : m.getBoundingClientRect();
      if (f != null && f.width) {
        const v = (g = e.content.value) == null ? void 0 : g.dataset.side, S = v === "right", x = S ? -5 : 5, D = f[S ? "left" : "right"], y = f[S ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: c.clientX + x, y: c.clientY },
            { x: D, y: f.top },
            { x: y, y: f.top },
            { x: y, y: f.bottom },
            { x: D, y: f.bottom }
          ],
          side: v
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(c))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function p(c) {
      var m;
      const f = s.searchRef.value !== "";
      t.disabled || f && c.key === " " || lu[n.dir.value].includes(c.key) && (e.onOpenChange(!0), await se(), (m = e.content.value) == null || m.focus(), c.preventDefault());
    }
    return (c, f) => (b(), w(Ga, { "as-child": "" }, {
      default: h(() => [
        q(ql, M(t, {
          id: o(l).triggerId,
          ref: (m) => {
            var g;
            (g = o(l)) == null || g.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": o(e).open.value,
          "aria-controls": o(l).contentId,
          "data-state": o(Jn)(o(e).open.value),
          onClick: f[0] || (f[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), o(e).open.value || o(e).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: p
        }), {
          default: h(() => [
            C(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Zl, wd] = Q("ContextMenuRoot"), Yv = /* @__PURE__ */ _({
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
    const r = _e(l), i = T(!1);
    return wd({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      dir: r,
      modal: s
    }), te(i, (u) => {
      n("update:open", u);
    }), (u, d) => (b(), w(o(ao), {
      open: i.value,
      "onUpdate:open": d[0] || (d[0] = (p) => i.value = p),
      dir: o(r),
      modal: o(s)
    }, {
      default: h(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
function Ho(a) {
  return a.pointerType !== "mouse";
}
const Xv = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, { disabled: e } = ne(t), { forwardRef: n } = R(), l = Zl(), s = T({ x: 0, y: 0 }), r = I(() => ({
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
    function d(m) {
      s.value = { x: m.clientX, y: m.clientY }, l.onOpenChange(!0);
    }
    async function p(m) {
      e.value || (await se(), m.defaultPrevented || (u(), d(m), m.preventDefault()));
    }
    async function c(m) {
      e.value || (await se(), Ho(m) && !m.defaultPrevented && (u(), i.value = window.setTimeout(() => d(m), 700)));
    }
    async function f(m) {
      e.value || (await se(), Ho(m) && !m.defaultPrevented && u());
    }
    return (m, g) => (b(), ue(we, null, [
      q(o(Ga), {
        as: "template",
        element: r.value
      }, null, 8, ["element"]),
      q(o(A), M({
        ref: o(n),
        as: m.as,
        "as-child": m.asChild,
        "data-state": o(l).open.value ? "open" : "closed",
        "data-disabled": o(e) ? "" : void 0,
        style: {
          WebkitTouchCallout: "none"
        }
      }, m.$attrs, {
        onContextmenu: p,
        onPointerdown: c,
        onPointermove: f,
        onPointercancel: f,
        onPointerup: f
      }), {
        default: h(() => [
          C(m.$slots, "default")
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-state", "data-disabled"])
    ], 64));
  }
}), Zv = /* @__PURE__ */ _({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(uo), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jv = /* @__PURE__ */ _({
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
    const s = Zl(), r = T(!1);
    return (i, u) => (b(), w(o(ro), M(o(l), {
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
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), Qv = /* @__PURE__ */ _({
  __name: "ContextMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(to), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), em = /* @__PURE__ */ _({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), w(o(_a), K(j({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tm = /* @__PURE__ */ _({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(Ya), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), am = /* @__PURE__ */ _({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(fo), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nm = /* @__PURE__ */ _({
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
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), w(o(so), K(j({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), om = /* @__PURE__ */ _({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(lo), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lm = /* @__PURE__ */ _({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(io), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sm = /* @__PURE__ */ _({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), w(o(co), K(j({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rm = /* @__PURE__ */ _({
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
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), w(o(po), K(j({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), im = /* @__PURE__ */ _({
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
    return (s, r) => (b(), w(o(vo), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Xe(l) ? l.value = i : null)
    }, {
      default: h(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), um = /* @__PURE__ */ _({
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
    return R(), (s, r) => (b(), w(o(mo), M(o(l), { style: {
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), dm = /* @__PURE__ */ _({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(ho), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xd = ["hour", "minute", "second"];
function Ft(a) {
  const { formatter: t } = a, e = Fn.map((n) => [n, a.value[n]]);
  if ("hour" in a.value) {
    const n = vl.map((s) => s === "dayPeriod" ? [s, t.dayPeriod(Le(a.value))] : [s, a.value[s]]), l = [...e, ...n];
    return Object.fromEntries(l);
  }
  return Object.fromEntries(e);
}
function Jl(a) {
  const t = ml.map((e) => e === "dayPeriod" ? [e, "AM"] : [e, null]).filter(([e]) => e === "literal" || e === null ? !1 : a === "day" ? !xd.includes(e) : !0);
  return Object.fromEntries(t);
}
function Sd(a) {
  const { segmentValues: t, formatter: e, locale: n } = a;
  function l(r) {
    if ("hour" in t) {
      const i = t[r];
      return i !== null ? r === "day" && t.month !== null ? e.part(a.dateRef.set({ [r]: i, month: t.month }), r, {
        hourCycle: a.hourCycle === 24 ? "h24" : void 0
      }) : e.part(a.dateRef.set({ [r]: i }), r, {
        hourCycle: a.hourCycle === 24 ? "h24" : void 0
      }) : fn(r, "", n.value);
    } else {
      if (Lr(r)) {
        const i = t[r];
        return i !== null ? r === "day" && t.month !== null ? e.part(a.dateRef.set({ [r]: i, month: t.month }), r) : e.part(a.dateRef.set({ [r]: i }), r) : fn(r, "", n.value);
      }
      return "";
    }
  }
  return Object.keys(t).reduce((r, i) => {
    if (!hl(i))
      return r;
    if ("hour" in t && i === "dayPeriod") {
      const u = t[i];
      u !== null ? r[i] = u : r[i] = fn(i, "AM", n.value);
    } else
      r[i] = l(i);
    return r;
  }, {});
}
function Ed(a) {
  const { granularity: t, formatter: e, contentObj: n, hideTimeZone: l, hourCycle: s } = a;
  return e.toParts(a.dateRef, Nr(t, s)).map((u) => ["literal", "timeZoneName", null].includes(u.type) || !hl(u.type) ? {
    part: u.type,
    value: u.value
  } : {
    part: u.type,
    value: n[u.type]
  }).filter((u) => !(u.part === null || u.value === null || u.part === "timeZoneName" && (!pl(a.dateRef) || l)));
}
function Pn(a) {
  const t = Sd(a), e = Ed({
    contentObj: t,
    ...a
  });
  return {
    obj: t,
    arr: e
  };
}
function qe(a) {
  const t = et();
  return a === t.ARROW_RIGHT || a === t.ARROW_LEFT;
}
function wt(a) {
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
  ].includes(a) || wt(a));
}
const Pd = ["id", "value", "name", "disabled", "required"], [Dd, $d] = Q("DateFieldRoot"), Id = /* @__PURE__ */ _({
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
    const n = a, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, granularity: d, defaultValue: p, dir: c } = ne(n), f = Hn(n.locale), m = _e(c), { primitiveElement: g, currentElement: v } = Ae(), S = T(/* @__PURE__ */ new Set());
    oe(() => {
      Array.from(v.value.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((z) => z.getAttribute("data-radix-vue-date-field-segment") !== "literal").forEach((z) => S.value.add(z));
    });
    const x = ae(n, "modelValue", l, {
      defaultValue: p.value,
      passive: n.modelValue === void 0
    }), D = jt({
      defaultPlaceholder: n.placeholder,
      granularity: d.value,
      defaultValue: x.value
    }), y = ae(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? D.copy(),
      passive: n.placeholder === void 0
    }), E = I(() => n.granularity ? ia(y.value) ? n.granularity : "day" : ia(y.value) ? "minute" : "day"), P = I(() => {
      var z;
      return x.value ? !!((z = u.value) != null && z.call(u, x.value) || n.minValue && Oe(x.value, n.minValue) || n.maxValue && Oe(n.maxValue, x.value)) : !1;
    }), $ = Jl(E.value), B = T(x.value ? { ...Ft({ value: x.value, formatter: f }) } : { ...$ }), O = I(() => Pn({
      granularity: E.value,
      dateRef: y.value,
      formatter: f,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: B.value,
      locale: s
    })), F = I(() => O.value.arr), k = I(() => F.value.filter(({ part: z }) => z !== "literal"));
    te(s, (z) => {
      f.getLocale() !== z && f.setLocale(z);
    }), te(x, (z) => {
      z !== void 0 && (!Pe(y.value, z) || y.value.compare(z) !== 0) && (y.value = z.copy());
    }), te([x, s], ([z]) => {
      z !== void 0 ? B.value = { ...Ft({ value: z, formatter: f }) } : B.value = { ...$ };
    });
    const V = T(null), H = I(() => Array.from(S.value).findIndex((z) => {
      var Z;
      return z.getAttribute("data-radix-vue-date-field-segment") === ((Z = V.value) == null ? void 0 : Z.getAttribute("data-radix-vue-date-field-segment"));
    })), Y = I(() => {
      const z = m.value === "rtl" ? -1 : 1;
      return (z < 0 ? H.value < 0 : H.value > S.value.size - 1) ? null : Array.from(S.value)[H.value + z];
    }), J = I(() => {
      const z = m.value === "rtl" ? -1 : 1;
      return (z > 0 ? H.value < 0 : H.value > S.value.size - 1) ? null : Array.from(S.value)[H.value - z];
    }), N = et();
    function L(z) {
      var Z, U;
      qe(z.key) && (z.key === N.ARROW_LEFT && ((Z = J.value) == null || Z.focus()), z.key === N.ARROW_RIGHT && ((U = Y.value) == null || U.focus()));
    }
    function W(z) {
      V.value = z;
    }
    return $d({
      isDateUnavailable: u.value,
      locale: s,
      modelValue: x,
      placeholder: y,
      disabled: r,
      formatter: f,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: B,
      isInvalid: P,
      segmentContents: k,
      elements: S,
      setFocusedElement: W,
      focusNext() {
        var z;
        (z = Y.value) == null || z.focus();
      }
    }), t({
      /** Helper to set the focused element inside the DateField */
      setFocusedElement: W
    }), (z, Z) => (b(), ue(we, null, [
      q(o(A), M(z.$attrs, {
        ref_key: "primitiveElement",
        ref: g,
        role: "group",
        "aria-disabled": o(r) ? !0 : void 0,
        "data-disabled": o(r) ? "" : void 0,
        "data-readonly": o(i) ? "" : void 0,
        "data-invalid": P.value ? "" : void 0,
        dir: o(m),
        onKeydown: re(L, ["left", "right"])
      }), {
        default: h(() => [
          C(z.$slots, "default", {
            modelValue: o(x),
            segments: F.value,
            isInvalid: P.value
          })
        ]),
        _: 3
      }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
      Ue("input", {
        id: z.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o(x) ? o(x).toString() : "",
        name: z.name,
        disabled: o(r),
        required: z.required,
        style: Ce({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }),
        onFocus: Z[0] || (Z[0] = (U) => {
          var X, ee;
          return (ee = (X = Array.from(S.value)) == null ? void 0 : X[0]) == null ? void 0 : ee.focus();
        })
      }, null, 44, Pd)
    ], 64));
  }
}), Ot = {
  role: "spinbutton",
  contenteditable: !0,
  tabindex: 0,
  spellcheck: !1,
  inputmode: "numeric",
  autocorrect: "off",
  enterkeyhint: "next",
  style: "caret-color: transparent;"
};
function Bd(a) {
  const { segmentValues: t, placeholder: e } = a, n = t.day === null, l = t.day ? e.set({ day: t.day }) : e, s = l.day, r = 1, i = Et(l), u = n ? "Empty" : `${s}`;
  return {
    ...Ot,
    "aria-label": "day,",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Td(a) {
  const { segmentValues: t, placeholder: e, formatter: n } = a, l = t.month === null, s = t.month ? e.set({ month: t.month }) : e, r = s.month, i = 1, u = 12, d = l ? "Empty" : `${r} - ${n.fullMonth(Le(s))}`;
  return {
    ...Ot,
    "aria-label": "month, ",
    contenteditable: !0,
    "aria-valuemin": i,
    "aria-valuemax": u,
    "aria-valuenow": r,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function Rd(a) {
  const { segmentValues: t, placeholder: e } = a, n = t.year === null, l = t.year ? e.set({ year: t.year }) : e, s = 1, r = 9999, i = l.year, u = n ? "Empty" : `${i}`;
  return {
    ...Ot,
    "aria-label": "year, ",
    "aria-valuemin": s,
    "aria-valuemax": r,
    "aria-valuenow": i,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Ad(a) {
  const { segmentValues: t, hourCycle: e, placeholder: n } = a;
  if (!("hour" in t) || !("hour" in n))
    return {};
  const l = t.hour === null, s = t.hour ? n.set({ hour: t.hour }) : n, r = e === 12 ? 1 : 0, i = e === 12 ? 12 : 23, u = s.hour, d = l ? "Empty" : `${u} ${t.dayPeriod ?? ""}`;
  return {
    ...Ot,
    "aria-label": "hour, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": u,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function kd(a) {
  const { segmentValues: t, placeholder: e } = a;
  if (!("minute" in t) || !("minute" in e))
    return {};
  const n = t.minute === null, s = (t.minute ? e.set({ minute: t.minute }) : e).minute, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Ot,
    "aria-label": "minute, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Od(a) {
  const { segmentValues: t, placeholder: e } = a;
  if (!("second" in t) || !("second" in e))
    return {};
  const n = t.second === null, s = (t.second ? e.set({ second: t.second }) : e).second, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Ot,
    "aria-label": "second, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Md(a) {
  const { segmentValues: t } = a;
  if (!("dayPeriod" in t))
    return {};
  const e = 0, n = 12, l = t.hour ? t.hour > 12 ? t.hour - 12 : t.hour : 0, s = t.dayPeriod ?? "AM";
  return {
    ...Ot,
    inputmode: "text",
    "aria-label": "AM/PM",
    "aria-valuemin": e,
    "aria-valuemax": n,
    "aria-valuenow": l,
    "aria-valuetext": s
  };
}
function Vd(a) {
  return {
    "aria-hidden": !0,
    "data-segment": "literal"
  };
}
function Fd(a) {
  return {
    role: "textbox",
    "aria-label": "timezone, ",
    "data-readonly": !0,
    "data-segment": "timeZoneName",
    tabindex: 0,
    style: "caret-color: transparent;"
  };
}
const Ld = {
  day: {
    attrs: Bd
  },
  month: {
    attrs: Td
  },
  year: {
    attrs: Rd
  },
  hour: {
    attrs: Ad
  },
  minute: {
    attrs: kd
  },
  second: {
    attrs: Od
  },
  dayPeriod: {
    attrs: Md
  },
  literal: {
    attrs: Vd
  },
  timeZoneName: {
    attrs: Fd
  }
};
function Ql(a) {
  const t = et();
  function e({ e: y, part: E, dateRef: P, prevValue: $ }) {
    const B = y.key === t.ARROW_UP ? 1 : -1, O = 0, F = 59;
    if ($ === null)
      return B > 0 ? O : F;
    const k = [E, B];
    return P.set({ [E]: $ }).cycle(...k)[E];
  }
  function n(y) {
    if (a.hasLeftFocus.value = !1, y === null)
      return y;
    const E = y.toString();
    return E.length === 1 ? null : Number.parseInt(E.slice(0, -1));
  }
  function l({ e: y, part: E, dateRef: P, prevValue: $, hourCycle: B }) {
    const O = y.key === t.ARROW_UP ? 1 : -1;
    if ($ === null)
      return P[E];
    if (E === "hour" && "hour" in P) {
      const k = [E, O, { hourCycle: B }];
      return P.set({ [E]: $ }).cycle(...k)[E];
    }
    const F = [E, O];
    return E === "day" && a.segmentValues.value.month !== null ? P.set({ [E]: $, month: a.segmentValues.value.month }).cycle(...F)[E] : P.set({ [E]: $ }).cycle(...F)[E];
  }
  function s(y, E, P) {
    let $ = !1;
    const B = Math.floor(y / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, P = null), P === null)
      return E === 0 ? (a.lastKeyZero.value = !0, { value: null, moveToNext: $ }) : ((a.lastKeyZero.value || E > B) && ($ = !0), a.lastKeyZero.value = !1, { value: E, moveToNext: $ });
    const O = P.toString().length, F = Number.parseInt(P.toString() + E.toString());
    return O === 2 || F > y ? ((E > B || F > y) && ($ = !0), { value: E, moveToNext: $ }) : ($ = !0, { value: F, moveToNext: $ });
  }
  function r(y, E) {
    let $ = !1;
    const B = Math.floor(59 / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return y === 0 ? (a.lastKeyZero.value = !0, { value: 0, moveToNext: $ }) : ((a.lastKeyZero.value || y > B) && ($ = !0), a.lastKeyZero.value = !1, { value: y, moveToNext: $ });
    const O = E.toString().length, F = Number.parseInt(E.toString() + y.toString());
    return O === 2 || F > 59 ? (y > B && ($ = !0), { value: y, moveToNext: $ }) : ($ = !0, { value: F, moveToNext: $ });
  }
  function i(y, E) {
    let $ = !1;
    const B = Math.floor(24 / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return y === 0 ? (a.lastKeyZero.value = !0, { value: null, moveToNext: $ }) : ((a.lastKeyZero.value || y > B) && ($ = !0), a.lastKeyZero.value = !1, { value: y, moveToNext: $ });
    const O = E.toString().length, F = Number.parseInt(E.toString() + y.toString());
    return O === 2 || F > 24 ? (y > B && ($ = !0), { value: y, moveToNext: $ }) : ($ = !0, { value: F, moveToNext: $ });
  }
  function u(y, E) {
    let P = !1;
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return { value: y === 0 ? 1 : y, moveToNext: P };
    const $ = E.toString() + y.toString();
    return $.length > 4 ? { value: y === 0 ? 1 : y, moveToNext: P } : ($.length === 4 && (P = !0), { value: Number.parseInt($), moveToNext: P });
  }
  const d = I(() => Ld[a.part].attrs({
    placeholder: a.placeholder.value,
    hourCycle: a.hourCycle,
    segmentValues: a.segmentValues.value,
    formatter: a.formatter
  }));
  function p(y) {
    if (!st(y.key) || qe(y.key))
      return;
    const E = a.segmentValues.value.day;
    if (y.key === t.ARROW_DOWN || y.key === t.ARROW_UP) {
      a.segmentValues.value.day = l({ e: y, part: "day", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (wt(y.key)) {
      const P = Number.parseInt(y.key), $ = a.segmentValues.value.month, B = $ ? Et(a.placeholder.value.set({ month: $ })) : Et(a.placeholder.value), { value: O, moveToNext: F } = s(B, P, E);
      a.segmentValues.value.day = O, F && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.day = n(E));
  }
  function c(y) {
    if (!st(y.key) || qe(y.key))
      return;
    const E = a.segmentValues.value.month;
    if (y.key === t.ARROW_DOWN || y.key === t.ARROW_UP) {
      a.segmentValues.value.month = l({ e: y, part: "month", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (wt(y.key)) {
      const P = Number.parseInt(y.key), { value: $, moveToNext: B } = s(12, P, E);
      a.segmentValues.value.month = $, B && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.month = n(E));
  }
  function f(y) {
    if (!st(y.key) || qe(y.key))
      return;
    const E = a.segmentValues.value.year;
    if (y.key === t.ARROW_DOWN || y.key === t.ARROW_UP) {
      a.segmentValues.value.year = l({ e: y, part: "year", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (wt(y.key)) {
      const P = Number.parseInt(y.key), { value: $, moveToNext: B } = u(P, E);
      a.segmentValues.value.year = $, B && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.year = n(E));
  }
  function m(y) {
    const E = a.placeholder.value;
    if (!st(y.key) || qe(y.key) || !("hour" in E) || !("hour" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.hour, $ = a.hourCycle;
    if (y.key === t.ARROW_UP || y.key === t.ARROW_DOWN) {
      a.segmentValues.value.hour = l({ e: y, part: "hour", dateRef: a.placeholder.value, prevValue: P, hourCycle: $ }), "dayPeriod" in a.segmentValues.value && (a.segmentValues.value.hour < 12 ? a.segmentValues.value.dayPeriod = "AM" : a.segmentValues.value.hour && (a.segmentValues.value.dayPeriod = "PM"));
      return;
    }
    if (wt(y.key)) {
      const B = Number.parseInt(y.key), { value: O, moveToNext: F } = i(B, P);
      "dayPeriod" in a.segmentValues.value && O && O > 12 ? a.segmentValues.value.dayPeriod = "PM" : "dayPeriod" in a.segmentValues.value && O && (a.segmentValues.value.dayPeriod = "AM"), a.segmentValues.value.hour = O, F && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.hour = n(P));
  }
  function g(y) {
    const E = a.placeholder.value;
    if (!st(y.key) || qe(y.key) || !("minute" in E) || !("minute" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.minute;
    if (a.segmentValues.value.minute = e({ e: y, part: "minute", dateRef: a.placeholder.value, prevValue: P }), wt(y.key)) {
      const $ = Number.parseInt(y.key), { value: B, moveToNext: O } = r($, P);
      a.segmentValues.value.minute = B, O && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.minute = n(P));
  }
  function v(y) {
    const E = a.placeholder.value;
    if (!st(y.key) || qe(y.key) || !("second" in E) || !("second" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.second;
    if (a.segmentValues.value.second = e({ e: y, part: "second", dateRef: a.placeholder.value, prevValue: P }), wt(y.key)) {
      const $ = Number.parseInt(y.key), { value: B, moveToNext: O } = r($, P);
      a.segmentValues.value.second = B, O && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.second = n(P));
  }
  function S(y) {
    if (!((!st(y.key) || qe(y.key)) && y.key !== "a" && y.key !== "p" || !("hour" in a.placeholder.value) || !("dayPeriod" in a.segmentValues.value))) {
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
  function x(y) {
    a.disabled.value && y.preventDefault();
  }
  function D(y) {
    const E = a.disabled.value, P = a.readonly.value;
    if (y.key !== t.TAB && y.preventDefault(), E || P)
      return;
    if ({
      day: p,
      month: c,
      year: f,
      hour: m,
      minute: g,
      second: v,
      dayPeriod: S,
      timeZoneName: () => {
      }
    }[a.part](y), !qe(y.key) && y.key !== t.TAB && y.key !== t.SHIFT && st(y.key) && Object.values(a.segmentValues.value).every((B) => B !== null)) {
      const B = { ...a.segmentValues.value };
      let O = a.placeholder.value.copy();
      Object.keys(B).forEach((F) => {
        const k = B[F];
        O = O.set({ [F]: k });
      }), a.modelValue.value = O.copy();
    }
  }
  return {
    handleSegmentClick: x,
    handleSegmentKeydown: D,
    attributes: d
  };
}
const Nd = /* @__PURE__ */ _({
  __name: "DateFieldInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Dd(), n = T(!0), l = T(!1), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = Ql({
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
    }), u = I(() => e.disabled.value), d = I(() => e.readonly.value), p = I(() => e.isInvalid.value);
    return (c, f) => (b(), w(o(A), M({
      as: c.as,
      "as-child": c.asChild
    }, o(i), {
      contenteditable: u.value || d.value ? !1 : c.part !== "literal",
      "data-radix-vue-date-field-segment": c.part,
      "aria-disabled": u.value ? !0 : void 0,
      "aria-readonly": d.value ? !0 : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-invalid": p.value ? "" : void 0,
      "aria-invalid": p.value ? !0 : void 0
    }, Mn(c.part !== "literal" ? {
      mousedown: o(s),
      keydown: o(r),
      focusout: () => {
        n.value = !0;
      },
      focusin: (m) => {
        o(e).setFocusedElement(m.target);
      }
    } : {})), {
      default: h(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-invalid", "aria-invalid"]));
  }
}), cm = /* @__PURE__ */ _({
  __name: "DatePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Ru), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ _({
  __name: "DatePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Au), K(j(t)), {
      default: h(({ headingValue: l }) => [
        C(e.$slots, "default", { headingValue: l }, () => [
          ve($e(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), fm = /* @__PURE__ */ _({
  __name: "DatePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ku), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vm = /* @__PURE__ */ _({
  __name: "DatePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Ou), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mm = /* @__PURE__ */ _({
  __name: "DatePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Mu), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hm = /* @__PURE__ */ _({
  __name: "DatePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Vu), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ym = /* @__PURE__ */ _({
  __name: "DatePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Fu), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gm = /* @__PURE__ */ _({
  __name: "DatePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Lu), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bm = /* @__PURE__ */ _({
  __name: "DatePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Nu), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cm = /* @__PURE__ */ _({
  __name: "DatePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(zu), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _m = /* @__PURE__ */ _({
  __name: "DatePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Ku), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wm = /* @__PURE__ */ _({
  __name: "DatePickerInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Nd), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [yo, zd] = Q("DatePickerRoot"), xm = /* @__PURE__ */ _({
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
      fixedWeeks: p,
      numberOfMonths: c,
      preventDeselect: f,
      isDateDisabled: m,
      isDateUnavailable: g,
      defaultOpen: v,
      modal: S,
      id: x,
      name: D,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: B,
      hourCycle: O,
      defaultValue: F,
      dir: k
    } = ne(e), V = _e(k), H = ae(e, "modelValue", n, {
      defaultValue: F.value,
      passive: e.modelValue === void 0
    }), Y = I(() => jt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: H.value
    })), J = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? Y.value.copy(),
      passive: e.placeholder === void 0
    }), N = ae(e, "open", n, {
      defaultValue: v.value,
      passive: e.open === void 0
    }), L = T();
    return zd({
      isDateUnavailable: g.value,
      isDateDisabled: m.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: p,
      numberOfMonths: c,
      readonly: r,
      preventDeselect: f,
      modelValue: H,
      placeholder: J,
      defaultOpen: v,
      modal: S,
      open: N,
      id: x,
      name: D,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: B,
      hourCycle: O,
      dateFieldRef: L,
      dir: V,
      onDateChange(W) {
        !W || !H.value ? H.value = W : !f.value && ke(H.value, W) ? H.value = void 0 : H.value = W.copy();
      },
      onPlaceholderChange(W) {
        Pe(W, J.value) || (J.value = W.copy());
      }
    }), (W, z) => (b(), w(o(is), {
      open: o(N),
      "onUpdate:open": z[0] || (z[0] = (Z) => Xe(N) ? N.value = Z : null),
      "default-open": o(v),
      modal: o(S)
    }, {
      default: h(() => [
        C(W.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
}), Sm = /* @__PURE__ */ _({
  __name: "DatePickerCalendar",
  setup(a) {
    const t = yo();
    return (e, n) => (b(), w(o(Tu), M({
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
        l && o(t).modelValue.value && o(Pe)(l, o(t).modelValue.value) || o(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        o(Pe)(l, o(t).placeholder.value) || o(t).onPlaceholderChange(l);
      })
    }), {
      default: h(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
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
}), Em = /* @__PURE__ */ _({
  __name: "DatePickerField",
  setup(a) {
    const t = yo();
    return (e, n) => (b(), w(o(Id), M({
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
        l && o(t).modelValue.value && o(Pe)(o(t).modelValue.value, l) && l.compare(o(t).modelValue.value) === 0 || o(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        o(Pe)(o(t).placeholder.value, l) && l.compare(o(t).placeholder.value) === 0 || o(t).onPlaceholderChange(l);
      })
    }), {
      default: h(({ segments: l, modelValue: s }) => [
        C(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), Pm = /* @__PURE__ */ _({
  __name: "DatePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ms), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dm = /* @__PURE__ */ _({
  __name: "DatePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(fs), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $m = /* @__PURE__ */ _({
  __name: "DatePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(vs), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Im = /* @__PURE__ */ _({
  __name: "DatePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = yo();
    return (n, l) => (b(), w(o(us), M({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = o(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bm = /* @__PURE__ */ _({
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
    return (s, r) => (b(), w(o(ds), null, {
      default: h(() => [
        q(o(ps), K(j({ ...o(l), ...s.$attrs })), {
          default: h(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Tm = /* @__PURE__ */ _({
  __name: "DateRangePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ep), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rm = /* @__PURE__ */ _({
  __name: "DateRangePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(tp), K(j(t)), {
      default: h(({ headingValue: l }) => [
        C(e.$slots, "default", { headingValue: l }, () => [
          ve($e(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), Am = /* @__PURE__ */ _({
  __name: "DateRangePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ap), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), km = /* @__PURE__ */ _({
  __name: "DateRangePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(np), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Om = /* @__PURE__ */ _({
  __name: "DateRangePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(op), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mm = /* @__PURE__ */ _({
  __name: "DateRangePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(lp), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vm = /* @__PURE__ */ _({
  __name: "DateRangePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(sp), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fm = /* @__PURE__ */ _({
  __name: "DateRangePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(rp), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lm = /* @__PURE__ */ _({
  __name: "DateRangePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ip), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nm = /* @__PURE__ */ _({
  __name: "DateRangePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(up), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zm = /* @__PURE__ */ _({
  __name: "DateRangePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(dp), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Km = /* @__PURE__ */ _({
  __name: "DateRangePickerInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(Gd), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [go, Kd] = Q("DateRangePickerRoot"), Hm = /* @__PURE__ */ _({
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
      fixedWeeks: p,
      numberOfMonths: c,
      preventDeselect: f,
      isDateDisabled: m,
      isDateUnavailable: g,
      defaultOpen: v,
      modal: S,
      id: x,
      name: D,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: B,
      hourCycle: O,
      dir: F
    } = ne(e), k = _e(F), V = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), H = jt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: V.value.start
    }), Y = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? H.copy(),
      passive: e.placeholder === void 0
    }), J = ae(e, "open", n, {
      defaultValue: v.value,
      passive: e.open === void 0
    }), N = T();
    return Kd({
      isDateUnavailable: g.value,
      isDateDisabled: m.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: p,
      numberOfMonths: c,
      readonly: r,
      preventDeselect: f,
      modelValue: V,
      placeholder: Y,
      defaultOpen: v,
      modal: S,
      open: J,
      id: x,
      name: D,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: B,
      hourCycle: O,
      dateFieldRef: N,
      dir: k,
      onStartValueChange(L) {
        n("update:startValue", L);
      },
      onDateChange(L) {
        var W, z;
        V.value = { start: (W = L.start) == null ? void 0 : W.copy(), end: (z = L.end) == null ? void 0 : z.copy() };
      },
      onPlaceholderChange(L) {
        Y.value = L.copy();
      }
    }), (L, W) => (b(), w(o(is), {
      open: o(J),
      "onUpdate:open": W[0] || (W[0] = (z) => Xe(J) ? J.value = z : null),
      "default-open": o(v),
      modal: o(S)
    }, {
      default: h(() => [
        C(L.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
}), Wm = /* @__PURE__ */ _({
  __name: "DateRangePickerCalendar",
  setup(a) {
    const t = go();
    return (e, n) => (b(), w(o(Qc), M({
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
        l.start && o(t).modelValue.value.start && l.end && o(t).modelValue.value.end && o(Pe)(l.start, o(t).modelValue.value.start) && o(Pe)(l.end, o(t).modelValue.value.end) || o(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[2] || (n[2] = (l) => {
        o(Pe)(l, o(t).placeholder.value) || o(t).onPlaceholderChange(l);
      })
    }), {
      default: h(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
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
}), jm = /* @__PURE__ */ _({
  __name: "DateRangePickerField",
  setup(a) {
    const t = go();
    return (e, n) => (b(), w(o(Ud), M({
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
        o(Pe)(l, o(t).placeholder.value) && l.compare(o(t).placeholder.value) === 0 || o(t).onPlaceholderChange(l);
      })
    }), {
      default: h(({ segments: l, modelValue: s }) => [
        C(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), Um = /* @__PURE__ */ _({
  __name: "DateRangePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ms), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gm = /* @__PURE__ */ _({
  __name: "DateRangePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(fs), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qm = /* @__PURE__ */ _({
  __name: "DateRangePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(vs), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ym = /* @__PURE__ */ _({
  __name: "DateRangePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = go();
    return (n, l) => (b(), w(o(us), M({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = o(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xm = /* @__PURE__ */ _({
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
    return (s, r) => (b(), w(o(ds), null, {
      default: h(() => [
        q(o(ps), K(j({ ...o(l), ...s.$attrs })), {
          default: h(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Hd = ["id", "value", "name", "disabled", "required"], [Wd, jd] = Q("DateRangeFieldRoot"), Ud = /* @__PURE__ */ _({
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
    var ee, fe;
    const n = a, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, dir: d } = ne(n), p = Hn(n.locale), { primitiveElement: c, currentElement: f } = Ae(), m = T(/* @__PURE__ */ new Set()), g = _e(d);
    oe(() => {
      Array.from(f.value.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((G) => G.getAttribute("data-radix-vue-date-field-segment") !== "literal").forEach((G) => m.value.add(G));
    });
    const v = ae(n, "modelValue", l, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), S = jt({
      defaultPlaceholder: n.placeholder,
      granularity: n.granularity,
      defaultValue: v.value.start
    }), x = ae(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? S.copy(),
      passive: n.placeholder === void 0
    }), D = I(() => n.granularity ? ia(x.value) ? n.granularity : "day" : ia(x.value) ? "minute" : "day"), y = I(() => {
      var G;
      return v.value.start ? !!((G = u.value) != null && G.call(u, v.value.start) || n.minValue && Oe(v.value.start, n.minValue) || n.maxValue && Oe(n.maxValue, v.value.start)) : !1;
    }), E = I(() => {
      var G;
      return v.value.end ? !!((G = u.value) != null && G.call(u, v.value.end) || n.minValue && Oe(v.value.end, n.minValue) || n.maxValue && Oe(n.maxValue, v.value.end)) : !1;
    }), P = I(() => y.value || E.value ? !0 : !v.value.start || !v.value.end ? !1 : !Oe(v.value.start, v.value.end) || u.value !== void 0 && !fl(
      v.value.start,
      v.value.end,
      u.value,
      void 0
    )), $ = Jl(D.value), B = T(v.value.start ? { ...Ft({ value: v.value.start, formatter: p }) } : { ...$ }), O = T(v.value.end ? { ...Ft({ value: v.value.end, formatter: p }) } : { ...$ }), F = I(() => Pn({
      granularity: D.value,
      dateRef: x.value,
      formatter: p,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: B.value,
      locale: s
    })), k = I(() => Pn({
      granularity: D.value,
      dateRef: x.value,
      formatter: p,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: O.value,
      locale: s
    })), V = I(() => ({
      start: F.value.arr,
      end: k.value.arr
    })), H = I(() => ({ start: V.value.start.filter(({ part: G }) => G !== "literal"), end: V.value.end.filter(({ part: G }) => G !== "literal") })), Y = T((ee = v.value.start) == null ? void 0 : ee.copy()), J = T((fe = v.value.end) == null ? void 0 : fe.copy());
    te([Y, J], ([G, le]) => {
      var Se, ge;
      const he = v.value;
      if (!(he.start && he.end && G && le && he.start.compare(G) === 0 && he.end.compare(le) === 0))
        if (G && le) {
          if (((Se = v.value.start) == null ? void 0 : Se.compare(G)) === 0 && ((ge = v.value.end) == null ? void 0 : ge.compare(le)) === 0)
            return;
          v.value = { start: G.copy(), end: le.copy() };
        } else
          v.value.start && v.value.end && (v.value = { start: void 0, end: void 0 });
    }), te(v, (G) => {
      G.start && G.end && ((!Y.value || G.start.compare(Y.value) !== 0) && (Y.value = G.start.copy()), (!J.value || G.end.compare(J.value) !== 0) && (J.value = G.end.copy()));
    }), te([Y, s], ([G]) => {
      G !== void 0 ? B.value = { ...Ft({ value: G, formatter: p }) } : B.value = { ...$ };
    }), te(s, (G) => {
      p.getLocale() !== G && p.setLocale(G);
    }), te(v, (G) => {
      G.start !== void 0 && (!Pe(x.value, G.start) || x.value.compare(G.start) !== 0) && (x.value = G.start.copy());
    }), te([J, s], ([G]) => {
      G !== void 0 ? O.value = { ...Ft({ value: G, formatter: p }) } : O.value = { ...$ };
    });
    const N = T(null), L = I(() => Array.from(m.value).findIndex((G) => {
      var le, he;
      return G.getAttribute("data-radix-vue-date-field-segment") === ((le = N.value) == null ? void 0 : le.getAttribute("data-radix-vue-date-field-segment")) && G.getAttribute("data-radix-vue-date-range-field-segment-type") === ((he = N.value) == null ? void 0 : he.getAttribute("data-radix-vue-date-range-field-segment-type"));
    })), W = I(() => {
      const G = g.value === "rtl" ? -1 : 1;
      return (G < 0 ? L.value < 0 : L.value > m.value.size - 1) ? null : Array.from(m.value)[L.value + G];
    }), z = I(() => {
      const G = g.value === "rtl" ? -1 : 1;
      return (G > 0 ? L.value < 0 : L.value > m.value.size - 1) ? null : Array.from(m.value)[L.value - G];
    }), Z = et();
    function U(G) {
      var le, he;
      qe(G.key) && (G.key === Z.ARROW_LEFT && ((le = z.value) == null || le.focus()), G.key === Z.ARROW_RIGHT && ((he = W.value) == null || he.focus()));
    }
    function X(G) {
      N.value = G;
    }
    return jd({
      isDateUnavailable: u.value,
      locale: s,
      startValue: Y,
      endValue: J,
      placeholder: x,
      disabled: r,
      formatter: p,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: { start: B, end: O },
      isInvalid: P,
      segmentContents: H,
      elements: m,
      setFocusedElement: X,
      focusNext() {
        var G;
        (G = W.value) == null || G.focus();
      }
    }), t({
      setFocusedElement: X
    }), (G, le) => {
      var he, Se;
      return b(), ue(we, null, [
        q(o(A), M(G.$attrs, {
          ref_key: "primitiveElement",
          ref: c,
          role: "group",
          "aria-disabled": o(r) ? !0 : void 0,
          "data-disabled": o(r) ? "" : void 0,
          "data-readonly": o(i) ? "" : void 0,
          "data-invalid": P.value ? "" : void 0,
          dir: o(g),
          onKeydown: re(U, ["left", "right"])
        }), {
          default: h(() => [
            C(G.$slots, "default", {
              modelValue: o(v),
              segments: V.value
            })
          ]),
          _: 3
        }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
        Ue("input", {
          id: G.id,
          type: "text",
          tabindex: "-1",
          "aria-hidden": "",
          value: `${(he = o(v).start) == null ? void 0 : he.toString()} - ${(Se = o(v).end) == null ? void 0 : Se.toString()}`,
          name: G.name,
          disabled: o(r),
          required: G.required,
          style: Ce({
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }),
          onFocus: le[0] || (le[0] = (ge) => {
            var Ie, de;
            return (de = (Ie = Array.from(m.value)) == null ? void 0 : Ie[0]) == null ? void 0 : de.focus();
          })
        }, null, 44, Hd)
      ], 64);
    };
  }
}), Gd = /* @__PURE__ */ _({
  __name: "DateRangeFieldInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Wd(), n = T(!0), l = T(!1), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = Ql({
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
    }), u = I(() => e.disabled.value), d = I(() => e.readonly.value), p = I(() => e.isInvalid.value);
    return (c, f) => (b(), w(o(A), M({
      as: c.as,
      "as-child": c.asChild
    }, o(i), {
      contenteditable: u.value || d.value ? !1 : c.part !== "literal",
      "data-radix-vue-date-field-segment": c.part,
      "aria-disabled": u.value ? !0 : void 0,
      "aria-readonly": d.value ? !0 : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-radix-vue-date-range-field-segment-type": c.type,
      "data-invalid": p.value ? "" : void 0,
      "aria-invalid": p.value ? !0 : void 0
    }, Mn(c.part !== "literal" ? {
      mousedown: o(s),
      keydown: o(r),
      focusout: () => {
        n.value = !0;
      },
      focusin: (m) => {
        o(e).setFocusedElement(m.target);
      }
    } : {})), {
      default: h(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-radix-vue-date-range-field-segment-type", "data-invalid", "aria-invalid"]));
  }
}), [es, qd] = Q("DropdownMenuRoot"), Zm = /* @__PURE__ */ _({
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
    }), s = T(), { modal: r, dir: i } = ne(e), u = _e(i);
    return qd({
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
    }), (d, p) => (b(), w(o(ao), {
      open: o(l),
      "onUpdate:open": p[0] || (p[0] = (c) => Xe(l) ? l.value = c : null),
      dir: o(u),
      modal: o(r)
    }, {
      default: h(() => [
        C(d.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Jm = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = es(), { forwardRef: n, currentElement: l } = R();
    return oe(() => {
      e.triggerElement = l;
    }), e.triggerId || (e.triggerId = me(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (b(), w(o(Ga), { "as-child": "" }, {
      default: h(() => [
        q(o(A), {
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
          default: h(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Qm = /* @__PURE__ */ _({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(uo), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eh = /* @__PURE__ */ _({
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
    const s = es(), r = T(!1);
    function i(u) {
      u.defaultPrevented || (r.value || setTimeout(() => {
        var d;
        (d = s.triggerElement.value) == null || d.focus();
      }, 0), r.value = !1, u.preventDefault());
    }
    return s.contentId || (s.contentId = me(void 0, "radix-vue-dropdown-menu-content")), (u, d) => {
      var p;
      return b(), w(o(ro), M(o(l), {
        id: o(s).contentId,
        "aria-labelledby": (p = o(s)) == null ? void 0 : p.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: d[0] || (d[0] = (c) => {
          var v;
          if (c.defaultPrevented)
            return;
          const f = c.detail.originalEvent, m = f.button === 0 && f.ctrlKey === !0, g = f.button === 2 || m;
          (!o(s).modal.value || g) && (r.value = !0), (v = o(s).triggerElement.value) != null && v.contains(c.target) && c.preventDefault();
        })
      }), {
        default: h(() => [
          C(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby", "style"]);
    };
  }
}), th = /* @__PURE__ */ _({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(to), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ah = /* @__PURE__ */ _({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), w(o(_a), K(j({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nh = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(Ya), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oh = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(fo), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lh = /* @__PURE__ */ _({
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
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), w(o(so), K(j({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sh = /* @__PURE__ */ _({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(lo), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rh = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(io), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ih = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), w(o(co), K(j({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uh = /* @__PURE__ */ _({
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
    return R(), (s, r) => (b(), w(o(po), K(j(o(l))), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dh = /* @__PURE__ */ _({
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
    return R(), (s, r) => (b(), w(o(vo), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Xe(l) ? l.value = i : null)
    }, {
      default: h(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), ch = /* @__PURE__ */ _({
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
    return R(), (s, r) => (b(), w(o(mo), M(o(l), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), ph = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(ho), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yd = ["value", "name", "disabled", "required"], [ea, Xd] = Q("EditableRoot"), fh = /* @__PURE__ */ _({
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
      maxLength: p,
      disabled: c,
      dir: f,
      submitMode: m,
      activationMode: g,
      selectOnFocus: v,
      readonly: S,
      autoResize: x,
      required: D
    } = ne(n), y = T(), E = _e(f), P = T(u.value ?? !1), $ = ae(n, "modelValue", l, {
      defaultValue: i.value ?? "",
      passive: n.modelValue === void 0
    }), { primitiveElement: B, currentElement: O } = Ae(), F = Qe(O), k = I(() => typeof d.value == "string" ? { edit: d.value, preview: d.value } : d.value), V = T($.value);
    function H() {
      $.value = V.value, P.value = !1, l("update:state", "cancel");
    }
    function Y() {
      P.value = !0, l("update:state", "edit");
    }
    function J() {
      V.value = $.value, P.value = !1, l("update:state", "submit"), l("submit", $.value);
    }
    function N() {
      P.value && (m.value === "blur" || m.value === "both" ? J() : H());
    }
    const L = kl(() => N(), O), W = Ol(() => N(), O), z = I(() => $.value === "");
    return t({
      /** Function to submit the value of the editable */
      submit: J,
      /** Function to cancel the value of the editable */
      cancel: H,
      /** Function to set the editable in edit mode */
      edit: Y
    }), Xd({
      id: s,
      name: r,
      disabled: c,
      isEditing: P,
      maxLength: p,
      modelValue: $,
      placeholder: k,
      edit: Y,
      cancel: H,
      submit: J,
      activationMode: g,
      submitMode: m,
      selectOnFocus: v,
      inputRef: y,
      startWithEditMode: u,
      isEmpty: z,
      readonly: S,
      autoResize: x
    }), (Z, U) => (b(), ue(we, null, [
      q(o(A), M(Z.$attrs, {
        ref_key: "primitiveElement",
        ref: B,
        as: Z.as,
        "as-child": Z.asChild,
        dir: o(E),
        onFocusCapture: o(W).onFocusCapture,
        onBlurCapture: o(W).onBlurCapture,
        onPointerdownCapture: o(L).onPointerDownCapture
      }), {
        default: h(() => [
          C(Z.$slots, "default", {
            modelValue: o($),
            isEditing: P.value,
            isEmpty: z.value,
            submit: J,
            cancel: H,
            edit: Y
          })
        ]),
        _: 3
      }, 16, ["as", "as-child", "dir", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]),
      o(F) ? (b(), ue("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o($),
        name: o(r),
        disabled: o(c),
        required: o(D),
        style: Ce({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, Yd)) : pe("", !0)
    ], 64));
  }
}), vh = /* @__PURE__ */ _({
  __name: "EditableArea",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = ea();
    return (n, l) => (b(), w(o(A), M(t, {
      "data-placeholder-shown": o(e).isEditing.value ? void 0 : "",
      "data-focus": o(e).isEditing.value ? "" : void 0,
      "data-empty": o(e).isEmpty.value ? "" : void 0,
      "data-readonly": o(e).readonly.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      style: o(e).autoResize.value ? { display: "inline-grid" } : void 0
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-placeholder-shown", "data-focus", "data-empty", "data-readonly", "data-disabled", "style"]));
  }
}), mh = /* @__PURE__ */ _({
  __name: "EditableInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = et(), n = ea(), l = I(() => n.disabled.value), s = I(() => {
      var d;
      return (d = n.placeholder.value) == null ? void 0 : d.edit;
    }), { primitiveElement: r, currentElement: i } = Ae();
    oe(() => {
      var d, p;
      n.inputRef.value = i.value, n.startWithEditMode.value && ((d = n.inputRef.value) == null || d.focus({ preventScroll: !0 }), n.selectOnFocus.value && ((p = n.inputRef.value) == null || p.select()));
    }), te(n.isEditing, (d) => {
      d && se(() => {
        var p, c;
        (p = n.inputRef.value) == null || p.focus({ preventScroll: !0 }), n.selectOnFocus.value && ((c = n.inputRef.value) == null || c.select());
      });
    });
    function u(d) {
      (n.submitMode.value === "enter" || n.submitMode.value === "both") && d.key === e.ENTER && !d.shiftKey && !d.metaKey && n.submit();
    }
    return (d, p) => (b(), w(o(A), M({
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
      onInput: p[0] || (p[0] = (c) => o(n).modelValue.value = c.target.value),
      onKeydown: [
        re(u, ["enter", "space"]),
        re(o(n).cancel, ["esc"])
      ]
    }), {
      default: h(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["value", "placeholder", "disabled", "data-disabled", "data-readonly", "readonly", "hidden", "style", "onKeydown"]));
  }
}), hh = /* @__PURE__ */ _({
  __name: "EditablePreview",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = ea(), n = I(() => {
      var r;
      return (r = e.placeholder.value) == null ? void 0 : r.preview;
    });
    function l() {
      e.activationMode.value === "focus" && e.edit();
    }
    function s() {
      e.activationMode.value === "dblclick" && e.edit();
    }
    return (r, i) => (b(), w(o(A), M(t, {
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
        C(r.$slots, "default", {}, () => [
          ve($e(o(e).modelValue.value || n.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-placeholder-shown", "hidden", "style"]));
  }
}), yh = /* @__PURE__ */ _({
  __name: "EditableSubmitTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = ea();
    return (n, l) => (b(), w(o(A), M(t, {
      "aria-label": "submit",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? void 0 : "",
      onClick: o(e).submit
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve("Submit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), gh = /* @__PURE__ */ _({
  __name: "EditableCancelTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = ea();
    return (n, l) => (b(), w(o(A), M(t, {
      "aria-label": "cancel",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? void 0 : "",
      onClick: o(e).cancel
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve("Cancel")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), bh = /* @__PURE__ */ _({
  __name: "EditableEditTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = ea();
    return (n, l) => (b(), w(o(A), M(t, {
      "aria-label": "edit",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? "" : void 0,
      onClick: o(e).edit
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve("Edit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), [bo, Zd] = Q("HoverCardRoot"), Ch = /* @__PURE__ */ _({
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
    }), i = T(0), u = T(0), d = T(!1), p = T(!1), c = T(!1), f = T();
    function m() {
      clearTimeout(u.value), i.value = window.setTimeout(() => r.value = !0, l.value);
    }
    function g() {
      clearTimeout(i.value), !d.value && !p.value && (u.value = window.setTimeout(() => r.value = !1, s.value));
    }
    function v() {
      r.value = !1;
    }
    return Zd({
      open: r,
      onOpenChange(S) {
        r.value = S;
      },
      onOpen: m,
      onClose: g,
      onDismiss: v,
      hasSelectionRef: d,
      isPointerDownOnContentRef: p,
      isPointerInTransitRef: c,
      triggerElement: f
    }), (S, x) => (b(), w(o(Bt), null, {
      default: h(() => [
        C(S.$slots, "default", { open: o(r) })
      ]),
      _: 3
    }));
  }
});
function Dn(a) {
  return (t) => t.pointerType === "touch" ? void 0 : a();
}
function Jd(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
const _h = /* @__PURE__ */ _({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = bo();
    n.triggerElement = e;
    function l() {
      setTimeout(() => {
        !n.isPointerInTransitRef.value && !n.open.value && n.onClose();
      }, 0);
    }
    return (s, r) => (b(), w(o(Tt), { "as-child": "" }, {
      default: h(() => [
        q(o(A), {
          ref: o(t),
          "as-child": s.asChild,
          as: s.as,
          "data-state": o(n).open.value ? "open" : "closed",
          onPointerenter: r[0] || (r[0] = (i) => o(Dn)(o(n).onOpen)(i)),
          onPointerleave: r[1] || (r[1] = (i) => o(Dn)(l)(i)),
          onFocus: r[2] || (r[2] = (i) => o(n).onOpen()),
          onBlur: r[3] || (r[3] = (i) => o(n).onClose())
        }, {
          default: h(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "data-state"])
      ]),
      _: 3
    }));
  }
}), wh = /* @__PURE__ */ _({
  __name: "HoverCardPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ht), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qd = /* @__PURE__ */ _({
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
    const e = a, n = t, l = It(e), { forwardRef: s, currentElement: r } = R(), i = bo(), { isPointerInTransit: u, onPointerExit: d } = Pl(i.triggerElement, r);
    ei(i.isPointerInTransitRef, u, { direction: "rtl" }), d(() => {
      i.onClose();
    });
    const p = T(!1);
    let c;
    ye((m) => {
      if (p.value) {
        const g = document.body;
        c = g.style.userSelect || g.style.webkitUserSelect, g.style.userSelect = "none", g.style.webkitUserSelect = "none", m(() => {
          g.style.userSelect = c, g.style.webkitUserSelect = c;
        });
      }
    });
    function f() {
      p.value = !1, i.isPointerDownOnContentRef.value = !1, se(() => {
        var g;
        ((g = document.getSelection()) == null ? void 0 : g.toString()) !== "" && (i.hasSelectionRef.value = !0);
      });
    }
    return oe(() => {
      r.value && (document.addEventListener("pointerup", f), Jd(r.value).forEach((g) => g.setAttribute("tabindex", "-1")));
    }), Te(() => {
      document.removeEventListener("pointerup", f), i.hasSelectionRef.value = !1, i.isPointerDownOnContentRef.value = !1;
    }), (m, g) => (b(), w(o(yt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: g[1] || (g[1] = (v) => n("escapeKeyDown", v)),
      onPointerDownOutside: g[2] || (g[2] = (v) => n("pointerDownOutside", v)),
      onFocusOutside: g[3] || (g[3] = ie((v) => n("focusOutside", v), ["prevent"])),
      onDismiss: o(i).onDismiss
    }, {
      default: h(() => [
        q(o(Pt), M({ ...o(l), ...m.$attrs }, {
          ref: o(s),
          "data-state": o(i).open.value ? "open" : "closed",
          style: {
            userSelect: p.value ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: p.value ? "text" : void 0,
            // re-namespace exposed content custom properties
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          },
          onPointerdown: g[0] || (g[0] = (v) => {
            v.currentTarget.contains(v.target) && (p.value = !0), o(i).hasSelectionRef.value = !1, o(i).isPointerDownOnContentRef.value = !0;
          })
        }), {
          default: h(() => [
            C(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }, 8, ["onDismiss"]));
  }
}), xh = /* @__PURE__ */ _({
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
    const l = xe(a, t), { forwardRef: s } = R(), r = bo();
    return (i, u) => (b(), w(o(De), {
      present: i.forceMount || o(r).open.value
    }, {
      default: h(() => [
        q(Qd, M(o(l), {
          ref: o(s),
          onPointerenter: u[0] || (u[0] = (d) => o(Dn)(o(r).onOpen)(d))
        }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Sh = /* @__PURE__ */ _({
  __name: "HoverCardArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(Jt), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Eh = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(A), M(t, {
      onMousedown: n[0] || (n[0] = (l) => {
        !l.defaultPrevented && l.detail > 1 && l.preventDefault();
      })
    }), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ec(a) {
  return a == null ? void 0 : a.querySelector("[data-state=checked]");
}
function tc(a, t, e) {
  return a === void 0 ? !1 : Array.isArray(a) ? a.some((n) => Ht(n, t, e)) : Ht(a, t, e);
}
function Ht(a, t, e) {
  return a === void 0 || t === void 0 ? !1 : typeof a == "string" ? a === t : typeof e == "function" ? e(a, t) : typeof e == "string" ? (a == null ? void 0 : a[e]) === (t == null ? void 0 : t[e]) : Ye(a, t);
}
const [Xa, ac] = Q("ListboxRoot"), Ph = /* @__PURE__ */ _({
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
    const e = a, n = t, { multiple: l, highlightOnHover: s, orientation: r, disabled: i, selectionBehavior: u, dir: d } = ne(e), { getItems: p } = Gt(), { handleTypeaheadSearch: c } = ba(), { primitiveElement: f, currentElement: m } = Ae(), g = et(), v = _e(d), S = Qe(m), x = T(), D = T(!1), y = T(!0), E = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? (l.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: !0
    });
    function P(U) {
      if (D.value = !0, Array.isArray(E.value)) {
        const X = E.value.findIndex((ee) => Ht(ee, U, e.by));
        if (e.selectionBehavior === "toggle") {
          const ee = [...E.value];
          X === -1 ? ee.push(U) : ee.splice(X, 1), E.value = ee;
        } else
          E.value = [U], x.value = U;
      } else
        e.selectionBehavior === "toggle" && Ht(E.value, U, e.by) ? E.value = void 0 : E.value = U;
      setTimeout(() => {
        D.value = !1;
      }, 1);
    }
    const $ = T(null), B = T(null), O = T(!1), F = ua(), k = ua();
    function V() {
      return p().map((U) => U.ref).filter((U) => U.dataset.disabled !== "");
    }
    function H(U) {
      $.value = U, $.value.focus(), $.value.scrollIntoView({ block: "nearest" });
      const X = p().find((ee) => ee.ref === U);
      n("highlight", X);
    }
    function Y(U) {
      $.value && $.value.click();
    }
    function J(U) {
      if (D.value = !0, O.value)
        k.trigger(U);
      else {
        const X = U.altKey || U.ctrlKey || U.metaKey;
        if (X && U.key === "a" && l.value) {
          const ee = p(), fe = ee.map((G) => G.value);
          E.value = [...fe], U.preventDefault(), H(ee[ee.length - 1].ref);
        } else if (!X) {
          const ee = c(U.key, V());
          ee && H(ee);
        }
      }
      setTimeout(() => {
        D.value = !1;
      }, 1);
    }
    function N(U) {
      B.value = $.value, $.value = null, n("leave", U);
    }
    function L(U) {
      var ee, fe;
      const X = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((ee = U.currentTarget) == null || ee.dispatchEvent(X), n("entryFocus", X), !X.defaultPrevented)
        if (B.value)
          H(B.value);
        else {
          const G = (fe = V()) == null ? void 0 : fe[0];
          H(G);
        }
    }
    function W(U) {
      const X = Ul(U, r.value, v.value);
      if (!X)
        return;
      let ee = V();
      if ($.value) {
        if (X === "last")
          ee.reverse();
        else if (X === "prev" || X === "next") {
          X === "prev" && ee.reverse();
          const fe = ee.indexOf($.value);
          ee = ee.slice(fe + 1);
        }
        z(U, ee[0]);
      }
      if (ee.length) {
        const fe = !$.value && X === "prev" ? ee.length - 1 : 0;
        H(ee[fe]);
      }
      if (O.value)
        return k.trigger(U);
    }
    function z(U, X) {
      var fe;
      if (!(O.value || e.selectionBehavior !== "replace" || !l.value || !Array.isArray(E.value) || (U.altKey || U.ctrlKey || U.metaKey) && !U.shiftKey) && U.shiftKey) {
        const G = p().filter((Se) => Se.ref.dataset.disabled !== "");
        let le = (fe = G.find((Se) => Se.ref === X)) == null ? void 0 : fe.value;
        if (U.key === g.END ? le = G[G.length - 1].value : U.key === g.HOME && (le = G[0].value), !le || !x.value)
          return;
        const he = St(G.map((Se) => Se.value), x.value, le);
        E.value = he;
      }
    }
    async function Z(U) {
      if (O.value)
        F.trigger(U);
      else {
        await se();
        const ee = V().find((fe) => fe.dataset.state === "checked");
        ee && H(ee);
      }
    }
    return te(E, () => {
      D.value || se(() => {
        Z();
      });
    }, { immediate: !0, deep: !0 }), ac({
      modelValue: E,
      // @ts-expect-error ignoring
      onValueChange: P,
      multiple: l,
      orientation: r,
      dir: v,
      disabled: i,
      highlightOnHover: s,
      highlightedElement: $,
      isVirtual: O,
      virtualFocusHook: F,
      virtualKeydownHook: k,
      by: e.by,
      firstValue: x,
      selectionBehavior: u,
      focusable: y,
      onLeave: N,
      onEnter: L,
      onChangeHighlight: H,
      onKeydownEnter: Y,
      onKeydownNavigation: W,
      onKeydownTypeAhead: J
    }), (U, X) => (b(), w(o(A), {
      ref_key: "primitiveElement",
      ref: f,
      as: U.as,
      "as-child": U.asChild,
      dir: o(v),
      "data-disabled": o(i) ? "" : void 0,
      onPointerleave: N,
      onFocusout: X[0] || (X[0] = (ee) => {
        const fe = ee.relatedTarget || ee.target;
        $.value && !o(m).contains(fe) && N(ee);
      })
    }, {
      default: h(() => [
        C(U.$slots, "default", { modelValue: o(E) }),
        o(S) && e.name ? (b(), w(o(eo), {
          key: 0,
          name: e.name,
          value: o(E)
        }, null, 8, ["name", "value"])) : pe("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), Dh = /* @__PURE__ */ _({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = Xa(), e = Dt(!1, 10);
    return (n, l) => (b(), w(o(qt), null, {
      default: h(() => [
        q(o(A), {
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
          default: h(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "tabindex", "data-orientation", "onKeydown"])
      ]),
      _: 3
    }));
  }
}), $h = /* @__PURE__ */ _({
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
    }), s = Xa();
    s.focusable.value = !1;
    const { primitiveElement: r, currentElement: i } = Ae();
    return oe(() => {
      setTimeout(() => {
        var u;
        e.autoFocus && ((u = i.value) == null || u.focus());
      }, 1);
    }), (u, d) => (b(), w(o(A), {
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
      onInput: d[0] || (d[0] = (p) => {
        l.value = p.target.value;
      })
    }, {
      default: h(() => [
        C(u.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "onKeydown"]));
  }
}), nc = "listbox.select", [oc, lc] = Q("ListboxItem"), Ih = /* @__PURE__ */ _({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = me(void 0, "radix-vue-listbox-item"), i = Xa(), u = I(() => s.value === i.highlightedElement.value), d = I(() => tc(i.modelValue.value, e.value, i.by)), p = I(() => i.disabled.value || e.disabled);
    async function c(m) {
      n("select", m), !(m != null && m.defaultPrevented) && !p.value && m && (i.onValueChange(e.value), i.onChangeHighlight(m.target));
    }
    function f(m) {
      const g = { originalEvent: m, value: e.value };
      zt(nc, c, g);
    }
    return lc({
      isSelected: d
    }), (m, g) => (b(), w(o(Yt), { value: m.value }, {
      default: h(() => [
        q(o(A), {
          id: o(r),
          ref: o(l),
          role: "option",
          tabindex: o(i).focusable.value ? u.value ? "0" : "-1" : void 0,
          "aria-selected": d.value,
          as: m.as,
          "as-child": m.asChild,
          disabled: p.value ? "" : void 0,
          "data-disabled": p.value ? "" : void 0,
          "data-highlighted": u.value ? "" : void 0,
          "data-state": d.value ? "checked" : "unchecked",
          onClick: f,
          onKeydown: re(ie(f, ["prevent"]), ["space"]),
          onPointermove: g[0] || (g[0] = (v) => {
            o(i).highlightOnHover.value ? o(i).onChangeHighlight(o(s)) : o(i).focusable.value || o(i).onChangeHighlight(o(s));
          })
        }, {
          default: h(() => [
            C(m.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Bh = /* @__PURE__ */ _({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a;
    R();
    const e = oc();
    return (n, l) => o(e).isSelected.value ? (b(), w(o(A), M({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
});
function oa(a, t, e) {
  let n = e.initialDeps ?? [], l;
  return () => {
    var s, r, i, u;
    let d;
    e.key && ((s = e.debug) != null && s.call(e)) && (d = Date.now());
    const p = a();
    if (!(p.length !== n.length || p.some((m, g) => n[g] !== m)))
      return l;
    n = p;
    let f;
    if (e.key && ((r = e.debug) != null && r.call(e)) && (f = Date.now()), l = t(...p), e.key && ((i = e.debug) != null && i.call(e))) {
      const m = Math.round((Date.now() - d) * 100) / 100, g = Math.round((Date.now() - f) * 100) / 100, v = g / 16, S = (x, D) => {
        for (x = String(x); x.length < D; )
          x = " " + x;
        return x;
      };
      console.info(
        `%c⏱ ${S(g, 5)} /${S(m, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * v, 120)
        )}deg 100% 31%);`,
        e == null ? void 0 : e.key
      );
    }
    return (u = e == null ? void 0 : e.onChange) == null || u.call(e, l), l;
  };
}
function bn(a, t) {
  if (a === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return a;
}
const sc = (a, t) => Math.abs(a - t) < 1, rc = (a, t) => {
  let e;
  return function(...n) {
    clearTimeout(e), e = setTimeout(() => a.apply(this, n), t);
  };
}, ic = (a) => a, uc = (a) => {
  const t = Math.max(a.startIndex - a.overscan, 0), e = Math.min(a.endIndex + a.overscan, a.count - 1), n = [];
  for (let l = t; l <= e; l++)
    n.push(l);
  return n;
}, dc = (a, t) => {
  const e = a.scrollElement;
  if (!e)
    return;
  const n = (s) => {
    const { width: r, height: i } = s;
    t({ width: Math.round(r), height: Math.round(i) });
  };
  if (n(e.getBoundingClientRect()), typeof ResizeObserver > "u")
    return () => {
    };
  const l = new ResizeObserver((s) => {
    const r = s[0];
    if (r != null && r.borderBoxSize) {
      const i = r.borderBoxSize[0];
      if (i) {
        n({ width: i.inlineSize, height: i.blockSize });
        return;
      }
    }
    n(e.getBoundingClientRect());
  });
  return l.observe(e, { box: "border-box" }), () => {
    l.unobserve(e);
  };
}, Wo = {
  passive: !0
}, cc = typeof window > "u" ? !0 : "onscrollend" in window, pc = (a, t) => {
  const e = a.scrollElement;
  if (!e)
    return;
  let n = 0;
  const l = cc ? () => {
  } : rc(() => {
    t(n, !1);
  }, a.options.isScrollingResetDelay), s = (u) => () => {
    n = e[a.options.horizontal ? "scrollLeft" : "scrollTop"], l(), t(n, u);
  }, r = s(!0), i = s(!1);
  return i(), e.addEventListener("scroll", r, Wo), e.addEventListener("scrollend", i, Wo), () => {
    e.removeEventListener("scroll", r), e.removeEventListener("scrollend", i);
  };
}, fc = (a, t, e) => {
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
}, vc = (a, {
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
class mc {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollDirection = null, this.scrollAdjustments = 0, this.measureElementCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const n = () => e || (typeof ResizeObserver < "u" ? e = new ResizeObserver((l) => {
        l.forEach((s) => {
          this._measureElement(s.target, s);
        });
      }) : null);
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
        getItemKey: ic,
        rangeExtractor: uc,
        onChange: () => {
        },
        measureElement: fc,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
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
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.scrollElement = null;
    }, this._didMount = () => (this.measureElementCache.forEach(this.observer.observe), () => {
      this.observer.disconnect(), this.cleanup();
    }), this._willUpdate = () => {
      const e = this.options.getScrollElement();
      this.scrollElement !== e && (this.cleanup(), this.scrollElement = e, this._scrollToOffset(this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      }), this.unsubs.push(
        this.options.observeElementRect(this, (n) => {
          this.scrollRect = n, this.notify(!1, !1);
        })
      ), this.unsubs.push(
        this.options.observeElementOffset(this, (n, l) => {
          this.scrollAdjustments = 0, this.scrollDirection = l ? this.scrollOffset < n ? "forward" : "backward" : null, this.scrollOffset = n;
          const s = this.isScrolling;
          this.isScrolling = l, this.notify(s !== l, l);
        })
      ));
    }, this.getSize = () => this.scrollRect[this.options.horizontal ? "width" : "height"], this.getMeasurementOptions = oa(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (e, n, l, s) => (this.pendingMeasuredCacheIndexes = [], {
        count: e,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: s
      }),
      {
        key: !1
      }
    ), this.getFurthestMeasurement = (e, n) => {
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
    }, this.getMeasurements = oa(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: n, scrollMargin: l, getItemKey: s }, r) => {
        const i = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, i);
        for (let d = i; d < e; d++) {
          const p = s(d), c = this.options.lanes === 1 ? u[d - 1] : this.getFurthestMeasurement(u, d), f = c ? c.end + this.options.gap : n + l, m = r.get(p), g = typeof m == "number" ? m : this.options.estimateSize(d), v = f + g, S = c ? c.lane : d % this.options.lanes;
          u[d] = {
            index: d,
            start: f,
            size: g,
            end: v,
            key: p,
            lane: S
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = oa(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (e, n, l) => this.range = e.length > 0 && n > 0 ? hc({
        measurements: e,
        outerSize: n,
        scrollOffset: l
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getIndexes = oa(
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
      const l = this.measurementsCache[this.indexFromElement(e)];
      if (!l || !e.isConnected) {
        this.measureElementCache.forEach((i, u) => {
          i === e && (this.observer.unobserve(e), this.measureElementCache.delete(u));
        });
        return;
      }
      const s = this.measureElementCache.get(l.key);
      s !== e && (s && this.observer.unobserve(s), this.observer.observe(e), this.measureElementCache.set(l.key, e));
      const r = this.options.measureElement(e, n, this);
      this.resizeItem(l, r);
    }, this.resizeItem = (e, n) => {
      const l = this.itemSizeCache.get(e.key) ?? e.size, s = n - l;
      s !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(e, s, this) : e.start < this.scrollOffset + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), this._scrollToOffset(this.scrollOffset, {
        adjustments: this.scrollAdjustments += s,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(e.index), this.itemSizeCache = new Map(this.itemSizeCache.set(e.key, n)), this.notify(!0, !1));
    }, this.measureElement = (e) => {
      e && this._measureElement(e, void 0);
    }, this.getVirtualItems = oa(
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
      return bn(
        n[ts(
          0,
          n.length - 1,
          (l) => bn(n[l]).start,
          e
        )]
      );
    }, this.getOffsetForAlignment = (e, n) => {
      const l = this.getSize();
      n === "auto" && (e <= this.scrollOffset ? n = "start" : e >= this.scrollOffset + l ? n = "end" : n = "start"), n === "start" ? e = e : n === "end" ? e = e - l : n === "center" && (e = e - l / 2);
      const s = this.options.horizontal ? "scrollWidth" : "scrollHeight", i = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[s] : this.scrollElement[s] : 0) - this.getSize();
      return Math.max(Math.min(i, e), 0);
    }, this.getOffsetForIndex = (e, n = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const l = bn(this.getMeasurements()[e]);
      if (n === "auto")
        if (l.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd)
          n = "end";
        else if (l.start <= this.scrollOffset + this.options.scrollPaddingStart)
          n = "start";
        else
          return [this.scrollOffset, n];
      const s = n === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(s, n), n];
    }, this.isDynamicMode = () => this.measureElementCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && (clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
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
      const [s, r] = this.getOffsetForIndex(e, n);
      this._scrollToOffset(s, { adjustments: void 0, behavior: l }), l !== "smooth" && this.isDynamicMode() && (this.scrollToIndexTimeoutId = setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.measureElementCache.has(
          this.options.getItemKey(e)
        )) {
          const [u] = this.getOffsetForIndex(e, r);
          sc(u, this.scrollOffset) || this.scrollToIndex(e, { align: r, behavior: l });
        } else
          this.scrollToIndex(e, { align: r, behavior: l });
      }));
    }, this.scrollBy = (e, { behavior: n } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.scrollOffset + e, {
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
    }, this.setOptions(t), this.scrollRect = this.options.initialRect, this.scrollOffset = typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset, this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e) => {
      this.itemSizeCache.set(e.key, e.size);
    }), this.notify(!1, !1);
  }
}
const ts = (a, t, e, n) => {
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
function hc({
  measurements: a,
  outerSize: t,
  scrollOffset: e
}) {
  const n = a.length - 1, s = ts(0, n, (i) => a[i].start, e);
  let r = s;
  for (; r < n && a[r].end < e + t; )
    r++;
  return { startIndex: s, endIndex: r };
}
function yc(a) {
  const t = new mc(o(a)), e = Rn(t), n = t._didMount();
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
          Ao(e), (i = l.onChange) == null || i.call(l, s, r);
        }
      }), t._willUpdate(), Ao(e);
    },
    {
      immediate: !0
    }
  ), ol(n), e;
}
function as(a) {
  return yc(
    I(() => ({
      observeElementRect: dc,
      observeElementOffset: pc,
      scrollToFn: vc,
      ...o(a)
    }))
  );
}
const Th = /* @__PURE__ */ _({
  __name: "ListboxVirtualizer",
  props: {
    options: {},
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a) {
    const t = a, e = Ka(), n = Xa(), l = Sl(), { getItems: s } = Xt();
    n.isVirtual.value = !0;
    const r = I(() => {
      const f = l.value;
      if (f) {
        const m = window.getComputedStyle(f);
        return {
          start: Number.parseFloat(m.paddingBlockStart || m.paddingTop),
          end: Number.parseFloat(m.paddingBlockEnd || m.paddingBottom)
        };
      } else
        return { start: 0, end: 0 };
    }), i = as(
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
      is: kn(e.default({
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
      const m = t.options.findIndex((g) => Array.isArray(n.modelValue.value) ? Ht(g, n.modelValue.value[0], n.by) : Ht(g, n.modelValue.value, n.by));
      m !== -1 && (f == null || f.preventDefault(), i.value.scrollToIndex(m, { align: "start" }), requestAnimationFrame(() => {
        const g = ec(l.value);
        g && f && (g == null || g.focus());
      }));
    });
    const d = Dt("", 1e3), p = I(() => {
      const f = (m) => t.textContent ? t.textContent(m) : m.toString().toLowerCase();
      return t.options.map((m, g) => ({
        index: g,
        textContent: f(m)
      }));
    });
    function c(f, m) {
      var x, D, y, E;
      if (!((x = n.firstValue) != null && x.value) || !n.multiple.value || !Array.isArray(n.modelValue.value))
        return;
      const v = (D = s().filter((P) => P.ref.dataset.disabled !== "").find((P) => P.ref === n.highlightedElement.value)) == null ? void 0 : D.value;
      if (!v)
        return;
      let S = null;
      switch (m) {
        case "prev":
        case "next": {
          S = St(t.options, n.firstValue.value, v);
          break;
        }
        case "first": {
          S = St(t.options, n.firstValue.value, (y = t.options) == null ? void 0 : y[0]);
          break;
        }
        case "last": {
          S = St(t.options, n.firstValue.value, (E = t.options) == null ? void 0 : E[t.options.length - 1]);
          break;
        }
      }
      n.modelValue.value = S;
    }
    return n.virtualKeydownHook.on((f) => {
      var S;
      const m = f.altKey || f.ctrlKey || f.metaKey;
      if (f.key === "Tab" && !m)
        return;
      let v = qa[f.key];
      if (m && f.key === "a" && n.multiple.value ? (f.preventDefault(), n.modelValue.value = [...t.options], v = "last") : f.shiftKey && v && c(f, v), ["first", "last"].includes(v)) {
        f.preventDefault();
        const x = v === "first" ? 0 : t.options.length - 1;
        i.value.scrollToIndex(x), requestAnimationFrame(() => {
          const D = s(), y = v === "first" ? D[0] : D[D.length - 1];
          n.onChangeHighlight(y.ref);
        });
      } else if (!v && !m) {
        d.value += f.key;
        const x = Number((S = document.activeElement) == null ? void 0 : S.getAttribute("data-index")), D = p.value[x].textContent, y = p.value.map(($) => $.textContent), E = Un(y, d.value, D), P = p.value.find(($) => $.textContent === E);
        P && (i.value.scrollToIndex(P.index, { align: "start" }), requestAnimationFrame(() => {
          const $ = l.value.querySelector(`[data-index="${P.index}"]`);
          $ instanceof HTMLElement && n.onChangeHighlight($);
        }));
      }
    }), (f, m) => (b(), ue("div", {
      "data-radix-vue-virtualizer": "",
      style: Ce({
        position: "relative",
        width: "100%",
        height: `${o(i).getTotalSize()}px`
      })
    }, [
      (b(!0), ue(we, null, ma(u.value, ({ is: g, item: v }) => (b(), w(Ge(g), {
        key: v.index
      }))), 128))
    ], 4));
  }
}), [gc, bc] = Q("ListboxGroup"), Rh = /* @__PURE__ */ _({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = me(void 0, "radix-vue-listbox-group");
    return bc({ id: e }), (n, l) => (b(), w(o(A), M({ role: "group" }, t, { "aria-labelledby": o(e) }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Ah = /* @__PURE__ */ _({
  __name: "ListboxGroupLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = gc({ id: "" });
    return (n, l) => (b(), w(o(A), M(t, {
      id: o(e).id
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Za, Cc] = Q("MenubarRoot"), kh = /* @__PURE__ */ _({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), { createCollection: r } = Me("menubar");
    r(s);
    const i = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), u = T(null), { dir: d, loop: p } = ne(e), c = _e(d);
    return Cc({
      modelValue: i,
      dir: c,
      loop: p,
      onMenuOpen: (f) => {
        i.value = f, u.value = f;
      },
      onMenuClose: () => {
        i.value = "";
      },
      onMenuToggle: (f) => {
        i.value = i.value ? "" : f, u.value = f;
      }
    }), (f, m) => (b(), w(o(At), {
      "current-tab-stop-id": u.value,
      "onUpdate:currentTabStopId": m[0] || (m[0] = (g) => u.value = g),
      orientation: "horizontal",
      loop: o(p),
      dir: o(c),
      "as-child": ""
    }, {
      default: h(() => [
        q(o(A), {
          ref: o(l),
          role: "menubar"
        }, {
          default: h(() => [
            C(f.$slots, "default", { modelValue: o(i) })
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["current-tab-stop-id", "loop", "dir"]));
  }
}), [Co, _c] = Q("MenubarMenu"), Oh = /* @__PURE__ */ _({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a) {
    const e = me(a.value), n = Za();
    R();
    const l = T(), s = T(!1), r = I(() => n.modelValue.value === e);
    return te(r, () => {
      r.value || (s.value = !1);
    }), _c({
      value: e,
      triggerElement: l,
      triggerId: e,
      contentId: "",
      wasKeyboardTriggerOpenRef: s
    }), (i, u) => (b(), w(o(ao), {
      open: r.value,
      modal: !1,
      dir: o(n).dir.value,
      "onUpdate:open": u[0] || (u[0] = (d) => {
        d || o(n).onMenuClose();
      })
    }, {
      default: h(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir"]));
  }
}), Mh = /* @__PURE__ */ _({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = Za(), e = Co(), { forwardRef: n, currentElement: l } = R(), s = T(!1), r = I(() => t.modelValue.value === e.value);
    return oe(() => {
      e.triggerElement = l;
    }), (i, u) => (b(), w(o(kt), {
      "as-child": "",
      focusable: !i.disabled,
      "tab-stop-id": o(e).value
    }, {
      default: h(() => [
        q(o(Ga), { "as-child": "" }, {
          default: h(() => [
            q(o(A), {
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
                var p;
                !!o(t).modelValue.value && !r.value && (o(t).onMenuOpen(o(e).value), (p = o(l)) == null || p.focus());
              }),
              onKeydown: u[2] || (u[2] = re((d) => {
                i.disabled || (["Enter", " "].includes(d.key) && o(t).onMenuToggle(o(e).value), d.key === "ArrowDown" && o(t).onMenuOpen(o(e).value), ["Enter", " ", "ArrowDown"].includes(d.key) && (o(e).wasKeyboardTriggerOpenRef.value = !0, d.preventDefault()));
              }, ["enter", "space", "arrow-down"])),
              onFocus: u[3] || (u[3] = (d) => s.value = !0),
              onBlur: u[4] || (u[4] = (d) => s.value = !1)
            }, {
              default: h(() => [
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
}), Vh = /* @__PURE__ */ _({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(uo), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fh = /* @__PURE__ */ _({
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
    const s = Za(), r = Co();
    r.contentId || (r.contentId = me(void 0, "radix-vue-menubar-content"));
    const { injectCollection: i } = Me("menubar"), u = i(), d = T(!1);
    function p(c) {
      const m = c.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), v = (s.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === c.key;
      if (!v && m)
        return;
      let x = u.value.map((E) => E.dataset.value);
      v && x.reverse();
      const D = x.indexOf(r.value);
      x = s.loop.value ? jn(x, D + 1) : x.slice(D + 1);
      const [y] = x;
      y && s.onMenuOpen(y);
    }
    return (c, f) => (b(), w(o(ro), M(o(l), {
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
      onCloseAutoFocus: f[0] || (f[0] = (m) => {
        var v;
        !!!o(s).modelValue.value && !d.value && ((v = o(r).triggerElement.value) == null || v.focus()), d.value = !1, m.preventDefault();
      }),
      onFocusOutside: f[1] || (f[1] = (m) => {
        const g = m.target;
        o(u).some((S) => S.contains(g)) && m.preventDefault();
      }),
      onInteractOutside: f[2] || (f[2] = (m) => {
        d.value = !0;
      }),
      onEntryFocus: f[3] || (f[3] = (m) => {
        o(r).wasKeyboardTriggerOpenRef.value || m.preventDefault();
      }),
      onKeydown: re(p, ["arrow-right", "arrow-left"])
    }), {
      default: h(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "style"]));
  }
}), Lh = /* @__PURE__ */ _({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(to), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nh = /* @__PURE__ */ _({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), w(o(_a), K(j({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zh = /* @__PURE__ */ _({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(Ya), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kh = /* @__PURE__ */ _({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(fo), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hh = /* @__PURE__ */ _({
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
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), w(o(so), K(j({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wh = /* @__PURE__ */ _({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(lo), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jh = /* @__PURE__ */ _({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(io), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uh = /* @__PURE__ */ _({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), w(o(co), K(j({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gh = /* @__PURE__ */ _({
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
    return R(), (s, r) => (b(), w(o(po), K(j(o(l))), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qh = /* @__PURE__ */ _({
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
    return (s, r) => (b(), w(o(vo), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Xe(l) ? l.value = i : null)
    }, {
      default: h(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Yh = /* @__PURE__ */ _({
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
    const { injectCollection: s } = Me("menubar"), r = Za(), i = Co(), u = s();
    function d(p) {
      if (p.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let m = u.value.map((S) => S.dataset.value);
      const g = m.indexOf(i.value);
      m = r.loop.value ? jn(m, g + 1) : m.slice(g + 1);
      const [v] = m;
      v && r.onMenuOpen(v);
    }
    return (p, c) => (b(), w(o(mo), M(o(l), {
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
      default: h(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), Xh = /* @__PURE__ */ _({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(ho), M(t, { "data-radix-menubar-subtrigger": "" }), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [gt, ns] = Q(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), Zh = /* @__PURE__ */ _({
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
    }), s = T(""), { forwardRef: r, currentElement: i } = R(), u = T(), d = T(), { createCollection: p } = Me("nav");
    p(u);
    const { delayDuration: c, skipDelayDuration: f, dir: m, disableClickTrigger: g, disableHoverTrigger: v } = ne(e), S = _e(m), x = Dt(!1, f), D = I(() => l.value !== "" || x.value ? 150 : c.value), y = Ln((E) => {
      s.value = l.value, l.value = E;
    }, D);
    return ns({
      isRootMenu: !0,
      modelValue: l,
      previousValue: s,
      baseId: me(void 0, "radix-navigation-menu"),
      disableClickTrigger: g,
      disableHoverTrigger: v,
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
        y(E);
      },
      onTriggerLeave: () => {
        x.value = !0, y("");
      },
      onContentEnter: (E) => {
        y(E);
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
    }), (E, P) => (b(), w(o(A), {
      ref: o(r),
      "aria-label": "Main",
      as: E.as,
      "as-child": E.asChild,
      "data-orientation": E.orientation,
      dir: o(S)
    }, {
      default: h(() => [
        C(E.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "dir"]));
  }
});
function Ja(a) {
  return a ? "open" : "closed";
}
function os(a, t) {
  return `${a}-trigger-${t}`;
}
function _o(a, t) {
  return `${a}-content-${t}`;
}
const ka = "navigationMenu.rootContentDismiss";
function $n(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function ls(a) {
  const t = document.activeElement;
  return a.some((e) => e === t ? !0 : (e.focus(), document.activeElement !== t));
}
function wc(a) {
  return a.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    a.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
function ss(a) {
  return (t) => t.pointerType === "mouse" ? a(t) : void 0;
}
const [wo, xc] = Q("NavigationMenuItem"), Jh = /* @__PURE__ */ _({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(a) {
    const t = a;
    R();
    const { injectCollection: e } = Me("nav"), n = e(), l = gt(), s = me(t.value), r = T(), i = T(), u = _o(l.baseId, s);
    let d = () => ({});
    const p = T(!1);
    async function c(v = "start") {
      const S = document.getElementById(u);
      if (S) {
        d();
        const x = $n(S);
        x.length && ls(v === "start" ? x : x.reverse());
      }
    }
    function f() {
      const v = document.getElementById(u);
      if (v) {
        const S = $n(v);
        S.length && (d = wc(S));
      }
    }
    xc({
      value: s,
      contentId: u,
      triggerRef: r,
      focusProxyRef: i,
      wasEscapeCloseRef: p,
      onEntryKeyDown: c,
      onFocusProxyEnter: c,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    function m() {
      var v;
      l.onItemDismiss(), (v = r.value) == null || v.focus();
    }
    function g(v) {
      const S = document.activeElement;
      if (v.keyCode === 32 || v.key === "Enter")
        if (l.modelValue.value === s) {
          m(), v.preventDefault();
          return;
        } else {
          v.target.click(), v.preventDefault();
          return;
        }
      const x = n.value.filter(
        (y) => {
          var E;
          return (E = y.parentElement) == null ? void 0 : E.hasAttribute("data-menu-item");
        }
      ), D = $t(v, S, void 0, {
        itemsArray: x,
        loop: !1
      });
      D && (D == null || D.focus()), v.preventDefault(), v.stopPropagation();
    }
    return (v, S) => (b(), w(o(A), {
      "as-child": v.asChild,
      as: v.as,
      "data-menu-item": "",
      onKeydown: re(g, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: h(() => [
        C(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Sc = /* @__PURE__ */ _({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, { injectCollection: l } = Me("nav"), s = l(), { forwardRef: r, currentElement: i } = R(), u = gt(), d = wo(), p = os(u.baseId, d.value), c = _o(u.baseId, d.value), f = T(null), m = I(() => {
      const E = s.value.map((k) => k.id.split("trigger-")[1]);
      u.dir.value === "rtl" && E.reverse();
      const P = E.indexOf(u.modelValue.value), $ = E.indexOf(u.previousValue.value), B = d.value === u.modelValue.value, O = $ === E.indexOf(d.value);
      if (!B && !O)
        return f.value;
      const F = (() => {
        if (P !== $) {
          if (B && $ !== -1)
            return P > $ ? "from-end" : "from-start";
          if (O && P !== -1)
            return P > $ ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = F, F;
    });
    function g(y) {
      var E, P;
      if (n("focusOutside", y), n("interactOutside", y), !y.defaultPrevented) {
        d.onContentFocusOutside();
        const $ = y.target;
        (P = (E = u.rootNavigationMenu) == null ? void 0 : E.value) != null && P.contains($) && y.preventDefault();
      }
    }
    function v(y) {
      var E;
      if (n("pointerDownOutside", y), !y.defaultPrevented) {
        const P = y.target, $ = s.value.some(
          (O) => O.contains(P)
        ), B = u.isRootMenu && ((E = u.viewport.value) == null ? void 0 : E.contains(P));
        ($ || B || !u.isRootMenu) && y.preventDefault();
      }
    }
    ye((y) => {
      const E = i.value;
      if (u.isRootMenu && E) {
        const P = () => {
          var $;
          u.onItemDismiss(), d.onRootContentClose(), E.contains(document.activeElement) && (($ = d.triggerRef.value) == null || $.focus());
        };
        E.addEventListener(ka, P), y(
          () => E.removeEventListener(ka, P)
        );
      }
    });
    function S(y) {
      var E, P;
      n("escapeKeyDown", y), y.defaultPrevented || (u.onItemDismiss(), (P = (E = d.triggerRef) == null ? void 0 : E.value) == null || P.focus(), d.wasEscapeCloseRef.value = !0);
    }
    function x(y) {
      var O;
      const E = y.altKey || y.ctrlKey || y.metaKey, P = y.key === "Tab" && !E, $ = $n(y.currentTarget);
      if (P) {
        const F = document.activeElement, k = $.findIndex(
          (Y) => Y === F
        ), H = y.shiftKey ? $.slice(0, k).reverse() : $.slice(k + 1, $.length);
        if (ls(H))
          y.preventDefault();
        else {
          (O = d.focusProxyRef.value) == null || O.focus();
          return;
        }
      }
      const B = $t(
        y,
        document.activeElement,
        void 0,
        { itemsArray: $, loop: !1, enableIgnoredElement: !0 }
      );
      B == null || B.focus();
    }
    function D() {
      var E;
      const y = new Event(ka, {
        bubbles: !0,
        cancelable: !0
      });
      (E = i.value) == null || E.dispatchEvent(y);
    }
    return (y, E) => (b(), w(o(yt), M({
      id: o(c),
      ref: o(r),
      "aria-labelledby": o(p),
      "data-motion": m.value,
      "data-state": o(Ja)(o(u).modelValue.value === o(d).value),
      "data-orientation": o(u).orientation
    }, e, {
      onKeydown: x,
      onEscapeKeyDown: S,
      onPointerDownOutside: v,
      onFocusOutside: g,
      onDismiss: D
    }), {
      default: h(() => [
        C(y.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
  }
}), Qh = /* @__PURE__ */ _({
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
    const e = a, n = t, l = Re(n), { forwardRef: s } = R(), r = Ha(), i = gt(), u = wo(), d = I(() => u.value === i.modelValue.value), p = I(() => i.viewport.value && !i.modelValue.value && i.previousValue.value ? i.previousValue.value === u.value : !1);
    return (c, f) => o(r) ? (b(), w(Wt, {
      key: 0,
      to: o(i).viewport.value,
      disabled: !o(i).viewport.value
    }, [
      q(o(De), {
        present: c.forceMount || d.value || p.value
      }, {
        default: h(() => [
          q(Sc, M({
            ref: o(s),
            "data-state": o(Ja)(d.value),
            style: {
              pointerEvents: !d.value && o(i).isRootMenu ? "none" : void 0
            }
          }, { ...c.$attrs, ...e, ...o(l) }, {
            onPointerenter: f[0] || (f[0] = (m) => o(i).onContentEnter(o(u).value)),
            onPointerleave: f[1] || (f[1] = (m) => o(ss)(() => o(i).onContentLeave())(m)),
            onPointerDownOutside: f[2] || (f[2] = (m) => n("pointerDownOutside", m)),
            onFocusOutside: f[3] || (f[3] = (m) => n("focusOutside", m)),
            onInteractOutside: f[4] || (f[4] = (m) => n("interactOutside", m))
          }), {
            default: h(() => [
              C(c.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-state", "style"])
        ]),
        _: 3
      }, 8, ["present"])
    ], 8, ["to", "disabled"])) : pe("", !0);
  }
}), ey = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), { injectCollection: n } = Me("nav"), l = n(), s = gt(), r = T(), i = I(() => s.orientation === "horizontal"), u = I(() => !!s.modelValue.value), d = T();
    function p() {
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
      const c = l.value;
      d.value = c.find(
        (f) => f.id.includes(s.modelValue.value)
      ), p();
    }), Ze(d, p), Ze(s.indicatorTrack, p), (c, f) => o(s).indicatorTrack.value ? (b(), w(Wt, {
      key: 0,
      to: o(s).indicatorTrack.value
    }, [
      q(o(De), {
        present: c.forceMount || u.value
      }, {
        default: h(() => {
          var m, g, v, S;
          return [
            q(o(A), M({
              ref: o(e),
              "aria-hidden": "",
              "data-state": u.value ? "visible" : "hidden",
              "data-orientation": o(s).orientation,
              "as-child": t.asChild,
              as: c.as,
              style: {
                position: "absolute",
                ...i.value ? {
                  left: 0,
                  width: `${(m = r.value) == null ? void 0 : m.size}px`,
                  transform: `translateX(${(g = r.value) == null ? void 0 : g.offset}px)`
                } : {
                  top: 0,
                  height: `${(v = r.value) == null ? void 0 : v.size}px`,
                  transform: `translateY(${(S = r.value) == null ? void 0 : S.offset}px)`
                }
              }
            }, c.$attrs), {
              default: h(() => [
                C(c.$slots, "default")
              ]),
              _: 3
            }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])
          ];
        }),
        _: 3
      }, 8, ["present"])
    ], 8, ["to"])) : pe("", !0);
  }
}), ty = /* @__PURE__ */ _({
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
          ka,
          {
            bubbles: !0,
            cancelable: !0
          }
        );
        (r = s.target) == null || r.dispatchEvent(i);
      }
    }
    return (s, r) => (b(), w(o(A), {
      as: s.as,
      "data-active": s.active ? "" : void 0,
      "aria-current": s.active ? "page" : void 0,
      "as-child": e.asChild,
      "data-radix-vue-collection-item": "",
      onClick: l
    }, {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
}), ay = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(a) {
    const t = a, e = gt(), { forwardRef: n, currentElement: l } = R();
    return oe(() => {
      e.onIndicatorTrackChange(l.value);
    }), (s, r) => (b(), w(o(A), {
      ref: o(n),
      style: { position: "relative" }
    }, {
      default: h(() => [
        q(o(A), M(s.$attrs, {
          "as-child": t.asChild,
          as: s.as,
          "data-orientation": o(e).orientation
        }), {
          default: h(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-orientation"])
      ]),
      _: 3
    }, 512));
  }
}), ny = /* @__PURE__ */ _({
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
    }), s = T(""), r = gt(), { forwardRef: i, currentElement: u } = R(), d = T(), p = T(), { createCollection: c } = Me("nav");
    return c(d), ns({
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
      viewport: p,
      onViewportChange: (f) => {
        p.value = f;
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
    }), (f, m) => (b(), w(o(A), {
      ref: o(i),
      "data-orientation": f.orientation,
      "as-child": e.asChild,
      as: f.as
    }, {
      default: h(() => [
        C(f.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["data-orientation", "as-child", "as"]));
  }
}), Ec = ["aria-owns"], oy = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = gt(), n = wo(), { forwardRef: l, currentElement: s } = R(), r = T(""), i = T(""), u = Dt(!1, 300), d = T(!1), p = I(() => n.value === e.modelValue.value);
    oe(() => {
      n.triggerRef = s, r.value = os(e.baseId, n.value), i.value = _o(e.baseId, n.value);
    });
    function c() {
      e.disableHoverTrigger.value || (d.value = !1, n.wasEscapeCloseRef.value = !1);
    }
    function f(D) {
      if (!e.disableHoverTrigger.value && D.pointerType === "mouse") {
        if (t.disabled || d.value || n.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(n.value), u.value = !0;
      }
    }
    function m(D) {
      if (!e.disableHoverTrigger.value && D.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), u.value = !1;
      }
    }
    function g(D) {
      D.pointerType === "mouse" && e.disableClickTrigger.value || u.value || (p.value ? e.onItemSelect("") : e.onItemSelect(n.value), d.value = p.value);
    }
    function v(D) {
      const E = { horizontal: "ArrowDown", vertical: e.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      p.value && D.key === E && (n.onEntryKeyDown(), D.preventDefault(), D.stopPropagation());
    }
    function S(D) {
      n.focusProxyRef.value = Be(D);
    }
    function x(D) {
      const y = document.getElementById(n.contentId), E = D.relatedTarget, P = E === s.value, $ = y == null ? void 0 : y.contains(E);
      (P || !$) && n.onFocusProxyEnter(P ? "start" : "end");
    }
    return (D, y) => (b(), ue(we, null, [
      q(o(A), M({
        id: r.value,
        ref: o(l),
        disabled: D.disabled,
        "data-disabled": D.disabled ? "" : void 0,
        "data-state": o(Ja)(p.value),
        "aria-expanded": p.value,
        "aria-controls": i.value,
        "as-child": t.asChild,
        as: D.as
      }, D.$attrs, {
        "data-radix-vue-collection-item": "",
        onPointerenter: c,
        onPointermove: f,
        onPointerleave: m,
        onClick: g,
        onKeydown: v
      }), {
        default: h(() => [
          C(D.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
      p.value ? (b(), ue(we, { key: 0 }, [
        q(o(Qt), {
          ref: S,
          "aria-hidden": "",
          tabindex: 0,
          onFocus: x
        }),
        o(e).viewport ? (b(), ue("span", {
          key: 0,
          "aria-owns": i.value
        }, null, 8, Ec)) : pe("", !0)
      ], 64)) : pe("", !0)
    ], 64));
  }
}), ly = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = gt(), l = T(), s = I(() => !!n.modelValue.value), r = I(() => n.modelValue.value);
    te(e, () => {
      e.value && n.onViewportChange(e.value);
    });
    const i = T();
    return te([r, s], async () => {
      var d, p;
      if (await se(), !e.value)
        return;
      const u = (p = (d = e.value.querySelector("[data-state=open]")) == null ? void 0 : d.children) == null ? void 0 : p[0];
      i.value = u;
    }, { immediate: !0 }), Ze(i, () => {
      i.value && (l.value = {
        width: i.value.offsetWidth,
        height: i.value.offsetHeight
      });
    }), (u, d) => (b(), w(o(De), {
      present: u.forceMount || s.value
    }, {
      default: h(() => {
        var p, c;
        return [
          q(o(A), M(u.$attrs, {
            ref: o(t),
            as: u.as,
            "as-child": u.asChild,
            "data-state": o(Ja)(s.value),
            "data-orientation": o(n).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && o(n).isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": l.value ? `${(p = l.value) == null ? void 0 : p.width}px` : void 0,
              "--radix-navigation-menu-viewport-height": l.value ? `${(c = l.value) == null ? void 0 : c.height}px` : void 0
            },
            onPointerenter: d[0] || (d[0] = (f) => o(n).onContentEnter(o(n).modelValue.value)),
            onPointerleave: d[1] || (d[1] = (f) => o(ss)(() => o(n).onContentLeave())(f))
          }), {
            default: h(() => [
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
function rs(a) {
  const { disabled: t } = a, e = T(), n = ua(), l = () => window.clearTimeout(e.value), s = (f) => {
    l(), !t.value && (n.trigger(), e.value = window.setTimeout(() => {
      s(60);
    }, f));
  }, r = () => {
    s(400);
  }, i = () => {
    l();
  }, u = T(!1), d = I(() => Be(a.target) || window), p = (f) => {
    f.button !== 0 || u.value || (f.preventDefault(), u.value = !0, r());
  }, c = () => {
    u.value = !1, i();
  };
  return je(d, "pointerdown", p), window && (je(window, "pointerup", c), je(window, "pointercancel", c)), {
    isPressed: u,
    onTrigger: n.on
  };
}
function jo(a, t = T({})) {
  return gl(() => new Pr(a.value, t.value));
}
function Pc(a, t = T({})) {
  return gl(() => new Dr(a.value, t.value));
}
function Uo(a, t, e) {
  let n = a === "+" ? t + e : t - e;
  if (t % 1 !== 0 || e % 1 !== 0) {
    const l = t.toString().split("."), s = e.toString().split("."), r = l[1] && l[1].length || 0, i = s[1] && s[1].length || 0, u = 10 ** Math.max(r, i);
    t = Math.round(t * u), e = Math.round(e * u), n = a === "+" ? t + e : t - e, n /= u;
  }
  return n;
}
const Dc = ["value", "name", "disabled", "required"], [xo, $c] = Q("NumberFieldRoot"), sy = /* @__PURE__ */ _({
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
    const e = a, n = t, { disabled: l, min: s, max: r, step: i, locale: u, formatOptions: d, id: p } = ne(e), c = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), { primitiveElement: f, currentElement: m } = Ae(), g = Qe(m), v = T(), S = I(
      () => Y(c.value) === s.value || (s.value && !isNaN(c.value) ? Uo("-", c.value, i.value) < s.value : !1)
    ), x = I(
      () => Y(c.value) === r.value || (r.value && !isNaN(c.value) ? Uo("+", c.value, i.value) > r.value : !1)
    );
    function D(N, L = 1) {
      var z;
      const W = B.parse(((z = v.value) == null ? void 0 : z.value) ?? "");
      e.disabled || (isNaN(W) ? c.value = s.value ?? 0 : N === "increase" ? c.value = Y(W + (i.value ?? 1) * L) : c.value = Y(W - (i.value ?? 1) * L));
    }
    function y(N = 1) {
      D("increase", N);
    }
    function E(N = 1) {
      D("decrease", N);
    }
    function P(N) {
      N === "min" && s.value !== void 0 ? c.value = Y(s.value) : N === "max" && r.value !== void 0 && (c.value = Y(r.value));
    }
    const $ = jo(u, d), B = Pc(u, d), O = I(() => $.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), F = jo(u, d), k = I(() => isNaN(c.value) ? "" : F.format(c.value));
    function V(N) {
      return B.isValidPartialNumber(N, s.value, r.value);
    }
    function H(N) {
      v.value && (v.value.value = N);
    }
    function Y(N) {
      let L;
      return i.value === void 0 || isNaN(i.value) ? L = Kt(N, s.value, r.value) : L = $r(N, s.value, r.value, i.value), L = B.parse($.format(L)), L;
    }
    function J(N) {
      const L = B.parse(N);
      return c.value = Y(L), N.length ? (isNaN(L), H(k.value)) : H(N);
    }
    return $c({
      modelValue: c,
      handleDecrease: E,
      handleIncrease: y,
      handleMinMaxValue: P,
      inputMode: O,
      inputEl: v,
      onInputElement: (N) => v.value = N,
      textValue: k,
      validate: V,
      applyInputValue: J,
      disabled: l,
      max: r,
      min: s,
      isDecreaseDisabled: S,
      isIncreaseDisabled: x,
      id: p
    }), (N, L) => (b(), ue(we, null, [
      q(o(A), M(N.$attrs, {
        ref_key: "primitiveElement",
        ref: f,
        role: "group",
        as: N.as,
        "as-child": N.asChild
      }), {
        default: h(() => [
          C(N.$slots, "default", {
            modelValue: o(c),
            textValue: k.value
          })
        ]),
        _: 3
      }, 16, ["as", "as-child"]),
      o(g) ? (b(), ue("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o(c),
        name: e.name,
        disabled: e.disabled,
        required: e.required,
        style: Ce({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, Dc)) : pe("", !0)
    ], 64));
  }
}), ry = /* @__PURE__ */ _({
  __name: "NumberFieldInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: n } = Ae(), l = xo();
    function s(r) {
      r.target === document.activeElement && (Math.abs(r.deltaY) <= Math.abs(r.deltaX) || (r.preventDefault(), r.deltaY > 0 ? l.handleIncrease() : r.deltaY < 0 && l.handleDecrease()));
    }
    return oe(() => {
      l.onInputElement(n.value);
    }), (r, i) => (b(), w(o(A), M(t, {
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
        let p = d.value.slice(0, d.selectionStart ?? void 0) + (u.data ?? "") + d.value.slice(d.selectionEnd ?? void 0);
        o(l).validate(p) || u.preventDefault();
      }),
      onBlur: i[7] || (i[7] = (u) => {
        var d;
        return o(l).applyInputValue((d = u.target) == null ? void 0 : d.value);
      })
    }), {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "value", "inputmode", "disabled", "data-disabled", "aria-valuenow", "aria-valuemin", "aria-valuemax"]));
  }
}), iy = /* @__PURE__ */ _({
  __name: "NumberFieldIncrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = xo(), n = I(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isIncreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Ae(), { isPressed: r, onTrigger: i } = rs({ target: s, disabled: n });
    return i(() => {
      e.handleIncrease();
    }), (u, d) => (b(), w(o(A), M(t, {
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
      default: h(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
}), uy = /* @__PURE__ */ _({
  __name: "NumberFieldDecrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = xo(), n = I(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isDecreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Ae(), { isPressed: r, onTrigger: i } = rs({ target: s, disabled: n });
    return i(() => {
      e.handleDecrease();
    }), (u, d) => (b(), w(o(A), M(t, {
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
      default: h(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
}), [ta, Ic] = Q("PaginationRoot"), dy = /* @__PURE__ */ _({
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
    return Ic({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: l,
      disabled: s,
      showEdges: r
    }), (d, p) => (b(), w(o(A), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: h(() => [
        C(d.$slots, "default", {
          page: o(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), cy = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(A), M(t, { "data-type": "ellipsis" }), {
      default: h(() => [
        C(e.$slots, "default", {}, () => [
          ve("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), py = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = ta();
    return R(), (n, l) => (b(), w(o(A), M(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === 1 || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(1))
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), fy = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = ta();
    return R(), (n, l) => (b(), w(o(A), M(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === o(e).pageCount.value || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(o(e).pageCount.value))
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve("Last page")
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
function Bc(a) {
  return a.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const $a = "ellipsis";
function Tc(a, t, e, n) {
  const s = t, r = Math.max(a - e, 1), i = Math.min(a + e, s);
  if (n) {
    const d = Math.min(2 * e + 5, t) - 2, p = r > 1 + 2 && Math.abs(s - d - 1 + 1) > 2 && Math.abs(r - 1) > 2, c = i < s - 2 && Math.abs(s - d) > 2 && Math.abs(s - i) > 2;
    if (!p && c)
      return [...rt(1, d), $a, s];
    if (p && !c) {
      const m = rt(s - d + 1, s);
      return [1, $a, ...m];
    }
    if (p && c) {
      const m = rt(r, i);
      return [1, $a, ...m, $a, s];
    }
    return rt(1, s);
  } else {
    const u = e * 2 + 1;
    return t < u ? rt(1, s) : a <= e + 1 ? rt(1, u) : t - a <= e ? rt(t - u + 1, s) : rt(r, i);
  }
}
const vy = /* @__PURE__ */ _({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = ta(), n = I(() => Bc(
      Tc(
        e.page.value,
        e.pageCount.value,
        e.siblingCount.value,
        e.showEdges.value
      )
    ));
    return (l, s) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(l.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), my = /* @__PURE__ */ _({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = ta(), n = I(() => e.page.value === t.value);
    return (l, s) => (b(), w(o(A), M(t, {
      "data-type": "page",
      "aria-label": `Page ${l.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: o(e).disabled.value,
      type: l.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (r) => o(e).onPageChange(l.value))
    }), {
      default: h(() => [
        C(l.$slots, "default", {}, () => [
          ve($e(l.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), hy = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = ta();
    return (n, l) => (b(), w(o(A), M(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === o(e).pageCount.value || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(o(e).page.value + 1))
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), yy = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = ta();
    return (n, l) => {
      var s;
      return b(), w(o(A), M(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: o(e).page.value === 1 || ((s = o(e).disabled) == null ? void 0 : s.value),
        onClick: l[0] || (l[0] = (r) => o(e).onPageChange(o(e).page.value - 1))
      }), {
        default: h(() => [
          C(n.$slots, "default", {}, () => [
            ve("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), Rc = ["id", "value", "name", "disabled", "required"], [Ac, kc] = Q("PinInputRoot"), gy = /* @__PURE__ */ _({
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
    const e = a, n = t, { mask: l, otp: s, placeholder: r, type: i, disabled: u, dir: d } = ne(e), { forwardRef: p } = R(), c = _e(d), f = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? [],
      passive: e.modelValue === void 0
    }), m = T(/* @__PURE__ */ new Set());
    function g(S) {
      m.value.add(S);
    }
    const v = I(() => f.value.filter((x) => !!x).length === m.value.size);
    return te(f, () => {
      v.value && n("complete", f.value);
    }, { deep: !0 }), kc({
      modelValue: f,
      mask: l,
      otp: s,
      placeholder: r,
      type: i,
      dir: c,
      disabled: u,
      isCompleted: v,
      inputElements: m,
      onInputElementChange: g
    }), (S, x) => (b(), ue(we, null, [
      q(o(A), M(S.$attrs, {
        ref: o(p),
        dir: o(c),
        "data-complete": v.value ? "" : void 0,
        "data-disabled": o(u) ? "" : void 0
      }), {
        default: h(() => [
          C(S.$slots, "default", { modelValue: o(f) })
        ]),
        _: 3
      }, 16, ["dir", "data-complete", "data-disabled"]),
      Ue("input", {
        id: S.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o(f).join(""),
        name: S.name,
        disabled: o(u),
        required: S.required,
        style: Ce({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }),
        onFocus: x[0] || (x[0] = (D) => {
          var y, E;
          return (E = (y = Array.from(m.value)) == null ? void 0 : y[0]) == null ? void 0 : E.focus();
        })
      }, null, 44, Rc)
    ], 64));
  }
}), Oc = ["autocomplete", "type", "inputmode", "pattern", "placeholder", "value", "disabled", "data-disabled", "data-complete", "aria-label"], by = /* @__PURE__ */ _({
  __name: "PinInputInput",
  props: {
    index: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = Ac(), n = I(() => Array.from(e.inputElements.value)), l = I(() => t.disabled || e.disabled.value), s = I(() => e.otp.value), r = I(() => e.type.value === "number"), i = I(() => e.mask.value), u = T();
    function d(y) {
      var $;
      const E = y.target;
      if (((($ = y.data) == null ? void 0 : $.length) ?? 0) > 1) {
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
    function p(y) {
      $t(y, document.activeElement, void 0, {
        itemsArray: n.value,
        focus: !0,
        loop: !1,
        arrowKeyOptions: "horizontal",
        dir: e.dir.value
      });
    }
    function c(y) {
      if (y.preventDefault(), y.target.value)
        D(t.index, "");
      else {
        const $ = n.value[t.index - 1];
        $ && ($.focus(), D(t.index - 1, ""));
      }
    }
    function f(y) {
      y.key === "Delete" && (y.preventDefault(), D(t.index, ""));
    }
    function m(y) {
      const E = y.target;
      E.setSelectionRange(1, 1), E.value || (E.placeholder = "");
    }
    function g(y) {
      const E = y.target;
      se(() => {
        E.value || (E.placeholder = e.placeholder.value);
      });
    }
    function v(y) {
      y.preventDefault();
      const E = y.clipboardData;
      if (!E)
        return;
      const P = E.getData("text");
      S(P);
    }
    function S(y) {
      var B;
      const E = [...e.modelValue.value], P = y.length >= n.value.length ? 0 : t.index, $ = Math.min(P + y.length, n.value.length);
      for (let O = P; O < $; O++) {
        const F = n.value[O], k = y[O - P];
        r.value && !/^\d*$/.test(k) || (E[O] = k, F.focus());
      }
      e.modelValue.value = E, (B = n.value[$]) == null || B.focus();
    }
    function x(y) {
      let E = y.length - 1;
      for (; E >= 0 && y[E] === ""; )
        y.pop(), E--;
      return y;
    }
    function D(y, E) {
      const P = [...e.modelValue.value];
      P[y] = E, e.modelValue.value = x(P);
    }
    return oe(() => {
      e.onInputElementChange(u.value);
    }), Te(() => {
      var y;
      (y = e.inputElements) == null || y.value.delete(u.value);
    }), (y, E) => (b(), ue("input", {
      ref_key: "inputRef",
      ref: u,
      autocapitalize: "none",
      autocomplete: s.value ? "one-time-code" : "false",
      type: i.value ? "password" : "text",
      inputmode: r.value ? "numeric" : "text",
      pattern: r.value ? "[0-9]*" : void 0,
      placeholder: o(e).placeholder.value,
      value: o(e).modelValue.value.at(y.index),
      disabled: l.value,
      "data-disabled": l.value ? "" : void 0,
      "data-complete": o(e).isCompleted.value ? "" : void 0,
      "aria-label": `pin input ${y.index + 1} of ${n.value.length}`,
      onInput: E[0] || (E[0] = (P) => d(P)),
      onKeydown: [
        re(p, ["left", "right", "up", "down", "home", "end"]),
        re(c, ["backspace"]),
        re(f, ["delete"])
      ],
      onFocus: m,
      onBlur: g,
      onPaste: v
    }, null, 40, Oc));
  }
}), [Mt, Mc] = Q("PopoverRoot"), is = /* @__PURE__ */ _({
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
    return Mc({
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
    }), (u, d) => (b(), w(o(Bt), null, {
      default: h(() => [
        C(u.$slots, "default", { open: o(s) })
      ]),
      _: 3
    }));
  }
}), us = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Mt(), { forwardRef: n, currentElement: l } = R();
    return oe(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (b(), w(Ge(o(e).hasCustomAnchor.value ? o(A) : o(Tt)), { "as-child": "" }, {
      default: h(() => [
        q(o(A), {
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
            C(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), ds = /* @__PURE__ */ _({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ht), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cs = /* @__PURE__ */ _({
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
    const e = a, n = t, l = It(e), { forwardRef: s } = R(), r = Mt();
    return Wn(), (i, u) => (b(), w(o(Ua), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: h(() => [
        q(o(yt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => o(r).onOpenChange(!1))
        }, {
          default: h(() => [
            q(o(Pt), M(o(l), {
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
                C(i.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Vc = /* @__PURE__ */ _({
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
    const e = a, n = t, l = Mt(), s = T(!1);
    ya(!0);
    const r = xe(e, n), { forwardRef: i, currentElement: u } = R();
    return ga(u), (d, p) => (b(), w(cs, M(o(r), {
      ref: o(i),
      "trap-focus": o(l).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: p[0] || (p[0] = ie(
        (c) => {
          var f;
          n("closeAutoFocus", c), s.value || (f = o(l).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: p[1] || (p[1] = (c) => {
        n("pointerDownOutside", c);
        const f = c.detail.originalEvent, m = f.button === 0 && f.ctrlKey === !0, g = f.button === 2 || m;
        s.value = g;
      }),
      onFocusOutside: p[2] || (p[2] = ie(() => {
      }, ["prevent"]))
    }), {
      default: h(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Fc = /* @__PURE__ */ _({
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
    const e = a, n = t, l = Mt(), s = T(!1), r = T(!1), i = xe(e, n);
    return (u, d) => (b(), w(cs, M(o(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        n("closeAutoFocus", p), p.defaultPrevented || (s.value || (c = o(l).triggerElement.value) == null || c.focus(), p.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (p) => {
        var m;
        n("interactOutside", p), p.defaultPrevented || (s.value = !0, p.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const c = p.target;
        ((m = o(l).triggerElement.value) == null ? void 0 : m.contains(c)) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && r.value && p.preventDefault();
      })
    }), {
      default: h(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ps = /* @__PURE__ */ _({
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
    const e = a, n = t, l = Mt(), s = xe(e, n), { forwardRef: r } = R();
    return l.contentId || (l.contentId = me(void 0, "radix-vue-popover-content")), (i, u) => (b(), w(o(De), {
      present: i.forceMount || o(l).open.value
    }, {
      default: h(() => [
        o(l).modal.value ? (b(), w(Vc, M({ key: 0 }, o(s), { ref: o(r) }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), w(Fc, M({ key: 1 }, o(s), { ref: o(r) }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), fs = /* @__PURE__ */ _({
  __name: "PopoverArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(Jt), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vs = /* @__PURE__ */ _({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Mt();
    return (n, l) => (b(), w(o(A), {
      type: n.as === "button" ? "button" : void 0,
      as: n.as,
      "as-child": t.asChild,
      onClick: l[0] || (l[0] = (s) => o(e).onOpenChange(!1))
    }, {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child"]));
  }
}), ms = /* @__PURE__ */ _({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = Mt();
    return ul(() => {
      e.hasCustomAnchor.value = !0;
    }), Te(() => {
      e.hasCustomAnchor.value = !1;
    }), (n, l) => (b(), w(o(Tt), K(j(t)), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ca = 100, [Lc, Nc] = Q("ProgressRoot"), So = (a) => typeof a == "number";
function zc(a, t) {
  return Nt(a) || So(a) && !Number.isNaN(a) && a <= t && a >= 0 ? a : (console.error(`Invalid prop \`value\` of value \`${a}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ca} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Kc(a) {
  return So(a) && !Number.isNaN(a) && a > 0 ? a : (console.error(
    `Invalid prop \`max\` of value \`${a}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ca}\`.`
  ), ca);
}
const Cy = /* @__PURE__ */ _({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: ca },
    getValueLabel: { type: Function, default: (a, t) => `${Math.round(a / t * ca)}%` },
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
        const u = zc(i, e.max);
        u !== i && (await se(), l.value = u);
      },
      { immediate: !0 }
    ), te(
      () => e.max,
      (i) => {
        const u = Kc(e.max);
        u !== i && (s.value = u);
      },
      { immediate: !0 }
    );
    const r = I(() => Nt(l.value) ? "indeterminate" : l.value === s.value ? "complete" : "loading");
    return Nc({
      modelValue: l,
      max: s,
      progressState: r
    }), (i, u) => (b(), w(o(A), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": o(s),
      "aria-valuemin": 0,
      "aria-valuenow": So(o(l)) ? o(l) : void 0,
      "aria-valuetext": i.getValueLabel(o(l), o(s)),
      "aria-label": i.getValueLabel(o(l), o(s)),
      role: "progressbar",
      "data-state": r.value,
      "data-value": o(l) ?? void 0,
      "data-max": o(s)
    }, {
      default: h(() => [
        C(i.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), _y = /* @__PURE__ */ _({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Lc();
    return R(), (n, l) => {
      var s;
      return b(), w(o(A), M(t, {
        "data-state": o(e).progressState.value,
        "data-value": ((s = o(e).modelValue) == null ? void 0 : s.value) ?? void 0,
        "data-max": o(e).max.value
      }), {
        default: h(() => [
          C(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), [Hc, Wc] = Q("RadioGroupRoot"), wy = /* @__PURE__ */ _({
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
    }), { disabled: r, loop: i, orientation: u, name: d, required: p, dir: c } = ne(e), f = _e(c);
    return Wc({
      modelValue: s,
      changeModelValue: (m) => {
        s.value = m;
      },
      disabled: r,
      loop: i,
      orientation: u,
      name: d == null ? void 0 : d.value,
      required: p
    }), (m, g) => (b(), w(o(At), {
      "as-child": "",
      orientation: o(u),
      dir: o(f),
      loop: o(i)
    }, {
      default: h(() => [
        q(o(A), {
          ref: o(l),
          role: "radiogroup",
          "data-disabled": o(r) ? "" : void 0,
          "as-child": m.asChild,
          as: m.as,
          required: o(p),
          "aria-orientation": o(u),
          "aria-required": o(p),
          dir: o(f),
          name: o(d)
        }, {
          default: h(() => [
            C(m.$slots, "default", { modelValue: o(s) })
          ]),
          _: 3
        }, 8, ["data-disabled", "as-child", "as", "required", "aria-orientation", "aria-required", "dir", "name"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), jc = ["value", "checked", "name", "disabled", "required"], Uc = /* @__PURE__ */ _({
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
      var c;
      return e.id && i.value ? ((c = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : c.innerText) ?? e.value : void 0;
    });
    function p(c) {
      l.value = !0, u.value && c.stopPropagation();
    }
    return (c, f) => (b(), w(o(A), M(c.$attrs, {
      id: c.id,
      ref: o(r),
      role: "radio",
      type: c.as === "button" ? "button" : void 0,
      as: c.as,
      "aria-checked": o(l),
      "aria-label": d.value,
      "as-child": c.asChild,
      disabled: c.disabled ? "" : void 0,
      "data-state": o(l) ? "checked" : "unchecked",
      "data-disabled": c.disabled ? "" : void 0,
      value: o(s),
      required: c.required,
      name: c.name,
      onClick: ie(p, ["stop"])
    }), {
      default: h(() => [
        C(c.$slots, "default", { checked: o(l) }),
        o(u) ? (b(), ue("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "",
          value: o(s),
          checked: !!o(l),
          name: c.name,
          disabled: c.disabled,
          required: c.required,
          style: Ce({
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          })
        }, null, 12, jc)) : pe("", !0)
      ]),
      _: 3
    }, 16, ["id", "type", "as", "aria-checked", "aria-label", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]));
  }
}), [Gc, qc] = Q("RadioGroupItem"), xy = /* @__PURE__ */ _({
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
    const t = a, { forwardRef: e, currentElement: n } = R(), l = Hc(), s = I(() => l.disabled.value || t.disabled), r = I(() => l.required.value || t.required), i = I(() => {
      var c;
      return ((c = l.modelValue) == null ? void 0 : c.value) === t.value;
    });
    qc({ disabled: s, checked: i });
    const u = T(!1), d = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    je("keydown", (c) => {
      d.includes(c.key) && (u.value = !0);
    }), je("keyup", () => {
      u.value = !1;
    });
    function p() {
      setTimeout(() => {
        var c;
        u.value && ((c = n.value) == null || c.click());
      }, 0);
    }
    return (c, f) => (b(), w(o(kt), {
      checked: i.value,
      disabled: s.value,
      "as-child": "",
      focusable: !s.value,
      active: i.value
    }, {
      default: h(() => [
        q(Uc, M({ ...c.$attrs, ...t }, {
          ref: o(e),
          checked: i.value,
          required: r.value,
          disabled: s.value,
          "onUpdate:checked": f[0] || (f[0] = (m) => o(l).changeModelValue(c.value)),
          onKeydown: f[1] || (f[1] = re(ie(() => {
          }, ["prevent"]), ["enter"])),
          onFocus: p
        }), {
          default: h(() => [
            C(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["checked", "required", "disabled"])
      ]),
      _: 3
    }, 8, ["checked", "disabled", "focusable", "active"]));
  }
}), Sy = /* @__PURE__ */ _({
  __name: "RadioGroupIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t } = R(), e = Gc();
    return (n, l) => (b(), w(o(De), {
      present: n.forceMount || o(e).checked.value
    }, {
      default: h(() => [
        q(o(A), M({
          ref: o(t),
          "data-state": o(e).checked.value ? "checked" : "unchecked",
          "data-disabled": o(e).disabled.value ? "" : void 0,
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: h(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function Yc(a) {
  const t = I(() => a.start.value ? !!a.isDateDisabled(a.start.value) : !1), e = I(() => a.end.value ? !!a.isDateDisabled(a.end.value) : !1), n = I(
    () => t.value || e.value ? !1 : !!(a.start.value && a.end.value && Oe(a.end.value, a.start.value))
  ), l = (u) => a.start.value ? ke(a.start.value, u) : !1, s = (u) => a.end.value ? ke(a.end.value, u) : !1, r = (u) => a.start.value && ke(a.start.value, u) || a.end.value && ke(a.end.value, u) ? !0 : a.end.value && a.start.value ? hr(u, a.start.value, a.end.value) : !1, i = I(() => {
    if (a.start.value && a.end.value || !a.start.value || !a.focusedValue.value)
      return null;
    const u = Oe(a.start.value, a.focusedValue.value), d = u ? a.start.value : a.focusedValue.value, p = u ? a.focusedValue.value : a.start.value;
    return ke(d.add({ days: 1 }), p) ? {
      start: d,
      end: p
    } : fl(d, p, a.isDateUnavailable, a.isDateDisabled) ? {
      start: d,
      end: p
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: r,
    highlightedRange: i,
    isSelectionStart: l,
    isSelectionEnd: s
  };
}
const Xc = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Zc = {
  role: "heading",
  "aria-level": "2"
}, [aa, Jc] = Q("RangeCalendarRoot"), Qc = /* @__PURE__ */ _({
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
      fixedWeeks: p,
      numberOfMonths: c,
      preventDeselect: f,
      isDateUnavailable: m,
      isDateDisabled: g,
      calendarLabel: v,
      maxValue: S,
      minValue: x,
      locale: D,
      dir: y,
      nextPage: E,
      prevPage: P
    } = ne(e), { primitiveElement: $, currentElement: B } = Ae(), O = _e(y), F = T(), k = T(), V = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), H = jt({
      defaultPlaceholder: e.placeholder,
      defaultValue: V.value.start
    }), Y = T(V.value.start), J = T(V.value.end), N = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? H.copy(),
      passive: e.placeholder === void 0
    });
    function L(be) {
      N.value = be.copy();
    }
    const {
      fullCalendarLabel: W,
      headingValue: z,
      isDateDisabled: Z,
      isDateUnavailable: U,
      isNextButtonDisabled: X,
      isPrevButtonDisabled: ee,
      grid: fe,
      weekdays: G,
      isOutsideVisibleView: le,
      nextPage: he,
      prevPage: Se,
      formatter: ge
    } = Nl({
      locale: D,
      placeholder: N,
      weekStartsOn: u,
      fixedWeeks: p,
      numberOfMonths: c,
      minValue: x,
      maxValue: S,
      disabled: l,
      weekdayFormat: d,
      pagedNavigation: i,
      isDateDisabled: g.value,
      isDateUnavailable: m.value,
      calendarLabel: v,
      nextPage: E,
      prevPage: P
    }), {
      isInvalid: Ie,
      isSelected: de,
      highlightedRange: Ee,
      isSelectionStart: Ve,
      isSelectionEnd: Ke
    } = Yc({
      start: Y,
      end: J,
      isDateDisabled: Z,
      isDateUnavailable: U,
      focusedValue: k
    });
    return te(V, (be) => {
      be.start && be.end && (Y.value && !Pe(Y.value, be.start) && (Y.value = be.start.copy()), J.value && !Pe(J.value, be.end) && (J.value = be.end.copy()));
    }), te(Y, (be) => {
      be && !Pe(be, N.value) && L(be), n("update:startValue", be);
    }), te([Y, J], ([be, ot]) => {
      const He = V.value;
      if (!(He && He.start && He.end && be && ot && Pe(He.start, be) && Pe(He.end, ot)))
        if (be && ot) {
          if (He.start && He.end && Pe(He.start, be) && Pe(He.end, ot))
            return;
          Oe(ot, be) ? V.value = {
            start: ot.copy(),
            end: be.copy()
          } : V.value = {
            start: be.copy(),
            end: ot.copy()
          };
        } else
          He.start && He.end && (V.value = {
            start: void 0,
            end: void 0
          });
    }), Jc({
      isDateUnavailable: U,
      startValue: Y,
      endValue: J,
      formatter: ge,
      modelValue: V,
      placeholder: N,
      disabled: l,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: p,
      numberOfMonths: c,
      readonly: s,
      preventDeselect: f,
      fullCalendarLabel: W,
      headingValue: z,
      isInvalid: Ie,
      isDateDisabled: Z,
      highlightedRange: Ee,
      focusedValue: k,
      lastPressedDateValue: F,
      isSelected: de,
      isSelectionEnd: Ke,
      isSelectionStart: Ve,
      isNextButtonDisabled: X,
      isPrevButtonDisabled: ee,
      isOutsideVisibleView: le,
      nextPage: he,
      prevPage: Se,
      parentElement: B,
      onPlaceholderChange: L,
      locale: D,
      dir: O
    }), oe(() => {
      r.value && yl(B.value);
    }), (be, ot) => (b(), w(o(A), {
      ref_key: "primitiveElement",
      ref: $,
      as: be.as,
      "as-child": be.asChild,
      role: "application",
      "aria-label": o(W),
      "data-readonly": o(s) ? "" : void 0,
      "data-disabled": o(l) ? "" : void 0,
      "data-invalid": o(Ie) ? "" : void 0,
      dir: o(O)
    }, {
      default: h(() => [
        Ue("div", Xc, [
          Ue("div", Zc, $e(o(W)), 1)
        ]),
        C(be.$slots, "default", {
          date: o(N),
          grid: o(fe),
          weekDays: o(G),
          weekStartsOn: o(u),
          locale: o(D),
          fixedWeeks: o(p)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), ep = /* @__PURE__ */ _({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tp = /* @__PURE__ */ _({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), w(o(A), M(t, {
      "data-disabled": o(e).disabled.value ? "" : void 0
    }), {
      default: h(() => [
        C(n.$slots, "default", {
          headingValue: o(e).headingValue.value
        }, () => [
          ve($e(o(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), ap = /* @__PURE__ */ _({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), w(o(A), M(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o(e).readonly ? !0 : void 0,
      "aria-disabled": o(e).disabled ? !0 : void 0,
      "data-readonly": o(e).readonly ? "" : void 0,
      "data-disabled": o(e).disabled ? "" : void 0
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), np = /* @__PURE__ */ _({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a) {
    const t = aa();
    return (e, n) => {
      var l, s;
      return b(), w(o(A), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": o(t).isSelected(e.date) ? !0 : void 0,
        "aria-disabled": o(t).isDateDisabled(e.date) || ((s = (l = o(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": o(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: h(() => [
          C(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), op = /* @__PURE__ */ _({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lp = /* @__PURE__ */ _({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), w(o(A), M(t, {
      "aria-label": "Next page",
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": o(e).isNextButtonDisabled(t.step, t.nextPage) || void 0,
      "data-disabled": o(e).isNextButtonDisabled(t.step, t.nextPage) || void 0,
      disabled: o(e).isNextButtonDisabled(t.step, t.nextPage),
      onClick: l[0] || (l[0] = (s) => o(e).nextPage(t.step, t.nextPage))
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), sp = /* @__PURE__ */ _({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), w(o(A), M(t, {
      "aria-label": "Previous page",
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": o(e).isPrevButtonDisabled(t.step, t.prevPage) || void 0,
      "data-disabled": o(e).isPrevButtonDisabled(t.step, t.prevPage) || void 0,
      disabled: o(e).isPrevButtonDisabled(t.step, t.prevPage),
      onClick: l[0] || (l[0] = (s) => o(e).prevPage(t.step, t.prevPage))
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), rp = /* @__PURE__ */ _({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), M(t, { "aria-hidden": "true" }), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ip = /* @__PURE__ */ _({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), up = /* @__PURE__ */ _({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dp = /* @__PURE__ */ _({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = aa(), n = et(), { primitiveElement: l, currentElement: s } = Ae(), r = I(() => e.formatter.custom(Le(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = I(() => e.isDateDisabled(t.day)), u = I(() => {
      var B;
      return (B = e.isDateUnavailable) == null ? void 0 : B.call(e, t.day);
    }), d = I(() => e.isSelected(t.day)), p = I(() => e.isSelectionStart(t.day)), c = I(() => e.isSelectionEnd(t.day)), f = I(() => e.highlightedRange.value ? yr(t.day, e.highlightedRange.value.start, e.highlightedRange.value.end) : !1), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", g = I(() => dl(t.day, Vn())), v = I(() => !cl(t.day, t.month)), S = I(
      () => e.isOutsideVisibleView(t.day)
    ), x = I(() => t.day.day.toLocaleString(e.locale.value)), D = I(() => ke(t.day, e.placeholder.value));
    function y(B) {
      var O;
      if (!e.readonly.value && !(e.isDateDisabled(B) || (O = e.isDateUnavailable) != null && O.call(e, B))) {
        if (e.lastPressedDateValue.value = B.copy(), e.startValue.value && e.highlightedRange.value === null) {
          if (ke(B, e.startValue.value) && !e.preventDeselect.value && !e.endValue.value) {
            e.startValue.value = void 0, e.onPlaceholderChange(B);
            return;
          } else if (!e.endValue.value) {
            e.lastPressedDateValue.value && ke(e.lastPressedDateValue.value, B) && (e.startValue.value = B.copy());
            return;
          }
        }
        if (e.startValue.value && ke(e.startValue.value, B) && !e.preventDeselect.value && !e.endValue.value) {
          e.startValue.value = void 0, e.onPlaceholderChange(B);
          return;
        }
        e.startValue.value ? e.endValue.value ? e.endValue.value && e.startValue.value && (e.endValue.value = void 0, e.startValue.value = B.copy()) : e.endValue.value = B.copy() : e.startValue.value = B.copy();
      }
    }
    function E() {
      y(t.day);
    }
    function P() {
      var B;
      e.isDateDisabled(t.day) || (B = e.isDateUnavailable) != null && B.call(e, t.day) || (e.focusedValue.value = t.day.copy());
    }
    function $(B) {
      B.preventDefault(), B.stopPropagation();
      const O = e.parentElement.value, F = O ? Array.from(O.querySelectorAll(m)) : [];
      let V = F.indexOf(s.value);
      const H = 7, Y = e.dir.value === "rtl" ? -1 : 1;
      switch (B.code) {
        case n.ARROW_RIGHT:
          V += Y;
          break;
        case n.ARROW_LEFT:
          V -= Y;
          break;
        case n.ARROW_UP:
          V -= H;
          break;
        case n.ARROW_DOWN:
          V += H;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          y(t.day);
          return;
        default:
          return;
      }
      if (V >= 0 && V < F.length) {
        F[V].focus();
        return;
      }
      if (V < 0) {
        if (e.isPrevButtonDisabled("month"))
          return;
        e.prevPage(), se(() => {
          const J = O ? Array.from(O.querySelectorAll(m)) : [];
          J[J.length - Math.abs(V)].focus();
        });
        return;
      }
      if (V >= F.length) {
        if (e.isNextButtonDisabled("month"))
          return;
        e.nextPage(), se(() => {
          (O ? Array.from(O.querySelectorAll(m)) : [])[V - F.length].focus();
        });
      }
    }
    return (B, O) => (b(), w(o(A), M({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": d.value ? !0 : void 0,
      "aria-disabled": v.value || i.value || u.value ? !0 : void 0,
      "data-highlighted": f.value ? "" : void 0,
      "data-selection-start": p.value ? !0 : void 0,
      "data-selection-end": c.value ? !0 : void 0,
      "data-selected": d.value ? !0 : void 0,
      "data-outside-visible-view": S.value ? "" : void 0,
      "data-value": B.day.toString(),
      "data-disabled": i.value || v.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": g.value ? "" : void 0,
      "data-outside-month": v.value ? "" : void 0,
      "data-focused": D.value ? "" : void 0,
      tabindex: D.value ? 0 : v.value || i.value ? void 0 : -1,
      onClick: E,
      onFocusin: P,
      onMouseenter: P,
      onKeydown: re($, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: h(() => [
        C(B.$slots, "default", { dayValue: x.value }, () => [
          ve($e(x.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), [ze, cp] = Q("ScrollAreaRoot"), Ey = /* @__PURE__ */ _({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: {},
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = R(), l = T(0), s = T(0), r = T(), i = T(), u = T(), d = T(), p = T(!1), c = T(!1), { type: f, dir: m, scrollHideDelay: g } = ne(t), v = _e(m);
    return cp({
      type: f,
      dir: v,
      scrollHideDelay: g,
      scrollArea: n,
      viewport: r,
      onViewportChange: (S) => {
        r.value = S || void 0;
      },
      content: i,
      onContentChange: (S) => {
        i.value = S;
      },
      scrollbarX: u,
      scrollbarXEnabled: p,
      scrollbarY: d,
      scrollbarYEnabled: c,
      onScrollbarXChange: (S) => {
        u.value = S || void 0;
      },
      onScrollbarYChange: (S) => {
        d.value = S || void 0;
      },
      onScrollbarXEnabledChange: (S) => {
        p.value = S;
      },
      onScrollbarYEnabledChange: (S) => {
        c.value = S;
      },
      onCornerWidthChange: (S) => {
        l.value = S;
      },
      onCornerHeightChange: (S) => {
        s.value = S;
      }
    }), (S, x) => (b(), w(o(A), {
      ref: o(e),
      "as-child": t.asChild,
      as: S.as,
      dir: o(v),
      style: Ce({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        "--radix-scroll-area-corner-width": `${l.value}px`,
        "--radix-scroll-area-corner-height": `${s.value}px`
      })
    }, {
      default: h(() => [
        C(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
}), Py = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ScrollAreaViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, n = ze(), l = T();
    oe(() => {
      n.onViewportChange(l.value), n.onContentChange(r.value);
    }), t({
      viewportElement: l
    });
    const { forwardRef: s, currentElement: r } = R();
    return (i, u) => (b(), ue(we, null, [
      Ue("div", M({
        ref_key: "viewportElement",
        ref: l,
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
          overflowX: o(n).scrollbarXEnabled.value ? "scroll" : "hidden",
          overflowY: o(n).scrollbarYEnabled.value ? "scroll" : "hidden"
        }
      }, i.$attrs, { tabindex: 0 }), [
        q(o(A), {
          ref: o(s),
          style: { minWidth: "100%", display: "table" },
          "as-child": e.asChild,
          as: i.as
        }, {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ], 16),
      q(o(A), {
        as: "style",
        nonce: i.nonce
      }, {
        default: h(() => [
          ve(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
function hs(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + n * (e - a[0]);
  };
}
function Qa(a) {
  const t = ys(a.viewport, a.content), e = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, n = (a.scrollbar.size - e) * t;
  return Math.max(n, 18);
}
function ys(a, t) {
  const e = a / t;
  return Number.isNaN(e) ? 0 : e;
}
function pp(a, t = () => {
}) {
  let e = { left: a.scrollLeft, top: a.scrollTop }, n = 0;
  return function l() {
    const s = { left: a.scrollLeft, top: a.scrollTop }, r = e.left !== s.left, i = e.top !== s.top;
    (r || i) && t(), e = s, n = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(n);
}
function Go(a, t, e = "ltr") {
  const n = Qa(t), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - l, r = t.content - t.viewport, i = s - n, u = e === "ltr" ? [0, r] : [r * -1, 0], d = Kt(
    a,
    u[0],
    u[1]
  );
  return hs([0, r], [0, i])(d);
}
function Ia(a) {
  return a ? Number.parseInt(a, 10) : 0;
}
function fp(a, t, e, n = "ltr") {
  const l = Qa(e), s = l / 2, r = t || s, i = l - r, u = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - i, p = e.content - e.viewport, c = n === "ltr" ? [0, p] : [p * -1, 0];
  return hs(
    [u, d],
    c
  )(a);
}
function qo(a, t) {
  return a > 0 && a < t;
}
const gs = /* @__PURE__ */ _({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = ze(), s = en(), r = tn(), { forwardRef: i, currentElement: u } = R(), d = T(""), p = T();
    function c(x) {
      var D, y;
      if (p.value) {
        const E = x.clientX - ((D = p.value) == null ? void 0 : D.left), P = x.clientY - ((y = p.value) == null ? void 0 : y.top);
        n("onDragScroll", { x: E, y: P });
      }
    }
    function f(x) {
      x.button === 0 && (x.target.setPointerCapture(x.pointerId), p.value = u.value.getBoundingClientRect(), d.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", l.viewport && (l.viewport.value.style.scrollBehavior = "auto"), c(x));
    }
    function m(x) {
      c(x);
    }
    function g(x) {
      const D = x.target;
      D.hasPointerCapture(x.pointerId) && D.releasePointerCapture(x.pointerId), document.body.style.webkitUserSelect = d.value, l.viewport && (l.viewport.value.style.scrollBehavior = ""), p.value = void 0;
    }
    function v(x) {
      var P;
      const D = x.target, y = (P = u.value) == null ? void 0 : P.contains(D), E = s.sizes.value.content - s.sizes.value.viewport;
      y && s.handleWheelScroll(x, E);
    }
    oe(() => {
      document.addEventListener("wheel", v, { passive: !1 });
    }), Te(() => {
      document.removeEventListener("wheel", v);
    });
    function S() {
      var x, D, y, E, P;
      u.value && (e.isHorizontal ? s.handleSizeChange({
        content: ((x = l.viewport.value) == null ? void 0 : x.scrollWidth) ?? 0,
        viewport: ((D = l.viewport.value) == null ? void 0 : D.offsetWidth) ?? 0,
        scrollbar: {
          size: u.value.clientWidth ?? 0,
          paddingStart: Ia(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Ia(getComputedStyle(u.value).paddingRight)
        }
      }) : s.handleSizeChange({
        content: ((y = l.viewport.value) == null ? void 0 : y.scrollHeight) ?? 0,
        viewport: ((E = l.viewport.value) == null ? void 0 : E.offsetHeight) ?? 0,
        scrollbar: {
          size: ((P = u.value) == null ? void 0 : P.clientHeight) ?? 0,
          paddingStart: Ia(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Ia(getComputedStyle(u.value).paddingRight)
        }
      }));
    }
    return Ze(u, S), Ze(l.content, S), (x, D) => (b(), w(o(A), {
      ref: o(i),
      style: { position: "absolute" },
      "data-scrollbarimpl": "",
      as: o(r).as.value,
      "as-child": o(r).asChild.value,
      onPointerdown: f,
      onPointermove: m,
      onPointerup: g
    }, {
      default: h(() => [
        C(x.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), vp = /* @__PURE__ */ _({
  __name: "ScrollAreaScrollbarX",
  setup(a) {
    const t = ze(), e = en(), { forwardRef: n, currentElement: l } = R();
    oe(() => {
      l.value && t.onScrollbarXChange(l.value);
    });
    const s = I(() => e.sizes.value);
    return (r, i) => (b(), w(gs, {
      ref: o(n),
      "is-horizontal": !0,
      "data-orientation": "horizontal",
      style: Ce({
        bottom: 0,
        left: o(t).dir.value === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: o(t).dir.value === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": s.value ? `${o(Qa)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => o(e).onDragScroll(u.x))
    }, {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), mp = /* @__PURE__ */ _({
  __name: "ScrollAreaScrollbarY",
  setup(a) {
    const t = ze(), e = en(), { forwardRef: n, currentElement: l } = R();
    oe(() => {
      l.value && t.onScrollbarYChange(l.value);
    });
    const s = I(() => e.sizes.value);
    return (r, i) => (b(), w(gs, {
      ref: o(n),
      "is-horizontal": !1,
      "data-orientation": "vertical",
      style: Ce({
        top: 0,
        right: o(t).dir.value === "ltr" ? 0 : void 0,
        left: o(t).dir.value === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": s.value ? `${o(Qa)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => o(e).onDragScroll(u.y))
    }, {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), [en, hp] = Q("ScrollAreaScrollbarVisible"), Eo = /* @__PURE__ */ _({
  __name: "ScrollAreaScrollbarVisible",
  setup(a) {
    const t = ze(), e = tn(), { forwardRef: n } = R(), l = T({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), s = I(() => {
      const x = ys(l.value.viewport, l.value.content);
      return x > 0 && x < 1;
    }), r = T(), i = T(0);
    function u(x, D) {
      if (m.value) {
        const y = t.viewport.value.scrollLeft + x.deltaY;
        t.viewport.value.scrollLeft = y, qo(y, D) && x.preventDefault();
      } else {
        const y = t.viewport.value.scrollTop + x.deltaY;
        t.viewport.value.scrollTop = y, qo(y, D) && x.preventDefault();
      }
    }
    function d(x, D) {
      m.value ? i.value = D.x : i.value = D.y;
    }
    function p(x) {
      i.value = 0;
    }
    function c(x) {
      l.value = x;
    }
    function f(x, D) {
      return fp(
        x,
        i.value,
        l.value,
        D
      );
    }
    const m = I(
      () => e.isHorizontal.value
    );
    function g(x) {
      m.value ? t.viewport.value.scrollLeft = f(
        x,
        t.dir.value
      ) : t.viewport.value.scrollTop = f(x);
    }
    function v() {
      if (m.value) {
        if (t.viewport.value && r.value) {
          const x = t.viewport.value.scrollLeft, D = Go(
            x,
            l.value,
            t.dir.value
          );
          r.value.style.transform = `translate3d(${D}px, 0, 0)`;
        }
      } else if (t.viewport.value && r.value) {
        const x = t.viewport.value.scrollTop, D = Go(x, l.value);
        r.value.style.transform = `translate3d(0, ${D}px, 0)`;
      }
    }
    function S(x) {
      r.value = x;
    }
    return hp({
      sizes: l,
      hasThumb: s,
      handleWheelScroll: u,
      handleThumbDown: d,
      handleThumbUp: p,
      handleSizeChange: c,
      onThumbPositionChange: v,
      onThumbChange: S,
      onDragScroll: g
    }), (x, D) => m.value ? (b(), w(vp, M({ key: 0 }, x.$attrs, { ref: o(n) }), {
      default: h(() => [
        C(x.$slots, "default")
      ]),
      _: 3
    }, 16)) : (b(), w(mp, M({ key: 1 }, x.$attrs, { ref: o(n) }), {
      default: h(() => [
        C(x.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bs = /* @__PURE__ */ _({
  __name: "ScrollAreaScrollbarAuto",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = ze(), e = tn(), { forwardRef: n } = R(), l = T(!1), s = Ln(() => {
      if (t.viewport.value) {
        const r = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, i = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
        l.value = e.isHorizontal.value ? r : i;
      }
    }, 10);
    return oe(() => s()), Ze(t.viewport, s), Ze(t.content, s), (r, i) => (b(), w(o(De), {
      present: r.forceMount || l.value
    }, {
      default: h(() => [
        q(Eo, M(r.$attrs, {
          ref: o(n),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: h(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), yp = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ScrollAreaScrollbarHover",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = ze(), { forwardRef: e } = R();
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
    }), (i, u) => (b(), w(o(De), {
      present: i.forceMount || l.value
    }, {
      default: h(() => [
        q(bs, M(i.$attrs, {
          ref: o(e),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), gp = /* @__PURE__ */ _({
  __name: "ScrollAreaScrollbarScroll",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = ze(), e = tn(), { forwardRef: n } = R(), { state: l, dispatch: s } = Il("hidden", {
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
    const r = Ln(() => s("SCROLL_END"), 100);
    return ye((i) => {
      const u = t.viewport.value, d = e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (u) {
        let p = u[d];
        const c = () => {
          const f = u[d];
          p !== f && (s("SCROLL"), r()), p = f;
        };
        u.addEventListener("scroll", c), i(() => {
          u.removeEventListener("scroll", c);
        });
      }
    }), (i, u) => (b(), w(o(De), {
      present: i.forceMount || o(l) !== "hidden"
    }, {
      default: h(() => [
        q(Eo, M(i.$attrs, { ref: o(n) }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [tn, bp] = Q("ScrollAreaScrollbar"), Dy = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = ze(), l = I(() => t.orientation === "horizontal");
    te(
      l,
      () => {
        l.value ? n.onScrollbarXEnabledChange(!0) : n.onScrollbarYEnabledChange(!0);
      },
      { immediate: !0 }
    ), Te(() => {
      n.onScrollbarXEnabledChange(!1), n.onScrollbarYEnabledChange(!1);
    });
    const { orientation: s, forceMount: r, asChild: i, as: u } = ne(t);
    return bp({
      orientation: s,
      forceMount: r,
      isHorizontal: l,
      as: u,
      asChild: i
    }), (d, p) => o(n).type.value === "hover" ? (b(), w(yp, M({ key: 0 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: h(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "scroll" ? (b(), w(gp, M({ key: 1 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: h(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "auto" ? (b(), w(bs, M({ key: 2 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: h(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "always" ? (b(), w(Eo, M({ key: 3 }, d.$attrs, {
      ref: o(e),
      "data-state": "visible"
    }), {
      default: h(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), $y = /* @__PURE__ */ _({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ze(), n = en();
    function l(f) {
      const g = f.target.getBoundingClientRect(), v = f.clientX - g.left, S = f.clientY - g.top;
      n.handleThumbDown(f, { x: v, y: S });
    }
    function s(f) {
      n.handleThumbUp(f);
    }
    const { forwardRef: r, currentElement: i } = R(), u = T(), d = I(() => e.viewport.value);
    function p() {
      if (!u.value) {
        const f = pp(
          d.value,
          n.onThumbPositionChange
        );
        u.value = f, n.onThumbPositionChange();
      }
    }
    const c = I(() => n.sizes.value);
    return oi(c, () => {
      n.onThumbChange(i.value), d.value && (n.onThumbPositionChange(), d.value.addEventListener("scroll", p));
    }), Te(() => {
      var f;
      d.value.removeEventListener("scroll", p), (f = e.viewport.value) == null || f.removeEventListener("scroll", p);
    }), (f, m) => (b(), w(o(A), {
      ref: o(r),
      "data-state": o(n).hasThumb ? "visible" : "hidden",
      style: Ce({
        width: "var(--radix-scroll-area-thumb-width)",
        height: "var(--radix-scroll-area-thumb-height)"
      }),
      "as-child": t.asChild,
      as: f.as,
      onPointerdown: l,
      onPointerup: s
    }, {
      default: h(() => [
        C(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-state", "style", "as-child", "as"]));
  }
}), Cp = /* @__PURE__ */ _({
  __name: "ScrollAreaCornerImpl",
  setup(a) {
    const t = ze(), e = T(0), n = T(0), l = I(() => !!e.value && !!n.value);
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
      return l.value ? (b(), w(o(A), M({
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
          C(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])) : pe("", !0);
    };
  }
}), Iy = /* @__PURE__ */ _({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = ze(), l = I(
      () => !!n.scrollbarX.value && !!n.scrollbarY.value
    ), s = I(
      () => n.type.value !== "scroll" && l.value
    );
    return (r, i) => s.value ? (b(), w(Cp, M({ key: 0 }, t, { ref: o(e) }), {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), _p = ["default-value"], wp = /* @__PURE__ */ _({
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
    return (l, s) => (b(), w(o(Qt), { "as-child": "" }, {
      default: h(() => [
        za(Ue("select", M({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => Xe(e) ? e.value = r : null),
          "default-value": o(e)
        }), [
          C(l.$slots, "default")
        ], 16, _p), [
          [cr, o(e)]
        ])
      ]),
      _: 3
    }));
  }
}), xp = {
  key: 0,
  value: ""
}, [bt, Cs] = Q("SelectRoot"), [Sp, Ep] = Q("SelectRoot"), By = /* @__PURE__ */ _({
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
    }), d = T(!1), { required: p, disabled: c, dir: f } = ne(e), m = _e(f);
    Cs({
      triggerElement: r,
      onTriggerChange: (x) => {
        r.value = x;
      },
      valueElement: i,
      onValueElementChange: (x) => {
        i.value = x;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (x) => {
        d.value = x;
      },
      contentId: "",
      modelValue: l,
      onValueChange: (x) => {
        l.value = x;
      },
      open: s,
      required: p,
      onOpenChange: (x) => {
        s.value = x;
      },
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: c
    });
    const g = Qe(r), v = T(/* @__PURE__ */ new Set()), S = I(() => Array.from(v.value).map((x) => {
      var D;
      return (D = x.props) == null ? void 0 : D.value;
    }).join(";"));
    return Ep({
      onNativeOptionAdd: (x) => {
        v.value.add(x);
      },
      onNativeOptionRemove: (x) => {
        v.value.delete(x);
      }
    }), (x, D) => (b(), w(o(Bt), null, {
      default: h(() => [
        C(x.$slots, "default", {
          modelValue: o(l),
          open: o(s)
        }),
        o(g) ? (b(), w(wp, M({ key: S.value }, x.$attrs, {
          "aria-hidden": "",
          tabindex: "-1",
          required: o(p),
          name: x.name,
          autocomplete: x.autocomplete,
          disabled: o(c),
          value: o(l),
          onChange: D[0] || (D[0] = (y) => l.value = y.target.value)
        }), {
          default: h(() => [
            o(l) === void 0 ? (b(), ue("option", xp)) : pe("", !0),
            (b(!0), ue(we, null, ma(Array.from(v.value), (y) => (b(), w(Ge(y), M(y.props, {
              key: y.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : pe("", !0)
      ]),
      _: 3
    }));
  }
}), Pp = [" ", "Enter", "ArrowUp", "ArrowDown"], Dp = [" ", "Enter"], at = 10;
function _s(a) {
  return a === "" || Nt(a);
}
const Ty = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = bt(), n = I(() => {
      var m;
      return ((m = e.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: l, currentElement: s } = R();
    e.contentId || (e.contentId = me(void 0, "radix-vue-select-content")), oe(() => {
      e.triggerElement = s;
    });
    const { injectCollection: r } = Me(), i = r(), { search: u, handleTypeaheadSearch: d, resetTypeahead: p } = ba(i);
    function c() {
      n.value || (e.onOpenChange(!0), p());
    }
    function f(m) {
      c(), e.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, g) => (b(), w(o(Tt), { "as-child": "" }, {
      default: h(() => {
        var v, S, x, D;
        return [
          q(o(A), {
            ref: o(l),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": o(e).contentId,
            "aria-expanded": o(e).open.value || !1,
            "aria-required": (v = o(e).required) == null ? void 0 : v.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (S = o(e)) == null ? void 0 : S.dir.value,
            "data-state": (x = o(e)) != null && x.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": o(_s)((D = o(e).modelValue) == null ? void 0 : D.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: g[0] || (g[0] = (y) => {
              var E;
              (E = y == null ? void 0 : y.currentTarget) == null || E.focus();
            }),
            onPointerdown: g[1] || (g[1] = (y) => {
              if (y.pointerType === "touch")
                return y.preventDefault();
              const E = y.target;
              E.hasPointerCapture(y.pointerId) && E.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && (f(y), y.preventDefault());
            }),
            onPointerup: g[2] || (g[2] = ie(
              (y) => {
                y.pointerType === "touch" && f(y);
              },
              ["prevent"]
            )),
            onKeydown: g[3] || (g[3] = (y) => {
              const E = o(u) !== "";
              !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && E && y.key === " " || (o(d)(y.key), o(Pp).includes(y.key) && (c(), y.preventDefault()));
            })
          }, {
            default: h(() => [
              C(m.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Ry = /* @__PURE__ */ _({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ht), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Po, $p] = Q("SelectItemAlignedPosition"), Ip = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(a, { emit: t }) {
    const e = a, n = t, { injectCollection: l } = Me(), s = bt(), r = Ct(), i = l(), u = T(!1), d = T(!0), p = T(), { forwardRef: c, currentElement: f } = R(), { viewport: m, selectedItem: g, selectedItemText: v, focusSelectedItem: S } = r;
    function x() {
      if (s.triggerElement.value && s.valueElement.value && p.value && f.value && (m != null && m.value) && (g != null && g.value) && (v != null && v.value)) {
        const E = s.triggerElement.value.getBoundingClientRect(), P = f.value.getBoundingClientRect(), $ = s.valueElement.value.getBoundingClientRect(), B = v.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const ge = B.left - P.left, Ie = $.left - ge, de = E.left - Ie, Ee = E.width + de, Ve = Math.max(Ee, P.width), Ke = window.innerWidth - at, be = Kt(Ie, at, Ke - Ve);
          p.value.style.minWidth = `${Ee}px`, p.value.style.left = `${be}px`;
        } else {
          const ge = P.right - B.right, Ie = window.innerWidth - $.right - ge, de = window.innerWidth - E.right - Ie, Ee = E.width + de, Ve = Math.max(Ee, P.width), Ke = window.innerWidth - at, be = Kt(
            Ie,
            at,
            Ke - Ve
          );
          p.value.style.minWidth = `${Ee}px`, p.value.style.right = `${be}px`;
        }
        const O = i.value, F = window.innerHeight - at * 2, k = m.value.scrollHeight, V = window.getComputedStyle(f.value), H = Number.parseInt(
          V.borderTopWidth,
          10
        ), Y = Number.parseInt(V.paddingTop, 10), J = Number.parseInt(
          V.borderBottomWidth,
          10
        ), N = Number.parseInt(
          V.paddingBottom,
          10
        ), L = H + Y + k + N + J, W = Math.min(
          g.value.offsetHeight * 5,
          L
        ), z = window.getComputedStyle(m.value), Z = Number.parseInt(z.paddingTop, 10), U = Number.parseInt(
          z.paddingBottom,
          10
        ), X = E.top + E.height / 2 - at, ee = F - X, fe = g.value.offsetHeight / 2, G = g.value.offsetTop + fe, le = H + Y + G, he = L - le;
        if (le <= X) {
          const ge = g.value === O[O.length - 1];
          p.value.style.bottom = "0px";
          const Ie = f.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, de = Math.max(
            ee,
            fe + (ge ? U : 0) + Ie + J
          ), Ee = le + de;
          p.value.style.height = `${Ee}px`;
        } else {
          const ge = g.value === O[0];
          p.value.style.top = "0px";
          const de = Math.max(
            X,
            H + m.value.offsetTop + (ge ? Z : 0) + fe
          ) + he;
          p.value.style.height = `${de}px`, m.value.scrollTop = le - X + m.value.offsetTop;
        }
        p.value.style.margin = `${at}px 0`, p.value.style.minHeight = `${W}px`, p.value.style.maxHeight = `${F}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const D = T("");
    oe(async () => {
      await se(), x(), f.value && (D.value = window.getComputedStyle(f.value).zIndex);
    });
    function y(E) {
      E && d.value === !0 && (x(), S == null || S(), d.value = !1);
    }
    return $p({
      contentWrapper: p,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: y
    }), (E, P) => (b(), ue("div", {
      ref_key: "contentWrapperElement",
      ref: p,
      style: Ce({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D.value
      })
    }, [
      q(o(A), M({
        ref: o(c),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...E.$attrs, ...e }), {
        default: h(() => [
          C(E.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])
    ], 4));
  }
}), Bp = /* @__PURE__ */ _({
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
    const e = It(a);
    return (n, l) => (b(), w(o(Pt), M(o(e), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), na = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Ct, Tp] = Q("SelectContent"), Rp = /* @__PURE__ */ _({
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
    const e = a, n = t, l = bt();
    Wn(), ya(e.bodyLock);
    const { createCollection: s } = Me(), r = T();
    ga(r);
    const i = s(r), { search: u, handleTypeaheadSearch: d } = ba(i), p = T(), c = T(), f = T(), m = T(!1), g = T(!1);
    function v() {
      c.value && r.value && Sn([c.value, r.value]);
    }
    te(m, () => {
      v();
    });
    const { onOpenChange: S, triggerPointerDownPosRef: x } = l;
    ye((P) => {
      if (!r.value)
        return;
      let $ = { x: 0, y: 0 };
      const B = (F) => {
        var k, V;
        $ = {
          x: Math.abs(
            Math.round(F.pageX) - (((k = x.value) == null ? void 0 : k.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(F.pageY) - (((V = x.value) == null ? void 0 : V.y) ?? 0)
          )
        };
      }, O = (F) => {
        var k;
        F.pointerType !== "touch" && ($.x <= 10 && $.y <= 10 ? F.preventDefault() : (k = r.value) != null && k.contains(F.target) || S(!1), document.removeEventListener("pointermove", B), x.value = null);
      };
      x.value !== null && (document.addEventListener("pointermove", B), document.addEventListener("pointerup", O, {
        capture: !0,
        once: !0
      })), P(() => {
        document.removeEventListener("pointermove", B), document.removeEventListener("pointerup", O, {
          capture: !0
        });
      });
    });
    function D(P) {
      const $ = P.ctrlKey || P.altKey || P.metaKey;
      if (P.key === "Tab" && P.preventDefault(), !$ && P.key.length === 1 && d(P.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(P.key)) {
        let B = i.value;
        if (["ArrowUp", "End"].includes(P.key) && (B = B.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(P.key)) {
          const O = P.target, F = B.indexOf(O);
          B = B.slice(F + 1);
        }
        setTimeout(() => Sn(B)), P.preventDefault();
      }
    }
    const y = I(() => e.position === "popper" ? e : {}), E = It(y.value);
    return Tp({
      content: r,
      viewport: p,
      onViewportChange: (P) => {
        p.value = P;
      },
      itemRefCallback: (P, $, B) => {
        var k, V;
        const O = !g.value && !B;
        (((k = l.modelValue) == null ? void 0 : k.value) !== void 0 && ((V = l.modelValue) == null ? void 0 : V.value) === $ || O) && (c.value = P, O && (g.value = !0));
      },
      selectedItem: c,
      selectedItemText: f,
      onItemLeave: () => {
        var P;
        (P = r.value) == null || P.focus();
      },
      itemTextRefCallback: (P, $, B) => {
        var k, V;
        const O = !g.value && !B;
        (((k = l.modelValue) == null ? void 0 : k.value) !== void 0 && ((V = l.modelValue) == null ? void 0 : V.value) === $ || O) && (f.value = P);
      },
      focusSelectedItem: v,
      position: e.position,
      isPositioned: m,
      searchRef: u
    }), (P, $) => (b(), w(o(Ua), {
      "as-child": "",
      onMountAutoFocus: $[6] || ($[6] = ie(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: $[7] || ($[7] = (B) => {
        var O;
        n("closeAutoFocus", B), !B.defaultPrevented && ((O = o(l).triggerElement.value) == null || O.focus({ preventScroll: !0 }), B.preventDefault());
      })
    }, {
      default: h(() => [
        q(o(yt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: $[2] || ($[2] = ie(() => {
          }, ["prevent"])),
          onDismiss: $[3] || ($[3] = (B) => o(l).onOpenChange(!1)),
          onEscapeKeyDown: $[4] || ($[4] = (B) => n("escapeKeyDown", B)),
          onPointerDownOutside: $[5] || ($[5] = (B) => n("pointerDownOutside", B))
        }, {
          default: h(() => [
            (b(), w(Ge(
              P.position === "popper" ? Bp : Ip
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
              onPlaced: $[1] || ($[1] = (B) => m.value = !0),
              onKeydown: D
            }), {
              default: h(() => [
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
}), Ap = /* @__PURE__ */ _({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(a) {
    return Cs(a.context), (e, n) => C(e.$slots, "default");
  }
}), kp = { key: 1 }, Ay = /* @__PURE__ */ _({
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
    const e = a, l = xe(e, t), s = bt(), r = T();
    oe(() => {
      r.value = new DocumentFragment();
    });
    const i = T(), u = I(() => e.forceMount || s.open.value);
    return (d, p) => {
      var c;
      return u.value ? (b(), w(o(De), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: !0
      }, {
        default: h(() => [
          q(Rp, K(j({ ...o(l), ...d.$attrs })), {
            default: h(() => [
              C(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = i.value) != null && c.present) && r.value ? (b(), ue("div", kp, [
        (b(), w(Wt, { to: r.value }, [
          q(Ap, { context: o(s) }, {
            default: h(() => [
              C(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : pe("", !0);
    };
  }
}), ky = /* @__PURE__ */ _({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a, e = bt(), n = Ct();
    return (l, s) => o(e).open.value && o(n).position === "popper" ? (b(), w(o(Jt), K(M({ key: 0 }, t)), {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Oy = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(A), M({ "aria-hidden": "" }, t), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ws, Op] = Q("SelectItem"), My = /* @__PURE__ */ _({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { disabled: e } = ne(t), n = bt(), l = Ct(na), { forwardRef: s, currentElement: r } = R(), i = I(() => {
      var v;
      return ((v = n.modelValue) == null ? void 0 : v.value) === t.value;
    }), u = T(!1), d = T(t.textValue ?? ""), p = me(void 0, "radix-vue-select-item-text");
    async function c(v) {
      await se(), !(v != null && v.defaultPrevented) && (e.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function f(v) {
      var S;
      await se(), !v.defaultPrevented && (e.value ? (S = l.onItemLeave) == null || S.call(l) : v.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(v) {
      var S;
      await se(), !v.defaultPrevented && v.currentTarget === document.activeElement && ((S = l.onItemLeave) == null || S.call(l));
    }
    async function g(v) {
      var x;
      await se(), !(v.defaultPrevented || ((x = l.searchRef) == null ? void 0 : x.value) !== "" && v.key === " ") && (Dp.includes(v.key) && c(), v.key === " " && v.preventDefault());
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
    }), Op({
      value: t.value,
      disabled: e,
      textId: p,
      isSelected: i,
      onItemTextChange: (v) => {
        d.value = ((d.value || (v == null ? void 0 : v.textContent)) ?? "").trim();
      }
    }), (v, S) => (b(), w(o(A), {
      ref: o(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": o(p),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value && u.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": o(e) || void 0,
      "data-disabled": o(e) ? "" : void 0,
      tabindex: o(e) ? void 0 : -1,
      as: v.as,
      "as-child": v.asChild,
      onFocus: S[0] || (S[0] = (x) => u.value = !0),
      onBlur: S[1] || (S[1] = (x) => u.value = !1),
      onPointerup: c,
      onPointerdown: S[2] || (S[2] = (x) => {
        x.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: S[3] || (S[3] = ie(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: m,
      onKeydown: g
    }, {
      default: h(() => [
        C(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Vy = /* @__PURE__ */ _({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = ws();
    return (n, l) => o(e).isSelected.value ? (b(), w(o(A), M({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), [Mp, Vp] = Q("SelectGroup"), Fy = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = me(void 0, "radix-vue-select-group");
    return Vp({ id: e }), (n, l) => (b(), w(o(A), M({ role: "group" }, t, { "aria-labelledby": o(e) }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Ly = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = Mp({ id: "" });
    return (n, l) => (b(), w(o(A), M(t, {
      id: o(e).id
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ny = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = bt(), n = Ct(na), l = Sp(), s = ws(), { forwardRef: r, currentElement: i } = R(), u = I(() => {
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
    }), An(() => {
      l.onNativeOptionRemove(u.value);
    }), (d, p) => (b(), ue(we, null, [
      q(o(A), M({
        id: o(s).textId,
        ref: o(r)
      }, { ...t, ...d.$attrs }), {
        default: h(() => [
          C(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      o(s).isSelected.value && o(e).valueElement.value && !o(e).valueElementHasChildren.value ? (b(), w(Wt, {
        key: 0,
        to: o(e).valueElement.value
      }, [
        C(d.$slots, "default")
      ], 8, ["to"])) : pe("", !0)
    ], 64));
  }
}), zy = /* @__PURE__ */ _({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Ct(na), n = e.position === "item-aligned" ? Po() : void 0, { forwardRef: l, currentElement: s } = R();
    oe(() => {
      e == null || e.onViewportChange(s.value);
    });
    const r = T(0);
    function i(u) {
      const d = u.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: c } = n ?? {};
      if (p != null && p.value && (c != null && c.value)) {
        const f = Math.abs(r.value - d.scrollTop);
        if (f > 0) {
          const m = window.innerHeight - at * 2, g = Number.parseFloat(
            c.value.style.minHeight
          ), v = Number.parseFloat(c.value.style.height), S = Math.max(g, v);
          if (S < m) {
            const x = S + f, D = Math.min(m, x), y = x - D;
            c.value.style.height = `${D}px`, c.value.style.bottom === "0px" && (d.scrollTop = y > 0 ? y : 0, c.value.style.justifyContent = "flex-end");
          }
        }
      }
      r.value = d.scrollTop;
    }
    return (u, d) => (b(), ue(we, null, [
      q(o(A), M({
        ref: o(l),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...u.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        },
        onScroll: i
      }), {
        default: h(() => [
          C(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      q(o(A), {
        as: "style",
        nonce: u.nonce
      }, {
        default: h(() => [
          ve(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), xs = /* @__PURE__ */ _({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(a, { emit: t }) {
    const e = t, { injectCollection: n } = Me(), l = n(), s = Ct(na), r = T(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    ye(() => {
      const p = l.value.find(
        (c) => c === document.activeElement
      );
      p == null || p.scrollIntoView({ block: "nearest" });
    });
    function u() {
      r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    function d() {
      var p;
      (p = s.onItemLeave) == null || p.call(s), r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    return An(() => i()), (p, c) => {
      var f;
      return b(), w(o(A), M({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (f = p.$parent) == null ? void 0 : f.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: c[0] || (c[0] = () => {
          i();
        })
      }), {
        default: h(() => [
          C(p.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Ky = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = Ct(na), e = t.position === "item-aligned" ? Po() : void 0, { forwardRef: n, currentElement: l } = R(), s = T(!1);
    return ye((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          s.value = p.scrollTop > 0;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), r(() => p.removeEventListener("scroll", d));
      }
    }), te(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (b(), w(xs, {
      key: 0,
      ref: o(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = o(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : pe("", !0);
  }
}), Hy = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = Ct(na), e = t.position === "item-aligned" ? Po() : void 0, { forwardRef: n, currentElement: l } = R(), s = T(!1);
    return ye((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          const c = p.scrollHeight - p.clientHeight;
          s.value = Math.ceil(p.scrollTop) < c;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), r(() => p.removeEventListener("scroll", d));
      }
    }), te(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (b(), w(xs, {
      key: 0,
      ref: o(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = o(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : pe("", !0);
  }
}), Wy = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = bt(), l = Ka();
    return ul(() => {
      var r;
      const s = !!Wa((r = l == null ? void 0 : l.default) == null ? void 0 : r.call(l)).length;
      n.onValueElementHasChildrenChange(s);
    }), oe(() => {
      n.valueElement = e;
    }), (s, r) => (b(), w(o(A), {
      ref: o(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: h(() => {
        var i;
        return [
          o(_s)((i = o(n).modelValue) == null ? void 0 : i.value) ? (b(), ue(we, { key: 0 }, [
            ve($e(s.placeholder), 1)
          ], 64)) : C(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), jy = /* @__PURE__ */ _({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return (t, e) => (b(), w(o(A), {
      "aria-hidden": "",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: h(() => [
        C(t.$slots, "default", {}, () => [
          ve("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ss = /* @__PURE__ */ _({
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
    return (i, u) => (b(), w(o(A), M({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": l.value
    }, r.value), {
      default: h(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), Fp = /* @__PURE__ */ _({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(Ss, K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Lp(a = [], t, e) {
  const n = [...a];
  return n[e] = t, n.sort((l, s) => l - s);
}
function Es(a, t, e) {
  const s = 100 / (e - t) * (a - t);
  return Kt(s, 0, 100);
}
function Np(a, t) {
  return t > 2 ? `Value ${a + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][a] : void 0;
}
function zp(a, t) {
  if (a.length === 1)
    return 0;
  const e = a.map((l) => Math.abs(l - t)), n = Math.min(...e);
  return e.indexOf(n);
}
function Kp(a, t, e) {
  const n = a / 2, s = Do([0, 50], [0, n]);
  return (n - s(t) * e) * e;
}
function Hp(a) {
  return a.slice(0, -1).map((t, e) => a[e + 1] - t);
}
function Wp(a, t) {
  if (t > 0) {
    const e = Hp(a);
    return Math.min(...e) >= t;
  }
  return !0;
}
function Do(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + n * (e - a[0]);
  };
}
function jp(a) {
  return (String(a).split(".")[1] || "").length;
}
function Up(a, t) {
  const e = 10 ** t;
  return Math.round(a * e) / e;
}
const Ps = ["PageUp", "PageDown"], Ds = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], $s = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Is, Bs] = Q(["SliderVertical", "SliderHorizontal"]), Ts = /* @__PURE__ */ _({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = an();
    return (s, r) => (b(), w(o(A), M({ "data-slider-impl": "" }, e, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : o(Ps).concat(o(Ds)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gp = /* @__PURE__ */ _({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, { max: l, min: s, dir: r, inverted: i } = ne(e), { forwardRef: u, currentElement: d } = R(), p = T(), c = I(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function f(m) {
      const g = p.value || d.value.getBoundingClientRect(), v = [0, g.width], S = c.value ? [s.value, l.value] : [l.value, s.value], x = Do(v, S);
      return p.value = g, x(m - g.left);
    }
    return Bs({
      startEdge: c.value ? "left" : "right",
      endEdge: c.value ? "right" : "left",
      direction: c.value ? 1 : -1,
      size: "width"
    }), (m, g) => (b(), w(Ts, {
      ref: o(u),
      dir: o(r),
      "data-orientation": "horizontal",
      style: Ce({
        "--radix-slider-thumb-transform": "translateX(-50%)"
      }),
      onSlideStart: g[0] || (g[0] = (v) => {
        const S = f(v.clientX);
        n("slideStart", S);
      }),
      onSlideMove: g[1] || (g[1] = (v) => {
        const S = f(v.clientX);
        n("slideMove", S);
      }),
      onSlideEnd: g[2] || (g[2] = () => {
        p.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: g[3] || (g[3] = (v) => {
        const S = c.value ? "from-left" : "from-right", x = o($s)[S].includes(v.key);
        n("stepKeyDown", v, x ? -1 : 1);
      }),
      onEndKeyDown: g[4] || (g[4] = (v) => n("endKeyDown", v)),
      onHomeKeyDown: g[5] || (g[5] = (v) => n("homeKeyDown", v))
    }, {
      default: h(() => [
        C(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "style"]));
  }
}), qp = /* @__PURE__ */ _({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, { max: l, min: s, inverted: r } = ne(e), { forwardRef: i, currentElement: u } = R(), d = T(), p = I(() => !r.value);
    function c(f) {
      const m = d.value || u.value.getBoundingClientRect(), g = [0, m.height], v = p.value ? [l.value, s.value] : [s.value, l.value], S = Do(g, v);
      return d.value = m, S(f - m.top);
    }
    return Bs({
      startEdge: p.value ? "bottom" : "top",
      endEdge: p.value ? "top" : "bottom",
      size: "height",
      direction: p.value ? 1 : -1
    }), (f, m) => (b(), w(Ts, {
      ref: o(i),
      "data-orientation": "vertical",
      style: Ce({
        "--radix-slider-thumb-transform": "translateY(50%)"
      }),
      onSlideStart: m[0] || (m[0] = (g) => {
        const v = c(g.clientY);
        n("slideStart", v);
      }),
      onSlideMove: m[1] || (m[1] = (g) => {
        const v = c(g.clientY);
        n("slideMove", v);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        d.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (g) => {
        const v = p.value ? "from-bottom" : "from-top", S = o($s)[v].includes(g.key);
        n("stepKeyDown", g, S ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: m[5] || (m[5] = (g) => n("homeKeyDown", g))
    }, {
      default: h(() => [
        C(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), Yp = ["value", "name", "disabled", "step"], [an, Xp] = Q("SliderRoot"), Uy = /* @__PURE__ */ _({
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
    const e = a, n = t, { min: l, max: s, step: r, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: p } = ne(e), c = _e(p), { forwardRef: f, currentElement: m } = R(), g = Qe(m);
    Gt();
    const v = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), S = T(0), x = T(v.value);
    function D(B) {
      const O = zp(v.value, B);
      P(B, O);
    }
    function y(B) {
      P(B, S.value);
    }
    function E() {
      const B = x.value[S.value];
      v.value[S.value] !== B && n("valueCommit", pr(v.value));
    }
    function P(B, O, { commit: F } = { commit: !1 }) {
      var J;
      const k = jp(r.value), V = Up(Math.round((B - l.value) / r.value) * r.value + l.value, k), H = Kt(V, l.value, s.value), Y = Lp(v.value, H, O);
      if (Wp(Y, i.value * r.value)) {
        S.value = Y.indexOf(H);
        const N = String(Y) !== String(v.value);
        N && F && n("valueCommit", Y), N && ((J = $.value[S.value]) == null || J.focus(), v.value = Y);
      }
    }
    const $ = T([]);
    return Xp({
      modelValue: v,
      valueIndexToChangeRef: S,
      thumbElements: $,
      orientation: u,
      min: l,
      max: s,
      disabled: d
    }), (B, O) => (b(), ue(we, null, [
      q(o(qt), null, {
        default: h(() => [
          (b(), w(Ge(o(u) === "horizontal" ? Gp : qp), M(B.$attrs, {
            ref: o(f),
            "as-child": B.asChild,
            as: B.as,
            min: o(l),
            max: o(s),
            dir: o(c),
            inverted: B.inverted,
            "aria-disabled": o(d),
            "data-disabled": o(d) ? "" : void 0,
            onPointerdown: O[0] || (O[0] = () => {
              o(d) || (x.value = o(v));
            }),
            onSlideStart: O[1] || (O[1] = (F) => !o(d) && D(F)),
            onSlideMove: O[2] || (O[2] = (F) => !o(d) && y(F)),
            onSlideEnd: O[3] || (O[3] = (F) => !o(d) && E()),
            onHomeKeyDown: O[4] || (O[4] = (F) => !o(d) && P(o(l), 0, { commit: !0 })),
            onEndKeyDown: O[5] || (O[5] = (F) => !o(d) && P(o(s), o(v).length - 1, { commit: !0 })),
            onStepKeyDown: O[6] || (O[6] = (F, k) => {
              if (!o(d)) {
                const Y = o(Ps).includes(F.key) || F.shiftKey && o(Ds).includes(F.key) ? 10 : 1, J = S.value, N = o(v)[J], L = o(r) * Y * k;
                P(N + L, J, { commit: !0 });
              }
            })
          }), {
            default: h(() => [
              C(B.$slots, "default", { modelValue: o(v) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      o(g) ? (b(!0), ue(we, { key: 0 }, ma(o(v), (F, k) => (b(), ue("input", {
        key: k,
        value: F,
        type: "number",
        style: { display: "none" },
        name: B.name ? B.name + (o(v).length > 1 ? "[]" : "") : void 0,
        disabled: o(d),
        step: o(r)
      }, null, 8, Yp))), 128)) : pe("", !0)
    ], 64));
  }
}), Zp = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = an(), n = Is(), { forwardRef: l, currentElement: s } = R(), r = I(() => {
      var m, g;
      return (g = (m = e.modelValue) == null ? void 0 : m.value) == null ? void 0 : g[t.index];
    }), i = I(() => r.value === void 0 ? 0 : Es(r.value, e.min.value ?? 0, e.max.value ?? 100)), u = I(() => {
      var m, g;
      return Np(t.index, ((g = (m = e.modelValue) == null ? void 0 : m.value) == null ? void 0 : g.length) ?? 0);
    }), d = $l(s), p = I(() => d[n.size].value), c = I(() => p.value ? Kp(p.value, i.value, n.direction) : 0), f = Ha();
    return oe(() => {
      e.thumbElements.value.push(s.value);
    }), Te(() => {
      const m = e.thumbElements.value.findIndex((g) => g === s.value) ?? -1;
      e.thumbElements.value.splice(m, 1);
    }), (m, g) => (b(), w(o(Yt), null, {
      default: h(() => [
        q(o(A), M(m.$attrs, {
          ref: o(l),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: o(e).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || u.value,
          "data-disabled": o(e).disabled.value ? "" : void 0,
          "data-orientation": o(e).orientation.value,
          "aria-valuenow": r.value,
          "aria-valuemin": o(e).min.value,
          "aria-valuemax": o(e).max.value,
          "aria-orientation": o(e).orientation.value,
          "as-child": m.asChild,
          as: m.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [o(n).startEdge]: `calc(${i.value}% + ${c.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !o(f) && r.value === void 0 ? "none" : void 0
          },
          onFocus: g[0] || (g[0] = () => {
            o(e).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: h(() => [
            C(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), Gy = /* @__PURE__ */ _({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { getItems: e } = Xt(), { forwardRef: n, currentElement: l } = R(), s = I(() => l.value ? e().findIndex((r) => r.ref === l.value) : -1);
    return (r, i) => (b(), w(Zp, M({ ref: o(n) }, t, { index: s.value }), {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), qy = /* @__PURE__ */ _({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = an();
    return R(), (e, n) => (b(), w(o(A), {
      "as-child": e.asChild,
      as: e.as,
      "data-disabled": o(t).disabled.value ? "" : void 0,
      "data-orientation": o(t).orientation.value
    }, {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Yy = /* @__PURE__ */ _({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = an(), e = Is();
    R();
    const n = I(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (u) => Es(u, t.min.value, t.max.value)
      );
    }), l = I(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = I(() => 100 - Math.max(...n.value));
    return (r, i) => (b(), w(o(A), {
      "data-disabled": o(t).disabled.value ? "" : void 0,
      "data-orientation": o(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: Ce({
        [o(e).startEdge]: `${l.value}%`,
        [o(e).endEdge]: `${s.value}%`
      })
    }, {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
let In = null, xt = null;
function Jp(a, t) {
  if (t) {
    const e = (t & Vs) !== 0, n = (t & Fs) !== 0, l = (t & Ls) !== 0, s = (t & Ns) !== 0;
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
function Qp() {
  xt !== null && (document.head.removeChild(xt), In = null, xt = null);
}
function Cn(a, t) {
  const e = Jp(a, t);
  In !== e && (In = e, xt === null && (xt = document.createElement("style"), document.head.appendChild(xt)), xt.innerHTML = `*{cursor: ${e}!important;}`);
}
function ef({
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
function Rs(a) {
  return a.type === "keydown";
}
function As(a) {
  return a.type.startsWith("mouse");
}
function ks(a) {
  return a.type.startsWith("touch");
}
function nn(a) {
  if (As(a))
    return {
      x: a.clientX,
      y: a.clientY
    };
  if (ks(a)) {
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
function Os(a, t) {
  const e = a === "horizontal", { x: n, y: l } = nn(t);
  return e ? n : l;
}
function tf(a, t, e) {
  return e ? a.x < t.x + t.width && a.x + a.width > t.x && a.y < t.y + t.height && a.y + a.height > t.y : a.x <= t.x + t.width && a.x + a.width >= t.x && a.y <= t.y + t.height && a.y + a.height >= t.y;
}
function ce(a, t = "Assertion failed!") {
  if (!a)
    throw console.error(t), new Error(t);
}
function af(a, t) {
  if (a === t)
    throw new Error("Cannot compare node with itself");
  const e = {
    a: Zo(a),
    b: Zo(t)
  };
  let n;
  for (; e.a.at(-1) === e.b.at(-1); )
    a = e.a.pop(), t = e.b.pop(), n = a;
  ce(n);
  const l = {
    a: Xo(Yo(e.a)),
    b: Xo(Yo(e.b))
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
const nf = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function of(a) {
  const t = getComputedStyle(Ms(a)).display;
  return t === "flex" || t === "inline-flex";
}
function lf(a) {
  const t = getComputedStyle(a);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || of(a)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || nf.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Yo(a) {
  let t = a.length;
  for (; t--; ) {
    const e = a[t];
    if (ce(e), lf(e))
      return e;
  }
  return null;
}
function Xo(a) {
  return a && Number(getComputedStyle(a).zIndex) || 0;
}
function Zo(a) {
  const t = [];
  for (; a; )
    t.push(a), a = Ms(a);
  return t;
}
function Ms(a) {
  var t;
  return ((t = a.parentNode) == null ? void 0 : t.host) || a.parentNode;
}
const Vs = 1, Fs = 2, Ls = 4, Ns = 8;
function sf() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
const rf = sf() === "coarse", ft = [];
let on = !1;
const ct = /* @__PURE__ */ new Map(), ln = /* @__PURE__ */ new Map(), pa = /* @__PURE__ */ new Set();
function uf(a, t, e, n, l) {
  const { ownerDocument: s } = t, r = {
    direction: e,
    element: t,
    hitAreaMargins: n,
    setResizeHandlerState: l
  }, i = ct.get(s) ?? 0;
  return ct.set(s, i + 1), pa.add(r), La(), function() {
    ln.delete(a), pa.delete(r);
    const d = ct.get(s) ?? 1;
    ct.set(s, d - 1), La(), d === 1 && ct.delete(s);
  };
}
function Ba(a) {
  const { target: t } = a, { x: e, y: n } = nn(a);
  on = !0, $o({ target: t, x: e, y: n }), La(), ft.length > 0 && (Io("down", a), a.preventDefault());
}
function it(a) {
  const { x: t, y: e } = nn(a);
  if (!on) {
    const { target: n } = a;
    $o({ target: n, x: t, y: e });
  }
  Io("move", a), zs(), ft.length > 0 && a.preventDefault();
}
function ut(a) {
  const { target: t } = a, { x: e, y: n } = nn(a);
  ln.clear(), on = !1, ft.length > 0 && a.preventDefault(), Io("up", a), $o({ target: t, x: e, y: n }), zs(), La();
}
function $o({
  target: a,
  x: t,
  y: e
}) {
  ft.splice(0);
  let n = null;
  a instanceof HTMLElement && (n = a), pa.forEach((l) => {
    const { element: s, hitAreaMargins: r } = l, i = s.getBoundingClientRect(), { bottom: u, left: d, right: p, top: c } = i, f = rf ? r.coarse : r.fine;
    if (t >= d - f && t <= p + f && e >= c - f && e <= u + f) {
      if (n !== null && s !== n && !s.contains(n) && !n.contains(s) && af(n, s) > 0) {
        let g = n, v = !1;
        for (; g && !g.contains(s); ) {
          if (tf(
            g.getBoundingClientRect(),
            i,
            !0
          )) {
            v = !0;
            break;
          }
          g = g.parentElement;
        }
        if (v)
          return;
      }
      ft.push(l);
    }
  });
}
function _n(a, t) {
  ln.set(a, t);
}
function zs() {
  let a = !1, t = !1;
  ft.forEach((n) => {
    const { direction: l } = n;
    l === "horizontal" ? a = !0 : t = !0;
  });
  let e = 0;
  ln.forEach((n) => {
    e |= n;
  }), a && t ? Cn("intersection", e) : a ? Cn("horizontal", e) : t ? Cn("vertical", e) : Qp();
}
function La() {
  ct.forEach((a, t) => {
    const { body: e } = t;
    e.removeEventListener("contextmenu", ut), e.removeEventListener("mousedown", Ba), e.removeEventListener("mouseleave", it), e.removeEventListener("mousemove", it), e.removeEventListener("touchmove", it), e.removeEventListener("touchstart", Ba);
  }), window.removeEventListener("mouseup", ut), window.removeEventListener("touchcancel", ut), window.removeEventListener("touchend", ut), pa.size > 0 && (on ? (ft.length > 0 && ct.forEach((a, t) => {
    const { body: e } = t;
    a > 0 && (e.addEventListener("contextmenu", ut), e.addEventListener("mouseleave", it), e.addEventListener("mousemove", it), e.addEventListener("touchmove", it, {
      passive: !1
    }));
  }), window.addEventListener("mouseup", ut), window.addEventListener("touchcancel", ut), window.addEventListener("touchend", ut)) : ct.forEach((a, t) => {
    const { body: e } = t;
    a > 0 && (e.addEventListener("mousedown", Ba), e.addEventListener("mousemove", it), e.addEventListener("touchmove", it, {
      passive: !1
    }), e.addEventListener("touchstart", Ba));
  }));
}
function Io(a, t) {
  pa.forEach((e) => {
    const { setResizeHandlerState: n } = e, l = ft.includes(e);
    n(a, l, t);
  });
}
const Ks = 10;
function fa(a, t, e = Ks) {
  a = Number.parseFloat(a.toFixed(e)), t = Number.parseFloat(t.toFixed(e));
  const n = a - t;
  return n === 0 ? 0 : n > 0 ? 1 : -1;
}
function Fe(a, t, e) {
  return fa(a, t, e) === 0;
}
function Lt({
  panelConstraints: a,
  panelIndex: t,
  size: e
}) {
  const n = a[t];
  ce(n != null);
  const { collapsedSize: l = 0, collapsible: s, maxSize: r = 100, minSize: i = 0 } = n;
  if (fa(e, i) < 0)
    if (s) {
      const u = (l + i) / 2;
      fa(e, u) < 0 ? e = l : e = i;
    } else
      e = i;
  return e = Math.min(r, e), e = Number.parseFloat(e.toFixed(Ks)), e;
}
function Ta(a, t) {
  if (a.length !== t.length)
    return !1;
  for (let e = 0; e < a.length; e++)
    if (a[e] !== t[e])
      return !1;
  return !0;
}
function sa({
  delta: a,
  layout: t,
  panelConstraints: e,
  pivotIndices: n,
  trigger: l
}) {
  if (Fe(a, 0))
    return t;
  const s = [...t], [r, i] = n;
  ce(r != null), ce(i != null);
  let u = 0;
  if (l === "keyboard") {
    {
      const p = a < 0 ? i : r, c = e[p];
      if (ce(c), c.collapsible) {
        const f = t[p];
        ce(f != null);
        const m = e[p];
        ce(m);
        const { collapsedSize: g = 0, minSize: v = 0 } = m;
        if (Fe(f, g)) {
          const S = v - f;
          fa(S, Math.abs(a)) > 0 && (a = a < 0 ? 0 - S : S);
        }
      }
    }
    {
      const p = a < 0 ? r : i, c = e[p];
      ce(c);
      const { collapsible: f } = c;
      if (f) {
        const m = t[p];
        ce(m != null);
        const g = e[p];
        ce(g);
        const { collapsedSize: v = 0, minSize: S = 0 } = g;
        if (Fe(m, S)) {
          const x = m - v;
          fa(x, Math.abs(a)) > 0 && (a = a < 0 ? 0 - x : x);
        }
      }
    }
  }
  {
    const p = a < 0 ? 1 : -1;
    let c = a < 0 ? i : r, f = 0;
    for (; ; ) {
      const g = t[c];
      ce(g != null);
      const S = Lt({
        panelConstraints: e,
        panelIndex: c,
        size: 100
      }) - g;
      if (f += S, c += p, c < 0 || c >= e.length)
        break;
    }
    const m = Math.min(Math.abs(a), Math.abs(f));
    a = a < 0 ? 0 - m : m;
  }
  {
    let c = a < 0 ? r : i;
    for (; c >= 0 && c < e.length; ) {
      const f = Math.abs(a) - Math.abs(u), m = t[c];
      ce(m != null);
      const g = m - f, v = Lt({
        panelConstraints: e,
        panelIndex: c,
        size: g
      });
      if (!Fe(m, v) && (u += m - v, s[c] = v, u.toPrecision(3).localeCompare(Math.abs(a).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      a < 0 ? c-- : c++;
    }
  }
  if (Fe(u, 0))
    return t;
  {
    const p = a < 0 ? i : r, c = t[p];
    ce(c != null);
    const f = c + u, m = Lt({
      panelConstraints: e,
      panelIndex: p,
      size: f
    });
    if (s[p] = m, !Fe(m, f)) {
      let g = f - m, S = a < 0 ? i : r;
      for (; S >= 0 && S < e.length; ) {
        const x = s[S];
        ce(x != null);
        const D = x + g, y = Lt({
          panelConstraints: e,
          panelIndex: S,
          size: D
        });
        if (Fe(x, y) || (g -= y - x, s[S] = y), Fe(g, 0))
          break;
        a > 0 ? S-- : S++;
      }
    }
  }
  const d = s.reduce((p, c) => c + p, 0);
  return Fe(d, 100) ? s : t;
}
function Hs(a, t = document) {
  var n;
  if (!ha)
    return null;
  if (t instanceof HTMLElement && ((n = t == null ? void 0 : t.dataset) == null ? void 0 : n.panelGroupId) === a)
    return t;
  const e = t.querySelector(
    `[data-panel-group][data-panel-group-id="${a}"]`
  );
  return e || null;
}
function sn(a, t = document) {
  if (!ha)
    return null;
  const e = t.querySelector(`[data-panel-resize-handle-id="${a}"]`);
  return e || null;
}
function Ws(a, t, e = document) {
  return ha ? va(a, e).findIndex(
    (s) => s.getAttribute("data-panel-resize-handle-id") === t
  ) ?? null : null;
}
function va(a, t = document) {
  return ha ? Array.from(
    t.querySelectorAll(
      `[data-panel-resize-handle-id][data-panel-group-id="${a}"]`
    )
  ) : [];
}
function df(a, t, e, n = document) {
  var d, p;
  const l = sn(t, n), s = va(a, n), r = l ? s.indexOf(l) : -1, i = ((d = e[r]) == null ? void 0 : d.id) ?? null, u = ((p = e[r + 1]) == null ? void 0 : p.id) ?? null;
  return [i, u];
}
function cf(a, t, e, n, l) {
  const s = e === "horizontal", r = sn(t, l);
  ce(r);
  const i = r.getAttribute("data-panel-group-id");
  ce(i);
  const { initialCursorPosition: u } = n, d = Os(e, a), p = Hs(i, l);
  ce(p);
  const c = p.getBoundingClientRect(), f = s ? c.width : c.height;
  return (d - u) / f * 100;
}
function pf(a, t, e, n, l, s) {
  if (Rs(a)) {
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
    return n == null ? 0 : cf(
      a,
      t,
      e,
      n,
      s
    );
}
function ff({
  layout: a,
  panelsArray: t,
  pivotIndices: e
}) {
  let n = 0, l = 100, s = 0, r = 0;
  const i = e[0];
  ce(i != null), t.forEach((c, f) => {
    const { constraints: m } = c, { maxSize: g = 100, minSize: v = 0 } = m;
    f === i ? (n = v, l = g) : (s += v, r += g);
  });
  const u = Math.min(l, 100 - s), d = Math.max(n, 100 - r), p = a[i];
  return {
    valueMax: u,
    valueMin: d,
    valueNow: p
  };
}
function vf({
  panelDataArray: a
}) {
  const t = Array(a.length), e = a.map(
    (s) => s.constraints
  );
  let n = 0, l = 100;
  for (let s = 0; s < a.length; s++) {
    const r = e[s];
    ce(r);
    const { defaultSize: i } = r;
    i != null && (n++, t[s] = i, l -= i);
  }
  for (let s = 0; s < a.length; s++) {
    const r = e[s];
    ce(r);
    const { defaultSize: i } = r;
    if (i != null)
      continue;
    const u = a.length - n, d = l / u;
    n++, t[s] = d, l -= d;
  }
  return t;
}
function la(a, t, e) {
  t.forEach((n, l) => {
    const s = a[l];
    ce(s);
    const { callbacks: r, constraints: i, id: u } = s, { collapsedSize: d = 0, collapsible: p } = i, c = e[u];
    if (c == null || n !== c) {
      e[u] = n;
      const { onCollapse: f, onExpand: m, onResize: g } = r;
      g && g(n, c), p && (f || m) && (m && (c == null || c === d) && n !== d && m(), f && (c == null || c !== d) && n === d && f());
    }
  });
}
function mf(a, t = 10) {
  let e = null;
  return (...l) => {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      a(...l);
    }, t);
  };
}
function js(a, t, e) {
  const n = Ws(
    a,
    t,
    e
  );
  return n != null ? [n, n + 1] : [-1, -1];
}
function hf({
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
  if (!Fe(n, 100)) {
    console.warn(
      `WARNING: Invalid layout total size: ${e.map((s) => `${s}%`).join(", ")}. Layout normalization will be applied.`
    );
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      ce(r != null);
      const i = 100 / n * r;
      e[s] = i;
    }
  }
  let l = 0;
  for (let s = 0; s < t.length; s++) {
    const r = e[s];
    ce(r != null);
    const i = Lt({
      panelConstraints: t,
      panelIndex: s,
      size: r
    });
    r !== i && (l += r - i, e[s] = i);
  }
  if (!Fe(l, 0))
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      ce(r != null);
      const i = r + l, u = Lt({
        panelConstraints: t,
        panelIndex: s,
        size: i
      });
      if (r !== u && (l -= u - r, e[s] = u, Fe(l, 0)))
        break;
    }
  return e;
}
function Jo(a) {
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
function Us(a) {
  return `radix-vue:${a}`;
}
function Gs(a) {
  return a.map((t) => {
    const { constraints: e, id: n, idIsFromProps: l, order: s } = t;
    return l ? n : s ? `${s}:${JSON.stringify(e)}` : JSON.stringify(e);
  }).sort((t, e) => t.localeCompare(e)).join(",");
}
function qs(a, t) {
  try {
    const e = Us(a), n = t.getItem(e);
    if (n) {
      const l = JSON.parse(n);
      if (typeof l == "object" && l != null)
        return l;
    }
  } catch {
  }
  return null;
}
function yf(a, t, e) {
  const n = qs(a, e) ?? {}, l = Gs(t);
  return n[l] ?? null;
}
function gf(a, t, e, n, l) {
  const s = Us(a), r = Gs(t), i = qs(a, l) ?? {};
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
function bf({
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
    const u = va(
      t,
      i
    );
    for (let d = 0; d < n.length - 1; d++) {
      const { valueMax: p, valueMin: c, valueNow: f } = ff({
        layout: e.value,
        panelsArray: n,
        pivotIndices: [d, d + 1]
      }), m = u[d];
      if (m != null) {
        const g = n[d];
        ce(g), m.setAttribute("aria-controls", g.id), m.setAttribute(
          "aria-valuemax",
          `${Math.round(p)}`
        ), m.setAttribute(
          "aria-valuemin",
          `${Math.round(c)}`
        ), m.setAttribute(
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
    ce(u);
    const { panelDataArray: d } = u, p = Hs(t, i);
    ce(p != null, `No group found for id "${t}"`);
    const c = va(t, i);
    ce(c);
    const f = c.map((m) => {
      const g = m.getAttribute("data-panel-resize-handle-id");
      ce(g);
      const [v, S] = df(
        t,
        g,
        d,
        i
      );
      if (v == null || S == null)
        return () => {
        };
      const x = (D) => {
        if (!D.defaultPrevented)
          switch (D.key) {
            case "Enter": {
              D.preventDefault();
              const y = d.findIndex(
                (E) => E.id === v
              );
              if (y >= 0) {
                const E = d[y];
                ce(E);
                const P = e.value[y], {
                  collapsedSize: $ = 0,
                  collapsible: B,
                  minSize: O = 0
                } = E.constraints;
                if (P != null && B) {
                  const F = sa({
                    delta: Fe(P, $) ? O - $ : $ - P,
                    layout: e.value,
                    panelConstraints: d.map(
                      (k) => k.constraints
                    ),
                    pivotIndices: js(
                      t,
                      g,
                      i
                    ),
                    trigger: "keyboard"
                  });
                  e.value !== F && s(F);
                }
              }
              break;
            }
          }
      };
      return m.addEventListener("keydown", x), () => {
        m.removeEventListener("keydown", x);
      };
    });
    r(() => {
      f.forEach((m) => m());
    });
  });
}
const Cf = 100, ra = {
  getItem: (a) => (Jo(ra), ra.getItem(a)),
  setItem: (a, t) => {
    Jo(ra), ra.setItem(a, t);
  }
}, [Ys, _f] = Q("PanelGroup"), Xy = /* @__PURE__ */ _({
  __name: "SplitterGroup",
  props: {
    id: {},
    autoSaveId: { default: null },
    direction: {},
    keyboardResizeBy: { default: 10 },
    storage: { default: () => ra },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["layout"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = {}, s = me(e.id, "radix-vue-splitter-group"), r = _e(), { forwardRef: i, currentElement: u } = R(), d = T(null), p = T([]), c = T({}), f = T(/* @__PURE__ */ new Map()), m = T(0), g = I(() => ({
      autoSaveId: e.autoSaveId,
      direction: e.direction,
      dragState: d.value,
      id: s,
      keyboardResizeBy: e.keyboardResizeBy,
      storage: e.storage
    })), v = T({
      layout: p.value,
      panelDataArray: [],
      panelDataArrayChanged: !1
    }), S = (L) => p.value = L;
    bf({
      eagerValuesRef: v,
      groupId: s,
      layout: p,
      panelDataArray: v.value.panelDataArray,
      setLayout: S,
      panelGroupElement: u
    }), ye(() => {
      const { panelDataArray: L } = v.value, { autoSaveId: W } = e;
      if (W) {
        if (p.value.length === 0 || p.value.length !== L.length)
          return;
        let z = l[W];
        z || (z = mf(
          gf,
          Cf
        ), l[W] = z);
        const Z = [...L], U = new Map(
          f.value
        );
        z(
          W,
          Z,
          U,
          p.value,
          e.storage
        );
      }
    });
    function x(L, W) {
      const { panelDataArray: z } = v.value, Z = J(z, L);
      return ef({
        defaultSize: W,
        dragState: d.value,
        layout: p.value,
        panelData: z,
        panelIndex: Z
      });
    }
    function D(L) {
      const { panelDataArray: W } = v.value;
      W.push(L), W.sort((z, Z) => {
        const U = z.order, X = Z.order;
        return U == null && X == null ? 0 : U == null ? -1 : X == null ? 1 : U - X;
      }), v.value.panelDataArrayChanged = !0;
    }
    te(() => v.value.panelDataArrayChanged, () => {
      if (v.value.panelDataArrayChanged) {
        v.value.panelDataArrayChanged = !1;
        const { autoSaveId: L, storage: W } = g.value, { layout: z, panelDataArray: Z } = v.value;
        let U = null;
        if (L) {
          const ee = yf(L, Z, W);
          ee && (f.value = new Map(
            Object.entries(ee.expandToSizes)
          ), U = ee.layout);
        }
        U === null && (U = vf({
          panelDataArray: Z
        }));
        const X = hf({
          layout: U,
          panelConstraints: Z.map(
            (ee) => ee.constraints
          )
        });
        Tr(z, X) || (S(X), v.value.layout = X, n("layout", X), la(
          Z,
          X,
          c.value
        ));
      }
    });
    function y(L) {
      return function(z) {
        z.preventDefault();
        const Z = u.value;
        if (!Z)
          return () => null;
        const { direction: U, dragState: X, id: ee, keyboardResizeBy: fe } = g.value, { layout: G, panelDataArray: le } = v.value, { initialLayout: he } = X ?? {}, Se = js(
          ee,
          L,
          Z
        );
        let ge = pf(
          z,
          L,
          U,
          X,
          fe,
          Z
        );
        if (ge === 0)
          return;
        const Ie = U === "horizontal";
        r.value === "rtl" && Ie && (ge = -ge);
        const de = le.map((Ke) => Ke.constraints), Ee = sa({
          delta: ge,
          layout: he ?? G,
          panelConstraints: de,
          pivotIndices: Se,
          trigger: Rs(z) ? "keyboard" : "mouse-or-touch"
        }), Ve = !Ta(G, Ee);
        (As(z) || ks(z)) && m.value !== ge && (m.value = ge, Ve ? _n(L, 0) : Ie ? _n(
          L,
          ge < 0 ? Vs : Fs
        ) : _n(
          L,
          ge < 0 ? Ls : Ns
        )), Ve && (S(Ee), v.value.layout = Ee, n("layout", Ee), la(
          le,
          Ee,
          c.value
        ));
      };
    }
    function E(L, W) {
      const { layout: z, panelDataArray: Z } = v.value, U = Z.map((he) => he.constraints), { panelSize: X, pivotIndices: ee } = N(
        Z,
        L,
        z
      );
      ce(X != null);
      const G = J(Z, L) === Z.length - 1 ? X - W : W - X, le = sa({
        delta: G,
        layout: z,
        panelConstraints: U,
        pivotIndices: ee,
        trigger: "imperative-api"
      });
      Ta(z, le) || (S(le), v.value.layout = le, n("layout", le), la(
        Z,
        le,
        c.value
      ));
    }
    function P(L, W) {
      const { layout: z, panelDataArray: Z } = v.value, {
        collapsedSize: U = 0,
        collapsible: X
      } = W, {
        collapsedSize: ee = 0,
        collapsible: fe,
        maxSize: G = 100,
        minSize: le = 0
      } = L.constraints, { panelSize: he } = N(
        Z,
        L,
        z
      );
      he !== null && (X && fe && he === U ? U !== ee && E(L, ee) : he < le ? E(L, le) : he > G && E(L, G));
    }
    function $(L, W) {
      const { direction: z } = g.value, { layout: Z } = v.value;
      if (!u.value)
        return;
      const U = sn(
        L,
        u.value
      );
      ce(U);
      const X = Os(
        z,
        W
      );
      d.value = {
        dragHandleId: L,
        dragHandleRect: U.getBoundingClientRect(),
        initialCursorPosition: X,
        initialLayout: Z
      };
    }
    function B() {
      d.value = null;
    }
    function O(L) {
      const { panelDataArray: W } = v.value, z = J(W, L);
      z >= 0 && (W.splice(z, 1), delete c.value[L.id], v.value.panelDataArrayChanged = !0);
    }
    function F(L) {
      const { layout: W, panelDataArray: z } = v.value;
      if (L.constraints.collapsible) {
        const Z = z.map(
          (fe) => fe.constraints
        ), {
          collapsedSize: U = 0,
          panelSize: X,
          pivotIndices: ee
        } = N(z, L, W);
        if (ce(
          X != null,
          `Panel size not found for panel "${L.id}"`
        ), X !== U) {
          f.value.set(L.id, X);
          const G = J(z, L) === z.length - 1 ? X - U : U - X, le = sa({
            delta: G,
            layout: W,
            panelConstraints: Z,
            pivotIndices: ee,
            trigger: "imperative-api"
          });
          Ta(W, le) || (S(le), v.value.layout = le, n("layout", le), la(
            z,
            le,
            c.value
          ));
        }
      }
    }
    function k(L) {
      const { layout: W, panelDataArray: z } = v.value;
      if (L.constraints.collapsible) {
        const Z = z.map(
          (G) => G.constraints
        ), {
          collapsedSize: U = 0,
          panelSize: X,
          minSize: ee = 0,
          pivotIndices: fe
        } = N(z, L, W);
        if (X === U) {
          const G = f.value.get(
            L.id
          ), le = G != null && G >= ee ? G : ee, Se = J(z, L) === z.length - 1 ? X - le : le - X, ge = sa({
            delta: Se,
            layout: W,
            panelConstraints: Z,
            pivotIndices: fe,
            trigger: "imperative-api"
          });
          Ta(W, ge) || (S(ge), v.value.layout = ge, n("layout", ge), la(
            z,
            ge,
            c.value
          ));
        }
      }
    }
    function V(L) {
      const { layout: W, panelDataArray: z } = v.value, { panelSize: Z } = N(z, L, W);
      return ce(
        Z != null,
        `Panel size not found for panel "${L.id}"`
      ), Z;
    }
    function H(L) {
      const { layout: W, panelDataArray: z } = v.value, {
        collapsedSize: Z = 0,
        collapsible: U,
        panelSize: X
      } = N(z, L, W);
      return U === !0 && X === Z;
    }
    function Y(L) {
      const { layout: W, panelDataArray: z } = v.value, {
        collapsedSize: Z = 0,
        collapsible: U,
        panelSize: X
      } = N(z, L, W);
      return ce(
        X != null,
        `Panel size not found for panel "${L.id}"`
      ), !U || X > Z;
    }
    _f({
      direction: e.direction,
      dragState: d.value,
      groupId: s,
      reevaluatePanelConstraints: P,
      registerPanel: D,
      registerResizeHandle: y,
      resizePanel: E,
      startDragging: $,
      stopDragging: B,
      unregisterPanel: O,
      panelGroupElement: u,
      collapsePanel: F,
      expandPanel: k,
      isPanelCollapsed: H,
      isPanelExpanded: Y,
      getPanelSize: V,
      getPanelStyle: x
    });
    function J(L, W) {
      return L.findIndex(
        (z) => z === W || z.id === W.id
      );
    }
    function N(L, W, z) {
      const Z = J(L, W), X = Z === L.length - 1 ? [Z - 1, Z] : [Z, Z + 1], ee = z[Z];
      return {
        ...W.constraints,
        panelSize: ee,
        pivotIndices: X
      };
    }
    return (L, W) => (b(), w(o(A), {
      ref: o(i),
      style: Ce({
        display: "flex",
        flexDirection: L.direction === "horizontal" ? "row" : "column",
        height: "100%",
        overflow: "hidden",
        width: "100%"
      }),
      "data-panel-group": "",
      "data-orientation": L.direction,
      "data-panel-group-id": o(s)
    }, {
      default: h(() => [
        C(L.$slots, "default", { layout: p.value })
      ]),
      _: 3
    }, 8, ["style", "data-orientation", "data-panel-group-id"]));
  }
}), Zy = /* @__PURE__ */ _({
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
    const n = a, l = e, s = Ys();
    if (s === null)
      throw new Error(
        "SplitterPanel components must be rendered within a SplitterGroup container"
      );
    const { collapsePanel: r, expandPanel: i, getPanelSize: u, getPanelStyle: d, isPanelCollapsed: p, resizePanel: c, groupId: f, reevaluatePanelConstraints: m, registerPanel: g, unregisterPanel: v } = s, S = me(n.id, "radix-vue-splitter-panel"), x = I(() => ({
      callbacks: {
        onCollapse: () => l("collapse"),
        onExpand: () => l("expand"),
        onResize: (...P) => l("resize", ...P)
      },
      constraints: {
        collapsedSize: n.collapsedSize,
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
    te(() => x.value.constraints, (P, $) => {
      (P.collapsedSize !== $.collapsedSize || P.collapsible !== $.collapsible || P.maxSize !== $.maxSize || P.minSize !== $.minSize) && m(x.value, P);
    }, { deep: !0 }), oe(() => {
      const P = x.value;
      g(P), Te(() => {
        v(P);
      });
    });
    const D = I(() => d(x.value, n.defaultSize)), y = I(() => p(x.value)), E = I(() => !y.value);
    return t({
      /** If panel is `collapsible`, collapse it fully. */
      collapse: () => {
        r(x.value);
      },
      /** If panel is currently collapsed, expand it to its most recent size. */
      expand: () => {
        i(x.value);
      },
      /** Gets the current size of the panel as a percentage (1 - 100). */
      getSize() {
        return u(x.value);
      },
      /** Resize panel to the specified percentage (1 - 100). */
      resize: (P) => {
        c(x.value, P);
      },
      /** Returns `true` if the panel is currently collapsed */
      isCollapsed: y,
      /** Returns `true` if the panel is currently not collapsed */
      isExpanded: E
    }), (P, $) => (b(), w(o(A), {
      id: o(S),
      style: Ce(D.value),
      "data-panel": "",
      "data-panel-collapsible": P.collapsible || void 0,
      "data-panel-group-id": o(f),
      "data-panel-id": o(S),
      "data-panel-size": Number.parseFloat(`${D.value.flexGrow}`).toFixed(1),
      "data-state": P.collapsible ? y.value ? "collapsed" : "expanded" : void 0
    }, {
      default: h(() => [
        C(P.$slots, "default", {
          isCollapsed: y.value,
          isExpanded: E.value
        })
      ]),
      _: 3
    }, 8, ["id", "style", "data-panel-collapsible", "data-panel-group-id", "data-panel-id", "data-panel-size", "data-state"]));
  }
});
function wf({
  disabled: a,
  handleId: t,
  resizeHandler: e,
  panelGroupElement: n
}) {
  ye((l) => {
    const s = n.value;
    if (a.value || e.value === null || s === null)
      return;
    const r = sn(t, s);
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
            const p = r.getAttribute("data-panel-group-id");
            ce(p);
            const c = va(
              p,
              s
            ), f = Ws(
              p,
              t,
              s
            );
            ce(f !== null);
            const m = u.shiftKey ? f > 0 ? f - 1 : c.length - 1 : f + 1 < c.length ? f + 1 : 0;
            c[m].focus();
            break;
          }
        }
    };
    r.addEventListener("keydown", i), l(() => {
      r.removeEventListener("keydown", i);
    });
  });
}
const Jy = /* @__PURE__ */ _({
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
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), { disabled: r } = ne(e), i = Ys();
    if (i === null)
      throw new Error(
        "PanelResizeHandle components must be rendered within a PanelGroup container"
      );
    const {
      direction: u,
      groupId: d,
      registerResizeHandle: p,
      startDragging: c,
      stopDragging: f,
      panelGroupElement: m
    } = i, g = me(e.id, "radix-vue-splitter-resize-handle"), v = T("inactive"), S = T(!1), x = T(null);
    return te(r, () => {
      ha && (r.value ? x.value = null : x.value = p(g));
    }, { immediate: !0 }), ye((D) => {
      var P, $;
      if (r.value || x.value === null)
        return;
      const y = s.value;
      if (!y)
        return;
      ce(y);
      const E = (B, O, F) => {
        var k;
        if (O)
          switch (B) {
            case "down": {
              v.value = "drag", c(g, F), n("dragging", !0);
              break;
            }
            case "move": {
              v.value !== "drag" && (v.value = "hover"), (k = x.value) == null || k.call(x, F);
              break;
            }
            case "up": {
              v.value = "hover", f(), n("dragging", !1);
              break;
            }
          }
        else
          v.value = "inactive";
      };
      D(uf(
        g,
        y,
        u,
        {
          // Coarse inputs (e.g. finger/touch)
          coarse: ((P = e.hitAreaMargins) == null ? void 0 : P.coarse) ?? 15,
          // Fine inputs (e.g. mouse)
          fine: (($ = e.hitAreaMargins) == null ? void 0 : $.fine) ?? 5
        },
        E
      ));
    }), wf({
      disabled: r,
      resizeHandler: x,
      handleId: g,
      panelGroupElement: m
    }), (D, y) => (b(), w(o(A), {
      id: o(g),
      ref: o(l),
      style: {
        touchAction: "none",
        userSelect: "none"
      },
      role: "separator",
      "data-resize-handle": "",
      tabindex: D.tabindex,
      "data-state": v.value,
      "data-disabled": o(r) ? "" : void 0,
      "data-orientation": o(u),
      "data-panel-group-id": o(d),
      "data-resize-handle-active": v.value === "drag" ? "pointer" : S.value ? "keyboard" : void 0,
      "data-resize-handle-state": v.value,
      "data-panel-resize-handle-enabled": !o(r),
      "data-panel-resize-handle-id": o(g),
      onBlur: y[0] || (y[0] = (E) => S.value = !1),
      onFocus: y[1] || (y[1] = (E) => S.value = !1)
    }, {
      default: h(() => [
        C(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "tabindex", "data-state", "data-disabled", "data-orientation", "data-panel-group-id", "data-resize-handle-active", "data-resize-handle-state", "data-panel-resize-handle-enabled", "data-panel-resize-handle-id"]));
  }
}), [Bo, xf] = Q("StepperRoot"), Qy = /* @__PURE__ */ _({
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
    const e = a, n = t, { dir: l, orientation: s, linear: r } = ne(e), i = _e(l);
    R();
    const u = T(/* @__PURE__ */ new Set()), d = T(/* @__PURE__ */ new Set()), p = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    });
    return xf({
      modelValue: p,
      changeModelValue: (c) => {
        p.value = c;
      },
      orientation: s,
      dir: i,
      linear: r,
      stepperItems: u,
      totalStepperItems: d
    }), (c, f) => (b(), w(o(A), {
      role: "group",
      "aria-label": "progress",
      as: c.as,
      "as-child": c.asChild,
      "data-linear": o(r) ? "" : void 0,
      "data-orientation": c.orientation
    }, {
      default: h(() => [
        C(c.$slots, "default", { modelValue: o(p) }),
        Ue("div", {
          "aria-live": "polite",
          "aria-atomic": "true",
          role: "status",
          style: Ce({
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          })
        }, " Step " + $e(o(p)) + " of " + $e(d.value.size), 5)
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-linear", "data-orientation"]));
  }
}), [wa, Sf] = Q("StepperItem"), eg = /* @__PURE__ */ _({
  __name: "StepperItem",
  props: {
    step: {},
    disabled: { type: Boolean, default: !1 },
    completed: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { disabled: e, step: n, completed: l } = ne(t), { forwardRef: s } = R(), r = Bo(), i = me(void 0, "radix-vue-stepper-item-title"), u = me(void 0, "radix-vue-stepper-item-description"), d = I(() => l.value ? "completed" : r.modelValue.value === n.value ? "active" : r.modelValue.value > n.value ? "completed" : "inactive"), p = I(() => e.value ? !1 : r.linear.value ? n.value <= r.modelValue.value || n.value === r.modelValue.value + 1 : !0);
    return Sf({
      titleId: i,
      descriptionId: u,
      state: d,
      disabled: e,
      step: n,
      isFocusable: p
    }), (c, f) => (b(), w(o(A), {
      ref: o(s),
      as: c.as,
      "as-child": c.asChild,
      "aria-current": d.value === "active" ? "true" : void 0,
      "data-state": d.value,
      disabled: o(e) || !p.value ? "" : void 0,
      "data-disabled": o(e) || !p.value ? "" : void 0,
      "data-orientation": o(r).orientation.value
    }, {
      default: h(() => [
        C(c.$slots, "default", { state: d.value })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-current", "data-state", "disabled", "data-disabled", "data-orientation"]));
  }
}), tg = /* @__PURE__ */ _({
  __name: "StepperTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = Bo(), e = wa(), n = et(), l = I(() => Array.from(t.stepperItems.value));
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
      d.preventDefault(), !e.disabled.value && ((d.key === n.ENTER || d.key === n.SPACE) && !d.ctrlKey && !d.shiftKey && t.changeModelValue(e.step.value), [n.ARROW_LEFT, n.ARROW_RIGHT, n.ARROW_UP, n.ARROW_DOWN].includes(d.key) && $t(d, document.activeElement, void 0, {
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
    }), te(e.isFocusable, (d) => {
      d ? t.stepperItems.value.add(u.value) : t.stepperItems.value.delete(u.value);
    }), (d, p) => (b(), w(o(A), {
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
      default: h(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child", "data-state", "disabled", "data-disabled", "data-orientation", "tabindex", "aria-describedby", "aria-labelledby"]));
  }
}), ag = /* @__PURE__ */ _({
  __name: "StepperDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    R();
    const e = wa();
    return (n, l) => (b(), w(o(A), M(t, {
      id: o(e).descriptionId
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ng = /* @__PURE__ */ _({
  __name: "StepperTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h4" }
  },
  setup(a) {
    const t = a, e = wa();
    return R(), (n, l) => (b(), w(o(A), M(t, {
      id: o(e).titleId
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), og = /* @__PURE__ */ _({
  __name: "StepperIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = wa();
    return R(), (n, l) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve(" Step " + $e(o(e).step.value), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), lg = /* @__PURE__ */ _({
  __name: "StepperSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Bo(), n = wa();
    return R(), (l, s) => (b(), w(o(Fp), M(t, {
      decorative: "",
      orientation: o(e).orientation.value,
      "data-state": o(n).state.value
    }), {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["orientation", "data-state"]));
  }
}), Ef = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Pf, Df] = Q("SwitchRoot"), sg = /* @__PURE__ */ _({
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
    const { forwardRef: i, currentElement: u } = R(), d = Qe(u), p = I(() => {
      var c;
      return e.id && u.value ? (c = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return Df({
      checked: s,
      toggleCheck: r,
      disabled: l
    }), (c, f) => (b(), ue(we, null, [
      q(o(A), M(c.$attrs, {
        id: c.id,
        ref: o(i),
        role: "switch",
        type: c.as === "button" ? "button" : void 0,
        value: c.value,
        "aria-label": c.$attrs["aria-label"] || p.value,
        "aria-checked": o(s),
        "aria-required": c.required,
        "data-state": o(s) ? "checked" : "unchecked",
        "data-disabled": o(l) ? "" : void 0,
        "as-child": c.asChild,
        as: c.as,
        disabled: o(l),
        onClick: r,
        onKeydown: re(ie(r, ["prevent"]), ["enter"])
      }), {
        default: h(() => [
          C(c.$slots, "default", { checked: o(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      o(d) ? (b(), ue("input", {
        key: 0,
        type: "checkbox",
        name: c.name,
        tabindex: "-1",
        "aria-hidden": "",
        disabled: o(l),
        required: c.required,
        value: c.value,
        checked: !!o(s),
        "data-state": o(s) ? "checked" : "unchecked",
        "data-disabled": o(l) ? "" : void 0,
        style: Ce({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, Ef)) : pe("", !0)
    ], 64));
  }
}), rg = /* @__PURE__ */ _({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = Pf();
    return R(), (e, n) => {
      var l;
      return b(), w(o(A), {
        "data-state": (l = o(t).checked) != null && l.value ? "checked" : "unchecked",
        "data-disabled": o(t).disabled.value ? "" : void 0,
        "as-child": e.asChild,
        as: e.as
      }, {
        default: h(() => [
          C(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [rn, $f] = Q("TabsRoot"), ig = /* @__PURE__ */ _({
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
    const e = a, n = t, { orientation: l, dir: s } = ne(e), r = _e(s);
    R();
    const i = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), u = T();
    return $f({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: l,
      dir: r,
      activationMode: e.activationMode,
      baseId: me(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, p) => (b(), w(o(A), {
      dir: o(r),
      "data-orientation": o(l),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: h(() => [
        C(d.$slots, "default", { modelValue: o(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), ug = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { loop: e } = ne(t), { forwardRef: n, currentElement: l } = R(), s = rn();
    return s.tabsList = l, (r, i) => (b(), w(o(At), {
      "as-child": "",
      orientation: o(s).orientation.value,
      dir: o(s).dir.value,
      loop: o(e)
    }, {
      default: h(() => [
        q(o(A), {
          ref: o(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": o(s).orientation.value
        }, {
          default: h(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Xs(a, t) {
  return `${a}-trigger-${t}`;
}
function Zs(a, t) {
  return `${a}-content-${t}`;
}
const dg = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = rn(), l = I(() => Xs(n.baseId, t.value)), s = I(() => Zs(n.baseId, t.value)), r = I(() => t.value === n.modelValue.value), i = T(r.value);
    return oe(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (b(), w(o(De), {
      present: r.value,
      "force-mount": ""
    }, {
      default: h(({ present: p }) => [
        q(o(A), {
          id: s.value,
          ref: o(e),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": o(n).orientation.value,
          "aria-labelledby": l.value,
          hidden: !p.value,
          tabindex: "0",
          style: Ce({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: h(() => [
            u.forceMount || r.value ? C(u.$slots, "default", { key: 0 }) : pe("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), cg = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = rn(), l = I(() => Xs(n.baseId, t.value)), s = I(() => Zs(n.baseId, t.value)), r = I(() => t.value === n.modelValue.value);
    return (i, u) => (b(), w(o(kt), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: h(() => [
        q(o(A), {
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
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), pg = /* @__PURE__ */ _({
  __name: "TabsIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = rn();
    R();
    const n = T(), l = T({
      size: null,
      position: null
    });
    te(() => e.modelValue.value, async (r) => {
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
    return (r, i) => typeof l.value.size == "number" ? (b(), w(o(A), M({ key: 0 }, t, {
      style: {
        "--radix-tabs-indicator-size": `${l.value.size}px`,
        "--radix-tabs-indicator-position": `${l.value.position}px`
      }
    }), {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"])) : pe("", !0);
  }
}), [un, If] = Q("TagsInputRoot"), fg = /* @__PURE__ */ _({
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
    const e = a, n = t, { addOnPaste: l, disabled: s, delimiter: r, max: i, id: u, dir: d, addOnBlur: p, addOnTab: c } = ne(e), f = _e(d), m = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: !0,
      deep: !0
    }), { forwardRef: g, currentElement: v } = R(), { focused: S } = di(v), x = Qe(v), { getItems: D } = Gt(), y = T(), E = T(!1);
    return If({
      modelValue: m,
      onAddValue: (P) => {
        const $ = m.value.length > 0 && typeof m.value[0] == "object", B = m.value.length > 0 && typeof e.defaultValue[0] == "object";
        if (($ || B) && typeof e.convertValue != "function")
          throw new Error("You must provide a `convertValue` function when using objects as values.");
        const O = e.convertValue ? e.convertValue(P) : P;
        if (m.value.length >= i.value && i.value)
          return n("invalid", O), !1;
        if (e.duplicate)
          return m.value.push(O), !0;
        if (m.value.includes(O))
          E.value = !0;
        else
          return m.value.push(O), !0;
        return n("invalid", O), !1;
      },
      onRemoveValue: (P) => {
        P !== -1 && m.value.splice(P, 1);
      },
      onInputKeydown: (P) => {
        const $ = P.target, B = D().map((F) => F.ref).filter((F) => F.dataset.disabled !== "");
        if (!B.length)
          return;
        const O = B.at(-1);
        switch (P.key) {
          case "Delete":
          case "Backspace": {
            if ($.selectionStart !== 0 || $.selectionEnd !== 0)
              break;
            if (y.value) {
              const F = B.findIndex((k) => k === y.value);
              m.value.splice(F, 1), y.value = y.value === O ? B.at(F - 1) : B.at(F + 1), P.preventDefault();
            } else
              P.key === "Backspace" && (y.value = O, P.preventDefault());
            break;
          }
          case "Home":
          case "End":
          case "ArrowRight":
          case "ArrowLeft": {
            const F = P.key === "ArrowRight" && f.value === "ltr" || P.key === "ArrowLeft" && f.value === "rtl", k = !F;
            if ($.selectionStart !== 0 || $.selectionEnd !== 0)
              break;
            if (k && !y.value)
              y.value = O, P.preventDefault();
            else if (F && O && y.value === O)
              y.value = void 0, P.preventDefault();
            else if (y.value) {
              const V = $t(P, y.value, void 0, {
                itemsArray: B,
                loop: !1,
                dir: f.value
              });
              V && (y.value = V), P.preventDefault();
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
      addOnBlur: p,
      addOnTab: c,
      dir: f,
      disabled: s,
      delimiter: r,
      max: i,
      id: u,
      displayValue: e.displayValue
    }), (P, $) => (b(), w(o(qt), null, {
      default: h(() => [
        q(o(A), {
          ref: o(g),
          dir: o(f),
          as: P.as,
          "as-child": P.asChild,
          "data-invalid": E.value ? "" : void 0,
          "data-disabled": o(s) ? "" : void 0,
          "data-focused": o(S) ? "" : void 0
        }, {
          default: h(() => [
            C(P.$slots, "default", { modelValue: o(m) }),
            o(x) && P.name ? (b(), w(o(eo), {
              key: 0,
              name: P.name,
              value: o(m),
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
}), vg = /* @__PURE__ */ _({
  __name: "TagsInputInput",
  props: {
    placeholder: {},
    autoFocus: { type: Boolean },
    maxLength: {},
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = un(), { forwardRef: n, currentElement: l } = R();
    function s(p) {
      if (!e.addOnBlur.value)
        return;
      const c = p.target;
      if (!c.value)
        return;
      e.onAddValue(c.value) && (c.value = "");
    }
    function r(p) {
      e.addOnTab.value && i(p);
    }
    async function i(p) {
      if (await se(), p.defaultPrevented)
        return;
      const c = p.target;
      if (!c.value)
        return;
      e.onAddValue(c.value) && (c.value = ""), p.preventDefault();
    }
    function u(p) {
      e.isInvalidInput.value = !1;
      const c = e.delimiter.value;
      if (c === p.data) {
        const f = p.target;
        f.value = f.value.replaceAll(c, ""), e.onAddValue(f.value) && (f.value = "");
      }
    }
    function d(p) {
      if (e.addOnPaste.value) {
        p.preventDefault();
        const c = p.clipboardData;
        if (!c)
          return;
        const f = c.getData("text");
        e.delimiter.value ? f.split(e.delimiter.value).forEach((g) => {
          e.onAddValue(g);
        }) : e.onAddValue(f);
      }
    }
    return oe(() => {
      const p = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      p && setTimeout(() => {
        t.autoFocus && (p == null || p.focus());
      }, 1);
    }), (p, c) => {
      var f;
      return b(), w(o(A), {
        id: (f = o(e).id) == null ? void 0 : f.value,
        ref: o(n),
        type: "text",
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        as: p.as,
        "as-child": p.asChild,
        maxlength: p.maxLength,
        placeholder: p.placeholder,
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
        default: h(() => [
          C(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "as", "as-child", "maxlength", "placeholder", "disabled", "data-invalid", "onKeydown"]);
    };
  }
}), [Js, Bf] = Q("TagsInputItem"), mg = /* @__PURE__ */ _({
  __name: "TagsInputItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { value: e } = ne(t), n = un(), { forwardRef: l, currentElement: s } = R(), r = I(() => n.selectedElement.value === s.value), i = I(() => t.disabled || n.disabled.value), u = Bf({
      value: e,
      isSelected: r,
      disabled: i,
      textId: "",
      displayValue: I(() => n.displayValue(e.value))
    });
    return (d, p) => (b(), w(o(Yt), null, {
      default: h(() => [
        q(o(A), {
          ref: o(l),
          as: d.as,
          "as-child": d.asChild,
          "aria-labelledby": o(u).textId,
          "aria-current": r.value,
          "data-disabled": i.value ? "" : void 0,
          "data-state": r.value ? "active" : "inactive"
        }, {
          default: h(() => [
            C(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "aria-labelledby", "aria-current", "data-disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), hg = /* @__PURE__ */ _({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Js();
    return R(), e.textId || (e.textId = me(void 0, "radix-vue-tags-input-item-text")), (n, l) => (b(), w(o(A), M(t, {
      id: o(e).textId
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          ve($e(o(e).displayValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), yg = /* @__PURE__ */ _({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = un(), n = Js(), l = I(() => {
      var r;
      return ((r = n.disabled) == null ? void 0 : r.value) || e.disabled.value;
    });
    function s() {
      if (l.value)
        return;
      const r = e.modelValue.value.findIndex((i) => i === n.value.value);
      e.onRemoveValue(r);
    }
    return (r, i) => (b(), w(o(A), M({ tabindex: "-1" }, t, {
      "aria-labelledby": o(n).textId,
      "aria-current": o(n).isSelected.value,
      "data-state": o(n).isSelected.value ? "active" : "inactive",
      "data-disabled": l.value ? "" : void 0,
      type: r.as === "button" ? "button" : void 0,
      onClick: s
    }), {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby", "aria-current", "data-state", "data-disabled", "type"]));
  }
}), gg = /* @__PURE__ */ _({
  __name: "TagsInputClear",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = un();
    function n() {
      e.disabled.value || (e.modelValue.value = []);
    }
    return (l, s) => (b(), w(o(A), M(t, {
      type: l.as === "button" ? "button" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      onClick: n
    }), {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "data-disabled"]));
  }
}), [dn, Tf] = Q("ToastProvider"), bg = /* @__PURE__ */ _({
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
      const p = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(p);
    }
    return Tf({
      label: e,
      duration: n,
      swipeDirection: l,
      swipeThreshold: s,
      toastCount: i,
      viewport: r,
      onViewportChange(p) {
        r.value = p;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (p, c) => C(p.$slots, "default");
  }
}), Rf = "toast.swipeStart", Af = "toast.swipeMove", kf = "toast.swipeCancel", Of = "toast.swipeEnd", Bn = "toast.viewportPause", Tn = "toast.viewportResume";
function Ra(a, t, e) {
  const n = e.originalEvent.currentTarget, l = new CustomEvent(a, {
    bubbles: !1,
    cancelable: !0,
    detail: e
  });
  t && n.addEventListener(a, t, { once: !0 }), n.dispatchEvent(l);
}
function Qo(a, t, e = 0) {
  const n = Math.abs(a.x), l = Math.abs(a.y), s = n > l;
  return t === "left" || t === "right" ? s && n > e : !s && l > e;
}
function Mf(a) {
  return a.nodeType === a.ELEMENT_NODE;
}
function Qs(a) {
  const t = [];
  return Array.from(a.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Mf(n)) {
      const l = n.ariaHidden || n.hidden || n.style.display === "none", s = n.dataset.radixToastAnnounceExclude === "";
      if (!l)
        if (s) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Qs(n));
    }
  }), t;
}
const Vf = /* @__PURE__ */ _({
  __name: "ToastAnnounce",
  setup(a) {
    const t = dn(), e = ni(1e3), n = T(!1);
    return xl(() => {
      n.value = !0;
    }), (l, s) => o(e) || n.value ? (b(), w(o(Qt), { key: 0 }, {
      default: h(() => [
        ve($e(o(t).label.value) + " ", 1),
        C(l.$slots, "default")
      ]),
      _: 3
    })) : pe("", !0);
  }
}), [Ff, Lf] = Q("ToastRoot"), Nf = /* @__PURE__ */ _({
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
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = dn(), i = T(null), u = T(null), d = I(() => e.duration || r.duration.value), p = T(0), c = T(d.value), f = T(0), m = T(d.value), g = xl(() => {
      const D = (/* @__PURE__ */ new Date()).getTime() - p.value;
      m.value = Math.max(c.value - D, 0);
    }, { fpsLimit: 60 });
    function v(D) {
      !D || D === Number.POSITIVE_INFINITY || (window.clearTimeout(f.value), p.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(S, D));
    }
    function S() {
      var y, E;
      ((y = s.value) == null ? void 0 : y.contains(document.activeElement)) && ((E = r.viewport.value) == null || E.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const x = I(() => s.value ? Qs(s.value) : null);
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const D = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(D);
    }
    return ye((D) => {
      const y = r.viewport.value;
      if (y) {
        const E = () => {
          v(c.value), g.resume(), n("resume");
        }, P = () => {
          const $ = (/* @__PURE__ */ new Date()).getTime() - p.value;
          c.value = c.value - $, window.clearTimeout(f.value), g.pause(), n("pause");
        };
        return y.addEventListener(Bn, P), y.addEventListener(Tn, E), () => {
          y.removeEventListener(Bn, P), y.removeEventListener(Tn, E);
        };
      }
    }), te(() => [e.open, d.value], () => {
      c.value = d.value, e.open && !r.isClosePausedRef.value && v(d.value);
    }, { immediate: !0 }), zn("Escape", (D) => {
      n("escapeKeyDown", D), D.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, S());
    }), oe(() => {
      r.onToastAdd();
    }), Te(() => {
      r.onToastRemove();
    }), Lf({ onClose: S }), (D, y) => (b(), ue(we, null, [
      x.value ? (b(), w(Vf, {
        key: 0,
        role: "status",
        "aria-live": D.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: h(() => [
          ve($e(x.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : pe("", !0),
      (b(), w(Wt, {
        to: o(r).viewport.value
      }, [
        q(o(A), M({
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
          onPointerdown: y[0] || (y[0] = ie((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: y[1] || (y[1] = (E) => {
            if (!i.value)
              return;
            const P = E.clientX - i.value.x, $ = E.clientY - i.value.y, B = !!u.value, O = ["left", "right"].includes(o(r).swipeDirection.value), F = ["left", "up"].includes(o(r).swipeDirection.value) ? Math.min : Math.max, k = O ? F(0, P) : 0, V = O ? 0 : F(0, $), H = E.pointerType === "touch" ? 10 : 2, Y = { x: k, y: V }, J = { originalEvent: E, delta: Y };
            B ? (u.value = Y, o(Ra)(o(Af), (N) => n("swipeMove", N), J)) : o(Qo)(Y, o(r).swipeDirection.value, H) ? (u.value = Y, o(Ra)(o(Rf), (N) => n("swipeStart", N), J), E.target.setPointerCapture(E.pointerId)) : (Math.abs(P) > H || Math.abs($) > H) && (i.value = null);
          }),
          onPointerup: y[2] || (y[2] = (E) => {
            const P = u.value, $ = E.target;
            if ($.hasPointerCapture(E.pointerId) && $.releasePointerCapture(E.pointerId), u.value = null, i.value = null, P) {
              const B = E.currentTarget, O = { originalEvent: E, delta: P };
              o(Qo)(P, o(r).swipeDirection.value, o(r).swipeThreshold.value) ? o(Ra)(o(Of), (F) => n("swipeEnd", F), O) : o(Ra)(o(kf), (F) => n("swipeCancel", F), O), B == null || B.addEventListener("click", (F) => F.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: h(() => [
            C(D.$slots, "default", { remaining: m.value })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"]))
    ], 64));
  }
}), Cg = /* @__PURE__ */ _({
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
    return (r, i) => (b(), w(o(De), {
      present: r.forceMount || o(s)
    }, {
      default: h(() => [
        q(Nf, M({
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
            const { x: d, y: p } = u.detail.delta, c = u.currentTarget;
            c.setAttribute("data-swipe", "move"), c.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), c.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: p } = u.detail.delta, c = u.currentTarget;
            c.setAttribute("data-swipe", "end"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), c.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), s.value = !1;
          })
        }), {
          default: h(({ remaining: u }) => [
            C(r.$slots, "default", {
              remaining: u,
              open: o(s)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), er = /* @__PURE__ */ _({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    return (t, e) => (b(), w(o(A), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: h(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), zf = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Ff(), { forwardRef: n } = R();
    return (l, s) => (b(), w(er, { "as-child": "" }, {
      default: h(() => [
        q(o(A), M(t, {
          ref: o(n),
          type: l.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (r) => o(e).onClose())
        }), {
          default: h(() => [
            C(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), _g = /* @__PURE__ */ _({
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
    return (n, l) => n.altText ? (b(), w(er, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: h(() => [
        q(zf, {
          ref: o(e),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: h(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : pe("", !0);
  }
}), el = /* @__PURE__ */ _({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(a, { emit: t }) {
    const e = t, n = dn();
    return (l, s) => (b(), w(o(Qt), {
      "aria-hidden": "",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (r) => {
        var d;
        const i = r.relatedTarget;
        !((d = o(n).viewport.value) != null && d.contains(i)) && e("focusFromOutsideViewport");
      })
    }, {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }));
  }
}), wg = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(a) {
    const t = a, { hotkey: e, label: n } = ne(t), { forwardRef: l, currentElement: s } = R(), { createCollection: r } = Me(), i = r(s), u = dn(), d = I(() => u.toastCount.value > 0), p = T(), c = T(), f = I(() => e.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    zn(e.value, () => {
      s.value.focus();
    }), oe(() => {
      u.onViewportChange(s.value);
    }), ye((g) => {
      const v = s.value;
      if (d.value && v) {
        const S = () => {
          if (!u.isClosePausedRef.value) {
            const P = new CustomEvent(Bn);
            v.dispatchEvent(P), u.isClosePausedRef.value = !0;
          }
        }, x = () => {
          if (u.isClosePausedRef.value) {
            const P = new CustomEvent(Tn);
            v.dispatchEvent(P), u.isClosePausedRef.value = !1;
          }
        }, D = (P) => {
          !v.contains(P.relatedTarget) && x();
        }, y = () => {
          v.contains(document.activeElement) || x();
        }, E = (P) => {
          var O, F, k;
          const $ = P.altKey || P.ctrlKey || P.metaKey;
          if (P.key === "Tab" && !$) {
            const V = document.activeElement, H = P.shiftKey;
            if (P.target === v && H) {
              (O = p.value) == null || O.focus();
              return;
            }
            const N = m({ tabbingDirection: H ? "backwards" : "forwards" }), L = N.findIndex((W) => W === V);
            Aa(N.slice(L + 1)) ? P.preventDefault() : H ? (F = p.value) == null || F.focus() : (k = c.value) == null || k.focus();
          }
        };
        v.addEventListener("focusin", S), v.addEventListener("focusout", D), v.addEventListener("pointermove", S), v.addEventListener("pointerleave", y), v.addEventListener("keydown", E), window.addEventListener("blur", S), window.addEventListener("focus", x), g(() => {
          v.removeEventListener("focusin", S), v.removeEventListener("focusout", D), v.removeEventListener("pointermove", S), v.removeEventListener("pointerleave", y), v.removeEventListener("keydown", E), window.removeEventListener("blur", S), window.removeEventListener("focus", x);
        });
      }
    });
    function m({ tabbingDirection: g }) {
      const S = i.value.map((x) => {
        const D = [x, ...Zn(x)];
        return g === "forwards" ? D : D.reverse();
      });
      return (g === "forwards" ? S.reverse() : S).flat();
    }
    return (g, v) => (b(), w(o(Yi), {
      role: "region",
      "aria-label": typeof o(n) == "string" ? o(n).replace("{hotkey}", f.value) : o(n)(f.value),
      tabindex: "-1",
      style: Ce({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: h(() => [
        d.value ? (b(), w(el, {
          key: 0,
          ref: (S) => {
            p.value = o(Be)(S);
          },
          onFocusFromOutsideViewport: v[0] || (v[0] = () => {
            const S = m({
              tabbingDirection: "forwards"
            });
            o(Aa)(S);
          })
        }, null, 512)) : pe("", !0),
        q(o(A), M({
          ref: o(l),
          tabindex: "-1",
          as: g.as,
          "as-child": g.asChild
        }, g.$attrs), {
          default: h(() => [
            C(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (b(), w(el, {
          key: 1,
          ref: (S) => {
            c.value = o(Be)(S);
          },
          onFocusFromOutsideViewport: v[1] || (v[1] = () => {
            const S = m({
              tabbingDirection: "backwards"
            });
            o(Aa)(S);
          })
        }, null, 512)) : pe("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), xg = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sg = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(A), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kf = /* @__PURE__ */ _({
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
    return (i, u) => (b(), w(o(A), {
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
        C(i.$slots, "default", { pressed: o(l) })
      ]),
      _: 3
    }, 8, ["type", "as-child", "as", "aria-pressed", "data-state", "data-disabled", "disabled"]));
  }
}), [Hf, Wf] = Q("ToggleGroupRoot"), jf = /* @__PURE__ */ _({
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
    const e = a, n = t, { loop: l, rovingFocus: s, disabled: r, dir: i } = ne(e), u = _e(i), { forwardRef: d } = R(), { modelValue: p, changeModelValue: c, isSingle: f } = Rl(e, n);
    return Wf({
      isSingle: f,
      modelValue: p,
      changeModelValue: c,
      dir: u,
      orientation: e.orientation,
      loop: l,
      rovingFocus: s,
      disabled: r
    }), (m, g) => (b(), w(Ge(o(s) ? o(At) : o(A)), {
      "as-child": "",
      orientation: o(s) ? m.orientation : void 0,
      dir: o(u),
      loop: o(s) ? o(l) : void 0
    }, {
      default: h(() => [
        q(o(A), {
          ref: o(d),
          role: "group",
          "as-child": m.asChild,
          as: m.as
        }, {
          default: h(() => [
            C(m.$slots, "default", { modelValue: o(p) })
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), Uf = /* @__PURE__ */ _({
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
    const t = a, e = Hf(), n = I(() => {
      var i;
      return ((i = e.disabled) == null ? void 0 : i.value) || t.disabled;
    }), l = I(() => {
      var i;
      return (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), s = I(() => {
      var i;
      return e.isSingle.value ? e.modelValue.value === t.value : (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), { forwardRef: r } = R();
    return (i, u) => (b(), w(Ge(o(e).rovingFocus.value ? o(kt) : o(A)), {
      "as-child": "",
      focusable: !n.value,
      active: l.value
    }, {
      default: h(() => [
        q(o(Kf), M(t, {
          ref: o(r),
          disabled: n.value,
          pressed: s.value,
          "onUpdate:pressed": u[0] || (u[0] = (d) => o(e).changeModelValue(i.value))
        }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["disabled", "pressed"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [tr, Gf] = Q("ToolbarRoot"), Eg = /* @__PURE__ */ _({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { orientation: e, dir: n } = ne(t), l = _e(n), { forwardRef: s } = R();
    return Gf({ orientation: e, dir: l }), (r, i) => (b(), w(o(At), {
      "as-child": "",
      orientation: o(e),
      dir: o(l),
      loop: r.loop
    }, {
      default: h(() => [
        q(o(A), {
          ref: o(s),
          role: "toolbar",
          "aria-orientation": o(e),
          "as-child": r.asChild,
          as: r.as
        }, {
          default: h(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-orientation", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), qf = /* @__PURE__ */ _({
  __name: "ToolbarButton",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), w(o(kt), {
      "as-child": "",
      focusable: !n.disabled
    }, {
      default: h(() => [
        q(o(A), M({
          ref: o(e),
          type: n.as === "button" ? "button" : void 0
        }, t), {
          default: h(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }, 8, ["focusable"]));
  }
}), Pg = /* @__PURE__ */ _({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), w(o(kt), {
      "as-child": "",
      focusable: ""
    }, {
      default: h(() => [
        q(o(A), M(t, {
          ref: o(e),
          onKeydown: l[0] || (l[0] = (s) => {
            var r;
            s.key === " " && ((r = s.currentTarget) == null || r.click());
          })
        }), {
          default: h(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Dg = /* @__PURE__ */ _({
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
    const e = a, n = t, l = tr(), s = Re(n);
    return R(), (r, i) => (b(), w(o(jf), M({ ...e, ...o(s) }, {
      "data-orientation": o(l).orientation.value,
      dir: o(l).dir.value,
      "roving-focus": !1
    }), {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-orientation", "dir"]));
  }
}), $g = /* @__PURE__ */ _({
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
    return (n, l) => (b(), w(qf, { "as-child": "" }, {
      default: h(() => [
        q(o(Uf), M(t, { ref: o(e) }), {
          default: h(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Ig = /* @__PURE__ */ _({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = tr();
    return R(), (n, l) => (b(), w(Ss, {
      orientation: o(e).orientation.value,
      "as-child": t.asChild,
      as: n.as
    }, {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["orientation", "as-child", "as"]));
  }
}), ar = "tooltip.open", [To, Yf] = Q("TooltipProvider"), Bg = /* @__PURE__ */ _({
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
    const u = T(!0), d = T(!1), { start: p, stop: c } = Nn(() => {
      u.value = !0;
    }, n, { immediate: !1 });
    return Yf({
      isOpenDelayed: u,
      delayDuration: e,
      onOpen() {
        c(), u.value = !1;
      },
      onClose() {
        p();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: l,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (f, m) => C(f.$slots, "default");
  }
}), [cn, Xf] = Q("TooltipRoot"), Tg = /* @__PURE__ */ _({
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
    const l = To(), s = I(() => e.disableHoverableContent ?? l.disableHoverableContent.value), r = I(() => e.disableClosingTrigger ?? l.disableClosingTrigger.value), i = I(() => e.disabled ?? l.disabled.value), u = I(() => e.delayDuration ?? l.delayDuration.value), d = I(() => e.ignoreNonKeyboardFocus ?? l.ignoreNonKeyboardFocus.value), p = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    te(p, (y) => {
      l.onClose && (y ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ar))) : l.onClose());
    });
    const c = T(!1), f = T(), m = I(() => p.value ? c.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: v } = Nn(() => {
      c.value = !0, p.value = !0;
    }, u, { immediate: !1 });
    function S() {
      v(), c.value = !1, p.value = !0;
    }
    function x() {
      v(), p.value = !1;
    }
    function D() {
      g();
    }
    return Xf({
      contentId: "",
      open: p,
      stateAttribute: m,
      trigger: f,
      onTriggerChange(y) {
        f.value = y;
      },
      onTriggerEnter() {
        l.isOpenDelayed.value ? D() : S();
      },
      onTriggerLeave() {
        s.value ? x() : v();
      },
      onOpen: S,
      onClose: x,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (y, E) => (b(), w(o(Bt), null, {
      default: h(() => [
        C(y.$slots, "default", { open: o(p) })
      ]),
      _: 3
    }));
  }
}), Rg = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = cn(), n = To();
    e.contentId || (e.contentId = me(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: l, currentElement: s } = R(), r = T(!1), i = T(!1), u = I(() => e.disabled.value ? {} : {
      click: v,
      focus: m,
      pointermove: c,
      pointerleave: f,
      pointerdown: p,
      blur: g
    });
    oe(() => {
      e.onTriggerChange(s.value);
    });
    function d() {
      r.value = !1;
    }
    function p() {
      r.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function c(S) {
      S.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (e.onTriggerEnter(), i.value = !0);
    }
    function f() {
      e.onTriggerLeave(), i.value = !1;
    }
    function m(S) {
      var x, D;
      r.value || e.ignoreNonKeyboardFocus.value && !((D = (x = S.target).matches) != null && D.call(x, ":focus-visible")) || e.onOpen();
    }
    function g() {
      e.onClose();
    }
    function v() {
      e.disableClosingTrigger.value || e.onClose();
    }
    return (S, x) => (b(), w(o(Tt), { "as-child": "" }, {
      default: h(() => [
        q(o(A), M({
          ref: o(l),
          "aria-describedby": o(e).open.value ? o(e).contentId : void 0,
          "data-state": o(e).stateAttribute.value,
          as: S.as,
          "as-child": t.asChild
        }, Mn(u.value)), {
          default: h(() => [
            C(S.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), nr = /* @__PURE__ */ _({
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
    const e = a, n = t, l = cn(), { forwardRef: s } = R(), r = Ka(), i = I(() => {
      var p;
      return (p = r.default) == null ? void 0 : p.call(r);
    }), u = I(() => {
      var f;
      if (e.ariaLabel)
        return e.ariaLabel;
      let p = "";
      function c(m) {
        typeof m.children == "string" ? p += m.children : Array.isArray(m.children) && m.children.forEach((g) => c(g));
      }
      return (f = i.value) == null || f.forEach((m) => c(m)), p;
    }), d = I(() => {
      const { ariaLabel: p, ...c } = e;
      return c;
    });
    return oe(() => {
      je(window, "scroll", (p) => {
        const c = p.target;
        c != null && c.contains(l.trigger.value) && l.onClose();
      }), je(window, ar, l.onClose);
    }), (p, c) => (b(), w(o(yt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: c[0] || (c[0] = (f) => n("escapeKeyDown", f)),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        var m;
        o(l).disableClosingTrigger.value && ((m = o(l).trigger.value) != null && m.contains(f.target)) && f.preventDefault(), n("pointerDownOutside", f);
      }),
      onFocusOutside: c[2] || (c[2] = ie(() => {
      }, ["prevent"])),
      onDismiss: c[3] || (c[3] = (f) => o(l).onClose())
    }, {
      default: h(() => [
        q(o(Pt), M({
          ref: o(s),
          "data-state": o(l).stateAttribute.value
        }, { ...p.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: h(() => [
            C(p.$slots, "default"),
            q(o(Qt), {
              id: o(l).contentId,
              role: "tooltip"
            }, {
              default: h(() => [
                ve($e(u.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }));
  }
}), Zf = /* @__PURE__ */ _({
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
    const e = It(a), { forwardRef: n, currentElement: l } = R(), { trigger: s, onClose: r } = cn(), i = To(), { isPointerInTransit: u, onPointerExit: d } = Pl(s, l);
    return i.isPointerInTransitRef = u, d(() => {
      r();
    }), (p, c) => (b(), w(nr, M({ ref: o(n) }, o(e)), {
      default: h(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ag = /* @__PURE__ */ _({
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
    const e = a, n = t, l = cn(), s = xe(e, n), { forwardRef: r } = R();
    return (i, u) => (b(), w(o(De), {
      present: i.forceMount || o(l).open.value
    }, {
      default: h(() => [
        (b(), w(Ge(o(l).disableHoverableContent.value ? nr : Zf), M({ ref: o(r) }, o(s)), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), kg = /* @__PURE__ */ _({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), w(o(Jt), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Og = /* @__PURE__ */ _({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), w(o(ht), K(j(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Ro(a) {
  return a.reduce((t, e) => (t.push(e), e.children && t.push(...Ro(e.children)), t), []);
}
const [or, Jf] = Q("TreeRoot"), Mg = /* @__PURE__ */ _({
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
    const e = a, n = t, { items: l, multiple: s, disabled: r, propagateSelect: i, dir: u } = ne(e), { handleTypeaheadSearch: d } = ba(), p = _e(u), c = T(), f = T(!1), m = ua(), g = ae(e, "modelValue", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultValue ?? (s.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: !0
    }), v = ae(e, "expanded", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultExpanded ?? [],
      passive: e.expanded === void 0,
      deep: !0
    }), { onSelectItem: S, handleMultipleReplace: x } = Bi(g, e), D = I(() => s.value && Array.isArray(g.value) ? g.value.map((B) => e.getKey(B)) : [e.getKey(g.value ?? {})]);
    function y(B, O = 1, F) {
      return B.reduce((k, V, H) => {
        const Y = e.getKey(V), J = v.value.includes(Y), N = {
          _id: Y,
          value: V,
          index: H,
          level: O,
          parentItem: F,
          hasChildren: !!V.children,
          bind: {
            value: V,
            level: O,
            "aria-setsize": B.length,
            "aria-posinset": H + 1
          }
        };
        return k.push(N), V.children && J && k.push(...y(V.children, O + 1, V)), k;
      }, []);
    }
    const E = I(() => {
      const B = e.items;
      return v.value.map((O) => O), y(B ?? []);
    });
    function P(B) {
      var O;
      if (f.value)
        m.trigger(B);
      else {
        const F = (O = c.value) == null ? void 0 : O.getItems().map((k) => k.ref);
        d(B.key, F);
      }
    }
    function $(B) {
      if (f.value)
        return;
      const O = qa[B.key];
      se(() => {
        var F;
        x(
          O,
          document.activeElement,
          (F = c.value) == null ? void 0 : F.getItems,
          E.value.map((k) => k.value)
        );
      });
    }
    return Jf({
      modelValue: g,
      selectedKeys: D,
      onSelect: (B) => {
        var k;
        const O = (V) => e.getKey(V ?? {}) === e.getKey(B), F = e.multiple && Array.isArray(g.value) ? ((k = g.value) == null ? void 0 : k.findIndex(O)) !== -1 : void 0;
        if (S(B, O), e.propagateSelect && e.multiple && Array.isArray(g.value)) {
          const V = Ro(B.children ?? []);
          F ? g.value = [...g.value].filter((H) => !V.some((Y) => e.getKey(H ?? {}) === e.getKey(Y))) : g.value = [...g.value, ...V];
        }
      },
      expanded: v,
      onToggle(B) {
        if (!(B != null && B.children))
          return;
        const O = e.getKey(B) ?? B;
        v.value.includes(O) ? v.value = v.value.filter((F) => F !== O) : v.value.push(O);
      },
      getKey: e.getKey,
      items: l,
      expandedItems: E,
      disabled: r,
      multiple: s,
      dir: p,
      propagateSelect: i,
      isVirtual: f,
      virtualKeydownHook: m,
      handleMultipleReplace: x
    }), (B, O) => (b(), w(o(At), {
      ref_key: "rovingFocusGroupRef",
      ref: c,
      "as-child": "",
      orientation: "vertical",
      dir: o(p)
    }, {
      default: h(() => [
        q(o(A), {
          role: "tree",
          as: B.as,
          "as-child": B.asChild,
          "aria-multiselectable": o(s) ? !0 : void 0,
          onKeydown: [
            P,
            re(ie($, ["shift"]), ["up", "down"])
          ]
        }, {
          default: h(() => [
            C(B.$slots, "default", {
              flattenItems: E.value,
              modelValue: o(g),
              expanded: o(v)
            })
          ]),
          _: 3
        }, 8, ["as", "as-child", "aria-multiselectable", "onKeydown"])
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), Qf = "tree.select", ev = "tree.toggle", Vg = /* @__PURE__ */ _({
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
    const n = a, l = e, s = or(), { getItems: r } = Xt(), i = I(() => !!n.value.children), u = I(() => {
      const x = s.getKey(n.value);
      return s.expanded.value.includes(x);
    }), d = I(() => {
      const x = s.getKey(n.value);
      return s.selectedKeys.value.includes(x);
    }), p = I(() => {
      if (s.propagateSelect.value && d.value && i.value && Array.isArray(s.modelValue.value))
        return !Ro(n.value.children).every((D) => s.modelValue.value.find((y) => s.getKey(y) === s.getKey(D)));
    });
    function c(x) {
      if (i.value)
        if (u.value) {
          const D = r().map((B) => B.ref), y = document.activeElement, E = D.indexOf(y), $ = [...D].slice(E).find((B) => Number(B.getAttribute("data-indent")) === n.level + 1);
          $ && $.focus();
        } else
          S(x);
    }
    function f(x) {
      if (u.value)
        S(x);
      else {
        const D = r().map((B) => B.ref), y = document.activeElement, E = D.indexOf(y), $ = [...D].slice(0, E).reverse().find((B) => Number(B.getAttribute("data-indent")) === n.level - 1);
        $ && $.focus();
      }
    }
    async function m(x) {
      l("select", x), !(x != null && x.defaultPrevented) && s.onSelect(n.value);
    }
    async function g(x) {
      l("toggle", x), !(x != null && x.defaultPrevented) && s.onToggle(n.value);
    }
    async function v(x) {
      if (!x)
        return;
      const D = { originalEvent: x, value: n.value, isExpanded: u.value, isSelected: d.value };
      zt(Qf, m, D);
    }
    async function S(x) {
      if (!x)
        return;
      const D = { originalEvent: x, value: n.value, isExpanded: u.value, isSelected: d.value };
      zt(ev, g, D);
    }
    return t({
      isExpanded: u,
      isSelected: d,
      isIndeterminate: p,
      handleToggle: () => s.onToggle(n.value),
      handleSelect: () => s.onSelect(n.value)
    }), (x, D) => (b(), w(o(kt), {
      "as-child": "",
      value: x.value,
      "allow-shift-key": ""
    }, {
      default: h(() => [
        q(o(A), M(x.$attrs, {
          role: "treeitem",
          as: x.as,
          "as-child": x.asChild,
          "aria-selected": d.value,
          "aria-expanded": i.value ? u.value : void 0,
          "aria-level": x.level,
          "data-indent": x.level,
          "data-selected": d.value ? "" : void 0,
          "data-expanded": u.value ? "" : void 0,
          onKeydown: [
            re(ie(v, ["self", "prevent"]), ["enter", "space"]),
            D[0] || (D[0] = re(ie((y) => o(s).dir.value === "ltr" ? c(y) : f(y), ["prevent"]), ["right"])),
            D[1] || (D[1] = re(ie((y) => o(s).dir.value === "ltr" ? f(y) : c(y), ["prevent"]), ["left"]))
          ],
          onClick: D[2] || (D[2] = ie((y) => {
            v(y), S(y);
          }, ["stop"]))
        }), {
          default: h(() => [
            C(x.$slots, "default", {
              isExpanded: u.value,
              isSelected: d.value,
              isIndeterminate: p.value,
              handleSelect: () => o(s).onSelect(x.value),
              handleToggle: () => o(s).onToggle(x.value)
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-selected", "aria-expanded", "aria-level", "data-indent", "data-selected", "data-expanded", "onKeydown"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Fg = /* @__PURE__ */ _({
  __name: "TreeVirtualizer",
  props: {
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a) {
    const t = a, e = Ka(), n = or(), l = Sl(), { getItems: s } = Xt(), r = Dt("", 1e3), i = I(() => {
      const f = (m) => t.textContent ? t.textContent(m) : m.toString().toLowerCase();
      return n.expandedItems.value.map((m, g) => ({
        index: g,
        textContent: f(m.value)
      }));
    });
    n.isVirtual.value = !0;
    const u = I(() => {
      const f = l.value;
      if (f) {
        const m = window.getComputedStyle(f);
        return {
          start: Number.parseFloat(m.paddingBlockStart || m.paddingTop),
          end: Number.parseFloat(m.paddingBlockEnd || m.paddingBottom)
        };
      } else
        return { start: 0, end: 0 };
    }), d = as(
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
    ), p = I(() => d.value.getVirtualItems().map((f) => ({
      item: f,
      is: kn(e.default({
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
    function c(f) {
      d.value.scrollToIndex(f, { align: "start" }), requestAnimationFrame(() => {
        const m = l.value.querySelector(`[data-index="${f}"]`);
        m instanceof HTMLElement && m.focus();
      });
    }
    return n.virtualKeydownHook.on((f) => {
      var S;
      const m = f.altKey || f.ctrlKey || f.metaKey;
      if (f.key === "Tab" && !m)
        return;
      const v = qa[f.key];
      if (["first", "last"].includes(v)) {
        f.preventDefault();
        const x = v === "first" ? 0 : n.expandedItems.value.length - 1;
        d.value.scrollToIndex(x), requestAnimationFrame(() => {
          const D = s();
          (v === "first" ? D[0] : D[D.length - 1]).ref.focus();
        });
      } else if (v === "prev" && f.key !== "ArrowUp") {
        const x = document.activeElement, D = Number(x.getAttribute("data-index")), y = Number(x.getAttribute("data-indent")), P = n.expandedItems.value.slice(0, D).map(($, B) => ({ ...$, index: B })).reverse().find(($) => $.level === y - 1);
        P && c(P.index);
      } else if (!v && !m) {
        r.value += f.key;
        const x = Number((S = document.activeElement) == null ? void 0 : S.getAttribute("data-index")), D = i.value[x].textContent, y = i.value.map(($) => $.textContent), E = Un(y, r.value, D), P = i.value.find(($) => $.textContent === E);
        P && c(P.index);
      }
      se(() => {
        f.shiftKey && v && n.handleMultipleReplace(v, document.activeElement, s, n.expandedItems.value.map((x) => x.value));
      });
    }), (f, m) => (b(), ue("div", {
      "data-radix-vue-virtualizer": "",
      style: Ce({
        position: "relative",
        width: "100%",
        height: `${o(d).getTotalSize()}px`
      })
    }, [
      (b(!0), ue(we, null, ma(p.value, ({ is: g, item: v }) => (b(), w(Ge(g), {
        key: v.key
      }))), 128))
    ], 4));
  }
}), Lg = /* @__PURE__ */ _({
  __name: "Viewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), ue(we, null, [
      q(o(A), M({ ...n.$attrs, ...t }, {
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
          C(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      q(o(A), {
        as: "style",
        nonce: n.nonce
      }, {
        default: h(() => [
          ve(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
export {
  mv as AIChatContent,
  vv as AIChatInput,
  hv as AIChatMessageItem,
  fv as AIChatRoot,
  yv as AIChatSend,
  dv as AccordionContent,
  cv as AccordionHeader,
  uv as AccordionItem,
  iv as AccordionRoot,
  pv as AccordionTrigger,
  Dv as AlertDialogAction,
  Sv as AlertDialogCancel,
  wv as AlertDialogContent,
  Pv as AlertDialogDescription,
  xv as AlertDialogOverlay,
  _v as AlertDialogPortal,
  bv as AlertDialogRoot,
  Ev as AlertDialogTitle,
  Cv as AlertDialogTrigger,
  $v as AspectRatio,
  Tv as AvatarFallback,
  Bv as AvatarImage,
  Iv as AvatarRoot,
  Ou as CalendarCell,
  Ku as CalendarCellTrigger,
  ku as CalendarGrid,
  Nu as CalendarGridBody,
  Lu as CalendarGridHead,
  zu as CalendarGridRow,
  Mu as CalendarHeadCell,
  Ru as CalendarHeader,
  Au as CalendarHeading,
  Vu as CalendarNext,
  Fu as CalendarPrev,
  Tu as CalendarRoot,
  Av as CheckboxIndicator,
  Rv as CheckboxRoot,
  Oi as CollapsibleContent,
  Ri as CollapsibleRoot,
  Ai as CollapsibleTrigger,
  Mv as ComboboxAnchor,
  Gv as ComboboxArrow,
  Fv as ComboboxCancel,
  zv as ComboboxContent,
  Kv as ComboboxEmpty,
  Lv as ComboboxGroup,
  Ov as ComboboxInput,
  Wv as ComboboxItem,
  jv as ComboboxItemIndicator,
  Nv as ComboboxLabel,
  qv as ComboboxPortal,
  kv as ComboboxRoot,
  Uv as ComboboxSeparator,
  Vv as ComboboxTrigger,
  Hv as ComboboxViewport,
  sv as ConfigProvider,
  Qv as ContextMenuArrow,
  nm as ContextMenuCheckboxItem,
  Jv as ContextMenuContent,
  tm as ContextMenuGroup,
  em as ContextMenuItem,
  om as ContextMenuItemIndicator,
  lm as ContextMenuLabel,
  Zv as ContextMenuPortal,
  sm as ContextMenuRadioGroup,
  rm as ContextMenuRadioItem,
  Yv as ContextMenuRoot,
  am as ContextMenuSeparator,
  im as ContextMenuSub,
  um as ContextMenuSubContent,
  dm as ContextMenuSubTrigger,
  Xv as ContextMenuTrigger,
  Nd as DateFieldInput,
  Id as DateFieldRoot,
  Pm as DatePickerAnchor,
  Dm as DatePickerArrow,
  Sm as DatePickerCalendar,
  vm as DatePickerCell,
  _m as DatePickerCellTrigger,
  $m as DatePickerClose,
  Bm as DatePickerContent,
  Em as DatePickerField,
  fm as DatePickerGrid,
  bm as DatePickerGridBody,
  gm as DatePickerGridHead,
  Cm as DatePickerGridRow,
  mm as DatePickerHeadCell,
  cm as DatePickerHeader,
  pm as DatePickerHeading,
  wm as DatePickerInput,
  hm as DatePickerNext,
  ym as DatePickerPrev,
  xm as DatePickerRoot,
  Im as DatePickerTrigger,
  Gd as DateRangeFieldInput,
  Ud as DateRangeFieldRoot,
  Um as DateRangePickerAnchor,
  Gm as DateRangePickerArrow,
  Wm as DateRangePickerCalendar,
  km as DateRangePickerCell,
  zm as DateRangePickerCellTrigger,
  qm as DateRangePickerClose,
  Xm as DateRangePickerContent,
  jm as DateRangePickerField,
  Am as DateRangePickerGrid,
  Lm as DateRangePickerGridBody,
  Fm as DateRangePickerGridHead,
  Nm as DateRangePickerGridRow,
  Om as DateRangePickerHeadCell,
  Tm as DateRangePickerHeader,
  Rm as DateRangePickerHeading,
  Km as DateRangePickerInput,
  Mm as DateRangePickerNext,
  Vm as DateRangePickerPrev,
  Hm as DateRangePickerRoot,
  Ym as DateRangePickerTrigger,
  Fl as DialogClose,
  vu as DialogContent,
  gu as DialogDescription,
  hu as DialogOverlay,
  gv as DialogPortal,
  ji as DialogRoot,
  yu as DialogTitle,
  Ui as DialogTrigger,
  th as DropdownMenuArrow,
  lh as DropdownMenuCheckboxItem,
  eh as DropdownMenuContent,
  nh as DropdownMenuGroup,
  ah as DropdownMenuItem,
  sh as DropdownMenuItemIndicator,
  rh as DropdownMenuLabel,
  Qm as DropdownMenuPortal,
  ih as DropdownMenuRadioGroup,
  uh as DropdownMenuRadioItem,
  Zm as DropdownMenuRoot,
  oh as DropdownMenuSeparator,
  dh as DropdownMenuSub,
  ch as DropdownMenuSubContent,
  ph as DropdownMenuSubTrigger,
  Jm as DropdownMenuTrigger,
  vh as EditableArea,
  gh as EditableCancelTrigger,
  bh as EditableEditTrigger,
  mh as EditableInput,
  hh as EditablePreview,
  fh as EditableRoot,
  yh as EditableSubmitTrigger,
  Sh as HoverCardArrow,
  xh as HoverCardContent,
  wh as HoverCardPortal,
  Ch as HoverCardRoot,
  _h as HoverCardTrigger,
  Eh as Label,
  Dh as ListboxContent,
  $h as ListboxFilter,
  Rh as ListboxGroup,
  Ah as ListboxGroupLabel,
  Ih as ListboxItem,
  Bh as ListboxItemIndicator,
  Ph as ListboxRoot,
  Th as ListboxVirtualizer,
  Lh as MenubarArrow,
  Hh as MenubarCheckboxItem,
  Fh as MenubarContent,
  zh as MenubarGroup,
  Nh as MenubarItem,
  Wh as MenubarItemIndicator,
  jh as MenubarLabel,
  Oh as MenubarMenu,
  Vh as MenubarPortal,
  Uh as MenubarRadioGroup,
  Gh as MenubarRadioItem,
  kh as MenubarRoot,
  Kh as MenubarSeparator,
  qh as MenubarSub,
  Yh as MenubarSubContent,
  Xh as MenubarSubTrigger,
  Mh as MenubarTrigger,
  Qh as NavigationMenuContent,
  ey as NavigationMenuIndicator,
  Jh as NavigationMenuItem,
  ty as NavigationMenuLink,
  ay as NavigationMenuList,
  Zh as NavigationMenuRoot,
  ny as NavigationMenuSub,
  oy as NavigationMenuTrigger,
  ly as NavigationMenuViewport,
  uy as NumberFieldDecrement,
  iy as NumberFieldIncrement,
  ry as NumberFieldInput,
  sy as NumberFieldRoot,
  cy as PaginationEllipsis,
  py as PaginationFirst,
  fy as PaginationLast,
  vy as PaginationList,
  my as PaginationListItem,
  hy as PaginationNext,
  yy as PaginationPrev,
  dy as PaginationRoot,
  by as PinInputInput,
  gy as PinInputRoot,
  ms as PopoverAnchor,
  fs as PopoverArrow,
  vs as PopoverClose,
  ps as PopoverContent,
  ds as PopoverPortal,
  is as PopoverRoot,
  us as PopoverTrigger,
  A as Primitive,
  _y as ProgressIndicator,
  Cy as ProgressRoot,
  Sy as RadioGroupIndicator,
  xy as RadioGroupItem,
  wy as RadioGroupRoot,
  np as RangeCalendarCell,
  dp as RangeCalendarCellTrigger,
  ap as RangeCalendarGrid,
  ip as RangeCalendarGridBody,
  rp as RangeCalendarGridHead,
  up as RangeCalendarGridRow,
  op as RangeCalendarHeadCell,
  ep as RangeCalendarHeader,
  tp as RangeCalendarHeading,
  lp as RangeCalendarNext,
  sp as RangeCalendarPrev,
  Qc as RangeCalendarRoot,
  Iy as ScrollAreaCorner,
  Ey as ScrollAreaRoot,
  Dy as ScrollAreaScrollbar,
  $y as ScrollAreaThumb,
  Py as ScrollAreaViewport,
  ky as SelectArrow,
  Ay as SelectContent,
  Fy as SelectGroup,
  jy as SelectIcon,
  My as SelectItem,
  Vy as SelectItemIndicator,
  Ny as SelectItemText,
  Ly as SelectLabel,
  Ry as SelectPortal,
  By as SelectRoot,
  Hy as SelectScrollDownButton,
  Ky as SelectScrollUpButton,
  Oy as SelectSeparator,
  Ty as SelectTrigger,
  Wy as SelectValue,
  zy as SelectViewport,
  Fp as Separator,
  Yy as SliderRange,
  Uy as SliderRoot,
  Gy as SliderThumb,
  qy as SliderTrack,
  Gn as Slot,
  Xy as SplitterGroup,
  Zy as SplitterPanel,
  Jy as SplitterResizeHandle,
  ag as StepperDescription,
  og as StepperIndicator,
  eg as StepperItem,
  Qy as StepperRoot,
  lg as StepperSeparator,
  ng as StepperTitle,
  tg as StepperTrigger,
  sg as SwitchRoot,
  rg as SwitchThumb,
  dg as TabsContent,
  pg as TabsIndicator,
  ug as TabsList,
  ig as TabsRoot,
  cg as TabsTrigger,
  gg as TagsInputClear,
  vg as TagsInputInput,
  mg as TagsInputItem,
  yg as TagsInputItemDelete,
  hg as TagsInputItemText,
  fg as TagsInputRoot,
  _g as ToastAction,
  zf as ToastClose,
  Sg as ToastDescription,
  bg as ToastProvider,
  Cg as ToastRoot,
  xg as ToastTitle,
  wg as ToastViewport,
  Kf as Toggle,
  Uf as ToggleGroupItem,
  jf as ToggleGroupRoot,
  qf as ToolbarButton,
  Pg as ToolbarLink,
  Eg as ToolbarRoot,
  Ig as ToolbarSeparator,
  Dg as ToolbarToggleGroup,
  $g as ToolbarToggleItem,
  kg as TooltipArrow,
  Ag as TooltipContent,
  Og as TooltipPortal,
  Bg as TooltipProvider,
  Tg as TooltipRoot,
  Rg as TooltipTrigger,
  Vg as TreeItem,
  Mg as TreeRoot,
  Fg as TreeVirtualizer,
  Lg as Viewport,
  Qt as VisuallyHidden,
  Q as createContext,
  Xn as injectAIChatRootContext,
  Hi as provideAIChatRootContext,
  ya as useBodyScrollLock,
  Hn as useDateFormatter,
  Re as useEmitAsProps,
  R as useForwardExpose,
  It as useForwardProps,
  xe as useForwardPropsEmits,
  me as useId,
  Il as useStateMachine,
  rv as withDefault
};
