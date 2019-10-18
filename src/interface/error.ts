import { FastRequestConfig, FastResponse } from './Http'

export class FastHttpError {
    isFastError: boolean
    config: FastRequestConfig
    code?: number
    request?: any
    response?: FastResponse
    reason?: string

    constructor(
        isFastError: boolean,
        config: FastRequestConfig,
        code?: number,
        request?: any,
        response?: FastResponse
    ) {
        this.isFastError = isFastError
        this.config = config
        this.code = code
        this.request = request
        this.response = response
        if (code === 0) {
            this.reason = '无法与建立服务器连接'
        } else if (code === 1) {
            this.reason = '无法Open与服务器的连接'
        } else if (code === 2) {
            this.reason = '无法Send数据到服务器'
        } else if (code === 3) {
            this.reason = '响应数据不完整'
        }
    }
}

export function createFastError(
    message: string,
    config: FastRequestConfig,
    code: number,
    request?: any,
    response?: FastResponse
): FastHttpError {
    if (code >= 500) {
        return new FastHttpError(false, config, code, request, response)
    }
    return new FastHttpError(true, config, code, request, response)
}
