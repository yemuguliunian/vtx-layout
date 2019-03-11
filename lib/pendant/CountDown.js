'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('../assets/style/index.less');

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

require('antd/lib/checkbox/style/css');

var _tag = require('antd/lib/tag');

var _tag2 = _interopRequireDefault(_tag);

require('antd/lib/tag/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 倒计时
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * props
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * count : 计时
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * manual : 是否手动刷新
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * isDestroy : 是否直接销毁定时器（应用场景/例 tab页切换时定期器需销毁）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * refresh : 刷新回调函数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var warnStyle = {
    width: '85px',
    display: 'inline-block'
};

var CountDown = function (_React$Component) {
    _inherits(CountDown, _React$Component);

    function CountDown(props) {
        _classCallCheck(this, CountDown);

        var _this = _possibleConstructorReturn(this, (CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call(this, props));

        _this.refresh = function () {
            if ('refresh' in _this.props) {
                _this.props.refresh();
            }
        };

        _this.handleChange = function (e) {
            var count = _this.props.count;

            var checked = e.target.checked;
            if (checked) {
                _this.timer = setInterval(function () {
                    _this.countDown();
                }, 1000);
            } else {
                clearInterval(_this.timer);
            }
            _this.setState({
                check: checked,
                count: count
            });
            // 回调
            if ('onCheck' in _this.props) {
                _this.props.onCheck(checked);
            }
        };

        _this.state = {
            count: props.count,
            check: props.automatic
        };
        return _this;
    }

    _createClass(CountDown, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var check = this.state.check;

            if (check) {
                this.timer = setInterval(function () {
                    _this2.countDown();
                }, 1000);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            if (!_immutable2.default.is(this.props.isDestroy, nextProps.isDestroy)) {
                if (nextProps.isDestroy) {
                    var count = this.props.count;

                    if (this.timer) {
                        clearInterval(this.timer);
                    }
                    this.setState({
                        count: count
                    });
                } else {
                    this.timer = setInterval(function () {
                        _this3.countDown();
                    }, 1000);
                }
            }
        }
    }, {
        key: 'countDown',
        value: function countDown() {
            var count = this.state.count - 1;
            var isRefresh = false;
            if (count <= 0) {
                count = this.props.count;
                if ('refresh' in this.props) {
                    this.props.refresh();
                }
            }
            this.setState({
                count: count
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var check = this.state.check;
            var manual = this.props.manual;


            var warnCls = (0, _classnames3.default)('vtx_cd_warn', _defineProperty({}, 'vtx_cd_unwarn', !check));

            return _react2.default.createElement(
                'span',
                null,
                manual && _react2.default.createElement(
                    _tag2.default,
                    { color: '#108ee9', onClick: this.refresh },
                    '\u624B\u52A8\u5237\u65B0'
                ),
                _react2.default.createElement(_checkbox2.default, { checked: check, onChange: this.handleChange }),
                '\u81EA\u52A8\u5237\u65B0',
                _react2.default.createElement(
                    'span',
                    {
                        className: warnCls,
                        style: warnStyle
                    },
                    this.state.count + '\u79D2\u540E\u5237\u65B0'
                )
            );
        }
    }]);

    return CountDown;
}(_react2.default.Component);

CountDown.defaultProps = {
    count: 10,
    manual: true,
    automatic: false,
    isDestroy: false
};


CountDown.propTypes = {
    manual: _propTypes2.default.bool,
    isDestroy: _propTypes2.default.bool,
    count: _propTypes2.default.number,
    refresh: _propTypes2.default.func
};

exports.default = CountDown;
module.exports = exports['default'];