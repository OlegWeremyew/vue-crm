if(!self.define){let e,s={};const u=(u,l)=>(u=new URL(u+".js",l).href,s[u]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=u,e.onload=s,document.head.appendChild(e)}else e=u,importScripts(u),s()})).then((()=>{let e=s[u];if(!e)throw new Error(`Module ${u} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const o=e=>u(e,r),p={module:{uri:r},exports:i,require:o};s[r]=Promise.all(l.map((e=>p[e]||o(e)))).then((e=>(n(...e),i)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vue-app/css/app.ad5ffafc.css",revision:null},{url:"/vue-app/css/chunk-vendors.45989d8a.css",revision:null},{url:"/vue-app/index.html",revision:"119b18f06fa04e512eaaabd2e29c2d36"},{url:"/vue-app/js/157.28d2a99f.js",revision:null},{url:"/vue-app/js/226.0bff9e29.js",revision:null},{url:"/vue-app/js/28.80ac5ae8.js",revision:null},{url:"/vue-app/js/816.d7edc958.js",revision:null},{url:"/vue-app/js/850.e2cbbe45.js",revision:null},{url:"/vue-app/js/854.2909287f.js",revision:null},{url:"/vue-app/js/890.74f76f19.js",revision:null},{url:"/vue-app/js/918.491514db.js",revision:null},{url:"/vue-app/js/929.d87e9558.js",revision:null},{url:"/vue-app/js/app.9c8b3dad.js",revision:null},{url:"/vue-app/js/chunk-vendors.98fffc1f.js",revision:null},{url:"/vue-app/manifest.json",revision:"81ccd5cc53d522f5b163cbbeeb7ba7ab"},{url:"/vue-app/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
