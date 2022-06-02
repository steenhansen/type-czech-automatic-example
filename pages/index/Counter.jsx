import React, { useState } from "react";

export { Counter };

import { type_czech, PRE_JSX_Counter } from "../../typeCzechFunctions.js";

Counter = type_czech.linkUp(Counter, PRE_JSX_Counter);
function Counter({ init_count }) {
  const [count, setCount] = useState(init_count);
  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </button>
  );
}
