"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="Edge Style",l={unversionedId:"modules/react-graph-layers/api-reference/edge-style",id:"modules/react-graph-layers/api-reference/edge-style",title:"Edge Style",description:"Usage",source:"@site/../docs/modules/react-graph-layers/api-reference/edge-style.md",sourceDirName:"modules/react-graph-layers/api-reference",slug:"/modules/react-graph-layers/api-reference/edge-style",permalink:"/docs/modules/react-graph-layers/api-reference/edge-style",draft:!1,editUrl:"https://github.com/visgl/deck.gl-community/tree/master/website/../docs/modules/react-graph-layers/api-reference/edge-style.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Node Style",permalink:"/docs/modules/react-graph-layers/api-reference/node-style"},next:{title:"Interactions",permalink:"/docs/modules/react-graph-layers/api-reference/interactions"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"<code>stroke</code> (String | Array | Function, optional)",id:"stroke-string--array--function-optional",level:3},{value:"<code>strokeWidth</code> (Number | Function, optional)",id:"strokewidth-number--function-optional",level:3},{value:"<code>data</code> (Function, optional)",id:"data-function-optional",level:3},{value:"<code>visible</code> (Boolean, optional)",id:"visible-boolean-optional",level:3},{value:"<code>decorators</code> (Array, optional)",id:"decorators-array-optional",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"edge-style"},"Edge Style"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"edgeStyle={{\n  stroke: 'black',\n  strokeWidth: 2,\n  data: (data) => data,\n  visible: true,\n  decorators: [\n    {\n      type: EDGE_DECORATOR_TYPE.LABEL,\n      text: edge => edge.id,\n      color: '#000',\n      fontSize: 18,\n    },\n  ],\n}}\n")),(0,o.kt)("h3",{id:"stroke-string--array--function-optional"},(0,o.kt)("inlineCode",{parentName:"h3"},"stroke")," (String | Array | Function, optional)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[255, 255, 255, 255]")),(0,o.kt)("li",{parentName:"ul"},"The value can be hex code, color name, or color array ",(0,o.kt)("inlineCode",{parentName:"li"},"[r, g, b, a]")," (each component is in the 0 - 255 range)."),(0,o.kt)("li",{parentName:"ul"},"If a color value (hex code, color name, or array) is provided, it is used as the global color for all edges."),(0,o.kt)("li",{parentName:"ul"},"If a function is provided, it is called on each rectangle to retrieve its color.")),(0,o.kt)("h3",{id:"strokewidth-number--function-optional"},(0,o.kt)("inlineCode",{parentName:"h3"},"strokeWidth")," (Number | Function, optional)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"\nThe width of the outline of each rectangle.\nIf a number is provided, it is used as the outline width for all edges.\nIf a function is provided, it is called on each rectangle to retrieve its outline width.")),(0,o.kt)("h3",{id:"data-function-optional"},(0,o.kt)("inlineCode",{parentName:"h3"},"data")," (Function, optional)"),(0,o.kt)("p",null,"Allows setting of the layer data via accessor"),(0,o.kt)("h3",{id:"visible-boolean-optional"},(0,o.kt)("inlineCode",{parentName:"h3"},"visible")," (Boolean, optional)"),(0,o.kt)("p",null,"Determines if the layer is visible"),(0,o.kt)("h3",{id:"decorators-array-optional"},(0,o.kt)("inlineCode",{parentName:"h3"},"decorators")," (Array, optional)"),(0,o.kt)("p",null,"A set of decorators on edges. Please see more detail in the 'Edge decorators' chapter."))}u.isMDXComponent=!0}}]);