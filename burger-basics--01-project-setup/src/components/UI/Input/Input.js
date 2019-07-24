import React from 'react';
import classes from './Input.css';

const input = props => {
	let inputElement = null;

	switch (props.inputtype) {
		case 'input':
			inputElement = <input className={classes.InputElement} {...props} />;
			break;
		case 'inputarea':
			inputElement = <textarea className={classes.InputElement} {...props} />;
			break;
		// dropdown, select
		default:
			inputElement = <input className={classes.InputElement} {...props} />;
	}

	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{props.label}</label>
			{inputElement}
		</div>
	);
};

export default input;
