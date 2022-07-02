"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoute = void 0;
const userController = __importStar(require("./controllers/User.controller"));
const passport_1 = __importDefault(require("./middlewares/passport"));
const error_handler_1 = require("./error-handler");
const AppRoute = (app) => {
    const apiVersion = 'v1';
    app.get('/', (req, res) => {
        res.status(200).json();
    });
    app.post(`/api/${apiVersion}/register`, userController.register);
    app.post(`/api/${apiVersion}/login`, userController.login);
    app.get('/api/v1/user', passport_1.default.authenticate('jwt', { session: false }), userController.getInfo);
    app.get("/api/v1/test", passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
        if (!req.user)
            return (0, error_handler_1.UnAuthorized)(res);
        return res.status(200).json({ code: "ok" });
    });
};
exports.AppRoute = AppRoute;
