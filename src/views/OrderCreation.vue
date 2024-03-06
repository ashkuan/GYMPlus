<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-light" style="min-height: 100vh;">
    <div class="container">
      <nav aria-label="breadcrumb" class="pt-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="mx-2">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">訂單確認</li>
        </ol>
      </nav>
    </div>
    <main class="container" v-if="!isLoading">
      <section class="pt-5">
        <div class="row justify-content-center">
          <div class="col-9 col-md-7 timeLine"></div>
        </div>
        <div class="row mt-6 g-0">
          <div class="col-3 col-md-5">
            <div class="text-center step step_1 active">確認商品</div>
          </div>
          <div class="col-6 col-md-2">
            <div class="text-center step step_2 active">填寫資料</div>
          </div>
          <div class="col-3 col-md-5">
            <div class="text-center step step_3 active">訂單確認</div>
          </div>
        </div>
      </section>
      <section class="pt-5">
        <table class="table table-bordered table-hover align-middle">
          <tbody>
            <tr>
              <th>訂單時間</th>
              <td>{{ orderTime }}</td>
            </tr>
            <tr>
              <th>訂單編號</th>
              <td>{{ orderId }}</td>
            </tr>
            <tr>
              <th>訂購人姓名</th>
              <td>{{ order?.user?.name }}</td>
            </tr>
            <tr>
              <th>聯絡信箱</th>
              <td>{{ order?.user?.email }}</td>
            </tr>
            <tr>
              <th>聯絡電話</th>
              <td>{{ order?.user?.tel }}</td>
            </tr>
            <tr>
              <th>地址</th>
              <td>{{ order?.user?.address }}</td>
            </tr>
            <tr>
              <th>商品清單</th>
              <td class="text-break">{{ order?.user?.cartTitle }}</td>
            </tr>
            <tr>
              <th>訂單總計</th>
              <td>NT$ {{ order?.total }}</td>
            </tr>
            <tr>
              <th>折價卷</th>
              <td>{{ coupon === '' ? '未使用優惠卷' : coupon }}</td>
            </tr>
            <tr>
              <th>備註</th>
              <td>{{ order?.message }}</td>
            </tr>
            <tr>
              <th>付款方式</th>
              <td>{{ order?.user?.payment === 'credit-card' ? '信用卡付款' : '銀行轉帳' }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td :class="[order?.is_paid ? 'text-success' : '' ]">
                {{ order?.is_paid ? '已完成付款' : '審核中...' }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colspan="2">
                <div class="d-flex justify-content-center">
                  <button type="button" v-if="order?.is_paid"
                 class="btn btn-outline-success btn-lg rounded"
                 @click.prevent="this.$router.push('/');">返回首頁</button>
                  <button type="button" v-else
                 class="btn btn-outline-danger btn-lg rounded"
                 @click.prevent="payOrder">完成訂單</button>

                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  props: ['id'],
  data() {
    return {
      url: '',
      path: '',
      order: {},
      orderTime: '',
      orderId: '',
      coupon: '',
      isLoading: true,
    };
  },
  methods: {
    formatUnixTimestamp(time) { // 轉換為訂單時間
      const date = new Date(time * 1000);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
      return formattedDate;
    },
    formatOrderNumber(time) { // 轉換為訂單編號
      const date = new Date(time * 1000);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      const orderNumber = `${year}${month}${day}${hours}${minutes}${seconds}`;

      return orderNumber;
    },
    getData() {
      this.axios
        .get(`${this.url}api/${this.path}/order/${this.id}`)
        .then((res) => {
          this.order = { ...res.data.order };
          this.orderTime = this.formatUnixTimestamp(this.order.create_at);
          this.orderId = this.formatOrderNumber(this.order.create_at);
          // 取出order products的第一筆物件資料
          const { products } = this.order;
          const keys = Object.keys(products);
          const firstKey = keys[0];
          const firstValue = products[firstKey];
          if (Object.prototype.hasOwnProperty.call(firstValue, 'coupon')) { // 判斷物件是否有coupon這個key
            this.coupon = firstValue.coupon.title;
          }
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        });
    },
    payOrder() {
      this.axios.post(`${this.url}api/${this.path}/pay/${this.id}`)
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              icon: 'success',
              title: '系統通知',
              text: '謝謝您的訂購!',
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(() => {
              this.$router.push('/');
            }, 1500);
          }
        });
    },
  },
  components: {
    Loading,
  },
  mounted() {
    window.scrollTo(0, 0);
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    this.getData();
  },
};
</script>
