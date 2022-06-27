import { createRouter, createWebHistory } from 'vue-router'

import store from '@/store'

import HomeView from '../views/HomeView.vue'
import ExoticView from '../views/ExoticView.vue'
import ForeignView from '../views/ForeignView.vue'
import Product from '../views/ProductView.vue'
import CategoryView from '../views/CategoryView.vue'
import SearchView from '../views/SearchView.vue'
import CartView from '../views/CartView.vue'
import SignUpView from '../views/SignUpView.vue'
import LogInView from '../views/LogInView.vue'
import MyAccountView from '../views/MyAccountView.vue'
import CheckOutView from '../views/CheckOutView.vue'
import SuccessView from '../views/SuccessView.vue'


const routes = [
  {
    path: '/my-account',
    name: 'my-account',
    component: MyAccountView,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/cart/checkout',
    name: 'checkout',
    component: CheckOutView
  },
  {
    path: '/cart/success',
    name: 'success',
    component: SuccessView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpView
  },
  {
    path: '/log-in',
    name: 'log-in',
    component: LogInView
  },
  {
    path: '/exotic',
    name: 'exotic',
    component: ExoticView
  },
  {
    path: '/foreign',
    name: 'foreign',
    component: ForeignView
  },
  {
    path: '/:category_slug/:product_slug',
    name: 'Product',
    component: Product
  },
  {
    path: '/category_slug',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LogInView', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
