<script>
import { mapActions, mapState } from 'pinia';
import getDataStore from '@/stores/GetDataStore';
import PaginationComponent from '@/components/PaginationComponent.vue';
import CouponModal from '@/components/dashboard/CouponModal.vue';

export default {
  components: { PaginationComponent, CouponModal },
  data() {
    return {
      coupons: [],
      couponInfo: {},
      editStatus: null,
    };
  },
  methods: {
    ...mapActions(getDataStore, ['getRemoteData']),
    getCoupon(couponInfo, editStatus) {
      this.couponInfo = couponInfo;
      this.editStatus = editStatus;
    },
    getNewData() {
      const page = this.pagination.current_page;
      this.getRemoteData('coupons', page, false);
    },
  },
  computed: {
    ...mapState(getDataStore, ['targetData', 'pagination']),
  },
  watch: {
    targetData(coupons) {
      this.coupons = coupons;
    },
  },
  mounted() {
    this.getRemoteData('coupons', 1, false);
  },
};
</script>

<template>
  <div class="container">
    <h2 class="fs-3 fw-normal ls-0 mb-md-0 text-center">
      <span>優惠券管理</span>
    </h2>
    <div class="text-center text-md-end mb-3">
      <button
        type="button"
        class="btn btn-gray-3 py-1 shadow-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
        @click="getCoupon({}, 1)"
      >
        <span class="icon-base icon-sm icon-add me-1 bg-white align-text-top"></span>
        <span>新增優惠券</span>
      </button>
    </div>
    <div v-if="coupons.length !== 0" class="table-responsive mb-5">
      <table class="table table-hover text-center align-middle ls-0" style="min-width: 620px">
        <thead>
          <tr class="table-gray-4">
            <th scope="col" width="52px"></th>
            <th scope="col" class="d-none d-lg-table-cell" width="220px">編號</th>
            <th scope="col">標題</th>
            <th scope="col">代碼</th>
            <th scope="col">折扣趴數</th>
            <th scope="col">到期日</th>
            <th scope="col" width="90px">適用狀態</th>
            <th scope="col" width="75px"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>
              <button
                type="button"
                class="btn btn-sm btn-outline-danger border-0 p-1"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
                @click="getCoupon(coupon, 0)"
              >
                <span class="icon-base icon-sm icon-trash"></span>
              </button>
            </td>
            <td class="fs-8 fs-lg-7 ls-0 text-start d-none d-lg-table-cell">
              {{ coupon.id }}
            </td>
            <td>
              <h3 class="small fs-lg-7 fw-normal mb-0">{{ coupon.title }}</h3>
            </td>
            <td class="small fs-lg-7">{{ coupon.code }}</td>
            <td class="fw-semibold">
              {{ coupon.percent }}
            </td>
            <td class="fs-8 fs-lg-7 ls-0">{{ coupon.due_date_str }}</td>
            <td>
              <p class="fs-7 fs-lg-6">
                <span
                  class="badge"
                  :class="{ 'bg-success': coupon.is_enabled, 'bg-danger': !coupon.is_enabled }"
                >
                  {{ coupon.is_enabled ? '可使用' : '已禁用' }}
                </span>
              </p>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-sm py-1 btn-outline-dark fw-normal"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
                @click="getCoupon(coupon, 2)"
              >
                編輯
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h2 class="fs-6 fw-light text-center">
        <span class="line-loading-loop bg-gray-3 align-top"></span>
        資料讀取中請稍後
      </h2>
    </div>
    <PaginationComponent :now-target="'coupons'" :is-user="false"></PaginationComponent>
  </div>
  <CouponModal
    :coupon-info="couponInfo"
    :edit-status="editStatus"
    @need-get-new-data="getNewData"
  />
</template>

<style lang="scss"></style>
