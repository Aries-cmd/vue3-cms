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
    return Promise.reject(new Error(res))
  }
})

export default request
