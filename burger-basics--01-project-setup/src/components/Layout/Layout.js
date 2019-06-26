import React from 'react';

import Aux from '../../hoc/Auxiliary';

const layout = props => (
	<Aux>
		<div>Toolbar, sidedrawer, backdrop</div>
		<main>{props.children}</main>
	</Aux>
);
