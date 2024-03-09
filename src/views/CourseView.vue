<template>
  <Loading :active="isLoading"></Loading>
 <div class="bg-white" style="min-height: 100vh">
    <main v-if="!isLoading" data-aos="fade-up">
      <div class="container">
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
      <div class="d-flex flex-column flex-md-row align-items-center my-4">
        <h2 class="font-bold mb-0">
        {{ product?.title }}
        </h2>
        <div class="d-flex py-3 py-md-0">
          <span class="badge rounded-pill bg-primary h-25 mx-2 p-2">{{ product?.category }}</span>
        <span class="badge rounded-pill bg-primary h-25 mx-2 p-2">
          {{ product?.coach }} 教練</span>
        </div>
      </div>
      <section class="card mb-3">
        <div class="row g-0">
    <div class="col-12 col-lg-6">
      <img :src="product?.imageUrl" class="img-fluid rounded-start" alt="img">
    </div>
    <div class="col-12 col-lg-6">
      <div class="card-body d-flex flex-column justify-content-between h-100">
        <ul>
          <li><p class="card-text">開課時間：{{ product?.time }}</p></li>
          <li><p class="card-text">授課教練：{{ product?.coach }}</p></li>
          <li><p class="card-text">難易度：{{ product?.difficulty }}</p></li>
          <li><p class="card-text">適合對象：{{ joinedString }}</p></li>
          <li style="list-style-type: none;">
            <p class="card-text py-3">{{ product?.description }}</p></li>
        </ul>
        <div class="d-flex flex-column">
        <span class="align-self-end text-decoration-line-through opacity-50 fs-6">
          NT$ {{ product?.origin_price }}</span>
        <p class="card-text align-self-end mb-0 fs-5">NT$ {{ product?.price }}</p>
        <button type="button" class="btn btn-outline-danger
         rounded align-self-end w-50"
         v-if="this.carts.some(id => id.product_id === this.id)" disabled>已加入購物車</button>
        <button type="button" class="btn btn-outline-danger
         rounded align-self-end w-50" v-else
          @click.prevent="addCart(this.product.id, this.product.title)"
         :disabled="this.product.id === status.loadingItem">
         <div class="spinner-border spinner-border-sm text-secondary" role="status"
         v-if="this.product.id === status.loadingItem">
                  <span class="visually-hidden">Loading...</span>
                </div>
         購買課程</button>
        </div>
      </div>
    </div>
  </div>
      </section>
      <section class="p-5">
        <h4>注意事項</h4>
        <ul class="row row-cols-1 row-cols-md-2" style="list-style-type: none;">
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
      <section class="mb-5 pb-5">
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
      </div>
      <section class="bg-dark block-space overflow-hidden">
        <div class="container  position-relative">
          <h5 class="text-secondary text-center py-3">你可能還喜歡</h5>
          <CoursesSwiper></CoursesSwiper>
        </div>
      </section>
    </main>
  </div>

</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';
import CoursesSwiper from '@/components/SwiperComponents.vue';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
        .get(`${this.url}api/${this.path}/products/all`)
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
    ...mapActions(cartStore, ['addCart']),
    ...mapActions(cartStore, ['getCarts']),
  },
  components: {
    Loading,
    CoursesSwiper,
  },
  computed: {
    joinedString() {
      return this.product?.target?.join(', '); // 使用逗号和空格作为分隔符
    },
    ...mapState(cartStore, ['status']),
    ...mapState(cartStore, ['carts']),
  },
  mounted() {
    window.scrollTo(0, 0);
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    Aos.init({ });
    this.getCarts();
    this.getData();
  },
};
</script>
