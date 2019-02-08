import Api from '@/services/Api'

export default {
    register(credentials) {
        return Api().post('register', credentials)
        .then((res) => {
            let token = res.data.token
            let user = res.data.user.username
            let userId = res.data.user.id
            //save token and user to local storage
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)
            localStorage.setItem('userId', userId)
        })
    },
    
    //pass headers (as an object)
    login(credentials) {
        Api().post('login', credentials)
        .then((res) => {
            let token = res.data.token
            let user = res.data.user
            let userId = res.data.user.id
            //save token and user to local storage
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)
            localStorage.setItem('userId', userId)
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

