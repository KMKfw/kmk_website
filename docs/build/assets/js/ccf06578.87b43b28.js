"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),y=p(n),u=a,m=y["".concat(s,".").concat(u)]||y[u]||c[u]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Display",l={unversionedId:"Display",id:"Display",title:"Display",description:"Not enough screen space? Add a display to your keyboard!",source:"@site/docs/Display.md",sourceDirName:".",slug:"/Display",permalink:"/docs/Display",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/Display.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tapdance",permalink:"/docs/ptBR/tapdance"},next:{title:"Getting Started",permalink:"/docs/Getting_Started"}},s={},p=[{value:"Preparation",id:"preparation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Images",id:"images",level:2},{value:"Text",id:"text",level:2},{value:"X and Y anchors",id:"x-and-y-anchors",level:3},{value:"Split",id:"split",level:3},{value:"Inverting",id:"inverting",level:3}],d={toc:p},y="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"display"},"Display"),(0,a.kt)("p",null,"Not enough screen space? Add a display to your keyboard!"),(0,a.kt)("p",null,"This documentation concerns the recommended Display extension."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note:"),"\nDriving a display can bind up a considerable amount of CPU time and RAM.\nBe aware of the performance degradation that can occur."),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"First of all you need to download a few libraries that will make it possible for your display to work.\nYou can get them with the ",(0,a.kt)("a",{parentName:"p",href:"https://circuitpython.org/libraries"},"Adafruit CircuitPython Libraries bundle"),".\nMake sure you to choose the one that matches your version of CircuitPython."),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," directory under the CircuitPython drive and copy the following\nfrom the library bundle there:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"adafruit_display_text/"))),(0,a.kt)("p",null,"Depending on which kind of display your keyboard has, you may also need a display-specific library. See the below table:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Display Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Library to use"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSD1306"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"adafruit_displayio_ssd1306.mpy"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SH1106"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"adafruit_displayio_sh1106.mpy"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Already initialized (e.g. available through ",(0,a.kt)("inlineCode",{parentName:"td"},"board.DISPLAY"),")"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Here's how you may initialize the extension. Note that this includes examples of all currently supported display types and you only need the one that corresponds to your display:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import board\nimport busio\n\n# For SSD1306\nfrom kmk.extensions.display import Display, SSD1306, TextEntry, ImageEntry\n\n# Replace SCL and SDA according to your hardware configuration.\ni2c_bus = busio.I2C(board.GP_SCL, board.GP_SDA)\n\ndriver = SSD1306(\n    # Mandatory:\n    i2c=i2c_bus,\n    # Optional:\n    device_address=0x3C,\n)\n\n# For SH1106\nfrom kmk.extensions.display import Display, SH1106, TextEntry, ImageEntry\n\n# Replace SCK and MOSI according to your hardware configuration.\nspi_bus = busio.SPI(board.GP_SCK, board.GP_MOSI)\n\n# Replace command, chip_select, and reset according to your hardware configuration.\ndriver = SH1106(\n    # Mandatory:\n    spi=spi_bus,\n    command=board.GP_DC,\n    chip_select=board.GP_CS,\n    reset=board.GP_RESET,\n)\n\n# For displays initialized by CircuitPython by default\nfrom kmk.extensions.display import Display, BuiltInDisplay, TextEntry, ImageEntry\n\n# Replace display, sleep_command, and wake_command according to your hardware configuration.\ndriver = BuiltInDisplay(\n    # Mandatory:\n    display=board.DISPLAY\n    sleep_command=0xAE\n    wake_command=0xAF\n)\n\n# For all display types\ndisplay = Display(\n    # Mandatory:\n    display=driver,\n    # Optional:\n    width=128, # screen size\n    height=32, # screen size\n    flip = False, # flips your display content\n    flip_left = False, # flips your display content on left side split\n    flip_right = False, # flips your display content on right side split\n    brightness=0.8, # initial screen brightness level\n    brightness_step=0.1, # used for brightness increase/decrease keycodes\n    dim_time=20, # time in seconds to reduce screen brightness\n    dim_target=0.1, # set level for brightness decrease\n    off_time=60, # time in seconds to turn off screen\n    powersave_dim_time=10, # time in seconds to reduce screen brightness\n    powersave_dim_target=0.1, # set level for brightness decrease\n    powersave_off_time=30, # time in seconds to turn off screen\n)\n")),(0,a.kt)("p",null,"Also shown are all the options with their default values.\nCustomize them to fit your screen and preferences."),(0,a.kt)("h2",{id:"images"},"Images"),(0,a.kt)("p",null,"Images have to be monochromatic bitmaps with same resolution as your display and\nhave to be placed in the root of the CircuitPython drive.\n",(0,a.kt)("strong",{parentName:"p"},"Placing it in separate a seperate directory may cause issues.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'display.entries = [\n    ImageEntry(image="1.bmp", x=0, y=0),\n]\nkeyboard.extensions.append(display)\n')),(0,a.kt)("p",null,"You can also make your images appear only on specific layers,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'display.entries = [\n    ImageEntry(image="1.bmp", x=0, y=0, layer=0),\n    ImageEntry(image="2.bmp", x=0, y=0, layer=1),\n]\nkeyboard.extensions.append(display)\n')),(0,a.kt)("p",null,"and/or side of your split keyboard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'display.entries = [\n    ImageEntry(image="L1.bmp", x=0, y=0, side="L"),\n    ImageEntry(image="R1.bmp", x=0, y=0, side="R"),\n]\nkeyboard.extensions.append(display)\n')),(0,a.kt)("h2",{id:"text"},"Text"),(0,a.kt)("p",null,"You're able to freely positon your text to place it wherever you want just by changing x and y values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'display.entries = [\n    TextEntry(text="Layer = 1", x=0, y=0),\n    TextEntry(text="Macros", x=0, y=12),\n    TextEntry(text="Hey there!", x=0, y=24),\n]\nkeyboard.extensions.append(display)\n')),(0,a.kt)("h3",{id:"x-and-y-anchors"},"X and Y anchors"),(0,a.kt)("p",null,'Anchor points define the "origin" or ',(0,a.kt)("inlineCode",{parentName:"p"},"(0, 0)"),' position within a text label.\nExample: for text in top right corner you need to set its anchor points Top Right and move text to far right position.\nThe values can be set "T" for top, "M" for middle and "B" for bottom on the X\naxis and "L" for left, "M" for middle and "R, for right on the Y axis.'),(0,a.kt)("p",null,"For more infos about anchors check the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/circuitpython-display-support-using-displayio/text"},"Adafruit docs"),'.\nNotable difference: KMK uses strings ("T", "M","B" and "L", "M", "R") instead of numbers.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'display.entries = [\n    TextEntry(text="Layer = 1", x=128, y=0, x_anchor="R", y_anchor="T"), # text in Top Right corner\n    TextEntry(text="Macros", x=128, y=64, x_anchor="R", y_anchor="B"), # text in Bottom Right corner\n    TextEntry(text="Hey there!", x=64, y=32, x_anchor="M", y_anchor="M"), # text in the Middle of screen\n]\nkeyboard.extensions.append(display)\n')),(0,a.kt)("h3",{id:"split"},"Split"),(0,a.kt)("p",null,"Same as with images you can change displaying according to current layer or side of split keyboard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'display.entries = [\n    TextEntry(text="Longer text that", x=0, y=0, layer=0),\n    TextEntry(text="has been divided", x=0, y=12, layer=0, side="L"),\n    TextEntry(text="for an example", x=0, y=24, layer=0, side="R"),\n]\nkeyboard.extensions.append(display)\n')),(0,a.kt)("h3",{id:"inverting"},"Inverting"),(0,a.kt)("p",null,"Inverts colours of your text. Comes in handy, for example, as a good layer indicator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"display_ext = Display(\n    entries=[\n        TextEntry(text='0 1 2 4', x=0, y=0),\n        TextEntry(text='0', x=0, y=0, inverted=True, layer=0),\n        TextEntry(text='1', x=12, y=0, inverted=True, layer=1),\n        TextEntry(text='2', x=24, y=0, inverted=True, layer=2),\n    ],\n)\n")),(0,a.kt)("h1",{id:"example-code"},"Example Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import board\nimport busio\nfrom kmk.kmk_keyboard import KMKKeyboard\nfrom kmk.keys import KC\nfrom kmk.scanners import DiodeOrientation\nfrom kmk.modules.layers import Layers\nfrom kmk.extensions.display import Display, SSD1306, TextEntry, ImageEntry\n\nkeyboard = KMKKeyboard()\nlayers = Layers()\nkeyboard.modules.append(layers)\n\ni2c_bus = busio.I2C(board.GP21, board.GP20)\ndisplay_driver = SSD1306(i2c=i2c_bus)\n\ndisplay = Display(\n    display=display_driver\n    entries=[\n        TextEntry(text='Layer: ', x=0, y=32, y_anchor='B'),\n        TextEntry(text='BASE', x=40, y=32, y_anchor='B', layer=0),\n        TextEntry(text='NUM', x=40, y=32, y_anchor='B', layer=1),\n        TextEntry(text='NAV', x=40, y=32, y_anchor='B', layer=2),\n        TextEntry(text='0 1 2', x=0, y=4),\n        TextEntry(text='0', x=0, y=4, inverted=True, layer=0),\n        TextEntry(text='1', x=12, y=4, inverted=True, layer=1),\n        TextEntry(text='2', x=24, y=4, inverted=True, layer=2),\n    ],\n    device_address=0x3C,\n    width=128,\n    height=64,\n    dim_time=10,\n    dim_target=0.1,\n    off_time=1200,\n    brightness=1,\n)\n\nkeyboard.extensions.append(display)\n")))}c.isMDXComponent=!0}}]);