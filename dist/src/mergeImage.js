"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeImage = void 0;
const canvas_1 = require("canvas");
const eraseColor_1 = require("./eraseColor");
const eraseTransparent_1 = require("./eraseTransparent");
const replaceSpecialColor_1 = require("./replaceSpecialColor");
const specialColors_1 = __importDefault(require("./specialColors"));
/**
 * Merge images into canvas.
 */
function mergeImage(images, options) {
    // 画像サイズはすべて同じ想定
    const canvas = (options === null || options === void 0 ? void 0 : options.canvas) || (0, canvas_1.createCanvas)(maxWidth(images), maxHeight(images));
    const ctx = canvas.getContext('2d');
    images.map(img => ctx.drawImage(img, 0, 0));
    if ((options === null || options === void 0 ? void 0 : options.eraseColor) || (options === null || options === void 0 ? void 0 : options.replaceSpecialColor) || (options === null || options === void 0 ? void 0 : options.eraseTransparent)) {
        handleImage(canvas, options);
    }
    return canvas;
}
exports.mergeImage = mergeImage;
function maxWidth(images) {
    return images.reduce((max, current) => Math.max(max, current.width), 0);
}
function maxHeight(images) {
    return images.reduce((max, current) => Math.max(max, current.height), 0);
}
function handleImage(canvas, options) {
    const eraseColor = (options === null || options === void 0 ? void 0 : options.eraseColor) || false;
    const replaceSpecialColor = (options === null || options === void 0 ? void 0 : options.replaceSpecialColor) || false;
    const specialColors = (options === null || options === void 0 ? void 0 : options.specialColors) || specialColors_1.default;
    const eraseTransparent = (options === null || options === void 0 ? void 0 : options.eraseTransparent) || false;
    const eraseTransparentThreshold = 255 * ((options === null || options === void 0 ? void 0 : options.eraseTransparentThreshold) || 0.5);
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const color = [data[i], data[i + 1], data[i + 2]].join(',');
        if (eraseColor && color === eraseColor) {
            (0, eraseColor_1.handleEraseColor)(data, i);
        }
        if (replaceSpecialColor && specialColors.includes(color)) {
            (0, replaceSpecialColor_1.handleSpecialColor)(data, i);
        }
        if (eraseTransparent) {
            (0, eraseTransparent_1.handleTransparent)(data, i, eraseTransparentThreshold);
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
