import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('getDataStore', {
  state: () => ({
    pagination: {},
    targetData: [],
  }),
  actions: {
    getRemoteData(target, page = 1, isUser = true) {
      const url = import.meta.env.VITE_API_URL;
      const path = import.meta.env.VITE_API_PATH;
      const apiPath = `${url}/api/${path}${isUser ? '' : '/admin'}/${target}?page=${page}`;
      axios
        .get(apiPath)
        .then((res) => {
          this.pagination = res.data.pagination;
          this.targetData = res.data[target];
        })
        .catch((err) => {
          // 待辦：錯誤回饋
          console.log(err.response);
        });
    },
  },
});
