import React from "react";
import PropTypes, { func } from "prop-types";
import { findDOMNode } from "react-dom";
import { useState } from "react";
import c3 from "c3";
import { useRef } from "react";
import { useEffect } from "react";

c3.chart.internal.fn.tooltipPosition = function (
  dataToShow,
  tWidth,
  tHeight,
  element
) {
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
    tooltipLeft =
      ($$.width - ($$.isLegendRight ? $$.getLegendWidth() : 0)) / 2 + mouse[0];
    tooltipTop = $$.height / 2 + mouse[1] + 20;
  } else {
    svgLeft = $$.getSvgLeft(true);
    if (config.axis_rotated) {
      tooltipLeft = svgLeft + mouse[0] + 100;
      tooltipRight = tooltipLeft + tWidth;
      chartRight = $$.currentWidth - $$.getCurrentPaddingRight();
      tooltipTop = $$.x(dataToShow[0].x) + 20;
    } else {
      tooltipLeft =
        svgLeft + $$.getCurrentPaddingLeft(true) + $$.x(dataToShow[0].x) + 20;
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

function C3Chart({
  data,
  title,
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
  gauge,
  className,
  style,
  unloadBeforeLoad,
}) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = c3.generate({
      bindto: chartRef.current,
      data,
      title,
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
      gauge,
    });

    return () => {
      if (unloadBeforeLoad) {
        chart.unload();
      }
    };
  }, [
    data,
    title,
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
    gauge,
    unloadBeforeLoad,
  ]);

  return <div className={className} ref={chartRef} style={style} />;
}

C3Chart.propTypes = {
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
};

export default C3Chart;
