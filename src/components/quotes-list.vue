<template>
  <div v-if="filteredQuotes.length === 0" class="text-center my-auto">
    <span class="not-found">Not found...</span>
  </div>
  <div v-else class="quotes-list">
    <transition-group name="quote-list" tag="div">
      <quotes-item
        v-for="quote in filteredQuotes"
        :key="quote._id"
        :quote="quote"
      />
    </transition-group>
    <div class="pagination">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{
          'pagination--current-page': page === pageNumber,
        }"
        class="pagination--page-number"
        @click="clickPage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import QuotesItem from "@/components/quotes-item.vue";

export default {
  components: { QuotesItem },
  props: {},
  methods: {
    ...mapActions({
      getList: "quotes/getQuotes",
      loadMoreQuotes: "quotes/loadMoreQuotes",
    }),

    async getQuotesList() {
      await this.getList();
    },
    async clickPage(number) {
      await this.loadMoreQuotes(number);
    },
  },
  computed: {
    ...mapGetters({
      filteredQuotes: "quotes/filteredQuotes",
    }),
    ...mapState({
      page: (state) => state.quotes.page,
      totalPages: (state) => state.quotes.totalPages,
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

<style lang="scss" scoped>
.quotes-list {
  width: 50%;
}

.not-found {
  font-size: 20px;
  line-height: 22px;
  color: #181823;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &--current-page {
    color: #537fe7;
    padding: 10px 15px !important;
  }

  &--page-number {
    border: 1px solid #537fe7;
    padding: 10px;
    border-radius: 6px;
    margin: 0 5px;
    cursor: pointer;
  }
}

.quote-list-item {
  display: inline-block;
  margin-right: 10px;
}

.quote-list-enter-active,
.quote-list-leave-active {
  transition: all 0.4s ease;
}

.quote-list-enter-from,
.quote-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.quote-list-move {
  transition: transform 0.4s ease;
}
</style>
