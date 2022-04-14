import{S as ae,i as re,s as oe,F as fe,e as d,c as f,a as h,d as n,b as s,$ as de,g as z,O as me,G as _e,H as he,I as ve,r as J,p as W,R as pe,t as A,k,x as j,h as S,m as I,y as K,f as be,J as a,z as Q,C as Z,n as ge}from"../chunks/index-c422e2af.js";import{P as Ee,S as $e}from"../chunks/Page-6561eed2.js";import{s as se}from"../chunks/social-links-dba47162.js";import{F as ye}from"../chunks/FlexCols-9f19ae59.js";import{S as we}from"../chunks/SpacedDiv-2f52f935.js";function De(b){let e,t,l,o,v,i;const m=b[8].default,u=fe(m,b,b[7],null);return{c(){e=d("button"),u&&u.c(),this.h()},l(r){e=f(r,"BUTTON",{id:!0,class:!0,style:!0});var _=h(e);u&&u.l(_),_.forEach(n),this.h()},h(){s(e,"id",b[4]),s(e,"class",t=de(b[5])+" svelte-d48683"),s(e,"style",l=`color: ${b[0]};background: ${b[1]};border: ${b[2]} ${b[3]} solid;border-radius: ${b[6]};`)},m(r,_){z(r,e,_),u&&u.m(e,null),o=!0,v||(i=me(e,"click",b[9]),v=!0)},p(r,[_]){u&&u.p&&(!o||_&128)&&_e(u,m,r,r[7],o?ve(m,r[7],_,null):he(r[7]),null),(!o||_&16)&&s(e,"id",r[4]),(!o||_&32&&t!==(t=de(r[5])+" svelte-d48683"))&&s(e,"class",t),(!o||_&79&&l!==(l=`color: ${r[0]};background: ${r[1]};border: ${r[2]} ${r[3]} solid;border-radius: ${r[6]};`))&&s(e,"style",l)},i(r){o||(J(u,r),o=!0)},o(r){W(u,r),o=!1},d(r){r&&n(e),u&&u.d(r),v=!1,i()}}}function Te(b,e,t){let{$$slots:l={},$$scope:o}=e,{color:v="var(--dark-blue)"}=e,{background:i="white"}=e,{border:m="0"}=e,{borderColor:u="none"}=e,{id:r=""}=e,{size:_="small"}=e,{rounded:C="var(--rounded-2)"}=e;function D(c){pe.call(this,b,c)}return b.$$set=c=>{"color"in c&&t(0,v=c.color),"background"in c&&t(1,i=c.background),"border"in c&&t(2,m=c.border),"borderColor"in c&&t(3,u=c.borderColor),"id"in c&&t(4,r=c.id),"size"in c&&t(5,_=c.size),"rounded"in c&&t(6,C=c.rounded),"$$scope"in c&&t(7,o=c.$$scope)},[v,i,m,u,r,_,C,o,l,D]}class ke extends ae{constructor(e){super(),re(this,e,Te,De,oe,{color:0,background:1,border:2,borderColor:3,id:4,size:5,rounded:6})}}function Ie(b){let e;return{c(){e=A("Send")},l(t){e=S(t,"Send")},m(t,l){z(t,e,l)},d(t){t&&n(e)}}}function Le(b){let e,t,l,o,v,i,m,u,r,_,C,D,c,p,g,$,L,P,T,N,q,F,M,E,y,X,H,Y,R,B,U;return B=new ke({props:{id:"submit",background:"var(--dark-blue)",color:"white",size:"big",rounded:"var(--rounded-1)",$$slots:{default:[Ie]},$$scope:{ctx:b}}}),{c(){e=d("form"),t=d("fieldset"),l=d("fieldset"),o=d("label"),v=A("Name"),i=k(),m=d("input"),u=k(),r=d("fieldset"),_=d("label"),C=A("Pronouns"),D=k(),c=d("input"),p=k(),g=d("fieldset"),$=d("label"),L=A("Email"),P=k(),T=d("input"),N=k(),q=d("fieldset"),F=d("label"),M=A("Message"),E=k(),y=d("textarea"),X=k(),H=d("small"),Y=A("*Required field"),R=k(),j(B.$$.fragment),this.h()},l(G){e=f(G,"FORM",{target:!0,action:!0,method:!0,class:!0});var w=h(e);t=f(w,"FIELDSET",{class:!0});var V=h(t);l=f(V,"FIELDSET",{class:!0});var O=h(l);o=f(O,"LABEL",{class:!0,for:!0});var x=h(o);v=S(x,"Name"),x.forEach(n),i=I(O),m=f(O,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),O.forEach(n),u=I(V),r=f(V,"FIELDSET",{class:!0});var ee=h(r);_=f(ee,"LABEL",{for:!0,class:!0});var ne=h(_);C=S(ne,"Pronouns"),ne.forEach(n),D=I(ee),c=f(ee,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),ee.forEach(n),V.forEach(n),p=I(w),g=f(w,"FIELDSET",{class:!0});var te=h(g);$=f(te,"LABEL",{class:!0,for:!0});var ie=h($);L=S(ie,"Email"),ie.forEach(n),P=I(te),T=f(te,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),te.forEach(n),N=I(w),q=f(w,"FIELDSET",{class:!0});var le=h(q);F=f(le,"LABEL",{class:!0,for:!0});var ce=h(F);M=S(ce,"Message"),ce.forEach(n),E=I(le),y=f(le,"TEXTAREA",{id:!0,name:!0,placeholder:!0,class:!0}),h(y).forEach(n),le.forEach(n),X=I(w),H=f(w,"SMALL",{style:!0});var ue=h(H);Y=S(ue,"*Required field"),ue.forEach(n),R=I(w),K(B.$$.fragment,w),w.forEach(n),this.h()},h(){s(o,"class","required svelte-a7aypw"),s(o,"for","name"),s(m,"type","text"),s(m,"id","name"),s(m,"placeholder","Your name..."),m.required=!0,s(m,"class","svelte-a7aypw"),s(l,"class","svelte-a7aypw"),s(_,"for","pronouns"),s(_,"class","svelte-a7aypw"),s(c,"type","text"),s(c,"id","pronouns"),s(c,"name","pronouns"),s(c,"placeholder","They/she/he..."),s(c,"class","svelte-a7aypw"),s(r,"class","svelte-a7aypw"),s(t,"class","horizontal svelte-a7aypw"),s($,"class","required svelte-a7aypw"),s($,"for","email"),s(T,"type","text"),s(T,"id","email"),s(T,"name","email"),s(T,"placeholder","yourname@example.com"),T.required=!0,s(T,"class","svelte-a7aypw"),s(g,"class","svelte-a7aypw"),s(F,"class","required svelte-a7aypw"),s(F,"for","message"),s(y,"id","message"),s(y,"name","message"),s(y,"placeholder","Write something..."),y.required=!0,s(y,"class","svelte-a7aypw"),s(q,"class","svelte-a7aypw"),be(H,"color","var(--red)"),s(e,"target","_blank"),s(e,"action","https://formsubmit.co/mail@graciebell.art"),s(e,"method","post"),s(e,"class","svelte-a7aypw")},m(G,w){z(G,e,w),a(e,t),a(t,l),a(l,o),a(o,v),a(l,i),a(l,m),a(t,u),a(t,r),a(r,_),a(_,C),a(r,D),a(r,c),a(e,p),a(e,g),a(g,$),a($,L),a(g,P),a(g,T),a(e,N),a(e,q),a(q,F),a(F,M),a(q,E),a(q,y),a(e,X),a(e,H),a(H,Y),a(e,R),Q(B,e,null),U=!0},p(G,[w]){const V={};w&1&&(V.$$scope={dirty:w,ctx:G}),B.$set(V)},i(G){U||(J(B.$$.fragment,G),U=!0)},o(G){W(B.$$.fragment,G),U=!1},d(G){G&&n(e),Z(B)}}}class Ae extends ae{constructor(e){super(),re(this,e,null,Le,oe,{})}}function Se(b){let e,t,l,o,v,i,m,u,r,_,C,D,c,p,g,$,L,P,T,N,q,F,M;return{c(){e=d("div"),t=d("dt"),l=A("Twitter"),o=k(),v=d("dd"),i=d("a"),m=A("@GracieArt"),u=k(),r=d("div"),_=d("dt"),C=A("Telegram"),D=k(),c=d("dd"),p=d("a"),g=A("@GracieArt"),$=k(),L=d("div"),P=d("dt"),T=A("Discord"),N=k(),q=d("dd"),F=d("a"),M=A("GracieArt#1312"),this.h()},l(E){e=f(E,"DIV",{class:!0});var y=h(e);t=f(y,"DT",{class:!0});var X=h(t);l=S(X,"Twitter"),X.forEach(n),o=I(y),v=f(y,"DD",{});var H=h(v);i=f(H,"A",{href:!0});var Y=h(i);m=S(Y,"@GracieArt"),Y.forEach(n),H.forEach(n),y.forEach(n),u=I(E),r=f(E,"DIV",{class:!0});var R=h(r);_=f(R,"DT",{class:!0});var B=h(_);C=S(B,"Telegram"),B.forEach(n),D=I(R),c=f(R,"DD",{});var U=h(c);p=f(U,"A",{href:!0});var G=h(p);g=S(G,"@GracieArt"),G.forEach(n),U.forEach(n),R.forEach(n),$=I(E),L=f(E,"DIV",{class:!0});var w=h(L);P=f(w,"DT",{class:!0});var V=h(P);T=S(V,"Discord"),V.forEach(n),N=I(w),q=f(w,"DD",{});var O=h(q);F=f(O,"A",{href:!0});var x=h(F);M=S(x,"GracieArt#1312"),x.forEach(n),O.forEach(n),w.forEach(n),this.h()},h(){s(t,"class","svelte-e62e5b"),s(i,"href",se.twitter),s(e,"class","contact-item"),s(_,"class","svelte-e62e5b"),s(p,"href",se.telegram),s(r,"class","contact-item"),s(P,"class","svelte-e62e5b"),s(F,"href",se.discord),s(L,"class","contact-item")},m(E,y){z(E,e,y),a(e,t),a(t,l),a(e,o),a(e,v),a(v,i),a(i,m),z(E,u,y),z(E,r,y),a(r,_),a(_,C),a(r,D),a(r,c),a(c,p),a(p,g),z(E,$,y),z(E,L,y),a(L,P),a(P,T),a(L,N),a(L,q),a(q,F),a(F,M)},p:ge,d(E){E&&n(e),E&&n(u),E&&n(r),E&&n($),E&&n(L)}}}function Ce(b){let e,t,l,o,v,i,m,u,r,_,C,D,c;return i=new Ae({}),D=new we({props:{spacing:"half",$$slots:{default:[Se]},$$scope:{ctx:b}}}),{c(){e=d("div"),t=d("div"),l=d("h2"),o=A("Email"),v=k(),j(i.$$.fragment),m=k(),u=d("div"),r=d("dl"),_=d("h2"),C=A("Social"),j(D.$$.fragment),this.h()},l(p){e=f(p,"DIV",{class:!0});var g=h(e);t=f(g,"DIV",{class:!0});var $=h(t);l=f($,"H2",{});var L=h(l);o=S(L,"Email"),L.forEach(n),v=I($),K(i.$$.fragment,$),$.forEach(n),g.forEach(n),m=I(p),u=f(p,"DIV",{class:!0});var P=h(u);r=f(P,"DL",{class:!0});var T=h(r);_=f(T,"H2",{});var N=h(_);C=S(N,"Social"),N.forEach(n),K(D.$$.fragment,T),T.forEach(n),P.forEach(n),this.h()},h(){s(t,"class","email-form svelte-e62e5b"),s(e,"class","col-1 svelte-e62e5b"),s(r,"class","other-contacts"),s(u,"class","col-2 svelte-e62e5b")},m(p,g){z(p,e,g),a(e,t),a(t,l),a(l,o),a(t,v),Q(i,t,null),z(p,m,g),z(p,u,g),a(u,r),a(r,_),a(_,C),Q(D,r,null),c=!0},p(p,g){const $={};g&1&&($.$$scope={dirty:g,ctx:p}),D.$set($)},i(p){c||(J(i.$$.fragment,p),J(D.$$.fragment,p),c=!0)},o(p){W(i.$$.fragment,p),W(D.$$.fragment,p),c=!1},d(p){p&&n(e),Z(i),p&&n(m),p&&n(u),Z(D)}}}function qe(b){let e,t,l,o,v;return o=new ye({props:{colGap:"var(--double-margin)",rowGap:"var(--double-margin)",$$slots:{default:[Ce]},$$scope:{ctx:b}}}),{c(){e=d("p"),t=A("Contact me any way you'd like! However, if you are looking to get a commission, I would prefer it if you would contact me on either Telegram, Twitter, or Discord\u2014if you use any of those services\u2014because it will be much easier to discuss the details and to send work-in-progress pictures over direct messages rather than email, but that is not required."),l=k(),j(o.$$.fragment)},l(i){e=f(i,"P",{});var m=h(e);t=S(m,"Contact me any way you'd like! However, if you are looking to get a commission, I would prefer it if you would contact me on either Telegram, Twitter, or Discord\u2014if you use any of those services\u2014because it will be much easier to discuss the details and to send work-in-progress pictures over direct messages rather than email, but that is not required."),m.forEach(n),l=I(i),K(o.$$.fragment,i)},m(i,m){z(i,e,m),a(e,t),z(i,l,m),Q(o,i,m),v=!0},p(i,m){const u={};m&1&&(u.$$scope={dirty:m,ctx:i}),o.$set(u)},i(i){v||(J(o.$$.fragment,i),v=!0)},o(i){W(o.$$.fragment,i),v=!1},d(i){i&&n(e),i&&n(l),Z(o,i)}}}function Fe(b){let e,t;return e=new $e({props:{simple:"true",spacing:"double",$$slots:{default:[qe]},$$scope:{ctx:b}}}),{c(){j(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,o){Q(e,l,o),t=!0},p(l,o){const v={};o&1&&(v.$$scope={dirty:o,ctx:l}),e.$set(v)},i(l){t||(J(e.$$.fragment,l),t=!0)},o(l){W(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function Ge(b){let e,t;return e=new Ee({props:{title:"Contact",$$slots:{default:[Fe]},$$scope:{ctx:b}}}),{c(){j(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,o){Q(e,l,o),t=!0},p(l,[o]){const v={};o&1&&(v.$$scope={dirty:o,ctx:l}),e.$set(v)},i(l){t||(J(e.$$.fragment,l),t=!0)},o(l){W(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}class He extends ae{constructor(e){super(),re(this,e,null,Ge,oe,{})}}export{He as default};
