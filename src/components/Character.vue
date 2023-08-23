<template>
    <li
        class="text-accent animate-appear cursor-pointer shadow-2xl hover:scale-105 duration-500 transition-transform shadow-stone-900 mx-auto rounded-lg border-2 border-black">
        <RouterLink :to="{ name: 'characterDetails', params: { id: $props.character.id } }">
            <img :src="$props.character.image" class="rounded-lg w-[300px] h-[300px]" />
            <div class="p-4">
                <h4>{{ $props.character.name }}</h4>
                <p>name: {{ $props.character.status }}</p>
                <p>Specie: {{ $props.character.species }}</p>
            </div>
        </RouterLink>
    </li>
</template>

<script setup lang="ts">
    import type { Character } from '@/utils/types';

    defineProps<{ character: Character }>()
</script>