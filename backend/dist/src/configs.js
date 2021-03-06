"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("./middlewares/passport"));
const cors_1 = __importDefault(require("cors"));
const AppConfig = (app) => {
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use(passport_1.default.initialize());
    app.use((0, cors_1.default)());
};
exports.AppConfig = AppConfig;
