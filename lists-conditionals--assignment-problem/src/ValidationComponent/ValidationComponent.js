import React from 'react';

const validationComponent = props => {
	let conclusion = null;
	console.log('textLength: ', props.textlength);
	if (props.textlength) {
		conclusion = props.textlength < 5 ? 'text too short' : 'text long enough';
	}

	return <p>{conclusion}</p>;
};

export default validationComponent;
