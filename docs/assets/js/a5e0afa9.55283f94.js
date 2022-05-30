"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4626],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},616:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},p="Power(save)",s={unversionedId:"power",id:"power",title:"Power(save)",description:"This module allows you to save power and is targeted to Bluetooth/battery",source:"@site/docs/power.md",sourceDirName:".",slug:"/power",permalink:"/kmk_website/docs/power",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/power.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Porting to KMK",permalink:"/kmk_website/docs/porting_to_kmk"},next:{title:"Micro-Controladores Oficialmente Suportados",permalink:"/kmk_website/docs/ptBR/Officially_Supported_Microcontrollers"}},u={},c=[{value:"Keycodes",id:"keycodes",level:2},{value:"Optional extra power saving",id:"optional-extra-power-saving",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"powersave"},"Power(save)"),(0,a.kt)("p",null,"This module allows you to save power and is targeted to Bluetooth/battery\nbased keyboards."),(0,a.kt)("h2",{id:"keycodes"},"Keycodes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.PS_TOG ")),(0,a.kt)("td",{parentName:"tr",align:null},"Toggles powersave on/off")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.PS_ON ")),(0,a.kt)("td",{parentName:"tr",align:null},"Turns powersave on")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.PS_OFF ")),(0,a.kt)("td",{parentName:"tr",align:null},"Turns powersave off")))),(0,a.kt)("h1",{id:"enabling-the-extension"},"Enabling the extension"),(0,a.kt)("p",null,"To turn on basic power saving, this is all that is required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.power import Power\n\npower = Power()\n\nkeyboard.modules.append(power)\n\n")),(0,a.kt)("h2",{id:"optional-extra-power-saving"},"Optional extra power saving"),(0,a.kt)("p",null,"On supported boards, such as the nice!nano, power can be cut on VCC saving extra\npower if OLEDS or RGBs are installed. These drain power even when off, so this\nwill prevent them from doing so. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.power import Power\n\n# Your kb.py may already have this set. If not, add it like this\n# import board\n# keyboard.powersave_pin = board.P0_13\npower = Power(powersave_pin=keyboard.powersave_pin)\n\nkeyboard.modules.append(power)\n\n")),(0,a.kt)("p",null,"Make sure that the pin is correct for your microcontroller. The example is for\nthe nice!nano. Not all microcontrollers have this feature and this can be omitted\nif not and there will simply be less power saving."))}m.isMDXComponent=!0}}]);