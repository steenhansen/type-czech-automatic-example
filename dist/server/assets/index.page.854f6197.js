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
const {
  TypeCzech
} = TypeCzech_obj;
const type_czech = TypeCzech(["CONSOLE-COUNT", "LOG-ERRORS"]);
const set_of_123 = /* @__PURE__ */ new Set([1, 2, 3]);
function PRE_JSX_Counter(Counter_props, _extra_react_obj_1, _extra_react_obj_2) {
  const function_params = [Counter_props, _extra_react_obj_1, _extra_react_obj_2];
  if (type_czech.isNode()) {
    const node_signature = [{
      init_count: "number"
    }, "object", "object"];
    const node_not_num_err = type_czech.checkParam_type(function_params, node_signature);
    if (node_not_num_err) {
      return node_not_num_err;
    }
  } else {
    const browser_signature = [{
      init_count: "number"
    }, "object"];
    const browser_not_num_err = type_czech.checkParam_typeExtra(function_params, browser_signature);
    if (browser_not_num_err) {
      return browser_not_num_err;
    }
  }
  if (Counter_props.init_count !== 1) {
    return `!!!! INIT_count value is not '1' but instead '${Counter_props.init_count}' `;
  }
}
function PRE_changeWelcome(current_count) {
  const count_not_num_err = type_czech.checkParam_type(current_count, "number");
  if (count_not_num_err) {
    return count_not_num_err;
  }
  if (!set_of_123.has(current_count)) {
    return `**** CURRENT_count value is not in '1,2,3' but instead '${current_count}' `;
  }
}
changeWelcome = type_czech.linkUp(changeWelcome, PRE_changeWelcome);
function changeWelcome(current_count) {
  document.getElementById("h1-welcome").innerHTML = "Welcome 1,2, or 3 => " + current_count;
}
Counter = type_czech.linkUp(Counter, PRE_JSX_Counter);
function Counter({
  init_count
}) {
  const [count, setCount] = React.useState(init_count);
  if (count !== init_count) {
    changeWelcome(count);
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("button", {
    type: "button",
    onClick: () => setCount((count2) => count2 + 1),
    children: ["Counter ", count]
  });
}
function Page() {
  const init_count = -1;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
      id: "h1-welcome",
      children: "Welcome 1,2, or 3"
    }), "This page is:", /* @__PURE__ */ jsxRuntime.jsxs("ul", {
      children: [/* @__PURE__ */ jsxRuntime.jsx("li", {
        children: "Rendered to HTML."
      }), /* @__PURE__ */ jsxRuntime.jsxs("li", {
        children: ["Interactive. ", /* @__PURE__ */ jsxRuntime.jsx(Counter, {
          init_count
        })]
      })]
    })]
  });
}
exports.Page = Page;
