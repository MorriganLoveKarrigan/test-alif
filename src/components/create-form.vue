<template>
  <form></form>
</template>

<script>
import FormModel from "@/models/formModel";

export default {
  data() {
    return {
      formData: new FormModel(),
    };
  },
  methods: {
    uuidGenerator() {
      let timestamp = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          const r = (timestamp + Math.random() * 16) % 16 | 0;
          timestamp = Math.floor(timestamp / 16);
          return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
    },
  },
  mounted() {
    console.log(this.uuidGenerator());
  },
};
</script>

<style scoped></style>
