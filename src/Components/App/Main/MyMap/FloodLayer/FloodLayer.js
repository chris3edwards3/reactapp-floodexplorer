import React from 'react';
import { TileLayer } from 'react-leaflet';
import myFloodLayers from "./myFloodLayers.js";

/**
 * @return {null}
 */

class FloodLayer extends React.Component {
    constructor() {
        super();
    }
    render() {
        let floodLayer = myFloodLayers.comp5; //Options: comp5, comp1, jointABI, jointAHI
        let isVisible = true;
        let opacity = 0.8;

        if (isVisible) {
            return (
                <TileLayer
                    attribution={`&copy <a href=${floodLayer["attLink"]}>${floodLayer["attText"]}</a>`}
                    url={floodLayer["url"]}
                    opacity={opacity}
                />
            )
        } else {
            return null
        }
    }

}

// function FloodLayer() {
//     let floodLayer = myFloodLayers.comp5; //Options: comp5, comp1, jointABI, jointAHI
//     let isVisible = true;
//     let opacity = 0.8;
//
//     if (isVisible) {
//         return (
//             <TileLayer
//                 attribution={`&copy <a href=${floodLayer["attLink"]}>${floodLayer["attText"]}</a>`}
//                 url={floodLayer["url"]}
//                 opacity={opacity}
//             />
//         )
//     } else {
//         return null
//     }
// }


export default FloodLayer;