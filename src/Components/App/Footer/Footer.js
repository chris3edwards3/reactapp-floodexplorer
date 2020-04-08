//TODO: Add Footer Content

import React from 'react';
import './Footer.css';
import MyIcon from "./MyIcon/MyIcon";
// import questionIcon from "./icons/question.PNG";
// import infoIcon from "./icons/info.PNG";
// import legendIcon from "./icons/legend.PNG";

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

// function Footer() {
//     return (
//         <div id="Footer">
//             <img src={questionIcon} className="icon" alt="question" />
//             <img src={infoIcon} className="icon" alt="info"/>
//             <img src={legendIcon} className="icon" alt="legend"/>
//             <div id="copyright">&copy; 2020 | Chris Edwards | Built for IS-542 at BYU</div>
//         </div>
//     )
// }

export default Footer;