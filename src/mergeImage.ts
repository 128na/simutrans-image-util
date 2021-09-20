import { Canvas, createCanvas, Image } from "canvas";
import { handleEraseColor } from "./eraseColor";
import { handleTransparent } from "./eraseTransparent";
import { handleSpecialColor } from "./replaceSpecialColor";
import SPECIAL_COLORS from "./specialColors";

/**
 * Merge images into canvas.
 */
export function mergeImage(images: Image[], options?: {
  canvas?: Canvas,
  eraseColor?: string,
  replaceSpecialColor?: boolean,
  specialColors?: string[],
  eraseTransparent?: boolean,
  eraseTransparentThreshold?: number,
}): Canvas {
  // 画像サイズはすべて同じ想定
  const canvas = options?.canvas || createCanvas(maxWidth(images), maxHeight(images));
  const ctx = canvas.getContext('2d');
  images.map(img => ctx.drawImage(img, 0, 0));

  if (options?.eraseColor || options?.replaceSpecialColor || options?.eraseTransparent) {
    handleImage(canvas, options);
  }

  return canvas;
}

function maxWidth(images: Image[]): number {
  return images.reduce((max, current) => Math.max(max, current.width), 0);
}

function maxHeight(images: Image[]): number {
  return images.reduce((max, current) => Math.max(max, current.height), 0);
}

function handleImage(canvas: Canvas, options?: {
  canvas?: Canvas,
  eraseColor?: string,
  replaceSpecialColor?: boolean,
  specialColors?: string[],
  eraseTransparent?: boolean,
  eraseTransparentThreshold?: number,
}): void {
  const eraseColor = options?.eraseColor || false;
  const replaceSpecialColor = options?.replaceSpecialColor || false;
  const specialColors = options?.specialColors || SPECIAL_COLORS;
  const eraseTransparent = options?.eraseTransparent || false;
  const eraseTransparentThreshold = 255 * (options?.eraseTransparentThreshold || 0.5);

  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const color = [data[i], data[i + 1], data[i + 2]].join(',');

    if (eraseColor && color === eraseColor) {
      handleEraseColor(data, i);
    }
    if (replaceSpecialColor && specialColors.includes(color)) {
      handleSpecialColor(data, i);
    }
    if (eraseTransparent) {
      handleTransparent(data, i, eraseTransparentThreshold);
    }
  }
  ctx.putImageData(imageData, 0, 0);
}
