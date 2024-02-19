import React, { useEffect, useState, useContext } from "react";
import {GState} from 'Router/GState';
import IntroSection from "./IntroSection";
import CompanySection from "./CompanySection";
import WorkSection01 from "./WorkSection01";
import WorkSection02 from "./WorkSection02";
import HomBottom from "./HomBottom";

const HomePresenter = ()=>{
	const [compEl, setCompEl] = useState({});
	const [workEl, setWorkEl] = useState({});
	const {scrollToFn, secID} = useContext(GState);
	const [observeEl, setObserveEl] = useState([]);
	const options = {
		rootMargin : '10px',
		threshold:0.5
	}
	const callback = function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('active');
				observer.unobserve(entry.target);
			}
		});
	}
	const observer = new IntersectionObserver(callback, options);

	const goSectFn = (sectId)=> {
		let offsetT = 0;

		if(sectId === 'company') {
			console.log('compEl.current ======= ', compEl.current);
			offsetT = compEl.current.offsetTop - 60;
		} else if(sectId === 'work') {
			console.log('workEl.current ======= ', workEl.current);
			offsetT = workEl.current.offsetTop;
		}

		if(offsetT === undefined) return;

		scrollToFn({
			top : offsetT,
			smooth : 'smooth',
		})
	}

	useEffect(()=>{
		if(secID === '') return;
		let goSectTimer;
		if(workEl.current !== undefined && compEl.current !== undefined) {
			goSectTimer = setTimeout(function() {
				goSectFn(secID);
			}, 400);
		}


		return ()=>{
			if(goSectTimer) clearTimeout(goSectTimer);
		}

	}, [secID, compEl, workEl]);
	
	useEffect(()=>{
		if(observeEl.length) {
			observeEl.forEach(function(box) {
				observer.observe(box);
			});
		}

		return ()=>{
			if(observeEl.length) {
				observeEl.forEach(function(box) {
					observer.observe(box);
				});
			}

		}
	}, [observeEl]);

	return(
		<div className="contents main">
			{/* S : intro */}
			<IntroSection
				setObserveEl = {setObserveEl}
				/>
			{/* E : intro */}
			{/* S : COMPANY */}
			<CompanySection
				setObserveEl = {setObserveEl}
				setCompEl = {setCompEl}
				/>
			{/* E : COMPANY */}

			{/* S : WORK01 */}
			<WorkSection01
				setWorkEl = {setWorkEl}
			/>
			{/* E : WORK01 */}

			{/* S : WORK02 */}
			<WorkSection02 />
			{/* E : WORK02 */}

			{/* S : HomBottom */}
			<HomBottom />
			{/* E : HomBottom */}


		</div>
	);
}

export default HomePresenter;