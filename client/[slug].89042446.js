import{S as t,i as s,s as a,a as e,e as o,t as i,q as n,d as c,f as r,c as l,b as u,g as h,h as f,j as d,k as p,n as m,o as v}from"./client.05b368dc.js";function j(t){let s,a,j,g,x,E,$=t[0].title+"";return document.title=s=t[0].title,{c(){a=e(),j=o("h1"),g=i($),x=e(),E=o("div"),this.h()},l(t){n('[data-svelte="svelte-1uty71u"]',document.head).forEach(c),a=r(t),j=l(t,"H1",{});var s=u(j);g=h(s,$),s.forEach(c),x=r(t),E=l(t,"DIV",{class:!0}),u(E).forEach(c),this.h()},h(){f(E,"class","content svelte-emm3f3")},m(t,s){d(t,a,s),d(t,j,s),p(j,g),d(t,x,s),d(t,E,s)},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&$!==($=t[0].title+"")&&m(g,$)},i:v,o:v,d(t){t&&c(a),t&&c(j),t&&c(x),t&&c(E)}}}async function g({params:t}){const s=await this.fetch(`series/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function x(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,x,j,a,{post:0})}}export{g as preload};
