"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4756],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l="Ctrl GUI Swap",i={unversionedId:"cg_swap",id:"cg_swap",title:"Ctrl GUI Swap",description:"This module allows to swap Ctrl with GUI and vice versa. This will reset on restart to the default implementation",source:"@site/docs/cg_swap.md",sourceDirName:".",slug:"/cg_swap",permalink:"/docs/cg_swap",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/cg_swap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CapsWord",permalink:"/docs/capsword"},next:{title:"Combos",permalink:"/docs/combos"}},p={},c=[{value:"Enabling the module",id:"enabling-the-module",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ctrl-gui-swap"},"Ctrl GUI Swap"),(0,a.kt)("p",null,"This module allows to swap Ctrl with GUI and vice versa. This will reset on restart to the default implementation"),(0,a.kt)("h2",{id:"enabling-the-module"},"Enabling the module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.cg_swap import CgSwap\n# cg_swap disabled on startup\ncg_swap = CgSwap()\n# cg_swap enabled on startup\n# cg_swap = CgSwap(cg_swap_enable=True)\nkeyboard.modules.append(cg_swap)\n\nkeyboard.keymap = [\n    [\n        KC.CG_SWAP, # swap ctrl and gui\n        KC.CG_NORM, # unswap ctrl and gui\n        KC.CG_TOGG, # toggles ctrl and gui swap\n    ],\n]\n")))}d.isMDXComponent=!0}}]);