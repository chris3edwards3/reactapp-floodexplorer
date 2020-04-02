import React from 'react';
import { TileLayer } from 'react-leaflet';

function MapLayer(props) {
    let layerName = props.layerName;
    let opacity = props.opacity;

    return (
        <TileLayer
            attribution={`&copy <a href=${layerName["attLink"]}>${layerName["attText"]}</a>`}
            url={layerName["url"]}
            opacity={opacity}
        />
    )
}

export default MapLayer;