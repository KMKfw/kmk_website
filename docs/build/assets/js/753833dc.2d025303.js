"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(r),c=a,y=s["".concat(d,".").concat(c)]||s[c]||u[c]||i;return r?n.createElement(y,o(o({ref:t},m),{},{components:r})):n.createElement(y,o({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},o="MIDI",l={unversionedId:"midi",id:"midi",title:"MIDI",description:"The MIDI module adds keymap entries for sending MIDI data streams. It will require adding the adafruit_midi library from the Adafruit CircuitPython Bundle to your device's folder.",source:"@site/docs/midi.md",sourceDirName:".",slug:"/midi",permalink:"/docs/midi",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/midi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Media Keys",permalink:"/docs/media_keys"},next:{title:"Modules",permalink:"/docs/modules"}},d={},p=[{value:"Keycodes",id:"keycodes",level:2}],m={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"midi"},"MIDI"),(0,a.kt)("p",null,"The MIDI module adds keymap entries for sending MIDI data streams. It will require adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"adafruit_midi")," library from the ",(0,a.kt)("a",{parentName:"p",href:"https://circuitpython.org/libraries"},"Adafruit CircuitPython Bundle")," to your device's folder.",(0,a.kt)("br",{parentName:"p"}),"\n","Add it to your keyboard's modules list with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.midi import MidiKeys\nkeyboard.modules.append(MidiKeys())\n")),(0,a.kt)("h2",{id:"keycodes"},"Keycodes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MIDI_CC(ctrl, val)")),(0,a.kt)("td",{parentName:"tr",align:null},"Sends a ControlChange message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MIDI_NOTE(note, velo)")),(0,a.kt)("td",{parentName:"tr",align:null},"Sends a Note message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MIDI_PB(val)")),(0,a.kt)("td",{parentName:"tr",align:null},"Sends a Pitch Wheel message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MIDI_PC(program)")),(0,a.kt)("td",{parentName:"tr",align:null},"Sends a Program Change message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MIDI_START()")),(0,a.kt)("td",{parentName:"tr",align:null},"Sends a Start message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.MIDI_STOP()")),(0,a.kt)("td",{parentName:"tr",align:null},"Sends a Stop message")))))}u.isMDXComponent=!0}}]);