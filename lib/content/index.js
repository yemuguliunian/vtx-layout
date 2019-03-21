'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * 内容容器封装
                                                                                                                                                                                                                   * 参数
                                                                                                                                                                                                                   * space : 内间距
                                                                                                                                                                                                                   * top : 规定元素的顶部边缘 number
                                                                                                                                                                                                                   * style : style样式
                                                                                                                                                                                                                   * className : 自定义class名称
                                                                                                                                                                                                                   * scrollY : 是否支持Y轴滚动 boolean
                                                                                                                                                                                                                   * relative ： 是否相对定位
                                                                                                                                                                                                                   * height : 高度
                                                                                                                                                                                                                   */


function Content(props) {
    var _classnames;

    var id = props.id,
        className = props.className,
        style = props.style,
        _props$relative = props.relative,
        relative = _props$relative === undefined ? false : _props$relative,
        _props$scrollY = props.scrollY,
        scrollY = _props$scrollY === undefined ? false : _props$scrollY,
        height = props.height;


    var contentClass = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, 'vtx_cont_item_a', !relative), _defineProperty(_classnames, 'vtx_cont_item_r', relative), _defineProperty(_classnames, 'scrollY', scrollY), _classnames), className);

    var newStyle = style;
    if ('height' in props) {
        newStyle = _extends({}, newStyle, {
            height: height
        });
    }

    return _react2.default.createElement(
        'div',
        {
            id: id,
            style: newStyle,
            className: contentClass
        },
        props.children
    );
}

exports.default = (0, _Container2.default)()(Content);


Content.propTypes = {
    scrollY: _propTypes2.default.bool,
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
module.exports = exports['default'];