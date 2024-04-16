<template>
  <section class="favourite-banner"></section>
  <main class="overflow-hidden">
    <div class="container">
      <nav aria-label="breadcrumb" class="mt-5 mt-lg-6">
        <ol class="breadcrumb">
          <li class="breadcrumb-item small fs-lg-7">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item small fs-lg-7 active" aria-current="page">我的最愛</li>
        </ol>
      </nav>
      <section class="empty-favourite">
        <div class="alert alert-primary text-center pb-6 mb-6 mb-lg-7 shadow-sm" role="alert">
          <span class="test"></span>
          <p class="alert-heading fs-6 fs-lg-5 fw-bold mb-3">還沒有收藏最愛喔！</p>
          <p class="small fs-lg-7">
            立即逛逛有哪些
            <router-link to="/courses" class="alert-link">
              <span class="text-decoration-underline fw-medium">健身課程</span>
            </router-link>
            <br class="d-md-none" />
            ，或是參考下方推薦課程。
          </p>
        </div>
      </section>
      <section class="position-relative pt-6 pb-8 mb-3">
        <h2 class="text-center fs-4 fs-md-3 mb-8">推薦課程</h2>
        <CoursesSwiper :theme-name="'swiper-lignt'" />
      </section>
    </div>
  </main>
</template>

<script>
import CoursesSwiper from '@/components/frontend/CoursesSwiper.vue';

export default {
  components: { CoursesSwiper },
};
</script>

<style lang="scss">
.favourite-banner {
  --img-url: url('/banners/banner-favourite.png');
  background: var(--img-url) center/cover no-repeat;
  height: 180px;
  @media (min-width: 768px) {
    --img-url: url('/banners/banner-favourite-md.png');
    height: 240px;
  }
  @media (min-width: 992px) {
    --img-url: url('/banners/banner-favourite-xl.png');
    height: 360px;
  }
}
.empty-favourite .alert {
  &::before {
    content: '\F198';
    font-family: bootstrap-icons;
    display: block;
    color: #fff;
    font-size: 48px;
  }
}
</style>
