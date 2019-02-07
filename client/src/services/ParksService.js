import Api from '@/services/Api'

export default {
    index() {
        return Api().get('parks')
    },

    show(parkId) {
        return Api().get(`parks/${parkId}`)
    }
}

