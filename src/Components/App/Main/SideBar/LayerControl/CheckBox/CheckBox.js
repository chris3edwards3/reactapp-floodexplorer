import React from "react";
import "./CheckBox.css";

function CheckBox() {
    return (
        <div>
            <p className="container"><input type="checkbox" checked="checked"/>Flood Layer<input type="checkbox" checked="checked"/></p>
        </div>
        // <div>
        //     <p className="container"><input type="checkbox" checked="checked"/>Flood Layer</p>
        // </div>
    )
}

export default CheckBox;