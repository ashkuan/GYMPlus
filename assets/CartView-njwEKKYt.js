import{_ as $,a as r,L,m as d,c as a,d as h,b as t,w as S,F as x,i as T,e as i,l as A,q as B,n as f,t as l,h as p,f as M,r as u,o as c}from"./index-p6O227c0.js";import{c as n}from"./cartStore-qZAABGT3.js";import{C as N}from"./SwiperComponents-b_lHO0qR.js";import"./sweetalert2.all-DAg9cmO9.js";import"./pagination-qkCR7iWU.js";import"./GetDataStore-Bt_fYzw8.js";import"./AlertStore-dF7BXcaC.js";import"./FakeDataStore-oZqDuNgi.js";const V="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='currentColor'%20class='bi%20bi-cart'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M0%201.5A.5.5%200%200%201%20.5%201H2a.5.5%200%200%201%20.485.379L2.89%203H14.5a.5.5%200%200%201%20.491.592l-1.5%208A.5.5%200%200%201%2013%2012H4a.5.5%200%200%201-.491-.408L2.01%203.607%201.61%202H.5a.5.5%200%200%201-.5-.5M3.102%204l1.313%207h8.17l1.313-7zM5%2012a2%202%200%201%200%200%204%202%202%200%200%200%200-4m7%200a2%202%200%201%200%200%204%202%202%200%200%200%200-4m-7%201a1%201%200%201%201%200%202%201%201%200%200%201%200-2m7%200a1%201%200%201%201%200%202%201%201%200%200%201%200-2'/%3e%3c/svg%3e",j="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='currentColor'%20class='bi%20bi-x-lg'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M2.146%202.854a.5.5%200%201%201%20.708-.708L8%207.293l5.146-5.147a.5.5%200%200%201%20.708.708L8.707%208l5.147%205.146a.5.5%200%200%201-.708.708L8%208.707l-5.146%205.147a.5.5%200%200%201-.708-.708L7.293%208z'/%3e%3c/svg%3e",H={data(){return{url:"",path:"",code:"",conponTitle:"",isconponStatus:!1}},methods:{...r(n,["getCarts"]),...r(n,["delCart"]),...r(n,["delAllCart"]),addCouponCode(){const e={code:this.code};this.code===""?this.$swal({icon:"error",title:"錯誤",text:"優惠卷欄位不可填空!"}):this.axios.post(`${this.url}api/${this.path}/coupon`,{data:e}).then(o=>{this.$swal({icon:"success",title:"已成功套用優惠卷",showConfirmButton:!1,timer:1500}),setTimeout(()=>{this.getCarts(),this.isconponStatus=!0,this.conponTitle=o.data.message},1500)})}},components:{Loading:L,CoursesSwiper:N},computed:{...d(n,["carts"]),...d(n,["total"]),...d(n,["final_total"]),...d(n,["isLoading"])},mounted(){this.url="https://vue3-course-api.hexschool.io/v2/",this.path="gymplus",this.getCarts()}},z={class:"bg-white",style:{"min-height":"100vh"}},D={class:"container"},F={"aria-label":"breadcrumb",class:"pt-5"},I={class:"breadcrumb"},U={class:"breadcrumb-item"},q=t("li",{class:"breadcrumb-item active","aria-current":"page"},"購物車",-1),E={class:"container my-8 my-md-10"},R=M('<section class="my-6"><div class="row justify-content-center"><div class="col-9 col-md-7 timeLine"></div></div><div class="row mt-6 g-0"><div class="col-3 col-md-5"><div class="text-center step step_1 active">確認商品</div></div><div class="col-6 col-md-2"><div class="text-center step step_2">填寫資料</div></div><div class="col-3 col-md-5"><div class="text-center step step_3">訂單確認</div></div></div></section>',1),G={class:"pb-5"},J=t("h2",{class:"text-center"},"購物車列表",-1),K={class:"row justify-content-center"},O={class:"col-12 col-lg-8"},P={class:"card shadow"},Q={class:"card-body"},W={key:0,class:"d-flex flex-column justify-content-center align-items-center"},X=t("img",{src:V,alt:"cartIcon",class:"w-25"},null,-1),Y=t("h3",null,"尚未加入課程",-1),Z=[X,Y],tt={key:1,class:"table align-middle table-hover"},st=t("thead",null,[t("tr",null,[t("th"),t("th",{class:"d-none d-md-table-cell"}),t("th",{class:"text-start"},"課程名稱"),t("th",null,"金額")])],-1),ot=["onClick"],et=t("img",{src:j,alt:"deleteIcon"},null,-1),nt=[et],lt={style:{width:"200px"},class:"d-none d-md-table-cell"},at=["src"],it={class:"text-end"},ct={class:"d-flex"},dt={class:"card-text mb-0 text-decoration-line-through text-nowrap"},rt={class:"px-3 text-nowrap"},ht={scope:"row",colspan:"2",class:"border-0"},pt={class:"container row align-items-center mb-4"},ut={class:"col-12 col-md-6"},_t={class:"input-group"},vt=["disabled"],bt=["disabled"],mt={class:"col-12 col-md-6 my-2 my-md-0"},gt={class:"col-12 d-flex flex-column align-items-end"},wt={class:"d-flex justify-content-between py-4"},xt=["disabled"],ft={class:"bg-dark block-space overflow-hidden"},yt={class:"container position-relative"},Ct=t("h5",{class:"text-secondary text-center py-3"},"推薦課程",-1);function kt(e,o,$t,Lt,St,_){const y=u("Loading"),C=u("router-link"),k=u("CoursesSwiper");return c(),a(x,null,[h(y,{active:e.isLoading},null,8,["active"]),t("div",z,[t("div",D,[t("nav",F,[t("ol",I,[t("li",U,[h(C,{to:"/",class:"mx-2"},{default:S(()=>[p("首頁")]),_:1})]),q])])]),t("main",null,[t("div",E,[R,t("section",G,[J,t("div",K,[t("div",O,[t("div",P,[t("div",Q,[this.carts.length===0?(c(),a("div",W,Z)):(c(),a("table",tt,[st,t("tbody",null,[(c(!0),a(x,null,T(e.carts,s=>{var v,b,m,g;return c(),a("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger rounded",onClick:i(Tt=>{var w;return e.delCart(s.id,(w=s==null?void 0:s.product)==null?void 0:w.title)},["prevent"])},nt,8,ot)]),t("td",lt,[t("img",{src:(v=s==null?void 0:s.product)==null?void 0:v.imageUrl,alt:"img",class:"img-fluid"},null,8,at)]),t("td",null,l((b=s==null?void 0:s.product)==null?void 0:b.title),1),t("td",it,[t("div",ct,[t("p",dt," $ "+l((m=s==null?void 0:s.product)==null?void 0:m.origin_price),1),t("span",rt,"$ "+l((g=s==null?void 0:s.product)==null?void 0:g.price),1)])])])}),128))]),t("tfoot",null,[t("tr",null,[t("th",ht,[t("button",{type:"button",class:"btn btn-outline-danger btn-lg rounded my-3",onClick:o[0]||(o[0]=i((...s)=>e.delAllCart&&e.delAllCart(...s),["prevent"]))},"刪除全部")])])])]))]),t("div",pt,[t("div",ut,[t("div",_t,[A(t("input",{type:"text",class:"form-control",placeholder:"請輸入優惠卷代碼","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":o[1]||(o[1]=s=>this.code=s),disabled:this.isconponStatus||this.carts.length===0},null,8,vt),[[B,this.code]]),t("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:o[2]||(o[2]=i((...s)=>_.addCouponCode&&_.addCouponCode(...s),["prevent"])),disabled:this.isconponStatus||this.carts.length===0},"套用",8,bt)])]),t("div",mt,[t("p",{class:f(["mb-0 text-center text-md-start",[this.conponTitle===""?"":"text-success"]])},l(this.conponTitle===""?"未套用優惠券":this.conponTitle),3)]),t("div",gt,[t("p",null,[p("商品合計: "),t("span",{class:f([e.total===e.final_total?"":"text-decoration-line-through"])}," NT$ "+l(e.total),3)]),t("p",null,[p("訂單總計: "),t("span",null,"NT$ "+l(e.final_total),1)])])]),t("div",wt,[t("button",{type:"button",class:"btn btn-secondary btn-lg mx-3",onClick:o[3]||(o[3]=i(s=>this.$router.push("/courses"),["prevent"]))},"返回購物"),t("button",{type:"button",class:"btn btn-outline-danger btn-lg mx-3",disabled:this.carts.length===0,onClick:o[4]||(o[4]=i(s=>this.$router.push("/checkout"),["prevent"]))},"填寫資料",8,xt)])])])])])]),t("section",ft,[t("div",yt,[Ct,h(k)])])])])],64)}const Dt=$(H,[["render",kt]]);export{Dt as default};
