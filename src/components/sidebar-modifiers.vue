<template>
  <div class="sidebar">
    <sidebar-filter />
  </div>
</template>

<script>
import SidebarFilter from "@/components/sidebar-filter.vue";

export default {
  components: { SidebarFilter },
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
  border-radius: 12px;
  width: 50%;
  position: sticky;
  top: 15px;
}
</style>
