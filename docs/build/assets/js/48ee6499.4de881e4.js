"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),p=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?o.createElement(f,a(a({ref:t},s),{},{components:r})):o.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const l={},a="Officially supported microcontrollers",i={unversionedId:"Officially_Supported_Microcontrollers",id:"Officially_Supported_Microcontrollers",title:"Officially supported microcontrollers",description:"While most CircuitPython devices are great for hand wired keyboards, most",source:"@site/docs/Officially_Supported_Microcontrollers.md",sourceDirName:".",slug:"/Officially_Supported_Microcontrollers",permalink:"/docs/Officially_Supported_Microcontrollers",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/Officially_Supported_Microcontrollers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/Getting_Started"},next:{title:"Documentation index",permalink:"/docs/"}},u={},p=[{value:"nice!nano",id:"nicenano",level:2},{value:"Pre-compiling KMK for nice!nano (or any other microcontroller with limited flash)",id:"pre-compiling-kmk-for-nicenano-or-any-other-microcontroller-with-limited-flash",level:3},{value:"ItsyBitsy M4 Express",id:"itsybitsy-m4-express",level:2},{value:"RP2040",id:"rp2040",level:2},{value:"Adafruit ItsyBitsy nRF52840 Express",id:"adafruit-itsybitsy-nrf52840-express",level:2},{value:"Other microcontrollers",id:"other-microcontrollers",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"officially-supported-microcontrollers"},"Officially supported microcontrollers"),(0,n.kt)("p",null,"While most CircuitPython devices are great for hand wired keyboards, most\nkeyboards are designed to accept a Pro Micro. The boards listed below either\nare, or can be adapted to that pinout to use common keyboards already on the market."),(0,n.kt)("h2",{id:"nicenano"},"nice!nano"),(0,n.kt)("p",null,"Features include"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pro Micro pinout"),(0,n.kt)("li",{parentName:"ul"},"Both USB HID and Bluetooth support"),(0,n.kt)("li",{parentName:"ul"},"Can do Bluetooth split keyboards with no wires at all"),(0,n.kt)("li",{parentName:"ul"},"Has battery support including charging")),(0,n.kt)("p",null,"Downsides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"$25 USD per microcontroller at most retailers"),(0,n.kt)("li",{parentName:"ul"},"Not enough space to run KMK without compiling")),(0,n.kt)("h3",{id:"pre-compiling-kmk-for-nicenano-or-any-other-microcontroller-with-limited-flash"},"Pre-compiling KMK for nice!nano (or any other microcontroller with limited flash)"),(0,n.kt)("p",null,"As the nice!nano has limited flash memory you'll need to use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/Getting_Started#pre-compiling-kmk-for-faster-boot-times-or-microcontrollers-with-limited-flash"},"compiled KMK"),"."),(0,n.kt)("p",null,"Common Retailers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://boardsource.xyz/store/5f4a1733bbaa5c635b83ed67"},"Boardsource")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nicekeyboards.com/nice-nano/"},"Nice Keyboards"))),(0,n.kt)("h2",{id:"itsybitsy-m4-express"},"ItsyBitsy M4 Express"),(0,n.kt)("p",null,"Features include"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Affordable at $15 USD"),(0,n.kt)("li",{parentName:"ul"},"Can run most features of KMK including RGB")),(0,n.kt)("p",null,"Downsides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Needs to be adapted to work with Pro Micro pinout keyboards. You can find a tutorial and files for such an adapter ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/tree/master/hardware"},"in our github repo under /hardware"))),(0,n.kt)("p",null,"Common Retailers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/3800"},"Adafruit"))),(0,n.kt)("h2",{id:"rp2040"},"RP2040"),(0,n.kt)("p",null,"Features include"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Very affordable"),(0,n.kt)("li",{parentName:"ul"},"Very powerful for the price")),(0,n.kt)("p",null,"Downsides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Little support for keyboard kits")),(0,n.kt)("p",null,"Common Retailers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.adafruit.com/pico?src=raspberrypi"},"Adafruit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sparkfun.com/products/17829?src=raspberrypi"},"SparkFun"))),(0,n.kt)("h2",{id:"adafruit-itsybitsy-nrf52840-express"},"Adafruit ItsyBitsy nRF52840 Express"),(0,n.kt)("p",null,"Features include"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Both USB HID and Bluetooth support"),(0,n.kt)("li",{parentName:"ul"},"More affordable than the nice!nano at only $18")),(0,n.kt)("p",null,"Downsides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Needs to be adapted to work with Pro Micro pinout keyboards. You can find a tutorial and files for such an adapter ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/tree/master/hardware"},"in our github repo under /hardware")),(0,n.kt)("li",{parentName:"ul"},"No battery support without addon board like ",(0,n.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/2124"},"this one by adafruit")," ")),(0,n.kt)("p",null,"Common Retailers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/4481"},"Adafruit"))),(0,n.kt)("h2",{id:"other-microcontrollers"},"Other microcontrollers"),(0,n.kt)("p",null,"What you'll need to have at minimum"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CircuitPython"),(0,n.kt)("li",{parentName:"ul"},"256KB of flash storage"),(0,n.kt)("li",{parentName:"ul"},"HID over USB and/or Bluetooth.")),(0,n.kt)("p",null,"Please keep in mind that KMK relies on circuitpythons ability to use bluetooth low energy with any given controller."))}d.isMDXComponent=!0}}]);