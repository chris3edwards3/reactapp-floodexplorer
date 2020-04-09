import React from "react";
import CheckBox from "./CheckBox/CheckBox";
import DropDown from "./DropDown/DropDown";
import Slider from "./Slider/Slider";
import "./LayerControl.css";

function LayerControl(props) {

    return (
        <div id="LayerControl">

            {/* Flood Layer ***** */}
            <CheckBox
                label="Flood Layer"
                id="flood"
                checked={props.mapProps.isFloodVisible}
                handleCheckBoxChange={props.handleCheckBoxChange}
            />
            <DropDown
                id="flood"
                defaultValue="comp5"
                handleDropDown={props.handleDropDown}
            />
            <Slider id="floodOpacity" handleSlider={props.handleSlider}/>

            {/* Additional Layer ***** */}
            <CheckBox
                label="Additional Layer"
                id="extra"
                checked={props.mapProps.isExtraVisible}
                handleCheckBoxChange={props.handleCheckBoxChange}
            />
            <DropDown
                id="extra"
                defaultValue="pop2020"
                handleDropDown={props.handleDropDown}
            />
            <Slider id="extraOpacity" handleSlider={props.handleSlider}/>

            {/* Base Map ***** */}
            <label className="checkContainer">BaseMap</label>
            <DropDown
                id="baseMap"
                defaultValue="esriStreet"
                handleDropDown={props.handleDropDown}
            />
        </div>
    )
}

export default LayerControl;