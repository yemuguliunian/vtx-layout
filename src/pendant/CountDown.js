/**
 * 倒计时
 * props
 * count : 计时
 * manual : 是否手动刷新
 * isDestroy : 是否直接销毁定时器（应用场景/例 tab页切换时定期器需销毁）
 * refresh : 刷新回调函数
 */
import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';

import '../assets/style/index.less';

import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/css';
import Tag from 'antd/lib/tag';
import 'antd/lib/tag/style/css';

class CountDown extends React.Component {

	static defaultProps = {
		count : 10,
        manual : true,
        isDestroy : false
	}

    constructor(props) {
        super(props);

        this.state = {
            count : props.count,
            check : true
        };
    }

    componentDidMount(){
        this.timer = setInterval(()=>{this.countDown()},1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    componentWillReceiveProps(nextProps) {
        if(!Immutable.is(this.props.isDestroy, nextProps.isDestroy)) {
            if(nextProps.isDestroy) {
                const { count } = this.props;
                if(this.timer) {
                    clearInterval(this.timer);
                }
                this.setState({
                    count : count
                })
            } else {
                this.timer = setInterval(()=>{this.countDown()},1000);
            }
        }
    }

    countDown(){
        let count = this.state.count - 1;
        let isRefresh = false;
        if( count <= 0 ){
            count = this.props.count;
            if('refresh' in this.props) {
                this.props.refresh();
            }
        }
        this.setState({
            count: count
        })
    }

    refresh = () => {
        if('refresh' in this.props) {
            this.props.refresh();
        }
    }

    handleChange = (e) => {
        const { count } = this.props;
        if(e.target.checked) {
            this.timer = setInterval(()=>{this.countDown()}, 1000);
        } else {
            clearInterval(this.timer);
        }
        this.setState({
            check: e.target.checked,
            count : count
        })
    }

    render() {

        const { check } = this.state;
        const { manual } = this.props;

        return (
            <span>
                {manual && <Tag color="#108ee9" onClick={this.refresh}>手动刷新</Tag>}
                <Checkbox checked={check} onChange={this.handleChange}/>自动刷新
                <span 
                    className='vtx_cd_warn'
                    style={{
                        width : '85px',
                        display : 'inline-block'
                    }}
                >
                    {`${this.state.count}秒后刷新`}
                </span>
            </span>
        );
    }
}

CountDown.propTypes = {
    manual : PropTypes.bool,
    isDestroy : PropTypes.bool,
    count : PropTypes.number,
    refresh : PropTypes.func
}

export default CountDown;