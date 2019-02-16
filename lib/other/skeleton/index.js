'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * 骨架屏
                                                                                                                                                                                                                                                                               */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.less');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getComponentProps(prop) {
	if (prop && (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object') {
		return prop;
	}
	return {};
}

function Skeleton(props) {
	var _props$prefixCls = props.prefixCls,
	    prefixCls = _props$prefixCls === undefined ? 'vtx-skeleton' : _props$prefixCls,
	    active = props.active,
	    loading = props.loading,
	    children = props.children,
	    _props$form = props.form,
	    form = _props$form === undefined ? true : _props$form;


	function renderSkeleton() {
		if (loading || !('loading' in props)) {
			var hasForm = !!form;

			// Form
			var formNode = void 0;
			if (hasForm) {
				var formProps = _extends({
					prefixCls: prefixCls + '-form'
				}, getComponentProps(form));

				formNode = _react2.default.createElement(_Form2.default, formProps);
			}

			var cls = (0, _classnames3.default)(prefixCls, _defineProperty({}, prefixCls + '-active', active));

			return _react2.default.createElement(
				'div',
				{ className: cls },
				formNode
			);
		}

		return children;
	}

	return renderSkeleton();
}

exports.default = Skeleton;
module.exports = exports['default'];