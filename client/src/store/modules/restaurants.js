export default ({
    strict: false,
    state: {
        restaurants: [],
        restaurant: null,
    },

    mutations: {
        setRestaurants(state, restaurants) {
            state.restaurants = restaurants
        },
        setRestaurant(state, restaurant) {
            state.restaurant = restaurant
        },
        setNewRestaurantReview(state, newReview) {
            state.restaurant.reviews.push(newReview)
        },
        deleteRestaurantReview(state, reviewId) {
            let reviews = state.restaurant.reviews

            var isDeletedReview = review => review.id === reviewId
            
            let deletedReview = reviews.findIndex(isDeletedReview)
            
            reviews.splice(deletedReview, 1)
        }
    },
    actions: {
        setRestaurants({commit}, parks) {
            commit('setRestaurants', parks)
        },
        setRestaurant({commit}, park) {
            commit('setRestaurant', park)
        },
        setNewRestaurantReview({commit}, newReview) {
            commit('setNewRestaurantReview', newReview)
        },
        deleteRestaurantReview({commit}, reviewId) {
            commit('deleteRestaurantReview', reviewId)
        }
    }
})