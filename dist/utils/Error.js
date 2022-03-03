"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SDKError = /** @class */ (function () {
    function SDKError(error) {
        var _a, _b;
        this.errors = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data.errors;
        this.status = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status;
    }
    return SDKError;
}());
var generateError = function (error) {
    var _a, _b;
    if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.data.errors[0].code) !== 112 && ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data.errors[0].code) !== 111) {
        throw new SDKError(error);
    }
};
exports.default = generateError;
//# sourceMappingURL=Error.js.map