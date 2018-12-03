'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 高阶组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function getDisplayName(WrappedComponend) {
	return WrappedComponend.displayName || WrappedComponend.name || 'Component';
}

function Container() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var componentClass = params.componentClass;


	return function HOCFactory(WrappedComponend) {
		var _class, _temp;

		return _temp = _class = function (_React$Component) {
			_inherits(HOC, _React$Component);

			function HOC() {
				_classCallCheck(this, HOC);

				return _possibleConstructorReturn(this, (HOC.__proto__ || Object.getPrototypeOf(HOC)).apply(this, arguments));
			}

			_createClass(HOC, [{
				key: 'render',
				value: function render() {
					var _props = this.props,
					    style = _props.style,
					    className = _props.className,
					    top = _props.top,
					    space = _props.space;


					var wrapClass = (0, _classnames3.default)(_defineProperty({}, componentClass, true), className);

					var newStyle = _extends({
						top: top,
						padding: space
					}, style);

					var newProps = {
						className: wrapClass,
						style: newStyle
					};
					return _react2.default.createElement(WrappedComponend, _extends({}, this.props, newProps));
				}
			}]);

			return HOC;
		}(_react2.default.Component), _class.displayName = 'HOC(' + getDisplayName(WrappedComponend) + ')', _temp;
	};
}

Container.propTypes = {
	top: _propTypes2.default.number, // 元素的顶部边缘 
	space: _propTypes2.default.number || _propTypes2.default.string, // 内间距
	style: _propTypes2.default.object
};

exports.default = Container;
module.exports = exports['default'];