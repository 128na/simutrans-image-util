import { Canvas } from "canvas";
/**
 * replace special color to (r+1,g+1,b+1)
 */
export declare function replaceSpecialColor(canvas: Canvas, specialColors?: string[]): void;
export declare function handleSpecialColor(data: Uint8ClampedArray, i: number): void;
