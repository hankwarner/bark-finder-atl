import Api from '@/services/Api'

export default {
    getParks() {
        return Api().get('parks')
    }
}

