'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Spin = require('antd/lib/Spin');

var _Spin2 = _interopRequireDefault(_Spin);

require('antd/lib/Spin/style/css');

require('../assets/style/index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * modal body
 * 立意：内容默认最大高度50vh，超过50vh时Y轴滚动，以防body内容过多摸态框溢出屏幕
 * props
 * style : 行内样式
 * className : className
 * loading : 加载动画（应用场景，有时需要在弹出摸态框的同时异步加载某些数据，可加上loading动画）
 */
function ModalBodyWrap(props) {
    var className = props.className,
        style = props.style,
        _props$loading = props.loading,
        loading = _props$loading === undefined ? false : _props$loading;


    return _react2.default.createElement(
        _Spin2.default,
        { spinning: loading },
        _react2.default.createElement(
            'div',
            {
                style: style,
                className: className
            },
            props.children
        )
    );
}

ModalBodyWrap.propTypes = {
    loading: _propTypes2.default.bool
};

exports.default = (0, _Container2.default)({ componentClass: 'vtx_modal_content_5' })(ModalBodyWrap);
module.exports = exports['default'];