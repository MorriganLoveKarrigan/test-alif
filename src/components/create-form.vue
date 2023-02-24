<template>
  <form @click.prevent>
    <my-input v-model="modelValue.author" :placeholder="'Quote Author'" />
    <my-input v-model="modelValue.content" :placeholder="'Quote'" />
    <my-input v-model="modelValue.tags" :placeholder="'Tags'" />
    <div class="flex justify-center">
      <my-button :text="text" @click="$emit('submit')" />
    </div>
  </form>
</template>

<script>
import MyInput from "@/components/UI/my-input.vue";
import MyButton from "@/components/UI/my-button.vue";

export default {
  components: { MyButton, MyInput },
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    text: {
      type: String,
      default: "",
    },
  },
  methods: {},
};
</script>

<style scoped></style>
