<template>
    <li
        class="text-accent animate-appear cursor-pointer shadow-2xl hover:scale-105 duration-500 transition-transform shadow-stone-900 mx-auto rounded-lg border-2 border-black">
        <RouterLink :to="{ name: 'characterDetails', params: { id: $props.character.id } }">
            <img :src="$props.character.image" class="rounded-lg bg-cover" />
            <div class="py-4 px-2 sm:p-4">
                <h4 class="text-sm sm:text-base">{{ $props.character.name }}</h4>
                <div class="flex justify-between items-center">
                <p class="text-sm sm:text-base">{{ $props.character.species }}</p>
                <div :title="$props.character.status" :class="['h-4 w-4 rounded-full', statusColor, ]"></div>
                </div>
            </div>
        </RouterLink>
    </li>
</template>

<script setup lang="ts">
    import type { Character } from '@/utils/types';
import { computed } from 'vue';

    const status = {
        Alive: 'bg-green-500',
        Dead: 'bg-red-500',
        unknown: 'bg-gray-500'
    }

    const props = defineProps<{ character: Character }>()
    const st = props.character.status as keyof typeof status
    const statusColor = computed(() => (
        status[st]
    ))
    
</script>