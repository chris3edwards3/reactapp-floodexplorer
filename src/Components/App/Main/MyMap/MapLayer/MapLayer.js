import React from "react";
import {TileLayer, WMSTileLayer} from "react-leaflet";

function MapLayer(props) {
    let layerObj = props.layerObj;
    let opacity = props.opacity;

    if (layerObj["type"] === "wmts") {
        return (
            <TileLayer
                attribution={`&copy <a href=${layerObj["attLink"]}>${layerObj["attText"]}</a>`}
                url={layerObj["url"]}
                opacity={opacity}
            />
        )
    } else if (layerObj["type"] === "wms") {
        return (
            <WMSTileLayer
                attribution={`&copy <a href=${layerObj["attLink"]}>${layerObj["attText"]}</a>`}
                url={layerObj["url"]}
                layers={layerObj["layers"]}
                opacity={opacity}
                crossOrigin="false"
                format="image/png"
                transparent="true"
                useCache="true"
            />
        )
    }
}

export default MapLayer;