import{_ as t,a as n,b as r,c as e,i as s,d as o,S as c,s as a,e as f,t as u,g as i,h as l,l as h,j as v,m as p,n as g,o as d,u as m,f as R,x as y,k as E,r as j,v as x,N as B}from"./client.2f031287.js";function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=n(t);if(e){var c=n(this).constructor;s=Reflect.construct(o,arguments,c)}else s=o.apply(this,arguments);return r(this,s)}}function $(t,n,r){var e=t.slice();return e[1]=n[r],e}function b(t){var n,r,e,s,o=t[1].title+"";return{c:function(){n=f("li"),r=f("a"),e=u(o),this.h()},l:function(t){n=i(t,"LI",{});var s=l(n);r=i(s,"A",{rel:!0,href:!0});var c=l(r);e=h(c,o),c.forEach(v),s.forEach(v),this.h()},h:function(){p(r,"rel","prefetch"),p(r,"href",s="series/"+t[1].slug)},m:function(t,s){g(t,n,s),d(n,r),d(r,e)},p:function(t,n){1&n&&o!==(o=t[1].title+"")&&m(e,o),1&n&&s!==(s="series/"+t[1].slug)&&p(r,"href",s)},d:function(t){t&&v(n)}}}function k(t){for(var n,r,e,s,o,c=t[0],a=[],m=0;m<c.length;m+=1)a[m]=b($(t,c,m));return{c:function(){n=R(),r=f("h1"),e=u("Recent posts"),s=R(),o=f("ul");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){y('[data-svelte="svelte-hfp9t8"]',document.head).forEach(v),n=E(t),r=i(t,"H1",{});var c=l(r);e=h(c,"Recent posts"),c.forEach(v),s=E(t),o=i(t,"UL",{class:!0});for(var f=l(o),u=0;u<a.length;u+=1)a[u].l(f);f.forEach(v),this.h()},h:function(){document.title="Blog",p(o,"class","svelte-1frg2tf")},m:function(t,c){g(t,n,c),g(t,r,c),d(r,e),g(t,s,c),g(t,o,c);for(var f=0;f<a.length;f+=1)a[f].m(o,null)},p:function(t,n){var r=j(n,1)[0];if(1&r){var e;for(c=t[0],e=0;e<c.length;e+=1){var s=$(t,c,e);a[e]?a[e].p(s,r):(a[e]=b(s),a[e].c(),a[e].m(o,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=c.length}},i:x,o:x,d:function(t){t&&v(n),t&&v(r),t&&v(s),t&&v(o),B(a,t)}}}function A(){return this.fetch("series.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function H(t,n,r){var e=n.posts;return t.$$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var I=function(n){t(f,c);var r=L(f);function f(t){var n;return e(this,f),n=r.call(this),s(o(n),t,H,k,a,{posts:0}),n}return f}();export default I;export{A as preload};
