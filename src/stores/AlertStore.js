import { defineStore } from 'pinia';

export default defineStore('alertStore', {
  // 樣式集
  state: () => ({
    iconSinpleStyle: {
      customClass: {
        confirmButton: 'btn py-2 btn-gray-1',
        title: 'h4 mb-0',
        icon: 'small mb-0',
        container: 'border-4',
        timer: 3000,
        timerProgressBar: true,
      },
      buttonsStyling: false,
    },
  }),
  // 內容集
  actions: {
    iconSinpleContent(icon, title) {
      return {
        icon,
        title,
        confirmButtonText: '確認',
      };
    },
  },
});
