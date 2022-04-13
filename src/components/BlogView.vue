<template>
  <vue-markdown :source="blogText" />
</template>
<script>
import { getBlogRaw } from "../blogLoader";
import VueMarkdown from "vue-markdown-render";

export default {
  data: function () {
    return {
      blogText: "Loading ...",
    };
  },
  mounted: function () {
    getBlogRaw(this.$props.title).then((value) => {
        this.blogText = value;
    });
  },
  props: ["title"],
  components: { VueMarkdown },
};
</script>