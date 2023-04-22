import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createWebHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc},
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
