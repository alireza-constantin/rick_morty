<template>
    <li
        class="text-accent animate-appear cursor-pointer  hover:scale-105 duration-500 transition-transform shadow-[2px_2px_10px_4px] mx-auto rounded-t-lg rounded-b-md relative"
        :class="statusShadow"
        >
        <RouterLink :to="{ name: 'characterDetails', params: { id: $props.character.id } }">
            <img :src="$props.character.image" class="rounded-lg bg-cover" />
            <div class="py-4 px-2 sm:p-4">
                <h4 class="text-sm sm:text-base">{{ $props.character.name }}</h4>
                <div class="flex justify-between items-center">
                    <p class="text-sm sm:text-base">{{ $props.character.species }}</p>
                </div>
            </div>
            <div :title="$props.character.status" :class="['h-1 absolute bottom-0 w-full rounded-b-lg', statusColor]"></div>
        </RouterLink>
    </li>
</template>

<script setup lang="ts">
    import type { Character } from '@/utils/types';
    import { computed } from 'vue';

    const status = {
        Alive: 'green-500',
        Dead: 'red-400',
        unknown: 'gray-500'
    }

    const shadow = {
        Alive: 'shadow-green-500/20',
        Dead: 'shadow-red-400/30',
        unknown: 'shadow-gray-500/30'
    }

    const props = defineProps<{ character: Character }>()
    const st = props.character.status as keyof typeof status
    const statusColor = computed(() => (
        'bg-' + status[st]
    ))
    const statusShadow = computed(() => (
        shadow[st]
    ))

</script>