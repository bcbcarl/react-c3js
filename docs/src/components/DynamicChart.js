import React from 'react';
import PropTypes from 'prop-types';

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
    setInterval(() => this.setState({
      data: [this.props.newData, this.props.initData][Math.round(Math.random()*1)]
    }), 2000);
  }

  render() {
    return <LineChart data={this.state.data} />;
  }
}

export { DynamicChart };
export default DynamicChart;
