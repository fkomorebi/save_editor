import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // 需要使用hash模式，https://juejin.cn/post/7123165938031017997 这篇文章有解释
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/original-editor',
          name: 'original-editor',
          component: () => import('@/views/OriginalEditor.vue'),
        },
        {
          path: '/simple-editor',
          name: 'simple-editor',
          component: () => import('@/views/SimpleEditor.vue'),
        }
      ]
    },
  ],
})

export default router
