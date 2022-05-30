"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7729],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Keys",p={unversionedId:"keys",id:"keys",title:"Keys",description:"NOTE: This is not a lookup table of key objects provided by KMK. That listing",source:"@site/docs/keys.md",sourceDirName:".",slug:"/keys",permalink:"/kmk_website/docs/keys",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/keys.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Keys Overview",permalink:"/kmk_website/docs/keycodes"},next:{title:"THIS IS OUT OF DATE. DO NOT USE. ONLY FOR REFERENCE",permalink:"/kmk_website/docs/kmkpython_vs_circuitpython"}},d={},h=[],c={toc:h};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keys"},"Keys"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: This is not a lookup table of key objects provided by KMK. That listing\ncan be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"keycodes.md"),". It's probably worth a look at the raw source if\nyou're stumped: ",(0,i.kt)("inlineCode",{parentName:"p"},"kmk/keys.py"),".")),(0,i.kt)("p",null,"This is a bunch of documentation about how a physical keypress translates to\nevents (and the lifecycle of said events) in KMK. It's somewhat technical, but\nif you're looking to extend your keyboard's functionality with extra code,\nyou'll need at least some of this technical knowledge."),(0,i.kt)("p",null,"The first few steps in the process aren't all that interesting for most\nworkflows, which is why they're buried deep in KMK: we scan a bunch of GPIO\nlanes (about as quickly as CircuitPython will let us) to see where, in a matrix\nof keys, a key has been pressed. The technical details about this process ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Keyboard_matrix_circuit"},"are\nprobably best left to\nWikipedia"),". Then, we scan\nthrough the defined keymap, finding the first valid key at this index based on\nthe stack of currently active layers (this logic, if you want to read through\nthe code, is in ",(0,i.kt)("inlineCode",{parentName:"p"},"kmk/internal_state.py"),", method ",(0,i.kt)("inlineCode",{parentName:"p"},"_find_key_in_map"),")."),(0,i.kt)("p",null,"The next few steps are the interesting part, but to understand them, we need to\nunderstand a bit about what a ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," object is (found in ",(0,i.kt)("inlineCode",{parentName:"p"},"kmk/keys.py"),"). ",(0,i.kt)("inlineCode",{parentName:"p"},"Key"),"\nobjects have a few core pieces of information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Their ",(0,i.kt)("inlineCode",{parentName:"p"},"code"),", which can be any integer. Integers below\n",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST_KMK_INTERNAL_KEY")," are sent through to the HID stack (and thus the\ncomputer, which will translate that integer to something meaningful - for\nexample, ",(0,i.kt)("inlineCode",{parentName:"p"},"code=4")," becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," on a US QWERTY/Dvorak keyboard).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Their attached modifiers (to implement things like shifted keys or ",(0,i.kt)("inlineCode",{parentName:"p"},"KC.HYPR"),",\nwhich are single key presses sending along more than one key in a single HID\nreport. This is a distinct concept from Sequences, which are a KMK feature\ndocumented in ",(0,i.kt)("inlineCode",{parentName:"p"},"sequences.md"),"). For almost all purposes outside of KMK core,\nthis field should be ignored - it can be safely populated through far more\nsane means than futzing with it by hand.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Some data on whether the key should actually be pressed or released - this is\nmostly an implementation detail of how Sequences work, where, for example,\n",(0,i.kt)("inlineCode",{parentName:"p"},"KC.RALT")," may need to be held down for the entirety of a sequence, rather than\nbeing released immediately before moving to the next character. Usually end\nusers shouldn't need to mess with this, but the fields are called ",(0,i.kt)("inlineCode",{parentName:"p"},"no_press"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"no_release")," and are referenced in a few places in the codebase if you\nneed examples.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Handlers for "press" (sometimes known as "keydown") and "release" (sometimes\nknown as "keyup") events. KMK provides handlers for standard keyboard\nfunctions and some special override keys (like ',(0,i.kt)("inlineCode",{parentName:"p"},"KC.GESC"),", which is an enhanced\nform of existing ANSI keys) in ",(0,i.kt)("inlineCode",{parentName:"p"},"kmk/handlers/stock.py"),", for layer switching in\n",(0,i.kt)("inlineCode",{parentName:"p"},"kmk/handlers.layers.py"),", and for everything related to Sequences (see\n",(0,i.kt)("inlineCode",{parentName:"p"},"sequences.md")," again) in ",(0,i.kt)("inlineCode",{parentName:"p"},"kmk/handlers/sequences.py"),". We'll discuss these more\nshortly.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Optional callbacks to be run before and/or after the above handlers. More on\nthat soon.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A generic ",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),' field, which is most commonly used for "argumented" keys -\nobjects in the ',(0,i.kt)("inlineCode",{parentName:"p"},"KC")," object which are actually functions that return ",(0,i.kt)("inlineCode",{parentName:"p"},"Key"),'\ninstances, which often need to access the arguments passed into the "outer"\nfunction. Many of these examples are related to layer switching - for example,\n',(0,i.kt)("inlineCode",{parentName:"p"},"KC.MO")," is implemented as an argumented key - when the user adds ",(0,i.kt)("inlineCode",{parentName:"p"},"KC.MO(1)")," to\ntheir keymap, the function call returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," object with ",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," set to an\nobject containing ",(0,i.kt)("inlineCode",{parentName:"p"},"layer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kc")," properties, for example. There's other uses\nfor ",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),", and examples can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"kmk/types.py")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Key")," objects can also be chained together by calling them! To create a key\nwhich holds Control and Shift simultaneously, we can simply do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"CTRLSHFT = KC.LCTL(KC.LSFT)\n\nkeyboard.keymap = [ ... CTRLSHFT ... ]\n")),(0,i.kt)("p",null,"When a key is pressed and we've pulled a ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," object out of the keymap, the\nfollowing will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pre-press callbacks will be run in the order they were assigned, with their\nreturn values discarded (unless the user attached these, they will almost\nnever exist)"),(0,i.kt)("li",{parentName:"ul"},"The assigned press handler will be run (most commonly, this is provided by\nKMK)"),(0,i.kt)("li",{parentName:"ul"},"Post-press callbacks will be run in the order they were assigned, with their\nreturn values discarded (unless the user attached these, they will almost\nnever exist)")),(0,i.kt)("p",null,"These same steps are run for when a key is released."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"So now... what's a handler, and what's a pre/post callback?!")),(0,i.kt)("p",null,"All of these serve roughly the same purpose: to ",(0,i.kt)("em",{parentName:"p"},"do something")," with the key's\ndata, or to fire off side effects. Most handlers are provided by KMK internally\nand modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"InternalState")," in some way - adding the key to the HID queue,\nchanging layers, etc. The pre/post handlers are designed to allow functionality\nto be bolted on at these points in the event flow without having to reimplement\n(or import and manually call) the internal handlers."),(0,i.kt)("p",null,"All of these methods take the same arguments, and for this, I'll lift a\ndocstring straight out of the source:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives the following:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"self (this Key instance)"),(0,i.kt)("li",{parentName:"ul"},"state (the current InternalState)"),(0,i.kt)("li",{parentName:"ul"},"KC (the global KC lookup table, for convenience)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"coord_int")," (an internal integer representation of the matrix coordinate\nfor the pressed key - this is likely not useful to end users, but is\nprovided for consistency with the internal handlers)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"coord_raw")," (an X,Y tuple of the matrix coordinate - also likely not useful)")),(0,i.kt)("p",{parentName:"blockquote"},"The return value of the provided callback is discarded. Exceptions are ",(0,i.kt)("em",{parentName:"p"},"not"),"\ncaught, and will likely crash KMK if not handled within your function."),(0,i.kt)("p",{parentName:"blockquote"},"These handlers are run in attachment order: handlers provided by earlier\ncalls of this method will be executed before those provided by later calls.")),(0,i.kt)("p",null,"This means if you want to add things like underglow/LED support, or have a\nbutton that triggers your GSM modem to call someone, or whatever else you can\nhack up in CircuitPython, which also retaining layer-switching abilities or\nwhatever the stock handler is, you're covered. This also means you can add\ncompletely new functionality to KMK by writing your own handler."),(0,i.kt)("p",null,"Here's an example of an after_press_handler to change the RGB lights with a layer change:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"LOWER = KC.DF(LYR_LOWER) #Set layer to LOWER\n\ndef low_lights(key, keyboard, *args):\n    print('Lower Layer') #serial feedback\n    keyboard.pixels.set_hsv_fill(0, 100, 255) #RGB extension call to set (H,S,V) values\n\nLOWER.after_press_handler(low_lights) #call the key with the after_press_handler\n")),(0,i.kt)("p",null,"Here's an example of a lifecycle hook to print a giant Shrek ASCII art. It\ndoesn't care about any of the arguments passed into it, because it has no\nintentions of modifying the internal state. It is purely a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Side_effect_(computer_science)"},"side\neffect")," run every\ntime Left Alt is pressed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def shrek(*args, **kwargs):\n    print('\u2880\u2874\u2811\u2844\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28c0\u28c0\u28e4\u28e4\u28e4\u28c0\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800')\n    print('\u2838\u2847\u2800\u283f\u2840\u2800\u2800\u2800\u28c0\u2874\u28bf\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28f7\u28e6\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800')\n    print('\u2800\u2800\u2800\u2800\u2811\u2884\u28e0\u283e\u2801\u28c0\u28c4\u2848\u2819\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28c6\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800')\n    print('\u2800\u2800\u2800\u2800\u2880\u2840\u2801\u2800\u2800\u2808\u2819\u281b\u2802\u2808\u28ff\u28ff\u28ff\u28ff\u28ff\u283f\u287f\u28bf\u28c6\u2800\u2800\u2800\u2800\u2800\u2800\u2800')\n    print('\u2800\u2800\u2800\u2880\u287e\u28c1\u28c0\u2800\u2834\u2802\u2819\u28d7\u2840\u2800\u28bb\u28ff\u28ff\u282d\u28a4\u28f4\u28e6\u28e4\u28f9\u2800\u2800\u2800\u2880\u28b4\u28f6\u28c6')\n    print('\u2800\u2800\u2880\u28fe\u28ff\u28ff\u28ff\u28f7\u28ee\u28fd\u28fe\u28ff\u28e5\u28f4\u28ff\u28ff\u287f\u2882\u2814\u289a\u287f\u28bf\u28ff\u28e6\u28f4\u28fe\u2801\u2838\u28fc\u287f')\n    print('\u2800\u2880\u285e\u2801\u2819\u283b\u283f\u281f\u2809\u2800\u281b\u28b9\u28ff\u28ff\u28ff\u28ff\u28ff\u28cc\u28a4\u28fc\u28ff\u28fe\u28ff\u285f\u2809\u2800\u2800\u2800\u2800\u2800')\n    print('\u2800\u28fe\u28f7\u28f6\u2807\u2800\u2800\u28e4\u28c4\u28c0\u2840\u2808\u283b\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u2847\u2800\u2800\u2800\u2800\u2800\u2800')\n    print('\u2800\u2809\u2808\u2809\u2800\u2800\u28a6\u2848\u28bb\u28ff\u28ff\u28ff\u28f6\u28f6\u28f6\u28f6\u28e4\u28fd\u2879\u28ff\u28ff\u28ff\u28ff\u2847\u2800\u2800\u2800\u2800\u2800\u2800')\n    print('\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2809\u2832\u28fd\u287b\u28bf\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28f7\u28dc\u28ff\u28ff\u28ff\u2847\u2800\u2800\u2800\u2800\u2800\u2800')\n    print('\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28b8\u28ff\u28ff\u28f7\u28f6\u28ee\u28ed\u28fd\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u2800\u2800\u2800\u2800\u2800\u2800\u2800')\n    print('\u2800\u2800\u2800\u2800\u2800\u2800\u28c0\u28c0\u28c8\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u2807\u2800\u2800\u2800\u2800\u2800\u2800\u2800')\n    print('\u2800\u2800\u2800\u2800\u2800\u2800\u28bf\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u2803\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800')\n    print('\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2839\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u28ff\u287f\u281f\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800')\n    print('\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2809\u281b\u283b\u283f\u283f\u283f\u283f\u281b\u2809')\n\n    return False #Returning True will follow thru the normal handlers sending the ALT key to the OS\nKC.LALT.before_press_handler(shrek)\n")),(0,i.kt)("p",null,"You can also copy a key without any pre/post handlers attached with ",(0,i.kt)("inlineCode",{parentName:"p"},".clone()"),",\nso for example, if I've already added Shrek to my ",(0,i.kt)("inlineCode",{parentName:"p"},"LALT")," but want a Shrek-less\n",(0,i.kt)("inlineCode",{parentName:"p"},"LALT")," key elsewhere in my keymap, I can just clone it, and the new key won't\nhave my handlers attached:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"SHREKLESS_ALT = KC.LALT.clone()\n")),(0,i.kt)("p",null,"You can also refer to a key by index:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KC['A']")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KC['NO']")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KC['LALT']"))),(0,i.kt)("p",null,"Or the ",(0,i.kt)("inlineCode",{parentName:"p"},"KC.get")," function which has an optional default argument, which will\nbe returned if the key is not found (",(0,i.kt)("inlineCode",{parentName:"p"},"default=None")," unless otherwise specified):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KC.get('A')")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KC.get('NO', None)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KC.get('NOT DEFINED', KC.RALT)"))),(0,i.kt)("p",null,"Key names are case-sensitive. ",(0,i.kt)("inlineCode",{parentName:"p"},"KC['NO']")," is different from ",(0,i.kt)("inlineCode",{parentName:"p"},"KC['no']"),". It is recommended\nthat names are normally UPPER_CASE. The exception to this are alpha keys; ",(0,i.kt)("inlineCode",{parentName:"p"},"KC['A']")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"KC['a']")," will both return the same, unshifted, key."))}u.isMDXComponent=!0}}]);