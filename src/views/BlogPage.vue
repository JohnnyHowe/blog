<template>
  <BlogView v-bind:title=$route.params.title />
</template>
<script>
import BlogView from "../components/BlogView.vue";

export default {
  data: function() {
    return {
      title: 'test'
    }
  },
  components: { BlogView },
};
</script>