"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="RapidFire",o={unversionedId:"rapidfire",id:"rapidfire",title:"RapidFire",description:"The RapidFire module lets a user send repeated key taps while a key is held.",source:"@site/docs/rapidfire.md",sourceDirName:".",slug:"/rapidfire",permalink:"/docs/rapidfire",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/rapidfire.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quickpin",permalink:"/docs/quickpin"},next:{title:"RGB/Underglow/NeoPixel",permalink:"/docs/rgb"}},d={},p=[{value:"Keycodes",id:"keycodes",level:2},{value:"Usage",id:"usage",level:2},{value:"Example Code",id:"example-code",level:3}],m={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rapidfire"},"RapidFire"),(0,r.kt)("p",null,"The RapidFire module lets a user send repeated key taps while a key is held."),(0,r.kt)("p",null,"Some instances where this may be useful are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MMOs and other games where you are encouraged to repeatedly spam a key"),(0,r.kt)("li",{parentName:"ul"},"More responsive volume up and volume down"),(0,r.kt)("li",{parentName:"ul"},"Faster cursor key navigation"),(0,r.kt)("li",{parentName:"ul"},"Combine with the ",(0,r.kt)("a",{parentName:"li",href:"/docs/mouse_keys"},"Mouse Keys")," module to create rapid-fire mouse clicks"),(0,r.kt)("li",{parentName:"ul"},"Anywhere else you may need an ergonomic alternative to repetitive key tapping")),(0,r.kt)("h2",{id:"keycodes"},"Keycodes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RF(kc)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Repeatedly sends the specified keycode while pressed")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Each repeat counts as one full cycle of pressing and releasing. RapidFire works with chording (i.e., holding Shift plus a RapidFire key will repeatedly send the shifted version of that RapidFire key) and chaining (i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"KC.RF(KC.LSHIFT(KC.A))"),". Multiple RapidFire keys can be held down at the same time, and their timers work independently of each other."),(0,r.kt)("p",null,"The RapidFire keycode has a few different options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"interval")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"100")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The time between key taps sent in milliseconds. Note: ",(0,r.kt)("inlineCode",{parentName:"td"},"10")," appears to be the minimum effective value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"timeout")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"200")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of time in milliseconds the key must be held down before RapidFire activates. Useful if you want to be able to type with keys that have a low ",(0,r.kt)("inlineCode",{parentName:"td"},"interval")," value. A value of ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," will result in no waiting period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"enable_interval_randomization")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable randomizing the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"interval"),". Useful for making the repetitive input look human in instances where you may be flagged as a bot otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"randomization_magnitude")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"15")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"enable_interval_randomization")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"True"),", the time between key taps sent will be ",(0,r.kt)("inlineCode",{parentName:"td"},"interval")," plus or minus a random value up to this amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"toggle")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"True"),", activating RapidFire will toggle it on or off. Useful if you don't want to have to keep the button held. Set ",(0,r.kt)("inlineCode",{parentName:"td"},"timeout")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," if you would like to toggle on tap.")))),(0,r.kt)("h3",{id:"example-code"},"Example Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.rapidfire import RapidFire\n\nkeyboard.modules.append(RapidFire())\n\n# After 200 milliseconds, repeatedly send Shift+A every 75-125 milliseconds while the button is held\nSPAM_A = KC.RF(KC.LSFT(KC.A), timeout=200, interval=100, enable_interval_randomization=True, randomization_magnitude=25)\n# Immediately toggle repeatedly sending Enter every 50 milliseconds on tap\nSPAM_ENTER = KC.RF(KC.ENT, toggle=True, timeout=0, interval=50)\n\n\nkeyboard.keymap = [[\n    SPAM_A, SPAM_ENTER\n    ]]\n\n")))}u.isMDXComponent=!0}}]);