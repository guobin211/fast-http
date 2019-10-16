"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FastHttpError = /** @class */ (function (_super) {
    __extends(FastHttpError, _super);
    function FastHttpError(message, config, code, request, response) {
        var _this = _super.call(this, message) || this;
        _this.isFastError = true;
        _this.config = config;
        _this.code = code;
        _this.request = request;
        _this.response = response;
        Object.setPrototypeOf(_this, FastHttpError.prototype);
        return _this;
    }
    return FastHttpError;
}(Error));
exports.FastHttpError = FastHttpError;
function createFastError(message, config, code, request, response) {
    return new FastHttpError(message, config, code, request, response);
}
exports.createFastError = createFastError;
//# sourceMappingURL=error.js.map