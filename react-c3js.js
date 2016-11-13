'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _c = require('c3');

var _c2 = _interopRequireDefault(_c);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var C3Chart = function (_React$Component) {
  _inherits(C3Chart, _React$Component);

  function C3Chart() {
    _classCallCheck(this, C3Chart);

    return _possibleConstructorReturn(this, (C3Chart.__proto__ || Object.getPrototypeOf(C3Chart)).apply(this, arguments));
  }

  _createClass(C3Chart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateChart(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.updateChart(newProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroyChart();
    }
  }, {
    key: 'generateChart',
    value: function generateChart(mountNode, config) {
      var newConfig = Object.assign({ bindto: mountNode }, config);
      return _c2.default.generate(newConfig);
    }
  }, {
    key: 'loadNewData',
    value: function loadNewData(data) {
      /* Load new data to the chart */
      this.chart.load(data);
    }
  }, {
    key: 'updateChart',
    value: function updateChart(config) {
      var emptyFunc = function emptyFunc() {};

      var newConfig = {
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

      this.chart = this.generateChart((0, _reactDom.findDOMNode)(this), newConfig);
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
        data: _react2.default.PropTypes.object.isRequired,
        title: _react2.default.PropTypes.object,
        size: _react2.default.PropTypes.object,
        padding: _react2.default.PropTypes.object,
        color: _react2.default.PropTypes.object,
        interaction: _react2.default.PropTypes.object,
        transition: _react2.default.PropTypes.object,
        oninit: _react2.default.PropTypes.func,
        onrendered: _react2.default.PropTypes.func,
        onmouseover: _react2.default.PropTypes.func,
        onmouseout: _react2.default.PropTypes.func,
        onresize: _react2.default.PropTypes.func,
        onresized: _react2.default.PropTypes.func,
        axis: _react2.default.PropTypes.object,
        grid: _react2.default.PropTypes.object,
        regions: _react2.default.PropTypes.array,
        legend: _react2.default.PropTypes.object,
        tooltip: _react2.default.PropTypes.object,
        subchart: _react2.default.PropTypes.object,
        zoom: _react2.default.PropTypes.object,
        point: _react2.default.PropTypes.object,
        line: _react2.default.PropTypes.object,
        area: _react2.default.PropTypes.object,
        bar: _react2.default.PropTypes.object,
        pie: _react2.default.PropTypes.object,
        donut: _react2.default.PropTypes.object,
        gauge: _react2.default.PropTypes.object,
        className: _react2.default.PropTypes.string,
        style: _react2.default.PropTypes.object
      };
    }
  }]);

  return C3Chart;
}(_react2.default.Component);

exports.default = C3Chart;
