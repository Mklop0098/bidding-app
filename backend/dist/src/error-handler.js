"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAuthorized = void 0;
const UnAuthorized = (res) => {
    return res.status(401).json({
        code: -1,
        message: "Unauthorized"
    });
};
exports.UnAuthorized = UnAuthorized;
