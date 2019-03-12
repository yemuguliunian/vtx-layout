/**
 * 化学式
 */
import React from 'react';

function ChemicalFormula(props) {
		
	let { value } = props; 

	let strNode = value.split("").map((item, index) => {
		if(Number(item)) {
			return <sub key={index}>{item}</sub>;
		} else {
			return item;
		}
	})

	return <span>{strNode}</span>
}

export default ChemicalFormula;