/**
 * 右侧布局
 * props : {
 *     style // 行内样式
 *     className // class
 *     leftWidth // 与左侧宽度一致结合使用，主要预防不兼容flex布局的情况，需结合Left的width结合使用
 * }
 */
import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

import container from '../Container';
import { isCompatible } from '../util/element';

function FlexRight(props) {

	const {
        className, style, leftWidth
    } = props;
    
    let newStyle = style;
    // 是否支持flex布局 
    // leftWidth即左侧宽度，主要预防不兼容flex布局的情况，需结合Left的width结合使用
    if(!isCompatible('flex') && 'leftWidth' in props) {
        newStyle = {
            marginLeft : leftWidth
        }
    }

	return (
        <div 
            style={newStyle} 
            className={className}
        >
            {props.children}
        </div>
    )
}

export default container(
	{componentClass : 'vtx_flex_right'}
)(FlexRight);

FlexRight.propTypes = {
    leftWidth : PropTypes.number
}

