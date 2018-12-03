'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('../assets/style/index.less');

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _reactDoucmentTitle = require('../other/react-doucment-title.js');

var _reactDoucmentTitle2 = _interopRequireDefault(_reactDoucmentTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Page(props) {
	var style = props.style,
	    className = props.className,
	    _props$title = props.title,
	    title = _props$title === undefined ? "" : _props$title;


	return _react2.default.createElement(
		_reactDoucmentTitle2.default,
		{ title: title },
		_react2.default.createElement(
			'div',
			{
				className: className,
				style: style
			},
			props.children
		)
	);
} /**
   * 页面最外围容器样式封装，方便快速使用
   * 可自定义样式等
   * props 
   * space : 内间距
   * style : 行内样式
   * className : className
   * title : HTML title
   */


Page.propTypes = {
	title: _propTypes2.default.string // HTML title 
};

exports.default = (0, _Container2.default)({ componentClass: 'vtx_page' })(Page);
module.exports = exports['default'];