import React from "react";
import "./Slider.css";

function Slider() {
    return (
        <div className="slidecontainer">
            <label >Transparency:  </label>
            <input type="range" min="0" max="100" value="70" className="slider" id="myRange" />
        </div>
    )
}

export default Slider;