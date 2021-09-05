define(["require", "exports", "node_modules/canvas/types/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Merge images into canvas.
     */
    function mergeImage(images) {
        // 画像サイズはすべて同じ想定
        const canvas = (0, index_1.createCanvas)(maxWidth(images), maxHeight(images));
        const ctx = canvas.getContext('2d');
        images.map(img => ctx.drawImage(img, 0, 0));
        return canvas;
    }
    exports.default = mergeImage;
    function maxWidth(images) {
        return images.reduce((max, current) => Math.max(max, current.width), 0);
    }
    function maxHeight(images) {
        return images.reduce((max, current) => Math.max(max, current.height), 0);
    }
});
