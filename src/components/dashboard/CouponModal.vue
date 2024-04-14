<template>
  <div
    ref="couponModal"
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div
          class="modal-header py-3"
          :class="[status === '刪除' ? 'bg-linear-danger' : 'bg-linear']"
        >
          <h3 class="modal-title fs-6 fs-sm-5 fw-medium text-white">
            <span>{{ status }}優惠券</span>
            <span class="ls-0 small fs-sm-6" v-if="coupon.id">：{{ coupon.id }}</span>
          </h3>
        </div>
        <div class="modal-body p-5">
          <div v-show="status !== '刪除'">
            <VForm
              class="admin-form container-fluid px-sm-6 d-flex flex-column"
              @submit="editCoupon(coupon.id, $event)"
              ref="couponForm"
              v-slot="{ errors }"
            >
              <div class="row g-3 mb-3 align-items-center">
                <label for="title" class="col-3 form-label">標題</label>
                <div class="col">
                  <VField
                    name="title"
                    rules="required"
                    type="text"
                    id="title"
                    class="form-control form-control-sm"
                    :class="{ 'is-invalid': errors['title'] }"
                    v-model="coupon.title"
                    placeholder="請輸入標題"
                  />
                </div>
                <ErrorMessage name="title" v-slot="{ message }" class="invalid-feedback">
                  <small class="col-9 ms-auto fs-8 mt-1 text-danger">
                    {{ message.replace('title', '標題') }}
                  </small>
                </ErrorMessage>
              </div>
              <div class="row g-3 mb-3 align-items-center">
                <label for="code" class="col-3 form-label">折扣碼</label>
                <div class="col">
                  <VField
                    name="code"
                    rules="required"
                    type="text"
                    id="code"
                    class="form-control form-control-sm"
                    :class="{ 'is-invalid': errors['code'] }"
                    v-model="coupon.code"
                    placeholder="請輸入折扣代碼"
                  />
                </div>
                <ErrorMessage name="code" v-slot="{ message }" class="invalid-feedback">
                  <small class="col-9 ms-auto fs-8 mt-1 text-danger">
                    {{ message.replace('code', '折扣代碼') }}
                  </small>
                </ErrorMessage>
              </div>
              <div class="row g-3 mb-3 align-items-center">
                <label for="percent" class="col-3 form-label">折扣趴數</label>
                <div class="col">
                  <VField
                    name="percent"
                    rules="required|min_value:0|max_value:100"
                    type="number"
                    id="percent"
                    class="form-control form-control-sm"
                    :class="{ 'is-invalid': errors['percent'] }"
                    v-model.number="coupon.percent"
                    placeholder="請輸入折扣趴數"
                    min="0"
                  />
                </div>
                <ErrorMessage name="percent" v-slot="{ message }" class="invalid-feedback">
                  <small class="col-9 ms-auto fs-8 mt-1 text-danger">
                    {{ message.replace('percent', '折扣趴數') }}
                  </small>
                </ErrorMessage>
              </div>
              <div class="row g-3 mb-3 align-items-center">
                <label for="dueDate" class="col-3 form-label">到期日</label>
                <div class="col input-group input-group-sm" ref="dueDateDom">
                  <VField
                    name="dueDateStr"
                    rules="required"
                    type="text"
                    id="dueDate"
                    data-input
                    class="form-control"
                    :class="{ 'is-invalid': errors['dueDateStr'] }"
                    v-model="coupon.dueDateStr"
                    placeholder="請輸入到期日"
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
                <ErrorMessage name="dueDateStr" v-slot="{ message }" class="invalid-feedback">
                  <small class="col-9 ms-auto fs-8 mt-1 text-danger">
                    {{ message.replace('dueDateStr', '到期日') }}
                  </small>
                </ErrorMessage>
              </div>
              <div class="ms-auto">
                <div class="form-check">
                  <input
                    type="checkbox"
                    id="is_enabled"
                    class="form-check-input"
                    v-model="coupon.is_enabled"
                  />
                  <label for="is_enabled" class="form-label">啟用優惠券</label>
                </div>
              </div>
              <button type="submit" class="d-none" ref="submitBtn"></button>
            </VForm>
          </div>
          <div v-show="status === '刪除'" class="row justify-content-center">
            <div class="col-9">
              <h4 class="fs-6 mb-5">確定要刪除優惠券？</h4>
              <ul class="list-group list-group-flush small">
                <li class="list-group-item px-0">優惠券標題：{{ coupon.title }}</li>
                <li class="list-group-item px-0">
                  優惠券編號：
                  <span class="ls-0">{{ coupon.id }}</span>
                </li>
                <li class="list-group-item px-0">
                  到期日：
                  <span class="ls-0">{{ coupon.dueDateStr }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 shadow shadow-top">
          <button
            type="button"
            class="btn btn-sm btn-outline-gray-3 flex-grow-1 flex-md-grow-0 me-2"
            data-bs-dismiss="modal"
          >
            關閉視窗
          </button>
          <button
            type="button"
            class="btn btn-sm flex-grow-1 flex-md-grow-0"
            @click="activedSubmitBtn"
            :class="[status === '刪除' ? 'btn-danger' : 'btn-gray-1']"
            :disabled="isEniting"
          >
            <span v-show="isEniting" class="line-loading-loop bg-white"></span>
            {{ status === '編輯' ? '更新' : status }}優惠券
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
import { mapActions, mapState } from 'pinia';
import GetDataStore from '@/stores/GetDataStore';
import AlertStore from '@/stores/AlertStore';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

export default {
  props: ['couponInfo', 'editStatus'],
  data() {
    return {
      url: '',
      path: '',
      couponModal: null,
      dateDom: null,
      calendar: null,
      coupon: {
        is_enabled: false,
      },
      nowStatus: null,
      isEniting: false,
    };
  },
  methods: {
    ...mapActions(GetDataStore, ['getRemoteData']),
    ...mapActions(AlertStore, ['basicContent']),
    // 包含新增、編輯、刪除
    editCoupon(id, value) {
      this.isEniting = !this.isEniting;
      let form = { data: { ...value } };
      form.data.is_enabled = this.coupon.is_enabled ? 1 : 0;
      form.data.due_date = new Date(form.data.dueDateStr).getTime() / 1000;
      let method = 'post';
      if (this.nowStatus === 2) {
        method = `put`;
      } else if (!this.nowStatus) {
        form = null;
        method = 'delete';
      }
      this.axios[method](`${this.url}api/${this.path}/admin/coupon${id ? `/${id}` : ''}`, form)
        .then((res) => {
          this.alertStyles.basic.fire({
            ...this.basicContent(res.data.message, 1),
            didClose: () => {
              this.$emit('needGetNewData');
              this.isEniting = !this.isEniting;
              this.couponModal.hide();
            },
          });
        })
        .catch((err) => {
          this.isEniting = !this.isEniting;
          this.alertStyles.basic.fire(this.basicContent(err.response.data.message, 2));
        });
    },
    activedSubmitBtn() {
      // 透過外部按鈕觸發表單內部 submit button
      this.$refs.submitBtn.click();
    },
  },
  computed: {
    ...mapState(GetDataStore, ['pagination']),
    ...mapState(AlertStore, ['alertStyles']),
    status() {
      if (this.nowStatus) {
        return this.nowStatus === 2 ? `編輯` : `新增`;
      }
      return `刪除`;
    },
  },
  watch: {
    editStatus(status) {
      this.nowStatus = status;
    },
    couponInfo(nowCoupon) {
      const objKeys = Object.keys(nowCoupon);
      const isAddCoupon = !objKeys.length;

      if (!isAddCoupon) {
        objKeys.forEach((key) => {
          this.coupon[key] = nowCoupon[key];
        });
        this.coupon.is_enabled = !!this.coupon.is_enabled;
        this.calendar.jumpToDate(this.coupon.dueDateStr);
      } else {
        this.coupon = this.$options.data().coupon;
        this.$refs.couponForm.resetForm();
        this.calendar.jumpToDate('today');
      }
    },
  },
  mounted() {
    this.couponModal = new bootstrap.Modal(this.$refs.couponModal);
    this.dateDom = this.$refs.dueDateDom;
    this.calendar = flatpickr(this.dateDom, {
      minDate: 'today',
      maxDate: new Date().fp_incr(365),
      wrap: true,
    });
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
  },
};
</script>

<style lang="scss"></style>
