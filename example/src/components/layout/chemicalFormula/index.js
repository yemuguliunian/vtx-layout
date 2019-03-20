/**
 * 化学式
 */
import React from 'react';

function ChemicalFormula(props) {
		
	let { value = '' } = props; 
	
	let strNode = null;
	if(/[0-9]/.test(value)) {
		strNode = value.split("").map((item, index) => {
			if(Number(item)) {
				return <sub key={index}>{item}</sub>;
			} else {
				return item;
			}
		})
		
	} else {
		strNode = value;
	}

	return <span>{strNode}</span>
}

export default ChemicalFormula;