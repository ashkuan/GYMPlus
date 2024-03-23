<template>
  <div
    ref="courseEditModal"
    class="modal fade"
    id="courseEditModal"
    tabindex="-1"
    aria-labelledby="courseEditModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-linear py-3">
          <h3 class="modal-title fs-6 fs-sm-5 fw-medium text-white" id="productModal">
            {{ temp.id ? '編輯課程' : '新增課程' }}
          </h3>
        </div>
        <div class="modal-body p-5 px-xl-6">
          <div class="container-fluid">
            <form class="row admin-form gx-6">
              <div class="col-lg-7 mb-3 mb-lg-0">
                <div class="row g-3">
                  <div class="col-xl-6">
                    <div class="row g-1 align-items-center">
                      <label for="title" class="col-2 col-xl-3 form-label">課程標題</label>
                      <div class="col">
                        <input
                          type="text"
                          id="title"
                          class="form-control form-control-sm"
                          placeholder="請輸入標題"
                          v-model="temp.title"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="row g-1 align-items-center">
                      <label for="category" class="col-2 form-label">分類</label>
                      <div class="col">
                        <select
                          class="form-select form-select-sm"
                          id="category"
                          v-model="temp.category"
                        >
                          <option value="" disabled hidden>選擇課程分類</option>
                          <option :value="category" v-for="category in categories" :key="category">
                            {{ category }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="row g-1 align-items-center" ref="dueDate">
                      <label for="time" class="col-2 col-xl-3 form-label">上課日期</label>
                      <div class="col input-group input-group-sm">
                        <input
                          type="text"
                          id="time"
                          class="form-control"
                          placeholder="請輸入上課日期"
                          v-model="temp.time"
                          data-input
                        />
                        <button class="btn btn-light" type="button" data-toggle>
                          <i class="bi bi-calendar-plus"></i>
                        </button>
                        <button
                          class="btn btn-outline-gray-4 rounded-end-1 text-dark"
                          type="button"
                          data-clear
                        >
                          <i class="bi bi-x-lg"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="row g-1 align-items-center">
                      <label for="coach" class="col-2 form-label">教練</label>
                      <div class="col">
                        <select class="form-select form-select-sm" id="coach" v-model="temp.coach">
                          <option value="" disabled hidden>選擇開課教練</option>
                          <option :value="coach" v-for="coach in coachs" :key="coach">
                            {{ coach }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="row g-1 align-items-center">
                      <label for="origin_price" class="col-2 form-label">原價</label>
                      <div class="col input-group input-group-sm">
                        <span class="input-group-text fs-8" style="letter-spacing: 0px">NTD</span>
                        <input
                          type="number"
                          id="origin_price"
                          class="form-control form-control-sm"
                          placeholder="請輸入原價"
                          v-model.number="temp.origin_price"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="row g-1 align-items-center">
                      <label for="price" class="col-2 form-label">售價</label>
                      <div class="col input-group input-group-sm">
                        <span class="input-group-text" style="letter-spacing: 0px">NTD</span>
                        <input
                          type="number"
                          id="price"
                          class="form-control form-control-sm"
                          placeholder="請輸入售價"
                          v-model.number="temp.price"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                  <hr class="mt-5" />
                  <div class="col-md-12 mt-2">
                    <div class="row g-1">
                      <label class="col-3 col-md-2 form-label" style="padding-top: 2px">
                        推薦對象
                      </label>
                      <div class="col d-flex flex-wrap">
                        <div
                          class="form-check me-2"
                          :class="{ 'mb-0': index > 4 }"
                          v-for="(target, index) in targets"
                          :key="target"
                        >
                          <input
                            class="form-check-input"
                            :checked="checkedtargets[index]"
                            :value="target"
                            v-model="temp.target"
                            type="checkbox"
                            :id="`target${index}`"
                          />
                          <label class="form-label" :for="`target${index}`">
                            {{ target }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="mt-5 mb-2" />
                  <div class="col-md-12">
                    <div class="row g-1 align-items-center">
                      <label for="content" class="col-3 col-md-2 form-label">課程簡述</label>
                      <div class="col">
                        <input
                          type="text"
                          id="content"
                          class="form-control form-control-sm"
                          placeholder="請輸入課程簡述"
                          v-model="temp.content"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="row g-1">
                      <label for="description" class="col-3 col-md-2 form-label">課程描述</label>
                      <div class="col">
                        <textarea
                          id="description"
                          class="form-control form-control-sm"
                          placeholder="請輸入課程描述"
                          style="height: 157px"
                          v-model="temp.description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 d-flex flex-column">
                <label for="img" class="form-label mb-2">課程圖片</label>
                <div class="position-relative mb-2" style="height: 180px">
                  <img
                    v-if="temp.imageUrl"
                    v-show="temp.imageUrl"
                    :src="temp.imageUrl"
                    alt="主要圖片"
                    class="img-fluid w-100 h-100 rounded-2"
                  />
                  <div class="img-mask d-flex border">
                    <p v-if="!temp.imageUrl" class="mx-auto my-auto">缺少主要圖片</p>
                  </div>
                  <button
                    v-if="temp.imageUrl"
                    type="button"
                    class="admin-img-delBtn btn btn-outline-danger btn-sm position-absolute"
                    style="top: 8px; right: 8px"
                    @click="temp.imageUrl = ''"
                  >
                    <span class="icon-base icon-trash icon-sm"></span>
                  </button>
                </div>
                <div class="row g-2 mb-4">
                  <template v-if="temp.imagesUrl">
                    <div class="col-4" v-for="(img, index) in temp.imagesUrl" :key="index">
                      <div class="position-relative">
                        <img
                          v-show="img"
                          :src="img"
                          :alt="'新增圖片' + (index + 1)"
                          class="w-100 rounded-2"
                          style="height: 100px"
                        />
                        <div class="img-mask"></div>
                        <button
                          type="button"
                          class="admin-img-delBtn btn btn-outline-danger btn-sm position-absolute"
                          style="top: 4px; right: 4px"
                          @click="temp.imagesUrl.splice(index, 1)"
                        >
                          <span class="icon-base icon-trash icon-sm"></span>
                        </button>
                      </div>
                    </div>
                  </template>
                </div>
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="imageSwitch"
                    v-model="isImgArr"
                  />
                  <label class="form-label" for="imageSwitch">
                    {{ isImgArr ? '新增到圖片集' : '更新主要圖片' }}
                  </label>
                </div>
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
                    @click="uploadImg(isImgArr, $refs.fileInput)"
                    :disabled="isAddingImg"
                  >
                    <span v-if="isAddingImg" class="line-loading-loop bg-white"></span>
                    <span v-else>新增圖片</span>
                  </button>
                </div>
                <div class="mt-auto ms-md-auto">
                  <div class="form-check mt-5">
                    <input
                      type="checkbox"
                      id="is_enabled"
                      class="form-check-input"
                      v-model="temp.is_enabled"
                      true-value="1"
                      false-value="0"
                    />
                    <label for="is_enabled" class="form-label">上架課程</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer border-0 shadow shadow-top">
          <button
            type="button"
            class="btn btn-sm btn-outline-gray-3 flex-grow-1 flex-lg-grow-0 me-2"
            data-bs-dismiss="modal"
          >
            關閉視窗
          </button>
          <button
            type="button"
            class="btn btn-sm btn-gray-1 flex-grow-1 flex-lg-grow-0"
            @click="editCourse(temp.id, editModal)"
            :disabled="isEditingCourse"
          >
            <span v-show="isEditingCourse" class="line-loading-loop bg-white"></span>
            {{ temp.id ? '更新課程' : '新增課程' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
import { mapActions, mapState } from 'pinia';
import adminCourseStore from '@/stores/dashboard/AdminCourseStore';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

export default {
  data() {
    return {
      isImgArr: false,
      categories: ['瑜珈', '有氧運動', '重量訓練'],
      coachs: ['Emma', 'Alex', 'Dhalsim', 'Olivia Chang', 'Jackson Liu'],
      targets: ['年長者', '初學者', '親子', '進階', '健力', '復健', '體態維持'],
      isAddingToCart: false,
      editModal: {},
      dateDom: null,
    };
  },
  methods: {
    ...mapActions(adminCourseStore, [
      'getCourse',
      'resetTemp',
      'editCourse',
      'getImgFile',
      'uploadImg',
    ]),
  },
  computed: {
    ...mapState(adminCourseStore, ['temp', 'isEditingCourse', 'isAddingImg']),
    checkedtargets() {
      return this.targets.map((ele) => {
        const tempTargets = this.temp.target;
        let isChecked = false;
        if (tempTargets) {
          tempTargets.forEach((e) => {
            if (e === ele) {
              isChecked = true;
            }
          });
        }
        return isChecked;
      });
    },
  },
  mounted() {
    this.editModal = new bootstrap.Modal(this.$refs.courseEditModal);
    const danglingStr = '_element';
    this.editModal[danglingStr].addEventListener('hidden.bs.modal', () => {
      this.resetTemp();
    });
    this.dateDom = this.$refs.dueDate;
    flatpickr(this.dateDom, {
      minDate: 'today',
      wrap: true,
    });
  },
};
</script>

<style lang="scss">
.admin-img-delBtn {
  border-width: 0;
  padding: 4px;
  background-color: #f5f5f5;
  z-index: 2;
}
</style>
