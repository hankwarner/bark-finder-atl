import Api from '@/services/Api'

export default {
    register(credentials) {
        return Api().post('register', credentials)
    },
    
    //pass headers (as an object)
    login(credentials) {
        Api().post('login', credentials)
        .then((user) => {
            let token = user.data.token
            //send to local storage?
        })
    }
}

