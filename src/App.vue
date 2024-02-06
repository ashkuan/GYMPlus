<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import SwiperComponents from './components/SwiperComponents.vue';

export default {
  components: {
    SwiperComponents,
  },
  data() {
    return {
      swiper: null,
    };
  },
  mounted() {
    // 測試區塊開始
    console.log(import.meta.env.VITE_API_PATH);
    this.axios.get('https://randomuser.me/api/').then((res) => {
      console.log(res.data);
    });
    const submit = () => {
      const loader = this.$loading.show({
        // Optional parameters
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
        this.$swal('Hello Vue world!!!');
      }, 2000);
    };
    submit();
    AOS.init();
    // 測試區塊結束
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- 測試區塊開始 -->
      <button type="button" class="btn btn-primary">Primary</button>
      <VForm novalidate @submit="onSubmit">
        <VField
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="請輸入 Email"
          rules="email|required"
        ></VField>
        <label for="email">信箱</label>
        <ErrorMessage name="email" v-slot="{ message }">
          <p>ERRROR: {{ message }}</p>
        </ErrorMessage>
      </VForm>
      <SwiperComponents></SwiperComponents>
      <div class="d-flex">
        <div class="box" data-aos="fade-up"></div>
        <div class="box" data-aos="fade-down"></div>
      </div>
      <!-- 測試區塊結束 -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
$primary: blue;

.box {
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: $primary;
}
</style>
