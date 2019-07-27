'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echartsForReact = require('echarts-for-react');

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * echart基础封装
                                                                                                                                                                                                                              */


function Chart(props) {
    var option = props.option,
        style = props.style,
        other = _objectWithoutProperties(props, ['option', 'style']);

    var newOption = _extends({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            containLabel: true
        }
    }, option);

    var chartStyle = _extends({
        height: '100%',
        width: '100%'
    }, style);

    return _react2.default.createElement(_echartsForReact2.default, _extends({
        option: newOption,
        notMerge: true,
        lazyUpdate: true,
        style: chartStyle
    }, other));
}

exports.default = Chart;
module.exports = exports['default'];