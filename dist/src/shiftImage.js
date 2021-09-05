var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
define(["require", "exports", "../node_modules/canvas/types/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Shifts the image across multiple tiles for dat specification.
     */
    function shiftImage(image, inputSize, outputSize) {
        if (inputSize === void 0) { inputSize = 128; }
        if (outputSize === void 0) { outputSize = 256; }
        var n = (image.width - inputSize * 2) / inputSize;
        if (!Number.isInteger(n)) {
            throw new Error("invalid size:" + n);
        }
        var w = outputSize * (n + 1) * 2;
        var h = image.height;
        var canvas = (0, index_1.createCanvas)(w, h);
        var ctx = canvas.getContext('2d');
        for (var index = 0; index <= n; index++) {
            var _a = __read([index * inputSize / 2, index * inputSize / 4, inputSize, h - index * inputSize / 4], 4), sx = _a[0], sy = _a[1], sw = _a[2], sh = _a[3];
            var _b = __read([index * outputSize, 0], 2), dx = _b[0], dy = _b[1];
            ctx.drawImage(image, sx, sy, sw, sh, dx, dy, sw, sh);
        }
        for (var index = 0; index <= n; index++) {
            var _c = __read([image.width / 2 + index * inputSize / 2, (n - index) * inputSize / 4, inputSize, h - index * inputSize / 4], 4), sx = _c[0], sy = _c[1], sw = _c[2], sh = _c[3];
            var _d = __read([w / 2 + index * outputSize, 0], 2), dx = _d[0], dy = _d[1];
            ctx.drawImage(image, sx, sy, sw, sh, dx, dy, sw, sh);
        }
        return canvas;
    }
    exports.default = shiftImage;
});
