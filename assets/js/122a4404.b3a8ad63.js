"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5059],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var l=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,l,n=function(e,r){if(null==e)return{};var t,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=l.createContext({}),s=function(e){var r=l.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return l.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return l.createElement(l.Fragment,{},r)}},f=l.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?l.createElement(m,i(i({ref:r},u),{},{components:t})):l.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8847:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=t(7462),n=(t(7294),t(3905));const a={},i="MARKER",o={unversionedId:"modules/react-graph-layers/api-reference/node-style-marker",id:"modules/react-graph-layers/api-reference/node-style-marker",title:"MARKER",description:"marker (String | Function, required)",source:"@site/../docs/modules/react-graph-layers/api-reference/node-style-marker.md",sourceDirName:"modules/react-graph-layers/api-reference",slug:"/modules/react-graph-layers/api-reference/node-style-marker",permalink:"/docs/modules/react-graph-layers/api-reference/node-style-marker",draft:!1,editUrl:"https://github.com/visgl/deck.gl-community/tree/master/website/../docs/modules/react-graph-layers/api-reference/node-style-marker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RECTANGLE",permalink:"/docs/modules/react-graph-layers/api-reference/node-style-rectangle"},next:{title:"LABEL",permalink:"/docs/modules/react-graph-layers/api-reference/node-style-label"}},c={},s=[{value:"<code>marker</code> (String | Function, required)",id:"marker-string--function-required",level:3},{value:"<code>size</code> (Number | Function, optional)",id:"size-number--function-optional",level:3},{value:"<code>fill</code> (String | Array | Function, optional)",id:"fill-string--array--function-optional",level:3}],u={toc:s},d="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,l.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"marker"},"MARKER"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/gatsby/images/node-styles/marker.png",height:"100"})),(0,n.kt)("h3",{id:"marker-string--function-required"},(0,n.kt)("inlineCode",{parentName:"h3"},"marker")," (String | Function, required)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Marker can be one of the following types:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'"location-marker-filled", "bell-filled", "bookmark-filled", "bookmark", "cd-filled", "cd", "checkmark",\n"circle-check-filled", "circle-check", "circle-filled", "circle-i-filled", "circle-i", "circle-minus-filled",\n"circle-minus", "circle-plus-filled", "circle-plus", "circle-questionmark-filled", "circle-questionmark",\n"circle-slash-filled", "circle-slash", "circle-x-filled", "circle-x", "circle", "diamond-filled", "diamond",\n"flag-filled", "flag", "gear", "heart-filled", "heart", "bell", "location-marker", "octagonal-star-filled",\n"octagonal-star", "person-filled", "person", "pin-filled", "pin", "plus-small", "plus", "rectangle-filled",\n"rectangle", "star-filled", "star", "tag-filled", "tag", "thumb-down-filled", "thumb-down", "thumb-up",\n"thumb_up-filled", "triangle-down-filled", "triangle-down", "triangle-left-filled", "triangle-left",\n"triangle-right-filled", "triangle-right", "triangle-up-filled", "triangle-up", "x-small", "x"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If a string is provided for ",(0,n.kt)("inlineCode",{parentName:"li"},"marker"),", all the objects will use the same marker."),(0,n.kt)("li",{parentName:"ul"},"If an accessor function is provided, the function will be called to retrieve the marker of each marker.")),(0,n.kt)("h3",{id:"size-number--function-optional"},(0,n.kt)("inlineCode",{parentName:"h3"},"size")," (Number | Function, optional)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"12")),(0,n.kt)("li",{parentName:"ul"},"If a number is provided for ",(0,n.kt)("inlineCode",{parentName:"li"},"size"),", all the markers will have the same size."),(0,n.kt)("li",{parentName:"ul"},"If an accessor function is provided, the function will be called to retrieve the size of each marker.")),(0,n.kt)("h3",{id:"fill-string--array--function-optional"},(0,n.kt)("inlineCode",{parentName:"h3"},"fill")," (String | Array | Function, optional)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[0, 0, 0, 255]")),(0,n.kt)("li",{parentName:"ul"},"The value can be hex code, color name, or color array ",(0,n.kt)("inlineCode",{parentName:"li"},"[r, g, b, a]")," (each component is in the 0 - 255 range).\nIf a color value (hex code, color name, or array) is provided, it is used as the global color for all objects."),(0,n.kt)("li",{parentName:"ul"},"If a function is provided, it is called on each object to retrieve its color.")))}p.isMDXComponent=!0}}]);