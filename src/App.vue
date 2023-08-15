<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  const Links = ['characters', 'locations', 'episodes']
  import logo from '@/assets/logo.jpg'

</script>

<template>
  <head>

  </head>
  <header>
    <div class="flex justify-between items-center px-4 py-4 sm:px-6">
      <RouterLink to="/">
        <img :src="logo" class="w-8 h-8 sm:w-16 sm:h-16" />
      </RouterLink>
      <nav class="nav flex gap-4 items-center tracking-wide text-accent font-nav sm:text-2xl">
        <RouterLink v-for="link in Links" class="hover:underline underline-offset-4 decoration-wavy decoration-accent"
          :to="link === 'home' ? '/' : link">{{ link }}</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
  .nav {
    text-shadow: 3px 0.5px #d7ff68;
  }
</style>