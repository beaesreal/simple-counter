import React from "react";



//import font awesome icon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons';



//create your first component
const SecondsCounter = ({digitOne, digitTwo, digitThree, digitFour, handlePaused, handleContinued, handleSubtract, handleReset}) => {

	return (
		<div>
		<div className="bigCounter container-fluid text-center p-5">
			<div className="stopwatch">
			<FontAwesomeIcon icon={faStopwatch} />
			</div>
			<div className="four">{digitFour % 10}</div>
			<div className="three">{digitThree % 10}</div>
			<div className="two">{digitTwo % 10}</div>
			<div className="one">{digitOne % 10}</div>	
		</div>
		<div className="timer p-3">
			<div className="col-12 text-center">
				<button className="btn btn-blue text-center m-2" onClick={handleSubtract}>Subtract one ⏪</button>
				<button className="btn btn-blue m-2 start" onClick={handlePaused}>Pause counter ⏸️</button>
				<button className="btn btn-blue m-2" onClick={handleContinued}>Continue counting ⏯️</button>
				<button className="btn btn-danger text-center m-2" onClick={handleReset}><strong> RESET❕</strong></button>
			</div>
		</div>

		</div>
	);
};


export default SecondsCounter;
