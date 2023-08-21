<template>
  <div class="px-4">
    <div v-if="result">
      <h1 class="text-center text-2xl mb-8">Characters</h1>
      <ul class="flex flex-wrap gap-8">
        <Character v-for="character in characters" :key="character.id" :character="character" />
      </ul>
    </div>
  </div>
  <button class="mx-auto mt-10 border-2" @click="fetchMoreCh" >more...</button>
  <div class="text-center text-2xl pt-2 pb-8" v-if="loading">
    loading ...
  </div>
</template>
<script setup lang="ts">
  import { useQuery } from '@vue/apollo-composable';
  import type {Characters } from '@/utils/types'
  import { gql } from "apollo-boost"
  import Character from '@/components/Character.vue';
import { computed, watchEffect } from 'vue';
  // import { onMounted, ref, watchEffect } from 'vue';


  const CHARACTERS_QUERY = gql`
    query Characters($page: Int) {
  characters(page: $page) {
    results {
      id
      name
      status
      species
      gender
      image
    }
  }
}
`

  const { result, loading, error, fetchMore } = useQuery<Characters>(CHARACTERS_QUERY, () => ({
    page: 1
  }))

  let nextPage = 1

  const characters = computed(() => result.value?.characters.results)
  function fetchMoreCh(){
    nextPage++
    fetchMore({
      variables: {
        page: nextPage
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if(!fetchMoreResult?.characters) return prevResult

        return {
          characters: {
          ...prevResult.characters,
          results: [
            ...prevResult.characters.results,
            ...fetchMoreResult?.characters.results
            ]
          }
        }


      } 
    })
  }

  // window.addEventListener('scroll', () => {
  //   if (loading.value || error.value) return;

  //   const scrollBottom =
  //     window.innerHeight + window.scrollY >= document.body.scrollHeight;

  //   if (scrollBottom) {
    
  //   }
    // page++
  // });

</script>