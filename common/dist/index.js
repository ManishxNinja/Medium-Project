"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.blogChangeSchema = exports.uploadSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.uploadSchema = zod_1.default.object({
    title: zod_1.default.string().min(3).max(40),
    content: zod_1.default.string(),
});
exports.blogChangeSchema = zod_1.default.object({
    id: zod_1.default.string(),
});
exports.userSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(7)
});
