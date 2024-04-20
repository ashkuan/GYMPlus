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
            title: 'h4 mb-0 ls-0',
            icon: 'small mb-0',
            container: 'border-4',
          },
          buttonsStyling: false,
        },
      },
      {
        toast: {
          toast: true,
          position: 'top',
          showConfirmButton: false,
          customClass: {
            title: 'ls-1 m-0 text-white fw-normal',
            popup: 'rounded-5 d-flex justify-content-center align-items-center py-3',
            container: 'pt-7',
          },
          background: '#228B22',
          width: '180px',
          timer: 3000,
          didOpen: (toast) => {
            const obj = toast;
            obj.onmouseenter = swal.stopTimer;
            obj.onmouseleave = swal.resumeTimer;
          },
          showClass: {
            popup: `animate__animated animate__bounceInDown animate__slow`,
          },
          hideClass: {
            popup: `animate__animated animate__bounceOut`,
          },
        },
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
      const iconArr = ['', 'success', 'error', 'warning'];
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
