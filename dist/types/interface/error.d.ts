import { FastRequestConfig, FastResponse } from './Http';
export declare class FastHttpError extends Error {
    isFastError: boolean;
    config: FastRequestConfig;
    code?: string | null;
    request?: any;
    response?: FastResponse;
    constructor(message: string, config: FastRequestConfig, code?: string | null, request?: any, response?: FastResponse);
}
export declare function createFastError(message: string, config: FastRequestConfig, code?: string | null, request?: any, response?: FastResponse): FastHttpError;
