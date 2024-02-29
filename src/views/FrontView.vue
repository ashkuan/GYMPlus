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
            class="navbar-nav container-md align-items-lg-center justify-content-end py-3 py-lg-0"
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
    <div class="container">
      <div class="d-flex py-5 border-bottom border-gray-3">
        <p class="mb-0 mx-3 text-white">網站導覽</p>
        <router-link to="/" class="mx-5 text-white">首頁</router-link>
        <router-link to="/courses" class="mx-5 text-white">購買課程</router-link>
        <router-link to="/coaches" class="mx-5 text-white">認識教練</router-link>
        <router-link to="/about" class="mx-5 text-white">關於我們</router-link>
        <router-link to="/articles" class="mx-5 text-white">健身文章</router-link>
      </div>
      <div class="d-flex justify-content-between py-5">
        <div class="d-flex flex-column">
          <p class="mb-0 text-gray-3">
            地址:
            <span class="text-white">新北市某某區某某路一段233號</span>
          </p>
          <a href="tel:02-1234567" class="mb-0 text-gray-3">
            電話:
            <span class="text-white">02-1234567</span>
          </a>
        </div>
        <ul class="mb-0 d-flex justify-content-between">
          <li class="mx-2">
            <a
              href="#"
              class="text-white fs-4 d-block transition text-center rounded-circle bg-gray-2"
              style="width: 40px; height: 40px"
            >
              f
            </a>
          </li>
          <li class="mx-2">
            <a
              href="#"
              class="fs-4 d-block position-relative transition text-center rounded-circle bg-gray-2"
              style="width: 40px; height: 40px"
            >
              <img
                src="../assets/icon/youtube.svg"
                alt="youtube"
                class="position-absolute top-50 start-50 translate-middle"
              />
            </a>
          </li>
          <li class="mx-2">
            <a
              href="#"
              class="fs-4 d-block position-relative transition text-center rounded-circle bg-gray-2"
              style="width: 40px; height: 40px"
            >
              <img
                src="../assets/icon/instagram.svg"
                alt="youtube"
                class="position-absolute top-50 start-50 translate-middle"
              />
            </a>
          </li>
          <li class="mx-2">
            <a
              href="#"
              class="fs-4 d-block position-relative transition text-center rounded-circle bg-gray-2"
              style="width: 40px; height: 40px"
            >
              <img
                src="../assets/icon/messenger.svg"
                alt="youtube"
                class="position-absolute top-50 start-50 translate-middle"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <div class="information">
        <p class="mb-0 text-white">
          Copyright © 2024 Gym All Rights Reserved.｜僅個人學習，無任何商業用途
        </p>
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
      console.dir(collapseBtn.classList);
      console.log([...collapseBtn.classList].find((ele) => ele === 'collapsed'));
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
.icon-arrow {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 17'%3E%3Cpath fill='%23000' d='M7.96209 14.5L16 2.5L8.11374 7.64998L0 2.5L7.96209 14.5Z'/%3E%3C/svg%3E");
}
.icon-xs {
  width: 16px;
  height: 16px;
}

.btn.btn-dark {
  &:hover {
    background: linear-gradient(110.77deg, #655aea -6.41%, #95e2ff 107.79%);
  }
}
.btn.disabled {
  background: #e0e0e0;
  color: #707070;
  opacity: 1;
  &.btn-white {
    border-color: #e0e0e0 !important;
    .icon-base {
      background: #707070;
    }
  }
  &.btn-dark {
    .badge {
      color: #fff;
      background: #707070 !important;
    }
  }
}

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
}

.menu-btn {
  span {
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: bottom;
    transition: all 0.5s ease-out;
    &.menu-icon {
      --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z'/%3E%3C/svg%3E");
    }
  }
  &.collapsed {
    .menu-icon {
      --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath fill='%23000' d='M6.6665 28.7833V27.1167H33.3332V28.7833H6.6665ZM6.6665 20.8333V19.1667H33.3332V20.8333H6.6665ZM6.6665 12.8833V11.2167H33.3332V12.8833H6.6665Z'/%3E%3C/svg%3E");
    }
  }
}

@media (max-width: 992px) {
  .front-header {
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
}
@media (max-width: 768px) {
  .front-header {
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
}
// 細部調整：指定視窗寬度 + 特殊路徑（壓過 collapse 設定）
@media (min-width: 992px) {
  .front-header {
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
</style>
