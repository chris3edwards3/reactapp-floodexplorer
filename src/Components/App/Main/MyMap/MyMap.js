import React from "react";
import {Map} from "react-leaflet";
import MapLayer from "./MapLayer/MapLayer";
import ExtraLegend from "./mapLegends/ExtraLegend";
import FloodLegend from "./mapLegends/FloodLegend";
import myLayerInfo from "./myLayerInfo";
import "./MyMap.css";

function MyMap(props) {

    // BaseMap Info
    let baseMapObj = myLayerInfo.baseMap[props.mapProps.baseMapName];

    // Flood Layer Info
    let isFloodVisible = props.mapProps.isFloodVisible;
    let floodLayerObj = myLayerInfo.flood[props.mapProps.floodLayerName];
    let floodOpacity = props.mapProps.floodOpacity;

    // Extra Layer Info
    let isExtraVisible = props.mapProps.isExtraVisible;
    let extraLayerObj = myLayerInfo.extra[props.mapProps.extraLayerName];
    let extraOpacity = props.mapProps.extraOpacity;

    // Initial Map Extents
    let initPosition = [0, 0];
    let initZoom = 2;
    if (isFloodVisible) {
        initPosition = floodLayerObj.position;
        initZoom = floodLayerObj.zoom;
    } else if (isExtraVisible) {
        initPosition = extraLayerObj.position;
        initZoom = extraLayerObj.zoom;
    }

    return (
        <div id="MyMap">
            <Map center={initPosition} zoom={initZoom}>
                <MapLayer layerObj={baseMapObj} opacity={1.0} />
                {isExtraVisible ? <MapLayer layerObj={extraLayerObj} opacity={extraOpacity} /> : null}
                {isFloodVisible ? <MapLayer layerObj={floodLayerObj} opacity={floodOpacity} /> : null}

                <FloodLegend layerObj={floodLayerObj} id="fL" isVisible={isFloodVisible} key="fL"/>
                <ExtraLegend layerObj={extraLayerObj} id="eL" isVisible={isExtraVisible} key="eL"/>
            </Map>
        </div>
    )
}

export default MyMap;