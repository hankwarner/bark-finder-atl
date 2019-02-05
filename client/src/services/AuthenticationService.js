import Api from '@/services/Api'

export default {
    register(credentials) {
        return Api().post('register', credentials)
    },
    
    //pass headers (as an object)
    login(credentials) {
        Api().post('login', credentials)
        .then((res) => {
            let token = res.data.token
            //save token to local storage
            localStorage.setItem('token', token)
        })
    }
}

