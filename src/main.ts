import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createWebHistory, createRouter} from 'vue-router'
import Tao from './components/Tao.vue'
import Tao2 from './components/Tao2.vue'

const history = createWebHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Tao},
    {path: '/xxx', component: Tao2},
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
