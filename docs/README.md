# hello-c3js

This is an example which demonstrates both a line chart and a bar chart:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import C3Chart from 'react-c3js';

const LineChart = ({ data }) =>
  <C3Chart data={{ json: data }} />;

const BarChart = ({ data }) =>
  <C3Chart data={{ json: data, type: 'bar' }} />;

const chartData = {
  line: {
    data1: [30, 20, 50, 40, 60, 50],
    data2: [200, 130, 90, 240, 130, 220],
    data3: [300, 200, 160, 400, 250, 250]
  },
  bar: {
    data1: [30, 200, 100, 400, 150, 250],
    data2: [130, 100, 140, 200, 150, 50]
  }
};

ReactDOM.render(
  <div>
    <LineChart data={chartData.line} />
    <BarChart data={chartData.bar} />
  </div>, document.getElementById('react-c3js')
);
```

You can see the [online demo][demo].

[demo]: http://bcbcarl.github.io/react-c3js/
