import { createStore } from "vuex";
import { quotes } from "./quotes";
import { authors } from "@/store/authors";

export default createStore({
  modules: {
    quotes: quotes,
    authors: authors,
  },
});
