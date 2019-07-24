import axios from 'axios'
import { Message } from 'element-ui'
const http = axios.create({
  baseURL: 'host',
  timeout: 5000
})

http.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 200) {
    Message({
      message: res.message || 'err',
      type: 'error',
      duration: 5 * 1000
    })
  } else {
    return res
  }
})

export default http
