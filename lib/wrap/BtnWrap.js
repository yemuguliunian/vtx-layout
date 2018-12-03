'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../assets/style/index.less');

var _Basic = require('../Basic');

var _Basic2 = _interopRequireDefault(_Basic);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * CURD 头部按钮块容器
 * props
 * style : 行内样式
 * className : className
 * space : 内间距
 * top : 元素的顶部边缘
 */
var BtnWrap = (0, _Container2.default)({ componentClass: "vtx_btn_wrap" })(_Basic2.default);

exports.default = BtnWrap;
module.exports = exports['default'];