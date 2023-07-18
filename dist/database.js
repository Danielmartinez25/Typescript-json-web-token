"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb+srv://danielMartinez:daniel1890@cluster0.npgghpc.mongodb.net/json-web-token', {})
    .then(db => console.log('Database is connected'))
    .catch(error => console.log(error));
//# sourceMappingURL=database.js.map