// maybeTodo: useContext Hook (See the React Docs)

import React, {useState} from "react";
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
    const [baseMapName, setBaseMap] = useState(INITIAL_BASE_MAP);
    const [isFloodVisible, setFloodVisible] = useState(INITIAL_FLOOD_VISIBLE);
    const [floodLayer, setFloodLayer] = useState(INITIAL_FLOOD_LAYER);
    const [floodOpacity, setFloodOpacity] = useState(INITIAL_FLOOD_OPACITY);
    const [isExtraVisible, setExtraVisible] = useState(INITIAL_EXTRA_VISIBLE);
    const [extraLayer, setExtraLayer] = useState(INITIAL_EXTRA_LAYER);
    const [extraOpacity, setExtraOpacity] = useState(INITIAL_EXTRA_OPACITY);

    let mapProps = {
        baseMapName,
        isFloodVisible,
        floodLayer,
        floodOpacity,
        isExtraVisible,
        extraLayer,
        extraOpacity,
    };

    const handleCheckBoxChange = function(id) {
        if (id === "flood") {
            setFloodVisible(prevState => !prevState)
        } else if (id === "extra") {
            setExtraVisible(prevState => !prevState)
        }
    };

    const handleDropDown = function(id) {
        let newLayer = document.getElementById(id).value;
        if (id === "baseMapDropDown") {
            setBaseMap(newLayer)
        } else if (id === "floodDropDown") {
            setFloodLayer(newLayer)
        } else if (id === "extraDropDown") {
            setExtraLayer(newLayer)
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