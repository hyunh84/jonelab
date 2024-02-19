import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from 'Layout/Header';

const Layout = ({children}) => {

	const location = useLocation();
	console.log(location);

	return(
		<>
			<Header />
			<div id="container">
				{children}
			</div>
		</>
	);

}

export default Layout;