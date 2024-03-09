<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a
          @click.prevent="getRemoteData(nowTarget, nowPage - 1, isUser)"
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
        v-for="page in pagination.total_pages"
        :key="page"
        :class="{ active: nowPage === page }"
      >
        <a
          @click.prevent="getRemoteData(nowTarget, page, isUser)"
          class="page-link fw-medium border-2"
          href="#"
        >
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a
          @click.prevent="getRemoteData(nowTarget, nowPage + 1, isUser)"
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
import getDataStore from '@/stores/GetDataStore';

export default {
  props: ['nowTarget', 'isUser'],
  data() {
    return {
      url: import.meta.env.VITE_API_URL,
      path: import.meta.env.VITE_API_PATH,
      nowPage: 1,
    };
  },
  methods: {
    ...mapActions(getDataStore, ['getRemoteData']),
  },
  computed: {
    ...mapState(getDataStore, ['pagination']),
  },
  watch: {
    pagination(value) {
      this.nowPage = value.current_page;
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
  }
}
</style>
