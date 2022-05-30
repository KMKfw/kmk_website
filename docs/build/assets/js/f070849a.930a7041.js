"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3876],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),c=a,s=k["".concat(d,".").concat(c)]||k[c]||u[c]||l;return n?r.createElement(s,i(i({ref:t},m),{},{components:n})):r.createElement(s,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4622:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},d="Media Keys",p={unversionedId:"media_keys",id:"media_keys",title:"Media Keys",description:"Media keys extension adds keys for common media control keys. It can simply be",source:"@site/docs/media_keys.md",sourceDirName:".",slug:"/media_keys",permalink:"/kmk_website/docs/media_keys",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/media_keys.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lock Status",permalink:"/kmk_website/docs/lock_status"},next:{title:"MIDI",permalink:"/kmk_website/docs/midi"}},m={},u=[{value:"Keycodes",id:"keycodes",level:2}],k={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"media-keys"},"Media Keys"),(0,l.kt)("p",null,"Media keys extension adds keys for common media control keys. It can simply be\nadded to the extensions list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.media_keys import MediaKeys\nkeyboard.extensions.append(MediaKeys())\n")),(0,l.kt)("h2",{id:"keycodes"},"Keycodes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Aliases"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.AUDIO_MUTE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MUTE")),(0,l.kt)("td",{parentName:"tr",align:null},"Mute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.AUDIO_VOL_UP")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.VOLU")),(0,l.kt)("td",{parentName:"tr",align:null},"Volume Up")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.AUDIO_VOL_DOWN")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.VOLD")),(0,l.kt)("td",{parentName:"tr",align:null},"Volume Down")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_NEXT_TRACK")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MNXT")),(0,l.kt)("td",{parentName:"tr",align:null},"Next Track (Windows)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_PREV_TRACK")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MPRV")),(0,l.kt)("td",{parentName:"tr",align:null},"Previous Track (Windows)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_STOP")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MSTP")),(0,l.kt)("td",{parentName:"tr",align:null},"Stop Track (Windows)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_PLAY_PAUSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MPLY")),(0,l.kt)("td",{parentName:"tr",align:null},"Play/Pause Track")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_EJECT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.EJCT")),(0,l.kt)("td",{parentName:"tr",align:null},"Eject (macOS)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_FAST_FORWARD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MFFD")),(0,l.kt)("td",{parentName:"tr",align:null},"Next Track (macOS)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_REWIND")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MRWD")),(0,l.kt)("td",{parentName:"tr",align:null},"Previous Track (macOS)")))))}c.isMDXComponent=!0}}]);