'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * iframe嵌套
 * props
 * src : 规定在 iframe 中显示的文档的 URL
 * top : 元素的顶部边缘
 * style : 行内样式
 * className : className 
 */
function Iframe(props) {
	var src = props.src,
	    className = props.className,
	    style = props.style;


	return _react2.default.createElement(
		'div',
		{
			className: className,
			style: style
		},
		_react2.default.createElement('iframe', {
			src: src,
			width: '100%',
			height: '100%'
		})
	);
}

exports.default = (0, _Container2.default)({ componentClass: "vtx_iframe" })(Iframe);
module.exports = exports['default'];