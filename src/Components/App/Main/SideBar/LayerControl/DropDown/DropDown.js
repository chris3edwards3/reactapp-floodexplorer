import React from "react";
import "./DropDown.css";
import myLayerInfo from "../../../MyMap/myLayerInfo";

function DropDown(props) {
    let optObj = myLayerInfo[props.layerGroup];
    let optArray = [];
    for (let [, value] of Object.entries(optObj)) {
        optArray.push(value);
    }

    return (
        <div className="selectContainer">
            <select
                id={props.id}
                className="selectDrop"
                defaultValue={props.defaultValue}
                onChange={() => props.handleDropDown(props.id)}
            >
                {optArray.map( entry => (
                    <option key={entry.shortName+"Opt"} value={entry.shortName}>{entry.longName}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown;