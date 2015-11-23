import React from 'react';
import ReactDOM from 'react-dom';
import C3Chart from 'react-c3js';

class DataLineChart extends React.Component {
  render() {

    const data = {
      url: this.props.src,
      names: this.props.names,
      mimeType: 'json'
    };

    return (
      <C3Chart data={data} />
    );
  }
}

const src = 'c3_test.json';

const names = {
  data1: 'Name 1',
  data2: 'Name 2',
  data3: 'Name 3'
};

const mountNode = document.getElementById('react-c3js');

ReactDOM.render((
  <DataLineChart
    src={src}
    names={names}
  />
), mountNode);
