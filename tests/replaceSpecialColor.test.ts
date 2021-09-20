import { createCanvas, loadImage } from 'canvas';
import { replaceSpecialColor } from '../src/replaceSpecialColor';


test('replaceSpecialColor', async () => {
  const image = await loadImage('./tests/images/107,107,107.png');
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

  replaceSpecialColor(canvas);

  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([108, 108, 108, 255]);
});

