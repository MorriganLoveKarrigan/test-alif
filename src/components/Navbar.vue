<template>
  <div class="navigation-bar">
    <nav
        class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
    >
      <div class="flex items-center justify-between">
        <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
        >Logo
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.navigation-bar {
  background: #C0EEF2;
}
</style>
