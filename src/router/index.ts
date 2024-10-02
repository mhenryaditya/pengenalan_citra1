import AppFooter from '@/layout/AppFooter.vue'
import AppHeader from '@/layout/AppHeader.vue'
import AppHeaderPrimary from '@/layout/AppHeaderPrimary.vue'
import Brightness from '@/views/Brightness.vue'
import Convert from '@/views/Convert.vue'
import Convolution from '@/views/Convolution.vue'
import Equalise from '@/views/Equalise.vue'
import Flip from '@/views/Flip.vue'
import Landing from '@/views/Landing.vue'
import Negative from '@/views/Negative.vue'
import Rotate from '@/views/Rotate.vue'
import Tresholding from '@/views/Thresholding.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/',
      name: 'landing',
      components: {
        header: AppHeader,
        main: Landing,
        footer: AppFooter
      }
    },
    {
      path: '/tresholding',
      name: 'tresholding',
      components: {
        header: AppHeaderPrimary,
        main: Tresholding,
        footer: AppFooter
      }
    },
    {
      path: '/negative',
      name: 'negative',
      components: {
        header: AppHeaderPrimary,
        main: Negative,
        footer: AppFooter
      }
    },
    {
      path: '/brightness',
      name: 'brightness',
      components: {
        header: AppHeaderPrimary,
        main: Brightness,
        footer: AppFooter
      }
    },
    {
      path: '/convert',
      name: 'convert',
      components: {
        header: AppHeaderPrimary,
        main: Convert,
        footer: AppFooter
      }
    },
    {
      path: '/rotate',
      name: 'rotate',
      components: {
        header: AppHeaderPrimary,
        main: Rotate,
        footer: AppFooter
      }
    },
    {
      path: '/flip',
      name: 'flip',
      components: {
        header: AppHeaderPrimary,
        main: Flip,
        footer: AppFooter
      }
    },
    {
      path: '/equalise',
      name: 'equalise',
      components: {
        header: AppHeaderPrimary,
        main: Equalise,
        footer: AppFooter
      }
    },
    {
      path: '/convolution',
      name: 'convolution',
      components: {
        header: AppHeaderPrimary,
        main: Convolution,
        footer: AppFooter
      }
    }
  ]
})

export default router
