import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/members',
        component: () => import('pages/Members.vue'),
        meta: {
          title: 'Members'
        }
      },
      {
        path: '/details',
        component: () => import('pages/Details.vue'),
        meta: {
          title: 'Details'
        }
      },
      {
        path: '/projects',
        component: () => import('pages/Projects.vue'),
        meta: {
          title: 'Projects'
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
