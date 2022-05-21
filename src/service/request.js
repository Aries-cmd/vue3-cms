import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config'

const request = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

request.interceptors.response.use((res) => {
  console.log(res, '测试')
  const { status } = res

  if (status === 200 || status === 204) {
    return res
  } else {
    console.log(1)
    return Promise.reject(new Error(res))
  }
})

request.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default request
