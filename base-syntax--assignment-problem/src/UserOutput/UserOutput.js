import React from 'react';
import './UserOutput.css';

const userOutput = props => {
	return (
		<div className="UserOutput">
			<p>hello {props.name}</p>
			<p>world</p>
		</div>
	);
};

export default userOutput;
