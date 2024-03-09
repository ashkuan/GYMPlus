<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-white" style="min-height: 100vh;">
    <main v-if="!isLoading">
      <div class="container">
        <nav aria-label="breadcrumb" class="pt-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="mx-2">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/articles" class="mx-2">健身文章</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
        </ol>
      </nav>
      <h2 class="text-center">{{ article.title }}</h2>
      <div class="d-flex justify-content-evenly">
        <p>作者: {{ article.author }}</p>
        <p>發表於: {{ formatUnixTimestamp(article.create_at) }}</p>
        <p>分類於: <span v-for="(type, index) in article.tag" :key="index">{{ type }}</span></p>
      </div>
      </div>
      <div class="banner mt-3" :style="{backgroundImage: 'url('+ image +')'}"></div>
      <article class="container" v-html="article.content"></article>
      <div class="d-flex justify-content-center mt-5 pb-5">
        <button type="button" class="btn btn-outline-danger"
        @click.prevent="gotoTop">返回頂部</button>
      </div>
    </main>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  props: ['id'],
  data() {
    return {
      url: '',
      path: '',
      article: [],
      image: '',
      isLoading: true,
    };
  },
  methods: {
    checkArticle(type) {
      this.article = type;
    },
    getData() {
      this.axios.get(`${this.url}api/${this.path}/article/${this.id}`)
        .then((res) => {
          this.article = res.data.article;
          this.image = this.article.image;
          this.isLoading = false;
        });
    },
    formatUnixTimestamp(time) { // 轉換為時間
      const date = new Date(time * 1000);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    },
    gotoTop() {
      window.scrollTo(0, 0);
    },
  },
  components: {
    Loading,
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    window.scrollTo(0, 0);
    this.getData();
  },
};
</script>
