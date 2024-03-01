<template>
  <img src="/banner-home.png" alt="banner圖片" class="banner-img w-100 d-md-none mb-4" />
  <div class="banner-img">
    <div class="container mt-1 mt-0 mt-md-0">
      <div class="row h-100">
        <div class="slogan col-md-5 col-xxl-4 ms-auto d-flex flex-column justify-content-center">
          <h2 class="text-white fs-6 fs-lg-4 fs-xl-3 mb-xl-6">
            <span class="bg-gray-1 p-2 p-lg-3 d-inline-block mb-1">為您帶來</span>
            <br />
            <span class="bg-gray-1 p-2 p-lg-3 d-inline-block">
              <span class="text-linear me-1">獨樹一格</span>
              <span>的健身體驗</span>
            </span>
          </h2>
          <router-link
            to="/courses"
            class="fw-medium fw-md-bold align-self-md-end d-flex align-items-center"
          >
            <span class="small fs-lg-7 fs-xl-6 me-2 ls-2">立即體驗</span>
            <span class="icon-bg d-inline-block rounded-circle mt-1 mt-lg-0">
              <span class="icon-base icon-xs icon-left-arrow bg-white m-lg-3"></span>
            </span>
          </router-link>
          <div class="text-end"></div>
        </div>
      </div>
    </div>
  </div>
  <h2>服務特色</h2>
  <div class="bg-gray-1">
    <div class="home-last bg-white rounded-bottom">
      <h2 class="mb-0">認識身體數值</h2>
    </div>
  </div>
</template>

<script></script>

<style>
/* banner 客製化 */
.banner-img {
  height: 296px;
  .icon-base {
    margin: 10px;
  }

  @media (min-width: 768px) {
    background: url(/banner-home.png) center/cover;
    height: 432px;
    .container {
      height: 100%;
    }
    .slogan {
      margin-bottom: 83px;
      margin-right: 40px;
      h2 {
        margin-left: 58px;
      }
    }
  }
  @media (min-width: 992px) {
    height: 675px;
    .slogan {
      margin-bottom: 166px;
      h2 {
        margin-left: 73px;
      }
    }
  }
  @media (min-width: 1200px) {
    height: 787.5px;
    .slogan {
      margin-bottom: 166px;
      margin-right: 0px;
      h2 {
        margin-left: 76px;
      }
    }
    a {
      line-height: 1.2;
    }
    .icon-base {
      width: 24px;
      height: 24px;
    }
  }
  @media (min-width: 1400px) {
    height: 1080px;
    .slogan h2 {
      margin-left: 41px;
    }
  }
}
/* 最後一個區塊 */
.home-last {
  --bs-border-radius: 20px;
  @media (min-width: 768px) {
    --bs-border-radius: 40px;
  }
}

a {
  .icon-bg {
    background: #002ebc;
  }
  &:hover .icon-bg {
    background: linear-gradient(110.77deg, #655aea -6.41%, #95e2ff 107.79%);
  }
}
</style>
