function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,i){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=c(e,n,r,i);t.p(o,a)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function E(t){return b(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}function x(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function P(t,e=document.body){return Array.from(e.querySelectorAll(t))}let N;function R(t){N=t}function j(){if(!N)throw new Error("Function called outside component initialization");return N}function k(t){j().$$.on_mount.push(t)}const A=[],C=[],L=[],O=[],I=Promise.resolve();let T=!1;function q(t){L.push(t)}let U=!1;const J=new Set;function M(){if(!U){U=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];R(e),B(e.$$)}for(R(null),A.length=0;C.length;)C.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];J.has(e)||(J.add(e),e())}L.length=0}while(A.length);for(;O.length;)O.pop()();T=!1,U=!1,J.clear()}}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const K=new Set;let D;function H(){D={r:0,c:[],p:D}}function V(){D.r||o(D.c),D=D.p}function z(t,e){t&&t.i&&(K.delete(t),t.i(e))}function F(t,e,n,r){if(t&&t.o){if(K.has(t))return;K.add(t),D.c.push((()=>{K.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function G(t,e){F(t,1,1,(()=>{e.delete(t.key)}))}function Y(t,e,n,r,o,s,i,c,a,l,u,f){let p=t.length,d=s.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,y=new Map;for(h=d;h--;){const t=f(o,s,h),c=n(t);let a=i.get(c);a?r&&a.p(t,e):(a=l(c,t),a.c()),$.set(c,g[h]=a),c in m&&y.set(c,Math.abs(h-m[c]))}const _=new Set,v=new Set;function b(t){z(t,1),t.m(c,u),i.set(t.key,t),u=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],r=e.key,o=n.key;e===n?(u=e.first,p--,d--):$.has(o)?!i.has(r)||_.has(r)?b(e):v.has(o)?p--:y.get(r)>y.get(o)?(v.add(r),b(e)):(_.add(o),p--):(a(n,i),p--)}for(;p--;){const e=t[p];$.has(e.key)||a(e,i)}for(;d;)b(g[d-1]);return g}function W(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Q(t){t&&t.c()}function Z(t,e){t&&t.l(e)}function tt(t,e,r,i){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,r),i||q((()=>{const e=a.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(q)}function et(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(A.push(t),T||(T=!0,I.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,n,s,i,c,a,l=[-1]){const u=N;R(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&nt(e,t)),n})):[],p.update(),d=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){const t=_(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&z(e.$$.fragment),tt(e,n.target,n.anchor,n.customElement),M()}R(u)}class ot{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function it(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!st.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),st.push(n,e)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.push(a),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ct={};function at(t){let e,n;const r=t[1].default,o=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(r,t,t[0],null);return{c(){e=d("main"),o&&o.c()},l(t){e=v(t,"MAIN",{});var n=_(e);o&&o.l(n),n.forEach(f)},m(t,r){u(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&a(o,r,t,t[0],e,null,null)},i(t){n||(z(o,t),n=!0)},o(t){F(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function lt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ut extends ot{constructor(t){super(),rt(this,t,lt,at,i,{})}}function ft(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=h(r)},l(t){e=v(t,"PRE",{});var o=_(e);n=b(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&f(e)}}}function pt(e){let n,r,o,s,i,c,a,p,$,w=e[1].message+"";document.title=n=e[0];let x=e[2]&&e[1].stack&&ft(e);return{c(){r=m(),o=d("h1"),s=h(e[0]),i=m(),c=d("p"),a=h(w),p=m(),x&&x.c(),$=g(),this.h()},l(t){P('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=E(t),o=v(t,"H1",{class:!0});var n=_(o);s=b(n,e[0]),n.forEach(f),i=E(t),c=v(t,"P",{class:!0});var l=_(c);a=b(l,w),l.forEach(f),p=E(t),x&&x.l(t),$=g(),this.h()},h(){y(o,"class","svelte-8od9u6"),y(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,i,e),u(t,c,e),l(c,a),u(t,p,e),x&&x.m(t,e),u(t,$,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(s,t[0]),2&e&&w!==(w=t[1].message+"")&&S(a,w),t[2]&&t[1].stack?x?x.p(t,e):(x=ft(t),x.c(),x.m($.parentNode,$)):x&&(x.d(1),x=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(i),t&&f(c),t&&f(p),x&&x.d(t),t&&f($)}}}function dt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class ht extends ot{constructor(t){super(),rt(this,t,dt,pt,i,{status:0,error:1})}}function mt(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&Q(n.$$.fragment),r=g()},l(t){n&&Z(n.$$.fragment,t),r=g()},m(t,e){n&&tt(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?W(s,[X(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){H();const t=n;F(t.$$.fragment,1,0,(()=>{et(t,1)})),V()}i?(n=new i(c()),Q(n.$$.fragment),z(n.$$.fragment,1),tt(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&z(n.$$.fragment,t),o=!0)},o(t){n&&F(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&et(n,t)}}}function gt(t){let e,n;return e=new ht({props:{error:t[0],status:t[1]}}),{c(){Q(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){tt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function $t(t){let e,n,r,o;const s=[gt,mt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){i[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?i[e].p(t,o):(H(),F(i[a],1,1,(()=>{i[a]=null})),V(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),z(n,1),n.m(r.parentNode,r))},i(t){o||(z(n),o=!0)},o(t){F(n),o=!1},d(t){i[e].d(t),t&&f(r)}}}function yt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ut({props:s}),{c(){Q(n.$$.fragment)},l(t){Z(n.$$.fragment,t)},m(t,e){tt(n,t,e),r=!0},p(t,[e]){const r=12&e?W(o,[4&e&&{segment:t[2][0]},8&e&&X(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(z(n.$$.fragment,t),r=!0)},o(t){F(n.$$.fragment,t),r=!1},d(t){et(n,t)}}}function _t(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:a=null}=e,{notify:l}=e;var u,f,p;return u=l,j().$$.after_update.push(u),f=ct,p=r,j().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,i,c,a,r,l]}class vt extends ot{constructor(t){super(),rt(this,t,_t,yt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const bt=[/^\/series\.json$/,/^\/series\/data\/?$/,/^\/series\/([^/]+?)\.json$/],Et=[{js:()=>Promise.all([import("./index.4460bd31.js"),__inject_styles(["client-a2a37a6a.css","index-d7659682.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.a65f5159.js"),__inject_styles(["client-a2a37a6a.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].35cde306.js"),__inject_styles(["client-a2a37a6a.css","[slug]-5bc8f95f.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.88e1d1fc.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))}],St=(wt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/series\/?$/,parts:[{i:1}]},{pattern:/^\/series\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:wt(t[1])})}]},{pattern:/^\/about\/?$/,parts:[{i:3}]}]);var wt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function xt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))}function Pt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Nt,Rt=1;const jt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},kt={};let At,Ct;function Lt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Ot(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(At))return null;let e=t.pathname.slice(At.length);if(""===e&&(e="/"),!bt.some((t=>t.test(e))))for(let n=0;n<St.length;n+=1){const r=St[n],o=r.pattern.exec(e);if(o){const n=Lt(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function It(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Pt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ot(o);if(s){Ut(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),jt.pushState({id:Nt},"",o.href)}}function Tt(){return{x:pageXOffset,y:pageYOffset}}function qt(t){if(kt[Nt]=Tt(),t.state){const e=Ot(new URL(location.href));e?Ut(e,t.state.id):location.href=location.href}else Rt=Rt+1,function(t){Nt=t}(Rt),jt.replaceState({id:Nt},"",location.href)}function Ut(t,e,n,r){return xt(this,void 0,void 0,(function*(){const o=!!e;if(o)Nt=e;else{const t=Tt();kt[Nt]=t,Nt=e=++Rt,kt[Nt]=n?t:{x:0,y:0}}if(yield Ct(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=kt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),kt[Nt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Jt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Mt,Bt=null;function Kt(t){const e=Ot(new URL(t,Jt(document)));if(e)return Bt&&t===Bt.href||(Bt={href:t,promise:ie(e)}),Bt.promise}function Dt(t){const e=Pt(t.target);e&&"prefetch"===e.rel&&Kt(e.href)}function Ht(t){clearTimeout(Mt),Mt=setTimeout((()=>{Dt(t)}),20)}function Vt(t,e={noscroll:!1,replaceState:!1}){const n=Ot(new URL(t,Jt(document)));return n?(jt[e.replaceState?"replaceState":"pushState"]({id:Nt},"",t),Ut(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const zt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ft,Gt,Yt,Wt=!1,Xt=[],Qt="{}";const Zt={page:function(t){const e=it(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:it(null),session:it(zt&&zt.session)};let te,ee,ne;function re(t,e){const{error:n}=t;return Object.assign({error:n},e)}function oe(t){return xt(this,void 0,void 0,(function*(){Ft&&Zt.preloading.set(!0);const e=function(t){return Bt&&Bt.href===t.href?Bt.promise:ie(t)}(t),n=Gt={},r=yield e,{redirect:o}=r;if(n===Gt)if(o)yield Vt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield se(n,e,re(e,t.page))}}))}function se(t,e,n){return xt(this,void 0,void 0,(function*(){Zt.page.set(n),Zt.preloading.set(!1),Ft?Ft.$set(e):(e.stores={page:{subscribe:Zt.page.subscribe},preloading:{subscribe:Zt.preloading.subscribe},session:Zt.session},e.level0={props:yield Yt},e.notify=Zt.page.notify,Ft=new vt({target:ne,props:e,hydrate:!0})),Xt=t,Qt=JSON.stringify(n.query),Wt=!0,ee=!1}))}function ie(t){return xt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Yt){const t=()=>({});Yt=zt.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},te)}let c,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>xt(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==Qt)return!0;const o=Xt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[a]=r[c+1],!e)return{segment:f};const p=a++;if(!ee&&!u&&Xt[c]&&Xt[c].part===e.i)return Xt[c];u=!1;const{default:d,preload:h}=yield Et[e.i].js();let m;return m=Wt||!zt.preloaded[c+1]?h?yield h.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},te):{}:zt.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var ce,ae,le;Zt.session.subscribe((t=>xt(void 0,void 0,void 0,(function*(){if(te=t,!Wt)return;ee=!0;const e=Ot(new URL(location.href)),n=Gt={},{redirect:r,props:o,branch:s}=yield ie(e);n===Gt&&(r?yield Vt(r.location,{replaceState:!0}):yield se(s,o,re(o,e.page)))})))),ce={target:document.querySelector("#sapper")},ae=ce.target,ne=ae,le=zt.baseUrl,At=le,Ct=oe,"scrollRestoration"in jt&&(jt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{jt.scrollRestoration="auto"})),addEventListener("load",(()=>{jt.scrollRestoration="manual"})),addEventListener("click",It),addEventListener("popstate",qt),addEventListener("touchstart",Dt),addEventListener("mousemove",Ht),zt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=zt;Yt||(Yt=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:Yt},level1:{props:{status:s,error:i},component:ht},segments:o},a=Lt(n);se([],c,{host:t,path:e,query:a,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;jt.replaceState({id:Rt},"",e);const n=Ot(new URL(location.href));if(n)return Ut(n,Rt,!0,t)}));export{w as A,Y as B,V as C,k as D,H as E,G as F,Kt as G,Vt as H,p as I,ot as S,m as a,_ as b,v as c,b as d,d as e,f,E as g,y as h,rt as i,u as j,l as k,$ as l,s as m,S as n,t as o,g as p,Q as q,Z as r,i as s,h as t,tt as u,z as v,F as w,et as x,P as y,x as z};

import __inject_styles from './inject_styles.5607aec6.js';