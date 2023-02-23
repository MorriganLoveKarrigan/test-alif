<template>
  <div class="quotes-list">
    <div
      v-if="sortedAndSearchedQuotes.length === 0"
      class="text-center mt-auto"
    >
      <span class="not-found">Not found...</span>
    </div>
    <transition-group v-else name="quote-list" tag="div">
      <quotes-item
        v-for="quote in filteredQuotes"
        :key="quote._id"
        :quote="quote"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import QuotesItem from "@/components/quotes-item.vue";

export default {
  components: { QuotesItem },
  props: {},
  methods: {
    ...mapActions({
      getList: "quotes/getQuotes",
    }),

    async getQuotesList() {
      await this.getList();
    },
  },
  computed: {
    ...mapGetters({
      sortedQuotes: "quotes/sortedQuotes",
      sortedAndSearchedQuotes: "quotes/sortedAndSearchedQuotes",
      sortedAndSearchedAndTaggedQuotes:
        "quotes/sortedAndSearchedAndTaggedQuotes",
      sortedAndSearchedAndTaggedAndSortedByDate:
        "quotes/sortedAndSearchedAndTaggedAndSortedByDate",
      filteredQuotes: "quotes/filteredQuotes",
    }),
  },
  mounted() {
    try {
      this.getQuotesList();
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
.quotes-list {
  margin: auto;
  width: 50%;
}

.not-found {
  font-size: 20px;
  line-height: 22px;
  color: #181823;
}

.quote-list-enter-active,
.quote-list-leave-active {
  transition: all 0.5s ease-in-out;
}

.quote-list-enter-from,
.quote-list-leave-to {
  opacity: 0;
  transform: translateY(130px);
}

.quote-list-move,
.quote-list-enter-active,
.quote-list-leave-active {
  transition: all 0.5s ease-in-out;
}

.quote-list-enter-from,
.quote-list-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.quote-list-leave-active {
  position: absolute;
}
</style>
