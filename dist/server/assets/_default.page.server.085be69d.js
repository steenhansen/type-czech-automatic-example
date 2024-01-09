"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var ReactDOMServer = require("react-dom/server");
var React = require("react");
var jsxRuntime = require("react/jsx-runtime");
var vitePluginSsr = require("vite-plugin-ssr");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var ReactDOMServer__default = /* @__PURE__ */ _interopDefaultLegacy(ReactDOMServer);
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var logoUrl = "/assets/logo.0ab59a12.svg";
var PageShell$1 = "";
const Context = React__default["default"].createContext(void 0);
function PageContextProvider({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(Context.Provider, {
    value: pageContext,
    children
  });
}
function usePageContext() {
  const pageContext = React.useContext(Context);
  return pageContext;
}
function Link(props) {
  const pageContext = usePageContext();
  const className = [props.className, pageContext.urlPathname === props.href && "is-active"].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntime.jsx("a", {
    ...props,
    className
  });
}
function PageShell({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(React__default["default"].StrictMode, {
    children: /* @__PURE__ */ jsxRuntime.jsx(PageContextProvider, {
      pageContext,
      children: /* @__PURE__ */ jsxRuntime.jsxs(Layout, {
        children: [/* @__PURE__ */ jsxRuntime.jsxs(Sidebar, {
          children: [/* @__PURE__ */ jsxRuntime.jsx(Logo, {}), /* @__PURE__ */ jsxRuntime.jsx(Link, {
            className: "navitem",
            href: "/",
            children: "Home"
          }), /* @__PURE__ */ jsxRuntime.jsx(Link, {
            className: "navitem",
            href: "/type-error",
            children: "Type-Error"
          }), /* @__PURE__ */ jsxRuntime.jsx(Link, {
            className: "navitem",
            href: "/resources",
            children: "Resources"
          })]
        }), /* @__PURE__ */ jsxRuntime.jsx(Content, {
          children
        })]
      })
    })
  });
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    style: {
      display: "flex",
      maxWidth: 900,
      margin: "auto"
    },
    children
  });
}
function Sidebar({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    style: {
      padding: 20,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      lineHeight: "1.8em"
    },
    children
  });
}
function Content({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    style: {
      padding: 20,
      paddingBottom: 50,
      borderLeft: "2px solid #eee",
      minHeight: "100vh"
    },
    children
  });
}
function Logo() {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    style: {
      marginTop: 20,
      marginBottom: 10
    },
    children: /* @__PURE__ */ jsxRuntime.jsx("a", {
      href: "/",
      children: /* @__PURE__ */ jsxRuntime.jsx("img", {
        src: logoUrl,
        height: 64,
        width: 64,
        alt: "logo"
      })
    })
  });
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const {
    Page,
    pageProps
  } = pageContext;
  const pageHtml = ReactDOMServer__default["default"].renderToString(/* @__PURE__ */ jsxRuntime.jsx(PageShell, {
    pageContext,
    children: /* @__PURE__ */ jsxRuntime.jsx(Page, {
      ...pageProps
    })
  }));
  const {
    documentProps
  } = pageContext;
  const title = documentProps && documentProps.title || "type-czech-canonical";
  const desc = documentProps && documentProps.description || "App using Vite + vite-plugin-ssr";
  const documentHtml = vitePluginSsr.escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${vitePluginSsr.dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {}
  };
}
exports.passToClient = passToClient;
exports.render = render;
