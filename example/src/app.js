'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import C3Chart from '../../lib/index';

class ExampleChart extends React.Component {

  constructor() {

    super();

    this.state = {
      data: {
        columns: []
      }
    };
  }

  componentDidMount() {

    const url = 'c3_test.json';

    const names = {
      data1: 'Name 1',
      data2: 'Name 2',
      data3: 'Name 3'
    };

    const mimeType = 'json';

    this.setState({
      data: {
        url,
        names,
        mimeType
      }
    });

    setTimeout(() => this.setState({
      data: {
        columns: [
          ['data4', 30, 200, 100, 400, 150, 250],
          ['data5', 50, 20, 10, 40, 15, 25]
        ],
        names: {
          data4: 'Name 4',
          data5: 'Name 5'
        }
      }
    }), 1200);
  }

  render() {

    return (
      <C3Chart data={this.state.data} />
    );
  }
}

const mountNode = document.getElementById('react-c3js');

ReactDOM.render(<ExampleChart />, mountNode);
