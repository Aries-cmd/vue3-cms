import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config'

const request = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

request.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err && err.response) {
      window.$message.error(err.response.data)
      return err
    }
  }
)

request.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default request
