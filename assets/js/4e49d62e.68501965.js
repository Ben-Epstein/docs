"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[5705],{62605:(e,n,t)=>{t.d(n,{Z:()=>I});var a=t(67294),r=t(74866),l=t(85162),d=t(11570),i=t(32871),o=t(83599);t(99869);const E=(0,a.memo)((e=>{let{data:n}=e;return a.createElement(a.Fragment,null,a.createElement(d.HH,{type:"target",position:d.Ly.Left,style:{background:"#555"}}),a.createElement("div",null,a.createElement("strong",null,n.label)),a.createElement(d.HH,{type:"source",position:d.Ly.Right,id:"b"}))}));var s=t(33140),c=t(73091),m=t(2029),S=t(76887),p=t(49188),u=t(92949);const R={default:E},f={tickLabels:{fontSize:8,fill:"#BCC2C4"},label:{fontSize:8,fill:"#BCC2C4"}};function I(e){let{children:n,data:t,GLink:E}=e;const{colorMode:I}=(0,u.I)();if(!n)return a.createElement(a.Fragment,null,a.createElement("blockquote",null,"No examples have been written for this node yet. You can add some ",a.createElement("a",{href:`${p.i}/${E}`,target:"_blank"},"here")),a.createElement("br",null)," ",a.createElement("br",null));const A=JSON.parse(n).rfInstance,T="20em";return a.createElement("div",null,a.createElement(r.Z,null,a.createElement(l.Z,{value:"app",label:"App",default:!0},a.createElement(d.tV,null,a.createElement("div",{style:{height:T}},a.createElement(d.x$,{nodes:A.nodes,nodeTypes:R,edges:A.edges,fitView:!0,proOptions:{hideAttribution:!0}},a.createElement(i.a,{style:{backgroundColor:"light"===I?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)",height:80,width:150},nodeColor:"light"===I?"rgba(0, 0, 0, 0.25)":"rgba(255, 255, 255, 0.25)",maskColor:"light"===I?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",zoomable:!0,pannable:!0}),a.createElement(o.A,null))))),a.createElement(l.Z,{value:"output",label:"Output"},a.createElement("div",{style:{minHeight:T}},a.createElement(s.k,null,a.createElement(c.E,{label:"x",style:f}),a.createElement(c.E,{dependentAxis:!0,label:"y",style:f}),a.createElement(m.C,{style:{data:{fill:"#7B61FF"}},size:1,data:t})))),a.createElement(l.Z,{value:"spec",label:"App JSON spec"},a.createElement("div",{style:{minHeight:T}},a.createElement(S.L,{data:A})))))}},89418:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(25365);function l(e){let{children:n,index:t,folderPath:l}=e;const d=["notes.md","hardware.md","media.md"],i=["Theory and technical notes","Parts list and drivers","Media"][t],o="https://github.com/flojoy-io/docs/tree/main/docs/"+l+d[t],E="string"==typeof n&&n.includes("Driver doc :");return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("details",null,a.createElement("summary",null,a.createElement("span",{style:{display:"inline-block",cursor:"pointer"}},a.createElement("h4",null,i))),E?null:""!==n?a.createElement(r.D,null,n):a.createElement(r.D,null,["No theory or technical notes have been contributed for this node yet.","This node does not require any peripheral hardware to operate. Please see INSTRUMENTS for nodes that interact with the physical world through connected hardware.","No supporting screenshots, photos, or videos have been added to the media.md file for this node."][t]),a.createElement("br",null),a.createElement("small",null,a.createElement("i",null,a.createElement("a",{href:o},"Edit ",d[t]," on GitHub")))),a.createElement("hr",null))}},57685:(e,n,t)=>{t.d(n,{Z:()=>E});var a=t(67294),r=t(5673),l=t(70266),d=t(7284),i=t(85012),o=t(92949);function E(e){let{children:n}=e;const{colorMode:t}=(0,o.I)();if(""===n.trim())return a.createElement(a.Fragment,null,a.createElement("blockquote",null,"This function does not have a docstring description yet."),a.createElement("br",null)," ",a.createElement("br",null));const l=n;return a.createElement(a.Fragment,null,a.createElement(r.Z,{language:"yaml",style:"dark"===t?d.Z:i.Z},l),a.createElement("br",null))}r.Z.registerLanguage("yaml",l.Z)},47062:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(74160);function l(e){let{children:n}=e;if(""===n.trim())return a.createElement("blockquote",null,"This node does not currently have any input parameters.");const t=r.ZP.parse(n);return a.createElement("div",null,a.createElement("h3",null,"Input parameters"),Object.keys(t).map((e=>a.createElement(a.Fragment,null,a.createElement("details",null,a.createElement("summary",{key:e},a.createElement("code",null,e)),a.createElement("ul",null,Object.keys(t[e]).map((n=>a.createElement("li",{key:n},n," : ",JSON.stringify(t[e][n],void 0,4))))))))))}},79267:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(67294),r=t(60614),l=t(49188);function d(e){let{GLink:n,children:t}=e,d=t;if(d.includes('"""')){let e=d.split('"""')[0],n=d.split('"""')[2];d=e.trimEnd()+n.trimStart().replace("\n\n","\n")}return a.createElement("div",null,a.createElement("div",{style:{display:"flex",gap:"5px",justifyContent:"flex-start",alignItems:"center"}},a.createElement("h3",{style:{marginBottom:0}},"Python code"),a.createElement("a",{href:`${l.i}/${n}`,target:"_blank",rel:"noopener noreferrer",class:"navbar__item navbar__link header-github-link","aria-label":"GitHub repository",style:{padding:"5px"}},"Github",a.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),a.createElement("details",{open:!0},a.createElement(r.Z,{className:"language-python"},d)),a.createElement("br",null))}},91906:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294);function r(){return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("br",null),a.createElement("hr",null),a.createElement("br",null),a.createElement("br",null))}},49188:(e,n,t)=>{t.d(n,{i:()=>r,j:()=>a});const a={windows:"/getting-started/install/?platform=windows",mac:"/getting-started/install/?platform=unix"},r="https://github.com/flojoy-io/nodes/tree/main"},90767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>b,default:()=>C,frontMatter:()=>T,metadata:()=>g,toc:()=>_});var a=t(87462),r=(t(67294),t(3905)),l=t(57685),d=t(79267),i=t(47062),o=t(62605),E=t(91906),s=t(89418);const c='\n    Node to take simple time dependent 1d data from an Ardunio,\n    or a similar serial device.\n    For example, you can record temperature following this tutorial:\n\n    https://learn.adafruit.com/thermistor/using-a-thermistor\n\n    with Serial.println(steinhart) as the only line printing.\n\n    It is important that the last line Arduino is returning is the\n    data with a new line at the end (i.e. println()).\n\n    The other lines must be returned with print()\n    with print(",") between each line.\n\n    For example:\n\n    print(reading0)\n    print(",")\n    println(reading1)\n\n    If there is more than one column, the SELECT_ARRAY node must be\n    used after this node.\n\n    params:\n    num_readings: Number of points to record.\n    record_period: Length between two recordings in seconds.\n    BAUD_RATE: Baud rate for the serial device.\n    com_port: COM port of the serial device\n\n    num_readings * record_period is roughly the run length in seconds.\n    ',m='from flojoy import flojoy, DataContainer\nfrom time import sleep\nimport serial\nimport numpy as np\nfrom datetime import datetime\nimport plotly.graph_objects as go\n\n\n@flojoy\ndef SERIAL_TIMESERIES(dc_inputs, params):\n    \n\n    COM_PORT = params.get("com_port", "/dev/ttyUSB0")\n    BAUD = params.get("baudrate", 9600)\n    NUM = params.get("num_readings", 100)\n    RECORD_PERIOD = params.get("record_period", 1)\n\n    ser = serial.Serial(COM_PORT, timeout=1, baudrate=BAUD)\n    readings = []\n    times = []\n    # The first reading is commonly empty.\n    s = ser.readline().decode()\n\n    for i in range(NUM):\n        ts = datetime.now()\n        s = ser.readline().decode()\n        # Some readings may be empty.\n        if s != "":\n            reading = s[:-2].split(",")\n            if len(reading) == 1:\n                reading = reading[0]\n            readings.append(reading)\n\n            ts = datetime.now()\n            seconds = float(\n                ts.hour * 3600 + ts.minute * 60 + ts.second + ts.microsecond / 10**6\n            )\n\n            times.append(seconds)\n\n            if len(times) > 0:\n                time1 = seconds - times[i]\n            else:\n                # Estimate execution time.\n                time1 = 0.1\n\n            if time1 < RECORD_PERIOD:\n                sleep(RECORD_PERIOD - time1)\n\n    times = np.array(times)\n    try:\n        times -= times[0]\n    except IndexError:\n        raise IndexError("No data detected from the Arduino")\n\n    readings = np.array(readings)\n    readings = readings.astype("float64")\n    # If there are two or more columns return a Plotly figure.\n    if readings.ndim == 2:\n        data = go.Line(x=times, y=readings[:, 0], mode="markers")\n        fig = go.Figure(data=data)\n        return DataContainer(type="plotly", fig=fig, x=times, y=readings)\n    else:\n        return DataContainer(x=times, y=readings)\n\n\n@flojoy\ndef SERIAL_TIMESERIES_MOCK(dc, params):\n    x = np.linspace(0, 100, 100)\n    y = np.linspace(0, 100, 100)\n    return DataContainer(x=x, y=y)\n',S="baudrate:\n  default: 9600\n  type: int\ncomport:\n  default: /dev/ttyACM0\n  type: string\nnum_readings:\n  default: 100\n  type: int\nrecord_period:\n  default: 1\n  type: float\n";var p=t(20201);const u='{\n    "rfInstance": {\n        "nodes": [\n            {\n                "width": 210,\n                "height": 130,\n                "id": "END-06a4da40-a0ae-44ad-873b-9b65d096880a",\n                "type": "TERMINATOR",\n                "data": {\n                    "id": "END-06a4da40-a0ae-44ad-873b-9b65d096880a",\n                    "label": "END",\n                    "func": "END",\n                    "type": "TERMINATOR",\n                    "ctrls": {},\n                    "selected": false\n                },\n                "position": {\n                    "x": 1544.1406772254813,\n                    "y": 309.7142857142858\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 1544.1406772254813,\n                    "y": 309.7142857142858\n                },\n                "dragging": true\n            },\n            {\n                "width": 150,\n                "height": 150,\n                "id": "SELECT_ARRAY-3d6c9d42-ba69-4d00-8ede-4a75d87c4cee",\n                "type": "SELECT_ARRAY",\n                "data": {\n                    "id": "SELECT_ARRAY-3d6c9d42-ba69-4d00-8ede-4a75d87c4cee",\n                    "label": "SELECT_ARRAY_1",\n                    "func": "SELECT_ARRAY",\n                    "type": "SELECT_ARRAY",\n                    "ctrls": {\n                        "column": {\n                            "functionName": "SELECT_ARRAY",\n                            "param": "column",\n                            "value": "0"\n                        }\n                    },\n                    "selected": false\n                },\n                "position": {\n                    "x": 627.1192105282848,\n                    "y": 104.25198394000293\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 627.1192105282848,\n                    "y": 104.25198394000293\n                },\n                "dragging": true\n            },\n            {\n                "width": 150,\n                "height": 150,\n                "id": "SELECT_ARRAY-03541a39-a232-4571-a81d-4df94c19c325",\n                "type": "SELECT_ARRAY",\n                "data": {\n                    "id": "SELECT_ARRAY-03541a39-a232-4571-a81d-4df94c19c325",\n                    "label": "SELECT_ARRAY_2",\n                    "func": "SELECT_ARRAY",\n                    "type": "SELECT_ARRAY",\n                    "ctrls": {\n                        "column": {\n                            "functionName": "SELECT_ARRAY",\n                            "param": "column",\n                            "value": "1"\n                        }\n                    },\n                    "selected": false\n                },\n                "position": {\n                    "x": 614.6027915252406,\n                    "y": 536.040645969877\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 614.6027915252406,\n                    "y": 536.040645969877\n                },\n                "dragging": true\n            },\n            {\n                "width": 225,\n                "height": 226,\n                "id": "SCATTER-0f6b5ddd-6646-4119-a8ab-5b95eb628fe3",\n                "type": "PLOTLY_VISOR",\n                "data": {\n                    "id": "SCATTER-0f6b5ddd-6646-4119-a8ab-5b95eb628fe3",\n                    "label": "SCATTER_1",\n                    "func": "SCATTER",\n                    "type": "PLOTLY_VISOR",\n                    "ctrls": {},\n                    "selected": false\n                },\n                "position": {\n                    "x": 1048.0107102184566,\n                    "y": 61.98977155238117\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 1048.0107102184566,\n                    "y": 61.98977155238117\n                },\n                "dragging": true\n            },\n            {\n                "width": 225,\n                "height": 226,\n                "id": "SCATTER-f46dc017-b49f-43ff-bc6e-8a8175fa50e0",\n                "type": "PLOTLY_VISOR",\n                "data": {\n                    "id": "SCATTER-f46dc017-b49f-43ff-bc6e-8a8175fa50e0",\n                    "label": "SCATTER_2",\n                    "func": "SCATTER",\n                    "type": "PLOTLY_VISOR",\n                    "ctrls": {},\n                    "selected": false\n                },\n                "position": {\n                    "x": 1043.1719153770464,\n                    "y": 485.27307504050464\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 1043.1719153770464,\n                    "y": 485.27307504050464\n                },\n                "dragging": true\n            },\n            {\n                "width": 150,\n                "height": 150,\n                "id": "SERIAL_TIMESERIES-fae97385-f983-4077-ab50-15bd03477608",\n                "type": "SERIAL",\n                "data": {\n                    "id": "SERIAL_TIMESERIES-fae97385-f983-4077-ab50-15bd03477608",\n                    "label": "SERIAL_TIMESERIES",\n                    "func": "SERIAL_TIMESERIES",\n                    "type": "SERIAL",\n                    "ctrls": {\n                        "comport": {\n                            "functionName": "SERIAL_TIMESERIES",\n                            "param": "comport",\n                            "value": "/dev/ttyUSB0"\n                        },\n                        "baudrate": {\n                            "functionName": "SERIAL_TIMESERIES",\n                            "param": "baudrate",\n                            "value": "9600"\n                        },\n                        "num_readings": {\n                            "functionName": "SERIAL_TIMESERIES",\n                            "param": "num_readings",\n                            "value": "10"\n                        },\n                        "record_period": {\n                            "functionName": "SERIAL_TIMESERIES",\n                            "param": "record_period",\n                            "value": "1"\n                        }\n                    },\n                    "pip_dependencies": [\n                        {\n                            "name": "pyserial",\n                            "v": 3.5\n                        }\n                    ],\n                    "selected": false\n                },\n                "position": {\n                    "x": 180.7392990498203,\n                    "y": 282.54427222502665\n                },\n                "selected": false,\n                "positionAbsolute": {\n                    "x": 180.7392990498203,\n                    "y": 282.54427222502665\n                },\n                "dragging": true\n            }\n        ],\n        "edges": [\n            {\n                "source": "SELECT_ARRAY-3d6c9d42-ba69-4d00-8ede-4a75d87c4cee",\n                "sourceHandle": "main",\n                "target": "SCATTER-0f6b5ddd-6646-4119-a8ab-5b95eb628fe3",\n                "targetHandle": "SCATTER",\n                "id": "reactflow__edge-SELECT_ARRAY-3d6c9d42-ba69-4d00-8ede-4a75d87c4ceemain-SCATTER-0f6b5ddd-6646-4119-a8ab-5b95eb628fe3SCATTER"\n            },\n            {\n                "source": "SELECT_ARRAY-03541a39-a232-4571-a81d-4df94c19c325",\n                "sourceHandle": "main",\n                "target": "SCATTER-f46dc017-b49f-43ff-bc6e-8a8175fa50e0",\n                "targetHandle": "SCATTER",\n                "id": "reactflow__edge-SELECT_ARRAY-03541a39-a232-4571-a81d-4df94c19c325main-SCATTER-f46dc017-b49f-43ff-bc6e-8a8175fa50e0SCATTER"\n            },\n            {\n                "source": "SCATTER-f46dc017-b49f-43ff-bc6e-8a8175fa50e0",\n                "sourceHandle": "main",\n                "target": "END-06a4da40-a0ae-44ad-873b-9b65d096880a",\n                "targetHandle": "END",\n                "id": "reactflow__edge-SCATTER-f46dc017-b49f-43ff-bc6e-8a8175fa50e0main-END-06a4da40-a0ae-44ad-873b-9b65d096880aEND"\n            },\n            {\n                "source": "SCATTER-0f6b5ddd-6646-4119-a8ab-5b95eb628fe3",\n                "sourceHandle": "main",\n                "target": "END-06a4da40-a0ae-44ad-873b-9b65d096880a",\n                "targetHandle": "END",\n                "id": "reactflow__edge-SCATTER-0f6b5ddd-6646-4119-a8ab-5b95eb628fe3main-END-06a4da40-a0ae-44ad-873b-9b65d096880aEND"\n            },\n            {\n                "source": "SERIAL_TIMESERIES-fae97385-f983-4077-ab50-15bd03477608",\n                "sourceHandle": "main",\n                "target": "SELECT_ARRAY-3d6c9d42-ba69-4d00-8ede-4a75d87c4cee",\n                "targetHandle": "SELECT_ARRAY",\n                "id": "reactflow__edge-SERIAL_TIMESERIES-fae97385-f983-4077-ab50-15bd03477608main-SELECT_ARRAY-3d6c9d42-ba69-4d00-8ede-4a75d87c4ceeSELECT_ARRAY"\n            },\n            {\n                "source": "SERIAL_TIMESERIES-fae97385-f983-4077-ab50-15bd03477608",\n                "sourceHandle": "main",\n                "target": "SELECT_ARRAY-03541a39-a232-4571-a81d-4df94c19c325",\n                "targetHandle": "SELECT_ARRAY",\n                "id": "reactflow__edge-SERIAL_TIMESERIES-fae97385-f983-4077-ab50-15bd03477608main-SELECT_ARRAY-03541a39-a232-4571-a81d-4df94c19c325SELECT_ARRAY"\n            }\n        ],\n        "viewport": {\n            "x": 197.88510420585555,\n            "y": 38.16888746940003,\n            "zoom": 0.7622193595343526\n        }\n    },\n    "ctrlsManifest": [\n        {\n            "type": "input",\n            "name": "Numeric Input",\n            "minWidth": 1,\n            "minHeight": 1,\n            "hidden": false,\n            "id": "ctrl-917255d4-18d6-4c96-88f0-0d0797b10c09",\n            "layout": {\n                "x": 0,\n                "y": 1,\n                "h": 2,\n                "w": 2,\n                "i": "ctrl-917255d4-18d6-4c96-88f0-0d0797b10c09",\n                "minH": 1,\n                "minW": 1,\n                "static": false\n            },\n            "param": {\n                "id": "SELECT_ARRAY_SELECT_ARRAY_1_column",\n                "functionName": "SELECT_ARRAY",\n                "param": "column",\n                "nodeId": "SELECT_ARRAY-3d6c9d42-ba69-4d00-8ede-4a75d87c4cee",\n                "inputId": "ctrl-917255d4-18d6-4c96-88f0-0d0797b10c09",\n                "type": "float"\n            },\n            "val": 0\n        },\n        {\n            "type": "input",\n            "name": "Numeric Input",\n            "minWidth": 1,\n            "minHeight": 1,\n            "hidden": false,\n            "id": "ctrl-f26735ab-ddf9-4614-bf9a-12684213347c",\n            "layout": {\n                "x": 0,\n                "y": 3,\n                "h": 2,\n                "w": 2,\n                "i": "ctrl-f26735ab-ddf9-4614-bf9a-12684213347c",\n                "minH": 1,\n                "minW": 1,\n                "static": false\n            },\n            "param": {\n                "id": "SELECT_ARRAY_SELECT_ARRAY_2_column",\n                "functionName": "SELECT_ARRAY",\n                "param": "column",\n                "nodeId": "SELECT_ARRAY-03541a39-a232-4571-a81d-4df94c19c325",\n                "inputId": "ctrl-f26735ab-ddf9-4614-bf9a-12684213347c",\n                "type": "float"\n            },\n            "val": 0\n        },\n        {\n            "name": "Numeric Input",\n            "type": "input",\n            "key": "NUMERIC_INPUT",\n            "minHeight": 1,\n            "minWidth": 1,\n            "hidden": false,\n            "id": "ctrl-9368ae69-8b4c-4f3c-a74b-bb28239f8a42",\n            "layout": {\n                "x": 0,\n                "y": 5,\n                "h": 2,\n                "w": 2,\n                "i": "ctrl-9368ae69-8b4c-4f3c-a74b-bb28239f8a42",\n                "minH": 1,\n                "minW": 1,\n                "static": false\n            },\n            "param": {\n                "id": "SERIAL_TIMESERIES_SERIAL_TIMESERIES_num_readings",\n                "functionName": "SERIAL_TIMESERIES",\n                "param": "num_readings",\n                "nodeId": "SERIAL_TIMESERIES-fae97385-f983-4077-ab50-15bd03477608",\n                "inputId": "ctrl-9368ae69-8b4c-4f3c-a74b-bb28239f8a42",\n                "type": "float"\n            },\n            "val": 100\n        }\n    ]\n}',R="",f="## Notes and Documentation:\n",I="## HARDWARE required:\n\n- An Arduino microcontroller.\n",A="## Images Links :\n\n- TODO : Choose and upload images with Cloudinary\n",T={},b=void 0,g={unversionedId:"nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/SERIAL_TIMESERIES",id:"nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/SERIAL_TIMESERIES",title:"SERIAL_TIMESERIES",description:"[//]: # (Custom component imports)",source:"@site/docs/nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/SERIAL_TIMESERIES.md",sourceDirName:"nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES",slug:"/nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/",permalink:"/nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"SERIAL_SINGLE_MEASUREMENT",permalink:"/nodes/INSTRUMENTS/SERIAL/SERIAL_SINGLE_MEASUREMENT/"},next:{title:"READ_CSV",permalink:"/nodes/EXTRACTORS/FILE/READ_CSV/"}},h={},_=[{value:"Examples",id:"examples",level:2},{value:"Appendix",id:"appendix",level:2}],y={toc:_},L="wrapper";function C(e){let{components:n,...t}=e;return(0,r.kt)(L,(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{mdxType:"DocString"},c),(0,r.kt)(d.Z,{GLink:"INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/SERIAL_TIMESERIES.py",mdxType:"PythonCode"},m),(0,r.kt)(i.Z,{mdxType:"Parameters"},S),(0,r.kt)(E.Z,{mdxType:"SectionBreak"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{data:R,nodeLabel:"SERIAL_TIMESERIES",mdxType:"AppDisplay"},u),(0,r.kt)(p.default,{mdxType:"Example1"}),(0,r.kt)(E.Z,{mdxType:"SectionBreak"}),(0,r.kt)("h2",{id:"appendix"},"Appendix"),(0,r.kt)(s.Z,{index:0,folderPath:"nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/appendix/",mdxType:"AppendixSection"},f),(0,r.kt)(s.Z,{index:1,folderPath:"nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/appendix/",mdxType:"AppendixSection"},I),(0,r.kt)(s.Z,{index:2,folderPath:"nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/appendix/",mdxType:"AppendixSection"},A))}C.isMDXComponent=!0},20201:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>E});var a=t(87462),r=(t(67294),t(3905));const l={},d=void 0,i={unversionedId:"nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/examples/EX1/example",id:"nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/examples/EX1/example",title:"example",description:"ITS AN APP FOR LOADING DATA OF A SERIAL DEVICE LIKE AN ARDUINO.",source:"@site/docs/nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/examples/EX1/example.md",sourceDirName:"nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/examples/EX1",slug:"/nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/examples/EX1/example",permalink:"/nodes/INSTRUMENTS/SERIAL/SERIAL_TIMESERIES/examples/EX1/example",draft:!1,tags:[],version:"current",frontMatter:{}},o={},E=[],s={toc:E},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ITS AN APP FOR LOADING DATA OF A SERIAL DEVICE LIKE AN ARDUINO."))}m.isMDXComponent=!0}}]);