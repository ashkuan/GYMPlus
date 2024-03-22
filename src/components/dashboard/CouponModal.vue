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
          <h3 class="modal-title fs-5 fw-medium text-white">
            <span>{{ status }}優惠券</span>
            <span class="ls-0 fs-6" v-if="coupon.id">：{{ coupon.id }}</span>
          </h3>
        </div>
        <div class="modal-body p-5">
          <div v-show="status !== '刪除'">
            <form class="admin-form container-fluid px-6 d-flex flex-column">
              <div class="row g-3 mb-3 align-items-center">
                <label for="title" class="col-3 form-label">標題</label>
                <div class="col">
                  <input
                    type="text"
                    id="title"
                    class="form-control form-control-sm"
                    placeholder="請輸入標題"
                    v-model="coupon.title"
                  />
                </div>
              </div>
              <div class="row g-3 mb-3 align-items-center">
                <label for="code" class="col-3 form-label">折扣碼</label>
                <div class="col">
                  <input
                    type="text"
                    id="code"
                    class="form-control form-control-sm"
                    placeholder="請輸入折扣代碼"
                    v-model="coupon.code"
                  />
                </div>
              </div>
              <div class="row g-3 mb-3 align-items-center">
                <label for="percent" class="col-3 form-label">折扣趴數</label>
                <div class="col">
                  <input
                    type="number"
                    id="percent"
                    class="form-control form-control-sm"
                    placeholder="請輸入折扣趴數"
                    v-model.number="coupon.percent"
                    min="0"
                  />
                </div>
              </div>
              <div class="row g-3 mb-3 align-items-center flatpickr" ref="dueDate">
                <label for="dueDate" class="col-3 form-label">到期日</label>
                <div class="col input-group input-group-sm">
                  <input
                    type="text"
                    id="dueDate"
                    data-input
                    class="form-control"
                    placeholder="請輸入到期日"
                    v-model="coupon.due_date_str"
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
              <div class="ms-auto">
                <div class="form-check">
                  <input
                    type="checkbox"
                    id="is_enabled"
                    class="form-check-input"
                    v-model="coupon.is_enabled"
                    true-value="1"
                    false-value="0"
                  />
                  <label for="is_enabled" class="form-label">啟用優惠券</label>
                </div>
              </div>
            </form>
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
                  <span class="ls-0">{{ dueDateStr }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 shadow shadow-top">
          <button
            type="button"
            class="btn btn-outline-gray-3 flex-grow-1 flex-md-grow-0 me-2"
            data-bs-dismiss="modal"
          >
            關閉視窗
          </button>
          <button
            type="button"
            class="btn flex-grow-1 flex-md-grow-0"
            :class="[status === '刪除' ? 'btn-danger' : 'btn-gray-1']"
            @click="editCoupon(coupon.id)"
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
      coupon: {
        is_enabled: 0,
      },
      nowStatus: null,
      isEniting: false,
    };
  },
  methods: {
    ...mapActions(GetDataStore, ['getRemoteData']),
    ...mapActions(AlertStore, ['basicContent']),
    // 包含新增、編輯、刪除
    editCoupon(id) {
      this.isEniting = !this.isEniting;
      const { coupon, nowStatus } = this;
      coupon.is_enabled = parseInt(coupon.is_enabled, 10);
      coupon.due_date = new Date(coupon.due_date_str).getTime() / 1000;
      let obj = { data: { ...coupon } };
      let method = 'post';
      if (nowStatus === 2) {
        method = `put`;
      } else if (!nowStatus) {
        obj = null;
        method = 'delete';
      }
      this.axios[method](`${this.url}api/${this.path}/admin/coupon${id ? `/${id}` : ''}`, obj)
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
    dueDateStr() {
      const dateObj = new Date(this.coupon.due_date * 1000);
      const month = `${dateObj.getMonth() + 1}`.padStart(2, '0');
      const date = `${dateObj.getDate()}`.padStart(2, '0');
      return `${dateObj.getFullYear()}-${month}-${date}`;
    },
  },
  watch: {
    editStatus(status) {
      this.nowStatus = status;
    },
    couponInfo(newCoupon) {
      const isAddCoupon = !Object.keys(newCoupon).length;
      this.coupon = this.$options.data().coupon;
      if (!isAddCoupon) {
        this.coupon = { ...this.coupon, ...newCoupon };
      }
    },
  },
  mounted() {
    this.couponModal = new bootstrap.Modal(this.$refs.couponModal);
    this.dateDom = this.$refs.dueDate;
    flatpickr(this.dateDom, {
      minDate: 'today',
      maxDate: new Date().fp_incr(180),
      wrap: true,
    });
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
  },
};
</script>

<style lang="scss"></style>
