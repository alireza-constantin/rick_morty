<template>
  <div class="px-4">
    <div>
      <h1 class="font-nav text-center text-2xl">Characters</h1>
      <ul v-if="loading" class="flex flex-wrap gap-8 mt-8">
        <Skeleton v-for="i in 20" :key="i" />
      </ul>
      <ul v-if="!loading && result" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        <Character v-for="character in characters" :key="character.id" :character="character" />
      </ul>
    </div>
  </div>
  <div class="flex font-nav justify-center items-center gap-4 my-8">
    <button v-show="prevPage" class="py-2 px-4 text-2xl hover:underline decoration-wavy font-bold rounded-md underline-offset-2 decoration-accent-2"
      @click="prevPageHandler">prev</button>
    <button v-show="nextPage" class="py-2 px-4 text-2xl font-bold hover:underline decoration-wavy underline-offset-2 decoration-accent-2"
      @click="nextPageHandler">next</button>
  </div>
</template>
<script setup lang="ts">
  import { useQuery } from '@vue/apollo-composable';
  import type { Characters } from '@/utils/types'
  import { gql } from "apollo-boost"
  import Character from '@/components/Character.vue';
  import { computed, ref} from 'vue';
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
  const page = ref(Number(pageQuery.value) || 1)

  const { result, loading, error, fetchMore } = useQuery<Characters>(CHARACTERS_QUERY, () => ({
    page: page.value
  }))

  const characters = computed(() => result.value?.characters.results)
  let nextPage = computed(() => result.value?.characters.info.next)
  let prevPage = computed(() => result.value?.characters.info.prev)

  
  function nextPageHandler() {
    if (nextPage.value) {
      paginator(nextPage.value)
      router.push({ query: { page: nextPage.value } })
    }
  }

  function prevPageHandler(){
    if (prevPage.value) {
      paginator(prevPage.value)
      router.push({ query: { page: prevPage.value } })
    }
  }

  function paginator(page: number) {
    fetchMore({
      variables: {
        page,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult?.characters) return prevResult
        return fetchMoreResult
      },
    })
  }  

</script>