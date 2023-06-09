"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[3697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),i=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var k=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},75873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),o=n(85162);const i={sidebar_position:3,id:"install",title:"Installation"},s=void 0,u={unversionedId:"getting-started/install",id:"getting-started/install",title:"Installation",description:"Click if you don't already have Python 3 or Node.js installed \ud83d\udc47",source:"@site/docs/getting-started/install.md",sourceDirName:"getting-started",slug:"/getting-started/install",permalink:"/getting-started/install",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"install",title:"Installation"},sidebar:"main",next:{title:"CAMERA",permalink:"/nodes/INSTRUMENTS/WEB_CAM/CAMERA/"}},c={},p=[{value:"Python &gt;= 3.10",id:"python--310",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Common gotchya&#39;s",id:"common-gotchyas",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click if you don't already have Python 3 or Node.js installed \ud83d\udc47"),(0,r.kt)("p",null,"To install Flojoy, firstly there are a few prequisites needed on your machine."),(0,r.kt)("h3",{id:"python--310"},"Python >= 3.10"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Download")),(0,r.kt)("p",null,"Python and ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," are required to install and run the Flojoy nodes. Minimum version requirement for Python is ",(0,r.kt)("inlineCode",{parentName:"p"},"3.10")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"20.0")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),". Open your Terminal and type ",(0,r.kt)("inlineCode",{parentName:"p"}," python3 \u2013version")," to see if you already have Python installed and what the version number is."),(0,r.kt)("h3",{id:"nodejs"},"Node.js"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"Download")),(0,r.kt)("p",null,"Node.js is required to run Flojoy's app interface. Open your Terminal and type ",(0,r.kt)("inlineCode",{parentName:"p"},"node -v")," to see if you already have Node.js installed.")),(0,r.kt)(l.Z,{groupId:"platform",queryString:"platform",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"unix",label:"Mac & Linux",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"To install Flojoy on Mac & Linux:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Redis, an open-source, in-memory data store used by Flojoy:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install redis\n")),(0,r.kt)("p",null,"(",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/docs/getting-started/installation/"},"Redis installation reference"),")"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/flojoy-io/studio"},"Clone the repo")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"--recursive")," argument as follows: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive https://github.com/flojoy-io/studio.git\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Navigate into the project root:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd studio\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"We highly recommend creating a Python virtual environment inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"studio")," folder by running the command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3.10 -m venv env\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Finally, run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh flojoy -v env\n")))),(0,r.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"To install Flojoy on Windows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.memurai.com/get-memurai"},"Install Memurai"),", an alternative to Redis for Windows")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows"},"Update your PowerShell")," to at least >=v7.0.0")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/studio"},"Clone the repo")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"--recursive")," argument as follows: "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive https://github.com/flojoy-io/studio.git\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Navigate into the project root:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd studio\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"We highly recommend creating a Python virtual environment inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"studio")," folder by running the command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3.10 -m venv env\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Finally, run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\\flojoy -v env\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Optional flags"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"-v")," provides the path to the Python virtual environment"),(0,r.kt)("li",null,(0,r.kt)("code",null,"-r")," shuts down the existing redis server and spin up a fresh one"),(0,r.kt)("li",null,(0,r.kt)("code",null,"-n")," skips installing the Node packages in package.json"),(0,r.kt)("li",null,(0,r.kt)("code",null,"-p")," skips installing the Python packages in requirements.txt"),(0,r.kt)("li",null,(0,r.kt)("code",null,"-P")," runs the backend server on a specific port"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"common-gotchyas"},"Common gotchya's"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Error related to an npm package: Delete the node_modules folder then run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")," to reinstall all node packages"),(0,r.kt)("li",{parentName:"ul"},"Please ask for debug help on community.flojoy.io for help troubleshooting an installation error")))}h.isMDXComponent=!0}}]);