"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[8835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>O,kt:()=>c});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},O=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,O=p(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,c=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return n?o.createElement(c,r(r({ref:t},O),{},{components:n})):o.createElement(c,r({ref:t},O))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const i={},r=void 0,p={unversionedId:"nodes/LOGIC_GATES/LOOPS/LOOP/examples/EX1/example",id:"nodes/LOGIC_GATES/LOOPS/LOOP/examples/EX1/example",title:"example",description:"In this example, we begin with a CONSTANT node that has a value of 8.",source:"@site/docs/nodes/LOGIC_GATES/LOOPS/LOOP/examples/EX1/example.md",sourceDirName:"nodes/LOGIC_GATES/LOOPS/LOOP/examples/EX1",slug:"/nodes/LOGIC_GATES/LOOPS/LOOP/examples/EX1/example",permalink:"/nodes/LOGIC_GATES/LOOPS/LOOP/examples/EX1/example",draft:!1,tags:[],version:"current",frontMatter:{}},l={},s=[{value:"Debug Panel",id:"debug-panel",level:3}],O={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this example, we begin with a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/CONSTANT/CONSTANT.py"},(0,a.kt)("inlineCode",{parentName:"a"},"CONSTANT"))," node that has a value of 8."),(0,a.kt)("p",null,"The value is then passed to a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py"},(0,a.kt)("inlineCode",{parentName:"a"},"LOOP"))," node, which, in turn, passes it to the nodes connected to its body output. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py"},(0,a.kt)("inlineCode",{parentName:"a"},"LOOP"))," node is a special node that takes a parameter called ",(0,a.kt)("inlineCode",{parentName:"p"},"num_loops"),", indicating the number of iterations. In this example, we used 5 iterations, but the default value for this parameter is ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),", meaning it will iterate infinitely. Each time the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py"},(0,a.kt)("inlineCode",{parentName:"a"},"LOOP"))," node is executed, it checks the remaining number of iterations and enqueues all nodes connected to its body output if there are more iterations to be performed."),(0,a.kt)("p",null,"Next, we have two nodes, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/CONSTANT/CONSTANT.py"},(0,a.kt)("inlineCode",{parentName:"a"},"CONSTANT"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/FEEDBACK/FEEDBACK.py"},(0,a.kt)("inlineCode",{parentName:"a"},"FEEDBACK")),", connected to the body output of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py"},(0,a.kt)("inlineCode",{parentName:"a"},"LOOP"))," node. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/FEEDBACK/FEEDBACK.py"},(0,a.kt)("inlineCode",{parentName:"a"},"FEEDBACK"))," node is another special node designed to collect the result of a given node ID. It takes a parameter called ",(0,a.kt)("inlineCode",{parentName:"p"},"node_reference"),", which is the ID of a node. It attempts to retrieve the result of the specified node ID. If the result is not found, it passes the result of its parent node. In this example, we provided the ID of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/TRANSFORMERS/ARITHMETIC/MULTIPLY/MULTIPLY.py"},(0,a.kt)("inlineCode",{parentName:"a"},"MULTIPLY"))," node as the parameter for the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/FEEDBACK/FEEDBACK.py"},(0,a.kt)("inlineCode",{parentName:"a"},"FEEDBACK"))," node."),(0,a.kt)("p",null,"We also have a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/TRANSFORMERS/ARITHMETIC/MULTIPLY/MULTIPLY.py"},(0,a.kt)("inlineCode",{parentName:"a"},"MULTIPLY"))," node, which performs element-wise multiplication on two input Numpy arrays. It is connected to a visual node called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/BIG_NUMBER/BIG_NUMBER.py"},(0,a.kt)("inlineCode",{parentName:"a"},"BIG_NUMBER")),", which visualizes the returned value of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/TRANSFORMERS/ARITHMETIC/MULTIPLY/MULTIPLY.py"},(0,a.kt)("inlineCode",{parentName:"a"},"MULTIPLY"))," node in an indicators plot."),(0,a.kt)("p",null,"To enable the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py"},(0,a.kt)("inlineCode",{parentName:"a"},"LOOP"))," node to function correctly, another helper node called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/GOTO/GOTO.py"},(0,a.kt)("inlineCode",{parentName:"a"},"GOTO"))," is required. This node takes a parameter called ",(0,a.kt)("inlineCode",{parentName:"p"},"node_reference"),", similar to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SIMULATIONS/FEEDBACK/FEEDBACK.py"},(0,a.kt)("inlineCode",{parentName:"a"},"FEEDBACK"))," node. However, the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/GOTO/GOTO.py"},(0,a.kt)("inlineCode",{parentName:"a"},"GOTO"))," node always enqueues the specified node, which, in this case, is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py"},(0,a.kt)("inlineCode",{parentName:"a"},"LOOP"))," node. Therefore, the workflow is as follows: the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py"},(0,a.kt)("inlineCode",{parentName:"a"},"LOOP"))," node enqueues the nodes connected to its body output, then the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/GOTO/GOTO.py"},(0,a.kt)("inlineCode",{parentName:"a"},"GOTO"))," node enqueues the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py"},(0,a.kt)("inlineCode",{parentName:"a"},"LOOP"))," node again. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py"},(0,a.kt)("inlineCode",{parentName:"a"},"LOOP"))," node checks if the remaining number of iterations is greater than zero. If so, it enqueues its body nodes again until the number of remaining iterations becomes zero. Finally, it enqueues the nodes connected to its end output."),(0,a.kt)("p",null,"Lastly, we have an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/TERMINATORS/END.py"},(0,a.kt)("inlineCode",{parentName:"a"},"END"))," node which is connected with end output of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/LOOPS/LOOP/LOOP.py"},(0,a.kt)("inlineCode",{parentName:"a"},"LOOP"))," node, which serves to terminate the program."),(0,a.kt)("h3",{id:"debug-panel"},"Debug Panel"),(0,a.kt)("p",null,"Here how it looks in debug panel:\n",(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dm5f4kpjf/image/upload/v1686080780/Screenshot_50_xlni16.png",alt:'"loop-output"'})))}d.isMDXComponent=!0}}]);