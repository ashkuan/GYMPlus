<template>
  <h4 class="text-center fs-6 fs-sm-5 fw-medium bg-linear text-white">
    {{ singleArticle?.id ? '編輯' : '新增' }}文章
  </h4>
  <form class="admin-form" @submit.prevent="editArticle(singleArticle.id, $event)">
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
        <select class="form-select form-select-sm" id="author" v-model="singleArticle.author">
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
        <div class="form-check me-2" v-for="(tag, index) in articleTags" :key="tag">
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
        />
        <label for="isPublic" class="form-label">公開文章</label>
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-sm btn-gray-1 flex-grow-1 flex-lg-grow-0"
      :disabled="isEniting"
    >
      <span v-show="isEniting" class="line-loading-loop bg-white"></span>
      {{ singleArticle.id ? '更新文章' : '新增文章' }}
    </button>
    <button
      v-if="singleArticle.id"
      type="button"
      class="btn btn-sm btn-outline-danger flex-grow-1 flex-lg-grow-0"
      @click="editArticle(singleArticle.id, $event)"
      :disabled="isEniting"
    >
      <span v-show="isEniting" class="line-loading-loop bg-white"></span>
      刪除文章
    </button>
  </form>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import GetDataStore from '@/stores/GetDataStore';
import fakeDataStore from '@/stores/FakeDataStore';
import adminCourseStore from '@/stores/dashboard/AdminCourseStore'; // 借用圖片上傳功能
import AlertStore from '@/stores/AlertStore';

export default {
  props: ['isAddNew', 'getNewData'],
  data() {
    return {
      url: '',
      path: '',
      singleArticle: {
        author: '',
        tag: [],
        isPublic: false,
      },
      isEniting: false,
    };
  },
  methods: {
    ...mapActions(GetDataStore, ['getRemoteData']),
    ...mapActions(adminCourseStore, ['getImgFile', 'uploadImg']),

    ...mapActions(AlertStore, ['basicContent']),
    resetTemp() {
      this.singleArticle = this.$options.data().singleArticle;
    },
    // 包含新增、編輯、刪除
    editArticle(id, event) {
      this.isEniting = !this.isEniting;
      const article = { ...this.singleArticle };
      article.create_at = Math.floor(new Date().getTime() / 1000);
      let obj = { data: { ...article } };
      let method = 'post';
      if (id && event.type === 'submit') {
        method = 'put';
      } else if (event.type === 'click') {
        obj = null;
        method = 'delete';
      }
      this.axios[method](`${this.url}api/${this.path}/admin/article${id ? `/${id}` : ''}`, obj)
        .then((res) => {
          this.alertStyles.basic.fire({
            ...this.basicContent(res.data.message, 1),
            didClose: () => {
              this.resetTemp();
              this.getNewData();
              this.isEniting = !this.isEniting;
            },
          });
        })
        .catch((err) => {
          this.isEniting = !this.isEniting;
          this.alertStyles.basic.fire(this.basicContent(err.response.data.message, 2));
        });
    },
  },
  computed: {
    ...mapState(fakeDataStore, ['coaches', 'articleTags']),
    ...mapState(GetDataStore, ['singleInfo']),
    ...mapState(adminCourseStore, ['temp', 'isAddingImg']),

    ...mapState(AlertStore, ['alertStyles']),
    checkedtags() {
      return this.articleTags.map((ele) => {
        const { tags } = this.singleArticle;
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
    singleInfo(nowArticle) {
      this.singleArticle = { ...nowArticle };
    },
    isAddingImg(boolean) {
      if (!boolean) this.singleArticle.image = this.temp.imageUrl;
    },
    isAddNew(boolean) {
      if (boolean) this.resetTemp();
    },
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
  },
};
</script>

<style lang="scss"></style>
