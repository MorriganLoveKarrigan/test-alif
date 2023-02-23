<template>
  <div class="quote">
    <div class="quote--content p-10">
      <div class="quote--content-text">
        {{ quote.content }}
      </div>
      <div class="quote--content-author">
        <span>~{{ quote.author }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
};
</script>

<style scoped>
.quote {
  border: 1px solid #181823;
  border-radius: 12px;
  margin: 15px auto;
}

.quote--content {
  display: flex;
  flex-direction: column;
  background: rgba(83, 127, 231, 0.1);
}

.quote--content-text {
  font-style: italic;
  font-size: 18px;
}

.quote--content-author {
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
  align-self: end;
}
</style>
