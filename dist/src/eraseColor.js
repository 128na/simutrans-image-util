"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * replace target color to (0,0,0,0)
 */
function eraseColor(canvas, targetColor = '255,0,0') {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const color = [data[i], data[i + 1], data[i + 2]].join(',');
        if (color === targetColor) {
            // r,g,b,0 will replace 0,0,0,0
            data[i + 3] = 0;
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
exports.default = eraseColor;
