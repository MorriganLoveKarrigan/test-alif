<template>
  <div class="navigation-bar">
    <nav
        class="navigate px-6 py-4 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex w-full items-center justify-end">
        <router-link
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400 mr-4"
            to="/"
        >Quotes List
        </router-link>
        <router-link
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400 ml-4"
            to="/authors"
        >
          Authors
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav-bar",
};
</script>

<style scoped>
.navigation-bar {
  background: #c0eef2;
}

.navigate {
  height: 100%;
}
</style>
