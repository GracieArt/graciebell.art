import{S as b,i as _,s as w,d as g,I as v,v as p,e as B,c as y,f as E,g as m,h as f,k as z,l as P,R as j,J as S,K as k,L as G,y as Q,w as T,P as J}from"./vendor-acddcd82.js";const O="https://twitter.com/gracieart",R="https://youtube.com/graciebell",C="https://soundcloud.com/gracieart",F="https://github.com/gracieart",L="https://deviantart.com/graciebunfluff/gallery",N="https://discordapp.com/users/262387681474904065",q="https://t.me/GracieArt";var K={twitter:O,youtube:R,soundcloud:C,github:F,deviantart:L,discord:N,telegram:q};const A="src/lib/components/controls/Button.svelte";function h(n){let e,c,i,d,l;const a=n[5].default,s=v(a,n,n[4],null),u={c:function(){e=B("button"),s&&s.c(),this.h()},l:function(o){e=y(o,"BUTTON",{id:!0,class:!0});var t=E(e);s&&s.l(t),t.forEach(m),this.h()},h:function(){f(e,"id",n[2]),f(e,"class",c="text-"+n[0]+" bg-"+n[1]+" "+n[3]+" s-QT9FG2S3JQjG"),z(e,A,8,0,119)},m:function(o,t){P(o,e,t),s&&s.m(e,null),i=!0,d||(l=j(e,"click",n[6],!1,!1,!1),d=!0)},p:function(o,[t]){s&&s.p&&(!i||t&16)&&S(s,a,o,o[4],i?G(a,o[4],t,null):k(o[4]),null),(!i||t&4)&&f(e,"id",o[2]),(!i||t&11&&c!==(c="text-"+o[0]+" bg-"+o[1]+" "+o[3]+" s-QT9FG2S3JQjG"))&&f(e,"class",c)},i:function(o){i||(Q(s,o),i=!0)},o:function(o){T(s,o),i=!1},d:function(o){o&&m(e),s&&s.d(o),d=!1,l()}};return g("SvelteRegisterBlock",{block:u,id:h.name,type:"component",source:"",ctx:n}),u}function D(n,e,c){let{$$slots:i={},$$scope:d}=e;p("Button",i,["default"]);let{color:l="blue"}=e,{bg:a="white"}=e,{id:s=""}=e,{size:u=""}=e;const r=["color","bg","id","size"];Object.keys(e).forEach(t=>{!~r.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Button> was created with unknown prop '${t}'`)});function o(t){J.call(this,n,t)}return n.$$set=t=>{"color"in t&&c(0,l=t.color),"bg"in t&&c(1,a=t.bg),"id"in t&&c(2,s=t.id),"size"in t&&c(3,u=t.size),"$$scope"in t&&c(4,d=t.$$scope)},n.$capture_state=()=>({color:l,bg:a,id:s,size:u}),n.$inject_state=t=>{"color"in t&&c(0,l=t.color),"bg"in t&&c(1,a=t.bg),"id"in t&&c(2,s=t.id),"size"in t&&c(3,u=t.size)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[l,a,s,u,d,i,o]}class U extends b{constructor(e){super(e);_(this,e,D,h,w,{color:0,bg:1,id:2,size:3}),g("SvelteRegisterComponent",{component:this,tagName:"Button",options:e,id:h.name})}get color(){throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set color(e){throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get bg(){throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set bg(e){throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get id(){throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set id(e){throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get size(){throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set size(e){throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{U as B,K as s};
