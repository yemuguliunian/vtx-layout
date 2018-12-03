/**
 * 立意 ： 为了按钮Icon图表和样式的统一管理
 * props
 * fType : 按钮类型 oneOf ['add', 'view', 'edit', 'delete', 'import', 'export']
 * 其它参考antd Button
 */
import React from 'react';
import classnames from 'classnames';

import { Button } from 'antd';
import { VtxExport } from 'vtx-ui';
const { VtxExport2 } = VtxExport;

function FButton(props) {

	const { 
		fType, ...other
	} = props;

	const btns = {
		'add' : { // 新增
			icon : 'file-add',
			className : 'primary'
		},
		'view' : { // 查看
			icon : 'file-text',
			className : 'view'
		},
		'edit' : { // 修改
			icon : 'edit',
			className : 'primary'
		},
		'delete' : { // 删除
			icon : 'delete',
			className : 'delete'
		},
		'import' : { // 导入
			icon : 'download',
			className : 'primary'
		},
		'export' : { // 导出
			icon : 'upload',
			className : 'primary'
		}
	};

	let btnRender;
	if(fType in btns) {
		const { className } = other;
		let btnClass = classnames(className, btns[fType].className);
		let btnProps = {
			...btns[fType],
			...other,
			className : btnClass
		};
		btnRender = <Button {...btnProps}/>;
	} else {
		switch(fType) {
			case 'export' : 
				btnRender = <VtxExport2 className="primary" {...other}/>;
				break;
			default :
				btnRender = <Button className="primary" {...other}/>;
				break;
		}
	}

	return btnRender;
}

export default FButton;