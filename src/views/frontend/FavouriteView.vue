<template>
  <!-- <h1>我的最愛</h1> -->
  <img src="" alt="我的最愛banner" style="height: 220px" class="bg-primary d-block" />
  <main class="container">
    <nav aria-label="breadcrumb" class="mt-5">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" class="mx-2">首頁</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">我的最愛</li>
      </ol>
    </nav>
    <section class="overflow-hidden">
      <div class="alert alert-primary" role="alert">
        <p class="alert-heading">還沒有收藏最愛喔！</p>
        <p>
          立即逛逛有哪些
          <router-link to="/courses" class="alert-link">健身課程</router-link>
          或是參考下方熱門精選課程。
        </p>
      </div>
      <div class="position-relative">
        <h2 class="text-center">推薦課程</h2>
        <CoursesSwiper />
      </div>
    </section>
  </main>
</template>

<script>
import CoursesSwiper from '@/components/frontend/CoursesSwiper.vue';

export default {
  components: { CoursesSwiper },
};
</script>
