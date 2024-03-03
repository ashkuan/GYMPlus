<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-light" style="min-height: 100vh">
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
    <main class="container my-8 my-md-10">
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
          <div class="col-12 col-md-8">
            <div class="card">
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
                      <th></th>
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
                  <td style="width: 200px;">
                    <img
                      :src="item?.product?.imageUrl"
                      alt="img"
                      class="img-fluid"
                    />
                  </td>
                  <td>
                    <h4 class="mx-2 mb-0 h5 text-start">{{ item?.product?.title }}</h4></td>
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
                      <th scope="row" colspan="2">
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
                      :class="[ this.total === this.final_total
                       ? '' : 'text-decoration-line-through']">
                        NT$ {{ this.total }}</span></p>
                      <p>訂單總計: <span>NT$ {{ this.final_total }}</span></p>
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
      <section class="pb-5">
        <h3 class="text-center">推薦課程</h3>
        <div class="row row-cols-1 row-cols-md-4 gy-4 gy-md-0 overflow-auto justify-content-center">
          <div class="col">
            <div class="card">
              <button type="button" class="position-absolute bookmark">
                <img src="../assets/icon/bookmark.svg" alt="bookmark">
              </button>
              <a href="#" class="position-relative ground-floor">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1708836412360.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PMo66X%2BhVSWUUcjqcbsHl%2FciHmo1tcl%2BoYE7iLQJ5znqT7rHxPryosgy4Jc90gKmG3GRiavyKj%2BPu2jIoy%2FVekIVOxd2gN9IIhGD43ADfqvriZpRhwmmKN3dI%2BBrtM1SE4g1xh9SLgEYtkwi5dW1fJNT%2FkDVpcgOwoQcQaixQCF99MmUmrOqH3TExkOLvoAK0Ad2X2syMKnhmJ%2BWSNOkQZP3kLN%2BsovKrNLcLctzzvzykP0KBcTyyyWqPtoCQ08rimR8Z71LDmpOM%2Fo8kx8fyua5rP4XqpMwHaEKv9jTo8PKhCrLJ3OETsvCAQfowSTaDXSkzyNgincNEvyE5aqUwA%3D%3D" alt="img"
                class="card-img-top" style="height: 350px; object-fit: cover;">
                <div class="card-img-overlay d-flex flex-column justify-content-between">
                  <div class="d-flex overlay-text">
                    <div class="d-flex flex-column">
                      <p class="font-bold text-white mx-2">Dhalsim 教練</p>
                      <h6 class="font-bold text-white mx-2">互動式團隊瑜珈</h6>
                    </div>
                  </div>
                </div>
              </a>
              <div class="card-body d-flex justify-content-between align-items-center">
                <div class="d-flex">
                  <p class="card-text mb-0">NT$ 800</p>
                  <p class="card-text mb-0 text-decoration-line-through"> 1000</p>
                </div>
                <button type="type" class="btn">
                  <img src="../assets/icon/cartIcon.svg" alt="cartIcon">
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <button type="button" class="position-absolute bookmark">
                <img src="../assets/icon/bookmark.svg" alt="bookmark">
              </button>
              <a href="#" class="position-relative ground-floor">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1708802072732.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=d0o%2FflbNgMzLMtrQW%2BORuz8N0hxwNZ414%2Bf7%2FIYWt7X07AyxbfVayozskG%2FrJElJFlht%2Bcwg0TS7OOjkp1pSL9z6YUenCO50FsFq2nfxxctDHCpDiYzc1feE%2BIMthgNIHbW9KGljncZm7Lb6zGkJE9zdaQ%2B8boYcphT6j4k2nwjzfxU049cgoa74Rcssd06MENB9d6oc8cLj9KdgrtBH1lmyD9h%2F87pV0NvJ%2BjxM3blwplmEF35f2B8nGhlLAHOATdcraxgx4f9mSVStyFZ4qey5%2FXImCoqEwOgU7H505Um680nKpvKp%2B5%2FsmAhVpEt8FyxXaQBEtmSwkV2JZzxpKg%3D%3D" alt="img"
                class="card-img-top" style="height: 350px; object-fit: cover;">
                <div class="card-img-overlay d-flex flex-column justify-content-between">
                  <div class="d-flex overlay-text">
                    <div class="d-flex flex-column">
                      <p class="font-bold text-white mx-2">Alex 教練</p>
                      <h6 class="font-bold text-white mx-2">有氧拳擊</h6>
                    </div>
                  </div>
                </div>
              </a>
              <div class="card-body d-flex justify-content-between align-items-center">
                <div class="d-flex">
                  <p class="card-text mb-0">NT$ 800</p>
                  <p class="card-text mb-0 text-decoration-line-through"> 1000</p>
                </div>
                <button type="type" class="btn">
                  <img src="../assets/icon/cartIcon.svg" alt="cartIcon">
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <button type="button" class="position-absolute bookmark">
                <img src="../assets/icon/bookmark.svg" alt="bookmark">
              </button>
              <a href="#" class="position-relative ground-floor">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1708801998686.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KzgWQoD6%2BSLlits3hVLfljPy3UsisGDHnVRLRv5ur4Od68oUO%2FE%2FnYoKTApaIC%2FO8DNDuUIfHP5rRP%2FE8lesuVgPyuqiyo3A4l7Hvi1i1Xei7W9p26zbaG3dCcu5Fuw%2By9e2hKbo%2BUcYU6XLNmRRuWd0ztn%2B9NBj7mT94VSvjfQtEwS588uV%2BJTHN2dEURYXh5puUpGEpSRol%2B7%2FXEwotykW0BgFKWzQxnLETaC3l8BZ6h3rQG0P%2BOtAH%2BzS9EUB3xJDO7oBBxg8N7PkDoLuxYxhWvBv7aM%2BUZHUUsKTWrEeB5tOZrGNRtn9Er0srtCWI0VXMZ0SRGf7FOSpLmLV3A%3D%3D" alt="img"
                class="card-img-top" style="height: 350px; object-fit: cover;">
                <div class="card-img-overlay d-flex flex-column justify-content-between">
                  <div class="d-flex overlay-text">
                    <div class="d-flex flex-column">
                      <p class="font-bold text-white mx-2">Dhalsim 教練</p>
                      <h6 class="font-bold text-white mx-2">物理治療瑜珈</h6>
                    </div>
                  </div>
                </div>
              </a>
              <div class="card-body d-flex justify-content-between align-items-center">
                <div class="d-flex">
                  <p class="card-text mb-0">NT$ 1500</p>
                  <p class="card-text mb-0 text-decoration-line-through"> 1500</p>
                </div>
                <button type="type" class="btn">
                  <img src="../assets/icon/cartIcon.svg" alt="cartIcon">
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  data() {
    return {
      url: '',
      path: '',
      carts: [],
      total: 0,
      final_total: 0,
      code: '',
      conponTitle: '',
      isLoading: true,
      isconponStatus: false,
    };
  },
  methods: {
    getData() {
      this.carts = [];
      this.axios
        .get(`${this.url}api/${this.path}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.total = this.carts.reduce((acc, curr) => acc + parseInt(curr.total, 10), 0);
          // eslint-disable-next-line max-len
          this.final_total = this.carts.reduce((acc, curr) => acc + parseInt(curr.final_total, 10), 0);
          this.isLoading = false;
        });
      if (this.carts.length === 0) {
        this.code = '';
        this.isconponStatus = false;
        this.conponTitle = '';
      }
    },
    delCart(id, title) {
      this.$swal({
        icon: 'warning',
        title: '確定刪除課程?',
        text: title,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios.delete(`${this.url}api/${this.path}/cart/${id}`)
            .then((res) => {
              this.$swal({
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                this.isLoading = true;
                this.getData();
              }, 1500);
            });
        }
      });
    },
    delAllCart() {
      this.$swal({
        icon: 'warning',
        title: '確定刪除全部課程?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios.delete(`${this.url}api/${this.path}/carts`)
            .then((res) => {
              this.$swal({
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                this.isLoading = true;
                this.getData();
              }, 1500);
            });
        }
      });
    },
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
              this.isLoading = true;
              this.getData();
              this.isconponStatus = true;
              this.conponTitle = res.data.message;
            }, 1500);
          });
      }
    },
  },
  components: {
    Loading,
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    this.getData();
  },
};

</script>
