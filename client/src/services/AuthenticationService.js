import Api from '@/services/Api'

export default {
    async register(credentials) {
        try {
            var response = await Api().post('register', credentials);
            var token = response.data.token;
            var user = response.data.user.username;
            var userId = response.data.user.id;
            //save token and user to local storage
            localStorage.setItem('token', token);
            localStorage.setItem('user', user);
            localStorage.setItem('userId', userId);

        } catch (err) {
            console.log(err)
            return res.send(err);
        }
    },
    
    async login(credentials) {
        try {
            let response = await Api().post('login', credentials);
            let token = response.data.token;
            let user = response.data.user.username;
            let userId = response.data.user.id;
            
            //save token and user to local storage
            localStorage.setItem('token', token);
            localStorage.setItem('user', user);
            localStorage.setItem('userId', userId);
            
        } catch (err) {
            console.log(err)
            //remove token if error
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('userId');
            return res.send(err);
        }
    },

    async sendResetPasswordEmail(email) {
        try {
            let response = await Api().post('send_reset_email', email);     
            return response;
        } catch (err) {
            console.log(err);
            return res.send(err);
        }
    },

    async getUser(credentials) {
        try {
            var user = await Api().get(`get_user/${credentials.userId}/${credentials.userToken}`);
            return user;
        } catch (err) {
            console.log(err);
            return res.send(err);
        }
    },

    resetPassword(credentials) {
        try {
            Api().post('reset_password', credentials);       
        } catch (err) {
            console.log(err);
            return res.send(err);
        }
    },

    logout(credentials) {
        Api().post('logout', credentials);
    }
}

