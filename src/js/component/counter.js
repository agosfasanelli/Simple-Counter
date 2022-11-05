import React from "react";
import reactDom from "react-dom";
import propTypes from "prop-types";


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

Counter.prototype = {
    digitSeven: propTypes.number,
    digitSix: propTypes.number,
    digitFive: propTypes.number,
    digitFour: propTypes.number,
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitOne: propTypes.number,
}


export default Counter 
