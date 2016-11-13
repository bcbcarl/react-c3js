import React from 'react';
import ReactDOM from 'react-dom';

import { BarChart, DynamicChart } from './components';

const chartData = {
  line: {
    initData: {
      data1: [220, 240, 270, 250, 280],
      data2: [180, 150, 300, 70, 120],
      data3: [200, 310, 150, 100, 180]
    },
    newData: {
      data4: [30, 200, 100, 400, 150, 250],
      data5: [50, 20, 10, 40, 15, 25]
    }
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
    <DynamicChart
      initData={chartData.line.initData}
      newData={chartData.line.newData} />
    <h2>Bar Chart</h2>
    <BarChart data={chartData.bar} />
  </div>, mountNode
);
