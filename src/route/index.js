import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Search from '@/components/Search/Search.vue'
import Cart from '@/components/Cart/Cart.vue'
import Mine from '@/components/Mine/Mine.vue'
import Regster from '@/page/Register/Register.vue'
import Login from '@/page/Login/Login.vue'
import GoodsDetail from '@/page/GoodsDetail/GoodsDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/register',
      component: Regster
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/detail/:id',
      component: GoodsDetail
    }
  ]
})

export default router