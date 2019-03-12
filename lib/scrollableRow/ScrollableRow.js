'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.isTransformSupported = isTransformSupported;
exports.setTransform = setTransform;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

require('./ScrollableRow.less');

var _antd = require('antd');

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * DIV x轴溢出滚动
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FORK rc-tabs/ScrollableTabBarNode.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function isTransformSupported(style) {
    return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

function setTransform(style, v) {
    style.transform = v;
    style.webkitTransform = v;
    style.mozTransform = v;
}

var ScrollableRow = function (_React$Component) {
    _inherits(ScrollableRow, _React$Component);

    function ScrollableRow(props) {
        _classCallCheck(this, ScrollableRow);

        var _this = _possibleConstructorReturn(this, (ScrollableRow.__proto__ || Object.getPrototypeOf(ScrollableRow)).call(this, props));

        _this.getRef = function (name) {
            return _this[name];
        };

        _this.saveRef = function (name) {
            return function (node) {
                if (node) {
                    _this[name] = node;
                }
            };
        };

        _this.setNextPrev = function () {
            var navNode = _this.getRef('nav');
            var navNodeW = navNode.scrollWidth;
            var containerW = _this.getRef('container').offsetWidth;
            var navWrapNodeW = _this.getRef('navWrap').offsetWidth;

            var offset = _this.offset;

            var minOffset = containerW - navNodeW;
            var _this$state = _this.state,
                next = _this$state.next,
                prev = _this$state.prev;

            if (minOffset >= 0) {
                next = false;
                _this.setOffset(0, false);
                offset = 0;
            } else if (minOffset < offset) {
                next = true;
            } else {
                next = false;
                var realOffset = navWrapNodeW - navNodeW;
                _this.setOffset(realOffset, false);
                offset = realOffset;
            }

            if (offset < 0) {
                prev = true;
            } else {
                prev = false;
            }
            _this.setNext(next);
            _this.setPrev(prev);
            return {
                next: next, prev: prev
            };
        };

        _this.setOffset = function (offset) {
            var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var target = Math.min(0, offset);
            if (_this.offset !== target) {
                _this.offset = target;
                var navOffset = {};
                var navStyle = _this.getRef('nav').style;
                var transformSupported = isTransformSupported(navStyle);
                if (transformSupported) {
                    navOffset = {
                        value: 'translate3d(' + target + 'px,0,0)'
                    };
                } else {
                    navOffset = {
                        name: 'left',
                        value: target + 'px'
                    };
                }
                if (transformSupported) {
                    setTransform(navStyle, navOffset.value);
                } else {
                    navStyle[navOffset.name] = navOffset.value;
                }
                if (checkNextPrev) {
                    _this.setNextPrev();
                }
            }
        };

        _this.prev = function (e) {
            var navWrapNodeW = _this.getRef('navWrap').offsetWidth;
            var offset = _this.offset;

            _this.setOffset(offset + navWrapNodeW);
        };

        _this.next = function (e) {
            var navWrapNodeW = _this.getRef('navWrap').offsetWidth;
            var offset = _this.offset;

            _this.setOffset(offset - navWrapNodeW);
        };

        _this.componentWillUnmount = function () {
            _this.resizeEvent = window.removeEventListener('resize', _this.debouncedResize);
        };

        _this.offset = 0;

        _this.state = {
            next: false,
            prev: false
        };
        return _this;
    }

    _createClass(ScrollableRow, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.componentDidUpdate();
            this.debouncedResize = (0, _debounce2.default)(function () {
                _this2.setNextPrev();
            }, 200);
            this.resizeEvent = window.addEventListener('resize', this.debouncedResize);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var props = this.props;
            var nextPrev = this.setNextPrev();
        }
    }, {
        key: 'setPrev',
        value: function setPrev(v) {
            if (this.state.prev !== v) {
                this.setState({
                    prev: v
                });
            }
        }
    }, {
        key: 'setNext',
        value: function setNext(v) {
            if (this.state.next !== v) {
                this.setState({
                    next: v
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames, _classnames2, _classnames3;

            var _state = this.state,
                next = _state.next,
                prev = _state.prev;
            var _props = this.props,
                prefixCls = _props.prefixCls,
                prevIcon = _props.prevIcon,
                nextIcon = _props.nextIcon;


            var showNextPrev = prev || next;

            // 前
            var prevButton = _react2.default.createElement(
                'span',
                {
                    onClick: prev ? this.prev : null,
                    unselectable: 'unselectable',
                    className: (0, _classnames5.default)((_classnames = {}, _defineProperty(_classnames, prefixCls + '-prev', true), _defineProperty(_classnames, prefixCls + '-btn-disabled', !prev), _defineProperty(_classnames, prefixCls + '-arrow-show', showNextPrev), _classnames))
                },
                _react2.default.createElement(
                    'span',
                    { className: prefixCls + '-prev-icon' },
                    _react2.default.createElement(_antd.Icon, { type: 'left' })
                )
            );
            // 后
            var nextButton = _react2.default.createElement(
                'span',
                {
                    onClick: next ? this.next : null,
                    unselectable: 'unselectable',
                    className: (0, _classnames5.default)((_classnames2 = {}, _defineProperty(_classnames2, prefixCls + '-next', true), _defineProperty(_classnames2, prefixCls + '-btn-disabled', !next), _defineProperty(_classnames2, prefixCls + '-arrow-show', showNextPrev), _classnames2))
                },
                _react2.default.createElement(
                    'span',
                    { className: prefixCls + '-next-icon' },
                    _react2.default.createElement(_antd.Icon, { type: 'right' })
                )
            );

            return _react2.default.createElement(
                'div',
                {
                    className: (0, _classnames5.default)((_classnames3 = {}, _defineProperty(_classnames3, prefixCls + '-container', true), _defineProperty(_classnames3, prefixCls + '-container-scrolling', showNextPrev), _classnames3)),
                    ref: this.saveRef('container')
                },
                prevButton,
                nextButton,
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-nav-wrap', ref: this.saveRef('navWrap') },
                    _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-nav-scroll' },
                        _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-nav', ref: this.saveRef('nav') },
                            this.props.children
                        )
                    )
                )
            );
        }
    }]);

    return ScrollableRow;
}(_react2.default.Component);

ScrollableRow.defaultProps = {
    prefixCls: 'scroll-row'
};
exports.default = ScrollableRow;