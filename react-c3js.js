"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _reactDom = require("react-dom");
var _c = _interopRequireDefault(require("c3"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
_c["default"].chart.internal.fn.tooltipPosition = function (dataToShow, tWidth, tHeight, element) {
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
  return {
    top: tooltipTop,
    left: tooltipLeft
  };
};
function C3Chart(_ref) {
  var data = _ref.data,
    title = _ref.title,
    size = _ref.size,
    padding = _ref.padding,
    color = _ref.color,
    interaction = _ref.interaction,
    transition = _ref.transition,
    oninit = _ref.oninit,
    onrendered = _ref.onrendered,
    onmouseover = _ref.onmouseover,
    onmouseout = _ref.onmouseout,
    onresize = _ref.onresize,
    onresized = _ref.onresized,
    axis = _ref.axis,
    grid = _ref.grid,
    regions = _ref.regions,
    legend = _ref.legend,
    tooltip = _ref.tooltip,
    subchart = _ref.subchart,
    zoom = _ref.zoom,
    point = _ref.point,
    line = _ref.line,
    area = _ref.area,
    bar = _ref.bar,
    pie = _ref.pie,
    donut = _ref.donut,
    gauge = _ref.gauge,
    className = _ref.className,
    style = _ref.style,
    unloadBeforeLoad = _ref.unloadBeforeLoad;
  var chartRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var chart = _c["default"].generate({
      bindto: chartRef.current,
      data: data,
      title: title,
      size: size,
      padding: padding,
      color: color,
      interaction: interaction,
      transition: transition,
      oninit: oninit,
      onrendered: onrendered,
      onmouseover: onmouseover,
      onmouseout: onmouseout,
      onresize: onresize,
      onresized: onresized,
      axis: axis,
      grid: grid,
      regions: regions,
      legend: legend,
      tooltip: tooltip,
      subchart: subchart,
      zoom: zoom,
      point: point,
      line: line,
      area: area,
      bar: bar,
      pie: pie,
      donut: donut,
      gauge: gauge
    });
    return function () {
      if (unloadBeforeLoad) {
        chart.unload();
      }
    };
  }, [data, title, size, padding, color, interaction, transition, oninit, onrendered, onmouseover, onmouseout, onresize, onresized, axis, grid, regions, legend, tooltip, subchart, zoom, point, line, area, bar, pie, donut, gauge, unloadBeforeLoad]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    ref: chartRef,
    style: style
  });
}
C3Chart.propTypes = {
  data: _propTypes["default"].object.isRequired,
  title: _propTypes["default"].object,
  size: _propTypes["default"].object,
  padding: _propTypes["default"].object,
  color: _propTypes["default"].object,
  interaction: _propTypes["default"].object,
  transition: _propTypes["default"].object,
  oninit: _propTypes["default"].func,
  onrendered: _propTypes["default"].func,
  onmouseover: _propTypes["default"].func,
  onmouseout: _propTypes["default"].func,
  onresize: _propTypes["default"].func,
  onresized: _propTypes["default"].func,
  axis: _propTypes["default"].object,
  grid: _propTypes["default"].object,
  regions: _propTypes["default"].array,
  legend: _propTypes["default"].object,
  tooltip: _propTypes["default"].object,
  subchart: _propTypes["default"].object,
  zoom: _propTypes["default"].object,
  point: _propTypes["default"].object,
  line: _propTypes["default"].object,
  area: _propTypes["default"].object,
  bar: _propTypes["default"].object,
  pie: _propTypes["default"].object,
  donut: _propTypes["default"].object,
  gauge: _propTypes["default"].object,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  unloadBeforeLoad: _propTypes["default"].bool
};
var _default = C3Chart;
exports["default"] = _default;
