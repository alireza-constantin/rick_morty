<template>
  <div>
    <h1>Characters</h1>
    <li v-for="{ name, id } in result.characters.results" >name : {{ name }}</li>
    <div>{{ JSON.stringify(result.characters) }}</div>
  </div>
</template>
<script setup lang="ts">
  import { useQuery } from '@vue/apollo-composable';
  import gql from 'graphql-tag'
import { watch } from 'vue';
  const { result } = useQuery(gql`
    {
  characters {
    results {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      created
    }
  }
}
  `)

  watch(result, () => {
    console.log(result.value)
  })
</script>