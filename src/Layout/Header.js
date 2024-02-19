import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {GState} from 'Router/GState';
import History from 'Router/History';
import GnbMenu from 'Layout/GnbMenu';

const Header = () => {
	const [gnbActive, setGnbActive] = useState(false);
	const [isBack, setIsBack] = useState(false);
	const {setMenu} = useContext(GState);
	const {scrollToFn} = useContext(GState);
	const { pathname, state : locaState } = useLocation();

	//GNB OPEN BUTTON FUNCTION
	const gnbOpenFnc = (e)=>{
		if(gnbActive) {
			setGnbActive(false);
		}else{
			setGnbActive(true);
		}
	}

	
	useEffect(() => {
		setMenu(pathname);
		const histroyEvt = ()=>{
			// console.log('뒤로가기 할 때 수행할 동작을 적는다');
			setIsBack(true);
		}
		const removeHistroyEvt = History.listen(({ action }) => {
			// console.log(action);
			if (action === "POP") {
				histroyEvt();
			}
		});

		if(!isBack) {
			scrollToFn({
				left : 0,
			})
		}
		
		return removeHistroyEvt;
	}, [pathname]);

	return (
		<>
			<header id="header">
				<div className="headerInner">
					<Link to="/*" className="logo"><img src="/resources/images/common/logo.png" alt="j-one LAB" /></Link>
					<button type="button" className={"btnGnbMenu"} onClick={gnbOpenFnc}><em className={'blind'}>전체메뉴 열기</em></button>
				</div>
			</header>

			<GnbMenu
				gnbActive={gnbActive}
				setGnbActive={setGnbActive}
			/>
		</>
	);
}

export default Header;