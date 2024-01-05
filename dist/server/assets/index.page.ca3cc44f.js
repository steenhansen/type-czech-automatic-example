"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var React = require("react");
var jsxRuntime = require("react/jsx-runtime");
let the_exports;
if (typeof window !== "undefined") {
  the_exports = window;
} else if (typeof exports !== "undefined") {
  the_exports = exports;
} else {
  the_exports = {};
}
(function(the_exports2) {
  the_exports2.TypeCzech = function() {
    the_exports2.type_czech = {
      linkUp: (nop) => nop,
      isActive: (x) => false,
      isPruned: (y) => true,
      _from: "type-czech-import-prod"
    };
    return the_exports2.type_czech;
  };
})(the_exports);
var TypeCzech_obj = the_exports;
const { TypeCzech } = TypeCzech_obj;
const type_czech = TypeCzech(["CONSOLE-COUNT", "LOG-ERRORS"]);
function PRE_JSX_CounterInc(Counter_props, _react_1_browser_nodejs, _react_2_only_nodejs) {
  const function_params = [Counter_props, _react_1_browser_nodejs, _react_2_only_nodejs];
  if (type_czech.isNode()) {
    const short_node_signature = { init_count: "number" };
    const bad_require_nodejs = type_czech.checkParam_typeExtra(Counter_props, short_node_signature);
    if (bad_require_nodejs !== "")
      return type_czech.check_assert(bad_require_nodejs + " \n 			 Node.js : PRE_JSX_CounterInc :{ init_count: 'number' } ");
  } else {
    const browser_signature = [{ init_count: "number" }, "object"];
    return type_czech.checkParam_typeExtra(function_params, browser_signature);
  }
}
CounterInc = type_czech.linkUp(CounterInc, PRE_JSX_CounterInc);
const typeCzech_on_off = type_czech.isPruned() ? "Type-Czech is OFF" : "Type-Czech is ON";
function CounterInc({
  init_count
}) {
  const [cur_count, setCount] = React.useState(init_count);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsxs("button", {
      type: "button",
      onClick: () => setCount((cur_count2) => cur_count2 + 1),
      children: ["Counter_inc ", cur_count]
    }), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      id: "type-czech-toggle",
      children: ["(", typeCzech_on_off, ")"]
    })]
  });
}
function Page() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx(CounterInc, {
      init_count: 1
    }), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "React SSR component CounterInc() expects numbers, not strings.", /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "With string to number type error :", /* @__PURE__ */ jsxRuntime.jsx("br", {}), '<CounterInc init_count = { "1" } />            results in ', /* @__PURE__ */ jsxRuntime.jsx("button", {
      type: "botton",
      children: "Counter_inc 11111"
    }), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "With no type error :", /* @__PURE__ */ jsxRuntime.jsx("br", {}), "<CounterInc init_count = { 1 } />      results in ", /* @__PURE__ */ jsxRuntime.jsx("button", {
      type: "botton",
      children: "Counter_inc 17"
    }), /* @__PURE__ */ jsxRuntime.jsxs("ul", {
      children: [/* @__PURE__ */ jsxRuntime.jsx("li", {
        children: 'With a type error -  <CounterInc init_count = { "1" } />       -- '
      }), /* @__PURE__ */ jsxRuntime.jsx("li", {
        children: "With a type error -  <CounterInc init_count = { 1 } />       -- "
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "When the 'Counter_inc' button is clicked, a type error causes the button to change incorrectly to 'Counter 11111' instead of the correct 'Counter 2'.", /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), 'The problem is that a string of "1" is used instead of the proper number of 1.', /* @__PURE__ */ jsxRuntime.jsx("br", {})]
  });
}
exports.Page = Page;
