<template>
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1}">
          <a
            @click.prevent="prevPage"
            class="page-link rounded-pill rounded-end-0 pe-2 border-2"
            href="#"
            aria-label="Previous"
          >
            <span
              class="icon-base icon-sm icon-d-arrow align-text-top"
              style="transform: rotate(180deg)"
            ></span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <a
            @click.prevent='changePage(page)'
            class="page-link fw-medium border-2"
            href="#"
          >
            {{ page }}
          </a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
          <a
            @click.prevent="nextPage"
            class="page-link rounded-pill rounded-start-0 ps-2 border-2"
            href="#"
            aria-label="Next"
          >
            <span class="icon-base icon-sm icon-d-arrow align-text-top"></span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { mapActions, mapState } from 'pinia';
  import coursesDataStore from '@/stores/frontend/coursesDataStore';
  
  export default {
    data() {
      return {
        nowPage: 1, // 預設為第一頁
      };
    },
    methods: {
      ...mapActions(coursesDataStore, ['getRemoteData']),
      ...mapActions(coursesDataStore, ['changePage']),
      ...mapActions(coursesDataStore, ['nextPage']),
      ...mapActions(coursesDataStore,['prevPage'])
    },
    computed: {
      ...mapState(coursesDataStore, ['totalPages']),
      ...mapState(coursesDataStore, ['currentPage'])
    },
    watch: {
      currentPage() {
        let scrollY = 0;
        if (this.isUser) scrollY = 250;
        window.scrollTo(0, scrollY);
      },
    },
  };
  </script>
  
  <style lang="scss">
  .page-item {
    .icon-d-arrow {
      background: #707070;
    }
    &.active {
      .icon-d-arrow {
        background: #fff;
      }
      a {
        pointer-events: none; // 當頁連結禁止點擊
      }
    }
  }
  </style>