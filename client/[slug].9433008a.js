import{S as t,i as s,s as a,a as e,e as o,t as i,y as n,f as c,g as r,c as l,b as u,d as h,h as f,j as d,k as p,n as m,o as v}from"./client.3bfd7cf5.js";function j(t){let s,a,j,g,x,y,E=t[0].title+"";return document.title=s=t[0].title,{c(){a=e(),j=o("h1"),g=i(E),x=e(),y=o("div"),this.h()},l(t){n('[data-svelte="svelte-1uty71u"]',document.head).forEach(c),a=r(t),j=l(t,"H1",{});var s=u(j);g=h(s,E),s.forEach(c),x=r(t),y=l(t,"DIV",{class:!0}),u(y).forEach(c),this.h()},h(){f(y,"class","content svelte-emm3f3")},m(t,s){d(t,a,s),d(t,j,s),p(j,g),d(t,x,s),d(t,y,s)},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&m(g,E)},i:v,o:v,d(t){t&&c(a),t&&c(j),t&&c(x),t&&c(y)}}}async function g({params:t}){const s=await this.fetch(`series/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function x(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,x,j,a,{post:0})}}export{g as preload};
