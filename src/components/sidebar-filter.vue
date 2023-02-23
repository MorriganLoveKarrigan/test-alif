<template>
  <form class="sidebar-form" @click.prevent>
    <div>
      <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchedQuery"
      />
    </div>
    <div class="flex justify-between my-4">
      <my-select
        :model-value="selectedSort"
        :options="sortOptions"
        @update:model-value="setSelectedSort"
      />
      <my-select
        :model-value="selectedTag"
        :options="uniqueTags"
        @update:model-value="setSelectedTag"
      />
    </div>
    <div class="flex justify-between">
      <my-select
        :model-value="selectedDateSort"
        :options="sortDateOptions"
        @update:model-value="setSelectedDateSort"
      />
      <my-select :options="options" />
    </div>
    <div class="my-4 text-center">
      <my-button :text="'Create'" />
    </div>
  </form>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      options: [
        {
          text: "1",
          value: "1",
        },
        {
          text: "2",
          value: "2",
        },
        {
          text: "3",
          value: "3",
        },
      ],
    };
  },
  methods: {
    ...mapMutations({
      setSearchedQuery: "quotes/setSearchQuery",
      setSelectedSort: "quotes/setSelectedSort",
      setSelectedTag: "quotes/setSelectedTag",
      setSelectedDateSort: "quotes/setSelectedDateSort",
    }),
  },
  computed: {
    ...mapState({
      selectedSort: (state) => state.quotes.selectedSort,
      selectedTag: (state) => state.quotes.selectedTag,
      sortOptions: (state) => state.quotes.sortOptions,
      sortDateOptions: (state) => state.quotes.sortDateOptions,
      selectedDateSort: (state) => state.quotes.selectedDateSort,
      searchQuery: (state) => state.quotes.searchQuery,
    }),
    ...mapGetters({
      uniqueTags: "quotes/uniqueTags",
    }),
  },
  mounted() {},
};
</script>

<style scoped>
.sidebar-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
