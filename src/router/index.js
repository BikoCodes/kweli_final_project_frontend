import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExoticView from '../views/ExoticView.vue'
import ForeignView from '../views/ForeignView.vue'
import Product from '../views/ProductView.vue'
import CategoryView from '../views/CategoryView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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

export default router
