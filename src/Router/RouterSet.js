import React from "react";
import {
	BrowserRouter as BRouter,
	Routes,
	Route,
	Navigate,
	useLocation
} from 'react-router-dom';
import Layout from 'Layout/Layout';
import Home from 'Page/Home';
import Contect from 'Page/Contect';


const RouterSet = () => {
	return (
		<BRouter>
			<Layout>
				
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contect" element={<Contect />} />
					<Route path="*" element={<Navigate to="/" replace />}  />
				</Routes>
				
			</Layout>
		</BRouter>
	);
}

export default RouterSet;