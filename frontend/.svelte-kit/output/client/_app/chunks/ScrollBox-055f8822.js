import{S as m,i as h,s as b,x as v,y,z as k,r as _,p as g,C as S,F as B,e as w,c as C,a as I,d as u,b as c,g as p,G as q,H as z,I as D}from"./index-c422e2af.js";import{B as E}from"./Box-59d02c78.js";function F(o){let e,l,t,a;const d=o[5].default,s=B(d,o,o[6],null);return{c(){e=w("div"),s&&s.c(),this.h()},l(n){e=C(n,"DIV",{class:!0,style:!0});var i=I(e);s&&s.l(i),i.forEach(u),this.h()},h(){c(e,"class",l="scroll-box "+o[0]+" svelte-gb77oo"),c(e,"style",t=`padding: ${o[3]};height: ${o[4]};`)},m(n,i){p(n,e,i),s&&s.m(e,null),a=!0},p(n,i){s&&s.p&&(!a||i&64)&&q(s,d,n,n[6],a?D(d,n[6],i,null):z(n[6]),null),(!a||i&1&&l!==(l="scroll-box "+n[0]+" svelte-gb77oo"))&&c(e,"class",l),(!a||i&24&&t!==(t=`padding: ${n[3]};height: ${n[4]};`))&&c(e,"style",t)},i(n){a||(_(s,n),a=!0)},o(n){g(s,n),a=!1},d(n){n&&u(e),s&&s.d(n)}}}function G(o){let e,l;return e=new E({props:{style:`background: ${o[1]};border: ${o[0]} ${o[2]} solid;padding: 0;`,$$slots:{default:[F]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){k(e,t,a),l=!0},p(t,[a]){const d={};a&7&&(d.style=`background: ${t[1]};border: ${t[0]} ${t[2]} solid;padding: 0;`),a&89&&(d.$$scope={dirty:a,ctx:t}),e.$set(d)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function H(o,e,l){let{$$slots:t={},$$scope:a}=e,{accent:d="white"}=e,{background:s="none"}=e,{border:n="var(--border)"}=e,{padding:i="var(--margin)"}=e,{height:f="600px"}=e;return o.$$set=r=>{"accent"in r&&l(0,d=r.accent),"background"in r&&l(1,s=r.background),"border"in r&&l(2,n=r.border),"padding"in r&&l(3,i=r.padding),"height"in r&&l(4,f=r.height),"$$scope"in r&&l(6,a=r.$$scope)},[d,s,n,i,f,t,a]}class A extends m{constructor(e){super(),h(this,e,H,G,b,{accent:0,background:1,border:2,padding:3,height:4})}}export{A as S};