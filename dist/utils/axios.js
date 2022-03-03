"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAxiosConfig = exports.getAxiosInstance = void 0;
var tslib_1 = require("tslib");
var axios_1 = (0, tslib_1.__importDefault)(require("axios"));
var config_1 = require("../config");
var axiosInstance = axios_1.default.create();
var getAxiosInstance = function () { return axiosInstance; };
exports.getAxiosInstance = getAxiosInstance;
var isRefreshToken = function (url, workspaceId) { return (url === "".concat(config_1.USERS_API_URL, "/pages/").concat(workspaceId, "/customers/refreshToken")); };
var setAxiosConfig = function (config) {
    axiosInstance = axios_1.default.create();
    var refreshedData;
    var retry = false;
    axiosInstance.interceptors.request.use(function (axiosConfig) {
        if (isRefreshToken(axiosConfig.url, config.workspaceId)) {
            axiosConfig.headers.Authorization = "Bearer ".concat(retry ? refreshedData.refreshToken : config.refreshToken);
        }
        else {
            axiosConfig.headers.Authorization = "Bearer ".concat(retry ? refreshedData.accessToken : config.accessToken);
        }
        return axiosConfig;
    });
    axiosInstance.interceptors.response.use(function (response) { return response; }, function (error) {
        var originalRequest = error.config;
        if (error.response.status !== 401) {
            return Promise.reject(error);
        }
        if (isRefreshToken(originalRequest.url, config.workspaceId)) {
            return Promise.reject(error);
        }
        axios_1.default.defaults.headers.common['Authorization'] = "Bearer ".concat(retry ? refreshedData.refreshToken : config.refreshToken);
        retry = true;
        return axios_1.default.get("".concat(config_1.USERS_API_URL, "/pages/").concat(config.workspaceId, "/customers/refreshToken"))
            .then(function (res) {
            var _a = res.data, accessToken = _a.accessToken, refreshToken = _a.refreshToken;
            if (res.status === 200) {
                refreshedData = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, refreshedData), { accessToken: accessToken, refreshToken: refreshToken, workspaceId: config.workspaceId });
                originalRequest.headers['Authorization'] = 'Bearer ' + accessToken;
                return axiosInstance(originalRequest);
            }
            return Promise.reject(error);
        });
    });
};
exports.setAxiosConfig = setAxiosConfig;
exports.default = axiosInstance;
//# sourceMappingURL=axios.js.map