import AboutView from '@/components/AboutView.vue'
import HomeView from '@/components/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView, },
    { path: '/about', name: 'About', component: AboutView, },
    { path: '/:pathMatch(.*)', redirect: '/' },
  ],
})

export default router
