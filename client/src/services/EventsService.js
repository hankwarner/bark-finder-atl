import Api from '@/services/Api'

export default {
    index() {
        return Api().get('events')
    },

    show(eventId) {
        return Api().get(`events/${eventId}`)
    }
}

