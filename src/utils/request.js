import axios from 'axios'
import nprogress from 'nprogress'

const request = axios.create({
    baseURL: 'https://elm.cangdu.org',
    timeout: 5000,
    withCredentials: true
})

request.interceptors.request.use(config => {
    nprogress.start()
    return config
})

request.interceptors.response.use(config => {
    nprogress.done()
    console.log(config)
    return config
}, error => {
    nprogress.done()
    return Promise.reject(error)
})

export default request