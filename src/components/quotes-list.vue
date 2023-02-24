<template>
  <div v-if="filteredQuotes.length === 0" class="text-center my-auto">
    <span class="not-found">Not found...</span>
  </div>
  <div v-else class="quotes-list">
    <transition-group name="quote-list" tag="div">
      <quotes-item
        v-for="quote in filteredQuotes"
        :key="quote.id"
        :buttons="buttons"
        :quote="quote"
        @click="viewQuote(quote.id)"
        @edit="edit"
        @remove="remove"
      />
    </transition-group>
  </div>
  <my-modal v-model:show="modalVisible">
    <quotes-item :quote="selectedQuote" />
  </my-modal>
  <my-modal v-model:show="editModal">
    <create-form v-model="editForm" :text="'Edit'" @submit="submit" />
  </my-modal>
  <my-modal v-model:show="removeModal">
    <div class="remove">
      <span class="remove--text">Delete this quote ?</span>
      <div class="remove--btns">
        <button @click="deleteRequest">Yes</button>
        <button @click="hideRemoveModal">No</button>
      </div>
    </div>
  </my-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import QuotesItem from "@/components/quotes-item.vue";
import CreateForm from "@/components/create-form.vue";

export default {
  components: { CreateForm, QuotesItem },
  data() {
    return {
      modalVisible: false,
      editModal: false,
      removeModal: false,
      selectedQuote: {},
      selectedToDelete: {},
      buttons: true,
      editForm: {},
    };
  },
  methods: {
    ...mapActions({
      getList: "quotes/getQuotes",
      editQuote: "quotes/editQuote",
      removeQuote: "quotes/removeQuote",
    }),
    viewQuote(id) {
      this.selectedQuote = this.filteredQuotes.find((el) => el.id === id);
      this.openModal();
    },
    openModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.editModal = false;
    },
    async getQuotesList() {
      await this.getList();
    },
    edit(id) {
      this.editModal = true;
      this.editForm = this.filteredQuotes.find((el) => el.id === id);
    },
    remove(id) {
      this.removeModal = true;
      this.selectedToDelete = id;
    },
    hideRemoveModal() {
      this.removeModal = false;
    },
    submit() {
      const { id } = this.editForm;
      this.editQuote({ id: id, formData: this.editForm });
      this.hideModal();
    },
    deleteRequest() {
      this.removeQuote(this.selectedToDelete);
      this.hideRemoveModal();
    },
  },
  computed: {
    ...mapGetters({
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

<style lang="scss" scoped>
.quotes-list {
  width: 50%;
}

.not-found {
  font-size: 20px;
  line-height: 22px;
  color: #181823;
}

.remove {
  padding: 20px;

  &--text {
    display: block;
    text-align: center;
  }

  &--btns {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    button {
      width: 100px;
      border: 1px solid #c0eef2;
      border-radius: 6px;
      padding: 10px 15px;

      &:hover {
        background: #537fe7;
        color: white;
      }
    }
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
