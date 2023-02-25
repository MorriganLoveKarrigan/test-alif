<template>
    <select
        id="options"
        class="my-select bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-bind:value="modelValue"
        @change="changeOption"
    >          By author

      <option disabled value="">Sort by</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-select {
  padding: 10px;
  margin-right: 10px;
  border-radius: 6px;

  &:focus {
    outline: none;
  }
}
</style>
