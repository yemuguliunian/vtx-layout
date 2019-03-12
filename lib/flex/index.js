'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.less');

var _Basic = require('../Basic');

var _Basic2 = _interopRequireDefault(_Basic);

var _Left = require('./Left');

var _Left2 = _interopRequireDefault(_Left);

var _Right = require('./Right');

var _Right2 = _interopRequireDefault(_Right);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _element = require('../util/element');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 是否兼容flex 兼容和不兼容两套布局样式
var Flex = (0, _Container2.default)({ componentClass: (0, _element.isCompatible)('flex') ? 'vtx_flex_layout' : 'vtx_flex_layout_d' })(_Basic2.default); /**
                                                                                                                                                         * 左右快速布局
                                                                                                                                                         * 这边采用的Flex布局
                                                                                                                                                         * 需考虑是否支持flex布局，故采用两套布局
                                                                                                                                                         */


Flex.Right = _Right2.default;
Flex.Left = _Left2.default;

exports.default = Flex;
module.exports = exports['default'];