/**
 * 顶部radio容器样式封装，方便快速使用
 * props 
 * style : 自定义行内样式
 * className : 自定义className
 * space : 内间距
 * top : 规定元素的顶部边缘
 * shadow ： 是否显示阴影
 */
import React from 'react';
import classnames from 'classnames';
import '../assets/style/index.less';

import container from '../Container';
import ScrollableRow from '../other/scrollableRow';

function RadioWrap(props) {

	const {
		style, className, shadow = true
	} = props;

	let wrapClass = classnames(className, {
		['vtx_shadow'] : shadow
	});

	return (
		<div 
			className={wrapClass}
			style={style}
		>
			{/*ScrollableRow 当div内的内容 超出浏览器的可视区域 则可左右滚动切换*/}
			<ScrollableRow>{props.children}</ScrollableRow>
		</div>
	)
}

export default container(
	{componentClass : 'vtx_radioWrap'}
)(RadioWrap); 