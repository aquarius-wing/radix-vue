import { inject as nl, provide as ol, shallowRef as On, watchEffect as ye, readonly as za, customRef as ll, ref as T, computed as I, watch as ee, nextTick as se, getCurrentScope as ir, onScopeDispose as sl, effectScope as rl, unref as o, onBeforeUnmount as kn, onMounted as oe, isRef as Ue, reactive as Ht, getCurrentInstance as mt, onUpdated as il, Fragment as we, defineComponent as w, toRefs as ne, renderSlot as C, onBeforeUpdate as ur, toHandlerKey as dr, camelize as ul, toRef as cr, onUnmounted as Te, mergeProps as M, h as pt, Comment as pr, cloneVNode as Mn, openBlock as b, createBlock as x, withCtx as h, createVNode as Y, createCommentVNode as pe, withKeys as re, markRaw as fr, createTextVNode as me, toDisplayString as De, Teleport as Gt, normalizeProps as H, guardReactiveProps as U, normalizeStyle as ke, withModifiers as ie, createElementBlock as ce, withDirectives as Ka, vShow as Vn, createElementVNode as Ge, mergeDefaults as dl, renderList as ya, resolveDynamicComponent as qe, toHandlers as Fn, triggerRef as Oo, useSlots as Ha, onBeforeMount as cl, vModelSelect as vr, toRaw as mr } from "vue";
import { CalendarDateTime as hr, CalendarDate as yr, DateFormatter as lt, today as gr, getLocalTimeZone as Ln, isEqualMonth as ko, isSameDay as Oe, isEqualDay as Ee, isToday as pl, isSameMonth as fl } from "@internationalized/date";
import { k as da, t as Ne, j as vl, d as _t, n as Pa, m as Me, l as Pt, x as ml, u as br, r as Cr } from "./calendar-ChFCRr4K.js";
import { useFloating as wr, autoUpdate as _r, offset as xr, flip as Mo, shift as Sr, limitShift as Er, size as Pr, arrow as Dr, hide as $r } from "@floating-ui/vue";
import { NumberFormatter as Br, NumberParser as Ir } from "@internationalized/number";
function Q(a, t) {
  const e = typeof a == "string" && !t ? `${a}Context` : t, n = Symbol(e);
  return [(r) => {
    const i = nl(n, r);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(a) ? `one of the following components: ${a.join(
        ", "
      )}` : `\`${a}\``}`
    );
  }, (r) => (ol(n, r), r)];
}
function Wt(a, t, e) {
  const n = e.originalEvent.target, l = new CustomEvent(a, {
    bubbles: !1,
    cancelable: !0,
    detail: e
  });
  t && n.addEventListener(a, t, { once: !0 }), n.dispatchEvent(l);
}
function jt(a, t = Number.NEGATIVE_INFINITY, e = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(a, t), e);
}
function Da(a, t) {
  let e = a;
  const n = t.toString(), l = n.indexOf("."), s = l >= 0 ? n.length - l : 0;
  if (s > 0) {
    const r = 10 ** s;
    e = Math.round(e * r) / r;
  }
  return e;
}
function Tr(a, t, e, n) {
  t = Number(t), e = Number(e);
  const l = (a - (Number.isNaN(t) ? 0 : t)) % n;
  let s = Da(Math.abs(l) * 2 >= n ? a + Math.sign(l) * (n - Math.abs(l)) : a - l, n);
  return Number.isNaN(t) ? !Number.isNaN(e) && s > e && (s = Math.floor(Da(e / n, n)) * n) : s < t ? s = t : !Number.isNaN(e) && s > e && (s = t + Math.floor(Da((e - t) / n, n)) * n), s = Da(s, n), s;
}
function Rr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Ar = function a(t, e) {
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
const Xe = /* @__PURE__ */ Rr(Ar);
function Or(a, t) {
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
const ga = typeof document < "u";
function Kt(a) {
  return a == null;
}
function qt(a) {
  const { defaultValue: t, defaultPlaceholder: e, granularity: n = "day" } = a;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (e)
    return e.copy();
  const l = /* @__PURE__ */ new Date(), s = l.getFullYear(), r = l.getMonth() + 1, i = l.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new hr(s, r, i, 0, 0, 0) : new yr(s, r, i);
}
const kr = [
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
], Mr = ["year", "month", "day"], vn = {
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
function Vr(a) {
  if (Vo(a))
    return vn[a];
  {
    const t = zr(a);
    return Vo(t) ? vn[t] : vn.en;
  }
}
function mn(a, t, e) {
  return Fr(a) ? Vr(e)[a] : Nr(a) ? t : Lr(a) ? "––" : "";
}
function Vo(a) {
  return kr.includes(a);
}
function Fr(a) {
  return Mr.includes(a);
}
function Lr(a) {
  return a === "hour" || a === "minute" || a === "second";
}
function Nr(a) {
  return a === "era" || a === "dayPeriod";
}
function zr(a) {
  return Intl.Locale ? new Intl.Locale(a).language : a.split("-")[0];
}
const Nn = ["day", "month", "year"], hl = ["hour", "minute", "second", "dayPeriod"], yl = [...Nn, ...hl];
function Kr(a) {
  return Nn.includes(a);
}
function gl(a) {
  return yl.includes(a);
}
function Hr(a, t) {
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
function bl(a) {
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
function Wr(a, t) {
  var e;
  const n = On();
  return ye(() => {
    n.value = a();
  }, {
    ...t,
    flush: (e = void 0) != null ? e : "sync"
  }), za(n);
}
function jr(a, t) {
  let e, n, l;
  const s = T(!0), r = () => {
    s.value = !0, l();
  };
  ee(a, r, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = ll((p, c) => (n = p, l = c, {
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
  return ir() ? (sl(a), !0) : !1;
}
function ca() {
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
function Ur(a) {
  let t = !1, e;
  const n = rl(!0);
  return (...l) => (t || (e = n.run(() => a(...l)), t = !0), e);
}
function Gr(a) {
  let t = 0, e, n;
  const l = () => {
    t -= 1, n && t <= 0 && (n.stop(), e = void 0, n = void 0);
  };
  return (...s) => (t += 1, e || (n = rl(!0), e = n.run(() => a(...s))), ht(l), e);
}
function Be(a) {
  return typeof a == "function" ? a() : o(a);
}
function qr(a) {
  if (!Ue(a))
    return Ht(a);
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
  return Ht(t);
}
function Cl(a) {
  return qr(I(a));
}
const Je = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Yr = (a) => typeof a < "u", Xr = (a) => a != null, Zr = Object.prototype.toString, Jr = (a) => Zr.call(a) === "[object Object]", ft = () => {
}, Fo = /* @__PURE__ */ Qr();
function Qr() {
  var a, t;
  return Je && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function zn(a, t) {
  function e(...n) {
    return new Promise((l, s) => {
      Promise.resolve(a(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(l).catch(s);
    });
  }
  return e;
}
const wl = (a) => a();
function ei(a, t = {}) {
  let e, n, l = ft;
  const s = (i) => {
    clearTimeout(i), l(), l = ft;
  };
  return (i) => {
    const u = Be(a), d = Be(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (n && (s(n), n = null), Promise.resolve(i())) : new Promise((p, c) => {
      l = t.rejectOnCancel ? c : p, d && !n && (n = setTimeout(() => {
        e && s(e), n = null, p(i());
      }, d)), e = setTimeout(() => {
        n && s(n), n = null, p(i());
      }, u);
    });
  };
}
function ti(...a) {
  let t = 0, e, n = !0, l = ft, s, r, i, u, d;
  !Ue(a[0]) && typeof a[0] == "object" ? { delay: r, trailing: i = !0, leading: u = !0, rejectOnCancel: d = !1 } = a[0] : [r, i = !0, u = !0, d = !1] = a;
  const p = () => {
    e && (clearTimeout(e), e = void 0, l(), l = ft);
  };
  return (f) => {
    const m = Be(r), g = Date.now() - t, v = () => s = f();
    return p(), m <= 0 ? (t = Date.now(), v()) : (g > m && (u || !n) ? (t = Date.now(), v()) : i && (s = new Promise((S, _) => {
      l = d ? _ : S, e = setTimeout(() => {
        t = Date.now(), n = !0, S(v()), p();
      }, Math.max(0, m - g));
    })), !u && !e && (e = setTimeout(() => n = !0, m)), n = !1, s);
  };
}
function ai(a = wl) {
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
  return { isActive: za(t), pause: e, resume: n, eventFilter: l };
}
function _l(a) {
  return mt();
}
function $t(a, t = 1e4) {
  return ll((e, n) => {
    let l = Be(a), s;
    const r = () => setTimeout(() => {
      l = Be(a), n();
    }, Be(t));
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
function Wa(a, t = 200, e = {}) {
  return zn(
    ei(t, e),
    a
  );
}
function ni(a, t = 200, e = !1, n = !0, l = !1) {
  return zn(
    ti(t, e, n, l),
    a
  );
}
function oi(a, t, e = {}) {
  const {
    eventFilter: n = wl,
    ...l
  } = e;
  return ee(
    a,
    zn(
      n,
      t
    ),
    l
  );
}
function Lo(a, t, e = {}) {
  const {
    eventFilter: n,
    ...l
  } = e, { eventFilter: s, pause: r, resume: i, isActive: u } = ai(n);
  return { stop: oi(
    a,
    t,
    {
      ...l,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: u };
}
function li(a, t, ...[e]) {
  const {
    flush: n = "sync",
    deep: l = !1,
    immediate: s = !0,
    direction: r = "both",
    transform: i = {}
  } = e || {}, u = [], d = "ltr" in i && i.ltr || ((f) => f), p = "rtl" in i && i.rtl || ((f) => f);
  return (r === "both" || r === "ltr") && u.push(Lo(
    a,
    (f) => {
      u.forEach((m) => m.pause()), t.value = d(f), u.forEach((m) => m.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), (r === "both" || r === "rtl") && u.push(Lo(
    t,
    (f) => {
      u.forEach((m) => m.pause()), a.value = p(f), u.forEach((m) => m.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), () => {
    u.forEach((f) => f.stop());
  };
}
function si(a, t) {
  _l() && kn(a, t);
}
function xl(a, t = !0, e) {
  _l() ? oe(a, e) : t ? a() : se(a);
}
function Kn(a, t, e = {}) {
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
    }, Be(t));
  }
  return n && (l.value = !0, Je && u()), ht(i), {
    isPending: za(l),
    start: u,
    stop: i
  };
}
function ri(a = 1e3, t = {}) {
  const {
    controls: e = !1,
    callback: n
  } = t, l = Kn(
    n ?? ft,
    a,
    t
  ), s = I(() => !l.isPending.value);
  return e ? {
    ready: s,
    ...l
  } : s;
}
function ii(a, t, e) {
  const n = ee(a, (...l) => (se(() => n()), t(...l)), e);
  return n;
}
function Ie(a) {
  var t;
  const e = Be(a);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const Bt = Je ? window : void 0;
function ze(...a) {
  let t, e, n, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, n, l] = a, t = Bt) : [t, e, n, l] = a, !t)
    return ft;
  Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((p) => p()), s.length = 0;
  }, i = (p, c, f, m) => (p.addEventListener(c, f, m), () => p.removeEventListener(c, f, m)), u = ee(
    () => [Ie(t), Be(l)],
    ([p, c]) => {
      if (r(), !p)
        return;
      const f = Jr(c) ? { ...c } : c;
      s.push(
        ...e.flatMap((m) => n.map((g) => i(p, m, g, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), r();
  };
  return ht(d), d;
}
function ui(a) {
  return typeof a == "function" ? a : typeof a == "string" ? (t) => t.key === a : Array.isArray(a) ? (t) => a.includes(t.key) : () => !0;
}
function Hn(...a) {
  let t, e, n = {};
  a.length === 3 ? (t = a[0], e = a[1], n = a[2]) : a.length === 2 ? typeof a[1] == "object" ? (t = !0, e = a[0], n = a[1]) : (t = a[0], e = a[1]) : (t = !0, e = a[0]);
  const {
    target: l = Bt,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, u = ui(t);
  return ze(l, s, (p) => {
    p.repeat && Be(i) || u(p) && e(p);
  }, r);
}
function ja() {
  const a = T(!1), t = mt();
  return t && oe(() => {
    a.value = !0;
  }, t), a;
}
function Sl(a) {
  const t = ja();
  return I(() => (t.value, !!a()));
}
function El(a, t, e = {}) {
  const { window: n = Bt, ...l } = e;
  let s;
  const r = Sl(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = I(() => {
    const f = Be(a), m = (Array.isArray(f) ? f : [f]).map(Ie).filter(Xr);
    return new Set(m);
  }), d = ee(
    () => u.value,
    (f) => {
      i(), r.value && f.size && (s = new MutationObserver(t), f.forEach((m) => s.observe(m, l)));
    },
    { immediate: !0, flush: "post" }
  ), p = () => s == null ? void 0 : s.takeRecords(), c = () => {
    i(), d();
  };
  return ht(c), {
    isSupported: r,
    stop: c,
    takeRecords: p
  };
}
function di(a = {}) {
  var t;
  const {
    window: e = Bt,
    deep: n = !0,
    triggerOnRemoval: l = !1
  } = a, s = (t = a.document) != null ? t : e == null ? void 0 : e.document, r = () => {
    var d;
    let p = s == null ? void 0 : s.activeElement;
    if (n)
      for (; p != null && p.shadowRoot; )
        p = (d = p == null ? void 0 : p.shadowRoot) == null ? void 0 : d.activeElement;
    return p;
  }, i = T(), u = () => {
    i.value = r();
  };
  return e && (ze(e, "blur", (d) => {
    d.relatedTarget === null && u();
  }, !0), ze(e, "focus", u, !0)), l && El(s, (d) => {
    d.filter((p) => p.removedNodes.length).map((p) => Array.from(p.removedNodes)).flat().forEach((p) => {
      p === i.value && u();
    });
  }, {
    childList: !0,
    subtree: !0
  }), u(), i;
}
function Pl(a, t = {}) {
  const {
    immediate: e = !0,
    fpsLimit: n = void 0,
    window: l = Bt
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
  return e && p(), ht(c), {
    isActive: za(s),
    pause: c,
    resume: p
  };
}
function ci(a) {
  return JSON.parse(JSON.stringify(a));
}
function pi(a) {
  const t = mt(), e = jr(
    () => null,
    () => t.proxy.$el
  );
  return il(e.trigger), oe(e.trigger), e;
}
function Ze(a, t, e = {}) {
  const { window: n = Bt, ...l } = e;
  let s;
  const r = Sl(() => n && "ResizeObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = I(() => Array.isArray(a) ? a.map((c) => Ie(c)) : [Ie(a)]), d = ee(
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
  return ht(p), {
    isSupported: r,
    stop: p
  };
}
function fi(a, t = {}) {
  const e = di(t), n = I(() => Ie(a));
  return { focused: I(() => n.value && e.value ? n.value.contains(e.value) : !1) };
}
const No = 1;
function vi(a, t = {}) {
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
    window: d = Bt,
    onError: p = (D) => {
      console.error(D);
    }
  } = t, c = T(0), f = T(0), m = I({
    get() {
      return c.value;
    },
    set(D) {
      v(D, void 0);
    }
  }), g = I({
    get() {
      return f.value;
    },
    set(D) {
      v(void 0, D);
    }
  });
  function v(D, k) {
    var V, O, F, K;
    if (!d)
      return;
    const W = Be(a);
    if (!W)
      return;
    (F = W instanceof Document ? d.document.body : W) == null || F.scrollTo({
      top: (V = Be(k)) != null ? V : g.value,
      left: (O = Be(D)) != null ? O : m.value,
      behavior: Be(u)
    });
    const X = ((K = W == null ? void 0 : W.document) == null ? void 0 : K.documentElement) || (W == null ? void 0 : W.documentElement) || W;
    m != null && (c.value = X.scrollLeft), g != null && (f.value = X.scrollTop);
  }
  const S = T(!1), _ = Ht({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), $ = Ht({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), y = (D) => {
    S.value && (S.value = !1, $.left = !1, $.right = !1, $.top = !1, $.bottom = !1, l(D));
  }, E = Wa(y, e + n), P = (D) => {
    var k;
    if (!d)
      return;
    const V = ((k = D == null ? void 0 : D.document) == null ? void 0 : k.documentElement) || (D == null ? void 0 : D.documentElement) || Ie(D), { display: O, flexDirection: F } = getComputedStyle(V), K = V.scrollLeft;
    $.left = K < c.value, $.right = K > c.value;
    const W = Math.abs(K) <= (r.left || 0), X = Math.abs(K) + V.clientWidth >= V.scrollWidth - (r.right || 0) - No;
    O === "flex" && F === "row-reverse" ? (_.left = X, _.right = W) : (_.left = W, _.right = X), c.value = K;
    let N = V.scrollTop;
    D === d.document && !N && (N = d.document.body.scrollTop), $.top = N < f.value, $.bottom = N > f.value;
    const L = Math.abs(N) <= (r.top || 0), j = Math.abs(N) + V.clientHeight >= V.scrollHeight - (r.bottom || 0) - No;
    O === "flex" && F === "column-reverse" ? (_.top = j, _.bottom = L) : (_.top = L, _.bottom = j), f.value = N;
  }, B = (D) => {
    var k;
    if (!d)
      return;
    const V = (k = D.target.documentElement) != null ? k : D.target;
    P(V), S.value = !0, E(D), s(D);
  };
  return ze(
    a,
    "scroll",
    e ? ni(B, e, !0, !1) : B,
    i
  ), xl(() => {
    try {
      const D = Be(a);
      if (!D)
        return;
      P(D);
    } catch (D) {
      p(D);
    }
  }), ze(
    a,
    "scrollend",
    y,
    i
  ), {
    x: m,
    y: g,
    isScrolling: S,
    arrivedState: _,
    directions: $,
    measure() {
      const D = Be(a);
      d && D && P(D);
    }
  };
}
function Dl(a = pi()) {
  const t = On(), e = () => {
    const n = Ie(a);
    n && (t.value = n.parentElement);
  };
  return xl(e), ee(() => Be(a), e), t;
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
  } = n, m = mt(), g = e || (m == null ? void 0 : m.emit) || ((l = m == null ? void 0 : m.$emit) == null ? void 0 : l.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let v = d;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const S = (y) => i ? typeof i == "function" ? i(y) : ci(y) : y, _ = () => Yr(a[t]) ? S(a[t]) : c, $ = (y) => {
    f ? f(y) && g(v, y) : g(v, y);
  };
  if (u) {
    const y = _(), E = T(y);
    let P = !1;
    return ee(
      () => a[t],
      (B) => {
        P || (P = !0, E.value = S(B), se(() => P = !1));
      }
    ), ee(
      E,
      (B) => {
        !P && (B !== a[t] || p) && $(B);
      },
      { deep: p }
    ), E;
  } else
    return I({
      get() {
        return _();
      },
      set(y) {
        $(y);
      }
    });
}
function Ua(a) {
  return a ? a.flatMap((t) => t.type === we ? Ua(t.children) : [t]) : [];
}
const mi = ["INPUT", "TEXTAREA"];
function It(a, t, e, n = {}) {
  if (!t || n.enableIgnoredElement && mi.includes(t.nodeName))
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
  ], _ = m || g, $ = c || f;
  if (!v && !S && (!_ && !$ || l === "vertical" && $ || l === "horizontal" && _))
    return null;
  const y = e ? Array.from(e.querySelectorAll(s)) : r;
  if (!y.length)
    return null;
  d && a.preventDefault();
  let E = null;
  return $ || _ ? E = $l(y, t, {
    goForward: _ ? g : u === "ltr" ? c : f,
    loop: i
  }) : v ? E = y.at(0) || null : S && (E = y.at(-1) || null), p && (E == null || E.focus()), E;
}
function $l(a, t, e, n = a.length) {
  if (--n === 0)
    return null;
  const l = a.indexOf(t), s = e.goForward ? l + 1 : l - 1;
  if (!e.loop && (s < 0 || s >= a.length))
    return null;
  const r = (s + a.length) % a.length, i = a[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? $l(
    a,
    i,
    e,
    n
  ) : i : null;
}
function hn(a) {
  if (a === null || typeof a != "object")
    return !1;
  const t = Object.getPrototypeOf(a);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in a ? !1 : Symbol.toStringTag in a ? Object.prototype.toString.call(a) === "[object Module]" : !0;
}
function Sn(a, t, e = ".", n) {
  if (!hn(t))
    return Sn(a, {}, e, n);
  const l = Object.assign({}, t);
  for (const s in a) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = a[s];
    r != null && (n && n(l, s, r, e) || (Array.isArray(r) && Array.isArray(l[s]) ? l[s] = [...r, ...l[s]] : hn(r) && hn(l[s]) ? l[s] = Sn(
      r,
      l[s],
      (e ? `${e}.` : "") + s.toString(),
      n
    ) : l[s] = r));
  }
  return l;
}
function hi(a) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((e, n) => Sn(e, n, "", a), {})
  );
}
const yi = hi(), [Wn, gi] = Q("ConfigProvider"), cv = /* @__PURE__ */ w({
  __name: "ConfigProvider",
  props: {
    dir: { default: "ltr" },
    scrollBody: { type: [Boolean, Object], default: !0 },
    useId: { type: Function, default: void 0 }
  },
  setup(a) {
    const t = a, { dir: e, scrollBody: n } = ne(t);
    return gi({
      dir: e,
      scrollBody: n,
      useId: t.useId
    }), (l, s) => C(l.$slots, "default");
  }
});
let bi = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Ci = (a = 21) => {
  let t = "", e = a;
  for (; e--; )
    t += bi[Math.random() * 64 | 0];
  return t;
};
const wi = Gr(() => {
  const a = T(/* @__PURE__ */ new Map()), t = T(), e = I(() => {
    for (const r of a.value.values())
      if (r)
        return !0;
    return !1;
  }), n = Wn({
    scrollBody: T(!0)
  });
  let l = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Fo && (l == null || l()), t.value = void 0;
  };
  return ee(e, (r, i) => {
    var c;
    if (!Je)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, p = (c = n.scrollBody) != null && c.value ? typeof n.scrollBody.value == "object" ? yi({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = `${p.padding}px`, document.body.style.marginRight = `${p.margin}px`, document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Fo && (l = ze(
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
function ba(a) {
  const t = Ci(6), e = wi();
  e.value.set(t, a ?? !1);
  const n = I({
    get: () => e.value.get(t) ?? !1,
    set: (l) => e.value.set(t, l)
  });
  return si(() => {
    e.value.delete(t);
  }), n;
}
const _i = "data-radix-vue-collection-item";
function Ve(a, t = _i) {
  const e = a ?? Symbol();
  return { createCollection: (s) => {
    const r = T([]);
    function i() {
      const u = Ie(s);
      return u ? r.value = Array.from(
        u.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return ur(() => {
      r.value = [];
    }), oe(i), il(i), ee(() => s == null ? void 0 : s.value, i, { immediate: !0 }), ol(e, r), r;
  }, injectCollection: () => nl(e, T([])) };
}
function jn(a) {
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
    return da(v) && S ? l(Ne(v), {
      dateStyle: "long",
      timeStyle: "long"
    }) : l(Ne(v), {
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
    const v = gr(Ln());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_) => ({ label: i(Ne(v.set({ month: _ }))), value: _ }));
  }
  function d(v, S = {}) {
    return new lt(t.value, { year: "numeric", ...S }).format(v);
  }
  function p(v, S) {
    return vl(v) ? new lt(t.value, {
      ...S,
      timeZone: v.timeZone
    }).formatToParts(Ne(v)) : new lt(t.value, S).formatToParts(Ne(v));
  }
  function c(v, S = "narrow") {
    return new lt(t.value, { weekday: S }).format(v);
  }
  function f(v) {
    var $;
    return (($ = new lt(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(v).find((y) => y.type === "dayPeriod")) == null ? void 0 : $.value) === "PM" ? "PM" : "AM";
  }
  const m = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function g(v, S, _ = {}) {
    const $ = { ...m, ..._ }, E = p(v, $).find((P) => P.type === S);
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
function Ce(a) {
  const t = Wn({
    dir: T("ltr")
  });
  return I(() => {
    var e;
    return (a == null ? void 0 : a.value) || ((e = t.dir) == null ? void 0 : e.value) || "ltr";
  });
}
function Re(a) {
  const t = mt(), e = t == null ? void 0 : t.type.emits, n = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((l) => {
    n[dr(ul(l))] = (...s) => a(l, ...s);
  }), n;
}
let yn = 0;
function Un() {
  ye((a) => {
    if (!Je)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? zo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? zo()
    ), yn++, a(() => {
      yn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), yn--;
    });
  });
}
function zo() {
  const a = document.createElement("span");
  return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", a;
}
function Qe(a) {
  return I(() => {
    var t;
    return Be(a) ? !!((t = Ie(a)) != null && t.closest("form")) : !0;
  });
}
function Tt(a) {
  const t = mt(), e = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((l, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (l[s] = r), l;
  }, {}), n = cr(a);
  return I(() => {
    const l = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      l[ul(r)] = s[r];
    }), Object.keys({ ...e, ...l }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function _e(a, t) {
  const e = Tt(a), n = t ? Re(t) : {};
  return I(() => ({
    ...e.value,
    ...n
  }));
}
function R() {
  const a = mt(), t = T(), e = I(() => {
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
function Bl(a, t) {
  const e = $t(!1, 300), n = T(null), l = ca();
  function s() {
    n.value = null, e.value = !1;
  }
  function r(i, u) {
    const d = i.currentTarget, p = { x: i.clientX, y: i.clientY }, c = xi(p, d.getBoundingClientRect()), f = Si(p, c), m = Ei(u.getBoundingClientRect()), g = Di([...f, ...m]);
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
        const p = d.target, c = { x: d.clientX, y: d.clientY }, f = ((g = a.value) == null ? void 0 : g.contains(p)) || ((v = t.value) == null ? void 0 : v.contains(p)), m = !Pi(c, n.value);
        f ? s() : m && (s(), l.trigger());
      };
      document.addEventListener("pointermove", u), i(() => document.removeEventListener("pointermove", u));
    }
  }), {
    isPointerInTransit: e,
    onPointerExit: l.on
  };
}
function xi(a, t) {
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
function Si(a, t, e = 5) {
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
function Ei(a) {
  const { top: t, right: e, bottom: n, left: l } = a;
  return [
    { x: l, y: t },
    { x: e, y: t },
    { x: e, y: n },
    { x: l, y: n }
  ];
}
function Pi(a, t) {
  const { x: e, y: n } = a;
  let l = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, p = t[r].y;
    u > n != p > n && e < (d - i) * (n - u) / (p - u) + i && (l = !l);
  }
  return l;
}
function Di(a) {
  const t = a.slice();
  return t.sort((e, n) => e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0), $i(t);
}
function $i(a) {
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
var Bi = function(a) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(a) ? a[0] : a;
  return t.ownerDocument.body;
}, Lt = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), Ba = {}, gn = 0, Il = function(a) {
  return a && (a.host || Il(a.parentNode));
}, Ii = function(a, t) {
  return t.map(function(e) {
    if (a.contains(e))
      return e;
    var n = Il(e);
    return n && a.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", a, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
}, Ti = function(a, t, e, n) {
  var l = Ii(t, Array.isArray(a) ? a : [a]);
  Ba[e] || (Ba[e] = /* @__PURE__ */ new WeakMap());
  var s = Ba[e], r = [], i = /* @__PURE__ */ new Set(), u = new Set(l), d = function(c) {
    !c || i.has(c) || (i.add(c), d(c.parentNode));
  };
  l.forEach(d);
  var p = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(f) {
      if (i.has(f))
        p(f);
      else
        try {
          var m = f.getAttribute(n), g = m !== null && m !== "false", v = (Lt.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
          Lt.set(f, v), s.set(f, S), r.push(f), v === 1 && g && $a.set(f, !0), S === 1 && f.setAttribute(e, "true"), g || f.setAttribute(n, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", f, _);
        }
    });
  };
  return p(t), i.clear(), gn++, function() {
    r.forEach(function(c) {
      var f = Lt.get(c) - 1, m = s.get(c) - 1;
      Lt.set(c, f), s.set(c, m), f || ($a.has(c) || c.removeAttribute(n), $a.delete(c)), m || c.removeAttribute(e);
    }), gn--, gn || (Lt = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), Ba = {});
  };
}, Ri = function(a, t, e) {
  e === void 0 && (e = "data-aria-hidden");
  var n = Array.from(Array.isArray(a) ? a : [a]), l = Bi(a);
  return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live]"))), Ti(n, l, e, "aria-hidden")) : function() {
    return null;
  };
};
function Ca(a) {
  let t;
  ee(() => Ie(a), (e) => {
    e ? t = Ri(e) : t && t();
  }), Te(() => {
    t && t();
  });
}
let Ai = 0;
function ve(a, t = "radix") {
  if (a)
    return a;
  const { useId: e } = Wn({ useId: void 0 });
  return e && typeof e == "function" ? `${t}-${e()}` : `${t}-${++Ai}`;
}
function Oi(a, t) {
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
        c = Et(u, e.value, p);
        break;
      }
      case "first": {
        c = Et(u, e.value, u == null ? void 0 : u[0]);
        break;
      }
      case "last": {
        c = Et(u, e.value, u == null ? void 0 : u[u.length - 1]);
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
function Tl(a) {
  const t = T(), e = I(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.width) ?? 0;
  }), n = I(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.height) ?? 0;
  });
  return oe(() => {
    const l = Ie(a);
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
function Rl(a, t) {
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
function wa(a) {
  const t = $t("", 1e3);
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
      }), p = qn(d, t.value, u), c = r.find(
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
function Gn(a, t) {
  return a.map((e, n) => a[(t + n) % a.length]);
}
function qn(a, t, e) {
  const l = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? a.indexOf(e) : -1;
  let r = Gn(a, Math.max(s, 0));
  l.length === 1 && (r = r.filter((d) => d !== e));
  const u = r.find(
    (d) => d.toLowerCase().startsWith(l.toLowerCase())
  );
  return u !== e ? u : void 0;
}
function pv(a, t) {
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
const Yn = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(a, { attrs: t, slots: e }) {
    return () => {
      var u, d;
      if (!e.default)
        return null;
      const n = Ua(e.default()), l = n.findIndex((p) => p.type !== pr);
      if (l === -1)
        return n;
      const s = n[l];
      (u = s.props) == null || delete u.ref;
      const r = s.props ? M(t, s.props) : t;
      t.class && ((d = s.props) != null && d.class) && delete s.props.class;
      const i = Mn(s, r);
      for (const p in r)
        p.startsWith("on") && (i.props || (i.props = {}), i.props[p] = r[p]);
      return n.length === 1 ? i : (n[l] = i, n);
    };
  }
}), A = w({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => pt(n, t) : n !== "template" ? () => pt(a.as, t, { default: e.default }) : () => pt(Yn, t, { default: e.default });
  }
});
function Ae() {
  const a = T(), t = I(() => {
    var e, n;
    return ["#text", "#comment"].includes((e = a.value) == null ? void 0 : e.$el.nodeName) ? (n = a.value) == null ? void 0 : n.$el.nextElementSibling : Ie(a);
  });
  return {
    primitiveElement: a,
    currentElement: t
  };
}
const [Al, ki] = Q("CollapsibleRoot"), Mi = /* @__PURE__ */ w({
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
    return ki({
      contentId: "",
      disabled: r,
      open: s,
      onOpenToggle: () => {
        s.value = !s.value;
      }
    }), t({ open: s }), R(), (i, u) => (b(), x(o(A), {
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
}), Vi = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Al();
    return (n, l) => {
      var s, r;
      return b(), x(o(A), {
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
function Fi(a, t) {
  const e = T({}), n = T("none"), l = a.value ? "mounted" : "unmounted", { state: s, dispatch: r } = Rl(l, {
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
  ee(
    a,
    async (m, g) => {
      var S;
      const v = g !== m;
      if (await se(), v) {
        const _ = n.value, $ = Ia(t.value);
        m ? (r("MOUNT"), i("enter"), $ === "none" && i("after-enter")) : $ === "none" || ((S = e.value) == null ? void 0 : S.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : g && _ !== $ ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (m) => {
    const g = Ia(t.value), v = g.includes(
      m.animationName
    ), S = s.value === "mounted" ? "enter" : "leave";
    m.target === t.value && v && (i(`after-${S}`), r("ANIMATION_END")), m.target === t.value && g === "none" && r("ANIMATION_END");
  }, d = (m) => {
    m.target === t.value && (n.value = Ia(t.value));
  }, p = ee(
    t,
    (m, g) => {
      m ? (e.value = getComputedStyle(m), m.addEventListener("animationstart", d), m.addEventListener("animationcancel", u), m.addEventListener("animationend", u)) : (r("ANIMATION_END"), g == null || g.removeEventListener("animationstart", d), g == null || g.removeEventListener("animationcancel", u), g == null || g.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), c = ee(s, () => {
    const m = Ia(t.value);
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
function Ia(a) {
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
    const { present: n, forceMount: l } = ne(a), s = T(), { isPresent: r } = Fi(n, s);
    e({ present: r });
    let i = t.default({ present: r });
    i = Ua(i || []);
    const u = mt();
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
        const c = Ie(p);
        return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-radix-popper-content-wrapper") ? s.value = c.firstElementChild : s.value = c), c;
      }
    }) : null;
  }
}), Li = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Al();
    e.contentId || (e.contentId = ve(void 0, "radix-vue-collapsible-content"));
    const n = T(), { forwardRef: l, currentElement: s } = R(), r = T(0), i = T(0), u = I(() => e.open.value), d = T(u.value), p = T();
    return ee(
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
    }), (c, f) => (b(), x(o(Pe), {
      ref_key: "presentRef",
      ref: n,
      present: c.forceMount || o(e).open.value,
      "force-mount": !0
    }, {
      default: h(() => {
        var m, g;
        return [
          Y(o(A), M(c.$attrs, {
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
function Ol({ type: a, defaultValue: t, modelValue: e }) {
  const n = e || t;
  if (Kt(a) && Kt(e) && Kt(t))
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
function Ni({ type: a, defaultValue: t, modelValue: e }) {
  return a || Ol({ type: a, defaultValue: t, modelValue: e });
}
function zi({ type: a, defaultValue: t }) {
  return t !== void 0 ? t : a === "single" ? void 0 : [];
}
function kl(a, t) {
  const e = T(Ni(a)), n = ae(a, "modelValue", t, {
    defaultValue: zi(a),
    passive: a.modelValue === void 0,
    deep: !0
  });
  ee(
    () => [a.type, a.modelValue, a.defaultValue],
    () => {
      const r = Ol(a);
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
const [Ga, Ki] = Q("AccordionRoot"), fv = /* @__PURE__ */ w({
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
    const e = a, n = t, { dir: l, disabled: s } = ne(e), r = Ce(l), { modelValue: i, changeModelValue: u, isSingle: d } = kl(e, n), { forwardRef: p, currentElement: c } = R();
    return Ki({
      disabled: s,
      direction: r,
      orientation: e.orientation,
      parentElement: c,
      isSingle: d,
      collapsible: e.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, m) => (b(), x(o(A), {
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
}), [Xn, Hi] = Q("AccordionItem"), vv = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, n = Ga(), l = I(
      () => n.isSingle.value ? e.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(e.value)
    ), s = I(() => n.disabled.value || e.disabled || n.isSingle.value && l.value && !n.collapsible), r = I(() => s.value ? "" : void 0), i = I(
      () => l.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: l, dataDisabled: r });
    const { currentRef: u, currentElement: d } = R();
    Hi({
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
      It(
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
    return (c, f) => (b(), x(o(Mi), {
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
}), mv = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Ga(), n = Xn();
    return R(), (l, s) => (b(), x(o(Li), {
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
}), hv = /* @__PURE__ */ w({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(a) {
    const t = a, e = Ga(), n = Xn();
    return R(), (l, s) => (b(), x(o(A), {
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
}), yv = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Ga(), n = Xn();
    n.triggerId || (n.triggerId = ve(void 0, "radix-vue-accordion-trigger"));
    function l() {
      n.disabled.value || e.changeModelValue(n.value.value);
    }
    return (s, r) => (b(), x(o(Vi), {
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
}), Wi = "data-radix-vue-collection-item", [Zn, ji] = Q("CollectionProvider");
function Yt(a = Wi) {
  const t = T(/* @__PURE__ */ new Map()), e = T(), n = ji({
    collectionRef: e,
    itemMap: t,
    attrName: a
  }), { getItems: l } = Jt(n), s = I(() => Array.from(n.itemMap.value.values())), r = I(() => n.itemMap.value.size);
  return { getItems: l, reactiveItems: s, itemMapSize: r };
}
const Xt = w({
  name: "CollectionSlot",
  setup(a, { slots: t }) {
    const e = Zn(), { primitiveElement: n, currentElement: l } = Ae();
    return ee(l, () => {
      e.collectionRef.value = l.value;
    }), () => pt(Yn, { ref: n }, t);
  }
}), Zt = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  setup(a, { slots: t, attrs: e }) {
    const n = Zn(), { primitiveElement: l, currentElement: s } = Ae(), { value: r, ...i } = e;
    return ye((u) => {
      if (s.value) {
        const d = fr(s.value);
        n.itemMap.value.set(d, { ref: s.value, value: r }), u(() => n.itemMap.value.delete(d));
      }
    }), () => pt(Yn, { ...i, [n.attrName]: "", ref: l }, t);
  }
});
function Jt(a) {
  const t = a ?? Zn();
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
function Ui(a) {
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
const [_a, Gi] = Q("AIChat"), gv = /* @__PURE__ */ w({
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
    }), r = T(), i = T(), { getItems: u, reactiveItems: d, itemMapSize: p } = Yt("data-radix-vue-ai-chat-item");
    return ee(() => p.value, () => {
      s.value = u().map((c) => c.value);
    }, {
      immediate: !0,
      flush: "post"
    }), Gi({
      prompt: l,
      messages: s,
      inputElement: r,
      onInputElementChange: (c) => r.value = c,
      contentElement: i,
      onContentElementChange: (c) => i.value = c,
      onSendMessage: () => {
        n("send");
      },
      emitter: e.emitter || Ui()
    }), (c, f) => (b(), x(o(A), {
      as: e.as,
      "as-child": c.asChild
    }, {
      default: h(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), bv = /* @__PURE__ */ w({
  __name: "AIChatInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "textarea" }
  },
  setup(a) {
    const t = a, e = _a(), { forwardRef: n, currentElement: l } = R();
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
    return (r, i) => (b(), x(o(A), {
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
}), Cv = /* @__PURE__ */ w({
  __name: "AIChatContent",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = _a();
    return oe(() => {
      n.onContentElementChange(e.value);
    }), (l, s) => (b(), x(o(Xt), null, {
      default: h(() => [
        Y(o(A), {
          ref: o(t),
          as: l.as,
          "as-child": l.asChild
        }, {
          default: h(() => [
            C(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }));
  }
}), wv = /* @__PURE__ */ w({
  __name: "AIChatMessageItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    _a();
    const { forwardRef: t } = R(), e = ve(void 0, "radix-vue-ai-chat-item"), n = ve(void 0, "radix-vue-ai-chat-option");
    return (l, s) => (b(), x(o(Zt), { value: l.value }, {
      default: h(() => [
        Y(o(A), {
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
              me(De(l.value.content), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), _v = /* @__PURE__ */ w({
  __name: "AIChatSend",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = _a(), { forwardRef: n } = R();
    return (l, s) => (b(), x(o(A), M(t, {
      ref: o(n),
      type: l.as === "button" ? "button" : void 0,
      as: l.as,
      "as-child": l.asChild,
      onClick: o(e).onSendMessage
    }), {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "as", "as-child", "onClick"]));
  }
}), xv = /* @__PURE__ */ w({
  __name: "AIChatAutoScroll",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = _a(), e = T(!0), { y: n } = vi(t.contentElement);
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
    }), (r, i) => (b(), x(o(A), {
      as: r.as,
      "as-child": r.asChild
    }, {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), [tt, qi] = Q("DialogRoot"), Yi = /* @__PURE__ */ w({
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
    return qi({
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
}), Xi = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = tt(), { forwardRef: n, currentElement: l } = R();
    return e.contentId || (e.contentId = ve(void 0, "radix-vue-dialog-content")), oe(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (b(), x(o(A), M(t, {
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
}), yt = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = ja();
    return (e, n) => o(t) || e.forceMount ? (b(), x(Gt, {
      key: 0,
      to: e.to,
      disabled: e.disabled
    }, [
      C(e.$slots, "default")
    ], 8, ["to", "disabled"])) : pe("", !0);
  }
}), Sv = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zi = "dismissableLayer.pointerDownOutside", Ji = "dismissableLayer.focusOutside";
function Ml(a, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), n = a.dataset.dismissableLayer === "" ? a : a.querySelector(
    "[data-dismissable-layer]"
  ), l = Array.from(
    a.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(e && n === e || l.indexOf(n) < l.indexOf(e));
}
function Vl(a, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = T(!1), l = T(() => {
  });
  return ye((r) => {
    if (!Je)
      return;
    const i = async (d) => {
      const p = d.target;
      if (t != null && t.value) {
        if (Ml(t.value, p)) {
          n.value = !1;
          return;
        }
        if (d.target && !n.value) {
          let c = function() {
            Wt(
              Zi,
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
function Fl(a, t) {
  var l;
  const e = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = T(!1);
  return ye((s) => {
    if (!Je)
      return;
    const r = async (i) => {
      t != null && t.value && (await se(), !(!t.value || Ml(t.value, i.target)) && i.target && !n.value && Wt(
        Ji,
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
const je = Ht({
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
    ), i = I(() => je.layersRoot), u = I(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = I(() => je.layersWithOutsidePointerEventsDisabled.size > 0), p = I(() => {
      const g = Array.from(i.value), [v] = [...je.layersWithOutsidePointerEventsDisabled].slice(-1), S = g.indexOf(v);
      return u.value >= S;
    }), c = Vl(async (g) => {
      const v = [...je.branches].some(
        (S) => S.contains(g.target)
      );
      !p.value || v || (n("pointerDownOutside", g), n("interactOutside", g), await se(), g.defaultPrevented || n("dismiss"));
    }, s), f = Fl((g) => {
      [...je.branches].some(
        (S) => S.contains(g.target)
      ) || (n("focusOutside", g), n("interactOutside", g), g.defaultPrevented || n("dismiss"));
    }, s);
    Hn("Escape", (g) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", g), g.defaultPrevented || n("dismiss"));
    });
    let m;
    return ye((g) => {
      s.value && (e.disableOutsidePointerEvents && (je.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), je.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), g(() => {
        e.disableOutsidePointerEvents && je.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), ye((g) => {
      g(() => {
        s.value && (i.value.delete(s.value), je.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (g, v) => (b(), x(o(A), {
      ref: o(l),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: ke({
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
}), Qi = /* @__PURE__ */ w({
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
    }), (l, s) => (b(), x(o(A), M({ ref: o(e) }, t), {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bn = "focusScope.autoFocusOnMount", Cn = "focusScope.autoFocusOnUnmount", Ko = { bubbles: !1, cancelable: !0 };
function Ma(a, { select: t = !1 } = {}) {
  const e = document.activeElement;
  for (const n of a)
    if (dt(n, { select: t }), document.activeElement !== e)
      return !0;
}
function eu(a) {
  const t = Jn(a), e = Ho(t, a), n = Ho(t.reverse(), a);
  return [e, n];
}
function Jn(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
function Ho(a, t) {
  for (const e of a)
    if (!tu(e, { upTo: t }))
      return e;
}
function tu(a, { upTo: t }) {
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
function au(a) {
  return a instanceof HTMLInputElement && "select" in a;
}
function dt(a, { select: t = !1 } = {}) {
  if (a && a.focus) {
    const e = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== e && au(a) && t && a.select();
  }
}
const nu = Ur(() => T([]));
function ou() {
  const a = nu();
  return {
    add(t) {
      const e = a.value[0];
      t !== e && (e == null || e.pause()), a.value = Wo(a.value, t), a.value.unshift(t);
    },
    remove(t) {
      var e;
      a.value = Wo(a.value, t), (e = a.value[0]) == null || e.resume();
    }
  };
}
function Wo(a, t) {
  const e = [...a], n = e.indexOf(t);
  return n !== -1 && e.splice(n, 1), e;
}
function lu(a) {
  return a.filter((t) => t.tagName !== "A");
}
const qa = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, { currentRef: l, currentElement: s } = R(), r = T(null), i = ou(), u = Ht({
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
        const _ = S.target;
        c.contains(_) ? r.value = _ : dt(r.value, { select: !0 });
      }
      function m(S) {
        if (u.paused || !c)
          return;
        const _ = S.relatedTarget;
        _ !== null && (c.contains(_) || dt(r.value, { select: !0 }));
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
        const g = new CustomEvent(bn, Ko);
        c.addEventListener(bn, (v) => n("mountAutoFocus", v)), c.dispatchEvent(g), g.defaultPrevented || (Ma(lu(Jn(c)), {
          select: !0
        }), document.activeElement === f && dt(c));
      }
      p(() => {
        c.removeEventListener(bn, (S) => n("mountAutoFocus", S));
        const g = new CustomEvent(Cn, Ko), v = (S) => {
          n("unmountAutoFocus", S);
        };
        c.addEventListener(Cn, v), c.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || dt(f ?? document.body, { select: !0 }), c.removeEventListener(Cn, v), i.remove(u);
        }, 0);
      });
    });
    function d(p) {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const c = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = document.activeElement;
      if (c && f) {
        const m = p.currentTarget, [g, v] = eu(m);
        g && v ? !p.shiftKey && f === v ? (p.preventDefault(), e.loop && dt(g, { select: !0 })) : p.shiftKey && f === g && (p.preventDefault(), e.loop && dt(v, { select: !0 })) : f === m && p.preventDefault();
      }
    }
    return (p, c) => (b(), x(o(A), {
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
}), su = "menu.itemSelect", En = ["Enter", " "], ru = ["ArrowDown", "PageUp", "Home"], Ll = ["ArrowUp", "PageDown", "End"], iu = [...ru, ...Ll], uu = {
  ltr: [...En, "ArrowRight"],
  rtl: [...En, "ArrowLeft"]
}, du = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Qn(a) {
  return a ? "open" : "closed";
}
function Fa(a) {
  return a === "indeterminate";
}
function eo(a) {
  return Fa(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
function Pn(a) {
  const t = document.activeElement;
  for (const e of a)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function cu(a, t) {
  const { x: e, y: n } = a;
  let l = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, p = t[r].y;
    u > n != p > n && e < (d - i) * (n - u) / (p - u) + i && (l = !l);
  }
  return l;
}
function pu(a, t) {
  if (!t)
    return !1;
  const e = { x: a.clientX, y: a.clientY };
  return cu(e, t);
}
function pa(a) {
  return a.pointerType === "mouse";
}
const fu = "DialogTitle", vu = "DialogContent";
function mu({
  titleName: a = fu,
  contentName: t = vu,
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
const Nl = /* @__PURE__ */ w({
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
    }), process.env.NODE_ENV !== "production" && mu({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: l.titleId,
      descriptionId: l.descriptionId,
      contentElement: l.contentElement
    }), (i, u) => (b(), x(o(qa), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: h(() => [
        Y(o(gt), M({
          id: o(l).contentId,
          ref: o(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": o(l).descriptionId,
          "aria-labelledby": o(l).titleId,
          "data-state": o(Qn)(o(l).open.value)
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
}), hu = /* @__PURE__ */ w({
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
    return Ca(i), (u, d) => (b(), x(Nl, M({ ...e, ...o(s) }, {
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
}), yu = /* @__PURE__ */ w({
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
    return (u, d) => (b(), x(Nl, M({ ...e, ...o(l) }, {
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
}), gu = /* @__PURE__ */ w({
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
    return (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: h(() => [
        o(l).modal.value ? (b(), x(hu, M({
          key: 0,
          ref: o(r)
        }, { ...e, ...o(s), ...i.$attrs }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), x(yu, M({
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
}), bu = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = tt();
    return ba(!0), R(), (e, n) => (b(), x(o(A), {
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
}), Cu = /* @__PURE__ */ w({
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
        default: h(() => [
          Y(bu, M(n.$attrs, {
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
}), zl = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = tt();
    return (n, l) => (b(), x(o(A), M(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (s) => o(e).onOpenChange(!1))
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), wu = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a) {
    const t = a, e = tt();
    return R(), (n, l) => (b(), x(o(A), M(t, {
      id: o(e).titleId
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), _u = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    R();
    const e = tt();
    return (n, l) => (b(), x(o(A), M(t, {
      id: o(e).descriptionId
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ev = /* @__PURE__ */ w({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const l = _e(a, t);
    return R(), (s, r) => (b(), x(o(Yi), M(o(l), { modal: !0 }), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pv = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(Xi), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dv = /* @__PURE__ */ w({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [xu, Su] = Q("AlertDialogContent"), $v = /* @__PURE__ */ w({
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
    return Su({
      onCancelElementChange: (r) => {
        s.value = r;
      }
    }), (r, i) => (b(), x(o(gu), M({ ...e, ...o(l) }, {
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
}), Bv = /* @__PURE__ */ w({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(Cu), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iv = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = xu(), { forwardRef: n, currentElement: l } = R();
    return oe(() => {
      e.onCancelElementChange(l.value);
    }), (s, r) => (b(), x(o(zl), M(t, { ref: o(n) }), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tv = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(wu), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rv = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(_u), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Av = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(zl), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ov = /* @__PURE__ */ w({
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
      Y(o(A), M({
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
}), [Kl, Eu] = Q("AvatarRoot"), kv = /* @__PURE__ */ w({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return R(), Eu({
      imageLoadingStatus: T("loading")
    }), (t, e) => (b(), x(o(A), {
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
function Pu(a) {
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
const Mv = /* @__PURE__ */ w({
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
    const s = Kl(), r = Pu(l);
    return ee(
      r,
      (i) => {
        n("loadingStatusChange", i), i !== "idle" && (s.imageLoadingStatus.value = i);
      },
      { immediate: !0 }
    ), (i, u) => Ka((b(), x(o(A), {
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
      [Vn, o(r) === "loaded"]
    ]);
  }
}), Vv = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Kl();
    R();
    const n = T(!1);
    let l;
    return ee(e.imageLoadingStatus, (s) => {
      s === "loading" && (n.value = !1, t.delayMs ? l = setTimeout(() => {
        n.value = !0, clearTimeout(l);
      }, t.delayMs) : n.value = !0);
    }, { immediate: !0 }), (s, r) => n.value && o(e).imageLoadingStatus.value !== "loaded" ? (b(), x(o(A), {
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
function Du(a) {
  function t(n) {
    return Array.isArray(a.date.value) ? a.date.value.some((l) => Oe(l, n)) : a.date.value ? Oe(a.date.value, n) : !1;
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
function $u(a, t) {
  const e = t(a), n = e.compare(a), l = {};
  return n >= 7 && (l.day = 1), n >= Pt(a) && (l.month = 1), e.set({ ...l });
}
function Bu(a, t) {
  const e = t(a), n = a.compare(e), l = {};
  return n >= 7 && (l.day = 35), n >= Pt(a) && (l.month = 13), e.set({ ...l });
}
function Iu(a, t) {
  return t(a);
}
function Tu(a, t) {
  return t(a);
}
function Hl(a) {
  const t = jn(a.locale.value), e = I(() => {
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
    const _ = n.value[n.value.length - 1].value;
    if (S || a.nextPage.value) {
      const y = $u(_, S || a.nextPage.value);
      return Pa(y, a.maxValue.value);
    }
    if (v === "year") {
      const y = _.add({ years: 1 }).set({ day: 1, month: 1 });
      return Pa(y, a.maxValue.value);
    }
    const $ = _.add({ months: 1 }).set({ day: 1 });
    return Pa($, a.maxValue.value);
  }, i = (v = "month", S) => {
    if (!a.minValue.value || !n.value.length)
      return !1;
    if (a.disabled.value)
      return !0;
    const _ = n.value[0].value;
    if (S || a.prevPage.value) {
      const y = Bu(_, S || a.prevPage.value);
      return Me(y, a.minValue.value);
    }
    if (v === "year") {
      const y = _.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Me(y, a.minValue.value);
    }
    const $ = _.subtract({ months: 1 }).set({ day: 35 });
    return Me($, a.minValue.value);
  };
  function u(v) {
    var S;
    return !!((S = a.isDateDisabled) != null && S.call(a, v) || a.disabled.value || a.maxValue.value && Pa(v, a.maxValue.value) || a.minValue.value && Me(v, a.minValue.value));
  }
  const d = (v) => {
    var S;
    return !!((S = a.isDateUnavailable) != null && S.call(a, v));
  }, p = I(() => n.value.length ? n.value[0].rows[0].map((v) => t.dayOfWeek(Ne(v), a.weekdayFormat.value)) : []), c = (v = "month", S) => {
    const _ = n.value[0].value;
    if (S || a.nextPage.value) {
      const E = Iu(_, S || a.nextPage.value), P = _t({
        dateObj: E,
        weekStartsOn: a.weekStartsOn.value,
        locale: a.locale.value,
        fixedWeeks: a.fixedWeeks.value,
        numberOfMonths: a.numberOfMonths.value
      });
      n.value = P;
      const B = {};
      if (!S) {
        const D = P[0].value.compare(_);
        D >= Pt(_) && (B.day = 1), D >= 365 && (B.month = 1);
      }
      a.placeholder.value = P[0].value.set({ ...B });
      return;
    }
    const $ = v === "month" ? _.add({ months: a.pagedNavigation.value ? a.numberOfMonths.value : 1 }) : _.add({ years: 1 }), y = _t({
      dateObj: $,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
    n.value = y, a.placeholder.value = y[0].value.set({ day: 1 });
  }, f = (v = "month", S) => {
    const _ = n.value[0].value;
    if (S || a.prevPage.value) {
      const E = Tu(_, S || a.prevPage.value), P = _t({
        dateObj: E,
        weekStartsOn: a.weekStartsOn.value,
        locale: a.locale.value,
        fixedWeeks: a.fixedWeeks.value,
        numberOfMonths: a.numberOfMonths.value
      });
      n.value = P;
      const B = {};
      if (!S) {
        const D = _.compare(P[0].value);
        D >= Pt(_) && (B.day = 1), D >= 365 && (B.month = 1);
      }
      a.placeholder.value = P[0].value.set({ ...B });
      return;
    }
    const $ = v === "month" ? _.subtract({ months: a.pagedNavigation.value ? a.numberOfMonths.value : 1 }) : _.subtract({ years: 1 }), y = _t({
      dateObj: $,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
    n.value = y, a.placeholder.value = y[0].value.set({ day: 1 });
  };
  ee(a.placeholder, (v) => {
    l.value.some((S) => ko(S, v)) || (n.value = _t({
      dateObj: v,
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
  const m = I(() => {
    if (!n.value.length)
      return "";
    if (a.locale.value !== t.getLocale() && t.setLocale(a.locale.value), n.value.length === 1) {
      const B = n.value[0].value;
      return `${t.fullMonthAndYear(Ne(B), e.value)}`;
    }
    const v = Ne(n.value[0].value), S = Ne(n.value[n.value.length - 1].value), _ = t.fullMonth(v, e.value), $ = t.fullMonth(S, e.value), y = t.fullYear(v, e.value), E = t.fullYear(S, e.value);
    return y === E ? `${_} - ${$} ${E}` : `${_} ${y} - ${$} ${E}`;
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
const Ru = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Au = {
  role: "heading",
  "aria-level": "2"
}, [Qt, Ou] = Q("CalendarRoot"), ku = /* @__PURE__ */ w({
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
      isDateDisabled: _,
      isDateUnavailable: $,
      calendarLabel: y,
      defaultValue: E,
      nextPage: P,
      prevPage: B,
      dir: D
    } = ne(e), { primitiveElement: k, currentElement: V } = Ae(), O = Ce(D), F = ae(e, "modelValue", n, {
      defaultValue: E.value,
      passive: e.modelValue === void 0
    }), K = qt({
      defaultPlaceholder: e.placeholder,
      defaultValue: F.value
    }), W = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? K.copy(),
      passive: e.placeholder === void 0
    });
    function X(ue) {
      W.value = ue.copy();
    }
    const {
      fullCalendarLabel: N,
      headingValue: L,
      isDateDisabled: j,
      isDateUnavailable: z,
      isNextButtonDisabled: J,
      isPrevButtonDisabled: G,
      weekdays: Z,
      isOutsideVisibleView: te,
      nextPage: fe,
      prevPage: q,
      formatter: le,
      grid: he
    } = Hl({
      locale: l,
      placeholder: W,
      weekStartsOn: d,
      fixedWeeks: c,
      numberOfMonths: v,
      minValue: m,
      maxValue: g,
      disabled: s,
      weekdayFormat: p,
      pagedNavigation: u,
      isDateDisabled: _.value,
      isDateUnavailable: $.value,
      calendarLabel: y,
      nextPage: P,
      prevPage: B
    }), {
      isInvalid: xe,
      isDateSelected: ge
    } = Du({
      date: F,
      isDateDisabled: j,
      isDateUnavailable: z
    });
    ee(F, (ue) => {
      if (Array.isArray(ue) && ue.length) {
        const Se = ue[ue.length - 1];
        Se && !Ee(W.value, Se) && X(Se);
      } else !Array.isArray(ue) && ue && !Ee(W.value, ue) && X(ue);
    });
    function $e(ue) {
      if (f.value) {
        if (Array.isArray(F.value)) {
          if (!F.value) {
            F.value = [ue.copy()];
            return;
          }
          if (F.value.findIndex((Fe) => Oe(Fe, ue)) === -1)
            F.value = [...F.value, ue];
          else if (!S.value) {
            const Fe = F.value.filter((He) => !Oe(He, ue));
            if (!Fe.length) {
              W.value = ue.copy(), F.value = void 0;
              return;
            }
            F.value = Fe.map((He) => He.copy());
          }
        }
      } else {
        if (!F.value) {
          F.value = ue.copy();
          return;
        }
        !S.value && Ee(F.value, ue) ? (W.value = ue.copy(), F.value = void 0) : F.value = ue.copy();
      }
    }
    return oe(() => {
      i.value && bl(V.value);
    }), Ou({
      isDateUnavailable: z,
      dir: O,
      isDateDisabled: j,
      locale: l,
      formatter: le,
      modelValue: F,
      placeholder: W,
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
      isInvalid: xe,
      isDateSelected: ge,
      isNextButtonDisabled: J,
      isPrevButtonDisabled: G,
      isOutsideVisibleView: te,
      nextPage: fe,
      prevPage: q,
      parentElement: V,
      onPlaceholderChange: X,
      onDateChange: $e
    }), (ue, Se) => (b(), x(o(A), {
      ref_key: "primitiveElement",
      ref: k,
      as: ue.as,
      "as-child": ue.asChild,
      role: "application",
      "aria-label": o(N),
      "data-readonly": o(r) ? "" : void 0,
      "data-disabled": o(s) ? "" : void 0,
      "data-invalid": o(xe) ? "" : void 0,
      dir: o(O)
    }, {
      default: h(() => [
        C(ue.$slots, "default", {
          date: o(W),
          grid: o(he),
          weekDays: o(Z),
          weekStartsOn: o(d),
          locale: o(l),
          fixedWeeks: o(c)
        }),
        Ge("div", Ru, [
          Ge("div", Au, De(o(N)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Mu = /* @__PURE__ */ w({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vu = /* @__PURE__ */ w({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = Qt();
    return (n, l) => (b(), x(o(A), M(t, {
      "data-disabled": o(e).disabled.value ? "" : void 0
    }), {
      default: h(() => [
        C(n.$slots, "default", {
          headingValue: o(e).headingValue.value
        }, () => [
          me(De(o(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Fu = /* @__PURE__ */ w({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a) {
    const t = a, e = Qt(), n = I(() => e.disabled.value ? !0 : void 0), l = I(() => e.readonly.value ? !0 : void 0);
    return (s, r) => (b(), x(o(A), M(t, {
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
}), Lu = /* @__PURE__ */ w({
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
      return b(), x(o(A), {
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
}), Nu = /* @__PURE__ */ w({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zu = /* @__PURE__ */ w({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Qt();
    return (n, l) => (b(), x(o(A), {
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
          me("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Ku = /* @__PURE__ */ w({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Qt();
    return (n, l) => (b(), x(o(A), {
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
          me("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Hu = /* @__PURE__ */ w({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), M(t, { "aria-hidden": "true" }), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wu = /* @__PURE__ */ w({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ju = /* @__PURE__ */ w({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uu = /* @__PURE__ */ w({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = et(), n = Qt(), { primitiveElement: l, currentElement: s } = Ae(), r = I(() => t.day.day.toLocaleString(n.locale.value)), i = I(() => n.formatter.custom(Ne(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = I(() => n.isDateDisabled(t.day)), d = I(
      () => {
        var y;
        return (y = n.isDateUnavailable) == null ? void 0 : y.call(n, t.day);
      }
    ), p = I(() => pl(t.day, Ln())), c = I(() => !fl(t.day, t.month)), f = I(
      () => n.isOutsideVisibleView(t.day)
    ), m = I(() => Oe(t.day, n.placeholder.value)), g = I(() => n.isDateSelected(t.day)), v = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function S(y) {
      var E;
      n.readonly.value || n.isDateDisabled(y) || (E = n.isDateUnavailable) != null && E.call(n, y) || n.onDateChange(y);
    }
    function _() {
      S(t.day);
    }
    function $(y) {
      y.preventDefault(), y.stopPropagation();
      const E = n.parentElement.value, P = E ? Array.from(E.querySelectorAll(v)) : [];
      let D = P.indexOf(s.value);
      const k = 7, V = n.dir.value === "rtl" ? -1 : 1;
      switch (y.code) {
        case e.ARROW_RIGHT:
          D += V;
          break;
        case e.ARROW_LEFT:
          D -= V;
          break;
        case e.ARROW_UP:
          D -= k;
          break;
        case e.ARROW_DOWN:
          D += k;
          break;
        case e.ENTER:
        case e.SPACE_CODE:
          S(t.day);
          return;
        default:
          return;
      }
      if (D >= 0 && D < P.length) {
        P[D].focus();
        return;
      }
      if (D < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), se(() => {
          const O = E ? Array.from(E.querySelectorAll(v)) : [];
          O[O.length - Math.abs(D)].focus();
        });
        return;
      }
      if (D >= P.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), se(() => {
          (E ? Array.from(E.querySelectorAll(v)) : [])[D - P.length].focus();
        });
      }
    }
    return (y, E) => (b(), x(o(A), M({
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
      onClick: _,
      onKeydown: [
        re($, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = re(ie(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: h(() => [
        C(y.$slots, "default", { dayValue: r.value }, () => [
          me(De(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function La(a) {
  return a === "indeterminate";
}
function Wl(a) {
  return La(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
const Gu = ["value", "checked", "name", "disabled", "required"], [qu, Yu] = Q("CheckboxRoot"), Fv = /* @__PURE__ */ w({
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
    return Yu({
      disabled: l,
      state: s
    }), (p, c) => (b(), ce(we, null, [
      Y(o(A), M(p.$attrs, {
        id: p.id,
        ref: o(r),
        role: "checkbox",
        "as-child": e.asChild,
        as: p.as,
        type: p.as === "button" ? "button" : void 0,
        "aria-checked": o(La)(o(s)) ? "mixed" : o(s),
        "aria-required": !1,
        "aria-label": p.$attrs["aria-label"] || d.value,
        "data-state": o(Wl)(o(s)),
        "data-disabled": o(l) ? "" : void 0,
        disabled: o(l),
        onKeydown: re(ie(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c[0] || (c[0] = (f) => s.value = o(La)(o(s)) ? !0 : !o(s))
      }), {
        default: h(() => [
          C(p.$slots, "default", { checked: o(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      o(u) ? (b(), ce("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: p.value,
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
      }, null, 8, Gu)) : pe("", !0)
    ], 64));
  }
}), Lv = /* @__PURE__ */ w({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t } = R(), e = qu();
    return (n, l) => (b(), x(o(Pe), {
      present: n.forceMount || o(La)(o(e).state.value) || o(e).state.value === !0
    }, {
      default: h(() => [
        Y(o(A), M({
          ref: o(t),
          "data-state": o(Wl)(o(e).state.value),
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
}), [jl, Xu] = Q("PopperRoot"), Rt = /* @__PURE__ */ w({
  __name: "PopperRoot",
  setup(a) {
    const t = T();
    return Xu({
      anchor: t,
      onAnchorChange: (e) => t.value = e
    }), (e, n) => C(e.$slots, "default");
  }
}), At = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = R(), l = jl();
    return ee(n, () => {
      l.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (b(), x(o(A), {
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
function Zu(a) {
  return a !== null;
}
function Ju(a) {
  return {
    name: "transformOrigin",
    options: a,
    fn(t) {
      var S, _, $;
      const { placement: e, rects: n, middlewareData: l } = t, r = ((S = l.arrow) == null ? void 0 : S.centerOffset) !== 0, i = r ? 0 : a.arrowWidth, u = r ? 0 : a.arrowHeight, [d, p] = Dn(e), c = { start: "0%", center: "50%", end: "100%" }[p], f = (((_ = l.arrow) == null ? void 0 : _.x) ?? 0) + i / 2, m = ((($ = l.arrow) == null ? void 0 : $.y) ?? 0) + u / 2;
      let g = "", v = "";
      return d === "bottom" ? (g = r ? c : `${f}px`, v = `${-u}px`) : d === "top" ? (g = r ? c : `${f}px`, v = `${n.floating.height + u}px`) : d === "right" ? (g = `${-u}px`, v = r ? c : `${m}px`) : d === "left" && (g = `${n.floating.width + u}px`, v = r ? c : `${m}px`), { data: { x: g, y: v } };
    }
  };
}
function Dn(a) {
  const [t, e = "center"] = a.split("-");
  return [t, e];
}
const Ul = {
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
}, [Qu, ed] = Q("PopperContent"), Dt = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ dl({
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
    ...Ul
  }),
  emits: ["placed"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = jl(), { forwardRef: s, currentElement: r } = R(), i = T(), u = T(), { width: d, height: p } = Tl(u), c = I(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), f = I(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), m = I(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), g = I(() => ({
      padding: f.value,
      boundary: m.value.filter(Zu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), v = Wr(() => [
      xr({
        mainAxis: e.sideOffset + p.value,
        alignmentAxis: e.alignOffset
      }),
      e.prioritizePosition && e.avoidCollisions && Mo({
        ...g.value
      }),
      e.avoidCollisions && Sr({
        mainAxis: !0,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? Er() : void 0,
        ...g.value
      }),
      !e.prioritizePosition && e.avoidCollisions && Mo({
        ...g.value
      }),
      Pr({
        ...g.value,
        apply: ({ elements: O, rects: F, availableWidth: K, availableHeight: W }) => {
          const { width: X, height: N } = F.reference, L = O.floating.style;
          Object.assign(O.floating.style, {
            maxWidth: `${K}px`,
            maxHeight: `${W}px`
          }), L.setProperty(
            "--radix-popper-available-width",
            `${K}px`
          ), L.setProperty(
            "--radix-popper-available-height",
            `${W}px`
          ), L.setProperty(
            "--radix-popper-anchor-width",
            `${X}px`
          ), L.setProperty(
            "--radix-popper-anchor-height",
            `${N}px`
          );
        }
      }),
      u.value && Dr({ element: u.value, padding: e.arrowPadding }),
      Ju({
        arrowWidth: d.value,
        arrowHeight: p.value
      }),
      e.hideWhenDetached && $r({ strategy: "referenceHidden", ...g.value })
    ]), { floatingStyles: S, placement: _, isPositioned: $, middlewareData: y } = wr(
      l.anchor,
      i,
      {
        strategy: "fixed",
        placement: c,
        whileElementsMounted: (...O) => _r(...O, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: v
      }
    ), E = I(
      () => Dn(_.value)[0]
    ), P = I(
      () => Dn(_.value)[1]
    );
    ye(() => {
      $.value && n("placed");
    });
    const B = I(
      () => {
        var O;
        return ((O = y.value.arrow) == null ? void 0 : O.centerOffset) !== 0;
      }
    ), D = T("");
    ye(() => {
      r.value && (D.value = window.getComputedStyle(r.value).zIndex);
    });
    const k = I(() => {
      var O;
      return ((O = y.value.arrow) == null ? void 0 : O.x) ?? 0;
    }), V = I(() => {
      var O;
      return ((O = y.value.arrow) == null ? void 0 : O.y) ?? 0;
    });
    return ed({
      placedSide: E,
      onArrowChange: (O) => u.value = O,
      arrowX: k,
      arrowY: V,
      shouldHideArrow: B
    }), (O, F) => {
      var K, W, X;
      return b(), ce("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: ke({
          ...o(S),
          transform: o($) ? o(S).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: D.value,
          "--radix-popper-transform-origin": [
            (K = o(y).transformOrigin) == null ? void 0 : K.x,
            (W = o(y).transformOrigin) == null ? void 0 : W.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((X = o(y).hide) == null ? void 0 : X.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        Y(o(A), M({ ref: o(s) }, O.$attrs, {
          "as-child": e.asChild,
          as: O.as,
          "data-side": E.value,
          "data-align": P.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: o($) ? void 0 : "none"
          }
        }), {
          default: h(() => [
            C(O.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), td = /* @__PURE__ */ Ge("polygon", { points: "0,0 30,0 15,10" }, null, -1), ad = /* @__PURE__ */ w({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(A), M(t, {
      width: e.width,
      height: e.height,
      viewBox: e.asChild ? void 0 : "0 0 30 10",
      preserveAspectRatio: e.asChild ? void 0 : "none"
    }), {
      default: h(() => [
        C(e.$slots, "default", {}, () => [
          td
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), nd = {
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
    const { forwardRef: t } = R(), e = Qu(), n = I(() => nd[e.placedSide.value]);
    return (l, s) => {
      var r, i, u, d;
      return b(), ce("span", {
        ref: (p) => {
          o(e).onArrowChange(p);
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
        Y(ad, M(l.$attrs, {
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
}), ta = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return R(), (t, e) => (b(), x(o(A), {
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
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), to = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = I(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, l) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${l}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${l}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, l]) => ({ name: `[${t.name}][${n}]`, value: l })) : []);
    return (n, l) => (b(!0), ce(we, null, ya(e.value, (s) => (b(), x(ta, {
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
}), [nt, od] = Q("ComboboxRoot"), Nv = /* @__PURE__ */ w({
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
    const e = a, n = t, { multiple: l, disabled: s, dir: r } = ne(e), i = Ce(r), u = ae(e, "searchTerm", n, {
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
      var L, j;
      p.value = N, await se(), N ? (d.value && (Array.isArray(d.value) && l.value ? c.value = (L = y().find((z) => {
        var J, G;
        return ((G = (J = z.ref) == null ? void 0 : J.dataset) == null ? void 0 : G.state) === "checked";
      })) == null ? void 0 : L.value : c.value = d.value), (j = v.value) == null || j.focus(), W()) : (g.value = !1, e.resetSearchTermOnBlur && k());
    }
    function m(N) {
      if (Array.isArray(d.value) && l.value) {
        const L = d.value.findIndex((z) => Xe(z, N)), j = [...d.value];
        L === -1 ? j.push(N) : j.splice(L, 1), d.value = j;
      } else
        d.value = N, f(!1);
    }
    const g = T(!1), v = T(), S = T(), { forwardRef: _, currentElement: $ } = R(), { getItems: y, reactiveItems: E, itemMapSize: P } = Yt("data-radix-vue-combobox-item"), B = T([]);
    ee(() => P.value, () => {
      B.value = y().map((N) => N.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const D = I(() => {
      if (g.value) {
        if (e.filterFunction)
          return e.filterFunction(B.value, u.value);
        const N = B.value.filter((L) => typeof L == "string");
        if (N.length)
          return N.filter((L) => {
            var j;
            return L.toLowerCase().includes((j = u.value) == null ? void 0 : j.toLowerCase());
          });
      }
      return B.value;
    });
    function k() {
      !l.value && d.value && !Array.isArray(d.value) ? e.displayValue ? u.value = e.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const V = I(() => D.value.findIndex((N) => Xe(N, c.value))), O = I(() => {
      var N;
      return (N = E.value.find((L) => Xe(L.value, c.value))) == null ? void 0 : N.ref;
    }), F = I(() => JSON.stringify(d.value));
    ee(F, async () => {
      await se(), await se(), k();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !e.searchTerm
    }), ee(() => [D.value.length, u.value.length], async ([N, L], [j, z]) => {
      await se(), await se(), N && (z > L || V.value === -1) && (c.value = D.value[0]);
    });
    const K = Qe($);
    function W() {
      O.value instanceof Element && O.value.scrollIntoView({ block: "nearest" });
    }
    function X() {
      O.value instanceof Element && O.value.focus && O.value.focus();
    }
    return od({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: g,
      multiple: l,
      disabled: s,
      open: p,
      onOpenChange: f,
      filteredOptions: D,
      contentId: "",
      inputElement: v,
      selectedElement: O,
      onInputElementChange: (N) => v.value = N,
      onInputNavigation: async (N) => {
        const L = V.value;
        L === 0 && N === "up" || L === D.value.length - 1 && N === "down" || (L === -1 && D.value.length || N === "home" ? c.value = D.value[0] : N === "end" ? c.value = D.value[D.value.length - 1] : c.value = D.value[N === "up" ? L - 1 : L + 1], W(), X(), se(() => {
          var j;
          return (j = v.value) == null ? void 0 : j.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async () => {
        var N;
        D.value.length && c.value && O.value instanceof Element && ((N = O.value) == null || N.click());
      },
      selectedValue: c,
      onSelectedValueChange: (N) => c.value = N,
      parentElement: $,
      contentElement: S,
      onContentElementChange: (N) => S.value = N
    }), (N, L) => (b(), x(o(Rt), null, {
      default: h(() => [
        Y(o(A), M({
          ref: o(_),
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
            o(K) && e.name ? (b(), x(o(to), {
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
}), zv = /* @__PURE__ */ w({
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
      return b(), x(o(A), {
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
}), Kv = /* @__PURE__ */ w({
  __name: "ComboboxAnchor",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const { forwardRef: t } = R();
    return (e, n) => (b(), x(o(At), { "as-child": "" }, {
      default: h(() => [
        Y(o(A), M({
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
}), Hv = /* @__PURE__ */ w({
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
    return (l, s) => (b(), x(o(A), M(t, {
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
}), Wv = /* @__PURE__ */ w({
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
    return (l, s) => (b(), x(o(A), M({
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
}), [Gl, ld] = Q("ComboboxGroup"), jv = /* @__PURE__ */ w({
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
    return El(n, () => {
      se(() => {
        i();
      });
    }, { childList: !0 }), ee(() => s.searchTerm.value, () => {
      se(() => {
        i();
      });
    }, { immediate: !0 }), ld({
      id: l
    }), (u, d) => Ka((b(), x(o(A), M(t, {
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
      [Vn, r.value]
    ]);
  }
}), Uv = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Gl({ id: "" });
    return (n, l) => (b(), x(o(A), M(t, {
      id: o(e).id
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [sd, rd] = Q("ComboboxContent"), id = /* @__PURE__ */ w({
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
    ba(e.bodyLock);
    const { forwardRef: r, currentElement: i } = R();
    Ca(i);
    const u = I(() => e.position === "popper" ? e : {}), d = Tt(u.value);
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
    return rd({ position: l }), (f, m) => (b(), x(o(Xt), null, {
      default: h(() => [
        f.dismissable ? (b(), x(o(gt), {
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
            (b(), x(qe(o(l) === "popper" ? o(Dt) : o(A)), M({ ...f.$attrs, ...o(d) }, {
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
        }, 8, ["disable-outside-pointer-events"])) : (b(), x(qe(o(l) === "popper" ? o(Dt) : o(A)), M({ key: 1 }, { ...f.$attrs, ...u.value }, {
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
}), Gv = /* @__PURE__ */ w({
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
    const l = _e(a, t), { forwardRef: s } = R(), r = nt();
    return r.contentId || (r.contentId = ve(void 0, "radix-vue-combobox-content")), (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(r).open.value
    }, {
      default: h(() => [
        Y(id, M({ ...o(l), ...i.$attrs }, { ref: o(s) }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), qv = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = nt(), n = I(() => e.filteredOptions.value.length === 0);
    return (l, s) => n.value ? (b(), x(o(A), H(M({ key: 0 }, t)), {
      default: h(() => [
        C(l.$slots, "default", {}, () => [
          me("No options")
        ])
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Yv = /* @__PURE__ */ w({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), ce(we, null, [
      Y(o(A), M({ ...n.$attrs, ...t }, {
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
      }, 16),
      Y(o(A), {
        as: "style",
        nonce: n.nonce
      }, {
        default: h(() => [
          me(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), [ud, dd] = Q("ComboboxItem"), cd = "combobox.select", Xv = /* @__PURE__ */ w({
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
    Gl({ id: "", options: T([]) });
    const { forwardRef: r } = R(), i = I(
      () => {
        var v, S;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (v = s.modelValue.value) == null ? void 0 : v.some((_) => Xe(_, e.value)) : Xe((S = s.modelValue) == null ? void 0 : S.value, e.value);
      }
    ), u = I(() => Xe(s.selectedValue.value, e.value)), d = ve(void 0, "radix-vue-combobox-item"), p = ve(void 0, "radix-vue-combobox-option"), c = I(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((v) => Xe(v, e.value)) : !0);
    async function f(v) {
      n("select", v), !(v != null && v.defaultPrevented) && !l.value && v && s.onValueChange(e.value);
    }
    function m(v) {
      if (!v)
        return;
      const S = { originalEvent: v, value: e.value };
      Wt(cd, f, S);
    }
    async function g(v) {
      await se(), !v.defaultPrevented && s.onSelectedValueChange(e.value);
    }
    if (e.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return dd({
      isSelected: i
    }), (v, S) => (b(), x(o(Zt), { value: v.value }, {
      default: h(() => [
        Ka(Y(o(A), {
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
              me(De(v.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Vn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Zv = /* @__PURE__ */ w({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a;
    R();
    const e = ud();
    return (n, l) => o(e).isSelected.value ? (b(), x(o(A), M({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Jv = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(A), M(t, { "aria-hidden": "" }), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qv = /* @__PURE__ */ w({
  __name: "ComboboxArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a, e = nt(), n = sd();
    return R(), (l, s) => o(e).open.value && o(n).position.value === "popper" ? (b(), x(o(ea), H(M({ key: 0 }, t)), {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), em = /* @__PURE__ */ w({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ya = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(At), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ao = /* @__PURE__ */ w({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(ea), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ot, ql] = Q(["MenuRoot", "MenuSub"], "MenuContext"), [xa, pd] = Q("MenuRoot"), no = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { modal: l, dir: s } = ne(e), r = Ce(s), i = ae(e, "open", n), u = T(), d = T(!1);
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
    }), ql({
      open: i,
      onOpenChange: (p) => {
        i.value = p;
      },
      content: u,
      onContentChange: (p) => {
        u.value = p;
      }
    }), pd({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: r,
      modal: l
    }), (p, c) => (b(), x(o(Rt), null, {
      default: h(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }));
  }
}), fd = "rovingFocusGroup.onEntryFocus", vd = { bubbles: !1, cancelable: !0 }, Xa = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function md(a, t) {
  return t !== "rtl" ? a : a === "ArrowLeft" ? "ArrowRight" : a === "ArrowRight" ? "ArrowLeft" : a;
}
function Yl(a, t, e) {
  const n = md(a.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Xa[n];
}
function Xl(a, t = !1) {
  const e = document.activeElement;
  for (const n of a)
    if (n === e || (n.focus({ preventScroll: t }), document.activeElement !== e))
      return;
}
function hd(a, t) {
  return a.map((e, n) => a[(t + n) % a.length]);
}
const [yd, gd] = Q("RovingFocusGroup"), kt = /* @__PURE__ */ w({
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
    const n = a, l = e, { loop: s, orientation: r, dir: i } = ne(n), u = Ce(i), d = ae(n, "currentTabStopId", l, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), p = T(!1), c = T(!1), f = T(0), { getItems: m } = Yt();
    function g(v) {
      const S = !c.value;
      if (v.currentTarget && v.target === v.currentTarget && S && !p.value) {
        const _ = new CustomEvent(fd, vd);
        if (v.currentTarget.dispatchEvent(_), l("entryFocus", _), !_.defaultPrevented) {
          const $ = m().map((B) => B.ref).filter((B) => B.dataset.disabled !== ""), y = $.find((B) => B.getAttribute("data-active") === "true"), E = $.find(
            (B) => B.id === d.value
          ), P = [y, E, ...$].filter(
            Boolean
          );
          Xl(P, n.preventScrollOnEntryFocus);
        }
      }
      c.value = !1;
    }
    return t({
      getItems: m
    }), gd({
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
    }), (v, S) => (b(), x(o(Xt), null, {
      default: h(() => [
        Y(o(A), {
          tabindex: p.value || f.value === 0 ? -1 : 0,
          "data-orientation": o(r),
          as: v.as,
          "as-child": v.asChild,
          dir: o(u),
          style: { outline: "none" },
          onMousedown: S[0] || (S[0] = (_) => c.value = !0),
          onFocus: g,
          onBlur: S[1] || (S[1] = (_) => p.value = !1)
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
}), Mt = /* @__PURE__ */ w({
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
    const t = a, e = yd(), n = I(() => t.tabStopId || ve()), l = I(
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
      const u = Yl(
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
          d = e.loop.value ? hd(d, p + 1) : d.slice(p + 1);
        }
        se(() => Xl(d));
      }
    }
    return (i, u) => (b(), x(o(Zt), null, {
      default: h(() => [
        Y(o(A), {
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
}), [oo, bd] = Q("MenuContent"), lo = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ dl({
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
    ...Ul
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Ot(), s = xa(), { trapFocus: r, disableOutsidePointerEvents: i, loop: u } = ne(e);
    Un(), ba(i.value);
    const d = T(""), p = T(0), c = T(0), f = T(null), m = T("right"), g = T(0), v = T(null), { createCollection: S } = Ve(), { forwardRef: _, currentElement: $ } = R(), y = S($);
    ee($, (O) => {
      l.onContentChange(O);
    });
    const { handleTypeaheadSearch: E } = wa(y);
    Te(() => {
      window.clearTimeout(p.value);
    });
    function P(O) {
      var K, W;
      return m.value === ((K = f.value) == null ? void 0 : K.side) && pu(O, (W = f.value) == null ? void 0 : W.area);
    }
    async function B(O) {
      var F;
      n("openAutoFocus", O), !O.defaultPrevented && (O.preventDefault(), (F = $.value) == null || F.focus({
        preventScroll: !0
      }));
    }
    function D(O) {
      if (O.defaultPrevented)
        return;
      const K = O.target.closest("[data-radix-menu-content]") === O.currentTarget, W = O.ctrlKey || O.altKey || O.metaKey, X = O.key.length === 1, N = It(
        O,
        document.activeElement,
        $.value,
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
      if (O.code === "Space" || (K && (O.key === "Tab" && O.preventDefault(), !W && X && E(O.key)), O.target !== $.value) || !iu.includes(O.key))
        return;
      O.preventDefault();
      const L = y.value;
      Ll.includes(O.key) && L.reverse(), Pn(L);
    }
    function k(O) {
      var F, K;
      (K = (F = O == null ? void 0 : O.currentTarget) == null ? void 0 : F.contains) != null && K.call(F, O.target) || (window.clearTimeout(p.value), d.value = "");
    }
    function V(O) {
      var W;
      if (!pa(O))
        return;
      const F = O.target, K = g.value !== O.clientX;
      if ((W = O == null ? void 0 : O.currentTarget) != null && W.contains(F) && K) {
        const X = O.clientX > g.value ? "right" : "left";
        m.value = X, g.value = O.clientX;
      }
    }
    return bd({
      onItemEnter: (O) => !!P(O),
      onItemLeave: (O) => {
        var F;
        P(O) || ((F = $.value) == null || F.focus(), v.value = null);
      },
      onTriggerLeave: (O) => !!P(O),
      searchRef: d,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (O) => {
        f.value = O;
      }
    }), (O, F) => (b(), x(o(qa), {
      "as-child": "",
      trapped: o(r),
      onMountAutoFocus: B,
      onUnmountAutoFocus: F[7] || (F[7] = (K) => n("closeAutoFocus", K))
    }, {
      default: h(() => [
        Y(o(gt), {
          "as-child": "",
          "disable-outside-pointer-events": o(i),
          onEscapeKeyDown: F[2] || (F[2] = (K) => n("escapeKeyDown", K)),
          onPointerDownOutside: F[3] || (F[3] = (K) => n("pointerDownOutside", K)),
          onFocusOutside: F[4] || (F[4] = (K) => n("focusOutside", K)),
          onInteractOutside: F[5] || (F[5] = (K) => n("interactOutside", K)),
          onDismiss: F[6] || (F[6] = (K) => n("dismiss"))
        }, {
          default: h(() => [
            Y(o(kt), {
              "current-tab-stop-id": v.value,
              "onUpdate:currentTabStopId": F[0] || (F[0] = (K) => v.value = K),
              "as-child": "",
              orientation: "vertical",
              dir: o(s).dir.value,
              loop: o(u),
              onEntryFocus: F[1] || (F[1] = (K) => {
                n("entryFocus", K), o(s).isUsingKeyboardRef.value || K.preventDefault();
              })
            }, {
              default: h(() => [
                Y(o(Dt), {
                  ref: o(_),
                  role: "menu",
                  as: O.as,
                  "as-child": O.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": o(Qn)(o(l).open.value),
                  dir: o(s).dir.value,
                  side: O.side,
                  "side-offset": O.sideOffset,
                  align: O.align,
                  "align-offset": O.alignOffset,
                  "avoid-collisions": O.avoidCollisions,
                  "collision-boundary": O.collisionBoundary,
                  "collision-padding": O.collisionPadding,
                  "arrow-padding": O.arrowPadding,
                  "prioritize-position": O.prioritizePosition,
                  sticky: O.sticky,
                  "hide-when-detached": O.hideWhenDetached,
                  onKeydown: D,
                  onBlur: k,
                  onPointermove: V
                }, {
                  default: h(() => [
                    C(O.$slots, "default")
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
}), Zl = /* @__PURE__ */ w({
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = oo(), n = T(!1);
    async function l(r) {
      if (!r.defaultPrevented && pa(r)) {
        if (t.disabled)
          e.onItemLeave(r);
        else if (!e.onItemEnter(r)) {
          const u = r.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(r) {
      await se(), !r.defaultPrevented && pa(r) && e.onItemLeave(r);
    }
    return (r, i) => (b(), x(o(A), {
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
}), Sa = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = xa(), i = oo(), u = T(!1);
    async function d() {
      const p = s.value;
      if (!e.disabled && p) {
        const c = new CustomEvent(su, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", c), await se(), c.defaultPrevented ? u.value = !1 : r.onClose();
      }
    }
    return (p, c) => (b(), x(Zl, M(e, {
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
        p.disabled || m && f.key === " " || o(En).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: h(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Cd, Jl] = Q(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), so = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = Cd({
      checked: T(!1)
    });
    return (e, n) => (b(), x(o(Pe), {
      present: e.forceMount || o(Fa)(o(t).checked.value) || o(t).checked.value === !0
    }, {
      default: h(() => [
        Y(o(A), {
          as: e.as,
          "as-child": e.asChild,
          "data-state": o(eo)(o(t).checked.value)
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
}), ro = /* @__PURE__ */ w({
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
    return Jl({ checked: l }), (s, r) => (b(), x(Sa, M({ role: "menuitemcheckbox" }, e, {
      "aria-checked": o(Fa)(o(l)) ? "mixed" : o(l),
      "data-state": o(eo)(o(l)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), o(Fa)(o(l)) ? l.value = !0 : l.value = !o(l);
      })
    }), {
      default: h(() => [
        C(s.$slots, "default", { checked: o(l) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), wd = /* @__PURE__ */ w({
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
    const e = a, n = t, l = _e(e, n), s = Ot(), { forwardRef: r, currentElement: i } = R();
    return Ca(i), (u, d) => (b(), x(lo, M(o(l), {
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
}), _d = /* @__PURE__ */ w({
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
    const l = _e(a, t), s = Ot();
    return (r, i) => (b(), x(lo, M(o(l), {
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
}), io = /* @__PURE__ */ w({
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
    const l = _e(a, t), s = Ot(), r = xa();
    return (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(s).open.value
    }, {
      default: h(() => [
        o(r).modal.value ? (b(), x(wd, H(M({ key: 0 }, { ...i.$attrs, ...o(l) })), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), x(_d, H(M({ key: 1 }, { ...i.$attrs, ...o(l) })), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Za = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), M({ role: "group" }, t), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uo = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), co = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [xd, Sd] = Q("MenuRadioGroup"), po = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "modelValue", t);
    return Sd({
      modelValue: l,
      onValueChange: (s) => {
        l.value = s;
      }
    }), (s, r) => (b(), x(Za, H(U(e)), {
      default: h(() => [
        C(s.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 16));
  }
}), fo = /* @__PURE__ */ w({
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
    const e = a, n = t, { value: l } = ne(e), s = xd(), r = I(
      () => s.modelValue.value === (l == null ? void 0 : l.value)
    );
    return Jl({ checked: r }), (i, u) => (b(), x(Sa, M({ role: "menuitemradio" }, e, {
      "aria-checked": r.value,
      "data-state": o(eo)(r.value),
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
}), vo = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), M(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ql, Ed] = Q("MenuSub"), mo = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "open", t, {
      defaultValue: !1,
      passive: e.open === void 0
    }), s = Ot(), r = T(), i = T();
    return ye((u) => {
      (s == null ? void 0 : s.open.value) === !1 && (l.value = !1), u(() => l.value = !1);
    }), ql({
      open: l,
      onOpenChange: (u) => {
        l.value = u;
      },
      content: i,
      onContentChange: (u) => {
        i.value = u;
      }
    }), Ed({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (u) => {
        r.value = u;
      }
    }), (u, d) => (b(), x(o(Rt), null, {
      default: h(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ho = /* @__PURE__ */ w({
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
    const l = _e(a, t), s = Ot(), r = xa(), i = Ql(), { forwardRef: u, currentElement: d } = R();
    return i.contentId || (i.contentId = ve(void 0, "radix-vue-menu-sub-content")), (p, c) => (b(), x(o(Pe), {
      present: p.forceMount || o(s).open.value
    }, {
      default: h(() => [
        Y(lo, M(o(l), {
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
            const m = (v = f.currentTarget) == null ? void 0 : v.contains(f.target), g = o(du)[o(r).dir.value].includes(f.key);
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
}), yo = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Ot(), n = xa(), l = Ql(), s = oo(), r = T(null);
    l.triggerId || (l.triggerId = ve(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    Te(() => {
      i();
    });
    function u(c) {
      !pa(c) || s.onItemEnter(c) || !t.disabled && !e.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        e.onOpenChange(!0), i();
      }, 100));
    }
    async function d(c) {
      var m, g;
      if (!pa(c))
        return;
      i();
      const f = (m = e.content.value) == null ? void 0 : m.getBoundingClientRect();
      if (f != null && f.width) {
        const v = (g = e.content.value) == null ? void 0 : g.dataset.side, S = v === "right", _ = S ? -5 : 5, $ = f[S ? "left" : "right"], y = f[S ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: c.clientX + _, y: c.clientY },
            { x: $, y: f.top },
            { x: y, y: f.top },
            { x: y, y: f.bottom },
            { x: $, y: f.bottom }
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
      t.disabled || f && c.key === " " || uu[n.dir.value].includes(c.key) && (e.onOpenChange(!0), await se(), (m = e.content.value) == null || m.focus(), c.preventDefault());
    }
    return (c, f) => (b(), x(Ya, { "as-child": "" }, {
      default: h(() => [
        Y(Zl, M(t, {
          id: o(l).triggerId,
          ref: (m) => {
            var g;
            (g = o(l)) == null || g.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": o(e).open.value,
          "aria-controls": o(l).contentId,
          "data-state": o(Qn)(o(e).open.value),
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
}), [es, Pd] = Q("ContextMenuRoot"), tm = /* @__PURE__ */ w({
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
    const r = Ce(l), i = T(!1);
    return Pd({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      dir: r,
      modal: s
    }), ee(i, (u) => {
      n("update:open", u);
    }), (u, d) => (b(), x(o(no), {
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
function jo(a) {
  return a.pointerType !== "mouse";
}
const am = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, { disabled: e } = ne(t), { forwardRef: n } = R(), l = es(), s = T({ x: 0, y: 0 }), r = I(() => ({
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
      e.value || (await se(), jo(m) && !m.defaultPrevented && (u(), i.value = window.setTimeout(() => d(m), 700)));
    }
    async function f(m) {
      e.value || (await se(), jo(m) && !m.defaultPrevented && u());
    }
    return (m, g) => (b(), ce(we, null, [
      Y(o(Ya), {
        as: "template",
        element: r.value
      }, null, 8, ["element"]),
      Y(o(A), M({
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
}), nm = /* @__PURE__ */ w({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(co), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), om = /* @__PURE__ */ w({
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
    const l = _e(a, t);
    R();
    const s = es(), r = T(!1);
    return (i, u) => (b(), x(o(io), M(o(l), {
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
    }, 16));
  }
}), lm = /* @__PURE__ */ w({
  __name: "ContextMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(ao), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sm = /* @__PURE__ */ w({
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
    return R(), (s, r) => (b(), x(o(Sa), H(U({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rm = /* @__PURE__ */ w({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(Za), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), im = /* @__PURE__ */ w({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(vo), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), um = /* @__PURE__ */ w({
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
    return R(), (s, r) => (b(), x(o(ro), H(U({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dm = /* @__PURE__ */ w({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(so), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cm = /* @__PURE__ */ w({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(uo), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ w({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), x(o(po), H(U({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fm = /* @__PURE__ */ w({
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
    return R(), (s, r) => (b(), x(o(fo), H(U({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vm = /* @__PURE__ */ w({
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
    return (s, r) => (b(), x(o(mo), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Ue(l) ? l.value = i : null)
    }, {
      default: h(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), mm = /* @__PURE__ */ w({
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
    const l = _e(a, t);
    return R(), (s, r) => (b(), x(o(ho), M(o(l), { style: {
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
    }, 16));
  }
}), hm = /* @__PURE__ */ w({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(yo), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dd = ["hour", "minute", "second"];
function Nt(a) {
  const { formatter: t } = a, e = Nn.map((n) => [n, a.value[n]]);
  if ("hour" in a.value) {
    const n = hl.map((s) => s === "dayPeriod" ? [s, t.dayPeriod(Ne(a.value))] : [s, a.value[s]]), l = [...e, ...n];
    return Object.fromEntries(l);
  }
  return Object.fromEntries(e);
}
function ts(a) {
  const t = yl.map((e) => e === "dayPeriod" ? [e, "AM"] : [e, null]).filter(([e]) => e === "literal" || e === null ? !1 : a === "day" ? !Dd.includes(e) : !0);
  return Object.fromEntries(t);
}
function $d(a) {
  const { segmentValues: t, formatter: e, locale: n } = a;
  function l(r) {
    if ("hour" in t) {
      const i = t[r];
      return i !== null ? r === "day" && t.month !== null ? e.part(a.dateRef.set({ [r]: i, month: t.month }), r, {
        hourCycle: a.hourCycle === 24 ? "h24" : void 0
      }) : e.part(a.dateRef.set({ [r]: i }), r, {
        hourCycle: a.hourCycle === 24 ? "h24" : void 0
      }) : mn(r, "", n.value);
    } else {
      if (Kr(r)) {
        const i = t[r];
        return i !== null ? r === "day" && t.month !== null ? e.part(a.dateRef.set({ [r]: i, month: t.month }), r) : e.part(a.dateRef.set({ [r]: i }), r) : mn(r, "", n.value);
      }
      return "";
    }
  }
  return Object.keys(t).reduce((r, i) => {
    if (!gl(i))
      return r;
    if ("hour" in t && i === "dayPeriod") {
      const u = t[i];
      u !== null ? r[i] = u : r[i] = mn(i, "AM", n.value);
    } else
      r[i] = l(i);
    return r;
  }, {});
}
function Bd(a) {
  const { granularity: t, formatter: e, contentObj: n, hideTimeZone: l, hourCycle: s } = a;
  return e.toParts(a.dateRef, Hr(t, s)).map((u) => ["literal", "timeZoneName", null].includes(u.type) || !gl(u.type) ? {
    part: u.type,
    value: u.value
  } : {
    part: u.type,
    value: n[u.type]
  }).filter((u) => !(u.part === null || u.value === null || u.part === "timeZoneName" && (!vl(a.dateRef) || l)));
}
function $n(a) {
  const t = $d(a), e = Bd({
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
const Id = ["id", "value", "name", "disabled", "required"], [Td, Rd] = Q("DateFieldRoot"), Ad = /* @__PURE__ */ w({
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
    const n = a, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, granularity: d, defaultValue: p, dir: c } = ne(n), f = jn(n.locale), m = Ce(c), { primitiveElement: g, currentElement: v } = Ae(), S = T(/* @__PURE__ */ new Set());
    oe(() => {
      Array.from(v.value.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((z) => z.getAttribute("data-radix-vue-date-field-segment") !== "literal").forEach((z) => S.value.add(z));
    });
    const _ = ae(n, "modelValue", l, {
      defaultValue: p.value,
      passive: n.modelValue === void 0
    }), $ = qt({
      defaultPlaceholder: n.placeholder,
      granularity: d.value,
      defaultValue: _.value
    }), y = ae(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? $.copy(),
      passive: n.placeholder === void 0
    }), E = I(() => n.granularity ? da(y.value) ? n.granularity : "day" : da(y.value) ? "minute" : "day"), P = I(() => {
      var z;
      return _.value ? !!((z = u.value) != null && z.call(u, _.value) || n.minValue && Me(_.value, n.minValue) || n.maxValue && Me(n.maxValue, _.value)) : !1;
    }), B = ts(E.value), D = T(_.value ? { ...Nt({ value: _.value, formatter: f }) } : { ...B }), k = I(() => $n({
      granularity: E.value,
      dateRef: y.value,
      formatter: f,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: D.value,
      locale: s
    })), V = I(() => k.value.arr), O = I(() => V.value.filter(({ part: z }) => z !== "literal"));
    ee(s, (z) => {
      f.getLocale() !== z && f.setLocale(z);
    }), ee(_, (z) => {
      z !== void 0 && (!Ee(y.value, z) || y.value.compare(z) !== 0) && (y.value = z.copy());
    }), ee([_, s], ([z]) => {
      z !== void 0 ? D.value = { ...Nt({ value: z, formatter: f }) } : D.value = { ...B };
    });
    const F = T(null), K = I(() => Array.from(S.value).findIndex((z) => {
      var J;
      return z.getAttribute("data-radix-vue-date-field-segment") === ((J = F.value) == null ? void 0 : J.getAttribute("data-radix-vue-date-field-segment"));
    })), W = I(() => {
      const z = m.value === "rtl" ? -1 : 1;
      return (z < 0 ? K.value < 0 : K.value > S.value.size - 1) ? null : Array.from(S.value)[K.value + z];
    }), X = I(() => {
      const z = m.value === "rtl" ? -1 : 1;
      return (z > 0 ? K.value < 0 : K.value > S.value.size - 1) ? null : Array.from(S.value)[K.value - z];
    }), N = et();
    function L(z) {
      var J, G;
      Ye(z.key) && (z.key === N.ARROW_LEFT && ((J = X.value) == null || J.focus()), z.key === N.ARROW_RIGHT && ((G = W.value) == null || G.focus()));
    }
    function j(z) {
      F.value = z;
    }
    return Rd({
      isDateUnavailable: u.value,
      locale: s,
      modelValue: _,
      placeholder: y,
      disabled: r,
      formatter: f,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: D,
      isInvalid: P,
      segmentContents: O,
      elements: S,
      setFocusedElement: j,
      focusNext() {
        var z;
        (z = W.value) == null || z.focus();
      }
    }), t({
      /** Helper to set the focused element inside the DateField */
      setFocusedElement: j
    }), (z, J) => (b(), ce(we, null, [
      Y(o(A), M(z.$attrs, {
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
            modelValue: o(_),
            segments: V.value,
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
        onFocus: J[0] || (J[0] = (G) => {
          var Z, te;
          return (te = (Z = Array.from(S.value)) == null ? void 0 : Z[0]) == null ? void 0 : te.focus();
        })
      }, null, 40, Id)
    ], 64));
  }
}), Vt = {
  role: "spinbutton",
  contenteditable: !0,
  tabindex: 0,
  spellcheck: !1,
  inputmode: "numeric",
  autocorrect: "off",
  enterkeyhint: "next",
  style: "caret-color: transparent;"
};
function Od(a) {
  const { segmentValues: t, placeholder: e } = a, n = t.day === null, l = t.day ? e.set({ day: t.day }) : e, s = l.day, r = 1, i = Pt(l), u = n ? "Empty" : `${s}`;
  return {
    ...Vt,
    "aria-label": "day,",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function kd(a) {
  const { segmentValues: t, placeholder: e, formatter: n } = a, l = t.month === null, s = t.month ? e.set({ month: t.month }) : e, r = s.month, i = 1, u = 12, d = l ? "Empty" : `${r} - ${n.fullMonth(Ne(s))}`;
  return {
    ...Vt,
    "aria-label": "month, ",
    contenteditable: !0,
    "aria-valuemin": i,
    "aria-valuemax": u,
    "aria-valuenow": r,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function Md(a) {
  const { segmentValues: t, placeholder: e } = a, n = t.year === null, l = t.year ? e.set({ year: t.year }) : e, s = 1, r = 9999, i = l.year, u = n ? "Empty" : `${i}`;
  return {
    ...Vt,
    "aria-label": "year, ",
    "aria-valuemin": s,
    "aria-valuemax": r,
    "aria-valuenow": i,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Vd(a) {
  const { segmentValues: t, hourCycle: e, placeholder: n } = a;
  if (!("hour" in t) || !("hour" in n))
    return {};
  const l = t.hour === null, s = t.hour ? n.set({ hour: t.hour }) : n, r = e === 12 ? 1 : 0, i = e === 12 ? 12 : 23, u = s.hour, d = l ? "Empty" : `${u} ${t.dayPeriod ?? ""}`;
  return {
    ...Vt,
    "aria-label": "hour, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": u,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function Fd(a) {
  const { segmentValues: t, placeholder: e } = a;
  if (!("minute" in t) || !("minute" in e))
    return {};
  const n = t.minute === null, s = (t.minute ? e.set({ minute: t.minute }) : e).minute, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Vt,
    "aria-label": "minute, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Ld(a) {
  const { segmentValues: t, placeholder: e } = a;
  if (!("second" in t) || !("second" in e))
    return {};
  const n = t.second === null, s = (t.second ? e.set({ second: t.second }) : e).second, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Vt,
    "aria-label": "second, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Nd(a) {
  const { segmentValues: t } = a;
  if (!("dayPeriod" in t))
    return {};
  const e = 0, n = 12, l = t.hour ? t.hour > 12 ? t.hour - 12 : t.hour : 0, s = t.dayPeriod ?? "AM";
  return {
    ...Vt,
    inputmode: "text",
    "aria-label": "AM/PM",
    "aria-valuemin": e,
    "aria-valuemax": n,
    "aria-valuenow": l,
    "aria-valuetext": s
  };
}
function zd(a) {
  return {
    "aria-hidden": !0,
    "data-segment": "literal"
  };
}
function Kd(a) {
  return {
    role: "textbox",
    "aria-label": "timezone, ",
    "data-readonly": !0,
    "data-segment": "timeZoneName",
    tabindex: 0,
    style: "caret-color: transparent;"
  };
}
const Hd = {
  day: {
    attrs: Od
  },
  month: {
    attrs: kd
  },
  year: {
    attrs: Md
  },
  hour: {
    attrs: Vd
  },
  minute: {
    attrs: Fd
  },
  second: {
    attrs: Ld
  },
  dayPeriod: {
    attrs: Nd
  },
  literal: {
    attrs: zd
  },
  timeZoneName: {
    attrs: Kd
  }
};
function as(a) {
  const t = et();
  function e({ e: y, part: E, dateRef: P, prevValue: B }) {
    const D = y.key === t.ARROW_UP ? 1 : -1, k = 0, V = 59;
    if (B === null)
      return D > 0 ? k : V;
    const O = [E, D];
    return P.set({ [E]: B }).cycle(...O)[E];
  }
  function n(y) {
    if (a.hasLeftFocus.value = !1, y === null)
      return y;
    const E = y.toString();
    return E.length === 1 ? null : Number.parseInt(E.slice(0, -1));
  }
  function l({ e: y, part: E, dateRef: P, prevValue: B, hourCycle: D }) {
    const k = y.key === t.ARROW_UP ? 1 : -1;
    if (B === null)
      return P[E];
    if (E === "hour" && "hour" in P) {
      const O = [E, k, { hourCycle: D }];
      return P.set({ [E]: B }).cycle(...O)[E];
    }
    const V = [E, k];
    return E === "day" && a.segmentValues.value.month !== null ? P.set({ [E]: B, month: a.segmentValues.value.month }).cycle(...V)[E] : P.set({ [E]: B }).cycle(...V)[E];
  }
  function s(y, E, P) {
    let B = !1;
    const D = Math.floor(y / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, P = null), P === null)
      return E === 0 ? (a.lastKeyZero.value = !0, { value: null, moveToNext: B }) : ((a.lastKeyZero.value || E > D) && (B = !0), a.lastKeyZero.value = !1, { value: E, moveToNext: B });
    const k = P.toString().length, V = Number.parseInt(P.toString() + E.toString());
    return k === 2 || V > y ? ((E > D || V > y) && (B = !0), { value: E, moveToNext: B }) : (B = !0, { value: V, moveToNext: B });
  }
  function r(y, E) {
    let B = !1;
    const D = Math.floor(59 / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return y === 0 ? (a.lastKeyZero.value = !0, { value: 0, moveToNext: B }) : ((a.lastKeyZero.value || y > D) && (B = !0), a.lastKeyZero.value = !1, { value: y, moveToNext: B });
    const k = E.toString().length, V = Number.parseInt(E.toString() + y.toString());
    return k === 2 || V > 59 ? (y > D && (B = !0), { value: y, moveToNext: B }) : (B = !0, { value: V, moveToNext: B });
  }
  function i(y, E) {
    let B = !1;
    const D = Math.floor(24 / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return y === 0 ? (a.lastKeyZero.value = !0, { value: null, moveToNext: B }) : ((a.lastKeyZero.value || y > D) && (B = !0), a.lastKeyZero.value = !1, { value: y, moveToNext: B });
    const k = E.toString().length, V = Number.parseInt(E.toString() + y.toString());
    return k === 2 || V > 24 ? (y > D && (B = !0), { value: y, moveToNext: B }) : (B = !0, { value: V, moveToNext: B });
  }
  function u(y, E) {
    let P = !1;
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return { value: y === 0 ? 1 : y, moveToNext: P };
    const B = E.toString() + y.toString();
    return B.length > 4 ? { value: y === 0 ? 1 : y, moveToNext: P } : (B.length === 4 && (P = !0), { value: Number.parseInt(B), moveToNext: P });
  }
  const d = I(() => Hd[a.part].attrs({
    placeholder: a.placeholder.value,
    hourCycle: a.hourCycle,
    segmentValues: a.segmentValues.value,
    formatter: a.formatter
  }));
  function p(y) {
    if (!st(y.key) || Ye(y.key))
      return;
    const E = a.segmentValues.value.day;
    if (y.key === t.ARROW_DOWN || y.key === t.ARROW_UP) {
      a.segmentValues.value.day = l({ e: y, part: "day", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (xt(y.key)) {
      const P = Number.parseInt(y.key), B = a.segmentValues.value.month, D = B ? Pt(a.placeholder.value.set({ month: B })) : Pt(a.placeholder.value), { value: k, moveToNext: V } = s(D, P, E);
      a.segmentValues.value.day = k, V && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.day = n(E));
  }
  function c(y) {
    if (!st(y.key) || Ye(y.key))
      return;
    const E = a.segmentValues.value.month;
    if (y.key === t.ARROW_DOWN || y.key === t.ARROW_UP) {
      a.segmentValues.value.month = l({ e: y, part: "month", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (xt(y.key)) {
      const P = Number.parseInt(y.key), { value: B, moveToNext: D } = s(12, P, E);
      a.segmentValues.value.month = B, D && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.month = n(E));
  }
  function f(y) {
    if (!st(y.key) || Ye(y.key))
      return;
    const E = a.segmentValues.value.year;
    if (y.key === t.ARROW_DOWN || y.key === t.ARROW_UP) {
      a.segmentValues.value.year = l({ e: y, part: "year", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (xt(y.key)) {
      const P = Number.parseInt(y.key), { value: B, moveToNext: D } = u(P, E);
      a.segmentValues.value.year = B, D && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.year = n(E));
  }
  function m(y) {
    const E = a.placeholder.value;
    if (!st(y.key) || Ye(y.key) || !("hour" in E) || !("hour" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.hour, B = a.hourCycle;
    if (y.key === t.ARROW_UP || y.key === t.ARROW_DOWN) {
      a.segmentValues.value.hour = l({ e: y, part: "hour", dateRef: a.placeholder.value, prevValue: P, hourCycle: B }), "dayPeriod" in a.segmentValues.value && (a.segmentValues.value.hour < 12 ? a.segmentValues.value.dayPeriod = "AM" : a.segmentValues.value.hour && (a.segmentValues.value.dayPeriod = "PM"));
      return;
    }
    if (xt(y.key)) {
      const D = Number.parseInt(y.key), { value: k, moveToNext: V } = i(D, P);
      "dayPeriod" in a.segmentValues.value && k && k > 12 ? a.segmentValues.value.dayPeriod = "PM" : "dayPeriod" in a.segmentValues.value && k && (a.segmentValues.value.dayPeriod = "AM"), a.segmentValues.value.hour = k, V && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.hour = n(P));
  }
  function g(y) {
    const E = a.placeholder.value;
    if (!st(y.key) || Ye(y.key) || !("minute" in E) || !("minute" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.minute;
    if (a.segmentValues.value.minute = e({ e: y, part: "minute", dateRef: a.placeholder.value, prevValue: P }), xt(y.key)) {
      const B = Number.parseInt(y.key), { value: D, moveToNext: k } = r(B, P);
      a.segmentValues.value.minute = D, k && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.minute = n(P));
  }
  function v(y) {
    const E = a.placeholder.value;
    if (!st(y.key) || Ye(y.key) || !("second" in E) || !("second" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.second;
    if (a.segmentValues.value.second = e({ e: y, part: "second", dateRef: a.placeholder.value, prevValue: P }), xt(y.key)) {
      const B = Number.parseInt(y.key), { value: D, moveToNext: k } = r(B, P);
      a.segmentValues.value.second = D, k && a.focusNext();
    }
    y.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.second = n(P));
  }
  function S(y) {
    if (!((!st(y.key) || Ye(y.key)) && y.key !== "a" && y.key !== "p" || !("hour" in a.placeholder.value) || !("dayPeriod" in a.segmentValues.value))) {
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
  function _(y) {
    a.disabled.value && y.preventDefault();
  }
  function $(y) {
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
    }[a.part](y), !Ye(y.key) && y.key !== t.TAB && y.key !== t.SHIFT && st(y.key) && Object.values(a.segmentValues.value).every((D) => D !== null)) {
      const D = { ...a.segmentValues.value };
      let k = a.placeholder.value.copy();
      Object.keys(D).forEach((V) => {
        const O = D[V];
        k = k.set({ [V]: O });
      }), a.modelValue.value = k.copy();
    }
  }
  return {
    handleSegmentClick: _,
    handleSegmentKeydown: $,
    attributes: d
  };
}
const Wd = /* @__PURE__ */ w({
  __name: "DateFieldInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Td(), n = T(!0), l = T(!1), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = as({
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
    return (c, f) => (b(), x(o(A), M({
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
    }, Fn(c.part !== "literal" ? {
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
}), ym = /* @__PURE__ */ w({
  __name: "DatePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Mu), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gm = /* @__PURE__ */ w({
  __name: "DatePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Vu), H(U(t)), {
      default: h(({ headingValue: l }) => [
        C(e.$slots, "default", { headingValue: l }, () => [
          me(De(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), bm = /* @__PURE__ */ w({
  __name: "DatePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Fu), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cm = /* @__PURE__ */ w({
  __name: "DatePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Lu), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wm = /* @__PURE__ */ w({
  __name: "DatePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Nu), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _m = /* @__PURE__ */ w({
  __name: "DatePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(zu), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xm = /* @__PURE__ */ w({
  __name: "DatePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Ku), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sm = /* @__PURE__ */ w({
  __name: "DatePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Hu), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Em = /* @__PURE__ */ w({
  __name: "DatePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Wu), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pm = /* @__PURE__ */ w({
  __name: "DatePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(ju), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dm = /* @__PURE__ */ w({
  __name: "DatePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Uu), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $m = /* @__PURE__ */ w({
  __name: "DatePickerInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Wd), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [go, jd] = Q("DatePickerRoot"), Bm = /* @__PURE__ */ w({
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
      id: _,
      name: $,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: B,
      hideTimeZone: D,
      hourCycle: k,
      defaultValue: V,
      dir: O
    } = ne(e), F = Ce(O), K = ae(e, "modelValue", n, {
      defaultValue: V.value,
      passive: e.modelValue === void 0
    }), W = I(() => qt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: K.value
    })), X = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? W.value.copy(),
      passive: e.placeholder === void 0
    }), N = ae(e, "open", n, {
      defaultValue: v.value,
      passive: e.open === void 0
    }), L = T();
    return jd({
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
      modelValue: K,
      placeholder: X,
      defaultOpen: v,
      modal: S,
      open: N,
      id: _,
      name: $,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: B,
      hideTimeZone: D,
      hourCycle: k,
      dateFieldRef: L,
      dir: F,
      onDateChange(j) {
        !j || !K.value ? K.value = j : !f.value && Oe(K.value, j) ? K.value = void 0 : K.value = j.copy();
      },
      onPlaceholderChange(j) {
        Ee(j, X.value) || (X.value = j.copy());
      }
    }), (j, z) => (b(), x(o(cs), {
      open: o(N),
      "onUpdate:open": z[0] || (z[0] = (J) => Ue(N) ? N.value = J : null),
      "default-open": o(v),
      modal: o(S)
    }, {
      default: h(() => [
        C(j.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
}), Im = /* @__PURE__ */ w({
  __name: "DatePickerCalendar",
  setup(a) {
    const t = go();
    return (e, n) => (b(), x(o(ku), M({
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
}), Tm = /* @__PURE__ */ w({
  __name: "DatePickerField",
  setup(a) {
    const t = go();
    return (e, n) => (b(), x(o(Ad), M({
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
        C(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), Rm = /* @__PURE__ */ w({
  __name: "DatePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(gs), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Am = /* @__PURE__ */ w({
  __name: "DatePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(hs), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Om = /* @__PURE__ */ w({
  __name: "DatePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(ys), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), km = /* @__PURE__ */ w({
  __name: "DatePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = go();
    return (n, l) => (b(), x(o(ps), M({ "data-radix-vue-date-field-segment": "trigger" }, t, {
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
}), Mm = /* @__PURE__ */ w({
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
    const l = _e(a, t);
    return (s, r) => (b(), x(o(fs), null, {
      default: h(() => [
        Y(o(ms), H(U({ ...o(l), ...s.$attrs })), {
          default: h(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Vm = /* @__PURE__ */ w({
  __name: "DateRangePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(op), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fm = /* @__PURE__ */ w({
  __name: "DateRangePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(lp), H(U(t)), {
      default: h(({ headingValue: l }) => [
        C(e.$slots, "default", { headingValue: l }, () => [
          me(De(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), Lm = /* @__PURE__ */ w({
  __name: "DateRangePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(sp), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nm = /* @__PURE__ */ w({
  __name: "DateRangePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(rp), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zm = /* @__PURE__ */ w({
  __name: "DateRangePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(ip), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Km = /* @__PURE__ */ w({
  __name: "DateRangePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(up), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hm = /* @__PURE__ */ w({
  __name: "DateRangePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(dp), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wm = /* @__PURE__ */ w({
  __name: "DateRangePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(cp), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jm = /* @__PURE__ */ w({
  __name: "DateRangePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(pp), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Um = /* @__PURE__ */ w({
  __name: "DateRangePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(fp), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gm = /* @__PURE__ */ w({
  __name: "DateRangePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(vp), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qm = /* @__PURE__ */ w({
  __name: "DateRangePickerInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(Zd), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [bo, Ud] = Q("DateRangePickerRoot"), Ym = /* @__PURE__ */ w({
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
      id: _,
      name: $,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: B,
      hideTimeZone: D,
      hourCycle: k,
      dir: V
    } = ne(e), O = Ce(V), F = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), K = qt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: F.value.start
    }), W = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? K.copy(),
      passive: e.placeholder === void 0
    }), X = ae(e, "open", n, {
      defaultValue: v.value,
      passive: e.open === void 0
    }), N = T();
    return Ud({
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
      modelValue: F,
      placeholder: W,
      defaultOpen: v,
      modal: S,
      open: X,
      id: _,
      name: $,
      required: y,
      minValue: E,
      maxValue: P,
      granularity: B,
      hideTimeZone: D,
      hourCycle: k,
      dateFieldRef: N,
      dir: O,
      onStartValueChange(L) {
        n("update:startValue", L);
      },
      onDateChange(L) {
        var j, z;
        F.value = { start: (j = L.start) == null ? void 0 : j.copy(), end: (z = L.end) == null ? void 0 : z.copy() };
      },
      onPlaceholderChange(L) {
        W.value = L.copy();
      }
    }), (L, j) => (b(), x(o(cs), {
      open: o(X),
      "onUpdate:open": j[0] || (j[0] = (z) => Ue(X) ? X.value = z : null),
      "default-open": o(v),
      modal: o(S)
    }, {
      default: h(() => [
        C(L.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
}), Xm = /* @__PURE__ */ w({
  __name: "DateRangePickerCalendar",
  setup(a) {
    const t = bo();
    return (e, n) => (b(), x(o(np), M({
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
}), Zm = /* @__PURE__ */ w({
  __name: "DateRangePickerField",
  setup(a) {
    const t = bo();
    return (e, n) => (b(), x(o(Xd), M({
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
        C(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), Jm = /* @__PURE__ */ w({
  __name: "DateRangePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(gs), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qm = /* @__PURE__ */ w({
  __name: "DateRangePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(hs), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eh = /* @__PURE__ */ w({
  __name: "DateRangePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(ys), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), th = /* @__PURE__ */ w({
  __name: "DateRangePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = bo();
    return (n, l) => (b(), x(o(ps), M({ "data-radix-vue-date-field-segment": "trigger" }, t, {
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
}), ah = /* @__PURE__ */ w({
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
    const l = _e(a, t);
    return (s, r) => (b(), x(o(fs), null, {
      default: h(() => [
        Y(o(ms), H(U({ ...o(l), ...s.$attrs })), {
          default: h(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Gd = ["id", "value", "name", "disabled", "required"], [qd, Yd] = Q("DateRangeFieldRoot"), Xd = /* @__PURE__ */ w({
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
    const n = a, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, dir: d } = ne(n), p = jn(n.locale), { primitiveElement: c, currentElement: f } = Ae(), m = T(/* @__PURE__ */ new Set()), g = Ce(d);
    oe(() => {
      Array.from(f.value.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((q) => q.getAttribute("data-radix-vue-date-field-segment") !== "literal").forEach((q) => m.value.add(q));
    });
    const v = ae(n, "modelValue", l, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), S = qt({
      defaultPlaceholder: n.placeholder,
      granularity: n.granularity,
      defaultValue: v.value.start
    }), _ = ae(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? S.copy(),
      passive: n.placeholder === void 0
    }), $ = I(() => n.granularity ? da(_.value) ? n.granularity : "day" : da(_.value) ? "minute" : "day"), y = I(() => {
      var q;
      return v.value.start ? !!((q = u.value) != null && q.call(u, v.value.start) || n.minValue && Me(v.value.start, n.minValue) || n.maxValue && Me(n.maxValue, v.value.start)) : !1;
    }), E = I(() => {
      var q;
      return v.value.end ? !!((q = u.value) != null && q.call(u, v.value.end) || n.minValue && Me(v.value.end, n.minValue) || n.maxValue && Me(n.maxValue, v.value.end)) : !1;
    }), P = I(() => y.value || E.value ? !0 : !v.value.start || !v.value.end ? !1 : !Me(v.value.start, v.value.end) || u.value !== void 0 && !ml(
      v.value.start,
      v.value.end,
      u.value,
      void 0
    )), B = ts($.value), D = T(v.value.start ? { ...Nt({ value: v.value.start, formatter: p }) } : { ...B }), k = T(v.value.end ? { ...Nt({ value: v.value.end, formatter: p }) } : { ...B }), V = I(() => $n({
      granularity: $.value,
      dateRef: _.value,
      formatter: p,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: D.value,
      locale: s
    })), O = I(() => $n({
      granularity: $.value,
      dateRef: _.value,
      formatter: p,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: k.value,
      locale: s
    })), F = I(() => ({
      start: V.value.arr,
      end: O.value.arr
    })), K = I(() => ({ start: F.value.start.filter(({ part: q }) => q !== "literal"), end: F.value.end.filter(({ part: q }) => q !== "literal") })), W = T((te = v.value.start) == null ? void 0 : te.copy()), X = T((fe = v.value.end) == null ? void 0 : fe.copy());
    ee([W, X], ([q, le]) => {
      var xe, ge;
      const he = v.value;
      if (!(he.start && he.end && q && le && he.start.compare(q) === 0 && he.end.compare(le) === 0))
        if (q && le) {
          if (((xe = v.value.start) == null ? void 0 : xe.compare(q)) === 0 && ((ge = v.value.end) == null ? void 0 : ge.compare(le)) === 0)
            return;
          v.value = { start: q.copy(), end: le.copy() };
        } else v.value.start && v.value.end && (v.value = { start: void 0, end: void 0 });
    }), ee(v, (q) => {
      q.start && q.end && ((!W.value || q.start.compare(W.value) !== 0) && (W.value = q.start.copy()), (!X.value || q.end.compare(X.value) !== 0) && (X.value = q.end.copy()));
    }), ee([W, s], ([q]) => {
      q !== void 0 ? D.value = { ...Nt({ value: q, formatter: p }) } : D.value = { ...B };
    }), ee(s, (q) => {
      p.getLocale() !== q && p.setLocale(q);
    }), ee(v, (q) => {
      q.start !== void 0 && (!Ee(_.value, q.start) || _.value.compare(q.start) !== 0) && (_.value = q.start.copy());
    }), ee([X, s], ([q]) => {
      q !== void 0 ? k.value = { ...Nt({ value: q, formatter: p }) } : k.value = { ...B };
    });
    const N = T(null), L = I(() => Array.from(m.value).findIndex((q) => {
      var le, he;
      return q.getAttribute("data-radix-vue-date-field-segment") === ((le = N.value) == null ? void 0 : le.getAttribute("data-radix-vue-date-field-segment")) && q.getAttribute("data-radix-vue-date-range-field-segment-type") === ((he = N.value) == null ? void 0 : he.getAttribute("data-radix-vue-date-range-field-segment-type"));
    })), j = I(() => {
      const q = g.value === "rtl" ? -1 : 1;
      return (q < 0 ? L.value < 0 : L.value > m.value.size - 1) ? null : Array.from(m.value)[L.value + q];
    }), z = I(() => {
      const q = g.value === "rtl" ? -1 : 1;
      return (q > 0 ? L.value < 0 : L.value > m.value.size - 1) ? null : Array.from(m.value)[L.value - q];
    }), J = et();
    function G(q) {
      var le, he;
      Ye(q.key) && (q.key === J.ARROW_LEFT && ((le = z.value) == null || le.focus()), q.key === J.ARROW_RIGHT && ((he = j.value) == null || he.focus()));
    }
    function Z(q) {
      N.value = q;
    }
    return Yd({
      isDateUnavailable: u.value,
      locale: s,
      startValue: W,
      endValue: X,
      placeholder: _,
      disabled: r,
      formatter: p,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: { start: D, end: k },
      isInvalid: P,
      segmentContents: K,
      elements: m,
      setFocusedElement: Z,
      focusNext() {
        var q;
        (q = j.value) == null || q.focus();
      }
    }), t({
      setFocusedElement: Z
    }), (q, le) => {
      var he, xe;
      return b(), ce(we, null, [
        Y(o(A), M(q.$attrs, {
          ref_key: "primitiveElement",
          ref: c,
          role: "group",
          "aria-disabled": o(r) ? !0 : void 0,
          "data-disabled": o(r) ? "" : void 0,
          "data-readonly": o(i) ? "" : void 0,
          "data-invalid": P.value ? "" : void 0,
          dir: o(g),
          onKeydown: re(G, ["left", "right"])
        }), {
          default: h(() => [
            C(q.$slots, "default", {
              modelValue: o(v),
              segments: F.value
            })
          ]),
          _: 3
        }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
        Ge("input", {
          id: q.id,
          type: "text",
          tabindex: "-1",
          "aria-hidden": "",
          value: `${(he = o(v).start) == null ? void 0 : he.toString()} - ${(xe = o(v).end) == null ? void 0 : xe.toString()}`,
          name: q.name,
          disabled: o(r),
          required: q.required,
          style: {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          },
          onFocus: le[0] || (le[0] = (ge) => {
            var $e, ue;
            return (ue = ($e = Array.from(m.value)) == null ? void 0 : $e[0]) == null ? void 0 : ue.focus();
          })
        }, null, 40, Gd)
      ], 64);
    };
  }
}), Zd = /* @__PURE__ */ w({
  __name: "DateRangeFieldInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = qd(), n = T(!0), l = T(!1), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = as({
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
    return (c, f) => (b(), x(o(A), M({
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
    }, Fn(c.part !== "literal" ? {
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
}), [ns, Jd] = Q("DropdownMenuRoot"), nh = /* @__PURE__ */ w({
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
    }), s = T(), { modal: r, dir: i } = ne(e), u = Ce(i);
    return Jd({
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
    }), (d, p) => (b(), x(o(no), {
      open: o(l),
      "onUpdate:open": p[0] || (p[0] = (c) => Ue(l) ? l.value = c : null),
      dir: o(u),
      modal: o(r)
    }, {
      default: h(() => [
        C(d.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), oh = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = ns(), { forwardRef: n, currentElement: l } = R();
    return oe(() => {
      e.triggerElement = l;
    }), e.triggerId || (e.triggerId = ve(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (b(), x(o(Ya), { "as-child": "" }, {
      default: h(() => [
        Y(o(A), {
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
}), lh = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(co), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sh = /* @__PURE__ */ w({
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
    const l = _e(a, t);
    R();
    const s = ns(), r = T(!1);
    function i(u) {
      u.defaultPrevented || (r.value || setTimeout(() => {
        var d;
        (d = s.triggerElement.value) == null || d.focus();
      }, 0), r.value = !1, u.preventDefault());
    }
    return s.contentId || (s.contentId = ve(void 0, "radix-vue-dropdown-menu-content")), (u, d) => {
      var p;
      return b(), x(o(io), M(o(l), {
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
          if (c.defaultPrevented) return;
          const f = c.detail.originalEvent, m = f.button === 0 && f.ctrlKey === !0, g = f.button === 2 || m;
          (!o(s).modal.value || g) && (r.value = !0), (v = o(s).triggerElement.value) != null && v.contains(c.target) && c.preventDefault();
        })
      }), {
        default: h(() => [
          C(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), rh = /* @__PURE__ */ w({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(ao), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ih = /* @__PURE__ */ w({
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
    return R(), (s, r) => (b(), x(o(Sa), H(U({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uh = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(Za), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dh = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(vo), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ch = /* @__PURE__ */ w({
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
    return R(), (s, r) => (b(), x(o(ro), H(U({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ph = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(so), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fh = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(uo), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vh = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), x(o(po), H(U({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mh = /* @__PURE__ */ w({
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
    const l = _e(a, t);
    return R(), (s, r) => (b(), x(o(fo), H(U(o(l))), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hh = /* @__PURE__ */ w({
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
    return R(), (s, r) => (b(), x(o(mo), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Ue(l) ? l.value = i : null)
    }, {
      default: h(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), yh = /* @__PURE__ */ w({
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
    const l = _e(a, t);
    return R(), (s, r) => (b(), x(o(ho), M(o(l), { style: {
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
    }, 16));
  }
}), gh = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(yo), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qd = ["value", "name", "disabled", "required"], [aa, ec] = Q("EditableRoot"), bh = /* @__PURE__ */ w({
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
      autoResize: _,
      required: $
    } = ne(n), y = T(), E = Ce(f), P = T(u.value ?? !1), B = ae(n, "modelValue", l, {
      defaultValue: i.value ?? "",
      passive: n.modelValue === void 0
    }), { primitiveElement: D, currentElement: k } = Ae(), V = Qe(k), O = I(() => typeof d.value == "string" ? { edit: d.value, preview: d.value } : d.value), F = T(B.value);
    function K() {
      B.value = F.value, P.value = !1, l("update:state", "cancel");
    }
    function W() {
      P.value = !0, l("update:state", "edit");
    }
    function X() {
      F.value = B.value, P.value = !1, l("update:state", "submit"), l("submit", B.value);
    }
    function N() {
      P.value && (m.value === "blur" || m.value === "both" ? X() : K());
    }
    const L = Vl(() => N(), k), j = Fl(() => N(), k), z = I(() => B.value === "");
    return t({
      /** Function to submit the value of the editable */
      submit: X,
      /** Function to cancel the value of the editable */
      cancel: K,
      /** Function to set the editable in edit mode */
      edit: W
    }), ec({
      id: s,
      name: r,
      disabled: c,
      isEditing: P,
      maxLength: p,
      modelValue: B,
      placeholder: O,
      edit: W,
      cancel: K,
      submit: X,
      activationMode: g,
      submitMode: m,
      selectOnFocus: v,
      inputRef: y,
      startWithEditMode: u,
      isEmpty: z,
      readonly: S,
      autoResize: _
    }), (J, G) => (b(), ce(we, null, [
      Y(o(A), M(J.$attrs, {
        ref_key: "primitiveElement",
        ref: D,
        as: J.as,
        "as-child": J.asChild,
        dir: o(E),
        onFocusCapture: o(j).onFocusCapture,
        onBlurCapture: o(j).onBlurCapture,
        onPointerdownCapture: o(L).onPointerDownCapture
      }), {
        default: h(() => [
          C(J.$slots, "default", {
            modelValue: o(B),
            isEditing: P.value,
            isEmpty: z.value,
            submit: X,
            cancel: K,
            edit: W
          })
        ]),
        _: 3
      }, 16, ["as", "as-child", "dir", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]),
      o(V) ? (b(), ce("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o(B),
        name: o(r),
        disabled: o(c),
        required: o($),
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Qd)) : pe("", !0)
    ], 64));
  }
}), Ch = /* @__PURE__ */ w({
  __name: "EditableArea",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), x(o(A), M(t, {
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
}), wh = /* @__PURE__ */ w({
  __name: "EditableInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = et(), n = aa(), l = I(() => n.disabled.value), s = I(() => {
      var d;
      return (d = n.placeholder.value) == null ? void 0 : d.edit;
    }), { primitiveElement: r, currentElement: i } = Ae();
    oe(() => {
      var d, p;
      n.inputRef.value = i.value, n.startWithEditMode.value && ((d = n.inputRef.value) == null || d.focus({ preventScroll: !0 }), n.selectOnFocus.value && ((p = n.inputRef.value) == null || p.select()));
    }), ee(n.isEditing, (d) => {
      d && se(() => {
        var p, c;
        (p = n.inputRef.value) == null || p.focus({ preventScroll: !0 }), n.selectOnFocus.value && ((c = n.inputRef.value) == null || c.select());
      });
    });
    function u(d) {
      (n.submitMode.value === "enter" || n.submitMode.value === "both") && d.key === e.ENTER && !d.shiftKey && !d.metaKey && n.submit();
    }
    return (d, p) => (b(), x(o(A), M({
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
}), _h = /* @__PURE__ */ w({
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
    return (r, i) => (b(), x(o(A), M(t, {
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
          me(De(o(e).modelValue.value || n.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-placeholder-shown", "hidden", "style"]));
  }
}), xh = /* @__PURE__ */ w({
  __name: "EditableSubmitTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), x(o(A), M(t, {
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
          me("Submit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), Sh = /* @__PURE__ */ w({
  __name: "EditableCancelTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), x(o(A), M(t, {
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
          me("Cancel")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), Eh = /* @__PURE__ */ w({
  __name: "EditableEditTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = aa();
    return (n, l) => (b(), x(o(A), M(t, {
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
          me("Edit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), [Co, tc] = Q("HoverCardRoot"), Ph = /* @__PURE__ */ w({
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
    return tc({
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
    }), (S, _) => (b(), x(o(Rt), null, {
      default: h(() => [
        C(S.$slots, "default", { open: o(r) })
      ]),
      _: 3
    }));
  }
});
function Bn(a) {
  return (t) => t.pointerType === "touch" ? void 0 : a();
}
function ac(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
const Dh = /* @__PURE__ */ w({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = Co();
    n.triggerElement = e;
    function l() {
      setTimeout(() => {
        !n.isPointerInTransitRef.value && !n.open.value && n.onClose();
      }, 0);
    }
    return (s, r) => (b(), x(o(At), { "as-child": "" }, {
      default: h(() => [
        Y(o(A), {
          ref: o(t),
          "as-child": s.asChild,
          as: s.as,
          "data-state": o(n).open.value ? "open" : "closed",
          onPointerenter: r[0] || (r[0] = (i) => o(Bn)(o(n).onOpen)(i)),
          onPointerleave: r[1] || (r[1] = (i) => o(Bn)(l)(i)),
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
}), $h = /* @__PURE__ */ w({
  __name: "HoverCardPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nc = /* @__PURE__ */ w({
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
    const e = a, n = t, l = Tt(e), { forwardRef: s, currentElement: r } = R(), i = Co(), { isPointerInTransit: u, onPointerExit: d } = Bl(i.triggerElement, r);
    li(i.isPointerInTransitRef, u, { direction: "rtl" }), d(() => {
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
      r.value && (document.addEventListener("pointerup", f), ac(r.value).forEach((g) => g.setAttribute("tabindex", "-1")));
    }), Te(() => {
      document.removeEventListener("pointerup", f), i.hasSelectionRef.value = !1, i.isPointerDownOnContentRef.value = !1;
    }), (m, g) => (b(), x(o(gt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: g[1] || (g[1] = (v) => n("escapeKeyDown", v)),
      onPointerDownOutside: g[2] || (g[2] = (v) => n("pointerDownOutside", v)),
      onFocusOutside: g[3] || (g[3] = ie((v) => n("focusOutside", v), ["prevent"])),
      onDismiss: o(i).onDismiss
    }, {
      default: h(() => [
        Y(o(Dt), M({ ...o(l), ...m.$attrs }, {
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
}), Bh = /* @__PURE__ */ w({
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
    const l = _e(a, t), { forwardRef: s } = R(), r = Co();
    return (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(r).open.value
    }, {
      default: h(() => [
        Y(nc, M(o(l), {
          ref: o(s),
          onPointerenter: u[0] || (u[0] = (d) => o(Bn)(o(r).onOpen)(d))
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
}), Ih = /* @__PURE__ */ w({
  __name: "HoverCardArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(ea), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Th = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(A), M(t, {
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
function oc(a) {
  return a == null ? void 0 : a.querySelector("[data-state=checked]");
}
function lc(a, t, e) {
  return a === void 0 ? !1 : Array.isArray(a) ? a.some((n) => Ut(n, t, e)) : Ut(a, t, e);
}
function Ut(a, t, e) {
  return a === void 0 || t === void 0 ? !1 : typeof a == "string" ? a === t : typeof e == "function" ? e(a, t) : typeof e == "string" ? (a == null ? void 0 : a[e]) === (t == null ? void 0 : t[e]) : Xe(a, t);
}
const [Ja, sc] = Q("ListboxRoot"), Rh = /* @__PURE__ */ w({
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
    const e = a, n = t, { multiple: l, highlightOnHover: s, orientation: r, disabled: i, selectionBehavior: u, dir: d } = ne(e), { getItems: p } = Yt(), { handleTypeaheadSearch: c } = wa(), { primitiveElement: f, currentElement: m } = Ae(), g = et(), v = Ce(d), S = Qe(m), _ = T(), $ = T(!1), y = T(!0), E = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? (l.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: !0
    });
    function P(G) {
      if ($.value = !0, Array.isArray(E.value)) {
        const Z = E.value.findIndex((te) => Ut(te, G, e.by));
        if (e.selectionBehavior === "toggle") {
          const te = [...E.value];
          Z === -1 ? te.push(G) : te.splice(Z, 1), E.value = te;
        } else
          E.value = [G], _.value = G;
      } else
        e.selectionBehavior === "toggle" && Ut(E.value, G, e.by) ? E.value = void 0 : E.value = G;
      setTimeout(() => {
        $.value = !1;
      }, 1);
    }
    const B = T(null), D = T(null), k = T(!1), V = ca(), O = ca();
    function F() {
      return p().map((G) => G.ref).filter((G) => G.dataset.disabled !== "");
    }
    function K(G) {
      B.value = G, B.value.focus(), B.value.scrollIntoView({ block: "nearest" });
      const Z = p().find((te) => te.ref === G);
      n("highlight", Z);
    }
    function W(G) {
      B.value && B.value.click();
    }
    function X(G) {
      if ($.value = !0, k.value)
        O.trigger(G);
      else {
        const Z = G.altKey || G.ctrlKey || G.metaKey;
        if (Z && G.key === "a" && l.value) {
          const te = p(), fe = te.map((q) => q.value);
          E.value = [...fe], G.preventDefault(), K(te[te.length - 1].ref);
        } else if (!Z) {
          const te = c(G.key, F());
          te && K(te);
        }
      }
      setTimeout(() => {
        $.value = !1;
      }, 1);
    }
    function N(G) {
      D.value = B.value, B.value = null, n("leave", G);
    }
    function L(G) {
      var te, fe;
      const Z = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((te = G.currentTarget) == null || te.dispatchEvent(Z), n("entryFocus", Z), !Z.defaultPrevented)
        if (D.value)
          K(D.value);
        else {
          const q = (fe = F()) == null ? void 0 : fe[0];
          K(q);
        }
    }
    function j(G) {
      const Z = Yl(G, r.value, v.value);
      if (!Z)
        return;
      let te = F();
      if (B.value) {
        if (Z === "last")
          te.reverse();
        else if (Z === "prev" || Z === "next") {
          Z === "prev" && te.reverse();
          const fe = te.indexOf(B.value);
          te = te.slice(fe + 1);
        }
        z(G, te[0]);
      }
      if (te.length) {
        const fe = !B.value && Z === "prev" ? te.length - 1 : 0;
        K(te[fe]);
      }
      if (k.value)
        return O.trigger(G);
    }
    function z(G, Z) {
      var fe;
      if (!(k.value || e.selectionBehavior !== "replace" || !l.value || !Array.isArray(E.value) || (G.altKey || G.ctrlKey || G.metaKey) && !G.shiftKey) && G.shiftKey) {
        const q = p().filter((xe) => xe.ref.dataset.disabled !== "");
        let le = (fe = q.find((xe) => xe.ref === Z)) == null ? void 0 : fe.value;
        if (G.key === g.END ? le = q[q.length - 1].value : G.key === g.HOME && (le = q[0].value), !le || !_.value)
          return;
        const he = Et(q.map((xe) => xe.value), _.value, le);
        E.value = he;
      }
    }
    async function J(G) {
      if (k.value)
        V.trigger(G);
      else {
        await se();
        const te = F().find((fe) => fe.dataset.state === "checked");
        te && K(te);
      }
    }
    return ee(E, () => {
      $.value || se(() => {
        J();
      });
    }, { immediate: !0, deep: !0 }), sc({
      modelValue: E,
      // @ts-expect-error ignoring
      onValueChange: P,
      multiple: l,
      orientation: r,
      dir: v,
      disabled: i,
      highlightOnHover: s,
      highlightedElement: B,
      isVirtual: k,
      virtualFocusHook: V,
      virtualKeydownHook: O,
      by: e.by,
      firstValue: _,
      selectionBehavior: u,
      focusable: y,
      onLeave: N,
      onEnter: L,
      onChangeHighlight: K,
      onKeydownEnter: W,
      onKeydownNavigation: j,
      onKeydownTypeAhead: X
    }), (G, Z) => (b(), x(o(A), {
      ref_key: "primitiveElement",
      ref: f,
      as: G.as,
      "as-child": G.asChild,
      dir: o(v),
      "data-disabled": o(i) ? "" : void 0,
      onPointerleave: N,
      onFocusout: Z[0] || (Z[0] = (te) => {
        const fe = te.relatedTarget || te.target;
        B.value && !o(m).contains(fe) && N(te);
      })
    }, {
      default: h(() => [
        C(G.$slots, "default", { modelValue: o(E) }),
        o(S) && e.name ? (b(), x(o(to), {
          key: 0,
          name: e.name,
          value: o(E)
        }, null, 8, ["name", "value"])) : pe("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), Ah = /* @__PURE__ */ w({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = Ja(), e = $t(!1, 10);
    return (n, l) => (b(), x(o(Xt), null, {
      default: h(() => [
        Y(o(A), {
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
}), Oh = /* @__PURE__ */ w({
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
    }), s = Ja();
    s.focusable.value = !1;
    const { primitiveElement: r, currentElement: i } = Ae();
    return oe(() => {
      setTimeout(() => {
        var u;
        e.autoFocus && ((u = i.value) == null || u.focus());
      }, 1);
    }), (u, d) => (b(), x(o(A), {
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
}), rc = "listbox.select", [ic, uc] = Q("ListboxItem"), kh = /* @__PURE__ */ w({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = ve(void 0, "radix-vue-listbox-item"), i = Ja(), u = I(() => s.value === i.highlightedElement.value), d = I(() => lc(i.modelValue.value, e.value, i.by)), p = I(() => i.disabled.value || e.disabled);
    async function c(m) {
      n("select", m), !(m != null && m.defaultPrevented) && !p.value && m && (i.onValueChange(e.value), i.onChangeHighlight(m.target));
    }
    function f(m) {
      const g = { originalEvent: m, value: e.value };
      Wt(rc, c, g);
    }
    return uc({
      isSelected: d
    }), (m, g) => (b(), x(o(Zt), { value: m.value }, {
      default: h(() => [
        Y(o(A), {
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
}), Mh = /* @__PURE__ */ w({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a;
    R();
    const e = ic();
    return (n, l) => o(e).isSelected.value ? (b(), x(o(A), M({
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
function sa(a, t, e) {
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
      const m = Math.round((Date.now() - d) * 100) / 100, g = Math.round((Date.now() - f) * 100) / 100, v = g / 16, S = (_, $) => {
        for (_ = String(_); _.length < $; )
          _ = " " + _;
        return _;
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
function wn(a, t) {
  if (a === void 0)
    throw new Error("Unexpected undefined");
  return a;
}
const dc = (a, t) => Math.abs(a - t) < 1, cc = (a, t, e) => {
  let n;
  return function(...l) {
    a.clearTimeout(n), n = a.setTimeout(() => t.apply(this, l), e);
  };
}, pc = (a) => a, fc = (a) => {
  const t = Math.max(a.startIndex - a.overscan, 0), e = Math.min(a.endIndex + a.overscan, a.count - 1), n = [];
  for (let l = t; l <= e; l++)
    n.push(l);
  return n;
}, vc = (a, t) => {
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
}, Uo = {
  passive: !0
}, mc = typeof window > "u" ? !0 : "onscrollend" in window, hc = (a, t) => {
  const e = a.scrollElement;
  if (!e)
    return;
  const n = a.targetWindow;
  if (!n)
    return;
  let l = 0;
  const s = mc ? () => {
  } : cc(
    n,
    () => {
      t(l, !1);
    },
    a.options.isScrollingResetDelay
  ), r = (d) => () => {
    l = e[a.options.horizontal ? "scrollLeft" : "scrollTop"], s(), t(l, d);
  }, i = r(!0), u = r(!1);
  return u(), e.addEventListener("scroll", i, Uo), e.addEventListener("scrollend", u, Uo), () => {
    e.removeEventListener("scroll", i), e.removeEventListener("scrollend", u);
  };
}, yc = (a, t, e) => {
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
}, gc = (a, {
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
class bc {
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
        getItemKey: pc,
        rangeExtractor: fc,
        onChange: () => {
        },
        measureElement: yc,
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
    }, this.getMeasurementOptions = sa(
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
    ), this.getMeasurements = sa(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: n, scrollMargin: l, getItemKey: s, enabled: r }, i) => {
        var u;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const d = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const p = this.measurementsCache.slice(0, d);
        for (let c = d; c < e; c++) {
          let f = (u = this.measurementsCache[c]) == null ? void 0 : u.measureElement;
          f || (f = (E) => {
            const P = s(c), B = this.elementsCache.get(P);
            if (!E) {
              B && (this.observer.unobserve(B), this.elementsCache.delete(P));
              return;
            }
            B !== E && (B && this.observer.unobserve(B), this.observer.observe(E), this.elementsCache.set(P, E)), E.isConnected && this.resizeItem(
              c,
              this.options.measureElement(E, void 0, this)
            );
          });
          const m = s(c), g = this.options.lanes === 1 ? p[c - 1] : this.getFurthestMeasurement(p, c), v = g ? g.end + this.options.gap : n + l, S = i.get(m), _ = typeof S == "number" ? S : this.options.estimateSize(c), $ = v + _, y = g ? g.lane : c % this.options.lanes;
          p[c] = {
            index: c,
            start: v,
            size: _,
            end: $,
            key: m,
            lane: y,
            measureElement: f
          };
        }
        return this.measurementsCache = p, p;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = sa(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (e, n, l) => this.range = e.length > 0 && n > 0 ? Cc({
        measurements: e,
        outerSize: n,
        scrollOffset: l
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getIndexes = sa(
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
    }, this.getVirtualItems = sa(
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
        return wn(
          n[os(
            0,
            n.length - 1,
            (l) => wn(n[l]).start,
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
          const [d] = wn(
            this.getOffsetForIndex(e, i)
          );
          dc(d, this.getScrollOffset()) || this.scrollToIndex(e, { align: i, behavior: l });
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
const os = (a, t, e, n) => {
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
function Cc({
  measurements: a,
  outerSize: t,
  scrollOffset: e
}) {
  const n = a.length - 1, s = os(0, n, (i) => a[i].start, e);
  let r = s;
  for (; r < n && a[r].end < e + t; )
    r++;
  return { startIndex: s, endIndex: r };
}
function wc(a) {
  const t = new bc(o(a)), e = On(t), n = t._didMount();
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
          Oo(e), (i = l.onChange) == null || i.call(l, s, r);
        }
      }), t._willUpdate(), Oo(e);
    },
    {
      immediate: !0
    }
  ), sl(n), e;
}
function ls(a) {
  return wc(
    I(() => ({
      observeElementRect: vc,
      observeElementOffset: hc,
      scrollToFn: gc,
      ...o(a)
    }))
  );
}
const Vh = /* @__PURE__ */ w({
  __name: "ListboxVirtualizer",
  props: {
    options: {},
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a) {
    const t = a, e = Ha(), n = Ja(), l = Dl(), { getItems: s } = Jt();
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
    }), i = ls(
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
      is: Mn(e.default({
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
      const m = t.options.findIndex((g) => Array.isArray(n.modelValue.value) ? Ut(g, n.modelValue.value[0], n.by) : Ut(g, n.modelValue.value, n.by));
      m !== -1 && (f == null || f.preventDefault(), i.value.scrollToIndex(m, { align: "start" }), requestAnimationFrame(() => {
        const g = oc(l.value);
        g && f && (g == null || g.focus());
      }));
    });
    const d = $t("", 1e3), p = I(() => {
      const f = (m) => t.textContent ? t.textContent(m) : m.toString().toLowerCase();
      return t.options.map((m, g) => ({
        index: g,
        textContent: f(m)
      }));
    });
    function c(f, m) {
      var _, $, y, E;
      if (!((_ = n.firstValue) != null && _.value) || !n.multiple.value || !Array.isArray(n.modelValue.value))
        return;
      const v = ($ = s().filter((P) => P.ref.dataset.disabled !== "").find((P) => P.ref === n.highlightedElement.value)) == null ? void 0 : $.value;
      if (!v)
        return;
      let S = null;
      switch (m) {
        case "prev":
        case "next": {
          S = Et(t.options, n.firstValue.value, v);
          break;
        }
        case "first": {
          S = Et(t.options, n.firstValue.value, (y = t.options) == null ? void 0 : y[0]);
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
      const m = f.altKey || f.ctrlKey || f.metaKey;
      if (f.key === "Tab" && !m)
        return;
      let v = Xa[f.key];
      if (m && f.key === "a" && n.multiple.value ? (f.preventDefault(), n.modelValue.value = [...t.options], v = "last") : f.shiftKey && v && c(f, v), ["first", "last"].includes(v)) {
        f.preventDefault();
        const _ = v === "first" ? 0 : t.options.length - 1;
        i.value.scrollToIndex(_), requestAnimationFrame(() => {
          const $ = s(), y = v === "first" ? $[0] : $[$.length - 1];
          n.onChangeHighlight(y.ref);
        });
      } else if (!v && !m) {
        d.value += f.key;
        const _ = Number((S = document.activeElement) == null ? void 0 : S.getAttribute("data-index")), $ = p.value[_].textContent, y = p.value.map((B) => B.textContent), E = qn(y, d.value, $), P = p.value.find((B) => B.textContent === E);
        P && (i.value.scrollToIndex(P.index, { align: "start" }), requestAnimationFrame(() => {
          const B = l.value.querySelector(`[data-index="${P.index}"]`);
          B instanceof HTMLElement && n.onChangeHighlight(B);
        }));
      }
    }), (f, m) => (b(), ce("div", {
      "data-radix-vue-virtualizer": "",
      style: ke({
        position: "relative",
        width: "100%",
        height: `${o(i).getTotalSize()}px`
      })
    }, [
      (b(!0), ce(we, null, ya(u.value, ({ is: g, item: v }) => (b(), x(qe(g), {
        key: v.index
      }))), 128))
    ], 4));
  }
}), [_c, xc] = Q("ListboxGroup"), Fh = /* @__PURE__ */ w({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ve(void 0, "radix-vue-listbox-group");
    return xc({ id: e }), (n, l) => (b(), x(o(A), M({ role: "group" }, t, { "aria-labelledby": o(e) }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Lh = /* @__PURE__ */ w({
  __name: "ListboxGroupLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = _c({ id: "" });
    return (n, l) => (b(), x(o(A), M(t, {
      id: o(e).id
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Qa, Sc] = Q("MenubarRoot"), Nh = /* @__PURE__ */ w({
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
    }), u = T(null), { dir: d, loop: p } = ne(e), c = Ce(d);
    return Sc({
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
    }), (f, m) => (b(), x(o(kt), {
      "current-tab-stop-id": u.value,
      "onUpdate:currentTabStopId": m[0] || (m[0] = (g) => u.value = g),
      orientation: "horizontal",
      loop: o(p),
      dir: o(c),
      "as-child": ""
    }, {
      default: h(() => [
        Y(o(A), {
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
}), [wo, Ec] = Q("MenubarMenu"), zh = /* @__PURE__ */ w({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a) {
    const e = ve(a.value), n = Qa();
    R();
    const l = T(), s = T(!1), r = I(() => n.modelValue.value === e);
    return ee(r, () => {
      r.value || (s.value = !1);
    }), Ec({
      value: e,
      triggerElement: l,
      triggerId: e,
      contentId: "",
      wasKeyboardTriggerOpenRef: s
    }), (i, u) => (b(), x(o(no), {
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
}), Kh = /* @__PURE__ */ w({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = Qa(), e = wo(), { forwardRef: n, currentElement: l } = R(), s = T(!1), r = I(() => t.modelValue.value === e.value);
    return oe(() => {
      e.triggerElement = l;
    }), (i, u) => (b(), x(o(Mt), {
      "as-child": "",
      focusable: !i.disabled,
      "tab-stop-id": o(e).value
    }, {
      default: h(() => [
        Y(o(Ya), { "as-child": "" }, {
          default: h(() => [
            Y(o(A), {
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
}), Hh = /* @__PURE__ */ w({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(co), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wh = /* @__PURE__ */ w({
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
    const l = _e(a, t);
    R();
    const s = Qa(), r = wo();
    r.contentId || (r.contentId = ve(void 0, "radix-vue-menubar-content"));
    const { injectCollection: i } = Ve("menubar"), u = i(), d = T(!1);
    function p(c) {
      const m = c.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), v = (s.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === c.key;
      if (!v && m)
        return;
      let _ = u.value.map((E) => E.dataset.value);
      v && _.reverse();
      const $ = _.indexOf(r.value);
      _ = s.loop.value ? Gn(_, $ + 1) : _.slice($ + 1);
      const [y] = _;
      y && s.onMenuOpen(y);
    }
    return (c, f) => (b(), x(o(io), M(o(l), {
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
    }, 16, ["id", "aria-labelledby"]));
  }
}), jh = /* @__PURE__ */ w({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(ao), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uh = /* @__PURE__ */ w({
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
    return R(), (s, r) => (b(), x(o(Sa), H(U({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gh = /* @__PURE__ */ w({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(Za), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qh = /* @__PURE__ */ w({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(vo), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yh = /* @__PURE__ */ w({
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
    return R(), (s, r) => (b(), x(o(ro), H(U({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xh = /* @__PURE__ */ w({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(so), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zh = /* @__PURE__ */ w({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(uo), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jh = /* @__PURE__ */ w({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return R(), (s, r) => (b(), x(o(po), H(U({ ...e, ...o(l) })), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qh = /* @__PURE__ */ w({
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
    const l = _e(a, t);
    return R(), (s, r) => (b(), x(o(fo), H(U(o(l))), {
      default: h(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ey = /* @__PURE__ */ w({
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
    return (s, r) => (b(), x(o(mo), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Ue(l) ? l.value = i : null)
    }, {
      default: h(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), ty = /* @__PURE__ */ w({
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
    const l = _e(a, t);
    R();
    const { injectCollection: s } = Ve("menubar"), r = Qa(), i = wo(), u = s();
    function d(p) {
      if (p.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let m = u.value.map((S) => S.dataset.value);
      const g = m.indexOf(i.value);
      m = r.loop.value ? Gn(m, g + 1) : m.slice(g + 1);
      const [v] = m;
      v && r.onMenuOpen(v);
    }
    return (p, c) => (b(), x(o(ho), M(o(l), {
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
    }, 16));
  }
}), ay = /* @__PURE__ */ w({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(yo), M(t, { "data-radix-menubar-subtrigger": "" }), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [bt, ss] = Q(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), ny = /* @__PURE__ */ w({
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
    }), s = T(""), { forwardRef: r, currentElement: i } = R(), u = T(), d = T(), { createCollection: p } = Ve("nav");
    p(u);
    const { delayDuration: c, skipDelayDuration: f, dir: m, disableClickTrigger: g, disableHoverTrigger: v } = ne(e), S = Ce(m), _ = $t(!1, f), $ = I(() => l.value !== "" || _.value ? 150 : c.value), y = Wa((E) => {
      s.value = l.value, l.value = E;
    }, $);
    return ss({
      isRootMenu: !0,
      modelValue: l,
      previousValue: s,
      baseId: ve(void 0, "radix-navigation-menu"),
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
        _.value = !0, y("");
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
    }), (E, P) => (b(), x(o(A), {
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
function en(a) {
  return a ? "open" : "closed";
}
function rs(a, t) {
  return `${a}-trigger-${t}`;
}
function _o(a, t) {
  return `${a}-content-${t}`;
}
const Va = "navigationMenu.rootContentDismiss";
function In(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
function is(a) {
  const t = document.activeElement;
  return a.some((e) => e === t ? !0 : (e.focus(), document.activeElement !== t));
}
function Pc(a) {
  return a.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    a.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
function us(a) {
  return (t) => t.pointerType === "mouse" ? a(t) : void 0;
}
const [xo, Dc] = Q("NavigationMenuItem"), oy = /* @__PURE__ */ w({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(a) {
    const t = a;
    R();
    const { injectCollection: e } = Ve("nav"), n = e(), l = bt(), s = ve(t.value), r = T(), i = T(), u = _o(l.baseId, s);
    let d = () => ({});
    const p = T(!1);
    async function c(v = "start") {
      const S = document.getElementById(u);
      if (S) {
        d();
        const _ = In(S);
        _.length && is(v === "start" ? _ : _.reverse());
      }
    }
    function f() {
      const v = document.getElementById(u);
      if (v) {
        const S = In(v);
        S.length && (d = Pc(S));
      }
    }
    Dc({
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
      const _ = n.value.filter(
        (y) => {
          var E;
          return (E = y.parentElement) == null ? void 0 : E.hasAttribute("data-menu-item");
        }
      ), $ = It(v, S, void 0, {
        itemsArray: _,
        loop: !1
      });
      $ && ($ == null || $.focus()), v.preventDefault(), v.stopPropagation();
    }
    return (v, S) => (b(), x(o(A), {
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
}), $c = /* @__PURE__ */ w({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, { injectCollection: l } = Ve("nav"), s = l(), { forwardRef: r, currentElement: i } = R(), u = bt(), d = xo(), p = rs(u.baseId, d.value), c = _o(u.baseId, d.value), f = T(null), m = I(() => {
      const E = s.value.map((O) => O.id.split("trigger-")[1]);
      u.dir.value === "rtl" && E.reverse();
      const P = E.indexOf(u.modelValue.value), B = E.indexOf(u.previousValue.value), D = d.value === u.modelValue.value, k = B === E.indexOf(d.value);
      if (!D && !k)
        return f.value;
      const V = (() => {
        if (P !== B) {
          if (D && B !== -1)
            return P > B ? "from-end" : "from-start";
          if (k && P !== -1)
            return P > B ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = V, V;
    });
    function g(y) {
      var E, P;
      if (n("focusOutside", y), n("interactOutside", y), !y.defaultPrevented) {
        d.onContentFocusOutside();
        const B = y.target;
        (P = (E = u.rootNavigationMenu) == null ? void 0 : E.value) != null && P.contains(B) && y.preventDefault();
      }
    }
    function v(y) {
      var E;
      if (n("pointerDownOutside", y), !y.defaultPrevented) {
        const P = y.target, B = s.value.some(
          (k) => k.contains(P)
        ), D = u.isRootMenu && ((E = u.viewport.value) == null ? void 0 : E.contains(P));
        (B || D || !u.isRootMenu) && y.preventDefault();
      }
    }
    ye((y) => {
      const E = i.value;
      if (u.isRootMenu && E) {
        const P = () => {
          var B;
          u.onItemDismiss(), d.onRootContentClose(), E.contains(document.activeElement) && ((B = d.triggerRef.value) == null || B.focus());
        };
        E.addEventListener(Va, P), y(
          () => E.removeEventListener(Va, P)
        );
      }
    });
    function S(y) {
      var E, P;
      n("escapeKeyDown", y), y.defaultPrevented || (u.onItemDismiss(), (P = (E = d.triggerRef) == null ? void 0 : E.value) == null || P.focus(), d.wasEscapeCloseRef.value = !0);
    }
    function _(y) {
      var k;
      const E = y.altKey || y.ctrlKey || y.metaKey, P = y.key === "Tab" && !E, B = In(y.currentTarget);
      if (P) {
        const V = document.activeElement, O = B.findIndex(
          (W) => W === V
        ), K = y.shiftKey ? B.slice(0, O).reverse() : B.slice(O + 1, B.length);
        if (is(K))
          y.preventDefault();
        else {
          (k = d.focusProxyRef.value) == null || k.focus();
          return;
        }
      }
      const D = It(
        y,
        document.activeElement,
        void 0,
        { itemsArray: B, loop: !1, enableIgnoredElement: !0 }
      );
      D == null || D.focus();
    }
    function $() {
      var E;
      const y = new Event(Va, {
        bubbles: !0,
        cancelable: !0
      });
      (E = i.value) == null || E.dispatchEvent(y);
    }
    return (y, E) => (b(), x(o(gt), M({
      id: o(c),
      ref: o(r),
      "aria-labelledby": o(p),
      "data-motion": m.value,
      "data-state": o(en)(o(u).modelValue.value === o(d).value),
      "data-orientation": o(u).orientation
    }, e, {
      onKeydown: _,
      onEscapeKeyDown: S,
      onPointerDownOutside: v,
      onFocusOutside: g,
      onDismiss: $
    }), {
      default: h(() => [
        C(y.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
  }
}), ly = /* @__PURE__ */ w({
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
    const e = a, n = t, l = Re(n), { forwardRef: s } = R(), r = ja(), i = bt(), u = xo(), d = I(() => u.value === i.modelValue.value), p = I(() => i.viewport.value && !i.modelValue.value && i.previousValue.value ? i.previousValue.value === u.value : !1);
    return (c, f) => o(r) ? (b(), x(Gt, {
      key: 0,
      to: o(i).viewport.value,
      disabled: !o(i).viewport.value
    }, [
      Y(o(Pe), {
        present: c.forceMount || d.value || p.value
      }, {
        default: h(() => [
          Y($c, M({
            ref: o(s),
            "data-state": o(en)(d.value),
            style: {
              pointerEvents: !d.value && o(i).isRootMenu ? "none" : void 0
            }
          }, { ...c.$attrs, ...e, ...o(l) }, {
            onPointerenter: f[0] || (f[0] = (m) => o(i).onContentEnter(o(u).value)),
            onPointerleave: f[1] || (f[1] = (m) => o(us)(() => o(i).onContentLeave())(m)),
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
}), sy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), { injectCollection: n } = Ve("nav"), l = n(), s = bt(), r = T(), i = I(() => s.orientation === "horizontal"), u = I(() => !!s.modelValue.value), d = T();
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
    }), Ze(d, p), Ze(s.indicatorTrack, p), (c, f) => o(s).indicatorTrack.value ? (b(), x(Gt, {
      key: 0,
      to: o(s).indicatorTrack.value
    }, [
      Y(o(Pe), {
        present: c.forceMount || u.value
      }, {
        default: h(() => {
          var m, g, v, S;
          return [
            Y(o(A), M({
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
}), ry = /* @__PURE__ */ w({
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
          Va,
          {
            bubbles: !0,
            cancelable: !0
          }
        );
        (r = s.target) == null || r.dispatchEvent(i);
      }
    }
    return (s, r) => (b(), x(o(A), {
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
}), iy = /* @__PURE__ */ w({
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
    }), (s, r) => (b(), x(o(A), {
      ref: o(n),
      style: { position: "relative" }
    }, {
      default: h(() => [
        Y(o(A), M(s.$attrs, {
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
}), uy = /* @__PURE__ */ w({
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
    }), s = T(""), r = bt(), { forwardRef: i, currentElement: u } = R(), d = T(), p = T(), { createCollection: c } = Ve("nav");
    return c(d), ss({
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
    }), (f, m) => (b(), x(o(A), {
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
}), Bc = ["aria-owns"], dy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = bt(), n = xo(), { forwardRef: l, currentElement: s } = R(), r = T(""), i = T(""), u = $t(!1, 300), d = T(!1), p = I(() => n.value === e.modelValue.value);
    oe(() => {
      n.triggerRef = s, r.value = rs(e.baseId, n.value), i.value = _o(e.baseId, n.value);
    });
    function c() {
      e.disableHoverTrigger.value || (d.value = !1, n.wasEscapeCloseRef.value = !1);
    }
    function f($) {
      if (!e.disableHoverTrigger.value && $.pointerType === "mouse") {
        if (t.disabled || d.value || n.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(n.value), u.value = !0;
      }
    }
    function m($) {
      if (!e.disableHoverTrigger.value && $.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), u.value = !1;
      }
    }
    function g($) {
      $.pointerType === "mouse" && e.disableClickTrigger.value || u.value || (p.value ? e.onItemSelect("") : e.onItemSelect(n.value), d.value = p.value);
    }
    function v($) {
      const E = { horizontal: "ArrowDown", vertical: e.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      p.value && $.key === E && (n.onEntryKeyDown(), $.preventDefault(), $.stopPropagation());
    }
    function S($) {
      n.focusProxyRef.value = Ie($);
    }
    function _($) {
      const y = document.getElementById(n.contentId), E = $.relatedTarget, P = E === s.value, B = y == null ? void 0 : y.contains(E);
      (P || !B) && n.onFocusProxyEnter(P ? "start" : "end");
    }
    return ($, y) => (b(), ce(we, null, [
      Y(o(A), M({
        id: r.value,
        ref: o(l),
        disabled: $.disabled,
        "data-disabled": $.disabled ? "" : void 0,
        "data-state": o(en)(p.value),
        "aria-expanded": p.value,
        "aria-controls": i.value,
        "as-child": t.asChild,
        as: $.as
      }, $.$attrs, {
        "data-radix-vue-collection-item": "",
        onPointerenter: c,
        onPointermove: f,
        onPointerleave: m,
        onClick: g,
        onKeydown: v
      }), {
        default: h(() => [
          C($.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
      p.value ? (b(), ce(we, { key: 0 }, [
        Y(o(ta), {
          ref: S,
          "aria-hidden": "",
          tabindex: 0,
          onFocus: _
        }),
        o(e).viewport ? (b(), ce("span", {
          key: 0,
          "aria-owns": i.value
        }, null, 8, Bc)) : pe("", !0)
      ], 64)) : pe("", !0)
    ], 64));
  }
}), cy = /* @__PURE__ */ w({
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
    }), (u, d) => (b(), x(o(Pe), {
      present: u.forceMount || s.value
    }, {
      default: h(() => {
        var p, c;
        return [
          Y(o(A), M(u.$attrs, {
            ref: o(t),
            as: u.as,
            "as-child": u.asChild,
            "data-state": o(en)(s.value),
            "data-orientation": o(n).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && o(n).isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": l.value ? `${(p = l.value) == null ? void 0 : p.width}px` : void 0,
              "--radix-navigation-menu-viewport-height": l.value ? `${(c = l.value) == null ? void 0 : c.height}px` : void 0
            },
            onPointerenter: d[0] || (d[0] = (f) => o(n).onContentEnter(o(n).modelValue.value)),
            onPointerleave: d[1] || (d[1] = (f) => o(us)(() => o(n).onContentLeave())(f))
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
function ds(a) {
  const { disabled: t } = a, e = T(), n = ca(), l = () => window.clearTimeout(e.value), s = (f) => {
    l(), !t.value && (n.trigger(), e.value = window.setTimeout(() => {
      s(60);
    }, f));
  }, r = () => {
    s(400);
  }, i = () => {
    l();
  }, u = T(!1), d = I(() => Ie(a.target) || window), p = (f) => {
    f.button !== 0 || u.value || (f.preventDefault(), u.value = !0, r());
  }, c = () => {
    u.value = !1, i();
  };
  return ze(d, "pointerdown", p), window && (ze(window, "pointerup", c), ze(window, "pointercancel", c)), {
    isPressed: u,
    onTrigger: n.on
  };
}
function Go(a, t = T({})) {
  return Cl(() => new Br(a.value, t.value));
}
function Ic(a, t = T({})) {
  return Cl(() => new Ir(a.value, t.value));
}
function qo(a, t, e) {
  let n = a === "+" ? t + e : t - e;
  if (t % 1 !== 0 || e % 1 !== 0) {
    const l = t.toString().split("."), s = e.toString().split("."), r = l[1] && l[1].length || 0, i = s[1] && s[1].length || 0, u = 10 ** Math.max(r, i);
    t = Math.round(t * u), e = Math.round(e * u), n = a === "+" ? t + e : t - e, n /= u;
  }
  return n;
}
const Tc = ["value", "name", "disabled", "required"], [So, Rc] = Q("NumberFieldRoot"), py = /* @__PURE__ */ w({
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
      () => W(c.value) === s.value || (s.value && !isNaN(c.value) ? qo("-", c.value, i.value) < s.value : !1)
    ), _ = I(
      () => W(c.value) === r.value || (r.value && !isNaN(c.value) ? qo("+", c.value, i.value) > r.value : !1)
    );
    function $(N, L = 1) {
      var z;
      const j = D.parse(((z = v.value) == null ? void 0 : z.value) ?? "");
      e.disabled || (isNaN(j) ? c.value = s.value ?? 0 : N === "increase" ? c.value = W(j + (i.value ?? 1) * L) : c.value = W(j - (i.value ?? 1) * L));
    }
    function y(N = 1) {
      $("increase", N);
    }
    function E(N = 1) {
      $("decrease", N);
    }
    function P(N) {
      N === "min" && s.value !== void 0 ? c.value = W(s.value) : N === "max" && r.value !== void 0 && (c.value = W(r.value));
    }
    const B = Go(u, d), D = Ic(u, d), k = I(() => B.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), V = Go(u, d), O = I(() => isNaN(c.value) ? "" : V.format(c.value));
    function F(N) {
      return D.isValidPartialNumber(N, s.value, r.value);
    }
    function K(N) {
      v.value && (v.value.value = N);
    }
    function W(N) {
      let L;
      return i.value === void 0 || isNaN(i.value) ? L = jt(N, s.value, r.value) : L = Tr(N, s.value, r.value, i.value), L = D.parse(B.format(L)), L;
    }
    function X(N) {
      const L = D.parse(N);
      return c.value = W(L), N.length ? (isNaN(L), K(O.value)) : K(N);
    }
    return Rc({
      modelValue: c,
      handleDecrease: E,
      handleIncrease: y,
      handleMinMaxValue: P,
      inputMode: k,
      inputEl: v,
      onInputElement: (N) => v.value = N,
      textValue: O,
      validate: F,
      applyInputValue: X,
      disabled: l,
      max: r,
      min: s,
      isDecreaseDisabled: S,
      isIncreaseDisabled: _,
      id: p
    }), (N, L) => (b(), ce(we, null, [
      Y(o(A), M(N.$attrs, {
        ref_key: "primitiveElement",
        ref: f,
        role: "group",
        as: N.as,
        "as-child": N.asChild
      }), {
        default: h(() => [
          C(N.$slots, "default", {
            modelValue: o(c),
            textValue: O.value
          })
        ]),
        _: 3
      }, 16, ["as", "as-child"]),
      o(g) ? (b(), ce("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o(c),
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
      }, null, 8, Tc)) : pe("", !0)
    ], 64));
  }
}), fy = /* @__PURE__ */ w({
  __name: "NumberFieldInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: n } = Ae(), l = So();
    function s(r) {
      r.target === document.activeElement && (Math.abs(r.deltaY) <= Math.abs(r.deltaX) || (r.preventDefault(), r.deltaY > 0 ? l.handleIncrease() : r.deltaY < 0 && l.handleDecrease()));
    }
    return oe(() => {
      l.onInputElement(n.value);
    }), (r, i) => (b(), x(o(A), M(t, {
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
}), vy = /* @__PURE__ */ w({
  __name: "NumberFieldIncrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = So(), n = I(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isIncreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Ae(), { isPressed: r, onTrigger: i } = ds({ target: s, disabled: n });
    return i(() => {
      e.handleIncrease();
    }), (u, d) => (b(), x(o(A), M(t, {
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
}), my = /* @__PURE__ */ w({
  __name: "NumberFieldDecrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = So(), n = I(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isDecreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Ae(), { isPressed: r, onTrigger: i } = ds({ target: s, disabled: n });
    return i(() => {
      e.handleDecrease();
    }), (u, d) => (b(), x(o(A), M(t, {
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
}), [na, Ac] = Q("PaginationRoot"), hy = /* @__PURE__ */ w({
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
    return Ac({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: l,
      disabled: s,
      showEdges: r
    }), (d, p) => (b(), x(o(A), {
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
}), yy = /* @__PURE__ */ w({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(A), M(t, { "data-type": "ellipsis" }), {
      default: h(() => [
        C(e.$slots, "default", {}, () => [
          me("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), gy = /* @__PURE__ */ w({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = na();
    return R(), (n, l) => (b(), x(o(A), M(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === 1 || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(1))
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          me("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), by = /* @__PURE__ */ w({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = na();
    return R(), (n, l) => (b(), x(o(A), M(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === o(e).pageCount.value || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(o(e).pageCount.value))
    }), {
      default: h(() => [
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
function Oc(a) {
  return a.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Ta = "ellipsis";
function kc(a, t, e, n) {
  const s = t, r = Math.max(a - e, 1), i = Math.min(a + e, s);
  if (n) {
    const d = Math.min(2 * e + 5, t) - 2, p = r > 3 && Math.abs(s - d - 1 + 1) > 2 && Math.abs(r - 1) > 2, c = i < s - 2 && Math.abs(s - d) > 2 && Math.abs(s - i) > 2;
    if (!p && c)
      return [...rt(1, d), Ta, s];
    if (p && !c) {
      const m = rt(s - d + 1, s);
      return [1, Ta, ...m];
    }
    if (p && c) {
      const m = rt(r, i);
      return [1, Ta, ...m, Ta, s];
    }
    return rt(1, s);
  } else {
    const u = e * 2 + 1;
    return t < u ? rt(1, s) : a <= e + 1 ? rt(1, u) : t - a <= e ? rt(t - u + 1, s) : rt(r, i);
  }
}
const Cy = /* @__PURE__ */ w({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = na(), n = I(() => Oc(
      kc(
        e.page.value,
        e.pageCount.value,
        e.siblingCount.value,
        e.showEdges.value
      )
    ));
    return (l, s) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(l.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), wy = /* @__PURE__ */ w({
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
    return (l, s) => (b(), x(o(A), M(t, {
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
          me(De(l.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), _y = /* @__PURE__ */ w({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = na();
    return (n, l) => (b(), x(o(A), M(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === o(e).pageCount.value || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(o(e).page.value + 1))
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          me("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), xy = /* @__PURE__ */ w({
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
      return b(), x(o(A), M(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: o(e).page.value === 1 || ((s = o(e).disabled) == null ? void 0 : s.value),
        onClick: l[0] || (l[0] = (r) => o(e).onPageChange(o(e).page.value - 1))
      }), {
        default: h(() => [
          C(n.$slots, "default", {}, () => [
            me("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), Mc = ["id", "value", "name", "disabled", "required"], [Vc, Fc] = Q("PinInputRoot"), Sy = /* @__PURE__ */ w({
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
    const e = a, n = t, { mask: l, otp: s, placeholder: r, type: i, disabled: u, dir: d } = ne(e), { forwardRef: p } = R(), c = Ce(d), f = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? [],
      passive: e.modelValue === void 0
    }), m = T(/* @__PURE__ */ new Set());
    function g(S) {
      m.value.add(S);
    }
    const v = I(() => f.value.filter((_) => !!_).length === m.value.size);
    return ee(f, () => {
      v.value && n("complete", f.value);
    }, { deep: !0 }), Fc({
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
    }), (S, _) => (b(), ce(we, null, [
      Y(o(A), M(S.$attrs, {
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
        onFocus: _[0] || (_[0] = ($) => {
          var y, E;
          return (E = (y = Array.from(m.value)) == null ? void 0 : y[0]) == null ? void 0 : E.focus();
        })
      }, null, 40, Mc)
    ], 64));
  }
}), Lc = ["autocomplete", "type", "inputmode", "pattern", "placeholder", "value", "disabled", "data-disabled", "data-complete", "aria-label"], Ey = /* @__PURE__ */ w({
  __name: "PinInputInput",
  props: {
    index: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = Vc(), n = I(() => Array.from(e.inputElements.value)), l = I(() => t.disabled || e.disabled.value), s = I(() => e.otp.value), r = I(() => e.type.value === "number"), i = I(() => e.mask.value), u = T();
    function d(y) {
      var B;
      const E = y.target;
      if ((((B = y.data) == null ? void 0 : B.length) ?? 0) > 1) {
        S(E.value);
        return;
      }
      if (r.value && !/^\d*$/.test(E.value)) {
        E.value = E.value.replace(/\D/g, "");
        return;
      }
      E.value = E.value.slice(-1), $(t.index, E.value);
      const P = n.value[t.index + 1];
      P && P.focus();
    }
    function p(y) {
      It(y, document.activeElement, void 0, {
        itemsArray: n.value,
        focus: !0,
        loop: !1,
        arrowKeyOptions: "horizontal",
        dir: e.dir.value
      });
    }
    function c(y) {
      if (y.preventDefault(), y.target.value)
        $(t.index, "");
      else {
        const B = n.value[t.index - 1];
        B && (B.focus(), $(t.index - 1, ""));
      }
    }
    function f(y) {
      y.key === "Delete" && (y.preventDefault(), $(t.index, ""));
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
      var D;
      const E = [...e.modelValue.value], P = y.length >= n.value.length ? 0 : t.index, B = Math.min(P + y.length, n.value.length);
      for (let k = P; k < B; k++) {
        const V = n.value[k], O = y[k - P];
        r.value && !/^\d*$/.test(O) || (E[k] = O, V.focus());
      }
      e.modelValue.value = E, (D = n.value[B]) == null || D.focus();
    }
    function _(y) {
      let E = y.length - 1;
      for (; E >= 0 && y[E] === ""; )
        y.pop(), E--;
      return y;
    }
    function $(y, E) {
      const P = [...e.modelValue.value];
      P[y] = E, e.modelValue.value = _(P);
    }
    return oe(() => {
      e.onInputElementChange(u.value);
    }), Te(() => {
      var y;
      (y = e.inputElements) == null || y.value.delete(u.value);
    }), (y, E) => (b(), ce("input", {
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
    }, null, 40, Lc));
  }
}), [Ft, Nc] = Q("PopoverRoot"), cs = /* @__PURE__ */ w({
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
    return Nc({
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
    }), (u, d) => (b(), x(o(Rt), null, {
      default: h(() => [
        C(u.$slots, "default", { open: o(s) })
      ]),
      _: 3
    }));
  }
}), ps = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Ft(), { forwardRef: n, currentElement: l } = R();
    return oe(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (b(), x(qe(o(e).hasCustomAnchor.value ? o(A) : o(At)), { "as-child": "" }, {
      default: h(() => [
        Y(o(A), {
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
}), fs = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vs = /* @__PURE__ */ w({
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
    const e = a, n = t, l = Tt(e), { forwardRef: s } = R(), r = Ft();
    return Un(), (i, u) => (b(), x(o(qa), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: h(() => [
        Y(o(gt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => o(r).onOpenChange(!1))
        }, {
          default: h(() => [
            Y(o(Dt), M(o(l), {
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
            }, 16, ["id", "data-state"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), zc = /* @__PURE__ */ w({
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
    const e = a, n = t, l = Ft(), s = T(!1);
    ba(!0);
    const r = _e(e, n), { forwardRef: i, currentElement: u } = R();
    return Ca(u), (d, p) => (b(), x(vs, M(o(r), {
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
}), Kc = /* @__PURE__ */ w({
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
    const e = a, n = t, l = Ft(), s = T(!1), r = T(!1), i = _e(e, n);
    return (u, d) => (b(), x(vs, M(o(i), {
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
}), ms = /* @__PURE__ */ w({
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
    const e = a, n = t, l = Ft(), s = _e(e, n), { forwardRef: r } = R();
    return l.contentId || (l.contentId = ve(void 0, "radix-vue-popover-content")), (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: h(() => [
        o(l).modal.value ? (b(), x(zc, M({ key: 0 }, o(s), { ref: o(r) }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), x(Kc, M({ key: 1 }, o(s), { ref: o(r) }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), hs = /* @__PURE__ */ w({
  __name: "PopoverArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(ea), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ys = /* @__PURE__ */ w({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Ft();
    return (n, l) => (b(), x(o(A), {
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
}), gs = /* @__PURE__ */ w({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    R();
    const e = Ft();
    return cl(() => {
      e.hasCustomAnchor.value = !0;
    }), Te(() => {
      e.hasCustomAnchor.value = !1;
    }), (n, l) => (b(), x(o(At), H(U(t)), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fa = 100, [Hc, Wc] = Q("ProgressRoot"), Eo = (a) => typeof a == "number";
function jc(a, t) {
  return Kt(a) || Eo(a) && !Number.isNaN(a) && a <= t && a >= 0 ? a : (console.error(`Invalid prop \`value\` of value \`${a}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${fa} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Uc(a) {
  return Eo(a) && !Number.isNaN(a) && a > 0 ? a : (console.error(
    `Invalid prop \`max\` of value \`${a}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${fa}\`.`
  ), fa);
}
const Py = /* @__PURE__ */ w({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: fa },
    getValueLabel: { type: Function, default: (a, t) => `${Math.round(a / t * fa)}%` },
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
        const u = jc(i, e.max);
        u !== i && (await se(), l.value = u);
      },
      { immediate: !0 }
    ), ee(
      () => e.max,
      (i) => {
        const u = Uc(e.max);
        u !== i && (s.value = u);
      },
      { immediate: !0 }
    );
    const r = I(() => Kt(l.value) ? "indeterminate" : l.value === s.value ? "complete" : "loading");
    return Wc({
      modelValue: l,
      max: s,
      progressState: r
    }), (i, u) => (b(), x(o(A), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": o(s),
      "aria-valuemin": 0,
      "aria-valuenow": Eo(o(l)) ? o(l) : void 0,
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
}), Dy = /* @__PURE__ */ w({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Hc();
    return R(), (n, l) => {
      var s;
      return b(), x(o(A), M(t, {
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
}), [Gc, qc] = Q("RadioGroupRoot"), $y = /* @__PURE__ */ w({
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
    }), { disabled: r, loop: i, orientation: u, name: d, required: p, dir: c } = ne(e), f = Ce(c);
    return qc({
      modelValue: s,
      changeModelValue: (m) => {
        s.value = m;
      },
      disabled: r,
      loop: i,
      orientation: u,
      name: d == null ? void 0 : d.value,
      required: p
    }), (m, g) => (b(), x(o(kt), {
      "as-child": "",
      orientation: o(u),
      dir: o(f),
      loop: o(i)
    }, {
      default: h(() => [
        Y(o(A), {
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
}), Yc = ["value", "checked", "name", "disabled", "required"], Xc = /* @__PURE__ */ w({
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
    return (c, f) => (b(), x(o(A), M(c.$attrs, {
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
        o(u) ? (b(), ce("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "",
          value: o(s),
          checked: !!o(l),
          name: c.name,
          disabled: c.disabled,
          required: c.required,
          style: {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }
        }, null, 8, Yc)) : pe("", !0)
      ]),
      _: 3
    }, 16, ["id", "type", "as", "aria-checked", "aria-label", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]));
  }
}), [Zc, Jc] = Q("RadioGroupItem"), By = /* @__PURE__ */ w({
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
    const t = a, { forwardRef: e, currentElement: n } = R(), l = Gc(), s = I(() => l.disabled.value || t.disabled), r = I(() => l.required.value || t.required), i = I(() => {
      var c;
      return ((c = l.modelValue) == null ? void 0 : c.value) === t.value;
    });
    Jc({ disabled: s, checked: i });
    const u = T(!1), d = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    ze("keydown", (c) => {
      d.includes(c.key) && (u.value = !0);
    }), ze("keyup", () => {
      u.value = !1;
    });
    function p() {
      setTimeout(() => {
        var c;
        u.value && ((c = n.value) == null || c.click());
      }, 0);
    }
    return (c, f) => (b(), x(o(Mt), {
      checked: i.value,
      disabled: s.value,
      "as-child": "",
      focusable: !s.value,
      active: i.value
    }, {
      default: h(() => [
        Y(Xc, M({ ...c.$attrs, ...t }, {
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
}), Iy = /* @__PURE__ */ w({
  __name: "RadioGroupIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t } = R(), e = Zc();
    return (n, l) => (b(), x(o(Pe), {
      present: n.forceMount || o(e).checked.value
    }, {
      default: h(() => [
        Y(o(A), M({
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
function Qc(a) {
  const t = I(() => a.start.value ? !!a.isDateDisabled(a.start.value) : !1), e = I(() => a.end.value ? !!a.isDateDisabled(a.end.value) : !1), n = I(
    () => t.value || e.value ? !1 : !!(a.start.value && a.end.value && Me(a.end.value, a.start.value))
  ), l = (u) => a.start.value ? Oe(a.start.value, u) : !1, s = (u) => a.end.value ? Oe(a.end.value, u) : !1, r = (u) => a.start.value && Oe(a.start.value, u) || a.end.value && Oe(a.end.value, u) ? !0 : a.end.value && a.start.value ? br(u, a.start.value, a.end.value) : !1, i = I(() => {
    if (a.start.value && a.end.value || !a.start.value || !a.focusedValue.value)
      return null;
    const u = Me(a.start.value, a.focusedValue.value), d = u ? a.start.value : a.focusedValue.value, p = u ? a.focusedValue.value : a.start.value;
    return Oe(d.add({ days: 1 }), p) ? {
      start: d,
      end: p
    } : ml(d, p, a.isDateUnavailable, a.isDateDisabled) ? {
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
const ep = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, tp = {
  role: "heading",
  "aria-level": "2"
}, [oa, ap] = Q("RangeCalendarRoot"), np = /* @__PURE__ */ w({
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
      minValue: _,
      locale: $,
      dir: y,
      nextPage: E,
      prevPage: P
    } = ne(e), { primitiveElement: B, currentElement: D } = Ae(), k = Ce(y), V = T(), O = T(), F = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), K = qt({
      defaultPlaceholder: e.placeholder,
      defaultValue: F.value.start
    }), W = T(F.value.start), X = T(F.value.end), N = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? K.copy(),
      passive: e.placeholder === void 0
    });
    function L(be) {
      N.value = be.copy();
    }
    const {
      fullCalendarLabel: j,
      headingValue: z,
      isDateDisabled: J,
      isDateUnavailable: G,
      isNextButtonDisabled: Z,
      isPrevButtonDisabled: te,
      grid: fe,
      weekdays: q,
      isOutsideVisibleView: le,
      nextPage: he,
      prevPage: xe,
      formatter: ge
    } = Hl({
      locale: $,
      placeholder: N,
      weekStartsOn: u,
      fixedWeeks: p,
      numberOfMonths: c,
      minValue: _,
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
      isInvalid: $e,
      isSelected: ue,
      highlightedRange: Se,
      isSelectionStart: Fe,
      isSelectionEnd: He
    } = Qc({
      start: W,
      end: X,
      isDateDisabled: J,
      isDateUnavailable: G,
      focusedValue: O
    });
    return ee(F, (be) => {
      be.start && be.end && (W.value && !Ee(W.value, be.start) && (W.value = be.start.copy()), X.value && !Ee(X.value, be.end) && (X.value = be.end.copy()));
    }), ee(W, (be) => {
      be && !Ee(be, N.value) && L(be), n("update:startValue", be);
    }), ee([W, X], ([be, ot]) => {
      const We = F.value;
      if (!(We && We.start && We.end && be && ot && Ee(We.start, be) && Ee(We.end, ot)))
        if (be && ot) {
          if (We.start && We.end && Ee(We.start, be) && Ee(We.end, ot))
            return;
          Me(ot, be) ? F.value = {
            start: ot.copy(),
            end: be.copy()
          } : F.value = {
            start: be.copy(),
            end: ot.copy()
          };
        } else We.start && We.end && (F.value = {
          start: void 0,
          end: void 0
        });
    }), ap({
      isDateUnavailable: G,
      startValue: W,
      endValue: X,
      formatter: ge,
      modelValue: F,
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
      fullCalendarLabel: j,
      headingValue: z,
      isInvalid: $e,
      isDateDisabled: J,
      highlightedRange: Se,
      focusedValue: O,
      lastPressedDateValue: V,
      isSelected: ue,
      isSelectionEnd: He,
      isSelectionStart: Fe,
      isNextButtonDisabled: Z,
      isPrevButtonDisabled: te,
      isOutsideVisibleView: le,
      nextPage: he,
      prevPage: xe,
      parentElement: D,
      onPlaceholderChange: L,
      locale: $,
      dir: k
    }), oe(() => {
      r.value && bl(D.value);
    }), (be, ot) => (b(), x(o(A), {
      ref_key: "primitiveElement",
      ref: B,
      as: be.as,
      "as-child": be.asChild,
      role: "application",
      "aria-label": o(j),
      "data-readonly": o(s) ? "" : void 0,
      "data-disabled": o(l) ? "" : void 0,
      "data-invalid": o($e) ? "" : void 0,
      dir: o(k)
    }, {
      default: h(() => [
        Ge("div", ep, [
          Ge("div", tp, De(o(j)), 1)
        ]),
        C(be.$slots, "default", {
          date: o(N),
          grid: o(fe),
          weekDays: o(q),
          weekStartsOn: o(u),
          locale: o($),
          fixedWeeks: o(p)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), op = /* @__PURE__ */ w({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lp = /* @__PURE__ */ w({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = oa();
    return (n, l) => (b(), x(o(A), M(t, {
      "data-disabled": o(e).disabled.value ? "" : void 0
    }), {
      default: h(() => [
        C(n.$slots, "default", {
          headingValue: o(e).headingValue.value
        }, () => [
          me(De(o(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), sp = /* @__PURE__ */ w({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a) {
    const t = a, e = oa();
    return (n, l) => (b(), x(o(A), M(t, {
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
}), rp = /* @__PURE__ */ w({
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
      return b(), x(o(A), {
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
}), ip = /* @__PURE__ */ w({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), up = /* @__PURE__ */ w({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = oa();
    return (n, l) => (b(), x(o(A), M(t, {
      "aria-label": "Next page",
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": o(e).isNextButtonDisabled(t.step, t.nextPage) || void 0,
      "data-disabled": o(e).isNextButtonDisabled(t.step, t.nextPage) || void 0,
      disabled: o(e).isNextButtonDisabled(t.step, t.nextPage),
      onClick: l[0] || (l[0] = (s) => o(e).nextPage(t.step, t.nextPage))
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          me("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), dp = /* @__PURE__ */ w({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = oa();
    return (n, l) => (b(), x(o(A), M(t, {
      "aria-label": "Previous page",
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": o(e).isPrevButtonDisabled(t.step, t.prevPage) || void 0,
      "data-disabled": o(e).isPrevButtonDisabled(t.step, t.prevPage) || void 0,
      disabled: o(e).isPrevButtonDisabled(t.step, t.prevPage),
      onClick: l[0] || (l[0] = (s) => o(e).prevPage(t.step, t.prevPage))
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          me("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), cp = /* @__PURE__ */ w({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), M(t, { "aria-hidden": "true" }), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pp = /* @__PURE__ */ w({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fp = /* @__PURE__ */ w({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vp = /* @__PURE__ */ w({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = oa(), n = et(), { primitiveElement: l, currentElement: s } = Ae(), r = I(() => e.formatter.custom(Ne(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = I(() => e.isDateDisabled(t.day)), u = I(() => {
      var D;
      return (D = e.isDateUnavailable) == null ? void 0 : D.call(e, t.day);
    }), d = I(() => e.isSelected(t.day)), p = I(() => e.isSelectionStart(t.day)), c = I(() => e.isSelectionEnd(t.day)), f = I(() => e.highlightedRange.value ? Cr(t.day, e.highlightedRange.value.start, e.highlightedRange.value.end) : !1), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", g = I(() => pl(t.day, Ln())), v = I(() => !fl(t.day, t.month)), S = I(
      () => e.isOutsideVisibleView(t.day)
    ), _ = I(() => t.day.day.toLocaleString(e.locale.value)), $ = I(() => Oe(t.day, e.placeholder.value));
    function y(D) {
      var k;
      if (!e.readonly.value && !(e.isDateDisabled(D) || (k = e.isDateUnavailable) != null && k.call(e, D))) {
        if (e.lastPressedDateValue.value = D.copy(), e.startValue.value && e.highlightedRange.value === null) {
          if (Oe(D, e.startValue.value) && !e.preventDeselect.value && !e.endValue.value) {
            e.startValue.value = void 0, e.onPlaceholderChange(D);
            return;
          } else if (!e.endValue.value) {
            e.lastPressedDateValue.value && Oe(e.lastPressedDateValue.value, D) && (e.startValue.value = D.copy());
            return;
          }
        }
        if (e.startValue.value && Oe(e.startValue.value, D) && !e.preventDeselect.value && !e.endValue.value) {
          e.startValue.value = void 0, e.onPlaceholderChange(D);
          return;
        }
        e.startValue.value ? e.endValue.value ? e.endValue.value && e.startValue.value && (e.endValue.value = void 0, e.startValue.value = D.copy()) : e.endValue.value = D.copy() : e.startValue.value = D.copy();
      }
    }
    function E() {
      y(t.day);
    }
    function P() {
      var D;
      e.isDateDisabled(t.day) || (D = e.isDateUnavailable) != null && D.call(e, t.day) || (e.focusedValue.value = t.day.copy());
    }
    function B(D) {
      D.preventDefault(), D.stopPropagation();
      const k = e.parentElement.value, V = k ? Array.from(k.querySelectorAll(m)) : [];
      let F = V.indexOf(s.value);
      const K = 7, W = e.dir.value === "rtl" ? -1 : 1;
      switch (D.code) {
        case n.ARROW_RIGHT:
          F += W;
          break;
        case n.ARROW_LEFT:
          F -= W;
          break;
        case n.ARROW_UP:
          F -= K;
          break;
        case n.ARROW_DOWN:
          F += K;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          y(t.day);
          return;
        default:
          return;
      }
      if (F >= 0 && F < V.length) {
        V[F].focus();
        return;
      }
      if (F < 0) {
        if (e.isPrevButtonDisabled("month"))
          return;
        e.prevPage(), se(() => {
          const X = k ? Array.from(k.querySelectorAll(m)) : [];
          X[X.length - Math.abs(F)].focus();
        });
        return;
      }
      if (F >= V.length) {
        if (e.isNextButtonDisabled("month"))
          return;
        e.nextPage(), se(() => {
          (k ? Array.from(k.querySelectorAll(m)) : [])[F - V.length].focus();
        });
      }
    }
    return (D, k) => (b(), x(o(A), M({
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
      "data-value": D.day.toString(),
      "data-disabled": i.value || v.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": g.value ? "" : void 0,
      "data-outside-month": v.value ? "" : void 0,
      "data-focused": $.value ? "" : void 0,
      tabindex: $.value ? 0 : v.value || i.value ? void 0 : -1,
      onClick: E,
      onFocusin: P,
      onMouseenter: P,
      onKeydown: re(B, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: h(() => [
        C(D.$slots, "default", { dayValue: _.value }, () => [
          me(De(_.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), [Ke, mp] = Q("ScrollAreaRoot"), Ty = /* @__PURE__ */ w({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: {},
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = R(), l = T(0), s = T(0), r = T(), i = T(), u = T(), d = T(), p = T(!1), c = T(!1), { type: f, dir: m, scrollHideDelay: g } = ne(t), v = Ce(m);
    return mp({
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
    }), (S, _) => (b(), x(o(A), {
      ref: o(e),
      "as-child": t.asChild,
      as: S.as,
      dir: o(v),
      style: ke({
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
}), Ry = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ScrollAreaViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, n = Ke(), l = T();
    oe(() => {
      n.onViewportChange(l.value), n.onContentChange(r.value);
    }), t({
      viewportElement: l
    });
    const { forwardRef: s, currentElement: r } = R();
    return (i, u) => (b(), ce(we, null, [
      Ge("div", M({
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
        Y(o(A), {
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
      Y(o(A), {
        as: "style",
        nonce: i.nonce
      }, {
        default: h(() => [
          me(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
function bs(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + n * (e - a[0]);
  };
}
function tn(a) {
  const t = Cs(a.viewport, a.content), e = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, n = (a.scrollbar.size - e) * t;
  return Math.max(n, 18);
}
function Cs(a, t) {
  const e = a / t;
  return Number.isNaN(e) ? 0 : e;
}
function hp(a, t = () => {
}) {
  let e = { left: a.scrollLeft, top: a.scrollTop }, n = 0;
  return function l() {
    const s = { left: a.scrollLeft, top: a.scrollTop }, r = e.left !== s.left, i = e.top !== s.top;
    (r || i) && t(), e = s, n = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(n);
}
function Yo(a, t, e = "ltr") {
  const n = tn(t), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - l, r = t.content - t.viewport, i = s - n, u = e === "ltr" ? [0, r] : [r * -1, 0], d = jt(
    a,
    u[0],
    u[1]
  );
  return bs([0, r], [0, i])(d);
}
function Ra(a) {
  return a ? Number.parseInt(a, 10) : 0;
}
function yp(a, t, e, n = "ltr") {
  const l = tn(e), s = l / 2, r = t || s, i = l - r, u = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - i, p = e.content - e.viewport, c = n === "ltr" ? [0, p] : [p * -1, 0];
  return bs(
    [u, d],
    c
  )(a);
}
function Xo(a, t) {
  return a > 0 && a < t;
}
const ws = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Ke(), s = an(), r = nn(), { forwardRef: i, currentElement: u } = R(), d = T(""), p = T();
    function c(_) {
      var $, y;
      if (p.value) {
        const E = _.clientX - (($ = p.value) == null ? void 0 : $.left), P = _.clientY - ((y = p.value) == null ? void 0 : y.top);
        n("onDragScroll", { x: E, y: P });
      }
    }
    function f(_) {
      _.button === 0 && (_.target.setPointerCapture(_.pointerId), p.value = u.value.getBoundingClientRect(), d.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", l.viewport && (l.viewport.value.style.scrollBehavior = "auto"), c(_));
    }
    function m(_) {
      c(_);
    }
    function g(_) {
      const $ = _.target;
      $.hasPointerCapture(_.pointerId) && $.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = d.value, l.viewport && (l.viewport.value.style.scrollBehavior = ""), p.value = void 0;
    }
    function v(_) {
      var P;
      const $ = _.target, y = (P = u.value) == null ? void 0 : P.contains($), E = s.sizes.value.content - s.sizes.value.viewport;
      y && s.handleWheelScroll(_, E);
    }
    oe(() => {
      document.addEventListener("wheel", v, { passive: !1 });
    }), Te(() => {
      document.removeEventListener("wheel", v);
    });
    function S() {
      var _, $, y, E, P;
      u.value && (e.isHorizontal ? s.handleSizeChange({
        content: ((_ = l.viewport.value) == null ? void 0 : _.scrollWidth) ?? 0,
        viewport: (($ = l.viewport.value) == null ? void 0 : $.offsetWidth) ?? 0,
        scrollbar: {
          size: u.value.clientWidth ?? 0,
          paddingStart: Ra(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Ra(getComputedStyle(u.value).paddingRight)
        }
      }) : s.handleSizeChange({
        content: ((y = l.viewport.value) == null ? void 0 : y.scrollHeight) ?? 0,
        viewport: ((E = l.viewport.value) == null ? void 0 : E.offsetHeight) ?? 0,
        scrollbar: {
          size: ((P = u.value) == null ? void 0 : P.clientHeight) ?? 0,
          paddingStart: Ra(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Ra(getComputedStyle(u.value).paddingRight)
        }
      }));
    }
    return Ze(u, S), Ze(l.content, S), (_, $) => (b(), x(o(A), {
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
        C(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), gp = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarX",
  setup(a) {
    const t = Ke(), e = an(), { forwardRef: n, currentElement: l } = R();
    oe(() => {
      l.value && t.onScrollbarXChange(l.value);
    });
    const s = I(() => e.sizes.value);
    return (r, i) => (b(), x(ws, {
      ref: o(n),
      "is-horizontal": !0,
      "data-orientation": "horizontal",
      style: ke({
        bottom: 0,
        left: o(t).dir.value === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: o(t).dir.value === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": s.value ? `${o(tn)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => o(e).onDragScroll(u.x))
    }, {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), bp = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarY",
  setup(a) {
    const t = Ke(), e = an(), { forwardRef: n, currentElement: l } = R();
    oe(() => {
      l.value && t.onScrollbarYChange(l.value);
    });
    const s = I(() => e.sizes.value);
    return (r, i) => (b(), x(ws, {
      ref: o(n),
      "is-horizontal": !1,
      "data-orientation": "vertical",
      style: ke({
        top: 0,
        right: o(t).dir.value === "ltr" ? 0 : void 0,
        left: o(t).dir.value === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": s.value ? `${o(tn)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => o(e).onDragScroll(u.y))
    }, {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), [an, Cp] = Q("ScrollAreaScrollbarVisible"), Po = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarVisible",
  setup(a) {
    const t = Ke(), e = nn(), { forwardRef: n } = R(), l = T({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), s = I(() => {
      const _ = Cs(l.value.viewport, l.value.content);
      return _ > 0 && _ < 1;
    }), r = T(), i = T(0);
    function u(_, $) {
      if (m.value) {
        const y = t.viewport.value.scrollLeft + _.deltaY;
        t.viewport.value.scrollLeft = y, Xo(y, $) && _.preventDefault();
      } else {
        const y = t.viewport.value.scrollTop + _.deltaY;
        t.viewport.value.scrollTop = y, Xo(y, $) && _.preventDefault();
      }
    }
    function d(_, $) {
      m.value ? i.value = $.x : i.value = $.y;
    }
    function p(_) {
      i.value = 0;
    }
    function c(_) {
      l.value = _;
    }
    function f(_, $) {
      return yp(
        _,
        i.value,
        l.value,
        $
      );
    }
    const m = I(
      () => e.isHorizontal.value
    );
    function g(_) {
      m.value ? t.viewport.value.scrollLeft = f(
        _,
        t.dir.value
      ) : t.viewport.value.scrollTop = f(_);
    }
    function v() {
      if (m.value) {
        if (t.viewport.value && r.value) {
          const _ = t.viewport.value.scrollLeft, $ = Yo(
            _,
            l.value,
            t.dir.value
          );
          r.value.style.transform = `translate3d(${$}px, 0, 0)`;
        }
      } else if (t.viewport.value && r.value) {
        const _ = t.viewport.value.scrollTop, $ = Yo(_, l.value);
        r.value.style.transform = `translate3d(0, ${$}px, 0)`;
      }
    }
    function S(_) {
      r.value = _;
    }
    return Cp({
      sizes: l,
      hasThumb: s,
      handleWheelScroll: u,
      handleThumbDown: d,
      handleThumbUp: p,
      handleSizeChange: c,
      onThumbPositionChange: v,
      onThumbChange: S,
      onDragScroll: g
    }), (_, $) => m.value ? (b(), x(gp, M({ key: 0 }, _.$attrs, { ref: o(n) }), {
      default: h(() => [
        C(_.$slots, "default")
      ]),
      _: 3
    }, 16)) : (b(), x(bp, M({ key: 1 }, _.$attrs, { ref: o(n) }), {
      default: h(() => [
        C(_.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _s = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarAuto",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = Ke(), e = nn(), { forwardRef: n } = R(), l = T(!1), s = Wa(() => {
      if (t.viewport.value) {
        const r = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, i = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
        l.value = e.isHorizontal.value ? r : i;
      }
    }, 10);
    return oe(() => s()), Ze(t.viewport, s), Ze(t.content, s), (r, i) => (b(), x(o(Pe), {
      present: r.forceMount || l.value
    }, {
      default: h(() => [
        Y(Po, M(r.$attrs, {
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
}), wp = /* @__PURE__ */ w({
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
      default: h(() => [
        Y(_s, M(i.$attrs, {
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
}), _p = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarScroll",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = Ke(), e = nn(), { forwardRef: n } = R(), { state: l, dispatch: s } = Rl("hidden", {
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
    const r = Wa(() => s("SCROLL_END"), 100);
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
    }), (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(l) !== "hidden"
    }, {
      default: h(() => [
        Y(Po, M(i.$attrs, { ref: o(n) }), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [nn, xp] = Q("ScrollAreaScrollbar"), Ay = /* @__PURE__ */ w({
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
    return xp({
      orientation: s,
      forceMount: r,
      isHorizontal: l,
      as: u,
      asChild: i
    }), (d, p) => o(n).type.value === "hover" ? (b(), x(wp, M({ key: 0 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: h(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "scroll" ? (b(), x(_p, M({ key: 1 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: h(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "auto" ? (b(), x(_s, M({ key: 2 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: h(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "always" ? (b(), x(Po, M({ key: 3 }, d.$attrs, {
      ref: o(e),
      "data-state": "visible"
    }), {
      default: h(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Oy = /* @__PURE__ */ w({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Ke(), n = an();
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
        const f = hp(
          d.value,
          n.onThumbPositionChange
        );
        u.value = f, n.onThumbPositionChange();
      }
    }
    const c = I(() => n.sizes.value);
    return ii(c, () => {
      n.onThumbChange(i.value), d.value && (n.onThumbPositionChange(), d.value.addEventListener("scroll", p));
    }), Te(() => {
      var f;
      d.value.removeEventListener("scroll", p), (f = e.viewport.value) == null || f.removeEventListener("scroll", p);
    }), (f, m) => (b(), x(o(A), {
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
      default: h(() => [
        C(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-state", "as-child", "as"]));
  }
}), Sp = /* @__PURE__ */ w({
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
      return l.value ? (b(), x(o(A), M({
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
}), ky = /* @__PURE__ */ w({
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
    return (r, i) => s.value ? (b(), x(Sp, M({ key: 0 }, t, { ref: o(e) }), {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Ep = ["default-value"], Pp = /* @__PURE__ */ w({
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
      default: h(() => [
        Ka(Ge("select", M({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => Ue(e) ? e.value = r : null),
          "default-value": o(e)
        }), [
          C(l.$slots, "default")
        ], 16, Ep), [
          [vr, o(e)]
        ])
      ]),
      _: 3
    }));
  }
}), Dp = {
  key: 0,
  value: ""
}, [Ct, xs] = Q("SelectRoot"), [$p, Bp] = Q("SelectRoot"), My = /* @__PURE__ */ w({
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
    }), d = T(!1), { required: p, disabled: c, dir: f } = ne(e), m = Ce(f);
    xs({
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
      required: p,
      onOpenChange: (_) => {
        s.value = _;
      },
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: c
    });
    const g = Qe(r), v = T(/* @__PURE__ */ new Set()), S = I(() => Array.from(v.value).map((_) => {
      var $;
      return ($ = _.props) == null ? void 0 : $.value;
    }).join(";"));
    return Bp({
      onNativeOptionAdd: (_) => {
        v.value.add(_);
      },
      onNativeOptionRemove: (_) => {
        v.value.delete(_);
      }
    }), (_, $) => (b(), x(o(Rt), null, {
      default: h(() => [
        C(_.$slots, "default", {
          modelValue: o(l),
          open: o(s)
        }),
        o(g) ? (b(), x(Pp, M({ key: S.value }, _.$attrs, {
          "aria-hidden": "",
          tabindex: "-1",
          required: o(p),
          name: _.name,
          autocomplete: _.autocomplete,
          disabled: o(c),
          value: o(l),
          onChange: $[0] || ($[0] = (y) => l.value = y.target.value)
        }), {
          default: h(() => [
            o(l) === void 0 ? (b(), ce("option", Dp)) : pe("", !0),
            (b(!0), ce(we, null, ya(Array.from(v.value), (y) => (b(), x(qe(y), M({ ref_for: !0 }, y.props, {
              key: y.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : pe("", !0)
      ]),
      _: 3
    }));
  }
}), Ip = [" ", "Enter", "ArrowUp", "ArrowDown"], Tp = [" ", "Enter"], at = 10;
function Ss(a) {
  return a === "" || Kt(a);
}
const Vy = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Ct(), n = I(() => {
      var m;
      return ((m = e.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: l, currentElement: s } = R();
    e.contentId || (e.contentId = ve(void 0, "radix-vue-select-content")), oe(() => {
      e.triggerElement = s;
    });
    const { injectCollection: r } = Ve(), i = r(), { search: u, handleTypeaheadSearch: d, resetTypeahead: p } = wa(i);
    function c() {
      n.value || (e.onOpenChange(!0), p());
    }
    function f(m) {
      c(), e.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, g) => (b(), x(o(At), { "as-child": "" }, {
      default: h(() => {
        var v, S, _, $;
        return [
          Y(o(A), {
            ref: o(l),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": o(e).contentId,
            "aria-expanded": o(e).open.value || !1,
            "aria-required": (v = o(e).required) == null ? void 0 : v.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (S = o(e)) == null ? void 0 : S.dir.value,
            "data-state": (_ = o(e)) != null && _.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": o(Ss)(($ = o(e).modelValue) == null ? void 0 : $.value) ? "" : void 0,
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
              !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && E && y.key === " " || (o(d)(y.key), o(Ip).includes(y.key) && (c(), y.preventDefault()));
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
}), Fy = /* @__PURE__ */ w({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Do, Rp] = Q("SelectItemAlignedPosition"), Ap = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(a, { emit: t }) {
    const e = a, n = t, { injectCollection: l } = Ve(), s = Ct(), r = wt(), i = l(), u = T(!1), d = T(!0), p = T(), { forwardRef: c, currentElement: f } = R(), { viewport: m, selectedItem: g, selectedItemText: v, focusSelectedItem: S } = r;
    function _() {
      if (s.triggerElement.value && s.valueElement.value && p.value && f.value && (m != null && m.value) && (g != null && g.value) && (v != null && v.value)) {
        const E = s.triggerElement.value.getBoundingClientRect(), P = f.value.getBoundingClientRect(), B = s.valueElement.value.getBoundingClientRect(), D = v.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const ge = D.left - P.left, $e = B.left - ge, ue = E.left - $e, Se = E.width + ue, Fe = Math.max(Se, P.width), He = window.innerWidth - at, be = jt($e, at, He - Fe);
          p.value.style.minWidth = `${Se}px`, p.value.style.left = `${be}px`;
        } else {
          const ge = P.right - D.right, $e = window.innerWidth - B.right - ge, ue = window.innerWidth - E.right - $e, Se = E.width + ue, Fe = Math.max(Se, P.width), He = window.innerWidth - at, be = jt(
            $e,
            at,
            He - Fe
          );
          p.value.style.minWidth = `${Se}px`, p.value.style.right = `${be}px`;
        }
        const k = i.value, V = window.innerHeight - at * 2, O = m.value.scrollHeight, F = window.getComputedStyle(f.value), K = Number.parseInt(
          F.borderTopWidth,
          10
        ), W = Number.parseInt(F.paddingTop, 10), X = Number.parseInt(
          F.borderBottomWidth,
          10
        ), N = Number.parseInt(
          F.paddingBottom,
          10
        ), L = K + W + O + N + X, j = Math.min(
          g.value.offsetHeight * 5,
          L
        ), z = window.getComputedStyle(m.value), J = Number.parseInt(z.paddingTop, 10), G = Number.parseInt(
          z.paddingBottom,
          10
        ), Z = E.top + E.height / 2 - at, te = V - Z, fe = g.value.offsetHeight / 2, q = g.value.offsetTop + fe, le = K + W + q, he = L - le;
        if (le <= Z) {
          const ge = g.value === k[k.length - 1];
          p.value.style.bottom = "0px";
          const $e = f.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, ue = Math.max(
            te,
            fe + (ge ? G : 0) + $e + X
          ), Se = le + ue;
          p.value.style.height = `${Se}px`;
        } else {
          const ge = g.value === k[0];
          p.value.style.top = "0px";
          const ue = Math.max(
            Z,
            K + m.value.offsetTop + (ge ? J : 0) + fe
          ) + he;
          p.value.style.height = `${ue}px`, m.value.scrollTop = le - Z + m.value.offsetTop;
        }
        p.value.style.margin = `${at}px 0`, p.value.style.minHeight = `${j}px`, p.value.style.maxHeight = `${V}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const $ = T("");
    oe(async () => {
      await se(), _(), f.value && ($.value = window.getComputedStyle(f.value).zIndex);
    });
    function y(E) {
      E && d.value === !0 && (_(), S == null || S(), d.value = !1);
    }
    return Rp({
      contentWrapper: p,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: y
    }), (E, P) => (b(), ce("div", {
      ref_key: "contentWrapperElement",
      ref: p,
      style: ke({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: $.value
      })
    }, [
      Y(o(A), M({
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
      }, 16)
    ], 4));
  }
}), Op = /* @__PURE__ */ w({
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
      default: h(() => [
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
}, [wt, kp] = Q("SelectContent"), Mp = /* @__PURE__ */ w({
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
    Un(), ba(e.bodyLock);
    const { createCollection: s } = Ve(), r = T();
    Ca(r);
    const i = s(r), { search: u, handleTypeaheadSearch: d } = wa(i), p = T(), c = T(), f = T(), m = T(!1), g = T(!1);
    function v() {
      c.value && r.value && Pn([c.value, r.value]);
    }
    ee(m, () => {
      v();
    });
    const { onOpenChange: S, triggerPointerDownPosRef: _ } = l;
    ye((P) => {
      if (!r.value)
        return;
      let B = { x: 0, y: 0 };
      const D = (V) => {
        var O, F;
        B = {
          x: Math.abs(
            Math.round(V.pageX) - (((O = _.value) == null ? void 0 : O.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - (((F = _.value) == null ? void 0 : F.y) ?? 0)
          )
        };
      }, k = (V) => {
        var O;
        V.pointerType !== "touch" && (B.x <= 10 && B.y <= 10 ? V.preventDefault() : (O = r.value) != null && O.contains(V.target) || S(!1), document.removeEventListener("pointermove", D), _.value = null);
      };
      _.value !== null && (document.addEventListener("pointermove", D), document.addEventListener("pointerup", k, {
        capture: !0,
        once: !0
      })), P(() => {
        document.removeEventListener("pointermove", D), document.removeEventListener("pointerup", k, {
          capture: !0
        });
      });
    });
    function $(P) {
      const B = P.ctrlKey || P.altKey || P.metaKey;
      if (P.key === "Tab" && P.preventDefault(), !B && P.key.length === 1 && d(P.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(P.key)) {
        let D = i.value;
        if (["ArrowUp", "End"].includes(P.key) && (D = D.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(P.key)) {
          const k = P.target, V = D.indexOf(k);
          D = D.slice(V + 1);
        }
        setTimeout(() => Pn(D)), P.preventDefault();
      }
    }
    const y = I(() => e.position === "popper" ? e : {}), E = Tt(y.value);
    return kp({
      content: r,
      viewport: p,
      onViewportChange: (P) => {
        p.value = P;
      },
      itemRefCallback: (P, B, D) => {
        var O, F;
        const k = !g.value && !D;
        (((O = l.modelValue) == null ? void 0 : O.value) !== void 0 && ((F = l.modelValue) == null ? void 0 : F.value) === B || k) && (c.value = P, k && (g.value = !0));
      },
      selectedItem: c,
      selectedItemText: f,
      onItemLeave: () => {
        var P;
        (P = r.value) == null || P.focus();
      },
      itemTextRefCallback: (P, B, D) => {
        var O, F;
        const k = !g.value && !D;
        (((O = l.modelValue) == null ? void 0 : O.value) !== void 0 && ((F = l.modelValue) == null ? void 0 : F.value) === B || k) && (f.value = P);
      },
      focusSelectedItem: v,
      position: e.position,
      isPositioned: m,
      searchRef: u
    }), (P, B) => (b(), x(o(qa), {
      "as-child": "",
      onMountAutoFocus: B[6] || (B[6] = ie(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: B[7] || (B[7] = (D) => {
        var k;
        n("closeAutoFocus", D), !D.defaultPrevented && ((k = o(l).triggerElement.value) == null || k.focus({ preventScroll: !0 }), D.preventDefault());
      })
    }, {
      default: h(() => [
        Y(o(gt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: B[2] || (B[2] = ie(() => {
          }, ["prevent"])),
          onDismiss: B[3] || (B[3] = (D) => o(l).onOpenChange(!1)),
          onEscapeKeyDown: B[4] || (B[4] = (D) => n("escapeKeyDown", D)),
          onPointerDownOutside: B[5] || (B[5] = (D) => n("pointerDownOutside", D))
        }, {
          default: h(() => [
            (b(), x(qe(
              P.position === "popper" ? Op : Ap
            ), M({ ...P.$attrs, ...o(E) }, {
              id: o(l).contentId,
              ref: (D) => {
                r.value = o(Ie)(D);
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
              onContextmenu: B[0] || (B[0] = ie(() => {
              }, ["prevent"])),
              onPlaced: B[1] || (B[1] = (D) => m.value = !0),
              onKeydown: $
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
}), Vp = /* @__PURE__ */ w({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(a) {
    return xs(a.context), (e, n) => C(e.$slots, "default");
  }
}), Fp = { key: 1 }, Ly = /* @__PURE__ */ w({
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
    const e = a, l = _e(e, t), s = Ct(), r = T();
    oe(() => {
      r.value = new DocumentFragment();
    });
    const i = T(), u = I(() => e.forceMount || s.open.value);
    return (d, p) => {
      var c;
      return u.value ? (b(), x(o(Pe), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: !0
      }, {
        default: h(() => [
          Y(Mp, H(U({ ...o(l), ...d.$attrs })), {
            default: h(() => [
              C(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = i.value) != null && c.present) && r.value ? (b(), ce("div", Fp, [
        (b(), x(Gt, { to: r.value }, [
          Y(Vp, { context: o(s) }, {
            default: h(() => [
              C(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : pe("", !0);
    };
  }
}), Ny = /* @__PURE__ */ w({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a, e = Ct(), n = wt();
    return (l, s) => o(e).open.value && o(n).position === "popper" ? (b(), x(o(ea), H(M({ key: 0 }, t)), {
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), zy = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(A), M({ "aria-hidden": "" }, t), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Es, Lp] = Q("SelectItem"), Ky = /* @__PURE__ */ w({
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
      var v;
      return ((v = n.modelValue) == null ? void 0 : v.value) === t.value;
    }), u = T(!1), d = T(t.textValue ?? ""), p = ve(void 0, "radix-vue-select-item-text");
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
      var _;
      await se(), !(v.defaultPrevented || ((_ = l.searchRef) == null ? void 0 : _.value) !== "" && v.key === " ") && (Tp.includes(v.key) && c(), v.key === " " && v.preventDefault());
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
    }), Lp({
      value: t.value,
      disabled: e,
      textId: p,
      isSelected: i,
      onItemTextChange: (v) => {
        d.value = ((d.value || (v == null ? void 0 : v.textContent)) ?? "").trim();
      }
    }), (v, S) => (b(), x(o(A), {
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
      onFocus: S[0] || (S[0] = (_) => u.value = !0),
      onBlur: S[1] || (S[1] = (_) => u.value = !1),
      onPointerup: c,
      onPointerdown: S[2] || (S[2] = (_) => {
        _.currentTarget.focus({ preventScroll: !0 });
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
}), Hy = /* @__PURE__ */ w({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Es();
    return (n, l) => o(e).isSelected.value ? (b(), x(o(A), M({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), [Np, zp] = Q("SelectGroup"), Wy = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ve(void 0, "radix-vue-select-group");
    return zp({ id: e }), (n, l) => (b(), x(o(A), M({ role: "group" }, t, { "aria-labelledby": o(e) }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), jy = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = Np({ id: "" });
    return (n, l) => (b(), x(o(A), M(t, {
      id: o(e).id
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Uy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Ct(), n = wt(la), l = $p(), s = Es(), { forwardRef: r, currentElement: i } = R(), u = I(() => {
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
    }), kn(() => {
      l.onNativeOptionRemove(u.value);
    }), (d, p) => (b(), ce(we, null, [
      Y(o(A), M({
        id: o(s).textId,
        ref: o(r)
      }, { ...t, ...d.$attrs }), {
        default: h(() => [
          C(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      o(s).isSelected.value && o(e).valueElement.value && !o(e).valueElementHasChildren.value ? (b(), x(Gt, {
        key: 0,
        to: o(e).valueElement.value
      }, [
        C(d.$slots, "default")
      ], 8, ["to"])) : pe("", !0)
    ], 64));
  }
}), Gy = /* @__PURE__ */ w({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = wt(la), n = e.position === "item-aligned" ? Do() : void 0, { forwardRef: l, currentElement: s } = R();
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
            const _ = S + f, $ = Math.min(m, _), y = _ - $;
            c.value.style.height = `${$}px`, c.value.style.bottom === "0px" && (d.scrollTop = y > 0 ? y : 0, c.value.style.justifyContent = "flex-end");
          }
        }
      }
      r.value = d.scrollTop;
    }
    return (u, d) => (b(), ce(we, null, [
      Y(o(A), M({
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
      }, 16),
      Y(o(A), {
        as: "style",
        nonce: u.nonce
      }, {
        default: h(() => [
          me(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Ps = /* @__PURE__ */ w({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(a, { emit: t }) {
    const e = t, { injectCollection: n } = Ve(), l = n(), s = wt(la), r = T(null);
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
    return kn(() => i()), (p, c) => {
      var f;
      return b(), x(o(A), M({
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
}), qy = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = wt(la), e = t.position === "item-aligned" ? Do() : void 0, { forwardRef: n, currentElement: l } = R(), s = T(!1);
    return ye((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          s.value = p.scrollTop > 0;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), r(() => p.removeEventListener("scroll", d));
      }
    }), ee(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (b(), x(Ps, {
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
}), Yy = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = wt(la), e = t.position === "item-aligned" ? Do() : void 0, { forwardRef: n, currentElement: l } = R(), s = T(!1);
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
    }), ee(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (b(), x(Ps, {
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
}), Xy = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = R(), n = Ct(), l = Ha();
    return cl(() => {
      var r;
      const s = !!Ua((r = l == null ? void 0 : l.default) == null ? void 0 : r.call(l)).length;
      n.onValueElementHasChildrenChange(s);
    }), oe(() => {
      n.valueElement = e;
    }), (s, r) => (b(), x(o(A), {
      ref: o(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: h(() => {
        var i;
        return [
          o(Ss)((i = o(n).modelValue) == null ? void 0 : i.value) ? (b(), ce(we, { key: 0 }, [
            me(De(s.placeholder), 1)
          ], 64)) : C(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Zy = /* @__PURE__ */ w({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return (t, e) => (b(), x(o(A), {
      "aria-hidden": "",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: h(() => [
        C(t.$slots, "default", {}, () => [
          me("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ds = /* @__PURE__ */ w({
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
    return (i, u) => (b(), x(o(A), M({
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
}), Kp = /* @__PURE__ */ w({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(Ds, H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Hp(a = [], t, e) {
  const n = [...a];
  return n[e] = t, n.sort((l, s) => l - s);
}
function $s(a, t, e) {
  const s = 100 / (e - t) * (a - t);
  return jt(s, 0, 100);
}
function Wp(a, t) {
  return t > 2 ? `Value ${a + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][a] : void 0;
}
function jp(a, t) {
  if (a.length === 1)
    return 0;
  const e = a.map((l) => Math.abs(l - t)), n = Math.min(...e);
  return e.indexOf(n);
}
function Up(a, t, e) {
  const n = a / 2, s = $o([0, 50], [0, n]);
  return (n - s(t) * e) * e;
}
function Gp(a) {
  return a.slice(0, -1).map((t, e) => a[e + 1] - t);
}
function qp(a, t) {
  if (t > 0) {
    const e = Gp(a);
    return Math.min(...e) >= t;
  }
  return !0;
}
function $o(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + n * (e - a[0]);
  };
}
function Yp(a) {
  return (String(a).split(".")[1] || "").length;
}
function Xp(a, t) {
  const e = 10 ** t;
  return Math.round(a * e) / e;
}
const Bs = ["PageUp", "PageDown"], Is = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ts = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Rs, As] = Q(["SliderVertical", "SliderHorizontal"]), Os = /* @__PURE__ */ w({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = on();
    return (s, r) => (b(), x(o(A), M({ "data-slider-impl": "" }, e, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : o(Bs).concat(o(Is)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
}), Zp = /* @__PURE__ */ w({
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
      const g = p.value || d.value.getBoundingClientRect(), v = [0, g.width], S = c.value ? [s.value, l.value] : [l.value, s.value], _ = $o(v, S);
      return p.value = g, _(m - g.left);
    }
    return As({
      startEdge: c.value ? "left" : "right",
      endEdge: c.value ? "right" : "left",
      direction: c.value ? 1 : -1,
      size: "width"
    }), (m, g) => (b(), x(Os, {
      ref: o(u),
      dir: o(r),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
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
        const S = c.value ? "from-left" : "from-right", _ = o(Ts)[S].includes(v.key);
        n("stepKeyDown", v, _ ? -1 : 1);
      }),
      onEndKeyDown: g[4] || (g[4] = (v) => n("endKeyDown", v)),
      onHomeKeyDown: g[5] || (g[5] = (v) => n("homeKeyDown", v))
    }, {
      default: h(() => [
        C(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), Jp = /* @__PURE__ */ w({
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
      const m = d.value || u.value.getBoundingClientRect(), g = [0, m.height], v = p.value ? [l.value, s.value] : [s.value, l.value], S = $o(g, v);
      return d.value = m, S(f - m.top);
    }
    return As({
      startEdge: p.value ? "bottom" : "top",
      endEdge: p.value ? "top" : "bottom",
      size: "height",
      direction: p.value ? 1 : -1
    }), (f, m) => (b(), x(Os, {
      ref: o(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
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
        const v = p.value ? "from-bottom" : "from-top", S = o(Ts)[v].includes(g.key);
        n("stepKeyDown", g, S ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: m[5] || (m[5] = (g) => n("homeKeyDown", g))
    }, {
      default: h(() => [
        C(f.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Qp = ["value", "name", "disabled", "step"], [on, ef] = Q("SliderRoot"), Jy = /* @__PURE__ */ w({
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
    const e = a, n = t, { min: l, max: s, step: r, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: p } = ne(e), c = Ce(p), { forwardRef: f, currentElement: m } = R(), g = Qe(m);
    Yt();
    const v = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), S = T(0), _ = T(v.value);
    function $(D) {
      const k = jp(v.value, D);
      P(D, k);
    }
    function y(D) {
      P(D, S.value);
    }
    function E() {
      const D = _.value[S.value];
      v.value[S.value] !== D && n("valueCommit", mr(v.value));
    }
    function P(D, k, { commit: V } = { commit: !1 }) {
      var X;
      const O = Yp(r.value), F = Xp(Math.round((D - l.value) / r.value) * r.value + l.value, O), K = jt(F, l.value, s.value), W = Hp(v.value, K, k);
      if (qp(W, i.value * r.value)) {
        S.value = W.indexOf(K);
        const N = String(W) !== String(v.value);
        N && V && n("valueCommit", W), N && ((X = B.value[S.value]) == null || X.focus(), v.value = W);
      }
    }
    const B = T([]);
    return ef({
      modelValue: v,
      valueIndexToChangeRef: S,
      thumbElements: B,
      orientation: u,
      min: l,
      max: s,
      disabled: d
    }), (D, k) => (b(), ce(we, null, [
      Y(o(Xt), null, {
        default: h(() => [
          (b(), x(qe(o(u) === "horizontal" ? Zp : Jp), M(D.$attrs, {
            ref: o(f),
            "as-child": D.asChild,
            as: D.as,
            min: o(l),
            max: o(s),
            dir: o(c),
            inverted: D.inverted,
            "aria-disabled": o(d),
            "data-disabled": o(d) ? "" : void 0,
            onPointerdown: k[0] || (k[0] = () => {
              o(d) || (_.value = o(v));
            }),
            onSlideStart: k[1] || (k[1] = (V) => !o(d) && $(V)),
            onSlideMove: k[2] || (k[2] = (V) => !o(d) && y(V)),
            onSlideEnd: k[3] || (k[3] = (V) => !o(d) && E()),
            onHomeKeyDown: k[4] || (k[4] = (V) => !o(d) && P(o(l), 0, { commit: !0 })),
            onEndKeyDown: k[5] || (k[5] = (V) => !o(d) && P(o(s), o(v).length - 1, { commit: !0 })),
            onStepKeyDown: k[6] || (k[6] = (V, O) => {
              if (!o(d)) {
                const W = o(Bs).includes(V.key) || V.shiftKey && o(Is).includes(V.key) ? 10 : 1, X = S.value, N = o(v)[X], L = o(r) * W * O;
                P(N + L, X, { commit: !0 });
              }
            })
          }), {
            default: h(() => [
              C(D.$slots, "default", { modelValue: o(v) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      o(g) ? (b(!0), ce(we, { key: 0 }, ya(o(v), (V, O) => (b(), ce("input", {
        key: O,
        value: V,
        type: "number",
        style: { display: "none" },
        name: D.name ? D.name + (o(v).length > 1 ? "[]" : "") : void 0,
        disabled: o(d),
        step: o(r)
      }, null, 8, Qp))), 128)) : pe("", !0)
    ], 64));
  }
}), tf = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = on(), n = Rs(), { forwardRef: l, currentElement: s } = R(), r = I(() => {
      var m, g;
      return (g = (m = e.modelValue) == null ? void 0 : m.value) == null ? void 0 : g[t.index];
    }), i = I(() => r.value === void 0 ? 0 : $s(r.value, e.min.value ?? 0, e.max.value ?? 100)), u = I(() => {
      var m, g;
      return Wp(t.index, ((g = (m = e.modelValue) == null ? void 0 : m.value) == null ? void 0 : g.length) ?? 0);
    }), d = Tl(s), p = I(() => d[n.size].value), c = I(() => p.value ? Up(p.value, i.value, n.direction) : 0), f = ja();
    return oe(() => {
      e.thumbElements.value.push(s.value);
    }), Te(() => {
      const m = e.thumbElements.value.findIndex((g) => g === s.value) ?? -1;
      e.thumbElements.value.splice(m, 1);
    }), (m, g) => (b(), x(o(Zt), null, {
      default: h(() => [
        Y(o(A), M(m.$attrs, {
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
}), Qy = /* @__PURE__ */ w({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { getItems: e } = Jt(), { forwardRef: n, currentElement: l } = R(), s = I(() => l.value ? e().findIndex((r) => r.ref === l.value) : -1);
    return (r, i) => (b(), x(tf, M({ ref: o(n) }, t, { index: s.value }), {
      default: h(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), eg = /* @__PURE__ */ w({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = on();
    return R(), (e, n) => (b(), x(o(A), {
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
}), tg = /* @__PURE__ */ w({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = on(), e = Rs();
    R();
    const n = I(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (u) => $s(u, t.min.value, t.max.value)
      );
    }), l = I(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = I(() => 100 - Math.max(...n.value));
    return (r, i) => (b(), x(o(A), {
      "data-disabled": o(t).disabled.value ? "" : void 0,
      "data-orientation": o(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: ke({
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
let Tn = null, St = null;
function af(a, t) {
  if (t) {
    const e = (t & Ns) !== 0, n = (t & zs) !== 0, l = (t & Ks) !== 0, s = (t & Hs) !== 0;
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
function nf() {
  St !== null && (document.head.removeChild(St), Tn = null, St = null);
}
function _n(a, t) {
  const e = af(a, t);
  Tn !== e && (Tn = e, St === null && (St = document.createElement("style"), document.head.appendChild(St)), St.innerHTML = `*{cursor: ${e}!important;}`);
}
function of({
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
function ks(a) {
  return a.type === "keydown";
}
function Ms(a) {
  return a.type.startsWith("mouse");
}
function Vs(a) {
  return a.type.startsWith("touch");
}
function ln(a) {
  if (Ms(a))
    return {
      x: a.clientX,
      y: a.clientY
    };
  if (Vs(a)) {
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
function Fs(a, t) {
  const e = a === "horizontal", { x: n, y: l } = ln(t);
  return e ? n : l;
}
function lf(a, t, e) {
  return a.x < t.x + t.width && a.x + a.width > t.x && a.y < t.y + t.height && a.y + a.height > t.y;
}
function de(a, t = "Assertion failed!") {
  if (!a)
    throw console.error(t), new Error(t);
}
function sf(a, t) {
  if (a === t)
    throw new Error("Cannot compare node with itself");
  const e = {
    a: Qo(a),
    b: Qo(t)
  };
  let n;
  for (; e.a.at(-1) === e.b.at(-1); )
    a = e.a.pop(), t = e.b.pop(), n = a;
  de(n);
  const l = {
    a: Jo(Zo(e.a)),
    b: Jo(Zo(e.b))
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
const rf = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function uf(a) {
  const t = getComputedStyle(Ls(a)).display;
  return t === "flex" || t === "inline-flex";
}
function df(a) {
  const t = getComputedStyle(a);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || uf(a)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || rf.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Zo(a) {
  let t = a.length;
  for (; t--; ) {
    const e = a[t];
    if (de(e), df(e))
      return e;
  }
  return null;
}
function Jo(a) {
  return a && Number(getComputedStyle(a).zIndex) || 0;
}
function Qo(a) {
  const t = [];
  for (; a; )
    t.push(a), a = Ls(a);
  return t;
}
function Ls(a) {
  var t;
  return ((t = a.parentNode) == null ? void 0 : t.host) || a.parentNode;
}
const Ns = 1, zs = 2, Ks = 4, Hs = 8;
function cf() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
const pf = cf() === "coarse", vt = [];
let sn = !1;
const ct = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), va = /* @__PURE__ */ new Set();
function ff(a, t, e, n, l) {
  const { ownerDocument: s } = t, r = {
    direction: e,
    element: t,
    hitAreaMargins: n,
    setResizeHandlerState: l
  }, i = ct.get(s) ?? 0;
  return ct.set(s, i + 1), va.add(r), Na(), function() {
    rn.delete(a), va.delete(r);
    const d = ct.get(s) ?? 1;
    ct.set(s, d - 1), Na(), d === 1 && ct.delete(s);
  };
}
function Aa(a) {
  const { target: t } = a, { x: e, y: n } = ln(a);
  sn = !0, Bo({ target: t, x: e, y: n }), Na(), vt.length > 0 && (Io("down", a), a.preventDefault());
}
function it(a) {
  const { x: t, y: e } = ln(a);
  if (!sn) {
    const { target: n } = a;
    Bo({ target: n, x: t, y: e });
  }
  Io("move", a), Ws(), vt.length > 0 && a.preventDefault();
}
function ut(a) {
  const { target: t } = a, { x: e, y: n } = ln(a);
  rn.clear(), sn = !1, vt.length > 0 && a.preventDefault(), Io("up", a), Bo({ target: t, x: e, y: n }), Ws(), Na();
}
function Bo({
  target: a,
  x: t,
  y: e
}) {
  vt.splice(0);
  let n = null;
  a instanceof HTMLElement && (n = a), va.forEach((l) => {
    const { element: s, hitAreaMargins: r } = l, i = s.getBoundingClientRect(), { bottom: u, left: d, right: p, top: c } = i, f = pf ? r.coarse : r.fine;
    if (t >= d - f && t <= p + f && e >= c - f && e <= u + f) {
      if (n !== null && s !== n && !s.contains(n) && !n.contains(s) && sf(n, s) > 0) {
        let g = n, v = !1;
        for (; g && !g.contains(s); ) {
          if (lf(
            g.getBoundingClientRect(),
            i
          )) {
            v = !0;
            break;
          }
          g = g.parentElement;
        }
        if (v)
          return;
      }
      vt.push(l);
    }
  });
}
function xn(a, t) {
  rn.set(a, t);
}
function Ws() {
  let a = !1, t = !1;
  vt.forEach((n) => {
    const { direction: l } = n;
    l === "horizontal" ? a = !0 : t = !0;
  });
  let e = 0;
  rn.forEach((n) => {
    e |= n;
  }), a && t ? _n("intersection", e) : a ? _n("horizontal", e) : t ? _n("vertical", e) : nf();
}
function Na() {
  ct.forEach((a, t) => {
    const { body: e } = t;
    e.removeEventListener("contextmenu", ut), e.removeEventListener("mousedown", Aa), e.removeEventListener("mouseleave", it), e.removeEventListener("mousemove", it), e.removeEventListener("touchmove", it), e.removeEventListener("touchstart", Aa);
  }), window.removeEventListener("mouseup", ut), window.removeEventListener("touchcancel", ut), window.removeEventListener("touchend", ut), va.size > 0 && (sn ? (vt.length > 0 && ct.forEach((a, t) => {
    const { body: e } = t;
    a > 0 && (e.addEventListener("contextmenu", ut), e.addEventListener("mouseleave", it), e.addEventListener("mousemove", it), e.addEventListener("touchmove", it, {
      passive: !1
    }));
  }), window.addEventListener("mouseup", ut), window.addEventListener("touchcancel", ut), window.addEventListener("touchend", ut)) : ct.forEach((a, t) => {
    const { body: e } = t;
    a > 0 && (e.addEventListener("mousedown", Aa), e.addEventListener("mousemove", it), e.addEventListener("touchmove", it, {
      passive: !1
    }), e.addEventListener("touchstart", Aa));
  }));
}
function Io(a, t) {
  va.forEach((e) => {
    const { setResizeHandlerState: n } = e, l = vt.includes(e);
    n(a, l, t);
  });
}
const js = 10;
function ma(a, t, e = js) {
  a = Number.parseFloat(a.toFixed(e)), t = Number.parseFloat(t.toFixed(e));
  const n = a - t;
  return n === 0 ? 0 : n > 0 ? 1 : -1;
}
function Le(a, t, e) {
  return ma(a, t, e) === 0;
}
function zt({
  panelConstraints: a,
  panelIndex: t,
  size: e
}) {
  const n = a[t];
  de(n != null);
  const { collapsedSize: l = 0, collapsible: s, maxSize: r = 100, minSize: i = 0 } = n;
  if (ma(e, i) < 0)
    if (s) {
      const u = (l + i) / 2;
      ma(e, u) < 0 ? e = l : e = i;
    } else
      e = i;
  return e = Math.min(r, e), e = Number.parseFloat(e.toFixed(js)), e;
}
function Oa(a, t) {
  if (a.length !== t.length)
    return !1;
  for (let e = 0; e < a.length; e++)
    if (a[e] !== t[e])
      return !1;
  return !0;
}
function ia({
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
      const p = a < 0 ? i : r, c = e[p];
      if (de(c), c.collapsible) {
        const f = t[p];
        de(f != null);
        const m = e[p];
        de(m);
        const { collapsedSize: g = 0, minSize: v = 0 } = m;
        if (Le(f, g)) {
          const S = v - f;
          ma(S, Math.abs(a)) > 0 && (a = a < 0 ? 0 - S : S);
        }
      }
    }
    {
      const p = a < 0 ? r : i, c = e[p];
      de(c);
      const { collapsible: f } = c;
      if (f) {
        const m = t[p];
        de(m != null);
        const g = e[p];
        de(g);
        const { collapsedSize: v = 0, minSize: S = 0 } = g;
        if (Le(m, S)) {
          const _ = m - v;
          ma(_, Math.abs(a)) > 0 && (a = a < 0 ? 0 - _ : _);
        }
      }
    }
  }
  {
    const p = a < 0 ? 1 : -1;
    let c = a < 0 ? i : r, f = 0;
    for (; ; ) {
      const g = t[c];
      de(g != null);
      const S = zt({
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
      de(m != null);
      const g = m - f, v = zt({
        panelConstraints: e,
        panelIndex: c,
        size: g
      });
      if (!Le(m, v) && (u += m - v, s[c] = v, u.toPrecision(3).localeCompare(Math.abs(a).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      a < 0 ? c-- : c++;
    }
  }
  if (Le(u, 0))
    return t;
  {
    const p = a < 0 ? i : r, c = t[p];
    de(c != null);
    const f = c + u, m = zt({
      panelConstraints: e,
      panelIndex: p,
      size: f
    });
    if (s[p] = m, !Le(m, f)) {
      let g = f - m, S = a < 0 ? i : r;
      for (; S >= 0 && S < e.length; ) {
        const _ = s[S];
        de(_ != null);
        const $ = _ + g, y = zt({
          panelConstraints: e,
          panelIndex: S,
          size: $
        });
        if (Le(_, y) || (g -= y - _, s[S] = y), Le(g, 0))
          break;
        a > 0 ? S-- : S++;
      }
    }
  }
  const d = s.reduce((p, c) => c + p, 0);
  return Le(d, 100) ? s : t;
}
function Us(a, t = document) {
  var n;
  if (!ga)
    return null;
  if (t instanceof HTMLElement && ((n = t == null ? void 0 : t.dataset) == null ? void 0 : n.panelGroupId) === a)
    return t;
  const e = t.querySelector(
    `[data-panel-group][data-panel-group-id="${a}"]`
  );
  return e || null;
}
function un(a, t = document) {
  if (!ga)
    return null;
  const e = t.querySelector(`[data-panel-resize-handle-id="${a}"]`);
  return e || null;
}
function Gs(a, t, e = document) {
  return ga ? ha(a, e).findIndex(
    (s) => s.getAttribute("data-panel-resize-handle-id") === t
  ) ?? null : null;
}
function ha(a, t = document) {
  return ga ? Array.from(
    t.querySelectorAll(
      `[data-panel-resize-handle-id][data-panel-group-id="${a}"]`
    )
  ) : [];
}
function vf(a, t, e, n = document) {
  var d, p;
  const l = un(t, n), s = ha(a, n), r = l ? s.indexOf(l) : -1, i = ((d = e[r]) == null ? void 0 : d.id) ?? null, u = ((p = e[r + 1]) == null ? void 0 : p.id) ?? null;
  return [i, u];
}
function mf(a, t, e, n, l) {
  const s = e === "horizontal", r = un(t, l);
  de(r);
  const i = r.getAttribute("data-panel-group-id");
  de(i);
  const { initialCursorPosition: u } = n, d = Fs(e, a), p = Us(i, l);
  de(p);
  const c = p.getBoundingClientRect(), f = s ? c.width : c.height;
  return (d - u) / f * 100;
}
function hf(a, t, e, n, l, s) {
  if (ks(a)) {
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
    return n == null ? 0 : mf(
      a,
      t,
      e,
      n,
      s
    );
}
function yf({
  layout: a,
  panelsArray: t,
  pivotIndices: e
}) {
  let n = 0, l = 100, s = 0, r = 0;
  const i = e[0];
  de(i != null), t.forEach((c, f) => {
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
function gf({
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
function ra(a, t, e) {
  t.forEach((n, l) => {
    const s = a[l];
    de(s);
    const { callbacks: r, constraints: i, id: u } = s, { collapsedSize: d = 0, collapsible: p } = i, c = e[u];
    if (c == null || n !== c) {
      e[u] = n;
      const { onCollapse: f, onExpand: m, onResize: g } = r;
      g && g(n, c), p && (f || m) && (m && (c == null || c === d) && n !== d && m(), f && (c == null || c !== d) && n === d && f());
    }
  });
}
function bf(a, t = 10) {
  let e = null;
  return (...l) => {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      a(...l);
    }, t);
  };
}
function qs(a, t, e) {
  const n = Gs(
    a,
    t,
    e
  );
  return n != null ? [n, n + 1] : [-1, -1];
}
function Cf({
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
    const i = zt({
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
      const i = r + l, u = zt({
        panelConstraints: t,
        panelIndex: s,
        size: i
      });
      if (r !== u && (l -= u - r, e[s] = u, Le(l, 0)))
        break;
    }
  return e;
}
function el(a) {
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
function Ys(a) {
  return `radix-vue:${a}`;
}
function Xs(a) {
  return a.map((t) => {
    const { constraints: e, id: n, idIsFromProps: l, order: s } = t;
    return l ? n : s ? `${s}:${JSON.stringify(e)}` : JSON.stringify(e);
  }).sort((t, e) => t.localeCompare(e)).join(",");
}
function Zs(a, t) {
  try {
    const e = Ys(a), n = t.getItem(e);
    if (n) {
      const l = JSON.parse(n);
      if (typeof l == "object" && l != null)
        return l;
    }
  } catch {
  }
  return null;
}
function wf(a, t, e) {
  const n = Zs(a, e) ?? {}, l = Xs(t);
  return n[l] ?? null;
}
function _f(a, t, e, n, l) {
  const s = Ys(a), r = Xs(t), i = Zs(a, l) ?? {};
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
function xf({
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
    const u = ha(
      t,
      i
    );
    for (let d = 0; d < n.length - 1; d++) {
      const { valueMax: p, valueMin: c, valueNow: f } = yf({
        layout: e.value,
        panelsArray: n,
        pivotIndices: [d, d + 1]
      }), m = u[d];
      if (m != null) {
        const g = n[d];
        de(g), m.setAttribute("aria-controls", g.id), m.setAttribute(
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
    de(u);
    const { panelDataArray: d } = u, p = Us(t, i);
    de(p != null, `No group found for id "${t}"`);
    const c = ha(t, i);
    de(c);
    const f = c.map((m) => {
      const g = m.getAttribute("data-panel-resize-handle-id");
      de(g);
      const [v, S] = vf(
        t,
        g,
        d,
        i
      );
      if (v == null || S == null)
        return () => {
        };
      const _ = ($) => {
        if (!$.defaultPrevented)
          switch ($.key) {
            case "Enter": {
              $.preventDefault();
              const y = d.findIndex(
                (E) => E.id === v
              );
              if (y >= 0) {
                const E = d[y];
                de(E);
                const P = e.value[y], {
                  collapsedSize: B = 0,
                  collapsible: D,
                  minSize: k = 0
                } = E.constraints;
                if (P != null && D) {
                  const V = ia({
                    delta: Le(P, B) ? k - B : B - P,
                    layout: e.value,
                    panelConstraints: d.map(
                      (O) => O.constraints
                    ),
                    pivotIndices: qs(
                      t,
                      g,
                      i
                    ),
                    trigger: "keyboard"
                  });
                  e.value !== V && s(V);
                }
              }
              break;
            }
          }
      };
      return m.addEventListener("keydown", _), () => {
        m.removeEventListener("keydown", _);
      };
    });
    r(() => {
      f.forEach((m) => m());
    });
  });
}
const Sf = 100, ua = {
  getItem: (a) => (el(ua), ua.getItem(a)),
  setItem: (a, t) => {
    el(ua), ua.setItem(a, t);
  }
}, [Js, Ef] = Q("PanelGroup"), ag = /* @__PURE__ */ w({
  __name: "SplitterGroup",
  props: {
    id: {},
    autoSaveId: { default: null },
    direction: {},
    keyboardResizeBy: { default: 10 },
    storage: { default: () => ua },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["layout"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = {}, s = ve(e.id, "radix-vue-splitter-group"), r = Ce(), { forwardRef: i, currentElement: u } = R(), d = T(null), p = T([]), c = T({}), f = T(/* @__PURE__ */ new Map()), m = T(0), g = I(() => ({
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
    xf({
      eagerValuesRef: v,
      groupId: s,
      layout: p,
      panelDataArray: v.value.panelDataArray,
      setLayout: S,
      panelGroupElement: u
    }), ye(() => {
      const { panelDataArray: L } = v.value, { autoSaveId: j } = e;
      if (j) {
        if (p.value.length === 0 || p.value.length !== L.length)
          return;
        let z = l[j];
        z || (z = bf(
          _f,
          Sf
        ), l[j] = z);
        const J = [...L], G = new Map(
          f.value
        );
        z(
          j,
          J,
          G,
          p.value,
          e.storage
        );
      }
    });
    function _(L, j) {
      const { panelDataArray: z } = v.value, J = X(z, L);
      return of({
        defaultSize: j,
        dragState: d.value,
        layout: p.value,
        panelData: z,
        panelIndex: J
      });
    }
    function $(L) {
      const { panelDataArray: j } = v.value;
      j.push(L), j.sort((z, J) => {
        const G = z.order, Z = J.order;
        return G == null && Z == null ? 0 : G == null ? -1 : Z == null ? 1 : G - Z;
      }), v.value.panelDataArrayChanged = !0;
    }
    ee(() => v.value.panelDataArrayChanged, () => {
      if (v.value.panelDataArrayChanged) {
        v.value.panelDataArrayChanged = !1;
        const { autoSaveId: L, storage: j } = g.value, { layout: z, panelDataArray: J } = v.value;
        let G = null;
        if (L) {
          const te = wf(L, J, j);
          te && (f.value = new Map(
            Object.entries(te.expandToSizes)
          ), G = te.layout);
        }
        G === null && (G = gf({
          panelDataArray: J
        }));
        const Z = Cf({
          layout: G,
          panelConstraints: J.map(
            (te) => te.constraints
          )
        });
        Or(z, Z) || (S(Z), v.value.layout = Z, n("layout", Z), ra(
          J,
          Z,
          c.value
        ));
      }
    });
    function y(L) {
      return function(z) {
        z.preventDefault();
        const J = u.value;
        if (!J)
          return () => null;
        const { direction: G, dragState: Z, id: te, keyboardResizeBy: fe } = g.value, { layout: q, panelDataArray: le } = v.value, { initialLayout: he } = Z ?? {}, xe = qs(
          te,
          L,
          J
        );
        let ge = hf(
          z,
          L,
          G,
          Z,
          fe,
          J
        );
        if (ge === 0)
          return;
        const $e = G === "horizontal";
        r.value === "rtl" && $e && (ge = -ge);
        const ue = le.map((He) => He.constraints), Se = ia({
          delta: ge,
          layout: he ?? q,
          panelConstraints: ue,
          pivotIndices: xe,
          trigger: ks(z) ? "keyboard" : "mouse-or-touch"
        }), Fe = !Oa(q, Se);
        (Ms(z) || Vs(z)) && m.value !== ge && (m.value = ge, Fe ? xn(L, 0) : $e ? xn(
          L,
          ge < 0 ? Ns : zs
        ) : xn(
          L,
          ge < 0 ? Ks : Hs
        )), Fe && (S(Se), v.value.layout = Se, n("layout", Se), ra(
          le,
          Se,
          c.value
        ));
      };
    }
    function E(L, j) {
      const { layout: z, panelDataArray: J } = v.value, G = J.map((he) => he.constraints), { panelSize: Z, pivotIndices: te } = N(
        J,
        L,
        z
      );
      de(Z != null);
      const q = X(J, L) === J.length - 1 ? Z - j : j - Z, le = ia({
        delta: q,
        layout: z,
        panelConstraints: G,
        pivotIndices: te,
        trigger: "imperative-api"
      });
      Oa(z, le) || (S(le), v.value.layout = le, n("layout", le), ra(
        J,
        le,
        c.value
      ));
    }
    function P(L, j) {
      const { layout: z, panelDataArray: J } = v.value, {
        collapsedSize: G = 0,
        collapsible: Z
      } = j, {
        collapsedSize: te = 0,
        collapsible: fe,
        maxSize: q = 100,
        minSize: le = 0
      } = L.constraints, { panelSize: he } = N(
        J,
        L,
        z
      );
      he !== null && (Z && fe && he === G ? G !== te && E(L, te) : he < le ? E(L, le) : he > q && E(L, q));
    }
    function B(L, j) {
      const { direction: z } = g.value, { layout: J } = v.value;
      if (!u.value)
        return;
      const G = un(
        L,
        u.value
      );
      de(G);
      const Z = Fs(
        z,
        j
      );
      d.value = {
        dragHandleId: L,
        dragHandleRect: G.getBoundingClientRect(),
        initialCursorPosition: Z,
        initialLayout: J
      };
    }
    function D() {
      d.value = null;
    }
    function k(L) {
      const { panelDataArray: j } = v.value, z = X(j, L);
      z >= 0 && (j.splice(z, 1), delete c.value[L.id], v.value.panelDataArrayChanged = !0);
    }
    function V(L) {
      const { layout: j, panelDataArray: z } = v.value;
      if (L.constraints.collapsible) {
        const J = z.map(
          (fe) => fe.constraints
        ), {
          collapsedSize: G = 0,
          panelSize: Z,
          pivotIndices: te
        } = N(z, L, j);
        if (de(
          Z != null,
          `Panel size not found for panel "${L.id}"`
        ), Z !== G) {
          f.value.set(L.id, Z);
          const q = X(z, L) === z.length - 1 ? Z - G : G - Z, le = ia({
            delta: q,
            layout: j,
            panelConstraints: J,
            pivotIndices: te,
            trigger: "imperative-api"
          });
          Oa(j, le) || (S(le), v.value.layout = le, n("layout", le), ra(
            z,
            le,
            c.value
          ));
        }
      }
    }
    function O(L) {
      const { layout: j, panelDataArray: z } = v.value;
      if (L.constraints.collapsible) {
        const J = z.map(
          (q) => q.constraints
        ), {
          collapsedSize: G = 0,
          panelSize: Z,
          minSize: te = 0,
          pivotIndices: fe
        } = N(z, L, j);
        if (Z === G) {
          const q = f.value.get(
            L.id
          ), le = q != null && q >= te ? q : te, xe = X(z, L) === z.length - 1 ? Z - le : le - Z, ge = ia({
            delta: xe,
            layout: j,
            panelConstraints: J,
            pivotIndices: fe,
            trigger: "imperative-api"
          });
          Oa(j, ge) || (S(ge), v.value.layout = ge, n("layout", ge), ra(
            z,
            ge,
            c.value
          ));
        }
      }
    }
    function F(L) {
      const { layout: j, panelDataArray: z } = v.value, { panelSize: J } = N(z, L, j);
      return de(
        J != null,
        `Panel size not found for panel "${L.id}"`
      ), J;
    }
    function K(L) {
      const { layout: j, panelDataArray: z } = v.value, {
        collapsedSize: J = 0,
        collapsible: G,
        panelSize: Z
      } = N(z, L, j);
      return G === !0 && Z === J;
    }
    function W(L) {
      const { layout: j, panelDataArray: z } = v.value, {
        collapsedSize: J = 0,
        collapsible: G,
        panelSize: Z
      } = N(z, L, j);
      return de(
        Z != null,
        `Panel size not found for panel "${L.id}"`
      ), !G || Z > J;
    }
    Ef({
      direction: e.direction,
      dragState: d.value,
      groupId: s,
      reevaluatePanelConstraints: P,
      registerPanel: $,
      registerResizeHandle: y,
      resizePanel: E,
      startDragging: B,
      stopDragging: D,
      unregisterPanel: k,
      panelGroupElement: u,
      collapsePanel: V,
      expandPanel: O,
      isPanelCollapsed: K,
      isPanelExpanded: W,
      getPanelSize: F,
      getPanelStyle: _
    });
    function X(L, j) {
      return L.findIndex(
        (z) => z === j || z.id === j.id
      );
    }
    function N(L, j, z) {
      const J = X(L, j), Z = J === L.length - 1 ? [J - 1, J] : [J, J + 1], te = z[J];
      return {
        ...j.constraints,
        panelSize: te,
        pivotIndices: Z
      };
    }
    return (L, j) => (b(), x(o(A), {
      ref: o(i),
      style: ke({
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
}), ng = /* @__PURE__ */ w({
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
    const n = a, l = e, s = Js();
    if (s === null)
      throw new Error(
        "SplitterPanel components must be rendered within a SplitterGroup container"
      );
    const { collapsePanel: r, expandPanel: i, getPanelSize: u, getPanelStyle: d, isPanelCollapsed: p, resizePanel: c, groupId: f, reevaluatePanelConstraints: m, registerPanel: g, unregisterPanel: v } = s, S = ve(n.id, "radix-vue-splitter-panel"), _ = I(() => ({
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
    ee(() => _.value.constraints, (P, B) => {
      (P.collapsedSize !== B.collapsedSize || P.collapsible !== B.collapsible || P.maxSize !== B.maxSize || P.minSize !== B.minSize) && m(_.value, P);
    }, { deep: !0 }), oe(() => {
      const P = _.value;
      g(P), Te(() => {
        v(P);
      });
    });
    const $ = I(() => d(_.value, n.defaultSize)), y = I(() => p(_.value)), E = I(() => !y.value);
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
        c(_.value, P);
      },
      /** Returns `true` if the panel is currently collapsed */
      isCollapsed: y,
      /** Returns `true` if the panel is currently not collapsed */
      isExpanded: E
    }), (P, B) => (b(), x(o(A), {
      id: o(S),
      style: ke($.value),
      "data-panel": "",
      "data-panel-collapsible": P.collapsible || void 0,
      "data-panel-group-id": o(f),
      "data-panel-id": o(S),
      "data-panel-size": Number.parseFloat(`${$.value.flexGrow}`).toFixed(1),
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
function Pf({
  disabled: a,
  handleId: t,
  resizeHandler: e,
  panelGroupElement: n
}) {
  ye((l) => {
    const s = n.value;
    if (a.value || e.value === null || s === null)
      return;
    const r = un(t, s);
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
            de(p);
            const c = ha(
              p,
              s
            ), f = Gs(
              p,
              t,
              s
            );
            de(f !== null);
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
const og = /* @__PURE__ */ w({
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
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), { disabled: r } = ne(e), i = Js();
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
    } = i, g = ve(e.id, "radix-vue-splitter-resize-handle"), v = T("inactive"), S = T(!1), _ = T(null);
    return ee(r, () => {
      ga && (r.value ? _.value = null : _.value = p(g));
    }, { immediate: !0 }), ye(($) => {
      var P, B;
      if (r.value || _.value === null)
        return;
      const y = s.value;
      if (!y)
        return;
      de(y);
      const E = (D, k, V) => {
        var O;
        if (k)
          switch (D) {
            case "down": {
              v.value = "drag", c(g, V), n("dragging", !0);
              break;
            }
            case "move": {
              v.value !== "drag" && (v.value = "hover"), (O = _.value) == null || O.call(_, V);
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
      $(ff(
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
    }), Pf({
      disabled: r,
      resizeHandler: _,
      handleId: g,
      panelGroupElement: m
    }), ($, y) => (b(), x(o(A), {
      id: o(g),
      ref: o(l),
      style: {
        touchAction: "none",
        userSelect: "none"
      },
      role: "separator",
      "data-resize-handle": "",
      tabindex: $.tabindex,
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
        C($.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "tabindex", "data-state", "data-disabled", "data-orientation", "data-panel-group-id", "data-resize-handle-active", "data-resize-handle-state", "data-panel-resize-handle-enabled", "data-panel-resize-handle-id"]));
  }
}), Df = {
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
}, [To, $f] = Q("StepperRoot"), lg = /* @__PURE__ */ w({
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
    const e = a, n = t, { dir: l, orientation: s, linear: r } = ne(e), i = Ce(l);
    R();
    const u = T(/* @__PURE__ */ new Set()), d = T(/* @__PURE__ */ new Set()), p = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    });
    return $f({
      modelValue: p,
      changeModelValue: (c) => {
        p.value = c;
      },
      orientation: s,
      dir: i,
      linear: r,
      stepperItems: u,
      totalStepperItems: d
    }), (c, f) => (b(), x(o(A), {
      role: "group",
      "aria-label": "progress",
      as: c.as,
      "as-child": c.asChild,
      "data-linear": o(r) ? "" : void 0,
      "data-orientation": c.orientation
    }, {
      default: h(() => [
        C(c.$slots, "default", { modelValue: o(p) }),
        Ge("div", Df, " Step " + De(o(p)) + " of " + De(d.value.size), 1)
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-linear", "data-orientation"]));
  }
}), [Ea, Bf] = Q("StepperItem"), sg = /* @__PURE__ */ w({
  __name: "StepperItem",
  props: {
    step: {},
    disabled: { type: Boolean, default: !1 },
    completed: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { disabled: e, step: n, completed: l } = ne(t), { forwardRef: s } = R(), r = To(), i = ve(void 0, "radix-vue-stepper-item-title"), u = ve(void 0, "radix-vue-stepper-item-description"), d = I(() => l.value ? "completed" : r.modelValue.value === n.value ? "active" : r.modelValue.value > n.value ? "completed" : "inactive"), p = I(() => e.value ? !1 : r.linear.value ? n.value <= r.modelValue.value || n.value === r.modelValue.value + 1 : !0);
    return Bf({
      titleId: i,
      descriptionId: u,
      state: d,
      disabled: e,
      step: n,
      isFocusable: p
    }), (c, f) => (b(), x(o(A), {
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
}), rg = /* @__PURE__ */ w({
  __name: "StepperTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = To(), e = Ea(), n = et(), l = I(() => Array.from(t.stepperItems.value));
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
      d.preventDefault(), !e.disabled.value && ((d.key === n.ENTER || d.key === n.SPACE) && !d.ctrlKey && !d.shiftKey && t.changeModelValue(e.step.value), [n.ARROW_LEFT, n.ARROW_RIGHT, n.ARROW_UP, n.ARROW_DOWN].includes(d.key) && It(d, document.activeElement, void 0, {
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
    }), (d, p) => (b(), x(o(A), {
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
}), ig = /* @__PURE__ */ w({
  __name: "StepperDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    R();
    const e = Ea();
    return (n, l) => (b(), x(o(A), M(t, {
      id: o(e).descriptionId
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ug = /* @__PURE__ */ w({
  __name: "StepperTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h4" }
  },
  setup(a) {
    const t = a, e = Ea();
    return R(), (n, l) => (b(), x(o(A), M(t, {
      id: o(e).titleId
    }), {
      default: h(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), dg = /* @__PURE__ */ w({
  __name: "StepperIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Ea();
    return R(), (n, l) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          me(" Step " + De(o(e).step.value), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), cg = /* @__PURE__ */ w({
  __name: "StepperSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = To(), n = Ea();
    return R(), (l, s) => (b(), x(o(Kp), M(t, {
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
}), If = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Tf, Rf] = Q("SwitchRoot"), pg = /* @__PURE__ */ w({
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
    return Rf({
      checked: s,
      toggleCheck: r,
      disabled: l
    }), (c, f) => (b(), ce(we, null, [
      Y(o(A), M(c.$attrs, {
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
      o(d) ? (b(), ce("input", {
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
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, If)) : pe("", !0)
    ], 64));
  }
}), fg = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = Tf();
    return R(), (e, n) => {
      var l;
      return b(), x(o(A), {
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
}), [dn, Af] = Q("TabsRoot"), vg = /* @__PURE__ */ w({
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
    const e = a, n = t, { orientation: l, dir: s } = ne(e), r = Ce(s);
    R();
    const i = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), u = T();
    return Af({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: l,
      dir: r,
      activationMode: e.activationMode,
      baseId: ve(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, p) => (b(), x(o(A), {
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
}), mg = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { loop: e } = ne(t), { forwardRef: n, currentElement: l } = R(), s = dn();
    return s.tabsList = l, (r, i) => (b(), x(o(kt), {
      "as-child": "",
      orientation: o(s).orientation.value,
      dir: o(s).dir.value,
      loop: o(e)
    }, {
      default: h(() => [
        Y(o(A), {
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
function Qs(a, t) {
  return `${a}-trigger-${t}`;
}
function er(a, t) {
  return `${a}-content-${t}`;
}
const hg = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = dn(), l = I(() => Qs(n.baseId, t.value)), s = I(() => er(n.baseId, t.value)), r = I(() => t.value === n.modelValue.value), i = T(r.value);
    return oe(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (b(), x(o(Pe), {
      present: r.value,
      "force-mount": ""
    }, {
      default: h(({ present: p }) => [
        Y(o(A), {
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
          style: ke({
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
}), yg = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R(), n = dn(), l = I(() => Qs(n.baseId, t.value)), s = I(() => er(n.baseId, t.value)), r = I(() => t.value === n.modelValue.value);
    return (i, u) => (b(), x(o(Mt), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: h(() => [
        Y(o(A), {
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
}), gg = /* @__PURE__ */ w({
  __name: "TabsIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = dn();
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
    return (r, i) => typeof l.value.size == "number" ? (b(), x(o(A), M({ key: 0 }, t, {
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
}), [cn, Of] = Q("TagsInputRoot"), bg = /* @__PURE__ */ w({
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
    const e = a, n = t, { addOnPaste: l, disabled: s, delimiter: r, max: i, id: u, dir: d, addOnBlur: p, addOnTab: c } = ne(e), f = Ce(d), m = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: !0,
      deep: !0
    }), { forwardRef: g, currentElement: v } = R(), { focused: S } = fi(v), _ = Qe(v), { getItems: $ } = Yt(), y = T(), E = T(!1);
    return Of({
      modelValue: m,
      onAddValue: (P) => {
        const B = m.value.length > 0 && typeof m.value[0] == "object", D = m.value.length > 0 && typeof e.defaultValue[0] == "object";
        if ((B || D) && typeof e.convertValue != "function")
          throw new Error("You must provide a `convertValue` function when using objects as values.");
        const k = e.convertValue ? e.convertValue(P) : P;
        if (m.value.length >= i.value && i.value)
          return n("invalid", k), !1;
        if (e.duplicate)
          return m.value.push(k), !0;
        if (m.value.includes(k))
          E.value = !0;
        else
          return m.value.push(k), !0;
        return n("invalid", k), !1;
      },
      onRemoveValue: (P) => {
        P !== -1 && m.value.splice(P, 1);
      },
      onInputKeydown: (P) => {
        const B = P.target, D = $().map((V) => V.ref).filter((V) => V.dataset.disabled !== "");
        if (!D.length)
          return;
        const k = D.at(-1);
        switch (P.key) {
          case "Delete":
          case "Backspace": {
            if (B.selectionStart !== 0 || B.selectionEnd !== 0)
              break;
            if (y.value) {
              const V = D.findIndex((O) => O === y.value);
              m.value.splice(V, 1), y.value = y.value === k ? D.at(V - 1) : D.at(V + 1), P.preventDefault();
            } else P.key === "Backspace" && (y.value = k, P.preventDefault());
            break;
          }
          case "Home":
          case "End":
          case "ArrowRight":
          case "ArrowLeft": {
            const V = P.key === "ArrowRight" && f.value === "ltr" || P.key === "ArrowLeft" && f.value === "rtl", O = !V;
            if (B.selectionStart !== 0 || B.selectionEnd !== 0)
              break;
            if (O && !y.value)
              y.value = k, P.preventDefault();
            else if (V && k && y.value === k)
              y.value = void 0, P.preventDefault();
            else if (y.value) {
              const F = It(P, y.value, void 0, {
                itemsArray: D,
                loop: !1,
                dir: f.value
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
      addOnBlur: p,
      addOnTab: c,
      dir: f,
      disabled: s,
      delimiter: r,
      max: i,
      id: u,
      displayValue: e.displayValue
    }), (P, B) => (b(), x(o(Xt), null, {
      default: h(() => [
        Y(o(A), {
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
            o(_) && P.name ? (b(), x(o(to), {
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
}), Cg = /* @__PURE__ */ w({
  __name: "TagsInputInput",
  props: {
    placeholder: {},
    autoFocus: { type: Boolean },
    maxLength: {},
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = cn(), { forwardRef: n, currentElement: l } = R();
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
      return b(), x(o(A), {
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
}), [tr, kf] = Q("TagsInputItem"), wg = /* @__PURE__ */ w({
  __name: "TagsInputItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { value: e } = ne(t), n = cn(), { forwardRef: l, currentElement: s } = R(), r = I(() => n.selectedElement.value === s.value), i = I(() => t.disabled || n.disabled.value), u = kf({
      value: e,
      isSelected: r,
      disabled: i,
      textId: "",
      displayValue: I(() => n.displayValue(e.value))
    });
    return (d, p) => (b(), x(o(Zt), null, {
      default: h(() => [
        Y(o(A), {
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
}), _g = /* @__PURE__ */ w({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = tr();
    return R(), e.textId || (e.textId = ve(void 0, "radix-vue-tags-input-item-text")), (n, l) => (b(), x(o(A), M(t, {
      id: o(e).textId
    }), {
      default: h(() => [
        C(n.$slots, "default", {}, () => [
          me(De(o(e).displayValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), xg = /* @__PURE__ */ w({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = cn(), n = tr(), l = I(() => {
      var r;
      return ((r = n.disabled) == null ? void 0 : r.value) || e.disabled.value;
    });
    function s() {
      if (l.value)
        return;
      const r = e.modelValue.value.findIndex((i) => i === n.value.value);
      e.onRemoveValue(r);
    }
    return (r, i) => (b(), x(o(A), M({ tabindex: "-1" }, t, {
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
}), Sg = /* @__PURE__ */ w({
  __name: "TagsInputClear",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    R();
    const e = cn();
    function n() {
      e.disabled.value || (e.modelValue.value = []);
    }
    return (l, s) => (b(), x(o(A), M(t, {
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
}), [pn, Mf] = Q("ToastProvider"), Eg = /* @__PURE__ */ w({
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
    return Mf({
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
}), Vf = "toast.swipeStart", Ff = "toast.swipeMove", Lf = "toast.swipeCancel", Nf = "toast.swipeEnd", Rn = "toast.viewportPause", An = "toast.viewportResume";
function ka(a, t, e) {
  const n = e.originalEvent.currentTarget, l = new CustomEvent(a, {
    bubbles: !1,
    cancelable: !0,
    detail: e
  });
  t && n.addEventListener(a, t, { once: !0 }), n.dispatchEvent(l);
}
function tl(a, t, e = 0) {
  const n = Math.abs(a.x), l = Math.abs(a.y), s = n > l;
  return t === "left" || t === "right" ? s && n > e : !s && l > e;
}
function zf(a) {
  return a.nodeType === a.ELEMENT_NODE;
}
function ar(a) {
  const t = [];
  return Array.from(a.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), zf(n)) {
      const l = n.ariaHidden || n.hidden || n.style.display === "none", s = n.dataset.radixToastAnnounceExclude === "";
      if (!l)
        if (s) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...ar(n));
    }
  }), t;
}
const Kf = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(a) {
    const t = pn(), e = ri(1e3), n = T(!1);
    return Pl(() => {
      n.value = !0;
    }), (l, s) => o(e) || n.value ? (b(), x(o(ta), { key: 0 }, {
      default: h(() => [
        me(De(o(t).label.value) + " ", 1),
        C(l.$slots, "default")
      ]),
      _: 3
    })) : pe("", !0);
  }
}), [Hf, Wf] = Q("ToastRoot"), jf = /* @__PURE__ */ w({
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
    const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = pn(), i = T(null), u = T(null), d = I(() => e.duration || r.duration.value), p = T(0), c = T(d.value), f = T(0), m = T(d.value), g = Pl(() => {
      const $ = (/* @__PURE__ */ new Date()).getTime() - p.value;
      m.value = Math.max(c.value - $, 0);
    }, { fpsLimit: 60 });
    function v($) {
      !$ || $ === Number.POSITIVE_INFINITY || (window.clearTimeout(f.value), p.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(S, $));
    }
    function S() {
      var y, E;
      ((y = s.value) == null ? void 0 : y.contains(document.activeElement)) && ((E = r.viewport.value) == null || E.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const _ = I(() => s.value ? ar(s.value) : null);
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const $ = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error($);
    }
    return ye(($) => {
      const y = r.viewport.value;
      if (y) {
        const E = () => {
          v(c.value), g.resume(), n("resume");
        }, P = () => {
          const B = (/* @__PURE__ */ new Date()).getTime() - p.value;
          c.value = c.value - B, window.clearTimeout(f.value), g.pause(), n("pause");
        };
        return y.addEventListener(Rn, P), y.addEventListener(An, E), () => {
          y.removeEventListener(Rn, P), y.removeEventListener(An, E);
        };
      }
    }), ee(() => [e.open, d.value], () => {
      c.value = d.value, e.open && !r.isClosePausedRef.value && v(d.value);
    }, { immediate: !0 }), Hn("Escape", ($) => {
      n("escapeKeyDown", $), $.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, S());
    }), oe(() => {
      r.onToastAdd();
    }), Te(() => {
      r.onToastRemove();
    }), Wf({ onClose: S }), ($, y) => (b(), ce(we, null, [
      _.value ? (b(), x(Kf, {
        key: 0,
        role: "status",
        "aria-live": $.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: h(() => [
          me(De(_.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : pe("", !0),
      (b(), x(Gt, {
        to: o(r).viewport.value
      }, [
        Y(o(A), M({
          ref: o(l),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, $.$attrs, {
          as: $.as,
          "as-child": $.asChild,
          "data-state": $.open ? "open" : "closed",
          "data-swipe-direction": o(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: y[0] || (y[0] = ie((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: y[1] || (y[1] = (E) => {
            if (!i.value) return;
            const P = E.clientX - i.value.x, B = E.clientY - i.value.y, D = !!u.value, k = ["left", "right"].includes(o(r).swipeDirection.value), V = ["left", "up"].includes(o(r).swipeDirection.value) ? Math.min : Math.max, O = k ? V(0, P) : 0, F = k ? 0 : V(0, B), K = E.pointerType === "touch" ? 10 : 2, W = { x: O, y: F }, X = { originalEvent: E, delta: W };
            D ? (u.value = W, o(ka)(o(Ff), (N) => n("swipeMove", N), X)) : o(tl)(W, o(r).swipeDirection.value, K) ? (u.value = W, o(ka)(o(Vf), (N) => n("swipeStart", N), X), E.target.setPointerCapture(E.pointerId)) : (Math.abs(P) > K || Math.abs(B) > K) && (i.value = null);
          }),
          onPointerup: y[2] || (y[2] = (E) => {
            const P = u.value, B = E.target;
            if (B.hasPointerCapture(E.pointerId) && B.releasePointerCapture(E.pointerId), u.value = null, i.value = null, P) {
              const D = E.currentTarget, k = { originalEvent: E, delta: P };
              o(tl)(P, o(r).swipeDirection.value, o(r).swipeThreshold.value) ? o(ka)(o(Nf), (V) => n("swipeEnd", V), k) : o(ka)(o(Lf), (V) => n("swipeCancel", V), k), D == null || D.addEventListener("click", (V) => V.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: h(() => [
            C($.$slots, "default", { remaining: m.value })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"]))
    ], 64));
  }
}), Pg = /* @__PURE__ */ w({
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
      default: h(() => [
        Y(jf, M({
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
}), nr = /* @__PURE__ */ w({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    return (t, e) => (b(), x(o(A), {
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
}), Uf = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Hf(), { forwardRef: n } = R();
    return (l, s) => (b(), x(nr, { "as-child": "" }, {
      default: h(() => [
        Y(o(A), M(t, {
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
}), Dg = /* @__PURE__ */ w({
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
    return (n, l) => n.altText ? (b(), x(nr, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: h(() => [
        Y(Uf, {
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
}), al = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(a, { emit: t }) {
    const e = t, n = pn();
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
      default: h(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }));
  }
}), $g = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(a) {
    const t = a, { hotkey: e, label: n } = ne(t), { forwardRef: l, currentElement: s } = R(), { createCollection: r } = Ve(), i = r(s), u = pn(), d = I(() => u.toastCount.value > 0), p = T(), c = T(), f = I(() => e.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Hn(e.value, () => {
      s.value.focus();
    }), oe(() => {
      u.onViewportChange(s.value);
    }), ye((g) => {
      const v = s.value;
      if (d.value && v) {
        const S = () => {
          if (!u.isClosePausedRef.value) {
            const P = new CustomEvent(Rn);
            v.dispatchEvent(P), u.isClosePausedRef.value = !0;
          }
        }, _ = () => {
          if (u.isClosePausedRef.value) {
            const P = new CustomEvent(An);
            v.dispatchEvent(P), u.isClosePausedRef.value = !1;
          }
        }, $ = (P) => {
          !v.contains(P.relatedTarget) && _();
        }, y = () => {
          v.contains(document.activeElement) || _();
        }, E = (P) => {
          var k, V, O;
          const B = P.altKey || P.ctrlKey || P.metaKey;
          if (P.key === "Tab" && !B) {
            const F = document.activeElement, K = P.shiftKey;
            if (P.target === v && K) {
              (k = p.value) == null || k.focus();
              return;
            }
            const N = m({ tabbingDirection: K ? "backwards" : "forwards" }), L = N.findIndex((j) => j === F);
            Ma(N.slice(L + 1)) ? P.preventDefault() : K ? (V = p.value) == null || V.focus() : (O = c.value) == null || O.focus();
          }
        };
        v.addEventListener("focusin", S), v.addEventListener("focusout", $), v.addEventListener("pointermove", S), v.addEventListener("pointerleave", y), v.addEventListener("keydown", E), window.addEventListener("blur", S), window.addEventListener("focus", _), g(() => {
          v.removeEventListener("focusin", S), v.removeEventListener("focusout", $), v.removeEventListener("pointermove", S), v.removeEventListener("pointerleave", y), v.removeEventListener("keydown", E), window.removeEventListener("blur", S), window.removeEventListener("focus", _);
        });
      }
    });
    function m({ tabbingDirection: g }) {
      const S = i.value.map((_) => {
        const $ = [_, ...Jn(_)];
        return g === "forwards" ? $ : $.reverse();
      });
      return (g === "forwards" ? S.reverse() : S).flat();
    }
    return (g, v) => (b(), x(o(Qi), {
      role: "region",
      "aria-label": typeof o(n) == "string" ? o(n).replace("{hotkey}", f.value) : o(n)(f.value),
      tabindex: "-1",
      style: ke({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: h(() => [
        d.value ? (b(), x(al, {
          key: 0,
          ref: (S) => {
            p.value = o(Ie)(S);
          },
          onFocusFromOutsideViewport: v[0] || (v[0] = () => {
            const S = m({
              tabbingDirection: "forwards"
            });
            o(Ma)(S);
          })
        }, null, 512)) : pe("", !0),
        Y(o(A), M({
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
        d.value ? (b(), x(al, {
          key: 1,
          ref: (S) => {
            c.value = o(Ie)(S);
          },
          onFocusFromOutsideViewport: v[1] || (v[1] = () => {
            const S = m({
              tabbingDirection: "backwards"
            });
            o(Ma)(S);
          })
        }, null, 512)) : pe("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Bg = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ig = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(A), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gf = /* @__PURE__ */ w({
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
    return (i, u) => (b(), x(o(A), {
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
}), [qf, Yf] = Q("ToggleGroupRoot"), Xf = /* @__PURE__ */ w({
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
    const e = a, n = t, { loop: l, rovingFocus: s, disabled: r, dir: i } = ne(e), u = Ce(i), { forwardRef: d } = R(), { modelValue: p, changeModelValue: c, isSingle: f } = kl(e, n);
    return Yf({
      isSingle: f,
      modelValue: p,
      changeModelValue: c,
      dir: u,
      orientation: e.orientation,
      loop: l,
      rovingFocus: s,
      disabled: r
    }), (m, g) => (b(), x(qe(o(s) ? o(kt) : o(A)), {
      "as-child": "",
      orientation: o(s) ? m.orientation : void 0,
      dir: o(u),
      loop: o(s) ? o(l) : void 0
    }, {
      default: h(() => [
        Y(o(A), {
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
}), Zf = /* @__PURE__ */ w({
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
    const t = a, e = qf(), n = I(() => {
      var i;
      return ((i = e.disabled) == null ? void 0 : i.value) || t.disabled;
    }), l = I(() => {
      var i;
      return (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), s = I(() => {
      var i;
      return e.isSingle.value ? e.modelValue.value === t.value : (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), { forwardRef: r } = R();
    return (i, u) => (b(), x(qe(o(e).rovingFocus.value ? o(Mt) : o(A)), {
      "as-child": "",
      focusable: !n.value,
      active: l.value
    }, {
      default: h(() => [
        Y(o(Gf), M(t, {
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
}), [or, Jf] = Q("ToolbarRoot"), Tg = /* @__PURE__ */ w({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { orientation: e, dir: n } = ne(t), l = Ce(n), { forwardRef: s } = R();
    return Jf({ orientation: e, dir: l }), (r, i) => (b(), x(o(kt), {
      "as-child": "",
      orientation: o(e),
      dir: o(l),
      loop: r.loop
    }, {
      default: h(() => [
        Y(o(A), {
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
}), Qf = /* @__PURE__ */ w({
  __name: "ToolbarButton",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), x(o(Mt), {
      "as-child": "",
      focusable: !n.disabled
    }, {
      default: h(() => [
        Y(o(A), M({
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
}), Rg = /* @__PURE__ */ w({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), x(o(Mt), {
      "as-child": "",
      focusable: ""
    }, {
      default: h(() => [
        Y(o(A), M(t, {
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
}), Ag = /* @__PURE__ */ w({
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
    const e = a, n = t, l = or(), s = Re(n);
    return R(), (r, i) => (b(), x(o(Xf), M({ ...e, ...o(s) }, {
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
}), Og = /* @__PURE__ */ w({
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
    return (n, l) => (b(), x(Qf, { "as-child": "" }, {
      default: h(() => [
        Y(o(Zf), M(t, { ref: o(e) }), {
          default: h(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), kg = /* @__PURE__ */ w({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = or();
    return R(), (n, l) => (b(), x(Ds, {
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
}), lr = "tooltip.open", [Ro, ev] = Q("TooltipProvider"), Mg = /* @__PURE__ */ w({
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
    const u = T(!0), d = T(!1), { start: p, stop: c } = Kn(() => {
      u.value = !0;
    }, n, { immediate: !1 });
    return ev({
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
}), [fn, tv] = Q("TooltipRoot"), Vg = /* @__PURE__ */ w({
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
    const l = Ro(), s = I(() => e.disableHoverableContent ?? l.disableHoverableContent.value), r = I(() => e.disableClosingTrigger ?? l.disableClosingTrigger.value), i = I(() => e.disabled ?? l.disabled.value), u = I(() => e.delayDuration ?? l.delayDuration.value), d = I(() => e.ignoreNonKeyboardFocus ?? l.ignoreNonKeyboardFocus.value), p = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    ee(p, (y) => {
      l.onClose && (y ? (l.onOpen(), document.dispatchEvent(new CustomEvent(lr))) : l.onClose());
    });
    const c = T(!1), f = T(), m = I(() => p.value ? c.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: v } = Kn(() => {
      c.value = !0, p.value = !0;
    }, u, { immediate: !1 });
    function S() {
      v(), c.value = !1, p.value = !0;
    }
    function _() {
      v(), p.value = !1;
    }
    function $() {
      g();
    }
    return tv({
      contentId: "",
      open: p,
      stateAttribute: m,
      trigger: f,
      onTriggerChange(y) {
        f.value = y;
      },
      onTriggerEnter() {
        l.isOpenDelayed.value ? $() : S();
      },
      onTriggerLeave() {
        s.value ? _() : v();
      },
      onOpen: S,
      onClose: _,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (y, E) => (b(), x(o(Rt), null, {
      default: h(() => [
        C(y.$slots, "default", { open: o(p) })
      ]),
      _: 3
    }));
  }
}), Fg = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = fn(), n = Ro();
    e.contentId || (e.contentId = ve(void 0, "radix-vue-tooltip-content"));
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
      var _, $;
      r.value || e.ignoreNonKeyboardFocus.value && !(($ = (_ = S.target).matches) != null && $.call(_, ":focus-visible")) || e.onOpen();
    }
    function g() {
      e.onClose();
    }
    function v() {
      e.disableClosingTrigger.value || e.onClose();
    }
    return (S, _) => (b(), x(o(At), { "as-child": "" }, {
      default: h(() => [
        Y(o(A), M({
          ref: o(l),
          "aria-describedby": o(e).open.value ? o(e).contentId : void 0,
          "data-state": o(e).stateAttribute.value,
          as: S.as,
          "as-child": t.asChild
        }, Fn(u.value)), {
          default: h(() => [
            C(S.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), sr = /* @__PURE__ */ w({
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
    const e = a, n = t, l = fn(), { forwardRef: s } = R(), r = Ha(), i = I(() => {
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
      ze(window, "scroll", (p) => {
        const c = p.target;
        c != null && c.contains(l.trigger.value) && l.onClose();
      }), ze(window, lr, l.onClose);
    }), (p, c) => (b(), x(o(gt), {
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
        Y(o(Dt), M({
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
            Y(o(ta), {
              id: o(l).contentId,
              role: "tooltip"
            }, {
              default: h(() => [
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
}), av = /* @__PURE__ */ w({
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
    const e = Tt(a), { forwardRef: n, currentElement: l } = R(), { trigger: s, onClose: r } = fn(), i = Ro(), { isPointerInTransit: u, onPointerExit: d } = Bl(s, l);
    return i.isPointerInTransitRef = u, d(() => {
      r();
    }), (p, c) => (b(), x(sr, M({ ref: o(n) }, o(e)), {
      default: h(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lg = /* @__PURE__ */ w({
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
    const e = a, n = t, l = fn(), s = _e(e, n), { forwardRef: r } = R();
    return (i, u) => (b(), x(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: h(() => [
        (b(), x(qe(o(l).disableHoverableContent.value ? sr : av), M({ ref: o(r) }, o(s)), {
          default: h(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ng = /* @__PURE__ */ w({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return R(), (e, n) => (b(), x(o(ea), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zg = /* @__PURE__ */ w({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), x(o(yt), H(U(t)), {
      default: h(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Ao(a) {
  return a.reduce((t, e) => (t.push(e), e.children && t.push(...Ao(e.children)), t), []);
}
const [rr, nv] = Q("TreeRoot"), Kg = /* @__PURE__ */ w({
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
    const e = a, n = t, { items: l, multiple: s, disabled: r, propagateSelect: i, dir: u } = ne(e), { handleTypeaheadSearch: d } = wa(), p = Ce(u), c = T(), f = T(!1), m = ca(), g = ae(e, "modelValue", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultValue ?? (s.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: !0
    }), v = ae(e, "expanded", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultExpanded ?? [],
      passive: e.expanded === void 0,
      deep: !0
    }), { onSelectItem: S, handleMultipleReplace: _ } = Oi(g, e), $ = I(() => s.value && Array.isArray(g.value) ? g.value.map((D) => e.getKey(D)) : [e.getKey(g.value ?? {})]);
    function y(D, k = 1, V) {
      return D.reduce((O, F, K) => {
        const W = e.getKey(F), X = v.value.includes(W), N = {
          _id: W,
          value: F,
          index: K,
          level: k,
          parentItem: V,
          hasChildren: !!F.children,
          bind: {
            value: F,
            level: k,
            "aria-setsize": D.length,
            "aria-posinset": K + 1
          }
        };
        return O.push(N), F.children && X && O.push(...y(F.children, k + 1, F)), O;
      }, []);
    }
    const E = I(() => {
      const D = e.items;
      return v.value.map((k) => k), y(D ?? []);
    });
    function P(D) {
      var k;
      if (f.value)
        m.trigger(D);
      else {
        const V = (k = c.value) == null ? void 0 : k.getItems().map((O) => O.ref);
        d(D.key, V);
      }
    }
    function B(D) {
      if (f.value)
        return;
      const k = Xa[D.key];
      se(() => {
        var V;
        _(
          k,
          document.activeElement,
          (V = c.value) == null ? void 0 : V.getItems,
          E.value.map((O) => O.value)
        );
      });
    }
    return nv({
      modelValue: g,
      selectedKeys: $,
      onSelect: (D) => {
        var O;
        const k = (F) => e.getKey(F ?? {}) === e.getKey(D), V = e.multiple && Array.isArray(g.value) ? ((O = g.value) == null ? void 0 : O.findIndex(k)) !== -1 : void 0;
        if (S(D, k), e.propagateSelect && e.multiple && Array.isArray(g.value)) {
          const F = Ao(D.children ?? []);
          V ? g.value = [...g.value].filter((K) => !F.some((W) => e.getKey(K ?? {}) === e.getKey(W))) : g.value = [...g.value, ...F];
        }
      },
      expanded: v,
      onToggle(D) {
        if (!(D != null && D.children))
          return;
        const k = e.getKey(D) ?? D;
        v.value.includes(k) ? v.value = v.value.filter((V) => V !== k) : v.value.push(k);
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
      handleMultipleReplace: _
    }), (D, k) => (b(), x(o(kt), {
      ref_key: "rovingFocusGroupRef",
      ref: c,
      "as-child": "",
      orientation: "vertical",
      dir: o(p)
    }, {
      default: h(() => [
        Y(o(A), {
          role: "tree",
          as: D.as,
          "as-child": D.asChild,
          "aria-multiselectable": o(s) ? !0 : void 0,
          onKeydown: [
            P,
            re(ie(B, ["shift"]), ["up", "down"])
          ]
        }, {
          default: h(() => [
            C(D.$slots, "default", {
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
}), ov = "tree.select", lv = "tree.toggle", Hg = /* @__PURE__ */ w({
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
    const n = a, l = e, s = rr(), { getItems: r } = Jt(), i = I(() => !!n.value.children), u = I(() => {
      const _ = s.getKey(n.value);
      return s.expanded.value.includes(_);
    }), d = I(() => {
      const _ = s.getKey(n.value);
      return s.selectedKeys.value.includes(_);
    }), p = I(() => {
      if (s.propagateSelect.value && d.value && i.value && Array.isArray(s.modelValue.value))
        return !Ao(n.value.children).every(($) => s.modelValue.value.find((y) => s.getKey(y) === s.getKey($)));
    });
    function c(_) {
      if (i.value)
        if (u.value) {
          const $ = r().map((D) => D.ref), y = document.activeElement, E = $.indexOf(y), B = [...$].slice(E).find((D) => Number(D.getAttribute("data-indent")) === n.level + 1);
          B && B.focus();
        } else
          S(_);
    }
    function f(_) {
      if (u.value)
        S(_);
      else {
        const $ = r().map((D) => D.ref), y = document.activeElement, E = $.indexOf(y), B = [...$].slice(0, E).reverse().find((D) => Number(D.getAttribute("data-indent")) === n.level - 1);
        B && B.focus();
      }
    }
    async function m(_) {
      l("select", _), !(_ != null && _.defaultPrevented) && s.onSelect(n.value);
    }
    async function g(_) {
      l("toggle", _), !(_ != null && _.defaultPrevented) && s.onToggle(n.value);
    }
    async function v(_) {
      if (!_)
        return;
      const $ = { originalEvent: _, value: n.value, isExpanded: u.value, isSelected: d.value };
      Wt(ov, m, $);
    }
    async function S(_) {
      if (!_)
        return;
      const $ = { originalEvent: _, value: n.value, isExpanded: u.value, isSelected: d.value };
      Wt(lv, g, $);
    }
    return t({
      isExpanded: u,
      isSelected: d,
      isIndeterminate: p,
      handleToggle: () => s.onToggle(n.value),
      handleSelect: () => s.onSelect(n.value)
    }), (_, $) => (b(), x(o(Mt), {
      "as-child": "",
      value: _.value,
      "allow-shift-key": ""
    }, {
      default: h(() => [
        Y(o(A), M(_.$attrs, {
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
            re(ie(v, ["self", "prevent"]), ["enter", "space"]),
            $[0] || ($[0] = re(ie((y) => o(s).dir.value === "ltr" ? c(y) : f(y), ["prevent"]), ["right"])),
            $[1] || ($[1] = re(ie((y) => o(s).dir.value === "ltr" ? f(y) : c(y), ["prevent"]), ["left"]))
          ],
          onClick: $[2] || ($[2] = ie((y) => {
            v(y), S(y);
          }, ["stop"]))
        }), {
          default: h(() => [
            C(_.$slots, "default", {
              isExpanded: u.value,
              isSelected: d.value,
              isIndeterminate: p.value,
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
}), Wg = /* @__PURE__ */ w({
  __name: "TreeVirtualizer",
  props: {
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a) {
    const t = a, e = Ha(), n = rr(), l = Dl(), { getItems: s } = Jt(), r = $t("", 1e3), i = I(() => {
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
    }), d = ls(
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
      is: Mn(e.default({
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
      const v = Xa[f.key];
      if (["first", "last"].includes(v)) {
        f.preventDefault();
        const _ = v === "first" ? 0 : n.expandedItems.value.length - 1;
        d.value.scrollToIndex(_), requestAnimationFrame(() => {
          const $ = s();
          (v === "first" ? $[0] : $[$.length - 1]).ref.focus();
        });
      } else if (v === "prev" && f.key !== "ArrowUp") {
        const _ = document.activeElement, $ = Number(_.getAttribute("data-index")), y = Number(_.getAttribute("data-indent")), P = n.expandedItems.value.slice(0, $).map((B, D) => ({ ...B, index: D })).reverse().find((B) => B.level === y - 1);
        P && c(P.index);
      } else if (!v && !m) {
        r.value += f.key;
        const _ = Number((S = document.activeElement) == null ? void 0 : S.getAttribute("data-index")), $ = i.value[_].textContent, y = i.value.map((B) => B.textContent), E = qn(y, r.value, $), P = i.value.find((B) => B.textContent === E);
        P && c(P.index);
      }
      se(() => {
        f.shiftKey && v && n.handleMultipleReplace(v, document.activeElement, s, n.expandedItems.value.map((_) => _.value));
      });
    }), (f, m) => (b(), ce("div", {
      "data-radix-vue-virtualizer": "",
      style: ke({
        position: "relative",
        width: "100%",
        height: `${o(d).getTotalSize()}px`
      })
    }, [
      (b(!0), ce(we, null, ya(p.value, ({ is: g, item: v }) => (b(), x(qe(g), {
        key: v.key
      }))), 128))
    ], 4));
  }
}), jg = /* @__PURE__ */ w({
  __name: "Viewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = R();
    return (n, l) => (b(), ce(we, null, [
      Y(o(A), M({ ...n.$attrs, ...t }, {
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
      }, 16),
      Y(o(A), {
        as: "style",
        nonce: n.nonce
      }, {
        default: h(() => [
          me(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
export {
  xv as AIChatAutoScroll,
  Cv as AIChatContent,
  bv as AIChatInput,
  wv as AIChatMessageItem,
  gv as AIChatRoot,
  _v as AIChatSend,
  mv as AccordionContent,
  hv as AccordionHeader,
  vv as AccordionItem,
  fv as AccordionRoot,
  yv as AccordionTrigger,
  Av as AlertDialogAction,
  Iv as AlertDialogCancel,
  $v as AlertDialogContent,
  Rv as AlertDialogDescription,
  Bv as AlertDialogOverlay,
  Dv as AlertDialogPortal,
  Ev as AlertDialogRoot,
  Tv as AlertDialogTitle,
  Pv as AlertDialogTrigger,
  Ov as AspectRatio,
  Vv as AvatarFallback,
  Mv as AvatarImage,
  kv as AvatarRoot,
  Lu as CalendarCell,
  Uu as CalendarCellTrigger,
  Fu as CalendarGrid,
  Wu as CalendarGridBody,
  Hu as CalendarGridHead,
  ju as CalendarGridRow,
  Nu as CalendarHeadCell,
  Mu as CalendarHeader,
  Vu as CalendarHeading,
  zu as CalendarNext,
  Ku as CalendarPrev,
  ku as CalendarRoot,
  Lv as CheckboxIndicator,
  Fv as CheckboxRoot,
  Li as CollapsibleContent,
  Mi as CollapsibleRoot,
  Vi as CollapsibleTrigger,
  Kv as ComboboxAnchor,
  Qv as ComboboxArrow,
  Wv as ComboboxCancel,
  Gv as ComboboxContent,
  qv as ComboboxEmpty,
  jv as ComboboxGroup,
  zv as ComboboxInput,
  Xv as ComboboxItem,
  Zv as ComboboxItemIndicator,
  Uv as ComboboxLabel,
  em as ComboboxPortal,
  Nv as ComboboxRoot,
  Jv as ComboboxSeparator,
  Hv as ComboboxTrigger,
  Yv as ComboboxViewport,
  cv as ConfigProvider,
  lm as ContextMenuArrow,
  um as ContextMenuCheckboxItem,
  om as ContextMenuContent,
  rm as ContextMenuGroup,
  sm as ContextMenuItem,
  dm as ContextMenuItemIndicator,
  cm as ContextMenuLabel,
  nm as ContextMenuPortal,
  pm as ContextMenuRadioGroup,
  fm as ContextMenuRadioItem,
  tm as ContextMenuRoot,
  im as ContextMenuSeparator,
  vm as ContextMenuSub,
  mm as ContextMenuSubContent,
  hm as ContextMenuSubTrigger,
  am as ContextMenuTrigger,
  Wd as DateFieldInput,
  Ad as DateFieldRoot,
  Rm as DatePickerAnchor,
  Am as DatePickerArrow,
  Im as DatePickerCalendar,
  Cm as DatePickerCell,
  Dm as DatePickerCellTrigger,
  Om as DatePickerClose,
  Mm as DatePickerContent,
  Tm as DatePickerField,
  bm as DatePickerGrid,
  Em as DatePickerGridBody,
  Sm as DatePickerGridHead,
  Pm as DatePickerGridRow,
  wm as DatePickerHeadCell,
  ym as DatePickerHeader,
  gm as DatePickerHeading,
  $m as DatePickerInput,
  _m as DatePickerNext,
  xm as DatePickerPrev,
  Bm as DatePickerRoot,
  km as DatePickerTrigger,
  Zd as DateRangeFieldInput,
  Xd as DateRangeFieldRoot,
  Jm as DateRangePickerAnchor,
  Qm as DateRangePickerArrow,
  Xm as DateRangePickerCalendar,
  Nm as DateRangePickerCell,
  Gm as DateRangePickerCellTrigger,
  eh as DateRangePickerClose,
  ah as DateRangePickerContent,
  Zm as DateRangePickerField,
  Lm as DateRangePickerGrid,
  jm as DateRangePickerGridBody,
  Wm as DateRangePickerGridHead,
  Um as DateRangePickerGridRow,
  zm as DateRangePickerHeadCell,
  Vm as DateRangePickerHeader,
  Fm as DateRangePickerHeading,
  qm as DateRangePickerInput,
  Km as DateRangePickerNext,
  Hm as DateRangePickerPrev,
  Ym as DateRangePickerRoot,
  th as DateRangePickerTrigger,
  zl as DialogClose,
  gu as DialogContent,
  _u as DialogDescription,
  Cu as DialogOverlay,
  Sv as DialogPortal,
  Yi as DialogRoot,
  wu as DialogTitle,
  Xi as DialogTrigger,
  rh as DropdownMenuArrow,
  ch as DropdownMenuCheckboxItem,
  sh as DropdownMenuContent,
  uh as DropdownMenuGroup,
  ih as DropdownMenuItem,
  ph as DropdownMenuItemIndicator,
  fh as DropdownMenuLabel,
  lh as DropdownMenuPortal,
  vh as DropdownMenuRadioGroup,
  mh as DropdownMenuRadioItem,
  nh as DropdownMenuRoot,
  dh as DropdownMenuSeparator,
  hh as DropdownMenuSub,
  yh as DropdownMenuSubContent,
  gh as DropdownMenuSubTrigger,
  oh as DropdownMenuTrigger,
  Ch as EditableArea,
  Sh as EditableCancelTrigger,
  Eh as EditableEditTrigger,
  wh as EditableInput,
  _h as EditablePreview,
  bh as EditableRoot,
  xh as EditableSubmitTrigger,
  Ih as HoverCardArrow,
  Bh as HoverCardContent,
  $h as HoverCardPortal,
  Ph as HoverCardRoot,
  Dh as HoverCardTrigger,
  Th as Label,
  Ah as ListboxContent,
  Oh as ListboxFilter,
  Fh as ListboxGroup,
  Lh as ListboxGroupLabel,
  kh as ListboxItem,
  Mh as ListboxItemIndicator,
  Rh as ListboxRoot,
  Vh as ListboxVirtualizer,
  jh as MenubarArrow,
  Yh as MenubarCheckboxItem,
  Wh as MenubarContent,
  Gh as MenubarGroup,
  Uh as MenubarItem,
  Xh as MenubarItemIndicator,
  Zh as MenubarLabel,
  zh as MenubarMenu,
  Hh as MenubarPortal,
  Jh as MenubarRadioGroup,
  Qh as MenubarRadioItem,
  Nh as MenubarRoot,
  qh as MenubarSeparator,
  ey as MenubarSub,
  ty as MenubarSubContent,
  ay as MenubarSubTrigger,
  Kh as MenubarTrigger,
  ly as NavigationMenuContent,
  sy as NavigationMenuIndicator,
  oy as NavigationMenuItem,
  ry as NavigationMenuLink,
  iy as NavigationMenuList,
  ny as NavigationMenuRoot,
  uy as NavigationMenuSub,
  dy as NavigationMenuTrigger,
  cy as NavigationMenuViewport,
  my as NumberFieldDecrement,
  vy as NumberFieldIncrement,
  fy as NumberFieldInput,
  py as NumberFieldRoot,
  yy as PaginationEllipsis,
  gy as PaginationFirst,
  by as PaginationLast,
  Cy as PaginationList,
  wy as PaginationListItem,
  _y as PaginationNext,
  xy as PaginationPrev,
  hy as PaginationRoot,
  Ey as PinInputInput,
  Sy as PinInputRoot,
  gs as PopoverAnchor,
  hs as PopoverArrow,
  ys as PopoverClose,
  ms as PopoverContent,
  fs as PopoverPortal,
  cs as PopoverRoot,
  ps as PopoverTrigger,
  A as Primitive,
  Dy as ProgressIndicator,
  Py as ProgressRoot,
  Iy as RadioGroupIndicator,
  By as RadioGroupItem,
  $y as RadioGroupRoot,
  rp as RangeCalendarCell,
  vp as RangeCalendarCellTrigger,
  sp as RangeCalendarGrid,
  pp as RangeCalendarGridBody,
  cp as RangeCalendarGridHead,
  fp as RangeCalendarGridRow,
  ip as RangeCalendarHeadCell,
  op as RangeCalendarHeader,
  lp as RangeCalendarHeading,
  up as RangeCalendarNext,
  dp as RangeCalendarPrev,
  np as RangeCalendarRoot,
  ky as ScrollAreaCorner,
  Ty as ScrollAreaRoot,
  Ay as ScrollAreaScrollbar,
  Oy as ScrollAreaThumb,
  Ry as ScrollAreaViewport,
  Ny as SelectArrow,
  Ly as SelectContent,
  Wy as SelectGroup,
  Zy as SelectIcon,
  Ky as SelectItem,
  Hy as SelectItemIndicator,
  Uy as SelectItemText,
  jy as SelectLabel,
  Fy as SelectPortal,
  My as SelectRoot,
  Yy as SelectScrollDownButton,
  qy as SelectScrollUpButton,
  zy as SelectSeparator,
  Vy as SelectTrigger,
  Xy as SelectValue,
  Gy as SelectViewport,
  Kp as Separator,
  tg as SliderRange,
  Jy as SliderRoot,
  Qy as SliderThumb,
  eg as SliderTrack,
  Yn as Slot,
  ag as SplitterGroup,
  ng as SplitterPanel,
  og as SplitterResizeHandle,
  ig as StepperDescription,
  dg as StepperIndicator,
  sg as StepperItem,
  lg as StepperRoot,
  cg as StepperSeparator,
  ug as StepperTitle,
  rg as StepperTrigger,
  pg as SwitchRoot,
  fg as SwitchThumb,
  hg as TabsContent,
  gg as TabsIndicator,
  mg as TabsList,
  vg as TabsRoot,
  yg as TabsTrigger,
  Sg as TagsInputClear,
  Cg as TagsInputInput,
  wg as TagsInputItem,
  xg as TagsInputItemDelete,
  _g as TagsInputItemText,
  bg as TagsInputRoot,
  Dg as ToastAction,
  Uf as ToastClose,
  Ig as ToastDescription,
  Eg as ToastProvider,
  Pg as ToastRoot,
  Bg as ToastTitle,
  $g as ToastViewport,
  Gf as Toggle,
  Zf as ToggleGroupItem,
  Xf as ToggleGroupRoot,
  Qf as ToolbarButton,
  Rg as ToolbarLink,
  Tg as ToolbarRoot,
  kg as ToolbarSeparator,
  Ag as ToolbarToggleGroup,
  Og as ToolbarToggleItem,
  Ng as TooltipArrow,
  Lg as TooltipContent,
  zg as TooltipPortal,
  Mg as TooltipProvider,
  Vg as TooltipRoot,
  Fg as TooltipTrigger,
  Hg as TreeItem,
  Kg as TreeRoot,
  Wg as TreeVirtualizer,
  jg as Viewport,
  ta as VisuallyHidden,
  Q as createContext,
  _a as injectAIChatRootContext,
  Gi as provideAIChatRootContext,
  ba as useBodyScrollLock,
  jn as useDateFormatter,
  Re as useEmitAsProps,
  R as useForwardExpose,
  Tt as useForwardProps,
  _e as useForwardPropsEmits,
  ve as useId,
  Rl as useStateMachine,
  pv as withDefault
};
