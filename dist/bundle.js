!(function (e, o) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = o(require("lodash")))
    : "function" == typeof define && define.amd
    ? define(["lodash"], o)
    : "object" == typeof exports
    ? (exports.DynamicVirtualList = o(require("lodash")))
    : (e.DynamicVirtualList = o(e._));
})(self, (e) =>
  (() => {
    "use strict";
    var o = {
        607: (o) => {
          o.exports = e;
        },
      },
      r = {};
    function t(e) {
      var n = r[e];
      if (void 0 !== n) return n.exports;
      var u = (r[e] = { exports: {} });
      return o[e](u, u.exports, t), u.exports;
    }
    (t.n = (e) => {
      var o = e && e.__esModule ? () => e.default : () => e;
      return t.d(o, { a: o }), o;
    }),
      (t.d = (e, o) => {
        for (var r in o)
          t.o(o, r) &&
            !t.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: o[r] });
      }),
      (t.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o));
    var n = {};
    return (
      (() => {
        t.d(n, { default: () => u });
        var e = t(607),
          o = t.n(e);
        const r = JSON.parse(
          '[{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":0,"word":"Zero"}]'
        );
        function u() {
          console.log(o()), console.log(r);
        }
      })(),
      n.default
    );
  })()
);
