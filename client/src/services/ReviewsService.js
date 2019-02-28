import Api from '@/services/Api'

export default {
    create(parkId, restaurantId, eventId, review) {
        if(parkId) {
            return Api().post(`parks/${parkId}/review/create`, review)

        } else if (restaurantId) {
            return Api().post(`restaurants/${restaurantId}/review/create`, review)

        } else if (eventId) {
            return Api().post(`restaurants/${eventId}/review/create`, review)
        }
        
    },

    destroy(parkId, reviewId) {
        return Api().post(`parks/${parkId}/review/${reviewId}/destroy`)
    }

}

