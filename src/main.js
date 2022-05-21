import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

import 'normalize.css'

const app = createApp(App)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
