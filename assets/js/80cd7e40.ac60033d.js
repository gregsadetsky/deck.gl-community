"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},l="LABEL",o={unversionedId:"modules/react-graph-layers/api-reference/node-style-label",id:"modules/react-graph-layers/api-reference/node-style-label",title:"LABEL",description:"text (String | Function, required)",source:"@site/../docs/modules/react-graph-layers/api-reference/node-style-label.md",sourceDirName:"modules/react-graph-layers/api-reference",slug:"/modules/react-graph-layers/api-reference/node-style-label",permalink:"/docs/modules/react-graph-layers/api-reference/node-style-label",draft:!1,editUrl:"https://github.com/visgl/deck.gl-community/tree/master/website/../docs/modules/react-graph-layers/api-reference/node-style-label.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MARKER",permalink:"/docs/modules/react-graph-layers/api-reference/node-style-marker"},next:{title:"LABEL",permalink:"/docs/modules/react-graph-layers/api-reference/edge-style-label"}},c={},u=[{value:"<code>text</code> (String | Function, required)",id:"text-string--function-required",level:3},{value:"<code>color</code> (String | Array | Function, optional)",id:"color-string--array--function-optional",level:3},{value:"<code>fontSize</code> (Number | Function, optional)",id:"fontsize-number--function-optional",level:3},{value:"<code>textAnchor</code> (String | Function, optional)",id:"textanchor-string--function-optional",level:3},{value:"<code>alignmentBaseline</code> (String | Function, optional)",id:"alignmentbaseline-string--function-optional",level:3},{value:"<code>angle</code> (Number | Function, optional)",id:"angle-number--function-optional",level:3}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"label"},"LABEL"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/gatsby/images/node-styles/label.png",height:"100"})),(0,a.kt)("h3",{id:"text-string--function-required"},(0,a.kt)("inlineCode",{parentName:"h3"},"text")," (String | Function, required)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The text of the label."),(0,a.kt)("li",{parentName:"ul"},"If a string is provided for ",(0,a.kt)("inlineCode",{parentName:"li"},"text"),", all the objects will have the same text."),(0,a.kt)("li",{parentName:"ul"},"If an accessor function is provided, the function will be called to retrieve the text of each object.")),(0,a.kt)("h3",{id:"color-string--array--function-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"color")," (String | Array | Function, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[0, 0, 0, 255]")),(0,a.kt)("li",{parentName:"ul"},"The value can be hex code, color name, or color array ",(0,a.kt)("inlineCode",{parentName:"li"},"[r, g, b, a]")," (each component is in the 0 - 255 range)."),(0,a.kt)("li",{parentName:"ul"},"If a color value (hex code, color name, or array) is provided, it is used as the global color for all objects."),(0,a.kt)("li",{parentName:"ul"},"If a function is provided, it is called on each object to retrieve its color.")),(0,a.kt)("h3",{id:"fontsize-number--function-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"fontSize")," (Number | Function, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"12")),(0,a.kt)("li",{parentName:"ul"},"If a number is provided for ",(0,a.kt)("inlineCode",{parentName:"li"},"fontSize"),", all the labels will have the same font size."),(0,a.kt)("li",{parentName:"ul"},"If an accessor function is provided, the function will be called to retrieve the font size of each label.")),(0,a.kt)("h3",{id:"textanchor-string--function-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"textAnchor")," (String | Function, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"middle"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The text anchor. Available options include 'start', 'middle' and 'end'.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If a string is provided, it is used as the text anchor for all objects.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If a function is provided, it is called on each object to retrieve its text anchor."))),(0,a.kt)("h3",{id:"alignmentbaseline-string--function-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"alignmentBaseline")," (String | Function, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"center"),"\nThe alignment baseline. Available options include 'top', 'center' and 'bottom'."),(0,a.kt)("li",{parentName:"ul"},"If a string is provided, it is used as the alignment baseline for all objects."),(0,a.kt)("li",{parentName:"ul"},"If a function is provided, it is called on each object to retrieve its alignment baseline.")),(0,a.kt)("h3",{id:"angle-number--function-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"angle")," (Number | Function, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0")),(0,a.kt)("li",{parentName:"ul"},"The rotating angle of each text label, in degrees."),(0,a.kt)("li",{parentName:"ul"},"If a number is provided, it is used as the angle for all objects."),(0,a.kt)("li",{parentName:"ul"},"If a function is provided, it is called on each object to retrieve its angle.")))}d.isMDXComponent=!0}}]);