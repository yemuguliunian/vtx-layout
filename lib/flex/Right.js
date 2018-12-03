'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('../assets/style/index.less');

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _element = require('../util/element');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlexRight(props) {
    var className = props.className,
        style = props.style,
        leftWidth = props.leftWidth;


    var newStyle = style;
    // 是否支持flex布局 
    // leftWidth即左侧宽度，主要预防不兼容flex布局的情况，需结合Left的width结合使用
    if (!(0, _element.isCompatible)('flex') && 'leftWidth' in props) {
        newStyle = {
            marginLeft: leftWidth
        };
    }

    return _react2.default.createElement(
        'div',
        {
            style: newStyle,
            className: className
        },
        props.children
    );
} /**
   * 右侧布局
   * props : {
   *     style // 行内样式
   *     className // class
   *     leftWidth // 与左侧宽度一致结合使用，主要预防不兼容flex布局的情况，需结合Left的width结合使用
   * }
   */
exports.default = (0, _Container2.default)({ componentClass: 'vtx_flex_right' })(FlexRight);


FlexRight.propTypes = {
    leftWidth: _propTypes2.default.number
};
module.exports = exports['default'];