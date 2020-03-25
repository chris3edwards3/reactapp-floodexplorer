import React from 'react';
import './Main.css';
import SideBar from './SideBar/SideBar.js';
import MyMap from './MyMap/MyMap.js';

function Main() {
    return (
        <div id="Main">
            <SideBar />
            <MyMap />
        </div>
    )
}

export default Main;