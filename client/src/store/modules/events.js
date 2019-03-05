import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    strict: false,
    state: {
        events: [],
        event: null
    },

    mutations: {
        setEvents(state, events) {
            state.events = events
        },
        setEvent(state, event) {
            state.event = event
        },
        setNewEventReview(state, newReview) {
            state.event.reviews.push(newReview)
        },
        deleteEventReview(state, reviewId) {
            let reviews = state.event.reviews

            var isDeletedReview = review => review.id === reviewId
            
            let deletedReview = reviews.findIndex(isDeletedReview)
            
            reviews.splice(deletedReview, 1)
        }
    },
    actions: {
        setEvents({commit}, events) {
            commit('setEvents', events)
        },
        setEvent({commit}, event) {
            commit('setEvent', event)
        },
        setNewEventReview({commit}, newReview) {
            commit('setNewEventReview', newReview)
        },
        deleteEventReview({commit}, reviewId) {
            commit('deleteEventReview', reviewId)
        }
    }
})