import React from 'react';
import PropTypes from 'prop-types';

import container from '../Container';
import './index.less';

function CellItem(props) {

	const {
        className, style, width
    } = props;
    
    let newStyle = style;
    if('width' in props) {
        newStyle = {
            ...newStyle,
            width : width
        };
    }
    
	return (
        <div 
            style={newStyle} 
            className={className}
        >
            {props.children}
        </div>
    )
}

CellItem.propTypes = {
    width : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default container(
	{componentClass : 'vtx_cell_item'}
)(CellItem); 