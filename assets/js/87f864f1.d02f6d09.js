"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[7094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?o.createElement(f,i(i({ref:t},m),{},{components:n})):o.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:4,id:"creating-custom-node",title:"Creating a custom node"},i=void 0,s={unversionedId:"custom-nodes/creating-custom-node",id:"custom-nodes/creating-custom-node",title:"Creating a custom node",description:"Division: an example",source:"@site/docs/custom-nodes/creating-custom-node.md",sourceDirName:"custom-nodes",slug:"/custom-nodes/creating-custom-node",permalink:"/custom-nodes/creating-custom-node",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"creating-custom-node",title:"Creating a custom node"},sidebar:"main",previous:{title:"Node Manifest",permalink:"/custom-nodes/manifest"},next:{title:"Custom categories",permalink:"/custom-nodes/custom-category"}},l={},c=[{value:"Division: an example",id:"division-an-example",level:2},{value:"Creating the source files",id:"creating-the-source-files",level:3},{value:"Creating the manifest",id:"creating-the-manifest",level:3},{value:"Creating Custom Component ( Frontend )",id:"creating-custom-component--frontend-",level:3},{value:"Registering the new function with Flojoy",id:"registering-the-new-function-with-flojoy",level:3},{value:"Almost done! Housekeeping time",id:"almost-done-housekeeping-time",level:3},{value:"Congratulations! You&#39;ve created your first custom node.",id:"congratulations-youve-created-your-first-custom-node",level:3},{value:"Common Errors:",id:"common-errors",level:3}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"division-an-example"},"Division: an example"),(0,a.kt)("p",null,"Suppose we wanted to contribute a node that divides two items elementwise (for the case of vector inputs, for instance). Although we could do this with the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"invert")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"multiply")," nodes, we want to create this node for convenience."),(0,a.kt)("h3",{id:"creating-the-source-files"},"Creating the source files"),(0,a.kt)("p",null,"To start, we create the file ",(0,a.kt)("inlineCode",{parentName:"p"},"DIVIDE/divide.py")," inside ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/tree/main/TRANSFORMERS/ARITHMETIC"},(0,a.kt)("inlineCode",{parentName:"a"},"/PYTHON/nodes/TRANSFORMERS/ARITHMETIC/")),". Each node must have its own folder."),(0,a.kt)("p",null,"We can then create our new function using the features discussed ",(0,a.kt)("a",{parentName:"p",href:"../data-container"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"{title='divide.py'}","{title":"'divide.py'}"},"import numpy as np\nfrom flojoy import flojoy, DataContainer\n\n@flojoy\ndef DIVIDE(dc, params):\n\n    a = dc[0].y\n    b = dc[1].y\n\n    result = np.divide(a,b) #ensure elementwise\n    return DataContainer(\n        type='ordered_pair',\n        x={'a': a, 'b': b},\n        y = result\n    )\n")),(0,a.kt)("h3",{id:"creating-the-manifest"},"Creating the manifest"),(0,a.kt)("p",null,"To register our new node with Flojoy, let's make a new manifest file in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/tree/main/MANIFEST"},(0,a.kt)("inlineCode",{parentName:"a"},"PYTHON/nodes/MANIFEST")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{title='divide.manifest.yaml'}","{title":"'divide.manifest.yaml'}"},"COMMAND:\n  - { name: 'Div', key: 'DIVIDE', type: 'ARITHMETIC' }\n")),(0,a.kt)("h3",{id:"creating-custom-component--frontend-"},"Creating Custom Component ( Frontend )"),(0,a.kt)("p",null,"In Flojoy, you can create custom component for newly created nodes (i.e. shape and node connections). The custom components are located in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/studio/tree/main/src/feature/flow_chart_panel/components/custom-nodes"},(0,a.kt)("inlineCode",{parentName:"a"},"/src/feature/flow_chart_panel/components/custom-nodes"))," folder. Create a custom component for the newly created nodes and register the design in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/studio/blob/main/src/configs/NodeConfigs.ts"},(0,a.kt)("inlineCode",{parentName:"a"},"/src/configs/NodeConfigs.ts"))," file. In this case, its a ",(0,a.kt)("inlineCode",{parentName:"p"},"ARITHMETIC")," type node, so you register custom component as ",(0,a.kt)("inlineCode",{parentName:"p"},"ARITHMETIC: YOUR_CUSTOM_COMPONENT"),".\nIf you don't register the newly created node type,it will render the ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultNode")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{title='NodeConfigs.ts'}","{title":"'NodeConfigs.ts'}"},"import MyCustomComponent from '@src/feature/flow_chart_panel/components/custom-nodes/YOUR_CUSTOM_COMPONENT';\n\nexport const nodeConfigs = {\n    default: DefaultNode,\n    ARITHMETIC: MyCustomComponent,\n};\n")),(0,a.kt)("h3",{id:"registering-the-new-function-with-flojoy"},"Registering the new function with Flojoy"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is now performed at startup of Flojoy.")),(0,a.kt)("p",null,"To update the databases with the functionalities of the nodes (including your new custom node), run the following in the root directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 write_python_metadata.py\n")),(0,a.kt)("h3",{id:"almost-done-housekeeping-time"},"Almost done! Housekeeping time"),(0,a.kt)("p",null,"Let's make sure your code is properly formatted!"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/psf/black"},"black")," as our formatter for Python, which you can install by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install black\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n")),(0,a.kt)("p",null,"on the root of the nodes repo."),(0,a.kt)("p",null,"Once the formatter is installed, simply run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"black .\n")),(0,a.kt)("p",null,"on the root of the nodes repo and all your Python files will be properly formatted!"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is always a good idea to setup format on save on the editor of your choice!")),(0,a.kt)("h3",{id:"congratulations-youve-created-your-first-custom-node"},"Congratulations! You've created your first custom node."),(0,a.kt)("p",null,"When creating custom nodes, make sure to go through the following steps:"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Did I make my new function correctly?",(0,a.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Did I add the ",(0,a.kt)("inlineCode",{parentName:"li"},"flojoy")," decorator to my function?"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Did I pass two arguments to my function, the ",(0,a.kt)("inlineCode",{parentName:"li"},"DataContainer")," inputs and the parameters ",(0,a.kt)("inlineCode",{parentName:"li"},"params")," from the manifest?"))),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Did I create a manifest file, correctly adding the correct category key?"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Did I generate the manifest for the node?"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Did I update the Python metadata?")),(0,a.kt)("h3",{id:"common-errors"},"Common Errors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[2023-05-17 08:29:33.105-RQ-watch] AttributeError: module 'nodes.GENERATORS.SIMULATIONS.TESTING.TESTING' has no attribute 'TESTING'"))),(0,a.kt)("p",null,"This likely means your function name does not match the Key in your manifest.yaml file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[2023-05-17 08:59:25.876-RQ-watch] cmd = node[\"cmd\"]    KeyError: 'cmd'"))),(0,a.kt)("p",null,"This likely means you have to run ",(0,a.kt)("inlineCode",{parentName:"p"},"python3 generate_manifest.py")," in the root Flojoy directory."))}d.isMDXComponent=!0}}]);