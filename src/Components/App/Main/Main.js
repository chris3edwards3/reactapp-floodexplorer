import React from 'react';
import './Main.css';
import SideBar from './SideBar/SideBar.js';
import MyMap from './MyMap/MyMap.js';
import myLayerInfo from "./myLayerInfo.js";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            baseMapName: myLayerInfo.baseMap["esriStreet"], //Options: esriImagery, esriStreet, esriTopo, osmStandard"
            isFloodVisible: true,
            floodLayer: myLayerInfo.flood["comp1"], //Options: comp5, comp1, jointABI, jointAHI
            floodOpacity: 0.9, // Between 0 and 1.0
            isExtraVisible: false,
            extraLayer: myLayerInfo.extra["pop"], //Options: pop
            extraOpacity: 0.5,
        }
    }

    render() {
        return (
            <div id="Main">
                <SideBar/>
                <MyMap
                    baseMapName={this.state.baseMapName}
                    isFloodVisible={this.state.isFloodVisible}
                    floodLayer={this.state.floodLayer}
                    floodOpacity={this.state.floodOpacity}
                    isExtraVisible={this.state.isExtraVisible}
                    extraLayer={this.state.extraLayer}
                    extraOpacity={this.state.extraOpacity}
                />
            </div>
        )
    }
}

export default Main;