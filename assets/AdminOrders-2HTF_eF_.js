import{a as y,m as w,M as T,_ as D,o as d,c as a,b as s,h as g,t as l,l as m,v as P,n as p,g as j,F as C,i as N,j as v,q as F,O,d as k,r as S,e as I}from"./index-JMiZhtTs.js";import{g as b}from"./GetDataStore-1lL8kNw0.js";import{A as M}from"./AlertStore-xYysMQKO.js";import{P as J}from"./PaginationComponent--wk0ROPf.js";import"./sweetalert2.all-K1diHBhV.js";const A={props:["singleOrder","needEnit","isOrderFinished"],data(){return{url:"",path:"",editModal:null,order:{remark:""},temporaryProducts:{},isDeledProduct:!1,isEnitModel:!1,isEniting:!1}},methods:{...y(b,["getRemoteData"]),...y(M,["basicContent"]),editOrder(t){this.isEniting=!this.isEniting,this.order.is_paid=this.order.is_paid==="true";const i={data:{...this.order}};this.axios.put(`${this.url}/api/${this.path}/admin/order/${t}`,i).then(n=>{this.alertStyles.basic.fire({...this.basicContent(n.data.message,1),didClose:()=>{this.editModal.hide(),this.isEniting=!this.isEniting,this.getRemoteData("orders",this.pagination.current_page,!1)}})}).catch(n=>{this.alertStyles.basic.fire(this.basicContent(n.response.data.message,2)),this.editModal.hide(),this.isEniting=!this.isEniting})},delCourse(t){this.courses.length===1?this.alertStyles.basic.fire(this.basicContent("最後一筆資料，請直接刪除訂單。",3)):(this.isDeledProduct=!0,delete this.order.products[t],this.order.total=this.courses.reduce((i,n)=>i+n.final_total,0))},rollbackCourse(){const t=Object.values(this.temporaryProducts);this.order.products=JSON.parse(JSON.stringify(this.temporaryProducts)),this.order.total=t.reduce((i,n)=>i+n.final_total,0),this.isDeledProduct=!1}},computed:{...w(b,["pagination"]),...w(M,["alertStyles"]),courses(){const{products:t}=this.order;return t?Object.values(t):[]},originTotal(){return this.courses.reduce((t,i)=>t+i.total,0)},couponTitle(){return this.courses.length&&this.courses[0].coupon?this.courses[0].coupon.title:""},userInfo(){const{user:t}=this.order;if(t)switch(t.payment){case"credit-card":t.payment="信用卡";break;case"bank-account":t.payment="銀行轉帳";break}return t||{}}},watch:{singleOrder(t){this.order=JSON.parse(JSON.stringify(t)),this.temporaryProducts=JSON.parse(JSON.stringify(this.order.products))},needEnit(t){this.isEnitModel=t}},mounted(){this.editModal=new T(this.$refs.orderEditModal),this.editModal["_element"].addEventListener("hidden.bs.modal",()=>{this.isEnitModel=!1,this.isDeledProduct=!1,this.rollbackCourse(),this.$emit("updateNeedEnit",this.isEnitModel)}),this.url="https://vue3-course-api.hexschool.io/v2/",this.path="gymplus"}},U={ref:"orderEditModal",class:"modal fade",id:"orderEditModal",tabindex:"-1","aria-labelledby":"orderEditModalLabel","aria-hidden":"true"},R={class:"modal-dialog modal-lg modal-dialog-scrollable"},V={class:"modal-content"},$={class:"modal-header bg-linear py-3"},L={class:"modal-title fs-6 fs-sm-5 fw-medium text-white",id:"productModal"},B={class:"ls-0 small fs-sm-6"},z={class:"modal-body p-5"},W={class:"container-fluid"},q=s("h4",{class:"fs-6 mb-0"},"訂單內容",-1),Y={class:"row admin-form"},G={class:"col-6 col-lg-4 ms-auto mb-3"},H={class:"row align-items-center text-end justify-content-end"},K=s("label",{for:"status",class:"form-label col-5"},"付款狀態",-1),Q=s("option",{value:"true"},"已付款",-1),X=s("option",{value:"false"},"未付款",-1),Z=[Q,X],ss={class:"table-responsive mb-3"},es={class:"table-light"},ts=s("th",{scope:"col",class:"d-none d-lg-table-cell"},"課程編號",-1),os=s("th",{scope:"col",class:"d-none d-lg-table-cell"},"縮圖",-1),is=s("th",{scope:"col"},"標題",-1),ls=s("th",{scope:"col"},"教練",-1),rs=s("th",{scope:"col"},"上課時間",-1),ns=s("th",{scope:"col"},"價格",-1),ds=["onClick"],as=s("span",{class:"icon-base icon-sm icon-trash"},null,-1),cs=[as],hs={class:"ls-0 d-none d-lg-table-cell"},_s={class:"d-none d-lg-table-cell"},gs=["src","alt"],ps={class:"small fw-normal mb-0"},us={class:"ls-0"},ms={class:"ls-0"},bs={class:"fw-semibold"},fs={key:0,class:"border-white"},ys={colspan:"7"},ws={class:"row"},xs={class:"col-lg-4 ms-auto order-lg-2"},Os={class:"list-unstyled text-end fs-8 small-lg"},vs={class:"mb-3"},Ms={class:"py-2 px-3 d-inline-block bg-light rounded-2"},Es={class:"row gx-2 py-1"},ks=s("span",{class:"col-9"},"優惠券折扣：",-1),Ss={class:"row gx-2 py-1"},Ds=s("span",{class:"col-9"},"課程總金額：",-1),Cs={class:"col fw-semibold"},Ns={class:"row gx-2 py-1"},Ts=s("span",{class:"col-9"},"訂單總計：",-1),Ps={class:"col fw-semibold"},js={class:"col-lg-7 order-lg-1"},Fs=s("hr",{class:"d-lg-none my-5"},null,-1),Is={class:"d-flex mb-2 small"},Js=s("span",{class:"d-inline-block",style:{"min-width":"75px"}},"客戶留言：",-1),As={for:"description",class:"form-label d-flex mb-1"},Us=s("span",{class:"d-inline-block",style:{"min-width":"75px"}},"備註事項：",-1),Rs=s("hr",{class:"my-5"},null,-1),Vs=s("h4",{class:"fs-6 mb-lg-0"},"客戶資訊",-1),$s={class:"row gx-2 justify-content-center justify-content-lg-end"},Ls={class:"col-9 col-lg-10 list-group list-group-flush row flex-row small"},Bs={class:"col-lg-6 list-group-item"},zs={class:"col-lg-6 list-group-item"},Ws=["href"],qs={class:"col-lg-6 list-group-item"},Ys={class:"col-lg-6 list-group-item"},Gs=["href"],Hs={class:"col list-group-item"},Ks={class:"modal-footer border-0 shadow shadow-top"},Qs=s("button",{type:"button",class:"btn btn-sm btn-outline-gray-3 flex-grow-1 flex-lg-grow-0 me-2","data-bs-dismiss":"modal"}," 關閉視窗 ",-1),Xs=["disabled"],Zs={class:"line-loading-loop bg-white"};function se(t,i,n,u,e,o){return d(),a("div",U,[s("div",R,[s("div",V,[s("div",$,[s("h3",L,[g(l(e.isEnitModel?"編輯訂單":"訂單詳細")+" ",1),s("span",B,"："+l(e.order.id),1)])]),s("div",z,[s("div",W,[q,s("form",Y,[s("div",G,[s("div",H,[K,e.isEnitModel?m((d(),a("select",{key:0,class:"form-select form-select-sm col",id:"status","onUpdate:modelValue":i[0]||(i[0]=r=>e.order.is_paid=r)},Z,512)),[[P,e.order.is_paid]]):(d(),a("span",{key:1,class:p(["badge col-4",[e.order.is_paid?"bg-success":"bg-danger"]])},l(e.order.is_paid?"已付款":"未付款"),3))])]),s("div",ss,[s("table",{class:"table text-center align-middle small",style:j([e.isEnitModel?"min-width: 500px":"min-width: 400px"])},[s("thead",null,[s("tr",es,[s("th",{scope:"col",width:"52px",class:p({"d-none":!e.isEnitModel})},null,2),ts,os,is,ls,rs,ns])]),s("tbody",null,[(d(!0),a(C,null,N(o.courses,r=>(d(),a("tr",{key:r.id},[s("td",{class:p({"d-none":!e.isEnitModel})},[s("button",{type:"button",class:"btn btn-sm btn-outline-danger border-0 p-1",onClick:h=>o.delCourse(r.id)},cs,8,ds)],2),s("td",hs,l(r.product_id),1),s("td",_s,[s("img",{src:r.product.imageUrl,alt:r.product.title,style:{width:"75px",height:"54px"}},null,8,gs)]),s("td",null,[s("h3",ps,l(r.product.title),1)]),s("td",us,l(r.product.coach),1),s("td",ms,l(r.product.time),1),s("td",bs,[s("span",{class:p({"text-danger ":r.price<r.final_total})},l(r.total),3)])]))),128)),e.isDeledProduct?(d(),a("tr",fs,[s("td",ys,[s("button",{type:"button",class:"btn btn-sm btn-light px-6",onClick:i[1]||(i[1]=(...r)=>o.rollbackCourse&&o.rollbackCourse(...r))}," 復原 ")])])):v("",!0)])],4)]),s("div",null,[s("div",ws,[s("div",xs,[s("ul",Os,[s("li",vs,[s("span",Ms," 套用優惠券："+l(o.couponTitle?o.couponTitle:"未使用"),1)]),s("li",Es,[ks,s("span",{class:p(["col fw-semibold",{"text-danger":e.order.total<o.originTotal}])},l(e.order.total-o.originTotal),3)]),s("li",Ss,[Ds,s("span",Cs,l(o.originTotal),1)]),s("li",Ns,[Ts,s("span",Ps,l(e.order.total),1)])])]),s("div",js,[Fs,s("p",Is,[Js,s("span",{class:p({"text-gray-4":!e.order.message})},l(e.order.message?e.order.message:"無"),3)]),s("label",As,[Us,s("span",{class:p({"text-gray-4":!e.order.remark})},l(e.isEnitModel?"":e.order.remark?e.order.remark:"無"),3)]),e.isEnitModel?m((d(),a("textarea",{key:0,id:"description",class:"form-control form-control-sm",placeholder:"記錄訂單備註",style:{height:"80px"},"onUpdate:modelValue":i[2]||(i[2]=r=>e.order.remark=r)},null,512)),[[F,e.order.remark]]):v("",!0)])])])]),Rs,Vs,s("div",$s,[s("ul",Ls,[s("li",Bs,"稱呼："+l(o.userInfo.name),1),s("li",zs,[g(" 電話： "),s("a",{href:`tel:${o.userInfo.tel}`},l(o.userInfo.tel),9,Ws)]),s("li",qs,"付款方式："+l(o.userInfo.payment),1),s("li",Ys,[g(" 信箱： "),s("a",{href:`mailto:${o.userInfo.email}`},l(o.userInfo.email),9,Gs)]),s("li",Hs,"聯絡地址："+l(o.userInfo.address),1)])])])]),s("div",Ks,[Qs,m(s("button",{type:"button",class:"btn btn-sm btn-gray-1 flex-grow-1 flex-lg-grow-0",onClick:i[3]||(i[3]=r=>o.editOrder(e.order.id)),disabled:e.isEniting},[m(s("span",Zs,null,512),[[O,e.isEniting]]),g(" 更新訂單 ")],8,Xs),[[O,e.isEnitModel]]),m(s("button",{type:"button",class:"btn btn-sm btn-gray-1 flex-grow-1 flex-lg-grow-0",onClick:i[4]||(i[4]=r=>e.isEnitModel=!e.isEnitModel)}," 前往編輯 ",512),[[O,!e.isEnitModel&&!n.isOrderFinished]])])])])],512)}const ee=D(A,[["render",se]]),te={props:["singleOrder"],data(){return{url:"",path:"",delModal:null,isDelingOrder:!1,order:{}}},methods:{...y(b,["getRemoteData"]),...y(M,["basicContent"]),delOerder(t){this.isDelingOrder=!this.isDelingOrder,this.axios.delete(`${this.url}/api/${this.path}/admin/order/${t}`).then(i=>{this.alertStyles.basic.fire({...this.basicContent(i.data.message,1),didClose:()=>{this.delModal.hide(),this.isDelingOrder=!this.isDelingOrder,this.getRemoteData("orders",this.pagination.current_page,!1)}})}).catch(i=>{this.alertStyles.basic.fire(this.basicContent(i.response.data.message,2)),this.delModal.hide(),this.isDelingOrder=!this.isDelingOrder})}},computed:{...w(b,["pagination"]),...w(M,["alertStyles"]),courses(){const{products:t}=this.order;return t?Object.values(t):[]}},watch:{singleOrder(t){this.order=JSON.parse(JSON.stringify(t))}},mounted(){this.delModal=new T(this.$refs.orderDelModal),this.url="https://vue3-course-api.hexschool.io/v2/",this.path="gymplus"}},oe={class:"modal fade",ref:"orderDelModal",id:"orderDelModal",tabindex:"-1"},ie={class:"modal-dialog"},le={class:"modal-content"},re=s("div",{class:"modal-header bg-linear-danger py-3"},[s("h3",{class:"modal-title fs-6 fs-sm-5 fw-medium text-white"},"刪除訂單")],-1),ne={class:"modal-body p-5"},de={class:"container-fluid"},ae={class:"row"},ce=s("h4",{class:"fs-6"},"確定要刪除訂單？",-1),he={class:"col-sm-7"},_e=s("h5",{class:"fs-7 fw-normal text-center bg-light mb-2 rounded-2 py-1"},"訂購資訊",-1),ge={class:"list-group list-group-flush small mb-0"},pe={class:"list-group-item ls-0 px-0"},ue={class:"list-group-item px-0"},me={class:"ls-0"},be={class:"list-group-item px-0"},fe={class:"ls-0"},ye={class:"list-group-item px-0"},we={class:"ls-0"},xe={class:"col-sm-5"},Oe=s("h5",{class:"fs-7 fw-normal text-center bg-light mb-2 rounded-2 py-1"},"訂單內容",-1),ve={class:"list-unstyled mb-0"},Me=s("span",{class:"bg-secondary d-inline-block rounded-circle me-1"},[s("span",{class:"icon-base icon-left-arrow m-1 bg-white",style:{width:"14px",height:"14px"}})],-1),Ee={class:"modal-footer border-0 shadow shadow-top"},ke=s("button",{type:"button",class:"btn btn-outline-gray-3 btn-sm flex-grow-1 flex-sm-grow-0 me-2","data-bs-dismiss":"modal"}," 關閉視窗 ",-1),Se=["disabled"],De={class:"line-loading-loop bg-white"};function Ce(t,i,n,u,e,o){var r,h,x,_,c,f;return d(),a("div",oe,[s("div",ie,[s("div",le,[re,s("div",ne,[s("div",de,[s("div",ae,[ce,s("div",he,[_e,s("ul",ge,[s("li",pe,"訂單編號："+l(e.order.id),1),s("li",ue,[g(" 訂購人： "),s("span",me,l((h=(r=e.order)==null?void 0:r.user)==null?void 0:h.name),1)]),s("li",be,[g(" 電話： "),s("span",fe,l((_=(x=e.order)==null?void 0:x.user)==null?void 0:_.tel),1)]),s("li",ye,[g(" 信箱： "),s("span",we,l((f=(c=e.order)==null?void 0:c.user)==null?void 0:f.email),1)])])]),s("div",xe,[Oe,s("ul",ve,[(d(!0),a(C,null,N(o.courses,E=>(d(),a("li",{key:E.product_id,class:"d-flex align-items-start small py-2"},[Me,g(" "+l(E.product.title),1)]))),128))])])])])]),s("div",Ee,[ke,s("button",{type:"button",class:"btn btn-danger btn-sm flex-grow-1 flex-sm-grow-0",onClick:i[0]||(i[0]=E=>o.delOerder(e.order.id)),disabled:e.isDelingOrder},[m(s("span",De,null,512),[[O,e.isDelingOrder]]),g(" 確認刪除 ")],8,Se)])])])],512)}const Ne=D(te,[["render",Ce]]),Te={components:{PaginationComponent:J,OrderEditModal:ee,OrderDelModal:Ne},data(){return{orders:[],singleOrder:{},needEnit:!1,isOrderFinished:!1}},methods:{...y(b,["getRemoteData","addSeparator"]),getOrder(t,i=!1){this.isOrderFinished=i,this.singleOrder=this.orders.find(n=>n.id===t)},updateNeedEnit(t){this.needEnit=t}},computed:{...w(b,["targetData"]),UnixtoText(){return this.targetData.map(t=>{let n=new Date(t.create_at*1e3).toLocaleDateString().split("/");return n=n.map(u=>u.length<4?u.padStart(2,"0"):u),n.join("-")})},perOrderCourses(){return this.targetData.map(t=>Object.values(t.products).map(n=>n.product))},perOrderStates(){return this.perOrderCourses.map(t=>{const i=t.map(h=>h["time-unix"]).sort(),{nowDate:n}=this,u=!(i[i.length-1]>n),e=!!i.find(h=>h>n&&h-n<86400),r=i.filter(h=>h-86400*7<n&&h>n).length!==0;return{isfinished:u,isTeaching:e,isComeingSoon:r}})},nowDate(){const t=new Date;return new Date(`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`).getTime()/1e3}},watch:{targetData(t){this.orders=t}},mounted(){this.getRemoteData("orders",1,!1)}},Pe={class:"container"},je=s("h2",{class:"fs-3 fw-normal mb-5 ls-0 text-center"},"訂單管理",-1),Fe={key:0,class:"table-responsive mb-5"},Ie={class:"table table-hover text-center align-middle ls-0",style:{"min-width":"760px"}},Je=s("thead",null,[s("tr",{class:"table-gray-4"},[s("th",{scope:"col",width:"52px"}),s("th",{scope:"col",width:"210px"},"訂單編號"),s("th",{scope:"col",class:"d-none d-xl-table-cell"},"成立日期"),s("th",{scope:"col"},"訂購人"),s("th",{scope:"col"},"訂單狀態"),s("th",{scope:"col"},"付款狀態"),s("th",{scope:"col",width:"90px"},"訂單總額"),s("th",{scope:"col",width:"75px"})])],-1),Ae=["onClick"],Ue=s("span",{class:"icon-base icon-sm icon-trash"},null,-1),Re=[Ue],Ve=["onClick"],$e={class:"small fs-lg-7 fw-normal text-start ls-0 mb-0"},Le={class:"fs-8 fs-lg-7 d-none d-xl-table-cell ls-0"},Be={class:"small fs-lg-7 ls-0"},ze={class:"fs-7 fs-lg-6"},We={key:0,class:"badge bg-success bg-opacity-75 mx-1"},qe={key:1,class:"badge bg-primary bg-opacity-50 mx-1"},Ye={key:2,class:"badge bg-transparent text-secondary border border-secondary mx-1"},Ge={class:"fs-7 fs-lg-6"},He={class:"text-end fw-semibold"},Ke=["onClick","disabled"],Qe={key:1},Xe=s("h2",{class:"fs-6 fw-light text-center"},[s("span",{class:"line-loading-loop bg-gray-3 align-top"}),g(" 資料讀取中請稍後 ")],-1),Ze=[Xe];function st(t,i,n,u,e,o){const r=S("PaginationComponent"),h=S("OrderEditModal"),x=S("OrderDelModal");return d(),a("div",Pe,[je,e.orders.length!==0?(d(),a("div",Fe,[s("table",Ie,[Je,s("tbody",null,[(d(!0),a(C,null,N(e.orders,(_,c)=>(d(),a("tr",{key:_.id},[s("td",null,[s("button",{type:"button",class:"btn btn-sm btn-outline-danger border-0 p-1","data-bs-toggle":"modal","data-bs-target":"#orderDelModal",onClick:f=>o.getOrder(_.id)},Re,8,Ae)]),s("td",null,[s("a",{href:"#",onClick:I(f=>o.getOrder(_.id,o.perOrderStates[c].isfinished),["prevent"]),"data-bs-toggle":"modal","data-bs-target":"#orderEditModal"},[s("h3",$e,l(_.id),1)],8,Ve)]),s("td",Le,l(o.UnixtoText[c]),1),s("td",Be,l(_.user.name),1),s("td",null,[s("p",ze,[s("span",{class:p(["badge mx-1",{"bg-warning":!o.perOrderStates[c].isfinished,"bg-gray-3 bg-opacity-75":o.perOrderStates[c].isfinished}])},l(o.perOrderStates[c].isfinished?"結案":"未結案"),3),o.perOrderStates[c].isTeaching?(d(),a("span",We," 授課中 ")):v("",!0),!o.perOrderStates[c].isTeaching&&o.perOrderStates[c].isComeingSoon?(d(),a("span",qe," 即將開課 ")):!o.perOrderStates[c].isComeingSoon&&!o.perOrderStates[c].isfinished?(d(),a("span",Ye," 等待開課 ")):v("",!0)])]),s("td",null,[s("p",Ge,[s("span",{class:p(["badge",{"bg-danger":!_.is_paid,"bg-success":_.is_paid}])},l(_.is_paid?"完成付款":"未付款"),3)])]),s("td",He,l(t.addSeparator(_.total)),1),s("td",null,[s("button",{type:"button",class:"btn btn-sm py-1 btn-outline-dark fw-normal","data-bs-toggle":"modal","data-bs-target":"#orderEditModal",onClick:f=>(o.getOrder(_.id),e.needEnit=!0),disabled:o.perOrderStates[c].isfinished}," 編輯 ",8,Ke)])]))),128))])])])):(d(),a("div",Qe,Ze)),k(r,{"now-target":"orders","is-user":!1}),k(h,{"single-order":e.singleOrder,"need-enit":e.needEnit,"is-order-finished":e.isOrderFinished,onUpdateNeedEnit:o.updateNeedEnit},null,8,["single-order","need-enit","is-order-finished","onUpdateNeedEnit"]),k(x,{"single-order":e.singleOrder},null,8,["single-order"])])}const rt=D(Te,[["render",st]]);export{rt as default};
