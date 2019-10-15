/**
 * url
 *
 * @author GuoBin on 2019-07-27
 */
import { isDate, isPlainObject } from './util'

function encode(value: string): string {
    return encodeURIComponent(value)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
}

/**
 * get QueryString
 * @param url
 * @param params
 */
export function buildUrl(url: string, params?: any) {
    if (!params) {
        return url
    }
    const parts: string[] = []
    Object.keys(params).forEach(key => {
        const value = params[key]
        if (value === null || value === 'undefined' || value === undefined) {
            return
        }
        let res = []
        if (Array.isArray(value)) {
            res = value
            key += '[]'
        } else {
            res = [value]
        }
        res.forEach(val => {
            if (isDate(val)) {
                val = val.toISOString()
            } else if (isPlainObject(val)) {
                val = JSON.stringify(val)
            }
            parts.push(`${key}=${val}`)
        })
    })
    const serializedParams = parts.join('&')
    if (serializedParams) {
        const markIndex = url.indexOf('#')
        if (markIndex !== -1) {
            url = url.slice(0, markIndex)
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
    }
    return url
}
