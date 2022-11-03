"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[542],{3905:function(n,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var t=r(7294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function i(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function a(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function p(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var l=t.createContext({}),s=function(n){var e=t.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):a(a({},e),n)),r},c=function(n){var e=s(n.components);return t.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,i=n.originalType,l=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?t.createElement(f,a(a({ref:e},c),{},{components:r})):t.createElement(f,a({ref:e},c))}));function m(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=n,p.mdxType="string"==typeof n?n:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3797:function(n,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],p={},l="Quickpin",s={unversionedId:"quickpin",id:"quickpin",title:"Quickpin",description:"Quickpin helps devs quickly translate pinouts between boards of similar footprint.",source:"@site/docs/quickpin.md",sourceDirName:".",slug:"/quickpin",permalink:"/docs/quickpin",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/quickpin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Power(save)",permalink:"/docs/power"},next:{title:"RapidFire",permalink:"/docs/rapidfire"}},c={},u=[{value:"Supported footprints/boards",id:"supported-footprintsboards",level:2},{value:"Pro micro footprint pinout",id:"pro-micro-footprint-pinout",level:2},{value:"Example",id:"example",level:2},{value:"Porting from AVR pro micro",id:"porting-from-avr-pro-micro",level:2},{value:"Adding boards to quickpin support",id:"adding-boards-to-quickpin-support",level:2}],d={toc:u};function m(n){var e=n.components,p=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickpin"},"Quickpin"),(0,i.kt)("p",null,"Quickpin helps devs quickly translate pinouts between boards of similar footprint.\nThis lets you write a single ",(0,i.kt)("inlineCode",{parentName:"p"},"kb.py")," that can be swapped between\nmicrocontrollers with only a single line change and less mistakes. "),(0,i.kt)("h2",{id:"supported-footprintsboards"},"Supported footprints/boards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pro micro footprint",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sparkfun Pro micro RP2040"),(0,i.kt)("li",{parentName:"ul"},"Boardsource Blok"),(0,i.kt)("li",{parentName:"ul"},"Nice!nano")))),(0,i.kt)("h2",{id:"pro-micro-footprint-pinout"},"Pro micro footprint pinout"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pro micro footprint pins",src:r(4203).Z,width:"359",height:"544"})),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In this example, we are converting a Boardsource 3x4 from a hard pinned\nnice!nano to a controller agnostic pinout."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"row_pins = (board.P1_15, board.P0_02, board.P0_29)\ncol_pins = (board.P0_09, board.P0_10, board.P1_11, board.P1_13)\n")),(0,i.kt)("p",null,"Converts to the following. Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"nice_nano")," can be subbed for\n",(0,i.kt)("inlineCode",{parentName:"p"},"boardsource_blok")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"sparkfun_promicro_rp2040"),", or any other board sharing\nthis pinout."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.quickpin.pro_micro.nice_nano import pinout as pins\n\nrow_pins = (pins[16], pins[17], pins[18])\ncol_pins = (pins[12], pins[13], pins[14], pins[15])\n")),(0,i.kt)("h2",{id:"porting-from-avr-pro-micro"},"Porting from AVR pro micro"),(0,i.kt)("p",null,"An additional added convenience for translating from other firmwares with AVR\npro micros has also been added to speed up porting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.quickpin.pro_micro.nice_nano import pinout as pins\nfrom kmk.quickpin.pro_Micro.avr_promicro import translate as avr\n\nrow_pins = (\n    pins[avr['F7']],\n    pins[avr['F6']],\n    pins[avr['F5']],\n)\ncol_pins = (\n    pins[avr['B6']],\n    pins[avr['B2']],\n    pins[avr['B3']],\n    pins[avr['B1']],\n)\n")),(0,i.kt)("h2",{id:"adding-boards-to-quickpin-support"},"Adding boards to quickpin support"),(0,i.kt)("p",null,"Quickpin format is simply a list of pins in order of all through hole pins,\ngoing anticlockwise starting at the top left. The orientation should be with the\nchips facing toward you, with USB facing the top. If this isn't appliable, or\notherwise is not true, it should be stated in a comment in the file. Any pin\nthat is not addressable in software should be left as ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," to fill the space,\nand align pins correctly for all boards. All boards should be stored in\n",(0,i.kt)("inlineCode",{parentName:"p"},"kmk/quickpin/<footprint>/boardname.py"),"."),(0,i.kt)("p",null,"Pro Micro RP2040 shown as an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import board\n\npinout = [\n    board.TX,\n    board.RX,\n    None,  # GND\n    None,  # GND\n    board.D2,\n    board.D3,\n    board.D4,\n    board.D5,\n    board.D6,\n    board.D7,\n    board.D8,\n    board.D9,\n    board.D21,\n    board.MOSI,\n    board.MISO,\n    board.SCK,\n    board.D26,\n    board.D27,\n    board.D28,\n    board.D29,\n    None,  # 3.3v\n    None,  # RST\n    None,  # GND\n    None,  # RAW\n]\n\n")))}m.isMDXComponent=!0},4203:function(n,e,r){e.Z=r.p+"assets/images/pro_micro_pinout-dda893f2750aa0d840b62acc142d76d2.png"}}]);