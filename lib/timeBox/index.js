'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 时间沙盒
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TimeBox = function (_React$Component) {
    _inherits(TimeBox, _React$Component);

    function TimeBox(props) {
        _classCallCheck(this, TimeBox);

        var _this = _possibleConstructorReturn(this, (TimeBox.__proto__ || Object.getPrototypeOf(TimeBox)).call(this, props));

        _this.state = {
            currentTime: _this.getCurrentTime()
        };
        return _this;
    }

    _createClass(TimeBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timer = setInterval(function () {
                _this2.refreshTime();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }
    }, {
        key: 'refreshTime',
        value: function refreshTime() {
            this.setState({
                currentTime: this.getCurrentTime()
            });
        }
    }, {
        key: 'formatNum',
        value: function formatNum(num) {
            if (num < 10) return '0' + num;else return num;
        }
    }, {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
            var format = this.props.format;

            var d = new Date();
            return (0, _moment2.default)().format(format);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                null,
                '' + this.state.currentTime
            );
        }
    }]);

    return TimeBox;
}(_react2.default.Component);

TimeBox.defaultProps = {
    format: 'YYYY-MM-DD HH:mm:ss'
};
exports.default = TimeBox;
module.exports = exports['default'];