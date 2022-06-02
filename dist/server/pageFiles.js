"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const pageFiles = {
  ".page": { "/renderer/_error.page.jsx": () => Promise.resolve().then(function() {
    return require("./assets/_error.page.65df8559.js");
  }), "/pages/about/index.page.jsx": () => Promise.resolve().then(function() {
    return require("./assets/index.page.388c79a7.js");
  }), "/pages/index/index.page.jsx": () => Promise.resolve().then(function() {
    return require("./assets/index.page.854f6197.js");
  }) },
  ".page.client": { "/renderer/_default.page.client.jsx": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.client.9d02e95e.js");
  }) },
  ".page.server": { "/renderer/_default.page.server.jsx": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.server.3b794341.js");
  }) },
  ".page.route": {}
};
exports.pageFiles = pageFiles;
