<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  const Links = ['home', 'characters', 'locations', 'episodes']

</script>

<template>
  <head>

  </head>
  <header>

    <nav class="nav flex justify-around items-center tracking-wide py-4 text-accent font-nav text-2xl">
      <RouterLink v-for="link in Links" class="hover:underline underline-offset-4 decoration-wavy decoration-accent"
        :to="link === 'home' ? '/' : link">{{ link }}</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
<style scoped>
  .nav {
    text-shadow: 3px 0.5px #d7ff68;
  }
</style>