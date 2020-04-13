import React from "react";
import "./Footer.css";
import MyIcon from "./MyIcon/MyIcon";

function Footer() {
    return (
        <div id="Footer">
            <MyIcon id="question" modalId="questionModal" />
            <MyIcon id="flood" modalId="floodModal" />
            <MyIcon id="additional" modalId="additionalModal" />
            <MyIcon id="baseMap" modalId="baseMapModal" />
            <div id="copyright">&copy; 2020 | Chris Edwards | Built for IS-542 at BYU</div>
        </div>
    )
}

export default Footer;