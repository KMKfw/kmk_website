"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5775],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1453:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},i="Handwire keyboards",c={unversionedId:"handwiring",id:"handwiring",title:"Handwire keyboards",description:"This guide will not talk about the physical wiring. Check out our",source:"@site/docs/handwiring.md",sourceDirName:".",slug:"/handwiring",permalink:"/docs/handwiring",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/handwiring.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flashing Instructions",permalink:"/docs/flashing"},next:{title:"International Keycodes",permalink:"/docs/international"}},l={},p=[],u={toc:p},s="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"handwire-keyboards"},"Handwire keyboards"),(0,o.kt)("p",null,"This guide will not talk about the physical wiring. Check out our\n",(0,o.kt)("a",{parentName:"p",href:"/docs/Officially_Supported_Microcontrollers"},"recommended microcontrollers")," and\nfollow the amazing guide for that ",(0,o.kt)("a",{parentName:"p",href:"https://docs.qmk.fm/#/hand_wire"},"here"),". That\nguide can be followed until you are setting up the firmware. After wiring the\nkeyboard, you can refer to our porting guide ",(0,o.kt)("a",{parentName:"p",href:"/docs/porting_to_kmk"},"here")))}d.isMDXComponent=!0}}]);