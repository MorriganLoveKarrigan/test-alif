<template>
  <div class="my-container main-page flex justify-between">
    <quotes-list />
    <sidebar-modifiers />
  </div>
</template>

<script>
import QuotesList from "@/components/quotes-list.vue";
import SidebarModifiers from "@/components/sidebar-modifiers.vue";

export default {
  components: { SidebarModifiers, QuotesList },
};
</script>

<style scoped>

.main-page{
  width: 100%;
}

@media (max-width: 900px)  {
  .main-page{
    flex-direction: column-reverse;
  }
}

</style>
