/**
 * FastHttp
 */
import { FastPromise, FastRequestConfig, Http } from './interface/Http'
import { Options } from './options'
import xhr from './core/xhr'

export default class FastHttp implements Http {
    private _defaultOptions: Options
    constructor(options?: Options) {
        this._defaultOptions = options ? options : {}
    }

    delete(): any {}

    get(url: string, config?: FastRequestConfig, options?: Options): Promise<FastPromise> {
        const _config: any = {
            url: url,
            method: 'get',
            params: config ? config.params : ''
        }
        return xhr(_config).then((res: any) => res as FastPromise)
    }

    head(): any {}

    options(): any {}

    patch(url: string, data?: any, config?: FastRequestConfig, options?: Options): any {}

    post(url: string, data?: any, config?: FastRequestConfig, options?: Options): any {}

    put(url: string, data?: any, config?: FastRequestConfig, options?: Options): any {}

    request(config: FastRequestConfig, options?: Options): any {}
}
