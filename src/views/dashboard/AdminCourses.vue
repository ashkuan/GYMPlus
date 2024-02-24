<script>
export default {
  data() {
    return {
      url: '',
      path: '',
      courses: [],
      badgeStyles: {
        yoga: 'bg-primary bg-opacity-50',
        strength: 'bg-gray-1 bg-opacity-50',
        cardio: 'bg-secondary',
      },
      yoga: 'bg-primary bg-opacity-50',
    };
  },
  methods: {
    getCourses() {
      this.axios
        .get(`${this.url}/api/${this.path}/admin/products`)
        .then((res) => {
          // console.log(res.data);
          this.courses = res.data.products;
          console.log(this.courses);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    // uploadImage(index, event) {
    //   const file = event.target.files[0];
    //   const formData = new FormData();
    //   formData.append('file-to-upload', file);
    //   console.log(file);
    //   this.axios
    //     .post(`${this.url}/api/${this.path}/admin/upload`, formData)
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err.response);
    //     });
    // },
    chooseBadgeStyle(zhName) {
      switch (zhName) {
        case '瑜珈':
          return this.badgeStyles.yoga;
        case '重量訓練':
          return this.badgeStyles.strength;
        case '有氧運動':
          return this.badgeStyles.cardio;
        default:
          return '';
      }
    },
  },
  computed: {},
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
    this.getCourses();
  },
};
</script>

<template>
  <div class="container">
    <h2 class="display-1 mb-md-0 text-center">
      <span>課程管理</span>
    </h2>
    <div class="text-center text-md-end mb-3">
      <button type="button" class="btn btn-gray-3 py-1 shadow-sm">
        <span class="icon-base icon-sm icon-add me-1 bg-white align-text-top"></span>
        <span>新增課程</span>
      </button>
    </div>
    <div class="table-responsive mb-6">
      <table
        class="table table-hover text-center align-middle"
        style="letter-spacing: 0px; min-width: 660px"
      >
        <thead>
          <tr class="table-gray-4">
            <th scope="col" width="60px"></th>
            <th scope="col" class="d-none d-lg-table-cell">縮圖</th>
            <th scope="col">分類</th>
            <th scope="col">標題</th>
            <th scope="col">教練</th>
            <th scope="col">上課時間</th>
            <th scope="col">售價</th>
            <th scope="col">開課狀況</th>
            <th scope="col" width="70px"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" :key="course.id">
            <td>
              <button type="button" class="btn btn-sm btn-outline-danger border-0 p-1">
                <span class="icon-base icon-sm icon-trash"></span>
              </button>
            </td>
            <td class="d-none d-lg-table-cell">
              <img :src="course.imageUrl" :alt="course.title" style="width: 120px; height: 80px" />
            </td>
            <td>
              <p class="fs-7 fs-lg-6">
                <span class="badge" :class="chooseBadgeStyle(course.category)">
                  {{ course.category }}
                </span>
              </p>
            </td>
            <td>
              <h3 class="small fs-lg-7 fw-normal mb-0">{{ course.title }}</h3>
            </td>
            <td>{{ course.coach }}</td>
            <td class="small fs-lg-7">{{ course.time }}</td>
            <td class="fw-semibold">
              <span :class="{ 'text-danger ': course.price < course.origin_price }">
                {{ course.price }}
              </span>
            </td>
            <td>
              <p class="fs-7 fs-lg-6">
                <span
                  class="badge"
                  :class="{ 'bg-success': course.is_enabled, 'bg-danger': !course.is_enabled }"
                >
                  {{ course.is_enabled ? '上架中' : '已下架' }}
                </span>
              </p>
            </td>
            <td>
              <button type="button" class="btn btn-sm btn-outline-dark fw-normal">編輯</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss"></style>
