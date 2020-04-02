import React from 'react';
import './LayerControl.css';

function LayerControl(props) {
    // BaseMap Info
    let baseMapName = props.mapProps.baseMapName;

    // Flood Layer Info
    let isFloodVisible = props.mapProps.isFloodVisible;
    let floodLayer = props.mapProps.floodLayer;
    let floodOpacity = props.mapProps.floodOpacity;

    // Extra Layer Info
    let isExtraVisible = props.mapProps.isExtraVisible;
    let extraLayer = props.mapProps.extraLayer;
    let extraOpacity = props.mapProps.extraOpacity;

    // console.log("LayerControl Props:", props);

    return (
        <div id="LayerControl">
            <p><input
                type="checkbox"
                checked={isFloodVisible}
                // onChange={() => console.log("Changed Flood CheckBox")}
                onChange={() => props.handleCheckBoxChange("flood")}
            />Flood Layer</p>

            <div>
                <select
                    // value={floodLayer}
                    onChange={() => console.log("Changed Flood Layer Drop Down")}
                >
                    <option value="comp1">VIIRS 1-day Composite</option>
                    <option value="comp5">VIIRS 5-day Composite</option>
                    <option value="jointABI">Joint VIIRS/ABI</option>
                    <option value="jointAHI">Joint VIIRS/AHI</option>
                </select>
            </div>

            <div>
                <label>Transparency:</label>
                <input type="range" min="0" max="100" value={floodOpacity*100}
                       className="slider" id="floodOpacity"
                       onChange={() => console.log("Changed Flood Opacity")}
                />
            </div>


            <p><input
                type="checkbox"
                checked={isExtraVisible}
                onChange={() => props.handleCheckBoxChange("extra")}
            />Additional Layer</p>

            <div>
                <select
                    // value={extraLayer}
                    onChange={() => console.log("Changed Extra Layer Dropdown")}
                >
                    <option value="pop">Population Density (2015)</option>
                </select>
            </div>

            <div>
                <label>Transparency:</label>
                <input type="range" min="0" max="100" value={extraOpacity*100}
                       className="slider" id="extraOpacity"
                       onChange={() => console.log("Changed Extra Layer Opacity")}
                />
            </div>


            <p>Base Map</p>

            <div>
                <select
                    // value={baseMapName}
                    onChange={() => console.log("Changed BaseMap Dropdown")}
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