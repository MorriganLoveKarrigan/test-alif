<template>
  <div class="container flex justify-between">
    <div></div>
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
.container {
  padding: 0 15px;
}
</style>
