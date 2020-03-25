import React from 'react';
import './SideBar.css';

import Title from './Title/Title.js';
import MyLayers from './MyLayers/MyLayers.js';
import Legend from './Legend/Legend.js';

function SideBar() {
    return (
        <div id="SideBar">
            <Title />
            <MyLayers />
            <Legend />
        </div>
    )
}

export default SideBar;