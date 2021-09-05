import { Canvas, Image } from "canvas";
/**
 * Split an image into tiles of specified size.
 */
export default function splitImage(image: Image, size: number | undefined, callback: (canvas: Canvas, x: number, y: number) => void): void;
