import React from 'react';
import { TileLayer } from 'react-leaflet';
import myBaseMaps from './myBaseMaps.js';

function BaseMap() {
    let baseMap = myBaseMaps.esriStreet; //Options: esriImagery, esriStreet, esriTopo, osmStandard

    return (
        <TileLayer
            attribution={`&copy <a href=${baseMap["attLink"]}>${baseMap["attText"]}</a>`}
            url={baseMap["url"]}
        />
    )
}

export default BaseMap;