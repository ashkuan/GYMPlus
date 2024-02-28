<template>
  <header class="bg-transparent" :class="[this.scrollPosition > 0 ? 'fixed-top' : '']">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/">
          <h1 class="logo mb-0" style="width: 105px; height: 60px">GYMPlus</h1>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <router-link to="/courses" class="mx-2">購買課程</router-link>
            <router-link to="/coaches" class="mx-2">認識教練</router-link>
            <router-link to="/about" class="mx-2">關於我們</router-link>
            <router-link to="/articles" class="mx-2">健身文章</router-link>
            <router-link to="/favourite" class="mx-2">我的最愛</router-link>
            <router-link to="/cart" class="mx-2">購物車</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <router-view></router-view>
  <footer class="bg-gray-1">
      <div class="container">
        <div class="d-flex py-5 border-bottom border-gray-3">
          <p class="mb-0 mx-3 text-white">網站導覽</p>
          <router-link to="/" class="mx-5 text-white">首頁</router-link>
          <router-link to="/courses" class="mx-5 text-white"
            >購買課程</router-link
          >
          <router-link to="/coaches" class="mx-5 text-white"
            >認識教練</router-link
          >
          <router-link to="/about" class="mx-5 text-white"
            >關於我們</router-link
          >
          <router-link to="/articles" class="mx-5 text-white"
            >健身文章</router-link
          >
        </div>
        <div class="d-flex justify-content-between py-5">
          <div class="d-flex flex-column">
            <p class="mb-0 text-gray-3">
              地址:<span class="text-white">新北市某某區某某路一段233號</span>
            </p>
            <a href="tel:02-1234567" class="mb-0 text-gray-3">
              電話:<span class="text-white">02-1234567</span></a
            >
          </div>
          <ul class="mb-0 d-flex justify-content-between">
            <li class="mx-2">
              <a href="#" class="text-white fs-4 d-block transition text-center
              rounded-circle bg-gray-2"
              style="width: 40px; height: 40px;">
                f
              </a>
            </li>
            <li class="mx-2">
              <a href="#" class="fs-4 d-block position-relative transition text-center
              rounded-circle bg-gray-2"
              style="width: 40px; height: 40px;">
                <img src="../assets/icon/youtube.svg" alt="youtube" class="position-absolute
                 top-50 start-50 translate-middle">
              </a>
            </li>
            <li class="mx-2">
              <a href="#" class="fs-4 d-block position-relative transition text-center
              rounded-circle bg-gray-2"
              style="width: 40px; height: 40px;">
                <img src="../assets/icon/instagram.svg" alt="youtube" class="position-absolute
                 top-50 start-50 translate-middle">
              </a>
            </li>
            <li class="mx-2">
              <a href="#" class="fs-4 d-block position-relative transition text-center
              rounded-circle bg-gray-2"
              style="width: 40px; height: 40px;">
                <img src="../assets/icon/messenger.svg" alt="youtube" class="position-absolute
                 top-50 start-50 translate-middle">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <div class="information">
        <p class="mb-0 text-white">Copyright © 2024 Gym All Rights Reserved.｜僅個人學習，無任何商業用途</p>
        <router-link to="/">
          <h2 class="logo mb-0" style="width: 105px; height: 60px">GYMPlus</h2>
        </router-link>
      </div>
      </div>
    </footer>
</template>

<script>

export default {
  data() {
    return {
      scrollPosition: 0,
    };
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  created() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
