import { test, expect } from '@jest/globals';
import { loadImage } from 'canvas';
import shiftImage from '../src/shiftImage';


test('shiftImage', async () => {
  const image = await loadImage('./tests/images/shift.png');
  const canvas = shiftImage(image, 1, 2);

  expect(canvas.width).toEqual(12);
});
