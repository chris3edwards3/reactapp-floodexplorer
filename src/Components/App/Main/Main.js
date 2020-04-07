// Todo: useContext Hook (See the React Docs)

import React from 'react';
import './Main.css';
import SideBar from './SideBar/SideBar.js';
import MyMap from './MyMap/MyMap.js';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            baseMapName: "esriStreet", // Options: esriImagery, esriStreet, esriTopo, osmStandard"
            isFloodVisible: true,
            floodLayer: "comp5", // Options: comp5, comp1, jointABI, jointAHI
            floodOpacity: 1.0, // Between 0 and 1.0
            isExtraVisible: false,
            extraLayer: "pop2020", // Options: pop2020, pop2000, floodHazard, totEcon, propEcon
            extraOpacity: 1.0,
        };
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleSlider = this.handleSlider.bind(this);
    }

    handleCheckBoxChange(id) {
        if (id === "flood") {
            this.setState(prevState => ({
                isFloodVisible: !prevState.isFloodVisible
            }))
        } else if (id === "extra") {
            this.setState(prevState => ({
                isExtraVisible: !prevState.isExtraVisible
            }))
        }
    }

    handleDropDown(id) {
        let newLayer = document.getElementById(id).value;
        if (id === "baseMapDropDown") {
            this.setState({
                baseMapName: newLayer
            })
        }
        if (id === "floodLayerDropDown") {
            this.setState( {
                floodLayer: newLayer
            })
        } else if (id === "extraLayerDropDown") {
            this.setState({
                extraLayer: newLayer
            })
        }
    }

    handleSlider(id) {
        let newOpacity = 1 - (document.getElementById(id).value) / 20;
        if (id === "floodOpacity") {
            this.setState({
                floodOpacity: newOpacity
            })
        } else if (id === "extraOpacity") {
            this.setState( {
                extraOpacity: newOpacity
            })
        }
    }

    render() {
        let mapProps = {...this.state};

        return (
            <div id="Main">
                <SideBar
                    mapProps={mapProps}
                    handleCheckBoxChange={this.handleCheckBoxChange}
                    handleDropDown={this.handleDropDown}
                    handleSlider={this.handleSlider}
                />
                <MyMap
                    mapProps={mapProps}
                />
            </div>
        )
    }
}

export default Main;