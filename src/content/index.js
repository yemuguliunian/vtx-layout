/**
 * 内容容器封装
 * 参数
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

function Content(props) {

    const {
        id, className, style, relative = false, scrollY = false, height
    } = props;

    let contentClass = classnames({
        ['vtx_cont_item_a'] : !relative,
        ['vtx_cont_item_r'] : relative,
        ['scrollY'] : scrollY
    }, className);

    let newStyle = style;
    if('height' in props) {
        newStyle = {
            ...newStyle,
            height : height
        }
    }

    return (
        <div 
            id={id}
            style={newStyle} 
            className={contentClass}
        >
            {props.children}
        </div>
    )
}

export default container()(Content);

Content.propTypes = {
    scrollY : PropTypes.bool,
    height : PropTypes.number
}