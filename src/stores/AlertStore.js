import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import router from '../router';

export default defineStore('alertStore', {
  // 樣式集 [ { 樣式名稱 1 }, { 樣式名稱 2 }]
  state: () => ({
    styleSet: [
      {
        basic: {
          customClass: {
            confirmButton: 'btn py-2 btn-gray-1',
            title: 'h4 mb-0',
            icon: 'small mb-0',
            container: 'border-4',
          },
          buttonsStyling: false,
        },
      },
      {
        model: {},
      },
    ],
  }),
  getters: {
    // 樣式集的 swal.mixin
    alertStyles() {
      const stylesObj = {};
      this.styleSet.forEach((style) => {
        const keyName = `${Object.keys(style)}`;
        stylesObj[keyName] = swal.mixin(style[keyName]);
      });
      return stylesObj;
    },
  },
  // 內容選項
  actions: {
    // 基本內容
    basicContent(title, iconCode = 0, confirmButtonText = '確認') {
      const iconArr = ['', 'success', 'error'];
      return {
        icon: iconArr[iconCode],
        title,
        confirmButtonText,
      };
    },
    // 關閉後切換頁面
    closedAction(method, pagename = '') {
      return {
        didClose: () => {
          router[method](`/${pagename}`);
        },
      };
    },
  },
});
