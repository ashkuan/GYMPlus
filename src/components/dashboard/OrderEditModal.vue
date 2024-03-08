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
          <h3 class="modal-title fs-5 fw-medium text-white" id="productModal">
            {{ needEnit ? `編輯訂單` : `訂單詳細` }}：
            <span class="ls-0">{{ order.id }}</span>
          </h3>
        </div>
        <div class="modal-body p-5">
          <div class="container-fluid">
            <h4 class="fs-6 mb-0">訂單內容</h4>
            <form class="row admin-form">
              <div class="col-md-4 ms-auto mb-3">
                <div class="row align-items-center text-end">
                  <label for="status" class="form-label col-5">付款狀態</label>
                  <select
                    class="form-select form-select-sm col"
                    id="status"
                    v-model="order.is_paid"
                  >
                    <option value="true">已付款</option>
                    <option value="false">未付款</option>
                  </select>
                </div>
              </div>
              <table class="table text-center align-middle small">
                <thead>
                  <tr class="table-light">
                    <th scope="col" width="52px"></th>
                    <th scope="col">課程編號</th>
                    <th scope="col" class="d-none d-lg-table-cell">縮圖</th>
                    <th scope="col">標題</th>
                    <th scope="col">教練</th>
                    <th scope="col">上課時間</th>
                    <th scope="col">價格</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="course in courses" :key="course.id">
                    <td>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-danger border-0 p-1"
                        @click="delCourse(course.id)"
                      >
                        <span class="icon-base icon-sm icon-trash"></span>
                      </button>
                    </td>
                    <td class="ls-0 mb-0">
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
                </tbody>
              </table>
              <div>
                <div class="row small">
                  <div class="col-md-7">
                    <p class="mb-2">客戶留言：{{ order.message ? order.message : '無' }}</p>
                    <label for="description" class="form-label mb-1">備註事項：</label>
                    <textarea
                      id="description"
                      class="form-control form-control-sm"
                      placeholder="記錄訂單備註"
                      style="height: 80px"
                      v-model="order.description"
                    ></textarea>
                  </div>
                  <div class="col-md-4 ms-auto">
                    <ul class="list-unstyled text-end">
                      <li class="py-1 mb-3">
                        套用優惠券：{{ couponTitle ? couponTitle : '未使用' }}
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
                </div>
              </div>
            </form>
            <hr class="my-5" />
            <h4 class="fs-6 mb-0">客戶資訊</h4>
            <div class="row gx-2 justify-content-end">
              <ul class="col-md-10 list-group list-group-flush row flex-row small">
                <li class="col-6 list-group-item">稱呼：{{ userInfo.name }}</li>
                <li class="col-6 list-group-item">
                  電話：
                  <a :href="`tel:${userInfo.tel}`"></a>
                  {{ userInfo.tel }}
                </li>
                <li class="col-6 list-group-item">付款方式：{{ userInfo.payment }}</li>
                <li class="col-6 list-group-item">信箱：{{ userInfo.email }}</li>
                <li class="col list-group-item">聯絡地址：{{ userInfo.address }}</li>
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
            class="btn btn-gray-1 flex-grow-1 flex-md-grow-0"
            @click="editCourse(order.id, editModal)"
            :disabled="false"
          >
            <span v-show="false" class="line-loading-loop bg-white"></span>
            更新訂單
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
// import { mapActions, mapState } from 'pinia';
// import adminCourseStore from '@/stores/dashboard/AdminCourseStore';

export default {
  props: ['singleOrder', 'needEnit'],
  data() {
    return {
      isImgArr: false,
      categories: ['瑜珈', '有氧運動', '重量訓練'],
      coachs: ['Emma', 'Alex', 'Dhalsim', 'Olivia Chang', 'Jackson Liu'],
      targets: ['年長者', '初學者', '親子', '進階', '健力', '復健', '體態維持'],
      isAddingToCart: false,
      editModal: {},
      //
      order: {},
    };
  },
  methods: {
    // ...mapActions(adminCourseStore, [
    //   'getCourse',
    //   'resetTemp',
    //   'editCourse',
    //   'getImgFile',
    //   'uploadImg',
    // ]),
    delCourse(id) {
      console.log(id);
    },
  },
  computed: {
    // ...mapState(adminCourseStore, ['temp', 'isEditingCourse', 'isAddingImg']),
    courses() {
      const { products } = this.order;
      return products ? Object.values(this.order.products) : [];
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
      this.order = newOrder;
      console.log(this.order);
    },
  },
  mounted() {
    this.editModal = new bootstrap.Modal(this.$refs.orderEditModal);
    const danglingStr = '_element';
    this.editModal[danglingStr].addEventListener('hidden.bs.modal', () => {
      this.$emit('updateNeedEnit', false);
      // this.resetTemp();
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
