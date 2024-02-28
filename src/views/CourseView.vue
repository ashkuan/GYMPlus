<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
 <div class="bg-light" style="min-height: 100vh">
    <main class="container-lg">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="mx-2">首頁</router-link>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <router-link to="/courses" class="mx-2">購買課程</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product?.title }}</li>
        </ol>
      </nav>
      <div class="d-flex align-items-center my-4">
        <h2 class="font-bold mb-0">
        {{ product?.title }}
        </h2>
        <span class="badge rounded-pill bg-primary h-25 mx-2 p-2">{{ product?.category }}</span>
        <span class="badge rounded-pill bg-primary h-25 mx-2 p-2">
          {{ product?.coach }} 教練</span>
      </div>
      <section class="card mb-3">
        <div class="row g-0">
    <div class="col-md-6">
      <img :src="product?.imageUrl" class="img-fluid rounded-start" alt="img">
    </div>
    <div class="col">
      <div class="card-body d-flex flex-column">
        <ul>
          <li><p class="card-text">開課時間：{{ product?.time }}</p></li>
          <li><p class="card-text">授課教練：{{ product?.coach }}</p></li>
          <li><p class="card-text">難易度：{{ product?.difficulty }}</p></li>
          <li><p class="card-text">適合對象：{{ joinedString }}</p></li>
        </ul>
        <p class="card-text px-5">
          {{ product?.description }}
        </p>
        <span class="align-self-end text-decoration-line-through opacity-50 fs-4">
          NT$ {{ product?.origin_price }}</span>
        <p class="card-text align-self-end mb-0 fs-3">NT$ {{ product?.price }}</p>
        <button type="button" class="btn btn-outline-danger
         rounded align-self-end w-50">購買課程</button>
      </div>
    </div>
  </div>
      </section>
      <section class="p-5">
        <h4>注意事項</h4>
        <ul class="row row-cols-1 row-cols-md-2">
          <li class="px-3">
            <p class="mb-0 font-bold">
              取消與轉讓政策：
              <span>
                我們提供靈活的取消與轉讓政策，請提前24小時告知。透明公平的處理流程，確保您的健身計畫不受影響。
              </span>
            </p>
          </li>
          <li class="px-3">
            <p class="mb-0 font-bold">
              適合族群與難度：
              <span>
                請了解您的身體狀況，選擇適合的課程難度。我們提供不同課程難度，滿足各種運動水平的學員。
              </span>
            </p>
          </li>
          <li class="px-3">
            <p class="mb-0 font-bold">
              個人裝備需求：
              <span>
                請攜帶運動鞋、毛巾和水壺。個人裝備能確保您在課程中舒適，發揮最佳表現。
              </span>
            </p>
          </li>
          <li class="px-3">
            <p class="mb-0 font-bold">
              提供課前諮詢：
              <span>
                如有任何疑問或特殊需求，歡迎聯絡客服。我們樂意提供課前諮詢，確保您的訓練體驗完美無憂。
              </span>
            </p>
          </li>
        </ul>
      </section>
      <section class="mb-5 pb-5 border-bottom border-2 ">
        <h5>學員回饋</h5>
        <div class="row row-cols-1 row-cols-md-3 gy-4 gy-md-0">
          <div class="col">
            <div class="border border-3 border-secondary p-4 h-100">
              <div class="d-flex justify-content-between">
                <h6>值得推薦</h6>
                <div class="d-flex">
                  <i>⭐</i>
                  <i>⭐</i>
                  <i>⭐</i>
                  <i>⭐</i>
                  <i>⭐</i>
                </div>
              </div>
              <p class="mb-0">輕鬆入門的瑜珈課程，教練非常親切，推薦給所有人。</p>
            </div>
          </div>
          <div class="col">
            <div class="border border-3 border-secondary p-4 h-100">
              <div class="d-flex justify-content-between">
                <h6>CP 值超高</h6>
                <div class="d-flex">
                  <i>⭐</i>
                  <i>⭐</i>
                  <i>⭐</i>
                  <i>⭐</i>
                  <i>⭐</i>
                </div>
              </div>
              <p class="mb-0">雖然是入門課程，但指導非常專業，收穫多多。</p>
            </div>
          </div>
          <div class="col">
            <div class="border border-3 border-secondary p-4 h-100">
              <div class="d-flex justify-content-between">
                <h6>教練，愛您</h6>
                <div class="d-flex">
                  <i>⭐</i>
                  <i>⭐</i>
                  <i>⭐</i>
                  <i>⭐</i>
                  <i>⭐</i>
                </div>
              </div>
              <p class="mb-0">在教練的帶領下，完成整到的瑜珈、冥想流程。身心靈完全放鬆。</p>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-5">
        <h5>你可能還喜歡</h5>
        <div class="row row-cols-1 row-cols-md-4 gy-4 gy-md-0 overflow-auto">
          <div class="col" v-for="item in filteredProducts" :key="item.id"
           @click.prevent="pushPage(item.id)">
            <a href="#" class="card text-white ground-floor">
              <img :src="item.imageUrl" class="card-img" alt="img">
  <div class="card-img-overlay d-flex flex-column justify-content-between">
    <button type="button" class="border-0 align-self-end bg-transparent high-floor" style="z-index: 1000;"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0
   .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18
    0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18
     0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0
      0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8
   13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5
    0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg></button>
    <h6 class="font-bold">{{ item.title }}</h6>
  </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>

</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      url: '',
      path: '',
      product: {},
      products: [],
      isLoading: true,
    };
  },
  methods: {
    getData() {
      let data = [];
      this.axios
        .get(`${this.url}/api/${this.path}/products/all`)
        .then((res) => {
          this.products = Object.values(res.data.products);
          data = this.products.filter((item) => item.id === this.id);
          const [firstElement] = data;
          this.product = firstElement;
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    },
    pushPage(id) {
      window.scrollTo(0, 0);
      this.$router.push(`/course/${id}`);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    },
  },
  computed: {
    joinedString() {
      return this.product?.target?.join(', '); // 使用逗号和空格作为分隔符
    },
    filteredProducts() {
      let filtered = this.products;
      filtered = filtered.filter((item) => item.coach === this.product.coach);
      return filtered;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    this.getData();
  },
};
</script>
