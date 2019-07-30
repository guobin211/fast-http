import { FastRequestConfig } from '../interface/Http'

export default function xhr(config: FastRequestConfig, progressCallback?: Function): Promise<any> {
    return new Promise((resolve, reject) => {
        const { data = null, url, method = 'get' } = config
        const request: XMLHttpRequest = new XMLHttpRequest()
        /**
         * xhr进度
         * @param ev
         */
        request.onprogress = (ev: ProgressEvent) => {
            if (typeof progressCallback === 'function') {
                progressCallback(ev)
            }
        }
        /**
         * 响应状态
         */
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status >= 200 && request.status < 400) {
                resolve()
            } else {
                reject()
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
        request.onerror = (err: ProgressEvent) => {}
        /**
         * 超时
         */
        request.ontimeout = () => {}
        request.open(method.toLocaleUpperCase(), url!, true)
        request.send(data)
    })
}
