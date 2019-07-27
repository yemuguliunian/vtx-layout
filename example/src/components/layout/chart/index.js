/**
 * echart基础封装
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

function Chart(props) {

    const {
        option, style, ...other
    } = props;

    let newOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {           
                type : 'shadow'      
            }
        },
        grid: {
            top : '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            containLabel: true
        },
        ...option
    }

    let chartStyle = {
        height: '100%', 
        width: '100%',
        ...style
    }

    return (
        <ReactEcharts 
            option={newOption}
            notMerge={true}
            lazyUpdate={true}
            style={chartStyle} 
            {...other}
        />
    )
}

export default Chart;