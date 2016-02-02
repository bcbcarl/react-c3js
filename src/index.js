'use strict';

import React from 'react';
import { findDOMNode } from 'react-dom';

export default class C3Chart extends React.Component {

  displayName: 'C3Chart';

  propTypes: {
    data: React.PropTypes.object.isRequired,
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

  componentWillReceiveProps(newProps) {
    this.updateChart(newProps);
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  componentDidMount() {
    this.updateChart(this.props);
  }

  generateChart(mountNode, config) {
    const c3 = require('c3');
    this.chart = c3.generate({
      bindto: mountNode,
      ...config
    });
  }

  destroyChart() {
    try {
      this.chart = this.chart.destroy();
    } catch (err) {
      throw new Error('Internal C3 error', err);
    }
  }

  updateChart(config) {

    const newConfig = {
      data: config.data,
      size: config.size || {},
      padding: config.padding || {},
      color: config.color || {},
      interaction: config.interaction || {},
      transition: config.transition || {},
      oninit: config.oninit || function () {},
      onrendered: config.onrendered || function () {},
      onmouseover: config.onmouseover || function () {},
      onmouseout: config.onmouseout || function () {},
      onresize: config.onresize || function () {},
      onresized: config.onresized || function () {},
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
      this.chart.unload();
      this.chart.load(newConfig);
    }
    else {
      this.chart = this.generateChart(findDOMNode(this), newConfig);
    }
  }

  render() {
    const className = this.props.className ? ' ' + this.props.className : '';
    const style = this.props.style ? this.props.style : {};
    return <div className={className} style={style} />;
  }
}
