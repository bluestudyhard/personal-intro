import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'

// import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

})
router.beforeEach((to, from, next) => {
  // 重定向到/intro
  if (to.path === '/')
    next('/intro')

  next()
},
)
app.use(router)
app.mount('#app')
