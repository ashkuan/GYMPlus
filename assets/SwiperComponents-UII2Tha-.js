import{S as y,a as S,N as A,A as I}from"./pagination-Rkec6P3X.js";import{a as g,m as c,_ as N,o as r,c as l,d as h,w as d,F as u,i as D,k as T,b as e,t as o,h as f,j as w,e as V,r as p}from"./index-d6ePCIf6.js";import{g as x}from"./GetDataStore-85IatuIu.js";import{f as B}from"./FakeDataStore-IHHH959t.js";import{c as b}from"./cartStore-opx4yp2Y.js";const L="/GYMPlus/icons/bookmark-outline.svg",P={components:{Swiper:y,SwiperSlide:S},data(){return{modules:[A,I],swiperInstance:null,isAddingToCart:!1}},methods:{...g(x,["getRemoteData"]),...g(b,["addCart"]),onSwiper(i){this.swiperInstance=i},goLeft(){this.swiperInstance.slidePrev()},goRight(){this.swiperInstance.slideNext()}},computed:{...c(x,["targetData"]),...c(B,["coaches"]),...c(b,["isLoading","carts"]),courses(){return this.targetData.filter((i,s)=>s>4)},isInCartArr(){const i=this.carts.map(s=>s.product_id);return this.courses.map(s=>i.some(m=>m===s.id))}},watch:{isLoading(i){i||(this.isAddingToCart=!1)}},mounted(){this.getRemoteData("products")}},R={class:"card text-white text-start bg-transparent"},M={class:"position-relative"},j=["src"],E={class:"card-img-overlay d-flex p-2 p-md-3"},F={class:"d-flex align-items-center mt-auto"},O={class:"avatar bg-linear rounded-circle me-2"},U=["src"],G={class:"fs-8 small-lg"},Y=e("a",{href:"#",class:"btn btn-dark rounded-circle border-0 align-self-start p-2 p-lg-3 ms-auto",title:"加入收藏"},[e("img",{src:L,alt:"收藏icon"})],-1),q={class:"card-body px-0"},z={class:"card-title mb-1 mb-xxl-0 fs-7 fs-lg-5 lh-base lh-lg-sm fw-medium"},H={class:"d-flex flex-column flex-xxl-row justify-content-xxl-between align-items-xxl-end"},J={class:"card-text d-flex align-items-center mb-3 mb-xxl-0"},K={class:"text-secondary display-3 fs-lg-5 ls-0 me-1"},Q={key:0,class:"text-decoration-line-through small"},W=["onClick","disabled"],X={key:0,class:"line-loading-loop"};function Z(i,s,m,$,n,a){const v=p("router-link"),k=p("swiper-slide"),C=p("swiper");return r(),l(u,null,[h(C,{class:"course-swiper",ref:"swiper",onSwiper:a.onSwiper,width:255,"slides-per-view":1,"space-between":20,modules:n.modules,navigation:"",autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{768:{slidesPerView:2,width:530},992:{slidesPerView:3,width:936,spaceBetween:18},1400:{slidesPerView:3,width:1296,spaceBetween:48}}},{default:d(()=>[(r(!0),l(u,null,D(a.courses,(t,_)=>(r(),T(k,{key:t.key},{default:d(()=>[e("div",R,[e("div",M,[e("img",{src:t.imageUrl,class:"card-img-top rounded-4",alt:"course.title"},null,8,j),e("div",E,[e("div",F,[e("span",O,[e("img",{src:i.coaches[t.coach].avatarUrl,alt:"course.coach",class:"rounded-circle"},null,8,U)]),e("p",G,o(t.coach)+" 教練",1)]),Y])]),e("div",q,[e("h5",z,[h(v,{to:`/course/${t.id}`,class:"link-white"},{default:d(()=>[f(o(t.title),1)]),_:2},1032,["to"])]),e("div",H,[e("p",J,[e("span",K," NT$"+o(t.price===0?"免費體驗":t.price),1),t.price<t.origin_price?(r(),l("span",Q,o(t.origin_price),1)):w("",!0)]),e("button",{type:"button",class:"btn btn-primary btn-sm py-2 py-xxl-3 px-xxl-8 fs-lg-7",title:"立即加購",onClick:V(ee=>(i.addCart(t.id,t.title),n.isAddingToCart=!0),["prevent"]),disabled:n.isAddingToCart||a.isInCartArr[_]},[n.isAddingToCart?(r(),l("span",X)):w("",!0),f(" "+o(a.isInCartArr[_]?"已在購物車":"加入購物車"),1)],8,W)])])])]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"]),e("div",{class:"swiper-button-prev",onClick:s[0]||(s[0]=(...t)=>a.goLeft&&a.goLeft(...t))}),e("div",{class:"swiper-button-next",onClick:s[1]||(s[1]=(...t)=>a.goRight&&a.goRight(...t))})],64)}const oe=N(P,[["render",Z]]);export{oe as C};