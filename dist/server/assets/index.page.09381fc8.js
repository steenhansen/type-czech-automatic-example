"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("react");
var jsxRuntime = require("react/jsx-runtime");
function Page() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
      children: "Resources"
    }), "This project is ", /* @__PURE__ */ jsxRuntime.jsx("a", {
      href: "https://github.com/steenhansen/type-czech-canonical",
      children: "https://github.com/steenhansen/type-czech-canonical"
    }), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "Uses ", /* @__PURE__ */ jsxRuntime.jsx("a", {
      href: "https://github.com/steenhansen/type-czech",
      children: "TypeCzech library"
    }), " to catch type errors", /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "Generates React SSR with  ", /* @__PURE__ */ jsxRuntime.jsx("a", {
      href: "https://vitejs.dev/guide/ssr",
      children: "Vite"
    }), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("br", {}), "The three functions that concern the button component", /* @__PURE__ */ jsxRuntime.jsxs("ul", {
      children: [/* @__PURE__ */ jsxRuntime.jsx("li", {
        children: 'The component - pages/index/CounterInc.jsx - with "1"'
      }), /* @__PURE__ */ jsxRuntime.jsx("li", {
        children: "\xA0\xA0\xA0\xA0\xA0The creation - pages/index/index.page.jsx "
      }), /* @__PURE__ */ jsxRuntime.jsx("li", {
        children: "The type check - typeCzechFunctions.js "
      })]
    })]
  });
}
exports.Page = Page;
