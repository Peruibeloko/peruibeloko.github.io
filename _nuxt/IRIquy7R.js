import{af as f,r as u,ag as o,k as d,V as v,ah as i,ai as l,a9 as h,aj as m}from"./DM1clVK2.js";function U(t,a={}){const e=a.head||f();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});o(()=>{n.value=s.value?{}:m(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),h()&&(v(()=>{r.dispose()}),i(()=>{s.value=!0}),l(()=>{s.value=!1})),r}export{U as u};