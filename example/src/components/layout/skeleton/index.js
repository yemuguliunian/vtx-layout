/**
 * 骨架屏
 */
import React from 'react';
import './index.less';

import classnames from 'classnames';

import Form from './Form'; 

function getComponentProps(prop) {
  	if (prop && typeof prop === 'object') {
    	return prop;
  	}
  	return {};
}

function Skeleton(props) {
	
	const {
		prefixCls = 'vtx-skeleton',
		active,
		loading,
		children,
		form = true
	} = props;
	
	function renderSkeleton() {
		if(loading || !('loading' in props)) {
			const hasForm = !!form;

			// Form
			let formNode;
			if(hasForm) {
				const formProps = {
					prefixCls : `${prefixCls}-form`,
					...getComponentProps(form)
				}

				formNode = <Form {...formProps}/>
			}

			const cls = classnames(prefixCls, {
				[`${prefixCls}-active`] : active
			});
			
			return (
				<div className={cls}>
					{formNode}
				</div>
			)
		}

		return children;
	}

	return renderSkeleton();
}

export default Skeleton;