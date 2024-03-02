<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <div class="bg-linght" style="min-height: 100vh">
    <div
      class="banner"
      style="background-image: url('./src/assets/classes.jpg')"
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
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column border border-3 rounded w-100 px-2">
          <p>進一步指定你的教練</p>
          <div class="row row-cols-1 row-cols-md-5 gy-3 gy-md-0">
            <div class="col d-flex justify-content-start justify-content-md-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Alex"
                  id="Alex"
                  v-model="coach"
                />
                <label class="form-check-label" for="Alex"> Alex </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-person-circle mx-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468
                    11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </div>
            </div>
            <div class="col d-flex justify-content-start justify-content-md-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Olivia Chang"
                  id="Olivia Chang"
                  v-model="coach"
                />
                <label class="form-check-label" for="Olivia Chang">
                  Olivia Chang
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-person-circle mx-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468
                    11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </div>
            </div>
            <div class="col d-flex justify-content-start justify-content-md-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Jackson Liu"
                  id="Jackson Liu"
                  v-model="coach"
                />
                <label class="form-check-label" for="Jackson Liu">
                  Jackson Liu
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-person-circle mx-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468
                    11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </div>
            </div>
            <div class="col d-flex justify-content-start justify-content-md-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Emma"
                  id="Emma"
                  v-model="coach"
                />
                <label class="form-check-label" for="Emma"> Emma </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-person-circle mx-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468
                    11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </div>
            </div>
            <div class="col d-flex justify-content-start justify-content-md-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Dhalsim"
                  id="Dhalsim"
                  v-model="coach"
                />
                <label class="form-check-label" for="Dhalsim"> Dhalsim </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-person-circle mx-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468
                    11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
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
          <option selected>熱門課程</option>
          <option value="asc">價格由低到高</option>
          <option value="desc">價格由高到低</option>
        </select>
            </div>
          </div>
        </div>
      </div>
      <section class="row row-cols-1 row-cols-lg-3 g-5 gx-lg-4"
       v-if="filteredProducts.length !== 0">
        <div class="col" v-for="(item) in filteredProducts" :key="item.id">
          <div class="card">
            <button type="button" class="position-absolute bookmark">
      <img src="../assets/icon/bookmark.svg" alt="bookmark"></button>
            <a href="#" class="position-relative ground-floor" @click.prevent="pushPage(item.id)">
              <img
              :src="item.imageUrl"
              class="card-img-top" style="height: 350px; object-fit: cover;"
              :alt="item.content"
            />
            <div class="card-img-overlay d-flex flex-column justify-content-between">
    <div class="d-flex overlay-text">
      <img src="../assets/icon/user.svg" alt="user" class="overlay-img m-2">
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
              <button type="button" class="btn btn-primary"
              :disabled="this.status.loadingItem === item.id"
               @click.prevent="addCart(item.id, item.title)">
               <div class="spinner-border spinner-border-sm text-secondary" role="status"
               v-if="this.status.loadingItem === item.id"
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
      <section class="d-flex justify-content-center mt-5">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
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

export default {
  data() {
    return {
      url: '',
      path: '',
      products: [],
      coach: [],
      status: {
        loadingItem: '',
      },
      sortOrder: 'asc', // 默認從小到大
      category: '全部課程',
      categorys: ['全部課程', '瑜珈', '有氧運動', '重量訓練'],
      isLoading: true,
    };
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.url}api/${this.path}/products/all`)
        .then((res) => {
          this.products = Object.values(res.data.products);
          this.isLoading = false;
        });
    },
    pushPage(id) {
      this.$router.push(`course/${id}`);
    },
    checkCategory(type) {
      this.category = type;
    },
    addCart(id, title) {
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.axios.post(`${this.url}api/${this.path}/cart`, { data: cart })
        .then(() => {
          this.$swal({
            icon: 'success',
            title: '課程新增',
            text: `已成功新增${title}課程`,
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            this.status.loadingItem = '';
          }, 1500);
        });
    },
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
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    this.getData();
  },
};
</script>
