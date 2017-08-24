# react-billboard.js

## This is a fork of [react-c3js](https://github.com/bcbcarl/react-c3js) adopted for [billboard.js](https://naver.github.io/billboard.js/)

React component for [billboard.js](https://naver.github.io/billboard.js/)

```javascript
import BillboardChart from 'react-billboard.js';
import 'billboard/billboard.css';

const data = {
  columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 50, 20, 10, 40, 15, 25]
  ]
};

const mountNode = document.getElementById('react-billboardjs');

ReactDOM.render(<BillboardChart data={data} />, mountNode);
```

You can see the `docs` for more details.

[Demo]: http://my8bit.github.io/react-billboardjs/

## Installation

```
$ npm install --save react-billboard.js
```

## Contributing

### NPM

1. Modify `src/index.js`.
2. Build the lib by using `npm run build`
3. Import BillboardChart from react-billboard.js.
4. Enjoy the result.

## Properties

Check out [billboard.js Reference](https://naver.github.io/billboard.js/release/latest/doc/) for more details.

* data
* title
* size
* padding
* color
* interaction
* transition
* oninit
* onrendered
* onmouseover
* onmouseout
* onresize
* onresized
* axis
* grid
* regions
* legend
* tooltip
* subchart
* zoom
* point
* line
* area
* bar
* pie
* donut
* gauge
* className
* style
* unloadBeforeLoad

## License

MIT
