'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var c3 = void 0;

var C3Chart = function (_React$Component) {
  _inherits(C3Chart, _React$Component);

  function C3Chart() {
    _classCallCheck(this, C3Chart);

    return _possibleConstructorReturn(this, (C3Chart.__proto__ || Object.getPrototypeOf(C3Chart)).apply(this, arguments));
  }

  _createClass(C3Chart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
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
          mouse = [d3.event.offsetX - tWidth / 2 + 20, d3.event.offsetY - tHeight - 20];
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
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.updateChart(newProps);
      if (newProps.onPropsChanged) {
        newProps.onPropsChanged(this.props, newProps, this.chart);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroyChart();
    }
  }, {
    key: 'destroyChart',
    value: function destroyChart() {
      try {
        this.chart = this.chart.destroy();
      } catch (err) {
        throw new Error('Internal C3 error', err);
      }
    }
  }, {
    key: 'generateChart',
    value: function generateChart(mountNode, config) {
      var newConfig = _extends({ bindto: mountNode }, config);
      return c3.generate(newConfig);
    }
  }, {
    key: 'loadNewData',
    value: function loadNewData(data) {
      if (data && data.type !== 'donut') {
        this.chart.load(data);
      }
    }
  }, {
    key: 'unloadData',
    value: function unloadData() {
      this.chart.unload();
    }
  }, {
    key: 'updateChart',
    value: function updateChart(config) {
      if (!this.chart) {
        this.chart = this.generateChart((0, _reactDom.findDOMNode)(this), config);
      }

      if (config.unloadBeforeLoad) {
        this.unloadData();
      }

      this.loadNewData(config.data);
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className ? ' ' + this.props.className : '';
      var style = this.props.style ? this.props.style : {};
      return _react2.default.createElement('div', { className: className, style: style });
    }
  }], [{
    key: 'displayName',
    get: function get() {
      return 'C3Chart';
    }
  }, {
    key: 'propTypes',
    get: function get() {
      return {
        data: _propTypes2.default.object.isRequired,
        title: _propTypes2.default.object,
        size: _propTypes2.default.object,
        padding: _propTypes2.default.object,
        color: _propTypes2.default.object,
        interaction: _propTypes2.default.object,
        transition: _propTypes2.default.object,
        oninit: _propTypes2.default.func,
        onrendered: _propTypes2.default.func,
        onmouseover: _propTypes2.default.func,
        onmouseout: _propTypes2.default.func,
        onresize: _propTypes2.default.func,
        onresized: _propTypes2.default.func,
        axis: _propTypes2.default.object,
        grid: _propTypes2.default.object,
        regions: _propTypes2.default.array,
        legend: _propTypes2.default.object,
        tooltip: _propTypes2.default.object,
        subchart: _propTypes2.default.object,
        zoom: _propTypes2.default.object,
        point: _propTypes2.default.object,
        line: _propTypes2.default.object,
        area: _propTypes2.default.object,
        bar: _propTypes2.default.object,
        pie: _propTypes2.default.object,
        donut: _propTypes2.default.object,
        gauge: _propTypes2.default.object,
        className: _propTypes2.default.string,
        style: _propTypes2.default.object,
        unloadBeforeLoad: _propTypes2.default.bool,
        onPropsChanged: _propTypes2.default.func
      };
    }
  }]);

  return C3Chart;
}(_react2.default.Component);

exports.default = C3Chart;
