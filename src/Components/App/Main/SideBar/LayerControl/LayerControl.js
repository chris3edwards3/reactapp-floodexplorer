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
                id="floodCheck"
                label="Flood Layer"
                checked={props.mapProps.isFloodVisible}
                handleCheckBoxChange={props.handleCheckBoxChange}
            />
            <DropDown
                id="floodDropDown"
                layerGroup="flood"
                defaultValue={props.mapProps.floodLayerName}
                handleDropDown={props.handleDropDown}
            />
            <Slider
                id="floodOpacity"
                defaultValue={props.mapProps.floodOpacity}
                handleSlider={props.handleSlider}
            />

            {/* Additional Layer ***** */}
            <CheckBox
                id="extraCheck"
                label="Additional Layer"
                checked={props.mapProps.isExtraVisible}
                handleCheckBoxChange={props.handleCheckBoxChange}
            />
            <DropDown
                id="extraDropDown"
                layerGroup="extra"
                defaultValue={props.mapProps.extraLayerName}
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
                id="baseMapDropDown"
                layerGroup="baseMap"
                defaultValue={props.mapProps.baseMapName}
                handleDropDown={props.handleDropDown}
            />
        </div>
    )
}

export default LayerControl;