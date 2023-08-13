"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},l="Officially supported microcontrollers",i={unversionedId:"Officially_Supported_Microcontrollers",id:"Officially_Supported_Microcontrollers",title:"Officially supported microcontrollers",description:"While most CircuitPython devices are great for hand wired keyboards, most",source:"@site/docs/Officially_Supported_Microcontrollers.md",sourceDirName:".",slug:"/Officially_Supported_Microcontrollers",permalink:"/docs/Officially_Supported_Microcontrollers",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/Officially_Supported_Microcontrollers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OLED Display",permalink:"/docs/OLED_Display"},next:{title:"Documentation index",permalink:"/docs/"}},p={},u=[{value:"nice!nano",id:"nicenano",level:2},{value:"Pre-compiling KMK for nice!nano",id:"pre-compiling-kmk-for-nicenano",level:3},{value:"ItsyBitsy M4 Express",id:"itsybitsy-m4-express",level:2},{value:"RP2040",id:"rp2040",level:2},{value:"Adafruit ItsyBitsy nRF52840 Express",id:"adafruit-itsybitsy-nrf52840-express",level:2},{value:"Other microcontrollers",id:"other-microcontrollers",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"officially-supported-microcontrollers"},"Officially supported microcontrollers"),(0,o.kt)("p",null,"While most CircuitPython devices are great for hand wired keyboards, most\nkeyboards are designed to accept a Pro Micro. The boards listed below either\nare, or can be adapted to that pinout to use common keyboards already on the market."),(0,o.kt)("h2",{id:"nicenano"},"nice!nano"),(0,o.kt)("p",null,"Features include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pro Micro pinout"),(0,o.kt)("li",{parentName:"ul"},"Both USB HID and Bluetooth support"),(0,o.kt)("li",{parentName:"ul"},"Can do Bluetooth split keyboards with no wires at all"),(0,o.kt)("li",{parentName:"ul"},"Has battery support including charging")),(0,o.kt)("p",null,"Downsides"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"$25 USD per microcontroller at most retailers"),(0,o.kt)("li",{parentName:"ul"},"Not enough space to run KMK without compiling")),(0,o.kt)("h3",{id:"pre-compiling-kmk-for-nicenano"},"Pre-compiling KMK for nice!nano"),(0,o.kt)("p",null,"As the nice!nano has limited flash memory you'll need to compile KMK. To do that you'll need to download and install the ",(0,o.kt)("a",{parentName:"p",href:"https://adafruit-circuit-python.s3.amazonaws.com/index.html?prefix=bin/mpy-cross/"},"compatible mpy-cross")," for your Operating System. Don't forget to add it to your PATH, test by running ",(0,o.kt)("inlineCode",{parentName:"p"},"mpy-cross")," from a shell (Powershell, Bash, Fish, etc). Once that's set up, run either ",(0,o.kt)("inlineCode",{parentName:"p"},"make compile")," (if you have ",(0,o.kt)("inlineCode",{parentName:"p"},"make"),") or ",(0,o.kt)("inlineCode",{parentName:"p"},"python util/compile.py"),"to generate the ",(0,o.kt)("inlineCode",{parentName:"p"},".mpy")," versions of KMK files. Then copy the whole compiled ",(0,o.kt)("inlineCode",{parentName:"p"},"kmk/")," directory to your keyboard."),(0,o.kt)("p",null,"Common Retailers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://boardsource.xyz/store/5f4a1733bbaa5c635b83ed67"},"Boardsource")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nicekeyboards.com/nice-nano/"},"Nice Keyboards"))),(0,o.kt)("h2",{id:"itsybitsy-m4-express"},"ItsyBitsy M4 Express"),(0,o.kt)("p",null,"Features include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Affordable at $15 USD"),(0,o.kt)("li",{parentName:"ul"},"Can run most features of KMK including RGB")),(0,o.kt)("p",null,"Downsides"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Needs to be adapted to work with Pro Micro pinout keyboards. You can find a tutorial and files for such an adapter ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/tree/master/hardware"},"in our github repo under /hardware"))),(0,o.kt)("p",null,"Common Retailers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/3800"},"Adafruit"))),(0,o.kt)("h2",{id:"rp2040"},"RP2040"),(0,o.kt)("p",null,"Features include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Very affordable"),(0,o.kt)("li",{parentName:"ul"},"Very powerful for the price")),(0,o.kt)("p",null,"Downsides"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Little support for keyboard kits")),(0,o.kt)("p",null,"Common Retailers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.adafruit.com/pico?src=raspberrypi"},"Adafruit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.sparkfun.com/products/17829?src=raspberrypi"},"SparkFun"))),(0,o.kt)("h2",{id:"adafruit-itsybitsy-nrf52840-express"},"Adafruit ItsyBitsy nRF52840 Express"),(0,o.kt)("p",null,"Features include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Both USB HID and Bluetooth support"),(0,o.kt)("li",{parentName:"ul"},"More affordable than the nice!nano at only $18")),(0,o.kt)("p",null,"Downsides"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Needs to be adapted to work with Pro Micro pinout keyboards. You can find a tutorial and files for such an adapter ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/tree/master/hardware"},"in our github repo under /hardware")),(0,o.kt)("li",{parentName:"ul"},"No battery support without addon board like ",(0,o.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/2124"},"this one by adafruit")," ")),(0,o.kt)("p",null,"Common Retailers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/4481"},"Adafruit"))),(0,o.kt)("h2",{id:"other-microcontrollers"},"Other microcontrollers"),(0,o.kt)("p",null,"What you'll need to have at minimum"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CircuitPython"),(0,o.kt)("li",{parentName:"ul"},"256KB of flash storage"),(0,o.kt)("li",{parentName:"ul"},"HID over USB and/or Bluetooth.")),(0,o.kt)("p",null,"Please keep in mind that KMK relies on circuitpythons ability to use bluetooth low energy with any given controller."))}d.isMDXComponent=!0}}]);