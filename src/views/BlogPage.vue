<template>
  <div>
    <router-link to="/" tag="button">Home</router-link>
    <BlogView v-bind:title="$route.params.title" />
  </div>
</template>
<script>
import BlogView from "../components/BlogView.vue";

export default {
  components: { BlogView },
};
</script>