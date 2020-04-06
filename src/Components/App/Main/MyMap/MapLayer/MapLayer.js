import React from 'react';
import {TileLayer, WMSTileLayer} from 'react-leaflet';

function MapLayer(props) {
    let layerName = props.layerName;
    let opacity = props.opacity;
    let zIndex = props.zIndex;

    if (layerName["type"] === "wmts") {
        return (
            <TileLayer
                attribution={`&copy <a href=${layerName["attLink"]}>${layerName["attText"]}</a>`}
                url={layerName["url"]}
                opacity={opacity}
                zIndex={zIndex}
            />
        )
    } else if (layerName["type"] === "wms") {
        return (
            <WMSTileLayer
                attribution={`&copy <a href=${layerName["attLink"]}>${layerName["attText"]}</a>`}
                url={layerName["url"]}
                layers={layerName["layers"]}
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