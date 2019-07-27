/**
 * 时间沙盒
 */
import React from 'react';
import moment from 'moment';

class TimeBox extends React.Component{

    static defaultProps = {
        format: 'YYYY-MM-DD HH:mm:ss'
    };

    constructor(props){
        super(props);
        this.state = {
            currentTime:this.getCurrentTime()
        }
    }

    componentDidMount(){
        this.timer = setInterval(()=>{this.refreshTime()},1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    refreshTime(){
        this.setState({
            currentTime:this.getCurrentTime()
        })
    }

    formatNum(num){
        if(num<10)
            return `0${num}`;
        else 
            return num;
    }

    getCurrentTime(){
        let { format } = this.props;
        const d = new Date();
        return moment().format(format);
    }

    render(){
        return (
            <span>
                {`${this.state.currentTime}`}
            </span>
        )
    }
}

export default TimeBox;