/**
 * 页面最外围容器样式封装，方便快速使用
 * 可自定义样式等
 * props 
 * space : 内间距
 * style : 行内样式
 * className : className
 * title : HTML title
 */
import React from 'react';
import PropTypes from 'prop-types';

import './index.less';
import container from '../Container';
import ReactDocumentTitle from '../reactDocumentTitle';

function Page(props) {

	const {
		style, className, title = ""
	} = props;

	return (
		<ReactDocumentTitle title={title}>
			<div 
				className={className}
				style={style}
			>
				{props.children}
			</div>
		</ReactDocumentTitle>
	)
}

Page.propTypes = {
	title : PropTypes.string // HTML title 
};


export default container(
    {componentClass : 'vtx_page'}
)(Page);