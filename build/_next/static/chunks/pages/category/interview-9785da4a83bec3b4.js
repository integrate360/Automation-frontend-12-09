(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419],{8697:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/interview",function(){return n(1139)}])},2458:function(e,t,n){"use strict";var r=n(5893),a=n(7294),i=n(6154);t.Z=()=>{let[e,t]=(0,a.useState)([]),[n,o]=(0,a.useState)(null);return((0,a.useEffect)(()=>{i.Z.get("".concat("https://automation-server.onrender.com","/api/mainads/Home Ads")).then(e=>{e.data.sort((e,t)=>new Date(t.dateField)-new Date(e.dateField));let n=e.data.slice(0,5);t(n)}).catch(e=>{o(e)})},[]),n)?(0,r.jsxs)("div",{children:["Error fetching ads: ",n.message]}):(0,r.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",gap:"10px",height:"fit-content",listStyleType:"none",padding:0},children:e.map(e=>(0,r.jsx)("li",{className:"ad-item",style:{width:"269px",height:"269px"},children:(0,r.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"}})})},e.id))})}},1139:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),a=n(7294),i=n(5973),o=n(9928),s=n(6154),l=n(1163),c=n(4499),d=n(2458),u=e=>{let{blogs:t}=e,[n,i]=(0,a.useState)(1),[o,u]=(0,a.useState)([]),[p,h]=(0,a.useState)(!0),[g,f]=(0,a.useState)(1),m=(0,l.useRouter)(),[x,v]=(0,a.useState)(null),y=e=>{e!==n&&i(e)};if((0,a.useEffect)(()=>{let e=async()=>{try{let e=await s.Z.get("".concat("https://automation-server.onrender.com","/api/post/interview?page=").concat(n,"&perPage=").concat(16)),{data:t}=e;console.log(t,"Trending Posts"),Array.isArray(t.posts)?(u(t.posts),f(Math.ceil(t.totalPosts/16))):console.log("Invalid data format for Trending Posts")}catch(e){console.log("Error:",e)}};e().then(()=>{h(!1)})},[n]),p)return(0,r.jsx)("div",{className:"flex justify-center items-center",style:{padding:"100px"},children:(0,r.jsx)(c.Z,{color:"#d63636"})});if(!Array.isArray(o))return(0,r.jsx)("div",{children:"Error: Invalid data format"});if(0===o.length)return(0,r.jsx)("div",{children:"No posts available"});let b=16*n,j=b-16;o.slice(j,b);let w=[],N=1;if(g>10){let e=Math.ceil(5);N=n<=e?1:n>g-e?g-10+1:n-e+1}let _=Math.min(N+10-1,g);for(let e=N;e<=_;e++)w.push(e);let E=e=>{let t=new Date(e),n=t.toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric"}),r=t.getDate(),a="th";return 1===r||21===r||31===r?a="st":2===r||22===r?a="nd":(3===r||23===r)&&(a="rd"),n.replace(/(\d+)/,"$1".concat(a))},O=e=>{v(e)},S=()=>{v(null)};return(0,r.jsxs)("div",{className:"grid grid-cols-4 gap-4 mx-5 my-2 font-poppins",children:[(0,r.jsx)("div",{className:"col-span-3 grid grid-cols-3 gap-3 mx-24",children:o.map(e=>(0,r.jsxs)("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden max-w-full ".concat(x===e._id?"shadow-xl":""),onMouseEnter:()=>O(e._id),onMouseLeave:S,children:[(0,r.jsx)("img",{src:e.image||"https://wwwd601d2yq4c.cdn.e2enetworks.net/ia-log-2020.png",alt:e.title,className:"h-40 w-full object-fill"}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h2",{className:"text-xl font-semibold mb-2",children:e.title}),(0,r.jsx)("div",{className:"text-gray-500 mb-2",children:e.brief&&(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(e.brief.split(" ").slice(0,6).join(" ")).concat(e.brief.split(" ").length>6?" ...":"")}})}),(0,r.jsx)("h4",{className:"text-gray-500 mb-2",children:e.selectedIndustry}),(0,r.jsx)("p",{className:"text-gray-500 mb-4",children:E(e.createdAt)}),(0,r.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:()=>m.push("/blog/".concat(e._id)),children:"Read More"})]})]},e._id))}),(0,r.jsx)("div",{className:"col-span-1 grid grid-cols-1 gap-1 ",children:(0,r.jsx)("div",{className:"col-span-1 grid grid-cols-1 gap-1",children:(0,r.jsx)(d.Z,{})})}),(0,r.jsx)("div",{className:"col-span-5 flex justify-center mt-8",children:g>1&&(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{className:"flex space-x-6",children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded",onClick:()=>y(n-1),disabled:1===n,children:"Previous"})}),w.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded ".concat(n===e?"bg-red-700":""),onClick:()=>y(e),children:e})},e)),(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded",onClick:()=>y(n+1),disabled:n===g,children:"Next"})})]})})})]})},p=n(6187),h=()=>(0,r.jsxs)("div",{children:[" ",(0,r.jsx)(o.default,{}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(u,{blogs:[]}),(0,r.jsx)(i.default,{})]})},4499:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function i(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return a[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function o(e){var t=i(e);return"".concat(t.value).concat(t.unit)}var s=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var i=a.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(o,0),r},l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},d=s("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),u=s("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left"),p=function(e){var t=e.loading,n=e.color,a=void 0===n?"#000000":n,s=e.speedMultiplier,p=void 0===s?1:s,h=e.cssOverride,g=e.size,f=void 0===g?60:g,m=c(e,["loading","color","speedMultiplier","cssOverride","size"]),x=i(f),v=x.value,y=x.unit,b=l({display:"inherit",width:o(f),height:o(f),position:"relative"},void 0===h?{}:h),j=function(e){return{position:"absolute",top:"0",left:"0",width:"".concat(v).concat(y),height:"".concat(v).concat(y),border:"".concat(v/10).concat(y," solid ").concat(a),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(1===e?d:u," ").concat(2/p,"s 0s infinite linear")}};return void 0===t||t?r.createElement("span",l({style:b},m),r.createElement("span",{style:j(1)}),r.createElement("span",{style:j(2)})):null}}},function(e){e.O(0,[154,58,774,888,179],function(){return e(e.s=8697)}),_N_E=e.O()}]);