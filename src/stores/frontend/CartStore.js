/* eslint-disable max-len */
import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import axios from 'axios';

export default defineStore('cart', {
  state: () => ({
    url: import.meta.env.VITE_API_URL,
    path: import.meta.env.VITE_API_PATH,
    carts: [],
    total: 0,
    final_total: 0,
    isLoading: false,
    status: {
      loadingItem: '',
    },
  }),
  actions: {
    getCarts() {
      // 取得購物車資訊
      this.isLoading = true;
      this.carts = [];
      axios.get(`${this.url}api/${this.path}/cart`).then((res) => {
        this.carts = res.data.data.carts;
        this.total = this.carts.reduce((acc, curr) => acc + parseInt(curr.total, 10), 0);
        this.final_total = this.carts.reduce(
          (acc, curr) => acc + parseInt(curr.final_total, 10),
          0,
        );
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
    },
    addCart(id, title) {
      // 新增購物車
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      axios.post(`${this.url}api/${this.path}/cart`, { data: cart }).then(() => {
        swal.fire({
          icon: 'success',
          title: '課程新增',
          text: `已成功新增${title}課程`,
          showConfirmButton: false,
          timer: 1500,
        });
        this.getCarts();
        setTimeout(() => {
          this.status.loadingItem = '';
        }, 1500);
      });
    },
    delCart(id, title) {
      // 刪除單一商品
      swal
        .fire({
          icon: 'warning',
          title: '確定刪除課程?',
          text: title,
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '確定',
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios.delete(`${this.url}api/${this.path}/cart/${id}`).then((res) => {
              swal.fire({
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                this.isLoading = true;
                this.getCarts();
              }, 1500);
            });
          }
        });
    },
    delAllCart() {
      // 刪除全部商品
      swal
        .fire({
          icon: 'warning',
          title: '確定刪除全部課程?',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '確定',
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios.delete(`${this.url}api/${this.path}/carts`).then((res) => {
              swal.fire({
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                this.isLoading = true;
                this.getCarts();
              }, 1500);
            });
          }
        });
    },
  },
});
