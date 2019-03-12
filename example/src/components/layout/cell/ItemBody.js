import React from 'react';

import container from '../Container';
import './index.less';

function ItemBody(props) {

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

export default container(
	{componentClass : 'vtx_cell_itemBody'}
)(ItemBody); 