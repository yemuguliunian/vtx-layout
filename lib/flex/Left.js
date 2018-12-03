'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * 左测布局
                                                                                                                                                                                                                                                                   * props : {
                                                                                                                                                                                                                                                                   *     style // 行内样式
                                                                                                                                                                                                                                                                   *     className // class
                                                                                                                                                                                                                                                                   *     width // 左测宽度（快捷配置）
                                                                                                                                                                                                                                                                   * }
                                                                                                                                                                                                                                                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('../assets/style/index.less');

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _element = require('../util/element');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlexLeft(props) {
    var className = props.className,
        style = props.style,
        width = props.width;


    var newStyle = style;
    if ('width' in props) {
        // 是否兼容flex
        if ((0, _element.isCompatible)('flex')) {
            newStyle = _extends({}, newStyle, {
                flex: '0 0 ' + width + 'px',
                maxWidth: width,
                minWidth: width,
                width: width
            });
        } else {
            newStyle = _extends({}, newStyle, {
                width: width
            });
        }
    }

    return _react2.default.createElement(
        'div',
        {
            style: newStyle,
            className: className
        },
        props.children
    );
}

exports.default = (0, _Container2.default)({ componentClass: 'vtx_flex_left' })(FlexLeft);


FlexLeft.propTypes = {
    width: _propTypes2.default.number
};
module.exports = exports['default'];