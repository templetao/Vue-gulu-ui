import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'

const history = createWebHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc,
      children: [
        {path: 'switch', component: SwitchDemo}
      ]
    },
  ]
})
router.afterEach(()=>{
  console.log('路由切换了')
})