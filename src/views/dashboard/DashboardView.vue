<script>
import { mapActions, mapState } from 'pinia';
import AlertStore from '../../stores/AlertStore';

export default {
  data() {
    return {
      url: '',
      isColse: false,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(AlertStore, ['basicContent', 'closedAction']),
    checkIdentity() {
      // 全頁讀取
      const loader = this.$loading.show();
      this.axios
        .post(`${this.url}/api/user/check`)
        .then((res) => {
          loader.hide();
          const { success, message } = res.data;
          if (!success) {
            this.alertStyles.basic.fire({
              ...this.basicContent(message.replace(', ', '，'), 2),
              ...this.closedAction('replace', 'admin-login'),
            });
          }
        })
        .catch((err) => {
          loader.hide();
          this.alertStyles.basic.fire({
            ...this.basicContent(`錯誤${err.response.status}，請洽客服`, 2),
            ...this.closedAction('replace', 'admin-login'),
          });
        });
    },
    logout() {
      this.isLoading = !this.isLoading;
      this.axios
        .post(`${this.url}/logout`)
        .then((res) => {
          this.isLoading = !this.isLoading;
          this.alertStyles.basic.fire({
            ...this.basicContent(res.data.message, 1),
            ...this.closedAction('replace', 'admin-login'),
          });
        })
        .catch((err) => {
          this.isLoading = !this.isLoading;
          this.alertStyles.basic.fire(this.basicContent(`錯誤${err.response.status}，請洽客服`, 2));
        });
    },
  },
  computed: {
    ...mapState(AlertStore, ['alertStyles']),
    sidebarWidth() {
      return this.isColse ? 0 : 260;
    },
  },
  created() {
    this.url = import.meta.env.VITE_API_URL;
    // 權限驗證
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)adminToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.axios.defaults.headers.common.Authorization = token;
    this.checkIdentity();
  },
};
</script>

<template>
  <button
    type="button"
    class="admin-sidebar-btn btn btn-outline-light border-3 rounded-3 z-1"
    :style="`left: ${sidebarWidth - 4}px`"
    @click="isColse = !isColse"
  >
    <span class="icon-base icon-d-arrow" :class="{ hide: isColse }"></span>
  </button>
  <div class="admin-sidebar bg-light z-2" :class="{ hide: isColse }">
    <router-link to="/" class="mb-2">
      <h1 class="logo mb-0" style="width: 105px; height: 60px">GYMPlus</h1>
    </router-link>
    <ul class="nav nav-pills flex-column align-items-stretch w-100 mt-6">
      <li class="nav-item">
        <RouterLink to="/admin" class="nav-link">
          <span class="icon-base icon-lesson me-1"></span>
          課程列表
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/admin/orders" class="nav-link">
          <span class="icon-base icon-order me-1"></span>
          訂單列表
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/admin/coupons" class="nav-link">
          <span class="icon-base icon-coupon me-1"></span>
          優惠券
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/admin/articles" class="nav-link">
          <span class="icon-base icon-pen me-1"></span>
          文章列表
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/admin/customer-service" class="nav-link w-100">
          <span class="icon-base icon-customer-server me-1"></span>
          客服專區
        </RouterLink>
      </li>
    </ul>
  </div>
  <div class="sidebar-transition" :style="`margin-left: ${sidebarWidth}px`">
    <header class="mb-6 shadow-sm">
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid justify-content-end">
          <button
            class="menu-btn btn border-0 rounded-0 p-0 align-bottom d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#adminHeader"
            aria-controls="adminHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="menu-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="adminHeader"
            style="margin: 0 -12px"
          >
            <ul class="navbar-nav text-center fs-7 py-3 me-md-1">
              <li class="nav-item mb-2 mb-md-0 mx-md-3">
                <RouterLink to="/admin/customer-service" class="nav-link link-gray-1">
                  <span class="icon-base icon-bell me-1"></span>
                  <span>客服訊息</span>
                </RouterLink>
              </li>
              <li class="nav-item mb-2 mb-md-0 mx-md-3">
                <router-link to="/" class="nav-link link-gray-1">返回前台</router-link>
              </li>
              <li class="nav-item mx-md-3">
                <a class="nav-link link-gray-1" href="#" @click.prevent="logout">
                  <span v-show="isLoading" class="line-loading-loop bg-primary"></span>
                  管理者登出
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view class="container"></router-view>
  </div>
</template>

<style lang="scss">
.menu-btn {
  &.collapsed .menu-icon {
    background: url(icons/menu.svg);
  }
  .menu-icon {
    background: url(icons/close.svg);
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: bottom;
  }
}

.admin-sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding: 16px;
  transition: all 0.5s ease-out;
  width: 260px;
  height: 100vh;
  &.hide {
    transform: translate(-100%);
  }
  &-btn {
    transition: all 0.5s ease-out;
    position: absolute;
    top: 4px;
    padding: 8px 12px;
    @media (min-width: 375px) {
      top: 17.25px;
    }
    .icon-base {
      transform: rotate(180deg);
      transition: all 0.5s ease-out;
      &.hide {
        transform: rotate(0deg);
      }
    }
  }
  a {
    &.router-link-exact-active {
      color: #fff;
      background-color: #002ebc;
      .icon-base {
        background-color: #fff;
      }
    }
  }
}
.sidebar-transition {
  transition: all 0.5s ease-out;
}
</style>
