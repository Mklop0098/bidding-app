"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const passport_1 = __importDefault(require("passport"));
const User_1 = require("../models/User");
// lets create our strategy for web token
var strategy = new passport_jwt_1.default.Strategy({
    jwtFromRequest: passport_jwt_1.default.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SIGN || 'bidding'
}, function (payload, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var user = yield User_1.User.findOne({ _id: payload.id, username: payload.username });
        if (user) {
            next(null, user);
        }
        else {
            next(null, false);
        }
    });
});
// use the strategy
passport_1.default.use(strategy);
exports.default = passport_1.default;
