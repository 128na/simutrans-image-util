import { Canvas } from "canvas";

/**
 * replace transparent color to (231,255,255,255)
 */
export function eraseTransparent(canvas: Canvas, threshold = 0.5): void {
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const t = 255 * threshold;
  for (let i = 0; i < data.length; i += 4) {
    handleTransparent(data, i, t);
  }
  ctx.putImageData(imageData, 0, 0);
}

export function handleTransparent(data: Uint8ClampedArray, i: number, threshold: number) {
  if (data[i + 3] < threshold) {
    data[i + 0] = 231;
    data[i + 1] = 255;
    data[i + 2] = 255;
  }
  data[i + 3] = 255;
}
