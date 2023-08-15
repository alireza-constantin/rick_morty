<script setup lang="ts">
  import bigScreen from '@/assets/peakpx-big.jpg'
  import smallScreen from '@/assets/peakpx-small.jpg'
</script>

<template>
  <main>
    <div>
        <picture >
          <source  media="(max-width:420px)" :srcset="smallScreen" />
          <img :src="bigScreen" />
        </picture>
      </div>
  </main>
</template>
