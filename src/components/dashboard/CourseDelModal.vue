<template>
  <div class="modal fade" ref="courseDelModal" id="courseDelModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-linear-danger py-3">
          <h3 class="modal-title fs-5 fw-medium text-white">刪除課程</h3>
        </div>
        <div class="modal-body pt-4">
          <div class="container-fluid">
            <div class="row">
              <h4 class="fs-6">確定要刪除課程？</h4>
              <div class="col-sm-7">
                <ul class="list-group list-group-flush small">
                  <li class="list-group-item px-0">課程名稱：{{ temp.title }}</li>
                  <li class="list-group-item px-0">
                    課程編號：
                    <span class="ls-0">{{ temp.id }}</span>
                  </li>
                  <li class="list-group-item px-0">
                    開課日期：
                    <span class="ls-0">{{ temp.time }}</span>
                  </li>
                </ul>
              </div>
              <div class="col-sm-5">
                <img :src="temp.imageUrl" :alt="temp.title" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 shadow shadow-top">
          <button
            type="button"
            class="btn btn-outline-gray-3 flex-grow-1 flex-sm-grow-0 me-2"
            data-bs-dismiss="modal"
          >
            關閉視窗
          </button>
          <button
            type="button"
            class="btn btn-danger flex-grow-1 flex-sm-grow-0"
            @click="delCourse(temp.id, delModal)"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
import { mapActions, mapState } from 'pinia';
import adminCourseStore from '@/stores/dashboard/AdminCourseStore';

export default {
  data() {
    return {
      delModal: null,
    };
  },
  methods: {
    ...mapActions(adminCourseStore, ['delCourse']),
  },
  computed: {
    ...mapState(adminCourseStore, ['temp']),
  },
  mounted() {
    this.delModal = new bootstrap.Modal(this.$refs.courseDelModal);
  },
};
</script>

<style lang="scss">
.bg-linear-danger {
  background: linear-gradient(110.77deg, #dc3545 -6.41%, #ff7f7f 107.79%);
}
.ls-0 {
  letter-spacing: 0 !important;
}
</style>
