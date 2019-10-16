import { HttpHeaders } from './interface/types';
export declare type Cache = 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached';
export declare type Credentials = 'include' | 'same-origin' | 'omit';
export declare type Mode = 'cors' | 'no-cors' | 'same-origin';
export declare type Redirect = 'follow' | 'manual' | 'error';
export declare type Referrer = 'no-referrer' | 'client';
/**
 * 全局Http设置, 在请求时会自动合并FastRequestConfig，
 */
export declare class Options {
    host?: string | undefined;
    header?: HttpHeaders | undefined;
    mode?: "cors" | "no-cors" | "same-origin" | undefined;
    cache?: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached" | undefined;
    credentials?: "same-origin" | "include" | "omit" | undefined;
    redirect?: "follow" | "manual" | "error" | undefined;
    referrer?: "no-referrer" | "client" | undefined;
    constructor(host?: string | undefined, header?: HttpHeaders | undefined, mode?: "cors" | "no-cors" | "same-origin" | undefined, cache?: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached" | undefined, credentials?: "same-origin" | "include" | "omit" | undefined, redirect?: "follow" | "manual" | "error" | undefined, referrer?: "no-referrer" | "client" | undefined);
}
