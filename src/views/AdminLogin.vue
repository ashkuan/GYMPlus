<script>
import { mapActions, mapState } from 'pinia';
import AlertStore from '../stores/AlertStore';

export default {
  data() {
    return {
      url: '',
      path: '',
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(AlertStore, ['basicContent', 'closedAction']),
    login(value) {
      const { username, password } = value;
      const user = { username, password };
      this.isLoading = true;
      this.axios
        .post(`${this.url}/admin/signin`, user)
        .then((res) => {
          const responce = res.data;
          if (responce.error) {
            switch (responce.error.code) {
              case 'auth/user-not-found':
                this.alertStyles.basic.fire(this.basicContent('查無此帳號', 2));
                break;
              case 'auth/wrong-password':
                this.alertStyles.basic.fire(this.basicContent('密碼輸入錯誤', 2));
                break;
              default:
                this.alertStyles.basic.fire(this.basicContent('登入失敗，請洽客服', 2));
                break;
            }
          } else {
            const { token, expired } = responce;
            document.cookie = `adminToken=${token}; expires=${new Date(expired)};`;
            this.alertStyles.basic.fire({
              ...this.basicContent(responce.message, 1),
              ...this.closedAction('replace', 'admin'),
            });
          }
          this.isLoading = false;
        })
        .catch((err) => {
          this.alertStyles.basic.fire(this.basicContent(`錯誤${err.response.status}，請洽客服`, 2));
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
  },
  computed: {
    ...mapState(AlertStore, ['alertStyles']),
  },
};
</script>

<template>
  <div class="bg-light" style="min-height: 100vh">
    <nav class="navbar navbar-light bg-white">
      <div class="container">
        <router-link to="/">
          <h1 class="logo mb-0" style="width: 105px; height: 60px">GYMPlus</h1>
        </router-link>
        <router-link to="/" class="fw-medium py-3">返回前台</router-link>
      </div>
    </nav>
    <div class="container pb-6">
      <h2 class="text-center my-7">
        <span class="text-primary">管理者</span>
        <span>登入</span>
      </h2>
      <div class="row justify-content-center">
        <VForm class="col-11 col-md-9 col-lg-6" @submit="login" v-slot="{ errors }">
          <div class="row align-items-center mb-4 gx-3">
            <label class="col-2 form-label" for="email">帳號</label>
            <div class="col-10">
              <VField
                name="username"
                rules="email|required"
                type="email"
                class="form-control border-0"
                :class="{ 'is-invalid': errors['username'] }"
                placeholder="請輸入管理員信箱"
                id="email"
              ></VField>
            </div>
            <ErrorMessage name="username" v-slot="{ message }" class="invalid-feedback">
              <small class="col-10 ms-auto mt-1 text-danger">
                {{ message.replace('username', '帳號') }}
              </small>
            </ErrorMessage>
          </div>
          <div class="row align-items-center mb-4 gx-3">
            <label class="col-2 form-label" for="password">密碼</label>
            <div class="col-10">
              <VField
                name="password"
                rules="required"
                type="password"
                class="form-control border-0"
                :class="{ 'is-invalid': errors['password'] }"
                placeholder="請輸入密碼"
                id="password"
              ></VField>
            </div>
            <ErrorMessage name="password" v-slot="{ message }" class="invalid-feedback">
              <small class="col-10 ms-auto mt-1 text-danger">
                {{ message.replace('password', '密碼') }}
              </small>
            </ErrorMessage>
          </div>
          <div class="row align-items-center mb-6 gx-3">
            <label class="col-2 form-label" for="passwordCheck">確認密碼</label>
            {{ errors.valus }}
            <div class="col-10">
              <VField
                name="checkPassword"
                rules="required|confirmed:@password"
                type="password"
                class="form-control border-0"
                :class="{ 'is-invalid': errors['checkPassword'] }"
                placeholder="請再次輸入密碼"
                id="passwordCheck"
              ></VField>
            </div>
            <ErrorMessage name="checkPassword" v-slot="{ message }" class="invalid-feedback">
              <small class="col-10 ms-auto mt-1 text-danger">
                {{ message.replace('checkPassword', '密碼') }}
              </small>
            </ErrorMessage>
          </div>
          <button type="submit" class="btn btn-primary w-100 mb-6" :disabled="isLoading">
            <span v-show="isLoading" class="line-loading-loop bg-gray-3"></span>
            登入
          </button>
        </VForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
