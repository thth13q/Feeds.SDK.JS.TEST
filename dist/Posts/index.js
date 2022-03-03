"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var api = (0, tslib_1.__importStar)(require("../api"));
var Posts = /** @class */ (function () {
    function Posts(_a) {
        var workspaceId = _a.workspaceId;
        this.workspaceId = workspaceId;
    }
    Posts.prototype.getPost = function (postId) {
        return api.getPostApi({ workspaceId: this.workspaceId, postId: postId });
    };
    Posts.prototype.createPost = function (body) {
        return api.createPostApi({ workspaceId: this.workspaceId, body: body });
    };
    Posts.prototype.publishPost = function (postId) {
        return api.publishPostApi({ workspaceId: this.workspaceId, postId: postId });
    };
    Posts.prototype.updatePost = function (postId, body) {
        return api.updatePostApi({ workspaceId: this.workspaceId, postId: postId, body: body });
    };
    Posts.prototype.searchPosts = function (body, pageToken) {
        return api.searchPosts({ workspaceId: this.workspaceId, body: body, pageToken: pageToken });
    };
    Posts.prototype.deletePost = function (postId) {
        return api.deletePostApi({ workspaceId: this.workspaceId, postId: postId });
    };
    Posts.prototype.trackInteraction = function (id, body) {
        return api.trackInteractionApi({ workspaceId: this.workspaceId, id: id, body: body });
    };
    Posts.prototype.deleteInteraction = function (id, body) {
        return api.deleteInteractionApi({ workspaceId: this.workspaceId, id: id, body: body });
    };
    Posts.prototype.getInteractions = function (id, body) {
        return api.getInteractionsApi({ workspaceId: this.workspaceId, id: id, body: body });
    };
    Posts.prototype.createComment = function (postId, body) {
        return api.createCommentApi({ workspaceId: this.workspaceId, postId: postId, body: body });
    };
    Posts.prototype.deleteComment = function (body) {
        return api.deleteCommentApi({ workspaceId: this.workspaceId, body: body });
    };
    Posts.prototype.getComments = function (id, pageToken) {
        return api.getCommentsApi({ workspaceId: this.workspaceId, id: id, pageToken: pageToken });
    };
    return Posts;
}());
exports.default = Posts;
//# sourceMappingURL=index.js.map