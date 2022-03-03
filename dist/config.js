"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConfigVariables = exports.USERS_SEARCH_API_URL = exports.FEED_API_URL = exports.POSTS_API_URL = exports.USERS_API_URL = void 0;
var setConfigVariables = function (name) {
    exports.USERS_API_URL = name ? "https://users.".concat(name, "/api/v2") : 'https://users.api.feeds.dev/api/v2';
    exports.POSTS_API_URL = name ? "https://posts.".concat(name, "/api/v3") : 'https://posts.api.feeds.dev/api/v3';
    exports.FEED_API_URL = name ? "https://posts.".concat(name, "/api/v3") : 'https://posts.api.feeds.dev/api/v3';
    exports.USERS_SEARCH_API_URL = name ? "https://users.".concat(name, "/api/v3") : 'https://users.api.feeds.dev/api/v3';
};
exports.setConfigVariables = setConfigVariables;
//# sourceMappingURL=config.js.map