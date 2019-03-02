import Vue from 'vue'
import Vuex from 'vuex'
import parkStore from './modules/parks'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,

    modules: {
        parks: parkStore
    },

    state: {
        token: null,
        user: null,
        userId: null,
        isUserLoggedIn: false,
        restaurants: [],
        restaurant: null,
        events: [],
        event: null,
        newReview: null
    },

    mutations: {
        setToken(state, token) {
            state.token = token
            if(token) {
                state.isUserLoggedIn = true
            } else {
                state.isUserLoggedIn = false
            }
        },
        setUser(state, user) {
            state.user = user
        },
        setUserId(state, userId) {
            state.userId = userId
        },
        setRestaurants(state, restaurants) {
            state.restaurants = restaurants
        },
        setRestaurant(state, restaurant) {
            state.restaurant = restaurant
        },
        setEvents(state, events) {
            state.events = events
        },
        setEvent(state, event) {
            state.event = event
        },
        deleteRestaurantReview(state, reviewId) {
            let reviews = state.restaurant.reviews

            var isDeletedReview = review => review.id === reviewId
            
            let deletedReview = reviews.findIndex(isDeletedReview)
            
            reviews.splice(deletedReview, 1)
        },
        deleteEventReview(state, reviewId) {
            let reviews = state.event.reviews

            var isDeletedReview = review => review.id === reviewId
            
            let deletedReview = reviews.findIndex(isDeletedReview)
            
            reviews.splice(deletedReview, 1)
        },
    },
    actions: {
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        },
        setUserId({commit}, userId) {
            commit('setUserId', userId)
        },
        setRestaurants({commit}, restaurants) {
            commit('setRestaurants', restaurants)
        },
        setRestaurant({commit}, restaurant) {
            commit('setRestaurant', restaurant)
        },
        setEvents({commit}, events) {
            commit('setEvents', events)
        },
        setEvent({commit}, event) {
            commit('setEvent', event)
        },
        deleteRestaurantReview({commit}, reviewId) {
            commit('deleteRestaurantReview', reviewId)
        },
        deleteEventReview({commit}, reviewId) {
            commit('deleteEventReview', reviewId)
        }
    }
})