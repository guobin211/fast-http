import { FastRequestConfig } from '../interface/Http'
import { voidFunc } from '../interface/types'
import { buildUrl } from '../utils/url'
import { createFastError } from '../interface/error'
import { isPlainObject } from '../utils/util'

export default function xhr(config: FastRequestConfig, progressCallback?: voidFunc): Promise<any> {
    return new Promise((resolve, reject) => {
        let currentSatate = 0;
        const { data = null, url, method = 'get', headers } = config
        const request: XMLHttpRequest = new XMLHttpRequest()
        request.withCredentials = true
        for (const key in headers) {
            if (typeof headers[key] === 'string') {
                request.setRequestHeader(key, headers[key])
            } else {
                throw new Error(`config.headers: ${key} must be string`)
            }
        }
        /**
         * xhr进度
         * @param ev
         */
        request.onprogress = (ev: ProgressEvent) => {
            if (progressCallback) {
                progressCallback(ev)
            }
        }
        /**
         * 响应状态
         */
        request.onreadystatechange = () => {
            if (request.readyState === 0) {
                /*尚未调用open方法*/
                currentSatate = 0
            }
            if (request.readyState === 1) {
                /*尚未调用send方法*/
                currentSatate = 1
            }
            if (request.readyState === 2) {
                /*send方法已调用，但是当前的状态及http头未知*/
                currentSatate = 2
            }
            if (request.readyState === 3) {
                /*(数据传送中) 已接收部分数据,响应及http头不全*/
                currentSatate = 3
            }
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 400) {
                    if (request.getResponseHeader('content-type') === '') {
                        resolve(request.responseText)
                    }
                    if (request.getResponseHeader('content-type') === 'application/json; charset=utf-8') {
                        resolve(JSON.parse(request.responseText))
                    }
                    resolve(request.responseText)
                } else {
                    reject(createFastError('request status error', config, request.status, request, request.response))
                }
            }
        }
        /**
         * 取消
         */
        request.onabort = () => {}
        /**
         * 错误
         * @param err
         */
        request.onerror = (err: ProgressEvent) => {
            reject(err)
        }
        /**
         * 超时
         */
        request.ontimeout = () => {
            reject('请求超时')
        }
        request.open(method.toLocaleUpperCase(), buildUrl(url + '', config.params), true)
        if (isPlainObject(data)) {
            request.setRequestHeader('Content-Type',  'application/json;charset=utf-8')
            request.send(JSON.stringify(data))
        } else {
            request.send(data)
        }
    })
}
