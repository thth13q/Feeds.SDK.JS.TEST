"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentsApi = exports.deleteCommentApi = exports.createCommentApi = exports.getInteractionsApi = exports.deleteInteractionApi = exports.trackInteractionApi = exports.deletePostApi = exports.searchPosts = exports.updatePostApi = exports.getPostApi = exports.publishPostApi = exports.createPostApi = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("../utils/axios");
var Error_1 = (0, tslib_1.__importDefault)(require("../utils/Error"));
var config_1 = require("../config");
var createPostApi = function (_a) {
    var workspaceId = _a.workspaceId, body = _a.body;
    return (0, axios_1.getAxiosInstance)()
        .post("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/posts"), body)
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.createPostApi = createPostApi;
var publishPostApi = function (_a) {
    var workspaceId = _a.workspaceId, postId = _a.postId;
    return (0, axios_1.getAxiosInstance)()
        .post("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/posts/").concat(postId, "/status"), {
        status: "active"
    })
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.publishPostApi = publishPostApi;
var getPostApi = function (_a) {
    var workspaceId = _a.workspaceId, postId = _a.postId;
    return (0, axios_1.getAxiosInstance)()
        .get("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/posts/").concat(postId))
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.getPostApi = getPostApi;
var updatePostApi = function (_a) {
    var workspaceId = _a.workspaceId, postId = _a.postId, body = _a.body;
    return (0, axios_1.getAxiosInstance)()
        .put("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/posts/").concat(postId), body)
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.updatePostApi = updatePostApi;
var searchPosts = function (_a) {
    var workspaceId = _a.workspaceId, body = _a.body, pageToken = _a.pageToken;
    var token = pageToken ? "?pageToken=".concat(pageToken) : "";
    return (0, axios_1.getAxiosInstance)()
        .post("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/search").concat(token), body)
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.searchPosts = searchPosts;
var deletePostApi = function (_a) {
    var workspaceId = _a.workspaceId, postId = _a.postId;
    return (0, axios_1.getAxiosInstance)()
        .delete("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/posts/").concat(postId))
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.deletePostApi = deletePostApi;
var trackInteractionApi = function (_a) {
    var workspaceId = _a.workspaceId, id = _a.id, body = _a.body;
    return (0, axios_1.getAxiosInstance)()
        .post("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/interactions/").concat(id, "/track"), body)
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.trackInteractionApi = trackInteractionApi;
var deleteInteractionApi = function (_a) {
    var workspaceId = _a.workspaceId, id = _a.id, body = _a.body;
    return (0, axios_1.getAxiosInstance)()
        .delete("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/interactions/").concat(id, "/delete"), {
        data: body
    })
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.deleteInteractionApi = deleteInteractionApi;
var getInteractionsApi = function (_a) {
    var workspaceId = _a.workspaceId, id = _a.id, body = _a.body;
    return (0, axios_1.getAxiosInstance)()
        .post("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/interactions/").concat(id, "/get"), body)
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.getInteractionsApi = getInteractionsApi;
var createCommentApi = function (_a) {
    var workspaceId = _a.workspaceId, postId = _a.postId, body = _a.body;
    return (0, axios_1.getAxiosInstance)()
        .post("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/posts/").concat(postId, "/comments"), body)
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.createCommentApi = createCommentApi;
var deleteCommentApi = function (_a) {
    var workspaceId = _a.workspaceId, body = _a.body;
    return (0, axios_1.getAxiosInstance)()
        .delete("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/posts/").concat(body.postId, "/comments/").concat(body.commentId))
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.deleteCommentApi = deleteCommentApi;
var getCommentsApi = function (_a) {
    var workspaceId = _a.workspaceId, id = _a.id, pageToken = _a.pageToken;
    var token = pageToken ? "?pageToken=".concat(pageToken) : "";
    return (0, axios_1.getAxiosInstance)()
        .get("".concat(config_1.POSTS_API_URL, "/pages/").concat(workspaceId, "/posts/").concat(id, "/comments").concat(token))
        .catch(function (err) { return (0, Error_1.default)(err); });
};
exports.getCommentsApi = getCommentsApi;
//# sourceMappingURL=postsApi.js.map