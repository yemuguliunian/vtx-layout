'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 404提示页面
 */
function NotFound(props) {
	var title = props.title,
	    content = props.content;


	return _react2.default.createElement(
		'div',
		{ className: 'vtx_404_page' },
		_react2.default.createElement(
			'div',
			{ className: 'middle_box' },
			_react2.default.createElement(
				'h1',
				null,
				'404'
			),
			_react2.default.createElement(
				'h3',
				null,
				title || 'Page Not Found'
			),
			_react2.default.createElement(
				'div',
				null,
				content || 'Sorry, but the page you are looking for has note been found. \n\t\t\t\t\t\tTry checking the URL for error'
			)
		)
	);
}

exports.default = NotFound;
module.exports = exports['default'];