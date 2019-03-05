import Vue from 'vue'
import Vuex from 'vuex'
import parkStore from './modules/parks'
import restaurantStore from './modules/restaurants'
import eventStore from './modules/events'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,

    modules: {
        parks: parkStore,
        restaurants: restaurantStore,
        events: eventStore
    },

    state: {
        token: null,
        user: null,
        userId: null,
        isUserLoggedIn: false
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
        }
    }
})