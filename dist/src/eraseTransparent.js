"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleTransparent = exports.eraseTransparent = void 0;
/**
 * replace transparent color to (231,255,255,255)
 */
function eraseTransparent(canvas, threshold = 0.5, edgeOnly = false) {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const t = 255 * threshold;
    for (let i = 0; i < data.length; i += 4) {
        handleTransparent(data, i, t, edgeOnly);
    }
    ctx.putImageData(imageData, 0, 0);
}
exports.eraseTransparent = eraseTransparent;
function handleTransparent(data, i, threshold, edgeOnly = false) {
    if (edgeOnly) {
        const isEdge = data[i - 1] === 0 || data[i + 7] === 0;
        if (isEdge) {
            if (data[i + 3] < threshold) {
                data[i + 3] = 0;
            }
            else {
                data[i + 3] = 255;
            }
        }
        return;
    }
    if (data[i + 3] < threshold) {
        data[i + 0] = 231;
        data[i + 1] = 255;
        data[i + 2] = 255;
    }
    data[i + 3] = 255;
}
exports.handleTransparent = handleTransparent;
