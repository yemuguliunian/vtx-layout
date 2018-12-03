/**
 * 基础布局
 */
import React from 'react';

function Basic(props) {

	const {
        className, style
    } = props;

	return (
        <div 
            style={style} 
            className={className}
        >
            {props.children}
        </div>
    )
}

export default Basic;


