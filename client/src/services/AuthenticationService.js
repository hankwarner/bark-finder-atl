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
    async login(credentials) {
        try {
            let res = await Api().post('login', credentials)

            let token = res.data.token
            let user = res.data.user.username
            let userId = res.data.user.id
            
            //save token and user to local storage
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)
            localStorage.setItem('userId', userId)            
            
        } catch (err) {
            console.log(err)
            //remove token if error
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('userId')
        }
    },

    logout(credentials) {
        Api().post('logout', credentials)
    }
}

