<template>
  <div class="bg-light" style="min-height: 100vh">
    <div class="container">
      <nav aria-label="breadcrumb" class="pt-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="mx-2">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">購物車</li>
        </ol>
      </nav>
    </div>
    <main class="container my-8 my-md-10">
      <section class="my-6">
        <div class="row justify-content-center">
          <div class="col-9 col-md-7 timeLine"></div>
        </div>
        <div class="row mt-6 g-0">
          <div class="col-3 col-md-5">
            <div class="text-center step step_1 active">確認商品</div>
          </div>
          <div class="col-6 col-md-2">
            <div class="text-center step step_2">填寫資料</div>
          </div>
          <div class="col-3 col-md-5">
            <div class="text-center step step_3">訂單確認</div>
          </div>
        </div>
      </section>
      <section class="pb-5">
        <h2 class="text-center">購物車列表</h2>
        <div class="row justify-content-center">
          <div class="col-12 col-md-8">
            <div class="card">
              <div class="card-body">
                <div class="row mb-2 border-bottom" v-for="item in carts" :key="item.id">
                  <div class="col-2 d-flex align-items-center">
                    <button type="button" class="btn">X</button>
                  </div>
                  <div class="col-7 d-flex align-items-center">
                    <img
                      :src="item?.product?.imageUrl"
                      alt="img"
                      class="img-fluid w-50"
                    />
                    <h4 class="mx-2 mb-0">{{ item?.product?.title }}</h4>
                  </div>
                  <div class="col-3 d-flex align-items-center">
                    <p class="card-text mb-0 text-decoration-line-through">
                      $ {{ item?.product?.origin_price }}
                    </p>
                    <span class="mx-3">$ {{ item?.product?.price }}</span>
                  </div>
                </div>
              </div>
                <div class="container row align-items-center mb-4">
                  <div class="col-6">
                    <div class="input-group">
  <input type="text" class="form-control"
   placeholder="請輸入優惠卷代碼"
    aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">套用</button>
</div>
                  </div>
                  <div class="col-6">
                    <p class="mb-0">未套用優惠卷</p>
                  </div>
                  <div class="col-12 d-flex flex-column align-items-end">
                      <p>商品合計: <span>NT$ 750</span></p>
                      <p>訂單總計: <span>NT$ 750</span></p>
                  </div>
                </div>
                <div class="d-flex justify-content-center pb-5">
                  <button type="button" class="btn btn-secondary w-25 mx-3">返回購物</button>
                  <button type="button" class="btn btn-danger w-25 mx-3">填寫資料</button>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-5">
        <h3 class="text-center">推薦課程</h3>
        <div class="row row-cols-1 row-cols-md-4 gy-4 gy-md-0 overflow-auto justify-content-center">
          <div class="col"
           >
            <a href="#" class="card text-white ground-floor">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1708756288385.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WLskNJ2gkOdikUIYZuHrb2MQLW3czCBSfDFkZGkOjpbnpPVD%2BsJRx9wuIemdY862GhtBuXmHVoxSvMGtunvCxNgnmVYIkOVngWJb0CkwkgVOUVFhZFd9FiD9o70druBo2i8ijYkia0dpENc3Mindor9Y0VQlATxP2i4B%2FDTNrVehQ5Yml%2BZCjFbjWFXbCqdq7VjAqGgDYVbRIPvpSzk1OYPLwv2Cs3tzLymllU59WQ%2B5VtpkRkVScekzFX5FOEnc15YFDu3O0hXtXq4wt%2Fx9ggBL7O9YtrBglXQfznuFWimKV6WEJNelRI%2FUT69bVbTXbs6V4m97rqaZWTpSjWpV5Q%3D%3D" class="card-img" alt="img">
  <div class="card-img-overlay d-flex flex-column justify-content-between">
    <button type="button" class="border-0 align-self-end bg-transparent high-floor" style="z-index: 1000;"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0
   .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18
    0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18
     0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0
      0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8
   13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5
    0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg></button>
    <h6 class="font-bold">0</h6>
  </div>
            </a>
          </div>
          <div class="col"
           >
            <a href="#" class="card text-white ground-floor">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1708756288385.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WLskNJ2gkOdikUIYZuHrb2MQLW3czCBSfDFkZGkOjpbnpPVD%2BsJRx9wuIemdY862GhtBuXmHVoxSvMGtunvCxNgnmVYIkOVngWJb0CkwkgVOUVFhZFd9FiD9o70druBo2i8ijYkia0dpENc3Mindor9Y0VQlATxP2i4B%2FDTNrVehQ5Yml%2BZCjFbjWFXbCqdq7VjAqGgDYVbRIPvpSzk1OYPLwv2Cs3tzLymllU59WQ%2B5VtpkRkVScekzFX5FOEnc15YFDu3O0hXtXq4wt%2Fx9ggBL7O9YtrBglXQfznuFWimKV6WEJNelRI%2FUT69bVbTXbs6V4m97rqaZWTpSjWpV5Q%3D%3D" class="card-img" alt="img">
  <div class="card-img-overlay d-flex flex-column justify-content-between">
    <button type="button" class="border-0 align-self-end bg-transparent high-floor" style="z-index: 1000;"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0
   .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18
    0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18
     0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0
      0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8
   13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5
    0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg></button>
    <h6 class="font-bold">0</h6>
  </div>
            </a>
          </div>
          <div class="col"
           >
            <a href="#" class="card text-white ground-floor">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1708756288385.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WLskNJ2gkOdikUIYZuHrb2MQLW3czCBSfDFkZGkOjpbnpPVD%2BsJRx9wuIemdY862GhtBuXmHVoxSvMGtunvCxNgnmVYIkOVngWJb0CkwkgVOUVFhZFd9FiD9o70druBo2i8ijYkia0dpENc3Mindor9Y0VQlATxP2i4B%2FDTNrVehQ5Yml%2BZCjFbjWFXbCqdq7VjAqGgDYVbRIPvpSzk1OYPLwv2Cs3tzLymllU59WQ%2B5VtpkRkVScekzFX5FOEnc15YFDu3O0hXtXq4wt%2Fx9ggBL7O9YtrBglXQfznuFWimKV6WEJNelRI%2FUT69bVbTXbs6V4m97rqaZWTpSjWpV5Q%3D%3D" class="card-img" alt="img">
  <div class="card-img-overlay d-flex flex-column justify-content-between">
    <button type="button" class="border-0 align-self-end bg-transparent high-floor" style="z-index: 1000;"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0
   .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18
    0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18
     0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0
      0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8
   13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5
    0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg></button>
    <h6 class="font-bold">0</h6>
  </div>
            </a>
          </div>
        </div>
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
      carts: [],
    };
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.url}${this.path}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          // this.products = Object.values(res.data.products);
          // this.product = this.products;
        });
    },
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    this.getData();
  },
};

</script>
