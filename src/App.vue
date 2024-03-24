<template>
  <RouterView />
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped lang="scss"></style>
