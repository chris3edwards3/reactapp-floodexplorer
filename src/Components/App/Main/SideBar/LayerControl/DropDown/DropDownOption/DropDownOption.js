import React from "react";

function DropDownOption(props) {
    let text = props.text;
    let value = props.value;

    return (
        <option value={value}>{text}</option>
    )
}

export default DropDownOption;