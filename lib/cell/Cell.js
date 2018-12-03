'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

require('../assets/style/index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Cell(props) {
    var className = props.className,
        style = props.style;


    return _react2.default.createElement(
        'div',
        {
            style: style,
            className: className
        },
        props.children
    );
} /**
   * 行
   */
exports.default = (0, _Container2.default)({ componentClass: 'vtx_cell' })(Cell);
module.exports = exports['default'];