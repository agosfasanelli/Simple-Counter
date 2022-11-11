//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//render your react application

function Counter(props){
	return <div className="container-fluid">
				<div className="row bg-black mt-3 ms-3 me-3">
					<div className="col-8 mx-auto d-inline-flex text-center">
						<div id="reloj"><i className="fa-regular fa-clock"></i></div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.digitSeven % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.digitSix % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.digitFive % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.digitFour % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.digitThree % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.digitTwo % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.digitOne % 10}</div>
					</div>
				</div>
			</div>
}
	
	Counter.propTypes = {
		digitSeven: propTypes.number,
		digitSix: propTypes.number,
		digitFive: propTypes.number,
		digitFour: propTypes.number,
		digitThree: propTypes.number,
		digitTwo: propTypes.number,
		digitOne: propTypes.number
	}
	let Count = 0;
	setInterval(function(){
		const seven = Math.floor(Count/ 1000000)
		const six = Math.floor(Count/ 100000)
		const five = Math.floor(Count/ 10000)
		const four = Math.floor(Count/ 1000)
		const three = Math.floor(Count/ 100)
		const two = Math.floor(Count/ 10)
		const one = Math.floor(Count/ 1)
		console.log(seven, six, five, four, three, two, one)
		Count ++;	
        ReactDOM.render(
        <Counter
            digitOne ={one} 
            digitTwo ={two} 
            digitThree ={three} 
            digitFour ={four} 
            digitFive ={five} 
            digitSix ={six} 
            digitSeven ={seven} 
            />, document.querySelector("#app"));	
},1000)



