import{a as d,m as p,_ as m,o as i,c as r,b as a,n as l,e as c,F as u,i as h,t as _}from"./index-p6O227c0.js";import{g}from"./GetDataStore-Bt_fYzw8.js";const w={props:["nowTarget","isUser"],data(){return{url:"https://vue3-course-api.hexschool.io/v2/",path:"gymplus",nowPage:1}},methods:{...d(g,["getRemoteData"])},computed:{...p(g,["pagination"])},watch:{pagination(e){this.nowPage=e.current_page}}},f={class:"pagination justify-content-center"},v=a("span",{class:"icon-base icon-sm icon-d-arrow align-text-top",style:{transform:"rotate(180deg)"}},null,-1),b=[v],k=["onClick"],P=a("span",{class:"icon-base icon-sm icon-d-arrow align-text-top"},null,-1),C=[P];function D(e,s,t,y,o,R){return i(),r("nav",null,[a("ul",f,[a("li",{class:l(["page-item",{disabled:!e.pagination.has_pre}])},[a("a",{onClick:s[0]||(s[0]=c(n=>e.getRemoteData(t.nowTarget,o.nowPage-1,t.isUser),["prevent"])),class:"page-link rounded-pill rounded-end-0 pe-2 border-2",href:"#","aria-label":"Previous"},b)],2),(i(!0),r(u,null,h(e.pagination.total_pages,n=>(i(),r("li",{class:l(["page-item",{active:o.nowPage===n}]),key:n},[a("a",{onClick:c(T=>e.getRemoteData(t.nowTarget,n,t.isUser),["prevent"]),class:"page-link fw-medium border-2",href:"#"},_(n),9,k)],2))),128)),a("li",{class:l(["page-item",{disabled:!e.pagination.has_next}])},[a("a",{onClick:s[1]||(s[1]=c(n=>e.getRemoteData(t.nowTarget,o.nowPage+1,t.isUser),["prevent"])),class:"page-link rounded-pill rounded-start-0 ps-2 border-2",href:"#","aria-label":"Next"},C)],2)])])}const S=m(w,[["render",D]]);export{S as P};
