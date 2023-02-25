<template>
  <div class="quote">
    <div class="quote--content p-10">
      <div v-if="isEmpty" class="quote-empty">
        I was empty... until i clicked the button bellow...
      </div>
      <div v-else>
        <div v-if="buttons" class="flex justify-end">
          <button
              class="quote--content-btns"
              @click.stop="$emit('edit', quote.id)"
          >
            <img alt="icons" src="../../src/static/icons/pencil.svg"/>
          </button>
          <button
              class="quote--content-btns"
              @click.stop="$emit('remove', quote.id)"
          >
            <img alt="icons" src="../../src/static/icons/delete.svg"/>
          </button>
        </div>
        <div class="quote--content-text">
          {{ quote.content }}
        </div>
        <div class="quote--content-author">
          <span>~{{ quote.author }}</span>
        </div>
        <div class="quote--content-tags">
          <span class="mr-1">Tags:</span>
          <span v-for="(tag, index) in quote.tags" :key="index" class="mr-1"
          >{{ tag }}
        </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["edit", "remove"],
  props: {
    quote: {
      type: Object,
      default: () => ({}),
      required: true,
    },
    buttons: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isEmpty() {
      return Object.keys(this.quote).length === 0
    }
  }
};
</script>

<style lang="scss" scoped>
.quote {
  border: 1px solid #181823;
  border-radius: 12px;
  margin: 15px auto;
  cursor: pointer;

  &--content {
    display: flex;
    flex-direction: column;
    background: rgba(83, 127, 231, 0.1);

    &-text {
      font-style: italic;
      font-size: 18px;
    }

    &-author {
      margin-top: 10px;
      font-weight: 600;
      font-size: 16px;
      align-self: end;
    }

    &-tags {
      margin-top: 10px;
      font-weight: 300;
      font-size: 12px;
      align-self: end;
    }

    &-btns {
      height: 25px;
      width: 25px;
      margin-left: 5px;
      cursor: pointer;

      &:hover {
        border: 1px solid #FFF;
        border-radius: 6px;
      }
    }
  }
}
</style>
