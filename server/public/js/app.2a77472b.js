(function(){var t={8526:function(){},3316:function(t,e,n){"use strict";var r=n(144),o=n(998),a=n(704),i=n(5550),s=n(6312),u=n(5495),c=n(3059),l=n(7423),f=n(3687),d=n(626),m=n(4468),p=function(){var t=this,e=t._self._c;return e(o.Z,[e(a.Z,{attrs:{absolute:"",color:"#2e2e2e",dark:"","shrink-on-scroll":"",prominent:"",src:n(5767),"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3"},scopedSlots:t._u([{key:"img",fn:function({props:n}){return[e(u.Z,t._b({},"v-img",n,!1))]}},{key:"extension",fn:function(){return[e(m.Z,{attrs:{"align-with-title":""}},[e(d.Z,{attrs:{to:"/"}},[t._v("Home")]),e(d.Z,{attrs:{to:"/about"}},[t._v("About")]),e(d.Z,{attrs:{to:"/data"}},[t._v("Data")]),e(d.Z,{attrs:{to:"/map"}},[t._v("Animated Map")])],1)]},proxy:!0}])},[e(i.Z),e(s.Z,[t._v("Chris Neal's Portfolio")]),e(f.Z)],1),e(l.Z,{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-3","max-height":"100vh"}},[e(c.Z,[e("router-view")],1)],1)],1)},h=[],v={name:"App",data:()=>({})},g=v,b=n(1001),y=(0,b.Z)(g,p,h,!1,null,null,null),_=y.exports,w=n(8345),Z=n(266),k=n(2118),C=n(1713),x=function(){var t=this,e=t._self._c;return e(k.Z,{staticClass:"home-view"},[e(C.Z,{staticClass:"text-center"},[e(Z.Z,{staticClass:"mb-4"},[e("h1",[t._v(" Welcome to my Vue Portfolio ")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" This page is just beginning. I am currently in the process of gathering some of my previous work to combine and showcase here. Including work I did on https://19crimes.com/pages/rewards and https://energizergorewards.com/"),e("br"),e("br"),t._v(" I am working on some of the mobile resizing in certain areas. ")])]),e(Z.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",[t._v(" What's next? ")]),e(C.Z,{attrs:{justify:"center"}},[e("p",[t._v("I am woring on the Data Tab to add some better retrieval and diplay of the data coming from MongoDB. I am also going to make a section where new data can be added.")])])],1),e(Z.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",[t._v(" Important Links ")]),e(C.Z,{attrs:{justify:"center"}},t._l(t.importantLinks,(function(n,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1)],1)],1)},P=[],j={data:()=>({ecosystem:[],importantLinks:[{text:"github",href:"https://github.com/chrisneal72"},{text:"Energizer Go Rewards",href:"https://energizergorewards.com/"},{text:"19 Crimes",href:"https://19crimes.com/pages/rewards"}]})},O=j,A=(0,b.Z)(O,x,P,!1,null,"7a7adccb",null),E=A.exports;r.ZP.use(w.ZP);const S=[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,4818))},{path:"/data",name:"data",component:()=>n.e(126).then(n.bind(n,5211))},{path:"/map",name:"map",component:()=>n.e(126).then(n.bind(n,4469))}],T=new w.ZP({mode:"history",routes:S});var I=T,L=n(629);r.ZP.use(L.ZP);var N=new L.ZP.Store({state:{storedSampleData:null,sampleCount:null},getters:{},mutations:{},actions:{},modules:{}}),D=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},F=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("footer",[e("div",{staticClass:"footer"},[e("p",[t._v("Footer Goes Here")])])])}],M=n(8526),q=n.n(M),z=q(),B=(0,b.Z)(z,D,F,!1,null,null,null),H=B.exports,G=n(1705);r.ZP.use(G.Z);var W=new G.Z({});r.ZP.component("site-footer",H),r.ZP.config.productionTip=!1,new r.ZP({router:I,store:N,vuetify:W,render:t=>t(_)}).$mount("#app")},5767:function(t,e,n){"use strict";t.exports=n.p+"img/main.95e3f869.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{126:"data",443:"about"}[t]+"."+{126:"3dea10d7",443:"06196a20"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/data.49620083.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[o];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(e(i,s))return o();t(r,s,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={126:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(e&&e(r);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3316)}));r=n.O(r)})();
//# sourceMappingURL=app.2a77472b.js.map