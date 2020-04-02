import React from 'react';
import { TileLayer } from 'react-leaflet';

function MapLayer(props) {
    return (
        <TileLayer
            attribution={`&copy <a href=${props.layerName["attLink"]}>${props.layerName["attText"]}</a>`}
            url={props.layerName["url"]}
            opacity={props.opacity}
        />
    )
}

export default MapLayer;