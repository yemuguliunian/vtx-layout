'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

require('../assets/style/index.less');

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _scrollableRow = require('../other/scrollableRow');

var _scrollableRow2 = _interopRequireDefault(_scrollableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * 顶部radio容器样式封装，方便快速使用
                                                                                                                                                                                                                   * props 
                                                                                                                                                                                                                   * style : 自定义行内样式
                                                                                                                                                                                                                   * className : 自定义className
                                                                                                                                                                                                                   * space : 内间距
                                                                                                                                                                                                                   * top : 规定元素的顶部边缘
                                                                                                                                                                                                                   * shadow ： 是否显示阴影
                                                                                                                                                                                                                   */


function RadioWrap(props) {
	var style = props.style,
	    className = props.className,
	    _props$shadow = props.shadow,
	    shadow = _props$shadow === undefined ? true : _props$shadow;


	var wrapClass = (0, _classnames3.default)(className, _defineProperty({}, 'vtx_shadow', shadow));

	return _react2.default.createElement(
		'div',
		{
			className: wrapClass,
			style: style
		},
		_react2.default.createElement(
			_scrollableRow2.default,
			null,
			props.children
		)
	);
}

exports.default = (0, _Container2.default)({ componentClass: 'vtx_radioWrap' })(RadioWrap);
module.exports = exports['default'];