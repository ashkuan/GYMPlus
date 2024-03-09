import 'bootstrap';
import 'animate.css';
import './assets/all.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import VueAxios from 'vue-axios';
import axios from 'axios';

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as rules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue';
import router from './router';

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule]);
});
setLocale('zh_TW');
configure({
  generateMessage: localize({ zh_TW: zhTw }),
  validateOnInput: true,
});
// 訂購人姓名驗證
defineRule('mixed_name', (value) => {
  // 中英文混合姓名正则表达式
  const mixedNameRegex = /^[a-zA-Z\u4e00-\u9fa5\s·]+$/;
  return mixedNameRegex.test(value) ? true : '請填寫訂購人姓名';
});
// 持卡人姓名驗證
defineRule('cardholderName', (value) => {
  // 中英文混合姓名正则表达式
  const cardholderName = /^[a-zA-Z\u4e00-\u9fa5\s·]+$/;
  return cardholderName.test(value) ? true : '請填寫持卡人姓名';
});
// 電話號碼驗證
defineRule('isPhone', (value) => {
  // 自定義驗證電話正则表达式
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) ? true : '請填寫正確的電話號碼';
});
// 信用卡號碼驗證
defineRule('cardholderNumber', (value) => {
  // 自定義驗證信用卡號碼正则表达式
  const cardNumber = /^[0-9]{16}$/;
  return cardNumber.test(value) ? true : '請填寫正確的信用卡號碼';
});
// 聯絡地址驗證
defineRule('isContact', (value) => {
  // 自定義驗證地址正则表达式
  const contact =
    /^[\u4e00-\u9fa5]+(?:省|市|自治區|特別行政區)?[\u4e00-\u9fa5]+(?:市|區|縣)?[\u4e00-\u9fa5]+(?:街道)?[\u4e00-\u9fa5\d]+(?:號|弄|棟|單元|座|樓|層)?(?:[\u4e00-\u9fa5]+)?$/;
  return contact.test(value) ? true : '請填寫正確的聯絡地址';
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(LoadingPlugin);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(VueSweetalert2);

app.mount('#app');
