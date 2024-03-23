<template>
  <img
    src="/banner-home.png"
    alt="banner圖片"
    class="banner-img w-100 d-md-none mb-4"
    style="height: 296px"
  />
  <div class="banner-img">
    <div class="container mt-1 mt-0 mt-md-0">
      <div class="row h-100">
        <div class="slogan col-md-5 col-xxl-4 ms-auto d-flex flex-column justify-content-center">
          <h2 class="text-white fs-6 fs-lg-4 fs-xl-3 mb-xl-6">
            <span class="bg-gray-1 p-2 p-lg-3 d-inline-block mb-1">為您帶來</span>
            <br />
            <span class="bg-gray-1 p-2 p-lg-3 d-inline-block">
              <span class="text-linear">獨樹一格</span>
              <span>的健身體驗</span>
            </span>
          </h2>
          <router-link
            to="/courses"
            class="fw-medium fw-md-bold align-self-md-end d-flex align-items-center"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="1500"
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
  <!-- FEATURES -->
  <div class="feature block-space pt-8 pt-md-7 container text-center">
    <h3 class="subtitle-border text-linear display-4 display-md-3 mb-1 mb-md-2 pt-1 pt-md-0">
      FEATURES
    </h3>
    <h2 class="fs-4 fs-md-3 fs-lg-2 pt-3 pt-md-5 mb-4 mb-md-6">
      <span>服務</span>
      <span class="text-primary">特色</span>
    </h2>
    <div class="row gy-8 gx-3 gx-lg-5">
      <div
        class="col-12 col-md"
        v-for="(feature, index) in features"
        :key="feature.title"
        data-aos="flip-left"
        data-aos-duration="1500"
        :data-aos-delay="(index + 1) * 150"
      >
        <div
          class="h-100 card shadow"
          :class="{ 'me-xl-5': !index, 'mx-xl-3': index === 1, 'ms-xl-5': index === 2 }"
        >
          <div class="card-body px-5 pt-0 px-lg-6 pb-lg-6">
            <div class="feature-cap position-relative">
              <span class="bg-light rounded-circle position-absolute">
                <img class="" :src="`${feature.imgUrl}.svg`" alt="icon" />
              </span>
              <span class="hover-icon rounded-circle">
                <span class="d-inline-block border border-white rounded-circle">
                  <img :src="`${feature.imgUrl}-white.svg`" alt="icon" />
                </span>
              </span>
            </div>
            <h3 class="card-title fs-6 fs-xl-5 mb-4">{{ feature.title }}</h3>
            <p class="card-text small fs-xl-7 ls-xl-2">
              {{ feature.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- WHAT’s GOOD -->
  <div class="bg-light overflow-hidden">
    <div class="container block-space text-center">
      <h3 class="subtitle-border text-linear display-4 display-md-3 mb-0">WHAT’s GOOD</h3>
      <h2 class="good-title fs-4 fs-md-3 fs-lg-2 pt-2 pt-md-4 mb-8 mb-md-6 mb-lg-7">
        <span class="fs-3 fs-md-2 fs-lg-1">健身</span>
        <span>帶來的</span>
        <span class="text-primary">好處</span>
        <span
          class="animate__animated d-inline-block"
          :class="[isAddAnimate ? 'animate__rotateInUpLeft' : 'animate__rotateOutDownLeft']"
        >
          <span
            class="fs-2 fs-lg-1 d-inline-block"
            style="transform: rotate(15deg) translate(-9px, 7px)"
          >
            ？
          </span>
        </span>
      </h2>
      <div class="d-flex flex-column text-start px-3 px-md-0">
        <div class="good-card card mb-8 mb-md-6 bg-transparent">
          <div class="row justify-content-center align-items-center position-relative">
            <div class="col-md-6 col-xl-5">
              <img src="/home-good01.png" class="img-fluid rounded-start" alt="強健身體" />
            </div>
            <div class="col-md-6 col-xl-5">
              <div class="card-body px-0 py-8">
                <h5 class="card-title fs-5 fs-lg-3 mb-3">
                  <span class="number-shape display-3 display-lg-1 fs-5 ls-0">01</span>
                  <span class="ms-2">強健骨骼與肌肉</span>
                </h5>
                <p class="card-text small fs-lg-7">
                  強化身體核心，減緩骨骼衰退，提升肌肉彈性。忘卻腰痠背痛，以更健康的體魄活出每一天。
                </p>
                <img
                  src="/home-deco01.svg"
                  alt="strong"
                  class="position-absolute d-none d-lg-block"
                  data-aos="fade-down-left"
                  data-aos-duration="1200"
                  data-aos-anchor-placement="bottom-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="good-card card mb-6 mb-md-7 bg-transparent">
          <div class="row justify-content-center align-items-center position-relative">
            <div class="col-md-6 col-xl-5 order-md-2">
              <img src="/home-good02.png" class="img-fluid rounded-start" alt="情緒改善" />
            </div>
            <div class="col-md-6 col-xl-5 order-md-1 d-flex flex-column align-items-md-end">
              <div class="card-body px-0 py-8">
                <h5 class="card-title fs-5 fs-lg-3 mb-3">
                  <span class="number-shape display-3 display-lg-1 fs-5 ls-0">02</span>
                  <span class="ms-2">情緒改善</span>
                </h5>
                <p class="card-text small fs-lg-7">
                  擺脫生活的壓力，運動釋放愉快腦內啡。透過健身，找回平靜，蓄勢迎接生活的挑戰。
                </p>
                <img
                  src="/home-deco02.svg"
                  alt="relax"
                  class="position-absolute d-none d-lg-block"
                  data-aos="fade-down-right"
                  data-aos-duration="1200"
                  data-aos-offset="100"
                  data-aos-anchor-placement="bottom-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="good-card card pt-lg-8 pt-xl-6 bg-transparent">
          <div class="row justify-content-center align-items-center position-relative">
            <div class="col-md-6 col-xl-5">
              <img src="/home-good03.png" class="img-fluid rounded-start" alt="情緒改善" />
            </div>
            <div class="col-md-6 col-xl-5">
              <div class="card-body px-0 pt-8 pb-0">
                <h5 class="card-title fs-5 fs-lg-3 mb-3">
                  <span class="number-shape display-3 display-lg-1 fs-5 ls-0">03</span>
                  <span class="ms-2">提升生活品質</span>
                </h5>
                <p class="card-text small fs-lg-7">
                  運動不僅鍛鍊身體，更提升大腦功能，改善睡眠品質。讓您擁有更清晰的思維、深度的休息，活出充實人生。
                </p>
                <img
                  src="/home-deco03.svg"
                  alt="enrich"
                  class="position-absolute d-none d-lg-block"
                  data-aos="fade-down-left"
                  data-aos-duration="1200"
                  data-aos-offset="200"
                  data-aos-anchor-placement="bottom-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- COURSE -->
  <div class="bg-dark block-space overflow-hidden">
    <div class="container text-center position-relative">
      <h3 class="subtitle-border text-linear display-4 display-md-3 mb-0">COURSE</h3>
      <h2 class="fs-4 fs-md-3 fs-lg-2 pt-3 pt-md-5 mb-8 mb-md-6 mb-lg-7 text-white">
        <span>心動不如</span>
        <span class="text-secondary">馬上行動</span>
      </h2>
      <CoursesSwiper></CoursesSwiper>
    </div>
  </div>
  <!-- INBODY -->
  <div class="bg-white block-space pb-8 pb-md-6">
    <div class="container text-center">
      <h3 class="subtitle-border text-linear display-4 display-md-3 mb-0">INBODY</h3>
      <h2 class="fs-4 fs-md-3 fs-lg-2 pt-3 pt-md-5 mb-4 mb-md-6 mb-lg-7">
        <span>認識</span>
        <span class="text-primary">身體數值</span>
      </h2>
      <div
        class="row text-start justify-content-center"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div class="col-md-10 col-lg col-xxl-10">
          <InbodyCalculator></InbodyCalculator>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-1"></div>
</template>

<script>
import CoursesSwiper from '@/components/SwiperComponents.vue';
import InbodyCalculator from '@/components/InbodyCalculator.vue';
import { mapActions, mapState } from 'pinia';
import CartStore from '@/stores/cartStore';

export default {
  components: { CoursesSwiper, InbodyCalculator },
  data() {
    return {
      features: [
        {
          imgUrl: 'icons/home-feature01',
          title: '優質教練團隊',
          content: '富有經驗的教練群，提供專業的動作指導，讓您訓練事半功倍。',
        },
        {
          imgUrl: 'icons/home-feature02',
          title: '免費體驗課程',
          content: '踏入健身旅程的第一步，尋找最適合您的健身之道。',
        },
        {
          imgUrl: 'icons/home-feature03',
          title: '即時客服諮詢',
          content: '不論是課程資訊、健身建議，線上客服將迅速為您解答。',
        },
      ],
      loader: null,
      isAddAnimate: false,
    };
  },
  computed: {
    ...mapState(CartStore, ['isLoading']),
  },
  methods: {
    ...mapActions(CartStore, ['getCarts']),
    // 防抖動
    debounce(func, delay = 250) {
      let timer = null;
      return (...args) => {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    },
  },
  watch: {
    isLoading(now) {
      if (!now && this.loader) {
        this.loader.hide();
        this.loader = null;
      }
    },
  },
  created() {
    this.loader = this.$loading.show();
    this.getCarts();
    window.addEventListener(
      'scroll',
      this.debounce(() => {
        if (window.scrollY > 1200) {
          this.isAddAnimate = true;
        } else if (window.scrollY < 1200) {
          this.isAddAnimate = false;
        }
      }),
    );
  },
};
</script>

<style>
/* banner 客製化 */
.banner-img {
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
        margin-left: 53px;
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
/* 服務特色 客製化 */
.feature {
  .feature-cap {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: inline-block;
      width: 36px;
      height: 36px;
      margin: 18px;
    }
    .hover-icon {
      border: 1px solid rgba(255, 255, 255, 1);
      img {
        width: 30px;
        height: 30px;
        margin: 15px;
      }
    }
  }
  .card:hover {
    transition: all 0.15s ease-in-out;
    background: linear-gradient(110.77deg, #655aea -6.41%, #95e2ff 107.79%);
    color: #fff;
    .feature-cap span:first-child {
      display: none;
      transition: all 0.5s ease-in-out;
    }
    .hover-icon {
      transition: all 0.5s ease-in-out;
      border: 1px solid rgba(255, 255, 255, 0.2);
      span {
        margin: 10px;
      }
    }
  }
  @media (min-width: 992px) {
    .feature-cap {
      height: 152px;
    }
  }
  @media (min-width: 1200px) {
    .feature-cap {
      height: 176px;
      img {
        width: 48px;
        height: 48px;
        margin: 24px;
      }
      .hover-icon img {
        width: 40px;
        height: 40px;
        margin: 20px;
      }
    }
    .card:hover {
      .hover-icon span {
        margin: 12px;
      }
    }
  }
}
/* 健身好處 客製化 */
.good-card {
  @media (min-width: 768px) {
    .card-body {
      width: calc((100% + 24px) * 0.8 - 24px);
    }
  }
  &:nth-child(2n + 1) .card-body {
    *:not(img, span) {
      margin-left: 10px;
    }
    img {
      top: 44px;
      right: 122px;
    }
  }
  &:last-child .card-body {
    img {
      top: 34px;
    }
  }
  &:nth-child(2n) .card-body {
    *:not(img, span) {
      margin-right: 10px;
    }
    img {
      top: 99px;
      left: 122px;
    }
  }
  @media (max-width: 1200px) {
    &:nth-child(2n + 1) .card-body img {
      width: 255px;
      right: 12px;
    }
    &:nth-child(2n) .card-body img {
      width: 214px;
      left: 12px;
      top: 109px;
    }
    &:last-child .card-body img {
      width: 240px;
      top: 54px;
    }
  }
}
@media (max-width: 768px) {
  .good-title {
    margin-top: -13px;
  }
}

.subtitle-border {
  border-bottom: 4px dotted #88c0ff;
}
.block-space {
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
}
/* 編號圖標 */
.number-shape {
  display: inline-block;
  padding: 2px 5px;
  background: url(number-shape.svg) center/cover;
  @media (min-width: 992px) {
    padding: 0 5px;
  }
}

a,
.btn {
  .icon-bg {
    background: #002ebc;
  }
  &:hover .icon-bg {
    background: linear-gradient(110.77deg, #655aea -6.41%, #95e2ff 107.79%);
  }
}
</style>
