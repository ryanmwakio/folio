import "./assets/style.css"
import { MotionPlugin } from "@vueuse/motion"

import { createApp } from "vue"
import { createPinia } from "pinia"
import VWave from 'v-wave'

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(MotionPlugin)
app.use(createPinia())
app.use(router)
app.use(VWave)

app.mount("#app")
