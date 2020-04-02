import React from 'react';
import './Main.css';
import SideBar from './SideBar/SideBar.js';
import MyMap from './MyMap/MyMap.js';
import myLayerInfo from "./myLayerInfo.js";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            mapProps: {
                baseMapName: myLayerInfo.baseMap["esriStreet"], // Options: esriImagery, esriStreet, esriTopo, osmStandard"
                isFloodVisible: true,
                floodLayer: myLayerInfo.flood["jointABI"], // Options: comp5, comp1, jointABI, jointAHI
                floodOpacity: 1.0, // Between 0 and 1.0
                isExtraVisible: true,
                extraLayer: myLayerInfo.extra["pop"], // Options: pop
                extraOpacity: 1.0,
            },

        }
    }

    render() {
        return (
            <div id="Main">
                <SideBar
                    mapProps={this.state.mapProps}
                />
                <MyMap
                    mapProps={this.state.mapProps}
                />
            </div>
        )
    }
}

export default Main;