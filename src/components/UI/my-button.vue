<template>
  <button class="my-button">{{ text }}</button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    text: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.my-button {
  padding: 10px;
  border: 1px solid #c0eef2;
  width: 200px;
  border-radius: 6px;
  text-align: center;

  &:hover {
    background: #537fe7;
    color: white;
  }
}
</style>
