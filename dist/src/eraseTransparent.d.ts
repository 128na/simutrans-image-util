import { Canvas } from "canvas";
/**
 * replace transparent color to (231,255,255,255)
 */
export declare function eraseTransparent(canvas: Canvas, threshold?: number, edgeOnly?: boolean): void;
export declare function handleTransparent(data: Uint8ClampedArray, i: number, threshold: number, edgeOnly?: boolean): void;
