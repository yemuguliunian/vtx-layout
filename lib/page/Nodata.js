'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * 无数据提示
                                                                                                                                                                                                                                                                   * props
                                                                                                                                                                                                                                                                   * tip : 提示语句
                                                                                                                                                                                                                                                                   */


exports.default = NoData;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

require('../assets/style/index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NoData(props) {
	var _props$tip = props.tip,
	    tip = _props$tip === undefined ? '暂无数据' : _props$tip,
	    src = props.src,
	    className = props.className,
	    style = props.style,
	    tipStyle = props.tipStyle,
	    tipClassName = props.tipClassName;

	// 自定义展示图片

	var infoStyle = style;
	if ('src' in props) {
		infoStyle = _extends({}, infoStyle, {
			background: 'url("' + src + '") no-repeat scroll center 0 transparent'
		});
	}

	// 图片样式
	var wrapClass = (0, _classnames3.default)(_defineProperty({}, "emptyInfo", true), className);

	return _react2.default.createElement(
		'div',
		{ className: "emptyDialog" },
		_react2.default.createElement(
			'div',
			{ className: wrapClass, style: infoStyle },
			_react2.default.createElement(
				'p',
				{ className: tipClassName, style: tipStyle },
				tip
			)
		)
	);
}
module.exports = exports['default'];