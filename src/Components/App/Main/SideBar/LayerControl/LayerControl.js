import React from 'react';
import './LayerControl.css';

function LayerControl() {
    return (
        <div id="LayerControl">
            <p><input type="checkbox" checked="checked"/>Flood Layer</p>
            <div>
                <select>
                    <option value="11">VIIRS 1-day Composite</option>
                    <option value="12">VIIRS 5-day Composite</option>
                    <option value="13">Joint VIIRS/ABI</option>
                    <option value="14">Joint VIIRS/AHI</option>
                </select>
            </div>
            <div>
                <label>Transparency:  </label>
                <input type="range" min="0" max="100" value="30" className="slider" id="myRange" />
            </div>

            <p><input type="checkbox" checked="checked"/>Additional Layer</p>
            <div>
                <select>
                    <option value="21">Population Density (2015)</option>
                </select>
            </div>
            <div>
                <label>Transparency:  </label>
                <input type="range" min="0" max="100" value="70" className="slider" id="myRange" />
            </div>

            <p>Base Map</p>
            <div>
                <select>
                    <option value="31">ESRI Imagery</option>
                    <option value="32">ESRI Street</option>
                    <option value="33">ESRI Topographic</option>
                    <option value="34">OSM Standard</option>
                </select>
            </div>

        </div>
    )
}

export default LayerControl;