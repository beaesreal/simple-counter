//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

//import font awesome icon
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faStopwatch} from '@fortawesome/free-solid-svg-icons';

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";
import Buttons from "./component/Buttons.jsx";

//render your react application


SecondsCounter.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};

let counter = 0;

setInterval(function (){
	const four = Math.floor(counter/1000);
	const three = Math.floor(counter/100);
	const two = Math.floor(counter/10);
	const one = Math.floor(counter/1);

	counter++;

	ReactDOM.render(<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector("#app"));
}, 1000);

ReactDOM.render(<Buttons />, document.querySelector("#buttons"));