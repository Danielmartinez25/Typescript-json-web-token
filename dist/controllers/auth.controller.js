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
exports.profile = exports.signin = exports.signup = void 0;
const User_1 = __importDefault(require("../models/User"));
const errorResponse_1 = __importDefault(require("../helpers/errorResponse"));
const createTokenJwt_1 = __importDefault(require("../helpers/createTokenJwt"));
const createError_1 = __importDefault(require("../helpers/createError"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const user = new User_1.default({
            username,
            email,
            password
        });
        user.password = yield user.encryptPassword(password);
        const newUser = yield user.save();
        const token = (0, createTokenJwt_1.default)(newUser._id, process.env.SECRET_TOKEN);
        return res.status(200).json({
            ok: true,
            data: newUser,
            token: token
        });
    }
    catch (e) {
        return (0, errorResponse_1.default)(res, e, 'Signup');
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield User_1.default.findOne({ email: email });
        if (!user) {
            (0, createError_1.default)(400, 'Invalid email');
        }
        const correctPassword = yield (user === null || user === void 0 ? void 0 : user.validatePassword(password));
        if (!correctPassword) {
            (0, createError_1.default)(400, 'Invalid password');
        }
        const token = (0, createTokenJwt_1.default)(user === null || user === void 0 ? void 0 : user._id, process.env.SECRECT_TOKEN);
        return res.status(200).json({
            ok: true,
            status: 200,
            data: user,
            token: token
        });
    }
    catch (e) {
        return (0, errorResponse_1.default)(res, e, 'signin');
    }
});
exports.signin = signin;
const profile = (req, res) => {
};
exports.profile = profile;
//# sourceMappingURL=auth.controller.js.map