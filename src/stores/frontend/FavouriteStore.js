import { defineStore } from 'pinia';

export default defineStore('favouritesStore', {
  state: () => ({
    favourites: [],
    keyName: 'favourites',
    isEditing: false,
  }),
  getters: {
    keyValue() {
      // 類似監聽效果
      return typeof this.isEditing === 'boolean' ? localStorage.getItem(this.keyName) : '';
    },
  },
  actions: {
    getFavourites() {
      if (this.keyValue) this.favourites = JSON.parse(this.keyValue);
    },

    addToFavourites(course) {
      this.isEditing = !this.isEditing;
      let newVaule = JSON.stringify([course]);
      if (this.keyValue) {
        this.getFavourites();
        this.favourites.push(course);
        newVaule = JSON.stringify(this.favourites);
      }
      localStorage.setItem(this.keyName, newVaule);
      alert('成功加入收藏');
      this.isEditing = !this.isEditing;
    },
    // localStorage.removeItem(this.keyName);
  },
});
