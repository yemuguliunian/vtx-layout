/**
 * 数字滚动
 */
import React from 'react';

import Immutable from 'immutable';
import round from 'lodash/round';
import {
    evaluateDecimals
} from './util';

class CountUp extends React.Component {

    static defaultProps = {
        count: 0, // 数值
        decimals: 2, // 小数点后几位
        suffix: '', // 后缀
        step: 10, // 1-10
        interval: 30, // 跳动间隔时间
        format: null,
        mode: 'easing' // oneof ['easing', 'simple', 'animate']
    }

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.easing = this.easing.bind(this);
    }

    componentDidMount () {
        if(this.props.count) {
            this.easing(this.state.count, this.props.count);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(!Immutable.is(nextProps.count, this.props.count)) {
            this.easing(this.state.count, nextProps.count);
        }
    }

    // 缓动公式算法，先快后慢
    easing = (current, target) => {
        let self = this;

        let { decimals, step: scale, interval } = self.props;
        let targetDecimals = evaluateDecimals(target);
        targetDecimals = targetDecimals > decimals ? decimals : targetDecimals;
        let compareTarget = round(target, targetDecimals);

        clearInterval(self.timer);
        this.timer = setInterval(function() {
            let step = (target - current)/scale;
            step = step > 0 ? Math.ceil10(step, -targetDecimals) : Math.floor10(step, -targetDecimals);
            current = round(current += step, targetDecimals);
            self.setState({
                count: current
            })
            if (current == compareTarget) {
                clearInterval(self.timer);
            }
        }, interval);
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    render() {

        const {
            suffix = '',
            format
        } = this.props;

        let count = this.state.count;
        if(typeof format == 'function') {
            count = format(count);
        }

        return <span>{`${count}${suffix}`}</span>
    }
}

export default CountUp;