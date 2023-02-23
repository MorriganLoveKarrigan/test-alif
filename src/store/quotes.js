import axios from "axios";

export const quotes = {
  state: () => ({
    quotes: [],
    searchQuery: "",
    selectedSort: "",
    selectedTag: "",
    selectedDateSort: "",
    page: 1,
    limit: 10,
    totalPages: 0,
    sortOptions: [
      { value: "author", text: "By author" },
      { value: "content", text: "By content" },
    ],
    sortDateOptions: [
      { value: "All", text: "All" },
      { value: "dateAdded", text: "By added date" },
      { value: "dateModified", text: "By modified date" },
    ],
    isQuotesLoading: false,
  }),
  getters: {
    sortedQuotes(state) {
      return [...state.quotes].sort((quote1, quote2) =>
        quote1[state.selectedSort]?.localeCompare(quote2[state.selectedSort])
      );
    },
    sortedAndSearchedQuotes(state, getters) {
      return getters.sortedQuotes.filter(
        (quote) =>
          quote.content
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase()) ||
          quote.author.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    sortedAndSearchedAndTaggedQuotes(state, getters) {
      if (state.selectedTag === "All") return getters.sortedAndSearchedQuotes;
      else {
        return getters.sortedAndSearchedQuotes.filter((quote) =>
          quote.tags.includes(state.selectedTag)
        );
      }
    },
    uniqueTags(state) {
      const allTags = state.quotes.reduce((tags, quote) => {
        return tags.concat(quote.tags);
      }, []);
      const uniqueTags = [...new Set(allTags)];
      const allTag = { text: "All", value: "All" };
      return [allTag, ...uniqueTags.map((tag) => ({ text: tag, value: tag }))];
    },
    sortedAndSearchedAndTaggedAndSortedByDate(state, getters) {
      const quotes = getters.sortedAndSearchedAndTaggedQuotes;
      if (state.selectedDateSort === "All") {
        return getters.sortedAndSearchedAndTaggedQuotes;
      } else if (state.selectedDateSort === "dateAdded") {
        return [...quotes].sort(
          (quote1, quote2) =>
            new Date(quote2.dateAdded) - new Date(quote1.dateAdded)
        );
      } else {
        return [...quotes].sort((quote1, quote2) => {
          new Date(quote2.dateModified) - new Date(quote1.dateModified);
        });
      }
    },
    filteredQuotes(state, getters) {
      let quotes = state.quotes;

      if (state.searchQuery) {
        quotes = quotes.filter(
          (quote) =>
            quote.content
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase()) ||
            quote.author.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }

      if (state.selectedTag && state.selectedTag !== "All") {
        quotes = quotes.filter((quote) =>
          quote.tags.includes(state.selectedTag)
        );
      }

      if (state.selectedSort) {
        quotes = quotes.sort((quote1, quote2) =>
          quote1[state.selectedSort]?.localeCompare(quote2[state.selectedSort])
        );
      }

      if (state.selectedDateSort) {
        quotes = quotes.sort(
          (quote1, quote2) =>
            new Date(quote1[state.selectedDateSort]) -
            new Date(quote2[state.selectedDateSort])
        );
      }

      return quotes;
    },
  },
  mutations: {
    setQuotes(state, quotes) {
      state.quotes = quotes;
    },
    setLoading(state, bool) {
      state.isQuotesLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSelectedTag(state, selectedTag) {
      state.selectedTag = selectedTag;
    },
    setSelectedDateSort(state, selectedDateSort) {
      state.selectedDateSort = selectedDateSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async getQuotes({ commit, state }) {
      commit("setLoading", true);
      let url = "http://localhost:3000/quotes";
      try {
        let response = await axios.get(url, {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setQuotes", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
