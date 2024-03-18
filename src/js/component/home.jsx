import React, { useState } from "react";
import homestyles from "./homestyles.css"
//include images into your bundle


//create your first component
const Home = () => {

	const [redColor, setRedColor] = useState(false);
	/* const [yellowColor, setYellowColor]= useState(false);
	const [greenColor, setGreenColor]= useState(false); */

	/* 	const handleClick =()=>{
			setRedColor ? redLightOn : redLightOff
		} */
	const handleClick = () => {
		setRedColor(!redColor); 
	};

	const redLightOn = () => {
		<div className="d-flex flex-column text-center border border-dark">
			<button type="button" id="redOn"></button>
		</div>
	}

	const redLightOff = () => {
		<div className="d-flex flex-column text-center border border-dark">
			<button type="button" id="red"></button>
		</div>
	}

	const redLight = () => {
		if (redColor) {
			return redLightOn(); 
		} else {
			return redLightOff(); 
		}
	};

	return (
		<div>
	{redLight()}
			<button className="d-flex flex-column text-center border border-dark" onClick={handleClick}></button>
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







