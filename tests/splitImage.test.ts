import { loadImage } from 'canvas';
import splitImage from '../src/splitImage';


test('splitImage', async () => {
  const image = await loadImage('./tests/images/rgba.png');

  const expectedValues = [
    [[255, 0, 0, 255], [0, 255, 0, 255]],
    [[0, 0, 255, 255], [0, 0, 0, 0]],
  ];

  splitImage(image, 1, (canvas, x, y) => {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, 1, 1);
    const data = imageData.data;

    expect([...data]).toEqual(expectedValues[y][x]);
  });
});

