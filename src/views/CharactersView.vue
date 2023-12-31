<template>
  <div class="px-4">
    <div>
      <PageHeader text="Characters" />
      <CardContainer v-if="loading">
        <Skeleton v-for="i in 20" :key="i" />
      </CardContainer>
      <CardContainer v-if="!loading && result" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        <Character v-for="character in characters" :key="character.id" :character="character" />
      </CardContainer>
    </div>
  </div>
  <div class="flex font-nav justify-center items-center gap-4 my-8">
    <PaginationButton text="prev" :paginator="paginator" :page="prevPage" />
    <PaginationButton text="next" :paginator="paginator" :page="nextPage" />
  </div>
</template>
<script setup lang="ts">
  import { useQuery } from '@vue/apollo-composable';
  import type { Characters } from '@/utils/types'
  import { gql } from "apollo-boost"
  import Character from '@/components/Character.vue';
  import { computed, ref } from 'vue';
  import router from '@/router';
  import Skeleton from '@/components/Skeleton.vue';
  import PaginationButton from '@/components/PaginationButton.vue';
  import CardContainer from '@/components/CardContainer.vue'
import PageHeader from '@/components/PageHeader.vue';

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