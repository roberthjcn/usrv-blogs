"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.router = (0, express_1.Router)();
exports.router.get('/', controllers_1.postController.getAllPost);
exports.router.post('/', controllers_1.postController.createPost);
exports.default = exports.router;
