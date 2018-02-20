import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import ReactDOMServer from 'react-dom/server';
let c3;

class C3Chart extends React.Component {
  static displayName = 'C3Chart'

  static propTypes = {
    data: PropTypes.object.isRequired,
    size: PropTypes.object,
    padding: PropTypes.object,
    resize: PropTypes.object,
    color: PropTypes.object,
    interaction: PropTypes.object,
    transition: PropTypes.object,
    oninit: PropTypes.func,
    onrendered: PropTypes.func,
    onmouseover: PropTypes.func,
    onmouseout: PropTypes.func,
    onresize: PropTypes.func,
    onresized: PropTypes.func,
    axis: PropTypes.object,
    grid: PropTypes.object,
    regions: PropTypes.array,
    legend: PropTypes.object,
    tooltip: PropTypes.object,
    subchart: PropTypes.object,
    zoom: PropTypes.object,
    point: PropTypes.object,
    line: PropTypes.object,
    area: PropTypes.object,
    bar: PropTypes.object,
    pie: PropTypes.object,
    donut: PropTypes.object,
    gauge: PropTypes.object,
    spline: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
    unloadBeforeLoad: PropTypes.bool,
    tooltipComponent: PropTypes.element
  }

  componentDidMount() {
    c3 = require('c3');
    this.updateChart(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.updateChart(newProps);
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  destroyChart() {
    try {
      this.chart = this.chart.destroy();
    } catch (err) {
      throw new Error('Internal C3 error', err);
    }
  }

  generateChart(mountNode, config) {
    const newConfig = Object.assign({ bindto: mountNode }, config);
    return c3.generate(newConfig);
  }

  loadNewData(data) {
    this.chart.load(data);
  }

  unloadData() {
      this.chart.unload();
  }

  updateChart(config) {
    let localConfig = config;
    let lastUsedIndex;
    let lastUsedMarkup;
    if (localConfig.tooltipComponent) {
      localConfig = Object.assign(
        {
          tooltip: {
            contents: function(data, defaultTitleFormat, defaultValueFormat, color) {
              if (lastUsedIndex && lastUsedMarkup && data[0].index == lastUsedIndex)
                return lastUsedMarkup;
                
              const additionalProps = { data, defaultTitleFormat, defaultValueFormat, color };
              const compontntWithInjectedProps = React.cloneElement(localConfig.tooltipComponent, additionalProps);
              lastUsedMarkup = ReactDOMServer.renderToStaticMarkup(compontntWithInjectedProps);
              lastUsedIndex = data[0].index;
              return lastUsedMarkup;
            }
          }
        }, config);
    }

    if (!this.chart) {
      this.chart = this.generateChart(findDOMNode(this), localConfig);
    }

    if (localConfig.unloadBeforeLoad) {
        this.unloadData();
    }

    this.loadNewData(localConfig.data);
  }

  render() {
    const className = this.props.className
      ? ` ${this.props.className}`
      : '';
    const style = this.props.style
      ? this.props.style
      : {};
    return <div className={className} style={style} />;
  }
}

export default C3Chart;
