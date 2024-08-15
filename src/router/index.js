import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/SimmerWorks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/works',
      name: 'simmerWorks',
      component: () => import('@/components/WorksView.vue')
    },
    {
      path: '/menu',
      name: 'simmerWorksMenu',
      component: () => import('@/components/MenuView.vue')
    },
    {
      path: '/about',
      name: 'simmerWorksAbout',
      component: () => import('@/components/AboutView.vue')
    },
    {
      path: '/checkout',
      name: 'simmerWorksCheckout',
      component: () => import('@/components/CheckoutView.vue')
    },
    {
      path: '/simmer-works-copyright-information',
      name: 'SimmerCopyright',
      component: () => import('@/components/SimmerCopyright.vue')
    }, 
  ]
})

router.afterEach(() => {
  // Scroll to the top of the page after navigation
  window.scrollTo(0, 0);
});

export default router
