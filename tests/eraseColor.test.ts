import { createCanvas, loadImage } from 'canvas';
import { eraseColor } from '../src/eraseColor';


test('eraseColor', async () => {
  const image = await loadImage('./tests/images/red.png');
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

  eraseColor(canvas);

  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([0, 0, 0, 0]);
});

