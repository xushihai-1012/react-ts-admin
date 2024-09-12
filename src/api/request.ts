import axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { message as Message } from 'antd'
import { Result } from '@/types/api'
import { ResultEnum } from '@/types/enum'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 20000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = 'Bearer Token'
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<Result>) => {
    if (!response.data) throw new Error('请求出错，请稍后重试')
    // 检查配置的响应类型是否为二进制类型（'blob' 或 'arraybuffer'）, 如果是，直接返回响应对象
    if (
      response.config.responseType === 'blob' ||
      response.config.responseType === 'arraybuffer'
    ) {
      return response
    }

    const { status, data, message } = response.data

    if (status === ResultEnum.SUCCESS) {
      return Promise.resolve(data)
      //   return data
    } else if (status === ResultEnum.ERROR) {
      Message.error(message)
    }

    throw new Error(message || '请求出错，请稍后重试')
  },
  (error: AxiosError<Result>) => {
    const { message, response } = error || {}

    const errMsg = response?.data?.message || message || '操作失败，系统异常'
    Message.error(errMsg)

    const status = response?.status
    if (status === 401) {
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
