<template>
  <div>
    <div v-if="loading">
      loadin ...
    </div>
    <div v-else-if="result">
      <h1>Characters</h1>
      <Character v-for="character in result.characters.results" :key="character.id" :character="character" />
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