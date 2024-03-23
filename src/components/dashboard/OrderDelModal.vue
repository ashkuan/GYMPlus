<template>
  <div class="modal fade" ref="orderDelModal" id="orderDelModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-linear-danger py-3">
          <h3 class="modal-title fs-6 fs-sm-5 fw-medium text-white">刪除訂單</h3>
        </div>
        <div class="modal-body p-5">
          <div class="container-fluid">
            <div class="row">
              <h4 class="fs-6">確定要刪除訂單？</h4>
              <div class="col-sm-7">
                <h5 class="fs-7 fw-normal text-center bg-light mb-2 rounded-2 py-1">訂購資訊</h5>
                <ul class="list-group list-group-flush small mb-0">
                  <li class="list-group-item ls-0 px-0">訂單編號：{{ order.id }}</li>
                  <li class="list-group-item px-0">
                    訂購人：
                    <span class="ls-0">{{ order?.user?.name }}</span>
                  </li>
                  <li class="list-group-item px-0">
                    電話：
                    <span class="ls-0">{{ order?.user?.tel }}</span>
                  </li>
                  <li class="list-group-item px-0">
                    信箱：
                    <span class="ls-0">{{ order?.user?.email }}</span>
                  </li>
                </ul>
              </div>
              <div class="col-sm-5">
                <h5 class="fs-7 fw-normal text-center bg-light mb-2 rounded-2 py-1">訂單內容</h5>
                <ul class="list-unstyled mb-0">
                  <li
                    v-for="course in courses"
                    :key="course.product_id"
                    class="d-flex align-items-start small py-2"
                  >
                    <span class="bg-secondary d-inline-block rounded-circle me-1">
                      <span
                        class="icon-base icon-left-arrow m-1 bg-white"
                        style="width: 14px; height: 14px"
                      ></span>
                    </span>
                    {{ course.product.title }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 shadow shadow-top">
          <button
            type="button"
            class="btn btn-outline-gray-3 btn-sm flex-grow-1 flex-sm-grow-0 me-2"
            data-bs-dismiss="modal"
          >
            關閉視窗
          </button>
          <button
            type="button"
            class="btn btn-danger btn-sm flex-grow-1 flex-sm-grow-0"
            @click="delOerder(order.id)"
            :disabled="isDelingOrder"
          >
            <span v-show="isDelingOrder" class="line-loading-loop bg-white"></span>
            確認刪除
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
  props: ['singleOrder'],
  data() {
    return {
      url: '',
      path: '',
      delModal: null,
      isDelingOrder: false,
      order: {},
    };
  },
  methods: {
    ...mapActions(GetDataStore, ['getRemoteData']),
    ...mapActions(AlertStore, ['basicContent']),
    delOerder(id) {
      this.isDelingOrder = !this.isDelingOrder;
      this.axios
        .delete(`${this.url}/api/${this.path}/admin/order/${id}`)
        .then((res) => {
          this.alertStyles.basic.fire({
            ...this.basicContent(res.data.message, 1),
            didClose: () => {
              this.delModal.hide();
              this.isDelingOrder = !this.isDelingOrder;
              this.getRemoteData('orders', this.pagination.current_page, false);
            },
          });
        })
        .catch((err) => {
          this.alertStyles.basic.fire(this.basicContent(err.response.data.message, 2));
          this.delModal.hide();
          this.isDelingOrder = !this.isDelingOrder;
        });
    },
  },
  computed: {
    ...mapState(GetDataStore, ['pagination']),
    ...mapState(AlertStore, ['alertStyles']),
    courses() {
      const { products } = this.order;
      return products ? Object.values(products) : [];
    },
  },
  watch: {
    singleOrder(newOrder) {
      this.order = JSON.parse(JSON.stringify(newOrder));
    },
  },
  mounted() {
    this.delModal = new bootstrap.Modal(this.$refs.orderDelModal);
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
  },
};
</script>

<style lang="scss"></style>
