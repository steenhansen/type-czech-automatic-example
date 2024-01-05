import React from 'react'
import './index.css'

export { Page }

function Page() {
  return (
    <>
      <h1>Type-Error</h1>
      The React function CounterInc() resides in pages/index/CounterInc.jsx.
      <br />
      <br />
      The type checking function PRE_CounterInc() is in typeCzechFunctions.js.
      <br />
      <br />
      <br />
      The CounterInc() button is created in pages/index/index.page.jsx with an incorrect initial string value of "1".
      <br />
<pre>
&lt;CounterInc init_count = &#123; &quot;1&quot; &#125; /&gt;      
</pre>
      Which results in
      &nbsp;<button type='botton' disabled>Counter_inc 11111</button>&nbsp; when clicked because "1"+"1"
      = "11".      
      <br />
      <br />
      <br />
      The CounterInc() button should have been created with a correct initial number value of 1 without any quotes.
<pre>
&lt;CounterInc init_count = &#123; 1 &#125; /&gt;      
</pre>
      Which results in
      &nbsp;<button type='botton' disabled>Counter_inc 8</button>&nbsp; when clicked because 7 + 1 = 8.      
      <br />
      <br />
      <br />
      If this program was launched via "npm run prod" then type errors are not checked for nor logged.
      <br />
      <br />
      But if the program was launched via "npm run dev" then both NodeJs and the browser console show type errors.
      <br />
      <br />
      The type error is that a string of "1" is used instead of the proper number of 1 for counting clicks.
      <br />
      <br />
      <br />
      Node.js Runtime Type Error
<pre>
&nbsp;MESSAGE Property 'init_count' is indicated to be a 'number', but is inaccurately a 'string' : 1<br/>
&nbsp;        Node.js : PRE_CounterInc :&#123;"init_count":"number"&#125;<br/>
&nbsp;        CHECKER check_assert()<br/>
&nbsp;    ACTUAL TYPE 'string'<br/>
&nbsp;         VALUES ""<br/>
&nbsp;         ORIGIN<br/>
</pre>
      <br />
      Broswer Runtime Type Error in Console
<pre>
&nbsp;PRE_CounterInc() PRE-FUNC: Property 'init_count' is indicated to be a 'number', but is inaccurately a 'string' : 1 <br/>
&nbsp;         CHECKER checkParam_typeExtra()<br/>
&nbsp;     ACTUAL TYPE ['object','object']<br/>
&nbsp;          VALUES &#123;init_count:"1"&#125;, &#123;&#125;<br/>
&nbsp;   EXPECTED TYPE [&#123;"init_count":"number"&#125;, "object"]<br/>
&nbsp;          ORIGIN CounterInc(Counter_props, _react_1_browser_nodejs, _react_2_only_nodejs)<br/>
</pre>
    </>
  )
}
