<template>
  <div class="container mb-6">
    <h2 class="fs-3 fw-normal ls-0 text-center">文章管理</h2>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="row gx-3 align-items-center">
        <label for="img" class="col-2 col-xl-3 form-label pe-0">文章篩選</label>
        <div class="col ps-0">
          <select class="form-select form-select-sm">
            <option selected hidden>依類別</option>
            <option value="全部">全部</option>
            <option :value="tag" v-for="tag in articleTags" :key="tag">{{ tag }}</option>
          </select>
        </div>
        <div class="col">
          <select class="form-select form-select-sm">
            <option selected hidden>依作者</option>
            <option value="GYM+">健身房營運</option>
            <option :value="coach" v-for="coach in Object.keys(coaches)" :key="coach">
              {{ coach }}
            </option>
          </select>
        </div>
      </div>
      <div></div>
      <button type="button" class="btn btn-gray-3 py-1 shadow-sm" @click="isAddNew = true">
        <span class="icon-base icon-sm icon-add me-1 bg-white align-text-top"></span>
        <span>新增文章</span>
      </button>
    </div>
    <div v-if="articles.length !== 0">
      <small class="text-muted fs-8 small-md">點擊後可進行編輯或刪除</small>
      <div class="row">
        <div class="col-6">
          <div class="list-group mb-5">
            <button
              type="button"
              class="list-group-item list-group-item-action d-flex align-items-center"
              v-for="article in articles"
              :key="article.id"
              @click="getSingleInfo('article', article.id, false), (isAddNew = !isAddNew)"
            >
              <img
                :src="article.image"
                :alt="article.title"
                class="rounded-2"
                style="width: 120px; height: 80px"
              />
              <div class="ms-3 me-auto">
                <h3 class="mb-0 small fs-lg-7">
                  {{ article.title }}
                </h3>
                <span
                  class="badge bg-primary bg-opacity-50 fw-light me-2"
                  v-for="tag in article.tag"
                  :key="tag"
                >
                  {{ tag }}
                </span>
                <p class="card-text">
                  <small class="text-muted fs-8 small-md">作者：{{ article.author }}</small>
                </p>
              </div>
              <span
                class="badge p-1 rounded-circle ms-5"
                :class="[article.isPublic ? 'bg-success' : 'bg-danger']"
              >
                <i class="bi" :class="[article.isPublic ? 'bi-eye-fill' : 'bi-eye-slash']"></i>
              </span>
            </button>
          </div>
          <PaginationComponent :now-target="'articles'" :is-user="false"></PaginationComponent>
        </div>
        <div class="col-6">
          <div class="shadow-sm rounded-3">
            <ArticleEditBlock :is-add-new="isAddNew" :get-new-data="getNewData" />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="fs-6 fw-light text-center">
        <span class="line-loading-loop bg-gray-3 align-top"></span>
        資料讀取中請稍後
      </h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import getDataStore from '@/stores/GetDataStore';
import fakeDataStore from '@/stores/FakeDataStore';
import PaginationComponent from '@/components/PaginationComponent.vue';
import ArticleEditBlock from '@/components/dashboard/ArticleEditBlock.vue';

export default {
  components: { ArticleEditBlock, PaginationComponent },
  data() {
    return {
      articles: [],
      isAddNew: true,
    };
  },
  methods: {
    ...mapActions(getDataStore, ['getRemoteData', 'getSingleInfo']),
    getNewData() {
      const page = this.pagination.current_page;
      this.getRemoteData('articles', page, false);
    },
  },
  computed: {
    ...mapState(getDataStore, ['targetData', 'pagination', 'isGettingInfo']),
    ...mapState(fakeDataStore, ['coaches', 'articleTags']),
  },
  watch: {
    targetData(articles) {
      this.articles = articles;
    },
  },
  mounted() {
    this.getRemoteData('articles', 1, false);
  },
};
</script>

<style lang="scss"></style>
