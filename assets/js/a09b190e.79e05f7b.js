"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[9160],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,y=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},17412:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={},i=void 0,c={unversionedId:"nodes/INSTRUMENTS/KEITHLEY/KEITHLEY2400/appendix/hardware",id:"nodes/INSTRUMENTS/KEITHLEY/KEITHLEY2400/appendix/hardware",title:"hardware",description:"HARDWARE required:",source:"@site/docs/nodes/INSTRUMENTS/KEITHLEY/KEITHLEY2400/appendix/hardware.md",sourceDirName:"nodes/INSTRUMENTS/KEITHLEY/KEITHLEY2400/appendix",slug:"/nodes/INSTRUMENTS/KEITHLEY/KEITHLEY2400/appendix/hardware",permalink:"/nodes/INSTRUMENTS/KEITHLEY/KEITHLEY2400/appendix/hardware",draft:!1,tags:[],version:"current",frontMatter:{}},l={},u=[{value:"HARDWARE required:",id:"hardware-required",level:2}],p={toc:u},d="wrapper";function s(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hardware-required"},"HARDWARE required:"),(0,o.kt)("p",null,"In order to record an IV curve from an electric device (LED, Solar cells, etc,..) with Flojoy, you'll need a setup with :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Source meter Keithley 2400, which is able to send voltages to the electronic device and record current from it. It has its own nodes in the Flojoy application called KEITHLEY2400."),(0,o.kt)("li",{parentName:"ul"},"A source of light that you'll use as a fake sun for calibrating the output of your solar cells. (You can also use the real sun by doing the experiment outside)"),(0,o.kt)("li",{parentName:"ul"},"A computer which is connected to the Keithley 2400 with a serial communication cable.")))}s.isMDXComponent=!0}}]);