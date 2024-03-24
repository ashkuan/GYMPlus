import{_,m as b,a as h,c as g,b as s,d as e,w as l,n as c,e as r,F as u,f,r as d,o as v,g as x,t as y,h as o}from"./index-d6ePCIf6.js";import{c as m}from"./cartStore-opx4yp2Y.js";import"./sweetalert2.all-whvPKlQA.js";const w="/GYMPlus/icons/logo-white.svg",k={data(){return{scrollPosition:0,routeName:"",isOpened:!1,loader:null}},computed:{...b(m,["carts"])},methods:{...h(m,["getCarts"]),handleScroll(){this.scrollPosition=window.scrollY}},watch:{$route(i){this.routeName=i.name}},mounted(){window.addEventListener("scroll",this.handleScroll),this.routeName=this.$route.name;const{collapseBtn:i}=this.$refs;this.$refs.collapseBtn.addEventListener("click",()=>{[...i.classList].find(n=>n==="collapsed")?this.isOpened=!1:this.isOpened=!0})},created(){window.removeEventListener("scroll",this.handleScroll),this.getCarts()}},N={class:"navbar navbar-expand-lg py-1 position-relative"},C={class:"container justify-content-center justify-content-md-between"},P={class:"menu-btn btn border-0 p-0 align-bottom d-lg-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",ref:"collapseBtn"},S=s("span",{class:"icon-base menu-icon"},null,-1),B=[S],M={class:"collapse navbar-collapse pe-lg-0",id:"navbarNavAltMarkup"},j={class:"nav-item mb-2 mb-lg-0 d-lg-none"},A=s("span",{class:"position-relative"},[o(" 網站導覽 "),s("span",{class:"icon-base icon-arrow icon-xs bg-primary"})],-1),O=[A],V={class:"nav-item mb-2 mb-lg-0 d-lg-none"},E=s("span",{class:"position-relative"},[o(" 首頁 "),s("span",{class:"icon-base icon-arrow icon-xs bg-primary"})],-1),L={class:"nav-item mb-2 mb-lg-0"},F=s("span",{class:"position-relative"},[o(" 購買課程 "),s("span",{class:"icon-base icon-arrow icon-xs bg-primary"})],-1),G={class:"nav-item mb-2 mb-lg-0"},Y=s("span",{class:"position-relative"},[o(" 認識教練 "),s("span",{class:"icon-base icon-arrow icon-xs bg-primary"})],-1),z={class:"nav-item mb-2 mb-lg-0"},R=s("span",{class:"position-relative"},[o(" 關於我們 "),s("span",{class:"icon-base icon-arrow icon-xs bg-primary"})],-1),T={class:"nav-item mb-5 mb-lg-0"},D=s("span",{class:"position-relative"},[o(" 健身文章 "),s("span",{class:"icon-base icon-arrow icon-xs bg-primary"})],-1),q={class:"nav-item mb-2 mb-lg-0"},H=s("span",{class:"icon-base icon-bookmark bg-linear me-1"},null,-1),I=s("span",null,"我的最愛",-1),J={class:"nav-item mb-2 mb-lg-0"},K=s("span",{class:"icon-base icon-cart bg-white me-1 me-lg-0"},null,-1),Q=s("span",{class:"d-lg-none"},"購物車",-1),U={class:"badge position-absolute top-0 bg-primary rounded-circle p-0 lh-base",style:{width:"18px",right:"-4px"}},W={class:"fs-8 fw-normal align-top d-none d-lg-block"},X={class:"bg-gray-1"},Z=s("div",{class:"footer-top-rounded pt-8 pt-md-6 rounded-bottom bg-white"},null,-1),$={class:"container pt-1 pt-lg-4"},ss={class:"border-bottom border-gray-2 fw-medium"},es={class:"nav justify-content-center justify-content-lg-start pb-1 pb-lg-4"},ts={class:"py-3"},ls={class:"py-3"},os={class:"py-3"},as={class:"py-3"},ns={class:"py-3"},is={class:"py-3"},cs=f('<div class="d-flex flex-column flex-md-row align-items-center pt-4 pt-md-6 pb-1 pb-md-5"><ul class="fs-8 fs-lg-7 ls-md-2 text-gray-3 list-unstyled text-center text-md-start py-1"><li class="mb-2"><span class="me-2">地址</span><span class="text-white">新北市某某區某某路一段233號</span></li><li><span class="me-2">電話</span><a href="tel:02-1234567" class="mb-0" title="立即撥打">02-1234567</a></li></ul><ul class="list-unstyled d-flex ms-md-auto"><li class="mx-2"><a href="https://www.facebook.com/" class="d-inline-block rounded-circle bg-gray-2"><span class="icon-base icon-fb bg-white m-2"></span></a></li><li class="mx-2"><a href="https://www.youtube.com/" class="d-inline-block rounded-circle bg-gray-2"><span class="icon-base icon-yt bg-white m-2"></span></a></li><li class="mx-2"><a href="#" class="d-inline-block rounded-circle bg-gray-2"><span class="icon-base icon-ig bg-white m-2"></span></a></li><li class="mx-2"><a href="#" class="d-inline-block rounded-circle bg-gray-2"><span class="icon-base icon-message bg-white m-2"></span></a></li></ul></div>',1),rs={class:"py-3 py-md-4 bg-primary"},ds={class:"container d-flex flex-column flex-md-row align-items-center"},ms=s("img",{src:w,alt:"logo",class:"footer-logo"},null,-1),ps=s("small",{class:"fs-8 fs-lg-7 text-white text-center order-md-1"}," Copyright © 2024 Gym All Rights Reserved.｜僅個人學習，無任何商業用途 ",-1);function _s(i,n,bs,hs,a,gs){const t=d("router-link"),p=d("router-view");return v(),g(u,null,[s("header",{class:c(["front-header",[a.scrollPosition?"shadow-sm scrolled":"pt-lg-4",a.routeName==="home"||a.scrollPosition?"fixed-top":"sticky-top",a.routeName==="home"?"home-only":"other-route",a.isOpened?"bg-light":"bg-white"]]),style:{transition:"all 0.18s ease-in-out"}},[s("nav",N,[s("div",C,[e(t,{to:"/",class:"my-auto"},{default:l(()=>[s("h1",{class:"logo mb-0",style:x([a.scrollPosition?"width: 105px; height: 60px":""])}," GYMPlus ",4)]),_:1}),s("button",P,B,512),s("div",M,[s("ul",{class:c(["navbar-nav container-md align-items-lg-center justify-content-end py-3 p-lg-0",{"my-3":a.isOpened}])},[s("li",j,[s("a",{href:"#",onClick:n[0]||(n[0]=r(()=>{},["prevent"])),class:"nav-link text-center link-gray-1 ls-2 me-lg-3"},O)]),s("li",V,[e(t,{to:"/",class:"nav-link text-center link-gray-1 ls-2 me-lg-3"},{default:l(()=>[E]),_:1})]),s("li",L,[e(t,{to:"/courses",class:"nav-link text-center link-gray-1 ls-2 me-lg-3"},{default:l(()=>[F]),_:1})]),s("li",G,[e(t,{to:"/coaches",class:"nav-link text-center link-gray-1 ls-2 mx-lg-3"},{default:l(()=>[Y]),_:1})]),s("li",z,[e(t,{to:"/about",class:"nav-link text-center link-gray-1 ls-2 mx-lg-3"},{default:l(()=>[R]),_:1})]),s("li",T,[e(t,{to:"/articles",class:"nav-link text-center link-gray-1 ls-2 mx-lg-3"},{default:l(()=>[D]),_:1})]),s("li",q,[e(t,{to:"/favourite",class:c(["btn btn-white ms-lg-1 me-lg-5",{"border-secondary":!!a.scrollPosition||a.routeName!=="home"}])},{default:l(()=>[H,I]),_:1},8,["class"])]),s("li",J,[e(t,{to:"/cart",class:"btn btn-dark px-3 border-0 position-relative me-lg-1"},{default:l(()=>[K,Q,s("span",U,[s("small",W,y(i.carts.length),1)])]),_:1})])],2)])])])],2),e(p),s("footer",X,[Z,s("div",$,[s("div",ss,[s("ul",es,[s("li",ts,[s("a",{class:"d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2",href:"#",onClick:n[1]||(n[1]=r(()=>{},["prevent"]))}," 網站導覽 ")]),s("li",ls,[e(t,{to:"/",class:"d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2"},{default:l(()=>[o(" 首頁 ")]),_:1})]),s("li",os,[e(t,{to:"/courses",class:"d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2"},{default:l(()=>[o(" 購買課程 ")]),_:1})]),s("li",as,[e(t,{to:"/coaches",class:"d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2"},{default:l(()=>[o(" 認識教練 ")]),_:1})]),s("li",ns,[e(t,{to:"/about",class:"d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2"},{default:l(()=>[o(" 關於我們 ")]),_:1})]),s("li",is,[e(t,{to:"/articles",class:"d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2"},{default:l(()=>[o(" 健身文章 ")]),_:1})])])]),cs]),s("div",rs,[s("div",ds,[e(t,{to:"/",class:"mb-2 order-md-2 ms-md-auto mb-md-0"},{default:l(()=>[ms]),_:1}),ps])])])],64)}const xs=_(k,[["render",_s]]);export{xs as default};