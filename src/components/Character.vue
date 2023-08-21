<template>
    <div class="border-2 shadow-xl">
        <img :src="$props.character.image" />
        <div>
            <h4>{{ $props.character.name }}</h4>
            <p>name: {{ $props.character.status }}</p>
            <p>Specie: {{ $props.character.species }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { Character } from '@/utils/types';

    defineProps<{ character: Character }>()
</script>