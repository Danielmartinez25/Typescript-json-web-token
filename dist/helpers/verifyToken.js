"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenValidation = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json('Access denied');
    }
    const payload = jsonwebtoken_1.default.verify(token, process.env.SECRECT_KEY || 'Secret-token');
    req.userId = payload._id;
    next();
};
exports.tokenValidation = tokenValidation;
//# sourceMappingURL=verifyToken.js.map