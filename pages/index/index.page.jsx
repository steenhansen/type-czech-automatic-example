import React from "react";
import { CounterInc } from "./CounterInc";

export { Page };

function Page() {
  return (
    <>
      <br />
      <CounterInc init_count = { "1" } />
      <br />
      <br />
      <br />
      This is a barebones example of <a href="https://github.com/steenhansen/type-czech">Type-Czech</a> JavaScript runtime type checking with React SSR.
      <br />
      <br />
      The component 'Counter_inc 1' above expects numbers, not strings, for addition when clicked.
      <br />
      <br />
      Type errors are reported in both NodeJs and the browser console, when (Type-Czech is ON).
      <br />
      <br />
      <br />
    
    </>
  );
}
