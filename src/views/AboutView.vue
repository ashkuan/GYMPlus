<template>
 001
</template>

<script>


export default {
  data() {
    return {
      url: "",
      path: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.url = import.meta.env.VITE_API_URL;
    this.path = import.meta.env.VITE_API_PATH;
  },
};
</script>

