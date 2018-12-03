/**
 * modal body
 * 立意：内容默认最大高度50vh，超过50vh时Y轴滚动，以防body内容过多摸态框溢出屏幕
 * props
 * style : 行内样式
 * className : className
 * loading : 加载动画（应用场景，有时需要在弹出摸态框的同时异步加载某些数据，可加上loading动画）
 */
import React from 'react';
import PropTypes from 'prop-types';

import container from '../Container';

import '../assets/style/index.less';

function ModalBodyWrap(props) {

	const {
        className, style, loading = false
    } = props;
    
	return (
        <Spin spinning={loading}>
            <div 
                style={style} 
                className={className}
            >
                {props.children}
            </div>
        </Spin>
    )
}

ModalBodyWrap.propTypes = {
    loading : PropTypes.bool
}

export default container(
	{componentClass : 'vtx_modal_content_5'}
)(ModalBodyWrap); 