import React from "react";
import "./Slider.css";

function Slider(props) {
    return (
        <div className="slideContainer">
            <label>Transparency: </label>
            <input
                type="range"
                min="0"
                max="20"
                defaultValue={20 - 20 * props.defaultValue}
                className="slider"
                id={props.id}
                onInput={() => props.handleSlider(props.id)}
            />
        </div>
    )
}

export default Slider;