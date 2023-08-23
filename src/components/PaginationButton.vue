<template>
    <button
        v-show="page"
        class="py-2 px-4 text-2xl hover:underline decoration-wavy font-bold rounded-md underline-offset-2 decoration-accent-2"
    @click="handleClick"
    >
        {{ text }}
    </button>
</template>

<script setup lang="ts" >
import router from '@/router';


    const props = defineProps<{ page: number | undefined, paginator: (page: number) => void,text: string }>()

    function handleClick(){
        if(props.page){
            props.paginator(props.page)
            router.push({ query: { page: props.page } })
        }
    }

</script>