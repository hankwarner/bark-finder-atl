import Api from '@/services/Api'

export default {
    create(parkId, restaurantId, review) {
        if(parkId) {
            return Api().post(`parks/${parkId}/review/create`, review)
        } else if (restaurantId) {
            return Api().post(`restaurants/${restaurantId}/review/create`, review)
        }
        
    },

    destroy(parkId, review) {
        return Api().post(`parks/${parkId}/review/destroy`, review)
    }

}

