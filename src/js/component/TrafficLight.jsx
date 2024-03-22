import React, { useState } from 'react'
import homestyles from "./homestyles.css"

const TrafficLight = () => {

	const [redColor, setRedColor] = useState(false);
	const [yellowColor, setYellowColor] = useState(false);
	const [greenColor, setGreenColor] = useState(false);
	const [purpleColor, setPurpleColor] = useState(false);

	//color handlers
	const handleClickR = () => {
		setRedColor(!redColor);
		setYellowColor(false);
		setGreenColor(false)
	};
	const handleClickY = () => {
		setYellowColor(!yellowColor);
		setRedColor(false);
		setGreenColor(false);
	};
	const handleClickG = () => {
		setGreenColor(!greenColor);
		setRedColor(false);
		setYellowColor(false);
	};
	const handleClickP = () => {
		setPurpleColor(!purpleColor);
		setRedColor(false);
		setYellowColor(false);
		setGreenColor(false);
	}


	//const color lights on or not

	const redLightOn = () => {
		return (
			<div id="redOn"></div>
		)

	}

	const redLightOff = () => {
		return (
			<div id="red"></div>
		)
	}

	const yellowLightOn = () => {
		return (
			<div id="yellowOn"></div>
		)

	}
	const yellowLightOff = () => {
		return (
			<div id="yellow"></div>
		)
	}
	const greenLightOn = () => {
		return (
			<div id="greenOn"></div>
		)

	}
	const greenLightOff = () => {
		return (
			<div id="green"></div>
		)
	}
	const purpleLightIn = () => {
		return (
			<div id="purple"></div>
		)
	}
	//conditionals applied to each light
	const redLight = () => {
		if (redColor) {
			return redLightOn();
		} else {
			return redLightOff();
		}
	};
	const yellowLight = () => {
		if (yellowColor) {
			return yellowLightOn();
		} else {
			return yellowLightOff();
		}
	};
	const greenLight = () => {
		if (greenColor) {
			return greenLightOn();
		} else {
			return greenLightOff();
		}
	};

	const trafficLightReady = () => {
		return (
			<div className='mt-3'>
				<div className="father rounded mt-3">
					<div className="d-flex justify-content-center" onClick={handleClickR}>{redLight()}</div>
					<div className="d-flex justify-content-center" onClick={handleClickY}>{yellowLight()}</div>
					<div className="d-flex justify-content-center" onClick={handleClickG}>{greenLight()}</div>
					<div className="d-flex justify-content-center" >{purpleColor ? <div></div> : <div>{purpleLightIn()}</div>}</div>
				</div>
				<div className="post">

				</div>
				<div className="position-absolute top-50 start-50 translate-middle mt-5">
					<div>
						<button className="ms-1 mt-5" id="buttonInPost" onClick={handleClickP}></button>
					</div>
				</div>
			</div>
		)
	}
	return (

		<div>{trafficLightReady()}</div>

	);
};

export default TrafficLight