import{_ as U,L as j,a as M,m as f,c as m,d as o,b as e,w as N,F as C,f as D,r as u,o as h,h as v,n as a,l as b,q as I,u as q,i as R,t as _,e as $}from"./index-p6O227c0.js";import{c as p}from"./cartStore-qZAABGT3.js";import"./sweetalert2.all-DAg9cmO9.js";const F={data(){return{orderId:"",form:{user:{name:"",email:"",tel:"",address:"",payment:"credit-card",cartTitle:""},message:""}}},components:{Loading:j},methods:{...M(p,["getCarts"]),checkData(){this.carts.length===0&&(this.$swal({icon:"error",title:"購物車為空",text:"您還沒選購課程~",showConfirmButton:!1,timer:1500}),setTimeout(()=>{this.$router.push("/courses")},1500))},onSubmit(){this.$swal({icon:"question",title:"是否送出訂單?",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定"}).then(n=>{if(n.isConfirmed){this.form.payment=this.ispayment;const t=this.carts.map(d=>d.product.title).join("、");this.form.user.cartTitle=t;const x=this.form;this.axios.post(`${this.url}api/${this.path}/order`,{data:x}).then(d=>{this.orderId=d.data.orderId,this.$swal({icon:"success",title:d.data.message,showConfirmButton:!1,timer:1500}),setTimeout(()=>{this.$router.push(`order-creation/${this.orderId}`)},1500)})}})}},computed:{...f(p,["carts"]),...f(p,["total"]),...f(p,["final_total"]),...f(p,["isLoading"])},mounted(){this.url="https://vue3-course-api.hexschool.io/v2/",this.path="gymplus",this.getCarts(),setTimeout(()=>{this.checkData()},500)}},O={class:"bg-white",style:{"min-height":"100vh"}},Y={class:"container"},z={"aria-label":"breadcrumb",class:"pt-5"},A={class:"breadcrumb"},E={class:"breadcrumb-item"},P=e("li",{class:"breadcrumb-item","aria-current":"page"},"購物車",-1),G=e("li",{class:"breadcrumb-item active","aria-current":"page"},"填寫資料",-1),H={class:"container"},J=D('<section class="pt-5"><div class="row justify-content-center"><div class="col-9 col-md-7 timeLine"></div></div><div class="row mt-6 g-0"><div class="col-3 col-md-5"><div class="text-center step step_1 active">確認商品</div></div><div class="col-6 col-md-2"><div class="text-center step step_2 active">填寫資料</div></div><div class="col-3 col-md-5"><div class="text-center step step_3">訂單確認</div></div></div></section>',1),K={class:"py-5"},Q={class:"col-12 col-md-4"},W=e("h4",{class:"text-center"},"訂購人資訊",-1),X={class:"mb-3"},Z=e("label",{for:"name",class:"form-label"},"訂購人姓名",-1),ee={class:"mb-3"},se=e("label",{for:"email",class:"form-label"},"聯絡信箱",-1),te={class:"mb-3"},oe=e("label",{for:"phone",class:"form-label"},"手機號碼",-1),le={class:"mb-3"},ae=e("label",{for:"contact",class:"form-label"},"聯絡地址",-1),ce={class:"mb-3"},ie=e("label",{for:"comment",class:"form-label"},"備註",-1),ne={class:"col-12 col-md-4"},re=e("h4",{class:"text-center"},"付款方式",-1),de={class:"d-flex justify-content-center"},me={class:"form-check form-check-inline"},ue=e("label",{class:"form-check-label",for:"credit_card"},"信用卡",-1),he={class:"form-check form-check-inline"},_e=e("label",{class:"form-check-label",for:"bank_account"},"銀行轉帳",-1),pe={key:0,class:"credit-card"},fe={class:"mb-3"},ve=e("label",{for:"cardName",class:"form-label"},"持卡人",-1),be={class:"mb-3"},xe=e("label",{for:"cardholderNumber",class:"form-label"},"信用卡號碼",-1),ye={class:"row g-0"},ge={class:"col d-flex flex-column"},ke=e("div",{class:"mb-0"},[e("label",{for:"expires-month",class:"form-label"},"有效期限")],-1),Ve={class:"mb-1 d-flex"},we={class:"col-4"},Ne=e("label",{for:"credit-card-security-code",class:"form-label"},"安全碼",-1),Ce={key:1,class:"bank_account"},qe=e("p",null,"繳費銀行代碼:005",-1),Te=e("p",null,"繳費虛擬帳號:5219 3025 4107 5893",-1),Be=[qe,Te],Le={class:"col-12 col-md-4"},Se=e("h4",{class:"text-center"},"訂單內容",-1),Ue={class:"row g-0"},je={class:"col-md-4"},Me=["src","alt"],De={class:"col-md-8"},Ie={class:"card-body"},Re={class:"card-title"},$e={class:"d-flex justify-content-end"},Fe={class:"card-text"},Oe={class:"text-decoration-line-through"},Ye={class:"card-text"},ze={class:"d-flex flex-column align-items-end"},Ae={class:"col-12 d-flex justify-content-center py-3"},Ee=e("button",{type:"submit",class:"btn btn-lg btn-outline-danger rounded mx-2"},"送出訂單",-1);function Pe(n,t,x,d,l,T){const B=u("Loading"),L=u("router-link"),c=u("v-field"),r=u("error-message"),S=u("v-form");return h(),m(C,null,[o(B,{active:n.isLoading},null,8,["active"]),e("div",O,[e("div",Y,[e("nav",z,[e("ol",A,[e("li",E,[o(L,{to:"/",class:"mx-2"},{default:N(()=>[v("首頁")]),_:1})]),P,G])])]),e("main",H,[J,e("section",K,[o(S,{class:"row",onSubmit:T.onSubmit},{default:N(({errors:i})=>[e("div",Q,[W,e("div",X,[Z,o(c,{type:"text",class:a(["form-control",{"is-invalid":i.name}]),id:"name",name:"name",rules:"mixed_name|required",placeholder:"請填寫姓名",modelValue:l.form.user.name,"onUpdate:modelValue":t[0]||(t[0]=s=>l.form.user.name=s)},null,8,["class","modelValue"]),o(r,{class:"invalid-feedback",name:"name"})]),e("div",ee,[se,o(c,{type:"email",class:a(["form-control",{"is-invalid":i.email}]),id:"email",name:"email",rules:"email|required",placeholder:"請填寫聯絡信箱",modelValue:l.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=s=>l.form.user.email=s)},null,8,["class","modelValue"]),o(r,{class:"invalid-feedback",name:"email"})]),e("div",te,[oe,o(c,{type:"tel",class:a(["form-control",{"is-invalid":i.phone}]),id:"phone",name:"phone",rules:"isPhone|required",placeholder:"請填寫手機號碼",modelValue:l.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=s=>l.form.user.tel=s)},null,8,["class","modelValue"]),o(r,{class:"invalid-feedback",name:"phone"})]),e("div",le,[ae,o(c,{type:"text",class:a(["form-control",{"is-invalid":i.contact}]),id:"contact",name:"contact",rules:"isContact|required",placeholder:"請填寫聯絡地址",modelValue:l.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=s=>l.form.user.address=s)},null,8,["class","modelValue"]),o(r,{class:"invalid-feedback",name:"contact"})]),e("div",ce,[ie,b(e("textarea",{class:"form-control",id:"comment",rows:"3","onUpdate:modelValue":t[4]||(t[4]=s=>l.form.message=s)},null,512),[[I,l.form.message]])])]),e("div",ne,[re,e("div",de,[e("div",me,[b(e("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"credit_card",value:"credit-card","onUpdate:modelValue":t[5]||(t[5]=s=>l.form.user.payment=s)},null,512),[[q,l.form.user.payment]]),ue]),e("div",he,[b(e("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"bank_account",value:"bank-account","onUpdate:modelValue":t[6]||(t[6]=s=>l.form.user.payment=s)},null,512),[[q,l.form.user.payment]]),_e])]),this.form.user.payment==="credit-card"?(h(),m("div",pe,[e("div",fe,[ve,o(c,{type:"text",class:a(["form-control",{"is-invalid":i.cardName}]),id:"cardName",name:"cardName",rules:"cardholderName|required",maxlength:"16",placeholder:"請輸入持卡人姓名"},null,8,["class"]),o(r,{class:"invalid-feedback",name:"cardName"})]),e("div",be,[xe,o(c,{type:"tel",class:a(["form-control",{"is-invalid":i.cardholderNumber}]),id:"cardholderNumber",name:"cardholderNumber",rules:"cardholderNumber|required",placeholder:"請填寫信用卡號碼"},null,8,["class"]),o(r,{class:"invalid-feedback",name:"cardholderNumber"})]),e("div",ye,[e("div",ge,[ke,e("div",Ve,[o(c,{type:"tel",class:a(["form-control me-1",{"is-invalid":i["expires-month"]}]),id:"expires-monthr",name:"expires-month",rules:"required|numeric|min:1|max:12",placeholder:"MM"},null,8,["class"]),o(c,{type:"tel",class:a(["form-control me-1",{"is-invalid":i["expires-year"]}]),id:"expires-year",name:"expires-year",rules:"required|numeric|min:1|max:99",placeholder:"YY"},null,8,["class"])])]),e("div",we,[Ne,o(c,{type:"tel",class:a(["form-control me-1",{"is-invalid":i["credit-card-security-code"]}]),id:"credit-card-security-code",maxlength:"3",name:"credit-card-security-code",rules:"required|numeric|min:1|max:99",placeholder:"CVV"},null,8,["class"])])])])):(h(),m("div",Ce,Be))]),e("div",Le,[Se,(h(!0),m(C,null,R(n.carts,s=>{var y,g,k,V,w;return h(),m("div",{class:"card mb-1",style:{"max-width":"540px"},key:s.id},[e("div",Ue,[e("div",je,[e("img",{src:(y=s==null?void 0:s.product)==null?void 0:y.imageUrl,class:"img-fluid rounded-start",alt:(g=s==null?void 0:s.product)==null?void 0:g.title},null,8,Me)]),e("div",De,[e("div",Ie,[e("h5",Re,_((k=s==null?void 0:s.product)==null?void 0:k.title),1),e("div",$e,[e("p",Fe,[e("small",Oe," $ "+_((V=s==null?void 0:s.product)==null?void 0:V.origin_price),1)]),e("p",Ye,"$"+_((w=s==null?void 0:s.product)==null?void 0:w.price),1)])])])])])}),128)),e("div",ze,[e("p",null,[v("商品合計: "),e("span",{class:a([n.total===n.final_total?"":"text-decoration-line-through"])}," NT$ "+_(n.total),3)]),e("p",null,[v("訂單總計: "),e("span",null,"NT$ "+_(n.final_total),1)])])]),e("div",Ae,[e("button",{type:"button",class:"btn btn-lg btn-secondary rounded mx-2",onClick:t[7]||(t[7]=$(s=>this.$router.push("/cart"),["prevent"]))},"回到上一頁"),Ee])]),_:1},8,["onSubmit"])])])])],64)}const Ke=U(F,[["render",Pe]]);export{Ke as default};
