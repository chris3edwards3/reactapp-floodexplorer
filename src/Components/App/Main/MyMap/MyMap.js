import React from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import './MyMap.css';
import baseMaps from './baseMaps.js'
import floodLayers from './floodLayers.js';
import extraLayers from './extraLayers.js';

function MyMap() {
    let baseMap = baseMaps.esriStreet; //Options: esriImagery, esriStreet, esriTopo, osmStandard
    let floodLayer = floodLayers.comp5; //Options: comp5, comp1, jointABI, jointAHI
    let extraLayer = extraLayers.pop;

    let initPosition = floodLayer["position"];
    const initZoom = floodLayer["zoom"];

    return (
        <div id="MyMap">
            <Map center={initPosition} zoom={initZoom}>
                <TileLayer
                    id="baseMap"
                    attribution={`&copy <a href=${baseMap["attLink"]}>${baseMap["attText"]}</a>`}
                    url={baseMap["url"]}
                />

                <TileLayer
                    id="extraLayer"
                    attribution={`&copy <a href=${extraLayer["attLink"]}>${extraLayer["attText"]}</a>`}
                    url={extraLayer["url"]}
                    opacity="0.0"
                />

                <TileLayer
                    id="floodLayer"
                    attribution={`&copy <a href=${floodLayer["attLink"]}>${floodLayer["attText"]}</a>`}
                    url={floodLayer["url"]}
                    opacity="0.0"
                />

                {/*<Marker position={initPosition} />*/}

            </Map>
        </div>
    )
}

export default MyMap;