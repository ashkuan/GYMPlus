<template>
  <div class="container">
    <h2 class="fs-3 fw-normal mb-5 ls-0 text-center">訂單管理</h2>
    <!-- <div class="text-center text-md-end mb-3">
      <button
        type="button"
        class="btn btn-outline-danger py-1 border-2"
        data-bs-toggle="modal"
        data-bs-target="#"
      >
        <span class="icon-base icon-sm icon-trash align-text-top me-1 bg-danger"></span>
        <span>清空訂單</span>
      </button>
    </div> -->
    <div v-if="orders.length !== 0" class="table-responsive mb-5">
      <table class="table table-hover text-center align-middle ls-0" style="min-width: 760px">
        <thead>
          <tr class="table-gray-4">
            <th scope="col" width="52px"></th>
            <th scope="col" width="210px">訂單編號</th>
            <th scope="col" class="d-none d-xl-table-cell">成立日期</th>
            <th scope="col">訂購人</th>
            <th scope="col">訂單狀態</th>
            <th scope="col">付款狀態</th>
            <th scope="col" width="90px">訂單總額</th>
            <th scope="col" width="75px"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="order.id">
            <td>
              <button
                type="button"
                class="btn btn-sm btn-outline-danger border-0 p-1"
                data-bs-toggle="modal"
                data-bs-target="#orderDelModal"
                @click="getOrder(order.id)"
              >
                <span class="icon-base icon-sm icon-trash"></span>
              </button>
            </td>
            <td>
              <a
                href="#"
                @click.prevent="getOrder(order.id, perOrderStates[index].isfinished)"
                data-bs-toggle="modal"
                data-bs-target="#orderEditModal"
              >
                <h3 class="small fs-lg-7 fw-normal text-start ls-0 mb-0">{{ order.id }}</h3>
              </a>
            </td>
            <td class="fs-8 fs-lg-7 d-none d-xl-table-cell ls-0">{{ UnixtoText[index] }}</td>
            <td class="small fs-lg-7 ls-0">{{ order.user.name }}</td>
            <td>
              <p class="fs-7 fs-lg-6">
                <span
                  class="badge mx-1"
                  :class="{
                    'bg-warning': !perOrderStates[index].isfinished,
                    'bg-gray-3 bg-opacity-75': perOrderStates[index].isfinished,
                  }"
                >
                  {{ perOrderStates[index].isfinished ? '結案' : '未結案' }}
                </span>
                <span
                  v-if="perOrderStates[index].isTeaching"
                  class="badge bg-success bg-opacity-75 mx-1"
                >
                  授課中
                </span>
                <span
                  v-if="!perOrderStates[index].isTeaching && perOrderStates[index].isComeingSoon"
                  class="badge bg-primary bg-opacity-50 mx-1"
                >
                  即將開課
                </span>
                <span
                  v-else-if="
                    !perOrderStates[index].isComeingSoon && !perOrderStates[index].isfinished
                  "
                  class="badge bg-transparent text-secondary border border-secondary mx-1"
                >
                  等待開課
                </span>
              </p>
            </td>
            <td>
              <p class="fs-7 fs-lg-6">
                <span
                  class="badge"
                  :class="{ 'bg-danger': !order.is_paid, 'bg-success': order.is_paid }"
                >
                  {{ order.is_paid ? '完成付款' : '未付款' }}
                </span>
              </p>
            </td>
            <td class="text-end fw-semibold">
              {{ addSeparator(order.total) }}
            </td>
            <td>
              <button
                type="button"
                class="btn btn-sm py-1 btn-outline-dark fw-normal"
                data-bs-toggle="modal"
                data-bs-target="#orderEditModal"
                @click="getOrder(order.id), (needEnit = true)"
                :disabled="perOrderStates[index].isfinished"
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
    <PaginationComponent :now-target="'orders'" :is-user="false"></PaginationComponent>
    <OrderEditModal
      :single-order="singleOrder"
      :need-enit="needEnit"
      :is-order-finished="isOrderFinished"
      @update-need-enit="updateNeedEnit"
    ></OrderEditModal>
    <OrderDelModal :single-order="singleOrder"></OrderDelModal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import getDataStore from '@/stores/GetDataStore';
import OrderEditModal from '@/components/dashboard/OrderEditModal.vue';
import OrderDelModal from '@/components/dashboard/OrderDelModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
  components: { PaginationComponent, OrderEditModal, OrderDelModal },
  data() {
    return {
      orders: [],
      singleOrder: {},
      needEnit: false,
      isOrderFinished: false,
    };
  },
  methods: {
    ...mapActions(getDataStore, ['getRemoteData', 'addSeparator']),
    getOrder(id, isfinished = false) {
      this.isOrderFinished = isfinished;
      this.singleOrder = this.orders.find((order) => order.id === id);
    },
    updateNeedEnit(boolean) {
      this.needEnit = boolean;
    },
  },
  computed: {
    ...mapState(getDataStore, ['targetData']),
    UnixtoText() {
      return this.targetData.map((order) => {
        const date = new Date(order.create_at * 1000);
        let dateTextArr = date.toLocaleDateString().split('/');
        dateTextArr = dateTextArr.map((time) => (time.length < 4 ? time.padStart(2, '0') : time));
        return dateTextArr.join('-');
      });
    },
    perOrderCourses() {
      return this.targetData.map((order) => {
        const coursesArr = Object.values(order.products).map((ele) => ele.product);
        return coursesArr;
      });
    },
    perOrderStates() {
      return this.perOrderCourses.map((order) => {
        const coursesTime = order.map((productInfo) => productInfo['time-unix']).sort();
        const { nowDate } = this;
        const isfinished = !(coursesTime[coursesTime.length - 1] > nowDate);
        const isTeaching = !!coursesTime.find((time) => time > nowDate && time - nowDate < 86400);
        const WithinSevenDays = coursesTime.filter(
          (time) => time - 86400 * 7 < nowDate && time > nowDate,
        );
        const isComeingSoon = WithinSevenDays.length !== 0;
        return { isfinished, isTeaching, isComeingSoon };
      });
    },
    nowDate() {
      const date = new Date();
      return (
        new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`).getTime() / 1000
      );
    },
  },
  watch: {
    targetData(vaule) {
      this.orders = vaule;
    },
  },
  mounted() {
    this.getRemoteData('orders', 1, false);
  },
};
</script>

<style lang="scss"></style>
