"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[105],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>f});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,f=m["".concat(s,".").concat(u)]||m[u]||l[u]||o;return t?n.createElement(f,i(i({ref:a},d),{},{components:t})):n.createElement(f,i({ref:a},d))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6281:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={},i="Tapdance",c={unversionedId:"ptBR/tapdance",id:"ptBR/tapdance",title:"Tapdance",description:"Tapdance \xe9 uma forma de permitir que uma tecla f\xedsica funcione como teclas/a\xe7\xf5es",source:"@site/docs/02-ptBR/tapdance.md",sourceDirName:"02-ptBR",slug:"/ptBR/tapdance",permalink:"/docs/ptBR/tapdance",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/02-ptBR/tapdance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Suporte",permalink:"/docs/ptBR/support"},next:{title:"Getting Started",permalink:"/docs/Getting_Started"}},s={},p=[],d={toc:p},m="wrapper";function l(e){let{components:a,...t}=e;return(0,r.kt)(m,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tapdance"},"Tapdance"),(0,r.kt)("p",null,'Tapdance \xe9 uma forma de permitir que uma tecla f\xedsica funcione como teclas/a\xe7\xf5es\nl\xf3gicas m\xfaltiplas sem usar camadas. Com tapdance b\xe1sico, voc\xea pode disparar\nestas macros ou teclas "aninhadas" mediante uma s\xe9rie de toques (',(0,r.kt)("em",{parentName:"p"},"taps"),") da\ntecla f\xedsica dentro de um tempo limite dado."),(0,r.kt)("p",null,'A a\xe7\xe3o "l\xf3gica" resultante funciona como qualquer outra tecla - ela pode ser\npressionada e liberada imediatamente, ou pode ser segurada. Por exemplo, tomemos\na tecla ',(0,r.kt)("inlineCode",{parentName:"p"},"KC.TD(KC.A, KC.B)"),'. Se a tecla de tapdance \xe9 pressionada e liberada\nrapidamente, a letra "a" \xe9 enviada. Se \xe9 tocada e liberada duas vezes\nrapidamente, a letra "b" ser\xe1 enviada. Se \xe9 tocada e segurada uma vez, a letra\n"a" ser\xe1 segurada at\xe9 que a tecla de tapdance seja liberada. Se \xe9 tocada e\nliberada uma vez rapidamente, e da\xed tocada e segurada (ambas as a\xe7\xf5es dentro do\ntempo limite), a letra "b" ser\xe1 mantida at\xe9 que a tecla de tapdance seja\nliberada.'),(0,r.kt)("p",null,"Para usar isso, voc\xea pode desejar definir um valor para ",(0,r.kt)("inlineCode",{parentName:"p"},"tap_time")," na\nconfigura\xe7\xe3o de seu teclado. Este valor \xe9 um inteiro indicando o tempo em\nmilissegundos, e seu valor padr\xe3o \xe9  ",(0,r.kt)("inlineCode",{parentName:"p"},"300"),"."),(0,r.kt)("p",null,"Voc\xea pode ent\xe3o desejar criar uma sequ\xeancia de teclas usando\n",(0,r.kt)("inlineCode",{parentName:"p"},"KC.TD(KC.SOMETHING, KC.SOMETHING_ELSE, MAYBE_THIS_IS_A_MACRO, WHATEVER_YO)"),", e\ncolocar em algum lugar. Os \xfanicos limites em quantas teclas pode haver numa\nsequ\xeancia s\xe3o, teoricamente, o montante de mem\xf3ria RAM na sua\nmicrocontroladora/placa, e qu\xe3o r\xe1pido voc\xea pode pressionar a tecla f\xedsica. Eis\na sua chance de usar toda sua experi\xeancia de anos e anos estra\xe7alhando o bot\xe3o\nnos videogames."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),': Correntemente nossa implementa\xe7\xe3o de tapdance t\xeam algumas limita\xe7\xf5es,\nas quais pretendemos consertar "eventualmente", mas por ora \xe9 bom notar:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'O comportamento de troca moment\xe2nea de camadas em uma sequ\xeancia de tapdance \xe9\natualmente "indefinido" na melhor hip\xf3tese, e provavelmente vai quebrar seu\nteclado. Por ora, recomendamos fortemente evitar ',(0,r.kt)("inlineCode",{parentName:"li"},"KC.MO"),", bem como qualquer\noutra tecla de modifica\xe7\xe3o de camada que use comportamento de troca\nmoment\xe2nea - ",(0,r.kt)("inlineCode",{parentName:"li"},"KC.LM"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"KC.LT"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"KC.TT"),".")),(0,r.kt)("p",null,"Eis um exemplo de tudo isso em a\xe7\xe3o:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from kmk.keycodes import KC\nfrom kmk.macros.simple import send_string\n\nkeyboard = KMKKeyboard()\n\nkeyboard.tap_time = 750\n\nEXAMPLE_TD = KC.TD(\n    KC.A,  # Tap once for "a"\n    KC.B,  # Tap twice for "b"\n    # Tap three times to send a raw string via macro\n    send_string(\'macros in a tap dance? I think yes\'),\n    # Tap four times to toggle layer index 1\n    KC.TG(1),\n)\n\nkeyboard.keymap = [[ ...., EXAMPLE_TD, ....], ....]\n')))}l.isMDXComponent=!0}}]);