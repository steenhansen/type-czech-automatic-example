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
function PRE_CounterInc(Counter_props, _react_1_browser_nodejs, _react_2_only_nodejs) {
  const function_params = [Counter_props, _react_1_browser_nodejs, _react_2_only_nodejs];
  if (type_czech.isNode()) {
    const short_node_signature = { init_count: "number" };
    const bad_require_nodejs = type_czech.checkParam_typeExtra(Counter_props, short_node_signature);
    if (bad_require_nodejs !== "")
      return type_czech.check_assert(bad_require_nodejs + " \n 			 Node.js : PRE_CounterInc :{ init_count: 'number' } ");
  } else {
    const browser_signature = [{ init_count: "number" }, "object"];
    return type_czech.checkParam_typeExtra(function_params, browser_signature);
  }
}
CounterInc = type_czech.linkUp(CounterInc, PRE_CounterInc);
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
    children: [/* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx(CounterInc, {
      init_count: "1"
    }), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "This is a barebones example of ", /* @__PURE__ */ jsxRuntime.jsx("a", {
      href: "https://github.com/steenhansen/type-czech",
      children: "Type-Czech"
    }), " JavaScript runtime type checking with React SSR.", /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "The component 'Counter_inc 1' above expects numbers, not strings, for addition when clicked.", /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "Type errors are reported in both NodeJs and the browser console, when (Type-Czech is ON).", /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {})]
  });
}
exports.Page = Page;
