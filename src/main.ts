import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Argon from './plugins/argon-kit.js'

const app = createApp(App)

app.config.warnHandler = () => null

app.use(createPinia())
app.use(router)
app.use(Argon)

app.mount('#app')
