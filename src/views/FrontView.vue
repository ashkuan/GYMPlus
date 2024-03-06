<template>
  <header
    class="front-header"
    :class="[
      scrollPosition ? 'shadow-sm scrolled' : 'pt-lg-4',
      routeName === 'home' || scrollPosition ? 'fixed-top' : 'sticky-top',
      routeName === 'home' ? 'home-only' : 'other-route',
      isOpened ? 'bg-light' : 'bg-white',
    ]"
    style="transition: all 0.18s ease-in-out"
  >
    <nav class="navbar navbar-expand-lg py-1 position-relative">
      <div class="container justify-content-center justify-content-md-between">
        <router-link to="/" class="my-auto">
          <h1 class="logo mb-0" :style="[scrollPosition ? 'width: 105px; height: 60px' : '']">
            GYMPlus
          </h1>
        </router-link>
        <button
          class="menu-btn btn border-0 p-0 align-bottom d-lg-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref="collapseBtn"
        >
          <span class="icon-base menu-icon"></span>
        </button>
        <div class="collapse navbar-collapse pe-lg-0" id="navbarNavAltMarkup">
          <ul
            class="navbar-nav container-md align-items-lg-center justify-content-end py-3 p-lg-0"
            :class="{ 'my-3': isOpened }"
          >
            <li class="nav-item mb-2 mb-lg-0 d-lg-none">
              <a href="#" @click.prevent class="nav-link text-center link-gray-1 ls-2 me-lg-3">
                <span class="position-relative">
                  網站導覽
                  <span class="icon-base icon-arrow icon-xs bg-primary"></span>
                </span>
              </a>
            </li>
            <li class="nav-item mb-2 mb-lg-0 d-lg-none">
              <router-link to="/" class="nav-link text-center link-gray-1 ls-2 me-lg-3">
                <span class="position-relative">
                  首頁
                  <span class="icon-base icon-arrow icon-xs bg-primary"></span>
                </span>
              </router-link>
            </li>
            <li class="nav-item mb-2 mb-lg-0">
              <router-link to="/courses" class="nav-link text-center link-gray-1 ls-2 me-lg-3">
                <span class="position-relative">
                  購買課程
                  <span class="icon-base icon-arrow icon-xs bg-primary"></span>
                </span>
              </router-link>
            </li>
            <li class="nav-item mb-2 mb-lg-0">
              <router-link to="/coaches" class="nav-link text-center link-gray-1 ls-2 mx-lg-3">
                <span class="position-relative">
                  認識教練
                  <span class="icon-base icon-arrow icon-xs bg-primary"></span>
                </span>
              </router-link>
            </li>
            <li class="nav-item mb-2 mb-lg-0">
              <router-link to="/about" class="nav-link text-center link-gray-1 ls-2 mx-lg-3">
                <span class="position-relative">
                  關於我們
                  <span class="icon-base icon-arrow icon-xs bg-primary"></span>
                </span>
              </router-link>
            </li>
            <li class="nav-item mb-5 mb-lg-0">
              <router-link to="/articles" class="nav-link text-center link-gray-1 ls-2 mx-lg-3">
                <span class="position-relative">
                  健身文章
                  <span class="icon-base icon-arrow icon-xs bg-primary"></span>
                </span>
              </router-link>
            </li>
            <li class="nav-item mb-2 mb-lg-0">
              <router-link
                to="/favourite"
                class="btn btn-white ms-lg-1 me-lg-5"
                :class="{ 'border-secondary': !!scrollPosition || routeName !== 'home' }"
              >
                <span class="icon-base icon-bookmark bg-linear me-1"></span>
                <span>我的最愛</span>
              </router-link>
            </li>
            <li class="nav-item mb-2 mb-lg-0">
              <router-link to="/cart" class="btn btn-dark px-3 border-0 position-relative me-lg-1">
                <span class="icon-base icon-cart bg-white me-1 me-lg-0"></span>
                <span class="d-lg-none">購物車</span>
                <span
                  class="badge position-absolute top-0 bg-primary rounded-circle p-0 lh-base"
                  style="width: 18px; right: -4px"
                >
                  <small class="fs-8 fw-normal align-top d-none d-lg-block">0</small>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <router-view></router-view>

  <footer class="bg-gray-1">
    <div class="footer-top-rounded pt-8 pt-md-6 rounded-bottom bg-white"></div>
    <div class="container pt-1 pt-lg-4">
      <div class="border-bottom border-gray-2 fw-medium">
        <ul class="nav justify-content-center justify-content-lg-start pb-1 pb-lg-4">
          <li class="py-3">
            <a
              class="d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2"
              href="#"
              @click.prevent
            >
              網站導覽
            </a>
          </li>
          <li class="py-3">
            <router-link to="/" class="d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2">
              首頁
            </router-link>
          </li>
          <li class="py-3">
            <router-link
              to="/courses"
              class="d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2"
            >
              購買課程
            </router-link>
          </li>
          <li class="py-3">
            <router-link
              to="/coaches"
              class="d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2"
            >
              認識教練
            </router-link>
          </li>
          <li class="py-3">
            <router-link
              to="/about"
              class="d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2"
            >
              關於我們
            </router-link>
          </li>
          <li class="py-3">
            <router-link
              to="/articles"
              class="d-inline-block small fs-md-7 ls-2 p-1 p-md-3 mx-1 mx-md-2"
            >
              健身文章
            </router-link>
          </li>
        </ul>
      </div>
      <div class="d-flex flex-column flex-md-row align-items-center pt-4 pt-md-6 pb-1 pb-md-5">
        <ul class="fs-8 fs-lg-7 ls-md-2 text-gray-3 list-unstyled text-center text-md-start py-1">
          <li class="mb-2">
            <span class="me-2">地址</span>
            <span class="text-white">新北市某某區某某路一段233號</span>
          </li>
          <li>
            <span class="me-2">電話</span>
            <a href="tel:02-1234567" class="mb-0" title="立即撥打">02-1234567</a>
          </li>
        </ul>
        <ul class="list-unstyled d-flex ms-md-auto">
          <li class="mx-2">
            <a href="https://www.facebook.com/" class="d-inline-block rounded-circle bg-gray-2">
              <span class="icon-base icon-fb bg-white m-2"></span>
            </a>
          </li>
          <li class="mx-2">
            <a href="https://www.youtube.com/" class="d-inline-block rounded-circle bg-gray-2">
              <span class="icon-base icon-yt bg-white m-2"></span>
            </a>
          </li>
          <li class="mx-2">
            <a href="#" class="d-inline-block rounded-circle bg-gray-2">
              <span class="icon-base icon-ig bg-white m-2"></span>
            </a>
          </li>
          <li class="mx-2">
            <a href="#" class="d-inline-block rounded-circle bg-gray-2">
              <span class="icon-base icon-message bg-white m-2"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="py-3 py-md-4 bg-primary">
      <div class="container d-flex flex-column flex-md-row align-items-center">
        <router-link to="/" class="mb-2 order-md-2 ms-md-auto mb-md-0">
          <img src="/icons/logo-white.svg" alt="logo" class="footer-logo" />
        </router-link>
        <small class="fs-8 fs-lg-7 text-white text-center order-md-1">
          Copyright © 2024 Gym All Rights Reserved.｜僅個人學習，無任何商業用途
        </small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      routeName: '',
      isOpened: false,
    };
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  watch: {
    $route(to) {
      this.routeName = to.name;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.routeName = this.$route.name;
    const { collapseBtn } = this.$refs;
    this.$refs.collapseBtn.addEventListener('click', () => {
      if ([...collapseBtn.classList].find((ele) => ele === 'collapsed')) {
        this.isOpened = false;
      } else {
        this.isOpened = true;
      }
    });
  },
  created() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
// header 客製化
.front-header {
  .icon-arrow {
    visibility: hidden;
    position: absolute;
    transform: translate(-50%, 100%);
    bottom: -8px;
    left: 50%;
  }
  .nav-link {
    &:hover,
    &.router-link-exact-active {
      color: #002ebc !important;
      .icon-arrow {
        visibility: visible;
      }
    }
  }

  @media (max-width: 992px) {
    position: sticky;
    box-shadow: 0px 4px 10px 0px rgba(0, 46, 188, 0.1);
    .navbar-collapse {
      position: absolute;
      z-index: -1;
      transform: translate(-50%, 0%);
      background: #e8eeff;
      top: 100%;
      left: 50%;
      width: 100%;
    }
    h1.logo {
      width: 105px !important;
      height: 60px !important;
    }
    .navbar-nav .btn {
      width: 100%;
    }
    .icon-arrow {
      transform: rotate(-90deg) translate(-50%, -50%);
      bottom: 50%;
      left: -16px;
    }
  }
  @media (max-width: 768px) {
    h1.logo {
      width: 70px !important;
      height: 40px !important;
    }
    .menu-btn {
      position: absolute;
      right: 0;
      top: 4px;
    }
  }
  // 細部調整：指定視窗寬度 + 特殊路徑（壓過 collapse 設定）
  @media (min-width: 992px) {
    &.home-only {
      background: transparent !important;
      &.scrolled {
        background: #fff !important;
      }
    }
    &.other-route {
      background: #fff !important;
    }
  }
}
// footer 客製化
footer {
  a,
  a.nav-link {
    color: #fff;
    &:hover {
      color: rgba(224, 224, 224, 0.75);
    }
  }
  .icon-base:hover {
    background: rgba(224, 224, 224, 0.75) !important;
  }
  .footer-logo {
    width: 56px;
    height: 32px;
    @media (min-width: 992px) {
      width: 105px;
      height: 60px;
    }
  }
}
/* 上方圓弧 */
.footer-top-rounded {
  --bs-border-radius: 20px;
  @media (min-width: 768px) {
    --bs-border-radius: 40px;
  }
}
</style>
