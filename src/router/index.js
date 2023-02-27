import Vue from 'vue'
import DataVisualization from '../views/DataVisualization.vue'
import AnotherView from '../views/AnotherView.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //redirect 是重新定向
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: DataVisualization,
  }, {
    name: 'another',
    path: '/another',
    component: AnotherView,
  }
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
