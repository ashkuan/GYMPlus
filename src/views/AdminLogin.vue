<script>
export default {
  data() {
    return {
      url: '',
      path: '',
      isInvalid: true,
    };
  },
  methods: {
    login() {
      console.log(this.url, this.path);
      this.axios.get(`${this.url}/v2/api/${this.path}/products/all`)
        .then((res) => {
          console.log(res.data);
        });
    },
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    this.login();
  },
};
</script>

<template>
  <div class="bg-light" style="min-height: 100vh;">
    <nav class="navbar navbar-light bg-white">
      <div class="container">
        <router-link to="/">
          <h1 class="logo mb-0">GYMPlus</h1>
        </router-link>
        <router-link to="/" class="fw-medium py-3">返回前台</router-link>
      </div>
    </nav>
    <div class="container pb-6">
      <h2 class="text-center my-7">
        <span class="text-primary">管理者</span>登入
      </h2>
      <div class="row justify-content-center">
        <form action="#" class="col-11 col-md-9 col-lg-6">
          <div class="row align-items-center mb-4 gx-3">
            <label class="col-2 form-label" for="email">帳號</label>
            <div class="col-10">
              <input
              type="email"
              class="form-control"
              placeholder="請輸入管理員信箱"
              id="email"
              :class="{'is-invalid': isInvalid}">
            </div>
          </div>
          <div class="row align-items-center mb-4 gx-3">
            <label class="col-2 form-label" for="password">密碼</label>
            <div class="col-10">
              <input type="password" class="form-control" placeholder="請輸入密碼" id="password">
            </div>
          </div>
          <div class="row align-items-center mb-6 gx-3">
            <label class="col-2 form-label" for="passwordCheck">確認密碼</label>
            <div class="col-10">
              <input
                type="password"
                class="form-control"
                placeholder="請再次輸入密碼"
                id="passwordCheck">
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-100 mb-6">登入</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
h1.logo {
  background: no-repeat url(logo.svg);
  background-size: cover;
  width: 105px;
  height: 60px;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}
</style>
