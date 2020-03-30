import React from 'react';
import { TileLayer } from 'react-leaflet';
import myExtraLayers from "./myExtraLayers.js";

/**
 * @return {null}
 */

function ExtraLayer() {
    let extraLayer = myExtraLayers.pop;
    let isVisible = false;
    let opacity = 0.3;

    if (isVisible) {
        return (
            <TileLayer
                attribution={`&copy <a href=${extraLayer["attLink"]}>${extraLayer["attText"]}</a>`}
                url={extraLayer["url"]}
                opacity={opacity}
            />
        )
    } else {
        return null
    }
}

export default ExtraLayer;