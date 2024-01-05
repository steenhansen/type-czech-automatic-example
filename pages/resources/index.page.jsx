import React from 'react'


export { Page }

function Page() {
  return (
    <>
      <h1>Resources</h1>
      This project is <a href="https://github.com/steenhansen/type-czech-canonical">https://github.com/steenhansen/type-czech-canonical</a>
      <br />
      <br />
      Uses <a href="https://github.com/steenhansen/type-czech">TypeCzech library</a> to catch type errors
      <br />
      <br />
      Generates React SSR with  <a href="https://vitejs.dev/guide/ssr">Vite</a>
      <br />
      <br />
      <br />
      <br />
      The three functions that concern the button component
      <ul>
        <li>The component - pages/index/CounterInc.jsx - with "1"</li>
        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The creation - pages/index/index.page.jsx </li>
        <li>The type check - typeCzechFunctions.js </li>
    </ul>
    </>
  )
}
