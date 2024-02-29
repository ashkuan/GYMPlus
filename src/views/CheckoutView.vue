<template>
  <div class="bg-light" style="min-height: 100vh">
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
      <section class="row py-5">
        <div class="col-12 col-md-4">
          <h4 class="text-center">訂購人資訊</h4>
          <div class="mb-3">
            <label for="name" class="form-label">訂購人姓名</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="請填寫姓名"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">聯絡信箱</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="請填寫聯絡信箱"
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">手機號碼</label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              placeholder="請填寫手機號碼"
            />
          </div>
          <div class="mb-3">
            <label for="contact" class="form-label">聯絡地址</label>
            <input
              type="text"
              class="form-control"
              id="contact"
              placeholder="請填寫聯絡地址"
            />
          </div>
          <div class="mb-3">
            <label for="comment" class="form-label">備註</label>
            <textarea class="form-control" id="comment" rows="3"></textarea>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <h4 class="text-center">付款方式</h4>
          <form>
            <div class="d-flex justify-content-center">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="credit_card"
                  value="信用卡"
                  v-model="ispayment"
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
                  value="銀行轉帳"
                  v-model="ispayment"
                />
                <label class="form-check-label" for="bank_account"
                  >銀行轉帳</label
                >
              </div>
            </div>
            <div class="credit-card" v-if="this.ispayment === '信用卡'">
              <div class="mb-3">
                <label for="credit-card-name" class="form-label"
                  >持卡人</label
                >
                <input
                  type="text"
                  class="form-control"
                  maxlength="16"
                  id="credit-card-name"
                  placeholder="請輸入持卡人姓名"
                />
              </div>
              <div class="mb-3">
                <label for="credit-card-number" class="form-label"
                  >信用卡號碼</label
                >
                <input
                  type="tel"
                  class="form-control"
                  maxlength="16"
                  id="credit-card-number"
                  placeholder="請輸入信用卡號碼"
                />
              </div>
              <div class="row g-0">
                <div class="col d-flex flex-column">
                  <div class="mb-1">
                    <label for="expires-month" class="form-label"
                  >有效期限</label
                >
                  </div>
                  <div class="mb-1 d-flex">
                    <input type="tel"
                  class="form-control w-25 me-1" id="expires-month" placeholder="MM">
                  <input type="tel"
                  class="form-control w-25" id="expires-year" placeholder="YY">
                  </div>
                </div>
                <div class="col-4">
                  <label for="credit-card-security-code" class="form-label"
                  >安全碼</label
                >
                  <input type="tel"
                  class="form-control" id="credit-card-security-code" placeholder="CVV">
                </div>
              </div>
            </div>
            <div class="bank_account" v-else>
              <p>繳費銀行代碼:005</p>
              <p>繳費虛擬帳號:5219 3025 4107 5893</p>
            </div>
          </form>
        </div>
        <div class="col-12 col-md-4">
          <h4 class="text-center">訂單內容</h4>
          <div class="card mb-1" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1708797743240.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JdvnWpocQa35MICaw1AxTtnSicGkEqm%2BPltZ%2BpW9Fep6e3uivDV1Y%2FL6OQvEzCzcclnR%2Fgofat2EZZeqI4KTayc9krafaRCnsJInPumPoQX0lDn03BRwlsWg%2BBKW6RDn0IcPQQ4GYG7R4iUlY6PrOKmuyt4zaXCzpqfYlZ%2BbXAhlGrPJtbY368TnQQOXHR5YYD2oHzq1RMoZoFCRvBKrgNOoVFTYTbV7E61MF3P9J2CByriMy6%2BQH4pbORn28rqSS1Pdq3IG%2BRL7tc0uwTaylHCuaXLSml4czeoVIYyaSknI4mPlgvbAXQCbeKYGwCXIG%2BpS9JyDMdu0PA5A0dAt0g%3D%3D" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">有氧體驗課</h5>
        <div class="d-flex justify-content-end">
          <p class="card-text"><small class="text-decoration-line-through">$1000</small></p>
        <p class="card-text">$850</p>
        </div>
      </div>
    </div>
  </div>
          </div>
          <div class="card mb-1" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1708797743240.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JdvnWpocQa35MICaw1AxTtnSicGkEqm%2BPltZ%2BpW9Fep6e3uivDV1Y%2FL6OQvEzCzcclnR%2Fgofat2EZZeqI4KTayc9krafaRCnsJInPumPoQX0lDn03BRwlsWg%2BBKW6RDn0IcPQQ4GYG7R4iUlY6PrOKmuyt4zaXCzpqfYlZ%2BbXAhlGrPJtbY368TnQQOXHR5YYD2oHzq1RMoZoFCRvBKrgNOoVFTYTbV7E61MF3P9J2CByriMy6%2BQH4pbORn28rqSS1Pdq3IG%2BRL7tc0uwTaylHCuaXLSml4czeoVIYyaSknI4mPlgvbAXQCbeKYGwCXIG%2BpS9JyDMdu0PA5A0dAt0g%3D%3D" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">有氧體驗課</h5>
        <div class="d-flex justify-content-end">
          <p class="card-text"><small class="text-decoration-line-through">$1000</small></p>
        <p class="card-text">$850</p>
        </div>
      </div>
    </div>
  </div>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center py-3">
          <button type="button" class="btn btn-lg btn-secondary rounded mx-2">回到上一頁</button>
          <button type="button" class="btn btn-lg btn-outline-danger rounded mx-2">送出訂單</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      path: '',
      carts: [],
      total: 0,
      final_total: 0,
      isLoading: true,
      ispayment: '信用卡',
    };
  },
  methods: {
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
  },
};

</script>
