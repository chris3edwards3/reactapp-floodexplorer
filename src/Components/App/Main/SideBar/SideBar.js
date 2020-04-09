import React from "react";
import "./SideBar.css";
import Title from "./Title/Title";
import LayerControl from "./LayerControl/LayerControl";

function SideBar(props) {
    return (
        <div id="SideBar">
            <Title />
            <LayerControl
                mapProps={props.mapProps}
                handleCheckBoxChange={props.handleCheckBoxChange}
                handleDropDown={props.handleDropDown}
                handleSlider={props.handleSlider}
            />
        </div>
    )
}

export default SideBar;