"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2543],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9955:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i="Peg RGB Matrix",o={unversionedId:"peg_rgb_matrix",id:"peg_rgb_matrix",title:"Peg RGB Matrix",description:"What you can and cannot do with this extension:",source:"@site/docs/peg_rgb_matrix.md",sourceDirName:".",slug:"/peg_rgb_matrix",permalink:"/docs/peg_rgb_matrix",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/peg_rgb_matrix.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Peg Oled Display",permalink:"/docs/peg_oled_display"},next:{title:"Pimoroni Trackball",permalink:"/docs/pimoroni_trackball"}},s={},p=[{value:"What you can and cannot do with this extension:",id:"what-you-can-and-cannot-do-with-this-extension",level:2},{value:"Can Do",id:"can-do",level:3},{value:"Cannot Do (currently in progress)",id:"cannot-do-currently-in-progress",level:3},{value:"Keycodes",id:"keycodes",level:2},{value:"Required Libraries",id:"required-libraries",level:2},{value:"Required Changes to main.py and kb.py",id:"required-changes-to-mainpy-and-kbpy",level:2},{value:"kb.py",id:"kbpy",level:3},{value:"Non-split Example:",id:"non-split-example",level:4},{value:"Split Example:",id:"split-example",level:4},{value:"main.py",id:"mainpy",level:3},{value:"Colors",id:"colors",level:3},{value:"Passing RGB Codes",id:"passing-rgb-codes",level:4},{value:"Using <code>Color</code> Class",id:"using-color-class",level:4},{value:"Full Examples",id:"full-examples",level:3},{value:"Bonus",id:"bonus",level:4}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"peg-rgb-matrix"},"Peg RGB Matrix"),(0,r.kt)("h2",{id:"what-you-can-and-cannot-do-with-this-extension"},"What you can and cannot do with this extension:"),(0,r.kt)("h3",{id:"can-do"},"Can Do"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set any key's LED to be any color in a syntax very similar to your keymap"),(0,r.kt)("li",{parentName:"ul"},"Allows specific keys to be set to OFF"),(0,r.kt)("li",{parentName:"ul"},"Allows underglow LEDs to be a different color than per-key LEDs"),(0,r.kt)("li",{parentName:"ul"},"Allows modifier keys to be set to a different color than alpha keys"),(0,r.kt)("li",{parentName:"ul"},"Full split keyboard support"),(0,r.kt)("li",{parentName:"ul"},"Change brightness of LEDs from code or using keycodes")),(0,r.kt)("h3",{id:"cannot-do-currently-in-progress"},"Cannot Do (currently in progress)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adjust color at runtime. Currently the extension requires changes to main.py in order to make changes to your LEDs."),(0,r.kt)("li",{parentName:"ul"},"Animations"),(0,r.kt)("li",{parentName:"ul"},"Change LED color based on current layer")),(0,r.kt)("h2",{id:"keycodes"},"Keycodes"),(0,r.kt)("p",null,"Currently this extension does not support changing LEDs at runtime, as a result there are only three keycodes available to interact with this extension,those are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KC.RGB_TOG"),". This keycode simply toggles all your LEDs on and off."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KC.RGB_BRI"),". This keycode increases the brightness of the LEDs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KC.RGB_BRD"),". This keycode decreases the brightness of the LEDs.")),(0,r.kt)("h2",{id:"required-libraries"},"Required Libraries"),(0,r.kt)("p",null,"The following libraries must be frozen in your CircuitPython distribution or in a 'lib' folder at the root of your drive."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/adafruit/Adafruit_CircuitPython_NeoPixel"},"Adafruit_CircuitPython_NeoPixel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20220415/adafruit-circuitpython-bundle-7.x-mpy-20220415.zip"},"Download .mpy versions from Adafruit_CircuitPython_Bundle"))),(0,r.kt)("h2",{id:"required-changes-to-mainpy-and-kbpy"},"Required Changes to main.py and kb.py"),(0,r.kt)("p",null,"In order to use this extension the user must make changes to both their kb.py and main.py files. Below you will find a more comprehensive list of changes required in order to use this extension."),(0,r.kt)("h3",{id:"kbpy"},"kb.py"),(0,r.kt)("p",null,"It is possible your chosen board may already have these changes made, if not you will need to make these additions:"),(0,r.kt)("p",null,"The board's kb.py needs 3 fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LED Key Position ",(0,r.kt)("inlineCode",{parentName:"li"},"led_key_pos"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Much like ",(0,r.kt)("inlineCode",{parentName:"li"},"coord_mapping")," this tells the extension where the LEDs are on your board."))),(0,r.kt)("li",{parentName:"ul"},"Brightness Limit ",(0,r.kt)("inlineCode",{parentName:"li"},"brightness_limit"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Limits your brightness and may be required in order to stabilize performance."))),(0,r.kt)("li",{parentName:"ul"},"Number of LEDs ",(0,r.kt)("inlineCode",{parentName:"li"},"num_pixels"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used for calculations in order to ensure the LEDs map to the correct keys.")))),(0,r.kt)("h4",{id:"non-split-example"},"Non-split Example:"),(0,r.kt)("p",null,"Below shows a simple non-split example for a board containing 48 LEDs total and 38 keys with per-key LEDs.\nThis means we will have 10 underglow LEDs and 38 per-key LEDs.\nFor our example we will assume (because it is most common) the underglow LEDs are connected before the per-key LEDs.\nStarting from 0, indexes 0-9 are all underglow, so our ",(0,r.kt)("inlineCode",{parentName:"p"},"led_key_pos")," array starts at 10, the ",(0,r.kt)("inlineCode",{parentName:"p"},"led_key_pos")," array always starts with the key in the upper left position on the board.\nOur example is wired in such a way where the positions layout naturally and each row simply increases by 1 starting at the upper left of the board.\nOf course if your board's LEDs are layed out different, your ",(0,r.kt)("inlineCode",{parentName:"p"},"led_key_pos")," will need to match that layout."),(0,r.kt)("p",null,"Underglow LEDs always appear at the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"led_key_pos")," array, because the array always starts with per-key LEDs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    led_key_pos=[\n        10,11,12,13,14,15,16,17,18,19,\n        20,21,22,23,24,25,26,27,28,29,\n        30,31,32,33,34,35,36,37,38,39,\n           40,41,42,43,44,45,46,47,\n                 5, 6, 7, 8, 9,\n                 0, 1, 2, 3, 4\n        ]\n    brightness_limit = 1.0\n    num_pixels = 48\n")),(0,r.kt)("h4",{id:"split-example"},"Split Example:"),(0,r.kt)("p",null,"Below shows a 58 key split keyboard's ",(0,r.kt)("inlineCode",{parentName:"p"},"led_key_pos")," array for a board containing 70 LEDs in total.\nThe board has 58 keys, meaning we are left with 12 underglow LEDs total.\nSince the board is a split and we can assume the LEDs are mirrored, that means each half has 29 per-key LEDs and 6 underglow LEDs."),(0,r.kt)("p",null,"Let's first focus on the left half of the board.\nIn this example the underglow LEDs are again connected first, and this half has 6 underglow LEDs.\nStarting from position 0 this means 0-5 are underglow LEDs and our per-key lighting starts at 6.\nOur example board is wired in such a way where the left half's first per-key LED is position in the upper right corner of that half.\nThe LEDs then incremement towards the right and follow a 'zig-zag' pattern until all are accounted for (6-34).  "),(0,r.kt)("p",null,"Examining the other half (the right side) you'll notice the LEDs are connected in a similar way but mirrored.\nThe right half's LEDs start in the upper left position of the board and increment towards the right, and then follow a 'zig-zag' pattern until all are accounted for (41-69)."),(0,r.kt)("p",null,"Underglow LEDs always appear at the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"led_key_pos")," array, because the array always starts with per-key LEDs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    led_key_pos =[\n        11,10,9 ,8 ,7 ,6 ,       41,42,43,44,45,46,\n        12,13,14,15,16,17,       52,51,50,49,48,47,\n        23,22,21,20,19,18,       53,54,55,56,57,58,\n        24,25,26,27,28,29,30, 65,64,63,62,61,60,59,\n                 34,33,32,31, 66,67,68,69,\n                 3 ,4 ,5 ,       40,39,38,\n                 2 ,1 ,0 ,       35,36,37\n                 ]\n    brightness_limit = 1.0\n    num_pixels = 70\n\n")),(0,r.kt)("h3",{id:"mainpy"},"main.py"),(0,r.kt)("p",null,"It is possible your chosen board may already have these changes made, if not you will need to make these additions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.peg_rgb_matrix import Rgb_matrix,Rgb_matrix_data,Color\n# ... Other code\nrgb = Rgb_matrix(...per key color data)\nkeyboard.extensions.append(rgb)\n")),(0,r.kt)("p",null,"Rgb_matrix extension requires one argument (",(0,r.kt)("inlineCode",{parentName:"p"},"Rgb_matrix_data"),"), although additional arguments can be passed, here are all arguments that can be passed to "),(0,r.kt)("p",null,"Rgb_matrix:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LED Display ",(0,r.kt)("inlineCode",{parentName:"li"},"ledDisplay"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is our primary and only required field, this takes a ",(0,r.kt)("inlineCode",{parentName:"li"},"Rgb_matrix_data")," class.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rgb_matrix_data only takes two fields:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Keys: an array of colors with a length equal to the number of keys on your keyboard"),(0,r.kt)("li",{parentName:"ul"},"Underglow: an array of colors with a length equal to the number of underglow leds on your keyboard"))))))),(0,r.kt)("li",{parentName:"ul"},"Split ",(0,r.kt)("inlineCode",{parentName:"li"},"split"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is an optional boolean and only to be used if the keyboard is a split."))),(0,r.kt)("li",{parentName:"ul"},"Right Side ",(0,r.kt)("inlineCode",{parentName:"li"},"rightSide"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is optional boolean only to be used if the keyboard is split. This signals that this configuration is targetting the right side (off side)."))),(0,r.kt)("li",{parentName:"ul"},"RGB Order ",(0,r.kt)("inlineCode",{parentName:"li"},"rgb_order"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is optional and only needs to be set if you are not using a WS2812 based LED."))),(0,r.kt)("li",{parentName:"ul"},"Disable Auto Write ",(0,r.kt)("inlineCode",{parentName:"li"},"disable_auto_write"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is optional and only serves to make all your LEDs turn on at once instead of animate to their on state.")))),(0,r.kt)("h3",{id:"colors"},"Colors"),(0,r.kt)("p",null,"Colors are RGB and can be provided in one of two ways.\nColors can be defined as an array of three numbers (0-255) or you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Color")," class with its default colors, see example below."),(0,r.kt)("h4",{id:"passing-rgb-codes"},"Passing RGB Codes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'Rgb_matrix_data(\n    keys=[[255,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],"""... rest of colors""" ],                     \n    underglow=[[0,0,55],[0,0,55],"""... rest of colors""" ]\n             )\n')),(0,r.kt)("h4",{id:"using-color-class"},"Using ",(0,r.kt)("inlineCode",{parentName:"h4"},"Color")," Class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'Rgb_matrix_data(\n    keys=[Color.RED, Color.GREEN, Color.BLUE, Color.WHITE, Color.YELLOW, Color.ORANGE,"""... rest of colors""" ],                     \n    underglow=[Color.PURPLE, Color.TEAL, Color.PINK, Color.OFF,"""... rest of colors""" ]\n             )\n')),(0,r.kt)("h3",{id:"full-examples"},"Full Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"rgb = Rgb_matrix(ledDisplay=Rgb_matrix_data(\n    keys=[\n    [255,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],                        [55,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],[255,55,55],\n    [255,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],                        [55,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],[255,55,55],\n    [255,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],                        [55,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],[255,55,55],\n    [255,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],[255,55,55],[255,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],[55,55,55],[255,55,55],\n                                     [255,55,55],[55,55,55],[55,55,55],[255,55,55],[255,55,55],[55,55,55],[55,55,55],[255,55,55]],\n                                    \n    underglow=[ \n             [0,0,55],[0,0,55],[0,0,55],[0,0,55],[0,0,55],[0,0,55],[0,0,55],[0,0,55],[0,0,55],[0,0,55],[0,0,55],[0,0,55]]\n             ),\n    split=True,\n    rightSide=True,\n    disable_auto_write=True)\n")),(0,r.kt)("h4",{id:"bonus"},"Bonus"),(0,r.kt)("p",null,"Because creating ",(0,r.kt)("inlineCode",{parentName:"p"},"ledDisplay")," can be time consuming, there is a utility avaiable that will generate a basic framework for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"Rgb_matrix_data.generate_led_map(58,10,Color.WHITE,Color.BLUE)\n")),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"Rgb_matrix_data.generate_led_map")," before you do any configuration beyond imports and it will print an ",(0,r.kt)("inlineCode",{parentName:"p"},"Rgb_matrix_data"),' class to your CircuitPython REPL which you can view by using a tool like "screen" or "PUTTY".'),(0,r.kt)("p",null,"Generate LED Map Arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Number of Keys"),(0,r.kt)("li",{parentName:"ul"},"Number of Underglow"),(0,r.kt)("li",{parentName:"ul"},"Key Color"),(0,r.kt)("li",{parentName:"ul"},"Underglow Color")),(0,r.kt)("p",null,"Example Using Above Arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"Rgb_matrix_data(keys=[[249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249], [249, 249, 249]],\nunderglow=[[0, 0, 255], [0, 0, 255], [0, 0, 255], [0, 0, 255], [0, 0, 255], [0, 0, 255], [0, 0, 255], [0, 0, 255], [0, 0, 255], [0, 0, 255]])\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console"},"Connecting to the Serial Console")))}m.isMDXComponent=!0}}]);