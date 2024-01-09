"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const pageFiles = {
  ".page": { "/renderer/_error.page.jsx": () => Promise.resolve().then(function() {
    return require("./assets/_error.page.65df8559.js");
  }), "/pages/index/index.page.jsx": () => Promise.resolve().then(function() {
    return require("./assets/index.page.63c9ee16.js");
  }), "/pages/resources/index.page.jsx": () => Promise.resolve().then(function() {
    return require("./assets/index.page.09381fc8.js");
  }), "/pages/type-error/index.page.jsx": () => Promise.resolve().then(function() {
    return require("./assets/index.page.de9ab586.js");
  }) },
  ".page.client": { "/renderer/_default.page.client.jsx": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.client.e68d6a62.js");
  }) },
  ".page.server": { "/renderer/_default.page.server.jsx": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.server.085be69d.js");
  }) },
  ".page.route": {}
};
exports.pageFiles = pageFiles;
