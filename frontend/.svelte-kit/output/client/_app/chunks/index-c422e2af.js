function N(){}function W(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(D)}function J(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function dt(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function K(t){return Object.keys(t).length===0}function Q(t,...n){if(t==null)return N;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ht(t,n,e){t.$$.on_destroy.push(Q(n,e))}function mt(t,n,e,i){if(t){const c=O(t,n,e,i);return t[0](c)}}function O(t,n,e,i){return t[1]&&i?W(e.ctx.slice(),t[1](i(n))):e.ctx}function pt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const u=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)u[o]=n.dirty[o]|c[o];return u}return n.dirty|c}return n.dirty}function yt(t,n,e,i,c,u){if(c){const l=O(n,e,i,u);t.p(l,c)}}function gt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function xt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function $t(t){return t==null?"":t}let T=!1;function U(){T=!0}function V(){T=!1}function X(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const f=n[s];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=s?c+1:X(1,c,g=>n[e[g]].claim_order,s))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const u=[],l=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(u.push(n[r-1]);o>=r;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);u.reverse(),l.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<l.length;r++){for(;s<u.length&&l[r].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(l[r],f)}}function Z(t,n){if(T){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){T&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode.removeChild(t)}function wt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function P(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function Et(){return S(" ")}function Tt(){return S("")}function kt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function vt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function et(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,c=!1){G(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function it(t,n,e,i){return z(t,c=>c.nodeName===n,c=>{const u=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||u.push(o.name)}u.forEach(l=>c.removeAttribute(l))},()=>i(n))}function At(t,n,e){return it(t,n,e,P)}function ct(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Nt(t){return ct(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const c=t[i];if(c.nodeType===8&&c.textContent.trim()===n)return i}return t.length}function St(t){const n=H(t,"HTML_TAG_START",0),e=H(t,"HTML_TAG_END",n);if(n===e)return new L;G(t);const i=t.splice(n,e-n+1);E(i[0]),E(i[i.length-1]);const c=i.slice(1,i.length-1);for(const u of c)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(c)}function Ct(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n,e){t.classList[e?"add":"remove"](n)}function rt(t,n,e=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,!1,n),i}function Ht(t,n=document.body){return Array.from(n.querySelectorAll(t))}class lt{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=P(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class L extends lt{constructor(n){super(),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}let m;function h(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Lt(t){y().$$.on_mount.push(t)}function qt(t){y().$$.after_update.push(t)}function Bt(){const t=y();return(n,e)=>{const i=t.$$.callbacks[n];if(i){const c=rt(n,e);i.slice().forEach(u=>{u.call(t,c)})}}}function Dt(t,n){y().$$.context.set(t,n)}function Ot(t){return y().$$.context.get(t)}function Pt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],q=[],$=[],B=[],F=Promise.resolve();let v=!1;function I(){v||(v=!0,F.then(R))}function Gt(){return I(),F}function A(t){$.push(t)}const k=new Set;let x=0;function R(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),ot(n.$$)}for(h(null),d.length=0,x=0;q.length;)q.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];k.has(e)||(k.add(e),e())}$.length=0}while(d.length);for(;B.length;)B.pop()();v=!1,k.clear(),h(t)}function ot(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const w=new Set;let _;function zt(){_={r:0,c:[],p:_}}function Ft(){_.r||p(_.c),_=_.p}function st(t,n){t&&t.i&&(w.delete(t),t.i(n))}function It(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}const Rt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Wt(t,n){const e={},i={},c={$$scope:1};let u=t.length;for(;u--;){const l=t[u],o=n[u];if(o){for(const r in l)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[u]=o}else for(const r in l)c[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Jt(t){return typeof t=="object"&&t!==null?t:{}}function Kt(t){t&&t.c()}function Qt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:c,on_mount:u,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),i||A(()=>{const r=u.map(D).filter(J);l?l.push(...r):p(r),t.$$.on_mount=[]}),o.forEach(A)}function at(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){t.$$.dirty[0]===-1&&(d.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ut(t,n,e,i,c,u,l,o=[-1]){const r=m;h(t);const s=t.$$={fragment:null,ctx:null,props:u,update:N,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};l&&l(s.root);let f=!1;if(s.ctx=e?e(t,n.props||{},(a,g,...C)=>{const j=C.length?C[0]:g;return s.ctx&&c(s.ctx[a],s.ctx[a]=j)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](j),f&&ft(t,a)),g}):[],s.update(),f=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){U();const a=et(n.target);s.fragment&&s.fragment.l(a),a.forEach(E)}else s.fragment&&s.fragment.c();n.intro&&st(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),V(),R()}h(r)}class Vt{$destroy(){at(this,1),this.$destroy=N}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{$t as $,Wt as A,Jt as B,at as C,W as D,Gt as E,mt as F,yt as G,gt as H,pt as I,Z as J,Ot as K,Bt as L,ht as M,q as N,kt as O,wt as P,Mt as Q,Pt as R,Vt as S,Ht as T,dt as U,p as V,xt as W,bt as X,L as Y,St as Z,Rt as _,et as a,A as a0,vt as b,At as c,E as d,P as e,jt as f,nt as g,ct as h,Ut as i,Ct as j,Et as k,Tt as l,Nt as m,N as n,zt as o,It as p,Ft as q,st as r,_t as s,S as t,Dt as u,qt as v,Lt as w,Kt as x,Qt as y,ut as z};