"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1073],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},i="Configuring KMK",l={unversionedId:"config_and_keymap",id:"config_and_keymap",title:"Configuring KMK",description:"KMK is configured through a rather large, plain-old-Python class called",source:"@site/docs/config_and_keymap.md",sourceDirName:".",slug:"/config_and_keymap",permalink:"/docs/config_and_keymap",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/config_and_keymap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Combos",permalink:"/docs/combos"},next:{title:"Contributing",permalink:"/docs/contributing"}},p={},s=[],d={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-kmk"},"Configuring KMK"),(0,a.kt)("p",null,"KMK is configured through a rather large, plain-old-Python class called\n",(0,a.kt)("inlineCode",{parentName:"p"},"KMKKeyboard"),". Subclasses of this configuration exist which pre-fill defaults\nfor various known keyboards (for example, many QMK, TMK, or ZMK keyboards\nare supported with a nice!nano, or through our ItsyBitsy to Pro Micro pinout adapter.)\nThis class is the main interface between end users and the inner workings of KMK.\nLet's dive in!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Edit or create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"main.py")," on your ",(0,a.kt)("inlineCode",{parentName:"p"},"CIRCUITPY")," drive. You can also\nkeep this file on your computer (perhaps under ",(0,a.kt)("inlineCode",{parentName:"p"},"user_keymaps")," - please feel\nfree to submit a pull request with your layout definitions!) and copy it over\n(either manually or, if you're adept with developer tooling and/or a command\nline, ",(0,a.kt)("a",{parentName:"p",href:"/docs/flashing"},"our Makefile"),")."),(0,a.kt)("p",{parentName:"li"},"It's definitely recommended to keep a backup of your configuration somewhere\nthat isn't the microcontroller itself - MCUs die, CircuitPython may run into\ncorruption bugs, or you might just have bad luck and delete the wrong file\nsome day.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Assign a ",(0,a.kt)("inlineCode",{parentName:"p"},"KMKKeyboard")," instance to a variable (ex. ",(0,a.kt)("inlineCode",{parentName:"p"},"keyboard = KMKKeyboard()")," - note\nthe parentheses).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make sure this ",(0,a.kt)("inlineCode",{parentName:"p"},"KMKKeyboard")," instance is actually run at the end of the file with\na block such as the following:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if __name__ == '__main__':\n    keyboard.go()\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assign pins and your diode orientation (only necessary on handwire keyboards),\nfor example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import board\n\nfrom kmk.scanners import DiodeOrientation\n\ncol_pins = (board.SCK, board.MOSI, board.MISO, board.RX, board.TX, board.D4)\nrow_pins = (board.D10, board.D11, board.D12, board.D13, board.D9, board.D6, board.D5, board.SCL)\nrollover_cols_every_rows = 4\ndiode_orientation = DiodeOrientation.COL2ROW\n")),(0,a.kt)("p",null,"The pins should be based on whatever CircuitPython calls pins on your particular\nboard. You can find these in the REPL on your CircuitPython device:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import board\nprint(dir(board))\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"rollover_cols_every_rows")," is only supported with\n",(0,a.kt)("inlineCode",{parentName:"p"},"DiodeOrientation.COLUMNS"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"DiodeOrientation.COL2ROW"),", not ",(0,a.kt)("inlineCode",{parentName:"p"},"DiodeOrientation.ROWS"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"DiodeOrientation.ROW2COL"),". It is used for boards\nsuch as the Planck Rev6 which reuse column pins to simulate a 4x12 matrix in\nthe form of an 8x6 matrix")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Import the global list of key definitions with ",(0,a.kt)("inlineCode",{parentName:"p"},"from kmk.keys import KC"),". You\ncan either print this out in the REPL as we did with ",(0,a.kt)("inlineCode",{parentName:"p"},"board")," above, or simply\nlook at ",(0,a.kt)("a",{parentName:"p",href:"/docs/keycodes"},"our Key documentation"),".\nWe've tried to keep that listing reasonably up to date, but if it feels like\nsomething is missing, you may need to read through ",(0,a.kt)("inlineCode",{parentName:"p"},"kmk/keys.py")," (and then\nopen a ticket to tell us our docs are out of date, or open a PR and fix the\ndocs yourself!)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Define a keymap, which is, in Python terms, a List of Lists of ",(0,a.kt)("inlineCode",{parentName:"p"},"Key")," objects.\nA very simple keymap, for a keyboard with just two physical keys on a single\nlayer, may look like this:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"keyboard.keymap = [[KC.A, KC.B]]\n")),(0,a.kt)("p",null,"You can further define a bunch of other stuff:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"keyboard.debug_enabled")," which will spew a ton of debugging information to the serial\nconsole. This is very rarely needed, but can provide very valuable information\nif you need to open an issue.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"keyboard.tap_time")," which defines how long ",(0,a.kt)("inlineCode",{parentName:"p"},"KC.TT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"KC.LT"),' will wait before\nconsidering a key "held" (see ',(0,a.kt)("inlineCode",{parentName:"p"},"layers.md"),")."))))}c.isMDXComponent=!0}}]);