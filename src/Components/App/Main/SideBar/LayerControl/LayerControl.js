//TODO: Display Transparency Value = Transparency: 20

import React from 'react';
import './LayerControl.css';

function LayerControl(props) {
    let isFloodVisible = props.mapProps.isFloodVisible;
    let isExtraVisible = props.mapProps.isExtraVisible;

    return (
        <div id="LayerControl">
            <h5><input
                type="checkbox"
                checked={isFloodVisible}
                onChange={() => props.handleCheckBoxChange("flood")}
            />Flood Layer</h5>

            <div>
                <select
                    id="floodLayerDropDown"
                    defaultValue="comp5"
                    onChange={() => props.handleDropDown("floodLayerDropDown")}
                >
                    <option value="comp1">VIIRS 1-day Composite</option>
                    <option value="comp5">VIIRS 5-day Composite</option>
                    <option value="jointABI">Joint VIIRS/ABI</option>
                    <option value="jointAHI">Joint VIIRS/AHI</option>
                </select>
            </div>

            <div>
                <label>Transparency:</label>
                <input type="range" min="0" max="20" defaultValue="0"
                       className="slider" id="floodOpacity"
                       onInput={() => props.handleSlider("floodOpacity")}
                />
            </div>


            <h5><input
                type="checkbox"
                checked={isExtraVisible}
                onChange={() => props.handleCheckBoxChange("extra")}
            />Additional Layer</h5>

            <div>
                <select
                    id="extraLayerDropDown"
                    onChange={() => props.handleDropDown("extraLayerDropDown")}
                >
                    <option value="pop2020">Population Density (2020)</option>
                    <option value="pop2000">Population Density (2000)</option>
                    <option value="floodHazard">Flood Hazard Frequency and Distribution (2003)</option>
                    <option value="totEcon">Flood Total Economic Loss Risk (2000)</option>
                    <option value="propEcon">Flood Proportional Economic Loss Risk (2000)</option>
                </select>
            </div>

            <div>
                <label>Transparency:</label>
                <input type="range" min="0" max="20" defaultValue="0"
                       className="slider" id="extraOpacity"
                       onChange={() => props.handleSlider("extraOpacity")}
                />
            </div>


            <h5>Base Map</h5>

            <div>
                <select
                    id="baseMapDropDown"
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