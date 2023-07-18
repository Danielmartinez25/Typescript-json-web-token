"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router
    .post('/signup', auth_controller_1.signup)
    .post('/signin', auth_controller_1.signin)
    .get('/profile', auth_controller_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map