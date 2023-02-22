<template>
  <div class="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>


<script>

import {mapActions, mapGetters} from "vuex";
import Navbar from './components/Navbar.vue';
import Main from "./pages/main.vue";

export default {
  components: {Main, Navbar},
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      getList: "quotes/getQuotes"
    }),

    getQuotesList() {
      this.getList()
    }
  },
  computed: {
    ...mapGetters({
      quotesList: 'quotes/quotesList'
    })
  },


}
</script>

<style scoped>
</style>
