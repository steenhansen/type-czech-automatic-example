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
       <a href="https://github.com/steenhansen/type-czech-canonical">
        https://github.com/steenhansen/type-czech-canonical
      </a>

    </>
  );
}
