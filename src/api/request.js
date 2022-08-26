import axios from 'axios'
import store from '@/store'

const requests = axios.create({
  timeout: 5000
})
// 请求拦截器
requests.interceptors.request.use((config) => {
  if (store.state.user.token) {
    config.headers.token = store.state.user.token
  }
  return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
  return res.data
}, (_error) => {
  return Promise.reject(new Error('failed'))
})

export default requests
