import{S as he,i as _e,s as de,x as Y,y as Z,z as ee,r as U,p as O,C as te,L as ge,e as v,k as I,t as x,c as $,a as b,m as j,h as R,d as h,U as ae,b as i,f as me,g as N,J as f,j as ie,o as ve,q as $e,O as be,n as ye}from"../../../../chunks/index-467184d8.js";import{a as oe}from"../../../../chunks/apiFetch-1e72d496.js";import{P as ke,S as De}from"../../../../chunks/Page-43e49a77.js";import{I as Ee}from"../../../../chunks/Image-2e50915c.js";import{p as Ie}from"../../../../chunks/stores-ad8a1bc6.js";function ne(r,e,a){const t=r.slice();return t[3]=e[a],t}function fe(r){let e,a;return e=new Ee({props:{src:"https://api.graciebell.art"+r[3],style:"width: 100%",alt:"",lazy:!0}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){ee(e,t,l),a=!0},p(t,l){const c={};l&1&&(c.src="https://api.graciebell.art"+t[3]),e.$set(c)},i(t){a||(U(e.$$.fragment,t),a=!0)},o(t){O(e.$$.fragment,t),a=!1},d(t){te(e,t)}}}function je(r){let e;return{c(){e=v("span")},l(a){e=$(a,"SPAN",{}),b(e).forEach(h)},m(a,t){N(a,e,t)},p:ye,d(a){a&&h(e)}}}function Ae(r){let e,a,t,l,c,d,_;return{c(){e=v("a"),a=v("img"),l=I(),c=v("span"),d=x("Previous"),this.h()},l(u){e=$(u,"A",{"sveltekit:reload":!0,href:!0,class:!0});var p=b(e);a=$(p,"IMG",{src:!0,alt:!0,class:!0}),l=j(p),c=$(p,"SPAN",{});var E=b(c);d=R(E,"Previous"),E.forEach(h),p.forEach(h),this.h()},h(){ae(a.src,t="/images/icons/b_line_arrow.svg")||i(a,"src",t),i(a,"alt",""),i(a,"class","svelte-dhxyj"),i(e,"sveltekit:reload",""),i(e,"href",_="/comics/"+r[2].params.comic+"/"+(r[0].index-1)),i(e,"class","svelte-dhxyj")},m(u,p){N(u,e,p),f(e,a),f(e,l),f(e,c),f(c,d)},p(u,p){p&5&&_!==(_="/comics/"+u[2].params.comic+"/"+(u[0].index-1))&&i(e,"href",_)},d(u){u&&h(e)}}}function ue(r){let e,a,t,l,c,d,_;return{c(){e=v("a"),a=v("img"),l=I(),c=v("span"),d=x("Next"),this.h()},l(u){e=$(u,"A",{"sveltekit:reload":!0,href:!0,class:!0});var p=b(e);a=$(p,"IMG",{src:!0,alt:!0,style:!0,class:!0}),l=j(p),c=$(p,"SPAN",{});var E=b(c);d=R(E,"Next"),E.forEach(h),p.forEach(h),this.h()},h(){ae(a.src,t="/images/icons/b_line_arrow.svg")||i(a,"src",t),i(a,"alt",""),me(a,"transform","scaleX(-1)"),i(a,"class","svelte-dhxyj"),i(e,"sveltekit:reload",""),i(e,"href",_="/comics/"+r[2].params.comic+"/"+(r[0].index+1)),i(e,"class","svelte-dhxyj")},m(u,p){N(u,e,p),f(e,a),f(e,l),f(e,c),f(c,d)},p(u,p){p&5&&_!==(_="/comics/"+u[2].params.comic+"/"+(u[0].index+1))&&i(e,"href",_)},d(u){u&&h(e)}}}function Ce(r){let e,a,t,l,c,d,_,u=r[1].type=="multi_volume"?"Ch. "+r[0].index+" - ":"",p,E,L=r[0].title+"",z,B,P,S,y,F,D,C,se,X,G,K,H,Q,A,w=r[0].pageImgURLs,m=[];for(let s=0;s<w.length;s+=1)m[s]=fe(ne(r,w,s));const pe=s=>O(m[s],1,1,()=>{m[s]=null});function re(s,o){return s[0].index>1?Ae:je}let V=re(r),k=V(r),g=r[1].lastChapterIndex!=r[0].index&&ue(r);return{c(){e=v("header"),a=v("nav"),t=v("a"),l=x("Chapters"),d=I(),_=v("h1"),p=x(u),E=I(),z=x(L),B=I();for(let s=0;s<m.length;s+=1)m[s].c();P=I(),S=v("footer"),y=v("nav"),k.c(),F=I(),D=v("a"),C=v("img"),X=I(),G=v("span"),K=x("Chapters"),Q=I(),g&&g.c(),this.h()},l(s){e=$(s,"HEADER",{class:!0});var o=b(e);a=$(o,"NAV",{class:!0});var n=b(a);t=$(n,"A",{class:!0,href:!0});var M=b(t);l=R(M,"Chapters"),M.forEach(h),d=j(n),_=$(n,"H1",{style:!0,class:!0});var J=b(_);p=R(J,u),E=j(J),z=R(J,L),J.forEach(h),n.forEach(h),o.forEach(h),B=j(s);for(let W=0;W<m.length;W+=1)m[W].l(s);P=j(s),S=$(s,"FOOTER",{});var le=b(S);y=$(le,"NAV",{class:!0});var q=b(y);k.l(q),F=j(q),D=$(q,"A",{href:!0,class:!0});var T=b(D);C=$(T,"IMG",{src:!0,alt:!0,class:!0}),X=j(T),G=$(T,"SPAN",{});var ce=b(G);K=R(ce,"Chapters"),ce.forEach(h),T.forEach(h),Q=j(q),g&&g.l(q),q.forEach(h),le.forEach(h),this.h()},h(){i(t,"class","back svelte-dhxyj"),i(t,"href",c="/comics/"+r[2].params.comic),me(_,"color","white"),i(_,"class","svelte-dhxyj"),i(a,"class","svelte-dhxyj"),i(e,"class","svelte-dhxyj"),ae(C.src,se="/images/icons/b_hamburger.svg")||i(C,"src",se),i(C,"alt",""),i(C,"class","svelte-dhxyj"),i(D,"href",H="/comics/"+r[2].params.comic),i(D,"class","svelte-dhxyj"),i(y,"class","svelte-dhxyj")},m(s,o){N(s,e,o),f(e,a),f(a,t),f(t,l),f(a,d),f(a,_),f(_,p),f(_,E),f(_,z),N(s,B,o);for(let n=0;n<m.length;n+=1)m[n].m(s,o);N(s,P,o),N(s,S,o),f(S,y),k.m(y,null),f(y,F),f(y,D),f(D,C),f(D,X),f(D,G),f(G,K),f(y,Q),g&&g.m(y,null),A=!0},p(s,o){if((!A||o&4&&c!==(c="/comics/"+s[2].params.comic))&&i(t,"href",c),(!A||o&3)&&u!==(u=s[1].type=="multi_volume"?"Ch. "+s[0].index+" - ":"")&&ie(p,u),(!A||o&1)&&L!==(L=s[0].title+"")&&ie(z,L),o&1){w=s[0].pageImgURLs;let n;for(n=0;n<w.length;n+=1){const M=ne(s,w,n);m[n]?(m[n].p(M,o),U(m[n],1)):(m[n]=fe(M),m[n].c(),U(m[n],1),m[n].m(P.parentNode,P))}for(ve(),n=w.length;n<m.length;n+=1)pe(n);$e()}V===(V=re(s))&&k?k.p(s,o):(k.d(1),k=V(s),k&&(k.c(),k.m(y,F))),(!A||o&4&&H!==(H="/comics/"+s[2].params.comic))&&i(D,"href",H),s[1].lastChapterIndex!=s[0].index?g?g.p(s,o):(g=ue(s),g.c(),g.m(y,null)):g&&(g.d(1),g=null)},i(s){if(!A){for(let o=0;o<w.length;o+=1)U(m[o]);A=!0}},o(s){m=m.filter(Boolean);for(let o=0;o<m.length;o+=1)O(m[o]);A=!1},d(s){s&&h(e),s&&h(B),be(m,s),s&&h(P),s&&h(S),k.d(),g&&g.d()}}}function we(r){let e,a;return e=new De({props:{simple:"true",spacing:"double",$$slots:{default:[Ce]},$$scope:{ctx:r}}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){ee(e,t,l),a=!0},p(t,l){const c={};l&71&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){a||(U(e.$$.fragment,t),a=!0)},o(t){O(e.$$.fragment,t),a=!1},d(t){te(e,t)}}}function Ne(r){let e,a;return e=new ke({props:{title:r[0].title,header:!1,footer:!1,dark:!0,$$slots:{default:[we]},$$scope:{ctx:r}}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){ee(e,t,l),a=!0},p(t,[l]){const c={};l&1&&(c.title=t[0].title),l&71&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){a||(U(e.$$.fragment,t),a=!0)},o(t){O(e.$$.fragment,t),a=!1},d(t){te(e,t)}}}async function Le({params:r}){let e=[],a={chapterData:{},comicData:{}};if(e=await oe("comic-chapters","populate[0]=comic","populate[1]=pages","filters[comic][url][$eq]="+r.comic,"filters[chapter_number][$eq]="+r.chapter),e!=null){let t=e[0].attributes;a.chapterData={title:t.title,index:parseInt(t.chapter_number),pageImgURLs:t.pages.data.map(l=>l.attributes.url)},a.comicData={title:t.comic.data.attributes.title,type:t.comic.data.attributes.type,url:t.comic.data.attributes.url}}return e=await oe("comic-chapters","populate[comic][fields]=url","filters[comic][url][$eq]="+a.comicData.url,"sort=release_date:desc","pagination[limit]=1"),e!=null&&(a.comicData.lastChapterIndex=parseInt(e[0].attributes.chapter_number)),{props:a}}function Pe(r,e,a){let t;ge(r,Ie,d=>a(2,t=d));let{chapterData:l}=e,{comicData:c}=e;return r.$$set=d=>{"chapterData"in d&&a(0,l=d.chapterData),"comicData"in d&&a(1,c=d.comicData)},[l,c,t]}class Ge extends he{constructor(e){super(),_e(this,e,Pe,Ne,de,{chapterData:0,comicData:1})}}export{Ge as default,Le as load};
