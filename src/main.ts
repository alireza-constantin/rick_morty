import './styles/base.css'

import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createPinia } from 'pinia'
import ApolloClient from 'apollo-boost'

import App from './App.vue'
import router from './router'

const apolloClient = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
})


const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App)
})

app.use(createPinia())
app.use(router)
app.mount('#app')
