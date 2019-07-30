/**
 * FastHttp
 */
import { FastPromise, FastRequestConfig, Http } from './interface/Http'
import { Options } from './options'

export default class FastHttp implements Http {
    private _defaultOptions: Options
    constructor() {
        this._defaultOptions = new Options()
    }

    delete(): any {}

    get(): any {}

    head(): any {}

    options(): any {}

    patch<T = any>(url: string, data?: any, config?: FastRequestConfig, options?: Options): any {}

    post<T = any>(url: string, data?: any, config?: FastRequestConfig, options?: Options): any {}

    put<T = any>(url: string, data?: any, config?: FastRequestConfig, options?: Options): any {}

    request(config: FastRequestConfig, options?: Options): any {}
}
