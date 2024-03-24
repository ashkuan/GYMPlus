import{_ as j,L as M,c as u,d as C,b as t,w as B,t as o,n as F,e as $,j as I,F as H,f as U,r as V,o as h,h as Y}from"./index-d6ePCIf6.js";const z={props:["id"],data(){return{url:"",path:"",order:{},orderTime:"",orderId:"",coupon:"",isLoading:!0}},methods:{formatUnixTimestamp(r){const s=new Date(r*1e3),l=s.getFullYear(),n=String(s.getMonth()+1).padStart(2,"0"),e=String(s.getDate()).padStart(2,"0"),i=String(s.getHours()).padStart(2,"0"),c=String(s.getMinutes()).padStart(2,"0"),d=String(s.getSeconds()).padStart(2,"0");return`${l}/${n}/${e} ${i}:${c}:${d}`},formatOrderNumber(r){const s=new Date(r*1e3),l=s.getFullYear(),n=String(s.getMonth()+1).padStart(2,"0"),e=String(s.getDate()).padStart(2,"0"),i=String(s.getHours()).padStart(2,"0"),c=String(s.getMinutes()).padStart(2,"0"),d=String(s.getSeconds()).padStart(2,"0");return`${l}${n}${e}${i}${c}${d}`},getData(){this.axios.get(`${this.url}api/${this.path}/order/${this.id}`).then(r=>{this.order={...r.data.order},this.orderTime=this.formatUnixTimestamp(this.order.create_at),this.orderId=this.formatOrderNumber(this.order.create_at);const{products:s}=this.order,n=Object.keys(s)[0],e=s[n];Object.prototype.hasOwnProperty.call(e,"coupon")&&(this.coupon=e.coupon.title),setTimeout(()=>{this.isLoading=!1},1e3)})},payOrder(){this.axios.post(`${this.url}api/${this.path}/pay/${this.id}`).then(r=>{r.data.success&&(this.$swal({icon:"success",title:"系統通知",text:"謝謝您的訂購!",showConfirmButton:!1,timer:1500}),setTimeout(()=>{this.$router.push("/")},1500))})}},components:{Loading:M},mounted(){window.scrollTo(0,0),this.url="https://vue3-course-api.hexschool.io/v2/",this.path="gymplus",this.getData()}},E={class:"bg-light",style:{"min-height":"100vh"}},K={class:"container"},P={"aria-label":"breadcrumb",class:"pt-5"},q={class:"breadcrumb"},A={class:"breadcrumb-item"},G=t("li",{class:"breadcrumb-item active","aria-current":"page"},"訂單確認",-1),J={key:0,class:"container"},Q=U('<section class="pt-5"><div class="row justify-content-center"><div class="col-9 col-md-7 timeLine"></div></div><div class="row mt-6 g-0"><div class="col-3 col-md-5"><div class="text-center step step_1 active">確認商品</div></div><div class="col-6 col-md-2"><div class="text-center step step_2 active">填寫資料</div></div><div class="col-3 col-md-5"><div class="text-center step step_3 active">訂單確認</div></div></div></section>',1),R={class:"pt-5"},W={class:"table table-bordered table-hover align-middle"},X=t("th",null,"訂單時間",-1),Z=t("th",null,"訂單編號",-1),tt=t("th",null,"訂購人姓名",-1),et=t("th",null,"聯絡信箱",-1),st=t("th",null,"聯絡電話",-1),ot=t("th",null,"地址",-1),rt=t("th",null,"商品清單",-1),nt={class:"text-break"},it=t("th",null,"訂單總計",-1),lt=t("th",null,"折價卷",-1),ct=t("th",null,"備註",-1),dt=t("th",null,"付款方式",-1),at=t("th",null,"付款狀態",-1),ut={scope:"row",colspan:"2"},ht={class:"d-flex justify-content-center"};function pt(r,s,l,n,e,i){var a,p,_,m,g,v,b,f,y,S,x,k,w,T,N,D,L;const c=V("Loading"),d=V("router-link");return h(),u(H,null,[C(c,{active:e.isLoading},null,8,["active"]),t("div",E,[t("div",K,[t("nav",P,[t("ol",q,[t("li",A,[C(d,{to:"/",class:"mx-2"},{default:B(()=>[Y("首頁")]),_:1})]),G])])]),e.isLoading?I("",!0):(h(),u("main",J,[Q,t("section",R,[t("table",W,[t("tbody",null,[t("tr",null,[X,t("td",null,o(e.orderTime),1)]),t("tr",null,[Z,t("td",null,o(e.orderId),1)]),t("tr",null,[tt,t("td",null,o((p=(a=e.order)==null?void 0:a.user)==null?void 0:p.name),1)]),t("tr",null,[et,t("td",null,o((m=(_=e.order)==null?void 0:_.user)==null?void 0:m.email),1)]),t("tr",null,[st,t("td",null,o((v=(g=e.order)==null?void 0:g.user)==null?void 0:v.tel),1)]),t("tr",null,[ot,t("td",null,o((f=(b=e.order)==null?void 0:b.user)==null?void 0:f.address),1)]),t("tr",null,[rt,t("td",nt,o((S=(y=e.order)==null?void 0:y.user)==null?void 0:S.cartTitle),1)]),t("tr",null,[it,t("td",null,"NT$ "+o((x=e.order)==null?void 0:x.total),1)]),t("tr",null,[lt,t("td",null,o(e.coupon===""?"未使用優惠卷":e.coupon),1)]),t("tr",null,[ct,t("td",null,o((k=e.order)==null?void 0:k.message),1)]),t("tr",null,[dt,t("td",null,o(((T=(w=e.order)==null?void 0:w.user)==null?void 0:T.payment)==="credit-card"?"信用卡付款":"銀行轉帳"),1)]),t("tr",null,[at,t("td",{class:F([(N=e.order)!=null&&N.is_paid?"text-success":""])},o((D=e.order)!=null&&D.is_paid?"已完成付款":"審核中..."),3)])]),t("tfoot",null,[t("tr",null,[t("th",ut,[t("div",ht,[(L=e.order)!=null&&L.is_paid?(h(),u("button",{key:0,type:"button",class:"btn btn-outline-success btn-lg rounded",onClick:s[0]||(s[0]=$(O=>{this.$router.push("/")},["prevent"]))},"返回首頁")):(h(),u("button",{key:1,type:"button",class:"btn btn-outline-danger btn-lg rounded",onClick:s[1]||(s[1]=$((...O)=>i.payOrder&&i.payOrder(...O),["prevent"]))},"完成訂單"))])])])])])])]))])],64)}const mt=j(z,[["render",pt]]);export{mt as default};