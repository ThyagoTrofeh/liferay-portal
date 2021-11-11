import {useContext} from 'react';

import {AppContext} from '../context/AppContext';
import {setSelectedTrigger} from '../context/actions';

export const useTriggerContext = () => {
	const {
		dispatch,
		state: {selectedTrigger},
	} = useContext(AppContext);

	const isSelected = (label) => {
		return label === selectedTrigger;
	};

	const updateState = (label) => {
		if (label === selectedTrigger) {
			dispatch(setSelectedTrigger(''));
		} else {
			dispatch(setSelectedTrigger(label));
		}
	};

	function scrollTest() {
		// eslint-disable-next-line no-console		
		console.log("Troll01");

		const tip = document.getElementById('tip');
		let lastKnownScrollPosition = 0;
		let ticking = false;

		// eslint-disable-next-line no-console		
		console.log(tip);
	
		function doSomething(scrollPos) {
			if (scrollPos > 223) {
				
				// eslint-disable-next-line no-console		
				console.log(tip + "troll05");
				
				tip.classList.add('.tip-fixed-menu');

			} else {
				
				// eslint-disable-next-line no-console		
				console.log(tip + "troll05");
				
				tip.classList.add('.tip-fixed-menu');

			}
		}
	
		document.addEventListener('scroll', () => {
			lastKnownScrollPosition = window.scrollY;
	
			if (!ticking) {
				window.requestAnimationFrame(() => {

					// eslint-disable-next-line no-console
					console.log(lastKnownScrollPosition);

					// eslint-disable-next-line no-console		
					console.log("Troll03");

					doSomething(lastKnownScrollPosition);
					ticking = false;
				});
	
				ticking = true;
			}
		});
	}

	return {
		isSelected,
		updateState: (...params) => {
			updateState(...params);

			scrollTest()
		},
	};
};
