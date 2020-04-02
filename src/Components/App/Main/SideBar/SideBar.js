import React from 'react';
import './SideBar.css';

import Title from './Title/Title.js';
import LayerControl from './LayerControl/LayerControl.js';
import Legend from './Legend/Legend.js';

function SideBar() {
    return (
        <div id="SideBar">
            <Title />
            <LayerControl />
            <Legend />
        </div>
    )
}

export default SideBar;