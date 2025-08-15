import AboutView from '@/components/AboutView.vue'
import AddCategoryView from '@/components/AddCategoryView.vue'
import HomeView from '@/components/HomeView.vue'
import NotFoundView from '@/components/NotFoundView.vue'
import TimeTrackerView from '@/components/TimeTrackerView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)',
      redirect: 'NotFound',
      meta: { title: '', icon: '', hideFromNav: true },
    },
    {
      path: '/notFound',
      name: 'NotFound',
      components: NotFoundView,
      meta: { title: 'Not Found', icon: '', hideFromNav: true },
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { title: 'Home', icon: 'mdi-home', hideFromNav: false },
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta: { title: 'About', icon: 'mdi-information', hideFromNav: false },
    },
    {
      path: '/addCategory',
      name: 'AddCategory',
      component: AddCategoryView,
      meta: { title: 'Add Category', icon: 'mdi-plus', hideFromNav: true },
    },
    {
      path: '/timeTracker',
      name: 'TimeTracker',
      component: TimeTrackerView,
      meta: { title: 'Time Tracker', icon: 'mdi-clock', hideFromNav: false },
    },
  ],
})

export default router
