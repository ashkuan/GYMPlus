<template>
  <h4 class="text-center fs-6 fs-sm-5 fw-medium bg-linear text-white py-3 rounded-top-3">
    {{ singleArticle?.id ? '編輯' : '新增' }}文章
  </h4>
  <div class="px-5 pb-4">
    <form class="admin-form" @submit.prevent="editArticle(singleArticle.id, $event)">
      <div class="row g-1 align-items-center mb-3">
        <label for="title" class="col-2 form-label">文章標題</label>
        <div class="col">
          <input
            type="text"
            id="title"
            class="form-control form-control-sm"
            placeholder="請輸入文章標題"
            v-model="singleArticle.title"
          />
        </div>
      </div>
      <div class="row g-1 align-items-center mb-3">
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
      <div class="row g-1 mb-3">
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
      <hr />
      <div class="row mb-3">
        <div class="col-8">
          <label for="img" class="form-label mb-2">主要圖片</label>
          <input
            type="text"
            id="img"
            class="form-control form-control-sm mb-2"
            placeholder="請輸入主要圖片網址"
            v-model="singleArticle.image"
          />
          <div class="input-group input-group-sm">
            <input
              type="file"
              id="img"
              ref="fileInput"
              class="form-control form-control-sm fs-8"
              @change="getImgFile"
            />
            <button
              class="btn btn-outline-gray-3 ls-2 fs-8"
              type="button"
              @click="uploadImg(false, $refs.fileInput)"
              :disabled="isAddingImg"
            >
              <span v-if="isAddingImg" class="line-loading-loop bg-white"></span>
              <span v-else>新增圖片</span>
            </button>
          </div>
        </div>
        <div class="col">
          <div class="position-relative mb-2 h-100">
            <img
              v-if="singleArticle.image"
              :src="singleArticle.image"
              alt="主要圖片"
              class="img-fluid w-100 h-100 rounded-2"
            />
            <div class="img-mask d-flex border">
              <p v-if="!singleArticle.image" class="mx-auto my-auto fs-8">缺少主圖</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="mb-3">
        <label for="description" class="form-label mb-2">文章引言</label>
        <textarea
          id="description"
          class="form-control form-control-sm"
          placeholder="請輸入文章引言"
          v-model="singleArticle.description"
          style="height: 58px"
        ></textarea>
      </div>
      <div class="mb-5">
        <label for="content" class="form-label mb-2">文章內文</label>
        <textarea
          id="content"
          class="form-control form-control-sm"
          placeholder="請輸入文章內文"
          v-model="singleArticle.content"
          style="height: 121px"
        ></textarea>
      </div>
      <div class="d-flex flex-row-reverse mb-3">
        <div class="form-check">
          <input
            type="checkbox"
            id="isPublic"
            class="form-check-input"
            v-model="singleArticle.isPublic"
          />
          <label for="isPublic" class="form-label">公開文章</label>
        </div>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="btn btn-sm btn-gray-1 flex-grow-1 flex-lg-grow-0 mx-2"
          :disabled="isEniting"
        >
          <span v-show="isEniting" class="line-loading-loop bg-white"></span>
          {{ singleArticle.id ? '更新文章' : '新增文章' }}
        </button>
        <button
          v-if="singleArticle.id"
          type="button"
          class="btn btn-sm btn-outline-danger flex-grow-1 flex-lg-grow-0 mx-2"
          @click="editArticle(singleArticle.id, $event)"
          :disabled="isEniting"
        >
          <span v-show="isEniting" class="line-loading-loop bg-white"></span>
          刪除文章
        </button>
      </div>
    </form>
  </div>
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
        if (tags)
          tags.forEach((e) => {
            if (e === ele) isChecked = true;
          });
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
