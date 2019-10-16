/**
 * util
 *
 * @author GuoBin on 2019-07-27
 */
import { Options } from '../options';
export declare function isDate(val: any): val is Date;
export declare function isPlainObject(val: any): val is Object;
export declare function mergeOptions(prev: Options, adds: Options): Options;
export declare function extend<T, U>(first: T, second: U): T & U;
