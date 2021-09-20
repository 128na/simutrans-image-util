"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialColors = exports.splitImage = exports.shiftImage = exports.replaceSpecialColor = exports.mergeImage = exports.eraseTransparent = exports.eraseColor = void 0;
const eraseColor_1 = require("./src/eraseColor");
Object.defineProperty(exports, "eraseColor", { enumerable: true, get: function () { return eraseColor_1.eraseColor; } });
const mergeImage_1 = require("./src/mergeImage");
Object.defineProperty(exports, "mergeImage", { enumerable: true, get: function () { return mergeImage_1.mergeImage; } });
const replaceSpecialColor_1 = require("./src/replaceSpecialColor");
Object.defineProperty(exports, "replaceSpecialColor", { enumerable: true, get: function () { return replaceSpecialColor_1.replaceSpecialColor; } });
const eraseTransparent_1 = require("./src/eraseTransparent");
Object.defineProperty(exports, "eraseTransparent", { enumerable: true, get: function () { return eraseTransparent_1.eraseTransparent; } });
const shiftImage_1 = __importDefault(require("./src/shiftImage"));
exports.shiftImage = shiftImage_1.default;
const splitImage_1 = __importDefault(require("./src/splitImage"));
exports.splitImage = splitImage_1.default;
const specialColors_1 = __importDefault(require("./src/specialColors"));
exports.specialColors = specialColors_1.default;
