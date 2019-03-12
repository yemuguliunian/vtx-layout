import React from 'react';
import PropTypes from 'prop-types';

import container from '../Container';
import './index.less';

function ItemTitle(props) {

	const {
        className, style, weight
    } = props;
    
    let newStyle = style;
    if('weight' in props) {
        newStyle = {
            ...newStyle,
            fontWeight : weight
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

ItemTitle.propTypes = {
    weight : PropTypes.number || PropTypes.oneOf(['bold', 'normal'])
}

export default container(
	{componentClass : 'vtx_cell_itemTitle'}
)(ItemTitle); 