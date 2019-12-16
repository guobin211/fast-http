/**
 * util
 *
 * @author GuoBin on 2019-07-27
 */
import { Options } from '../options'

const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
    return toString.call(val) === '[object Date]'
}

export function isPlainObject(val: any): val is Object {
    return toString.call(val) === '[object Object]'
}

export function mergeOptions(prev: Options, adds: Options): Options {
    const res: any = {}
    Object.assign(res, prev)
    for (let key in adds) {
        if (adds.hasOwnProperty(key)) {
            res[key] = (adds as any)[key]
        }
    }
    return res as Options
}

export function extend<T, U>(first: T, second: U): T & U {
    let result = {} as T & U
    for (const id in first) {
        ;(result as any)[id] = (first as any)[id]
    }
    for (const id in second) {
        ;(result as any)[id] = (second as any)[id]
    }
    return result
}
