<template>
  <form @click.prevent>
    <my-input class="mt-4" v-model="modelValue.author" :placeholder="'Author'" />
    <span class="validate-error" v-if="validate.author">{{ validate.author }}</span>
    <my-input class="mt-4" v-model="modelValue.content" :placeholder="'Quote'" />
    <span class="validate-error" v-if="validate.content">{{ validate.content }}</span>
    <my-input class="mt-4" v-model="modelValue.tags" :placeholder="'Tags'" />
    <span class="validate-error" v-if="validate.tags">{{ validate.tags }}</span>
    <div class="flex justify-center">
      <my-button :text="text" @click="submitForm"/>
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
  data(){
    return {
      validate: {
        author: "",
        content: "",
        tags:"",
      }
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      if (!this.modelValue.author) {
        this.validate.author = 'Author name is required';
        isValid = false;
      } else {
        this.validate.author = '';
      }
      if (!this.modelValue.content) {
        this.validate.content = 'Quote is required';
        isValid = false;
      } else {
        this.validate.content = ""
      }
      if (this.modelValue.tags.length === 0) {
        this.validate.tags = "Tag/Tags required"
        isValid = false;
      } else {
        this.validate.tags = ""
      }
      return isValid;
    },
    submitForm(){
      if (this.validateForm()) {
        this.$emit('submit')
      }
    },
  },

};
</script>

<style scoped>
.validate-error {
  color: red;
  margin-bottom: 10px;
}

</style>
