/**
 * 无数据提示
 * props
 * tip : 提示语句
 */
import React from 'react';
import classnames from 'classnames';
import './index.less';

export default function NoData(props) {

	const { 
		tip = '暂无数据', src, className, style, tipStyle, tipClassName
	} = props;

	// 自定义展示图片
	let infoStyle = style;
	if('src' in props) {
		infoStyle = {
			...infoStyle,
			background: `url("${src}") no-repeat scroll center 0 transparent`
		};
	}

	// 图片样式
	let wrapClass = classnames({
		["emptyInfo"] : true
	}, className);

	return (
		<div className={"emptyDialog"}>
			<div className={wrapClass} style={infoStyle}>
				<p className={tipClassName} style={tipStyle}>{tip}</p>
			</div>
		</div>
	)
}