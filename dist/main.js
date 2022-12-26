(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>u});var t=r(81),o=r.n(t),a=r(645),i=r.n(a),c=r(667),s=r.n(c),d=new URL(r(818),r.b),p=i()(o()),l=s()(d);p.push([n.id,"/* global rules */\r\n*{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody{\r\n  background-color: #eee;\r\n}\r\n\r\nnav{\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1.5rem;\r\n  background-color: #7f0000;\r\n  list-style: none;\r\n  padding: 1rem;\r\n}\r\nnav button{\r\n  cursor: pointer;\r\n  color: white;\r\n  text-transform: uppercase;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\nnav button:hover{\r\n  color: #f05545;\r\n}\r\n\r\n/* home */\r\n.homeContainer{\r\n  background-image:url("+l+") ;\r\n  background-size: cover;\r\n  width: 70%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem;\r\n  height: 100vh;\r\n  gap: 10rem;\r\n}\r\n.home-content{\r\n  color: white;\r\n  text-transform: capitalize;\r\n  font-size: 70px;\r\n  text-align: center;\r\n  padding: 0 2rem;\r\n}\r\n.see-menu{\r\n  text-transform: uppercase;\r\n  padding: 1rem 2rem;\r\n  cursor: pointer;\r\n  background-color: #7f0000;\r\n  color: white;\r\n  font-size: 20px;\r\n  border: none;\r\n  border-radius: 15px;\r\n  -webkit-border-radius: 15px;\r\n  -moz-border-radius: 15px;\r\n  -ms-border-radius: 15px;\r\n  -o-border-radius: 15px;\r\n}\r\n.see-menu:hover{\r\n  background-color: #f05545;\r\n}\r\n\r\n/* menu */\r\n.menu-container{\r\n  background-color: #f05545;\r\n  width: 70%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  padding: 2rem;\r\n  height: 100vh;\r\n}\r\n.pizza{\r\n  text-align: center;\r\n  color: #7f0000;\r\n  text-transform: uppercase;\r\n  font-size: 1.5rem;\r\n  border: 2px solid #7f0000;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  border-radius: 15px;\r\n  transition: .5s;\r\n  -webkit-transition: .5s;\r\n  -moz-transition: .5s;\r\n  -ms-transition: .5s;\r\n  -o-transition: .5s;\r\n  -webkit-border-radius: 15px;\r\n  -moz-border-radius: 15px;\r\n  -ms-border-radius: 15px;\r\n  -o-border-radius: 15px;\r\n}\r\n.pizza:hover{\r\n  transform: translate(10px, -10px);\r\n  box-shadow: -10px 10px 10px #7f0000;\r\n  -webkit-transform: translate(10px, -10px);\r\n  -moz-transform: translate(10px, -10px);\r\n  -ms-transform: translate(10px, -10px);\r\n  -o-transform: translate(10px, -10px);\r\n}\r\n\r\n.dis{\r\n  padding-bottom: 1rem;\r\n  background-color: white\r\n}\r\n.original{\r\n  width: 350px;\r\n  height: 300px;\r\n  margin-bottom: -6px;\r\n}\r\n.pepperoni{\r\n  width: 350px;\r\n  height: 300px;\r\n  margin-bottom: -6px;\r\n}\r\n\r\n/* contact us */\r\n.contact-container{\r\n  background-color: #f05545;\r\n  width: 70%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem;\r\n  height: 100vh;\r\n  color: #7f0000;\r\n  font-size: 3rem\r\n}\r\n\r\n.info{\r\n  text-transform: capitalize;\r\n  padding: 1rem;\r\n}\r\n.anchor{\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n.anchor:hover{\r\n  color: rgb(6, 6, 130);\r\n}",""]);const u=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=r(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,t);t.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),d=0;d<a.length;d++){var p=r(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},818:(n,e,r)=>{n.exports=r.p+"a5a14ced99b0045e6906.jpg"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),c=r(565),s=r.n(c),d=r(216),p=r.n(d),l=r(589),u=r.n(l),m=r(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.querySelector("#content");var b=r(818);const g=r.p+"bbeacb854de99d80739d.jpg",v=r.p+"3094e5fa95715d498f7b.jpg",x=new Image;x.classList.add("original"),x.src=g;const y=new Image;y.classList.add("pepperoni"),y.src=v;const C=()=>{btnContent.textContent="";const n=document.createElement("div");n.classList.add("menu-container");const e=new w("div","pizza",""),r=new w("div","dis",""),t=e.create(),o=r.create();o.textContent="our original pizza",t.appendChild(o),t.appendChild(x),n.appendChild(t);const a=e.create(),i=r.create();i.textContent="pepperoni pizza",a.appendChild(i),a.appendChild(y),n.appendChild(a),btnContent.appendChild(n)};(new Image).src=b;class w{constructor(n,e,r){this.type=n,this.className=e,this.content=r}create(){const n=document.createElement(`${this.type}`);return n.classList.add(`${this.className}`),n.textContent=`${this.content}`,n}}const z=()=>{btnContent.textContent="";const n=document.createElement("div");n.classList.add("homeContainer");const e=new w("div","home-content","worlds best pizza napoletana");n.appendChild(e.create());const r=new w("button","see-menu","see menu").create();n.appendChild(r),btnContent.appendChild(n),r.addEventListener("click",(()=>{C()}))},k=document.querySelector("#content");!function(){const n=document.createElement("nav"),e=(e,r)=>{const t=document.createElement("button");t.setAttribute("id",r),t.textContent=e,n.appendChild(t),h.appendChild(n)},r=[{name:"Home",id:"home"},{name:"Menu",id:"menu"},{name:"Contact Us",id:"contact"}];for(let n of r)e(n.name,n.id)}();const E=document.querySelector("nav"),S=document.createElement("div");S.setAttribute("id","btnContent"),k.appendChild(S),z(),E.childNodes.forEach((n=>{n.addEventListener("click",(n=>{switch(n.target.id){case"home":z();break;case"menu":C();break;case"contact":(()=>{btnContent.textContent="";const n=document.createElement("div");n.classList.add("contact-container");const e=new w("div","info",""),r=new w("a","anchor",""),t=e.create();t.textContent="call us on   ";const o=r.create();o.textContent="19277",o.setAttribute("href","tel:****"),t.appendChild(o),n.appendChild(t);const a=e.create();a.textContent="or email us on ";const i=r.create();i.textContent="pizzaria@pizza.com",i.setAttribute("href","mailto:pizzaria@pizza.com"),a.appendChild(i),n.appendChild(a),btnContent.appendChild(n)})()}}))}))})()})();