import{S as t,i as s,s as e,e as l,t as r,c as n,b as o,d as a,f as h,h as c,j as f,k as i,n as u,a as p,y as g,g as d,o as m,I as v}from"./client.3bfd7cf5.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function j(t){let s,e,p,g,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=r(d),this.h()},l(t){s=n(t,"LI",{});var l=o(s);e=n(l,"A",{rel:!0,href:!0});var r=o(e);p=a(r,d),r.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="series/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(p,d),1&s&&g!==(g="series/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function x(t){let s,e,u,x,b,I=t[0],L=[];for(let s=0;s<I.length;s+=1)L[s]=j(E(t,I,s));return{c(){s=p(),e=l("h1"),u=r("Recent posts"),x=p(),b=l("ul");for(let t=0;t<L.length;t+=1)L[t].c();this.h()},l(t){g('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=n(t,"H1",{});var l=o(e);u=a(l,"Recent posts"),l.forEach(h),x=d(t),b=n(t,"UL",{class:!0});var r=o(b);for(let t=0;t<L.length;t+=1)L[t].l(r);r.forEach(h),this.h()},h(){document.title="Blog",c(b,"class","svelte-1frg2tf")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,x,l),f(t,b,l);for(let t=0;t<L.length;t+=1)L[t].m(b,null)},p(t,[s]){if(1&s){let e;for(I=t[0],e=0;e<I.length;e+=1){const l=E(t,I,e);L[e]?L[e].p(l,s):(L[e]=j(l),L[e].c(),L[e].m(b,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=I.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(x),t&&h(b),v(L,t)}}}function b(){return this.fetch("series.json").then((t=>t.json())).then((t=>({posts:t})))}function I(t,s,e){let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,I,x,e,{posts:0})}}export{b as preload};
