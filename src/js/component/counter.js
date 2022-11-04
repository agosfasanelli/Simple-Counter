import React from "react";

let listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Counter = () => {

    return <div className="container-fluid d-inline-flex bg-black mt-3 ms-3 me-3 ">
                <div><i className="fa-regular fa-clock"></i></div>
                <div className="eight text-white">6</div>
                <div className="six text-white">5</div>
                <div className="five text-white">4</div>
                <div className="four text-white">3</div>
                <div className="tree text-white">2</div>
                <div className="two text-white">1</div>
                <div className="one text-white">0</div>
            </div>
}

export default Counter 
//setInterval(function () {element.innerHTML += "Hello"}, 1000);