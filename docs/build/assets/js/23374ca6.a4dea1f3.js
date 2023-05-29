"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8421],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={},i="Documentation index",l={unversionedId:"README",id:"README",title:"Documentation index",description:"Before you look further, you probably want to start with our getting started guide.",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Officially supported microcontrollers",permalink:"/docs/Officially_Supported_Microcontrollers"},next:{title:"ADNS9800",permalink:"/docs/adns9800"}},s={},p=[{value:"Basics",id:"basics",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Modules",id:"modules",level:2},{value:"Peripherals",id:"peripherals",level:3},{value:"Extensions",id:"extensions",level:2},{value:"Language versions",id:"language-versions",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"documentation-index"},"Documentation index"),(0,n.kt)("p",null,"Before you look further, you probably want to start with our ",(0,n.kt)("a",{parentName:"p",href:"/docs/Getting_Started"},"getting started guide"),"."),(0,n.kt)("h2",{id:"basics"},"Basics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Getting_Started"},"Getting Started")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ble_hid"},"Bluetooth HID"),": Connect keyboard to PC or mobile device using BLE"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/config_and_keymap"},"Configuring KMK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/porting_to_kmk"},"Porting to KMK"),": Creating a ",(0,n.kt)("inlineCode",{parentName:"li"},"kb.py")," file for a board"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/debugging"},"Debugging")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/keycodes"},"Keycodes"),": List of all available keycodes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Officially_Supported_Microcontrollers"},"Officially supported microcontrollers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/support"},"Support")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/contributing"},"Contributing"))),(0,n.kt)("h2",{id:"advanced"},"Advanced"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/flashing"},"Flashing instructions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/handwiring"},"Handwiring"),": Resources helpful when handwiring a keyboard circuit"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/keys"},"Keys"),": Technical explanation of key handling"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/scanners"},"Scanners"),": Setting up non-default key reading")),(0,n.kt)("h2",{id:"modules"},(0,n.kt)("a",{parentName:"h2",href:"/docs/modules"},"Modules")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/combos"},"Combos"),": Adds chords and sequences"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/layers"},"Layers"),": Adds layer support (Fn key) to allow many more keys to be put on your keyboard"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/holdtap"},"HoldTap"),": Adds support for augmented modifier keys to act as one key when tapped, and modifier when held."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/mouse_keys"},"Mouse keys"),": Adds mouse keycodes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/oneshot"},"OneShot"),": Adds support for oneshot/sticky keys."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/power"},"Power"),": Power saving features. This is mostly useful when on battery power."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/serialace"},"SerialACE"),": ","[DANGER - ",(0,n.kt)("em",{parentName:"li"},"see module README"),"]"," Arbitrary Code Execution over the data serial."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/split_keyboards"},"Split"),": Keyboards split in two. Seems ergonomic!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/tapdance"},"TapDance"),": Different key actions depending on how often it is pressed.")),(0,n.kt)("h3",{id:"peripherals"},"Peripherals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/adns9800"},"ADNS9800"),": Controlling ADNS9800 optical sensor"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/encoder"},"Encoder"),": Handling rotary encoders"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pimoroni_trackball"},"Pimoroni trackball"),": Handling a small I2C trackball made by Pimoroni")),(0,n.kt)("h2",{id:"extensions"},(0,n.kt)("a",{parentName:"h2",href:"/docs/extensions"},"Extensions")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/international"},"International"),": Adds international keycodes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/led"},"LED"),": Adds backlight support. This is for monocolor backlight, not RGB"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/lock_status"},"LockStatus"),": Exposes host-side locks like caps or num lock."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/media_keys"},"MediaKeys"),": Adds support for media keys such as volume"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/rgb"},"RGB"),": RGB lighting for underglow. Will work on most matrix RGB as will be treated the same as underglow."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/extension_statusled"},"Status LED"),": Indicates which layer you are on with an array of single leds.")),(0,n.kt)("h2",{id:"language-versions"},"Language versions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/ja/Getting_Started.md"},"Japanese getting started")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/ptBR"},"Brazilian Portuguese"))))}u.isMDXComponent=!0}}]);