var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./src/eraseColor", "./src/mergeImage", "./src/replaceSpecialColor", "./src/shiftImage", "./src/splitImage", "./src/specialColors"], function (require, exports, eraseColor_1, mergeImage_1, replaceSpecialColor_1, shiftImage_1, splitImage_1, specialColors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    eraseColor_1 = __importDefault(eraseColor_1);
    mergeImage_1 = __importDefault(mergeImage_1);
    replaceSpecialColor_1 = __importDefault(replaceSpecialColor_1);
    shiftImage_1 = __importDefault(shiftImage_1);
    splitImage_1 = __importDefault(splitImage_1);
    specialColors_1 = __importDefault(specialColors_1);
    exports.default = {
        eraseColor: eraseColor_1.default,
        mergeImage: mergeImage_1.default,
        replaceSpecialColor: replaceSpecialColor_1.default,
        shiftImage: shiftImage_1.default,
        splitImage: splitImage_1.default,
        specialColors: specialColors_1.default,
    };
});