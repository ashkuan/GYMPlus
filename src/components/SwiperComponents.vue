<template>
  <swiper
    class="course-swiper"
    ref="swiper"
    @swiper="onSwiper"
    :width="255"
    :slides-per-view="1"
    :space-between="20"
    :modules="modules"
    navigation
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
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
    <swiper-slide v-for="course in courses" :key="course.key">
      <div class="card text-white text-start bg-transparent">
        <div class="position-relative">
          <img :src="course.imageUrl" class="card-img-top rounded-4" alt="course.title" />
          <div class="card-img-overlay d-flex p-2 p-md-3">
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
            <p class="card-text d-flex align-items-center mb-3 mb-xxl-0">
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
              :disabled="isAddingToCart"
            >
              <span v-if="isAddingToCart" class="line-loading-loop"></span>
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>

  <div class="swiper-button-prev" @click="goLeft"></div>
  <div class="swiper-button-next" @click="goRight"></div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import { mapActions, mapState } from 'pinia';
import GetDataStore from '@/stores/GetDataStore';
import FakeDataStore from '@/stores/FakeDataStore';
import CartStore from '@/stores/cartStore';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
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
    ...mapState(CartStore, ['isLoading']),
    courses() {
      return this.targetData.filter((course, index) => index > 4);
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
    border: 4px solid #001044;
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
    transition: all 0.5s ease-out;
    opacity: 0;
    display: inline-block;
    visibility: hidden;
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
    transition: all 0.5s ease-out;
    border-color: #002ebc;
    .card-img {
      &-top {
        filter: none;
      }
      &-overlay {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%);
      }
    }
    a[title],
    button[title] {
      visibility: visible;
      opacity: 1;
    }
    .card-body {
      transition: all 0.5s ease-out;
      padding-right: 16px !important;
      padding-left: 16px !important;
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
// 分頁客製化
.swiper-button-prev,
.swiper-button-next {
  --hover-space: 0px;
  --base-space: 12px;
  width: 32px;
  height: 32px;
  transform: translateY(-50%);
  top: 210px;
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
  // 互動樣式
  &:hover {
    --hover-space: 6px;
    &::after {
      background: #88c0ff;
    }
  }
  @media (min-width: 768px) {
    top: 265px;
    --base-space: 52px;
  }
  @media (min-width: 992px) {
    top: 317.8px;
    --base-space: -46px;
    width: 46px;
    height: 46px;
    &:hover {
      --hover-space: 12px;
    }
  }
  @media (min-width: 1200px) {
    --base-space: 44px;
  }
  @media (min-width: 1400px) {
    --base-space: -34px;
    top: 357px;
  }
  @media (min-width: 1488px) {
    --base-space: -72px;
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

@media (min-width: 992px) {
  .small-lg {
    font-size: 0.875rem !important;
  }
}
</style>
