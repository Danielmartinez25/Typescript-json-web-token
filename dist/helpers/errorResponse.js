"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (res, error, method) => {
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || `Ups hubo un error en ${method}`
    });
};
//# sourceMappingURL=errorResponse.js.map