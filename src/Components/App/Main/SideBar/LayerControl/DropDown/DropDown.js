import React from "react";
import "./DropDown.css";
import myLayerInfo from "../../../MyMap/myLayerInfo.js";

function DropDown(props) {
    let optObj = myLayerInfo[props.id];
    let optArray = [];
    for (let [, value] of Object.entries(optObj)) {
        optArray.push(value);
    }

    return (
        <div className="selectContainer">
            <select
                id={props.id + "DropDown"}
                className="selectDrop"
                defaultValue={props.defaultValue}
                onChange={() => props.handleDropDown(props.id + "DropDown")}
            >
                {optArray.map( entry => (
                    <option key={entry.shortName+"Opt"} value={entry.shortName}>{entry.longName}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown;