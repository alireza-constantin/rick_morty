<template>
  <div class="px-4">
    <div v-if="loading">
      loadin ...
    </div>
    <div v-else-if="result">
      <h1 class="text-center text-2xl mb-8">Characters</h1>
      <ul class="flex flex-wrap gap-8">
        <Character v-for="character in result.characters.results" :key="character.id" :character="character" />
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useQuery } from '@vue/apollo-composable';
  import type { Characters } from '@/utils/types'
  import { gql } from "apollo-boost"
  import Character from '@/components/Character.vue';


  const CHARACTERS_QUERY = gql`
    {
        characters(page: 1) {
            results {
                id
                name
                status
                species
                image
            }
        }
    }
`
  const { result, loading } = useQuery<Characters>(CHARACTERS_QUERY)

</script>