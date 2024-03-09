<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-white" style="min-height: 100vh">
    <div class="container">
      <nav aria-label="breadcrumb" class="pt-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="mx-2">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">購物車</li>
        </ol>
      </nav>
    </div>
    <main>
      <div class="container my-8 my-md-10">
        <section class="my-6">
        <div class="row justify-content-center">
          <div class="col-9 col-md-7 timeLine"></div>
        </div>
        <div class="row mt-6 g-0">
          <div class="col-3 col-md-5">
            <div class="text-center step step_1 active">確認商品</div>
          </div>
          <div class="col-6 col-md-2">
            <div class="text-center step step_2">填寫資料</div>
          </div>
          <div class="col-3 col-md-5">
            <div class="text-center step step_3">訂單確認</div>
          </div>
        </div>
      </section>
      <section class="pb-5">
        <h2 class="text-center">購物車列表</h2>
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="card shadow">
              <div class="card-body">
                <div class="d-flex flex-column justify-content-center align-items-center"
                v-if="this.carts.length === 0">
                  <img src="../assets/icon/cartIcon.svg" alt="cartIcon" class="w-25">
                  <h3>尚未加入課程</h3>
                </div>
                <table class="table align-middle table-hover" v-else>
                  <thead>
                    <tr>
                      <th></th>
                      <th class="d-none d-md-table-cell"></th>
                      <th class="text-start">課程名稱</th>
                      <th>金額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in carts" :key="item.id">
                      <td><button type="button" class="btn btn-outline-danger rounded"
                    @click.prevent="delCart(item.id, item?.product?.title)">
                    <img src="../assets/icon/delecticon.svg" alt="deleteIcon">
                  </button></td>
                  <td style="width: 200px;" class="d-none d-md-table-cell">
                    <img
                      :src="item?.product?.imageUrl"
                      alt="img"
                      class="img-fluid"
                    />
                  </td>
                  <td>{{ item?.product?.title }}</td>
                  <td class="text-end">
                    <div class="d-flex">
                      <p class="card-text mb-0 text-decoration-line-through text-nowrap">
                      $ {{ item?.product?.origin_price }}
                    </p>
                    <span class="px-3 text-nowrap">$ {{ item?.product?.price }}</span>
                    </div>
                  </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row" colspan="2" class="border-0">
                        <button type="button"
                   class="btn btn-outline-danger btn-lg rounded my-3"
                   @click.prevent="delAllCart">刪除全部</button>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
                <div class="container row align-items-center mb-4">
                  <div class="col-12 col-md-6 ">
                    <div class="input-group">
  <input type="text" class="form-control"
   placeholder="請輸入優惠卷代碼"
    aria-label="Recipient's username" aria-describedby="button-addon2" v-model="this.code"
    :disabled="this.isconponStatus || this.carts.length === 0">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2"
  @click.prevent="addCouponCode"
   :disabled="this.isconponStatus || this.carts.length === 0">套用</button>
</div>
                  </div>
                  <div class="col-12 col-md-6 my-2 my-md-0">
                    <p class="mb-0 text-center text-md-start"
                    :class="[ this.conponTitle === '' ? '' : 'text-success' ]">
                      {{ this.conponTitle === '' ? '未套用優惠券' : this.conponTitle}}</p>
                  </div>
                  <div class="col-12 d-flex flex-column align-items-end">
                      <p>商品合計: <span
                      :class="[ total === final_total
                       ? '' : 'text-decoration-line-through']">
                        NT$ {{ total }}</span></p>
                      <p>訂單總計: <span>NT$ {{ final_total }}</span></p>
                  </div>
                </div>
                <div class="d-flex justify-content-between py-4">
                  <button type="button" class="btn btn-secondary btn-lg mx-3"
                  @click.prevent="this.$router.push('/courses')">返回購物</button>
                  <button type="button" class="btn btn-outline-danger btn-lg mx-3"
                  :disabled="this.carts.length === 0"
                  @click.prevent="this.$router.push('/checkout')">填寫資料</button>
                </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <section class="bg-dark block-space overflow-hidden">
        <div class="container position-relative">
          <h5 class="text-secondary text-center py-3">推薦課程</h5>
          <CoursesSwiper></CoursesSwiper>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';
import CoursesSwiper from '@/components/SwiperComponents.vue';

export default {
  data() {
    return {
      url: '',
      path: '',
      code: '',
      conponTitle: '',
      isconponStatus: false,
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    ...mapActions(cartStore, ['delCart']),
    ...mapActions(cartStore, ['delAllCart']),
    addCouponCode() {
      const conpon = {
        code: this.code,
      };
      if (this.code === '') {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '優惠卷欄位不可填空!',
        });
      } else {
        this.axios.post(`${this.url}api/${this.path}/coupon`, { data: conpon })
          .then((res) => {
            this.$swal({
              icon: 'success',
              title: '已成功套用優惠卷',
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(() => {
              this.getCarts();
              this.isconponStatus = true;
              this.conponTitle = res.data.message;
            }, 1500);
          });
      }
    },
  },
  components: {
    Loading,
    CoursesSwiper,
  },
  computed: {
    ...mapState(cartStore, ['carts']),
    ...mapState(cartStore, ['total']),
    ...mapState(cartStore, ['final_total']),
    ...mapState(cartStore, ['isLoading']),
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    this.getCarts();
  },
};

</script>
