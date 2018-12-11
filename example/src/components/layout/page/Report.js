/**
 * 报表页面(iframe嵌套)
 * props
 * src : 规定在 iframe 中显示的文档的 URL
 * top : 元素的顶部边缘
 * style : 行内样式
 * className : className 
 */
import React from 'react';
import PropTypes from 'prop-types';

import container from '../Container';

import '../assets/style/index.less';

function Report(props) {
	
	const { src, className, style } = props;
	
	return (
		<div 
			className={className}
			style={style}
		>
			<iframe 
				src={src}
				width="100%"
				height="100%"
			/>
		</div>
	)	
}

export default container(
	{componentClass : "vtx_report"}
)(Report);