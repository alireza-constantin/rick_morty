<template>
    <h1 class="font-nav text-center text-3xl">{{ text }}</h1>
</template>
<script setup lang="ts">
    defineProps<{ text: string }>()
</script>
