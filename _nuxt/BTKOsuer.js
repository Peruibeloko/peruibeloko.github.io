import{_ as c}from"./Bwo3w7U_.js";import{f as m,H as i,h as u,o as h,B as l,u as r,am as d,a6 as p,J as f,Z as g}from"./Dd3kBwaj.js";import"./DelfEuEv.js";const b=m({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const n=i().public.mdc.useNuxtImage?c:"img",t=e,o=u(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=p(f(i().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return g(s,t.src)}return t.src});return(a,s)=>(h(),l(d(r(n)),{src:r(o),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{b as default};