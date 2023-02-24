<template>
  <div class="authors-list">
    <authors-item
      v-for="author in authorsList"
      :key="author.text"
      :author="author"
    />
  </div>
</template>

<script>
import AuthorsItem from "@/components/authors-item.vue";

export default {
  components: { AuthorsItem },
  props: {
    authorsList: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.authors-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
