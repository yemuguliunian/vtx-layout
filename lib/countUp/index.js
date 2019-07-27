'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _round = require('lodash/round');

var _round2 = _interopRequireDefault(_round);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 数字滚动
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CountUp = function (_React$Component) {
    _inherits(CountUp, _React$Component);

    function CountUp(props) {
        _classCallCheck(this, CountUp);

        var _this = _possibleConstructorReturn(this, (CountUp.__proto__ || Object.getPrototypeOf(CountUp)).call(this, props));

        _this.easing = function (current, target) {
            var self = _this;

            var _self$props = self.props,
                decimals = _self$props.decimals,
                scale = _self$props.step,
                interval = _self$props.interval;

            var targetDecimals = (0, _util.evaluateDecimals)(target);
            targetDecimals = targetDecimals > decimals ? decimals : targetDecimals;
            var compareTarget = (0, _round2.default)(target, targetDecimals);

            clearInterval(self.timer);
            _this.timer = setInterval(function () {
                var step = (target - current) / scale;
                step = step > 0 ? Math.ceil10(step, -targetDecimals) : Math.floor10(step, -targetDecimals);
                current = (0, _round2.default)(current += step, targetDecimals);
                self.setState({
                    count: current
                });
                if (current == compareTarget) {
                    clearInterval(self.timer);
                }
            }, interval);
        };

        _this.state = {
            count: 0
        };

        _this.easing = _this.easing.bind(_this);
        return _this;
    }

    _createClass(CountUp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.count) {
                this.easing(this.state.count, this.props.count);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!_immutable2.default.is(nextProps.count, this.props.count)) {
                this.easing(this.state.count, nextProps.count);
            }
        }

        // 缓动公式算法，先快后慢

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.timer && clearInterval(this.timer);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$suffix = _props.suffix,
                suffix = _props$suffix === undefined ? '' : _props$suffix,
                format = _props.format;


            var count = this.state.count;
            if (typeof format == 'function') {
                count = format(count);
            }

            return _react2.default.createElement(
                'span',
                null,
                '' + count + suffix
            );
        }
    }]);

    return CountUp;
}(_react2.default.Component);

CountUp.defaultProps = {
    count: 0, // 数值
    decimals: 2, // 小数点后几位
    suffix: '', // 后缀
    step: 10, // 1-10
    interval: 30, // 跳动间隔时间
    format: null,
    mode: 'easing' // oneof ['easing', 'simple', 'animate']
};
exports.default = CountUp;
module.exports = exports['default'];