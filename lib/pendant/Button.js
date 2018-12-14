'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _antd = require('antd');

var _vtxUi = require('vtx-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * 立意 ： 为了按钮Icon图表和样式的统一管理
                                                                                                                                                                                                                              * props
                                                                                                                                                                                                                              * fType : 按钮类型 oneOf ['add', 'view', 'edit', 'delete', 'import', 'export']
                                                                                                                                                                                                                              * 其它参考antd Button
                                                                                                                                                                                                                              */


var VtxExport2 = _vtxUi.VtxExport.VtxExport2;


function FButton(props) {
	var fType = props.fType,
	    other = _objectWithoutProperties(props, ['fType']);

	var btns = {
		'add': { // 新增
			icon: 'file-add',
			className: 'primary'
		},
		'view': { // 查看
			icon: 'file-text',
			className: 'view'
		},
		'edit': { // 修改
			icon: 'edit',
			className: 'primary'
		},
		'delete': { // 删除
			icon: 'delete',
			className: 'delete'
		},
		'import': { // 导入
			icon: 'download',
			className: 'primary'
		}
	};

	var btnRender = void 0;
	if (fType in btns) {
		var className = other.className;

		var btnClass = (0, _classnames2.default)(className, btns[fType].className);
		var btnProps = _extends({}, btns[fType], other, {
			className: btnClass
		});
		btnRender = _react2.default.createElement(_antd.Button, btnProps);
	} else {
		switch (fType) {
			case 'export':
				btnRender = _react2.default.createElement(VtxExport2, _extends({ className: 'primary' }, other));
				break;
			default:
				btnRender = _react2.default.createElement(_antd.Button, _extends({ className: 'primary' }, other));
				break;
		}
	}

	return btnRender;
}

exports.default = FButton;
module.exports = exports['default'];