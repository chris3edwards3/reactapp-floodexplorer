import React from 'react';
import {Map, Marker, Popup} from 'react-leaflet';
import BaseMap from './BaseMap/BaseMaps.js'
import MapLayer from './MapLayer/MapLayer.js';
import myLayerInfo from "./myLayerInfo.js";
import './MyMap.css';

function MyMap() {
    // BaseMap Info
    let baseMapName = myLayerInfo.baseMap["esriStreet"]; //Options: esriImagery, esriStreet, esriTopo, osmStandard"

    // Flood Layer Info
    let isFloodVisible = true;
    let floodLayer = myLayerInfo.flood["jointABI"]; //Options: comp5, comp1, jointABI, jointAHI
    let floodOpacity = 0.8;

    // Extra Layer Info
    let isExtraVisible = true;
    let extraLayer = myLayerInfo.extra["pop"]; //Options: pop
    let extraOpacity = 1.0;

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
                <BaseMap mapName={baseMapName}/>
                {isExtraVisible ? <MapLayer layerName={extraLayer} opacity={extraOpacity} /> : null}
                {isFloodVisible ? <MapLayer layerName={floodLayer} opacity={floodOpacity} /> : null}

                {/*<Marker position={initPosition} />*/}

            </Map>
        </div>
    )
}

export default MyMap;