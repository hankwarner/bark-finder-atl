import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Parks from '@/components/Parks'
import ViewPark from '@/components/ViewPark'
import Review from '@/components/Review'
import Restaurants from '@/components/Restaurants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/parks',
      name: 'parks',
      component: Parks
    },
    {
      path: '/parks/:parkId',
      name: 'park',
      component: ViewPark
    },
    {
      path: '/parks/:parkId/review',
      name: 'Review',
      component: Review
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    }
  ]
})
