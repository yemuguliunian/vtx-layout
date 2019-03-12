/**
 * 表单占位图
 */
import React from 'react';

import classnames from 'classnames';

function Form(props) {

	const {
		prefixCls, 
		rows = 4, cols = 2,
		gutter = 8
	} = props;
	
	const titleCls = classnames(`${prefixCls}-cell`, `${prefixCls}-title`),
		contentCls = classnames(`${prefixCls}-cell`, `${prefixCls}-content`);

	let itemStyle = {
		width : `${100/cols}%`,
		paddingLeft : gutter,
		paddingRight : gutter
	};
	const itemList = [...Array(rows*cols)].map((_, index) => {
		return (
			<div className={`${prefixCls}-item`} style={itemStyle} key={index}>
				<div className={titleCls}><div/></div>
				<div className={contentCls}><div/></div>
			</div>
		)
	})

	return (
		<div className={`${prefixCls}`}>
			{itemList}
		</div>
	)
}

export default Form;