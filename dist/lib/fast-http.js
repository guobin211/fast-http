"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xhr_1 = require("./core/xhr");
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
        return xhr_1.default(config).then(function (res) { return res; });
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
exports.default = FastHttp;
//# sourceMappingURL=fast-http.js.map