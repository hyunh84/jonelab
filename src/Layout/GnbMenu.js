import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {GState} from 'Router/GState';

const GnbMenu = ({gnbActive, setGnbActive}) => {
	const clickDimFnc = (e)=> {
		if(gnbActive) {
			setGnbActive(false);
		}else{
			setGnbActive(true);
		}
	}
	const clickStopFnc = (e)=> {
		e.stopPropagation();
	}

	return (
		<>
			<nav className={gnbActive ? "gnbWrap active" : "gnbWrap"} onClick={clickDimFnc} aria-hidden={gnbActive ? "false" : "true"}>
				<div className="gnbInner" onClick={clickStopFnc}>
					<ul>
						<li><button type="button" className="menuItem" onClick={clickDimFnc}>Company</button></li>
						<li><button type="button" className="menuItem" onClick={clickDimFnc}>Work</button></li>
						<li><Link to="/contect" className="menuItem" onClick={clickDimFnc}>Contect</Link></li>
					</ul>
					<div className="util">
						<button type="button" className="btnBizDown">회사소개서</button>
					</div>

				</div>
			</nav>
		</>
	);
}

GnbMenu.propTypes = {
	gnbActive: PropTypes.bool.isRequired,
	setGnbActive: PropTypes.func.isRequired,
};

export default GnbMenu;