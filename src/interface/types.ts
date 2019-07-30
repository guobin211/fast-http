export enum Types {
    NONE = '',
    JSON = 'application/json;charset=utf-8',
    FORM = 'application/x-www-form-urlencoded',
    FORM_DATA = 'multipart/form-data',
    TEXT = 'text/plain',
    HTML = 'text/html',
    BLOB = 'application/octet-stream',
    ARRAY_BUFFER = ''
}

export type HttpMethods =
    | 'get'
    | 'post'
    | 'delete'
    | 'put'
    | 'options'
    | 'patch'
    | 'head'
    | 'GET'
    | 'POST'
    | 'DELETE'
    | 'PUT'
    | 'OPTIONS'
    | 'PATCH'
    | 'HEAD'

export interface SearchParams {
    [key: string]: any
}

export interface HttpHeaders {
    [key: string]: string
}
