import{S as q,i as w,s as E,l as f,g as d,d as _,n as h,w as G,e as v,c as I,U as b,b as i,P as c,N as u,V as z,W as S,X as C,Q as k}from"./index-467184d8.js";let O={root:null,rootMargin:"0px",threshold:0};const P=(s,e)=>{const l=()=>{s.style.opacity="1"};return new IntersectionObserver(n=>{n[0].isIntersecting&&(console.log("an image has loaded"),s.src=e,s.complete?l():s.addEventListener("load",l))},O).observe(s),{destroy(){s.removeEventListener("load",l)}}};function g(s){let e;function l(t,o){return t[3]?U:Q}let a=l(s),n=a(s);return{c(){n.c(),e=f()},l(t){n.l(t),e=f()},m(t,o){n.m(t,o),d(t,e,o)},p(t,o){a===(a=l(t))&&n?n.p(t,o):(n.d(1),n=a(t),n&&(n.c(),n.m(e.parentNode,e)))},d(t){n.d(t),t&&_(e)}}}function Q(s){let e,l,a,n;return{c(){e=v("img"),this.h()},l(t){e=I(t,"IMG",{src:!0,alt:!0,style:!0,class:!0}),this.h()},h(){b(e.src,l=s[0])||i(e,"src",l),i(e,"alt",s[1]),i(e,"style",s[2]),i(e,"class","svelte-1xskegx"),c(e,"loaded",s[4])},m(t,o){d(t,e,o),a||(n=[u(e,"load",s[7]),u(e,"load",s[9])],a=!0)},p(t,o){o&1&&!b(e.src,l=t[0])&&i(e,"src",l),o&2&&i(e,"alt",t[1]),o&4&&i(e,"style",t[2]),o&16&&c(e,"loaded",t[4])},d(t){t&&_(e),a=!1,z(n)}}}function U(s){let e,l,a,n;return{c(){e=v("img"),this.h()},l(t){e=I(t,"IMG",{alt:!0,style:!0,class:!0}),this.h()},h(){i(e,"alt",s[1]),i(e,"style",s[2]),i(e,"class","svelte-1xskegx"),c(e,"loaded",s[4])},m(t,o){d(t,e,o),a||(n=[S(l=P.call(null,e,s[0])),u(e,"load",s[6]),u(e,"load",s[8])],a=!0)},p(t,o){o&2&&i(e,"alt",t[1]),o&4&&i(e,"style",t[2]),l&&C(l.update)&&o&1&&l.update.call(null,t[0]),o&16&&c(e,"loaded",t[4])},d(t){t&&_(e),a=!1,z(n)}}}function V(s){let e,l=s[5]&&g(s);return{c(){l&&l.c(),e=f()},l(a){l&&l.l(a),e=f()},m(a,n){l&&l.m(a,n),d(a,e,n)},p(a,[n]){a[5]?l?l.p(a,n):(l=g(a),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:h,o:h,d(a){l&&l.d(a),a&&_(e)}}}function W(s,e,l){let{src:a}=e,{alt:n=""}=e,{style:t=""}=e,{lazy:o=!1}=e,m=!1,y=!1;G(()=>{l(5,y=!0)});function p(r){k.call(this,s,r)}function L(r){k.call(this,s,r)}const M=()=>l(4,m=!0),N=()=>l(4,m=!0);return s.$$set=r=>{"src"in r&&l(0,a=r.src),"alt"in r&&l(1,n=r.alt),"style"in r&&l(2,t=r.style),"lazy"in r&&l(3,o=r.lazy)},[a,n,t,o,m,y,p,L,M,N]}class j extends q{constructor(e){super(),w(this,e,W,V,E,{src:0,alt:1,style:2,lazy:3})}}export{j as I};
