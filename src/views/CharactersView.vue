<template>
  <div class="px-4">
    <div>
      <h1 class="text-center text-2xl">Characters</h1>
      <ul v-if="loading" class="flex flex-wrap gap-8 mt-8">
        <Skeleton v-for="i in 20" :key="i" />
      </ul>
      <ul v-if="!loading && result" class="flex flex-wrap gap-8 mt-8">
        <Character v-for="character in characters" :key="character.id" :character="character" />
      </ul>
    </div>
  </div>
  <div class="flex justify-center items-center gap-4 my-8">
    <button v-show="prevPage" class="py-2 px-4 border-2 text-xl font-bold text-accent border-accent-2 rounded-md"
      @click="prevPageHandler">prev</button>
    <button v-show="nextPage" class="py-2 px-4 border-2 text-xl font-bold text-accent border-accent-2 rounded-md"
      @click="nextPageHandler">next</button>
  </div>
</template>
<script setup lang="ts">
  import { useQuery } from '@vue/apollo-composable';
  import type { Characters } from '@/utils/types'
  import { gql } from "apollo-boost"
  import Character from '@/components/Character.vue';
  import { computed, ref, watchEffect } from 'vue';
  import router from '@/router';
  import Skeleton from '@/components/Skeleton.vue';


  const CHARACTERS_QUERY = gql`
    query Characters($page: Int) {
  characters(page: $page) {
    info {
      next
      prev
    }
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

  const pageQuery = computed(() => router.currentRoute.value.query.page)
  let page = ref(Number(pageQuery.value) || 1)

  const { result, loading, error, fetchMore } = useQuery<Characters>(CHARACTERS_QUERY, () => ({
    page: page.value
  }))

  let nextPage = computed(() => result.value?.characters.info.next)
  let prevPage = computed(() => result.value?.characters.info.prev)


  const characters = computed(() => result.value?.characters.results)
  function nextPageHandler() {
    if (nextPage.value) {
      fetchMoreCh(nextPage.value)
      router.push({ query: { page: nextPage.value } })
    }
  }

  function prevPageHandler(){
    if (prevPage.value) {
      fetchMoreCh(prevPage.value)
      router.push({ query: { page: prevPage.value } })
    }
  }

  function fetchMoreCh(page: number) {

    fetchMore({
      variables: {
        page,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult?.characters) return prevResult

        // return {
        //   characters: {
        //     ...prevResult.characters,
        //     results: [
        //       ...prevResult.characters.results,
        //       ...fetchMoreResult?.characters.results
        //     ]
        //   }
        // }
        return fetchMoreResult

      }
    })
}
</script>