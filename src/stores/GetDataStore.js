import { defineStore } from 'pinia';
import axios from 'axios';
import alertStore from './AlertStore';

const url = import.meta.env.VITE_API_URL;
const path = import.meta.env.VITE_API_PATH;
const { alertStyles, basicContent } = alertStore();

export default defineStore('getDataStore', {
  state: () => ({
    pagination: {},
    targetData: [],
  }),
  actions: {
    getRemoteData(target, page = 1, isUser = true) {
      const apiPath = `${url}/api/${path}${isUser ? '' : '/admin'}/${target}?page=${page}`;
      axios
        .get(apiPath)
        .then((res) => {
          this.pagination = res.data.pagination;
          this.targetData = res.data[target];
        })
        .catch((err) => {
          alertStyles.basic.fire(basicContent(`錯誤${err.response.status}，請洽客服`, 2));
        });
    },
    addSeparator(price) {
      let priceStr = price.toString();
      let i = 0;
      for (i; i < priceStr.length / 4; i += 1) {
        const target = priceStr.at(-3 * (i + 1) - i);
        priceStr = priceStr.replace(target, `,${target}`);
      }
      if (priceStr[0] === ',') {
        priceStr = priceStr.slice(1);
      }
      return priceStr;
    },
  },
});
