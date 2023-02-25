import axios from "axios";

export const quotes = {
  state: () => ({
    quotes: [],
    searchQuery: "",
    selectedSort: "",
    selectedTag: "",
    selectedDateSort: "",
    selectedAuthor: "",
    sortOptions: [
      { value: "author", text: "By author" },
      { value: "content", text: "By content" },
    ],
    sortDateOptions: [
      { value: "dateAdded", text: "By added date" },
      { value: "dateModified", text: "By modified date" },
    ],
    sortAuthorOptions: [],
    isQuotesLoading: false,
  }),
  getters: {
    // sortedQuotes(state) {
    //   return [...state.quotes].sort((quote1, quote2) =>
    //     quote1[state.selectedSort]?.localeCompare(quote2[state.selectedSort])
    //   );
    // },
    // sortedAndSearchedQuotes(state, getters) {
    //   return getters.sortedQuotes.filter(
    //     (quote) =>
    //       quote.content
    //         .toLowerCase()
    //         .includes(state.searchQuery.toLowerCase()) ||
    //       quote.author.toLowerCase().includes(state.searchQuery.toLowerCase())
    //   );
    // },
    // sortedAndSearchedAndTaggedQuotes(state, getters) {
    //   if (state.selectedTag === "All") return getters.sortedAndSearchedQuotes;
    //   else {
    //     return getters.sortedAndSearchedQuotes.filter((quote) =>
    //       quote.tags.includes(state.selectedTag)
    //     );
    //   }
    // },
    uniqueTags(state) {
      const allTags = state.quotes.reduce((tags, quote) => {
        return tags.concat(quote.tags);
      }, []);
      const uniqueTags = [...new Set(allTags)];
      const allTag = { text: "All", value: "All" };
      return [allTag, ...uniqueTags.map((tag) => ({ text: tag, value: tag }))];
    },
    uniqueAuthors(state) {
      const allAuthors = state.quotes.map((quote) => quote.author);
      const uniqueAuthors = [...new Set(allAuthors)];
      const all = { text: "All", value: "All" };
      return [
        all,
        ...uniqueAuthors.map((author) => ({ text: author, value: author })),
      ];
    },
    // sortedAndSearchedAndTaggedAndSortedByDate(state, getters) {
    //   const quotes = getters.sortedAndSearchedAndTaggedQuotes;
    //   if (state.selectedDateSort === "All") {
    //     return getters.sortedAndSearchedAndTaggedQuotes;
    //   } else if (state.selectedDateSort === "dateAdded") {
    //     return [...quotes].sort(
    //       (quote1, quote2) =>
    //         new Date(quote2.dateAdded) - new Date(quote1.dateAdded)
    //     );
    //   } else {
    //     return [...quotes].sort((quote1, quote2) => {
    //       new Date(quote2.dateModified) - new Date(quote1.dateModified);
    //     });
    //   }
    // },
    filteredQuotes(state) {
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
      if (state.selectedAuthor && state.selectedAuthor !== "All") {
        quotes = quotes.filter(
          (quote) => quote.author === state.selectedAuthor
        );
      }

      if (state.selectedSort) {
        quotes = quotes.sort((quote1, quote2) =>
          quote1[state.selectedSort]?.localeCompare(quote2[state.selectedSort])
        );
      }

      if (state.selectedDateSort) {
        return quotes.sort((quote1, quote2) => {
          if (quote2[state.selectedDateSort] < quote1[state.selectedDateSort])
            return 1;
          else if (
            quote2[state.selectedDateSort] > quote1[state.selectedDateSort]
          ) {
            return -1;
          }
          return 0;
        });
      }
      return quotes;
    },
    randomQuote(state) {
      const randomIndex = Math.floor(Math.random() * state.quotes.length);
      return state.quotes[randomIndex];
    },
  },
  mutations: {
    setQuotes(state, quotes) {
      state.quotes = quotes;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSelectedTag(state, selectedTag) {
      state.selectedTag = selectedTag;
    },
    setSelectedAuthor(state, selectedAuthor) {
      state.selectedAuthor = selectedAuthor;
    },
    setSelectedDateSort(state, selectedDateSort) {
      state.selectedDateSort = selectedDateSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async getQuotes({ commit }) {
      let url = `${import.meta.env.VITE_DB_URL}/quotes` ;
      try {
        let response = await axios.get(url);
        commit("setQuotes", response.data);
      } catch (e) {
        console.log(e);
      }
    },
    async editQuote({ commit }, data) {
      const { id, formData } = data;
      let url = `${import.meta.env.VITE_DB_URL}/quotes/${id}`
      try {
        let res = await axios.put(url, formData);
        commit("setQuotes", res.data);
      } catch (e) {
        console.log(e);
      }
    },
    async createQuote({ dispatch }, formData) {
      let url = `${import.meta.env.VITE_DB_URL}/quotes`
      try {
        let res = await axios.post(url, formData);
      } catch (e) {
        console.log(e);
      } finally {
        dispatch("getQuotes");
      }
    },
    async removeQuote({ dispatch }, id) {
      let url = `${import.meta.env.VITE_DB_URL}/quotes/${id}`
      try {
        let res = await axios.delete(url);
      } catch (e) {
        console.log(e);
      } finally {
        dispatch("getQuotes");
      }
    },
  },
  namespaced: true,
};
