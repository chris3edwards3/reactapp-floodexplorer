import React from 'react';
import './MyLayers.css';

function MyLayers() {
    return (
        <div id="MyLayers">
            <p className="container"><input type="checkbox" checked="checked"/>Flood Layer</p>
            <div>
                <select id="viirs">
                    <option value="v1d">VIIRS 1-d Composite</option>
                    <option value="v5d">VIIRS 5-d Composite</option>
                    <option value="joint">Joint VIIRS/ABI</option>
                </select>
            </div>
            <p>Transparency</p>
            <div className="slidecontainer">
                <input type="range" min="0" max="100" value="30" className="slider" id="myRange" />
            </div>
            <p className="container"><input type="checkbox" checked="checked"/>Population Density</p>
            <p>Transparency</p>
            <div className="slidecontainer">
                <input type="range" min="0" max="100" value="70" className="slider" id="myRange" />
            </div>
        </div>
    )
}

export default MyLayers;