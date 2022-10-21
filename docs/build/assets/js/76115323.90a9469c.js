"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5593],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return b}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3803:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],l={},s="boot.py",u={unversionedId:"boot",id:"boot",title:"boot.py",description:"boot.py lives in the root of your keyboard when mounted as a storage device.",source:"@site/docs/boot.md",sourceDirName:".",slug:"/boot",permalink:"/docs/boot",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/boot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BLE HID",permalink:"/docs/ble_hid"},next:{title:"CapsWord",permalink:"/docs/capsword"}},c={},d=[{value:"Hiding device storage",id:"hiding-device-storage",level:2},{value:"Using your keyboard before the OS loads",id:"using-your-keyboard-before-the-os-loads",level:2},{value:"Disabling serial communication",id:"disabling-serial-communication",level:2},{value:"Example code",id:"example-code",level:2}],p={toc:d};function b(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bootpy"},"boot.py"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boot.py")," lives in the root of your keyboard when mounted as a storage device.\nThere is a more detailed explanation in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.circuitpython.org/en/latest/README.html"},"circuit python docs"),",\nhowever there are some common use cases for your keyboard listed here."),(0,i.kt)("h2",{id:"hiding-device-storage"},"Hiding device storage"),(0,i.kt)("p",null,"You can hide your device from showing up as a USB storage by default (this can be overridden\nat startup if desired, per the example code further down this page)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"storage.disable_usb_drive()\n")),(0,i.kt)("h2",{id:"using-your-keyboard-before-the-os-loads"},"Using your keyboard before the OS loads"),(0,i.kt)("p",null,"You can make your keyboard work in your computer's BIOS and bootloader (useful if you dual-boot)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"usb_hid.enable(boot_device=1)\n")),(0,i.kt)("h2",{id:"disabling-serial-communication"},"Disabling serial communication"),(0,i.kt)("p",null,"By default, you can connect to your board's serial console, which can be useful for debugging,\nbut may not be desired for everyday use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Equivalent to usb_cdc.enable(console=False, data=False)\nusb_cdc.disable()\n")),(0,i.kt)("h2",{id:"example-code"},"Example code"),(0,i.kt)("p",null,"Below is a fully working example, which disables USB storage, CDC and enables BIOS mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import supervisor\nimport board\nimport digitalio\nimport storage\nimport usb_cdc\nimport usb_hid\n\nfrom kb import KMKKeyboard\nfrom kmk.scanners import DiodeOrientation\n\n\n# If this key is held during boot, don't run the code which hides the storage and disables serial\n# This will use the first row/col pin. Feel free to change it if you want it to be another pin\ncol = digitalio.DigitalInOut(KMKKeyboard.col_pins[0])\nrow = digitalio.DigitalInOut(KMKKeyboard.row_pins[0])\n\nif KMKKeyboard.diode_orientation == DiodeOrientation.COLUMNS:\n    col.switch_to_output(value=True)\n    row.switch_to_input(pull=digitalio.Pull.DOWN)\nelse:\n    col.switch_to_input(pull=digitalio.Pull.DOWN)\n    row.switch_to_output(value=True)\n\nif not row.value:\n    storage.disable_usb_drive()\n    # Equivalent to usb_cdc.enable(console=False, data=False)\n    usb_cdc.disable()\n    usb_hid.enable(boot_device=1)\n\nrow.deinit()\ncol.deinit()\n")))}b.isMDXComponent=!0}}]);