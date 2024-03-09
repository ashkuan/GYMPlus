<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-white" style="min-height: 100vh">
    <div
      class="banner" style="background-image: url('https://images.unsplash.com/photo-1561214078-f3247647fc5e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
    ></div>
    <main class="container-lg rounded-bottom">
      <nav aria-label="breadcrumb" class="mt-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="mx-2">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">購買課程</li>
        </ol>
      </nav>
      <div class="row justify-content-center">
        <div class="btn-group mb-4 mx-auth col-12 col-lg-6">
          <button type="button" class="btn btn-primary" :class="{'active': item === category}"
           v-for="(item,index) in categorys" :key="index"
           @click.prevent="checkCategory(item)">{{ item }}</button>
        </div>
      </div>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button"
       type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
        aria-expanded="false" aria-controls="collapseOne">
        進一步指定你的教練
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse"
     aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="row row-cols-1 row-cols-lg-5 gy-3 gy-md-0">
            <div class="col d-flex justify-content-start"
            v-for="(item, index) in coaches" :key="index">
              <div class="form-check d-flex align-items-center">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="item.name"
                  :id="item.name"
                  v-model="coach"
                />
                <label class="form-check-label px-2" :for="item.name"> {{ item.name }} </label>
                <img :src="item.avatarUrl" alt="course.coach" class="rounded-circle"
                 style="width: 40px;">
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  </div>
      <div class="row justify-content-end align-items-center my-3">
        <div class="col-12 col-md-5">
          <div class="row justify-content-end align-items-center">
            <div class="col-12 col-md-auto">
              <label for="class" class="mx-2">排序方式</label>
            </div>
            <div class="col-12 col-md-6">
              <select
          class="form-select"
          aria-label="Disabled select example"
          id="class"
          v-model="sortOrder"
        >
          <option value="asc">價格由低到高</option>
          <option value="desc">價格由高到低</option>
        </select>
            </div>
          </div>
        </div>
      </div>
      <section class="row row-cols-1 row-cols-lg-3 g-5 gx-lg-4"
       v-if="filteredProducts.length !== 0">
        <div class="col" data-aos="zoom-in" v-for="(item) in filteredProducts" :key="item.id">
          <div class="card shadow-sm">
            <button type="button"
             class="position-absolute bookmark btn btn-dark
              rounded-circle border-0 align-self-start p-2 p-lg-3 ms-auto">
      <img src="../assets/icon/bookmark.svg" alt="bookmark"></button>
            <a href="#" class="position-relative ground-floor" @click.prevent="pushPage(item.id)">
              <img
              :src="item.imageUrl"
              class="card-img-top" style="height: 350px; object-fit: cover;"
              :alt="item.content"
            />
            <div class="card-img-overlay d-flex flex-column justify-content-between">
    <div class="d-flex overlay-text">
      <img :src="matchingKey(item.coach)" alt="user" class="overlay-img m-2">
      <h6 class="font-bold text-white">{{ item.coach }} 教練</h6>
    </div>
  </div>
            </a>
            <div
              class="card-body d-flex justify-content-between align-items-center"
            >
              <div class="d-flex flex-column" v-if="item.price !== 0">
                <p class="card-text mb-0">{{ item.title }}</p>
              <p class="card-text mb-0">
                NT$ {{ item.price }}
                <span class="text-decoration-line-through">{{ item.origin_price }}</span>
              </p>
              </div>
              <div class="d-flex flex-column" v-else>
                <p class="card-text mb-0">{{ item.title }}</p>
                <p class="card-text mb-0">免費</p>
              </div>
              <button type="button" class="btn btn-primary" disabled
              v-if="this.carts.some(id => id.product_id === item.id)">已加入購物車</button>
              <button type="button" class="btn btn-primary" v-else
              :disabled="status.loadingItem === item.id"
               @click.prevent="addCart(item.id, item.title)">
               <div class="spinner-border spinner-border-sm text-secondary" role="status"
               v-if="status.loadingItem === item.id"
               >
                  <span class="visually-hidden">Loading...</span>
                </div>
               加入購物車</button>
            </div>
          </div>
        </div>
      </section>
      <section v-else>
        <h5>未查詢到此篩選結果</h5>
      </section>
      <section class="d-flex justify-content-center mt-5" v-if="filteredProducts.length !==0">
        <PaginationComponent :now-target="'products'" :isUser="true"></PaginationComponent>
      </section>
      <section class="d-flex justify-content-center mt-5" v-else>
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link active" href="#">1</a></li>
    <li class="page-item disabled">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
      </section>
    </main>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';
import PaginationComponent from '@/components/PaginationComponent.vue';
import FakeDataStore from '@/stores/FakeDataStore';
import getDataStore from '@/stores/GetDataStore';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      url: '',
      path: '',
      products: [],
      coach: [],
      sortOrder: 'asc', // 默認從小到大
      category: '全部課程',
      categorys: ['全部課程', '瑜珈', '有氧運動', '重量訓練'],
      isLoading: true,
    };
  },
  methods: {
    pushPage(id) {
      this.$router.push(`course/${id}`);
    },
    checkCategory(type) {
      this.category = type;
    },
    matchingKey(item) {
      const matchingKey = Object.keys(this.coaches).find((key) => key === item);
      return matchingKey ? this.coaches[matchingKey].avatarUrl : '';
    },
    ...mapActions(cartStore, ['addCart']),
    ...mapActions(getDataStore, ['getRemoteData']),
    ...mapActions(cartStore, ['getCarts']),
  },
  components: {
    Loading,
    PaginationComponent,
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;
      if (this.category !== '全部課程') {
        filtered = filtered.filter((item) => item.category === this.category);
      }
      if (this.coach.length !== 0) {
        filtered = filtered.filter((item) => this.coach.includes(item.coach));
      }
      if (this.sortOrder === 'asc') { // 判定價格 默認從小到大
        filtered.sort((a, b) => a.price - b.price);
      } else {
        filtered.sort((a, b) => b.price - a.price);
      }
      return filtered;
    },
    ...mapState(cartStore, ['status']),
    ...mapState(cartStore, ['carts']),
    ...mapState(getDataStore, ['targetData']),
    ...mapState(FakeDataStore, ['coaches']),
  },
  watch: {
    targetData(vaule) {
      this.products = vaule;
    },
    filteredProducts() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    Aos.init({ });
    this.getCarts();
    this.getRemoteData('products', 1);
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
