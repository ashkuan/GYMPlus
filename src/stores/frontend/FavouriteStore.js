import { defineStore } from 'pinia';
import AlertStore from '../AlertStore';

const { alertStyles, basicContent } = AlertStore();

export default defineStore('favouritesStore', {
  state: () => ({
    favourites: [],
    keyName: 'favourites',
    keyValue: null,
    isEditingFavs: false,
  }),
  actions: {
    getFavs() {
      this.keyValue = localStorage.getItem(this.keyName);
      if (this.keyValue) this.favourites = JSON.parse(this.keyValue);
    },

    addToFavs(course) {
      let newVaule = JSON.stringify([course]);
      if (this.keyValue) {
        this.getFavs();
        this.favourites.push(course);
        newVaule = JSON.stringify(this.favourites);
      }
      localStorage.setItem(this.keyName, newVaule);
      this.getFavs();
      alertStyles.toast.fire(basicContent('成功加入收藏'));
    },
    delFromFavs(id) {
      this.favourites = this.favourites.filter((favourite) => favourite.id !== id);
      if (this.favourites.length < 2) {
        localStorage.removeItem(this.keyName);
      } else {
        localStorage.setItem(this.keyName, JSON.stringify(this.favourites));
      }
      this.getFavs();
      alertStyles.toast.fire(basicContent('已從收藏中移除'));
    },
    toggleFavs(input) {
      if (typeof input === 'object') {
        this.addToFavs(input);
      } else if (typeof input === 'string') {
        this.delFromFavs(input);
      }
    },
  },
});
