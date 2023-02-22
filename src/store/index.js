import {createStore} from "vuex";
import {quotes} from "./quotes";

export default createStore({
    modules: {
        quotes: quotes
    }
})
