import axios from 'axios'

export default () => {
    //need to use the heroku URL here for production environment
    if(process.env.NODE_ENV === 'development') {
        return axios.create({
            baseURL: 'http://localhost:8081'
        })
    } else {
        return axios.create({
            baseURL: 'https://bark-finder-atl.herokuapp.com'
        })
    }
}

// headers: {
    //     Authorization: `Bearer ${store.state.token}`
    // }