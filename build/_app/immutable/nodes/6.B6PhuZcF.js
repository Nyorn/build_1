import{s as B,e as n,t as F,a as w,H as G,b as m,d as C,h as D,i,f as H,B as J,g as K,y as O,j as a,k as _,l as d,p as L,w as A}from"../chunks/scheduler.8qnH_xwy.js";import{S as Q,i as U}from"../chunks/index.9fTqPvoO.js";function V(r){let l,u=r[0].office.name+"",h,p,f,v,E,b=r[0].office.description+"",P,o,q,I,S,M,T,c,g,k="Come visit us!",R,s,j;return{c(){l=n("h1"),h=F(u),p=w(),f=n("section"),v=n("p"),E=new G(!1),P=w(),o=n("img"),S=w(),M=n("hr"),T=w(),c=n("section"),g=n("h2"),g.textContent=k,R=w(),s=n("iframe"),this.h()},l(e){l=m(e,"H1",{});var t=C(l);h=D(t,u),t.forEach(i),p=H(e),f=m(e,"SECTION",{class:!0});var z=C(f);v=m(z,"P",{});var y=C(v);E=J(y,!1),y.forEach(i),P=H(z),o=m(z,"IMG",{src:!0,alt:!0,class:!0}),z.forEach(i),S=H(e),M=m(e,"HR",{}),T=H(e),c=m(e,"SECTION",{class:!0});var N=C(c);g=m(N,"H2",{"data-svelte-h":!0}),K(g)!=="svelte-12y5j66"&&(g.textContent=k),R=H(N),s=m(N,"IFRAME",{width:!0,height:!0,title:!0,frameborder:!0,scrolling:!0,marginheight:!0,marginwidth:!0,src:!0}),C(s).forEach(i),N.forEach(i),this.h()},h(){E.a=null,O(o.src,q=r[0].office.photo.url)||a(o,"src",q),a(o,"alt",I=r[0].office.photo.description),a(o,"class","svelte-2ufuas"),a(f,"class","flex svelte-2ufuas"),a(s,"width","400"),a(s,"height","400"),a(s,"title","Map"),a(s,"frameborder","0"),a(s,"scrolling","no"),a(s,"marginheight","0"),a(s,"marginwidth","0"),O(s.src,j="https://maps.google.com/maps?q="+r[0].office.location.lat+","+r[0].office.location.lon+"&z=12&output=embed")||a(s,"src",j),a(c,"class","center svelte-2ufuas")},m(e,t){_(e,l,t),d(l,h),_(e,p,t),_(e,f,t),d(f,v),E.m(b,v),d(f,P),d(f,o),_(e,S,t),_(e,M,t),_(e,T,t),_(e,c,t),d(c,g),d(c,R),d(c,s)},p(e,[t]){t&1&&u!==(u=e[0].office.name+"")&&L(h,u),t&1&&b!==(b=e[0].office.description+"")&&E.p(b),t&1&&!O(o.src,q=e[0].office.photo.url)&&a(o,"src",q),t&1&&I!==(I=e[0].office.photo.description)&&a(o,"alt",I),t&1&&!O(s.src,j="https://maps.google.com/maps?q="+e[0].office.location.lat+","+e[0].office.location.lon+"&z=12&output=embed")&&a(s,"src",j)},i:A,o:A,d(e){e&&(i(l),i(p),i(f),i(S),i(M),i(T),i(c))}}}function W(r,l,u){let{data:h}=l;return r.$$set=p=>{"data"in p&&u(0,h=p.data)},[h]}class Z extends Q{constructor(l){super(),U(this,l,W,V,B,{data:0})}}export{Z as component};
