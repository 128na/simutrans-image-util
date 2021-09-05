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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./specialColors"], function (require, exports, specialColors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    specialColors_1 = __importDefault(specialColors_1);
    /**
     * replace special color to (r+1,g+1,b+1)
     */
    function replaceSpecialColor(canvas, specialColors) {
        var _a;
        if (specialColors === void 0) { specialColors = specialColors_1.default; }
        var ctx = canvas.getContext('2d');
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;
        for (var i = 0; i < data.length; i += 4) {
            var color = [data[i], data[i + 1], data[i + 2]].join(',');
            if (specialColors.includes(color)) {
                _a = __read([
                    Math.min(255, data[i] + 1),
                    Math.min(255, data[i + 1] + 1),
                    Math.min(255, data[i + 2] + 1),
                ], 3), data[i] = _a[0], data[i + 1] = _a[1], data[i + 2] = _a[2];
            }
        }
        ctx.putImageData(imageData, 0, 0);
    }
    exports.default = replaceSpecialColor;
});
