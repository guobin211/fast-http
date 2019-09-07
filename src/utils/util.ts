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
    let result = <T & U>{}
    for (let id in first) {
        ;(<any>result)[id] = (<any>first)[id]
    }
    for (let id in second) {
        // @ts-ignore
        if (!result.hasOwnProperty(id)) {
            ;(<any>result)[id] = (<any>second)[id]
        }
    }
    return result
}
