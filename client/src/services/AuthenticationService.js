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
            let user = res.data.user
            //save token and user to local storage
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)
        })
    },

    logout(credentials) {
        Api().post('logout', credentials)
        // .then((res) => {
        //     // let token = res.data.token
        //     // let user = res.data.user
        //     //save token and user to local storage
        //     // localStorage.setItem('token', token)
        //     // localStorage.setItem('user', user)
        // })
    }
}

