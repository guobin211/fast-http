"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("../utils/url");
function xhr(config, progressCallback) {
    return new Promise(function (resolve, reject) {
        var _a = config.data, data = _a === void 0 ? null : _a, url = config.url, _b = config.method, method = _b === void 0 ? 'get' : _b, headers = config.headers;
        var request = new XMLHttpRequest();
        request.withCredentials = true;
        for (var key in headers) {
            if (typeof headers[key] === 'string') {
                request.setRequestHeader(key, headers[key]);
            }
            else {
                throw new Error("config.headers: " + key + " must be string");
            }
        }
        /**
         * xhr进度
         * @param ev
         */
        request.onprogress = function (ev) {
            if (progressCallback) {
                progressCallback(ev);
            }
        };
        /**
         * 响应状态
         */
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status >= 200 && request.status < 400) {
                if (request.getResponseHeader('content-type') === '') {
                    resolve(request.responseText);
                }
                resolve();
            }
            else {
                reject();
            }
        };
        /**
         * 取消
         */
        request.onabort = function () { };
        /**
         * 错误
         * @param err
         */
        request.onerror = function (err) {
            reject(err);
        };
        /**
         * 超时
         */
        request.ontimeout = function () {
            reject('请求超时');
        };
        request.open(method.toLocaleUpperCase(), url_1.buildUrl(url + '', config.params), true);
        request.send(data);
    });
}
exports.default = xhr;
//# sourceMappingURL=xhr.js.map