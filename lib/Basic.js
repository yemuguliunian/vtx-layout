'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Basic(props) {
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
   * 基础布局
   */
exports.default = Basic;
module.exports = exports['default'];