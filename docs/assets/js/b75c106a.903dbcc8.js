"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[542],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?t.createElement(f,a(a({ref:n},c),{},{components:r})):t.createElement(f,a({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3797:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var t=r(7462),o=(r(7294),r(3905));const i={},a="Quickpin",p={unversionedId:"quickpin",id:"quickpin",title:"Quickpin",description:"Quickpin helps devs quickly translate pinouts between boards of similar footprint.",source:"@site/docs/quickpin.md",sourceDirName:".",slug:"/quickpin",permalink:"/docs/quickpin",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/quickpin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Power(save)",permalink:"/docs/power"},next:{title:"RapidFire",permalink:"/docs/rapidfire"}},l={},s=[{value:"Supported footprints/boards",id:"supported-footprintsboards",level:2},{value:"Pro micro footprint pinout",id:"pro-micro-footprint-pinout",level:2},{value:"Example",id:"example",level:2},{value:"Porting from AVR pro micro",id:"porting-from-avr-pro-micro",level:2},{value:"Adding boards to quickpin support",id:"adding-boards-to-quickpin-support",level:2}],c={toc:s},d="wrapper";function u(e){let{components:n,...i}=e;return(0,o.kt)(d,(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickpin"},"Quickpin"),(0,o.kt)("p",null,"Quickpin helps devs quickly translate pinouts between boards of similar footprint.\nThis lets you write a single ",(0,o.kt)("inlineCode",{parentName:"p"},"kb.py")," that can be swapped between\nmicrocontrollers with only a single line change and less mistakes. "),(0,o.kt)("h2",{id:"supported-footprintsboards"},"Supported footprints/boards"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pro micro footprint",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sparkfun Pro micro RP2040 ",(0,o.kt)("a",{parentName:"li",href:"https://www.sparkfun.com/products/18288"},"Sparkfun")),(0,o.kt)("li",{parentName:"ul"},"Boardsource Blok ",(0,o.kt)("a",{parentName:"li",href:"https://boardsource.xyz/store/628b95b494dfa308a6581622"},"Boardsource")),(0,o.kt)("li",{parentName:"ul"},"Nice!nano ",(0,o.kt)("a",{parentName:"li",href:"https://nicekeyboards.com/nice-nano/"},"Nicekeyboards")),(0,o.kt)("li",{parentName:"ul"},"Adafruit KB2040 ",(0,o.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/5302"},"Adafruit")),(0,o.kt)("li",{parentName:"ul"},"0xCB Helios ",(0,o.kt)("a",{parentName:"li",href:"https://keeb.supply/products/0xcb-helios"},"KeebSupply"))))),(0,o.kt)("h2",{id:"pro-micro-footprint-pinout"},"Pro micro footprint pinout"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pro micro footprint pins",src:r(4396).Z,width:"359",height:"544"})),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In this example, we are converting a Boardsource 3x4 from a hard pinned\nnice!nano to a controller agnostic pinout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"row_pins = (board.P1_15, board.P0_02, board.P0_29)\ncol_pins = (board.P0_09, board.P0_10, board.P1_11, board.P1_13)\n")),(0,o.kt)("p",null,"Converts to the following. Notice that ",(0,o.kt)("inlineCode",{parentName:"p"},"nice_nano")," can be subbed for\n",(0,o.kt)("inlineCode",{parentName:"p"},"boardsource_blok")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"sparkfun_promicro_rp2040"),", or any other board sharing\nthis pinout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.quickpin.pro_micro.nice_nano import pinout as pins\n\nrow_pins = (pins[16], pins[17], pins[18])\ncol_pins = (pins[12], pins[13], pins[14], pins[15])\n")),(0,o.kt)("h2",{id:"porting-from-avr-pro-micro"},"Porting from AVR pro micro"),(0,o.kt)("p",null,"An additional added convenience for translating from other firmwares with AVR\npro micros has also been added to speed up porting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.quickpin.pro_micro.nice_nano import pinout as pins\nfrom kmk.quickpin.pro_Micro.avr_promicro import translate as avr\n\nrow_pins = (\n    pins[avr['F7']],\n    pins[avr['F6']],\n    pins[avr['F5']],\n)\ncol_pins = (\n    pins[avr['B6']],\n    pins[avr['B2']],\n    pins[avr['B3']],\n    pins[avr['B1']],\n)\n")),(0,o.kt)("h2",{id:"adding-boards-to-quickpin-support"},"Adding boards to quickpin support"),(0,o.kt)("p",null,"Quickpin format is simply a list of pins in order of all through hole pins,\ngoing anticlockwise starting at the top left. The orientation should be with the\nchips facing toward you, with USB facing the top. If this isn't appliable, or\notherwise is not true, it should be stated in a comment in the file. Any pin\nthat is not addressable in software should be left as ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," to fill the space,\nand align pins correctly for all boards. All boards should be stored in\n",(0,o.kt)("inlineCode",{parentName:"p"},"kmk/quickpin/<footprint>/boardname.py"),"."),(0,o.kt)("p",null,"Pro Micro RP2040 shown as an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import board\n\npinout = [\n    board.TX,\n    board.RX,\n    None,  # GND\n    None,  # GND\n    board.D2,\n    board.D3,\n    board.D4,\n    board.D5,\n    board.D6,\n    board.D7,\n    board.D8,\n    board.D9,\n    board.D21,\n    board.MOSI,\n    board.MISO,\n    board.SCK,\n    board.D26,\n    board.D27,\n    board.D28,\n    board.D29,\n    None,  # 3.3v\n    None,  # RST\n    None,  # GND\n    None,  # RAW\n]\n\n")))}u.isMDXComponent=!0},4396:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/pro_micro_pinout-dda893f2750aa0d840b62acc142d76d2.png"}}]);