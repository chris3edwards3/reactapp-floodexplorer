import React from 'react';
import './Main.css';
import SideBar from './SideBar/SideBar.js';
import MyMap from './MyMap/MyMap.js';
import myLayerInfo from "./myLayerInfo.js";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            baseMapName: "esriStreet", // Options: esriImagery, esriStreet, esriTopo, osmStandard"
            isFloodVisible: true,
            floodLayer: "comp5", // Options: comp5, comp1, jointABI, jointAHI
            floodOpacity: 1.0, // Between 0 and 1.0
            isExtraVisible: true,
            extraLayer: "pop", // Options: pop
            extraOpacity: 1.0,
        };
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
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

    render() {
        let mapProps = {...this.state};

        return (
            <div id="Main">
                <SideBar
                    mapProps={mapProps}
                    handleCheckBoxChange={this.handleCheckBoxChange}
                />
                <MyMap
                    mapProps={mapProps}
                />
            </div>
        )
    }
}

export default Main;