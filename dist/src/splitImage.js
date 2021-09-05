"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
/**
 * Split an image into tiles of specified size.
 */
function splitImage(image, size = 128, callback) {
    const [width, height] = [image.width, image.height];
    if (width % size !== 0 || height % size !== 0) {
        throw new Error(`invalid image size: ${width}x${height}`);
    }
    for (let x = 0; x < width; x += size) {
        for (let y = 0; y < height; y += size) {
            const canvas = (0, canvas_1.createCanvas)(size, size);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, -x, -y);
            callback(canvas, x, y);
        }
    }
}
exports.default = splitImage;
