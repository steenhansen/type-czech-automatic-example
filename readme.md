
Type-Czech-Canonical, [https://type-czech-canonical.herokuapp.com/](https://type-czech-canonical.herokuapp.com/), exists to show how
easy it is to add runtime type checking to a project. The live version has
TypeCzech turned off, as it is production.

This sample project is based on the [Vite-Plugin-SSR](https://vite-plugin-ssr.com/) project, below are the 4 changes and additions needed to enable TypeCzech.

### Install vite-plugin-ssr, and choose 'REACT'
    npm init vite-plugin-ssr@latest

### 1 Install TypeCzech
     npm install type-czech

### 2 Change package.json
```diff
"scripts": {
-   "dev":  "                        npm run server",
-   "prod": "                        npm run build && npm run server:prod",

+   "dev":  "npm run make-tc-dev  && npm run server",
+   "prod": "npm run make-tc-prod && npm run build && npm run server:prod",
   
+   "make-tc-dev":  "node ./node_modules/type-czech/make_tc_dev.js",
+   "make-tc-prod": "node ./node_modules/type-czech/make_tc_prod.js",
```

### 3 Change /pages/index/index.page.jsx
```diff
"scripts": {
-   Interactive. <Counter />
+    Interactive. <Counter init_count={"1"} />,
```



### 4 Change /pages/index/Counter.jsx
```diff
+import { type_czech, PRE_JSX_Counter } from "../../typeCzechFunctions.js";

+Counter = type_czech.linkUp(Counter, PRE_JSX_Counter);
-function Counter() {
+function Counter({ init_count }) {
+  const [count, setCount] = useState(init_count);
```

### 5 Add typeCzechFunctions.js
```diff
+import TypeCzech_obj from "./node_modules/type-czech/type-czech-import.js";
+const { TypeCzech } = TypeCzech_obj;
+const type_czech = TypeCzech(["CONSOLE-COUNT", "LOG-ERRORS"]);

+export { type_czech, PRE_JSX_Counter };

+function PRE_JSX_Counter(Counter_props, _react_obj_1, _react_obj_2) {
+  const function_params = [Counter_props, _react_obj_1, _react_obj_2];
+  if (type_czech.isNode()) {
+    const node_signature = [{ init_count: "number" }, "object", "object"];
+    var bad_jsx_type = type_czech.checkParam_type(function_params, node_signature);
+  } else {
+    const browser_signature = [{ init_count: "number" }, "object"]; // browser missing _react_obj_2
+    var bad_jsx_type = type_czech.checkParam_typeExtra(function_params, browser_signature);
+  }
+  if (bad_jsx_type) return bad_jsx_type;
+  if (Counter_props.init_count !== 1) return `!!!! INIT_COUNT VALUE IS NOT 1 BUT INSTEAD '${Counter_props.init_count}' `;
+}
```

To run the program with TypeCzech on
  - npm run dev

To run the program without TypeCzech
  - npm run prod