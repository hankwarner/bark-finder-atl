import axios from 'axios'

export default () => {
    // var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var productionUrl = 'https://bark-finder-atl.herokuapp.com';

    if(process.env.NODE_ENV === 'development') {
        return axios.create({
            baseURL: 'http://localhost:8081'
        })
    } else {
        return axios.create({
            baseURL: productionUrl
        })
    }
}
