import React from "react";
import Counter from "./counter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component



const Home = () => {
	let Count = 0;
setInterval(function(){
	const eight = Math.floor(Count/ 10000000)
	const seven = Math.floor(Count/ 1000000)
	const six = Math.floor(Count/ 100000)
	const five = Math.floor(Count/ 10000)
	const four = Math.floor(Count/ 10000)
	const three = Math.floor(Count/ 100)
	const two = Math.floor(Count/ 10)
	const one = Math.floor(Count/ 1)
	Count ++;
	console.log(eight, seven, six, five, four, three, two, one)
	return (
		<Counter digitOne ={one} digitTwo ={two} digitThree ={three} digitFour ={four} digitFive ={five} digitSix ={six} digitSeven ={seven} digitEight ={eight}
			/>
		);

	export default Home;
},1000)
};
	


