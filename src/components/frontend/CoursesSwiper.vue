<template>
  <div v-if="courses.length > 0" class="position-relative" :class="themeName">
    <Swiper
      class="course-swiper"
      ref="swiper"
      @swiper="onSwiper"
      :width="255"
      :slides-per-view="1"
      :space-between="20"
      :modules="modules"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      navigation
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          width: 530,
        },
        '992': {
          slidesPerView: 3,
          width: 936,
          spaceBetween: 18,
        },
        '1400': {
          slidesPerView: 3,
          width: 1296,
          spaceBetween: 48,
        },
      }"
    >
      <Swiper-Slide v-for="(course, index) in courses" :key="course.key">
        <div class="card text-white text-start bg-transparent overflow-hidden">
          <div class="position-relative">
            <img
              :src="course.imageUrl"
              class="card-img-top rounded-top-0 rounded-bottom-4"
              alt="course.title"
            />
            <div class="card-img-overlay d-flex p-2 p-md-3 rounded-top-0">
              <div class="d-flex align-items-center mt-auto">
                <span class="avatar bg-linear rounded-circle me-2">
                  <img
                    :src="coaches[course.coach].avatarUrl"
                    alt="course.coach"
                    class="rounded-circle"
                  />
                </span>
                <p class="fs-8 small-lg">{{ course.coach }} 教練</p>
              </div>
              <a
                href="#"
                class="btn btn-dark rounded-circle border-0 align-self-start p-2 p-lg-3 ms-auto"
                title="加入收藏"
              >
                <img src="/icons/bookmark-outline.svg" alt="收藏icon" />
              </a>
            </div>
          </div>
          <div class="card-body px-0">
            <h5 class="card-title mb-1 mb-xxl-0 fs-7 fs-lg-5 lh-base lh-lg-sm fw-medium">
              <router-link :to="`/course/${course.id}`" class="link-white">
                {{ course.title }}
              </router-link>
            </h5>
            <div
              class="d-flex flex-column flex-xxl-row justify-content-xxl-between align-items-xxl-end"
            >
              <p class="card-text d-flex align-items-center">
                <span class="text-secondary display-3 fs-lg-5 ls-0 me-1">
                  NT${{ course.price === 0 ? '免費體驗' : course.price }}
                </span>
                <span
                  v-if="course.price < course.origin_price"
                  class="text-decoration-line-through small"
                >
                  {{ course.origin_price }}
                </span>
              </p>
              <button
                type="button"
                class="btn btn-primary btn-sm py-2 py-xxl-3 px-xxl-8 fs-lg-7"
                title="立即加購"
                @click.prevent="addCart(course.id, course.title), (isAddingToCart = true)"
                :disabled="isAddingToCart || isInCartArr[index]"
              >
                <span v-if="isAddingToCart" class="line-loading-loop"></span>
                {{ isInCartArr[index] ? '已在購物車' : '加入購物車' }}
              </button>
            </div>
          </div>
        </div>
      </Swiper-Slide>
    </Swiper>

    <div class="swiper-button-prev" @click="goLeft"></div>
    <div class="swiper-button-next" @click="goRight"></div>
  </div>
  <p v-else class="fs-6 fw-light text-center py-6">
    <span class="line-loading-loop bg-gray-3 align-text-top"></span>
    資料讀取中請稍後
  </p>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import { mapActions, mapState } from 'pinia';
import GetDataStore from '@/stores/GetDataStore';
import FakeDataStore from '@/stores/FakeDataStore';
import CartStore from '@/stores/frontend/CartStore';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  props: ['themeName'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation, Autoplay],
      swiperInstance: null,
      isAddingToCart: false,
    };
  },
  methods: {
    ...mapActions(GetDataStore, ['getRemoteData']),
    ...mapActions(CartStore, ['addCart']),
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    goLeft() {
      this.swiperInstance.slidePrev();
    },
    goRight() {
      this.swiperInstance.slideNext();
    },
  },
  computed: {
    ...mapState(GetDataStore, ['targetData']),
    ...mapState(FakeDataStore, ['coaches']),
    ...mapState(CartStore, ['isLoading', 'carts']),
    courses() {
      return this.targetData.filter((course, index) => index > 4);
    },
    isInCartArr() {
      const cartIds = this.carts.map((cart) => cart.product_id);
      return this.courses.map((course) => cartIds.some((cartId) => cartId === course.id));
    },
  },
  watch: {
    isLoading(boolean) {
      if (!boolean) {
        this.isAddingToCart = false;
      }
    },
  },
  mounted() {
    this.getRemoteData('products');
  },
};
</script>

<style lang="scss">
.course-swiper {
  max-width: 255px;
  overflow: visible;
  .card {
    transition: border-color 0.5s ease-out;
    border: 4px solid #001044;
    .card-body {
      transition: all 0.5s ease-out;
    }
  }
  .card-img {
    &-overlay {
      background: rgba(0, 0, 0, 0.4);
    }
    &-top {
      height: 190px;
      // 圖片轉成黑白
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
      filter: gray;
    }
  }
  a[title],
  button[title] {
    display: inline-block;
    animation: fadeOut 0.2s linear 0s forwards;
  }
  button[title] {
    margin-top: -12px;
  }
  @media (max-width: 1400px) {
    button[title] {
      transition: margin-top 0.5s ease-out;
      margin-top: -40px;
    }
  }
  // 漸層圓形border
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    img {
      width: 30px;
      height: 30px;
    }
    @media (min-width: 992px) {
      width: 48px;
      height: 48px;
      img {
        width: 60px;
        height: 46px;
      }
    }
  }
  // 響應式
  @media (max-width: 992px) {
    .card {
      border: 3px solid #001044;
    }
    .card-body {
      transition: all 0.5s ease-out;
      padding: 16px 0px !important;
    }
  }
  @media (min-width: 768px) {
    max-width: 530px;
    overflow: hidden;
  }
  @media (min-width: 992px) {
    max-width: 936px;
    .card-img-top {
      height: 225px;
    }
  }
  @media (min-width: 1400px) {
    max-width: 1296px;
    .card-img-top {
      height: 300px;
    }
  }
  // 互動樣式
  .card:hover {
    border-color: #002ebc;
    .card-img {
      &-top {
        filter: none;
      }
      &-overlay {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%);
      }
    }
    a[title] {
      animation: fade 0.6s linear 0s forwards;
    }
    .card-body {
      transition: all 0.5s ease-out;
      padding-right: 16px !important;
      padding-left: 16px !important;
      button[title] {
        transition: margin-top 0.5s ease-out;
        animation: fade 1.3s linear 0s forwards;
        @media (max-width: 1400px) {
          margin-top: 12px;
        }
      }
    }
    @media (max-width: 992px) {
      .card-body {
        padding: 16px 12px !important;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    visibility: hidden;
  }
}
// 按鈕淡入動畫
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
// 分頁客製化
.swiper-button-prev,
.swiper-button-next {
  --hover-space: 0px;
  --base-space: calc(50% - 127.5px + 3px - 32px - 16px);
  width: 32px;
  height: 32px;
  transform: translateY(50%);
  top: 83px;
  &::after {
    content: '' !important;
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' d='M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0'/%3E%3C/svg%3E");
    mask-image: var(--svg);
    background: #fff;
    width: 100%;
    height: 100%;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }
  &:hover {
    // 互動樣式
    --hover-space: 6px;
    &::after {
      background: #88c0ff;
    }
  }
  @media (min-width: 768px) {
    --base-space: calc(50% - 265px + 3px - 32px - 16px);
  }
  @media (min-width: 992px) {
    --base-space: calc(50% - 468px + 4px - 30px);

    top: 89.5px;
    width: 40px;
    height: 40px;
    &:hover {
      --hover-space: 12px;
    }
  }
  @media (min-width: 1060px) {
    --base-space: calc(50% - 468px + 4px - 40px - 24px);
  }
  @media (min-width: 1400px) {
    // --base-space: -28px;
    --base-space: calc(50% - 648px + 4px - 52px - 24px);
    top: 124px;
    width: 46px !important;
    height: 46px !important;
  }
  @media (min-width: 1488px) {
    width: 60px;
    height: 60px;
    &:hover {
      --hover-space: 12px;
    }
  }
  @media (min-width: 1536px) {
    &:hover {
      --hover-space: 24px;
    }
  }
}
.swiper-button {
  &-next {
    right: calc(var(--base-space) - var(--hover-space));
  }
  &-prev {
    left: calc(var(--base-space) - var(--hover-space));
    &::after {
      transform: rotate(180deg);
    }
  }
}

// swiper theme
.swiper-lignt {
  .card-title a {
    color: #1c1c1c !important;
    &:hover {
      color: #002ebc !important;
    }
  }
  .card-text .small {
    color: #707070;
  }
  .card {
    border: 4px solid #fff;
    &:hover {
      border-color: #88c0ff;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    background: #002ebc;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    padding: 12px;
    &:hover {
      background: linear-gradient(110.77deg, #655aea -6.41%, #95e2ff 107.79%);
      &::after {
        background: #fff;
      }
    }
    @media (min-width: 1400px) {
      width: 52px !important;
      height: 52px !important;
    }
  }
}
</style>
