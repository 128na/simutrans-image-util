import { Canvas } from "canvas";
/**
 * replace target color to (0,0,0,0)
 */
export declare function eraseColor(canvas: Canvas, targetColor?: string): void;
export declare function handleEraseColor(data: Uint8ClampedArray, i: number): void;
