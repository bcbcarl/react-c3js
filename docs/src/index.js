import React from 'react';
import ReactDOM from 'react-dom';

import { BarChart, LineChart } from './components';

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

const mountNode = document.getElementById('react-c3js');

ReactDOM.render(
  <div>
    <h1>react-c3js</h1>
    <h2>Line Chart</h2>
    <LineChart data={chartData.line} />
    <h2>Bar Chart</h2>
    <BarChart data={chartData.bar} />
  </div>, mountNode
);
