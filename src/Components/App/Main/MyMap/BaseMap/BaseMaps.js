import React from 'react';
import { TileLayer } from 'react-leaflet';

function BaseMap(props) {
    return (
        <TileLayer
            attribution={`&copy <a href=${props.mapName["attLink"]}>${props.mapName["attText"]}</a>`}
            url={props.mapName["url"]}
        />
    )
}

export default BaseMap;