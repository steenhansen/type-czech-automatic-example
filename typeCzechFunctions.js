import TypeCzech_obj from "./node_modules/type-czech/type-czech-import.js";
const { TypeCzech } = TypeCzech_obj;
const type_czech = TypeCzech(["CONSOLE-COUNT", "LOG-ERRORS"]);

export { type_czech, PRE_JSX_Counter };

function PRE_JSX_Counter(Counter_props, _react_obj_1, _react_obj_2) {
  const function_params = [Counter_props, _react_obj_1, _react_obj_2];
  if (type_czech.isNode()) {
    const node_signature = [{ init_count: "number" }, "object", "object"];
    var bad_jsx_type = type_czech.checkParam_type(function_params, node_signature);
  } else {
    const browser_signature = [{ init_count: "number" }, "object"]; // browser missing _react_obj_2
    var bad_jsx_type = type_czech.checkParam_typeExtra(function_params, browser_signature);
  }
  if (bad_jsx_type) return bad_jsx_type;
  if (Counter_props.init_count !== 1) return `!!!! init_count is not 1 but instead '${Counter_props.init_count}' `;
}
