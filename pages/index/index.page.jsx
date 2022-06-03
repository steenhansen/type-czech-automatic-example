import React from "react";
import { Counter } from "./Counter";

export { Page };

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter init_count={"1"} />
        </li>
      </ul>
      <br />
      <br />
      When the 'Counter' button is clicked, a type error causes the button to change incorrectly to 'Counter 11111' instead of the correct 'Counter 2'.
      <br />
      <br />
      The problem is that a string of "1" is used instead of the proper number of 1.
      <br />
      <br />
      If the <a href="https://github.com/steenhansen/type-czech">TypeCzech library</a> is used then this type error is easily caught.
      <br />
      <br />
      <a href="https://github.com/steenhansen/type-czech-canonical">https://github.com/steenhansen/type-czech-canonical</a> is this project's code.
    </>
  );
}
