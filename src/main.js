import './assets/main.css'

import Tres from '@tresjs/core'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Tres)

app.mount('#app')
