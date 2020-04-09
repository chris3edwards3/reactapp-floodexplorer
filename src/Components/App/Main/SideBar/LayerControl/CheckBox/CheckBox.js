import React from "react";
import "./CheckBox.css";

function CheckBox(props) {
    return (
        <label className="checkContainer">{props.label}
            <input
                type="checkbox"
                checked={props.checked}
                onChange={() => props.handleCheckBoxChange(props.id)}
            /><span className="checkMark" />
        </label>
    )
}

export default CheckBox;