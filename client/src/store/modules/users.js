export default ({
    strict: false,
    
    state: {
        token: null,
        user: null,
        userId: null,
        isUserLoggedIn: false
    },

    mutations: {
        setToken(state, token) {
            state.token = token
            if(token) {
                state.isUserLoggedIn = true
            } else {
                state.isUserLoggedIn = false
            }
        },
        setUser(state, user) {
            state.user = user
        },
        setUserId(state, userId) {
            state.userId = userId
        }
    },
    actions: {
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        },
        setUserId({commit}, userId) {
            commit('setUserId', userId)
        }
    }
})