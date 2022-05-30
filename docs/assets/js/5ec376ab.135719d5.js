"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2836],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(u,".").concat(m)]||s[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8693:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],d={},u="BLE HID",p={unversionedId:"ptBR/ble_hid",id:"ptBR/ble_hid",title:"BLE HID",description:"Conex\xf5es Bluetooth ajudam a se livrar da ma\xe7aroca de fios!",source:"@site/docs/ptBR/ble_hid.md",sourceDirName:"ptBR",slug:"/ptBR/ble_hid",permalink:"/kmk_website/docs/ptBR/ble_hid",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/ptBR/ble_hid.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADNS9800",permalink:"/kmk_website/docs/ptBR/adns9800"},next:{title:"Configurando KMK",permalink:"/kmk_website/docs/ptBR/config_and_keymap"}},c={},l=[{value:"Circuitpython",id:"circuitpython",level:2},{value:"Habilitando BLE",id:"habilitando-ble",level:2},{value:"Mudando o Nome Exibido",id:"mudando-o-nome-exibido",level:2}],s={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ble-hid"},"BLE HID"),(0,a.kt)("p",null,"Conex\xf5es Bluetooth ajudam a se livrar da ma\xe7aroca de fios!"),(0,a.kt)("h2",{id:"circuitpython"},"Circuitpython"),(0,a.kt)("p",null,"Se n\xe3o estiver usando, voc\xea precisar\xe1 da biblioteca ",(0,a.kt)("inlineCode",{parentName:"p"},"adafruit_ble"),"\nda Adafruit. Ela pode ser baixada\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_CircuitPython_BLE/tree/master/adafruit_ble"},"aqui"),".\nEla faz parte do ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_CircuitPython_Bundle"},"Pacot\xe3o Adafruit\nCircuitPython"),". Simplesmente\ncoloque-a na raiz do seu dispositivo circuitpython. Se n\xe3o tiver certeza, \xe9 o\nprimeiro diret\xf3rio com ",(0,a.kt)("inlineCode",{parentName:"p"},"main.py")," nele, e deve ser o primeiro que voc\xea abre\nquando acessa o dispositivo."),(0,a.kt)("h2",{id:"habilitando-ble"},"Habilitando BLE"),(0,a.kt)("p",null,"Para habilitar o BLE hid, modifique o ",(0,a.kt)("inlineCode",{parentName:"p"},"keyboard.go()"),'. Por padr\xe3o, o nome\nexibido ser\xe1 o nome do "flash drive", o qual por padr\xe3o \xe9 CIRCUITPY:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if __name__ == '__main__':\n    keyboard.go(hid_type=HIDModes.BLE)\n")),(0,a.kt)("h2",{id:"mudando-o-nome-exibido"},"Mudando o Nome Exibido"),(0,a.kt)("p",null,"Existem duas formas de mudar o nome exibido. O primeiro seria ",(0,a.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/welcome-to-circuitpython/the-circuitpy-drive"},"mudando o nome do\ndo\ndrive"),". O\nsegundo seria mudando ",(0,a.kt)("inlineCode",{parentName:"p"},"keyboard.go()")," assim:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if __name__ == '__main__':\n    keyboard.go(hid_type=HIDModes.BLE, ble_name='KMKeyboard')\n")))}m.isMDXComponent=!0}}]);