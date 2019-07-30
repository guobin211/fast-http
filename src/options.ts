import { HttpHeaders } from './interface/types'

export type Cache = 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached'
export type Credentials = 'include' | 'same-origin' | 'omit'
export type Mode = 'cors' | 'no-cors' | 'same-origin'
export type Redirect = 'follow' | 'manual' | 'error'
export type Referrer = 'no-referrer' | 'client'

/**
 * 全局Http设置, 在请求时会自动合并FastRequestConfig，
 */
export class Options {
    constructor(
        public host?: string,
        public header?: HttpHeaders,
        public mode?: Mode,
        public cache?: Cache,
        public credentials?: Credentials,
        public redirect?: Redirect,
        public referrer?: Referrer
    ) {}
}
