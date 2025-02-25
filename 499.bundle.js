"use strict";(self.webpackChunkwebpack_config=self.webpackChunkwebpack_config||[]).push([[499],{499:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var i=r(848),n=r(540),a=(0,n.lazy)((function(){return r.e(911).then(r.bind(r,911))})),s="ER38azmF",o="qIsdfHQq",l="odZGKwU1",c="ObMaaflg";class u{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const m={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},d=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},f=async(e,t,r={})=>{const i=await fetch(m.origin+e,{method:"POST",headers:r,body:t}),n=await i.text(),a=new u(i.status,n);if(i.ok)return a;throw a},h=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},p=e=>e.webdriver||!e.languages||0===e.languages.length,g=()=>new u(451,"Unavailable For Headless Browser"),b=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const r=(i=t,n=e.watchVariable,i instanceof FormData?i.get(n):i[n]);var i,n;return"string"==typeof r&&e.list.includes(r)},v=()=>new u(403,"Forbidden"),y=async(e,t,r)=>{if(!t.throttle||!r)return!1;((e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const i=t.id||e,n=await(async(e,t,r)=>{const i=Number(await r.get(e)||0);return t-Date.now()+i})(i,t.throttle,r);return n>0||(await r.set(i,Date.now().toString()),!1)},w=()=>new u(429,"Too Many Requests");var j={init:(e,t="https://api.emailjs.com")=>{if(!e)return;const r=d(e);m.publicKey=r.publicKey,m.blockHeadless=r.blockHeadless,m.storageProvider=r.storageProvider,m.blockList=r.blockList,m.limitRate=r.limitRate,m.origin=r.origin||t},send:async(e,t,r,i)=>{const n=d(i),a=n.publicKey||m.publicKey,s=n.blockHeadless||m.blockHeadless,o=n.storageProvider||m.storageProvider,l={...m.blockList,...n.blockList},c={...m.limitRate,...n.limitRate};if(s&&p(navigator))return Promise.reject(g());if(h(a,e,t),(e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"})(r),r&&b(l,r))return Promise.reject(v());if(await y(location.pathname,c,o))return Promise.reject(w());const u={lib_version:"4.4.1",user_id:a,service_id:e,template_id:t,template_params:r};return f("/api/v1.0/email/send",JSON.stringify(u),{"Content-type":"application/json"})},sendForm:async(e,t,r,i)=>{const n=d(i),a=n.publicKey||m.publicKey,s=n.blockHeadless||m.blockHeadless,o=m.storageProvider||n.storageProvider,l={...m.blockList,...n.blockList},c={...m.limitRate,...n.limitRate};if(s&&p(navigator))return Promise.reject(g());const u=(e=>"string"==typeof e?document.querySelector(e):e)(r);h(a,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(u);const j=new FormData(u);return b(l,j)?Promise.reject(v()):await y(location.pathname,c,o)?Promise.reject(w()):(j.append("lib_version","4.4.1"),j.append("service_id",e),j.append("template_id",t),j.append("user_id",a),f("/api/v1.0/email/send-form",j))},EmailJSResponseStatus:u};function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function S(){var e,t,r=(e=(0,n.useState)(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i,n,a=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(i=r.next()).done)&&(a.push(i.value),!t||a.length!==t);s=!0);}catch(e){o=!0,n=e}finally{try{s||null==r.return||r.return()}finally{if(o)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=r[0],m=r[1],d=(0,n.useRef)(null),f=(0,n.useRef)(null);return(0,n.useEffect)((function(){if(u){var e=setTimeout((function(){m(null)}),5e3);return function(){return clearTimeout(e)}}}),[u]),(0,n.useEffect)((function(){if(!(window.innerWidth<=768)){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?e.target.classList.add(c):e.target.classList.remove(c)}))}),{threshold:.1});return f.current&&e.observe(f.current),function(){f.current&&e.unobserve(f.current)}}}),[]),(0,i.jsxs)("section",{id:"contacts",className:"".concat(s," container section"),children:[(0,i.jsx)("h2",{className:l,children:"Get in Touch"}),(0,i.jsx)(a,{notification:null!==u,message:(null==u?void 0:u.message)||"",type:(null==u?void 0:u.type)||"error"}),(0,i.jsx)("div",{ref:f,children:(0,i.jsxs)("form",{ref:d,onSubmit:function(e){e.preventDefault();var t=function(){var e,t,r,i=[];if(!d.current)return i;var n=new FormData(d.current),a=(null===(e=n.get("name"))||void 0===e?void 0:e.toString().trim())||"",s=(null===(t=n.get("email"))||void 0===t?void 0:t.toString().trim())||"",o=(null===(r=n.get("message"))||void 0===r?void 0:r.toString().trim())||"";return a.length<2&&i.push("Name must be at least 2 characters."),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)||i.push("Invalid email format. example@mail.com."),o.length<10&&i.push("Message must be at least 10 characters."),i}();t.length>0?m({message:t.join(" "),type:"error"}):d.current&&j.sendForm("service_b00s5fr","template_g0n2djd",d.current,"Mz9LXKquuoWK9HAew").then((function(e){var t;m({message:"Email sent successfully!",type:"success"}),null===(t=d.current)||void 0===t||t.reset()}),(function(e){var t;m({message:"Error sending email. Try again.",type:"error"}),null===(t=d.current)||void 0===t||t.reset()}))},children:[(0,i.jsx)("label",{htmlFor:"name",children:"Name"}),(0,i.jsx)("input",{required:!0,type:"text",id:"name",name:"name"}),(0,i.jsx)("label",{htmlFor:"email",children:"Email"}),(0,i.jsx)("input",{required:!0,type:"email",id:"email",name:"email"}),(0,i.jsx)("label",{htmlFor:"message",children:"Message"}),(0,i.jsx)("textarea",{required:!0,name:"message",id:"message"}),(0,i.jsx)("button",{className:o,type:"submit",children:"Send Message"})]})})]})}}}]);