import React, {usedState, useState} from "react";
import "../../styles/index.css"

const TrafficLight= ()=> {
 const [color, setColor]= useState("red")
 const cycleColor = () => {
	if (color === "red") {
		setColor("yellow");
	} else if (color === "yellow") {
		setColor("green");
	} else {
		setColor("red");
	}
};
return(
	<div className= "traffic-light ">
		<div className={`light red ${color==="red"? "glow":""}`}onClick={() => setColor("red")} ></div>
		<div className={`light yellow ${color==="yellow"? "glow":""}`}onClick={() => setColor("yellow")} ></div>
		<div className={`light green ${color==="green"? "glow":""}`}onClick={() => setColor("green")} ></div>
		<button onClick= {cycleColor}>Button</button>
	</div>
)
}
export default TrafficLight;