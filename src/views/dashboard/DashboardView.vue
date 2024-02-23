<script>
import { mapActions, mapState } from 'pinia';
import AlertStore from '../../stores/AlertStore';

export default {
  data() {
    return {
      url: '',
      isColse: false,
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
      console.log('登出');
      this.axios
        .post(`${this.url}/logout`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
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
                <a class="nav-link link-gray-1" href="#" @click.prevent="logout">管理者登出</a>
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
// icon svg
.icon {
  &-bell {
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23000' d='M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29c0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29c-6 6.45-8.66 14.16-8.61 21.71c.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32c.05-7.55-2.61-15.27-8.61-21.71M67.53 368c21.22-27.97 44.42-74.33 44.53-159.42c0-.2-.06-.38-.06-.58c0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58c.11 85.1 23.31 131.46 44.53 159.42zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64'/%3E%3C/svg%3E");
  }
  &-lesson {
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cpath fill='%23000' d='M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h13.39a8 8 0 0 0 7.23-4.57a48 48 0 0 1 86.76 0a8 8 0 0 0 7.23 4.57H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M104 168a32 32 0 1 1 32-32a32 32 0 0 1-32 32m112 32h-56.57a63.93 63.93 0 0 0-13.16-16H192a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v96a8 8 0 0 0 6 7.75A63.72 63.72 0 0 0 48.57 200H40V56h176Z'/%3E%3C/svg%3E");
  }
  &-order {
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11 15h6v2h-6zM9 7H7v2h2zm2 6h6v-2h-6zm0-4h6V7h-6zm-2 2H7v2h2zm12-6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-2 0H5v14h14zM9 15H7v2h2z'/%3E%3C/svg%3E");
  }
  &-coupon {
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M21 5H3a1 1 0 0 0-1 1v4h.893c.996 0 1.92.681 2.08 1.664A2.001 2.001 0 0 1 3 14H2v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4h-1a2.001 2.001 0 0 1-1.973-2.336c.16-.983 1.084-1.664 2.08-1.664H22V6a1 1 0 0 0-1-1M11 17H9v-2h2zm0-4H9v-2h2zm0-4H9V7h2z'/%3E%3C/svg%3E");
  }
  &-pen {
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cpath fill='%23000' d='m235.31 89.36l-68.68-68.68a16 16 0 0 0-22.63 0l-28.44 28.44l-58 21.76a16 16 0 0 0-10.2 12.35l-20.77 124.6a4 4 0 0 0 6.77 3.49l57-57a23.85 23.85 0 0 1-2.29-12.08a24 24 0 1 1 13.6 23.4l-57 57a4 4 0 0 0 3.49 6.77l124.61-20.77a16 16 0 0 0 12.35-10.16l21.77-58.07L235.31 112a16 16 0 0 0 0-22.63ZM200 124.68L131.32 56l24-24L224 100.68Z'/%3E%3C/svg%3E");
  }
  &-customer-server {
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5z'/%3E%3C/svg%3E");
  }
  &-d-arrow {
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11.05 12L7.175 6.575q-.35-.5-.087-1.037T7.975 5q.25 0 .475.113t.35.312L13.5 12l-4.7 6.575q-.125.2-.35.313T7.975 19q-.6 0-.875-.537t.075-1.038zM17 12l-3.875-5.425q-.35-.5-.088-1.037T13.926 5q.25 0 .475.113t.35.312L19.45 12l-4.7 6.575q-.125.2-.35.313t-.475.112q-.6 0-.875-.537t.075-1.038z'/%3E%3C/svg%3E");
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
a {
  &:hover {
    .icon-base {
      background-color: #002ebc;
    }
  }
}
.icon-base {
  display: inline-block;
  vertical-align: bottom;
  width: 24px;
  height: 24px;
  background-color: #1c1c1c;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
