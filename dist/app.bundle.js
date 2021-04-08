var Client;(()=>{"use strict";var t={817:(t,e,r)=>{r.d(e,{Z:()=>n});var o=r(645),a=r.n(o)()((function(t){return t[1]}));a.push([t.id,":root{--color-1: #01A187;--color-2: #E85706;--color-3: #412410;--color-4: #F9F5E8;--color-5: #481C75;--layout-container: 1.25rem;--layout-grid: 3.625rem;--layout-gutter: 1rem;--gap-cta: .75rem;--gap-hero: 2rem;--gap-feature: 2rem;--gap-card: 1.25rem;--border-radius: 5rem;--border-radius-card: .5rem;--typography-sans: 'arial', sans-serif}html{box-sizing:border-box;scroll-behavior:smooth}*,*:before,*:after{box-sizing:inherit}body{background-color:var(--color-4);color:var(--color-3);letter-spacing:2px;font-family:var(--typography-sans);font-size:1.25rem;font-weight:400;line-height:1.25;margin:0 auto;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}a{color:var(--color-2);text-decoration:none}h1,h2,h3,h4,p{margin-top:0;font-weight:normal}h1,h2{margin-bottom:.75rem}h1{font-size:1.9375;line-height:1.2}h2{font-size:3rem;line-height:1.2;color:#E85706}h4{font-size:2rem;line-height:1.25;color:#01A187}p{margin-bottom:1.125rem;font-weight:normal}p:last-child{margin-bottom:0}strong{font-weight:700}small{font-size:.8125rem}img,svg{display:block;height:auto;max-width:100%}input{width:90%;padding:10px 10px;margin-top:10px;margin-bottom:10px;border:1px solid var(--color-4)}#city{padding-top:12.5px;padding-bottom:12.5px}#trip{margin-top:40px;margin-bottom:40px}.layout-container{padding-left:var(--layout-container);padding-right:var(--layout-container);max-width:1140px;margin:0 auto}.layout-flex{align-items:center;justify-content:center}.layout-flex{display:flex}.layout-flex__column{flex-direction:column}.layout-grid{display:grid}.layout-grid-col{grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));grid-gap:1rem}.no-grid-gap{grid-gap:0}.button{border:0.0625rem solid var(--color-2);border-radius:var(--border-radius);display:block;line-height:1;text-align:center;cursor:pointer}.button-primary{background-color:var(--color-2);color:var(--color-4)}.button-normal{padding:.85rem 2rem .85rem;width:fit-content}.button-small{font-size:var(--ui-typography-s);padding:.5rem .75rem .5625rem}.section-header{padding-bottom:1.25rem;padding-top:1.25rem}.card{margin-bottom:20px}.section-specials{text-align:center;padding-bottom:7rem;padding-top:7rem}.card--img{border:3px dashed var(--color-2);border-radius:8px;max-height:18rem;margin-bottom:2rem}.card--title{margin-bottom:1rem;font-size:2rem;font-weight:bold}.section-footer{background:var(--color-3);color:var(--color-4);padding-bottom:1.25rem;padding-top:1.25rem;text-align:center}\n",""]);const n=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,o){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(o)for(var n=0;n<this.length;n++){var i=this[n][0];null!=i&&(a[i]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);o&&a[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},379:(t,e,r)=>{var o,a=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),n=[];function i(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function l(t,e){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=e.base?l[0]+e.base:l[0],d=r[c]||0,s="".concat(c," ").concat(d);r[c]=d+1;var u=i(s),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(n[u].references++,n[u].updater(p)):n.push({identifier:s,updater:h(p,e),references:1}),o.push(s)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,s=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function u(t,e,r,o){var a=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=s(e,a);else{var n=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}function p(t,e,r){var o=r.css,a=r.media,n=r.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,g=0;function h(t,e){var r,o,a;if(e.singleton){var n=g++;r=m||(m=c(e)),o=u.bind(null,r,n,!1),a=u.bind(null,r,n,!0)}else r=c(e),o=p.bind(null,r,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var r=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<r.length;o++){var a=i(r[o]);n[a].references--}for(var c=l(t,e),d=0;d<r.length;d++){var s=i(r[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=c}}}}},e={};function r(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={id:o,exports:{}};return t[o](n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};(()=>{function t(t){t.preventDefault();const e=document.getElementById("city").value;let r=document.getElementById("startDate").value,o=document.getElementById("endDate").value,a=Client.countDown(r,o);Client.geonamesData(e).then((t=>{let e,n={};Client.init=()=>{Client.postData({city:t.name,country:t.countryName,lat:t.lat,lng:t.lng,dateStart:r,dateEnd:o,date:a,high:n.high_temp,low:n.low_temp,weather:n.weather.description,imgURL:e}),Client.addData()},Client.weatherbitData(t.lat,t.lng).then((t=>{n=t,Client.init()})),Client.pixabayData(t.name).then((t=>{e=t,Client.init()}))}))}r.r(o),r.d(o,{addData:()=>c,countDown:()=>e,geonamesData:()=>a,handleSubmit:()=>t,pixabayData:()=>i,postData:()=>l,weatherbitData:()=>n});const e=(t,e)=>{const r=Date.parse(t),o=Date.parse(e)-r;return Math.ceil(o/864e5)},a=async t=>{let e={};const r=await fetch("http://api.geonames.org/searchJSON?formatted=true&q="+t+"&username=aku1134&style=full");return e=(await r.json()).geonames[0],e},n=async(t,e)=>{let r;const o=await fetch("https://api.weatherbit.io/v2.0/forecast/daily?lat="+t+"&lon="+e+"&key=59a7cfa56e9c4444a8b85d1e34d1265a");return r=(await o.json()).data[0],console.log(r),r},i=async(t,e)=>{let r;const o=await fetch("https://pixabay.com/api/?key=21043908-d0b61e9524d7cfadbb3cab1e4&q="+encodeURIComponent(t)+"&image_type=photo&pretty=true"),a=await o.json();return parseInt(a.totalHits)>0?(r=a.hits[0],r.webformatURL):"https://cdn.pixabay.com/photo/2015/09/02/12/33/books-918521_960_720.jpg"},l=async(t={})=>{const e=await fetch("/addData",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const t=await e.json();return console.log("Data received:",t),t}catch(t){console.log("error",t)}},c=async()=>{const t=await fetch("/all"),e=await t.json();let r="";e.forEach((t=>{let e=`<div class="card">\n                            <img src="${t.imgURL}" class="card--img" alt="${t.city}, ${t.country} lazyload">\n                            <h2 class="card--title">My trip to: ${t.city}, ${t.country} <br> Departing: ${t.dateStart}</h2>\n                            <div>${t.city} trip is ${t.date} days away</div>\n                            <div>Typical Weather for there is <br> Highs: <strong>${t.high}</strong> and Lows:<strong>${t.low}</strong> <br>Mostly ${t.weather} </div>\n                        </div>`;r+=e})),document.querySelector("#trip").innerHTML=r};var d=r(379),s=r.n(d),u=r(817);s()(u.Z,{insert:"head",singleton:!1}),u.Z.locals})(),Client=o})();