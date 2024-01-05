import React, { useState } from "react";

export { CounterInc };

import { type_czech, PRE_CounterInc } from "../../typeCzechFunctions.js";

CounterInc = type_czech.linkUp(CounterInc, PRE_CounterInc);

const typeCzech_on_off = type_czech.isPruned() ? "Type-Czech is OFF" : "Type-Czech is ON";

function CounterInc({ init_count }) {
  const [cur_count, setCount] = useState(init_count);
  return (
    <>
      <button type="button" onClick={() => setCount((cur_count) => cur_count + 1)}>
      Counter_inc {cur_count} 
      </button>
      <br /><br />
      <div id="type-czech-toggle">({typeCzech_on_off})</div>
    </>
  );
}
