"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialColors = exports.splitImage = exports.shiftImage = exports.replaceSpecialColor = exports.mergeImage = exports.eraseColor = void 0;
const eraseColor_1 = __importDefault(require("./src/eraseColor"));
exports.eraseColor = eraseColor_1.default;
const mergeImage_1 = __importDefault(require("./src/mergeImage"));
exports.mergeImage = mergeImage_1.default;
const replaceSpecialColor_1 = __importDefault(require("./src/replaceSpecialColor"));
exports.replaceSpecialColor = replaceSpecialColor_1.default;
const shiftImage_1 = __importDefault(require("./src/shiftImage"));
exports.shiftImage = shiftImage_1.default;
const splitImage_1 = __importDefault(require("./src/splitImage"));
exports.splitImage = splitImage_1.default;
const specialColors_1 = __importDefault(require("./src/specialColors"));
exports.specialColors = specialColors_1.default;
