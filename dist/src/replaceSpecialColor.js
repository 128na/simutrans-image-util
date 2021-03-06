"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSpecialColor = exports.replaceSpecialColor = void 0;
const specialColors_1 = __importDefault(require("./specialColors"));
/**
 * replace special color to (r+1,g+1,b+1)
 */
function replaceSpecialColor(canvas, specialColors = specialColors_1.default) {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const color = [data[i], data[i + 1], data[i + 2]].join(',');
        if (specialColors.includes(color)) {
            handleSpecialColor(data, i);
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
exports.replaceSpecialColor = replaceSpecialColor;
function handleSpecialColor(data, i) {
    [data[i], data[i + 1], data[i + 2]] = [
        Math.min(255, data[i + 0] + 1),
        Math.min(255, data[i + 1] + 1),
        Math.min(255, data[i + 2] + 1),
    ];
}
exports.handleSpecialColor = handleSpecialColor;
