<template>
  <div
    ref="orderEditModal"
    class="modal fade"
    id="orderEditModal"
    tabindex="-1"
    aria-labelledby="orderEditModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-linear py-3">
          <h3 class="modal-title fs-6 fs-sm-5 fw-medium text-white" id="productModal">
            {{ isEnitModel ? `編輯訂單` : `訂單詳細` }}
            <span class="ls-0 small fs-sm-6">：{{ order.id }}</span>
          </h3>
        </div>
        <div class="modal-body p-5">
          <div class="container-fluid">
            <h4 class="fs-6 mb-0">訂單內容</h4>
            <form class="row admin-form">
              <div class="col-6 col-lg-4 ms-auto mb-3">
                <div class="row align-items-center text-end justify-content-end">
                  <label for="status" class="form-label col-5">付款狀態</label>
                  <select
                    class="form-select form-select-sm col"
                    id="status"
                    v-if="isEnitModel"
                    v-model="order.is_paid"
                  >
                    <option value="true">已付款</option>
                    <option value="false">未付款</option>
                  </select>
                  <span
                    v-else
                    class="badge col-4"
                    :class="[order.is_paid ? 'bg-success' : 'bg-danger']"
                  >
                    {{ order.is_paid ? '已付款' : '未付款' }}
                  </span>
                </div>
              </div>
              <div class="table-responsive mb-3">
                <table
                  class="table text-center align-middle small"
                  :style="[isEnitModel ? 'min-width: 500px' : 'min-width: 400px']"
                >
                  <thead>
                    <tr class="table-light">
                      <th scope="col" width="52px" :class="{ 'd-none': !isEnitModel }"></th>
                      <th scope="col" class="d-none d-lg-table-cell">課程編號</th>
                      <th scope="col" class="d-none d-lg-table-cell">縮圖</th>
                      <th scope="col">標題</th>
                      <th scope="col">教練</th>
                      <th scope="col">上課時間</th>
                      <th scope="col">價格</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="course in courses" :key="course.id">
                      <td :class="{ 'd-none': !isEnitModel }">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-danger border-0 p-1"
                          @click="delCourse(course.id)"
                        >
                          <span class="icon-base icon-sm icon-trash"></span>
                        </button>
                      </td>
                      <td class="ls-0 d-none d-lg-table-cell">
                        {{ course.product_id }}
                      </td>
                      <td class="d-none d-lg-table-cell">
                        <img
                          :src="course.product.imageUrl"
                          :alt="course.product.title"
                          style="width: 75px; height: 54px"
                        />
                      </td>
                      <td>
                        <h3 class="small fw-normal mb-0">{{ course.product.title }}</h3>
                      </td>
                      <td class="ls-0">{{ course.product.coach }}</td>
                      <td class="ls-0">{{ course.product.time }}</td>
                      <td class="fw-semibold">
                        <span :class="{ 'text-danger ': course.price < course.final_total }">
                          {{ course.total }}
                        </span>
                      </td>
                    </tr>
                    <tr v-if="isDeledProduct" class="border-white">
                      <td colspan="7">
                        <button
                          type="button"
                          class="btn btn-sm btn-light px-6"
                          @click="rollbackCourse"
                        >
                          復原
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="row">
                  <div class="col-lg-4 ms-auto order-lg-2">
                    <ul class="list-unstyled text-end fs-8 small-lg">
                      <li class="mb-3">
                        <span class="py-2 px-3 d-inline-block bg-light rounded-2">
                          套用優惠券：{{ couponTitle ? couponTitle : '未使用' }}
                        </span>
                      </li>
                      <li class="row gx-2 py-1">
                        <span class="col-9">優惠券折扣：</span>
                        <span
                          class="col fw-semibold"
                          :class="{ 'text-danger': order.total < originTotal }"
                        >
                          {{ order.total - originTotal }}
                        </span>
                      </li>
                      <li class="row gx-2 py-1">
                        <span class="col-9">課程總金額：</span>
                        <span class="col fw-semibold">{{ originTotal }}</span>
                      </li>
                      <li class="row gx-2 py-1">
                        <span class="col-9">訂單總計：</span>
                        <span class="col fw-semibold">{{ order.total }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-7 order-lg-1">
                    <hr class="d-lg-none my-5" />
                    <p class="d-flex mb-2 small">
                      <span class="d-inline-block" style="min-width: 75px">客戶留言：</span>
                      <span :class="{ 'text-gray-4': !order.message }">
                        {{ order.message ? order.message : '無' }}
                      </span>
                    </p>
                    <label for="description" class="form-label d-flex mb-1">
                      <span class="d-inline-block" style="min-width: 75px">備註事項：</span>
                      <span :class="{ 'text-gray-4': !order.remark }">
                        {{ isEnitModel ? '' : order.remark ? order.remark : '無' }}
                      </span>
                    </label>
                    <textarea
                      v-if="isEnitModel"
                      id="description"
                      class="form-control form-control-sm"
                      placeholder="記錄訂單備註"
                      style="height: 80px"
                      v-model="order.remark"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
            <hr class="my-5" />
            <h4 class="fs-6 mb-lg-0">客戶資訊</h4>
            <div class="row gx-2 justify-content-center justify-content-lg-end">
              <ul class="col-9 col-lg-10 list-group list-group-flush row flex-row small">
                <li class="col-lg-6 list-group-item">稱呼：{{ userInfo.name }}</li>
                <li class="col-lg-6 list-group-item">
                  電話：
                  <a :href="`tel:${userInfo.tel}`">{{ userInfo.tel }}</a>
                </li>
                <li class="col-lg-6 list-group-item">付款方式：{{ userInfo.payment }}</li>
                <li class="col-lg-6 list-group-item">
                  信箱：
                  <a :href="`mailto:${userInfo.email}`">{{ userInfo.email }}</a>
                </li>
                <li class="col list-group-item">聯絡地址：{{ userInfo.address }}</li>
              </ul>
            </div>
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
            v-show="isEnitModel"
            type="button"
            class="btn btn-sm btn-gray-1 flex-grow-1 flex-lg-grow-0"
            @click="editOrder(order.id)"
            :disabled="isEniting"
          >
            <span v-show="isEniting" class="line-loading-loop bg-white"></span>
            更新訂單
          </button>
          <button
            v-show="!isEnitModel && !isOrderFinished"
            type="button"
            class="btn btn-sm btn-gray-1 flex-grow-1 flex-lg-grow-0"
            @click="isEnitModel = !isEnitModel"
          >
            前往編輯
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

export default {
  props: ['singleOrder', 'needEnit', 'isOrderFinished'],
  data() {
    return {
      url: '',
      path: '',
      editModal: null,
      order: {
        remark: '',
      },
      temporaryProducts: {},
      isDeledProduct: false,
      isEnitModel: false,
      isEniting: false,
    };
  },
  methods: {
    ...mapActions(GetDataStore, ['getRemoteData']),
    ...mapActions(AlertStore, ['basicContent']),
    editOrder(id) {
      this.isEniting = !this.isEniting;
      this.order.is_paid = this.order.is_paid === 'true';
      const data = { data: { ...this.order } };
      this.axios
        .put(`${this.url}/api/${this.path}/admin/order/${id}`, data)
        .then((res) => {
          this.alertStyles.basic.fire({
            ...this.basicContent(res.data.message, 1),
            didClose: () => {
              this.editModal.hide();
              this.isEniting = !this.isEniting;
              this.getRemoteData('orders', this.pagination.current_page, false);
            },
          });
        })
        .catch((err) => {
          this.alertStyles.basic.fire(this.basicContent(err.response.data.message, 2));
          this.editModal.hide();
          this.isEniting = !this.isEniting;
        });
    },
    delCourse(id) {
      if (this.courses.length === 1) {
        this.alertStyles.basic.fire(this.basicContent('最後一筆資料，請直接刪除訂單。', 3));
      } else {
        this.isDeledProduct = true;
        delete this.order.products[id];
        this.order.total = this.courses.reduce((acc, ele) => acc + ele.final_total, 0);
      }
    },
    rollbackCourse() {
      const courses = Object.values(this.temporaryProducts);
      this.order.products = JSON.parse(JSON.stringify(this.temporaryProducts));
      this.order.total = courses.reduce((acc, ele) => acc + ele.final_total, 0);
      this.isDeledProduct = false;
    },
  },
  computed: {
    ...mapState(GetDataStore, ['pagination']),
    ...mapState(AlertStore, ['alertStyles']),
    courses() {
      const { products } = this.order;
      return products ? Object.values(products) : [];
    },
    originTotal() {
      return this.courses.reduce((acc, ele) => acc + ele.total, 0);
    },
    couponTitle() {
      return this.courses.length && this.courses[0].coupon ? this.courses[0].coupon.title : '';
    },
    userInfo() {
      const { user } = this.order;
      if (user) {
        switch (user.payment) {
          case 'credit-card':
            user.payment = '信用卡';
            break;
          case 'bank-account':
            user.payment = '銀行轉帳';
            break;
          default:
            break;
        }
      }
      return user || {};
    },
  },
  watch: {
    singleOrder(newOrder) {
      this.order = JSON.parse(JSON.stringify(newOrder));
      // 儲存 producs (復原用)
      this.temporaryProducts = JSON.parse(JSON.stringify(this.order.products));
    },
    needEnit(boolean) {
      this.isEnitModel = boolean;
    },
  },
  mounted() {
    // modal 操作
    this.editModal = new bootstrap.Modal(this.$refs.orderEditModal);
    const danglingStr = '_element';
    this.editModal[danglingStr].addEventListener('hidden.bs.modal', () => {
      this.isEnitModel = false;
      this.isDeledProduct = false;
      this.rollbackCourse();
      this.$emit('updateNeedEnit', this.isEnitModel);
    });
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
  },
};
</script>

<style lang="scss"></style>
