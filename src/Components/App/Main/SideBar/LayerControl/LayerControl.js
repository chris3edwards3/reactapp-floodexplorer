//TODO: Display Transparency Value = Transparency: 20

import React from 'react';
import './LayerControl.css';
import './CheckBox/CheckBox.css';
import './DropDown/DropDown.css';
import './Slider/Slider.css';

function LayerControl(props) {
    let isFloodVisible = props.mapProps.isFloodVisible;
    let isExtraVisible = props.mapProps.isExtraVisible;

    return (
        <div id="LayerControl">
            <label className="checkContainer">Flood Layer
                <input
                    type="checkbox"
                    checked={isFloodVisible}
                    onChange={() => props.handleCheckBoxChange("flood")}
                /><span className="checkMark" />
            </label>
            {/*<h1><input*/}
            {/*    type="checkbox"*/}
            {/*    checked={isFloodVisible}*/}
            {/*    onChange={() => props.handleCheckBoxChange("flood")}*/}
            {/*/>Flood Layer</h1>*/}

            <div className="selectContainer">
                <select
                    id="floodLayerDropDown"
                    className="selectDrop"
                    defaultValue="comp5"
                    onChange={() => props.handleDropDown("floodLayerDropDown")}
                >
                    <option value="comp1">VIIRS 1-day Composite</option>
                    <option value="comp5">VIIRS 5-day Composite</option>
                    <option value="jointABI">Joint VIIRS/ABI</option>
                    <option value="jointAHI">Joint VIIRS/AHI</option>
                </select>
            </div>

            <div className="slideContainer">
                <label>Transparency: </label>
                <input type="range" min="0" max="20" defaultValue="0"
                       className="slider" id="floodOpacity"
                       onInput={() => props.handleSlider("floodOpacity")}
                />
            </div>


            <label className="checkContainer">Additional Layer
                <input
                    type="checkbox"
                    checked={isExtraVisible}
                    onChange={() => props.handleCheckBoxChange("extra")}
                /><span className="checkMark" />
            </label>
            {/*<h1><input*/}
            {/*    type="checkbox"*/}
            {/*    checked={isExtraVisible}*/}
            {/*    onChange={() => props.handleCheckBoxChange("extra")}*/}
            {/*/>Additional Layer</h1>*/}

            <div className="selectContainer">
                <select
                    id="extraLayerDropDown"
                    className="selectDrop"
                    defaultValue="pop2020"
                    onChange={() => props.handleDropDown("extraLayerDropDown")}
                >
                    <option value="pop2020">Population Density (2020)</option>
                    <option value="pop2000">Population Density (2000)</option>
                    <option value="floodHazard">Flood Hazard Freq. & Dist.</option>
                    <option value="totEcon">Total Economic Risk</option>
                    <option value="propEcon">Proportional Economic Risk</option>
                </select>
            </div>

            <div className="slideContainer">
                <label>Transparency: </label>
                <input type="range" min="0" max="20" defaultValue="0"
                       className="slider" id="extraOpacity"
                       onChange={() => props.handleSlider("extraOpacity")}
                />
            </div>


            <label className="checkContainer">BaseMap</label>

            <div className="selectContainer">
                <select
                    id="baseMapDropDown"
                    className="selectDrop"
                    defaultValue="esriStreet"
                    onChange={() => props.handleDropDown("baseMapDropDown")}
                >
                    <option value="esriImagery">ESRI Imagery</option>
                    <option value="esriStreet">ESRI Street</option>
                    <option value="esriTopo">ESRI Topographic</option>
                    <option value="osmStandard">OSM Standard</option>
                </select>
            </div>

        </div>
    )
}

export default LayerControl;