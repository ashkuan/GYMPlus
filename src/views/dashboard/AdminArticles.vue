<template>
  <div class="container">
    <h2 class="fs-3 fw-normal ls-0 mb-md-0 text-center">文章管理</h2>
    <div class="d-flex justify-content-between">
      <div class="row g-1 align-items-center">
        <label for="img" class="col-2 col-xl-3 form-label">文章篩選</label>
        <div class="col">
          <select class="form-select form-select-sm">
            <option selected>依文章類別</option>
            <option :value="tag" v-for="tag in tags" :key="tag">{{ tag }}</option>
          </select>
        </div>
      </div>
      <div></div>
      <button type="button" class="btn btn-gray-3 py-1 shadow-sm" @click="resetTemp">
        <span class="icon-base icon-sm icon-add me-1 bg-white align-text-top"></span>
        <span>新增文章</span>
      </button>
    </div>
    <div v-if="articles.length !== 0">
      <div class="row">
        <small class="text-muted fs-8 small-md">點擊後編輯</small>
        <div class="list-group col-6">
          <button
            type="button"
            class="list-group-item list-group-item-action d-flex align-items-center"
            v-for="article in articles"
            :key="article.id"
            @click="getSingleInfo('article', article.id, false)"
          >
            <img
              :src="article.image"
              :alt="article.title"
              class="rounded-4"
              style="width: 120px; height: 80px"
            />
            <div class="ms-2 me-auto">
              <h3 class="small fs-lg-7">{{ article.title }}</h3>
              <p class="card-text">
                <small class="text-muted fs-8 small-md">作者：{{ article.author }}</small>
                <span class="badge bg-secondary ms-2" v-for="tag in article.tag" :key="tag">
                  {{ tag }}
                </span>
              </p>
            </div>
            <span
              class="badge ms-5"
              :class="{ 'bg-success': article.isPublic, 'bg-danger': !article.isPublic }"
            >
              {{ article.isPublic ? '公開中' : '非公開' }}
            </span>
          </button>
        </div>
        <div class="col-6">
          <h4 class="text-center fs-6 fs-sm-5 fw-medium bg-linear text-white">
            {{ singleArticle?.id ? '編輯' : '新增' }}文章
          </h4>
          <form class="admin-form" @submit.prevent="editArticle(singleArticle.id)">
            <div class="row g-1 align-items-center">
              <label for="title" class="col-2 col-xl-3 form-label">文章標題</label>
              <div class="col">
                <input
                  type="text"
                  id="title"
                  class="form-control form-control-sm"
                  placeholder="請輸入標題"
                  v-model="singleArticle.title"
                />
              </div>
            </div>
            <div class="row g-1 align-items-center">
              <label for="author" class="col-2 form-label">作者</label>
              <div class="col">
                <select
                  class="form-select form-select-sm"
                  id="author"
                  v-model="singleArticle.author"
                >
                  <option value="" disabled hidden>選擇文章作者</option>
                  <option value="GYM+">健身房營運</option>
                  <option :value="coach" v-for="coach in Object.keys(coaches)" :key="coach">
                    {{ coach }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row g-1">
              <label class="col-3 col-md-2 form-label">分類標籤</label>
              <div class="col d-flex flex-wrap">
                <div class="form-check me-2" v-for="(tag, index) in tags" :key="tag">
                  <input
                    class="form-check-input"
                    :checked="checkedtags[index]"
                    :value="tag"
                    v-model="singleArticle.tag"
                    type="checkbox"
                    :id="`tag${index}`"
                  />
                  <label class="form-label" :for="`tag${index}`">
                    {{ tag }}
                  </label>
                </div>
              </div>
            </div>
            <div class="row g-1 align-items-center">
              <label for="img" class="col-2 col-xl-3 form-label">主要圖片</label>
              <div class="col">
                <input
                  type="text"
                  id="img"
                  class="form-control form-control-sm"
                  placeholder="請輸入圖片網址"
                  v-model="singleArticle.image"
                />
              </div>
            </div>
            <img :src="singleArticle.image" :alt="singleArticle.title" class="img-fluid" />
            <div class="input-group input-group-sm">
              <input
                type="file"
                id="img"
                ref="fileInput"
                class="form-control form-control-sm"
                @change="getImgFile"
              />
              <button
                class="btn btn-outline-gray-3 ls-2"
                type="button"
                @click="uploadImg(false, $refs.fileInput)"
                :disabled="isAddingImg"
              >
                <span v-if="isAddingImg" class="line-loading-loop bg-white"></span>
                <span v-else>新增圖片</span>
              </button>
            </div>
            <div class="row g-1 align-items-center">
              <label for="description" class="col-3 col-md-2 form-label">文章前言</label>
              <div class="col">
                <input
                  type="text"
                  id="description"
                  class="form-control form-control-sm"
                  placeholder="請輸入文章前言"
                  v-model="singleArticle.description"
                />
              </div>
            </div>
            <div class="row g-1 align-items-center">
              <label for="content" class="col-3 col-md-2 form-label">文章內文</label>
              <div class="col">
                <input
                  type="text"
                  id="content"
                  class="form-control form-control-sm"
                  placeholder="請輸入文章內文"
                  v-model="singleArticle.content"
                />
              </div>
            </div>
            <div class="mt-auto ms-md-auto">
              <div class="form-check mt-5">
                <input
                  type="checkbox"
                  id="isPublic"
                  class="form-check-input"
                  v-model="singleArticle.isPublic"
                  true-value="1"
                  false-value="0"
                />
                <label for="isPublic" class="form-label">公開文章</label>
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-sm btn-gray-1 flex-grow-1 flex-lg-grow-0"
              :disabled="isEditingArticle"
            >
              <span v-show="isEditingArticle" class="line-loading-loop bg-white"></span>
              {{ singleArticle.id ? '更新文章' : '新增文章' }}
            </button>
            <button
              v-if="singleArticle.id"
              type="button"
              class="btn btn-sm btn-outline-danger flex-grow-1 flex-lg-grow-0"
              @click="editArticle(singleArticle.id)"
              :disabled="isEditingArticle"
            >
              <span v-show="isEditingArticle" class="line-loading-loop bg-white"></span>
              刪除文章
            </button>
          </form>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="fs-6 fw-light text-center">
        <span class="line-loading-loop bg-gray-3 align-top"></span>
        資料讀取中請稍後
      </h2>
    </div>
    <PaginationComponent :now-target="'coupons'" :is-user="false"></PaginationComponent>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import getDataStore from '@/stores/GetDataStore';
import fakeDataStore from '@/stores/FakeDataStore';
import adminCourseStore from '@/stores/dashboard/AdminCourseStore';
import PaginationComponent from '@/components/PaginationComponent.vue';
// import CouponModal from '@/components/dashboard/CouponModal.vue';

export default {
  components: { PaginationComponent },
  data() {
    return {
      articles: [],
      singleArticle: {
        author: '',
        tag: [],
      },
      tags: ['健身好處', '健身知識', '營養素', '開課訊息'],
      isEditingArticle: false,
    };
  },
  methods: {
    ...mapActions(getDataStore, ['getRemoteData', 'getSingleInfo']),
    ...mapActions(adminCourseStore, ['getImgFile', 'uploadImg']),
    resetTemp() {
      this.singleArticle = this.$options.data().singleArticle;
    },
    editArticle(id) {
      console.log(`文章id是${id}`);
    },
  },
  computed: {
    ...mapState(getDataStore, ['targetData', 'pagination', 'singleInfo', 'isGettingInfo']),
    ...mapState(fakeDataStore, ['coaches']),
    ...mapState(adminCourseStore, ['temp', 'isAddingImg']),
    checkedtags() {
      return this.tags.map((ele) => {
        const { tags } = this.articles;
        let isChecked = false;
        if (tags) {
          tags.forEach((e) => {
            if (e === ele) {
              isChecked = true;
            }
          });
        }
        return isChecked;
      });
    },
  },
  watch: {
    targetData(articles) {
      this.articles = articles;
    },
    singleInfo(nowArticle) {
      this.singleArticle = nowArticle;
    },
    isAddingImg(boolean) {
      if (!boolean) {
        this.singleArticle.image = this.temp.imageUrl;
      }
    },
  },
  mounted() {
    this.getRemoteData('articles', 1, false);
  },
};
</script>

<style lang="scss"></style>
