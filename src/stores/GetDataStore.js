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
    singleInfo: '',
    isGettingInfo: false,
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
    getFrontSingleInfo(target, id) {
      this.isGettingInfo = !this.isGettingInfo;
      axios
        .get(`${url}/api/${path}/${target}/${id}`)
        .then((res) => {
          this.singleInfo = res.data[target];
          this.isGettingInfo = !this.isGettingInfo;
        })
        .catch((err) => {
          alertStyles.basic.fire(basicContent(`錯誤${err.response.status}，請洽客服`, 2));
          this.isGettingInfo = !this.isGettingInfo;
        });
    },
  },
});