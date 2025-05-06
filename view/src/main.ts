import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import createPlugin from '@/plugins'

const app = createApp(App)
createPlugin(app)

app.mount('#app')
