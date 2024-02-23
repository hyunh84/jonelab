import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const GState = React.createContext(null);

// 전역으로 사용할 변수 및 function 주입
const GStateProvider = ({ children }) => {

	// 화면 메뉴 1 menu name defualt home
	const [menu, setMenu] = useState('/');

	// 메인 화면 section ID 값
	const [secID, setSecID] = useState('');

	// scroll move function
	const scrollToFn = (opt) => {
		const options = opt;
		const scrollX = options.left || 0;
		const scrollY = options.top || 0;
		const behavior = options.smooth || 'auto';

		window.scrollTo({
			top : scrollY,
			left : scrollX,
			behavior : behavior,
		});
	}

	const value = {
		menu,
		setMenu,
		secID,
		setSecID,
		scrollToFn,
	};

	
	return <GState.Provider value={value}>{children}</GState.Provider>;
};

GStateProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default GStateProvider;
