import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { message as Message } from 'antd'
import { Result } from '@/types/api'
import { ResultEnum } from '@/types/enum'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 20000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
})

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'Bearer Token'
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    if (!response.data) throw new Error('请求出错，请稍后重试')

    const { status, data, message } = response.data

    if (status === ResultEnum.SUCCESS) {
      return Promise.resolve(data)
      //   return data
    } else if (status === ResultEnum.ERROR) {
      Message.error(message)
    }

    throw new Error(message || '请求出错，请稍后重试')
  },
  (error) => {
    const { message, response } = error || {}

    const errMsg = response?.data?.message || message || '操作失败，系统异常'
    Message.error(errMsg)

    const status = response?.status
    if (status === 401) {
    }
    return Promise.reject(error)
  },
)

class APIClient {
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
