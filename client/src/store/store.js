import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import parkStore from './modules/parks'
import restaurantStore from './modules/restaurants'
import eventStore from './modules/events'
import userStore from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,

    modules: {
        parks: parkStore,
        restaurants: restaurantStore,
        events: eventStore,
        users: userStore
    },

    plugins: [createPersistedState()]

})