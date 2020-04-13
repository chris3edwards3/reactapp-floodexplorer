import React from "react";
import "./Title.css";

function Title() {
    return (
        <div id="Title">
            <h2>Flood Explorer</h2>
            <h4>This application shows various satellite-based flood maps created as part of the NOAA LEO/GEO Flood
                Mapping Product.
            </h4>
            <h4>Additional layers, such as population density, provide context to the flood
                maps. For more information, click the icons below.
            </h4>
        </div>
    )
}

export default Title;