import { createRouter, createWebHistory } from 'vue-router'
import { useDataStore } from '../stores/data'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      meta: {
        auth: true,
      }
    },
    {
      path: '/mismascotas',
      name: 'mismascotas',
      component: () => import('../views/MisMascotasView.vue'),
      meta: {
        mismas: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    }
  ]

  


})


router.beforeEach((to, from, next) => {
  
  const requiredAuth = to.meta.auth
  const ra = to.meta.mismas
  const useData = useDataStore()
  
  if (requiredAuth) {

    if (useData.token.datos?.rol === 'admin') {
      return next()
    } 
    return next('/')
  }

  if (ra) {

    if (useData.token.datos?.rol === 'cliente') {
      return next()
    } 
    return next('/')
  }

   next()
})

export default router
