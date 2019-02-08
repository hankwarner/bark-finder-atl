import Api from '@/services/Api'

export default {
    create(parkId, review) {
        return Api().post(`parks/${parkId}/review/create`, review)
    }
}

