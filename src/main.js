import 'bootstrap';
import './assets/all.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import VueAxios from 'vue-axios';
import axios from 'axios';

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import * as rules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json';

import LoadingPlugin from 'vue-loading-overlay';
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

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.component('LoadingPlugin', LoadingPlugin);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(VueSweetalert2);

app.mount('#app');
