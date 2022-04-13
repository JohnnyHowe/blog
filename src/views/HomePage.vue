<template>
  <div>
    <h1>Jons Blogs</h1>
    <li v-for="title in blogs" :key="title">
      <router-link :to="getLink(title)" tag="button">{{ title }}</router-link>
    </li>
  </div>
</template>
<script>
import { getAllBlogNames } from "../blogLoader";

export default {
  data: function () {
    return {
      blogs: getAllBlogNames(),
    };
  },
  methods: {
    getLink: function (name) {
      return "/blogs/" + name;
    },
  },
};
</script>