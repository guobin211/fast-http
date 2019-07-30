import { FastRequestConfig, FastResponse } from './Http'

export class FastHttpError extends Error {
    isFastError: boolean
    config: FastRequestConfig
    code?: string | null
    request?: any
    response?: FastResponse

    constructor(
        message: string,
        config: FastRequestConfig,
        code?: string | null,
        request?: any,
        response?: FastResponse
    ) {
        super(message)
        this.isFastError = true
        this.config = config
        this.code = code
        this.request = request
        this.response = response
        Object.setPrototypeOf(this, FastHttpError.prototype)
    }
}

export function createFastError(
    message: string,
    config: FastRequestConfig,
    code?: string | null,
    request?: any,
    response?: FastResponse
): FastHttpError {
    return new FastHttpError(message, config, code, request, response)
}
