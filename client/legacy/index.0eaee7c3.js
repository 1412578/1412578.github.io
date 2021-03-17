import{_ as t,a as n,b as e,c as r,i as c,s as o,d as i,S as u,e as a,f as s,t as f,g as l,h,j as v,k as p,l as d,m as y,n as m,o as g,p as $,q as b,r as j,u as w,v as E,w as O,x as D,y as I,z as R,A as C,B as x,C as V,D as P,E as k,F as B,G as z,H as A,I as L,J as N,K as S}from"./client.568238c5.js";function T(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function q(t){return t>=55296&&t<=56319}function U(t){return t>=56320&&t<=57343}function F(t){return t>=55296&&t<=56319}function G(t){return t>=56320&&t<=57343}var H=function(t,n,e){if("string"!=typeof n)throw new Error("Input must be string");for(var r,c,o=n.length,i=0,u=0;u<o;u+=1){if(r=n.charCodeAt(u),c=n[u],q(r)&&U(n.charCodeAt(u+1))&&(c+=n[u+=1]),(i+=t(c))===e)return n.slice(0,u+1);if(i>e)return n.slice(0,u-c.length+1)}return n}.bind(null,(function(t){if("string"!=typeof t)throw new Error("Input must be string");for(var n=t.length,e=0,r=null,c=null,o=0;o<n;o++)G(r=t.charCodeAt(o))?null!=c&&F(c)?e+=1:e+=3:r<=127?e+=1:r>=128&&r<=2047?e+=2:r>=2048&&r<=65535&&(e+=3),c=r;return e})),J=/[\/\?<>\\:\*\|"]/g,K=/[\x00-\x1f\x80-\x9f]/g,M=/^\.+$/,_=/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i,Q=/[\. ]+$/;function W(t,n){if("string"!=typeof t)throw new Error("Input must be string");var e=t.replace(J,n).replace(K,n).replace(M,n).replace(_,n).replace(Q,n);return H(e,255)}function X(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(r){var i=n(this).constructor;c=Reflect.construct(o,arguments,i)}else c=o.apply(this,arguments);return e(this,c)}}function Y(t){var n,e,r,c,o,i,u,O;return{c:function(){n=a("div"),e=a("div"),r=s(),c=a("div"),o=a("div"),i=f(t[0]),this.h()},l:function(u){n=l(u,"DIV",{class:!0});var a=h(n);e=l(a,"DIV",{class:!0}),h(e).forEach(v),r=p(a),c=l(a,"DIV",{class:!0});var s=h(c);o=l(s,"DIV",{class:!0});var f=h(o);i=d(f,t[0]),f.forEach(v),s.forEach(v),a.forEach(v),this.h()},h:function(){y(e,"class","cover svelte-je393w"),y(o,"class","title svelte-je393w"),y(c,"class","content svelte-je393w"),y(n,"class","book-container svelte-je393w")},m:function(a,s){m(a,n,s),g(n,e),g(n,r),g(n,c),g(c,o),g(o,i),u||(O=$(n,"click",(function(){b(t[1])&&t[1].apply(this,arguments)})),u=!0)},p:function(n,e){var r=j(e,1)[0];t=n,1&r&&w(i,t[0])},i:E,o:E,d:function(t){t&&v(n),u=!1,O()}}}function Z(t,n,e){var r=n.title,c=n.source,o=n.azw,i=n.onClick;return t.$$set=function(t){"title"in t&&e(0,r=t.title),"source"in t&&e(2,c=t.source),"azw"in t&&e(3,o=t.azw),"onClick"in t&&e(1,i=t.onClick)},[r,i,c,o]}var tt=function(n){t(a,u);var e=X(a);function a(t){var n;return r(this,a),n=e.call(this),c(i(n),t,Z,Y,o,{title:0,source:2,azw:3,onClick:1}),n}return a}();function nt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(r){var i=n(this).constructor;c=Reflect.construct(o,arguments,i)}else c=o.apply(this,arguments);return e(this,c)}}function et(t){var n,e;return{c:function(){n=a("div"),e=f("Loading..."),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var r=h(n);e=d(r,"Loading..."),r.forEach(v),this.h()},h:function(){y(n,"class","loader")},m:function(t,r){m(t,n,r),g(n,e)},p:E,i:E,o:E,d:function(t){t&&v(n)}}}var rt=function(n){t(a,u);var e=nt(a);function a(t){var n;return r(this,a),n=e.call(this),c(i(n),t,null,et,o,{}),n}return a}();function ct(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(r){var i=n(this).constructor;c=Reflect.construct(o,arguments,i)}else c=o.apply(this,arguments);return e(this,c)}}function ot(t){var n,e,r,c,o,i,u;return{c:function(){n=a("div"),e=a("div"),r=s(),c=a("div"),o=a("button"),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var i=h(n);e=l(i,"DIV",{class:!0}),h(e).forEach(v),r=p(i),c=l(i,"DIV",{class:!0});var u=h(c);o=l(u,"BUTTON",{class:!0}),h(o).forEach(v),u.forEach(v),i.forEach(v),this.h()},h:function(){y(e,"class","overlay svelte-ejmol4"),y(o,"class","close-btn svelte-ejmol4"),y(c,"class","detail-content svelte-ejmol4"),y(n,"class","detail-container svelte-ejmol4")},m:function(a,s){m(a,n,s),g(n,e),g(n,r),g(n,c),g(c,o),i||(u=$(o,"click",(function(){b(t[1])&&t[1].apply(this,arguments)})),i=!0)},p:function(n,e){t=n},d:function(t){t&&v(n),i=!1,u()}}}function it(t){var n,e=t[0]&&ot(t);return{c:function(){n=a("div"),e&&e.c()},l:function(t){n=l(t,"DIV",{});var r=h(n);e&&e.l(r),r.forEach(v)},m:function(t,r){m(t,n,r),e&&e.m(n,null)},p:function(t,r){var c=j(r,1)[0];t[0]?e?e.p(t,c):((e=ot(t)).c(),e.m(n,null)):e&&(e.d(1),e=null)},i:E,o:E,d:function(t){t&&v(n),e&&e.d()}}}function ut(t,n,e){var r=n.open,c=void 0===r||r,o=n.onClose;return t.$$set=function(t){"open"in t&&e(0,c=t.open),"onClose"in t&&e(1,o=t.onClose)},[c,o]}var at=function(n){t(a,u);var e=ct(a);function a(t){var n;return r(this,a),n=e.call(this),c(i(n),t,ut,it,o,{open:0,onClose:1}),n}return a}();function st(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(r){var i=n(this).constructor;c=Reflect.construct(o,arguments,i)}else c=o.apply(this,arguments);return e(this,c)}}function ft(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function lt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?ft(Object(e),!0).forEach((function(n){T(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ft(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function ht(t,n,e){var r=t.slice();return r[8]=n[e],r}function vt(t){for(var n,e,r=[],c=new Map,o=t[1],i=function(t){return t[8].slug},u=0;u<o.length;u+=1){var s=ht(t,o,u),f=i(s);c.set(f,r[u]=dt(f,s))}return{c:function(){n=a("div");for(var t=0;t<r.length;t+=1)r[t].c();this.h()},l:function(t){n=l(t,"DIV",{class:!0});for(var e=h(n),c=0;c<r.length;c+=1)r[c].l(e);e.forEach(v),this.h()},h:function(){y(n,"class","bookshelf svelte-6uj10p")},m:function(t,c){m(t,n,c);for(var o=0;o<r.length;o+=1)r[o].m(n,null);e=!0},p:function(t,e){2&e&&(o=t[1],A(),r=L(r,e,i,1,t,o,c,n,S,dt,null,ht),N())},i:function(t){if(!e){for(var n=0;n<o.length;n+=1)V(r[n]);e=!0}},o:function(t){for(var n=0;n<r.length;n+=1)P(r[n]);e=!1},d:function(t){t&&v(n);for(var e=0;e<r.length;e+=1)r[e].d()}}}function pt(t){var n,e,r;return e=new rt({}),{c:function(){n=a("div"),O(e.$$.fragment),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var r=h(n);I(e.$$.fragment,r),r.forEach(v),this.h()},h:function(){y(n,"class","loading-container svelte-6uj10p")},m:function(t,c){m(t,n,c),x(e,n,null),r=!0},p:E,i:function(t){r||(V(e.$$.fragment,t),r=!0)},o:function(t){P(e.$$.fragment,t),r=!1},d:function(t){t&&v(n),k(e)}}}function dt(t,n){var e,r,c;function o(){return n[6](n[8])}return r=new tt({props:{onClick:o,title:n[8].title,source:n[8].href}}),{key:t,first:null,c:function(){e=z(),O(r.$$.fragment),this.h()},l:function(t){e=z(),I(r.$$.fragment,t),this.h()},h:function(){this.first=e},m:function(t,n){m(t,e,n),x(r,t,n),c=!0},p:function(t,e){n=t;var c={};2&e&&(c.onClick=o),2&e&&(c.title=n[8].title),2&e&&(c.source=n[8].href),r.$set(c)},i:function(t){c||(V(r.$$.fragment,t),c=!0)},o:function(t){P(r.$$.fragment,t),c=!1},d:function(t){t&&v(e),k(r,t)}}}function yt(t){var n,e,r,c,o,i,u,b,w,E,B,z,A,L,N,S,T,q=[pt,vt],U=[];return 1,z=U[1]=q[1](t),L=new at({props:{open:t[2].open,onClose:t[3]}}),{c:function(){n=s(),e=a("div"),r=a("div"),c=s(),o=a("div"),i=a("input"),u=s(),b=a("div"),w=a("a"),E=f("index"),B=s(),z.c(),A=s(),O(L.$$.fragment),this.h()},l:function(t){D('[data-svelte="svelte-t9esqu"]',document.head).forEach(v),n=p(t),e=l(t,"DIV",{class:!0});var a=h(e);r=l(a,"DIV",{}),h(r).forEach(v),c=p(a),o=l(a,"DIV",{class:!0});var s=h(o);i=l(s,"INPUT",{type:!0,class:!0}),u=p(s),b=l(s,"DIV",{style:!0});var f=h(b);w=l(f,"A",{href:!0});var y=h(w);E=d(y,"index"),y.forEach(v),f.forEach(v),s.forEach(v),B=p(a),z.l(a),A=p(a),I(L.$$.fragment,a),a.forEach(v),this.h()},h:function(){document.title="Light Novels Epub Collections",y(i,"type","text"),y(i,"class","svelte-6uj10p"),y(w,"href","/series"),R(b,"display","none"),y(o,"class","search-box svelte-6uj10p"),y(e,"class","container svelte-6uj10p")},m:function(a,s){m(a,n,s),m(a,e,s),g(e,r),g(e,c),g(e,o),g(o,i),C(i,t[0]),g(o,u),g(o,b),g(b,w),g(w,E),g(e,B),U[1].m(e,null),g(e,A),x(L,e,null),N=!0,S||(T=$(i,"input",t[5]),S=!0)},p:function(t,n){var e=j(n,1)[0];1&e&&i.value!==t[0]&&C(i,t[0]),z.p(t,e);var r={};4&e&&(r.open=t[2].open),L.$set(r)},i:function(t){N||(V(z),V(L.$$.fragment,t),N=!0)},o:function(t){P(z),P(L.$$.fragment,t),N=!1},d:function(t){t&&v(n),t&&v(e),U[1].d(),k(L),S=!1,T()}}}function mt(){return this.fetch("/series.json").then((function(t){return t.json()})).then((function(t){return{data:t.slice(0,8).map((function(t){return lt(lt({},t),{},{slug:(n=t.title,r=e&&e.replacement||"",c=W(n,r),""===r?c:W(c,""))});var n,e,r,c}))}}))}function gt(t,n,e){var r=n.data,c="",o=[],i={open:!1},u=function(t){return t.toLowerCase().trim()};return t.$$set=function(t){"data"in t&&e(4,r=t.data)},t.$$.update=function(){17&t.$$.dirty&&(c.length>2?e(1,o=r.filter((function(t){return u(t.title).includes(u(c))})).slice(0,8)):e(1,o=r.slice(0,8)))},[c,o,i,function(){e(2,i={open:!1})},r,function(){c=this.value,e(0,c)},function(t){B("/series/".concat(t.slug))}]}var $t=function(n){t(a,u);var e=st(a);function a(t){var n;return r(this,a),n=e.call(this),c(i(n),t,gt,yt,o,{data:4}),n}return a}();export default $t;export{mt as preload};
