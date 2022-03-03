"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchUsers = exports.updateUser = exports.getUserApi = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("../utils/axios");
var Error_1 = (0, tslib_1.__importDefault)(require("../utils/Error"));
var config_1 = require("../config");
var getUserApi = function (_a) {
    var workspaceId = _a.workspaceId, userId = _a.userId;
    return ((0, axios_1.getAxiosInstance)().get("".concat(config_1.USERS_API_URL, "/pages/").concat(workspaceId, "/customers/").concat(userId))
        .catch(function (err) { return (0, Error_1.default)(err); }));
};
exports.getUserApi = getUserApi;
var updateUser = function (_a) {
    var workspaceId = _a.workspaceId, userId = _a.userId, body = _a.body;
    return ((0, axios_1.getAxiosInstance)().put("".concat(config_1.USERS_API_URL, "/pages/").concat(workspaceId, "/customers/").concat(userId), body)
        .catch(function (err) { return (0, Error_1.default)(err); }));
};
exports.updateUser = updateUser;
var searchUsers = function (_a) {
    var workspaceId = _a.workspaceId, body = _a.body, pageToken = _a.pageToken;
    var token = pageToken ? "?pageToken=".concat(pageToken) : '';
    return (0, axios_1.getAxiosInstance)().post("".concat(config_1.USERS_SEARCH_API_URL, "/pages/").concat(workspaceId, "/search").concat(token), body)
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.searchUsers = searchUsers;
//# sourceMappingURL=usersApi.js.map