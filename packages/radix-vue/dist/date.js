import { parseZonedDateTime as _, parseDateTime as k, parseDate as S, toCalendar as Z, getLocalTimeZone as F, CalendarDateTime as L, ZonedDateTime as E, getDayOfWeek as O, startOfMonth as d, endOfMonth as M, startOfYear as h, endOfYear as N } from "@internationalized/date";
function R(t, n) {
  const e = [];
  for (let r = 0; r < t.length; r += n)
    e.push(t.slice(r, r + n));
  return e;
}
function X(t, n) {
  let e;
  return m(n) ? e = _(t) : w(n) ? e = k(t) : e = S(t), e.calendar !== n.calendar ? Z(e, n.calendar) : e;
}
function $(t, n = F()) {
  return m(t) ? t.toDate() : t.toDate(n);
}
function w(t) {
  return t instanceof L;
}
function m(t) {
  return t instanceof E;
}
function z(t) {
  return w(t) || m(t);
}
function j(t) {
  if (t instanceof Date) {
    const n = t.getFullYear(), e = t.getMonth() + 1;
    return new Date(n, e, 0).getDate();
  } else
    return t.set({ day: 100 }).day;
}
function P(t, n) {
  return t.compare(n) < 0;
}
function W(t, n) {
  return t.compare(n) > 0;
}
function q(t, n) {
  return t.compare(n) <= 0;
}
function G(t, n) {
  return t.compare(n) >= 0;
}
function V(t, n, e) {
  return G(t, n) && q(t, e);
}
function v(t, n, e) {
  return W(t, n) && P(t, e);
}
function H(t, n, e) {
  const r = O(t, e);
  return n > r ? t.subtract({ days: r + 7 - n }) : n === r ? t : t.subtract({ days: r - n });
}
function J(t, n, e) {
  const r = O(t, e), o = n === 0 ? 6 : n - 1;
  return r === o ? t : r > o ? t.add({ days: 7 - r + o }) : t.add({ days: o - r });
}
function b(t, n, e, r) {
  if (e === void 0 && r === void 0)
    return !0;
  let o = t.add({ days: 1 });
  if (r != null && r(o) || e != null && e(o))
    return !1;
  const s = n;
  for (; o.compare(s) < 0; )
    if (o = o.add({ days: 1 }), r != null && r(o) || e != null && e(o))
      return !1;
  return !0;
}
function A(t, n) {
  const e = [];
  let r = t.add({ days: 1 });
  const o = n;
  for (; r.compare(o) < 0; )
    e.push(r), r = r.add({ days: 1 });
  return e;
}
function y(t) {
  const { dateObj: n, weekStartsOn: e, fixedWeeks: r, locale: o } = t, s = j(n), a = Array.from({ length: s }, (D, u) => n.set({ day: u + 1 })), f = d(n), i = M(n), x = H(f, e, o), T = J(i, e, o), l = A(x.subtract({ days: 1 }), f), c = A(i, T.add({ days: 1 })), g = l.length + a.length + c.length;
  if (r && g < 42) {
    const D = 42 - g;
    let u = c[c.length - 1];
    u || (u = M(n));
    const C = Array.from({ length: D }, (K, I) => {
      const Y = I + 1;
      return u.add({ days: Y });
    });
    c.push(...C);
  }
  const p = l.concat(a, c), B = R(p, 7);
  return {
    value: n,
    cells: p,
    rows: B
  };
}
function U(t) {
  return h(t.subtract({ years: t.year - Math.floor(t.year / 10) * 10 }).set({ day: 1, month: 1 }));
}
function tt(t) {
  return N(t.add({ years: Math.ceil((t.year + 1) / 10) * 10 - t.year - 1 }).set({ day: 35, month: 12 }));
}
function nt(t) {
  const { dateObj: n, startIndex: e, endIndex: r } = t, o = Array.from({ length: Math.abs(e ?? 0) + r }, (s, a) => a <= Math.abs(e ?? 0) ? n.subtract({ years: a }).set({ day: 1, month: 1 }) : n.add({ years: a - r }).set({ day: 1, month: 1 }));
  return o.sort((s, a) => s.year - a.year), o;
}
function et(t) {
  const { dateObj: n, numberOfMonths: e = 1, pagedNavigation: r = !1 } = t;
  return e && r ? Array.from({ length: Math.floor(12 / e) }, (a, f) => d(n.set({ month: f * e + 1 }))) : Array.from({ length: 12 }, (s, a) => d(n.set({ month: a + 1 })));
}
function rt(t) {
  const { numberOfMonths: n, dateObj: e, ...r } = t, o = [];
  if (!n || n === 1)
    return o.push(
      y({
        ...r,
        dateObj: e
      })
    ), o;
  o.push(
    y({
      ...r,
      dateObj: e
    })
  );
  for (let s = 1; s < n; s++) {
    const a = e.add({ months: s });
    o.push(
      y({
        ...r,
        dateObj: a
      })
    );
  }
  return o;
}
function ot({ start: t, end: n }) {
  const e = [];
  if (!t || !n)
    return e;
  let r = h(t);
  for (; r.compare(n) <= 0; )
    e.push(r), r = h(r.add({ years: 1 }));
  return e;
}
function at({ start: t, end: n }) {
  const e = [];
  if (!t || !n)
    return e;
  let r = t;
  for (; r.compare(n) <= 0; )
    e.push(r), r = r.add({ days: 1 });
  return e;
}
export {
  b as areAllDaysBetweenValid,
  at as createDateRange,
  nt as createDecade,
  y as createMonth,
  rt as createMonths,
  et as createYear,
  ot as createYearRange,
  tt as endOfDecade,
  A as getDaysBetween,
  j as getDaysInMonth,
  H as getLastFirstDayOfWeek,
  J as getNextLastDayOfWeek,
  z as hasTime,
  W as isAfter,
  G as isAfterOrSame,
  P as isBefore,
  q as isBeforeOrSame,
  v as isBetween,
  V as isBetweenInclusive,
  w as isCalendarDateTime,
  m as isZonedDateTime,
  X as parseStringToDateValue,
  U as startOfDecade,
  $ as toDate
};
