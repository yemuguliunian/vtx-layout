'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.less');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Basic = require('../Basic');

var _Basic2 = _interopRequireDefault(_Basic);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * 表单基础左右布局
                                                                                                                                                                                                                   */


function Form(props) {
    var _classnames;

    var className = props.className,
        style = props.style,
        _props$labelStyle = props.labelStyle,
        labelStyle = _props$labelStyle === undefined ? {} : _props$labelStyle,
        labelClass = props.labelClass,
        contentClass = props.contentClass,
        label = props.label,
        labelWidth = props.labelWidth,
        required = props.required,
        _props$bold = props.bold,
        bold = _props$bold === undefined ? true : _props$bold;


    var newLabelClass = (0, _classnames3.default)('vtx_form_title', labelClass),
        newContentClass = (0, _classnames3.default)('vtx_form_content', contentClass);

    var titleLabelClass = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, 'vtx_form_title_required', required), _defineProperty(_classnames, 'vtx_form_title_bold', bold), _classnames));

    var newLabelStyle = labelStyle;
    if ('labelWidth' in props) {
        newLabelStyle = _extends({}, newLabelStyle, {
            width: labelWidth
        });
    }

    return _react2.default.createElement(
        'div',
        {
            style: style,
            className: className
        },
        _react2.default.createElement(
            'div',
            { className: newLabelClass, style: newLabelStyle },
            _react2.default.createElement(
                'label',
                { className: titleLabelClass },
                label
            )
        ),
        _react2.default.createElement(
            'div',
            { className: newContentClass },
            props.children
        )
    );
}

exports.default = (0, _Container2.default)({ componentClass: 'vtx_form' })(Form);
module.exports = exports['default'];