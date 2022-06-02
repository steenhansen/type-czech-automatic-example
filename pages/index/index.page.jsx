import React from "react";
import { Counter } from "./Counter";

export { Page };

function Page() {
  return (
    <>
      <h1>Welcome 1,2, or 3</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter init_count={"1"} />
        </li>
      </ul>
    </>
  );
}
