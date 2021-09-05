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
define(["require", "exports", "node_modules/canvas/types/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Split an image into tiles of specified size.
     */
    function splitImage(image, size, callback) {
        if (size === void 0) { size = 128; }
        var _a = __read([image.width, image.height], 2), width = _a[0], height = _a[1];
        if (width % size !== 0 || height % size !== 0) {
            throw new Error("invalid image size: " + width + "x" + height);
        }
        for (var x = 0; x < width; x += size) {
            for (var y = 0; y < height; y += size) {
                var canvas = (0, index_1.createCanvas)(size, size);
                var ctx = canvas.getContext('2d');
                ctx.drawImage(image, -x, -y);
                callback(canvas, x, y);
            }
        }
    }
    exports.default = splitImage;
});
