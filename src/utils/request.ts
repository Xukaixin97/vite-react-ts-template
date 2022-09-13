export {}
// // import * as Sentry from '@sentry/react'
// import { message } from 'antd'

// import type { AxiosError, AxiosRequestConfig } from 'axios'
// import axios from 'axios'

// const TIMEOUT = 10 // 超时时间,单位 s

// export interface IPageInfoRequest {
//   pageNum?: number
//   pageSize?: number
// }

// export interface IPageInfoResponse<T> {
//   pageData: {
//     content: T[]
//     total: number
//     number: number
//     size: number
//   }
// }

// export interface ErrorWrap<T> { res: T; err: Error }

// export interface IResponse<T = unknown> {
//   context: T
//   code: string
//   message: string
//   errorData?: unknown
// }

// const instance = axios.create({
//   timeout: TIMEOUT * 1000,
//   validateStatus: status => status < 500, // 默认是 [200,300)
// })

// /** 设置默认的host */
// const setDefaultHost = (host: string) => (instance.defaults.baseURL = host)

// /** 设置公共 header */
// const setCommonHeader = (headers: any) => {
//   Object.keys(headers).forEach((key) => {
//     instance.defaults.headers.common[key] = headers[key]
//   })
// }

// const newError = (data: IResponse) => {
//   const e = new Error()
//   e.message = data.message
//   e.name = data.code
//   // @ts-expect-error
//   e.data = data.errorData
//   return e
// }

// /** 错误处理 */
// instance.interceptors.response.use(
//   // status < 500
//   (response) => {
//     const { status /** request */ } = response

//     const data = response.data as IResponse

//     if (status !== 200) {
//       const err = new Error(data?.message) // 使用code, message容易变

//       err.response = response
//       throw err
//     }

//     switch (data.code) {
//       case 'K-000000':
//         break
//       case 'K-000015':
//       /** token 过期 */
//         window.location.href = '#/login'
//         return { data: {} }
//       case 'K-040049':
//         message.error(data.message)
//         /** 账号被锁定 */
//         window.location.href = '#/login'
//         return { data: {} }
//       default:
//         throw newError(data)
//     }

//     return response
//   },
//   // status >= 500
//   (error: AxiosError) => {
//     // 有返回data,但不是 200
//     if (error.response) {
//       const data = error.response.data as IResponse
//       throw new Error(data?.message)
//     }

//     // 断网
//     if (!window.navigator.onLine)
//       throw new Error('网络异常，请检查网络是否正常连接')

//     // 超时
//     if (error.message?.includes('timeout'))
//       throw new Error('请求超时，请重新尝试')

//     return Promise.reject(error)
//   },
// )

// /**
//  * response data结构，P为true时返回约定好的分页的结构，
//  * 接口分页结构不标准时置为false, 自己拼接T
//  */
// type ResponseData<T, P = false> = P extends true ? IPageInfoResponse<T> : T

// type RequestConfig = AxiosRequestConfig & { hideError?: boolean }

// /**
//   * 封装业务request
//   */
// async function request<T, P = false>(
//   url: string,
//   config: RequestConfig,
// ): Promise<ErrorWrap<ResponseData<T, P>>> {
//   const { method = 'POST', headers = {}, data: requestData, hideError, ...restConfig } = config

//   const withCredentials = config.withCredentials || instance.defaults.withCredentials

//   // for 后端统计
//   headers['X-URL'] = encodeURIComponent(window.location.hash?.slice(1))
//   headers['URL-History'] = encodeURIComponent(localStorage.getItem('menuListHistory') ?? '')

//   try {
//     const params = {
//       url,
//       method,
//       headers,
//       [method === 'GET' ? 'params' : 'data']: requestData,
//       ...restConfig,
//       withCredentials: withCredentials ?? !instance.defaults.headers.common.Authorization,
//     }

//     const { data } = await instance.request<IResponse<ResponseData<T, P>>>(params)
//     return { res: data.context } as ErrorWrap<ResponseData<T, P>>
//   }
//   catch (error: any) {
// __DEV__ && console.warn(error)

//     // // 是否加入默认 header,config 相关信息
//     // Sentry.withScope((scope) => {
//     //   scope.setTag('error_type', 'api')
//     //   // scope.setExtra('data', { headers, request: JSON.stringify(requestData, null, 2), api: url });
//     //   Sentry.captureException(error)
//     // })
//     !hideError && message.error(error?.message)
//     return { err: error } as ErrorWrap<ResponseData<T, P>>
//   }
// }

// function Post<T, P = false>(uri: string, data: object = {}, config?: RequestConfig) {
//   return request<T, P>(uri, { method: 'POST', data, ...config })
// }

// function Get<T, P = false>(uri: string, data?: object, config?: RequestConfig) {
//   return request<T, P>(uri, { method: 'GET', data, ...config })
// }

// function Delete<T, P = false>(uri: string, data?: object, config?: RequestConfig) {
//   return request<T, P>(uri, { method: 'DELETE', data, ...config })
// }

// function Put<T, P = false>(uri: string, data?: object, config?: RequestConfig) {
//   return request<T, P>(uri, { method: 'PUT', data, ...config })
// }

// /** 注册http状态码对应的handler */
// const registerHander = (status: number, handler: (data?: any) => void) => {
//   if (!status)
//     return console.warn('注册状态码不能为空!')

//   instance.interceptors.response.use(
//     (response) => {
//       if (response.status === status)
//         handler?.()
//       return response
//     },
//     (error: AxiosError) => {
//       if (error.response?.status === status)
//         handler?.()
//       return Promise.reject(error)
//     },
//   )
// }

// request.register = registerHander
// request.setDefaultHost = setDefaultHost
// request.setCommonHeader = setCommonHeader

// // request.instance.defaults.headers.common.Authorization
// request.setAuth = function (token: string | undefined | null, key = 'Authorization') {
//   if (token) {
//     setCommonHeader({ [key]: `Bearer ${token}` })
//     window.localStorage.setItem('token', token)
//   }
//   else {
//     setCommonHeader({ [key]: null })
//     window.localStorage.removeItem('token')
//   }
// }
// request.instance = instance
// request.setAuth(window.localStorage.getItem('token'))
// request.getAuth = function (): any {
//   return {
//     Authorization: `Bearer ${window.localStorage.getItem('token')}`,
//   }
// }
// export { Post, Get, Put, Delete }
// export default request
