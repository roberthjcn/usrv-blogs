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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const services_1 = require("../services");
exports.postController = {
    getAllPost: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const postData = yield services_1.PostService.getAll();
            return res.send(postData);
        }
        catch (err) {
            return res.status(400).send({ message: err.message });
        }
    }),
    getPostById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const postData = yield services_1.PostService.getPostById(id);
            return res.send(postData);
        }
        catch (err) {
            return res.status(400).send({ message: err.message });
        }
    }),
    createPost: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const postData = yield services_1.PostService.createPost(req.body);
            return res.send(postData);
        }
        catch (err) {
            return res.status(400).send({ message: err.message });
        }
    })
};
