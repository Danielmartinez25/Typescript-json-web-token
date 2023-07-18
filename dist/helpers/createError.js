"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
exports.default = (status, message) => {
    throw (0, http_errors_1.default)(status, message);
};
//# sourceMappingURL=createError.js.map