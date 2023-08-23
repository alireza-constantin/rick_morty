<template>
  <div class="px-4">
    <div>
      <h1 class="text-center text-2xl">Characters</h1>
       <ul v-if="result" class="flex flex-wrap gap-8 mt-8">
        <Character v-for="character in characters" :key="character.id" :character="character" />
      </ul>
      <ul v-if="loading" class="flex flex-wrap gap-8 mt-8">
        <Skeleton v-for="i in 20" :key="i" />
        </ul>
    </div>
  </div>
  <button class="mx-auto mt-10 border-2" @click="onMoreClick">more...</button>
  
</template>
<script setup lang="ts">
  import { useQuery } from '@vue/apollo-composable';
  import type { Characters } from '@/utils/types'
  import { gql } from "apollo-boost"
  import Character from '@/components/Character.vue';
  import { computed, watchEffect } from 'vue';
  import router from '@/router';
import Skeleton from '@/components/Skeleton.vue';
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

  const page = computed(() => router.currentRoute.value.query.page)
  console.log(page.value)

  const { result, loading, error, fetchMore } = useQuery<Characters>(CHARACTERS_QUERY, () => ({
    page: 1
  }))

  let nextPage = 1

  const characters = computed(() => result.value?.characters.results)
  function onMoreClick() {
    nextPage++
    fetchMoreCh()
    router.push({ query: { page: nextPage } })
  }

  function fetchMoreCh() {

    fetchMore({
      variables: {
        page:nextPage
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult?.characters) return prevResult

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
</script>