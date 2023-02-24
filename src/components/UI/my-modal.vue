<template>
  <div v-if="show" class="modal" @click.stop="hideModal">
    <div class="modal--content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 10;

  &--content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 400px;
    padding: 20px;
  }
}
</style>
