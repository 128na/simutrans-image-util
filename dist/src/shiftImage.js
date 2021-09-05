"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
/**
 * Shifts the image across multiple tiles for dat specification.
 */
function shiftImage(image, inputSize = 128, outputSize = 256) {
    const n = (image.width - inputSize * 2) / inputSize;
    if (!Number.isInteger(n)) {
        throw new Error("invalid size:" + n);
    }
    const w = outputSize * (n + 1) * 2;
    const h = image.height;
    const canvas = (0, canvas_1.createCanvas)(w, h);
    const ctx = canvas.getContext('2d');
    for (let index = 0; index <= n; index++) {
        const [sx, sy, sw, sh] = [index * inputSize / 2, index * inputSize / 4, inputSize, h - index * inputSize / 4];
        const [dx, dy] = [index * outputSize, 0];
        ctx.drawImage(image, sx, sy, sw, sh, dx, dy, sw, sh);
    }
    for (let index = 0; index <= n; index++) {
        const [sx, sy, sw, sh] = [image.width / 2 + index * inputSize / 2, (n - index) * inputSize / 4, inputSize, h - index * inputSize / 4];
        const [dx, dy] = [w / 2 + index * outputSize, 0];
        ctx.drawImage(image, sx, sy, sw, sh, dx, dy, sw, sh);
    }
    return canvas;
}
exports.default = shiftImage;
