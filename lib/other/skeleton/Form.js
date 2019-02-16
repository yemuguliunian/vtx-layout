'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * 表单占位图
                                                                                                                                                                                                     */


function Form(props) {
	var prefixCls = props.prefixCls,
	    _props$rows = props.rows,
	    rows = _props$rows === undefined ? 4 : _props$rows,
	    _props$cols = props.cols,
	    cols = _props$cols === undefined ? 2 : _props$cols,
	    _props$gutter = props.gutter,
	    gutter = _props$gutter === undefined ? 8 : _props$gutter;


	var titleCls = (0, _classnames2.default)(prefixCls + '-cell', prefixCls + '-title'),
	    contentCls = (0, _classnames2.default)(prefixCls + '-cell', prefixCls + '-content');

	var itemStyle = {
		width: 100 / cols + '%',
		paddingLeft: gutter,
		paddingRight: gutter
	};
	var itemList = [].concat(_toConsumableArray(Array(rows * cols))).map(function (_, index) {
		return _react2.default.createElement(
			'div',
			{ className: prefixCls + '-item', style: itemStyle, key: index },
			_react2.default.createElement(
				'div',
				{ className: titleCls },
				_react2.default.createElement('div', null)
			),
			_react2.default.createElement(
				'div',
				{ className: contentCls },
				_react2.default.createElement('div', null)
			)
		);
	});

	return _react2.default.createElement(
		'div',
		{ className: '' + prefixCls },
		itemList
	);
}

exports.default = Form;
module.exports = exports['default'];