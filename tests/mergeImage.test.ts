import { loadImage } from 'canvas';
import mergeImage from '../src/mergeImage';


test('merge', async () => {
  const images = await Promise.all(['./tests/images/red.png', './tests/images/blue.png'].map(loadImage));
  const canvas = mergeImage(images);

  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, 1, 1);
  const data = imageData.data;

  expect([...data]).toEqual([0, 0, 255, 255]);
});
