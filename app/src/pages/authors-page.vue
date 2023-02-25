<template>
  <div class="my-container">
    <authors-list :authors-list="authorsList" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AuthorsList from "@/components/UI/authors-list.vue";

export default {
  name: "Authors-Page",
  components: { AuthorsList },
  computed: {
    ...mapGetters({
      authorsList: "authors/authorsList",
    }),
  },
  methods: {
    ...mapActions({
      getAuthors: "authors/getAuthors",
    }),
  },
  mounted() {
    try {
      this.getAuthors();
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped></style>
