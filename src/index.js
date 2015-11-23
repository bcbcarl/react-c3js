'use strict';

import React from 'react';
import { findDOMNode } from 'react-dom';

export default class C3Chart extends React.Component {

  displayName: 'C3Chart'

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
  }

  componentDidMount() {
    this.renderChart();
  }

  componentWillUmount() {
    if (this.chart) {
      try {
        this.chart = this.chart.destroy();
      } catch (err) {
        throw new Error('Internal C3 error', err);
      }
    }
  }

  renderChart() {
    const data = this.props.data;
    const size = this.props.size || {};
    const padding = this.props.padding || {};
    const color = this.props.color || {};
    const interaction = this.props.interaction || {};
    const transition = this.props.transition || {};
    const oninit = this.props.oninit || function () {};
    const onrendered = this.props.onrendered || function () {};
    const onmouseover = this.props.onmouseover || function () {};
    const onmouseout = this.props.onmouseout || function () {};
    const onresize = this.props.onresize || function () {};
    const onresized = this.props.onresized || function () {};
    const axis = this.props.axis || {};
    const grid = this.props.grid || {};
    const regions = this.props.regions || [];
    const legend = this.props.legend || {};
    const tooltip = this.props.tooltip || {};
    const subchart = this.props.subchart || {};
    const zoom = this.props.zoom || {};
    const point = this.props.point || {};
    const line = this.props.line || {};
    const area = this.props.area || {};
    const bar = this.props.bar || {};
    const pie = this.props.pie || {};
    const donut = this.props.donut || {};
    const gauge = this.props.gauge || {};

    this.chart = require('c3').generate({
      bindto: findDOMNode(this),
      data,
      size,
      padding,
      color,
      interaction,
      transition,
      oninit,
      onrendered,
      onmouseover,
      onmouseout,
      onresize,
      onresized,
      axis,
      grid,
      regions,
      legend,
      tooltip,
      subchart,
      zoom,
      point,
      line,
      area,
      bar,
      pie,
      donut,
      gauge
    });

    return this.chart;
  }

  render() {
    const className = this.props.className ? ' ' + this.props.className : '';
    const style = this.props.style ? this.props.style : {};
    return (<div className={className} style={style} />);
  }
};
