import{S as t,i as s,s as e,e as a,t as r,a as o,c as l,b as n,d as c,g as i,f as h,j as f,k as u,n as m,x as d,h as v,o as g,B as p}from"./client.52af678a.js";function E(t,s,e){const a=t.slice();return a[1]=s[e],a}function x(t){let s,e,d,v=t[1].title+"";return{c(){s=a("li"),e=r(v),d=o()},l(t){s=l(t,"LI",{});var a=n(s);e=c(a,v),d=i(a),a.forEach(h)},m(t,a){f(t,s,a),u(s,e),u(s,d)},p(t,s){1&s&&v!==(v=t[1].title+"")&&m(e,v)},d(t){t&&h(s)}}}function I(t){let s,e,I,j,D,N,V,y,B,$,k,w,L,b,H,S,U,q=t[0].seriesName+"",z=t[0].author+"",A=t[0].tags+"",C=t[0].translatedBy+"";document.title=s=t[0].seriesName;let F=t[0].volumes,G=[];for(let s=0;s<F.length;s+=1)G[s]=x(E(t,F,s));return{c(){e=o(),I=a("h1"),j=r(q),D=o(),N=a("div"),V=r(z),y=o(),B=a("div"),$=r(A),k=o(),w=a("div"),L=r(C),b=o(),H=a("ul");for(let t=0;t<G.length;t+=1)G[t].c();S=o(),U=a("div"),this.h()},l(t){d('[data-svelte="svelte-1x1kus4"]',document.head).forEach(h),e=i(t),I=l(t,"H1",{});var s=n(I);j=c(s,q),s.forEach(h),D=i(t),N=l(t,"DIV",{});var a=n(N);V=c(a,z),a.forEach(h),y=i(t),B=l(t,"DIV",{});var r=n(B);$=c(r,A),r.forEach(h),k=i(t),w=l(t,"DIV",{});var o=n(w);L=c(o,C),o.forEach(h),b=i(t),H=l(t,"UL",{});var f=n(H);for(let t=0;t<G.length;t+=1)G[t].l(f);f.forEach(h),S=i(t),U=l(t,"DIV",{class:!0}),n(U).forEach(h),this.h()},h(){v(U,"class","content svelte-emm3f3")},m(t,s){f(t,e,s),f(t,I,s),u(I,j),f(t,D,s),f(t,N,s),u(N,V),f(t,y,s),f(t,B,s),u(B,$),f(t,k,s),f(t,w,s),u(w,L),f(t,b,s),f(t,H,s);for(let t=0;t<G.length;t+=1)G[t].m(H,null);f(t,S,s),f(t,U,s)},p(t,[e]){if(1&e&&s!==(s=t[0].seriesName)&&(document.title=s),1&e&&q!==(q=t[0].seriesName+"")&&m(j,q),1&e&&z!==(z=t[0].author+"")&&m(V,z),1&e&&A!==(A=t[0].tags+"")&&m($,A),1&e&&C!==(C=t[0].translatedBy+"")&&m(L,C),1&e){let s;for(F=t[0].volumes,s=0;s<F.length;s+=1){const a=E(t,F,s);G[s]?G[s].p(a,e):(G[s]=x(a),G[s].c(),G[s].m(H,null))}for(;s<G.length;s+=1)G[s].d(1);G.length=F.length}},i:g,o:g,d(t){t&&h(e),t&&h(I),t&&h(D),t&&h(N),t&&h(y),t&&h(B),t&&h(k),t&&h(w),t&&h(b),t&&h(H),p(G,t),t&&h(S),t&&h(U)}}}async function j({params:t}){const s=await this.fetch(`series/${t.slug}.json`),e=await s.json();if(200===s.status)return{post:e};this.error(s.status,e.message)}function D(t,s,e){let{post:a}=s;return t.$$set=t=>{"post"in t&&e(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),s(this,t,D,I,e,{post:0})}}export{j as preload};
