"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * url
 *
 * @author GuoBin on 2019-07-27
 */
var util_1 = require("./util");
function encode(value) {
    return encodeURIComponent(value)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}
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
            if (util_1.isDate(val)) {
                val = val.toISOString();
            }
            else if (util_1.isPlainObject(val)) {
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
exports.buildUrl = buildUrl;
//# sourceMappingURL=url.js.map