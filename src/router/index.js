import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'

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
    component: () => import('../views/ServicesView.vue')
  },
  {
  path: '/services/digital-management',
  name: 'DigitalManagement',
  component: () => import('../services/DigitalManagement.vue')
},
{
  path: '/services/operations-optimization',
  name: 'OperationsOptimization',
  component: () => import('../services/OperationsOptimazation.vue')
},
{
  path: '/services/advertising-marketing',
  name: 'AdvertisingMarketing',
  component: () => import('../services/AdvertisingMarketing.vue')
},
{
  path: '/services/analytics-insights',
  name: 'AnalyticsInsights',
  component: () => import('../services/AnalyticsInsights.vue')
},
{
  path: '/services/compliance-security',
  name: 'ComplianceSecurity',
  component: () => import('../services/ComplianceSecurity.vue')
},
{
  path: '/services/consultancy-services',
  name: 'ConsultancyServices',
  component: () => import('../services/ConsultancyServices.vue')
},
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Auth/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Auth/Signup.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router