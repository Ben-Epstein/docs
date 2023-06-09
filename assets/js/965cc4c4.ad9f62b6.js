"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[6546],{62605:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),l=t(74866),r=t(85162),i=t(11570),o=t(32871),d=t(83599);t(99869);const c=(0,a.memo)((e=>{let{data:n}=e;return a.createElement(a.Fragment,null,a.createElement(i.HH,{type:"target",position:i.Ly.Left,style:{background:"#555"}}),a.createElement("div",null,a.createElement("strong",null,n.label)),a.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"b"}))}));var s=t(33140),m=t(73091),p=t(2029),u=t(76887),E=t(49188),T=t(92949);const _={default:c},h={tickLabels:{fontSize:8,fill:"#BCC2C4"},label:{fontSize:8,fill:"#BCC2C4"}};function y(e){let{children:n,data:t,GLink:c}=e;const{colorMode:y}=(0,T.I)();if(!n)return a.createElement(a.Fragment,null,a.createElement("blockquote",null,"No examples have been written for this node yet. You can add some ",a.createElement("a",{href:`${E.i}/${c}`,target:"_blank"},"here")),a.createElement("br",null)," ",a.createElement("br",null));const f=JSON.parse(n).rfInstance,b="20em";return a.createElement("div",null,a.createElement(l.Z,null,a.createElement(r.Z,{value:"app",label:"App",default:!0},a.createElement(i.tV,null,a.createElement("div",{style:{height:b}},a.createElement(i.x$,{nodes:f.nodes,nodeTypes:_,edges:f.edges,fitView:!0,proOptions:{hideAttribution:!0}},a.createElement(o.a,{style:{backgroundColor:"light"===y?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)",height:80,width:150},nodeColor:"light"===y?"rgba(0, 0, 0, 0.25)":"rgba(255, 255, 255, 0.25)",maskColor:"light"===y?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",zoomable:!0,pannable:!0}),a.createElement(d.A,null))))),a.createElement(r.Z,{value:"output",label:"Output"},a.createElement("div",{style:{minHeight:b}},a.createElement(s.k,null,a.createElement(m.E,{label:"x",style:h}),a.createElement(m.E,{dependentAxis:!0,label:"y",style:h}),a.createElement(p.C,{style:{data:{fill:"#7B61FF"}},size:1,data:t})))),a.createElement(r.Z,{value:"spec",label:"App JSON spec"},a.createElement("div",{style:{minHeight:b}},a.createElement(u.L,{data:f})))))}},89418:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),l=t(25365);function r(e){let{children:n,index:t,folderPath:r}=e;const i=["notes.md","hardware.md","media.md"],o=["Theory and technical notes","Parts list and drivers","Media"][t],d="https://github.com/flojoy-io/docs/tree/main/docs/"+r+i[t],c="string"==typeof n&&n.includes("Driver doc :");return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("details",null,a.createElement("summary",null,a.createElement("span",{style:{display:"inline-block",cursor:"pointer"}},a.createElement("h4",null,o))),c?null:""!==n?a.createElement(l.D,null,n):a.createElement(l.D,null,["No theory or technical notes have been contributed for this node yet.","This node does not require any peripheral hardware to operate. Please see INSTRUMENTS for nodes that interact with the physical world through connected hardware.","No supporting screenshots, photos, or videos have been added to the media.md file for this node."][t]),a.createElement("br",null),a.createElement("small",null,a.createElement("i",null,a.createElement("a",{href:d},"Edit ",i[t]," on GitHub")))),a.createElement("hr",null))}},57685:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(67294),l=t(5673),r=t(70266),i=t(7284),o=t(85012),d=t(92949);function c(e){let{children:n}=e;const{colorMode:t}=(0,d.I)();if(""===n.trim())return a.createElement(a.Fragment,null,a.createElement("blockquote",null,"This function does not have a docstring description yet."),a.createElement("br",null)," ",a.createElement("br",null));const r=n;return a.createElement(a.Fragment,null,a.createElement(l.Z,{language:"yaml",style:"dark"===t?i.Z:o.Z},r),a.createElement("br",null))}l.Z.registerLanguage("yaml",r.Z)},47062:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),l=t(74160);function r(e){let{children:n}=e;if(""===n.trim())return a.createElement("blockquote",null,"This node does not currently have any input parameters.");const t=l.ZP.parse(n);return a.createElement("div",null,a.createElement("h3",null,"Input parameters"),Object.keys(t).map((e=>a.createElement(a.Fragment,null,a.createElement("details",null,a.createElement("summary",{key:e},a.createElement("code",null,e)),a.createElement("ul",null,Object.keys(t[e]).map((n=>a.createElement("li",{key:n},n," : ",JSON.stringify(t[e][n],void 0,4))))))))))}},79267:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),l=t(60614),r=t(49188);function i(e){let{GLink:n,children:t}=e,i=t;if(i.includes('"""')){let e=i.split('"""')[0],n=i.split('"""')[2];i=e.trimEnd()+n.trimStart().replace("\n\n","\n")}return a.createElement("div",null,a.createElement("div",{style:{display:"flex",gap:"5px",justifyContent:"flex-start",alignItems:"center"}},a.createElement("h3",{style:{marginBottom:0}},"Python code"),a.createElement("a",{href:`${r.i}/${n}`,target:"_blank",rel:"noopener noreferrer",class:"navbar__item navbar__link header-github-link","aria-label":"GitHub repository",style:{padding:"5px"}},"Github",a.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),a.createElement("details",{open:!0},a.createElement(l.Z,{className:"language-python"},i)),a.createElement("br",null))}},91906:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294);function l(){return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("br",null),a.createElement("hr",null),a.createElement("br",null),a.createElement("br",null))}},49188:(e,n,t)=>{t.d(n,{i:()=>l,j:()=>a});const a={windows:"/getting-started/install/?platform=windows",mac:"/getting-started/install/?platform=unix"},l="https://github.com/flojoy-io/nodes/tree/main"},21243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>N,contentTitle:()=>A,default:()=>M,frontMatter:()=>b,metadata:()=>g,toc:()=>S});var a=t(87462),l=(t(67294),t(3905)),r=t(57685),i=t(79267),o=t(47062),d=t(62605),c=t(91906),s=t(89418);const m="\n    Node to convert matrix type data into dataframe type data.\n    It takes one matrix type data and converts it to dataframe type data.\n\n    Parameters\n    ----------\n    None\n\n    Returns\n    -------\n    dataframe\n        Converted matrix value from the input\n    ",p='import traceback\nfrom numpy import asarray\nimport pandas as pd\nfrom flojoy import flojoy, DataContainer\n\n\n@flojoy\ndef MAT_2_DF(dc_inputs: list[DataContainer], params: dict) -> DataContainer:\n    \n    dc_input = dc_inputs[0]\n    if dc_input.type == "matrix":\n        np_data = dc_input.m\n        np_array = asarray(np_data)\n        df = pd.DataFrame(np_array)\n\n        return DataContainer(type="dataframe", m=df)\n    else:\n        raise ValueError(\n            f"unsupported DataContainer type passed for MAT_2_DF : {dc_input.type}"\n        )\n',u="";var E=t(69360);const T='{\n    "rfInstance": {\n        "nodes": [\n            {\n                "width": 380,\n                "height": 293,\n                "id": "LINE-25d4884c-0c33-43d5-87b0-cfea55a24350",\n                "type": "PLOTLY_VISOR",\n                "data": {\n                    "id": "LINE-25d4884c-0c33-43d5-87b0-cfea55a24350",\n                    "label": "LINE",\n                    "func": "LINE",\n                    "type": "PLOTLY_VISOR",\n                    "ctrls": {},\n                    "selected": false\n                },\n                "position": {\n                    "x": 853.5001424288464,\n                    "y": 175.58952182389925\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 853.5001424288464,\n                    "y": 175.58952182389925\n                },\n                "dragging": true\n            },\n            {\n                "width": 190,\n                "height": 115,\n                "id": "END-b1c86448-6805-4081-bc7a-55ceb3d56005",\n                "type": "TERMINATOR",\n                "data": {\n                    "id": "END-b1c86448-6805-4081-bc7a-55ceb3d56005",\n                    "label": "END",\n                    "func": "END",\n                    "type": "TERMINATOR",\n                    "ctrls": {},\n                    "selected": false\n                },\n                "position": {\n                    "x": 1435.469598388447,\n                    "y": 260.8338022323869\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 1435.469598388447,\n                    "y": 260.8338022323869\n                },\n                "dragging": true\n            },\n            {\n                "width": 150,\n                "height": 135,\n                "id": "MAT_2_DF-c5e9381e-ccc5-4e2d-bbf3-bd741271b3c8",\n                "type": "TYPE_CASTING",\n                "data": {\n                    "id": "MAT_2_DF-c5e9381e-ccc5-4e2d-bbf3-bd741271b3c8",\n                    "label": "MAT_2_DF",\n                    "func": "MAT_2_DF",\n                    "type": "TYPE_CASTING",\n                    "ctrls": {},\n                    "selected": false\n                },\n                "position": {\n                    "x": 527.5781006448823,\n                    "y": 287.95393385898115\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 527.5781006448823,\n                    "y": 287.95393385898115\n                },\n                "dragging": true\n            }\n        ],\n        "edges": [\n            {\n                "source": "LINE-25d4884c-0c33-43d5-87b0-cfea55a24350",\n                "sourceHandle": "main",\n                "target": "END-b1c86448-6805-4081-bc7a-55ceb3d56005",\n                "targetHandle": "END",\n                "id": "reactflow__edge-LINE-25d4884c-0c33-43d5-87b0-cfea55a24350main-END-b1c86448-6805-4081-bc7a-55ceb3d56005END"\n            },\n            {\n                "source": "MAT_2_DF-c5e9381e-ccc5-4e2d-bbf3-bd741271b3c8",\n                "sourceHandle": "main",\n                "target": "LINE-25d4884c-0c33-43d5-87b0-cfea55a24350",\n                "targetHandle": "LINE",\n                "id": "reactflow__edge-MAT_2_DF-c5e9381e-ccc5-4e2d-bbf3-bd741271b3c8main-LINE-25d4884c-0c33-43d5-87b0-cfea55a24350LINE"\n            }\n        ],\n        "viewport": {\n            "x": 386.73223201420785,\n            "y": 173.6927085078579,\n            "zoom": 1.1728043427269372\n        }\n    },\n    "ctrlsManifest": [\n        {\n            "type": "input",\n            "name": "Slider",\n            "id": "INPUT_PLACEHOLDER",\n            "hidden": false,\n            "minHeight": 1,\n            "minWidth": 2,\n            "layout": {\n                "x": 0,\n                "y": 0,\n                "h": 2,\n                "w": 2,\n                "minH": 1,\n                "minW": 2,\n                "i": "INPUT_PLACEHOLDER"\n            }\n        }\n    ]\n}',_="",h="",y="",f="",b={},A=void 0,g={unversionedId:"nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/MAT_2_DF",id:"nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/MAT_2_DF",title:"MAT_2_DF",description:"[//]: # (Custom component imports)",source:"@site/docs/nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/MAT_2_DF.md",sourceDirName:"nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF",slug:"/nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/",permalink:"/nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"DF_2_NP",permalink:"/nodes/TRANSFORMERS/TYPE_CASTING/DF_2_NP/"},next:{title:"LOADER",permalink:"/nodes/LOADERS/CLOUD_DATABASE/LOADER/"}},N={},S=[{value:"Examples",id:"examples",level:2},{value:"Appendix",id:"appendix",level:2}],x={toc:S},D="wrapper";function M(e){let{components:n,...t}=e;return(0,l.kt)(D,(0,a.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{mdxType:"DocString"},m),(0,l.kt)(i.Z,{GLink:"TRANSFORMERS/TYPE_CASTING/MAT_2_DF/MAT_2_DF.py",mdxType:"PythonCode"},p),(0,l.kt)(o.Z,{mdxType:"Parameters"},u),(0,l.kt)(c.Z,{mdxType:"SectionBreak"}),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(d.Z,{data:_,nodeLabel:"MAT_2_DF",mdxType:"AppDisplay"},T),(0,l.kt)(E.default,{mdxType:"Example1"}),(0,l.kt)(c.Z,{mdxType:"SectionBreak"}),(0,l.kt)("h2",{id:"appendix"},"Appendix"),(0,l.kt)(s.Z,{index:0,folderPath:"nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/appendix/",mdxType:"AppendixSection"},h),(0,l.kt)(s.Z,{index:1,folderPath:"nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/appendix/",mdxType:"AppendixSection"},y),(0,l.kt)(s.Z,{index:2,folderPath:"nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/appendix/",mdxType:"AppendixSection"},f))}M.isMDXComponent=!0},69360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(87462),l=(t(67294),t(3905));const r={},i=void 0,o={unversionedId:"nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/examples/EX1/example",id:"nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/examples/EX1/example",title:"example",description:"In this example, MAT2DF node gets an array [[1],[2],[3]] as an input.",source:"@site/docs/nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/examples/EX1/example.md",sourceDirName:"nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/examples/EX1",slug:"/nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/examples/EX1/example",permalink:"/nodes/TRANSFORMERS/TYPE_CASTING/MAT_2_DF/examples/EX1/example",draft:!1,tags:[],version:"current",frontMatter:{}},d={},c=[],s={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this example, ",(0,l.kt)("inlineCode",{parentName:"p"},"MAT_2_DF")," node gets an array ",(0,l.kt)("inlineCode",{parentName:"p"},"[[1],[2],[3]]")," as an input."),(0,l.kt)("p",null,"This array is converted into ",(0,l.kt)("inlineCode",{parentName:"p"},"dataframe")," type and plots its data."))}p.isMDXComponent=!0}}]);