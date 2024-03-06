<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-linght" style="min-height: 100vh;">
    <div class="banner" style="background-image: url('https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"></div>
    <main class="container">
      <nav aria-label="breadcrumb" class="mt-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="mx-2">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">健身文章</li>
        </ol>
      </nav>
      <div class="row justify-content-center">
        <div class="btn-group mb-4 mx-auth col-12 col-lg-6">
          <button type="button" class="btn btn-primary"
          v-for="(item, index) in articlesType" :key="index"
          :class="{'active': item === article}"
           @click.prevent="checkArticle(item)">{{ item }}</button>
        </div>
      </div>
      <section class="row row-cols-1" v-if="filteredArticles.length !== 0">
        <div class="col d-flex justify-content-start justify-content-md-center"
        v-for="item in filteredArticles" :key="item.id">
          <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-12 col-md-4">
      <img :src="item.image" class="img-fluid rounded-start" :alt="item.title">
    </div>
    <div class="col-12 col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ formatUnixTimestamp(item.create_at) }}</p>
        <p class="card-text text-truncate">{{ item.description }}</p>
        <p class="card-text" v-for="(type, index) in item.tag" :key="index"># {{ type }}</p>
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-outline-danger stretched-link"
          @click.prevent="this.$router.push(`article/${item.id}`);">閱讀全文</button>
        </div>
      </div>
    </div>
  </div>
        </div>
        </div>
      </section>
      <section v-else>
        <h5 class="text-center">未查詢到此篩選結果</h5>
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  data() {
    return {
      url: '',
      path: '',
      article: '全部',
      articlesType: ['全部', '健身好處', '健身知識', '營養素', '開課訊息'],
      articles: [],
      isLoading: true,
    };
  },
  methods: {
    checkArticle(type) {
      this.article = type;
    },
    getData() {
      this.axios.get(`${this.url}api/${this.path}/articles`)
        .then((res) => {
          this.articles = res.data.articles;
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
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
  },
  computed: {
    filteredArticles() {
      let filtered = this.articles;
      if (this.article !== '全部') {
        filtered = filtered.filter((item) => item.tag.includes(this.article));
      }
      return filtered;
    },
  },
  components: {
    Loading,
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    this.getData();
  },
};

</script>
