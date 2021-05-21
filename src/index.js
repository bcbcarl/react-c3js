import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
let c3;

class C3Chart extends React.Component {
  static get displayName() {
    return 'C3Chart';
  }

  static get propTypes() {
    return {
      data: PropTypes.object.isRequired,
      title: PropTypes.object,
      size: PropTypes.object,
      padding: PropTypes.object,
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
      className: PropTypes.string,
      style: PropTypes.object,
      unloadBeforeLoad: PropTypes.bool,
      onPropsChanged: PropTypes.func,
    };
  }

  componentDidMount() {
    c3 = require('c3');

    // function override
    c3.chart.internal.fn.tooltipPosition = function (dataToShow, tWidth, tHeight, element) {
      var $$ = this,
          config = $$.config,
          d3 = $$.d3;
      var svgLeft, tooltipLeft, tooltipRight, tooltipTop, chartRight;
      var forArc = $$.hasArcType(),
          mouse = d3.mouse(element);
      if (navigator.userAgent.indexOf("Firefox") != -1) {
        // this works in Firefox
        mouse = [d3.event.offsetX - 80, d3.event.offsetY - 80];
      }
      // Determin tooltip position
      if (forArc) {
        tooltipLeft = ($$.width - ($$.isLegendRight ? $$.getLegendWidth() : 0)) / 2 + mouse[0];
        tooltipTop = $$.height / 2 + mouse[1] + 20;
      } else {
        svgLeft = $$.getSvgLeft(true);
        if (config.axis_rotated) {
          tooltipLeft = svgLeft + mouse[0] + 100;
          tooltipRight = tooltipLeft + tWidth;
          chartRight = $$.currentWidth - $$.getCurrentPaddingRight();
          tooltipTop = $$.x(dataToShow[0].x) + 20;
        } else {
          tooltipLeft = svgLeft + $$.getCurrentPaddingLeft(true) + $$.x(dataToShow[0].x) + 20;
          tooltipRight = tooltipLeft + tWidth;
          chartRight = svgLeft + $$.currentWidth - $$.getCurrentPaddingRight();
          tooltipTop = mouse[1] + 15;
        }

        if (tooltipRight > chartRight) {
          // 20 is needed for Firefox to keep tooltip width
          tooltipLeft -= tooltipRight - chartRight + 20;
        }
        if (tooltipTop + tHeight > $$.currentHeight) {
          tooltipTop -= tHeight + 30;
        }
      }
      if (tooltipTop < 0) {
        tooltipTop = 0;
      }

      return { top: tooltipTop, left: tooltipLeft };
    };

    this.updateChart(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.updateChart(newProps);
    if (newProps.onPropsChanged) {
      newProps.onPropsChanged(this.props, newProps, this.chart);
    }
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
    if (data && data.type !== 'donut') {
      this.chart.load(data);
    }
  }

  unloadData() {
      this.chart.unload();
  }

  updateChart(config) {
    if (!this.chart) {
      this.chart = this.generateChart(findDOMNode(this), config);
    }

    if (config.unloadBeforeLoad) {
        this.unloadData();
    }

    this.loadNewData(config.data);
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
