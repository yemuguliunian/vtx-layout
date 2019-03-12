/**
 * 表单基础左右布局
 */
import React from 'react';
import './index.less';

import classnames from 'classnames';

import Basic from '../Basic';
import container from '../Container';

function Form(props) {

	const {
        className, style, labelStyle = {}, labelClass, contentClass, 
        label, labelWidth, required, bold = true
    } = props;

    let newLabelClass = classnames('vtx_form_title', labelClass),
    	newContentClass = classnames('vtx_form_content', contentClass);

    let titleLabelClass = classnames({
    	['vtx_form_title_required'] : required,
    	['vtx_form_title_bold'] : bold
    });

    let newLabelStyle = labelStyle;
    if('labelWidth' in props) {
        newLabelStyle = {
            ...newLabelStyle,
            width : labelWidth
        }
    }

	return (
		<div 
            style={style} 
            className={className}
        >
        	<div className={newLabelClass} style={newLabelStyle}>
        		<label className={titleLabelClass}>{label}</label>
        	</div>
        	<div className={newContentClass}>
        		{props.children}
        	</div>
        </div>
	)
}

export default container(
	{componentClass : 'vtx_form'}
)(Form);