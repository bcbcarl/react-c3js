'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=require('react'),_react2=_interopRequireDefault(_react),_propTypes=require('prop-types'),_propTypes2=_interopRequireDefault(_propTypes),_reactDom=require('react-dom');Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var billboard,BillboardChart=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'componentDidMount',value:function componentDidMount(){billboard=require('billboard.js').bb,this.updateChart(this.props)}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(a){this.updateChart(a),console.log(3)}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.destroyChart()}},{key:'destroyChart',value:function destroyChart(){try{this.chart=this.chart.destroy()}catch(a){throw new Error('Internal C3 error',a)}}},{key:'generateChart',value:function generateChart(a,b){var c=_extends({bindto:a},b);return billboard.generate(c)}},{key:'loadNewData',value:function loadNewData(a){this.chart.load(a)}},{key:'unloadData',value:function unloadData(){this.chart.unload()}},{key:'updateChart',value:function updateChart(a){this.chart||(this.chart=this.generateChart((0,_reactDom.findDOMNode)(this),a)),a.unloadBeforeLoad&&this.unloadData(),this.loadNewData(a.data)}},{key:'render',value:function render(){var a=this.props.className?' '+this.props.className:'',b=this.props.style?this.props.style:{};return _react2.default.createElement('div',{className:a,style:b})}}],[{key:'displayName',get:function get(){return'BillboardChart'}},{key:'propTypes',get:function get(){return{data:_propTypes2.default.object.isRequired,title:_propTypes2.default.object,size:_propTypes2.default.object,padding:_propTypes2.default.object,color:_propTypes2.default.object,interaction:_propTypes2.default.object,transition:_propTypes2.default.object,oninit:_propTypes2.default.func,onrendered:_propTypes2.default.func,onmouseover:_propTypes2.default.func,onmouseout:_propTypes2.default.func,onresize:_propTypes2.default.func,onresized:_propTypes2.default.func,axis:_propTypes2.default.object,grid:_propTypes2.default.object,regions:_propTypes2.default.array,legend:_propTypes2.default.object,tooltip:_propTypes2.default.object,subchart:_propTypes2.default.object,zoom:_propTypes2.default.object,point:_propTypes2.default.object,line:_propTypes2.default.object,area:_propTypes2.default.object,bar:_propTypes2.default.object,pie:_propTypes2.default.object,donut:_propTypes2.default.object,gauge:_propTypes2.default.object,className:_propTypes2.default.string,style:_propTypes2.default.object,unloadBeforeLoad:_propTypes2.default.bool}}}]),b}(_react2.default.Component);exports.default=BillboardChart;
