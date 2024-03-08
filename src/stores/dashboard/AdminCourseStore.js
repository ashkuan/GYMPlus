import { defineStore } from 'pinia';
import axios from 'axios';
import alertStore from '../AlertStore';
import GetDataStore from '../GetDataStore';

const url = import.meta.env.VITE_API_URL;
const path = import.meta.env.VITE_API_PATH;
const { alertStyles, basicContent } = alertStore();

export default defineStore('adminCourseStore', {
  state: () => ({
    temp: {
      title: '',
      category: '',
      origin_price: null,
      price: null,
      description: '',
      content: '',
      is_enabled: 0,
      imageUrl: '',
      imagesUrl: [],
      time: '',
      'time-unix': 0,
      difficulty: '',
      target: [],
      coach: '',
      unit: '堂',
    },
    fileInfo: null,
    isEditingCourse: false,
    isAddingImg: false,
  }),
  actions: {
    getCourse(id) {
      const course = GetDataStore().targetData.find((ele) => ele.id === id);
      const keysArr = Object.keys(course);
      keysArr.forEach((name) => {
        this.temp[name] = course[name];
      });
    },
    resetTemp() {
      this.$reset();
    },
    editCourse(id, modalDom) {
      this.isEditingCourse = !this.isEditingCourse;
      this.temp.is_enabled = parseInt(this.temp.is_enabled, 10);
      this.temp['time-unix'] = new Date(this.temp.time).getTime() / 1000;
      const course = { data: { ...this.temp } };
      let method = 'post';
      if (id) {
        method = 'put';
      }
      axios[method](`${url}/api/${path}/admin/product${id ? `/${id}` : ''}`, course)
        .then((res) => {
          alertStyles.basic.fire({
            ...basicContent(res.data.message, 1),
            didClose: () => {
              this.resetTemp();
              this.isEditingCourse = !this.isEditingCourse;
              modalDom.hide();
            },
          });
          GetDataStore().getRemoteData('products', 1, false);
        })
        .catch((err) => {
          this.isEditingCourse = !this.isEditingCourse;
          alertStyles.basic.fire(basicContent(`錯誤${err.response.status}，請洽客服`, 2));
        });
    },
    delCourse(id, modalDom) {
      this.isEditingCourse = !this.isEditingCourse;
      axios
        .delete(`${url}/api/${path}/admin/product/${id}`)
        .then((res) => {
          alertStyles.basic.fire({
            ...basicContent(res.data.message, 1),
            didClose: () => {
              this.resetTemp();
              this.isEditingCourse = !this.isEditingCourse;
              modalDom.hide();
            },
          });
          GetDataStore().getRemoteData('products', 1, false);
        })
        .catch((err) => {
          this.isEditingCourse = !this.isEditingCourse;
          alertStyles.basic.fire(basicContent(`錯誤${err.response.status}，請洽客服`, 2));
        });
    },
    getImgFile(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      this.fileInfo = formData;
    },
    uploadImg(addToArr, fileInput) {
      this.isAddingImg = !this.isAddingImg;
      axios
        .post(`${url}/api/${path}/admin/upload`, this.fileInfo)
        .then((res) => {
          const { imageUrl } = res.data;
          if (addToArr) {
            this.temp.imagesUrl.push(imageUrl);
          } else {
            this.temp.imageUrl = imageUrl;
          }
          alertStyles.basic.fire(basicContent('新增成功', 1));
          const DOM = fileInput;
          DOM.value = null;
          this.isAddingImg = !this.isAddingImg;
        })
        .catch((err) => {
          this.isAddingImg = !this.isAddingImg;
          if (this.fileInfo === null) {
            alertStyles.basic.fire(basicContent('請選擇檔案', 2));
          } else {
            alertStyles.basic.fire(basicContent(`錯誤${err.response.status}，請洽客服`, 2));
          }
        });
    },
  },
});
