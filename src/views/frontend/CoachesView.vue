<template>
  <Loading :active="isLoading" />
  <div class="bg-white" style="min-height: 100vh">
    <div
      class="banner"
      style="
        background-image: url('https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
      "
    ></div>
    <main class="container-lg">
      <nav aria-label="breadcrumb" class="mt-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="mx-2">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">認識教練</li>
        </ol>
      </nav>
      <section class="my-3">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          <div
            class="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start"
            v-for="(item, index) in coaches"
            :key="index"
            data-aos="flip-left"
            data-aos-duration="500"
          >
            <div class="card p-1" style="width: 18rem">
              <div class="w-100 d-flex justify-content-center">
                <img
                  :src="item.imageUrl"
                  :alt="item.name"
                  class="rounded-circle"
                  style="width: 250px; height: 250px"
                />
              </div>
              <h2 class="h5 card-title text-center">{{ item.name }} 教練</h2>
              <a href="#" class="stretched-link" @click.prevent="showModal(item.name)"></a>
            </div>
          </div>
        </div>
      </section>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="modal"
      >
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="h5 modal-title" id="exampleModalLabel">{{ coacheData?.name }}教練</h2>
              <button
                type="button"
                class="btn-close"
                @click.prevent="hideModal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container-lg">
                <div class="row g-0 mb-3">
                  <div class="col">
                    <img
                      :src="coacheData?.imageUrl"
                      :alt="coacheData?.name"
                      class="rounded-circle"
                      style="width: 150px; height: 150px"
                    />
                  </div>
                  <div class="col d-flex flex-column justify-content-center">
                    <p
                      v-for="(item, index) in coacheData?.motto"
                      :key="index"
                      :class="'ps-' + (index * 2 + 1) + ' mb-2' + ' fw-bold'"
                    >
                      {{ item }}
                    </p>
                  </div>
                </div>
                <h3 class="h5">教學專長</h3>
                <ul>
                  <li v-for="(item, index) in coacheData?.teachingExpertise" :key="index">
                    {{ item }}
                  </li>
                </ul>
                <h3 class="h5">專業證照</h3>
                <ul>
                  <li v-for="(item, index) in coacheData?.certifications" :key="index">
                    {{ item }}
                  </li>
                </ul>
                <h3 class="h5">教學經歷</h3>
                <ul>
                  <li v-for="(item, index) in coacheData?.teachingExperience" :key="index">
                    {{ item }}
                  </li>
                </ul>
                <h3 class="h5">參與比賽</h3>
                <ul>
                  <li v-for="(item, index) in coacheData?.competitionParticipation" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click.prevent="pushPage(coacheData?.name)">
                相關課程
              </button>
              <button type="button" class="btn btn-secondary" @click.prevent="hideModal">
                關閉
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import FakeDataStore from '@/stores/FakeDataStore';
import coursesDataStore from '@/stores/frontend/coursesDataStore';
import { mapActions, mapState } from 'pinia';
import { Modal } from 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  data() {
    return {
      modal: {},
      coacheData: {},
      isLoading: true,
    };
  },
  computed: {
    ...mapState(FakeDataStore, ['coaches']),
  },
  components: {
    Loading,
  },
  methods: {
    ...mapActions(coursesDataStore,['checkCoachName']),
    showModal(name) {
      const matchingKey = Object.keys(this.coaches).find((key) => key === name);
      const matchingData = this.coaches[matchingKey];
      this.coacheData = matchingData;
      setTimeout(() => {
        this.modal.show();
      }, 100);
    },
    hideModal() {
      this.modal.hide();
      this.coacheData = {};
    },
    pushPage(name) {
      setTimeout(() => {
        this.modal.hide();
        this.checkCoachName(name);
      }, 50);
      this.$router.push(`/courses`);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    setTimeout(() => {
      this.isLoading = false;
    }, 250);
  },
};
</script>

