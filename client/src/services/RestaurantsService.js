import Api from '@/services/Api'

export default {
    index() {
        return Api().get('restaurants')
    },

    show(restaurantId) {
        return Api().get(`restaurants/${restaurantId}`)
    }
}

