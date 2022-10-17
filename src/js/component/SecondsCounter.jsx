import React from "react";


//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//import font awesome icon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons';

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="bigCounter container-fluid text-center p-5">
			<div className="stopwatch">
			<FontAwesomeIcon icon={faStopwatch} />
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
};


export default SecondsCounter;
