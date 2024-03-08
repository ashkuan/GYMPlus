<script>
import { mapActions, mapState } from 'pinia';
import getDataStore from '@/stores/GetDataStore';
import AdminCourseStore from '@/stores/dashboard/AdminCourseStore';
import PaginationComponent from '@/components/PaginationComponent.vue';
import CourseEditModal from '@/components/dashboard/CourseEditModal.vue';
import CourseDelModal from '@/components/dashboard/CourseDelModal.vue';

export default {
  components: { PaginationComponent, CourseEditModal, CourseDelModal },
  props: ['haveToken'],
  data() {
    return {
      url: '',
      path: '',
      courses: [],
      pageInfo: {},
      badgeStyles: {
        yoga: 'bg-primary bg-opacity-50',
        strength: 'bg-gray-1 bg-opacity-50',
        cardio: 'bg-secondary',
      },
      yoga: 'bg-primary bg-opacity-50',
    };
  },
  methods: {
    ...mapActions(getDataStore, ['getRemoteData']),
    ...mapActions(AdminCourseStore, ['getCourse']),
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
  computed: {
    ...mapState(getDataStore, ['targetData']),
  },
  watch: {
    targetData(vaule) {
      this.courses = vaule;
    },
  },
  mounted() {
    this.getRemoteData('products', 1, false);
  },
};
</script>

<template>
  <div class="container">
    <h2 class="fs-3 fw-normal ls-0 mb-md-0 text-center">
      <span>課程管理</span>
    </h2>
    <div class="text-center text-md-end mb-3">
      <button
        type="button"
        class="btn btn-gray-3 py-1 shadow-sm"
        data-bs-toggle="modal"
        data-bs-target="#courseEditModal"
      >
        <span class="icon-base icon-sm icon-add me-1 bg-white align-text-top"></span>
        <span>新增課程</span>
      </button>
    </div>
    <div v-if="courses.length !== 0" class="table-responsive mb-5">
      <table
        class="table table-hover text-center align-middle"
        style="letter-spacing: 0px; min-width: 720px"
      >
        <thead>
          <tr class="table-gray-4">
            <th scope="col" width="52px"></th>
            <th scope="col" class="d-none d-lg-table-cell">縮圖</th>
            <th scope="col">分類</th>
            <th scope="col">標題</th>
            <th scope="col">教練</th>
            <th scope="col">上課時間</th>
            <th scope="col">售價</th>
            <th scope="col" width="90px">開課狀況</th>
            <th scope="col" width="75px"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" :key="course.id">
            <td>
              <button
                type="button"
                class="btn btn-sm btn-outline-danger border-0 p-1"
                data-bs-toggle="modal"
                data-bs-target="#courseDelModal"
                @click="getCourse(course.id)"
              >
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
            <td class="fs-8 fs-lg-7">{{ course.coach }}</td>
            <td class="fs-8 fs-lg-7 ls-0">{{ course.time }}</td>
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
              <button
                type="button"
                class="btn btn-sm btn-outline-dark fw-normal"
                data-bs-toggle="modal"
                data-bs-target="#courseEditModal"
                @click="getCourse(course.id)"
              >
                編輯
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h2 class="fs-6 fw-light text-center">
        <span class="line-loading-loop bg-gray-3 align-top"></span>
        資料讀取中請稍後
      </h2>
    </div>
    <PaginationComponent :now-target="'products'" :is-user="false"></PaginationComponent>
  </div>
  <CourseEditModal />
  <CourseDelModal />
</template>

<style lang="scss"></style>
