"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var api = (0, tslib_1.__importStar)(require("../api"));
var Users = /** @class */ (function () {
    function Users(_a) {
        var workspaceId = _a.workspaceId;
        this.workspaceId = workspaceId;
    }
    Users.prototype.getUser = function (userId) {
        return api.getUserApi({ workspaceId: this.workspaceId, userId: userId });
    };
    Users.prototype.updateUser = function (userId, body) {
        return api.updateUser({ workspaceId: this.workspaceId, userId: userId, body: body });
    };
    Users.prototype.searchUsers = function (body, pageToken) {
        return api.searchUsers({ workspaceId: this.workspaceId, body: body, pageToken: pageToken });
    };
    return Users;
}());
exports.default = Users;
//# sourceMappingURL=index.js.map