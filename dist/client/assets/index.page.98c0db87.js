import{r as a,j as o,F as b,a as e}from"./renderer/_default.page.client.jsx.f4c8e821.js";let c;typeof window!="undefined"?c=window:typeof exports!="undefined"?c=exports:c={};(function(t){t.TypeCzech=function(){return t.type_czech={linkUp:n=>n,isActive:n=>!1,isPruned:n=>!0,_from:"type-czech-import-prod"},t.type_czech}})(c);var _=c;const{TypeCzech:d}=_,r=d(["CONSOLE-COUNT","LOG-ERRORS"]);function l(t,n,i){const u=[t,n,i];if(r.isNode()){const s={init_count:"number"},p=r.checkParam_typeExtra(t,s);if(p!=="")return r.check_assert(p+` 
 			 Node.js : PRE_JSX_CounterInc :{ init_count: 'number' } `)}else{const s=[{init_count:"number"},"object"];return r.checkParam_typeExtra(u,s)}}h=r.linkUp(h,l);const y=r.isPruned()?"Type-Czech is OFF":"Type-Czech is ON";function h({init_count:t}){const[n,i]=a.exports.useState(t);return o(b,{children:[o("button",{type:"button",onClick:()=>i(u=>u+1),children:["Counter_inc ",n]}),e("br",{}),e("br",{}),o("div",{id:"type-czech-toggle",children:["(",y,")"]})]})}function C(){return o(b,{children:[e(h,{init_count:1}),e("br",{}),e("br",{}),"React SSR component CounterInc() expects numbers, not strings.",e("br",{}),e("br",{}),"With string to number type error :",e("br",{}),'<CounterInc init_count = { "1" } />            results in ',e("button",{type:"botton",children:"Counter_inc 11111"}),e("br",{}),e("br",{}),"With no type error :",e("br",{}),"<CounterInc init_count = { 1 } />      results in ",e("button",{type:"botton",children:"Counter_inc 17"}),o("ul",{children:[e("li",{children:'With a type error -  <CounterInc init_count = { "1" } />       -- '}),e("li",{children:"With a type error -  <CounterInc init_count = { 1 } />       -- "})]}),e("br",{}),e("br",{}),"When the 'Counter_inc' button is clicked, a type error causes the button to change incorrectly to 'Counter 11111' instead of the correct 'Counter 2'.",e("br",{}),e("br",{}),'The problem is that a string of "1" is used instead of the proper number of 1.',e("br",{})]})}export{C as Page};
