import { FastRequestConfig } from '../interface/Http'

export function fetch(url: string, options?: FastRequestConfig) {
    return window.fetch(url, {
        keepalive: true,
        method: options ? options.method : 'get'
    })
}
