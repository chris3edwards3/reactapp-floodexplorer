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
                defaultValue={props.mapProps.floodLayer}
                handleDropDown={props.handleDropDown}
            />
            <Slider
                id="floodOpacity"
                defaultValue={props.mapProps.floodOpacity}
                handleSlider={props.handleSlider}
            />

            {/* Additional Layer ***** */}
            <CheckBox
                label="Additional Layer"
                id="extra"
                checked={props.mapProps.isExtraVisible}
                handleCheckBoxChange={props.handleCheckBoxChange}
            />
            <DropDown
                id="extra"
                defaultValue={props.mapProps.extraLayer}
                handleDropDown={props.handleDropDown}
            />
            <Slider
                id="extraOpacity"
                defaultValue={props.mapProps.extraOpacity}
                handleSlider={props.handleSlider}
            />

            {/* Base Map ***** */}
            <label className="checkContainer">BaseMap</label>
            <DropDown
                id="baseMap"
                defaultValue={props.mapProps.baseMapName}
                handleDropDown={props.handleDropDown}
            />
        </div>
    )
}

export default LayerControl;