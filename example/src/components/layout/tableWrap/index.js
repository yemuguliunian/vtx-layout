/**
 * 表格容器样式封装
 * props
 * space : 内间距
 * top : 规定元素的顶部边缘 number
 * style : style样式
 * className : 自定义class名称
 * scrollY : 是否支持Y轴滚动 boolean
 * relative ： 是否相对定位
 * height : 高度
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import container from '../Container';

import './index.less';

function TableWrap(props) {

    const {
        relative,
        height,
        style, className
    } = props;

    let tableClass = classnames({
        ['vtx_tableWrap_a'] : !relative,
        ['vtx_tableWrap_r'] : relative
    }, className);

    let newStyle = style;
    if(relative && 'height' in props) {
        newStyle = {
            ...style,
            height : height
        }
    }

	return (
        <div 
            className={tableClass}
            style={newStyle}
        >
            {props.children}
        </div>
    )
}	

export default container()(TableWrap);

TableWrap.propTypes = {
    height : PropTypes.number
}