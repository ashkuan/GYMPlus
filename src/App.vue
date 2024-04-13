<template>
  <RouterView />
</template>

<script>
import aos from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    aos.init();
  },
};
</script>

<style scoped lang="scss"></style>
