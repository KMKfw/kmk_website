"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1872],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),k=r,N=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7482:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},d="RGB/Underglow/Neopixel",p={unversionedId:"ptBR/rgb",id:"ptBR/rgb",title:"RGB/Underglow/Neopixel",description:"Quer um teclado brilhante? Coloque alguma luz nele!",source:"@site/docs/ptBR/rgb.md",sourceDirName:"ptBR",slug:"/ptBR/rgb",permalink:"/docs/ptBR/rgb",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/ptBR/rgb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Economia de Energia",permalink:"/docs/ptBR/power"},next:{title:"Sequ\xeancias",permalink:"/docs/ptBR/sequences"}},m={},u=[{value:"CircuitPython",id:"circuitpython",level:2},{value:"Sele\xe7\xe3o de Cores",id:"sele\xe7\xe3o-de-cores",level:3},{value:"Habilitando a Extens\xe3o",id:"habilitando-a-extens\xe3o",level:2},{value:"Keycodes",id:"keycodes",level:2},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:2},{value:"Configura\xe7\xe3o da Anima\xe7\xe3o Embutida",id:"configura\xe7\xe3o-da-anima\xe7\xe3o-embutida",level:2},{value:"Fun\xe7\xf5es",id:"fun\xe7\xf5es",level:2},{value:"Acesso Direto \xe0s Vari\xe1veis",id:"acesso-direto-\xe0s-vari\xe1veis",level:2},{value:"Modifica\xe7\xe3o do Hardware",id:"modifica\xe7\xe3o-do-hardware",level:2},{value:"Consertando os Problemas",id:"consertando-os-problemas",level:2},{value:"Cores Incorretas",id:"cores-incorretas",level:3},{value:"Luzes n\xe3o ligam",id:"luzes-n\xe3o-ligam",level:3}],s={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rgbunderglowneopixel"},"RGB/Underglow/Neopixel"),(0,l.kt)("p",null,"Quer um teclado brilhante? Coloque alguma luz nele!"),(0,l.kt)("h2",{id:"circuitpython"},"CircuitPython"),(0,l.kt)("p",null,"Se n\xe3o estiver usando KMKpython, isto vai exigir a biblioteca neopixel da\nAdafruit. Ela pode ser baixada\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_CircuitPython_NeoPixel/blob/6e35cd2b40575a20e2904b096508325cef4a71d3/neopixel.py"},"aqui"),".\n\xc9 parte do ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_CircuitPython_Bundle"},"Pacot\xe3o Adafruit\nCircuitPython"),". Coloque-o\nna raiz do seu dispositivo circuitpython. Se n\xe3o souber qual \xe9, \xe9 o diret\xf3rio\ncom ",(0,l.kt)("inlineCode",{parentName:"p"},"main.py")," nele, e deve ser o primeiro diret\xf3rio que voc\xea v\xea ao abrir o dispositivo."),(0,l.kt)("p",null,"Atualmente suportamos os LEDs endere\xe7\xe1veis a seguir:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"WS2811, WS2812, WS2812B, WS2812C, etc."),(0,l.kt)("li",{parentName:"ul"},"SK6812, SK6812MINI, SK6805")),(0,l.kt)("h3",{id:"sele\xe7\xe3o-de-cores"},"Sele\xe7\xe3o de Cores"),(0,l.kt)("p",null,"KMK usa o sistema\n",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HSL_and_HSV"},"Hue-Saturation-Value")," para\nselecionar as cores, em vez do RGB. A roda de cores abaixo demonstra seu\nfuncionamento."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mudar o ",(0,l.kt)("strong",{parentName:"li"},"Hue")," d\xe1 a volta no c\xedrculo."),(0,l.kt)("li",{parentName:"ul"},"Mudar o ",(0,l.kt)("strong",{parentName:"li"},"Saturation")," move entre as se\xe7\xf5es internas e externas do c\xedrculo,\nafetando a intensidade da cor."),(0,l.kt)("li",{parentName:"ul"},"Mudar o ",(0,l.kt)("strong",{parentName:"li"},"Value")," atribui o valor do brilho total.")),(0,l.kt)("h2",{id:"habilitando-a-extens\xe3o"},"Habilitando a Extens\xe3o"),(0,l.kt)("p",null,"Os \xfanicos valores exigidos para a extens\xe3o RGB devem ser o pino de pixel e o\nn\xfamero de pixels/LEDs. Se estiver usando um teclado repartido, este n\xfamero \xe9 por\nparte, n\xe3o pelo total das duas."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.RGB import RGB\nfrom kb import rgb_pixel_pin  # This can be imported or defined manually\n\nrgb_ext = RGB(pixel_pin=rgb_pixel_pin, num_pixels=27)\nkeyboard.extensions.append(rgb_ext)\n")),(0,l.kt)("h2",{id:"keycodes"},"[Keycodes]"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Aliases"),(0,l.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_TOG")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Liga/desliga o RGB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_HUI")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Aumenta Hue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_HUD")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Diminui Hue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_SAI")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Aumenta Saturation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_SAD")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Diminui Saturation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_VAI")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Aumenta Value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_VAD")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Diminui Value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_ANI")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Aumenta a velocidade da anima\xe7\xe3o")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_AND")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Diminui a velocidade da anima\xe7\xe3o")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_PLAIN")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RGB_M_P")),(0,l.kt)("td",{parentName:"tr",align:null},"RGB Est\xe1tico")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_BREATHE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RGB_M_B")),(0,l.kt)("td",{parentName:"tr",align:null},"Anima\xe7\xe3o de Respira\xe7\xe3o")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_RAINBOW")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RGB_M_R")),(0,l.kt)("td",{parentName:"tr",align:null},"Anima\xe7\xe3o de Arco-\xcdris")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_BREATHE_RAINBOW")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RGB_M_BR")),(0,l.kt)("td",{parentName:"tr",align:null},"Anima\xe7\xe3o de Arco-\xcdris Respirando")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_KNIGHT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RGB_M_K")),(0,l.kt)("td",{parentName:"tr",align:null},"Anima\xe7\xe3o de SuperM\xe1quina (Knight Rider)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_SWIRL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RGB_M_S")),(0,l.kt)("td",{parentName:"tr",align:null},"Anima\xe7\xe3o de Redemoinho")))),(0,l.kt)("h2",{id:"configura\xe7\xe3o"},"Configura\xe7\xe3o"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Defini\xe7\xe3o"),(0,l.kt)("th",{parentName:"tr",align:null},"Padr\xe3o"),(0,l.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixel_pin")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"O pino conectado ao pino de dados dos LEDs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.num_pixels")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"O n\xfamero de LEDs conectados")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.rgb_config['rgb_order']")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(1, 0, 2)")),(0,l.kt)("td",{parentName:"tr",align:null},"A ordem dos pixels RGB, e opcionalmente branco. Exemplo: (1, 0, 2, 3)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.rgb_config['hue_step']")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},"O n\xfamero de passos para ciclar ao longo do Hue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.rgb_config['sat_step']")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"17")),(0,l.kt)("td",{parentName:"tr",align:null},"O n\xfamero de passos para mudar a Saturation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.rgb_config['val_step']")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"17")),(0,l.kt)("td",{parentName:"tr",align:null},"O n\xfamero de passos para mudar o Value (brilho)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.rgb_config['hue_default']")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Hue padr\xe3o quando o teclado inicia")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.rgb_config['sat_default']")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},"Saturation padr\xe3o quando o teclado inicia")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.rgb_config['val_default']")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},"Value padr\xe3o (brilho) quando o teclado inicia")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.rgb_config['val_limit']")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"255")),(0,l.kt)("td",{parentName:"tr",align:null},"N\xedvel m\xe1ximo de brilho")))),(0,l.kt)("h2",{id:"configura\xe7\xe3o-da-anima\xe7\xe3o-embutida"},"Configura\xe7\xe3o da Anima\xe7\xe3o Embutida"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Defini\xe7\xe3o"),(0,l.kt)("th",{parentName:"tr",align:null},"Padr\xe3o"),(0,l.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.rgb_config['breathe_center']")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1.5")),(0,l.kt)("td",{parentName:"tr",align:null},"Usado para calcular a curva da anima\xe7\xe3o de respira\xe7\xe3o. Qualquer valor em 1.0-2.7 \xe9 v\xe1lido.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.rgb_config['knight_effect_length']")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4")),(0,l.kt)("td",{parentName:"tr",align:null},"O n\xfamero de LEDs a ligar para a anima\xe7\xe3o do KITT (SuperM\xe1quina)")))),(0,l.kt)("h2",{id:"fun\xe7\xf5es"},"Fun\xe7\xf5es"),(0,l.kt)("p",null,"Se voc\xea quer criar suas pr\xf3prias anima\xe7\xf5es, ou por exemplo mudar a luminosidade\nnuma macro, ou numa troca de camadas, eis  algumas fun\xe7\xf5es dispon\xedveis:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.set_hsv_fill(hue, sat, val)")),(0,l.kt)("td",{parentName:"tr",align:null},"Preenche todos os LEDs com valores HSV")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.set_hsv(hue, sat, val, index)")),(0,l.kt)("td",{parentName:"tr",align:null},"Atribui um valor HSV a um LED espec\xedfico")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.set_rgb_fill((r, g, b))")),(0,l.kt)("td",{parentName:"tr",align:null},"Preenche todos os LEDs com valores RGB(W)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.set_rgb((r, g, b), index)")),(0,l.kt)("td",{parentName:"tr",align:null},"Atribui um valor RGB(W) a um LED espec\xedfico")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.disable_auto_write(bool)")),(0,l.kt)("td",{parentName:"tr",align:null},"Quando ",(0,l.kt)("inlineCode",{parentName:"td"},"True"),", desabilita mostrar as mudan\xe7as. Bom para atribuir m\xfaltiplas mudan\xe7as de LEDs antes de uma atualiza\xe7\xe3o vis\xedvel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.increase_hue(step)")),(0,l.kt)("td",{parentName:"tr",align:null},"Aumenta Hue de um ",(0,l.kt)("inlineCode",{parentName:"td"},"step")," dado")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.decrease_hue(step)")),(0,l.kt)("td",{parentName:"tr",align:null},"Diminui Hue de um ",(0,l.kt)("inlineCode",{parentName:"td"},"step")," dado")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.increase_sat(step)")),(0,l.kt)("td",{parentName:"tr",align:null},"Aumenta Saturation de um ",(0,l.kt)("inlineCode",{parentName:"td"},"step")," dado")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.decrease_sat(step)")),(0,l.kt)("td",{parentName:"tr",align:null},"Diminui Saturation de um ",(0,l.kt)("inlineCode",{parentName:"td"},"step")," dado")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.increase_val(step)")),(0,l.kt)("td",{parentName:"tr",align:null},"Aumenta Value (brilho) de um ",(0,l.kt)("inlineCode",{parentName:"td"},"step")," dado")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.decrease_val(step)")),(0,l.kt)("td",{parentName:"tr",align:null},"Diminui Value (brilho) de um ",(0,l.kt)("inlineCode",{parentName:"td"},"step")," dado")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.increase_ani()")),(0,l.kt)("td",{parentName:"tr",align:null},"Aumenta a velocidade da anima\xe7\xe3o de 1. M\xe1ximo 10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.decrease_ani()")),(0,l.kt)("td",{parentName:"tr",align:null},"Diminui a velocidade da anima\xe7\xe3o de 1. M\xednimo 10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.off()")),(0,l.kt)("td",{parentName:"tr",align:null},"Desliga todos os LEDs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.show()")),(0,l.kt)("td",{parentName:"tr",align:null},"Exibe todas as configura\xe7\xf5es armazenadas para os LEDs. \xdatil quando ",(0,l.kt)("inlineCode",{parentName:"td"},"disable_auto_write")," explicado abaixo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.time_ms()")),(0,l.kt)("td",{parentName:"tr",align:null},"Retorna um tempo em milissegundos desde que o teclado foi ligado. \xdatil para temporizadores de in\xedcio/parada")))),(0,l.kt)("h2",{id:"acesso-direto-\xe0s-vari\xe1veis"},"Acesso Direto \xe0s Vari\xe1veis"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Defini\xe7\xe3o"),(0,l.kt)("th",{parentName:"tr",align:null},"Padr\xe3o"),(0,l.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.hue")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Atribui \xe0 Hue, 0-360")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.sat")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},"Atribui \xe0 Saturation, 0-100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.val")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},"Atribui ao Brightness, 1-255")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.reverse_animation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:null},"Se ",(0,l.kt)("inlineCode",{parentName:"td"},"True"),", algumas anima\xe7\xf5es v\xe3o rodar ao contr\xe1rio. Pode ser usado seguramente em anima\xe7\xf5es do usu\xe1rio")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.animation_mode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Isto pode ser modificado para quaisquer modos inclusos, ou para algo customizado para intera\xe7\xf5es do usu\xe1rio. Qualquer string \xe9 v\xe1lida.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyboard.pixels.animation_speed")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Aumenta a velocidade da anima\xe7\xe3o na maior parte das anima\xe7\xf5es. Recomendado 1-5, m\xe1ximo 10.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.rgb import AnimationModes\nrgb_ext = RGB(pixel_pin=rgb_pixel_pin,\n        num_pixels=27\n        num_pixels=0,\n        val_limit=100,\n        hue_default=0,\n        sat_default=100,\n        rgb_order=(1, 0, 2),  # GRB WS2812\n        val_default=100,\n        hue_step=5,\n        sat_step=5,\n        val_step=5,\n        animation_speed=1,\n        breathe_center=1,  # 1.0-2.7\n        knight_effect_length=3,\n        animation_mode=AnimationModes.STATIC,\n        reverse_animation=False,\n        )\n")),(0,l.kt)("h2",{id:"modifica\xe7\xe3o-do-hardware"},"Modifica\xe7\xe3o do Hardware"),(0,l.kt)("p",null,"Para incluir LEDS em placas que n\xe3o t\xeam suporte nativo, voc\xea ter\xe1 que\nacrescentar tr\xeas fios. O de for\xe7a correm nos pinos de 3.3V ou 5V (dependendo do\nLED), pinos de terra e dados precisar\xe3o ser adicionados a um pino n\xe3o usado em\nseu micro-controlador a n\xe3o ser que seu teclado tenha pontos de soldagem\nespec\xedficos para eles. Com estes tr\xeas fios conectados, atribua ao ",(0,l.kt)("inlineCode",{parentName:"p"},"pixel_pin"),"\ncomo descrito acima, e voc\xea est\xe1 pronto para usar seus RGB LED's/Neopixels."),(0,l.kt)("h2",{id:"consertando-os-problemas"},"Consertando os Problemas"),(0,l.kt)("h3",{id:"cores-incorretas"},"Cores Incorretas"),(0,l.kt)("p",null,"Se as cores est\xe3o erradas, confira a ordem dos pixels nos seus LEDs\nespec\xedficos. Eis alguns comuns."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"WS2811, WS2812, WS2812B, WS2812C s\xe3o todos GRB (1, 0, 2)"),(0,l.kt)("li",{parentName:"ul"},"SK6812, SK6812MINI, SK6805 s\xe3o todos GRB (1, 0, 2)"),(0,l.kt)("li",{parentName:"ul"},"Neopixels variam dependendo de onde voc\xea compra. Isto vem informado na p\xe1gina\ndo produto.")),(0,l.kt)("h3",{id:"luzes-n\xe3o-ligam"},"Luzes n\xe3o ligam"),(0,l.kt)("p",null,"Certifique-se de que sua placa suporta luz de fundo de LED, conferindo por uma\nlinha com ",(0,l.kt)("inlineCode",{parentName:"p"},"PIXEL_PIN"),". Se n\xe3o tiver, voc\xea pode adicionar ao seu keymap. Se voc\xea\nadicionou os LEDs por conta pr\xf3pria, voc\xea tamb\xe9m precisa atribuir a ",(0,l.kt)("inlineCode",{parentName:"p"},"num_pixels"),"\no n\xfamero total de LEDs instalados."))}k.isMDXComponent=!0}}]);