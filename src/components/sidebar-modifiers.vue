<template>
  <div class="sidebar">
    <sidebar-filter />
    <div class="my-4 text-center">
      <my-button :text="'Add Quote'" @click="showModal" />
    </div>
    <div>
      <quotes-item :quote="randomQuote" />
      <div class="flex justify-center">
        <my-button text="Get Random Quote" @click="getRandomQuote" />
      </div>
    </div>
  </div>
  <my-modal v-model:show="dialogVisible">
    <create-form v-model="formData" :text="'Create'" @submit="submit" />
  </my-modal>
</template>

<script>
import SidebarFilter from "@/components/sidebar-filter.vue";
import CreateForm from "@/components/create-form.vue";
import FormModel from "@/models/formModel";
import { mapActions, mapGetters } from "vuex";
import QuotesItem from "@/components/quotes-item.vue";
import MyButton from "@/components/UI/my-button.vue";

export default {
  components: { MyButton, QuotesItem, SidebarFilter, CreateForm },
  data() {
    return {
      formData: new FormModel(),
      dialogVisible: false,
      randomQuote: {},
    };
  },
  methods: {
    ...mapActions({
      createQuote: "quotes/createQuote",
    }),
    showModal() {
      this.dialogVisible = true;
    },
    hideModal() {
      this.dialogVisible = false;
    },
    prepareToCreate() {
      this.formData.tags = this.formData.tags.toString().split(" ");
    },
    async submit() {
      await this.prepareToCreate();
      await this.createQuote(this.formData);
      await this.hideModal();
    },
    getRandomQuote() {
      const quotes = this.filteredQuotes;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];

      if (randomQuote.id === this.randomQuote?.id) {
        return this.getRandomQuote();
      }
      this.randomQuote = randomQuote;
    },
  },
  computed: {
    ...mapGetters({
      filteredQuotes: "quotes/filteredQuotes",
    }),
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 15px;
  height: max-content;
  border: 1px solid #c0eef2;
  padding: 15px;
  width: 50%;
  border-radius: 12px;
  position: sticky;
  top: 15px;
}

@media (max-width: 900px)  {
  .sidebar{
    position: static !important;
    width: 100% !important;
    margin-left: 0;
  }
}

</style>
