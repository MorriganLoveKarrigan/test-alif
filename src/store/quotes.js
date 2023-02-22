import axios from "axios";

export const quotes = {
    state: () => ({
        quotes: [],
    }),
    getters: {
        quotesList(state) {
            return state.quotes
        },
    },
    mutations: {
        setQuotes(state,quotes) {
            state.quotes = quotes
        }
    },
    actions: {
        async getQuotes(ctx) {
            const {commit} = ctx
            let url = "https://api.quotable.io/quotes"
            let response = await axios.get(url)
            console.log(response)
            commit("setQuotes",response.data.results)
        }
    },
    namespaced: true
}
