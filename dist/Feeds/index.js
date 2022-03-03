"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var api = (0, tslib_1.__importStar)(require("../api"));
var Feeds = /** @class */ (function () {
    function Feeds(_a) {
        var workspaceId = _a.workspaceId;
        this.workspaceId = workspaceId;
    }
    Feeds.prototype.getFeed = function (feedId, pageToken, body) {
        return api.getFeedApi({ workspaceId: this.workspaceId, feedId: feedId, pageToken: pageToken, body: body });
    };
    return Feeds;
}());
exports.default = Feeds;
//# sourceMappingURL=index.js.map