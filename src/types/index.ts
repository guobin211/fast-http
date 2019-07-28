/**
 * index
 *
 * @author GuoBin on 2019-07-27
 */

export type Method =
    'get'
    | 'post'
    | 'delete'
    | 'put'
    | 'options'
    | 'patch'
    | 'GET'
    | 'POST'
    | 'DELETE'
    | 'PUT'
    | 'OPTIONS'
    | 'PATCH';

export interface FastRequestConfig {
    url: string;
    method?: Method;
    data?: any;
    params?: any;
}
