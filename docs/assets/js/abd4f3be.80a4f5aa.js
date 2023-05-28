"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,y=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?o.createElement(y,i(i({ref:t},m),{},{components:n})):o.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="Combos",l={unversionedId:"combos",id:"combos",title:"Combos",description:"Combos allow you to assign special functionality to combinations of key presses.",source:"@site/docs/combos.md",sourceDirName:".",slug:"/combos",permalink:"/docs/combos",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/combos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"combo_layers",permalink:"/docs/combo_layers"},next:{title:"Configuring KMK",permalink:"/docs/config_and_keymap"}},s={},c=[{value:"Keycodes",id:"keycodes",level:2},{value:"Custom Combo Behavior",id:"custom-combo-behavior",level:2},{value:"Example Code",id:"example-code",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"combos"},"Combos"),(0,r.kt)("p",null,"Combos allow you to assign special functionality to combinations of key presses.\nThe two default behaviors are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chords: match keys in random order, all pressed within 50ms."),(0,r.kt)("li",{parentName:"ul"},"Sequences: match keys in order, pressed within 1s of one another.")),(0,r.kt)("p",null,"You can define combos to listen to any valid KMK key, even internal or\nfunctional keys, like HoldTap. When using internal KMK keys, be aware that the\norder of modules matters."),(0,r.kt)("p",null,"The result of a combo is another key being pressed/released; if the desired\naction isn't covered by KMK keys: create your own with ",(0,r.kt)("inlineCode",{parentName:"p"},"make_key")," and attach\ncorresponding handlers."),(0,r.kt)("p",null,"Combos may overlap, i.e. share match keys amongst each other."),(0,r.kt)("h2",{id:"keycodes"},"Keycodes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"New Keycode"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.LEADER")),(0,r.kt)("td",{parentName:"tr",align:null},"a dummy / convenience key for leader key sequences")))),(0,r.kt)("h2",{id:"custom-combo-behavior"},"Custom Combo Behavior"),(0,r.kt)("p",null,"Optional arguments that customize individual combos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fast_reset"),": If True, allows tapping every key (default for sequences);\nif False, allows holding at least one key and tapping the rest to repeatedly\nactivate the combo (default for chords)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"per_key_timeout"),": If True, reset timeout on every key press (default for\nsequences)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"),": Set the time window within which the match has to happen in ms."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"match_coord"),": If True, matches key position in the matrix.")),(0,r.kt)("h2",{id:"example-code"},"Example Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.keys import KC, make_key\nfrom kmk.modules.combos import Combos, Chord, Sequence\ncombos = Combos()\nkeyboard.modules.append(combos)\n\nmake_key(\n    names=('MYKEY',),\n    on_press=lambda *args: print('I pressed MYKEY'),\n)\n\ncombos.combos = [\n    Chord((KC.A, KC.B), KC.LSFT),\n    Chord((KC.A, KC.B, KC.C), KC.LALT),\n    Chord((0, 1), KC.ESC, match_coord=True),\n    Chord((8, 9, 10), KC.MO(4), match_coord=True),\n    Sequence((KC.LEADER, KC.A, KC.B), KC.C),\n    Sequence((KC.E, KC.F), KC.MYKEY, timeout=500, per_key_timeout=False, fast_reset=False)\n]\n")))}u.isMDXComponent=!0}}]);