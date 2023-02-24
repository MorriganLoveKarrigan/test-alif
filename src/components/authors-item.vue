<template>
  <div class="author-item">
    <div class="author-item--name">
      {{ author.text }}
    </div>
    <div class="author-item--tags">
      <span
        v-for="(tag, index) in author.tags"
        :key="index"
        class="author-item--tags-tag"
      >
        ~{{ tag }}~
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.author-item {
  background: white;
  padding: 20px;
  margin: 30px;
  border-radius: 12px;
  width: max-content;

  &--name {
    font-size: 20px;
    font-style: italic;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #537fe7;
      opacity: 0.5;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
}
</style>
