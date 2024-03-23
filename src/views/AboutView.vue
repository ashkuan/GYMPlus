<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-white" style="min-height: 100vh">
    <div
      class="banner"
      style="
        background-image: url('https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
      "
    ></div>
    <main>
      <section class="container-lg">
        <nav aria-label="breadcrumb" class="mt-5">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="mx-2">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">關於我們</li>
          </ol>
        </nav>
      </section>
      <section data-aos="zoom-in">
        <h2 class="text-center">場地設施</h2>
        <Swiper
          navigation
          :modules="modules"
          :slides-per-view="1"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :loop="true"
          :space-between="50"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(item, index) in classRoom" :key="item.id">
            <img :src="item.imageUrl" :alt="index" />
          </swiper-slide>
        </Swiper>
      </section>
      <section class="my-3" data-aos="zoom-in">
        <h3>核心理念</h3>
        <div class="row g-0">
          <div class="col-12 col-lg-6 p-5">
            <h6>歡迎來到GYM+，您的身心避風港。</h6>
            <p class="mb-2">在GYM+，我們將健身視為生活的藝術，每一次鍛煉都是對自我承諾的體現。我們的空間融合了現代美學與實用性，旨在激發您的每一次運動潛力。</p>
            <p class="mb-2">這裡不只是健身器材的集合，更是一個為平衡與和諧而設計的環境。從冷色調裝飾到寧靜休息區，每個細節都旨在讓您全身心投入鍛煉。</p>
            <p class="mb-2">我們提供從瑜伽到高強度間歇訓練的多樣課程，由專業教練帶領。不論您是初學者還是資深愛好者，我們都致力於支持您的健身旅程，達成個人目標。</p>
            <p class="mb-2">在GYM+，我們重視個性化體驗，提供量身定制的健康計劃，適合每位會員的獨特需求。</p>
            <p class="mb-2">探索GYM+，在這裡，我們一起鍛煉身心，共創健康社區。</p>
          </div>
          <div class="col-12 col-lg-6">
            <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
            class="img-fluid">
          </div>
        </div>
      </section>
      <section class="container my-5" data-aos="zoom-in">
        <h3 class="text-center">門市地圖</h3>
        <div class="row g-0">
          <div class="col-12 col-lg-7">
            <iframe class="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.1852104581864!2d121.4433006695856!3d24.974930514317727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681d2b61bc0659%3A0x946b19a830605e09!2zMjM25paw5YyX5biC5Zyf5Z-O5Y2A5Lit5q2j6LevNTblt7cxMuiZnw!5e0!3m2!1szh-TW!2stw!4v1711167121286!5m2!1szh-TW!2stw" width="770" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="col-12 col-lg-5 d-flex flex-wrap justify-content-center align-content-center p-2 m-0" style="background: linear-gradient(110.77deg, #655aea -6.41%, #95e2ff 107.79%);">
            <div class="info">
              <h4 class="text-bold text-white"><img src="../assets/logo_white.svg" alt="logo">土城館</h4>
            <p class="fs-5 text-light"><img class="mx-2" src="../assets/icon/mapIcon.svg" alt="mapIcon"><span>地址:236新北市土城區中正路56巷12號</span></p>
            <p class="fs-5 text-light"><img class="mx-2" src="../assets/icon/phoneIcon.svg" alt="phoneIcon"><span>電話:02-1234567</span></p>
            <p class="fs-5 text-light"><img class="mx-2" src="../assets/icon/dateIcon.svg" alt="dateIcon"><span>營業時間:周一至周日0600-2200</span></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from "pinia";
import classroom from "@/stores/classRoomStore";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  data() {
    return {
      modules: [Navigation, Pagination, Autoplay],
      isLoading: true,
    };
  },
  computed: {
    ...mapState(classroom, ["classRoom"]),
  },
  components: {
    Swiper,
    SwiperSlide,
    Loading,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
    Aos.init({ });
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 400px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
