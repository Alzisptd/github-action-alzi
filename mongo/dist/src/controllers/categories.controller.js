"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const categories_model_1 = __importDefault(require("../models/categories.model"));
const Yup = __importStar(require("yup"));
const createValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    price: Yup.number().required(),
    category: Yup.string().required(),
    description: Yup.string().required(),
    images: Yup.array().of(Yup.string()).required().min(1),
    qty: Yup.number().required().min(1),
});
exports.default = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             #swagger.tags = ['Category']
             #swagger.requestBody = {
              required: true,
              schema: {
                $ref: "#/components/schemas/Storecategories"
              }
             }
             */
            try {
                const result = yield categories_model_1.default.create(req.body);
                res.status(201).json({
                    data: result,
                    message: "Success create product",
                });
            }
            catch (error) {
                const err = error;
                res.status(500).json({
                    data: err.message,
                    message: "Failed create product",
                });
            }
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             #swagger.tags = ['Category']
             */
            try {
                const result = yield categories_model_1.default.find();
                res.status(200).json({
                    data: result,
                    message: "Success get all products",
                });
            }
            catch (error) {
                const err = error;
                res.status(500).json({
                    data: err.message,
                    message: "Failed get all products",
                });
            }
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             #swagger.tags = ['Category']
             */
            try {
                const result = yield categories_model_1.default.findOne({
                    _id: req.params.id,
                });
                res.status(200).json({
                    data: result,
                    message: "Success get one product",
                });
            }
            catch (error) {
                const err = error;
                res.status(500).json({
                    data: err.message,
                    message: "Failed get one product",
                });
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             #swagger.tags = ['Category']
             #swagger.requestBody = {
              required: true,
              schema: {
                $ref: "#/components/schemas/Storecategories"
              }
             }
             */
            try {
                const result = yield categories_model_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, {
                    new: true,
                });
                res.status(200).json({
                    data: result,
                    message: "Success update product",
                });
            }
            catch (error) {
                const err = error;
                res.status(500).json({
                    data: err.message,
                    message: "Failed update product",
                });
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             #swagger.tags = ['Category']
             */
            try {
                const result = yield categories_model_1.default.findOneAndDelete({
                    _id: req.params.id,
                });
                res.status(200).json({
                    data: result,
                    message: "Success delete product",
                });
            }
            catch (error) {
                const err = error;
                res.status(500).json({
                    data: err.message,
                    message: "Failed delete product",
                });
            }
        });
    },
};
