import React from 'react';
const userInput = props => {
	const style = {
		border: '1px solid red',
		color: 'red'
	};

	return (
		<input
			style={style}
			type="text"
			onChange={props.changed}
			value={props.name}
		/>
	);
};

export default userInput;
