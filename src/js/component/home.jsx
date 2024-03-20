import React, { useState } from "react";
import homestyles from "./homestyles.css"
import TrafficLight from "./TrafficLight";
//include images into your bundle


//create your first component
const Home = () => {

	const [redColor, setRedColor] = useState(false);
	const [yellowColor, setYellowColor] = useState(false);
	const [greenColor, setGreenColor] = useState(false);

	//color handlers
	const handleClickR = () => {
		setRedColor(!redColor);
	};
	const handleClickY = () => {
		setYellowColor(!yellowColor);
	};
	const handleClickG = () => {
		setGreenColor(!greenColor);
	};

	//const color lights on or not
	const redLightOn = () => {
		return (
			<div id="redOn">
				<div className="btn-danger" type="button"></div>
			</div>
		)

	}

	const redLightOff = () => {
		return (
			<div id="red">
				<div className="btn-warning" type="button" ></div>
			</div>
		)
	}

	const yellowLightOn = () => {
		return (
			<div id="yellowOn">
				<div className="btn-danger" type="button"></div>
			</div>
		)

	}
	const yellowLightOff = () => {
		return (
			<div id="yellow">
				<div className="btn-warning" type="button" ></div>
			</div>
		)
	}
	const greenLightOn = () => {
		return (
			<div id="greenOn">
				<div className="btn-danger" type="button"></div>
			</div>
		)

	}
	const greenLightOff = () => {
		return (
			<div id="green">
				<div className="btn-warning" type="button" ></div>
			</div>
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

	return (
		<div>
			<div className="father rounded">
				<div className="d-flex justify-content-center" onClick={handleClickR}>{redLight()}</div>
				<div className="d-flex justify-content-center" onClick={handleClickY}>{yellowLight()}</div>
				<div className="d-flex justify-content-center" onClick={handleClickG}>{greenLight()}</div>
			</div>
			<div className="post"></div>
		</div>

	);
};

export default Home;
/* const yellowLight =()=>{
	if(yellowLight=false){
		<div className="d-flex flex-column text-center border border-dark">
			<button type="button" id="yellow" oneClick={handleClick}></button>
		</div>
	}{
		<div className="d-flex flex-column text-center border border-dark">
			<button type="button" id="yellowOn" oneClick={handleClick}></button>
		</div>
	}
};
const greenlight =()=>{
	if(greenlight=false){
		<div className="d-flex flex-column text-center border border-dark">
			<button type="button" id="green" oneClick={handleClick}></button>
		</div>
	}{
		<div className="d-flex flex-column text-center border border-dark">
			<button type="button" id="greenOn" oneClick={handleClick}></button>
		</div>
	}
}; */



/* 	
return(
	<div>
		<div className="d-flex flex-column text-center border border-dark">
				<button type="button" id="red" oneClick={handleClick}></button>
			</div>
			<div className="d-flex flex-column text-center border border-dark">
				<button type="button" id="redOn" oneClick={handleClick}></button>
			</div>

			<div className="d-flex flex-column text-center border border-dark">
				<button type="button" id="yellow" oneClick={handleClick}></button>
			</div>
			<div className="d-flex flex-column text-center border border-dark">
				<button type="button" id="yellowOn" oneClick={handleClick}></button>
			</div>

			<div className="d-flex flex-column text-center border border-dark">
				<button type="button" id="green" oneClick={handleClick}></button>
			</div>
			<div className="d-flex flex-column text-center border border-dark">
				<button type="button" id="greenOn" oneClick={handleClick}></button>
			</div>
			<button onClick={change}></button>
	</div>
) */







