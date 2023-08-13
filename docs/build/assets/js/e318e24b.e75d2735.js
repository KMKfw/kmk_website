"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Extensions",s={unversionedId:"extensions",id:"extensions",title:"Extensions",description:"Extensions add features that change the experience, but not the core features of",source:"@site/docs/extensions.md",sourceDirName:".",slug:"/extensions",permalink:"/docs/extensions",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/extensions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stringy Keymaps",permalink:"/docs/extension_stringy_keymaps"},next:{title:"Flashing Instructions",permalink:"/docs/flashing"}},l={},c=[{value:"Core Extensions",id:"core-extensions",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extensions"},"Extensions"),(0,a.kt)("p",null,"Extensions add features that change the experience, but not the core features of\nthe keyboard. They are meant to be easy to add, and create your own. These live in\na sandbox to help prevent any bad code from crashing your keyboard."),(0,a.kt)("h2",{id:"core-extensions"},"Core Extensions"),(0,a.kt)("p",null,"These extensions are provided in all builds and can be enabled. Currently offered\nextensions are"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/international"},"International"),": Adds international keycodes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/led"},"LED"),": Adds backlight support. This is for monocolor backlight, not RGB"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/lock_status"},"LockStatus"),": Exposes host-side locks like caps or num lock."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/media_keys"},"MediaKeys"),": Adds support for media keys such as volume"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"OLED_display.md"},"OLED Displays"),": Support for common OLED displays."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/rgb"},"RGB"),": RGB lighting for underglow. Will work on most matrix RGB as will\nbe treated the same as underglow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/extension_statusled"},"Status LED"),": Indicates which layer you are on with an array of single leds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"extension_stringy_keymaps"},"Stringy Keymaps"),": Enables referring to keys by ",(0,a.kt)("inlineCode",{parentName:"li"},"'NAME'")," rather than ",(0,a.kt)("inlineCode",{parentName:"li"},"KC.NAME"))))}d.isMDXComponent=!0}}]);