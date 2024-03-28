"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="CIRCLE",l={unversionedId:"modules/react-graph-layers/api-reference/node-style-circle",id:"modules/react-graph-layers/api-reference/node-style-circle",title:"CIRCLE",description:"fill (String | Array | Function, optional)",source:"@site/../docs/modules/react-graph-layers/api-reference/node-style-circle.md",sourceDirName:"modules/react-graph-layers/api-reference",slug:"/modules/react-graph-layers/api-reference/node-style-circle",permalink:"/docs/modules/react-graph-layers/api-reference/node-style-circle",draft:!1,editUrl:"https://github.com/visgl/deck.gl-community/tree/master/website/../docs/modules/react-graph-layers/api-reference/node-style-circle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Layout",permalink:"/docs/modules/react-graph-layers/api-reference/layout"},next:{title:"RECTANGLE",permalink:"/docs/modules/react-graph-layers/api-reference/node-style-rectangle"}},c={},u=[{value:"<code>fill</code> (String | Array | Function, optional)",id:"fill-string--array--function-optional",level:3},{value:"<code>radius</code> (Number | Function, optional)",id:"radius-number--function-optional",level:3},{value:"<code>stroke</code> (String | Array | Function, optional)",id:"stroke-string--array--function-optional",level:3},{value:"<code>strokeWidth</code> (Number | Function, optional)",id:"strokewidth-number--function-optional",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"circle"},"CIRCLE"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/gatsby/images/node-styles/circle.png",height:"100"})),(0,a.kt)("h3",{id:"fill-string--array--function-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"fill")," (String | Array | Function, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"#fff")),(0,a.kt)("li",{parentName:"ul"},"The value can be hex code, color name, or color array ",(0,a.kt)("inlineCode",{parentName:"li"},"[r, g, b, a]")," (each component is in the 0 - 255 range).\nIf a color value (hex code, color name, or array) is provided, it is used as the global color for all objects.\nIf a function is provided, it is called on each rectangle to retrieve its color.")),(0,a.kt)("h3",{id:"radius-number--function-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"radius")," (Number | Function, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1")),(0,a.kt)("li",{parentName:"ul"},"If a number is provided for ",(0,a.kt)("inlineCode",{parentName:"li"},"radius"),", all the circles will have the same radius.\nIf an accessor function is provided, the function will be called to retrieve the radius of each circle.")),(0,a.kt)("h3",{id:"stroke-string--array--function-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"stroke")," (String | Array | Function, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[0, 0, 0, 255]")),(0,a.kt)("li",{parentName:"ul"},"The value can be hex code, color name, or color array ",(0,a.kt)("inlineCode",{parentName:"li"},"[r, g, b, a]")," (each component is in the 0 - 255 range)."),(0,a.kt)("li",{parentName:"ul"},"If a color value (hex code, color name, or array) is provided, it is used as the global color for all objects."),(0,a.kt)("li",{parentName:"ul"},"If a function is provided, it is called on each rectangle to retrieve its color.")),(0,a.kt)("h3",{id:"strokewidth-number--function-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"strokeWidth")," (Number | Function, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0")),(0,a.kt)("li",{parentName:"ul"},"The width of the outline of each rectangle."),(0,a.kt)("li",{parentName:"ul"},"If a number is provided, it is used as the outline width for all rectangles."),(0,a.kt)("li",{parentName:"ul"},"If a function is provided, it is called on each rectangle to retrieve its outline width.")))}d.isMDXComponent=!0}}]);