import { Canvas, createCanvas, Image } from "canvas";

/**
 * Merge images into canvas.
 */
export default function mergeImage(images: Image[]): Canvas {
  // 画像サイズはすべて同じ想定
  const canvas = createCanvas(maxWidth(images), maxHeight(images));
  const ctx = canvas.getContext('2d');
  images.map(img => ctx.drawImage(img, 0, 0));

  return canvas;
}

function maxWidth(images: Image[]): number {
  return images.reduce((max, current) => Math.max(max, current.width), 0);
}

function maxHeight(images: Image[]): number {
  return images.reduce((max, current) => Math.max(max, current.height), 0);
}
