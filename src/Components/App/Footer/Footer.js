// TODO: Add content to modals

import React from "react";
import "./Footer.css";
import MyIcon from "./MyIcon/MyIcon";

function Footer() {
    return (
        <div id="Footer">
            <MyIcon id="question" modalId="questionModal" />
            <MyIcon id="info" modalId="infoModal" />
            <MyIcon id="legend" modalId="legendModal" />
            <div id="copyright">&copy; 2020 | Chris Edwards | Built for IS-542 at BYU</div>
        </div>
    )
}

export default Footer;