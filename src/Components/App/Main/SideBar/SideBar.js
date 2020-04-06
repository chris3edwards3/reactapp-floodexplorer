import React from 'react';
import './SideBar.css';

import Title from './Title/Title.js';
import LayerControl from './LayerControl/LayerControl.js';
import Legend from './Legend/Legend.js';
import PopLegendPNG from "./Legend/PopLegend.png";

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
            <img src={PopLegendPNG} alt="Pop-Legend" width="134" />
        </div>
    )
}

export default SideBar;