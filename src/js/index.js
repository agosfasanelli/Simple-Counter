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
						<div id="recuadros" className="text-white m-3 fw-bold">{props.numberSeven % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.numberSix % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.numberFive % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.numberFour % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.numberThree % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.numberTwo % 10}</div>
						<div id="recuadros" className="text-white m-3 fw-bold">{props.numberOne % 10}</div>
					</div>
				</div>
			</div>
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
		Count = Count + 1 	
		
        ReactDOM.render(
        <Counter
            numberOne ={one} 
            numberTwo ={two} 
            numberThree ={three} 
            numberFour ={four} 
            numberFive ={five} 
            numberSix ={six} 
            numberSeven ={seven} 
            />, document.querySelector("#app"));	
},1000)



