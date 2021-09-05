import { Canvas, createCanvas, Image } from "../node_modules/canvas/types/index";

/**
 * Split an image into tiles of specified size.
 */
export default function splitImage(image: Image, size: number = 128, callback: (canvas: Canvas, x: number, y: number) => void): void {
  const [width, height] = [image.width, image.height];

  if (width % size !== 0 || height % size !== 0) {
    throw new Error(`invalid image size: ${width}x${height}`);
  }

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, -x, -y);
      callback(canvas, x, y);
    }
  }
}

