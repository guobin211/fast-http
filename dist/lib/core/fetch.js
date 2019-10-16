"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetch(url, options) {
    return window.fetch(url, {
        keepalive: true,
        method: options ? options.method : 'get'
    });
}
exports.fetch = fetch;
//# sourceMappingURL=fetch.js.map