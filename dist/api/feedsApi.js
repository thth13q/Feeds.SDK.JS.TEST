"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeedApi = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("../utils/axios");
var Error_1 = (0, tslib_1.__importDefault)(require("../utils/Error"));
var config_1 = require("../config");
var getFeedApi = function (_a) {
    var workspaceId = _a.workspaceId, feedId = _a.feedId, pageToken = _a.pageToken, body = _a.body;
    if (body == undefined) {
        body = { pageToken: pageToken };
    }
    else {
        body.pageToken = pageToken;
    }
    var url = "".concat(config_1.FEED_API_URL, "/pages/").concat(workspaceId, "/feed/").concat(feedId);
    return (0, axios_1.getAxiosInstance)().post(url, body)
        .then(function (res) { return res.data; })
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.getFeedApi = getFeedApi;
//# sourceMappingURL=feedsApi.js.map