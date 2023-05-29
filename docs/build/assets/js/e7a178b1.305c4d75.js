"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1921],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(i),c=a,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return i?n.createElement(h,o(o({ref:t},d),{},{components:i})):n.createElement(h,o({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},8334:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=i(7462),a=(i(7294),i(3905));const r={},o="Split Keyboards",l={unversionedId:"split_keyboards",id:"split_keyboards",title:"Split Keyboards",description:"Split keyboards are mostly the same as unsplit. Wired UART is fully supported,",source:"@site/docs/split_keyboards.md",sourceDirName:".",slug:"/split_keyboards",permalink:"/docs/split_keyboards",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/split_keyboards.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Serial ACE (Arbitrary Code Execution over serial interface)",permalink:"/docs/serialace"},next:{title:"Sticky Mod",permalink:"/docs/sticky_mod"}},s={},p=[{value:"Drive names",id:"drive-names",level:2},{value:"Wired UART",id:"wired-uart",level:2},{value:"Bluetooth split (aka no TRRS) Currently in testing",id:"bluetooth-split-aka-no-trrs-currently-in-testing",level:2},{value:"Config",id:"config",level:2},{value:"<code>split_side</code>",id:"split_side",level:3},{value:"<code>split_flip</code>",id:"split_flip",level:3},{value:"<code>split_target_left</code>",id:"split_target_left",level:3},{value:"<code>uart_flip</code>",id:"uart_flip",level:3},{value:"<code>use_pio</code>",id:"use_pio",level:3},{value:"<code>data_pin</code>/<code>data_pin2</code>",id:"data_pindata_pin2",level:3},{value:"EE HANDS / AUTO HANDEDNESS",id:"ee-hands--auto-handedness",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"split-keyboards"},"Split Keyboards"),(0,a.kt)("p",null,"Split keyboards are mostly the same as unsplit. Wired UART is fully supported,\nand testing of Bluetooth splits, though we don't currently offer support for this."),(0,a.kt)("p",null,"Notice that this Split module must be added after the HoldTap module to the keyboard.modules."),(0,a.kt)("h2",{id:"drive-names"},"Drive names"),(0,a.kt)("p",null,"As you will have two circuitpython drives to update regularly, it is adviced to rename them to make\nyour life easier.  Follow the instructions on how to ",(0,a.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/welcome-to-circuitpython/renaming-circuitpy"},"rename circuitpydrives")," while making sure that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The left side ends in "L",'),(0,a.kt)("li",{parentName:"ul"},'the right side ends in "R",'),(0,a.kt)("li",{parentName:"ul"},"the entire drive name is 11 characters or less! This is a limitation of the filesystem and you will receive an error if you choose a name longer than that.")),(0,a.kt)("p",null,"For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"NYQUISTL")," for the left and ",(0,a.kt)("inlineCode",{parentName:"p"},"NYQUISTR")," for the right half."),(0,a.kt)("h2",{id:"wired-uart"},"Wired UART"),(0,a.kt)("p",null,"Wired connections can use UART over 1 or 2 wires. With 2 wires, you will be able\nto synchronize the halves allowing additional features in some extensions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kb import data_pin\nfrom kmk.modules.split import Split, SplitSide\n\nsplit = Split(split_side=SplitSide.LEFT)\nkeyboard.modules.append(split)\n")),(0,a.kt)("h2",{id:"bluetooth-split-aka-no-trrs-currently-in-testing"},"Bluetooth split (aka no TRRS) ","[Currently in testing]"),(0,a.kt)("p",null,"Wireless splits are fully featured with 2 way communication allowing all extensions to work 100%."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kb import data_pin\nfrom kmk.modules.split import Split, SplitType, SplitSide\n\n\nsplit = Split(split_type=SplitType.BLE, split_side=SplitSide.LEFT)\nOR\nsplit = Split(split_type=SplitType.BLE, split_side=SplitSide.RIGHT)\nkeyboard.modules.append(split)\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("p",null,"Useful config options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"split = Split(\n    split_flip=True,  # If both halves are the same, but flipped, set this True\n    split_side=None,  # Sets if this is to SplitSide.LEFT or SplitSide.RIGHT, or use EE hands\n    split_type=SplitType.UART,  # Defaults to UART\n    split_target_left=True,  # Assumes that left will be the one on USB. Set to False if it will be the right\n    uart_interval=20,  # Sets the uarts delay. Lower numbers draw more power\n    data_pin=None,  # The primary data pin to talk to the secondary device with\n    data_pin2=None,  # Second uart pin to allow 2 way communication\n    uart_flip=True,  # Reverses the RX and TX pins if both are provided\n    use_pio=False,  # Use RP2040 PIO implementation of UART. Required if you want to use other pins than RX/TX\n)\n\n")),(0,a.kt)("h3",{id:"split_side"},(0,a.kt)("inlineCode",{parentName:"h3"},"split_side")),(0,a.kt)("p",null,"This tells your microcontroller wich side it handles. It's usually not necessary -- defaulting to ",(0,a.kt)("inlineCode",{parentName:"p"},"split_side = None")," it results in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Auto dectection of the side from the drive name (ending with 'R'/'L')."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"split_target")," will be overriden. Each side will act as a ",(0,a.kt)("inlineCode",{parentName:"li"},"split_target")," if connected to a usb host.")),(0,a.kt)("p",null,"The default will cover most cases, but you can still choose to set all that manually, if for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You want to debug and/or upload to both sides at the same time over USB. Explicitly setting ",(0,a.kt)("inlineCode",{parentName:"li"},"split_side")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"split_target")," prevents that both halfs consider themselves as ",(0,a.kt)("inlineCode",{parentName:"li"},"split_target")," when a USB connection is detected."),(0,a.kt)("li",{parentName:"ul"},"There are different peripherals on both sides, others than just mirrored the columns (see ",(0,a.kt)("a",{parentName:"li",href:"#split_flip"},(0,a.kt)("inlineCode",{parentName:"a"},"split_flip")," section"),'). That means that the most boards with "flippable" PCBs do ',(0,a.kt)("strong",{parentName:"li"},"not")," need this. The following code is ",(0,a.kt)("strong",{parentName:"li"},"not")," a guideline, but an extraordinary example showing the flexibility of KMK (and would realistically be applicable only in messy handwired keyboards):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from storage import getmount\n\nside = SplitSide.RIGHT if str(getmount('/').label)[-1] == 'R' else SplitSide.LEFT\n\nif side == SplitSide.RIGHT:\n    keyboard.col_pins = ...\n    keyboard.row_pins = ...\n    keyboard.diode_orientation = ...\nelse:\n    keyboard.col_pins = ...\n    keyboard.row_pins = ...\n    keyboard.diode_orientation = ...\n\nsplit = Split(\n    split_side=side,\n    target_left=True,\n    ...\n)\n")),(0,a.kt)("p",null,"Note: It is best to stay as consistent as possible, but thanks to the ",(0,a.kt)("inlineCode",{parentName:"p"},"coord_mapping")," feature, none of the ",(0,a.kt)("inlineCode",{parentName:"p"},"col_pins"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"row_pins")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"diode_orientation")," ",(0,a.kt)("strong",{parentName:"p"},"need")," to be the same for both side.\nIt is however necessary for ",(0,a.kt)("inlineCode",{parentName:"p"},"len(col_pins) * len(row_pins)")," to be the same to calculate the offset of the key number on the left side correctly."),(0,a.kt)("h3",{id:"split_flip"},(0,a.kt)("inlineCode",{parentName:"h3"},"split_flip")),(0,a.kt)("p",null,"If your split keyboard uses the ",(0,a.kt)("strong",{parentName:"p"},"same PCB for both sides"),", but vertically flipped, set this to ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"False")," otherwise. ",(0,a.kt)("inlineCode",{parentName:"p"},"True")," means the wiring is the same for both side except that the ",(0,a.kt)("inlineCode",{parentName:"p"},"col_pins")," are reversed."),(0,a.kt)("h3",{id:"split_target_left"},(0,a.kt)("inlineCode",{parentName:"h3"},"split_target_left")),(0,a.kt)("p",null,'The "split_target" refers to the side that acts as the USB HID.'),(0,a.kt)("p",null,"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"split_side = None")," (similar to EE HANDS in QMK) this parameter will be overriden."),(0,a.kt)("h3",{id:"uart_flip"},(0,a.kt)("inlineCode",{parentName:"h3"},"uart_flip")),(0,a.kt)("p",null,"If your boards are connected through the ",(0,a.kt)("strong",{parentName:"p"},"same")," pins (like gpio",(0,a.kt)("strong",{parentName:"p"},"4")," of board A to gpio",(0,a.kt)("strong",{parentName:"p"},"4")," of board B): use ",(0,a.kt)("inlineCode",{parentName:"p"},"uart_flip = True"),"."),(0,a.kt)("p",null,"If your boards are connected through ",(0,a.kt)("strong",{parentName:"p"},"different")," pins (like gpio",(0,a.kt)("strong",{parentName:"p"},"4")," of board A to gpio",(0,a.kt)("strong",{parentName:"p"},"10")," of board B): use ",(0,a.kt)("inlineCode",{parentName:"p"},"uart_flip = False"),"."),(0,a.kt)("h3",{id:"use_pio"},(0,a.kt)("inlineCode",{parentName:"h3"},"use_pio")),(0,a.kt)("p",null,"If you're using an RP2040 based board and want the split communication to use other pins than the ones with hardware UART support, you can use the PIO implementation. Typical use cases for this are premade boards, made with QMK's bitbanging protocols in mind."),(0,a.kt)("p",null,"In order to enable it, you must:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install Circuitpython version > 7.2,"),(0,a.kt)("li",{parentName:"ul"},"pass ",(0,a.kt)("inlineCode",{parentName:"li"},"use_pio=True")," into the ",(0,a.kt)("inlineCode",{parentName:"li"},"Split()")," constructor.")),(0,a.kt)("h3",{id:"data_pindata_pin2"},(0,a.kt)("inlineCode",{parentName:"h3"},"data_pin"),"/",(0,a.kt)("inlineCode",{parentName:"h3"},"data_pin2")),(0,a.kt)("p",null,"For UART ",(0,a.kt)("inlineCode",{parentName:"p"},"SplitType"),": on the ",(0,a.kt)("inlineCode",{parentName:"p"},"split_target")," side, ",(0,a.kt)("inlineCode",{parentName:"p"},"data_pin")," is the one use for RX, ",(0,a.kt)("inlineCode",{parentName:"p"},"data_pin2")," the one for TX."),(0,a.kt)("h2",{id:"ee-hands--auto-handedness"},"EE HANDS / AUTO HANDEDNESS"),(0,a.kt)("p",null,"If you want to plug USB in on either side, or are using Bluetooth, this is for you. For this feature to work your circuitpython drive must be renamed following the guidelines at the beginning of this doc."),(0,a.kt)("p",null,"For wired connections you don't need to pass anything. For Bluetooth, remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"split_side")," like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Wired\nsplit = Split()\n# Wireless\nsplit = Split(split_type=SplitType.BLE)\n")))}m.isMDXComponent=!0}}]);