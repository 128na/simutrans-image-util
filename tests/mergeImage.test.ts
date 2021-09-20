import { createCanvas, loadImage } from 'canvas';
import { mergeImage } from '../src/mergeImage';

test('merge', async () => {
  const images = await Promise.all(['./tests/images/red.png', './tests/images/blue.png'].map(loadImage));
  const canvas = mergeImage(images);

  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([0, 0, 255, 255]);
});

test('merge with option canvas', async () => {
  const images = await Promise.all(['./tests/images/red.png', './tests/images/blue.png'].map(loadImage));
  const initialCanvas = createCanvas(1, 1);
  const canvas = mergeImage(images, { canvas: initialCanvas });

  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([0, 0, 255, 255]);
});

test('merge with option eraseColor', async () => {
  const images = await Promise.all(['./tests/images/red.png', './tests/images/blue.png'].map(loadImage));
  const canvas = mergeImage(images, { eraseColor: '0,0,255' });

  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([0, 0, 0, 0]);
});

test('merge with option replaceSpecialColor', async () => {
  const images = await Promise.all(['./tests/images/red.png', './tests/images/107,107,107.png'].map(loadImage));
  const canvas = mergeImage(images, { replaceSpecialColor: true });

  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([108, 108, 108, 255]);
});

test('merge with option specialColors', async () => {
  const images = await Promise.all(['./tests/images/red.png', './tests/images/blue.png'].map(loadImage));
  const initialCanvas = createCanvas(1, 1);
  const canvas = mergeImage(images, { replaceSpecialColor: true, specialColors: ['0,0,255'] });

  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([1, 1, 255, 255]);
});

test('merge with option eraseTransparent (alpha 127)', async () => {
  const images = await Promise.all(['./tests/images/alpha_127.png'].map(loadImage));
  const canvas = mergeImage(images, { eraseTransparent: true });

  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([231, 255, 255, 255]);
});

test('merge with option eraseTransparent (alpha > 127)', async () => {
  const images = await Promise.all(['./tests/images/alpha_128.png'].map(loadImage));
  const canvas = mergeImage(images, { eraseTransparent: true });

  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([0, 255, 0, 255]);
});

test('merge with option eraseTransparentThreshold (alpha > 127)', async () => {
  const images = await Promise.all(['./tests/images/alpha_128.png'].map(loadImage));
  const canvas = mergeImage(images, { eraseTransparent: true, eraseTransparentThreshold: 1 });

  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([231, 255, 255, 255]);
});
