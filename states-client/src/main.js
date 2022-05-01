import { createApp } from 'vue'
import App from './App.vue'
import StateAPIService from '@/services/stateService.js'
import router from "@/router";
import "leaflet/dist/leaflet.css"


let app = createApp(App)

app.use(router)
app.config.globalProperties.$state_service = StateAPIService

app.mount('#app')
