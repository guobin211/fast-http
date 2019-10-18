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

    delete(url: string, config?: FastRequestConfig): Promise<FastPromise> {
        if (config) {
            config.method = 'delete'
        } else {
            config = {
                method: 'delete'
            }
        }
        return this.request(this._mergeConfig(url, config))
    }

    get(url: string, config?: FastRequestConfig, options?: Options): Promise<FastPromise> {
        if (config) {
            config.method = 'get'
        } else {
            config = {
                method: 'get'
            }
        }
        return this.request(this._mergeConfig(url, config, options))
    }

    head(url: string, config?: FastRequestConfig): Promise<FastPromise> {
        if (config) {
            config.method = 'head'
            config.data = null
        } else {
            config = {
                method: 'head'
            }
        }
        return this.request(this._mergeConfig(url, config))
    }

    options(url: string, config?: FastRequestConfig): Promise<FastPromise> {
        if (config) {
            config.method = 'options'
            config.data = null
        } else {
            config = {
                method: 'options'
            }
        }
        return this.request(this._mergeConfig(url, config))
    }

    patch(url: string, data?: any, config?: FastRequestConfig, options?: Options): Promise<FastPromise> {
        if (config) {
            config.method = 'patch'
        } else {
            config = {
                method: 'patch'
            }
        }
        return this.request(this._mergeConfig(url, config, options))
    }

    post(url: string, data?: any, config?: FastRequestConfig, options?: Options): Promise<FastPromise> {
        if (config) {
            config.method = 'post'
        } else {
            config = {
                method: 'post'
            }
        }
        config.data = data ? data : null
        return this.request(this._mergeConfig(url, config, options))
    }

    put(url: string, data?: any, config?: FastRequestConfig, options?: Options): Promise<FastPromise> {
        if (config) {
            config.method = 'put'
        } else {
            config = {
                method: 'put'
            }
        }
        return this.request(this._mergeConfig(url, config, options))
    }

    request(config: FastRequestConfig, options?: Options): Promise<FastPromise> {
        return <Promise<FastPromise>>xhr(config)
    }

    private _mergeConfig(url: string, config?: FastRequestConfig, options?: Options): FastRequestConfig {
        const res: FastRequestConfig = Object.create(null)
        if (options) {
            if (config) {
                res.url = options.host ? config.url ? options.host + config.url + url : options.host + url: url
                res.method = config.method
                res.data = config.data
                res.params = config.params
                res.responseType = config.responseType
                const header = JSON.parse('{}')
                Object.assign(header, options.header, config.headers)
                res.headers = header
            } else {
                res.url = (options as any).host + url
                res.method = 'get'
                res.headers = options.header
            }
        } else {
            if (config) {
                res.url = config.url ? config.url + url : url
                res.method = config.method
                res.data = config.data
                res.params = config.params
                res.responseType = config.responseType
                const header = JSON.parse('{}')
                Object.assign(header, config.headers)
                res.headers = header
            } else {
                res.url = url
                res.method = 'get'
            }
        }
        return res as FastRequestConfig
    }
}
