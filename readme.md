
# Type-Czech-Canonical
Type-czech-canonical, [https://type-czech-canonical.herokuapp.com/](https://type-czech-canonical.herokuapp.com/) a 
slow to start free Heroku site, exists to show how
easy it is to add runtime type checking to a Javascript project. 
The live version has TypeCzech turned off, but it has an illustrative type error in a JSX component.
The initial counter is an erroneous string of "1" instead of the correct number of 1, which causes the incorrect output of "Counter 111111..."
when the counter button is pressed, instead of the wanted 'Counter 1', 'Counter 2' ...

This sample project is based on the [Vite-Plugin-SSR](https://vite-plugin-ssr.com/) project, below are the four changes
and additions needed to enable TypeCzech when developing.

### 0. Install vite-plugin-ssr, and choose 'REACT'. Works with version 0.3.64
    npm init vite-plugin-ssr
    npm install

### 1. Install TypeCzech
     npm install type-czech

### 2. Change package.json
```diff
"scripts": {
-   "dev":  "                        npm run server",
-   "prod": "                        npm run build && npm run server:prod",

+   "dev":  "npm run make-tc-dev  && npm run server",
+   "prod": "npm run make-tc-prod && npm run build && npm run server:prod",
   
+   "make-tc-dev":  "node ./node_modules/type-czech/make_tc_dev.js",
+   "make-tc-prod": "node ./node_modules/type-czech/make_tc_prod.js",
```

### 3. Change /pages/index/index.page.jsx
Erroneously typed code to get TypeCzech error message in console
```diff
"scripts": {
-   Interactive. <Counter />
+    Interactive. <Counter init_count={"1"} />
```
Correctly typed code, without errors, is
```diff
-   Interactive. <Counter init_count={"1"} />
+   Interactive. <Counter init_count={1} />
```

### 4. Change /pages/index/Counter.jsx
```diff
+import { type_czech, PRE_JSX_Counter } from "../../typeCzechFunctions.js";

+Counter = type_czech.linkUp(Counter, PRE_JSX_Counter);
-function Counter() {
+function Counter({ init_count }) {
+  const [count, setCount] = useState(init_count);
```

### 5. Add typeCzechFunctions.js
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
+  if (Counter_props.init_count !== 1) 
+    return `!!!! INIT_COUNT VALUE IS NOT 1 BUT INSTEAD '${Counter_props.init_count}' `;
+}
```



## Type Error Messages When TypeCzech Turned On

### Node.js Runtime Type Error in Console
```
PRE_JSX_Counter() PRE-FUNC: Property 'init_count' is indicated to be a 'number',
                            but is inaccurately a 'string' : 1
            CHECKER checkParam_type()
        ACTUAL TYPE ['object','object','object']
             VALUES [{init_count:"1"},{},{isMounted ... publicInstance ... enqueueSetState}] 
      EXPECTED TYPE [{"init_count":"number"},"object","object"]
             ORIGIN Counter(Counter_props, _react_obj_1, _react_obj_2)
```

### Broswer Runtime Type Error in Console
```
PRE_JSX_Counter() PRE-FUNC: Property 'init_count' is indicated to be a 'number', 
                            but is inaccurately a 'string' : 1
            CHECKER checkParam_typeExtra()
        ACTUAL TYPE ['object','object']
             VALUES {init_count:"1"},{}
      EXPECTED TYPE [{"init_count":"number"},"object"]
             ORIGIN Counter(Counter_props, _react_obj_1, _react_obj_2)
```

## Turned Off NOP TypeCzech Code
The extra code TypeCzech adds, eventhough turned off in the file https://type-czech-canonical.herokuapp.com/assets/index.page.6d1f7fb1.js, is 623 bytes as below. You can see the error message the is console logged when run locally.


```
let n;typeof window!="undefined"?n=window:typeof exports!="undefined"?n=exports:n={};
(function(e){e.TypeCzech=function(){return e.type_czech={linkUp:t=>t,isActive:t=>!1,
isPruned:t=>!0,_from:"type-czech-import-prod"},e.type_czech}})(n);var p=n;
const{TypeCzech:h}=p,o=h(["CONSOLE-COUNT","LOG-ERRORS"]);function _(e,t,r){const i=[e,t,r];
if(o.isNode()){const s=[{init_count:"number"},"object","object"];
var u=o.checkParam_type(i,s)}else{const s=[{init_count:"number"},"object"];
var u=o.checkParam_typeExtra(i,s)}if(u)return u;if(e.init_count!==1)
return`!!!! init_count is not 1 but instead '${e.init_count}' `}d=o.linkUp(d,_);
```
## Run type-czech-canonical
To run the program with TypeCzech on
  - npm run dev
  - http://localhost:3000/

To run the program without TypeCzech
  - npm run prod
  - http://localhost:3000/
