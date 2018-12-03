'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  title处理封装 ReactDocumentTitle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ReactDocumentTitle = function (_React$Component) {
    _inherits(ReactDocumentTitle, _React$Component);

    function ReactDocumentTitle() {
        _classCallCheck(this, ReactDocumentTitle);

        return _possibleConstructorReturn(this, (ReactDocumentTitle.__proto__ || Object.getPrototypeOf(ReactDocumentTitle)).apply(this, arguments));
    }

    _createClass(ReactDocumentTitle, [{
        key: 'setTitle',
        value: function setTitle() {
            var title = this.props.title;

            document.title = title;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setTitle();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.setTitle();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.Children.only(this.props.children);
        }
    }]);

    return ReactDocumentTitle;
}(_react2.default.Component);

exports.default = ReactDocumentTitle;


ReactDocumentTitle.propTypes = {
    title: _propTypes2.default.string.isRequired
};
module.exports = exports['default'];