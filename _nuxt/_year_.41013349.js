import f from"./ContentList.538d7019.js";import{f as h,u as y,o,c as a,d as g,t as r,P as q,b,w as u,a as t,F as c,r as C,g as k}from"./entry.d1815d5a.js";import{q as w}from"./query.99b46164.js";import"./ContentQuery.8ceb683f.js";import"./preview.c269314b.js";const x={class:"post-list"},B=["href"],N=["datetime"],$=t("p",null,"Nenhum post nesse período",-1),T=h({__name:"[year]",setup(D){const s=y(),{page:l=1,size:n=5}=s.query,p=w("blog").where({date:{$regex:`${s.params.year}-\\d{2}-\\d{2}`}}).skip((l-1)*n).limit(n).sort({date:-1}).params();return(i,L)=>{const d=f;return o(),a(c,null,[g(" Posts feitos em "+r((i._.provides[q]||i.$route).params.year)+" ",1),b(d,{query:k(p)},{default:u(({list:_})=>[t("ul",x,[(o(!0),a(c,null,C(_,e=>{var m;return o(),a("li",{key:e._path},[t("a",{href:(m=e._path)==null?void 0:m.replace("blog","blog/post")},r(e.title),9,B),t("time",{datetime:e.date},r(`${new Date(e.date).toLocaleDateString("pt-BR",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"})}`),9,N)])}),128))])]),"not-found":u(()=>[$]),_:1},8,["query"])],64)}}});export{T as default};
