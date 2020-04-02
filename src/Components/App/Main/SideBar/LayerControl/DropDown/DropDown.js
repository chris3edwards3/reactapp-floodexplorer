import React from "react";
import "./DropDown.css";
import DropDownOption from "./DropDownOption/DropDownOption.js";

function DropDown() {
    return (
        <div>
            <select>
                <option value={1}>{VIIRS 1-day Composite}</option>
            </select>
        </div>
    )
}

export default DropDown;