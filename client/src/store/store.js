import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,
    state: {
        token: null,
        user: null,
        userId: null,
        isUserLoggedIn: false,
        parks: [],
        park: null,
        restaurants: [],
        events: [],
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
        setParks(state, parks) {
            state.parks = parks
        },
        setPark(state, park) {
            state.park = park
        },
        setRestaurants(state, restaurants) {
            state.restaurants = restaurants
        },
        setNewReview(state, newReview) {
            state.newReview = newReview
        }
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
        setParks({commit}, parks) {
            commit('setParks', parks)
        },
        setPark({commit}, park) {
            commit('setPark', park)
        },
        setRestaurants({commit}, restaurants) {
            commit('setRestaurants', restaurants)
        },
        setEvents({commit}, events) {
            commit('setEvents', events)
        },
        setNewReview({commit}, newReview) {
            commit('setNewReview', newReview)
        },
    }
})