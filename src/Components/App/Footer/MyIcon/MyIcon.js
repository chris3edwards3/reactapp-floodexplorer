import React from 'react';
import "./MyIcon.css";
import questionIcon from "./myIconFiles/question.PNG";
import infoIcon from "./myIconFiles/info.PNG";
import legendIcon from "./myIconFiles/legend.PNG";

let iconSource = {
    "info": infoIcon,
    "legend": legendIcon,
    "question": questionIcon,
};

let messageText = {
    "info":
`this is 
the 
information button`,
    "legend": "this is the legend button",
    "question": "this is the question button",
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
                    {/*Modal Content*/}
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
