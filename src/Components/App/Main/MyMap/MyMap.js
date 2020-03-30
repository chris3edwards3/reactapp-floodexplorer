import React from 'react';
import {Map, Marker, Popup} from 'react-leaflet';
import BaseMap from './BaseMap/BaseMaps.js'
import FloodLayer from './FloodLayer/FloodLayer.js';
import ExtraLayer from './ExtraLayer/ExtraLayer.js';
import myFloodLayers from './FloodLayer/myFloodLayers.js';
import './MyMap.css';

function MyMap() {
    let initPosition = [10, 0];
    const initZoom = 3;

    return (
        <div id="MyMap">
            <Map center={initPosition} zoom={initZoom}>
                <BaseMap/>
                <ExtraLayer/>
                <FloodLayer/>

                {/*<Marker position={initPosition} />*/}

            </Map>
        </div>
    )
}

export default MyMap;