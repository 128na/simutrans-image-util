import { Canvas } from "canvas";
import SPECIAL_COLORS from "./specialColors";

/**
 * replace special color to (r+1,g+1,b+1)
 */
export default function replaceSpecialColor(canvas: Canvas, specialColors = SPECIAL_COLORS): void {
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const color = [data[i], data[i + 1], data[i + 2]].join(',');

    if (specialColors.includes(color)) {
      [data[i], data[i + 1], data[i + 2]] = [
        Math.min(255, data[i] + 1),
        Math.min(255, data[i + 1] + 1),
        Math.min(255, data[i + 2] + 1),
      ];
    }
  }
  ctx.putImageData(imageData, 0, 0);
}
