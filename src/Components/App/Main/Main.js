import React, { useState } from "react";
import "./Main.css";
import SideBar from "./SideBar/SideBar";
import MyMap from "./MyMap/MyMap";

const INITIAL_BASE_MAP = "esriStreet"; // Options: esriImagery, esriStreet, esriTopo, osmStandard"
const INITIAL_FLOOD_VISIBLE = true;
const INITIAL_FLOOD_LAYER = "comp5"; // Options: comp5, comp1, jointABI, jointAHI
const INITIAL_FLOOD_OPACITY = 1.0; // Between 0 and 1.0
const INITIAL_EXTRA_VISIBLE = false;
const INITIAL_EXTRA_LAYER = "pop2020"; // Options: pop2020, pop2000, floodHazard, totEcon, propEcon
const INITIAL_EXTRA_OPACITY = 1.0;

function Main() {
    const [baseMapName, setBaseMapName] = useState(INITIAL_BASE_MAP);
    const [isFloodVisible, setFloodVisible] = useState(INITIAL_FLOOD_VISIBLE);
    const [floodLayerName, setFloodLayerName] = useState(INITIAL_FLOOD_LAYER);
    const [floodOpacity, setFloodOpacity] = useState(INITIAL_FLOOD_OPACITY);
    const [isExtraVisible, setExtraVisible] = useState(INITIAL_EXTRA_VISIBLE);
    const [extraLayerName, setExtraLayerName] = useState(INITIAL_EXTRA_LAYER);
    const [extraOpacity, setExtraOpacity] = useState(INITIAL_EXTRA_OPACITY);

    let mapProps = {
        baseMapName,
        isFloodVisible,
        floodLayerName,
        floodOpacity,
        isExtraVisible,
        extraLayerName,
        extraOpacity,
    };

    const handleCheckBoxChange = function(id) {
        if (id === "floodCheck") {
            setFloodVisible(prevState => !prevState)
        } else if (id === "extraCheck") {
            setExtraVisible(prevState => !prevState)
        }
    };

    const handleDropDown = function(id) {
        let newLayerName = document.getElementById(id).value;
        if (id === "baseMapDropDown") {
            setBaseMapName(newLayerName)
        } else if (id === "floodDropDown") {
            setFloodLayerName(newLayerName)
        } else if (id === "extraDropDown") {
            setExtraLayerName(newLayerName)
        }
    };

    const handleSlider = function(id) {
        let newOpacity = 1 - (document.getElementById(id).value) / 20;
        if (id === "floodOpacity") {
            setFloodOpacity(newOpacity)
        } else if (id === "extraOpacity") {
            setExtraOpacity(newOpacity)
        }
    };

    return (
        <div id="Main">
            <SideBar
                mapProps={mapProps}
                handleCheckBoxChange={handleCheckBoxChange}
                handleDropDown={handleDropDown}
                handleSlider={handleSlider}
            />
            <MyMap
                mapProps={mapProps}
            />
        </div>
    )
}

export default Main;