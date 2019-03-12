/**
 * 左测布局
 * props : {
 *     style // 行内样式
 *     className // class
 *     width // 左测宽度（快捷配置）
 * }
 */
import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

import container from '../Container';
import { isCompatible } from '../util/element';

function FlexLeft(props) {

	const {
        className, style, width
    } = props;
    
    let newStyle = style;
    if('width' in props) {
        // 是否兼容flex
        if(isCompatible('flex')) {
            newStyle = {
                ...newStyle,
                flex: `0 0 ${width}px`,
                maxWidth: width,
                minWidth: width,
                width: width
            };
        } else {
            newStyle = {
                ...newStyle,
                width : width
            }
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
	{componentClass : 'vtx_flex_left'}
)(FlexLeft);

FlexLeft.propTypes = {
    width : PropTypes.number
}

