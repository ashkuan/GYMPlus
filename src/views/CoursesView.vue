<template>
  <div class="bg-linght" style="min-height: 100vh">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/">
          <h1 class="logo mb-0" style="width: 105px; height: 60px">GYMPlus</h1>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <router-link to="/courses" class="mx-2">購買課程</router-link>
            <router-link to="/coaches" class="mx-2">認識教練</router-link>
            <router-link to="/about" class="mx-2">關於我們</router-link>
            <router-link to="/articles" class="mx-2">健身文章</router-link>
            <router-link to="/favourite" class="mx-2">我的最愛</router-link>
            <router-link to="/cart" class="mx-2">購物車</router-link>
          </div>
        </div>
      </div>
    </nav>
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
        <div class="btn-group mb-4 mx-auth col-lg-6">
          <button type="button" class="btn btn-primary active">全部課程</button>
          <button type="button" class="btn btn-primary">瑜珈</button>
          <button type="button" class="btn btn-primary">有氧運動</button>
          <button type="button" class="btn btn-primary">重量訓練</button>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column border border-3 rounded w-100 px-2">
          <p>進一步指定你的教練</p>
          <div class="row g-0">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Alex"
                  id="Alex"
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
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Olivia Chang"
                  id="Olivia Chang"
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
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Jackson Liu"
                  id="Jackson Liu"
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
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Emma"
                  id="Emma"
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
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Dhalsim"
                  id="Dhalsim"
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
      <div class="d-flex justify-content-end align-items-center my-3">
        <label for="class" class="mx-2">排序方式</label>
        <select
          class="form-select w-25"
          aria-label="Disabled select example"
          id="class"
        >
          <option selected>熱門課程</option>
          <option value="1">價格由低到高</option>
          <option value="2">價格由高到低</option>
        </select>
      </div>
      <section class="row row-cols-1 row-cols-lg-3 g-5 gx-lg-4">
        <div class="col" v-for="(item) in products" :key="item.id">
          <div class="card">
            <a href="#" class="position-relative" @click.prevent="pushPage(item.id)">
              <img
              :src="item.imageUrl"
              class="card-img-top img-fluid" style="height: 350px; object-fit: cover;"
              :alt="item.content"
            />
            <div class="card-img-overlay d-flex flex-column justify-content-between">
    <button type="button" class="border-0 align-self-end bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0
   .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18
    0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18
     0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0
      0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8
   13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5
    0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg></button>
    <div class="d-flex flex-column">
      <h6 class="font-bold text-white">{{ item.coach }} 教練</h6>
      <p class="card-text text-white">{{ item.title }}</p>
    </div>
  </div>
            </a>
            <div
              class="card-body d-flex justify-content-between align-items-center"
            >
              <p class="card-text mb-0">
                NT$ {{ item.price }}
                <span class="text-decoration-line-through">{{ item.origin_price }}</span>
              </p>
              <button type="button" class="border-0 bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-cart-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0
                    1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"
                  />
                  <path
                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498
                    7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0
                    0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0
                     .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0
                      0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1
                       1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
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
    };
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.url}${this.path}/products/all`)
        .then((res) => {
          this.products = Object.values(res.data.products);
        });
    },
    pushPage(id) {
      this.$router.push(`course/${id}`);
    },
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    this.getData();
  },
};
</script>
