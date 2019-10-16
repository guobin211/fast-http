var toString = Object.prototype.toString;
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
function isPlainObject(val) {
    return toString.call(val) === '[object Object]';
}

/**
 * url
 *
 * @author GuoBin on 2019-07-27
 */
/**
 * get QueryString
 * @param url
 * @param params
 */
function buildUrl(url, params) {
    if (!params) {
        return url;
    }
    var parts = [];
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value === null || value === 'undefined') {
            return;
        }
        var res = [];
        if (Array.isArray(value)) {
            res = value;
            key += '[]';
        }
        else {
            res = [value];
        }
        res.forEach(function (val) {
            if (isDate(val)) {
                val = val.toISOString();
            }
            else if (isPlainObject(val)) {
                val = JSON.stringify(val);
            }
            parts.push(key + "=" + val);
        });
    });
    var serializedParams = parts.join('&');
    if (serializedParams) {
        var markIndex = url.indexOf('#');
        if (markIndex !== -1) {
            url = url.slice(0, markIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}

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
        request.open(method.toLocaleUpperCase(), buildUrl(url + '', config.params), true);
        request.send(data);
    });
}

var FastHttp = /** @class */ (function () {
    function FastHttp(options) {
        this._defaultOptions = options ? options : {};
    }
    FastHttp.prototype.delete = function (url, config) {
        if (config) {
            config.method = 'delete';
        }
        else {
            config = {
                method: 'delete'
            };
        }
        return this.request(this._mergeConfig(url, config));
    };
    FastHttp.prototype.get = function (url, config, options) {
        if (config) {
            config.method = 'get';
        }
        else {
            config = {
                method: 'get'
            };
        }
        return this.request(this._mergeConfig(url, config, options));
    };
    FastHttp.prototype.head = function (url, config) {
        if (config) {
            config.method = 'head';
            config.data = null;
        }
        else {
            config = {
                method: 'head'
            };
        }
        return this.request(this._mergeConfig(url, config));
    };
    FastHttp.prototype.options = function (url, config) {
        if (config) {
            config.method = 'options';
            config.data = null;
        }
        else {
            config = {
                method: 'options'
            };
        }
        return this.request(this._mergeConfig(url, config));
    };
    FastHttp.prototype.patch = function (url, data, config, options) {
        if (config) {
            config.method = 'patch';
        }
        else {
            config = {
                method: 'patch'
            };
        }
        return this.request(this._mergeConfig(url, config, options));
    };
    FastHttp.prototype.post = function (url, data, config, options) {
        if (config) {
            config.method = 'post';
        }
        else {
            config = {
                method: 'post'
            };
        }
        return this.request(this._mergeConfig(url, config, options));
    };
    FastHttp.prototype.put = function (url, data, config, options) {
        if (config) {
            config.method = 'put';
        }
        else {
            config = {
                method: 'put'
            };
        }
        return this.request(this._mergeConfig(url, config, options));
    };
    FastHttp.prototype.request = function (config, options) {
        return xhr(config).then(function (res) { return res; });
    };
    FastHttp.prototype._mergeConfig = function (url, config, options) {
        var res = Object.create(null);
        if (options) {
            if (config) {
                res.url = options.host + config.url + url;
                res.method = config.method;
                res.data = config.data;
                res.params = config.params;
                res.responseType = config.responseType;
                var header = JSON.parse('{}');
                Object.assign(header, options.header, config.headers);
                res.headers = header;
            }
            else {
                res.url = options.host + url;
                res.method = 'get';
                res.headers = options.header;
            }
        }
        else {
            if (config) {
                res.url = config.url + url;
                res.method = config.method;
                res.data = config.data;
                res.params = config.params;
                res.responseType = config.responseType;
                var header = JSON.parse('{}');
                Object.assign(header, config.headers);
                res.headers = header;
            }
            else {
                res.url = url;
                res.method = 'get';
            }
        }
        return res;
    };
    return FastHttp;
}());

export default FastHttp;
//# sourceMappingURL=fast-http.es5.js.map
