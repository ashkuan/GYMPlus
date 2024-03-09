<template>
  <Loading :active="isLoading"></Loading>
  <div class="bg-white" style="min-height: 100vh">
    <div class="container">
      <nav aria-label="breadcrumb" class="pt-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="mx-2">首頁</router-link>
          </li>
          <li class="breadcrumb-item" aria-current="page">購物車</li>
          <li class="breadcrumb-item active" aria-current="page">填寫資料</li>
        </ol>
      </nav>
    </div>
    <main class="container">
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
            <div class="text-center step step_3">訂單確認</div>
          </div>
        </div>
      </section>
      <section class="py-5">
        <v-form class="row" v-slot="{ errors }" @submit="onSubmit">
          <div class="col-12 col-md-4">
            <h4 class="text-center">訂購人資訊</h4>
          <div class="mb-3">
            <label for="name" class="form-label">訂購人姓名</label>
            <v-field type="text" class="form-control" :class="{'is-invalid' : errors['name']}"
            id="name" name="name" rules="mixed_name|required"
              placeholder="請填寫姓名" v-model="form.user.name"></v-field>
              <error-message class="invalid-feedback"
              name="name"></error-message>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">聯絡信箱</label>
            <v-field type="email" class="form-control" :class="{'is-invalid' : errors['email']}"
             id="email" name="email" rules="email|required"
            placeholder="請填寫聯絡信箱" v-model="form.user.email"></v-field>
            <error-message class="invalid-feedback"
              name="email"></error-message>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">手機號碼</label>
            <v-field type="tel" class="form-control" :class="{'is-invalid' : errors['phone']}"
             id="phone" name="phone" rules="isPhone|required"
              placeholder="請填寫手機號碼" v-model="form.user.tel"></v-field>
             <error-message class="invalid-feedback"
              name="phone"></error-message>
          </div>
          <div class="mb-3">
            <label for="contact" class="form-label">聯絡地址</label>
            <v-field type="text" class="form-control" :class="{'is-invalid' : errors['contact']}"
            id="contact" name="contact" rules="isContact|required"
             placeholder="請填寫聯絡地址" v-model="form.user.address"></v-field>
            <error-message class="invalid-feedback"
              name="contact"></error-message>
          </div>
          <div class="mb-3">
            <label for="comment" class="form-label">備註</label>
            <textarea class="form-control" id="comment" rows="3" v-model="form.message"></textarea>
          </div>
          </div>
          <div class="col-12 col-md-4">
            <h4 class="text-center">付款方式</h4>
            <div class="d-flex justify-content-center">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="credit_card"
                  value="credit-card"
                  v-model="form.user.payment"
                />
                <label class="form-check-label" for="credit_card"
                  >信用卡</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="bank_account"
                  value="bank-account"
                  v-model="form.user.payment"
                />
                <label class="form-check-label" for="bank_account"
                  >銀行轉帳</label
                >
              </div>
            </div>
            <div class="credit-card" v-if="this.form.user.payment === 'credit-card'">
              <div class="mb-3">
                <label for="cardName" class="form-label"
                  >持卡人</label
                >
                <v-field type="text" class="form-control"
                 :class="{'is-invalid' : errors['cardName']}"
            id="cardName" name="cardName"
             rules="cardholderName|required" maxlength="16"
              placeholder="請輸入持卡人姓名"></v-field>
              <error-message class="invalid-feedback"
              name="cardName"></error-message>
              </div>
              <div class="mb-3">
                <label for="cardholderNumber" class="form-label"
                  >信用卡號碼</label
                >
                <v-field type="tel" class="form-control"
                 :class="{'is-invalid' : errors['cardholderNumber']}"
             id="cardholderNumber" name="cardholderNumber" rules="cardholderNumber|required"
              placeholder="請填寫信用卡號碼"></v-field>
             <error-message class="invalid-feedback"
              name="cardholderNumber"></error-message>
              </div>
              <div class="row g-0">
                <div class="col d-flex flex-column">
                  <div class="mb-0">
                    <label for="expires-month" class="form-label"
                  >有效期限</label
                >
                  </div>
                  <div class="mb-1 d-flex">
                    <v-field type="tel" class="form-control me-1"
                 :class="{'is-invalid' : errors['expires-month']}"
             id="expires-monthr" name="expires-month" rules="required|numeric|min:1|max:12"
             placeholder="MM"></v-field>
             <v-field type="tel" class="form-control me-1"
                 :class="{'is-invalid' : errors['expires-year']}"
             id="expires-year" name="expires-year" rules="required|numeric|min:1|max:99"
             placeholder="YY"></v-field>
                  </div>
                </div>
                <div class="col-4">
                  <label for="credit-card-security-code" class="form-label"
                  >安全碼</label
                >
                <v-field type="tel" class="form-control me-1"
                 :class="{'is-invalid' : errors['credit-card-security-code']}"
             id="credit-card-security-code" maxlength="3"
              name="credit-card-security-code" rules="required|numeric|min:1|max:99"
              placeholder="CVV"></v-field>
                </div>
              </div>
            </div>
            <div class="bank_account" v-else>
              <p>繳費銀行代碼:005</p>
              <p>繳費虛擬帳號:5219 3025 4107 5893</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
          <h4 class="text-center">訂單內容</h4>
          <div class="card mb-1" style="max-width: 540px;"
          v-for="item in carts" :key="item.id">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="item?.product?.imageUrl" class="img-fluid rounded-start"
       :alt="item?.product?.title">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ item?.product?.title }}</h5>
        <div class="d-flex justify-content-end">
          <p class="card-text"><small class="text-decoration-line-through">
           $ {{ item?.product?.origin_price }}</small></p>
        <p class="card-text">${{ item?.product?.price }}</p>
        </div>
      </div>
    </div>
  </div>
          </div>
          <div class="d-flex flex-column align-items-end">
            <p>商品合計: <span
                      :class="[ total === final_total
                       ? '' : 'text-decoration-line-through']">
                        NT$ {{ total }}</span></p>
            <p>訂單總計: <span>NT$ {{ final_total }}</span></p>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center py-3">
          <button type="button" class="btn btn-lg btn-secondary rounded mx-2"
          @click.prevent="this.$router.push('/cart')">回到上一頁</button>
          <button type="submit" class="btn btn-lg btn-outline-danger rounded mx-2">送出訂單</button>
        </div>
        </v-form>
      </section>
    </main>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';

export default {
  data() {
    return {
      orderId: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          payment: 'credit-card',
          cartTitle: '',
        },
        message: '',
      },
    };
  },
  components: {
    Loading,
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    checkData() {
      if (this.carts.length === 0) {
        this.$swal({
          icon: 'error',
          title: '購物車為空',
          text: '您還沒選購課程~',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          this.$router.push('/courses');
        }, 1500);
      }
    },
    onSubmit() {
      this.$swal({
        icon: 'question',
        title: '是否送出訂單?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
      }).then((result) => {
        if (result.isConfirmed) {
          this.form.payment = this.ispayment;
          const cartTitle = this.carts.map((item) => item.product.title).join('、');
          this.form.user.cartTitle = cartTitle;
          const order = this.form;
          this.axios.post(`${this.url}api/${this.path}/order`, { data: order })
            .then((res) => {
              this.orderId = res.data.orderId;
              this.$swal({
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                this.$router.push(`order-creation/${this.orderId}`);
              }, 1500);
            });
        }
      });
    },
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
    setTimeout(() => {
      this.checkData();
    }, 500);
  },
};

</script>
