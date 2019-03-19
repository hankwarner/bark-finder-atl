import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Register from '@/components/Register'
import Login from '@/components/Login'
import ResetPassword from '@/components/ResetPassword'
import Parks from '@/components/Parks'
import ViewPark from '@/components/ViewPark'
import Review from '@/components/Review'
import Restaurants from '@/components/Restaurants'
import ViewRestaurant from '@/components/ViewRestaurant'
import Events from '@/components/Events'
import ViewEvent from '@/components/ViewEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
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
      path: '/reset_password',
      name: 'resetPassword',
      component: ResetPassword
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
    },
    {
      path: '/restaurants/:restaurantId',
      name: 'restaurant',
      component: ViewRestaurant
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/events/:eventId',
      name: 'event',
      component: ViewEvent
    },
  ]
})