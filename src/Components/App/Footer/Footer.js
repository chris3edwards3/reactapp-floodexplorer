//TODO: Add Footer Content

import React from 'react';
import './Footer.css';
import questionIcon from "./icons/question.PNG";
import infoIcon from "./icons/info.PNG";
import legendIcon from "./icons/legend.PNG";

function Footer() {
    return (
        <div id="Footer">
            <div><img src={questionIcon} className="icon" alt="question"/></div>
            <div><img src={infoIcon} className="icon" alt="info"/></div>
            <div><img src={legendIcon} className="icon" alt="legend"/></div>
            <div id="copyright">&copy; 2020 | Chris Edwards | Built for IS-542 at BYU</div>
        </div>
    )
}

export default Footer;