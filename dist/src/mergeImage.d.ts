import { Canvas, Image } from "canvas";
/**
 * Merge images into canvas.
 */
export declare function mergeImage(images: Image[], options?: {
    canvas?: Canvas;
    eraseColor?: string;
    replaceSpecialColor?: boolean;
    specialColors?: string[];
    eraseTransparent?: boolean;
    eraseTransparentThreshold?: number;
}): Canvas;
