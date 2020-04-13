import React from "react";
import "./MyIcon.css";
import questionIcon from "./myIconFiles/question.PNG";
import aIcon from "./myIconFiles/A.PNG";
import bIcon from "./myIconFiles/B.PNG";
import fIcon from "./myIconFiles/F.PNG";
import messageText from "./messageText";

let iconSource = {
    additional: aIcon,
    baseMap: bIcon,
    flood: fIcon,
    question: questionIcon,
};

class MyIcon extends React.Component {
    constructor() {
        super();
        this.handleIconClick = this.handleIconClick.bind(this);
        this.handleSpanClick = this.handleSpanClick.bind(this);
    }

    handleIconClick() {
        let modal = document.getElementById(this.props.modalId);
        modal.style.display = "block";
    }

    handleSpanClick() {
        let modal = document.getElementById(this.props.modalId);
        modal.style.display = "none";
    }

    render() {
        let modalId = this.props.modalId;

        return (
            <div>
                <img className="icon" src={iconSource[this.props.id]} alt={this.props.id} onClick={this.handleIconClick}/>
                <div id={modalId} className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={this.handleSpanClick}>&times;</span>
                        <p>{messageText[this.props.id]}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyIcon;
