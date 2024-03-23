import{_ as v,a as y,m as k,c as x,b as s,d as e,w as o,r,o as S,h,n as _,t as d,l as C,N as L}from"./index-p6O227c0.js";import{A as g}from"./AlertStore-dF7BXcaC.js";import"./sweetalert2.all-DAg9cmO9.js";const V={data(){return{url:"",path:"",isLoading:!1}},methods:{...y(g,["basicContent","closedAction"]),login(p){const{username:u,password:b}=p,f={username:u,password:b};this.isLoading=!0,this.axios.post(`${this.url}/admin/signin`,f).then(t=>{const a=t.data;if(a.error)switch(a.error.code){case"auth/user-not-found":this.alertStyles.basic.fire(this.basicContent("查無此帳號",2));break;case"auth/wrong-password":this.alertStyles.basic.fire(this.basicContent("密碼輸入錯誤",2));break;default:this.alertStyles.basic.fire(this.basicContent("登入失敗，請洽客服",2));break}else{const{token:c,expired:i}=a;document.cookie=`adminToken=${c}; expires=${new Date(i)};`,this.alertStyles.basic.fire({...this.basicContent(a.message,1),...this.closedAction("replace","admin")})}this.isLoading=!1}).catch(t=>{this.alertStyles.basic.fire(this.basicContent(`錯誤${t.response.status}，請洽客服`,2)),this.isLoading=!1})}},mounted(){this.url="https://vue3-course-api.hexschool.io/v2/",this.path="gymplus"},computed:{...k(g,["alertStyles"])}},A={class:"bg-light",style:{"min-height":"100vh"}},P={class:"navbar navbar-light bg-white"},$={class:"container"},F=s("h1",{class:"logo mb-0",style:{width:"105px",height:"60px"}},"GYMPlus",-1),N={class:"container pb-6"},q=s("h2",{class:"text-center my-7"},[s("span",{class:"text-primary"},"管理者"),s("span",null,"登入")],-1),B={class:"row justify-content-center"},D={class:"row align-items-center mb-4 gx-3"},E=s("label",{class:"col-2 form-label",for:"email"},"帳號",-1),M={class:"col-10"},T={class:"col-10 ms-auto mt-1 text-danger"},j={class:"row align-items-center mb-4 gx-3"},z=s("label",{class:"col-2 form-label",for:"password"},"密碼",-1),G={class:"col-10"},Y={class:"col-10 ms-auto mt-1 text-danger"},H={class:"row align-items-center mb-6 gx-3"},I=s("label",{class:"col-2 form-label",for:"passwordCheck"},"確認密碼",-1),J={class:"col-10"},K={class:"col-10 ms-auto mt-1 text-danger"},O=["disabled"],Q={class:"line-loading-loop bg-gray-3"};function R(p,u,b,f,t,a){const c=r("router-link"),i=r("VField"),m=r("ErrorMessage"),w=r("VForm");return S(),x("div",A,[s("nav",P,[s("div",$,[e(c,{to:"/"},{default:o(()=>[F]),_:1}),e(c,{to:"/",class:"fw-medium py-3"},{default:o(()=>[h("返回前台")]),_:1})])]),s("div",N,[q,s("div",B,[e(w,{class:"col-11 col-md-9 col-lg-6",onSubmit:a.login},{default:o(({errors:n})=>[s("div",D,[E,s("div",M,[e(i,{name:"username",rules:"email|required",type:"email",class:_(["form-control border-0",{"is-invalid":n.username}]),placeholder:"請輸入管理員信箱",id:"email"},null,8,["class"])]),e(m,{name:"username",class:"invalid-feedback"},{default:o(({message:l})=>[s("small",T,d(l.replace("username","帳號")),1)]),_:1})]),s("div",j,[z,s("div",G,[e(i,{name:"password",rules:"required",type:"password",class:_(["form-control border-0",{"is-invalid":n.password}]),placeholder:"請輸入密碼",id:"password"},null,8,["class"])]),e(m,{name:"password",class:"invalid-feedback"},{default:o(({message:l})=>[s("small",Y,d(l.replace("password","密碼")),1)]),_:1})]),s("div",H,[I,h(" "+d(n.valus)+" ",1),s("div",J,[e(i,{name:"checkPassword",rules:"required|confirmed:@password",type:"password",class:_(["form-control border-0",{"is-invalid":n.checkPassword}]),placeholder:"請再次輸入密碼",id:"passwordCheck"},null,8,["class"])]),e(m,{name:"checkPassword",class:"invalid-feedback"},{default:o(({message:l})=>[s("small",K,d(l.replace("checkPassword","密碼")),1)]),_:1})]),s("button",{type:"submit",class:"btn btn-primary w-100 mb-6",disabled:t.isLoading},[C(s("span",Q,null,512),[[L,t.isLoading]]),h(" 登入 ")],8,O)]),_:1},8,["onSubmit"])])])])}const Z=v(V,[["render",R]]);export{Z as default};
