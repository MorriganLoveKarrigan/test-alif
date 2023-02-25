import axios from "axios";

export const authors = {
  state: () => ({
    authors: [],
  }),
  getters: {
    authorsList(state) {
      return state.authors;
    },
  },
  mutations: {
    setAuthors(state, quotes) {
      const authors = {};
      quotes.forEach((quote) => {
        const author = quote.author;
        const tags = quote.tags;
        if (authors[author]) {
          authors[author].tags.push(...tags);
        } else {
          authors[author] = { text: author, tags: [...tags] };
        }
      });
      state.authors = Object.values(authors);
    },
  },
  actions: {
    async getAuthors({ commit }) {
      let url = `${import.meta.env.VITE_DB_URL}/quotes`
      try {
        let response = await axios.get(url);
        commit("setAuthors", response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
