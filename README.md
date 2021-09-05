# Simutrans image utilities

A dat file parser for Simutrans.

## Install

```
npm i simutrans-image-util
```

## Methods
### mergeImage 

Merge images as layers.
```
import fs from 'fs';
import { loadImage } from 'canvas';
import { mergeImage } from 'simutrans-image-util';

Promise.all(['example1.png', 'example2.png'].map(loadImage))
  .then(images=> {
    const canvas = mergeImage(images);
    fs.writeFileSync('merged.png', canvas.toDataURL().replace(/^data:image\/png;base64,/, ''), 'base64');
  });
```

### eraseColor

Replace the specified color with transparent.
```
import fs from 'fs';
import { loadImage } from 'canvas';
import { eraseColor } from 'simutrans-image-util';

loadImage('example1.png')
  .then(image=> {
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);

    // red will replace to transparent
    eraseColor(image, '255,0,0');

    fs.writeFileSync('replaced.png', canvas.toDataURL().replace(/^data:image\/png;base64,/, ''), 'base64');
  });
```

### replaceSpecialColor

Replace the special colors.
```
import fs from 'fs';
import { loadImage } from 'canvas';
import { replaceSpecialColor } from 'simutrans-image-util';

loadImage('example1.png')
  .then(image=> {
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);

    replaceSpecialColor(image);

    fs.writeFileSync('replaced.png', canvas.toDataURL().replace(/^data:image\/png;base64,/, ''), 'base64');
  });
```

### shiftImage

Shifts the image across multiple tiles for dat specification.
```
import fs from 'fs';
import { loadImage } from 'canvas';
import { shiftImage } from 'simutrans-image-util';

loadImage('example1.png')
  .then(image=> {
    const canvas = shiftImage(image, 64, 128);

    fs.writeFileSync('shifted.png', canvas.toDataURL().replace(/^data:image\/png;base64,/, ''), 'base64');
  });
```

### splitImage

Split an image into tiles of specified size.
```
import fs from 'fs';
import { loadImage } from 'canvas';
import { splitImage } from 'simutrans-image-util';

loadImage('example1.png')
  .then(image=> {
    splitImage(image, 128, (canvas, x, y) => {
      fs.writeFileSync(`split_${x}_${y}.png`, canvas.toDataURL().replace(/^data:image\/png;base64,/, ''), 'base64');
    });
  });
```
