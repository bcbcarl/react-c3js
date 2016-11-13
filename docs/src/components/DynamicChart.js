import React, { PropTypes } from 'react';

import LineChart from './LineChart';

class DynamicChart extends React.Component {
  static get displayName() {
    return 'DynamicChart';
  }

  static get propTypes() {
    return {
      initData: PropTypes.object.isRequired,
      newData: PropTypes.object.isRequired
    };
  }

  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.setState({ data: this.props.initData });
    setTimeout(() => this.setState({
      data: this.props.newData
    }), 1200);
  }

  render() {
    return <LineChart data={this.state.data} />;
  }
}

export { DynamicChart };
export default DynamicChart;
