import{_ as y,L as k,c as e,d as f,b as t,w,F as d,i as h,f as D,r as b,o as a,h as j,n as C,e as p,t as i}from"./index-d6ePCIf6.js";const A={data(){return{url:"",path:"",article:"全部",articlesType:["全部","健身好處","健身知識","營養素","開課訊息"],articles:[],isLoading:!0}},methods:{checkArticle(c){this.article=c},getData(){this.axios.get(`${this.url}api/${this.path}/articles`).then(c=>{this.articles=c.data.articles,setTimeout(()=>{this.isLoading=!1},500)})},formatUnixTimestamp(c){const o=new Date(c*1e3),m=o.getFullYear(),g=String(o.getMonth()+1).padStart(2,"0"),r=String(o.getDate()).padStart(2,"0");return`${m}-${g}-${r}`}},computed:{filteredArticles(){let c=this.articles;return this.article!=="全部"&&(c=c.filter(o=>o.tag.includes(this.article))),c}},components:{Loading:k},mounted(){this.url="https://vue3-course-api.hexschool.io/v2/",this.path="gymplus",this.getData()}},L={class:"bg-white",style:{"min-height":"100vh"}},$=t("div",{class:"banner",style:{"background-image":"url('https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}},null,-1),T={class:"container"},S={"aria-label":"breadcrumb",class:"mt-5"},V={class:"breadcrumb"},B={class:"breadcrumb-item"},M=t("li",{class:"breadcrumb-item active","aria-current":"page"},"健身文章",-1),N={class:"row justify-content-center"},F={class:"btn-group mb-4 mx-auth col-12 col-lg-6"},H=["onClick"],U={key:0,class:"row row-cols-1 justify-content-start justify-content-md-center"},G={key:0,class:"card border shadow-sm mb-3"},P={class:"row g-0"},Y={class:"col-12 col-md-4"},q=["src","alt"],z={class:"col-12 col-md-8"},E={class:"card-body"},W={class:"card-title"},I={class:"card-text"},J={class:"card-text"},K={class:"d-flex justify-content-end"},O=["onClick"],Q={key:1,class:"card border shadow-sm mb-3"},R={class:"row g-0"},X={class:"col-12 col-md-8"},Z={class:"card-body"},tt={class:"card-title"},st={class:"card-text"},et={class:"card-text"},at={class:"d-flex justify-content-end"},ct=["onClick"],it={class:"col-12 col-md-4"},ot=["src","alt"],nt={key:1},lt=t("h5",{class:"text-center"},"未查詢到此篩選結果",-1),rt=[lt],dt=D('<section class="d-flex justify-content-center mt-5"><nav aria-label="Page navigation example"><ul class="pagination"><li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li><li class="page-item active"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li></ul></nav></section>',1);function ht(c,o,m,g,r,n){const v=b("Loading"),x=b("router-link");return a(),e(d,null,[f(v,{active:r.isLoading},null,8,["active"]),t("div",L,[$,t("main",T,[t("nav",S,[t("ol",V,[t("li",B,[f(x,{to:"/",class:"mx-2"},{default:w(()=>[j("首頁")]),_:1})]),M])]),t("div",N,[t("div",F,[(a(!0),e(d,null,h(r.articlesType,(s,_)=>(a(),e("button",{type:"button",class:C(["btn btn-primary",{active:s===r.article}]),key:_,role:"button",onClick:p(l=>n.checkArticle(s),["prevent"])},i(s),11,H))),128))])]),n.filteredArticles.length!==0?(a(),e("section",U,[(a(!0),e(d,null,h(n.filteredArticles,(s,_)=>(a(),e("div",{class:"col-12 col-md-8 d-flex justify-content-start justify-content-md-center",key:s.id},[_%2===0?(a(),e("div",G,[t("div",P,[t("div",Y,[t("img",{src:s.image,class:"img-fluid rounded-start h-100",alt:s.title},null,8,q)]),t("div",z,[t("div",E,[t("h5",W,i(s.title),1),t("p",I,i(n.formatUnixTimestamp(s.create_at)),1),t("p",J,i(s.description),1),(a(!0),e(d,null,h(s.tag,(l,u)=>(a(),e("p",{class:"card-text",key:u}," # "+i(l),1))),128)),t("div",K,[t("button",{type:"button",class:"btn btn-outline-danger stretched-link",onClick:p(l=>this.$router.push(`article/${s.id}`),["prevent"])}," 閱讀全文 ",8,O)])])])])])):(a(),e("div",Q,[t("div",R,[t("div",X,[t("div",Z,[t("h5",tt,i(s.title),1),t("p",st,i(n.formatUnixTimestamp(s.create_at)),1),t("p",et,i(s.description),1),(a(!0),e(d,null,h(s.tag,(l,u)=>(a(),e("p",{class:"card-text",key:u}," # "+i(l),1))),128)),t("div",at,[t("button",{type:"button",class:"btn btn-outline-danger stretched-link",onClick:p(l=>this.$router.push(`article/${s.id}`),["prevent"])}," 閱讀全文 ",8,ct)])])]),t("div",it,[t("img",{src:s.image,class:"img-fluid rounded-end h-100",alt:s.title},null,8,ot)])])]))]))),128))])):(a(),e("section",nt,rt)),dt])])],64)}const ut=y(A,[["render",ht]]);export{ut as default};