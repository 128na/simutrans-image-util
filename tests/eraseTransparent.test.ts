import { createCanvas, loadImage } from 'canvas';
import { eraseTransparent } from '../src/eraseTransparent';

test('alpha 127 should be replace to special color', async () => {
  const image = await loadImage('./tests/images/alpha_127.png');
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

  eraseTransparent(canvas, 0.5);

  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([231, 255, 255, 255]);
});

test('alpha > 127 should be remove alpha', async () => {
  const image = await loadImage('./tests/images/alpha_128.png');
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

  eraseTransparent(canvas, 0.5);

  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([0, 255, 0, 255]);
});

test('edge only', async () => {
  const image = await loadImage('./tests/images/edge.png');
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

  eraseTransparent(canvas, 0.1, true);

  const imageData = ctx.getImageData(0, 0, 7, 1);
  const data = imageData.data;

  expect([...data]).toEqual([
    0, 0, 0, 0,
    0, 0, 255, 255,
    0, 0, 255, 255,
    0, 0, 255, 96,
    0, 0, 255, 255,
    0, 0, 255, 255,
    0, 0, 0, 0,
  ]);
});

