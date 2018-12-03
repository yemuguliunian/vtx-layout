import React from 'react';

import container from '../Container';
import '../assets/style/index.less';

function ItemFooter(props) {

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
	{componentClass : 'vtx_cell_itemFooter'}
)(ItemFooter); 