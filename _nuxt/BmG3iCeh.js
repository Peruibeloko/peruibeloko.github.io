import{_ as u}from"./CGDK0lq-.js";import d from"./DtUvKH28.js";import{f,n as h,j as x,r as g,q as b,o as v,c as y,a as e,b as c,w as C,d as w,t as N,u as i}from"./Dd3kBwaj.js";import{u as V,q as k}from"./CpRtwVqf.js";import"./DelfEuEv.js";import"./BFqgeD8t.js";import"./Bse90Dh5.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./DRD16UCZ.js";import"./zN8iIZgG.js";const q={id:"post"},z=f({__name:"[postId]",async setup(B){let t,a;const{currentRoute:n}=h(),{data:m}=([t,a]=x(()=>V("blog_post",()=>k(`/blog/${n.value.params.postId}`).findOne())),t=await t,a(),t),o=g({});return b("footnotes",[o,(s,r)=>{o.value={...o.value,[s]:r}}]),(s,r)=>{var p;const _=u,l=d;return v(),y("div",q,[e("header",null,[c(_,{to:"/blog"},{default:C(()=>[w("Voltar")]),_:1}),e("h1",null,N((p=i(m))==null?void 0:p.title),1)]),e("main",null,[c(l,{tag:"article",path:`/blog/${i(n).params.postId}`},null,8,["path"])])])}}});export{z as default};