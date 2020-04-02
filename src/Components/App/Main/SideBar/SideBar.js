import React from 'react';
import './SideBar.css';

import Title from './Title/Title.js';
import LayerControl from './LayerControl/LayerControl.js';
import Legend from './Legend/Legend.js';

function SideBar(props) {
    return (
        <div id="SideBar">
            <Title />
            <LayerControl
                mapProps={props.mapProps}
            />
            <Legend
                mapProps={props.mapProps}
            />
        </div>
    )
}

export default SideBar;