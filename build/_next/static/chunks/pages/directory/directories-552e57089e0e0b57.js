(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{4620:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/directory/directories",function(){return r(7308)}])},8518:function(e,t,r){"use strict";var n=r(5893),a=r(7294),s=r(6154);t.Z=()=>{let[e,t]=(0,a.useState)([]),[r,i]=(0,a.useState)(null);return((0,a.useEffect)(()=>{s.Z.get("".concat("https://automation-server.onrender.com","/api/mainads/Directory Ads")).then(e=>{e.data.sort((e,t)=>new Date(t.dateField)-new Date(e.dateField));let r=e.data.slice(0,5);t(r)}).catch(e=>{i(e)})},[]),r)?(0,n.jsxs)("div",{children:["Error fetching ads: ",r.message]}):(0,n.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",gap:"10px",height:"fit-content",listStyleType:"none",padding:0},children:e.map(e=>(0,n.jsx)("li",{className:"ad-item",style:{width:"269px",height:"269px"},children:(0,n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"fill"}})})},e.id))})}},7308:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893),a=r(7294),s=r(9928),i=r(5973),l=r(6154),o=r(1163),c=r(4499),d=r(8518),u=e=>{let{blogs:t}=e,[r,s]=(0,a.useState)(1),[i,u]=(0,a.useState)([]),[p,h]=(0,a.useState)(!0),[g,f]=(0,a.useState)(1),x=(0,o.useRouter)(),[m,v]=(0,a.useState)(null),[b,j]=(0,a.useState)(null),y=e=>{let r=t.filter(t=>t.selectedIndustry===e);u(r),s(1)},w=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],N=e=>{e!==r&&s(e)};if((0,a.useEffect)(()=>{let e=async()=>{try{let e=await l.Z.get("".concat("https://automation-server.onrender.com","/api/directory/alldirectories?page=").concat(r,"&perPage=").concat(12)),{data:t}=e;console.log(t,"Trending Posts"),Array.isArray(t.posts)?(u(t.posts),f(Math.ceil(t.totalPosts/12))):console.log("Invalid data format for Trending Posts")}catch(e){console.log("Error:",e)}};e().then(()=>{h(!1)})},[r]),(0,a.useEffect)(()=>{if(b){let e=t.filter(t=>{console.log(e,"blgofdaara");let r=new Date(t.startDate);return r.getMonth()===b-1});s(1),u(e)}else u(t)},[b,t]),p)return(0,n.jsx)("div",{className:"flex justify-center items-center",style:{padding:"100px"},children:(0,n.jsx)(c.Z,{color:"#d63636"})});if(!Array.isArray(i))return(0,n.jsx)("div",{children:"Error: Invalid data format"});if(0===i.length)return(0,n.jsx)("div",{children:"No posts available"});let E=12*r,_=E-12;i.slice(_,E);let O=[],S=1;if(g>10){let e=Math.ceil(5);S=r<=e?1:r>g-e?g-10+1:r-e+1}let k=Math.min(S+10-1,g);for(let e=S;e<=k;e++)O.push(e);let P=e=>{v(e)},Z=()=>{v(null)};return(0,n.jsxs)("div",{className:"grid grid-cols-4 gap-4 mx-20 my-2 font-poppins",children:[(0,n.jsx)("div",{className:"col-span-4 flex justify-center mt-4 mx-24",children:(0,n.jsx)("ul",{className:"flex space-x-2",children:Array.from({length:26}).map((e,t)=>(0,n.jsx)("button",{className:"bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-2 rounded ".concat(b===t+1?"bg-red-900":""),onClick:()=>j(t+1),children:w[t]}))})}),(0,n.jsxs)("div",{className:"col-span-4 grid grid-cols-4 gap-4 ",children:[(0,n.jsx)("div",{className:"col-span-1 grid grid-cols-1 gap-1 ",children:(0,n.jsx)("div",{className:"col-span-1 grid grid-cols-1 gap-1",children:(0,n.jsx)("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden max-w-full border border-solid border-gray-300",style:{maxHeight:"300px",overflowY:"auto"},children:(0,n.jsx)("div",{className:"p-6",children:(0,n.jsx)("ul",{className:"list-none p-0 text-gray-500 mb-2",children:Array.from(new Set(i.map(e=>e.selectedIndustry))).filter(e=>e&&isNaN(Number(e))).map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#industry-".concat(t),className:"text-blue-500 hover:underline",onClick:()=>y(e),children:e})},t))})})})})}),(0,n.jsx)("div",{className:"col-span-2 grid grid-cols-2 gap-2  ",children:i.map(e=>(0,n.jsxs)("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden max-w-full ".concat(m===e._id?"shadow-xl":""),onMouseEnter:()=>P(e._id),onMouseLeave:Z,children:[(0,n.jsx)("img",{src:e.logo,alt:e.title,className:"h-40 w-full object-fit-contain"}),(0,n.jsxs)("div",{className:"p-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2",children:e.title}),(0,n.jsx)("p",{className:"text-gray-500 mb-2",children:e.designation}),(0,n.jsx)("h4",{className:"text-gray-500 mb-2",children:e.selectedIndustry}),(0,n.jsx)("p",{className:"text-gray-500 mb-4",children:e.acti_date}),(0,n.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:()=>x.push("/directories/".concat(e._id)),children:"Read More"})]})]},e._id))}),(0,n.jsx)("div",{className:"col-span-1 grid grid-cols-1 gap-1 ",children:(0,n.jsx)("div",{className:"col-span-1 grid grid-cols-1 gap-1",children:(0,n.jsx)(d.Z,{})})}),(0,n.jsx)("div",{className:"col-span-4 flex justify-center mt-8",children:g>1&&(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{className:"flex space-x-6",children:[(0,n.jsx)("li",{children:(0,n.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded",onClick:()=>N(r-1),disabled:1===r,children:"Previous"})}),O.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded ".concat(r===e?"bg-red-700":""),onClick:()=>N(e),children:e})},e)),(0,n.jsx)("li",{children:(0,n.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded",onClick:()=>N(r+1),disabled:r===g,children:"Next"})})]})})})]})]})},p=r(6187),h=()=>(0,n.jsxs)("div",{children:[" ",(0,n.jsx)(s.default,{}),(0,n.jsx)(p.Z,{}),(0,n.jsx)(u,{blogs:[]}),(0,n.jsx)(i.default,{})]})},4499:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function s(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return a[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function i(e){var t=s(e);return"".concat(t.value).concat(t.unit)}var l=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var s=a.sheet,i="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(i,0),n},o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},d=l("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),u=l("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left"),p=function(e){var t=e.loading,r=e.color,a=void 0===r?"#000000":r,l=e.speedMultiplier,p=void 0===l?1:l,h=e.cssOverride,g=e.size,f=void 0===g?60:g,x=c(e,["loading","color","speedMultiplier","cssOverride","size"]),m=s(f),v=m.value,b=m.unit,j=o({display:"inherit",width:i(f),height:i(f),position:"relative"},void 0===h?{}:h),y=function(e){return{position:"absolute",top:"0",left:"0",width:"".concat(v).concat(b),height:"".concat(v).concat(b),border:"".concat(v/10).concat(b," solid ").concat(a),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(1===e?d:u," ").concat(2/p,"s 0s infinite linear")}};return void 0===t||t?n.createElement("span",o({style:j},x),n.createElement("span",{style:y(1)}),n.createElement("span",{style:y(2)})):null}}},function(e){e.O(0,[154,58,774,888,179],function(){return e(e.s=4620)}),_N_E=e.O()}]);