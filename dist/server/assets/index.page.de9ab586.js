"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("react");
var jsxRuntime = require("react/jsx-runtime");
var index = "";
function Page() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
      children: "Type-Error"
    }), "The React function CounterInc() resides in pages/index/CounterInc.jsx.", /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "The type checking function PRE_CounterInc() is in typeCzechFunctions.js.", /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), 'The CounterInc() button is created in pages/index/index.page.jsx with an incorrect initial string value of "1".', /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("pre", {
      children: '<CounterInc init_count = { "1" } />'
    }), "Which results in \xA0", /* @__PURE__ */ jsxRuntime.jsx("button", {
      type: "botton",
      disabled: true,
      children: "Counter_inc 11111"
    }), '\xA0 when clicked because "1"+"1" = "11".', /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "The CounterInc() button should have been created with a correct initial number value of 1 without any quotes.", /* @__PURE__ */ jsxRuntime.jsx("pre", {
      children: "<CounterInc init_count = { 1 } />"
    }), "Which results in \xA0", /* @__PURE__ */ jsxRuntime.jsx("button", {
      type: "botton",
      disabled: true,
      children: "Counter_inc 8"
    }), "\xA0 when clicked because 7 + 1 = 8.", /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), 'If this program was launched via "npm run prod" then type errors are not checked for nor logged.', /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), 'But if the program was launched via "npm run dev" then both NodeJs and the browser console show type errors.', /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), 'The type error is that a string of "1" is used instead of the proper number of 1 for counting clicks.', /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "Node.js Runtime Type Error", /* @__PURE__ */ jsxRuntime.jsxs("pre", {
      children: ["\xA0MESSAGE Property 'init_count' is indicated to be a 'number', but is inaccurately a 'string' : 1", /* @__PURE__ */ jsxRuntime.jsx("br", {}), '\xA0        Node.js : PRE_CounterInc :{"init_count":"number"}', /* @__PURE__ */ jsxRuntime.jsx("br", {}), "\xA0        CHECKER check_assert()", /* @__PURE__ */ jsxRuntime.jsx("br", {}), "\xA0    ACTUAL TYPE 'string'", /* @__PURE__ */ jsxRuntime.jsx("br", {}), '\xA0         VALUES ""', /* @__PURE__ */ jsxRuntime.jsx("br", {}), "\xA0         ORIGIN", /* @__PURE__ */ jsxRuntime.jsx("br", {})]
    }), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "Broswer Runtime Type Error in Console", /* @__PURE__ */ jsxRuntime.jsxs("pre", {
      children: ["\xA0PRE_CounterInc() PRE-FUNC: Property 'init_count' is indicated to be a 'number', but is inaccurately a 'string' : 1 ", /* @__PURE__ */ jsxRuntime.jsx("br", {}), "\xA0         CHECKER checkParam_typeExtra()", /* @__PURE__ */ jsxRuntime.jsx("br", {}), "\xA0     ACTUAL TYPE ['object','object']", /* @__PURE__ */ jsxRuntime.jsx("br", {}), '\xA0          VALUES {init_count:"1"}, {}', /* @__PURE__ */ jsxRuntime.jsx("br", {}), '\xA0   EXPECTED TYPE [{"init_count":"number"}, "object"]', /* @__PURE__ */ jsxRuntime.jsx("br", {}), "\xA0          ORIGIN CounterInc(Counter_props, _react_1_browser_nodejs, _react_2_only_nodejs)", /* @__PURE__ */ jsxRuntime.jsx("br", {})]
    })]
  });
}
exports.Page = Page;
