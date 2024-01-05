import TypeCzech_obj from "./node_modules/type-czech/type-czech-import.js";
const { TypeCzech } = TypeCzech_obj;
const type_czech = TypeCzech(["CONSOLE-COUNT", "LOG-ERRORS"]);

export { type_czech, PRE_CounterInc };

//  This type checking function gets called before every invocation of the React function of CounterInc()
function PRE_CounterInc(Counter_props, _react_1_browser_nodejs, _react_2_only_nodejs) {
  const function_params = [Counter_props, _react_1_browser_nodejs, _react_2_only_nodejs];
  if (type_czech.isNode()) {
    const short_node_signature = { init_count: "number" };
    const bad_require_nodejs = type_czech.checkParam_typeExtra(Counter_props, short_node_signature);
    if (bad_require_nodejs !== '')
      return type_czech.check_assert(bad_require_nodejs + " \n \t\t\t Node.js : PRE_CounterInc :{ init_count: 'number' } ");
    //
    //  OR for a LONG error message with unnecessary information the below 2 l ines can be used instead of the above 4
    //     const short_node_signature = { init_count: "number" };
    //     return type_czech.checkParam_type(function_params, [short_node_signature, "object", "object"]);
    //
  } else {
    const browser_signature = [{ init_count: "number" }, "object"]; // browser call is missing _react_2_only_nodejs
    return type_czech.checkParam_typeExtra(function_params, browser_signature);
  }
}

/*
The React function of CounterInc() resides in pages/index/Counter.js and produces the below type errors

No Type Error:
    <CounterInc init_count={1} />


Type Error Exists:
    <CounterInc init_count={"1"} />

Browser Type Consol Error:
    PRE_CounterInc() PRE-FUNC: Property 'init_count' is indicated to be a 'number', but is inaccurately a 'string' : 1
                 CHECKER checkParam_typeExtra()
             ACTUAL TYPE ['object','object']
                  VALUES {init_count:"1"},{}
           EXPECTED TYPE [{"init_count":"number"},"object"]
                  ORIGIN CounterInc(Counter_props, _react_1_both, _react_2_only_nodejs)

NodeJs Short Type Error:
        MESSAGE Property 'init_count' is indicated to be a 'number', but is inaccurately a 'string' : 1
        Node.js : PRE_CounterInc :{ init_count: 'number' }
        CHECKER check_assert()
    ACTUAL TYPE 'string'
         VALUES ""
         ORIGIN

NodeJs LONG Type Error:
    PRE_CounterInc() PRE-FUNC: Property 'init_count' is indicated to be a 'number', but is inaccurately a 'string' : 1
                         CHECKER checkParam_type()
                     ACTUAL TYPE ['object','object','object']
                          VALUES [{init_count:"1"},{},{isMounted:function (publicInstance) { re ~~~function~~~,enqueueForceUpdate:function (publicInstance) { if ~~~function~~~,enqueueReplaceState:function (publicInstance, comp ~~~function~~~,enqueueSetState:function (publicInstance, curr ~~~function~~~}]
                   EXPECTED TYPE [{"init_count":"number"},"object","object"]
                          ORIGIN CounterInc(Counter_props, _react_1_both, _react_2_only_nodejs)

*/