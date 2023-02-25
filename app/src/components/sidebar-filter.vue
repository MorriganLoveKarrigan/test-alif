<template>
  <form class="sidebar-form" @click.stop>
    <div>
      <my-input
          :model-value="searchQuery"
          :placeholder="'Search...'"
          @update:model-value="setSearchedQuery"
      />
    </div>
    <div class="flex justify-between my-4">
      <my-select
          :label="'Order by'"
          :model-value="selectedSort"
          :options="sortOptions"
          @update:model-value="setSelectedSort"
      />
      <my-select
          :label="'Sort by tags '"
          :model-value="selectedTag"
          :options="uniqueTags"
          @update:model-value="setSelectedTag"
      />
    </div>
    <div class="flex justify-between">
      <my-select
          :label="'Order by date '"
          :model-value="selectedDateSort"
          :options="sortDateOptions"
          @update:model-value="setSelectedDateSort"
      />
      <my-select
          :label="'Sort by author '"
          :model-value="selectedAuthor"
          :options="uniqueAuthors"
          @update:model-value="setSelectedAuthor"
      />
    </div>
  </form>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      setSearchedQuery: "quotes/setSearchQuery",
      setSelectedSort: "quotes/setSelectedSort",
      setSelectedTag: "quotes/setSelectedTag",
      setSelectedDateSort: "quotes/setSelectedDateSort",
      setSelectedAuthor: "quotes/setSelectedAuthor",
    }),
  },
  computed: {
    ...mapState({
      selectedSort: (state) => state.quotes.selectedSort,
      selectedTag: (state) => state.quotes.selectedTag,
      sortOptions: (state) => state.quotes.sortOptions,
      sortDateOptions: (state) => state.quotes.sortDateOptions,
      selectedDateSort: (state) => state.quotes.selectedDateSort,
      selectedAuthor: (state) => state.quotes.selectedAuthor,
      searchQuery: (state) => state.quotes.searchQuery,
    }),
    ...mapGetters({
      uniqueTags: "quotes/uniqueTags",
      uniqueAuthors: "quotes/uniqueAuthors",
    }),
  },
  mounted() {
    console.log('mounted')
  },
  updated() {
    console.log('updated')
  }
};
</script>

<style scoped>
.sidebar-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
