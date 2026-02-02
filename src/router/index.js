import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/AppHome.vue'
import About from '../views/AppAbout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/AppServices.vue')
  },
//   {
//     path: '/contact',
//     name: 'Contact',
//     component: () => import('../views/AppContact.vue')
//   }
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/AppLogin.vue')
  }
//   {
//     path: '/signup',
//     name: 'Signup',
//     component: () => import('../views/Signup.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router