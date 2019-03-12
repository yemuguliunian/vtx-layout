/**
 * 时间沙盒
 */
import React from 'react';
import moment from 'moment';

class TimeBox extends React.Component{

    componentDidMount(){
        this.timer = setInterval(()=>{this.refreshTime()},1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    constructor(props){
        super(props);
        this.state = {
            currentTime:this.getCurrentTime()
        }
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
        const d = new Date();
        return moment().format('YYYY-MM-DD HH:mm:ss');
    }

    render(){
        return (
            <span>
                {`当前时间：${this.state.currentTime}`}
            </span>
        )
    }
}

export default TimeBox;