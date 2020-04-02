import React from 'react';
import { Map } from 'react-leaflet';
// import { Marker } from 'react-leaflet';
import MapLayer from './MapLayer/MapLayer.js';
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
                <MapLayer layerName={baseMapName} opacity={1.0}/>
                {isExtraVisible ? <MapLayer layerName={extraLayer} opacity={extraOpacity} /> : null}
                {isFloodVisible ? <MapLayer layerName={floodLayer} opacity={floodOpacity} /> : null}
                {/*<Marker position={initPosition} />*/}
            </Map>
        </div>
    )
}

export default MyMap;