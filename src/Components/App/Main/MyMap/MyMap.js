//TODO: Add Keys to elements I create
//Todo: look at Scriptures mapped for idea of how to make multiple instances of a component using a loop

import React from 'react';
import { Map } from 'react-leaflet';
// import { Marker } from 'react-leaflet';
import MapLayer from './MapLayer/MapLayer.js';
import WMSLayer from './WMSLayer/WMSLayer.js';
import myLayerInfo from '../myLayerInfo.js';
import './MyMap.css';

function MyMap(props) {

    // console.log(props.mapProps);
    // BaseMap Info
    let baseMapName = myLayerInfo.baseMap[props.mapProps.baseMapName];

    // Flood Layer Info
    let isFloodVisible = props.mapProps.isFloodVisible;
    let floodLayer = myLayerInfo.flood[props.mapProps.floodLayer];
    let floodOpacity = props.mapProps.floodOpacity;

    // Extra Layer Info
    let isExtraVisible = props.mapProps.isExtraVisible;
    let extraLayer = myLayerInfo.extra[props.mapProps.extraLayer];
    let extraOpacity = props.mapProps.extraOpacity;

    // Initial Map Extents
    let initPosition = [0, 0];
    let initZoom = 2;
    if (isFloodVisible) {
        initPosition = floodLayer.position;
        initZoom = floodLayer.zoom;
    } else if (isExtraVisible) {
        initPosition = extraLayer.position;
        initZoom = extraLayer.zoom;
    }

    return (
        <div id="MyMap">
            <Map center={initPosition} zoom={initZoom}>
                <MapLayer layerName={baseMapName} opacity={1.0} zIndex="0" />
                {isExtraVisible ? <MapLayer layerName={extraLayer} opacity={extraOpacity} zIndex="1" /> : null}
                {isFloodVisible ? <MapLayer layerName={floodLayer} opacity={floodOpacity} zIndex="2" /> : null}

                {/*<Marker position={initPosition} />*/}
            </Map>
        </div>
    )
}

export default MyMap;