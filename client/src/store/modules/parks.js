export default ({
    strict: false,
    state: {
        parks: [],
        park: null
    },

    mutations: {
        setParks(state, parks) {
            state.parks = parks
        },
        setPark(state, park) {
            state.park = park
        },
        setNewParkReview(state, newReview) {
            state.park.reviews.push(newReview)
        },
        deleteParkReview(state, reviewId) {
            let reviews = state.park.reviews

            var isDeletedReview = review => review.id === reviewId
            
            let deletedReview = reviews.findIndex(isDeletedReview)
            
            reviews.splice(deletedReview, 1)
        }
    },
    actions: {
        setParks({commit}, parks) {
            commit('setParks', parks)
        },
        setPark({commit}, park) {
            commit('setPark', park)
        },
        setNewParkReview({commit}, newReview) {
            commit('setNewParkReview', newReview)
        },
        deleteParkReview({commit}, reviewId) {
            commit('deleteParkReview', reviewId)
        }
    }
})