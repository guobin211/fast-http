"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Interceptor = /** @class */ (function () {
    function Interceptor() {
        this._interceptors = [];
    }
    Interceptor.prototype.use = function (resolved, rejected) {
        this._interceptors.push({
            resolved: resolved,
            rejected: rejected
        });
        return this._interceptors.length - 1;
    };
    Interceptor.prototype.eject = function (id) {
        if (this._interceptors[id]) {
            this._interceptors[id] = null;
        }
    };
    Interceptor.prototype.forEach = function (fn) {
        this._interceptors.forEach(function (interceptor) {
            if (interceptor !== null) {
                fn(interceptor);
            }
        });
    };
    return Interceptor;
}());
exports.default = Interceptor;
//# sourceMappingURL=interceptor.js.map