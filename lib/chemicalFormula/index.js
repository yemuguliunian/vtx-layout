'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChemicalFormula(props) {
	var _props$value = props.value,
	    value = _props$value === undefined ? '' : _props$value;


	var strNode = null;
	if (/[0-9]/.test(value)) {
		strNode = value.split("").map(function (item, index) {
			if (Number(item)) {
				return _react2.default.createElement(
					'sub',
					{ key: index },
					item
				);
			} else {
				return item;
			}
		});
	} else {
		strNode = value;
	}

	return _react2.default.createElement(
		'span',
		null,
		strNode
	);
} /**
   * 化学式
   */
exports.default = ChemicalFormula;
module.exports = exports['default'];