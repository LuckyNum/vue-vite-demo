import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/modules/user'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    // 在这个位置需要统一的去注入token
    config.headers.icode = '2A64CDF853F23F2F'
    if (userStore.token) {
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${userStore.token}`
    }
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
      return data
    } else {
      // 业务错误
      ElMessage.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // TODO: 将来处理 token 超时问题
    ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)
export default service
