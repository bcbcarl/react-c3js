import React from 'react';
import { findDOMNode } from 'react-dom';
import c3 from 'c3';

class C3Chart extends React.Component {
  static get displayName() {
    return 'C3Chart';
  }

  static get propTypes() {
    return {
      data: React.PropTypes.object.isRequired,
      title: React.PropTypes.object,
      size: React.PropTypes.object,
      padding: React.PropTypes.object,
      color: React.PropTypes.object,
      interaction: React.PropTypes.object,
      transition: React.PropTypes.object,
      oninit: React.PropTypes.func,
      onrendered: React.PropTypes.func,
      onmouseover: React.PropTypes.func,
      onmouseout: React.PropTypes.func,
      onresize: React.PropTypes.func,
      onresized: React.PropTypes.func,
      axis: React.PropTypes.object,
      grid: React.PropTypes.object,
      regions: React.PropTypes.array,
      legend: React.PropTypes.object,
      tooltip: React.PropTypes.object,
      subchart: React.PropTypes.object,
      zoom: React.PropTypes.object,
      point: React.PropTypes.object,
      line: React.PropTypes.object,
      area: React.PropTypes.object,
      bar: React.PropTypes.object,
      pie: React.PropTypes.object,
      donut: React.PropTypes.object,
      gauge: React.PropTypes.object,
      className: React.PropTypes.string,
      style: React.PropTypes.object
    };
  }

  componentDidMount() {
    this.updateChart(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.updateChart(newProps);
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  generateChart(mountNode, config) {
    const newConfig = Object.assign({ bindto: mountNode }, config);
    return c3.generate(newConfig);
  }

  loadNewData(data) {
    /* Load new data to the chart */
    this.chart.load(data);
  }

  updateChart(config) {
    const emptyFunc = () => {};

    const newConfig = {
      data: config.data,
      title: config.title || {},
      size: config.size || {},
      padding: config.padding || {},
      color: config.color || {},
      interaction: config.interaction || {},
      transition: config.transition || {},
      oninit: config.oninit || emptyFunc,
      onrendered: config.onrendered || emptyFunc,
      onmouseover: config.onmouseover || emptyFunc,
      onmouseout: config.onmouseout || emptyFunc,
      onresize: config.onresize || emptyFunc,
      onresized: config.onresized || emptyFunc,
      axis: config.axis || {},
      grid: config.grid || {},
      regions: config.regions || [],
      legend: config.legend || {},
      tooltip: config.tooltip || {},
      subchart: config.subchart || {},
      zoom: config.zoom || {},
      point: config.point || {},
      line: config.line || {},
      area: config.area || {},
      bar: config.bar || {},
      pie: config.pie || {},
      donut: config.donut || {},
      gauge: config.gauge || {}
    };

    if (this.chart) {
      this.destroyChart();
    }

    this.chart = this.generateChart(findDOMNode(this), newConfig);
  }

  destroyChart() {
    try {
      this.chart = this.chart.destroy();
    } catch (err) {
      throw new Error('Internal C3 error', err);
    }
  }

  render() {
    const className = this.props.className ? ` ${this.props.className}` : '';
    const style = this.props.style ? this.props.style : {};
    return <div className={className} style={style} />;
  }
}

export default C3Chart;
