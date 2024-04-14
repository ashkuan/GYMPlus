import { defineStore } from "pinia";
import axios from "axios";

const url = import.meta.env.VITE_API_URL;
const path = import.meta.env.VITE_API_PATH;

export default defineStore("coursesDataStore", {
  state: () => ({
    targetData: [],
    isGettingData: false,
    singleInfo: "",
    isGettingInfo: false,
    perPage: 10,
    currentPage: 1,
    category: "全部課程",
    categorys: ["全部課程", "瑜珈", "有氧運動", "重量訓練"],
    sortOrder: "asc", // 默認從小到大
    coach: [],
  }),
  actions: {
    getRemoteData(target) {
      this.isGettingData = !this.isGettingData;
      const apiPath = `${url}/api/${path}/${target}/all`;
      axios.get(apiPath).then((res) => {
        this.pagination = res.data.pagination;
        this.targetData = res.data[target];
        this.isGettingData = !this.isGettingData;
      });
    },
    getSingleInfo(target, id, isUser = true) {
      this.isGettingInfo = !this.isGettingInfo;
      axios
        .get(`${url}/api/${path}${isUser ? "" : "/admin"}/${target}/${id}`)
        .then((res) => {
          this.singleInfo = res.data[target];
          this.isGettingInfo = !this.isGettingInfo;
        });
    },
    checkCategory(type) {
      this.category = type;
    },
    checkCoach(type) {
      this.coach = type;
    },
    checkSortOrder(type) {
      this.sortOrder = type;
    },
    changePage(page) {
      this.currentPage = page;
    },
    nextPage() {
      let page = this.currentPage;
      page += 1;
      this.currentPage = page;
    },
    prevPage() {
      let page = this.currentPage;
      page -= 1;
      this.currentPage = page;
    },
  },
  getters: {
    filteredProducts() {
      let filtered = this.targetData;
      if (this.category !== "全部課程") {
        filtered = filtered.filter((item) => item.category === this.category);
      }
      if (this.coach.length !== 0) {
        filtered = filtered.filter((item) => this.coach.includes(item.coach));
      }
      if (this.sortOrder === "asc") {
        // 判定價格 默認從小到大
        filtered.sort((a, b) => a.price - b.price);
      } else {
        filtered.sort((a, b) => b.price - a.price);
      }
      return filtered;
    },
    // 計算總頁數
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.perPage);
    },
    // 根據當前頁碼和每頁顯示的資料筆數，計算當前頁要顯示的資料
    paginatedData() {
      const filteredData = this.filteredProducts;
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return filteredData.slice(startIndex, endIndex);
    },
  },
});
