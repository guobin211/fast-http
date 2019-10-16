/**
 * FastHttp
 */
import { FastPromise, FastRequestConfig, Http } from './interface/Http';
import { Options } from './options';
export default class FastHttp implements Http {
    private _defaultOptions;
    constructor(options?: Options);
    delete(url: string, config?: FastRequestConfig): Promise<FastPromise>;
    get(url: string, config?: FastRequestConfig, options?: Options): Promise<FastPromise>;
    head(url: string, config?: FastRequestConfig): Promise<FastPromise>;
    options(url: string, config?: FastRequestConfig): Promise<FastPromise>;
    patch(url: string, data?: any, config?: FastRequestConfig, options?: Options): Promise<FastPromise>;
    post(url: string, data?: any, config?: FastRequestConfig, options?: Options): Promise<FastPromise>;
    put(url: string, data?: any, config?: FastRequestConfig, options?: Options): Promise<FastPromise>;
    request(config: FastRequestConfig, options?: Options): Promise<FastPromise>;
    private _mergeConfig;
}
