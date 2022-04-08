import{S as ge,i as Ee,s as be,d as ee,v as ye,e as l,t as q,p as k,A as ce,c,f,m as R,g as o,r as A,B as ie,h as t,k as i,j as qe,l as ne,N as s,C as ue,y as de,w as fe,F as me,O as Re}from"../chunks/vendor-acddcd82.js";import{P as Pe,D as Se,S as Ne}from"../chunks/defaults-551c210b.js";import{B as ve,s as le}from"../chunks/Button-5de2fe22.js";import{F as Te}from"../chunks/Flex2Col-ea23abcd.js";import{S as Ce}from"../chunks/SpacedDiv-47076bb8.js";const D="src/lib/components/forms/ContactForm.svelte";function we(h){let e;const u={c:function(){e=q("Send")},l:function(r){e=R(r,"Send")},m:function(r,a){ne(r,e,a)},d:function(r){r&&o(e)}};return ee("SvelteRegisterBlock",{block:u,id:we.name,type:"slot",source:"(31:2) <Button id='submit' bg='blue' color='white' size='big'>",ctx:h}),u}function pe(h){let e,u,d,r,a,n,p,G,_,H,g,L,N,V,T,w,j,O,v,M,E,b,U,X,P,F,y,W,x,K,Z;K=new ve({props:{id:"submit",bg:"blue",color:"white",size:"big",$$slots:{default:[we]},$$scope:{ctx:h}},$$inline:!0});const $={c:function(){e=l("form"),u=l("fieldset"),d=l("fieldset"),r=l("label"),a=q("Name"),n=k(),p=l("input"),G=k(),_=l("fieldset"),H=l("label"),g=q("Pronouns"),L=k(),N=l("input"),V=k(),T=l("fieldset"),w=l("label"),j=q("Email"),O=k(),v=l("input"),M=k(),E=l("fieldset"),b=l("label"),U=q("Message"),X=k(),P=l("textarea"),F=k(),y=l("small"),W=q("*Required field"),x=k(),ce(K.$$.fragment),this.h()},l:function(z){e=c(z,"FORM",{target:!0,action:!0,method:!0,class:!0});var m=f(e);u=c(m,"FIELDSET",{class:!0});var B=f(u);d=c(B,"FIELDSET",{class:!0});var C=f(d);r=c(C,"LABEL",{class:!0,for:!0});var te=f(r);a=R(te,"Name"),te.forEach(o),n=A(C),p=c(C,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),C.forEach(o),G=A(B),_=c(B,"FIELDSET",{class:!0});var Y=f(_);H=c(Y,"LABEL",{for:!0,class:!0});var se=f(H);g=R(se,"Pronouns"),se.forEach(o),L=A(Y),N=c(Y,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),Y.forEach(o),B.forEach(o),V=A(m),T=c(m,"FIELDSET",{class:!0});var J=f(T);w=c(J,"LABEL",{class:!0,for:!0});var ae=f(w);j=R(ae,"Email"),ae.forEach(o),O=A(J),v=c(J,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),J.forEach(o),M=A(m),E=c(m,"FIELDSET",{class:!0});var Q=f(E);b=c(Q,"LABEL",{class:!0,for:!0});var re=f(b);U=R(re,"Message"),re.forEach(o),X=A(Q),P=c(Q,"TEXTAREA",{id:!0,name:!0,placeholder:!0,class:!0}),f(P).forEach(o),Q.forEach(o),F=A(m),y=c(m,"SMALL",{style:!0,class:!0});var oe=f(y);W=R(oe,"*Required field"),oe.forEach(o),x=A(m),ie(K.$$.fragment,m),m.forEach(o),this.h()},h:function(){t(r,"class","required s-V8qKnnzZzPIv"),t(r,"for","name"),i(r,D,8,6,211),t(p,"type","text"),t(p,"id","name"),t(p,"placeholder","Your name..."),p.required=!0,t(p,"class","s-V8qKnnzZzPIv"),i(p,D,9,6,265),t(d,"class","s-V8qKnnzZzPIv"),i(d,D,7,4,194),t(H,"for","pronouns"),t(H,"class","s-V8qKnnzZzPIv"),i(H,D,13,6,370),t(N,"type","text"),t(N,"id","pronouns"),t(N,"name","pronouns"),t(N,"placeholder","They/she/he..."),t(N,"class","s-V8qKnnzZzPIv"),i(N,D,14,6,415),t(_,"class","s-V8qKnnzZzPIv"),i(_,D,12,4,353),t(u,"class","horizontal s-V8qKnnzZzPIv"),i(u,D,6,2,160),t(w,"class","required s-V8qKnnzZzPIv"),t(w,"for","email"),i(w,D,19,4,544),t(v,"type","text"),t(v,"id","email"),t(v,"name","email"),t(v,"placeholder","yourname@example.com"),v.required=!0,t(v,"class","s-V8qKnnzZzPIv"),i(v,D,20,4,598),t(T,"class","s-V8qKnnzZzPIv"),i(T,D,18,2,529),t(b,"class","required s-V8qKnnzZzPIv"),t(b,"for","message"),i(b,D,24,4,719),t(P,"id","message"),t(P,"name","message"),t(P,"placeholder","Write something..."),P.required=!0,t(P,"class","s-V8qKnnzZzPIv"),i(P,D,25,4,777),t(E,"class","s-V8qKnnzZzPIv"),i(E,D,23,2,704),qe(y,"color","var(--red)"),t(y,"class","s-V8qKnnzZzPIv"),i(y,D,28,2,886),t(e,"target","_blank"),t(e,"action","https://formsubmit.co/mail@graciebell.art"),t(e,"method","post"),t(e,"class","s-V8qKnnzZzPIv"),i(e,D,5,0,70)},m:function(z,m){ne(z,e,m),s(e,u),s(u,d),s(d,r),s(r,a),s(d,n),s(d,p),s(u,G),s(u,_),s(_,H),s(H,g),s(_,L),s(_,N),s(e,V),s(e,T),s(T,w),s(w,j),s(T,O),s(T,v),s(e,M),s(e,E),s(E,b),s(b,U),s(E,X),s(E,P),s(e,F),s(e,y),s(y,W),s(e,x),ue(K,e,null),Z=!0},p:function(z,[m]){const B={};m&1&&(B.$$scope={dirty:m,ctx:z}),K.$set(B)},i:function(z){Z||(de(K.$$.fragment,z),Z=!0)},o:function(z){fe(K.$$.fragment,z),Z=!1},d:function(z){z&&o(e),me(K)}};return ee("SvelteRegisterBlock",{block:$,id:pe.name,type:"component",source:"",ctx:h}),$}function He(h,e,u){let{$$slots:d={},$$scope:r}=e;ye("ContactForm",d,[]);const a=[];return Object.keys(e).forEach(n=>{!~a.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<ContactForm> was created with unknown prop '${n}'`)}),h.$capture_state=()=>({Button:ve}),[]}class ze extends ge{constructor(e){super(e);Ee(this,e,He,pe,be,{}),ee("SvelteRegisterComponent",{component:this,tagName:"ContactForm",options:e,id:pe.name})}}const I="src/routes/contact.svelte";function De(h){let e,u,d,r,a,n,p,G,_,H,g,L,N,V,T,w,j,O,v,M,E,b,U,X,P,F,y,W,x;_=new ze({$$inline:!0});const K={c:function(){e=l("p"),u=q("Contact me any way you'd like! However, if you are looking to get a commission, I would prefer it if you would contact me on either Telegram, Twitter, or Discord\u2014if you use any of those services\u2014because it will be much easier to discuss the details and to send work-in-progress pictures over direct messages rather than email, but that is not required."),d=k(),r=l("div"),a=l("div"),n=l("h2"),p=q("Email"),G=k(),ce(_.$$.fragment),H=k(),g=l("dl"),L=l("h2"),N=q("Social"),V=l("dt"),T=q("Twitter"),w=l("dd"),j=l("a"),O=q("@GracieArt"),v=l("dt"),M=q("Telegram"),E=l("dd"),b=l("a"),U=q("@GracieArt"),X=l("dt"),P=q("Discord"),F=l("dd"),y=l("a"),W=q("GracieArt#1312"),this.h()},l:function($){e=c($,"P",{class:!0});var S=f(e);u=R(S,"Contact me any way you'd like! However, if you are looking to get a commission, I would prefer it if you would contact me on either Telegram, Twitter, or Discord\u2014if you use any of those services\u2014because it will be much easier to discuss the details and to send work-in-progress pictures over direct messages rather than email, but that is not required."),S.forEach(o),d=A($),r=c($,"DIV",{class:!0});var z=f(r);a=c(z,"DIV",{class:!0});var m=f(a);n=c(m,"H2",{class:!0});var B=f(n);p=R(B,"Email"),B.forEach(o),G=A(m),ie(_.$$.fragment,m),m.forEach(o),H=A(z),g=c(z,"DL",{class:!0});var C=f(g);L=c(C,"H2",{class:!0});var te=f(L);N=R(te,"Social"),te.forEach(o),V=c(C,"DT",{class:!0});var Y=f(V);T=R(Y,"Twitter"),Y.forEach(o),w=c(C,"DD",{class:!0});var se=f(w);j=c(se,"A",{href:!0,class:!0});var J=f(j);O=R(J,"@GracieArt"),J.forEach(o),se.forEach(o),v=c(C,"DT",{class:!0});var ae=f(v);M=R(ae,"Telegram"),ae.forEach(o),E=c(C,"DD",{class:!0});var Q=f(E);b=c(Q,"A",{href:!0,class:!0});var re=f(b);U=R(re,"@GracieArt"),re.forEach(o),Q.forEach(o),X=c(C,"DT",{class:!0});var oe=f(X);P=R(oe,"Discord"),oe.forEach(o),F=c(C,"DD",{class:!0});var $e=f(F);y=c($e,"A",{href:!0,class:!0});var _e=f(y);W=R(_e,"GracieArt#1312"),_e.forEach(o),$e.forEach(o),C.forEach(o),z.forEach(o),this.h()},h:function(){t(e,"class","s-8jg-3RXHNduc"),i(e,I,12,4,453),t(n,"class","s-8jg-3RXHNduc"),i(n,I,15,8,862),t(a,"class","s-8jg-3RXHNduc"),i(a,I,14,6,848),t(L,"class","s-8jg-3RXHNduc"),i(L,I,19,8,947),t(V,"class","s-8jg-3RXHNduc"),i(V,I,20,8,971),t(j,"href",le.twitter),t(j,"class","s-8jg-3RXHNduc"),i(j,I,21,12,1e3),t(w,"class","s-8jg-3RXHNduc"),i(w,I,21,8,996),t(v,"class","s-8jg-3RXHNduc"),i(v,I,22,8,1060),t(b,"href",le.telegram),t(b,"class","s-8jg-3RXHNduc"),i(b,I,23,12,1090),t(E,"class","s-8jg-3RXHNduc"),i(E,I,23,8,1086),t(X,"class","s-8jg-3RXHNduc"),i(X,I,24,8,1151),t(y,"href",le.discord),t(y,"class","s-8jg-3RXHNduc"),i(y,I,25,12,1180),t(F,"class","s-8jg-3RXHNduc"),i(F,I,25,8,1176),t(g,"class","col-2 s-8jg-3RXHNduc"),i(g,I,18,6,920),t(r,"class","grid-2-col s-8jg-3RXHNduc"),i(r,I,13,4,817)},m:function($,S){ne($,e,S),s(e,u),ne($,d,S),ne($,r,S),s(r,a),s(a,n),s(n,p),s(a,G),ue(_,a,null),s(r,H),s(r,g),s(g,L),s(L,N),s(g,V),s(V,T),s(g,w),s(w,j),s(j,O),s(g,v),s(v,M),s(g,E),s(E,b),s(b,U),s(g,X),s(X,P),s(g,F),s(F,y),s(y,W),x=!0},p:Re,i:function($){x||(de(_.$$.fragment,$),x=!0)},o:function($){fe(_.$$.fragment,$),x=!1},d:function($){$&&o(e),$&&o(d),$&&o(r),me(_)}};return ee("SvelteRegisterBlock",{block:K,id:De.name,type:"slot",source:"(12:2) <Dfs.Section simple='true' spacing='double'>",ctx:h}),K}function Ie(h){let e,u;e=new Ne({props:{simple:"true",spacing:"double",$$slots:{default:[De]},$$scope:{ctx:h}},$$inline:!0});const d={c:function(){ce(e.$$.fragment)},l:function(a){ie(e.$$.fragment,a)},m:function(a,n){ue(e,a,n),u=!0},p:function(a,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:a}),e.$set(p)},i:function(a){u||(de(e.$$.fragment,a),u=!0)},o:function(a){fe(e.$$.fragment,a),u=!1},d:function(a){me(e,a)}};return ee("SvelteRegisterBlock",{block:d,id:Ie.name,type:"slot",source:"(11:0) <Dfs.Page title='Contact'>",ctx:h}),d}function he(h){let e,u;e=new Pe({props:{title:"Contact",$$slots:{default:[Ie]},$$scope:{ctx:h}},$$inline:!0});const d={c:function(){ce(e.$$.fragment)},l:function(a){ie(e.$$.fragment,a)},m:function(a,n){ue(e,a,n),u=!0},p:function(a,[n]){const p={};n&1&&(p.$$scope={dirty:n,ctx:a}),e.$set(p)},i:function(a){u||(de(e.$$.fragment,a),u=!0)},o:function(a){fe(e.$$.fragment,a),u=!1},d:function(a){me(e,a)}};return ee("SvelteRegisterBlock",{block:d,id:he.name,type:"component",source:"",ctx:h}),d}function je(h,e,u){let{$$slots:d={},$$scope:r}=e;ye("Contact",d,[]);const a=[];return Object.keys(e).forEach(n=>{!~a.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Contact> was created with unknown prop '${n}'`)}),h.$capture_state=()=>({Dfs:Se,socialLinks:le,ContactForm:ze,Flex2Col:Te,Button:ve,SpacedDiv:Ce}),[]}class Fe extends ge{constructor(e){super(e);Ee(this,e,je,he,be,{}),ee("SvelteRegisterComponent",{component:this,tagName:"Contact",options:e,id:he.name})}}export{Fe as default};
