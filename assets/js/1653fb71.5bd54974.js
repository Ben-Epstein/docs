"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[2849],{62605:(e,n,t)=>{t.d(n,{Z:()=>S});var a=t(67294),r=t(74866),l=t(85162),i=t(11570),o=t(32871),s=t(83599);t(99869);const d=(0,a.memo)((e=>{let{data:n}=e;return a.createElement(a.Fragment,null,a.createElement(i.HH,{type:"target",position:i.Ly.Left,style:{background:"#555"}}),a.createElement("div",null,a.createElement("strong",null,n.label)),a.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"b"}))}));var c=t(33140),m=t(73091),E=t(2029),p=t(76887),T=t(49188),u=t(92949);const A={default:d},h={tickLabels:{fontSize:8,fill:"#BCC2C4"},label:{fontSize:8,fill:"#BCC2C4"}};function S(e){let{children:n,data:t,GLink:d}=e;const{colorMode:S}=(0,u.I)();if(!n)return a.createElement(a.Fragment,null,a.createElement("blockquote",null,"No examples have been written for this node yet. You can add some ",a.createElement("a",{href:`${T.i}/${d}`,target:"_blank"},"here")),a.createElement("br",null)," ",a.createElement("br",null));const f=JSON.parse(n).rfInstance,y="20em";return a.createElement("div",null,a.createElement(r.Z,null,a.createElement(l.Z,{value:"app",label:"App",default:!0},a.createElement(i.tV,null,a.createElement("div",{style:{height:y}},a.createElement(i.x$,{nodes:f.nodes,nodeTypes:A,edges:f.edges,fitView:!0,proOptions:{hideAttribution:!0}},a.createElement(o.a,{style:{backgroundColor:"light"===S?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)",height:80,width:150},nodeColor:"light"===S?"rgba(0, 0, 0, 0.25)":"rgba(255, 255, 255, 0.25)",maskColor:"light"===S?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",zoomable:!0,pannable:!0}),a.createElement(s.A,null))))),a.createElement(l.Z,{value:"output",label:"Output"},a.createElement("div",{style:{minHeight:y}},a.createElement(c.k,null,a.createElement(m.E,{label:"x",style:h}),a.createElement(m.E,{dependentAxis:!0,label:"y",style:h}),a.createElement(E.C,{style:{data:{fill:"#7B61FF"}},size:1,data:t})))),a.createElement(l.Z,{value:"spec",label:"App JSON spec"},a.createElement("div",{style:{minHeight:y}},a.createElement(p.L,{data:f})))))}},89418:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(25365);function l(e){let{children:n,index:t,folderPath:l}=e;const i=["notes.md","hardware.md","media.md"],o=["Theory and technical notes","Parts list and drivers","Media"][t],s="https://github.com/flojoy-io/docs/tree/main/docs/"+l+i[t],d="string"==typeof n&&n.includes("Driver doc :");return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("details",null,a.createElement("summary",null,a.createElement("span",{style:{display:"inline-block",cursor:"pointer"}},a.createElement("h4",null,o))),d?null:""!==n?a.createElement(r.D,null,n):a.createElement(r.D,null,["No theory or technical notes have been contributed for this node yet.","This node does not require any peripheral hardware to operate. Please see INSTRUMENTS for nodes that interact with the physical world through connected hardware.","No supporting screenshots, photos, or videos have been added to the media.md file for this node."][t]),a.createElement("br",null),a.createElement("small",null,a.createElement("i",null,a.createElement("a",{href:s},"Edit ",i[t]," on GitHub")))),a.createElement("hr",null))}},57685:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(67294),r=t(5673),l=t(70266),i=t(7284),o=t(85012),s=t(92949);function d(e){let{children:n}=e;const{colorMode:t}=(0,s.I)();if(""===n.trim())return a.createElement(a.Fragment,null,a.createElement("blockquote",null,"This function does not have a docstring description yet."),a.createElement("br",null)," ",a.createElement("br",null));const l=n;return a.createElement(a.Fragment,null,a.createElement(r.Z,{language:"yaml",style:"dark"===t?i.Z:o.Z},l),a.createElement("br",null))}r.Z.registerLanguage("yaml",l.Z)},47062:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(74160);function l(e){let{children:n}=e;if(""===n.trim())return a.createElement("blockquote",null,"This node does not currently have any input parameters.");const t=r.ZP.parse(n);return a.createElement("div",null,a.createElement("h3",null,"Input parameters"),Object.keys(t).map((e=>a.createElement(a.Fragment,null,a.createElement("details",null,a.createElement("summary",{key:e},a.createElement("code",null,e)),a.createElement("ul",null,Object.keys(t[e]).map((n=>a.createElement("li",{key:n},n," : ",JSON.stringify(t[e][n],void 0,4))))))))))}},79267:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(60614),l=t(49188);function i(e){let{GLink:n,children:t}=e,i=t;if(i.includes('"""')){let e=i.split('"""')[0],n=i.split('"""')[2];i=e.trimEnd()+n.trimStart().replace("\n\n","\n")}return a.createElement("div",null,a.createElement("div",{style:{display:"flex",gap:"5px",justifyContent:"flex-start",alignItems:"center"}},a.createElement("h3",{style:{marginBottom:0}},"Python code"),a.createElement("a",{href:`${l.i}/${n}`,target:"_blank",rel:"noopener noreferrer",class:"navbar__item navbar__link header-github-link","aria-label":"GitHub repository",style:{padding:"5px"}},"Github",a.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),a.createElement("details",{open:!0},a.createElement(r.Z,{className:"language-python"},i)),a.createElement("br",null))}},91906:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294);function r(){return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("br",null),a.createElement("hr",null),a.createElement("br",null),a.createElement("br",null))}},49188:(e,n,t)=>{t.d(n,{i:()=>r,j:()=>a});const a={windows:"/getting-started/install/?platform=windows",mac:"/getting-started/install/?platform=unix"},r="https://github.com/flojoy-io/nodes/tree/main"},36682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>b,default:()=>v,frontMatter:()=>y,metadata:()=>D,toc:()=>R});var a=t(87462),r=(t(67294),t(3905)),l=t(57685),i=t(79267),o=t(47062),s=t(62605),d=t(91906),c=t(89418);const m="\n    Retrieves a pandas DataFrame from rdatasets using the provided dataset_key parameter and returns it wrapped in a DataContainer.\n\n    Args:\n        dc_inputs (list[DataContainer]): A list of DataContainer objects, but not used in this function.\n        params (dict): A dictionary of parameters for this function.\n            dataset_key (str): The key used to retrieve the DataFrame.\n\n    Returns:\n        DataContainer: A DataContainer object containing the retrieved pandas DataFrame.\n    ",E='from flojoy import flojoy, DataContainer\nfrom rdatasets import data\n\n\n@flojoy\ndef R_DATASET(dc_inputs: list[DataContainer], params: dict) -> DataContainer:\n    \n    dataset_key = params["dataset_key"]\n    df = data(dataset_key)\n    return DataContainer(type="dataframe", m=df)\n',p="dataset_key:\n  default: iris\n  options:\n  - ability.cov\n  - airmiles\n  - AirPassengers\n  - airquality\n  - anscombe\n  - attenu\n  - attitude\n  - austres\n  - BJsales\n  - BOD\n  - cars\n  - ChickWeight\n  - chickwts\n  - co2\n  - crimtab\n  - discoveries\n  - DNase\n  - esoph\n  - euro\n  - EuStockMarkets\n  - faithful\n  - Formaldehyde\n  - freeny\n  - HairEyeColor\n  - Harman23\n  - Harman74\n  - Indometh\n  - infert\n  - InsectSprays\n  - iris\n  - iris3\n  - islands\n  - JohnsonJohnson\n  - LakeHuron\n  - LakeHuron\n  - LifeCycleSavings\n  - Loblolly\n  - longley\n  - lynx\n  - morley\n  - mtcars\n  - nhtemp\n  - Nile\n  - nottem\n  - npk\n  - occupationalStatus\n  - Orange\n  - OrchardSprays\n  - PlantGrowth\n  - precip\n  - presidents\n  - pressure\n  - Puromycin\n  - quakes\n  - randu\n  - rivers\n  - rock\n  - Seatbelts\n  - sleep\n  - stackloss\n  - sunspot.month\n  - sunspot.year\n  - sunspots\n  - swiss\n  - Theoph\n  - Titanic\n  - ToothGrowth\n  - treering\n  - trees\n  - UCBAdmissions\n  - UKDriverDeaths\n  - UKgas\n  - USAccDeaths\n  - USArrests\n  - USJudgeRatings\n  - USPersonalExpenditure\n  - USPersonalExpenditure\n  - VADeaths\n  - volcano\n  - warpbreaks\n  - women\n  - WorldPhones\n  - WWWusage\n  type: select\n";var T=t(60511);const u='{\n    "rfInstance": {\n        "nodes": [\n            {\n                "width": 380,\n                "height": 293,\n                "id": "TABLE-e800470c-1dfa-418e-b3be-08934023ea54",\n                "type": "PLOTLY_VISOR",\n                "data": {\n                    "id": "TABLE-e800470c-1dfa-418e-b3be-08934023ea54",\n                    "label": "TABLE",\n                    "func": "TABLE",\n                    "type": "PLOTLY_VISOR",\n                    "ctrls": {},\n                    "selected": false\n                },\n                "position": {\n                    "x": 546.9942259972702,\n                    "y": 112.59212378208309\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 546.9942259972702,\n                    "y": 112.59212378208309\n                },\n                "dragging": true\n            },\n            {\n                "width": 210,\n                "height": 130,\n                "id": "END-166c0b70-9c60-4e42-a618-85b66610c473",\n                "type": "TERMINATOR",\n                "data": {\n                    "id": "END-166c0b70-9c60-4e42-a618-85b66610c473",\n                    "label": "END",\n                    "func": "END",\n                    "type": "TERMINATOR",\n                    "ctrls": {},\n                    "selected": false\n                },\n                "position": {\n                    "x": 945.5656545686987,\n                    "y": 162.59212378208304\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 945.5656545686987,\n                    "y": 162.59212378208304\n                },\n                "dragging": true\n            },\n            {\n                "width": 150,\n                "height": 150,\n                "id": "R_DATASET-d7ea4e14-0fd2-432e-a1b1-b234286f995d",\n                "type": "SAMPLE_DATASET",\n                "data": {\n                    "id": "R_DATASET-d7ea4e14-0fd2-432e-a1b1-b234286f995d",\n                    "label": "R DATASET",\n                    "func": "R_DATASET",\n                    "type": "SAMPLE_DATASET",\n                    "ctrls": {\n                        "dataset_key": {\n                            "functionName": "R_DATASET",\n                            "param": "dataset_key",\n                            "value": "iris"\n                        }\n                    },\n                    "pip_dependencies": [\n                        {\n                            "name": "rdatasets",\n                            "v": "0.1.0"\n                        }\n                    ],\n                    "selected": false\n                },\n                "position": {\n                    "x": 155.4876003476146,\n                    "y": 177.61454275878134\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 155.4876003476146,\n                    "y": 177.61454275878134\n                },\n                "dragging": true\n            }\n        ],\n        "edges": [\n            {\n                "source": "TABLE-e800470c-1dfa-418e-b3be-08934023ea54",\n                "sourceHandle": "main",\n                "target": "END-166c0b70-9c60-4e42-a618-85b66610c473",\n                "targetHandle": "END",\n                "id": "reactflow__edge-TABLE-e800470c-1dfa-418e-b3be-08934023ea54main-END-166c0b70-9c60-4e42-a618-85b66610c473END"\n            },\n            {\n                "source": "R_DATASET-d7ea4e14-0fd2-432e-a1b1-b234286f995d",\n                "sourceHandle": "main",\n                "target": "TABLE-e800470c-1dfa-418e-b3be-08934023ea54",\n                "targetHandle": "TABLE",\n                "id": "reactflow__edge-R_DATASET-d7ea4e14-0fd2-432e-a1b1-b234286f995dmain-TABLE-e800470c-1dfa-418e-b3be-08934023ea54TABLE"\n            }\n        ],\n        "viewport": {\n            "x": 231.72498032641062,\n            "y": 32.9189448113047,\n            "zoom": 0.7070174838334414\n        }\n    },\n    "ctrlsManifest": [\n        {\n            "type": "input",\n            "name": "Slider",\n            "id": "INPUT_PLACEHOLDER",\n            "hidden": false,\n            "minHeight": 1,\n            "minWidth": 2,\n            "layout": {\n                "x": 0,\n                "y": 0,\n                "h": 2,\n                "w": 2,\n                "minH": 1,\n                "minW": 2,\n                "i": "INPUT_PLACEHOLDER"\n            }\n        }\n    ]\n}',A="",h="",S="",f="",y={},b=void 0,D={unversionedId:"nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/R_DATASET",id:"nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/R_DATASET",title:"R_DATASET",description:"[//]: # (Custom component imports)",source:"@site/docs/nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/R_DATASET.md",sourceDirName:"nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET",slug:"/nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/",permalink:"/nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"PLOTLY_DATASET",permalink:"/nodes/GENERATORS/SAMPLE_DATASETS/PLOTLY_DATASET/"},next:{title:"TEXT_DATASET",permalink:"/nodes/GENERATORS/SAMPLE_DATASETS/TEXT_DATASET/"}},g={},R=[{value:"Examples",id:"examples",level:2},{value:"Appendix",id:"appendix",level:2}],_={toc:R},k="wrapper";function v(e){let{components:n,...t}=e;return(0,r.kt)(k,(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{mdxType:"DocString"},m),(0,r.kt)(i.Z,{GLink:"GENERATORS/SAMPLE_DATASETS/R_DATASET/R_DATASET.py",mdxType:"PythonCode"},E),(0,r.kt)(o.Z,{mdxType:"Parameters"},p),(0,r.kt)(d.Z,{mdxType:"SectionBreak"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(s.Z,{data:A,nodeLabel:"R_DATASET",mdxType:"AppDisplay"},u),(0,r.kt)(T.default,{mdxType:"Example1"}),(0,r.kt)(d.Z,{mdxType:"SectionBreak"}),(0,r.kt)("h2",{id:"appendix"},"Appendix"),(0,r.kt)(c.Z,{index:0,folderPath:"nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/appendix/",mdxType:"AppendixSection"},h),(0,r.kt)(c.Z,{index:1,folderPath:"nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/appendix/",mdxType:"AppendixSection"},S),(0,r.kt)(c.Z,{index:2,folderPath:"nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/appendix/",mdxType:"AppendixSection"},f))}v.isMDXComponent=!0},60511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>E,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const l={},i=void 0,o={unversionedId:"nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/examples/EX1/example",id:"nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/examples/EX1/example",title:"example",description:"The R_DATASET app",source:"@site/docs/nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/examples/EX1/example.md",sourceDirName:"nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/examples/EX1",slug:"/nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/examples/EX1/example",permalink:"/nodes/GENERATORS/SAMPLE_DATASETS/R_DATASET/examples/EX1/example",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[{value:"The R_DATASET app",id:"the-r_dataset-app",level:2}],c={toc:d},m="wrapper";function E(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-r_dataset-app"},"The R_DATASET app"),(0,r.kt)("p",null,"The workflow of this app is described below:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/GENERATORS/SAMPLE_DATASET/R_DATASET/R_DATASET.py"},"R_DATASET")," : This is a R Dataset node. It takes one parameter  ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset_key"),", the name of dataset to load from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vincentarelbundock/Rdatasets/tree/master/csv/datasets"},(0,r.kt)("inlineCode",{parentName:"a"},"rdatasets"))," package. In this case it is 'iris' which is default value of this parameter. It passing a DataContainer class of an ",(0,r.kt)("inlineCode",{parentName:"p"},"dataframe")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," key e.g ",(0,r.kt)("inlineCode",{parentName:"p"},"DataContainer(type='dataframe, m=df)")," to the next node ",(0,r.kt)("inlineCode",{parentName:"p"},"Table"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/VISUALIZERS/PLOTLY/TABLE/TABLE.py"},"TABLE"),": This node creates a Plotly table visualization for a given input ",(0,r.kt)("inlineCode",{parentName:"p"},"DataContainer")," 'dataframe' type."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/flojoy-io/nodes/blob/main/LOGIC_GATES/TERMINATORS/END.py"},"TERMINATE"),": This node terminating the current script run. The output of this node is same as its parent node."))}E.isMDXComponent=!0}}]);