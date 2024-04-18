<template>
  <figure class="favourite-banner"></figure>
  <main class="block-space">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item small fs-lg-7">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item small fs-lg-7 active" aria-current="page">我的最愛</li>
        </ol>
      </nav>
      <section v-if="favourites.length === 0" class="empty-favourite">
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
      <section v-else class="row gy-2 gx-3 gx-lg-4">
        <div v-for="favourite in favourites" :key="favourite.key" class="col-md-6 col-xl-4">
          <div class="card shadow-sm px-4 py-3" aria-hidden="true">
            <div class="d-flex">
              <router-link :to="`/course/${favourite.id}`">
                <img
                  :src="favourite.imageUrl"
                  class="img-fluid border rounded-3 me-3 me-md-4"
                  :alt="favourite.title"
                  style="width: 100px; height: 72px"
                />
              </router-link>
              <div class="col d-flex flex-column">
                <h4 class="card-title fs-7 ls-md-2 fw-medium lh-base mb-0">
                  <router-link class="link-gray-1" :to="`/course/${favourite.id}`">
                    {{ favourite.title }}
                  </router-link>
                </h4>
                <div class="d-flex flex-grow-1">
                  <p class="card-text d-flex align-items-center align-self-start">
                    <span class="text-secondary display-3 ls-0 me-1">
                      NT${{ favourite.price === 0 ? '免費體驗' : favourite.price }}
                    </span>
                    <span
                      v-if="favourite.price < favourite.origin_price"
                      class="text-decoration-line-through small"
                    >
                      {{ favourite.origin_price }}
                    </span>
                  </p>
                  <div class="ms-auto mt-auto">
                    <a
                      @click.prevent="console.log('remove')"
                      class="btn btn-outline-secondary p-0"
                      title="移除收藏"
                    >
                      <span class="icon-base icon-xs icon-bookmark bg-secondary m-2"></span>
                    </a>
                    <button type="button" class="btn btn-primary p-0 ms-1" title="立即加購">
                      <span class="icon-base icon-xs icon-cart-empty bg-white m-2"></span>
                      <!-- @click.prevent="addCart(favourite.id, favourite.title), (isAddingToCart = true)"
                    :disabled="isAddingToCart || isInCartArr[index]"
                    <span v-if="isAddingToCart" class="line-loading-loop"></span> -->
                      <!-- {{ isInCartArr[index] ? '已在購物車' : '加入購物車' }} -->
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <section class="position-relative py-6 mb-6 text-center bg-light overflow-hidden">
    <h4 class="subtitle-border text-center text-linear display-4 display-md-3 mb-0">
      RECOMMENDATION
    </h4>
    <h3 class="fs-5 fs-md-4 fs-lg-3 pt-3 pt-md-5 mb-8 mb-md-6">
      <span class="text-primary">推薦</span>
      <span>課程</span>
    </h3>
    <CoursesSwiper :theme-name="'swiper-lignt'" />
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import FakeDataStore from '@/stores/FakeDataStore';
import FavouriteStore from '@/stores/frontend/FavouriteStore';
import CoursesSwiper from '@/components/frontend/CoursesSwiper.vue';

export default {
  components: { CoursesSwiper },
  data() {
    return {};
  },
  methods: {
    ...mapActions(FavouriteStore, ['getFavourites', 'addToFavourites']),
  },
  computed: {
    ...mapState(FakeDataStore, ['coaches']),
    ...mapState(FavouriteStore, ['favourites']),
  },
  mounted() {
    this.getFavourites();
  },
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
    height: 320px;
  }
  + main {
    .btn-outline-secondary:hover {
      .icon-bookmark {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m17 18l-5-2.18L7 18V5h10m0-2H7a2 2 0 0 0-2 2v16l7-3l7 3V5a2 2 0 0 0-2-2'/%3E%3C/svg%3E");
      }
    }
  }
  + main + section {
    .card {
      border-color: #e8eeff;
      .card-title {
        margin-bottom: 0 !important;
      }
      &:hover {
        border-color: #fff;
      }
      .card-text > span:first-child {
        color: #001044 !important;
      }
    }
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
