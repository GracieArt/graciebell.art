import{S as G,i as T,d as y,s as F,v as M,A as E,B as I,C as P,y as A,w as N,F as O,e as _,t as $,p as z,c as h,f as S,m as g,g as m,r as H,k as v,T as J,h as B,j as K,l as b,N as u}from"../../chunks/vendor-acddcd82.js";import{P as L,D as Q,S as U}from"../../chunks/defaults-551c210b.js";const w="src/routes/comics/index.svelte";function j(c){let e,o,i,n,t,s,r,d,l,k;const x={c:function(){e=_("p"),o=$("I'm currently making some edits to the first chapter of my comic series "),i=_("i"),n=$("Ameliden"),t=$(" as well as working on chapter two, both of which will be accessible from this page as soon as they are finished, so "),s=_("strong"),r=$("stay tuned!"),d=z(),l=_("img"),this.h()},l:function(a){e=h(a,"P",{});var f=S(e);o=g(f,"I'm currently making some edits to the first chapter of my comic series "),i=h(f,"I",{});var D=S(i);n=g(D,"Ameliden"),D.forEach(m),t=g(f," as well as working on chapter two, both of which will be accessible from this page as soon as they are finished, so "),s=h(f,"STRONG",{});var R=S(s);r=g(R,"stay tuned!"),R.forEach(m),f.forEach(m),d=H(a),l=h(a,"IMG",{src:!0,alt:!0,style:!0}),this.h()},h:function(){v(i,w,7,79,220),v(s,w,7,211,352),v(e,w,7,4,145),J(l.src,k="/images/ameliden.png")||B(l,"src",k),B(l,"alt",""),K(l,"max-width","100%"),v(l,w,8,4,389)},m:function(a,f){b(a,e,f),u(e,o),u(e,i),u(i,n),u(e,t),u(e,s),u(s,r),b(a,d,f),b(a,l,f)},d:function(a){a&&m(e),a&&m(d),a&&m(l)}};return y("SvelteRegisterBlock",{block:x,id:j.name,type:"slot",source:"(7:2) <Dfs.Section heading='Coming Soon' simple='true'>",ctx:c}),x}function q(c){let e,o;e=new U({props:{heading:"Coming Soon",simple:"true",$$slots:{default:[j]},$$scope:{ctx:c}},$$inline:!0});const i={c:function(){E(e.$$.fragment)},l:function(t){I(e.$$.fragment,t)},m:function(t,s){P(e,t,s),o=!0},p:function(t,s){const r={};s&1&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i:function(t){o||(A(e.$$.fragment,t),o=!0)},o:function(t){N(e.$$.fragment,t),o=!1},d:function(t){O(e,t)}};return y("SvelteRegisterBlock",{block:i,id:q.name,type:"slot",source:"(6:0) <Dfs.Page title='Comics'>",ctx:c}),i}function C(c){let e,o;e=new L({props:{title:"Comics",$$slots:{default:[q]},$$scope:{ctx:c}},$$inline:!0});const i={c:function(){E(e.$$.fragment)},l:function(t){I(e.$$.fragment,t)},m:function(t,s){P(e,t,s),o=!0},p:function(t,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i:function(t){o||(A(e.$$.fragment,t),o=!0)},o:function(t){N(e.$$.fragment,t),o=!1},d:function(t){O(e,t)}};return y("SvelteRegisterBlock",{block:i,id:C.name,type:"component",source:"",ctx:c}),i}function V(c,e,o){let{$$slots:i={},$$scope:n}=e;M("Comics",i,[]);const t=[];return Object.keys(e).forEach(s=>{!~t.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Comics> was created with unknown prop '${s}'`)}),c.$capture_state=()=>({Dfs:Q}),[]}class Y extends G{constructor(e){super(e);T(this,e,V,C,F,{}),y("SvelteRegisterComponent",{component:this,tagName:"Comics",options:e,id:C.name})}}export{Y as default};
