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
exports.getInfo = exports.login = exports.register = void 0;
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    if (!username)
        return res.status(400).json({
            code: 1,
            message: "Missing information"
        });
    const existedUser = yield User_1.User.find({ username: username });
    if (existedUser.length) {
        return res.status(400).json({
            code: 2,
            message: "User already exists"
        });
    }
    const password = yield bcrypt_1.default.hash(req.body.password, 10);
    const user = new User_1.User(Object.assign(Object.assign({}, req.body), { password }));
    const savedUser = yield user.save();
    const payload = {
        id: savedUser._id,
        name: savedUser.name,
        phone: savedUser.phone,
        address: savedUser.address,
        username: savedUser.username
    };
    res.status(201).json({
        code: "0",
        data: Object.assign(Object.assign({}, payload), { token: createToken(payload, process.env.TOKEN_SIGN || "") })
    });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ code: 1, message: "Missing information" });
    }
    const detectedUser = yield User_1.User.findOne({ username });
    if (!detectedUser) {
        return res.status(404).json({
            code: -1,
            message: "Not found"
        });
    }
    const isValidPassword = yield bcrypt_1.default.compare(password, detectedUser.password);
    if (isValidPassword) {
        const payload = {
            id: detectedUser._id,
            name: detectedUser.name,
            phone: detectedUser.phone,
            address: detectedUser.address,
            username: detectedUser.username
        };
        return res.status(200).json({ code: 0, user: payload, token: createToken(payload, process.env.TOKEN_SIGN || 'bidding') });
    }
    return res.status(401).json({ code: -1, message: "Username or password is incorrect" });
});
exports.login = login;
const getInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const detectedUser = req.user;
    const user = {
        id: detectedUser._id,
        name: detectedUser.name,
        address: detectedUser.address,
        phone: detectedUser.phone,
        username: detectedUser.username
    };
    return res.status(200).json({ code: 0, data: user });
});
exports.getInfo = getInfo;
const createToken = (payload, sign) => {
    return jsonwebtoken_1.default.sign(payload, sign, {
        expiresIn: 24 * 60 * 60 // 1 day
    });
};
