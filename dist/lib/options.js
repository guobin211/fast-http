"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 全局Http设置, 在请求时会自动合并FastRequestConfig，
 */
var Options = /** @class */ (function () {
    function Options(host, header, mode, cache, credentials, redirect, referrer) {
        this.host = host;
        this.header = header;
        this.mode = mode;
        this.cache = cache;
        this.credentials = credentials;
        this.redirect = redirect;
        this.referrer = referrer;
    }
    return Options;
}());
exports.Options = Options;
//# sourceMappingURL=options.js.map