define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * replace target color to (r,g,b,0)
     */
    function eraseColor(canvas, targetColor) {
        if (targetColor === void 0) { targetColor = '255,0,0'; }
        var ctx = canvas.getContext('2d');
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;
        for (var i = 0; i < data.length; i += 4) {
            var color = [data[i], data[i + 1], data[i + 2]].join(',');
            if (color === targetColor) {
                data[i + 3] = 0;
            }
        }
        ctx.putImageData(imageData, 0, 0);
    }
    exports.default = eraseColor;
});
