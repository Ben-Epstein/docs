"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[6921],{62605:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(67294),o=n(74866),a=n(85162),l=n(11570),i=n(32871),s=n(83599);n(99869);const d=(0,r.memo)((e=>{let{data:t}=e;return r.createElement(r.Fragment,null,r.createElement(l.HH,{type:"target",position:l.Ly.Left,style:{background:"#555"}}),r.createElement("div",null,r.createElement("strong",null,t.label)),r.createElement(l.HH,{type:"source",position:l.Ly.Right,id:"b"}))}));var p=n(33140),c=n(73091),m=n(2029),E=n(76887),u=n(49188),T=n(92949);const h={default:d},R={tickLabels:{fontSize:8,fill:"#BCC2C4"},label:{fontSize:8,fill:"#BCC2C4"}};function _(e){let{children:t,data:n,GLink:d}=e;const{colorMode:_}=(0,T.I)();if(!t)return r.createElement(r.Fragment,null,r.createElement("blockquote",null,"No examples have been written for this node yet. You can add some ",r.createElement("a",{href:`${u.i}/${d}`,target:"_blank"},"here")),r.createElement("br",null)," ",r.createElement("br",null));const S=JSON.parse(t).rfInstance,y="20em";return r.createElement("div",null,r.createElement(o.Z,null,r.createElement(a.Z,{value:"app",label:"App",default:!0},r.createElement(l.tV,null,r.createElement("div",{style:{height:y}},r.createElement(l.x$,{nodes:S.nodes,nodeTypes:h,edges:S.edges,fitView:!0,proOptions:{hideAttribution:!0}},r.createElement(i.a,{style:{backgroundColor:"light"===_?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)",height:80,width:150},nodeColor:"light"===_?"rgba(0, 0, 0, 0.25)":"rgba(255, 255, 255, 0.25)",maskColor:"light"===_?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",zoomable:!0,pannable:!0}),r.createElement(s.A,null))))),r.createElement(a.Z,{value:"output",label:"Output"},r.createElement("div",{style:{minHeight:y}},r.createElement(p.k,null,r.createElement(c.E,{label:"x",style:R}),r.createElement(c.E,{dependentAxis:!0,label:"y",style:R}),r.createElement(m.C,{style:{data:{fill:"#7B61FF"}},size:1,data:n})))),r.createElement(a.Z,{value:"spec",label:"App JSON spec"},r.createElement("div",{style:{minHeight:y}},r.createElement(E.L,{data:S})))))}},89418:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(25365);function a(e){let{children:t,index:n,folderPath:a}=e;const l=["notes.md","hardware.md","media.md"],i=["Theory and technical notes","Parts list and drivers","Media"][n],s="https://github.com/flojoy-io/docs/tree/main/docs/"+a+l[n],d="string"==typeof t&&t.includes("Driver doc :");return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement("details",null,r.createElement("summary",null,r.createElement("span",{style:{display:"inline-block",cursor:"pointer"}},r.createElement("h4",null,i))),d?null:""!==t?r.createElement(o.D,null,t):r.createElement(o.D,null,["No theory or technical notes have been contributed for this node yet.","This node does not require any peripheral hardware to operate. Please see INSTRUMENTS for nodes that interact with the physical world through connected hardware.","No supporting screenshots, photos, or videos have been added to the media.md file for this node."][n]),r.createElement("br",null),r.createElement("small",null,r.createElement("i",null,r.createElement("a",{href:s},"Edit ",l[n]," on GitHub")))),r.createElement("hr",null))}},57685:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294),o=n(5673),a=n(70266),l=n(7284),i=n(85012),s=n(92949);function d(e){let{children:t}=e;const{colorMode:n}=(0,s.I)();if(""===t.trim())return r.createElement(r.Fragment,null,r.createElement("blockquote",null,"This function does not have a docstring description yet."),r.createElement("br",null)," ",r.createElement("br",null));const a=t;return r.createElement(r.Fragment,null,r.createElement(o.Z,{language:"yaml",style:"dark"===n?l.Z:i.Z},a),r.createElement("br",null))}o.Z.registerLanguage("yaml",a.Z)},47062:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(74160);function a(e){let{children:t}=e;if(""===t.trim())return r.createElement("blockquote",null,"This node does not currently have any input parameters.");const n=o.ZP.parse(t);return r.createElement("div",null,r.createElement("h3",null,"Input parameters"),Object.keys(n).map((e=>r.createElement(r.Fragment,null,r.createElement("details",null,r.createElement("summary",{key:e},r.createElement("code",null,e)),r.createElement("ul",null,Object.keys(n[e]).map((t=>r.createElement("li",{key:t},t," : ",JSON.stringify(n[e][t],void 0,4))))))))))}},79267:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(60614),a=n(49188);function l(e){let{GLink:t,children:n}=e,l=n;if(l.includes('"""')){let e=l.split('"""')[0],t=l.split('"""')[2];l=e.trimEnd()+t.trimStart().replace("\n\n","\n")}return r.createElement("div",null,r.createElement("div",{style:{display:"flex",gap:"5px",justifyContent:"flex-start",alignItems:"center"}},r.createElement("h3",{style:{marginBottom:0}},"Python code"),r.createElement("a",{href:`${a.i}/${t}`,target:"_blank",rel:"noopener noreferrer",class:"navbar__item navbar__link header-github-link","aria-label":"GitHub repository",style:{padding:"5px"}},"Github",r.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),r.createElement("details",{open:!0},r.createElement(o.Z,{className:"language-python"},l)),r.createElement("br",null))}},91906:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);function o(){return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement("br",null),r.createElement("hr",null),r.createElement("br",null),r.createElement("br",null))}},49188:(e,t,n)=>{n.d(t,{i:()=>o,j:()=>r});const r={windows:"/getting-started/install/?platform=windows",mac:"/getting-started/install/?platform=unix"},o="https://github.com/flojoy-io/nodes/tree/main"},19270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>f,default:()=>k,frontMatter:()=>y,metadata:()=>P,toc:()=>g});var r=n(87462),o=(n(67294),n(3905)),a=n(57685),l=n(79267),i=n(47062),s=n(62605),d=n(91906),p=n(89418);const c="\n    Takes current limit and sleep time as parameters and allow to control position\n    and speed of a motor with a TIC driver\n    ",m='from flojoy import flojoy, DataContainer\nfrom ticlib import (\n    TicUSB,\n)  # Import the TicUSB library to send command to Tic drivers with USB connection\nfrom time import sleep\n\n\n@flojoy\ndef STEPPER_DRIVER_TIC(dc_inputs: list[DataContainer], params: dict) -> DataContainer:\n    \n\n    positions: list[int] = [50, 100, 150, 200]  # Setting default positions\n    speeds: list[int] = [50000, 1000000, 150000, 200000]  # Setting default speeds\n    current_limit: int = params["current_limit"]\n    sleep_time: int = params["sleep_time"]\n\n    # Declaration of the stepper driver\n    tic: TicUSB = TicUSB()\n    tic.halt_and_set_position(0)  # Set the position to 0\n    tic.set_current_limit(current_limit)  # Set the current limit of the TIC driver\n    tic.energize()  # Turn on the driver\n    tic.exit_safe_start()  # The driver is now ready to receive commands\n\n    for i in range(0, len(positions)):\n        tic.set_max_speed(speeds[i])  # Set motor speed\n        tic.set_target_position(positions[i])  # Set target positions\n        sleep(sleep_time)\n\n    tic.deenergize()\n    tic.enter_safe_start()\n\n    return DataContainer(x={"a": positions, "b": speeds}, y=positions)\n\n\n@flojoy\ndef STEPPER_DRIVER_TIC_MOCK(\n    dc_inputs: list[DataContainer], params: dict\n) -> DataContainer:\n    Mock function for the stepper driver\n    returns positions and speeds\n    positions: list[int] = [50, 100, 150, 200]  # Setting default positions\n    speeds: list[int] = [50000, 1000000, 150000, 200000]  # Setting default speeds\n\n    return DataContainer(x={"a": positions, "b": speeds}, y=speeds)\n',E="current_limit:\n  default: 30\n  type: int\nsleep_time:\n  default: 2\n  type: int\n";var u=n(69799);const T='{\n    "rfInstance": {\n        "nodes": [\n            {\n                "width": 150,\n                "height": 150,\n                "id": "STEPPER_DRIVER_TIC-e797dbda-ccce-449d-9665-fcaaa1e52869",\n                "type": "STEPPER",\n                "data": {\n                    "id": "STEPPER_DRIVER_TIC-e797dbda-ccce-449d-9665-fcaaa1e52869",\n                    "label": "STEPPER DRIVER TIC",\n                    "func": "STEPPER_DRIVER_TIC",\n                    "type": "STEPPER",\n                    "ctrls": {\n                        "current_limit": {\n                            "functionName": "STEPPER_DRIVER_TIC",\n                            "param": "current_limit",\n                            "value": 30\n                        },\n                        "sleep_time": {\n                            "functionName": "STEPPER_DRIVER_TIC",\n                            "param": "sleep_time",\n                            "value": 2\n                        }\n                    },\n                    "pip_dependencies": [\n                        {\n                            "name": "ticlib",\n                            "v": "0.2.2"\n                        }\n                    ],\n                    "selected": true\n                },\n                "position": {\n                    "x": 266.2186691913081,\n                    "y": 193.71409253512644\n                },\n                "selected": true,\n                "positionAbsolute": {\n                    "x": 266.2186691913081,\n                    "y": 193.71409253512644\n                },\n                "dragging": true\n            },\n            {\n                "width": 210,\n                "height": 130,\n                "id": "END-059c2891-15cb-4208-8e81-a4a913b70f92",\n                "type": "TERMINATOR",\n                "data": {\n                    "id": "END-059c2891-15cb-4208-8e81-a4a913b70f92",\n                    "label": "END",\n                    "func": "END",\n                    "type": "TERMINATOR",\n                    "ctrls": {},\n                    "selected": false\n                },\n                "position": {\n                    "x": 764.7900977627365,\n                    "y": 199.42837824941225\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 764.7900977627365,\n                    "y": 199.42837824941225\n                },\n                "dragging": true\n            }\n        ],\n        "edges": [\n            {\n                "source": "STEPPER_DRIVER_TIC-e797dbda-ccce-449d-9665-fcaaa1e52869",\n                "sourceHandle": "main",\n                "target": "END-059c2891-15cb-4208-8e81-a4a913b70f92",\n                "targetHandle": "END",\n                "id": "reactflow__edge-STEPPER_DRIVER_TIC-e797dbda-ccce-449d-9665-fcaaa1e52869main-END-059c2891-15cb-4208-8e81-a4a913b70f92END"\n            }\n        ],\n        "viewport": {\n            "x": 173.69558223607845,\n            "y": 93.45146097973534,\n            "zoom": 0.5251567112201916\n        }\n    },\n    "ctrlsManifest": []\n}',h="",R="## Notes and Documentation:\n",_="## HARDWARE required:\n\n- A stepper motor (we used a [Nema 15-23](https://www.pololu.com/category/140/nema-23-stepper-motors))\n- A Tic motor driver (we used a [TIC T825](https://www.pololu.com/product/3131), but any Tic driver should work).\n- A power supply with enough power to run the driver and motor. (You'll need to set up the current value depending on your motor and your driver)\n- Connection cables (USB, power supply leads, etc)\n",S="## Cloudinary Links :\n\n![TIC Driver Connections](https://res.cloudinary.com/dhopxs1y3/image/upload/v1683653875/steppermotor_z7yaly.jpg)\n_Connection between the computer, the Tic driver, the stepper motor and the power supply_\n\n![Stepper node classic](https://res.cloudinary.com/dhopxs1y3/image/upload/v1683653875/steppernode_mssx65.png)\n_Flojoy interface with the classic node_\n\n![Stepper node knob](https://res.cloudinary.com/dhopxs1y3/image/upload/v1683653875/steppernodeknob_qhsk73.png)\n_Flojoy interface with the knob node_\n",y={},f=void 0,P={unversionedId:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/STEPPER_DRIVER_TIC",id:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/STEPPER_DRIVER_TIC",title:"STEPPER_DRIVER_TIC",description:"[//]: # (Custom component imports)",source:"@site/docs/nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/STEPPER_DRIVER_TIC.md",sourceDirName:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC",slug:"/nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/",permalink:"/nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"STEPPER_DRIVER_TIC_KNOB",permalink:"/nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC_KNOB/"},next:{title:"SERIAL_SINGLE_MEASUREMENT",permalink:"/nodes/INSTRUMENTS/SERIAL/SERIAL_SINGLE_MEASUREMENT/"}},I={},g=[{value:"Examples",id:"examples",level:2},{value:"Appendix",id:"appendix",level:2}],b={toc:g},v="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(v,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{mdxType:"DocString"},c),(0,o.kt)(l.Z,{GLink:"INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/STEPPER_DRIVER_TIC.py",mdxType:"PythonCode"},m),(0,o.kt)(i.Z,{mdxType:"Parameters"},E),(0,o.kt)(d.Z,{mdxType:"SectionBreak"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(s.Z,{data:h,nodeLabel:"STEPPER_DRIVER_TIC",mdxType:"AppDisplay"},T),(0,o.kt)(u.default,{mdxType:"Example1"}),(0,o.kt)(d.Z,{mdxType:"SectionBreak"}),(0,o.kt)("h2",{id:"appendix"},"Appendix"),(0,o.kt)(p.Z,{index:0,folderPath:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/appendix/",mdxType:"AppendixSection"},R),(0,o.kt)(p.Z,{index:1,folderPath:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/appendix/",mdxType:"AppendixSection"},_),(0,o.kt)(p.Z,{index:2,folderPath:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/appendix/",mdxType:"AppendixSection"},S))}k.isMDXComponent=!0},69799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={},l=void 0,i={unversionedId:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/examples/EX1/example",id:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/examples/EX1/example",title:"example",description:"This is a tutorial for using the nodes called Stepper Motor driver Tic and Stepper Driver motor Tic Knob in order to control a motor with the Flojoy App",source:"@site/docs/nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/examples/EX1/example.md",sourceDirName:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/examples/EX1",slug:"/nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/examples/EX1/example",permalink:"/nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC/examples/EX1/example",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a tutorial for using the nodes called Stepper Motor driver Tic and Stepper Driver motor Tic Knob in order to control a motor with the Flojoy App"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware required :")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Motor (Nema 15-23)"),(0,o.kt)("li",{parentName:"ul"},"A Tic motor driver (All models are available and should work with these nodes) -- TIC T825 was used for experimentation. "),(0,o.kt)("li",{parentName:"ul"},"A Power Supply wich enough power to run the driver and the motor. (You'll need to setup the good current value depending on the motor size you are using)"),(0,o.kt)("li",{parentName:"ul"},"Connections cables (USB, Electronic cables)")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dhopxs1y3/image/upload/v1683653875/steppermotor_z7yaly.jpg",alt:"TIC Driver Connections"}),"\n",(0,o.kt)("em",{parentName:"p"},"Connection between the computer, the Tic driver, the stepper motor and the power supply")," "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Software required :")),(0,o.kt)("p",null,"Flojoy software running (Go to the page -- Getting started/Installation)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Node Management :")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Input data : None"),(0,o.kt)("li",{parentName:"ul"},"Output node : End (To stop the process)")),(0,o.kt)("p",null,"You don't need to have a node placed before the stepper motor nodes because the only data needed by the nodes is set up with the parameters. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters : ")),(0,o.kt)("p",null,"The Stepper Driver Tic node allows you to set 2 different speeds and 4 positions for the stepper motor.\nThe motor will move to the first two positions with first speed parameters and then move to position 3 and 4 with the second speed parameters\n(You can set the same speed for both and reduce the number of movement by settting the same position for 2,3 and 4)"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dhopxs1y3/image/upload/v1683653875/steppernode_mssx65.png",alt:"Stepper node classic"}),"\n",(0,o.kt)("em",{parentName:"p"},"Flojoy interface with the classic node")," "),(0,o.kt)("p",null,"At the end of the process the stepper motor will be placed in the last position set up and wait for a new parameters for the next movement.\nIt should be possible to use these nodes with the LOOP node in order to make a repetitive movement with the motor."))}m.isMDXComponent=!0}}]);