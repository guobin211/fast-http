"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toString = Object.prototype.toString;
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
exports.isDate = isDate;
function isPlainObject(val) {
    return toString.call(val) === '[object Object]';
}
exports.isPlainObject = isPlainObject;
function mergeOptions(prev, adds) {
    var res = {};
    Object.assign(res, prev);
    for (var key in adds) {
        if (adds.hasOwnProperty(key)) {
            res[key] = adds[key];
        }
    }
    return res;
}
exports.mergeOptions = mergeOptions;
function extend(first, second) {
    var result = {};
    for (var id in first) {
        ;
        result[id] = first[id];
    }
    for (var id in second) {
        // @ts-ignore
        if (!result.hasOwnProperty(id)) {
            ;
            result[id] = second[id];
        }
    }
    return result;
}
exports.extend = extend;
//# sourceMappingURL=util.js.map