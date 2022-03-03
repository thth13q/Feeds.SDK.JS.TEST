"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = require("./utils/axios");
var Users_1 = (0, tslib_1.__importDefault)(require("./Users"));
var Posts_1 = (0, tslib_1.__importDefault)(require("./Posts"));
var Feeds_1 = (0, tslib_1.__importDefault)(require("./Feeds"));
var config_1 = require("./config");
var FeedsSDK = /** @class */ (function () {
    function FeedsSDK(options) {
        this.options = options;
        this.users = new Users_1.default(options);
        this.posts = new Posts_1.default(options);
        this.feeds = new Feeds_1.default(options);
        this.init();
    }
    FeedsSDK.prototype.init = function () {
        (0, axios_1.setAxiosConfig)(this.options);
        (0, config_1.setConfigVariables)(this.options.apiDomain);
    };
    return FeedsSDK;
}());
exports.default = FeedsSDK;
//# sourceMappingURL=index.js.map