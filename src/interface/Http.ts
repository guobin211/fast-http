import { HttpHeaders, HttpMethods, SearchParams } from './types'
import { Options } from '../options'

export interface FastRequestConfig {
    url?: string
    method?: HttpMethods
    data?: any
    params?: SearchParams
    headers?: any
    responseType?: XMLHttpRequestResponseType
    timeout?: number
}

export interface FastResponse<T = any> {
    data: T
    status: number
    statusText: string
    headers: HttpHeaders
    config: FastRequestConfig
    request: any
}

export interface FastPromise<T = any> extends FastResponse<T> {}

export interface Http {
    request<T>(config: FastRequestConfig): FastPromise<T>

    get<T>(url: string, config?: FastRequestConfig, options?: Options): FastPromise<T>
    delete<T>(url: string, config?: FastRequestConfig, options?: Options): FastPromise<T>

    post<T>(url: string, data?: any, config?: FastRequestConfig, options?: Options): FastPromise<T>
    put<T>(url: string, data?: any, config?: FastRequestConfig, options?: Options): FastPromise<T>
    patch<T>(url: string, data?: any, config?: FastRequestConfig, options?: Options): FastPromise<T>

    options<T>(url: string, config?: FastRequestConfig, options?: Options): FastPromise<T>
    head<T>(url: string, config?: FastRequestConfig, options?: Options): FastPromise<T>
}
