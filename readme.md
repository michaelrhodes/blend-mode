# blend-mode

a collection of channel-level blend modes, à la photoshop (shamelessly lifted from [here](http://media.chikuyonok.ru/canvas-blending/blending-modes.js), via [here](http://stackoverflow.com/questions/5919663/how-does-photoshop-blend-two-images-together))

## install

```sh
$ npm i blend-mode
```

## usage

```js
var blend = require('blend-mode/soft-light')

// Blends two values, each between 0 and 255
// eg. pixel channel values
blend(0, 255)
```

### example

```js
var multiply = require('blend-mode/multiply')

var layer1 = [255, 128, 250, 255, 60, ...] 
var layer2 = [156, 24, 18, 223, 119, ...]
// Where both layers are Uint8ClampedArrays acquired with
// canvas.getContext('2d').getImageData(0, 0, w, h).data

var blended = []
// Where blended is likely a Uint8ClampedArray acquired with
// canvas.getContext('2d').createImageData(0, 0, w, h).data

var total = Math.min(layer1.length, layer2.length)
for (var i = 0; i < total; i += 4) {
  blended[i] = multiply(layer1[i], layer2[i])
  blended[i + 1] = multiply(layer1[i + 1], layer2[i + 1])
  blended[i + 2] = multiply(layer1[i + 2], layer2[i + 2])

  // don’t blend alpha channels
  blended[i + 3] = layer1[i + 3]
}
```

## page weight (browserified)

you should really only require the blend-mode/s you actually need, but if you must have the kitchen sink, it will cost you:

| compression          |    size |
| :------------------- | ------: |
| blend-mode.js        | 3.89 kB |
| blend-mode.min.js    | 2.76 kB |
| blend-mode.min.js.gz |   832 B |


## license

let’s just say [MIT](http://opensource.org/licenses/MIT) and hope for the best?
